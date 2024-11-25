/*
 * @Date: 2024-08-28 11:16:05
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-01 11:42:41
 */
interface memberCount {
    memberCount: number,
    totalCount: number,
}
import { _decorator } from 'cc';
import { AbsControl } from '../../../framework/base/IAbs';
import { proto } from 'client_protocol';
import { AssociationControl } from './AssociationControl';
import { tab } from '../../../Table/table_gen';
import { RoleData } from '../role/RoleData';
import { TaskData } from '../task/TaskData';
import { ItemData } from '../item/ItemData';
import { getTimeGuildTXT } from '../../utils/GameUtil';
import { LangMgr } from '../../mgr/LangMgr';
import { ShowTips } from '../../mgr/UIMgr';
import { RedMgr } from '../../mgr/RedMgr';
import { RedDotType } from '../../red/RedDotType';
import { GuildPermission } from '../../../Common/script/EnumTypeMgr';
const { ccclass, property } = _decorator;

@ccclass('AssociationDataMgr')
export class AssociationData extends AbsControl {
    private static _instance: AssociationData;
    private AssocitionData: proto.GuildInfo = null;
    public curSelectFlagId: number = -1;
    private memberMap: Map<string, proto.IGuildMember> = new Map();
    private guildAttrMap: Map<tab.HeroClass, Map<tab.AttrType, number>> = new Map()//帮会属性
    private guildSkillClass: Map<tab.HeroClass, number> = new Map()//帮会属性
    private guildSkillClassTab: Map<tab.HeroClass, tab.GuildAttrTable[]> = new Map();
    private bossGuildRank: proto.IGuildBossRank[] = []//公会排行榜
    private bossRoleRank: proto.ISimpleRank[] = []//公会个人排行榜
    private memberArr: proto.IGuildMember[] = [];
    private memberGuildArr: proto.IGuildMember[] = [];
    private bossRoleMap: Map<string, proto.ISimpleRank> = new Map();
    private bossRoleRankMap: Map<string, number> = new Map();

    private bossGuildMap: Map<string, proto.IGuildBossRank> = new Map();
    private bossGuildRankMap: Map<string, number> = new Map();

    private simple: proto.SimpleGuild = null;
    private taskTabs: tab.TaskTable[] = [];
    private materialMap: Map<number, number> = new Map();
    private _GuildBossMsg: proto.Msg_GuildBossDataPush;
    private roleRankSelfRanking: number = -1;
    private guildRankSelfRanking: number = -1;
    public static get ins() {
        if (null == this._instance) {
            this._instance = new AssociationData();
        }
        return this._instance;
    }
    /* 初始化公会信息 */
    initAssociationData(msg: proto.Msg_GetGuildInfoRsp) {
        if (!AssociationControl.ins.isRegister) {
            AssociationControl.ins.init();
        }
        this.memberMap.clear();
        this.simple = null;
        this.AssocitionData = msg.guild as proto.GuildInfo;
        // 初始化公会基本信息
        if (this.AssocitionData.simple) {
            this.simple = this.AssocitionData.simple as proto.SimpleGuild
        }
        // 初始化公会成员信心并排序
        if (this.memberMap.size === 0) {
            this.setMemberMap();
            this.sortMemberData();
            this.sortMembersByLeader();
        }
        // 初始化公会任务
        this.initTask();
        // 初始化公会属性
        this.initSkill();
    }
    initTask() {
        this.taskTabs = [];
        for (let i = 0; i < tab.getData().TaskTable.length; i++) {
            const _tab = tab.getData().TaskTable[i];
            if (_tab.TaskType === tab.TaskType.TaskType_GuildDailyTask) {
                this.taskTabs.push(_tab);
            }
        }
        if (this.AssocitionData.tasks.length > 0) {
            TaskData.ins.initGuildTasks();
        }
        RedMgr.refreshEvent(RedDotType.Guild_Task);
    }
    initSkill() {
        this.guildSkillClassTab.clear();
        this.guildSkillClass.clear();
        for (let i = 0; i < tab.getData().GuildAttrTable.length; i++) {
            const _tab = tab.getData().GuildAttrTable[i];
            const heroClass = _tab.HeroClass;
            if (this.guildSkillClassTab.has(heroClass)) {
                this.guildSkillClassTab.get(heroClass).push(_tab)
            } else {
                this.guildSkillClassTab.set(heroClass, [_tab]);
            }
        }
        for (let k = tab.HeroClass.HeroClass_Assassin; k <= tab.HeroClass.HeroClass_Warrior; k++) {
            this.guildSkillClass.set(k, 0);
        }
        if (this.AssocitionData.skillLevelMap) {
            const maps = this.AssocitionData.skillLevelMap;
            for (let key in maps) {
                this.guildSkillClass.set(Number(key), maps[key]);
            }
        }
        this.setGuildAttr();
    }
    initRank(msg: proto.Msg_GetGuildBossRankRsp) {
        this.bossRoleRank = msg.roleRank;
        this.bossGuildRank =[]
        for(let j= 0;j<msg.guildRank.length;j++){
            const guildRankData = msg.guildRank[j];
            if(guildRankData&&guildRankData.guild&&guildRankData.guild.members.length>0){
                this.bossGuildRank.push(guildRankData);
            }
        }
        this.roleRankSelfRanking = msg.roleRankSelfRanking;
        this.guildRankSelfRanking = msg.guildRankSelfRanking;
        this.bossRoleMap.clear();
        this.bossRoleRankMap.clear();
        this.bossGuildMap.clear();
        this.bossGuildRankMap.clear();
        for (let i = 0; i < this.bossRoleRank.length; i++) {
            if(this.bossRoleRank[i].simple){
                this.bossRoleMap.set(this.bossRoleRank[i].simple.id, this.bossRoleRank[i])
                this.bossRoleRankMap.set(this.bossRoleRank[i].simple.id, i + 1)
            }
        }
        for (let k = 0; k < this.bossGuildRank.length; k++) {
            if(this.bossGuildRank[k].guild.simple){
                this.bossGuildMap.set(this.bossGuildRank[k].guild.simple.id, this.bossGuildRank[k])
                this.bossGuildRankMap.set(this.bossGuildRank[k].guild.simple.id, k + 1)
            }
        }
    }
    // 获取roleRankSelfRanking
    getRoleRankSelfRanking() {
        return this.roleRankSelfRanking+1;
    }
    // guildRankSelfRanking
    getGuildRankSelfRanking() {
        return this.guildRankSelfRanking;
    }
    // 获取公会排行
    getGuildRank() {
        return this.bossGuildRank;
    }
    // 获取个人排行数据
    getRoleRank() {
        return this.bossRoleRank;
    }
    refreshSelfRoleRankScore(score:number){
        const slefRoleRank: proto.ISimpleRank = this.bossRoleMap.get(RoleData.ins.id);
        slefRoleRank.score += score;
    }
    // 获取个人的排行榜数据
    getSelfRoleRankInfo(): proto.ISimpleRank {
        const selfRoleRank: proto.ISimpleRank = this.bossRoleMap.get(RoleData.ins.id);
        return selfRoleRank;
    }
    // 获取个人的排行榜排名
    getSelfRoleRankCount(): number {
        return this.bossRoleRankMap.get(RoleData.ins.id) ?? 0;
    }
    // 获取自己公会排行榜数据
    getSelfGuildRankInfo(): proto.IGuildBossRank {
        const selfGuildRank: proto.IGuildBossRank = this.bossGuildMap.get(AssociationData.ins.getAssocitionSimpleInfo().id);
        return selfGuildRank;
    }
    // 获取自己的公会排名
    getSelfGuildRankCount(): number {
        return this.bossGuildRankMap.get(AssociationData.ins.getAssocitionSimpleInfo().id) ?? 0;
    }
    setMemberMap() {
        this.memberMap.clear();
        if (this.AssocitionData.members.length > 0) {
            for (let i = 0; i < this.AssocitionData.members.length; i++) {
                const member = this.AssocitionData.members[i];
                this.memberMap.set(member.roleId, member);
            }
        }
    }
    /* 获取当前是否有公会 */
    getInGuild() {
        if (this.simple) {
            return true
        }
        return false;
    }
    /* 获取公会基本信息 */
    getAssocitionSimpleInfo() {
        if (this.simple) {
            return this.simple
        }
        return null
    }
    /* 获取公会总信息 */
    getAssocitionInfo() {
        if (this.AssocitionData) {
            return this.AssocitionData
        }
        return null
    }
    /* 获取当前的公会的人数跟总人数 */
    getGuildMembersCount(): memberCount {
        const lvData = tab.getData().GuildLevelTableById.getValue(this.simple.level)
        const maxPersonCount = lvData.MaxCount;
        return {
            memberCount: this.memberArr.length,
            totalCount: maxPersonCount
        }
    }
    /* 获取当前职位的公会人数 */
    getJobInMemberCount(job: number): number {
        let count = 0;
        for (let i = 0; i < this.memberArr.length; i++) {
            const member: proto.IGuildMember = this.memberArr[i];
            if (member.job === job) {
                count++;
            }
        }
        return count;
    }
    /* 刷新公会数据 */
    refreshGuildData(msg: proto.Msg_GetGuildInfoRsp) {
        this.AssocitionData = msg.guild as proto.GuildInfo;
    }
    // 设置公会公告
    refreshGuildNotice(notice: string) {
        if (this.simple) {
            this.simple.notice = notice
        }
    }
    // 设置公会公告
    refreshGuildInfo(name: string, flagid: number) {
        if (this.simple) {
            this.simple.name = name;
            this.simple.flagId = flagid;
        }
    }
    /* 刷新公会成员信息更改职位、删除成员 */
    refreshMemberInfo(roleId: string, job: number, isDelete?: boolean) {
        if (isDelete) {
            this.memberMap.delete(roleId);
            this.sortMemberData();
            this.sortMembersByLeader();
            return;
        }
        const memberData = this.memberMap.get(roleId);
        if (job) {
            memberData.job = job;
            if (job === tab.GuildPosition.GuildPosition_President) {
                const leaderData = this.memberMap.get(this.simple.leaderId);
                leaderData.job = tab.GuildPosition.GuildPosition_Member;//会长的数据变成普通成员

                this.simple.leaderId = roleId;
                this.simple.leaderName = memberData.name;
            }
        }
    }
    /* 对成员数组并排序 */
    sortMemberData() {
        if (this.simple) {
            this.memberArr = [];

            this.memberMap.forEach((val, key) => {
                this.memberArr.push(val);
            })
            // 将数据排序规则 自己--在线--职位
            this.memberArr.sort((guildMember1, guildMember2) => {
                if (guildMember1.roleId === RoleData.ins.id && guildMember2.roleId !== RoleData.ins.id) return -1;
                if (guildMember1.roleId !== RoleData.ins.id && guildMember2.roleId === RoleData.ins.id) return 1;
                if (this.getMemberOffLineTime(guildMember1) <= 0 && this.getMemberOffLineTime(guildMember2) > 0) return -1;
                if (this.getMemberOffLineTime(guildMember2) > 0 && this.getMemberOffLineTime(guildMember2) <= 0) return 1;
                return guildMember1.job - guildMember2.job;
            })

            // if (RoleData.ins.id !== this.simple.leaderId) {
            //     this.memberArr.push(this.memberMap.get(RoleData.ins.id));
            //     this.memberArr.push(this.memberMap.get(this.simple.leaderId));
            // } else {
            //     this.memberArr.push(this.memberMap.get(RoleData.ins.id));
            // }
            // this.memberMap.forEach((val, key) => {
            //     if (key !== RoleData.ins.id && key !== this.simple.leaderId) {
            //         this.memberArr.push(val);
            //     }
            // })
        }
    }

    // 对members里面的会长必须排第一个
    sortMembersByLeader() {
        if (this.simple) {
            this.memberGuildArr = [];
            this.memberGuildArr.push(this.memberMap.get(this.simple.leaderId));
            this.memberMap.forEach((val, key) => {
                if (key !== this.simple.leaderId) {
                    this.memberGuildArr.push(val);
                }
            })
        }
    }
    getGuildMemberArr() {
        return this.memberGuildArr;
    }
    getMemberArr() {
        return this.memberArr;
    }
    /* 获取鸡多多礼包 */
    getBargainGift(Button:string): proto.GuildGift {
        for (let i = 0; i < this.AssocitionData.gifts.length; i++) {
            const gift = this.AssocitionData.gifts[i] as proto.GuildGift;
            const tabData: tab.GuildGiftTable = tab.getData().GuildGiftTableById.getValue(gift.tabId);
            const serverTime = RoleData.ins.getServerUtcTime();
            if (tabData.Button === Button&&gift.expireTime - serverTime>0) 
            {
                return gift
            }
        }
        return null;
    }
    /* 获取所有的任务tab */
    getAllTasksTab() {
        return this.taskTabs;
    }
    addSkill(heroClass: tab.HeroClass) {
        this.guildSkillClass.set(heroClass, this.guildSkillClass.get(heroClass) + 1);
        this.setGuildAttr();
    }
    /* 重置技能 */
    resetSkill(heroClass: tab.HeroClass) {
        this.guildSkillClass.set(heroClass, 0);
        this.setGuildAttr();
    }
    /* 获取职业技能等级 */
    getSkillLvByClass(heroClass: tab.HeroClass) {
        return this.guildSkillClass.get(heroClass) ?? 0;
    }
    /* 获取帮会所有属性 */
    public setGuildAttr() {
        this.guildAttrMap.clear();
        this.guildSkillClass.forEach((value, key) => {
            const tabs = this.guildSkillClassTab.get(key);
            if (!this.guildAttrMap.has(key)) {
                this.guildAttrMap.set(key, new Map())
            }
            for (let i = 0; i < value; i++) {
                const _tab = tabs[i];
                const _map = this.guildAttrMap.get(key);
                for (let k = 0; k < _tab.AttrTypes.length; k++) {
                    const type = _tab.AttrTypes[k];
                    const val = _tab.AttrValue[k];
                    if (_map.has(type)) {
                        _map.set(type, _map.get(type) + val)
                    } else {
                        _map.set(type, val)
                    }
                }
            }
        })
    }
    public getGuildAttr(heroClass: tab.HeroClass) {
        return this.guildAttrMap.get(heroClass);
    }
    public getSkillTabsByClass(heroClass: tab.HeroClass) {
        return this.guildSkillClassTab.get(heroClass);
    }
    public getCurSkillTabByClass(heroClass: tab.HeroClass) {
        const tabs = this.guildSkillClassTab.get(heroClass);
        const maxLv = tabs[tabs.length - 1].Level;
        const lv = this.getSkillLvByClass(heroClass) + 1 > maxLv ? maxLv : this.getSkillLvByClass(heroClass) + 1;
        for (let i = 0; i < tabs.length; i++) {
            if (tabs[i].Level === lv) {
                return tabs[i];
            }
        }
    }
    // 判断当前是否材料够升级技能
    public isMaterialEnough(heroClass: tab.HeroClass) {
        const tabData = this.getCurSkillTabByClass(heroClass);
        for (let i = 0; i < tabData.CostItemIds.length; i++) {
            const costId = tabData.CostItemIds[i];
            const costCount = tabData.CostItemCount[i];
            const costHaveCount = ItemData.ins.getCount(costId);
            if (costHaveCount < costCount) {
                return { itemid: costId, isEnough: false };
            }
        }
        return { itemid: -1, isEnough: true };
    }
    public isSkillLevelMax(heroClass: tab.HeroClass) {
        const tabs = this.guildSkillClassTab.get(heroClass);
        const maxLv = tabs[tabs.length - 1].Level;
        const lv = this.getSkillLvByClass(heroClass) + 1
        if (lv > maxLv) {
            return true
        }
        return false
    }
    // 获取公会日志
    getGuildLogs() {
        return this.AssocitionData.logs;
    }
    // 增加申请的公会的请求
    addGuildRequests(guildId: string) {
        const request: proto.IJoinGuildRequest = new proto.JoinGuildRequest();
        request.id = guildId;
        RoleData.ins.guildRequests.push(request);
    }
    subGuildRequests(guildId: string) {
        let index = -1;
        for (let i = 0; i < RoleData.ins.guildRequests.length; i++) {
            if (RoleData.ins.guildRequests[i].id === guildId) {
                index = i;
            }
        }
        if (index >= 0) {
            RoleData.ins.guildRequests.splice(index, 1);
        }
    }
    // 判断当前公会是否是申请过的公会
    getGuildIsRequest(guildId: string): boolean {
        if (this.simple) {
            return true
        } else {
            for (let i = 0; i < RoleData.ins.guildRequests.length; i++) {
                if (RoleData.ins.guildRequests[i].id === guildId) {
                    return true;
                }
            }
        }
        return false;
    }
    // 获取成员信息
    getMemberData(roleId: string): proto.IGuildMember {
        const isInGuild = this.getInGuild();
        return this.memberMap.get(roleId);
    }
    // 获取离线时间
    getMemberOffLineTime(memberData: proto.IGuildMember): number {
        const serverTime = RoleData.ins.getServerUtcTime();
        const loginTime = memberData.lastLoginTime;
        const logoutTime = memberData.lastLogoutTime;
        if (logoutTime >= loginTime) {
            return serverTime - logoutTime;
        } else {
            return -1;
        }
    }
    // 重置技能所获得的资源
    getResetSkillMaterial(heroClass: tab.HeroClass) {
        this.materialMap.clear();
        const lv = this.getSkillLvByClass(heroClass);
        const tabs = this.getSkillTabsByClass(heroClass);
        for (let i = 0; i < tabs.length; i++) {
            const _tab = tabs[i];
            if (_tab.Level <= lv) {
                for (let k = 0; k < _tab.CostItemIds.length; k++) {
                    const id = _tab.CostItemIds[k];
                    const count = _tab.CostItemCount[k]
                    if (this.materialMap.has(id)) {
                        this.materialMap.set(id, this.materialMap.get(id) + count)
                    } else {
                        this.materialMap.set(id, count)
                    }
                }
            }
        }
        return this.materialMap;
    }
    // 是否拼多多砍了一刀
    getIsCanBargain(Button:string): boolean {
        const giftData = this.getBargainGift(Button);
        if (giftData && giftData.bargainRecords) {
            if (giftData.bargainRecords.length === 0) {
                return true;
            } else {
                for (let i = 0; i < giftData.bargainRecords.length; i++) {
                    const record: proto.IBargainRecord = giftData.bargainRecords[i];
                    if (record.roleId === RoleData.ins.id) {
                        return false;
                    }
                }
                return true;
            }
        }
        return false;
    }
    // 拼多多是否已经是最低价
    getIsMinPrice(Button:string): boolean {
        const giftData = this.getBargainGift(Button);
        if (giftData && giftData.bargainRecords && giftData.bargainRecords.length > 0) {
            const giftTab = tab.getData().GuildGiftTableById.getValue(giftData.tabId);
            let totalPrice = giftTab.DiamondPrice;
            const minPrice = giftTab.MinPrice;
            for (let i = 0; i < giftData.bargainRecords.length; i++) {
                const record: proto.IBargainRecord = giftData.bargainRecords[i];
                totalPrice -= record.bargainNum;
            }
            if (totalPrice <= minPrice) {
                return true;
            }
        }
        return false
    }
    checkFunctionIsOpen(openFunc: tab.GuildOFName) {
        if (openFunc === tab.GuildOFName.GuildOFName_None) {
            return true;
        }
        const guildOfTab = tab.getData().GuildOpenFunctionTableByName.getValue(openFunc);
        const guildLevel = this.simple.level;
        return guildLevel >= guildOfTab.Level;
    }
    showFunctionTips(openFunc: tab.GuildOFName) {
        let tips = this.getFunctionTips(openFunc)
        ShowTips(tips);
    }
    getFunctionTips(openFunc: tab.GuildOFName) {
        const guildOfTab = tab.getData().GuildOpenFunctionTableByName.getValue(openFunc);
        let tips = ""
        tips = LangMgr.getCombineString(guildOfTab.WordKey, [guildOfTab.Level]);
        return tips;
    }
    get GuildBossMsg() {
        return this._GuildBossMsg;
    }
    set GuildBossMsg(msg: proto.Msg_GuildBossDataPush) {
        this._GuildBossMsg = msg;
    }
    // 获取鸡多多最后的时间
    // getBargainEndTime(Button:string) {
    //     const giftData: proto.GuildGift = this.getBargainGift(Button);
    //     if (giftData) {
    //         const serverTime = RoleData.ins.getServerUtcTime();
    //         return giftData.expireTime - serverTime;
    //     } else {
    //         return 0;
    //     }
    // }
    // 检查当前玩家是否有权限
    checkRolePromission(permission: GuildPermission) {
        const memberData = this.memberMap.get(RoleData.ins.id);
        if(!memberData){
            return false;
        }
        const positionTab = tab.getData().GuildPositionTableByPosition.getValue(memberData.job);
        if(positionTab){
            switch (permission) {
                case GuildPermission.GuildSetting:
                    return positionTab.Setting;
                case GuildPermission.KickOutMember:
                    return positionTab.KickOut;
                case GuildPermission.ProcessApply:
                    return positionTab.Proces;
                case GuildPermission.SetJob:
                    return positionTab.Appoint;
                case GuildPermission.setNotice:
                    return positionTab.WriteNotification;
                default:
                    return false
            }
        }else{
            return false
        }
    }
}


