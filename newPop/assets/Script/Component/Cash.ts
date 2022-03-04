const {ccclass,property} = cc._decorator;
@ccclass
export default class Cash extends cc.Component {
    public static Instance: Cash = null;
    private wrap:cc.Node = null;
    protected onLoad(): void {
        if (Cash.Instance === null) {
            Cash.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    }
    protected onEnable(): void {
        this.initLayer();
        this.registerEvent();
    }
    private initLayer():void{
        let common:cc.Node = this.wrap.getChildByName("common");
        let cash:cc.Label = common.getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        cash.string = cc.Tools.userInfo.amount/100+"";
    }
    public showTypeLayer1():void{
        this.showTypeLayer(1)
    }
    public showTypeLayer2():void{
        this.showTypeLayer(2)
    }
    //显示哪个界面 1:无门槛提现 2:每日提现
    private showTypeLayer(type:number){
        let common:cc.Node = this.wrap.getChildByName("common");
        let type1 = this.wrap.getChildByName("type_1");
        let type2 = this.wrap.getChildByName("type_2");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        if(type===1){
            btn1.getChildByName("select").active = true;
            btn2.getChildByName("select").active = false;
            type1.active = true;
            type2.active = false;
        }else{
            btn1.getChildByName("select").active = false;
            btn2.getChildByName("select").active = true;
            type1.active = false;
            type2.active = true;
        }
    }
    private registerEvent(): void {
        let common:cc.Node = this.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.on(cc.Node.EventType.TOUCH_END,this.showTypeLayer1,this);
        btn2.on(cc.Node.EventType.TOUCH_END,this.showTypeLayer2,this);
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    private removeEvent(): void {
        let common:cc.Node = this.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.off(cc.Node.EventType.TOUCH_END,this.showTypeLayer1,this);
        btn2.off(cc.Node.EventType.TOUCH_END,this.showTypeLayer2,this);
        closeBtn.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
    }
    private closeLayer(): void {
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
}
