import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { TaskData } from '../../task/TaskData';
import { tab } from '../../../../Table/table_gen';
import { TRIALLAYER, TRIALTASK } from '../../../../Common/script/EnumTypeMgr';
import { MallDataMgr } from '../../shop/MallDataMgr';
const { ccclass, property } = _decorator;

@ccclass('RookieTaskMgr')
export class RookieTaskMgr extends AbsControl {
    private _taskMap: Map<number, proto.NewPlayerTrial> = new Map();
    private _mallMap: Map<number, tab.MallItemTabe[]> = new Map();
    private stateToChange = {};
    private static _instance: RookieTaskMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new RookieTaskMgr();
        }
        return this._instance;
    }
    initTask(msg: proto.Msg_GetNewPlayerTrialMapRsp) {
        const taskMap = msg.newPlayerTrialMap;
        Object.keys(taskMap).forEach(key => {
            this._taskMap.set(taskMap[key].id, taskMap[key] as proto.NewPlayerTrial);
        })

        // 初始化商品信息
        for (let i = 0; i < tab.getData().ActivityNewPlayerTaskTable.length; i++) {
            const mallId = tab.getData().ActivityNewPlayerTaskTable[i].MallId;
            this._mallMap.set(mallId, []);
        }
        for (let k = 0; k < tab.getData().MallItemTabe.length; k++) {
            const itemTab = tab.getData().MallItemTabe[k];
            if (this._mallMap.has(itemTab.MallId)) {
                this._mallMap.get(itemTab.MallId).push(itemTab);
            }
        }

        TaskData.ins.initTrialTasks(this._taskMap);
    }
    getMallTabs(id: number) {
        return this._mallMap.get(id);
    }
    getTrialTask(id: tab.OpenFunctionName) {
        return this._taskMap.get(id);
    }
    // 设置试炼红点数据
    // 检测id数据里面是否有可领取的数据
    handleTask(ID: number, view: TRIALTASK, day: number, layer: number) {
        const opName1 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
        const opName2 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
        let trialInfo1 = RookieTaskMgr.ins.getTrialTask(opName1);
        let trialInfo2 = RookieTaskMgr.ins.getTrialTask(opName2);
        let cur_day = -1;
        if(layer==TRIALLAYER.ROOKIE&&trialInfo1){
            cur_day = trialInfo1.unlockedDays
        }
        if(layer==TRIALLAYER.ELITE&&trialInfo2){
            cur_day = trialInfo2.unlockedDays
        }
        const newPlayerData = tab.getData().ActivityNewPlayerTaskTableById.getValue(ID);
        // 未解锁返回false
        if (day > (cur_day - (layer - 1) * 7)) {
            return false
        }
        if (view < TRIALTASK.GIFT) {
            const taskArr = newPlayerData['TaskIds' + view]
            for (let i = 0; i < taskArr.length; i++) {
                const taskData = TaskData.ins.getTrialTaskInfo(taskArr[i]);
                if (taskData && taskData.isCanReceived) {
                    return true;
                }
            }
            return false;
        } else {
            const arr = this._mallMap.get(newPlayerData.MallId);
            const mallItemId = arr[0].Id;
            const maxCount = arr[0].LimitCount;
            const boughtCount = MallDataMgr.ins.getFixedShopData(newPlayerData.MallId).get(mallItemId);
            return boughtCount < maxCount;
        }
    }
    checkIsRed(layer: number, day?: number, view?: number) {
        const data = this.stateToChange[layer] ?? {};
        let isRed = false;
        for (let i = 1; i <= 7; i++) {
            const obj = data[i];
            if (!obj) {
                continue;
            }
            if (view) {
                if (day === i) {
                    isRed = obj[view];
                    break;
                }
            } else {
                if (day) {
                    if (day === i) {
                        isRed = obj[TRIALTASK.TASK1] || obj[TRIALTASK.TASK2] || obj[TRIALTASK.GIFT];
                        break;
                    }
                } else {
                    if (obj[TRIALTASK.TASK1] || obj[TRIALTASK.TASK2] || obj[TRIALTASK.GIFT]) {
                        isRed = true;
                        break;
                    }
                }
            }
        }
        return isRed;
    }
    red_trialRed() {
        for (let k = 1; k <= 2; k++) {
            this.stateToChange[k] = {};
            for (let i = 1; i <= 7; i++) {
                const obj = {};
                this.stateToChange[k][i] = obj;
                const ID = k * 100 + i;
                obj[TRIALTASK.TASK1] = this.handleTask(ID, TRIALTASK.TASK1, i, k);
                obj[TRIALTASK.TASK2] = this.handleTask(ID, TRIALTASK.TASK2, i, k);
                obj[TRIALTASK.GIFT] = this.handleTask(ID, TRIALTASK.GIFT, i, k);
            }
        }
    }
    // 是否有可领取的积分奖励
    red_score_red(type: TRIALLAYER) {
        let isRed:boolean = false;
        const openName1 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
        const openName2 = tab.OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
        let openName = -1
        if(type===TRIALLAYER.ROOKIE){
            openName = openName1
        }else if(type===TRIALLAYER.ELITE){
            openName = openName2
        }
        if(openName<0){
            return false
        }
        const data = RookieTaskMgr.ins.getTrialTask(openName);
        if(!data){
            return false
        }
        for (let i = 0; i < 6; i++) {
            const id = type * 100 + (6 - i);
            const scoreTab = tab.getData().ActivityNewPlayerTaskScoreTableById.getValue(id);
            const newPlayerTaskTab = tab.getData().ActivityNewPlayerTaskTableById.getValue(scoreTab.Id);
            const newPlayertrial = this.getTrialTask(newPlayerTaskTab.Group);
            const socre = newPlayertrial.score;
            const receiveIds = newPlayertrial.receivedScoreIds;
            const isGot = receiveIds.indexOf(scoreTab.Id)>-1;
            isRed = !isGot&&socre>=scoreTab.Score;
            if(isRed){
                break
            }
        }
        return isRed;
    }
}


