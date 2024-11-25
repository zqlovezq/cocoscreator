import { tab } from "../../../../../../../Table/table_gen"
import { FightData } from "../../../../../data/FightData"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { PlayerControl } from "../PlayerControl"
import { Role } from "../Role"

export class RoleState1Idle extends AbsRoleState {
    constructor() {
        super(AbsStateType.roleIdle)
    }

    enter(): boolean {
        if (this.abs.info.isVertigo()){
            this.abs.changeState(AbsStateType.RoleVertigo)
            return false
        }

        let boo = super.enter()
        if (FightData.ins.pause) {
            this.abs.avatar.updatePause(true)
            return true
        }
        if (boo) {
            this.checkEnterAttack()
        }
        if (this.abs.isRole()){
            (this.abs as Role).showShotPos()
        }
        return boo
    }
    updateFrame(delteTime: number): void {
        super.updateFrame(delteTime)
        this.checkEnterAttack()
    }

    checkEnterAttack() {
        let isAudo = this.abs.info.isAudo
        if ( this.abs.info.isLeader && PlayerControl.ins.getClicking()) {
            isAudo = true
            this.abs.changeState(AbsStateType.roleAttack)
            return
        }

        if (isAudo && this.abs.info.checkSkillGroupUse(tab.AttackType.AttackType_Attack)) {
            this.abs.changeState(AbsStateType.roleAttack)
        }
    }
}