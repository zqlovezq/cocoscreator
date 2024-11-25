import { _decorator, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * RareBookAttributeItem
 * zhudingchao
 * Thu May 23 2024 17:26:54 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/rareBook/RareBookAttributeItem.ts
 *
 */

@ccclass('RareBookAttributeItem')
export class RareBookAttributeItem extends Component {
    @property(Sprite)
    iconSpr: Sprite = null;

    @property(Label)
    nowValueLab: Label = null;
    @property(Node)
    levelUpNode: Node = null;
    @property(Label)
    nextLab: Label = null;
    private type:number;

    initView(type: number, value: number, nextValue: number = -1) {
        this.type=type;
        let t = tab.getData().HeroAttrClientTableByType.getValue(type);
        this.iconSpr.setTexture(t.Icon);
        // this.nameLab.string=LangMgr.getLab(tab.AttrType[type]);
        this.nowValueLab.string = value + "";
        if (nextValue < 0) {
            this.levelUpNode.active = false;
        } else {
            this.levelUpNode.active = true;
            this.nextLab.string = nextValue + "";
        }
    }
    onClickItem(){
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":this.iconSpr.node.worldPosition,"WordTableKey":tab.AttrType[this.type] }});
    }
}