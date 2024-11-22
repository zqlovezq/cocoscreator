/*
 * @Descripttion: 
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { getTimeDiffString } from "../Alliance/AllianceCommonInterface";
import { RequestPvePathType, SignRequestPvEPath } from "../Chat/ChatCellCommonFunc";
import { checkFunctionIsOpen, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import BattleLayer from "../Main/BattleLayer";
import PlayerCard from "../PlayerInfo/PlayerCard";
import { getServerUtcTime, setGray, ShowTips } from "../Utils/GameUtils";
import Waiting from "../Utils/Waiting";
import { WaitingTag } from "../Utils/WaitingTag";

const {ccclass, property} = cc._decorator;

@ccclass
export default class FriendFightInvitation extends cc.Component {

    @property(cc.Label)
    lbl_time: cc.Label = null;

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Button)
    btn_receive: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Label)
    lbl_message: cc.Label = null;

    @property(PlayerCard)
    node_player_head: PlayerCard = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Sprite)
    spr_btn_bg: cc.Sprite = null;
    
    private _room_id: number;
    private _invitation_start_time: number   = kZeroNumber;
    private _fight_type: proto.FightType;
    private _invitation_role_id: string;
    private _bCanReceiveInvitation: boolean  = true;
    private _configTimeLimit: number         = kZeroNumber;

    onLoad () {
        this.btn_receive.node.on("click", this.onClickReceive, this);
        this.btn_cancel.node.on("click",  this.onClickCancel,  this);

        //监听发送战斗邀请响应消息
        Net.listenProtocol(proto.Ptl.GetPveStatusRsp, buffer=>{
            if(BattleLayer.bOnlyPveAwardReddot){
                return;
            }

            if(!this.node.activeInHierarchy || !this.node.active){
                return;
            }

            Waiting.Hide(WaitingTag.GetPveStatus.toString());
            let msg = proto.Msg_GetPveStatusRsp.decode(buffer);
            cc.log("GetPveStatusRsp (获取pve状态) msg: " + JSON.stringify(msg));
            if(msg) {
                let maxCount = tab.Data.GetKeyValue_ConfigTable().PveMaxCount; 
                Role.Instance.isDemonPass && (maxCount = tab.Data.GetKeyValue_ConfigTable().PveVipMaxCount); //通行证
                
                let leftCount = maxCount - msg.pveCount;
                leftCount > kZeroNumber && 
                SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.RECEIVE_PVE_INVITATION && 
                this.disposeFriendFightInvitation(true);
            }
        }, this);

        //监听购买pve次数成功消息
        Net.listenLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyBuyPveSuccess, (param:any)=>{
            if(!this.node.activeInHierarchy || !this.node.active){return;}
            
            SignRequestPvEPath.getInstance().getPvePath() === RequestPvePathType.RECEIVE_PVE_INVITATION && this.disposeFriendFightInvitation(true);
        }, this);
        
        //监听接受战斗邀请响应
        Net.listenProtocol(proto.Ptl.OperatorFriendFightInvitationRsp, (buffer, ptl)=>{
            let msg = proto.Msg_OperatorFriendFightInvitationRsp.decode(buffer);
            cc.log("OperatorFriendFightInvitationRsp (接受或者拒绝好友战斗邀请) msg: " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode.Succeed){
                !msg.bAgree && (this.node.active = false);
                return;
            }
        }, this);
    }

    onDestroy(){
        this.unschedule(this.refreshCutDownTime);
    }

    /* 设置好友战斗邀请
     */
     public setFriendInvitation(data: proto.IFriendFightInvitationData){
        this.btn_cancel.node.active  = true;
        this._room_id                = data.roomID;
        this._fight_type             = data.type;
        this._invitation_start_time  = data.invitationTime;
        this._invitation_role_id     = data.roleID;
        this._configTimeLimit        = tab.Data.GetKeyValue_ConfigTable().AllianceInvitationTimeLimit;

        this.setTitle();
        this.setInvitationMessage(data.message);
        this.setPlayerName(data.roleName);
        this.setPlayerHeadInfo(data.headID);
        this.unschedule(this.refreshCutDownTime);
        this.refreshCutDownTime();
        this.schedule(this.refreshCutDownTime, kOneNumber);
    }
    
    /* 设置玩家头像信息
     * @param cardID  头像卡牌ID
     */
     private setPlayerHeadInfo(cardID: number){
        this.node_player_head.initData(cardID, kOneNumber, false, true);
    }
    
    /* 设置玩家名称
     */
     private setPlayerName(name: string){
        this.lbl_player_name.string = name;
    }
    
    /* 设置邀请留言
     */
     private setInvitationMessage(message: string){
        this.lbl_message.string = message;
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
        diffTime     = diffTime < kZeroNumber ? kZeroNumber : diffTime;
        this.lbl_time.string = getTimeDiffString(diffTime);
        this.setBtnState(diffTime <= kZeroNumber);
    }

    /* 设置标题
     */
    private setTitle(){
        let titleStr = (this._fight_type === proto.FightType.AlliancePvE || 
                        this._fight_type === proto.FightType.FriendPve || 
                        this._fight_type === proto.FightType.WorldChannelPvE) ? 
                        tab.Data.GetKeyValue_ConfigTable().InfiniteDefenseTip : 
                        tab.Data.GetKeyValue_ConfigTable().FriendMatchTip;
        this.lbl_title.string = titleStr;

    }
    
    /* 设置接收按钮状态
     * @param bGray  是否置灰
     */
     private setBtnState(bGray: boolean){
        this._bCanReceiveInvitation = !bGray;
        setGray(this.spr_btn_bg, bGray);
        bGray && this.disposeFriendFightInvitation(false);
    }
    
    /* 处理好友战斗邀请
     */
     private disposeFriendFightInvitation(bAgree: boolean){
        let msg          = new proto.Msg_OperatorFriendFightInvitationReq();
        msg.bAgree       = bAgree;
        msg.roomID       = this._room_id;
        msg.type         = this._fight_type;
        msg.createRoleID = this._invitation_role_id;
        Net.Send(proto.Ptl.OperatorFriendFightInvitationReq, msg);
    }

    private onClickReceive(){
        if(!this._bCanReceiveInvitation){
            return;
        }

        //是无限防御要查查当日战斗次数是否用完了
        if( proto.FightType.AlliancePvE === this._fight_type || 
            proto.FightType.FriendPve === this._fight_type || 
            proto.FightType.WorldChannelPvE === this._fight_type){
            let bOpenPveFight = checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_CooperationModel);
            if(!bOpenPveFight){
                ShowTips("CooperationFightOpenTip");
                return;
            }
            
            SignRequestPvEPath.getInstance().setPvePath(RequestPvePathType.RECEIVE_PVE_INVITATION, this._room_id);
            Waiting.Show(WaitingTag.GetPveStatus.toString())
            BattleLayer.bOnlyPveAwardReddot = false

            Net.Send(proto.Ptl.GetPveStatusReq, new proto.Msg_GetPveStatusReq());
            return;
        }
        this.disposeFriendFightInvitation(true);
    }

    private onClickCancel(){
        this.disposeFriendFightInvitation(false);
    }
}
