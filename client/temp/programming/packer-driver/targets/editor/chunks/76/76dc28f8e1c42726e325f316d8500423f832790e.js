System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, OpenFunctionMgr, JIANGHU_TYPE, tab, RedMgr, RedDotType, AdMgr, AssociationData, EquipData, FengyunRankData, BattleMainDataControl, ItemData, GameplayViewDataMgr, PayData, RoleData, HeroData, HeroTeamControl, HeroDataControl, SettingRedManager, SignInGiftData, ActivityData, BattlePassDataMgr, GameUtil, FincaFightData, ChannelMgr, HeroRed, _crd;

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../../association/AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipData(extras) {
    _reporterNs.report("EquipData", "../../equip/EquipData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEquipInfo(extras) {
    _reporterNs.report("EquipInfo", "../../equip/EquipInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "../../fengyunRanking/FengyunRankData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../../jianghu/GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "../../role/SettingRedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "../../activity/signGift/SignInGiftData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "../../activity/battlePass/BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "../../fincaFight/FincaFightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroInfo(extras) {
    _reporterNs.report("HeroInfo", "../HeroInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  _export("HeroRed", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      OpenFunctionMgr = _unresolved_2.OpenFunctionMgr;
    }, function (_unresolved_3) {
      JIANGHU_TYPE = _unresolved_3.JIANGHU_TYPE;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      RedMgr = _unresolved_5.RedMgr;
    }, function (_unresolved_6) {
      RedDotType = _unresolved_6.RedDotType;
    }, function (_unresolved_7) {
      AdMgr = _unresolved_7.AdMgr;
    }, function (_unresolved_8) {
      AssociationData = _unresolved_8.AssociationData;
    }, function (_unresolved_9) {
      EquipData = _unresolved_9.EquipData;
    }, function (_unresolved_10) {
      FengyunRankData = _unresolved_10.FengyunRankData;
    }, function (_unresolved_11) {
      BattleMainDataControl = _unresolved_11.BattleMainDataControl;
    }, function (_unresolved_12) {
      ItemData = _unresolved_12.ItemData;
    }, function (_unresolved_13) {
      GameplayViewDataMgr = _unresolved_13.GameplayViewDataMgr;
    }, function (_unresolved_14) {
      PayData = _unresolved_14.PayData;
    }, function (_unresolved_15) {
      RoleData = _unresolved_15.RoleData;
    }, function (_unresolved_16) {
      HeroData = _unresolved_16.HeroData;
    }, function (_unresolved_17) {
      HeroTeamControl = _unresolved_17.HeroTeamControl;
    }, function (_unresolved_18) {
      HeroDataControl = _unresolved_18.HeroDataControl;
    }, function (_unresolved_19) {
      SettingRedManager = _unresolved_19.SettingRedManager;
    }, function (_unresolved_20) {
      SignInGiftData = _unresolved_20.SignInGiftData;
    }, function (_unresolved_21) {
      ActivityData = _unresolved_21.ActivityData;
    }, function (_unresolved_22) {
      BattlePassDataMgr = _unresolved_22.BattlePassDataMgr;
    }, function (_unresolved_23) {
      GameUtil = _unresolved_23.GameUtil;
    }, function (_unresolved_24) {
      FincaFightData = _unresolved_24.FincaFightData;
    }, function (_unresolved_25) {
      ChannelMgr = _unresolved_25.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0cd0fZDPStIdLZGmQSA5W5v", "HeroRed", undefined);
      /*
       * @Date: 2024-05-16 10:40:15
       * @计算英雄红点逻辑
       * @LastEditors: wzq
       * @LastEditTime: 2024-11-20 13:53:37
       */


      _export("HeroRed", HeroRed = class HeroRed {
        constructor() {
          this.initHeroRed = false;
        }

        static get ins() {
          if (this.instance == null) {
            this.instance = new HeroRed();
          }

          return this.instance;
        }

        init() {
          this.initHeroRed = true;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResolve, this.red_one_click_Resolve, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroAutoAscend, this.red_one_click_up_star, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel, this.red_one_hero_level_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupStar, this.red_one_hero_star_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResonanceLevel, this.red_one_hero_resonance_level, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroresonanceStar, this.red_one_hero_resonance_star, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroPainting, this.red_painting_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroDrug, this.red_drug_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGene, this.red_Gene_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGacha, this.red_Gacha_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, this.red_ads_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).TenGacha, this.red_ten_gacha, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).TenBookGacha, this.red_ten_book_gacha, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroRecommend, this.red_hero_recommend_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroBook, this.red_hero_book_up, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GoldBuy, this.red_GoldBuy, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyFreeTimes, this.red_ChallengeDailyFreeTimes, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyAward, this.red_ChallengeDailyAward, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChapterAward, this.red_chapterAward, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Hand_book, this.red_Hand_book, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).First_Recharge, this.red_first_recharge, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Seven_Gift_Pack, this.red_seven_gift_pack, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Jade, this.red_wear_jade, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Equip, this.red_wear_equip, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen, this.red_equip_strengthen, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Feng_Yun_Rank, this.red_feng_yun_rank, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Head_Icon_Red, this.red_head_icon, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Skill, this.red_guild_skill, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Apply, this.red_guild_apply, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Sign, this.red_guild_sign, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Activity, this.red_guild_activity, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).SignGiftRed, this.red_sign_gift, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Pass, this.red_combine_pass, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Grow, this.red_combine_grow, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Shop, this.red_combine_shop, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Recharge, this.red_combine_charge, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroReplace, this.red_hero_replace, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Free_Fight_Token, this.red_free_fight_token, this);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.registerCalculateFb((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).PVP_Fight_Team, this.red_pvp_fight_team, this);
          this.refreshHeroRedData();
        }
        /* 刷新英雄红点数据 */


        refreshHeroRedData() {
          if (!this.initHeroRed) {
            return;
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupLevel);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroupStar);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroDrug);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGene);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroGacha);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).TenGacha);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).TenBookGacha);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResolve);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroAutoAscend);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroResonanceLevel);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroresonanceStar);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroPainting);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroRecommend);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroBook);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GoldBuy);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Hand_book);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Equip);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Jade);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Equip_Strengthen);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Head_Icon_Red);
        }

        red_pvp_fight_team() {
          let stateToChange = {};

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FincaFight)) {
            return false;
          }

          stateToChange[1] = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getHeroEmptyIndex() !== 0;
          stateToChange[2] = (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.getBookEmptyIndex() !== 0;
          return stateToChange;
        }

        red_free_fight_token() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FincaFight)) {
            return false;
          }

          return (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.freeTimes > 0;
        }

        red_sign_gift() {
          return (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.canReceive();
        }

        red_guild_activity() {
          if (!(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild()) {
            return false;
          }

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Association)) {
            return false;
          }

          let stateToChange = {};
          let isBargin = false;
          let isMinPrice = false;

          for (let i = 0; i < 3; i++) {
            const str = "gift_btn" + (i + 1);
            isBargin = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getIsCanBargain(str); //是否可以拼多多

            isMinPrice = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.getIsMinPrice(str); //是否是最低价

            stateToChange[str] = isBargin || isMinPrice;
          }

          return stateToChange;
        }

        red_guild_sign() {
          if (!(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild()) {
            return false;
          }

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Association)) {
            return false;
          }

          const guildInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo(); // const guildSignTab = tab.getData().GuildSignInTableById.getValue(guildInfo.signTimes + 1);
          // if (guildSignTab) {
          //     const costDiamond = guildSignTab.SignInCostDiamond;
          //     if (RoleData.ins.diamond >= costDiamond) {
          //         return true
          //     }
          // }

          return guildInfo.signTimes < 1;
        }

        red_guild_apply() {
          if (!(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild()) {
            return false;
          }

          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Association)) {
            return false;
          }

          const memberData = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getMemberData((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.id);
          const guildPositionTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildPositionTableByPosition.getValue(memberData.job);
          return (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.guildRequests.length > 0 && guildPositionTab.Proces;
        }

        red_guild_skill() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Association)) {
            return false;
          }

          if (!(_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getInGuild()) {
            return false;
          }

          let stateToChange = {};

          for (let i = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Assassin; i <= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).HeroClass.HeroClass_Warrior; i++) {
            stateToChange[i] = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
              error: Error()
            }), AssociationData) : AssociationData).ins.isMaterialEnough(i).isEnough;
          }

          return stateToChange;
        }

        red_seven_gift_pack() {
          const newDate = new Date((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.createTime * 1000);
          const tomorrow = new Date(newDate.getFullYear(), newDate.getMonth(), newDate.getDate() + 1);
          const times = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000;
          let nowDay = 1;

          if (times > 0) {
            nowDay = Math.ceil(((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime() - tomorrow.getTime() / 1000) / 86400) + 1;
          }

          if (nowDay > 7) {
            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.SevenGiftPack) {
              return Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.SevenGiftPack) < 2;
            }
          } else {
            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.SevenGiftPack) {
              return Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.SevenGiftPack) < 1;
            } else {
              return Number(Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.SevenGiftPack)) < 1;
            }
          }

          return false;
        }

        red_first_recharge() {
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FirstRecharge);

          if (!(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.openFirstRecharge) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.openFirstRecharge = "0";
          } else {
            if (isNaN(Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.openFirstRecharge))) {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.openFirstRecharge = String(Number(Boolean((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData.openFirstRecharge)));
            }
          }

          const openFirstRecharge = Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.openFirstRecharge);
          let rechargeData = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.getFirstRechargeTable();

          if (rechargeData) {
            return isOpen && openFirstRecharge < rechargeData.Id;
          }

          return false;
        }

        red_Hand_book() {
          let isRed = false;
          const tabs = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().OpenFunctionTable;
          const showTabs = [];

          for (let i = 0; i < tabs.length; i++) {
            const openTab = tabs[i];

            if (openTab.ShowType === 0) {
              continue;
            }

            showTabs.push(openTab);
          }

          for (let i = 0; i < showTabs.length; i++) {
            let listItem = showTabs[i];
            const funcData = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.getOpenFunctionData(listItem.Name);

            if (funcData && !funcData.isReceivedRewards && funcData.isOpen && listItem.ShowType === 1) {
              isRed = true;
              break;
            }
          }

          return isRed;
        }

        red_chapterAward() {
          const clearIds = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds();
          const FirstRewardIds = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getReceiveFirstRewardIds();
          let map = new Map();
          ;

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

          return haveAward;
        }

        red_ChallengeDailyFreeTimes() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Challenge)) {
            return false;
          }

          let stateToChange = {};
          Object.keys(_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).forEach(key => {
            const _key = Number(key);

            if (!isNaN(_key) && _key !== (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE) {
              const curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
                error: Error()
              }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(_key);

              if (curExportInfo.clearedStageIds.length === 0) {
                stateToChange[_key] = false;
              } else {
                const sweepInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
                  error: Error()
                }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getSweepInfo(_key);
                stateToChange[_key] = sweepInfo.freeTimes > 0;
              }
            }
          });
          return stateToChange;
        }

        red_ChallengeDailyAward() {
          if (!(_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Challenge)) {
            return false;
          }

          let stateToChange = {};
          Object.keys(_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).forEach(key => {
            const _key = Number(key);

            if (!isNaN(_key) && _key !== (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE) {
              const curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
                error: Error()
              }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(_key);

              if (curExportInfo.clearedStageIds.length === 0) {
                stateToChange[_key] = false;
              } else {
                const curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
                  error: Error()
                }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(_key);
                stateToChange[_key] = false;

                for (let i = 0; i < curExportInfo.clearedStageIds.length; i++) {
                  const fightId = curExportInfo.clearedStageIds[i];
                  const pveTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().PveClearStageTableByStageId.getValue(fightId);

                  if (pveTab && curExportInfo.receivedFirstRewardStageIds.indexOf(fightId) === -1) {
                    stateToChange[_key] = true;
                    break;
                  }
                }
              }
            }
          });
          return stateToChange;
        } // 购买金币红点功能关闭


        red_GoldBuy() {
          // 是否功能开启
          return false; // const isOpen = OpenFunctionMgr.ins.checkFunctionIsOpen(tab.OpenFunctionName.OpenFunctionName_BuyGold)
          // const curAdTimes = AdMgr.ins.getAdCountByType(tab.AdType.AdType_BuyGold);
          // const maxAdTimes = AdMgr.ins.getAdCountMaxByType(tab.AdType.AdType_BuyGold);
          // const isCloseBuyPop = SettingRedManager.ins.getSetting("GoldBuy");
          // return maxAdTimes > curAdTimes && !isCloseBuyPop && isOpen;
        }
        /* 图签可领取奖励红点 */


        red_hero_book_up() {
          let stateToChange = {};

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().HeroTable.length; i++) {
            const heroTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().HeroTable[i];
            const itemId = heroTab.Id;
            const awardMap = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getBookReceivedIds();
            const awardObj = awardMap.get(itemId);
            stateToChange[itemId] = awardObj && !awardObj.isReceived;
          }

          return stateToChange;
        }
        /* 推荐阵容红点 */


        red_hero_recommend_up() {
          let stateToChange = {};

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RecommendTeamTable.length; i++) {
            const _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RecommendTeamTable[i];
            let _haveCount = 0;

            for (let i = 0; i < _tab.HeroIdList.length; i++) {
              let itemId = _tab.HeroIdList[i];
              let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getByItemId(itemId);

              if (heroInfo) {
                _haveCount++;
              }
            }

            const map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getRecommendTeamIds();
            const countEnough = _haveCount >= _tab.HeroIdList.length;
            const isGot = map.get(_tab.Id);

            const _canRecive = countEnough && !isGot;

            stateToChange[_tab.Id] = _canRecive;
          }

          return stateToChange;
        }
        /* 广告红点逻辑 */


        red_ads_up() {
          let stateToChange = {};
          Object.keys((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType).forEach(key => {
            const _key = Number(key);

            if (!isNaN(_key) && _key !== (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AdType.AdType_None) {
              if (_key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_Gacha1001) {
                if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaBook)) {
                  this.addAdState(stateToChange, _key);
                } else {
                  stateToChange[_key] = false;
                }
              } else if (_key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_BuyDailyShop) {
                if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_DailyShop)) {
                  this.addAdState(stateToChange, _key);
                } else {
                  stateToChange[_key] = false;
                }
              } else if (_key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_SpecialGiftDaily) {
                if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftDaily)) {
                  this.addAdState(stateToChange, _key);
                } else {
                  stateToChange[_key] = false;
                }
              } else if (_key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_SpecialGiftWeekly) {
                if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftWeekly)) {
                  this.addAdState(stateToChange, _key);
                } else {
                  stateToChange[_key] = false;
                }
              } else if (_key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AdType.AdType_SpecialGiftMonthly) {
                if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                  error: Error()
                }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_SpecialGiftMonthly)) {
                  this.addAdState(stateToChange, _key);
                } else {
                  stateToChange[_key] = false;
                }
              } else {
                this.addAdState(stateToChange, _key);
              }
            }
          });
          return stateToChange;
        }

        addAdState(stateToChange, key) {
          const curCount = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(key);
          const maxCount = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(key);
          let isClosePop = false;

          if (key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha101 || key == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_Gacha301) {
            isClosePop = (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.getSetting("GachaAds");
          }

          stateToChange[key] = maxCount > curCount && !isClosePop;
        }
        /* 保底抽红点 */


        red_Gacha_up() {
          let stateToChange = {};
          const itemArr = [51, 81, 82];

          for (let i = 0; i < itemArr.length; i++) {
            if (i == 2) {
              if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaBookSR)) {
                const havaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(itemArr[i]);
                stateToChange[i + 1] = havaCount >= 1000;
              } else {
                stateToChange[i + 1] = false;
              }
            } else if (i == 0) {
              if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
                error: Error()
              }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaHeroSSR)) {
                const havaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(itemArr[i]);
                stateToChange[i + 1] = havaCount >= 1000;
              } else {
                stateToChange[i + 1] = false;
              }
            } else {
              const havaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(itemArr[i]);
              stateToChange[i + 1] = havaCount >= 1000;
            }
          }

          return stateToChange;
        }
        /* 十连抽红点 */


        red_ten_gacha() {
          let stateToChange = {};
          let isClosePop = (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.getSetting("TenGacha");
          const itemArr = [101, 102, 103];

          for (let i = 0; i < itemArr.length; i++) {
            const id = itemArr[i];
            const havaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(id);
            stateToChange[id] = havaCount >= 10 && !isClosePop;
          }

          return stateToChange;
        }
        /* 十连武器抽红点 */


        red_ten_book_gacha() {
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_GachaBook);

          if (isOpen) {
            let stateToChange = {};
            let isClosePop = (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
              error: Error()
            }), SettingRedManager) : SettingRedManager).ins.getSetting("TenBookGacha");
            const id = 111;
            const havaCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(id);
            stateToChange[id] = havaCount >= 10 && !isClosePop;
            return stateToChange;
          } else {
            return false;
          }
        }
        /* 检测一键遣散 */


        red_one_click_Resolve() {
          return (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getAllResolveHeros().size > 0;
        }
        /* 检测一键升星 */


        red_one_click_up_star() {
          return (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getOneClickList().size > 0;
        }
        /* 检测上阵英雄是否可以升级 */


        red_one_hero_level_up() {
          let stateToChange = {};
          let teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (let i = 0; i < teamSlots.length; i++) {
            let v = teamSlots[i];
            let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(v.heroId);

            if (heroInfo) {
              stateToChange[String(v.heroId)] = heroInfo.checkLevelUp() > heroInfo.getHeroLevel();
            }
          }

          return stateToChange;
        }
        /* 基因红点 */


        red_Gene_up() {
          const smallLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.smallGeneLevel;
          const bigLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel;
          const nextSmallGenTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GeneLevelTableById.getValue(smallLevel + 1);
          const nextBigGenTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GeneLevelTableById.getValue(bigLevel + 10001);
          const level = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level;

          if (nextSmallGenTab) {
            const smallNeedId = nextSmallGenTab.MaterialIdList[0];
            const smallNeedCount = nextSmallGenTab.MaterialCountList[0];
            const haveSmallCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(smallNeedId);

            if (level >= nextSmallGenTab.UnlockArgs && haveSmallCount >= smallNeedCount) {
              return true;
            }
          }

          if (nextBigGenTab) {
            const bigNeedId = nextBigGenTab.MaterialIdList[0];
            const bigNeedCount = nextBigGenTab.MaterialCountList[0];
            const haveBigCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(bigNeedId);

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
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Drug);

          for (let i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ElixirTable.length; i++) {
            const elixirTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ElixirTable[i];
            const elixirId = elixirTab.Id;
            const elixirCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
              error: Error()
            }), ItemData) : ItemData).ins.getCount(elixirId);
            const useCount = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getElixirCountById(elixirId);
            const playLevel = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.level;
            let maxCount = 0;

            for (let k = elixirTab.PlayerLv.length - 1; k >= 0; k--) {
              const level = elixirTab.PlayerLv[k];

              if (playLevel > level) {
                maxCount = elixirTab.MaxCount[k];
                break;
              }
            }

            const isNotFull = useCount < maxCount;
            stateToChange[elixirId] = elixirCount > 0 && isNotFull && isOpen;
          }

          return stateToChange;
        }
        /* 检测上阵英雄是否可以升星 */


        red_one_hero_star_up() {
          let stateToChange = {};
          let teamSlots = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

          for (let i = 0; i < teamSlots.length; i++) {
            let v = teamSlots[i];
            let heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(v.heroId);

            if (heroInfo) {
              stateToChange[String(v.heroId)] = heroInfo.checkStarUpMaterialEnough();
            }
          }

          return stateToChange;
        }
        /* 检测当前上阵英雄是否有可替换英雄 */


        red_hero_replace() {
          let stateToChange = {};
          const map = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.getCanReplaceHeros();
          map.forEach((value, key) => {
            stateToChange[key] = true;
          });
          return stateToChange;
        }
        /* 检测等级共鸣 */


        red_one_hero_resonance_level() {
          // 开启条件
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_HeroLevelResonance);

          if (!isOpen) {
            return false;
          }

          let Leveltab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceLevelTab();

          if (Leveltab.NeedLv === 0) {
            return false;
          }

          return (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamLevel() >= Leveltab.NeedLv;
        }
        /* 检测星级共鸣 */


        red_one_hero_resonance_star() {
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_HeroStarResonanceTable);

          if (!isOpen) {
            return false;
          }

          let startab = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getResonanceStarTab();

          if (startab.NeedStar === 0) {
            return false;
          }

          return (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getMinTeamStar() >= startab.NeedStar;
        }
        /* 检测绘卷 */


        red_painting_up() {
          const stateToChange = {};
          const teamSort = [1, 2, 3, 4, 5]; //射手-刺客-法师-牧师-战士

          for (let i = 0; i < teamSort.length; i++) {
            stateToChange[teamSort[i]] = {};
            const list = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
              error: Error()
            }), HeroDataControl) : HeroDataControl).ins.getPaintingListByVocation(teamSort[i]);
            const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_ScrollPainting);

            for (let k = 0; k < list.length; k++) {
              const heroId = list[k];
              const activeStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.paintingActive.get(heroId);
              const maxStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                error: Error()
              }), HeroDataControl) : HeroDataControl).ins.getMaxPaintingStar(heroId);
              let star = activeStar ? activeStar : 0;
              let isRed = false;

              if (maxStar && maxStar > star && isOpen) {
                isRed = true;
              }

              stateToChange[teamSort[i]][heroId] = isRed;
            }
          }

          return stateToChange;
        }

        red_wear_jade() {
          let stateToChange = {};
          const teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Jade);

          if (!isOpen) {
            return false;
          }

          const list = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getJadeEquipInfos();

          for (let i = 0; i < teams.length; i++) {
            let maxQulity = 0;
            let currInfo = null;
            const heroClass = teams[i].heroClass;
            const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(teams[i].heroId);

            for (let k = 0; k < list.length; k++) {
              const equipData = list[k];

              if (equipData.heroClass === heroInfo.heroTable.Class) {
                currInfo = equipData;
              }

              if (!equipData.isWear && equipData.quality > maxQulity) {
                maxQulity = equipData.quality;
              }
            }

            if (maxQulity) {
              if (currInfo) {
                stateToChange[String(heroClass)] = maxQulity - currInfo.quality > 0;
              } else {
                stateToChange[String(heroClass)] = true;
              }
            } else {
              stateToChange[String(heroClass)] = false;
            }
          }

          return stateToChange;
        }

        red_wear_equip() {
          let stateToChange = {};
          const teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Equipment);

          for (let i = 0; i < teams.length; i++) {
            const heroClass = teams[i].heroClass;
            stateToChange[String(heroClass)] = this.getNewEquip(heroClass) && isOpen;
          }

          return stateToChange;
        }

        red_equip_strengthen() {
          let stateToChange = {};
          const teams = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.getTeam();
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Equipment);

          for (let i = 0; i < teams.length; i++) {
            const heroClass = teams[i].heroClass;
            stateToChange[String(heroClass)] = this.materialEnoughtFourEquip(heroClass) && isOpen;
          }

          return stateToChange;
        } // 装备可以一键升级


        materialEnoughtFourEquip(heroClass) {
          let equipList = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getWearEquipInfosByHeroClass(heroClass);
          let currEquips = [];

          for (let i = 0; i < equipList.length; i++) {
            if (i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EquipType.EquipType_Feather) {
              currEquips.push(equipList[i]);
            }
          }

          if (currEquips.length < 4) {
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
                let items = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Moneys);
                items = items.concat((_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).convertItemInfosByList(currEquip.enhanceUpgradeTable.Materials));
                totals = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
                  error: Error()
                }), GameUtil) : GameUtil).itemsAddItems(totals, items);

                if ((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.isItemsEnough(totals)) {
                  types.push(currEquip.equipTable.Type);
                } else {
                  continue;
                }
              }
            }

            if (types.length === 4) {
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }

        getNewEquip(heroClass) {
          let equipList = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipBagByHeroClass(heroClass);
          let types = [(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Gloves, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Clothing, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Cloak, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EquipType.EquipType_Hat];
          let slots = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
            error: Error()
          }), EquipData) : EquipData).ins.getEquipContainerDataByHeroClass(heroClass).slotData;
          let ids = [];

          for (let key in types) {
            let type = types[key];
            let slot = slots[type];

            if (slot && slot.equipId != 0) {
              let equipInfo = (_crd && EquipData === void 0 ? (_reportPossibleCrUseOfEquipData({
                error: Error()
              }), EquipData) : EquipData).ins.getEquipInfoById(slot.equipId);
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

          return ids.length > 0;
        }

        red_feng_yun_rank() {
          let stateToChange = {};
          const map = (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.getMapData();

          if (map) {
            Object.keys(map).forEach((key, value) => {
              const honorRollData = map[key];
              const endTime = honorRollData.activityEndTime;
              const lastTimer = Number(endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();
              stateToChange[key] = {};

              for (let i = 0; i < honorRollData.tasks.length; i++) {
                const taskData = honorRollData.tasks[i];
                const taskTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().TaskTableById.getValue(taskData.taskTabId);
                stateToChange[key][taskData.id] = !taskData.isReceived && taskData.progress >= taskTab.FinishParam1 && lastTimer > 0;
              }
            });
          }

          return stateToChange;
        }

        red_head_icon() {
          let stateToChange = {};

          for (let i = 0; i <= 1; i++) {
            if (i === 0) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData["newHeadIcon"]) {
                stateToChange[0] = {};
                const newHeadIconArr = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData["newHeadIcon"].split(",");

                for (let k = 0; k < newHeadIconArr.length; k++) {
                  stateToChange[0][newHeadIconArr[k]] = true;
                }
              } else {
                stateToChange[0] = false;
              }
            }

            if (i === 1) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.clientData["newHeadFrame"]) {
                stateToChange[1] = {};
                const newHeadFrameArr = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.clientData["newHeadFrame"].split(",");

                for (let k = 0; k < newHeadFrameArr.length; k++) {
                  stateToChange[1][newHeadFrameArr[k]] = true;
                }
              } else {
                stateToChange[1] = false;
              }
            }
          }

          return stateToChange;
        }

        red_combine_grow() {
          let stateToChange = {};
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];

            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
              const id = info.activityTable.ActivityIds[k];
              const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ActivityTableByActivityId.getValue(id);
              const heroGrowData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.getHeroGrowData(id);

              if (heroGrowData && activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityHeroGrow) {
                const heroId = activityInfo.Param1;
                const maxStar = (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
                  error: Error()
                }), HeroDataControl) : HeroDataControl).ins.getMaxPaintingStar(heroId);
                const receiveLen = heroGrowData.receivedFreeRewardStars.length;
                stateToChange[info.TabId] = receiveLen <= maxStar - 5;
              }
            }
          }

          return stateToChange;
        }

        red_combine_pass() {
          let stateToChange = {};
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];

            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
              const id = info.activityTable.ActivityIds[k];
              const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ActivityTableByActivityId.getValue(id);

              if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_BattlePassSignIn1) {
                const passId = activityInfo.Param1;
                stateToChange[info.TabId] = (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
                  error: Error()
                }), BattlePassDataMgr) : BattlePassDataMgr).ins.getAllReceiveTaskId(passId).length > 0;
              }
            }
          }

          return stateToChange;
        }

        red_combine_shop() {
          let stateToChange = {};
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];

            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
              const id = info.activityTable.ActivityIds[k];
              const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ActivityTableByActivityId.getValue(id);

              if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityMall) {
                const mallId = activityInfo.Param1;
                let listData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.getMallItemTabsById(mallId);

                if (listData.length > 0) {
                  const adType = listData[0].AdType;
                  const maxAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
                    error: Error()
                  }), AdMgr) : AdMgr).ins.getAdCountMaxByType(adType);
                  const curAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
                    error: Error()
                  }), AdMgr) : AdMgr).ins.getAdCountByType(adType);
                  stateToChange[info.TabId] = curAdTimes < maxAdTimes;
                }
              }
            }
          }

          return stateToChange;
        }

        red_combine_charge() {
          let stateToChange = {};
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];

            for (let k = 0; k < info.activityTable.ActivityIds.length; k++) {
              const id = info.activityTable.ActivityIds[k];
              const activityInfo = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).getData().ActivityTableByActivityId.getValue(id);

              if (activityInfo.Type === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityCumulativeRecharge) {
                const acitivityId = activityInfo.Param1;
                const Tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.getAllTabsByRechageId(acitivityId);
                const serverData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                  error: Error()
                }), ActivityData) : ActivityData).ins.getRechargeServerData(acitivityId);

                if (serverData) {
                  const type = this.getPayType();

                  for (let i = 0; i < Tabs.length; i++) {
                    const tabData = Tabs[i];

                    if (serverData.payAmount >= tabData[type]) {
                      if (serverData.receivedRewardIds.indexOf(tabData.IndexId) === -1) {
                        stateToChange[info.TabId] = true;
                      }
                    }
                  }
                } else {
                  stateToChange[info.TabId] = false;
                }
              }
            }
          }

          return stateToChange;
        }

        checkWearEquip(data) {
          const isInTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(data.id);
          return (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Equip, String(data.heroTable.Class)) && Boolean(isInTeam);
        }

        checkWearJade(data) {
          const isInTeam = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.heroInTeam(data.id);
          return (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Wear_Jade, String(data.heroTable.Class)) && Boolean(isInTeam);
        }

        getPayType() {
          // 判断当前的货币类型
          const payType = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).channelTab.Currency;

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

      });

      HeroRed.instance = null;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=76dc28f8e1c42726e325f316d8500423f832790e.js.map