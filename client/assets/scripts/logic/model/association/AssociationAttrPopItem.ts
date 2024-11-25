import { _decorator, Component, EventTouch, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { GameUtil } from '../../utils/GameUtil';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('AssociationAttrPopItem')
export class AssociationAttrPopItem extends Component {
    @property(Sprite)
    sp_icon:Sprite = null;
    @property(Label)
    lbl_val:Label = null;
    @property(Label)
    nameLab:Label = null;
    private type:tab.AttrType = tab.AttrType.AttrType_Attack;
    initData(type:tab.AttrType,val:number) {
        this.type = type;
        let tabData:tab.HeroAttrClientTable = tab.getData().HeroAttrClientTableByType.getValue(type)
        this.sp_icon.setTexture(tabData.Icon);
        this.nameLab.string=LangMgr.getLab(tab.AttrType[type]);
        this.lbl_val.string=tabData.ShowPercent?(val/100)+"%":GameUtil.convertNumber(val)+""
    }
    clickBtn(event:EventTouch){
        let node:Node=event.currentTarget;
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":node.worldPosition,"WordTableKey":tab.AttrType[this.type] }});
    }
}


