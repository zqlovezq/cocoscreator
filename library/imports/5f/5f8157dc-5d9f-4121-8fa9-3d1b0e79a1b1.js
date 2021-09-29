"use strict";
cc._RF.push(module, '5f815fcXZ9BIY+pPRsOeaGx', 'Tools');
// Script/Tools.js

"use strict";

cc.Tools = {
  /**
   * 打点
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      cc.log("注册打点" + event);
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, pro);
    }
  },

  /**
   * 看视频回调
   * @param errCode 
   */
  adCallBack: function adCallBack() {
    cc.log("观看视频回调");

    if (cc.zm.ad.power) {
      var sendData = {
        ad: cc.zm.ad
      };
      http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
        cc.zm.ad.power = false;
        cc.director.loadScene('Game');
      });
    }

    if (cc.zm.ad.redPack) {
      http.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then(function (res) {
        console.log("PassAd返回信息", res);
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
          cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

          if (cc.zm.userInfo.power > 0) {
            http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;
              cc.zm.ad.redPack = null; // console.log("关卡信息=", cc.zm.LevelInfo);

              if (cc.zm.LevelInfo.stage < 30) {
                cc.director.loadScene('Game');
              } else {
                // 直接返回主界面
                cc.director.loadScene('Index');
              }
            });
          } else {
            // 小于0 弹出看视频获得体力的接口
            cc.director.loadScene('Index');
          }
        });
      });
    }
  },
  // 显示激励视频
  showJiliAd: function showJiliAd() {
    cc.log("点击显示激励视频");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
    }
  },
  // 显示banner
  showBanner: function showBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
    }
  },
  // 隐藏banner
  hideBanner: function hideBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
    }
  },
  // 显示插屏广告
  showTableScreen: function showTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
    }
  },
  // 隐藏插屏广告
  hideTableScreen: function hideTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
    }
  },
  // 微信登陆
  wxLogin: function wxLogin() {
    cc.log("wxLogin");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    cc.log("wxLoginResultcode=" + errCode);
    cc.wxLoginResultcode = errCode;
  }
};

cc._RF.pop();