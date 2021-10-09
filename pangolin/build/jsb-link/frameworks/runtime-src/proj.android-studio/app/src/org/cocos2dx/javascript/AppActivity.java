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
import android.graphics.PixelFormat;
import android.util.Log;

import org.cocos2dx.lib.Cocos2dxActivity;
import org.cocos2dx.lib.Cocos2dxGLSurfaceView;
//新增代码
import org.cocos2dx.lib.Cocos2dxJavascriptJavaBridge;

import android.os.Bundle;

import android.content.Intent;
import android.content.res.Configuration;
import android.view.LayoutInflater;
import android.view.View;
import android.view.ViewGroup;
import android.widget.EditText;
import android.widget.FrameLayout;
import android.widget.Toast;

import com.bytedance.sdk.openadsdk.AdSlot;
import com.bytedance.sdk.openadsdk.TTAdConstant;
import com.bytedance.sdk.openadsdk.TTAdLoadType;
import com.bytedance.sdk.openadsdk.TTAdManager;
import com.bytedance.sdk.openadsdk.TTAdNative;
import com.bytedance.sdk.openadsdk.TTAdSdk;
import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
import com.bytedance.sdk.openadsdk.TTNativeExpressAd;
import com.bytedance.sdk.openadsdk.TTRewardVideoAd;
import com.tencent.mm.opensdk.modelmsg.SendAuth;
//新增代码
import com.tencent.mm.opensdk.openapi.IWXAPI;
//新增代码
import com.tencent.mm.opensdk.openapi.WXAPIFactory;
import com.zhima.kxkg.R;
//新增代码
import static org.cocos2dx.lib.Cocos2dxHelper.getActivity;
import java.util.List;
import java.util.Timer;
//新增代码
import java.util.TimerTask;

import org.json.JSONException;
import org.json.JSONObject;
import cn.thinkingdata.android.ThinkingAnalyticsSDK;

public class AppActivity extends Cocos2dxActivity {
    //新增代码wx
    public static String wx_appid = "wx0995590d8c88c34e";
    public static IWXAPI wx_api;
    //-----------------sdk
    public static AppActivity activity = null;
    public static String TAG = "cocos";
    public static TTAdNative mTTAdNative = null;
    private TTNativeExpressAd mTTAd;//banner
    private TTNativeExpressAd TableScreen;//插屏
    //-------------------------------------------------------
    private View mSplashContainer;
    private FrameLayout adLayout;
    public static int isAnalog = 0;//是否模拟点击开屏
    public static TTRewardVideoAd mttRewardVideoAd = null;
    public static TTFullScreenVideoAd mTTFullScreenVideoAd = null;
    private EditText mEtWidth;
    private EditText mEtHeight;
    public static boolean isLoadVideoSuccess = false;
    private FrameLayout mExpressContainer;
    private ThinkingAnalyticsSDK instance = MyApplication.SSInstance;
    //    -------------------------------------------------------
    public static String BannerId= "946800987";//Banner
    public static String videoCode= "946799066";//激励视频
    public static String ScreenCode= "946800991";//插屏
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
        activity=this;
        Log.i(TAG, "init");
        TTAdManager ttAdManager = TTAdManagerHolder.get();
        TTAdManagerHolder.get().requestPermissionIfNecessary(this);
        mTTAdNative = TTAdSdk.getAdManager().createAdNative(activity);
        creatrBannerView();
        creatrScreenView();
        //预加载激励视频
        loadAd();
    }
    public FrameLayout getFrame() {
        return this.mFrameLayout;
    }
    //    创建插屏的view
    public  void creatrScreenView(){
        FrameLayout.LayoutParams localLayoutParams = new FrameLayout.LayoutParams(ViewGroup.LayoutParams.MATCH_PARENT, ViewGroup.LayoutParams.MATCH_PARENT);
        mSplashContainer = LayoutInflater.from(this).inflate(R.layout.activity_splash, getFrame(), false);
        adLayout = mSplashContainer.findViewById(R.id.splash_container);
        getFrame().addView(mSplashContainer, localLayoutParams);
    }
    //创建banner的view
    public  void creatrBannerView(){
        //原生的view直接添加到cocos的view内
        //R代表你是哪个包名的R文件，然后把创建好的view嵌入在你的cocosview里，不要使用setContentView(R.layout.activity_native_express);创建view
        View layout = LayoutInflater.from(this).inflate(R.layout.activity_banner, null);
        mFrameLayout.addView(layout);
        mExpressContainer = (FrameLayout) findViewById(R.id.banner_container);
        //mFrameLayout.addView(view, layoutParams);
        //如已绘制SurfaceView则在surfaceView上一层绘制,必须addView之后使用
        //getGLSurfaceView().setZOrderMediaOverlay(true);
        //cocos的view是否在上层
        //getGLSurfaceView().setZOrderOnTop(true);
        getGLSurfaceView().getHolder().setFormat(PixelFormat.TRANSLUCENT);
    }
    //新增代码
    public static void weixin_Init() {
        wx_api = WXAPIFactory.createWXAPI(getActivity(),wx_appid,true);
        wx_api.registerApp(wx_appid);
    }

    //新增代码
    public static void weixin_login(String data) {
        Log.e("cocos","AppActivity weixin_login");
        SendAuth.Req req =new SendAuth.Req();
        req.scope ="snsapi_userinfo";
        req.state = "wechat_sdk_demo_test";
        System.out.println("req is " + req);
        //利用微信api发送请求
        wx_api.sendReq(req);
    }
    public void sendJs(final String evalStr){
        activity.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Cocos2dxJavascriptJavaBridge.evalString(evalStr);
            }
        });

    };
    public static void dot(String eventId,String jsonObject){
        Log.i(TAG, eventId);
        try {
            JSONObject properties = new JSONObject(jsonObject);
            Log.i(TAG, "dot--------eventId-----"+eventId+"--------"+jsonObject);
            if(jsonObject!=null){
                ShushuAnalysisHelp.track(eventId,properties);
            }else{
                ShushuAnalysisHelp.track(eventId);
            }
        } catch (Throwable e) {
            e.printStackTrace();
        }
    };
    //新增代码(回调函数)
    public static void callJsFunction(final String value) {
        System.out.println("Enter the callJsFunction" + value);
        final String exes = "cc.Tools.wxLoginResult(\""+ value + "\")";
        TimerTask task = new TimerTask(){
            public void run(){
                //execute the task
                Cocos2dxGLSurfaceView.getInstance().queueEvent(new Runnable() {
                    @Override
                    public void run() {
                        System.out.println("cocos wxLoginResult  ==  "+ exes);
                        Cocos2dxJavascriptJavaBridge.evalString(exes);
                    }
                });
            }
        };
        Timer timer = new Timer();
        timer.schedule(task, 500);
    }
//    新增代码（回调函数）给玩家奖励
    public static void callJsAdFunction(final Integer value) {
        Log.e(TAG, "callJsAdFunction");
        final String exes = "cc.Tools.adCallBack(\""+ value + "\")";
        TimerTask task = new TimerTask(){
            public void run(){
            //execute the task
                Cocos2dxGLSurfaceView.getInstance().queueEvent(new Runnable() {
                @Override
                public void run() {
                        System.out.println("cocos cc.Tools.adCallBack  ==  "+ exes);
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
    //加载激励视频
    public static void loadAd(){
        Log.i(TAG, "loadAd");
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId(videoCode)
                .setAdLoadType(TTAdLoadType.PRELOAD)
                .setMediaExtra("media_extra")
                .setSupportDeepLink(true)
                .setExpressViewAcceptedSize(500, 500)
                .setUserID("tag123")//用户id,必传参数
                .setOrientation(TTAdConstant.VERTICAL) //必填参数，期望视频的播放方向：TTAdConstant.HORIZONTAL 或 TTAdConstant.VERTICAL
                .build();

        mTTAdNative.loadRewardVideoAd(adSlot, new TTAdNative.RewardVideoAdListener() {
            //请求广告失败
            @Override
            public void onError(int code, String message) {
                Log.e(TAG,code+"------"+String.valueOf(message));
                try {
                    JSONObject properties = new JSONObject();
                    properties.put("ad_preloading","失败");
                    ShushuAnalysisHelp.track("ad_preloading",properties);
                } catch (Throwable e) {
                    e.printStackTrace();
                }
            }
            //视频广告加载后，视频资源缓存到本地的回调，在此回调后，播放本地视频，流畅不阻塞。
            @Override
            public void onRewardVideoCached() {
                //开发者做一个标识
                isLoadVideoSuccess = true;
                Log.e(TAG, "rewardVideoAd video cached");
//                预加载成功
                try {
                    JSONObject properties = new JSONObject();
                    properties.put("ad_preloading","成功");
                    ShushuAnalysisHelp.track("ad_preloading",properties);
                } catch (Throwable e) {
                    e.printStackTrace();
                }
            }

            @Override
            public void onRewardVideoCached(TTRewardVideoAd ttRewardVideoAd) {
                Log.e(TAG, "ttRewardVideoAd----"+ttRewardVideoAd);
            }

            //视频广告的素材加载完毕，比如视频url等，在此回调后，可以播放在线视频，网络不好可能出现加载缓冲，影响体验。
            @Override
            public void onRewardVideoAdLoad(TTRewardVideoAd ad) {
                //开发者做一个标识
                isLoadVideoSuccess = false;

                mttRewardVideoAd= ad;

                mttRewardVideoAd.setRewardAdInteractionListener(new TTRewardVideoAd.RewardAdInteractionListener() {
                    //广告的下载bar点击回调
                    @Override
                    public void onAdVideoBarClick() {
                        Log.e(TAG, "rewardVideoAd bar click");
                    }
                    //视频广告关闭回调
                    @Override
                    public void onAdClose() {
                        Log.i(TAG, "onAdClose");
                        loadAd();
                    }
                    //视频播放完成回调
                    @Override
                    public void onVideoComplete() {
                        Log.i(TAG, "onVideoComplete");
                    }
                    //视频广告播放错误回调
                    @Override
                    public void onVideoError() {
                        Log.i(TAG, "onVideoError");
                    }

                    //视频播放完成后，奖励验证回调，rewardVerify：是否有效，rewardAmount：奖励梳理，rewardName：奖励名称，code：错误码，msg：错误信息
                    @Override
                    public void onRewardVerify(boolean rewardVerify, int rewardAmount, String rewardName,int code,String msg) {
                        if(rewardVerify)
                            Log.i(TAG, "激励视频发放奖励"+"rewardAmount="+rewardAmount+"------rewardName="+rewardName+"-------code"+code+"--------msg="+msg);
                    }
                    //视频广告跳过回调
                    @Override
                    public void onSkippedVideo() {
                        Log.i(TAG, "onSkippedVideo");
                    }
                    //视频广告展示回调
                    @Override
                    public void onAdShow() {
                        Log.i(TAG, "onAdShow");
                        //值为ecpm
                        activity.callJsAdFunction(1);
                    }
                });
            }
        });
    }
    //显示激励视频
    public static void showAd() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (activity.mttRewardVideoAd != null) {
                    //step6:在获取到广告后展示
                    Log.e(TAG, "播放广告");
                    //该方法直接展示广告
//                    activity.loadAd();
                    activity.mttRewardVideoAd.showRewardVideoAd(activity);
                    //展示广告，并传入广告展示的场景
                    activity.mttRewardVideoAd = null;
                } else {
                    Log.e(TAG, "请先加载广告");
                    activity.loadAd();
                }
            }
        });

    }
    //显示banner
    public static void showBanner() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.loadBanner(BannerId);
            }
        });//品众:945061385 二进制：945061727
    }
    //隐藏Banner广告
    public static void hideBanner() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (activity.mTTAd != null) {
                    activity.mTTAd.destroy();
                    activity.mExpressContainer.removeAllViews();
                }
            }
        });
    }
    //加载banner
    private void loadBanner(String codeId){
        Log.e(TAG,"loadBanner");
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId("946800987") //广告位id
                .setSupportDeepLink(true)
                .setAdCount(1) //请求广告数量为1到3条
                .setExpressViewAcceptedSize(600,90) //期望模板广告view的size,单位dp
                .setAdLoadType(TTAdLoadType.PRELOAD)//推荐使用，用于标注此次的广告请求用途为预加载（当做缓存）还是实时加载，方便后续为开发者优化相关策略
                .build();
        mTTAdNative.loadBannerExpressAd(adSlot, new TTAdNative.NativeExpressAdListener() {
            //请求失败回调
            @Override
            public void onError(int code, String message) {
                Log.e(TAG,code+"------"+String.valueOf(message));
            }

            //请求成功回调
            @Override
            public void onNativeExpressAdLoad(List<TTNativeExpressAd> ads) {
                Log.e(TAG,"onNativeExpressAdLoad");
                if (ads == null || ads.size() == 0) {
                    return;
                }
                mTTAd = ads.get(0);
                mTTAd.setSlideIntervalTime(10*1000);
                bindAdListener(mTTAd);
                mTTAd.render();
            }
        });
    }
    //监听Banner广告事件
    private void bindAdListener(TTNativeExpressAd ad) {
        ad.setExpressInteractionListener(new TTNativeExpressAd.ExpressAdInteractionListener() {
            @Override
            public void onAdClicked(View view, int type) {
                Log.e(TAG,"onAdClicked");
//                userAction("bannerdianji","banner广告点击");
//                TToast.show(mContext, "广告被点击");
            }

            @Override
            public void onAdShow(View view, int type) {
                Log.e(TAG,"onAdShow");
//                userAction("bannerbaoguang","banner广告曝光");
//                TToast.show(mContext, "广告展示");
            }

            @Override
            public void onRenderFail(View view, String msg, int code) {
                Log.e(TAG, "render fail:" + (System.currentTimeMillis()));
//                TToast.show(mContext, msg+" code:"+code);
            }

            @Override
            public void onRenderSuccess(View view, float width, float height) {
                Log.e(TAG, "render suc:" + (System.currentTimeMillis()));
                //返回view的宽高 单位 dp
                Log.e(TAG,"渲染成功");
                mExpressContainer.removeAllViews();
                mExpressContainer.addView(view);
            }
        });
    }
    //显示插屏广告
    public static void showTableScreen() {
        System.out.println("执行");
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.loadScreen(ScreenCode);
            }
        });
    }
    //隐藏插屏广告
    public static void hideTableScreen() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (activity.TableScreen != null) {
                    activity.TableScreen.destroy();
                    activity.TableScreen = null;
                }
            }
        });
    }
    //加载插屏广告
    private void loadScreen(String codeId) {
        float expressViewWidth = 300;
        float expressViewHeight = 300;
        try {
            expressViewWidth = Float.parseFloat(mEtWidth.getText().toString());
            expressViewHeight = Float.parseFloat(mEtHeight.getText().toString());
        } catch (Exception e) {
            expressViewHeight = 0; //高度设置为0,则高度会自适应
        }
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot = new AdSlot.Builder()
                .setCodeId(codeId) //广告位id
                .setSupportDeepLink(true)
                .setAdCount(1) //请求广告数量为1到3条
                .setExpressViewAcceptedSize(expressViewWidth, expressViewHeight) //期望模板广告view的size,单位dp
                .setImageAcceptedSize(640, 320)//这个参数设置即可，不影响模板广告的size
                .build();
        //step5:请求广告，对请求回调的广告作渲染处理
        mTTAdNative.loadInteractionExpressAd(adSlot, new TTAdNative.NativeExpressAdListener() {
            @Override
            public void onError(int code, String message) {
//                TToast.show(mContext, "load error : " + code + ", " + message);
            }

            @Override
            public void onNativeExpressAdLoad(List<TTNativeExpressAd> ads) {
                if (ads == null || ads.size() == 0) {
                    return;
                }
                TableScreen = ads.get(0);
                bindloadScreen(TableScreen);
//                startTime = System.currentTimeMillis();
                TableScreen.render();
            }
        });
    }
    //监听插屏广告事件
    private void bindloadScreen(TTNativeExpressAd ad) {
        ad.setExpressInteractionListener(new TTNativeExpressAd.AdInteractionListener() {
            @Override
            public void onAdDismiss() {

//                TToast.show(mContext, "广告关闭");
            }

            @Override
            public void onAdClicked(View view, int type) {
//                userAction("chapingdianji","插屏广告点击");

//                TToast.show(mContext, "广告被点击");
            }

            @Override
            public void onAdShow(View view, int type) {
//                userAction("chapingbaoguang","插屏广告曝光");
//                TToast.show(mContext, "广告展示");
                view.callOnClick();
            }

            @Override
            public void onRenderFail(View view, String msg, int code) {
//                Log.e("ExpressView", "render fail:" + (System.currentTimeMillis() - startTime));
//                TToast.show(mContext, msg+" code:"+code);
            }

            @Override
            public void onRenderSuccess(View view, float width, float height) {
//                Log.e("ExpressView", "render suc:" + (System.currentTimeMillis() - startTime));
                //返回view的宽高 单位 dp
//                TToast.show(mContext, "渲染成功");
                TableScreen.showInteractionExpressAd(activity);

            }
        });

        if (ad.getInteractionType() != TTAdConstant.INTERACTION_TYPE_DOWNLOAD) {
            return;
        }
    }
}