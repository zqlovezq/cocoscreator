const { ccclass, property } = cc._decorator;

@ccclass
export default class Turntable extends cc.Component {
    private wrap:cc.Node;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
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
    }
    registerEvent() {
        let cash = this.wrap.getChildByName("cash");
        let getBtn = cash.getChildByName("btn");
        if(cc.Tools.userInfo.amount/3000>1){
            cc.Tools.breatheAnim(getBtn);
        }
        getBtn.on(cc.Node.EventType.TOUCH_END, this.goCashLayer, this);
        //点击normal按钮
        let normal = this.wrap.getChildByName("normal").getChildByName("icon");
        normal.on(cc.Node.EventType.TOUCH_END, this.clickNormal, this)
        let special = this.wrap.getChildByName("special").getChildByName("icon");
        special.on(cc.Node.EventType.TOUCH_END, this.clickSpecial, this)
    }
    clickNormal(e){
        let target = e.target;
        let light = target.parent.getChildByName("light");
        let anim = target.getComponent(cc.Animation);
        anim.play();
        anim.on('finished',function(e){
            console.log("宝箱打开");
            light.active = true;
            light.angle = 0;
            cc.tween(light).to(1,{angle:-360}).call(()=>{
                anim.setCurrentTime(0,"normal");
                light.active = false;
                light.angle = 0;
            }).start()
        })
    }
    clickSpecial(e){
        let target = e.target;
        let light = target.parent.getChildByName("light");
        let anim = target.getComponent(cc.Animation);
        anim.play();
        anim.on('finished',function(e){
            console.log("宝箱打开");
            light.active = true;
            light.angle = 0;
            cc.tween(light).to(1,{angle:-360}).call(()=>{
                anim.setCurrentTime(0,"special");
                light.active = false;
                light.angle = 0;
            }).start()
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
