System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, RoleData, _dec, _class, _class2, _crd, ccclass, property, MallDataMgr;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      RoleData = _unresolved_3.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2ce65ae8otAyrGsd6IrZsfD", "MallDataMgr", undefined);

      __checkObsolete__(['_decorator', 'Component', 'log', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MallDataMgr", MallDataMgr = (_dec = ccclass('MallDataMgr'), _dec(_class = (_class2 = class MallDataMgr extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this._daily_shop_data = null;
          //每日商店数据
          this._fixed_shop_map = new Map();
          this._shopMap = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new MallDataMgr();
          }

          return this._instance;
        } // 设置每日商店信息


        initDailyShop(msg) {
          this._daily_shop_data = msg;

          this._daily_shop_data.slots.sort((slot1, slot2) => {
            return slot1.index - slot2.index;
          });
        }

        initFixedShop(msg) {
          this._shopMap = msg.shopInfoMap;
          var shopMap = msg.shopInfoMap;
          Object.keys(shopMap).forEach(key => {
            var name = shopMap[key].name;
            var commodityMap = shopMap[key].commodityMap;
            var map = new Map();
            Object.keys(commodityMap).forEach(key => {
              map.set(commodityMap[key].id, commodityMap[key].boughtCount);
            });

            this._fixed_shop_map.set(name, map);
          });
        } // 根据


        getDailyShopData() {
          return this._daily_shop_data;
        } // 设置固定商店信息


        getFixedShopData(name) {
          return this._fixed_shop_map.get(name);
        } // 固定商店是否过期


        getFixedShopExpireTime(name) {
          var info = this._shopMap[name];
          var clientTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();

          if (info && clientTime < info.expireTime) {
            return info.expireTime - clientTime;
          }

          return -1;
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=aabe384ed5bb8000980b831830cfbf9a60e5ef71.js.map