/*
 * @Descripttion: 对战排行榜预制件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import { checkStringIsValid, setAllianceBadge } from "../Alliance/AllianceCommonInterface";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kZeroNumber } from "../Common/CommonInterface";
import ConfirmTips from "../Common/ConfirmTips";
import Role from "../Common/Role";
import { checkIconPathIsValid } from "../Common/SeasonRankCommonFunc";
import InfiniteCell from "../InfiniteList/InfiniteCell";
import ManagerNotice from "../Notices/ManagerNotice";
import PlayerCard from "../PlayerInfo/PlayerCard";
import PlayerInfo from "../PlayerInfo/PlayerInfo";
import { getCurScoreStage, getRes, LoadResAsync, showPopLayerV2 } from "../Utils/GameUtils";
import RankingTeamMembers from "./RankingTeamMembers";

const { ccclass, property } = cc._decorator;

@ccclass
export default class RankingListRolePfb extends InfiniteCell {

    @property(cc.Label)
    lbl_ranking_lv: cc.Label = null;

    // @property(PlayerCard)
    // node_player_head: PlayerCard = null; /* TODO: zhibo+@20230423 for <进入排行榜报错，暂时去掉假的PlayerCard节点，等接入微信后再重新弄这里的逻辑> */

    @property(cc.Sprite)
    spr_head: cc.Sprite = null

    @property(cc.Sprite)
    spr_rank_bg: cc.Sprite = null;

    @property(cc.Label)
    lbl_season_score: cc.Label = null;

    @property(cc.Label)
    lbl_player_name: cc.Label = null;

    @property(cc.Label)
    lbl_alliance_name: cc.Label = null;

    @property(cc.Sprite)
    stage: cc.Sprite = null;

    @property(cc.Node)
    team: cc.Node = null;

    // @property(cc.Node)
    // node_1st: cc.Node = null;

    // @property(cc.Node)
    // node_2nd: cc.Node = null;

    // @property(cc.Node)
    // node_3rd: cc.Node = null;

    @property([cc.Node])
    first_3_nodes: cc.Node[] = []

    private _player_uuid: string = kNoneString;
    private _ranking_level: number = kOneNumber;
    private _season_score: number = kZeroNumber;
    private _pvpCardInfo: proto.IPlayerPvpCardInfo = null;

    /*  */
    public UpdateContent(data: any) {
        this.initData(data, this.dataIndex);
    }

    /*  */
    public initData(data: proto.IRankingOfRoleData, rankingLv?: number, bSetSelfBG: boolean = false) {
        this._ranking_level = rankingLv + 1;
        this._season_score = data.seasonScore;
        this._player_uuid = data.roleData.roleUUID;
        this._pvpCardInfo = data.roleData.pvpCardInfo;
        this.spr_rank_bg.spriteFrame = null;
        let bHaveAlliance = isValidObj(data.roleData.allianceName);

        let allianceName = bHaveAlliance ?
            data.roleData.allianceName :
            tab.Data.GetKeyValue_ConfigTable().NotHaveAllianceTip;

        this.setRankingLv();
        this.setRankingBG();
        this.setPlayerName(data.roleData.roleName);
        // this.setAllianceName(allianceName);
        // this.setAllianceBadgeVisible(bHaveAlliance);
        // this.setPlayerHead(data.roleData.headID);
        this.setPlayerHead(data.roleData.headUrl);
        bHaveAlliance && this.setAllianceBadge(data.roleData.allianceIconIdx, checkStringIsValid(data.roleData.allianceName));
        this.setSeasonScore();
        this.setSelfBG(bSetSelfBG);
    }

    /* 设置自身背景 */
    private setSelfBG(bSetSelfBG: boolean) {
        // this.spr_self_bg.node.active    = bSetSelfBG;
        // this.spr_normal_bg.node.active  = !bSetSelfBG;
        // this.spr_other_line.node.active = !bSetSelfBG;
        // this.spr_self_line.node.active  = bSetSelfBG;
        let teamJs = this.team.getComponent(RankingTeamMembers);
        if (bSetSelfBG) {
            let data = getCurScoreStage(Role.Instance.RoleData.rankData.score);
            this.stage.setTexture(data.RankIcon)
            let cardInfos = [];
            let deckItems = Role.Instance.RoleData.decks[Role.Instance.DeckIndex].deckItems;
            for (let i = 0; i < deckItems.length; i++) {
                let uuid = deckItems[i];
                let cardInfo: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(uuid);
                cardInfos.push(cardInfo);
            }
            teamJs.initTeam(cardInfos);
        } else {
            this.team.active = this._pvpCardInfo ? true : false;
            let data = getCurScoreStage(this._season_score);
            this.stage.setTexture(data.RankIcon)
            if (this._pvpCardInfo) {
                teamJs.initTeam(this._pvpCardInfo.cardLists);
            }
        }
    }
    /* 设置排行榜等级 */
    private setRankingLv() {
        if (this._ranking_level){
            this.lbl_ranking_lv.string = `${this._ranking_level}`;
        }else{
            this.lbl_ranking_lv.string = `未上榜`;
        }
        
    }

    /* Description: 设置联盟徽章的可见性 */
    private setAllianceBadgeVisible(bHaveAlliance: boolean) {
        // this.spr_alliance_badge.node.active     = bHaveAlliance;
        // this.spr_non_alliance_badge.node.active = !bHaveAlliance;
    }

    /* 设置排行榜等级背景图 */
    private async setRankingBG() {
        let rankingLv = this._ranking_level;
        for (let i = 0; i < this.first_3_nodes.length; i++) {
            this.first_3_nodes[i].active = false;
        }
        for (let i = 0; i < this.first_3_nodes.length; i++) {
            if (i == (rankingLv - 1)) {
                this.first_3_nodes[i].active = true;
                break;
            }
        }
    }

    remoteUrl: string
    /* 设置玩家头像 */
    private setPlayerHead(_remoteUrl: string) {
        this.remoteUrl = _remoteUrl
        var bool = ManagerNotice.getInstance().downloadImg(_remoteUrl, this.spr_head, () => {
            if (this.remoteUrl != _remoteUrl) {
                this.setDefaultHead()
            }
        });
        if (!bool) {
            this.setDefaultHead()
        }

    }

    private setDefaultHead() {
        var sf = getRes("Chess/UI/Common/defaulthead", cc.SpriteFrame)
        if (sf) {
            this.spr_head.spriteFrame = (sf as cc.SpriteFrame)
        }
    }

    /* 设置玩家名称 */
    private setPlayerName(name: string) {
        this.lbl_player_name.string = name;
    }

    /* 设置联盟名称 */
    private setAllianceName(name: string) {
        this.lbl_alliance_name.string = name;
    }

    /* 设置联盟徽章
     * @param iconIdx  联盟徽章索引  
     */
    private setAllianceBadge(iconIdx: number, bValid: boolean) {
        // this.spr_alliance_badge.node.active = bValid;
        // bValid  && setAllianceBadge(this.spr_alliance_badge, iconIdx);
    }

    /* 设置赛季积分 */
    private setSeasonScore() {
        this.lbl_season_score.string = `${this._season_score}`;
    }

    /*  */
    public onClickOpenRoleSys() {
        let self = this;
        showPopLayerV2("prefab/PlayerInfo", PlayerInfo).then(layer => {
            layer.initData(self._player_uuid);
        });
    }
}
