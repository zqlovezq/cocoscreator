System.register(["__unresolved_0", "cc", "client_protocol", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, proto, tab, RoleData, _dec, _class, _crd, ccclass, property, ActivityOpenInfo;

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b510rZL5ZA/p6UTFALCk0y", "ActivityOpenInfo", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ActivtityOpenInfo
       * zhudingchao
       * Fri Jul 26 2024 11:24:34 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/ActivtityOpenInfo.ts
       *
       */

      _export("ActivityOpenInfo", ActivityOpenInfo = (_dec = ccclass('ActivityOpenInfo'), _dec(_class = class ActivityOpenInfo extends (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
        error: Error()
      }), proto) : proto).Activity {
        constructor() {
          super(...arguments);
          this._actTable = void 0;
        }

        merge(info) {
          for (var key in info) {
            this[key] = info[key];
          }
        }

        get activityTable() {
          if (!this._actTable) {
            this._actTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityTableByActivityId.getValue(this.TabId);
          }

          return this._actTable;
        }

        isOpen() {
          var timer = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          return timer >= this.startTime && timer < this.endTime;
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bd07e768b981b171a2b7cd1be918647b03ba36ef.js.map