import { _decorator, Component } from "cc";
import { SkillGroupTab } from "./powerTab/SkillGroupTab";
import { SkillTab } from "./powerTab/SkillTab";
import { BuffTab } from "./powerTab/BuffTab";
import { EffectTab } from "./powerTab/EffectTab";
import { BulletTab } from "./powerTab/BulletTab";
import { SkillTriggerTab } from "./powerTab/SkillTriggerTab";
import { tab } from "../../../Table/table_gen";
import { PowerBase } from "./powerTab/PowerBase";
import { AbsRoleInfo } from "../base/obj/role/AbsRoleInfo";
import { PowerTabFactory } from "./PowerTabFactory";
import { FightData } from "../data/FightData";

const { ccclass, property } = _decorator;

/** 技能增强存储 
 * 进入战场时，会把英雄身上所有可能产生增强的都存储下来
 * 具体xxxTab会是同一份数据， 引用传递
 * 
 * 全局技能、rogue都放在FightRoot内
*/
@ccclass('SkillPowers')
export class SkillPowers {

    skillGroups: SkillGroupTab[] = [];// 技能组 
    skills: SkillTab[] = []// 技能 
    buffs: BuffTab[] = [] // buff 
    effects: EffectTab[] = []// 效果 
    bullets: BulletTab[] = []// 子弹 
    triggers: SkillTriggerTab[] = []// 触发器 

    insertItem(powerBase: PowerBase) {
        let list = this.getData(powerBase.powerType)
        list.push(powerBase as any)
    }

    addPower(_data: tab.SkillPowerTable, find: boolean) {
        let dd = this.getDataById(_data.PowerType, _data.PowerId)
        if (dd == null && find) {
            dd = FightData.ins.skillPowers.getDataById(_data.PowerType, _data.PowerId)
        }
        if (dd) {
            dd.addPower(_data)
        }
    }

    insertData(type: tab.PowerType, data: any) {
        switch (type) {
            case tab.PowerType.PowerType_SkillGroupTable:
                this.skillGroups.push(data)
                break
            case tab.PowerType.PowerType_SkillTable:
                this.skills.push(data)
                break
            case tab.PowerType.PowerType_BuffTable:
                this.buffs.push(data)
                break
            case tab.PowerType.PowerType_EffectTable:
                this.effects.push(data)
                break
            case tab.PowerType.PowerType_BulletTable:
                this.bullets.push(data)
                break
            case tab.PowerType.PowerType_TriggerTable:
                this.triggers.push(data)
                break
        }
    }

    getData(type: tab.PowerType) {
        switch (type) {
            case tab.PowerType.PowerType_SkillGroupTable:
                return this.skillGroups
            case tab.PowerType.PowerType_SkillTable:
                return this.skills
            case tab.PowerType.PowerType_BuffTable:
                return this.buffs
            case tab.PowerType.PowerType_EffectTable:
                return this.effects
            case tab.PowerType.PowerType_BulletTable:
                return this.bullets
            case tab.PowerType.PowerType_TriggerTable:
                return this.triggers
        }
        return []
    }

    getDataById(powerType: tab.PowerType, id: number) {
        let list = this.getData(powerType)
        let len = list.length
        let v: PowerBase
        for (let index = 0; index < len; index++) {
            v = list[index];
            if (v.configId == id) {
                return v
            }
        }
        return null
    }

    createTypeAnyId(powerType: tab.PowerType, id: number) {
        let data = this.getDataById(powerType, id)
        if (data == null) {
            data = PowerTabFactory.createType(powerType)
            data.setParentPowers(this)
            data.setConfigId(id)
        }
        return data
    }

    clear() {
        this.skillGroups.length = 0
        this.skills.length = 0
        this.buffs.length = 0
        this.effects.length = 0
        this.bullets.length = 0
        this.triggers.length = 0
    }

}