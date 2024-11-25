import { JsonAsset, Node, _decorator, js, resources, setRandGenerator, sys } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { EventMgr } from "../../mgr/EventMgr";
import { FightEvent } from "./FightEvent";
import { AbsRole } from "../base/obj/role/AbsRole";
import { AbsObj, AbsObjType } from "../base/obj/AbsObj";
import { FightRootControl } from "../FightRootControl";
import { DamageData } from "../base/damage/DamageData";
import { tab } from "../../../Table/table_gen";
import { AbsOwner } from "../base/obj/AbsOwner";
import { FrameControl } from "../base/frame/FrameControl";
import { DamageStatisticsData } from "../base/damage/DamageStatisticsData";
import { Role } from "../base/obj/role/role/Role";
import { Monster } from "../base/obj/role/monster/Monster";
import { Bullet } from "../base/obj/bullet/Bullet";
import { GuideController } from "../../guide/GuideController";
import { FightData } from "../data/FightData";



const { ccclass, property } = _decorator;


export class FightEventControl extends AbsControl {

    private static _instance: FightEventControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FightEventControl();
        }
        return this._instance;
    }


    register(): void {
        EventMgr.onFight(FightEvent.AbsRole_Deal, this.onAbsRole_Deal, this)
        EventMgr.onFight(FightEvent.Kill, this.onKill, this)
        EventMgr.onFight(FightEvent.Fight_Initiative_Revive, this.onFight_Initiative_Revive, this)
        EventMgr.onFight(FightEvent.Enter_New_PhaseCount, this.onEnter_New_PhaseCount, this)
        EventMgr.onFight(FightEvent.Clear_All_Monster, this.onClear_All_Monster, this)
    }

    onAbsRole_Deal(absRole: AbsRole) {
        absRole.info.onSkillTrigger(tab.Triggertype.Triggertype_Dead)
        if (!absRole.isDead) { //触发器会可能有复活
            return
        }
        absRole.isDeadComplete = true
        if (absRole.objType == AbsObjType.role) {
            EventMgr.emitFight(FightEvent.Fight_Role_Dead, absRole.info)
            FightRootControl.ins.checkRoleAllDead()
            // if (!(GuideController.ins.isInFightGuiding() && !GuideController.ins.showMonster)) {
            //     FightRootControl.ins.checkRoleAllDead()
            // }
        } else {
            EventMgr.emitFight(FightEvent.Fight_Monster_Dead, absRole)
            absRole.recycle()
        }
    }

    onKill(damageData: DamageData, owner: AbsOwner, defanse: AbsRole) {
        let attack = (owner.abs || FrameControl.ins.getObjById(owner.objId)) as AbsRole
        if (attack) {
            if (!attack.isDead) {
                attack.info.onSkillTrigger(tab.Triggertype.Triggertype_Kill)
            }
            DamageStatisticsData.ins.addKill(attack, defanse)
        }
    }

    /** 主动复活 */
    onFight_Initiative_Revive(Role: Role) {
        let list = FrameControl.ins.getObjList(AbsObjType.enemy)
        for (let i = 0; i < list.length; i++) {
            let enemy = list[i] as Monster
            if (enemy.isActive && !enemy.isDead) {
                enemy.setReviceBeatBack(true)
            }
        }
        let bulletList = FrameControl.ins.getObjList(AbsObjType.bullet)
        for (let i = 0; i < bulletList.length; i++) {
            let bullet = bulletList[i] as Bullet
            if (!bullet.trigger || bullet.isDead || (bullet.body && bullet.body.isRemove)) {
                continue
            }
            if (bullet.owner.objType == AbsObjType.enemy) {
                if (bullet.info.configTab.IsReviveClean) {
                    bullet.recycle()
                }
            }
        }
    }

    onEnter_New_PhaseCount() {
        this.onClear_All_Monster()
    }

    onClear_All_Monster() {
        let list = FrameControl.ins.getObjList(AbsObjType.enemy)
        for (let i = 0; i < list.length; i++) {
            let enemy = list[i] as Monster
            if (enemy.isActive && !enemy.isDead) {
                enemy.recycle()
            }
        }
    }
}