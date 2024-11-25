System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsData, tab, LoginData, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsData(extras) {
    _reporterNs.report("AbsData", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  _export("LoginData", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsData = _unresolved_2.AbsData;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b0550Mk6dpFfrJ/MK9U+DPx", "LoginData", undefined);

      __checkObsolete__(['Node', 'Prefab', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("LoginData", LoginData = class LoginData extends (_crd && AbsData === void 0 ? (_reportPossibleCrUseOfAbsData({
        error: Error()
      }), AbsData) : AbsData) {
        constructor(...args) {
          super(...args);
          this.gatewayAddrs = void 0;
          this.uid = "";
          this.token = "";
          this.nickName = "";
          this.openId = "";
          this.default_area = 0;
          this.default_area_name = "";
          this.password = "";
          this.serverAddress = "";
          this.loginGroup = "";
          this.serverName = "";
          this.recommendRoleID = "";
          this.loginServerTab = void 0;
          this.isCreatRole = false;
          this.isLogin = false;
          this.serverId = void 0;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new LoginData();
          }

          return this._instance;
        }

        purge() {}

        setServerId(id) {
          this.serverId = id || 1;
          this.loginServerTab = this.getServerlistTable();
          this.serverAddress = this.loginServerTab.Address;
          this.serverName = this.loginServerTab.Name;
          console.log(this.loginServerTab);
          console.log("当前服务器id", this.serverId);
        }

        getServerlistTable() {
          let data; // if (window.login_addr_id) {
          //     id = window.login_addr_id
          //     if (id == AppType.release) {
          //         return WechatServerTab
          //     }
          // }

          data = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ServerlistTableByID.getValue(this.serverId);

          if (!data) {
            throw `cannot find serverlist i=${this.serverId}`;
          }

          return data;
        }

      });

      LoginData._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6311b0e18eac3aca41966689bcff34647285178f.js.map