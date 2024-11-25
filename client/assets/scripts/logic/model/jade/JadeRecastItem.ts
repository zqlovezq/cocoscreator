import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { JadeSkillItem } from './JadeSkillItem';
const { ccclass, property } = _decorator;

@ccclass('JadeRecastItem')
export class JadeRecastItem extends Component {
    @property(Node)
    nowNode:Node=null;
    @property(Node)
    newNode:Node=null;
    @property(Node)
    skillNode:Node=null;
    @property(Prefab)
    skillItemPrefab:Prefab=null;
    start() {

    }
    initData(skills:Array<number>,isNew:boolean){
        this.nowNode.active=!isNew;
        this.newNode.active=isNew;
        this.skillNode.removeAllChildren();
        for(let key in skills){
            let item=instantiate(this.skillItemPrefab);
            item.parent=this.skillNode;
            item.getComponent(JadeSkillItem).initSkillId(skills[key]);
        }

    }
   
}


