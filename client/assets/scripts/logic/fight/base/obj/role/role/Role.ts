import { Color, Input, Layers, Node, PhysicsSystem, Prefab, Quat, Size, Sprite, UITransform, Vec2, Vec3, _decorator, sp, v3, view } from 'cc';
import { CollisionObject, Trigger } from '../../../../../../framework/collision/CollisionObject';
import { AbsObj, AbsObjType } from '../../AbsObj';
import { AbsRole } from '../AbsRole';
import { AbsState, AbsStateType } from '../../state/AbsState';
import { RoleState1Idle } from './state/RoleState1Idle';
import { tab } from '../../../../../../Table/table_gen';
import { RoleState3Attack } from './state/RoleState3Attack';
import { RoleState4Dead } from './state/RoleState4Dead';
import { RoleState5Born } from './state/RoleState5Born';
import { RoleState6Revive } from './state/RoleState6Revive';
import { EventMgr } from '../../../../../mgr/EventMgr';
import { FightEvent } from '../../../../define/FightEvent';
import { RoleState7SkillCd } from './state/RoleState7SkillCd';
import { RoleInfo } from './RoleInfo';
import { CollisionGroup } from '../../../../define/FightDefine';
import { FightUITeamItem } from '../../../../view/common/FightUITeamItem';
import { RoleState8NoActive } from './state/RoleState8NoActive';
import { RoleState9BackJump } from './state/RoleState9BackJump';
import { RoleState10Vertigo } from './state/RoleState10Vertigo';
import { FightBarItem } from '../../../../view/common/FightBarItem';
import { PlayerControl } from './PlayerControl';
import { HoldTimeEffectUI } from '../../../effect/HoldTimeEffectUI';
import { Func } from '../../../../../utils/Func';
import { PREVIEW } from 'cc/env';

const { ccclass, property } = _decorator;
const tempPos = new Vec3(0, 0, 0);
@ccclass('Role')
export class Role extends AbsRole {
    objType: AbsObjType = AbsObjType.role;

    roleHead: FightUITeamItem
    barItem: FightBarItem
    info: RoleInfo

    holdEffect: HoldTimeEffectUI
    protected start(): void {
    }

    reset(): void {
        if (this.holdEffect) {
            this.holdEffect.remove()
            this.holdEffect = null
        }
        if (this.barItem) {
            this.barItem.node.destroy()
            this.barItem = null
        }

        super.reset()
    }

    initMachine() {
        super.initMachine()

        this.stateMachine.addState(new RoleState1Idle())
        this.stateMachine.addState(new RoleState3Attack())
        this.stateMachine.addState(new RoleState4Dead())
        this.stateMachine.addState(new RoleState5Born())
        this.stateMachine.addState(new RoleState6Revive())
        this.stateMachine.addState(new RoleState7SkillCd())
        this.stateMachine.addState(new RoleState8NoActive())
        this.stateMachine.addState(new RoleState9BackJump())
        this.stateMachine.addState(new RoleState10Vertigo())
    }

    setObjInfo(_info: RoleInfo) {
        super.setObjInfo(_info)
        this.setBounds(this.info.configTab.Bounds)

        this.setStateAnimId(AbsStateType.roleIdle, this.info.configTab.Idle)
        this.setStateAnimId(AbsStateType.roleDead, this.info.configTab.Dead)
        this.setStateAnimId(AbsStateType.RoleBorn, this.info.configTab.Born)
        this.setStateAnimId(AbsStateType.RoleRevive, this.info.configTab.Revive)
        this.setStateAnimId(AbsStateType.RoleSkillCd, this.info.configTab.Idle2)
        this.setStateAnimId(AbsStateType.RoleVertigo, this.info.configTab.Idle)
    }

    init() {
        this.speed = 200
        this.group = PhysicsSystem.PhysicsGroup[CollisionGroup.role]

        this.setTrigger(true)
        this.initBoby()

        this.changeState(AbsStateType.RoleNoActive)
    }

    /** 死亡 */
    onDead() {
        super.onDead()
        if (this.barItem) {
            this.barItem.isActive = false
        }
        EventMgr.emitFight(FightEvent.add_DeadEffect, this)
    }

    /** 复活 */
    onRevive() {
        if (this.barItem) {
            this.barItem.isActive = true
        }
        EventMgr.emitFight(FightEvent.remove_DeadEffect, this)
        EventMgr.emitFight(FightEvent.Hit_Effect_Add, tab.getData().GetKeyValue_ConfigTable().Resurrectioneffect, this)
        this.changeState(AbsStateType.RoleRevive)
        this.avatarShadow.node.active = true
    }

    updateFrame(dt: number): void {
        super.updateFrame(dt)
        if (this.holdEffect) {
            this.holdEffect.updateFrame(dt)
        }
    }

    //进入警戒范围
    onDetectorToEnemy(enemys: AbsRole[]) {
    }

    //掉落物进入拾取范围
    onCollect(b: CollisionObject) {

    }

    /** 触碰掉落 */
    onHitDrop(dropObj: AbsRole) {

    }

    sendClickSkill(uiPos: Vec3) {
        if (this.isDead) {
            return
        }
        if (this.isState(AbsStateType.RoleVertigo)) {
            return
        }
        this.info.useWeaponSkill(PlayerControl.ins.getClickNodePos())
        if (this.info.checkNormalCd()) {
            EventMgr.emitFight(FightEvent.Fight_Skill_Cding, uiPos)
            return
        }
        if (this.isAttack()) {
            return
        }
        this.changeState(AbsStateType.roleAttack)
    }

    onLevelUp() {
        console.log("播放升级特效---")
    }
    updateActive() {
        super.updateActive()
        if (this.barItem) {
            this.barItem.node.active = this.isActive
            this.barItem.isActive = true
            this.updateHP()
            if (this.isActive) {
                tempPos.set(this.node.position)
                tempPos.y += 125
                this.barItem.node.position = tempPos
            }
        }

    }

    updateHP() {
        if (this.barItem) {
            this.barItem.changeHp()
        }

    }
    hpAcive(isBool: Boolean) {

    }

    updateSkillCd(pro: number) {
        if (this.barItem) {
            this.barItem.changeSkillCd(pro)
        }
    }

    isShotIcon: boolean = false
    showShotPos() {
        if (!PREVIEW) {
            return
        }
        if (this.isShotIcon) {
            return
        }

        this.isShotIcon = true

        let grayNode = new Node("GrayNode")
        grayNode.layer = Layers.Enum.DEFAULT
        let uitrans = grayNode.addComponent(UITransform)
        uitrans.setContentSize(new Size(5, 5))

        this.node.addChild(grayNode)
        let spr = grayNode.addComponent(Sprite)
        spr.sizeMode = Sprite.SizeMode.CUSTOM
        spr.setTexture("textrue/bg_1")
        tempPos.set(this.getShotPos())
        tempPos.subtract(this.getPosition())
        grayNode.position = tempPos

    }

    getBonePos(boneName: string){
        if (boneName == "root/point_attack" && this.info.configTab.ShotPos.length){
            tempPos.set(Vec3.ZERO)
            tempPos.x = this.info.configTab.ShotPos[0] || 0
            tempPos.y = this.info.configTab.ShotPos[1] || 0
            return tempPos
        }else if (boneName == "root/point_beattack" && this.info.configTab.HitPos.length){
            tempPos.set(Vec3.ZERO)
            tempPos.x = this.info.configTab.HitPos[0] || 0
            tempPos.y = this.info.configTab.HitPos[1] || 0
            return tempPos
        }else{
            return this.getBonePos(boneName)
        }
    }
}

