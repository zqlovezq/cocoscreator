import { Vec3 } from "cc"
import { FightRootControl } from "../../../../../FightRootControl"
import { AbsObjFactory } from "../../../AbsObjFactory"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { Role } from "../Role"
import { PlayerControl } from "../PlayerControl"
import { BulletInfo } from "../../../bullet/BulletInfo"
import { AbsObj } from "../../../AbsObj"
import { tab } from "../../../../../../../Table/table_gen"
import { BulletControl } from "../../../bullet/BulletControl"
import { CDTime } from "../../../../cd/CDTime"
import { SkillTab } from "../../../../../power/powerTab/SkillTab"
import { AbsRole } from "../../AbsRole"
import { SkillControl } from "../../../../skill/SkillControl"
import { Random } from "../../../../../util/Random"
import { BuffControl } from "../../../../buff/BuffControl"
import { AbsObjInfoAttr } from "../../../AbsObjInfo"
import { AbsRoleInfo } from "../../AbsRoleInfo"
import { BulletTab } from "../../../../../power/powerTab/BulletTab"
import { FightData } from "../../../../../data/FightData"

const enum CdType {
    BulletTimeCD = "BulletTimeCD",
    RunningShotCD = "RunningShotCD"
}

const velocity = new Vec3()
const tempData: any = {}
export class RoleState3Attack extends AbsRoleState {
    constructor() {
        super(AbsStateType.roleAttack)
    }

    info: AbsRoleInfo
    cd: CDTime = new CDTime()
    tmpSkill: SkillTab
    runningShotCount: number = 0
    bulletGroupId: number = 0 //子弹组id (连射为同一组)

    isTargetPos: boolean = false
    targetPos: Vec3 = new Vec3()

    testTime: number = 0
    setAbs(abs: AbsObj): void {
        super.setAbs(abs)
        this.info = (this.abs.info as AbsRoleInfo)
    }

    enter(): boolean {
        this.isTargetPos = false
        if (this.abs.info.isLeader) {
            this.isTargetPos = PlayerControl.ins.getClicking()
            this.targetPos.set(PlayerControl.ins.getClickNodePos())
        }
        this.info.onSkillTrigger(tab.Triggertype.Triggertype_PreAttack)
        this.tmpSkill = this.info.getNowSkill()
        if (this.tmpSkill == null) {
            console.warn("没有当前技能")
            this.avatarPlayComplete("")
            return
        }

        SkillControl.ins.useSkillTarget(this.tmpSkill, this.abs)


        this.abs.animationId = this.tmpSkill.ActionID
        this.abs.avatar.setOtherSpeedScale(0)
        if (this.tmpSkill.SkillType != tab.SkillType.SkillType_holdAttack) {
            this.abs.avatar.setOtherSpeedScale(Math.max(this.abs.info.attrData.getAttr(tab.AttrType.AttrType_AttackSpeed),-9000))
        }
        this.runningShotCount = 0
        this.bulletGroupId = BulletControl.ins.addSelfGroupId()
        this.cd.reset()
        this.cd.setTypeKey(CdType.BulletTimeCD)
        this.cd.setLiftTime(this.tmpSkill.BulletTime, this.onCdEnd.bind(this))
        this.cd.setSpeed(this.abs.avatar.otherSpeedScale)
        this.testTime = FightData.time
        this.actionTime = FightData.time
        return true
    }
    actionTime: number = 0



    onCdEnd(keyType: string) {
        if (keyType == CdType.BulletTimeCD) {
            //消耗的出手次数， 触发器可能会修改
            tempData.baseNum = this.tmpSkill.Expend
            this.info.onSkillTrigger(tab.Triggertype.Triggertype_Attack, tempData)
            this.info.subNormalAttack(tempData.baseNum)
            this.emitBullet()
            if (this.tmpSkill.isRunningShot()) {
                let addRate = 0
                if (!this.tmpSkill.isRunningShotSuccess(addRate)) {
                    return
                }

                this.runningShotCount = 0
                this.cd.reset()
                this.cd.setTypeKey(CdType.RunningShotCD)
                this.cd.setLiftTime(this.tmpSkill.RunningShot[0], this.onCdEnd.bind(this))
            }
        } else if (keyType == CdType.RunningShotCD) {
            this.runningShotCount++
            this.emitBullet()
            if (this.runningShotCount < this.tmpSkill.RunningShot[1]) {
                this.cd.reset()
                this.cd.setTypeKey(CdType.RunningShotCD)
                this.cd.setLiftTime(this.tmpSkill.RunningShot[0], this.onCdEnd.bind(this))
            }
        }
    }
    updateFrame(delteTime: number): void {
        super.updateFrame(delteTime)
        this.cd.updateFrame(delteTime)
    }

    avatarPlayComplete(animName: string): void {
       
        this.abs.info.checkRemoveBuff(tab.ClearType.ClearType_Attack)
        this.info.refreshHoldTime()//攻击后清除蓄力时间
        this.info.onSkillTrigger(tab.Triggertype.Triggertype_AttackCount)
        this.info.onSkillTrigger(tab.Triggertype.Triggertype_AttackEnd)

        if (!this.abs.isState(this.stateType)) {
            return
        }
        if (this.abs.info.checkNormalCd()) {
            this.abs.changeState(AbsStateType.RoleSkillCd)
            return
        }

        super.avatarPlayComplete(animName)
    }
    emitBullet() {
        let testBullet = tab.getData().BulletTableById.getValue(FightRootControl.ins.testBulletId)
        if (testBullet) {

            let bulletTab = this.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, testBullet.Id) as BulletTab

            if (this.abs.info.isAudo) {
                BulletControl.ins.audoEmitBullet(bulletTab, this.abs, this.bulletGroupId)
            } else {
                BulletControl.ins.clickEmitBullet(bulletTab, this.abs, this.targetPos, this.bulletGroupId)
            }

        } else {
            if (this.isTargetPos) {
                SkillControl.ins.useSkillBullet(this.tmpSkill, this.abs, this.targetPos, this.bulletGroupId, this.runningShotCount > 0)
            } else {
                let re = SkillControl.ins.useSkillBullet(this.tmpSkill, this.abs, null, this.bulletGroupId, this.runningShotCount > 0)
                if (this.tmpSkill.RunningShotBulletType == tab.RunningShotBulletType.RunningShotBulletType_SameEnemy  &&    re) {
                    this.isTargetPos = true
                    this.targetPos.set(re)
                }
            }
        }
    }
}