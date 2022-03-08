import { throws } from "assert";
import Game from "../Game/Game";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Cash extends cc.Component {
    public static Instance: Cash = null;
    private wrap: cc.Node = null;
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
        this.openAnim();
    }
    //layer动画
    private openAnim(): void {
        //主页
        this.node.scale = 1;
        this.node.opacity = 255;
        this.node.x=0;
        this.node.y=0;
        this.wrap.stopAllActions();
        this.wrap.scale = 0.7;
        this.wrap.opacity = 255;
        let scale1 = cc.scaleTo(0.12, 0.93, 1.05).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 1.05, 0.99).easing(cc.easeQuadraticActionOut());
        let scale3 = cc.scaleTo(0.25, 1, 1).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(cc.delayTime(0.02), scale1, scale2, scale3);
        let seq2 = cc.sequence(cc.delayTime(0.05), cc.fadeIn(0.12));
        cc.tween(this.wrap)
            .parallel(
                seq1,
                seq2
            )
            .start()
        // //背景
        let block = this.node.getChildByName("block");
        block.opacity = 0;
        cc.tween(block).delay(0.05).to(0.22, { opacity: 160 }).start();
        // //标题
        let title = this.wrap.getChildByName("common").getChildByName("title");
        title.scaleX = 0.5;
        title.scaleY = 1;
        let title_scale1 = cc.scaleTo(0.2, 1.1, 1).easing(cc.easeQuadraticActionOut());
        let title_scale2 = cc.scaleTo(0.24, 1, 1).easing(cc.easeQuadraticActionOut());
        let title_seq1 = cc.sequence(cc.delayTime(0.06), title_scale1, title_scale2);
        let title_seq2 = cc.sequence(cc.delayTime(0.06), cc.fadeIn(0.2));
        cc.tween(title)
            .parallel(
                title_seq1,
                title_seq2
            )
            .start()
        //金币
        let gold = this.wrap.getChildByName("common").getChildByName("gold");
        gold.x = -208;
        gold.y = 630;
        gold.scale = 1;
        let gold_1_action1 = cc.moveTo(2, gold.x - 10, gold.y + 15).easing(cc.easeQuadraticActionOut());
        let gold_1_action2 = cc.moveTo(2, gold.x + 10, gold.y - 15).easing(cc.easeQuadraticActionOut());
        let gold_seq1 = cc.sequence(gold_1_action1,cc.delayTime(0.5), gold_1_action2,cc.delayTime(0.5));
        let gold_2_action1 = cc.scaleTo(0.1, 1.03, 0.97).easing(cc.easeQuadraticActionOut());
        let gold_2_action2 = cc.scaleTo(0.1, 0.97, 1.03).easing(cc.easeQuadraticActionOut());
        let gold_2_action3 = cc.scaleTo(0.2, 1, 1).easing(cc.easeQuadraticActionOut());
        let gold_seq2 = cc.sequence(cc.delayTime(2.5), gold_2_action1, gold_2_action2, gold_2_action1,gold_2_action3, cc.delayTime(2));
        let action = cc.spawn(gold_seq1, gold_seq2);
        cc.tween(gold)
            .repeatForever(action)
            .start()
    }
    private closeAnim(cb:Function){
        let endBtn = Game.Instance.wrap.getChildByName("bottom").getChildByName("btn_3");
        let endP = this.node.convertToNodeSpaceAR(endBtn.parent.convertToWorldSpaceAR(endBtn.getPosition()));
        this.node.scale = 1;
        this.node.opacity = 255;
        let scale1 = cc.scaleTo(0.2, 1.1, 1.1).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 0.3, 0.3).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(scale1, scale2);
        let seq2 = cc.sequence(cc.delayTime(0.2),cc.fadeOut(0.2));
        let seq3 = cc.sequence(cc.delayTime(0.2),cc.moveTo(0.34,endP.x,endP.y),cc.callFunc(()=>{
            this.node.active = false;
            cb();
        }));
        cc.tween(this.node)
        .parallel(
            seq1,
            seq2,
            seq3
        )
        .start();
        let block = this.node.getChildByName("block");
        block.opacity = 0;
    }
    private initLayer(): void {
        let common: cc.Node = this.wrap.getChildByName("common");
        let cash: cc.Label = common.getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        cash.string = cc.Tools.userInfo.amount / 100 + "";
    }
    public showTypeLayer1(): void {
        this.showTypeLayer(1)
    }
    public showTypeLayer2(): void {
        this.showTypeLayer(2)
    }
    //显示哪个界面 1:无门槛提现 2:每日提现
    private showTypeLayer(type: number) {
        let common: cc.Node = this.wrap.getChildByName("common");
        let type1 = this.wrap.getChildByName("type_1");
        let type2 = this.wrap.getChildByName("type_2");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        if (type === 1) {
            btn1.getChildByName("select").active = true;
            btn2.getChildByName("select").active = false;
            type1.active = true;
            type2.active = false;
        } else {
            btn1.getChildByName("select").active = false;
            btn2.getChildByName("select").active = true;
            type1.active = false;
            type2.active = true;
        }
    }
    private registerEvent(): void {
        let common: cc.Node = this.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer1, this);
        btn2.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer2, this);
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    private removeEvent(): void {
        let common: cc.Node = this.wrap.getChildByName("common");
        let closeBtn = common.getChildByName("close_btn");
        let btn1 = common.getChildByName("btn_1");
        let btn2 = common.getChildByName("btn_2");
        btn1.off(cc.Node.EventType.TOUCH_END, this.showTypeLayer1, this);
        btn2.off(cc.Node.EventType.TOUCH_END, this.showTypeLayer2, this);
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    private closeLayer(): void {
        console.log("close");
        this.closeAnim(()=>{
            this.scheduleOnce(() => {
                this.removeEvent();
            })
        });
    }
}
