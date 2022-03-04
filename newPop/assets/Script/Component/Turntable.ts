const {ccclass,property} = cc._decorator;
@ccclass
export default class Turntable extends cc.Component {
    public static Instance: Turntable = null;
    private wrap:cc.Node = null;
    protected onLoad(): void {
        if (Turntable.Instance === null) {
            Turntable.Instance = this;
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
        let voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.on(cc.Node.EventType.TOUCH_END,this.showVideo,this)
    }
    protected showVideo():void{
        this.wrap.getChildByName("turn").angle = 0;
        let time = 6; //旋转时间
        let circle = 6; //旋转圈数
        let id = 6; // 旋转停止的角度
        let idAngele = [0,45,90,135,180,225,270,315];
        //随机一个-20---20的角度
        let rdm = cc.Tools.createRandom(-20,20);
        cc.tween(this.wrap.getChildByName("turn")).to(time,{angle:360 * circle + idAngele[id-1]+rdm},{easing:"sineInOut"}).start()
    }
    protected removeEvent(): void {
        let block = this.node.getChildByName("block");
        block.off(cc.Node.EventType.TOUCH_END,this.closeLayer,this);
        let voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.off(cc.Node.EventType.TOUCH_END,this.showVideo,this)
    }
    protected closeLayer(): void {
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(()=>{
            this.removeEvent();
        })
    }
}
