import { Size, UITransform, Vec2, Vec3, game, math, v2, v3, view } from "cc";
import { AbsMoveType, BorderType, BulletMove, ScreenUtil } from "../AbsMove";
import { FixedUtil } from "../../../util/FixedUtil";

/** 激光
 * 宽度延伸，位置不变
 */
export class BuletMoveLaser extends BulletMove {
    constructor() {
        super(AbsMoveType.bulletMoveLine)
    }

    widthPos: Vec3 = new Vec3(0, 0, 0)
    init(): void {
        this.widthPos.x = this.abs.size.x
        this.widthPos.y = 0
        this.updateSize()
    }

    fly(dt: number) {
        //计算新位置
        FixedUtil.deltaTimeMovePostion(this.widthPos, this.widthPos, this.abs.velocity, dt)

        this.updateSize()
    }

    updateSize() {
        this.abs.size.x = Math.abs(this.widthPos.x)
        this.abs.center.x = Math.abs(this.abs.size.x / 2)
        this.abs.body.shape.center.x = this.abs.center.x
        this.abs.body.shape.size.x = this.abs.size.x
        this.abs.updatePostion()

        this.abs.initGraphics()
    }

}


