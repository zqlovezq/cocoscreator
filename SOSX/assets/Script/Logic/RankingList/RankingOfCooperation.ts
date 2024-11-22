/*
 * @Descripttion: 合作模式排行榜预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj, kNegativeOneNumber, kOneNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { LoadResAsync } from "../Utils/GameUtils";
import CooperationCardGroup from "./CooperationCardGroup";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingOfCooperation extends InfiniteCell {

    @property(cc.Node)
    node_cooperation_card: cc.Node = null;

    @property(cc.Label)
    lbl_round_num: cc.Label = null;

    @property(cc.Label)
    lbl_rank_lv: cc.Label = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_other_line: cc.Sprite = null;

    private _ranking_level: number = kOneNumber;

    public UpdateContent(data: any){
        this.initData(data, this.dataIndex + kOneNumber);
    }

    private initData(data: proto.CooperationBothRankingData, rankLv: number){
        this._ranking_level = rankLv;
        this.setRankingLv();
        this.setRankingBG();
        this.setMaxRound(data.maxRoundCount);
        this.setCooperationCardGroup(data)
    }

    /* 设置排行榜等级 */
    private setRankingLv(){
        this.lbl_rank_lv.string = `${this._ranking_level}`;
    }

    /* 设置最大波数 */
    private setMaxRound(roundCnt: number){
        this.lbl_round_num.string = `${roundCnt}`;
    }

    /* 设置排行榜等级背景图 */
    private async setRankingBG(){
        let rankingLv = this._ranking_level;
        //前3名特殊后面都一样
        let rankingFlagTabLen = tab.Data.RankingIconTable.length;
        let findRankingIdx    = rankingLv > rankingFlagTabLen ? kNegativeOneNumber : rankingLv;
        let rankingTabData    = tab.Data.RankingIconTableByID.getValue(findRankingIdx);
        if(isValidObj(rankingTabData)){
            if(!checkIconPathIsValid(rankingTabData.RankingListIcon)){
                this.spr_rank_bg.spriteFrame = null;
                return;
            }
            let sf = await LoadResAsync(rankingTabData.RankingListIcon, cc.SpriteFrame);
            if(sf) {
                if( this.spr_rank_bg){
                    this.spr_rank_bg.spriteFrame = sf;
                }
            }
        } else {
            this.spr_rank_bg.spriteFrame = null;
        }
    }

    /*  */
    private setCooperationCardGroup(data: proto.CooperationBothRankingData){
        this.node_cooperation_card.getComponent(CooperationCardGroup).initData(data);
    }
}
