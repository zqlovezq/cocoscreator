import { _decorator, Button, Color, Component, director, instantiate, Layers, Node, Prefab, ResolutionPolicy, Sprite, tween, UITransform, v3, Vec3, view } from 'cc';
import { EventMgr } from '../../logic/mgr/EventMgr';
const { ccclass, property } = _decorator;

/** 组件基础
 * 目前只做了事件管理
 */
@ccclass('ComponentBase')
export class ComponentBase extends Component {
    protected onLoad() {
        this.register()
    }
    register(): void {
        throw new Error("Method not implemented.");
    }

    unRegister() {
        EventMgr.unTarget(this)
    }


    protected onDestroy(): void {
        this.unRegister()
    }
}

