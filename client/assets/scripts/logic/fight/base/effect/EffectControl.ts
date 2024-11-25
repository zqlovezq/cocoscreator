import { _decorator, CCInteger, Color, Component, instantiate, Label, Node, Prefab, Quat, Rect, sp, Sprite, tween, UITransform, v3, Vec2, Vec3, view } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { AbsRole } from '../obj/role/AbsRole';
import { tab } from '../../../../Table/table_gen';
import { EffectTab } from '../../power/powerTab/EffectTab';

const { ccclass, property } = _decorator;

@ccclass('EffectControl')
export class EffectControl extends AbsControl {
    private static _instance: EffectControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new EffectControl();
        }
        return this._instance;
    }

    init(): void {

    }

    addEffect(effectTab: EffectTab, attack: AbsRole, enemy: AbsRole) {
        if (enemy == null || (enemy && (enemy.info == null || enemy.isRecycle))) {
            return
        }
        enemy.info.addEffect(effectTab);
    }

    removeEffect(effectTab: EffectTab, abs: AbsRole) {
        if (abs && abs.info) {
            abs.info.removeEffect(effectTab)
        }
    }

}

