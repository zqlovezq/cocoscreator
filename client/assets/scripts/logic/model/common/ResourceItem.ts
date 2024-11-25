import { _decorator, CCInteger, Component, instantiate, Label, Node, Prefab, SpringJoint2D, Sprite } from 'cc';
import { ItemData } from '../item/ItemData';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { ResourceItemNode } from './ResourceItemNode';
const { ccclass, property } = _decorator;

@ccclass('ResourceItem')
export class ResourceItem extends Component {
  
    @property({
        type: [CCInteger],displayName: '要显示的资源ItemId数组'
    })
    itemIds: [] = [];
    @property(Prefab)
    itemNodePrb:Prefab=null;
    @property(Node)
    layoutNode:Node=null;
    private itemNodes:Array<ResourceItemNode>;
    start() {
        this.initView();
    
    }
    initView(){
        this.itemNodes=[];
        for(let key in this.itemIds){
            let node=instantiate(this.itemNodePrb);
            node.parent=this.layoutNode;
            let com=node.getComponent(ResourceItemNode);
            com.initItemId(this.itemIds[key]);
            this.itemNodes.push(com);
        }
    }
    setItemIds(ids:number[]){
        this.layoutNode.destroyAllChildren();
        for(let key in ids){
            let node=instantiate(this.itemNodePrb);
            node.parent=this.layoutNode;
            let com=node.getComponent(ResourceItemNode);
            com.initItemId(ids[key]);
        }
    }
    protected onDestroy(): void {
        this.itemNodes=null;
    }

}


