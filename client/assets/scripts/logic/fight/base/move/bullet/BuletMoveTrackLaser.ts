import { Vec3 } from "cc";
import { FixedUtil } from "../../../util/FixedUtil";
import { BuletMoveLaser } from "./BuletMoveLaser";
import { BulletMoveLine } from "./BulletMoveLine";

const enum TrackLaserState {
    extend = 0,//延伸
    wating = 1,//停留
    shrink = 2//收缩
}
const tempPos = new Vec3();
/** 激光 延伸-停留-收缩
 * 宽度延伸，位置不变
 */
export class BuletMoveTrackLaser extends BuletMoveLaser {

    extendTime: number = 0.1
    watingTime: number = 0
    shrink: number = 0
    state: TrackLaserState = TrackLaserState.extend


    shrinkVelocity: Vec3 = new Vec3()
    init(): void {
        this.watingTime = this.abs.info.configTab.LiveTime[0]
        this.extendTime = this.abs.info.configTab.LiveTime[1]
        this.shrink = this.abs.info.configTab.LiveTime[2]

        super.init()
    }
    fly(dt: number): void {
        if (this.state == TrackLaserState.extend) {
            super.fly(dt)
            if (this.passTime >= this.extendTime) {
                this.state = TrackLaserState.wating
            }
        } else if (this.state == TrackLaserState.wating) {
            if (this.passTime >= (this.watingTime + this.extendTime)) {
                this.state = TrackLaserState.shrink
                this.shrinkVelocity.set(this.abs.velocity)
                this.shrinkVelocity.x = this.shrinkVelocity.x * -1
                this.shrinkVelocity.y = this.shrinkVelocity.y * -1
            }
        } else if (this.state == TrackLaserState.shrink) {
            this.onShrink(dt)
        }
    }

    onShrink(dt: number) {
        //计算新位置
        FixedUtil.deltaTimeMovePostion(this.widthPos, this.widthPos, this.shrinkVelocity, dt)
        this.updateSize()

        //计算新位置
        FixedUtil.deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt)
        this.setAbsPos(tempPos);
    }
}