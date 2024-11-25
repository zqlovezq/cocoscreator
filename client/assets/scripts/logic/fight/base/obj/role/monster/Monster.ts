import { Color, Input, Layers, Node, PhysicsSystem, Prefab, Quat, Vec3, _decorator, sp, v2, v3 } from 'cc';
import { AbsRole } from '../AbsRole';
import { AbsObj, AbsObjType } from '../../AbsObj';
import { AbsStateType } from '../../state/AbsState';
import { PlayerControl } from '../role/PlayerControl';
import { MonsterState2Move } from './state/MonsterState2Move';
import { MonsterHunt } from '../../../ai/MonsterHunt';
import { MonsterState1Idle } from './state/MonsterState1Idle';
import { MonsterState3Attack } from './state/MonsterState3Attack';
import { MonsterState4Dead } from './state/MonsterState4Dead';
import { MonsterState5Born } from './state/MonsterState5Born';
import { MonsterState6Revive } from './state/MonsterState6Revive';
import { MonsterInfo } from './MonsterInfo';
import { CollisionGroup } from '../../../../define/FightDefine';
import { MonsterState7SkillCd } from './state/MonsterState7SkillCd';
import { MonsterState9BackJump } from './state/MonsterState9BackJump';
import { RoleState10Vertigo } from '../role/state/RoleState10Vertigo';
import { FixedUtil } from '../../../../util/FixedUtil';
import { tab } from '../../../../../../Table/table_gen';

const { ccclass, property } = _decorator;

const tempPos = new Vec3();

@ccclass('Monster')
export class Monster extends AbsRole {
    objType: AbsObjType = AbsObjType.enemy;
    info: MonsterInfo
    aiHunt: MonsterHunt
    commonBeatBack: Vec3 = new Vec3()
    initMachine() {
        super.initMachine()

        this.stateMachine.addState(new MonsterState1Idle())
        this.stateMachine.addState(new MonsterState2Move())
        this.stateMachine.addState(new MonsterState3Attack())
        this.stateMachine.addState(new MonsterState4Dead())
        this.stateMachine.addState(new MonsterState5Born())
        this.stateMachine.addState(new MonsterState6Revive())
        this.stateMachine.addState(new MonsterState7SkillCd())
        this.stateMachine.addState(new MonsterState9BackJump())
        this.stateMachine.addState(new RoleState10Vertigo())


        this.aiHunt = new MonsterHunt()
        this.aiHunt.setAbs(this)
        this.avatar.setFlashWhite(true)
    }

    setObjInfo(_info: MonsterInfo) {
        super.setObjInfo(_info)

        this.setBounds(this.info.configTab.Bounds)

        this.setStateAllAnimdId(this.info.configTab)
    }

    setStateAllAnimdId(conf: tab.MonsterTable) {
        this.setStateAnimId(AbsStateType.roleIdle, conf.IdleAnimationId)
        this.setStateAnimId(AbsStateType.roleMove, conf.WalkAnimationId)
        this.setStateAnimId(AbsStateType.roleDead, conf.DeadAnimationId)
        this.setStateAnimId(AbsStateType.RoleBorn, conf.BornAnimationId)
        this.setStateAnimId(AbsStateType.RoleRevive, conf.BornAnimationId)
        this.setStateAnimId(AbsStateType.RoleVertigo, conf.IdleAnimationId)
    }

    init() {
        this.speed = this.info.speed
        this.group = PhysicsSystem.PhysicsGroup[CollisionGroup.monster]

        this.initBoby()
        this.setTrigger(true)

    }
    updateFrame(dt: number): void {
        super.updateFrame(dt)
        if (this.isReviceBeatBack) {
            this.updateReviceBeatBack(dt)
        }
    }
    
    setReviceBeatBack(bo: boolean) {
        if (bo) {
            this.beatBackVelocity.x = this.info.configTab.ReviveDefeatDistance
            this.beatBackVelocity.y = 0
            this.beatBackVelocity.z = 500
        }
        this.setCommonBeatBack(bo)
    }

    beatBackUpdate(dt: number) {
        if (this.isReviceBeatBack) {
            this.isBeatBack = false
            return
        }
        super.beatBackUpdate(dt)
    }

    updateReviceBeatBack(dt: number) {
        this.reviceBeatTime += dt
        FixedUtil.deltaTimeMovePostion(tempPos, this.getPosition(), this.beatBackVelocity, dt)

        this.setPosition(tempPos);
        if (this.reviceBeatTime > this.beatBackVelocity.z) {
            this.setCommonBeatBack(false)
            return
        }

    }
}

