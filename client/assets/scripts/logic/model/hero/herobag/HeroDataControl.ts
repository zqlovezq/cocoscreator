/*
 * @Date: 2024-05-06 13:59:46
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-14 11:38:25
 */

import { _decorator, log } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../../Table/table_gen';
import { HeroData } from '../HeroData';
import { HeroTeamControl } from '../HeroTeamControl';
import { HeroInfo } from '../HeroInfo';
import { RoleData } from '../../role/RoleData';
import { Long } from 'protobufjs';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';



const { ccclass, property } = _decorator;
@ccclass('HeroDataControl')
export class HeroDataControl {
    private static _instance: HeroDataControl;

    public heroId: number = 0;//背包里当前的英雄id
    public bookId: number = 0;//图签切换到的当前英雄id
    private _idx: number = 0;//当前bag id的index
    private _book_idx: number = 0;//当前book id的index
    private _heroBagList: Map<tab.HeroClass, number[]> = new Map();//背包
    private _heroBookList: Map<tab.HeroClass, number[]> = new Map();//图签
    private _heroAptitudeList: Map<tab.HeroAptitude, number[]> = new Map;//资质
    private _heroPaintingList: Map<tab.HeroClass, number[]> = new Map();//绘卷
    public paintingActive: Map<number, number> = new Map();//已经激活绘卷
    public paintingActiveMaxStar: Map<number, number> = new Map();//已经激活绘卷

    private _starUpMap: Map<number, HeroInfo[]> = new Map();//一键升星的map
    private _ResolveHerosMap: Map<number, HeroInfo> = new Map();//一键遣散的map
    private _receivedHeroAlbumIds: Map<number, proto.Msg_GetHeroBagRsp.IHeroAlbum> = new Map();//已经领取图签奖励的英雄ids
    private _receivedRecommendTeamIds: Map<number, boolean> = new Map();//已经领取推荐阵容的队伍ids

    private _heroClassType: tab.HeroClass = tab.HeroClass.HeroClass_Max;//当前背包的职业类型
    private _bookClassType: tab.HeroClass = tab.HeroClass.HeroClass_Max;//当前书签的职业类型
    private _newGetSRHero: Map<number, boolean> = new Map();
    private _replaceHeroMap: Map<number, boolean> = new Map();
    public static get ins() {
        if (null == this._instance) {
            this._instance = new HeroDataControl();
        }
        return this._instance;
    }
    setAwardData(heroAlbumMap, receivedRecommendTeamIds: number[]) {
        this._receivedHeroAlbumIds.clear();
        this._receivedRecommendTeamIds.clear();
        Object.keys(heroAlbumMap).forEach(key => {
            const id = heroAlbumMap[key].id;
            const isReceived = heroAlbumMap[key].isReceived;
            this._receivedHeroAlbumIds.set(id, {
                id: id, isReceived: isReceived
            }
            )
        })
        for (let k = 0; k < receivedRecommendTeamIds.length; k++) {
            this._receivedRecommendTeamIds.set(receivedRecommendTeamIds[k], true)
        }
    }
    // 获取图签已经获得的所有ids
    getBookActiveHeroCount(): number {
        let count = 0
        this._receivedHeroAlbumIds.forEach((value, key) => {
            if (value.isReceived) {
                count++;
            }
        })
        return count;
    }
    // 刷新图签数据
    refreshHeroAlbumIds(heroId: number) {
        this._receivedHeroAlbumIds.set(heroId, {
            id: heroId, isReceived: false
        }
        )
        const heroTab = tab.getData().HeroTableById.getValue(heroId);
        if (heroTab && heroTab.Aptitude === tab.HeroAptitude.HeroAptitude_SR) {
            this._newGetSRHero.set(heroId, true)
        }
    }
    // 获取新获得的sr英雄
    getNewSRHero(heroId: number) {
        return this._newGetSRHero.get(heroId) ? true : false;
    }
    // 移除获得的SR英雄
    deleteNewSRHero(heroId: number) {
        return this._newGetSRHero.delete(heroId)
    }
    getBookReceivedIds(): Map<number, proto.Msg_GetHeroBagRsp.IHeroAlbum> {
        return this._receivedHeroAlbumIds;
    }
    getRecommendTeamIds(): Map<number, boolean> {
        return this._receivedRecommendTeamIds;
    }
    // 最好只初始化一次
    initData(heroAlbumMap, receivedRecommendTeamIds: number[]) {
        // this.initBagHeros();//背包
        this.initBookHeros();//书签

        this.initPaintingHeros();//绘卷
        this.setAwardData(heroAlbumMap, receivedRecommendTeamIds)
    }
    /* 初始化绘卷的数据并分类 */
    initPaintingHeros() {
        this._heroPaintingList.clear();
        this.paintingActive.clear();
        const paintingArr = [];
        for (let i = 0; i < tab.getData().HeroTable.length; i++) {
            const heroTab = tab.getData().HeroTable[i];
            if (heroTab.Aptitude == tab.HeroAptitude.HeroAptitude_SR || heroTab.Aptitude == tab.HeroAptitude.HeroAptitude_SSR) {
                paintingArr.push(heroTab.Id);
            }
        }
        paintingArr.sort((hero1, hero2) => {
            let itemTab1 = tab.getData().ItemTableById.getValue(hero1);
            let itemTab2 = tab.getData().ItemTableById.getValue(hero2);
            return itemTab2.Sort - itemTab1.Sort;
        })
        for (let k = 0; k < paintingArr.length; k++) {
            const bookHeroTab: tab.HeroTable = tab.getData().HeroTableById.getValue(paintingArr[k]);
            const heroClass = bookHeroTab.Class;
            if (!this._heroPaintingList.get(heroClass)) {
                this._heroPaintingList.set(heroClass, [paintingArr[k]]);
            } else {
                const heroListClassArr = this._heroPaintingList.get(heroClass);
                heroListClassArr.push(paintingArr[k])
            }
        }

        /* 已经激活的绘卷 */
        this.updatePaintings();
    }
    updatePaintings() {
        let paintingData: proto.IScrollPainting[] = RoleData.ins.paintings;
        for (let j = 0; j < paintingData.length; j++) {
            const painting = paintingData[j];
            if (painting.star) {
                if (painting.unlockStar < painting.star) {
                    painting.unlockStar = painting.star
                }
            }
            if (!this.paintingActive.has(painting.heroItemId)) {
                this.paintingActive.set(painting.heroItemId, painting.star);
            }
            this.paintingActiveMaxStar.set(painting.heroItemId, painting.unlockStar)
        }
    }
    getMaxPaintingStar(itemId: number) {
        return this.paintingActiveMaxStar.get(itemId);
    }
    /* 初始化背包数据并分类 */
    initBagHeros() {
        this._idx = 0;
        this._heroBagList.clear();
        const sortHeros = this.sortHeroList(HeroData.ins.getHeros());
        for (let i = 0; i < sortHeros.length; i++) {
            const heroTab = tab.getData().HeroTableById.getValue(sortHeros[i].itemId);
            const heroClass = heroTab.Class;
            if (!this._heroBagList.get(heroClass)) {
                this._heroBagList.set(heroClass, [sortHeros[i].id]);
            } else {
                const heroListClassArr = this._heroBagList.get(heroClass);
                heroListClassArr.push(sortHeros[i].id)
            }
            if (!this._heroBagList.get(tab.HeroClass.HeroClass_Max)) {
                this._heroBagList.set(tab.HeroClass.HeroClass_Max, [sortHeros[i].id]);
            } else {
                const heroListAllArr = this._heroBagList.get(tab.HeroClass.HeroClass_Max);
                heroListAllArr.push(sortHeros[i].id)
            }
        }
        if (!this.heroId) {
            this.heroId = Number(sortHeros[0].id);
        } else {
            this.refreshBagData(this.heroId);
        }
    }
    /* 初始化图签数据并分类 */
    initBookHeros() {
        if (this._heroBookList.size === 0) {
            this._book_idx = 0;
            const bookArr = [];
            for (let j = 0; j < tab.getData().HeroTable.length; j++) {
                let _bookId = tab.getData().HeroTable[j].Id
                bookArr.push(_bookId);
            }
            bookArr.sort((hero1, hero2) => {
                let itemTab1 = tab.getData().ItemTableById.getValue(hero1);
                let itemTab2 = tab.getData().ItemTableById.getValue(hero2);
                return itemTab2.Sort - itemTab1.Sort;
            })
            for (let k = 0; k < bookArr.length; k++) {
                // 根据职业组合
                const bookHeroTab: tab.HeroTable = tab.getData().HeroTableById.getValue(bookArr[k]);
                const heroClass = bookHeroTab.Class;
                if (!this._heroBookList.has(heroClass)) {
                    this._heroBookList.set(heroClass, [bookArr[k]]);
                } else {
                    const heroListClassArr = this._heroBookList.get(heroClass);
                    heroListClassArr.push(bookArr[k])
                }

                if (!this._heroBookList.has(tab.HeroClass.HeroClass_Max)) {
                    this._heroBookList.set(tab.HeroClass.HeroClass_Max, [bookArr[k]]);
                } else {
                    const heroListAllArr = this._heroBookList.get(tab.HeroClass.HeroClass_Max);
                    heroListAllArr.push(bookArr[k])
                }
                // 根据资质
                const heroAptitude = bookHeroTab.Aptitude;
                if (!this._heroAptitudeList.has(heroAptitude)) {
                    this._heroAptitudeList.set(heroAptitude, [bookArr[k]]);
                } else {
                    const heroListAptitudeArr = this._heroAptitudeList.get(heroAptitude);
                    heroListAptitudeArr.push(bookArr[k])
                }
            }
        }
    }
    /* 根据资质返回list */
    getHeroListByAptitude(Aptitude: tab.HeroAptitude) {
        return this._heroAptitudeList.get(Aptitude)
    }
    /* 根据职业返回baglist */
    getHeroListByVocation(vocationType: tab.HeroClass, isHeroBagChange: boolean) {
        if (isHeroBagChange) {
            this._heroClassType = vocationType;
        }
        return this._heroBagList.get(vocationType)
    }
    /* 根据职业返回booklist */
    getBookHeroListByVocation(vocationType: tab.HeroClass, isBookBagChange: boolean) {
        if (isBookBagChange) {
            this._bookClassType = vocationType;
        }
        return this._heroBookList.get(vocationType);
    }
    /* 根据职业返回paintinglist */
    getPaintingListByVocation(vocationType: tab.HeroClass) {
        return this._heroPaintingList.get(vocationType);
    }
    // 获取当前职业中星级最高的英雄
    getMaxStarByItemId(itemId: number): HeroInfo {
        let _heroTab = tab.getData().HeroTableById.getValue(itemId);
        let list = this.getHeroListByVocation(_heroTab.Class, false);
        let _list = [];
        for (let i = 0; i < list.length; i++) {
            if (HeroData.ins.getById(list[i]).itemId === itemId) {
                _list.push(HeroData.ins.getById(list[i]));
            }
        }
        let star = 0;
        let heroInfo = null;
        for (let i = 0; i < _list.length; i++) {
            let heroData = _list[i];
            if (heroData.star > star) {
                star = heroData.star;
                heroInfo = heroData;
            }
        }
        return heroInfo;
    }
    refreshBagData(id: number) {
        this.heroId = id;
        const heroListData = this._heroBagList.get(this._heroClassType);
        if (id === 0) {
            this.heroId = heroListData[0];
            this._idx = 0;
            this._heroClassType = tab.HeroClass.HeroClass_Max;
            return;
        }
        for (let i = 0; i < heroListData.length; i++) {
            const heroId = Number(heroListData[i]);
            if (Number(id) === heroId) {
                this._idx = i;
            }
        }
    }
    getHeroIndexById(arr, heroId: number | Long): number {
        const hero_id = Number(heroId);
        for (let i = 0; i < arr.length; i++) {
            let id = arr[i];
            if (Number(id) === hero_id) {
                return i;
            }
        }
        return -1
    }
    /* 上陣英雄互换 */
    refreshTeamBagData(heroId: number | Long) {
        const _heroID = Number(heroId);
        const heroInfo = HeroData.ins.getById(heroId);
        const heroClass = heroInfo.heroTable.Class;
        const allList = this._heroBagList.get(tab.HeroClass.HeroClass_Max);
        const classList = this._heroBagList.get(heroClass);
        let teamInfo = HeroTeamControl.ins.getHeroByClass(heroClass);
        if (!teamInfo) {
            HeroTeamControl.ins.refreshTeam(_heroID);
            teamInfo = HeroTeamControl.ins.getHeroByClass(heroClass);
        }
        /* 转换classList */
        let classIndex = this.getHeroIndexById(classList, heroId);
        let classTemp = classList[0]
        classList[0] = _heroID;
        if (teamInfo.id) {
            classList[classIndex] = classTemp;
        }
        /* 转换AllList */
        let allTeamIndex = this.getHeroIndexById(allList, teamInfo.id);
        let alIndex = this.getHeroIndexById(allList, heroId);
        if (allTeamIndex < 0) {
            let index = heroClass - 1;
            allList[index] = _heroID;
        } else {
            let allTemp = allList[allTeamIndex]
            allList[allTeamIndex] = _heroID;
            allList[alIndex] = allTemp;
        }
    }
    refreshBookData(id: number) {
        this.bookId = id;
        const bookListData = this._heroBookList.get(this._bookClassType);
        for (let i = 0; i < bookListData.length; i++) {
            let bookId = bookListData[i]
            if (bookId == id) {
                this._book_idx = i;
            }
        }
    }
    /* 展示下一个英雄 */
    public NextHero(isTeam: boolean) {
        if (this.bookId) {
            this._book_idx++;
            let classType = this._bookClassType;
            const bookListData = this._heroBookList.get(classType);
            if (this._book_idx > bookListData.length - 1) {
                this._book_idx = 0;
            }
            this.bookId = bookListData[this._book_idx];
        } else {
            if (isTeam) {
                let teamSlots = HeroTeamControl.ins.getTeam();
                let index = HeroTeamControl.ins.getTeamIndexById(this.heroId);
                if (index >= 0) {
                    index++;
                    if (index > teamSlots.length - 1) {
                        index = 0;
                    }
                    this.heroId = Number(teamSlots[index].heroId);
                } else {
                    this.heroId = Number(teamSlots[0].heroId);
                }
            } else {
                let classType = this._heroClassType;
                const heroListData = this._heroBagList.get(classType);
                this._idx++;
                if (this._idx > heroListData.length - 1) {
                    this._idx = 0;
                }
                this.heroId = heroListData[this._idx];
            }
        }
    }
    public LastHero(isTeam: boolean) {
        if (this.bookId) {
            let classType = this._bookClassType;
            this._book_idx--
            const bookListData = this._heroBookList.get(classType);
            if (this._book_idx < 0) {
                this._book_idx = bookListData.length - 1;
            }
            this.bookId = bookListData[this._book_idx];
        } else {
            if (isTeam) {
                let teamSlots = HeroTeamControl.ins.getTeam();
                let index = HeroTeamControl.ins.getTeamIndexById(this.heroId);
                if (index >= 0) {
                    index--;
                    if (index < 0) {
                        index = teamSlots.length - 1;
                    }
                    this.heroId = Number(teamSlots[index].heroId);
                } else {
                    this.heroId = Number(teamSlots[0].heroId);
                }
            } else {
                let classType = this._heroClassType;
                const heroListData = this._heroBagList.get(classType);
                this._idx--;
                if (this._idx < 0) {
                    this._idx = heroListData.length - 1
                }
                this.heroId = heroListData[this._idx];
            }
        }
    }
    /* 英雄背包排序 */
    sortHeroList(heros: HeroInfo[]) {
        // 先判断是否在team里面
        let teamHeros = [];
        let noTeamHeros = [];
        let temaData = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < temaData.length; i++) {
            if (temaData[i].heroId) {
                let teamHeroInfo = HeroData.ins.getById(temaData[i].heroId)
                teamHeros.push(teamHeroInfo);
            }
        }
        for (let i = 0; i < heros.length; i++) {
            let hero: HeroInfo = heros[i];
            if (hero === null) {
                continue;
            }
            if (!HeroTeamControl.ins.heroInTeam(hero.id)) {
                noTeamHeros.push(hero)
            }
        }
        noTeamHeros.sort(this.sortFunc);
        return teamHeros.concat(noTeamHeros);
    }
    /* 根据战斗力排序方法 */
    sortFunc(hero1: proto.Hero, hero2: proto.Hero) {
        let hero1Info = HeroData.ins.getById(hero1.id);
        let hero2Info = HeroData.ins.getById(hero2.id);
        let itemTab1 = hero1Info.itemTable;
        let itemTab2 = hero2Info.itemTable;
        // 星级
        if (hero1Info.star !== hero2Info.star) {
            return hero2Info.star - hero1Info.star;
        }
        // 品质
        if (hero1Info.heroTable.Aptitude !== hero2Info.heroTable.Aptitude) {
            return hero2Info.heroTable.Aptitude - hero1Info.heroTable.Aptitude;
        }
        // 职业
        if (hero1Info.heroTable.Class !== hero2Info.heroTable.Class) {
            return hero1Info.heroTable.Class - hero2Info.heroTable.Class
        }
        if (itemTab1.Sort !== itemTab2.Sort) {
            return itemTab2.Sort - itemTab1.Sort;
        }

    }
    /* 返回一键升星的列表 */
    getOneClickList(): Map<number, HeroInfo[]> {
        this._starUpMap.clear();
        let allList = HeroData.ins.getHeros();
        /* 可以升星的重组一个数组 条件 只能是优的英雄 */
        let map: Map<number, any> = new Map();
        for (let i = 0; i < allList.length; i++) {
            let heroInfo = allList[i];
            if (map.get(Number(heroInfo.id))) {
                continue;
            }
            if (heroInfo.heroTable.Aptitude === tab.HeroAptitude.HeroAptitude_R) {
                const materialArr: HeroInfo[] = [];
                const sameIdHeros = heroInfo.getHerosByType(tab.HeroStarUpType.HeroStarUpType_SameNameHero, 0, map);
                let needSmaeIdCount = sameIdHeros.needCount;
                map.set(Number(heroInfo.id), true);
                sameIdHeros.map.forEach((value, key) => {
                    if (needSmaeIdCount > 0) {
                        map.set(key, true);
                        materialArr.push(value);
                        needSmaeIdCount--;
                    }
                })
                const sameClassHeros = heroInfo.getHerosByType(tab.HeroStarUpType.HeroStarUpType_SameClassHero, 0, map);
                let needSmaeClassCount = sameClassHeros.needCount;
                sameClassHeros.map.forEach((value, key) => {
                    if (needSmaeClassCount > 0) {
                        map.set(key, true);
                        materialArr.push(value);
                        needSmaeClassCount--;
                    }
                })
                if (sameIdHeros.map.size >= sameIdHeros.needCount && sameClassHeros.map.size >= sameClassHeros.needCount) {
                    if (materialArr.length > 0) {
                        this._starUpMap.set(Number(heroInfo.id), materialArr);
                    }
                }
            }
        }
        return this._starUpMap;
    }
    /* 返回所有可以遣散的英雄 */
    getAllResolveHeros(): Map<number, HeroInfo> {
        this._ResolveHerosMap.clear();
        let allList = HeroData.ins.getHeros();
        for (let i = 0; i < allList.length; i++) {
            let heroInfo = allList[i];
            if (heroInfo.heroTable.Aptitude === tab.HeroAptitude.HeroAptitude_N && !HeroTeamControl.ins.heroInTeam(heroInfo.id)) {
                this._ResolveHerosMap.set(Number(heroInfo.id), heroInfo);
            }
        }
        return this._ResolveHerosMap;
    }
    /* 通过星级返回其品质 */
    getItemQualityTableByStar(star: number) {
        for (let i = 0; i < tab.getData().ItemQualityTable.length; i++) {
            const dataTab = tab.getData().ItemQualityTable[i];
            for (let j = 0; j < dataTab.HeroStar.length; j++) {
                if (dataTab.HeroStar[j] === star) {
                    return dataTab;
                }
            }
        }
        return null;
    }
    /* 英雄背包是否已满 */
    getHeroBagFull(add: number) {
        const curNum = HeroData.ins.getHeros().length;
        /* 最大容量 */
        let heroBagExpansion = tab.getData().GetKeyValue_ConfigTable().HeroBagExpansion;//100钻石升10格子
        const maxCount = tab.getData().GetKeyValue_ConfigTable().HeroBagNum + heroBagExpansion[2] * RoleData.ins.capacityLevel + RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_HeroBagAddCount);
        return curNum + add > maxCount
    }
    /* 获取当前队伍中可以有替换的英雄 */
    setCanReplaceHeros() {
        this._replaceHeroMap.clear();
        let teamSlots = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < teamSlots.length; i++) {
            let v = teamSlots[i];
            let heroInfo = HeroData.ins.getById(v.heroId);
            if (heroInfo && heroInfo.heroTable.Aptitude < 3) {
                const list = this.getHeroListByVocation(heroInfo.heroClassTable.HeroClass, false);
                if (list.length > 1) {
                    const id = this.getMaxAptitudeHero(list);
                    if(id){
                        this._replaceHeroMap.set(id, true);
                    }
                }
            }
        }
        RedMgr.refreshEvent(RedDotType.HeroReplace);
    }
    getCanReplaceHeros() {
        return this._replaceHeroMap;
    }
    // 获取列表中资质最高的英雄
    getMaxAptitudeHero(list:number[]){
        let id = -1;
        let aptitude = tab.HeroAptitude.HeroAptitude_None;
        for(let i=1;i<list.length;i++){
            const heroInfo = HeroData.ins.getById(list[i]);
            if(heroInfo.heroTable.Aptitude>aptitude){
                id = list[i];
                aptitude = heroInfo.heroTable.Aptitude;
            }
        }
        if(aptitude>tab.HeroAptitude.HeroAptitude_R){
            return id;
        }
        return 0;
    }
}


