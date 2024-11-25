System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, FightMacro, FightAttrCalculate, _crd, ccclass, property, tmpData;

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../base/obj/role/AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "./FightAttrData", _context.meta, extras);
  }

  _export("FightAttrCalculate", void 0);

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
      FightMacro = _unresolved_3.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "374afdV0kFJlbqPzbDUV81Z", "FightAttrCalculate", undefined);

      __checkObsolete__(['_decorator', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      tmpData = {
        base: 0,
        parm1: 0,
        parm2: 0,
        parm3: 0,
        parm4: 0,
        result: 0,

        clear() {
          this.base = 0;
          this.parm1 = 0;
          this.parm2 = 0;
          this.parm3 = 0;
          this.parm4 = 0;
          this.result = 0;
        }

      };
      /** 战斗属性计算 */

      _export("FightAttrCalculate", FightAttrCalculate = class FightAttrCalculate {
        //-------------------角色属性计算， 攻击、防御、生命（最大血量）--------------

        /** 属性变更 */
        static attrChange(attrData, attrType, value) {
          if (this.isAttack(attrType)) {
            this.attack(attrData, attrType);
          } else if (this.isDefanse(attrType)) {
            this.defanse(attrData, attrType);
          } else if (this.isMaxHp(attrType)) {
            this.maxHp(attrData, attrType);
          }
        }

        static isAttack(attrType) {
          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer1 || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer2 || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer3) {
            return true;
          }

          return false;
        }
        /** 攻击 */


        static attack(attrData, attrType) {
          tmpData.clear();
          tmpData.base = attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Attack);
          tmpData.parm1 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer1);
          tmpData.parm2 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer2);
          tmpData.parm3 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DamagePer3);
          tmpData.result = tmpData.base * tmpData.parm1 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE * tmpData.parm2 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE * tmpData.parm3 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE;
          tmpData.result = Math.max(tmpData.result, 1);
          attrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalAttack, Math.floor(tmpData.result)); // console.log("计算: 攻击 原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
        }

        static isDefanse(attrType) {
          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer1 || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer2 || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer3) {
            return true;
          }

          return false;
        }
        /** 防御计算 */


        static defanse(attrData, attrType) {
          tmpData.clear();
          tmpData.base = attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Defence);
          tmpData.parm1 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer1);
          tmpData.parm2 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer2);
          tmpData.parm3 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_DefencePer3);
          tmpData.result = tmpData.base * tmpData.parm1 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE * tmpData.parm2 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE * tmpData.parm3 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE;
          tmpData.result = Math.max(tmpData.result, 0);
          attrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalDefence, Math.floor(tmpData.result)); // console.log("计算: 防御 原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
        }

        static isMaxHp(attrType) {
          if (attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer || attrType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer2) {
            return true;
          }

          return false;
        }
        /** 最大生命值计算 */


        static maxHp(attrData, attrType) {
          tmpData.clear();
          tmpData.base = attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_Hp);
          tmpData.parm1 = (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer) * ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT + attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_HpPer2)) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).PERCENT;
          tmpData.result = Math.max(tmpData.base * tmpData.parm1 / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).MAX_CHANCE, 0);
          attrData.setAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_TotalHp, Math.floor(tmpData.result)); // console.log("计算: HP  原因：", tab.AttrType[attrType], JSON.stringify(tmpData))
        } //-------------------子弹属性计算，子弹系数--------------

        /** 子弹系数 */


        static bulletCoefficient(attrData, attrType) {} //-------------------伤害计算--------------

        /** 伤害计算 */


        static damage(attackRole, defanseRole) {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e2402651f1cbef3d44d5f1a4de29053c644c7c99.js.map