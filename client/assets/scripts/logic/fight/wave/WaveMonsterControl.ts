import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';



const { ccclass, property } = _decorator;

const tempPos = new Vec3(0, 0, 0);
@ccclass('WaveMonsterControl')
export class WaveMonsterControl extends AbsControl {
    private static _instance: WaveMonsterControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new WaveMonsterControl();
        }
        return this._instance;
    }

    init(): void {

    }

}

