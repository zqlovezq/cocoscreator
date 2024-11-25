import { _decorator, Color, Component, Label, Node, Sprite } from 'cc';
import { HeroData } from '../HeroData';
import { HeroInfo } from '../HeroInfo';
import { LangMgr } from '../../../mgr/LangMgr';
import { HeroStar } from '../HeroStar';
import { tab } from '../../../../Table/table_gen';
import { HeroDataControl } from './HeroDataControl';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('HeroMaterialItem')
export class HeroMaterialItem extends Component {
    @property(Sprite)
    sp_head:Sprite = null;
    @property(Sprite)
    sp_quality_bg:Sprite = null;//品质框
    @property(Sprite)
    sp_quality_star_bg:Sprite = null;//装备星级职业底
    @property(Sprite)
    sp_vocation:Sprite = null;
    
    @property(Label)
    lbl_hero_num:Label = null;
    @property(Label)
    lbl_hero_name:Label = null;

    @property(Node)
    node_star:Node = null;
    @property(Node)
    node_specify:Node = null;
    @property(Node)
    node_universal:Node = null;
    @property(Node)
    node_universal_add:Node = null;


    private _heroInfo:HeroInfo = null;
    private _curCount:number = null;
    private _curMaterialType:tab.HeroStarUpType = tab.HeroStarUpType.HeroStarUpType_SameNameHero;
    private _stepId:number = 0;
    setMaterial(type:tab.HeroStarUpType,heroClass:tab.HeroClass,stepId?:number){
        this._heroInfo = HeroData.ins.getById(HeroDataControl.ins.heroId);
        this._curMaterialType = type;
        if(stepId){
            this._stepId = stepId;
        }
        this.sp_head.setTexture(this._heroInfo.itemTable.Icon);
        this.node_specify.active = type==tab.HeroStarUpType.HeroStarUpType_SameNameHero;

        let obj = null;
        let _heroStar = 0;
        let _heroName = LangMgr.getLab(this._heroInfo.itemTable.Name);
        let _heroClass = LangMgr.getLab(tab.HeroClass[heroClass]);
        const heroClassTab = tab.getData().HeroClassTableByHeroClass.getValue(heroClass);
        this.sp_vocation.setTexture(heroClassTab.Icon);
        obj = this._heroInfo.getHerosByType(type,this._stepId);
        _heroStar = obj.star;
        this.node_star.getComponent(HeroStar).showStar(_heroStar);
        if(type==tab.HeroStarUpType.HeroStarUpType_SameNameHero){
            this.lbl_hero_name.string = LangMgr.getCombineString("Tips_herostarup1",[_heroStar,_heroName]);
        }else if(type==tab.HeroStarUpType.HeroStarUpType_SameClassHero){
            this.lbl_hero_name.string = LangMgr.getCombineString("Tips_herostarup2",[_heroStar,_heroClass]);
        }else{
            this.lbl_hero_name.string = LangMgr.getCombineString("Tips_herostarup3",[_heroStar]);
        }

        let itemQualityTab = HeroDataControl.ins.getItemQualityTableByStar(_heroStar);
        this.sp_quality_bg.setTexture(itemQualityTab.QualityFrame);
        this.sp_quality_star_bg.setTexture(itemQualityTab.HeroStarBg);

        // this._curCount = obj.map.size
        this._curCount = this._heroInfo.getHerosMaterialMapCount(type);
        this.node_universal.active = type!==tab.HeroStarUpType.HeroStarUpType_SameNameHero;
        this.node_universal_add.active = this._curCount<obj.needCount;
        this.lbl_hero_num.string = this._curCount+"/"+obj.needCount;
        if(this._curCount>=obj.needCount){
            this.lbl_hero_num.color = new Color().fromHEX("#FFFFFF");
        }else{
            this.lbl_hero_num.color = new Color().fromHEX("#FC1818");
        }
    }
    clickMaterial(){
        if(this._curMaterialType===tab.HeroStarUpType.HeroStarUpType_SameNameHero){
            return
        }
        UIMgr.ins.show({ viewName: ViewName.HeroMaterialPop,data:{
            type:this._curMaterialType,
            stepId:this._stepId
        }})
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
    }
}


