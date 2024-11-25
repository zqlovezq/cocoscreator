import { _decorator, Component, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { RedDotType } from '../../red/RedDotType';
import { RedMgr } from '../../mgr/RedMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { ActivityOpenInfo } from './ActivityOpenInfo';
import { MALLNAME, DEVELOPTYPE } from '../../../Common/script/EnumTypeMgr';
import { PayData } from '../pay/PayData';
import { TaskData } from '../task/TaskData';
const { ccclass, property } = _decorator;

/**
 * 
 * ActivityData
 * zhudingchao
 * Wed Jun 19 2024 14:53:46 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/ActivityData.ts
 *
 */

@ccclass('ActivityData')
export class ActivityData implements IClear {
    private static _instance: ActivityData;
    private _limitedRewardMsg: proto.Msg_LimitedRewardPush;
    private _dailyRewardMap: Map<number, proto.Msg_DailyRewardPush>;
    private _dailyRewardItemsMap: Map<number, Array<tab.DailyRewardItemTable>>;
    private _heroCollectionMsg: proto.Msg_HeroCollectionPush;
    private _breakEggMsg: proto.Msg_BreakEggPush;
    private _redPointMap: Map<tab.OpenFunctionName, boolean>;
    private _monthlyPassInfo: proto.Msg_GetPrivilegeInfoRsp;
    private _vipMsg: proto.Msg_GetVipInfoRsp;
    private _7GiftPackBuyState: Map<number, boolean> = new Map();
    private _heroGrowMap: Map<number, proto.HeroGrow> = new Map();
    private _heroUpArray: ActivityOpenInfo[] = [];
    private _rechargeArray:ActivityOpenInfo[] = [];
    private _rechargeMap: Map<number, proto.CumulativeRecharge> = new Map();
    private _rechargeTabMap: Map<number, tab.ActivityCumulativeRechargeTable> = new Map();

    /**活动开启数据map */
    private _openActMap: Map<tab.OpenFunctionName, ActivityOpenInfo>;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new ActivityData();
        }
        return this._instance;
    }
    purge() {

    }
    set limitedRewardMsg(msg: proto.Msg_LimitedRewardPush) {
        this._limitedRewardMsg = msg;
    }
    /**
     * 限时奖励消息
     */
    get limitedRewardMsg() {
        return this._limitedRewardMsg;
    }
    /**
     * 是否显示显示活动按钮
     * @returns 
     */
    isShowLimit() {
        if (!this.limitedRewardMsg) {
            return false;
        }
        return this.limitedRewardMsg.reward.itemId != 0 && this.limitedRewardMsg.reward.num != 0;

    }
    /**
     * 每日奖励数据map
     */
    get dailyRewardMap() {
        if (!this._dailyRewardMap) {
            this._dailyRewardMap = new Map();
        }
        return this._dailyRewardMap;
    }
    addDailyRewardMsg(msg: proto.Msg_DailyRewardPush) {
        this.dailyRewardMap.set(msg.id, msg);
        let tables = tab.getData().DailyRewardTable;
        let table = tables.find(a => a.Id == msg.id);
        msg["type"] = table ? table.Type : 0;
        if (table) {
            if (table.Type == tab.DailyRewardType.DailyRewardType_NewServer) {
                RedMgr.refreshEvent(RedDotType.NewPlayerSignIn);
            } else if (table.Type == tab.DailyRewardType.DailyRewardType_Daily) {
                RedMgr.refreshEvent(RedDotType.SignIn);
            }
        }

    }
    getDailyRewardSucc(msg: proto.Msg_GetDailyRewardRsp) {
        this.addDailyRewardMsg(msg.data as proto.Msg_DailyRewardPush)
    }
    getDailyRewardMsgById(id: number) {
        return this.dailyRewardMap.get(id);
    }
    isOpenDailyAcivity(type: number) {
        let msg = this.getDailyRewardMsgByType(type);
        if (msg) {
            if (type == tab.DailyRewardType.DailyRewardType_NewServer) {
                return OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_NewServerSignIn)
            } else if (type == tab.DailyRewardType.DailyRewardType_Daily) {
                return OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailySignIn)
            }

            return true;
        } else {
            return false;
        }
    }
    private get dailyRewardItemsMap() {
        if (!this._dailyRewardItemsMap) {
            this._dailyRewardItemsMap = new Map();
            let tabs = tab.getData().DailyRewardItemTable;
            for (let key in tabs) {
                let list = this._dailyRewardItemsMap.get(tabs[key].Id);
                if (!list) {
                    list = [];
                    this._dailyRewardItemsMap.set(tabs[key].Id, list);
                }
                list.push(tabs[key]);
            }
        }
        return this._dailyRewardItemsMap;
    }
    getDailyRewardMsgByType(type: number) {
        let msg: proto.Msg_DailyRewardPush = null;
        this.dailyRewardMap.forEach((value) => {
            if (value["type"] == type) {
                msg = value;
                return msg;
            }
        })
        return msg;
    }
    getDailyRewrdItemsById(id: number) {
        return this.dailyRewardItemsMap.get(id);
    }

    /**舰队启航活动数据 */
    get heroCollectionMsg() {
        return this._heroCollectionMsg;
    }
    /**舰队启航活动数据 */
    set heroCollectionMsg(msg: proto.Msg_HeroCollectionPush) {
        this._heroCollectionMsg = msg;
    }
    /**
     * 领取舰队启航奖励成功
     * @param id 
     */
    getHeroCollectionRewardSucc(id: number) {
        if (this.heroCollectionMsg) {
            this.heroCollectionMsg.rewardList.push(id);
            let index = this.heroCollectionMsg.activatedList.indexOf(id);
            if (index >= 0) {
                this.heroCollectionMsg.activatedList.splice(index, 1);
            }
        }
    }

    /**
     * 是否开启舰队启航活动
     */
    isOpenHeroCollectio() {
        return this.heroCollectionMsg ? true : false;
    }
    isHeroCollectioRedPoint() {
        return this.heroCollectionMsg && this.heroCollectionMsg.activatedList.length > 0;
    }

    /**砸金蛋活动数据 */
    get breakEggMsg() {
        return this._breakEggMsg;
    }
    set breakEggMsg(msg: proto.Msg_BreakEggPush) {
        this._breakEggMsg = msg;
        EventMgr.emitLocal(LocalEvent.BreakEgg_change);
    }
    /**
     * 是否开启砸金蛋活动
     * @returns 
     */
    isOpenBreakEgg() {
        if (this._breakEggMsg) {
            return true;
        }
        return false;
    }
    set monthlyPassInfo(msg: proto.Msg_GetPrivilegeInfoRsp) {
        this._monthlyPassInfo = msg;
    }
    /**
     * 月卡信息
     */
    get monthlyPassInfo() {
        return this._monthlyPassInfo;
    }
    get vipMsg() {
        return this._vipMsg;
    }
    set vipMsg(msg: proto.Msg_GetVipInfoRsp) {
        this._vipMsg = msg;
    }

    initOpenActivityMap(actMsg: proto.Activity[]) {
        if (this._openActMap) {
            this._openActMap.clear();
        } else {
            this._openActMap = new Map();
        }

        this._heroUpArray = [];

        for (let key in actMsg) {
            let info = new ActivityOpenInfo();
            info.merge(actMsg[key]);
            this._openActMap.set(info.activityTable.Type, info);

            if (info.isOpen() && info.activityTable.Type === tab.OpenFunctionName.OpenFunctionName_ActivityGachaUp) {
                this._heroUpArray.push(info);
            }
            if(info.isOpen()&&info.activityTable.Type===tab.OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge){
                this._rechargeArray.push(info)
            }
        }
        if(this._heroUpArray.length>1){
            // 按照过期时间排序
            this._heroUpArray.sort((act1,act2)=>{
                return act1.endTime-act2.endTime;
            })
        }
        EventMgr.emitLocal(LocalEvent.openFunctions);

    }
    GachaUpIsOpen(): boolean {
        return this._heroUpArray.length > 0
    }
    // 获取所有英雄up活动数据
    getAllUpData() {
        return this._heroUpArray;
    }
    getAllUpTasks(activityId: number){
        for (let i = 0; i < this._heroUpArray.length; i++) {
            const activityInfo = this._heroUpArray[i];
            if (activityInfo.TabId === activityId) {
                const actTab = tab.getData().GachaUpTableById.getValue(activityInfo.activityTable.Param1);
                return actTab.TaskIds;
            }
        }
    }
    getAllUpCanReceiveTasks(activityId: number) {
        const arr = [];
        const tasks = this.getAllUpTasks(activityId);
        for(let i=0;i<tasks.length;i++){
            const taskInfo = TaskData.ins.getGachaUpTaskInfo(tasks[i])
            if(taskInfo.isCanReceived){
                arr.push(taskInfo.id);
            }
        }
        return arr;
    }
    // 获取所有已经领取的taskId
    getAllUpGotTaskProgress(activityId: number):number{
        const tasks = this.getAllUpTasks(activityId);
        const max = tasks.length;
        let cur = 0;
        for(let i=0;i<tasks.length;i++){
            const taskInfo = TaskData.ins.getGachaUpTaskInfo(tasks[i])
            if(taskInfo.isReceived){
                cur++;
            }
        }
        return cur/max;
    }
    // 获取所有的活动分组
    getAllActivityGroup() {
        const arr: ActivityOpenInfo[] = [];
        this._openActMap.forEach((value, key) => {
            if (key === tab.OpenFunctionName.OpenFunctionName_ActivityShowGroup&&value.isOpen()) {
                arr.push(value);
            }
        })
        return arr;
    }
    getActivityIsOpenByOPName(opName: tab.OpenFunctionName) {
        if (this._openActMap.has(opName)) {
            return this._openActMap.get(opName).isOpen();
        } else {
            return true;
        }

    }
    /* 判断7日英雄武器礼包是否购买完 */
    refresh7GiftPackBuyState() {
        this._7GiftPackBuyState.clear();
        this._7GiftPackBuyState.set(DEVELOPTYPE.HERO, false);
        this._7GiftPackBuyState.set(DEVELOPTYPE.BOOK, false)
        for (let i = DEVELOPTYPE.HERO; i <= DEVELOPTYPE.BOOK; i++) {
            for (let k = 0; k < tab.getData().NewPlayerDailyGiftTable.length; k++) {
                const _giftTab: tab.NewPlayerDailyGiftTable = tab.getData().NewPlayerDailyGiftTable[k]
                if (i === _giftTab.Group) {
                    if (PayData.ins.payInfoMsg.newPlayerDailyGiftInfo.boughtGoodsIds.indexOf(_giftTab.Id) === -1) {
                        this._7GiftPackBuyState.set(i, true)
                        break;
                    }
                }
            }
        }
        console.log(this._7GiftPackBuyState);
    }
    get7GiftPackBuyState() {
        return this._7GiftPackBuyState;
    }
    /* 是否有可领取的萌新签到奖励 */
    getNewPlayerSignAwards(): boolean {
        const msg = ActivityData.ins.getDailyRewardMsgByType(tab.DailyRewardType.DailyRewardType_NewServer);
        if (!msg) {
            return false;
        }
        const tabs = ActivityData.ins.getDailyRewrdItemsById(msg.id);
        for (let i = 0; i < tabs.length; i++) {
            let day = tabs[i].Index;
            let index = msg.activatedList.indexOf(day);
            if (index >= 0) {
                return true
            }
        }
        return false;
    }
    initActivityHeroGrow(msg: proto.Msg_GetActivityHeroGrowMapRsp) {
        this._heroGrowMap.clear();
        for (let key in msg.activityHeroGrowMap) {
            const value = msg.activityHeroGrowMap[key];
            this._heroGrowMap.set(value.activityId, value as proto.HeroGrow);
        }
    }
    initActivityRecharge(msg: proto.Msg_GetCumulativeRechargeMapRsp){
        this._rechargeMap.clear();
        for (let key in msg.cumulativeRechargeMap) {
            const value = msg.cumulativeRechargeMap[key];
            this._rechargeMap.set(value.activityId, value as proto.CumulativeRecharge);
        }
    }
    getRechargeServerData(activityId: number){
        return this._rechargeMap.get(activityId);
    }
    getHeroGrowData(activityId: number) {
        return this._heroGrowMap.get(activityId);
    }
    getRechargeData(activityId:number):ActivityOpenInfo{
        for(let i=0;i<this._rechargeArray.length;i++){
            if(activityId===this._rechargeArray[i].TabId){
                return this._rechargeArray[i]
            }
        }
    }
    refreshHeroGrowData(activityId: number, star: number) {
        const heroGrowData = this.getHeroGrowData(activityId);
        heroGrowData.receivedFreeRewardStars.push(star);
    }
    // 获取当前养成计划数据列表
    getHeroGrowTabs(activityId: number, itemId: number): tab.ActivityHeroGrowTable[] {
        const tabArr = [];
        const heroGrowData = this.getHeroGrowData(activityId);
        for (let i = 0; i < tab.getData().ActivityHeroGrowTable.length; i++) {
            const tabData: tab.ActivityHeroGrowTable = tab.getData().ActivityHeroGrowTable[i];
            const heroId = tabData.HeroId;
            if (heroId === itemId) {
                tabArr.push(tabData);
                if (!heroGrowData.boughtNotFreeRewardTimesMap[tabData.HeroStar]) {
                    heroGrowData.boughtNotFreeRewardTimesMap[tabData.HeroStar] = 0;
                }
            }
        }
        return tabArr;
    }
    // 通过mallId获取mallItem数据
    getMallItemTabsById(mallName: MALLNAME): tab.MallItemTabe[] {
        const tabs = [];
        for (let k = 0; k < tab.getData().MallItemTabe.length; k++) {
            const mallTab = tab.getData().MallItemTabe[k];
            if (mallTab.MallId === mallName) {
                tabs.push(mallTab);
            }
        }
        return tabs;
    }
    // 通过tabid获取所有的累充的表格数据
    getAllTabsByRechageId(tabId:number):tab.ActivityCumulativeRechargeTable[]{
        this._rechargeTabMap.clear();
        const tabs = [];
        for (let k = 0; k < tab.getData().ActivityCumulativeRechargeTable.length; k++) {
            const rechargeTab:tab.ActivityCumulativeRechargeTable = tab.getData().ActivityCumulativeRechargeTable[k];
            if (rechargeTab.ActivityId === tabId) {
                tabs.push(rechargeTab);
                this._rechargeTabMap.set(rechargeTab.IndexId,rechargeTab);
            }
        }
        return tabs;
    }
    getRechargeTabById(id){
        return this._rechargeTabMap.get(id);
    }
}