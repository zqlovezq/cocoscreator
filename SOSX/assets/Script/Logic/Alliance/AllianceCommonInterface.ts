/**
 * 联盟通用接口文件
 */

import { proto } from "../../Protocol/client_protocol";
import { tab } from "../../Table/table_gen";
import AllianceSupportChat, { DonorInfo } from "../Chat/ChatDetailModel/AllianceSupportChat";
import ManagerLocalChatMsg from "../Chat/ManagerLocalChatMsg";
import { isValidObj, kNegativeOneNumber, kNoneString, kOneNumber, kTenNumber, kTwoNumber, kZeroNumber } from "../Common/CommonInterface";
import RedDotManager, { RedDotType } from "../Common/ReddotManager";
import Role from "../Common/Role";
import { getCutDownTimesString } from "../Common/SeasonRankCommonFunc";
import { getServerUtcTime, LoadResAsync } from "../Utils/GameUtils";
import ManagerAllianceInnerMsg from "./ManagerAllianceInnerMsg";


const kSixtySeconds = 60;
const kDecember = 12;
const kEndOfDecemberMonth = 31;

/**
 * 联盟顶部标签类型
 */
export enum AllianTopToggleType{
    ToggleType_Alliance = 0,
    ToggleType_CreateOrSearchAlliance = 1,
    ToggleType_Friend = 2,
};

/**
 * 联盟支援帮助信息接口
 */
export interface ISupportHelpMsg{
    bExpand: boolean;  /* 是否展开 */
    applicantID: string; /* 请求人ID */
    bSelfModel: boolean; /* 是否是自身支援模块 */
}

/**
 * 联盟支援推送全局消息数据类型接口
 */
export interface IPushGlobalSupportInfo{
    donorName: string;
    cardID: number;
    curGainSupportCnt: number;
}

/**
 * Description: 检测字符串是否合法
 */
export function checkStringIsValid(str: string){
    if( str === null || 
        str === '' || 
        str === undefined || 
        str.length === kZeroNumber){
            //throw new Error("图片路径不存在，请检查配置！");
            cc.log("字符串不合法！");
            return false;
        }
        return true;
}

/**
 * Description: 排序联盟 
 * @param allianceList    联盟列表
 */
export function sortAlliance(allianceList: proto.IAllianceSimpleInfo[]){
    if(allianceList.length <= kOneNumber){
        return;
    }

    allianceList.sort((data1: proto.IAllianceSimpleInfo, data2: proto.IAllianceSimpleInfo): number=>{
        return data2.score - data1.score;
    });
}

/**
 * Description: 排序联盟成员
 * @param memberList    联盟成员列表
 */
export function sortAllianceMembers(memberList: proto.IAllianceMemberInfo[]){
    if(memberList.length <= kOneNumber){
        return;
    }

    memberList.sort((data1: proto.IAllianceMemberInfo, data2: proto.IAllianceMemberInfo): number=>{
        return data2.rankScore - data1.rankScore;
    });
}

/**
 * Description: 获取联盟时间格式字符
 * @param times 
 */
export function getAllianceTimeFormat(times: number){
    let diff       = getServerUtcTime() - times;
    return getTimeDiffString(diff);
}

export function getTimeDiffString(diffVal: number){
    let visibleStr = kNoneString;
    if(diffVal <= kSixtySeconds && kZeroNumber < diffVal){
        visibleStr = `${diffVal}${tab.Data.GetKeyValue_ConfigTable().SecondText}`;
    }else{
        visibleStr = getCutDownTimesString(diffVal, `${kZeroNumber}`);
    }
    
    return visibleStr;
}

/**
 * Description: 根据联盟职位获取文本描述
 * @param position  职位
 */
export function getAlliancePositionDes(position: number){
    let retStr = tab.Data.GetKeyValue_ConfigTable().AllianceMemberText;
    tab.AlliancePositionType.AlliancePositionType_Leader === position       && (retStr = tab.Data.GetKeyValue_ConfigTable().AllianceLeaderText);
    tab.AlliancePositionType.AlliancePositionType_DeputyLeader === position && (retStr = tab.Data.GetKeyValue_ConfigTable().AllianceDeputyLeaderText);
    tab.AlliancePositionType.AlliancePositionType_Senior === position       && (retStr = tab.Data.GetKeyValue_ConfigTable().AllianceSeniorText);
    return retStr;
}

/**
 * Description: 纠正加入联盟类型表索引是否合法
 * @param idx  加入联盟类型表索引
 */
export function correctJoinTypeIdxValid(idx: number){
    let maxJoinTypeTabLen = tab.Data.AllianceJoinConditonTable.length;
    idx < kZeroNumber && (idx = maxJoinTypeTabLen - kOneNumber);
    idx = (idx >= maxJoinTypeTabLen) ? kZeroNumber : idx;
    return idx;
}

/**
 * Description: 纠正加入联盟最小赛季积分表索引是否合法
 * @param idx  加入联最小赛季积分表索引
 */
export function correctMinScoreIdxValid(idx: number){
    let maxJoinMinScoreTabLen = tab.Data.AllianceJoinMinScoreTable.length;
    (idx < kZeroNumber) && (idx = maxJoinMinScoreTabLen - kOneNumber);
    idx = (idx >= maxJoinMinScoreTabLen) ? kZeroNumber : idx;
    return idx;
}

/**
 * Description: 清空自身联盟信息
 */
export function clearSelfAllianceInfo(){
    Role.Instance.RoleData.allianceData.allianceID         = kNoneString;
    Role.Instance.RoleData.allianceData.PostRank           = kZeroNumber;
    Role.Instance.RoleData.allianceData.applyingAllianceID = kNoneString;
    Role.Instance.RoleData.allianceData.allianceIcon       = kZeroNumber;
    Role.Instance.RoleData.allianceData.allianceName       = kNoneString;
    Role.Instance.RoleData.allianceData.allianceScore      = kZeroNumber;
    ManagerLocalChatMsg.getInstance().cleanAllianceCacheData();
    ManagerAllianceInnerMsg.getInstance().cleanCacheData();
}

/**
 * Description: 获取联盟在线成员数量
 * @param memberInfoList   联盟成员列表
 */
export function getOnlineMemberCount(memberInfoList: proto.IAllianceMemberInfo[]){
    let ret = kZeroNumber;
    for(let data of memberInfoList){
        data.isOnline && ret++;
    }
    return ret;
}

/**
 * Description: 设置角色联盟信息
 * @param allianceInfo   联盟信息
 */
export function setRoleAllianceData(allianceInfo: proto.IAllianceBaseInfo){
    Role.Instance.RoleData.allianceData.allianceID         = allianceInfo.allianceID;
    //Role.Instance.RoleData.allianceData.PostRank           = allianceInfo.;
    Role.Instance.RoleData.allianceData.applyingAllianceID = allianceInfo.allianceID;
    Role.Instance.RoleData.allianceData.allianceName       = allianceInfo.name;
}

export function setRoleAllianceData2(allianceInfo: proto.IRoleAllianceData){
    Role.Instance.RoleData.allianceData.allianceID         = allianceInfo.allianceID;
    Role.Instance.RoleData.allianceData.PostRank           = allianceInfo.PostRank;
    Role.Instance.RoleData.allianceData.applyingAllianceID = allianceInfo.allianceID;
    Role.Instance.RoleData.allianceData.allianceName       = allianceInfo.allianceName;
    Role.Instance.RoleData.allianceData.allianceScore      = allianceInfo.allianceScore;
    Role.Instance.RoleData.allianceData.allianceIcon       = allianceInfo.allianceIcon;
}

/**
 * 临时保存下联盟管理者对于申请加入人的信息
 */
export default class AllianApplyInfoData{
    private _applyerName: string;
    private _bAgree: boolean;
    
    private static _instance: AllianApplyInfoData = null;
    public static getInstance(): AllianApplyInfoData {
        if (!AllianApplyInfoData._instance){
            AllianApplyInfoData._instance = new AllianApplyInfoData();
        }
        return AllianApplyInfoData._instance;
    }

    public saveApplyerInfo(name: string, bAgree: boolean){
        this._applyerName   = name;
        this._bAgree        = bAgree;
    }

    public getApplyerName(){return this._applyerName}
    public getDeal(){return this._bAgree;}
}

/**
 * Description: 检测能否创建联盟
 */
export function checkCanCreateAlliance(){
    return Role.Instance.RoleData.gold >= tab.Data.GetKeyValue_ConfigTable().CreateAllianceCostGold;
}

/**
 * Description: 检测字符串全部为空
 */
export function checkStringIsAllSpace(str: string){
    if (str.match(/^[ ]*$/)){
        return true;
    }   

    return false;
}

/**
 * Description: 根据索引获取加入联盟最小赛季积分
 * @param idx   索引
 */
export function getJoinAllianceMinScore(idx: number){
    if(idx < kZeroNumber || idx >= tab.Data.AllianceJoinMinScoreTable.length){
        if(!cc.sys.isNative){throw new Error("加入联盟最小积分索引越界了");}
        return kZeroNumber;
    }
    return tab.Data.AllianceJoinMinScoreTable[idx].MinSeasonScore;
}

/**
 * Description: 检测联盟申请列表小红点要不要更新
 * @param applyListLen   
 */
export function checkRedDotOfApplyList(applyListLen: number){
    let bHaveAlliance = checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID); 
    let bLeader       = Role.Instance.RoleData.allianceData.PostRank < tab.AlliancePositionType.AlliancePositionType_Senior;
    bHaveAlliance && bLeader && RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceApplyInfo, applyListLen > kZeroNumber);
}

/**
 * Description: 设置联盟徽章
 * @param sprBadge   联盟徽章sprite
 * @param iconIdx    联盟徽章表索引
 */
export async function setAllianceBadge(sprBadge: cc.Sprite, iconIdx: number){
    if(!sprBadge){return;}
    
    let allianceIconData = tab.Data.AllianceIconTableByID.getValue(iconIdx);
    if(isValidObj(allianceIconData)){
        let sf = await LoadResAsync(allianceIconData.IconPath, cc.SpriteFrame);
        if(sf) {
            sprBadge.spriteFrame = sf;
        }
    }else{
        sprBadge.node.active = false;
    }
}

/**
 * Description: 包装联盟支援信息
 * @param allianceMemberList  联盟成员列表【用于查找玩家名称】
 * @param supportInfos        支援信息列表
 */
export function wrapSupportInfo(allianceMemberList: proto.IAllianceMemberInfo[], supportInfos: proto.IAllianceCardRequestInfo[]){
    if(!supportInfos){return;}
    
    for(let info of supportInfos){
        if(info.curNumber >= info.maxNumber){
            continue;
        }
        let member        = findMemberOfRoleID(allianceMemberList, info.roleID);
        let applicantName = member ? member.roleName : kNoneString;
        let supportInfo   = new AllianceSupportChat(info.roleID, 
                                                    applicantName, 
                                                    info.cardID, 
                                                    info.curNumber, 
                                                    info.maxNumber, 
                                                    info.requestTime, 
                                                    info.donateInfo);
        let msgInfo           = new proto.AllianceMsgData();
        msgInfo.msgSenderName = applicantName;
        msgInfo.content       = JSON.stringify(supportInfo);
        msgInfo.msgType       = proto.GlobalMessageType.MemberRequestSupportMsg;
        msgInfo.utcTime       = supportInfo.RequestTimestamp;
        msgInfo.senderUUID    = info.roleID;
        ManagerAllianceInnerMsg.getInstance().pushChatMsg(msgInfo);
    }
}

/**
 * Description: 查找联盟成员
 * @param allianceMemberList   联盟成员列表
 * @param dstRoleID            目标RoleID
 */
export function findMemberOfRoleID(allianceMemberList: proto.IAllianceMemberInfo[], dstRoleID: string){
    let idx = allianceMemberList.findIndex(tmpObj=>tmpObj.roleID == dstRoleID);
    if(idx != kNegativeOneNumber){
        return allianceMemberList[idx];
    }
    return null;
}

/**
 * Description: 根据卡牌ID获取可支援的次数上限
 */
export function getSupportUpperLimitCount(cardID: number){
    let cardTabData = tab.Data.ItemTableByID.getValue(cardID);
    if(!isValidObj(cardTabData)){
        if(!cc.sys.isNative){throw new Error("要支援的卡牌ID不存在");}
        return kOneNumber;
    }

    let supportTabData = tab.Data.AllianceSupportCardLimitTableBySeasonLv.getValue(Role.Instance.RoleGrade);
    if(!isValidObj(supportTabData)){
        if(!cc.sys.isNative){throw new Error("联盟支援卡牌上限表不存在这样的赛季等级");}
        return kOneNumber;
    }

    let retVal = kZeroNumber;
    cardTabData.Quality === tab.ItemQuality.ItemQuality_White  && (retVal = supportTabData.NormalCardSupportLimitCount);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Blue   && (retVal = supportTabData.UnCommonCardSupportLimitCount);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Violet && (retVal = supportTabData.EpicCardSupportLimitCount);
    return retVal;
}

/**
 * Description: 根据卡牌ID获取能请求支援上限数
 */
export function getRequestSupportUpperCount(cardID: number){
    let cardTabData = tab.Data.ItemTableByID.getValue(cardID);
    if(!isValidObj(cardTabData)){
        if(!cc.sys.isNative){throw new Error("要支援的卡牌ID不存在");}
        return kOneNumber;
    }

    let supportTabData = tab.Data.AllianceSupportCardLimitTableBySeasonLv.getValue(Role.Instance.RoleGrade);
    if(!isValidObj(supportTabData)){
        if(!cc.sys.isNative){throw new Error("联盟支援卡牌上限表不存在这样的赛季等级");}
        return kOneNumber;
    }

    let retVal = kZeroNumber;
    cardTabData.Quality === tab.ItemQuality.ItemQuality_White  && (retVal = supportTabData.NormalCardRequestCount);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Blue   && (retVal = supportTabData.UnCommonCardRequestCount);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Violet && (retVal = supportTabData.EpicCardRequestCount);
    return retVal;
}

/**
 * Description: 根据目标角色ID获取该人已经捐献的次数
 * @param dstRoleID   目标角色ID
 * @param donorList   捐献人列表
 */
export function getCanSupportCardCount(dstRoleID: string, donorList: DonorInfo[]){
    if(!donorList || donorList.length == kZeroNumber){
        return kZeroNumber;
    }
    let idx = donorList.findIndex(tmpObj=>tmpObj.roleID == dstRoleID);
    if(idx == kNegativeOneNumber){
       return kZeroNumber;
    }

    return donorList[idx].count;
}

/**
 * Description: 获得当前赛季等级支援分数上限
 */
export function getSupportScoreUpper(){
    let supportTabData = tab.Data.AllianceSupportCardLimitTableBySeasonLv.getValue(Role.Instance.RoleGrade);
    if(!isValidObj(supportTabData)){
        if(!cc.sys.isNative){throw new Error("联盟支援卡牌上限表不存在这样的赛季等级");}
        return kOneNumber;
    }

   return supportTabData.SupportScoreUpper;
}

/**
 * Description: 根据卡牌ID获取支援一次所产生的分数
 */
export function getSupportGainScore(cardID: number){
    let cardTabData = tab.Data.ItemTableByID.getValue(cardID);
    if(!isValidObj(cardTabData)){
        if(!cc.sys.isNative){throw new Error("要支援的卡牌ID不存在");}
        return kZeroNumber;
    }

    let supportTabData = tab.Data.AllianceSupportCardLimitTableBySeasonLv.getValue(Role.Instance.RoleGrade);
    if(!isValidObj(supportTabData)){
        if(!cc.sys.isNative){throw new Error("联盟支援卡牌上限表不存在这样的赛季等级");}
        return kZeroNumber;
    }

    let retVal = kZeroNumber;
    cardTabData.Quality === tab.ItemQuality.ItemQuality_White  && (retVal = supportTabData.NormalSupportGetScore);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Blue   && (retVal = supportTabData.UnCommonSupportGetScore);
    cardTabData.Quality === tab.ItemQuality.ItemQuality_Violet && (retVal = supportTabData.EpicSupportGetScore);
    return retVal;
}

/**
 * Description: 检查能否联盟支援小红点可见性
 */
export function checkRedDotOfCanSupport(){
    if(!Role.Instance.RoleData.donateData || !checkStringIsValid(Role.Instance.RoleData.allianceData.allianceID)){return;}
    let diffValue = Role.Instance.RoleData.donateData.nextCardRequestTime - getServerUtcTime();
    RedDotManager.getInstance().UpdateRedDot(RedDotType.AllianceSupport, diffValue <= kZeroNumber);
}

/**
 * Description: 获取当前utc时间与下一天零点utc时间的绝对差值
 */
export function getTheSecondDayDiffOfUTC(){
    let curUTC = getServerUtcTime();
    let date   = new Date(curUTC * 1000);
    let year   = date.getFullYear();
    let month  = date.getMonth() + kOneNumber;
    let day    = date.getDate();

    //判断闰年
    let bLeapYear = ((year % 4) == kZeroNumber && (year % 100) != kZeroNumber || (year % 400) == kZeroNumber);
    if(bLeapYear){
        if(month == kTwoNumber && 29 == day){month += kOneNumber; day = kOneNumber;}
    }else{
        if(month == kTwoNumber && 28 == day){month += kOneNumber; day = kOneNumber;}
    }

    //当年最后一个月的最后一天
    if(month == kDecember && day == kEndOfDecemberMonth){
        year += kOneNumber;
        month = kOneNumber;
        day   = kOneNumber;
    }

    let nextDayUTC = new Date(`${year}-${month}-${day + kOneNumber} 00:00:00`).getTime() / 1000;
    let diffTime   = nextDayUTC - getServerUtcTime();
    return diffTime;
}

/* 格式化聊天的时间戳 */
export function formatChatTimestamp(utcTimes: number) {
    let date   = new Date(utcTimes * 1000);
    //let month   = date.getMonth() + kOneNumber;
    //let day     = date.getDate();
    let hour    = date.getHours();
    let minute  = date.getMinutes();
    let minuteStr = minute >= kTenNumber ? `${minute}` : `0${minute}`;
    //let seconds = date.getSeconds();
    return `${hour}:${minuteStr}`;
}

/* 按消息的时间戳从小到大排序
 * @param msgList   消息列表
 */
export function sortAllianceMsgList(msgList: proto.IAllianceMsgData[]){
    if(!msgList || msgList.length < kTwoNumber){
        return;
    }

    msgList.sort((msg1: proto.IAllianceMsgData, msg2: proto.IAllianceMsgData): number=>{
        return msg1.utcTime - msg2.utcTime;
    });
}

/**
 * 主场景中默认进入页面类型
 */
export enum DefaultEnterPageType{
    ShopType      = 0, /* 商店页面 */
    HeroType      = 1, /* 卡库页面 */
    FightType     = 2, /* 战斗页面 */
    SocialType    = 3, /* 社交页面 */
    ChallengeType = 4, /* 挑战页面 */
}

export enum ChildPageType{
    NonePage = -1,  /* 无效的界面 */
    FriendPage = 0, /* 好友界面 */
}

/**
 * 用于记录进入战斗前的页面是哪个
 */
export class FightFromWhichLayer{
    public DefaultEnterPageState: DefaultEnterPageType;
    public ChildPageState: ChildPageType = ChildPageType.NonePage;

    private static _instance: FightFromWhichLayer   = null;
    public static getInstance(): FightFromWhichLayer {
        if (!FightFromWhichLayer._instance){
            FightFromWhichLayer._instance = new FightFromWhichLayer();
        }
        return FightFromWhichLayer._instance;
    }
}

/**
 * 用于在打开联盟详情时记录下自己的职位
 */
export class SaveBeforeChangePosition{
    public OldPosition: number;

    private static _instance: SaveBeforeChangePosition = null;
    public static getInstance(): SaveBeforeChangePosition {
        if (!SaveBeforeChangePosition._instance){
            SaveBeforeChangePosition._instance = new SaveBeforeChangePosition();
        }
        return SaveBeforeChangePosition._instance;
    }
}

/**
 * Description: 记录联盟详情界面当前的联盟UUID
 */
export class RecordCurrentAllianceID{
    private _alliance_uuid: string;
    private static _instance: RecordCurrentAllianceID = null;
    public static getInstance(): RecordCurrentAllianceID {
        if (!RecordCurrentAllianceID._instance){
            RecordCurrentAllianceID._instance = new RecordCurrentAllianceID();
        }
        return RecordCurrentAllianceID._instance;
    }

    public saveCurrentAllianceID(uuid: string){
        this._alliance_uuid = uuid;
    }

    public getCurrentAllianceID(){return this._alliance_uuid;}
}