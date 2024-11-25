import { _decorator, Component, instantiate, Label, log, Node, Prefab } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { MallLayoutCell } from '../../shop/MallLayoutCell';
import { tab } from '../../../../Table/table_gen';
import { MALLNAME } from '../../../../Common/script/EnumTypeMgr';
import { OpenFunctionMgr } from '../../../../Common/component/OpenFunctionMgr';
import { ViewName } from '../../../define/ViewDefine';
import { UIMgr } from '../../../mgr/UIMgr';
import { MallDataMgr } from '../../shop/MallDataMgr';
import {setTextTime } from '../../../utils/GameUtil';
import { ActivityMainView } from './ActivityMainView';
const { ccclass, property } = _decorator;

@ccclass('NewHandGiftView')
export class NewHandGiftView extends ComponentBase {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Label)
    lbl_time:Label = null;
    private _shop_view: Map<MALLNAME, tab.MallItemTabe[]> = new Map();
    private _view_name: MALLNAME = MALLNAME.NONE;
    private _view_type: tab.MallTab = tab.MallTab.MallTab_None;
    private _list = [];
    private _countDown: number = 0;
    register(): void {
        // 购买固定商品
        EventMgr.onMsg(proto.Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
    }
    onShow(mallId:number): void {
        this._view_name = mallId;
        this._shop_view.clear();
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
        this._view_type = mallId==MALLNAME.NewPlayerMall?tab.MallTab.MallTab_NewPlayerMall:tab.MallTab.MallTab_NewPlayerMall2
        this.initView(true);

        this._countDown = MallDataMgr.ins.getFixedShopExpireTime(mallId)
        this.updateTime();
        this.unschedule(this.updateTime);
        this.schedule(this.updateTime, 1);
    }
    protected onDestroy(): void {
        super.onDestroy();
    }

    initView(isInit: boolean) {
        const groupData = this.groupListData();
        this._list = groupData.data;
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
    groupListData() {
        const splitCount = 4;
        const result = [];
        let listData = this._shop_view.get(this._view_name);
        for (let i = 0; i < listData.length; i += splitCount) {
            result.push(listData.slice(i, i + splitCount));
        }
        return { data: result, name: this._view_name };
    }
    on_s2c_BuyFixedShopCommodityRsp(msg: proto.Msg_BuyFixedShopCommodityRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.list_view.Refresh();

        const view = UIMgr.ins.getView('ActivityMainView');
        view.getComponent(ActivityMainView).refreshHandGiftRed();
    }
    updateTime() {
        // 获取刷新周期
        this._countDown--;
        if (this._countDown <= 0) {
            this._countDown = 0;
            this.unschedule(this.updateTime);
        } else {
            this.lbl_time.string = setTextTime(this._countDown);
        }

    }
}


