import { _decorator, Component, Node } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { JIANGHU_TYPE } from '../../../Common/script/EnumTypeMgr';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('GameplayDataMgr')
export class GameplayViewDataMgr extends AbsControl {
    public curFightStageId: number = 0;
    private ExportMap: Map<JIANGHU_TYPE, proto.IExportStageInfo> = new Map();
    private StageTabMap: Map<JIANGHU_TYPE, tab.PveStageTable[]> = new Map();
    private _WorldBossMsg: proto.Msg_WorldBossDataPush;
    private _DailyChallengeDataMsg: proto.IDailyChallengeData;
    private _DailyChallengeBuffs: Array<number>;
    private _ClimbTowerInfoMsg:proto.Msg_GetClimbTowerInfoRsp;
    private static _instance: GameplayViewDataMgr;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new GameplayViewDataMgr();
        }
        return this._instance;
    }
    initData(dataMap: any) {
        this.ExportMap.clear();
        this.StageTabMap.clear();

        Object.keys(JIANGHU_TYPE).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key) && _key !== JIANGHU_TYPE.NONE) {
                if (dataMap[_key]) {
                    this.ExportMap.set(_key, dataMap[key])
                } else {
                    let exportData = new proto.ExportStageInfo();
                    exportData.clearedStageIds = [];
                    exportData.receivedFirstRewardStageIds = [];
                    this.ExportMap.set(_key, exportData)
                }

                const arr = [];
                for (let i = 0; i < tab.getData().PveStageTable.length; i++) {
                    const stageTab = tab.getData().PveStageTable[i];
                    if (stageTab.StageType == _key) {
                        arr.push(stageTab);
                    }
                }
                this.StageTabMap.set(_key, arr)
            }
        })
    }
    getStageTab(id: JIANGHU_TYPE) {
        return this.StageTabMap.get(id);
    }
    // 获取探险数据
    getExportInfo(id: JIANGHU_TYPE) {
        return this.ExportMap.get(id);
    }
    // 设置当前关卡id
    setCurFightStageId(id: JIANGHU_TYPE){
        const ids = this.ExportMap.get(id).clearedStageIds;
        if (ids.length == 0) {
            this.curFightStageId = this.StageTabMap.get(id)[0].StageId;
        } else {
            if(this.StageTabMap.get(id)[ids.length - 1].NextLevelId){
                this.curFightStageId = this.StageTabMap.get(id)[ids.length - 1].NextLevelId;
            }else{
                this.curFightStageId = this.getStageTab(id)[this.getStageTab(id).length-1].StageId;
            }
        }
    }
    getCurSweepStageId(id){
        const maxStageId =  this.getStageTab(id)[this.getStageTab(id).length-1].StageId;
        const ids = this.ExportMap.get(id).clearedStageIds;
        if(this.curFightStageId<maxStageId){
            return this.curFightStageId-1;
        }else{
            const sweep = ids.indexOf(this.curFightStageId) > -1;
            if(sweep){
                return this.curFightStageId
            }else{
                return this.curFightStageId-1;
            }
        }
    }
    // 增加探险通关数据
    addExportInfo(id: tab.PveStageType,clearedId:number){
        const ids = this.ExportMap.get(Number(id)).clearedStageIds??[];
        if(ids.indexOf(clearedId)>-1){
            return
        }else{
            ids.push(clearedId);
        }
    }
    /* 处理一下扫荡信息 */
    getSweepInfo(view_type: JIANGHU_TYPE) {
        const curExportInfo = this.getExportInfo(view_type)
        let freeTimes = 0;
        let buyTimes = 0;
        let diamondData = [];
        let haveFreeTimes = 0;
        let haveBuyTimes = 0;
        if (view_type === JIANGHU_TYPE.GoldStage) {
            // 免费次数为
            freeTimes = tab.getData().GetKeyValue_ConfigTable().GoldStageSweepFreeCount;
            buyTimes = tab.getData().GetKeyValue_ConfigTable().GoldStageSweepBuyCount+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_DailyStageBuySweepCount);
            diamondData = tab.getData().GetKeyValue_ConfigTable().GoldStageSweepBuyCost;
        } else {
            freeTimes = tab.getData().GetKeyValue_ConfigTable().FeedStageSweepFreeCount;
            buyTimes = tab.getData().GetKeyValue_ConfigTable().FeedStageSweepBuyCount+RoleData.ins.getPrivilegeValue(tab.VipBonus.VipBonus_DailyStageBuySweepCount);;
            diamondData = tab.getData().GetKeyValue_ConfigTable().FeedStageSweepBuyCost;
        }
        haveFreeTimes = freeTimes - curExportInfo.freeSweepTimes;
        haveBuyTimes = buyTimes - curExportInfo.notFreeSweepTimes;
        return {
            maxFreeTimes: freeTimes,
            maxBuyTimes: buyTimes,
            buyTimes: haveBuyTimes,
            freeTimes: haveFreeTimes,
            diamondData: diamondData,
        }
    }

    get worldBossMsg() {
        return this._WorldBossMsg;
    }
    set worldBossMsg(msg: proto.Msg_WorldBossDataPush) {
        this._WorldBossMsg = msg;
    }
    /**每日挑战数据 */
    get dailyChallengeDataMsg() {
        if(!this._DailyChallengeDataMsg){
            this._DailyChallengeDataMsg=new  proto.DailyChallengeData();
            this._DailyChallengeDataMsg.level=1;
            this._DailyChallengeDataMsg.cd=-1;
            this._DailyChallengeDataMsg.challengeCount=0;
            this._DailyChallengeDataMsg.challengeTotalCount=0;
            this._DailyChallengeDataMsg.receivedScore=0;
        }
        return this._DailyChallengeDataMsg;
    }
    set dailyChallengeDataMsg(msg: proto.IDailyChallengeData) {
        if(!msg){
            msg=new  proto.DailyChallengeData();
            msg.level=1;
            msg.cd=-1;
            msg.challengeCount=0;
            msg.challengeTotalCount=0;
            msg.receivedScore=0;
        }
        if(!msg.cd){
            msg.cd=0;
        }
        if(!msg.level){
            msg.level=1;
        }
        if(!msg.challengeCount){
            msg.challengeCount=0;
        }
        if(!msg.maxScore){
            msg.maxScore=0;
        }
        if(!msg.receivedScore){
            msg.receivedScore=0;
        }
        if(!msg.challengeTotalCount){
            msg.challengeTotalCount=0;
        }
        this._DailyChallengeDataMsg = msg;
    }
    set dailyChallengeBuffs(buffs){
        this._DailyChallengeBuffs=buffs;

    }
    get dailyChallengeBuffs(){
        return this._DailyChallengeBuffs;
    }
    /**
     * 爬塔信息
     */
    get climbTowerInfoMsg(){
        return this._ClimbTowerInfoMsg;
    }
    set climbTowerInfoMsg(msg:proto.Msg_GetClimbTowerInfoRsp){
        if(!msg.defeatTimes){
            msg.defeatTimes=0;
        }
        this._ClimbTowerInfoMsg=msg;
    }
    /**获取精英挑战通关id */
    getClimbTowerPassLevelId(){
        let passId = this.climbTowerInfoMsg.clearedStageIds.length == 0 ? 0 :  this.climbTowerInfoMsg.clearedStageIds[ this.climbTowerInfoMsg.clearedStageIds.length - 1]
        return passId;
    }
}


