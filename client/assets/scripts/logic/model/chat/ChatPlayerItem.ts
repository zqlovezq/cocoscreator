import { _decorator, Component, Label, Node, UITransform } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { ChatMessageInfo } from './ChatMessageInfo';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { Func } from '../../utils/Func';
const { ccclass, property } = _decorator;

/**
 * 
 * ChatPlayerItem
 * zhudingchao
 * Thu Jun 13 2024 18:05:40 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/chat/ChatPlayerItem.ts
 *
 */

@ccclass('ChatPlayerItem')
export class ChatPlayerItem extends InfiniteCell {
    @property(PlayerHeadItem)
    playerHeadItem: PlayerHeadItem = null;
    @property(Label)
    nameLab:Label=null;
    @property(Label)
    titleLab:Label=null;
    @property(Label)
    servernName:Label=null;
    @property(Label)
    messageLab:Label=null;
    @property(Label)
    messageLab2:Label=null;
    @property(UITransform)
    chatLayout:UITransform=null;
    UpdateContent(data: ChatMessageInfo): void {
        this.playerHeadItem.initHeadInfo({headFrame:data.sender.headFrame,headIcon:data.sender.headIcon,level:data.sender.level,
            roleId:data.sender.roleId
        })
        this.nameLab.string=data.sender.name;
        let table=tab.getData().QuestLogTableByLevel.getValue(data.sender.questLogLevel);
        if(table){
            this.titleLab.string=LangMgr.getLab(table.Name);
        }
       
        if(!data["ZH_width"]){
            this.messageLab2.node.active=true;
            this.messageLab2.string=data.normal;
            this.chatLayout.node.active=false;
            this.scheduleOnce(()=>{
                let width=this.messageLab2.getComponent(UITransform).contentSize.width+25;
                if(width>395){
                    width=395;
                }
                data["ZH_width"]= width;
                this.chatLayout.width=width;
                this.messageLab2.node.active=false;
                this.messageLab.string=data.normal;
                this.chatLayout.node.active=true;
            })
            // data["ZH_width"]=Func.getStrZhWidth(data.normal)*20+25;
        }else{
            this.messageLab.string=data.normal;
            this.chatLayout.width= data["ZH_width"];
        }
        // if(data["ZH_width"]<400){
        //     this.chatLayout.width=data["ZH_width"];
        // }else{
        //     this.chatLayout.width=400;
        // }
        // if(len*22<370){
        //     this.chatLayout.width=len*22+25;
        // }else{
        //     this.chatLayout.width=390; 
        // }
        
    }
}