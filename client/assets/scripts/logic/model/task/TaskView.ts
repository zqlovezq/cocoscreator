import { _decorator, Component, instantiate, Label, Node, Prefab, ScrollView } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { TaskControl } from './TaskControl';
import { TaskBoxItem } from './TaskBoxItem';
import { LocalEvent } from '../../define/LocalEvent';
import { TaskData } from './TaskData';
import { TaskCaseItem } from './TaskCaseItem';
import { tab } from '../../../Table/table_gen';
import { ItemData } from '../item/ItemData';
import { TaskInfo } from './TaskInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
import { TASKDAILY } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

/**
 * 
 * TaskView
 * zhudingchao
 * Tue Jun 04 2024 11:23:12 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/task/TaskView.ts
 *
 */

@ccclass('TaskView')
export class TaskView extends ViewPop {
    @property(Node)
    taskNode: Node = null;
    @property(Node)
    achieveNode: Node = null;
    @property(Node)
    taskContent: Node = null;
    @property(Node)
    achieveContent: Node = null;
    @property(Label)
    activeNumLab: Label = null;
    @property(Node)
    dayTaskNode: Node = null;
    @property(Node)
    weekTaskNode: Node = null;
    @property([TaskBoxItem])
    taskBoxItems: Array<TaskBoxItem> = [];
    @property(Prefab)
    taskCaseItemPrefab: Prefab = null;
    @property(ScrollView)
    taskScrollView: ScrollView = null;
    @property([Node])
    toggles:Node[]=[];
    private currTag: number = TASKDAILY.DAILY;

    private taskCaseItems: Array<TaskCaseItem> = [];
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetDailyTasksRsp, this.on_s2c_GetDailyTasksRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveDailyTaskRewardRsp, this.on_s2c_ReceiveDailyTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveDailyActivityTaskRewardRsp, this.on_s2c_ReceiveDailyActivityTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.GetWeeklyTasksRsp, this.on_s2c_GetWeeklyTasksRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveWeeklyTaskRewardRsp, this.on_s2c_ReceiveWeeklyTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveWeeklyActivityTaskRewardRsp, this.on_s2c_ReceiveWeeklyActivityTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.GetAchievementTasksRsp, this.on_s2c_GetAchievementRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveAchievementTaskRewardRsp, this.on_s2c_ReceiveAchievementTaskRewardRsp, this);
        EventMgr.onLocal(LocalEvent.Item_Update, this.itemChange, this)
        EventMgr.onMsg(proto.Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);
        TaskControl.ins.request();
    }
    onShow(): void {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyTask)){
            this.toggles[0].active=false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WeeklyTask)){
            this.toggles[1].active=false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AchievementTask)){
            this.toggles[2].active=false;
        }
        if (this.openData && this.openData["type"]) {
            this.currTag = this.openData["type"];
        }


    }
    initDailyTaskView() {
        if(!this.toggles[0].active){
            return;
        }
        this.removeCaseItem();
        this.dayTaskNode.active = true;
        this.weekTaskNode.active = false;
        this.taskNode.active = true;
        this.achieveNode.active = false;
        let taskInfo = TaskData.ins.getDailyInfos();
        this.sortTaskList(taskInfo);
        for (let key in taskInfo) {
            let item = this.creatorCaseItem(Number(key));
            item.node.parent = this.taskContent;
            item.initData(taskInfo[key]);
        }
        this.updateBoxItem();
   
        this.taskScrollView.scrollToTop();


    }
    initWeekTaskView() {
        if(!this.toggles[1].active){
            return;
        }
        this.removeCaseItem();
        this.dayTaskNode.active = false;
        this.weekTaskNode.active = true;
        this.taskNode.active = true;
        this.achieveNode.active = false;
        let taskInfo = TaskData.ins.getWeekInfos();
        this.sortTaskList(taskInfo);
        for (let key in taskInfo) {
            let item = this.creatorCaseItem(Number(key));
            item.node.parent = this.taskContent;
            item.initData(taskInfo[key]);
        }
        this.updateBoxItem();
        this.taskScrollView.scrollToTop();

    }
    initAchievement() {
        if(!this.toggles[2].active){
            return;
        }
        this.removeCaseItem();
        this.taskNode.active = false;
        this.achieveNode.active = true;
        let taskInfo = TaskData.ins.getAchievementInfos();
        this.sortTaskList(taskInfo);
        for (let key in taskInfo) {
            let item = this.creatorCaseItem(Number(key));
            item.node.parent = this.achieveContent;
            item.initData(taskInfo[key]);
        }
    }

    updateBoxItem(){
        if(this.currTag==TASKDAILY.DAILY){
            let actives = tab.getData().GetKeyValue_ConfigTable().DailyTaskRewardNeedCount;
            let dailyActiveNum = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_DailyActivity);
            this.activeNumLab.string = dailyActiveNum + "";
            for (let i: number = 0; i < actives.length; i++) {
                let lastValue = 0;
                let pro = 0;
                if (i > 0) {
                    lastValue = actives[i - 1];
                }
                if (dailyActiveNum <= lastValue) {
                    pro = 0;
                } else if (dailyActiveNum >= actives[i]) {
                    pro = 1;
                } else {
                    pro = (dailyActiveNum - lastValue) / (actives[i] - lastValue);
                }
                this.taskBoxItems[i].initView(1, i, pro, actives[i]);
            }
        }else if(this.currTag==TASKDAILY.WEEK){
            let actives = tab.getData().WeeklyTaskBoxTable;
            let weekActiveNum = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_WeeklyActivity);
            this.activeNumLab.string = weekActiveNum + "";
            for (let i: number = 0; i < actives.length; i++) {
                let lastValue = 0;
                let pro = 0;
                if (i > 0) {
                    lastValue = actives[i - 1].Id;
                }
                if (weekActiveNum <= lastValue) {
                    pro = 0;
                } else if (weekActiveNum >= actives[i].Id) {
                    pro = 1;
                } else {
                    pro = (weekActiveNum - lastValue) / (actives[i].Id - lastValue);
                }
                this.taskBoxItems[i].initView(2, i, pro, actives[i].Id);
            }
        }
       
    }

    sortTaskList(infos: Array<TaskInfo>) {
        infos.sort((a, b) => {
            if (a.isReceived && b.isReceived) {
                return a.taskTabId - b.taskTabId;
            }
            if (a.isCanReceived && b.isCanReceived) {
                return a.taskTabId - b.taskTabId;
            }
            if (a.isCanReceived) {
                return -1;
            }
            if (b.isCanReceived) {
                return 1;
            }
            if (a.isReceived) {
                return 1;
            }
            if (b.isReceived) {
                return -1;
            }

            return a.taskTabId - b.taskTabId;
        })
    }
    removeCaseItem() {
        if (this.taskCaseItems) {
            for (let key in this.taskCaseItems) {
                this.taskCaseItems[key].node.removeFromParent();
            }
        }
    }

    creatorCaseItem(index: number) {
        if (!this.taskCaseItems[index]) {
            let node = instantiate(this.taskCaseItemPrefab);
            let com = node.getComponent(TaskCaseItem);
            this.taskCaseItems.push(com);
        }
        return this.taskCaseItems[index];

    }
    onClickToggle(event, tag) {
        tag = Number(tag);
        if (this.currTag != tag) {
            this.currTag = tag;
            if (tag == 1) {
                this.initDailyTaskView();
            } else if (tag == 2) {
                this.initWeekTaskView();
            } else {
                this.initAchievement();
            }

        }

    }
    itemChange(itemIds: Array<number>) {

    }
    on_s2c_GetDailyTasksRsp(msg: proto.Msg_GetDailyTasksRsp) {
        if (this.currTag == TASKDAILY.DAILY) {
            this.initDailyTaskView();
        }
    }
    on_s2c_GetWeeklyTasksRsp(msg: proto.Msg_GetWeeklyTasksRsp) {
        if (this.currTag == TASKDAILY.WEEK) {
            this.initWeekTaskView();
        }
    }
    on_s2c_GetAchievementRsp(msg: proto.Msg_GetAchievementTasksRsp) {
        if (this.currTag == TASKDAILY.ACHIEVEMENT) {
            this.initAchievement();
        }
    }
    on_s2c_ReceiveDailyTaskRewardRsp(msg: proto.Msg_ReceiveDailyTaskRewardRsp) {
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.currTag == TASKDAILY.DAILY) {
                this.initDailyTaskView();
            }
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    on_s2c_ReceiveDailyActivityTaskRewardRsp(msg: proto.Msg_ReceiveDailyActivityTaskRewardRsp) {
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateBoxItem();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    on_s2c_ReceiveWeeklyTaskRewardRsp(msg: proto.Msg_ReceiveWeeklyTaskRewardRsp) {
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.currTag == TASKDAILY.WEEK) {
                this.initWeekTaskView();
            }
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    on_s2c_ReceiveWeeklyActivityTaskRewardRsp(msg: proto.Msg_ReceiveWeeklyActivityTaskRewardRsp) {
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            this.updateBoxItem();
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        }
    }
    on_s2c_ReceiveAchievementTaskRewardRsp(msg: proto.Msg_ReceiveAchievementTaskRewardRsp) {
        if (!msg.error||msg.error.code == proto.CommonErrorCode.Succeed) {
            if (this.currTag == TASKDAILY.ACHIEVEMENT) {
                this.initAchievement();
            }
        }
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
    }
    on_s2c_TaskChangePush(msg:proto.Msg_TaskChangePush){
        if(this.currTag==TASKDAILY.DAILY){
            this.initDailyTaskView();
        }else if(this.currTag==TASKDAILY.WEEK){
            this.initWeekTaskView();
        }else if(this.currTag==TASKDAILY.ACHIEVEMENT){
            this.initAchievement();
        }
    }
}