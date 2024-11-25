import { Vec3 } from "cc";
import { RoleState1Idle } from "../../role/state/RoleState1Idle";
import { Monster } from "../Monster";

export class MonsterState1Idle extends RoleState1Idle {
    abs: Monster

    enter(): boolean {
        this.abs.aiHunt.nextCheck = 0
        return super.enter()
    }
    updateFrame(dt: number): void {
        super.updateFrame(dt)
        this.abs.aiHunt.updateFrame(dt)
    }
    avatarPlayComplete(animName: string): void {

    }

    checkEnterAttack() {

    }
}