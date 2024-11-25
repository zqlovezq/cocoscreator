import { _decorator, Component, EventTouch, instantiate, Label, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { MallLayoutCell } from './MallLayoutCell';
import { tab } from '../../../Table/table_gen';
import { MallTabItem } from './MallTabItem';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { getTimeUntilNextDay, getTimeUntilNextMonth, getTimeUntilNextWeek, setTextTime } from '../../utils/GameUtil';
import { ViewName } from '../../define/ViewDefine';
import { ShowItemNotEnoughTips, ShowTips, UIMgr } from '../../mgr/UIMgr';
import { RoleData } from '../role/RoleData';
import { MallDataMgr } from './MallDataMgr';
import { ResourceItem } from '../common/ResourceItem';
import { ItemData } from '../item/ItemData';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { MALLNAME } from '../../../Common/script/EnumTypeMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { Global } from '../../../Global';
const { ccclass, property } = _decorator;

@ccclass('MallMainView')
export class MallMainView extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(MallTabItem)
    node_MallTabItem: MallTabItem = null;
    @property(Node)
    node_vocation: Node = null;
    @property(Node)
    node_challenge: Node = null;
    @property(Label)
    lbl_daily_time: Label = null;
    @property(Label)
    lbl_count_time: Label = null;
    @property(Node)
    node_daily_refresh: Node = null;
    @property(Node)
    node_time: Node = null;
    @property(Node)
    node_free_btn: Node = null;
    @property(Node)
    node_nofree_btn: Node = null;
    @property(ResourceItem)
    resource_item: ResourceItem = null;
    @property(Node)
    node_vocation_toggle: Node = null;
    @property(Node)
    node_challenge_toggle: Node = null;
    private _view_type: tab.MallTab = tab.MallTab.MallTab_None;
    private _view_name: MALLNAME = MALLNAME.NONE;
    private _shop_view: Map<MALLNAME, any[]> = new Map();
    private _cost_daily: Map<number, number> = new Map();
    private _daily_shop_data: proto.Msg_GetDailyShopInfoRsp = null;
    private _list = []
    private _vacation = -1;
    private _countDown: number = 0;
    private _dailyCountDown: number = 0;
    register(): void {
        // 一键购买每日商品
        EventMgr.onMsg(proto.Ptl.BuyDailyShopCommodityOneClickRsp, this.on_s2c_BuyDailyShopCommodityOneClickRsp, this);
        // 购买每日商品
        EventMgr.onMsg(proto.Ptl.BuyDailyShopCommodityRsp, this.on_s2c_BuyDailyShopCommodityRsp, this);
        // 购买固定商品
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
        // 一键刷新每日奖励
        EventMgr.onMsg(proto.Ptl.RefreshDailyShopRsp, this.on_s2c_RefreshDailyShopRsp, this);
    }

    onShow(): void {
        this._daily_shop_data = MallDataMgr.ins.getDailyShopData();
        if (this.openData) {
            if (typeof this.openData === 'number') {
                this._view_type = this.openData;
                if (this._view_type === tab.MallTab.MallTab_Tab2 && UIMgr.ins.getView("HeroResolvePop")) {
                    UIMgr.ins.hideView("HeroResolvePop")
                }
            } else if (typeof this.openData === 'object') {
                this._view_type = this.openData[0]
                this._vacation = this.openData[1];
            }
        }
        this.createShopBaseData();
        if (this._vacation > 0) {
            this.refreshView(true, this._vacation);
        } else {
            this.refreshView(true);
        }
    }
    // 刷新每日奖励
    on_s2c_RefreshDailyShopRsp(msg: proto.Msg_RefreshDailyShopRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        MallDataMgr.ins.initDailyShop(msg);
        this._daily_shop_data = MallDataMgr.ins.getDailyShopData();
        this._shop_view.set(MALLNAME.DailyShop, this._daily_shop_data.slots);
        this.refreshView(false);
    }
    // 购买固定商品
    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.list_view.Refresh();
    }
    // 一键购买商品
    on_s2c_BuyDailyShopCommodityOneClickRsp(msg: proto.Msg_BuyDailyShopCommodityOneClickRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        for (let i = 0; i < this._daily_shop_data.slots.length; i++) {
            let slot = this._daily_shop_data.slots[i];
            if (slot.commodityId === 1000) {
                continue;
            }
            slot.isBought = true;
        }
        const groupData = this.groupListData(this._view_type);
        this._list = groupData.data;
        this.list_view.Refresh();
    }
    // 购买每日商品
    on_s2c_BuyDailyShopCommodityRsp(msg: proto.Msg_BuyDailyShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        for (let i = 0; i < this._daily_shop_data.slots.length; i++) {
            let slot = this._daily_shop_data.slots[i];
            if (slot.index === msg.index) {
                slot.isBought = true;
                break;
            }
        }
        const groupData = this.groupListData(this._view_type);
        this._list = groupData.data;
        this.list_view.Refresh();
    }
    createShopBaseData() {
        // 根据页签类型创建 Toggle和列表数据
        for (let i = 0; i < tab.getData().MallTable.length; i++) {
            const mallTab = tab.getData().MallTable[i];
            const mallName = mallTab.MallId;
            // 创建职业 遣散信息
            for (let k = 0; k < tab.getData().MallItemTabe.length; k++) {
                const itemTab = tab.getData().MallItemTabe[k];
                if (itemTab.MallId === mallName) {
                    if (this._shop_view.has(mallName)) {
                        const arr = this._shop_view.get(mallName);
                        this._shop_view.set(mallName, arr.concat(itemTab))
                    } else {
                        this._shop_view.set(mallName, [itemTab]);
                    }
                }
            }
            // 创建每日商店信息
            if (mallTab.MallTab === tab.MallTab.MallTab_Tab1) {
                this._shop_view.set(mallName, this._daily_shop_data.slots);
            } else if (mallTab.MallTab === tab.MallTab.MallTab_Tab5) {
                this._shop_view.set(mallName, tab.getData().BuyDiamondsTable);
            }

        }
        // 根据页签显示toggle
        const toggleArr = [];
        Object.keys(tab.MallTab).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key) && _key && _key !== tab.MallTab.MallTab_SpecialGiftTab1) {
                toggleArr[key] = -1;
                for (let i = 0; i < tab.getData().MallTable.length; i++) {
                    const malltab = tab.getData().MallTable[i];
                    let isOpen = false;
                    if (malltab.Function) {
                        isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(malltab.Function)
                    }
                    if (isOpen && malltab.MallTab === _key) {
                        toggleArr[key] = _key;
                        break;
                    }
                }
            }
        })
        for (let i = 0; i < toggleArr.length; i++) {
            if (toggleArr[i] >= 0) {
                if (!this.openData) {
                    this._view_type = toggleArr[i];
                }
                break;
            }
        }
        this.node_MallTabItem.initData(toggleArr);
    }
    refreshView(isInit: boolean, mallName?: MALLNAME) {
        const groupData = this.groupListData(this._view_type, mallName);
        this._list = groupData.data;
        this._view_name = groupData.name;
        if (isInit) {
            this.node_MallTabItem.node.getChildByName("tab_node").getChildByName("Toggle" + this._view_type).getComponent(Toggle).isChecked = true;
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
        this.node_vocation.active = this._view_type === tab.MallTab.MallTab_Tab3;
        this.node_challenge.active = this._view_type === tab.MallTab.MallTab_Tab4;
        if (this._view_type === tab.MallTab.MallTab_Tab4) {
            this.node_challenge_toggle.getChildByName("Toggle2").active = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association);
            if (isInit) {
                if(this._vacation === 11){
                    this.node_challenge_toggle.getChildByName("Toggle2").getComponent(Toggle).isChecked = true;
                }else if(this._vacation === 9){
                    this.node_challenge_toggle.getChildByName("Toggle3").getComponent(Toggle).isChecked = true;
                }
            }
        }
        if (!mallName) {
            if (this.node_vocation.active) {
                this._vacation = 2;
                this.node_vocation_toggle.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }
            if (this.node_challenge.active) {
                this._vacation = 8;
                this.node_challenge_toggle.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }
        }
        // 根据viewName创建资源
        this.setResourceItem();
        this.refreshExtraData();
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        return 250;
    }
    getCellIdentifer() {
        return "MallLayoutCell";
    }
    getCellView() {
        return instantiate(this.pfb_item).getComponent(MallLayoutCell);
    }
    GetCellData(idx: number) {
        return { data: this._list[idx], view: this._view_type, viewName: this._view_name }
    }
    groupListData(type: tab.MallTab, mallName?: MALLNAME) {
        const splitCount = this._view_type === tab.MallTab.MallTab_Tab5 ? 3 : 5
        let mallTab: tab.MallTable = null;
        for (let i = 0; i < tab.getData().MallTable.length; i++) {
            const _mallTabData = tab.getData().MallTable[i];
            const _MallTab = _mallTabData.MallTab;
            if (type === _MallTab) {
                mallTab = _mallTabData;
                break;
            }
        }
        const result = [];
        let listData = this.getMallItemTabByType(mallName ? mallName : mallTab.MallId);
        // 如果当前是每日商店 排序买了的排在后面
        if (this._view_type === tab.MallTab.MallTab_Tab1) {
            listData.sort((slot1, slot2) => {
                return slot1.isBought - slot2.isBought
            })
        }
        for (let i = 0; i < listData.length; i += splitCount) {
            if (this._view_type === tab.MallTab.MallTab_Tab5 && listData[i].ViewSpecial && !Global.isReview) {
                continue
            }
            result.push(listData.slice(i, i + splitCount));
        }
        return { data: result, name: mallName ? mallName : mallTab.MallId };
    }
    // 通过type获得表中所有的数据
    getMallItemTabByType(type: MALLNAME) {
        return this._shop_view.get(type);
    }
    clickSwitchShop(e: EventTouch, type: String) {
        if (this._view_type === Number(type)) {
            return;
        }
        this._view_type = Number(type);
        this.refreshView(false);
    }
    clickSwitchVocation(e: EventTouch, type: String) {
        // this._view_type = tab.MallTab.MallTab_Tab2;
        if (this._vacation == Number(type)) {
            return;
        }
        this._vacation = Number(type);
        this.refreshView(false, Number(type));
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    // 刷新每日商店数据
    refreshExtraData() {
        this.node_daily_refresh.active = this._view_type === tab.MallTab.MallTab_Tab1;
        this.node_free_btn.parent.active = this._view_type === tab.MallTab.MallTab_Tab1;
        this.node_time.active = this._view_type !== tab.MallTab.MallTab_Tab5;
        if (this._view_type === tab.MallTab.MallTab_Tab1) {
            // 上次免费刷新时间
            const freeRefreshTime = this._daily_shop_data.lastFreeRefreshTime;
            // 判断是否有倒计时
            const countData = this.getDailyCountdown();

            if (freeRefreshTime && countData.isCountDown) {
                // 有免费刷新时间
                this.node_daily_refresh.active = true;
                this._dailyCountDown = countData.count;
                this.updateDailyTime();
                this.unschedule(this.updateDailyTime)
                this.schedule(this.updateDailyTime, 1)
            } else {
                this.node_daily_refresh.active = false;
            }

            // 判断是否有免费次数
            const data = this.getDailyShopData();
            const freeBtn = this.node_free_btn;
            const noFreeBtn = this.node_nofree_btn;
            freeBtn.active = data.isFree;
            noFreeBtn.active = data.isNoFree;
            if (data.isNoFree) {
                const numTxt = noFreeBtn.getChildByName("num_Layout").getChildByName("num_txt").getComponent(Label);
                numTxt.string = String(data.needDiamond);
            }

            this._countDown = getTimeUntilNextDay();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
        } else if (this._view_type === tab.MallTab.MallTab_Tab2) {
            this._countDown = getTimeUntilNextWeek();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
        } else if (this._view_type === tab.MallTab.MallTab_Tab3 || this._view_type === tab.MallTab.MallTab_Tab4) {
            this._countDown = getTimeUntilNextMonth();
            this.updateTime();
            this.unschedule(this.updateTime);
            this.schedule(this.updateTime, 1);
        } else if (this._view_type === tab.MallTab.MallTab_Tab5) {

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
    updateDailyTime() {
        // 巡逻收益时间
        // const countData = this.getDailyCountdown();
        this._dailyCountDown--
        // 已经达到最大收益
        if (this._dailyCountDown <= 0) {
            console.log(`倒计时结束`);
            this._dailyCountDown = 0;
            this.node_daily_refresh.active = false;
            this.unschedule(this.updateDailyTime);
        } else {
            this.lbl_daily_time.string = setTextTime(this._dailyCountDown);
        }
    }
    // 获取当前每日倒计时，是否有倒计时
    getDailyCountdown() {
        const curTime = RoleData.ins.getServerUtcTime()
        let timeCount = curTime - Number(this._daily_shop_data.lastFreeRefreshTime);
        const maxTime = tab.getData().GetKeyValue_ConfigTable().DailyShopFreeRefreshCD;
        return { count: maxTime - timeCount, isCountDown: maxTime > timeCount };
    }
    clickDailyRefresh() {
        const data = this.getDailyShopData();
        if (this._dailyCountDown && data.isFree) {
            //ShowTips("刷新冷却时间未结束");
            ShowTips(LangMgr.getLab("Tips_mall_1"));
            return;
        }
        const diamond = RoleData.ins.diamond;
        if (data.isFree || data.isNoFree) {
            if (data.needDiamond > diamond) {
                ShowItemNotEnoughTips(1);
                return;
            }
            let msg = new proto.Msg_RefreshDailyShopReq();
            msg.type = data.isFree ? 0 : 1;
            Net.Send(proto.Ptl.RefreshDailyShopReq, msg);
        } else {
            //ShowTips("刷新次数使用完");
            ShowTips(LangMgr.getLab("Tips_mall_2"));
        }
    }
    // 刷新每日商店
    getDailyShopData() {
        // 免费刷新次数
        const freeRefreshTimes = this._daily_shop_data.freeRefreshTimes;
        // 付费刷新次数
        const notFreeRefreshTimes = this._daily_shop_data.notFreeRefreshTimes;
        // 最大免费刷新次数
        const maxFreeRefreshTimes = tab.getData().GetKeyValue_ConfigTable().DailyShopFreeRefreshCount;
        // 最大付费刷新次数
        const maxNoFreeRefreshTimes = tab.getData().GetKeyValue_ConfigTable().DailyShopBuyRefreshCount + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_DailyShopRefresh);;
        // 每次刷新需要的钻石
        const DailyShopBuyCostDiamonds = tab.getData().GetKeyValue_ConfigTable().DailyShopBuyCostDiamonds;
        const data = {
            isFree: false,
            isNoFree: false,
            needDiamond: 0,
        }
        if (maxFreeRefreshTimes > freeRefreshTimes && this._dailyCountDown == 0) {
            data.isFree = true;
        } else {
            if (notFreeRefreshTimes >= maxNoFreeRefreshTimes) {

            } else {
                // 显示付费刷新按钮+需要的钻石
                data.isNoFree = true;
                const needDiamond = DailyShopBuyCostDiamonds[notFreeRefreshTimes] ? DailyShopBuyCostDiamonds[notFreeRefreshTimes] : DailyShopBuyCostDiamonds[DailyShopBuyCostDiamonds.length - 1];
                data.needDiamond = needDiamond;
            }
        }
        return data
    }
    // 一键购买每日商店
    onClickBuyDailyShop() {
        // 判断一键购买的钻石是否充足
        let canBuy = false;
        let materialEnough = true;
        let noEnouthItem = 0;
        this._cost_daily.clear();
        for (let i = 0; i < this._daily_shop_data.slots.length; i++) {
            let slot = this._daily_shop_data.slots[i];
            if (slot.commodityId === 1000) {
                continue;
            }
            if (!slot.isBought) {
                canBuy = true;
                const _dailyShopData = tab.getData().DailyShopItemTableById.getValue(slot.commodityId);
                const _CostItemId = _dailyShopData.CostItemId;
                const _CostItemNum = _dailyShopData.CostItemNum;
                if (this._cost_daily.has(_CostItemId)) {
                    this._cost_daily.set(_CostItemId, this._cost_daily.get(_CostItemId) + _CostItemNum)
                } else {
                    this._cost_daily.set(_CostItemId, _CostItemNum)
                }
            }
        }
        this._cost_daily.forEach((value, key) => {
            const itemCount = ItemData.ins.getCount(key);
            if (itemCount < value) {
                noEnouthItem = key;
                materialEnough = false;
            }
        })
        if (!materialEnough) {
            ShowItemNotEnoughTips(noEnouthItem);
            return;
        }
        if (canBuy && materialEnough) {
            let msg = new proto.Msg_BuyDailyShopCommodityOneClickReq();
            Net.Send(proto.Ptl.BuyDailyShopCommodityOneClickReq, msg);
        }
    }
    setResourceItem() {
        const mallName = this._view_name
        switch (mallName) {
            case MALLNAME.AssassinShop:
            case MALLNAME.ArcherShop:
            case MALLNAME.PriestShop:
            case MALLNAME.CasterShop:
            case MALLNAME.WarriorShop:
                this.resource_item.setItemIds([81])
                break;
            case MALLNAME.DailyShop:
                this.resource_item.setItemIds([1])
                break
            case MALLNAME.BossShop:
                this.resource_item.setItemIds([83])
                break
            case MALLNAME.DismissalShop:
                this.resource_item.setItemIds([5])
                break
            case MALLNAME.DiamondShop:
                this.resource_item.setItemIds([])
                break
            case MALLNAME.GuildShop:
                this.resource_item.setItemIds([84])
                break
            case  MALLNAME.PvpShop:
                this.resource_item.setItemIds([86])
                break
            default:
                break;
        }
    }
}


