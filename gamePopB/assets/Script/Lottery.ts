const { ccclass, property } = cc._decorator;

@ccclass
export default class Turntable extends cc.Component {
    private wrap:cc.Node = null;
    private canClick = true;
    private clickBtn = 0;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        cc.Tools.Event.on("openBox", this.openBoxFunc, this);
        this.registerEvent();
    }
    onEnable() {
        cc.Tools.showBanner();
        cc.Tools.showTableScreen();
        // 显示进度条
        let cash = this.wrap.getChildByName("cash");
        let _cash = (Math.floor(cc.Tools.userInfo.amount/100))/100;
        cash.getChildByName("cash").getComponent(cc.Label).string = `${_cash}元`;
        let progressBar = cash.getChildByName("progress_bar").getComponent(cc.ProgressBar);
        progressBar.progress = cc.Tools.userInfo.amount/3000>1?1:cc.Tools.userInfo.amount/3000;
        this.wrap.getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = cc.Tools.userInfo.save_amount+cc.Tools.userInfo.save_freeze_amount
    }
    registerEvent() {
        let cash = this.wrap.getChildByName("cash");
        let getBtn = cash.getChildByName("btn");
        if(cc.Tools.userInfo.amount/3000>1){
            cc.Tools.breatheAnim(getBtn);
        }
        getBtn.on(cc.Node.EventType.TOUCH_END, this.goCashLayer, this);
        //点击normal按钮
        let normal = this.wrap.getChildByName("normal");
        normal.on(cc.Node.EventType.TOUCH_END, this.clickNormal, this)
        let special = this.wrap.getChildByName("special");
        special.on(cc.Node.EventType.TOUCH_END, this.clickSpecial, this)
        let normalBtn = this.wrap.getChildByName("normal").getChildByName("btn");
        normalBtn.on(cc.Node.EventType.TOUCH_END, this.clickNormal, this)
        let specialBtn = this.wrap.getChildByName("special").getChildByName("btn");
        specialBtn.on(cc.Node.EventType.TOUCH_END, this.clickSpecial, this)
    }
    clickNormal(e){
        if(this.canClick){
            let self = this;
            let target = e.target;
            this.clickBtn = 1;
            let light = target.getChildByName("light");
            let anim = target.getChildByName("icon").getComponent(cc.Animation);
            anim.play();
            anim.on('finished',function(e){
                console.log("宝箱打开");
                light.active = true;
                light.angle = 0;
                cc.tween(light).to(1,{angle:-360}).call(()=>{
                    anim.setCurrentTime(0,"normal");
                    light.active = false;
                    light.angle = 0;
                    cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                        // cc.Tools.showJiliAd(16);
                        cc.Tools.adCallBack("100,16")
                    });
                }).start()
            })
        }
    }
    clickSpecial(e){
        if(this.canClick){
            let target = e.target;
            let self = this;
            this.clickBtn = 10;
            let light = target.getChildByName("light");
            let anim = target.getChildByName("icon").getComponent(cc.Animation);
            anim.play();
            anim.on('finished',function(e){
                console.log("宝箱打开");
                light.active = true;
                light.angle = 0;
                cc.tween(light).to(1,{angle:-360}).call(()=>{
                    anim.setCurrentTime(0,"special");
                    light.active = false;
                    light.angle = 0;
                    cc.Tools.showTips(self.node.parent, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                        // cc.Tools.showJiliAd(16);
                        cc.Tools.adCallBack("100,16")
                    });
                }).start()
            })
        }
    }
    openBoxFunc(ad_id:string){
        //像服务器发送请求
        let sendData = {
            "ad_id":ad_id,
            "ts": new Date().getTime(),//时间戳
            "ctype":  this.clickBtn,
            "action": "OpenBox"
        };
        console.log("openbox---"+JSON.stringify(sendData));
        cc.Tools.sendRequest("PipeOpenTreasureReq", "POST", sendData).then((res) => {
            console.log("点击宝箱返回信息",res);
            if(this.clickBtn===1){
                cc.Tools.emitEvent("getTicket", { ticket: res.amount, add: res.add_amount, type: 1, videoType: 16 });
            }else if(this.clickBtn===10){
                cc.Tools.emitEvent("getTenTicket", { ticket: res.amount, add: res.add_amount, type: 1, videoType: 16 });
            }
        })
    }
    goCashLayer() {
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            cc.Tools.emitEvent("cash");
        })
    }
    removeEvent(){

    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("init",false);
        cc.Tools.hideBanner();
        cc.Tools.hideTableScreen();
        this.scheduleOnce(() => {
            this.removeEvent();
        })
    }
}
