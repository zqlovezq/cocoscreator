import { _decorator, Component } from "cc";
import { tab } from "../../../../Table/table_gen";
import { Random } from "../../util/Random";
import { SkillTab } from "./SkillTab";
import { PowerBase } from "./PowerBase";
import { FightData } from "../../data/FightData";
import { FightMacro } from "../../define/FightDefine";

const { ccclass, property } = _decorator;
const Math_RATIO = 10000;

@ccclass('SkillTriggerTab')
export class SkillTriggerTab extends PowerBase {
    powerType: tab.PowerType = tab.PowerType.PowerType_TriggerTable
    configTab: tab.TriggerTable
    //---------------------配置字段-------------------
    Id: number // ID 
    Chance: number // 概率 
    Triggertype: tab.Triggertype // 触发类型 
    TriggerNumber: number // 触发次数 
    TriggerCd: number // 触发CD 
    TriggerCondition: tab.TriggerCondition // 触发条件 
    Parameters: number[] // 条件参数 
    Behavior: tab.Behavior[] // 触发行为 
    Argument: number[] // 行为参数 
    TriggerTarget: tab.TriggerTarget // 条件目标 
    TriggerGoal: tab.TriggerGoal // 行为目标 

    //---------------------自有字段-------------------
    argumentTabs: any[] = []

    //已出发次数
    triggerCount: number = 0

    /** 时间间隔 (触发器) */
    timeRefresh: number

    /** CD时间 */
    cdTime: number = 0

    setConfigId(id: number) {
        super.setConfigId(id)

        //行为参数配置
        for (let index = 0; index < this.Behavior.length; index++) {
            const behavior = this.Behavior[index];
            const argument = this.Argument[index]
            switch (behavior) {
                case tab.Behavior.Behavior_UseSkill:
                case tab.Behavior.Behavior_SwitchSkill:
                    this.argumentTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, argument))
                    break
                case tab.Behavior.Behavior_SwitchGroup:
                    this.argumentTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillGroupTable, argument))
                    break
                case tab.Behavior.Behavior_ConditionAddBuff:
                case tab.Behavior.Behavior_AddBuff:
                    this.argumentTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_BuffTable, argument))
                    break
                case tab.Behavior.Behavior_UseEffect:
                    this.argumentTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_EffectTable, argument))
                    break
                case tab.Behavior.Behavior_AddAttackNum:
                    this.argumentTabs.push(argument)
                    break
                case tab.Behavior.Behavior_BackJump:
                    this.argumentTabs.push(argument)
                    break
                case tab.Behavior.Behavior_AddSkill:
                    this.argumentTabs.push(this.skillPowers.createTypeAnyId(tab.PowerType.PowerType_SkillTable, argument))
                    break
                default:
                    this.argumentTabs.push(argument)
                    break;
            }
        }
    }

    isType(type: tab.Triggertype) {
        return this.Triggertype == type
    }
    /** 触发参数 */
    getParameters() {
        return this.Parameters
    }

    /** 触发器参数是否成功 */
    isParametersSucceed(parm: number) {
        if (this.Parameters.length == 0) {
            return true
        }
        return parm >= (this.Parameters[0] || 0)
    }

    /** 触发器概率是否成功 */
    isTriggerChanceSucceed(count:number) {
        // 触发器
        return Random.isSuccess(Random.CFromP(this.Chance) *  count)
    }

    /** 是否可触发 */
    isCanTrigger() {
        if (this.TriggerNumber) {
            return this.TriggerNumber > this.triggerCount
        }
        return true
    }

    addTriggerCount() {
        this.triggerCount += 1
        this.use()
    }

    clearTimeRefresh() {
        this.timeRefresh = FightData.time
    }

    checkTimeRefresh(num: number) {
        return FightData.time - this.timeRefresh >= num
    }

    use() {
        this.cdTime = FightData.time
    }

    /** 是否在CD中 */
    isInCD() {
        if (this.TriggerCd) {
            return FightData.time - this.cdTime < this.TriggerCd
        }
        return false
    }


    getHoldTime(HoldTimePercent:number = 0){
        return this.Parameters[0] * (FightMacro.PERCENT - HoldTimePercent) / FightMacro.PERCENT
    }
}