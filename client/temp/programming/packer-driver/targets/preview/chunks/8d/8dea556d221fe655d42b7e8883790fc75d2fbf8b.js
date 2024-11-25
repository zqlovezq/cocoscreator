System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, FightAttrCalculate, FightMacro, FightAttrData, _crd, ccclass, property, PrdType;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrCalculate(extras) {
    _reporterNs.report("FightAttrCalculate", "./FightAttrCalculate", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  _export("FightAttrData", void 0);

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
      FightAttrCalculate = _unresolved_3.FightAttrCalculate;
    }, function (_unresolved_4) {
      FightMacro = _unresolved_4.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7345Et/5JEFJDLZN0L5o4A", "FightAttrData", undefined);

      __checkObsolete__(['_decorator', 'js', 'math']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PrdType", PrdType = /*#__PURE__*/function (PrdType) {
        PrdType[PrdType["CriticalEffect"] = -1] = "CriticalEffect";
        PrdType[PrdType["CriticalPerEffect"] = -2] = "CriticalPerEffect";
        return PrdType;
      }({}));
      /** 战斗角色属性数据 */


      _export("FightAttrData", FightAttrData = class FightAttrData {
        constructor() {
          this.level = 1;
          this.star = 1;

          /** 属性计算 */
          this.attr = new Map();

          /** 血量相关 */
          this._hp = 0;
          this._maxHp = 0;
          this._hpPercent = 0;
          this._shield = 0;
          this._shieldPercent = 0;
          this._maxShield = 0;
          this.isHpChange = false;
          this.prdCount = new Map();
          //属性变化回调
          this.cb = void 0;
          this.clear();
        }

        clear() {
          this.attr.clear();
          this._hp = 0;
          this._maxHp = 0;
          this._hpPercent = 0;
          this._shieldPercent = 0;
          this.isHpChange = false;
        }

        copy(newData) {
          for (var iterator of newData.attr) {
            this.attr.set(iterator[0], iterator[1]);
          }

          this._maxHp = newData.maxHp;
          this._hp = newData.hp;
          this._hpPercent = newData.hpPercent;
          this.isHpChange = newData.isHpChange;
          this._shieldPercent = newData._shieldPercent;
        }

        init() {
          this.fullHp();
        }

        changeCallback(_cb) {
          this.cb = _cb;
        }

        fullHp() {
          this.hp = this.maxHp;
        }

        getAttr(attrType) {
          return this.attr.get(attrType) || 0;
        }

        setAttr(attrType, value) {
          this.attr.set(attrType, value);
          (_crd && FightAttrCalculate === void 0 ? (_reportPossibleCrUseOfFightAttrCalculate({
            error: Error()
          }), FightAttrCalculate) : FightAttrCalculate).attrChange(this, attrType, value);

          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp) {
            this.maxHp = value;
          }

          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ShieldLimit) {
            this.changeMaxShield();
          } // if (attrType == tab.AttrType.AttrType_DamagePer1 && value < 0){
          //     console.warn("攻击百分比1 负数",value)
          // }


          this.cb && this.cb(attrType, value);
        }

        addAttr(attrType, value) {
          this.setAttr(attrType, this.getAttr(attrType) + value);
        }

        clearAttrByType(attrType) {
          this.setAttr(attrType, 0);
        } //---------------hp相关-------------------

        /** 血量 */


        get hp() {
          return this._hp;
        }
        /** 血量 */


        set hp(value) {
          if (this._hp == value) {
            return;
          }

          this._hp = value;
          this.isHpChange = true;
        }
        /** 最大血量 */


        get maxHp() {
          return this._maxHp;
        }
        /** 最大血量 */


        set maxHp(value) {
          if (this._maxHp == value) {
            return;
          }

          this._maxHp = value;
          this.hp = Math.min(this.hp, this.maxHp);
          this.isHpChange = true;
          this.changeMaxShield();
        }
        /** 血量万分比 */


        get hpPercent() {
          if (this.isHpChange) {
            this._hpPercent = Math.floor(this.hp / this.maxHp * (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT);
            this.isHpChange = false;
          }

          return this._hpPercent;
        }
        /** 护盾 */


        get shield() {
          return this._shield;
        }
        /** 护盾 */


        set shield(value) {
          if (this._shield == value) {
            return;
          }

          this._shield = value;
          this.changeShield();
        }
        /** 最大护盾 */


        get maxShield() {
          return this._maxShield;
        }

        set maxShield(value) {
          this._maxShield = value;
        }

        changeMaxShield() {
          this._maxShield = Math.floor(this.maxHp * (((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().ShieldLimit + this.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_ShieldLimit)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT));
          this.changeShield();
        }

        get shieldPercent() {
          return this._shieldPercent;
        }

        set shieldPercent(value) {
          this._shieldPercent = value;
        }

        changeShield() {
          this._shield = Math.max(Math.min(this._shield, this.maxShield), 0);
          this.shieldPercent = Math.floor(this._shield / this.maxShield * (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT);
        }
        /** 血盾百分比 */


        getHpShieldPercent() {
          return this.hpPercent + this.shieldPercent;
        }

        toStrong() {// console.log("属性",
          //     js.formatStr("等级:", this.level),
          //     js.formatStr("星级:", this.star),
          //     js.formatStr("血量:", this.hp),
          //     js.formatStr("最大血量:", this.maxHp),
          //     js.formatStr("血量百分比:", this.hpPercent),
          //     js.formatStr("属性:", Array.from(this.attr.entries()).map(([key, value]) => `${tab.AttrType[key]}: ${value}`).join(', ')),
          // )
        }

        getPrdCount(_type) {
          return this.prdCount.get(_type) || 1;
        }

        addPrdCount(_type) {
          if (!this.prdCount.has(_type)) {
            this.prdCount.set(_type, 1);
          }

          this.prdCount.set(_type, this.prdCount.get(_type) + 1);
        }

        clearPrdCount(_type) {
          this.prdCount.set(_type, 1);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8dea556d221fe655d42b7e8883790fc75d2fbf8b.js.map