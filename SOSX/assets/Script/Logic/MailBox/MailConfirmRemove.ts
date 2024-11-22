/*
 * @Descripttion: 删除所有已读邮件的二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MailConfirmRemove extends PopLayer {

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    onLoad () {
        this.btn_closed.node.on("click",  ()=>{this.setVisible(false);}, this);
        this.btn_cancel.node.on("click",  ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", ()=>{
            let msg = new proto.Msg_RemoveReadMailReq();
            Net.Send(proto.Ptl.RemoveReadMailReq, msg);
            this.setVisible(false);
        }, this);
    }

    start () {}
}
