System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, MainLevelData, _crd, ccclass, property;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../../framework/base/IAbs", _context.meta, extras);
  }

  _export("MainLevelData", void 0);

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

      _cclegacy._RF.push({}, "58539HgUYBLh6nJbQG9nktX", "MainLevelData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 主线数据 */

      _export("MainLevelData", MainLevelData = class MainLevelData {
        static get ins() {
          if (null == this._instance) {
            this._instance = new MainLevelData();
          }

          return this._instance;
        }

        purge() {}

        adds(list) {}

      });

      MainLevelData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6bb2eb26dc81cfb92c77b38f3f6ed48cb12318dd.js.map