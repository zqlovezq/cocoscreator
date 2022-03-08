import AssetsBundle from "../Game/AssetsBundle";
const {ccclass,property} = cc._decorator;
@ccclass
export default class FirstPop extends cc.Component {
    public static Instance: FirstPop = null;
    private wrap:cc.Node = null;
    protected onLoad(): void {
        if (FirstPop.Instance === null) {
            FirstPop.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    }
    protected onEnable(): void {
        this.registerEvent();
    }
    protected registerEvent(): void {
        let block = this.node.getChildByName("block");
        block.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let btn = this.wrap.getChildByName("btn");
        btn.on(cc.Node.EventType.TOUCH_END,this.showDetail,this)
    }
    protected showDetail():void{
        cc.Tools.emitEvent("cash",1);
        this.closeLayer();
    }
    protected removeEvent(): void {
        let block = this.node.getChildByName("block");
        block.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    protected closeLayer(): void {
        console.log("close");
        this.removeEvent();
        let first:cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/first_pop");
        first.decRef();
        first = null;
        this.node.active = false;
    }
}
