/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { kZeroNumber } from "../Common/CommonInterface";
import PlayerCard from "../PlayerInfo/PlayerCard";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatFightInvitationSelfInfo extends cc.Component {

    @property(cc.Label)
    lbl_title: cc.Label = null;

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
    node_devil: PlayerCard = null;

    private _card_group_list: PlayerCard[] = [];

    onLoad () {
        this.node_devil.setCanTouch(false);
        this._card_group_list.push(this.node_player_card_1);
        this._card_group_list.push(this.node_player_card_2);
        this._card_group_list.push(this.node_player_card_3);
        this._card_group_list.push(this.node_player_card_4);
        this._card_group_list.push(this.node_player_card_5);
        this._card_group_list.push(this.node_devil);
    }

    start () {

    }

    onDestroy(){
        this._card_group_list = [];
    }

    public initData(msg: proto.AllianceFightInviteStruct){
        let selfCardInfos = [];
        selfCardInfos = selfCardInfos.concat(msg.playerInfo.pvpCardInfo.cardLists);
        selfCardInfos = selfCardInfos.concat(msg.playerInfo.devilInfo);
        this.setData(selfCardInfos, msg.type);
    }

    public setData(cardList: proto.IFightCardData[], fightType: proto.FightType){
        this.setTitle(fightType);
        this.setCardGroup(cardList);
    }

    /* 设置战斗标题
     */
    private setTitle(type: proto.FightType){
        let titleStr = (type == proto.FightType.AlliancePvE || 
                        type == proto.FightType.WorldChannelPvE) ? 
                        tab.Data.GetKeyValue_ConfigTable().InfiniteDefenseTip : 
                        tab.Data.GetKeyValue_ConfigTable().FriendMatchTip;
        this.lbl_title.string = titleStr;

    }

    /* 设置自身卡组信息
     */
    private setCardGroup(cardIDList: proto.IFightCardData[]){
        let cardGroupArrLen = this._card_group_list.length;
        let dataLen = cardIDList.length;
        for(let idx = kZeroNumber; idx < cardGroupArrLen; idx++){
            if(idx < dataLen){
                this._card_group_list[idx].initData(cardIDList[idx].staticId, cardIDList[idx].level, false);
                this._card_group_list[idx].setCanTouch(true);
            }
        }
    }
}
