
import { tab } from "../../Table/table_gen";
import SeasonRewardItem from "../Common/SeasonRewardItem";
import Role from "../Common/Role";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import {LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import SeasonRewardDisplay from "./SeasonRewardDisplay";
import { isValidObj, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import RankScoreRewardClass, { checkCanUnlockAccelerate, checkIconPathIsValid, refreshUnlockAccelerateTimes, SeasonRankCardClass, setProgressBarAndScore } from "../Common/SeasonRankCommonFunc";
import SeasonUnlockCardModel from "./SeasonUnlockCardModel";

const { ccclass, property } = cc._decorator;

@ccclass
export default class SeasonRankRewardInfo extends InfiniteCell
{
    @property({type: cc.Node })
    node_reward_1: cc.Node = null;

    @property({type: cc.Node })
    node_reward_2: cc.Node = null;

    @property({type: cc.Node })
    node_reward_3: cc.Node = null;

    @property({type: cc.Node })
    node_reward_4: cc.Node = null;

    @property({type: cc.Node })
    node_reward_5: cc.Node = null;

    @property({ displayName: "最底端进度条", type: cc.ProgressBar })
    progress_bottom: cc.ProgressBar = null;

    @property({ displayName: "进度条5", type: cc.ProgressBar })
    progress_order_5: cc.ProgressBar = null;

    @property({ displayName: "进度条4", type: cc.ProgressBar })
    progress_order_4: cc.ProgressBar = null;

    @property({ displayName: "进度条3", type: cc.ProgressBar })
    progress_order_3: cc.ProgressBar = null;

    @property({ displayName: "进度条2", type: cc.ProgressBar })
    progress_order_2: cc.ProgressBar = null;

    @property({ displayName: "最顶端进度条", type: cc.ProgressBar })
    progress_top: cc.ProgressBar = null;

    @property(cc.ProgressBar)
    progress_buffer: cc.ProgressBar = null;

    @property({ displayName: "最底端进度条数字", type: cc.Label })
    lbl_progress_bottom_value: cc.Label = null;

    @property({ displayName: "进度条数字5", type: cc.Label })
    lbl_progress_order_value_5: cc.Label = null;

    @property({ displayName: "进度条数字4", type: cc.Label })
    lbl_progress_order_value_4: cc.Label = null;

    @property({ displayName: "进度条数字3", type: cc.Label })
    lbl_progress_order_value_3: cc.Label = null;

    @property({ displayName: "进度条数字2", type: cc.Label })
    lbl_progress_order_value_2: cc.Label = null;

    @property({ displayName: "最顶端进度条数字", type: cc.Label })
    lbl_progress_top_value: cc.Label = null;

    @property({ displayName: "分数节点", type: cc.Node })
    node_current_own_score: cc.Node = null;

    @property({ displayName: "分数", type: cc.Label })
    lbl_achieve_score: cc.Label = null;

    @property({displayName:"背景", type:cc.Sprite})
    spr_bg:cc.Sprite = null;

    @property(cc.Node)
    node_unlock_card_area: cc.Node = null;

    @property(cc.Label)
    lbl_rank_level: cc.Label       = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite         = null;

    @property(cc.Sprite)
    spr_max_bar_bottom: cc.Sprite  = null;

    @property(cc.Sprite)
    spr_max_bar_buffer: cc.Sprite  = null;

    @property(cc.Sprite)
    spr_max_bar_order_5: cc.Sprite = null;

    @property(cc.Sprite)
    spr_max_bar_order_4: cc.Sprite = null;

    @property(cc.Sprite)
    spr_max_bar_order_3: cc.Sprite = null;

    @property(cc.Sprite)
    spr_max_bar_order_2: cc.Sprite = null;

    @property(cc.Sprite)
    spr_max_bar_order_1: cc.Sprite = null;

    @property(cc.Sprite)
    spr_accelerate_bg: cc.Sprite   = null;

    @property(cc.Label)
    lbl_accelerate_time: cc.Label  = null;

    @property(cc.Sprite)
    spr_achieve_bg: cc.Sprite      = null;

    private _rank_level                               = kZeroNumber;
    private _season_reward_list: SeasonRewardItem[]   = []; //赛季奖励列表
    protected _progressbar_list: cc.ProgressBar[]     = []; //积分进度条列表
    private _lbl_score_list: cc.Label[]               = []; //积分标签列表
    private _history_max_score_bar_list: cc.Sprite[]  = []; //历史最高积分进度条列表

    onLoad(){
        this.spr_accelerate_bg.node.active = false;
        this.spr_rank_bg.addComponent(cc.Button);
        this.spr_rank_bg.node.on("click", this.onClickShowView, this);
    }

    onDestroy(){
        this.clearTempArray();
    }

    public UpdateContent(celldata){
        this.initData(celldata);
        //Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_UpdateInfiniteCell, null);
    }

    public GetScoreNode(): cc.Node{
        return this.node_current_own_score;
    }
    
    public initData(rankLv: number){
        this._rank_level = rankLv;
        this.resetNodeZIndex();
        this.clearTempArray();
        //赛季奖励
        this.initSeasonRewardList();
        //进度条组
        this.initScoreProgressBarList();
        //积分标签组
        this.initScoreLabelList();
        //历史最高积分进度条组
        this.initHistoryScoreProgressBarList();
        this.setDisplayElements();
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
        this._season_reward_list         = [];
        this._progressbar_list           = [];
        this._lbl_score_list             = [];
        this._history_max_score_bar_list = [];
    }

    /* 初始赛季奖励列表 */
    private initSeasonRewardList(){
        this._season_reward_list.push(this.node_reward_1.getComponent(SeasonRewardItem));
        this._season_reward_list.push(this.node_reward_2.getComponent(SeasonRewardItem));
        this._season_reward_list.push(this.node_reward_3.getComponent(SeasonRewardItem));
        this._season_reward_list.push(this.node_reward_4.getComponent(SeasonRewardItem));
        this._season_reward_list.push(this.node_reward_5.getComponent(SeasonRewardItem));
    }

    /* 初始化积分进度条列表 */
    private initScoreProgressBarList(){
        this._progressbar_list.push(this.progress_bottom);
        this._progressbar_list.push(this.progress_order_5);
        this._progressbar_list.push(this.progress_order_4);
        this._progressbar_list.push(this.progress_order_3);
        this._progressbar_list.push(this.progress_order_2);
        this._progressbar_list.push(this.progress_top);
    }

    /* 初始化积分文本列表 */
    private initScoreLabelList(){
        this._lbl_score_list.push(this.lbl_progress_bottom_value);
        this._lbl_score_list.push(this.lbl_progress_order_value_5);
        this._lbl_score_list.push(this.lbl_progress_order_value_4);
        this._lbl_score_list.push(this.lbl_progress_order_value_3);
        this._lbl_score_list.push(this.lbl_progress_order_value_2);
        this._lbl_score_list.push(this.lbl_progress_top_value);
    }

    /* 初始化历史最高积分进度条列表 */
    private initHistoryScoreProgressBarList(){
        this._history_max_score_bar_list.push(this.spr_max_bar_bottom);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_5);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_4);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_3);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_2);
        this._history_max_score_bar_list.push(this.spr_max_bar_order_1);
    }

    /* 界面元素显示 */
    private setDisplayElements(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("The rankLevel is Error!");}
            return;
        }

        this.setRankBadge(rankGradTab.Icon);
        this.setRankLevel();
        this.setSeasonBG(rankGradTab.BackDir);
        this.setCurrentOwnScore();
        this.setUnlockCardsModel();
        this.setRewards();
        this.setProgressBars();
        this.checkUnlockAccelerateVisible();
        this.refreshUnlockAccelerateTimes();
        this.schedule(this.refreshUnlockAccelerateTimes, kOneNumber);
    }

    /* 设置竞技场徽章 */
    private async setRankBadge(icon: string){
        if(!checkIconPathIsValid(icon)){return;}
        
        let sf = await LoadResAsync(icon, cc.SpriteFrame)
        if(sf) {
            this.spr_rank_bg.spriteFrame = sf;
        }
    }

    /* 设置竞技场等级 */
    private setRankLevel(){
        this.lbl_rank_level.string = `${this._rank_level}`;
    }

    /* 设置赛季背景图
     * @param bgURL 赛季背景图
     */
    private async setSeasonBG(bgURL: string){
        if(!checkIconPathIsValid(bgURL)){return;}

        let sf = await LoadResAsync(bgURL, cc.SpriteFrame)
        if(sf) {
            this.spr_bg.spriteFrame = sf;
        }
    }

    /* 设置当前所拥有的积分 */
    private setCurrentOwnScore(){
        this.lbl_achieve_score.string = `${Role.Instance.RoleData.rankData.score}`;
    }

    /* 设置赛季等级解锁的卡牌列表 */
    private setUnlockCardsModel(){
        let unlockCardList = SeasonRankCardClass.getInstance().getUnlockCardListsFromRankLevel(this._rank_level);
        this.node_unlock_card_area.getComponent(SeasonUnlockCardModel).initData(this._rank_level, unlockCardList);
    }

    /* 设置赛季奖励 */
    private setRewards(){
        let index = kZeroNumber;
        for (let data of tab.Data.RankScoreRewardTable){
            if (data.FightNum == this._rank_level && data.RewardCount1 != kZeroNumber){
                if(index < this._season_reward_list.length){
                    this._season_reward_list[index].initData(data.RewardID1, data.RewardType1, data.RewardCount1, 
                                                             data.RewardID2, data.RewardType2, data.RewardCount2);
                    this._season_reward_list[index].setRewardScore(data.Score);
                    /*if(data.RewardID1 == GuideSpecialCardID){ //用于新手引导，勿动
                        this._season_reward_list[index].node.name = "SpecialCardOfGuide";
                    }*/
                }
                ++index;
            }
        }
    }

    /* 设置进度条组 */
    public setProgressBars(){
        setProgressBarAndScore( this._rank_level, 
                                tab.RankFightType.RankFightType_Low,
                                this.node_current_own_score, 
                                this.progress_buffer, 
                                this._progressbar_list, 
                                this._lbl_score_list,
                                this._history_max_score_bar_list,
                                this.spr_max_bar_buffer);
    }

    /* 设置解锁加锁效果 */
    private refreshUnlockAccelerateTimes(){
        refreshUnlockAccelerateTimes(this.lbl_accelerate_time, this.spr_accelerate_bg.node.active);
    }

    /* 检测解锁加速模块是否可见 */
    private checkUnlockAccelerateVisible(){
        this.spr_accelerate_bg.node.active = false
            //(this._rank_level == Role.Instance.RoleGrade) && checkCanUnlockAccelerate(true);
    }
    
    /*  */
    private onClickShowView(){
        let self = this;
        showPopLayerV2("prefab/SeasonRewardDisplay", SeasonRewardDisplay).then(rewardDetail =>{
            rewardDetail.setRankLevel(self._rank_level);
        });
    }
}
