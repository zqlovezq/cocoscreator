import { _decorator, Component, Label, Node, ProgressBar } from 'cc';
import InfiniteCell from '../../../../Common/InfiniteList/InfiniteCell';
import { tab } from '../../../../Table/table_gen';
import { TaskData } from '../../task/TaskData';
import { proto } from 'client_protocol';
import { CommonItem } from '../../item/CommonItem';
import { ItemInfo } from '../../item/ItemInfo';
import { UIMgr } from '../../../mgr/UIMgr';
import { TaskInfo } from '../../task/TaskInfo';
import { Net } from '../../../net/Net';
import { RookieTaskMgr } from './RookieTaskMgr';
import { LangMgr } from '../../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('RookieTaskItem')
export class RookieTaskItem extends InfiniteCell {
    @property(ProgressBar)
    bar_progress: ProgressBar = null;
    @property(Label)
    lbl_name: Label = null;
    @property(CommonItem)
    common_item: CommonItem = null;
    @property(Node)
    node_goto: Node = null;//前往按鈕
    @property(Node)
    node_reach: Node = null;//領取按鈕
    @property(Node)
    node_not_reach: Node = null;//未達成按鈕
    @property(Node)
    node_got: Node = null;//已获得
    @property(Label)
    lbl_bar:Label = null;
    private taskData: TaskInfo = null;
    private _taskId: number = 0;
    private _trialId: number = 0;
    private _taskTab: tab.TaskTable = null;
    UpdateContent(data: any): void {
        this._taskId = data.data;
        this._trialId = data.id;
        this._taskTab = tab.getData().TaskTableById.getValue(this._taskId);
        this.taskData = TaskData.ins.getTrialTaskInfo(this._taskId);
        const rewards = this._taskTab.RewardItemIds;
        const nums = this._taskTab.RewardItemNum;
        const taskCondition = this._taskTab.FinishType;
        let finishParam = this._taskTab.FinishParam1;
        this.bar_progress.progress = this.taskData.progress/finishParam;
        this.lbl_bar.string = `${this.taskData.progress}/${finishParam}`
        this.lbl_name.string =LangMgr.getLab(this._taskTab.Describe);
        const award = new ItemInfo();
        award.itemId = rewards[0];
        award.num = nums[0];
        this.common_item.initData(award);
        if (this.taskData.isReceived) {
            this.bar_progress.progress = 1
            this.common_item.setSelectState(true);
        }
        this.node_goto.active = false;
        this.node_reach.active = this.taskData.isCanReceived;
        this.node_not_reach.active = false;
        this.node_got.active = this.taskData.isReceived;
        if (!this.taskData.isReceived && !this.taskData.isCanReceived) {
            if (this._taskTab.JumpUI) {
                this.node_goto.active = true;
            } else {
                this.node_not_reach.active = true;
            }
        }
    }
    onClickGotoBtn() {
        if (this._taskTab.JumpUI) {
            UIMgr.ins.hideView("RookieTaskPop");
            UIMgr.ins.jumpLayer(this._taskTab.JumpUI,this._taskTab.JumpParam[0]);
        }
    }
    // 点击领取任务奖励
    clickGetAward() {
        let msg = new proto.Msg_ReceiveNewPlayerTrialTaskRewardsReq();
        msg.trialId = this._trialId;
        msg.taskId = this._taskId;
        Net.Send(proto.Ptl.ReceiveNewPlayerTrialTaskRewardsReq, msg);
    }
}


