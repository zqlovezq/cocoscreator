import { _decorator, Component } from "cc";
import { AbsRoleInfo } from "../AbsRoleInfo";
import { tab } from "../../../../../../Table/table_gen";
import { AbsObjType } from "../../AbsObj";
import { proto } from "client_protocol";
import { SkillGroupTab } from "../../../../power/powerTab/SkillGroupTab";
import { DamageData } from "../../../damage/DamageData";
import { DamageCalculation } from "../../../damage/DamageCalculation";
import { DamageStatisticsData } from "../../../damage/DamageStatisticsData";
import { WorldBossControll } from "../../../../stage/WorldBossControll";
import { FightData } from "../../../../data/FightData";
import Sound from "../../../../../utils/Sound";

const { ccclass, property } = _decorator;

@ccclass('MonsterInfo')
export class MonsterInfo extends AbsRoleInfo {
    objType: AbsObjType = AbsObjType.enemy;

    configTab: tab.MonsterTable

    speed: number = 0
    exp: number = 0
    drop: number = 0
    /** 总承受伤害 */
    totalTackDamage: number = 0

    setConfigId(id: number) {
        this.reset()
        super.setConfigId(id)
        this.setConfigTab(tab.getData().MonsterTableById.getValue(id))

        this._normalGroup = this.createSkillGroup(0) as SkillGroupTab
        this.normalGroup.setMonsterSkillIds(this.configTab.SkillIds)

    }

    /** 攻击范围 */
    get attackRange() {
        return this.configTab.AttackRange
    }

    /** boss怪 */
    get isBoss() {
        return this.configTab.MonsterType == tab.MonsterType.MonsterType_BossMonster
    }
    /** 精英怪 */
    get isEliteMonster() {
        return this.configTab.MonsterType == tab.MonsterType.MonsterType_EliteMonster
    }

    /** 被命中 命中伤害 */
    onHitDamage(data: DamageData) {
        super.onHitDamage(data)
        if (this.isBoss && data.isDamage()) {
            if (FightData.ins.isWorldAndGuildBoss()) {
                WorldBossControll.ins.addWorldBossTackDamage(data.damage)
            }
        }
    }

    checkDeak() {
        if (this.attrData.hp <= 0) {
            Sound.ins.PlayHitEffect(this.configTab.MonsterDieSound)
        }
        super.checkDeak()
    }

}