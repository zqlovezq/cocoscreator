import AssetsBundle from "../Game/AssetsBundle";
import Game from "../Game/Game";
import Turntable from "./Turntable";

const { ccclass, property } = cc._decorator;

@ccclass
export default class AwardPop extends cc.Component {
    public static Instance: AwardPop = null;
    private wrap: cc.Node = null;
    onLoad() {
        if (AwardPop.Instance === null) {
            AwardPop.Instance = this;
        } else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    }
    //type-1是广告奖励 2是过关奖励  cash-奖励金额
    protected showAward(cash: number, type: number): void {
        this.node.stopAllActions();
        this.node.scale = 1;
        this.node.opacity = 255;
        let title: cc.Sprite = this.wrap.getChildByName("title").getComponent(cc.Sprite);
        let url = "SpriteAward/award_" + (22 + type);
        let sp: cc.SpriteFrame = new cc.SpriteFrame(AssetsBundle.Instance.getAsset("Game", url));
        title.spriteFrame = sp;
        if (type !== 3) {
            let text: cc.Label = this.wrap.getChildByName("layout").getChildByName("text").getComponent(cc.Label);
            text.string = "" + cash / 100;
        } else {
            let url: string;
            let txt: string
            if (cash % 2 === 1) {
                let arr = [0.3, 0.5, 0.3, 0.8]
                url = "SpriteTurn/turn_8";
                txt = "红包" + arr[(cash - 1) / 2];
            } else if (cash % 4 === 0) {
                url = "SpriteTurn/turn_10";
                txt = "抽奖x1"
            } else {
                url = "SpriteTurn/turn_9";
                let arr = [0.3, 0.5]
                txt = "提现" + arr[(cash + 2) / 4 - 1];
            }
            let icon: cc.Sprite = this.wrap.getChildByName("icon").getComponent(cc.Sprite);
            let sp: cc.SpriteFrame = new cc.SpriteFrame(AssetsBundle.Instance.getAsset("Game", url));
            icon.spriteFrame = sp;
            let text: cc.Label = this.wrap.getChildByName("layout").getChildByName("text").getComponent(cc.Label);
            text.string = txt;
        }
        console.time("show award");
        this.scheduleOnce(() => {
            console.timeEnd("show award");
            this.closeAnim(() => {
                Turntable.Instance.wrap.getChildByName("turn").angle = 0;
                Game.Instance.refreshWallet();
                this.node.active = false;
            })
        }, 1.2)
    }
    private closeAnim(cb: Function) {
        this.node.stopAllActions();
        let scale1 = cc.scaleTo(0.2, 1.1, 1.1).easing(cc.easeQuadraticActionOut());
        let scale2 = cc.scaleTo(0.2, 0.3, 0.3).easing(cc.easeQuadraticActionOut());
        let seq1 = cc.sequence(scale1, scale2);
        let seq2 = cc.sequence(cc.delayTime(0.2), cc.fadeOut(0.2));
        let seq3 = cc.sequence(cc.delayTime(0.2), cc.callFunc(() => {
            if (cb) {
                cb();
            }
        }));
        cc.tween(this.node)
            .parallel(
                seq1,
                seq2,
                seq3
            )
            .start();
    }
    // update (dt) {}
}