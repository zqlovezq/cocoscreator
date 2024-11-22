/*
 * @Descripttion: 排行榜联盟预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import AllianceDetailPopLayer from "../Alliance/AllianceDetailPopLayer";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import ManagerRankingLevel from "./ManagerRankingLevel";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingListAlliancePfb extends InfiniteCell {
    
    @property(cc.Label)
    lbl_ranking_lv: cc.Label = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;
    
    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Label)
    lbl_members_count: cc.Label = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    private _alliance_uuid: string         = kNoneString;
    private _alliance_season_score: number = kZeroNumber;
    private _ranking_level: number         = kZeroNumber;

    public UpdateContent(data: any){
        if(!data){return}
        this.initData(data);
    }

    private initData(data: proto.IRankingOfAllianceData){
        this._alliance_uuid          = data.rankData.allianceID;
        this._alliance_season_score  = data.rankData.score;
        this._ranking_level          = this.dataIndex + kOneNumber;
        this.spr_rank_bg.spriteFrame = null;
        this.confirmRankingLevel();
        this.setAllianceName(data.rankData.name);
        this.setAllianceBadge(data.rankData.icon);
        this.setAllianceMemberCount(data.rankData.numberOfMember);
        this.setSeasonScore();
        this.setRankingLv();
        this.setRankingBG();
    }
    
    /* 确定排名 */
    private confirmRankingLevel(){
        let retVal = ManagerRankingLevel.getInstance().getRankingLvToScore(this._alliance_season_score, false, false);
        if(retVal == kNegativeOneNumber){
            return;
        }

        this._ranking_level = retVal;
    }
    
    /* 设置排行榜等级 */
    private setRankingLv(){
        this.lbl_ranking_lv.string = `${this._ranking_level}`;
    }
    
    /* 设置排行榜等级背景图 */
     private async setRankingBG(){
        let rankingLv = this._ranking_level;
        //前3名特殊后面都一样
        let rankingFlagTabLen = tab.Data.RankingIconTable.length;
        let findRankingIdx    = rankingLv > rankingFlagTabLen ? kNegativeOneNumber : rankingLv;
        let rankingTabData    = tab.Data.RankingIconTableByID.getValue(findRankingIdx);
        if(isValidObj(rankingTabData)){
            if(!checkIconPathIsValid(rankingTabData.RankingListIcon)){return;}

            let sf = await LoadResAsync(rankingTabData.RankingListIcon, cc.SpriteFrame);
            if(sf) {
                if( this.spr_rank_bg){
                    this.spr_rank_bg.spriteFrame = sf;
                }
            }
        }
    }
    
    /* 设置联盟名称 */
    private setAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    /* 设置联盟徽章
     * @param iconIdx  联盟徽章索引 */
    private setAllianceBadge(iconIdx: number){
        setAllianceBadge(this.spr_alliance_badge, iconIdx);
    }

    /* 设置赛季积分 */
    private setSeasonScore(){
        this.lbl_season_score.string = `${this._alliance_season_score}`;
    }

    /* 设置联盟成员数
     * @param ownCnt   已拥有的成员数 */
    private setAllianceMemberCount(ownCnt: number){
        let maxCapacityCount = tab.Data.GetKeyValue_ConfigTable().AllianceMaxMemberCount;
        this.lbl_members_count.string = `${ownCnt}/${maxCapacityCount}`;
    }

    public onClickAllianceDetail(){
        showPopLayerV2("prefab/AllianceDetailPopLayer", AllianceDetailPopLayer).then(detailLayer =>{
            detailLayer.initData(this._alliance_uuid);
        });
    }
}
