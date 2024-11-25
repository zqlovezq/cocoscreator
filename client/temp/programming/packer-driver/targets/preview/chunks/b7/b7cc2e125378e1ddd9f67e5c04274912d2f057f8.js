System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Random, PowerBase, FightData, FightMacro, _dec, _class, _crd, ccclass, property, Math_RATIO, SkillTriggerTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      Random = _unresolved_3.Random;
    }, function (_unresolved_4) {
      PowerBase = _unresolved_4.PowerBase;
    }, function (_unresolved_5) {
      FightData = _unresolved_5.FightData;
    }, function (_unresolved_6) {
      FightMacro = _unresolved_6.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "12acfSf+W9EaqrhmisU0Fb7", "SkillTriggerTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      Math_RATIO = 10000;

      _export("SkillTriggerTab", SkillTriggerTab = (_dec = ccclass('SkillTriggerTab'), _dec(_class = class SkillTriggerTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor() {
          super(...arguments);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_TriggerTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.Chance = void 0;
          // 概率 
          this.Triggertype = void 0;
          // 触发类型 
          this.TriggerNumber = void 0;
          // 触发次数 
          this.TriggerCd = void 0;
          // 触发CD 
          this.TriggerCondition = void 0;
          // 触发条件 
          this.Parameters = void 0;
          // 条件参数 
          this.Behavior = void 0;
          // 触发行为 
          this.Argument = void 0;
          // 行为参数 
          this.TriggerTarget = void 0;
          // 条件目标 
          this.TriggerGoal = void 0;
          // 行为目标 
          //---------------------自有字段-------------------
          this.argumentTabs = [];
          //已出发次数
          this.triggerCount = 0;

          /** 时间间隔 (触发器) */
          this.timeRefresh = void 0;

          /** CD时间 */
          this.cdTime = 0;
        }

        setConfigId(id) {
          super.setConfigId(id); //行为参数配置

          for (var index = 0; index < this.Behavior.length; index++) {
            var behavior = this.Behavior[index];
            var argument = this.Argument[index];

            switch (behavior) {
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_UseSkill:
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_SwitchSkill:
                this.argumentTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_SkillTable, argument));
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_SwitchGroup:
                this.argumentTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_SkillGroupTable, argument));
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_ConditionAddBuff:
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_AddBuff:
                this.argumentTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_BuffTable, argument));
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_UseEffect:
                this.argumentTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_EffectTable, argument));
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_AddAttackNum:
                this.argumentTabs.push(argument);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_BackJump:
                this.argumentTabs.push(argument);
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Behavior.Behavior_AddSkill:
                this.argumentTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_SkillTable, argument));
                break;

              default:
                this.argumentTabs.push(argument);
                break;
            }
          }
        }

        isType(type) {
          return this.Triggertype == type;
        }
        /** 触发参数 */


        getParameters() {
          return this.Parameters;
        }
        /** 触发器参数是否成功 */


        isParametersSucceed(parm) {
          if (this.Parameters.length == 0) {
            return true;
          }

          return parm >= (this.Parameters[0] || 0);
        }
        /** 触发器概率是否成功 */


        isTriggerChanceSucceed(count) {
          // 触发器
          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess((_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).CFromP(this.Chance) * count);
        }
        /** 是否可触发 */


        isCanTrigger() {
          if (this.TriggerNumber) {
            return this.TriggerNumber > this.triggerCount;
          }

          return true;
        }

        addTriggerCount() {
          this.triggerCount += 1;
          this.use();
        }

        clearTimeRefresh() {
          this.timeRefresh = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
        }

        checkTimeRefresh(num) {
          return (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time - this.timeRefresh >= num;
        }

        use() {
          this.cdTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
        }
        /** 是否在CD中 */


        isInCD() {
          if (this.TriggerCd) {
            return (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time - this.cdTime < this.TriggerCd;
          }

          return false;
        }

        getHoldTime(HoldTimePercent) {
          if (HoldTimePercent === void 0) {
            HoldTimePercent = 0;
          }

          return this.Parameters[0] * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT - HoldTimePercent) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b7cc2e125378e1ddd9f67e5c04274912d2f057f8.js.map