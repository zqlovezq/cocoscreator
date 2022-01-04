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
        // cc.Tools.showFeedScreen("delete");
        cc.Tools.emitEvent("time", 0);
        // 3秒钟之后出现关闭按钮
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 1)
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
        // this.scheduleOnce(()=>{
        //     closeBtn.active = true;
        // },2)
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
        // cc.Tools.showJiliAd(this.videoType);
        cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            cc.Tools.showJiliAd(this.videoType);
        });
        this.closeLayer();
    }
    closeLayer() {
        // cc.Tools.hideFeedScreen();
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        if (this.videoType !== 9) {
            cc.Tools.emitEvent("clickRed");
        }
        // this.scheduleOnce(()=>{
        //     this.removeEvent();
        // })
    }
    // update (dt) {}
}
