System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Global, _crd;

  _export("Global", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3a8acdpJJN1pPbnItCRXkM", "Global", undefined);

      __checkObsolete__(['sys']);

      _export("Global", Global = class Global {
        //是否为提审状态

        /** 是否开发模式 */
        static get isDebug() {
          return Global.APP_TYPE == 0;
        }
        /** 是否正式模式 */


        static get isRelease() {
          return Global.APP_TYPE == 1;
        }
        /** 是否为提审状态 */


        static get isReview() {
          return Global.IS_REVIEW;
        }

        static getVersionStr() {
          return `    type.${Global.APP_TYPE}  ver.${Global.APP_VERSION}  res.${Global.RES_VERSION}`;
        }
        /**
         * 获取热更地址
         * 拼接方式 
         * 配置url + cdn根目录 + 包类型 + 渠道类型 + 版本号 + 资源目录
         * 
         * 包类型： 0: wxdmx_native_debug , 1：wxdmx_native_release
         * 
         * https:www.example.com/wxdmx/wxdmx_native_debug_0/1.0.0.0/data/
         */


        static getHotUpdateURL() {
          let url = Global.HOT_UPDATE_PATH;
          url += "wxdmx/"; //cdn根目录

          if (Global.APP_TYPE == 0) {
            //根据包类型，区分资源地址目录
            url += "wxdmx_native_debug_";
          } else {
            url += "wxdmx_native_release_";
          }

          url += Global.channelType + "/cocos/" + this.ONLINE_RES_VERSION + "/" + Global.platform + "/data/";
          return url;
        }

        static print() {
          console.log("Globle", JSON.stringify({
            APP_TYPE: Global.APP_TYPE,
            channelType: Global.channelType,
            APP_VERSION: Global.APP_VERSION,
            RES_VERSION: Global.RES_VERSION,
            SERVER_VERSION: Global.SERVER_VERSION,
            HOT_UPDATE_PATH: Global.HOT_UPDATE_PATH,
            getHotUpdateURL: Global.getHotUpdateURL()
          }));
        }

      });

      Global.APP_TYPE = 0;
      //包类型 0测试、1正式
      Global.channelType = 0;
      //渠道类型
      Global.APP_VERSION = "1.0.0";
      //版本号
      Global.RES_VERSION = "1.0.0";
      //资源版本号
      Global.SERVER_VERSION = "1.0.0";
      //服务器版本
      Global.HOT_UPDATE_PATH = "http://10.50.2.2:8000/native_debug/cocos_debug/1.0.0.0/data/";
      //热更新地址
      Global.ONLINE_VERSION = "1.0.0";
      //线上版本 (apk、ipa版本)
      Global.ONLINE_RES_VERSION = "1.0.0";
      //线上版本  to cdn远程目录
      Global.platform = "h5";
      Global.IS_REVIEW = false;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dccc03d02763dbfa0ab01269a110d6f9fee7bfe6.js.map