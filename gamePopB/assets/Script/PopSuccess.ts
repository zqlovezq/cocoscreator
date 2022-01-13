const { ccclass, property } = cc._decorator;

@ccclass
export default class PopSuccess extends cc.Component {
    private wrap: cc.Node = null;
    private item: cc.Node = null;
    private content: cc.Node = null;
    private len = 0;
    @property(cc.Prefab)
    avatar:cc.Prefab = null;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        this.item = this.node.getChildByName("item");
        this.content = this.wrap.getChildByName("scroll").getChildByName("mask").getChildByName("content");
        this.registerEvent();
    }
    onEnable() {
        // cc.Tools.showFeedScreen("success");
        cc.Tools.showBanner();
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 1)
        // // 获取信息列表
        // let sendData = {};
        // this.content.destroyAllChildren();
        // cc.Tools.sendRequest("CashOutUserList", "GET", sendData).then((res) => {
        //     //  console.log(res.data);
        //     let itemData = res.data.items;
        //     this.len = itemData.length;
        //     itemData.forEach(element => {
        //         //  console.log(element);
        //         let item = cc.instantiate(this.item);
        //         item.active = true;
        //         this.content.addChild(item);
        //         let info = item.getChildByName("info").getComponent(cc.Label);
        //         let userName = item.getChildByName("layout").getChildByName("user_name").getComponent(cc.Label);
        //         let time = item.getChildByName("time").getComponent(cc.Label);
        //         let cash = item.getChildByName("layout").getChildByName("cash_layer").getChildByName("cash").getComponent(cc.Label);
        //         info.string = `成功获得了${element.amount / 100}元现金，微信打款已到账`;
        //         userName.string = element.user_name;
        //         time.string = element.time_label;
        //         cash.string = `已提现${element.amount / 100}元`;
        //         let _avatarNode = item.getChildByName("avatar");
        //         let avatar = cc.instantiate(this.avatar);
        //         _avatarNode.addChild(avatar);
        //         avatar.getComponent("Avatar").setAvatar(element.avatar, element.grade_id || 0);
        //     });
        //     if(this.len>2){
        //         this.content.stopAllActions();
        //         this.content.y = 0;
        //         let action = cc.sequence(cc.delayTime(2), cc.moveBy(0.5, 0, 180));
        //         cc.tween(this.content).repeat(this.len - 2, action).start();
        //     }
        // })
    }
    setStar(num:number){
        for(let i=1;i<=3;i++){
            let star = this.wrap.getChildByName("star_"+i);
            let select = star.getChildByName("select");
            select.active = false;
            if(num>=i){
                select.active = true;
                select.scale=3;
                cc.tween(select).to(0.2*i,{scale:1}).start();
            }
        }
    }
    registerEvent() {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        closeBtn.active = false;
        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this)
        cc.Tools.breatheAnim(videoBtn)
    }
    removeEvent() {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.off(cc.Node.EventType.TOUCH_END, this.showVideo, this);
        videoBtn.stopAllActions();
    }
    showVideo() {
        if (cc.Tools.userInfo.new_free_level_times) {
            let sendData = {
                type: 4,
                ts: new Date().getTime()
            };
            cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                this.closeLayer();
                cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 4 });
            });
        } else {
            // 点击加锁
            if (cc.Tools.lock) {
                cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>点击太频繁</c></b>`);
                return;
            } else {
                cc.Tools.lock = true;
                setTimeout(() => {
                    cc.Tools.lock = false;
                }, 3000)
            }
            cc.Tools.showJiliAd(4);
            this.closeLayer();
        }
    }
    closeLayer() {
        cc.Tools.hideBanner();
        this.node.active = false;
        cc.Tools.emitEvent("init", true);
        // this.scheduleOnce(()=>{
        //     this.removeEvent();
        // })
    }
    // update (dt) {}
}
