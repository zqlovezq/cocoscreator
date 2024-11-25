System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, RoleData, _dec, _class, _crd, ccclass, property, RareBookSlotInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRareBookInfo(extras) {
    _reporterNs.report("RareBookInfo", "./RareBookInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
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
    }, function (_unresolved_2) {
      RoleData = _unresolved_2.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6fa5bfksTlLB4NCtMT+vfcC", "RareBookSlotInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookSlotInfo
       * zhudingchao
       * Tue May 28 2024 20:04:49 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookSlotInfo.ts
       *
       */

      _export("RareBookSlotInfo", RareBookSlotInfo = (_dec = ccclass('RareBookSlotInfo'), _dec(_class = class RareBookSlotInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).BookSlotData {
        constructor() {
          super(...arguments);
          this._bookSlotTable = void 0;
          this._bookInfo = void 0;
        }

        merge(info) {
          for (var key in info) {
            this[key] = info[key];
          }
        }

        get bookSlotTable() {
          return this._bookSlotTable;
        }

        set bookSlotTable(table) {
          this._bookSlotTable = table;
        }

        set bookInfo(info) {
          this._bookInfo = info;
        }

        get bookInfo() {
          return this._bookInfo;
        }

        get isLock() {
          return (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level >= this.bookSlotTable.UnlockArgs;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3f1d1c82f5febfa3f83156bc6b5063822288b1fa.js.map