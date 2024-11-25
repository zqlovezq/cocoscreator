import { tab } from "../../../../../../../Table/table_gen"
import { EventMgr } from "../../../../../../mgr/EventMgr"
import { FightRootControl } from "../../../../../FightRootControl"
import { FightEvent } from "../../../../../define/FightEvent"
import { FrameControl } from "../../../../frame/FrameControl"
import { AbsObjType } from "../../../AbsObj"
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"

export class RoleState4Dead extends AbsRoleState {
    constructor() {
        super(AbsStateType.roleDead)
    }
    enter(): boolean {
        this.abs.info.checkRemoveBuff(tab.ClearType.ClearType_Die)
        EventMgr.emitFight(FightEvent.deal_clear_bullet, this.abs)
        return super.enter()
    }
   
    avatarPlayComplete(animName: string): void {
        EventMgr.emitFight(FightEvent.AbsRole_Deal, this.abs)
    }

}