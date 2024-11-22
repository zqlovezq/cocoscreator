/*
 * @Descripttion: 处理支援区域缩回动画结束帧事件
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ReportConfirm extends PopLayer {
    roleId: string;
    index: number;

    setinfo(roleId: string, index: number) {
        this.roleId = roleId
        this.index = index
    }

    onOK(){
        let param = new proto.Msg_ReportReq()
        param.roleId = this.roleId
        param.FightLogIndex = this.index
        Net.Send(proto.Ptl.ReportReq, param)

        this.hide()
    }

    start () {

    }
}
