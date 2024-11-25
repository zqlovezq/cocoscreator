/*
 * @Date: 2024-08-28 11:02:22
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-05 10:09:52
 */

import { _decorator, Button, Component, EventTouch, instantiate, Label, log, Node, NodeEventType, Prefab, ProgressBar, ScrollView, Sprite, Toggle, UITransform, Vec3 } from 'cc';
import { ComponentBase } from '../../../framework/base/ComponentBase';
import { AssociationControl } from './AssociationControl';
import { AssociationView } from './AssociationView';
import { UIMgr } from '../../mgr/UIMgr';
import { proto } from 'client_protocol';
import { ViewName } from '../../define/ViewDefine';
import { ASSOCIATIONPOP, ASSOCIATIONVIEW } from '../../../Common/script/EnumTypeMgr';
import InfiniteList from '../../../Common/InfiniteList/InfiniteList';
import { AssociationPlayerItem } from './AssociationPlayerItem';
import { AssociationData } from './AssociationData';
import { tab } from '../../../Table/table_gen';
import { AssociationOperatePop } from './AssociationOperatePop';
import { EventMgr } from '../../mgr/EventMgr';
import { getPlayInfoById, getTimeUntilNextDay, setTextTime } from '../../utils/GameUtil';
import { RoleData } from '../role/RoleData';
import { ChatData } from '../chat/ChatData';
import { LangMgr } from '../../mgr/LangMgr';
import { ChatControl } from '../chat/ChatControl';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationMainView')
export class AssociationMainView extends ComponentBase {
    @property(Node)
    node_info: Node = null;
    @property(Node)
    node_event: Node = null;
    @property(InfiniteList)
    list_view: InfiniteList = null;
    @property(Prefab)
    pfb_item: Prefab = null;

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
    bar_guild_exp: ProgressBar = null;
    @property(Sprite)
    sp_guild_flag: Sprite = null;//公会旗帜

    @property(Node)
    node_small_tips: Node = null;
    @property(Node)
    node_sign: Node = null;
    @property(Label)
    timerLab: Label = null;

    @property(Node)
    node_guild_setting: Node = null;
    @property(Node)
    node_write_notice: Node = null;
    @property(Node)
    node_guild_proces: Node = null;
    @property(Toggle)
    toggle_info: Toggle = null;
    @property(Toggle)
    toggle_event: Toggle = null;
    @property(Label)
    timerBossLab: Label = null;

    @property(Node)
    node_hide:Node = null;

    private view_type: ASSOCIATIONVIEW = ASSOCIATIONVIEW.NONE;
    private _list: proto.IGuildMember[] = []
    private _openData: any = null;
    private endBossTimer: number = 0;
    private endTimer: number = 0;
    register(): void {
        /* 成员信息变动 */
        EventMgr.onMsg(proto.Ptl.SetGuildMemberJobRsp, this.on_s2c_SetGuildMemberJobRsp, this);
        /* 踢出公会 */
        EventMgr.onMsg(proto.Ptl.KickGuildMemberRsp, this.on_s2c_KickGuildMemberRsp, this);
        /* 监听公会签到 */
        EventMgr.onMsg(proto.Ptl.SignGuildRsp, this.on_s2c_SignGuildRsp, this);
        /* 监听公会公告修改 */
        EventMgr.onMsg(proto.Ptl.SetGuildNoticeRsp, this.on_s2c_SetGuildNoticeRsp, this);
        /* 监听设置公会名字和旗帜 */
        EventMgr.onMsg(proto.Ptl.SetGuildNameAndFlagRsp, this.on_s2c_SetGuildNameAndFlagRsp, this);
        EventMgr.onMsg(proto.Ptl.GuileLevelUpPush, this.on_s2c_GuileLevelUpPush, this);
        EventMgr.onMsg(proto.Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);
        this.node_hide.on(NodeEventType.TOUCH_START, (()=>{
            this.node_hide.active = false;
            this.node_small_tips.active = false;
        }), this);
    }
    unRegister(): void {
        super.unRegister();
    }
    protected onDestroy(): void {
        super.onDestroy();
    }
    onShow(openData: any) {
        this.view_type = openData ? ASSOCIATIONVIEW.EVENT : ASSOCIATIONVIEW.INFO;
        if (openData) {
            this._openData = openData
        }
        this.onTouchStar();
        this.setView();
    }
    /* 点击获取申请列表 */
    clickGetApplyList() {
        this.onTouchStar();
        UIMgr.ins.show({ viewName: ViewName.AssociationApplyListPop })
    }
    onClose() {
        const view = UIMgr.ins.getView("AssociationView").getComponent(AssociationView);
        view.onClose();
    }
    onClickChat() {
        // 判断聊天是否开启
        this.onTouchStar();
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen( tab.OpenFunctionName.OpenFunctionName_Chat)
        if(isOpen){
            UIMgr.ins.show({ viewName: ViewName.ChatPop, data: { "channelType": proto.ChatChannelType.Guild } })
        }else{
            OpenFunctionMgr.ins.showFunctionTips( tab.OpenFunctionName.OpenFunctionName_Chat)
        }
    }
    setView(isRefresh?: boolean) {
        this.node_info.active = this.view_type === ASSOCIATIONVIEW.INFO;
        this.node_event.active = this.view_type === ASSOCIATIONVIEW.EVENT;
        this.toggle_info.isChecked = this.view_type === ASSOCIATIONVIEW.INFO;
        this.toggle_event.isChecked = this.view_type === ASSOCIATIONVIEW.EVENT;
        switch (this.view_type) {
            case ASSOCIATIONVIEW.INFO:
                // 公会信息界面
                this.unschedule(this.updateBossTimer)
                this._list = AssociationData.ins.getMemberArr();
                this.initList(isRefresh);
                this.setGuildSimpleInfo();
                break;
            case ASSOCIATIONVIEW.EVENT:
                //工会任务界面 
                if (this._openData === tab.PveStageType.PveStageType_GuildBoss) {
                    UIMgr.ins.show({ viewName: ViewName.AssociationBossView })
                }
                this._openData = null;
                this.initBossEndTimer();
                break;
            default:
                break;
        }
    }
    switchView(e: EventTouch, view: string) {
        this.onTouchStar();
        if (Number(view) === this.view_type) {
            return
        }
        this.view_type = Number(view);
        this.setView();
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
            // this.list_view.node.on("scrolling", this.onScrolling, this);
            let _scrollView = this.list_view.getComponent(ScrollView);
            this.list_view.node.targetOff(this.list_view.node);
            _scrollView.node.off(NodeEventType.TOUCH_START, this.onTouchStar, this, true);
            this.list_view.node.on("scroll-began", () => {
                this.node_small_tips.active = false;
            }, this);
            _scrollView.node.on(NodeEventType.TOUCH_START, this.onTouchStar, this, true);
        }
    }
    onTouchStar() {
        this.node_small_tips.active = false;
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
        return { data: this._list[idx], view: this };
    }
    on_s2c_GetSimpleRoleRsp(msg: proto.Msg_GetSimpleRoleRsp){
        this.lbl_leader_name.string = msg.role.name;
        AssociationData.ins.getAssocitionSimpleInfo().leaderName = msg.role.name;
    }
    setGuildSimpleInfo() {
        const guildData: proto.SimpleGuild = AssociationData.ins.getAssocitionSimpleInfo();
        if (guildData) {
            const flagtab = tab.getData().GuildFlagTableById.getValue(guildData.flagId ? guildData.flagId : 1);
            this.sp_guild_flag.setTexture(flagtab.IconUrl);
            this.lbl_guild_name.string = guildData.name;
            if(guildData.leaderName){
                this.lbl_leader_name.string = guildData.leaderName;
            }else{
                getPlayInfoById(guildData.leaderId);
            }
            this.lbl_guild_notice.string = guildData.notice;
            const memberCountInfo = AssociationData.ins.getGuildMembersCount();
            const memberData = AssociationData.ins.getMemberData(RoleData.ins.id);
            this.lbl_guild_member_count.string = memberCountInfo.memberCount + "/" + memberCountInfo.totalCount;

            this.setExpLevel();

            this.unschedule(this.updateTimer)
            this.endTimer = getTimeUntilNextDay();
            //let tips = "{0}後可再次領取"
            this.timerLab.string = setTextTime(this.endTimer);
            this.schedule(this.updateTimer, 1)
            // 设置权限
            const guildPositionTab = tab.getData().GuildPositionTableByPosition.getValue(memberData.job);
            this.node_guild_setting.active = guildPositionTab.Setting;
            this.node_write_notice.active = guildPositionTab.WriteNotification && !AssociationData.ins.getAssocitionInfo().isBanNotice;
            this.node_guild_proces.active = guildPositionTab.Proces;
            this.setSignBtn();
            // 刷新一下申请红点
            AssociationControl.ins.reqGetJoinGuildRequests(0);
            RedMgr.refreshEvent(RedDotType.Guild_Activity);
        }
    }
    showSmallTips(target: Node, data: proto.IGuildMember) {
        // AssociationOperatePop
        this.node_small_tips.active = true;
        this.node_hide.active = true;
        const ts = this.node_small_tips.getComponent(AssociationOperatePop);
        ts.setData(data);
        const scrollViewMidY = this.list_view.node.getComponent(UITransform).height / 2;
        const worldPos = target.parent.getComponent(UITransform).convertToWorldSpaceAR(target.position);
        const viewPos = this.list_view.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
        const distanceToCenter = viewPos.y + scrollViewMidY;
        if (distanceToCenter > 0) {
            this.node_small_tips.setPosition(new Vec3(viewPos.x, viewPos.y, 0))
        } else {
            this.node_small_tips.setPosition(new Vec3(viewPos.x, viewPos.y - distanceToCenter + 40, 0))
        }
    }
    /* 队员信息变动 */
    on_s2c_SetGuildMemberJobRsp(msg: proto.Msg_SetGuildMemberJobRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.setView(true);
    }
    /* 踢出队员 */
    on_s2c_KickGuildMemberRsp(msg: proto.Msg_KickGuildMemberRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.setView(false);
    }
    /* 点击鸡多多界面 */
    onClickBargainGiftPop(e: EventTouch, type: string) {
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildGift);
        if (isOpen) {
            if (AssociationData.ins.getBargainGift(type)) {
                UIMgr.ins.show({ viewName: ViewName.AssociationGiftPop ,data:type});
            }
        } else {
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildGift);
        }
    }
    /* 点击更改信息 */
    onClickChangeInfo(e: EventTouch, type: string) {
        this.onTouchStar();
        UIMgr.ins.show({ viewName: ViewName.AssociationChangeInfoPop })
    }
    onClickChangeNotice(e: EventTouch, type: string) {
        this.onTouchStar();
        UIMgr.ins.show({ viewName: ViewName.AssociationChangeNoticePop })
    }
    /* 点击签到 */
    onClickSign(e: EventTouch, type: string) {
        this.onTouchStar();
        UIMgr.ins.show({ viewName: ViewName.AssociationDonatePop })
    }
    /* 点击公会boss */
    onClickGuildBoss(e: EventTouch, type: string) {
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss);
        if (isOpen) {
            UIMgr.ins.show({ viewName: ViewName.AssociationBossView })
        } else {
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildBoss);
        }
    }
    on_s2c_SignGuildRsp(msg: proto.Msg_SignGuildRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        this.setSignBtn();
    }
    setSignBtn() {
        const guildInfo = AssociationData.ins.getAssocitionInfo();
        const signCount = guildInfo.signTimes;
        const maxSignCount = tab.getData().GuildSignInTable.length;
        const maxRemainSignCount = maxSignCount - signCount;
        this.node_sign.getComponent(Button).interactable = maxRemainSignCount > 0;
        this.node_sign.getComponent(Sprite).grayscale = maxRemainSignCount <= 0;
        RedMgr.refreshEvent(RedDotType.Guild_Sign);
        this.setExpLevel();
    }
    on_s2c_GuileLevelUpPush(msg:proto.Msg_GuileLevelUpPush){
        const guildData: proto.SimpleGuild = AssociationData.ins.getAssocitionSimpleInfo();
        guildData.exp = msg.exp;
        guildData.level = msg.level;
        this.setExpLevel();
    }
    setExpLevel(){
        const guildData: proto.SimpleGuild = AssociationData.ins.getAssocitionSimpleInfo();
        if(guildData){
            const lvData = tab.getData().GuildLevelTableById.getValue(guildData.level)
            const nextLvData = tab.getData().GuildLevelTableById.getValue(guildData.level + 1)
            this.lbl_guild_exp.string = guildData.exp + "/" + (nextLvData ? nextLvData.Exp : lvData.Exp);
            this.lbl_guild_lv.string = String(guildData.level);
            const _progress = guildData.exp / (nextLvData ? nextLvData.Exp : lvData.Exp)
            this.bar_guild_exp.progress = _progress > 1 ? 1 : _progress;

            const memberCountInfo = AssociationData.ins.getGuildMembersCount();
            this.lbl_guild_member_count.string = memberCountInfo.memberCount + "/" + memberCountInfo.totalCount;
        }
    }
    on_s2c_SetGuildNoticeRsp(msg: proto.Msg_SetGuildNoticeRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 设置公会公告成功")
        this.setView(true);
    }
    on_s2c_SetGuildNameAndFlagRsp(msg: proto.Msg_SetGuildNameAndFlagRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 设置工会旗帜 姓名成功")
        this.setView(true);
    }
    /* 点击任务按钮 */
    onClickTaskBtn() {
        this.onTouchStar();
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildTask);
        if (isOpen) {
            UIMgr.ins.show({ viewName: ViewName.AssociationTaskPop })
        } else {
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildTask);
        }
    }
    /* 点击技能按钮 */
    onClickSkillBtn() {
        this.onTouchStar();
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildAttr);
        if (isOpen) {
            UIMgr.ins.show({ viewName: ViewName.AssociationSkillPop })
        } else {
            AssociationData.ins.showFunctionTips(tab.GuildOFName.GuildOFName_GuildAttr);
        }
    }
    onClickLogBtn() {
        this.onTouchStar();
        UIMgr.ins.show({ viewName: ViewName.AssociationLogPop })
    }
    updateTimer = () => {
        this.endTimer--;
        if (this.endTimer >= 0) {
            //let tips = "{0}後可再次領取"
            this.timerLab.string = setTextTime(this.endTimer);
        } else {
            this.unschedule(this.updateTimer)
        }
    }

    initBossEndTimer() {
        this.unschedule(this.updateBossTimer)
        const isOpen = AssociationData.ins.checkFunctionIsOpen(tab.GuildOFName.GuildOFName_GuildBoss);
        if (isOpen) {
            this.endBossTimer = getTimeUntilNextDay();
            this.timerBossLab.string = LangMgr.getLab("ui_commondesc_109")+setTextTime(this.endBossTimer);
            this.schedule(this.updateBossTimer, 1)
        }else{
            this.timerBossLab.string = AssociationData.ins.getFunctionTips(tab.GuildOFName.GuildOFName_GuildBoss);
        }
    }
    updateBossTimer = () => {
        this.endBossTimer--;
        if (this.endBossTimer >= 0) {
            this.timerBossLab.string = LangMgr.getLab("ui_commondesc_109")+setTextTime(this.endBossTimer);
        } else {
            this.unschedule(this.updateBossTimer)
        }
    }
}


