System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, tab, BuffControl, AbsOwner, EffectControl, FightMacro, FightData, Buff, _crd, tempPos, infinite_num;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "./BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsOwner(extras) {
    _reporterNs.report("AbsOwner", "../obj/AbsOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectControl(extras) {
    _reporterNs.report("EffectControl", "../effect/EffectControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../data/FightData", _context.meta, extras);
  }

  _export("Buff", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      BuffControl = _unresolved_3.BuffControl;
    }, function (_unresolved_4) {
      AbsOwner = _unresolved_4.AbsOwner;
    }, function (_unresolved_5) {
      EffectControl = _unresolved_5.EffectControl;
    }, function (_unresolved_6) {
      FightMacro = _unresolved_6.FightMacro;
    }, function (_unresolved_7) {
      FightData = _unresolved_7.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb648Jv1MBIm7NnMXxdtPRk", "Buff", undefined);

      __checkObsolete__(['Vec3', 'View', 'game', 'size', 'v2', 'view']);

      tempPos = new Vec3();
      infinite_num = -1;

      _export("Buff", Buff = class Buff {
        constructor() {
          this.soleId = 0;

          /** 添加者（来源） */
          this.addOwner = void 0;

          /** 拥有者 */
          this.owner = void 0;
          this.lifeTime = 0;
          this.passTime = 0;

          /** 触发间隔 */
          this.triggerTime = 0;

          /** 叠加数量 */
          this.ruleNumber = 0;

          /** 损失血量百分比 */
          this.lossHpPer = 0;
          this._valid = false;
          this.buffId = 0;
          this.configTab = void 0;
          this.lockParm = void 0;
          this.addTime = 0;
        }

        static get() {
          var buff = Buff.pools.pop();

          if (buff == null) {
            buff = new Buff();
          }

          return buff;
        }

        static put(buff) {
          buff.reset();
          Buff.pools.push(buff);
        }

        recycle() {
          Buff.put(this);
        }

        reset() {
          if (this.owner) {
            this.owner.recycle();
            this.owner = null;
          }

          if (this.addOwner) {
            this.addOwner.recycle();
            this.addOwner = null;
          }

          if (this.lockParm) {
            this.lockParm.recycle();
            this.lockParm = null;
          }

          this.buffId = 0;
          this._valid = false;
          this.passTime = 0;
          this.configTab = null;
          this.ruleNumber = 0;
          this.lifeTime = 0;
          this.soleId = 0;
          this.triggerTime = 0;
          this.addTime = 0;
        }

        setBuffTab(_tab) {
          this.addTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          this.buffId = _tab.Id;

          if (_tab.NoOneMemory) {
            this.configTab = _tab;
          } else {
            this.configTab = _tab.copy();
          }

          for (var index = 0; index < this.configTab.effectTabs.length; index++) {
            var effectTab = this.configTab.effectTabs[index];
            effectTab.random();
          }
        }

        init() {
          this._valid = true;
          this.lifeTime = this.configTab.Duration;
        }

        addObjId(objId) {
          this.addOwner = (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
            error: Error()
          }), AbsOwner) : AbsOwner).get(objId);
          this.addOwner.lockAttr();
        }

        setObjId(objId) {
          this.owner = (_crd && AbsOwner === void 0 ? (_reportPossibleCrUseOfAbsOwner({
            error: Error()
          }), AbsOwner) : AbsOwner).get(objId);
        }

        isValid() {
          return this._valid;
        }

        updateFrame(dt) {
          if (!this._valid) {
            return;
          }

          this.passTime = this.passTime + dt;

          if (this.lifeTime != infinite_num && this.passTime >= this.lifeTime) {
            this.onTimeComplete();
            return;
          }

          if (this.configTab.Trigger) {
            this.triggerTime += dt;
            this.checkTriggerTime();
          }
        }

        onTimeComplete() {
          this._valid = false;
        }

        checkTriggerTime() {
          if (this.triggerTime >= this.configTab.Trigger) {
            this.triggerTime = this.triggerTime - this.configTab.Trigger;
            this.onTrigger();
          }
        }

        onTrigger() {
          if (this.configTab.Trigger && this.configTab.Effect) {
            (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
              error: Error()
            }), BuffControl) : BuffControl).ins.onTriggerEffect(this);
          }
        }
        /** 是否可以叠加 */


        isCanRule() {
          if (this.configTab.Number == 0) {
            return true;
          }

          return this.configTab.Number > this.ruleNumber;
        }
        /** 是否清除类型 */


        isClearByType(clearType) {
          return this.configTab.ClearType.indexOf(clearType) >= 0;
        }
        /** 是否buff类型 */


        isBuffType(buffType) {
          return this.configTab.BuffType == buffType;
        }
        /** 叠加一层 */


        addRuleNumber(isAddAttr) {
          if (this.configTab.isCheckAttr()) {
            this.checkAttr();
            return;
          }

          this.ruleNumber += 1;

          if (isAddAttr) {
            this.addAttr();
          }
        }

        disposeRule() {
          //叠加规则
          switch (this.configTab.Rule) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Rule.Rule_TimeNoneEffectNone:
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Rule.Rule_TimeRefreshEffectNone:
              // 时间重置，效果不变 
              this.lifeTime = this.configTab.Duration;
              this.passTime = 0;
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Rule.Rule_TimeRefreshEffectadd:
              // 时间重置，效果叠加 
              this.lifeTime = this.configTab.Duration;
              this.passTime = 0;
              this.addAttr();
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Rule.Rule_TimeAddEffectNone:
              // 时间叠加，效果不变 
              this.lifeTime += this.configTab.Duration;
              break;
          }
        }

        checkAttr(_lossHpPer) {
          if (_lossHpPer === void 0) {
            _lossHpPer = 0;
          }

          if (!this.configTab.isCheckAttr()) {
            return;
          }

          var lastNum = this.ruleNumber; //当前层
          //在条件计算最新层

          if (this.configTab.CheckAttr[0] == 1) {
            //每损失多少生命值
            this.ruleNumber = Math.min(Math.floor(((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT - this.owner.getAttrData().hpPercent) / this.configTab.CheckAttr[1]), this.configTab.Number);
          } else if (this.configTab.CheckAttr[0] == 2) {
            //生命高于多少值
            this.ruleNumber = this.owner.getAttrData().hpPercent > this.configTab.CheckAttr[1] ? 1 : 0;
          } else if (this.configTab.CheckAttr[0] == 3) {
            //护盾>0
            this.ruleNumber = this.owner.getAttrData().shield >= this.configTab.CheckAttr[1] ? 1 : 0;
          } else if (this.configTab.CheckAttr[0] == 4) {
            //护盾==0
            this.ruleNumber = this.owner.getAttrData().shield == this.configTab.CheckAttr[1] ? 1 : 0;
          } else if (this.configTab.CheckAttr[0] == 5) {
            //每累计损失生命值
            this.lossHpPer += _lossHpPer;

            if (this.lossHpPer >= this.configTab.CheckAttr[1]) {
              this.lossHpPer -= this.configTab.CheckAttr[1];
              (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
                error: Error()
              }), BuffControl) : BuffControl).ins.onTriggerEffect(this);
            }

            return;
          } else if (this.configTab.CheckAttr[0] == 6) {
            //生命低于多少值
            this.ruleNumber = this.owner.getAttrData().hpPercent < this.configTab.CheckAttr[1] ? 1 : 0;
          } //变更层


          this.attrChange(lastNum);
        }

        attrChange(lastRule) {
          var diff = this.ruleNumber - lastRule;

          if (diff == 0) {
            return;
          }

          for (var index = 0; index < Math.abs(diff); index++) {
            if (diff > 0) {
              this.addAttr();
            } else {
              this.removeOneAttr();
            }
          }
        }
        /** 添加属性 */


        addAttr() {
          if (this.ruleNumber == 0) {
            return;
          }

          for (var index = 0; index < this.configTab.effectTabs.length; index++) {
            var effectTab = this.configTab.effectTabs[index];
            (_crd && EffectControl === void 0 ? (_reportPossibleCrUseOfEffectControl({
              error: Error()
            }), EffectControl) : EffectControl).ins.addEffect(effectTab, null, this.owner.abs);
          }
        }
        /** 移除属性 */


        removeAttr() {
          var removeCount = 1; //叠加规则

          switch (this.configTab.Rule) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Rule.Rule_TimeRefreshEffectadd:
              // 时间重置，效果叠加 
              removeCount = this.ruleNumber;
              break;
          }

          if (this.configTab.isCheckAttr()) {
            removeCount = this.ruleNumber;
          } //移除效果


          for (var index = 0; index < removeCount; index++) {
            this.removeOneAttr();
          }
        } //移除1层效果


        removeOneAttr() {
          for (var index = 0; index < this.configTab.effectTabs.length; index++) {
            var effectTab = this.configTab.effectTabs[index];
            (_crd && EffectControl === void 0 ? (_reportPossibleCrUseOfEffectControl({
              error: Error()
            }), EffectControl) : EffectControl).ins.removeEffect(effectTab, this.owner.abs);
          }
        }

      });

      Buff.pools = [];

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0a0c4fe02fe93d887fea80159693a7bae946a32c.js.map