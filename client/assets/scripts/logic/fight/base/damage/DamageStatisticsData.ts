import { Vec3, View, game, size, v2, view } from "cc";
import { AbsRole } from "../obj/role/AbsRole";
import { AbsObj, AbsObjType } from "../obj/AbsObj";
import { AbsStateType } from "../obj/state/AbsState";
import { IClear } from "../../../../framework/base/IAbs";
import { DamageData } from "./DamageData";
import { Bullet } from "../obj/bullet/Bullet";
import { Buff } from "../buff/Buff";
import { RoleInfo } from "../obj/role/role/RoleInfo";
import { FightData } from "../../data/FightData";
import { RevoltCheatControl } from "../../cheat/RevoltCheatControl";

export class DamageStatisticsInfo {
    roleId: number
    damage: number = 0//伤害
    secDamage: number = 0//每秒伤害
    heal: number = 0 //治疗
    shield: number = 0//护盾
    beDamage: number = 0//受伤
    kill: number = 0//击杀
}

/** 
 * 伤害统计
 *
 */
export class DamageStatisticsData implements IClear {
    private static _instance: DamageStatisticsData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new DamageStatisticsData();
        }
        return this._instance;
    }

    constructor() {

    }
    roleMap: Map<number, DamageStatisticsInfo> = new Map()
    totalKill: number = 0
    bossKill: number = 0

    purge(): void {
        this.roleMap.clear()
        this.totalKill = 0
        this.bossKill = 0
        console.warn("销毁")
    }
    init() {
        this.purge()
    }

    nextSec() {
        for (const iterator of this.roleMap) {
            iterator[1].secDamage = 0
        }
    }

    getRoleById(id: number) {
        if (!this.roleMap.has(id)) {
            this.roleMap.set(id, new DamageStatisticsInfo())
        }
        return this.roleMap.get(id)
    }

    addBulletDamage(bullet: Bullet, attack: AbsRole, defanse: AbsRole, damageData: DamageData) {
        RevoltCheatControl.ins.addBulletDamage(bullet,attack, defanse, damageData)
        this.addDamage(attack, defanse, damageData)
    }

    addBuffDamage(buff: Buff, attack: AbsRole, defanse: AbsRole, damageData: DamageData) {
        this.addDamage(attack, defanse, damageData)
    }

    addBuffTransferDamage(defanse: AbsRole, damageData: DamageData) {
        this.addDamage(null, defanse, damageData)
    }

    addDamage(attack: AbsRole, defanse: AbsRole, damageData: DamageData) {
        //记录伤害
        if (attack && attack.objType == AbsObjType.role) {
            let atkRole = this.getRoleById((attack.info as RoleInfo).heroFightInfo.id)
            if (atkRole) {
                if (damageData.isDamage()) {
                    atkRole.damage += damageData.damage
                    atkRole.secDamage += damageData.damage
                } else {
                    if (damageData.isShield) {
                        atkRole.shield += damageData.damage
                    } else {
                        atkRole.heal += damageData.damage
                    }

                }
            }
        }

        //记录受伤
        if (defanse && defanse.objType == AbsObjType.role) {
            let defRole = this.getRoleById((defanse.info as RoleInfo).heroFightInfo.id)
            if (defRole) {
                if (damageData.isDamage()) {
                    defRole.beDamage += damageData.damage
                }
            }
        }
    }

    /** 添加击杀 */
    addKill(attack: AbsRole, defanse: AbsRole) {
        if (attack && attack.objType == AbsObjType.role) {
            let atkRole = this.getRoleById((attack.info as RoleInfo).heroFightInfo.id)
            if (atkRole) {
                atkRole.kill += 1
                this.totalKill += 1
                if (defanse && defanse.info && defanse.info.isBoss) {
                    this.bossKill += 1
                }
            }
        }
    }


}