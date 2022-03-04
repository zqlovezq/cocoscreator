var CocosBridge = {
    JSCallNative(action: string, json: string): void {
        //根据不同的action对接
        switch (action) {
            case "wxLogin"://微信登陆
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", json);
                }
                break;
            case "distinctId":// 数数distinctId
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "distinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
                }
                break;
            case "preLoadRewardVideoAd":// 预加载激励视频
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preLoadRewardVideoAd", "(Ljava/lang/String;)V", "" + json);
                }
                break;

            case "showRewardVideoAd":// 展示激励视频
                if (cc.sys.isNative) {
                    if (cc.Tools.ad.adShowNum > 0) {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showRewardVideoAd", "(Ljava/lang/String;)V", json);
                    } else {
                        cc.Tools.emitEvent("showTips", "今天观看视频次数已经达到上限");
                    }
                } else {
                    cc.Tools.adCallBack("100," + json);
                }
                break;

            case "preLoadInterstitialAd":// 预加载插屏

                break;

            case "showInterstitialAd":// 展示插屏
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "()V");
                }
                break;

            case "preLoadNativeAd":// 预加载原生

                break;

            case "showNativeAd":// 展示原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showNativeAd", "()V");
                }
                break;

            case "hideNativeAd":// 隐藏原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideNativeAd", "()V");
                }
                break;

            case "showBannerAd":// 展示banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBannerAd", "()V");
                }
                break;

            case "hideBannerAd":// 隐藏banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBannerAd", "()V");
                }
                break;

            case "playDot":// 打点
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "playDot", "(Ljava/lang/String)V", json);
                }
                break;
        }
    }
}
export default CocosBridge
