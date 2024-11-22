/**
 * 
*/

const {ccclass, property} = cc._decorator;

@ccclass
export default class BlackTipsItem extends cc.Component {

    @property(cc.Animation)
    animation: cc.Animation = null;

    @property(cc.Label)
    lblTips:cc.Label = null;

    SetString(str:string) {
        this.lblTips.string = str;
        this.animation.play(this.animation.defaultClip.name);
        this.animation.on(cc.Animation.EventType.FINISHED, ()=>{
            this.node.removeFromParent();
            this.node.destroy();
        }, this)
    }
}
