import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ChannelMgr } from '../../../channel/ChannelMgr';
import { Func } from '../../utils/Func';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

/**
 * 
 * InspirePop
 * zhudingchao
 * Thu Aug 15 2024 10:37:36 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/home/InspirePop.ts
 *
 */

@ccclass('InspirePop')
export class InspirePop extends ViewPop {
    register(): void {

    }
    onShow(): void {

    }
    onClickJudgment() {
        console.log("js调用商店评分")
        ChannelMgr.comment("{}", (retData) => {
            // console.log("##################### comment ret" + JSON.stringify(retData));
            console.log("商店评分============" + retData)
            if (retData.code == 0) {
                Func.setItem("isComment_"+RoleData.ins.id,1);
                this.onClose();
                EventMgr.emitLocal(LocalEvent.updateInspireBtn)
                // MeControl.getInstance().setClintData(TypeClientData.REPUTATION, 1);
                // SceneViewReputation.getInstance().hideScene();
                // console.log("商店评分============回调")
            }
        });
    }
    
}