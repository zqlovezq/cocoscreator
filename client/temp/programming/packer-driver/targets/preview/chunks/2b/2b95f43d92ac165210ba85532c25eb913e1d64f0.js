System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Random, PowerBase, FightData, FightMacro, _dec, _class, _crd, ccclass, property, Math_RATIO, SkillTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../util/Random", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTriggerTab(extras) {
    _reporterNs.report("SkillTriggerTab", "./SkillTriggerTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "./BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "./EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "./BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../../data/FightAttrData", _context.meta, extras);
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

      _cclegacy._RF.push({}, "339afewi0lKKo8qDu/9VrEu", "SkillTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);
      Math_RATIO = 10000;

      _export("SkillTab", SkillTab = (_dec = ccclass('SkillTab'), _dec(_class = class SkillTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor() {
          super(...arguments);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_SkillTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.SkillType = void 0;
          // 技能类型 
          this.Priority = void 0;
          // 发动优先级 
          this.Trigger = void 0;
          // 触发器 
          this.ActionPriority = void 0;
          // 动作优先级 
          this.ActionID = void 0;
          // 动作ID 
          this.Expend = void 0;
          // 出手消耗 
          this.SkillEnhanceIds = void 0;
          // 技能增强 
          this.Effect = void 0;
          // 效果 
          this.EffectUnit = void 0;
          // 作用目标 
          this.SearchEnemy = void 0;
          // 作用规则 
          this.SearchNum = void 0;
          // 作用数量 
          this.AddBuff = void 0;
          // 加buff 
          this.AddBuffChance = void 0;
          // buff触发概率 
          this.CoolTime = void 0;
          // 冷却时间 
          this.SkillConflict = void 0;
          // 技能互斥 
          this.BulletTime = void 0;
          // 子弹发射时间 
          this.RunningShot = void 0;
          // 连射 
          this.Bullet = void 0;
          // 子弹ID 
          this.RunningShotBullet = void 0;
          // 连射子弹 
          this.HandEnemy = void 0;
          // 手动目标 
          this.RunningShotBulletType = void 0;
          // 连射类型 
          //---------------------自有字段-------------------
          this.isPower = false;
          //是否已处理增强
          this.bulletTab = void 0;
          this.runningShotBulletTab = void 0;
          this.triggerTabs = [];
          this.effectTabs = [];
          this.addBuffTabs = [];
          this.isActionSkill = false;
          //是否为招式技能
          this.cdTime = void 0;
          this.isFirstCd = true;
        }

        //初始CD中
        setConfigId(id) {
          super.setConfigId(id); //子弹配置

          if (this.Bullet) {
            this.bulletTab = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, this.Bullet);
          } //连射子弹


          if (this.RunningShotBullet) {
            this.runningShotBulletTab = this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, this.RunningShotBullet);
          } //效果配置


          for (var index = 0; index < this.Effect.length; index++) {
            this.effectTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable, this.Effect[index]));
          } //buff配置


          for (var _index = 0; _index < this.AddBuff.length; _index++) {
            this.addBuffTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable, this.AddBuff[_index]));
          } //触发器配置


          for (var _index2 = 0; _index2 < this.Trigger.length; _index2++) {
            this.triggerTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_TriggerTable, this.Trigger[_index2]));
          }
        }
        /** 是否为普通攻击 */


        isNormalAttack() {
          return this.SkillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_NormalAttack;
        }
        /** 被动技能  */


        isPassiveSkill() {
          return this.SkillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_PassiveSkill;
        }
        /** 时间释放技能  */


        isTimePush() {
          return this.SkillType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_TimePush;
        }

        isTrigger(type) {
          if (this.triggerTabs.length) {
            for (var index = 0; index < this.triggerTabs.length; index++) {
              var element = this.triggerTabs[index];

              if (element.isCanTrigger() && element.isType(type)) {
                return true;
              }
            }
          }

          return false;
        }
        /** 是否连射 */


        isRunningShotSuccess(addRate) {
          var rate = addRate + this.RunningShot[2];
          return (_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
            error: Error()
          }), Random) : Random).isSuccess(rate);
        }

        isHasBuff() {
          return this.addBuffTabs.length > 0;
        }

        isHasTrigger() {
          return this.triggerTabs.length > 0;
        }

        initCd() {
          this.isFirstCd = true;
          this.cdTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;

          for (var index = 0; index < this.triggerTabs.length; index++) {
            var v = this.triggerTabs[index];
            v.clearTimeRefresh();
          }
        }

        use() {
          this.isFirstCd = false;
          this.cdTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
        }
        /** 是否在CD中 */


        isInCD(attrData) {
          if (this.CoolTime.length) {
            var tmpCdTime = this.CoolTime[1];

            if (this.isFirstCd) {
              tmpCdTime = this.CoolTime[0];
            }

            if (attrData) {
              tmpCdTime = tmpCdTime / (1 + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AttrType.AttrType_AttackSpeed) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
                error: Error()
              }), FightMacro) : FightMacro).PERCENT);
            }

            return (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time - this.cdTime < tmpCdTime;
          }

          return false;
        }
        /** 是否为连射 */


        isRunningShot() {
          return this.RunningShot.length > 0 && this.RunningShot[1] > 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2b95f43d92ac165210ba85532c25eb913e1d64f0.js.map