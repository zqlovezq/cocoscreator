import { _decorator, Component, error, Label, Node, Sprite } from 'cc';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
const { ccclass, property } = _decorator;

@ccclass('JadeSkillItem')
export class JadeSkillItem extends Component {
    @property(Sprite)
    skillIcon:Sprite=null;
    @property(Label)
    skillName:Label=null;
    private skillTable:tab.EquipSkillTable;
    start() {

    }
    initSkill(skill:tab.EquipSkillTable){
        this.skillTable=skill;
        this.initView();
    }
    initSkillId(id:number){
        this.skillTable=tab.getData().EquipSkillTableById.getValue(id);
        if(this.skillTable){
            this.initView();
        }else{
            error("EquipSkillTable表找不到id：",id)
        }
    

    }
    initView(){
        this.skillIcon.setTexture(this.skillTable.SkillIcon);
        this.skillName.string=LangMgr.getLab(this.skillTable.SkillName);
    }
    onTouchItem(){
        UIMgr.ins.show({viewName:ViewName.JadeSkillDetailPop,data:{"skillTable":this.skillTable}})
    }
  
}


