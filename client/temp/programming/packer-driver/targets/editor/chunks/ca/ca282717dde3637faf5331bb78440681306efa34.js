System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, _dec, _class, _crd, ccclass, property, TaskInfo;

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

      _cclegacy._RF.push({}, "38553miuqFKrY5XdHW5ILS3", "TaskInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TaskInfo
       * zhudingchao
       * Tue Jun 04 2024 16:43:09 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/task/TaskInfo.ts
       *
       */

      _export("TaskInfo", TaskInfo = (_dec = ccclass('TaskInfo'), _dec(_class = class TaskInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Task {
        constructor(...args) {
          super(...args);
          this._taskTable = void 0;
          this.isUnLock = true;
        }

        merge(item) {
          for (const key in item) {
            this[key] = item[key];
          }
        }

        get taskTable() {
          if (!this._taskTable) {
            this._taskTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().TaskTableById.getValue(this.taskTabId);
          }

          return this._taskTable;
        }

        get isCanReceived() {
          return !this.isReceived && this.progress >= this.taskTable.FinishParam1;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ca282717dde3637faf5331bb78440681306efa34.js.map