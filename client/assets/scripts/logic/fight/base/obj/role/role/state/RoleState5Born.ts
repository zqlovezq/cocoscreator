import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { FightData } from "../../../../../data/FightData"
import { BattleMainDataControl } from "../../../../../../model/home/battle/BattleMainDataControl"
import { GuideController } from "../../../../../../guide/GuideController"

export class RoleState5Born extends AbsRoleState {
    constructor() {
        super(AbsStateType.RoleBorn)
    }
    enter(): boolean {
        this.abs.info.onBorn()
        this.abs.updateHP()
        return super.enter()
    }

}