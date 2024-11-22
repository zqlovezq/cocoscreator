/*
 * @Descripttion: 红点管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { kNegativeOneNumber } from "./CommonInterface";

const {ccclass, property} = cc._decorator;

export enum RedDotType{
    AllianceApplyInfo        = 1, //联盟申请消息
    AllianceSupport          = 2, //联盟支援
    HasNewCard               = 3, //新卡牌
    NewFightInvitation       = 4, //联盟新战斗邀请
    NewChatMsg               = 5, //新聊天信息
    NewMail                  = 6, //新邮件消息
    NewFriendApply           = 7, //新好友申请
    NewFriendFightInvitation = 8, //新的好友战斗邀请
    RainbowTask              = 9, //彩虹任务
    SevenSignInActivity      = 10, //七日签到登录活动
    HasNewEmotion            = 11, //新表情
    HasNewMap                = 12, //新战场地图
    NewAllianceInnerMsg      = 13, //新联盟内部消息
    TenConsecutiveBox        = 14, //十连宝箱
}

interface IRedDotVisible{
    msg: LOCAL_MESSAGE;
    bVisible: boolean;
    extraParam: any;
}

export interface IMessageResult{
    bVisible: boolean;
    extraParam: any;
}

@ccclass
export default class RedDotManager {

    private _bInit: boolean = false;
    private _reddot_map: Map<RedDotType, IRedDotVisible> = new Map();
    //private _reddot_update_msg: Map<RedDotType, LOCAL_MESSAGE> = new Map();
   
    
    private static _instance: RedDotManager = null;
    public static getInstance(): RedDotManager {
        if (!RedDotManager._instance){
            RedDotManager._instance = new RedDotManager();
            RedDotManager._instance && RedDotManager._instance.init();
        }
        return RedDotManager._instance;
    }

    private init(){
        if(this._bInit){
            return;
        }
        
        this._bInit = true;
        this._reddot_map.set(RedDotType.AllianceApplyInfo,        {msg: LOCAL_MESSAGE.LocalMsg_UpdateAllianceBtnReddot, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.AllianceSupport,          {msg: LOCAL_MESSAGE.LocalMsg_UpdateAllianceSupportReddot, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.HasNewCard,               {msg: LOCAL_MESSAGE.LocalMsg_NewCard, bVisible: false, extraParam: null});
        //this._reddot_map.set(RedDotType.NewFightInvitation,       {msg: LOCAL_MESSAGE.LocalMsg_NotifyNewFightInvitation, bVisible: false, extraParam: kNegativeOneNumber});
        this._reddot_map.set(RedDotType.NewAllianceInnerMsg,      {msg: LOCAL_MESSAGE.LocalMsg_UpdateAllianceBtnReddot, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.NewMail,                  {msg: LOCAL_MESSAGE.LocalMsg_NotifyNewMail, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.NewFriendApply,           {msg: LOCAL_MESSAGE.LocalMsg_NewFriendApply, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.NewFriendFightInvitation, {msg: LOCAL_MESSAGE.LocalMsg_NotifyNewFightInvitation, bVisible: false, extraParam: kNegativeOneNumber});
        this._reddot_map.set(RedDotType.SevenSignInActivity,      {msg: LOCAL_MESSAGE.LocalMsg_UpdateSevenSignInActivityRedDot, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.HasNewEmotion,            {msg: LOCAL_MESSAGE.LocalMsg_NewEmotion, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.HasNewMap,                {msg: LOCAL_MESSAGE.LocalMsg_NewBattleMap, bVisible: false, extraParam: null});
        this._reddot_map.set(RedDotType.TenConsecutiveBox,        {msg: LOCAL_MESSAGE.LocalMsg_UpdateTenConsecutiveBoxRedDot, bVisible: false, extraParam: null});
    }

    /* 更新小红点的可见性
     * @param type      红点类型
     * @param bVisible  是否可见
     */
    public UpdateRedDot(type: RedDotType, bVisible: boolean, extraParam?: any){
        if(this._reddot_map.has(type)){
            //let oldVal = this._reddot_map.get(type).bVisible;
            //if(oldVal !== bVisible){
                this._reddot_map.get(type).bVisible = bVisible;
                Net.pushLoaclMessage(this._reddot_map.get(type).msg, {bVisible: bVisible, extraParam: extraParam});
            //}
        }
    }

    /* 检测下红点类型【用于MainScene场景监听了相关红点，但是玩家目前在其他场景，MainScene场景接收不到消息】
     * @param type  红点类型
     */
    public CheckRedDot(type: RedDotType){
        if(this._reddot_map.has(type)){
            let retData = this._reddot_map.get(type);
            Net.pushLoaclMessage(this._reddot_map.get(type).msg, retData);
        }
    }

    /* 获取红点类型是否可见
     * @param type 红点类型
     */
    public GetRedDotVisible(type: RedDotType){
        if(this._reddot_map.has(type)){
            return this._reddot_map.get(type).bVisible;
        }
        return false;
    }

    /* 获取红点类型的附加参数值
     * @param type 红点类型
     */
    public GetRedDotTypeExtraValue(type: RedDotType){
        if(this._reddot_map.has(type)){
            return this._reddot_map.get(type).extraParam;
        }

        return null;
    }

    /* 清空联盟所有小红点
     */
    public CleanAllianceRedTip(){
        this.UpdateRedDot(RedDotType.NewFightInvitation,  false, null);
        this.UpdateRedDot(RedDotType.AllianceSupport,     false, null);
        this.UpdateRedDot(RedDotType.NewAllianceInnerMsg, false, null);
    }
    
    public Destroy(){
        this._reddot_map.clear();   
    }
}
