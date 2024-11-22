/*
 * @Descripttion: 聊天表情模块
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { formatChatTimestamp} from "../Alliance/AllianceCommonInterface";
import { isValidObj, kNoneString, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import FightEmoji from "../Fight/FightEmoji";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { getServerUtcTime, showPopLayerV2 } from "../Utils/GameUtils";
import { GenMapKey, GetChatTimestampData } from "./ChatCommonInterface";
import ManagerChatTimestamp from "./ManagerChatTimestamp";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";
import ManagerPrivateChatMsg from "./ManagerPrivateChatMsg";
//import EmotionChat from "./ChatDetailModel/EmotionChat";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatEmotionSupper extends InfiniteCell {
   @property(cc.Node)
   node_emotion: cc.Node = null;

   @property(cc.Node)
   node_play: cc.Node = null;

   @property(PlayerCard)
   node_player_head: PlayerCard = null;
   
   @property(cc.Label)
   lbl_timestamp: cc.Label = null;

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
   protected _emotion_id: number;

    onLoad () {}

    start () {}

    public UpdateContent(celldata){
        if(!celldata){return;}
        /*
        let emotionMsgObj: EmotionChat = null;
        try {
            emotionMsgObj = JSON.parse(celldata.content);
        } catch (error) {
            throw new Error("表情聊天JSON数据格式错误");
        }
        if(!emotionMsgObj){
            throw new Error("表情聊天支援JSON数据错误");
        }
        */
        this.initData(celldata);
    }
    
    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.height;
    }
    
    /*  */
    public initData(msgData: proto.IChatMsgData){
        this._player_uuid    = msgData.senderUUID;
        this._player_name    = msgData.msgSenderName;
        this._timestamp      = msgData.utcTime;
        this._player_head_id = msgData.playerHeadID;
        this._emotion_id     = Number(msgData.content);
        let allianceName = isValidObj(msgData.allianceName) ? 
                                msgData.allianceName : tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        //this.checkHeadAndTimestampVisible();
        this.setPlayerName();
        this.setPlayerHead();
        this.setTimestamp();
        this.setPlayerName();
        this.setPlayerAllianceName(allianceName);
        this.setPlayerRankIcon();

        this.node_emotion.getComponent(FightEmoji).setData(this._emotion_id, emotionID=>{
            this.playEmoji(emotionID);
        });
        this.checkAutoPlayEmotion();
    }

    /* 播放表情动画
     * @param emotionID   表情ID
     */
    protected playEmoji(emotionID: number) {
        let nodeName = "MyEmojiPlayer";
        let zIndex   = kOneNumber;
        let self     = this;
        this.node_play.removeAllChildren(true);
        EmojiPlayer.play(emotionID).then(player=>{
            if(cc.isValid(this.node)) {
                if(player){
                    player.node.name = nodeName;
                    self.node_play.addChild(player.node, zIndex);
                }
            }
        })
    }

    /**     
     * Description: 检测是否自动播放表情动画
     */
    protected checkAutoPlayEmotion(){
        let diff = getServerUtcTime() - this._timestamp;
        //这条消息的时间戳与当前服务器时间戳差值小于10，就表示刚刚是发送的消息，就要自动播放表情
        if(diff < kTwoNumber && kZeroNumber <= diff){
            this.playEmoji(this._emotion_id);
        }
    }

    /* 设置时间戳
     */
    protected setTimestamp(){
        this.lbl_timestamp && (this.lbl_timestamp.string = formatChatTimestamp(this._timestamp));
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

    /* 设置玩家联盟名称
     */
    private setPlayerAllianceName(name: string){
        this.lbl_alliance_name && (this.lbl_alliance_name.string = name);
    }

    /* 设置玩家段位
     */
    private setPlayerRankIcon(){

    }

    /* 检测模块头像和时间戳的可见性
     */
    private checkHeadAndTimestampVisible(){
        let key = proto.ChatChannelType.PrivateChannel == ManagerLocalChatMsg.CurrentChannel ? 
                    GenMapKey(ManagerPrivateChatMsg.CurrentPrivateObj) : kNoneString;
        let data = GetChatTimestampData(this.dataIndex, ManagerLocalChatMsg.CurrentChannel, key);
        //let data = ManagerChatTimestamp.getInstance().getChatTimestampData(this.dataIndex, ManagerLocalChatMsg.CurrentChannel);
        if(data){
            this.node_player_head && (this.node_player_head.node.active = data.bVisibleHead);
            this.lbl_timestamp    && (this.lbl_timestamp.node.active    = data.bVisibleTimestamp);
        }
    }
}
