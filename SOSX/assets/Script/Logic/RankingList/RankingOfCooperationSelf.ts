/*
 * @Descripttion: 合作模式自身模块
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kNegativeOneNumber, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";

const {ccclass, property} = cc._decorator;

@ccclass
export default class RankingOfCooperationSelf extends cc.Component {

    @property(cc.Label)
    lbl_ranking_lv: cc.Label = null;

    @property(PlayerCard)
    node_player_head: PlayerCard = null;

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_alliance_badge: cc.Sprite = null;

    @property(cc.Sprite)
    spr_non_alliance_badge: cc.Sprite = null;

    @property(cc.Label)
    lbl_round_num: cc.Label = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    spr_normal_bg: cc.Sprite = null;

    @property(cc.Sprite)
    spr_self_bg: cc.Sprite = null;

    @property(PlayerCard)
    node_player_card_1: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_2: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_3: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_4: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_5: PlayerCard = null;

    @property(PlayerCard)
    node_player_card_6: PlayerCard = null;

    private _ranking_level: number;
    private _card_group_list: PlayerCard[] = [];

    onLoad () {
        this._card_group_list.push(this.node_player_card_1);
        this._card_group_list.push(this.node_player_card_2);
        this._card_group_list.push(this.node_player_card_3);
        this._card_group_list.push(this.node_player_card_4);
        this._card_group_list.push(this.node_player_card_5);
        this._card_group_list.push(this.node_player_card_6);
    }

    public initData(data: proto.ICooperationBothRankingData, rankLv: number){
        this._ranking_level = rankLv;
        let bHaveAlliance = isValidObj(data.leftPlayerData.roleData.allianceName);
        
        let allianceName = bHaveAlliance ? 
                            data.leftPlayerData.roleData.allianceName : 
                            tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;
        this.setRankingLv();
        this.setAllianceBadgeVisible(bHaveAlliance);
        this.setPlayerName(data.leftPlayerData.roleData.roleName);
        this.setPlayerHead(data.leftPlayerData.roleData.headID);
        this.setMaxRound(data.maxRoundCount);
        bHaveAlliance && this.setAllianceBadge(data.leftPlayerData.roleData.allianceIconIdx);
        this.setAllianceName(allianceName);
        this.setRankingBG();
        this.setCardGroup(data.leftPlayerData.cardLists);
    }

    /* 设置联盟徽章的可见性 */
    private setAllianceBadgeVisible(bHaveAlliance: boolean){
        this.spr_alliance_badge.node.active     = bHaveAlliance;
        this.spr_non_alliance_badge.node.active = !bHaveAlliance;
    }

    /* 设置魔王信息 */
     private setPlayerHead(headID: number){
        this.node_player_head.initData(headID, kOneNumber, false, true);
        this.node_player_head.setCanTouch(false);
    }

    /* 设置排行榜等级 */
    private setRankingLv(){
        this.lbl_ranking_lv.string = this._ranking_level <= kZeroNumber ? "--" : `${this._ranking_level}`;
    }

    private setPlayerName(name: string){
        this.lbl_player_name.string = name;
    }

    /* 设置最大波数 */
    private setMaxRound(roundCnt: number){
        this.lbl_round_num.string = `${roundCnt}`;
    }

    /* 设置联盟徽章 */
    private setAllianceBadge(iconIdx: number){
        setAllianceBadge(this.spr_alliance_badge, iconIdx);
    }

    /* 设置联盟名称 */
    private setAllianceName(name: string){
        this.lbl_alliance_name.string = name;
    }

    /* 设置排行榜等级背景图 */
    private async setRankingBG(){
        if(this._ranking_level <= kZeroNumber){
            return;
        }
        
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
    
    /* 设置卡组 */
    private setCardGroup(cardIDList: proto.IFightCardData[]){
        let cardGroupArrLen = this._card_group_list.length;
        let dataLen         = cardIDList.length;
        for(let idx = kZeroNumber; idx < cardGroupArrLen; idx++){
            if(idx < dataLen){
                this._card_group_list[idx].initData(cardIDList[idx].staticId, cardIDList[idx].level, false);
            }
        }
    }

    /*
    public onClickOpenRoleSys(){
        let self = this;
        showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer =>{
            layer.initData(self._player_uuid);
        });
    }
    */
}
