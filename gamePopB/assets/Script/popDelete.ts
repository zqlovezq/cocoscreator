const { ccclass, property } = cc._decorator;

@ccclass
export default class PopDelete extends cc.Component {
    private videoType: number = 0;
    private wrap: cc.Node = null;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        cc.Tools.Event.on('videoType', this.setVideoType, this);
        this.registerEvent();
    }
    onEnable() {
        // 显示信息流
        cc.Tools.showFeedScreen();
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 2)
    }
    setVideoType(type: number) {
        this.videoType = type
    }
    registerEvent() {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        closeBtn.active = false;
        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);
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
            cc.Tools.showJiliAd(this.videoType);
        });
        cc.Tools.hideFeedScreen();
        this.node.active = false;
        if (this.videoType !== 9) {
            cc.Tools.emitEvent("clickRed");
        }
    }
    closeLayer() {
        cc.Tools.hideFeedScreen();
        this.node.active = false;
        cc.Tools.emitEvent("init",false);
        if (this.videoType !== 9) {
            cc.Tools.emitEvent("clickRed");
        }
    }
    // update (dt) {}
}