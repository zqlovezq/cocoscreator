/*
 * @Descripttion: 赛季结束界面
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { isValidObj } from "../Common/CommonInterface";
import Role from "../Common/Role";
import RankScoreRewardClass, { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import { LoadResAsync, popRewardLayer_Ex } from "../Utils/GameUtils";
import PopLayer from "../Utils/PopLayer";

const {ccclass, property} = cc._decorator;

@ccclass
export default class SeasonOver extends PopLayer {

    @property(cc.Sprite)
    spr_bg: cc.Sprite              = null;

    @property(cc.Label)
    lbl_season_name: cc.Label      = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite         = null;

    @property(cc.Label)
    lbl_rank_level: cc.Label       = null;

    @property(cc.Label)
    lbl_achieve_score: cc.Label    = null;

    @property(cc.Button)
    btn_open_new_season: cc.Button = null;

    @property(cc.Sprite)
    spr_box_icon: cc.Sprite        = null;

    private _reward_list: proto.IRewardSimpleInfo[];

    onLoad () {
        this.btn_open_new_season.node.on("click", this.onClickOpenNewSeason, this);
    }

    public initData(boxId: number, rewardList: proto.IRewardSimpleInfo[]){
        let oldScore = Role.Instance.RoleData.rankData.oldScore;
        let rankLv   = RankScoreRewardClass.getInstance().getRankLevelToScore(oldScore);
        this.setSeasonAchieveValue(oldScore);
        this.setSeasonRankLevel(rankLv);
        this.setSeasonBadge(rankLv);
        this.setBoxIcon(boxId);
        this._reward_list = rewardList;
    }

    /* 设置赛季徽章
     * @param rankLv  段位等级
     */
    private async setSeasonBadge(rankLv: number){
        let rankGradeTabData = tab.Data.RankGradeTableByGrade.getValue(rankLv);
        if(!isValidObj(rankGradeTabData)){
            if(!cc.sys.isNative){throw new Error("Rank level is Error!");}
            return;
        }
        this.setSeasonName(rankGradeTabData.Title);

        if(!checkIconPathIsValid(rankGradeTabData.Icon)){
            return;
        }
        
        let sf = await LoadResAsync(rankGradeTabData.Icon, cc.SpriteFrame)
        if(sf) {
            this.spr_rank_bg.spriteFrame = sf;
        }
    }

    /* 设置赛季名称
     * @param name   赛季名称
     */
    private setSeasonName(name: string){
        this.lbl_season_name.string = name;
    }

    /* 设置赛季段位
     * @param rankLv  段位等级
     */
    private setSeasonRankLevel(rankLv: number){
        this.lbl_rank_level.string = `${rankLv}`;
    }

    /* 设置赛季成就
     * @param value   成就积分值
     */
    private setSeasonAchieveValue(value: number){
        this.lbl_achieve_score.string = `${value}`;
    }

    /* 设置宝箱icon
     * @param boxId  宝箱ID
     */
    private async setBoxIcon(boxId: number){
        let boxTabData = tab.Data.BoxTableByBoxID.getValue(boxId);
        if (!isValidObj(boxTabData)){
            if(!cc.sys.isNative){throw new Error("BoxTableData is valid!");}
            return;
        }

        let sf = await LoadResAsync(boxTabData.ItemIcon, cc.SpriteFrame)
        if(sf) {
            this.spr_box_icon.spriteFrame = sf;
        }
    }
    
    /*  */
    private onClickOpenNewSeason(){
        popRewardLayer_Ex(this._reward_list, null);
        this.setVisible(false);
    }
}
