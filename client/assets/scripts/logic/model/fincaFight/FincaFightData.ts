import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { PrestigeData } from '../prestige/PrestigeData';
import { tab } from '../../../Table/table_gen';
import { FincaFightTeamState, RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { HeroData } from '../hero/HeroData';
import { ItemInfo } from '../item/ItemInfo';
import { GameUtil } from '../../utils/GameUtil';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { FincaFightControl } from './FincaFightControl';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { RareBookData } from '../rareBook/RareBookData';
const { ccclass, property } = _decorator;
interface PvPRewardInfo {
    Rankings: string[], // 榜单 
    DropId: number[], // 奖品 
    selfReward: Array<ItemInfo>,//自己的奖励
}
@ccclass('FincaFightData')
export class FincaFightData extends AbsControl {
    private fincaFightData: proto.Msg_GetFincaBattleInfoRsp = null;
    public heroIds: number[] = []//英雄信息
    public bookIds: number[] = []//秘籍信息
    public freeTimes: number = 0;//免费次数
    private static _instance: FincaFightData;
    private _fincaFightTeamTab: tab.FincaFightTeam = null;
    public HeroToggleIndex: number = 0;
    public curSelectHero: number = 0;
    public curSelectBook: number = 0;
    public BookToggleIndex: number = 0;
    public FincaRanking: number = 0;
    public FincaRankingSimple: proto.ISimpleRank = null;
    private boosDicTabs: Map<number, tab.BookDictionary> = new Map();
    private bookList: Map<tab.HeroClass, RareBookInfo[]> = new Map();
    public static get ins() {
        if (null == this._instance) {
            this._instance = new FincaFightData();
        }
        return this._instance;
    }
    initData(msg: proto.Msg_GetFincaBattleInfoRsp) {
        FincaFightControl.ins.init();
        this.fincaFightData = msg;
        this.heroIds = msg.heroIds;
        this.bookIds = msg.bookItemIds;
        if (this.bookIds.length === 5) {
            this.bookIds.push(0);
        }
        this.freeTimes = tab.getData().GetKeyValue_ConfigTable().FincaFightFreeTimes - msg.freeFightTimes;
        this.setBookData();
        RedMgr.refreshEvent(RedDotType.Free_Fight_Token);
    }
    setFincaFightTeamTab() {
        this._fincaFightTeamTab = this.getTeamTab(PrestigeData.ins.level)
    }

    /** 根据冒险等级获取解锁 */
    getTeamTab(prestigeLevel: number) {
        const maxLevel = tab.getData().FincaFightTeam[tab.getData().FincaFightTeam.length - 1].Level;
        return tab.getData().FincaFightTeamByLevel.getValue(Math.min(prestigeLevel, maxLevel))
    }

    // 获取当前解锁了几个
    getFincaFightTeamTab() {
        return this._fincaFightTeamTab;
    }
    // 获取当前位置上的状态
    getState(index: number): FincaFightTeamState {
        if (index > this._fincaFightTeamTab.UnlockHero) {
            return FincaFightTeamState.LOCK;
        } else {
            if (this.heroIds[index - 1]) {
                return FincaFightTeamState.HERO
            }
            return FincaFightTeamState.EMPTY
        }
    }
    // 获取当前位置上秘籍的状态
    getBookState(index: number): FincaFightTeamState {
        if (index > this._fincaFightTeamTab.UnlockWeapon) {
            return FincaFightTeamState.LOCK;
        } else {
            if (this.bookIds[index - 1]) {
                return FincaFightTeamState.BOOK
            }
            return FincaFightTeamState.EMPTY
        }
    }
    // 通过heroid判断状态
    getHeroInTeam(heroId: number): number {
        return this.heroIds.indexOf(heroId)
    }
    // 获取上阵英雄数量
    getInTeamHerosCount() {
        let count = 0;
        for (let i = 0; i < this.heroIds.length; i++) {
            if (this.heroIds[i]) {
                count++;
            }
        }
        return count;
    }
    // 获取当前的空位
    getHeroEmptyIndex(): number {
        const maxIndex = this._fincaFightTeamTab.UnlockHero;
        for (let i = 1; i <= maxIndex; i++) {
            if (!this.heroIds[i - 1]) {
                return i;
            }
        }
        return 0;
    }
    // 判断当前是否可以上阵或者替换英雄
    checkReplaceHero(heroId: number): boolean {
        for (let i = 0; i < this.heroIds.length; i++) {
            if (i !== this.HeroToggleIndex - 1) {
                const _id = this.heroIds[i];
                if (_id) {
                    const heroInfo = HeroData.ins.getById(_id);
                    const replaceHeroInfo = HeroData.ins.getById(heroId);
                    if (heroInfo.heroClassTable.HeroClass === replaceHeroInfo.heroClassTable.HeroClass) {
                        return false
                    }
                }
            }
        }
        return true;
    }
    /* ------------------------------------------------------- */
    // 通过heroid判断状态
    getBookInTeam(bookId: number): number {
        return this.bookIds.indexOf(bookId)
    }
    getBookEmptyIndex(): number {
        const maxIndex = this._fincaFightTeamTab.UnlockWeapon;
        for (let i = 1; i <= maxIndex; i++) {
            if (!this.bookIds[i - 1]) {
                return i;
            }
        }
        return 0;
    }
    // 获取上阵英雄数量
    getInTeamBooksCount() {
        let count = 0;
        for (let i = 0; i < this.bookIds.length; i++) {
            if (this.bookIds[i]) {
                count++;
            }
        }
        return count;
    }
    // 获取奖励信息列表：1是今日奖励、2是结算奖励
    getRewards(type: number, needSelf: Boolean): PvPRewardInfo {
        const rewardInfo: PvPRewardInfo = {
            DropId: [],
            Rankings: [],
            selfReward: []
        };
        if (type === 2) {
            const tableData1 = tab.getData().RankRewardTableById.getValue(RANKING_TYPE.Fight);
            rewardInfo.Rankings = tableData1.Ranking;
            rewardInfo.DropId = tableData1.DropId
        } else {
            const tableData2 = this.getCycleRewardTab();
            rewardInfo.Rankings = tableData2.CycleRanking;
            rewardInfo.DropId = tableData2.CycleDropId
        }
        if (needSelf) {
            for (let i = 0; i < rewardInfo.Rankings.length; i++) {
                let str = rewardInfo.Rankings[i].split(";");
                if (Number(str[0]) <= this.FincaRanking && Number(str[1]) >= this.FincaRanking) {
                    rewardInfo.selfReward = GameUtil.getRewardsByDropId(rewardInfo.DropId[i]);
                    break;
                }
            }
        }
        return rewardInfo;
    }
    getCycleRewardTab() {
        for (let i = 0; i < tab.getData().RankCycleRewardTable.length; i++) {
            const _tab = tab.getData().RankCycleRewardTable[i];
            if (_tab.Id === RANKING_TYPE.Fight) {
                return _tab;
            }
        }
    }
    // 根据位置返回日志等级
    getUnLockLevel(index: number, isHero: boolean): number {
        for (let i = 0; i < tab.getData().FincaFightTeam.length; i++) {
            const fincaTab = tab.getData().FincaFightTeam[i];
            if (isHero) {
                if (fincaTab.UnlockHero === index) {
                    return fincaTab.Level;
                }
            } else {
                if (fincaTab.UnlockWeapon === index) {
                    return fincaTab.Level;
                }
            }
        }
        return 0
    }
    // 判断当前是否可以提交
    checkHeroIdsOk(): boolean {
        if (this.heroIds[0]) {
            const heroInfo = HeroData.ins.getById(this.heroIds[0]);
            if (heroInfo.heroClassTable.HeroClass !== tab.HeroClass.HeroClass_Warrior) {
                console.log("cocos 首位不能是非战士英雄")
                return false;
            }
            const newArr = [];
            for (let i = 0; i < this.heroIds.length; i++) {
                if (this.heroIds[i]) {
                    const _heroInfo = HeroData.ins.getById(this.heroIds[i]);
                    newArr.push({
                        classType: _heroInfo.heroClassTable.HeroClass
                    })
                }
            }
            const hasRepeat = this.hasDuplicate(newArr, "classType");
            return !hasRepeat;
        } else {
            return false
        }
    }
    hasDuplicate(arr, field) {
        var seen = {};  // 使用对象来记录已出现的属性值
        for (var i = 0; i < arr.length; i++) {
            var value = arr[i][field];
            if (seen[value]) {  // 如果该值已存在，说明有重复
                return true;
            }
            seen[value] = true;  // 如果没有出现过，将该值标记为已出现
        }
        return false;  // 没有重复
    }
    // 获取秘籍数据按照全部、刺客、射手、牧师、法师、战士
    setBookData() {
        this.bookList.clear();
        this.boosDicTabs.clear();
        let tabs = tab.getData().BookDictionary;
        for (let key in tabs) {
            let bookId = tabs[key].PhaseOneBook;
            let heroClass = RareBookData.ins.getBookInfoByItemId(bookId).bookTable.Class;
            this.boosDicTabs.set(heroClass, tabs[key]);
        }
        for (let i = tab.HeroClass.HeroClass_Assassin; i < tab.HeroClass.HeroClass_Max; i++) {
            const arr = [];
            const dict: tab.BookDictionary = this.boosDicTabs.get(i);
            for (let k = 0; k < dict.PhaseTwoBook.length; k++) {
                const twoBookId = dict.PhaseTwoBook[k];
                const threeBookId = dict.PhaseThreeBook[k];
                let bookInfo = RareBookData.ins.getBookInfoByItemId(threeBookId);
                if (bookInfo.isLock) {
                    let bookInfo = RareBookData.ins.getBookInfoByItemId(threeBookId);
                    arr.push(bookInfo);
                } else {
                    let bookInfo = RareBookData.ins.getBookInfoByItemId(twoBookId);
                    arr.push(bookInfo);
                }
            }
            this.bookList.set(i, arr);
            if (this.bookList.has(tab.HeroClass.HeroClass_Any)) {
                const newArr = this.bookList.get(tab.HeroClass.HeroClass_Any).concat(arr)
                this.bookList.set(tab.HeroClass.HeroClass_Any, newArr)
            } else {
                this.bookList.set(tab.HeroClass.HeroClass_Any, arr)
            }
        }
        console.log(this.bookList);
    }
    getBookList() {
        return this.bookList;
    }
    // 判断当前的bookid是否有可替换的 并保存
    checkAllBooks() {
        let canSave = false;
        for (let i = 0; i < this.bookIds.length; i++) {
            const bookId = this.bookIds[i];
            if (!bookId) {
                continue
            }
            const bookInfo = RareBookData.ins.getBookInfoByItemId(bookId)
            let heroClass = bookInfo.bookTable.Class;
            const bookArr = this.bookList.get(heroClass)
            if (bookArr.indexOf(bookInfo) > -1) {
                continue
            } else {
                // 当前秘籍已经不存在替换
                const dict: tab.BookDictionary = this.boosDicTabs.get(heroClass);
                const index = dict.PhaseTwoBook.indexOf(bookId);
                this.bookIds[i] = dict.PhaseThreeBook[index];
                canSave = true;
            }
        }
        if (canSave) {
            FincaFightControl.ins.reqSetFincaBattleBookIds(FincaFightData.ins.bookIds);
        }
    }


    getChangeScoreStr(newScore: number) {
        let score = newScore - this.fincaFightData.score
        if (score > 0) {
            return "+" + score
        } else if (score == 0) {
            return "0"
        } else {
            return score
        }
    }
}


