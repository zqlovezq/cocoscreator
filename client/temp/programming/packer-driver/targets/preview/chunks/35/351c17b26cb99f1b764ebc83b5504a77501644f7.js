System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, Global, _crd;

  _export("Global", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "db4e2Q2TR1KfqYHaPcm7jNG", "Global", undefined);

      _export("Global", Global = class Global {
        static getVersionStr() {
          return "ver." + Global.APP_VERSION + "  res." + Global.RES_VERSION;
        }

        static getHotUpdateURL() {
          return Global.HOT_UPDATE_PATH;
        }

      });

      Global.APP_VERSION = "1.0.0";
      //版本号
      Global.RES_VERSION = "1.0.0";
      //资源版本号
      Global.SERVER_VERSION = "1.0.0";
      //服务器版本
      Global.HOT_UPDATE_PATH = "http://10.50.2.2:8000/native_debug/cocos_debug/1.0.0.0/data/";

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=351c17b26cb99f1b764ebc83b5504a77501644f7.js.map