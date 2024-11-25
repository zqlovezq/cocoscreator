import { AbsObj } from "../../../AbsObj"
import { AbsRole } from "../../AbsRole"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { RoleInfo } from "../RoleInfo"
import { PlayerControl } from "../PlayerControl"
import { SearchEnemy } from "../../../../ai/SearchEnemy"
import { tab } from "../../../../../../../Table/table_gen"

export class RoleState10Vertigo extends AbsRoleState {
    constructor() {
        super(AbsStateType.RoleVertigo)
    }

}