System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, _dec, _class, _crd, ccclass, property, CheckRoleInfoReportPop;

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

      _cclegacy._RF.push({}, "4bd5clZWeRHs4opxoh9rYUS", "CheckRoleInfoReportPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CheckRoleInfoReportPop", CheckRoleInfoReportPop = (_dec = ccclass('CheckRoleInfoReportPop'), _dec(_class = class CheckRoleInfoReportPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);
          this._playerId = "";
        }

        onShow() {
          this._playerId = this.openData.id;
          console.log("cocos report friend id=" + this._playerId);
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2e133fb5ab7741c56164103fceb27dce62d5cad2.js.map