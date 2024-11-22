/*
 * @Descripttion: 联盟踢人二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AllianceExpelConfirmPfb extends PopLayer {

    @property(cc.Label)
    lbl_member_name: cc.Label = null;

    
    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    private _member_uuid: string; //成员uuid

    onLoad () {
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_confirm.node.on("click", this.onClickConfirm,          this);
    }

    public initData(memberUUID: string, memberName: string){
        this._member_uuid           = memberUUID;
        this.lbl_member_name.string = memberName;
    }

    private onClickConfirm(){
        let msg        = new proto.Msg_ExpelMemberReq();
        msg.memberUUID = this._member_uuid;
        Net.Send(proto.Ptl.ExpelMemberReq, msg);
        this.setVisible(false);
    }
}
