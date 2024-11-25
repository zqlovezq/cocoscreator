import { _decorator, Component, error, Node, Sprite } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
const { ccclass, property } = _decorator;

/**
 * 
 * TopWarBossSkillItem
 * zhudingchao
 * Tue Jul 09 2024 14:00:36 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/jianghu/topWar/topWarBossSkillItem.ts
 *
 */

@ccclass('TopWarBossSkillItem')
export class TopWarBossSkillItem extends Component {
    @property(Node)
    selectNode: Node = null;
    @property(Sprite)
    skillIcon: Sprite = null;
    private skillTable:tab.EquipSkillTable;
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
    }
    onTouchItem(){
        this.selectNode.active=true;
        let callBack=()=>{
            this.selectNode.active=false;
        }
        UIMgr.ins.show({viewName:ViewName.JadeSkillDetailPop,data:{"skillTable":this.skillTable,"closeCallBack":callBack}})
    }
}