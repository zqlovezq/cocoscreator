import { Monster } from "../Monster";
import { RoleState4Dead } from "../../role/state/RoleState4Dead";
import { EventMgr } from "../../../../../../mgr/EventMgr";
import { FightEvent } from "../../../../../define/FightEvent";
import { MonsterInfo } from "../MonsterInfo";

export class MonsterState4Dead extends RoleState4Dead {
    enter(): boolean {
        if ((this.abs.info as MonsterInfo).isBoss) {
            EventMgr.emitFight(FightEvent.Boss_Dead_State)
        }
        return super.enter()
    }
}