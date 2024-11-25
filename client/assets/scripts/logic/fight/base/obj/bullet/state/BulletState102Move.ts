import { AbsObj } from "../../AbsObj"
import { AbsRole } from "../../role/AbsRole"
import { AbsBulletState, AbsRoleState, AbsState, AbsStateType } from "../../state/AbsState"
import { BulletControl } from "../BulletControl"

export class BulletState102Move extends AbsBulletState {
    constructor() {
        super(AbsStateType.bulletMove)
    }
    time: number = 0
    enter(): boolean {
        if (this.getAnimId() == 0) {
            return true
        }
        return super.enter()
    }
    updateFrame(delteTime: number): void {
        if (this.abs) {
            if (this.abs.isDead) {
                return
            }
            if (this.abs.info.configTab.isIntervalEffect()) {

                this.time += delteTime
                if (this.time >= this.abs.info.intervalTime()) {
                    this.time = 0
                    BulletControl.ins.intervalTrigger(this.abs)
                }
            }
            this.abs.move && this.abs.move.updateFrame(delteTime)
        }
    }
    avatarPlayComplete(animName: string): void {
        this.abs.changeState(AbsStateType.bulletBoom)
    }
}