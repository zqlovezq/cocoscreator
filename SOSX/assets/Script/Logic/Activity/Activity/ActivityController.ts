/**
 * 
 */

import { proto } from "../../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../../Protocol/LocalMessage";
import { Net } from "../../../Protocol/Net";
import { tab } from "../../../Table/table_gen";
import { setRoleAllianceData } from "../../Alliance/AllianceCommonInterface";
import { checkFunctionIsOpen, isValidObj, kZeroNumber } from "../../Common/CommonInterface";
import Role from "../../Common/Role";
import Func from "../../Utils/Func";
import { checkInt, getServerUtcTime, popRewardLayer_Ex, ShowErrorTips, ShowTips } from "../../Utils/GameUtils";
//import { GrowFundRechargeID } from "./GrowFund";

const { ccclass, property } = cc._decorator;

//新加入的活动，如果有开启的条件限制，需要在此处添加 活动id 对应的  开启条件的枚举
export const ActivityID2OpenFunctionID = {
    [tab.LimitActivityID.LimitActivityID_GrowFund]: tab.OpenFunctionName.OpenFunctionName_GrowFund,
    [tab.LimitActivityID.LimitActivityID_MonthAndWeekCard]: tab.OpenFunctionName.OpenFunctionName_WeekMonthPass,
    [tab.LimitActivityID.LimitActivityID_UnpackRebate]: tab.OpenFunctionName.OpenFunctionName_UnpackRebate,
}

export interface MembershipCardData {
    isBuy: boolean //是否已购买
    canGet?: boolean //是否可领取
    vaildTime: number //到期时间
    awardTime: number //领奖时间
}

@ccclass
export default class ActivityController {

    private static instance: ActivityController = null;

    private constructor() {

    }

    public static getInstance() {
        if (this.instance == null) {
            this.instance = new ActivityController;
            this.instance.listenProtocolEvent();
        }
        return this.instance;
    }

    //活动红点
    private mapActID2Reddot: Map<number, number> = new Map<number, number>();
    //活动数据
    private Data: Map<number, proto.IActivityInfo> = new Map<number, proto.IActivityInfo>();

    private listenProtocolEvent() {
        //活动变更
        Net.listenProtocol(proto.Ptl.ChangeActivityRsp, (buffer, ptl) => {
            let msg = proto.Msg_ChangeActivityRsp.decode(buffer);
            cc.log("ChangeActivityRsp(活动变更) : msg " + JSON.stringify(msg))
            if (msg != null) {
                if (checkFunctionIsOpen(ActivityID2OpenFunctionID[msg.changeInfo.ID])) {
                    /**
                     * 1 需要先获取数据
                     * 2 然后设置数据
                     * 这两步的步骤不能乱
                     */
                    let activityData = this.Data.get(msg.changeInfo.ID);
                    this.Data.set(msg.changeInfo.ID, msg.changeInfo);
                    this.refreshActivityReddotByID(msg.changeInfo.ID);
                    if (activityData == undefined || !activityData) {
                        Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_NewActivityOpen, msg.changeInfo.ID);
                    }
                }
            }
        }, this)

        //基金领奖
        Net.listenProtocol(proto.Ptl.GrowFundGetAwardRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_GrowFundGetAwardRsp.decode(buffer)
            cc.log("ActivityController.ts : GrowFundGetAwardRsp(基金领奖) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == proto.Msg_GrowFundGetAwardRsp.ErrorCode.Succeed) {
                    let data = this.getActivityDataByID(tab.LimitActivityID.LimitActivityID_GrowFund)
                    if (data) {
                        for (let i = 0; i < data.GrowFund.Cell.length; i++) {
                            if (data.GrowFund.Cell[i].ID == msg.info.ID) {
                                data.GrowFund.Cell[i].GetAwardType = msg.info.GetAwardType
                                break
                            }
                        }
                        this.refreshActivityReddotByID(tab.LimitActivityID.LimitActivityID_GrowFund)
                        Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_GrowFundGetAwardRsp, msg)
                        Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, tab.LimitActivityID.LimitActivityID_GrowFund) //刷新顶部的活动按钮的小红点和主界面的小红点
                    }
                }
            }
        }, this)

        //成长基金购买成功
        Net.listenProtocol(proto.Ptl.ActivityRechargeRsp, (buffer: Uint8Array, ptl: number) => {
            let msg = proto.Msg_ActivityRechargeRsp.decode(buffer)
            cc.log("ActivityRechargeRsp(成长基金购买成功) msg: " + JSON.stringify(msg))
            if (msg != null) {
                if (msg.result == proto.Msg_ActivityRechargeRsp.ErrorCode.Succeed) {
                    if (msg.RechargeId == tab.Data.GetKeyValue_ConfigTable().LimitActivityGrowFundRechargeID) {
                        let data = this.getActivityDataByID(tab.LimitActivityID.LimitActivityID_GrowFund);
                        if (data) {
                            //cc.log("data: " + JSON.stringify(data))
                            data.GrowFund.UnlockFund = true
                            this.Data.set(data.ID, data);
                            this.refreshActivityReddotByID(tab.LimitActivityID.LimitActivityID_GrowFund)
                            Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_ActivityRechargeRsp, null)
                            Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, tab.LimitActivityID.LimitActivityID_GrowFund)
                        }
                    }
                }
            }
        }, this)

        //监听月卡周卡领取奖励消息
        Net.listenProtocol(proto.Ptl.GetMembershipRewardRsp, (buffer, ptl) => {
            let msg = proto.Msg_GetMembershipRewardRsp.decode(buffer);
            cc.log("ReceiveMonthWeekCardRewardRsp(月卡周卡领取奖励消息) : msg " + JSON.stringify(msg))
            if (msg && msg.Result == 0) {
                Role.Instance.setMembershipData(msg.Data)
                popRewardLayer_Ex(msg.Awards);

                Net.pushLoaclMessage(LOCAL_MESSAGE.Activity_RefreshReddotVisible, tab.LimitActivityID.LimitActivityID_MonthAndWeekCard) //刷新顶部的活动按钮的小红点和主界面的小红点
            } else {
                ShowErrorTips(ptl, msg.Result)
            }
        }, this);
    }

    /* 设置活动数据 */
    public set activityData(dataList: proto.IActivityInfo[]) {
        this.Data.clear();
        if (!dataList) {
            return;
        }

        let dataListLen = dataList.length;
        for (let idx = kZeroNumber; idx < dataListLen; idx++) {
            if (checkFunctionIsOpen(ActivityID2OpenFunctionID[dataList[idx].ID])) {
                this.Data.set(dataList[idx].ID, dataList[idx]);
            }
        }
        this.refreshActivityReddot();
    }

    /* 获取活动数据 */
    public getActivityData(): Map<number, proto.IActivityInfo> {
        return new Map<number, proto.IActivityInfo>(this.Data);
    }

    /* 有无正在进行的活动 */
    public hasRunningActivity() {
        return this.Data && this.Data.size > kZeroNumber;
    }

    /* 根据活动ID获取活动数据 */
    public getActivityDataByID(ID: number): proto.IActivityInfo {
        return new proto.ActivityInfo(this.Data.get(ID));
    }

    /* 根据活动ID 获取红点数量 */
    public getActivityRedTipCount(actID: number): number {
        return this.mapActID2Reddot.get(actID) || kZeroNumber;
    }

    /* 查找活动有无红点了 */
    public activityHasRed(): boolean {
        let count: number = kZeroNumber;
        this.mapActID2Reddot.forEach((cnt: number, ID: number) => {
            count += cnt;
        })

        return count > kZeroNumber;
    }

    /* 查询活动是不是都结束了 */
    public IsActivitiesAllOver(): boolean {
        let bOver: boolean = true;
        this.Data.forEach((act, activityID) => {
            if (act.endTimeUTC > 0 && act.endTimeUTC <= getServerUtcTime()) {
                //时间上已经结束
            } else {
                //需要特殊结束状态的活动判断(比如:奖励领完之后该活动也消失)
                switch (activityID) {
                    case tab.LimitActivityID.LimitActivityID_GrowFund:
                        bOver = bOver && this.IsGrowFundGetAll();
                        break;

                    case tab.LimitActivityID.LimitActivityID_MonthAndWeekCard:
                        bOver = bOver && false;
                        break;

                    case tab.LimitActivityID.LimitActivityID_UnpackRebate:
                        bOver = bOver && true;
                        break;

                    default:
                        break;
                }
            }
        });
        return bOver;
    }

    //刷新所有活动的红点
    refreshActivityReddot() {
        this.Data.forEach((value: proto.IActivityInfo, activityID: number) => {
            this.refreshActivityReddotByID(activityID);
        })
        this.refreshActivityReddotByID(tab.LimitActivityID.LimitActivityID_MonthAndWeekCard);
    }

    /* 根据活动ID刷新相应活动的红点 */
    refreshActivityReddotByID(activityID: number) {
        switch (activityID) {
            case tab.LimitActivityID.LimitActivityID_GrowFund:
                this.mapActID2Reddot.set(activityID, this.refreshGrowFundReddot());
                break;
            case tab.LimitActivityID.LimitActivityID_MonthAndWeekCard:
                //this.mapActID2Reddot.set(activityID, this.refreshUnpackRebateRedDot());
                this.mapActID2Reddot.set(activityID, this.refreshMonthCardReddot());
            default:
                break;
        }
    }

    //刷新月卡红点
    private refreshMonthCardReddot(): number {
        return this.getMembershipCardRewardType()==-1?0:1
    }

    //刷新成长基金红点
    private refreshGrowFundReddot(): number {
        let act = this.Data.get(tab.LimitActivityID.LimitActivityID_GrowFund)
        if (!act) {
            return 0
        }

        if (!act.GrowFund || !act.GrowFund.Cell) {
            return 0
        }

        let cell = act.GrowFund.Cell
        let cfgData = tab.Data.LimitActivityGrowFundTable

        if (cell.length < cfgData.length) {
            let mapdata: Map<number, proto.IGFCell> = new Map<number, proto.IGFCell>()
            for (let j = 0; j < cell.length; j++) {
                mapdata.set(cell[j].ID, cell[j])
            }

            for (let i = 0; i < cfgData.length; i++) {
                if (mapdata.get(cfgData[i].ID) == undefined) {
                    let info = new proto.GFCell()
                    info.ID = cfgData[i].ID
                    info.GetAwardType = proto.GFCellAwardState.NotGet
                    cell.push(info)
                }
            }
        }

        let cnt: number = 0
        let data = act.GrowFund.Cell
        for (let i = 0; i < data.length; i++) {
            let cfg = tab.Data.LimitActivityGrowFundTableByID.getValue(data[i].ID)
            if (cfg && cfg.NeedRankScore <= act.GrowFund.HistoryRankScore) {
                data[i].GetAwardType == proto.GFCellAwardState.NotGet ? (++cnt)
                    : act.GrowFund.UnlockFund ? (data[i].GetAwardType == proto.GFCellAwardState.GetFree ? (++cnt) : null)
                        : null
            }
        }
        return cnt
    }

    //成长基金是否都已领完
    IsGrowFundGetAll(): boolean {
        let ball = true
        let act = this.Data.get(tab.LimitActivityID.LimitActivityID_GrowFund)
        if (!act) {
            return true
        }

        if (!act.GrowFund || !act.GrowFund.Cell) {
            return true
        }

        let data = act.GrowFund.Cell
        for (let i = 0; i < data.length; i++) {
            ball = ball && data[i].GetAwardType == proto.GFCellAwardState.GetAll
        }

        return ball
    }

    /* 刷新开箱返利红点 */
    private refreshUnpackRebateRedDot() {
        let activityData = this.Data.get(tab.LimitActivityID.LimitActivityID_UnpackRebate);
        if (!isValidObj(activityData)) {
            return kZeroNumber;
        }

        return activityData.unpackRebateInfo.unpackRebateCount;
    }

    /* 变更开箱返利开箱次数 */
    public changeUnpackRebateData(count: number) {
        let data = this.Data.get(tab.LimitActivityID.LimitActivityID_UnpackRebate);
        if (data) {
            data.unpackRebateInfo.unpackRebateCount = count;
        }
    }

    /**
     * 
     * @returns 是否解锁任一一个活动
     */
    public isUnlockAny() {
        for (const key in ActivityID2OpenFunctionID) {
            if (this.checkShowByID(checkInt(key))) {
                return true
            }
        }
        return false
    }

    /**
     * 根据活动id检测是否显示按钮
     * @param id 
     */
    public checkShowByID(id: tab.LimitActivityID) {
        let isUnlock = checkFunctionIsOpen(ActivityID2OpenFunctionID[id])
        if (isUnlock) {
            var conf = tab.Data.LimitActivityTableByID.getValue(id)
            if (conf && (conf.EndTimeUTC < 0 || conf.EndTimeUTC > getServerUtcTime())) {
                if (id == tab.LimitActivityID.LimitActivityID_GrowFund) {
                    return !this.IsGrowFundGetAll()
                }
                if (id == tab.LimitActivityID.LimitActivityID_MonthAndWeekCard) {
                    return true
                }
            }
        }

        return false
    }

    getMembershipCardDataByType(cardType: tab.MembershipCardType): MembershipCardData {
        let dd: MembershipCardData = { isBuy: false, vaildTime: 0, awardTime: 0 }
        if (cardType == tab.MembershipCardType.MembershipCardType_MonthlyPass) {
            dd = { isBuy: false, vaildTime: Role.Instance.membershipData.MonthlyCardVaildTime, awardTime: Role.Instance.membershipData.MonthlyCardAwardTime }
            dd.isBuy = dd.vaildTime > getServerUtcTime()
        } else if (cardType == tab.MembershipCardType.MembershipCardType_LifetimePass) {
            dd = { isBuy: false, vaildTime: Role.Instance.membershipData.LifetimeCardBuyTime, awardTime: Role.Instance.membershipData.LifetimeCardAwardTime }
            dd.isBuy = dd.vaildTime > 0
        }
        if (dd.isBuy) {
            dd.canGet = Func.timeToDayStart1(getServerUtcTime()) != Func.timeToDayStart1(dd.awardTime)
            // if (dd.canGet && cardType == tab.MembershipCardType.MembershipCardType_MonthlyPass) {
            //     dd.vaildTime = dd.vaildTime + 24 * 60 * 60
            // }
        }
        return dd
    }

    getMembershipCardRewardType(): number {
        let month = this.getMembershipCardDataByType(tab.MembershipCardType.MembershipCardType_MonthlyPass)
        let lifetime = this.getMembershipCardDataByType(tab.MembershipCardType.MembershipCardType_LifetimePass)

        if (month.canGet) {
            if (lifetime.canGet) {
                return proto.Msg_GetMembershipRewardReq.Type.All
            }
            return proto.Msg_GetMembershipRewardReq.Type.Monthly
        } else if (lifetime.canGet) {
            return proto.Msg_GetMembershipRewardReq.Type.Lifetime
        }
        return -1
    }

}
