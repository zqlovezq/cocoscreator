/*
 * @Descripttion: 当前赛季模块
 */

import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import RankScoreRewardClass, { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import { CreateSpine, getServerUtcTime } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerInfoSeasonModel extends cc.Component {

    @property(cc.Node)
    node_spine: cc.Node = null;
    
    @property(cc.Node)
    node_badge_icon: cc.Node = null;
    
    @property(cc.Node)
    node_max_score: cc.Node = null;
    
    @property(cc.Label)
    lbl_max_score: cc.Label = null;

    @property(cc.Node)
    node_season_over: cc.Node = null;
    
    @property(cc.Label)
    lbl_over_time: cc.Label = null;

    //@property(cc.Label)
    //lbl_current_tips: cc.Label = null;

    @property(cc.Label)
    lbl_tips_arrive_quailifer: cc.Label = null;

    @property(cc.Label)
    lbl_tips_unreach_quailifer: cc.Label = null;

    public initData(curScore: number, maxScore: number, overUTC: number){
        this.setMaxScore(maxScore);
        this.setCurScore(curScore);
        this.setSeasonBadgeOrSpine(curScore);
        this.setOverTimes(overUTC);
    }

    /**     
     * Description: 设置当前赛季最高积分
     * @param maxScore  最高积分
     */
    private setMaxScore(maxScore: number){
        this.lbl_max_score.string = `${maxScore}`;
    }

    /* 设置赛季当前积分
     * @param curScore  当前积分
     */
    private setCurScore(curScore: number){

    }

    /* 设置赛季结束倒计时
     * @param overTimesUTC  结束UTC
     */
    private setOverTimes(overTimesUTC: number){
        let leftTime = overTimesUTC - getServerUtcTime();
        this.lbl_over_time.string = getCutDownTimesString(leftTime);
    }

    /**     
     * Description: 设置提示语句
     * @param bArriveQuailifer  是否达到联赛
     */
    private setTips(bArriveQuailifer: boolean){
        this.lbl_tips_arrive_quailifer.node.active  = bArriveQuailifer;
        this.lbl_tips_unreach_quailifer.node.active = !bArriveQuailifer;
        this.node_max_score.active                  = bArriveQuailifer;
        this.node_season_over.active                = bArriveQuailifer;
        this.node_badge_icon.active                 = !bArriveQuailifer;
        //this.node_spine.active                      = bArriveQuailifer;  //后期有spine 全部需要去掉注释
        this.node_spine.active                      = true;
    }

    /* 设置赛季徽章 or Spine
     * @param curScore  赛季当前积分
     */
    private setSeasonBadgeOrSpine(curScore: number){
        let rankLv           = RankScoreRewardClass.getInstance().getRankLevelToScore(curScore);
        let tabRankGradeData = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if(!isValidObj(tabRankGradeData)){
            if(!cc.sys.isNative){throw new Error("Current Season Level is Error!");}
            return;
        }
        
        /*(tabRankGradeData.Type == tab.RankFightType.RankFightType_Low) && this.setSeasonBadgeIcon();
        (tabRankGradeData.Type == tab.RankFightType.RankFightType_Hight) && this.setSeasonSpine(tabRankGradeData.SpineId);*/
        this.setSeasonBadgeIcon(tabRankGradeData.Type == tab.RankFightType.RankFightType_Hight);
    }

    /* 设置赛季徽章
     */
    private async setSeasonBadgeIcon(bHightSeason: boolean){
        this.setTips(bHightSeason);
    }

    /* 设置赛季徽章骨骼动画
     */
    private setSeasonSpine(spineId: number){
        this.setTips(true);
        this.node_spine.removeAllChildren(true);
        let self = this;
        CreateSpine(spineId).then(skel=>{
            self.node_spine.addChild(skel.node);
            skel.setAnimation(kZeroNumber, "walk_0", true);
        });
    }
}
