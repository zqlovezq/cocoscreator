const { ccclass, property } = cc._decorator

import { Net } from "../../Protocol/Net"
import { proto } from "../../Protocol/client_protocol";

import { tab } from "../../Table/table_gen"

import Role from "../Common/Role"

import PopLayer from "../Utils/PopLayer"
import { ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
const enum resetType {
    FIGHT,
    BOUNTY,
}
@ccclass
export default
    class UIResetFightRecord extends PopLayer {
    @property(cc.Label)
    diamond_cost: cc.Label = null;
    public RecordType = resetType.FIGHT
    onLoad() {
        this.diamond_cost.string = tab.Data.GetKeyValue_ConfigTable().ResetFightInfoCostDiamond.toString()
    }
    setType(type: number) {
        this.RecordType = type;
        if (this.RecordType === resetType.FIGHT) {
            Net.unlistenProtocol(proto.Ptl.ResetFightRecordRsp)

            Net.listenProtocol(proto.Ptl.ResetFightRecordRsp, (buffer, ptl) => {
                let msg = proto.Msg_ResetFightRecordRsp.decode(buffer);
                cc.log("ResetFightRecordRsp (ResetFightRecordRsp) msg: " + JSON.stringify(msg))
                this.onResetFightRecordRsp(msg)
            }, this)
        } else {
            Net.unlistenProtocol(proto.Ptl.ClearBountyStatRsp)

            Net.listenProtocol(proto.Ptl.ClearBountyStatRsp, (buffer, ptl) => {
                let msg = proto.Msg_ClearBountyStatRsp.decode(buffer);
                this.onResetBountyRecordRsp(msg)
            }, this)
        }
    }
    private onResetBountyRecordRsp(msg: proto.Msg_ClearBountyStatRsp) {
        if (msg == null) {
            return
        }
        if (msg.result == proto.CommonErrorCode.Succeed) {
            ShowTips("BuySuccess")  // 购买成功！
            this.hide()
            let msg = new proto.Msg_GetBountyStatReq();
            Net.Send(proto.Ptl.GetBountyStatReq, msg);
        } else {
            ShowTips("UnableToBuy")  // 购买成功！
        }
    }
    private onResetFightRecordRsp(msg: proto.Msg_ResetFightRecordRsp) {
        if (msg == null) {
            return
        }
        if (msg.result == proto.Msg_ResetFightRecordRsp.ErrorCode.Succeed) {
            ShowTips("BuySuccess")  // 购买成功！
            this.hide()
            let msg = new proto.Msg_PlayerInfoReq()
            msg.roleId = Role.Instance.ID
            Net.Send(proto.Ptl.PlayerInfoReq, msg)
        } else if (msg.result == proto.Msg_ResetFightRecordRsp.ErrorCode.MoneyNotEnough) {
            ShowTips("DiamondNotEnough") // 钻石不足！
        } else {
            let tips = tab.Data.TipsTableByKey.getValue("ErrorCodeTxt") // 错误码
            if (tips) {
                ShowTipsOfCustomString(tips.Value + msg.result)
            }
        }
    }

    private onResetFightRecord() {
        if(this.RecordType==resetType.FIGHT){
            let msg = new proto.Msg_ResetFightRecordReq()
            Net.Send(proto.Ptl.ResetFightRecordReq, msg)
        }else{
            let msg = new proto.Msg_ClearBountyStatReq()
            Net.Send(proto.Ptl.ClearBountyStatReq, msg)
        }
    }

    private onClose(event: cc.Event.EventTouch) {
        this.hide()
    }
}
