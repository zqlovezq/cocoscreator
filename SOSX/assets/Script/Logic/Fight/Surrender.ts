
import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class Surrender extends PopLayer {

    @property(cc.Button)
    bt_cancel: cc.Button = null;

    @property(cc.Button)
    bt_canfirm: cc.Button = null;

    start () {

    }

    public onClickCancel(){
        this.setVisible(false)
    }

    public onClickCanfirm(){
        let msg = new proto.Msg_FightSurrender();
        Net.Send(proto.FightPtl.FightSurrender, msg)
    }
}
