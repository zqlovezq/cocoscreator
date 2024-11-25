import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatMessageInfo
 * zhudingchao
 * Thu Jun 13 2024 17:06:22 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatMessageInfo.ts
 *
 */

@ccclass('ChatMessageInfo')
export class ChatMessageInfo extends proto.ChatMessage {
    private _systemContent:string=""
    merge(item: proto.ChatMessage) {
        for (const key in item) {
            this[key] = item[key]
        }
    }

    get systemContent(){
        if(!this._systemContent&&this.notice){
            let table=tab.getData().NoticeTableById.getValue(this.notice.noticeId);
            if(table){
                let param=[];
                let texts=table.Texts;
                for(let key in texts){
                    switch(texts[key]){
                        case "playerName":
                            param.push(this.notice.params[key]);
                        break;
                        case "itemName":
                            let item=tab.getData().ItemTableById.getValue(Number(this.notice.params[key]))
                            if(item){
                                param.push(LangMgr.getLab(item.Name));
                            }else{
                                param.push("");
                            }
                           
                        break;
                        default:
                            param.push("");
                            break;
                    }
                }
                // let noticeId=this.notice.noticeId;
                this._systemContent=LangMgr.getCombineString(table.WordKey,param);
            }
            
        }
        return this._systemContent;
    }
}