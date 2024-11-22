/**
 * 
*/

import { tab } from "../../Table/table_gen";
import SeasonRewardItem from "../Common/SeasonRewardItem";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { CreateSpine, LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import SeasonRewardDisplay from "./SeasonRewardDisplay";
import { isValidObj, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import RankScoreRewardClass, { checkCanUnlockAccelerate, checkIconPathIsValid, refreshUnlockAccelerateTimes, setProgressBarAndScore } from "../Common/SeasonRankCommonFunc";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonQulifierRewardInfo extends InfiniteCell {

    @property({ displayName: "奖励1", type: cc.Node })
    node_reward1: cc.Node = null;

    @property({ displayName: "奖励2", type: cc.Node })
    node_reward2: cc.Node = null;

    @property({ displayName: "奖励3", type: cc.Node })
    node_reward3: cc.Node = null;

    @property({ displayName: "进度条bottom", type: cc.ProgressBar })
    progress_bottom: cc.ProgressBar = null;

    @property({ displayName: "进度条1", type: cc.ProgressBar})
    progress_order_1: cc.ProgressBar = null;
    
    @property({ displayName: "进度条2", type: cc.ProgressBar })
    progress_middle: cc.ProgressBar = null;

    @property({ displayName: "进度条3", type: cc.ProgressBar })
    progress_top: cc.ProgressBar = null;

    @property(cc.ProgressBar)
    progress_buffer: cc.ProgressBar = null;

    @property({ displayName: "进度条数字bottom", type: cc.Label })
    lbl_progress_score_bottom: cc.Label = null;

    @property({ displayName: "进度条数字1", type: cc.Label })
    lbl_progress_score_order_1: cc.Label = null;

    @property({ displayName: "进度条数字2", type: cc.Label })
    lbl_progress_score_middle: cc.Label = null;

    @property({ displayName: "进度条数字3", type: cc.Label })
    lbl_progress_score_top: cc.Label = null;

    @property({ displayName: "分数节点", type: cc.Node })
    node_current_own_score: cc.Node = null;

    @property({ displayName: "分数", type: cc.Label })
    lbl_score: cc.Label = null;

    @property({type:cc.Label})
    lbl_rank_name:cc.Label = null;

    @property({type:cc.Node})
    node_spine:cc.Node = null;

    @property({displayName:"背景", type:cc.Sprite})
    spr_bg: cc.Sprite = null;

    @property(cc.Button)
    btn_info: cc.Button = null;

    @property(cc.Sprite)
    spr_max_bar_bottom: cc.Sprite  = null;

    @property(cc.Sprite)
    spr_max_bar_order_1: cc.Sprite = null;

    @property(cc.Sprite)
    spr_max_bar_middle: cc.Sprite  = null;

    @property(cc.Sprite)
    spr_max_bar_top: cc.Sprite     = null;

    @property(cc.Sprite)
    spr_max_buffer: cc.Sprite      = null;

    @property(cc.Sprite)
    spr_accelerate_bg: cc.Sprite   = null;

    @property(cc.Label)
    lbl_accelerate_time: cc.Label  = null;

    @property(cc.Sprite)
    spr_achieve_bg: cc.Sprite      = null;

    @property(cc.Label)
    lbl_rank_level: cc.Label       = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    private _reward_list: SeasonRewardItem[]          = [];  //奖励列表
    private _lbl_score_list: cc.Label[]               = [];  //积分列表
    private _progressbar_list: cc.ProgressBar[]       = [];  //积分进度条列表
    private _history_max_score_bar_list: cc.Sprite[]  = [];  //历史最高积分进度条列表
    private _rank_level: number                       = kZeroNumber;
    
    
    onLoad(){
        this.spr_accelerate_bg.node.active = false;
        this.btn_info.node.on("click", this.onClickShowView, this);
        this.spr_rank_bg.addComponent(cc.Button);
        this.spr_rank_bg.node.on("click", this.onClickShowView, this);
    }

    onDestroy(){
        this.clearTempArray();
    }

    UpdateContent(celldata){
        if(celldata){
            this.initData(celldata);
        }
    }

    public GetScoreNode(): cc.Node{
        return this.node_current_own_score;
    }

    public initData(rankLv: number){
        this._rank_level = rankLv;
        this.resetNodeZIndex();
        this.clearTempArray();
        //奖励列表
        this.initSeasonRewardList();
        //积分列表
        this.initScoreLabelList();
        //进度条列表
        this.initScoreProgressBarList();
        //历史最高积分进度条组
        this.initHistoryScoreProgressBarList();
        this.setDisplay();
    }

    /* 重置节点zIndex */
    private resetNodeZIndex(){
        let nextRankLvMinScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(this._rank_level + kOneNumber);
        let curOwnScore        = Role.Instance.RoleData.rankData.score;
        let diff               = nextRankLvMinScore - curOwnScore;
        let halfSprScoreH      = this.spr_achieve_bg.node.getContentSize().height / kTwoNumber;
        halfSprScoreH          = Math.ceil(halfSprScoreH);
        let bAdjust            = (nextRankLvMinScore > curOwnScore) && (diff < halfSprScoreH && diff > kZeroNumber);
        if(bAdjust){
            this.node.zIndex = this.node.zIndex + kOneNumber;
        }
    }

    /* 清除临时的数组 */
    private clearTempArray(){
        this._reward_list                = [];
        this._progressbar_list           = [];
        this._lbl_score_list             = [];
        this._history_max_score_bar_list = [];
    }

    /* 初始赛季奖励列表 */
    private initSeasonRewardList(){
        this._reward_list.push(this.node_reward1.getComponent(SeasonRewardItem));
        this._reward_list.push(this.node_reward2.getComponent(SeasonRewardItem));
        this._reward_list.push(this.node_reward3.getComponent(SeasonRewardItem));
    }

    /* 初始化积分进度条列表 */
    private initScoreProgressBarList(){
        this._progressbar_list.push(this.progress_bottom);
        this._progressbar_list.push(this.progress_order_1);
        this._progressbar_list.push(this.progress_middle);
        this._progressbar_list.push(this.progress_top);
    }

    /* 初始化积分文本列表 */
    private initScoreLabelList(){
        this._lbl_score_list.push(this.lbl_progress_score_bottom);
        this._lbl_score_list.push(this.lbl_progress_score_order_1);
        this._lbl_score_list.push(this.lbl_progress_score_middle);
        this._lbl_score_list.push(this.lbl_progress_score_top);
    }

    /* 初始化历史最高积分进度条列表 */
    private initHistoryScoreProgressBarList(){
        this._history_max_score_bar_list.push(this.spr_max_bar_bottom);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_1);
        this._history_max_score_bar_list.push(this.spr_max_bar_middle);
        this._history_max_score_bar_list.push(this.spr_max_bar_top);
    }

    /* 界面内容显示 */
    private setDisplay(){
        let rankGradTabData = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTabData)){
            if(!cc.sys.isNative){throw new Error("Rank Level is Error!");}
            return;
        }

        this.setRankName(rankGradTabData.Title);
        this.setRankBG(rankGradTabData.BackDir);
        this.setRankSpine(rankGradTabData.SpineId);
        this.groupRewards();
        this.setCurrentScore();
        this.setProgressBars();
        this.checkUnlockAccelerateVisible();
        this.refreshUnlockAccelerateTimes();
        this.schedule(this.refreshUnlockAccelerateTimes, kOneNumber);
    }

    /* 设置排位赛界面背景图 */
    private async setRankBG(bgURL: string){
        if(!checkIconPathIsValid(bgURL)){return;}
        
        let sf = await LoadResAsync(bgURL, cc.SpriteFrame)
        if(sf) {
            this.spr_bg.spriteFrame = sf;
        }
    }

    /* 设置排位赛名称 */
    private setRankName(name: string){
        this.lbl_rank_name.string = name;
    }

    /* 设置排位赛spine */
    private /*async*/ setRankSpine(spineId: number){
        this.lbl_rank_level.string = `${this._rank_level}`;
        //暂且注掉 动画没有，后期开启
       /* this.node_spine.removeAllChildren(true);
        let self = this;
        CreateSpine(spineId).then(skel=>{
            self.node_spine.addChild(skel.node);
            skel.setAnimation(kZeroNumber, "walk_0", true);
            skel.addComponent(cc.Button);
            skel.node.on("click", self.onClickShowView, self);
        });*/
    }

    /* 组织奖励数据 */
    private groupRewards(){
        let index = kZeroNumber;
        let rewardListLen = this._reward_list.length;
        for (let data of tab.Data.RankScoreRewardTable){
            if (data.FightNum == this._rank_level && 
                data.RewardCount1 != kZeroNumber && 
                index < rewardListLen){
                this._reward_list[index].initData(data.RewardID1, data.RewardType1, data.RewardCount1, 
                                                  data.RewardID2, data.RewardType2, data.RewardCount2);
                this._reward_list[index].setRewardScore(data.Score);
                ++index;
            }
        }
    }

    /* 设置当前积分 */
    private setCurrentScore(){
        this.lbl_score.string = `${Role.Instance.RoleData.rankData.score}`;
    }

    /* 初始化进度条 */
    public setProgressBars(){
        setProgressBarAndScore( this._rank_level, 
                                tab.RankFightType.RankFightType_Hight, 
                                this.node_current_own_score, 
                                this.progress_buffer, 
                                this._progressbar_list, 
                                this._lbl_score_list,
                                this._history_max_score_bar_list,
                                this.spr_max_buffer);
    }

    /* 刷新解锁加锁效果 */
    private refreshUnlockAccelerateTimes(){
        refreshUnlockAccelerateTimes(this.lbl_accelerate_time, this.spr_accelerate_bg.node.active);
    }

    /* 检测解锁加速模块是否可见 */
    private checkUnlockAccelerateVisible(){
        // this.spr_accelerate_bg.node.active = 
        //     (this._rank_level == Role.Instance.RoleGrade) && checkCanUnlockAccelerate(true);
        this.spr_accelerate_bg.node.active = false
    }

    /*  */
    private onClickShowView(){
        let self = this;
        showPopLayerV2("prefab/SeasonRewardDisplay", SeasonRewardDisplay).then(reward => {
            reward.setRankLevel(self._rank_level);
        });
    }
}
