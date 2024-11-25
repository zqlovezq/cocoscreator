System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsMgr, _dec, _class, _class2, _crd, ccclass, property, PlatformMgr;

  function _reportPossibleCrUseOfAbsMgr(extras) {
    _reporterNs.report("AbsMgr", "../../framework/base/IAbs", _context.meta, extras);
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
      AbsMgr = _unresolved_2.AbsMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "edfecXOrsRI0ZiowE3c4tNi", "PlatformMgr", undefined);

      __checkObsolete__(['_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PlatformMgr 平台管理类 处理sdk接口
       * zhudingchao
       * Fri Jun 28 2024 10:13:42 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/mgr/PlatformMgr.ts
       *
       */

      _export("PlatformMgr", PlatformMgr = (_dec = ccclass('PlatformMgr'), _dec(_class = (_class2 = class PlatformMgr extends (_crd && AbsMgr === void 0 ? (_reportPossibleCrUseOfAbsMgr({
        error: Error()
      }), AbsMgr) : AbsMgr) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new PlatformMgr();
          }

          return this._instance;
        }

        init() {}

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fd93e81e13fbbe7d929b4726bcab6fcf478c1c23.js.map