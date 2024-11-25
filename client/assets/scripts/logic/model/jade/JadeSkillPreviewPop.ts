import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { JadeSkillItem } from './JadeSkillItem';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

@ccclass('JadeSkillPreviewPop')
export class JadeSkillPreviewPop extends ViewPop {

    @property(Node)
    public contentNode:Node=null;
    @property(Prefab)
    skillItemPrefab:Prefab=null;


    private currTag:number=1;
    private skillItems:Array<JadeSkillItem>;
    private baseSkills:Array<tab.EquipSkillTable>;
    private highSkills:Array<tab.EquipSkillTable>;
    register(): void {
        
    }
    start() {
        this.initView();

    }
    initView(){
        this.baseSkills=[];
        this.highSkills=[];
        this.skillItems=[];
        let tables=tab.getData().EquipSkillTable;
        for(let value of tables){
            if(value.Group=="skill_basic"){
                this.baseSkills.push(value);
            }else if(value.Group=="skill_high"){
                this.highSkills.push(value);
            }
        }
        this.initSkillItem();

        

    }
    initSkillItem(){
        let skills=[];
        if(this.currTag==1){
            skills=this.baseSkills;
        }else{
            skills=this.highSkills;
        }
        for(let key in this.skillItems){
            this.skillItems[key].node.active=false;
        }


        for(let key in skills){
            if(!this.skillItems[key]){
                let node:Node=instantiate(this.skillItemPrefab);
                node.parent=this.contentNode;
                this.skillItems.push(node.getComponent(JadeSkillItem));
            }
            this.skillItems[key].node.active=true;
            this.skillItems[key].initSkill(skills[key]);

        }
    }

    onClickToggle(event,type){
        let tag=Number(type);
        if(this.currTag!=tag){
            this.currTag=tag;
            this.initSkillItem();
        }
    }
   
}


