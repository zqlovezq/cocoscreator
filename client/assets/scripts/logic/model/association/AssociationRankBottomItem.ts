import { _decorator, Component, Label, Node, Sprite } from 'cc';
import InfiniteCell from '../../../Common/InfiniteList/InfiniteCell';
import { proto } from 'client_protocol';
import { LangMgr } from '../../mgr/LangMgr';
import { GameUtil, refreshFlagImg } from '../../utils/GameUtil';
import { SimpleRoleInfo } from '../friends/SimpleRoleInfo';
import { PlayerHeadItem } from '../common/PlayerHeadItem';
import { UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { AssociationData } from './AssociationData';
const { ccclass, property } = _decorator;

@ccclass('AssociationRankBottomItem')
export class AssociationRankBottomItem extends InfiniteCell {
    @property(Node)
    node_role: Node = null;
    @property(Node)
    node_guild: Node = null;
    @property(Label)
    lbl_rank:Label = null;
    @property(Sprite)
    sp_guild_flag:Sprite = null;
    @property(Label)
    lbl_guild_name:Label = null;
    @property(Label)
    lbl_guild_score:Label = null;
    @property(Label)
    lbl_members_count:Label = null;

    @property(PlayerHeadItem)
    palyerHerdItem:PlayerHeadItem=null;
    @property(Label)
    lbl_role_damage:Label = null;
    @property(Label)
    lbl_role_name:Label = null;
    private data: any = null;
    private simpleRole: proto.ISimpleRole = null;
    private simpleGuild: proto.ISimpleGuild = null;
    private view_type: number = 0;
    private _rank_index:number = 0;
    private _isMySelf:boolean = false;
    UpdateContent(data: any): void {
        this.view_type = data.view_type;
        this.node_role.active = false;
        this.node_guild.active = false;
        this._rank_index = data.index;
        this._isMySelf = data.isSelf;
        if (data) {
            if (this.view_type === 1) {
                this.data = data.rankData as proto.ISimpleRank
                this.initPlayerData(this.data);
            } else {
                this.data = data.rankData as proto.IGuildBossRank
                this.initGuildData(this.data);
            }

        }
    }
    initPlayerData(data:proto.ISimpleRank){
        this.simpleRole = data.simple;
        this.node_role.active = true;
        const playerInfo = new SimpleRoleInfo();
        playerInfo.merge(this.simpleRole);
        this.palyerHerdItem.initHeadInfo({roleInfo:playerInfo});

        this.lbl_role_damage.string = String(data.score);
        this.lbl_role_name.string = this.simpleRole.name;
        this.lbl_rank.string = String(this._rank_index + 4);
    }
    initGuildData(data:proto.IGuildBossRank){
        if(data&&data.guild&&data.guild.simple){
            this.node_guild.active = true;
            this.simpleGuild = data.guild.simple;
            this.createGuildData();
        }
    }
    createGuildData(){
        refreshFlagImg(this.simpleGuild?this.simpleGuild.flagId:0,this.sp_guild_flag);
        this.lbl_guild_name.string = this.simpleGuild?this.simpleGuild.name:"";
        this.lbl_guild_score.string = GameUtil.convertNumber(this.data.score);
        this.lbl_members_count.string = LangMgr.getCombineString("ui_association_4",[this.data.members]);
        this.lbl_rank.string = String(this._rank_index + 4);
    }
    setPlayerMyRank(idx:number){
        this.lbl_rank.string = String(idx);
        if(idx>0&&idx<=3){
            this.node.getChildByName("rank_node").active = false;
            this.node.getChildByName("myno1").active = idx===1;
            this.node.getChildByName("myno2").active = idx===2;
            this.node.getChildByName("myno3").active = idx===3;
        }else if(idx>3){
            this.node.getChildByName("rank_node").active = true;
        }else{
            this.lbl_rank.string = LangMgr.getLab("ui_rank_1")
        }
        this.simpleGuild = AssociationData.ins.getAssocitionSimpleInfo();
    }
    onClickGuild() {
        if(this.simpleGuild){
            UIMgr.ins.show({ viewName: ViewName.AssociationMainPop, data: { "rankData": this.simpleGuild } })
        }
    }
}


