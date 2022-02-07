const { ccclass, property } = cc._decorator;

@ccclass
export default class PopNew extends cc.Component {
    private award: number = 0;
    private wrap: cc.Node = null;
    private open: cc.Node = null;
    onLoad() {
        this.wrap = this.node.getChildByName("wrap");
        this.open = this.node.getChildByName("open");
        this.registerEvent();
    }
    onEnable() {
        this.wrap.active = true;
        this.open.active = false;
    }
    registerEvent() {
        let closeBtn = this.open.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        cc.Tools.breatheAnim(closeBtn)
        let getBtn = this.wrap.getChildByName("get_btn");
        getBtn.on(cc.Node.EventType.TOUCH_END, this.openAward, this);
        cc.Tools.breatheAnim(getBtn)
    }
    removeEvent() {
        let closeBtn = this.open.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        let getBtn = this.wrap.getChildByName("get_btn");
        getBtn.off(cc.Node.EventType.TOUCH_END, this.openAward, this);
    }
    openAward() {
        cc.Tools.sendRequest("NewWelfare", "GET", {}).then((res) => {
            console.log(res);
            this.wrap.active = false;
            this.open.active = true;
            let text = this.open.getChildByName("text").getComponent(cc.Label);
            text.string = res.data.award_amount; 
            this.award = res.data.award_amount; 
        }).catch((err)=>{
            this.closeLayer();
        })
    }
    closeLayer() {
        cc.Tools.emitEvent("showPacket",{dir:1});
        cc.Tools.emitEvent("showGuide");
        this.node.active = false;
        cc.Tools.emitEvent("init", false);
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
}
