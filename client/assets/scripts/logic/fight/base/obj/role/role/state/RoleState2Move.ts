import { Vec3 } from "cc";
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { CocosUtil } from "../../../../../../utils/CocosUtil";


const tempPos = new Vec3();
export class RoleState2Move extends AbsRoleState {
    constructor() {
        super(AbsStateType.roleMove)
    }

    updateFrame(dt: number) {
        this.abs.move.updateFrame(dt)
    }
}