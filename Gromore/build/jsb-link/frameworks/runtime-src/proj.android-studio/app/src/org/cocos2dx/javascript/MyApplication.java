package org.cocos2dx.javascript;

import android.app.Application;
import android.util.Log;

import org.json.JSONException;
import org.json.JSONObject;

import java.util.ArrayList;
import java.util.List;
import org.cocos2dx.javascript.ShushuAnalysisHelp;
import cn.thinkingdata.android.TDConfig;
import cn.thinkingdata.android.ThinkingAnalyticsSDK;
public class MyApplication extends Application {

    public static String TA_APP_ID = "4eec5788ada54da2a222e21d3df6b8a5";
    public static String TA_SERVER_URL = "https://receiver.ta.thinkingdata.cn";
    public static ThinkingAnalyticsSDK SSInstance = null;
    @Override
    public void onCreate() {
        super.onCreate();
        Log.i("cocos", "onCreate");
//        初始化穿山甲sdk
        TTAdManagerHolder.init(this);
        ShushuAnalysisHelp.init(
                this.getApplicationContext(),
                TA_APP_ID,
                TA_SERVER_URL
        );
        Log.i("cocos", "start_up");
        ShushuAnalysisHelp.track("start_up");
    }
}
