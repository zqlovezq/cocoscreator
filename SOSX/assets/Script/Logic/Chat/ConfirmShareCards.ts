/*
 * @Descripttion: 分享卡组二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { CheckFunctionIsOpenWithTip, isValidObj, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import ChatShareCardData from "./ChatDetailModel/ChatShareCardData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ConfirmShareCards extends PopLayer {

    @property(cc.EditBox)
    edit_message: cc.EditBox = null;

    @property(cc.Button)
    btn_alliance_channel: cc.Button = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_world_channel: cc.Button = null;

    @property(cc.Button)
    btn_clear: cc.Button = null;

    @property(PlayerCard)
    node_player_card_1: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_2: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_3: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_4: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_5: PlayerCard = null;

    @property(PlayerCard)
    node_player_devil: PlayerCard = null;

    private _card_group_list: PlayerCard[] = [];
    private _card_id_list: number[] = [];

    onLoad () {
        this._card_group_list.push(this.node_player_card_1);
        this._card_group_list.push(this.node_player_card_2);
        this._card_group_list.push(this.node_player_card_3);
        this._card_group_list.push(this.node_player_card_4);
        this._card_group_list.push(this.node_player_card_5);
        this._card_group_list.push(this.node_player_devil);

        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_world_channel.node.on("click", this.onClickShareWorldChannel, this);
        
        this.btn_clear.node.on("click", ()=>{
            this.edit_message.string = kNoneString;
        }, this);

        this.btn_alliance_channel.node.on("click", this.onClickShareAllianceChannel, this);
    }

    start () {}

    public initData(teamIdx: number){
        let curTeamData: proto.IDeckData = Role.Instance.RoleData.decks[teamIdx];
        let cardListLen = curTeamData.deckItems.length;
       
        for(let idx = kZeroNumber; idx < cardListLen; ++idx){
            let cardUUID = curTeamData.deckItems[idx];
            let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(cardUUID);
            if (!isValidObj(cardInfo)){
                continue;
            }

            this._card_id_list.push(cardInfo.staticId);
        }

        let devilUUID = Role.Instance.RoleData.decks[teamIdx].lord;
        let devilCardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(devilUUID);
        if (isValidObj(devilCardInfo)){
            this._card_id_list.push(devilCardInfo.staticId);
        }

        this.setCardGroup();
    }

    /* 设置分享卡组信息
     */
    private setCardGroup(){
        let cardGroupArrLen = this._card_group_list.length;
        let dataLen = this._card_id_list.length;
        for(let idx = kZeroNumber; idx < cardGroupArrLen; idx++){
            if(idx < dataLen){
                this._card_group_list[idx].setVisibleLevel(false);
                this._card_group_list[idx].initData(this._card_id_list[idx], kOneNumber, false);
                this._card_group_list[idx].setCanTouch(true);
            }
        }
    }
    
    /* 发送分享卡组消息
     */
    private send2Channel(channel: proto.ChatChannelType){
        let msg     = new proto.Msg_ChatSendShareCardsReq();
        msg.message = this.getCardsJsonString();
        msg.channel = channel;
        Net.Send(proto.Ptl.ChatSendShareCardsReq, msg);
        this.setVisible(false);
    }

    /* 获取分享卡组消息json字符串
     */
    private getCardsJsonString(){
        let title = this.edit_message.string !== kNoneString ? 
                    this.edit_message.string : 
                    tab.Data.GetKeyValue_ConfigTable().ChatShareCardDefaultTitle;
        let shareCardInfo  = new ChatShareCardData(title, this._card_id_list);

        return JSON.stringify(shareCardInfo);
    }
    
    /* 检测输入内容有无超出限制
     */
    private checkTitleIsOver(){
        return this.edit_message.string.length > tab.Data.GetKeyValue_ConfigTable().ChatShareCardTitleLimitLen;
    }

    /* 检测是否达到相关开启条件
     */
     private checkOpenConditionArrive(functionName: number){
        let retVal  = CheckFunctionIsOpenWithTip(functionName);
        let bArrive = retVal.bArrive;
        let tips    = retVal.tip;
        if(!bArrive){
            ShowTipsOfCustomString(tips);
        }
        return bArrive;
    }

    private onClickShareWorldChannel(){
        if(!this.checkOpenConditionArrive(tab.OpenFunctionName.OpenFunctionName_ShareCardOfChat)){
            return;
        }
        
        if(this.checkTitleIsOver()){
            ShowTips("ChatShareCardTitleTip");
            return;
        }
        this.send2Channel(proto.ChatChannelType.WorldChannel);
    }

    private onClickShareAllianceChannel(){
        if(!Role.Instance.RoleData.allianceData || 
            !isValidObj(Role.Instance.RoleData.allianceData.allianceID)){
                ShowTips("NoAllianceTip");
            return;
        }
        
        if(this.checkTitleIsOver()){
            ShowTips("ChatShareCardTitleTip");
            return;
        }
        this.send2Channel(proto.ChatChannelType.AllianceChannel);
    }
}
