/*
 * @Descripttion: 历史达到联赛模块
 */

import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import RankScoreRewardClass, { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import { LoadResAsync } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class PlayerInfoSeasonRecordModel extends cc.Component {
    @property(cc.Node)
    node_max_score: cc.Node = null;

    @property(cc.Label)
    lbl_max_score: cc.Label = null;

    @property(cc.Node)
    node_spine_max: cc.Node = null;

    @property(cc.Sprite)
    spr_badge_icon_max: cc.Sprite = null;

    @property(cc.Node)
    node_history_score: cc.Node = null;

    @property(cc.Label)
    lbl_history_score: cc.Label = null;

    @property(cc.Node)
    node_spine_history: cc.Node = null;

    @property(cc.Sprite)
    spr_badge_icon_history: cc.Sprite = null;

    @property(cc.Label)
    lbl_history_rank_lv: cc.Label     = null;

    @property(cc.Label)
    lbl_history_max_rank_lv: cc.Label = null;

    public initData(historyScore: number, historyMaxScore: number){
        this.setHistoryScore(historyScore);
        this.setHistoryMaxScore(historyMaxScore);
        this.setSeasonBadgeOrSpine(historyScore);
        this.setSeasonBadgeOrSpine(historyMaxScore, true);
    }

    /* 设置赛季积分
     * @param score  积分
     */
    private setHistoryScore(score: number){
        this.lbl_history_score.string = `${score}`;
    }

    /* 设置赛季历史最高积分
     */
    private setHistoryMaxScore(maxScore: number){
        this.lbl_max_score.string = `${maxScore}`;
    }

    /* 设置赛季徽章或者是徽章spine
     * @param score     积分
     * @param bMaxNode  是不是历史最高积分节点
     */
    private setSeasonBadgeOrSpine(score: number, bMaxNode: boolean = false){
        let rankLv = RankScoreRewardClass.getInstance().getRankLevelToScore(score);
        let rankGradeTab = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if(!isValidObj(rankGradeTab)){
            if(!cc.sys.isNative){throw new Error("The rankLv is Error!");}
            return;
        }
        let nodeSpine = bMaxNode ? this.node_spine_max : this.node_spine_history;
        this.checkSpineOrBadgeVisible(rankGradeTab.Type);
        /*
        if(rankGradeTab.Type == tab.RankFightType.RankFightType_Hight){
            nodeSpine.removeAllChildren(true);
            CreateSpine(rankGradeTab.SpineId).then(skel=>{
                nodeSpine.addChild(skel.node);
                skel.setAnimation(kZeroNumber, "walk_0", true);
            });
            return;
        }
        */
        bMaxNode ? this.lbl_history_max_rank_lv.string = `${rankLv}` : this.lbl_history_rank_lv.string = `${rankLv}`;
        this.setSeasonBadgeIcon(rankGradeTab.Icon, bMaxNode ? this.spr_badge_icon_max : this.spr_badge_icon_history);
    }

    /* 设置赛季徽章图标
     * @param icon      赛季徽章icon
     * @param sprIcon   徽章spr节点
     */
    private async setSeasonBadgeIcon(icon: string, sprBadgeNode: cc.Sprite){
        if(!checkIconPathIsValid(icon)){return;}
        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            sprBadgeNode.spriteFrame = sf;
        }
    }

    /* 检测赛季徽章or骨骼动画的可见性
     * @param type  赛季类型
     */
    private checkSpineOrBadgeVisible(type){
        /*this.spr_badge_icon_max.node.active   = type == tab.RankFightType.RankFightType_Low;
        this.spr_badge_icon_history.node.active = type == tab.RankFightType.RankFightType_Low;
        this.node_spine_history.active          = type == tab.RankFightType.RankFightType_Hight;
        this.node_spine_max.active              = type == tab.RankFightType.RankFightType_Hight;*/
        this.spr_badge_icon_max.node.active     = true;
        this.spr_badge_icon_history.node.active = true;
        this.node_spine_history.active          = false;
        this.node_spine_max.active              = false;
    }
}
