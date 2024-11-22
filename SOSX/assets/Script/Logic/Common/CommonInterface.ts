/**
 *  通用的枚举类型以及接口文件
 */

import { tab } from "../../Table/table_gen";
import { proto } from "../../Protocol/client_protocol";
import Role from "./Role";
import ManagerRankingLevel from "../RankingList/ManagerRankingLevel";
import { Net } from "../../Protocol/Net";
import Waiting from "../Utils/Waiting";
import RankScoreRewardClass from "./SeasonRankCommonFunc";
import SdkManager from "../Utils/SdkManager";
import LoginData from "../Login/LoginData";
import { getFormatString, showPopLayerV2, ShowTips, ShowTipsOfCustomString } from "../Utils/GameUtils";
import ManagerNewEmotionRedDot from "../EmotionStore/ManagerNewEmotionRedDot";
import ManagerNewBattleMap from "../BattleMapStore/ManagerNewBattleMap";
import { LOCAL_MESSAGE } from "../../Protocol/LocalMessage";
import ConfirmAVDCostItems from "./ConfirmAVDCostItems";
import ConfirmAVDBuy from "./ConfirmAVDBuy";
import { Native2JsInterface } from "./Native2JsInterface";
import { CaiHongData } from "../../sdk/rainbow/CaiHongData";
import BattleLayer from "../Main/BattleLayer";

export const kDefaultCardLv = 1;
export const kTwoNumber = 2;
export const kThreeNumber = 3;
export const kFourNumber = 4;
export const kFiveNumber = 5;
export const kSixNumber = 6;
export const kSevenNumber = 7;
export const kZeroNumber = 0;
export const kOneNumber = 1;
export const kNegativeOneNumber = -1;
export const kTenNumber = 10;
export const kHundredNumber = 100;
export const k255 = 255;
export const kThousandNumber = 1000;

export const kSingleLineString = "-";
export const kDoubleLineString = "--";
export const kPlusSignString = "+";
export const kNoneString = "";
export const kPercentString = "%";

export const ANDROID_PACKAGE_NAME = "org.cocos2dx.javascript/AppActivity";

//当前卡牌所处的状态

export enum CardNodeState {
    CARD_NODE_STATE_NONE = -1,
    CARD_NODE_STATE_IN_TEAM = 0,
    CARD_NODE_STATE_OWN,
    CARD_NODE_STATE_UNOWN,
    CARD_NODE_STATE_READY_CHANGE,
    CARD_NODE_STATE_SUPPORT,
    CARD_NODE_STATE_LOCKED
};

//卡牌详情中多个显示类型
export enum CardDisplayType {
    CARD_DISPLAY_TYPE_ATTR = 0,    //属性类型
    CARD_DISPLAY_TYPE_LEVELUP,     //升级类型
    CARD_DISPLAY_TYPE_STAR_UPLV,   //升星类型
    CARD_DISPLAY_TYPE_SYNTHESIS,   //合成类型
};

//卡牌属性类型
export enum CardAttrType {
    ATTACK = 1,    //攻击
    ATTACK_SPEED, //攻击速度
    HP,      //血量
    RANGE,//攻击范围
    SKILL,
    BUFFER
};
export enum CARDFROM {
    SHOP = 1,//商店
    DECKOWEN,//背包拥有的
    DECKUNKONW,//背包未拥有的
    TEAM,//队伍
    RECOMMEND//推荐
}
export enum SpecialEffect{
    INSTANTKILL = 40011
}
// 卡牌强化升星或者合成所约束的数据接口
export interface CardStrengthOrSynthesisObject {
    displayState: CardDisplayType;
    curLv: number;
}

export interface IFightSelfCardInfo {
    cardID: number;
    cardLv: number;
}

/**
 * Description: 获得卡牌排序标题
 * @param sortType 
 */
export function getCardSortTypeTxt(sortType: number): string {
    let tabData = tab.Data.CardSortTypeTableBySortType.getValue(sortType);
    if (isValidObj(tabData)) {
        return tabData.TypeText;
    }
    return kNoneString;
}

/**
 * Description: 卡牌具体排序规则
 * 品质递减 等级递减 
 */
function sortToTypeDetail(sortType: number,
    id1: number, id2: number,
    cardLevel1: number, cardLevel2: number,
    quality1: number, quality2: number) {
    switch (sortType) {
        case tab.SortType.SortType_CardLevelIncrease:
            {
                if (cardLevel1 == cardLevel2) {
                    if (quality1 == quality2)
                        return id1 - id2;

                    return quality2 - quality1
                }
                return cardLevel1 - cardLevel2;
            }

        case tab.SortType.SortType_CardLevelDecrease:
            {
                if (cardLevel1 == cardLevel2) {
                    if (quality1 == quality2)
                        return id1 - id2;

                    return quality2 - quality1
                }
                return cardLevel2 - cardLevel1;
            }

        case tab.SortType.SortType_CardQualityIncrease:
            {
                if (quality1 == quality2) {
                    if (cardLevel1 == cardLevel2)
                        return id1 - id2;

                    return cardLevel2 - cardLevel1
                }
                return quality1 - quality2;
            }

        case tab.SortType.SortType_CardQualityDecrease:
            {
                if (quality1 == quality2) {
                    if (cardLevel1 == cardLevel2)
                        return id1 - id2;

                    return cardLevel2 - cardLevel1
                }
                return quality2 - quality1;
            }

        case tab.SortType.SortType_AthleticsLevelIncrease:
            {
                let cardTab1: tab.CardTable = tab.Data.CardTableByID.getValue(id1);
                let cardTab2: tab.CardTable = tab.Data.CardTableByID.getValue(id2);
                if (cardTab1.UnlockRankLevel == cardTab2.UnlockRankLevel) {
                    return id1 - id2;
                }

                return cardTab1.UnlockRankLevel - cardTab2.UnlockRankLevel;
            }
            break;

        case tab.SortType.SortType_AthleticsLevelDecrease:
            {
                let cardTab1: tab.CardTable = tab.Data.CardTableByID.getValue(id1);
                let cardTab2: tab.CardTable = tab.Data.CardTableByID.getValue(id2);
                if (cardTab1.UnlockRankLevel == cardTab2.UnlockRankLevel) {
                    return id1 - id2;
                }

                return cardTab2.UnlockRankLevel - cardTab1.UnlockRankLevel;
            }
            break;

        default:
            return kNegativeOneNumber;
    }
}

/**
 * Description: 卡牌排序uuid
 * @param uuidVec  卡牌UUID数组
 * @param sortType 卡牌排序类型
 */
export function sortCardUUIDVec(uuidVec: Array<string>, sortType: number) {
    if (uuidVec.length <= kOneNumber) {
        return;
    }

    uuidVec.sort((uuid1: string, uuid2: string): number => {
        let card1: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(uuid1);
        let card2: proto.IItemData = Role.Instance.RoleItemAtrr.getItemByUUID(uuid2);

        let staticCard1: tab.ItemTable = tab.Data.ItemTableByID.getValue(card1.staticId);
        let staticCard2: tab.ItemTable = tab.Data.ItemTableByID.getValue(card2.staticId);

        if (!isValidObj(card1) || !isValidObj(card2)) {
            return kNegativeOneNumber;
        }

        let cardUpLvData1 = tab.Data.CardUpLevelTableByQuality.getValue(staticCard1.Quality);
        let cardUpLvData2 = tab.Data.CardUpLevelTableByQuality.getValue(staticCard2.Quality);

        let cardLv1 = card1.level + (isValidObj(cardUpLvData1) ? cardUpLvData1.ExtraAddLv : kZeroNumber);
        let cardLv2 = card2.level + (isValidObj(cardUpLvData2) ? cardUpLvData2.ExtraAddLv : kZeroNumber);

        return sortToTypeDetail(sortType,
            card1.staticId, card2.staticId,
            cardLv1, cardLv2,
            staticCard1.Quality, staticCard2.Quality);
    });
}

/**
 
 * Description: 魔王卡牌排序

 */
export function sortDevilCard(staticIdVec: Array<number>, sortType: number) {
    if (staticIdVec.length <= kOneNumber) {
        return;
    }

    staticIdVec.sort((id1: number, id2: number): number => {
        let staticCard1 = tab.Data.ItemTableByID.getValue(id1);
        let staticCard2 = tab.Data.ItemTableByID.getValue(id2);
        let cardUUIDData1 = Role.Instance.RoleItemAtrr.getItemByStaticID(id1);
        let cardUUIDData2 = Role.Instance.RoleItemAtrr.getItemByStaticID(id1);
        let cardLevel1 = isValidObj(cardUUIDData1) ? cardUUIDData1.level : kOneNumber;
        let cardLevel2 = isValidObj(cardUUIDData2) ? cardUUIDData2.level : kOneNumber;

        if (!isValidObj(staticCard1) || !isValidObj(staticCard2)) {
            return kNegativeOneNumber;
        }

        let cardUpLvData1 = tab.Data.CardUpLevelTableByQuality.getValue(staticCard1.Quality);
        let cardUpLvData2 = tab.Data.CardUpLevelTableByQuality.getValue(staticCard2.Quality);

        cardLevel1 += (isValidObj(cardUpLvData1) ? cardUpLvData1.ExtraAddLv : kZeroNumber);
        cardLevel2 += (isValidObj(cardUpLvData2) ? cardUpLvData2.ExtraAddLv : kZeroNumber);

        return sortToTypeDetail(sortType, id1, id2, cardLevel1, cardLevel2, staticCard1.Quality, staticCard2.Quality);
    });
}

/**
 * Description: 卡牌排序static
 * @param uuidVec  卡牌staticID数组
 * @param sortType 卡牌排序类型【默认是按品质】
 */
export function sortCardStaticIDVec(staticIdVec: Array<number>, sortType: number = tab.SortType.SortType_CardQualityIncrease) {
    if (staticIdVec.length <= kOneNumber) {
        return;
    }

    staticIdVec.sort((id1: number, id2: number): number => {
        let item1: tab.ItemTable = tab.Data.ItemTableByID.getValue(id1);
        let item2: tab.ItemTable = tab.Data.ItemTableByID.getValue(id2);
        let card1: tab.CardTable = tab.Data.CardTableByID.getValue(id1);
        let card2: tab.CardTable = tab.Data.CardTableByID.getValue(id2);

        if (!isValidObj(item1) || !isValidObj(item2)) {
            return kZeroNumber;
        }

        switch (sortType) {
            case tab.SortType.SortType_CardQualityDecrease:
                {
                    if (item1.Quality == item2.Quality) {
                        if (!isValidObj(card1) || !isValidObj(card2)) {
                            return kZeroNumber;
                        }
                        return card1.UnlockRankLevel - card2.UnlockRankLevel;
                    }

                    return item2.Quality - item1.Quality;
                }

            case tab.SortType.SortType_CardQualityIncrease:
                {
                    if (item1.Quality == item2.Quality) {
                        if (!isValidObj(card1) || !isValidObj(card2)) {
                            return kZeroNumber;
                        }
                        return card1.UnlockRankLevel - card2.UnlockRankLevel;
                    }

                    return item1.Quality - item2.Quality;
                }
        }

        return kZeroNumber;
    });
}

/**
 * 返回卡牌属性值约束接口
 */
export interface CardAttrValueInterface {
    curAttrVal: number;
    minCurAttrVal: number;
    nextAttrVal: number;
    minNextAttrVal: number;
    bChange: boolean;
    attrName:string
};

export enum ShopItemType {
    ShopItemType_Diamond,
    ShopItemType_GoldCoin,
    ShopItemType_PullCard,
};

export interface JumpShopTypeInterface {
    shopItem: ShopItemType;
    bPlayEffect: boolean;
};

/**
 
 * Description: 判断是不是中文
 * @param val 
 */
export function isChineseString(val: any) {
    if (typeof (val) == 'number') {
        return false;
    }

    if (typeof (val) == 'string') {
        if (/.*[\u4e00-\u9fa5]+.*$/.test(val)) {
            return true;
        }

        return false;
    }

    return false;
}

export function isChEngNumber(str: string) {
    if (/^[a-zA-Z0-9\u4E00-\u9FA5]+$/.test(str)) {
        return true;
    } else {
        return false;
    }
}

/**
 * Description: 判断对象是否存在
 * @param obj
 */
export function isValidObj(obj: any): boolean {
    if ("string" == typeof (obj)) {
        return kZeroNumber != obj.length;
    }
    return null !== obj && undefined !== obj;
}

/**
 * Description: 判断是不是整数
 * @param val    数值
 */
export function isInteger(val: number) {
    return Number.isInteger(val);
}

/**
 
 * Description: 获取卡牌显示的等级数值
 * @param curLv         卡牌等级数值
 * @param cardStaticId  卡牌静态id
 */
export function getCardVisibleLevel(curLv: number, cardStaticId: number): number {
    let cardTabData: tab.ItemTable = tab.Data.ItemTableByID.getValue(cardStaticId);
    let cardUpLevelTab: tab.CardUpLevelTable = isValidObj(cardTabData) ? tab.Data.CardUpLevelTableByQuality.getValue(cardTabData.Quality) : null;
    curLv = isValidObj(cardUpLevelTab) ? (curLv + cardUpLevelTab.ExtraAddLv) : curLv;
    return curLv;
}

/**
 * Description: 排序对战排行榜数据
 * @param dataList 
 * @returns 
 */
export function sortPvpRankingListData(dataList: proto.IRankingOfRoleData[]) {
    if (!dataList || dataList.length < kTwoNumber) {
        return;
    }

    dataList.sort((data1: proto.IRankingOfRoleData, data2: proto.IRankingOfRoleData): number => {
        if (data1.seasonScore == data2.seasonScore) {
            if (data1.timestamp == data2.timestamp) {
                return data1.roleData.roleUUID <= data2.roleData.roleUUID ? kNegativeOneNumber : kZeroNumber;
            }
            return data1.timestamp - data2.timestamp;
        }
        return data2.seasonScore - data1.seasonScore;
    });

    /*if(dataList.length > tab.Data.GetKeyValue_ConfigTable().RankListMaxCount){
        dataList.shift();
    }*/
}

/**
 * Description: 排序合作模式排行榜数据
 * @param dataList 
 */
export function sortCooperationRankingListData(dataList: proto.ICooperationBothRankingData[]) {
    if (!dataList || dataList.length < kTwoNumber) {
        return;
    }

    dataList.sort((data1: proto.ICooperationBothRankingData, data2: proto.ICooperationBothRankingData): number => {
        if (data1.maxRoundCount == data2.maxRoundCount) {
            return data1.timestamp - data2.timestamp;
        }
        return data2.maxRoundCount - data1.maxRoundCount;
    });
}

/**
 * Description: 排序联盟排行榜数据
 * @param dataList 
 * @returns 
 */
export function sortAllianceRankingListData(dataList: proto.IRankingOfAllianceData[]) {
    if (!dataList || dataList.length < kTwoNumber) {
        return;
    }

    dataList.sort((data1: proto.IRankingOfAllianceData, data2: proto.IRankingOfAllianceData): number => {
        return data2.rankData.score - data1.rankData.score;
    });
}

/**
 * Description: 检测自己的排行榜数据是不是大于等于表中最后一名，是就替换掉最后一名
 * @param selfRankingData 
 * @param rankingList 
 * @returns 
 */
export function checkInsertSelfRankingData(selfRankingData: proto.IRankingOfRoleData, rankingList: proto.IRankingOfRoleData[]) {
    /*if(!rankingList || rankingList.length <= kZeroNumber){
        return kNegativeOneNumber;
    }
    
    let idx = rankingList.findIndex(tmpObj=>tmpObj.roleUUID === selfRankingData.roleUUID);
    if(idx != kNegativeOneNumber){
        return idx;
    }
    
    let rankingListLen = rankingList.length;
    let endData        = rankingList[rankingListLen - kOneNumber];
    if(selfRankingData.seasonScore >= endData.seasonScore){
        rankingList[rankingListLen - kOneNumber] = selfRankingData;
    }

    sortRoleRankingListData(rankingList);
    return kNegativeOneNumber;*/
}

/**
 * Description: 确认个人排行榜等级
 * @param score 
 * @param rankingLv 
 * @param bHistory 
 * @returns 
 */
export function confirmRoleRankingLevel(score: number, rankingLv: number, bHistory: boolean) {
    let retVal = ManagerRankingLevel.getInstance().getRankingLvToScore(score, true, bHistory);
    if (retVal == kNegativeOneNumber) {
        return rankingLv;
    }

    return rankingLv;
}

/**
 * Description: 排序好友数据
 * @param friendInfoList 
 * @returns 
 */
export function sortFriendInfo(friendInfoList: proto.IFriendInfoData[]) {
    if (!friendInfoList || friendInfoList.length < kTwoNumber) {
        return;
    }

    friendInfoList.sort((data1: proto.IFriendInfoData, data2: proto.IFriendInfoData): number => {
        let sortVal1 = Number(data1.bOnline);
        let sortVal2 = Number(data2.bOnline);
        if (sortVal1 != sortVal2) {
            return sortVal2 - sortVal1;
        }

        return data2.baseInfo.seasonScore - data1.baseInfo.seasonScore;
    });
}

/**
 * 好友弹出面板接口约束
 */
export interface IFriendPanelData {
    friendID: string;
    name: string;
    selfNode: cc.Node;
    bOnline: boolean;
};

/**
 * 
 */
export interface INotifyClosedEnemyCardInfo {
    cardID: number;
    idx: number;
}

/**
 * Description: 添加好友通用接口
 * @param roleID 
 * @param roleName 
 */
export function addFriend(roleID: string, roleName: string) {
    let msg = new proto.Msg_AddFriendReq();
    msg.roleID = roleID;
    msg.roleName = roleName;
    Net.Send(proto.Ptl.AddFriendReq, msg);
    //ShowTips("AddFriendSuccess");
}

/**
 * 宝箱抽卡概率数据接口
 */
export interface IBoxRateData {
    cardNameList: string[];
    boxRate: number;
    cardRate: number;
}

/**
 * 宝箱抽卡概率数据组
 */
export interface IBoxRateGroup {
    legendList: IBoxRateData;
    epicList: IBoxRateData;
    rareList: IBoxRateData;
    normalList: IBoxRateData;
}

/**
 * 拖动卡牌切换卡的数据接口
 */
export interface ITransCardInfo {
    uuid: string;
    bDevilCard: boolean;
}

/**
 * 每日特惠礼包数据结构约束接口
 */
export interface IEveryDayDiscountsGiftBagData {
    overTimes: number;
    bBought: boolean;
    rechargeID: number;
    rewardList: proto.IRewardSimpleInfo[];
    discountsNum: number;

}

/**
 * Description: 上报广告类型协议接口
 * @param id 
 */
export function sendAdvertPos(type: number, state: number) {
    if (CC_PREVIEW) { return; }
    let param = new proto.Msg_ReportedAdvertTypeReq();
    param.AdvertType = type;
    param.viewStatus = state;
    Net.Send(proto.Ptl.ReportedAdvertTypeReq, param);
}

/**
 * Description: 发送预支付消息
 * @param rechargeID 
 */
export function sendPayStartMsg(rechargeID: number) {
    if (!tab.Data.RechargeTableByID.getValue(rechargeID)) {
        cc.error(`cannot find rechargeID: ${rechargeID}`)
        return;
    }
    let param = new proto.Msg_PayStartReq();
    param.rechargeID = rechargeID;
    param.type = cc.sys.isNative ? proto.GamePublishChannelType.TencentYouLiangHui : proto.GamePublishChannelType._37ChannelType;
    Net.Send(proto.Ptl.PayStartReq, param);

    Waiting.WaitPtl(proto.Ptl.PayStartRsp)
}

export function checkSeasonLevel(limitLv: number) {
    let rankLv = RankScoreRewardClass.getInstance().getRankLevelToScore(Role.Instance.RoleData.rankData.historyMaxScore);
    return rankLv >= limitLv
}

/* 检测功能是否开启 */
export function checkFunctionIsOpen(functionName: tab.OpenFunctionName) {
    let tabData = tab.Data.OpenFunctionLimitTableByFunctionName.getValue(functionName);
    if (isValidObj(tabData)) {
        switch (tabData.LimitType) {
            case tab.OpenFunctionType.OpenFunctionType_SeasonLevel:
                return checkSeasonLevel(tabData.OpenCondition);

            case tab.OpenFunctionType.OpenFunctionType_SeasonScore:
                let score = Role.Instance.RoleData.rankData.historyMaxScore;
                let RoleCup = Role.Instance.RoleCup;
                return (score >= tabData.OpenCondition) || (RoleCup >= tabData.OpenCondition); //Role.Instance.RoleData.rankData.historyMaxScore >= tabData.OpenCondition;
        }
    }
    return false;
}

/* 检测功能是否开启并且附带提示字符串 */
export function CheckFunctionIsOpenWithTip(functionName: tab.OpenFunctionName) {
    let tip1 = tab.Data.GetKeyValue_ConfigTable().OpenFunctionTip1;
    let tip2 = tab.Data.GetKeyValue_ConfigTable().OpenFunctionTip2;
    let tip3 = tab.Data.GetKeyValue_ConfigTable().OpenFunctionTip3;
    let tip4 = tab.Data.GetKeyValue_ConfigTable().OpenFunctionTip4;
    let retTip = "";
    let tabData = tab.Data.OpenFunctionLimitTableByFunctionName.getValue(functionName);
    if (isValidObj(tabData)) {
        switch (tabData.LimitType) {
            case tab.OpenFunctionType.OpenFunctionType_SeasonLevel:
                retTip = `${tip1}${tip2}${tabData.OpenCondition}${tip4}`;
                return { bArrive: checkSeasonLevel(tabData.OpenCondition), tip: retTip };

            case tab.OpenFunctionType.OpenFunctionType_SeasonScore:
                retTip = `${tip1}${tip3}${tabData.OpenCondition}${tip4}`;
                return { bArrive: Role.Instance.RoleData.rankData.historyMaxScore >= tabData.OpenCondition, tip: retTip };
        }
    }
    return { bArrive: true, tip: "" };
}

/*  */
export function getFunctionOpenStringByType(functionName: tab.OpenFunctionName) {
    let tabData = tab.Data.OpenFunctionLimitTableByFunctionName.getValue(functionName);
    if (isValidObj(tabData)) {
        switch (tabData.LimitType) {
            case tab.OpenFunctionType.OpenFunctionType_SeasonLevel:
                return getFormatString(tab.Data.TipsTableByKey.getValue("SeasonLVToTarget").Value, tabData.OpenCondition)

            case tab.OpenFunctionType.OpenFunctionType_SeasonScore:
                return getFormatString(tab.Data.TipsTableByKey.getValue("SeasonScoreToTarget").Value, tabData.OpenCondition)
        }
    }
    return "";
}

/**
 * Description: 看广告调用接口
 * @param showCallback 
 * @param closedCallback 
 */
export function WatchAdvert(_showCallback: (error: Error) => void, _closedCallback: (bFinish: boolean) => void,adType:tab.AdvertPosType) {
    let showCallback = (error: Error)=>{
        if (error){
            CaiHongData.advertise_click_fail(adType.toString(),error.message)
        }
        _showCallback && _showCallback(error)
    }

    let closedCallback = (bFinish:boolean)=>{
        CaiHongData.advertise_click_success(adType.toString(),bFinish?1:2)
        if(_closedCallback){
            _closedCallback(bFinish);
            if(bFinish){
                console.log("cocos~~~~广告观看完毕!!!!");
                BattleLayer.openWeekBox = false;
                let msg = new proto.Msg_WeeklyAdBoxInfoReq();
                Net.Send(proto.Ptl.WeeklyAdBoxInfoReq, msg);
            }
        }
    }



    let previewcall = () => {
        if (showCallback) {
            showCallback(undefined);
        }

        if (closedCallback) {
            closedCallback(true);
        }
    }

    Net.unlistenProtocol(proto.Ptl.CostSomeThingToGetAvdRewardRsp)

    /* 花费物品领取广告奖励 */
    Net.listenProtocol(proto.Ptl.CostSomeThingToGetAvdRewardRsp, async (buffer, ptl) => {
        let msg = proto.Msg_CostSomeThingToGetAvdRewardRsp.decode(buffer)
        cc.log("CostSomeThingToGetAvdRewardRsp (花费物品领取广告奖励) : msg " + JSON.stringify(msg));
        if (msg != null) {
            if (msg.result == proto.Msg_CostSomeThingToGetAvdRewardRsp.ErrorCode.Succeed) {
                closedCallback(true)
            } else {
                ShowTipsOfCustomString("错误码:" + msg.result)
            }
        }
    }, this);

    //具体看广告的回调处理
    let watchCall: any = null;
    let errorCB = () => {
        //使用金钱购买广告奖励
        showPopLayerV2("prefab/ConfirmAVDBuy", ConfirmAVDBuy).then((layer: ConfirmAVDBuy) => {
            if (layer) {
                layer.setOKCallback(() => {
                    let param = new proto.Msg_CostSomeThingToGetAvdRewardReq();
                    param.ntype = proto.BuyAVDType.BuyAVDGold;
                    Net.Send(proto.Ptl.CostSomeThingToGetAvdRewardReq, param);
                });
            }
        });
    };

    if (cc.sys.platform == cc.sys.WECHAT_GAME) {
        watchCall = () => {
            SdkManager.Instance.ShowAd(Role.Instance.RoleData.id,
                Role.Instance.RoleData.name,
                Role.Instance.RoleData.level,
                LoginData.Instance.loginGroup,
                LoginData.Instance.loginName,
                Role.Instance.RoleData.createRoleUTC,
                err => {
                    if (err) {
                        //提示没有广告//ShowTips("NoAd")
                        //使用金钱购买广告奖励
                        errorCB && errorCB();
                    }
                    showCallback && showCallback(err);
                },
                closedCallback);
        }
    } else {
        if (cc.sys.isNative) {
            if (cc.sys.os == cc.sys.OS_ANDROID) {
                watchCall = () => {
                    Native2JsInterface.getInstance().saveAdvertCBEvent(showCallback, closedCallback, errorCB);
                    jsb.reflection.callStaticMethod(ANDROID_PACKAGE_NAME, "WatchAD", "(V)V");
                }
            } else if (cc.sys.os == cc.sys.OS_IOS) {

            }
        }
    }

    //先使用广告劵
    let id = tab.Data.GetKeyValue_ConfigTable().AdvertTicketItemID
    let item = Role.Instance.RoleItemAtrr.getItemByStaticID(id)
    if (item && item.count > 0) {
        showPopLayerV2("prefab/ConfirmAVDCostItems", ConfirmAVDCostItems).then((layer: ConfirmAVDCostItems) => {
            if (layer) {
                layer.setCancleCallback(() => {
                    if (CC_PREVIEW) {
                        previewcall()
                        return;
                    }
                    watchCall()
                })  //观看广告
                layer.setOKCallback(() => {
                    let param = new proto.Msg_CostSomeThingToGetAvdRewardReq()
                    param.ntype = proto.BuyAVDType.BuyAVDItem
                    Net.Send(proto.Ptl.CostSomeThingToGetAvdRewardReq, param)
                })   //使用劵
            }
        })
        return
    }

    if (CC_PREVIEW || true) { //版本分支-直接发奖励
        previewcall()
        return;
    }
    watchCall()
}

/**
 * Description: 检测充值接口是否开启
 */
export function checkRechargeInterfaceIsOpen() {
    let bRet: boolean = true;
    cc.sys.OS_IOS == cc.sys.os && (bRet = SdkManager.Instance.IsShowPay());
    return bRet;
}

/**
 * Description: 检测是否可以看广告
 * @param adType    广告类型
 * @param watchCount 当日已看的广告次数
 * @returns 
 */
export function checkCanWatchAdvert(adType: tab.AdvertPosType, watchCount: number) {
    let advertTab = tab.Data.AdvertPosTableByAdvertPos.getValue(adType);
    if (isValidObj(advertTab)) {
        if (advertTab.EveryDayAdvertCount == kNegativeOneNumber) {
            return true;
        }
        return advertTab.EveryDayAdvertCount > watchCount;
    }
    return true;
}

/**
 * Description: 检测奖励物品是不是表情或者战场地图
 * @param rewardID 
 * @param rewardType 
 */
export function checkRewardIsEmotionOrBattleMap(rewardID: number, rewardType: tab.RewardType) {
    switch (rewardType) {
        case tab.RewardType.RewardType_Emotion:
            let findIdx = Role.Instance.RoleData.emotions.findIndex(tmpObj => tmpObj == rewardID);
            if (findIdx == kNegativeOneNumber) {
                Role.Instance.RoleData.emotions.push(rewardID);
                ManagerNewEmotionRedDot.getInstance().setNewEmotion(rewardID);
                Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_RefreshEmotionStore);
            }
            break;

        case tab.RewardType.RewardType_BattleMap:
            ManagerNewBattleMap.getInstance().checkIsNewMap(rewardID);
            ManagerNewBattleMap.getInstance().refreshNewBattleMapInfo();
            break;
    }
}

/**
 * Description: 分享事件点上报
 * @param desc 
 */
export function SharePointEventReported(type: number, desc: string) {
    if (CC_PREVIEW) {
        return;
    }

    let param = new proto.Msg_SharePointEventReported();
    param.shareType = type;
    param.shareDesc = desc;
    Net.Send(proto.Ptl.SharePointEventReported, param);
}

/**
 * Description: 根据品质设置道具名称颜色
 * @param lblName 
 * @param cardID 
 */
export function SetItemNameColor(lblName: cc.Label, cardID: number) {
    if (!lblName) {
        return;
    }

    let cardTab = tab.Data.ItemTableByID.getValue(cardID);
    if (isValidObj(cardTab)) {
        let qualityTab = tab.Data.QualityTableByQuality.getValue(cardTab.Quality);
        if (!isValidObj(qualityTab)) {
            return;
        }

        lblName.node.color = new cc.Color().fromHEX(qualityTab.ColorRGB);
    }
}

/**
 * Description: 检测货币是否足够
 * @param holdCount   当前持有的货币数量
 * @param bGoldCoin   是否是金币
 * @param lblCoin     货币Label控件
 */
export function CheckCoinEnough(holdCount: number, bGoldCoin: boolean, lblCoin: cc.Label) {
    if (!lblCoin) {
        return;
    }

    let bEnough = bGoldCoin ? (Role.Instance.RoleData.gold >= holdCount) : (Role.Instance.RoleData.diamond >= holdCount);
    !bEnough && (lblCoin.node.color = cc.Color.RED);
}

/**
 * Description: 保存战斗场内自身卡牌信息
 */
export function savePvpCardInfoState(bOpen: boolean) {
    let key = "pvp_card_self_info_key" + Role.Instance.RoleData.id;
    cc.sys.localStorage.setItem(key, bOpen.toString());
}

/**
 * Description: 加载战斗场内自身卡牌信息
*/
export function loadPvpCardInfoState() {
    let key = "pvp_card_self_info_key" + Role.Instance.RoleData.id;
    let localData = cc.sys.localStorage.getItem(key, true);
    if (!isValidObj(localData)) {
        return true;
    }
    return (localData === "true") ? true : false;
}

/**
 * Description: 初始化对象中未定义的字段
 */
export function initUndefinedVarOfObj(objArr: any[], key: string, val: any) {
    let arrLen = objArr ? objArr.length : kZeroNumber;
    for (let idx = kZeroNumber; idx < arrLen; idx++) {
        if (!objArr[idx][key]) {
            objArr[idx][key] = val;
        }
    }
}