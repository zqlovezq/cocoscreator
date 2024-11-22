/*
 * @Descripttion: 赛季解锁卡牌组模块
 */

import { tab } from "../../Table/table_gen";
import { isValidObj, kZeroNumber } from "../Common/CommonInterface";
import SeasonUnlockCardGroup from "../Common/SeasonUnlockCardGroup";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { showPopLayerV2 } from "../Utils/GameUtils";
import SeasonRewardDisplay from "./SeasonRewardDisplay";

const kGroupCardCount: number = 4;

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonUnlockCardModel extends InfiniteCell {

    @property({displayName:"段位1解锁道具", type:cc.Node})
    node_card_group_1: cc.Node = null;

    @property({displayName:"段位2解锁道具", type:cc.Node})
    node_card_group_2: cc.Node = null;

    @property(cc.Button)
    btn_info: cc.Button        = null;

    @property(cc.Label)
    lbl_topic_name: cc.Label   = null;

    private _rank_level: number = kZeroNumber;

    onLoad(){
        this.btn_info.node.on("click", this.onClickShowView, this);
    }

    UpdateContent(celldata){
        //this.initData();
    }

    public GetScoreNode(): cc.Node{
        return null;
    }

    public initData(rankLv: number, unlockCardList: number[]){
        this._rank_level = rankLv;
        this.setRankName();
        this.groupUnlockCardData(unlockCardList);
    }

    /* 设置赛季名称 */
    private setRankName(){
        let rankGradTab = tab.Data.RankGradeTableByGrade.getValue(this._rank_level);
        if (!isValidObj(rankGradTab)){
            if(!cc.sys.isNative){throw new Error("RankGradeTable Error!");}
            return;
        }

        this.lbl_topic_name.string = rankGradTab.Title;
    }

    /* 组织解锁卡牌列表数据
     * @param unlockCardList 解锁的卡牌列表
     */
    private groupUnlockCardData(unlockCardList: number[]){
        let bHaveUnlockCardList = isValidObj(unlockCardList) && (unlockCardList.length > kZeroNumber);
        if(!bHaveUnlockCardList){
            this.node_card_group_1.active = false;
            this.node_card_group_2.active = false;
            return;
        }

        let unlockCardListLen = unlockCardList.length;
        let cardGroupArr1: number[] = [];
        for(let idx = kZeroNumber; idx < unlockCardListLen; idx++){
            if(idx >= kGroupCardCount){
                break;
            }
            cardGroupArr1.push(unlockCardList[idx]);
        }
        
        this.node_card_group_1.active = true;
        this.node_card_group_1.getComponent(SeasonUnlockCardGroup).initData(cardGroupArr1);

        if(unlockCardListLen <= kGroupCardCount){
            this.node_card_group_2.active = false;
            return;
        }
        
        let cardGroupArr2: number[] = [];
        for(let idx = kGroupCardCount; idx < unlockCardListLen; idx++){
            cardGroupArr2.push(unlockCardList[idx]);
        }
        
        this.node_card_group_2.active = true;
        this.node_card_group_2.getComponent(SeasonUnlockCardGroup).initData(cardGroupArr2);
    }
    
    /*  */
    private onClickShowView(){
        let self = this;
        showPopLayerV2("prefab/SeasonRewardDisplay", SeasonRewardDisplay).then(rewardDetail =>{
            rewardDetail.setRankLevel(self._rank_level);
        });
    }
}
