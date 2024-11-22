/*
 * @Descripttion: 卡组分享信息
 */

import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import PlayerCard from "../PlayerInfo/PlayerCard";
import ChatShareCardData from "./ChatDetailModel/ChatShareCardData";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatShareCardsInfoPfb extends cc.Component {

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
        //this.node_devil.setCanTouch(false);
        this._card_group_list.push(this.node_player_card_1);
        this._card_group_list.push(this.node_player_card_2);
        this._card_group_list.push(this.node_player_card_3);
        this._card_group_list.push(this.node_player_card_4);
        this._card_group_list.push(this.node_player_card_5);
        this._card_group_list.push(this.node_devil);
    }

    start () {}

    onDestroy(){
        this._card_group_list = [];
    }

    public initData(msg: ChatShareCardData){
        this.setTitle(msg.Title);
        this.setCardGroup(msg.CardIDList);
    }

    /* 设置战斗标题
     */
    private setTitle(title: string){
        this.lbl_title.string = title;

    }

    /* 设置自身卡组信息
     */
    private setCardGroup(cardIDList: number[]){
        let cardGroupArrLen = this._card_group_list.length;
        let dataLen = cardIDList.length;
        for(let idx = kZeroNumber; idx < cardGroupArrLen; idx++){
            if(idx < dataLen){
                this._card_group_list[idx].setVisibleLevel(false);
                this._card_group_list[idx].initData(cardIDList[idx], kOneNumber, false);
                this._card_group_list[idx].setCanTouch(true);
            }
        }
    }
}
