/*
 * @Descripttion: 原生端和JS端通讯接口
 */

import { tab } from "../../Table/table_gen";
import NoticePopLayer from "../Notices/NoticePopLayer";
import { showPopLayerV2 } from "../Utils/GameUtils";
import { ANDROID_PACKAGE_NAME, isValidObj, kZeroNumber } from "./CommonInterface";
import Role from "./Role";

export class Native2JsInterface {

    /** 广告相关 **/
    private _startFunc: (error: Error)=>void = null;
    private _completeFunc: (bFinish: boolean)=>void = null;
    private _errorFunc: ()=>void = null;
    private _payFinishFunc: ()=>void = null;
    private _shareCallbackFunc: Function = null;
    private _shareSuccessFunc: ()=>void = null;
    private _shareFailedFunc: ()=>void = null;
    public static s_channelType: tab.ChannelType;

    private static _instance: Native2JsInterface   = null;
    public static getInstance(): Native2JsInterface {
        if (!Native2JsInterface._instance){
            Native2JsInterface._instance = new Native2JsInterface();
            Native2JsInterface.s_channelType = tab.ChannelType.ChannelType_Tencent_youxuan;
        }
        return Native2JsInterface._instance;
    }

    /* 保存广告回调相关事件
     * @param startFunc    开始播放广告的回调事件
     * @param completeFunc 完成广告播放的回调事件
     * @param errorFunc    广告播放出错的回调事件
     */
     public saveAdvertCBEvent(startFunc: (error: Error)=>void, completeFunc: (bFinish:boolean)=>void, errorFunc:()=>void){
        this._startFunc    = startFunc;
        this._completeFunc = completeFunc;
        this._errorFunc    = errorFunc;
    }

    /* 执行开始播放广告回调事件
     */
    public executeStarFunc(){
        this._startFunc && this._startFunc(undefined);
    }

    /* 执行广告播放完毕回调事件
     */
    public executeCompleteFunc(){
        this._completeFunc && this._completeFunc(true);
    }

    /* 执行播放广告出错回调事件
     */
    public executeErrorFunc(){
        this._errorFunc && this._errorFunc();
    }
    
    /* 拉起微信支付
     * @param prepayId   预支付ID
     * @param timestamp  订单时间戳
     * @param nonceStr   随机16位字符串
     * @param sign       签名
     */
    public pullWxPay(prepayId: string, timestamp: number, nonceStr: string, sign: string, payCallback: ()=>void){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        this._payFinishFunc = payCallback;
        if( cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "WxPay", 
                "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;)V", prepayId, timestamp.toString(), nonceStr, sign);

        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 微信支付成功的回调
     */
    public wxPaySuccessCallback(){
        this._payFinishFunc && this._payFinishFunc();
    }

    /**
     
     * Description: 分享到微信
     * @param imageUrl   图片URL地址
     * @param title      标题
     * @param desc       描述
     * @param jumpUrl    跳转地址
     * @param bMoments   是否分享到朋友圈
     * @param cb         回调函数
     */
    public wxShare(imageUrl: string, title: string, desc: string, jumpUrl: string, bMoments: boolean, cb: Function){
        this._shareCallbackFunc = cb;
        this._shareSuccessFunc  = null;
        this._shareFailedFunc  = null;

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "WxShare", 
                "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;B)V", 
                imageUrl, title, desc, jumpUrl, bMoments);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 设置分享成功和失败的回调函数
     */
    public setShareCallbackFunc(successFunc: ()=>void, failedFunc: ()=>void){
        this._shareSuccessFunc = successFunc;
        this._shareFailedFunc  = failedFunc;
    }

    /* 分享到微信的结果
     */
    public wxShareRet(ret: number){
        if(kZeroNumber == ret){
            this._shareCallbackFunc && this._shareCallbackFunc();
        }else{
            this._shareFailedFunc && this._shareFailedFunc();
        }
    }

    /* 退出游戏时，清场工作
     */
    public destroy(){
        this._startFunc         = null;
        this._completeFunc      = null;
        this._errorFunc         = null;
        this._payFinishFunc     = null;
        this._shareCallbackFunc = null;
        this._shareSuccessFunc  = null;
        this._shareFailedFunc   = null;
    }

/******************************* 腾讯优选事件上报接口 *********************************************/
    /* 上报注册事件
     */
    public ReportedRegister(bSuccess: boolean){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedRegister", "(Z)V",  bSuccess);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报登录事件
     */
    public ReportedLogin(bSuccess: boolean){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedLogin", "(Z)V",  bSuccess);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报新手引导事件
     * @param guideID     事件标识符
     * @param type        事件类型
     * @param name        事件名称
     * @param desc        事件描述
     * @param num         第几个任务
     * @param bSuccess    是否完成
     */
    public ReportedNewerGuide(guideID: number, type: string, name: string, desc: string, num: number, bSuccess: boolean){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedNewerGuide", 
                "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IZ)V",  
                guideID, 
                type, 
                name, 
                desc, 
                num, 
                bSuccess);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报创建事件
     */
    public ReportedCreateRole(){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedCreateRole", "(Ljava/lang/String;)V",  Role.Instance.RoleData.name);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报玩家升级事件
     */
    public ReportedUpdateLevel(){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedUpdateLevel", "(I)V",  Role.Instance.RoleData.level);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报分享事件
     */
    public ReportedShare(bSuccess: boolean){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if(cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "ReportedShare", "(Z)V",  bSuccess);
        }else if(cc.sys.os == cc.sys.OS_IOS){

        }
    }

    /* 上报支付事件
     */
     public reportedPayEvent(rechargeID: number){
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        let tabData = tab.Data.RechargeTableByID.getValue(rechargeID);
        if(isValidObj(tabData)){
            if( cc.sys.os == cc.sys.OS_ANDROID){
                jsb.reflection.callStaticMethod(    ANDROID_PACKAGE_NAME, 
                                                    "ReportedPayEvent", 
                                                    "(ILjava/lang/String;III)V", 
                                                    rechargeID, 
                                                    tabData.IAP, 
                                                    tabData.Price, 
                                                    tabData.GoodsType, 
                                                    tabData.GoodsID, 
                                                    tabData.GoodsDesc);
            }else if(cc.sys.os == cc.sys.OS_IOS){
                
            }
        }
    }

    /* 上报购买或者下单事件
     * @param goodsType 
     * @param name 
     * @param id 
     * @param virtualCurrencyType 
     * @param currency 
     * @param num 
     * @param bVirtualCurrency 
     * @param bSuccess 
     */
    public ReportedCheckout(    goodsType: string, 
                                name: string, 
                                id: string, 
                                virtualCurrencyType: string, 
                                currency: string, 
                                num: number, 
                                bVirtualCurrency: string, 
                                bSuccess: boolean)
    {
        if(Native2JsInterface.s_channelType != tab.ChannelType.ChannelType_Tencent_youxuan){
            return;
        }

        if( cc.sys.os == cc.sys.OS_ANDROID){
            jsb.reflection.callStaticMethod(    ANDROID_PACKAGE_NAME, 
                                                "ReportedCheckout", 
                                                "(Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;Ljava/lang/String;IZZ)V", 
                                                goodsType, 
                                                name, 
                                                id, 
                                                virtualCurrencyType, 
                                                currency, 
                                                num,
                                                bVirtualCurrency,
                                                bSuccess);
        }else if(cc.sys.os == cc.sys.OS_IOS){
            
        }
    }

    public JSTest(){
        showPopLayerV2("prefab/NoticePopLayer",NoticePopLayer);
    }
}

window["native_to_js"] = Native2JsInterface.getInstance();