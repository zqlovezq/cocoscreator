import { Vec3, math, v2, v3 } from "cc";
import { AbsMoveType, BulletMove } from "../AbsMove";
import { BulletMoveLine } from "./BulletMoveLine";
import { FixedUtil } from "../../../util/FixedUtil";

const tempPos = new Vec3();

const NextTime = 500
/** 追中目标 */
export class BulletMoveTraceTarget extends BulletMoveLine {
    isTargetDead: boolean = false
    traceTime: number = 0
    init(): void {
        // //设置子弹角度
        this.isTargetDead = false
        this.traceTime = NextTime
    }

    updateFrame(dt: number): void {
        super.updateFrame(dt)
        this.traceTime -= dt
        if (this.traceTime == 0) {
            this.traceTime = NextTime
            this.traceDirection(this.abs.getPosition(), this.abs.targetRole.getHitPos())
        }
    }

    onFlyComplete() {
        super.onFlyComplete()
        this.onEnemyDead()
    }

    offDead() {
        if (this.abs.targetRole && this.abs.targetRole.isValid) {
            this.abs.targetRole.node.off("AbsRole_dead", this.onEnemyDead, this)
        }
    }

    onDead() {
        if (this.abs.targetRole && this.abs.targetRole.isValid) {
            this.abs.targetRole.node.on("AbsRole_dead", this.onEnemyDead, this)
        }
    }

    onEnemyDead() {
        this.isTargetDead = true
        this.offDead()
    }

    checkNextBorder(dt: number) {
        //不做屏幕反弹
    }
}