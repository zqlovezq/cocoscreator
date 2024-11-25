System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, _dec, _class, _crd, ccclass, property, RecruitProProbabilityPop;

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

      _cclegacy._RF.push({}, "85e0dwp+YJCsY9H1fF7t0gT", "RecruitProProbabilityPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RecruitProProbabilityPop
       * zhudingchao
       * Tue Jul 23 2024 17:21:27 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/recruit/RecruitProProbabilityPop.ts
       *
       */

      _export("RecruitProProbabilityPop", RecruitProProbabilityPop = (_dec = ccclass('RecruitProProbabilityPop'), _dec(_class = class RecruitProProbabilityPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        register() {}

        onShow() {
          if (this.openData && this.openData["heroClass"]) {
            var heroClass = this.openData["heroClass"];
            var node = this.node.getChildByName("node" + heroClass);

            if (node) {
              node.active = true;
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9534d4eff53fb0e0c44564ce0537c8176e67dbac.js.map