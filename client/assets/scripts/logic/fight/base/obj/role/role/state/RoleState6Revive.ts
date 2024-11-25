import { Vec3 } from "cc"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { tab } from "../../../../../../../Table/table_gen"
import { EventMgr } from "../../../../../../mgr/EventMgr"
import { FightEvent } from "../../../../../define/FightEvent"

const velocity = new Vec3()

export class RoleState6Revive extends AbsRoleState {
    constructor() {
        super(AbsStateType.RoleRevive)
    }

    enter(): boolean {
        this.abs.isDead = false
        this.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_Revive)
        this.abs.info.onRevice()
        this.abs.isActive = false

        return super.enter()
    }

    leave(): void {
        this.abs.isActive = true
    }

    avatarPlayComplete(animName: string): void {
        this.abs.changeState(AbsStateType.roleIdle)
    }

}