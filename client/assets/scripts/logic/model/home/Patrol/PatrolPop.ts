/*
 * @Date: 2024-06-18 16:00:02
 * @LastEditors: wzq
 * @File:快速巡逻
 * @LastEditTime: 2024-11-22 15:53:18
 */

import { _decorator, Button, Component, EventTouch, Label, log, Node, sp, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { EventMgr } from '../../../mgr/EventMgr';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { AdMgr } from '../../AdMgr';
import { tab } from '../../../../Table/table_gen';
import { ItemData } from '../../item/ItemData';
import { createAnimation, GameUtil, setTextTime, setTextTime_2 } from '../../../utils/GameUtil';
import { BattleMainDataControl } from '../battle/BattleMainDataControl';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { LangMgr } from '../../../mgr/LangMgr';
import { CommonItem } from '../../item/CommonItem';
import { HeroTeamControl } from '../../hero/HeroTeamControl';
import { HeroData } from '../../hero/HeroData';
import { PatrolDataMgr } from './PatrolDataMgr';
import { RoleData } from '../../role/RoleData';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('PatrolPop')
export class PatrolPop extends ViewPop {
    @property(Label)
    lbl_ad_times: Label = null;
    @property(Button)
    btn_ad_quick_patrol: Button = null;
    @property(Sprite)
    sp_ad_quick_patrol: Sprite = null;
    @property(Button)
    btn_quick_patrol: Button = null;
    @property(Sprite)
    sp_quick_patrol: Sprite = null;

    @property(Sprite)
    sp_power_icon: Sprite = null;
    @property(Label)
    lbl_power_count: Label = null;
    @property(Label)
    lbl_patrol_time: Label = null;
    @property(Label)
    lbl_quick_time: Label = null;
    @property(Label)
    lbl_quick_time_max: Label = null;
    @property(Node)
    node_reward_layout: Node = null;

    @property(Node)
    node_revenue: Node = null;
    @property(Label)
    lbl_max_revenue: Label = null;
    @property(Node)
    node_no_revenue: Node = null;
    @property(Node)
    node_spine: Node = null;

    private startPatrolData: proto.Msg_GetPatrolInfoRsp = null;//巡逻时间
    private canClickGetBtn: boolean = false;//是否可以点击领取按钮
    private commonItems: Node[] = [];
    private timesBeginTimes = [];
    private InitialPatrolMaxTime: number = 0;
    private QuickPatrolDailyCount: number = 0;
    private StageId: number = 0;
    register(): void {
        EventMgr.onMsg(proto.Ptl.ReceivePatrolRewardRsp, this.on_s2c_ReceivePatrolRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveQuickPatrolRewardRsp, this.on_s2c_ReceiveQuickPatrolRewardRsp, this)
    }
    unRegister(): void {
        super.unRegister();
    }
    onShow(): void {
        // 获取巡逻信息
        this.startPatrolData = PatrolDataMgr.ins.startPatrolData;
        this.InitialPatrolMaxTime = tab.getData().GetKeyValue_ConfigTable().InitialPatrolMaxTime + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolIdleTime)
        this.QuickPatrolDailyCount = tab.getData().GetKeyValue_ConfigTable().QuickPatrolDailyCount + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_QuickPatrolDailyCount);
        const stageClearIds = BattleMainDataControl.ins.getStageClearIds();
        if (stageClearIds.length > 0) {
            this.StageId = stageClearIds[stageClearIds.length - 1];
        }
        this.StaticView();
        this.AsyncView();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    protected onDisable(): void {
        if (this.commonItems && this.commonItems.length > 0) {
            for (let i = 0; i < this.commonItems.length; i++) {
                ItemPoolMgr.ins.putCommonItem(this.commonItems[i]);
            }
        }
    }
    on_s2c_ReceivePatrolRewardRsp(msg: proto.Msg_ReceivePatrolRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 领取巡逻奖励
        this.startPatrolData.startPatrolTime = RoleData.ins.getServerUtcTime();
        this.startPatrolData.lastReceiveBaseRewardsTimeMap = msg.lastReceiveBaseRewardsTimeMap;
        this.startPatrolData.lastReceiveExtraRewardsTimeMap = msg.lastReceiveExtraRewardsTimeMap;

        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        this.AsyncView();
        this.canClickGetBtn = false;
        this.scheduleOnce(() => {
            this.canClickGetBtn = true;
        }, 60)
    }
    on_s2c_ReceiveQuickPatrolRewardRsp(msg: proto.Msg_ReceiveQuickPatrolRewardRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 显示快速巡逻奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        this.refreshQuickData();
    }
    StaticView() {
        // 快速巡逻消耗道具
        const quickItem = tab.getData().GetKeyValue_ConfigTable().QuickPatrolUseItem;
        const quickItemId = quickItem[0];
        const quickItemNum = quickItem[1];
        const itemTab = tab.getData().ItemTableById.getValue(quickItemId);
        this.sp_power_icon.setTexture(itemTab.Icon);
        this.lbl_power_count.string = "x" + quickItemNum;
        this.canClickGetBtn = true;
        if (this.StageId) {
            const patrolTab = tab.getData().PatrolTableByPveStageId.getValue(this.StageId);
            const itemIds = patrolTab.BaseItemIds.concat(patrolTab.ExtraItemIds[0]);
            const itemNums =patrolTab.BaseItemNum.concat(patrolTab.ExtraItemNum[0]);
            for (let i = 0; i < itemIds.length; i++) {
                const ItemTab = tab.getData().ItemTableById.getValue(itemIds[i])
                const exp_node = this.node_revenue.children[i];
                const exp_sp = exp_node.getChildByName("icon").getComponent(Sprite);
                exp_sp.setTexture(ItemTab.Icon);
                const exp_lbl = exp_node.getChildByName("label").getComponent(Label);
                let num = 0;
                if (itemIds[i] === tab.CurrencyType.CurrencyType_Gold) {
                    num =  Math.round(itemNums[i] * (1 + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolMoneyRatio) / 10000));
                } else if (itemIds[i] === tab.CurrencyType.CurrencyType_Feed) {
                    num = Math.round(itemNums[i] * (1 + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolFoodRatio) / 10000));
                }else{
                    num = itemNums[i]
                }
                const maxCount = i===3?num:num * 6;
                exp_lbl.string = LangMgr.getCombineString("ui_patrol_2", [GameUtil.convertNumber(maxCount)]);
            }
        } else {
            this.node_no_revenue.active = true;
        }
        this.lbl_max_revenue.string = LangMgr.getCombineString("ui_patrol_1", [this.InitialPatrolMaxTime / 3600]);

        // 生成几只小鸡move的动画
        const heros = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < this.node_spine.children.length; i++) {
            const item = this.node_spine.children[i];
            const spine = item.getComponent(sp.Skeleton);
            const heroInfo = HeroData.ins.getById(heros[i].heroId)
            if (heroInfo) {
                createAnimation(spine.node, heroInfo.heroTable.Born + 2);
            }
        }

        if (this.commonItems && this.commonItems.length > 0) {
            for (let i = 0; i < this.commonItems.length; i++) {
                ItemPoolMgr.ins.putCommonItem(this.commonItems[i]);
            }
        }
        this.node_reward_layout.destroyAllChildren();
    }
    // 刷新广告次数+巡逻次数
    refreshQuickData() {
        // 广告次数
        const curAdTimes = AdMgr.ins.getAdCountByType(tab.AdType.AdType_QuickPatrol);
        const maxAdTimes = AdMgr.ins.getAdCountMaxByType(tab.AdType.AdType_QuickPatrol)
        this.lbl_ad_times.string = (maxAdTimes - curAdTimes) + "/" + maxAdTimes;
        this.btn_ad_quick_patrol.interactable = maxAdTimes - curAdTimes > 0
        this.sp_ad_quick_patrol.grayscale = maxAdTimes - curAdTimes <= 0;
        // 快速巡逻剩余次数
        // const curQuickMaxTimes = tab.getData().GetKeyValue_ConfigTable().QuickPatrolDailyCount;
        const curQuickTimes = ItemData.ins.getCount(10);
        const quickItem = tab.getData().GetKeyValue_ConfigTable().QuickPatrolUseItem;
        const quickItemId = quickItem[0];
        const quickItemNum = quickItem[1];
        const havaItemCount = ItemData.ins.getCount(quickItemId);
        this.btn_quick_patrol.interactable = havaItemCount >= quickItemNum && curQuickTimes > 0;
        this.sp_quick_patrol.grayscale = havaItemCount < quickItemNum || curQuickTimes === 0;
        // 算道具
        //this.lbl_quick_time.string = String(curQuickMaxTimes - curQuickTimes);
        this.lbl_quick_time.string = String(curQuickTimes);
        this.lbl_quick_time_max.string = String(this.QuickPatrolDailyCount);
    }
    AsyncView() {
        this.refreshQuickData();
        this.timesBeginTimes = [];
        Object.keys(this.startPatrolData.lastReceiveBaseRewardsTimeMap).forEach(key => {
            this.timesBeginTimes.push(this.startPatrolData.lastReceiveBaseRewardsTimeMap[key])
        })
        Object.keys(this.startPatrolData.lastReceiveExtraRewardsTimeMap).forEach(key => {
            this.timesBeginTimes.push(this.startPatrolData.lastReceiveExtraRewardsTimeMap[key])
        })

        this.updatePatrolTimes();
        this.unschedule(this.updatePatrolTimes)
        this.schedule(this.updatePatrolTimes, 1)
    }
    updatePatrolTimes() {
        // 巡逻收益时间
        const curTime = RoleData.ins.getServerUtcTime();
        let timeCount = curTime - (Number(this.startPatrolData.startPatrolTime))
        const maxTime = this.InitialPatrolMaxTime;
        // 新手没有收益
        if (this.startPatrolData.startPatrolTime === 0) {
            this.lbl_patrol_time.string = "00:00:00";
            this.unschedule(this.updatePatrolTimes);
            return;
        }
        // 已经达到最大收益
        if (timeCount > maxTime) {
            console.log(`已经打到最大巡逻收益`)
            timeCount = maxTime;
            this.unschedule(this.updatePatrolTimes);
        }

        this.lbl_patrol_time.string = setTextTime_2(timeCount);

        // 基础奖励
        const patrolTab = tab.getData().PatrolTableByPveStageId.getValue(this.StageId);
        if (patrolTab) {
            const itemIds = patrolTab.BaseItemIds.concat(patrolTab.ExtraItemIds);
            const itemCounts = patrolTab.BaseItemNum.concat(patrolTab.ExtraItemNum);
            const times = patrolTab.BaseTimes.concat(patrolTab.ExtraTimes);
            // 每个物品的单独计算的cd
            const timesBeginTimes = this.timesBeginTimes;
            let showNothing = true;
            for (let i = 0; i < itemIds.length; i++) {
                const base_timeCount = curTime - Number(timesBeginTimes[i]) > maxTime ? maxTime : curTime - Number(timesBeginTimes[i]);
                const base_time = times[i];
                const base_itemId = itemIds[i];
                let  base_itemCount = itemCounts[i];
                if(base_itemId=== tab.CurrencyType.CurrencyType_Gold){
                    base_itemCount = Math.floor(base_itemCount*(1 + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolMoneyRatio) / 10000))
                }else if(patrolTab.BaseItemIds[i] === tab.CurrencyType.CurrencyType_Feed){
                    base_itemCount = Math.floor(base_itemCount*(1 + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_PatrolFoodRatio) / 10000))
                }
                if (this.node_reward_layout.children[i]) {
                    const item = this.node_reward_layout.children[i];
                    const itemTs = item.getComponent(CommonItem);
                    const curItemCount = itemTs.getItemCount();
                    if (base_time > base_timeCount) {
                        this.node_reward_layout.children[i].active = false;
                    } else {
                        showNothing = false;
                        this.node_reward_layout.children[i].active = true;
                        if (Math.floor(base_timeCount / base_time) > (curItemCount / base_time)) {
                            itemTs.setShowNum(Math.floor(base_timeCount / base_time) * base_itemCount);
                        }
                    }
                } else {
                    if (base_time < base_timeCount) {
                        showNothing = false;
                        const base_info = new ItemInfo();
                        base_info.itemId = base_itemId;
                        base_info.num = base_itemCount * Math.floor(base_timeCount / base_time);
                        ItemPoolMgr.ins.createItem(base_info, this.node_reward_layout);
                    }
                }
            }
            this.node_no_revenue.active = showNothing;
        }
    }
    // 点击快速巡逻
    clickQuickPatrol(event: EventTouch, type: string) {
        const stageClearIds = BattleMainDataControl.ins.getStageClearIds();
        if (stageClearIds.length === 0) {
            //ShowTips("至少通过一关");
            ShowTips(LangMgr.getLab("Tips_patrol_1"));
            return;
        }
        let sendMsg = function(){
            let msg = new proto.Msg_ReceiveQuickPatrolRewardReq();
            msg.type = Number(type);
            Net.Send(proto.Ptl.ReceiveQuickPatrolRewardReq, msg)
        }
        if(type==="1"){
            AdMgr.ins.playVideoAd(tab.AdType.AdType_QuickPatrol, () => {
                sendMsg();
            }, false)
        }else{
            sendMsg();
        }

    }
    // 点击领取奖励
    clickGetPatrolAward() {
        if (this.canClickGetBtn && !this.node_no_revenue.active) {
            let msg = new proto.Msg_ReceivePatrolRewardReq();
            Net.Send(proto.Ptl.ReceivePatrolRewardReq, msg)
        }
    }
    onClose(): void {
        super.onClose();
        EventMgr.emitLocal(LocalEvent.LocalMsg_QueueUI_deleteUI);
    }
}


