import { Color, Input, Layers, Node, PhysicsSystem, Prefab, Quat, UITransform, Vec2, Vec3, _decorator, js, sp, v3 } from 'cc';
import { AbsObj, AbsObjType } from '../AbsObj';
import { StateMachine } from '../state/StateMachine';
import { Buff } from '../../buff/Buff';
import { AbsStateType } from '../state/AbsState';
import { AbsRoleInfo } from './AbsRoleInfo';
import { MonsterMoveLine } from '../../move/AbsMove';
import { FixedUtil } from '../../../util/FixedUtil';
import { DamageTick } from '../../cd/DamageTick';
import { Avatar } from '../../../animation/Avatar';
import { EventMgr } from '../../../../mgr/EventMgr';
import { FightEvent } from '../../../define/FightEvent';
import { ShadowEffect } from '../../effect/ShadowEffect';
import { GuideController } from '../../../../guide/GuideController';
import { LocalEvent } from '../../../../define/LocalEvent';

const { ccclass, property } = _decorator;
const tempPos = new Vec3();

const MAX_HIT_TIME = 160


/**战斗对象 地图上 角色、怪物*/
@ccclass('AbsRole')
export class AbsRole extends AbsObj {
    aiMachine: StateMachine

    /** 伤害间隔 */
    damageTicks: Array<DamageTick> = []
    /** 子弹伤害组 key_bool */
    bulletDamageGroup: Map<number, number> = new Map()
    /** 父级唯一id  （伤害忽略）a子弹死亡触发的b子弹，再碰撞时不做伤害 */
    parentSoleId: Map<string, number> = new Map()

    info: AbsRoleInfo

    backJump: number[]
    avatarShadow: ShadowEffect
    /** 复活击退 */
    isReviceBeatBack: boolean = false
    reviceBeatTime: number = 0

    reset(): void {
        this.avatarShadow.recycle()
        this.avatarShadow = null
        super.reset()
        if (this.backJump) {
            this.backJump = null
        }
        this.damageTicks.length = 0
        this.bulletDamageGroup.clear()
        this.parentSoleId.clear()
        this.beatBackSpeed = 0

        this.quitBeatBack()
        this.isReviceBeatBack = false
        this.beatBackVelocity.set(Vec3.ZERO)
        this.hitColorFrame = 0
    }

    initMachine() {
        this.initShadow(this.info.configTab.Shadow)
        super.initMachine()

        if (this.aiMachine == null) {
            this.aiMachine = new StateMachine()
        }

        this.aiMachine.setAbs(this)
        this.aiMachine.run()

        this.move = new MonsterMoveLine()
        this.move.setAbs(this)

    }

    updateFrame(dt: number): void {
        this.updateHitTime(dt)
        super.updateFrame(dt)

        for (let index = this.damageTicks.length - 1; index >= 0; index--) {
            const v = this.damageTicks[index];
            if (!v.isValid()) {
                this.damageTicks.splice(index, 1)
                continue
            }
            v.updateFrame(dt)
        }
    }

    setStealth(isbool: boolean) {
        this._isActive = !isbool
        this.setTrigger(!isbool)
        this.avatar.setOpaticy(isbool ? 180 : 255)
    }

    isAttack() {
        return this.isState(AbsStateType.roleAttack)
    }

    /** 射击位置 */
    getShotPos() {
        if (this.animationId > 0 && this.avatar.animTab && this.avatar.animTab.AttackPoint != "") {
            return this.getAvatarSpineBonePos(js.formatStr("root/%s", this.avatar.animTab.AttackPoint))
        }
        return this.getAvatarSpineBonePos("root/point_attack")
    }

    /** 命中位置 */
    getHitPos() {
        return this.getAvatarSpineBonePos("root/point_beattack")
    }

    getAvatarSpineBonePos(boneName: string) {
        let bone = this.getBonePos(boneName)
        if (bone) {
            if (this.avatar && this.avatar.spine && this.avatar.spine.node) {
                tempPos.x = bone.x * this.avatar.spine.node.scale.x * this.getScale().x + this.avatar.spine.node.position.x
                tempPos.y = bone.y * this.avatar.spine.node.scale.y * this.getScale().y + this.avatar.spine.node.position.y
            } else {
                tempPos.x = bone.x
                tempPos.y = bone.y
            }

            tempPos.x += this.getPosition().x
            tempPos.y += this.getPosition().y
            tempPos.z += this.getPosition().z
            return tempPos
        }
        return this.getPosition()
    }
    /** 获取骨骼位置， 英雄会在role里重写， 优先读取表内 */
    getBonePos(boneName: string) {
        return this.avatar.getSpineBonePos(boneName)
    }

    /** 触碰掉落 */
    onHitDrop(dropObj: AbsObj) {

    }

    addDamageTick(bulletSoleId: string, time: number) {
        let tick = new DamageTick()
        tick.reset()
        tick.setLiftTime(time)
        tick.bulletSoleId = bulletSoleId
        this.damageTicks.push(tick)

    }

    /** 检测伤害间隔 */
    checkDamageTick(bulletSoleId: string) {
        for (let index = 0; index < this.damageTicks.length; index++) {
            const v = this.damageTicks[index];
            if (v.bulletSoleId == bulletSoleId) {
                return v.isValid()
            }
        }
        return false
    }

    /** 添加伤害组id */
    addDamegeGroupId(groupId: number) {
        this.bulletDamageGroup.set(groupId, 1)
    }

    /** 检测是否已有同组子弹伤害 */
    checkBulletDamageGroup(groupId: number) {
        return groupId == 0 ? 0 : this.bulletDamageGroup.get(groupId) || 0
    }

    /** 添加伤害组id */
    addParentSoleId(soleId: string) {
        this.parentSoleId.set(soleId, 1)
    }

    /** 检测是否已被父级子弹伤害过 */
    checkParentSoleId(soleId: string) {
        return soleId == "" ? 0 : this.parentSoleId.get(soleId) || 0
    }
    changeState(stateType: AbsStateType) {
        if (this.isState(AbsStateType.RoleVertigo)) {
            if (!(stateType == AbsStateType.roleDead || stateType == AbsStateType.roleIdle)) {
                console.log("眩晕状态只能切换到死亡、空闲 状态")
                return
            }
        }
        if (GuideController.ins.isInFightGuiding() && this.info.isLeader) {
            if (stateType === AbsStateType.roleIdle) {
                EventMgr.emitLocal(LocalEvent.roleIdleState, true)
            } else {
                EventMgr.emitLocal(LocalEvent.roleIdleState, false)
            }
        }
        return super.changeState(stateType)
    }
    /** 死亡 */
    onDead() {
        this.setTrigger(false)
        this.isDead = true
        this.node.emit("AbsRole_dead", this)
        this.changeState(AbsStateType.roleDead)
    }

    /** 复活 */
    onRevive() {

        this.changeState(AbsStateType.RoleRevive)
    }
    setBackJump(dd: number[]) {
        this.backJump = dd
        this.changeState(AbsStateType.RoleBackJump)
    }

    hitColorFrame: number = 0;
    isBeatBack: boolean = false
    beatBackVelocity: Vec3 = new Vec3()
    beatBackSpeed: number = 0
    beatBackDt: number = 0
    maxBeatFrame: number = 0
    curBearFrame: number = 0
    /** 设置节点被命中 
     * @param _beatBackSpeed 击退速度
     */
    setIsHit(_beatBackSpeed: number) {
        if (this.hitColorFrame > 0) {
            return
        }
        this.beatBackSpeed = _beatBackSpeed
        this.hitColorFrame = MAX_HIT_TIME
    }

    updateHitTime(dt: number) {
        if (this.hitColorFrame == 0) {
            return
        }
        if (this.hitColorFrame == MAX_HIT_TIME) {
            this.maxBeatFrame = Math.ceil(MAX_HIT_TIME / dt)
            this.curBearFrame = this.maxBeatFrame
        }
        this.beatBackUpdate(dt)
        this.setFlashWhiteRate()
        this.hitColorFrame -= dt
        this.curBearFrame -= 1
        this.hitColorFrame = Math.max(this.hitColorFrame, 0)
        this.curBearFrame = Math.max(this.curBearFrame, 0)
        if (this.hitColorFrame == 0) {
            this.setFlashWhiteRate()
            this.quitBeatBack()
        }
    }

    setFlashWhiteRate() {
        this.avatar.setFlashWhiteRate(Math.min((MAX_HIT_TIME - this.hitColorFrame) / MAX_HIT_TIME, 1))
    }

    beatBackUpdate(dt: number) {
        if (this.beatBackSpeed == 0 || this.curBearFrame == 0) { //没有击退速度
            this.quitBeatBack()
            return
        }

        if (this.curBearFrame + 1 == this.maxBeatFrame) {
            this.isBeatBack = true

            this.beatBackVelocity.set(this.velocity)
            this.beatBackVelocity.normalize()
            // this.beatBackVelocity.x = -this.beatBackVelocity.x
            // this.beatBackVelocity.y = -this.beatBackVelocity.y

            this.beatBackVelocity.x = Math.abs(this.beatBackVelocity.x)
            this.beatBackVelocity.y = Math.abs(this.beatBackVelocity.y)

            this.beatBackVelocity.multiplyScalar(this.beatBackSpeed * this.voRatio)

            this.beatBackDt = dt

            FixedUtil.deltaTimeMovePostion(tempPos, this.avatar.node.position, this.beatBackVelocity, this.beatBackDt * 2)
            tempPos.x = Math.min(tempPos.x, 20)
            tempPos.y = Math.min(tempPos.y, 20)
            this.avatar.node.position = tempPos
            return
        } else if (this.curBearFrame > 1) {
            return
        } else if (this.curBearFrame == 1) {
            if (this.isBeatBack) {
                FixedUtil.deltaTimeMovePostion(tempPos, this.getPosition(), this.velocity, this.beatBackDt * 2)
                this.setPosition(tempPos);
            }
        }

        this.quitBeatBack()
    }
    quitBeatBack() {
        this.isBeatBack = false
        if (this.avatar && this.avatar.node) {
            tempPos.x = tempPos.y = tempPos.z = 0
            this.avatar.node.position = tempPos
        }
    }

    updateHP() {

    }

    initShadow(animId: number) {
        this.avatarShadow = ShadowEffect.create()
        EventMgr.emitFight(FightEvent.Effect_Add_To_Layer, "shadow", this.avatarShadow.node)
        this.avatarShadow.run(animId)
    }

    updateActive() {
        this.avatarShadow.node.active = this.isActive
    }


    setPosition(position: Vec3): void {
        super.setPosition(position)
        if (this.avatarShadow) {
            this.avatarShadow.node.setPosition(position)
        }
    }

    setSkillBearBack(bo: boolean, velocity: Vec3) {
        if (bo) {
            this.beatBackVelocity.set(velocity)
        }
        this.setCommonBeatBack(bo)
    }
    setCommonBeatBack(bo: boolean) {
        this.isReviceBeatBack = bo
        if (bo) {
            this.reviceBeatTime = 0
        }
    }
}
