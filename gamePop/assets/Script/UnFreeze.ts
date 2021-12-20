const {ccclass, property} = cc._decorator;

@ccclass
export default class UnFreeze extends cc.Component {
    onEnable(){
        this.registerEvent();
        cc.Tools.emitEvent("time",0);
        cc.Tools.Event.on("freeze", this.refreshLayer, this);
        this.initLayer();
    }
    // 刷新解冻界面
    initLayer(){
        let wrap = this.node.getChildByName("wrap");
        // 获取用户信息
        let sendData = {
            
        };
        cc.Tools.sendRequest("ReleaseAwardStatus", "GET", sendData).then((res) => {
            let data = res.data;
            let bar = wrap.getChildByName("bar")
            let percent = wrap.getChildByName("percent");
            bar.width = data.rate*(426/100);
            percent.getComponent(cc.Label).string = `进度${data.rate}%`
        });
    }
    refreshLayer(ad){
        let wrap = this.node.getChildByName("wrap");
        // 获取用户信息
        let sendData = {
            "ad_id":ad,
            "ts":new Date().getTime()
        };
        cc.Tools.sendRequest("ReleaseAward", "POST", sendData).then((res) => {
            let data = res.data;
            let bar = wrap.getChildByName("bar")
            let percent = wrap.getChildByName("percent");
            bar.width = data.rate*(426/100);
            percent.getComponent(cc.Label).string = `进度${data.rate}%`
        });
    }
    registerEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);

        let videoBtn = this.node.getChildByName("video_btn");
        videoBtn.on(cc.Node.EventType.TOUCH_END,this.showVideo,this);
    }
    removeEvent(){
        let closeBtn = this.node.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let videoBtn = this.node.getChildByName("video_btn");
        videoBtn.off(cc.Node.EventType.TOUCH_END,this.showVideo,this);
    }
    showVideo(){
        cc.Tools.showJiliAd(5);
    }
    closeLayer(){
        this.node.active = false;
        cc.Tools.emitEvent("time",new Date().getTime());
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
    // update (dt) {}
}
