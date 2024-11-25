System.register(["__unresolved_0", "cc", "client_protocol"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, _dec, _class, _crd, ccclass, property, EquipSlotInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "./EquipInfo", _context.meta, extras);
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

      _cclegacy._RF.push({}, "b23aeJTMh1GmYjOiyBRaQtj", "EquipSlotInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("EquipSlotInfo", EquipSlotInfo = (_dec = ccclass('EquipSlotInfo'), _dec(_class = class EquipSlotInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).EquipSlotData {
        constructor() {
          super(...arguments);
          this._equipInfo = void 0;
        }

        merge(slotData) {
          for (var key in slotData) {
            this[key] = slotData[key];
          }
        }

        set equipInfo(info) {
          this._equipInfo = info;
        }

        get equipInfo() {
          return this._equipInfo;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=efc67ebb20609f41773e16cdacf06f45030445ba.js.map