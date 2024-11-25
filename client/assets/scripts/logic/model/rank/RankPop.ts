/*
 * @Date: 2024-06-12 17:43:04
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-01 16:06:00
 */

import { _decorator, Component, instantiate, log, Node, Prefab, Toggle, ToggleContainer } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
import { RankBottomItem } from './RankBottomItem';
import { RankTopItem } from './RankTopItem';
import { RankToggleItem } from './RankToggleItem';
import { LocalEvent } from '../../define/LocalEvent';
import { RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { RoleData } from '../role/RoleData';
import { HeroTeamControl } from '../hero/HeroTeamControl';
import { BattleMainDataControl } from '../home/battle/BattleMainDataControl';
import { AssociationControl } from '../association/AssociationControl';
import { AssociationData } from '../association/AssociationData';
import { ViewName } from '../../define/ViewDefine';
import { UIMgr } from '../../mgr/UIMgr';
const { ccclass, property } = _decorator;
@ccclass('RankPop')
export class RankPop extends ViewPop {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_rank_item: Prefab = null;
    @property(Prefab)
    pfb_rank_top_item: Prefab = null;
    @property(Prefab)
    pfb_toggle_item: Prefab = null;
    @property(Node)
    node_top_items: Node = null;
    @property(Node)
    node_toggle_content: Node = null;
    @property(RankBottomItem)
    node_my_rank_item: RankBottomItem = null;
    private top_rank_list: proto.ISimpleHero[] = [];
    private rank_hero_list: proto.ISimpleHero[] = [];
    private rank_player_list: proto.ISimpleRank[] = [];
    private top_player_list: proto.ISimpleRank[] = [];
    private rank_guild_list: proto.ISimpleGuild[] = [];
    private top_guild_list: proto.ISimpleGuild[] = [];
    private _rank_type: RANKING_TYPE = RANKING_TYPE.NONE;
    private _rankId: number = 0;
    private _ranking: number = 0;
    private _selfSimple = null;
    onShow(): void {
        this.node_toggle_content.destroyAllChildren();
        this.createToggleItem();
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetRankRsp, this.on_s2c_GetRankRsp, this);
        EventMgr.onMsg(proto.Ptl.GetHeroRankRsp, this.on_s2c_GetHeroRankRsp, this);
        // 切换排行榜
        /* 监听设置公会排行榜 */
        EventMgr.onMsg(proto.Ptl.GetGuildRankRsp, this.on_s2c_GetGuildRankRsp, this);
        EventMgr.onLocal(LocalEvent.Rank_Change, this.changeRank, this);
        EventMgr.onMsg(proto.Ptl.GetSimpleRankRsp, this.on_s2c_GetSimpleRankRsp, this);
    }
    changeRank(rankId: number) {
        if (rankId <= 5) {
            this._rank_type = RANKING_TYPE.HERO;
            let msg = new proto.Msg_GetHeroRankReq();
            msg.rankId = rankId;
            Net.Send(proto.Ptl.GetHeroRankReq, msg);
        } else {
            if (this._rank_type === rankId) {
                return;
            }
            this._rank_type = rankId;
            if (rankId === RANKING_TYPE.GUILD) {
                AssociationControl.ins.reqGetGuildRank(14)
            } else if (rankId == RANKING_TYPE.Fight) {
                let msg = new proto.Msg_GetSimpleRankReq();
                msg.rankId = RANKING_TYPE.Fight;
                msg.pageIndex = 0;
                msg.pageSize = 30;
                Net.Send(proto.Ptl.GetSimpleRankReq, msg)
            } else {
                let msg = new proto.Msg_GetRankReq();
                msg.rankId = rankId;
                Net.Send(proto.Ptl.GetRankReq, msg)
            }
        }
    }
    on_s2c_GetGuildRankRsp(msg: proto.Msg_GetGuildRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this._rankId = msg.rankId;
        this._ranking = msg.ranking;
        this.rank_guild_list = [];
        this.top_guild_list = [];

        // 处理一下rankList 有可能有的排行已经解散
        // const list = [];
        // for(let k=0;k<msg.rankList.length;k++){
        //     const _rankList = msg.rankList[i]
        //     if(_rankList)
        // }

        for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
                this.top_guild_list.push(msg.rankList[i])
            } else {
                this.rank_guild_list.push(msg.rankList[i])
            }
        }

        this.initStaticView();
        this.createTopItem();
    }
    on_s2c_GetSimpleRankRsp(msg: proto.Msg_GetRankRsp){
         /*排行榜数据返回 */
         this._rankId = msg.rankId;
         this._ranking = msg.ranking;
         this._selfSimple = msg.selfSimple;
         this.rank_player_list = [];
         this.top_player_list = [];
         for (let i = 0; i < msg.rankList.length; i++) {
             if (i < 3) {
                 this.top_player_list.push(msg.rankList[i])
             } else {
                 this.rank_player_list.push(msg.rankList[i])
             }
         }
 
         this.initStaticView();
         this.createTopItem();
    }
    on_s2c_GetRankRsp(msg: proto.Msg_GetRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        /*排行榜数据返回 */
        this._rankId = msg.rankId;
        this._ranking = msg.ranking;
        this._selfSimple = msg.selfSimple;
        this.rank_player_list = [];
        this.top_player_list = [];
        for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
                this.top_player_list.push(msg.rankList[i])
            } else {
                this.rank_player_list.push(msg.rankList[i])
            }
        }

        this.initStaticView();
        this.createTopItem();
    }
    on_s2c_GetHeroRankRsp(msg: proto.Msg_GetHeroRankRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        /*英雄排行榜数据返回 */
        // 前三名放在榜首位置
        this._rankId = msg.rankId;
        this._ranking = msg.ranking;
        this._selfSimple = msg.selfSimple;
        this.rank_hero_list = [];
        this.top_rank_list = [];
        for (let i = 0; i < msg.rankList.length; i++) {
            if (i < 3) {
                this.top_rank_list.push(msg.rankList[i])
            } else {
                this.rank_hero_list.push(msg.rankList[i])
            }
        }
        this.initStaticView();
        this.createTopItem();
    }
    initStaticView() {
        let canInit = false;
        if (this._rank_type === RANKING_TYPE.HERO && this.rank_hero_list.length > 0) {
            canInit = true
        }
        if (this._rank_type !== RANKING_TYPE.HERO && this.rank_player_list.length > 0) {
            canInit = true
        }
        if (this._rank_type === RANKING_TYPE.GUILD && this.rank_guild_list.length > 0) {
            canInit = true
        }
        this.list_view.stopAutoScroll();
        if (canInit) {
            this.list_view.node.parent.active = true;
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
        } else {
            this.list_view.node.parent.active = false;
        }
        this.createMyRank();
    }
    getCellCount() {
        if (this._rank_type === RANKING_TYPE.HERO) {
            return this.rank_hero_list.length;
        } else if (this._rank_type === RANKING_TYPE.GUILD) {
            return this.rank_guild_list.length;
        } else {
            return this.rank_player_list.length;
        }
    }
    getCellHeight(idx: number) {
        return 82;
    }
    getCellIdentifer(idx: number) {
        return "RankBottomItem"
    }
    getCellView(idx: number, identifer: string) {
        return instantiate(this.pfb_rank_item).getComponent(RankBottomItem);
    }
    GetCellData(idx: number) {
        if (this._rank_type === RANKING_TYPE.HERO) {
            return { rankData: this.rank_hero_list[idx], index: idx, rankType: this._rank_type };
        } else if (this._rank_type === RANKING_TYPE.GUILD) {
            return { rankData: this.rank_guild_list[idx], index: idx, rankType: this._rank_type };
        } else {
            return { rankData: this.rank_player_list[idx], index: idx, rankType: this._rank_type };
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    /* 创建前三的数据 */
    createTopItem() {
        for (let i = 0; i < 3; i++) {
            const parentNode = this.node_top_items.children[i];
            let item = null;
            if (!parentNode.children[0]) {
                item = instantiate(this.pfb_rank_top_item);
                item.parent = parentNode;
            } else {
                item = parentNode.children[0]
            }
            const itemTs: RankTopItem = item.getComponent(RankTopItem);
            if (this._rank_type === RANKING_TYPE.HERO) {
                itemTs.initHeroData(this.top_rank_list[i]);
            } else if (this._rank_type === RANKING_TYPE.GUILD) {
                itemTs.initGuildData(this.top_guild_list[i]);
            } else {
                itemTs.initHeroPlayerData(this.top_player_list[i], this._rank_type);
            }
        }
    }
    /* 创建toggle */
    createToggleItem() {
        const arr = [8, 6, 1, 7, 9, 14, 17];
        for (let i = 0; i < arr.length; i++) {
            const _key = arr[i];
            let item = null;
            let itemTs: RankToggleItem = null;
            item = instantiate(this.pfb_toggle_item);
            item.parent = this.node_toggle_content;
            item.name = String(_key);
            itemTs = item.getComponent(RankToggleItem);
            itemTs.setData(_key);
        }
        if (this.openData) {
            const ts = this.node_toggle_content.getChildByName(String(this.openData)).getComponent(RankToggleItem)
            ts.onClickCheck(null, String(this.openData));
        } else {
            const ts = this.node_toggle_content.getChildByName(String(arr[0])).getComponent(RankToggleItem);
            ts.onClickCheck(null, String(arr[0]));
        }
    }
    // 创建自己的排行
    createMyRank() {
        let allRank = []
        if (this._rank_type === RANKING_TYPE.HERO) {
            allRank = this.top_rank_list.concat(this.rank_hero_list);
        } else if (this._rank_type === RANKING_TYPE.GUILD) {
            allRank = this.top_guild_list.concat(this.rank_guild_list);
        } else {
            allRank = this.top_player_list.concat(this.rank_player_list);
        }
        if (this._ranking >= 0) {
            if (this._rankId < RANKING_TYPE.CHAPTER) {
                // 英雄数据
                const rankData = allRank[this._ranking] as proto.ISimpleHero;
                this.setMyRank(rankData, this._ranking)
            } else {
                if (this._rankId === RANKING_TYPE.GUILD) {
                    const rankData = allRank[this._ranking] as proto.ISimpleGuild;
                    this.setMyRank(rankData, this._ranking)
                } else {
                    // 个人数据
                    const rankData = allRank[this._ranking] as proto.ISimpleRank;
                    this.setMyRank(rankData, this._ranking)
                }
            }
        } else {
            const rankData = AssociationData.ins.getAssocitionSimpleInfo();
            this.setMyRank(rankData, -1)
        }
    }
    setMyRank(rankData: proto.ISimpleRank | proto.ISimpleHero | proto.ISimpleGuild, rankLevel: number) {
        this.node_my_rank_item.UpdateContent({ rankData: rankData, index: rankLevel + 1, rankType: this._rank_type, isSelf: true })
        this.node_my_rank_item.setPlayerMyRank(rankLevel + 1);
    }
    // 通过玩家当前的排行榜创建数据
    createDataByRankId() {
        let data = null;
        switch (this._rankId) {
            case 1:
            case 2:
            case 3:
            case 4:
            case 5:
                // 获取队伍中英雄的信息 = 
                data = new proto.SimpleHero();
                const itemData = HeroTeamControl.ins.getHeroByClass(this._rankId);
                data.itemId = itemData.itemId;
                data.level = itemData.level;
                data.star = itemData.star;
                data.roleName = RoleData.ins.name;
                data.powerScore = itemData.powerScore;
                break;
            case 6:
            case 7:
            case 8:
            case 9:
                data = new proto.SimpleRank();
                // score := int64(stageId)*1000000 + int64(alive)%1000000
                const stageId = BattleMainDataControl.ins.getCurFightStageId();
                const time = BattleMainDataControl.ins.getClearedStageAliveSecond(stageId);
                data.score = stageId * 1000000 + time % 1000000;
                data.simple = new proto.SimpleRole();
                data.simple.name = RoleData.ins.name;
                data.simple.powerScore = RoleData.ins.powerScore;
                data.simple.reputation = 0;
                data.simple.level = RoleData.ins.level;
                break;
            case 14:
                data = new proto.SimpleGuild();
                data.flagId = 1;
                data.name = "";
                data.powerScore = 0;
                break;
            default:
                break;
        }
        return data;
    }
    onClose(): void {
        this.list_view.stopAutoScroll();
        super.onClose();
    }
    onClickGuild() {
        const rankData = AssociationData.ins.getAssocitionSimpleInfo()
        if (rankData.id) {
            UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": rankData } })
        }
    }
}


