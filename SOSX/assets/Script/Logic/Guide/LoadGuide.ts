import GuideController from "./GuideController";

const { ccclass, property } = cc._decorator;
@ccclass
export default class LoadGuide extends cc.Component {

    @property(cc.Prefab)
    GuidePrefab: cc.Prefab = null;

    // @property(cc.Prefab)
    // NonForceGuidePrefab: cc.Prefab = null;

    onLoad() {
        if(!GuideController.Instance) {
            let node = cc.instantiate(this.GuidePrefab);
            node.zIndex = 1000 //CustomZIndex.Guide; //todo
            let comp = node.getComponent(GuideController)
            if(!comp) {
                if (!cc.sys.isNative) {
                    throw 'cannot create GuideController from prefab';
                }
            }
            cc.game.addPersistRootNode(node);
            GuideController.Instance = comp;
        }

        // if(!NonForceGuide.Instance) {
        //     let node = cc.instantiate(this.NonForceGuidePrefab);
        //     node.zIndex = CustomZIndex.Guide;
        //     let comp = node.getComponent(NonForceGuide)
        //     if(!comp) {
        //         if (!cc.sys.isNative) {
        //             throw 'cannot create NonForceGuide from prefab';
        //         }
        //     }
        //     cc.game.addPersistRootNode(node);
        //     NonForceGuide.Instance = comp;
        // }
    }
}
