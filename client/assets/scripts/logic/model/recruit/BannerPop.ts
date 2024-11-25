import { _decorator, Component, Label, Node } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ActivityData } from '../activity/ActivityData';
import { formatTimestamp, setTextTime } from '../../utils/GameUtil';
import { Func } from '../../utils/Func';
import { RecruitType } from '../../../Common/script/EnumTypeMgr';
import { LangMgr } from '../../mgr/LangMgr';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('BannerPop')
export class BannerPop extends ViewPop {
    @property(Label)
    lbl_time: Label = null;
    private endTimer:number = null;
    onShow(): void {
        const activityInfo = ActivityData.ins.getAllUpData()[0];
        // this.lbl_time.string = LangMgr.getCombineString("ui_activity_7", [formatTimestamp(activityInfo.startTime) + " - " + formatTimestamp(activityInfo.endTime)])
        const serverTime = RoleData.ins.getServerUtcTime();
        this.endTimer =  activityInfo.endTime - serverTime;
        this.updateTimer();
        this.unschedule(this.updateTimer)
        this.schedule(this.updateTimer, 1)
        
        const currentDate = new Date();
        const dismissTime = currentDate.toDateString()
        Func.setItem("dismissTime" + RecruitType.GaChaUp, dismissTime)
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {

    }
    unRegister(): void {
        super.unRegister();
    }
    onClickGo() {
        this.onClose();
        const groups = ActivityData.ins.getAllActivityGroup();
        const info = groups[0];
        UIMgr.ins.show({ viewName: ViewName.CombineActivityMainView, data: info.TabId })
    }
    updateTimer = () => {
        this.endTimer--;
        if (this.endTimer >= 0) {
            //this.lbl_time.string = LangMgr.getLab("ui_commondesc_109")+setTextTime(this.endTimer);
            this.lbl_time.string = setTextTime(this.endTimer);
        } else {
            this.unschedule(this.updateTimer);
            this.onClose();
        }
    }
}


