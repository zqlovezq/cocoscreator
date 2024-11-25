import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { CommonTipsPop } from './CommonTipsPop';
import { ShowItemNotEnoughTips } from '../../mgr/UIMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { tab } from '../../../Table/table_gen';
import { MallDataMgr } from '../shop/MallDataMgr';
import { ItemData } from '../item/ItemData';
const { ccclass, property } = _decorator;

@ccclass('ItemBuyPop')
export class ItemBuyPop extends ViewPop {
    @property(Label)
    lbl_cost_diamon: Label = null;
    @property(Label)
    lbl_num: Label = null;
    @property(CommonItem)
    common_item: CommonItem = null;
    @property(Node)
    node_btn: Node = null;
    @property(Label)
    lbl_limit: Label = null;
    @property(Label)
    lbl_name:Label = null;
    private _itemCount: number = 0;
    private _maxRemainCount: number = 0;
    private _curCostDiamond: number = 0;
    private mallItemId: number = 0;
    private mallItemTab: any = null;

    private _CostItemId: number = 0;
    private _CostItemNum: number = 0;
    private _GetItemId: number = 0;
    private _GetItemNum: number = 0;
    private boughtCount: number = 0;

    onShow(): void {
        MallDataMgr.ins.getFixedShopData(this.openData.name)
        this.mallItemId = Number(this.openData.name) * 10 + 1;
        this.mallItemTab = tab.getData().MallItemTabeById.getValue(this.mallItemId);
        this.boughtCount = MallDataMgr.ins.getFixedShopData(this.openData.name).get(this.mallItemTab.Id);
        this._maxRemainCount = this.mallItemTab.LimitCount - this.boughtCount;

        this._GetItemId = this.mallItemTab.GetItemIds[0];
        this._GetItemNum = this.mallItemTab.GetItemNum[0];
        this._CostItemId = this.mallItemTab.CostItemIds[0];
        this._CostItemNum = this.mallItemTab.CostItemNum[0];

        if (this._maxRemainCount > 0) {
            this._itemCount = 1;
        } else {
            this.node_btn.getComponent(Button).interactable = false;
            this.node_btn.getComponent(Sprite).grayscale = true;
        }
        const award = new ItemInfo();
        award.itemId = this._GetItemId;
        award.num = this._GetItemNum;
        this.common_item.initData(award);
        this.lbl_name.string = LangMgr.getLab(award.itemTable.Name);
        this.updateLbl();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    private clickAdd() {
        this._itemCount++;
        if (this._itemCount > this._maxRemainCount) {
            this._itemCount = this._maxRemainCount;
        }
        this.updateLbl();
    }
    // sub碎片
    private clickSub() {
        this._itemCount--;
        if (this._maxRemainCount >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
        }
        if (this._itemCount < 0) {
            this._itemCount = 0;
        }
        this.updateLbl();
    }
    // max碎片
    private clickMax() {
        this._itemCount = this._maxRemainCount;
        this.updateLbl();
    }
    updateLbl() {
        this.lbl_num.string = String(this._itemCount);
        let totalCount = this._CostItemNum * this._itemCount;
        this._curCostDiamond = totalCount;
        this.lbl_cost_diamon.string = String(totalCount);
        this.lbl_limit.string = (this.boughtCount + this._itemCount) + "/" + this.mallItemTab.LimitCount
    }
    onClickBtn() {
        const itemCostTab = tab.getData().ItemTableById.getValue(this._CostItemId);
        const itemGetTab = tab.getData().ItemTableById.getValue(this._GetItemId);
        const tipsStr = LangMgr.getCombineString("Tips_common_buy", [LangMgr.getLab(itemCostTab.Name),this._curCostDiamond ,LangMgr.getLab(itemGetTab.Name)]);
        CommonTipsPop.create(tipsStr, ((val) => {
            if (val) {
                const haveCount = ItemData.ins.getCount(this._CostItemId)
                if (haveCount < this._curCostDiamond) {
                    ShowItemNotEnoughTips(this._CostItemId);
                } else {
                    let msg = new proto.Msg_BuyFixedShopCommodityReq();
                    msg.commodityId = this.mallItemId;
                    msg.num = this._itemCount;
                    Net.Send(proto.Ptl.BuyFixedShopCommodityReq, msg);
                }
            }
        }))
    }
}


