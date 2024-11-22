/**
 * 
*/

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import { FightLoader } from "../Fight/FightLoader";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameModelFriendJoinRoom extends PopLayer {

    @property(cc.Node)
    close_btn:cc.Node = null;

    @property(cc.EditBox)
    editbox: cc.EditBox = null;

    @property(cc.Button)
    accept_btn: cc.Button = null;

    @property(cc.Label)
    desp_txt: cc.Label = null;

    onLoad() {
        this.accept_btn.node.on("click", this.onBtnClickAccept, this);
        this.close_btn.on("click", ()=>{this.setVisible(false);}, this);

        // //监听接受战斗邀请响应
        // Net.listenProtocol(proto.Ptl.AllianceFightAcceptRsp, (buffer, ptl) => {
        //     let msg = proto.Msg_AllianceFightAcceptRsp.decode(buffer);
        //     cc.log("AllianceFightAcceptRsp (联盟战斗接受) msg: " + JSON.stringify(msg))
        //     if (msg && msg.result === proto.Msg_AllianceFightAcceptRsp.ErrorCode.Succeed) {
        //         FightLoader.Instance.WaitingMatchChatFight(msg.type);
        //         return;
        //     }
        //     /* 显示各种Tips */
        //     proto.Msg_AllianceFightAcceptRsp.ErrorCode.OverTime === msg.result && ShowTips("FightInvitationOverTime");
        //     proto.Msg_AllianceFightAcceptRsp.ErrorCode.PveCountNotEnough === msg.result && ShowTips("CooperationFightNotEnough");
        //     proto.Msg_AllianceFightAcceptRsp.ErrorCode.BannedCard === msg.result && ShowTips("HaveBannedCard");
        // }, this);
    }

    setDetails(details : Object){
        this.editbox.string = details.roomID;
        this.desp_txt.string = details.desp || "您的好友邀请您加入房间"; //TODO:
    }

    onBtnClickAccept() {
        // let msg = new proto.Msg_AllianceFightAcceptReq();
        // msg.type = proto.FightType.WorldChannelPvP;
        // msg.roomID = Number(this.editbox.string);
        // msg.channel =proto.ChatChannelType.PrivateChannel;
        // Net.Send(proto.Ptl.AllianceFightAcceptReq, msg);

        let msg = new proto.Msg_JoinPrivateRoomReq();
        msg.type = proto.FightType.WorldChannelPvP;
        msg.roomID = Number(this.editbox.string);
        //msg.channel =proto.ChatChannelType.PrivateChannel;
        Net.Send(proto.Ptl.JoinPrivateRoomReq, msg);
    }
    
}
