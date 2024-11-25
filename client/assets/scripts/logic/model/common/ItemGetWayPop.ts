import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { CommonItem } from '../item/CommonItem';
import { tab } from '../../../Table/table_gen';
import { ItemInfo } from '../item/ItemInfo';
import { ItemData } from '../item/ItemData';
import { LangMgr } from '../../mgr/LangMgr';
import { ItemGetWayItem } from './ItemGetWayItem';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('ItemGetWayPop')
export class ItemGetWayPop extends ViewPop {
    @property(CommonItem)
    item: CommonItem = null;
    @property(Label)
    lbl_name: Label = null;
    @property(Label)
    lbl_desc: Label = null;
    @property(Node)
    node_content:Node = null;
    @property(Prefab)
    pfb_item:Prefab = null;
    private _itemId: number = 0;
    onShow(): void {
        this._itemId = this.openData.itemId;
        const itemData = tab.getData().ItemTableById.getValue(this._itemId)
        let itemInfo = new ItemInfo();
        itemInfo.itemId = this._itemId;
        itemInfo.num = 0;
        this.item.initData(itemInfo);
        this.item.setSelectState(false);
        this.lbl_name.string = LangMgr.getLab(itemData.Name);
        this.lbl_desc.string = LangMgr.getLab(itemData.Desc);

        // 获取途径
        this.createItem(itemData.AcquireWay);
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister()
    }
    createItem(opNames:tab.OpenFunctionName[]){
        this.node_content.destroyAllChildren();
        for(let i=0;i<opNames.length;i++){
            const opName = opNames[i];
            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(opName);
            if(isOpen){
                const item = instantiate(this.pfb_item);
                item.parent = this.node_content;
                const itemTs = item.getComponent(ItemGetWayItem);
                itemTs.initData(opNames[i]);
            }
        }
    }
}


