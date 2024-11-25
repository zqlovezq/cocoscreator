System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, _dec, _class, _crd, ccclass, property, RareBookSrProbabilityPop;

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
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
      ViewPop = _unresolved_2.ViewPop;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1e7ab7pf21GSoTAiQWUCblY", "RareBookSrProbabilityPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookSrProbabilityPop
       * zhudingchao
       * Wed Jul 24 2024 10:05:19 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookSrProbabilityPop.ts
       *
       */

      _export("RareBookSrProbabilityPop", RareBookSrProbabilityPop = (_dec = ccclass('RareBookSrProbabilityPop'), _dec(_class = class RareBookSrProbabilityPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        register() {}

        onShow() {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=07b3442332dae7ea7ecbc511413aeb9afdea464b.js.map