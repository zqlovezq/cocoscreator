import Game from "../Game/Game";
import CocosBridge from "../Tools/CocosBridge";

const { ccclass, property } = cc._decorator;
@ccclass
export default class Turntable extends cc.Component {
    public static Instance: Turntable = null;
    public wrap: cc.Node = null;
    private canClick: boolean = true;
    protected onLoad(): void {
        if (Turntable.Instance === null) {
            Turntable.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
        cc.Tools.Event.on("turntable", this.turntableBack, this);
    }
    protected onEnable(): void {
        this.canClick = true;
        this.registerEvent();
        this.getTurnNumber();
        this.openAnim();
    }
    //layer动画
    private openAnim(): void {
        this.node.x = 0;
        this.node.y = 0;
        this.node.stopAllActions();
        this.node.scale = 0.7;
        this.node.opacity = 255;
        let scale1 = cc.scaleTo(0.12, 0.93, 1.05).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 1.05, 0.99).easing(cc.easeQuadraticActionOut());
        let scale3 = cc.scaleTo(0.25, 1, 1).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(cc.delayTime(0.02), scale1, scale2, scale3);
        let seq2 = cc.sequence(cc.delayTime(0.05), cc.fadeIn(0.12));
        cc.tween(this.node)
            .parallel(
                seq1,
                seq2
            )
            .start()
        // //背景
        let block = this.node.getChildByName("block");
        block.opacity = 0;
        cc.tween(block).delay(0.05).to(0.22, { opacity: 160 }).start();
    }
    private closeAnim(cb: Function) {
        this.node.scale = 1;
        this.node.opacity = 255;
        let scale1 = cc.scaleTo(0.2, 1.1, 1.1).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 0.3, 0.3).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(scale1, scale2);
        let seq2 = cc.sequence(cc.delayTime(0.2), cc.fadeOut(0.2));
        let seq3 = cc.sequence(cc.delayTime(0.2), cc.callFunc(() => {
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
    //获取当前转盘次数是多少
    protected getTurnNumber(): void {
        let text: cc.Label = this.wrap.getChildByName("text").getComponent(cc.Label);
        cc.Tools.sendRequest("LuckyLotteryStatus", "GET", {}).then(res => {
            let data = res.data;
            let times = data.max_times - data.used_times;
            text.string = `${times}/${data.max_times}次`
        })
    }
    protected registerEvent(): void {
        let voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);

        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    protected showVideo(): void {
        //像服务器发送请求
        if (!this.canClick) {
            return;
        }
        this.canClick = false;
        CocosBridge.JSCallNative("showRewardVideoAd", "4")
    }
    protected turntableBack(ad_id: string): void {
        let sendData = {
            "ad_id": ad_id,
            "ts": new Date().getTime(),//时间戳
        };
        cc.Tools.sendRequest("DoLuckyLottery", "POST", sendData).then(res => {
            let data = res.data;
            let time = 5; //旋转时间
            let circle = 5; //旋转圈数
            let id: number = data.id; // 抽奖的编号
            // let id:number = 5
            let idAngele = [0, 45, 90, 135, 180, 225, 270, 315];
            //随机一个-20---20的角度
            let rdm = cc.Tools.createRandom(-20, 20);
            cc.tween(this.wrap.getChildByName("turn")).to(time, { angle: 360 * circle + idAngele[id - 1] + rdm }, { easing: "sineInOut" }).call(() => {
                this.canClick = true;
                this.getTurnNumber();
                Game.Instance.showAwardPop(id, 3);
            }).start()
        })
    }
    protected removeEvent(): void {
        let voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.off(cc.Node.EventType.TOUCH_END, this.showVideo, this);
        let closeBtn = this.wrap.getChildByName("close_btn");
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    }
    protected closeLayer(): void {
        this.closeAnim(() => {
            this.scheduleOnce(() => {
                this.removeEvent();
            })
        });
    }
}
