import { _decorator } from "cc";
import { AbsControl } from "../../../../framework/base/IAbs";
import { proto } from "client_protocol";
import { tab } from "../../../../Table/table_gen";
import { RedMgr } from "../../../mgr/RedMgr";
import { RedDotType } from "../../../red/RedDotType";
import { LevelRewardState } from "../../../../Common/script/EnumTypeMgr";

const { ccclass, property } = _decorator;

/** 英雄 */
export class BattleMainDataControl extends AbsControl {
    private stageInfo: proto.Msg_GetMainStageInfoRsp = null;
    private static _instance: BattleMainDataControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BattleMainDataControl();
        }
        return this._instance;
    }
    initData(data: proto.Msg_GetMainStageInfoRsp) {
        this.stageInfo = data;
        RedMgr.ins.registerCalculateFb(RedDotType.StageFirstReward, this.setStageRed, this);
        this.refreshHeroRedData();
    }
    setStageRed(){
        return this.getReceiveStageId()>0
    }
    /* 刷新英雄红点数据 */
    refreshHeroRedData() {
        RedMgr.refreshEvent(RedDotType.StageFirstReward);
    }
    /* 获取已经通关的关卡id列表 */
    getStageClearIds() {
        if(!this.stageInfo){
            return [];
        }
        return this.stageInfo.clearedStageIds;
    }
    /* 获取最新的一个通关id */
    getLastStageId(){
        if(!this.stageInfo){
            return 101
        }
        if(this.stageInfo.clearedStageIds.length===0){
            return 101
        }
        return this.stageInfo.clearedStageIds[this.stageInfo.clearedStageIds.length-1];
    }
    /**
     * 当前关卡是否已经通关
     * @param id 
     */
    getIsPasstStageByStageId(id:number):boolean{
        let clearIds = this.getStageClearIds();
        if(clearIds.length==0){
            return false;
        }else{
            return clearIds.indexOf(id)>=0;
        }
    }
    /* 获取当前正在战斗的id */
    getCurFightStageId() {
        // return this._stageInfo.fightingMainStageId;
        const clearIds = this.getStageClearIds();
        if (clearIds.length === 0) {
            return 101;
        }
        const lastPveStageTab = tab.getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
        const curPveStageId = lastPveStageTab.NextLevelId?lastPveStageTab.NextLevelId:lastPveStageTab.StageId;
        return curPveStageId;
    }
     /* 获取玩家通关的的章节Id*/
     getPassChapterId() {
        const clearIds = this.getStageClearIds();
        if (clearIds.length === 0) {
            return 0;
        }
        let stageId =clearIds[clearIds.length - 1];
        
        const nextStageId =  tab.getData().PveStageTableByStageId.getValue(stageId).NextLevelId;
        if(Math.floor(nextStageId/100)>Math.floor(stageId / 100)){
            return Math.floor(stageId / 100);
        }else{
            return Math.floor(stageId / 100)-1;
        }
    }
   
    /* 获取玩家最新的章节 */
    getChapterId(id?: number) {
        let stageId = id ? id : this.getCurFightStageId();
        return Math.floor(stageId / 100)
    }
    /* 已领取的首通奖励列表 */
    getReceiveFirstRewardIds() {
        return this.stageInfo.receivedMainFirstRewardIds;
    }
    /* 添加首通奖励 */
    addReceiveFirstRewardId(_stageId: number, _indexs?: number[]) {
        let objArr = [];
        for (let i = 0; i < _indexs.length; i++) {
            let obj: proto.IFirstRewardId = {
                stageId: _stageId,
                index: _indexs[i]
            }
            objArr.push(obj)
        }
        this.stageInfo.receivedMainFirstRewardIds = this.stageInfo.receivedMainFirstRewardIds.concat(objArr);
    }
    getReceiveFirstRewardById(id: number, idx: number) {
        for (let i = 0; i < this.stageInfo.receivedMainFirstRewardIds.length; i++) {
            const data: proto.IFirstRewardId = this.stageInfo.receivedMainFirstRewardIds[i];
            if (data.stageId == id && idx == data.index) {
                return data
            }
        }
        return null;
    }
    /* 当前关卡的最大存活时间 */
    getCurMaxAliveSecond(id?:number) {
        // 是否完全通过
        const stageId = id?id:this.getCurFightStageId();
        let clearIds = this.getStageClearIds();
        let maxAliveSecond = tab.getData().PveStageTableByStageId.getValue(stageId).Time;
        if(clearIds.indexOf(stageId)>-1){
            return maxAliveSecond;
        }else{
            return this.stageInfo.currentMainStageMaxAliveSeconds;
        }
    }
    /* 已经通关的存活时间 */
    getClearedStageAliveSecond(levelId: number) {
        return tab.getData().PveStageTableByStageId.getValue(levelId).Time;
    }
    /* 当前关卡是否解锁 */
    getStageIsLock(id: number): boolean {
        if (id === 1) {
            return false;
        }
        const clearIds = this.getStageClearIds();
        const lastPveStageTab = tab.getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
        if (!lastPveStageTab) {
            return true;
        }
        const curPveStageId = lastPveStageTab.NextLevelId?lastPveStageTab.NextLevelId:lastPveStageTab.StageId;
        let levelArr = tab.getData().MainChapterTableById.getValue(id).StageIds;
        for (let i = 0; i < levelArr.length; i++) {
            let stageId = levelArr[i];
            if (curPveStageId >= stageId) {
                return false
            }
        }
        return true;
    }
    /* 返回还没有领取奖励的stageId */
    getReceiveStageId(): number {
        let rewardId = 0;
        const stageId = this.getCurFightStageId();
        const ChapterFirstTab = tab.getData().ChapterFristRewardTable;
        for (let i = 0; i < ChapterFirstTab.length; i++) {
            if (rewardId) {
                break;
            }
            const id = ChapterFirstTab[i].Id;
            if (id > stageId) {
                break;
            } else if (id < stageId) {
                // 通关的列表 判断是否全部领取了奖励
                for (let k = 0; k < 3; k++) {
                    let isGot = this.getReceiveFirstRewardById(id, k);
                    if (isGot) {
                        continue
                    } else {
                        rewardId = id;
                        break;
                    }
                }
            } else {
                // 判断当前的最大通关时间内 是否有奖励可以领 但是没有领
                const maxTime = this.getCurMaxAliveSecond();
                const rewardTabData = tab.getData().ChapterFristRewardTableById.getValue(stageId);
                for (let j = 0; j < 3; j++) {
                    if (rewardTabData.Time[j] > maxTime) {
                        continue
                    } else {
                        let isGot = this.getReceiveFirstRewardById(id, j);
                        if (isGot) {
                            continue
                        } else {
                            const isPass = this.getIsPasstStageByStageId(stageId);
                            if(j===2){
                                if(isPass){
                                    rewardId = stageId;
                                }
                            }else{
                                rewardId = stageId;
                            }
                            break;
                        }
                    }
                }
            }
        }
        return rewardId
    }
    // 获取当前列表可以领取奖励的所有idexs
    getAllIndex(stageId:number){
        const result = [];
        const curStageId = this.getCurFightStageId();
        const rewardTabData = tab.getData().ChapterFristRewardTableById.getValue(stageId);
        for (let i = 0; i < rewardTabData.Time.length; i++) {
            const gotRewards = this.getReceiveFirstRewardById(rewardTabData.Id, i);
            let isGot = false;
            if (gotRewards) {
                isGot = true;
            }
            let state = LevelRewardState.None;
            if (rewardTabData.Id > curStageId) {
                state = LevelRewardState.NotAchieved
            } else if (rewardTabData.Id <curStageId) {
                // 判断是否领取
                if (isGot) {
                    state = LevelRewardState.Got;
                } else {
                    state = LevelRewardState.Receive;
                }
            } else {
                // 获取当前的时间
                const maxTime = this.getCurMaxAliveSecond();
                if (maxTime < rewardTabData.Time[i]) {
                    state = LevelRewardState.NotAchieved
                } else {
                    // 判断是否领取
                    if (isGot) {
                        state = LevelRewardState.Got;
                    } else {
                        // state = LevelRewardState.Receive;
                        if(i==rewardTabData.Time.length-1){
                            // 是否通关
                            if(this.getIsPasstStageByStageId(stageId)){
                                state = LevelRewardState.Receive;
                            }else{
                                state = LevelRewardState.NotAchieved;
                            }
                        }else{
                            state = LevelRewardState.Receive;
                        }
                    }
                }
            }
            if(state===LevelRewardState.Receive){
                result.push(i);
            }
        }
        return result;
    }
    /* 获取当前主线列表最大关卡 */
    getMaxPveMainStage():tab.PveStageTable{
        return tab.getData().PveStageTableByStageId.getValue(3505);
    }
    /* 当前是否主线全部通关 */
    isAllStageClear(){
        const clearIds = this.getStageClearIds();
        return clearIds.indexOf(3505)>-1;
    }
}