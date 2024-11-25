import { _decorator, Component, Node } from 'cc';
import { ViewPop } from '../../../../framework/base/ViewPop';
import { ShowTips, UIMgr } from '../../../mgr/UIMgr';
import { ActivityData } from '../ActivityData';
import { ItemInfo } from '../../item/ItemInfo';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ActivityControl } from '../ActivityControl';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../../define/ViewDefine';
import { PlatformMgr } from '../../../mgr/PlatformMgr';
import { tab } from '../../../../Table/table_gen';
import { AdMgr } from '../../AdMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * LimitedBenefitsPop
 * zhudingchao
 * Wed Jun 19 2024 14:31:49 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/activity/limitedBenefits/LimitedBenefitsPop.ts
 *
 */

@ccclass('LimitedBenefitsPop')
export class LimitedBenefitsPop extends ViewPop {
    @property(Node)
    rewardNode: Node = null;
    @property(Node)
    jumpNode: Node = null;
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetLimitedRewardRsp, this.on_s2c_GetLimitedRewardRsp, this)
    }
    onShow(): void {
        this.initView();
    }
    initView(){
        let msg=ActivityData.ins.limitedRewardMsg;
        if(msg&&msg.reward.itemId!=0&&msg.reward.num!=0){
            let item=new ItemInfo()
            item.merge(msg.reward);
            ItemPoolMgr.ins.createItem(item,this.rewardNode);

        }else{
            Error("限时奖励数据错误关闭界面");
            this.onClose();
        }
    }
    onClickClaimBtn() {
        AdMgr.ins.playVideoAd(tab.AdType.AdType_LimitedReward,()=>{
            ActivityControl.ins.requestLimitedReward(ActivityData.ins.limitedRewardMsg.id);
        })
       
    }

    onClickJump() {
        ShowTips("前往月卡界面")
    }
    // 限时奖励消息推送
    on_s2c_GetLimitedRewardRsp(msg: proto.Msg_GetLimitedRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: [msg.reward] });
            this.onClose();
        }
    }
}