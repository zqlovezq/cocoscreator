/*
 *  月卡周卡主界面
 */

import { proto } from "../../../../Protocol/client_protocol";
import { Net } from "../../../../Protocol/Net";
import { tab } from "../../../../Table/table_gen";
import PopLayer from "../../../Utils/PopLayer";
import ActivityController from "../ActivityController";
import MonthWeekCardTipsItem from "./MonthWeekCardTipsItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonthWeekCardTips extends PopLayer {
    @property(cc.Node)
    node_month_card: cc.Node = null;

    @property(cc.Node)
    node_lifetime_card: cc.Node = null;

    onLoad() {
        //监听月卡周卡领取奖励消息
        Net.listenProtocol(proto.Ptl.GetMembershipRewardRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetMembershipRewardRsp.decode(buffer);
            if (msg && proto.Msg_GetMembershipRewardRsp.ErrorCode.Succeed === msg.Result) {
                if (msg.Opt == proto.Msg_GetMembershipRewardRsp.Source.BuyLifetimeCard ||
                    msg.Opt == proto.Msg_GetMembershipRewardRsp.Source.BuyMonthlyCard) {
                    this.refresh()
                    return
                }
                this.hide();
            }
        }, this);
    }

    start() {
        this.node_month_card.getComponent(MonthWeekCardTipsItem).initView(tab.MembershipCardType.MembershipCardType_MonthlyPass);
        this.node_lifetime_card.getComponent(MonthWeekCardTipsItem).initView(tab.MembershipCardType.MembershipCardType_LifetimePass);
    }

    refresh() {
        this.node_month_card.getComponent(MonthWeekCardTipsItem).refresh()
        this.node_lifetime_card.getComponent(MonthWeekCardTipsItem).refresh()
    }

    onOkClick() {
        let type = ActivityController.getInstance().getMembershipCardRewardType()
        if (type == -1) {
            this.hide()
            return
        }

        let param = new proto.Msg_GetMembershipRewardReq()
        param.type = type
        Net.Send(proto.Ptl.GetMembershipRewardReq, param)
    }
}
