import { type } from "os";
import CocosBridge from "../Tools/CocosBridge";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RedPop extends cc.Component {
    public static Instance: RedPop = null;
    private wrap: cc.Node = null;
    private redType: number = 0;
    private add: boolean = false;
    onLoad() {
        if (RedPop.Instance === null) {
            RedPop.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    }
    public setType(type: number,add:boolean) {
        this.redType = type;
        this.add = add;
    }
    protected onEnable(): void {
        this.registerEvent();
        this.setLayer()
    }
    private setLayer() :void{
        //刷新最新的金钱接口 获取现金
        let cash = cc.Tools.userInfo.amount;
        let text: cc.Label = this.wrap.getChildByName("text").getComponent(cc.Label);
        let progress:cc.ProgressBar = this.wrap.getChildByName("progress").getComponent(cc.ProgressBar);
        let lbl:cc.Label = this.wrap.getChildByName("progress").getChildByName("lbl").getComponent(cc.Label);
        console.log("当前的现金是", cash);
        if (cash <= 10000) {
            let short = (10000 - cash) / 100;
            text.string = `还差${short}元可以提现`;
            let percent = Math.floor(cash/100);
            progress.progress = percent/100;
            lbl.string = `${percent}/100`
        } else if (cash <= 20000 && cash > 10000) {
            let short = (20000 - cash) / 100;
            text.string = `还差${short}元可以提现`;
            let percent = Math.floor(cash/100);
            progress.progress = percent/200;
            lbl.string = `${percent}/200`
        } else if(cash <= 30000 && cash > 20000){
            let short = (30000 - cash) / 100;
            text.string = `还差${short}元可以提现`;
            let percent = Math.floor(cash/100);
            progress.progress = percent/300;
            lbl.string = `${percent}/300`
        }else{
            text.string = `可以提现`;
            progress.progress =1;
            lbl.string = `${Math.floor(cash/100)}/300`
        }
    }
    protected registerEvent(): void {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    protected removeEvent(): void {
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    protected closeLayer(): void {
        this.node.active = false;
        this.scheduleOnce(() => {
            this.removeEvent();
            let type = 0;
            if (this.redType === 2) {
                type = CocosBridge.VideoEnum.LEVEL
            }else{
                if(!this.add){
                    type = CocosBridge.VideoEnum.OPENRED
                }else{
                    type = CocosBridge.VideoEnum.GAME;
                }
            }
            if(this.add){
                cc.Tools.sendRequest("SaveRedPkg", "POST", {
                    level:cc.Tools.userInfo.level,
                    ecpm_type:type
                }).then(res => {
                   //todo 产生一个红包飞象右上角
                   cc.Tools.emitEvent("refreshGame");
                })
            }
        })
    }
    // update (dt) {}
}
