
const {ccclass, property} = cc._decorator;

@ccclass
export default class BubbleTip extends cc.Component {

    @property(cc.Label)
    tip: cc.Label = null;

    @property(cc.Animation)
    anim:cc.Animation = null;

    start() {
        // this.anim.play(this.anim.defaultClip.name)
        this.anim.on(cc.Animation.EventType.FINISHED, event=>{
            this.node.destroy()
        }, this)
    }

    setData(tips:string) {
        this.tip.string = tips;
    }
}
