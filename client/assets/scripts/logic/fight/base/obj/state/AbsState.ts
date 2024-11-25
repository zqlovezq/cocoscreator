import { AbsObj } from "../AbsObj";
import { Bullet } from "../bullet/Bullet";
import { AbsRole } from "../role/AbsRole";

/** 状态机类型 */
export enum AbsStateType {
    /** 默认 */
    default = 0,
    //----------角色相关 1-100--------------
    /** 空闲  */
    roleIdle = 1,
    /** 移动  */
    roleMove = 2,
    /** 攻击 */
    roleAttack = 3,
    /** 死亡 */
    roleDead = 4,
    /** 入场  */
    RoleBorn = 5,
    /** 复活  */
    RoleRevive = 6,
    /** 技能Cd */
    RoleSkillCd = 7,
    /** 未激活状态 */
    RoleNoActive = 8,
    /** 后跳 */
    RoleBackJump = 9,
    /** 眩晕 */
    RoleVertigo = 10,

    //----------子弹相关 101-200--------------

    /** 子弹入场  */
    bulletBorn = 101,
    /** 子弹移动 */
    bulletMove = 102,
    /** 子弹爆炸 */
    bulletBoom = 103,


    //----------PVP相关 201-300--------------
    pvpIdle = 201,
    pvpMove = 202,
    pvpAttack = 203,
    pvpDead = 204,
    pvpBorn = 205,
    pvpRevive = 206,
    pvpSkillCd = 207,
    pvpNoActive = 208,
    pvpBackJump = 209,
    pvpVertigo = 210,
}

export abstract class AbsState {
    stateType: AbsStateType
    abs: AbsObj
    constructor(sType: AbsStateType) {
        this.stateType = sType
    }
    setAbs(abs: AbsObj) {
        this.abs = abs
    }

    getAnimId(_stateType?: AbsStateType): number {
        if (this.abs) {
            return this.abs.stateAnims.get(_stateType || this.stateType) || 0
        }
        return 0
    }

    enter(): boolean {
        let animId = this.getAnimId()
        if (animId == 0) {
            this.avatarPlayComplete("")
            return false
        }
        this.abs.animationId = animId
        return true
    }
    updateFrame(delteTime: number) {
    }

    leave() {
    }
    avatarPlayComplete(animName: string) {
    }
}
export class AbsRoleState extends AbsState {
    abs: AbsRole

    avatarPlayComplete(animName: string) {
        this.abs.changeState(AbsStateType.roleIdle)
    }
}

export class AbsBulletState extends AbsState {
    abs: Bullet
}

export class DefaultState extends AbsState {
    constructor() {
        super(AbsStateType.default)
    }
}
