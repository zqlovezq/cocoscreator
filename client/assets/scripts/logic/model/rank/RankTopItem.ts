/*
 * @Date: 2024-06-12 17:43:32
 * @LastEditors: wzq
 * @LastEditTime: 2024-10-30 16:33:28
 */

import { _decorator, Component, Label, Node, RichText, Sprite } from 'cc';
import { proto } from 'client_protocol';
import { tab } from '../../../Table/table_gen';
import { LangMgr } from '../../mgr/LangMgr';
import { HeroItem } from '../item/HeroItem';
import { HeroInfo } from '../hero/HeroInfo';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { GameUtil, getTimeTXT, refreshFlagImg, setTextTime_3 } from '../../utils/GameUtil';
import { HeroStar } from '../hero/HeroStar';
const { ccclass, property } = _decorator;

@ccclass('RankTopItem')
export class RankTopItem extends Component {
    @property(Node)
    node_player: Node = null;
    @property(Node)
    node_hero: Node = null;
    @property(Node)
    node_association: Node = null;
    @property(Node)
    node_no_rank: Node = null;
    @property(Node)
    node_server_txt: Node = null;
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
    lbl_plaer_node_reputation: RichText = null;
    @property(HeroStar)
    Node_StarItem: HeroStar = null;
    @property(Sprite)
    sp_guild_flag: Sprite = null;
    @property(Label)
    lbl_guild_name: Label = null;
    @property(Label)
    lbl_guild_force: Label = null;

    private _heroData: proto.ISimpleHero = null;
    private _playerData: proto.ISimpleRank = null;
    private _guildData: proto.ISimpleGuild = null;
    private _rankType: RANKING_TYPE = RANKING_TYPE.NONE;
    initHeroData(data: proto.ISimpleHero) {
        if (data) {
            this.node_no_rank.active = false;
            this._heroData = data;
            this.node_player.active = false;
            this.node_association.active = false;
            this.node_hero.active = true;
            this.createHeroData();
        } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
        }
    }
    initHeroPlayerData(data: proto.ISimpleRank, rankType: RANKING_TYPE) {
        this._rankType = rankType;
        if (data) {
            this.node_player.active = true;
            this.node_hero.active = false;
            this.node_no_rank.active = false;
            this.node_association.active = false;
            this._playerData = data;
            this.createPlayerData();
        } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
        }
    }
    initGuildData(data: proto.ISimpleGuild) {
        if (data) {
            this.node_no_rank.active = false;
            this._guildData = data;
            this.node_player.active = false;
            this.node_hero.active = false;
            this.node_association.active = true;
            this.createGuildData();
        } else {
            this.node_hero.active = false;
            this.node_association.active = false;
            this.node_player.active = false;
            this.node_server_txt.active = false;
            this.node_no_rank.active = true;
        }
    }
    // 如果是英雄
    createHeroData() {
        // 头像
        this.node_association.active = false;
        this.node_server_txt.active = false;
        const itemId = this._heroData.itemId;
        const itemTab = tab.getData().ItemTableById.getValue(itemId);
        const heroTab = tab.getData().HeroTableById.getValue(itemId);
        // 显示战斗力
        //this.lbl_power_score.string = String(this._heroData.powerScore);
        this.lbl_power_score.string = LangMgr.getLab("ui_commondesc_43") + GameUtil.convertNumber(this._heroData.powerScore);
        this.lbl_hero_Name.string = "[ " + LangMgr.getLab(itemTab.Name) + " ]";
        this.lbl_player_Name.string = this._heroData.roleName;

        const heroInfo = new HeroInfo();
        heroInfo.itemId = itemId;
        heroInfo.star = this._heroData.star;
        heroInfo.id = 0;
        heroInfo.level = this._heroData.level;
        this.hero_item.UpdateContent(heroInfo);
        this.hero_item.setTouchCallBack(() => {
            UIMgr.ins.show({
                viewName: ViewName.CheckRoleInfoHeroPop, data: {
                    heroData: this._heroData
                }
            })
        })
    }
    // 如果是玩家
    createPlayerData() {
        this.lbl_player_node_force.node.active = false;
        this.lbl_player_node_damage.node.active = false;
        this.lbl_player_node_level.node.active = false;
        this.lbl_player_node_chapter.active = false;
        const rankData = this._playerData;
        if (rankData.score) {
            // 用关卡通关时间和关卡Id拼接得分202000540
            // score := int64(stageId)*1000000 + int64(alive)%1000000
            const chapterInfo = Math.floor(rankData.score / 1000000);
            const times = rankData.score % 1000000;
            const level_txt = this.lbl_player_node_chapter.getChildByName("level_txt").getComponent(Label);
            const time_txt = this.lbl_player_node_chapter.getChildByName("time_txt").getComponent(Label);
            time_txt.string = getTimeTXT(times);
            level_txt.string = Math.floor(chapterInfo / 100) + "-" + chapterInfo % 100
        }
        // 玩家名字
        this.lbl_player_node_name.string = rankData.simple.name;
        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(rankData.simple);
        this.palyerHerdItem.initHeadInfo({ roleInfo: playerInfo });
        this.palyerHerdItem.setCloseCallBack(() => {
            UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { "rankData": playerInfo } })
        })
        if (this._rankType === RANKING_TYPE.LEVEL) {
            // 等级榜
            this.lbl_player_node_level.node.active = true;
            //this.lbl_player_node_level.string = String(rankData.simple.level);
            this.lbl_player_node_level.string = LangMgr.getCombineString("ui_heroresonancepop_3", [String(rankData.simple.level)]);
        } else if (this._rankType === RANKING_TYPE.POWER) {
            this.lbl_player_node_force.node.active = true;
            //this.lbl_player_node_force.string = String(rankData.simple.powerScore);
            this.lbl_player_node_force.string = LangMgr.getLab("ui_commondesc_43") + GameUtil.convertNumber(rankData.simple.powerScore);
        } else if (this._rankType === RANKING_TYPE.CHAPTER) {
            this.lbl_player_node_chapter.active = true;
        } else if (this._rankType === RANKING_TYPE.Fight) {
            this.lbl_player_node_force.node.active = true;
            this.lbl_player_node_force.string =  LangMgr.getCombineString("ui_fincafight_13", [String(this._playerData.score)]);
        }

        let table = tab.getData().QuestLogTableByLevel.getValue(rankData.simple.reputation);
        if (table) {
            this.lbl_plaer_node_reputation.string = LangMgr.getLab(table.Name);
        } else {
            this.lbl_plaer_node_reputation.node.active = false;
        }
    }
    createGuildData() {
        refreshFlagImg(this._guildData ? this._guildData.flagId : 0, this.sp_guild_flag);
        this.lbl_guild_name.string = this._guildData ? this._guildData.name : "";
        this.lbl_guild_force.string = GameUtil.convertNumber(this._guildData.powerScore)
    }
    onClickGuild() {
        if (this._guildData.id) {
            UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": this._guildData } })
        }
    }
    protected onDisable(): void {
        this.Node_StarItem.onDisable();
    }
}


