import { AbsObj } from "../../../AbsObj"
import { AbsRole } from "../../AbsRole"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { RoleInfo } from "../RoleInfo"
import { PlayerControl } from "../PlayerControl"
import { SearchEnemy } from "../../../../ai/SearchEnemy"
import { tab } from "../../../../../../../Table/table_gen"

export class RoleState8NoActive extends AbsRoleState {
    constructor() {
        super(AbsStateType.RoleNoActive)
    }

    enter(): boolean {
        this.abs.isActive = false
        return true
    }

    leave(): void {

    }

}