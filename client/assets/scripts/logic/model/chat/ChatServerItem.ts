import { _decorator, Component, Node, RichText, UITransform } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { ChatMessageInfo } from './ChatMessageInfo';
import { Func } from '../../utils/Func';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatServerItem
 * zhudingchao
 * Mon Jun 17 2024 16:42:49 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatServerItem.ts
 *
 */

@ccclass('ChatServerItem')
export class ChatServerItem  extends InfiniteCell {
    @property(UITransform)
    chatLayout:UITransform=null;
    @property(RichText)
    richText:RichText=null;
    UpdateContent(data: ChatMessageInfo): void {
    
        if(!data["ZH_width"]){
            data["ZH_width"]=Func.getStrZhWidth(data.normal)*24+30;
        }
        if(data["ZH_width"]<480){
            this.chatLayout.width=data["ZH_width"];
        }else{
            this.chatLayout.width=480;
        }
        this.richText.string=data.systemContent;
        // if(len*22<370){
        //     this.chatLayout.width=len*22+25;
        // }else{
        //     this.chatLayout.width=390; 
        // }
        
    }
}