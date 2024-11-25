import { Monster } from "../Monster"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { RoleState5Born } from "../../role/state/RoleState5Born"

export class MonsterState5Born extends RoleState5Born {
    abs: Monster
}