/*
 * @Date: 2024-08-28 10:44:28
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-01 14:37:52
 */

import { _decorator, Component, error, instantiate, log, Node, Prefab } from 'cc';
import { ViewPop } from '../../../framework/base/ViewPop';
import { ASSOCIATION } from '../../../Common/script/EnumTypeMgr';
import { AssociationMainView } from './AssociationMainView';
import { AssociationApplyView } from './AssociationApplyView';
import { AssociationData } from './AssociationData';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { EventMgr } from '../../mgr/EventMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationView')
export class AssociationView extends ViewPop {
    @property(Node)
    assocition_main_view: Node = null;

    @property(Node)
    assocition_apply_view: Node = null;

    private currNode: Node = null;
    private view_type: ASSOCIATION = ASSOCIATION.NONE;
    register(): void {
        /* 公会数据 */
        EventMgr.onMsg(proto.Ptl.GetGuildInfoRsp, this.on_s2c_GetGuildInfoRsp, this);
        /* 创建公会 */
        EventMgr.onMsg(proto.Ptl.JoinGuildRequestReplyPush, this.on_s2c_JoinGuildRequestReplyPush, this);
        // 被踢出公会
        EventMgr.onMsg(proto.Ptl.KickedOutGuildPush, this.on_s2c_KickedOutGuildPush, this);
        EventMgr.onMsg(proto.Ptl.GuildMemberChangedPush, this.on_s2c_GuildMemberChangedPush, this);
    }
    on_s2c_GuildMemberChangedPush(msg: proto.Msg_GuildMemberChangedPush) {
        this.refreshGuildData();
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    on_s2c_KickedOutGuildPush(msg: proto.Msg_KickedOutGuildPush) {
        if (msg.guildId) {
            AssociationData.ins.subGuildRequests(msg.guildId);
            this.refreshGuildData();
        }
    }
    on_s2c_JoinGuildRequestReplyPush(msg: proto.Msg_JoinGuildRequestReplyPush) {
        if (msg.guildId && msg.agree) {
            AssociationData.ins.subGuildRequests(msg.guildId);
        }
    }
    on_s2c_GetGuildInfoRsp(msg: proto.Msg_GetGuildInfoRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.switchView();
    }
    onShow(): void {
        this.refreshGuildData();
    }
    // 刷新公会信息
    refreshGuildData() {
        let guild_msg = new proto.Msg_GetGuildInfoReq();
        Net.Send(proto.Ptl.GetGuildInfoReq, guild_msg);
    }
    async switchView() {
        if (this.currNode) {
            this.currNode.active = false;
        }
        this.view_type = AssociationData.ins.getInGuild() ? ASSOCIATION.INASSOCIATION : ASSOCIATION.NONE;
        switch (this.view_type) {
            case ASSOCIATION.NONE:
                this.assocition_apply_view.active = true;
                this.currNode = this.assocition_apply_view;
                this.assocition_apply_view.getComponent(AssociationApplyView).onShow();
                break
            case ASSOCIATION.INASSOCIATION:
                this.assocition_main_view.active = true;
                this.currNode = this.assocition_main_view;
                if(this.openData){
                    this.assocition_main_view.getComponent(AssociationMainView).onShow(this.openData);
                    this.openData = null;
                }else{
                    this.assocition_main_view.getComponent(AssociationMainView).onShow(null);
                }
                break
            default:
                break;
        }
    }
}


