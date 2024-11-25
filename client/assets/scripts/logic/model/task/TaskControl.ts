import { Node, _decorator, js, sys } from "cc";
import { AbsControl } from "../../../framework/base/IAbs";
import { EventMgr } from "../../mgr/EventMgr";
import { proto } from "client_protocol";
import { Net } from "../../net/Net";
import { TaskData } from "./TaskData";
import { RedMgr } from "../../mgr/RedMgr";
import { RedDotType } from "../../red/RedDotType";
import { tab } from "../../../Table/table_gen";
import { ItemData } from "../item/ItemData";
import { BattlePassDataMgr } from "../activity/battlePass/BattlePassDataMgr";
import { LocalEvent } from "../../define/LocalEvent";
import { OpenFunctionMgr } from "../../../Common/component/OpenFunctionMgr";
import { AssociationData } from "../association/AssociationData";
import { ActivityData } from "../activity/ActivityData";

const { ccclass, property } = _decorator;

/** 任务 */
export class TaskControl extends AbsControl {

    private static _instance: TaskControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new TaskControl();
        }
        return this._instance;
    }

    register(): void {
        EventMgr.onMsg(proto.Ptl.GetDailyTasksRsp, this.on_s2c_GetDailyTasksRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveDailyTaskRewardRsp, this.on_s2c_ReceiveDailyTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveDailyActivityTaskRewardRsp, this.on_s2c_ReceiveDailyActivityTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveGuildTaskChestRewardsRsp, this.on_s2c_ReceiveGuildTaskChestRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.GetWeeklyTasksRsp, this.on_s2c_GetWeeklyTasksRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveWeeklyTaskRewardRsp, this.on_s2c_ReceiveWeeklyTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveWeeklyActivityTaskRewardRsp, this.on_s2c_ReceiveWeeklyActivityTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.GetAchievementTasksRsp, this.on_s2c_GetAchievementRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveAchievementTaskRewardRsp, this.on_s2c_ReceiveAchievementTaskRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.TaskChangePush, this.on_s2c_TaskChangePush, this);
        EventMgr.onMsg(proto.Ptl.ReceiveGuildDailyTasksRewardsRsp, this.on_s2c_ReceiveGuildDailyTasksRewardsRsp, this);


        RedMgr.ins.registerCalculateFb(RedDotType.DayTask, this.on_GetDayTaskRedPoint, this);
        RedMgr.ins.registerCalculateFb(RedDotType.WeekTask, this.on_GetWeekTaskRedPoint, this);
        RedMgr.ins.registerCalculateFb(RedDotType.AchievementTask, this.on_AchievementTaskRedPoint, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Battle_Pass, this.red_Battle_Pass, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Guild_Task, this.on_GetGuildTaskRedPoint, this);
        // RedMgr.ins.registerCalculateFb(RedDotType.Gacha_Up_red, this.on_GetGachaUpTaskRedPoint, this);
    }
    request() {
        this.requestGetDailyTasks();
        this.requestWeeklyTasks();
        this.requestAchievementTasks();
    }
    /**
     *请求获得每日任务
     */
    requestGetDailyTasks() {
        let msg = new proto.Msg_GetDailyTasksReq();
        Net.Send(proto.Ptl.GetDailyTasksReq, msg)
    }
    /**
   *请求获得每周任务
   */
    requestWeeklyTasks() {
        let msg = new proto.Msg_GetWeeklyTasksReq;
        Net.Send(proto.Ptl.GetWeeklyTasksReq, msg)
    }
    /**
   *请求获得每周任务
   */
    requestAchievementTasks() {
        let msg = new proto.Msg_GetAchievementTasksReq;
        Net.Send(proto.Ptl.GetAchievementTasksReq, msg)
    }
    /**
    *请求领取每日任务奖励
    */
    requestReceiveDailyTaskReward(taskIds: number[]) {
        let msg = new proto.Msg_ReceiveDailyTaskRewardReq();
        msg.taskIds = taskIds;
        Net.Send(proto.Ptl.ReceiveDailyTaskRewardReq, msg)
    }
    /**
     *请求领取每日活跃奖励
    */
    requestReceiveDailyActivityTaskReward(indexes: number[]) {
        let msg = new proto.Msg_ReceiveDailyActivityTaskRewardReq();
        msg.indexes = indexes;
        Net.Send(proto.Ptl.ReceiveDailyActivityTaskRewardReq, msg)
    }

    /**
    *请求领取每周任务奖励
    */
    requestReceiveWeeklyTaskReward(taskIds: number[]) {
        let msg = new proto.Msg_ReceiveWeeklyTaskRewardReq;
        msg.taskIds = taskIds;
        Net.Send(proto.Ptl.ReceiveWeeklyTaskRewardReq, msg)
    }

    /**
   *请求领取每周活跃奖励
  */
    requestReceiveWeeklyActivityTaskReward(indexes: number[]) {
        let msg = new proto.Msg_ReceiveWeeklyActivityTaskRewardReq();
        msg.indexes = indexes;
        Net.Send(proto.Ptl.ReceiveWeeklyActivityTaskRewardReq, msg)
    }
    /*
    *请求领取成就任务奖励
    */
    requestReceiveAchievementTaskReward(taskIds: number[]) {
        let msg = new proto.Msg_ReceiveAchievementTaskRewardReq();
        msg.taskIds = taskIds;
        Net.Send(proto.Ptl.ReceiveAchievementTaskRewardReq, msg)
    }

    /**
     *请求领取公会活跃奖励
    */
    requestReceiveGuildActivityTaskReward(indexes: number[]) {
        let msg = new proto.Msg_ReceiveGuildTaskChestRewardsReq();
        msg.indexes = indexes;
        Net.Send(proto.Ptl.ReceiveGuildTaskChestRewardsReq, msg)
    }

    requestReceiveGuildDailyTaskReward(taskIds: number[]) {
        let msg = new proto.Msg_ReceiveGuildDailyTasksRewardsReq();
        msg.taskIds = taskIds;
        Net.Send(proto.Ptl.ReceiveGuildDailyTasksRewardsReq, msg)
    }

    on_s2c_GetDailyTasksRsp(msg: proto.Msg_GetDailyTasksRsp) {
        TaskData.ins.initDailyTasks(msg);
        RedMgr.refreshEvent(RedDotType.DayTask);
    }
    on_s2c_GetWeeklyTasksRsp(msg: proto.Msg_GetWeeklyTasksRsp) {
        TaskData.ins.initWeekTasks(msg);
        RedMgr.refreshEvent(RedDotType.WeekTask);
    }
    on_s2c_GetAchievementRsp(msg: proto.Msg_GetAchievementTasksRsp) {
        TaskData.ins.initAchieveTasks(msg);
        RedMgr.refreshEvent(RedDotType.AchievementTask);
    }
    on_s2c_ReceiveDailyTaskRewardRsp(msg: proto.Msg_ReceiveDailyTaskRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveDailyTaskRewardSucc(msg.taskIds);
            RedMgr.refreshEvent(RedDotType.DayTask);
        }
    }
    on_s2c_ReceiveDailyActivityTaskRewardRsp(msg: proto.Msg_ReceiveDailyActivityTaskRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveDailyActiveRewardSucc(msg.indexes);
            RedMgr.refreshEvent(RedDotType.DayTask);
        }
    }
    on_s2c_ReceiveGuildTaskChestRewardsRsp(msg: proto.Msg_ReceiveGuildTaskChestRewardsRsp){
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveGuildActiveRewardSucc(msg.indexes);
            // 刷新任务红点
            RedMgr.refreshEvent(RedDotType.Guild_Task);
        }
    }
    on_s2c_ReceiveWeeklyTaskRewardRsp(msg: proto.Msg_ReceiveWeeklyTaskRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveWeekTaskRewardSucc(msg.taskIds);
            RedMgr.refreshEvent(RedDotType.WeekTask);
        }
    }
    on_s2c_ReceiveWeeklyActivityTaskRewardRsp(msg: proto.Msg_ReceiveWeeklyActivityTaskRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveWeekActiveRewardSucc(msg.indexes);
            RedMgr.refreshEvent(RedDotType.WeekTask);
        }
    }
    on_s2c_ReceiveAchievementTaskRewardRsp(msg: proto.Msg_ReceiveAchievementTaskRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveAchieveTaskRewardSucc(msg.taskIds);
            RedMgr.refreshEvent(RedDotType.AchievementTask);
        }
    }
    on_s2c_ReceiveGuildDailyTasksRewardsRsp(msg: proto.Msg_ReceiveGuildDailyTasksRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            TaskData.ins.receiveGuildTaskRewardSucc(msg.taskIds);
            // 刷新任务红点
            RedMgr.refreshEvent(RedDotType.Guild_Task);
        }
    }
    on_s2c_TaskChangePush(msg: proto.Msg_TaskChangePush) {
        TaskData.ins.updateTask(msg);
        RedMgr.refreshEvent(RedDotType.DayTask);
        RedMgr.refreshEvent(RedDotType.WeekTask);
        RedMgr.refreshEvent(RedDotType.AchievementTask);
        RedMgr.refreshEvent(RedDotType.Battle_Pass);
        EventMgr.emitLocal(LocalEvent.TrialRed);
        RedMgr.refreshEvent(RedDotType.Guild_Task);
    }
    on_GetDayTaskRedPoint() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyTask)) {
            return false;
        }
        let infos = TaskData.ins.getDailyInfos();
        if (infos) {
            for (let key in infos) {
                if (infos[key].isCanReceived) {
                    return true;
                }
            }
        }
        let actives = tab.getData().GetKeyValue_ConfigTable().DailyTaskRewardNeedCount;
        let dailyActiveNum = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_DailyActivity);
        for (let i: number = 0; i < actives.length; i++) {
            if (dailyActiveNum >= actives[i]) {
                if (!TaskData.ins.getIsGetDailyActiveReward(i)) {
                    return true;
                }
            }

        }
        return false;
    }
    on_GetGuildTaskRedPoint(){
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association)) {
            return false;
        }
        if(!AssociationData.ins.getInGuild()){
            return false;
        }
        let infos = TaskData.ins.getGuildInfos();
        if (infos) {
            for (let key in infos) {
                if (infos[key].isCanReceived) {
                    return true;
                }
            }
        }
        let actives = tab.getData().GetKeyValue_ConfigTable().GuildDailyTaskRewardNeedCount;
        const dailyActiveNum = AssociationData.ins.getAssocitionInfo().dailyFinishedTaskNumber;
        for (let i: number = 0; i < actives.length; i++) {
            if (dailyActiveNum >= actives[i]) {
                if (!TaskData.ins.getIsGetGuildActiveReward(i)) {
                    return true;
                }
            }

        }
        return false;
    }
    // on_GetGachaUpTaskRedPoint(){
    //     if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ActivityGachaUp)) {
    //         return false;
    //     }
    //     const actInfos = ActivityData.ins.getAllUpData();
    //     for(let i=0;i<actInfos.length;i++){
    //         const info = actInfos[i];
    //         const actTab = tab.getData().GachaUpTableById.getValue(info.activityTable.Param1);
    //         const taskIds = actTab.TaskIds;
    //         for(let i=0;i<taskIds.length;i++){
    //            return TaskData.ins.getGachaUpTaskInfo(taskIds[i]).isCanReceived;
    //         }
    //     }
    //     return false;
    // }
    on_GetWeekTaskRedPoint() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WeeklyTask)) {
            return false;
        }
        let infos = TaskData.ins.getWeekInfos();
        if (infos) {
            for (let key in infos) {
                if (infos[key].isCanReceived) {
                    return true;
                }
            }
        }
        let actives = tab.getData().WeeklyTaskBoxTable;
        let weekActiveNum = ItemData.ins.getCount(tab.CurrencyType.CurrencyType_WeeklyActivity);
        for (let i: number = 0; i < actives.length; i++) {
            if (weekActiveNum >= actives[i].Id) {
                if (!TaskData.ins.getIsGetWeekActiveReward(i)) {
                    return true;
                }
            }

        }
        return false;
    }
    on_AchievementTaskRedPoint() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_AchievementTask)) {
            return false;
        }
        let infos = TaskData.ins.getAchievementInfos();
        if (infos) {
            for (let key in infos) {
                if (infos[key].isCanReceived) {
                    return true;
                }
            }
        }
        return false;
    }
    red_Battle_Pass() {
        let stateToChange = {};
        Object.keys(tab.BattlePassTab).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key)) {
                const data = BattlePassDataMgr.ins.getDataByPassName(_key);
                if (data) {
                    stateToChange[_key] = {};
                    for (let i = 0; i < data.length; i++) {
                        const id = data[i].Id
                        stateToChange[_key][id] = BattlePassDataMgr.ins.getAllReceiveTaskId(id).length > 0;
                    }
                }
            }
        })
        return stateToChange;
    }
}