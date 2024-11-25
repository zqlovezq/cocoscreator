import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Toggle, UITransform } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { TRIALLAYER, TRIALTASK } from '../../../../Common/script/EnumTypeMgr';
import { tab } from '../../../../Table/table_gen';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { RookieTaskItem } from './RookieTaskItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { RookieTaskBarItem } from './RookieTaskBarItem';
import { RookieTaskMgr } from './RookieTaskMgr';
import { TrialToggleBtn } from './TrialToggleBtn';
import { setTextTime } from '../../../utils/GameUtil';
import { TrialLayoutCell } from './TrialLayoutCell';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { TaskData } from '../../task/TaskData';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { LocalEvent } from '../../../define/LocalEvent';
import { RoleData } from '../../role/RoleData';
import { Net } from '../../../net/Net';
const { ccclass, property } = _decorator;

@ccclass('RookieTaskPop')
export class RookieTaskPop extends ViewPop {
    @property(Prefab)
    pfb_task_item: Prefab = null;
    @property(Prefab)
    pfb_mall_item: Prefab = null;
    @property(Prefab)
    pfb_task_bar_item: Prefab = null;
    @property(Prefab)
    pfb_day_toggle: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Node)
    node_toggle_day: Node = null;
    @property(Node)
    node_toggle_view: Node = null;
    @property(Node)
    node_toggle_layer: Node = null;
    @property(Node)
    node_bar_content: Node = null;
    @property(Label)
    lbl_count_time: Label = null;
    @property(Label)
    lbl_score: Label = null;
    @property(Node)
    node_rookie: Node = null;
    @property(Node)
    node_elite: Node = null;
    @property(Node)
    node_toggle_elite: Node = null;
    @property(Node)
    node_toggle_rookie: Node = null;
    @property(Node)
    node_bg_rookie: Node = null;
    @property(Node)
    node_bg_elite: Node = null;
    @property(Label)
    lbl_score_elite:Label = null;

    @property(Node)
    red_node_rookie: Node = null;
    @property(Node)
    red_node_elite: Node = null;
    @property(Node)
    red_node_rookie_task1: Node = null;
    @property(Node)
    red_node_rookie_task2: Node = null;
    @property(Node)
    red_node_rookie_gift: Node = null;

    @property(Node)
    red_node_elite_task1: Node = null;
    @property(Node)
    red_node_elite_task2: Node = null;
    @property(Node)
    red_node_elite_gift: Node = null;

    @property(Node)
    red_node_day1: Node = null;
    @property(Node)
    red_node_day2: Node = null;
    @property(Node)
    red_node_day3: Node = null;
    @property(Node)
    red_node_day4: Node = null;
    @property(Node)
    red_node_day5: Node = null;
    @property(Node)
    red_node_day6: Node = null;
    @property(Node)
    red_node_day7: Node = null;
    @property(Node)

    private _layer_type: TRIALLAYER = TRIALLAYER.NONE
    private _view_type: TRIALTASK = TRIALTASK.NONE
    private _click_day: number = 0;
    private _cur_day: number = 0;
    private _countDown: number = 0;
    // private _mallMap: Map<number, tab.MallItemTabe[]> = new Map();
    private _curTrialToggleBtn: TrialToggleBtn = null;
    private _openName: tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask
    private _list = []
    getLayerType(){
        return this._layer_type;
    }
    onShow(): void {
        let trial_msg = new proto.Msg_GetNewPlayerTrialMapReq();
        Net.Send(proto.Ptl.GetNewPlayerTrialMapReq, trial_msg);
    }
    on_s2c_GetNewPlayerTrialMapRsp(msg: proto.Msg_GetNewPlayerTrialMapRsp){
        this.setOnshow();
    }
    setOnshow(){
        this._openName = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
        let trialInfo = RookieTaskMgr.ins.getTrialTask(this._openName);
        if (trialInfo) {
            this._layer_type = TRIALLAYER.ROOKIE;
        } else {
            this._openName = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
            this._layer_type = TRIALLAYER.ELITE;
        }
        const openName1 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
        const openName2 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
        const data1 = RookieTaskMgr.ins.getTrialTask(openName1);
        const data2 = RookieTaskMgr.ins.getTrialTask(openName2);
        this.node_toggle_rookie.active = false;
        this.node_toggle_elite.active = false;
        if (data1) {
            this.node_toggle_rookie.active = true;
        }
        if (data2) {
            this.node_toggle_elite.active = true;
        }

        this.setAsyncView();
    }
    setAsyncView() {
        let trialInfo = RookieTaskMgr.ins.getTrialTask(this._openName);
        this._view_type = TRIALTASK.TASK1;
        this._cur_day = trialInfo.unlockedDays;
        const costDay = this._cur_day-(this._layer_type-1)*7
        this._click_day = costDay > 7 ? 7 : costDay;

        this.node_rookie.active = this._layer_type === TRIALLAYER.ROOKIE;
        this.node_bg_rookie.active = this.node_rookie.active
        this.node_elite.active = !this.node_rookie.active;
        this.node_toggle_elite.active = RookieTaskMgr.ins.getTrialTask(tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2) ? true : false
        this.node_bg_elite.active = !this.node_rookie.active
        this.node_toggle_view.getChildByName("Toggle" + this._view_type).getComponent(Toggle).isChecked = true;
        this.node_toggle_layer.getChildByName("Toggle" + this._layer_type).getComponent(Toggle).isChecked = true;
        this.createDayToggle();
        this.setView(true);
        this.beginCountDown();
    }
    setView(isInit: boolean) {
        this._list = this.getViewData();
        if (isInit) {
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            })
        } else {
            this.list_view.Reload(false, true)
        }
        this.setBarItem();
        RookieTaskMgr.ins.red_trialRed();
        this.refreshAllRed();
    }
    // 根据天数创建toggle
    createDayToggle() {
        for (let i = 1; i <= 7; i++) {
            const item = this.node_toggle_day.children[i - 1];
            item.name = String(i);
            const itemTs = item.getComponent(TrialToggleBtn);
            if (i === this._click_day) {
                this._curTrialToggleBtn = itemTs;
            }
            itemTs.initToggle(this, i === this._click_day, i > this._cur_day-(this._layer_type-1)*7,i);
        }
    }
    // 设置itembar
    setBarItem() {
        for (let i = 0; i < 6; i++) {
            const id = this._layer_type * 100 + (6 - i);
            const scoreTab = tab.getData().ActivityNewPlayerTaskScoreTableById.getValue(id);
            const item = this.node_bar_content.children[i];
            item.name = String(scoreTab.Id);
            const itemTs = item.getComponent(RookieTaskBarItem);
            itemTs.initData(scoreTab);
        }
        const trialData = RookieTaskMgr.ins.getTrialTask(this._openName)
        this.lbl_score.string = String(trialData.score);
        this.lbl_score_elite.string = String(trialData.score);
    }
    /* 刷新积分数据 */
    refreshScore(socreId: number) {
        const newPlayerTaskTab = tab.getData().ActivityNewPlayerTaskTableById.getValue(socreId);
        const newPlayertrial = RookieTaskMgr.ins.getTrialTask(newPlayerTaskTab.Group);
        newPlayertrial.receivedScoreIds.push(socreId)

        const item = this.node_bar_content.getChildByName(String(socreId));
        const itemTs = item.getComponent(RookieTaskBarItem);
        itemTs.gotItem();
    }
    // 领取奖励刷新view
    refreshView() {
        RookieTaskMgr.ins.red_trialRed();
        this.refreshAllRed();
        this.list_view.Refresh();
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        // 监听任务领取奖励
        EventMgr.onMsg(proto.Ptl.ReceiveNewPlayerTrialTaskRewardsRsp, this.on_s2c_ReceiveNewPlayerTrialTaskRewardsRsp, this);
        // 购买固定商品
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveNewPlayerTrialScoreRewardsRsp, this.on_s2c_ReceiveNewPlayerTrialScoreRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.ChangedNewPlayerTrialScorePush, this.on_s2c_ChangedNewPlayerTrialScorePush, this);
        EventMgr.onMsg(proto.Ptl.GetNewPlayerTrialMapRsp, this.on_s2c_GetNewPlayerTrialMapRsp, this);
    }
    // 积分更新
    on_s2c_ChangedNewPlayerTrialScorePush(msg: proto.Msg_ChangedNewPlayerTrialScorePush) {
        const newPlayertrial = RookieTaskMgr.ins.getTrialTask(msg.newPlayerTrialId);
        newPlayertrial.score = msg.score;
        this.setBarItem();
        EventMgr.emitLocal(LocalEvent.TrialRed)
    }
    // 购买固定商品
    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.refreshView();
    }
    // 完成任务
    on_s2c_ReceiveNewPlayerTrialTaskRewardsRsp(msg: proto.Msg_ReceiveNewPlayerTrialTaskRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        const taskData = TaskData.ins.getTrialTaskInfo(msg.taskId);
        taskData.isReceived = true;
        this._list = this.getViewData();
        this.refreshView();
        EventMgr.emitLocal(LocalEvent.TrialRed);
    }
    // 领取积分奖励
    on_s2c_ReceiveNewPlayerTrialScoreRewardsRsp(msg: proto.Msg_ReceiveNewPlayerTrialScoreRewardsRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        this.refreshScore(msg.scoreId)
        this.refreshAllRed();
        EventMgr.emitLocal(LocalEvent.TrialRed)
    }
   
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        if (this._view_type !== TRIALTASK.GIFT) {
            return 120;
        } else {
            return 250
        }
    }
    getCellIdentifer() {
        if (this._view_type !== TRIALTASK.GIFT) {
            return 'RookieTaskItem'
        } else {
            return 'TrialLayoutCell'
        }
    }
    getCellView() {
        if (this._view_type !== TRIALTASK.GIFT) {
            return instantiate(this.pfb_task_item).getComponent(RookieTaskItem);
        } else {
            return instantiate(this.pfb_mall_item).getComponent(TrialLayoutCell);
        }
    }
    GetCellData(idx: number) {
        const ID = this._layer_type * 100 + this._click_day;
        return { data: this._list[idx], id: this._openName }
    }
    // 根据layer clickday viewType获取信息
    getViewData() {
        const ID = this._layer_type * 100 + this._click_day;
        const newPlayerData = tab.getData().ActivityNewPlayerTaskTableById.getValue(ID);
        if (this._view_type === TRIALTASK.TASK1 || this._view_type === TRIALTASK.TASK2) {
            const taskData = newPlayerData['TaskIds' + this._view_type];
            taskData.sort((taskId1: number, taskId2: number) => {
                const taskData1 = TaskData.ins.getTrialTaskInfo(taskId1);
                const taskData2 = TaskData.ins.getTrialTaskInfo(taskId2);
                return Number(taskData1.isReceived) - Number(taskData2.isReceived);
            })
            return taskData;
        } else if (this._view_type === TRIALTASK.GIFT) {
            const arr = RookieTaskMgr.ins.getMallTabs(newPlayerData.MallId);
            const result = [];
            for (let i = 0; i < arr.length; i += 3) {
                result.push(arr.slice(i, i + 3));
            }
            // return this._mallMap.get(newPlayerData.MallId);
            return result
        }
    }
    // 切换layer
    clickSwitchLayer(e: EventTouch, layer: string) {
        if (this._layer_type === Number(layer)) {
            return;
        }
        this._layer_type = Number(layer);
        this._openName = this._layer_type === TRIALLAYER.ROOKIE ? tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask : tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
        this.setAsyncView();
    }
    beginCountDown() {
        const trialData = RookieTaskMgr.ins.getTrialTask(this._openName)
        const now = RoleData.ins.getServerUtcTime()
        const endTime = Number(trialData.expireTime);
        this._countDown = endTime - now;
        this.updateTime()
        this.unschedule(this.updateTime)
        this.schedule(this.updateTime, 1)
    }
    // 切换天数
    clickSwitchDay(toggle: TrialToggleBtn, day: number) {
        this._curTrialToggleBtn.setSelect(false);
        this._curTrialToggleBtn = toggle;
        this._click_day = day;
        this.setView(false);
    }
    // 切换页签
    clickSwitchView(e: EventTouch, view: string) {
        if (this._view_type === Number(view)) {
            return;
        }
        this._view_type = Number(view)
        this.setView(false)
    }
    updateTime() {
        // 获取刷新周期
        this._countDown--;
        if (this._countDown <= 0) {
            this._countDown = 0;
            this.unschedule(this.updateTime);
        } else {
            this.lbl_count_time.string = setTextTime(this._countDown);
        }
    }
    // 点击预览
    clickShowHero() {
        if (this._layer_type === TRIALLAYER.ROOKIE) {
            const data = tab.getData().ActivityNewPlayerTaskScoreTableById.getValue(106);
            HeroDataControl.ins.refreshBookData(data.RewardId);
            UIMgr.ins.show({ viewName: ViewName.HeroBagView, data: { viewType: 2 }, zIndex: 300 })
        } else {
            const data = tab.getData().ActivityNewPlayerTaskScoreTableById.getValue(206);
            UIMgr.ins.show({
                viewName: ViewName.ItemInfoPop, data: {
                    itemId: data.RewardId,
                }
            })
        }
    }
    refreshAllRed() {
        this.red_node_rookie.active = RookieTaskMgr.ins.checkIsRed(TRIALLAYER.ROOKIE)||RookieTaskMgr.ins.red_score_red(TRIALLAYER.ROOKIE);
        this.red_node_elite.active = RookieTaskMgr.ins.checkIsRed(TRIALLAYER.ELITE)||RookieTaskMgr.ins.red_score_red(TRIALLAYER.ELITE);;
        this.red_node_day1.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 1);
        this.red_node_day2.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 2);
        this.red_node_day3.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 3);
        this.red_node_day4.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 4);
        this.red_node_day5.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 5);
        this.red_node_day6.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 6);
        this.red_node_day7.active = RookieTaskMgr.ins.checkIsRed(this._layer_type, 7);
        this.red_node_rookie_task1.active = RookieTaskMgr.ins.checkIsRed(1, this._click_day, TRIALTASK.TASK1);
        this.red_node_rookie_task2.active = RookieTaskMgr.ins.checkIsRed(1, this._click_day, TRIALTASK.TASK2);
        this.red_node_rookie_gift.active = RookieTaskMgr.ins.checkIsRed(1, this._click_day, TRIALTASK.GIFT);

        this.red_node_elite_task1.active = RookieTaskMgr.ins.checkIsRed(2, this._click_day, TRIALTASK.TASK1);
        this.red_node_elite_task2.active = RookieTaskMgr.ins.checkIsRed(2, this._click_day, TRIALTASK.TASK2);
        this.red_node_elite_gift.active = RookieTaskMgr.ins.checkIsRed(2, this._click_day, TRIALTASK.GIFT);
        // todo
        // EventMgr.emitLocal(LocalEvent.TrialRed)
    }
}


