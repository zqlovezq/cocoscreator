System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, Func, _dec, _class, _crd, ccclass, property, PowerBase;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillPowers(extras) {
    _reporterNs.report("SkillPowers", "../SkillPowers", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
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
      Func = _unresolved_3.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ba9377a3MNAeJ5MZTN3MeLU", "PowerBase", undefined);

      __checkObsolete__(['_decorator', 'Component', 'js']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PowerBase", PowerBase = (_dec = ccclass('PowerBase'), _dec(_class = class PowerBase {
        //增强存储
        constructor() {
          this.configId = 0;
          this.powerType = void 0;
          this.skillPowers = void 0;
        }

        setParentPowers(powers) {
          this.skillPowers = powers;
        }

        insertParent() {
          if (this.skillPowers) {
            this.skillPowers.insertItem(this);
          }
        }

        setConfigId(id) {
          this.configId = id;
          var tmpTab;

          switch (this.powerType) {
            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillGroupTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().SkillGroupTableById.getValue(id);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_SkillTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().SkillTableById.getValue(id);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BuffTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BuffTableById.getValue(id);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_EffectTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().EffectTableById.getValue(id);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().BulletTableById.getValue(id);
              break;

            case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_TriggerTable:
              tmpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().TriggerTableById.getValue(id);
              break;
          }

          if (tmpTab) {
            this.copyTab(tmpTab);
            this.insertParent();
          } else {
            if (id) {
              console.error("powerBase configId is null 找策划--", (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).PowerType[this.powerType], id);
            }
          }
        }

        copyTab(tmpTab) {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).copyTab(tmpTab, this);
        }

        addPower(power) {
          var powerKey = power.PowerMent;

          if (this.isKey(powerKey)) {
            for (var index = 0; index < power.PowerValue.length; index++) {
              var v = power.PowerValue[index];
              this.addPowerValue(powerKey, v, index);
            }
          }
        }

        addPowerValue(powerKey, powerValue, index) {
          // console.log(powerKey, this.getValue(powerKey), typeof (this.getValue(powerKey)))
          if (typeof this.getValue(powerKey) == 'number') {
            this[powerKey] += powerValue;
          } else {
            if (this[powerKey][index] == null) {
              //自身数组不足补0
              this[powerKey][index] = 0;
            }

            this[powerKey][index] += powerValue;
          }
        }

        isKey(key) {
          return Object.prototype.hasOwnProperty.call(this, key);
        }

        getValue(key) {
          return this[key];
        }

        copy() {
          var newBase = new this.constructor();
          PowerBase.copyTab(this, newBase);
          return newBase;
        }

        static copyTab(_obj, toObj) {
          for (var key in _obj) {
            if (_obj.hasOwnProperty(key) && key != "skillPowers") {
              if (typeof _obj[key] == "object") {
                if (_obj[key] instanceof PowerBase) {
                  if (toObj[key] == null) {
                    toObj[key] = _obj[key].copy();
                  }
                } else {
                  if (Array.isArray(_obj[key])) {
                    if (toObj[key] == null) {
                      toObj[key] = [];
                    }
                  } else {
                    toObj[key] = {};
                  }

                  PowerBase.copyTab(_obj[key], toObj[key]);
                }
              } else {
                toObj[key] = _obj[key];
              }
            }
          }

          return toObj;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=08b48889dac71ae237ffa0e4bc97b6690da6e7a7.js.map