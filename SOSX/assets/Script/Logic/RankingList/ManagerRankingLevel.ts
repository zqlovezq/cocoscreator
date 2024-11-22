/*
 *  管理排行榜排名类
 */

import { kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";


export default class ManagerRankingLevel {
    private _seasonScoreToRoleRankingLvMap          : Map<number, number>   = new Map<number, number>(); /*  */
    private _seasonScoreToAllianceRankingLvMap      : Map<number, number>   = new Map<number, number>(); /*  */
    private _seasonScoreToHistoryRoleRankingLvMap   : Map<number, number>   = new Map<number, number>(); /*  */
    
    private static _instance: ManagerRankingLevel = null; /*  */

     /*  */
    public static getInstance(): ManagerRankingLevel {
        if (!ManagerRankingLevel._instance){
            ManagerRankingLevel._instance = new ManagerRankingLevel();
        }
        return ManagerRankingLevel._instance;
    }

    /* 保存排名和赛季积分到缓存中
     * @param lv       排名
     * @param score    赛季积分
     * @param bRole    是否是个人排行榜
     * @param bHistory 是否是历史记录
     */
    public saveRankingLvCache(lv: number, score: number, bRole: boolean, bHistory: boolean){
        bRole  && !bHistory && this.constructRankingLv(this._seasonScoreToRoleRankingLvMap, lv, score);
        bRole  && bHistory  && this.constructRankingLv(this._seasonScoreToHistoryRoleRankingLvMap, lv, score);
        !bRole && this.constructRankingLv(this._seasonScoreToAllianceRankingLvMap, lv, score);
    }

    /* 构建排行榜等级 */
    private constructRankingLv(cacheMap: Map<number, number>, lv: number, score: number){
        if(!cacheMap.has(score)){
            cacheMap.set(score, lv);
        }
    }

    /* 根据排名获取赛季积分
     * @param score    赛季积分
     * @param bRole    是否是个人排行榜
     * @param bHistory 是否是历史记录
     * @returns  赛季积分
     */
    public getRankingLvToScore(score: number, bRole: boolean, bHistory: boolean){
        let retVal = kNegativeOneNumber;
        bRole  && !bHistory && this._seasonScoreToRoleRankingLvMap.has(score)        && (retVal = this._seasonScoreToRoleRankingLvMap.get(score));
        bRole  && bHistory  && this._seasonScoreToHistoryRoleRankingLvMap.has(score) && (retVal = this._seasonScoreToHistoryRoleRankingLvMap.get(score));
        !bRole && this._seasonScoreToAllianceRankingLvMap.has(score)                 && (retVal = this._seasonScoreToAllianceRankingLvMap.get(score));
        return retVal;
    }

    /*  */
    public destroy(){
        this._seasonScoreToRoleRankingLvMap.clear();
        this._seasonScoreToAllianceRankingLvMap.clear();
        this._seasonScoreToHistoryRoleRankingLvMap.clear();
    }

}
