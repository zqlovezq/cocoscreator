/*
 * @Date: 2024-05-14 15:09:51
 * @LastEditors: wzq
 * @LastEditTime: 2024-06-11 16:28:42
 */

import { _decorator, Component, instantiate, Label, Node, Prefab, Sprite } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { tab } from '../../../../Table/table_gen';
import { HeroSkillPopItem } from './HeroSkillPopItem';
import { LangMgr } from '../../../mgr/LangMgr';
import { HeroSkillItem } from './HeroSkillItem';
import { HeroInfo } from '../HeroInfo';
const { ccclass, property } = _decorator;

@ccclass('HeroSkillPop')
export class HeroSkillPop extends ViewPop {
    @property(Prefab)
    pfb_skill_item:Prefab = null;
    
    // @property(Sprite)
    // sp_long_icon:Sprite = null;

    @property(Label)
    lbl_long_skill_name:Label = null;
    @property(Label)
    lbl_long_skill_type:Label = null;

    // @property(Sprite)
    // sp_short_icon:Sprite = null;
    @property(Sprite)
    sp_short_bg:Sprite = null;
    @property(Sprite)
    sp_long_bg:Sprite = null;

    @property(Label)
    lbl_short_skill_name:Label = null;
    @property(Label)
    lbl_short_skill_type:Label = null;

    @property(Node)
    node_short_content:Node = null;
    @property(Node)
    node_long_content:Node = null;
    @property(Node)
    node_short:Node = null;
    @property(Node)
    node_long:Node = null;

    @property(HeroSkillItem)
    hero_short_skill_item:HeroSkillItem = null;

    @property(HeroSkillItem)
    hero_long_skill_item:HeroSkillItem = null;

    private _type:tab.HeroStarDescType = tab.HeroStarDescType.HeroStarDescType_None
    private _heroInfo:HeroInfo = null;
    register(): void {
        
    }
    onShow(): void {
        this._type = this.openData.type;
        this._heroInfo = this.openData.heroInfo;

        let _skillData = this._heroInfo.getHeroSkillMap().get(this._type);
        let _skillIcon = this._heroInfo["SkillIcon" + this._type];
        let _bgIcon = this._heroInfo.heroAptitudeTable.SkillBg;

        let isShort:boolean = this._type===tab.HeroStarDescType.HeroStarDescType_First;
        let parentNode = isShort?this.node_short_content:this.node_long_content;
        this.node_short.active = isShort;
        this.node_long.active = !isShort;
        let idx = _skillData[0].DescType.indexOf(this._type)
        if(isShort){
            this.hero_short_skill_item.initData(this._type,this._heroInfo);
            this.sp_short_bg.setTexture(_bgIcon)
            this.lbl_short_skill_type.string =  LangMgr.getLab(tab.HeroStarDescType[this._type]);
            this.lbl_short_skill_name.string = LangMgr.getLab(_skillData[0].StarName[idx]).split("·")[0]
        }else{
            this.hero_long_skill_item.initData(this._type,this._heroInfo);
            this.sp_long_bg.setTexture(_bgIcon)
            this.lbl_long_skill_type.string =  LangMgr.getLab(tab.HeroStarDescType[this._type]);
            this.lbl_long_skill_name.string = LangMgr.getLab(_skillData[0].StarName[idx]).split("·")[0]
        }

        parentNode.removeAllChildren();
        for(let i=0;i<_skillData.length;i++){
            let item = instantiate(this.pfb_skill_item);
            let ts = item.getComponent(HeroSkillPopItem);
            idx = _skillData[i].DescType.indexOf(this._type)
            ts.setData(_skillData[i],this._heroInfo,idx);
            item.parent = parentNode;
        }
        this.hero_short_skill_item.setSkillImgActive(false);
        this.hero_long_skill_item.setSkillImgActive(false);
    }
}


