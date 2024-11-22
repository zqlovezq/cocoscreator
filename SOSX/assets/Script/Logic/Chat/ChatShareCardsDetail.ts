/*
 * @Descripttion: 聊天分享卡组具体信息模块
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber } from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2 } from "../Utils/GameUtils";
import ChatShareCardData from "./ChatDetailModel/ChatShareCardData";
import ChatShareCardsInfoPfb from "./ChatShareCardsInfoPfb";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatShareCardsDetail extends InfiniteCell {

    @property(ChatShareCardsInfoPfb)
    node_share_cards_info: ChatShareCardsInfoPfb = null;

    @property(PlayerCard)
    node_player_head: PlayerCard = null;

    //@property(cc.Label)
    //lbl_timestamp: cc.Label = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_rank_icon: cc.Sprite = null;

    @property({tooltip: "是否是自己"})
    public bSelf: boolean = false;

    protected _player_name: string;
    protected _player_uuid: string;
    protected _player_head_id: number;
    protected _timestamp: number;

    onLoad () {}

    start () {}

    public UpdateContent(celldata){
        if(!celldata){return;}

        this.initData(celldata);
    }

    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.height;
    }

    public initData(msgData: proto.IChatMsgData){
        this._player_uuid    = msgData.senderUUID;
        this._player_name    = msgData.msgSenderName;
        this._timestamp      = msgData.utcTime;
        this._player_head_id = msgData.playerHeadID;
        let allianceName = isValidObj(msgData.allianceName) ? 
                                msgData.allianceName : tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.setShareCardsInfo(msgData.content);
        this.setPlayerName();
        this.setPlayerHead();
        this.setTimestamp();
        this.setPlayerAllianceName(allianceName);
        this.setPlayerRankIcon();
    }

    /* 设置分享卡组信息
     */
    private setShareCardsInfo(jsonStr: string){
        let cardMsgObj: ChatShareCardData = null;
        try {
            cardMsgObj = JSON.parse(jsonStr);
        } catch (error) {
            throw new Error("分享卡组聊天JSON数据格式错误");
        }
        
        if(!cardMsgObj){
            throw new Error("分享卡组聊天支援JSON数据错误");
        }

        this.node_share_cards_info.initData(cardMsgObj);
    }

    /* 设置玩家头像
     */
     protected setPlayerHead(){
        this.node_player_head && this.node_player_head.setVisibleLevel(false);
        this.node_player_head && this.node_player_head.initData(this._player_head_id, kOneNumber, false, false);
        this.node_player_head && (this.node_player_head.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._player_uuid);
            });
        }));
    }

    /* 设置玩家名称
     */
    private setPlayerName(){
        this.lbl_player_name && (this.lbl_player_name.string = this._player_name);
    }

    /* 设置时间戳
     */
     private setTimestamp(){
        //this.lbl_timestamp && (this.lbl_timestamp.string = formatChatTimestamp(this._timestamp));
    }

    /* 设置玩家联盟名称
     */
    private setPlayerAllianceName(name: string){
        this.lbl_alliance_name && (this.lbl_alliance_name.string = name);
    }

    /* 设置玩家段位
     */
    private setPlayerRankIcon(){

    }
}
