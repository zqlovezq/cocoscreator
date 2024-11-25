import { _decorator, absMax, instantiate, js, Layers, Node, PhysicsSystem, Prefab, Quat, sp, Vec3 } from 'cc';
import { Func } from '../../../../utils/Func';
import { CollisionObject, Trigger } from '../../../../../framework/collision/CollisionObject';
import { CollisionBody } from '../../../../../framework/collision/CollisionBody';
import { AbsObj, AbsObjType } from '../AbsObj';
import { AbsRole } from '../role/AbsRole';
import { AbsMoveType, BulletMove } from '../../move/AbsMove';
import { BulletMoveLine } from '../../move/bullet/BulletMoveLine';
import { tab } from '../../../../../Table/table_gen';
import { BulletState101Born } from './state/BulletState101Born';
import { BulletState102Move } from './state/BulletState102Move';
import { BulletState103Boom } from './state/BulletState103Boom';
import { AbsState, AbsStateType } from '../state/AbsState';
import { BulletInfo } from './BulletInfo';
import { BulletMoveRound } from '../../move/bullet/BulletMoveRound';
import { BulletMoveTarget } from '../../move/bullet/BulletMoveTarget';
import { BulletControl, BulletTargetType } from './BulletControl';
import { BulletMoveCentrifugation } from '../../move/bullet/BulletMoveCentrifugation';
import { DamageCalculation } from '../../damage/DamageCalculation';
import { AbsObjInfoAttr } from '../AbsObjInfo';
import { DamageLab } from '../../damage/DamageLab';
import { BulletForwardArrow, CollisionGroup } from '../../../define/FightDefine';
import { MathAngle } from '../../../../../framework/collision/Maths';
import { ShapeType } from '../../../../../framework/collision/CollisionShape';
import { AbsOwner } from '../AbsOwner';
import { DamageData } from '../../damage/DamageData';
import { BulletMoveForwardOwner } from '../../move/bullet/BulletMoveForwardOwner';
import { EventMgr } from '../../../../mgr/EventMgr';
import { FightEvent } from '../../../define/FightEvent';
import { FightDamageRankItem } from '../../../view/damage/FightDamageRankItem';
import { FightData } from '../../../data/FightData';
import { BuffControl } from '../../buff/BuffControl';
import { BuletMoveLaser } from '../../move/bullet/BuletMoveLaser';
import Sound from '../../../../utils/Sound';
import { BuletMoveTrackLaser } from '../../move/bullet/BuletMoveTrackLaser';
import { Random } from '../../../util/Random';
const { ccclass, property } = _decorator;
const tempPos = new Vec3(0, 0, 0);


@ccclass('Bullet')
export class Bullet extends AbsObj {
    objType: AbsObjType = AbsObjType.bullet;

    move: BulletMove
    info: BulletInfo

    /** 子弹唯一id */
    bulletSoleId: string

    /** 子弹所有人 */
    owner: AbsOwner

    bulletTargetType: BulletTargetType = BulletTargetType.default
    /** 目标 */
    targetRole: AbsRole
    /** 目标位置 */
    targetPos: Vec3 = new Vec3()
    /** 开始位置 */
    startPos: Vec3 = new Vec3()

    /** 伤害过的对象 */
    havaDamageObjIds: Array<number> = new Array()

    /** 命中次数 */
    hitCount: number = 0

    isCanTrigger: boolean = true
    /** 飞出屏幕 */
    OutOfScreen: boolean = false

    hitBackIds:Map<number,number> = new Map()

    reset(): void {
        super.reset()
        this.hitCount = 0
        this.havaDamageObjIds.length = 0
        this.OutOfScreen = false
        this.targetRole = null
        this.targetPos.x = this.targetPos.y = this.targetPos.z = 0
        this.startPos.x = this.startPos.y = this.startPos.z = 0
        this.hitBackIds.clear()
        if (this.isMaskParent()) {
            let parent = this.node.parent
            this.node.removeFromParent()
            parent.destroy()
        }
    }
    initMachine() {
        super.initMachine()

        this.stateMachine.addState(new BulletState101Born())
        this.stateMachine.addState(new BulletState102Move())
        this.stateMachine.addState(new BulletState103Boom())
    }

    setObjInfo(_info: BulletInfo) {
        super.setObjInfo(_info)

        // this.setBounds(this.info.configTab.Bounds)
        this.setBoundTabs()

        this.setStateAnimId(AbsStateType.bulletBorn, this.info.configTab.BornAnimationId)
        this.setStateAnimId(AbsStateType.bulletMove, this.info.configTab.WalkAnimationId)
        this.setStateAnimId(AbsStateType.bulletBoom, this.info.configTab.DeadAnimationId)
    }

    setBoundTabs(): void {
        this.isCanTrigger = false
        let bound = this.info.configTab.boundTabs[0]
        if (bound.Type == tab.BoundType.BoundType_Circle) {
            this.type = ShapeType.Sphere
            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]
            this.radius = bound.Parameters[2]
            if (this.center.x != 0 || this.center.y != 0 || this.radius != 0) {
                this.isCanTrigger = true
            }
        } else if (bound.Type == tab.BoundType.BoundType_Rectangle) {
            this.type = ShapeType.Box

            this.center.x = bound.Parameters[0]
            this.center.y = bound.Parameters[1]
            this.size.x = bound.Parameters[2]
            this.size.y = bound.Parameters[3]
            if (this.center.x != 0 || this.center.y != 0 || this.size.x != 0 || this.size.y != 0) {
                this.isCanTrigger = true
            }
            // this.center.x = 0
            // this.center.y = 0
            // this.size.x = 100
            // this.size.y = 20

        }
    }

    init(): void {
        this.speed = this.info.configTab.Speed

        this.group = PhysicsSystem.PhysicsGroup[CollisionGroup.roleBullet]

        this.setTrigger(this.isCanTrigger)
        this.initBoby()
        this.isDead = true
        this.bulletSoleId = js.formatStr("%s_%s_%s", this.body.id, this.configId, Func.random(1, 100000))
    }

    setVelocity(ve: Vec3) {
        super.setVelocity(ve)
        this.checkNodeAngle()
    }

    setVelocityAngle(angle: number) {
        super.setVelocityAngle(angle)
        this.checkNodeAngle()
    }

    checkNodeAngle() {
        if (this.isMaskParent() || this.info.configTab.Trajectory == tab.Trajectory.Trajectory_StraightLine || this.info.configTab.Trajectory == tab.Trajectory.Trajectory_Laser || this.info.configTab.Trajectory == tab.Trajectory.Trajectory_Trajectory) {
            this.setAngle(this.voAngle)
        }
    }

    isMaskParent() {
        return this.node && this.node.parent && this.node.parent.name == "BulletLaunchMask"
    }


    setAngle(angle: number) {
        if (this.isMaskParent()) {
            this.voAngle = 0
            super.setAngle(this.voAngle)
            MathAngle.angleToDirection(this.voAngle, this.velocity)
            this.velocity.multiplyScalar(this.speed * this.voRatio)
            this.node.parent.angle = angle
        } else {
            super.setAngle(angle)
        }
    }

    setAbsOnwer(owner: AbsOwner) {
        this.owner = owner
        if (owner && owner.abs && owner.abs.isDead) {
            owner.lockAttr()
        }
    }

    getTruePosition() {
        if (this.isMaskParent()) {
            MathAngle.rotatePoint(this.node.position, this.node.parent.angle, tempPos)
            tempPos.add(this.node.parent.position)
            // console.log("实际位置", tempPos.x, tempPos.y, "遮罩位置", this.node.parent.position.x, this.node.parent.position.y, "节点位置", this.node.position.x, this.node.position.y)
            return tempPos
        } else {
            return this.getPosition()
        }
    }

    setStartPos(pos: Vec3) {
        this.startPos.set(pos)
        if (this.isMaskParent()) {
            this.node.parent.position = this.startPos
            tempPos.set(Vec3.ZERO)
            this.setPosition(tempPos)
            this.getTruePosition()
        } else {
            this.setPosition(this.startPos)
        }
    }
    setTargetType(type: BulletTargetType, target: AbsRole | Vec3 | number) {
        this.bulletTargetType = type
        this.setTargetRole(null)
        this.setTargetPos(null)
        if (this.info.configTab.isSearchNone() && !this.info.configTab.isExtends()) {
            this.bulletTargetType = BulletTargetType.default
            return
        }
        switch (type) {
            case BulletTargetType.role:
                this.setTargetRole(target as AbsRole)
                break
            case BulletTargetType.pos:
                this.setTargetPos(target as Vec3)
                break
            case BulletTargetType.angle:
                this.voAngle = target as number
                break
        }
    }

    private setTargetPos(pos: Vec3) {
        if (pos == null) {
            this.targetPos.set(0, 0, 0)
            return
        }
        this.targetPos.set(pos)
    }

    private setTargetRole(abs: AbsRole) {
        this.targetRole = abs
    }

    getBulletGroup() {
        //ToDo  正常角色发出的子弹为roleBullet, 怪物子弹为monsterBullet    roleBullet碰撞怪物， monsterBullet碰撞角色
        let bulletGroup = CollisionGroup.roleBullet
        if (this.info.configTab.EffectUnit == tab.EffectUnit.EffectUnit_Mine) {//自身
            if (this.owner.objType == AbsObjType.role) {
                bulletGroup = CollisionGroup.monsterBullet
            }
        } else if (this.info.configTab.EffectUnit == tab.EffectUnit.EffectUnit_Friend) {//友方
            if (this.owner.objType == AbsObjType.role) {
                bulletGroup = CollisionGroup.monsterBullet
            }
        } else if (this.info.configTab.EffectUnit == tab.EffectUnit.EffectUnit_Enemy) {//敌方
            if (this.owner.objType == AbsObjType.enemy) {
                bulletGroup = CollisionGroup.monsterBullet
            }
        }
        return bulletGroup
    }

    forwardArrowOffset() {
        let offsety = this.info.getObjAttr(AbsObjInfoAttr.forwardArrowOffsetY)
        if (offsety == 0) {
            return
        }
        let offsetAngle = (offsety > 0 ? 90 : -90) + this.voAngle
        MathAngle.angleToDirection(offsetAngle, tempPos)
        tempPos.multiplyScalar(Math.abs(offsety))
        this.startPos.add(tempPos)
        this.setPosition(this.startPos)
    }

    targetDirection() {
        if (this.bulletTargetType == BulletTargetType.angle) {
            this.setVelocityAngle(this.voAngle)
        } else if (this.bulletTargetType == BulletTargetType.pos) {
            this.traceDirection(this.startPos, this.targetPos)
        } else if (this.bulletTargetType == BulletTargetType.role) {
            this.traceDirection(this.startPos, this.targetRole.getHitPos())
        }
    }

    run() {
        this.isOwnDeath = this.info.isOwnDeath()
        if (this.info.isForwardOwner()) {
            this.bulletTargetType = BulletTargetType.owner
        }

        this.updateGroup(this.getBulletGroup())
        this.targetDirection()
        this.isDead = false

        if (this.info.isForwardArrowAndType(BulletForwardArrow.intersect)) { //多向剑相交， 需要先设置发射点偏移量
            this.forwardArrowOffset()
            this.targetDirection()
        }
        this.move = this.getMove(this.info.configTab.Trajectory)

        if (this.info.isForwardArrowAndType(BulletForwardArrow.parallel)) { //多向剑平行，朝向角度计算完之后， 设置发射点偏移量
            this.forwardArrowOffset()
        }
        //设置正向剑属性

        this.changeState(AbsStateType.bulletBorn)
    }
    ignoreTriggerTime: number = 0
    updateFrame(dt: number) {
        if (this.isDead) {
            return
        }
        if (this.owner && !this.owner.isLock) { //来源属性非锁定状态， 并且发射者已死亡
            if (this.owner.abs && this.owner.abs.isDead) {
                this.recycle()
                return
            }
        }
        super.updateFrame(dt)

    }



    getMove(moveType: tab.Trajectory) {
        let absMove: BulletMove
        if (this.info.isForwardOwner()) {
            absMove = new BulletMoveForwardOwner()
        } else if (this.info.isCentrifugation()) {
            absMove = new BulletMoveCentrifugation()
        } else if (this.info.isRound()) {
            absMove = new BulletMoveRound()
        } else {
            if (moveType == tab.Trajectory.Trajectory_StraightLine) {
                absMove = new BulletMoveLine()
            } else if (moveType == tab.Trajectory.Trajectory_Trackless) {
                absMove = new BulletMoveTarget()
            } else if (moveType == tab.Trajectory.Trajectory_Laser) {
                absMove = new BuletMoveLaser()
            } else if (moveType == tab.Trajectory.Trajectory_Trajectory) {
                absMove = new BuletMoveTrackLaser()
            } else {
                absMove = new BulletMove(AbsMoveType.default)
            }
        }

        absMove.setAbs(this)
        absMove.setLiftTime(this.info.getLiveTime())
        absMove.init()
        return absMove
    }

    onMoveComplete() {
        this.changeState(AbsStateType.bulletBoom)
    }


    onTrigger(b: CollisionBody, trigger: Trigger) {
        if (trigger == Trigger.exit) return;

        let defanseAbs = (b.object as AbsRole)
        if (trigger == Trigger.enter) {
            this.onHitRole(defanseAbs)
        } else if (trigger == Trigger.stay) {
            if (this.info.configTab.DamageTick > 0) {
                if (defanseAbs.checkDamageTick(this.bulletSoleId)) {
                    return
                }
                this.onHitRole(defanseAbs)
            }
        }
    }

    /**
     * 命中角色
     * @param defanseAbs 
     */
    onHitRole(defanseAbs: AbsRole) {
        if (defanseAbs.info.isInvincible()) {
            return
        }

        if (defanseAbs.checkParentSoleId(this.info.parentSoleId) != 0) {
            // console.log("父对象已伤害过")
            return
        }
        if (this.info.isOlnyOne() && defanseAbs.checkBulletDamageGroup(this.info.groupId)) {
            // console.log("子弹组已伤害过")
            return
        }
        Sound.ins.PlayHitEffect(this.info.hitSound())
        if (this.owner.abs && !this.owner.abs.isDead) {
            this.owner.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_AtHIT, { otherAbsInfo: defanseAbs.info })
        }
        let damageData: DamageData
        if (this.info.configTab.DamageScale.length > 0) {

            super.onHitRole(defanseAbs)
            defanseAbs.info.beHitFront(this)
            this.endDamegeObj = defanseAbs

            let damageAmount = this.info.configTab.DamageAmount + 1
            for (let index = 0; index < damageAmount; index++) {
                damageData = DamageCalculation.bullet_damageCalculate(this, defanseAbs, index)
                if (damageData) {
                    //目前只有眩晕
                    BuffControl.ins.addBuff(damageData.addBuffTab, this.owner.objId, defanseAbs)
                    defanseAbs.info.onHitDamage(damageData)
                    DamageLab.addShowDamageNum(damageData, defanseAbs, index)
                }
            }
        } else {
            // console.log("碰撞角色，但是没有伤害")
        }

        if (damageData && damageData.isDamage() && damageData.damage >= 0) {
            defanseAbs.setIsHit(this.info.configTab.HitShake)
            if (defanseAbs.isMonster()) {
                if (!defanseAbs.info.configTab.IsDefeat) {
                    defanseAbs.beatBackSpeed = defanseAbs.curBearFrame = 0
                }
                if (defanseAbs.info.configTab.IsHitBack && !this.hitBackIds.has(defanseAbs.objId)) {
                    if (this.info.configTab.isHitBack()) {
                        tempPos.x = this.info.configTab.HitBack[1]
                        tempPos.z = this.info.configTab.HitBack[0]
                        tempPos.y = 0
                        defanseAbs.setSkillBearBack(true, tempPos)
                        this.hitBackIds.set(defanseAbs.objId, 1)
                    }else if (Random.isSuccess(this.owner.getAttrData().getAttr(tab.AttrType.AttrType_HitBackChance))){
                        tempPos.x = tab.getData().GetKeyValue_ConfigTable().NormalHitBack[1]
                        tempPos.z = tab.getData().GetKeyValue_ConfigTable().NormalHitBack[0]
                        tempPos.y = 0
                        defanseAbs.setSkillBearBack(true, tempPos)
                        this.hitBackIds.set(defanseAbs.objId, 1)
                    }
                }
            }
        }
        if (defanseAbs.isDead) {
            EventMgr.emitFight(FightEvent.Kill, damageData, this.owner, defanseAbs)
        }
        if (!defanseAbs.isDead && this.info.configTab.DamageTick) {
            defanseAbs.addDamageTick(this.bulletSoleId, this.info.configTab.DamageTick)
        }

        defanseAbs.info.beHitBack(this)

        BulletControl.ins.checkHitTrigger(this)

        if (this.info.isHitDeath()) {
            this.info.addObjAttr(AbsObjInfoAttr.hitCount, 1)
            if (this.info.isPenetrationDeath()) {//穿透完毕
                if (this.info.isCatapult()) {// 检测是否弹射
                    this.info.addObjAttr(AbsObjInfoAttr.catapultCount, 1)
                    if (!this.info.isCatapultDeath()) {//还有弹射次数
                        BulletControl.ins.addCatapult(this, defanseAbs)
                        return
                    }
                }
                this.move.onFlyComplete()
            }
        }
    }
    isOwnDeath: boolean = false
    /** 子弹所有人死亡 */
    onOwnerDeal() {
        this.owner.lockAttr()
        if (this.isOwnDeath) {
            this.move.onFlyComplete()
        }
    }

    preCollider() {
        if (this.ignoreTrigger && this.isCollisionInterval()) {
            if (FightData.time - this.ignoreTriggerTime >= this.info.configTab.CollisionInterval) {
                this.setIgnoreTrigger(false)
            }
        }
    }
    lateCollider() {
        if (this.isCollisionInterval() && !this.ignoreTrigger) {
            this.setIgnoreTrigger(true)
            this.ignoreTriggerTime = FightData.time
        }
    }

    isCollisionInterval() {
        if (!this.isDead && this.info) {
            return this.info.configTab.CollisionInterval > 0
        }
        return super.isCollisionInterval()
    }

    avatarUpdate() {
        if (this.animationId > 0 && this.avatar && this.avatar.animTab) {
            let zIndex = 0
            switch (this.avatar.animTab.Type) {
                case tab.AnimationType.AnimationType_SkeletonData:
                    zIndex = 1
                    break
                case tab.AnimationType.AnimationType_Plist:
                    zIndex = 2
                    break
                case tab.AnimationType.AnimationType_SpriteFrame:
                    zIndex = 3
                    break
            }
            Func.setzIndex(this.node, zIndex)
        }
    }

    addHitCount() {
        this.hitCount += 1
    }

    /** 添加一个伤害目标id */
    addHavaDamageObjId(objId: number) {
        Func.remove(this.havaDamageObjIds, objId)
        this.havaDamageObjIds.push(objId)
    }

    addhavaDamageObjIds(objIds: number[]) {
        if (objIds){
            for (let index = 0; index < objIds.length; index++) {
                const element = objIds[index];
                this.addHavaDamageObjId(element)
            }
        }
    }
}

