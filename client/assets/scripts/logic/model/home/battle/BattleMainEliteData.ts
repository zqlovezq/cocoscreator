import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { tab } from '../../../../Table/table_gen';
import { TRIALLAYER } from '../../../../Common/script/EnumTypeMgr';
import { BattleMainDataControl } from './BattleMainDataControl';
const { ccclass, property } = _decorator;

@ccclass('BattleMainEliteData')
export class BattleMainEliteData extends AbsControl {
    public eliteStageInfo: proto.Msg_GetEliteStageInfoRsp = null;
    private static _instance: BattleMainEliteData;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new BattleMainEliteData();
        }
        return this._instance;
    }
    initData(msg: proto.Msg_GetEliteStageInfoRsp) {
        this.eliteStageInfo = msg;
    }
    /* 获取已经通关的关卡id列表 */
    getStageClearIds() {
        if (!this.eliteStageInfo) {
            return [];
        }
        return this.eliteStageInfo.clearedStageIds;
    }
    /* 获取最新的一个通关id */
    getLastStageId() {
        if (!this.eliteStageInfo) {
            return 100101
        }
        if (this.eliteStageInfo.clearedStageIds.length === 0) {
            return 100101
        }
        return this.eliteStageInfo.clearedStageIds[this.eliteStageInfo.clearedStageIds.length - 1];
    }
    /**
    * 当前关卡是否已经通关
    * @param id 
    */
    getIsPasstStageByStageId(id: number): boolean {
        let clearIds = this.getStageClearIds();
        if (clearIds.length == 0) {
            return false;
        } else {
            return clearIds.indexOf(id) >= 0;
        }
    }
    /* 获取当前正在战斗的id */
    getCurFightStageId() {
        // return this._stageInfo.fightingMainStageId;
        const clearIds = this.getStageClearIds();
        if (clearIds.length === 0) {
            return 100101;
        }
        const lastPveStageTab = tab.getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
        const curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
        return curPveStageId;
    }
    /* 获取玩家通关的的章节Id*/
    getPassChapterId() {
        const clearIds = this.getStageClearIds();
        if (clearIds.length === 0) {
            return 100101;
        }
        let stageId = clearIds[clearIds.length - 1];

        const nextStageId = tab.getData().PveStageTableByStageId.getValue(stageId).NextLevelId - 100000;
        const caleStageId = stageId-100000;
        if (Math.floor(nextStageId / 100) > Math.floor(caleStageId / 100)) {
            return Math.floor(caleStageId / 100);
        } else {
            return Math.floor(caleStageId / 100) - 1;
        }
    }
    /* 获取玩家最新的章节 */
    getChapterId(id?: number) {
        let stageId = id ? id : this.getCurFightStageId();
        return Math.floor((stageId - 100000) / 100)
    }
    /* 已领取的首通奖励列表 */
    getReceiveFirstRewardIds() {
        return this.eliteStageInfo.receivedFirstRewardStageIds;
    }
    /* 添加首通奖励 */
    addReceiveFirstRewardId(stageId: number) {
        this.eliteStageInfo.receivedFirstRewardStageIds.push(stageId)
    }
    getReceiveFirstRewardById(id: number) {
        for (let i = 0; i < this.eliteStageInfo.receivedFirstRewardStageIds.length; i++) {
            const stageId: number = this.eliteStageInfo.receivedFirstRewardStageIds[i];
            if (stageId == id) {
                return stageId
            }
        }
        return null;
    }
    /* 当前关卡的最大存活时间 */
    getCurMaxAliveSecond(id?: number) {
        // 是否完全通过
        const stageId = id ? id : this.getCurFightStageId();
        let clearIds = this.getStageClearIds();
        let maxAliveSecond = tab.getData().PveStageTableByStageId.getValue(stageId).Time;
        if (clearIds.indexOf(stageId) > -1) {
            return maxAliveSecond;
        } else {
            return this.eliteStageInfo.currentStageMaxAliveSeconds;
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
        // 当前的章节id要小于普通关卡的章节id
        const passNormalStage = BattleMainDataControl.ins.getPassChapterId();
        const isPassAll = BattleMainDataControl.ins.isAllStageClear();
        if (isPassAll&&this.getPassChapterId()===34) {
            return false;
        }
        if (passNormalStage < id) {
            return true;
        }

        const clearIds = this.getStageClearIds();
        const lastPveStageTab = tab.getData().PveStageTableByStageId.getValue(clearIds[clearIds.length - 1]);
        if (!lastPveStageTab) {
            return true;
        }
        const curPveStageId = lastPveStageTab.NextLevelId ? lastPveStageTab.NextLevelId : lastPveStageTab.StageId;
        let levelArr = tab.getData().MainChapterTableById.getValue(id).EliteStageIds;
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
        // 通关副本
        const lastId = this.getLastStageId();
        const rewardIds = this.eliteStageInfo.receivedFirstRewardStageIds;
        if (rewardIds.length === 0) {
            return 100101
        }
        const lastRewardId = rewardIds[rewardIds.length - 1];
        if (lastRewardId < lastId) {
            return tab.getData().PveStageTableByStageId.getValue(lastRewardId).NextLevelId;
        } else if (lastRewardId === lastId) {
            return tab.getData().PveStageTableByStageId.getValue(lastRewardId).NextLevelId;
        }
    }
    /* 获取当前主线列表最大关卡 */
    getMaxPveMainStage(): tab.PveStageTable {
        return tab.getData().PveStageTableByStageId.getValue(3505);
    }
    /* 获取当前通关了多少章节 总共可以打多少章节 */
    getChapterCount() {
        let chapterId = BattleMainDataControl.ins.getPassChapterId();
        const isPassAll = BattleMainDataControl.ins.isAllStageClear();
        if (isPassAll) {
            chapterId++
        }
        const clearIds = this.getStageClearIds();
        let maxCount = 0;
        for (let i = 0; i < tab.getData().MainChapterTable.length; i++) {
            const _tab = tab.getData().MainChapterTable[i];
            const _id = _tab.Id;
            if (_id <= chapterId) {
                maxCount += _tab.EliteStageIds.length;
            }
        }
        return {
            curCount:clearIds.length,
            maxCount:maxCount
        }
    }
}


