import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { SkillTab } from "./SkillTab";
import { EventMgr } from "../../../mgr/EventMgr";
import { FightEvent } from "../../define/FightEvent";
import { PowerBase } from "./PowerBase";
import { CDTime } from "../../base/cd/CDTime";

const { ccclass, property } = _decorator;

@ccclass('SkillGroupTab')
export class SkillGroupTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_SkillGroupTable
    configTab: tab.SkillGroupTable
    //---------------------配置字段-------------------
    Id: number // ID 
    Icon: string // 技能图标 
    AttackType: tab.AttackType // 攻击类型 
    NormalAttack: number[] // 普攻技能 
    AttackCount: number // 出手次数 
    BreathTime: number // 调息时间 


    //---------------------自有字段-------------------

    skills: SkillTab[] = []
    normalSkills: SkillTab[] = []

    nowSkill: SkillTab
    nowSkillIndex: number = 0 //普通攻击依次替换

    //----------切换技能组需要清除的属性
    _attackCount: number = 0 //攻击次数（减免时不增加次数）
    realAttackCount: number = 0 //实际的攻击次数
    triggerAttackCount: number = 0 //触发器攻击次数（触发器成功时， 会清零）
    first: boolean = false

    heroAddCount: number = 0 //英雄增加出手次数

    setConfigId(id: number) {
        super.setConfigId(id)
        if (this.configId == 0) {
            return
        }

        this.skills.length = 0
        this.normalSkills.length = 0
        for (let index = 0; index < this.NormalAttack.length; index++) {
            const element = this.NormalAttack[index];
            this.addSkill(element)
        }
    }

    /** 设置怪物技能 */
    setMonsterSkillIds(skillIds: number[]) {
        this.BreathTime = 0
        this.AttackType = tab.AttackType.AttackType_Attack
        this.AttackCount = 1000000
        this.NormalAttack = skillIds

        this.skills.length = 0
        this.normalSkills.length = 0
        for (let index = 0; index < this.NormalAttack.length; index++) {
            const element = this.NormalAttack[index];
            this.addSkill(element)
        }
        this.setDefaultNormalSkill()
    }

    clearAttrData() {
        this._attackCount = 0
        this.realAttackCount = 0
        this.triggerAttackCount = 0
        this.heroAddCount = 0
        this.setDefaultNormalSkill()
    }

    addSkill(id: number) {
        let skill = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, id) as SkillTab
        this.skills.push(skill)
        if (skill.isNormalAttack()) {
            this.normalSkills.push(skill)
        }
        skill.isActionSkill = this.isActionSkill()
    }

    setDefaultNormalSkill() {
        this.normalSkills.sort((a, b) => {
            return a.Priority - b.Priority
        })
        this.first = true
        this.nowSkillIndex = 0
        this.nowSkill = this.normalSkills[this.nowSkillIndex]
    }

    nextNormalSkill() {
        if (this.first) {
            this.nowSkillIndex = 0
            this.first = false
        } else {
            this.nowSkillIndex += 1
        }

        if (this.nowSkillIndex >= this.normalSkills.length) {
            this.nowSkillIndex = 0
        }
        this.nowSkill = this.normalSkills[this.nowSkillIndex]
    }

    /** 是否为普通技能 */
    isNormalSkill() {
        return this.AttackType == tab.AttackType.AttackType_Attack
    }
    /** 是否为武器招式 */
    isActionSkill() {
        return this.AttackType == tab.AttackType.AttackType_ActionAttack
    }

    fillUp() {
        this._attackCount = 0
        this.realAttackCount = 0
    }

    subAttack(count: number) {
        count = count || 0
        this._attackCount += count
        this.realAttackCount += count
        this.triggerAttackCount += count
    }


    addAttackCount(count: number) {
        this._attackCount -= count
    }

    clearTriggerAttackCount() {
        this.triggerAttackCount = 0
    }

    checkSkillCD() {
        return this.getCanAttackCount() <= 0
    }

    /** 获取可出手次数 */
    getCanAttackCount() {
        return this.getAttackSum() - this._attackCount
    }

    getAttackSum() {
        return this.AttackCount + this.heroAddCount
    }

    setHeroAttackCount(count: number) {
        this.heroAddCount = count
    }

}