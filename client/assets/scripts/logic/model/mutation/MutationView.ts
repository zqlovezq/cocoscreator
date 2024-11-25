import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('MutationView')
export class MutationView extends ViewPop {
    onShow(): void {
        
    }
    register(): void {
        
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    close(): void {
        super.close();
    }
}


