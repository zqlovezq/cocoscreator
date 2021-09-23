/****************************************************************************
 Copyright (c) 2015-2016 Chukong Technologies Inc.
 Copyright (c) 2017-2018 Xiamen Yaji Software Co., Ltd.

 http://www.cocos2d-x.org

 Permission is hereby granted, free of charge, to any person obtaining a copy
 of this software and associated documentation files (the "Software"), to deal
 in the Software without restriction, including without limitation the rights
 to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 copies of the Software, and to permit persons to whom the Software is
 furnished to do so, subject to the following conditions:

 The above copyright notice and this permission notice shall be included in
 all copies or substantial portions of the Software.

 THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 THE SOFTWARE.
 ****************************************************************************/
package org.cocos2dx.javascript;
//新增代码
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;
//新增代码
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.widget.Toast;

////新增代码
//import com.bytedance.sdk.openadsdk.AdSlot;
//import com.bytedance.sdk.openadsdk.TTAdConstant;
//import com.bytedance.sdk.openadsdk.TTAdManager;
//import com.bytedance.sdk.openadsdk.TTAdNative;
//import com.bytedance.sdk.openadsdk.TTAdSdk;
//import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
//import com.bytedance.sdk.openadsdk.TTRewardVideoAd;
import com.tencent.mm.opensdk.modelmsg.SendAuth;
//新增代码
import com.tencent.mm.opensdk.openapi.IWXAPI;
//新增代码
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
//新增代码
import static org.cocos2dx.lib.Cocos2dxHelper.getActivity;

//新增代码
//新增代码
//新增代码

//新增代码
import java.util.Timer;
//新增代码
import java.util.TimerTask;

public class AppActivity extends Cocos2dxActivity {
    // 穿山甲新增代码
//    public static AppActivity activity = null;
//
//    public static TTAdNative mTTAdNative = null;
//
//    public static TTRewardVideoAd mttRewardVideoAd = null;
//
//    public static TTFullScreenVideoAd mTTFullScreenVideoAd = null;
//
//    public static boolean isLoadVideoSuccess = false;

    //新增代码
    public static String wx_appid = "wx0995590d8c88c34e";
    public static IWXAPI wx_api;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //新增代码
        Log.e("tt","AppActivity onCreate");
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            //  so just quietly finish and go away, dropping the user back into the activity
            //  at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        //新增代码
        weixin_Init();
        // DO OTHER INITIALIZATION BELOW
        SDKWrapper.getInstance().init(this);
       //穿山甲新增代码
//        activity=this;
//        TTAdManagerHolder.init(activity);
//        TTAdManager ttAdManager = TTAdManagerHolder.get();
//        TTAdManagerHolder.get().requestPermissionIfNecessary(this);
//        mTTAdNative = TTAdSdk.getAdManager().createAdNative(activity);
//        jili(); //加载激励视频
//        quanPing(); //加载全屏视频
    }

    //新增代码
    public static void weixin_Init() {
//        WXAPI wxapi = WXAPIFactory.createWXAPI(mContext,null);
        wx_api = WXAPIFactory.createWXAPI(getActivity(),wx_appid,true);
        wx_api.registerApp(wx_appid);
    }

    //新增代码
    public static void weixin_login(String data) {
        Log.e("WZQ","AppActivity weixin_login");

//        Final SendAuth.Req req = new SendAuth.Req();
//        req.scope = "snsapi_userinfo";
//        req.state = "wechat_sdk_demo_test";
//        api.sendReq(req);

        SendAuth.Req req =new SendAuth.Req();
        req.scope ="snsapi_userinfo";
        req.state = "wechat_sdk_demo_test";
        System.out.println("req is " + req);
        //利用微信api发送请求
        wx_api.sendReq(req);
    }

    //新增代码(回调函数)
    public static void callJsFunction(final String value) {
        System.out.println("Enter the callJsFunction" + value);
        final String exes = "cc.wxLogin.wxLoginResult(\""+ value + "\")";

//        app.runOnGLThread(new Runnable() {
//            @Override
//            public void run() {
//                Cocos2dxJavascriptJavaBridge.evalString(exes);//直接调用到js里面
//            }
//        });

        TimerTask task = new TimerTask(){
            public void run(){
                //execute the task
                Cocos2dxGLSurfaceView.getInstance().queueEvent(new Runnable() {
                    @Override
                    public void run() {
                        System.out.println("chenggong  ==  "+ exes);
                        Cocos2dxJavascriptJavaBridge.evalString(exes);
                    }
                });
            }
        };
        Timer timer = new Timer();
        timer.schedule(task, 500);
    }

    @Override
    public Cocos2dxGLSurfaceView onCreateView() {
        Cocos2dxGLSurfaceView glSurfaceView = new Cocos2dxGLSurfaceView(this);
        // TestCpp should create stencil buffer
        glSurfaceView.setEGLConfigChooser(5, 6, 5, 0, 16, 8);
        SDKWrapper.getInstance().setGLSurfaceView(glSurfaceView, this);

        return glSurfaceView;
    }

    @Override
    protected void onResume() {
        super.onResume();
        SDKWrapper.getInstance().onResume();

    }

    @Override
    protected void onPause() {
        super.onPause();
        SDKWrapper.getInstance().onPause();

    }

    @Override
    protected void onDestroy() {
        super.onDestroy();
        SDKWrapper.getInstance().onDestroy();

    }

    @Override
    protected void onActivityResult(int requestCode, int resultCode, Intent data) {
        super.onActivityResult(requestCode, resultCode, data);
        SDKWrapper.getInstance().onActivityResult(requestCode, resultCode, data);
    }

    @Override
    protected void onNewIntent(Intent intent) {
        super.onNewIntent(intent);
        SDKWrapper.getInstance().onNewIntent(intent);
    }

    @Override
    protected void onRestart() {
        super.onRestart();
        SDKWrapper.getInstance().onRestart();
    }

    @Override
    protected void onStop() {
        super.onStop();
        SDKWrapper.getInstance().onStop();
    }

    @Override
    public void onBackPressed() {
        SDKWrapper.getInstance().onBackPressed();
        super.onBackPressed();
    }

    @Override
    public void onConfigurationChanged(Configuration newConfig) {
        SDKWrapper.getInstance().onConfigurationChanged(newConfig);
        super.onConfigurationChanged(newConfig);
    }

    @Override
    protected void onRestoreInstanceState(Bundle savedInstanceState) {
        SDKWrapper.getInstance().onRestoreInstanceState(savedInstanceState);
        super.onRestoreInstanceState(savedInstanceState);
    }

    @Override
    protected void onSaveInstanceState(Bundle outState) {
        SDKWrapper.getInstance().onSaveInstanceState(outState);
        super.onSaveInstanceState(outState);
    }

    @Override
    protected void onStart() {
        SDKWrapper.getInstance().onStart();
        super.onStart();
    }
//    public static void loadJiLiVideo(){
//        jili();
//    }
//
//    public static void loadQuanPingVideo(){
//        quanPing();
//    }
//    //激励视频
//    public static void jili(){
//
//        AdSlot adSlot = new AdSlot.Builder()
//                .setCodeId("946743689")
//                .setRewardName("金币") //奖励的名称 选填
//                .setRewardAmount(1)  //奖励的数量 选填
//                //模板广告需要设置期望个性化模板广告的大小,单位dp,激励视频场景，只要设置的值大于0即可
//                //且仅是模板渲染的代码位ID使用，非模板渲染代码位切勿使用
//                .setExpressViewAcceptedSize(500,500)
//                .setUserID("tag123")//tag_id
//                .setMediaExtra("media_extra") //附加参数
//                .setOrientation(TTAdConstant.VERTICAL) //必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
//                .build();
//
//        mTTAdNative.loadRewardVideoAd(adSlot, new TTAdNative.RewardVideoAdListener() {
//            //请求广告失败
//            @Override
//            public void onError(int code, String message) {
//
//            }
//            //视频广告加载后，视频资源缓存到本地的回调，在此回调后，播放本地视频，流畅不阻塞。
//            @Override
//            public void onRewardVideoCached() {
//                //开发者做一个标识
//                isLoadVideoSuccess = true;
//            }
//
//            @Override
//            public void onRewardVideoCached(TTRewardVideoAd ttRewardVideoAd) {
//
//            }
//
//            //视频广告的素材加载完毕，比如视频url等，在此回调后，可以播放在线视频，网络不好可能出现加载缓冲，影响体验。
//            @Override
//            public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
//                //开发者做一个标识
//                isLoadVideoSuccess = false;
//
//                mttRewardVideoAd= ad;
//
//                mttRewardVideoAd.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
//                    //广告的下载bar点击回调
//                    @Override
//                    public void onAdVideoBarClick() {
//
//                    }
//                    //视频广告关闭回调
//                    @Override
//                    public void onAdClose() {
//                        Log.i("test", "onAdClose");
//                        jili();
//                    }
//                    //视频播放完成回调
//                    @Override
//                    public void onVideoComplete() {
//                        Log.i("test", "onVideoComplete");
//                    }
//                    //视频广告播放错误回调
//                    @Override
//                    public void onVideoError() {
//                        Log.i("test", "onVideoError");
//                    }
//
//                    //视频播放完成后，奖励验证回调，rewardVerify：是否有效，rewardAmount：奖励梳理，rewardName：奖励名称，code：错误码，msg：错误信息
//                    @Override
//                    public void onRewardVerify(boolean rewardVerify, int rewardAmount, String rewardName,int code,String msg) {
//                        if(rewardVerify)
//                            Log.i("test", "激励视频发放奖励");
//                    }
//                    //视频广告跳过回调
//                    @Override
//                    public void onSkippedVideo() {
//                        Log.i("test", "onSkippedVideo");
//                    }
//                    //视频广告展示回调
//                    @Override
//                    public void onAdShow() {
//                        Log.i("test", "onAdShow");
//                    }
//                });
//            }
//        });
//    }
//    //全屏视频
//    public static void quanPing(){
//
//        AdSlot adSlot = new AdSlot.Builder()
//                .setCodeId("887571569")
//                //模板广告需要设置期望个性化模板广告的大小,单位dp,激励视频场景，只要设置的值大于0即可
//                //且仅是模板渲染的代码位ID使用，非模板渲染代码位切勿使用
//                .setExpressViewAcceptedSize(500,500)
//                .setSupportDeepLink(true)
//                .setOrientation(TTAdConstant.HORIZONTAL)//必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
//                .build();
//
//        mTTAdNative.loadFullScreenVideoAd(adSlot, new TTAdNative.FullScreenVideoAdListener() {
//            @Override
//            public void onError(int i, String s) {
//                Log.i("video","全屏广告加载视频");
//            }
//
//            @Override
//            public void onFullScreenVideoAdLoad(TTFullScreenVideoAd ttFullScreenVideoAd) {
//                Log.i("video","全屏广告加载视频");
//                mTTFullScreenVideoAd = ttFullScreenVideoAd;
//
//                mTTFullScreenVideoAd.setFullScreenVideoAdInteractionListener(new TTFullScreenVideoAd.FullScreenVideoAdInteractionListener() {
//                    //广告的展示回调
//                    @Override
//                    public void onAdShow() {
//                        Log.i("video","全屏广告显示回调");
//                    }
//                    //广告的下载bar点击回调
//                    @Override
//                    public void onAdVideoBarClick() {
//
//                    }
//                    //广告关闭的回调
//                    @Override
//                    public void onAdClose() {
//                        Log.i("video","全屏广告关闭回调");
//                        quanPing();
//                    }
//                    //视频播放完毕的回调
//                    @Override
//                    public void onVideoComplete() {
//                        Log.i("video","全屏广告播放完毕");
//                        Toast.makeText(activity,"全屏视频奖励",new Integer(3));
//                    }
//                    //跳过视频播放
//                    @Override
//                    public void onSkippedVideo() {
//                        Log.i("video","全屏广告跳过");
//                    }
//                });
//            }
//
//            @Override
//            public void onFullScreenVideoCached() {
//
//            }
//
//            @Override
//            public void onFullScreenVideoCached(TTFullScreenVideoAd ttFullScreenVideoAd) {
//
//            }
//        });
//    }
//    public static void showJiLiVideo() {
//
//        activity.runOnUiThread(new Runnable() {
//            @Override
//            public void run() {
//                if (activity.mttRewardVideoAd != null) {
//                    //step6:在获取到广告后展示
//                    //该方法直接展示广告
//                    activity.mttRewardVideoAd.showRewardVideoAd(activity);
//                    //展示广告，并传入广告展示的场景
//                    activity.mttRewardVideoAd = null;
//                } else {
//                    Log.e("test", "请先加载广告");
//                }
//            }
//        });
//
//    }
//    public static void showQuanPingVideo() {
//
//        activity.runOnUiThread(new Runnable() {
//            @Override
//            public void run() {
//                if (activity.mTTFullScreenVideoAd != null) {
//                    //step6:在获取到广告后展示
//                    //该方法直接展示广告
//                    activity.mTTFullScreenVideoAd.showFullScreenVideoAd(activity);
//                    //展示广告，并传入广告展示的场景
//                    activity.mTTFullScreenVideoAd = null;
//                } else {
//                    Log.e("test", "请先加载广告");
//                }
//            }
//        });
//
//    }
}