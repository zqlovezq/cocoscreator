import { _decorator } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { tab } from "../../../Table/table_gen";
import { EventMgr } from "../../mgr/EventMgr";
import { FightEvent } from "../define/FightEvent";
import { FrameControl } from "../base/frame/FrameControl";
import { AbsObjType } from "../base/obj/AbsObj";
import { Monster } from "../base/obj/role/monster/Monster";
import { FightData } from "../data/FightData";
import { PowerTabFactory } from "../power/PowerTabFactory";
import { BuffTab } from "../power/powerTab/BuffTab";
import { EffectTab } from "../power/powerTab/EffectTab";
import { EffectControl } from "../base/effect/EffectControl";
import { Func } from "../../utils/Func";

const { ccclass, property } = _decorator;

export class WorldPontTab {
    Id: number // ID 
    StageId: number // 关卡ID 
    Damage: number // 伤害值 
    PointRaito: number//积分比例
}


export class WorldBossControll extends AbsControl {
    private static _instance: WorldBossControll;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new WorldBossControll();
        }
        return this._instance;
    }

    totalTackDamage: number = 0
    maxHp: number = 0
    lastHp: number = 0
    upHp: number = 0
    nowLv: number = 0
    absBoss: Monster = null

    tabs: tab.GuildBossPointTable[] = []

    nowBuffLv: number = 0
    buffMaxHp: number = 0
    buffTabs: tab.WorldBossDamTable[] = []
    init(): void {
        this.register()
        this.totalTackDamage = 0
        this.maxHp = 0
        this.nowLv = 0
        this.absBoss = null
        this.tabs.length = 0
        this.nowBuffLv = 0
        this.buffMaxHp = 0
        this.buffTabs.length = 0
        if (FightData.ins.isWorlBoss()) {
            for (let index = 0; index < tab.getData().WorldBossRewardTable.length; index++) {
                const v = tab.getData().WorldBossRewardTable[index];
                if (v.StageId == FightData.ins.stageId) {
                    let tempTab = new tab.GuildBossPointTable()
                    tempTab = Func.copyTab(v, tempTab)
                    tempTab.PointRaito = 1
                    this.tabs.push(tempTab)
                }
            }
        } else {
            for (let index = 0; index < tab.getData().GuildBossPointTable.length; index++) {
                const v = tab.getData().GuildBossPointTable[index];
                if (v.StageId == FightData.ins.stageId) {
                    this.tabs.push(v)
                }
            }
        }

        for (let index = 0; index < tab.getData().WorldBossDamTable.length; index++) {
            const v = tab.getData().WorldBossDamTable[index];
            if (v.StageId == FightData.ins.stageId) {
                this.buffTabs.push(v)
            }
        }

        this.setNowDamage()
    }

    register(): void {
        EventMgr.onFight(FightEvent.Boss_Enter, this.onBoss_Enter, this)
    }

    onBoss_Enter() {
        let list: Monster[] = FrameControl.ins.getObjList(AbsObjType.enemy) as Monster[]
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            if (v.info && v.info.isBoss) {
                this.absBoss = v
            }
        }
    }

    setNowDamage() {
        if (this.totalTackDamage >= this.maxHp) {
            this.checkLv()
        }
        if (this.totalTackDamage >= this.buffMaxHp) {
            this.checkBuffLv()
        }
    }
    addWorldBossTackDamage(damage: number) {
        this.totalTackDamage += damage
        this.setNowDamage()
    }
    damagePercent() {
        return (this.totalTackDamage - this.lastHp) / this.upHp
    }

    checkLv() {
        let isUp = false
        for (let index = this.nowLv; index < this.tabs.length; index++) {
            const v = this.tabs[index];
            if (this.totalTackDamage >= v.Damage) {
                this.nowLv = v.Id
                this.lastHp = v.Damage
                isUp = true
            } else {
                this.maxHp = v.Damage
                break
            }
        }
        this.upHp = this.maxHp - this.lastHp
        if (isUp) {
            EventMgr.emitFight(FightEvent.World_Boss_LvUp)
        }
    }

    checkBuffLv() {
        let isUp = false
        for (let index = this.nowBuffLv; index < this.buffTabs.length; index++) {
            const v = this.buffTabs[index];
            if (this.totalTackDamage >= v.Damage) {
                this.nowBuffLv = index
                this.addEffect(v.EffectId)
            } else {
                this.buffMaxHp = v.Damage
                break
            }
        }
    }

    addEffect(effectIds: number[]) {
        for (let index = 0; index < effectIds.length; index++) {
            const effectId = effectIds[index];
            let eff = PowerTabFactory.createType(tab.PowerType.PowerType_EffectTable) as EffectTab
            eff.setConfigId(effectId)
            console.log("添加世界boss特效", effectId);
            eff.random()
            EffectControl.ins.addEffect(eff, this.absBoss, this.absBoss)
        }
    }


    showResult() {

    }
}