/*
 * @Descripttion: 管理本地存储的聊天信息类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import {kNegativeOneNumber, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import { CorrectNewChatInfoTimestamp, GenMapKey, sortPrivateChatMsgList } from "./ChatCommonInterface";
import PrivateChatMsg from "./ChatDetailModel/PrivateChatMsg";
import { ManagerPrivateChatTimestamp } from "./ManagerChatTimestamp";

/**
 * 私聊对象数据接口
 */
export interface IPrivateObjData{
    uuid: string;
    name: string;
    allianceName: string;
    allianceIconIdx: number;
    headID: number;
    bOnline: boolean;
    timestamp: number;
    bNewMsg: boolean;
}

export default class ManagerPrivateChatMsg {
    private kMaxSaveLocalMsgCount = tab.Data.GetKeyValue_ConfigTable().PrivateEveryFriendChatSaveNumber;
    private kMaxShowNumber   = tab.Data.GetKeyValue_ConfigTable().FullScreenShowChatNumber;
    private kMaxFriendNumber = tab.Data.GetKeyValue_ConfigTable().MaxFriendCount;

    private _private_msg_cache: Map<string, proto.IChatMsgData[]> = new Map<string, proto.IChatMsgData[]>(); //私聊频道聊天缓存列表
    private _private_obj_cache: IPrivateObjData[]                 = []; //私聊对象缓存列表【用于在线与否的排序】
    private static s_unread_msg_map: Map<string, number>          = new Map<string, number>(); //未读消息数量
    
    static CurrentPrivateObj: string;
    private static _instance: ManagerPrivateChatMsg   = null;
    public static getInstance(): ManagerPrivateChatMsg {
        if (!ManagerPrivateChatMsg._instance){
            ManagerPrivateChatMsg._instance = new ManagerPrivateChatMsg();
        }
        return ManagerPrivateChatMsg._instance;
    }

    public destroy(){
        this.saveMsg2Local();
        this.savePrivateObj();
    }

    /* 从本地加载聊天信息
     */
    public loadLocalMsg(){
        let key = `${Role.Instance.RoleData.id}_private_msg`;
        let localMsgData = cc.sys.localStorage.getItem(key);
        if(localMsgData){
            try {
                let tmpData = JSON.parse(localMsgData);
                if(Array.isArray(tmpData)){
                    //cc.log("$$$$$$$$$$$$$$$$$$$$$$$$$$: ", tmpData.length, "----> ", localMsgData);
                    for(let data of tmpData){
                        if(this._private_msg_cache.has(data.Key)){
                            this._private_msg_cache.get(data.Key).push(data.MsgData);
                        }else{
                            this._private_msg_cache.set(data.Key, [data.MsgData]);
                        }
                    }
                }
                //this._private_msg_cache = JSON.parse(localMsgData);
            } catch (error) {
                if(!cc.sys.isNative){throw new Error("本地私聊聊天数据解析有误");}
            }
        }
        this.loadPrivateObjList();
    }

    /* 从本地加载私聊对象
     */
    private loadPrivateObjList(){
        let key = `${Role.Instance.RoleData.id}_private_obj_cache`;
        let localMsgData = cc.sys.localStorage.getItem(key);
        if(localMsgData){
            try {
                this._private_obj_cache = JSON.parse(localMsgData);
            } catch (error) {
                if(!cc.sys.isNative){throw new Error("本地私聊对象数据解析有误");}
            }
        }
    }

    /* 存储聊天信息到本地
     */
    private saveMsg2Local(){
        this.sliceChatMsgList();

        let privateMsgList = [];
        for(let item of this._private_msg_cache.entries()){
            let key = item[0];
            let msgCacheList = item[1];
            for(let data of msgCacheList){
                let msgData = new PrivateChatMsg(key, data);
                privateMsgList.push(msgData);
            }
        }

        let key = `${Role.Instance.RoleData.id}_private_msg`;
        let data = JSON.stringify(privateMsgList);
        cc.sys.localStorage.setItem(key, data);
    }

    /* 存储私聊对象到本地
     */
    private savePrivateObj(){
        //this._private_obj_cache = []
        let key = `${Role.Instance.RoleData.id}_private_obj_cache`;
        let data = JSON.stringify(this._private_obj_cache);
        cc.sys.localStorage.setItem(key, data);
    }

    /* 截取每个好友的聊天记录
     */
    private sliceChatMsgList(){
        for(let item of this._private_msg_cache.entries()){
            let msgCacheList = item[1];
            let msgCacheLen = msgCacheList ? msgCacheList.length : kZeroNumber;
            if(msgCacheList && msgCacheLen > this.kMaxSaveLocalMsgCount){
                let startIdx = msgCacheLen - this.kMaxSaveLocalMsgCount;
                msgCacheList = msgCacheList.slice(startIdx, msgCacheLen);
            }
        }
    }

    /* 获取聊天记录
     */
    private getChatRecord(friendUUID: string){
        let key = GenMapKey(friendUUID);
        if(this._private_msg_cache.has(key)){
            return this._private_msg_cache.get(key);
        }

        //超过好友上限删掉一些保持最大上限数量
        while(this._private_msg_cache.size >= this.kMaxFriendNumber){
            for(let item of this._private_msg_cache.entries()){
                let delKey = item[0];
                if(key != delKey){
                    this._private_msg_cache.delete(delKey);
                    let delFriendUUIDList = delKey.split("_");
                    this.deletePrivateObj(delFriendUUIDList[1]);
                    break;
                }
            }
        }

        this._private_msg_cache.set(key, []);
        return this._private_msg_cache.get(key);
    }

    /* 获取聊天信息的缓存列表
     */
    public getLocalMsgCache(friendUUID: string){
        let key = GenMapKey(friendUUID);
        if(this._private_msg_cache.has(key)){
            return this._private_msg_cache.get(key);
        }
        
        return null;
    }

    /* 获取好友UUID
     */
    public getFriendUUID(msg: proto.IChatMsgData){
        let selfUUID = Role.Instance.RoleData.id;
        if(msg.senderUUID != selfUUID){
            return msg.senderUUID;
        }

        return msg.receiverUUID;
    }
    
    /* 获取相应私聊对象未读聊天信息数量
     */
     public static GetChatMsgUnreadCount(friendUUID: string){
        return ManagerPrivateChatMsg.s_unread_msg_map.get(friendUUID);
    }

    /* 重置未读聊天信息数量
     */
    public static ResetChatMsgUnreadCount(friendUUID: string){
        ManagerPrivateChatMsg.s_unread_msg_map.set(friendUUID, kZeroNumber);
        ManagerPrivateChatMsg.getInstance().changePrivateObjNewMsg(friendUUID, false);
    }

    /* 清空所有未读聊天信息数量
     */
    public static CleanAllChatMsgUnreadCount(){
        for(let key in ManagerPrivateChatMsg.s_unread_msg_map){
            ManagerPrivateChatMsg.s_unread_msg_map[key] = kZeroNumber;
        }
    }

    /* 增加相应私聊对象未读聊天信息数量
     */
    private static AddUnreadMsg(friendUUID: string){
        let count = kZeroNumber;
        let maxCount = tab.Data.GetKeyValue_ConfigTable().FullScreenShowChatNumber;
        if(ManagerPrivateChatMsg.s_unread_msg_map.has(friendUUID)){
            count = ManagerPrivateChatMsg.s_unread_msg_map.get(friendUUID)  + kOneNumber;
            count = count > maxCount ? maxCount : count;
        }
        ManagerPrivateChatMsg.s_unread_msg_map.set(friendUUID, count);
    }

    /* 添加新聊天消息
     */
    public pushChatMsg(msg: proto.IChatMsgData, bCheckRepeat: boolean = true, bCorrectTimestamp: boolean = true){
        let friendUUID = this.getFriendUUID(msg);
        let msgCacheList = this.getChatRecord(friendUUID);

        if(bCheckRepeat){
            let bRepeat = this.checkRepeatMsg(msg, msgCacheList);
            if(bRepeat){return;}
        }
        
        let key = GenMapKey(friendUUID);

        msgCacheList.push(msg);
        msg.senderUUID !== Role.Instance.RoleData.id && ManagerPrivateChatMsg.AddUnreadMsg(friendUUID);
        this.insertPrivateObj(friendUUID, msg);
        this.adjustChatMsgNum(msgCacheList, key, bCorrectTimestamp);
        bCorrectTimestamp && CorrectNewChatInfoTimestamp(msgCacheList.length - kOneNumber, msgCacheList, proto.ChatChannelType.PrivateChannel, key);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateChatViewList, true);
    }

    /* 删除相应好友私聊数据
     */
    public deleteMsg(friendUUID: string){
        let key = GenMapKey(friendUUID);
        if(this._private_msg_cache.has(key)){
            this._private_msg_cache.delete(key);
        }

        this.deletePrivateObj(friendUUID);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdatePrivateChatPlayerList, null);
    }

    /* 检测私聊对象有无聊天消息
     */
    public checkPrivateObjHaveMsg(friendUUID: string){
        let key = GenMapKey(friendUUID);
        if(!this._private_msg_cache.has(key)){
            this.deletePrivateObj(friendUUID);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdatePrivateChatPlayerList, null);
        }
    }

    /* 排序所有私聊数据
     */
    public sortAllPrivateChatMsg(){
        for(let item of this._private_msg_cache.entries()){
            let key = item[0];
            let msgCacheList = item[1];
            sortPrivateChatMsgList(msgCacheList, key);
        }
    }

    /* 查找私聊对象有无红点提示
     */
    public findPrivateObjRedTip(){
        for(let data of this._private_obj_cache){
            if(data.bNewMsg/* && data.bOnline*/){
                return true;
            }
        }

        return false;
    }

    /* 改变私聊对象是否在线状态
     */
    private changePrivateObjOnline(friendUUID: string, bOnline: boolean){
        let idx = this._private_obj_cache.findIndex(tmpObj=>tmpObj.uuid == friendUUID);
        if(idx != kNegativeOneNumber){
            this._private_obj_cache[idx].bOnline = bOnline;
        }
    }

    /* 排序私聊对象
     */
    private sortPrivateObj(){
        if(!this._private_obj_cache || this._private_obj_cache.length < kTwoNumber){
            return;
        }

        this._private_obj_cache.sort((obj1: IPrivateObjData, obj2: IPrivateObjData): number=>{
            if((obj1.bOnline && obj2.bOnline) || (!obj1.bOnline && !obj2.bOnline)){
                return obj1.timestamp - obj2.timestamp;
            }
            
            if(obj1.bOnline && !obj2.bOnline){
                return kNegativeOneNumber;
            }

            return kOneNumber;
        });
    }

    /* 改变私聊对象是否是新消息状态
     */
    private changePrivateObjNewMsg(friendUUID: string, bNewMsg: boolean){
        let idx = this._private_obj_cache.findIndex(tmpObj=>tmpObj.uuid == friendUUID);
        if(idx != kNegativeOneNumber){
            this._private_obj_cache[idx].bNewMsg = bNewMsg;
        }
    }

    /* 初始化私聊对象在线状态
     */
    public initPrivateObjState(privateObjList: proto.IFriendOnlineState[]){
        for(let friendData of privateObjList){
            this.changePrivateObjOnline(friendData.roleID, friendData.bOnline);
        }

        this.sortPrivateObj();
    }  

    /* 获取私聊对象Cache
     */
    public getPrivateObjCache(){
        return this._private_obj_cache;
    }

    /* 增加新私聊对象
     */
    public addNewPrivateObj(privateObj: IPrivateObjData){
        let idx = this._private_obj_cache.findIndex(tmpObj=>tmpObj.uuid == privateObj.uuid);
        if(idx == kNegativeOneNumber){
            this._private_obj_cache.push(privateObj);
        }
    }

    /* 增加新私聊对象
     */
    private insertPrivateObj(friendUUID: string, msg: proto.IChatMsgData){
        let privateObjData = {  uuid:            friendUUID, 
                                name:            msg.msgSenderName, 
                                allianceName:    msg.allianceName, 
                                allianceIconIdx: msg.allianceIconIdx, 
                                headID:          msg.playerHeadID, 
                                timestamp:       msg.utcTime,
                                bOnline:         true,
                                bNewMsg:         false
        };

        let bNewMsg = ManagerPrivateChatMsg.CurrentPrivateObj !== friendUUID;
        let idx = this._private_obj_cache.findIndex(tmpObj=>tmpObj.uuid == friendUUID);
        if(idx == kNegativeOneNumber){
            privateObjData.bNewMsg = bNewMsg;
            this._private_obj_cache.push(privateObjData);
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdatePrivateChatPlayerList)
        }else{
            this._private_obj_cache[idx].bNewMsg = bNewMsg;
        }

        bNewMsg && Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NewPrivateMsg, friendUUID);
        bNewMsg && Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdatePrivateRedTip);
    }

    /* 删除相应的私聊对象
     */
    private deletePrivateObj(friendUUID: string){
        let idx = this._private_obj_cache.findIndex(tmpObj=>tmpObj.uuid == friendUUID);
        if(idx != kNegativeOneNumber){
            this._private_obj_cache.splice(idx, kOneNumber);
            this.sortPrivateObj();
            Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdatePrivateRedTip);
        }
    }

    /* 检测是否有重复的消息
     */
    private checkRepeatMsg(msg: proto.IChatMsgData, msgCacheList: proto.IChatMsgData[]){
        let idx = msgCacheList.findIndex(tmpObj=>tmpObj.senderUUID === msg.senderUUID && tmpObj.utcTime === msg.utcTime);
        if(idx != kNegativeOneNumber){
            msgCacheList[idx] = msg;
        }
        return idx != kNegativeOneNumber;
    }

    /* 调整聊天信息数量
     */
    private adjustChatMsgNum(msgCacheList: proto.IChatMsgData[], key: string, bCorrectTimestamp: boolean){
        if(msgCacheList.length >= this.kMaxShowNumber){
            msgCacheList.shift(); /* 删除数组中第一个元素 */
            bCorrectTimestamp && ManagerPrivateChatTimestamp.getInstance().removeFirstData(key);
            bCorrectTimestamp && CorrectNewChatInfoTimestamp(kZeroNumber, msgCacheList, proto.ChatChannelType.PrivateChannel, key);
        }
    }

    /* 获取聊天消息
     * @param idx  消息索引
     */
    public getChatMsg(idx: number, friendUUID: string){
        let msgCacheList = this.getChatRecord(friendUUID);

        if(idx < kZeroNumber || idx >= msgCacheList.length){
            return null;
        }

        return msgCacheList[idx];
    }
}
