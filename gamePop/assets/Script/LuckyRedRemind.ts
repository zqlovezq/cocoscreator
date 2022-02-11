const { ccclass, property } = cc._decorator;

@ccclass
export default class LuckyRedRemind extends cc.Component {
    private wrap:cc.Node = null;
    onLoad () {
        this.wrap = this.node.getChildByName("wrap");
    }
    onEnable() {
        this.registerEvent();
        cc.Tools.emitEvent("time", 0);
        let text = this.wrap.getChildByName("text").getComponent(cc.Label);
        text.string = `+${cc.Tools.userInfo.to_do.pre_level_tip.amount}红包券`
    }
    registerEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    removeEvent(){
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    closeLayer() {
        this.node.active = false;
        cc.Tools.emitEvent("time", new Date().getTime());
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
}
