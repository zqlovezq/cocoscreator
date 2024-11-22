/*
 *  最大排位赛模块
 */

import { proto } from "../../Protocol/client_protocol";
import { Net } from "../../Protocol/Net";
import { tab } from "../../Table/table_gen";
import { checkRewardIsEmotionOrBattleMap, isValidObj, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import EmojiPlayer from "../Common/EmojiPlayer";
import Role from "../Common/Role";
import RankScoreRewardClass, { ItemState } from "../Common/SeasonRankCommonFunc";
import SeasonRewardItem from "../Common/SeasonRewardItem";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { CreateSpine, popRewardLayer_Ex, showPopLayerV2, ShowTipsOfCustomString } from "../Utils/GameUtils";
import SeasonRewardDisplay from "./SeasonRewardDisplay";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonMaxQualifier extends InfiniteCell {

    @property({type:cc.Label})
    lbl_rank_name: cc.Label         = null;

    @property(cc.Button)
    btn_info: cc.Button             = null;

    @property(cc.Node)
    node_spine: cc.Node             = null;
    
    @property(cc.Label)
    lbl_max_value: cc.Label         = null;
    
    @property({ type: cc.ProgressBar })
    progress_max: cc.ProgressBar    = null;

    @property(cc.ProgressBar)
    progress_buffer: cc.ProgressBar = null;

    @property(cc.Node)
    node_current_own_score: cc.Node = null;

    @property(cc.Label)
    lbl_achieve_score: cc.Label     = null;

    @property(cc.Sprite)
    spr_max_bar: cc.Sprite          = null;

    @property(cc.Sprite)
    spr_buffer_bar: cc.Sprite       = null;
    
    @property(cc.Label)
    lbl_rank_level: cc.Label       = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    @property(cc.Node)
    node_reward_item: cc.Node = null;
    
    @property(cc.Node)
    node_emotion: cc.Node = null;

    @property(cc.Node)
    node_emotion_idle: cc.Node = null;

    @property(cc.Node)
    node_play_emotion: cc.Node = null;

    @property(cc.Sprite)
    spr_can_receive: cc.Sprite = null;

    @property(cc.Sprite)
    spr_already_received: cc.Sprite = null;
    
    private _rank_level: number   = kZeroNumber;
    private _reward_id: number    = kZeroNumber;
    private _reward_score: number = kZeroNumber;
    private _state: ItemState;

    onLoad(){
        this.node_current_own_score.active = false;
        this.btn_info.node.on("click", this.onClickShowView, this);

        this.spr_rank_bg.addComponent(cc.Button);
        this.spr_rank_bg.node.on("click", this.onClickShowView, this);

        this.node_reward_item.active = false;
        this.node_emotion.active     = false;
        this._state                  = ItemState.NONE;

        /* 领取赛季积分奖励 */
        Net.listenProtocol(proto.Ptl.GetRankScoreRewardRsp, async  (buffer, ptl) =>{
            let msg = proto.Msg_GetRankScoreRewardRsp.decode(buffer)
            cc.log("GetRankScoreRewardRsp (领取赛季积分奖励) msg: "+JSON.stringify(msg))
            if (null != msg && proto.Msg_GetRankScoreRewardRsp.ErrorCode.Succeed === msg.result){
                if (this._reward_score == msg.rewardId){
                    Role.Instance.RoleData.rankData.gotSocreRewardId.push(this._reward_score);
                    this.setRewardState();
                    popRewardLayer_Ex(msg.rewards, ()=>{
                        if(msg.rewards.length > 0){
                            checkRewardIsEmotionOrBattleMap(msg.rewards[kZeroNumber].rewardId, msg.rewards[kZeroNumber].rewardType);
                        }

                    });
                }
            }
        }, this);
    }

    UpdateContent(celldata){
        if(celldata){
            this.initData(celldata);
        }
    }

    public GetScoreNode(): cc.Node{
        //return this.node_current_own_score;
        return null;
    }
    
    public initData(rankLv: number){
        this._rank_level = rankLv;
        this.setDisplay();
    }

    /* 设置界面显示内容
     */
    private setDisplay(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("RankGradeTable Error!");}
            return;
        }

        // this.setRankName(rankGradTab.Title);
        this.setScoreValue();
        this.setProgressBarValue();
        // this.setRankSpine(rankGradTab.SpineId);
        this.setRewardState();
        this.groupReward();
    }
    
    /* 设置奖励状态
     */
    private setRewardState(){
        let rewardTab = tab.Data.RankScoreRewardTableByScore.getValue(this._reward_score);
        if (!isValidObj(rewardTab)){
            return;
        }

        let score = Role.Instance.RoleData.rankData.maxScore;
        this._state = (score < rewardTab.Score) ? 
                               ItemState.LOCK : 
                               (    Role.Instance.RoleData.rankData.gotSocreRewardId.includes(this._reward_score) ? 
                                    ItemState.ALREADY_RECEIVE : ItemState.CAN_RECEIVE
                               );


        this.spr_can_receive.node.active      = (ItemState.CAN_RECEIVE == this._state);
        this.spr_already_received.node.active = (ItemState.ALREADY_RECEIVE == this._state);
    }
    
    /* 设置赛季名称
     */
    private setRankName(name: string){
        this.lbl_rank_name.string = name;
    }

    /* 设置赛季名称
     */
    private setScoreValue(){
        let score = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(this._rank_level);
        this.lbl_max_value.string = `${score}`;
    }

    /* 设置排位赛徽章spine
     */
    private setRankSpine(spineId: number){
        this.lbl_rank_level.string = `${this._rank_level}`;
        this.node_spine.active = false;
        /*this.node_spine.removeAllChildren(true);
        let self = this;
        CreateSpine(spineId).then(skel=>{
            self.node_spine.addChild(skel.node);
            skel.setAnimation(kZeroNumber, "walk_0", true);
        });*/
    }

    /* 设置进度条
     */
    private setProgressBarValue(){
        let maxSeasonScore    = RankScoreRewardClass.getInstance().getMaxRankScore();
        let preRankMaxScore   = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(this._rank_level - kOneNumber, true);
        let rankInfo          = Role.Instance.RoleData.rankData;
        let progressVal       = kZeroNumber;
        let progressBufferVal = kZeroNumber;
        if(rankInfo.score > preRankMaxScore && rankInfo.score >= maxSeasonScore){
            progressVal       = rankInfo.score / maxSeasonScore; 
            progressVal       = progressVal > kOneNumber ? kOneNumber : progressVal;
            progressBufferVal = rankInfo.score >= maxSeasonScore ? kOneNumber : kZeroNumber;
            this.setScoreNodePosition(rankInfo.score, maxSeasonScore);
        }

        if(rankInfo.maxScore > preRankMaxScore){
            this.setHistoryMaxScoreBar(maxSeasonScore);
        }
        
        this.progress_max.progress    = progressVal;
        this.progress_buffer.progress = progressBufferVal;
        this.lbl_achieve_score.string = `${rankInfo.score}`;
    }
    
    /* 设置积分节点位置
     * @param curScore        当前积分值
     * @param maxSeasonScore  配置表中赛季最大积分值
     */
    private setScoreNodePosition(curScore: number, maxSeasonScore: number){
        let progressBarPosY = this.progress_max.node.position.y;
        let progressHeight  = this.progress_max.node.getContentSize().height;
        let progressVal     =  this.progress_max.progress;
        if(curScore > maxSeasonScore){
            progressBarPosY = this.progress_buffer.node.position.y;
            progressHeight  = this.progress_buffer.node.getContentSize().height;
            progressVal     =  this.progress_buffer.progress;
        }
        
        let barHeight       = progressBarPosY + (progressHeight * progressVal);
        let ownScoreNodePos = this.node_current_own_score.getPosition();
        ownScoreNodePos.y   = barHeight;
        this.node_current_own_score.setPosition(ownScoreNodePos);
        this.node_current_own_score.active = true;
    }

    /* 设置历史最大积分进度条
     */
    private setHistoryMaxScoreBar(maxSeasonScore: number){
        let historyMaxScore = Role.Instance.RoleData.rankData.maxScore;
        let progressVal     = historyMaxScore / maxSeasonScore; 
        progressVal         = progressVal > kOneNumber ? kOneNumber : progressVal;

        let sprBarSize      = this.spr_max_bar.node.getContentSize();
        sprBarSize.height   = progressVal * this.progress_max.node.getContentSize().height;
        this.spr_max_bar.node.setContentSize(sprBarSize);

        if(historyMaxScore > maxSeasonScore){
            sprBarSize        = this.spr_buffer_bar.node.getContentSize();
            sprBarSize.height = this.progress_buffer.node.getContentSize().height;
            this.spr_buffer_bar.node.setContentSize(sprBarSize);
        }
    }

    /* 组织奖励数据
     */
     private groupReward(){
        /*
        for (let data of tab.Data.RankScoreRewardTable){
            if (data.FightNum == this._rank_level && 
                data.RewardCount1 != kZeroNumber){
                this._reward_id    = data.RewardID1;
                this._reward_score = data.Score;
                if(data.RewardType1 == tab.RewardType.RewardType_Emotion){
                    this.createEmotion();
                    return;
                }
                this.node_reward_item.active = true;
                this.node_reward_item.getComponent(SeasonRewardItem).initData(data.RewardID1, data.RewardType1, data.RewardCount1, 
                                                  data.RewardID2, data.RewardType2, data.RewardCount2);
                this.node_reward_item.getComponent(SeasonRewardItem).setRewardScore(data.Score);
            }
        }
        */

        for (let data of tab.Data.RankScoreRewardTable){
            if (data.FightNum == this._rank_level){
                this._reward_score = data.Score;
                break;
            }
        }

        let curSeasonID = Role.Instance.seasonID;
        let tabData = tab.Data.MaxSeasonRewardCycleTableBySeasonID.getValue(curSeasonID);
        if(isValidObj(tabData)){
            this._reward_id = tabData.RewardID;
            if(tab.RewardType.RewardType_Emotion === tabData.RewardType){
                this.createEmotion();
                return;
            }
        }
    }

    private async createEmotion(){
        let emojiData = tab.Data.EmojiTableByID.getValue(this._reward_id);
        let bValid    = isValidObj(emojiData);
        this.node_emotion.active = bValid;
        
        if(bValid) {
            this.node_emotion_idle.removeAllChildren();
            let spine = await CreateSpine(emojiData.SpineID);
            spine.node.scale = kOneNumber;
            this.node_emotion_idle.addChild(spine.node);
            spine.setAnimation(kZeroNumber, "idle", true);
        }
    }

     /* 播放表情动画
     */
      private playEmoji() {
        let emotionID = this._reward_id;
        let nodeName  = "emojiPlayer" + emotionID;
        let zIndex    = kOneNumber;
        let self      = this;
        this.node_play_emotion.removeAllChildren(true);
        EmojiPlayer.play(emotionID).then(player=>{
            if(cc.isValid(this.node)) {
                player.node.name = nodeName;
                self.node_play_emotion.addChild(player.node, zIndex);
            }
        });
    }

    /* 飘字提示
     */
    private flyTip(){
        if(ItemState.LOCK != this._state){
            return;
        }
        let prefixStr = tab.Data.GetKeyValue_ConfigTable().ScoreReachTip;
        let suffixStr = tab.Data.GetKeyValue_ConfigTable().CanReciveTip;
        ShowTipsOfCustomString(`${prefixStr}${this._reward_score}${suffixStr}`);
    }
    
    /* 发送领取奖励消息
     */
    private sendReceiveReward(){
        let msg      = new proto.Msg_GetRankScoreRewardReq()
        msg.rewardId = this._reward_score;
        msg.itemIdx  = kZeroNumber;
        Net.Send(proto.Ptl.GetRankScoreRewardReq, msg)
    }
    
    private onClickShowView(){
        let self = this;
        showPopLayerV2("prefab/SeasonRewardDisplay", SeasonRewardDisplay).then(rewardDetail => {
            rewardDetail.setRankLevel(self._rank_level);
        });
    }

    public onClickEmotion(){
        if(ItemState.CAN_RECEIVE == this._state){
            this.sendReceiveReward();
            return;
        }

        this.playEmoji();
        this.flyTip();
    }
}
