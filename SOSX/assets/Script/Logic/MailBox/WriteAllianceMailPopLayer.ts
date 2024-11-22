/*
 * @Descripttion: 联盟中写邮件模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class WriteAllianceMailPopLayer extends PopLayer {

    @property(cc.EditBox)
    edit_title: cc.EditBox = null;

    @property(cc.EditBox)
    edit_content: cc.EditBox = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    onLoad () {
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", ()=>{
            let msg = new proto.Msg_WriteAllianceMailReq();
            Net.Send(proto.Ptl.WriteAllianceMailReq, msg);
        }, this);

        //监听写邮件消息
        Net.listenProtocol(proto.Ptl.WriteAllianceMailRsp, (buffer, ptl)=>{
            let msg = proto.Msg_WriteAllianceMailRsp.decode(buffer);
            cc.log("WriteAllianceMailRsp (联盟中写邮件) msg: " + JSON.stringify(msg));
            if(msg && msg.result === proto.Msg_WriteAllianceMailRsp.ErrorCode.Succeed){
                return;
            }

            proto.Msg_WriteAllianceMailRsp.ErrorCode.SensitiveWordError === msg.result && ShowTips("HaveSensitiveWord");
            proto.Msg_WriteAllianceMailRsp.ErrorCode.TitleEmpty === msg.result         && ShowTips("MailTitleEmpty");
            proto.Msg_WriteAllianceMailRsp.ErrorCode.ContentEmpty === msg.result       && ShowTips("MailContentEmpty");
        }, this);

    }

    start () {}
}
