package com.cocos.game;

import android.app.Activity;
import android.content.Context;
import android.content.Intent;
import android.content.pm.PackageInfo;
import android.content.pm.PackageManager;
import android.net.Uri;
import android.util.Log;

import com.cocos.lib.CocosHelper;
import com.cocos.lib.JsbBridgeWrapper;

import org.json.JSONException;
import org.json.JSONObject;
import android.os.Handler;
import android.os.Looper;

public class JSBridge {
    public static Activity mMainActivity = null;
    public static String TAG = "JSBridge";
    public   static boolean sdkInitOk=false;

    public static int appType = 1; //包类型， 0.测试、1.正式
    public static  int channelType = 1;//渠道类型， 0.开发 ，后续查看channel配置表枚举
    public static Handler m_Handler = new Handler(Looper.getMainLooper());
    public static void init(Activity activity){
        JSBridge.mMainActivity = activity;
        CocosHelper.setKeepScreenOn(true);
    }

    public static void CallBackToJS(String method,final Object param){
//        ExportJavaFunction.CallBackToJS(JSBridge.class,"callSwitchAccount", "");
        try {
            JSONObject jsonData = new JSONObject();
            jsonData.put("method",method);
            if(param!=null){
                jsonData.put("param", param);
            }
            Log.d(TAG, "bridgeCallback====="+jsonData.toString());
            JsbBridgeWrapper jbw = JsbBridgeWrapper.getInstance();
            jbw.dispatchEventToScript("bridgeCallback",jsonData.toString());

        } catch (JSONException e) {
            e.printStackTrace();
        }
    }
    public static String getAppVersionCode(){
        String defaultVersionCode = "1";
        try {
            Context ctx =JSBridge.mMainActivity;
            if (ctx != null){
                PackageInfo packageInfo = ctx.getApplicationContext()
                        .getPackageManager()
                        .getPackageInfo(ctx.getPackageName(), 0);
                int versionCode = packageInfo.versionCode;
                defaultVersionCode = String.valueOf(versionCode);

            }
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
//       Log.d(TAG,"getAppVersionCode===: " + defaultVersionCode);
        return defaultVersionCode;
    }

    public static String getAppVersionName(){
        String defaultVersionName = "1";
        try {
            Context ctx =JSBridge.mMainActivity;
            if (ctx != null){
                PackageInfo packageInfo = ctx.getApplicationContext()
                        .getPackageManager()
                        .getPackageInfo(ctx.getPackageName(), 0);
                defaultVersionName = packageInfo.versionName;
//                defaultVersionCode = String.valueOf(versionCode);

            }
        } catch (PackageManager.NameNotFoundException e) {
            e.printStackTrace();
        }
//       Log.d(TAG,"getAppVersionCode===: " + defaultVersionCode);
        return defaultVersionName;
    }

    public static int getChannelType() {
        Log.d(TAG, "JSBridge getChannelType" + JSBridge.channelType);
        return JSBridge.channelType;
    }

    public static  int getAppType(){
        Log.d(TAG, "JSBridge getAppType" + JSBridge.appType);
        return  JSBridge.appType;
    }

    public  static void setSdkInitOk(boolean b){
        sdkInitOk=b;
    }
    public  static int getInitSdkOk(){
        Log.d(TAG, "getInitSdkOk JSBridge getInitSdkOk");
        if (sdkInitOk){
            return 1;
        }
        return 0;
    }

    public static void login(String json) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().login();
                    }
                });

    }
    public static void pay(String json) {
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().pay(json);
                    }
                });

    }
    public  static  void intoServer(String json){
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().intoServer(json);
                    }
                });
    }
    public static void createRole(String json){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().createRole(json);
                    }
                });
    }

    public static void roleLevelUp(String json){
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().roleLevelUp(json);
                    }
                });

    }
    public static void initRewardedAd(String json){
//
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().initAdvert();
                    }
                });
    }
    public  static  void showRewardedAd(){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().palyAdvert();
                    }
                });


    }
    public  static  void logout(String json){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().logout();
                    }
                });
    }

    public static  void postEvent(String json){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().postEvent(json);
                    }
                });
    }
    /**
     * sdk退出游戏
     */
    public static void sdkExitGame(String json){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().exitGame(json);
                    }
                });
    }
    public static  void exitGame(){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        JSBridge.mMainActivity.finish();
                    }
                });
    }
    public static  void accountUpgrade(){
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().accountUpgrade();
                    }
                });

    }

    public  static  void  comment(String json){
        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().comment();
                    }
                });

    }

    public static  void share(String json){

        m_Handler.post(
                new Runnable() {
                    public void run() {
                        Play800Skd.getInstance().share(json);
                    }
                });

    }
    public static void restartGame(){
        Context ctx =JSBridge.mMainActivity;
        Intent intent =ctx.getPackageManager().getLaunchIntentForPackage(ctx.getPackageName());
        intent.addFlags(Intent.FLAG_ACTIVITY_CLEAR_TOP);
        ctx.startActivity(intent);
        //杀掉以前进程
        android.os.Process.killProcess(android.os.Process.myPid());


    }


    public static  void testCallBack(String test){
        Log.d(TAG, "testCallBack " +test);

        JSONObject obj = new JSONObject();
        try {
            obj.put("code", 0);
            obj.put("uid","1");
            obj.put("timeStamp", 2);
            obj.put("sign","2");
        } catch (JSONException e) {
            e.printStackTrace();
        }

        JSBridge.CallBackToJS("testCallBack",obj.toString());
    }
    /**
     * 跳转到浏览器
     * @param path
     */
    public static void openURL(String path) {
        Uri uri = Uri.parse(path);
        Intent intent = new Intent(Intent.ACTION_VIEW, uri);
        JSBridge.mMainActivity.startActivity(intent);
        Log.d("JSBridge", "openURL====="+path);
    }

}
