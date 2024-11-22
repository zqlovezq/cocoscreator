/*
 *  月卡周卡数据模块
 */

import { proto } from "../../../../Protocol/client_protocol";
import { Net } from "../../../../Protocol/Net";
import { tab } from "../../../../Table/table_gen";
import { isValidObj, kOneNumber, kZeroNumber, sendPayStartMsg } from "../../../Common/CommonInterface";
import Func from "../../../Utils/Func";
import { checkInt, getItemIconURL, getServerUtcTime, LoadResAsync, popRewardLayer_Ex, setTextTime_2, showPopLayerV2 } from "../../../Utils/GameUtils";
import ActivityController, { MembershipCardData } from "../ActivityController";
import MonthWeekCardTips from "./MonthWeekCardTips";
import MonthWeekRewardItem from "./MonthWeekRewardItem";

const { ccclass, property } = cc._decorator;

@ccclass
export default class MonthAndWeekItem extends cc.Component {
    @property(cc.Prefab)
    rewardPfb: cc.Prefab = null

    @property(cc.Node)
    buyReward: cc.Node = null

    @property(cc.Node)
    everydayReward: cc.Node = null

    @property(cc.Label)
    lbl_left_days: cc.Label = null;

    @property(cc.Label)
    lbl_price: cc.Label = null;

    @property(cc.Node)
    buy_node: cc.Node = null

    @property(cc.Node)
    get_node: cc.Node = null

    @property(cc.Node)
    got_node: cc.Node = null

    onLoad() {
        //监听月卡周卡领取奖励消息
        Net.listenProtocol(proto.Ptl.GetMembershipRewardRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetMembershipRewardRsp.decode(buffer);
            if (msg && proto.Msg_GetMembershipRewardRsp.ErrorCode.Succeed === msg.Result) {
                this.refresh();
            }
        }, this);
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
        this.initReward(this.buyReward, "BuyReward")
        this.initReward(this.everydayReward, "Reward")

        // if (this.allRewards.length) {
        //     var str = ""
        //     for (let index = 0; index < this.allRewards.length; index++) {
        //         const v = this.allRewards[index];
        //         let iconInfoObj = getItemIconURL(checkInt(v.id), v.type);
        //         let iconName
        //         if (iconInfoObj) {
        //             iconName = iconInfoObj.name
        //         } else {
        //             iconName = v.id
        //         }
        //         if (str != "") {
        //             str = str + "、"
        //         }
        //         str = str + v.count + iconName
        //     }
        //     this.node.getChildByName("month_node").getChildByName("txt1").getComponent(cc.Label).string = cc.js.formatStr("可累计购买，立得%s", str)
        // }

        this.refresh()
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
                // if (this.isMonthCard() && key == "BuyReward") {
                //     if (this.allRewards == null) {
                //         this.allRewards = []
                //     }

                //     let itemData = Func.forBy(this.allRewards, "id", id)
                //     if (itemData == null) {
                //         itemData = { count: 0, type: type, id: id }
                //         this.allRewards.push(itemData)
                //     }
                //     itemData.count = itemData.count + count
                // }
            }
        }
    }

    public initData(data: proto.IMonthAndWeekCardData) {
        this.setLeftDays(data.overTimes);
        this.setPrice();
    }

    isMonthCard() {
        return this.cardType == tab.MembershipCardType.MembershipCardType_MonthlyPass
    }

    refresh() {
        this.membershipData = ActivityController.getInstance().getMembershipCardDataByType(this.cardType)

        if (this.isMonthCard()) {
            this.refreshLeftDays(this.membershipData.vaildTime)
            this.node.getChildByName("month_node").getChildByName("monthdes_node").active = this.membershipData.isBuy
        }

        if (this.membershipData.canGet) {
            this.buy_node.active = false
            this.get_node.active = true
            this.got_node.active = false
        } else {
            this.get_node.active = false
            this.got_node.active = this.membershipData.isBuy
            this.buy_node.active = true
        }

        this.setPrice();
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
        if (day == 0){
            this.lbl_left_days.string = "不足1天"
        }
        this.lbl_left_days.node.parent.active = day >=0
        if (day <= tab.Data.GetKeyValue_ConfigTable().MonthlyPassDayLeftTips){
            this.lbl_left_days.node.color = new cc.Color().fromHEX("#DD6126")
        }else{
            this.lbl_left_days.node.color = new cc.Color().fromHEX("#FFFFFF")
        }
    }

    /* 设置价格 */
    private setPrice() {
        if (this.membershipData.isBuy) {
            if (!this.isMonthCard()){
                this.lbl_price.string = `已激活`;
                return
            }
        }
        let tabData = tab.Data.RechargeTableByID.getValue(this.conf.RechargeID);
        if (isValidObj(tabData)) {
            this.lbl_price.string = `¥${tabData.Price}`;
        }
    }

    /*  */
    private onClickBuy() {
        if (this.membershipData.isBuy && !this.isMonthCard()){
            return
        }
        sendPayStartMsg(this.conf.RechargeID);
    }

    private onClickGet() {
        let param = new proto.Msg_GetMembershipRewardReq()
        param.type = this.isMonthCard()? proto.Msg_GetMembershipRewardReq.Type.Monthly: proto.Msg_GetMembershipRewardReq.Type.Lifetime
        Net.Send(proto.Ptl.GetMembershipRewardReq, param)
    }
}
