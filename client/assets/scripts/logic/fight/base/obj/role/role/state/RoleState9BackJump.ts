import { Vec3 } from "cc";
import { AbsRoleState, AbsState, AbsStateType } from "../../../state/AbsState"
import { CocosUtil } from "../../../../../../utils/CocosUtil";
import { tab } from "../../../../../../../Table/table_gen";


const tempPos = new Vec3();
const startPos = new Vec3()
export class RoleState9BackJump extends AbsRoleState {
    step: number = 0
    totalTime: number = 0
    nowTime: number = 0
    constructor() {
        super(AbsStateType.RoleBackJump)
    }

    enter(): boolean {
        this.abs.animationId = this.abs.backJump[1]
        startPos.x = this.abs.getPosition().x
        startPos.y = this.abs.getPosition().y

        tempPos.x = startPos.x
        tempPos.y = startPos.y
        this.totalTime = this.abs.backJump[2] || 1000
        this.step = this.abs.backJump[0] / this.totalTime
        this.nowTime = 0
        return true
    }

    updateFrame(dt: number) {
        this.nowTime += dt
        if (this.nowTime >= this.totalTime) {
            this.nowTime = this.totalTime
        }
        tempPos.x = startPos.x + this.step * this.nowTime
        this.abs.setPosition(tempPos)
    }

    avatarPlayComplete(animName: string): void {
        startPos.x += this.abs.backJump[0]
        this.abs.setPosition(startPos)

        this.abs.info.onSkillTrigger(tab.Triggertype.Triggertype_BackJumpFinish)

        super.avatarPlayComplete(animName)
    }
}