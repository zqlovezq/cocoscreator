package com.zhima.kxkg.wxapi;

import android.app.Activity;

import android.os.Bundle;

import android.os.Message;

import android.widget.Toast;

import com.tencent.mm.opensdk.modelbase.BaseReq;

import com.tencent.mm.opensdk.modelbase.BaseResp;

import com.tencent.mm.opensdk.modelmsg.SendAuth;

import com.tencent.mm.opensdk.openapi.IWXAPI;

import com.tencent.mm.opensdk.openapi.IWXAPIEventHandler;

import org.cocos2dx.javascript.AppActivity;
import android.util.Log;

import java.util.ArrayList;

public class WXEntryActivity extends Activity implements IWXAPIEventHandler
{
    public static int ReqState = 0;// 0为登录， 1为分享
    // private IWXAPIAPI;

    @Override
    protected void onCreate(Bundle savedInstanceState) {
        super.onCreate(savedInstanceState);
        Log.e("WZQ","wxEntryActivity onCreate");
        // 这句话很关键
        try {
            AppActivity.wx_api.handleIntent(getIntent(), this);
        } catch (Exception e) {
            e.printStackTrace();
        }
    }

    @Override
    public void onReq(BaseReq baseReq) {
        System.out.println("Enter the onResp");
    }

    // 向微信发送的请求的响应信息回调该方法
    // @Override
    public void onResp(BaseResp baseResp)
    {
        System.out.println("Enter the onResp");
        if(baseResp.errCode == BaseResp.ErrCode.ERR_OK){
//            String code = ((SendAuth Resp) baseResp).code;
            String code = ((SendAuth.Resp) baseResp).code;
            System.out.println("==========code is ===========" + code);
            AppActivity.callJsFunction(code);
            finish();
        }
    }
}
