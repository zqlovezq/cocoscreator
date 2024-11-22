import HelpHint from "./HelpHint";

const {ccclass, property} = cc._decorator;

@ccclass
export default class HelpTrigger extends cc.Component {

    @property
    ID:number = 0;

    @property
    x:number = 0;

    @property
    y:number = 0;

    @property
    anchorX = 0.5;

    @property
    anchorY = 0.5;

    onLoad() {
        this.node.on(cc.Node.EventType.TOUCH_END, this.onClick, this)
    }

    onClick() {
        let pos = this.node.convertToWorldSpaceAR(new cc.Vec2(this.x, this.y))
        HelpHint.show(this.ID, pos, new cc.Vec2(this.anchorX, this.anchorY))
    }
}