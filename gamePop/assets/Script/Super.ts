const { ccclass, property } = cc._decorator;

@ccclass
export default class Super extends cc.Component {
    onEnable() {
        this.registerEvent();
        // 设置界面
        let wrap = this.node.getChildByName("wrap");
        let progress = wrap.getChildByName("progress");
        let cash = cc.Tools.userInfo.amount;
        let _progress = progress.getComponent(cc.ProgressBar);
        let percent = cash / 3000 >= 1 ? 1 : cash / 3000
        _progress.progress = percent;
        let lbl = progress.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = `${cash}/3000`
        cc.Tools.emitEvent("time", 0);
    }
    registerEvent() {
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 1)
        let videoBtn = this.node.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);

        let getBtn = this.node.getChildByName("get_btn");
        getBtn.on(cc.Node.EventType.TOUCH_END, this.goCashLayer, this);
    }
    removeEvent() {
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let videoBtn = this.node.getChildByName("video_btn");
        videoBtn.off(cc.Node.EventType.TOUCH_END, this.showVideo, this);
        let getBtn = this.node.getChildByName("get_btn");
        getBtn.off(cc.Node.EventType.TOUCH_END, this.goCashLayer, this);
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
        cc.Tools.dot("click_superredbag_1");
        cc.Tools.showTips(this.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            cc.Tools.showJiliAd(8);
        });
        this.videoClose();
    }
    goCashLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("cash");
        })
    }
    closeLayer(e){
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("time", new Date().getTime());
            cc.Tools.showTableScreen("super");
        })
    }
    videoClose() {
        this.node.active = false;
        this.scheduleOnce(() => {
            cc.Tools.emitEvent("time", new Date().getTime());
            this.removeEvent();
        })
    }
    // update (dt) {}
}
