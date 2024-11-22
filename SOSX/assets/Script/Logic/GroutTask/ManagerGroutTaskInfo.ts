/*
 * @Descripttion: 格古特任务数据管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber } from "../Common/CommonInterface";

export default class ManagerGroutTaskInfo {
    private _running_task_data: proto.ITaskData; //登录正在进行的任务数据
    private _push_task_data: proto.ITaskData; //非登录推送的任务数据
    private _current_task_step: number = kOneNumber; //当前任务阶段
    private _total_task_count: number = kOneNumber; //当前阶段任务的总数
    private _bFinish: boolean = false; //所有阶段奖励是否都领取完了
    private _cacheOpenTaskIdx: number = kZeroNumber;
    
    private static _instance: ManagerGroutTaskInfo   = null;
    public static getInstance(): ManagerGroutTaskInfo {
        if (!ManagerGroutTaskInfo._instance){
            ManagerGroutTaskInfo._instance = new ManagerGroutTaskInfo();
        }
        return ManagerGroutTaskInfo._instance;
    }
   
    public saveTaskData(data: proto.ITaskData, step: number, bLogin: boolean, bFinish: boolean){
        this._bFinish = bFinish;
        //bLogin  && (this._running_task_data = data);
        this._running_task_data = data;
        !bLogin && (this._push_task_data = data);
        step >= this._current_task_step && Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyRefreshGroutStepTask);
        this._current_task_step = step;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateRunningGroutTask);
    }

    public getPushData(){return this._push_task_data;}

    /*public changeRunningTaskData(data: proto.ITaskData){
        this._running_task_data = data;
        Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyUpdateRunningGroutTask);
    }*/
    
    public getRunningTaskData(){return this._running_task_data;}
    
    public cleanPushData(){this._push_task_data = null;}

    public incrementStep(){
        /*this._current_task_step++;
        this._current_task_step = (this._current_task_step > tab.Data.GetKeyValue_ConfigTable().GroutTaskMaxStep) ? 
                                    tab.Data.GetKeyValue_ConfigTable().GroutTaskMaxStep : this._current_task_step;*/
    }

    public getTaskStep(){return this._current_task_step;}

    public setTotalTaskCount(count: number){
        this._total_task_count = count;
    }

    public getTotalTaskCount(){return this._total_task_count;}

    public checkGroutEntryIsOpen(){
       return !this._bFinish;
    }

    public saveOpenTaskIdx(idx: number){
        //if(idx <= this._cacheOpenTaskIdx){return;}
        this._cacheOpenTaskIdx = idx;
    }

    public getOpenTaskIdx(){return this._cacheOpenTaskIdx;}

}
