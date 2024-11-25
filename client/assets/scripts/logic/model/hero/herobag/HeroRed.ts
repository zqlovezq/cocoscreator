/*
 * @Date: 2024-05-16 10:40:15
 * @计算英雄红点逻辑
 * @LastEditors: wzq
 * @LastEditTime: 2024-11-20 13:53:37
 */

import { proto } from "client_protocol";
import { OpenFunctionMgr } from "../../../../Common/component/OpenFunctionMgr";
import { JIANGHU_TYPE } from "../../../../Common/script/EnumTypeMgr";
import { tab } from "../../../../Table/table_gen";
import { Role } from "../../../fight/base/obj/role/role/Role";
import { RedMgr } from "../../../mgr/RedMgr";
import { RedDotType } from "../../../red/RedDotType";
import { AdMgr } from "../../AdMgr";
import { AssociationData } from "../../association/AssociationData";
import { EquipData } from "../../equip/EquipData";
import { EquipInfo } from "../../equip/EquipInfo";
import { FengyunRankData } from "../../fengyunRanking/FengyunRankData";
import { BattleMainDataControl } from "../../home/battle/BattleMainDataControl";
import { ItemData } from "../../item/ItemData";
import { GameplayViewDataMgr } from "../../jianghu/GameplayViewDataMgr";
import { PayData } from "../../pay/PayData";
import { RoleData } from "../../role/RoleData";
import { HeroData } from "../HeroData";
import { HeroTeamControl } from "../HeroTeamControl";
import { HeroDataControl } from "./HeroDataControl";
import { SettingRedManager } from "../../role/SettingRedManager";
import { SignInGiftData } from "../../activity/signGift/SignInGiftData";
import { ActivityData } from "../../activity/ActivityData";
import { BattlePassDataMgr } from "../../activity/battlePass/BattlePassDataMgr";
import { GameUtil } from "../../../utils/GameUtil";
import { FincaFightData } from "../../fincaFight/FincaFightData";
import { HeroInfo } from "../HeroInfo";
import { ChannelMgr } from "../../../../channel/ChannelMgr";
export class HeroRed {
    private initHeroRed: boolean = false;
    private static instance: HeroRed = null;

    public static get ins() {
        if (this.instance == null) {
            this.instance = new HeroRed();
        }
        return this.instance;
    }
    init() {
        this.initHeroRed = true;
        RedMgr.ins.registerCalculateFb(RedDotType.HeroResolve, this.red_one_click_Resolve, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroAutoAscend, this.red_one_click_up_star, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroupLevel, this.red_one_hero_level_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroupStar, this.red_one_hero_star_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroResonanceLevel, this.red_one_hero_resonance_level, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroresonanceStar, this.red_one_hero_resonance_star, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroPainting, this.red_painting_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroDrug, this.red_drug_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroGene, this.red_Gene_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroGacha, this.red_Gacha_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.GachaAds, this.red_ads_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.TenGacha, this.red_ten_gacha, this);
        RedMgr.ins.registerCalculateFb(RedDotType.TenBookGacha, this.red_ten_book_gacha, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroRecommend, this.red_hero_recommend_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroBook, this.red_hero_book_up, this);
        RedMgr.ins.registerCalculateFb(RedDotType.GoldBuy, this.red_GoldBuy, this);
        RedMgr.ins.registerCalculateFb(RedDotType.ChallengeDailyFreeTimes, this.red_ChallengeDailyFreeTimes, this);
        RedMgr.ins.registerCalculateFb(RedDotType.ChallengeDailyAward, this.red_ChallengeDailyAward, this);
        RedMgr.ins.registerCalculateFb(RedDotType.ChapterAward, this.red_chapterAward, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Hand_book, this.red_Hand_book, this);
        RedMgr.ins.registerCalculateFb(RedDotType.First_Recharge, this.red_first_recharge, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Seven_Gift_Pack, this.red_seven_gift_pack, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Wear_Jade, this.red_wear_jade, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Wear_Equip, this.red_wear_equip, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Equip_Strengthen, this.red_equip_strengthen, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Feng_Yun_Rank, this.red_feng_yun_rank, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Head_Icon_Red, this.red_head_icon, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Guild_Skill, this.red_guild_skill, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Guild_Apply, this.red_guild_apply, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Guild_Sign, this.red_guild_sign, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Guild_Activity, this.red_guild_activity, this);
        RedMgr.ins.registerCalculateFb(RedDotType.SignGiftRed, this.red_sign_gift, this);

        RedMgr.ins.registerCalculateFb(RedDotType.Combine_Pass, this.red_combine_pass, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Combine_Grow, this.red_combine_grow, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Combine_Shop, this.red_combine_shop, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Combine_Recharge, this.red_combine_charge, this);
        RedMgr.ins.registerCalculateFb(RedDotType.HeroReplace, this.red_hero_replace, this);
        RedMgr.ins.registerCalculateFb(RedDotType.Free_Fight_Token, this.red_free_fight_token, this);
        RedMgr.ins.registerCalculateFb(RedDotType.PVP_Fight_Team, this.red_pvp_fight_team, this);

        this.refreshHeroRedData();
    }
    /* 刷新英雄红点数据 */
    refreshHeroRedData() {
        if (!this.initHeroRed) {
            return;
        }
        RedMgr.refreshEvent(RedDotType.HeroupLevel);
        RedMgr.refreshEvent(RedDotType.HeroupStar);
        RedMgr.refreshEvent(RedDotType.HeroDrug);
        RedMgr.refreshEvent(RedDotType.HeroGene);
        RedMgr.refreshEvent(RedDotType.HeroGacha);
        RedMgr.refreshEvent(RedDotType.GachaAds);
        RedMgr.refreshEvent(RedDotType.TenGacha);
        RedMgr.refreshEvent(RedDotType.TenBookGacha);

        RedMgr.refreshEvent(RedDotType.HeroResolve);
        RedMgr.refreshEvent(RedDotType.HeroAutoAscend);
        RedMgr.refreshEvent(RedDotType.HeroResonanceLevel);
        RedMgr.refreshEvent(RedDotType.HeroresonanceStar);
        RedMgr.refreshEvent(RedDotType.HeroPainting);
        RedMgr.refreshEvent(RedDotType.HeroRecommend);
        RedMgr.refreshEvent(RedDotType.HeroBook);
        RedMgr.refreshEvent(RedDotType.GoldBuy);
        RedMgr.refreshEvent(RedDotType.Hand_book);
        RedMgr.refreshEvent(RedDotType.Wear_Equip);
        RedMgr.refreshEvent(RedDotType.Wear_Jade);
        RedMgr.refreshEvent(RedDotType.Equip_Strengthen);
        RedMgr.refreshEvent(RedDotType.Head_Icon_Red);
    }
    red_pvp_fight_team(){
        let stateToChange = {};
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FincaFight)) {
            return false;
        }
        stateToChange[1] = FincaFightData.ins.getHeroEmptyIndex()!==0;
        stateToChange[2] = FincaFightData.ins.getBookEmptyIndex()!==0;
        return stateToChange;
    }
    red_free_fight_token(){
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FincaFight)) {
            return false;
        }
        return FincaFightData.ins.freeTimes>0 
    }
    red_sign_gift() {
        return SignInGiftData.ins.canReceive();
    }
    red_guild_activity() {
        if (!AssociationData.ins.getInGuild()) {
            return false
        }
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association)) {
            return false;
        }
        let stateToChange = {};
        let isBargin = false;
        let isMinPrice = false;
        for (let i = 0; i < 3; i++) {
            const str = "gift_btn" + (i + 1);
            isBargin = AssociationData.ins.getIsCanBargain(str);//是否可以拼多多
            isMinPrice = AssociationData.ins.getIsMinPrice(str);//是否是最低价
            stateToChange[str] = isBargin || isMinPrice;
        }
        return stateToChange;
    }
    red_guild_sign() {
        if (!AssociationData.ins.getInGuild()) {
            return false
        }
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association)) {
            return false;
        }
        const guildInfo = AssociationData.ins.getAssocitionInfo();
        // const guildSignTab = tab.getData().GuildSignInTableById.getValue(guildInfo.signTimes + 1);
        // if (guildSignTab) {
        //     const costDiamond = guildSignTab.SignInCostDiamond;
        //     if (RoleData.ins.diamond >= costDiamond) {
        //         return true
        //     }
        // }
        return guildInfo.signTimes < 1;
    }
    red_guild_apply() {
        if (!AssociationData.ins.getInGuild()) {
            return false
        }
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association)) {
            return false;
        }
        const memberData = AssociationData.ins.getMemberData(RoleData.ins.id);
        const guildPositionTab = tab.getData().GuildPositionTableByPosition.getValue(memberData.job);
        return RoleData.ins.guildRequests.length > 0 && guildPositionTab.Proces;
    }
    red_guild_skill() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Association)) {
            return false;
        }
        if (!AssociationData.ins.getInGuild()) {
            return false
        }
        let stateToChange = {};
        for (let i = tab.HeroClass.HeroClass_Assassin; i <= tab.HeroClass.HeroClass_Warrior; i++) {
            stateToChange[i] = AssociationData.ins.isMaterialEnough(i).isEnough;
        }
        return stateToChange;
    }
    red_seven_gift_pack() {
        const newDate = new Date(RoleData.ins.createTime * 1000);
        const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
        const times = RoleData.ins.getServerUtcTime() - tomorrow.getTime() / 1000;
        let nowDay = 1;
        if (times > 0) {
            nowDay = Math.ceil((RoleData.ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
        }
        if (nowDay > 7) {
            if (RoleData.ins.clientData.SevenGiftPack) {
                return Number(RoleData.ins.clientData.SevenGiftPack) < 2;
            }
        } else {
            if (RoleData.ins.clientData.SevenGiftPack) {
                return Number(RoleData.ins.clientData.SevenGiftPack) < 1;
            } else {
                return Number(Boolean(RoleData.ins.clientData.SevenGiftPack)) < 1
            }
        }
        return false;
    }
    red_first_recharge() {
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_FirstRecharge);

        if (!RoleData.ins.clientData.openFirstRecharge) {
            RoleData.ins.clientData.openFirstRecharge = "0"
        } else {
            if (isNaN(Number(RoleData.ins.clientData.openFirstRecharge))) {
                RoleData.ins.clientData.openFirstRecharge = String(Number(Boolean(RoleData.ins.clientData.openFirstRecharge)))
            }
        }

        const openFirstRecharge = Number(RoleData.ins.clientData.openFirstRecharge);
        let rechargeData = PayData.ins.getFirstRechargeTable();
        if (rechargeData) {
            return isOpen && openFirstRecharge < rechargeData.Id;
        }
        return false;
    }
    red_Hand_book() {
        let isRed = false;
        const tabs = tab.getData().OpenFunctionTable;
        const showTabs = [];
        for (let i = 0; i < tabs.length; i++) {
            const openTab = tabs[i];
            if (openTab.ShowType === 0) {
                continue;
            }
            showTabs.push(openTab);
        }
        for (let i = 0; i < showTabs.length; i++) {
            let listItem: tab.OpenFunctionTable = showTabs[i];
            const funcData = OpenFunctionMgr.ins.getOpenFunctionData(listItem.Name);
            if (funcData && !funcData.isReceivedRewards && funcData.isOpen && listItem.ShowType === 1) {
                isRed = true;
                break;
            }
        }
        return isRed;
    }
    red_chapterAward() {
        const clearIds = BattleMainDataControl.ins.getStageClearIds();
        const FirstRewardIds = BattleMainDataControl.ins.getReceiveFirstRewardIds();
        let map = new Map();;
        for (let k = 0; k < FirstRewardIds.length; k++) {
            if (map.has(FirstRewardIds[k].stageId)) {
                const arr = map.get(FirstRewardIds[k].stageId);
                arr.push(FirstRewardIds[k].index);
            } else {
                map.set(FirstRewardIds[k].stageId, [FirstRewardIds[k].index]);
            }
        }
        let haveAward = false;
        if (clearIds.length > 0) {
            for (let i = 0; i < clearIds.length; i++) {
                if (!map.has(clearIds[i])) {
                    haveAward = true;
                    break;
                } else {
                    const _arr = map.get(clearIds[i]);
                    if (_arr.length < 3) {
                        haveAward = true;
                    }
                }
            }
        }
        return haveAward
    }
    red_ChallengeDailyFreeTimes() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)) {
            return false;
        }
        let stateToChange = {};
        Object.keys(JIANGHU_TYPE).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key) && _key !== JIANGHU_TYPE.NONE) {
                const curExportInfo = GameplayViewDataMgr.ins.getExportInfo(_key);
                if (curExportInfo.clearedStageIds.length === 0) {
                    stateToChange[_key] = false;
                } else {
                    const sweepInfo = GameplayViewDataMgr.ins.getSweepInfo(_key);
                    stateToChange[_key] = sweepInfo.freeTimes > 0
                }
            }
        })
        return stateToChange;
    }
    red_ChallengeDailyAward() {
        if (!OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Challenge)) {
            return false;
        }

        let stateToChange = {};
        Object.keys(JIANGHU_TYPE).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key) && _key !== JIANGHU_TYPE.NONE) {
                const curExportInfo = GameplayViewDataMgr.ins.getExportInfo(_key);
                if (curExportInfo.clearedStageIds.length === 0) {
                    stateToChange[_key] = false;
                } else {
                    const curExportInfo = GameplayViewDataMgr.ins.getExportInfo(_key);
                    stateToChange[_key] = false
                    for (let i = 0; i < curExportInfo.clearedStageIds.length; i++) {
                        const fightId = curExportInfo.clearedStageIds[i];
                        const pveTab = tab.getData().PveClearStageTableByStageId.getValue(fightId);
                        if (pveTab && curExportInfo.receivedFirstRewardStageIds.indexOf(fightId) === -1) {
                            stateToChange[_key] = true
                            break;
                        }
                    }
                }
            }
        })
        return stateToChange;
    }
    // 购买金币红点功能关闭
    red_GoldBuy() {
        // 是否功能开启
        return false
        // const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BuyGold)
        // const curAdTimes = AdMgr.ins.getAdCountByType(tab.AdType.AdType_BuyGold);
        // const maxAdTimes = AdMgr.ins.getAdCountMaxByType(tab.AdType.AdType_BuyGold);
        // const isCloseBuyPop = SettingRedManager.ins.getSetting("GoldBuy");
        // return maxAdTimes > curAdTimes && !isCloseBuyPop && isOpen;
    }
    /* 图签可领取奖励红点 */
    red_hero_book_up() {
        let stateToChange = {};
        for (let i = 0; i < tab.getData().HeroTable.length; i++) {
            const heroTab = tab.getData().HeroTable[i];
            const itemId = heroTab.Id;
            const awardMap = HeroDataControl.ins.getBookReceivedIds();
            const awardObj = awardMap.get(itemId);
            stateToChange[itemId] = awardObj && !awardObj.isReceived;
        }
        return stateToChange;
    }
    /* 推荐阵容红点 */
    red_hero_recommend_up() {
        let stateToChange = {};
        for (let i = 0; i < tab.getData().RecommendTeamTable.length; i++) {
            const _tab = tab.getData().RecommendTeamTable[i];
            let _haveCount = 0;
            for (let i = 0; i < _tab.HeroIdList.length; i++) {
                let itemId = _tab.HeroIdList[i];
                let heroInfo = HeroData.ins.getByItemId(itemId);
                if (heroInfo) {
                    _haveCount++;
                }
            }
            const map = HeroDataControl.ins.getRecommendTeamIds();
            const countEnough = _haveCount >= _tab.HeroIdList.length;
            const isGot = map.get(_tab.Id)
            const _canRecive = countEnough && !isGot;
            stateToChange[_tab.Id] = _canRecive;
        }
        return stateToChange;
    }
    /* 广告红点逻辑 */
    red_ads_up() {
        let stateToChange = {};
        Object.keys(tab.AdType).forEach(key => {
            const _key = Number(key)
            if (!isNaN(_key) && _key !== tab.AdType.AdType_None) {
                if (_key == tab.AdType.AdType_Gacha1001) {
                    if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaBook)) {
                        this.addAdState(stateToChange, _key)
                    } else {
                        stateToChange[_key] = false;
                    }
                } else if (_key == tab.AdType.AdType_BuyDailyShop) {
                    if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_DailyShop)) {
                        this.addAdState(stateToChange, _key)
                    } else {
                        stateToChange[_key] = false;
                    }
                } else if (_key == tab.AdType.AdType_SpecialGiftDaily) {
                    if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpecialGiftDaily)) {
                        this.addAdState(stateToChange, _key)
                    } else {
                        stateToChange[_key] = false;
                    }
                } else if (_key == tab.AdType.AdType_SpecialGiftWeekly) {
                    if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpecialGiftWeekly)) {
                        this.addAdState(stateToChange, _key)
                    } else {
                        stateToChange[_key] = false;
                    }
                } else if (_key == tab.AdType.AdType_SpecialGiftMonthly) {
                    if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_SpecialGiftMonthly)) {
                        this.addAdState(stateToChange, _key)
                    } else {
                        stateToChange[_key] = false;
                    }
                } else {
                    this.addAdState(stateToChange, _key)
                }

            }
        })
        return stateToChange;
    }
    addAdState(stateToChange, key: tab.AdType) {
        const curCount = AdMgr.ins.getAdCountByType(key);
        const maxCount = AdMgr.ins.getAdCountMaxByType(key);
        let isClosePop = false;
        if (key == tab.AdType.AdType_Gacha101 || key == tab.AdType.AdType_Gacha301) {
            isClosePop = SettingRedManager.ins.getSetting("GachaAds");
        }
        stateToChange[key] = maxCount > curCount && !isClosePop;
    }
    /* 保底抽红点 */
    red_Gacha_up() {
        let stateToChange = {}
        const itemArr = [51, 81, 82];
        for (let i = 0; i < itemArr.length; i++) {
            if (i == 2) {
                if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaBookSR)) {
                    const havaCount = ItemData.ins.getCount(itemArr[i]);
                    stateToChange[i + 1] = havaCount >= 1000;
                } else {
                    stateToChange[i + 1] = false;
                }
            } else if (i == 0) {
                if (OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaHeroSSR)) {
                    const havaCount = ItemData.ins.getCount(itemArr[i]);
                    stateToChange[i + 1] = havaCount >= 1000;
                } else {
                    stateToChange[i + 1] = false;
                }
            } else {
                const havaCount = ItemData.ins.getCount(itemArr[i]);
                stateToChange[i + 1] = havaCount >= 1000;
            }

        }
        return stateToChange;
    }
    /* 十连抽红点 */
    red_ten_gacha() {
        let stateToChange = {}
        let isClosePop = SettingRedManager.ins.getSetting("TenGacha");
        const itemArr = [101, 102, 103];
        for (let i = 0; i < itemArr.length; i++) {
            const id = itemArr[i];
            const havaCount = ItemData.ins.getCount(id);
            stateToChange[id] = havaCount >= 10 && !isClosePop;
        }
        return stateToChange;
    }
    /* 十连武器抽红点 */
    red_ten_book_gacha() {
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_GachaBook)
        if (isOpen) {
            let stateToChange = {}
            let isClosePop = SettingRedManager.ins.getSetting("TenBookGacha");
            const id = 111;
            const havaCount = ItemData.ins.getCount(id);
            stateToChange[id] = havaCount >= 10 && !isClosePop;
            return stateToChange;
        } else {
            return false;
        }
    }
    /* 检测一键遣散 */
    red_one_click_Resolve() {
        return HeroDataControl.ins.getAllResolveHeros().size > 0
    }
    /* 检测一键升星 */
    red_one_click_up_star() {
        return HeroDataControl.ins.getOneClickList().size > 0
    }
    /* 检测上阵英雄是否可以升级 */
    red_one_hero_level_up() {
        let stateToChange = {}
        let teamSlots = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < teamSlots.length; i++) {
            let v = teamSlots[i];
            let heroInfo = HeroData.ins.getById(v.heroId);
            if (heroInfo) {
                stateToChange[String(v.heroId)] = heroInfo.checkLevelUp() > heroInfo.getHeroLevel();
            }
        }
        return stateToChange;
    }
    /* 基因红点 */
    red_Gene_up() {
        const smallLevel = RoleData.ins.gene.smallGeneLevel;
        const bigLevel = RoleData.ins.gene.bigGeneLevel;
        const nextSmallGenTab = tab.getData().GeneLevelTableById.getValue(smallLevel + 1);
        const nextBigGenTab = tab.getData().GeneLevelTableById.getValue(bigLevel + 10001);
        const level = RoleData.ins.level;
        if (nextSmallGenTab) {
            const smallNeedId = nextSmallGenTab.MaterialIdList[0];
            const smallNeedCount = nextSmallGenTab.MaterialCountList[0];
            const haveSmallCount = ItemData.ins.getCount(smallNeedId);
            if (level >= nextSmallGenTab.UnlockArgs && haveSmallCount >= smallNeedCount) {
                return true;
            }
        }
        if (nextBigGenTab) {
            const bigNeedId = nextBigGenTab.MaterialIdList[0];
            const bigNeedCount = nextBigGenTab.MaterialCountList[0];
            const haveBigCount = ItemData.ins.getCount(bigNeedId);
            if (smallLevel >= nextBigGenTab.UnlockArgs && haveBigCount >= bigNeedCount) {
                return true;
            }
        }
        if (!nextSmallGenTab && !nextBigGenTab) {
            return false;
        }
        return false;
    }
    /* 捕虫红点 */
    red_drug_up() {
        let stateToChange = {};
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Drug)
        for (let i = 0; i < tab.getData().ElixirTable.length; i++) {
            const elixirTab = tab.getData().ElixirTable[i];
            const elixirId = elixirTab.Id;
            const elixirCount = ItemData.ins.getCount(elixirId);
            const useCount = HeroTeamControl.ins.getElixirCountById(elixirId);

            const playLevel = RoleData.ins.level;
            let maxCount = 0;
            for (let k = elixirTab.PlayerLv.length - 1; k >= 0; k--) {
                const level = elixirTab.PlayerLv[k];
                if (playLevel > level) {
                    maxCount = elixirTab.MaxCount[k];
                    break;
                }
            }
            const isNotFull = useCount < maxCount;

            stateToChange[elixirId] = elixirCount > 0 && isNotFull && isOpen
        }
        return stateToChange;
    }
    /* 检测上阵英雄是否可以升星 */
    red_one_hero_star_up() {
        let stateToChange = {}
        let teamSlots = HeroTeamControl.ins.getTeam();
        for (let i = 0; i < teamSlots.length; i++) {
            let v = teamSlots[i];
            let heroInfo = HeroData.ins.getById(v.heroId);
            if (heroInfo) {
                stateToChange[String(v.heroId)] = heroInfo.checkStarUpMaterialEnough();
            }
        }
        return stateToChange;
    }
    /* 检测当前上阵英雄是否有可替换英雄 */
    red_hero_replace() {
        let stateToChange = {}
        const map = HeroDataControl.ins.getCanReplaceHeros();
        map.forEach((value: boolean, key: number) => {
            stateToChange[key] = true;
        })
        return stateToChange;
    }
    /* 检测等级共鸣 */
    red_one_hero_resonance_level() {
        // 开启条件
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_HeroLevelResonance)
        if (!isOpen) {
            return false;
        }
        let Leveltab = HeroTeamControl.ins.getResonanceLevelTab();
        if (Leveltab.NeedLv === 0) {
            return false
        }
        return HeroTeamControl.ins.getMinTeamLevel() >= Leveltab.NeedLv
    }
    /* 检测星级共鸣 */
    red_one_hero_resonance_star() {
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_HeroStarResonanceTable)
        if (!isOpen) {
            return false;
        }
        let startab = HeroTeamControl.ins.getResonanceStarTab();
        if (startab.NeedStar === 0) {
            return false
        }
        return HeroTeamControl.ins.getMinTeamStar() >= startab.NeedStar
    }
    /* 检测绘卷 */
    red_painting_up() {
        const stateToChange = {}
        const teamSort = [1, 2, 3, 4, 5];//射手-刺客-法师-牧师-战士
        for (let i = 0; i < teamSort.length; i++) {
            stateToChange[teamSort[i]] = {};
            const list = HeroDataControl.ins.getPaintingListByVocation(teamSort[i]);
            const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_ScrollPainting)
            for (let k = 0; k < list.length; k++) {
                const heroId = list[k];
                const activeStar = HeroDataControl.ins.paintingActive.get(heroId);
                const maxStar = HeroDataControl.ins.getMaxPaintingStar(heroId);
                let star = activeStar ? activeStar : 0;
                let isRed = false;
                if (maxStar && maxStar > star && isOpen) {
                    isRed = true;
                }
                stateToChange[teamSort[i]][heroId] = isRed
            }
        }
        return stateToChange;
    }
    red_wear_jade() {
        let stateToChange = {}
        const teams = HeroTeamControl.ins.getTeam()
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Jade);
        if (!isOpen) {
            return false;
        }
        const list = EquipData.ins.getJadeEquipInfos();
        for (let i = 0; i < teams.length; i++) {
            let maxQulity = 0;
            let currInfo: EquipInfo = null;
            const heroClass = teams[i].heroClass;
            const heroInfo = HeroData.ins.getById(teams[i].heroId);
            for (let k = 0; k < list.length; k++) {
                const equipData = list[k];
                if (equipData.heroClass === heroInfo.heroTable.Class) {
                    currInfo = equipData
                }
                if (!equipData.isWear && equipData.quality > maxQulity) {
                    maxQulity = equipData.quality
                }
            }
            if (maxQulity) {
                if (currInfo) {
                    stateToChange[String(heroClass)] = (maxQulity - currInfo.quality) > 0;
                } else {
                    stateToChange[String(heroClass)] = true
                }
            } else {
                stateToChange[String(heroClass)] = false
            }
        }
        return stateToChange
    }
    red_wear_equip() {
        let stateToChange = {}
        const teams = HeroTeamControl.ins.getTeam()
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Equipment)
        for (let i = 0; i < teams.length; i++) {
            const heroClass = teams[i].heroClass;
            stateToChange[String(heroClass)] = this.getNewEquip(heroClass) && isOpen;
        }
        return stateToChange
    }
    red_equip_strengthen(){
        let stateToChange = {}
        const teams = HeroTeamControl.ins.getTeam()
        const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_Equipment)
        for (let i = 0; i < teams.length; i++) {
            const heroClass = teams[i].heroClass;
            stateToChange[String(heroClass)] = this.materialEnoughtFourEquip(heroClass) && isOpen;
        }
        return stateToChange
    }
    // 装备可以一键升级
    materialEnoughtFourEquip(heroClass: tab.HeroClass) {
        let equipList = EquipData.ins.getWearEquipInfosByHeroClass(heroClass);
        let currEquips = [];
        for (let i: number = 0; i < equipList.length; i++) {
            if (i < tab.EquipType.EquipType_Feather) {
                currEquips.push(equipList[i]);
            }
        }
        if(currEquips.length<4){
            return false;
        }
        let minLevel = -1;
        for (let key in currEquips) {
            if (currEquips[key] && !currEquips[key].isEnhanceLimit()) {
                if (minLevel < 0) {
                    minLevel = currEquips[key].enhanceLv;
                } else if (currEquips[key].enhanceLv < minLevel) {
                    minLevel = currEquips[key].enhanceLv;
                }
            }
        }
        if (minLevel >= 0) {
            let types = [];
            let totals = [];
            for (let key in currEquips) {
                let currEquip = currEquips[key];
                if (currEquip && !currEquip.isEnhanceLimit() && currEquip.enhanceLv == minLevel) {
                    let items = GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
                    items = items.concat(GameUtil.convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));
                    totals = GameUtil.itemsAddItems(totals, items);
                    if (ItemData.ins.isItemsEnough(totals)) {
                        types.push(currEquip.equipTable.Type);
                    } else {
                        continue;
                    }
                }
            }
            if (types.length===4) {
                return true;
            } else {
                return false
            }
        }else{
            return false
        }
    }
    getNewEquip(heroClass: tab.HeroClass) {
        let equipList = EquipData.ins.getEquipBagByHeroClass(heroClass);
        let types = [tab.EquipType.EquipType_Gloves, tab.EquipType.EquipType_Clothing, tab.EquipType.EquipType_Cloak, tab.EquipType.EquipType_Hat]
        let slots = EquipData.ins.getEquipContainerDataByHeroClass(heroClass).slotData;
        let ids = [];
        for (let key in types) {
            let type = types[key];
            let slot = slots[type];
            if (slot && slot.equipId != 0) {
                let equipInfo = EquipData.ins.getEquipInfoById(slot.equipId);
                let currInfo = null;
                for (let value of equipList) {
                    if (value.equipTable.Type == type) {
                        if (value.score > equipInfo.score) {
                            if (currInfo) {
                                if (value.score > currInfo.score) {
                                    currInfo = value;
                                }
                            } else {
                                currInfo = value;
                            }
                        }
                    }
                }
                if (currInfo) {
                    ids.push(currInfo.id);
                }
            } else {
                let currInfo = null;
                for (let value of equipList) {
                    if (value.equipTable.Type == type) {
                        if (currInfo) {
                            if (value.score > currInfo.score) {
                                currInfo = value;
                            }
                        } else {
                            currInfo = value;
                        }
                    }

                }
                if (currInfo) {
                    ids.push(currInfo.id);
                }
            }
        }
        return ids.length > 0
    }
    red_feng_yun_rank() {
        let stateToChange = {}
        const map = FengyunRankData.ins.getMapData();
        if (map) {
            Object.keys(map).forEach((key, value) => {
                const honorRollData = map[key];
                const endTime = honorRollData.activityEndTime;
                const lastTimer = Number(endTime) - RoleData.ins.getServerUtcTime()
                stateToChange[key] = {};
                for (let i = 0; i < honorRollData.tasks.length; i++) {
                    const taskData = honorRollData.tasks[i]
                    const taskTab = tab.getData().TaskTableById.getValue(taskData.taskTabId);
                    stateToChange[key][taskData.id] = !taskData.isReceived && taskData.progress >= taskTab.FinishParam1 && lastTimer > 0;
                }
            })
        }
        return stateToChange
    }
    red_head_icon() {
        let stateToChange = {}
        for (let i = 0; i <= 1; i++) {
            if (i === 0) {
                if (RoleData.ins.clientData["newHeadIcon"]) {
                    stateToChange[0] = {};
                    const newHeadIconArr = RoleData.ins.clientData["newHeadIcon"].split(",");
                    for (let k = 0; k < newHeadIconArr.length; k++) {
                        stateToChange[0][newHeadIconArr[k]] = true
                    }
                } else {
                    stateToChange[0] = false;
                }
            }

            if (i === 1) {
                if (RoleData.ins.clientData["newHeadFrame"]) {
                    stateToChange[1] = {};
                    const newHeadFrameArr = RoleData.ins.clientData["newHeadFrame"].split(",");
                    for (let k = 0; k < newHeadFrameArr.length; k++) {
                        stateToChange[1][newHeadFrameArr[k]] = true
                    }
                } else {
                    stateToChange[1] = false;
                }
            }
        }
        return stateToChange
    }
    red_combine_grow() {
        let stateToChange = {};
        const groups = ActivityData.ins.getAllActivityGroup();
        for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
                const id = info.activityTable.ActivityIds[k];
                const activityInfo = tab.getData().ActivityTableByActivityId.getValue(id);
                const heroGrowData = ActivityData.ins.getHeroGrowData(id);
                if (heroGrowData && activityInfo.Type === tab.OpenFunctionName.OpenFunctionName_ActivityHeroGrow) {
                    const heroId = activityInfo.Param1;
                    const maxStar = HeroDataControl.ins.getMaxPaintingStar(heroId);
                    const receiveLen = heroGrowData.receivedFreeRewardStars.length;
                    stateToChange[info.TabId] = receiveLen <= (maxStar - 5)
                }
            }
        }
        return stateToChange
    }
    red_combine_pass() {
        let stateToChange = {};
        const groups = ActivityData.ins.getAllActivityGroup();
        for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
                const id = info.activityTable.ActivityIds[k];
                const activityInfo = tab.getData().ActivityTableByActivityId.getValue(id);
                if (activityInfo.Type === tab.OpenFunctionName.OpenFunctionName_BattlePassSignIn1) {
                    const passId = activityInfo.Param1;
                    stateToChange[info.TabId] = BattlePassDataMgr.ins.getAllReceiveTaskId(passId).length > 0;
                }
            }
        }
        return stateToChange
    }
    red_combine_shop() {
        let stateToChange = {};
        const groups = ActivityData.ins.getAllActivityGroup();
        for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
                const id = info.activityTable.ActivityIds[k];
                const activityInfo = tab.getData().ActivityTableByActivityId.getValue(id);
                if (activityInfo.Type === tab.OpenFunctionName.OpenFunctionName_ActivityMall) {
                    const mallId = activityInfo.Param1;
                    let listData = ActivityData.ins.getMallItemTabsById(mallId);
                    if (listData.length > 0) {
                        const adType = listData[0].AdType;
                        const maxAdTimes = AdMgr.ins.getAdCountMaxByType(adType);
                        const curAdTimes = AdMgr.ins.getAdCountByType(adType);
                        stateToChange[info.TabId] = curAdTimes < maxAdTimes
                    }
                }
            }
        }
        return stateToChange
    }
    red_combine_charge(){
        let stateToChange = {};
        const groups = ActivityData.ins.getAllActivityGroup();
        for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
                const id = info.activityTable.ActivityIds[k];
                const activityInfo = tab.getData().ActivityTableByActivityId.getValue(id);
                if (activityInfo.Type === tab.OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge) {
                    const acitivityId = activityInfo.Param1;
                    const Tabs = ActivityData.ins.getAllTabsByRechageId(acitivityId);
                    const serverData = ActivityData.ins.getRechargeServerData(acitivityId);
                    if(serverData){
                        const type = this.getPayType();
                        for (let i = 0; i < Tabs.length; i++) {
                            const tabData = Tabs[i]
                            if(serverData.payAmount >= tabData[type]){
                                if (serverData.receivedRewardIds.indexOf(tabData.IndexId) === -1) {
                                    stateToChange[info.TabId] = true
                                } 
                            }
                        }
                    }else{
                        stateToChange[info.TabId] = false
                    }
                }
            }
        }
        return stateToChange
    }
    checkWearEquip(data:HeroInfo){
        const isInTeam = HeroTeamControl.ins.heroInTeam(data.id);
        return RedMgr.ins.isRed(RedDotType.Wear_Equip, String(data.heroTable.Class))&&Boolean(isInTeam)
    }
    checkWearJade(data:HeroInfo){
        const isInTeam = HeroTeamControl.ins.heroInTeam(data.id);
        return RedMgr.ins.isRed(RedDotType.Wear_Jade, String(data.heroTable.Class))&&Boolean(isInTeam)
    }
    getPayType(): string {
        // 判断当前的货币类型
        const payType = ChannelMgr.channelTab.Currency;
        if (payType === "Price") {
            // 人民币
            return "Total";
        } else if (payType === "PriceDollar") {
            // 美元
            return "TotalDollar";
        } else if (payType === "PriceJPY") {
            // 日元
            return "TotalJPY";
        }
    }
}


