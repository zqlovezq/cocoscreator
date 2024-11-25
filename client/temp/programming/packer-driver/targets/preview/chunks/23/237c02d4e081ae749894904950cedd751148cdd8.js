System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, MainLevelControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  _export("MainLevelControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0653dgtR1hEmrgtiYpWKAz8", "MainLevelControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 主线 */

      _export("MainLevelControl", MainLevelControl = class MainLevelControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new MainLevelControl();
          }

          return this._instance;
        }

        register() {} //----------------处理回调---------------------


      });

      MainLevelControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=237c02d4e081ae749894904950cedd751148cdd8.js.map