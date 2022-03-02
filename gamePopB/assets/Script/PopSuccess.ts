const { ccclass, property } = cc._decorator;

@ccclass
export default class PopSuccess extends cc.Component {
    private wrap: cc.Node = null;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        this.registerEvent();
    }
    onEnable() {
        cc.Tools.showFeedScreen();
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.active = false;
        this.scheduleOnce(() => {
            closeBtn.active = true;
        }, 2)
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
        }
        cc.Tools.hideFeedScreen();
        this.node.active = false;
    }
    closeLayer() {
        this.node.active = false;
        this.scheduleOnce(()=>{
            cc.Tools.hideFeedScreen();
            cc.Tools.emitEvent("init", true);
            cc.Tools.showTableScreen();
        })
    }
    // update (dt) {}
}
