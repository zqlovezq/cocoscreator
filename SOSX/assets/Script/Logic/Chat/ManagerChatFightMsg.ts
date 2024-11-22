/*
 * @Descripttion: 战斗邀请数据缓存管理模块
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import {kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import { getServerUtcTime } from "../Utils/GameUtils";


export default class ManagerChatFightMsg{
    private _fight_invitation_list: Set<number> = new Set<number>()//战斗邀请列表 【只记录roomID】

    private static _instance: ManagerChatFightMsg = null;
    public static getInstance(): ManagerChatFightMsg {
        if (!ManagerChatFightMsg._instance){
            ManagerChatFightMsg._instance = new ManagerChatFightMsg();
        }
        return ManagerChatFightMsg._instance;
    }

    public insertFightInvitationRoomID(roomId: number){
        this._fight_invitation_list.add(roomId);
    }

    public removeFightInvitationRoomID(roomId: number){
        if(this._fight_invitation_list.has(roomId)){
            this._fight_invitation_list.delete(roomId);
        }
    }

    public getHaveFightInvitationMsg(){
        return this._fight_invitation_list.size > kZeroNumber;
    }
    
    public destroyAllData(){
        this._fight_invitation_list.clear();
    }

    /* 删除指定roomId的战斗邀请聊天信息
     */
    public removeFightInvitationMsg(roomID: number, channel: proto.ChatChannelType){
        let msgCacheList = ManagerLocalChatMsg.getInstance().getLocalMsgCache(channel);
        if(!msgCacheList){
            return false;
        }

        let roomIdStr = `${roomID}`;
        for(let idx = kZeroNumber; idx < msgCacheList.length; idx++){
            if(proto.GlobalMessageType.AlliancePvpInvitation === msgCacheList[idx].msgType){
                //这块在封装信息的时候做了特殊处理，将roomID赋给了senderUUID，只要为了不去解析具体消息而快速判断
                if(roomIdStr === msgCacheList[idx].senderUUID){
                    msgCacheList.splice(idx, kOneNumber);
                    Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, true);
                    return;
                }
            }
        }
    }
}

/**
 * Description: 包装战斗数据为聊天信息
 * @param fightData  战斗数据
 */
 export function wrapFightInfo(fightData: proto.IAllianceFightStruct, channel: proto.ChatChannelType){
    if(!fightData){return;}
    
    let msgType; 
    (proto.FightType.WorldChannelPvP === fightData.type || proto.FightType.AlliancePvP === fightData.type) && 
        (msgType = proto.GlobalMessageType.MemberFriendlyMatchInviteMsg);
        
    (proto.FightType.WorldChannelPvE === fightData.type || proto.FightType.AlliancePvE === fightData.type) && 
    (msgType = proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg);
    
    let msgInfo           = new proto.ChatMsgData();
    msgInfo.msgSenderName = fightData.overData ? "fight_over" : "fight_start";//用于快速判断是否是同一消息【是开始还是结束】;
    msgInfo.content       = JSON.stringify(fightData);
    msgInfo.msgType       = msgType;
    msgInfo.senderUUID    = `${fightData.roomID}`; //用于快速判断是否是同一消息
    msgInfo.utcTime       = fightData.startTime;   
    ManagerLocalChatMsg.getInstance().pushChatMsg(msgInfo, channel);
    ManagerLocalChatMsg.getInstance().checkFightMsgOverLimit(channel);
}

/**
 * Description: 包装战斗邀请数据为聊天信息
 * @param fightInvitationData  战斗邀请数据
 */
 export function wrapFightInvitationInfo(fightInvitationData: proto.IAllianceFightInviteStruct, channel: proto.ChatChannelType){
    if(!fightInvitationData){return;}
    let leftTime          = getServerUtcTime() - fightInvitationData.startTime;
    let configTimeLimit   = tab.Data.GetKeyValue_ConfigTable().AllianceInvitationTimeLimit;
    let diffTime          = configTimeLimit - leftTime;
    if(diffTime <= kZeroNumber){return;}
    
    let msgInfo             = new proto.ChatMsgData();
    msgInfo.msgSenderName   = fightInvitationData.playerInfo.roleName;
    msgInfo.content         = JSON.stringify(fightInvitationData);
    msgInfo.msgType         = proto.GlobalMessageType.AlliancePvpInvitation;
    msgInfo.utcTime         = fightInvitationData.startTime;
    msgInfo.senderUUID      = `${fightInvitationData.roomID}`;//fightInvitationData.playerInfo.roleID; /* 特殊处理，这样不用解析聊天信息就能取得roomID */
    msgInfo.playerHeadID    = fightInvitationData.playerInfo.indexCard;
    ManagerLocalChatMsg.getInstance().pushChatMsg(msgInfo, channel);
}

/**
 * Description: 清空战斗邀请数据
 */
 export function cleanFightInvitationData(roomID: number, fightType: proto.FightType, channel: proto.ChatChannelType){
    ManagerChatFightMsg.getInstance().removeFightInvitationRoomID(roomID);
    let bHaveFightInvitation = ManagerChatFightMsg.getInstance().getHaveFightInvitationMsg();
    RedDotManager.getInstance().UpdateRedDot(RedDotType.NewFightInvitation, bHaveFightInvitation, fightType);
    ManagerChatFightMsg.getInstance().removeFightInvitationMsg(roomID, channel);
}