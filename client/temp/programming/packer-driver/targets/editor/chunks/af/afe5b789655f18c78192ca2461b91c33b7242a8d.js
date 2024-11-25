System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, _dec, _class, _crd, ccclass, property, ItemInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c096cyJR1MJZYIPZlAbiwf", "ItemInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemInfo", ItemInfo = (_dec = ccclass('ItemInfo'), _dec(_class = class ItemInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Item {
        constructor() {
          super();
          this._itemTable = void 0;
          this._needNum = 0;
        }

        merge(item) {
          for (const key in item) {
            this[key] = item[key];
          }
        }

        initItemData(itemId, num) {
          this.itemId = itemId;
          this.num = num;
        }

        get id() {
          return 0;
        }
        /**
         * 道具表数据
         */


        get itemTable() {
          if (!this._itemTable) {
            this._itemTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ItemTableById.getValue(this.itemId);
          }

          return this._itemTable;
        }

        get needNum() {
          return this._needNum;
        }

        set needNum(num) {
          this._needNum = num;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=afe5b789655f18c78192ca2461b91c33b7242a8d.js.map