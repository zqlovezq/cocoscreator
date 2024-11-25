import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { SkillTab } from '../../power/powerTab/SkillTab';
import { AbsRole } from '../obj/role/AbsRole';
import { AbsRoleInfo } from '../obj/role/AbsRoleInfo';
import { tab } from '../../../../Table/table_gen';
import { BulletControl } from '../obj/bullet/BulletControl';
import { SearchEnemy } from '../ai/SearchEnemy';
import { SkillControl } from './SkillControl';
import { SkillTriggerTab } from '../../power/powerTab/SkillTriggerTab';
import { AbsObjInfo, AbsObjInfoAttr } from '../obj/AbsObjInfo';
import { BuffControl } from '../buff/BuffControl';
import { SkillGroupTab } from '../../power/powerTab/SkillGroupTab';
import { BuffTab } from '../../power/powerTab/BuffTab';
import { EffectControl } from '../effect/EffectControl';
import { EffectTab } from '../../power/powerTab/EffectTab';
import { FightMacro, IFightUpdate } from '../../define/FightDefine';
import { checkSameDay } from '../../../utils/GameUtil';
import { FightData } from '../../data/FightData';
import { AbsStateType } from '../obj/state/AbsState';
import { AbsObjType } from '../obj/AbsObj';
import { MonsterControl } from '../obj/role/monster/MonsterControl';
import { Monster } from '../obj/role/monster/Monster';
import { Buff } from '../buff/Buff';
import { TaskView } from '../../../model/task/TaskView';
import { PlayerControl } from '../obj/role/role/PlayerControl';
import { Random } from '../../util/Random';


const { ccclass, property } = _decorator;
const tempTypeSkills = {}

const tempPos = new Vec3(0, 0, 0);
export interface TriggerParms {
    damage?: number,
    conditions?: tab.TriggerCondition[],
    otherAbsInfo?: AbsRoleInfo
    rogueId?: number
    lossHpPer?: number //损失生命比例
    distance?: number//距离 两向量的欧氏距离平方
    buff?: Buff
    warningType?: number//警告类型
    baseNum?: number //修改数值
    skillId?: number
}
@ccclass('SkillTriggerControl')
export class SkillTriggerControl extends AbsControl implements IFightUpdate {
    iFightUpdate(dt: number): void {
    }

    private static _instance: SkillTriggerControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new SkillTriggerControl();
        }
        return this._instance;
    }


    init(): void {

    }

    purge(): void {

    }

    /** 技能触发器 */
    onSkillTrigger(absInfo: AbsRoleInfo, type: tab.Triggertype, parms: TriggerParms) {
        if (absInfo.isRecycle) {
            console.warn("已被销毁")
            return
        }
        if (tempTypeSkills[type] == null) {
            tempTypeSkills[type] = []
        }
        let tempSkills = tempTypeSkills[type]
        tempSkills.length = 0

        let skillGroup = absInfo.normalGroup
        if (skillGroup == null) {
            return
        }

        let isInNormal = false
        let skill: SkillTab
        for (let j = 0; j < skillGroup.skills.length; j++) {
            skill = skillGroup.skills[j]
            if (skill.isNormalAttack()) { //普通攻击技能， 只检测当前技能
                if (isInNormal) { //普通已放入
                    continue
                }
                skill = absInfo.getNowSkill()
            }
            if (skill == null) {
                continue
            }

            if (skill.isTrigger(type)) {
                tempSkills.push(skill)
                if (skill.isNormalAttack()) {
                    isInNormal = true
                }
            }
        }
        if (absInfo.weaponeGroup) {//招式
            for (let j = 0; j < absInfo.weaponeGroup.skills.length; j++) {
                skill = absInfo.weaponeGroup.skills[j]
                if (skill.isTrigger(type)) {
                    tempSkills.push(skill)
                }
            }
        }
        for (let index = 0; index < absInfo.takeSkills.length; index++) {
            skill = absInfo.takeSkills[index]
            if (skill.isTrigger(type)) {
                tempSkills.push(skill)
            }
        }


        tempSkills.sort((a, b) => {
            return a.Priority - b.Priority
        })

        let skillTriger: SkillTriggerTab
        let behavior, argument

        let otherInfo
        if (parms && parms.otherAbsInfo) {
            otherInfo = parms.otherAbsInfo
        }

        //执行目标， 条件目标
        let behaviorInfo: AbsRoleInfo, conditionInfo: AbsRoleInfo

        for (let ii = 0; ii < tempSkills.length; ii++) {
            const v = tempSkills[ii];
            if (v.triggerTabs.length == 0) {
                continue
            }
            for (let j = 0; j < v.triggerTabs.length; j++) {
                skillTriger = v.triggerTabs[j];
                if (skillTriger.Triggertype != type || skillTriger.isInCD()) {
                    continue
                }
                if (parms) {
                    if (parms.conditions && parms.conditions.length) {//过滤非指定条件类型 （目前只有伤害计算类型这么处理）
                        if (parms.conditions.indexOf(skillTriger.TriggerCondition) == -1) {
                            continue
                        }
                    }
                }

                let isSuccess = skillTriger.isTriggerChanceSucceed(absInfo.attrData.getPrdCount(skillTriger.Id))
                if (!isSuccess) {
                    absInfo.attrData.addPrdCount(skillTriger.Id)
                } else {
                    absInfo.attrData.clearPrdCount(skillTriger.Id)
                    if (skillTriger.Behavior.length) {
                        //条件目标
                        conditionInfo = skillTriger.TriggerTarget == tab.TriggerTarget.TriggerTarget_Mine ? absInfo : otherInfo
                        if (conditionInfo == null) {
                            continue
                        }
                        let isParmSucceed = this.isTriggerCondition(conditionInfo, skillTriger, v, parms)
                        if (isParmSucceed) {
                            //执行目标
                            behaviorInfo = skillTriger.TriggerGoal == tab.TriggerGoal.TriggerGoal_Mine ? absInfo : otherInfo
                            if (behaviorInfo == null) {
                                continue
                            }
                            if (type != tab.Triggertype.Triggertype_Dead && behaviorInfo.abs.isDead) {

                                if (behaviorInfo.abs.isRole() && type == tab.Triggertype.Triggertype_BuffExpiration && skillTriger.TriggerCondition == tab.TriggerCondition.TriggerCondition_BuffId) {
                                    console.log("执行目标死亡---但是，死亡目标是英雄， 并且是光暗相互挂buff，不中断",)
                                } else {
                                    console.log("执行目标死亡---", type)
                                    continue
                                }

                            }
                            skillTriger.addTriggerCount()
                            for (let k = 0; k < skillTriger.Behavior.length; k++) {
                                behavior = skillTriger.Behavior[k];
                                argument = skillTriger.argumentTabs[k]
                                switch (behavior) {
                                    case tab.Behavior.Behavior_UseSkill:
                                        this.onUseSkill(skillTriger, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_SwitchGroup:
                                        this.onSwitchGroup(skillTriger, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_SwitchSkill:
                                        this.onSwitchSkill(skillTriger, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_AddBuff:
                                        this.onAddBuff(skillTriger, behaviorInfo, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_ConditionAddBuff:
                                        this.onAddBuff(skillTriger, conditionInfo, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_UseEffect:
                                        this.onUseEffect(skillTriger, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_AddAttackNum:
                                        this.onAddAttackNum(skillTriger, behaviorInfo, argument)
                                        break;
                                    case tab.Behavior.Behavior_Dead:
                                        this.onDead(skillTriger, behaviorInfo, argument)
                                        break
                                    case tab.Behavior.Behavior_Revive:
                                        this.onRevive(skillTriger, behaviorInfo, argument)
                                        break
                                    case tab.Behavior.Behavior_BackJump:
                                        this.onBackJump(skillTriger, behaviorInfo, argument, skillTriger.argumentTabs)
                                        break;
                                    case tab.Behavior.Behavior_Summon:
                                        this.onSummon(skillTriger, behaviorInfo, argument, skillTriger.argumentTabs)
                                        break;
                                    case tab.Behavior.Behavior_AddSkill:
                                        this.onAddSkill(skillTriger, behaviorInfo, argument)
                                        break
                                    case tab.Behavior.Behavior_BuffClear:
                                        this.onClearBuff(skillTriger, behaviorInfo, argument, skillTriger.Argument)
                                        break
                                    case tab.Behavior.Behavior_ReplaceMonsterAnimation:
                                        this.onReplaceMonsterAnimation(skillTriger, behaviorInfo, argument, skillTriger.Argument)
                                        break
                                    case tab.Behavior.Behavior_ModifyLogicParameter:
                                        console.log("修改逻辑计算参数")
                                        if (parms) {
                                            parms.baseNum += argument
                                        }
                                        break
                                    case tab.Behavior.Behavior_ModifyLogicParameterRange:
                                        console.log("修改逻辑计算参数,随机区间")
                                        if (parms && skillTriger.Argument.length >= 2) {
                                            parms.baseNum += Random.getRandomInt(skillTriger.Argument[0], skillTriger.Argument[1] + 1)
                                        }
                                        break
                                    case tab.Behavior.Behavior_BuffClearType:
                                        this.onClearBuffType(skillTriger, behaviorInfo, argument, skillTriger.Argument)
                                        break

                                }

                            }
                        }
                    }
                }
            }
        }
    }

    isTriggerCondition(absInfo: AbsRoleInfo, skillTriger: SkillTriggerTab, skill: SkillTab, parms: TriggerParms) {
        if (skillTriger.Parameters.length == 0) {
            return true
        }
        let bo
        switch (skillTriger.TriggerCondition) {
            case tab.TriggerCondition.TriggerCondition_AttackNum:
                return this.isParametersSucceedByAttackCount(absInfo, skillTriger)
            case tab.TriggerCondition.TriggerCondition_HoldTime:
                bo = (FightData.time - absInfo.getObjAttr(AbsObjInfoAttr.holdTime) >= skillTriger.getHoldTime(absInfo.attrData.getAttr(tab.AttrType.AttrType_HoldTimePercent)))
                if (bo) {
                    absInfo.refreshHoldTime()
                }
                return bo
            case tab.TriggerCondition.TriggerCondition_TimeInterval:
            case tab.TriggerCondition.TriggerCondition_TimeRefresh:
                bo = skillTriger.checkTimeRefresh(skillTriger.Parameters[0])
                if (bo) {
                    skillTriger.clearTimeRefresh()
                }
                return bo
            case tab.TriggerCondition.TriggerCondition_SkillId:
                if (absInfo.getNowSkill()) {
                    return absInfo.getNowSkill().Id == skillTriger.Parameters[0]
                }
                return false
            case tab.TriggerCondition.TriggerCondition_SkillGroup:
                return absInfo.normalGroup.Id == skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_HpLostPer:
                return parms && parms.lossHpPer > skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_Critical://检测这个条件肯定达成
                SkillTriggerControl.print("会心触发器--")
                return true
            case tab.TriggerCondition.TriggerCondition_HpPer:
                return absInfo.attrData.hpPercent < skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_HpRatio:
                return absInfo.attrData.hpPercent >= skillTriger.Parameters[0]

            case tab.TriggerCondition.TriggerCondition_CriticalPoint://检测这个条件肯定达成
                SkillTriggerControl.print("暴击触发器--")
                return true
            case tab.TriggerCondition.TriggerCondition_BeCriticalPoint://检测这个条件肯定达成
                SkillTriggerControl.print("被暴击触发器--")
                return true
            case tab.TriggerCondition.TriggerCondition_BeCritical://检测这个条件肯定达成
                SkillTriggerControl.print("被会心触发器--")
                return true
            case tab.TriggerCondition.TriggerCondition_RogueId:
                return skillTriger.Parameters.indexOf(parms.rogueId) >= 0
            case tab.TriggerCondition.TriggerCondition_TotalHpLostPer:
                return this.isParametersSucceedByInfoAttr(absInfo, skillTriger, AbsObjInfoAttr.totalLossHpPer, false)
            case tab.TriggerCondition.TriggerCondition_EveryHpLostPer:
                return this.isParametersSucceedByInfoAttr(absInfo, skillTriger, AbsObjInfoAttr.EverylHpLostPe)
            case tab.TriggerCondition.TriggerCondition_Distance:
                return parms && parms.distance >= skillTriger.Parameters[0] * skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_BuffId:
                return parms && parms.buff && parms.buff.buffId == skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_BuffLayerNum:
                return absInfo.getBuffIdTotalCount(skillTriger.Parameters[0]) >= skillTriger.Parameters[1]
            case tab.TriggerCondition.TriggerCondition_WarnType:
                return parms && parms.warningType == skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_Level:
                return absInfo.getLevel() >= skillTriger.Parameters[0]
            case tab.TriggerCondition.TriggerCondition_CheckAttr:// 属性检测 
                return absInfo.attrData.getAttr(skillTriger.Parameters[0] as undefined as tab.AttrType) >= skillTriger.Parameters[1]
            case tab.TriggerCondition.TriggerCondition_DetectionSkillId:
                return parms && parms.skillId == skillTriger.Parameters[0]
        }
        return true
    }

    /** 根据攻击次数判定参数是否成功 */
    isParametersSucceedByAttackCount(absInfo: AbsRoleInfo, skillTrigger: SkillTriggerTab) {
        let bool = skillTrigger.isParametersSucceed(absInfo.normalGroup.triggerAttackCount)
        if (bool) {
            absInfo.normalGroup.clearTriggerAttackCount()
        }
        return bool
    }

    /** 根据人物属性判定参数是否成功 */
    isParametersSucceedByInfoAttr(absInfo: AbsRoleInfo, skillTrigger: SkillTriggerTab, attrType: AbsObjInfoAttr, isClear: boolean = true) {
        SkillTriggerControl.print("isParametersSucceedByInfoAttr", attrType, absInfo.getObjAttr(attrType), skillTrigger.Parameters)
        let bool = skillTrigger.isParametersSucceed(absInfo.getObjAttr(attrType))
        if (bool && isClear) {
            absInfo.clearObjAttr(attrType)
        }
        return bool
    }

    /** 使用技能 */
    onUseSkill(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, skillTab: SkillTab) {
        SkillTriggerControl.print("触发器-使用技能-成功", skillTriger, skillTab)
        let targetPos
        if (behaviorInfo.isLeader && PlayerControl.ins.getClicking() && skillTab.HandEnemy) {
            targetPos = PlayerControl.ins.getClickNodePos()
        }
        SkillControl.ins.useSkillAndBullet(skillTab, behaviorInfo.abs, targetPos)
    }

    /** 切换技能 */
    onSwitchSkill(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, skillTab: SkillTab) {
        SkillTriggerControl.print("触发器-切换技能-成功", skillTriger, skillTab)
        SkillControl.ins.switchSkill(skillTab, behaviorInfo.abs)
    }

    /** 切换技能组 */
    onSwitchGroup(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, skillGroup: SkillGroupTab) {
        SkillTriggerControl.print("触发器-切换技能组-成功", skillTriger, skillGroup)
        SkillControl.ins.switchSkillGroup(skillGroup, behaviorInfo.abs)
    }
    /** 增加Buff */
    onAddBuff(skillTriger: SkillTriggerTab, addRoleInfo: AbsRoleInfo, behaviorInfo: AbsRoleInfo, buffTab: BuffTab) {
        SkillTriggerControl.print("触发器-增加Buff-成功", skillTriger, buffTab)
        BuffControl.ins.addBuff(buffTab, addRoleInfo.abs.objId, behaviorInfo.abs)
    }

    /** 使用效果  */
    onUseEffect(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, effectTab: EffectTab) {
        SkillTriggerControl.print("触发器-使用效果-成功", skillTriger, effectTab)
        effectTab.random()
        EffectControl.ins.addEffect(effectTab, behaviorInfo.abs, behaviorInfo.abs)
    }

    /** 增加攻击次数 */
    onAddAttackNum(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, count: number) {
        SkillTriggerControl.print("触发器-增加攻击次数-成功", skillTriger, count)
        behaviorInfo.addNormalAttackCount(count)
    }
    /** 死亡 */
    onDead(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, count: number) {
        SkillTriggerControl.print("触发器-死亡-成功", skillTriger, count)
        behaviorInfo.abs.onDead()
    }
    /** 复活 */
    onRevive(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, count: number) {
        SkillTriggerControl.print("触发器-复活-成功", skillTriger, count)
        behaviorInfo.abs.onRevive()
        behaviorInfo.attrData.hp = behaviorInfo.attrData.maxHp * ((count || FightMacro.PERCENT) / FightMacro.PERCENT)
        behaviorInfo.abs.updateHP()
    }

    /** 后跳 */
    onBackJump(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: number, argumentTabs: any[]) {
        SkillTriggerControl.print("触发器-后跳-成功", skillTriger, argument, argumentTabs)
        behaviorInfo.abs.setBackJump(skillTriger.Argument)
    }

    /** 召唤 */
    onSummon(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: number, argumentTabs: any[]) {
        if (behaviorInfo.abs.objType == AbsObjType.enemy) {
            SkillTriggerControl.print("触发器-召唤-成功", skillTriger, argument, argumentTabs)
            MonsterControl.ins.summon(behaviorInfo.abs as Monster, skillTriger.Argument)
        }
    }

    /** 添加技能 */
    onAddSkill(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: SkillTab) {
        SkillTriggerControl.print("触发器-添加技能-成功", skillTriger, argument)
        SkillControl.ins.addSkill(argument, behaviorInfo.abs)
    }

    /** 移除buff */
    onClearBuff(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: number, argumentTabs: number[]) {
        SkillTriggerControl.print("触发器-移除buff-成功", skillTriger, argument, argumentTabs)
        BuffControl.ins.removeBuffs(argumentTabs, behaviorInfo.abs)
    }

    /**  清除buff类型  */
    onClearBuffType(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: number, argumentTabs: number[]) {
        SkillTriggerControl.print("触发器-移除buff类型-成功", skillTriger, argument, argumentTabs)
        BuffControl.ins.removeBuffType(argument, behaviorInfo.abs)
    }


    /** 替换怪物动画为该怪物ID */
    onReplaceMonsterAnimation(skillTriger: SkillTriggerTab, behaviorInfo: AbsRoleInfo, argument: number, argumentTabs: number[]) {
        SkillTriggerControl.print("触发器-替换怪物动画为该怪物ID -成功", skillTriger, argument, argumentTabs)
        MonsterControl.ins.onReplaceMonsterAnimation(behaviorInfo.abs as Monster, argument)
    }


    static print(...args) {
        // console.log(...args)
    }
}

