const { ccclass, property } = cc._decorator;

@ccclass
export default class Steal extends cc.Component {
    @property(cc.Node)
    revenge: cc.Node = null;
    @property(cc.Node)
    item: cc.Node = null;
    @property(cc.Prefab)
    avatar: cc.Prefab = null;
    private wrap: cc.Node;
    private revenBtn: cc.Node = null;
    private stealBtn: cc.Node = null;
    private isExtend: boolean = false;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let down:cc.Node = this.wrap.getChildByName("down");
        let up:cc.Node = this.wrap.getChildByName("up");
        for (let i = 1; i <= 5; i++) {
            let floater = down.getChildByName("red_" + i);
            cc.Tools.popAnim(floater, 10);
        }

        for (let t = 1; t <= 3; t++) {
            let _itemNode = up.getChildByName("item_" + t).getChildByName("avatar");
            cc.Tools.popAnim(_itemNode, 20);
        }
        let tree = this.node.getChildByName("other_tree");
        let closeTree = tree.getChildByName("close_btn");
        closeTree.on(cc.Node.EventType.TOUCH_END, this.closeTree, this);
        let btn = down.getChildByName("btn");
        btn.on(cc.Node.EventType.TOUCH_END, this.getCash, this);
        //延伸按钮
        let extendBtn = this.wrap.getChildByName("middle").getChildByName("extend_btn");
        extendBtn.on(cc.Node.EventType.TOUCH_END, this.extendView, this);
        //刷新次数按钮
        let fresh = up.getChildByName("fresh");
        fresh.on(cc.Node.EventType.TOUCH_END, this.freshList, this);
        cc.Tools.Event.on("revenge", this.revengeBack, this);
        cc.Tools.Event.on("steal", this.stealBack, this);
    }
    extendView(e) {
        let target = e.target
        let middle = this.wrap.getChildByName("middle");
        let bg = middle.getChildByName("bg");
        let scroll = middle.getChildByName("scroll_view");
        let view = scroll.getChildByName("view");
        if (this.isExtend) {
            bg.height = 347;
            view.height = 260;
            target.y = -215;
            this.isExtend = false;
        } else {
            this.isExtend = true;
            bg.height = 637;
            view.height = 520;
            target.y = -510;
        }
    }
    onEnable() {
        this.setLayer();
    }
    setLayer() {
        this.setRevengeList();
        this.setUserLayer();
        this.registerUserEvent();
        let down: cc.Node = this.wrap.getChildByName("down");
        let todayCash: cc.Node = down.getChildByName("today_cash");
        todayCash.active = cc.Tools.wallet.save_amount>0;
        let todayCashText: cc.Label = todayCash.getChildByName("text").getComponent(cc.Label);
        todayCashText.string = cc.Tools.wallet.save_amount;
        let tomorrowCash: cc.Node = down.getChildByName("tomorrow_cash");
        tomorrowCash.active = cc.Tools.wallet.save_freeze_amount>0;
        let tomorrowCashText: cc.Label = tomorrowCash.getChildByName("text").getComponent(cc.Label);
        tomorrowCashText.string = cc.Tools.wallet.save_freeze_amount;
        this.node.getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = cc.Tools.wallet.amount;
        if(cc.Tools.wallet.save_amount<=0&&cc.Tools.wallet.save_freeze_amount>0){
            tomorrowCash.opacity = 255;
        }
        todayCash.stopAllActions();
        todayCash.y = -166;
        todayCash.runAction(cc.sequence(cc.moveBy(0.2, 0, 20).easing(cc.easeOut(3.0)), cc.moveBy(0.2, 0, -20).easing(cc.easeIn(3.0))))
        //如果存钱罐有钱 则出现小手
        let hand: cc.Node = down.getChildByName("hand");
        if (cc.Tools.wallet.save_amount) {
            hand.active = true;
        }
        for (let i = 1; i <= 5; i++) {
            let red = down.getChildByName("red_" + i);
            if (i <= 3) {
                red.active = cc.Tools.wallet.save_amount !== 0
            } else {
                red.active = cc.Tools.wallet.save_freeze_amount !== 0
            }
        }
    }
    freshList(e) {
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>点击太频繁</c></b>`);
            return;
        } else {
            cc.Tools.lock = true;
            setTimeout(() => {
                cc.Tools.lock = false;
            }, 3000)
        }
        let up = this.wrap.getChildByName("up");
        cc.Tools.sendRequest("RefreshStealUser", "GET", {}).then((res) => {
            let items = res.data.items;
            let canSteal = res.data.can_steal;
            let fresh = up.getChildByName("fresh");
            if (!canSteal) {
                cc.Tools.setButtonGary(fresh);
            }
            for (let i = 1; i <= items.length; i++) {
                let itemData = items[i - 1];
                let _itemNode = up.getChildByName("item_" + i)
                this.setUserItem(_itemNode, itemData);
            }
            //倒计时
        }).catch((err) => {
            console.log("cocos----刷新用户列表err--" + err);
        })
    }
    //设置复仇记录
    setRevengeList() {
        this.revenge.destroyAllChildren();
        cc.Tools.sendRequest("RevengeList", "GET", {}).then((res) => {
            let items = res.data.items;
            if (items.length > 0) {
                this.wrap.getChildByName("middle").getChildByName("notSteal").active = false;
                for (let i = 0; i < items.length; i++) {
                    let item = items[i];
                    let _itemNode = cc.instantiate(this.item);
                    _itemNode.active = true;
                    this.revenge.addChild(_itemNode);
                    let avatar = _itemNode.getChildByName("avatar");
                    let avatarJs = avatar.getComponent("Avatar");
                    avatarJs.loadUrl(item.avatar).then((res) => {
                        // console.log("图片加载成功",res);
                        avatarJs.setAvatar(res, item.grade_id || 0)
                    }).catch(err => {
                        console.log("图片加载失败" + err);
                    })
                    avatar.scale = 0.8;
                    //时间
                    let second = Math.floor((new Date().getTime()) / 1000) - item.ts;
                    // console.log("时间---",second);
                    let times = "";
                    if (second > 0) {
                        if (second < 60) {
                            times = second + "秒前"
                        } else if (second > 3600) {
                            times = Math.floor(second / 3600) + "小时前"
                        } else {
                            times = Math.floor(second / 60) + "分前"
                        }
                    }
                    let timeLbl = _itemNode.getChildByName("time_lbl").getComponent(cc.Label);
                    timeLbl.string = times;
                    //user_name
                    let userName = _itemNode.getChildByName("user_name").getComponent(cc.Label);
                    userName.string = item.user_name;
                    //cash
                    let _cashNode = _itemNode.getChildByName("cash").getComponent(cc.Label);
                    _cashNode.string = "-" + item.amount;
                    //btn
                    let btn = _itemNode.getChildByName("btn");
                    if (item.is_revenge) {
                        cc.Tools.setButtonGary(btn);
                        // btn.off(cc.Node.EventType.TOUCH_END,this.showOtherTree,this)
                    }
                    btn["user_id"] = item.user_id;
                    btn["revenge_id"] = item.id;
                    if (i === items.length - 1) {
                        this.registerRevengeEvent();
                    }
                }
            }else{
                this.wrap.getChildByName("middle").getChildByName("notSteal").active = true;
            }
        }).catch((err) => {
            console.log("cocos----复仇列表err--" + err);
        })
    }
    //设置用户本人的偷取信息
    setUserLayer() {
        //偷别人的列表
        let up = this.wrap.getChildByName("up");
        let down = this.wrap.getChildByName("down");
        cc.Tools.sendRequest("StealStat", "GET", {}).then((res) => {
            let items = res.data.items;
            let canSteal = res.data.can_steal;
            let fresh = up.getChildByName("fresh");
            if (!canSteal) {
                cc.Tools.setButtonGary(fresh);
            }
            for (let i = 1; i <= items.length; i++) {
                let itemData = items[i - 1];
                let _itemNode = up.getChildByName("item_" + i)
                this.setUserItem(_itemNode, itemData);
            }
            //刷新次数
            let protectTime = down.getChildByName("protect_time").getComponent(cc.Label);
            //将时间转化成字符串
            if (res.data.count_down > 0) {
                let str = cc.Tools.changeTime(res.data.count_down);
                protectTime.string = `保护时间：${str}`;
            } else {
                protectTime.string = `点击红包树获得红包券`;
            }
            //倒计时
        }).catch((err) => {
            console.log("cocos----用户列表err--" + err);
        })
    }
    //通过数据创建偷取对象
    setUserItem(_itemNode: cc.Node, itemData: any) {
        let _avatarNode = _itemNode.getChildByName("avatar");
        _avatarNode["id"] = itemData.user_id;
        let _btn = _itemNode.getChildByName("btn");
        _btn["id"] = itemData.user_id;
        let avatar: cc.Node;
        if (_avatarNode.children.length > 0) {
            avatar = _avatarNode.children[0];
        } else {
            avatar = cc.instantiate(this.avatar);
            _avatarNode.addChild(avatar);
        }
        avatar.scale = 1.2;
        //加载头像
        let avatarJs = avatar.getComponent("Avatar");
        avatarJs.loadUrl(itemData.avatar).then((res) => {
            // console.log("图片加载成功",res);
            avatarJs.setAvatar(res, itemData.grade_id || 0)
        }).catch(err => {
            console.log("图片加载失败" + err);
        })
        let _cashNode = _itemNode.getChildByName("cash").getComponent(cc.Label);
        _cashNode.string = itemData.save_amount || 0;
    }
    //注册点击事件
    registerUserEvent() {
        let up = this.wrap.getChildByName("up");
        for (let i = 1; i <= 3; i++) {
            let _itemNode = up.getChildByName("item_" + i);
            let avatar = _itemNode.getChildByName("avatar");
            avatar.on(cc.Node.EventType.TOUCH_END, this.stealOther, this)
        }
    }
    //注册复仇事件
    registerRevengeEvent() {
        let chs = this.revenge.children;
        for (let i = 0; i < chs.length; i++) {
            let ch = chs[i];
            let btn = ch.getChildByName("btn");
            btn.on(cc.Node.EventType.TOUCH_END, this.showOtherTree, this)
        }
    }
    //移除点击事件
    removeEvent() {
        let chs = this.revenge.children;
        for (let i = 0; i < chs.length; i++) {
            let ch = chs[i];
            let btn = ch.getChildByName("btn");
            btn.off(cc.Node.EventType.TOUCH_END, this.showOtherTree, this)
        }
        let up = this.wrap.getChildByName("up");
        for (let i = 1; i <= 3; i++) {
            let _itemNode = up.getChildByName("item_" + i);
            let avatar = _itemNode.getChildByName("avatar");
            avatar.off(cc.Node.EventType.TOUCH_END, this.stealOther, this)
        }
    }
    // 存钱罐取钱
    getCash(e) {
        let target = e.target;
        let cash: cc.Label = target.parent.getChildByName("today_cash").getChildByName("text").getComponent(cc.Label);
        let tomorrowCash: cc.Node = target.parent.getChildByName("tomorrow_cash");
        cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            cc.Tools.showJiliAd(15);
        });
        if (cc.Tools.userInfo.save_amount) {
            // 像服务器发送请求
            let sendData = {};
            cc.Tools.sendRequest("SubSaving", "POST", sendData).then((res) => {
                console.log("cocos----取钱返回",JSON.stringify(res));
                cc.Tools.userInfo.save_amount = res.data.amount;
                cc.Tools.userInfo.save_freeze_amount = res.data.freeze_amount;
                cash.string = cc.Tools.userInfo.save_amount;
                cc.tween(cash.node.parent).to(0.2, { scale: 0 }).start();
                tomorrowCash.opacity = 255;
                tomorrowCash.stopAllActions();
                tomorrowCash.y = -172;
                let tomorrow_cash = tomorrowCash.getChildByName("text").getComponent(cc.Label);
                tomorrow_cash.string = cc.Tools.userInfo.save_freeze_amount;
                tomorrowCash.runAction(cc.sequence(cc.moveBy(0.2, 0, 20).easing(cc.easeOut(3.0)), cc.moveBy(0.2, 0, -20).easing(cc.easeIn(3.0))));

                for (let i = 1; i <= 3; i++) {
                    let red = target.parent.getChildByName("red_" + i);
                    red.active = false;
                }
            })
        }
    }
    setOtherTree(data: any) {
        let userInfo = data.user;
        let tree = this.node.getChildByName("other_tree");
        tree.active = true;
        let cash = tree.getChildByName("cash").getComponent(cc.Label);
        let protectTime = tree.getChildByName("protect_time").getComponent(cc.Label);
        let nickName = tree.getChildByName("user_name").getComponent(cc.Label);
        cash.string = data.save_amount;
        //将时间转化成字符串
        if (data.count_down > 0) {
            let str = cc.Tools.changeTime(data.count_down);
            protectTime.string = `保护时间：\n${str}`;
        } else {
            protectTime.string = `点击红包树\n获得红包券`;
        }
        let _avatarNode = tree.getChildByName("avatar");
        let avatar: cc.Node;
        if (_avatarNode.children.length > 0) {
            avatar = _avatarNode.children[0];
        } else {
            avatar = cc.instantiate(this.avatar);
            _avatarNode.addChild(avatar);
        }
        avatar.scale = 1.2;
        //加载头像
        let avatarJs = avatar.getComponent("Avatar");
        avatarJs.loadUrl(userInfo.avatar).then((res) => {
            // console.log("图片加载成功",res);
            avatarJs.setAvatar(res, userInfo.grade_id || 0)
        }).catch(err => {
            console.log("图片加载失败" + err);
        })
        nickName.string = userInfo.user_name;
        let btn = tree.getChildByName("btn");
        btn["protect"] = data.count_down > 0 ? true : false
        btn.on(cc.Node.EventType.TOUCH_END, this.revengeOther, this);
    }
    //复仇
    showOtherTree(e) {
        let target = e.target;
        console.log(`偷取人的id是${target.user_id}`);
        this.revenBtn = target;
        //去别人家
        let sendData = {
            "user_id": target.user_id
        };
        cc.Tools.sendRequest("FriendStat", "POST", sendData).then((res) => {
            console.log("朋友的数据=", res);
            this.setOtherTree(res.data);
        })
    }
    revengeOther(e) {
        let target = e.target;
        // if(target.protect){
        //     cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>用户还在保护期，不可以复仇哦</c></b>`);
        // }else{
        cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            // cc.Tools.adCallBack("100,14")
            cc.Tools.showJiliAd(14);
        });
        // }
    }
    //复仇回来
    revengeBack(ad_id: string) {
        console.log("复仇返回=", ad_id);
        let revengeId = this.revenBtn["revenge_id"];
        let sendData = {
            "user_id": 0,
            "revenge_id": revengeId,
            "ad_id": ad_id
        };
        cc.Tools.sendRequest("DoSteal", "POST", sendData).then((res) => {
            console.log("复仇的数据=", res);
            let data = res.data;
            if (data.is_ok) {
                cc.Tools.setButtonGary(this.revenBtn);
                let tree = this.node.getChildByName("other_tree");
                tree.active = false;
            }
            cc.Tools.emitEvent("getTicket", { ticket: res.data.steal_award, add: 0, type: 2, videoType: 14 });
        })
    }
    stealOther(e) {
        let target = e.target;
        let id = target.id;
        this.stealBtn = target;
        console.log(`点击的头像是${id}`)
        cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            cc.Tools.showJiliAd(13);
            // cc.Tools.adCallBack("100,13")
        });
    }
    stealBack(ad_id: string) {
        console.log("偷取返回=", ad_id);
        let sendData = {
            "user_id": this.stealBtn["id"],
            "revenge_id": 0,
            "ad_id": ad_id
        };
        cc.Tools.sendRequest("DoSteal", "POST", sendData).then((res) => {
            console.log("复仇的数据=", res);
            let data = res.data;
            if (data.is_ok) {
                cc.Tools.setButtonGary(this.stealBtn.parent.getChildByName("btn"));
            }
            cc.Tools.emitEvent("getTicket", { ticket: res.data.steal_award, add: 0, type: 2, videoType: 13 });
        })
    }
    closeTree() {
        this.node.getChildByName("other_tree").active = false;
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
        this.scheduleOnce(() => {
            this.removeEvent();
        })
    }
    // update (dt) {}
}
