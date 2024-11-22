/**
 * 
*/

import BlackTipsItem from "./BlackTipsItem";

const {ccclass, property} = cc._decorator;

const MAX_CHILD_COUNT = 6;

@ccclass
export default class BlackTips extends cc.Component {

    @property(cc.Prefab)
    prefabItem:cc.Prefab = null;

    AddTips(str:string) {
        if(this.node.children.length == MAX_CHILD_COUNT) {
            let child = this.node.children[0];
            child.removeFromParent();
            child.destroy();
        }

        for(let child of this.node.children) {
            child.runAction(cc.moveBy(0.2, 0, child.height + 20));
        }

        let item = cc.instantiate(this.prefabItem).getComponent(BlackTipsItem);
        item.SetString(str);
        this.node.addChild(item.node);
    }
}
