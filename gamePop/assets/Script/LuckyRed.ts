const { ccclass, property } = cc._decorator;

@ccclass
export default class LuckyRed extends cc.Component {
    // LIFE-CYCLE CALLBACKS:
    private wrap:cc.Node = null;
    onLoad () {
        this.wrap = this.node.getChildByName("wrap");
    }

    start() {

    }
    onEnable() {
        this.registerEvent();
        cc.Tools.emitEvent("time", 0);
    }
    registerEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let videoBtn = this.wrap.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END,this.clickVideo,this);
    }
    removeEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let videoBtn = this.wrap.getChildByName("video_btn");
        cc.Tools.breatheAnim(videoBtn);
        videoBtn.off(cc.Node.EventType.TOUCH_END,this.clickVideo,this);
    }
    clickVideo() {
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
            cc.Tools.showJiliAd(13);
        });
        this.closeLayer();
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
    // update (dt) {}
}
