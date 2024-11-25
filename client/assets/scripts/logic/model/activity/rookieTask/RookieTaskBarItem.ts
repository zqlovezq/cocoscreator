import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { tab } from '../../../../Table/table_gen';
import { RookieTaskMgr } from './RookieTaskMgr';
import { CommonItem } from '../../item/CommonItem';
import { ItemInfo } from '../../item/ItemInfo';
import { proto } from 'client_protocol';
import { Net } from '../../../net/Net';
import { HeroData } from '../../hero/HeroData';
const { ccclass, property } = _decorator;

@ccclass('RookieTaskBarItem')
export class RookieTaskBarItem extends Component {
    @property(CommonItem)
    common_item:CommonItem = null;
    @property(Label)
    lbl_score:Label = null;
    @property(Node)
    node_red:Node = null;
    @property(ProgressBar)
    node_bar:ProgressBar = null;
    private taskScoreTab:tab.ActivityNewPlayerTaskScoreTable = null;
    initData(scoreTab:tab.ActivityNewPlayerTaskScoreTable){
        this.taskScoreTab = scoreTab;
        const newPlayerTaskTab = tab.getData().ActivityNewPlayerTaskTableById.getValue(this.taskScoreTab.Id);
        const newPlayertrial =RookieTaskMgr.ins.getTrialTask(newPlayerTaskTab.Group);
        const socre = newPlayertrial.score;
        const receiveIds = newPlayertrial.receivedScoreIds;
        const isGot = receiveIds.indexOf(this.taskScoreTab.Id)>-1
        this.lbl_score.string = String(this.taskScoreTab.Score);
        const itemInfo = new ItemInfo();
        itemInfo.itemId = this.taskScoreTab.RewardId;
        itemInfo.num = this.taskScoreTab.RewardNum;
        this.common_item.initData(itemInfo);
        this.common_item.setSelectState(isGot);
        this.node_red.active = !isGot&&socre>=this.taskScoreTab.Score;

        // 判断上一阶段的分数
        const lastScoreTab = tab.getData().ActivityNewPlayerTaskScoreTableById.getValue(scoreTab.Id-1);
        const lastScore = lastScoreTab?lastScoreTab.Score:0
        this.node_bar.progress = socre>=this.taskScoreTab.Score?1:(socre-lastScore)/(this.taskScoreTab.Score-lastScore);

        // 是否是英雄
        this.common_item.setTouchCallBack(null);
        if(!isGot&&socre>=this.taskScoreTab.Score){
            this.common_item.setTouchCallBack(()=>{
                // 领取奖励
                let msg = new proto.Msg_ReceiveNewPlayerTrialScoreRewardsReq();
                msg.scoreId = this.taskScoreTab.Id;
                Net.Send(proto.Ptl.ReceiveNewPlayerTrialScoreRewardsReq , msg)
            })
        }
    }
    gotItem(){
        this.common_item.setSelectState(true);
        this.common_item.setTouchCallBack(null);
        this.node_red.active = false;
    }
}


