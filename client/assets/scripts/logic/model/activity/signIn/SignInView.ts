import { _decorator, Component, error, Label, Node } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { SignInRewardItem } from './SignInRewardItem';
import { ActivityData } from '../ActivityData';
import { tab } from '../../../../Table/table_gen';
import { proto } from 'client_protocol';
import { ActivityControl } from '../ActivityControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { RoleData } from '../../role/RoleData';
import { TimeUtil } from '../../../utils/TimeUtil';
import { LangMgr } from '../../../mgr/LangMgr';
import { HeroDataControl } from '../../hero/herobag/HeroDataControl';
const { ccclass, property } = _decorator;

/**
 * 
 * SignInView
 * zhudingchao
 * Thu Jun 20 2024 17:38:38 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/signIn/SignInView.ts
 *
 */

@ccclass('SignInView')
export class SignInView extends ComponentBase {
    @property([SignInRewardItem])
    signItems: Array<SignInRewardItem> = [];
    @property(Label)
    timeLab:Label=null;
    private signId: number;
    private type: tab.DailyRewardType;
    private tabs: Array<tab.DailyRewardItemTable>;
    private msg: proto.Msg_DailyRewardPush;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this)
    }
    protected start(): void {

    }
    initView(type: tab.DailyRewardType) {
        this.type = type;

        this.msg = ActivityData.ins.getDailyRewardMsgByType(this.type);
        if (!this.msg) {
            error("签到数据错误==", type)
            return;
        }
        if(this.timeLab){
            if(Number(this.msg.closeTime)>0){
                let lastTimer=Number(this.msg.closeTime)-RoleData.ins.getServerUtcTime();
                if(lastTimer>0){
                   let ret= TimeUtil.formaterWithOutSecond3(lastTimer);
                   let day=ret.day?ret.day:0;
                   let hours=ret.hours?ret.hours:0;
                   this.timeLab.string=LangMgr.getCombineString("ui_commondesc_71",[day,hours])
                }else{
                    this.timeLab.node.active=false;
                }
            }else{
                this.timeLab.node.active=false;
            }
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
    updateView() {
        this.msg = ActivityData.ins.getDailyRewardMsgByType(this.type);
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
    onClickHero(event,heroId:number){
        heroId=Number(heroId);
        HeroDataControl.ins.refreshBookData(heroId);
        UIMgr.ins.show({ viewName: ViewName.HeroBagView ,data:{viewType:2},zIndex:300})
    }
}