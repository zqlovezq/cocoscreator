import { Mat4, Quat, Vec3, math, v2, v3 } from "cc";
import { AbsMoveType, BulletMove } from "../AbsMove";
import { BulletMoveLine } from "./BulletMoveLine";
import { FixedUtil } from "../../../util/FixedUtil";
import { MathAngle } from "../../../../../framework/collision/Maths";
import { BulletMoveRound } from "./BulletMoveRound";

const tempPos = new Vec3();
const tempPos1 = new Vec3();
const angleVelocity = new Vec3();

/** 离心运动 包含离心回旋 */
export class BulletMoveCentrifugation extends BulletMoveLine {
    roundCount: number //回旋次数
    totalCount: number //总次数
    oneWayTime: number //表里配置的为单程时间
    waitingTime: number = 0  //等待时间 

    angle: number = 0
    angleVelocity: Vec3 = new Vec3()
    startPos: Vec3 = new Vec3()
    nowPos: Vec3 = new Vec3()

    init(): void {
        super.init()

        this.angleVelocity.set(1, 0, 0)
        this.angleVelocity.multiplyScalar(this.abs.speed * this.abs.voRatio)

        this.angle = this.abs.voAngle
        this.startPos.set(this.abs.getTruePosition())
        this.nowPos.set(0, 0, 0)
    }
    setLiftTime(t: number) {

        if (this.abs.info.isRound()) {
            this.oneWayTime = t
            this.roundCount = 0
            this.totalCount = this.abs.info.configTab.Round[0] * 2
            t = t * this.totalCount
        }

        super.setLiftTime(t)
    }

    checkFlip() {
        if (this.waitingTime == 0) {
            this.angleVelocity.x = -this.angleVelocity.x
            this.angleVelocity.y = -this.angleVelocity.y
        }
    }

    updateFrame(dt: number): void {
        if (this.waitingTime > 0) {
            this.waitingTime -= dt
            this.waitingTime = Math.max(this.waitingTime, 0)
            this.checkFlip()
            this.checkRotate()
            return
        }

        super.updateFrame(dt)
        if (this.abs.isDead) {
            return
        }
        if (this.abs && this.abs.info && this.abs.info.isRound()) {
            if (this.roundCount != this.getPassTimeRoundCount()) {
                this.roundCount = this.getPassTimeRoundCount()
                if (this.roundCount == this.totalCount) {
                    return
                }
                this.waitingTime = this.abs.info.configTab.Round[1]
                this.checkFlip()
            }
        }
    }

    idx: number = 0
    fly(dt: number): void {
        this.angle = this.angle + this.abs.info.configTab.Centrifugation[1]

        //计算新位置
        FixedUtil.deltaTimeMovePostion(this.nowPos, this.nowPos, this.angleVelocity, dt)
        MathAngle.rotatePoint(this.nowPos, this.angle, tempPos1)
        tempPos1.add(this.startPos)
        this.setAbsPos(tempPos1);

    }

    getPassTimeRoundCount() {
        return Math.floor(this.passTime / this.oneWayTime)
    }

    // rotatePoint(point: Vec3, angle: number, out: Vec3): { x: number, y: number } {
    //     const radians = angle * Math.PI / 180;
    //     out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
    //     out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
    //     return out
    // }
}