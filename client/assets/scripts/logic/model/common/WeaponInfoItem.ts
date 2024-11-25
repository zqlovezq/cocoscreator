import { _decorator, Component, instantiate, Label, log, Node, RichText, Sprite } from 'cc';
import { HeroStar } from '../hero/HeroStar';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { RogueInfo } from '../../fight/view/rogue/RogueInfo';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { HeroData } from '../hero/HeroData';
import { RogueControl } from '../../fight/view/rogue/RogueControl';
import { RareBookData } from '../rareBook/RareBookData';
import { FightMsgControl } from '../../fight/FightMsgControl';
import { FightData } from '../../fight/data/FightData';
import { IsInFightScene } from '../../guide/GuideCommand';
const { ccclass, property } = _decorator;

/**
 * 
 * WeaponInfoItem
 * zhudingchao
 * Mon May 27 2024 14:34:23 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/common/WeaponInfoItem.ts
 *
 */

@ccclass('WeaponInfoItem')
export class WeaponInfoItem extends Component {
    @property(Sprite)
    bgSpr: Sprite = null;
    @property(Sprite)
    infoSpr: Sprite = null;
    @property(Label)
    nameLab: Label = null;
    @property(HeroStar)
    heroStar: HeroStar = null;
    @property(RichText)
    detailsRichText: RichText = null;
    @property(Node)
    proNode: Node = null;
    @property(Sprite)
    proSpr: Sprite = null;
    @property(Sprite)
    bookPlaysSpr: Sprite = null;
    @property(Sprite)
    sp_recommend_icon: Sprite = null;
    @property(Node)
    node_heros_content: Node = null;
    @property(Node)
    node_recommand:Node = null;



    private info: RareBookInfo;
    private rogueInfo: RogueInfo;
    initData(bookInfo: RareBookInfo, rogueInfo?: RogueInfo) {
        this.info = bookInfo;
        this.rogueInfo = rogueInfo;
        this.initView();
        if(FightData.ins.stageId===1&&IsInFightScene()){
            this.node_recommand.active = false;
        }
    }
    initView() {
        this.nameLab.string = LangMgr.getLab(this.info.itemTable.Name);
        this.infoSpr.setTexture(this.info.itemTable.Icon);
        let atpTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(this.info.bookTable.Aptitude);
        this.bgSpr.setTexture(atpTab.BookTitle);
        let heroclass = tab.getData().HeroClassTableByHeroClass.getValue(this.info.bookTable.Class);
        this.bookPlaysSpr.node.active = this.info.bookTable.PlaystyleName != "";
        if (this.info.bookTable.PlaystyleName != "") {
            this.bookPlaysSpr.setTexture(this.info.bookTable.PlaystyleName)
        }
        this.proSpr.setTexture(heroclass.Icon);
        this.detailsRichText.string = LangMgr.getLab(this.info.bookStarTable.BookDescription);
        if (FightMsgControl.ins.isTest) {
            return
        }
        if (this.rogueInfo) {
            const BookDictionary = RareBookData.ins.getBookDicTabByHeroClass(this.info.bookTable.Class);
            if (this.info.bookTable.Id === BookDictionary.PhaseOneBook) {
                this.createHeroIcon([])
            } else {
                const heroIds = this.caleRecommendHeros(this.rogueInfo);
                this.createHeroIcon(heroIds);
            }
        } else {
            // 通过bookid
            let Heros = [];
            const buildArr = this.getExtraIds(this.info.bookTable);
            for (let j = 0; j < buildArr.length; j++) {
                if (Heros.indexOf(buildArr[j]) === -1) {
                    Heros.push(buildArr[j]);
                }
            }
            this.createHeroIcon(Heros);
        }
    }
    createHeroIcon(heroIds: number[]) {
        this.node_heros_content.parent.active = heroIds.length > 0
        this.node_heros_content.parent.getChildByName("pro_node").active = false;
        this.node_heros_content.destroyAllChildren();
        if (heroIds.length > 0) {
            for (let i = 0; i < heroIds.length; i++) {
                const icon = instantiate(this.sp_recommend_icon.node);
                this.node_heros_content.addChild(icon);
                icon.active = true;
                const iconPath = tab.getData().HeroTableById.getValue(heroIds[i]).WeaponHead;
                icon.getComponent(Sprite).setTexture(iconPath);
            }
        }
    }
    setShowStar(b: boolean) {
        if (b) {
            this.heroStar.node.active = true;
            this.heroStar.showStar(this.info.star)
        } else {
            this.heroStar.node.active = false;
        }

    }

    // 根据肉鸽id推荐英雄
    caleRecommendHeros(rogueInfo: RogueInfo) {
        if (rogueInfo == null) {
            return []
        }
        if (!rogueInfo.heroItemId) {
            const validList = RogueControl.ins.validList;
            const rogueInfos = [rogueInfo];
            for (let i = 0; i < validList.length; i++) {
                const _rogueInfo = validList[i];
                if (_rogueInfo.Id === rogueInfo.Id) {
                    continue;
                }
                if (_rogueInfo.rogueTab.Condition === rogueInfo.rogueTab.Id) {
                    rogueInfos.push(_rogueInfo);
                }
            }
            const heroItemIds = this.getHeroIdsByRougeInfos(rogueInfos);
            return heroItemIds;
        } else {
            return [];
        }
    }
    // 通过关联的肉鸽Ids返回所有的英雄id
    getHeroIdsByRougeInfos(rogueInfos: RogueInfo[]): number[] {
        let Heros = [];
        for (let k = 0; k < rogueInfos.length; k++) {
            const bookID = rogueInfos[k].rogueTab.BookId;
            const bookTab = tab.getData().BookTableById.getValue(bookID);
            if (bookTab.Builds !== tab.Builds.Builds_Core && bookTab.Builds !== tab.Builds.Builds_Skill && bookTab.Builds !== tab.Builds.Builds_None) {
                const buildArr = this.getTeamIdBuilds(bookTab.Builds);
                for (let j = 0; j < buildArr.length; j++) {
                    if (Heros.indexOf(buildArr[j]) === -1) {
                        Heros.push(buildArr[j]);
                    }
                }
            }
        }
        // log("cocos 推荐英雄的流派ids为=", Heros);
        for (let i = 0; i < rogueInfos.length; i++) {
            const rogueInfo = rogueInfos[i];
            const bookTab = tab.getData().BookTableById.getValue(rogueInfo.rogueTab.BookId);
            if (bookTab.Builds === tab.Builds.Builds_Core || bookTab.Builds === tab.Builds.Builds_Skill) {
                const heroInfo = HeroTeamControl.ins.getHeroByClass(Number(bookTab.Class))
                if (Heros.indexOf(heroInfo.itemId) === -1) {
                    // log("cocos 推荐英雄的itemId为=", heroInfo.itemId);
                    Heros.push(heroInfo.itemId)
                }
            }
        }
        return Heros;
    }
    getTeamIdBuilds(buildId: tab.Builds): number[] {
        const buildsHeros = [];
        const teams = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < teams.length; i++) {
            const heroInfo = HeroData.ins.getById(teams[i].heroId);
            const builds = heroInfo.heroTable.Builds;
            if (builds.indexOf(buildId) > -1) {
                buildsHeros.push(heroInfo.itemId);
            }
        }
        return buildsHeros;
    }
    // 是否存在二阶今借到秘籍Id
    getExtraIds(bookTab: tab.BookTable) {
        let Heros = [];
        const BookDictionary = RareBookData.ins.getBookDicTabByHeroClass(bookTab.Class);
        const _buildArr = this.getTeamIdBuilds(bookTab.Builds);

        const heroInfo = HeroTeamControl.ins.getHeroByClass(Number(bookTab.Class))
        if (Heros.indexOf(heroInfo.itemId) === -1 && (bookTab.Builds === tab.Builds.Builds_Core || bookTab.Builds === tab.Builds.Builds_Skill)) {
            Heros.push(heroInfo.itemId)
        }
        for (let i = 0; i < _buildArr.length; i++) {
            if (Heros.indexOf(_buildArr[i]) === -1) {
                Heros.push(_buildArr[i]);
            }
        }

        if (bookTab.Id === BookDictionary.PhaseOneBook) {
            return [];
            // for (let k = 0; k < BookDictionary.PhaseTwoBook.length; k++) {
            //     const bookID = BookDictionary.PhaseTwoBook[k];
            //     const bookTab = tab.getData().BookTableById.getValue(bookID);
            //     const heroInfo = HeroTeamControl.ins.getHeroByClass(Number(bookTab.Class))
            //     if (Heros.indexOf(heroInfo.itemId) === -1 && (bookTab.Builds === tab.Builds.Builds_Core || bookTab.Builds === tab.Builds.Builds_Skill)) {
            //         Heros.push(heroInfo.itemId)
            //     }
            //     if (bookTab.Builds !== tab.Builds.Builds_Core && bookTab.Builds !== tab.Builds.Builds_Skill && bookTab.Builds !== tab.Builds.Builds_None) {
            //         const buildArr = this.getTeamIdBuilds(bookTab.Builds);
            //         for (let j = 0; j < buildArr.length; j++) {
            //             if (Heros.indexOf(buildArr[j]) === -1) {
            //                 Heros.push(buildArr[j]);
            //             }
            //         }
            //     }
            // }
        }
        return Heros;
    }
}