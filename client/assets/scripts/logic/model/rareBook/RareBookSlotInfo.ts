import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { RareBookInfo } from './RareBookInfo';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookSlotInfo
 * zhudingchao
 * Tue May 28 2024 20:04:49 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookSlotInfo.ts
 *
 */

@ccclass('RareBookSlotInfo')
export class RareBookSlotInfo extends proto.BookSlotData {

    private _bookSlotTable:tab.BookSlotTable;
    private _bookInfo:RareBookInfo;
    merge(info: any) {
        for (const key in info) {
            this[key] = info[key]
        }
    }
    get bookSlotTable(){
        return this._bookSlotTable;
    }
    set bookSlotTable(table:tab.BookSlotTable){
        this._bookSlotTable=table;
    }
    set bookInfo(info:RareBookInfo){
        this._bookInfo=info;
    }
    get bookInfo(){
        return this._bookInfo;
    }
    get isLock(){
        
        return RoleData.ins.level>=this.bookSlotTable.UnlockArgs;
    }
}