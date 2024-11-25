System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, tab, EventMgr, LocalEvent, _dec, _class, _class2, _crd, ccclass, property, PayData;

  function _reportPossibleCrUseOfIClear(extras) {
    _reporterNs.report("IClear", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      LocalEvent = _unresolved_4.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f80bOwUGJCA65/8dK4tqiq", "PayData", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * PayData
       * zhudingchao
       * Wed Jun 26 2024 14:38:31 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/pay/PayData.ts
       *
       */

      _export("PayData", PayData = (_dec = ccclass('PayData'), _dec(_class = (_class2 = class PayData {
        constructor() {
          this._payInfoMsg = void 0;
          this._isShowFirstRecharge = false;
          this._firstRechargeTabs = [];
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new PayData();
          }

          return this._instance;
        }

        purge() {}

        set payInfoMsg(msg) {
          this._payInfoMsg = msg; // let b = this.isShowFirstRecharge();
          // if (b != this._isShowFirstRecharge) {
          //     this._isShowFirstRecharge = b;
          //     EventMgr.emitLocal(LocalEvent.FirstRecharge_Chang);
          // }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).FirstRecharge_Chang);
        }

        get payInfoMsg() {
          return this._payInfoMsg;
        }
        /**是否显示首充活动 */


        isShowFirstRecharge() {
          if (this.payInfoMsg) {
            var tables = this.getFirstRechargeTabs();

            if (this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.length == tables.length) {
              return false;
            }

            return true;
          }

          return false;
        }
        /**
         * 获得首充奖励id
         * @returns 
         */


        getFirstRechargeTable() {
          var tables = this.getFirstRechargeTabs();

          if (this.payInfoMsg) {
            var boughtGoodsIds = this.payInfoMsg.firstRechargeInfo.boughtGoodsIds;

            for (var key in tables) {
              var id = tables[key].Id;

              if (boughtGoodsIds.indexOf(id) < 0) {
                return tables[key];
              }
            }
          }

          return null;
        }
        /**首充完成 */


        firstRechargeSucc(rechargeId) {
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FirstRechargeTable;
          var table = tables.find(a => a.RechargeId == rechargeId);

          if (table) {
            this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.push(table.Id);

            if (table.Id === 4) {
              for (var i = 0; i < this._firstRechargeTabs.length; i++) {
                this.payInfoMsg.firstRechargeInfo.boughtGoodsIds.push(this._firstRechargeTabs[i].Id);
              }
            }

            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).FirstRecharge_Chang);
          }
        }

        getFirstRechargeTabs() {
          if (this._firstRechargeTabs.length === 0) {
            this.setFirstRechargeTabs();
          }

          return this._firstRechargeTabs;
        }

        setFirstRechargeTabs() {
          var tables = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().FirstRechargeTable;

          for (var i = 0; i < tables.length; i++) {
            var _tab = tables[i];

            if (_tab.ContainGoodsId.length === 0) {
              this._firstRechargeTabs.push(_tab);
            }
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df755a5babe0fd5c0df7efde2c8ffb9ccbb0da0b.js.map