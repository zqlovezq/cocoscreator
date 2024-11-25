import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { TaskData } from '../../task/TaskData';
import { tab } from '../../../../Table/table_gen';
import { RedMgr } from '../../../mgr/RedMgr';
import { RedDotType } from '../../../red/RedDotType';
const { ccclass, property } = _decorator;

@ccclass('BattlePassDataMgr')
export class BattlePassDataMgr extends AbsControl {
    private _battleMap: Map<number, proto.BattlePass> = new Map();
    private _battlePassMap: Map<tab.BattlePassTab, tab.BattlePassTable[]> = new Map();
    private static _instance: BattlePassDataMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BattlePassDataMgr();
        }
        return this._instance;
    }
    initPassBattle(msg: proto.Msg_GetBattlePassInfoMapRsp) {
        this._battleMap.clear();
        this._battlePassMap.clear();
        const passMap = msg.battlePassMap;
        Object.keys(passMap).forEach(key => {
            if (passMap[key].tasks) {
                passMap[key].tasks.sort((task1, task2) => {
                    return task1.id - task2.id;
                })
            }
            this._battleMap.set(Number(key), passMap[key] as proto.BattlePass)
        })

        // 将所有战令数据按照页签存储
        this._battleMap.forEach((val, key) => {
            const battlePassTab = tab.getData().BattlePassTableById.getValue(key);
            if (battlePassTab) {
                const tabName = battlePassTab.BattlePassTab;
                if (tabName && battlePassTab.IsBattleBtn) {
                    if (this._battlePassMap.has(tabName)) {
                        const arr = this._battlePassMap.get(tabName);
                        arr.push(battlePassTab);
                    } else {
                        this._battlePassMap.set(tabName, [battlePassTab]);
                    }
                }
            }
        })
        TaskData.ins.initBattlePassTasks(this._battleMap);
        RedMgr.refreshEvent(RedDotType.Battle_Pass);
    }
    getBattleMap(){
        return this._battleMap;
    }
    // 更新tasks
    refreshTasks(id:number,tasks:proto.ITask[]){
        const allTasks = this._battleMap.get(id).tasks;
        for(let i=0;i<tasks.length;i++){
            for(let k = 0;k<allTasks.length;k++){
                if(tasks[i].id===allTasks[k].id){
                    allTasks[k] = tasks[i];
                }
            }   
        }
    }
    // 通过id直接获取数据
    getBattlePassData(id: number): proto.BattlePass {
        return this._battleMap.get(id);
    }
    // 通过id获取所有的可以领取的任务
    getAllReceiveTaskId(id:number){
        const result = [];
        const battlePass = this.getBattlePassData(id);
        if(!battlePass){
            return result;
        }
        for(let i=0;i<battlePass.tasks.length;i++){
            const taskid = battlePass.tasks[i].id;
            const taskInfo = TaskData.ins.getBattlePassTaskInfo(taskid)
            if(!battlePass.isBoughtAdvance){
                if(taskInfo.isCanReceived){
                    result.push(taskid)
                }
            }else{
                if(!taskInfo.isAdvanceReceived&&taskInfo.progress>=taskInfo.taskTable.FinishParam1){
                    result.push(taskid)
                }
            }
        }
        return result;
    }
    // 通过页签获取数据
    getDataByPassName(tabName: tab.BattlePassTab) {
        return this._battlePassMap.get(tabName);
    }
    buyBattlePassData(id: number): proto.BattlePass {
        const passData = this.getBattlePassData(id);
        passData.isBoughtAdvance = true;
        return passData;
    }
    // 获取默认的页签name 并且有可领取的奖励
    getDefaultPassName(){
        let name = tab.BattlePassTab.BattlePassTab_WorldBossPass;
        let defaultName =  tab.BattlePassTab.BattlePassTab_WorldBossPass;
        let changeView = false;
        this._battlePassMap.forEach((key,value)=>{
            let result = [];
            for(let i=0;i<key.length;i++){
                const _result = this.getAllReceiveTaskId(key[i].Id);
                result = result.concat(_result)
            }
            if(result.length>0&&name>=value){
                name = value;
                changeView = true;
            }
            if(defaultName>value){
                defaultName = value;
            }
        })
        return changeView?name:defaultName;
    }
}


