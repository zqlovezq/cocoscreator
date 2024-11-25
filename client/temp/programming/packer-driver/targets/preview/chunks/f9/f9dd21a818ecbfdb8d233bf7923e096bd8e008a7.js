System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Color, Vec3, _decorator, tab, Func, FightMacro, DamageData, _crd, ccclass, property, CriticalColor, CriticalPointColor, TearColor, HealColor, PerSubHealColor, DamageSource, DamageColorType;

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../power/powerTab/BuffTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  _export("DamageData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Color = _cc.Color;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      FightMacro = _unresolved_4.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ae0394ag0JH9YM48XpRipy7", "DamageData", undefined);

      __checkObsolete__(['Color', 'Vec3', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      CriticalColor = Color.BLUE; //会心

      CriticalPointColor = Color.YELLOW; //暴击、会心并暴击

      TearColor = Color.RED; //撕裂

      HealColor = Color.GREEN; //治疗、百分比治疗

      PerSubHealColor = Color.RED; //百分比掉血

      _export("DamageSource", DamageSource = /*#__PURE__*/function (DamageSource) {
        DamageSource[DamageSource["bullet"] = 1] = "bullet";
        DamageSource[DamageSource["buff"] = 2] = "buff";
        return DamageSource;
      }({}));

      _export("DamageColorType", DamageColorType = /*#__PURE__*/function (DamageColorType) {
        DamageColorType[DamageColorType["white"] = 0] = "white";
        DamageColorType[DamageColorType["yellow"] = 1] = "yellow";
        DamageColorType[DamageColorType["blue"] = 2] = "blue";
        DamageColorType[DamageColorType["green"] = 3] = "green";
        DamageColorType[DamageColorType["red"] = 4] = "red";
        return DamageColorType;
      }({}));
      /** 伤害数据 */


      _export("DamageData", DamageData = class DamageData {
        static splitConfig() {
          if (DamageData.colors[0]) {
            return;
          }

          var list = [DamageColorType.white, DamageColorType.yellow, DamageColorType.blue, DamageColorType.green, DamageColorType.red];

          for (var index = 0; index < list.length; index++) {
            var v = list[index];
            var strs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GetKeyValue_ConfigTable()["FightDamageColor_" + v];
            DamageData.colors[v] = {
              path: strs[0],
              offsetx: (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).checkInt(strs[1]),
              size: (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
                error: Error()
              }), Func) : Func).checkInt(strs[2])
            };
          }
        }

        static get() {
          var owner;

          if (this.pool.length > 0) {
            owner = this.pool.pop();
          } else {
            owner = new DamageData();
          }

          return owner;
        }

        static put(obj) {
          obj.reset();
          this.pool.push(obj);
        }

        static destroy() {
          this.pool.length = 0;
        }

        static copy(data) {
          var dd = DamageData.get();
          dd.isCritical = data.isCritical;
          dd.isCriticalPoint = data.isCriticalPoint;
          dd.isTear = data.isTear;
          dd.isHeal = data.isHeal;
          dd.isHealPer = data.isHealPer;
          dd.isPerSubHeal = data.isPerSubHeal;
          dd.isShield = data.isShield;
          dd.damage = data.damage;
          dd.source = data.source;
          dd.isSelfDamage = data.isSelfDamage;
          dd.sourceObjId = data.sourceObjId;
          return dd;
        }

        constructor() {
          this.isCritical = void 0;
          //是否会心
          this.isCriticalPoint = void 0;
          //是否暴击
          this.isTear = void 0;
          //是否撕裂
          this.isHeal = void 0;
          //是否治疗
          this.isHealPer = void 0;
          //是否百分比治疗
          this.isPerSubHeal = void 0;
          //是否百分比掉血
          this.isShield = void 0;
          //是否为护盾
          this.isTransferDamage = void 0;
          //是否为链接伤害
          this.source = void 0;
          this.isSelfDamage = false;
          //是否为自损
          this.sourceObjId = 0;
          this.addBuffTab = void 0;
          //计算伤害时， 增加buff, 目前只做了眩晕
          this.damage = void 0;
          this.pos = void 0;
          this.frameIndex = void 0;
          this.pos = new Vec3();
        }

        reset() {
          this.isCritical = false;
          this.isCriticalPoint = false;
          this.isTear = false;
          this.isHeal = false;
          this.isHealPer = false;
          this.isPerSubHeal = false;
          this.isShield = false;
          this.isTransferDamage = false;
          this.damage = 0;
          this.frameIndex = 0;
          this.isSelfDamage = false;
          this.addBuffTab = null;
          this.sourceObjId = 0;

          if (this.pos) {
            this.pos.set(Vec3.ZERO);
          }
        }

        recycle() {
          DamageData.put(this);
        }
        /** 是否为伤害 */


        isDamage() {
          if (this.isHeal || this.isHealPer || this.isShield) {
            return false;
          }

          return true;
        }

        getShowStr() {
          return (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).damageStr(this.damage);
        }

        getColor() {
          var colorType = DamageColorType.white;

          if (this.isCritical && this.isCriticalPoint || this.isCriticalPoint) {
            colorType = DamageColorType.yellow;
          } else if (this.isCritical) {
            colorType = DamageColorType.blue;
          } else if (this.isHeal || this.isHealPer) {
            colorType = DamageColorType.green;
          } else if (this.isTear || this.isPerSubHeal) {
            colorType = DamageColorType.red;
          } else if (this.isPerSubHeal) {}

          return DamageData.colors[colorType];
        }

      });

      DamageData.pool = [];
      DamageData.colors = {};

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f9dd21a818ecbfdb8d233bf7923e096bd8e008a7.js.map