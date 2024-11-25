import { AbsObj } from "../../AbsObj"
import { AbsRole } from "../../role/AbsRole"
import { AbsBulletState, AbsRoleState, AbsState, AbsStateType } from "../../state/AbsState"
import { BulletControl } from "../BulletControl"

export class BulletState103Boom extends AbsBulletState {
    constructor() {
        super(AbsStateType.bulletBoom)
    }

    avatarPlayComplete(animName: string): void {
        
        BulletControl.ins.checkDeathTrigger(this.abs)
        //销毁--
        this.abs.recycle()
    }
}