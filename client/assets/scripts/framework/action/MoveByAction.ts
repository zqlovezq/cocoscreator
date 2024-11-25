import { _decorator, Tween, Vec3, Node, tween, v3, CCFloat, Component } from 'cc';
const { ccclass, property } = _decorator;



@ccclass('MoveByAction')
export class MoveByAction extends Component {

    @property(CCFloat)
    time: number = 0

    @property(Vec3)
    byPostion: Vec3 = null


    startPos: Vec3
    protected onLoad(): void {
        this.startPos = v3(this.node.position)
    }

    protected start(): void {
        console.log(this.time)
        tween(this.node).repeatForever(
            tween()
                .by(this.time, { position: this.byPostion })
                .call(() => {
                    this.node.position = this.startPos
                })
        ).start()
    }

    moveBy() { }
}
