/*
 * @Descripttion: 聊天中战斗邀请模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
//import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import { checkFunctionIsOpen, isValidObj, kHundredNumber, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import BattleLayer from "../Main/BattleLayer";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { getServerUtcTime, showPopLayerV2, ShowTips } from "../Utils/GameUtils";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";
import { RequestPvePathType, SignRequestPvEPath } from "./ChatCellCommonFunc";
import { CheckHaveBannedCard } from "./ChatCommonInterface";
import ChatFightInvitationSelfInfo from "./ChatFightInvitationSelfInfo";
import ManagerChatFightMsg from "./ManagerChatFightMsg";
import ManagerLocalChatMsg from "./ManagerLocalChatMsg";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ChatOtherFightInvitation extends InfiniteCell {

    @property(ChatFightInvitationSelfInfo)
    node_self_info: ChatFightInvitationSelfInfo = null;
    
    @property(cc.Button)
    btn_receive: cc.Button = null;

    @property(PlayerCard)
    node_player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_rank_icon: cc.Sprite = null;

    private _room_id: number;
    private _invitation_start_time: number = kZeroNumber;
    private _fight_type: proto.FightType;
    private _invitation_role_id: string;
    private _bCanReceiveInvitation: boolean = true;
    private _configTimeLimit: number = kZeroNumber;
    private _bCardLevelLimit: boolean = false;
    private _bHaveBannedCard: boolean = false;

    onLoad () {
        this.btn_receive.node.on("click", this.onClickReceive, this);
    }

    start () {}

    onDestroy(){
        this.unschedule(this.refreshCutDownTime);
    }

    public UpdateContent(celldata){
        if(!celldata){return;}
        let invitationMsgObj: proto.AllianceFightInviteStruct = null;
        try {
            invitationMsgObj = JSON.parse(celldata.content);
        } catch (error) {
            if(!cc.sys.isNative){throw new Error("pvp邀请聊天JSON数据格式错误");}
        }
        
        if(!invitationMsgObj){
            if(!cc.sys.isNative){throw new Error("pvp邀请聊天JSON数据错误");}
            return;
        }
    
        this.unschedule(this.refreshCutDownTime);
        this.initData(invitationMsgObj);
    }
    
    /* 获取当前节点高度
     */
    public GetCellSize(){
        return this.node.height;
    }

    private initData(msg: proto.AllianceFightInviteStruct){
        this._room_id               = msg.roomID;
        this._fight_type            = msg.type;
        this._invitation_start_time = msg.startTime;
        this._invitation_role_id    = msg.playerInfo.roleID;
        this._configTimeLimit       = tab.Data.GetKeyValue_ConfigTable().AllianceInvitationTimeLimit;
        this._bHaveBannedCard       = proto.ChatChannelType.WorldChannel == ManagerLocalChatMsg.CurrentChannel &&
                                         CheckHaveBannedCard();
        this.node_self_info.initData(msg);
        let allianceName = isValidObj(msg.playerInfo.allianceName) ? 
                            msg.playerInfo.allianceName : tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.setPlayerName(msg.playerInfo.roleName);
        this.setPlayerAllianceName(allianceName);
        this.setPlayerHeadInfo(msg.playerInfo.indexCard);
        this.refreshCutDownTime();
        this.schedule(this.refreshCutDownTime, kOneNumber);
        this.checkAcceptCondition(msg);
    }
    
    /* 刷新倒计时
     */
    private refreshCutDownTime(){
        let leftTime         = getServerUtcTime() - this._invitation_start_time;
        let bArriveTimeLimit = leftTime >= this._configTimeLimit; //是否到达限时时效
        if(bArriveTimeLimit){
            this.unschedule(this.refreshCutDownTime);
        }
        
        let diffTime = this._configTimeLimit - leftTime;
        diffTime = diffTime < kZeroNumber ? kZeroNumber : diffTime;
        this.setBtnState(diffTime <= kZeroNumber);
    }

    /* 设置接收按钮状态
     * @param bGray  是否置灰
     */
    private setBtnState(bGray: boolean){
        this._bCanReceiveInvitation = !bGray;
        //邀请时效性结束，清除该条聊天信息
        !this._bCanReceiveInvitation && 
            ManagerChatFightMsg.getInstance().removeFightInvitationMsg(this._room_id, 
                                                                        ManagerLocalChatMsg.CurrentChannel);
    }

    /* 设置玩家头像信息
     * @param cardID  头像卡牌ID
     */
    private setPlayerHeadInfo(cardID: number){
        this.node_player_head && this.node_player_head.setVisibleLevel(false);
        this.node_player_head && this.node_player_head.initData(cardID, kOneNumber, false, false);
        this.node_player_head && (this.node_player_head.getComponent(PlayerCard).setCallback(()=>{
            showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
                layer.initData(this._invitation_role_id);
            });
        }));
    }

    /* 设置玩家名称
     */
    private setPlayerName(name: string){
        this.lbl_player_name.string = name;
    }

    /* 设置玩家联盟名称
     */
    private setPlayerAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    private setPlayerRankIcon(){

    }

    /* 检测是否有卡牌等级限制
     */
    private checkAcceptCondition(msg: proto.AllianceFightInviteStruct){
        if(!msg.bCardLvLimit){
            return;
        }

        let minLevel = Number.MAX_VALUE;
        for(let cardData of msg.playerInfo.pvpCardInfo.cardLists){
            if(cardData.level < minLevel){
                minLevel = cardData.level;
            }
        }

        minLevel = minLevel < msg.playerInfo.devilInfo.level ? minLevel : msg.playerInfo.devilInfo.level;

        let curTeams: proto.IDeckData = Role.Instance.RoleData.decks[Role.Instance.DeckIndex];
        let cardListLen          = curTeams.deckItems.length;
        for(let idx = kZeroNumber; idx < cardListLen; ++idx){
            let cardUUID = curTeams.deckItems[idx];
            let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(cardUUID);
            if (!isValidObj(cardInfo)){
                continue;
            }

            if(cardInfo.level < minLevel){
                this._bCardLevelLimit = true;
                return;
            }
        }

        let devilUUID = Role.Instance.RoleData.decks[Role.Instance.DeckIndex].lord;
        let devilCardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(devilUUID);
        if (!isValidObj(devilCardInfo)){
            return;
        }

        this._bCardLevelLimit = devilCardInfo.level < minLevel;
    }

    private onClickReceive(){
        if(!this._bCanReceiveInvitation){
            return;
        }

        //是无限防御要查查当日战斗次数是否用完了
        if(proto.FightType.AlliancePvE === this._fight_type || 
                proto.FightType.WorldChannelPvE === this._fight_type){
            let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
            if(!bOpenPveFight){
                ShowTips("CooperationFightOpenTip");
                return;
            }

            if(this._bHaveBannedCard){
                ShowTips("PveBanned");
                return;
            }

            if(this._bCardLevelLimit){
                ShowTips("ChatFightAcceptNotEnough");
                return;
            }
            
            SignRequestPvEPath.getInstance().setPvePath(RequestPvePathType.RECEIVE_PVE_INVITATION, this._room_id);
            Waiting.Show(WaitingTag.GetPveStatus.toString());
            BattleLayer.bOnlyPveAwardReddot = false;
            Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq());
            return;
        }
        
        let msg     = new proto.Msg_AllianceFightAcceptReq();
        msg.type    = this._fight_type;
        msg.roomID  = this._room_id;
        msg.channel = ManagerLocalChatMsg.CurrentChannel;
        Net.Send(proto.Ptl.AllianceFightAcceptReq, msg);
    }
}
