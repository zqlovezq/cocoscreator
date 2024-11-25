import { _decorator, Component, instantiate, Label, log, Node, ProgressBar, Toggle, UITransform } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { tab } from '../../../../Table/table_gen';
import { BattlePassDataMgr } from './BattlePassDataMgr';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { BattlePassChildToggleItem } from './BattlePassChildToggleItem';
import { BattlePassItemCell } from './BattlePassItemCell';
import { TaskData } from '../../task/TaskData';
import { LangMgr } from '../../../mgr/LangMgr';
import { dailyBuyShop, setTextTime } from '../../../utils/GameUtil';
import { PayControl } from '../../pay/PayControl';
import { ItemData } from '../../item/ItemData';
import { ShowItemNotEnoughTips, ShowTips } from '../../../mgr/UIMgr';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
import { RoleData } from '../../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('BattlePassItem')
export class BattlePassItem extends Component {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Node)
    node_toggle_child_content: Node = null;
    @property(Node)
    toggle_child_item: Node = null;
    @property(Node)
    cell_item: Node = null;
    @property(Node)
    item_battle_pass: Node = null;
    @property(Label)
    lbl_price: Label = null;
    @property(Node)
    node_lv_progress: Node = null;
    @property(Node)
    node_time: Node = null;
    @property(Label)
    lbl_count_time: Label = null;
    @property(Node)
    node_advance_lock: Node = null;
    @property(Node)
    node_toggle: Node = null;
    @property(Node)
    node_buy:Node = null;

    private battlePassData: tab.BattlePassTable[] = [];
    private _curPassBattleId: number = 0;
    private _list: tab.BattlePassTable = null;
    private _countDown: number = 0;
    onShow(tabName: tab.BattlePassTab,tabId?:number) {
        // 根据tabNaem获取信息
        if(!tabId){
            this.battlePassData = BattlePassDataMgr.ins.getDataByPassName(tabName);
            this._curPassBattleId = this.battlePassData[0].Id;
        }else{
            this.battlePassData = [tab.getData().BattlePassTableById.getValue(tabId)];
            this._curPassBattleId = tabId;
        }   
        // 如果数组长度大于1则创建toggle
        this.item_battle_pass.addChild(this.cell_item);
        if(this.node_toggle){
            this.node_toggle.active = this.battlePassData.length > 1;
        }
        if (this.battlePassData.length > 1) {
            //创建toggle
            this.createToggleItem();
        }
        this.initView(true);
    }
    initView(isInit: boolean) {
        this._list = this.groupListData();
        if (isInit) {
            this.list_view.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellWidth.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.list_view.node.on("scrolling", this.onScrolling, this);
        } else {
            this.list_view.Reload(false, true)
        }
        let idx = this.getAwardIndex();
        const count = Math.ceil(890/130);
        if (idx > this._list.TaskIds.length - count) {
            idx = this._list.TaskIds.length - count;
            this.item_battle_pass.active = false;
        } else {
            this.item_battle_pass.active = true;
        }
        const pos = this.list_view.GetScrollPosOfCell(idx);
        this.list_view.setContentPos(-pos.x+65, -pos.x+65, 0);
        this.showAsyncView();
    }
    groupListData() {
        const data = this.battlePassData;
        for (let i = 0; i < data.length; i++) {
            const _data = data[i];
            if (_data.Id === this._curPassBattleId) {
                return _data;
            }
        }
    }
    // 刷新toggle红点
    refreshToggleRed(){
        if(this.node_toggle_child_content&&this.node_toggle_child_content.children.length>0){
            for(let i=0;i<this.node_toggle_child_content.children.length;i++){
                const item = this.node_toggle_child_content.children[i];
                const toggleItemTs = item.getComponent(BattlePassChildToggleItem);
                toggleItemTs.refreshRed();
            }
        }
    }
    // 根据当前数据创建横向页签
    createToggleItem() {
        this.node_toggle_child_content.destroyAllChildren();
        const viewData = this.battlePassData;
        for (let i = 0; i < viewData.length; i++) {
            const toggleItem = instantiate(this.toggle_child_item);
            this.node_toggle_child_content.addChild(toggleItem);
            const toggleItemTs = toggleItem.getComponent(BattlePassChildToggleItem);
            toggleItemTs.initData(viewData[i], this);
            if (i === 0) {
                toggleItem.getComponent(Toggle).isChecked = true;
            }
        }
    }
    switchView(id: number) {
        this._curPassBattleId = id;
        this.initView(false);
    }
    // 刷新界面
    refreshView() {
        this.list_view.Refresh();
        this.refreshToggleRed();
        this.item_battle_pass.children[0].getComponent(BattlePassItemCell).UpdateContent({ taskId: this._list.TaskIds[this._list.TaskIds.length - 1], battleId: this._curPassBattleId, notSetY: true })
        const battlePassTab = tab.getData().BattlePassTableById.getValue(this._curPassBattleId);
        if (battlePassTab.PassType === tab.BattlePassType.BattlePassType_LoopBattlePass) {
            this.refreshProgress();
        }
    }
    getCellCount() {
        return this._list.TaskIds.length;
    }
    getCellWidth() {
        return 130;
    }
    getCellIdentifer() {
        return "BattlePassItemCell";
    }
    getCellView() {
        return instantiate(this.cell_item).getComponent(BattlePassItemCell);
    }
    GetCellData(idx: number) {
        return { taskId: this._list.TaskIds[idx], battleId: this._curPassBattleId }
    }
    onScrolling() {
        const offset = this.list_view.getScrollOffset();
        const x = offset.x;
        const movex = this.list_view.GetScrollPosOfCell(this._list.TaskIds.length - 2);
        this.item_battle_pass.active = !((-x + 805) >= movex.x)
    }
    // 获取当前可以领取奖励的index
    getAwardIndex() {
        let idx = 0;
        const battlePass = BattlePassDataMgr.ins.getBattlePassData(this._curPassBattleId);
        for (let i = 0; i < battlePass.tasks.length; i++) {
            const taskId = battlePass.tasks[i].id
            const task = TaskData.ins.getBattlePassTaskInfo(taskId);
            if (task.isReceived) {
                idx = i;
            }
        }
        return idx;
    }
    showAsyncView() {
        this.item_battle_pass.children[0].getComponent(BattlePassItemCell).UpdateContent({ taskId: this._list.TaskIds[this._list.TaskIds.length - 1], battleId: this._curPassBattleId, notSetY: true })
        // 设置购买战令金额
        const battlePassTab = tab.getData().BattlePassTableById.getValue(this._curPassBattleId);
        const RechargeTab = tab.getData().RechargeTableById.getValue(battlePassTab.RechargeId);
        const battlePass = BattlePassDataMgr.ins.getBattlePassData(this._curPassBattleId);

        this.node_buy.active = !battlePass.isBoughtAdvance;
        this.lbl_price.string =ChannelMgr.getSdkRechargeShowPrice(RechargeTab)// LangMgr.getCombineString("ui_commondesc_73", [RechargeTab.Price]);
        // 购买等级
        if(this.node_lv_progress){
            this.node_lv_progress.active = battlePassTab.PassType === tab.BattlePassType.BattlePassType_LoopBattlePass;
        }
        if(this.node_time){
            this.node_time.active = false;
        }
        this.node_advance_lock.active = !battlePass.isBoughtAdvance;
        this.unschedule(this.updateTime);
        if (battlePassTab.PassType === tab.BattlePassType.BattlePassType_LoopBattlePass) {
            // 周期战令 结束事件
            const now = RoleData.ins.getServerUtcTime()
            const endTime = Number(battlePass.lastResetTime) + battlePassTab.PassValue * 24 * 3600;
            this._countDown = endTime - now;
            this.node_time.active = this._countDown > 0;
            this.updateTime();
            this.schedule(this.updateTime, 1);
            this.refreshProgress();
        }
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
    // 购买战令
    onClickBuyBattlePass() {
        const battlePassTab = tab.getData().BattlePassTableById.getValue(this._curPassBattleId);
        var self = this;
        PayControl.ins.requestPay(battlePassTab.RechargeId, () => {
            BattlePassDataMgr.ins.buyBattlePassData(this._curPassBattleId);
            RedMgr.refreshEvent(RedDotType.Battle_Pass);
            self.refreshView();
            this.node_buy.active = false;
        })
    }
    refreshProgress() {
        // 获取当前进度值
        const battlePass = BattlePassDataMgr.ins.getBattlePassData(this._curPassBattleId);
        let progress = 0;
        let lv = 0;
        let max = 0;
        let maxLv = 0;
        for (let i = 0; i < battlePass.tasks.length; i++) {
            const taskId = battlePass.tasks[i].id;
            const task = TaskData.ins.getBattlePassTaskInfo(taskId)
            const taskTab = tab.getData().TaskTableById.getValue(taskId);
            if(progress<task.progress){
                progress = task.progress;
            }
            if (task.progress < taskTab.FinishParam1) {
                lv = i;
                break;
            }
            if (i === battlePass.tasks.length - 1 && task.progress >= taskTab.FinishParam1) {
                lv = i;
                maxLv = i + 1;
            }
        }
        if (lv > 0) {
            const tab1 = battlePass.tasks[lv].id;
            const tab2 = battlePass.tasks[lv - 1].id;
            const taskTab1 = tab.getData().TaskTableById.getValue(tab1);
            const taskTab2 = tab.getData().TaskTableById.getValue(tab2);
            max = taskTab1.FinishParam1 - taskTab2.FinishParam1;
            progress = progress-taskTab2.FinishParam1;
        } else {
            const _tab1 = battlePass.tasks[lv].id;
            const _taskTab1 = tab.getData().TaskTableById.getValue(_tab1);
            max = _taskTab1.FinishParam1;
            // progress = progress-_taskTab1.FinishParam1;
        }
        const lblLv = this.node_lv_progress.getChildByName("lv_txt").getComponent(Label);
        lblLv.string = maxLv ? String(maxLv) : String(lv);
        const progressBar = this.node_lv_progress.getChildByName("score_bar").getComponent(ProgressBar);
        progressBar.progress = progress / max;
    }
    // 购买战令等级
    onClickBuyBattlePassLv() {
        // 判断钻石是否够
        const battlePassTab = tab.getData().BattlePassTableById.getValue(this._curPassBattleId);
        const costItemId = battlePassTab.BuyLvCostId;
        const costItemCount = battlePassTab.BuyLvCostNum;
        const haveCount = ItemData.ins.getCount(costItemId);
        if (haveCount < costItemCount) {
            ShowItemNotEnoughTips(costItemId);
            return;
        }
        // 判断是否达到最高级
        const lvLbl = this.node_lv_progress.getChildByName("lv_txt").getComponent(Label);
        if (Number(lvLbl.string) >= battlePassTab.TaskIds.length) {
            const tips = LangMgr.getLab("ui_equip_18");
            ShowTips(tips);
            return;
        }
        dailyBuyShop(costItemId,costItemCount,-1,"Tips_common_buy",()=>{
            let pass_msg = new proto.Msg_BuyBattlePassLevelReq();
            pass_msg.id = this._curPassBattleId;
            Net.Send(proto.Ptl.BuyBattlePassLevelReq, pass_msg);
        },battlePassTab.Id)
    }
}

