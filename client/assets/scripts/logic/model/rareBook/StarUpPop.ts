import { _decorator, Component, instantiate, Label, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { RareBookSmallItem } from './RareBookSmallItem';
import { HeroStar } from '../hero/HeroStar';
import { RareBookInfo } from './RareBookInfo';
import { RareBookData } from './RareBookData';
import { LangMgr } from '../../mgr/LangMgr';
import { RareBookStarUpItem } from './RareBookStarUpItem';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroSkillItem } from '../hero/herobag/HeroSkillItem';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * StarUpPop
 * zhudingchao
 * Fri May 31 2024 10:34:45 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/StarUpPop.ts
 *
 */

@ccclass('StarUpPop')
export class StarUpPop extends ViewPop {
    @property(Node)
    attributeLayout: Node = null;
    @property(RareBookSmallItem)
    rareBookSmallItem: RareBookSmallItem = null;
    @property(Label)
    effectLab: Label = null;
    @property(HeroStar)
    lastStar: HeroStar = null;
    @property(HeroStar)
    currStar: HeroStar = null;
    @property(Prefab)
    itemPrefab: Prefab = null;
    @property(Node)
    node_rare_book:Node = null;
    @property(Node)
    node_hero:Node = null;
    @property(HeroSkillItem)
    hero_skill_item:HeroSkillItem = null;
    @property(HeroSkillItem)
    hero_skill_item1:HeroSkillItem = null;
    @property(Label)
    lbl_desc:Label = null;

    @property(Label)
    lbl_last_level:Label = null;

    @property(Label)
    lbl_next_level:Label = null;
    @property(Node)
    node_star_up:Node = null;
    @property(Node)
    node_awake_up:Node = null;

    private info: RareBookInfo;
    private heroInfo:HeroInfo;
    register(): void {

    }
    onShow(): void {
        this.info = this.openData["bookInfo"];
        this.heroInfo = this.openData["heroInfo"];
        if(this.info){
            this.initBook();
        }
        if(this.heroInfo){
            this.initHero();
        }
    }
    initBook() {
        this.node_hero.active = false;
        this.node_rare_book.active = true;
        this.node_awake_up.active = false;
        this.rareBookSmallItem.initView(this.info, false);
        let lastTab = RareBookData.ins.getBoolStarTable(this.info.itemId, this.info.star-1);
        this.effectLab.string = LangMgr.getLab(this.info.bookStarTable.Description);
        this.lastStar.showStar(this.info.star - 1);
        this.currStar.showStar(this.info.star);
        let attrMap = this.info.attrMap;
        let ratio = this.info.levelRatio;
        let lastAttrMap = this.info.getAttrMapByLevelRatio(ratio, lastTab.AttrType, lastTab.AttrValue);
        attrMap.forEach((value, key) => {
            let item = instantiate(this.itemPrefab)
            item.parent = this.attributeLayout;
            item.getComponent(RareBookStarUpItem).initView(key, lastAttrMap.get(key), value);
            // item.initView(key, value, nextAttrMap.get(key));
            // index++;
        });
    }
    initHero(){
        this.node_hero.active = true;
        this.node_rare_book.active = false;
        this.lastStar.showStar(this.heroInfo.star - 1);
        this.currStar.showStar(this.heroInfo.star);
        const starUpTab:tab.HeroStarUpTable = this.heroInfo.heroStarUpTable;

        let itemList = [this.hero_skill_item,this.hero_skill_item1]
        itemList.forEach((item,index) => {
            item.node.parent.active = false
        })

        for (let index = 0; index < starUpTab.DescType.length; index++) {
            const _type = starUpTab.DescType[index];
            let item = itemList[index]
            item.node.parent.active = true
            item.initData(_type,this.heroInfo)

            item.node.parent.getChildByPath("show_node/Label").getComponent(Label).string = LangMgr.getLab(starUpTab.StarName[index]);
            item.node.parent.getChildByPath("show_node/effect_txt").getComponent(Label).string = LangMgr.getLab(starUpTab.StarDesc[index]);
        }

        // this.hero_skill_item.initData(starUpTab.DescType[starUpTab.HeroStar], this.heroInfo);
        // this.lbl_desc.string = LangMgr.getLab(starUpTab.StarDesc[starUpTab.HeroStar]);

        const lastStarUpTab = tab.getData().HeroStarUpTableById.getValue(starUpTab.Id-1);
        this.lbl_last_level.string = String(lastStarUpTab.MaxLevel);
        this.lbl_next_level.string = String(starUpTab.MaxLevel);
        this.node_awake_up.active = starUpTab.DescType[0]===tab.HeroStarDescType.HeroStarDescType_Third
        this.node_star_up.active = starUpTab.DescType[0]===tab.HeroStarDescType.HeroStarDescType_Second
    }
    protected onDisable(): void {
        this.lastStar.onDisable();
        this.currStar.onDisable();
    }
}