// Learn TypeScript:
//  - https://docs.cocos.com/creator/manual/en/scripting/typescript.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

const { ccclass, property } = cc._decorator;

@ccclass
export default class Steal extends cc.Component {

    @property(cc.Label)
    label: cc.Label = null;
    @property(cc.Node)
    revenge: cc.Node = null;
    @property(cc.Node)
    item: cc.Node = null;
    @property(cc.Prefab)
    avatar: cc.Prefab = null;
    private wrap: cc.Node;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let down = this.wrap.getChildByName("down");
        for (let i = 1; i <= 5; i++) {
            let floater = down.getChildByName("red_" + i);
            cc.Tools.popAnim(floater, 20);
        }
        let btn = down.getChildByName("btn");
        btn.on(cc.Node.EventType.TOUCH_END, this.getCash, this);
    }
    onEnable() {
        this.setLayer();
    }
    setLayer() {
        this.setRevengeList();
        this.setUserLayer();
        this.registerRevengeEvent();
        this.registerUserEvent();
        let down = this.wrap.getChildByName("down");
        let cash = down.getChildByName("cash").getComponent(cc.Label);
        cash.string = cc.Tools.userInfo.save_amount;
    }
    //设置复仇记录
    setRevengeList() {
        this.revenge.destroyAllChildren();
        cc.Tools.sendRequest("RevengeList", "GET", {}).then((res) => {
            let items = res.data.items;
            for (let i = 0; i < items.length; i++) {
                let item = items[i];
                let _itemNode = cc.instantiate(this.item);
                _itemNode.active = true;
                this.revenge.addChild(_itemNode);
                let _avatarNode = _itemNode.getChildByName("avatar");
                let avatar = cc.instantiate(this.avatar);
                _avatarNode.addChild(avatar);
                avatar.getComponent("Avatar").setAvatar(item.avatar, item.grade_id || 0);
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
                _cashNode.string = item.amount;
                //btn
                let btn = _itemNode.getChildByName("btn");
                btn["id"] = item.user_id;
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
            for (let i = 1; i <= items.length; i++) {
                let itemData = items[i - 1];
                let _itemNode = up.getChildByName("item_" + i);
                let _avatarNode = _itemNode.getChildByName("avatar");
                let avatar = cc.instantiate(this.avatar);
                _avatarNode.addChild(avatar);
                avatar.getComponent("Avatar").setAvatar(itemData.avatar, itemData.grade_id || 0);
                let _cashNode = _itemNode.getChildByName("cash").getComponent(cc.Label);
                _cashNode.string = itemData.save_amount || 0;
            }
            //刷新次数
            let refreshTimes = up.getChildByName("refresh_times").getComponent(cc.Label);
            refreshTimes.string = `X${res.data.refresh_num}`;
            let protectTime = down.getChildByName("protect_time").getComponent(cc.Label);
            //将时间转化成字符串
            if (res.data.count_down > 0) {
                let str = cc.Tools.changeTime(res.data.count_down);
                protectTime.string = `保护时间：${str}`;
            } else {
                protectTime.node.active = false;
                protectTime.string = `点击红包树获得红包券`;
            }
            //倒计时
        }).catch((err) => {
            console.log("cocos----用户列表err--" + err);
        })
    }
    //注册点击事件
    registerUserEvent(){
        let up = this.wrap.getChildByName("up");
        for (let i = 1; i <= 3; i++) {
            let _itemNode = up.getChildByName("item_" + i);
            let btn = _itemNode.getChildByName("btn");
            btn.on(cc.Node.EventType.TOUCH_END,this.refreshBtn,this)
            let avatar = _itemNode.getChildByName("avatar");
            avatar.on(cc.Node.EventType.TOUCH_END,this.clickAvatar,this)
        }
    }
     //注册复仇事件
     registerRevengeEvent(){
        let chs = this.revenge.children;
        for(let i=0;i<chs.length;i++){
            let ch = chs[i];
            let btn = ch.getChildByName("btn");
            btn.on(cc.Node.EventType.TOUCH_END,this.stealOther,this)
        }
    }
    //移除点击事件
    removeEvent(){
        let chs = this.revenge.children;
        for(let i=0;i<chs.length;i++){
            let ch = chs[i];
            let btn = ch.getChildByName("btn");
            btn.off(cc.Node.EventType.TOUCH_END,this.stealOther,this)
        }
        let up = this.wrap.getChildByName("up");
        for (let i = 1; i <= 3; i++) {
            let _itemNode = up.getChildByName("item_" + i);
            let btn = _itemNode.getChildByName("btn");
            btn.off(cc.Node.EventType.TOUCH_END,this.refreshBtn,this)
            let avatar = _itemNode.getChildByName("avatar");
            avatar.off(cc.Node.EventType.TOUCH_END,this.clickAvatar,this)
        }
    }
    // 存钱罐取钱
    getCash(e) {
        let target = e.target;
        let cash = target.parent.getChildByName("cash").getComponent(cc.Label);
        cc.Tools.showTips(this.node.parent,`<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(()=>{
            cc.Tools.showJiliAd(15);
        });
        if (cc.Tools.userInfo.save_amount) {
            // 像服务器发送请求
            let sendData = {};
            cc.Tools.sendRequest("SubSaving", "POST", sendData).then((res) => {
                cc.Tools.userInfo.save_amount = res.data.amount;
                cc.Tools.userInfo.save_freeze_amount = res.data.freeze_amount;
                cash.string = cc.Tools.userInfo.save_amount+cc.Tools.userInfo.save_freeze_amount;
            })
        }
    }
    stealOther(e){
        let target = e.target;
        console.log(`偷取人的id是${target.id}`)
    }
    refreshBtn(e){
        let target = e.target;
        let id = target.parent.name;
        console.log(`刷新的是${id}`)
    }
    clickAvatar(e){
        let target = e.target;
        let id = target.parent.name;
        console.log(`点击的头像是${id}`)
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
    // update (dt) {}
}
