import { _decorator, Component, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { ChatMessageInfo } from './ChatMessageInfo';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatData
 * zhudingchao
 * Thu Jun 13 2024 16:31:10 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatData.ts
 *
 */

@ccclass('ChatData')
export class ChatData implements IClear {
    private _channelMap: Map<number, proto.ChatChannelType>;
    private _chatMrssageMap: Map<proto.ChatChannelType, Array<ChatMessageInfo>>;
    private static _instance: ChatData;
    public newMessageInfo:ChatMessageInfo=null;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ChatData();
        }
        return this._instance;
    }

    purge() {

    }
    get channelMap() {
        if (!this._channelMap) {
            this._channelMap = new Map();
        }
        return this._channelMap;
    }
    get chatMrssageMap() {
        if (!this._chatMrssageMap) {
            this._chatMrssageMap = new Map();
        }
        return this._chatMrssageMap;
    }
    initChannels(channels: proto.IChatChannel[]) {
        for (let key in channels) {
            this.channelMap.set(Number(channels[key].Id), channels[key].type);
        }
    }
    // 退出频道
    deleteChannel(id:number){
        this.channelMap.delete(id)
    }
    getChanneIdByType(type:proto.ChatChannelType){
        let id=0;
        this.channelMap.forEach((value,key)=>{
            if(type==value){
                id=key;
                return key;
            }
        })
        return id;
    }
    getChanneTypeById(id:number){
        return this.channelMap.get(Number(id));
    }
    chatMessagePush(message: proto.ChatMessage) {
        let info = new ChatMessageInfo();
        info.merge(message);
        let type = this.channelMap.get(Number(info.channelId));
        let list = this.chatMrssageMap.get(type);
        if (!list) {
            list = [];
            this.chatMrssageMap.set(type, list);
        }
        list.push(info);
        if(list.length>50){
            list.splice(0,list.length-50);
        }
        this.newMessageInfo=info;
        EventMgr.emitLocal(LocalEvent.ChatMessage_Change);
    }
    getMessageInfosByType(type: proto.ChatChannelType) {
        if (this.chatMrssageMap.has(type)) {
            return this.chatMrssageMap.get(type);
        }
        return [];
    }

}