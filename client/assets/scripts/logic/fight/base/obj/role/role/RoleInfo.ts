import { _decorator, Component, Vec3 } from "cc";
import { AbsRoleInfo } from "../AbsRoleInfo";
import { tab } from "../../../../../../Table/table_gen";
import { Func } from "../../../../../utils/Func";
import { EventMgr } from "../../../../../mgr/EventMgr";
import { FightEvent } from "../../../../define/FightEvent";
import { Role } from "./Role";
import { HeroFightInfo } from "../../../../data/HeroFightInfo";
import { EffectTab } from "../../../../power/powerTab/EffectTab";
import { SkillTab } from "../../../../power/powerTab/SkillTab";
import { SkillGroupTab } from "../../../../power/powerTab/SkillGroupTab";
import { SkillPowerControl } from "../../../skill/SkillPowerControl";
import { SkillControl } from "../../../skill/SkillControl";
import { SkillGroupCd } from "../../../skill/SkillGroupCd";
import { SkillTriggerTab } from "../../../../power/powerTab/SkillTriggerTab";

const { ccclass, property } = _decorator;

@ccclass('RoleInfo')
export class RoleInfo extends AbsRoleInfo {
    abs: Role
    configTab: tab.HeroTable
    heroStarTab: tab.HeroStarUpTable

    heroFightInfo: HeroFightInfo //英雄数据
    /** rogue属性*/
    rogueAttr: Map<string, number> = new Map()

    /** 位置索引 */
    posIndex: number = 0

    skillGroupCDMap: Map<tab.AttackType, SkillGroupCd> = new Map()

    holdTimeTrigger: SkillTriggerTab[] = []


    constructor() {
        super()
        this.skillGroupCDMap.set(tab.AttackType.AttackType_Attack, new SkillGroupCd())
        this.skillGroupCDMap.set(tab.AttackType.AttackType_ActionAttack, new SkillGroupCd())
    }
    init(): void {
        super.init()
    }

    reset(): void {
        super.reset()

        this.holdTimeTrigger.length = 0
    }

    setHeroInfo(hero: HeroFightInfo) {
        this.reset()
        this.heroFightInfo = hero
        this.setConfigId(this.heroFightInfo.itemId)
        /** 设置局外带进来的属性 */
        this.setAttrList(this.heroFightInfo.attrList)
        this.attrData.star = this.heroFightInfo.star
        /** 设置局外带进来的技能 */
        for (let index = 0; index < this.heroFightInfo.skillList.length; index++) {
            const v = this.heroFightInfo.skillList[index];
            let skill = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, v) as SkillTab
            this.addTakeSkill(skill, false)
        }

        for (const iterator of this.skillGroupCDMap) {
            iterator[1].setAbsInfo(this)
        }
    }

    setConfigId(id: number) {
        super.setConfigId(id)
        this.setConfigTab(tab.getData().HeroTableById.getValue(id))

        this.heroStarTab = Func.forBy2(tab.getData().HeroStarUpTable, "HeroId", id, "HeroStar", this.heroFightInfo.star)

        this.skillGroupMap.set(tab.AttackType.AttackType_Attack, this.createSkillGroup(this.heroStarTab.SkillGroupIds) as SkillGroupTab)
        this.sysnHeroAddAttackCount()
        console.log("RoleInfo", this)
    }

    get normalGroupCD() {
        return this.skillGroupCDMap.get(tab.AttackType.AttackType_Attack)
    }
    get weaponeGroupCD() {
        return this.skillGroupCDMap.get(tab.AttackType.AttackType_ActionAttack)
    }

    inSkillGroupCD(skillType: tab.AttackType, cb: Function) {
        this.skillGroupCDMap.get(skillType).inCd(this.skillGroupMap.get(skillType), cb)
        return this.skillGroupCDMap.get(skillType)
    }

    resetTestGroupId(id: number) {
        if (id == 0) {
            return
        }
        this.switchSkillGroup(this.createSkillGroup(id) as SkillGroupTab)
    }

    updateFrame(dt: number) {
        super.updateFrame(dt)

        if (this._weaponeGroup) {
            if (this.weaponeGroupCD.isCDing) {
                this.weaponeGroupCD.updateFrame(dt)
            } else if (this.isAudo) {
                this.useWeaponSkill(null)
            }
        }
    }

    useWeaponSkill(targetPos: Vec3) {
        if (this.weaponeGroup == null) {
            return
        }
        if (this.abs == null) {
            return
        }
        if (this.abs.isDead) {
            return
        }
        if (!this.abs.isActive) {
            return
        }
        if (this.weaponeGroupCD.isCDing) {
            return
        }
        if (this.weaponeGroup.nowSkill.isInCD(this.attrData)) {
            return
        }
        if (targetPos == null) {
            if (!this.checkSkillGroupUse(tab.AttackType.AttackType_ActionAttack)) {
                return
            }
        }
        SkillControl.ins.useSkillTarget(this.weaponeGroup.nowSkill, this.abs)
        SkillControl.ins.useSkillBullet(this.weaponeGroup.nowSkill, this.abs, targetPos)
        this.subAttackByType(tab.AttackType.AttackType_ActionAttack, 1)
        EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.weaponeGroup.configId)
        if (this.weaponeGroup.checkSkillCD()) {
            // console.log("进入cd")
            this.inWeaponeCd()
        }
    }

    inWeaponeCd() {
        this.inSkillGroupCD(tab.AttackType.AttackType_ActionAttack, () => {
            // console.log("cd完成---")
            this.weaponeGroup.fillUp()
            EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.weaponeGroup.configId)
        })
    }

    onLevelUp(lastLv: number, lv: number) {
        this.attrData.level = lv
        this.levelUpEffect(lastLv, lv)
        EventMgr.emitFight(FightEvent.Role_Level_Up, this.heroFightInfo.itemId, lastLv, lv)
        if (lastLv == 0) {
            return
        }
        this.abs.onLevelUp()
    }

    /** 是否为战士 */
    isHeroClassWarrior() {
        return this.configTab.Class == tab.HeroClass.HeroClass_Warrior
    }

    isHeroClass(heroClass: tab.HeroClass) {
        return this.configTab.Class == heroClass
    }

    subNormalAttack(count: number): void {
        super.subNormalAttack(count)
        EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.normalGroup.configId)
    }

    normalFillUp() {
        this.normalGroup.fillUp()
        EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.normalGroup.configId)
    }

    addNormalAttackCount(count: number) {
        super.addNormalAttackCount(count)
        EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.normalGroup.configId)
    }

    switchSkillGroup(skillGroup: SkillGroupTab) {
        super.switchSkillGroup(skillGroup)
        this.sysnHeroAddAttackCount()
        EventMgr.emitFight(FightEvent.Role_change_SkillGroup, this)
    }


    attrChange(attrType: tab.AttrType, value: number): void {
        super.attrChange(attrType, value)
        if (attrType == tab.AttrType.AttrType_AttackNum) {
            this.sysnHeroAddAttackCount()
        }
    }

    sysnHeroAddAttackCount() {
        if (this.normalGroup) {
            this.normalGroup.setHeroAttackCount(this.attrData.getAttr(tab.AttrType.AttrType_AttackNum))
            EventMgr.emitFight(FightEvent.Skill_Attack_Count_Change, this.normalGroup.configId)
        }
    }

    addEffect(effectTab: EffectTab) {
        super.addEffect(effectTab)
        if (effectTab.Parameters[1]) {
            this.addLevelEffect(effectTab, this.heroFightInfo.level)
            this.levelEffects.push(effectTab)
        }
    }

    removeEffect(effectTab: EffectTab) {
        super.removeEffect(effectTab)
        if (effectTab.Parameters[1]) {
            Func.remove(this.levelEffects, this.levelEffects.indexOf(effectTab))
        }
    }

    addLevelEffect(effectTab: EffectTab, upLv: number) {
        let num = effectTab.Parameters[1];
        this.attrData.addAttr(effectTab.EffectType, num * upLv)
    }

    /** 处理根据英雄等级增加的属性 */
    levelUpEffect(lastLv: number, lv: number) {
        let upCount = lv - lastLv
        if (upCount <= 0) {
            return
        }
        for (let index = 0; index < this.levelEffects.length; index++) {
            this.addLevelEffect(this.levelEffects[index], upCount)
        }
    }

    refreshHoldTime() {
        super.refreshHoldTime()
    }

    onBorn() {
        this.initHoldTimeTrigger()
        super.onBorn()
        if (this.holdTimeTrigger.length) {
            EventMgr.emitFight(FightEvent.Create_HoldTime_Effect, this.abs)
        }
    }

    initHoldTimeTrigger() {
        this.holdTimeTrigger.length = 0
        let tempSkills: SkillTab[] = []
        let skillGroup = this.normalGroup

        let skill: SkillTab
        for (let j = 0; j < skillGroup.skills.length; j++) {
            skill = skillGroup.skills[j]
            tempSkills.push(skill)
        }
        if (this.weaponeGroup) {//招式
            for (let j = 0; j < this.weaponeGroup.skills.length; j++) {
                skill = this.weaponeGroup.skills[j]
                tempSkills.push(skill)
            }
        }
        for (let index = 0; index < this.takeSkills.length; index++) {
            skill = this.takeSkills[index]
            tempSkills.push(skill)
        }

        for (let index = 0; index < tempSkills.length; index++) {
            const skill = tempSkills[index];
            for (let index = 0; index < skill.triggerTabs.length; index++) {
                const triggerTab = skill.triggerTabs[index];
                if (triggerTab.TriggerCondition == tab.TriggerCondition.TriggerCondition_HoldTime) {
                    this.holdTimeTrigger.push(triggerTab)
                }
            }
        }
    }

    getLevel() {
        return this.heroFightInfo.level
    }
}