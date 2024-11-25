import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookStarUpItem
 * zhudingchao
 * Fri May 31 2024 11:00:29 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookStarUpItem.ts
 *
 */

@ccclass('RareBookStarUpItem')
export class RareBookStarUpItem extends Component {

    @property(Sprite)
    iconSpr: Sprite = null;
    @property(Label)
    attributeLab: Label = null;
    @property(Label)
    nowLab: Label = null;
    @property(Label)
    nextLab: Label = null;
    initView(type:number,nowNum:number,nextNum:number) {
        let t = tab.getData().HeroAttrClientTableByType.getValue(type);
        this.iconSpr.setTexture(t.Icon);
        this.attributeLab.string=LangMgr.getLab(tab.AttrType[type]);
        this.nowLab.string=nowNum+"";
        this.nextLab.string=nextNum+"";
    }


}