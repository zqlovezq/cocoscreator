import { _decorator, Component, instantiate, Node, Prefab, ScrollView, Vec2 } from 'cc';
import { ActivityData } from '../ActivityData';
import { ChannelMgr } from '../../../../channel/ChannelMgr';
import { CombineAccumulatedRechargeCellItem } from './CombineAccumulatedRechargeCellItem';
import { tab } from '../../../../Table/table_gen';
import { EventMgr } from '../../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { ActivityControl } from '../ActivityControl';
import { UIMgr } from '../../../mgr/UIMgr';
import { ViewName } from '../../../define/ViewDefine';
import { HeroRed } from '../../hero/herobag/HeroRed';
const { ccclass, property } = _decorator;

@ccclass('CombineAccumulatedRechargeItem')
export class CombineAccumulatedRechargeItem extends Component {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Node)
    node_content: Node = null;
    @property(ScrollView)
    scroll_view:ScrollView = null;
    private activityId:number = 0;
    private maxLen:number = 0;
    protected onLoad(): void {
        EventMgr.onMsg(proto.Ptl.GetCumulativeRechargeMapRsp, this.on_s2c_GetCumulativeRechargeMapRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveCumulativeRechargeRewardRsp , this.on_s2c_ReceiveCumulativeRechargeRewardRsp, this)
    }
    onShow(activityId: number) {
       this.activityId = activityId;
       ActivityControl.ins.requesGetCumulativeRecharge();
    }
    on_s2c_ReceiveCumulativeRechargeRewardRsp(msg: proto.Msg_ReceiveCumulativeRechargeRewardRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards });
            this.onShow(this.activityId);
        }
    }
    on_s2c_GetCumulativeRechargeMapRsp(msg: proto.Msg_GetCumulativeRechargeMapRsp) {
       this.setView();
    }
    setView(){
        this.maxLen = 0;
        const Tabs = ActivityData.ins.getAllTabsByRechageId(this.activityId);
        const serverData = ActivityData.ins.getRechargeServerData(this.activityId);
        this.node_content.destroyAllChildren();
        const type = HeroRed.ins.getPayType();
        for (let i = 0; i < Tabs.length; i++) {
            if (Tabs[i].ShowId) {
                const _tab = ActivityData.ins.getRechargeTabById(Tabs[i].ShowId)
                console.log(_tab);
                const needCount = _tab[type];
                if (serverData.payAmount < needCount) {
                    break;
                }
            }
            const item = instantiate(this.pfb_item);
            const itemTs = item.getComponent(CombineAccumulatedRechargeCellItem);
            item.name = String(Tabs[i].IndexId);
            item.parent = this.node_content;
            itemTs.initData(Tabs[i], type);
            this.maxLen++;
        }
        this.scrollToReward();
    }
    scrollToReward(){
        const Tabs = ActivityData.ins.getAllTabsByRechageId(this.activityId);
        if(Tabs){
            const curLen = this.getIndex();
            this.scroll_view.scrollTo(new Vec2(0,1-curLen/this.maxLen),0.2)
        }
    }
    // 获取没有领取的奖励
    getIndex():number{
        const serverData = ActivityData.ins.getRechargeServerData(this.activityId);
        const Tabs = ActivityData.ins.getAllTabsByRechageId(this.activityId);
        const ids = serverData.receivedRewardIds.sort();
        if(ids.length===0||ids[0]!==Tabs[0].IndexId){
            return 0;
        }
        if(ids.length===Tabs.length){
            return Tabs.length;
        }
        let count = 0;
        for(let i=0;i<ids.length;i++){
            count++;
            if(ids[i+1]){
                if(ids[i+1]-ids[i]!==1){
                    return count+1;
                }
            }
        }
        return count+1;
    }
}


