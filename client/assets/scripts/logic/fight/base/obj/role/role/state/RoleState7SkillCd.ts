import { AbsObj } from "../../../AbsObj"
import { AbsRole } from "../../AbsRole"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { CDTime } from "../../../../cd/CDTime"
import { Role } from "../Role"
import { EventMgr } from "../../../../../../mgr/EventMgr"
import { FightEvent } from "../../../../../define/FightEvent"
import { tab } from "../../../../../../../Table/table_gen"
import { FightMacro } from "../../../../../define/FightDefine"
import { SkillGroupCd } from "../../../../skill/SkillGroupCd"

export class RoleState7SkillCd extends AbsRoleState {
    abs: Role
    constructor() {
        super(AbsStateType.RoleSkillCd)
    }
    enter(): boolean {
        this.abs.info.checkRemoveBuff(tab.ClearType.ClearType_Breath)

        this.abs.info.inSkillGroupCD(tab.AttackType.AttackType_Attack, this.onCdEnd.bind(this))

        this.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_BreathStart)
        this.updateCd(0)
        return super.enter()
    }
    updateFrame(delteTime: number): void {
        this.abs.info.normalGroupCD.updateFrame(delteTime)
        this.updateCd(this.abs.info.normalGroupCD.getProgress())
    }

    leave(): void {
        this.updateCd(1)
        
    }

    onCdEnd() {
        this.avatarPlayComplete("")
    }

    avatarPlayComplete(animName: string) {
        this.abs.info.normalFillUp()//装填
        this.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_BreathEnd)
        super.avatarPlayComplete(animName)
    }

    updateCd(per: number) {
        if (this.abs.isRole()) {
            this.abs.updateSkillCd(per)
        }
    }

}