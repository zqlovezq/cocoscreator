import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import { TaskInfo } from '../task/TaskInfo';
import { TaskData } from '../task/TaskData';
import { tab } from '../../../Table/table_gen';
import { CommonItem } from '../item/CommonItem';
import { ItemInfo } from '../item/ItemInfo';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ActivityControl } from '../activity/ActivityControl';
const { ccclass, property } = _decorator;

@ccclass('RecruitLimitItem')
export class RecruitLimitItem extends Component {
    @property(ProgressBar)
    bar_progress: ProgressBar = null;
    @property(CommonItem)
    common_item: CommonItem = null;
    @property(Node)
    node_receive:Node = null;
    @property(Label)
    lbl_progress:Label = null;

    private taskInfo:TaskInfo = null;
    private _taskTab: tab.TaskTable = null;
    private _activityId:number = 0;
    initData(activityId:number,taskId:number){
        this._activityId = activityId;
        this.taskInfo = TaskData.ins.getGachaUpTaskInfo(taskId);
        this._taskTab = this.taskInfo.taskTable;
        const rewards = this._taskTab.RewardItemIds;
        const nums = this._taskTab.RewardItemNum;

        let finishParam = this._taskTab.FinishParam1;
        const award = new ItemInfo();
        award.itemId = rewards[0];
        award.num = nums[0];
        this.common_item.initData(award);

        if (this.taskInfo.isReceived) {
            this.bar_progress.progress = 1
            this.common_item.setSelectState(true);
        }else{
            const lastTaskInfo = TaskData.ins.getGachaUpTaskInfo(taskId-1);
            if(lastTaskInfo){
                const lastMax = lastTaskInfo.taskTable.FinishParam1
                this.bar_progress.progress = (this.taskInfo.progress-lastMax)/(finishParam-lastMax);
            }else{
                this.bar_progress.progress = this.taskInfo.progress/finishParam;
            }
        }
        this.node_receive.active = this.taskInfo.isCanReceived;
        this.lbl_progress.string = String(finishParam);
    }
      // 点击领取任务奖励
      clickGetAward() {
        ActivityControl.ins.requestReceiveActivityGachaUpTasksRewards(this._activityId);
    }
    gotAward(){
        this.node_receive.active = false;
        this.common_item.setSelectState(true);
    }
}


