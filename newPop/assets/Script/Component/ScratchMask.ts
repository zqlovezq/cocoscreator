const {ccclass, property} = cc._decorator;

@ccclass
export default class ScratchMask extends cc.Component {

    @property(cc.Label)
    rsultLabel: cc.Label = null;

    @property(cc.Mask)
    mask: cc.Mask = null;

    @property(cc.Label)
    promptLabel: cc.Label = null;
    private time:number = 0;
    private begin = false;
    private emitEvent = false;
    onLoad () {
        this.node.on(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.on(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.on(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.on(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }

    protected onEnable(): void {
        this.begin = false;
        this.time = 0;
        this.emitEvent = false;
    }
    protected onDestroy(): void {
        this.node.off(cc.Node.EventType.TOUCH_START, this._onTouchBegin, this);
        this.node.off(cc.Node.EventType.TOUCH_MOVE, this._onTouchMoved, this);
        this.node.off(cc.Node.EventType.TOUCH_END, this._onTouchEnd, this);
        this.node.off(cc.Node.EventType.TOUCH_CANCEL, this._onTouchCancel, this);
    }
    _onTouchBegin(event:cc.Event.EventTouch):void{
        //记录一个事件戳
        if(this.begin){
            return;
        }
        this.time = 0;
        this.begin = true;
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }
    _onTouchMoved(event:cc.Event.EventTouch):void{
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
    }
    _onTouchEnd(event:cc.Event.EventTouch):void{
        let point = event.touch.getLocation();
        point = this.node.convertToNodeSpaceAR(point);
        this._addCircle(point);
        this.begin = false;
    }
    _onTouchCancel(event:cc.Event.EventTouch):void{
        this.begin = false;
    }
    _addCircle(point:cc.Vec2){
        let stencil = this.mask["_graphics"];
        stencil.circle(point.x,point.y,32);
        stencil.fill();
        if (!CC_JSB) {
            cc.renderer["childrenOrderDirty"] = true;
        }
        if(this.time>2){
            //执行一次
            if(!this.emitEvent){
                this.emitEvent = true;
                cc.Tools.emitEvent("open_award")
            }
        }
    }
    update (dt) {
        if(this.begin){
            this.time+=dt;
        }
    }
}
