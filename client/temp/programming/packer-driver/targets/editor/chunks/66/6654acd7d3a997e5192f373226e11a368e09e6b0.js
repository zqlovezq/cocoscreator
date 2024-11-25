System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, game, BaseChannel, tab, DevChannel, _crd;

  function _reportPossibleCrUseOfBaseChannel(extras) {
    _reporterNs.report("BaseChannel", "../BaseChannel", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  _export("DevChannel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      game = _cc.game;
    }, function (_unresolved_2) {
      BaseChannel = _unresolved_2.BaseChannel;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "44cfa1x/LpGwYGpwzmwmcoC", "DevChannel", undefined);

      __checkObsolete__(['game', 'sys']);

      _export("DevChannel", DevChannel = class DevChannel extends (_crd && BaseChannel === void 0 ? (_reportPossibleCrUseOfBaseChannel({
        error: Error()
      }), BaseChannel) : BaseChannel) {
        constructor(...args) {
          super(...args);
          this.channelType = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ChannelType.ChannelType_None;
          this.basePhpUrl = "";
          //表里填写的
          this._isLoginSuc = false;
          this.adCompleteCb = void 0;
        }

        //是否登录  
        init() {}

        login(params, callback) {
          this._isLoginSuc = true;
          callback({
            code: 0
          });
        }

        isLogin() {
          return this._isLoginSuc;
        }

        logout(params, callback) {
          this._isLoginSuc = false;
          callback({
            code: 0
          });
        }

        exit() {}

        exitApp(param) {
          game.end();
        }

        pay(params) {}
        /**
         * 获得php服务器地址
         * @returns 
         */


        getBasePhpUrl() {
          return this.basePhpUrl;
        }

        loginServer(callback) {}

        intoServer(params) {}

        createRole(params) {}

        roleLevelUp(params) {}

        accountUpgrade() {
          throw new Error("Method not implemented.");
        }

        accountCenter(params) {
          throw new Error("Method not implemented.");
        }

        initRewardedAd(params, callback) {
          this.adCompleteCb = callback;
          callback({
            code: 2
          });
        }

        showRewardedAd() {
          this.adCompleteCb({
            code: 0
          });
          this.adCompleteCb({
            code: 2
          });
        }

        comment(params, callback) {
          callback({
            code: 0
          });
        }

        share(params, callback) {
          callback({
            code: 0
          });
        }

        community() {}

        getVersionPhpUrl() {
          return this.basePhpUrl + "version_play800.php";
        }

        getRandomNameFile() {
          return "radom_name_en.xml";
        }

        getSdkRechargePrice(p_data) {
          return p_data.PriceDollar / 100;
        }

        getRechargeCurrency() {
          return "ui_commondesc_73";
        }

        postEvent(params) {
          console.log("上报打点事件===" + JSON.stringify(params));
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6654acd7d3a997e5192f373226e11a368e09e6b0.js.map