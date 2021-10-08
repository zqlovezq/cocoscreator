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

//import com.bytedance.sdk.openadsdk.AdSlot;
//import com.bytedance.sdk.openadsdk.TTAdConstant;
//import com.bytedance.sdk.openadsdk.TTAdLoadType;
//import com.bytedance.sdk.openadsdk.TTAdManager;
//import com.bytedance.sdk.openadsdk.TTAdNative;
//import com.bytedance.sdk.openadsdk.TTAdSdk;
//import com.bytedance.sdk.openadsdk.TTFullScreenVideoAd;
//import com.bytedance.sdk.openadsdk.TTNativeExpressAd;
//import com.bytedance.sdk.openadsdk.TTRewardVideoAd;


//聚合
import android.widget.Button;
import org.cocos2dx.javascript.TTAdManagerHolder;
import org.cocos2dx.javascript.TToast;
import com.bytedance.msdk.adapter.util.Logger;
import com.bytedance.msdk.api.AdError;
import com.bytedance.msdk.api.AdSlot;
import com.bytedance.msdk.api.TTAdSize;
import com.bytedance.msdk.api.TTMediationAdSdk;
import com.bytedance.msdk.api.TTSettingConfigCallback;
import com.bytedance.msdk.api.banner.TTAdBannerListener;
import com.bytedance.msdk.api.banner.TTAdBannerLoadCallBack;
import com.bytedance.msdk.api.banner.TTBannerViewAd;

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
    private TTBannerViewAd mTTBannerViewAd;//聚合banner
    //-------------------------------------------------------
    private View mSplashContainer;
    private FrameLayout adLayout;
    public static int isAnalog = 0;//是否模拟点击开屏
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
//        TTAdManager ttAdManager = TTAdManagerHolder.get();
//        TTAdManagerHolder.get().requestPermissionIfNecessary(this);
//        mTTAdNative = TTAdSdk.getAdManager().createAdNative(activity);
        creatrBannerView();
        creatrScreenView();
        TTAdManagerHolder.initUnitySdkBanner(this);
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
        Button mButtonDownload = (Button) findViewById(R.id.btn_banner_download);
        mButtonDownload.setOnClickListener(mClickListener);
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
                        System.out.println("chenggong  ==  "+ exes);
                        Cocos2dxJavascriptJavaBridge.evalString(exes);
                    }
                });
            }
        };
        Timer timer = new Timer();
        timer.schedule(task, 500);
    }
    //新增代码(回调函数)返回ecpm
    public static void callJsAdFunction(final Integer value) {
        System.out.println("Enter the callJsFunction" + value);
        final String exes = "cc.Tools.adCallBack(\""+ value + "\")";
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
    //显示banner
    public static void showBanner() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.loadBannerAd();
            }
        });//品众:945061385 二进制：945061727
    }
    //隐藏Banner广告
    public static void hideBanner() {
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (activity.mTTBannerViewAd != null) {
                    activity.mTTBannerViewAd.destroy();
                    activity.mExpressContainer.removeAllViews();
                }
            }
        });
    }
    private void loadBannerAd() {
        /**
         * 注：每次加载banner的时候需要新建一个TTBannerViewAd，否则可能会出现广告填充问题
         * （ 例如：mTTBannerViewAd = new TTBannerViewAd(this, adUnitId);）
         */
        mTTBannerViewAd = new TTBannerViewAd(this, BannerId);
        mTTBannerViewAd.setRefreshTime(30);
        mTTBannerViewAd.setAllowShowCloseBtn(true);//如果广告本身允许展示关闭按钮，这里设置为true就是展示。注：目前只有mintegral支持。
        mTTBannerViewAd.setTTAdBannerListener(ttAdBannerListener);
        //step4:创建广告请求参数AdSlot,具体参数含义参考文档
        AdSlot adSlot = new AdSlot.Builder()
                .setAdStyleType(AdSlot.TYPE_EXPRESS_AD) // banner暂时只支持模版类型，必须手动设置为AdSlot.TYPE_EXPRESS_AD
//                .setBannerSize(TTAdSize.BANNER_300_250)
                .setBannerSize(TTAdSize.BANNER_CUSTOME) // 使用TTAdSize.BANNER_CUSTOME可以调用setImageAdSize设置大小
                .setImageAdSize(600, 90)
                .build();
        //step5:请求广告，对请求回调的广告作渲染处理
        mTTBannerViewAd.loadAd(adSlot, new TTAdBannerLoadCallBack() {
            @Override
            public void onAdFailedToLoad(AdError adError) {
                Log.e(TAG, "load banner ad error : " + adError.code + ", " + adError.message);
                mExpressContainer.removeAllViews();
                // 获取本次waterfall加载中，加载失败的adn错误信息。
                if (mTTBannerViewAd != null)
                    Log.d(TAG, "banner adLoadInfo:" + mTTBannerViewAd.getAdLoadInfoList().toString());
            }

            @Override
            public void onAdLoaded() {
                mExpressContainer.removeAllViews();

                if (mTTBannerViewAd != null) {
                    //横幅广告容器的尺寸必须至少与横幅广告一样大。如果您的容器留有内边距，实际上将会减小容器大小。如果容器无法容纳横幅广告，则横幅广告不会展示
                    View view = mTTBannerViewAd.getBannerView();
                    if (view != null)
                        mExpressContainer.addView(view);
                    Logger.e(TAG, "adNetworkPlatformId: " + mTTBannerViewAd.getAdNetworkPlatformId() + "   adNetworkRitId：" + mTTBannerViewAd.getAdNetworkRitId() + "   preEcpm: " + mTTBannerViewAd.getPreEcpm());

                }
                Log.i(TAG, "banner load success ");
                // 获取本次waterfall加载中，加载失败的adn错误信息。
                if (mTTBannerViewAd != null)
                    Log.d(TAG, "banner adLoadInfo:" + mTTBannerViewAd.getAdLoadInfoList().toString());
            }
        });

    }

    TTAdBannerListener ttAdBannerListener = new TTAdBannerListener() {

        @Override
        public void onAdOpened() {
            TToast.show(activity, "banner onAdOpened ");
            Log.d(TAG, "onAdOpened");

        }

        @Override
        public void onAdLeftApplication() {
            TToast.show(activity, "banner onAdLeftApplication ");
            Log.d(TAG, "onAdLeftApplication");

        }

        @Override
        public void onAdClosed() {
            TToast.show(activity, "banner onAdClosed ");
            Log.d(TAG, "onAdClosed");

        }

        @Override
        public void onAdClicked() {
            TToast.show(activity, "banner onAdClicked ");
            Log.d(TAG, "onAdClicked");

        }

        @Override
        public void onAdShow() {
            TToast.show(activity, "banner onAdShow ");
            Log.d(TAG, "onAdShow");

        }

        /**
         * show失败回调。如果show时发现无可用广告（比如广告过期），会触发该回调。
         * 开发者应该结合自己的广告加载、展示流程，在该回调里进行重新加载。
         * @param adError showFail的具体原因
         */
        @Override
        public void onAdShowFail(AdError adError) {
            TToast.show(activity, "banner onAdShowFail ");
            Log.d(TAG, "onAdShowFail");

            // 开发者应该结合自己的广告加载、展示流程，在该回调里进行重新加载
            loadBannerAd();
        }
    };
    private final View.OnClickListener mClickListener = new View.OnClickListener() {
        @Override
        public void onClick(View v) {
            if (v.getId() == R.id.btn_banner_download) {
                loadAdWithCallback();
            }
        }
    };
    /**
     * config回调
     */
    private TTSettingConfigCallback mSettingConfigCallback = new TTSettingConfigCallback() {
        @Override
        public void configLoad() {
            Log.e(TAG, "load ad 在config 回调中加载广告");
            loadBannerAd();
        }
    };
    private void loadAdWithCallback() {
        /**
         * 判断当前是否存在config 配置 ，如果存在直接加载广告 ，如果不存在则注册config加载回调
         */
        if (TTMediationAdSdk.configLoadSuccess()) {
            Log.e(TAG, "load ad 当前config配置存在，直接加载广告");
            loadBannerAd();
        } else {
            Log.e(TAG, "load ad 当前config配置不存在，正在请求config配置....");
            TTMediationAdSdk.registerConfigCallback(mSettingConfigCallback); //不能使用内部类，否则在ondestory中无法移除该回调
        }
    }
}