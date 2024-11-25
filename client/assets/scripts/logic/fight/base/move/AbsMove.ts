import { Size, Vec3, math, view } from "cc";
import { AbsObj, AbsObjType } from "../obj/AbsObj"
import { Bullet } from "../obj/bullet/Bullet"
import { FrameControl } from "../frame/FrameControl";
import Fixed from "../../../../framework/collision/Fixed";
import { tab } from "../../../../Table/table_gen";
import { UIMgr } from "../../../mgr/UIMgr";
import { FixedUtil } from "../../util/FixedUtil";
import { MathAngle } from "../../../../framework/collision/Maths";
import { AbsRole } from "../obj/role/AbsRole";
import { FightMacro } from "../../define/FightDefine";
import { ViewSize } from "../../../define/ViewDefine";

/** 状态机类型 */
export enum AbsMoveType {
    /** 默认 */
    default = 0,
    /** 速率 */
    velocity = 1,

    //----------子弹相关 101-200--------------
    /** 子弹直线 */
    bulletMoveLine = 101,
    /** 回旋直线 */
    bulletMoveRound = 102,
    /** 无轨迹  */
    BulletMoveTarget = 103,
}
const tempPos = new Vec3();
const tempPos1 = new Vec3();
/** 移动 （默认就是速率移动） */
export abstract class AbsMove {
    moveType: AbsMoveType
    abs: AbsObj
    constructor(sType: AbsMoveType) {
        this.moveType = sType
    }
    setAbs(abs: AbsObj) {
        this.abs = abs
    }

    init() {

    }

    setAbsPos(v3: Vec3) {
        this.abs.setPosition(v3)
    }

    updateFrame(dt: number) {
        this.fly(dt)
        if (this.checkComplete()) {
            this.onFlyComplete()
        }
    }
    fly(dt: number) {

    }
    onFlyComplete() {
        this.abs.onMoveComplete()
    }
    /** 检查是否完成 */
    checkComplete() {
        return false
    }
}

export class BulletMove extends AbsMove {
    public lifeTime: number = 0
    protected passTime: number = 0

    abs: Bullet
    setLiftTime(t: number) {
        this.lifeTime = t
        this.passTime = 0
    }

    updateFrame(dt: number) {
        this.passTime = this.passTime + dt
        super.updateFrame(dt)
        this.checkRotate()
    }

    checkRotate() {
        if (this.abs == null || this.abs && this.abs.isDead) {
            return
        }
        if (this.abs.info.isRotate()) {
            this.abs.addAngle(this.abs.info.configTab.Rotate)
        }
    }

    checkComplete(): boolean {
        if (this.abs.info.isTimeDeath()) {
            if (this.passTime >= this.lifeTime) {
                return true
            }
        } else if (this.abs.info.isHitDeath()) {
            if (ScreenUtil.isOutOfScreenThird(this.abs.getTruePosition())) {
                this.abs.OutOfScreen = true
                return true
            }
        }
        //判定是否到达目标
        return false
    }

    traceDirection(startPos: Vec3, targetPos: Vec3) {
        Vec3.subtract(tempPos, targetPos, startPos);
        tempPos.normalize()
        this.abs.setVelocityAndRatio(tempPos, 1)
    }

    setVoAngle(angle: number) {
        this.abs.setVelocityAngle(angle)
    }
}

export class MonsterMoveLine extends AbsMove {

    constructor() {
        super(AbsMoveType.velocity)
    }

    abs: AbsRole
    updateFrame(dt: number) {
        super.updateFrame(dt)
    }

    fly(dt: number) {
        if (this.abs.isBeatBack || this.abs.isReviceBeatBack) {
            return
        }
        //计算新位置
        FixedUtil.deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt, this.abs.info.attrData.getAttr(tab.AttrType.AttrType_SpeedMoveAdd))
        this.setAbsPos(tempPos);
    }

    checkComplete(): boolean {
        //判定是否到达目标
        return false
    }
}

export enum BorderType {
    empty = 0,
    leftRight = 1,
    upDown = 2,
}

/** 满屏再三分之一 */
export class ScreenUtil {
    /** 是否超出屏幕三分之一 */
    static isOutOfScreenThird(pos: Vec3): boolean {
        if (Math.abs(pos.x) > ViewSize.hirdSize.width || Math.abs(pos.y) > ViewSize.hirdSize.height) {
            return true
        }
        return false
    }

    /** 是否超出屏幕 */
    static isOutOfScreen(pos: Vec3): boolean {
        if (Math.abs(pos.x) > ViewSize.halfSize.width || Math.abs(pos.y) > ViewSize.halfSize.height) {
            return true
        }
        return false
    }

    /** 获取超出屏幕的类型 */
    static getOutOfScreenType(pos: Vec3): BorderType {
        if (Math.abs(pos.x) > ViewSize.halfSize.width) {
            return BorderType.leftRight
        } else if (Math.abs(pos.y) > ViewSize.halfSize.height) {
            return BorderType.upDown
        }
        return BorderType.empty
    }
}