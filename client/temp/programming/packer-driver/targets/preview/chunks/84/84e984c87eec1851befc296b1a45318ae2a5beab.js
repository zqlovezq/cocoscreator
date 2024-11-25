System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, EventMgr, AbsControl, AbsMgr, AbsData, _crd;

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../logic/mgr/EventMgr", _context.meta, extras);
  }

  _export({
    AbsControl: void 0,
    AbsMgr: void 0,
    AbsData: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      EventMgr = _unresolved_2.EventMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0a215k18xlBDY2GcaN55zCf", "IAbs", undefined);

      /** 控制器、消息接受 */
      _export("AbsControl", AbsControl = class AbsControl {
        purge() {
          throw new Error("Method not implemented.");
        }

        init() {
          this.unRegister();
          this.register();
        }

        register() {
          throw new Error("Method not implemented.");
        }

        unRegister() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }

      });

      _export("AbsMgr", AbsMgr = class AbsMgr {});

      _export("AbsData", AbsData = class AbsData {
        purge() {
          throw new Error("Method not implemented.");
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=84e984c87eec1851befc296b1a45318ae2a5beab.js.map