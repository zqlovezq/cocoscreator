/*
 * @Descripttion: 删除好友二次确认弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class DeleteFriendConfirmPopLayer extends PopLayer {

    @property(cc.Label)
    lbl_friend_name: cc.Label = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    private _role_id: string;

    onLoad () {
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", ()=>{
            let msg    = new proto.Msg_DeleteFriendReq();
            msg.roleID = this._role_id;
            Net.Send(proto.Ptl.DeleteFriendReq, msg);
        }, this);

        //监听删除好友回应
        Net.listenProtocol(proto.Ptl.DeleteFriendRsp, (buffer, ptl)=>{
            let msg = proto.Msg_DeleteFriendRsp.decode(buffer);
            cc.log("DeleteFriendRsp (删除好友回应) msg: " + JSON.stringify(msg));
            if(msg && msg.result == proto.Msg_DeleteFriendRsp.ErrorCode.Succeed){
                this.setVisible(false);
                return;
            }

            proto.Msg_DeleteFriendRsp.ErrorCode.FriendInexistence === msg.result && ShowTips("FriendInexistence");
        }, this);
    }

    public initData(friendRoleID: string, name: string){
        this.lbl_friend_name.string = name;
        this._role_id               = friendRoleID;
    }
}
