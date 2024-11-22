/*
 * @Descripttion: 聊天模块的通用处理接口
 */

import { proto } from "../../Protocol/client_protocol";
import AlliancePersonelChangeMsgBarPfb from "../Alliance/AlliancePersonelChangeMsgBarPfb";
import { kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import ChatFightDetail from "./ChatFightDetail";
import AllianceSupportChat from "./ChatDetailModel/AllianceSupportChat";
import ChatEmotion from "./ChatEmotion";
import ChatNormalText from "./ChatNormalText";
import ChatOtherSupportPfb from "./ChatOtherSupportPfb";
import ChatSelfSupportPfb from "./ChatSelfSupportPfb";
import ManagerChatTimestamp from "./ManagerChatTimestamp";
import ChatOtherFightInvitation from "./ChatFightInvitation";
import ChatShareCardsDetail from "./ChatShareCardsDetail";
import { GetChatTimestampData } from "./ChatCommonInterface";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";

/**
 * 自身or别人类型枚举
 */
export enum SelfOrOther{
    Other         = 0, /* 对方 */
    Self          = 1, /* 自己 */
    OtherNoneHead = 2, /* 对方无头像 */
    SelfNoneHead  = 3, /* 自己无头像 */
}

/**
 
 * Description: 创建联盟内部消息模块【人事任命等等】

 * @param msg   消息体
 * @param pfb   联盟人事任命消息预制件
 * @param index    cell所在索引
 */
export function createAlliancePersonelMsgModel(msg: proto.IAllianceMsgData, pfb: cc.Prefab, index: number){
    let cell = cc.instantiate(pfb).getComponent(AlliancePersonelChangeMsgBarPfb);
    return cell;
}

/**
 
 * Description: 创建联盟支援聊天消息模块

 * @param msg      消息数据
 * @param pfbList  要生成的组件列表
 * @param index    cell所在索引
 */
export function createAllianceSupportMsgModel(msg: proto.IAllianceMsgData, pfbList: cc.Prefab[], index: number){
    let supportMsgObj: AllianceSupportChat = null;
    try {
        supportMsgObj = JSON.parse(msg.content);
    } catch (error) {
        if(!cc.sys.isNative){throw new Error("联盟支援JSON数据格式错误");}
    }
    
    if(!supportMsgObj){
        if(!cc.sys.isNative){throw new Error("解析联盟支援JSON数据错误");}
        return;
    }

    let idx  = supportMsgObj.ApplicantID === Role.Instance.RoleData.id ? SelfOrOther.Self : SelfOrOther.Other;
    let cell = null;
    (idx === SelfOrOther.Self)  && (cell = cc.instantiate(pfbList[idx]).getComponent(ChatSelfSupportPfb));
    (idx === SelfOrOther.Other) && (cell = cc.instantiate(pfbList[idx]).getComponent(ChatOtherSupportPfb));
    return cell;
}

/**
 
 * Description: 创建普通文本聊天消息模块

 * @param msg      消息体
 * @param pfbList  要生成的组件列表
 * @param index    cell所在索引
 */
export function createNormalTxtMsgModel(msg: proto.IChatMsgData, pfbList: cc.Prefab[], index: number, key){
    /*let txtMsgObj: NormalTextChat = null;
    try {
        txtMsgObj = JSON.parse(msg.content);
    } catch (error) {
        throw new Error("普通文本聊天JSON数据格式错误");
    }
    
    if(!txtMsgObj){
        throw new Error("解析普通文本聊天JSON数据错误");
    }*/

    let bHaveHead = true;
    let data      = GetChatTimestampData(index, ManagerLocalChatMsg.CurrentChannel, key);
    if(data){
        bHaveHead = data.bVisibleHead;
    }
    
    let idx = msg.senderUUID === Role.Instance.RoleData.id ? SelfOrOther.Self : SelfOrOther.Other;
    if(idx === SelfOrOther.Other){idx = !bHaveHead ? SelfOrOther.OtherNoneHead : idx;}
    if(idx == SelfOrOther.Self){idx = !bHaveHead ? SelfOrOther.SelfNoneHead : idx;}
    let cell = cc.instantiate(pfbList[idx]).getComponent(ChatNormalText);
    return cell;
}

/**
 * Description: 创建表情聊天消息模块
 * @param msg      消息数据
 * @param pfbList  要生成的组件列表
 * @param index    cell所在索引
 */
export function createEmotionMsgModel(msg: proto.IChatMsgData, pfbList: cc.Prefab[], index: number){
    /*let emotionMsgObj: EmotionChat = null;
    try {
        emotionMsgObj = JSON.parse(msg.content);
    } catch (error) {
        throw new Error("表情聊天JSON数据格式错误");
    }
    
    if(!emotionMsgObj){
        throw new Error("解析表情聊天JSON数据错误");
    }*/

    let idx  = /*emotionMsgObj.PlayerUUID*/msg.senderUUID === Role.Instance.RoleData.id ? SelfOrOther.Self : SelfOrOther.Other;
    let cell = cc.instantiate(pfbList[idx]).getComponent(ChatEmotion);
    return cell;
}

/**
 * Description: 创建PVP邀请聊天消息模块
 * @param msg      消息数据
 * @param pfbList  要生成的组件列表
 * @param index    cell所在索引
 */
export function createAlliancePvpInvitationModel(msg: proto.IChatMsgData, pfbList:cc.Prefab[], index: number){
    let cell = cc.instantiate(pfbList[kZeroNumber]).getComponent(ChatOtherFightInvitation);
    return cell;
}

/**
 * Description: 创建联盟内PVP详情聊天消息模块
 * @param msg      消息数据
 * @param pfbList  要生成的组件列表
 * @param index    cell所在索引
 */
export function createAlliancePvpDetailModel(msg: proto.IChatMsgData, pfbList: cc.Prefab[], index: number){
    let idx  = msg.senderUUID === Role.Instance.RoleData.id ? SelfOrOther.Self : SelfOrOther.Other;
    let cell = cc.instantiate(pfbList[idx]).getComponent(ChatFightDetail);
    return cell;
}

export function createShareCardsModel(msg: proto.IChatMsgData, pfbList: cc.Prefab[], index: number){
    let idx  = msg.senderUUID === Role.Instance.RoleData.id ? SelfOrOther.Self : SelfOrOther.Other;
    let cell = cc.instantiate(pfbList[idx]).getComponent(ChatShareCardsDetail);
    return cell;
}

export enum RequestPvePathType{
    SEND_PVE_INVITATION    = 1, /* 发送无限防御邀请 */
    RECEIVE_PVE_INVITATION = 2, /* 接受无限防御邀请 */
    NORMAL_FIGHT           = 3, /* 正常的战斗【非联盟中的邀请】 */
}

/**
 * 标记是从哪个页面发送查询剩余无限防御的次数的【主动发送战斗邀请 还是 接受邀请 或者是正常战斗【非联盟中的邀请】]
 */
export class SignRequestPvEPath{
    private _pvePath: RequestPvePathType;
    private _room_id: number;

    private static _instance: SignRequestPvEPath = null;
    public static getInstance(): SignRequestPvEPath {
        if (!SignRequestPvEPath._instance){
            SignRequestPvEPath._instance = new SignRequestPvEPath();
        }
        return SignRequestPvEPath._instance;
    }

    /* 设置无限防御来自的路径是哪个类型
     * @param path    路径类型
     * @param roomId  战斗房间号
     */
    public setPvePath(path: RequestPvePathType, roomId: number){
        this._pvePath = path;
        this._room_id = roomId;
    }

    /* 获取无限防御来自哪个类型的路径
     */
    public getPvePath(){
        return this._pvePath;
    }

    /* 获取无限防御战斗之前保存的roomIDs
     */
    public getSaveRoomID(){
        return this._room_id;
    }
}