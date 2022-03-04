
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/CocosBridge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '744ab+zs0tN95dzpyLYdejR', 'CocosBridge');
// Script/Tools/CocosBridge.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CocosBridge = {
    JSCallNative: function (action, json) {
        //根据不同的action对接
        switch (action) {
            case "wxLogin": //微信登陆
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", json);
                }
                break;
            case "distinctId": // 数数distinctId
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "distinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
                }
                break;
            case "preLoadRewardVideoAd": // 预加载激励视频
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preLoadRewardVideoAd", "(Ljava/lang/String;)V", "" + json);
                }
                break;
            case "showRewardVideoAd": // 展示激励视频
                if (cc.sys.isNative) {
                    if (cc.Tools.ad.adShowNum > 0) {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showRewardVideoAd", "(Ljava/lang/String;)V", json);
                    }
                    else {
                        cc.Tools.emitEvent("showTips", "今天观看视频次数已经达到上限");
                    }
                }
                else {
                    cc.Tools.adCallBack("100," + json);
                }
                break;
            case "preLoadInterstitialAd": // 预加载插屏
                break;
            case "showInterstitialAd": // 展示插屏
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "()V");
                }
                break;
            case "preLoadNativeAd": // 预加载原生
                break;
            case "showNativeAd": // 展示原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showNativeAd", "()V");
                }
                break;
            case "hideNativeAd": // 隐藏原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideNativeAd", "()V");
                }
                break;
            case "showBannerAd": // 展示banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBannerAd", "()V");
                }
                break;
            case "hideBannerAd": // 隐藏banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBannerAd", "()V");
                }
                break;
            case "playDot": // 打点
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "playDot", "(Ljava/lang/String)V", json);
                }
                break;
        }
    }
};
exports.default = CocosBridge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMvQ29jb3NCcmlkZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFdBQVcsR0FBRztJQUNkLFlBQVksRUFBWixVQUFhLE1BQWMsRUFBRSxJQUFZO1FBQ3JDLGVBQWU7UUFDZixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6SDtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxZQUFZLEVBQUMsZUFBZTtnQkFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2hKO2dCQUNELE1BQU07WUFDVixLQUFLLHNCQUFzQixFQUFDLFVBQVU7Z0JBQ2xDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUN0STtnQkFDRCxNQUFNO1lBRVYsS0FBSyxtQkFBbUIsRUFBQyxTQUFTO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7d0JBQzNCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzlIO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUNwRDtpQkFDSjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELE1BQU07WUFFVixLQUFLLHVCQUF1QixFQUFDLFFBQVE7Z0JBRWpDLE1BQU07WUFFVixLQUFLLG9CQUFvQixFQUFDLE9BQU87Z0JBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3ZHO2dCQUNELE1BQU07WUFFVixLQUFLLGlCQUFpQixFQUFDLFFBQVE7Z0JBRTNCLE1BQU07WUFFVixLQUFLLGNBQWMsRUFBQyxPQUFPO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssY0FBYyxFQUFDLE9BQU87Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNqRztnQkFDRCxNQUFNO1lBRVYsS0FBSyxjQUFjLEVBQUMsV0FBVztnQkFDM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pHO2dCQUNELE1BQU07WUFFVixLQUFLLGNBQWMsRUFBQyxXQUFXO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuSDtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUNELGtCQUFlLFdBQVcsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb2Nvc0JyaWRnZSA9IHtcbiAgICBKU0NhbGxOYXRpdmUoYWN0aW9uOiBzdHJpbmcsIGpzb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvL+agueaNruS4jeWQjOeahGFjdGlvbuWvueaOpVxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInd4TG9naW5cIjovL+W+ruS/oeeZu+mZhlxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwid2VpeGluX2xvZ2luXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0aW5jdElkXCI6Ly8g5pWw5pWwZGlzdGluY3RJZFxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZGlzdGluY3RJZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBjYy5Ub29scy51c2VySW5mby5kaXN0aW5jdF9pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByZUxvYWRSZXdhcmRWaWRlb0FkXCI6Ly8g6aKE5Yqg6L295r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJwcmVMb2FkUmV3YXJkVmlkZW9BZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIlwiICsganNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd1Jld2FyZFZpZGVvQWRcIjovLyDlsZXnpLrmv4DlirHop4bpopFcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFNob3dOdW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93UmV3YXJkVmlkZW9BZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBqc29uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLmVtaXRFdmVudChcInNob3dUaXBzXCIsIFwi5LuK5aSp6KeC55yL6KeG6aKR5qyh5pWw5bey57uP6L6+5Yiw5LiK6ZmQXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWRDYWxsQmFjayhcIjEwMCxcIiArIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInByZUxvYWRJbnRlcnN0aXRpYWxBZFwiOi8vIOmihOWKoOi9veaPkuWxj1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzaG93SW50ZXJzdGl0aWFsQWRcIjovLyDlsZXnpLrmj5LlsY9cbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dJbnRlcnN0aXRpYWxBZFwiLCBcIigpVlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwcmVMb2FkTmF0aXZlQWRcIjovLyDpooTliqDovb3ljp/nlJ9cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd05hdGl2ZUFkXCI6Ly8g5bGV56S65Y6f55SfXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93TmF0aXZlQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaGlkZU5hdGl2ZUFkXCI6Ly8g6ZqQ6JeP5Y6f55SfXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlTmF0aXZlQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd0Jhbm5lckFkXCI6Ly8g5bGV56S6YmFubmVyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QmFubmVyQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaGlkZUJhbm5lckFkXCI6Ly8g6ZqQ6JePYmFubmVyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlQmFubmVyQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicGxheURvdFwiOi8vIOaJk+eCuVxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwicGxheURvdFwiLCBcIihMamF2YS9sYW5nL1N0cmluZylWXCIsIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvY29zQnJpZGdlXG4iXX0=