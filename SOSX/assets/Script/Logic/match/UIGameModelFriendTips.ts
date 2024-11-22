import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import UIGameModelFriendJoinRoom from "./UIGameModelFriendJoinRoom";
const { ccclass, property } = cc._decorator;

@ccclass
export default class UIGameModelFriendTips extends PopLayer {
    
    @property(cc.Node)
    close_btn: cc.Node = null

    @property(cc.Button)
    create_room_btn: cc.Button = null;

    @property(cc.Button)
    join_room_btn: cc.Button = null;
    
    onLoad() {
        this.close_btn.on("click", () => { this.setVisible(false); }, this);
        this.create_room_btn.node.on("click", this.onBtnCreateRoom, this);
        this.join_room_btn.node.on("click", this.onBtnJoinRoom, this);
    }

    /*  */
    private onBtnCreateRoom(event: cc.Event.EventTouch) {
        this.setVisible(false);
        // let msg = new proto.Msg_AllianceFightInvitationReq();
        // msg.message = "";//"一起玩一场吧"
        // msg.type = proto.FightType.WorldChannelPvP
        // //msg.channel = proto.ChatChannelType.WorldChannel;
        // msg.channel = proto.ChatChannelType.PrivateChannel; /* zhibo+@20230527 for <test create room> */
        // msg.bCardLvLimit = false;//false
        // Net.Send(proto.Ptl.AllianceFightInvitationReq, msg);

        /* 新弄了一个协议 */
        let msg = new proto.Msg_CretePrivateRoomReq();
        msg.message = "";//"一起玩一场吧"
        msg.type = proto.FightType.WorldChannelPvP
        //msg.channel = proto.ChatChannelType.WorldChannel;
        // msg.channel = proto.ChatChannelType.PrivateChannel; /* zhibo+@20230527 for <test create room> */
        // msg.bCardLvLimit = false;//false
        Net.Send(proto.Ptl.CretePrivateRoomReq, msg);
    }

    /*  */
    private onBtnJoinRoom(event: cc.Event.EventTouch) {
        this.setVisible(false)
        showPopLayerV2("prefab/UIGameModelFriendJoinRoom", UIGameModelFriendJoinRoom, false).then(nodeFightOther => {
            
        });
    }
}
