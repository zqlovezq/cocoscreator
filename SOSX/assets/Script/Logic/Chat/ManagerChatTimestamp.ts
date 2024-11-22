/*
 * @Descripttion: 聊天时间戳管理类文件
 */

import { proto } from "../../Protocol/client_protocol";
import { kZeroNumber } from "../Common/CommonInterface";

/**
 * 以下的接口和类 主要用于聊天的时间戳和头像是否显示的控制
 */
export interface IChatTimestamp{
    timestamp: number;
    bVisibleTimestamp: boolean;
    bVisibleHead: boolean;
    roleID: string;
}

/**************************************************
 ****** 世界和公会频道频道聊天时间戳相关接口 ******* 
 **************************************************
 */
export default class ManagerChatTimestamp {
    private _world_chat_timestamp_arr: IChatTimestamp[]    = [];
    private _alliance_chat_timestamp_arr: IChatTimestamp[] = [];
    
    private static _instance: ManagerChatTimestamp   = null;
    public static getInstance(): ManagerChatTimestamp {
        if (!ManagerChatTimestamp._instance){
            ManagerChatTimestamp._instance = new ManagerChatTimestamp();
        }
        return ManagerChatTimestamp._instance;
    }

    private _getTimestampArr(channel: proto.ChatChannelType){
        switch(channel){
            case proto.ChatChannelType.WorldChannel:
                return this._world_chat_timestamp_arr;

            case proto.ChatChannelType.AllianceChannel:
                return this._alliance_chat_timestamp_arr;
        }

        return null;
    }

    /* 设置聊天时间戳数据
     * @param idx   数据key
     * @param data  具体的聊天时间戳接口数据
     */
    public setChatTimestampData(idx: number, data: IChatTimestamp, channel: proto.ChatChannelType){
        if(idx < kZeroNumber){
            return;
        }

        let timestampArr = this._getTimestampArr(channel);
        if(!timestampArr){
            return;
        }
        
        if(idx >= timestampArr.length){
            timestampArr.push(data);
            return;
        }

        timestampArr[idx] = data;
    }

    /* 获取聊天时间戳数据
     */
    public getChatTimestampData(idx: number, channel: proto.ChatChannelType){
        let timestampArr = this._getTimestampArr(channel);
        if(!timestampArr){
            return null;
        }

        if(idx < kZeroNumber || idx >= timestampArr.length){
            return null;
        }

        return timestampArr[idx];
    }

    /* 删除聊天时间戳列表中第一个数据
     */
    public removeFirstData(channel: proto.ChatChannelType){
        let timestampArr = this._getTimestampArr(channel);
        if(!timestampArr){
            return;
        }
        
        if(timestampArr.length === kZeroNumber){
            return;
        }

        timestampArr.shift();
    }
    
    public destroy(channel: proto.ChatChannelType){
        let timestampArr = this._getTimestampArr(channel);
        if(!timestampArr){
            return;
        }

        timestampArr = [];
    }
}

/****************************************
 ****** 私聊频道聊天时间戳相关接口 ******* 
 ****************************************/

export class ManagerPrivateChatTimestamp {
    private _private_chat_timestamp_map: Map<string, IChatTimestamp[]>  = new Map<string, IChatTimestamp[]>();

    private static _instance: ManagerPrivateChatTimestamp   = null;
    public static getInstance(): ManagerPrivateChatTimestamp {
        if (!ManagerPrivateChatTimestamp._instance){
            ManagerPrivateChatTimestamp._instance = new ManagerPrivateChatTimestamp();
        }
        return ManagerPrivateChatTimestamp._instance;
    }

    /* 获取相应的时间戳缓存信息
     */
    private _getTimestampArr(key: string){
        if(this._private_chat_timestamp_map.has(key)){
            return this._private_chat_timestamp_map.get(key);
        }
    
        this._private_chat_timestamp_map.set(key, []);
        return this._private_chat_timestamp_map.get(key);
    }


    /* 设置聊天时间戳数据
     * @param idx   数据key
     * @param data  具体的聊天时间戳接口数据
     */
    public setChatTimestampData(idx: number, data: IChatTimestamp, key: string){
        if(idx < kZeroNumber){
            return;
        }

        let timestampArr = this._getTimestampArr(key);
        if(idx >= timestampArr.length){
            timestampArr.push(data);
            return;
        }

        timestampArr[idx] = data;
    }

    /* 获取聊天时间戳数据
     */
    public getChatTimestampData(idx: number, key: string){
        let timestampArr = this._getTimestampArr(key);
        if(idx < kZeroNumber || idx >= timestampArr.length){
            return null;
        }

        return timestampArr[idx];
    }

    /* 删除聊天时间戳列表中第一个数据
     */
    public removeFirstData(key: string){
        let timestampArr = this._getTimestampArr(key);
        if(!timestampArr){
            return;
        }
        
        if(timestampArr.length === kZeroNumber){
            return;
        }

        timestampArr.shift();
    }
    
    public destroy(key: string){
        
    }
}