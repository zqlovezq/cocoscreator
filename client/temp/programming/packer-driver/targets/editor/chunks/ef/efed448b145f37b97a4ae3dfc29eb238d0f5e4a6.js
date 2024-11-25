System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, AbsControl, tab, SkillControl, AbsObjInfoAttr, BuffControl, EffectControl, FightMacro, FightData, AbsObjType, MonsterControl, PlayerControl, Random, _dec, _class, _class2, _crd, ccclass, property, tempTypeSkills, tempPos, SkillTriggerControl;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../obj/role/AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "./SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerTab(extras) {
    _reporterNs.report("SkillTriggerTab", "../../power/powerTab/SkillTriggerTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../obj/AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "../buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillGroupTab(extras) {
    _reporterNs.report("SkillGroupTab", "../../power/powerTab/SkillGroupTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectControl(extras) {
    _reporterNs.report("EffectControl", "../effect/EffectControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "../../power/powerTab/EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIFightUpdate(extras) {
    _reporterNs.report("IFightUpdate", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterControl(extras) {
    _reporterNs.report("MonsterControl", "../obj/role/monster/MonsterControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuff(extras) {
    _reporterNs.report("Buff", "../buff/Buff", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../obj/role/role/PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      SkillControl = _unresolved_4.SkillControl;
    }, function (_unresolved_5) {
      AbsObjInfoAttr = _unresolved_5.AbsObjInfoAttr;
    }, function (_unresolved_6) {
      BuffControl = _unresolved_6.BuffControl;
    }, function (_unresolved_7) {
      EffectControl = _unresolved_7.EffectControl;
    }, function (_unresolved_8) {
      FightMacro = _unresolved_8.FightMacro;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }, function (_unresolved_10) {
      AbsObjType = _unresolved_10.AbsObjType;
    }, function (_unresolved_11) {
      MonsterControl = _unresolved_11.MonsterControl;
    }, function (_unresolved_12) {
      PlayerControl = _unresolved_12.PlayerControl;
    }, function (_unresolved_13) {
      Random = _unresolved_13.Random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e0f51SrjuRHLI+PpUBiRL5a", "SkillTriggerControl", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Color', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'Quat', 'Rect', 'sp', 'Sprite', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempTypeSkills = {};
      tempPos = new Vec3(0, 0, 0);

      _export("SkillTriggerControl", SkillTriggerControl = (_dec = ccclass('SkillTriggerControl'), _dec(_class = (_class2 = class SkillTriggerControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        iFightUpdate(dt) {}

        static get ins() {
          if (null == this._instance) {
            this._instance = new SkillTriggerControl();
          }

          return this._instance;
        }

        init() {}

        purge() {}
        /** 技能触发器 */


        onSkillTrigger(absInfo, type, parms) {
          if (absInfo.isRecycle) {
            console.warn("已被销毁");
            return;
          }

          if (tempTypeSkills[type] == null) {
            tempTypeSkills[type] = [];
          }

          let tempSkills = tempTypeSkills[type];
          tempSkills.length = 0;
          let skillGroup = absInfo.normalGroup;

          if (skillGroup == null) {
            return;
          }

          let isInNormal = false;
          let skill;

          for (let j = 0; j < skillGroup.skills.length; j++) {
            skill = skillGroup.skills[j];

            if (skill.isNormalAttack()) {
              //普通攻击技能， 只检测当前技能
              if (isInNormal) {
                //普通已放入
                continue;
              }

              skill = absInfo.getNowSkill();
            }

            if (skill == null) {
              continue;
            }

            if (skill.isTrigger(type)) {
              tempSkills.push(skill);

              if (skill.isNormalAttack()) {
                isInNormal = true;
              }
            }
          }

          if (absInfo.weaponeGroup) {
            //招式
            for (let j = 0; j < absInfo.weaponeGroup.skills.length; j++) {
              skill = absInfo.weaponeGroup.skills[j];

              if (skill.isTrigger(type)) {
                tempSkills.push(skill);
              }
            }
          }

          for (let index = 0; index < absInfo.takeSkills.length; index++) {
            skill = absInfo.takeSkills[index];

            if (skill.isTrigger(type)) {
              tempSkills.push(skill);
            }
          }

          tempSkills.sort((a, b) => {
            return a.Priority - b.Priority;
          });
          let skillTriger;
          let behavior, argument;
          let otherInfo;

          if (parms && parms.otherAbsInfo) {
            otherInfo = parms.otherAbsInfo;
          } //执行目标， 条件目标


          let behaviorInfo, conditionInfo;

          for (let ii = 0; ii < tempSkills.length; ii++) {
            const v = tempSkills[ii];

            if (v.triggerTabs.length == 0) {
              continue;
            }

            for (let j = 0; j < v.triggerTabs.length; j++) {
              skillTriger = v.triggerTabs[j];

              if (skillTriger.Triggertype != type || skillTriger.isInCD()) {
                continue;
              }

              if (parms) {
                if (parms.conditions && parms.conditions.length) {
                  //过滤非指定条件类型 （目前只有伤害计算类型这么处理）
                  if (parms.conditions.indexOf(skillTriger.TriggerCondition) == -1) {
                    continue;
                  }
                }
              }

              let isSuccess = skillTriger.isTriggerChanceSucceed(absInfo.attrData.getPrdCount(skillTriger.Id));

              if (!isSuccess) {
                absInfo.attrData.addPrdCount(skillTriger.Id);
              } else {
                absInfo.attrData.clearPrdCount(skillTriger.Id);

                if (skillTriger.Behavior.length) {
                  //条件目标
                  conditionInfo = skillTriger.TriggerTarget == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).TriggerTarget.TriggerTarget_Mine ? absInfo : otherInfo;

                  if (conditionInfo == null) {
                    continue;
                  }

                  let isParmSucceed = this.isTriggerCondition(conditionInfo, skillTriger, v, parms);

                  if (isParmSucceed) {
                    //执行目标
                    behaviorInfo = skillTriger.TriggerGoal == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).TriggerGoal.TriggerGoal_Mine ? absInfo : otherInfo;

                    if (behaviorInfo == null) {
                      continue;
                    }

                    if (type != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                      error: Error()
                    }), tab) : tab).Triggertype.Triggertype_Dead && behaviorInfo.abs.isDead) {
                      if (behaviorInfo.abs.isRole() && type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                        error: Error()
                      }), tab) : tab).Triggertype.Triggertype_BuffExpiration && skillTriger.TriggerCondition == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                        error: Error()
                      }), tab) : tab).TriggerCondition.TriggerCondition_BuffId) {
                        console.log("执行目标死亡---但是，死亡目标是英雄， 并且是光暗相互挂buff，不中断");
                      } else {
                        console.log("执行目标死亡---", type);
                        continue;
                      }
                    }

                    skillTriger.addTriggerCount();

                    for (let k = 0; k < skillTriger.Behavior.length; k++) {
                      behavior = skillTriger.Behavior[k];
                      argument = skillTriger.argumentTabs[k];

                      switch (behavior) {
                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_UseSkill:
                          this.onUseSkill(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_SwitchGroup:
                          this.onSwitchGroup(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_SwitchSkill:
                          this.onSwitchSkill(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_AddBuff:
                          this.onAddBuff(skillTriger, behaviorInfo, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_ConditionAddBuff:
                          this.onAddBuff(skillTriger, conditionInfo, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_UseEffect:
                          this.onUseEffect(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_AddAttackNum:
                          this.onAddAttackNum(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_Dead:
                          this.onDead(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_Revive:
                          this.onRevive(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_BackJump:
                          this.onBackJump(skillTriger, behaviorInfo, argument, skillTriger.argumentTabs);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_Summon:
                          this.onSummon(skillTriger, behaviorInfo, argument, skillTriger.argumentTabs);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_AddSkill:
                          this.onAddSkill(skillTriger, behaviorInfo, argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_BuffClear:
                          this.onClearBuff(skillTriger, behaviorInfo, argument, skillTriger.Argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_ReplaceMonsterAnimation:
                          this.onReplaceMonsterAnimation(skillTriger, behaviorInfo, argument, skillTriger.Argument);
                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_ModifyLogicParameter:
                          console.log("修改逻辑计算参数");

                          if (parms) {
                            parms.baseNum += argument;
                          }

                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_ModifyLogicParameterRange:
                          console.log("修改逻辑计算参数,随机区间");

                          if (parms && skillTriger.Argument.length >= 2) {
                            parms.baseNum += (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
                              error: Error()
                            }), Random) : Random).getRandomInt(skillTriger.Argument[0], skillTriger.Argument[1] + 1);
                          }

                          break;

                        case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                          error: Error()
                        }), tab) : tab).Behavior.Behavior_BuffClearType:
                          this.onClearBuffType(skillTriger, behaviorInfo, argument, skillTriger.Argument);
                          break;
                      }
                    }
                  }
                }
              }
            }
          }
        }

        isTriggerCondition(absInfo, skillTriger, skill, parms) {
          if (skillTriger.Parameters.length == 0) {
            return true;
          }

          let bo;

          switch (skillTriger.TriggerCondition) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_AttackNum:
              return this.isParametersSucceedByAttackCount(absInfo, skillTriger);

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_HoldTime:
              bo = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
                error: Error()
              }), FightData) : FightData).time - absInfo.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
                error: Error()
              }), AbsObjInfoAttr) : AbsObjInfoAttr).holdTime) >= skillTriger.getHoldTime(absInfo.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_HoldTimePercent));

              if (bo) {
                absInfo.refreshHoldTime();
              }

              return bo;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_TimeInterval:
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_TimeRefresh:
              bo = skillTriger.checkTimeRefresh(skillTriger.Parameters[0]);

              if (bo) {
                skillTriger.clearTimeRefresh();
              }

              return bo;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_SkillId:
              if (absInfo.getNowSkill()) {
                return absInfo.getNowSkill().Id == skillTriger.Parameters[0];
              }

              return false;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_SkillGroup:
              return absInfo.normalGroup.Id == skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_HpLostPer:
              return parms && parms.lossHpPer > skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_Critical:
              //检测这个条件肯定达成
              SkillTriggerControl.print("会心触发器--");
              return true;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_HpPer:
              return absInfo.attrData.hpPercent < skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_HpRatio:
              return absInfo.attrData.hpPercent >= skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_CriticalPoint:
              //检测这个条件肯定达成
              SkillTriggerControl.print("暴击触发器--");
              return true;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_BeCriticalPoint:
              //检测这个条件肯定达成
              SkillTriggerControl.print("被暴击触发器--");
              return true;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_BeCritical:
              //检测这个条件肯定达成
              SkillTriggerControl.print("被会心触发器--");
              return true;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_RogueId:
              return skillTriger.Parameters.indexOf(parms.rogueId) >= 0;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_TotalHpLostPer:
              return this.isParametersSucceedByInfoAttr(absInfo, skillTriger, (_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
                error: Error()
              }), AbsObjInfoAttr) : AbsObjInfoAttr).totalLossHpPer, false);

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_EveryHpLostPer:
              return this.isParametersSucceedByInfoAttr(absInfo, skillTriger, (_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
                error: Error()
              }), AbsObjInfoAttr) : AbsObjInfoAttr).EverylHpLostPe);

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_Distance:
              return parms && parms.distance >= skillTriger.Parameters[0] * skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_BuffId:
              return parms && parms.buff && parms.buff.buffId == skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_BuffLayerNum:
              return absInfo.getBuffIdTotalCount(skillTriger.Parameters[0]) >= skillTriger.Parameters[1];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_WarnType:
              return parms && parms.warningType == skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_Level:
              return absInfo.getLevel() >= skillTriger.Parameters[0];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_CheckAttr:
              // 属性检测 
              return absInfo.attrData.getAttr(skillTriger.Parameters[0]) >= skillTriger.Parameters[1];

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).TriggerCondition.TriggerCondition_DetectionSkillId:
              return parms && parms.skillId == skillTriger.Parameters[0];
          }

          return true;
        }
        /** 根据攻击次数判定参数是否成功 */


        isParametersSucceedByAttackCount(absInfo, skillTrigger) {
          let bool = skillTrigger.isParametersSucceed(absInfo.normalGroup.triggerAttackCount);

          if (bool) {
            absInfo.normalGroup.clearTriggerAttackCount();
          }

          return bool;
        }
        /** 根据人物属性判定参数是否成功 */


        isParametersSucceedByInfoAttr(absInfo, skillTrigger, attrType, isClear = true) {
          SkillTriggerControl.print("isParametersSucceedByInfoAttr", attrType, absInfo.getObjAttr(attrType), skillTrigger.Parameters);
          let bool = skillTrigger.isParametersSucceed(absInfo.getObjAttr(attrType));

          if (bool && isClear) {
            absInfo.clearObjAttr(attrType);
          }

          return bool;
        }
        /** 使用技能 */


        onUseSkill(skillTriger, behaviorInfo, skillTab) {
          SkillTriggerControl.print("触发器-使用技能-成功", skillTriger, skillTab);
          let targetPos;

          if (behaviorInfo.isLeader && (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getClicking() && skillTab.HandEnemy) {
            targetPos = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getClickNodePos();
          }

          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.useSkillAndBullet(skillTab, behaviorInfo.abs, targetPos);
        }
        /** 切换技能 */


        onSwitchSkill(skillTriger, behaviorInfo, skillTab) {
          SkillTriggerControl.print("触发器-切换技能-成功", skillTriger, skillTab);
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.switchSkill(skillTab, behaviorInfo.abs);
        }
        /** 切换技能组 */


        onSwitchGroup(skillTriger, behaviorInfo, skillGroup) {
          SkillTriggerControl.print("触发器-切换技能组-成功", skillTriger, skillGroup);
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.switchSkillGroup(skillGroup, behaviorInfo.abs);
        }
        /** 增加Buff */


        onAddBuff(skillTriger, addRoleInfo, behaviorInfo, buffTab) {
          SkillTriggerControl.print("触发器-增加Buff-成功", skillTriger, buffTab);
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.addBuff(buffTab, addRoleInfo.abs.objId, behaviorInfo.abs);
        }
        /** 使用效果  */


        onUseEffect(skillTriger, behaviorInfo, effectTab) {
          SkillTriggerControl.print("触发器-使用效果-成功", skillTriger, effectTab);
          effectTab.random();
          (_crd && EffectControl === void 0 ? (_reportPossibleCrUseOfEffectControl({
            error: Error()
          }), EffectControl) : EffectControl).ins.addEffect(effectTab, behaviorInfo.abs, behaviorInfo.abs);
        }
        /** 增加攻击次数 */


        onAddAttackNum(skillTriger, behaviorInfo, count) {
          SkillTriggerControl.print("触发器-增加攻击次数-成功", skillTriger, count);
          behaviorInfo.addNormalAttackCount(count);
        }
        /** 死亡 */


        onDead(skillTriger, behaviorInfo, count) {
          SkillTriggerControl.print("触发器-死亡-成功", skillTriger, count);
          behaviorInfo.abs.onDead();
        }
        /** 复活 */


        onRevive(skillTriger, behaviorInfo, count) {
          SkillTriggerControl.print("触发器-复活-成功", skillTriger, count);
          behaviorInfo.abs.onRevive();
          behaviorInfo.attrData.hp = behaviorInfo.attrData.maxHp * ((count || (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
          behaviorInfo.abs.updateHP();
        }
        /** 后跳 */


        onBackJump(skillTriger, behaviorInfo, argument, argumentTabs) {
          SkillTriggerControl.print("触发器-后跳-成功", skillTriger, argument, argumentTabs);
          behaviorInfo.abs.setBackJump(skillTriger.Argument);
        }
        /** 召唤 */


        onSummon(skillTriger, behaviorInfo, argument, argumentTabs) {
          if (behaviorInfo.abs.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy) {
            SkillTriggerControl.print("触发器-召唤-成功", skillTriger, argument, argumentTabs);
            (_crd && MonsterControl === void 0 ? (_reportPossibleCrUseOfMonsterControl({
              error: Error()
            }), MonsterControl) : MonsterControl).ins.summon(behaviorInfo.abs, skillTriger.Argument);
          }
        }
        /** 添加技能 */


        onAddSkill(skillTriger, behaviorInfo, argument) {
          SkillTriggerControl.print("触发器-添加技能-成功", skillTriger, argument);
          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.addSkill(argument, behaviorInfo.abs);
        }
        /** 移除buff */


        onClearBuff(skillTriger, behaviorInfo, argument, argumentTabs) {
          SkillTriggerControl.print("触发器-移除buff-成功", skillTriger, argument, argumentTabs);
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.removeBuffs(argumentTabs, behaviorInfo.abs);
        }
        /**  清除buff类型  */


        onClearBuffType(skillTriger, behaviorInfo, argument, argumentTabs) {
          SkillTriggerControl.print("触发器-移除buff类型-成功", skillTriger, argument, argumentTabs);
          (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
            error: Error()
          }), BuffControl) : BuffControl).ins.removeBuffType(argument, behaviorInfo.abs);
        }
        /** 替换怪物动画为该怪物ID */


        onReplaceMonsterAnimation(skillTriger, behaviorInfo, argument, argumentTabs) {
          SkillTriggerControl.print("触发器-替换怪物动画为该怪物ID -成功", skillTriger, argument, argumentTabs);
          (_crd && MonsterControl === void 0 ? (_reportPossibleCrUseOfMonsterControl({
            error: Error()
          }), MonsterControl) : MonsterControl).ins.onReplaceMonsterAnimation(behaviorInfo.abs, argument);
        }

        static print(...args) {// console.log(...args)
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=efed448b145f37b97a4ae3dfc29eb238d0f5e4a6.js.map