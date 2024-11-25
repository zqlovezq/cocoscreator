import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ChatData } from './ChatData';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatControl
 * zhudingchao
 * Thu Jun 13 2024 16:30:59 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatControl.ts
 *
 */

@ccclass('ChatControl')
export class ChatControl extends  AbsControl {
    private static _instance: ChatControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ChatControl();
        }
        return this._instance;
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.DefaultChatChannelsPush, this.on_s2c_DefaultChatChannelsPush, this);
        EventMgr.onMsg(proto.Ptl.SendChatMessageRsp, this.on_s2c_SendChatMessageRsp, this);
        EventMgr.onMsg(proto.Ptl.ChatMessagePush, this.on_s2c_Msg_ChatMessagePush, this);
        EventMgr.onMsg(proto.Ptl.GuildChatChannelPush, this.on_s2c_Msg_GuildChatChannelPush, this);
    }

    requestSendChatMessage(channelId:number,content:string,clientCustomNotice?:proto.ChatMessage.IClientCustomNotice) {
        let msg = new proto.Msg_SendChatMessageReq();
        msg.channelId = channelId;
        msg.message=new proto.ChatMessage();
        msg.message.channelId=channelId;
        msg.message.normal=content;
        if(clientCustomNotice){
            msg.message.clientCustomNotice = clientCustomNotice;
        }
        Net.Send(proto.Ptl.SendChatMessageReq, msg)
    }

    on_s2c_DefaultChatChannelsPush(msg: proto.Msg_DefaultChatChannelsPush) {
        ChatData.ins.initChannels(msg.channels);
    }
    on_s2c_SendChatMessageRsp(msg: proto.Msg_SendChatMessageRsp) {
       
    }
    on_s2c_Msg_ChatMessagePush(msg: proto.Msg_ChatMessagePush) {
       ChatData.ins.chatMessagePush(msg.message as proto.ChatMessage);
    }
    on_s2c_Msg_GuildChatChannelPush(msg:proto.Msg_GuildChatChannelPush){
        if(msg.channel){
            ChatData.ins.initChannels([msg.channel]);
        }else{
            const id = ChatData.ins.getChanneIdByType(proto.ChatChannelType.Guild)
            ChatData.ins.deleteChannel(id);
        }
    }
}