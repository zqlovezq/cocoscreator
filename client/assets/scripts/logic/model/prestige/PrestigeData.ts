import { _decorator, Component, Node } from 'cc';
import { IClear } from '../../../framework/base/IAbs';
import { TaskInfo } from '../task/TaskInfo';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { EventMgr } from '../../mgr/EventMgr';
import { LocalEvent } from '../../define/LocalEvent';
const { ccclass, property } = _decorator;

/**
 * 
 * PrestigeData
 * zhudingchao
 * Thu Jun 06 2024 10:49:08 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/prestige/PrestigeData.ts
 *
 */

@ccclass('PrestigeData')
export class PrestigeData implements IClear {
    private taskMap: Map<number, TaskInfo>;
    private _level: number = 0;
    private static _instance: PrestigeData;
    private _questLogTable: tab.QuestLogTable;
    private isInit = false;
    private _attrMap: Map<number, number>;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new PrestigeData();
        }
        return this._instance;
    }
    purge() {

    }
    initData(msg: proto.Msg_GetQuestLogsRsp) {

        this.isInit = true;
        if (this.taskMap) {
            this.taskMap.clear();
        }
        this.taskMap = new Map();
        for (let key in msg.tasks) {
            let info = new TaskInfo();
            info.merge(msg.tasks[key]);
            this.taskMap.set(info.taskTabId, info);
        }
        this.level = msg.level;
    }
    get level() {
        return this._level;
    }
    set level(lv: number) {
        if (this._level != lv) {
            this._level = lv;
            this._questLogTable = null;
            this.initAttrMap();
            EventMgr.emitLocal(LocalEvent.Prestige_Change);
        }
    }
    get questLogTable() {
        if (!this._questLogTable) {
            this._questLogTable = tab.getData().QuestLogTableByLevel.getValue(this.level);
        }
        return this._questLogTable;
    }
    getTaskInfoByTableId(taskTabId: number) {
        return this.taskMap.get(taskTabId);
    }
    getHomeShowTaskInfo() {
        if (!this.isInit) {
            return null;
        }

        let taskids = this.questLogTable.TaskIds;
        for (let key in taskids) {
            let info = this.getTaskInfoByTableId(taskids[key]);
            if (info && !info.isReceived) {
                return info;
            }
        }
        return this.getTaskInfoByTableId(taskids[0]);
    }
    receiveQuestLog(msg: proto.Msg_ReceiveQuestLogRewardRsp) {
        this.taskMap.forEach((value) => {
            let index = msg.taskIds.indexOf(value.id);
            if (index >= 0) {
                value.isReceived = true;
            }
        })
        EventMgr.emitLocal(LocalEvent.Prestige_Change);
    }
    updateTask(msg: proto.Msg_TaskChangePush) {
        let isChange = false;
        if (msg.addedTasks && msg.addedTasks.length > 0) {
            let tasks = msg.addedTasks;
            for (let key in tasks) {
                let info = new TaskInfo();
                info.merge(tasks[key]);
                if (info.taskTable.TaskType == tab.TaskType.TaskType_QuestLog) {
                    if (this.taskMap) {
                        this.taskMap.set(info.taskTabId, info);
                    }

                }
            }
        }
        if (msg.finishedTasks && msg.finishedTasks.length > 0) {
            let tasks = msg.finishedTasks;
            for (let key in tasks) {
                let taskTab = tab.getData().TaskTableById.getValue(tasks[key].taskTabId);
                let info: TaskInfo = null;
                if (taskTab.TaskType == tab.TaskType.TaskType_QuestLog) {
                    if (this.taskMap) {
                        info = this.taskMap.get(tasks[key].taskTabId)
                    }
                }
                if (info) {
                    info.merge(tasks[key]);
                    isChange = true;
                }
            }
        }
        if (msg.removedTasks && msg.removedTasks.length > 0) {
            let tasks = msg.removedTasks;
            for (let key in tasks) {
                let taskTab = tab.getData().TaskTableById.getValue(tasks[key].taskTabId);
                if (taskTab.TaskType == tab.TaskType.TaskType_QuestLog) {
                    if (this.taskMap) {
                        this.taskMap.delete(tasks[key].taskTabId);
                    }

                }
            }
        }
        if (isChange) {
            EventMgr.emitLocal(LocalEvent.Prestige_Change);
        }
    }
    getIsRedPoint() {
        let currTable = tab.getData().QuestLogTableByLevel.getValue(this.level);

        // 所有任务完成
        const maxLevel = tab.getData().QuestLogTable[tab.getData().QuestLogTable.length-1].Level
        if(this.level>=maxLevel){
            return false
        }

        let isCanLevel = true;
        if (currTable) {
            let taskIds = currTable.TaskIds;
            for (let key in taskIds) {

                let info = this.taskMap.get(taskIds[key]);
                if (info == null){
                    return false
                }
                if (info && info.isCanReceived) {
                    return true;
                }
                if (info&&currTable.Level == PrestigeData.ins.level) {
                    if (isCanLevel) {
                        isCanLevel = info.isReceived;
                    }
                }
            }
            if (isCanLevel && currTable.Level == PrestigeData.ins.level) {
                return true;
            }
        }
        return false;
    }
    /**冒险日志属性加成map */
    get attrMap() {
        if (!this._attrMap) {
            this.initAttrMap();
        }
        return this._attrMap;
    }
    private initAttrMap() {
        if (!this._attrMap) {
            this._attrMap = new Map();
        } else {
            this._attrMap.clear();
        }
        let attrTypes = this.questLogTable.QuestLogAttrType;
        for (let key in attrTypes) {
            // let table = tab.getData().EquipAttrTableById.getValue(this.baseAttr[key]);
            // let addValue=

            if (this._attrMap.has(attrTypes[key])) {
                let value = this._attrMap.get(attrTypes[key]);
                this._attrMap.set(attrTypes[key], value + this.questLogTable.QuestLogAttrValue[key]);
            } else {
                this._attrMap.set(attrTypes[key], this.questLogTable.QuestLogAttrValue[key]);
            }
        }
    }
}