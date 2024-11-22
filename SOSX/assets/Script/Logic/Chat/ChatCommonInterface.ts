/*
 * @Descripttion: 聊天相关通用接口文件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kThreeNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import ManagerChatTimestamp, { IChatTimestamp, ManagerPrivateChatTimestamp } from "./ManagerChatTimestamp";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";
import ManagerPrivateChatMsg, { IPrivateObjData } from "./ManagerPrivateChatMsg";

const kOneMinutes = 60;
/*********************************************
 ************ 聊天消息排序接口 ***************
 *********************************************
 */

/**
 * Description: 实操排序聊天列表
 * @param msgList 
 */
function _sortChatMsg(msgList: proto.IChatMsgData[]){
    msgList.sort((msg1: proto.IChatMsgData, msg2: proto.IChatMsgData): number=>{
        return msg1.utcTime - msg2.utcTime;
    });
}

/**
 * Description: 排序聊天信息
 */
export function sortChatMsgList(msgList: proto.IChatMsgData[], channel: proto.ChatChannelType){
    if(!msgList || msgList.length < kTwoNumber){
        return;
    }

    _sortChatMsg(msgList);
   GroupChatTimestampData(msgList, channel);
}

/**
 * Description: 排序私聊聊天信息
 */
export function sortPrivateChatMsgList(msgList: proto.IChatMsgData[], key: string){
    if(!msgList || msgList.length < kTwoNumber){
        return;
    }

    _sortChatMsg(msgList);
    GroupChatTimestampData(msgList, proto.ChatChannelType.PrivateChannel, key);
}

/**
 * Description: 重置未读聊天消息
 */
export function ResetUnreadMsgOfChat(privateObj: IPrivateObjData = null){
    switch(ManagerLocalChatMsg.CurrentChannel){
        case proto.ChatChannelType.WorldChannel:
        case proto.ChatChannelType.AllianceChannel:
            ManagerLocalChatMsg.ResetChatMsgUnreadCount();
            return;

        case proto.ChatChannelType.PrivateChannel:
            isValidObj(privateObj) && 
                ManagerPrivateChatMsg.ResetChatMsgUnreadCount(privateObj.uuid);
            return;
    }
}

/**
 * Description: 获取未读消息数量
 */
export function GetUnreadMsgCountOfChat(privateObj: IPrivateObjData = null){
    switch(ManagerLocalChatMsg.CurrentChannel){
        case proto.ChatChannelType.WorldChannel:
        case proto.ChatChannelType.AllianceChannel:
            return ManagerLocalChatMsg.GetChatMsgUnreadCount();

        case proto.ChatChannelType.PrivateChannel:
            return isValidObj(privateObj) ?
                ManagerPrivateChatMsg.GetChatMsgUnreadCount(privateObj.uuid) : kZeroNumber;
    }

    return kZeroNumber;
}

/**
 * Description: 重置聊天相关信息
 */
export function ResetChatInfo(){
    ManagerLocalChatMsg.CurrentChannel = proto.ChatChannelType.InValid;
    ManagerPrivateChatMsg.CurrentPrivateObj = kNoneString;
    ManagerPrivateChatMsg.CleanAllChatMsgUnreadCount();
    ManagerLocalChatMsg.CleanAllChatMsgUnreadCount();
}

/**
 * Description: 获取聊天消息缓存列表
 */
export function GetChatMsgCacheList(){
    if(proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel){
        return ManagerPrivateChatMsg.getInstance().getLocalMsgCache(ManagerPrivateChatMsg.CurrentPrivateObj);
    }

    return ManagerLocalChatMsg.getInstance().getLocalMsgCache(ManagerLocalChatMsg.CurrentChannel);
}

/**
 * Description: 生成map的key
 */
export function GenMapKey(friendUUID: string){
    return `${Role.Instance.RoleData.id}_${friendUUID}`;
}

/**
 * Description: 创建聊天时间差数据
 * @param bVisibleHead         是否显示头像
 * @param bVisibleTimestamp    是否显示时间戳
 * @param timestamp            该条消息的时间差
 * @param roleID               该条消息的发送人uuid
 */
export function CreateChatTimestampData(bVisibleHead: boolean, 
                                        bVisibleTimestamp: boolean, 
                                        timestamp: number, 
                                        roleID: string){
    return {
        timestamp: timestamp,
        bVisibleTimestamp: bVisibleTimestamp,
        bVisibleHead: bVisibleHead,
        roleID: roleID,
    };
}

/**
 * Description: 处理聊天时间戳数据
 * @param curTimestampData    当前数据时间戳
 * @param nextTimestampData   下一个数据时间戳
 * @param idx                 数据索引值
 * @param channel             聊天频道
 * @param key                 私聊对象的key
 */
export function DisposeChatTimestampData(curTimestampData: IChatTimestamp, 
                                            nextTimestampData: IChatTimestamp, 
                                            idx: number, 
                                            channel: proto.ChatChannelType, 
                                            key: string = ""){
    switch(channel){
        case proto.ChatChannelType.WorldChannel:
        case proto.ChatChannelType.AllianceChannel:
            ManagerChatTimestamp.getInstance().setChatTimestampData(idx, curTimestampData, channel);
            ManagerChatTimestamp.getInstance().setChatTimestampData(idx + kOneNumber, nextTimestampData, channel);
            return;

        case proto.ChatChannelType.PrivateChannel:
            ManagerPrivateChatTimestamp.getInstance().setChatTimestampData(idx, curTimestampData, key);
            ManagerPrivateChatTimestamp.getInstance().setChatTimestampData(idx + kOneNumber, nextTimestampData, key);
            return;
    }
}

/**
 * Description: 获取聊天时间戳
 */
export function GetChatTimestampData(idx: number, channel: proto.ChatChannelType, key: string){
    switch(channel){
        case proto.ChatChannelType.WorldChannel:
        case proto.ChatChannelType.AllianceChannel:
            return ManagerChatTimestamp.getInstance().getChatTimestampData(idx, channel);

        case proto.ChatChannelType.PrivateChannel:
            return ManagerPrivateChatTimestamp.getInstance().getChatTimestampData(idx, key);
    }

    return null;
}

/**
 * Description: 检测缓存中的数据来判断当前聊天信息的头像和时间戳显示与否
 * @param idx                   当前聊天信息表索引
 * @param curChatData           当前聊天信息数据
 * @param bParamNextHeadVisible 下一条聊天信息头像是否显示
 */
export function CheckChatTimestampCache(idx: number, 
                                        curChatData: proto.IAllianceMsgData, 
                                        bParamNextHeadVisible: boolean, 
                                        channel: proto.ChatChannelType, 
                                        key: string = "")
{
    let bCurVisibleHead  = true;
    let bCurVisibleTp    = true;
    let bNextVisibleTp   = true;
    let bNextVisibleHead = true;
    let cacheData        = GetChatTimestampData(idx - kOneNumber, channel, key);

    //查下缓存中前一条消息状态
    if(cacheData && cacheData.roleID === curChatData.senderUUID){
        let bOverOneMinutes         = curChatData.utcTime - cacheData.timestamp > kOneMinutes;
        cacheData.bVisibleTimestamp = bOverOneMinutes; //超过一分钟，缓存中的该条消息显示时间戳
        bCurVisibleHead             = bOverOneMinutes; //间隔超过一分钟显示头像
        bOverOneMinutes  && (bCurVisibleTp = true); //间隔超过一分钟当前聊天信息显示时间戳
        !bOverOneMinutes && (bCurVisibleTp = !cacheData.bVisibleTimestamp);

    }else{
        bCurVisibleHead = true;
        bCurVisibleTp   = false;
    }

    bNextVisibleTp      = true;
    bNextVisibleHead    = bParamNextHeadVisible;

    //返回值索引-0: 当前聊天信息头像可否显示，1: 当前聊天信息时间戳是否显示, 
    //              2: 下一条聊天信息头像可否显示，3: 下一条聊天信息时间戳可否显示 
    return [bCurVisibleHead, bCurVisibleTp, bNextVisibleHead, bNextVisibleTp];
}

/**
 * Description: 设置聊天时间戳数据
 */
function _setChatTimestampData(idx: number, data: IChatTimestamp, channel: proto.ChatChannelType, key: string = ""){
    switch(channel){
        case proto.ChatChannelType.WorldChannel:
        case proto.ChatChannelType.AllianceChannel:
            ManagerChatTimestamp.getInstance().setChatTimestampData(idx, data, channel);
            return;

        case proto.ChatChannelType.PrivateChannel:
            ManagerPrivateChatTimestamp.getInstance().setChatTimestampData(idx, data, key);
            return;
    }
}

/**
 * Description: 用于处理聊天信息的头像和时间戳显示还是不显示的 
 */
export function GroupChatTimestampData(msgCacheList: proto.IChatMsgData[], channel: proto.ChatChannelType, key: string = ""){    
    let curChatData: proto.IAllianceMsgData  = null;
    let nextChatData: proto.IAllianceMsgData = null;
    let bCurVisibleTp: boolean               = true;
    let bCurVisibleHead: boolean             = true;
    let bNextVisibleTp: boolean              = true;
    let bNextVisibleHead: boolean            = true;
    let bSameRoleUUID: boolean               = false;
    let bCurValidMsgType: boolean            = false;          
    let bNextValidMsgType: boolean           = false; 
    let chatCacheLen                         = msgCacheList.length;
    let retVal;
    for(let idx = kZeroNumber; idx < chatCacheLen; idx++){
        curChatData  = msgCacheList[idx];
        nextChatData = idx === chatCacheLen - kOneNumber ? null: msgCacheList[idx + kOneNumber];

        bCurValidMsgType  = curChatData.msgType === proto.GlobalMessageType.MemberNormalTxtMsg || 
                            curChatData.msgType === proto.GlobalMessageType.MemberEmotionMsg;
        if(nextChatData){
            bNextValidMsgType = nextChatData.msgType === proto.GlobalMessageType.MemberNormalTxtMsg || 
                                nextChatData.msgType === proto.GlobalMessageType.MemberEmotionMsg;
            bSameRoleUUID     = curChatData.senderUUID === nextChatData.senderUUID;
        }else{
            bNextValidMsgType = false;
            bSameRoleUUID     = false;
        }
        
        //当前聊天信息的类型不是 文本或者表情就pass
        if(!bCurValidMsgType){
            _setChatTimestampData(idx, null, channel, key);
            continue;
        }
        
        let curTimestampData: IChatTimestamp  = null;
        let nextTimestampData: IChatTimestamp = null;

        //下一条聊天信息不是文本或者表情
        if(!bNextValidMsgType){
            //查找缓存中的上一条聊天信息有木有 且跟当前聊天信息人是同一人
            retVal = CheckChatTimestampCache(idx, curChatData, true, channel, key);

        }else{ //下一条聊天信息类型是 文本或者表情的

            //当前聊天信息人和下一条聊天信息人不是同一人
            if(!bSameRoleUUID){
                //查下缓存中前一条消息状态
                retVal = CheckChatTimestampCache(idx, curChatData, true, channel, key);
            }else{
                let diffTimestamp = nextChatData.utcTime - curChatData.utcTime; //取这2条信息的时间差
                //前后2条同一个人的消息间隔小于1分钟，前一条消息有头像无时间戳，后一条消息无头像有时间戳
                if(diffTimestamp < kOneMinutes){
                    //查下缓存中前一条消息状态
                    retVal = CheckChatTimestampCache(idx, curChatData, false, channel, key);
                
                }else{ //超过一分钟
                    //查下缓存中前一条消息状态
                    retVal = CheckChatTimestampCache(idx, curChatData, true, channel, key);
                }
            }
        }
        
        bCurVisibleHead   = retVal[kZeroNumber];
        bCurVisibleTp     = retVal[kOneNumber];
        bNextVisibleHead  = retVal[kTwoNumber];
        bNextVisibleTp    = retVal[kThreeNumber];
        curTimestampData  = CreateChatTimestampData(bCurVisibleHead, bCurVisibleTp, curChatData.utcTime, curChatData.senderUUID);               
        nextTimestampData = nextChatData && (CreateChatTimestampData(bNextVisibleHead, bNextVisibleTp, nextChatData.utcTime, nextChatData.senderUUID));
        DisposeChatTimestampData(curTimestampData, nextTimestampData, idx, channel, key);
    }
}

/**
 * Description: 检测消息类型是否是要显示时间戳的类型
 */
function _checkVisibleTimestampMsgType(msgType: proto.GlobalMessageType){
    return msgType === proto.GlobalMessageType.MemberNormalTxtMsg || msgType === proto.GlobalMessageType.MemberEmotionMsg;
}

/**
 * Description: 矫正新聊天信息的时间戳
 * @param idx   当前要检测的聊天信息所在列表中的下标
 */
export function CorrectNewChatInfoTimestamp(    idx: number, 
                                                msgCacheList: proto.IChatMsgData[], 
                                                channel: proto.ChatChannelType, 
                                                key: string = ""){
    if(idx === kZeroNumber){
        let curChatData = GetChatTimestampData(idx, channel, key);
        if(curChatData){
            curChatData.bVisibleHead      = true;
            curChatData.bVisibleTimestamp = true;

            //查下缓存中下一条消息状态
            let cacheData1 = GetChatTimestampData(idx + kOneNumber, channel, key);
            if(cacheData1 && cacheData1.roleID === curChatData.roleID){
                let bOverOneMinutes           = cacheData1.timestamp - curChatData.timestamp > kOneMinutes;
                cacheData1.bVisibleHead       = bOverOneMinutes; //间隔超过一分钟 缓存中下一条信息显示头像
                cacheData1.bVisibleTimestamp  = bOverOneMinutes; //间隔超过一分钟 缓存中下一条信息显示时间戳
                curChatData.bVisibleTimestamp = bOverOneMinutes; //间隔超过一分钟 当前信息显示时间戳
            }

            //查下缓存中下下一条消息状态【如果该条消息头像不显示，时间戳显示，那么上一条的消息时间戳就不能显示】
            let cacheData2 = GetChatTimestampData(idx + kTwoNumber, channel, key);
            if(cacheData2 && cacheData2.roleID === cacheData1.roleID){
                let bOverOneMinutes = cacheData2.timestamp - cacheData1.timestamp > kOneMinutes;
                cacheData1.bVisibleTimestamp = bOverOneMinutes;
            }
        } else {
            let chatData = msgCacheList[idx];
            let bCurValidMsgType  = _checkVisibleTimestampMsgType(chatData.msgType);
            if(!bCurValidMsgType){
                _setChatTimestampData(idx, null, channel, key);
                return;
            }

            let timestampData: IChatTimestamp  = {
                bVisibleHead: true,
                bVisibleTimestamp: true,
                timestamp: chatData.utcTime,
                roleID: chatData.senderUUID
            };

            _setChatTimestampData(idx, timestampData, channel, key);
        }
        // _setChatTimestampData(idx, null, channel, key);
        return;
    }

    /************************************ 此处为新消息处理 ************************************/
    let newChatData = msgCacheList[idx];
    if(newChatData){
        let bCurValidMsgType  = newChatData.msgType === proto.GlobalMessageType.MemberNormalTxtMsg || 
                                newChatData.msgType === proto.GlobalMessageType.MemberEmotionMsg;
        if(!bCurValidMsgType){
            _setChatTimestampData(idx, null, channel, key);
            return;
        }

        let newTimestampData: IChatTimestamp  = {
            bVisibleHead: true,
            bVisibleTimestamp: true,
            timestamp: newChatData.utcTime,
            roleID: newChatData.senderUUID
        };

        //获取缓存中的前一条消息数据
        let preCacheData = GetChatTimestampData(idx - kOneNumber, channel, key);
        if(preCacheData && preCacheData.roleID === newChatData.senderUUID){
            let bOverOneMinutes                 = newChatData.utcTime - preCacheData.timestamp > kOneMinutes;
            newTimestampData.bVisibleHead       = bOverOneMinutes; //间隔超过一分钟就显示头像
            newTimestampData.bVisibleTimestamp  = true; //新消息肯定是要显示时间戳的
            preCacheData.bVisibleTimestamp      = bOverOneMinutes; //间隔超过一分钟，缓存中的前一条信息的时间戳就显示
        }

        _setChatTimestampData(idx, newTimestampData, channel, key);
    }
}

/**
 * Description: 检测合作模式有无禁用的卡牌
 */
export function CheckHaveBannedCard() {
    let deckItems = Role.Instance.getCurrentDeck();
    let lordId    = Role.Instance.getCurrentLord();
    let pveBannedCardList = tab.Data.PveBannedCardTable;
    if(!isValidObj(pveBannedCardList) || pveBannedCardList.length < kOneNumber){
        return false;
    }

    let findIdx = pveBannedCardList.findIndex(tmpObj=>tmpObj.CardID == lordId);
    if(findIdx != kNegativeOneNumber){
        return true;
    }

    for(let item of deckItems) {
        findIdx = pveBannedCardList.findIndex(tmpObj=>tmpObj.CardID == item.staticId);
        if(findIdx != kNegativeOneNumber){
            return true;
        }
    }

    return false;
}