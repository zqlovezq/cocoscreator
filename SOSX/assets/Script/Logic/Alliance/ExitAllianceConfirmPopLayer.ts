/*
 * @Descripttion: 退出联盟弹框
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import { ShowTips } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import { checkRedDotOfApplyList, clearSelfAllianceInfo } from "./AllianceCommonInterface";

const {ccclass, property} = cc._decorator;

@ccclass
export default class ExitAllianceConfirmPopLayer extends PopLayer {

    @property(cc.Button)
    btn_closed: cc.Button = null;

    @property(cc.Button)
    btn_cancel: cc.Button = null;

    @property(cc.Button)
    btn_confirm: cc.Button = null;

    onLoad () {
        this.btn_confirm.node.on("click", this.onClickConfirm,          this);
        this.btn_cancel.node.on("click", ()=>{this.setVisible(false);}, this);
        this.btn_closed.node.on("click", ()=>{this.setVisible(false);}, this);

        //监听退出联盟消息
        Net.listenProtocol(proto.Ptl.QuitAllianceRsp, (buffer, ptl)=>{
            let msg = proto.Msg_QuitAllianceRsp.decode(buffer);
            cc.log("QuitAllianceRsp(监听退出联盟消息) : msg " + JSON.stringify(msg))
            if(msg && msg.result === proto.CommonErrorCode.Succeed){
                ShowTips("ExitAllianceSuccess");
                //首领退出联盟 目前来说就是解散联盟，小红点要消失
                if(Role.Instance.RoleData.allianceData.PostRank === tab.AlliancePositionType.AlliancePositionType_Leader){
                    checkRedDotOfApplyList(kZeroNumber);
                }
                clearSelfAllianceInfo();
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyExitAllianceInfo);
                RedDotManager.getInstance().CleanAllianceRedTip();
                this.setVisible(false);
            }
        }, this);
    }

    private onClickConfirm(){
        let msg = new proto.Msg_QuitAllianceReq();
        Net.Send(proto.Ptl.QuitAllianceReq, msg);
    }
}
