/*
 * @Date: 2024-05-14 15:07:59
 * @LastEditors: wzq
 * @LastEditTime: 2024-06-05 17:54:14
 */

import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { tab } from '../../../../Table/table_gen';
import { HeroInfo } from '../HeroInfo';
const { ccclass, property } = _decorator;

@ccclass('HeroSkillItem')
export class HeroSkillItem extends Component {
    @property(Label)
    lbl_skill_now_level:Label = null;
    @property(Label)
    lbl_skill_max_level:Label = null;

    @property(Sprite)
    sp_skill_icon:Sprite = null;

    @property(Node)
    node_skill_layout:Node = null;

    @property([Node])
    nodes_skill:Node[] = [];

    private _type:tab.HeroStarDescType = tab.HeroStarDescType.HeroStarDescType_None
    private _heroInfo:HeroInfo = null;
    initData(type:tab.HeroStarDescType,heroInfo:HeroInfo){
        let heroTab = heroInfo.heroTable;
        this._type = type;
        this._heroInfo = heroInfo
        let _skillData = heroInfo.getHeroSkillMap().get(type);
        let _skillIcon = heroTab["SkillIcon" + type];
        // let _bgIcon = heroInfo.heroAptitudeTable.SkillBg;
        for(let i=0;i<this.nodes_skill.length;i++){
            let node = this.nodes_skill[i];
            node.active = false;
            if(i==type-1){
                node.active = true;
                node.getChildByName("mask").getChildByName("skill_icon").getComponent(Sprite).setTexture(_skillIcon);
            }
        }
        if(type===tab.HeroStarDescType.HeroStarDescType_First){
            this.node_skill_layout.active = false;
        }else{
            this.lbl_skill_max_level.string = String(_skillData.length);
            let curCount = 0;
            for(let i=0;i<_skillData.length;i++){
                let HeroStarUpTab:tab.HeroStarUpTable = _skillData[i];
                if(HeroStarUpTab.HeroStar<=heroInfo.star){
                    curCount++;
                }
            }
            this.lbl_skill_now_level.string = String(curCount);
        }
    }
    setSkillImgActive(isActive:boolean){
        // this.node_skill_img.active = isActive;
        for(let i=0;i<this.nodes_skill.length;i++){
            let node = this.nodes_skill[i];
            // let child1 = node.children[1];
            let child2 = node.children[2];
            // child1.active = isActive;
            child2.active = isActive;
        }
        this.node_skill_layout.active = isActive;
    }
    onClick(){
        UIMgr.ins.show({ viewName: ViewName.HeroSkillPop,data: {
            type:this._type,
            heroInfo:this._heroInfo
        },zIndex:300})
    }
}


