
const {ccclass, property} = cc._decorator;

@ccclass
export default class FightRandomCard extends cc.Component {

    @property(cc.Sprite)
    spPortrait:cc.Sprite = null;

    protected frameArray:cc.SpriteFrame[]
    protected index:number= 0;

    runAnim(frames: cc.SpriteFrame[]) {
        this.index = 0;
        this.frameArray = frames;

        this.node.runAction(cc.repeatForever(cc.sequence(
            cc.callFunc(()=>{
                this.spPortrait.spriteFrame = this.frameArray[this.index]
                this.index++;
                if(this.index >= this.frameArray.length) {
                    this.index = 0;
                }
            }),
            cc.delayTime(100)
        )))
    }

    stopAnim() {
        this.node.stopAllActions()
    }

    start () {}
}
