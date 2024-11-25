import { _decorator, Component, instantiate, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { AssociationAttrPopItem } from './AssociationAttrPopItem';
const { ccclass, property } = _decorator;

@ccclass('AssociationAttrPop')
export class AssociationAttrPop extends ViewPop {
    @property(Prefab)
    pfb_item:Prefab = null;
    @property(Node)
    node_content_normal:Node = null;
    @property(Node)
    node_content_special:Node = null;
    private attrMap: Map<tab.AttrType, number>
    onShow(): void {
        this.attrMap = this.openData["attrMap"];
        this.initView();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
       
    }
    unRegister(): void {
        super.unRegister();
    }
    initView(){
        if (!this.attrMap) {
            return;
        }
        this.attrMap.forEach((value,key)=>{
            if (key === tab.AttrType.AttrType_Attack||key == tab.AttrType.AttrType_Defence||key == tab.AttrType.AttrType_Hp) {
                const item = instantiate(this.pfb_item);
                item.parent = this.node_content_normal;
                const itemTs = item.getComponent(AssociationAttrPopItem);
                itemTs.initData(key,value);
            }else{
                const item = instantiate(this.pfb_item);
                item.parent = this.node_content_special;
                const itemTs = item.getComponent(AssociationAttrPopItem);
                itemTs.initData(key,value);
            }
        }) 
    }
}


