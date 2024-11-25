import { _decorator, Component, instantiate, Node, Prefab, UITransform } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { LangMgr } from '../../mgr/LangMgr';
import { FincaFightLogItem } from './FincaFightLogItem';
const { ccclass, property } = _decorator;

@ccclass('FincaFightLogPop')
export class FincaFightLogPop extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    private _list: proto.IFincaBattleFightRecord[] = []
    onShow(): void {
        this._list = this.openData;
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });

        const pos = this.list_view.GetScrollPosOfCell(this._list.length-1);
        const maxY = this.list_view.getContent().getComponent(UITransform).height-300;
        let max_y = pos.y>maxY?maxY:pos.y;
        this.list_view.setContentPos(max_y,0, 0);
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister()
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        return 60
    }
    getCellIdentifer(idx: number) {
        return "AssociationLogItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = instantiate(this.pfb_item).getComponent(FincaFightLogItem);
        return cell;
    }
    GetCellData(idx: number) {
        return this._list[idx]
    }
}


