System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, _dec, _class, _class2, _crd, ccclass, property, PatrolDataMgr;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
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
      AbsControl = _unresolved_2.AbsControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8997byTYHNOBZXR/HuS2FmR", "PatrolDataMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("PatrolDataMgr", PatrolDataMgr = (_dec = ccclass('PatrolDataMgr'), _dec(_class = (_class2 = class PatrolDataMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.startPatrolData = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PatrolDataMgr();
          }

          return this._instance;
        }

        initData(msg) {
          this.startPatrolData = msg;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2a3ef259825761ee752f52660bb105bb2a553096.js.map