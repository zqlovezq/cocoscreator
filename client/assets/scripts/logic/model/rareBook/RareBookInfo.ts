import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { RareBookData } from './RareBookData';
import { ItemData } from '../item/ItemData';
import { Func } from '../../utils/Func';
import { RareBookControl } from './RareBookControl';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * BareBookInfo
 * zhudingchao
 * Wed May 22 2024 15:32:38 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/BareBookInfo.ts
 *
 */

@ccclass('RareBookInfo')
export class RareBookInfo extends proto.BookData {

    private _bookTable: tab.BookTable;
    private _itemTable: tab.ItemTable;
    public isLock: boolean = false;
    private _isWear: boolean = false;
    private _bookLevelTable: tab.BookLevelTable;
    private _bookStarTable: tab.BookStarTable;
    private _attrMap: Map<number, number>;
    public maxStar: number;
    private _fragmentTable: tab.BookFragmentTable;
    private _isRedPoint: boolean = false;
    private _tujianRedPoint: boolean = false;
    private _isCanStudy: boolean = false;
    private _isCanUpStar: boolean = false;
    merge(bookInfo: any) {
        for (const key in bookInfo) {
            this[key] = bookInfo[key]
        }

        this.isLock = true;
        let value = Number(Func.getItem("RareBook_RedPoint_"+RoleData.ins.id+"_" + String(this.id)))
        if (value && value == 1) {
            this._isRedPoint = false;
        } else {
            this._isRedPoint = true;
        }
        let value2 = Number(Func.getItem("RareBook_tujianRedPoint_" + String(this.id)));
        if (value2 && value2 == 1) {
            this._tujianRedPoint = false;
        } else {
            this._tujianRedPoint = true;
        }
        this.updateCanStudy();
        this.updateCanUpStar();


    }
    initItemId(itemId: number) {
        this.itemId = itemId;
        this.star = 1;
        this.level = 0;
        this.isLock = false;
    }
    update(bookInfo: any) {
        if (bookInfo.level != this.level) {
            this.nextLevelTable = null;
        }
        for (const key in bookInfo) {
            this[key] = bookInfo[key]
        }
        this._bookLevelTable = null;
        this._bookStarTable = null;
        this._attrMap = null;
        this.updateCanStudy();
        this.updateCanUpStar();
    }

    private initBookLevelTable() {
        this._bookLevelTable = RareBookData.ins.getBookLevelTable(this.bookTable.Aptitude, this.bookTable.Class, this.level);
    }
    private initBookStarTable() {
        this._bookStarTable = RareBookData.ins.getBoolStarTable(this.itemId, this.star);
    }

    public getAttrMapByLevelRatio(ratio: number, types: tab.AttrType[] = null, values: number[] = null) {
        let map = new Map();
        if (!types) {
            types = this.bookStarTable.AttrType;
        }
        if (!values) {
            values = this.bookStarTable.AttrValue;
        }

        for (let key in types) {
            let t = types[key];
            let v = Math.floor(values[key] * (10000 + ratio) / 10000);
            if (map.has(t)) {
                map.set(t, map.get(t) + v);
            } else {
                map.set(t, v);
            }

        }
        return map;
    }
    private initAttrMap() {

        this._attrMap = this.getAttrMapByLevelRatio(this.level == 0 ? 0 : this.bookLevelTable.Ratio)

    }
    get fragmentTable() {
        if (!this._fragmentTable) {
            this._fragmentTable = RareBookData.ins.getBookFragmentByBookItemId(this.itemId);
        }
        return this._fragmentTable;
    }
    get bookTable() {
        if (!this._bookTable) {
            this._bookTable = tab.getData().BookTableById.getValue(this.itemId);
        }
        return this._bookTable;
    }
    get itemTable() {
        if (!this._itemTable) {
            this._itemTable = tab.getData().ItemTableById.getValue(this.itemId);
        }
        return this._itemTable;
    }
    get isWear() {
        return this._isWear;
    }
    set isWear(b: boolean) {
        this._isWear = b;
    }
    get bookLevelTable() {
        if (!this._bookLevelTable && this.level > 0) {
            this.initBookLevelTable();
        }

        return this._bookLevelTable;
    }
    get bookStarTable() {
        if (!this._bookStarTable) {
            this.initBookStarTable();
        }
        return this._bookStarTable;
    }

    get levelRatio() {

        return this.bookLevelTable ? this.bookLevelTable.Ratio : 0;
    }
    get attrMap() {
        if (!this._attrMap) {
            this.initAttrMap();
        }
        return this._attrMap;
    }
    isLevelLimit() {
        return this.level >= this.bookStarTable.MaxLevel;

    }

    isMaxStar() {
        return this.star >= this.maxStar;
    }

    isCanActivate() {
        let curr = ItemData.ins.getCount(this.fragmentTable.Id);
        return curr >= this.fragmentTable.Count
    }
    get isRedPoint() {
       
        if (!this.isLock) {
            if(this.isCanActivate()){
                return true;
            }
            return false;
        }

        return this._isRedPoint || this.isCanStudy || this.isCanUpStar;
    }
    set isRedPoint(b: boolean) {
        this._isRedPoint = b;
        if (b == false && this.isLock) {
            Func.setItem("RareBook_RedPoint_"+RoleData.ins.id+"_" + String(this.id), 1);
            // if(!this.isCanStudy&&!this.isCanUpStar){
                RedMgr.refreshEvent(RedDotType.Book_Job);
                
            // }
           
        }
    }
    get firstLookRed(){
        return this._isRedPoint;
    }

    get tujianRedPoint() {
        if (!this.isLock) {
            return false;
        }
        return this._tujianRedPoint;
    }
    set tujianRedPoint(b: boolean) {
        this._tujianRedPoint = b;
        if (b == false && this.isLock) {
            Func.setItem("RareBook_tujianRedPoint_" + String(this.id), 1)
            RareBookControl.ins.refreshfTujianRedPoint(this.bookTable.Class);
        }
    }
    private _nextLevelTable: tab.BookLevelTable;
    private isMaxLevel: boolean = false;

    get nextLevelTable() {
        if (!this._nextLevelTable) {
            let nextLevel = this.level + 1;
            let nextLavelTable = RareBookData.ins.getBookLevelTable(this.bookTable.Aptitude, this.bookTable.Class, nextLevel)
            this._nextLevelTable = nextLavelTable;
            if (this._nextLevelTable) {
                this.isMaxLevel = false;
            } else {
                this.isMaxLevel = true;
            }
        }
        return this._nextLevelTable;
    }
    set nextLevelTable(tab: any) {
        this._nextLevelTable = tab;
    }
    /**是否可以研习 */
    updateCanStudy() {
        let isCanStudy= this._isCanStudy;
        if (!this.isLock || this.isLevelLimit() || this.isMaxLevel || !this.nextLevelTable) {
          this._isCanStudy=false;
        
        }else{
            let itemid = ItemData.ins.isItemsEnoughByList(this.nextLevelTable.MaterialIdList, this.nextLevelTable.MaterialCountList);
          
            this._isCanStudy= itemid <= 0;
        }
      
        return isCanStudy!=this._isCanStudy;
    }
    get isCanStudy(){
        return this._isCanStudy;
    }
    get isCanUpStar(){
        return this._isCanUpStar;
    }
    /**是否可以升星 */
    updateCanUpStar() {
        let isCanUpStar=this._isCanUpStar;
        if (this.bookStarTable && !this.isMaxStar()) {
            let id = this.bookStarTable.MaterialIdList[0];
            let needNum = this.bookStarTable.MaterialCountList[0];
            let currNum = Number(ItemData.ins.getCount(id));
            if (this.itemTable.Quality >= tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterialQuality) {
                let itemId = tab.getData().GetKeyValue_ConfigTable().BookStarUniversalMaterial;
                let currNum2 = Number(ItemData.ins.getCount(itemId));
                currNum += currNum2;

            }
            if (needNum <= currNum) {
                this._isCanUpStar = true;
            } else {
                this._isCanUpStar = false;
            }
        }else{
            this._isCanUpStar = false;
        }

       
        return isCanUpStar!=this._isCanUpStar;
    }
}