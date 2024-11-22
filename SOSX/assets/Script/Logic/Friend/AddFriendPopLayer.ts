/*
 * @Descripttion: 添加好友弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { checkStringIsAllSpace } from "../Alliance/AllianceCommonInterface";
import { addFriend, kNoneString } from "../Common/CommonInterface";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AddFriendPopLayer extends PopLayer {

    @property(cc.EditBox)
    edit_friend_name: cc.EditBox = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    onLoad () {
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", ()=>{
            if(checkStringIsAllSpace(this.edit_friend_name.string)){
                ShowTips("StringIsEmpty");
                return;
            }

            addFriend(kNoneString, this.edit_friend_name.string);
        }, this);


        /* 监听添加好友消息 */
        Net.listenProtocol(proto.Ptl.AddFriendRsp, (buffer, ptl)=>{
            let msg = proto.Msg_AddFriendRsp.decode(buffer);
            cc.log("AddFriendRsp (添加好友消息) msg: " + JSON.stringify(msg));
            if(msg && msg.result == proto.Msg_AddFriendRsp.ErrorCode.Succeed){
                this.setVisible(false);
                return;
            }
        }, this);
    }

    start () {}

}
