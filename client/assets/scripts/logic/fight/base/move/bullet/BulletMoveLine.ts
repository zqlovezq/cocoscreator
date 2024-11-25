import { Size, Vec3, game, math, v2, v3, view } from "cc";
import { AbsMoveType, BorderType, BulletMove, ScreenUtil } from "../AbsMove";
import { MathAngle } from "../../../../../framework/collision/Maths";
import { FightRootControl } from "../../../FightRootControl";
import { FixedUtil } from "../../../util/FixedUtil";
import { BulletTargetType } from "../../obj/bullet/BulletControl";



const tempPos = new Vec3();
const tempPos1 = new Vec3();
/** 移动--直线 */
export class BulletMoveLine extends BulletMove {
    constructor() {
        super(AbsMoveType.bulletMoveLine)
    }

    init(): void {
       

    }

    updateFrame(dt: number): void {
        super.updateFrame(dt)
    }

    fly(dt: number) {
        //计算新位置
        FixedUtil.deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt)

        this.setAbsPos(tempPos);

        if (this.abs.info.isScreenBounce()) {
            this.checkNextBorder(dt)
        }
    }

    updateNextPos(dt: number) {
        FixedUtil.deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt)
    }

    checkNextBorder(dt: number) {
        this.updateNextPos(dt)
        let type = ScreenUtil.getOutOfScreenType(tempPos)
        if (type != BorderType.empty) {
            //下一帧超出范围
            if (type == BorderType.leftRight) {
                this.abs.velocity.x = -this.abs.velocity.x
            } else if (type == BorderType.upDown) {
                this.abs.velocity.y = -this.abs.velocity.y
            }
            this.abs.velocity.normalize()
            this.abs.setVelocity(this.abs.velocity)
            this.abs.info.addScreenBounceCount()
            // FixedUtil.deltaTimeMovePostion(tempPos1, tempPos, this.abs.velocity, dt)
            // this.abs.setAngle(this.abs.skillTab.baseAngle + MathAngle.posToAngle(tempPos, tempPos1))
        }
    }
}


