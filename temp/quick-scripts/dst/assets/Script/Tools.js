
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsImFkQ2FsbEJhY2siLCJ6bSIsImFkIiwicG93ZXIiLCJzZW5kRGF0YSIsImh0dHAiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInJlZFBhY2siLCJjb25zb2xlIiwidXNlckluZm8iLCJkYXRhIiwiTGV2ZWxJbmZvIiwic3RhZ2UiLCJzaG93SmlsaUFkIiwic2hvd0Jhbm5lciIsImhpZGVCYW5uZXIiLCJzaG93VGFibGVTY3JlZW4iLCJoaWRlVGFibGVTY3JlZW4iLCJ3eExvZ2luIiwid3hMb2dpblJlc3VsdCIsImVyckNvZGUiLCJ3eExvZ2luUmVzdWx0Y29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILEdBQVc7QUFDUDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsR0FKTyxlQUlIQyxLQUpHLEVBSUlDLEdBSkosRUFJUztBQUNaLFFBQUlKLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCTixNQUFBQSxFQUFFLENBQUNPLEdBQUgsQ0FBTyxTQUFTSixLQUFoQjtBQUNBSyxNQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MscUNBQWhDLEVBQXVFLEtBQXZFLEVBQThFLHVCQUE5RSxFQUF1R1AsS0FBdkcsRUFBOEdDLEdBQTlHO0FBQ0g7QUFDSixHQVRNOztBQVdQO0FBQ0o7QUFDQTtBQUNBO0FBQ0lPLEVBQUFBLFVBZk8sd0JBZU07QUFDVFgsSUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU8sUUFBUDs7QUFDQSxRQUFJUCxFQUFFLENBQUNZLEVBQUgsQ0FBTUMsRUFBTixDQUFTQyxLQUFiLEVB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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5Ub29scyA9IHtcbiAgICAvKipcbiAgICAgKiDmiZPngrlcbiAgICAqL1xuICAgIGRvdChldmVudCwgcHJvKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuazqOWGjOaJk+eCuVwiICsgZXZlbnQpO1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50LCBwcm8pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeci+inhumikeWbnuiwg1xuICAgICAqIEBwYXJhbSBlcnJDb2RlIFxuICAgICAqL1xuICAgIGFkQ2FsbEJhY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIuingueci+inhumikeWbnuiwg1wiKTtcbiAgICAgICAgaWYgKGNjLnptLmFkLnBvd2VyKSB7XG4gICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy56bS5hZC5wb3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLnptLmFkLnJlZFBhY2spIHtcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Bhc3NBZFwiLCBcIlBPU1RcIiwgY2Muem0uYWQucmVkUGFjaykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXNzQWTov5Tlm57kv6Hmga9cIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9k+WKm+Wkp+S6jjAg6L+b5YWl5LiL5LiA5YWzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5hZC5yZWRQYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLnN0YWdlIDwgMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jjAg5by55Ye655yL6KeG6aKR6I635b6X5L2T5Yqb55qE5o6l5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuua/gOWKseinhumikVxuICAgIHNob3dKaWxpQWQoKSB7XG4gICAgICAgIGNjLmxvZyhcIueCueWHu+aYvuekuua/gOWKseinhumikVwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QWRcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekumJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dCYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmakOiXj2Jhbm5lclxuICAgIGhpZGVCYW5uZXIoKXtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgc2hvd1RhYmxlU2NyZWVuKCl7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JeP5o+S5bGP5bm/5ZGKXG4gICAgaGlkZVRhYmxlU2NyZWVuKCl7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImhpZGVUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5b6u5L+h55m76ZmGXG4gICAgd3hMb2dpbigpIHtcbiAgICAgICAgY2MubG9nKFwid3hMb2dpblwiKTtcbiAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIndlaXhpbl9sb2dpblwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLFwid2VpeGluX2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgLyoqXG4gICAgICog5o6l5pS2bmF0aXZl5b6u5L+h5o6I5p2D55qEY29kZVxuICAgICAqIEBwYXJhbSBlcnJDb2RlIFxuICAgICAqL1xuICAgd3hMb2dpblJlc3VsdChlcnJDb2RlKSB7XG4gICAgY2MubG9nKFwid3hMb2dpblJlc3VsdGNvZGU9XCIgKyBlcnJDb2RlKVxuICAgIGNjLnd4TG9naW5SZXN1bHRjb2RlID0gZXJyQ29kZTtcbn1cbn0iXX0=