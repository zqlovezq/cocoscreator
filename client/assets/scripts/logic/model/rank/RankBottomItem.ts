/*
 * @Date: 2024-06-12 17:41:34
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-22 15:09:11
 */

import { _decorator, Component, Label, Node, RichText, Sprite } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroInfo } from '../hero/HeroInfo';
import { ViewName } from '../../define/ViewDefine';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { HeroItem } from '../item/HeroItem';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { GameUtil, refreshFlagImg, setTextTime } from '../../utils/GameUtil';
import { HeroStar } from '../hero/HeroStar';
import { RoleData } from '../role/RoleData';
const { ccclass, property } = _decorator;

@ccclass('RankBottomItem')
export class RankBottomItem extends InfiniteCell {
    @property(Label)
    lbl_rank: Label = null;
    @property(Label)
    lbl_power_score: Label = null;
    @property(Label)
    lbl_hero_Name: Label = null;
    @property(Label)
    lbl_player_Name: Label = null;
    @property(HeroItem)
    hero_item: HeroItem = null;

    @property(Label)
    lbl_player_node_name: Label = null;
    @property(Label)
    lbl_player_node_force: Label = null;
    @property(PlayerHeadItem)
    palyerHerdItem: PlayerHeadItem = null;
    @property(Node)
    lbl_player_node_chapter: Node = null;
    @property(Label)
    lbl_player_node_level: Label = null;
    @property(Label)
    lbl_player_node_damage: Label = null;
    @property(RichText)
    lbl_player_node_reputation: RichText = null;

    @property(Node)
    node_player: Node = null;
    @property(Node)
    node_hero: Node = null;
    @property(Node)
    node_guild: Node = null;
    @property(HeroStar)
    Node_StarItem: HeroStar = null;

    @property(Sprite)
    sp_guild_flag: Sprite = null;
    @property(Label)
    lbl_guild_name: Label = null;
    @property(Label)
    lbl_guild_force: Label = null;

    private _rank_data: proto.ISimpleHero | proto.ISimpleRank | proto.ISimpleGuild = null;
    private _rank_index: number = 0;
    private _rankType: RANKING_TYPE = RANKING_TYPE.NONE;
    private _isMySelf: boolean = false;
    UpdateContent(data: any): void {
        this._rank_index = data.index;
        this._rankType = data.rankType
        this._rank_data = data.rankData;
        this._isMySelf = data.isSelf;
        this.node_hero.active = this._rankType === RANKING_TYPE.HERO;
        this.node_guild.active = this._rankType === RANKING_TYPE.GUILD
        this.node_player.active = this._rankType !== RANKING_TYPE.HERO && this._rankType !== RANKING_TYPE.GUILD;
        if (this._rankType === RANKING_TYPE.HERO) {
            this.setRankHeroData();
        } else if (this._rankType === RANKING_TYPE.GUILD) {
            this.setRankGuildData();
        } else {
            this.setRankPlayerData();
        }
    }
    // 设置公会排行信息
    setRankGuildData() {
        const rankData = this._rank_data as proto.ISimpleGuild
        this.lbl_guild_name.string = "";
        this.lbl_guild_force.string = "0";
        this.lbl_rank.string = "0";
        if (rankData) {
            this.lbl_rank.string = String(this._rank_index + 4);
            refreshFlagImg(rankData.flagId, this.sp_guild_flag);
            this.lbl_guild_name.string = rankData.name;
            this.lbl_guild_force.string = GameUtil.convertNumber(rankData.powerScore)
        }
    }
    // 设置基本信息
    setRankHeroData() {
        const rankData = this._rank_data as proto.ISimpleHero
        this.lbl_rank.string = String(this._rank_index + 4);
        const itemId = rankData.itemId;
        const itemTab = tab.getData().ItemTableById.getValue(itemId);
        const heroTab = tab.getData().HeroTableById.getValue(itemId);
        // 显示战斗力
        //this.lbl_power_score.string = String(rankData.powerScore);
        this.lbl_power_score.string = LangMgr.getLab("ui_commondesc_43") + GameUtil.convertNumber(rankData.powerScore);
        this.lbl_hero_Name.string = LangMgr.getLab(itemTab.Name);
        this.lbl_player_Name.string = rankData.roleName;

        this.hero_item.setTouchCallBack(() => {
            if (this._isMySelf) {
                //ShowTips("您戳到自己了哦");
                ShowTips(LangMgr.getLab("Tips_rank_1"));
            } else {
                UIMgr.ins.show({
                    viewName: ViewName.CheckRoleInfoHeroPop, data: {
                        heroData: this._rank_data
                    }
                })
            }
        })
        const heroInfo = new HeroInfo();
        heroInfo.itemId = itemId;
        heroInfo.star = rankData.star;
        heroInfo.id = 0;
        heroInfo.level = rankData.level;
        this.hero_item.UpdateContent(heroInfo);
    }
    setRankPlayerData() {
        this.lbl_player_node_force.node.active = false;
        this.lbl_player_node_damage.node.active = false;
        this.lbl_player_node_level.node.active = false;
        this.lbl_player_node_chapter.active = false;
        const rankData = this._rank_data as proto.ISimpleRank;
        this.lbl_rank.string = String(this._rank_index + 4);
        this.lbl_player_node_name.string = "";
        if (rankData) {
            if (rankData.score) {
                const chapterInfo = Math.floor(Number(rankData.score) / 1000000);
                const times = (Number(rankData.score)) % 1000000;
                const level_txt = this.lbl_player_node_chapter.getChildByName("level_txt").getComponent(Label);
                const time_txt = this.lbl_player_node_chapter.getChildByName("time_txt").getComponent(Label);
                time_txt.string = setTextTime(times);
                level_txt.string = Math.floor(chapterInfo / 100) + "-" + chapterInfo % 100;
                if (this._rankType === RANKING_TYPE.BOSS) {
                    this.lbl_player_node_damage.node.active = true;
                    this.lbl_player_node_damage.string = GameUtil.convertNumber(rankData.score);
                }
            }
            if (rankData.simple) {
                this.lbl_player_node_name.string = rankData.simple.name;
                // 玩家名字
                const playerInfo = new SimpleRoleInfo();
                if(this._isMySelf){
                    rankData.simple.level = RoleData.ins.level;
                }
                playerInfo.merge(rankData.simple);
                this.palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });
                this.palyerHerdItem.setCloseCallBack(() => {
                    if (this._isMySelf) {
                        //ShowTips("您戳到自己了哦");
                        ShowTips(LangMgr.getLab("Tips_rank_1"));
                    } else {
                        UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "rankData": playerInfo } })
                    }
                })
                if (this._rankType === RANKING_TYPE.LEVEL) {
                    // 等级榜
                    this.lbl_player_node_level.node.active = true;
                    this.lbl_player_node_level.string = LangMgr.getCombineString("ui_heroresonancepop_3", [String(rankData.simple.level)]);
                } else if (this._rankType === RANKING_TYPE.POWER) {
                    this.lbl_player_node_force.node.active = true;
                    this.lbl_player_node_force.string = LangMgr.getLab("ui_commondesc_43") + GameUtil.convertNumber(rankData.simple.powerScore);
                } else if (this._rankType === RANKING_TYPE.CHAPTER) {
                    this.lbl_player_node_chapter.active = true;
                } else if (this._rankType === RANKING_TYPE.Fight) {
                    this.lbl_player_node_force.node.active = true;
                    this.lbl_player_node_force.string =  LangMgr.getCombineString("ui_fincafight_13", [String(rankData.score)]);
                }

                let table = tab.getData().QuestLogTableByLevel.getValue(rankData.simple.reputation);
                if (table) {
                    this.lbl_player_node_reputation.string = LangMgr.getLab(table.Name);
                } else {
                    this.lbl_player_node_reputation.node.active = false;
                }
            }
        }
    }
    setPlayerMyRank(idx: number) {
        this.lbl_rank.string = String(idx);
        if (idx > 0 && idx <= 3) {
            this.node.getChildByName("rank_node").active = false;
            this.node.getChildByName("myno1").active = idx === 1;
            this.node.getChildByName("myno2").active = idx === 2;
            this.node.getChildByName("myno3").active = idx === 3;
        } else if (idx > 3) {
            this.node.getChildByName("rank_node").active = true;
        } else {
            //this.lbl_rank.string = "未上榜"
            this.lbl_rank.string = LangMgr.getLab("ui_rank_1")
        }
    }
    protected onDisable(): void {
        if (this.Node_StarItem && this.Node_StarItem.isValid) {
            this.Node_StarItem.onDisable();
        }
    }
    onClickGuild() {
        const rankData = this._rank_data as proto.ISimpleGuild
        if (rankData.id) {
            UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": rankData } })
        }
    }
}


