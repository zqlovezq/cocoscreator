/*
 * @Descripttion: 赛季竞技场和排位赛信息板
 */

import { tab } from "../../Table/table_gen";
import { isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import Role from "../Common/Role";
import RankScoreRewardClass, { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { getServerUtcTime } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonRankInfoPanel extends InfiniteCell {

    @property({displayName:"赛季名字", type:cc.Label})
    lbl_title: cc.Label             = null;

    @property({displayName:"结束倒计时", type:cc.Label})
    lbl_cutdown_time:cc.Label       = null;

    @property(cc.Sprite)
    spr_cutdown_time_bg: cc.Sprite  = null;

    @property(cc.Node)
    node_unlock_season: cc.Node     = null;

    @property(cc.Sprite)
    spr_score_icon: cc.Sprite       = null;
    
    @property(cc.Label)
    lbl_need_score: cc.Label        = null;

    @property(cc.Label)
    lbl_fixed_tip_1: cc.Label       = null;

    @property(cc.Label)
    lbl_fixed_tip_2: cc.Label       = null;

    @property(cc.Label)
    lbl_next_level: cc.Label        = null;

    @property(cc.Label)
    lbl_unlock_season_tip: cc.Label = null;

    private _season_end_times: number = kZeroNumber; //赛季结束时间

    onLoad(){
        this.lbl_fixed_tip_2.node.active = false; //策划改了方案
    }
    
    UpdateContent(celldata){
        //this.initData();
    }

    public GetScoreNode(): cc.Node{
        return null;
    }
    
    public initData(){
        let curRankLevel = Role.Instance.RoleGrade;
        let maxRankLevel = RankScoreRewardClass.getInstance().getMaxSeasonRankLevel();
        this.lbl_title.node.active           = curRankLevel > maxRankLevel;
        this.spr_cutdown_time_bg.node.active = curRankLevel > maxRankLevel;
        this.node_unlock_season.active       = curRankLevel <= maxRankLevel;
        curRankLevel <= maxRankLevel ? this.setRankInfo() : this.setQualifierInfo();
    }

    /* 设置排位赛信息 */
    private setQualifierInfo(){
        let qualifierData        = tab.Data.RankGradeTableByGrade.getValue(Role.Instance.RoleGrade);
        if(isValidObj(qualifierData) && 
            tab.RankFightType.RankFightType_Hight == qualifierData.Type){
                let fightId      = Role.Instance.seasonID;
                let rankFightTab = tab.Data.RankFightTableById.getValue(fightId);
                if (!isValidObj(rankFightTab)){
                    return;
                }

                this._season_end_times = rankFightTab.EndTime;
                this.lbl_title.string = `${rankFightTab.Name}`;
                this.refreshCutDownTime();
                this.schedule(this.refreshCutDownTime, kOneNumber);
        }
    }

    /* 设置竞技场信息 */
    private setRankInfo(){
        let maxRankLevel = RankScoreRewardClass.getInstance().getMaxSeasonRankLevel();
        let nextRankLv = Role.Instance.RoleGrade + kOneNumber;
        let needScoreOfNextRankLv = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(nextRankLv);
        let diffScore = needScoreOfNextRankLv - Role.Instance.RoleData.rankData.score;
        this.lbl_need_score.string = `${diffScore}`;
        
        this.lbl_unlock_season_tip.node.active = Role.Instance.RoleGrade == maxRankLevel;
        this.lbl_fixed_tip_1.node.active = Role.Instance.RoleGrade < maxRankLevel;
        //this.lbl_fixed_tip_2.node.active = Role.Instance.RoleGrade < maxRankLevel; //策划改了方案
        this.lbl_next_level.node.active = Role.Instance.RoleGrade < maxRankLevel;

        if(Role.Instance.RoleGrade < maxRankLevel){
            let rankGradeData = tab.Data.RankGradeTableByGrade.getValue(nextRankLv);
            if(isValidObj(rankGradeData)){
                this.lbl_next_level.string = rankGradeData.Title;
            }
            
        }
    }

    /* 刷新赛季结束倒计时 */
    public refreshCutDownTime(){
        let leftTime = this._season_end_times - getServerUtcTime();
        this.lbl_cutdown_time.string = getCutDownTimesString(leftTime);
    }
}
