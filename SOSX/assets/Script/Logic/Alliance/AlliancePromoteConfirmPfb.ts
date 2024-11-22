/*
 * @Descripttion: 提升联盟成员职位二次确认框
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { kOneNumber } from "../Common/CommonInterface";
import PopLayer from "../Utils/PopLayer";
import { getAlliancePositionDes } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class AlliancePromoteConfirmPfb extends PopLayer {

    @property(cc.Label)
    lbl_member_name: cc.Label = null;

    @property(cc.Label)
    lbl_position: cc.Label = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    private _player_position: number;
    private _player_uuid: string;
    private _player_name: string;

    onLoad () {
        this.btn_confirm.node.on("click", this.onClickAppoint, this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this)
    }

    public initData(position: number, playerUUID: string, playerName: string){
        this._player_position = position;
        this._player_uuid     = playerUUID;
        this._player_name     = playerName;
        this.setPlayerName();
        this.setPosition();
    }

    private setPlayerName(){
        this.lbl_member_name.string = this._player_name;
    }

    private setPosition(){
        this.lbl_position.string = getAlliancePositionDes(this._player_position - kOneNumber);
    }

    private onClickAppoint(){
        let msg      = new proto.Msg_AllianceSetPostRankReq();
        msg.postRank = this._player_position - kOneNumber;
        msg.roleID   = this._player_uuid;
        Net.Send(proto.Ptl.AllianceSetPostRankReq, msg);
        this.setVisible(false);
    }
}
