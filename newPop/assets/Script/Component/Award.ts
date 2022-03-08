const {ccclass,property} = cc._decorator;
@ccclass
export default class Award extends cc.Component {
    public static Instance: Award = null;
    private wrap:cc.Node = null;
    protected onLoad(): void {
        if (Award.Instance === null) {
            Award.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    }
    protected onEnable(): void {
        this.registerEvent();
    }
    public showTypeLayer1():void{
        this.showTypeLayer(1)
    }
    public showTypeLayer2():void{
        this.showTypeLayer(2)
    }
    public showTypeLayer3():void{
        this.showTypeLayer(3)
    }
    //显示哪个界面 1:开时抽奖 2:等待抽奖 3:抽奖结果
    private showTypeLayer(type:number){
        let type1 = this.node.getChildByName("type_1");
        let type2 = this.node.getChildByName("type_2");
        let type3 = this.node.getChildByName("type_3");
        if(type===1){
            this.wrap.active = true;
            type1.active = true;
            type2.active = false;
            type3.active = false;
        }else if(type===2){
            this.wrap.active = true;
            type1.active = false;
            type2.active = true;
            type3.active = false;
        }else{
            this.wrap.active = false;
            type1.active = false;
            type2.active = false;
            type3.active = true;
        }
    }
    private registerEvent(): void {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let type_3 = this.node.getChildByName("type_3");
        let closeBtn1 = type_3.getChildByName("close_btn");
        closeBtn1.on(cc.Node.EventType.TOUCH_END,this.closeLayer1,this);
    }
    private closeLayer1():void{
        console.log("关闭最终奖励界面");
    }
    private removeEvent(): void {
       
    }
    private closeLayer(): void {
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
}
