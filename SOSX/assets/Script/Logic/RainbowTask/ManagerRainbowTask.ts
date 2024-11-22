/*
 * @Descripttion: 彩虹任务管理类
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { kOneNumber, kZeroNumber} from "../Common/CommonInterface";
import { RedDotType } from "../Common/ReddotManager";
import { ItemState } from "../Common/SeasonRankCommonFunc";

/**
 * 彩虹任务状态
 */
 export enum RainbowTaskState{
    UnOpen          = 0, //未开启
    AlreadyOpen     = 1, //已开启
    UnFinish        = 2, //未完成
    AlreadyFinish   = 3, //已完成
}

export default class ManagerRainbowTask {
    private _cacheOpenTaskIdx   : number = kZeroNumber;
    private _bCanUpLvTask       : boolean = false; //是否可以升级任务【暗含意思没有升级过】
    private _overUTC            : number; //任务结束时间
    private _leftWatchAdCount   : number; //剩余看广告刷新任务次数
    private _bCanFreeRefreshTask: boolean; //是否可以免费刷新任务
    private _pushTaskData       : proto.IRainbowTaskPushData;
    private _task_over_map      : Map<number, boolean> = new Map<number, boolean>(); //表示该周期所有彩虹任务都完成并且奖励都领取了
    
    private static _instance: ManagerRainbowTask = null;

    public static getInstance(): ManagerRainbowTask {
        if (!ManagerRainbowTask._instance){
            ManagerRainbowTask._instance = new ManagerRainbowTask();
        }
        return ManagerRainbowTask._instance;
    }
    
    public saveOpenTaskIdx(idx: number){
        if(idx <= this._cacheOpenTaskIdx){
            return;
        }
        
        this._cacheOpenTaskIdx = idx;
    }

    public getOpenTaskIdx(){
        return this._cacheOpenTaskIdx;
    }

    public saveUpLvTask(bCanUpLvTask: boolean){
        this._bCanUpLvTask = bCanUpLvTask;
    }

    public getUpLvTask(){
        return this._bCanUpLvTask;
    }

    public saveTaskOverUTC(time: number){
        this._overUTC = time;
    }

    public getTaskOverUTC(){
        return this._overUTC;
    }

    public saveLeftWatchAdCount(cnt: number){
        this._leftWatchAdCount = cnt;
    }

    public decreaseLeftWatchAdCount(){
        this._leftWatchAdCount > kZeroNumber && (this._leftWatchAdCount -= kOneNumber);
    }
    
    public getLeftWatchAdCount(){
        return this._leftWatchAdCount;
    }

    public saveCanFreeRefreshTask(bCanFreeRefresh: boolean){
        this._bCanFreeRefreshTask = bCanFreeRefresh;
    }

    public getCanFreeRefreshTask(){
        return this._bCanFreeRefreshTask;
    }

    public savePushRainbowTaskData(data: proto.IRainbowTaskPushData){
        this._pushTaskData = data;
    }

    public getPushRainbowTaskData(){
        return this._pushTaskData;
    }

    public cleanPushRainbowTaskData(){
        this._pushTaskData = null;
    }

    public saveRainbowTaskOverState(bHave: boolean){
        this._task_over_map.set(RedDotType.RainbowTask, bHave);
    }

    public getRainbowFinishOverState(){
        if(this._task_over_map.has(RedDotType.RainbowTask)){
            return this._task_over_map.get(RedDotType.RainbowTask);
        }
        return true;
    }
}

/**
 * Description: 获取彩虹任务奖励的物品状态
 * @param state     物品的TaskState
 * @param taskState 任务的TaskState
 */
export function getRewardItemState(state: proto.TaskState, taskState: RainbowTaskState){
    if(RainbowTaskState.UnOpen == taskState || RainbowTaskState.UnFinish == taskState){
        return ItemState.LOCK;
    }

    switch(state){
        case proto.TaskState.HaveReward:
            return ItemState.ALREADY_RECEIVE;
        
        case proto.TaskState.Reward:
            return ItemState.CAN_RECEIVE;

        case proto.TaskState.UnOpen:
            return ItemState.LOCK;
    }
}

/**
 * 维护彩虹任务奖励状态的约束
 */
export interface IParamRainbowRewardState{
    leftState: proto.TaskState;
    rightState: proto.TaskState;
    taskState: RainbowTaskState;
    progVal: number;
    idx: number;
}