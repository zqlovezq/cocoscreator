import { _decorator, Component, error, log, Node, ValueType } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { RareBookInfo } from './RareBookInfo';
import { RoleData } from '../role/RoleData';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { RareBookSlotInfo } from './RareBookSlotInfo';
import { proto } from 'client_protocol';
import { RareBookSerieInfo } from './RareBookSerieInfo';
import { Long } from 'protobufjs';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { RareBookControl } from './RareBookControl';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { Func } from '../../utils/Func';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookData
 * zhudingchao
 * Wed May 22 2024 15:26:54 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookData.ts
 *
 */

@ccclass('RareBookData')
export class RareBookData implements IClear {
    private static _instance: RareBookData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RareBookData();
        }
        return this._instance;
    }
    private bookMap: Map<number, RareBookInfo>;
    private bookSerieMap: Map<number, tab.BookSeriesTable>;
    private bookLevelMap: Map<string, tab.BookLevelTable>;
    private bookStarMap: Map<string, tab.BookStarTable>;
    private bookAdvanceMap: Map<number, number>;
    private bookContainerMap: Map<number, Array<RareBookSlotInfo>>;
    private bookBaseMap: Map<tab.HeroClass, RareBookInfo>;
    private bookFragmentMap: Map<number, tab.BookFragmentTable>;
    private bookSerieInfoMap: Map<number, RareBookSerieInfo>;
    private bookSerieGroupMap: Map<number, tab.BookSeriesTable>;
    private bookDicTabMap: Map<tab.HeroClass, tab.BookDictionary>;
    private _powerScore: number = 0;

    public bookCollectRedPointId: string = "";
    purge(): void {

    }
    initBookData() {
        this.bookMap = new Map();
        let data = RoleData.ins.book;
        log("武器==",data);
        this.powerScore = data.powerScore;
        let list = data.equipList;
        let maxStarMap: Map<number, number> = new Map();
        let starTabs = tab.getData().BookStarTable;
        for (let key in starTabs) {
            let booId = starTabs[key].BookId;
            if (!maxStarMap.has(booId)) {
                maxStarMap.set(booId, starTabs[key].Level)
            } else {
                if (maxStarMap.get(booId) < starTabs[key].Level) {
                    maxStarMap.set(booId, starTabs[key].Level)
                }
            }
        }
        for (let key in list) {
            let info = new RareBookInfo();
            info.merge(list[key]);
            this.bookMap.set(info.itemId, info);
            info.maxStar = maxStarMap.get(info.itemId);
        }
        let tables = tab.getData().BookTable;
        for (let key in tables) {
            if (!this.bookMap.has(tables[key].Id)) {
                let info = new RareBookInfo();
                info.initItemId(tables[key].Id);
                this.bookMap.set(info.itemId, info);
                info.maxStar = maxStarMap.get(info.itemId);
            }
        }
        this.bookSerieMap = new Map();
        this.bookSerieGroupMap = new Map();
        let tabs = tab.getData().BookSeriesTable;
        for (let value of tabs) {
            if (value.Id == value.GroupId)
                for (let itemId of value.BookId) {
                    this.bookSerieMap.set(itemId, value);
                }
            this.bookSerieGroupMap.set(value.GroupId, value);
        }

        this.bookSerieInfoMap = new Map();
        let seriesData = data.seriesData;
        for (let key in seriesData) {
            let info = new RareBookSerieInfo();
            info.merge(seriesData[key]);
            this.bookSerieInfoMap.set(info.id, info);
        }
        this.initContainerMap();
        RedMgr.refreshEvent(RedDotType.Weapon_Job_Archer);
        RedMgr.refreshEvent(RedDotType.Weapon_Job_Assassin);
        RedMgr.refreshEvent(RedDotType.Weapon_Job_Priest);
        RedMgr.refreshEvent(RedDotType.Weapon_Job_Caster);
        RedMgr.refreshEvent(RedDotType.Weapon_Job_Warrior);
        RedMgr.refreshEvent(RedDotType.BooK_Equip);

        RedMgr.refreshEvent(RedDotType.Book_Job);
        this.updateBookCollectRedPoint();
        RedMgr.refreshEvent(RedDotType.Book_collect);
        RedMgr.refreshEvent(RedDotType.Weapon_recovery);


    }
    private initBookLevelMap() {
        this.bookLevelMap = new Map();
        let tabs = tab.getData().BookLevelTable;
        for (let key in tabs) {
            let str = tabs[key].Aptitude + "_" + tabs[key].Class + "_" + tabs[key].Level;
            this.bookLevelMap.set(str, tabs[key]);
        }


    }
    private initBookStarMap() {
        this.bookStarMap = new Map();
        let tabs = tab.getData().BookStarTable;
        for (let key in tabs) {
            let str = tabs[key].BookId + "_" + tabs[key].Level;
            this.bookStarMap.set(str, tabs[key]);
        }

    }
    private initBookAdvanceMap() {
        this.bookAdvanceMap = new Map();
        this.bookBaseMap = new Map();
        this.bookDicTabMap = new Map();
        let tabs = tab.getData().BookDictionary;
        for (let key in tabs) {
            let t = tabs[key];
            for (let k2 in t.PhaseThreeBook) {
                this.bookAdvanceMap.set(t.PhaseThreeBook[k2], t.PhaseTwoBook[k2]);
                this.bookAdvanceMap.set(t.PhaseTwoBook[k2], t.PhaseOneBook);
            }
            let info = this.getBookInfoByItemId(t.PhaseOneBook);
            this.bookBaseMap.set(info.bookTable.Class, info);
            this.bookDicTabMap.set(info.bookTable.Class, t);
        }
    }
    private initContainerMap() {
        this.bookContainerMap = new Map();
        let bookSlots = tab.getData().BookSlotTable;
        for (let key in bookSlots) {
            let table = bookSlots[key];
            let list = this.bookContainerMap.get(table.Class);
            if (!list) {
                list = [];
                this.bookContainerMap.set(table.Class, list);
            }
            let info = new RareBookSlotInfo();
            info.bookSlotTable = table;
            list.push(info);
        }
        // this.bookContainerMap.forEach((value) => {
        //     value.sort((a, b) => {
        //         return a.bookSlotTable.Slot - b.bookSlotTable.Slot;
        //     })
        // })
        let container = RoleData.ins.book.containerList;
        for (let key in container) {
            let c = container[key].heroClass;
            let list = this.bookContainerMap.get(c);
            let slotData = container[key].slotData;
            for (let i: number = 1; i < slotData.length; i++) {
                list[i - 1].bookId = slotData[i].bookId;
                if (Number(slotData[i].bookId) != 0) {
                    let bookInfo = this.getBookInfoById(slotData[i].bookId);
                    if (bookInfo) {
                        bookInfo.isWear = true;
                        list[i - 1].bookInfo = bookInfo;
                    }
                }
            }
        }
    }
    private initBookFragmentMap() {
        this.bookFragmentMap = new Map();
        let tables = tab.getData().BookFragmentTable;
        for (let key in tables) {
            this.bookFragmentMap.set(tables[key].BookId, tables[key]);
        }
    }
    public set powerScore(num: number) {
        this._powerScore = num;
    }
    public get powerScore() {
        return this._powerScore;
    }

    public addBooks(books: proto.BookData[]) {
     
        for (let key in books) {
            // let info=new RareBookInfo();
            let info = this.bookMap.get(books[key].itemId);
            info.merge(books[key]);
            if (info.bookTable.Aptitude == tab.HeroAptitude.HeroAptitude_SR) {
                RareBookControl.ins.refreshfTujianRedPoint(info.bookTable.Class);
            }
            RedMgr.refreshEvent(RedDotType.Book_Job);
            if(info.maxStar){
                RedMgr.refreshEvent(RedDotType.Weapon_recovery);
            }
        }
        RedMgr.refreshEvent(RedDotType.BooK_Equip);

    }
    public updateBook(book: proto.BookData) {
        let info = this.bookMap.get(book.itemId);
        if (info) {
            info.update(book);
            if(info.maxStar){
                RedMgr.refreshEvent(RedDotType.Weapon_recovery);
            }
        } else {
            error("更新秘籍错误==", book)
        }

    }
    getBookLevelTable(aptitude: number, heroClass: number, level: number) {
        if (!this.bookLevelMap) {
            this.initBookLevelMap();
        }
        let key = aptitude + "_" + heroClass + "_" + level;
        return this.bookLevelMap.get(key);
    }
    getBoolStarTable(bookId: number, star: number) {
        if (!this.bookStarMap) {
            this.initBookStarMap();
        }
        let key = bookId + "_" + star;
        return this.bookStarMap.get(key);

    }
    getBookInfoById(id: number | Long) {
        id = Number(id);
        let values = Array.from(this.bookMap.values());
        let info = values.find(a => Number(a.id) == id);
        return info;
    }
    getBookInfoByItemId(itemId: number) {
        // let values=Array.from(this.bookMap.values());
        // let info=values.find(a=>a.itemId==itemId);
        // if(!info){
        //     info=new RareBookInfo();
        //     info.initItemId(itemId);
        // }
        if(!itemId){
            return;
        }
        if (this.bookMap == null) {
            this.bookMap = new Map();
        }

        if (this.bookMap) {
            if (this.bookMap.has(itemId)) {
                return this.bookMap.get(itemId)
            }
            let info = new RareBookInfo();
            info.initItemId(itemId);
            this.bookMap.set(itemId, info);
            return info
        }
        return this.bookMap && this.bookMap.get(itemId);
    }
    /** 根据道具id查找是否已穿戴 */
    isWearByItemId(itemId: number) {
        let info = this.getBookInfoByItemId(itemId)
        if (info) {
            return info.isWear;
        }
        return false;
    }

    getBookInfos(isSort: boolean = false) {
        let values = Array.from(this.bookMap.values());
        if (isSort) {
            values.sort((a, b) => {
                if (a.isRedPoint && b.isRedPoint) {
                    return b.bookTable.Aptitude - a.bookTable.Aptitude;
                }
                if (a.isRedPoint) {
                    return -1;
                }
                if (b.isRedPoint) {
                    return 1;
                }
                if (a.isLock && b.isLock) {
                    return b.bookTable.Aptitude - a.bookTable.Aptitude;
                }
                if (a.isLock) {
                    return -1;
                }
                if (b.isLock) {
                    return 1;
                }
                return b.bookTable.Aptitude - a.bookTable.Aptitude;
            })
        }

        return values;
    }
    getBookSerieMap() {
        return this.bookSerieMap;
    }
    getSerieTableByBookId(bookId: number) {
        return this.bookSerieMap.get(bookId);
    }
    getSerieTableByGroupId(groupId: number) {
        return this.bookSerieGroupMap.get(groupId);
    }
    getSerieInfoById(id: number) {
        return this.bookSerieInfoMap.get(id);
    }
    getBookAdvanceId(bookId: number) {
        if (!this.bookAdvanceMap) {
            this.initBookAdvanceMap();
        }
        return this.bookAdvanceMap.get(bookId);
    }
    getBookDicTabByHeroClass(heroClass: tab.HeroClass) {
        if (!this.bookDicTabMap) {
            this.initBookAdvanceMap();
        }
        return this.bookDicTabMap.get(heroClass);
    }
    /**
     * 获得可以转换的秘籍碎片
     */
    getExchangBookFragments() {
        let items = [];
        this.bookMap.forEach((value) => {
            if (value.isMaxStar()) {
                let fragmentId = this.getBookFragmentByBookItemId(value.itemId).Id;
                let itemInfo = ItemData.ins.getByItemId(fragmentId);
                if (itemInfo && Number(itemInfo.num) > 0) {
                    items.push(itemInfo);
                }

            }
        })
        return items;
    }
    getContainerMap() {
        return this.bookContainerMap;
    }
    getBookSlotsByHeroClass(heroClass: number) {
        return this.bookContainerMap.get(heroClass);
    }
    getCanBookInfosByHeroClass(heroClass: number) {
        let list: Array<RareBookInfo> = [];
        this.bookMap.forEach((value) => {
            if (value.isLock && value.bookTable.Aptitude >= tab.HeroAptitude.HeroAptitude_SR && !value.isWear && value.bookTable.Class == heroClass) {
                list.push(value);
            }
        })
        return list;
    }
    getBaseBookInfoByHeroClass(heroClass: number) {
        if (!this.bookBaseMap) {
            this.initBookAdvanceMap();
        }
        return this.bookBaseMap.get(heroClass);
    }
    getBookFragmentByBookItemId(bookItemId: number) {
        if (!this.bookFragmentMap) {
            this.initBookFragmentMap();
        }
        return this.bookFragmentMap.get(bookItemId);
    }
    updateBookSeriesData(datas: Array<proto.BookSeriesData>) {
        for (let key in datas) {
            let info = this.getSerieInfoById(datas[key].id);
            if (info) {
                info.merge(datas[key]);
            } else {
                info = new RareBookSerieInfo();
                info.merge(datas[key]);
                this.bookSerieInfoMap.set(info.id, info);
            }
        }
        this.updateBookCollectRedPoint();
        RedMgr.refreshEvent(RedDotType.Book_collect);
    }
    updateSlotInfo(bookId: number, slotIndex: number, isWear: boolean = true) {
        let info = this.getBookInfoById(bookId);
        if (info) {
            let c = info.bookTable.Class;
            let cons = this.getBookSlotsByHeroClass(c);
            if (isWear) {
                cons[slotIndex - 1].bookId = bookId;
                cons[slotIndex - 1].bookInfo = info;
                info.isWear = true;
            } else {
                cons[slotIndex - 1].bookId = 0;
                cons[slotIndex - 1].bookInfo = null;
                info.isWear = false;
            }

        }

    }
    // 通过英雄类型获得已拥有的武器列表
    getBookInfosByHeroClass(heroClass: number): RareBookInfo[] {
        let list: RareBookInfo[] = [];
        this.bookMap.forEach((book) => {
            if (book.bookTable.Class == heroClass && book.isLock) {
                list.push(book);
            }
        })
        return list;
    }

    /**
     * 是否是三阶秘籍
     */
    getIsPhaseThreeBook() {

    }
    /**刷新秘籍是否可以升级和升星 */
    updateBookCanUpLevelAndStar() {
        if (!this.bookMap) {
            return;
        }

        this.bookMap.forEach((book) => {
            book.updateCanStudy();
            book.updateCanUpStar();

        })

        RedMgr.refreshEvent(RedDotType.Book_Job);
        EventMgr.emitLocal(LocalEvent.updateBookRedPoint);

    }
    /**
     * 刷新并记录当前装备收藏红点
     */
    updateBookCollectRedPoint() {
        this.bookCollectRedPointId = ""
        this.bookSerieInfoMap.forEach((value) => {
            let seriesTable = tab.getData().BookSeriesTableById.getValue(value.id);
            if (seriesTable) {
                let level = seriesTable.Level;
                seriesTable == tab.getData().BookSeriesTableById.getValue(seriesTable.GroupId);
                if (seriesTable.BookId.length == value.count) {
                    let key = seriesTable.GroupId + "_" + level;
                    let isRecord = Number(Func.getItem("RareBook_CollectRed_" + key))
                    if (!isRecord) {
                        this.bookCollectRedPointId = key;
                        return;
                    }
                }
            }
        })

    }
}