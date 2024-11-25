package com.cocos.game;

import android.app.Activity;

import android.content.Context;
import android.content.DialogInterface;
import android.content.Intent;
import android.content.res.Configuration;
import android.os.Bundle;

import android.util.Log;

import com.example.modulead.ADSDK;
import com.wx.miit.WXMiitmdid;
import com.wx.platform.WXCommPlatform;
import com.wx.platform.callback.WXChannelBindEmailListener;
import com.wx.platform.callback.WXExitListener;
import com.wx.platform.callback.WXInitListener;
import com.wx.platform.callback.WXLoginListener;
import com.wx.platform.callback.WXLogoutListener;
import com.wx.platform.callback.WXPayListener;
import com.wx.platform.callback.WXShareListener;
import com.wx.platform.model.SubmitData;
import com.wx.platform.model.WXPayInfo;
import com.wx.platform.model.WXShareContent;
import com.wx.platform.model.WXUser;
import com.wx.sdk.utils.LogUtils;

import org.json.JSONException;
import org.json.JSONObject;
import java.util.HashMap;
import java.util.Map;
import android.app.AlertDialog.Builder;
import android.content.DialogInterface.OnClickListener;

public class Play800Skd {
    protected static final String TAG = "Play800Skd";
    private static Play800Skd mInstace = null;
    public  Activity mMainActivity = null;
    public  boolean isLogin=false; //是否登录过
    public static Play800Skd getInstance() {
        if (null == mInstace) {
            mInstace = new Play800Skd();
        }
        return mInstace;
    }
   public void initSdk(){
           WXCommPlatform.getInstance().onCreate(this.mMainActivity, new WXInitListener() {
           @Override
           public void onInitSuccess() {
               //AlertShow("初始化成功");
               //TODO 务必初始化成功，再调用登录接口
               Log.d(TAG, "Play800Skd sdk初始化成功");
               JSBridge.setSdkInitOk(true);
          }

           @Override
           public void onInitFailure(String resultMsg) {
               //AlertShow(resultMsg);
               Log.d(TAG, "Play800Skd sdk初始化失败==="+resultMsg);
              JSBridge.setSdkInitOk(false);

           }
       });
    }
    public void  login(){
        Log.d(TAG, "Play800Skd 调用登录");
        WXCommPlatform.getInstance().login(this.mMainActivity, new WXLoginListener() {
            @Override
            public void onLoginSuccess(WXUser user) {
                JSONObject obj = new JSONObject();
                        try {
                            obj.put("code", 0);
                            obj.put("uid", user.getUid());
                            obj.put("sessionId",user.getSessionId());
                            obj.put("data",user.getData());
                        } catch (JSONException e) {
                            e.printStackTrace();
                        }
                Log.d(TAG,"@user.data:"+user.getData());
                Log.d(TAG,"@obj:"+obj.toString());
                Log.d(TAG,"登录成功:@uid:"+user.getUid()+",@sessionId:"+user.getSessionId()+",@data:"+user.getData());
               JSBridge.CallBackToJS("login", obj.toString());
//               LogUtils.d(TAG,"登录成功:@uid:"+user.getUid()+",@sessionId:"+user.getSessionId()+",@data:"+user.getData());
                isLogin=true;
            }

            @Override
            public void onLoginFailure(String resultMsg) {
                JSONObject obj = new JSONObject();
                try {
                    obj.put("code", 1);
                    obj.put("resultMsg", resultMsg);

                } catch (JSONException e) {
                    e.printStackTrace();
                }
                //AlertShow(resultMsg);
                Log.d(TAG,"登录失败---"+resultMsg);
               JSBridge.CallBackToJS("login",obj.toString());

            }
        });
    }
    public  void  intoServer(String result){
        try {
            JSONObject json = new JSONObject(result);
            SubmitData data = new SubmitData();
            data.setTypeId(SubmitData.TYPEID_ENTER_SERVER);//必传,当前情景
            data.setRoleId(json.getString("roleID"));//必传,当前角色ID，必须为数字，若无,可传"0",不能为null
            data.setRoleName(json.getString("roleName"));//必传,当前角色名称,若无,可传"无",不能为null
            data.setRoleLevel(json.getString("roleLevel"));//必传,当前角色等级，必须为数字，若无,可传"0",不能为null
            data.setZoneId(json.getString("serverID"));//必传,当前服务器ID，必须为数字，若无,可传"0",不能为null
            data.setZoneName(json.getString("serverName"));//必传,当前服务器名称，若无,可传"无",不能为null
            data.setVip(json.getString("vipLevel"));//当前角色vip等级,若无,可传"0",不能为null
            data.setPartyName("无");//当前角色帮派,若无,可传"无",不能为null
            data.setCreateRoleTime(json.getString("createRoleTime"));//必传,当前角色创建时间戳,10位
            data.setOnLineTime("0");//当前角色在线总时长,若无,可传"0",不能为null
            WXCommPlatform.getInstance().submitRoleData(this.mMainActivity, data);
            Log.d(TAG, "intoServer 提交用户信息==="+result);
        }
        catch (Exception e){
                Log.d(TAG, "intoServer 提交用户信息==="+e);
            }
    }
    public  void  createRole(String result){
        try {
            JSONObject json = new JSONObject(result);
            SubmitData data = new SubmitData();
            data.setTypeId(SubmitData.TYPEID_CREATE_ROLE);//必传,当前情景
            data.setRoleId(json.getString("roleID"));//必传,当前角色ID，必须为数字，若无,可传"0",不能为null
            data.setRoleName(json.getString("roleName"));//必传,当前角色名称,若无,可传"无",不能为null
            data.setRoleLevel(json.getString("roleLevel"));//必传,当前角色等级，必须为数字，若无,可传"0",不能为null
            data.setZoneId(json.getString("serverID"));//必传,当前服务器ID，必须为数字，若无,可传"0",不能为null
            data.setZoneName(json.getString("serverName"));//必传,当前服务器名称，若无,可传"无",不能为null
            data.setVip(json.getString("vipLevel"));//当前角色vip等级,若无,可传"0",不能为null
            data.setPartyName("无");//当前角色帮派,若无,可传"无",不能为null
            data.setCreateRoleTime(json.getString("createRoleTime"));//必传,当前角色创建时间戳,10位
            data.setOnLineTime("0");//当前角色在线总时长,若无,可传"0",不能为null
            WXCommPlatform.getInstance().submitRoleData(this.mMainActivity, data);
            Log.d(TAG, "createRole 创建角色==="+result);
        }
        catch (Exception e) {
            Log.d(TAG, "createRole 提交用户信息===" + e);
        }
    }
    public  void  roleLevelUp(String result){
        try {
            JSONObject json = new JSONObject(result);
            SubmitData data = new SubmitData();
            data.setTypeId(SubmitData.TYPEID_LEVELUP);//必传,当前情景
            data.setRoleId(json.getString("roleID"));//必传,当前角色ID，必须为数字，若无,可传"0",不能为null
            data.setRoleName(json.getString("roleName"));//必传,当前角色名称,若无,可传"无",不能为null
            data.setRoleLevel(json.getString("roleLevel"));//必传,当前角色等级，必须为数字，若无,可传"0",不能为null
            data.setZoneId(json.getString("serverID"));//必传,当前服务器ID，必须为数字，若无,可传"0",不能为null
            data.setZoneName(json.getString("serverName"));//必传,当前服务器名称，若无,可传"无",不能为null
            data.setVip(json.getString("vipLevel"));//当前角色vip等级,若无,可传"0",不能为null
            data.setPartyName("无");//当前角色帮派,若无,可传"无",不能为null
            data.setCreateRoleTime(json.getString("createRoleTime"));//必传,当前角色创建时间戳,10位
            data.setOnLineTime("0");//当前角色在线总时长,若无,可传"0",不能为null
            WXCommPlatform.getInstance().submitRoleData(this.mMainActivity, data);
            Log.d(TAG, "roleLevelUp 升级==="+result);
        }
        catch (Exception e) {
            Log.d(TAG, "roleLevelUp 升级===" + e);
        }
    }

    public  void exitGame(String result){
        Context context=this.mMainActivity;
        WXCommPlatform.getInstance().exit(this.mMainActivity, new WXExitListener() {
            @Override
            public void onExitSuccess() {
                //AlertShow("SDK回调这里,说明SDK有退出UI,并且退出完成,游戏收到此监听,做关闭游戏处理");
//                finish();
                Log.d(TAG, "sdkUI退出游戏");
                ((Activity)context).finish();
            }

            @Override
            public void onGameExit() {
                //AlertShow("SDK回调这里,说明SDK没有退出UI,需要显示游戏退出UI,做关闭游戏的处理");
                Log.d(TAG, "明SDK没有退出UI,需要显示游戏退出UI,做关闭游戏的处理");
                showCPExitView(context,result);
            }

            @Override
            public void onExitFailure(String resultMsg) {
                //SDK回调这里,说明SDK内部退出逻辑异常,或者取消退出,一般游戏不做处理
                Log.d(TAG, "说明SDK内部退出逻辑异常,或者取消退出,一般游戏不做处理"+resultMsg);
                //AlertShow(resultMsg);
            }
        });
    }
    //模拟游戏推出提示
    private void showCPExitView(final Context context,String result) {
        try {
            String title="系统提示";
            String message="是否退出游戏？";
            String btnOkTxt="退出游戏";
            String btnCancelTxt="取消";
            if(result!=""){
                JSONObject json = new JSONObject(result);
                title=json.getString("title");
                message=json.getString("message");
                btnOkTxt=json.getString("btnOkTxt");
                btnCancelTxt=json.getString("btnCancelTxt");
            }
            Builder mdialog = new Builder(context);
            mdialog.setTitle(title);
            mdialog.setMessage(message);
            mdialog.setPositiveButton(btnOkTxt, new OnClickListener() {
                @Override
                public void onClick(DialogInterface arg0, int arg1) {
                    AlertShow("游戏退出 finish()");
                    //TODO 退出
                    ((Activity)context).finish();
                }
            });
            mdialog.setNegativeButton(btnCancelTxt, new OnClickListener() {

                @Override
                public void onClick(DialogInterface arg0, int arg1) {
                    AlertShow("退出取消 ");
                }
            });
            mdialog.create().show();
        } catch (Exception e) {
            Log.d(TAG, "createRole 提交用户信息===" + e);
        }
    }
    public void AlertShow(String msg) {
        Log.e("Test",msg);
//        if (resultTV!=null){
//            resultTV.setText(msg);
//        }
    }
    public  void logout(){
        try {
            WXCommPlatform.getInstance().logout(this.mMainActivity, new WXLogoutListener() {

                @Override
                public void onLogoutSuccess() {
                    //AlertShow("注销成功,注销游戏,调用登录接口,执行登录逻辑");
                    try {
                        Log.d(TAG, "注销成功,注销游戏");
                        JSONObject obj = new JSONObject();
                        obj.put("code", 0);
                        JSBridge.CallBackToJS( "logout", obj.toString());
                    }catch (Exception e) {
                        Log.d(TAG, "logout 异常" + e);
                    }
                }

                @Override
                public void onLogoutFailure(String resultMsg) {
                    Log.d(TAG, "注销失败" + resultMsg);
                    try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 1);
                        JSBridge.CallBackToJS( "logout", obj.toString());
                    }catch (Exception e) {
                        Log.d(TAG, "logout 异常" + e);
                    }
                    //AlertShow(resultMsg);
                }
            });
        }catch (Exception e) {
            Log.d(TAG, "logout 异常" + e);
        }
    }
    public void postEvent(String result){
        try {
            JSONObject json = new JSONObject(result);
            String eventName=json.getString("eventName");
            Log.d(TAG, "postEvent 上报" + result);
            Map<String, Object> map = new HashMap<String, Object>();
            if(json.has("data")){
                Log.d(TAG, "postEvent 上报wwwwwww");
                JSONObject dataObj=json.getJSONObject("data");
                while(dataObj.keys().hasNext()) {
                    String key = dataObj.keys().next();
                    map.put(key,dataObj.getJSONObject(key));
                }
            }
            WXCommPlatform.getInstance().postEvent(this.mMainActivity, eventName, map);
            Log.d(TAG, "postEvent 上报" + eventName+" : "+map.toString());
        }
        catch (Exception e) {
            Log.d(TAG, "postEvent 异常" + e);
        }
    }
    public void  pay(String result){
        try {
            Log.d("Play800Skd", "Play800Skd 调起支付 参数==="+result);
            JSONObject json = new JSONObject(result);
            WXPayInfo pInfo = new WXPayInfo();
            pInfo.setProductId(json.getString("productld"));//必传,商品id
            pInfo.setProductName(json.getString("buyName"));//必传,商品的名字 如："钻石"
            pInfo.setProductDesc(json.getString("productDesc"));//必传,商品描述  如："充值27大堆钻石"
            pInfo.setRatio(json.getInt("ratio"));//必传,支付比例,如 1:10,充值648元,实际钻石到账6480,则传10
            pInfo.setOrderId(json.getString("objJson"));//必传,游戏支付订单号,如："ttzxx-xx-45x-x"
            pInfo.setRoleId(json.getString("roleID"));//必传,当前角色Id 如："26845412"
            pInfo.setRoleName(json.getString("roleName"));//必传,当前角色名字 如："令狐小冲"
            pInfo.setRoleLevel(json.getInt("roleLevel")+"");//必传,当前角色等级 如："69"
            pInfo.setServerId(json.getString("serverID"));//必传,服务器Id 如 ："128"
            pInfo.setServerName(json.getString("serverName"));
//            pInfo.setServerName(json.getString("serverName"));//必传,服务器的名字 如 ："s128 重生之地"
            pInfo.setGoodsCount(json.getInt("goodNum"));//商品数量
            pInfo.setExtraInfo(json.getString("extraInfo"));//透传字段,接收json格式的字符串
            int money = json.getInt("rmb");//price: 充值金额，以"分"为单位,1元,则传100分；
            Log.d("Play800Skd", "Play800Skd 调起支付 money ==="+money);
            pInfo.setPrice(money);
            Log.d("Play800Skd", "Play800Skd 调起支付 pInfo ==="+pInfo.toString());

            WXCommPlatform.getInstance().pay(this.mMainActivity, pInfo, new WXPayListener() {
                @Override
                public void onPaySuccess(String orderId) {
                    try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 0);
                        obj.put("orderId",orderId);
                        JSBridge.CallBackToJS( "pay", obj.toString());
                        Log.d("Play800Skd", "Play800Skd 支付成功 pInfo ==="+orderId);
                    }catch (Exception e){

                    }
                    //AlertShow("支付成功:@orderId:"+orderId);
                }

                @Override
                public void onPayFailure(String resultMsg, String orderId) {
                    try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 1);
                    obj.put("orderId",orderId);
                    obj.put("resultMsg",resultMsg);
                    JSBridge.CallBackToJS( "pay", obj.toString());
                    Log.d("Play800Skd", "Play800Skd 支付失败 resultMsg===="+resultMsg);
                    }catch (Exception e){

                    }
                }
            });
        }catch (Exception e){
            Log.d("Play800Skd", "Play800Skd 支付 参数错误==="+e);
        }

    }

    //回调code  0用户应该被奖励 1广告初始化完成 2广告加载完毕 3广告加载失败 4广告已经展示 5 广告被点击
    public void initAdvert(){
        ADSDK.getInstance().Init(this.mMainActivity, new ADSDK.ADInterface() {
            @Override
            public void InitSuccess() {
                Log.e(TAG, " 广告初始化InitSuccess: " );
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 1);
                    JSBridge.CallBackToJS("initRewardedAd", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd 广告出生时 参数错误==="+e);
                }
            }

            @Override
            public void clickAd() {
                Log.e(TAG, "广告 clickAd: " );
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 5);
                    JSBridge.CallBackToJS( "initRewardedAd", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd clickAd 参数错误==="+e);
                }
            }

            @Override
            public void loadFail(String s) {
                Log.e(TAG, "广告 loadFail: "+ s);
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 3);
                    JSBridge.CallBackToJS( "initRewardedAd", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd loadFail 参数错误==="+e);
                }
            }

            @Override
            public void loadSuccess() {
                Log.e(TAG, "广告 loadSuccess: ");
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 2);
                    JSBridge.CallBackToJS( "initRewardedAd", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd loadSuccess 参数错误==="+e);
                }
            }

            @Override
            public void onUserRewarded() {
                Log.e(TAG, "广告 onUserRewarded: ");
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 0);
                    JSBridge.CallBackToJS("initRewardedAd", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd onUserRewarded 参数错误==="+e);
                }
                //在此编写发奖逻辑
            }
        });
    }
    public void palyAdvert(){
        Log.d(TAG, "Play800Skd palyAdvert===");
        ADSDK.getInstance().ADPlay(this.mMainActivity);
    }
    public  void onStart(){
        WXCommPlatform.getInstance().onStart(this.mMainActivity);
    }
    public void  onResume(){

        WXCommPlatform.getInstance().onResume(this.mMainActivity);
    }
    public  void  onPause(){
        WXCommPlatform.getInstance().onPause(this.mMainActivity);
    }
    public  void  onRestart(){
        WXCommPlatform.getInstance().onRestart(this.mMainActivity);
    }
    public  void  onStop(){
        WXCommPlatform.getInstance().onStop(this.mMainActivity);
    }
    public  void  onDestroy(){
        WXCommPlatform.getInstance().onDestroy(this.mMainActivity);
    }

    public void onActivityResult(int requestCode, int resultCode, Intent data) {

        WXCommPlatform.getInstance().onActivityResult(this.mMainActivity, requestCode,resultCode, data);

    }


    public void onConfigurationChanged(Configuration newConfig) {

        WXCommPlatform.getInstance().onConfigurationChanged(this.mMainActivity,newConfig);
    }

    protected void onSaveInstanceState(Bundle outState) {

        WXCommPlatform.getInstance().onSaveInstanceState(this.mMainActivity,outState);

    }



    protected void onRestoreInstanceState(Bundle savedInstanceState) {

        WXCommPlatform.getInstance().onRestoreInstanceState(this.mMainActivity,savedInstanceState);

    }

    protected void onNewIntent(Intent intent) {
        WXCommPlatform.getInstance().onNewIntent(this.mMainActivity,intent);
    }


    public void onRequestPermissionsResult(int requestCode, String[] permissions, int[] grantResults) {
        WXCommPlatform.getInstance().onRequestPermissionsResult(this.mMainActivity,requestCode,permissions,grantResults);
    };

    public void accountUpgrade(){
        WXCommPlatform.getInstance().channelBindEmail(this.mMainActivity, new WXChannelBindEmailListener() {
            @Override
            public void channelBindEmailSuccess() {
                //成功回调
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 0);
                    JSBridge.CallBackToJS( "accountUpgrade", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd onUserRewarded 参数错误==="+e);
                }
            }

            @Override
            public void channelBindEmailFail(String s) {
                Log.d(TAG, "Play800Skd channelBindEmailFail 参数错误==="+s);
                //失败回调
                try {
                    JSONObject obj = new JSONObject();
                    obj.put("code", 1);
                    JSBridge.CallBackToJS( "accountUpgrade", obj.toString());

                }catch (Exception e){
                    Log.d(TAG, "Play800Skd channelBindEmailFail 参数错误==="+s);
                }
            }
        });
    }
    public  void  comment(){
        Log.d(TAG, "java 调用 评分");
        WXCommPlatform.getInstance().rateUs(this.mMainActivity);
    }
    public  void  share(String result){
        try {
            Log.d("Play800Skd", "share 分享 参数===" + result);
            JSONObject json = new JSONObject(result);
            String url=json.getString("url");
            WXShareContent shareUrl = new WXShareContent.Builder()
                    .setContentUrl(url).build();



            WXCommPlatform.getInstance().share(this.mMainActivity, shareUrl, new WXShareListener() {

                @Override
                public void onShareLineSuccess() {
                    try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 0);
                        JSBridge.CallBackToJS("share", obj.toString());
                        Log.d("Play800Skd", "分享到line成功");
                    }catch (Exception e){

                    }
                }

                @Override
                public void onShareLineFailure() {
                    try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 1);
                        JSBridge.CallBackToJS("share", obj.toString());
                        Log.d("Play800Skd", "分享到line失败");
                    }catch (Exception e){

                    }
                }

                @Override
                public void onShareFBSuccess() {
                   try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 0);
                       JSBridge.CallBackToJS("share", obj.toString());
                        Log.d("Play800Skd", "分享到facebook成功");
                    }catch (Exception e){

                    }
                }
                @Override
                public void onShareFBFailure(int code, String msg) {

                   try {
                        JSONObject obj = new JSONObject();
                        obj.put("code", 1);
                        JSBridge.CallBackToJS("share", obj.toString());
                        Log.d("Play800Skd", "分享到facebook失败");
                    }catch (Exception e){

                    }
                }

                @Override
                public void onUserCloseShare() {

                }
//                @Override
//                public void onUserCloseShare() {
//
//                    try {
//                        JSONObject obj = new JSONObject();
//                        obj.put("code", 2);
//                        JSBridge.CallBackToJS( "share", obj.toString());
//                        Log.d("Play800Skd", "用户取消分享");
//                    }catch (Exception e){
//
//                    }
//                }
            });

        }catch (Exception e){
            Log.d("Play800Skd", "share 分享 参数错误===" + e);
        }
    }
}

