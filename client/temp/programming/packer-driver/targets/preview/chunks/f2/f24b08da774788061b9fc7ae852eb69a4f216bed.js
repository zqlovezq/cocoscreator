System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, BaseChannel, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../Table/table_gen", _context.meta, extras);
  }

  _export("BaseChannel", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9dc19epjIJLqohSAvsQrhXd", "BaseChannel", undefined);

      _export("BaseChannel", BaseChannel = class BaseChannel {
        constructor() {
          this.sdkLoginData = void 0;
          //sdk登录成功返回数据
          this.httpLoginData = void 0;
          //http登录成功返回数据
          this.iosStoreUrl = "";
          //ios商店跳转地址
          this.androidStoreUrl = "";
          //安卓商店跳转地址
          this.stopServerLastTimePhp = "";
          this.faceBookUrl = "";
          this.discordUrl = "";
          this.associationUrl = "";
          //社群
          this.basePhpUrl = "";
          this.loginToken = "111";
          this.loginUid = "";
          this.loginPhpUrl = "";
        } //调用sdk退出接口
        //直接退出app
        //上报进入服务器（到达游戏主界面）
        //上报创建角色
        //上报角色升级
        //账号升级
        //个人中心
        //初始化激励广告 0用户应该被奖励 1广告初始化完成 2广告加载完毕 3广告加载失败 4广告已经展示 5 广告被点击
        //展示激励广告
        //评论


        //分享
        enterGameStart() {}

        gameInitSuccess() {}

        gameHotfixStart() {}

        gameHotfixSuccess() {}

        openActionWebView(url) {}

        roleLogoutServer(params) {}

        roleCompleteTutorial(params) {}

        openCustomService() {}

        getShopInfo(param) {}

        gameServerPage() {}
        /**
         * sdk支付接口参数，返回计费点价格，比如港澳台版本需要转成美元
         * @param p_data 
         * @returns 
         */


        /**
         * 切换语言，不需要的可以不实现
         * @param params 
         */
        changeLanguage(params) {}
        /**
         * 返回随机名字文件名
         */

        /**获得充值货币 */
        //上报打点事件


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f24b08da774788061b9fc7ae852eb69a4f216bed.js.map