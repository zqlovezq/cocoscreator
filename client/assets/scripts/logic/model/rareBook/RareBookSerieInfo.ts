import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { RareBookData } from './RareBookData';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookSerieInfo
 * zhudingchao
 * Thu May 30 2024 15:57:22 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookSerieInfo.ts
 *
 */

@ccclass('RareBookSerieInfo')
export class RareBookSerieInfo extends proto.BookSeriesData {
    merge(bookInfo: any) {
        for (const key in bookInfo) {
            this[key] = bookInfo[key]
        }
    }
    private _seriesTable:tab.BookSeriesTable;
    private _needCount:number=-1; //满足的数量
    get seriesTable(){
        if(!this._seriesTable){
            this._seriesTable=tab.getData().BookSeriesTableById.getValue(this.id);
        }
        return this._seriesTable;
    }
    isComplete(){
        return this.count>=this.needCount;
    }
    get needCount(){
        if(this._needCount<0){
            //let table=RareBookData.ins.getSerieTableByGroupId(this.seriesTable.GroupId);
            let table = tab.getData().BookSeriesTableById.getValue(this.seriesTable.GroupId);
            this._needCount=table?table.BookId.length:0;
        }
        return this._needCount;
    }
}