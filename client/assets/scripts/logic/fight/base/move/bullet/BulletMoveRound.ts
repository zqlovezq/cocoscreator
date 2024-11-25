import { Vec3, math, v2, v3 } from "cc";
import { AbsMoveType, BulletMove } from "../AbsMove";
import { BulletMoveLine } from "./BulletMoveLine";
import { CDTime } from "../../cd/CDTime";

const tempPos = new Vec3();
const tempPos1 = new Vec3();
/** 回旋--直线 */
export class BulletMoveRound extends BulletMoveLine {
    roundCount: number //回旋次数
    totalCount: number //总次数
    oneWayTime: number //表里配置的为单程时间
    waitingTime: number = 0  //等待时间

    setLiftTime(t: number) {
        this.oneWayTime = t
        this.roundCount = 0
        this.totalCount = this.abs.info.configTab.Round[0] * 2
        t = t * this.totalCount
        super.setLiftTime(t)
    }

    checkFlip() {
        if (this.waitingTime == 0) {
            this.abs.velocityFlip()
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

        if (this.roundCount != this.getPassTimeRoundCount()) {
            this.roundCount = this.getPassTimeRoundCount()
            if (this.roundCount == this.totalCount) {
                return
            }
            this.waitingTime = this.abs.info.configTab.Round[1]
            this.checkFlip()
        }
    }
    getPassTimeRoundCount() {
        return Math.floor(this.passTime / this.oneWayTime)
    }
}