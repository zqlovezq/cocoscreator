import { _decorator, Component, log, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { GameplayView } from './GameplayView';
import { GameplayViewDataMgr } from './GameplayViewDataMgr';
import { Net } from '../../net/Net';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { tab } from '../../../Table/table_gen';
import { BattleMainDataControl } from '../home/battle/BattleMainDataControl';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('GameplayControl')
export class GameplayControl extends AbsControl {
    private static _instance: GameplayControl;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new GameplayControl();
        }

        return this._instance;
    }

    register() {
        EventMgr.onMsg(proto.Ptl.WorldBossDataPush, this.on_s2c_WorldBossDataPush, this);
        EventMgr.onMsg(proto.Ptl.WorldBossSweepRsp, this.on_s2c_WorldBossSweepRsp, this);

        EventMgr.onMsg(proto.Ptl.DailyChallengeDataPush, this.on_s2c_DailyChallengeDataPush, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeLevelRsp, this.on_s2c_DailyChallengeLevelRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeRewardRsp, this.on_s2c_DailyChallengeRewardRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeSweepRsp, this.on_s2c_DailyChallengeSweepRsp, this);
        EventMgr.onMsg(proto.Ptl.DailyChallengeWatchAdvRsp, this.on_s2c_DailyChallengeWatchAdvRsp, this);

        EventMgr.onMsg(proto.Ptl.GetClimbTowerInfoRsp, this.on_s2c_GetClimbTowerInfoRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveClimbTowerDailyRewardsRsp, this.on_s2c_ReceiveClimbTowerDailyRewardsRsp, this);
        EventMgr.onMsg(proto.Ptl.ReceiveClimbTowerClearStageRewardsRsp, this.on_s2c_ReceiveClimbTowerClearStageRewardsRsp, this);

        EventMgr.onMsg(proto.Ptl.QuickFinishClimbTowerStageRsp, this.on_s2c_QuickFinishClimbTowerStageRsp, this);
        // Msg_WorldBossSweepRsp


        RedMgr.ins.registerCalculateFb(RedDotType.ClimbingTowerChallenge, this.on_red_ClimbingTowerChallenge, this);
        RedMgr.ins.registerCalculateFb(RedDotType.ClimbingTowerDailyReward, this.on_red_ClimbingTowerDailyReward, this);
        RedMgr.ins.registerCalculateFb(RedDotType.ClimbingTowerStageReward, this.on_red_ClimbingTowerStageReward, this);
        RedMgr.ins.registerCalculateFb(RedDotType.EveryDayChallengeFreeNum, this.on_red_EveryDayChallengeFreeNum, this);
        RedMgr.ins.registerCalculateFb(RedDotType.EveryDayChallengeUpReward, this.on_red_EveryDayChallengeUpReward, this);
        RedMgr.ins.registerCalculateFb(RedDotType.EveryDayChallengeBoxReward, this.on_red_EveryDayChallengeBoxReward, this);

        RedMgr.ins.registerCalculateFb(RedDotType.TopWarChallengeFreeNum, this.on_red_TopWarChallengeFreeNum, this);
        

    }
    request(){
        this.requestGetClimbTowerInfo();
    }
    requestWorldBossSweep() {
        let msg = new proto.Msg_WorldBossSweepReq();
        Net.Send(proto.Ptl.WorldBossSweepReq, msg)
    }
    /**请求调整每日挑战难度 */
    requestDailyChallengeLevel(level: number) {
        let msg = new proto.Msg_DailyChallengeLevelReq();
        msg.newLevel = level;
        Net.Send(proto.Ptl.DailyChallengeLevelReq, msg)
    }
    /**请求领取每日挑战奖励 */
    requestDailyChallengeReward() {
        let msg = new proto.Msg_DailyChallengeRewardReq;
        Net.Send(proto.Ptl.DailyChallengeRewardReq, msg)
    }
    /**
     * 请求每日挑战扫荡
     */
    requestDailyChallengeSweep() {
        let msg = new proto.Msg_DailyChallengeSweepReq;
        Net.Send(proto.Ptl.DailyChallengeSweepReq, msg)
    }
    /**
    * 请求每日挑战扫荡
    */
    requestDailyChallengeWatchAdv() {
        let msg = new proto.Msg_DailyChallengeWatchAdvReq;
        Net.Send(proto.Ptl.DailyChallengeWatchAdvReq, msg)
    }

    /**
    * 请求活动爬塔信息
    */
    requestGetClimbTowerInfo() {
        let msg = new proto.Msg_GetClimbTowerInfoReq;
        Net.Send(proto.Ptl.GetClimbTowerInfoReq, msg)
    }
    /**
     * 请求领取爬塔每日奖励信息
    */
    requestReceiveClimbTowerDailyRewards() {
        let msg = new proto.Msg_ReceiveClimbTowerDailyRewardsReq;
        Net.Send(proto.Ptl.ReceiveClimbTowerDailyRewardsReq, msg)
    }
    /**
     * 领取爬塔首通奖励
    */
    requestReceiveClimbTowerClearStageRewardsReq(stageId: number) {
        let msg = new proto.Msg_ReceiveClimbTowerClearStageRewardsReq;
        msg.stageId = stageId;
        Net.Send(proto.Ptl.ReceiveClimbTowerClearStageRewardsReq, msg)
    }
    /**
   * 快速爬塔
  */
    requestQuickFinishClimbTowerStage(stageId: number) {
        let msg = new proto.Msg_QuickFinishClimbTowerStageReq;
        msg.stageId = stageId;
        Net.Send(proto.Ptl.QuickFinishClimbTowerStageReq, msg)
    }
    on_s2c_WorldBossDataPush(msg: proto.Msg_WorldBossDataPush) {
        GameplayViewDataMgr.ins.worldBossMsg = msg;
        log("收到世界boss数据==", msg);
        RedMgr.refreshEvent(RedDotType.TopWarChallengeFreeNum);

    }
    on_s2c_WorldBossSweepRsp(msg: proto.Msg_WorldBossSweepRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.worldBossMsg = msg.data as proto.Msg_WorldBossDataPush;
        }
    }

    on_s2c_DailyChallengeDataPush(msg: proto.Msg_DailyChallengeDataPush) {
        GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
        GameplayViewDataMgr.ins.dailyChallengeBuffs = msg.bufferList;
        log("收到每日挑战数据==", msg);
        RedMgr.refreshEvent(RedDotType.EveryDayChallengeUpReward); 
        RedMgr.refreshEvent(RedDotType.EveryDayChallengeBoxReward);
        RedMgr.refreshEvent(RedDotType.EveryDayChallengeFreeNum);

    }
    on_s2c_DailyChallengeLevelRsp(msg: proto.Msg_DailyChallengeLevelRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeUpReward); 
  
        }
    }

    on_s2c_DailyChallengeRewardRsp(msg: proto.Msg_DailyChallengeRewardRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeBoxReward);
        }
    }
    on_s2c_DailyChallengeSweepRsp(msg: proto.Msg_DailyChallengeSweepRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeFreeNum);
        }
    }
    on_s2c_DailyChallengeWatchAdvRsp(msg: proto.Msg_DailyChallengeWatchAdvRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
            RedMgr.refreshEvent(RedDotType.EveryDayChallengeFreeNum);
        }
    }

    on_s2c_GetClimbTowerInfoRsp(msg: proto.Msg_GetClimbTowerInfoRsp) {
        // if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
        //     GameplayViewDataMgr.ins.dailyChallengeDataMsg = msg.data;
        // }
        GameplayViewDataMgr.ins.climbTowerInfoMsg = msg;
        RedMgr.refreshEvent(RedDotType.ClimbingTowerStageReward);
        RedMgr.refreshEvent(RedDotType.ClimbingTowerDailyReward);
        RedMgr.refreshEvent(RedDotType.ClimbingTowerChallenge);
    }
    on_s2c_ReceiveClimbTowerDailyRewardsRsp(msg: proto.Msg_ReceiveClimbTowerDailyRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.climbTowerInfoMsg.isReceivedDailyRewards = true;
            RedMgr.refreshEvent(RedDotType.ClimbingTowerDailyReward);
        }
    }
    on_s2c_ReceiveClimbTowerClearStageRewardsRsp(msg: proto.Msg_ReceiveClimbTowerClearStageRewardsRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.climbTowerInfoMsg.receivedFirstRewardStageIds.push(msg.stageId)
            RedMgr.refreshEvent(RedDotType.ClimbingTowerStageReward);
        }
    }
    on_s2c_QuickFinishClimbTowerStageRsp(msg: proto.Msg_QuickFinishClimbTowerStageRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            GameplayViewDataMgr.ins.climbTowerInfoMsg.clearedStageIds.push(msg.stageId);
            RedMgr.refreshEvent(RedDotType.ClimbingTowerStageReward);
            RedMgr.refreshEvent(RedDotType.ClimbingTowerChallenge);
        }
    }
    on_red_ClimbingTowerChallenge() {
        return false;
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ClimbTower)){
            return false;
        }
        if (GameplayViewDataMgr.ins.climbTowerInfoMsg) {
            let total = tab.getData().GetKeyValue_ConfigTable().ClimbTowerDefeatCount;
            let last = total - GameplayViewDataMgr.ins.climbTowerInfoMsg.defeatTimes;
            return last > 0;
        } else {
            return false;
        }

    }
    on_red_ClimbingTowerDailyReward() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ClimbTower)){
            return false;
        }
        if (GameplayViewDataMgr.ins.climbTowerInfoMsg&&GameplayViewDataMgr.ins.climbTowerInfoMsg.clearedStageIds.length>0) {
            return !GameplayViewDataMgr.ins.climbTowerInfoMsg.isReceivedDailyRewards;
        } else {
            return false;
        }
    }
    on_red_ClimbingTowerStageReward() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ClimbTower)){
            return false;
        }
        let msg=GameplayViewDataMgr.ins.climbTowerInfoMsg;
        if (msg) {
            let tables = tab.getData().PveClearStageTable;
            let receives = msg.receivedFirstRewardStageIds;
            let passId = GameplayViewDataMgr.ins.getClimbTowerPassLevelId()
            for (let key in tables) {
                if (tables[key].StageType == tab.PveStageType.PveStageType_ClimbTower) {
                    let t = tables[key];
                    if (passId >= t.StageId) {
                        if (receives.indexOf(t.StageId) < 0) {
                            return true;
                        }
                    }
                }
            }
            return false;
        } else {
            return false;
        }
    }
    on_red_EveryDayChallengeFreeNum() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyChallenge)){
            return false;
        }
        if(!GameplayViewDataMgr.ins.dailyChallengeDataMsg){
            return false;
        }
        let lastTimer = GameplayViewDataMgr.ins.dailyChallengeDataMsg.challengeTotalCount - GameplayViewDataMgr.ins.dailyChallengeDataMsg.challengeCount;
        return lastTimer > 0;
    }
    on_red_EveryDayChallengeBoxReward() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyChallenge)){
            return false;
        }
        if(!GameplayViewDataMgr.ins.dailyChallengeDataMsg){
            return false;
        }
        let level=GameplayViewDataMgr.ins.dailyChallengeDataMsg.level;
        let receivedScore = GameplayViewDataMgr.ins.dailyChallengeDataMsg.receivedScore;
       let table = tab.getData().DailyChallengeLevelTableByLevel.getValue(level);
       let currScore = GameplayViewDataMgr.ins.dailyChallengeDataMsg.score;
        let requires = table.Require;
        for (let i: number = 0; i < requires.length; i++) {
            if(currScore>=requires[i]&& requires[i] > receivedScore)
            return true;
        }
        return false;
    }
    on_red_EveryDayChallengeUpReward() {
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyChallenge)){
            return false;
        }
        if(!GameplayViewDataMgr.ins.dailyChallengeDataMsg){
            return false;
        }
        let level=GameplayViewDataMgr.ins.dailyChallengeDataMsg.level;
        let nextTable = tab.getData().DailyChallengeLevelTableByLevel.getValue(level + 1);
        if (nextTable) {
            if (BattleMainDataControl.ins.getIsPasstStageByStageId(nextTable.MainStageLimit)) {
                return true;
            } else {
                return false;
            }
        } else {
            return false;
            //ShowTips("已达到当前最高难度")

        }
    }

    on_red_TopWarChallengeFreeNum(){
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)){
            return false;
        }
        if(!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_WorldBoss)){
            return false;
        }
        if(!GameplayViewDataMgr.ins.worldBossMsg){
            return false;
        }
        let freeCount=tab.getData().GetKeyValue_ConfigTable().WorldBossDailyCount;
        let num=GameplayViewDataMgr.ins.worldBossMsg.challengeCount;
        return num<freeCount;
    }
}


