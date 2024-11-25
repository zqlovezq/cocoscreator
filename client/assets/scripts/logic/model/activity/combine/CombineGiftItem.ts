import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { MallLayoutCell } from '../../shop/MallLayoutCell';
import { MALLNAME } from '../../../../Common/script/EnumTypeMgr';
import { ActivityData } from '../ActivityData';
import { tab } from '../../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('CombineGiftItem')
export class CombineGiftItem extends Component {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    private _list = []
    private mallId:number = 0;
    onShow(MallId:number){
        this.mallId = MallId;
        const groupData = this.groupListData();
        this._list = groupData.data;
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
    }
    getCellCount() {
        return this._list.length;
    }
    getCellHeight(idx: number) {
        return 330;
    }
    getCellIdentifer(idx: number) {
        return "MallLayoutCell";
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_item).getComponent(MallLayoutCell);
    }
    GetCellData(idx: number) {
        return { data: this._list[idx], view: tab.MallTab.MallTab_SpecialGiftTab1, viewName: this.mallId }
    }
    // 领取奖励之后刷新list
    refreshView(){
        this.list_view.Refresh();
    }
    groupListData() {
        const splitCount = 3;
        const result = [];
        let listData = ActivityData.ins.getMallItemTabsById(this.mallId);
        for (let i = 0; i < listData.length; i += splitCount) {
            result.push(listData.slice(i, i + splitCount));
        }
        return { data: result, name: this.mallId};
    }
}


