System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, PowerBase, PowerTabFactory, _dec, _class, _crd, ccclass, property, BuffTab;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerBase(extras) {
    _reporterNs.report("PowerBase", "./PowerBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEffectTab(extras) {
    _reporterNs.report("EffectTab", "./EffectTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerTabFactory(extras) {
    _reporterNs.report("PowerTabFactory", "../PowerTabFactory", _context.meta, extras);
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
      PowerBase = _unresolved_3.PowerBase;
    }, function (_unresolved_4) {
      PowerTabFactory = _unresolved_4.PowerTabFactory;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "24714OSC4BE5aPIpdiUIfAw", "BuffTab", undefined);

      __checkObsolete__(['_decorator', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BuffTab", BuffTab = (_dec = ccclass('BuffTab'), _dec(_class = class BuffTab extends (_crd && PowerBase === void 0 ? (_reportPossibleCrUseOfPowerBase({
        error: Error()
      }), PowerBase) : PowerBase) {
        constructor(...args) {
          super(...args);
          this.powerType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PowerType.PowerType_BuffTable;
          this.configTab = void 0;
          //---------------------配置字段-------------------
          this.Id = void 0;
          // ID 
          this.BuffType = void 0;
          // buff类型 
          this.VFXID = void 0;
          // 特效id 
          this.Duration = void 0;
          // 持续时间 
          this.Effect = void 0;
          // 效果 
          this.TriggerTable = void 0;
          // 触发器 
          this.Trigger = void 0;
          // 持续时间内触发间隔 
          this.Addbuff = void 0;
          // 加buff 
          this.BuffGroup = void 0;
          // buff分组 
          this.Rule = void 0;
          // 叠加规则 
          this.CheckAttr = void 0;
          // 属性检测 
          this.Number = void 0;
          // 叠加数量 
          this.ClearType = void 0;
          // 清除buff的条件  
          this.NoOneMemory = void 0;
          // 非独立内存 
          //---------------------自有字段-------------------
          this.effectTabs = [];
          this.addBuffTabs = [];
          this.addBuffObjType = void 0;
        }

        setConfigId(id) {
          super.setConfigId(id);

          if (this.Id == null) {
            console.error("未找到buffid", id);
            return;
          } //效果配置


          for (let index = 0; index < this.Effect.length; index++) {
            if (this.skillPowers) {
              this.effectTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PowerType.PowerType_EffectTable, this.Effect[index]));
            } else {
              let data = (_crd && PowerTabFactory === void 0 ? (_reportPossibleCrUseOfPowerTabFactory({
                error: Error()
              }), PowerTabFactory) : PowerTabFactory).createType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PowerType.PowerType_EffectTable);
              data.setConfigId(this.Effect[index]);
              this.effectTabs.push(data);
            }
          }

          if (this.Addbuff) {
            this.addBuffObjType = this.Addbuff[0];

            for (let index = 1; index < this.Addbuff.length; index++) {
              const v = this.Addbuff[index];

              if (this.skillPowers) {
                this.addBuffTabs.push(this.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_BuffTable, this.Addbuff[index]));
              } else {
                let data = (_crd && PowerTabFactory === void 0 ? (_reportPossibleCrUseOfPowerTabFactory({
                  error: Error()
                }), PowerTabFactory) : PowerTabFactory).createType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).PowerType.PowerType_BuffTable);
                data.setConfigId(id);
                this.addBuffTabs.push(data);
              }
            }
          }
        }

        isBuffGroup(buffGroup) {
          return this.BuffGroup == buffGroup;
        }
        /** 是否检测属性 （主要针对生命变更） */


        isCheckAttr() {
          return this.CheckAttr.length > 0;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f2eb7b8322391c02f5de9cee15929654609b680.js.map