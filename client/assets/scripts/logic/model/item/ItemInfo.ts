import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('ItemInfo')
export class ItemInfo extends proto.Item {
    constructor() {
        super()
    }
     private _itemTable:tab.ItemTable;
    private _needNum:number=0;
    merge(item: proto.Item|proto.IItem) {
        for (const key in item) {
            this[key] = item[key]
        }
    }
    initItemData(itemId:number,num:number){
        this.itemId=itemId;
        this.num=num;
    }
     get id(){
        return 0;
     }
    /**
     * 道具表数据
     */
    get itemTable(){
        if(!this._itemTable){
            this._itemTable=tab.getData().ItemTableById.getValue(this.itemId);
        }
        return this._itemTable;
    }
    get needNum(){
        return this._needNum;
    }
    set needNum(num:number){
        this._needNum=num;

    }
}


