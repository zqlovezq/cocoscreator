import { _decorator, Component, Node } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('MallTabItem')
export class MallTabItem extends Component {
    @property(Node)
    node_toggle:Node = null;
    initData(data:Number[]){
        for(let i=0;i<this.node_toggle.children.length;i++){
            const toggleNode = this.node_toggle.children[i];
            const toggleName = toggleNode.name;
            const id = Number(toggleName.replace("Toggle",""));
            toggleNode.active = data.indexOf(id)>-1;
        }
    }
}


