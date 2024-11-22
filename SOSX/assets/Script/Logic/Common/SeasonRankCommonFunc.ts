/*
 * @Descripttion: 赛季相关通用接口类
 */

import { tab } from "../../Table/table_gen";
import { getServerUtcTime } from "../Utils/GameUtils";
import { kZeroNumber, kNegativeOneNumber, kOneNumber, kTwoNumber, isValidObj, kThreeNumber, kFourNumber } from "./CommonInterface";
import Role from "./Role";

export enum ItemState{
    NONE,
    CAN_RECEIVE,
    ALREADY_RECEIVE,
    LOCK,
}

export interface ItemData{
    itemID: number;
    itemType: number;
};


/**
 * Description: 组织返回的奖励数据对象
 */
function returnRewardObj(itemID1: number, itemType1: number, itemID2: number, itemType2: number){
    if(itemID1 > kZeroNumber){
        return [{itemID: itemID1, itemType: itemType1}];
    }

    return [{itemID: itemID2, itemType: itemType2}];
}


const { ccclass, property } = cc._decorator;

//赛季积分奖励
@ccclass
export default class  RankScoreRewardClass{
    private bInitRankScoreRewardTable: boolean = false;
    private _seasonRankLvToScores: Map<number, number[]> = new Map();
    private _maxSeasonRankLevel: number = kZeroNumber;
    private _seasonRankLvToRewards: Map<number, number[]> = new Map();
    private _maxSeasonScore: number = kZeroNumber;
    
    private static _instance: RankScoreRewardClass = null;
    public static getInstance(): RankScoreRewardClass {
        if (!RankScoreRewardClass._instance)
        {
            RankScoreRewardClass._instance = new RankScoreRewardClass();
            RankScoreRewardClass._instance && RankScoreRewardClass._instance.initRankScoreRewardTable();
        }
        return RankScoreRewardClass._instance;
    }

    /* 初始化赛季积分奖励表的积分数组
    */
    private initRankScoreRewardTable(){
        if(this.bInitRankScoreRewardTable){
            return;
        }
    
        this._seasonRankLvToScores.clear();
        for(let data of tab.Data.RankScoreRewardTable){
            if(kNegativeOneNumber == data.Score){
                continue;
            }

            //等级对应积分数组
            if(this._seasonRankLvToScores.has(data.FightNum)){
                this._seasonRankLvToScores.get(data.FightNum).push(data.Score);
            }else{
                this._seasonRankLvToScores.set(data.FightNum, [data.Score]);
            }

            //等级对应的奖励数组
            if(this._seasonRankLvToRewards.has(data.FightNum)){
                if(data.RewardID1 != kZeroNumber) this._seasonRankLvToRewards.get(data.FightNum).push(data.RewardID1);
                if(data.RewardID2 != kZeroNumber) this._seasonRankLvToRewards.get(data.FightNum).push(data.RewardID2);
            }else{
                let bFirstHave = false;
                if(data.RewardID1 != kZeroNumber){
                    bFirstHave = true;
                    this._seasonRankLvToRewards.set(data.FightNum, [data.RewardID1]);
                } 
                if(data.RewardID2 != kZeroNumber) {
                    if(bFirstHave){
                        this._seasonRankLvToRewards.get(data.FightNum).push(data.RewardID2);
                    }else{
                        this._seasonRankLvToRewards.set(data.FightNum, [data.RewardID2]);
                    }
                }
            }

            this._maxSeasonScore = data.Score > this._maxSeasonScore ? data.Score : this._maxSeasonScore;
        }
    
        for(let data of tab.Data.RankGradeTable){
            if(data.Grade > this._maxSeasonRankLevel && 
                data.Type == tab.RankFightType.RankFightType_Low){
                this._maxSeasonRankLevel = data.Grade;
            }
        }

        this.bInitRankScoreRewardTable = true;
    }

    /* 清除数据
     */
    public Destroy(){
        if(RankScoreRewardClass._instance){
            RankScoreRewardClass._instance._seasonRankLvToScores.clear();
            RankScoreRewardClass._instance._seasonRankLvToRewards.clear();
        }
    }

    /* 根据传入的等级获取该等级的起步积分
     * @param rankLv  赛季等级
     * @param bMax    是不是取该等级的最大积分
     */
    public getRankStartScoreToLevel(rankLv: number, bMax: boolean = false): number{
        if(this._seasonRankLvToScores.has(rankLv)){
            let data   = this._seasonRankLvToScores.get(rankLv);
            let arrLen = data ? data.length : kZeroNumber;
            if(data && arrLen > kZeroNumber){
                let retVal = bMax ? data[arrLen - kOneNumber] : data[kZeroNumber];
                return retVal;
            }
        }

        return kNegativeOneNumber;
    }

    public checkRankLvHasReward(rankLv: number){
        let dataList = this._seasonRankLvToRewards.get(rankLv);
        if(isValidObj(dataList) && dataList.length > kZeroNumber){
            return true;
        }

        return false;
    }

    /* 与当前自身积分做对比获取表中相应积分
     * @param bLessThan  是否小于自身积分
     */
    public getRankScoreCompSelfScore(bLessThan: boolean = false): number {
        let selfRankLv    = Role.Instance.RoleGrade;
        let selfRankScore = Role.Instance.RoleData.rankData.score;
        if(this._seasonRankLvToScores.has(selfRankLv)){
            let data      = this._seasonRankLvToScores.get(selfRankLv);
            let bValid    = isValidObj(data);
            let dataLen   = bValid ? data.length : kZeroNumber;
            if(bValid && dataLen > kZeroNumber){
                //如果当前积分已经超过段位积分范围，就取下一段位积分
                if(data[dataLen - kOneNumber] < selfRankScore){
                    data = this._seasonRankLvToScores.get(selfRankLv + kOneNumber);
                }

                bValid  = isValidObj(data);
                if(!bValid){
                    return kNegativeOneNumber;
                }
                
                for(let score of data){
                    if(bLessThan && score < selfRankScore){/* 取第一个小于自身积分的 */
                        return score;
                    }

                    if(!bLessThan && score > selfRankScore){ /* 取第一个大于自身积分的 */
                        return score;
                    }
                }//end for
            }//end if(data && data.length > kZeroNumber)
        }//end if(this._seasonRankLvToScores.has(selfRankLv))

        return kNegativeOneNumber;
    }

    /* 根据传入的积分获取等级/段位
     * @param score  积分
     */
    public getRankLevelToScore(score: number): number {
        let bMoreThanCompPre = false;
        let preRankLevel     = kZeroNumber;
        for(let data of tab.Data.RankScoreRewardTable){
            if(score > data.Score){
                bMoreThanCompPre = true;
                preRankLevel     = data.FightNum;

            }else if(score < data.Score){
                if(!bMoreThanCompPre){
                    return data.FightNum;
                }

                return preRankLevel;
            }else{
                return data.FightNum;
            }
        }//end for

        return preRankLevel;
    }

    /* 获取可领取的赛季奖励物品数据
     * @param bInner  是否是赛季内部界面
     */
    public getRankRewardItemData(bInner: boolean = false) : ItemData[] {
        //先检查下在当前历史最高积分段范围内有木有可领取的奖励
        let checkRewardData = checkHaveRewardCanReceive();
        let bMaxSeasonScore = kOneNumber == checkRewardData[kFourNumber];

        if(kOneNumber == checkRewardData[kZeroNumber]){
            if(bMaxSeasonScore){
                let rewardData = getMaxSeasonScoreReward();
                return [{itemID: rewardData.RewardID, itemType: rewardData.RewardType}];
            }
            
            let scoreData   = tab.Data.RankScoreRewardTableByScore.getValue(checkRewardData[kOneNumber]);
            if(isValidObj(scoreData)){
                if(bInner){
                    return [
                            {itemID: scoreData.RewardID1, itemType: scoreData.RewardType1}, 
                            {itemID: scoreData.RewardID2, itemType: scoreData.RewardType2}
                        ];
                }

                return returnRewardObj( scoreData.RewardID1, 
                                        scoreData.RewardType1, 
                                        scoreData.RewardID2, 
                                        scoreData.RewardType2);
            }
        }
        
        //上面没有检测到有可领取的奖励，继续往更高积分段查找了
        let rankInfo      = Role.Instance.RoleData.rankData;
        let rankScoreData = tab.Data.RankScoreRewardTableByScore.getValue(rankInfo.maxScore);
        let bValidObj     = isValidObj(rankScoreData);
        let tabDataLen    = tab.Data.RankScoreRewardTable.length;
        for(let idx = checkRewardData[kTwoNumber]; idx < tabDataLen; idx++){
            if(kNegativeOneNumber >= tab.Data.RankScoreRewardTable[idx].Score){
                continue;
            }
            
            if(tab.Data.RankScoreRewardTable[idx].Score <= rankInfo.maxScore){ //start if 1
                if( null == rankInfo.gotSocreRewardId || 
                    kZeroNumber == rankInfo.gotSocreRewardId.length){// start if 2
                        if(bInner){
                            return [
                                    {itemID: tab.Data.RankScoreRewardTable[idx].RewardID1, itemType: tab.Data.RankScoreRewardTable[idx].RewardType1}, 
                                    {itemID: tab.Data.RankScoreRewardTable[idx].RewardID2, itemType: tab.Data.RankScoreRewardTable[idx].RewardType2}
                                ];
                        }

                        return returnRewardObj( tab.Data.RankScoreRewardTable[idx].RewardID1, 
                                                tab.Data.RankScoreRewardTable[idx].RewardType1, 
                                                tab.Data.RankScoreRewardTable[idx].RewardID2, 
                                                tab.Data.RankScoreRewardTable[idx].RewardType2);
                    }//end if 2

                    if(!bValidObj){
                        continue;
                    }
                    
                    let itemID1 = !rankInfo.gotSocreRewardId.includes(rankInfo.maxScore) ? 
                                  tab.Data.RankScoreRewardTable[idx].RewardID1 : kNegativeOneNumber;
                    let itemID2 = !rankInfo.gotSocreRewardId.includes(rankInfo.maxScore) ? 
                                  tab.Data.RankScoreRewardTable[idx].RewardID2 : kNegativeOneNumber;
                    if(kZeroNumber >= itemID1 && kZeroNumber >= itemID2){
                        continue;
                    }
                    
                    if(bInner){
                        let tmpItemList = [];
                        itemID1 != kNegativeOneNumber && tmpItemList.push({itemID: itemID1, itemType: tab.Data.RankScoreRewardTable[idx].RewardType1});
                        itemID2 != kNegativeOneNumber && tmpItemList.push({itemID: itemID2, itemType: tab.Data.RankScoreRewardTable[idx].RewardType2});
                        return tmpItemList;
                    }

                    return returnRewardObj( itemID1, 
                                            tab.Data.RankScoreRewardTable[idx].RewardType1, 
                                            itemID2, 
                                            tab.Data.RankScoreRewardTable[idx].RewardType2);
            }else{
                //超过当前段位就算了吧
                if(tab.Data.RankScoreRewardTable[idx].FightNum > Role.Instance.RoleGrade){
                    return [{itemID: kNegativeOneNumber, itemType: kNegativeOneNumber}];
                }
                
                if( tab.Data.RankScoreRewardTable[idx].RewardID1 <= kZeroNumber &&
                    tab.Data.RankScoreRewardTable[idx].RewardID2 <= kZeroNumber){
                    continue;
                }
                
                if(bInner){
                    return [
                            {itemID: tab.Data.RankScoreRewardTable[idx].RewardID1, itemType: tab.Data.RankScoreRewardTable[idx].RewardType1}, 
                            {itemID: tab.Data.RankScoreRewardTable[idx].RewardID2, itemType: tab.Data.RankScoreRewardTable[idx].RewardType2}
                        ];
                }

                return returnRewardObj( tab.Data.RankScoreRewardTable[idx].RewardID1, 
                                        tab.Data.RankScoreRewardTable[idx].RewardType1, 
                                        tab.Data.RankScoreRewardTable[idx].RewardID2, 
                                        tab.Data.RankScoreRewardTable[idx].RewardType2);
            }
        }//end for

        return [{itemID: kNegativeOneNumber, itemType: kNegativeOneNumber}];
    }

    /* 获取竞技场等级最大值
     */
    public getMaxSeasonRankLevel(){return this._maxSeasonRankLevel;}

    /* 获取竞技场当前等级的一个奖励对应的积分
     */
    public getNextRewardScore(rankLv: number){
        let data = this._seasonRankLvToScores.get(rankLv);
        if(isValidObj(data) && data.length > kZeroNumber){
            let curScore = Role.Instance.RoleData.rankData.score;
            
            for(let score of data){
                //积分大于当前积分并且奖励没有领取过
                if( score > curScore && 
                    !Role.Instance.RoleData.rankData.gotSocreRewardId.includes(score)){
                        return score;
                    }
            }
        }
        return kNegativeOneNumber;
    }

    /* 获取赛季最大积分值
     */
    public getMaxRankScore(){
        return this._maxSeasonScore;
    }
};


//赛季段位解锁的卡牌
@ccclass
export class SeasonRankCardClass{
    private _seasonRankLvToCards: Map<number, number[]> = new Map();
    private _bInit: boolean = false;
    
    private static _instance: SeasonRankCardClass = null;
    public static getInstance(): SeasonRankCardClass {
        if (!SeasonRankCardClass._instance)
        {
            SeasonRankCardClass._instance = new SeasonRankCardClass();
            SeasonRankCardClass._instance && SeasonRankCardClass._instance.initCardTableData();
        }
        return SeasonRankCardClass._instance;
    }

    private initCardTableData(){
        if(this._bInit){
            return;
        }
    
        this._seasonRankLvToCards.clear();
        for(let data of tab.Data.CardTable){
            if(data.UnlockRankLevel < kZeroNumber){
                continue;
            }
            
            if(this._seasonRankLvToCards.has(data.UnlockRankLevel)){
                this._seasonRankLvToCards.get(data.UnlockRankLevel).push(data.ID);
            }else{
                this._seasonRankLvToCards.set(data.UnlockRankLevel, [data.ID]);
            }
        }
    
        this._bInit = true;
    }

    public Destroy(){
        this._seasonRankLvToCards.clear();
    }

    /* 获取相应赛季段位解锁的卡牌列表
     * @param rankLv  赛季段位/等级
     */
    public getUnlockCardListsFromRankLevel(rankLv: number){
        if(this._seasonRankLvToCards.has(rankLv)){
            return this._seasonRankLvToCards.get(rankLv);
        }
    }
};

/**
 * Descrpition: 获取倒计时字符串
 * @param leftTime 剩余时间
 */
export function getCutDownTimesString(leftTime: number, defaultString: string = ""){
    if (leftTime > 24 * 60 * 60){
        let day     = leftTime / (24 * 60 * 60);
        let hour    = (leftTime % (24 * 60 * 60)) / (60 * 60);
        let dayStr  = tab.Data.GetKeyValue_ConfigTable().DayTip;
        let hourStr = tab.Data.GetKeyValue_ConfigTable().HourTip;
        if(day > kOneNumber){
            return `${Math.floor(day)}${dayStr}${Math.floor(hour)}${hourStr}`;    
        }
        return `${dayStr}${Math.floor(hour)}${hourStr}`;
    }
    
    if (leftTime > kZeroNumber){
        let hour      = leftTime / (60 * 60);
        let min       = (leftTime % (60 * 60)) / 60;
        let second    = Math.floor(leftTime % 60);
        let hourStr   = tab.Data.GetKeyValue_ConfigTable().HourTip;
        let minuteStr = tab.Data.GetKeyValue_ConfigTable().MinuteTip;
        if(hour > kOneNumber){
            return `${Math.floor(hour)}${hourStr}${Math.floor(min)}${minuteStr}`;
        }

        if(min > kOneNumber){
            return  `${Math.floor(min)}${minuteStr}${second}${tab.Data.GetKeyValue_ConfigTable().SecondText}`;
        }

        return `${second}${tab.Data.GetKeyValue_ConfigTable().SecondText}`;
    }

    if(defaultString != ""){
        return defaultString;
    }
    
    return tab.Data.GetKeyValue_ConfigTable().SeasonEndTip;
}

/**
 * Description: 计算最高积分进度条
 * @param sprBar         进度条
 * @param moleculeVal    分子值
 * @param denominatorVal 分母值
 * @param originalHeight 原始进度条高度
 */
function calculateMaxScoreProgressBar(  sprBar: cc.Sprite, 
                                        moleculeVal: number, 
                                        denominatorVal: number, 
                                        originalHeight: number){
    let sprBarSize    = sprBar.node.getContentSize();
    moleculeVal       = moleculeVal < kZeroNumber ? kZeroNumber : moleculeVal;
    let progressVal   = moleculeVal / denominatorVal;
    progressVal       = progressVal > kOneNumber ? kOneNumber : progressVal;
    sprBarSize.height = progressVal * originalHeight;
    sprBar.node.setContentSize(sprBarSize);
}

/**
 * Description: 计算最高积分进度条
 * @param nodeScore   积分节点
 * @param progress    计算位置要依据的进度条
 */
function setScoreNodePosition(nodeScore: cc.Node, progress: cc.ProgressBar){
    let progressBarPosY = progress.node.position.y;
    let progressHeight  = progress.node.getContentSize().height;
    let progressVal     =  progress.progress;
    let barHeight       = progressBarPosY + (progressHeight * progressVal);
    let ownScoreNodePos = nodeScore.getPosition();
    ownScoreNodePos.y   = barHeight;
    nodeScore.setPosition(ownScoreNodePos);
    nodeScore.active    = true;
}

/**
 * Description: 计算缓冲带进度条
 * @param progressBuffer       缓冲带进度条
 * @param sprHistoryBar        缓冲带历史最大进度条
 * @param curOwnScore          当前拥有的积分
 * @param curMaxScore          当前积分数组中最大积分
 * @param historyMaxScore      历史最高积分
 * @param nextRankLvMinScore   下个段位最小积分值
 */
function calcProgressBuffer(progressBuffer: cc.ProgressBar, sprHistoryBar: cc.Sprite, 
                            curOwnScore: number, 
                            curMaxScore: number, 
                            historyMaxScore: number, 
                            nextRankLvMinScore: number){
    let moleculeVal         = curOwnScore - curMaxScore; //所拥有的积分 - 当前段位最大积分 作为分子
    moleculeVal             = moleculeVal < kZeroNumber ? kZeroNumber : moleculeVal;
    let denominatorVal      = nextRankLvMinScore - curMaxScore; //当前段位+1的最低积分 - 当前段位最大积分 作为分母
    denominatorVal          = denominatorVal <= kZeroNumber ? kOneNumber : denominatorVal;
    
    let progressVal         = moleculeVal / denominatorVal;
    progressVal             = progressVal > kOneNumber ? kOneNumber : progressVal;
    //设置缓冲带进度条的进度值
    progressBuffer.progress = progressVal;
    //设置缓冲带最大历史积分进度条进度值
    let progressBarHeight   = progressBuffer.node.getContentSize().height;
    calculateMaxScoreProgressBar(   sprHistoryBar, 
                                    historyMaxScore - curMaxScore, 
                                    denominatorVal, 
                                    progressBarHeight);
}

/**
 * Description: 设置赛季进度条刻度和当前积分位置
 * @param ranLv               当前赛季段位
 * @param rankFightType       当前赛季类型
 * @param nodeScore           积分节点
 * @param progressBuffer      缓冲进度条
 * @param progressbarList     进度条数组
 * @param lblScoreList        进度条刻度数组
 * @param historyBarList      历史最高积分进度条组
 * @param historyMaxBarBuffer 历史最高积分进度条
 */
export function setProgressBarAndScore( ranLv: number, 
                                        rankFightType: tab.RankFightType, 
                                        nodeScore: cc.Node, 
                                        progressBuffer: cc.ProgressBar, 
                                        progressbarList: cc.ProgressBar[], 
                                        lblScoreList: cc.Label[],
                                        historyBarList: cc.Sprite[],
                                        historyMaxBarBuffer: cc.Sprite){
    let curRankFightType = tab.RankFightType.RankFightType_Low; //当前段位所处的赛季战斗类型
    let rankGradeTabData = tab.Data.RankGradeTableByGrade.getValue(ranLv);
    if(isValidObj(rankGradeTabData)){
        curRankFightType = rankGradeTabData.Type;
    }

    nodeScore.active = false;
    
    //取当前段位的上一个段位的最大积分值
    let preRankLvMaxScore  = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(ranLv - kOneNumber, true);
    let scoreArr: number[] = [];
    for (let data of tab.Data.RankScoreRewardTable){
        //收集当前段位的所有积分值
        if (data.FightNum == ranLv){
            scoreArr.push(data.Score);
        }
    }

    let nextRankLvMinScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(ranLv + kOneNumber);
    let currentOwnScore    = Role.Instance.RoleData.rankData.score;
    let historyMaxScore    = Role.Instance.RoleData.rankData.maxScore;
    let bSetScoreNode      = true;
    let scoreArrLen        = scoreArr.length;
    let progressBarListLen = progressbarList.length;
    for (let idx = kZeroNumber; idx < scoreArrLen; ++idx){
        if (idx >= progressBarListLen){
            break;
        }
        
        let progressBarHeight = progressbarList[idx].node.getContentSize().height;
        //如果当前拥有的积分小于数组积分
        if (currentOwnScore < scoreArr[idx]){
            let preScore = kZeroNumber;
            //比当前段位最低积分还小，就取该段位最低积分
            if (idx == kZeroNumber){
                preScore = scoreArr[idx];
            }else{//否则就取积分数组中上一个积分
                preScore = scoreArr[idx - kOneNumber];
            }

            //【进度条上限：当前段位积分数组中还有 高于 所拥有积分的就用该积分作为上限】
            //【进度条下限：当前段位积分数组中还有 小于 所拥有积分的就用该积分作为下限】
            let moleculeVal    = currentOwnScore - preScore; //当前积分 - 进度条下限
            moleculeVal        = moleculeVal < kZeroNumber ? kZeroNumber : moleculeVal;
            let denominatorVal = scoreArr[idx] - preScore; //进度条上限 - 进度条下限
            denominatorVal     = denominatorVal <= kZeroNumber ? kOneNumber : denominatorVal;
            progressbarList[idx].progress = moleculeVal / denominatorVal;
            calculateMaxScoreProgressBar(   historyBarList[idx], 
                                            historyMaxScore - preScore, 
                                            denominatorVal, 
                                            progressBarHeight);
            //如果此时的段位所在的赛季战斗类型与传参的赛季战斗类型一样
            //并且当前段位的上一个段位的最大积分 < 当前拥有的积分
            //并且当前积分要大于等于该段位最低积分
            //设置当前积分节点的位置
            if (curRankFightType == rankFightType && 
                preRankLvMaxScore < currentOwnScore && 
                currentOwnScore >= scoreArr[kZeroNumber] &&
                bSetScoreNode){
                bSetScoreNode = false;
                setScoreNodePosition(nodeScore, progressbarList[idx]);
            }  
        }else{
            progressbarList[idx].progress = kOneNumber;
            calculateMaxScoreProgressBar(   historyBarList[idx], 
                                            kOneNumber, 
                                            kOneNumber, 
                                            progressBarHeight);
        }

        lblScoreList[idx].string = `${scoreArr[idx]}`;
    }

    //没有设置积分节点位置
    if(bSetScoreNode){
        let curRankLvMaxScore = scoreArr[scoreArrLen - kOneNumber];//取得当前段位最大积分值
        //如果所拥有的积分大于当前段位最大积分
        //并且所拥有的积分小于 当前段位+1的最低积分
        //说明达到连接上下模块缓冲带进度条了
        if(currentOwnScore > curRankLvMaxScore && 
            currentOwnScore < nextRankLvMinScore){
            calcProgressBuffer( progressBuffer, historyMaxBarBuffer, 
                                currentOwnScore, curRankLvMaxScore, 
                                historyMaxScore, nextRankLvMinScore);

            //设置积分节点位置
            if (curRankFightType == rankFightType){
                bSetScoreNode = false;
                setScoreNodePosition(nodeScore, progressBuffer);
            }
            
            return;
        }
    }
    //historyMaxBarBuffer.node.active = false;
    calcProgressBuffer( progressBuffer, historyMaxBarBuffer, 
                        currentOwnScore, scoreArr[scoreArrLen - kOneNumber], 
                        historyMaxScore, nextRankLvMinScore);
}

/**
 * Description: 获取赛季最大积分奖励
 */
export function getMaxSeasonScoreReward(){
    let curSeasonID = Role.Instance.seasonID;
    let tabData = tab.Data.MaxSeasonRewardCycleTableBySeasonID.getValue(curSeasonID);
    if(isValidObj(tabData)){
        return tabData;
    }

    return null;
}

/**
 * Description: 判断当前积分有无可领取的奖励
 * @param curScore  积分
 */
export function checkHaveRewardCanReceive(bForever: boolean = false): number[] {
    let idx                      = kZeroNumber;
    let historyMaxScore          = Role.Instance.RoleData.rankData.maxScore;
    let bHaveReward: number      = kZeroNumber;
    let rewardTotalCnt: number   = kZeroNumber;
    let recordScore: number      = kZeroNumber;
    let bMaxSeasonScore: number  = kZeroNumber;
    let bFind: boolean           = false;
    let maxTabLen                = tab.Data.RankScoreRewardTable.length;

    for(let data of tab.Data.RankScoreRewardTable){
        if(data.Score <= historyMaxScore){
            //该积分段有木有奖励
            let bTmpHaveReward = data.RewardID1 > kZeroNumber || data.RewardID2 > kZeroNumber;
            //最大积分的奖励检测
            if(idx == maxTabLen - kOneNumber){
                bTmpHaveReward = getMaxSeasonScoreReward() != null;
                bMaxSeasonScore = kOneNumber;
            }

            //没有奖励且或者奖励已经领取过了就pass
            if(!bTmpHaveReward || Role.Instance.RoleData.rankData.gotSocreRewardId.includes(data.Score)){
                !bFind && idx++;
                continue;
            }

            if(!bFind){
                bHaveReward = kOneNumber;
                recordScore = data.Score; 
            }
            
            rewardTotalCnt++;
            bFind = true;
            //第一元素表示是否有奖励
            //第二元素表示积分值
            //第三元素表示RankScoreRewardTable表中的下标
            //第四元素表示总共有多个可领取的奖励
            //第五元素表示是不是最高积分
            //return [kOneNumber, data.Score, idx, rewardTotalCnt];
        }else{
            if(!bForever){
                break;
            }

            let bTmpHaveReward = data.RewardID1 > kZeroNumber || data.RewardID2 > kZeroNumber;
            //最大积分的奖励检测
            if(idx == maxTabLen - kOneNumber){
                bTmpHaveReward = getMaxSeasonScoreReward() != null;
                bMaxSeasonScore = kOneNumber;
            }

            if(!bTmpHaveReward || Role.Instance.RoleData.rankData.gotSocreRewardId.includes(data.Score)){
                !bFind && idx++;
                continue;
            }

            bHaveReward = kOneNumber;
            recordScore = data.Score;
            rewardTotalCnt = kZeroNumber;
            break;
        }
    }

    //第一元素表示是否有奖励
    //第二元素表示积分值
    //第三元素表示RankScoreRewardTable表中的下标
    //第四元素表示总共有多个可领取的奖励
    //第五元素表示是不是最高积分
    //return [kZeroNumber, kNegativeOneNumber, idx, kZeroNumber];

    return [bHaveReward, recordScore, idx, rewardTotalCnt, bMaxSeasonScore];
}

/**
 * Description: 检测可不可以解锁加锁功能
 */
export function checkCanUnlockAccelerate(bInner: boolean = false){
    if(bInner){
        let rankInfo = Role.Instance.RoleData.rankData;
        return rankInfo.buffEndUTC > getServerUtcTime();
    }
    
    return Role.Instance.getOldBufferEndUTC() < Role.Instance.RoleData.rankData.buffEndUTC;
}

/**
 * Description: 刷新解锁加速功能时间
 */
export function refreshUnlockAccelerateTimes(lblTime: cc.Label, bVisible: boolean){
    if(!bVisible){
        return;
    }

    let leftTime = Role.Instance.RoleData.rankData.buffEndUTC - getServerUtcTime();
    lblTime.string = getCutDownTimesString(leftTime);
}

/**
 * Description: 检测图片路径是否合法
 */
export function checkIconPathIsValid(iconPath: string){
    if( iconPath === null || 
        iconPath === '' || 
        iconPath === undefined || 
        iconPath.length === kZeroNumber){
            //throw new Error("图片路径不存在，请检查配置！");
            cc.log("图片路径不存在，请检查配置！");
            return false;
        }

        return true;
}