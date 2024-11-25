import { _decorator, Button, Component, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('JadeSelectattrItem')
export class JadeSelectattrItem extends Component {
    @property(Node)
    attrNode:Node=null;
    @property(Node)
    skillNode:Node=null;
    @property(Button)
    button:Button=null;
    @property(Sprite)
    attrIcon:Sprite=null;
    @property(Label)
    attrValueLab:Label=null;
    @property(Label)
    skillName:Label=null;

    private skillTable:tab.EquipSkillTable;
    start() {

    }
    initAttr(table:tab.EquipAttrTable){

        this.attrNode.active=true;
        this.skillNode.active=false;
        let iconPath=tab.getData().HeroAttrClientTableByType.getValue(table.AttrType).Icon;
        this.attrIcon.setTexture(iconPath);
        // this..string=LangMgr.getLab(tab.AttrType[table.AttrType]);
        this.attrValueLab.string=table.Base+"";
        this.button.enabled=false;
    }
    initSkill(id:number){
        this.attrNode.active=false;
        this.skillNode.active=true;
        this.skillTable=tab.getData().EquipSkillTableById.getValue(id);
        this.skillName.string="["+LangMgr.getLab(this.skillTable.SkillName)+"]"
      
    }
    onTouchItem(){
        // ShowTips("弹出技能详情界面")
        UIMgr.ins.show({viewName:ViewName.JadeSkillDetailPop,data:{"skillTable":this.skillTable}})
    }
    

    
}


