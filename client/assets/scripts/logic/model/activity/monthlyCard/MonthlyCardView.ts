import { _decorator, Component, ForwardFlow, Node } from 'cc';
import { ComponentBase } from '../../../../framework/base/ComponentBase';
import { MonthlyCardItem } from './MonthlyCardItem';
import { tab } from '../../../../Table/table_gen';
import { ItemPoolMgr } from '../../item/ItemPoolMgr';
import { ItemInfo } from '../../item/ItemInfo';
import { ActivityData } from '../ActivityData';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { ActivityControl } from '../ActivityControl';
import { RoleData } from '../../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('MonthlyCardView')
export class MonthlyCardView extends ComponentBase {
    @property(MonthlyCardItem)
    cardItem1: MonthlyCardItem = null;
    @property(MonthlyCardItem)
    cardItem2: MonthlyCardItem = null;
    @property(Node)
    extraNode: Node = null;
    @property(Node)
    extraRewardNode: Node = null;
    @property(Node)
    reachBtnNode: Node = null;
    @property(Node)
    notreachBtnNode: Node = null;

    register(): void {
        EventMgr.onMsg(proto.Ptl.GetPrivilegeInfoRsp, this.on_s2c_GetMonthlyPassInfoRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceivePrivilegeDailyRewardsRsp, this.on_s2c_ReceiveMonthlyPassDailyRewardsRsp, this)
        EventMgr.onMsg(proto.Ptl.ReceiveMonthlyPassAdditionalRewardsRsp, this.on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp, this)
    
    }
    initView() {
        let table1 = tab.getData().MonthlyPassTableByType.getValue(tab.PrivilegedType.PrivilegedType_MonthlyPass);
        this.cardItem1.initView(table1);

        let table2 = tab.getData().MonthlyPassTableByType.getValue(tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass);
        this.cardItem2.initView(table2);
        let rewards = tab.getData().GetKeyValue_ConfigTable().MonthlyPassBothRewardItemIds;
        let nums = tab.getData().GetKeyValue_ConfigTable().MonthlyPassBothRewardItemNum;
        for (let key in rewards) {
            let info = new ItemInfo();
            info.initItemData(rewards[key], nums[key]);
            ItemPoolMgr.ins.createRewadItem(info, this.extraRewardNode);
        }
        this.updateView();


    }

    updateView() {
        let msg = ActivityData.ins.monthlyPassInfo;


        let isMonthlyPass=false;
        if (msg.PrivilegeMap && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_MonthlyPass]) {
            let privileged= msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_MonthlyPass];
            if(RoleData.ins.getServerUtcTime()<privileged.expireTime){
                let stage =privileged.isDailyReceived ? 2 : 1;
                this.cardItem1.updateView(stage,privileged.expireTime);
                isMonthlyPass=true;
            }else{
                this.cardItem1.updateView(0);
            }
           
         
        } else {
            this.cardItem1.updateView(0);
        }
        let isPremiumMonthlyPass=false;
        if (msg.PrivilegeMap && msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            let privileged=msg.PrivilegeMap[tab.PrivilegedType.PrivilegedType_PremiumMonthlyPass];
            if(RoleData.ins.getServerUtcTime()<privileged.expireTime){
                let stage =privileged.isDailyReceived ? 2 : 1;
                this.cardItem2.updateView(stage,privileged.expireTime);
                isPremiumMonthlyPass=true;
            }else{
                this.cardItem2.updateView(0);
            }
          
        } else {
            this.cardItem2.updateView(0);
        }
        if (msg.isReceivedMonthlyPassAddtional) {
            this.extraNode.active = false;
        } else {
            let isReach = false;
            if (msg.PrivilegeMap &&isMonthlyPass&&isPremiumMonthlyPass) {
                isReach = true;
            }
            this.notreachBtnNode.active = !isReach;
            this.reachBtnNode.active = isReach;
        }

    }
    onClickReachBtn() {
        ActivityControl.ins.requestReceiveMonthlyPassAllBoughtRewards();
    }

    /**月卡信息 */
    on_s2c_GetMonthlyPassInfoRsp(msg: proto.Msg_GetPrivilegeInfoRsp) {
        this.updateView();
    }
    // 领取月卡每日奖励
    on_s2c_ReceiveMonthlyPassDailyRewardsRsp(msg: proto.Msg_ReceivePrivilegeDailyRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateView();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    // 领取月卡加码奖励
    on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp(msg: proto.Msg_ReceiveMonthlyPassAdditionalRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateView();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }

}


