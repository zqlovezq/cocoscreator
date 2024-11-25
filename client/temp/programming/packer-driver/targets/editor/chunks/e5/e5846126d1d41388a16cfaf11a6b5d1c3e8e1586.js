System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, FightHeroInfo, _crd, ccclass, property;

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../../model/hero/HeroInfo", _context.meta, extras);
  }

  _export("FightHeroInfo", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3517cIHPTtGCbA40AtBKcfD", "FightHeroInfo", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 战斗角色数据 */

      _export("FightHeroInfo", FightHeroInfo = class FightHeroInfo {
        constructor() {
          this.heroInfo = void 0;
          this.level = 0;
          this.intoIndex = 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e5846126d1d41388a16cfaf11a6b5d1c3e8e1586.js.map