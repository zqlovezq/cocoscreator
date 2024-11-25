import { Monster } from "../Monster";
import { RoleState2Move } from "../../role/state/RoleState2Move";
import { Dirty } from "../../../../../../../framework/collision/CollisionObject";
import { FightRootControl } from "../../../../../FightRootControl";

export class MonsterState2Move extends RoleState2Move {
    abs: Monster

    enter(): boolean {
        return super.enter()
    }
    updateFrame(dt: number): void {
        if (FightRootControl.ins.monsterMove) {
            super.updateFrame(dt)
        }
        this.abs.aiHunt.updateFrame(dt)
    }
}