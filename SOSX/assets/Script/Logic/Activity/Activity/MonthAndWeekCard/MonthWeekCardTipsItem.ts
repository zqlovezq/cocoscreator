/*
 *  月卡周卡数据模块
 */

import { proto } from "../../../../Protocol/client_protocol";
import { Net } from "../../../../Protocol/Net";
import { tab } from "../../../../Table/table_gen";
import { isValidObj, kOneNumber, kZeroNumber, sendPayStartMsg } from "../../../Common/CommonInterface";
import Func from "../../../Utils/Func";
import { checkInt, getItemIconURL, getServerUtcTime, LoadResAsync, popRewardLayer_Ex, showPopLayerV2 } from "../../../Utils/GameUtils";
import ActivityController, { MembershipCardData } from "../ActivityController";
import ActivityLayer from "../ActivityLayer";
import MonthWeekRewardItem from "./MonthWeekRewardItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonthWeekCardTipsItem extends cc.Component {
    @property(cc.Prefab)
    rewardPfb: cc.Prefab = null

    @property(cc.Node)
    everydayReward: cc.Node = null

    @property(cc.Label)
    lbl_left_days: cc.Label = null;

    @property(cc.Node)
    lbl_inactive: cc.Node = null;


    onLoad() {

        
    }

    start() {

    }

    cardType: tab.MembershipCardType
    conf: tab.MembershipCardTable
    allRewards: any[] = []
    membershipData: MembershipCardData
    public initView(type: tab.MembershipCardType) {
        this.cardType = type

        this.node.getChildByName("month_node").active = this.isMonthCard()
        this.node.getChildByName("lifelong_node").active = !this.isMonthCard()
        
        this.conf = tab.Data.MembershipCardTableByMembershipCardType.getValue(this.cardType)
        this.conf.RechargeID = this.conf.RechargeID
        this.initReward(this.everydayReward, "Reward")
        this.refresh();
    }

    initReward(nn: cc.Node, key: string) {
        let len = 0
        if (this.conf[key + "ID"]) {
            len = this.conf[key + "ID"].length
            for (let index = 0; index < len; index++) {
                let n = cc.instantiate(this.rewardPfb)
                nn.addChild(n)
                let id = this.conf[key + "ID"][index]
                let type = this.conf[key + "Type"][index]
                let count = this.conf[key + "Count"][index]
                n.getComponent(MonthWeekRewardItem).setData(id, type, count)
            }
        }
    }

    isMonthCard() {
        return this.cardType == tab.MembershipCardType.MembershipCardType_MonthlyPass
    }

    refresh() {
        this.membershipData = ActivityController.getInstance().getMembershipCardDataByType(this.cardType)
        this.lbl_inactive.active = true

        if (this.membershipData.isBuy) {
            this.lbl_inactive.active = false

            if (this.isMonthCard()) {
                this.refreshLeftDays(this.membershipData.vaildTime)
            }
        } else {
            if (this.isMonthCard()) {
                this.lbl_left_days.node.parent.active = false
            }
        }
        this.setPrice()
    }

    /* 设置价格 */
    private setPrice() {
        let buyTxt = this.node.getChildByName("buy_btn")
        if (this.membershipData.isBuy) {
            if (this.isMonthCard()) {
                buyTxt.active = true
            }
        }
    }

    /* 刷新剩余天数 */
    public refreshLeftDays(overUTCTimes: number) {
        this.setLeftDays(overUTCTimes);
    }

    /* 设置剩余天数 */
    private setLeftDays(overUTCTimes: number) {
        let dayStr = tab.Data.GetKeyValue_ConfigTable().DayTip;

        const oneDaySeconds = 86400;
        let day = kOneNumber;
        let leftTimes = overUTCTimes - getServerUtcTime();
        day = Math.floor(leftTimes / oneDaySeconds);
        this.lbl_left_days.string = `${day}${dayStr}`;
        if (day == 0) {
            this.lbl_left_days.string = "不足1天"
        }
        this.lbl_left_days.node.parent.active = day >= 0
        if (day <= tab.Data.GetKeyValue_ConfigTable().MonthlyPassDayLeftTips) {
            this.lbl_left_days.node.color = new cc.Color().fromHEX("#DD6126")
        }else{
            this.lbl_left_days.node.color = new cc.Color().fromHEX("#FFFFFF")
        }
    }

    onGotoClick() {
        // showPopLayerV2("prefab/Activity/ActivityLayer", ActivityLayer,false).then(layer => {
        //     layer.initData(tab.LimitActivityID.LimitActivityID_MonthAndWeekCard)
        // })
        sendPayStartMsg(this.conf.RechargeID);
    }

}
