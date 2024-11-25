import { _decorator, Component, error, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { SignInRewardItem } from '../signIn/SignInRewardItem';
import { ActivityControl } from '../ActivityControl';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
import { tab } from '../../../../Table/table_gen';
import { ActivityData } from '../ActivityData';
import { LocalEvent } from '../../../define/LocalEvent';
const { ccclass, property } = _decorator;

@ccclass('NewPlayerSignInPop')
export class NewPlayerSignInPop extends ViewPop {
    @property([SignInRewardItem])
    signItems: Array<SignInRewardItem> = [];
    private tabs: Array<tab.DailyRewardItemTable>;
    private msg: proto.Msg_DailyRewardPush;
    private curDay:number = 0;
    onShow(): void {
        this.msg = ActivityData.ins.getDailyRewardMsgByType(tab.DailyRewardType.DailyRewardType_NewServer);
        if (!this.msg) {
            error("签到数据错误==", tab.DailyRewardType.DailyRewardType_NewServer)
            return;
        }
        this.tabs = ActivityData.ins.getDailyRewrdItemsById(this.msg.id);
        for (let i: number = 0; i < this.signItems.length; i++) {
            let day = this.tabs[i].Index;
            let index = this.msg.activatedList.indexOf(day);
            let state = 0;
            if (index >= 0) {
                state = 1;
            } else {
                index = this.msg.rewardList.indexOf(day);
                if (index >= 0) {
                    state = 2;
                }
            }
            this.signItems[i].initView(this.tabs[i], state,this.onTouchItem);

        }
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this)
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    onClose(): void {
        super.onClose();
        EventMgr.emitLocal(LocalEvent.LocalMsg_QueueUI_deleteUI);
    }
    updateView() {
        this.msg = ActivityData.ins.getDailyRewardMsgByType(tab.DailyRewardType.DailyRewardType_NewServer);
        for (let i: number = 0; i < this.signItems.length; i++) {
            let day = this.tabs[i].Index;
            let index = this.msg.activatedList.indexOf(day);
            let state = 0;
            if (index >= 0) {
                state = 1;
            } else {
                index = this.msg.rewardList.indexOf(day);
                if (index >= 0) {
                    state = 2;
                }
            }
            this.signItems[i].updateState(state);

        }
    }
    onTouchItem=(day:number)=>{
        ActivityControl.ins.requestGetDailyReward(this.msg.id,day)

    }
    // 领取每日奖励
    on_s2c_GetDailyRewardRsp(msg: proto.Msg_GetDailyRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            if(msg.data.id==this.msg.id){
                UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
                this.updateView();
            }
             
        }
    }
}


