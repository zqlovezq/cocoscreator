/*
 * @Date: 2024-08-30 16:59:07
 * @LastEditors: wzq
 * @LastEditTime: 2024-10-31 09:45:01
 */

import { _decorator, log } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { EventMgr } from '../../mgr/EventMgr';
import { proto } from 'client_protocol';
import { Net } from '../../net/Net';
import { ShowTips, UIMgr } from '../../mgr/UIMgr';
import { ViewName } from '../../define/ViewDefine';
import { SettingsManager } from '../role/SettingsManager';
import { AssociationData } from './AssociationData';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
import { LangMgr } from '../../mgr/LangMgr';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { GuildPermission, RANKING_TYPE } from '../../../Common/script/EnumTypeMgr';
import { OpenFunctionMgr } from '../../../Common/component/OpenFunctionMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationControl')
export class AssociationControl extends AbsControl {
    private static _instance: AssociationControl = null;
    public isRegister: boolean = false
    public static get ins() {
        if (null == this._instance) {
            this._instance = new AssociationControl();
        }
        return this._instance;
    }
    register(): void {
        /* 一键申请公会 */
        EventMgr.onMsg(proto.Ptl.ApplyJoinGuildOneClickRsp, this.on_s2c_ApplyJoinGuildOneClickRsp, this);
        /* 监听申请加入公会信息 */
        EventMgr.onMsg(proto.Ptl.ApplyJoinGuildRsp, this.on_s2c_ApplyJoinGuildRsp, this);
        /* 监听踢出公会 */
        EventMgr.onMsg(proto.Ptl.KickGuildMemberRsp, this.on_s2c_KickGuildMemberRsp, this);
        /* 监听设置公会名字和旗帜 */
        EventMgr.onMsg(proto.Ptl.SetGuildNameAndFlagRsp, this.on_s2c_SetGuildNameAndFlagRsp, this);
        /* 监听设置公会公告 */
        EventMgr.onMsg(proto.Ptl.SetGuildNoticeRsp, this.on_s2c_SetGuildNoticeRsp, this);
        /* 监听设置公会成员职位 */
        EventMgr.onMsg(proto.Ptl.SetGuildMemberJobRsp, this.on_s2c_SetGuildMemberJobRsp, this);
        /* 监听公会签到 */
        EventMgr.onMsg(proto.Ptl.SignGuildRsp, this.on_s2c_SignGuildRsp, this);
        /* 监听购买公会礼包 */
        EventMgr.onMsg(proto.Ptl.BuyGuildGiftRsp, this.on_s2c_BuyGuildGiftRsp, this);
        /* 监听升级公会技能 */
        EventMgr.onMsg(proto.Ptl.UpgradeGuildSkillRsp, this.on_s2c_UpgradeGuildSkillRsp, this);
        /* 监听重置公会技能 */
        EventMgr.onMsg(proto.Ptl.ResetGuildSkillRsp, this.on_s2c_ResetGuildSkillRsp, this);
        /* 监听设置公会加入是否需要审核 */
        EventMgr.onMsg(proto.Ptl.SetGuildNeedCheckRsp, this.on_s2c_SetGuildNeedCheckRsp, this);
        /* 获取公会boss排行榜 */
        EventMgr.onMsg(proto.Ptl.GetGuildBossRankRsp, this.on_s2c_GetGuildBossRankRsp, this);
        /* 快速扫荡 */
        EventMgr.onMsg(proto.Ptl.QuickFinGuildBossRsp, this.on_s2c_QuickFinGuildBossRsp, this);
        this.isRegister = true;
    }
    /* 弹劾会长 */
    reqImpeachGuildLeader() {
        let msg = new proto.Msg_ImpeachGuildLeaderReq();
        Net.Send(proto.Ptl.ImpeachGuildLeaderReq, msg);
    }
    /* 发送创建公会 */
    reqCreateGuild(name: string, flagId: number, notice: string = "", needCheck: boolean) {
        let msg = new proto.Msg_CreateGuildReq();
        msg.name = name;
        msg.flagId = flagId;
        msg.notice = notice;
        msg.needCheck = needCheck;
        Net.Send(proto.Ptl.CreateGuildReq, msg);
        SettingsManager.ins.setSetting("needCheckAssociation", msg.needCheck);
    }
    /* 获取可以申请的公会 */
    reqGetRecommendGuilds() {
        let msg = new proto.Msg_GetRecommendGuildsReq();
        Net.Send(proto.Ptl.GetRecommendGuildsReq, msg);
    }
    /* 申请加入公会 */
    reqJoinGuild(guildId: string) {
        const curTime = RoleData.ins.getServerUtcTime();
        if (AssociationData.ins.getAssocitionInfo() && curTime < AssociationData.ins.getAssocitionInfo().notAllowJoinTime) {
            const str = LangMgr.getCombineString("Tips_association_4", [tab.getData().GetKeyValue_ConfigTable().GuildJoinCd / 60]);
            ShowTips(str);
            return;
        }
        let msg = new proto.Msg_ApplyJoinGuildReq();
        msg.guildId = guildId;
        Net.Send(proto.Ptl.ApplyJoinGuildReq, msg);
    }
    /* 接收申请加入公会的信息 */
    on_s2c_ApplyJoinGuildRsp(msg: proto.Msg_ApplyJoinGuildRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        AssociationData.ins.addGuildRequests(msg.guildId);
        log("cocos 申请加入公会成功")
    }
    /* 退出公会 */
    reqQuitGuild() {
        let msg = new proto.Msg_QuitGuildReq();
        Net.Send(proto.Ptl.QuitGuildReq, msg);
    }
    /* 获取申请公会信息 */
    reqGetJoinGuildRequests(condition: number) {
        const isGuildOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association);
        if (!isGuildOpen) {
            return;
        }
        const memberData = AssociationData.ins.getMemberData(RoleData.ins.id);
        if (memberData) {
            const guildPositionTab = tab.getData().GuildPositionTableByPosition.getValue(memberData.job);
            // 拥有公会申请权限
            if (guildPositionTab.Proces) {
                let msg = new proto.Msg_GetJoinGuildRequestsReq();
                // 0玩家所属公会的申请 1玩家自己的申请
                msg.condition = condition
                Net.Send(proto.Ptl.GetJoinGuildRequestsReq, msg);
            }
        }
    }
    /* 踢出公会 */
    reqKickGuildMember(roleId: string) {
        if (AssociationData.ins.checkRolePromission(GuildPermission.KickOutMember)) {
            let msg = new proto.Msg_KickGuildMemberReq();
            msg.roleId = roleId;
            Net.Send(proto.Ptl.KickGuildMemberReq, msg);
        }
    }
    /* 接收踢出公会信息 */
    on_s2c_KickGuildMemberRsp(msg: proto.Msg_KickGuildMemberRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 踢出公会成功")
        AssociationData.ins.refreshMemberInfo(msg.roleId, null, true);
    }
    /* 设置公会名字和旗帜 */
    reqSetGuildNameAndFlag(name: string, flagId: number) {
        if (AssociationData.ins.checkRolePromission(GuildPermission.GuildSetting)) {
            let msg = new proto.Msg_SetGuildNameAndFlagReq();
            msg.name = name;
            msg.flagId = flagId;
            Net.Send(proto.Ptl.SetGuildNameAndFlagReq, msg);
        }
    }
    /* 接收设置公会公告和旗帜信息 */
    on_s2c_SetGuildNameAndFlagRsp(msg: proto.Msg_SetGuildNameAndFlagRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 设置公会公告和旗帜成功");
        AssociationData.ins.refreshGuildInfo(msg.name, msg.flagId);
    }
    /* 设置公会公告 */
    reqSetGuildNotice(notice: string) {
        if (AssociationData.ins.checkRolePromission(GuildPermission.setNotice)) {
            let msg = new proto.Msg_SetGuildNoticeReq();
            msg.notice = notice;
            Net.Send(proto.Ptl.SetGuildNoticeReq, msg);
        }
    }
    /* 接收设置公会公告 */
    on_s2c_SetGuildNoticeRsp(msg: proto.Msg_SetGuildNoticeRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 设置公会公告成功")
        AssociationData.ins.refreshGuildNotice(msg.notice);
    }
    /* 设置公会成员职位 */
    reqSetGuildMemberJob(roleId: string, job: number) {
        // 判断当前职务是不是已经是最大数量 如果是最大数量不发送
        if (AssociationData.ins.checkRolePromission(GuildPermission.SetJob)) {
            const count = AssociationData.ins.getJobInMemberCount(job);
            const maxCount = tab.getData().GuildPositionTableByPosition.getValue(job).MaxCount;
            if (count >= maxCount && job !== tab.GuildPosition.GuildPosition_President) {
                ShowTips(LangMgr.getLab("ui_association_67"))
                return;
            }
            let msg = new proto.Msg_SetGuildMemberJobReq();
            msg.roleId = roleId;
            msg.job = job;
            Net.Send(proto.Ptl.SetGuildMemberJobReq, msg);
        }
    }
    /* 接收设置设置公会成员职位信息 */
    on_s2c_SetGuildMemberJobRsp(msg: proto.Msg_SetGuildMemberJobRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 设置公会成员职位成功")
        AssociationData.ins.refreshMemberInfo(msg.roleId, msg.job);
    }
    /* 公会签到 */
    reqSignGuild(times: number) {
        let msg = new proto.Msg_SignGuildReq();
        msg.signTimes = times;
        Net.Send(proto.Ptl.SignGuildReq, msg);
    }
    /* 接收公会签到信息 */
    on_s2c_SignGuildRsp(msg: proto.Msg_SignGuildRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 展示奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        AssociationData.ins.getAssocitionInfo().signTimes += msg.signTimes;
        RedMgr.refreshEvent(RedDotType.Guild_Skill);
        RedMgr.refreshEvent(RedDotType.Guild_Sign);
        log("cocos 公会签到成功")
    }
    /* 公会砍价 */
    reqBargainGuild(giftId: number) {
        let msg = new proto.Msg_BargainGuildReq();
        msg.giftId = giftId;
        Net.Send(proto.Ptl.BargainGuildReq, msg);
    }
    /* 购买公会礼包 */
    reqBuyGuildGift(giftId: number) {
        let msg = new proto.Msg_BuyGuildGiftReq();
        msg.giftId = giftId;
        Net.Send(proto.Ptl.BuyGuildGiftReq, msg);
    }
    /* 接收购买公会礼包 */
    on_s2c_BuyGuildGiftRsp(msg: proto.Msg_BuyGuildGiftRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        // 展示奖励
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        log("cocos 购买公会礼包成功")
    }
    /* 升级公会技能 */
    reqUpgradeGuildSkill(heroClass: tab.HeroClass) {
        let msg = new proto.Msg_UpgradeGuildSkillReq();
        msg.heroClass = heroClass;
        Net.Send(proto.Ptl.UpgradeGuildSkillReq, msg);
    }
    /* 接收升级公会技能 */
    on_s2c_UpgradeGuildSkillRsp(msg: proto.Msg_UpgradeGuildSkillRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        log("cocos 升级公会技能成功")
        AssociationData.ins.addSkill(msg.heroClass);
        RedMgr.refreshEvent(RedDotType.Guild_Skill);
    }
    /* 重置公会技能 */
    reqResetGuildSkill(heroClass: tab.HeroClass) {
        let msg = new proto.Msg_ResetGuildSkillReq();
        msg.heroClass = heroClass;
        Net.Send(proto.Ptl.ResetGuildSkillReq, msg);
    }
    /* 接收重置公会技能 */
    on_s2c_ResetGuildSkillRsp(msg: proto.Msg_ResetGuildSkillRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards })
        AssociationData.ins.resetSkill(msg.heroClass);
        log("cocos 重置公会技能成功")
    }
    /* 设置公会加入是否需要审核 */
    reqSetGuildNeedCheck(needCheck: boolean) {
        let msg = new proto.Msg_SetGuildNeedCheckReq();
        msg.needCheck = needCheck;
        Net.Send(proto.Ptl.SetGuildNeedCheckReq, msg);
    }
    /* 设置公会加入是否需要审核 */
    on_s2c_SetGuildNeedCheckRsp(msg: proto.Msg_SetGuildNeedCheckRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        SettingsManager.ins.setSetting("needCheckAssociation", msg.needCheck);
        log("cocos  设置公会加入是否需要审核=", msg.needCheck)
    }
    /* 设置接受还是拒绝申请 */
    reqProcessGuildApply(roleId: string, agree: boolean) {
        if (AssociationData.ins.checkRolePromission(GuildPermission.ProcessApply)) {
            let msg = new proto.Msg_ProcessGuildApplyReq();
            msg.agree = agree;
            msg.applyReqId = roleId;
            Net.Send(proto.Ptl.ProcessGuildApplyReq, msg);
        }
    }
    /* 获得公会排行榜 */
    reqGetGuildRank(rankId: number) {
        let msg = new proto.Msg_GetGuildRankReq();
        msg.rankId = rankId;
        Net.Send(proto.Ptl.GetGuildRankReq, msg);
    }
    /* 获得公会排行榜当前公会信息 */
    reqGetGuildRankInfo(rankId: number, guildId: string) {
        let msg = new proto.Msg_GetGuildRankInfoReq();
        msg.rankId = rankId;
        msg.guildId = guildId;
        Net.Send(proto.Ptl.GetGuildRankInfoReq, msg);
    }
    /* 获取公会详情 */
    reqGetGuildDesc( guildId: string){
        let msg = new proto.Msg_QueryGuildInfoReq ();
        msg.guildId = guildId;
        Net.Send(proto.Ptl.QueryGuildInfoReq , msg);
    }
    reqGetGuildBossRank() {
        let msg = new proto.Msg_GetGuildBossRankReq();
        msg.roleRankId = 16;
        msg.guildRankId = 15;
        Net.Send(proto.Ptl.GetGuildBossRankReq, msg);
    }
    /* 获得公会boss排行榜返回 */
    on_s2c_GetGuildBossRankRsp(msg: proto.Msg_GetGuildBossRankRsp) {
        AssociationData.ins.initRank(msg);
    }
    /* 公会扫荡 */
    reqQuickSweepBoss() {
        let msg = new proto.Msg_QuickFinGuildBossReq();
        Net.Send(proto.Ptl.QuickFinGuildBossReq, msg);
    }
    on_s2c_QuickFinGuildBossRsp(msg: proto.Msg_QuickFinGuildBossRsp) {
        if (!msg.error || msg.error.code == proto.CommonErrorCode.Succeed) {
            UIMgr.ins.show({ viewName: ViewName.CongratulationPop, data: msg.rewards})
        }
    }
    // 一键申请公会
    on_s2c_ApplyJoinGuildOneClickRsp(msg: proto.Msg_ApplyJoinGuildOneClickRsp) {
        if (msg.error && msg.error.code != proto.CommonErrorCode.Succeed) return;
        for (let i = 0; i < msg.guildIds.length; i++) {
            AssociationData.ins.addGuildRequests(msg.guildIds[i]);
        }
    }
    // 一键拒绝申请请求
    reqRejectAllGuildApply() {
        let msg = new proto.Msg_RejectAllGuildApplyReq();
        Net.Send(proto.Ptl.RejectAllGuildApplyReq, msg);
    }
}


