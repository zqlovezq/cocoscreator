import { _decorator, Component, instantiate, Label, Node, Prefab, sp, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { proto } from 'client_protocol';
import { HeroStar } from '../hero/HeroStar';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroSkillItem } from '../hero/herobag/HeroSkillItem';
import { HeroInfo } from '../hero/HeroInfo';
import { HeroDataControl } from '../hero/herobag/HeroDataControl';
import { ViewName } from '../../define/ViewDefine';
import { UIMgr } from '../../mgr/UIMgr';
import { createAnimation, GameUtil } from '../../utils/GameUtil';
import { ItemPoolMgr } from '../item/ItemPoolMgr';
import { EquipInfo } from '../equip/EquipInfo';
import { RareBookInfo } from '../rareBook/RareBookInfo';
import { RareBookSmallItem } from '../rareBook/RareBookSmallItem';
import { EquipmentItem } from '../item/EquipmentItem';
const { ccclass, property } = _decorator;

@ccclass('CheckRoleInfoHeroPop')
export class CheckRoleInfoHeroPop extends ViewPop {
    @property(Node)
    node_star:Node = null;
    @property(Label)
    lbl_power:Label = null;
    @property(Label)
    lbl_hero_name:Label = null;
    @property(Sprite)
    sp_vocation:Sprite = null;
    @property(Sprite)
    sp_quality:Sprite = null;
    @property(Sprite)
    sp_quality2_img:Sprite = null;
    @property(Label)
    lbl_speciality:Label = null;
    @property(Node)
    node_skill_layout:Node = null;
    @property(Prefab)
    pfb_skill_item:Prefab = null;
    @property(Label)
    lbl_attr_atk:Label = null;
    @property(Label)
    lbl_attr_hp:Label = null;
    @property(Label)
    lbl_attr_def:Label = null;
    @property(sp.Skeleton)
    ske_hero: sp.Skeleton = null;
    @property(Node)
    node_equip_content_1:Node = null;
    @property(Node)
    node_equip_content_2:Node = null;
    @property(Node)
    node_book_content:Node = null;
    @property(Prefab)
    pfb_small_book:Prefab = null;
    private heroData:proto.ISimpleHero = null;
    private _heroAllAttr: Map<tab.AttrType, number> = new Map();
    private equipComItems: Array<Node>;
    onShow(): void {
        this.heroData = this.openData.heroData;
        this.showAttrData();
        this.showAttrSkill();
        this.showAttrSimple();
        this.updateEquipSlot();
        this.updateBook();
    }
    // 设置基本信息
    showAttrData(){
        const itemId = this.heroData.itemId;
        let itemTab = tab.getData().ItemTableById.getValue(itemId);
        let heroTab = tab.getData().HeroTableById.getValue(itemId);
        let heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroTab.Class)
        let heroAptitudeTab = tab.getData().HeroAptitudeTableByHeroAptitude.getValue(heroTab.Aptitude);
        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(this.heroData.star);
        // 星级
        this.node_star.getComponent(HeroStar).showStar(this.heroData.star);
        // 显示战斗力
        this.lbl_power.string = GameUtil.convertNumber(this.heroData.powerScore);
        // 英雄名称
        this.lbl_hero_name.string = LangMgr.getLab(itemTab.Name);
        // 职业
        this.sp_vocation.setTexture(heroClassTab.Icon);
        // 品质
        this.sp_quality.setTexture(heroAptitudeTab.Icon);
        this.sp_quality2_img.setTexture(itemQualityTab.HeroBagGrowthQuality);
        // 职业描述
        this.lbl_speciality.string = LangMgr.getLab(heroTab.Speciality);
        createAnimation(this.ske_hero.node,heroTab.Idle);
    }
    /* 显示技能 */
    showAttrSkill(){
        const itemId = this.heroData.itemId;
        const heroInfo = new HeroInfo();
        heroInfo.star = this.heroData.star;
        heroInfo.itemId = itemId;
        heroInfo.level = this.heroData.level;
        heroInfo.id = 0;
        let heroTab = tab.getData().HeroTableById.getValue(itemId);
        // 技能
        this.node_skill_layout.destroyAllChildren();
        let skillMap = heroInfo.getHeroSkillMap();
        for (let i = 1; i <= 3; i++) {
            let iconUrl = heroTab["SkillIcon" + i];
            if (iconUrl) {
                let skillData: tab.HeroStarUpTable[] = skillMap.get(i);
                if (skillData) {
                    let skill_item = instantiate(this.pfb_skill_item);
                    let ts = skill_item.getComponent(HeroSkillItem);
                    ts.initData(i, heroInfo);
                    skill_item.parent = this.node_skill_layout;
                }
            }
        }
    }
    /* 显示简单属性 */
    showAttrSimple(){
        this._heroAllAttr.clear();
        for(let i=0;i<this.heroData.attrList.length;i++){
            const attr = this.heroData.attrList[i];
            this._heroAllAttr.set(attr.type, Number(attr.value));
        }
        this.lbl_attr_atk.string = String(this._heroAllAttr.get(tab.AttrType.AttrType_Attack));
        this.lbl_attr_hp.string = String(this._heroAllAttr.get(tab.AttrType.AttrType_Hp));
        this.lbl_attr_def.string = String(this._heroAllAttr.get(tab.AttrType.AttrType_Defence));
    }
    /* 显示装备 */
    updateEquipSlot() {
        if (this.equipComItems) {
            for (let key in this.equipComItems) {
                ItemPoolMgr.ins.putEquipItem(this.equipComItems[key]);
            }
        }
        this.equipComItems = [];
        let equals: proto.ISimpleHeroEquip[] = this.heroData.equipList;
        for (let key in equals) {
            if (equals[key]) {
                const equal:proto.ISimpleHeroEquip = equals[key]
                const _EquipInfo = new EquipInfo();
                _EquipInfo.itemId = equal.itemId;
                _EquipInfo.score = equal.powerScore;
                let node = null;
                if(equal.itemId>=18012&&equal.itemId<=18014){
                    // 羽毛
                    node = ItemPoolMgr.ins.createEquipItem(_EquipInfo, this.node_equip_content_2);
                }else{
                    node = ItemPoolMgr.ins.createEquipItem(_EquipInfo, this.node_equip_content_1);
                }
                const itemTs = node.getComponent(EquipmentItem);
                itemTs.setLv(equal.enhanceLv,equal.refineLv);
                this.equipComItems.push(node);
            }
        }
    }
    /* 显示秘籍 */
    updateBook(){
        for(let i=0;i<this.heroData.bookList.length;i++){
            const bookData:proto.ISimpleHeroBook = this.heroData.bookList[i];
            const bookInfo = new RareBookInfo();
            bookInfo.itemId = bookData.itemId;
            bookInfo.level = bookData.level;
            bookInfo.star = bookData.star;
            bookInfo.powerScore = bookData.powerScore;
            const item = instantiate(this.pfb_small_book);
            item.parent = this.node_book_content;
            const itemTs = item.getComponent(RareBookSmallItem);
            itemTs.initView(bookInfo,true,()=>{
                UIMgr.ins.show({ viewName: ViewName.RareBookInfoItemPop, data: { "bookInfo": bookInfo } });
            })
        }
    }
    /* 点击显示所有属性 */
    clickShowAllAttr(){
        UIMgr.ins.show({ viewName: ViewName.HeroAttrPop, data: { "attrMap": this._heroAllAttr } })
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDisable(): void {
        if (this.equipComItems) {
            for (let key in this.equipComItems) {
                ItemPoolMgr.ins.putEquipItem(this.equipComItems[key]);
            }
        }
        this.node_star.getComponent(HeroStar).onDisable();
    }
}


