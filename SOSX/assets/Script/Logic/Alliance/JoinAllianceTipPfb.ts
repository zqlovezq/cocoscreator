/*
 * @Descripttion: 加入联盟的提示
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class JoinAllianceTipPfb extends PopLayer {

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_join: cc.Button = null;

    @property(cc.Button)
    btn_exit: cc.Button = null;

    private _alliance_uuid: string;

    onLoad () {
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_exit.node.on("click", ()=>{this.setVisible(false);},   this);
        this.btn_join.node.on("click", this.onClickJoin,                this);
    }

    public initData(allianceName: string, allianceUUID: string){
        this._alliance_uuid           = allianceUUID;
        this.lbl_alliance_name.string = allianceName;
    }

    private onClickJoin(){
        let msg        = new proto.Msg_JoinAllianceReq();
        msg.allianceID = this._alliance_uuid;
        Net.Send(proto.Ptl.JoinAllianceReq, msg);
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_DisposeAfterRequestJoinAlliance);
        this.setVisible(false);
    }
}
