System.register(["__unresolved_0", "cc", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, _dec, _class, _crd, ccclass, property, RareBookContainerInfo;

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
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "829b9x0oe5KwoLkGL1SQoEd", "RareBookContainerInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookContainerInfo
       * zhudingchao
       * Tue May 28 2024 20:02:01 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookContainerInfo.ts
       *
       */

      _export("RareBookContainerInfo", RareBookContainerInfo = (_dec = ccclass('RareBookContainerInfo'), _dec(_class = class RareBookContainerInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).BookContainerData {
        start() {}

        update(deltaTime) {}

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9493b910b4f71fc8e7f33ddc8909a5d87f8629a5.js.map