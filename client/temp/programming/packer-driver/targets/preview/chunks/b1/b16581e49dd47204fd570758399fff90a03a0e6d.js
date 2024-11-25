System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, FightAttrData, PvpAttrData, _crd, ccclass, property;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightAttrData(extras) {
    _reporterNs.report("FightAttrData", "../data/FightAttrData", _context.meta, extras);
  }

  _export("PvpAttrData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      FightAttrData = _unresolved_2.FightAttrData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d75bfGnWhtLnp3APa1t2MN7", "PvpAttrData", undefined);

      __checkObsolete__(['_decorator', 'js', 'math']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗角色属性数据 */

      _export("PvpAttrData", PvpAttrData = class PvpAttrData extends (_crd && FightAttrData === void 0 ? (_reportPossibleCrUseOfFightAttrData({
        error: Error()
      }), FightAttrData) : FightAttrData) {
        setData(updateHP) {
          this.hp = updateHP.hp;
          this.maxHp = updateHP.maxHp;
          this.shield = updateHP.sheild;
          this.maxShield = updateHP.maxShield;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b16581e49dd47204fd570758399fff90a03a0e6d.js.map