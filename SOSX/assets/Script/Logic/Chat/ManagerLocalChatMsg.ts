/*
 * @Descripttion: 管理本地存储的聊天信息类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { CorrectNewChatInfoTimestamp, sortChatMsgList } from "./ChatCommonInterface";
import ManagerChatTimestamp from "./ManagerChatTimestamp";

export default class ManagerLocalChatMsg {
    private kMaxSaveLocalMsgCount = tab.Data.GetKeyValue_ConfigTable().AllianceChatMsgSaveNumber;
    private kMaxShowNumber        = tab.Data.GetKeyValue_ConfigTable().FullScreenShowChatNumber;
    private _alliance_msg_cache: proto.IChatMsgData[] = []; // 公会频道聊天消息缓存列表
    private _world_msg_cache: proto.IChatMsgData[]    = []; //世界频道聊天缓存列表

    static ChatCD: number = 0;
    static CurrentChannel: proto.ChatChannelType;
    private static s_unread_msg_map: Map<proto.ChatChannelType, number> = new Map<proto.ChatChannelType, number>();

    private static _instance: ManagerLocalChatMsg   = null;
    public static getInstance(): ManagerLocalChatMsg {
        if (!ManagerLocalChatMsg._instance){
            ManagerLocalChatMsg._instance = new ManagerLocalChatMsg();
            ManagerLocalChatMsg.s_unread_msg_map.set(proto.ChatChannelType.WorldChannel, kZeroNumber);
            ManagerLocalChatMsg.s_unread_msg_map.set(proto.ChatChannelType.AllianceChannel, kZeroNumber);
        }
        return ManagerLocalChatMsg._instance;
    }

    /* 获取相应频道未读聊天信息数量
     */
    public static GetChatMsgUnreadCount(){
        return ManagerLocalChatMsg.s_unread_msg_map.get(ManagerLocalChatMsg.CurrentChannel);
    }

    /* 重置未读聊天信息数量
     */
    public static ResetChatMsgUnreadCount(){
        ManagerLocalChatMsg.s_unread_msg_map.set(ManagerLocalChatMsg.CurrentChannel, kZeroNumber);
    }

    /* 清空所有未读聊天信息数量
     */
    public static CleanAllChatMsgUnreadCount(){
        ManagerLocalChatMsg.s_unread_msg_map.set(proto.ChatChannelType.WorldChannel, kZeroNumber);
        ManagerLocalChatMsg.s_unread_msg_map.set(proto.ChatChannelType.AllianceChannel, kZeroNumber);
    }

    /* 增加相应频道未读聊天信息数量
     */
    private static AddUnreadMsg(channel: proto.ChatChannelType){
        let maxCount = tab.Data.GetKeyValue_ConfigTable().FullScreenShowChatNumber;
        let count    = ManagerLocalChatMsg.s_unread_msg_map.get(channel) + kOneNumber;
        count = count > maxCount ? maxCount : count;
        ManagerLocalChatMsg.s_unread_msg_map.set(channel, count);
    }

    /* 获取世界频道最后一天消息
     */
    public getLastWorldMsg(){
        let lastIdx = this._world_msg_cache.length - kOneNumber;
        if(lastIdx >= this._world_msg_cache.length){
            return null;
        }
        
        return this._world_msg_cache[lastIdx];
    }

    /* 从本地加载聊天信息
     */
    public loadLocalMsg(){
        if(!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID)){
            return;
        }
        
        let key = `${Role.Instance.RoleData.id}_alliance_msg_${Role.Instance.RoleData.allianceData.allianceID}`;
        let localMsgData = cc.sys.localStorage.getItem(key);
        if(localMsgData){
            try {
                this._alliance_msg_cache = JSON.parse(localMsgData);
                this.sliceChatMsgList();
            } catch (error) {
                if(!cc.sys.isNative){throw new Error("本地公会聊天数据解析有误");}
            }
        }

        sortChatMsgList(this._alliance_msg_cache, proto.ChatChannelType.AllianceChannel);
    }

    /* 截取数组只留50个
     */
    private sliceChatMsgList(){
        let msgLen = this._alliance_msg_cache.length;
        if(msgLen > this.kMaxSaveLocalMsgCount){
            let startIdx = msgLen - this.kMaxSaveLocalMsgCount;
            this._alliance_msg_cache = this._alliance_msg_cache.slice(startIdx, msgLen);
        }
    }

    /* 检测战斗聊天信息有无要超过上限，超过就要删
     */
    public checkFightMsgOverLimit(channel: proto.ChatChannelType){
        let msgCacheList = this.getLocalMsgCache(channel);
        if(!msgCacheList){
            return;
        }

        let tmpMsgIdx = [];
        let idx = kZeroNumber;
        const kFightMsgLimit = tab.Data.GetKeyValue_ConfigTable().AllianceFightRecordLimit;
        const specialStr = "##del##";
        
        for(let data of msgCacheList){
            if(proto.GlobalMessageType.MemberFriendlyMatchInviteMsg === data.msgType || 
                proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg == data.msgType){
                    tmpMsgIdx.push(idx);
            }
            idx++;
        }

        let tmpMsgLen    = tmpMsgIdx.length;
        let needCleanNum = tmpMsgLen - kFightMsgLimit;
        if(needCleanNum > kZeroNumber){
            for(let i = kZeroNumber; i < needCleanNum; i++){
                let delIdx = tmpMsgIdx[i];
                msgCacheList[delIdx].senderUUID = specialStr;
            }

            let findIdx = kZeroNumber;
            while(findIdx != kNegativeOneNumber){
                findIdx = msgCacheList.findIndex(tmpObj=>tmpObj.senderUUID === specialStr);
                msgCacheList.splice(findIdx, kOneNumber);
            }

            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, true);
        }
    }

    /* 存储聊天信息到本地
     */
    private saveMsg2Local(){
        if(!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID)){
            return;
        }
        
        this.sliceChatMsgList();
        let key = `${Role.Instance.RoleData.id}_alliance_msg_${Role.Instance.RoleData.allianceData.allianceID}`;
        let data = JSON.stringify(this._alliance_msg_cache);
        cc.sys.localStorage.setItem(key, data);
    }

    /* 获取本地聊天信息的缓存列表
     */
    public getLocalMsgCache(channel: proto.ChatChannelType){
        switch(channel){
            case proto.ChatChannelType.WorldChannel:
                return this._world_msg_cache;

            case proto.ChatChannelType.AllianceChannel:
                return this._alliance_msg_cache;

            case proto.ChatChannelType.PrivateChannel:
                return null;
        }
        return null;
    }

    /* 添加新聊天消息
     */
    public pushChatMsg( msg: proto.IChatMsgData, 
                        channel: proto.ChatChannelType, 
                        bCheckRepeat: boolean = true, 
                        bCorrectTimestamp: boolean = true){
        if(bCheckRepeat){
            let bRepeat = this.checkRepeatMsg(msg, channel);
            if(bRepeat){return;}
        }
        
        let msgCacheList = this.getLocalMsgCache(channel);
        if(!msgCacheList){
            return;
        }

        msgCacheList.push(msg);
        msg.senderUUID !== Role.Instance.RoleData.id && ManagerLocalChatMsg.AddUnreadMsg(channel);
        this.adjustChatMsgNum(msgCacheList, channel, bCorrectTimestamp);
        bCheckRepeat && CorrectNewChatInfoTimestamp(msgCacheList.length - kOneNumber, msgCacheList, channel);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, true);
    }

    /* 调整聊天信息数量
     */
    private adjustChatMsgNum(   msgCacheList: proto.IChatMsgData[], 
                                channel: proto.ChatChannelType, 
                                bCorrectTimestamp: boolean){
        if(msgCacheList.length >= this.kMaxShowNumber){
            msgCacheList.shift(); /* 删除数组中第一个元素 */
            bCorrectTimestamp && ManagerChatTimestamp.getInstance().removeFirstData(channel);
            bCorrectTimestamp && CorrectNewChatInfoTimestamp(kZeroNumber, msgCacheList, channel);
        }
    }

    /* 销毁缓存
     */
    public destroy(){
        this.saveMsg2Local();
    }

    /* 检测有无重复的聊天信息
     */
    private checkRepeatMsg(msg: proto.IChatMsgData, channel: proto.ChatChannelType){
        let msgCacheList = this.getLocalMsgCache(channel);
        if(!msgCacheList){
            return false;
        }

        if(proto.GlobalMessageType.MemberFriendlyMatchInviteMsg === msg.msgType || 
           proto.GlobalMessageType.MemberInfiniteDefenseInviteMsg === msg.msgType){
            return this.checkFightMsg(msg, msgCacheList);
        }
        
        let idx = msgCacheList.findIndex(tmpObj=>tmpObj.senderUUID === msg.senderUUID && tmpObj.utcTime === msg.utcTime);
        if(idx != kNegativeOneNumber){
            msgCacheList[idx] = msg;
        }
        return idx != kNegativeOneNumber;
    }

    /* 检测聊天中的战斗信息
     */
    private checkFightMsg(msg: proto.IChatMsgData, msgCacheList: proto.IChatMsgData[]){
        let idx = msgCacheList.findIndex(tmpObj=>tmpObj.senderUUID === msg.senderUUID);
        if(idx != kNegativeOneNumber){
            //特殊处理，用于判断该消息是战斗开始还是战斗结束，之前是战斗开始，现在是战斗结束，是需要更新该条消息的
            if(msg.msgSenderName === msgCacheList[idx].msgSenderName){
                return true;
            }

            //替换成新数据,但实际上还是同一条消息, 只是状态变成结束
            msgCacheList[idx] = msg;
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, false);
            return true;
        }

        return false;
    }

    /* 获取聊天消息
     * @param idx  消息索引
     */
    public getChatMsg(idx: number, channel: proto.ChatChannelType){
        let msgCacheList = this.getLocalMsgCache(channel);
        if(!msgCacheList){
            return null;
        }
        
        if(idx < kZeroNumber || idx >= msgCacheList.length){
            return null;
        }
        
        return msgCacheList[idx];
    }

    /* 清空公会聊天缓存数据
     */
    public cleanAllianceCacheData(){
        this._alliance_msg_cache = [];
        this.saveMsg2Local();//被踢出联盟 和 主动退出联盟 还是清空聊天列表 并 IO写吧 防止非正常退出游戏导致之前的联盟聊天记录还在本地
        ManagerChatTimestamp.getInstance().destroy(proto.ChatChannelType.AllianceChannel); //清除聊天时间戳缓存
    }
}
