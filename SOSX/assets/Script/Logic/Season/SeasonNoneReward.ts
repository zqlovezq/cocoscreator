/*
 * @Descripttion: 无奖励模块
 */

import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid, SeasonRankCardClass } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import SeasonRewardDisplay from "./SeasonRewardDisplay";
import SeasonUnlockCardModel from "./SeasonUnlockCardModel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonNoneReward extends InfiniteCell {

    @property({ type: cc.ProgressBar })
    progress_bar: cc.ProgressBar   = null;

    @property({displayName:"背景", type:cc.Sprite})
    spr_bg:cc.Sprite               = null;

    @property(cc.Node)
    node_unlock_card_area: cc.Node = null;

    @property(cc.Label)
    lbl_rank_level: cc.Label       = null;
    
    private _rank_level = kZeroNumber;

    onLoad () {
        this.spr_bg.addComponent(cc.Button);
        this.spr_bg.node.on("click", this.onClickShowView, this);
    }

    public UpdateContent(celldata){
        this.initData(celldata);
    }
    
    public GetScoreNode(): cc.Node{
        return null;
    }

    public initData(rankLv: number){
        this._rank_level = rankLv;
        this.setDisplayElements();
    }

    /* 设置显示内容 */
    private setDisplayElements(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("RankGradeTable Error!");}
            return;
        }

        this.setRankLevel();
        this.setSeasonBG(rankGradTab.BackDir);
        this.setUnlockCardsModel();
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

    /* 设置赛季等级解锁的卡牌列表 */
    private setUnlockCardsModel(){
        let unlockCardList = SeasonRankCardClass.getInstance().getUnlockCardListsFromRankLevel(this._rank_level);
        this.node_unlock_card_area.getComponent(SeasonUnlockCardModel).initData(this._rank_level, unlockCardList);
    }

    /*  */
    private onClickShowView(){
        let self = this;
        showPopLayerV2("prefab/SeasonRewardDisplay", SeasonRewardDisplay).then(rewardDetail =>{
            rewardDetail.setRankLevel(self._rank_level);
        });
    }
}
