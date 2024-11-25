System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, _dec, _class, _crd, ccclass, property, RareBookSerieInfo;

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

      _cclegacy._RF.push({}, "3eceaCVbyFKnrK8XpDl0Smx", "RareBookSerieInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookSerieInfo
       * zhudingchao
       * Thu May 30 2024 15:57:22 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookSerieInfo.ts
       *
       */

      _export("RareBookSerieInfo", RareBookSerieInfo = (_dec = ccclass('RareBookSerieInfo'), _dec(_class = class RareBookSerieInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).BookSeriesData {
        constructor() {
          super(...arguments);
          this._seriesTable = void 0;
          this._needCount = -1;
        }

        merge(bookInfo) {
          for (var key in bookInfo) {
            this[key] = bookInfo[key];
          }
        }

        //满足的数量
        get seriesTable() {
          if (!this._seriesTable) {
            this._seriesTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTableById.getValue(this.id);
          }

          return this._seriesTable;
        }

        isComplete() {
          return this.count >= this.needCount;
        }

        get needCount() {
          if (this._needCount < 0) {
            //let table=RareBookData.ins.getSerieTableByGroupId(this.seriesTable.GroupId);
            var table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BookSeriesTableById.getValue(this.seriesTable.GroupId);
            this._needCount = table ? table.BookId.length : 0;
          }

          return this._needCount;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fa4ed6f460e02aa40463b3b4296e046728cf825e.js.map