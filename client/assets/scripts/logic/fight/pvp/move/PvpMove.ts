import { Vec3 } from "cc";
import { PvpObj } from "../obj/PvpObj";
import { FixedUtil } from "../../util/FixedUtil";
import { PvpBullet } from "../obj/PvpBullet";
import { MathAngle } from "../../../../framework/collision/Maths";

const tempPos = new Vec3();
const tempPos1 = new Vec3();
/** 移动 （默认就是速率移动） */
export class PvpMove {
    abs: PvpBullet

    setAbs(abs: PvpBullet) {
        this.abs = abs
    }

    init() {

    }

    setAbsPos(v3: Vec3) {
        this.abs.setPosition(v3)
    }

    updateFrame(dt: number) {
        this.checkRotate()
        this.fly(dt)
    }
    checkRotate() {
        if (this.abs == null || this.abs && this.abs.isDead) {
            return
        }
        if (this.abs.configTab.Rotate != 0) {
            this.abs.addAngle(this.abs.configTab.Rotate)
        }
    }

    fly(dt: number) {

    }
}

export class PvpMoveLine extends PvpMove {
    fly(dt: number): void {
        //计算新位置
        FixedUtil.deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt)
        this.setAbsPos(tempPos)
    }
}

//离心运动
export class PvpMoveCircle extends PvpMove {
    angle: number = 0
    angleVelocity: Vec3 = new Vec3()
    startPos: Vec3 = new Vec3()
    nowPos: Vec3 = new Vec3()
    addAngle: number = 0

    init(): void {
        this.angleVelocity.set(this.abs.velocity)
        this.angleVelocity.normalize()
        this.angleVelocity.multiplyScalar(this.abs.speed)

        this.angle = 0
        this.startPos.set(this.abs.getPosition())
        this.nowPos.set(0, 0, 0)
        this.addAngle = 0
    }

    fly(dt: number): void {
        this.angle = this.angle + this.addAngle

        //计算新位置
        FixedUtil.deltaTimeMovePostion(this.nowPos, this.nowPos, this.angleVelocity, dt)
        MathAngle.rotatePoint(this.nowPos, this.angle, tempPos1)
        tempPos1.add(this.startPos)
        this.setAbsPos(tempPos1);
    }
}