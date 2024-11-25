import { _decorator, Camera, Component, director, game, instantiate, Node, Prefab, sys, Vec3 } from 'cc';
import { GuideController } from './GuideController';
import { Func } from '../utils/Func';
const { ccclass, property } = _decorator;

@ccclass('LoadGuide')
export class LoadGuide extends Component {
    @property(Prefab)
    GuidePrefab:Prefab = null;
    @property(Camera)
    camera2d:Camera = null
    onLoad(): void {
        if(!GuideController.ins){
            const node = instantiate(this.GuidePrefab);
            const comp = node.getComponent(GuideController);
            if(!comp){
                if (!sys.isNative) {
                    throw 'cannot create GuideController from prefab';
                }
            }
            director.addPersistRootNode(node);
            GuideController.ins = comp;
        }
    }
}


