/*
 *  月卡周卡主界面
 */

import { proto } from "../../../../Protocol/client_protocol";
import { Net } from "../../../../Protocol/Net";
import { tab } from "../../../../Table/table_gen";
import { isValidObj } from "../../../Common/CommonInterface";
import { ShowTips } from "../../../Utils/GameUtils";
import ActivityController from "../ActivityController";
import MonthAndWeekItem from "./MonthAndWeekItem";

const {ccclass, property} = cc._decorator;

@ccclass
export default class MonthAndWeekLayer extends cc.Component {
    @property(cc.Node)
    node_month_card: cc.Node = null;

    @property(cc.Node)
    node_lifetime_card: cc.Node = null;

    onLoad () {

    }

    start () {
        this.node_month_card.getComponent(MonthAndWeekItem).initView(tab.MembershipCardType.MembershipCardType_MonthlyPass);
        this.node_lifetime_card.getComponent(MonthAndWeekItem).initView(tab.MembershipCardType.MembershipCardType_LifetimePass);
    }

}
