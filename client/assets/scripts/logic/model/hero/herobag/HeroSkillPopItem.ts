/*
 * @Date: 2024-05-14 15:11:14
 * @LastEditors: wzq
 * @LastEditTime: 2024-07-26 11:30:38
 */

import { _decorator, Component, Label, Node, Prefab } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import { HeroStar } from '../HeroStar';
import { HeroData } from '../HeroData';
import { HeroInfo } from '../HeroInfo';
const { ccclass, property } = _decorator;

@ccclass('HeroSkillPopItem')
export class HeroSkillPopItem extends Component {
    @property(Node)
    node_star:Node = null;
    @property(Label)
    lbl_desc:Label = null;
    @property(Label)
    lbl_name:Label = null;
    @property(Node)
    node_special:Node = null;
    setData(data:tab.HeroStarUpTable,heroInfo:HeroInfo,idx:number){
        this.lbl_desc.string = LangMgr.getLab(data.StarDesc[idx]);
        this.lbl_name.string = LangMgr.getLab(data.StarName[idx]);
        this.node_star.getComponent(HeroStar).showStar(data.HeroStar);
        // 判断当前的星级是否大于解锁星级
        this.node_special.active = heroInfo.star<data.HeroStar
    }
    protected onDisable(): void {
        this.node_star.getComponent(HeroStar).onDisable();
    }
}


