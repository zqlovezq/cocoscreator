/*
 * @Descripttion: 战斗邀请二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { ResetChatInfo } from "../Chat/ChatCommonInterface";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import ManagerPrivateChatMsg from "../Chat/ManagerPrivateChatMsg";
import { k255, kNoneString, kZeroNumber } from "../Common/CommonInterface";
import { FightLoader } from "../Fight/FightLoader";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { checkStringIsAllSpace } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class InvitationFightConfirm extends PopLayer {

    @property(cc.EditBox)
    edit_message: cc.EditBox = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_clear: cc.Button = null;

    @property(cc.Label)
    lbl_title: cc.Label = null;

    @property(cc.Button)
    btn_select: cc.Button = null;

    @property(cc.Sprite)
    spr_select: cc.Sprite = null;

    @property(cc.Sprite)
    spr_unselect: cc.Sprite = null;

    @property(cc.Button)
    btn_help: cc.Button = null;

    @property(cc.Node)
    node_detail_tip: cc.Node = null;

    @property(cc.Node)
    node_limit_card_lv: cc.Node = null;

    private _fight_type: proto.FightType;
    private _friend_role_id: string;
    private _bSelected: boolean = false;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        
        this.btn_clear.node.on("click", ()=>{
            this.edit_message.string = kNoneString;
        }, this);

        this.btn_confirm.node.on("click", this.onClickConfirm, this);
        this.btn_select.node.on("click", ()=>{this._bSelected = !this._bSelected; this.setSelectedFlag();}, this);
        this.btn_help.node.on("click", ()=>{
            this.node_detail_tip.active = !this.node_detail_tip.active;
        }, this);

        //监听邀请好友战斗消息
        Net.listenProtocol(proto.Ptl.InvitationFriendFightRsp, (buffer, ptl)=>{
            let msg = proto.Msg_InvitationFriendFightRsp.decode(buffer);
            cc.log("InvitationFriendFightRsp(监听邀请好友战斗消息) : msg " + JSON.stringify(msg))
            if(msg && msg.result == proto.Msg_InvitationFriendFightRsp.ErrorCode.Succeed){
                this.setVisible(false);
                return;
            }

            proto.Msg_InvitationFriendFightRsp.ErrorCode.FightingNow === msg.result       && ShowTips("FriendFighting");
            proto.Msg_InvitationFriendFightRsp.ErrorCode.FriendInexistence === msg.result && ShowTips("FriendInexistence");
        }, this);
    }

    /*  */
    start () {
        this.setSelectedFlag();
    }

    /*  */
    setVisible(bVisible: boolean){
        super.setVisible(bVisible);
        ResetChatInfo();
    }
    
    /*  */
    public setFightType(type: proto.FightType, roleID?: string){
        this._fight_type     = type;
        this._friend_role_id = roleID;
        let bPve          = this._fight_type  === proto.FightType.AlliancePvE || 
                                this._fight_type === proto.FightType.FriendPve || this._fight_type === proto.FightType.WorldChannelPvE;
        let bVisibleLimit = this._fight_type === proto.FightType.WorldChannelPvE;
        let titleStr      = bPve ? tab.Data.GetKeyValue_ConfigTable().InfiniteDefenseTip : 
                                tab.Data.GetKeyValue_ConfigTable().FriendMatchTip;
        this.lbl_title.string          = titleStr;
        this.btn_help.node.active      = bVisibleLimit;
        this.node_limit_card_lv.active = bVisibleLimit;
    }

    /*  */
    private onClickConfirm(){
        let message = checkStringIsAllSpace(this.edit_message.string) ? this.edit_message.placeholder : this.edit_message.string;

        (proto.FightType.FriendPve === this._fight_type   || proto.FightType.FriendPvp === this._fight_type) && 
            this.sendFriendFightInvitation(message);
            
        (proto.FightType.AlliancePvE === this._fight_type || proto.FightType.AlliancePvP === this._fight_type || 
            proto.FightType.WorldChannelPvE === this._fight_type || proto.FightType.WorldChannelPvP === this._fight_type) && 
            this.sendAllianceFightInvitation(message);
            
        FightLoader.Instance.MatchChatFight(this._fight_type);
        this.setVisible(false);
    }

    /* 发送联盟战斗邀请消息 */
    private sendAllianceFightInvitation(message: string){
        let msg     = new proto.Msg_AllianceFightInvitationReq();
        msg.message = message;
        msg.type    = this._fight_type;
        msg.channel = ManagerLocalChatMsg.CurrentChannel;
        msg.bCardLvLimit = this._bSelected;
        Net.Send(proto.Ptl.AllianceFightInvitationReq, msg);
    }

    /* 发送好友战斗邀请消息 */
    private sendFriendFightInvitation(message: string){
        let msg     = new proto.Msg_InvitationFriendFightReq();
        msg.message = message;
        msg.type    = this._fight_type;
        msg.roleID  = this._friend_role_id;
        Net.Send(proto.Ptl.InvitationFriendFightReq, msg);
    }

    /*  */
    private setSelectedFlag(){
        this.spr_select.node.active = this._bSelected;
        //this.spr_unselect.node.opacity = this._bAutoPop ? k255 : kZeroNumber;
    }
}
