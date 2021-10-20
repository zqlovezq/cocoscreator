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

import com.bytedance.msdk.api.AdError;
import com.bytedance.msdk.api.AdSlot;
import com.bytedance.msdk.api.interstitial.TTInterstitialAd;
import com.bytedance.msdk.api.reward.TTRewardAd;
import com.bytedance.msdk.api.v2.ad.interstitial.GMInterstitialAd;
import com.bytedance.msdk.api.v2.ad.reward.GMRewardAd;
import com.donews.library.common.utility.log.LogUtil;
import com.donews.library.common.utils.DeviceUtils;
import com.donews.library.common.utils.MMKVUtil;
import com.donews.library.share.ISWXSuccessCallBack;
import com.donews.library.share.WXHolderHelp;
import com.video.lib.sdk.listener.InterstitialAdListener;
import com.video.lib.sdk.listener.RewardVideoAdListener;
import com.video.lib.sdk.manager.InterstitialAdManager;
import com.video.lib.sdk.manager.RewardAdLoadManager;

import com.bytedance.msdk.api.banner.TTBannerViewAd;
import com.bytedance.msdk.api.banner.TTAdBannerListener;
import com.zhima.kxkg.R;
//新增代码
import static org.cocos2dx.lib.Cocos2dxHelper.getActivity;
import java.util.List;
import java.util.Timer;
//新增代码
import java.util.TimerTask;

import org.jetbrains.annotations.Nullable;
import org.json.JSONException;
import org.json.JSONObject;
import cn.thinkingdata.android.ThinkingAnalyticsSDK;
public class AppActivity extends Cocos2dxActivity {
    public static AppActivity activity = null;
    public static String TAG = "cocos";
    public static Double Ecpm = 0.0;
    private GMInterstitialAd ttInterstitialAd = null;
    //    -------------------------------------------------------
    public static String videoType = "0";//当前的视频是从哪个type传过来的
//    private FrameLayout mExpressContainer;
//    private TTBannerViewAd mTTBannerViewAd= null;
    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        //新增代码
        Log.e("cocos","AppActivity onCreate");
        // Workaround in https://stackoverflow.com/questions/16283079/re-launch-of-activity-on-home-button-but-only-the-first-time/16447508
        if (!isTaskRoot()) {
            // Android launched another instance of the root activity into an existing task
            //  so just quietly finish and go away, dropping the user back into the activity
            //  at the top of the stack (ie: the last state of this task)
            // Don't need to finish it again since it's finished in super.onCreate .
            return;
        }
        // DO OTHER INITIALIZATION BELOW
        activity=this;
        SDKWrapper.getInstance().init(this);
        //预加载激励视频
        RewardAdLoadManager.loadPreRewardAd(this, "946743828", null);
        callJsAdFunction(Ecpm);
    }
    public FrameLayout getFrame() {
        return this.mFrameLayout;
    }
    //新增代码
    public static void weixin_login(String data) {
        Log.e("cocos","AppActivity weixin_login");
        visitorLogin();
        WXHolderHelp.login(new ISWXSuccessCallBack() {
            @Override
            public void onSuccess(int state, String code) {
                LogUtil.d("login onSuccess code:" + code);
                AppActivity.callJsFunction(code);
            }

            @Override
            public void onFailed(String msg) {
                LogUtil.d("login onFailed msg:" + msg);
            }
        });
    }
    public void sendJs(final String evalStr){
        activity.runOnGLThread(new Runnable() {
            @Override
            public void run() {
                Log.i(TAG, evalStr);
                Cocos2dxJavascriptJavaBridge.evalString(evalStr);
            }
        });

    };
    public static void dot(String eventId,String jsonObject){
        Log.i(TAG, eventId+"dot1");
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
    public static void dot(String eventId){
        Log.i(TAG, eventId+"dot2");
        try {
            ShushuAnalysisHelp.track(eventId);
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
    //新增代码（回调函数）给玩家奖励
    public static void callJsAdFunction(final Double value) {
        Log.e(TAG, "callJsAdFunction"+value);
        final String exes = "cc.Tools.adCallBack(\""+ value + ","+videoType+"\")";
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
    //获取设备信息
    public static void visitorLogin(){
        Log.e(TAG, "visitorLogin");
        try {
            JSONObject jsonObject = new JSONObject();
            jsonObject.put("channel", DeviceUtils.getChannelName());
            jsonObject.put("imei", DeviceUtils.getIMEI());
            jsonObject.put("android_id", DeviceUtils.getAndroidID());
            jsonObject.put("mac", DeviceUtils.getMacAddress());
            jsonObject.put("uid", ShushuAnalysisHelp.INSTANCE.getDistinctId());
            jsonObject.put("oaid", MMKVUtil.instance().get("oaid",""));
            String json = jsonObject.toString();
            Log.e(TAG, "visitorLogin="+json);
            activity.sendJs("cc.Tools[\"getDevice\"]("+"'"+"vistroLogin"+"'"+","+"'"+json+"'"+")");
        } catch (Throwable e) {
            e.printStackTrace();
        }
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
        RewardAdLoadManager.loadRewardVideoAd(activity, "946743828", new RewardVideoAdListener() {
            @Override
            public void onError() {

            }

            @Override
            public void onRewardedAdClosed() {

            }

            @Override
            public void onRewardClick() {

            }

            @Override
            public void onRewardedAdShow(boolean isAdvance, @Nullable GMRewardAd ttNativeAd) {
                LogUtil.d("onRewardedAdShow:");
                if (ttNativeAd != null) {
                    String preEcpm = ttNativeAd.getPreEcpm();
                    if (preEcpm != null) {
                        Double ecpm = Double.valueOf(preEcpm);
                        if (ecpm > 0) {
                            double a = ecpm;
                            activity.callJsAdFunction(a);
                        }
                    }
                }
            }
        });
    }
    //显示激励视频
    public static void showAd(String type) {
        videoType =type;
        Log.e(TAG, "当前的视频类型是="+type);
        loadAd();
    }
    //显示插屏广告
    public static void showTableScreen() {
        System.out.println("cocos-插屏执行");
//        activity.loadScreen();
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                activity.loadScreen();
            }
        });
    }
    //销毁插屏广告
    public static void hideTableScreen() {
        System.out.println("cocos-销毁插屏");
        activity.runOnUiThread(new Runnable() {
            @Override
            public void run() {
                if (activity.ttInterstitialAd != null) {
                    activity.ttInterstitialAd.destroy();
                    activity.ttInterstitialAd = null;
                }
            }
        });
    }
    //加载插屏广告
    private void loadScreen() {
        InterstitialAdManager.loadInsertScreenAd(activity, "946743818", new InterstitialAdListener() {
            @Override
            public void onError(@Nullable Integer code, @Nullable String message) {
                LogUtil.d("cocos---requestInterstitialAd onError code:$code, message:$message");
            }

            @Override
            public void onSuccess() {
                LogUtil.d("cocos---requestInterstitialAd onSuccess");
            }

            @Override
            public void onInterstitialShow(@Nullable GMInterstitialAd ad) {
                LogUtil.d("cocos--requestInterstitialAd onInterstitialShow");
                ttInterstitialAd = ad;
                if (ad != null) {
                    videoType = "6";
                    String preEcpm = ad.getPreEcpm();
                    if (preEcpm != null) {
                        Double ecpm = Double.valueOf(preEcpm);
                        if (ecpm > 0) {
                            double a = ecpm;
                            activity.callJsAdFunction(a);
                        }
                    }
                }
            }

            @Override
            public void onInterstitialAdClick() {
                LogUtil.d("cocos--requestInterstitialAd onInterstitialAdClick");
            }

            @Override
            public void onInterstitialClosed() {
                LogUtil.d("cocos--requestInterstitialAd onInterstitialClosed");
            }

            @Override
            public void onAdOpened() {
                LogUtil.d("cocos--requestInterstitialAd onAdOpened");
            }

            @Override
            public void onAdLeftApplication() {
                LogUtil.d("cocos--requestInterstitialAd onAdLeftApplication");
            }
        });

    }
}