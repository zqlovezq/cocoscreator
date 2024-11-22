
const {ccclass, property} = cc._decorator;

@ccclass
export default class RotateNode extends cc.Component {

    protected time:number = 0;

    start () {
        // this.node.runAction(cc.repeatForever(cc.rotateBy(0.1, 30)));
    }

    update (dt) {
        this.time += dt * -50;
        this.node.angle = this.time;

        for(let child of this.node.children) {
            child.angle = -this.time;
        }
    }
}
