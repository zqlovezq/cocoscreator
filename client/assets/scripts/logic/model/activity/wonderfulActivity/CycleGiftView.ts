import { _decorator, Component, EventTouch, instantiate, log, Node, Prefab, Toggle } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { MallLayoutCell } from '../../shop/MallLayoutCell';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { MallDataMgr } from '../../shop/MallDataMgr';
import { ViewName } from '../../../define/ViewDefine';
import { EventMgr } from '../../../mgr/EventMgr';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { MALLNAME } from '../../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('CycleGiftView')
export class CycleGiftView extends ComponentBase {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Node)
    node_toggles: Node = null;
    private _view_type: tab.MallTab = tab.MallTab.MallTab_SpecialGiftTab1;
    private _view_name: MALLNAME = MALLNAME.DailyGift;
    private _shop_view: Map<MALLNAME, tab.MallItemTabe[]> = new Map();
    private _list = [];
    private _args: any = null;
    register(): void {
        // 购买固定商品
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
    }

    onShow(args): void {
        this._args = args;
        this._shop_view.clear();
        for (let i = 0; i < tab.getData().MallTable.length; i++) {
            const _mallTab = tab.getData().MallTable[i];
            const mallId = _mallTab.MallId;
            if (_mallTab.MallType == tab.MallType.MallType_SpecialGift) {
                // 特惠礼包
                for (let k = 0; k < tab.getData().MallItemTabe.length; k++) {
                    const mallTab = tab.getData().MallItemTabe[k];
                    if (mallTab.MallId === mallId) {
                        // 判定开启条件
                        if (mallTab.OpenFunction) {
                            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(mallTab.OpenFunction);
                            if (!isOpen) {
                                continue;
                            }
                        }
                        if (this._shop_view.has(mallId)) {
                            const arr = this._shop_view.get(mallId);
                            this._shop_view.set(mallId, arr.concat(mallTab))
                        } else {
                            this._shop_view.set(mallId, [mallTab]);
                        }
                    }
                }
            }
        }
        this._view_type = tab.MallTab.MallTab_SpecialGiftTab1;
        this._view_name = MALLNAME.DailyGift;

        if (Array.isArray(this._args)) {
            if (this._args.length > 1) {
                this.node_toggles.getChildByName("Toggle" + this._args[1]).getComponent(Toggle).isChecked = true;
                this._view_name = 50 + this._args[1];
            } else {
                this.node_toggles.getChildByName("Toggle1").getComponent(Toggle).isChecked = true;
            }
        }

        this.initView(true);
    }
    initView(isInit: boolean) {
        const groupData = this.groupListData();
        this._list = groupData.data;
        this._view_name = groupData.name;
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
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight() {
        return 330;
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
    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.list_view.Refresh();
    }
    groupListData() {
        const splitCount = 4;
        const result = [];
        let listData = this._shop_view.get(this._view_name);
        for (let i = 0; i < listData.length; i += splitCount) {
            result.push(listData.slice(i, i + splitCount));
        }
        return { data: result, name: this._view_name };
    }
    clickSwitchView(e: EventTouch, view_type: String) {
        if (Number(view_type) == this._view_name) {
            return;
        }
        this._view_name = Number(view_type);
        this.initView(false);
    }
}


