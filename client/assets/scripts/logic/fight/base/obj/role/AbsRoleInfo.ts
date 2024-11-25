import { _decorator, Component, Vec3 } from "cc";
import { AbsObjInfo, AbsObjInfoAttr } from "../AbsObjInfo";
import { AbsRoleState, AbsStateType } from "../state/AbsState";
import { SkillGroupTab } from "../../../power/powerTab/SkillGroupTab";
import { tab } from "../../../../../Table/table_gen";
import { SkillTab } from "../../../power/powerTab/SkillTab";
import { Bullet } from "../bullet/Bullet";
import { DamageLab } from "../../damage/DamageLab";
import { AbsRole } from "./AbsRole";
import { BulletControl } from "../bullet/BulletControl";
import { SkillControl } from "../../skill/SkillControl";
import { SkillTriggerControl, TriggerParms } from "../../skill/SkillTriggerControl";
import { AbsObjType } from "../AbsObj";
import { BuffControl } from "../../buff/BuffControl";
import { Buff } from "../../buff/Buff";
import { SearchEnemy } from "../../ai/SearchEnemy";
import { EventMgr } from "../../../../mgr/EventMgr";
import { FightEvent } from "../../../define/FightEvent";
import { proto } from "client_protocol";
import { FightAttrCalculate } from "../../../data/FightAttrCalculate";
import { SkillPowers } from "../../../power/SkillPowers";
import { EffectTab } from "../../../power/powerTab/EffectTab";
import { SkillPowerControl } from "../../skill/SkillPowerControl";
import { SkillTriggerMap } from "../../skill/SkillTriggerMap";
import { FightAttrData } from "../../../data/FightAttrData";
import { DamageData, DamageSource } from "../../damage/DamageData";
import { FightMacro } from "../../../define/FightDefine";
import { FightData } from "../../../data/FightData";
import { CDTime } from "../../cd/CDTime";
import Sound from "../../../../utils/Sound";
import { DamageCalculation } from "../../damage/DamageCalculation";
import { FrameControl } from "../../frame/FrameControl";
import { SkillTimePush } from "../../skill/SkillTimePush";

const { ccclass, property } = _decorator;


@ccclass('AbsRoleInfo')
export class AbsRoleInfo extends AbsObjInfo {
    objType: AbsObjType = AbsObjType.role;
    abs: AbsRole
    /** 自动战斗 */
    isAudo: boolean = true
    isLeader: boolean = false
    /** 携带的技能 */
    takeSkills: SkillTab[] = []

    skillGroupMap: Map<tab.AttackType, SkillGroupTab> = new Map()

    /** 普通技能 */
    _normalGroup: SkillGroupTab
    /** 武器技能（肉鸽招式） */
    _weaponeGroup: SkillGroupTab

    /** buff相关 */
    buffs: Buff[] = []
    /** buff检测 （生命变更） */
    checkBuffs: Buff[] = []
    /** 战斗属性 */
    attrData: FightAttrData = new FightAttrData()

    skillPowers: SkillPowers
    triggerMap: SkillTriggerMap

    levelEffects: EffectTab[] = []

    skillTimePush: SkillTimePush = new SkillTimePush()

    constructor() {
        super();
        this.attrData.changeCallback(this.attrChange.bind(this))
        this.skillPowers = new SkillPowers()
        this.triggerMap = new SkillTriggerMap()
    }


    init(): void {
        this.attrData.init()
        this.skillTimePush.setAbsInfo(this)
    }

    setAudo(audo: boolean) {
        this.isAudo = audo
    }

    reset() {
        this.skillTimePush.clear()
        this.attrData.clear()
        this.skillPowers.clear()
        this.triggerMap.clear()
        this.removeBuffAll()
        this.buffs.length = 0
        this.checkBuffs.length = 0
        this.levelEffects.length = 0
        this.takeSkills.length = 0

        super.reset()
    }

    //---------------属性相关-------------------
    setAttrList(list: proto.FightAttrData[]) {
        for (let index = 0; index < list.length; index++) {
            const v = list[index];
            let num
            if (typeof (v.value) == "number") {
                num = v.value
            } else {
                num = v.value.toNumber()
            }
            this.attrData.addAttr(v.type, num)
        }
    }

    attrChange(attrType: tab.AttrType, value: number) {
        if (attrType == tab.AttrType.AttrType_Stealth) {
            this.checkStealth()
        }
        if (attrType == tab.AttrType.AttrType_Vertigo) {
            this.checkVertigo()
        }
        if (attrType == tab.AttrType.AttrType_TotalHp || attrType == tab.AttrType.AttrType_ShieldLimit) {
            if(this.abs){
                this.abs.updateHP()
            }
        }
    }

    /** 被命中 受到伤害前 */
    beHitFront(bullet: Bullet) {
        this.onSkillTrigger(tab.Triggertype.Triggertype_BeHitFront)
    }

    /** 被命中 命中伤害 */
    onHitDamage(data: DamageData) {
        if (this.attrData.getAttr(tab.AttrType.AttrType_Invincible)) {
            // console.log("无敌中0")
            return
        }
        if (data.damage == 0) {
            return
        }
        let lossHpPer = 0
        if (data.isDamage()) {
            let subHp = 0
            if (data.isSelfDamage) { //自损
                subHp = data.damage
            } else {
                if (this.attrData.shield >= data.damage) {//护盾足够
                    this.attrData.shield -= data.damage
                } else {
                    subHp = data.damage - this.attrData.shield
                    this.attrData.shield = 0 //护盾清零
                }
            }

            this.attrData.hp -= subHp
            lossHpPer = Math.floor((data.damage / this.attrData.maxHp) * FightMacro.PERCENT)
        } else {
            if (data.isShield) {
                //增加护盾值
                this.attrData.shield += data.damage
            } else {
                this.attrData.hp += data.damage
            }
        }

        //百分比掉血， 不允许掉死
        this.attrData.hp = Math.max(Math.min(this.attrData.hp, this.attrData.maxHp), data.isPerSubHeal ? 1 : 0)

        this.abs.updateHP()

        this.addObjAttr(AbsObjInfoAttr.EverylHpLostPe, lossHpPer)
        this.addObjAttr(AbsObjInfoAttr.totalLossHpPer, lossHpPer)
        this.onSkillTrigger(tab.Triggertype.Triggertype_TotalLostHp, { lossHpPer: lossHpPer })
        this.checkAttrBuff(lossHpPer)


        if (data.isDamage() && data.damage > 0) {
            this.onInjured(data)
        }

        this.checkDeak()
    }

    /** 受伤 */
    onInjured(data: DamageData) {
        if (data.source == DamageSource.bullet) {
            EventMgr.emitFight(FightEvent.Injured, data, this)
            let param: TriggerParms = {}
            if (data.sourceObjId) {
                let sourceRole = FrameControl.ins.getObjById(data.sourceObjId) as AbsRole
                if (sourceRole && !sourceRole.isDead) {
                    param.otherAbsInfo = sourceRole.info
                }
            }
            this.onSkillTrigger(tab.Triggertype.Triggertype_BeHit, param, true)
            this.checkRemoveBuff(tab.ClearType.ClearType_BeDamaged)
        }
    }

    /** 被命中  受到伤害后 */
    beHitBack(bullet: Bullet) {
        BulletControl.ins.checkHitEffect(bullet, this.abs)
        if (!this.abs.isDead) {
            BuffControl.ins.checkBulletAddBuff(bullet, bullet.owner, this.abs)
        }

        this.onSkillTrigger(tab.Triggertype.Triggertype_BeHitBack)
    }

    checkDeak() {
        if (this.attrData.hp <= 0) {
            this.abs.onDead()
        }
    }

    onRevice() {
        this.normalFillUp()
        this.attrData.fullHp()
    }


    //---------------技能相关-------------------
    createSkillGroup(id: number) {
        let skillGroup = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillGroupTable, id) as SkillGroupTab
        skillGroup.clearAttrData()

        return skillGroup
    }

    addTakeSkill(skill: SkillTab, isUse?: boolean) {
        if (this.mutualExclusionBySkill(skill) != 1) {
            this.takeSkills.push(skill)
            if (isUse) {
                this.usePassiveSkill(skill)
            }
            return true
        } else {
            console.log("添加技能---互斥，丢弃", skill.Id)
            return false
        }
    }

    /** 根据技能获取是否互斥 */
    mutualExclusionBySkill(skill: SkillTab) {
        let mutualType: number = 0 //1互斥 skill丢弃，  2优先 skill放入
        for (let index = this.takeSkills.length - 1; index >= 0; index--) {
            const tmpSkill = this.takeSkills[index]
            if (tmpSkill.SkillConflict[0] && skill.SkillConflict[0] == tmpSkill.SkillConflict[0]) {
                if (skill.SkillConflict[1] > tmpSkill.SkillConflict[1]) {
                    mutualType = 2
                    this.takeSkills.splice(index, 1)
                } else {
                    if (mutualType == 0) {
                        mutualType = 1
                    }
                }
            }
        }

        return mutualType
    }

    initTriggerMap() {
        this.triggerMap.clear()
        this.useAllPassiveSkill()
    }

    /** 释放所有被动技能 (被动技能在初始化完成后直接释放) */
    useAllPassiveSkill() {
        for (let index = 0; index < this.takeSkills.length; index++) {
            const v = this.takeSkills[index];
            this.usePassiveSkill(v)
        }
        this.useSkillGroupPassive(this.normalGroup)
    }

    useSkillGroupPassive(skillGroup: SkillGroupTab) {
        if (!skillGroup) {
            return
        }
        for (let index = 0; index < skillGroup.skills.length; index++) {
            const v = skillGroup.skills[index];
            this.usePassiveSkill(v)
        }
    }

    usePassiveSkill(skill: SkillTab) {
        skill.initCd()
        if (skill.isPassiveSkill() || skill.isTimePush()) {
            SkillControl.ins.useSkillAndBullet(skill, this.abs)
            if (skill.isTimePush()) {
                this.skillTimePush.addSkill(skill)
            }
        }
    }
    /** 普通技能组 */
    get normalGroup() {
        if (this._normalGroup == null) {
            this._normalGroup = this.skillGroupMap.get(tab.AttackType.AttackType_Attack)
        }
        return this._normalGroup
    }
    /** 武器技能组（肉鸽招式） */
    get weaponeGroup() {
        if (this._weaponeGroup == null) {
            this._weaponeGroup = this.skillGroupMap.get(tab.AttackType.AttackType_ActionAttack)
        }
        return this._weaponeGroup
    }

    /** 删除当前技能组 */
    removeNowSkillGroup() {
        if (this.normalGroup) {
            this.normalGroup.clearAttrData()
        }
        this._normalGroup = null
        this.skillGroupMap.delete(tab.AttackType.AttackType_Attack)
    }

    /** 切换技能组 */
    switchSkillGroup(skillGroup: SkillGroupTab) {
        this.removeNowSkillGroup()
        this.skillGroupMap.set(tab.AttackType.AttackType_Attack, skillGroup)
        this.normalGroup.clearAttrData()

        this.useSkillGroupPassive(this.normalGroup)
    }

    /** 添加武器技能组（招式) */
    addWeaponSkillGroup(skillGroup: SkillGroupTab) {
        this.skillGroupMap.set(tab.AttackType.AttackType_ActionAttack, skillGroup)
        this._weaponeGroup = skillGroup
        skillGroup.clearAttrData()
        EventMgr.emitFight(FightEvent.Role_Add_Weapon_SkillGroup, this, skillGroup.Id)
        this.useSkillGroupPassive(skillGroup)
    }

    getNowSkill() {
        if (this.normalGroup) {
            return this.normalGroup.nowSkill
        }
    }

    normalFillUp() {
        if (this.normalGroup) {
            this.normalGroup.fillUp()
        }
    }

    /** 减去普通攻击次数 */
    subNormalAttack(count: number) {
        this.subAttackByType(tab.AttackType.AttackType_Attack, count)
    }
    addNormalAttackCount(count: number) {
        this.normalGroup.addAttackCount(count)
    }

    getNormalAttackAnimId() {

    }

    /** 检测普通攻击是否cd */
    checkNormalCd() {
        return this.checkSkillCd(tab.AttackType.AttackType_Attack)
    }

    subAttackByType(skillType: tab.AttackType, count: number) {
        if (skillType == tab.AttackType.AttackType_Attack) {
            this.normalGroup.subAttack(count)
        } else {
            this.weaponeGroup.subAttack(count)
        }
    }

    checkSkillCd(skillType: tab.AttackType) {
        if (skillType == tab.AttackType.AttackType_Attack) {
            return this.normalGroup.checkSkillCD()
        } else {
            return this.weaponeGroup && this.weaponeGroup.checkSkillCD()
        }
    }
    /** 刷新蓄力时间 */
    refreshHoldTime() {
        this.setObjAttr(AbsObjInfoAttr.holdTime)
    }

    updateFrame(dt: number) {

        this.updateFrameBuff(dt)
        if (this.abs && this.abs.isActive && !this.abs.isDead) {
            this.skillTimePush.check()
        }
    }

    //---------------技能触发器相关 主要处理都在SkillControll-------------------
    /** 技能触发器 */
    onSkillTrigger(type: tab.Triggertype, parms?: TriggerParms, checkDeak?: boolean) {
        if (type == tab.Triggertype.Triggertype_PreAttack) {
            this.normalGroup.nextNormalSkill()
        }
        if (checkDeak && this.abs.isDead) {
            return
        }
        SkillTriggerControl.ins.onSkillTrigger(this, type, parms)
    }

    //---------------BUFF相关-------------------
    updateFrameBuff(dt: number) {
        for (let index = this.buffs.length - 1; index >= 0; index--) {
            const v = this.buffs[index];
            if (v == null) {
                this.buffs.splice(index, 1)
                continue
            }
            if (!v.isValid()) {
                this.removeBuff(v, index)
                continue
            }
            v.updateFrame(dt)
        }
    }

    /** 检测属性buff */
    checkAttrBuff(lossHpPer: number) {
        for (let index = 0; index < this.checkBuffs.length; index++) {
            const v = this.checkBuffs[index];
            v.checkAttr(lossHpPer)
        }
    }

    /** 根据id和添加者id获取buff */
    getBuff(buffId: number, addObjId: number) {
        for (let index = 0; index < this.buffs.length; index++) {
            const v = this.buffs[index];
            if (v.buffId == buffId && v.addOwner.objId == addObjId) {
                return v
            }
        }
        return null
    }

    /** 根据buff组获取buff */
    getBuffByGroup(buffGroup: tab.BuffGroup) {
        for (let index = 0; index < this.buffs.length; index++) {
            const v = this.buffs[index];
            if (buffGroup && v.configTab.BuffGroup == buffGroup) {
                return v
            }
        }
        return null
    }

    /** 获取buff组层数 */
    getBuffGroupTotalCount(buffGroup: number) {
        let count = 0
        for (let index = 0; index < this.buffs.length; index++) {
            const v = this.buffs[index];
            if (buffGroup && v.configTab.BuffGroup == buffGroup) {
                count += v.ruleNumber
            }
        }
        return count
    }

    /** 获取buffId层数 */
    getBuffIdTotalCount(buffId: number) {
        let count = 0
        for (let index = 0; index < this.buffs.length; index++) {
            const v = this.buffs[index];
            if (v.buffId == buffId) {
                count += v.ruleNumber
            }
        }
        return count
    }


    /** 根据清除类型检测清除buff */
    checkRemoveBuff(clearType: tab.ClearType) {
        for (let index = this.buffs.length - 1; index >= 0; index--) {
            const v = this.buffs[index];
            if (v.isClearByType(clearType)) {
                this.removeBuff(v, index)
            }
        }
    }

    //** 根据buff类型清除buff */
    checkRemoveBuffType(buffType: tab.BuffType) {
        for (let index = this.buffs.length - 1; index >= 0; index--) {
            const v = this.buffs[index];
            if (v.isBuffType(buffType)) {
                this.removeBuff(v, index)
            }
        }
    }

    removeBuffId(buffId: number) {
        for (let index = this.buffs.length - 1; index >= 0; index--) {
            const v = this.buffs[index];
            if (v.buffId == buffId) {
                this.removeBuff(v, index)
            }
        }
    }

    removeBuffAll() {
        for (let index = this.buffs.length - 1; index >= 0; index--) {
            const v = this.buffs[index];
            this.removeBuff(v, index)
        }
        this.buffs.length = 0
        BuffControl.ins.showTransferDamageUI()
    }

    pushBuff(buff: Buff) {
        this.buffs.push(buff)
        if (buff.configTab.isCheckAttr()) {
            this.checkBuffs.push(buff)
        }
    }

    spliceBuff(buff: Buff, index: number) {
        this.buffs.splice(index, 1)
        if (buff.configTab.isCheckAttr()) {
            let checkIndex = this.checkBuffs.findIndex(v => buff)
            if (checkIndex >= 0) {
                this.checkBuffs.splice(checkIndex, 1)
            }
        }
    }

    addBuff(buff: Buff) {
        buff.setObjId(this.abs.objId)
        this.pushBuff(buff)
        buff.addRuleNumber(true)
        BuffControl.ins.addBuffEffectUI(buff, this.abs)
        /** 先放进去， 在触发第一次 */
        buff.onTrigger()
    }

    removeBuff(buff: Buff, index: number) {
        this.spliceBuff(buff, index)
        // console.log(this.abs.getBodyId(), "移除buff", buff.buffId)
        BuffControl.ins.removeBuffEffectUI(buff, this.abs)
        if (!buff.isValid() && !this.isRecycle) {
            this.onSkillTrigger(tab.Triggertype.Triggertype_BuffExpiration, { buff: buff })
        }
        buff.removeAttr()
        buff.recycle()
    }

    /** 查找指定属性类型的buff */
    findBuffByBuffGroup(buffGroup: tab.BuffGroup) {
        for (let index = 0; index < this.buffs.length; index++) {
            const v = this.buffs[index];
            if (v.configTab.isBuffGroup(buffGroup)) {
                return true
            }
        }
        return false
    }
    /** 是否 负面buff免疫  */
    isNegativeBuffImmunity() {
        return this.attrData.getAttr(tab.AttrType.AttrType_NegativeBuffImmunity) > 0
    }

    //---------------其他-------------------
    checkSkillGroupUse(atkType: tab.AttackType) {
        let skill
        if (atkType == tab.AttackType.AttackType_Attack) {
            skill = this.getNowSkill()
        } else {
            skill = this.weaponeGroup.nowSkill
        }
        if (skill && !skill.isInCD(this.attrData)) {
            if (this.checkSkillEffectUnit(skill) || this.checSkillBulletEffectUnit(skill)) {
                return true
            }
        }
        return false
    }


    /** 检测技能作用到位 作用目标*/
    checkSkillEffectUnit(skill: SkillTab) {
        return SearchEnemy.isHasEnemy(this.abs, this.abs.objType, skill.EffectUnit)
    }
    /** 检测技能子弹 作用目标 */
    checSkillBulletEffectUnit(skill: SkillTab) {
        if (skill.bulletTab) {
            return SearchEnemy.isHasEnemy(this.abs, this.abs.objType, skill.bulletTab.EffectUnit)
        }
        return false
    }

    useWeaponSkill(targetPos: Vec3) {

    }

    //---------------effect属性增加-------------------
    addEffect(effectTab: EffectTab) {
        this.attrData.addAttr(effectTab.EffectType, effectTab.parm)
    }

    removeEffect(effectTab: EffectTab) {
        this.attrData.addAttr(effectTab.EffectType, -effectTab.parm)
    }
    checkStealth() {
        if (this.abs && !this.abs.isDead) {
            this.abs.setStealth(this.attrData.getAttr(tab.AttrType.AttrType_Stealth) > 0)
        }
    }

    checkVertigo() {
        if (this.abs && !this.abs.isDead) {
            let bool = this.isVertigo()
            if (bool) {
                if (!this.abs.isState(AbsStateType.RoleVertigo)) {
                    if (this.abs.isState(AbsStateType.RoleSkillCd)) { //调息状态， 不切换到眩晕状态
                        return
                    }
                    this.abs.changeState(AbsStateType.RoleVertigo)
                }
            } else {
                if (this.abs.isState(AbsStateType.RoleVertigo)) {
                    this.abs.changeState(AbsStateType.roleIdle)
                }
            }
        }
    }

    onBorn() {
        this.attrData.fullHp()
        this.refreshHoldTime()
        this.onSkillTrigger(tab.Triggertype.Triggertype_Born)
    }

    //是否无敌
    isInvincible() {
        if (this.attrData.getAttr(tab.AttrType.AttrType_Invincible)) {
            // console.log("无敌中0")
            return true
        }
        return false

    }
    /** 是否眩晕 */
    isVertigo() {
        return this.attrData.getAttr(tab.AttrType.AttrType_Vertigo) > 0
    }

    getLevel() {
        return 1
    }

    /** boss怪 */
    get isBoss() {
        return false
    }
}