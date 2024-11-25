import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import InfiniteList from '../../../../Common/InfiniteList/InfiniteList';
import { proto } from 'client_protocol';
import { ActivityData } from '../ActivityData';
import { tab } from '../../../../Table/table_gen';
import { CombineStarUpCellItem } from './CombineStarUpCellItem';
import { EventMgr } from '../../../mgr/EventMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('CombineStarUpItem')
export class CombineStarUpItem extends Component {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    private _heroGrowData:proto.HeroGrow = null;
    private _listData:tab.ActivityHeroGrowTable[] = [];
    onShow(activityId:number){
        this._heroGrowData = ActivityData.ins.getHeroGrowData(activityId);
        this._listData = ActivityData.ins.getHeroGrowTabs(activityId,this._heroGrowData.heroItemId);
        // 创建列表
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
    }
    getCellCount() {
        return this._listData.length;
    }
    getCellHeight(idx: number) {
        return 200;
    }
    getCellIdentifer(idx: number) {
        return "CombineStarUpCellItem"
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_item).getComponent(CombineStarUpCellItem);
    }
    GetCellData(idx: number) {
        return {tab:this._listData[idx],id:this._heroGrowData.activityId}
    }
    // 领取奖励之后刷新list
    refreshView(){
        this.list_view.Refresh();
    }
}


