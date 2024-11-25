import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { Random } from "../../util/Random";
import { SkillTriggerTab } from "./SkillTriggerTab";
import { PowerBase } from "./PowerBase";
import { BulletTab } from "./BulletTab";
import { EffectTab } from "./EffectTab";
import { BuffTab } from "./BuffTab";
import { FightData } from "../../data/FightData";
import { FightAttrData } from "../../data/FightAttrData";
import { FightMacro } from "../../define/FightDefine";

const { ccclass, property } = _decorator;
const Math_RATIO = 10000;

@ccclass('SkillTab')
export class SkillTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_SkillTable
    configTab: tab.SkillTable
    //---------------------配置字段-------------------
    Id: number // ID 
    SkillType: tab.SkillType // 技能类型 
    Priority: number // 发动优先级 
    Trigger: number[] // 触发器 
    ActionPriority: number // 动作优先级 
    ActionID: number // 动作ID 
    Expend: number // 出手消耗 
    SkillEnhanceIds: number[] // 技能增强 
    Effect: number[] // 效果 
    EffectUnit: tab.EffectUnit // 作用目标 
    SearchEnemy: tab.SearchEnemy // 作用规则 
    SearchNum: number // 作用数量 
    AddBuff: number[] // 加buff 
    AddBuffChance: number[] // buff触发概率 
    CoolTime: number[] // 冷却时间 
    SkillConflict: number[] // 技能互斥 
    BulletTime: number // 子弹发射时间 
    RunningShot: number[] // 连射 
    Bullet: number // 子弹ID 
    RunningShotBullet: number // 连射子弹 
    HandEnemy : boolean // 手动目标 
    RunningShotBulletType : tab.RunningShotBulletType // 连射类型 

    //---------------------自有字段-------------------
    isPower: boolean = false//是否已处理增强

    bulletTab: BulletTab
    runningShotBulletTab: BulletTab
    triggerTabs: SkillTriggerTab[] = []
    effectTabs: EffectTab[] = []
    addBuffTabs: BuffTab[] = []

    isActionSkill: boolean = false //是否为招式技能

    cdTime: number
    isFirstCd: boolean = true //初始CD中

    setConfigId(id: number) {
        super.setConfigId(id)

        //子弹配置
        if (this.Bullet) {
            this.bulletTab = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, this.Bullet) as BulletTab
        }
        //连射子弹
        if (this.RunningShotBullet) {
            this.runningShotBulletTab = this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BulletTable, this.RunningShotBullet) as BulletTab
        }

        //效果配置
        for (let index = 0; index < this.Effect.length; index++) {
            this.effectTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_EffectTable, this.Effect[index]) as EffectTab)
        }
        //buff配置
        for (let index = 0; index < this.AddBuff.length; index++) {
            this.addBuffTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, this.AddBuff[index]) as BuffTab)
        }
        //触发器配置
        for (let index = 0; index < this.Trigger.length; index++) {
            this.triggerTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_TriggerTable, this.Trigger[index]) as SkillTriggerTab)
        }
    }

    /** 是否为普通攻击 */
    isNormalAttack() {
        return this.SkillType == tab.SkillType.SkillType_NormalAttack
    }

    /** 被动技能  */
    isPassiveSkill() {
        return this.SkillType == tab.SkillType.SkillType_PassiveSkill
    }
     /** 时间释放技能  */
    isTimePush(){
        return this.SkillType == tab.SkillType.SkillType_TimePush
    }

    isTrigger(type: tab.Triggertype) {
        if (this.triggerTabs.length) {
            for (let index = 0; index < this.triggerTabs.length; index++) {
                const element = this.triggerTabs[index];
                if (element.isCanTrigger() && element.isType(type)) {
                    return true
                }
            }
        }
        return false
    }

    /** 是否连射 */
    isRunningShotSuccess(addRate: number) {
        let rate = addRate + this.RunningShot[2]
        return Random.isSuccess(rate)
    }

    isHasBuff() {
        return this.addBuffTabs.length > 0
    }
    isHasTrigger() {
        return this.triggerTabs.length > 0
    }

    initCd() {
        this.isFirstCd = true
        this.cdTime = FightData.time

        for (let index = 0; index < this.triggerTabs.length; index++) {
            const v = this.triggerTabs[index];
            v.clearTimeRefresh()
        }
    }


    use() {
        this.isFirstCd = false
        this.cdTime = FightData.time
    }

    /** 是否在CD中 */
    isInCD(attrData: FightAttrData) {
        if (this.CoolTime.length) {
            let tmpCdTime = this.CoolTime[1]
            if (this.isFirstCd) {
                tmpCdTime = this.CoolTime[0]
            }
            if (attrData) {
                tmpCdTime = tmpCdTime / (1 + attrData.getAttr(tab.AttrType.AttrType_AttackSpeed) / FightMacro.PERCENT)
            }
            return FightData.time - this.cdTime < tmpCdTime
        }
        return false
    }

    /** 是否为连射 */
    isRunningShot() {
        return this.RunningShot.length > 0 && this.RunningShot[1] > 0
    }
}