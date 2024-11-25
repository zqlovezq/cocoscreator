/*
 * @Date: 2024-08-28 11:39:23
 * @LastEditors: wzq
 * @LastEditTime: 2024-10-30 14:55:06
 */

import { _decorator, Button, Component, instantiate, Label, log, Node, Prefab, Sprite } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { ASSOCIATIONPOP } from '../../../Common/script/EnumTypeMgr';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { AssociationApplyItem } from './AssociationApplyItem';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { AssociationControl } from './AssociationControl';
import { AssociationView } from './AssociationView';
import { RoleData } from '../role/RoleData';
import { AssociationData } from './AssociationData';
import { LangMgr } from '../../mgr/LangMgr';
import { tab } from '../../../Table/table_gen';
import { Net } from '../../net/Net';
import { ButtonLock } from '../../utils/GameUtil';
const { ccclass, property } = _decorator;

@ccclass('AssociationApplyView')
export class AssociationApplyView extends ComponentBase {
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;
    @property(Label)
    lbl_time:Label = null;
    @property(Button)
    btn_one_click:Button = null;
    private _list:proto.ISimpleGuild[] = []
    register(): void {
        EventMgr.onMsg(proto.Ptl.GetRecommendGuildsRsp, this.on_s2c_GetRecommendGuildsRsp, this);
        EventMgr.onMsg(proto.Ptl.ApplyJoinGuildRsp, this.on_s2c_ApplyJoinGuildRsp, this);
        EventMgr.onMsg(proto.Ptl.ApplyJoinGuildOneClickRsp, this.on_s2c_ApplyJoinGuildOneClickRsp, this);
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    onShow(): void {
        this.reqGetRecommendGuilds();
    }
    reqGetRecommendGuilds() {
        AssociationControl.ins.reqGetRecommendGuilds();
    }
    // 创建鸡舍
    createAssociation() {
        // 打开创建鸡舍界面
        UIMgr.ins.show({ viewName: ViewName.AssociationCreatePop})
    }
    getCellCount() {
        return this._list.length
    }
    getCellHeight(idx: number) {
        return 81
    }
    getCellIdentifer(idx: number) {
        return "AssociationApplyItem";
    }
    getCellView(idx: number, identifer: string) {
        let cell = instantiate(this.pfb_item).getComponent(AssociationApplyItem);
        return cell;
    }
    GetCellData(idx: number) {
        return this._list[idx];
    }
    initList(isRefresh?: boolean) {
        if (isRefresh) {
            this.list_view.Refresh();
        } else {
            this.list_view.Init({
                getCellNumber: this.getCellCount.bind(this),
                getCellSize: this.getCellHeight.bind(this),
                getCellIdentifer: this.getCellIdentifer.bind(this),
                getCellView: this.getCellView.bind(this),
                getCellData: this.GetCellData.bind(this),
            });
            this.btn_one_click.interactable = true;
            this.btn_one_click.node.getComponent(Sprite).grayscale = false;
        }
        const curTime = RoleData.ins.getServerUtcTime();
        if (AssociationData.ins.getAssocitionInfo()&&curTime < AssociationData.ins.getAssocitionInfo().notAllowJoinTime) {
            this.lbl_time.node.active = true;
            this.lbl_time.string = LangMgr.getCombineString("Tips_association_4",[tab.getData().GetKeyValue_ConfigTable().GuildJoinCd/60])
        }else{
            this.lbl_time.node.active = false;
        }
    }
    on_s2c_GetRecommendGuildsRsp(msg: proto.Msg_GetRecommendGuildsRsp) {
        this._list = msg.guilds;
        for(let i=0;i<msg.guilds.length;i++){
            const guild = msg.guilds[i];
            if(AssociationData.ins.getGuildIsRequest(guild.id)){
                AssociationData.ins.subGuildRequests(guild.id);
            }
        }
        this.initList();
    }
    onClose() {
        const view = UIMgr.ins.getView("AssociationView").getComponent(AssociationView);
        view.onClose();
    }
    on_s2c_ApplyJoinGuildRsp(msg: proto.Msg_ApplyJoinGuildRsp){
        this.initList(true);
    }
    // 一键申请公会
    @ButtonLock(1, () => { })
    oneClickApplyJoinGuild(){
        const curTime = RoleData.ins.getServerUtcTime();
        if (AssociationData.ins.getAssocitionInfo()&&curTime < AssociationData.ins.getAssocitionInfo().notAllowJoinTime) {
            const str = LangMgr.getCombineString("Tips_association_4", [tab.getData().GetKeyValue_ConfigTable().GuildJoinCd / 60]);
            ShowTips(str);
            return;
        }
        const guilds = [];
        for(let i=0;i<this._list.length;i++){
            if(!AssociationData.ins.getGuildIsRequest(this._list[i].id)){
                guilds.push(this._list[i].id);
            }
        }
        if(guilds.length>0){
            this.btn_one_click.interactable = false;
            this.btn_one_click.node.getComponent(Sprite).grayscale = true;
            let msg = new proto.Msg_ApplyJoinGuildOneClickReq();
            msg.guildIds = guilds;
            Net.Send(proto.Ptl.ApplyJoinGuildOneClickReq, msg);
        }
    }
    on_s2c_ApplyJoinGuildOneClickRsp(msg: proto.Msg_ApplyJoinGuildOneClickRsp){
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.initList(true);
    }
}


