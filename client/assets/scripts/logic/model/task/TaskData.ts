import { Node, Prefab, _decorator } from "cc";
import { IClear } from "../../../framework/base/IAbs";
import { TaskInfo } from "./TaskInfo";
import { proto } from "client_protocol";
import { tab } from "../../../Table/table_gen";
import { ItemInfo } from "../item/ItemInfo";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { AssociationData } from "../association/AssociationData";

const { ccclass, property } = _decorator;

/** 任务数据 */
export class TaskData implements IClear {
    private static _instance: TaskData;
    private dailyTasksMap: Map<number, TaskInfo>;
    private dailyReceivedIndexes: Array<number>;
    private weekTasksMap: Map<number, TaskInfo>;
    private weekReceivedIndexes: Array<number>;
    private achieveTasksMap: Map<number, TaskInfo>;
    private battlePassTasksMap: Map<number, TaskInfo>;//战令任务
    private TrialTasksMap: Map<number, TaskInfo>;//试炼任务
    private GuildTasksMap: Map<number, TaskInfo>;//公会任务
    private GachaTasksMap: Map<number, TaskInfo>;//抽卡奖池up任务
    private todayChapterId: number;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new TaskData();
        }
        return this._instance;
    }

    purge(): void {
    }
    initDailyTasks(msg: proto.Msg_GetDailyTasksRsp) {
        if (this.dailyTasksMap) {
            this.dailyTasksMap.clear();
        } else {
            this.dailyTasksMap = new Map();
        }
        let tasks = msg.tasks;
        for (let key in tasks) {
            let info = new TaskInfo();
            info.merge(tasks[key]);
            this.dailyTasksMap.set(info.id, info);
        }
        this.dailyReceivedIndexes = msg.ReceivedIndexes;
        this.todayChapterId = msg.TodayChapterId;
    }
    initWeekTasks(msg: proto.Msg_GetWeeklyTasksRsp) {
        if (this.weekTasksMap) {
            this.weekTasksMap.clear();
        } else {
            this.weekTasksMap = new Map();
        }
        let tasks = msg.tasks;
        for (let key in tasks) {
            let info = new TaskInfo();
            info.merge(tasks[key]);
            this.weekTasksMap.set(info.id, info);
        }
        this.weekReceivedIndexes = msg.ReceivedIndexes;
    }
    initAchieveTasks(msg: proto.Msg_GetAchievementTasksRsp) {
        if (this.achieveTasksMap) {
            this.achieveTasksMap.clear();
        } else {
            this.achieveTasksMap = new Map();
        }
        let tasks = msg.tasks;
        for (let key in tasks) {
            let info = new TaskInfo();
            info.merge(tasks[key]);
            this.achieveTasksMap.set(info.id, info);
        }

    }
    // 初始化战令任务接口
    initBattlePassTasks(msg: Map<number, proto.BattlePass>) {
        if (this.battlePassTasksMap) {
            this.battlePassTasksMap.clear();
        } else {
            this.battlePassTasksMap = new Map();
        }
        msg.forEach((val, key) => {
            const battlePassData = val;
            let tasks = battlePassData.tasks;
            for (let key in tasks) {
                let info = new TaskInfo();
                info.merge(tasks[key]);
                this.battlePassTasksMap.set(info.id, info);
            }
        })
    }
    // 初始化试炼任务接口
    initTrialTasks(msg: Map<number, proto.NewPlayerTrial>) {
        if (this.TrialTasksMap) {
            this.TrialTasksMap.clear();
        } else {
            this.TrialTasksMap = new Map()
        }
        msg.forEach((val, key) => {
            const trialData = val;
            let tasks = trialData.tasks;
            for (let key in tasks) {
                let info = new TaskInfo();
                info.merge(tasks[key]);
                this.TrialTasksMap.set(info.id, info);
            }
        })
    }
    // 初始化帮会任务接口
    initGuildTasks() {
        if (this.GuildTasksMap) {
            this.GuildTasksMap.clear();
        } else {
            this.GuildTasksMap = new Map()
        }
        const tasks = AssociationData.ins.getAssocitionInfo().tasks;
        if(tasks){
            for (let key in tasks) {
                let info = new TaskInfo();
                info.merge(tasks[key]);
                this.GuildTasksMap.set(info.id, info);
            }
        }
    }
    // 初始化奖池up任务接口
    initGachaTasks(msg:proto.Msg_GetActivityGachaUpMapRsp){
        if (this.GachaTasksMap) {
            this.GachaTasksMap.clear();
        } else {
            this.GachaTasksMap = new Map()
        }
        const map = msg.activityGachaUpMap;
        if(map){
            for (let key in map) {
                const tasks = map[key].tasks;
                for(let i=0;i<tasks.length;i++){
                    let info = new TaskInfo();
                    info.merge(tasks[i]);
                    this.GachaTasksMap.set(info.id, info);
                }
            }
        }
    }
    updateTask(msg: proto.Msg_TaskChangePush) {
        if (msg.addedTasks && msg.addedTasks.length > 0) {
            let tasks = msg.addedTasks;
            for (let key in tasks) {
                let info = new TaskInfo();
                info.merge(tasks[key]);
                if (info.taskTable.TaskType == tab.TaskType.TaskType_DailyTask) {
                    if (this.dailyTasksMap) {
                        this.dailyTasksMap.set(info.id, info);

                    }


                } else if (info.taskTable.TaskType == tab.TaskType.TaskType_WeeklyTask) {

                    if (this.weekTasksMap) {
                        this.weekTasksMap.set(info.id, info);


                    }

                } else if (info.taskTable.TaskType == tab.TaskType.TaskType_AchievementTask) {
                    if (this.achieveTasksMap) {
                        this.achieveTasksMap.set(info.id, info);

                    }

                }
            }
        }
        if (msg.finishedTasks && msg.finishedTasks.length > 0) {
            let tasks = msg.finishedTasks;
            for (let key in tasks) {
                let taskTab = tab.getData().TaskTableById.getValue(tasks[key].taskTabId);
                let info: TaskInfo = null;
                if (taskTab.TaskType == tab.TaskType.TaskType_DailyTask) {
                    if (this.dailyTasksMap) {
                        info = this.dailyTasksMap.get(tasks[key].id)
                    }

                } else if (taskTab.TaskType == tab.TaskType.TaskType_WeeklyTask) {
                    if (this.weekTasksMap) {
                        info = this.weekTasksMap.get(tasks[key].id)
                    }

                } else if (taskTab.TaskType == tab.TaskType.TaskType_AchievementTask) {
                    if (this.achieveTasksMap) {
                        info = this.achieveTasksMap.get(tasks[key].id)
                    }

                } else if (taskTab.TaskType == tab.TaskType.TaskType_BattlePass) {
                    if (this.battlePassTasksMap) {
                        info = this.battlePassTasksMap.get(tasks[key].id);
                    }
                } else if (taskTab.TaskType == tab.TaskType.TaskType_ActivityNewPlayerTask) {
                    if (this.TrialTasksMap) {
                        info = this.TrialTasksMap.get(tasks[key].id)
                    }
                }else if(taskTab.TaskType == tab.TaskType.TaskType_GuildDailyTask){
                    if (this.GuildTasksMap) {
                        info = this.GuildTasksMap.get(tasks[key].id)
                    }
                }
                if (info) {
                    info.merge(tasks[key]);
                }
            }
        }
        if (msg.removedTasks && msg.removedTasks.length > 0) {
            let tasks = msg.removedTasks;
            for (let key in tasks) {
                let taskTab = tab.getData().TaskTableById.getValue(tasks[key].taskTabId);
                if (taskTab.TaskType == tab.TaskType.TaskType_DailyTask) {
                    if (this.dailyTasksMap) {
                        this.dailyTasksMap.delete(tasks[key].id);
                    }

                } else if (taskTab.TaskType == tab.TaskType.TaskType_WeeklyTask) {
                    if (this.weekTasksMap) {
                        this.weekTasksMap.delete(tasks[key].id);
                    }

                } else if (taskTab.TaskType == tab.TaskType.TaskType_AchievementTask) {
                    if (this.achieveTasksMap) {
                        this.achieveTasksMap.delete(tasks[key].id);
                    }

                }
            }
        }
    }
    getDailyInfos() {
        if (!this.dailyTasksMap) {
            return null;
        }
        return Array.from(this.dailyTasksMap.values())
    }
    getWeekInfos() {
        if (!this.weekTasksMap) {
            return null;
        }
        return Array.from(this.weekTasksMap.values())
    }
    getAchievementInfos() {
        if (!this.achieveTasksMap) {
            return null;
        }
        return Array.from(this.achieveTasksMap.values())
    }
    getGuildInfos(){
        if (!this.GuildTasksMap) {
            return null;
        }
        return Array.from(this.GuildTasksMap.values())
    }
    /**
     * 获得是否领取每日活跃奖励
     * @param index 
     * @returns 
     */
    getIsGetDailyActiveReward(index: number) {
        return this.dailyReceivedIndexes.indexOf(index) >= 0;
    }
    receiveDailyTaskRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.dailyTasksMap.get(ids[key]);
            if (info) {
                info.isReceived = true;
            }
        }
    }
    receiveDailyActiveRewardSucc(ids: number[]) {
        this.dailyReceivedIndexes = this.dailyReceivedIndexes.concat(ids);
    }

    /**
     * 获得是否领取每日活跃奖励
     * @param index 
     * @returns 
     */
    getIsGetWeekActiveReward(index: number) {
        return this.weekReceivedIndexes.indexOf(index) >= 0;
    }
    getIsGetGuildActiveReward(index:number){
        return AssociationData.ins.getAssocitionInfo().receivedActivityIndexes.indexOf(index)>=0;
    }
    receiveWeekTaskRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.weekTasksMap.get(ids[key]);
            if (info) {
                info.isReceived = true;
            }
        }
    }
    receiveWeekActiveRewardSucc(ids: number[]) {
        this.weekReceivedIndexes = this.weekReceivedIndexes.concat(ids);
    }

    receiveAchieveTaskRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.achieveTasksMap.get(ids[key]);
            if (info) {
                info.isReceived = true;
            }
        }
    }
    getGuildActiveReward(index: number){
        let mainChapter = tab.getData().GuildLevelTableById.getValue(AssociationData.ins.getAssocitionSimpleInfo().level);

        let nums = mainChapter["TaskRewardNum" + (index + 1)];
        let ids = mainChapter["TaskBoxReward" + (index + 1)];
        let infos = [];
        for (let key in ids) {
            let item = new ItemInfo();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
        }
        return infos;
    }
    getDailyActiveReward(index: number) {
        let mainChapter = tab.getData().MainChapterTableById.getValue(this.todayChapterId);

        let nums = mainChapter["DailyTaskNum" + (index + 1)];
        let ids = mainChapter["DailyTaskReward" + (index + 1)];
        let infos = [];
        for (let key in ids) {
            let item = new ItemInfo();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
        }
        return infos;

    }
    getWeekActiveReward(index: number) {
        let tableData = tab.getData().WeeklyTaskBoxTable[index];

        let ids = tableData.BoxRewardItemIds;
        let nums = tableData.BoxRewardItemNum;
        let infos = [];
        for (let key in ids) {
            let item = new ItemInfo();
            item.initItemData(ids[key], nums[key]);
            infos.push(item);
        }
        return infos;

    }
    getBattlePassTaskInfo(taskid: number) {
        return this.battlePassTasksMap.get(taskid);
    }
    refreshBattlePassTaskInfo(tasks: proto.ITask[]) {
        for (let i = 0; i < tasks.length; i++) {
            const info = this.battlePassTasksMap.get(tasks[i].id);
            if (info) {
                info.merge(tasks[i]);
            }
        }
    }
    getTrialTaskInfo(taskid: number) {
        if (this.TrialTasksMap.get(taskid)) {
            return this.TrialTasksMap.get(taskid)
        }
        const costomTask = new TaskInfo();
        costomTask.id = taskid;
        costomTask.isReceived = false;
        costomTask.progress = 0;
        costomTask.taskTabId = taskid;
        costomTask.isUnLock = false;
        return costomTask;
    }
    getGuildTaskInfo(taskid:number){
        if(this.GuildTasksMap.get(taskid)){
            return this.GuildTasksMap.get(taskid)
        }
        const costomTask = new TaskInfo();
        costomTask.id = taskid;
        costomTask.isReceived = false;
        costomTask.progress = 0;
        costomTask.taskTabId = taskid;
        costomTask.isUnLock = false;
        return costomTask;
    }

    receiveGuildTaskRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.GuildTasksMap.get(ids[key]);
            if (info) {
                info.isReceived = true;
            }
        }
    }
    receiveGuildActiveRewardSucc(ids: number[]) {
        if(AssociationData.ins.getAssocitionInfo()){
            for(let i=0;i<ids.length;i++){
                AssociationData.ins.getAssocitionInfo().receivedActivityIndexes.push(ids[i]);
            }
        }
    }
    getGachaUpTaskInfo(taskid:number){
        if(this.GachaTasksMap.get(taskid)){
            return this.GachaTasksMap.get(taskid)
        }
    }
    receiveGachaUpTaskRewardSucc(ids: number[]) {
        for (let key in ids) {
            let info = this.GachaTasksMap.get(ids[key]);
            if (info) {
                info.isReceived = true;
            }
        }
    }
}