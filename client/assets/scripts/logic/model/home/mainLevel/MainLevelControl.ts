import { Node, _decorator, js, sys } from "cc";
import { AbsControl } from "../../../../framework/base/IAbs";


const { ccclass, property } = _decorator;


/** 主线 */
export class MainLevelControl extends AbsControl {

    private static _instance: MainLevelControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new MainLevelControl();
        }
        return this._instance;
    }

    register(): void {

    }
    //----------------处理回调---------------------
}