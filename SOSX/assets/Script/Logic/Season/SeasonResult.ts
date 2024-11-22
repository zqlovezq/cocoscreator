/*
 * @Descripttion: 新赛季开始
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import CommonItem from "../Common/CommonItem";
import Role from "../Common/Role";
import RankScoreRewardClass, { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import Func from "../Utils/Func";
import { getCurScoreStage, LoadResAsync, popRewardLayer_Ex, showOneAward, showPopLayerV2 } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";
import SeasonGift from "./SeasonGift";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonResult extends PopLayer {

    @property(cc.Sprite)
    rank_img:cc.Sprite = null

    @property(cc.ProgressBar)
    bar:cc.ProgressBar = null

    @property(cc.Label)
    score_txt:cc.Label = null

    @property([cc.Node])
    opacityNodes:cc.Node[] = []


    private _reward_list: proto.IRewardSimpleInfo[];

    onLoad(){
        this.rank_img.spriteFrame = null
        this.opacityNodes.forEach(element => {
            element.opacity = 0
        });
    }

    _seasonRewardMsgRsp:proto.Msg_SeasonRewardMsgRsp
    public initData(param:proto.Msg_SeasonResetRsp,rewardReward:proto.Msg_SeasonRewardMsgRsp){
        this._seasonRewardMsgRsp = rewardReward
        let myRankData = getCurScoreStage(param.OldScore);
       this.rank_img.setTexture(myRankData.RankIcon)
        this.score_txt.string = param.Score.toString()
        let fightNum = RankScoreRewardClass.getInstance().getRankLevelToScore(param.Score);
        this.setProgressSeason(fightNum,param.Score);

        this.changeRank(param.Score)
    }
    
    /*  */
    private setProgressSeason(grade: number, score: number) {
        let curRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(grade);
        let nextRankScore = RankScoreRewardClass.getInstance().getRankStartScoreToLevel(grade + kOneNumber);
        if (kNegativeOneNumber != nextRankScore && kNegativeOneNumber != curRankScore) {
            //当前积分进度条
            let denominator = nextRankScore - curRankScore; /* 分母：达到下级竞技场所需积分 - 当前竞技场等级所需积分 */
            let numerator = score - curRankScore; /* 当前积分 - 当前竞技场等级所需积分 */
            numerator = (numerator < kZeroNumber) ? kZeroNumber : numerator;
            this.bar.progress = numerator / denominator;
        }
    }

     private async changeRank(nowCup:number) {
        let self = this;
        let myRankData = getCurScoreStage(nowCup);
        let ac0 = cc.delayTime(1);
        let ac1 = cc.fadeOut(1);
        let ac2 = cc.callFunc(() => {
            self.rank_img.setTexture(myRankData.RankIcon)
        })
        let ac3 = cc.delayTime(1);
        let ac4 = cc.fadeIn(1);
        let ac5 = cc.callFunc(() => {
            this.playShowOpacity()
        })
        this.rank_img.node.runAction(cc.sequence(ac0, ac1, ac2, ac3, ac4, ac5))
    }

    playShowOpacity(){
        for (let index = 0; index < this.opacityNodes.length; index++) {
            const nn = this.opacityNodes[index];
            nn.runAction(cc.sequence(cc.delayTime(index*1), cc.fadeIn(1)))
        }
    }
    onClickOk(){
        if (this._seasonRewardMsgRsp){
            this.isQueue = false
            let param = this._seasonRewardMsgRsp
            showPopLayerV2("prefab/Season/SeasonGift", SeasonGift,false).then(seasonGift => {
                seasonGift.isQueue = true
                seasonGift.initData(param)
            });
        }
        this.hide()
    }

}
