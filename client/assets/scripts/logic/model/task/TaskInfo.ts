import { _decorator, Component, Node } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
const { ccclass, property } = _decorator;

/**
 * 
 * TaskInfo
 * zhudingchao
 * Tue Jun 04 2024 16:43:09 GMT+0800 (中国标准时间)
 * db://assets/scripts/logic/model/task/TaskInfo.ts
 *
 */

@ccclass('TaskInfo')
export class TaskInfo extends proto.Task {
    private _taskTable:tab.TaskTable;
    public isUnLock:boolean=true;
    merge(item: proto.ITask) {
        for (const key in item) {
            this[key] = item[key]
        }
    }
    get taskTable(){
        if(!this._taskTable){
            this._taskTable=tab.getData().TaskTableById.getValue(this.taskTabId);
        }
        return this._taskTable;
    }
    get isCanReceived(){
        return !this.isReceived&&this.progress>=this.taskTable.FinishParam1;
    }

}