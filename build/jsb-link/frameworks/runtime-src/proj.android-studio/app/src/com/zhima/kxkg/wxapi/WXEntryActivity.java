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
        String code = null;
        switch (baseResp.errCode) {
            case BaseResp.ErrCode.ERR_OK://用户同意,只有这种情况的时候code是有效的
                System.out.println("==========用户同意 ===========");
                code = ((SendAuth.Resp) baseResp).code;
                System.out.println("==========code is ===========" + code);
                AppActivity.callJsFunction(code);
                break;
            case BaseResp.ErrCode.ERR_AUTH_DENIED://用户拒绝授权
                System.out.println("==========用户拒绝授权 ===========");
                break;
            case BaseResp.ErrCode.ERR_USER_CANCEL://用户取消
                System.out.println("==========用户取消 ===========");
                break;

            default://发送返回

                break;
        }
        finish();
    }
}
