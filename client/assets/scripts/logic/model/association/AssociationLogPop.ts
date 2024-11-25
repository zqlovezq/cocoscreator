import { _decorator, Component, instantiate, Label, Node, Prefab, UITransform } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { AssociationData } from './AssociationData';
import { AssociationLogItem } from './AssociationLogItem';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { Func } from '../../utils/Func';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationLogPop')
export class AssociationLogPop extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    private _list: proto.IGuildLog[] = []
    onShow(): void {
        this._list = AssociationData.ins.getGuildLogs();
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
        this.list_view.setContentPos(max_y,0, max_y);
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        const str = LangMgr.getCombineString("Tips_associationinfo_"+this._list[idx].event,[this._list[idx].roleName]);
        const len = Func.getStrZhLen(str);
        const wid = Math.floor(len/22)*45+45;
        return wid
    }
    getCellIdentifer(idx: number) {
        return "AssociationLogItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = instantiate(this.pfb_item).getComponent(AssociationLogItem);
        return cell;
    }
    GetCellData(idx: number) {
        return this._list[idx]
    }
}


