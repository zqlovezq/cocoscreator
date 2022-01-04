const { ccclass, property } = cc._decorator;

@ccclass
export default class PopSuccess extends cc.Component {
    private wrap: cc.Node = null;
    private item: cc.Node = null;
    private content: cc.Node = null;
    private len = 0;
    @property(cc.SpriteFrame)
    frames = []
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        this.item = this.node.getChildByName("item");
        this.content = this.wrap.getChildByName("scroll").getChildByName("mask").getChildByName("content");
        this.registerEvent();
        // 获取信息列表
        let sendData = {};
        cc.Tools.sendRequest("CashOutUserList", "GET", sendData).then((res) => {
            //  console.log(res.data);
            let itemData = res.data.items;
            this.len = itemData.length;
            itemData.forEach(element => {
                //  console.log(element);
                let item = cc.instantiate(this.item);
                item.active = true;
                this.content.addChild(item);
                let info = item.getChildByName("info").getComponent(cc.Label);
                let userName = item.getChildByName("user_name").getComponent(cc.Label);
                let time = item.getChildByName("time").getComponent(cc.Label);
                let cash = item.getChildByName("bg_1").getChildByName("cash").getComponent(cc.Label);
                let icon = item.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
                info.string = `成功获得了${element.amount/100}元现金，微信打款已到账`;
                userName.string = element.user_name;
                time.string = element.time_label;
                cash.string = `已提现${element.amount/100}元`;
                this.loadSprite(element.avatar, icon);
            });
            this.content.stopAllActions();
            this.content.y = 0;
            let action = cc.sequence(cc.delayTime(2), cc.moveBy(0.5, 0, 180));
            cc.tween(this.content).repeat(this.len - 2, action).start();
        })
    }
    loadSprite(url, icon) {
        cc.assetManager.loadRemote(url, { ext: '.png' }, function (err, texture: cc.Texture2D) {
            icon.spriteFrame = new cc.SpriteFrame(texture);
        });
    }
    onEnable() {
        // cc.Tools.showFeedScreen("success");
        cc.Tools.showBanner();
        cc.Tools.emitEvent("time", 0);
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 1)
        this.content.stopAllActions();
        this.content.y = 0;
        let action = cc.sequence(cc.delayTime(2), cc.moveBy(0.5, 0, 180));
        cc.tween(this.content).repeat(this.len - 2, action).start();
        this.wrap.getChildByName("video_btn").getChildByName("icon").getComponent(cc.Sprite).spriteFrame = cc.Tools.userInfo.new_free_level_times > 0 ? this.frames[1] : this.frames[0];
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
            cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                cc.Tools.showJiliAd(4);
            });
            this.closeLayer();
        }
    }
    closeLayer() {
        cc.Tools.hideBanner();
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        cc.Tools.emitEvent("init", true);
        // this.scheduleOnce(()=>{
        //     this.removeEvent();
        // })
    }
    // update (dt) {}
}
