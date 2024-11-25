import { _decorator, Component, Node,Animation, UI, AnimationClip, log } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

/**
 * 
 * FunctionUnlockPop
 * zhudingchao
 * Tue Jul 23 2024 13:58:19 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/home/FunctionUnlockPop.ts
 *
 */

@ccclass('FunctionUnlockPop')
export class FunctionUnlockPop extends ViewPop {
    private functionName:number;
    register(): void {

    }
    onShow(): void {
        if (this.openData && this.openData["functionName"]) {
            this.functionName = this.openData["functionName"];
            this.initView();
        }
    }

    initView(){
        
        let opTab=tab.getData().OpenFunctionTableByName.getValue(this.functionName);
        if(opTab){
            if(opTab.FunctionUnlockAnimation){
                let node=this.node.getChildByName(opTab.FunctionUnlockAnimation);
                if(node){
                    node.active=true;
                    let anim=node.getComponent(Animation);
                 
                    anim.clips[0].wrapMode=AnimationClip.WrapMode.Normal;
                    anim.play();
                    anim.on(Animation.EventType.FINISHED, e => {
                        log("动画播放完成")
                       this.onClose();
                    })
                }
            }
        }
    }
    
    protected onDestroy(): void {
        super.onDestroy();
        EventMgr.emitLocal(LocalEvent.checkOpenFuncPop);
      
    }
}