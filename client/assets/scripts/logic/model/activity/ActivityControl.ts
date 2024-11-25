import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ActivityData } from './ActivityData';
import { Net } from '../../net/Net';
import { LocalEvent } from '../../define/LocalEvent';
import { ActivityRed } from './ActivityRed';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
import { TaskData } from '../task/TaskData';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * ActivityControl
 * zhudingchao
 * Wed Jun 19 2024 14:54:21 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/ActivityControl.ts
 *
 */

@ccclass('ActivityControl')
export class ActivityControl extends AbsControl {
    private static _instance: ActivityControl;


    public static get ins() {
        if (null == this._instance) {
            this._instance = new ActivityControl();
        }
        return this._instance;
    }
    purge(): void {
    }

    register(): void {
        EventMgr.onMsg(proto.Ptl.LimitedRewardPush, this.on_s2c_LimitedRewardPush, this)
        EventMgr.onMsg(proto.Ptl.GetLimitedRewardRsp, this.on_s2c_GetLimitedRewardRsp, this)
        EventMgr.onMsg(proto.Ptl.DailyRewardPush, this.on_s2c_DailyRewardPush, this)
        EventMgr.onMsg(proto.Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this)
        EventMgr.onMsg(proto.Ptl.HeroCollectionPush, this.on_s2c_HeroCollectionPush, this)
        EventMgr.onMsg(proto.Ptl.GetHeroCollectionRewardRsp, this.on_s2c_GetHeroCollectionRewardRsp, this)
        EventMgr.onMsg(proto.Ptl.BreakEggPush, this.on_s2c_BreakEggPush, this)
        EventMgr.onMsg(proto.Ptl.GetPrivilegeInfoRsp, this.on_s2c_GetMonthlyPassInfoRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceivePrivilegeDailyRewardsRsp, this.on_s2c_ReceiveMonthlyPassDailyRewardsRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceiveMonthlyPassAdditionalRewardsRsp, this.on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp, this)
        EventMgr.onMsg(proto.Ptl.VipLevelUpPush, this.on_s2c_VipLevelUpPush, this)
        EventMgr.onMsg(proto.Ptl.GetVipInfoRsp, this.on_s2c_GetVipInfoRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceiveVipDailyGiftRsp, this.on_s2c_ReceiveVipDailyGiftRsp, this)
        EventMgr.onMsg(proto.Ptl.BuyVipGiftRsp, this.on_s2c_BuyVipGiftRsp, this);
        EventMgr.onMsg(proto.Ptl.ActivitiesPush, this.on_s2c_BuyVipGiftRsp, this)
        EventMgr.onMsg(proto.Ptl.GetActivityHeroGrowMapRsp, this.on_s2c_GetActivityHeroGrowMapRsp, this)
        EventMgr.onMsg(proto.Ptl.GetActivityGachaUpMapRsp, this.on_s2c_GetActivityGachaUpMapRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceiveActivityGachaUpTasksRewardsRsp, this.on_s2c_ReceiveActivityGachaUpTasksRewardsRsp, this)
        EventMgr.onMsg(proto.Ptl.GetCumulativeRechargeMapRsp, this.on_s2c_GetCumulativeRechargeMapRsp, this)
        ActivityRed.ins.init();


    }
    request() {
        this.requestGetMonthlyPassInfo();
        this.requesGetVipInfo();
        this.requestGetActivityHeroGrowInfo();
        this.requestGetActivityGachaUp();
        this.requesGetCumulativeRecharge();
    }

    requestLimitedReward(id: number) {
        let msg = new proto.Msg_GetLimitedRewardReq();
        msg.id = id;
        Net.Send(proto.Ptl.GetLimitedRewardReq, msg)
    }

    requestGetDailyReward(id: number, day: number) {
        let msg = new proto.Msg_GetDailyRewardReq();
        msg.id = id;
        msg.day = day;
        Net.Send(proto.Ptl.GetDailyRewardReq, msg)
    }
    /**
     * 请求抽卡up活动
     */
    requestReceiveActivityGachaUpTasksRewards(activityID: number) {
        let msg = new proto.Msg_ReceiveActivityGachaUpTasksRewardsReq();
        msg.activityId = activityID;
        msg.taskIds = ActivityData.ins.getAllUpCanReceiveTasks(activityID);
        Net.Send(proto.Ptl.ReceiveActivityGachaUpTasksRewardsReq, msg)
    }
    /**
   * 请求抽卡up活动
   */
    requestGetActivityGachaUp() {
        let msg = new proto.Msg_GetActivityGachaUpMapReq();
        Net.Send(proto.Ptl.GetActivityGachaUpMapReq, msg)
    }
    /**
   * 请求养成活动信息
   */
    requestGetActivityHeroGrowInfo() {
        let msg = new proto.Msg_GetActivityHeroGrowMapReq();
        Net.Send(proto.Ptl.GetActivityHeroGrowMapReq, msg)
    }
    /**
    * 请求领取累计充值奖励
    */
    requestReceiveCumulativeRechargeReward(rewardId:number) {
        let msg = new proto.Msg_ReceiveCumulativeRechargeRewardReq();
        msg.rewardId = rewardId;
        Net.Send(proto.Ptl.ReceiveCumulativeRechargeRewardReq, msg)
    }
    /**
     * 请求月卡信息
     */
    requestGetMonthlyPassInfo() {
        let msg = new proto.Msg_GetPrivilegeInfoReq();
        Net.Send(proto.Ptl.GetPrivilegeInfoReq, msg)
    }
    requestGetHeroCollectionReward(id: number) {
        let msg = new proto.Msg_GetHeroCollectionRewardReq();
        msg.id = id;
        Net.Send(proto.Ptl.GetHeroCollectionRewardReq, msg)
    }
    /**
     * 请求领取月卡每日奖励信息
     */
    requestReceiveMonthlyPassDailyRewards(type: tab.PrivilegedType) {
        let msg = new proto.Msg_ReceivePrivilegeDailyRewardsReq();
        msg.type = type;
        Net.Send(proto.Ptl.ReceivePrivilegeDailyRewardsReq, msg)
    }
    /**
      * 请求领取月卡加码奖励
      */
    requestReceiveMonthlyPassAllBoughtRewards() {
        let msg = new proto.Msg_ReceiveMonthlyPassAdditionalRewardsReq();
        Net.Send(proto.Ptl.ReceiveMonthlyPassAdditionalRewardsReq, msg)
    }
    /**
     * 请求获取vip信息
     */
    requesGetVipInfo() {
        let msg = new proto.Msg_GetVipInfoReq();
        Net.Send(proto.Ptl.GetVipInfoReq, msg)
    }

    /**
   * 请求领取Vip每日礼包
   */
    requesReceiveVipDailyGift() {
        let msg = new proto.Msg_ReceiveVipDailyGiftReq();
        Net.Send(proto.Ptl.ReceiveVipDailyGiftReq, msg)
    }

    /**
   * 请求领取Vip每日礼包
   */
    requesBuyVipGift(vipLevel: number) {
        let msg = new proto.Msg_BuyVipGiftReq();
        msg.vipLevel = vipLevel;
        Net.Send(proto.Ptl.BuyVipGiftReq, msg)
    }
    /**
    * 获取累计充值活动信息
    */
    requesGetCumulativeRecharge() {
        let msg = new proto.Msg_GetCumulativeRechargeMapReq();
        Net.Send(proto.Ptl.GetCumulativeRechargeMapReq, msg)
    }
    on_s2c_GetCumulativeRechargeMapRsp(msg: proto.Msg_GetCumulativeRechargeMapRsp) {
        ActivityData.ins.initActivityRecharge(msg);
        RedMgr.refreshEvent(RedDotType.Combine_Recharge);
    }
    // 限时奖励消息推送
    on_s2c_LimitedRewardPush(msg: proto.Msg_LimitedRewardPush) {

        ActivityData.ins.limitedRewardMsg = msg;
        log("收到限制奖励推送==", msg)
    }
    // 限时奖励消息推送
    on_s2c_GetLimitedRewardRsp(msg: proto.Msg_GetLimitedRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.limitedRewardMsg = null;
            EventMgr.emitLocal(LocalEvent.LimitedBenefits_Change);
        }
    }

    // 每日奖励推送
    on_s2c_DailyRewardPush(msg: proto.Msg_DailyRewardPush) {
        ActivityData.ins.addDailyRewardMsg(msg);
        log("签到奖励=======", msg)

    }
    // 领取每日奖励
    on_s2c_GetDailyRewardRsp(msg: proto.Msg_GetDailyRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.getDailyRewardSucc(msg);
        }
    }

    /**舰队启航 */
    on_s2c_HeroCollectionPush(msg: proto.Msg_HeroCollectionPush) {
        ActivityData.ins.heroCollectionMsg = msg;

        RedMgr.refreshEvent(RedDotType.HeroRoad);

        log("舰队启航数据", msg);
    }
    // 领取舰队启航奖励
    on_s2c_GetHeroCollectionRewardRsp(msg: proto.Msg_GetHeroCollectionRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.getHeroCollectionRewardSucc(msg.id);
            RedMgr.refreshEvent(RedDotType.HeroRoad);
        }
    }
    /**砸金鸡活动 */
    on_s2c_BreakEggPush(msg: proto.Msg_BreakEggPush) {
        ActivityData.ins.breakEggMsg = msg;
        log("砸金鸡活动数据", msg);
    }
    /**月卡信息 */
    on_s2c_GetMonthlyPassInfoRsp(msg: proto.Msg_GetPrivilegeInfoRsp) {
        ActivityData.ins.monthlyPassInfo = msg;
        log("月卡数据==", msg)
        RedMgr.refreshEvent(RedDotType.MonthlyCard);
    }
    // 领取月卡每日奖励
    on_s2c_ReceiveMonthlyPassDailyRewardsRsp(msg: proto.Msg_ReceivePrivilegeDailyRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            let info = ActivityData.ins.monthlyPassInfo.PrivilegeMap;
            if (info[msg.type]) {
                info[msg.type].isDailyReceived = true;
            }
            RedMgr.refreshEvent(RedDotType.MonthlyCard);
        }
    }
    // 领取月卡加码奖励
    on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp(msg: proto.Msg_ReceiveMonthlyPassAdditionalRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.monthlyPassInfo.isReceivedMonthlyPassAddtional = true;
            RedMgr.refreshEvent(RedDotType.MonthlyCard);
        }
    }
    // vip等级提升
    on_s2c_VipLevelUpPush(msg: proto.Msg_VipLevelUpPush) {
        if (ActivityData.ins.vipMsg) {
            ActivityData.ins.vipMsg.vipLevel = msg.vipLevel;
            RoleData.ins.vipLevel = msg.vipLevel;
            EventMgr.emitLocal(LocalEvent.VipLevel_Change);
            RedMgr.refreshEvent(RedDotType.Vip_Buy);
        }

    }
    // vip信息返回
    on_s2c_GetVipInfoRsp(msg: proto.Msg_GetVipInfoRsp) {
        ActivityData.ins.vipMsg = msg;
        RedMgr.refreshEvent(RedDotType.Vip);
        RedMgr.refreshEvent(RedDotType.Vip_Buy);
    }
    // vip每日礼包领取返回
    on_s2c_ReceiveVipDailyGiftRsp(msg: proto.Msg_ReceiveVipDailyGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.vipMsg.isDailyGiftReceived = true;
            RedMgr.refreshEvent(RedDotType.Vip);
        }
    }
    // vip专属礼包购买返回
    on_s2c_BuyVipGiftRsp(msg: proto.Msg_BuyVipGiftRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            ActivityData.ins.vipMsg.boughtVipGifts.push(msg.vipLevel);
            RedMgr.refreshEvent(RedDotType.Vip_Buy);
        }
    }

    on_s2c_ActivitiesPush(msg: proto.Msg_ActivitiesPush) {
        ActivityData.ins.initOpenActivityMap(msg.activities as proto.Activity[])
    }
    // 养成活动信息返回
    on_s2c_GetActivityHeroGrowMapRsp(msg: proto.Msg_GetActivityHeroGrowMapRsp) {
        ActivityData.ins.initActivityHeroGrow(msg);
    }
    // 抽卡up活动
    on_s2c_GetActivityGachaUpMapRsp(msg: proto.Msg_GetActivityGachaUpMapRsp) {
        if (msg.activityGachaUpMap) {
            TaskData.ins.initGachaTasks(msg);
        }
    }
    // 领取抽卡奖励
    on_s2c_ReceiveActivityGachaUpTasksRewardsRsp(msg: proto.Msg_ReceiveActivityGachaUpTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards });
            TaskData.ins.receiveGachaUpTaskRewardSucc(msg.taskIds);
        }
    }
}