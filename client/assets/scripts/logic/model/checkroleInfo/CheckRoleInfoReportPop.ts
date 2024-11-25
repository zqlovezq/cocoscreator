import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
const { ccclass, property } = _decorator;

@ccclass('CheckRoleInfoReportPop')
export class CheckRoleInfoReportPop extends ViewPop {
    private _playerId:string = ""
    onShow(): void {
        this._playerId = this.openData.id;
        console.log(`cocos report friend id=${this._playerId}`)
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
}


