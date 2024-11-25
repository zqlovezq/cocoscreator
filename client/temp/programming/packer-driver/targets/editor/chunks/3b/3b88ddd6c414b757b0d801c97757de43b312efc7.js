System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, RANKING_TYPE, SoundUrl, RecruitType, HERO_DETAIL_VIEW_TYPE, JIANGHU_TYPE, AWARD_STATE, LevelRewardState, ACTIVITY_GIFT_VIEW, MALLNAME, DEVELOPTYPE, TRIALTASK, TRIALLAYER, HEADTYPE, ASSOCIATION, ASSOCIATIONPOP, ASSOCIATIONVIEW, TASKDAILY, GuildPermission, FincaFightTeamState;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "62d64OVYplH44HfKMOzCyEN", "EnumTypeMgr", undefined);

      /*
       * @Date: 2024-06-18 09:49:26
       * @LastEditors: wzq
       * @progress:枚举管理
       * @LastEditTime: 2024-11-12 16:12:07
       */

      /* 排行榜枚举 */
      _export("RANKING_TYPE", RANKING_TYPE = /*#__PURE__*/function (RANKING_TYPE) {
        RANKING_TYPE[RANKING_TYPE["NONE"] = 0] = "NONE";
        RANKING_TYPE[RANKING_TYPE["HERO"] = 1] = "HERO";
        RANKING_TYPE[RANKING_TYPE["CHAPTER"] = 6] = "CHAPTER";
        RANKING_TYPE[RANKING_TYPE["LEVEL"] = 7] = "LEVEL";
        RANKING_TYPE[RANKING_TYPE["POWER"] = 8] = "POWER";
        RANKING_TYPE[RANKING_TYPE["BOSS"] = 9] = "BOSS";
        RANKING_TYPE[RANKING_TYPE["GUILD"] = 14] = "GUILD";
        RANKING_TYPE[RANKING_TYPE["Fight"] = 17] = "Fight";
        return RANKING_TYPE;
      }({}));
      /* 音频枚举 */


      _export("SoundUrl", SoundUrl = /*#__PURE__*/function (SoundUrl) {
        SoundUrl[SoundUrl["MainBGM"] = 1] = "MainBGM";
        SoundUrl[SoundUrl["BattleBGM"] = 2] = "BattleBGM";
        SoundUrl[SoundUrl["ClickEffect"] = 3] = "ClickEffect";
        return SoundUrl;
      }({}));
      /* 抽卡枚举 */


      _export("RecruitType", RecruitType = /*#__PURE__*/function (RecruitType) {
        RecruitType[RecruitType["None"] = 0] = "None";
        RecruitType[RecruitType["Senior"] = 1] = "Senior";
        RecruitType[RecruitType["Vocation"] = 2] = "Vocation";
        RecruitType[RecruitType["Friend"] = 3] = "Friend";
        RecruitType[RecruitType["Book"] = 4] = "Book";
        RecruitType[RecruitType["SeniorGuarantee"] = 5] = "SeniorGuarantee";
        RecruitType[RecruitType["BookGuarantee"] = 6] = "BookGuarantee";
        RecruitType[RecruitType["BuyDailyShop"] = 7] = "BuyDailyShop";
        RecruitType[RecruitType["BuyLevelUp"] = 8] = "BuyLevelUp";
        RecruitType[RecruitType["PowerBattlePass"] = 200] = "PowerBattlePass";
        RecruitType[RecruitType["BossBattlePass"] = 201] = "BossBattlePass";
        RecruitType[RecruitType["GaChaUp"] = 400] = "GaChaUp";
        RecruitType[RecruitType["ChoiceSSR"] = 1001] = "ChoiceSSR";
        return RecruitType;
      }({}));
      /* 背包切换类型枚举 */


      _export("HERO_DETAIL_VIEW_TYPE", HERO_DETAIL_VIEW_TYPE = /*#__PURE__*/function (HERO_DETAIL_VIEW_TYPE) {
        HERO_DETAIL_VIEW_TYPE[HERO_DETAIL_VIEW_TYPE["DETAIL"] = 1] = "DETAIL";
        HERO_DETAIL_VIEW_TYPE[HERO_DETAIL_VIEW_TYPE["RISINGSTAR"] = 2] = "RISINGSTAR";
        HERO_DETAIL_VIEW_TYPE[HERO_DETAIL_VIEW_TYPE["EQUIP"] = 3] = "EQUIP";
        HERO_DETAIL_VIEW_TYPE[HERO_DETAIL_VIEW_TYPE["SKIN"] = 4] = "SKIN";
        return HERO_DETAIL_VIEW_TYPE;
      }({}));
      /* 江湖页面切换 */


      _export("JIANGHU_TYPE", JIANGHU_TYPE = /*#__PURE__*/function (JIANGHU_TYPE) {
        JIANGHU_TYPE[JIANGHU_TYPE["NONE"] = 0] = "NONE";
        JIANGHU_TYPE[JIANGHU_TYPE["GoldStage"] = 1] = "GoldStage";
        JIANGHU_TYPE[JIANGHU_TYPE["FeedStage"] = 2] = "FeedStage";
        return JIANGHU_TYPE;
      }({}));
      /* 道具领取状态 */


      _export("AWARD_STATE", AWARD_STATE = /*#__PURE__*/function (AWARD_STATE) {
        AWARD_STATE[AWARD_STATE["NONE"] = 0] = "NONE";
        AWARD_STATE[AWARD_STATE["LOCK"] = 1] = "LOCK";
        AWARD_STATE[AWARD_STATE["GOT"] = 2] = "GOT";
        AWARD_STATE[AWARD_STATE["RECEIVE"] = 3] = "RECEIVE";
        AWARD_STATE[AWARD_STATE["GO"] = 4] = "GO";
        return AWARD_STATE;
      }({}));

      _export("LevelRewardState", LevelRewardState = /*#__PURE__*/function (LevelRewardState) {
        LevelRewardState[LevelRewardState["None"] = 0] = "None";
        LevelRewardState[LevelRewardState["Receive"] = 2] = "Receive";
        LevelRewardState[LevelRewardState["Got"] = 3] = "Got";
        LevelRewardState[LevelRewardState["NotAchieved"] = 4] = "NotAchieved";
        return LevelRewardState;
      }({}));
      /* 精彩活动页面切换 */


      _export("ACTIVITY_GIFT_VIEW", ACTIVITY_GIFT_VIEW = /*#__PURE__*/function (ACTIVITY_GIFT_VIEW) {
        ACTIVITY_GIFT_VIEW[ACTIVITY_GIFT_VIEW["NONE"] = 0] = "NONE";
        ACTIVITY_GIFT_VIEW[ACTIVITY_GIFT_VIEW["CYCLE"] = 1] = "CYCLE";
        ACTIVITY_GIFT_VIEW[ACTIVITY_GIFT_VIEW["CHAPTER"] = 2] = "CHAPTER";
        ACTIVITY_GIFT_VIEW[ACTIVITY_GIFT_VIEW["NewPlayerMall"] = 3] = "NewPlayerMall";
        ACTIVITY_GIFT_VIEW[ACTIVITY_GIFT_VIEW["NewPlayerMall2"] = 4] = "NewPlayerMall2";
        return ACTIVITY_GIFT_VIEW;
      }({}));
      /* 商店管理 */


      _export("MALLNAME", MALLNAME = /*#__PURE__*/function (MALLNAME) {
        MALLNAME[MALLNAME["NONE"] = 0] = "NONE";
        MALLNAME[MALLNAME["DailyShop"] = 1] = "DailyShop";
        MALLNAME[MALLNAME["DismissalShop"] = 2] = "DismissalShop";
        MALLNAME[MALLNAME["AssassinShop"] = 3] = "AssassinShop";
        MALLNAME[MALLNAME["ArcherShop"] = 4] = "ArcherShop";
        MALLNAME[MALLNAME["PriestShop"] = 5] = "PriestShop";
        MALLNAME[MALLNAME["CasterShop"] = 6] = "CasterShop";
        MALLNAME[MALLNAME["WarriorShop"] = 7] = "WarriorShop";
        MALLNAME[MALLNAME["BossShop"] = 8] = "BossShop";
        MALLNAME[MALLNAME["PvpShop"] = 9] = "PvpShop";
        MALLNAME[MALLNAME["DiamondShop"] = 10] = "DiamondShop";
        MALLNAME[MALLNAME["GuildShop"] = 11] = "GuildShop";
        MALLNAME[MALLNAME["DailyGift"] = 51] = "DailyGift";
        MALLNAME[MALLNAME["WeeklyGift"] = 52] = "WeeklyGift";
        MALLNAME[MALLNAME["MonthlyGift"] = 53] = "MonthlyGift";
        MALLNAME[MALLNAME["PvpToken"] = 60] = "PvpToken";
        MALLNAME[MALLNAME["NewPlayerMall"] = 70] = "NewPlayerMall";
        MALLNAME[MALLNAME["NewPlayerMall2"] = 71] = "NewPlayerMall2";
        MALLNAME[MALLNAME["HeroUpMall"] = 201] = "HeroUpMall";
        return MALLNAME;
      }({}));
      /* 7日签到 */


      _export("DEVELOPTYPE", DEVELOPTYPE = /*#__PURE__*/function (DEVELOPTYPE) {
        DEVELOPTYPE[DEVELOPTYPE["NONE"] = 0] = "NONE";
        DEVELOPTYPE[DEVELOPTYPE["HERO"] = 1] = "HERO";
        DEVELOPTYPE[DEVELOPTYPE["BOOK"] = 2] = "BOOK";
        return DEVELOPTYPE;
      }({}));
      /* 试炼页签 */


      _export("TRIALTASK", TRIALTASK = /*#__PURE__*/function (TRIALTASK) {
        TRIALTASK[TRIALTASK["NONE"] = 0] = "NONE";
        TRIALTASK[TRIALTASK["TASK1"] = 1] = "TASK1";
        TRIALTASK[TRIALTASK["TASK2"] = 2] = "TASK2";
        TRIALTASK[TRIALTASK["GIFT"] = 3] = "GIFT";
        return TRIALTASK;
      }({}));
      /* 试炼菜鸟试炼、精英试炼 */


      _export("TRIALLAYER", TRIALLAYER = /*#__PURE__*/function (TRIALLAYER) {
        TRIALLAYER[TRIALLAYER["NONE"] = 0] = "NONE";
        TRIALLAYER[TRIALLAYER["ROOKIE"] = 1] = "ROOKIE";
        TRIALLAYER[TRIALLAYER["ELITE"] = 2] = "ELITE";
        return TRIALLAYER;
      }({}));
      /* 头像/头像框 */


      _export("HEADTYPE", HEADTYPE = /*#__PURE__*/function (HEADTYPE) {
        HEADTYPE[HEADTYPE["NONE"] = 0] = "NONE";
        HEADTYPE[HEADTYPE["HEADICON"] = 1] = "HEADICON";
        HEADTYPE[HEADTYPE["HEADFRAME"] = 2] = "HEADFRAME";
        return HEADTYPE;
      }({}));
      /* 帮会管理 */


      _export("ASSOCIATION", ASSOCIATION = /*#__PURE__*/function (ASSOCIATION) {
        ASSOCIATION[ASSOCIATION["NONE"] = 0] = "NONE";
        ASSOCIATION[ASSOCIATION["INASSOCIATION"] = 1] = "INASSOCIATION";
        return ASSOCIATION;
      }({}));
      /* 帮会弹窗 */


      _export("ASSOCIATIONPOP", ASSOCIATIONPOP = /*#__PURE__*/function (ASSOCIATIONPOP) {
        ASSOCIATIONPOP[ASSOCIATIONPOP["NONE"] = 0] = "NONE";
        ASSOCIATIONPOP[ASSOCIATIONPOP["CREATE"] = 1] = "CREATE";
        ASSOCIATIONPOP[ASSOCIATIONPOP["NOTICE"] = 2] = "NOTICE";
        ASSOCIATIONPOP[ASSOCIATIONPOP["CHANGE"] = 3] = "CHANGE";
        ASSOCIATIONPOP[ASSOCIATIONPOP["DONATE"] = 4] = "DONATE";
        ASSOCIATIONPOP[ASSOCIATIONPOP["SKILLRESET"] = 5] = "SKILLRESET";
        return ASSOCIATIONPOP;
      }({}));
      /* 帮会页签 */


      _export("ASSOCIATIONVIEW", ASSOCIATIONVIEW = /*#__PURE__*/function (ASSOCIATIONVIEW) {
        ASSOCIATIONVIEW[ASSOCIATIONVIEW["NONE"] = 0] = "NONE";
        ASSOCIATIONVIEW[ASSOCIATIONVIEW["INFO"] = 1] = "INFO";
        ASSOCIATIONVIEW[ASSOCIATIONVIEW["EVENT"] = 2] = "EVENT";
        return ASSOCIATIONVIEW;
      }({}));
      /* 每日任务 */


      _export("TASKDAILY", TASKDAILY = /*#__PURE__*/function (TASKDAILY) {
        TASKDAILY[TASKDAILY["NONE"] = 0] = "NONE";
        TASKDAILY[TASKDAILY["DAILY"] = 1] = "DAILY";
        TASKDAILY[TASKDAILY["WEEK"] = 2] = "WEEK";
        TASKDAILY[TASKDAILY["ACHIEVEMENT"] = 3] = "ACHIEVEMENT";
        TASKDAILY[TASKDAILY["GUILD"] = 4] = "GUILD";
        return TASKDAILY;
      }({}));
      /* 公会全选 */


      _export("GuildPermission", GuildPermission = /*#__PURE__*/function (GuildPermission) {
        GuildPermission[GuildPermission["KickOutMember"] = 0] = "KickOutMember";
        GuildPermission[GuildPermission["SetJob"] = 1] = "SetJob";
        GuildPermission[GuildPermission["setNotice"] = 2] = "setNotice";
        GuildPermission[GuildPermission["ProcessApply"] = 3] = "ProcessApply";
        GuildPermission[GuildPermission["GuildSetting"] = 4] = "GuildSetting";
        return GuildPermission;
      }({}));
      /* 竞技场队伍状态 */


      _export("FincaFightTeamState", FincaFightTeamState = /*#__PURE__*/function (FincaFightTeamState) {
        FincaFightTeamState[FincaFightTeamState["NONE"] = 0] = "NONE";
        FincaFightTeamState[FincaFightTeamState["LOCK"] = 1] = "LOCK";
        FincaFightTeamState[FincaFightTeamState["EMPTY"] = 2] = "EMPTY";
        FincaFightTeamState[FincaFightTeamState["HERO"] = 3] = "HERO";
        FincaFightTeamState[FincaFightTeamState["BOOK"] = 4] = "BOOK";
        return FincaFightTeamState;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3b88ddd6c414b757b0d801c97757de43b312efc7.js.map