import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { MallLayoutCell } from './MallLayoutCell';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { Global } from '../../../Global';
const { ccclass, property } = _decorator;

@ccclass('DiamondBuyPop')
export class DiamondBuyPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    private _list = []
    register(): void {

    }
    unRegister(): void {
        super.unRegister()
    }
    onShow(): void {
        this._list = [];
        let listData = tab.getData().BuyDiamondsTable;
        for (let i = 0; i < listData.length; i += 3) {
            if (listData[i].ViewSpecial && !Global.isReview){
                continue
            }
            this._list.push(listData.slice(i, i + 3));
        }
      
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        })
    }
    protected onDestroy(): void {
        super.onDestroy();
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
        return { data: this._list[idx], view: tab.MallTab.MallTab_Tab5 }
    }
}


