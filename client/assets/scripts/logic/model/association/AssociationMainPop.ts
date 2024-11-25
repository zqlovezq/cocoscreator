import { _decorator, Button, Component, instantiate, Label, Node, Prefab, ProgressBar, Sprite } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { tab } from '../../../Table/table_gen';
import { proto } from 'client_protocol';
import { AssociationData } from './AssociationData';
import { AssociationControl } from './AssociationControl';
import { RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { EventMgr } from '../../mgr/EventMgr';
import { AssociationPlayerItem } from './AssociationPlayerItem';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { RoleData } from '../role/RoleData';
import { LangMgr } from '../../mgr/LangMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationMainPop')
export class AssociationMainPop extends ViewPop {
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;

    @property(Label)
    lbl_guild_name: Label = null;//公会名字
    @property(Label)
    lbl_leader_name: Label = null;//公会舰长名字
    @property(Label)
    lbl_guild_notice: Label = null;//公会公告
    @property(Label)
    lbl_guild_lv: Label = null;//公会等级
    @property(Label)
    lbl_guild_member_count: Label = null;//公会成员数量
    @property(Label)
    lbl_guild_exp: Label = null;//公会成员数量
    @property(ProgressBar)
    bar_guild_exp:ProgressBar = null;
    @property(Sprite)
    sp_guild_flag: Sprite = null;//公会旗帜
    @property(Node)
    node_apply:Node = null;
    @property(Label)
    lbl_apply:Label = null;
    private guildData:proto.SimpleGuild = null;
    private _list: proto.IGuildMember[] = [];
    private _applyGuide:boolean = false;
    onShow(): void {
        this.guildData = this.openData.rankData;
        this._applyGuide = AssociationData.ins.getGuildIsRequest(this.guildData.id)
        this.setGuildSimpleInfo();
        // 获取公会信息

        const simpleInfo = AssociationData.ins.getAssocitionSimpleInfo()
        if(simpleInfo&&this.guildData.id===simpleInfo.id){
            this._list = AssociationData.ins.getMemberArr();
            this.initList();
        }else{
            AssociationControl.ins.reqGetGuildDesc(this.guildData.id);
        }
    }
    protected onDestroy(): void {
        super.onDestroy()
    }
    register(): void {
        EventMgr.onMsg(proto.Ptl.QueryGuildInfoRsp, this.on_s2c_QueryGuildInfoRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    on_s2c_QueryGuildInfoRsp(msg: proto.Msg_QueryGuildInfoRsp){
        this._list = msg.guild.members;
        this.initList();
    }
    initList() {
        this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this),
        });
    }
    setGuildSimpleInfo() {
        const guildData = this.guildData
        const flagtab = tab.getData().GuildFlagTableById.getValue(guildData.flagId ? guildData.flagId : 1);
        this.sp_guild_flag.setTexture(flagtab.IconUrl);
        this.lbl_guild_name.string = guildData.name;
        this.lbl_leader_name.string = guildData.leaderName;
        this.lbl_guild_notice.string = guildData.notice;
        const lvData = tab.getData().GuildLevelTableById.getValue(guildData.level)
        this.lbl_guild_member_count.string = this.guildData.memberCount + "/" + lvData.MaxCount;
        const nextLvData = tab.getData().GuildLevelTableById.getValue(guildData.level + 1)
        this.lbl_guild_exp.string = guildData.exp + "/" + (nextLvData ? nextLvData.Exp : lvData.Exp);
        this.lbl_guild_lv.string = String(guildData.level);
        const _progress = guildData.exp/(nextLvData ? nextLvData.Exp : lvData.Exp)
        this.bar_guild_exp.progress = _progress>1?1:_progress;
        this.node_apply.active = !AssociationData.ins.getInGuild();
        this.refreshApplyLable();
    }
    refreshApplyLable(){
        this.lbl_apply.string = this._applyGuide?LangMgr.getLab("ui_association_8"):LangMgr.getLab("ui_association_7");
        this.node_apply.getComponent(Button).interactable = !this._applyGuide;
        this.node_apply.getComponent(Sprite).grayscale = this._applyGuide;
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        return 120
    }
    getCellIdentifer(idx: number) {
        return "AssociationPlayerItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = instantiate(this.pfb_item).getComponent(AssociationPlayerItem);
        return cell;
    }
    GetCellData(idx: number) {
        return { data: this._list[idx], view: this ,guildData:this.guildData};
    }
    /* 申请加入公会 */
    onClickEnterGuild(){
        AssociationControl.ins.reqJoinGuild(this.guildData.id)
        this._applyGuide = true;
        this.refreshApplyLable();
    }
}


