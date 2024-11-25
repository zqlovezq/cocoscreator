import { Node, _decorator, js, math, sys } from "cc";
import { AbsControl } from "../../../../framework/base/IAbs";
import { Bullet } from "../obj/bullet/Bullet";
import { AbsRole } from "../obj/role/AbsRole";
import { Buff } from "../buff/Buff";
import { FightMacro } from "../../define/FightDefine";
import { DamageLab } from "./DamageLab";
import { EffectTab } from "../../power/powerTab/EffectTab";
import { tab } from "../../../../Table/table_gen";
import { FightAttrData, PrdType } from "../../data/FightAttrData";
import { Random } from "../../util/Random";
import Fixed from "../../../../framework/collision/Fixed";
import { BulletTab } from "../../power/powerTab/BulletTab";
import { DamageData, DamageSource } from "./DamageData";
import { DamageStatisticsData } from "./DamageStatisticsData";
import { BuffTab } from "../../power/powerTab/BuffTab";
import { PowerTabFactory } from "../../power/PowerTabFactory";
import { BulletInfo } from "../obj/bullet/BulletInfo";
import { AbsRoleInfo } from "../obj/role/AbsRoleInfo";
const { ccclass, property } = _decorator;

const testList = []
const triggerConditions = []
/** 伤害计算 */
export class DamageCalculation {
    /** 战斗公式文档内， 4个常数 */
    static a: number
    static b: number
    static c: number

    static x: number
    static y: number
    static z: number
    static kDamege: number //会心伤害
    static vertigoBuffId: number
    static vertigoBuffTab: BuffTab
    static init() {
        this.a = tab.getData().GetKeyValue_ConfigTable().FightDefConstant
        this.b = tab.getData().GetKeyValue_ConfigTable().FightDefHeroLevelConstant
        this.c = tab.getData().GetKeyValue_ConfigTable().FightDefHeroStarConstant

        this.x = tab.getData().GetKeyValue_ConfigTable().FightCriticalPointTop
        this.y = tab.getData().GetKeyValue_ConfigTable().FightCriticalCurvature
        this.z = tab.getData().GetKeyValue_ConfigTable().FightCriticalInflection

        this.kDamege = tab.getData().GetKeyValue_ConfigTable().FightBaseThumpDamage
        this.vertigoBuffId = tab.getData().GetKeyValue_ConfigTable().FightBaseVertigo
        DamageData.splitConfig()
        DamageStatisticsData.ins.init()
    }
    //-------------------伤害计算--------------

    /**
     * 伤害计算
     * @param bullet 子弹
     * @param defanseAbs 防御者
     */
    static bullet_damageCalculate(bullet: Bullet, defanseAbs: AbsRole, damageAmount: number) {
        if (defanseAbs.isDead) {
            return
        }
        let bulletTab = bullet.info.configTab
        let attack = bullet.owner.abs
        let attackAttrData = bullet.owner.getAttrData()
        let defanseAttrData = defanseAbs.info.attrData
        if (attackAttrData == null) {
            console.log("子弹来源为空", bullet, bullet.owner)
        }
        if (defanseAttrData == null) {
            console.log("子弹命中角色属性为空", defanseAbs, bullet)
        }
        attackAttrData.toStrong()
        defanseAttrData.toStrong()

        //是否会心
        let isCritical = Random.isSuccess(this.calculateCritical(attackAttrData, bullet))
        //是否暴击
        let isCriticalPoint = Random.isSuccess(this.calculateCriticalPointPer(attackAttrData, defanseAttrData, attack, defanseAbs))
        if (isCritical) {
            attackAttrData.clearPrdCount(PrdType.CriticalEffect)
        } else {
            attackAttrData.addPrdCount(PrdType.CriticalEffect)
        }
        if (isCriticalPoint) {
            attackAttrData.clearPrdCount(PrdType.CriticalPerEffect)
        } else {
            attackAttrData.addPrdCount(PrdType.CriticalPerEffect)
        }
        //设置人物属性，会心、暴击
        attackAttrData.setAttr(tab.AttrType.AttrType_CriticalEffect, isCritical ? 1 : 0)
        attackAttrData.setAttr(tab.AttrType.AttrType_CriticalPerEffect, isCriticalPoint ? 1 : 0)

        //设置人物属性，被会心、被暴击
        defanseAttrData.setAttr(tab.AttrType.AttrType_BeCriticalEffect, isCritical ? 1 : 0)
        defanseAttrData.setAttr(tab.AttrType.AttrType_BeCriticalPerEffect, isCriticalPoint ? 1 : 0)

        //攻击者 伤害计算 触发器
        if (attack && attack.info) {
            attack.info.onSkillTrigger(tab.Triggertype.Triggertype_HarmTest, { otherAbsInfo: defanseAbs.info })
        }

        //被攻击者 伤害计算 触发器
        defanseAbs.info.onSkillTrigger(tab.Triggertype.Triggertype_HarmTest, { otherAbsInfo: attack && attack.info })


        let atk: number = attackAttrData.getAttr(tab.AttrType.AttrType_TotalAttack)
        let deduceDamage: number = this.calculateDeduceDamage(attackAttrData, defanseAttrData)
        let bulletDamageScale: number = this.calculatebulletDamageScale(attackAttrData, bullet.info)


        let baseDamage = atk * (1 - deduceDamage) * bulletDamageScale / FightMacro.PERCENT
        // DamageCalculation.print("基础伤害后", baseDamage, "---", atk, deduceDamage, bulletDamageScale)
        if (isCritical) {
            baseDamage = baseDamage * (this.kDamege + attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamageAdd)) / FightMacro.PERCENT
            // DamageCalculation.print("会心伤害后", baseDamage, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamageAdd))
        }
        if (isCriticalPoint) {
            baseDamage = baseDamage * (this.calculateCriticalPointDamage(attackAttrData, defanseAttrData)) / FightMacro.PERCENT
            // DamageCalculation.print("暴击伤害后", baseDamage, "---", this.calculateCriticalPointDamage(attackAttrData, defanseAttrData))
        }
        baseDamage = baseDamage * this.calculateDamageadd(attackAttrData, defanseAttrData, attack, defanseAbs, bullet) / FightMacro.PERCENT
        // DamageCalculation.print("伤害加成后", baseDamage, "---", this.calculateDamageadd(attackAttrData, defanseAttrData,attack, defanseAbs) / FightMacro.PERCENT)

        //伤害计算-损失生命比例 触发器
        triggerConditions.length = 0
        triggerConditions.push(tab.TriggerCondition.TriggerCondition_HpLostPer)
        let lossHpPer = Math.floor((baseDamage / defanseAttrData.maxHp) * FightMacro.PERCENT)
        defanseAbs.info.onSkillTrigger(tab.Triggertype.Triggertype_HarmTest, { conditions: triggerConditions, otherAbsInfo: attack && attack.info, damage: baseDamage, lossHpPer: lossHpPer })

        baseDamage = baseDamage * (FightMacro.PERCENT + attackAttrData.getAttr(tab.AttrType.AttrType_FinalDamage) - defanseAttrData.getAttr(tab.AttrType.AttrType_FinalDamageReduce)) / FightMacro.PERCENT
        // DamageCalculation.print("最终伤害后", baseDamage, "---", attackAttrData.getAttr(tab.AttrType.AttrType_FinalDamage), defanseAttrData.getAttr(tab.AttrType.AttrType_FinalDamageReduce))
        baseDamage = baseDamage * this.calculateDamageResult(attackAttrData, defanseAttrData, attack, defanseAbs) / FightMacro.PERCENT

        if (bulletTab.SameLow) {//同组子弹伤害衰减
            if (defanseAbs.checkBulletDamageGroup(bullet.info.groupId)) {
                baseDamage = baseDamage * bulletTab.SameLow / FightMacro.PERCENT
            }
        }

        //清除会心、暴击标记
        attackAttrData.clearAttrByType(tab.AttrType.AttrType_CriticalEffect)
        attackAttrData.clearAttrByType(tab.AttrType.AttrType_BeCriticalEffect)

        defanseAttrData.clearAttrByType(tab.AttrType.AttrType_CriticalPerEffect)
        defanseAttrData.clearAttrByType(tab.AttrType.AttrType_BeCriticalPerEffect)


        defanseAbs.addDamegeGroupId(bullet.info.groupId)
        bullet.addHavaDamageObjId(defanseAbs.objId)
        baseDamage = Math.max(Fixed.toFixed(baseDamage), 0)

        let damageData = DamageData.get()
        damageData.source = DamageSource.bullet
        damageData.damage = baseDamage
        damageData.isCritical = isCritical
        damageData.isCriticalPoint = isCriticalPoint
        damageData.sourceObjId = bullet.owner.objId

        if (damageAmount == 0) {//计算眩晕
            let isVertigo = Random.isSuccess(attackAttrData.getAttr(tab.AttrType.AttrType_VertigoPer))
            if (isVertigo) {
                if (attack) {
                    damageData.addBuffTab = attack.info.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, this.vertigoBuffId) as BuffTab
                } else {
                    if (this.vertigoBuffTab == null) {
                        let buffTab = PowerTabFactory.createType(tab.PowerType.PowerType_BuffTable) as BuffTab
                        buffTab.setConfigId(tab.getData().GetKeyValue_ConfigTable().FightBaseVertigo)
                        this.vertigoBuffTab = buffTab
                    }
                    damageData.addBuffTab = this.vertigoBuffTab
                }
            }
        }

        //移除buff
        if (attack && attack.info) {
            attack.info.checkRemoveBuff(tab.ClearType.ClearType_BulletMadeDamage)
            damageData.isCritical && attack.info.checkRemoveBuff(tab.ClearType.ClearType_DeadlyDamage)
            damageData.isCriticalPoint && attack.info.checkRemoveBuff(tab.ClearType.ClearType_CriticalDamage)

        }

        DamageStatisticsData.ins.addBulletDamage(bullet, attack, defanseAbs, damageData)
        return damageData
    }

    /**
     * 伤害计算
     * @param bullet 子弹
     * @param defanseAbs 防御者
     */
    static bullet_damageCalculate1(bullet: Bullet, defanseAbs: AbsRole) {
        if (defanseAbs.isDead) {
            return
        }
    }

    /** 计算子弹系数 */
    static calculatebulletDamageScale(attackAttrData: FightAttrData, bulletInfo: BulletInfo) {
        let num = bulletInfo.DamageScale * (FightMacro.PERCENT + attackAttrData.getAttr(tab.AttrType.AttrType_BulletSpeed)) / FightMacro.PERCENT
        DamageCalculation.print("计算子弹系数", num, "---", bulletInfo.DamageScale, attackAttrData.getAttr(tab.AttrType.AttrType_BulletSpeed))
        return num
    }

    /** 计算会心率 */
    static calculateCritical(attackAttrData: FightAttrData, bullet: Bullet) {
        let num = attackAttrData.getAttr(tab.AttrType.AttrType_Critical)
        let bulletAdd = 0
        for (let index = 0; index < bullet.info.configTab.addEffectTab.length; index++) {
            const v = bullet.info.configTab.addEffectTab[index];
            if (v.EffectType == tab.AttrType.AttrType_Critical) {
                bulletAdd += v.Parameters[0] || 0
            }
        }

        DamageCalculation.print("计算暴击率", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_Critical), bulletAdd)
        let newNum = num * (attackAttrData.getAttr(tab.AttrType.AttrType_CriticalTimes) + FightMacro.PERCENT) / FightMacro.PERCENT + bulletAdd
        // console.log("会心率",newNum,attackAttrData.getPrdCount(PrdType.CriticalEffect),Random.CFromP(newNum) * attackAttrData.getPrdCount(PrdType.CriticalEffect))
        return Random.CFromP(newNum) * attackAttrData.getPrdCount(PrdType.CriticalEffect)
    }

    /** 计算暴击率 */
    static calculateCriticalPointPer(attackAttrData: FightAttrData, defanseAttrData: FightAttrData, attack: AbsRole, defanseAbs: AbsRole) {
        // let num = (attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPoint) - defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint)) / this.k * 100 + attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPer)

        let aSubb = (attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPoint) - defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint))
        let parm1 = (this.x * this.y * aSubb) / (this.y * aSubb + this.z) * 100 + attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPer)

        parm1 = this.ModifyLogicParameter(attack, parm1, tab.Triggertype.Triggertype_CriticalPer, defanseAbs)
        return parm1
        // DamageCalculation.print("计算暴击率", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPoint), defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalPoint), attackAttrData.getAttr(tab.AttrType.AttrType_CriticalPer))
        // console.log("计算暴击率",parm1,attackAttrData.getPrdCount(PrdType.CriticalPerEffect),Random.CFromP(parm1) * attackAttrData.getPrdCount(PrdType.CriticalPerEffect))
        // return Random.CFromP(parm1) * attackAttrData.getPrdCount(PrdType.CriticalPerEffect)
    }

    /** 计算暴击伤害 */
    static calculateCriticalPointDamage(attackAttrData: FightAttrData, defanseAttrData: FightAttrData) {
        //10000 + 伤害增加（攻） + 目标生命比例增伤（攻） - 伤害减少（防）
        let num = attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamage) - defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalDamage)
        // DamageCalculation.print("计算暴击伤害", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_CriticalDamage), defanseAttrData.getAttr(tab.AttrType.AttrType_ResistCriticalDamage))
        return num
    }

    /** 计算伤害加成 */
    static calculateDamageadd(attackAttrData: FightAttrData, defanseAttrData: FightAttrData, attack: AbsRole, defanseAbs: AbsRole, bullet: Bullet) {
        let damageAdd = FightMacro.PERCENT + attackAttrData.getAttr(tab.AttrType.AttrType_DamageAdd)
        if (defanseAbs && defanseAbs.info.isBoss) {
            damageAdd += attackAttrData.getAttr(tab.AttrType.AttrType_BossDamageAdd)
        }
        let bulletAdd = 0
        for (let index = 0; index < bullet.info.configTab.addEffectTab.length; index++) {
            const v = bullet.info.configTab.addEffectTab[index];
            if (v.EffectType == tab.AttrType.AttrType_DamageAdd) {
                bulletAdd += v.Parameters[0] || 0
            }
        }
        damageAdd += bulletAdd

        damageAdd = this.ModifyLogicParameter(attack, damageAdd, tab.Triggertype.Triggertype_DamageAdd, defanseAbs)

        let DamageReduce = defanseAttrData.getAttr(tab.AttrType.AttrType_DamageReduce)
        DamageReduce = this.ModifyLogicParameter(defanseAbs, DamageReduce, tab.Triggertype.Triggertype_DamageReduce, null)

        let num = damageAdd + this.calculateHpPerDamageAdd(attackAttrData, defanseAttrData, attack, defanseAbs) - DamageReduce

        // DamageCalculation.print("计算伤害加成", num, "---", attackAttrData.getAttr(tab.AttrType.AttrType_DamageAdd), this.calculateHpPerDamageAdd(attackAttrData, defanseAttrData), defanseAttrData.getAttr(tab.AttrType.AttrType_DamageReduce))
        return num
    }

    /** 计算伤害结果  */
    static calculateDamageResult(attackAttrData: FightAttrData, defanseAttrData: FightAttrData, attack: AbsRole, defanseAbs: AbsRole) {
        let DamageResult = attackAttrData.getAttr(tab.AttrType.AttrType_DamageResult)
        DamageResult = this.ModifyLogicParameter(attack, DamageResult, tab.Triggertype.Triggertype_DamageResult, defanseAbs)

        let DamageResultReduce = defanseAttrData.getAttr(tab.AttrType.AttrType_DamageResultReduce)
        DamageResultReduce = this.ModifyLogicParameter(defanseAbs, DamageResultReduce, tab.Triggertype.Triggertype_DamageResultReduce, null)

        let num = ((FightMacro.PERCENT + DamageResult - DamageResultReduce))

        return num
    }

    /** 触发器， 参数计算变更 */
    static ModifyLogicParameter(absRole: AbsRole, baseNum: number, triggerType: tab.Triggertype, defanseAbs: AbsRole) {
        if (absRole && absRole.info) {
            let dd = { otherAbsInfo: defanseAbs && defanseAbs.info, baseNum: baseNum }
            absRole.info.onSkillTrigger(triggerType, dd)
            if (baseNum != dd.baseNum) {
                // console.log(triggerType, "触发器，公式增加变更---old:", baseNum, "new:", dd.baseNum)
                baseNum = dd.baseNum
            }
        }
        return baseNum
    }



    /** 计算生命比例伤害增加 */
    static calculateHpPerDamageAdd(attackAttrData: FightAttrData, defanseAttrData: FightAttrData, attack: AbsRole, defanseAbs: AbsRole) {
        let targetHpDamageAdd = attackAttrData.getAttr(tab.AttrType.AttrType_TargetHpDamageAdd)
        targetHpDamageAdd = this.ModifyLogicParameter(attack, targetHpDamageAdd, tab.Triggertype.Triggertype_TargetHpDamageAdd, defanseAbs)
        let num = defanseAttrData.hp / defanseAttrData.maxHp * targetHpDamageAdd

        // DamageCalculation.print("计算生命比例伤害增加", num, "---", attackAttrData.hp, attackAttrData.maxHp, attackAttrData.getAttr(tab.AttrType.AttrType_TargetHpDamageAdd))
        return num
    }


    /** 计算减伤 */
    static calculateDeduceDamage(attackAttrData: FightAttrData, defanseAttrData: FightAttrData) {
        let defanse = Math.max(
            ((defanseAttrData.getAttr(tab.AttrType.AttrType_TotalDefence) - attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefenceFixed)) * (FightMacro.PERCENT - (attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefencePer) - defanseAttrData.getAttr(tab.AttrType.AttrType_Block))) / FightMacro.PERCENT) * ((FightMacro.PERCENT - attackAttrData.getAttr(tab.AttrType.AttrType_IgnorePer)) / FightMacro.PERCENT)
            ,
            0
        )
        // DamageCalculation.print("计算防御", defanse, "---", defanseAttrData.getAttr(tab.AttrType.AttrType_TotalDefence), attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefenceFixed), attackAttrData.getAttr(tab.AttrType.AttrType_BreakDefencePer), defanseAttrData.getAttr(tab.AttrType.AttrType_Block))

        let num = defanse / (this.a + this.b * attackAttrData.level + this.c * attackAttrData.star + defanse + attackAttrData.getAttr(tab.AttrType.AttrType_DamageReduceCoefficientFix))
        // DamageCalculation.print("计算减伤", num, "---", defanse, attackAttrData.level, attackAttrData.star)
        return num
    }

    /** 攻击治疗  */
    static buff_AttackHeal(buff: Buff, index: number, effect: EffectTab) {
        let addHp = buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TotalAttack) * effect.parm / FightMacro.PERCENT * (FightMacro.PERCENT + buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_HealDeep)) / FightMacro.PERCENT
        // DamageCalculation.print("计算攻击治疗", addHp, "---", buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TotalAttack), effect.parm, buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_HealDeep))
        addHp = Math.floor(addHp)

        let data = DamageData.get()
        data.source = DamageSource.buff
        data.damage = addHp
        data.isHeal = true
        data.sourceObjId = buff.owner.objId
        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)

        let abs = buff.owner.abs
        abs.info.onHitDamage(data)

        this.HpHealShield(data, abs.info)

        DamageLab.addShowDamageNum(data, abs, 0)
    }

    /** 最大生命百分比回血  */
    static buff_BigHpHeal(buff: Buff, index: number, effect: EffectTab) {
        let data = buff.lockParm
        if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.parm / FightMacro.PERCENT

            // DamageCalculation.print("计算最大生命百分比回血", addHp, "---", buff.owner.getAttrData().maxHp, effect.parm)

            addHp = Math.floor(addHp)

            data = DamageData.get()
            data.source = DamageSource.buff
            data.damage = addHp
            data.isHealPer = true
            data.sourceObjId = buff.owner.objId
        }

        buff.lockParm = DamageData.copy(data)
        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)


        let abs = buff.owner.abs
        abs.info.onHitDamage(data)

        this.HpHealShield(data, abs.info)

        DamageLab.addShowDamageNum(data, abs, 0)
    }

    /** 生命回复增加护盾 */
    static HpHealShield(hpDamageData: DamageData, absRoleInfo: AbsRoleInfo) {
        let data = DamageData.get()
        data.source = hpDamageData.source
        data.damage = hpDamageData.damage * (absRoleInfo.attrData.getAttr(tab.AttrType.AttrType_HpHealShieldPer) / FightMacro.PERCENT * (FightMacro.PERCENT + absRoleInfo.attrData.getAttr(tab.AttrType.AttrType_ShieldDeep)) / FightMacro.PERCENT)
        data.damage = Math.floor(data.damage)
        data.isShield = true
        data.sourceObjId = absRoleInfo.abs.objId

        DamageStatisticsData.ins.addBuffDamage(null, absRoleInfo.abs, absRoleInfo.abs, data)

        absRoleInfo.onHitDamage(data)
    }

    /** 当前生命百分比掉血   */
    static buff_NowHpSubHeal(buff: Buff, index: number, effect: EffectTab) {
        let data = buff.lockParm
        let abs = buff.owner.abs
        // if (data == null) {
        let nowHp = abs.info.attrData.hp
        let addHp = nowHp * effect.parm / FightMacro.PERCENT
        // DamageCalculation.print("计算当前生命百分比掉血", addHp, "---", buff.addOwner.getAttrData().hp, effect.parm)
        addHp = Math.floor(addHp)

        data = DamageData.get()
        data.source = DamageSource.buff
        data.damage = addHp
        data.isPerSubHeal = true
        data.isSelfDamage = buff.addOwner.objId == buff.owner.objId
        data.sourceObjId = buff.owner.objId
        // }
        // buff.lockParm = DamageData.copy(data)

        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)


        abs.info.onHitDamage(data)

        DamageLab.addShowDamageNum(data, abs, 0)
    }

    /** 最大生命百分比掉血   */
    static buff_BigHpSubHeal(buff: Buff, index: number, effect: EffectTab) {
        let data = buff.lockParm
        if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.parm / FightMacro.PERCENT
            // DamageCalculation.print("计算最大生命百分比掉血", addHp, "---", buff.addOwner.getAttrData().maxHp, effect.parm)
            addHp = Math.floor(addHp)

            data = DamageData.get()
            data.source = DamageSource.buff
            data.damage = addHp
            data.isPerSubHeal = true

            data.isSelfDamage = buff.addOwner.objId == buff.owner.objId
            data.sourceObjId = buff.owner.objId
        }
        buff.lockParm = DamageData.copy(data)

        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)

        let abs = buff.owner.abs
        abs.info.onHitDamage(data)

        DamageLab.addShowDamageNum(data, abs, 0)

    }

    /** 撕裂（流血）   */
    static buff_TearEffect(buff: Buff, index: number, effect: EffectTab) {
        let atk = buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TotalAttack)
        let tearPer = buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_AttackTear) * ((FightMacro.PERCENT + buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TearCoe)) / FightMacro.PERCENT)
        let tearAdd = (FightMacro.PERCENT + buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TearDeep))

        let addHp = atk * tearPer / FightMacro.PERCENT * tearAdd / FightMacro.PERCENT
        addHp = Math.floor(addHp)

        // DamageCalculation.print("计算撕裂", addHp, "---", atk, tearPer, tearAdd)

        let data = DamageData.get()
        data.source = DamageSource.buff
        data.damage = addHp
        data.isTear = true
        data.sourceObjId = buff.owner.objId
        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)

        let abs = buff.owner.abs
        abs.info.onHitDamage(data)

        DamageLab.addShowDamageNum(data, abs, 0)

    }


    /** 攻击护盾  */
    static buff_AttackShield(buff: Buff, index: number, effect: EffectTab) {
        let addHp = buff.addOwner.getAttrData().getAttr(tab.AttrType.AttrType_TotalAttack) * effect.parm / FightMacro.PERCENT * (FightMacro.PERCENT + buff.owner.getAttrData().getAttr(tab.AttrType.AttrType_ShieldDeep)) / FightMacro.PERCENT
        addHp = Math.floor(addHp)

        let data = DamageData.get()
        data.source = DamageSource.buff
        data.damage = addHp
        data.isShield = true
        data.sourceObjId = buff.owner.objId
        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)

        let abs = buff.owner.abs
        abs.info.onHitDamage(data)
    }

    /** 最大生命护盾  */
    static buff_BigHpShield(buff: Buff, index: number, effect: EffectTab) {
        let data = buff.lockParm
        if (data == null) {
            let addHp = buff.owner.getAttrData().maxHp * effect.Parameters[0] / FightMacro.PERCENT * (FightMacro.PERCENT + buff.owner.getAttrData().getAttr(tab.AttrType.AttrType_ShieldDeep)) / FightMacro.PERCENT


            addHp = Math.floor(addHp)

            data = DamageData.get()
            data.source = DamageSource.buff
            data.damage = addHp
            data.isShield = true
            data.sourceObjId = buff.owner.objId
        }

        buff.lockParm = DamageData.copy(data)
        DamageStatisticsData.ins.addBuffDamage(buff, buff.addOwner.abs, buff.owner.abs, data)

        let abs = buff.owner.abs
        abs.info.onHitDamage(data)
    }




    static print(...args) {
        // console.log(...args)
    }
}