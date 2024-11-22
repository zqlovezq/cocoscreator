/*
 * @Descripttion: 普通文本聊天模块
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { formatChatTimestamp } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kNoneString, kOneNumber, kZeroNumber} from "../Common/CommonInterface";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { showPopLayerV2 } from "../Utils/GameUtils";
import SensitiveWordsManager from "../Utils/SensitiveWordsManager";
import { GenMapKey, GetChatTimestampData } from "./ChatCommonInterface";
import ManagerChatTimestamp from "./ManagerChatTimestamp";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";
import ManagerPrivateChatMsg from "./ManagerPrivateChatMsg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatNormalText extends InfiniteCell {

    @property(cc.Node)
    node_chat_bubble: cc.Node = null;

    @property(cc.Label)
    lbl_content: cc.Label = null;

    @property(cc.Label)
    lbl_time: cc.Label = null;

    @property(cc.Node)
    node_player_head: cc.Node = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_rank_icon: cc.Sprite = null;

    @property({tooltip: "是否是自己"})
    public bSelf: boolean = false;

    @property({tooltip: "是否有头像"})
    public bHaveHead: boolean = true;

    @property({tooltip: "初始节点高度"})
    public initNodeHeight: number = 0;

    @property({tooltip: "初始文本节点高度"})
    public initLblNodeHeight: number = 0;

    private _player_role_id: string;

    onLoad () {
    }

    start () {

    }

    public UpdateContent(celldata){
        if(!celldata){return;}
        this.initData(celldata);
    }

    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.getContentSize().height;
    }

    /* 设置聊天内容
     */
    private initData(msg: proto.IChatMsgData){
        this._player_role_id = msg.senderUUID;
        let allianceName = isValidObj(msg.allianceName) ? 
                            msg.allianceName : tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.node.setContentSize(this.node.getContentSize().width, this.initNodeHeight);
        this.checkHeadAndTimestampVisible();
        this.setChatContent(msg.content);
        this.setTime(msg.utcTime);
        this.setPlayerHead(msg.playerHeadID);
        this.setPlayerName(msg.msgSenderName);
        this.setPlayerAllianceName(allianceName);
        this.setPlayerRankIcon();
        this.resetNodeHeight();
    }

    /* 设置聊天文本
     */
    private setChatContent(content: string){
        this.lbl_content.string = SensitiveWordsManager.Instance.replace(content);
        //this.lbl_content.enabled                = true;
        //this.lbl_content.node.activeInHierarchy = true;
        (< any > this.lbl_content)._forceUpdateRenderData();
        this.node_chat_bubble.getComponent(cc.Layout).updateLayout();
    }

    /* 设置时间戳
     */
    private setTime(timestamp: number){
        this.lbl_time && (this.lbl_time.string = formatChatTimestamp(timestamp));
    }

    /* 设置玩家头像
     */
    private setPlayerHead(headId: number){
        this.node_player_head && this.node_player_head.getComponent(PlayerCard).setVisibleLevel(false);
        this.node_player_head && (this.node_player_head.getComponent(PlayerCard).initData(headId, kOneNumber, false, false));
        this.node_player_head && (this.node_player_head.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._player_role_id);
            });
        }));
    }

    /* 设置玩家名称
     */
    private setPlayerName(name: string){
        this.lbl_player_name && (this.lbl_player_name.string = name);
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

    /* 重置节点高度
     */
    private resetNodeHeight(){
        let curBubbleH = this.lbl_content.node.getContentSize().height;
        let diffH      = curBubbleH - this.initLblNodeHeight;
        let newH       =  this.initNodeHeight + diffH;
        this.node_chat_bubble.setContentSize(this.node_chat_bubble.getContentSize().width, 
                                                this.node_chat_bubble.getContentSize().height + diffH);
        this.node.setContentSize(this.node.getContentSize().width, newH);
        //cc.log("####: " +  this.lbl_content.string + "-->priNodeH: " + this.initNodeHeight + "-->priBubbleH: " + this.initLblNodeHeight + "-->curBubbleH: " + curBubbleH + "-->diffH: " + diffH + "-->nodeHeight: " + this.node.getContentSize().height + "-->idx: " + this.dataIndex);
    }

    /* 检测模块头像和时间戳的可见性
     */
    private checkHeadAndTimestampVisible(){
        let key = proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel ? 
                    GenMapKey(ManagerPrivateChatMsg.CurrentPrivateObj) : kNoneString;
        let data = GetChatTimestampData(this.dataIndex, ManagerLocalChatMsg.CurrentChannel, key);
        //let data = ManagerChatTimestamp.getInstance().getChatTimestampData(this.dataIndex, ManagerLocalChatMsg.CurrentChannel);
        if(data){
            this.node_player_head && (this.node_player_head.active     = data.bVisibleHead);
            this.lbl_time         && (this.lbl_time.node.active        = data.bVisibleTimestamp);
            this.lbl_player_name  && (this.lbl_player_name.node.active = data.bVisibleHead);
        }
    }
}
