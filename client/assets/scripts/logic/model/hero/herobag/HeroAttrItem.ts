import { _decorator, Component, EventTouch, Label, Node, Sprite } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { LangMgr } from '../../../mgr/LangMgr';
import {UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { GameUtil } from '../../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('HeroAttrItem')
export class HeroAttrItem extends Component {
    @property(Label)
    lbl_value:Label = null;
    @property(Label)
    lbl_attr_name:Label = null;
    @property(Sprite)
    icon:Sprite=null;
    private type:tab.AttrType =tab.AttrType.AttrType_Attack
    initView(type:tab.AttrType,value:number,iconPath=""){
        this.type = type;
         this.lbl_attr_name.string=LangMgr.getLab(tab.AttrType[type]);
         this.lbl_value.string=GameUtil.convertNumber(value)+"";
         const attrTab = tab.getData().HeroAttrClientTableByType.getValue(type);
         if(iconPath==""){
            iconPath=attrTab.Icon;
         }
         if(attrTab.ShowPercent){
            this.lbl_value.string=value/100+"%";
         }
        this.icon.setTexture(iconPath);
    }
    clickBtn(event:EventTouch){
        let node:Node=event.currentTarget;
        UIMgr.ins.show({ viewName: ViewName.CommonBlackTipsPop,data:{"worldPos":node.worldPosition,"WordTableKey":tab.AttrType[this.type] }});
    }
}


