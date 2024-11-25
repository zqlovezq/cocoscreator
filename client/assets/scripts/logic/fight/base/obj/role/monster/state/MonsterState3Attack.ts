import { Monster } from "../Monster";
import { RoleState3Attack } from "../../role/state/RoleState3Attack";
import { AbsStateType } from "../../../state/AbsState";
import { tab } from "../../../../../../../Table/table_gen";
import { SkillControl } from "../../../../skill/SkillControl";
import { BulletControl } from "../../../bullet/BulletControl";
import { FightRootControl } from "../../../../../FightRootControl";

export class MonsterState3Attack extends RoleState3Attack {


    emitBullet() {
        if (!FightRootControl.ins.monsterAttack) {
            return
        }
        //怪物直接发送子弹
        BulletControl.ins.audoEmitBullet(this.tmpSkill.bulletTab, this.abs, this.bulletGroupId)
    }
}