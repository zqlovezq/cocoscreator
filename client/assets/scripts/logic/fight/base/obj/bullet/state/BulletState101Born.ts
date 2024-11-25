import Sound from "../../../../../utils/Sound"
import { AbsBulletState, AbsRoleState, AbsState, AbsStateType } from "../../state/AbsState"

export class BulletState101Born extends AbsBulletState {
    constructor() {
        super(AbsStateType.bulletBorn)
    }
    enter(): boolean {
        Sound.ins.PlayHitEffect(this.abs.info.bornSound())
        return super.enter()
    }

    avatarPlayComplete(animName: string): void {
        this.abs.changeState(AbsStateType.bulletMove)
    }
}