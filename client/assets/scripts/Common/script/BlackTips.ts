import { _decorator, Component, Node, Prefab ,instantiate, tween, Vec3, UITransform, Sprite, UIOpacity} from 'cc';
import { BlackTipsItem } from './BlackTipsItem';
const { ccclass, property } = _decorator;

const MAX_CHILD_COUNT = 3;
@ccclass('BlackTips')
export class BlackTips extends Component {
    @property(Prefab)
    prefabItem: Prefab = null;
    public AddTips(str: string) {
        if (this.node.children.length == MAX_CHILD_COUNT) {
            let child = this.node.children[0];
            child.removeFromParent();
            child.destroy();
        }

        for (let child of this.node.children) {
            tween(child).by(0.2,{position:new Vec3(0, child.getComponent(UITransform).height + 30,0)}).start();
        }

        let item = instantiate(this.prefabItem).getComponent(BlackTipsItem);
        this.node.addChild(item.node);
        item.SetString(str);
    }
}


