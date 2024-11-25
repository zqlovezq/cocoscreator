System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, tab;

  _export("tab", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7821d9AevFH/4Yqfx0RJsWX", "table_gen", undefined);

      (function (_tab) {
        var Data = null;

        function getData() {
          return Data;
        }

        _tab.getData = getData;

        function InitData(json) {
          Data = Table.FromJSON(json);
        }

        _tab.InitData = InitData;

        let ViewType = /*#__PURE__*/function (ViewType) {
          ViewType[ViewType["ViewType_Diy"] = 0] = "ViewType_Diy";
          ViewType[ViewType["ViewType_View"] = 1] = "ViewType_View";
          ViewType[ViewType["ViewType_Pop"] = 2] = "ViewType_Pop";
          ViewType[ViewType["ViewType_Persist"] = 3] = "ViewType_Persist";
          ViewType[ViewType["ViewType_Box"] = 4] = "ViewType_Box";
          ViewType[ViewType["ViewType_Tips"] = 5] = "ViewType_Tips";
          ViewType[ViewType["ViewType_Award"] = 6] = "ViewType_Award";
          return ViewType;
        }({});

        _tab.ViewType = ViewType;

        let ViewZIndex = /*#__PURE__*/function (ViewZIndex) {
          ViewZIndex[ViewZIndex["ViewZIndex_View"] = 100] = "ViewZIndex_View";
          ViewZIndex[ViewZIndex["ViewZIndex_Pop"] = 200] = "ViewZIndex_Pop";
          ViewZIndex[ViewZIndex["ViewZIndex_Box"] = 300] = "ViewZIndex_Box";
          ViewZIndex[ViewZIndex["ViewZIndex_Tips"] = 400] = "ViewZIndex_Tips";
          ViewZIndex[ViewZIndex["ViewZIndex_Award"] = 500] = "ViewZIndex_Award";
          ViewZIndex[ViewZIndex["ViewZIndex_Loading"] = 600] = "ViewZIndex_Loading";
          ViewZIndex[ViewZIndex["ViewZIndex_Reconnect"] = 700] = "ViewZIndex_Reconnect";
          return ViewZIndex;
        }({});

        _tab.ViewZIndex = ViewZIndex;

        let Module = /*#__PURE__*/function (Module) {
          Module[Module["Module_Unknown"] = 0] = "Module_Unknown";
          Module[Module["Module_LoginView"] = 1] = "Module_LoginView";
          Module[Module["Module_HomeMainView"] = 2] = "Module_HomeMainView";
          Module[Module["Module_ConfirmPop"] = 3] = "Module_ConfirmPop";
          Module[Module["Module_DynamicAtlas"] = 4] = "Module_DynamicAtlas";
          Module[Module["Module_Reconnect"] = 5] = "Module_Reconnect";
          Module[Module["Module_AzheGmPop"] = 6] = "Module_AzheGmPop";
          Module[Module["Module_FightUIView"] = 7] = "Module_FightUIView";
          Module[Module["Module_BattleMainView"] = 8] = "Module_BattleMainView";
          Module[Module["Module_CongratulationPop"] = 9] = "Module_CongratulationPop";
          Module[Module["Module_BattleMainRewardPop"] = 10] = "Module_BattleMainRewardPop";
          Module[Module["Module_HeroBagView"] = 11] = "Module_HeroBagView";
          Module[Module["Module_BagPop"] = 12] = "Module_BagPop";
          Module[Module["Module_DrugView"] = 13] = "Module_DrugView";
          Module[Module["Module_PaintingView"] = 14] = "Module_PaintingView";
          Module[Module["Module_RareBookView"] = 15] = "Module_RareBookView";
          Module[Module["Module_TalentView"] = 16] = "Module_TalentView";
          Module[Module["Module_EquipmentView"] = 17] = "Module_EquipmentView";
          Module[Module["Module_EquipResolvePop"] = 18] = "Module_EquipResolvePop";
          Module[Module["Module_EquipMasterPop"] = 19] = "Module_EquipMasterPop";
          Module[Module["Module_RecruitView"] = 20] = "Module_RecruitView";
          Module[Module["Module_JadeDetailPop"] = 21] = "Module_JadeDetailPop";
          Module[Module["Module_JadeSelectPop"] = 22] = "Module_JadeSelectPop";
          Module[Module["Module_JadeRecastPop"] = 23] = "Module_JadeRecastPop";
          Module[Module["Module_JadeSkillPreviewPop"] = 24] = "Module_JadeSkillPreviewPop";
          Module[Module["Module_JadePreviewPop"] = 25] = "Module_JadePreviewPop";
          Module[Module["Module_SkinPreviewPop"] = 26] = "Module_SkinPreviewPop";
          Module[Module["Module_RareBookDetailView"] = 27] = "Module_RareBookDetailView";
          Module[Module["Module_RareBookRewardPreviewPop"] = 28] = "Module_RareBookRewardPreviewPop";
          Module[Module["Module_RareBookGuaranteedPop"] = 29] = "Module_RareBookGuaranteedPop";
          Module[Module["Module_RareBookLevelPreviewPop"] = 30] = "Module_RareBookLevelPreviewPop";
          Module[Module["Module_RareBookEquipPop"] = 31] = "Module_RareBookEquipPop";
          Module[Module["Module_RareBookGroupPop"] = 32] = "Module_RareBookGroupPop";
          Module[Module["Module_RareBookExchangePop"] = 33] = "Module_RareBookExchangePop";
          Module[Module["Module_HeroDetailView"] = 34] = "Module_HeroDetailView";
          Module[Module["Module_HeroResolvePop"] = 35] = "Module_HeroResolvePop";
          Module[Module["Module_HeroResonancePop"] = 36] = "Module_HeroResonancePop";
          Module[Module["Module_HeroSkillPop"] = 37] = "Module_HeroSkillPop";
          Module[Module["Module_HeroRecommendPop"] = 38] = "Module_HeroRecommendPop";
          Module[Module["Module_HeroAutoAscendPop"] = 39] = "Module_HeroAutoAscendPop";
          Module[Module["Module_HeroResetPop"] = 40] = "Module_HeroResetPop";
          Module[Module["Module_GameplayView"] = 41] = "Module_GameplayView";
          Module[Module["Module_InstanceZonesView"] = 42] = "Module_InstanceZonesView";
          Module[Module["Module_InstanceRewardPop"] = 43] = "Module_InstanceRewardPop";
          Module[Module["Module_PatrolPop"] = 44] = "Module_PatrolPop";
          Module[Module["Module_EquipmentDetailPop"] = 45] = "Module_EquipmentDetailPop";
          Module[Module["Module_CrazyChickenPop"] = 46] = "Module_CrazyChickenPop";
          Module[Module["Module_LimitedBenefitsPop"] = 47] = "Module_LimitedBenefitsPop";
          Module[Module["Module_FirstRechargePop"] = 48] = "Module_FirstRechargePop";
          Module[Module["Module_NewPlayerSignInView"] = 49] = "Module_NewPlayerSignInView";
          Module[Module["Module_SignInView"] = 50] = "Module_SignInView";
          Module[Module["Module_HeroRoadView"] = 51] = "Module_HeroRoadView";
          Module[Module["Module_HeroMaterialPop"] = 52] = "Module_HeroMaterialPop";
          Module[Module["Module_HandbookPop"] = 53] = "Module_HandbookPop";
          Module[Module["Module_MailPop"] = 54] = "Module_MailPop";
          Module[Module["Module_MailDeletePop"] = 55] = "Module_MailDeletePop";
          Module[Module["Module_CommonTipsPop"] = 56] = "Module_CommonTipsPop";
          Module[Module["Module_ItemInfoPop"] = 57] = "Module_ItemInfoPop";
          Module[Module["Module_Hero7GiftPackPop"] = 58] = "Module_Hero7GiftPackPop";
          Module[Module["Module_SecretBook14GiftPackPop"] = 59] = "Module_SecretBook14GiftPackPop";
          Module[Module["Module_PaintingAttributePop"] = 60] = "Module_PaintingAttributePop";
          Module[Module["Module_PaintingLvupPop"] = 61] = "Module_PaintingLvupPop";
          Module[Module["Module_FengyunRankingMainView"] = 62] = "Module_FengyunRankingMainView";
          Module[Module["Module_FengyunRankingView"] = 63] = "Module_FengyunRankingView";
          Module[Module["Module_MonthlyCardView"] = 64] = "Module_MonthlyCardView";
          Module[Module["Module_WelfareActivityMainView"] = 65] = "Module_WelfareActivityMainView";
          Module[Module["Module_VipPrivilegeView"] = 66] = "Module_VipPrivilegeView";
          Module[Module["Module_ChatPop"] = 67] = "Module_ChatPop";
          Module[Module["Module_ServerChoosePop"] = 68] = "Module_ServerChoosePop";
          Module[Module["Module_FriendPop"] = 69] = "Module_FriendPop";
          Module[Module["Module_TopWarView"] = 70] = "Module_TopWarView";
          Module[Module["Module_TopWarRankRewardPop"] = 71] = "Module_TopWarRankRewardPop";
          Module[Module["Module_PrestigePop"] = 72] = "Module_PrestigePop";
          Module[Module["Module_RankPop"] = 73] = "Module_RankPop";
          Module[Module["Module_RoleInfoPop"] = 74] = "Module_RoleInfoPop";
          Module[Module["Module_HomeSkinPop"] = 75] = "Module_HomeSkinPop";
          Module[Module["Module_RoleInfoDecorationsPop"] = 76] = "Module_RoleInfoDecorationsPop";
          Module[Module["Module_AssociationView"] = 77] = "Module_AssociationView";
          Module[Module["Module_NewHandGiftView"] = 78] = "Module_NewHandGiftView";
          Module[Module["Module_CycleGiftView"] = 79] = "Module_CycleGiftView";
          Module[Module["Module_ChapterGiftView"] = 80] = "Module_ChapterGiftView";
          Module[Module["Module_EveryDayChallengeView"] = 81] = "Module_EveryDayChallengeView";
          Module[Module["Module_EveryDayChallengeHelpPop"] = 82] = "Module_EveryDayChallengeHelpPop";
          Module[Module["Module_CommonHelpPop"] = 83] = "Module_CommonHelpPop";
          Module[Module["Module_HeroAttrPop"] = 84] = "Module_HeroAttrPop";
          Module[Module["Module_ForceUpPop"] = 85] = "Module_ForceUpPop";
          Module[Module["Module_CommonBlackTipsPop"] = 86] = "Module_CommonBlackTipsPop";
          Module[Module["Module_JadeSkillDetailPop"] = 87] = "Module_JadeSkillDetailPop";
          Module[Module["Module_HeroStarSpecialPop"] = 88] = "Module_HeroStarSpecialPop";
          Module[Module["Module_PlayerLvUpPop"] = 89] = "Module_PlayerLvUpPop";
          Module[Module["Module_MutationView"] = 90] = "Module_MutationView";
          Module[Module["Module_RareBookInfoItemPop"] = 91] = "Module_RareBookInfoItemPop";
          Module[Module["Module_WeaponPop"] = 92] = "Module_WeaponPop";
          Module[Module["Module_RecruitProbabilityPop"] = 93] = "Module_RecruitProbabilityPop";
          Module[Module["Module_RecruitGetPop"] = 94] = "Module_RecruitGetPop";
          Module[Module["Module_StarUpPop"] = 95] = "Module_StarUpPop";
          Module[Module["Module_RoleInfoRedemptionCodePop"] = 96] = "Module_RoleInfoRedemptionCodePop";
          Module[Module["Module_RoleInfoChangeNamePop"] = 97] = "Module_RoleInfoChangeNamePop";
          Module[Module["Module_RoleInfoHomeSkinPop"] = 98] = "Module_RoleInfoHomeSkinPop";
          Module[Module["Module_RoleInfoNoticePop"] = 99] = "Module_RoleInfoNoticePop";
          Module[Module["Module_TaskView"] = 100] = "Module_TaskView";
          Module[Module["Module_RecruitGuaranteePop"] = 101] = "Module_RecruitGuaranteePop";
          Module[Module["Module_RareBookGetPop"] = 102] = "Module_RareBookGetPop";
          Module[Module["Module_NewHeroPop"] = 103] = "Module_NewHeroPop";
          Module[Module["Module_CommonBoxTipsPop"] = 104] = "Module_CommonBoxTipsPop";
          Module[Module["Module_CheckRoleInfoPop"] = 105] = "Module_CheckRoleInfoPop";
          Module[Module["Module_CheckRoleInfoReportPop"] = 106] = "Module_CheckRoleInfoReportPop";
          Module[Module["Module_CheckRoleInfoHeroPop"] = 107] = "Module_CheckRoleInfoHeroPop";
          Module[Module["Module_ResourceBuyPop"] = 108] = "Module_ResourceBuyPop";
          Module[Module["Module_EnergyAccumulatePop"] = 109] = "Module_EnergyAccumulatePop";
          Module[Module["Module_MallMainView"] = 110] = "Module_MallMainView";
          Module[Module["Module_WarningPop"] = 111] = "Module_WarningPop";
          Module[Module["Module_RoguePop"] = 112] = "Module_RoguePop";
          Module[Module["Module_FightWinPop"] = 113] = "Module_FightWinPop";
          Module[Module["Module_FightLosePop"] = 114] = "Module_FightLosePop";
          Module[Module["Module_DiamondBuyPop"] = 115] = "Module_DiamondBuyPop";
          Module[Module["Module_ActivityMainView"] = 116] = "Module_ActivityMainView";
          Module[Module["Module_BattlePassView"] = 117] = "Module_BattlePassView";
          Module[Module["Module_ClimbingTowerMainView"] = 118] = "Module_ClimbingTowerMainView";
          Module[Module["Module_RookieTaskPop"] = 119] = "Module_RookieTaskPop";
          Module[Module["Module_ClimbingTowerTowerEveryDayRewardPop"] = 120] = "Module_ClimbingTowerTowerEveryDayRewardPop";
          Module[Module["Module_ClimbingTowerRewardPop"] = 121] = "Module_ClimbingTowerRewardPop";
          Module[Module["Module_JobMallShopView"] = 122] = "Module_JobMallShopView";
          Module[Module["Module_EquipFettersPop"] = 123] = "Module_EquipFettersPop";
          Module[Module["Module_FunctionUnlockPop"] = 124] = "Module_FunctionUnlockPop";
          Module[Module["Module_RecruitProProbabilityPop"] = 125] = "Module_RecruitProProbabilityPop";
          Module[Module["Module_RecruitFriendProbabilityPop"] = 126] = "Module_RecruitFriendProbabilityPop";
          Module[Module["Module_RareBookProbabilityPop"] = 127] = "Module_RareBookProbabilityPop";
          Module[Module["Module_RareBookSrProbabilityPop"] = 128] = "Module_RareBookSrProbabilityPop";
          Module[Module["Module_RecruitMustProbabilityPop"] = 129] = "Module_RecruitMustProbabilityPop";
          Module[Module["Module_CommunityPop"] = 130] = "Module_CommunityPop";
          Module[Module["Module_InspirePop"] = 131] = "Module_InspirePop";
          Module[Module["Module_EveryDayBuffPop"] = 132] = "Module_EveryDayBuffPop";
          Module[Module["Module_AssociationMainView"] = 133] = "Module_AssociationMainView";
          Module[Module["Module_AssociationApplyView"] = 134] = "Module_AssociationApplyView";
          Module[Module["Module_AssociationOperatePop"] = 135] = "Module_AssociationOperatePop";
          Module[Module["Module_AssociationInfoPop"] = 136] = "Module_AssociationInfoPop";
          Module[Module["Module_AssociationChangeFlagPop"] = 137] = "Module_AssociationChangeFlagPop";
          Module[Module["Module_AssociationLogPop"] = 138] = "Module_AssociationLogPop";
          Module[Module["Module_AssociationApplyListPop"] = 139] = "Module_AssociationApplyListPop";
          Module[Module["Module_AssociationGiftPop"] = 140] = "Module_AssociationGiftPop";
          Module[Module["Module_AssociationSkillPop"] = 141] = "Module_AssociationSkillPop";
          Module[Module["Module_AssociationTaskPop"] = 142] = "Module_AssociationTaskPop";
          Module[Module["Module_AssociationAttrPop"] = 143] = "Module_AssociationAttrPop";
          Module[Module["Module_AssociationBossView"] = 144] = "Module_AssociationBossView";
          Module[Module["Module_AssociationRankPop"] = 145] = "Module_AssociationRankPop";
          Module[Module["Module_AssociationRankRewardPop"] = 146] = "Module_AssociationRankRewardPop";
          Module[Module["Module_AssociationMainPop"] = 147] = "Module_AssociationMainPop";
          Module[Module["Module_AssociationCreatePop"] = 148] = "Module_AssociationCreatePop";
          Module[Module["Module_AssociationChangeNoticePop"] = 149] = "Module_AssociationChangeNoticePop";
          Module[Module["Module_AssociationChangeInfoPop"] = 150] = "Module_AssociationChangeInfoPop";
          Module[Module["Module_AssociationDonatePop"] = 151] = "Module_AssociationDonatePop";
          Module[Module["Module_AssociationSkillResetPop"] = 152] = "Module_AssociationSkillResetPop";
          Module[Module["Module_AssociationBossRewardPop"] = 153] = "Module_AssociationBossRewardPop";
          Module[Module["Module_FightAssociationBossResultPop"] = 154] = "Module_FightAssociationBossResultPop";
          Module[Module["Module_NewPlayerSignInPop"] = 155] = "Module_NewPlayerSignInPop";
          Module[Module["Module_ReviveTipsPop"] = 156] = "Module_ReviveTipsPop";
          Module[Module["Module_SignInGiftPop"] = 157] = "Module_SignInGiftPop";
          Module[Module["Module_CombineActivityMainView"] = 158] = "Module_CombineActivityMainView";
          Module[Module["Module_RecruitLimitView"] = 159] = "Module_RecruitLimitView";
          Module[Module["Module_BannerPop"] = 160] = "Module_BannerPop";
          Module[Module["Module_RecruitLimitProbabilityPop1000"] = 161] = "Module_RecruitLimitProbabilityPop1000";
          Module[Module["Module_FincaFightView"] = 162] = "Module_FincaFightView";
          Module[Module["Module_FincaFightStageView"] = 163] = "Module_FincaFightStageView";
          Module[Module["Module_FincaFightRankRewardPop"] = 164] = "Module_FincaFightRankRewardPop";
          Module[Module["Module_FincaFightLogPop"] = 165] = "Module_FincaFightLogPop";
          Module[Module["Module_ItemBuyPop"] = 166] = "Module_ItemBuyPop";
          Module[Module["Module_BattleMainRecordPop"] = 167] = "Module_BattleMainRecordPop";
          Module[Module["Module_ItemGetWayPop"] = 168] = "Module_ItemGetWayPop";
          return Module;
        }({});

        _tab.Module = Module;

        let AttrType = /*#__PURE__*/function (AttrType) {
          AttrType[AttrType["AttrType_None"] = 0] = "AttrType_None";
          AttrType[AttrType["AttrType_Attack"] = 1] = "AttrType_Attack";
          AttrType[AttrType["AttrType_Hp"] = 2] = "AttrType_Hp";
          AttrType[AttrType["AttrType_Defence"] = 3] = "AttrType_Defence";
          AttrType[AttrType["AttrType_BreakDefenceFixed"] = 4] = "AttrType_BreakDefenceFixed";
          AttrType[AttrType["AttrType_BreakDefencePer"] = 5] = "AttrType_BreakDefencePer";
          AttrType[AttrType["AttrType_Block"] = 6] = "AttrType_Block";
          AttrType[AttrType["AttrType_Critical"] = 7] = "AttrType_Critical";
          AttrType[AttrType["AttrType_CriticalDamageAdd"] = 8] = "AttrType_CriticalDamageAdd";
          AttrType[AttrType["AttrType_CriticalPoint"] = 9] = "AttrType_CriticalPoint";
          AttrType[AttrType["AttrType_ResistCriticalPoint"] = 10] = "AttrType_ResistCriticalPoint";
          AttrType[AttrType["AttrType_CriticalPer"] = 11] = "AttrType_CriticalPer";
          AttrType[AttrType["AttrType_ResistCriticalPer"] = 12] = "AttrType_ResistCriticalPer";
          AttrType[AttrType["AttrType_CriticalDamage"] = 13] = "AttrType_CriticalDamage";
          AttrType[AttrType["AttrType_ResistCriticalDamage"] = 14] = "AttrType_ResistCriticalDamage";
          AttrType[AttrType["AttrType_BulletSpeed"] = 15] = "AttrType_BulletSpeed";
          AttrType[AttrType["AttrType_DamagePer1"] = 16] = "AttrType_DamagePer1";
          AttrType[AttrType["AttrType_DefencePer1"] = 17] = "AttrType_DefencePer1";
          AttrType[AttrType["AttrType_HpPer"] = 18] = "AttrType_HpPer";
          AttrType[AttrType["AttrType_DamagePer2"] = 19] = "AttrType_DamagePer2";
          AttrType[AttrType["AttrType_DefencePer2"] = 20] = "AttrType_DefencePer2";
          AttrType[AttrType["AttrType_DamagePer3"] = 21] = "AttrType_DamagePer3";
          AttrType[AttrType["AttrType_DefencePer3"] = 22] = "AttrType_DefencePer3";
          AttrType[AttrType["AttrType_DamageAdd"] = 23] = "AttrType_DamageAdd";
          AttrType[AttrType["AttrType_DamageReduce"] = 24] = "AttrType_DamageReduce";
          AttrType[AttrType["AttrType_FinalDamage"] = 25] = "AttrType_FinalDamage";
          AttrType[AttrType["AttrType_FinalDamageReduce"] = 26] = "AttrType_FinalDamageReduce";
          AttrType[AttrType["AttrType_DamageResult"] = 27] = "AttrType_DamageResult";
          AttrType[AttrType["AttrType_HeroStar"] = 28] = "AttrType_HeroStar";
          AttrType[AttrType["AttrType_EquipSkill"] = 29] = "AttrType_EquipSkill";
          AttrType[AttrType["AttrType_AttackHeal"] = 30] = "AttrType_AttackHeal";
          AttrType[AttrType["AttrType_HealDeep"] = 31] = "AttrType_HealDeep";
          AttrType[AttrType["AttrType_AttackTear"] = 32] = "AttrType_AttackTear";
          AttrType[AttrType["AttrType_TearCoe"] = 33] = "AttrType_TearCoe";
          AttrType[AttrType["AttrType_TearDeep"] = 34] = "AttrType_TearDeep";
          AttrType[AttrType["AttrType_BigHpHeal"] = 35] = "AttrType_BigHpHeal";
          AttrType[AttrType["AttrType_NowHpHeal"] = 36] = "AttrType_NowHpHeal";
          AttrType[AttrType["AttrType_InitialScroll"] = 37] = "AttrType_InitialScroll";
          AttrType[AttrType["AttrType_AddScroll"] = 38] = "AttrType_AddScroll";
          AttrType[AttrType["AttrType_RefreshCount"] = 39] = "AttrType_RefreshCount";
          AttrType[AttrType["AttrType_BreathTimePercent"] = 40] = "AttrType_BreathTimePercent";
          AttrType[AttrType["AttrType_AttackNum"] = 41] = "AttrType_AttackNum";
          AttrType[AttrType["AttrType_AttackSpeed"] = 42] = "AttrType_AttackSpeed";
          AttrType[AttrType["AttrType_RogueLevel"] = 43] = "AttrType_RogueLevel";
          AttrType[AttrType["AttrType_TargetHpDamageAdd"] = 44] = "AttrType_TargetHpDamageAdd";
          AttrType[AttrType["AttrType_TearEffect"] = 45] = "AttrType_TearEffect";
          AttrType[AttrType["AttrType_SpeedMoveAdd"] = 46] = "AttrType_SpeedMoveAdd";
          AttrType[AttrType["AttrType_Stealth"] = 47] = "AttrType_Stealth";
          AttrType[AttrType["AttrType_Invincible"] = 48] = "AttrType_Invincible";
          AttrType[AttrType["AttrType_AttackShield"] = 49] = "AttrType_AttackShield";
          AttrType[AttrType["AttrType_BigHpShield"] = 50] = "AttrType_BigHpShield";
          AttrType[AttrType["AttrType_ShieldDeep"] = 51] = "AttrType_ShieldDeep";
          AttrType[AttrType["AttrType_TransferDamage"] = 52] = "AttrType_TransferDamage";
          AttrType[AttrType["AttrType_VertigoPer"] = 53] = "AttrType_VertigoPer";
          AttrType[AttrType["AttrType_Vertigo"] = 54] = "AttrType_Vertigo";
          AttrType[AttrType["AttrType_BreathPer"] = 55] = "AttrType_BreathPer";
          AttrType[AttrType["AttrType_IgnorePer"] = 56] = "AttrType_IgnorePer";
          AttrType[AttrType["AttrType_BigHpLoss"] = 57] = "AttrType_BigHpLoss";
          AttrType[AttrType["AttrType_DamageResultReduce"] = 58] = "AttrType_DamageResultReduce";
          AttrType[AttrType["AttrType_BossDamageAdd"] = 59] = "AttrType_BossDamageAdd";
          AttrType[AttrType["AttrType_HpHealShieldPer"] = 60] = "AttrType_HpHealShieldPer";
          AttrType[AttrType["AttrType_NegativeBuffImmunity"] = 61] = "AttrType_NegativeBuffImmunity";
          AttrType[AttrType["AttrType_CriticalEffect"] = 62] = "AttrType_CriticalEffect";
          AttrType[AttrType["AttrType_BeCriticalEffect"] = 63] = "AttrType_BeCriticalEffect";
          AttrType[AttrType["AttrType_CriticalPerEffect"] = 64] = "AttrType_CriticalPerEffect";
          AttrType[AttrType["AttrType_BeCriticalPerEffect"] = 65] = "AttrType_BeCriticalPerEffect";
          AttrType[AttrType["AttrType_DamageReduceCoefficientFix"] = 66] = "AttrType_DamageReduceCoefficientFix";
          AttrType[AttrType["AttrType_ShieldLimit"] = 67] = "AttrType_ShieldLimit";
          AttrType[AttrType["AttrType_CriticalTimes"] = 68] = "AttrType_CriticalTimes";
          AttrType[AttrType["AttrType_HitBackChance"] = 69] = "AttrType_HitBackChance";
          AttrType[AttrType["AttrType_HoldTimePercent"] = 70] = "AttrType_HoldTimePercent";
          AttrType[AttrType["AttrType_HpPer2"] = 71] = "AttrType_HpPer2";
          AttrType[AttrType["AttrType_TotalAttack"] = 101] = "AttrType_TotalAttack";
          AttrType[AttrType["AttrType_TotalDefence"] = 102] = "AttrType_TotalDefence";
          AttrType[AttrType["AttrType_TotalHp"] = 103] = "AttrType_TotalHp";
          return AttrType;
        }({});

        _tab.AttrType = AttrType;

        let ItemType = /*#__PURE__*/function (ItemType) {
          ItemType[ItemType["ItemType_UnknownItem"] = 0] = "ItemType_UnknownItem";
          ItemType[ItemType["ItemType_Currency"] = 1] = "ItemType_Currency";
          ItemType[ItemType["ItemType_Hero"] = 2] = "ItemType_Hero";
          ItemType[ItemType["ItemType_IdleReward"] = 3] = "ItemType_IdleReward";
          ItemType[ItemType["ItemType_Piece"] = 4] = "ItemType_Piece";
          ItemType[ItemType["ItemType_Material"] = 5] = "ItemType_Material";
          ItemType[ItemType["ItemType_Equip"] = 6] = "ItemType_Equip";
          ItemType[ItemType["ItemType_Gift"] = 7] = "ItemType_Gift";
          ItemType[ItemType["ItemType_HeroCommonCost"] = 8] = "ItemType_HeroCommonCost";
          ItemType[ItemType["ItemType_Head"] = 10] = "ItemType_Head";
          ItemType[ItemType["ItemType_HeadFrame"] = 11] = "ItemType_HeadFrame";
          ItemType[ItemType["ItemType_ChatBubble"] = 12] = "ItemType_ChatBubble";
          ItemType[ItemType["ItemType_LimitTimeItem"] = 13] = "ItemType_LimitTimeItem";
          ItemType[ItemType["ItemType_MainScene"] = 14] = "ItemType_MainScene";
          ItemType[ItemType["ItemType_Book"] = 15] = "ItemType_Book";
          ItemType[ItemType["ItemType_Box"] = 16] = "ItemType_Box";
          ItemType[ItemType["ItemType_Elixir"] = 17] = "ItemType_Elixir";
          ItemType[ItemType["ItemType_ChoiceBox"] = 18] = "ItemType_ChoiceBox";
          return ItemType;
        }({});

        _tab.ItemType = ItemType;

        let ItemQuality = /*#__PURE__*/function (ItemQuality) {
          ItemQuality[ItemQuality["ItemQuality_Green"] = 1] = "ItemQuality_Green";
          ItemQuality[ItemQuality["ItemQuality_Blue"] = 2] = "ItemQuality_Blue";
          ItemQuality[ItemQuality["ItemQuality_Purple"] = 3] = "ItemQuality_Purple";
          ItemQuality[ItemQuality["ItemQuality_Gold"] = 4] = "ItemQuality_Gold";
          ItemQuality[ItemQuality["ItemQuality_Red"] = 5] = "ItemQuality_Red";
          ItemQuality[ItemQuality["ItemQuality_White"] = 6] = "ItemQuality_White";
          ItemQuality[ItemQuality["ItemQuality_Colourful"] = 7] = "ItemQuality_Colourful";
          return ItemQuality;
        }({});

        _tab.ItemQuality = ItemQuality;

        let BagType = /*#__PURE__*/function (BagType) {
          BagType[BagType["BagType_None"] = 0] = "BagType_None";
          BagType[BagType["BagType_Goods"] = 1] = "BagType_Goods";
          BagType[BagType["BagType_Fragment"] = 2] = "BagType_Fragment";
          BagType[BagType["BagType_Consumable"] = 3] = "BagType_Consumable";
          BagType[BagType["BagType_Equip"] = 4] = "BagType_Equip";
          BagType[BagType["BagType_Jade"] = 5] = "BagType_Jade";
          return BagType;
        }({});

        _tab.BagType = BagType;

        let CurrencyType = /*#__PURE__*/function (CurrencyType) {
          CurrencyType[CurrencyType["CurrencyType_UnknownCurrency"] = 0] = "CurrencyType_UnknownCurrency";
          CurrencyType[CurrencyType["CurrencyType_Diamond"] = 1] = "CurrencyType_Diamond";
          CurrencyType[CurrencyType["CurrencyType_Gold"] = 2] = "CurrencyType_Gold";
          CurrencyType[CurrencyType["CurrencyType_RoleExp"] = 3] = "CurrencyType_RoleExp";
          CurrencyType[CurrencyType["CurrencyType_VipExp"] = 4] = "CurrencyType_VipExp";
          CurrencyType[CurrencyType["CurrencyType_ResolveCurrency"] = 5] = "CurrencyType_ResolveCurrency";
          CurrencyType[CurrencyType["CurrencyType_Stamina"] = 6] = "CurrencyType_Stamina";
          CurrencyType[CurrencyType["CurrencyType_DailyActivity"] = 7] = "CurrencyType_DailyActivity";
          CurrencyType[CurrencyType["CurrencyType_WeeklyActivity"] = 8] = "CurrencyType_WeeklyActivity";
          CurrencyType[CurrencyType["CurrencyType_Friendship"] = 9] = "CurrencyType_Friendship";
          CurrencyType[CurrencyType["CurrencyType_FastTravel"] = 10] = "CurrencyType_FastTravel";
          CurrencyType[CurrencyType["CurrencyType_Voucher"] = 11] = "CurrencyType_Voucher";
          CurrencyType[CurrencyType["CurrencyType_GuildCurrency"] = 84] = "CurrencyType_GuildCurrency";
          CurrencyType[CurrencyType["CurrencyType_FincaFightTicket"] = 85] = "CurrencyType_FincaFightTicket";
          CurrencyType[CurrencyType["CurrencyType_ReviveCurrency"] = 202] = "CurrencyType_ReviveCurrency";
          CurrencyType[CurrencyType["CurrencyType_Feed"] = 1001] = "CurrencyType_Feed";
          return CurrencyType;
        }({});

        _tab.CurrencyType = CurrencyType;

        let PrivilegedType = /*#__PURE__*/function (PrivilegedType) {
          PrivilegedType[PrivilegedType["PrivilegedType_None"] = 0] = "PrivilegedType_None";
          PrivilegedType[PrivilegedType["PrivilegedType_MonthlyPass"] = 1] = "PrivilegedType_MonthlyPass";
          PrivilegedType[PrivilegedType["PrivilegedType_PremiumMonthlyPass"] = 2] = "PrivilegedType_PremiumMonthlyPass";
          PrivilegedType[PrivilegedType["PrivilegedType_BattlePassStamina"] = 3] = "PrivilegedType_BattlePassStamina";
          PrivilegedType[PrivilegedType["PrivilegedType_WorldBossPass"] = 4] = "PrivilegedType_WorldBossPass";
          return PrivilegedType;
        }({});

        _tab.PrivilegedType = PrivilegedType;

        let FunctionType = /*#__PURE__*/function (FunctionType) {
          FunctionType[FunctionType["FunctionType_Function"] = 0] = "FunctionType_Function";
          FunctionType[FunctionType["FunctionType_Activity"] = 1] = "FunctionType_Activity";
          return FunctionType;
        }({});

        _tab.FunctionType = FunctionType;

        let OpenFunctionName = /*#__PURE__*/function (OpenFunctionName) {
          OpenFunctionName[OpenFunctionName["OpenFunctionName_None"] = 0] = "OpenFunctionName_None";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Drug"] = 1] = "OpenFunctionName_Drug";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ScrollPainting"] = 2] = "OpenFunctionName_ScrollPainting";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_RareBook"] = 3] = "OpenFunctionName_RareBook";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Gene"] = 4] = "OpenFunctionName_Gene";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Equipment"] = 5] = "OpenFunctionName_Equipment";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Jade"] = 6] = "OpenFunctionName_Jade";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Patrol"] = 7] = "OpenFunctionName_Patrol";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_HeroLevelResonance"] = 8] = "OpenFunctionName_HeroLevelResonance";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_HeroStarResonanceTable"] = 9] = "OpenFunctionName_HeroStarResonanceTable";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaHero"] = 10] = "OpenFunctionName_GachaHero";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaHeroClass"] = 11] = "OpenFunctionName_GachaHeroClass";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaFriendHero"] = 12] = "OpenFunctionName_GachaFriendHero";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaBook"] = 13] = "OpenFunctionName_GachaBook";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_MainChapter"] = 14] = "OpenFunctionName_MainChapter";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyTask"] = 15] = "OpenFunctionName_DailyTask";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WeeklyTask"] = 16] = "OpenFunctionName_WeeklyTask";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_AchievementTask"] = 17] = "OpenFunctionName_AchievementTask";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaBookSR"] = 18] = "OpenFunctionName_GachaBookSR";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_GachaHeroSSR"] = 19] = "OpenFunctionName_GachaHeroSSR";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DismissalShop"] = 20] = "OpenFunctionName_DismissalShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_AssassinShop"] = 21] = "OpenFunctionName_AssassinShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ArcherShop"] = 22] = "OpenFunctionName_ArcherShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_PriestShop"] = 23] = "OpenFunctionName_PriestShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_CasterShop"] = 24] = "OpenFunctionName_CasterShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WarriorShop"] = 25] = "OpenFunctionName_WarriorShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DiamondShop"] = 26] = "OpenFunctionName_DiamondShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BossShop"] = 27] = "OpenFunctionName_BossShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_HeroCollection"] = 28] = "OpenFunctionName_HeroCollection";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_NewServerSignIn"] = 29] = "OpenFunctionName_NewServerSignIn";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailySignIn"] = 30] = "OpenFunctionName_DailySignIn";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyShop"] = 31] = "OpenFunctionName_DailyShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_FightSpeed2"] = 32] = "OpenFunctionName_FightSpeed2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_FightSpeed3"] = 33] = "OpenFunctionName_FightSpeed3";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_FightAuto"] = 34] = "OpenFunctionName_FightAuto";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SkipAd"] = 35] = "OpenFunctionName_SkipAd";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Guide"] = 36] = "OpenFunctionName_Guide";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Mail"] = 37] = "OpenFunctionName_Mail";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Rank"] = 38] = "OpenFunctionName_Rank";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Friend"] = 39] = "OpenFunctionName_Friend";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_CrazyChicken"] = 40] = "OpenFunctionName_CrazyChicken";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_LimitBenifit"] = 41] = "OpenFunctionName_LimitBenifit";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Prestage"] = 42] = "OpenFunctionName_Prestage";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Chat"] = 43] = "OpenFunctionName_Chat";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_FirstRecharge"] = 44] = "OpenFunctionName_FirstRecharge";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Welfare"] = 45] = "OpenFunctionName_Welfare";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Challenge"] = 46] = "OpenFunctionName_Challenge";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Recruit"] = 47] = "OpenFunctionName_Recruit";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Association"] = 48] = "OpenFunctionName_Association";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_PvpShop"] = 49] = "OpenFunctionName_PvpShop";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_MonthlyPass"] = 50] = "OpenFunctionName_MonthlyPass";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter1"] = 51] = "OpenFunctionName_BattlePassMainChapter1";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter2"] = 52] = "OpenFunctionName_BattlePassMainChapter2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter3"] = 53] = "OpenFunctionName_BattlePassMainChapter3";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter4"] = 54] = "OpenFunctionName_BattlePassMainChapter4";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter5"] = 55] = "OpenFunctionName_BattlePassMainChapter5";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter6"] = 56] = "OpenFunctionName_BattlePassMainChapter6";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter7"] = 57] = "OpenFunctionName_BattlePassMainChapter7";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter8"] = 58] = "OpenFunctionName_BattlePassMainChapter8";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter9"] = 59] = "OpenFunctionName_BattlePassMainChapter9";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter10"] = 60] = "OpenFunctionName_BattlePassMainChapter10";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassMainChapter11"] = 61] = "OpenFunctionName_BattlePassMainChapter11";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv1"] = 62] = "OpenFunctionName_BattlePassPlayerLv1";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv2"] = 63] = "OpenFunctionName_BattlePassPlayerLv2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv3"] = 64] = "OpenFunctionName_BattlePassPlayerLv3";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv4"] = 65] = "OpenFunctionName_BattlePassPlayerLv4";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv5"] = 66] = "OpenFunctionName_BattlePassPlayerLv5";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv6"] = 67] = "OpenFunctionName_BattlePassPlayerLv6";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv7"] = 68] = "OpenFunctionName_BattlePassPlayerLv7";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv8"] = 69] = "OpenFunctionName_BattlePassPlayerLv8";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassPlayerLv9"] = 70] = "OpenFunctionName_BattlePassPlayerLv9";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassStamina"] = 71] = "OpenFunctionName_BattlePassStamina";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BattlePassSignIn1"] = 72] = "OpenFunctionName_BattlePassSignIn1";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyStageSweepAll"] = 73] = "OpenFunctionName_DailyStageSweepAll";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyShopBuyAll"] = 74] = "OpenFunctionName_DailyShopBuyAll";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Vip"] = 75] = "OpenFunctionName_Vip";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WorldBossSweepAll"] = 78] = "OpenFunctionName_WorldBossSweepAll";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WorldBossFreeBuyCount"] = 79] = "OpenFunctionName_WorldBossFreeBuyCount";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WorldBoss"] = 80] = "OpenFunctionName_WorldBoss";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WorldBossPass"] = 81] = "OpenFunctionName_WorldBossPass";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_NewPlayerDailyGift"] = 82] = "OpenFunctionName_NewPlayerDailyGift";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SpecialGiftDaily"] = 83] = "OpenFunctionName_SpecialGiftDaily";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SpecialGiftWeekly"] = 84] = "OpenFunctionName_SpecialGiftWeekly";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SpecialGiftMonthly"] = 85] = "OpenFunctionName_SpecialGiftMonthly";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityNewPlayerTask"] = 86] = "OpenFunctionName_ActivityNewPlayerTask";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_MainChapterGift"] = 87] = "OpenFunctionName_MainChapterGift";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityNewPlayerTask2"] = 88] = "OpenFunctionName_ActivityNewPlayerTask2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyChallenge"] = 89] = "OpenFunctionName_DailyChallenge";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_DailyChallengeSweepAll"] = 90] = "OpenFunctionName_DailyChallengeSweepAll";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Hero7GiftPack"] = 91] = "OpenFunctionName_Hero7GiftPack";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SecretBook14GiftPack"] = 92] = "OpenFunctionName_SecretBook14GiftPack";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ClimbTower"] = 93] = "OpenFunctionName_ClimbTower";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Weapon"] = 94] = "OpenFunctionName_Weapon";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_QuestLogPass"] = 95] = "OpenFunctionName_QuestLogPass";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ClimbTowerPass1"] = 96] = "OpenFunctionName_ClimbTowerPass1";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ClimbTowerPass2"] = 97] = "OpenFunctionName_ClimbTowerPass2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ClimbTowerPass3"] = 98] = "OpenFunctionName_ClimbTowerPass3";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityRank"] = 99] = "OpenFunctionName_ActivityRank";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_QuestLogPass2"] = 100] = "OpenFunctionName_QuestLogPass2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_NewPlayerMall"] = 101] = "OpenFunctionName_NewPlayerMall";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_NewPlayerMall2"] = 102] = "OpenFunctionName_NewPlayerMall2";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_WinResultDoubleReward"] = 103] = "OpenFunctionName_WinResultDoubleReward";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Skin"] = 104] = "OpenFunctionName_Skin";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_Handbook"] = 105] = "OpenFunctionName_Handbook";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_NewPlayerTaskShow"] = 106] = "OpenFunctionName_NewPlayerTaskShow";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityGachaUp"] = 107] = "OpenFunctionName_ActivityGachaUp";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityShowGroup"] = 108] = "OpenFunctionName_ActivityShowGroup";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityHeroGrow"] = 109] = "OpenFunctionName_ActivityHeroGrow";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_BuyGold"] = 110] = "OpenFunctionName_BuyGold";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_SignInGift"] = 111] = "OpenFunctionName_SignInGift";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_MainChapterReward"] = 112] = "OpenFunctionName_MainChapterReward";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_AutoSelectRogue"] = 113] = "OpenFunctionName_AutoSelectRogue";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityMall"] = 114] = "OpenFunctionName_ActivityMall";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_FincaFight"] = 115] = "OpenFunctionName_FincaFight";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_QuestLogPass3"] = 116] = "OpenFunctionName_QuestLogPass3";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ClimbTowerPass4"] = 117] = "OpenFunctionName_ClimbTowerPass4";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_EliteChapter"] = 118] = "OpenFunctionName_EliteChapter";
          OpenFunctionName[OpenFunctionName["OpenFunctionName_ActivityCumulativeRecharge"] = 119] = "OpenFunctionName_ActivityCumulativeRecharge";
          return OpenFunctionName;
        }({});

        _tab.OpenFunctionName = OpenFunctionName;

        let ItemSource = /*#__PURE__*/function (ItemSource) {
          ItemSource[ItemSource["ItemSource_None"] = 0] = "ItemSource_None";
          ItemSource[ItemSource["ItemSource_HeroLvlUp"] = 1] = "ItemSource_HeroLvlUp";
          ItemSource[ItemSource["ItemSource_HeroStarUpgrade"] = 2] = "ItemSource_HeroStarUpgrade";
          ItemSource[ItemSource["ItemSource_HeroResetLv"] = 3] = "ItemSource_HeroResetLv";
          ItemSource[ItemSource["ItemSource_HeroResetStar"] = 4] = "ItemSource_HeroResetStar";
          ItemSource[ItemSource["ItemSource_HeroDisband"] = 5] = "ItemSource_HeroDisband";
          ItemSource[ItemSource["ItemSource_HeroAlbumActivation"] = 6] = "ItemSource_HeroAlbumActivation";
          ItemSource[ItemSource["ItemSource_EquipmentEnhance"] = 7] = "ItemSource_EquipmentEnhance";
          ItemSource[ItemSource["ItemSource_EquipmentRefine"] = 8] = "ItemSource_EquipmentRefine";
          ItemSource[ItemSource["ItemSource_EquipmentDecompose"] = 9] = "ItemSource_EquipmentDecompose";
          ItemSource[ItemSource["ItemSource_FeatherRecast"] = 10] = "ItemSource_FeatherRecast";
          ItemSource[ItemSource["ItemSource_HeroStarStepUpgrade"] = 11] = "ItemSource_HeroStarStepUpgrade";
          ItemSource[ItemSource["ItemSource_SmallGeneUpgrade"] = 12] = "ItemSource_SmallGeneUpgrade";
          ItemSource[ItemSource["ItemSource_BigGeneUpgrade"] = 13] = "ItemSource_BigGeneUpgrade";
          ItemSource[ItemSource["ItemSource_UpgradeBookStar"] = 14] = "ItemSource_UpgradeBookStar";
          ItemSource[ItemSource["ItemSource_UpgradeBookLevel"] = 15] = "ItemSource_UpgradeBookLevel";
          ItemSource[ItemSource["ItemSource_SwitchBookFragment"] = 16] = "ItemSource_SwitchBookFragment";
          ItemSource[ItemSource["ItemSource_CombineBookFragment"] = 17] = "ItemSource_CombineBookFragment";
          ItemSource[ItemSource["ItemSource_GachaHeroToOne"] = 18] = "ItemSource_GachaHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaHeroToTen"] = 19] = "ItemSource_GachaHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaArcherHeroToOne"] = 20] = "ItemSource_GachaArcherHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaArcherHeroToTen"] = 21] = "ItemSource_GachaArcherHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaAssassinHeroToOne"] = 22] = "ItemSource_GachaAssassinHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaAssassinHeroToTen"] = 23] = "ItemSource_GachaAssassinHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaCasterHeroToOne"] = 24] = "ItemSource_GachaCasterHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaCasterHeroToTen"] = 25] = "ItemSource_GachaCasterHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaPriestHeroToOne"] = 26] = "ItemSource_GachaPriestHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaPriestHeroToTen"] = 27] = "ItemSource_GachaPriestHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaWarriorHeroToOne"] = 28] = "ItemSource_GachaWarriorHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaWarriorHeroToTen"] = 29] = "ItemSource_GachaWarriorHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaFriendHeroToOne"] = 30] = "ItemSource_GachaFriendHeroToOne";
          ItemSource[ItemSource["ItemSource_GachaFriendHeroToTen"] = 31] = "ItemSource_GachaFriendHeroToTen";
          ItemSource[ItemSource["ItemSource_GachaHeroSSR"] = 32] = "ItemSource_GachaHeroSSR";
          ItemSource[ItemSource["ItemSource_GachaBookToOne"] = 33] = "ItemSource_GachaBookToOne";
          ItemSource[ItemSource["ItemSource_GachaBookToTen"] = 34] = "ItemSource_GachaBookToTen";
          ItemSource[ItemSource["ItemSource_GachaBookSR"] = 35] = "ItemSource_GachaBookSR";
          ItemSource[ItemSource["ItemSource_UseElixir"] = 36] = "ItemSource_UseElixir";
          ItemSource[ItemSource["ItemSource_DailyGift"] = 37] = "ItemSource_DailyGift";
          ItemSource[ItemSource["ItemSource_LimitedReward"] = 38] = "ItemSource_LimitedReward";
          ItemSource[ItemSource["ItemSource_DailyReward"] = 39] = "ItemSource_DailyReward";
          ItemSource[ItemSource["ItemSource_DismissalShop"] = 40] = "ItemSource_DismissalShop";
          ItemSource[ItemSource["ItemSource_AssassinShop"] = 41] = "ItemSource_AssassinShop";
          ItemSource[ItemSource["ItemSource_ArcherShop"] = 42] = "ItemSource_ArcherShop";
          ItemSource[ItemSource["ItemSource_PriestShop"] = 43] = "ItemSource_PriestShop";
          ItemSource[ItemSource["ItemSource_CasterShop"] = 44] = "ItemSource_CasterShop";
          ItemSource[ItemSource["ItemSource_WarriorShop"] = 45] = "ItemSource_WarriorShop";
          ItemSource[ItemSource["ItemSource_DiamondShop"] = 46] = "ItemSource_DiamondShop";
          ItemSource[ItemSource["ItemSource_BossShop"] = 47] = "ItemSource_BossShop";
          ItemSource[ItemSource["ItemSource_HeroCollection"] = 48] = "ItemSource_HeroCollection";
          ItemSource[ItemSource["ItemSource_DailyShop"] = 49] = "ItemSource_DailyShop";
          ItemSource[ItemSource["ItemSource_BreakEgg"] = 50] = "ItemSource_BreakEgg";
          ItemSource[ItemSource["ItemSource_PvpShop"] = 51] = "ItemSource_PvpShop";
          ItemSource[ItemSource["ItemSource_BuyMonthlyPass"] = 52] = "ItemSource_BuyMonthlyPass";
          ItemSource[ItemSource["ItemSource_MonthlyPassReward"] = 53] = "ItemSource_MonthlyPassReward";
          ItemSource[ItemSource["ItemSource_BuyGold"] = 54] = "ItemSource_BuyGold";
          ItemSource[ItemSource["ItemSource_NewPlayerDailyGift"] = 55] = "ItemSource_NewPlayerDailyGift";
          ItemSource[ItemSource["ItemSource_SpecialGiftDaily"] = 56] = "ItemSource_SpecialGiftDaily";
          ItemSource[ItemSource["ItemSource_SpecialGiftWeekly"] = 57] = "ItemSource_SpecialGiftWeekly";
          ItemSource[ItemSource["ItemSource_SpecialGiftMonthly"] = 58] = "ItemSource_SpecialGiftMonthly";
          ItemSource[ItemSource["ItemSource_ActivityNewPlayerTask"] = 59] = "ItemSource_ActivityNewPlayerTask";
          ItemSource[ItemSource["ItemSource_MainChapterGift"] = 60] = "ItemSource_MainChapterGift";
          ItemSource[ItemSource["ItemSource_WorldBoss"] = 61] = "ItemSource_WorldBoss";
          ItemSource[ItemSource["ItemSource_DailyChallenge"] = 62] = "ItemSource_DailyChallenge";
          ItemSource[ItemSource["ItemSource_BattlePass"] = 63] = "ItemSource_BattlePass";
          ItemSource[ItemSource["ItemSource_StartClimbTower"] = 64] = "ItemSource_StartClimbTower";
          ItemSource[ItemSource["ItemSource_ResetCyclicalTask"] = 65] = "ItemSource_ResetCyclicalTask";
          ItemSource[ItemSource["ItemSource_ReceiveDailyActivityRewards"] = 66] = "ItemSource_ReceiveDailyActivityRewards";
          ItemSource[ItemSource["ItemSource_ReceiveWeeklyActivityRewards"] = 67] = "ItemSource_ReceiveWeeklyActivityRewards";
          ItemSource[ItemSource["ItemSource_StartExploreStage"] = 68] = "ItemSource_StartExploreStage";
          ItemSource[ItemSource["ItemSource_UpHeroBagCapacityLevel"] = 69] = "ItemSource_UpHeroBagCapacityLevel";
          ItemSource[ItemSource["ItemSource_ReceiveRecommendTeamRewards"] = 70] = "ItemSource_ReceiveRecommendTeamRewards";
          ItemSource[ItemSource["ItemSource_ReceiveHeroAlbumRewards"] = 71] = "ItemSource_ReceiveHeroAlbumRewards";
          ItemSource[ItemSource["ItemSource_StartMainStage"] = 72] = "ItemSource_StartMainStage";
          ItemSource[ItemSource["ItemSource_ReceiveMainStageDoubleWinRewards"] = 73] = "ItemSource_ReceiveMainStageDoubleWinRewards";
          ItemSource[ItemSource["ItemSource_ReceiveMainFirstReward"] = 74] = "ItemSource_ReceiveMainFirstReward";
          ItemSource[ItemSource["ItemSource_ReceiveNewPlayerTrialScoreRewards"] = 75] = "ItemSource_ReceiveNewPlayerTrialScoreRewards";
          ItemSource[ItemSource["ItemSource_ReceiveOpenFunctionReward"] = 76] = "ItemSource_ReceiveOpenFunctionReward";
          ItemSource[ItemSource["ItemSource_ReceivePatrolRewards"] = 77] = "ItemSource_ReceivePatrolRewards";
          ItemSource[ItemSource["ItemSource_QuickPatrol"] = 78] = "ItemSource_QuickPatrol";
          ItemSource[ItemSource["ItemSource_AdQuickPatrol"] = 79] = "ItemSource_AdQuickPatrol";
          ItemSource[ItemSource["ItemSource_RefreshQuickPatrolTimes"] = 80] = "ItemSource_RefreshQuickPatrolTimes";
          ItemSource[ItemSource["ItemSource_BuyDiamonds"] = 81] = "ItemSource_BuyDiamonds";
          ItemSource[ItemSource["ItemSource_FirstRecharge"] = 82] = "ItemSource_FirstRecharge";
          ItemSource[ItemSource["ItemSource_RechargeRewards"] = 83] = "ItemSource_RechargeRewards";
          ItemSource[ItemSource["ItemSource_PayByVoucher"] = 84] = "ItemSource_PayByVoucher";
          ItemSource[ItemSource["ItemSource_BuyPremiumMonthlyPass"] = 85] = "ItemSource_BuyPremiumMonthlyPass";
          ItemSource[ItemSource["ItemSource_PremiumMonthlyPassReward"] = 86] = "ItemSource_PremiumMonthlyPassReward";
          ItemSource[ItemSource["ItemSource_ReceiveMontylyPassAddtionalRewards"] = 87] = "ItemSource_ReceiveMontylyPassAddtionalRewards";
          ItemSource[ItemSource["ItemSource_UpRoleLevelRewards"] = 88] = "ItemSource_UpRoleLevelRewards";
          ItemSource[ItemSource["ItemSource_ReceiveMailRewards"] = 89] = "ItemSource_ReceiveMailRewards";
          ItemSource[ItemSource["ItemSource_ReviveOnStage"] = 90] = "ItemSource_ReviveOnStage";
          ItemSource[ItemSource["ItemSource_RefreshStamina"] = 91] = "ItemSource_RefreshStamina";
          ItemSource[ItemSource["ItemSource_BuyStamina"] = 92] = "ItemSource_BuyStamina";
          ItemSource[ItemSource["ItemSource_BuyVipGift"] = 93] = "ItemSource_BuyVipGift";
          ItemSource[ItemSource["ItemSource_ReceiveVipDailyGift"] = 94] = "ItemSource_ReceiveVipDailyGift";
          ItemSource[ItemSource["ItemSource_ClearExpiredLimitItem"] = 95] = "ItemSource_ClearExpiredLimitItem";
          ItemSource[ItemSource["ItemSource_FinishStage"] = 96] = "ItemSource_FinishStage";
          ItemSource[ItemSource["ItemSource_CreateRole"] = 97] = "ItemSource_CreateRole";
          ItemSource[ItemSource["ItemSource_GmModify"] = 98] = "ItemSource_GmModify";
          ItemSource[ItemSource["ItemSource_UseItem"] = 99] = "ItemSource_UseItem";
          ItemSource[ItemSource["ItemSource_UseRedeemCode"] = 100] = "ItemSource_UseRedeemCode";
          ItemSource[ItemSource["ItemSource_ReceiveBattlePassTaskRewards"] = 101] = "ItemSource_ReceiveBattlePassTaskRewards";
          ItemSource[ItemSource["ItemSource_ReceiveNewPlayerTrialTaskRewards"] = 102] = "ItemSource_ReceiveNewPlayerTrialTaskRewards";
          ItemSource[ItemSource["ItemSource_ReceiveDailyTaskRewards"] = 103] = "ItemSource_ReceiveDailyTaskRewards";
          ItemSource[ItemSource["ItemSource_ReceiveWeeklyTaskRewards"] = 104] = "ItemSource_ReceiveWeeklyTaskRewards";
          ItemSource[ItemSource["ItemSource_ReceiveAchievementRewards"] = 105] = "ItemSource_ReceiveAchievementRewards";
          ItemSource[ItemSource["ItemSource_ReceiveQuestLogTaskRewards"] = 106] = "ItemSource_ReceiveQuestLogTaskRewards";
          ItemSource[ItemSource["ItemSource_SweepExploreStage"] = 107] = "ItemSource_SweepExploreStage";
          ItemSource[ItemSource["ItemSource_ReceiveClimbTowerDailyRewards"] = 108] = "ItemSource_ReceiveClimbTowerDailyRewards";
          ItemSource[ItemSource["ItemSource_ReceiveHonorRollTasksRewards"] = 109] = "ItemSource_ReceiveHonorRollTasksRewards";
          ItemSource[ItemSource["ItemSource_NewPlayerMall"] = 110] = "ItemSource_NewPlayerMall";
          ItemSource[ItemSource["ItemSource_NewPlayerMall2"] = 111] = "ItemSource_NewPlayerMall2";
          ItemSource[ItemSource["ItemSource_ReceiveClearExploreStageRewards"] = 112] = "ItemSource_ReceiveClearExploreStageRewards";
          ItemSource[ItemSource["ItemSource_ReceiveClearClimbTowerStageRewards"] = 113] = "ItemSource_ReceiveClearClimbTowerStageRewards";
          ItemSource[ItemSource["ItemSource_ChangeRoleName"] = 114] = "ItemSource_ChangeRoleName";
          ItemSource[ItemSource["ItemSource_RefreshVipBonus"] = 115] = "ItemSource_RefreshVipBonus";
          ItemSource[ItemSource["ItemSource_GuildShop"] = 116] = "ItemSource_GuildShop";
          ItemSource[ItemSource["ItemSource_CreateGuild"] = 117] = "ItemSource_CreateGuild";
          ItemSource[ItemSource["ItemSource_GuildSign"] = 118] = "ItemSource_GuildSign";
          ItemSource[ItemSource["ItemSource_BuyGuildGift"] = 119] = "ItemSource_BuyGuildGift";
          ItemSource[ItemSource["ItemSource_UpGuildSkill"] = 120] = "ItemSource_UpGuildSkill";
          ItemSource[ItemSource["ItemSource_ResetGuildSkill"] = 121] = "ItemSource_ResetGuildSkill";
          ItemSource[ItemSource["ItemSource_ReceiveGuildTaskRewards"] = 122] = "ItemSource_ReceiveGuildTaskRewards";
          ItemSource[ItemSource["ItemSource_ReceiveGuildTaskChestRewards"] = 123] = "ItemSource_ReceiveGuildTaskChestRewards";
          ItemSource[ItemSource["ItemSource_SetGuildNameAndFlag"] = 124] = "ItemSource_SetGuildNameAndFlag";
          ItemSource[ItemSource["ItemSource_GuildBoss"] = 125] = "ItemSource_GuildBoss";
          ItemSource[ItemSource["ItemSource_GachaHeroUpToOne"] = 126] = "ItemSource_GachaHeroUpToOne";
          ItemSource[ItemSource["ItemSource_GachaHeroUpToTen"] = 127] = "ItemSource_GachaHeroUpToTen";
          ItemSource[ItemSource["ItemSource_SignInGift"] = 128] = "ItemSource_SignInGift";
          ItemSource[ItemSource["ItemSource_ActivityMall"] = 129] = "ItemSource_ActivityMall";
          ItemSource[ItemSource["ItemSource_ReceiveActivityGachaUpTasksRewards"] = 130] = "ItemSource_ReceiveActivityGachaUpTasksRewards";
          ItemSource[ItemSource["ItemSource_ReceiveFreeHeroGrowReward"] = 131] = "ItemSource_ReceiveFreeHeroGrowReward";
          ItemSource[ItemSource["ItemSource_BuyHeroGrowReward"] = 132] = "ItemSource_BuyHeroGrowReward";
          ItemSource[ItemSource["ItemSource_RefundOrder"] = 133] = "ItemSource_RefundOrder";
          ItemSource[ItemSource["ItemSource_FinishVoidStage"] = 134] = "ItemSource_FinishVoidStage";
          ItemSource[ItemSource["ItemSource_PVPBuyCount"] = 135] = "ItemSource_PVPBuyCount";
          ItemSource[ItemSource["ItemSource_FightFincaBattle"] = 136] = "ItemSource_FightFincaBattle";
          return ItemSource;
        }({});

        _tab.ItemSource = ItemSource;

        let GoodsType = /*#__PURE__*/function (GoodsType) {
          GoodsType[GoodsType["GoodsType_FirstRecharge"] = 0] = "GoodsType_FirstRecharge";
          GoodsType[GoodsType["GoodsType_BuyDiamonds"] = 1] = "GoodsType_BuyDiamonds";
          GoodsType[GoodsType["GoodsType_Mall"] = 2] = "GoodsType_Mall";
          GoodsType[GoodsType["GoodsType_BreakEgg"] = 3] = "GoodsType_BreakEgg";
          GoodsType[GoodsType["GoodsType_MonthlyPass"] = 4] = "GoodsType_MonthlyPass";
          GoodsType[GoodsType["GoodsType_BuyBattlePass"] = 5] = "GoodsType_BuyBattlePass";
          GoodsType[GoodsType["GoodsType_NewPlayerDailyGift"] = 6] = "GoodsType_NewPlayerDailyGift";
          GoodsType[GoodsType["GoodsType_ThirdPartyRechargeP800"] = 7] = "GoodsType_ThirdPartyRechargeP800";
          GoodsType[GoodsType["GoodsType_ThirdPartyRecharge37JP"] = 8] = "GoodsType_ThirdPartyRecharge37JP";
          GoodsType[GoodsType["GoodsType_ActivityHeroGrow"] = 9] = "GoodsType_ActivityHeroGrow";
          return GoodsType;
        }({});

        _tab.GoodsType = GoodsType;

        let ChannelType = /*#__PURE__*/function (ChannelType) {
          ChannelType[ChannelType["ChannelType_None"] = 0] = "ChannelType_None";
          ChannelType[ChannelType["ChannelType_PlayTW"] = 1] = "ChannelType_PlayTW";
          ChannelType[ChannelType["ChannelType_G37JP"] = 2] = "ChannelType_G37JP";
          return ChannelType;
        }({});

        _tab.ChannelType = ChannelType;

        let ServerState = /*#__PURE__*/function (ServerState) {
          ServerState[ServerState["ServerState_Crowded"] = 0] = "ServerState_Crowded";
          ServerState[ServerState["ServerState_Maintain"] = 1] = "ServerState_Maintain";
          ServerState[ServerState["ServerState_Hot"] = 2] = "ServerState_Hot";
          ServerState[ServerState["ServerState_New"] = 3] = "ServerState_New";
          return ServerState;
        }({});

        _tab.ServerState = ServerState;

        let LanguageType = /*#__PURE__*/function (LanguageType) {
          LanguageType[LanguageType["LanguageType_Zh_tw"] = 0] = "LanguageType_Zh_tw";
          LanguageType[LanguageType["LanguageType_En_us"] = 1] = "LanguageType_En_us";
          LanguageType[LanguageType["LanguageType_Jp_jp"] = 2] = "LanguageType_Jp_jp";
          return LanguageType;
        }({});

        _tab.LanguageType = LanguageType;

        let AnimationType = /*#__PURE__*/function (AnimationType) {
          AnimationType[AnimationType["AnimationType_SpriteFrame"] = 0] = "AnimationType_SpriteFrame";
          AnimationType[AnimationType["AnimationType_SkeletonData"] = 1] = "AnimationType_SkeletonData";
          AnimationType[AnimationType["AnimationType_AnimationClip"] = 2] = "AnimationType_AnimationClip";
          AnimationType[AnimationType["AnimationType_Plist"] = 3] = "AnimationType_Plist";
          return AnimationType;
        }({});

        _tab.AnimationType = AnimationType;

        let Builds = /*#__PURE__*/function (Builds) {
          Builds[Builds["Builds_None"] = 0] = "Builds_None";
          Builds[Builds["Builds_Core"] = 1] = "Builds_Core";
          Builds[Builds["Builds_Skill"] = 2] = "Builds_Skill";
          Builds[Builds["Builds_HeavyStrike1"] = 101] = "Builds_HeavyStrike1";
          Builds[Builds["Builds_Rage1"] = 102] = "Builds_Rage1";
          Builds[Builds["Builds_LightDark1"] = 103] = "Builds_LightDark1";
          Builds[Builds["Builds_Aim1"] = 104] = "Builds_Aim1";
          Builds[Builds["Builds_Bleed1"] = 105] = "Builds_Bleed1";
          Builds[Builds["Builds_HeavyStrike2"] = 201] = "Builds_HeavyStrike2";
          Builds[Builds["Builds_Rage2"] = 202] = "Builds_Rage2";
          Builds[Builds["Builds_LightDark2"] = 203] = "Builds_LightDark2";
          Builds[Builds["Builds_Aim2"] = 204] = "Builds_Aim2";
          Builds[Builds["Builds_Bleed2"] = 205] = "Builds_Bleed2";
          return Builds;
        }({});

        _tab.Builds = Builds;

        let HeroClass = /*#__PURE__*/function (HeroClass) {
          HeroClass[HeroClass["HeroClass_Any"] = 0] = "HeroClass_Any";
          HeroClass[HeroClass["HeroClass_Assassin"] = 1] = "HeroClass_Assassin";
          HeroClass[HeroClass["HeroClass_Archer"] = 2] = "HeroClass_Archer";
          HeroClass[HeroClass["HeroClass_Priest"] = 3] = "HeroClass_Priest";
          HeroClass[HeroClass["HeroClass_Caster"] = 4] = "HeroClass_Caster";
          HeroClass[HeroClass["HeroClass_Warrior"] = 5] = "HeroClass_Warrior";
          HeroClass[HeroClass["HeroClass_Max"] = 6] = "HeroClass_Max";
          return HeroClass;
        }({});

        _tab.HeroClass = HeroClass;

        let HeroAptitude = /*#__PURE__*/function (HeroAptitude) {
          HeroAptitude[HeroAptitude["HeroAptitude_None"] = 0] = "HeroAptitude_None";
          HeroAptitude[HeroAptitude["HeroAptitude_N"] = 1] = "HeroAptitude_N";
          HeroAptitude[HeroAptitude["HeroAptitude_R"] = 2] = "HeroAptitude_R";
          HeroAptitude[HeroAptitude["HeroAptitude_SR"] = 3] = "HeroAptitude_SR";
          HeroAptitude[HeroAptitude["HeroAptitude_SSR"] = 4] = "HeroAptitude_SSR";
          return HeroAptitude;
        }({});

        _tab.HeroAptitude = HeroAptitude;

        let HeroStarUpType = /*#__PURE__*/function (HeroStarUpType) {
          HeroStarUpType[HeroStarUpType["HeroStarUpType_AnyHero"] = 0] = "HeroStarUpType_AnyHero";
          HeroStarUpType[HeroStarUpType["HeroStarUpType_SameNameHero"] = 1] = "HeroStarUpType_SameNameHero";
          HeroStarUpType[HeroStarUpType["HeroStarUpType_SameClassHero"] = 2] = "HeroStarUpType_SameClassHero";
          return HeroStarUpType;
        }({});

        _tab.HeroStarUpType = HeroStarUpType;

        let HeroStarDescType = /*#__PURE__*/function (HeroStarDescType) {
          HeroStarDescType[HeroStarDescType["HeroStarDescType_None"] = 0] = "HeroStarDescType_None";
          HeroStarDescType[HeroStarDescType["HeroStarDescType_First"] = 1] = "HeroStarDescType_First";
          HeroStarDescType[HeroStarDescType["HeroStarDescType_Second"] = 2] = "HeroStarDescType_Second";
          HeroStarDescType[HeroStarDescType["HeroStarDescType_Third"] = 3] = "HeroStarDescType_Third";
          return HeroStarDescType;
        }({});

        _tab.HeroStarDescType = HeroStarDescType;

        let ExtraAttrTarget = /*#__PURE__*/function (ExtraAttrTarget) {
          ExtraAttrTarget[ExtraAttrTarget["ExtraAttrTarget_Mine"] = 0] = "ExtraAttrTarget_Mine";
          ExtraAttrTarget[ExtraAttrTarget["ExtraAttrTarget_All"] = 1] = "ExtraAttrTarget_All";
          return ExtraAttrTarget;
        }({});

        _tab.ExtraAttrTarget = ExtraAttrTarget;

        let MonsterType = /*#__PURE__*/function (MonsterType) {
          MonsterType[MonsterType["MonsterType_None"] = 0] = "MonsterType_None";
          MonsterType[MonsterType["MonsterType_CommonMonster"] = 1] = "MonsterType_CommonMonster";
          MonsterType[MonsterType["MonsterType_EliteMonster"] = 2] = "MonsterType_EliteMonster";
          MonsterType[MonsterType["MonsterType_BossMonster"] = 3] = "MonsterType_BossMonster";
          return MonsterType;
        }({});

        _tab.MonsterType = MonsterType;

        let AttackType = /*#__PURE__*/function (AttackType) {
          AttackType[AttackType["AttackType_Attack"] = 0] = "AttackType_Attack";
          AttackType[AttackType["AttackType_ActionAttack"] = 1] = "AttackType_ActionAttack";
          return AttackType;
        }({});

        _tab.AttackType = AttackType;

        let SkillType = /*#__PURE__*/function (SkillType) {
          SkillType[SkillType["SkillType_None"] = 0] = "SkillType_None";
          SkillType[SkillType["SkillType_NormalAttack"] = 1] = "SkillType_NormalAttack";
          SkillType[SkillType["SkillType_SpecialAttack"] = 2] = "SkillType_SpecialAttack";
          SkillType[SkillType["SkillType_holdAttack"] = 3] = "SkillType_holdAttack";
          SkillType[SkillType["SkillType_MovesAttack"] = 4] = "SkillType_MovesAttack";
          SkillType[SkillType["SkillType_PassiveSkill"] = 5] = "SkillType_PassiveSkill";
          SkillType[SkillType["SkillType_TimePush"] = 6] = "SkillType_TimePush";
          return SkillType;
        }({});

        _tab.SkillType = SkillType;

        let EffectUnit = /*#__PURE__*/function (EffectUnit) {
          EffectUnit[EffectUnit["EffectUnit_Mine"] = 0] = "EffectUnit_Mine";
          EffectUnit[EffectUnit["EffectUnit_Friend"] = 1] = "EffectUnit_Friend";
          EffectUnit[EffectUnit["EffectUnit_Enemy"] = 2] = "EffectUnit_Enemy";
          EffectUnit[EffectUnit["EffectUnit_FriendNome"] = 3] = "EffectUnit_FriendNome";
          return EffectUnit;
        }({});

        _tab.EffectUnit = EffectUnit;

        let RunningShotBulletType = /*#__PURE__*/function (RunningShotBulletType) {
          RunningShotBulletType[RunningShotBulletType["RunningShotBulletType_SameEnemy"] = 0] = "RunningShotBulletType_SameEnemy";
          RunningShotBulletType[RunningShotBulletType["RunningShotBulletType_RuleEnemy"] = 1] = "RunningShotBulletType_RuleEnemy";
          return RunningShotBulletType;
        }({});

        _tab.RunningShotBulletType = RunningShotBulletType;

        let BulletType = /*#__PURE__*/function (BulletType) {
          BulletType[BulletType["BulletType_SeekingBullet"] = 0] = "BulletType_SeekingBullet";
          BulletType[BulletType["BulletType_FollowingBullet"] = 1] = "BulletType_FollowingBullet";
          return BulletType;
        }({});

        _tab.BulletType = BulletType;

        let Trajectory = /*#__PURE__*/function (Trajectory) {
          Trajectory[Trajectory["Trajectory_StraightLine"] = 0] = "Trajectory_StraightLine";
          Trajectory[Trajectory["Trajectory_Trackless"] = 1] = "Trajectory_Trackless";
          Trajectory[Trajectory["Trajectory_Parabola"] = 2] = "Trajectory_Parabola";
          Trajectory[Trajectory["Trajectory_TrackingTarget"] = 3] = "Trajectory_TrackingTarget";
          Trajectory[Trajectory["Trajectory_Laser"] = 4] = "Trajectory_Laser";
          Trajectory[Trajectory["Trajectory_Trajectory"] = 5] = "Trajectory_Trajectory";
          return Trajectory;
        }({});

        _tab.Trajectory = Trajectory;

        let BulletBorn = /*#__PURE__*/function (BulletBorn) {
          BulletBorn[BulletBorn["BulletBorn_Me"] = 0] = "BulletBorn_Me";
          BulletBorn[BulletBorn["BulletBorn_She"] = 1] = "BulletBorn_She";
          BulletBorn[BulletBorn["BulletBorn_Inherit"] = 2] = "BulletBorn_Inherit";
          return BulletBorn;
        }({});

        _tab.BulletBorn = BulletBorn;

        let SearchEnemy = /*#__PURE__*/function (SearchEnemy) {
          SearchEnemy[SearchEnemy["SearchEnemy_None"] = 0] = "SearchEnemy_None";
          SearchEnemy[SearchEnemy["SearchEnemy_LowBlood"] = 1] = "SearchEnemy_LowBlood";
          SearchEnemy[SearchEnemy["SearchEnemy_Near"] = 2] = "SearchEnemy_Near";
          SearchEnemy[SearchEnemy["SearchEnemy_Behind"] = 3] = "SearchEnemy_Behind";
          SearchEnemy[SearchEnemy["SearchEnemy_RandomGoal"] = 4] = "SearchEnemy_RandomGoal";
          SearchEnemy[SearchEnemy["SearchEnemy_Mine"] = 5] = "SearchEnemy_Mine";
          SearchEnemy[SearchEnemy["SearchEnemy_Assassin"] = 6] = "SearchEnemy_Assassin";
          SearchEnemy[SearchEnemy["SearchEnemy_Archer"] = 7] = "SearchEnemy_Archer";
          SearchEnemy[SearchEnemy["SearchEnemy_Priest"] = 8] = "SearchEnemy_Priest";
          SearchEnemy[SearchEnemy["SearchEnemy_Caster"] = 9] = "SearchEnemy_Caster";
          SearchEnemy[SearchEnemy["SearchEnemy_Warrior"] = 10] = "SearchEnemy_Warrior";
          SearchEnemy[SearchEnemy["SearchEnemy_All"] = 11] = "SearchEnemy_All";
          SearchEnemy[SearchEnemy["SearchEnemy_LowBloodShield"] = 12] = "SearchEnemy_LowBloodShield";
          return SearchEnemy;
        }({});

        _tab.SearchEnemy = SearchEnemy;

        let EnemyFiltrate = /*#__PURE__*/function (EnemyFiltrate) {
          EnemyFiltrate[EnemyFiltrate["EnemyFiltrate_CanSelectlast"] = 0] = "EnemyFiltrate_CanSelectlast";
          EnemyFiltrate[EnemyFiltrate["EnemyFiltrate_Ignorelast"] = 1] = "EnemyFiltrate_Ignorelast";
          EnemyFiltrate[EnemyFiltrate["EnemyFiltrate_NoSelectSame"] = 2] = "EnemyFiltrate_NoSelectSame";
          return EnemyFiltrate;
        }({});

        _tab.EnemyFiltrate = EnemyFiltrate;

        let DeathType = /*#__PURE__*/function (DeathType) {
          DeathType[DeathType["DeathType_HitDeath"] = 0] = "DeathType_HitDeath";
          DeathType[DeathType["DeathType_TimeDeath"] = 1] = "DeathType_TimeDeath";
          DeathType[DeathType["DeathType_OwnDeath"] = 2] = "DeathType_OwnDeath";
          return DeathType;
        }({});

        _tab.DeathType = DeathType;

        let CommonShow = /*#__PURE__*/function (CommonShow) {
          CommonShow[CommonShow["CommonShow_None"] = 0] = "CommonShow_None";
          CommonShow[CommonShow["CommonShow_LaunchMask"] = 1] = "CommonShow_LaunchMask";
          return CommonShow;
        }({});

        _tab.CommonShow = CommonShow;

        let BuffType = /*#__PURE__*/function (BuffType) {
          BuffType[BuffType["BuffType_None"] = 0] = "BuffType_None";
          BuffType[BuffType["BuffType_Gain"] = 1] = "BuffType_Gain";
          BuffType[BuffType["BuffType_Loss"] = 2] = "BuffType_Loss";
          return BuffType;
        }({});

        _tab.BuffType = BuffType;

        let Rule = /*#__PURE__*/function (Rule) {
          Rule[Rule["Rule_TimeNoneEffectNone"] = 0] = "Rule_TimeNoneEffectNone";
          Rule[Rule["Rule_TimeRefreshEffectNone"] = 1] = "Rule_TimeRefreshEffectNone";
          Rule[Rule["Rule_TimeRefreshEffectadd"] = 2] = "Rule_TimeRefreshEffectadd";
          Rule[Rule["Rule_TimeAddEffectNone"] = 3] = "Rule_TimeAddEffectNone";
          Rule[Rule["Rule_SingleCount"] = 4] = "Rule_SingleCount";
          return Rule;
        }({});

        _tab.Rule = Rule;

        let BuffGroup = /*#__PURE__*/function (BuffGroup) {
          BuffGroup[BuffGroup["BuffGroup_None"] = 0] = "BuffGroup_None";
          BuffGroup[BuffGroup["BuffGroup_TearEffect"] = 1] = "BuffGroup_TearEffect";
          BuffGroup[BuffGroup["BuffGroup_TransferDamage"] = 2] = "BuffGroup_TransferDamage";
          BuffGroup[BuffGroup["BuffGroup_StrongWind"] = 3] = "BuffGroup_StrongWind";
          BuffGroup[BuffGroup["BuffGroup_RolesBuffLayerNum"] = 4] = "BuffGroup_RolesBuffLayerNum";
          BuffGroup[BuffGroup["BuffGroup_FiveRollOne"] = 5] = "BuffGroup_FiveRollOne";
          BuffGroup[BuffGroup["BuffGroup_MonsterAttackHalo"] = 6] = "BuffGroup_MonsterAttackHalo";
          BuffGroup[BuffGroup["BuffGroup_MonsterSpeedHalo"] = 7] = "BuffGroup_MonsterSpeedHalo";
          BuffGroup[BuffGroup["BuffGroup_MonsterReduceTreatHalo"] = 8] = "BuffGroup_MonsterReduceTreatHalo";
          BuffGroup[BuffGroup["BuffGroup_MonsterReduceDamHalo"] = 9] = "BuffGroup_MonsterReduceDamHalo";
          BuffGroup[BuffGroup["BuffGroup_MaxFeatherHeal"] = 10] = "BuffGroup_MaxFeatherHeal";
          return BuffGroup;
        }({});

        _tab.BuffGroup = BuffGroup;

        let ClearType = /*#__PURE__*/function (ClearType) {
          ClearType[ClearType["ClearType_None"] = 0] = "ClearType_None";
          ClearType[ClearType["ClearType_Die"] = 1] = "ClearType_Die";
          ClearType[ClearType["ClearType_BeDamaged"] = 2] = "ClearType_BeDamaged";
          ClearType[ClearType["ClearType_Breath"] = 3] = "ClearType_Breath";
          ClearType[ClearType["ClearType_Attack"] = 4] = "ClearType_Attack";
          ClearType[ClearType["ClearType_StackFull"] = 5] = "ClearType_StackFull";
          ClearType[ClearType["ClearType_BulletMadeDamage"] = 6] = "ClearType_BulletMadeDamage";
          ClearType[ClearType["ClearType_CriticalDamage"] = 7] = "ClearType_CriticalDamage";
          ClearType[ClearType["ClearType_DeadlyDamage"] = 8] = "ClearType_DeadlyDamage";
          return ClearType;
        }({});

        _tab.ClearType = ClearType;

        let Triggertype = /*#__PURE__*/function (Triggertype) {
          Triggertype[Triggertype["Triggertype_Born"] = 0] = "Triggertype_Born";
          Triggertype[Triggertype["Triggertype_PreAttack"] = 1] = "Triggertype_PreAttack";
          Triggertype[Triggertype["Triggertype_Attack"] = 2] = "Triggertype_Attack";
          Triggertype[Triggertype["Triggertype_AttackEnd"] = 3] = "Triggertype_AttackEnd";
          Triggertype[Triggertype["Triggertype_BeHitFront"] = 4] = "Triggertype_BeHitFront";
          Triggertype[Triggertype["Triggertype_BeHitBack"] = 5] = "Triggertype_BeHitBack";
          Triggertype[Triggertype["Triggertype_BreathStart"] = 6] = "Triggertype_BreathStart";
          Triggertype[Triggertype["Triggertype_BreathEnd"] = 7] = "Triggertype_BreathEnd";
          Triggertype[Triggertype["Triggertype_AttackCount"] = 8] = "Triggertype_AttackCount";
          Triggertype[Triggertype["Triggertype_NowHp"] = 9] = "Triggertype_NowHp";
          Triggertype[Triggertype["Triggertype_TotalLostHp"] = 10] = "Triggertype_TotalLostHp";
          Triggertype[Triggertype["Triggertype_HarmTest"] = 11] = "Triggertype_HarmTest";
          Triggertype[Triggertype["Triggertype_Rogue"] = 12] = "Triggertype_Rogue";
          Triggertype[Triggertype["Triggertype_BeHit"] = 13] = "Triggertype_BeHit";
          Triggertype[Triggertype["Triggertype_Kill"] = 14] = "Triggertype_Kill";
          Triggertype[Triggertype["Triggertype_Dead"] = 15] = "Triggertype_Dead";
          Triggertype[Triggertype["Triggertype_AtHIT"] = 16] = "Triggertype_AtHIT";
          Triggertype[Triggertype["Triggertype_Revive"] = 17] = "Triggertype_Revive";
          Triggertype[Triggertype["Triggertype_SearchEnemy"] = 18] = "Triggertype_SearchEnemy";
          Triggertype[Triggertype["Triggertype_BuffExpiration"] = 19] = "Triggertype_BuffExpiration";
          Triggertype[Triggertype["Triggertype_BackJumpFinish"] = 20] = "Triggertype_BackJumpFinish";
          Triggertype[Triggertype["Triggertype_warning"] = 21] = "Triggertype_warning";
          Triggertype[Triggertype["Triggertype_BossDied"] = 22] = "Triggertype_BossDied";
          Triggertype[Triggertype["Triggertype_AddBuff"] = 23] = "Triggertype_AddBuff";
          Triggertype[Triggertype["Triggertype_CriticalPer"] = 24] = "Triggertype_CriticalPer";
          Triggertype[Triggertype["Triggertype_DamageAdd"] = 25] = "Triggertype_DamageAdd";
          Triggertype[Triggertype["Triggertype_DamageReduce"] = 26] = "Triggertype_DamageReduce";
          Triggertype[Triggertype["Triggertype_DetectionSkill"] = 27] = "Triggertype_DetectionSkill";
          Triggertype[Triggertype["Triggertype_DamageResult"] = 28] = "Triggertype_DamageResult";
          Triggertype[Triggertype["Triggertype_TargetHpDamageAdd"] = 29] = "Triggertype_TargetHpDamageAdd";
          Triggertype[Triggertype["Triggertype_DamageResultReduce"] = 30] = "Triggertype_DamageResultReduce";
          return Triggertype;
        }({});

        _tab.Triggertype = Triggertype;

        let TriggerCondition = /*#__PURE__*/function (TriggerCondition) {
          TriggerCondition[TriggerCondition["TriggerCondition_AttackNum"] = 0] = "TriggerCondition_AttackNum";
          TriggerCondition[TriggerCondition["TriggerCondition_HoldTime"] = 1] = "TriggerCondition_HoldTime";
          TriggerCondition[TriggerCondition["TriggerCondition_TimeRefresh"] = 2] = "TriggerCondition_TimeRefresh";
          TriggerCondition[TriggerCondition["TriggerCondition_SkillId"] = 3] = "TriggerCondition_SkillId";
          TriggerCondition[TriggerCondition["TriggerCondition_SkillGroup"] = 4] = "TriggerCondition_SkillGroup";
          TriggerCondition[TriggerCondition["TriggerCondition_HpLostPer"] = 5] = "TriggerCondition_HpLostPer";
          TriggerCondition[TriggerCondition["TriggerCondition_Critical"] = 6] = "TriggerCondition_Critical";
          TriggerCondition[TriggerCondition["TriggerCondition_HpPer"] = 7] = "TriggerCondition_HpPer";
          TriggerCondition[TriggerCondition["TriggerCondition_CriticalPoint"] = 8] = "TriggerCondition_CriticalPoint";
          TriggerCondition[TriggerCondition["TriggerCondition_BeCriticalPoint"] = 9] = "TriggerCondition_BeCriticalPoint";
          TriggerCondition[TriggerCondition["TriggerCondition_BeCritical"] = 10] = "TriggerCondition_BeCritical";
          TriggerCondition[TriggerCondition["TriggerCondition_RogueId"] = 11] = "TriggerCondition_RogueId";
          TriggerCondition[TriggerCondition["TriggerCondition_TotalHpLostPer"] = 12] = "TriggerCondition_TotalHpLostPer";
          TriggerCondition[TriggerCondition["TriggerCondition_TimeInterval"] = 13] = "TriggerCondition_TimeInterval";
          TriggerCondition[TriggerCondition["TriggerCondition_Distance"] = 14] = "TriggerCondition_Distance";
          TriggerCondition[TriggerCondition["TriggerCondition_Level"] = 15] = "TriggerCondition_Level";
          TriggerCondition[TriggerCondition["TriggerCondition_BuffId"] = 16] = "TriggerCondition_BuffId";
          TriggerCondition[TriggerCondition["TriggerCondition_BuffLayerNum"] = 17] = "TriggerCondition_BuffLayerNum";
          TriggerCondition[TriggerCondition["TriggerCondition_WarnType"] = 18] = "TriggerCondition_WarnType";
          TriggerCondition[TriggerCondition["TriggerCondition_HpRatio"] = 19] = "TriggerCondition_HpRatio";
          TriggerCondition[TriggerCondition["TriggerCondition_CheckAttr"] = 20] = "TriggerCondition_CheckAttr";
          TriggerCondition[TriggerCondition["TriggerCondition_EveryHpLostPer"] = 21] = "TriggerCondition_EveryHpLostPer";
          TriggerCondition[TriggerCondition["TriggerCondition_DetectionSkillId"] = 22] = "TriggerCondition_DetectionSkillId";
          return TriggerCondition;
        }({});

        _tab.TriggerCondition = TriggerCondition;

        let Behavior = /*#__PURE__*/function (Behavior) {
          Behavior[Behavior["Behavior_UseSkill"] = 0] = "Behavior_UseSkill";
          Behavior[Behavior["Behavior_SwitchGroup"] = 1] = "Behavior_SwitchGroup";
          Behavior[Behavior["Behavior_SwitchSkill"] = 2] = "Behavior_SwitchSkill";
          Behavior[Behavior["Behavior_AddBuff"] = 3] = "Behavior_AddBuff";
          Behavior[Behavior["Behavior_HarmPer"] = 4] = "Behavior_HarmPer";
          Behavior[Behavior["Behavior_UseEffect"] = 5] = "Behavior_UseEffect";
          Behavior[Behavior["Behavior_AddAttackNum"] = 6] = "Behavior_AddAttackNum";
          Behavior[Behavior["Behavior_Dead"] = 7] = "Behavior_Dead";
          Behavior[Behavior["Behavior_Revive"] = 8] = "Behavior_Revive";
          Behavior[Behavior["Behavior_BackJump"] = 9] = "Behavior_BackJump";
          Behavior[Behavior["Behavior_Summon"] = 10] = "Behavior_Summon";
          Behavior[Behavior["Behavior_AddSkill"] = 11] = "Behavior_AddSkill";
          Behavior[Behavior["Behavior_BuffClear"] = 12] = "Behavior_BuffClear";
          Behavior[Behavior["Behavior_ConditionAddBuff"] = 13] = "Behavior_ConditionAddBuff";
          Behavior[Behavior["Behavior_ReplaceMonsterAnimation"] = 14] = "Behavior_ReplaceMonsterAnimation";
          Behavior[Behavior["Behavior_ModifyLogicParameter"] = 15] = "Behavior_ModifyLogicParameter";
          Behavior[Behavior["Behavior_BuffClearType"] = 16] = "Behavior_BuffClearType";
          Behavior[Behavior["Behavior_ModifyLogicParameterRange"] = 17] = "Behavior_ModifyLogicParameterRange";
          return Behavior;
        }({});

        _tab.Behavior = Behavior;

        let TriggerTarget = /*#__PURE__*/function (TriggerTarget) {
          TriggerTarget[TriggerTarget["TriggerTarget_Mine"] = 0] = "TriggerTarget_Mine";
          TriggerTarget[TriggerTarget["TriggerTarget_Enemy"] = 1] = "TriggerTarget_Enemy";
          return TriggerTarget;
        }({});

        _tab.TriggerTarget = TriggerTarget;

        let TriggerGoal = /*#__PURE__*/function (TriggerGoal) {
          TriggerGoal[TriggerGoal["TriggerGoal_Mine"] = 0] = "TriggerGoal_Mine";
          TriggerGoal[TriggerGoal["TriggerGoal_Enemy"] = 1] = "TriggerGoal_Enemy";
          return TriggerGoal;
        }({});

        _tab.TriggerGoal = TriggerGoal;

        let BoundType = /*#__PURE__*/function (BoundType) {
          BoundType[BoundType["BoundType_Circle"] = 0] = "BoundType_Circle";
          BoundType[BoundType["BoundType_Rectangle"] = 1] = "BoundType_Rectangle";
          return BoundType;
        }({});

        _tab.BoundType = BoundType;

        let PowerType = /*#__PURE__*/function (PowerType) {
          PowerType[PowerType["PowerType_SkillGroupTable"] = 0] = "PowerType_SkillGroupTable";
          PowerType[PowerType["PowerType_SkillTable"] = 1] = "PowerType_SkillTable";
          PowerType[PowerType["PowerType_BuffTable"] = 2] = "PowerType_BuffTable";
          PowerType[PowerType["PowerType_EffectTable"] = 3] = "PowerType_EffectTable";
          PowerType[PowerType["PowerType_BulletTable"] = 4] = "PowerType_BulletTable";
          PowerType[PowerType["PowerType_TriggerTable"] = 5] = "PowerType_TriggerTable";
          return PowerType;
        }({});

        _tab.PowerType = PowerType;

        let PveStageType = /*#__PURE__*/function (PveStageType) {
          PveStageType[PveStageType["PveStageType_MainChapter"] = 0] = "PveStageType_MainChapter";
          PveStageType[PveStageType["PveStageType_GoldStage"] = 1] = "PveStageType_GoldStage";
          PveStageType[PveStageType["PveStageType_FeedStage"] = 2] = "PveStageType_FeedStage";
          PveStageType[PveStageType["PveStageType_DailyChallenge"] = 3] = "PveStageType_DailyChallenge";
          PveStageType[PveStageType["PveStageType_ClimbTower"] = 4] = "PveStageType_ClimbTower";
          PveStageType[PveStageType["PveStageType_WorldBoss"] = 5] = "PveStageType_WorldBoss";
          PveStageType[PveStageType["PveStageType_GuildBoss"] = 6] = "PveStageType_GuildBoss";
          PveStageType[PveStageType["PveStageType_VoidStage"] = 7] = "PveStageType_VoidStage";
          PveStageType[PveStageType["PveStageType_PVPBattle"] = 8] = "PveStageType_PVPBattle";
          PveStageType[PveStageType["PveStageType_EliteChapter"] = 9] = "PveStageType_EliteChapter";
          return PveStageType;
        }({});

        _tab.PveStageType = PveStageType;

        let EggDropType = /*#__PURE__*/function (EggDropType) {
          EggDropType[EggDropType["EggDropType_None"] = 0] = "EggDropType_None";
          EggDropType[EggDropType["EggDropType_TimeDrop"] = 1] = "EggDropType_TimeDrop";
          EggDropType[EggDropType["EggDropType_ExperienceDrop"] = 2] = "EggDropType_ExperienceDrop";
          return EggDropType;
        }({});

        _tab.EggDropType = EggDropType;

        let RobotType = /*#__PURE__*/function (RobotType) {
          RobotType[RobotType["RobotType_None"] = 0] = "RobotType_None";
          RobotType[RobotType["RobotType_PVP"] = 1] = "RobotType_PVP";
          return RobotType;
        }({});

        _tab.RobotType = RobotType;

        let VirtualItemType = /*#__PURE__*/function (VirtualItemType) {
          VirtualItemType[VirtualItemType["VirtualItemType_None"] = 0] = "VirtualItemType_None";
          VirtualItemType[VirtualItemType["VirtualItemType_Eggs"] = 1] = "VirtualItemType_Eggs";
          VirtualItemType[VirtualItemType["VirtualItemType_Feathers"] = 2] = "VirtualItemType_Feathers";
          return VirtualItemType;
        }({});

        _tab.VirtualItemType = VirtualItemType;

        let EffectTarget = /*#__PURE__*/function (EffectTarget) {
          EffectTarget[EffectTarget["EffectTarget_None"] = 0] = "EffectTarget_None";
          EffectTarget[EffectTarget["EffectTarget_Hero"] = 1] = "EffectTarget_Hero";
          EffectTarget[EffectTarget["EffectTarget_Monster"] = 2] = "EffectTarget_Monster";
          EffectTarget[EffectTarget["EffectTarget_Rogue"] = 3] = "EffectTarget_Rogue";
          EffectTarget[EffectTarget["EffectTarget_Book"] = 4] = "EffectTarget_Book";
          return EffectTarget;
        }({});

        _tab.EffectTarget = EffectTarget;

        let OwnClass = /*#__PURE__*/function (OwnClass) {
          OwnClass[OwnClass["OwnClass_All"] = 0] = "OwnClass_All";
          OwnClass[OwnClass["OwnClass_Assassin"] = 1] = "OwnClass_Assassin";
          OwnClass[OwnClass["OwnClass_Archer"] = 2] = "OwnClass_Archer";
          OwnClass[OwnClass["OwnClass_Priest"] = 3] = "OwnClass_Priest";
          OwnClass[OwnClass["OwnClass_Caster"] = 4] = "OwnClass_Caster";
          OwnClass[OwnClass["OwnClass_Warrior"] = 5] = "OwnClass_Warrior";
          OwnClass[OwnClass["OwnClass_TeamLeader"] = 6] = "OwnClass_TeamLeader";
          return OwnClass;
        }({});

        _tab.OwnClass = OwnClass;

        let RogueActivationCondition = /*#__PURE__*/function (RogueActivationCondition) {
          RogueActivationCondition[RogueActivationCondition["RogueActivationCondition_Default"] = 0] = "RogueActivationCondition_Default";
          RogueActivationCondition[RogueActivationCondition["RogueActivationCondition_WearBook"] = 1] = "RogueActivationCondition_WearBook";
          return RogueActivationCondition;
        }({});

        _tab.RogueActivationCondition = RogueActivationCondition;

        let SoundType = /*#__PURE__*/function (SoundType) {
          SoundType[SoundType["SoundType_Music"] = 0] = "SoundType_Music";
          SoundType[SoundType["SoundType_SoundEffect"] = 1] = "SoundType_SoundEffect";
          return SoundType;
        }({});

        _tab.SoundType = SoundType;

        let EquipType = /*#__PURE__*/function (EquipType) {
          EquipType[EquipType["EquipType_None"] = 0] = "EquipType_None";
          EquipType[EquipType["EquipType_Gloves"] = 1] = "EquipType_Gloves";
          EquipType[EquipType["EquipType_Clothing"] = 2] = "EquipType_Clothing";
          EquipType[EquipType["EquipType_Cloak"] = 3] = "EquipType_Cloak";
          EquipType[EquipType["EquipType_Hat"] = 4] = "EquipType_Hat";
          EquipType[EquipType["EquipType_Feather"] = 5] = "EquipType_Feather";
          EquipType[EquipType["EquipType_Max"] = 6] = "EquipType_Max";
          return EquipType;
        }({});

        _tab.EquipType = EquipType;

        let EquipGroupType = /*#__PURE__*/function (EquipGroupType) {
          EquipGroupType[EquipGroupType["EquipGroupType_None"] = 0] = "EquipGroupType_None";
          EquipGroupType[EquipGroupType["EquipGroupType_Attr"] = 1] = "EquipGroupType_Attr";
          EquipGroupType[EquipGroupType["EquipGroupType_SkillGroup"] = 2] = "EquipGroupType_SkillGroup";
          EquipGroupType[EquipGroupType["EquipGroupType_Group"] = 3] = "EquipGroupType_Group";
          return EquipGroupType;
        }({});

        _tab.EquipGroupType = EquipGroupType;

        let EquipGroupMode = /*#__PURE__*/function (EquipGroupMode) {
          EquipGroupMode[EquipGroupMode["EquipGroupMode_None"] = 0] = "EquipGroupMode_None";
          EquipGroupMode[EquipGroupMode["EquipGroupMode_Repeat"] = 1] = "EquipGroupMode_Repeat";
          EquipGroupMode[EquipGroupMode["EquipGroupMode_Only"] = 2] = "EquipGroupMode_Only";
          EquipGroupMode[EquipGroupMode["EquipGroupMode_All"] = 3] = "EquipGroupMode_All";
          return EquipGroupMode;
        }({});

        _tab.EquipGroupMode = EquipGroupMode;

        let MasterType = /*#__PURE__*/function (MasterType) {
          MasterType[MasterType["MasterType_None"] = 0] = "MasterType_None";
          MasterType[MasterType["MasterType_Quality"] = 1] = "MasterType_Quality";
          MasterType[MasterType["MasterType_Enhance"] = 2] = "MasterType_Enhance";
          MasterType[MasterType["MasterType_Refine"] = 3] = "MasterType_Refine";
          return MasterType;
        }({});

        _tab.MasterType = MasterType;

        let EquipUpgradeType = /*#__PURE__*/function (EquipUpgradeType) {
          EquipUpgradeType[EquipUpgradeType["EquipUpgradeType_None"] = 0] = "EquipUpgradeType_None";
          EquipUpgradeType[EquipUpgradeType["EquipUpgradeType_Enhance"] = 1] = "EquipUpgradeType_Enhance";
          EquipUpgradeType[EquipUpgradeType["EquipUpgradeType_Refine"] = 2] = "EquipUpgradeType_Refine";
          EquipUpgradeType[EquipUpgradeType["EquipUpgradeType_Recast"] = 3] = "EquipUpgradeType_Recast";
          return EquipUpgradeType;
        }({});

        _tab.EquipUpgradeType = EquipUpgradeType;

        let GeneType = /*#__PURE__*/function (GeneType) {
          GeneType[GeneType["GeneType_None"] = 0] = "GeneType_None";
          GeneType[GeneType["GeneType_SmallGene"] = 1] = "GeneType_SmallGene";
          GeneType[GeneType["GeneType_BigGene"] = 2] = "GeneType_BigGene";
          return GeneType;
        }({});

        _tab.GeneType = GeneType;

        let GeneUnlockType = /*#__PURE__*/function (GeneUnlockType) {
          GeneUnlockType[GeneUnlockType["GeneUnlockType_None"] = 0] = "GeneUnlockType_None";
          GeneUnlockType[GeneUnlockType["GeneUnlockType_RoleLevel"] = 1] = "GeneUnlockType_RoleLevel";
          GeneUnlockType[GeneUnlockType["GeneUnlockType_SmallGeneLevel"] = 2] = "GeneUnlockType_SmallGeneLevel";
          return GeneUnlockType;
        }({});

        _tab.GeneUnlockType = GeneUnlockType;

        let BookSlotType = /*#__PURE__*/function (BookSlotType) {
          BookSlotType[BookSlotType["BookSlotType_None"] = 0] = "BookSlotType_None";
          BookSlotType[BookSlotType["BookSlotType_Slot1"] = 1] = "BookSlotType_Slot1";
          BookSlotType[BookSlotType["BookSlotType_Slot2"] = 2] = "BookSlotType_Slot2";
          BookSlotType[BookSlotType["BookSlotType_Slot3"] = 3] = "BookSlotType_Slot3";
          BookSlotType[BookSlotType["BookSlotType_Slot4"] = 4] = "BookSlotType_Slot4";
          BookSlotType[BookSlotType["BookSlotType_Slot5"] = 5] = "BookSlotType_Slot5";
          BookSlotType[BookSlotType["BookSlotType_Max"] = 6] = "BookSlotType_Max";
          return BookSlotType;
        }({});

        _tab.BookSlotType = BookSlotType;

        let BookSlotUnlockType = /*#__PURE__*/function (BookSlotUnlockType) {
          BookSlotUnlockType[BookSlotUnlockType["BookSlotUnlockType_None"] = 0] = "BookSlotUnlockType_None";
          BookSlotUnlockType[BookSlotUnlockType["BookSlotUnlockType_Experience"] = 1] = "BookSlotUnlockType_Experience";
          return BookSlotUnlockType;
        }({});

        _tab.BookSlotUnlockType = BookSlotUnlockType;

        let LimitTimeItemType = /*#__PURE__*/function (LimitTimeItemType) {
          LimitTimeItemType[LimitTimeItemType["LimitTimeItemType_Duration"] = 0] = "LimitTimeItemType_Duration";
          LimitTimeItemType[LimitTimeItemType["LimitTimeItemType_FixedTime"] = 1] = "LimitTimeItemType_FixedTime";
          return LimitTimeItemType;
        }({});

        _tab.LimitTimeItemType = LimitTimeItemType;

        let LimitTimeItemReplace = /*#__PURE__*/function (LimitTimeItemReplace) {
          LimitTimeItemReplace[LimitTimeItemReplace["LimitTimeItemReplace_None"] = 0] = "LimitTimeItemReplace_None";
          LimitTimeItemReplace[LimitTimeItemReplace["LimitTimeItemReplace_AccumulatedTime"] = 1] = "LimitTimeItemReplace_AccumulatedTime";
          LimitTimeItemReplace[LimitTimeItemReplace["LimitTimeItemReplace_DeadLine"] = 2] = "LimitTimeItemReplace_DeadLine";
          return LimitTimeItemReplace;
        }({});

        _tab.LimitTimeItemReplace = LimitTimeItemReplace;

        let DropType = /*#__PURE__*/function (DropType) {
          DropType[DropType["DropType_None"] = 0] = "DropType_None";
          DropType[DropType["DropType_Odds"] = 1] = "DropType_Odds";
          DropType[DropType["DropType_Weight"] = 2] = "DropType_Weight";
          DropType[DropType["DropType_GroupOdds"] = 3] = "DropType_GroupOdds";
          DropType[DropType["DropType_GroupWeight"] = 4] = "DropType_GroupWeight";
          return DropType;
        }({});

        _tab.DropType = DropType;

        let DropEventType = /*#__PURE__*/function (DropEventType) {
          DropEventType[DropEventType["DropEventType_None"] = 0] = "DropEventType_None";
          DropEventType[DropEventType["DropEventType_Sum"] = 1] = "DropEventType_Sum";
          DropEventType[DropEventType["DropEventType_ReplaceDropId"] = 2] = "DropEventType_ReplaceDropId";
          DropEventType[DropEventType["DropEventType_HitResetSum"] = 3] = "DropEventType_HitResetSum";
          DropEventType[DropEventType["DropEventType_SumAddOdds"] = 4] = "DropEventType_SumAddOdds";
          DropEventType[DropEventType["DropEventType_MissCheckByItemId"] = 5] = "DropEventType_MissCheckByItemId";
          DropEventType[DropEventType["DropEventType_ReplaceDropIdByDropId"] = 6] = "DropEventType_ReplaceDropIdByDropId";
          return DropEventType;
        }({});

        _tab.DropEventType = DropEventType;

        let AdType = /*#__PURE__*/function (AdType) {
          AdType[AdType["AdType_None"] = 0] = "AdType_None";
          AdType[AdType["AdType_MainChapterReward"] = 1] = "AdType_MainChapterReward";
          AdType[AdType["AdType_Gacha101"] = 2] = "AdType_Gacha101";
          AdType[AdType["AdType_Gacha301"] = 3] = "AdType_Gacha301";
          AdType[AdType["AdType_Gacha1001"] = 4] = "AdType_Gacha1001";
          AdType[AdType["AdType_BuyStamina"] = 5] = "AdType_BuyStamina";
          AdType[AdType["AdType_QuickPatrol"] = 6] = "AdType_QuickPatrol";
          AdType[AdType["AdType_LimitedReward"] = 7] = "AdType_LimitedReward";
          AdType[AdType["AdType_BuyDailyShop"] = 8] = "AdType_BuyDailyShop";
          AdType[AdType["AdType_FightReviveByAdvert"] = 9] = "AdType_FightReviveByAdvert";
          AdType[AdType["AdType_BuyGold"] = 10] = "AdType_BuyGold";
          AdType[AdType["AdType_SpecialGiftDaily"] = 11] = "AdType_SpecialGiftDaily";
          AdType[AdType["AdType_SpecialGiftWeekly"] = 12] = "AdType_SpecialGiftWeekly";
          AdType[AdType["AdType_SpecialGiftMonthly"] = 13] = "AdType_SpecialGiftMonthly";
          AdType[AdType["AdType_DailyChallenge"] = 14] = "AdType_DailyChallenge";
          AdType[AdType["AdType_RogueRefreshByAdvert"] = 15] = "AdType_RogueRefreshByAdvert";
          AdType[AdType["AdType_ActivityMallDailyGift"] = 16] = "AdType_ActivityMallDailyGift";
          return AdType;
        }({});

        _tab.AdType = AdType;

        let RefreshType = /*#__PURE__*/function (RefreshType) {
          RefreshType[RefreshType["RefreshType_Daily"] = 0] = "RefreshType_Daily";
          RefreshType[RefreshType["RefreshType_Weekly"] = 1] = "RefreshType_Weekly";
          RefreshType[RefreshType["RefreshType_Monthly"] = 2] = "RefreshType_Monthly";
          RefreshType[RefreshType["RefreshType_Unable"] = 3] = "RefreshType_Unable";
          RefreshType[RefreshType["RefreshType_Max"] = 4] = "RefreshType_Max";
          return RefreshType;
        }({});

        _tab.RefreshType = RefreshType;

        let FinishTaskType = /*#__PURE__*/function (FinishTaskType) {
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeLogin"] = 0] = "FinishTaskType_CumulativeLogin";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeAptitudeHero"] = 1] = "FinishTaskType_CumulativeAptitudeHero";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeConsumeDiamonds"] = 2] = "FinishTaskType_CumulativeConsumeDiamonds";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeConsumeGold"] = 3] = "FinishTaskType_CumulativeConsumeGold";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeConsumeStamina"] = 4] = "FinishTaskType_CumulativeConsumeStamina";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeMainChapterCount"] = 5] = "FinishTaskType_CumulativeMainChapterCount";
          FinishTaskType[FinishTaskType["FinishTaskType_PlayerLevel"] = 6] = "FinishTaskType_PlayerLevel";
          FinishTaskType[FinishTaskType["FinishTaskType_PassedPveStage"] = 7] = "FinishTaskType_PassedPveStage";
          FinishTaskType[FinishTaskType["FinishTaskType_PassedMainChapter"] = 8] = "FinishTaskType_PassedMainChapter";
          FinishTaskType[FinishTaskType["FinishTaskType_GeneCount"] = 9] = "FinishTaskType_GeneCount";
          FinishTaskType[FinishTaskType["FinishTaskType_EnhancedEquipCount"] = 10] = "FinishTaskType_EnhancedEquipCount";
          FinishTaskType[FinishTaskType["FinishTaskType_ConsumeStamina"] = 11] = "FinishTaskType_ConsumeStamina";
          FinishTaskType[FinishTaskType["FinishTaskType_Login"] = 12] = "FinishTaskType_Login";
          FinishTaskType[FinishTaskType["FinishTaskType_ViaPveStageType"] = 13] = "FinishTaskType_ViaPveStageType";
          FinishTaskType[FinishTaskType["FinishTaskType_OwnHeroLevel"] = 14] = "FinishTaskType_OwnHeroLevel";
          FinishTaskType[FinishTaskType["FinishTaskType_GetPatrolReward"] = 15] = "FinishTaskType_GetPatrolReward";
          FinishTaskType[FinishTaskType["FinishTaskType_QuickPatrolCount"] = 16] = "FinishTaskType_QuickPatrolCount";
          FinishTaskType[FinishTaskType["FinishTaskType_GiveFriendship"] = 17] = "FinishTaskType_GiveFriendship";
          FinishTaskType[FinishTaskType["FinishTaskType_GetFriendship"] = 18] = "FinishTaskType_GetFriendship";
          FinishTaskType[FinishTaskType["FinishTaskType_DrawCardByFunction"] = 19] = "FinishTaskType_DrawCardByFunction";
          FinishTaskType[FinishTaskType["FinishTaskType_HeroUpgrade"] = 20] = "FinishTaskType_HeroUpgrade";
          FinishTaskType[FinishTaskType["FinishTaskType_HeroStarUpgrade"] = 21] = "FinishTaskType_HeroStarUpgrade";
          FinishTaskType[FinishTaskType["FinishTaskType_MallPurchaseByMallType"] = 22] = "FinishTaskType_MallPurchaseByMallType";
          FinishTaskType[FinishTaskType["FinishTaskType_QuestLogLevel"] = 23] = "FinishTaskType_QuestLogLevel";
          FinishTaskType[FinishTaskType["FinishTaskType_ActivityRecharge"] = 24] = "FinishTaskType_ActivityRecharge";
          FinishTaskType[FinishTaskType["FinishTaskType_FeatherCollect"] = 25] = "FinishTaskType_FeatherCollect";
          FinishTaskType[FinishTaskType["FinishTaskType_BossKill"] = 26] = "FinishTaskType_BossKill";
          FinishTaskType[FinishTaskType["FinishTaskType_WorldBossHarmMax"] = 27] = "FinishTaskType_WorldBossHarmMax";
          FinishTaskType[FinishTaskType["FinishTaskType_PlayerPowerScore"] = 28] = "FinishTaskType_PlayerPowerScore";
          FinishTaskType[FinishTaskType["FinishTaskType_DailyChallengeScore"] = 29] = "FinishTaskType_DailyChallengeScore";
          FinishTaskType[FinishTaskType["FinishTaskType_GuildDonateCount"] = 31] = "FinishTaskType_GuildDonateCount";
          FinishTaskType[FinishTaskType["FinishTaskType_GuildAttrLevelUp"] = 32] = "FinishTaskType_GuildAttrLevelUp";
          FinishTaskType[FinishTaskType["FinishTaskType_ConsumeDiamonds"] = 33] = "FinishTaskType_ConsumeDiamonds";
          FinishTaskType[FinishTaskType["FinishTaskType_FinishTaskTypeCount"] = 34] = "FinishTaskType_FinishTaskTypeCount";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeGacha"] = 2001] = "FinishTaskType_CumulativeGacha";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativePveStage"] = 2002] = "FinishTaskType_CumulativePveStage";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeFeatherCollect"] = 2004] = "FinishTaskType_CumulativeFeatherCollect";
          FinishTaskType[FinishTaskType["FinishTaskType_CumulativeBossKill"] = 2005] = "FinishTaskType_CumulativeBossKill";
          return FinishTaskType;
        }({});

        _tab.FinishTaskType = FinishTaskType;

        let TaskType = /*#__PURE__*/function (TaskType) {
          TaskType[TaskType["TaskType_None"] = 0] = "TaskType_None";
          TaskType[TaskType["TaskType_DailyTask"] = 1] = "TaskType_DailyTask";
          TaskType[TaskType["TaskType_WeeklyTask"] = 2] = "TaskType_WeeklyTask";
          TaskType[TaskType["TaskType_AchievementTask"] = 3] = "TaskType_AchievementTask";
          TaskType[TaskType["TaskType_QuestLog"] = 4] = "TaskType_QuestLog";
          TaskType[TaskType["TaskType_BattlePass"] = 5] = "TaskType_BattlePass";
          TaskType[TaskType["TaskType_ActivityNewPlayerTask"] = 6] = "TaskType_ActivityNewPlayerTask";
          TaskType[TaskType["TaskType_GuildDailyTask"] = 7] = "TaskType_GuildDailyTask";
          return TaskType;
        }({});

        _tab.TaskType = TaskType;

        let RankType = /*#__PURE__*/function (RankType) {
          RankType[RankType["RankType_Unknown"] = 0] = "RankType_Unknown";
          RankType[RankType["RankType_Stage"] = 1] = "RankType_Stage";
          RankType[RankType["RankType_Level"] = 2] = "RankType_Level";
          RankType[RankType["RankType_PowerScore"] = 3] = "RankType_PowerScore";
          RankType[RankType["RankType_Assassin"] = 4] = "RankType_Assassin";
          RankType[RankType["RankType_Archer"] = 5] = "RankType_Archer";
          RankType[RankType["RankType_Priest"] = 6] = "RankType_Priest";
          RankType[RankType["RankType_Caster"] = 7] = "RankType_Caster";
          RankType[RankType["RankType_Warrior"] = 8] = "RankType_Warrior";
          RankType[RankType["RankType_WorldBoss"] = 9] = "RankType_WorldBoss";
          RankType[RankType["RankType_Guild"] = 10] = "RankType_Guild";
          RankType[RankType["RankType_GuildBoss"] = 11] = "RankType_GuildBoss";
          RankType[RankType["RankType_GuildBossPlayer"] = 12] = "RankType_GuildBossPlayer";
          RankType[RankType["RankType_FincaFight"] = 13] = "RankType_FincaFight";
          RankType[RankType["RankType_EliteChapter"] = 14] = "RankType_EliteChapter";
          return RankType;
        }({});

        _tab.RankType = RankType;

        let RankRewardType = /*#__PURE__*/function (RankRewardType) {
          RankRewardType[RankRewardType["RankRewardType_None"] = 0] = "RankRewardType_None";
          RankRewardType[RankRewardType["RankRewardType_DailyReward"] = 1] = "RankRewardType_DailyReward";
          RankRewardType[RankRewardType["RankRewardType_CloseReward"] = 2] = "RankRewardType_CloseReward";
          RankRewardType[RankRewardType["RankRewardType_SpecifyReward"] = 3] = "RankRewardType_SpecifyReward";
          RankRewardType[RankRewardType["RankRewardType_CodeReward"] = 4] = "RankRewardType_CodeReward";
          return RankRewardType;
        }({});

        _tab.RankRewardType = RankRewardType;

        let RankClearType = /*#__PURE__*/function (RankClearType) {
          RankClearType[RankClearType["RankClearType_None"] = 0] = "RankClearType_None";
          RankClearType[RankClearType["RankClearType_SettleClear"] = 1] = "RankClearType_SettleClear";
          RankClearType[RankClearType["RankClearType_OpenClear"] = 2] = "RankClearType_OpenClear";
          RankClearType[RankClearType["RankClearType_CloseClear"] = 3] = "RankClearType_CloseClear";
          return RankClearType;
        }({});

        _tab.RankClearType = RankClearType;

        let NoticeType = /*#__PURE__*/function (NoticeType) {
          NoticeType[NoticeType["NoticeType_GetItemAptitude"] = 0] = "NoticeType_GetItemAptitude";
          NoticeType[NoticeType["NoticeType_GetItemQuality"] = 1] = "NoticeType_GetItemQuality";
          return NoticeType;
        }({});

        _tab.NoticeType = NoticeType;

        let BuyStaminaType = /*#__PURE__*/function (BuyStaminaType) {
          BuyStaminaType[BuyStaminaType["BuyStaminaType_WatchAdverts"] = 0] = "BuyStaminaType_WatchAdverts";
          BuyStaminaType[BuyStaminaType["BuyStaminaType_UseCurrency"] = 1] = "BuyStaminaType_UseCurrency";
          BuyStaminaType[BuyStaminaType["BuyStaminaType_BuyMissStamina"] = 2] = "BuyStaminaType_BuyMissStamina";
          return BuyStaminaType;
        }({});

        _tab.BuyStaminaType = BuyStaminaType;

        let LimitedRewardType = /*#__PURE__*/function (LimitedRewardType) {
          LimitedRewardType[LimitedRewardType["LimitedRewardType_None"] = 0] = "LimitedRewardType_None";
          LimitedRewardType[LimitedRewardType["LimitedRewardType_ItemBelow"] = 1] = "LimitedRewardType_ItemBelow";
          return LimitedRewardType;
        }({});

        _tab.LimitedRewardType = LimitedRewardType;

        let DailyRewardType = /*#__PURE__*/function (DailyRewardType) {
          DailyRewardType[DailyRewardType["DailyRewardType_Unknown"] = 0] = "DailyRewardType_Unknown";
          DailyRewardType[DailyRewardType["DailyRewardType_NewServer"] = 1] = "DailyRewardType_NewServer";
          DailyRewardType[DailyRewardType["DailyRewardType_Daily"] = 2] = "DailyRewardType_Daily";
          return DailyRewardType;
        }({});

        _tab.DailyRewardType = DailyRewardType;

        let MallType = /*#__PURE__*/function (MallType) {
          MallType[MallType["MallType_None"] = 0] = "MallType_None";
          MallType[MallType["MallType_BaseShop"] = 1] = "MallType_BaseShop";
          MallType[MallType["MallType_SpecialGift"] = 2] = "MallType_SpecialGift";
          MallType[MallType["MallType_ActivityNewPlayerTask"] = 3] = "MallType_ActivityNewPlayerTask";
          MallType[MallType["MallType_MainChapterGift"] = 4] = "MallType_MainChapterGift";
          MallType[MallType["MallType_NewPlayerMall"] = 5] = "MallType_NewPlayerMall";
          MallType[MallType["MallType_NewPlayerMall2"] = 6] = "MallType_NewPlayerMall2";
          MallType[MallType["MallType_ActivityMall"] = 7] = "MallType_ActivityMall";
          return MallType;
        }({});

        _tab.MallType = MallType;

        let MallTab = /*#__PURE__*/function (MallTab) {
          MallTab[MallTab["MallTab_None"] = 0] = "MallTab_None";
          MallTab[MallTab["MallTab_Tab1"] = 1] = "MallTab_Tab1";
          MallTab[MallTab["MallTab_Tab2"] = 2] = "MallTab_Tab2";
          MallTab[MallTab["MallTab_Tab3"] = 3] = "MallTab_Tab3";
          MallTab[MallTab["MallTab_Tab4"] = 4] = "MallTab_Tab4";
          MallTab[MallTab["MallTab_Tab5"] = 5] = "MallTab_Tab5";
          MallTab[MallTab["MallTab_SpecialGiftTab1"] = 11] = "MallTab_SpecialGiftTab1";
          MallTab[MallTab["MallTab_NewPlayerMall"] = 12] = "MallTab_NewPlayerMall";
          MallTab[MallTab["MallTab_NewPlayerMall2"] = 13] = "MallTab_NewPlayerMall2";
          return MallTab;
        }({});

        _tab.MallTab = MallTab;

        let MallCostType = /*#__PURE__*/function (MallCostType) {
          MallCostType[MallCostType["MallCostType_CostItem"] = 0] = "MallCostType_CostItem";
          MallCostType[MallCostType["MallCostType_Recharge"] = 1] = "MallCostType_Recharge";
          MallCostType[MallCostType["MallCostType_Advert"] = 2] = "MallCostType_Advert";
          return MallCostType;
        }({});

        _tab.MallCostType = MallCostType;

        let HeroCollectionType = /*#__PURE__*/function (HeroCollectionType) {
          HeroCollectionType[HeroCollectionType["HeroCollectionType_Unknown"] = 0] = "HeroCollectionType_Unknown";
          HeroCollectionType[HeroCollectionType["HeroCollectionType_SumSR"] = 1] = "HeroCollectionType_SumSR";
          return HeroCollectionType;
        }({});

        _tab.HeroCollectionType = HeroCollectionType;

        let VipBonus = /*#__PURE__*/function (VipBonus) {
          VipBonus[VipBonus["VipBonus_Unknown"] = 0] = "VipBonus_Unknown";
          VipBonus[VipBonus["VipBonus_OpenFunction"] = 1] = "VipBonus_OpenFunction";
          VipBonus[VipBonus["VipBonus_StaminaLimit"] = 2] = "VipBonus_StaminaLimit";
          VipBonus[VipBonus["VipBonus_PatrolMoneyRatio"] = 3] = "VipBonus_PatrolMoneyRatio";
          VipBonus[VipBonus["VipBonus_PatrolFoodRatio"] = 4] = "VipBonus_PatrolFoodRatio";
          VipBonus[VipBonus["VipBonus_PatrolIdleTime"] = 5] = "VipBonus_PatrolIdleTime";
          VipBonus[VipBonus["VipBonus_QuickPatrolDailyCount"] = 6] = "VipBonus_QuickPatrolDailyCount";
          VipBonus[VipBonus["VipBonus_DailyStageBuySweepCount"] = 7] = "VipBonus_DailyStageBuySweepCount";
          VipBonus[VipBonus["VipBonus_DailyShopRefresh"] = 8] = "VipBonus_DailyShopRefresh";
          VipBonus[VipBonus["VipBonus_HeroBagAddCount"] = 9] = "VipBonus_HeroBagAddCount";
          VipBonus[VipBonus["VipBonus_RefreshCount"] = 12] = "VipBonus_RefreshCount";
          VipBonus[VipBonus["VipBonus_Max"] = 13] = "VipBonus_Max";
          return VipBonus;
        }({});

        _tab.VipBonus = VipBonus;

        let BattlePassType = /*#__PURE__*/function (BattlePassType) {
          BattlePassType[BattlePassType["BattlePassType_BaseBattlePass"] = 0] = "BattlePassType_BaseBattlePass";
          BattlePassType[BattlePassType["BattlePassType_LoopBattlePass"] = 1] = "BattlePassType_LoopBattlePass";
          BattlePassType[BattlePassType["BattlePassType_ActivityBattlePass"] = 2] = "BattlePassType_ActivityBattlePass";
          return BattlePassType;
        }({});

        _tab.BattlePassType = BattlePassType;

        let BattlePassTab = /*#__PURE__*/function (BattlePassTab) {
          BattlePassTab[BattlePassTab["BattlePassTab_MainChapterPass"] = 1] = "BattlePassTab_MainChapterPass";
          BattlePassTab[BattlePassTab["BattlePassTab_PlayerLvPass"] = 2] = "BattlePassTab_PlayerLvPass";
          BattlePassTab[BattlePassTab["BattlePassTab_StaminaPass"] = 3] = "BattlePassTab_StaminaPass";
          BattlePassTab[BattlePassTab["BattlePassTab_QuestLogPass"] = 4] = "BattlePassTab_QuestLogPass";
          BattlePassTab[BattlePassTab["BattlePassTab_ClimbTowerPass"] = 5] = "BattlePassTab_ClimbTowerPass";
          BattlePassTab[BattlePassTab["BattlePassTab_WorldBossPass"] = 6] = "BattlePassTab_WorldBossPass";
          return BattlePassTab;
        }({});

        _tab.BattlePassTab = BattlePassTab;

        let BuyGoldType = /*#__PURE__*/function (BuyGoldType) {
          BuyGoldType[BuyGoldType["BuyGoldType_Buy1"] = 0] = "BuyGoldType_Buy1";
          BuyGoldType[BuyGoldType["BuyGoldType_Buy2"] = 1] = "BuyGoldType_Buy2";
          BuyGoldType[BuyGoldType["BuyGoldType_Buy3"] = 2] = "BuyGoldType_Buy3";
          return BuyGoldType;
        }({});

        _tab.BuyGoldType = BuyGoldType;

        let MailTemplate = /*#__PURE__*/function (MailTemplate) {
          MailTemplate[MailTemplate["MailTemplate_MainStageQuite"] = 0] = "MailTemplate_MainStageQuite";
          MailTemplate[MailTemplate["MailTemplate_FullyHeroBag"] = 1] = "MailTemplate_FullyHeroBag";
          MailTemplate[MailTemplate["MailTemplate_NewServerReward"] = 2] = "MailTemplate_NewServerReward";
          MailTemplate[MailTemplate["MailTemplate_WorldBoss"] = 3] = "MailTemplate_WorldBoss";
          MailTemplate[MailTemplate["MailTemplate_ActivityRank"] = 4] = "MailTemplate_ActivityRank";
          MailTemplate[MailTemplate["MailTemplate_WorldBoss2"] = 5] = "MailTemplate_WorldBoss2";
          MailTemplate[MailTemplate["MailTemplate_NewServerLvRank"] = 6] = "MailTemplate_NewServerLvRank";
          MailTemplate[MailTemplate["MailTemplate_NewServerLvRank2"] = 7] = "MailTemplate_NewServerLvRank2";
          MailTemplate[MailTemplate["MailTemplate_NewServerStageRank"] = 8] = "MailTemplate_NewServerStageRank";
          MailTemplate[MailTemplate["MailTemplate_NewServerStageRank2"] = 9] = "MailTemplate_NewServerStageRank2";
          MailTemplate[MailTemplate["MailTemplate_NewServerWorldBossRank"] = 10] = "MailTemplate_NewServerWorldBossRank";
          MailTemplate[MailTemplate["MailTemplate_NewServerWorldBossRank2"] = 11] = "MailTemplate_NewServerWorldBossRank2";
          MailTemplate[MailTemplate["MailTemplate_NewServerCPRank"] = 12] = "MailTemplate_NewServerCPRank";
          MailTemplate[MailTemplate["MailTemplate_NewServerCPRank2"] = 13] = "MailTemplate_NewServerCPRank2";
          MailTemplate[MailTemplate["MailTemplate_P800ThirdPartyRechargeMail"] = 14] = "MailTemplate_P800ThirdPartyRechargeMail";
          MailTemplate[MailTemplate["MailTemplate_kickedOutGuild"] = 15] = "MailTemplate_kickedOutGuild";
          MailTemplate[MailTemplate["MailTemplate_Gift37Default"] = 16] = "MailTemplate_Gift37Default";
          MailTemplate[MailTemplate["MailTemplate_FincaFightDailyReward"] = 17] = "MailTemplate_FincaFightDailyReward";
          MailTemplate[MailTemplate["MailTemplate_FincaFightWeekReward"] = 18] = "MailTemplate_FincaFightWeekReward";
          MailTemplate[MailTemplate["MailTemplate_GuildBossRank"] = 19] = "MailTemplate_GuildBossRank";
          MailTemplate[MailTemplate["MailTemplate_GuildBossRank2"] = 20] = "MailTemplate_GuildBossRank2";
          MailTemplate[MailTemplate["MailTemplate_GuildBossPlayerRank"] = 21] = "MailTemplate_GuildBossPlayerRank";
          MailTemplate[MailTemplate["MailTemplate_GuildBossPlayerRank2"] = 22] = "MailTemplate_GuildBossPlayerRank2";
          return MailTemplate;
        }({});

        _tab.MailTemplate = MailTemplate;

        let GuideType = /*#__PURE__*/function (GuideType) {
          GuideType[GuideType["GuideType_Trunk"] = 0] = "GuideType_Trunk";
          GuideType[GuideType["GuideType_Branch"] = 1] = "GuideType_Branch";
          return GuideType;
        }({});

        _tab.GuideType = GuideType;

        let SceneType = /*#__PURE__*/function (SceneType) {
          SceneType[SceneType["SceneType_MainScene"] = 0] = "SceneType_MainScene";
          SceneType[SceneType["SceneType_BattleScene"] = 1] = "SceneType_BattleScene";
          return SceneType;
        }({});

        _tab.SceneType = SceneType;

        let HeadUnlockType = /*#__PURE__*/function (HeadUnlockType) {
          HeadUnlockType[HeadUnlockType["HeadUnlockType_None"] = 0] = "HeadUnlockType_None";
          HeadUnlockType[HeadUnlockType["HeadUnlockType_GetHero"] = 1] = "HeadUnlockType_GetHero";
          return HeadUnlockType;
        }({});

        _tab.HeadUnlockType = HeadUnlockType;

        let GuildPosition = /*#__PURE__*/function (GuildPosition) {
          GuildPosition[GuildPosition["GuildPosition_None"] = 0] = "GuildPosition_None";
          GuildPosition[GuildPosition["GuildPosition_President"] = 1] = "GuildPosition_President";
          GuildPosition[GuildPosition["GuildPosition_VicePresident"] = 2] = "GuildPosition_VicePresident";
          GuildPosition[GuildPosition["GuildPosition_Elite"] = 30] = "GuildPosition_Elite";
          GuildPosition[GuildPosition["GuildPosition_Member"] = 50] = "GuildPosition_Member";
          return GuildPosition;
        }({});

        _tab.GuildPosition = GuildPosition;

        let GuildGiftCond = /*#__PURE__*/function (GuildGiftCond) {
          GuildGiftCond[GuildGiftCond["GuildGiftCond_None"] = 0] = "GuildGiftCond_None";
          GuildGiftCond[GuildGiftCond["GuildGiftCond_GuildLevel"] = 1] = "GuildGiftCond_GuildLevel";
          return GuildGiftCond;
        }({});

        _tab.GuildGiftCond = GuildGiftCond;

        let GuildGiftType = /*#__PURE__*/function (GuildGiftType) {
          GuildGiftType[GuildGiftType["GuildGiftType_None"] = 0] = "GuildGiftType_None";
          GuildGiftType[GuildGiftType["GuildGiftType_LoopGift"] = 1] = "GuildGiftType_LoopGift";
          GuildGiftType[GuildGiftType["GuildGiftType_LevelGift"] = 2] = "GuildGiftType_LevelGift";
          return GuildGiftType;
        }({});

        _tab.GuildGiftType = GuildGiftType;

        let ChatBreviaryType = /*#__PURE__*/function (ChatBreviaryType) {
          ChatBreviaryType[ChatBreviaryType["ChatBreviaryType_GuildGiftBargain"] = 0] = "ChatBreviaryType_GuildGiftBargain";
          ChatBreviaryType[ChatBreviaryType["ChatBreviaryType_GuildGiftLow"] = 1] = "ChatBreviaryType_GuildGiftLow";
          return ChatBreviaryType;
        }({});

        _tab.ChatBreviaryType = ChatBreviaryType;

        let GuildOFName = /*#__PURE__*/function (GuildOFName) {
          GuildOFName[GuildOFName["GuildOFName_None"] = 0] = "GuildOFName_None";
          GuildOFName[GuildOFName["GuildOFName_GuildTask"] = 1] = "GuildOFName_GuildTask";
          GuildOFName[GuildOFName["GuildOFName_GuildAttr"] = 2] = "GuildOFName_GuildAttr";
          GuildOFName[GuildOFName["GuildOFName_GuildGift"] = 3] = "GuildOFName_GuildGift";
          GuildOFName[GuildOFName["GuildOFName_GuildBoss"] = 4] = "GuildOFName_GuildBoss";
          return GuildOFName;
        }({});

        _tab.GuildOFName = GuildOFName;

        let PvpType = /*#__PURE__*/function (PvpType) {
          PvpType[PvpType["PvpType_None"] = 0] = "PvpType_None";
          PvpType[PvpType["PvpType_PvP"] = 1] = "PvpType_PvP";
          return PvpType;
        }({});

        _tab.PvpType = PvpType;

        class ItemTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Name = void 0;
            // 道具名称 
            this.Type = void 0;
            // 道具类型 
            this.Quality = void 0;
            // 品质 
            this.Desc = void 0;
            // 道具描述 
            this.Icon = void 0;
            // 道具图标 
            this.MarkTopLeft = void 0;
            // 左上角标 
            this.MarkBottomLeft = void 0;
            // 左下角标 
            this.MarkTopRight = void 0;
            // 右上角标 
            this.BagType = void 0;
            // 背包栏位 
            this.Sort = void 0;
            // 排序 
            this.SimpleItem = void 0;
            // 简单道具 
            this.DropId = void 0;
            // 掉落ID 
            this.AcquireWay = void 0;
          } // 获取途径 


        }

        _tab.ItemTable = ItemTable;

        class ModuleTable {
          constructor() {
            this.ModuleType = void 0;
            // 模块枚举 
            this.ViewName = void 0;
            // UI名称 
            this.Path = void 0;
            // 路径 
            this.ViewType = void 0;
            // 类型 
            this.ZIndex = void 0;
            // 层级 
            this.OpenFunctionId = void 0;
            // 功能名称 
            this.GuildOpenFunction = void 0;
          } // 公会功能 


        }

        _tab.ModuleTable = ModuleTable;

        class OpenFunctionTable {
          constructor() {
            this.Name = void 0;
            // 功能名称 
            this.Type = void 0;
            // 类型 
            this.BattleLv = void 0;
            // 通关关卡 
            this.PlayerLv = void 0;
            // 玩家等级 
            this.CreateDay = void 0;
            // 创角天数 
            this.VipLv = void 0;
            // VIP等级 
            this.Privileged = void 0;
            // 特权 
            this.TipsKey = void 0;
            // 提示文本 
            this.Icon = void 0;
            // 功能图标 
            this.ShowType = void 0;
            // 指南类型 
            this.RewardItemId = void 0;
            // 指南奖励道具ID 
            this.RewardItemNum = void 0;
            // 指南奖励数量 
            this.FunctionUnlockAnimation = void 0;
            // 开启动画节点 
            this.JumpUI = void 0;
            // 跳转界面 
            this.JumpParam = void 0;
          } // 跳转参数 


        }

        _tab.OpenFunctionTable = OpenFunctionTable;

        class RechargeTable {
          constructor() {
            this.Id = void 0;
            // 充值ID 
            this.Price = void 0;
            // 价格(元) 
            this.PriceDollar = void 0;
            // 价格(美分) 
            this.PriceTWD = void 0;
            // 价格(台币) 
            this.PriceHKD = void 0;
            // 价格(港币) 
            this.PriceJPY = void 0;
            // 价格(日元) 
            this.Type = void 0;
            // 充值类型 
            this.Desc = void 0;
            // 描述 
            this.GoodsID = void 0;
            // 商品ID 
            this.RewardItemIds = void 0;
            // 赠送物品ID 
            this.RewardItemNum = void 0;
            // 赠送物品数量 
            this.RefundPenalty = void 0;
            // 退款扣钻石 
            this.ProductIdP800 = void 0;
            // 商品ID(P800) 
            this.ProductId37JP = void 0;
          } // 商品ID(37JP) 


        }

        _tab.RechargeTable = RechargeTable;

        class ActivityCumulativeRechargeTable {
          constructor() {
            this.IndexId = void 0;
            // 索引 
            this.ActivityId = void 0;
            // 活动参数 
            this.ShowId = void 0;
            // 显示档位 
            this.RewardItemIds = void 0;
            // 奖励道具 
            this.RewardItemNum = void 0;
            // 奖励数量 
            this.Total = void 0;
            // 累充(元) 
            this.TotalDollar = void 0;
            // 累充(美分) 
            this.TotalTWD = void 0;
            // 累充(台币) 
            this.TotalHKD = void 0;
            // 累充(港币) 
            this.TotalJPY = void 0;
          } // 累充(日元) 


        }

        _tab.ActivityCumulativeRechargeTable = ActivityCumulativeRechargeTable;

        class ServerlistTable {
          constructor() {
            this.ID = void 0;
            // ID 
            this.Name = void 0;
            // 名称 
            this.Address = void 0;
            // 登录地址 
            this.SvcGroup = void 0;
            // 服务器分组 
            this.ReviewSvcGroup = void 0;
            // 提审服分组 
            this.GMAddress = void 0;
            // GM服务器地址 
            this.NoticeAddr = void 0;
            // 公告地址 
            this.NoticeVerAddr = void 0;
            // 公告版本地址 
            this.PayVerification = void 0;
            // 支付验证 
            this.RefreshSessionKey = void 0;
            // 刷新sessionkey 
            this.AllowCORS = void 0;
            // 是否允许跨域 
            this.SelectServerUrl = void 0;
          } // 选服地址 


        }

        _tab.ServerlistTable = ServerlistTable;

        class ChannelTable {
          constructor() {
            this.ChannelType = void 0;
            // 渠道类型 
            this.BaseUrl = void 0;
            // 基础URL 
            this.HotUpdateUrl = void 0;
            // 热更地址 
            this.BaseUrlTest = void 0;
            // 基础URL-测试 
            this.HotUpdateUrlTest = void 0;
            // 热更地址-测试 
            this.BaseLanguage = void 0;
            // 默认语言 
            this.LanguageList = void 0;
            // 可切换语言组 
            this.DefultID = void 0;
            // 默认服务器ID 
            this.TestSeverID = void 0;
            // 测试服务器ID 
            this.Currency = void 0;
            // 币种类型 
            this.ProductType = void 0;
            // 商品ID字段名 
            this.IosStoreUrl = void 0;
            // 苹果商店地址 
            this.AndroidStoreUrl = void 0;
            // 谷歌商店地址 
            this.FaceBookUrl = void 0;
          } // FaceBook地址 


        }

        _tab.ChannelTable = ChannelTable;

        class AnimationTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.NextAnimation = void 0;
            // 下一个动画 
            this.Type = void 0;
            // 类型 
            this.Path = void 0;
            // 资源路径 
            this.AnimationName = void 0;
            // 动画名称 
            this.FPS = void 0;
            // 每秒帧数 
            this.AnimationSpeed = void 0;
            // 动作速度 
            this.FrameCount = void 0;
            // 总帧数 
            this.Loop = void 0;
            // 循环播放 
            this.Offset = void 0;
            // 偏移 
            this.Scale = void 0;
            // 缩放 
            this.SoundId = void 0;
            // 音效ID 
            this.AttackPoint = void 0;
          } // 攻击点 


        }

        _tab.AnimationTable = AnimationTable;

        class HeroTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Class = void 0;
            // 职业 
            this.Aptitude = void 0;
            // 资质 
            this.Builds = void 0;
            // 流派 
            this.Speciality = void 0;
            // 特性 
            this.DefaultStar = void 0;
            // 初始星级 
            this.BaseHeroAttrId = void 0;
            // 初始属性 
            this.Image = void 0;
            // 立绘 
            this.WeaponHead = void 0;
            // 武器图鉴头像 
            this.SkillIcon1 = void 0;
            // 技能图标 
            this.SkillIcon2 = void 0;
            // 天赋图标 
            this.SkillIcon3 = void 0;
            // 觉醒图标 
            this.Shadow = void 0;
            // 阴影 
            this.Bounds = void 0;
            // 包围盒组 
            this.Born = void 0;
            // 入场动画 
            this.Idle = void 0;
            // 待机动画 
            this.Dead = void 0;
            // 死亡动画 
            this.Revive = void 0;
            // 复活动画 
            this.Idle2 = void 0;
            // 调息动画 
            this.ShotPos = void 0;
            // 攻击点 
            this.HitPos = void 0;
            // 受击点 
            this.RadarChart = void 0;
            // 雷达图 
            this.RadarHighlight = void 0;
            // 雷达高亮 
            this.HeroScore = void 0;
          } // 评分 


        }

        _tab.HeroTable = HeroTable;

        class HeroLevelUpTable {
          constructor() {
            this.Level = void 0;
            // 等级 
            this.MaterialIds = void 0;
            // 消耗材料组 
            this.MaterialNum = void 0;
            // 消耗数量组 
            this.MinTeamLevel = void 0;
          } // 队友最低等级 


        }

        _tab.HeroLevelUpTable = HeroLevelUpTable;

        class HeroStarUpTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.HeroId = void 0;
            // 英雄ID 
            this.HeroStar = void 0;
            // 英雄星级 
            this.NeedStarSteps = void 0;
            // 升星满足阶段 
            this.HeroStarUpType = void 0;
            // 升星消耗类型 
            this.CostHeroStar = void 0;
            // 升星消耗星级 
            this.CostHeroNum = void 0;
            // 升星消耗数量 
            this.CostItemId = void 0;
            // 升星消耗道具 
            this.CostItemNum = void 0;
            // 道具消耗数量 
            this.ResetCostItem = void 0;
            // 重置消耗道具 
            this.ResetCostNum = void 0;
            // 重置消耗数量 
            this.MaxLevel = void 0;
            // 等级上限 
            this.AttrPerLevel = void 0;
            // 星级升级属性 
            this.ExtraAttrTarget = void 0;
            // 额外属性类型 
            this.ExtraAttrList = void 0;
            // 额外属性值 
            this.SkillGroupIds = void 0;
            // 技能组ID 
            this.SkillId = void 0;
            // 技能ID 
            this.DescType = void 0;
            // 描述类型 
            this.StarName = void 0;
            // 名称 
            this.StarDesc = void 0;
            // 描述 
            this.RogueId = void 0;
          } // 肉鸽池 


        }

        _tab.HeroStarUpTable = HeroStarUpTable;

        class HeroStarStepTable {
          constructor() {
            this.Id = void 0;
            // 阶段ID 
            this.HeroId = void 0;
            // 英雄ID 
            this.HeroStarUpType = void 0;
            // 当前阶段消耗类型 
            this.CostHeroStar = void 0;
            // 当前阶段消耗星级 
            this.CostHeroNum = void 0;
            // 当前阶段消耗数量 
            this.CostItemId = void 0;
            // 阶段消耗道具 
            this.CostItemNum = void 0;
            // 道具消耗数量 
            this.ExtraAttrTarget = void 0;
            // 额外属性类型 
            this.ExtraAttrList = void 0;
            // 额外属性值 
            this.SkillGroupIds = void 0;
            // 技能组ID 
            this.SkillEnhanceIds = void 0;
            // 技能增强ID 
            this.StepDesc = void 0;
          } // 描述 


        }

        _tab.HeroStarStepTable = HeroStarStepTable;

        class HeroAttrTable {
          constructor() {
            this.Id = void 0;
            // 属性ID 
            this.HeroAttrType = void 0;
            // 属性类型 
            this.HeroAttrValue = void 0;
          } // 属性值 


        }

        _tab.HeroAttrTable = HeroAttrTable;

        class HeroCommonCostTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.HeroClass = void 0;
            // 等价职业 
            this.HeroStar = void 0;
          } // 等价星级 


        }

        _tab.HeroCommonCostTable = HeroCommonCostTable;

        class HeroLevelResonanceTable {
          constructor() {
            this.Id = void 0;
            // 共鸣等级 
            this.NeedLv = void 0;
            // 升级需求等级 
            this.AttrTypes = void 0;
            // 获得属性类型 
            this.AttrValue = void 0;
          } // 获得属性值 


        }

        _tab.HeroLevelResonanceTable = HeroLevelResonanceTable;

        class HeroStarResonanceTable {
          constructor() {
            this.Id = void 0;
            // 共鸣等级 
            this.NeedStar = void 0;
            // 升级需求星级 
            this.AttrTypes = void 0;
            // 获得属性类型 
            this.AttrValue = void 0;
          } // 获得属性值 


        }

        _tab.HeroStarResonanceTable = HeroStarResonanceTable;

        class RecommendTeamTable {
          constructor() {
            this.Id = void 0;
            // 阵容ID 
            this.Name = void 0;
            // 阵容名称 
            this.HeroIdList = void 0;
            // 英雄ID 
            this.IsCore = void 0;
            // 是否核心 
            this.Desc = void 0;
            // 阵容描述 
            this.ItemId = void 0;
            // 激活奖励ID 
            this.ItemNum = void 0;
          } // 激活奖励数量 


        }

        _tab.RecommendTeamTable = RecommendTeamTable;

        class HeroAlbumTable {
          constructor() {
            this.HeroAptitude = void 0;
            // 英雄资质 
            this.ItemId = void 0;
            // 激活奖励ID 
            this.ItemNum = void 0;
          } // 激活奖励数量 


        }

        _tab.HeroAlbumTable = HeroAlbumTable;

        class HeroClassTable {
          constructor() {
            this.HeroClass = void 0;
            // 英雄职业 
            this.Icon = void 0;
          } // 职业图标 


        }

        _tab.HeroClassTable = HeroClassTable;

        class HeroAptitudeTable {
          constructor() {
            this.HeroAptitude = void 0;
            // 英雄资质 
            this.Icon = void 0;
            // 资质图标 
            this.SkillBg = void 0;
            // 英雄资质技能背景底 
            this.BookBg = void 0;
            // 秘籍资质背景底 
            this.BookTitle = void 0;
            // 秘籍资质名称底 
            this.BookBgSmall = void 0;
          } // 秘籍资质背景小底 


        }

        _tab.HeroAptitudeTable = HeroAptitudeTable;

        class MonsterTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Name = void 0;
            // 名称 
            this.Speed = void 0;
            // 速度 
            this.BornAnimationId = void 0;
            // 出生动画 
            this.IdleAnimationId = void 0;
            // 待机动画 
            this.WalkAnimationId = void 0;
            // 移动动画 
            this.BeHitAnimationId = void 0;
            // 受击动画 
            this.DeadAnimationId = void 0;
            // 死亡动画 
            this.Bounds = void 0;
            // 包围盒组 
            this.MonsterType = void 0;
            // 怪物类型 
            this.SearchRules = void 0;
            // 索敌规则 
            this.AttackRange = void 0;
            // 攻击范围 
            this.SkillIds = void 0;
            // 技能id 
            this.ReviveDefeatDistance = void 0;
            // 复活被右移距离 
            this.IsDefeat = void 0;
            // 是否会被击退 
            this.IsHitBack = void 0;
            // 是否命中击退 
            this.Shadow = void 0;
            // 阴影 
            this.BuffLocation = void 0;
            // buff位置偏移 
            this.BuffVFX = void 0;
            // buff特效缩放 
            this.MonsterDieSound = void 0;
          } // 怪物死亡音效 


        }

        _tab.MonsterTable = MonsterTable;

        class SkillGroupTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Icon = void 0;
            // 技能图标 
            this.AttackType = void 0;
            // 攻击类型 
            this.NormalAttack = void 0;
            // 普攻技能 
            this.AttackCount = void 0;
            // 出手次数 
            this.BreathTime = void 0;
          } // 调息时间 


        }

        _tab.SkillGroupTable = SkillGroupTable;

        class SkillTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.SkillType = void 0;
            // 技能类型 
            this.Priority = void 0;
            // 发动优先级 
            this.Trigger = void 0;
            // 触发器 
            this.ActionPriority = void 0;
            // 动作优先级 
            this.ActionID = void 0;
            // 动作ID 
            this.Expend = void 0;
            // 出手消耗 
            this.SkillEnhanceIds = void 0;
            // 技能增强 
            this.Effect = void 0;
            // 效果 
            this.EffectUnit = void 0;
            // 作用目标 
            this.SearchEnemy = void 0;
            // 作用规则 
            this.SearchNum = void 0;
            // 作用数量 
            this.AddBuff = void 0;
            // 加buff 
            this.HandEnemy = void 0;
            // 手动目标 
            this.AddBuffChance = void 0;
            // buff触发概率 
            this.CoolTime = void 0;
            // 冷却时间 
            this.SkillConflict = void 0;
            // 技能互斥 
            this.BulletTime = void 0;
            // 子弹发射时间 
            this.RunningShot = void 0;
            // 连射 
            this.Bullet = void 0;
            // 子弹ID 
            this.RunningShotBullet = void 0;
            // 连射子弹 
            this.RunningShotBulletType = void 0;
          } // 连射类型 


        }

        _tab.SkillTable = SkillTable;

        class BulletTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.BulletType = void 0;
            // 子弹类型 
            this.BulletOffset = void 0;
            // 跟随子弹偏移 
            this.Speed = void 0;
            // 速度 
            this.Rating = void 0;
            // 子弹层级 
            this.BornAnimationId = void 0;
            // 出生动画 
            this.WalkAnimationId = void 0;
            // 移动动画 
            this.DeadAnimationId = void 0;
            // 死亡动画 
            this.Bounds = void 0;
            // 包围盒组 
            this.BulletBorn = void 0;
            // 子弹出生点 
            this.EnemyUnit = void 0;
            // 索敌单位 
            this.SearchEnemy = void 0;
            // 索敌规则 
            this.EnemyFiltrate = void 0;
            // 索敌筛选 
            this.EffectUnit = void 0;
            // 作用单位 
            this.Trajectory = void 0;
            // 子弹轨迹 
            this.ForwardArrow = void 0;
            // 正向箭 
            this.Fission = void 0;
            // 分裂 
            this.Penetration = void 0;
            // 穿透 
            this.Catapult = void 0;
            // 弹射 
            this.Round = void 0;
            // 回旋 
            this.Rotate = void 0;
            // 自旋 
            this.Centrifugation = void 0;
            // 离心 
            this.ScreenBounce = void 0;
            // 屏幕反弹 
            this.CommonShow = void 0;
            // 通用表现 
            this.IntervalEffect = void 0;
            // 间隔时间效果 
            this.LiveTime = void 0;
            // 生存时间 
            this.DamageTick = void 0;
            // 伤害间隔 
            this.DamageScale = void 0;
            // 子弹伤害系数 
            this.AddEffect = void 0;
            // 子弹额外效果 
            this.DamageAmount = void 0;
            // 子弹多段伤害 
            this.SameLow = void 0;
            // 相同子弹衰减 
            this.HitChance = void 0;
            // 命中触发概率 
            this.HitTrigger = void 0;
            // 命中触发效果 
            this.HitEffect = void 0;
            // 命中特效 
            this.HitShake = void 0;
            // 命中抖动 
            this.HitBack = void 0;
            // 命中击退 
            this.AddBuffChance = void 0;
            // buff触发概率 
            this.AddBuff = void 0;
            // 加buff 
            this.CollisionInterval = void 0;
            // 触碰间隔 
            this.DeathType = void 0;
            // 死亡方式 
            this.DeathTrigger = void 0;
            // 死亡触发子弹 
            this.OlnyOne = void 0;
            // 相同子弹唯一 
            this.NoHarm = void 0;
            // 子系忽视父系 
            this.OlnyOneSon = void 0;
            // 子系伤害唯一 
            this.IsReviveClean = void 0;
            // 复活清除 
            this.SoundId = void 0;
          } // 子弹音效 


        }

        _tab.BulletTable = BulletTable;

        class BuffTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.BuffType = void 0;
            // buff类型 
            this.VFXID = void 0;
            // 特效id 
            this.Duration = void 0;
            // 持续时间 
            this.Effect = void 0;
            // 效果 
            this.Trigger = void 0;
            // 持续时间内触发间隔 
            this.Addbuff = void 0;
            // 加buff 
            this.BuffGroup = void 0;
            // buff分组 
            this.Rule = void 0;
            // 叠加规则 
            this.CheckAttr = void 0;
            // 属性检测 
            this.Number = void 0;
            // 叠加数量 
            this.ClearType = void 0;
            // 清除buff的条件 
            this.NoOneMemory = void 0;
          } // 非独立内存 


        }

        _tab.BuffTable = BuffTable;

        class EffectTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.EffectType = void 0;
            // 效果类型 
            this.Parameters = void 0;
            // 效果参数 
            this.RandomWave = void 0;
          } // 效果基础值波动参数 


        }

        _tab.EffectTable = EffectTable;

        class TriggerTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Chance = void 0;
            // 概率 
            this.Triggertype = void 0;
            // 触发类型 
            this.TriggerNumber = void 0;
            // 触发次数 
            this.TriggerCd = void 0;
            // 触发CD 
            this.TriggerCondition = void 0;
            // 触发条件 
            this.Parameters = void 0;
            // 条件参数 
            this.Behavior = void 0;
            // 触发行为 
            this.Argument = void 0;
            // 行为参数 
            this.TriggerTarget = void 0;
            // 条件目标 
            this.TriggerGoal = void 0;
          } // 行为目标 


        }

        _tab.TriggerTable = TriggerTable;

        class SkillSummonTable {
          constructor() {
            this.SummonId = void 0;
            // 召唤ID 
            this.Summon = void 0;
          } // 召唤内容 


        }

        _tab.SkillSummonTable = SkillSummonTable;

        class PRBTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.CValue = void 0;
          } // C值 


        }

        _tab.PRBTable = PRBTable;

        class BoundTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Parameters = void 0;
          } // 参数 


        }

        _tab.BoundTable = BoundTable;

        class SkillPowerTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.PowerType = void 0;
            // 增强类型 
            this.PowerId = void 0;
            // 增强id 
            this.PowerMent = void 0;
            // 增强字段 
            this.PowerValue = void 0;
          } // 增强值 


        }

        _tab.SkillPowerTable = SkillPowerTable;

        class MainChapterTable {
          constructor() {
            this.Id = void 0;
            // 章节ID 
            this.StageIds = void 0;
            // 主线关卡ID 
            this.EliteStageIds = void 0;
            // 可解锁精英关卡ID 
            this.Name = void 0;
            // 章节名称 
            this.Introduction = void 0;
            // 章节介绍 
            this.ComicID = void 0;
            // 开始前播放漫画ID 
            this.Icon = void 0;
            // 章节图标路径 
            this.IconSelect = void 0;
            // 章节图标选中背景路径 
            this.DailyTaskReward1 = void 0;
            // 任务奖励1 
            this.DailyTaskNum1 = void 0;
            // 奖励数量1 
            this.DailyTaskReward2 = void 0;
            // 任务奖励2 
            this.DailyTaskNum2 = void 0;
            // 奖励数量2 
            this.DailyTaskReward3 = void 0;
            // 任务奖励3 
            this.DailyTaskNum3 = void 0;
            // 奖励数量3 
            this.DailyTaskReward4 = void 0;
            // 任务奖励4 
            this.DailyTaskNum4 = void 0;
            // 奖励数量4 
            this.DailyTaskReward5 = void 0;
            // 任务奖励5 
            this.DailyTaskNum5 = void 0;
          } // 奖励数量5 


        }

        _tab.MainChapterTable = MainChapterTable;

        class PveStageTable {
          constructor() {
            this.StageId = void 0;
            // 关卡ID 
            this.StageName = void 0;
            // 关卡名 
            this.StageType = void 0;
            // 关卡类型 
            this.NextLevelId = void 0;
            // 下一关ID 
            this.RecommendFight = void 0;
            // 推荐战力 
            this.LevelArrange = void 0;
            // 关卡配置 
            this.Time = void 0;
            // 关卡时长 
            this.LevelBUFF = void 0;
            // 关卡buff 
            this.EggDropType = void 0;
            // 掉毛类型 
            this.EggDropGroup = void 0;
            // 掉毛组 
            this.RougeGroupId = void 0;
            // 肉鸽组 
            this.ReviveNumber = void 0;
            // 复活次数 
            this.CostItemId = void 0;
            // 关卡消耗道具ID 
            this.CostItemNum = void 0;
            // 关卡消耗数量 
            this.RewardItemId = void 0;
            // 通关奖励ID 
            this.RewardItemNum = void 0;
            // 通关奖励数量 
            this.LostRewardId = void 0;
            // 失败奖励ID 
            this.LostRewardNum = void 0;
            // 失败奖励数量 
            this.Background = void 0;
            // 战斗背景 
            this.MonsterDieDrop = void 0;
          } // 怪死掉落 


        }

        _tab.PveStageTable = PveStageTable;

        class RobotTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.RobotType = void 0;
            // 类型 
            this.Name = void 0;
            // 名字 
            this.Power = void 0;
            // 战力 
            this.Core = void 0;
            // 积分 
            this.PlayerLevel = void 0;
            // 玩家等级 
            this.Image = void 0;
            // 形象id 
            this.Head = void 0;
            // 头像id 
            this.Hero = void 0;
            // 英雄id 
            this.HeroStar = void 0;
            // 英雄星级 
            this.HeroLevel = void 0;
            // 英雄等级 
            this.Book = void 0;
            // 秘籍id 
            this.BookStar = void 0;
            // 秘籍星级 
            this.BookLevel = void 0;
            // 秘籍等级 
            this.Experience = void 0;
            // 冒险等级 
            this.AddAttrId = void 0;
          } // 额外属性 


        }

        _tab.RobotTable = RobotTable;

        class VoidStageTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.StageID = void 0;
            // 关卡ID 
            this.HeroID = void 0;
            // 英雄id 
            this.HeroLevel = void 0;
            // 等级 
            this.HeroStar = void 0;
          } // 星级 


        }

        _tab.VoidStageTable = VoidStageTable;

        class FeatherEggDrop {
          constructor() {
            this.Id = void 0;
            // ID 
            this.EggDropGroup = void 0;
            // 掉毛组 
            this.EggDropLevel = void 0;
            // 掉毛等级 
            this.EggDropExp = void 0;
            // 掉毛经验 
            this.EggDropContent = void 0;
          } // 掉落ID 


        }

        _tab.FeatherEggDrop = FeatherEggDrop;

        class MapBlock {
          constructor() {
            this.Id = void 0;
            // ID 
            this.CoordinateX = void 0;
            // 位置X 
            this.CoordinateY = void 0;
            // 位置Y 
            this.Long = void 0;
            // 长 
            this.High = void 0;
          } // 高 


        }

        _tab.MapBlock = MapBlock;

        class PveStageDropTable {
          constructor() {
            this.DropId = void 0;
            // 战斗掉落ID 
            this.DropItem = void 0;
            // 掉落道具ID 
            this.DropItemCount = void 0;
          } // 掉落道具数量 


        }

        _tab.PveStageDropTable = PveStageDropTable;

        class VirtualItem {
          constructor() {
            this.VirtualItemId = void 0;
            // 道具ID 
            this.VirtualItemType = void 0;
            // 类型 
            this.VirtualAnimationId = void 0;
            // 图标动画ID 
            this.VirtualItemIcon = void 0;
          } // 图标 


        }

        _tab.VirtualItem = VirtualItem;

        class PveTimeDropTable {
          constructor() {
            this.StageId = void 0;
            // 关卡ID 
            this.DropTime = void 0;
            // 掉落时间 
            this.DropCount = void 0;
          } // 掉落 


        }

        _tab.PveTimeDropTable = PveTimeDropTable;

        class PveStageBuffTable {
          constructor() {
            this.Id = void 0;
            // 战斗初始增益ID 
            this.CorrespondingId = void 0;
            // 对应ID 
            this.EffectTarget = void 0;
            // 生效目标 
            this.Own = void 0;
            // 归属 
            this.Show = void 0;
            // 前端技能说明 
            this.ShowIcon = void 0;
          } // 前端技能图标 


        }

        _tab.PveStageBuffTable = PveStageBuffTable;

        class PveAddFeatherDropTable {
          constructor() {
            this.Count = void 0;
            // 数量 
            this.Times = void 0;
          } // 掉落时间点 


        }

        _tab.PveAddFeatherDropTable = PveAddFeatherDropTable;

        class WorldBossRewardTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.StageId = void 0;
            // 关卡ID 
            this.Damage = void 0;
            // 伤害值 
            this.ItemId = void 0;
            // 奖励道具 
            this.ItemNum = void 0;
          } // 奖励道具数量 


        }

        _tab.WorldBossRewardTable = WorldBossRewardTable;

        class WorldBossDamTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.StageId = void 0;
            // 关卡ID 
            this.Damage = void 0;
            // 伤害值 
            this.EffectId = void 0;
          } // 伤害效果 


        }

        _tab.WorldBossDamTable = WorldBossDamTable;

        class DailyChallengeBuffTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.HeroBuff = void 0;
            // 英雄增益 
            this.MonsterBuff = void 0;
          } // 怪物增益 


        }

        _tab.DailyChallengeBuffTable = DailyChallengeBuffTable;

        class DailyChallengeLevelTable {
          constructor() {
            this.Level = void 0;
            // 难度 
            this.MainStageLimit = void 0;
            // 主线通关需求 
            this.IsEasier = void 0;
            // 能否下降难度 
            this.StageId = void 0;
            // 关卡ID 
            this.Require = void 0;
            // 奖励领取条件 
            this.DropId = void 0;
          } // 掉落ID 


        }

        _tab.DailyChallengeLevelTable = DailyChallengeLevelTable;

        class ClimbTowerTable {
          constructor() {
            this.StageId = void 0;
            // 关卡ID 
            this.Floor = void 0;
            // 米 
            this.OpenTime = void 0;
            // 开启天数 
            this.DailyReward = void 0;
            // 每日奖励ID 
            this.DailyRewardNum = void 0;
            // 奖励数量 
            this.SkillShow = void 0;
            // 关卡技能 
            this.CrushedValue = void 0;
            // 碾压系数 
            this.BackgroundUrl = void 0;
            // 关卡背景 
            this.AnimationId = void 0;
          } // BOSS动画ID 


        }

        _tab.ClimbTowerTable = ClimbTowerTable;

        class RogueTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Condition = void 0;
            // 前置条件 
            this.Sort = void 0;
            // 分类 
            this.Own = void 0;
            // 归属 
            this.Level = void 0;
            // 重数 
            this.Stage = void 0;
            // 阶段 
            this.Skill = void 0;
            // 技能id 
            this.SkillGroup = void 0;
            // 技能组id 
            this.Weight = void 0;
            // 权重 
            this.Mutex = void 0;
            // 互斥 
            this.Backlimit = void 0;
            // 放回上限 
            this.BookId = void 0;
            // 对应秘籍ID 
            this.ActivationCondition = void 0;
            // 激活条件 
            this.Description = void 0;
          } // 技能说明 


        }

        _tab.RogueTable = RogueTable;

        class RogueGroupTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.RogueGroup = void 0;
            // 肉鸽内容ID 
            this.IsHaveHeroLevelUp = void 0;
          } // 是否存在英雄升级 


        }

        _tab.RogueGroupTable = RogueGroupTable;

        class TipsTable {
          constructor() {
            this.Id = void 0;
            // 提示枚举 
            this.TipsKey = void 0;
          } // 提示文本 


        }

        _tab.TipsTable = TipsTable;

        class SoundTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Path = void 0;
            // 路径 
            this.Loop = void 0;
            // 是否循环 
            this.volume = void 0;
          } // 音量大小 


        }

        _tab.SoundTable = SoundTable;

        class EquipTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 槽位 
            this.Class = void 0;
            // 职业 
            this.EquipStar = void 0;
            // 星级 
            this.MasterLevel = void 0;
            // 大师等级 
            this.BaseAttrGroupId = void 0;
            // 基础属性分组ID 
            this.ExtraAttrGroupId = void 0;
            // 附加属性分组ID 
            this.SkillGroupId = void 0;
            // 技能分组ID 
            this.EnhanceLimit = void 0;
            // 强化上限 
            this.RefineLimit = void 0;
            // 淬炼上限 
            this.Materials = void 0;
          } // 分解材料 


        }

        _tab.EquipTable = EquipTable;

        class EquipAttrTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.AttrType = void 0;
            // 属性类型 
            this.Base = void 0;
            // 属性基值 
            this.Growth = void 0;
          } // 成长系数 


        }

        _tab.EquipAttrTable = EquipAttrTable;

        class EquipAttrGroupTable {
          constructor() {
            this.Id = void 0;
            // 分组ID 
            this.Type = void 0;
            // 类型 
            this.Count = void 0;
            // 随机条目数 
            this.Mode = void 0;
            // 随机方式 
            this.List = void 0;
          } // 随机值列表 


        }

        _tab.EquipAttrGroupTable = EquipAttrGroupTable;

        class EquipSkillTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Group = void 0;
            // 分组 
            this.Quality = void 0;
            // 品质 
            this.Playstyle = void 0;
            // 流派名称 
            this.SkillIcon = void 0;
            // 技能图标 
            this.SkillName = void 0;
            // 技能名称 
            this.SkillDesc = void 0;
          } // 技能描述 


        }

        _tab.EquipSkillTable = EquipSkillTable;

        class HeroMasterTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Level = void 0;
            // 等级 
            this.Require = void 0;
            // 等级需求 
            this.AttrList = void 0;
            // 属性列表 
            this.Desc = void 0;
          } // 条件描述 


        }

        _tab.HeroMasterTable = HeroMasterTable;

        class EquipUpgradeTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Level = void 0;
            // 等级 
            this.Moneys = void 0;
            // 货币消耗 
            this.Materials = void 0;
            // 材料消耗 
            this.Odds = void 0;
            // 概率 
            this.Amount = void 0;
            // 累积次数 
            this.GroupId = void 0;
          } // 分组ID 


        }

        _tab.EquipUpgradeTable = EquipUpgradeTable;

        class WordTable {
          constructor() {
            this.Key = void 0;
            // Key 
            this.Zh_tw = void 0;
            // zh_tw 
            this.En_us = void 0;
            // 英文 
            this.Jp_jp = void 0;
          } // 日文 


        }

        _tab.WordTable = WordTable;

        class ItemStarClientTable {
          constructor() {
            this.Id = void 0;
            // 星级 
            this.AnimationId = void 0;
            // 显示动画ID 
            this.Number = void 0;
          } // 数量 


        }

        _tab.ItemStarClientTable = ItemStarClientTable;

        class ItemQualityTable {
          constructor() {
            this.Quality = void 0;
            // 道具品质 
            this.HeroStar = void 0;
            // 英雄星级 
            this.QualityFrame = void 0;
            // 品质框 
            this.HeroBagQuality = void 0;
            // 英雄背包品质底 
            this.HeroBagGrowthQuality = void 0;
            // 英雄背包养成品质底 
            this.HeroBagLevelQuality = void 0;
            // 英雄背包等级品质底 
            this.HeroStarBg = void 0;
            // 英雄和装备星级职业底 
            this.QualityColor = void 0;
          } // 名字颜色 


        }

        _tab.ItemQualityTable = ItemQualityTable;

        class HeroPowerScore {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Args = void 0;
            // 参数 
            this.Score = void 0;
          } // 评分 


        }

        _tab.HeroPowerScore = HeroPowerScore;

        class HeroAttrClientTable {
          constructor() {
            this.Type = void 0;
            // 属性类型 
            this.Icon = void 0;
            // 属性图标 
            this.IsBase = void 0;
            // 是否基础属性 
            this.ShowPercent = void 0;
            // 是否百分比 
            this.ShowHeroAttr = void 0;
          } // 英雄面板是否显示 


        }

        _tab.HeroAttrClientTable = HeroAttrClientTable;

        class GeneLevelTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Level = void 0;
            // 等级 
            this.UnlockType = void 0;
            // 解锁条件 
            this.UnlockArgs = void 0;
            // 解锁参数 
            this.AttrType = void 0;
            // 属性类型 
            this.AttrValue = void 0;
            // 属性值 
            this.MaterialIdList = void 0;
            // 消耗道具 
            this.MaterialCountList = void 0;
            // 消耗道具数量 
            this.Name = void 0;
            // 名称 
            this.Desc = void 0;
            // 描述 
            this.EnableIcon = void 0;
            // 已激活图标 
            this.DisableIcon = void 0;
          } // 未激活图标 


        }

        _tab.GeneLevelTable = GeneLevelTable;

        class BookTable {
          constructor() {
            this.Id = void 0;
            // 秘籍ID 
            this.Class = void 0;
            // 职业 
            this.Aptitude = void 0;
            // 资质 
            this.Builds = void 0;
            // 流派 
            this.IsWear = void 0;
            // 是否可穿戴 
            this.PlaystyleName = void 0;
            // 效果简介 
            this.MaterialIdList = void 0;
            // 分解道具ID 
            this.MaterialCountList = void 0;
          } // 分解道具数量 


        }

        _tab.BookTable = BookTable;

        class BookStarTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.BookId = void 0;
            // 秘籍ID 
            this.Level = void 0;
            // 星级 
            this.MaxLevel = void 0;
            // 研习等级上限 
            this.MaterialIdList = void 0;
            // 消耗道具ID 
            this.MaterialCountList = void 0;
            // 消耗道具数量 
            this.SkillId = void 0;
            // 技能ID 
            this.AttrType = void 0;
            // 初始属性类型 
            this.AttrValue = void 0;
            // 初始属性值 
            this.ExtraAttrType = void 0;
            // 升星额外属性类型 
            this.ExtraAttrValue = void 0;
            // 升星额外属性值 
            this.Description = void 0;
            // 升星效果描述 
            this.BookDescription = void 0;
          } // 秘籍效果描述 


        }

        _tab.BookStarTable = BookStarTable;

        class BookLevelTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Aptitude = void 0;
            // 资质 
            this.Level = void 0;
            // 等级 
            this.Class = void 0;
            // 职业 
            this.MaterialIdList = void 0;
            // 消耗道具ID 
            this.MaterialCountList = void 0;
            // 消耗道具数量 
            this.Ratio = void 0;
          } // 研习比例 


        }

        _tab.BookLevelTable = BookLevelTable;

        class BookFragmentTable {
          constructor() {
            this.BookId = void 0;
            // 秘籍ID 
            this.Id = void 0;
            // 残卷ID 
            this.Count = void 0;
            // 修复所需数量 
            this.BaseAmount = void 0;
            // 转换基数 
            this.MaterialIdList = void 0;
            // 转换后道具ID 
            this.MaterialCountList = void 0;
          } // 转换后道具数量 


        }

        _tab.BookFragmentTable = BookFragmentTable;

        class BookSeriesTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.BookId = void 0;
            // 秘籍ID 
            this.GroupId = void 0;
            // 分组ID 
            this.Level = void 0;
            // 星级 
            this.Skill = void 0;
            // 技能ID 
            this.AttrType = void 0;
            // 属性类型 
            this.AttrValue = void 0;
            // 属性值 
            this.Name = void 0;
            // 名称配置 
            this.SkillShow = void 0;
          } // 技能说明 


        }

        _tab.BookSeriesTable = BookSeriesTable;

        class BookSlotTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Class = void 0;
            // 职业 
            this.Slot = void 0;
            // 槽位 
            this.UnlockType = void 0;
            // 解锁条件 
            this.UnlockArgs = void 0;
          } // 解锁参数 


        }

        _tab.BookSlotTable = BookSlotTable;

        class BookDictionary {
          constructor() {
            this.PhaseOneBook = void 0;
            // 一阶秘籍ID 
            this.PhaseTwoBook = void 0;
            // 二阶秘籍ID 
            this.PhaseThreeBook = void 0;
          } // 三阶秘籍ID 


        }

        _tab.BookDictionary = BookDictionary;

        class PlayerLvTable {
          constructor() {
            this.PlayerLv = void 0;
            // 等级 
            this.Exp = void 0;
            // 累计经验 
            this.ItemId = void 0;
            // 奖励道具ID 
            this.ItemNum = void 0;
          } // 奖励道具数量 


        }

        _tab.PlayerLvTable = PlayerLvTable;

        class ScrollPaintingTable {
          constructor() {
            this.Id = void 0;
            // 索引ID 
            this.Aptitude = void 0;
            // 资质 
            this.HeroStar = void 0;
            // 星级 
            this.SPAttrTypes = void 0;
            // 属性类型 
            this.SPAttrValue = void 0;
          } // 属性值 


        }

        _tab.ScrollPaintingTable = ScrollPaintingTable;

        class LimitTimeItemTable {
          constructor() {
            this.ItemId = void 0;
            // 限时道具ID 
            this.GetItemId = void 0;
            // 获得真实道具ID 
            this.LimitTimeType = void 0;
            // 限时类型 
            this.LimitTimeValue = void 0;
            // 限时参数 
            this.ReplaceType = void 0;
            // 替换类型 
            this.TransformItemId = void 0;
            // 转换道具ID 
            this.TransformItemCount = void 0;
          } // 转换道具数量 


        }

        _tab.LimitTimeItemTable = LimitTimeItemTable;

        class DropTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 掉落类型 
            this.Count = void 0;
            // 执行参数 
            this.ItemList = void 0;
            // 掉落组 
            this.ItemCount = void 0;
            // 道具数量 
            this.Args = void 0;
          } // 掉落参数 


        }

        _tab.DropTable = DropTable;

        class DropEventTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 事件类型 
            this.NumVal = void 0;
            // 数值参数 
            this.StrVal = void 0;
          } // 字串参数 


        }

        _tab.DropEventTable = DropEventTable;

        class ChapterFristRewardTable {
          constructor() {
            this.Id = void 0;
            // 关卡ID 
            this.Time = void 0;
            // 目标时间 
            this.RewardItemIds1 = void 0;
            // 目标1奖励ID 
            this.RewardItemNum1 = void 0;
            // 目标1奖励数量 
            this.RewardItemIds2 = void 0;
            // 目标2奖励ID 
            this.RewardItemNum2 = void 0;
            // 目标2奖励数量 
            this.RewardItemIds3 = void 0;
            // 目标3奖励ID 
            this.RewardItemNum3 = void 0;
          } // 目标3奖励数量 


        }

        _tab.ChapterFristRewardTable = ChapterFristRewardTable;

        class AdvertPosTable {
          constructor() {
            this.AdType = void 0;
            // 广告点类型 
            this.RefreshType = void 0;
            // 刷新周期 
            this.AdvertCount = void 0;
          } // 广告次数 


        }

        _tab.AdvertPosTable = AdvertPosTable;

        class GachaTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.ItemSource = void 0;
            // 物品变化原因 
            this.DropId = void 0;
            // 掉落ID 
            this.DropCount = void 0;
            // 掉落次数 
            this.ItemId = void 0;
            // 消耗道具ID 
            this.ItemCount = void 0;
            // 消耗道具数量 
            this.SubItemId = void 0;
            // 替代道具ID 
            this.SubItemBaseCount = void 0;
            // 替代物消耗基数 
            this.ShowCount = void 0;
            // 显示保底次数 
            this.AdType = void 0;
            // 广告类型 
            this.Function = void 0;
            // 功能开启条件 
            this.AutoDisband = void 0;
          } // 自动遣散 


        }

        _tab.GachaTable = GachaTable;

        class ElixirTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.AttrType = void 0;
            // 属性类型 
            this.AttrValue = void 0;
            // 属性值 
            this.PlayerLv = void 0;
            // 玩家等级 
            this.MaxCount = void 0;
          } // 吃药上限 


        }

        _tab.ElixirTable = ElixirTable;

        class TaskTable {
          constructor() {
            this.Id = void 0;
            // 任务ID 
            this.TaskType = void 0;
            // 任务类型 
            this.Revision = void 0;
            // 版本号 
            this.FinishType = void 0;
            // 任务条件 
            this.CanAcceptEarly = void 0;
            // 提前接任务 
            this.FinishParam1 = void 0;
            // 参数1 
            this.FinishParam2 = void 0;
            // 参数2 
            this.FinishParam3 = void 0;
            // 参数3 
            this.RewardItemIds = void 0;
            // 奖励道具ID 
            this.RewardItemNum = void 0;
            // 奖励道具数量 
            this.BattlePassRewardIds = void 0;
            // 战令奖励ID 
            this.BattlePassRewardNum = void 0;
            // 战令奖励数量 
            this.Title = void 0;
            // 任务标题 
            this.Describe = void 0;
            // 任务描述 
            this.JumpUI = void 0;
            // 跳转界面 
            this.JumpParam = void 0;
          } // 跳转参数 


        }

        _tab.TaskTable = TaskTable;

        class WeeklyTaskBoxTable {
          constructor() {
            this.Id = void 0;
            // 周活跃度 
            this.BoxRewardItemIds = void 0;
            // 奖励道具 
            this.BoxRewardItemNum = void 0;
          } // 奖励数量 


        }

        _tab.WeeklyTaskBoxTable = WeeklyTaskBoxTable;

        class AchievementTaskTable {
          constructor() {
            this.Id = void 0;
            // 任务ID 
            this.PreTaskId = void 0;
          } // 前置任务ID 


        }

        _tab.AchievementTaskTable = AchievementTaskTable;

        class QuestLogTable {
          constructor() {
            this.Level = void 0;
            // 军衔等级 
            this.TaskIds = void 0;
            // 任务组 
            this.ShowLv = void 0;
            // 预览等级 
            this.Name = void 0;
            // 名称 
            this.QuestLogAttrType = void 0;
            // 属性类型 
            this.QuestLogAttrValue = void 0;
          } // 属性值 


        }

        _tab.QuestLogTable = QuestLogTable;

        class RankTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 排行榜类型 
            this.Length = void 0;
            // 上榜人数 
            this.Range = void 0;
            // 显示人数 
            this.IsStatic = void 0;
          } // 是否常驻 


        }

        _tab.RankTable = RankTable;

        class RankRewardTable {
          constructor() {
            this.Id = void 0;
            // 排行榜ID 
            this.Type = void 0;
            // 结算类型 
            this.Args = void 0;
            // 结算参数 
            this.ClearType = void 0;
            // 清榜类型 
            this.SpecialCount = void 0;
            // 特殊名次 
            this.MailType = void 0;
            // 邮件类型1 
            this.MailType2 = void 0;
            // 邮件类型2 
            this.Ranking = void 0;
            // 榜单 
            this.DropId = void 0;
          } // 奖品 


        }

        _tab.RankRewardTable = RankRewardTable;

        class RankCycleRewardTable {
          constructor() {
            this.IndexId = void 0;
            // 索引ID 
            this.Id = void 0;
            // 排行榜ID 
            this.Refresh = void 0;
            // 发奖周期 
            this.Args = void 0;
            // 发奖时间 
            this.SpecialCount = void 0;
            // 特殊名次 
            this.MailType = void 0;
            // 邮件类型1 
            this.MailType2 = void 0;
            // 邮件类型2 
            this.CycleRanking = void 0;
            // 榜单 
            this.CycleDropId = void 0;
          } // 奖品 


        }

        _tab.RankCycleRewardTable = RankCycleRewardTable;

        class NoticeTable {
          constructor() {
            this.Id = void 0;
            // 通知ID 
            this.WordKey = void 0;
            // 关联文本 
            this.Texts = void 0;
            // 文本定义 
            this.NoticeType = void 0;
            // 公告触发类型 
            this.Param1 = void 0;
            // 参数1 
            this.Param2 = void 0;
            // 参数2 
            this.Param3 = void 0;
          } // 参数3 


        }

        _tab.NoticeTable = NoticeTable;

        class BuyStaminaTable {
          constructor() {
            this.Type = void 0;
            // 购买类型 
            this.GetItemId = void 0;
            // 获得物品 
            this.GetItemNum = void 0;
            // 获得数量 
            this.CostItemId = void 0;
            // 消耗物品 
            this.CostItemNum = void 0;
            // 消耗数量 
            this.AdType = void 0;
            // 看广告 
            this.DailyCount = void 0;
            // 每日次数 
            this.MaxCount = void 0;
            // 上限次数 
            this.ShowIcon = void 0;
          } // 显示图标 


        }

        _tab.BuyStaminaTable = BuyStaminaTable;

        class PatrolTable {
          constructor() {
            this.PveStageId = void 0;
            // 关卡ID 
            this.BaseTimes = void 0;
            // 基础奖励时间 
            this.BaseItemIds = void 0;
            // 基础奖励ID 
            this.BaseItemNum = void 0;
            // 基础奖励数量 
            this.ExtraTimes = void 0;
            // 进阶奖励时间 
            this.ExtraItemIds = void 0;
            // 进阶奖励ID 
            this.ExtraItemNum = void 0;
          } // 进阶奖励数量 


        }

        _tab.PatrolTable = PatrolTable;

        class ChoiceBoxTable {
          constructor() {
            this.ChoiceBoxId = void 0;
            // 自选ID 
            this.ChoiceItemIds = void 0;
            // 可选ID 
            this.ChoiceItemNum = void 0;
          } // 可选数量 


        }

        _tab.ChoiceBoxTable = ChoiceBoxTable;

        class PveClearStageTable {
          constructor() {
            this.StageId = void 0;
            // 关卡ID 
            this.StageType = void 0;
            // 关卡类型 
            this.ClearRewardItemIds = void 0;
            // 通关奖励道具 
            this.ClearRewardItemNum = void 0;
          } // 通关奖励数量 


        }

        _tab.PveClearStageTable = PveClearStageTable;

        class PveSweepTable {
          constructor() {
            this.StageId = void 0;
            // 关卡ID 
            this.SweepRewardItemIds = void 0;
            // 扫荡奖励道具 
            this.SweepRewardItemNum = void 0;
          } // 扫荡奖励数量 


        }

        _tab.PveSweepTable = PveSweepTable;

        class LimitedRewardTable {
          constructor() {
            this.TriggerHour = void 0;
            // 触发时间 
            this.TriggerType = void 0;
            // 触发条件 
            this.TriggerParam = void 0;
            // 触发参数 
            this.TriggerRewardId = void 0;
            // 触发奖励ID 
            this.TriggerRewardCount = void 0;
            // 触发奖励数量 
            this.RewardId = void 0;
            // 未触发奖励ID 
            this.RewardCount = void 0;
            // 未触发奖励数量 
            this.FirstTriggerInterval = void 0;
            // 首次触发间隔 
            this.TriggerInterval = void 0;
          } // 奖励补发间隔 


        }

        _tab.LimitedRewardTable = LimitedRewardTable;

        class FirstRechargeTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.RechargeId = void 0;
            // 充值表ID 
            this.ContainGoodsId = void 0;
            // 包含商品ID 
            this.FRItemIds = void 0;
            // 奖励道具ID 
            this.FRItemNum = void 0;
            // 奖励道具数量 
            this.RateShow = void 0;
            // 返利显示 
            this.WordKey = void 0;
            // 显示文本 
            this.AnimationId = void 0;
            // 显示动画 
            this.ButtonIcon = void 0;
            // 入口图标 
            this.IconAnimationId = void 0;
          } // 图标扫光 


        }

        _tab.FirstRechargeTable = FirstRechargeTable;

        class ChallengeButtonTable {
          constructor() {
            this.Id = void 0;
            // 序号 
            this.PveStageType = void 0;
            // 包含关卡类型 
            this.Background = void 0;
            // 背景图 
            this.Name = void 0;
            // 名称 
            this.ShowItemId = void 0;
            // 显示道具图标 
            this.JumpUI = void 0;
          } // 跳转界面 


        }

        _tab.ChallengeButtonTable = ChallengeButtonTable;

        class DailyRewardTable {
          constructor() {
            this.Id = void 0;
            // 签到ID 
            this.Type = void 0;
            // 签到类型 
            this.NextId = void 0;
            // 下轮签到ID 
            this.OpenTime = void 0;
          } // 持续时间 


        }

        _tab.DailyRewardTable = DailyRewardTable;

        class DailyRewardItemTable {
          constructor() {
            this.Id = void 0;
            // 签到ID 
            this.Index = void 0;
            // 天数 
            this.ItemId = void 0;
            // 物品ID 
            this.ItemCount = void 0;
          } // 物品数量 


        }

        _tab.DailyRewardItemTable = DailyRewardItemTable;

        class MallTable {
          constructor() {
            this.MallId = void 0;
            // 商店ID 
            this.IsDefinite = void 0;
            // 商品是否固定 
            this.MallType = void 0;
            // 商店类型 
            this.MallTab = void 0;
            // 页签 
            this.PrefabUrl = void 0;
            // 关联prefab 
            this.BackgroundUrl = void 0;
            // 背景图 
            this.AnimationId = void 0;
            // 动画ID 
            this.ItemSource = void 0;
            // 变化原因 
            this.Function = void 0;
            // 开启条件 
            this.Duration = void 0;
            // 持续时间 
            this.Version = void 0;
          } // 版本号 


        }

        _tab.MallTable = MallTable;

        class MallItemTabe {
          constructor() {
            this.Id = void 0;
            // 商品ID 
            this.MallId = void 0;
            // 商店ID 
            this.GetItemIds = void 0;
            // 获得物品 
            this.GetItemNum = void 0;
            // 物品数量 
            this.CostType = void 0;
            // 购买类型 
            this.CostItemIds = void 0;
            // 购买消耗 
            this.CostItemNum = void 0;
            // 消耗数量 
            this.RechargeId = void 0;
            // 充值ID 
            this.AdType = void 0;
            // 广告类型 
            this.LimitCount = void 0;
            // 限购次数 
            this.RefreshType = void 0;
            // 刷新周期 
            this.OpenFunction = void 0;
            // 开启条件 
            this.IconUrl = void 0;
          } // 显示图标 


        }

        _tab.MallItemTabe = MallItemTabe;

        class BuyDiamondsTable {
          constructor() {
            this.GoodsId = void 0;
            // 商品ID 
            this.RechargeId = void 0;
            // 充值ID 
            this.GetItemId = void 0;
            // 获得物品 
            this.GetItemNum = void 0;
            // 获得数量 
            this.FirstAdd = void 0;
            // 首充赠送 
            this.Add = void 0;
            // 后续赠送 
            this.Icon = void 0;
            // 显示图标 
            this.ViewSpecial = void 0;
          } // 仅在提审显示 


        }

        _tab.BuyDiamondsTable = BuyDiamondsTable;

        class DailyShopTable {
          constructor() {
            this.ShopId = void 0;
            // 栏位序号 
            this.ItemGroupId = void 0;
            // 商品组 
            this.BuyCout = void 0;
          } // 购买次数 


        }

        _tab.DailyShopTable = DailyShopTable;

        class DailyShopItemTable {
          constructor() {
            this.Id = void 0;
            // 商品ID 
            this.ItemGroupId = void 0;
            // 商品组 
            this.Weight = void 0;
            // 刷新权重 
            this.GetItemId = void 0;
            // 获得物品 
            this.GetItemNum = void 0;
            // 物品数量 
            this.CostItemId = void 0;
            // 购买消耗 
            this.CostItemNum = void 0;
            // 消耗数量 
            this.Advert = void 0;
            // 广告类型 
            this.OpenFunction = void 0;
            // 开启条件 
            this.DiscountIcon = void 0;
          } // 折扣图标 


        }

        _tab.DailyShopItemTable = DailyShopItemTable;

        class HeroCollectionTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Type = void 0;
            // 类型 
            this.Params = void 0;
            // 参数 
            this.ItemId = void 0;
            // 物品ID 
            this.ItemCount = void 0;
          } // 物品数量 


        }

        _tab.HeroCollectionTable = HeroCollectionTable;

        class BreakEggTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.RechargeId = void 0;
            // 充值ID 
            this.ItemId = void 0;
            // 奖励道具 
            this.ItemCount = void 0;
            // 奖励数量 
            this.Params = void 0;
            // 计算参数 
            this.MaxScore = void 0;
          } // 总进度 


        }

        _tab.BreakEggTable = BreakEggTable;

        class VipTable {
          constructor() {
            this.VipLv = void 0;
            // VIP等级 
            this.VipExp = void 0;
            // 累计VIP积分 
            this.ShowVipLv = void 0;
            // 可预览等级 
            this.VipDailyRewardIds = void 0;
            // 每日奖励道具ID 
            this.VipDailyRewardNum = void 0;
            // 每日奖励数量 
            this.VipRewardIds = void 0;
            // 专属奖励道具ID 
            this.VipRewardNum = void 0;
            // 专属奖励数量 
            this.VipCostItemIds = void 0;
            // 专属奖励消耗 
            this.VipCostItemNum = void 0;
            // 专属奖励消耗数量 
            this.ShowCost = void 0;
          } // 显示原价 


        }

        _tab.VipTable = VipTable;

        class VipBonusTable {
          constructor() {
            this.IndexId = void 0;
            // 索引ID 
            this.VipLv = void 0;
            // VIP等级 
            this.VipBonus = void 0;
            // 加成类型 
            this.AddValue = void 0;
          } // 加成值 


        }

        _tab.VipBonusTable = VipBonusTable;

        class MonthlyPassTable {
          constructor() {
            this.Type = void 0;
            // 月卡类型 
            this.RechargeId = void 0;
            // 充值ID 
            this.Duration = void 0;
            // 持续时间 
            this.BuyRewardIds = void 0;
            // 购买奖励ID 
            this.BuyRewardNum = void 0;
            // 购买奖励数量 
            this.RewardIds = void 0;
            // 每日奖励ID 
            this.RewardNum = void 0;
            // 每日奖励数量 
            this.MonthlyPassBonus = void 0;
            // 特权加成 
            this.MonthlyPassValue = void 0;
            // 加成值 
            this.WordKey = void 0;
          } // 显示文本 


        }

        _tab.MonthlyPassTable = MonthlyPassTable;

        class BattlePassTable {
          constructor() {
            this.Id = void 0;
            // 战令ID 
            this.RechargeId = void 0;
            // 充值ID 
            this.OpenFunction = void 0;
            // 开启条件 
            this.PassType = void 0;
            // 战令类型 
            this.PassValue = void 0;
            // 参数 
            this.BuyLvCostId = void 0;
            // 买等级消耗道具ID 
            this.BuyLvCostNum = void 0;
            // 买等级消耗道具数量 
            this.Privileged = void 0;
            // 购买后激活特权 
            this.TaskIds = void 0;
            // 任务ID列表 
            this.IsBattleBtn = void 0;
            // 是否在战令页签 
            this.BattlePassTab = void 0;
            // 页签名 
            this.PrefabUrl = void 0;
            // prefab路径 
            this.AnimationId = void 0;
          } // 动画ID 


        }

        _tab.BattlePassTable = BattlePassTable;

        class BuyGoldTable {
          constructor() {
            this.Type = void 0;
            // 购买类型 
            this.ItemId = void 0;
            // 获得物品 
            this.ItemCount = void 0;
            // 获得数量 
            this.CostItemId = void 0;
            // 消耗物品 
            this.CostItemCount = void 0;
            // 消耗数量 
            this.AdType = void 0;
            // 广告类型 
            this.PurchaseCount = void 0;
            // 限购次数 
            this.ShowIcon = void 0;
          } // 显示图标 


        }

        _tab.BuyGoldTable = BuyGoldTable;

        class NewPlayerDailyGiftTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Group = void 0;
            // 分组 
            this.CreateDay = void 0;
            // 可购买天数 
            this.RechargeId = void 0;
            // 充值ID 
            this.RewardItemIds = void 0;
            // 奖励道具 
            this.RewardItemNum = void 0;
            // 奖励数量 
            this.DiscountIcon = void 0;
            // 折扣图标 
            this.ShowStar = void 0;
          } // 显示星级 


        }

        _tab.NewPlayerDailyGiftTable = NewPlayerDailyGiftTable;

        class ActivityNewPlayerTaskTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Group = void 0;
            // 分组 
            this.CreateDay = void 0;
            // 创角时间 
            this.TaskIds1 = void 0;
            // 任务ID列表1 
            this.TaskIds2 = void 0;
            // 任务ID列表2 
            this.MallId = void 0;
          } // 商店ID 


        }

        _tab.ActivityNewPlayerTaskTable = ActivityNewPlayerTaskTable;

        class ActivityNewPlayerTaskScoreTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Group = void 0;
            // 分组 
            this.Score = void 0;
            // 累计积分 
            this.RewardId = void 0;
            // 奖励道具ID 
            this.RewardNum = void 0;
          } // 奖励数量 


        }

        _tab.ActivityNewPlayerTaskScoreTable = ActivityNewPlayerTaskScoreTable;

        class MainChapterGiftTable {
          constructor() {
            this.MallId = void 0;
            // 商店ID 
            this.MainChapterId = void 0;
            // 通关主线章节 
            this.DiscountIcon = void 0;
            // 折扣图标 
            this.AnimationId = void 0;
          } // 显示动画ID 


        }

        _tab.MainChapterGiftTable = MainChapterGiftTable;

        class ServerMailTable {
          constructor() {
            this.Type = void 0;
            // 邮件类型 
            this.Title = void 0;
            // 标题 
            this.Sender = void 0;
            // 发送者 
            this.Content = void 0;
            // 邮件内容 
            this.ExpireTime = void 0;
            // 过期时间 
            this.ExistsTime = void 0;
            // 存续时间 
            this.AttachmentID = void 0;
            // 物品ID 
            this.AttachmentCount = void 0;
          } // 物品数量 


        }

        _tab.ServerMailTable = ServerMailTable;

        class ActivityTable {
          constructor() {
            this.ActivityId = void 0;
            // 活动ID 
            this.ActivityName = void 0;
            // 活动名称 
            this.Type = void 0;
            // 活动类型 
            this.Param1 = void 0;
            // 参数1 
            this.Param2 = void 0;
            // 参数2 
            this.Param3 = void 0;
            // 参数3 
            this.ActivityIds = void 0;
            // 活动ID列表 
            this.ButtonIconUrl = void 0;
            // 活动入口 
            this.WordKey = void 0;
          } // 活动页签文本 


        }

        _tab.ActivityTable = ActivityTable;

        class ActivityNewServerTable {
          constructor() {
            this.ActivityId = void 0;
            // 活动ID 
            this.OpenDay = void 0;
            // 开启天数 
            this.EndDay = void 0;
          } // 结束天数 


        }

        _tab.ActivityNewServerTable = ActivityNewServerTable;

        class ItemClientJumpTable {
          constructor() {
            this.ItemId = void 0;
            // 道具ID 
            this.JumpUI = void 0;
            // 跳转界面 
            this.JumpParam = void 0;
          } // 跳转参数 


        }

        _tab.ItemClientJumpTable = ItemClientJumpTable;

        class ActivityRankTable {
          constructor() {
            this.Id = void 0;
            // 索引ID 
            this.ActivityId = void 0;
            // 活动ID 
            this.RankId = void 0;
            // 排行榜ID 
            this.EndTimes = void 0;
            // 排行榜结算时间 
            this.TaskIds = void 0;
            // 任务ID列表 
            this.WordKey = void 0;
          } // 活动名称文本 


        }

        _tab.ActivityRankTable = ActivityRankTable;

        class RandomNameTable {
          constructor() {
            this.Id = void 0;
            // 索引ID 
            this.FirstName = void 0;
            // 前缀 
            this.LastName = void 0;
          } // 后缀 


        }

        _tab.RandomNameTable = RandomNameTable;

        class GuideTable {
          constructor() {
            this.Id = void 0;
            // 引导ID 
            this.GuideType = void 0;
            // 引导类型 
            this.PreGuide = void 0;
            // 前置引导 
            this.ScriptName = void 0;
            // 脚本名 
            this.GuideScene = void 0;
          } // 引导所在场景 


        }

        _tab.GuideTable = GuideTable;

        class GuideDialogueTable {
          constructor() {
            this.Id = void 0;
            // 对话ID 
            this.IsLeft = void 0;
            // 是否在左侧 
            this.PosX = void 0;
            // x坐标 
            this.PosY = void 0;
            // y坐标 
            this.IsMask = void 0;
            // 是否遮黑 
            this.Head = void 0;
            // 对话头像 
            this.Sound = void 0;
          } // 播放语音 


        }

        _tab.GuideDialogueTable = GuideDialogueTable;

        class HeadTable {
          constructor() {
            this.Id = void 0;
            // 头像ID 
            this.UnlockType = void 0;
            // 解锁方式 
            this.UnlockParam = void 0;
            // 解锁参数 
            this.AttrTypes = void 0;
            // 属性类型 
            this.AttrValue = void 0;
          } // 属性值 


        }

        _tab.HeadTable = HeadTable;

        class HeadFramTable {
          constructor() {
            this.Id = void 0;
            // 头像框ID 
            this.AttrTypes = void 0;
            // 属性类型 
            this.AttrValue = void 0;
          } // 属性值 


        }

        _tab.HeadFramTable = HeadFramTable;

        class CheatStageTable {
          constructor() {
            this.Id = void 0;
            // 关卡ID 
            this.DropId = void 0;
            // 战斗掉落ID 
            this.BossIdList = void 0;
            // Boss列表 
            this.RollCountList = void 0;
            // Boss战卷轴激活列表 
            this.BossHpList = void 0;
            // Boss血量列表 
            this.BossDPSList = void 0;
          } // BossDPS列表 


        }

        _tab.CheatStageTable = CheatStageTable;

        class GuildLevelTable {
          constructor() {
            this.Id = void 0;
            // 公会等级 
            this.Exp = void 0;
            // 累计经验 
            this.MaxCount = void 0;
            // 最大人数 
            this.TaskBoxReward1 = void 0;
            // 任务宝箱1 
            this.TaskRewardNum1 = void 0;
            // 奖励数量1 
            this.TaskBoxReward2 = void 0;
            // 任务宝箱2 
            this.TaskRewardNum2 = void 0;
            // 奖励数量2 
            this.TaskBoxReward3 = void 0;
            // 任务宝箱3 
            this.TaskRewardNum3 = void 0;
            // 奖励数量3 
            this.TaskBoxReward4 = void 0;
            // 任务宝箱4 
            this.TaskRewardNum4 = void 0;
            // 奖励数量4 
            this.TaskBoxReward5 = void 0;
            // 任务宝箱5 
            this.TaskRewardNum5 = void 0;
          } // 奖励数量5 


        }

        _tab.GuildLevelTable = GuildLevelTable;

        class GuildPositionTable {
          constructor() {
            this.Position = void 0;
            // 职位 
            this.MaxCount = void 0;
            // 最大数量 
            this.KickOut = void 0;
            // 踢人/天 
            this.Appoint = void 0;
            // 任职 
            this.WriteNotification = void 0;
            // 写公告 
            this.Proces = void 0;
            // 处理申请 
            this.Setting = void 0;
          } // 公会设置 


        }

        _tab.GuildPositionTable = GuildPositionTable;

        class GuildSignInTable {
          constructor() {
            this.Id = void 0;
            // 签到次数 
            this.RewardItemIds = void 0;
            // 签到奖励道具 
            this.RewardCount = void 0;
            // 签到奖励数量 
            this.SignInCostDiamond = void 0;
          } // 签到消耗钻石 


        }

        _tab.GuildSignInTable = GuildSignInTable;

        class GuildAttrTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.Level = void 0;
            // 等级 
            this.HeroClass = void 0;
            // 职业 
            this.ShowLevel = void 0;
            // 显示等级 
            this.AttrTypes = void 0;
            // 属性类型 
            this.AttrValue = void 0;
            // 属性值 
            this.CostItemIds = void 0;
            // 消耗道具 
            this.CostItemCount = void 0;
          } // 消耗数量 


        }

        _tab.GuildAttrTable = GuildAttrTable;

        class GuildBossPointTable {
          constructor() {
            this.Id = void 0;
            // ID 
            this.StageId = void 0;
            // 关卡ID 
            this.Damage = void 0;
            // 伤害值 
            this.PointRaito = void 0;
            // 积分比率 
            this.DropId = void 0;
          } // 掉落ID 


        }

        _tab.GuildBossPointTable = GuildBossPointTable;

        class GuildFlagTable {
          constructor() {
            this.Id = void 0;
            // 旗帜ID 
            this.IconUrl = void 0;
          } // 旗帜路径 


        }

        _tab.GuildFlagTable = GuildFlagTable;

        class GuildGiftTable {
          constructor() {
            this.Id = void 0;
            // 礼包ID 
            this.NextId = void 0;
            // 下一个ID 
            this.Type = void 0;
            // 礼包类型 
            this.ActivationCond = void 0;
            // 激活条件 
            this.ActivationParams = void 0;
            // 激活参数 
            this.RewardItemId = void 0;
            // 礼包道具 
            this.ItemCount = void 0;
            // 道具数量 
            this.DiamondPrice = void 0;
            // 钻石售价 
            this.MinPrice = void 0;
            // 最低售价 
            this.BargainingRange = void 0;
            // 砍价范围 
            this.Duration = void 0;
            // 持续时间 
            this.Button = void 0;
          } // 入口 


        }

        _tab.GuildGiftTable = GuildGiftTable;

        class ChatBreviaryTable {
          constructor() {
            this.Type = void 0;
            // 类型 
            this.Text = void 0;
            // 消息文本 
            this.JumpUI = void 0;
            // 跳转界面 
            this.JumpParam = void 0;
          } // 跳转参数 


        }

        _tab.ChatBreviaryTable = ChatBreviaryTable;

        class GuildOpenFunctionTable {
          constructor() {
            this.Name = void 0;
            // 功能名称 
            this.Level = void 0;
            // 公会等级 
            this.WordKey = void 0;
          } // 提示文本 


        }

        _tab.GuildOpenFunctionTable = GuildOpenFunctionTable;

        class Comic {
          constructor() {
            this.ComicID = void 0;
            // 漫画ID 
            this.prefabName = void 0;
            // 预制体路径 
            this.NodeName = void 0;
            // 节点名字 
            this.AnimationName = void 0;
            // 动画名字 
            this.ComicName = void 0;
            // 漫画名字 
            this.ComicUnlock = void 0;
          } // 解锁条件 


        }

        _tab.Comic = Comic;

        class GachaUpTable {
          constructor() {
            this.Id = void 0;
            // 索引ID 
            this.GachaIds = void 0;
            // 卡池ID 
            this.TaskIds = void 0;
            // 任务ID 
            this.IconUrl = void 0;
            // 扭蛋入口图片 
            this.TabUrl = void 0;
            // 页签图标 
            this.AnimationId = void 0;
            // 动画ID 
            this.LoginShowUrl = void 0;
            // 登录展示图 
            this.PrefabUrl = void 0;
          } // 概率显示prefab 


        }

        _tab.GachaUpTable = GachaUpTable;

        class ActivityHeroGrowTable {
          constructor() {
            this.Id = void 0;
            // 索引ID 
            this.HeroId = void 0;
            // 英雄ID 
            this.HeroStar = void 0;
            // 英雄星级 
            this.FreeRewardId = void 0;
            // 免费奖励ID 
            this.FreeRewardCount = void 0;
            // 免费奖励数量 
            this.RechargeId = void 0;
            // 充值ID 
            this.LimitCount = void 0;
            // 限购次数 
            this.RewardIds = void 0;
            // 付费奖励ID 
            this.RewardCount = void 0;
            // 付费奖励数量 
            this.BackgroundUrl = void 0;
            // 活动背景图 
            this.AnimationId = void 0;
          } // 动画ID 


        }

        _tab.ActivityHeroGrowTable = ActivityHeroGrowTable;

        class SignInGiftTable {
          constructor() {
            this.Day = void 0;
            // 登录天数 
            this.ItemId = void 0;
            // 道具ID 
            this.ItemCount = void 0;
            // 道具数量 
            this.IsGrand = void 0;
          } // 是否大奖 


        }

        _tab.SignInGiftTable = SignInGiftTable;

        class PopWindowMechanism {
          constructor() {
            this.ID = void 0;
            // 索引ID 
            this.PopPriority = void 0;
            // 弹出优先级 
            this.MutexID = void 0;
          } // 互斥弹出 


        }

        _tab.PopWindowMechanism = PopWindowMechanism;

        class PvPStageTable {
          constructor() {
            this.ID = void 0;
            // 关卡ID 
            this.Type = void 0;
            // 战斗类型 
            this.SceneWidth = void 0;
            // 场景宽度 
            this.SceneHeight = void 0;
            // 场景高度 
            this.Position = void 0;
          } // 英雄站点 


        }

        _tab.PvPStageTable = PvPStageTable;

        class PvPStagePositionTable {
          constructor() {
            this.ID = void 0;
            // 分组ID 
            this.HeroClass = void 0;
            // 英雄 
            this.X = void 0;
            // X 
            this.Y = void 0;
            // Y 
            this.location = void 0;
          } // 对应阵容位置 


        }

        _tab.PvPStagePositionTable = PvPStagePositionTable;

        class FincaFightTeam {
          constructor() {
            this.Level = void 0;
            // 日志等级 
            this.UnlockHero = void 0;
            // 解锁英雄数量 
            this.UnlockWeapon = void 0;
          } // 解锁武器数量 


        }

        _tab.FincaFightTeam = FincaFightTeam;

        class ConfigTable {
          constructor() {
            this.InitialItems = void 0;
            //  
            this.InitialQuantities = void 0;
            //  
            this.EquipMaxNum = void 0;
            //  
            this.ChangeNameCost = void 0;
            //  
            this.InitialStaminaMaxCount = void 0;
            //  
            this.StaminaResumeTime = void 0;
            //  
            this.MainChapterQuiteCount = void 0;
            //  
            this.InterfaceTxtGreen = void 0;
            //  
            this.InterfaceTxtRed = void 0;
            //  
            this.DailyTaskRewardNeedCount = void 0;
            //  
            this.InitialPatrolMaxTime = void 0;
            //  
            this.QuickPatrolUseItem = void 0;
            //  
            this.QuickPatrolDailyCount = void 0;
            //  
            this.QuickPatrolTime = void 0;
            //  
            this.PatrolRewardCd = void 0;
            //  
            this.PatrolTipsTime = void 0;
            //  
            this.GoldStageSweepFreeCount = void 0;
            //  
            this.GoldStageSweepBuyCount = void 0;
            //  
            this.GoldStageSweepBuyCost = void 0;
            //  
            this.FeedStageSweepFreeCount = void 0;
            //  
            this.FeedStageSweepBuyCount = void 0;
            //  
            this.FeedStageSweepBuyCost = void 0;
            //  
            this.HeroCollectionExistsSec = void 0;
            //  
            this.NewPlayerTask1Duration = void 0;
            //  
            this.NewPlayerTask2Duration = void 0;
            //  
            this.HeroBagNum = void 0;
            //  
            this.HeroBagExpansion = void 0;
            //  
            this.HeroRecycleReward = void 0;
            //  
            this.HeroOneClickUpgradeStars = void 0;
            //  
            this.HeroOneClickUpgradeStarMax = void 0;
            //  
            this.BookStarUniversalMaterial = void 0;
            //  
            this.BookStarUniversalMaterialQuality = void 0;
            //  
            this.weaponLimit = void 0;
            //  
            this.FightDefConstant = void 0;
            //  
            this.FightDefHeroStarConstant = void 0;
            //  
            this.FightDefHeroLevelConstant = void 0;
            //  
            this.FightCriticalConstant = void 0;
            //  
            this.FightCriticalPointTop = void 0;
            //  
            this.FightCriticalCurvature = void 0;
            //  
            this.FightCriticalInflection = void 0;
            //  
            this.FightBaseThumpDamage = void 0;
            //  
            this.FightBaseVertigo = void 0;
            //  
            this.FightDamageColor_0 = void 0;
            //  
            this.FightDamageColor_1 = void 0;
            //  
            this.FightDamageColor_2 = void 0;
            //  
            this.FightDamageColor_3 = void 0;
            //  
            this.FightDamageColor_4 = void 0;
            //  
            this.TimeScale = void 0;
            //  
            this.FightRogueRefreshCount = void 0;
            //  
            this.CaptainSkill = void 0;
            //  
            this.FrontSkill = void 0;
            //  
            this.FightReviveCountByAd = void 0;
            //  
            this.Deatheffect = void 0;
            //  
            this.Resurrectioneffect = void 0;
            //  
            this.Holding = void 0;
            //  
            this.HoldFull = void 0;
            //  
            this.BulletBaseTarget = void 0;
            //  
            this.FinalBuffId = void 0;
            //  
            this.TapTipsTimes = void 0;
            //  
            this.ShieldLimit = void 0;
            //  
            this.NormalHitBack = void 0;
            //  
            this.WanDaoLocation = void 0;
            //  
            this.RogueHeroRankScore = void 0;
            //  
            this.RogueCaptainScore = void 0;
            //  
            this.RogueWarriorScore = void 0;
            //  
            this.RogueBookBuildsScore = void 0;
            //  
            this.RogueBookCoreScore = void 0;
            //  
            this.RogueBookSkillScore = void 0;
            //  
            this.RogueBookBaseScore = void 0;
            //  
            this.RogueBookKeyScore = void 0;
            //  
            this.RogueCaptainUpMul = void 0;
            //  
            this.RogueSeparatedScore = void 0;
            //  
            this.FriendMaxCount = void 0;
            //  
            this.ApplyFriendMaxCount = void 0;
            //  
            this.BlackListMaxCount = void 0;
            //  
            this.RecommendMaxCount = void 0;
            //  
            this.RecommendTimeLimit = void 0;
            //  
            this.RecommendOfflineLimit = void 0;
            //  
            this.GiftMaxCount = void 0;
            //  
            this.GiftRecvMaxCount = void 0;
            //  
            this.GiftGivingMaxCount = void 0;
            //  
            this.GiftItemId = void 0;
            //  
            this.GiftAmount = void 0;
            //  
            this.DailyShopFreeRefreshCount = void 0;
            //  
            this.DailyShopFreeRefreshCD = void 0;
            //  
            this.DailyShopBuyRefreshCount = void 0;
            //  
            this.DailyShopBuyCostDiamonds = void 0;
            //  
            this.ChatCd = void 0;
            //  
            this.RankUpdateInterval = void 0;
            //  
            this.DailyRewardId = void 0;
            //  
            this.MonthlyPassBothRewardItemIds = void 0;
            //  
            this.MonthlyPassBothRewardItemNum = void 0;
            //  
            this.WorldBossStageId = void 0;
            //  
            this.WorldBossDailyCount = void 0;
            //  
            this.WorldBossDailyBuyCount = void 0;
            //  
            this.WorldBossDailyBuyCostDiamonds = void 0;
            //  
            this.WorldBossShowSkillIds = void 0;
            //  
            this.DailyChallengeCD = void 0;
            //  
            this.DailyChallengeCount = void 0;
            //  
            this.DailyChallengeFreeCount = void 0;
            //  
            this.ClimbTowerDefeatCount = void 0;
            //  
            this.InitialDropFeather = void 0;
            //  
            this.AddDropFeather = void 0;
            //  
            this.RogueFullBackupOption = void 0;
            //  
            this.MailExpireTime = void 0;
            //  
            this.MailMaxCount = void 0;
            //  
            this.GuideStage = void 0;
            //  
            this.GuideStageBuff = void 0;
            //  
            this.GuideStageFeatherGroup = void 0;
            //  
            this.GuideStageRogueGroup = void 0;
            //  
            this.LoadingTipsTime = void 0;
            //  
            this.CreateGuildCostDiamond = void 0;
            //  
            this.GuildChangeNameCost = void 0;
            //  
            this.GuildAttrResetCost = void 0;
            //  
            this.GuildDailyTaskRewardNeedCount = void 0;
            //  
            this.GuildGiftPhase = void 0;
            //  
            this.GuildGiftRefreshWeekday = void 0;
            //  
            this.GuildRankSyncInterval = void 0;
            //  
            this.GuildJoinCd = void 0;
            //  
            this.GuildBossStageId = void 0;
            //  
            this.GuildBossDailyCount = void 0;
            //  
            this.GuildBossDailyBuyCount = void 0;
            //  
            this.GuildBossDailyBuyCostDiamonds = void 0;
            //  
            this.GuildBossShowSkillIds = void 0;
            //  
            this.FincaFightDefaultScore = void 0;
            //  
            this.FincaFightFreeTimes = void 0;
            //  
            this.FincaFightBattleSkip = void 0;
            //  
            this.PvPRogueTick = void 0;
            //  
            this.PveStageDifficultyTag = void 0;
          } //  


        }

        _tab.ConfigTable = ConfigTable;

        class Table {
          constructor() {
            this.AchievementTaskTable = void 0;
            // table: AchievementTaskTable 
            this.ActivityCumulativeRechargeTable = void 0;
            // table: ActivityCumulativeRechargeTable 
            this.ActivityHeroGrowTable = void 0;
            // table: ActivityHeroGrowTable 
            this.ActivityNewPlayerTaskScoreTable = void 0;
            // table: ActivityNewPlayerTaskScoreTable 
            this.ActivityNewPlayerTaskTable = void 0;
            // table: ActivityNewPlayerTaskTable 
            this.ActivityRankTable = void 0;
            // table: ActivityRankTable 
            this.ActivityTable = void 0;
            // table: ActivityTable 
            this.AdvertPosTable = void 0;
            // table: AdvertPosTable 
            this.AnimationTable = void 0;
            // table: AnimationTable 
            this.BattlePassTable = void 0;
            // table: BattlePassTable 
            this.BookDictionary = void 0;
            // table: BookDictionary 
            this.BookFragmentTable = void 0;
            // table: BookFragmentTable 
            this.BookLevelTable = void 0;
            // table: BookLevelTable 
            this.BookSeriesTable = void 0;
            // table: BookSeriesTable 
            this.BookSlotTable = void 0;
            // table: BookSlotTable 
            this.BookStarTable = void 0;
            // table: BookStarTable 
            this.BookTable = void 0;
            // table: BookTable 
            this.BoundTable = void 0;
            // table: BoundTable 
            this.BreakEggTable = void 0;
            // table: BreakEggTable 
            this.BuffTable = void 0;
            // table: BuffTable 
            this.BulletTable = void 0;
            // table: BulletTable 
            this.BuyDiamondsTable = void 0;
            // table: BuyDiamondsTable 
            this.BuyGoldTable = void 0;
            // table: BuyGoldTable 
            this.BuyStaminaTable = void 0;
            // table: BuyStaminaTable 
            this.ChallengeButtonTable = void 0;
            // table: ChallengeButtonTable 
            this.ChannelTable = void 0;
            // table: ChannelTable 
            this.ChapterFristRewardTable = void 0;
            // table: ChapterFristRewardTable 
            this.ChatBreviaryTable = void 0;
            // table: ChatBreviaryTable 
            this.ChoiceBoxTable = void 0;
            // table: ChoiceBoxTable 
            this.ClimbTowerTable = void 0;
            // table: ClimbTowerTable 
            this.Comic = void 0;
            // table: Comic 
            this.DailyChallengeBuffTable = void 0;
            // table: DailyChallengeBuffTable 
            this.DailyChallengeLevelTable = void 0;
            // table: DailyChallengeLevelTable 
            this.DailyRewardItemTable = void 0;
            // table: DailyRewardItemTable 
            this.DailyRewardTable = void 0;
            // table: DailyRewardTable 
            this.DailyShopItemTable = void 0;
            // table: DailyShopItemTable 
            this.DailyShopTable = void 0;
            // table: DailyShopTable 
            this.DropTable = void 0;
            // table: DropTable 
            this.EffectTable = void 0;
            // table: EffectTable 
            this.ElixirTable = void 0;
            // table: ElixirTable 
            this.EquipAttrGroupTable = void 0;
            // table: EquipAttrGroupTable 
            this.EquipAttrTable = void 0;
            // table: EquipAttrTable 
            this.EquipSkillTable = void 0;
            // table: EquipSkillTable 
            this.EquipTable = void 0;
            // table: EquipTable 
            this.EquipUpgradeTable = void 0;
            // table: EquipUpgradeTable 
            this.FeatherEggDrop = void 0;
            // table: FeatherEggDrop 
            this.FincaFightTeam = void 0;
            // table: FincaFightTeam 
            this.FirstRechargeTable = void 0;
            // table: FirstRechargeTable 
            this.GachaTable = void 0;
            // table: GachaTable 
            this.GachaUpTable = void 0;
            // table: GachaUpTable 
            this.GeneLevelTable = void 0;
            // table: GeneLevelTable 
            this.GuideDialogueTable = void 0;
            // table: GuideDialogueTable 
            this.GuideTable = void 0;
            // table: GuideTable 
            this.GuildAttrTable = void 0;
            // table: GuildAttrTable 
            this.GuildBossPointTable = void 0;
            // table: GuildBossPointTable 
            this.GuildFlagTable = void 0;
            // table: GuildFlagTable 
            this.GuildGiftTable = void 0;
            // table: GuildGiftTable 
            this.GuildLevelTable = void 0;
            // table: GuildLevelTable 
            this.GuildOpenFunctionTable = void 0;
            // table: GuildOpenFunctionTable 
            this.GuildPositionTable = void 0;
            // table: GuildPositionTable 
            this.GuildSignInTable = void 0;
            // table: GuildSignInTable 
            this.HeadFramTable = void 0;
            // table: HeadFramTable 
            this.HeadTable = void 0;
            // table: HeadTable 
            this.HeroAlbumTable = void 0;
            // table: HeroAlbumTable 
            this.HeroAptitudeTable = void 0;
            // table: HeroAptitudeTable 
            this.HeroAttrClientTable = void 0;
            // table: HeroAttrClientTable 
            this.HeroAttrTable = void 0;
            // table: HeroAttrTable 
            this.HeroClassTable = void 0;
            // table: HeroClassTable 
            this.HeroCollectionTable = void 0;
            // table: HeroCollectionTable 
            this.HeroCommonCostTable = void 0;
            // table: HeroCommonCostTable 
            this.HeroLevelResonanceTable = void 0;
            // table: HeroLevelResonanceTable 
            this.HeroLevelUpTable = void 0;
            // table: HeroLevelUpTable 
            this.HeroMasterTable = void 0;
            // table: HeroMasterTable 
            this.HeroPowerScore = void 0;
            // table: HeroPowerScore 
            this.HeroStarResonanceTable = void 0;
            // table: HeroStarResonanceTable 
            this.HeroStarStepTable = void 0;
            // table: HeroStarStepTable 
            this.HeroStarUpTable = void 0;
            // table: HeroStarUpTable 
            this.HeroTable = void 0;
            // table: HeroTable 
            this.ItemClientJumpTable = void 0;
            // table: ItemClientJumpTable 
            this.ItemQualityTable = void 0;
            // table: ItemQualityTable 
            this.ItemStarClientTable = void 0;
            // table: ItemStarClientTable 
            this.ItemTable = void 0;
            // table: ItemTable 
            this.LimitTimeItemTable = void 0;
            // table: LimitTimeItemTable 
            this.MainChapterGiftTable = void 0;
            // table: MainChapterGiftTable 
            this.MainChapterTable = void 0;
            // table: MainChapterTable 
            this.MallItemTabe = void 0;
            // table: MallItemTabe 
            this.MallTable = void 0;
            // table: MallTable 
            this.MapBlock = void 0;
            // table: MapBlock 
            this.ModuleTable = void 0;
            // table: ModuleTable 
            this.MonsterTable = void 0;
            // table: MonsterTable 
            this.MonthlyPassTable = void 0;
            // table: MonthlyPassTable 
            this.NewPlayerDailyGiftTable = void 0;
            // table: NewPlayerDailyGiftTable 
            this.NoticeTable = void 0;
            // table: NoticeTable 
            this.OpenFunctionTable = void 0;
            // table: OpenFunctionTable 
            this.PRBTable = void 0;
            // table: PRBTable 
            this.PatrolTable = void 0;
            // table: PatrolTable 
            this.PlayerLvTable = void 0;
            // table: PlayerLvTable 
            this.PopWindowMechanism = void 0;
            // table: PopWindowMechanism 
            this.PvPStagePositionTable = void 0;
            // table: PvPStagePositionTable 
            this.PvPStageTable = void 0;
            // table: PvPStageTable 
            this.PveAddFeatherDropTable = void 0;
            // table: PveAddFeatherDropTable 
            this.PveClearStageTable = void 0;
            // table: PveClearStageTable 
            this.PveStageBuffTable = void 0;
            // table: PveStageBuffTable 
            this.PveStageDropTable = void 0;
            // table: PveStageDropTable 
            this.PveStageTable = void 0;
            // table: PveStageTable 
            this.PveSweepTable = void 0;
            // table: PveSweepTable 
            this.PveTimeDropTable = void 0;
            // table: PveTimeDropTable 
            this.QuestLogTable = void 0;
            // table: QuestLogTable 
            this.RandomNameTable = void 0;
            // table: RandomNameTable 
            this.RankCycleRewardTable = void 0;
            // table: RankCycleRewardTable 
            this.RankRewardTable = void 0;
            // table: RankRewardTable 
            this.RechargeTable = void 0;
            // table: RechargeTable 
            this.RecommendTeamTable = void 0;
            // table: RecommendTeamTable 
            this.RobotTable = void 0;
            // table: RobotTable 
            this.RogueGroupTable = void 0;
            // table: RogueGroupTable 
            this.RogueTable = void 0;
            // table: RogueTable 
            this.ScrollPaintingTable = void 0;
            // table: ScrollPaintingTable 
            this.ServerlistTable = void 0;
            // table: ServerlistTable 
            this.SignInGiftTable = void 0;
            // table: SignInGiftTable 
            this.SkillGroupTable = void 0;
            // table: SkillGroupTable 
            this.SkillPowerTable = void 0;
            // table: SkillPowerTable 
            this.SkillSummonTable = void 0;
            // table: SkillSummonTable 
            this.SkillTable = void 0;
            // table: SkillTable 
            this.SoundTable = void 0;
            // table: SoundTable 
            this.TaskTable = void 0;
            // table: TaskTable 
            this.TipsTable = void 0;
            // table: TipsTable 
            this.TriggerTable = void 0;
            // table: TriggerTable 
            this.VipBonusTable = void 0;
            // table: VipBonusTable 
            this.VipTable = void 0;
            // table: VipTable 
            this.VirtualItem = void 0;
            // table: VirtualItem 
            this.VoidStageTable = void 0;
            // table: VoidStageTable 
            this.WeeklyTaskBoxTable = void 0;
            // table: WeeklyTaskBoxTable 
            this.WorldBossDamTable = void 0;
            // table: WorldBossDamTable 
            this.WorldBossRewardTable = void 0;
            // table: WorldBossRewardTable 
            this.ConfigTable = void 0;
            // table: ConfigTable 
            // Indices 
            this.AchievementTaskTableById = void 0;
            // table: AchievementTaskTable 
            this.ActivityCumulativeRechargeTableByIndexId = void 0;
            // table: ActivityCumulativeRechargeTable 
            this.ActivityHeroGrowTableById = void 0;
            // table: ActivityHeroGrowTable 
            this.ActivityNewPlayerTaskScoreTableById = void 0;
            // table: ActivityNewPlayerTaskScoreTable 
            this.ActivityNewPlayerTaskTableById = void 0;
            // table: ActivityNewPlayerTaskTable 
            this.ActivityRankTableById = void 0;
            // table: ActivityRankTable 
            this.ActivityTableByActivityId = void 0;
            // table: ActivityTable 
            this.AdvertPosTableByAdType = void 0;
            // table: AdvertPosTable 
            this.AnimationTableById = void 0;
            // table: AnimationTable 
            this.BattlePassTableById = void 0;
            // table: BattlePassTable 
            this.BookDictionaryByPhaseOneBook = void 0;
            // table: BookDictionary 
            this.BookFragmentTableById = void 0;
            // table: BookFragmentTable 
            this.BookLevelTableById = void 0;
            // table: BookLevelTable 
            this.BookSeriesTableById = void 0;
            // table: BookSeriesTable 
            this.BookSlotTableById = void 0;
            // table: BookSlotTable 
            this.BookStarTableById = void 0;
            // table: BookStarTable 
            this.BookTableById = void 0;
            // table: BookTable 
            this.BoundTableById = void 0;
            // table: BoundTable 
            this.BreakEggTableById = void 0;
            // table: BreakEggTable 
            this.BuffTableById = void 0;
            // table: BuffTable 
            this.BulletTableById = void 0;
            // table: BulletTable 
            this.BuyDiamondsTableByGoodsId = void 0;
            // table: BuyDiamondsTable 
            this.BuyGoldTableByType = void 0;
            // table: BuyGoldTable 
            this.BuyStaminaTableByType = void 0;
            // table: BuyStaminaTable 
            this.ChallengeButtonTableById = void 0;
            // table: ChallengeButtonTable 
            this.ChannelTableByChannelType = void 0;
            // table: ChannelTable 
            this.ChapterFristRewardTableById = void 0;
            // table: ChapterFristRewardTable 
            this.ChatBreviaryTableByType = void 0;
            // table: ChatBreviaryTable 
            this.ChoiceBoxTableByChoiceBoxId = void 0;
            // table: ChoiceBoxTable 
            this.ClimbTowerTableByStageId = void 0;
            // table: ClimbTowerTable 
            this.ComicByComicID = void 0;
            // table: Comic 
            this.DailyChallengeBuffTableById = void 0;
            // table: DailyChallengeBuffTable 
            this.DailyChallengeLevelTableByLevel = void 0;
            // table: DailyChallengeLevelTable 
            this.DailyRewardTableById = void 0;
            // table: DailyRewardTable 
            this.DailyShopItemTableById = void 0;
            // table: DailyShopItemTable 
            this.DailyShopTableByShopId = void 0;
            // table: DailyShopTable 
            this.DropTableById = void 0;
            // table: DropTable 
            this.EffectTableById = void 0;
            // table: EffectTable 
            this.ElixirTableById = void 0;
            // table: ElixirTable 
            this.EquipAttrGroupTableById = void 0;
            // table: EquipAttrGroupTable 
            this.EquipAttrTableById = void 0;
            // table: EquipAttrTable 
            this.EquipSkillTableById = void 0;
            // table: EquipSkillTable 
            this.EquipTableById = void 0;
            // table: EquipTable 
            this.EquipUpgradeTableById = void 0;
            // table: EquipUpgradeTable 
            this.FeatherEggDropById = void 0;
            // table: FeatherEggDrop 
            this.FincaFightTeamByLevel = void 0;
            // table: FincaFightTeam 
            this.FirstRechargeTableById = void 0;
            // table: FirstRechargeTable 
            this.GachaTableById = void 0;
            // table: GachaTable 
            this.GachaUpTableById = void 0;
            // table: GachaUpTable 
            this.GeneLevelTableById = void 0;
            // table: GeneLevelTable 
            this.GuideDialogueTableById = void 0;
            // table: GuideDialogueTable 
            this.GuideTableById = void 0;
            // table: GuideTable 
            this.GuildAttrTableById = void 0;
            // table: GuildAttrTable 
            this.GuildBossPointTableById = void 0;
            // table: GuildBossPointTable 
            this.GuildFlagTableById = void 0;
            // table: GuildFlagTable 
            this.GuildGiftTableById = void 0;
            // table: GuildGiftTable 
            this.GuildLevelTableById = void 0;
            // table: GuildLevelTable 
            this.GuildOpenFunctionTableByName = void 0;
            // table: GuildOpenFunctionTable 
            this.GuildPositionTableByPosition = void 0;
            // table: GuildPositionTable 
            this.GuildSignInTableById = void 0;
            // table: GuildSignInTable 
            this.HeadFramTableById = void 0;
            // table: HeadFramTable 
            this.HeadTableById = void 0;
            // table: HeadTable 
            this.HeroAlbumTableByHeroAptitude = void 0;
            // table: HeroAlbumTable 
            this.HeroAptitudeTableByHeroAptitude = void 0;
            // table: HeroAptitudeTable 
            this.HeroAttrClientTableByType = void 0;
            // table: HeroAttrClientTable 
            this.HeroAttrTableById = void 0;
            // table: HeroAttrTable 
            this.HeroClassTableByHeroClass = void 0;
            // table: HeroClassTable 
            this.HeroCollectionTableById = void 0;
            // table: HeroCollectionTable 
            this.HeroCommonCostTableById = void 0;
            // table: HeroCommonCostTable 
            this.HeroLevelResonanceTableById = void 0;
            // table: HeroLevelResonanceTable 
            this.HeroLevelUpTableByLevel = void 0;
            // table: HeroLevelUpTable 
            this.HeroMasterTableById = void 0;
            // table: HeroMasterTable 
            this.HeroPowerScoreById = void 0;
            // table: HeroPowerScore 
            this.HeroStarResonanceTableById = void 0;
            // table: HeroStarResonanceTable 
            this.HeroStarStepTableById = void 0;
            // table: HeroStarStepTable 
            this.HeroStarUpTableById = void 0;
            // table: HeroStarUpTable 
            this.HeroTableById = void 0;
            // table: HeroTable 
            this.ItemClientJumpTableByItemId = void 0;
            // table: ItemClientJumpTable 
            this.ItemQualityTableByQuality = void 0;
            // table: ItemQualityTable 
            this.ItemStarClientTableById = void 0;
            // table: ItemStarClientTable 
            this.ItemTableById = void 0;
            // table: ItemTable 
            this.LimitTimeItemTableByItemId = void 0;
            // table: LimitTimeItemTable 
            this.MainChapterGiftTableByMallId = void 0;
            // table: MainChapterGiftTable 
            this.MainChapterTableById = void 0;
            // table: MainChapterTable 
            this.MallItemTabeById = void 0;
            // table: MallItemTabe 
            this.MallTableByMallId = void 0;
            // table: MallTable 
            this.MapBlockById = void 0;
            // table: MapBlock 
            this.ModuleTableByModuleType = void 0;
            // table: ModuleTable 
            this.MonsterTableById = void 0;
            // table: MonsterTable 
            this.MonthlyPassTableByType = void 0;
            // table: MonthlyPassTable 
            this.NewPlayerDailyGiftTableById = void 0;
            // table: NewPlayerDailyGiftTable 
            this.NoticeTableById = void 0;
            // table: NoticeTable 
            this.OpenFunctionTableByName = void 0;
            // table: OpenFunctionTable 
            this.PRBTableById = void 0;
            // table: PRBTable 
            this.PatrolTableByPveStageId = void 0;
            // table: PatrolTable 
            this.PlayerLvTableByPlayerLv = void 0;
            // table: PlayerLvTable 
            this.PopWindowMechanismByID = void 0;
            // table: PopWindowMechanism 
            this.PvPStageTableByID = void 0;
            // table: PvPStageTable 
            this.PveAddFeatherDropTableByCount = void 0;
            // table: PveAddFeatherDropTable 
            this.PveClearStageTableByStageId = void 0;
            // table: PveClearStageTable 
            this.PveStageBuffTableById = void 0;
            // table: PveStageBuffTable 
            this.PveStageDropTableByDropId = void 0;
            // table: PveStageDropTable 
            this.PveStageTableByStageId = void 0;
            // table: PveStageTable 
            this.PveSweepTableByStageId = void 0;
            // table: PveSweepTable 
            this.PveTimeDropTableByStageId = void 0;
            // table: PveTimeDropTable 
            this.QuestLogTableByLevel = void 0;
            // table: QuestLogTable 
            this.RandomNameTableById = void 0;
            // table: RandomNameTable 
            this.RankCycleRewardTableByIndexId = void 0;
            // table: RankCycleRewardTable 
            this.RankRewardTableById = void 0;
            // table: RankRewardTable 
            this.RechargeTableById = void 0;
            // table: RechargeTable 
            this.RecommendTeamTableById = void 0;
            // table: RecommendTeamTable 
            this.RobotTableById = void 0;
            // table: RobotTable 
            this.RogueGroupTableById = void 0;
            // table: RogueGroupTable 
            this.RogueTableById = void 0;
            // table: RogueTable 
            this.ScrollPaintingTableById = void 0;
            // table: ScrollPaintingTable 
            this.ServerlistTableByID = void 0;
            // table: ServerlistTable 
            this.SignInGiftTableByDay = void 0;
            // table: SignInGiftTable 
            this.SkillGroupTableById = void 0;
            // table: SkillGroupTable 
            this.SkillPowerTableById = void 0;
            // table: SkillPowerTable 
            this.SkillSummonTableBySummonId = void 0;
            // table: SkillSummonTable 
            this.SkillTableById = void 0;
            // table: SkillTable 
            this.SoundTableById = void 0;
            // table: SoundTable 
            this.TaskTableById = void 0;
            // table: TaskTable 
            this.TipsTableById = void 0;
            // table: TipsTable 
            this.TriggerTableById = void 0;
            // table: TriggerTable 
            this.VipBonusTableByIndexId = void 0;
            // table: VipBonusTable 
            this.VipTableByVipLv = void 0;
            // table: VipTable 
            this.VirtualItemByVirtualItemId = void 0;
            // table: VirtualItem 
            this.VoidStageTableById = void 0;
            // table: VoidStageTable 
            this.WeeklyTaskBoxTableById = void 0;
            // table: WeeklyTaskBoxTable 
            this.WorldBossDamTableById = void 0;
            // table: WorldBossDamTable 
            this.WorldBossRewardTableById = void 0;
          }

          // table: WorldBossRewardTable 
          // table: ConfigTable
          GetKeyValue_ConfigTable() {
            return this.ConfigTable[0];
          } //根据json创建Table


          static FromJSON(json) {
            let result;

            if (typeof json === 'string') {
              // if it's a string, parse it first
              result = JSON.parse(json, Table.reviver);
            } else {
              // create an instance of the Table class
              let tbl = new Table(); // copy all the fields from the json object

              result = Object.assign(tbl, json);
            }

            result.BuildData();
            return result;
          }

          static reviver(key, value) {
            return key === "" ? Table.FromJSON(value) : value;
          } // 清除索引和数据


          ResetData() {
            this.AchievementTaskTable = [];
            this.ActivityCumulativeRechargeTable = [];
            this.ActivityHeroGrowTable = [];
            this.ActivityNewPlayerTaskScoreTable = [];
            this.ActivityNewPlayerTaskTable = [];
            this.ActivityRankTable = [];
            this.ActivityTable = [];
            this.AdvertPosTable = [];
            this.AnimationTable = [];
            this.BattlePassTable = [];
            this.BookDictionary = [];
            this.BookFragmentTable = [];
            this.BookLevelTable = [];
            this.BookSeriesTable = [];
            this.BookSlotTable = [];
            this.BookStarTable = [];
            this.BookTable = [];
            this.BoundTable = [];
            this.BreakEggTable = [];
            this.BuffTable = [];
            this.BulletTable = [];
            this.BuyDiamondsTable = [];
            this.BuyGoldTable = [];
            this.BuyStaminaTable = [];
            this.ChallengeButtonTable = [];
            this.ChannelTable = [];
            this.ChapterFristRewardTable = [];
            this.ChatBreviaryTable = [];
            this.ChoiceBoxTable = [];
            this.ClimbTowerTable = [];
            this.Comic = [];
            this.DailyChallengeBuffTable = [];
            this.DailyChallengeLevelTable = [];
            this.DailyRewardItemTable = [];
            this.DailyRewardTable = [];
            this.DailyShopItemTable = [];
            this.DailyShopTable = [];
            this.DropTable = [];
            this.EffectTable = [];
            this.ElixirTable = [];
            this.EquipAttrGroupTable = [];
            this.EquipAttrTable = [];
            this.EquipSkillTable = [];
            this.EquipTable = [];
            this.EquipUpgradeTable = [];
            this.FeatherEggDrop = [];
            this.FincaFightTeam = [];
            this.FirstRechargeTable = [];
            this.GachaTable = [];
            this.GachaUpTable = [];
            this.GeneLevelTable = [];
            this.GuideDialogueTable = [];
            this.GuideTable = [];
            this.GuildAttrTable = [];
            this.GuildBossPointTable = [];
            this.GuildFlagTable = [];
            this.GuildGiftTable = [];
            this.GuildLevelTable = [];
            this.GuildOpenFunctionTable = [];
            this.GuildPositionTable = [];
            this.GuildSignInTable = [];
            this.HeadFramTable = [];
            this.HeadTable = [];
            this.HeroAlbumTable = [];
            this.HeroAptitudeTable = [];
            this.HeroAttrClientTable = [];
            this.HeroAttrTable = [];
            this.HeroClassTable = [];
            this.HeroCollectionTable = [];
            this.HeroCommonCostTable = [];
            this.HeroLevelResonanceTable = [];
            this.HeroLevelUpTable = [];
            this.HeroMasterTable = [];
            this.HeroPowerScore = [];
            this.HeroStarResonanceTable = [];
            this.HeroStarStepTable = [];
            this.HeroStarUpTable = [];
            this.HeroTable = [];
            this.ItemClientJumpTable = [];
            this.ItemQualityTable = [];
            this.ItemStarClientTable = [];
            this.ItemTable = [];
            this.LimitTimeItemTable = [];
            this.MainChapterGiftTable = [];
            this.MainChapterTable = [];
            this.MallItemTabe = [];
            this.MallTable = [];
            this.MapBlock = [];
            this.ModuleTable = [];
            this.MonsterTable = [];
            this.MonthlyPassTable = [];
            this.NewPlayerDailyGiftTable = [];
            this.NoticeTable = [];
            this.OpenFunctionTable = [];
            this.PRBTable = [];
            this.PatrolTable = [];
            this.PlayerLvTable = [];
            this.PopWindowMechanism = [];
            this.PvPStagePositionTable = [];
            this.PvPStageTable = [];
            this.PveAddFeatherDropTable = [];
            this.PveClearStageTable = [];
            this.PveStageBuffTable = [];
            this.PveStageDropTable = [];
            this.PveStageTable = [];
            this.PveSweepTable = [];
            this.PveTimeDropTable = [];
            this.QuestLogTable = [];
            this.RandomNameTable = [];
            this.RankCycleRewardTable = [];
            this.RankRewardTable = [];
            this.RechargeTable = [];
            this.RecommendTeamTable = [];
            this.RobotTable = [];
            this.RogueGroupTable = [];
            this.RogueTable = [];
            this.ScrollPaintingTable = [];
            this.ServerlistTable = [];
            this.SignInGiftTable = [];
            this.SkillGroupTable = [];
            this.SkillPowerTable = [];
            this.SkillSummonTable = [];
            this.SkillTable = [];
            this.SoundTable = [];
            this.TaskTable = [];
            this.TipsTable = [];
            this.TriggerTable = [];
            this.VipBonusTable = [];
            this.VipTable = [];
            this.VirtualItem = [];
            this.VoidStageTable = [];
            this.WeeklyTaskBoxTable = [];
            this.WorldBossDamTable = [];
            this.WorldBossRewardTable = [];
            this.ConfigTable = [];
            this.AchievementTaskTableById = new Dictionary();
            this.ActivityCumulativeRechargeTableByIndexId = new Dictionary();
            this.ActivityHeroGrowTableById = new Dictionary();
            this.ActivityNewPlayerTaskScoreTableById = new Dictionary();
            this.ActivityNewPlayerTaskTableById = new Dictionary();
            this.ActivityRankTableById = new Dictionary();
            this.ActivityTableByActivityId = new Dictionary();
            this.AdvertPosTableByAdType = new Dictionary();
            this.AnimationTableById = new Dictionary();
            this.BattlePassTableById = new Dictionary();
            this.BookDictionaryByPhaseOneBook = new Dictionary();
            this.BookFragmentTableById = new Dictionary();
            this.BookLevelTableById = new Dictionary();
            this.BookSeriesTableById = new Dictionary();
            this.BookSlotTableById = new Dictionary();
            this.BookStarTableById = new Dictionary();
            this.BookTableById = new Dictionary();
            this.BoundTableById = new Dictionary();
            this.BreakEggTableById = new Dictionary();
            this.BuffTableById = new Dictionary();
            this.BulletTableById = new Dictionary();
            this.BuyDiamondsTableByGoodsId = new Dictionary();
            this.BuyGoldTableByType = new Dictionary();
            this.BuyStaminaTableByType = new Dictionary();
            this.ChallengeButtonTableById = new Dictionary();
            this.ChannelTableByChannelType = new Dictionary();
            this.ChapterFristRewardTableById = new Dictionary();
            this.ChatBreviaryTableByType = new Dictionary();
            this.ChoiceBoxTableByChoiceBoxId = new Dictionary();
            this.ClimbTowerTableByStageId = new Dictionary();
            this.ComicByComicID = new Dictionary();
            this.DailyChallengeBuffTableById = new Dictionary();
            this.DailyChallengeLevelTableByLevel = new Dictionary();
            this.DailyRewardTableById = new Dictionary();
            this.DailyShopItemTableById = new Dictionary();
            this.DailyShopTableByShopId = new Dictionary();
            this.DropTableById = new Dictionary();
            this.EffectTableById = new Dictionary();
            this.ElixirTableById = new Dictionary();
            this.EquipAttrGroupTableById = new Dictionary();
            this.EquipAttrTableById = new Dictionary();
            this.EquipSkillTableById = new Dictionary();
            this.EquipTableById = new Dictionary();
            this.EquipUpgradeTableById = new Dictionary();
            this.FeatherEggDropById = new Dictionary();
            this.FincaFightTeamByLevel = new Dictionary();
            this.FirstRechargeTableById = new Dictionary();
            this.GachaTableById = new Dictionary();
            this.GachaUpTableById = new Dictionary();
            this.GeneLevelTableById = new Dictionary();
            this.GuideDialogueTableById = new Dictionary();
            this.GuideTableById = new Dictionary();
            this.GuildAttrTableById = new Dictionary();
            this.GuildBossPointTableById = new Dictionary();
            this.GuildFlagTableById = new Dictionary();
            this.GuildGiftTableById = new Dictionary();
            this.GuildLevelTableById = new Dictionary();
            this.GuildOpenFunctionTableByName = new Dictionary();
            this.GuildPositionTableByPosition = new Dictionary();
            this.GuildSignInTableById = new Dictionary();
            this.HeadFramTableById = new Dictionary();
            this.HeadTableById = new Dictionary();
            this.HeroAlbumTableByHeroAptitude = new Dictionary();
            this.HeroAptitudeTableByHeroAptitude = new Dictionary();
            this.HeroAttrClientTableByType = new Dictionary();
            this.HeroAttrTableById = new Dictionary();
            this.HeroClassTableByHeroClass = new Dictionary();
            this.HeroCollectionTableById = new Dictionary();
            this.HeroCommonCostTableById = new Dictionary();
            this.HeroLevelResonanceTableById = new Dictionary();
            this.HeroLevelUpTableByLevel = new Dictionary();
            this.HeroMasterTableById = new Dictionary();
            this.HeroPowerScoreById = new Dictionary();
            this.HeroStarResonanceTableById = new Dictionary();
            this.HeroStarStepTableById = new Dictionary();
            this.HeroStarUpTableById = new Dictionary();
            this.HeroTableById = new Dictionary();
            this.ItemClientJumpTableByItemId = new Dictionary();
            this.ItemQualityTableByQuality = new Dictionary();
            this.ItemStarClientTableById = new Dictionary();
            this.ItemTableById = new Dictionary();
            this.LimitTimeItemTableByItemId = new Dictionary();
            this.MainChapterGiftTableByMallId = new Dictionary();
            this.MainChapterTableById = new Dictionary();
            this.MallItemTabeById = new Dictionary();
            this.MallTableByMallId = new Dictionary();
            this.MapBlockById = new Dictionary();
            this.ModuleTableByModuleType = new Dictionary();
            this.MonsterTableById = new Dictionary();
            this.MonthlyPassTableByType = new Dictionary();
            this.NewPlayerDailyGiftTableById = new Dictionary();
            this.NoticeTableById = new Dictionary();
            this.OpenFunctionTableByName = new Dictionary();
            this.PRBTableById = new Dictionary();
            this.PatrolTableByPveStageId = new Dictionary();
            this.PlayerLvTableByPlayerLv = new Dictionary();
            this.PopWindowMechanismByID = new Dictionary();
            this.PvPStageTableByID = new Dictionary();
            this.PveAddFeatherDropTableByCount = new Dictionary();
            this.PveClearStageTableByStageId = new Dictionary();
            this.PveStageBuffTableById = new Dictionary();
            this.PveStageDropTableByDropId = new Dictionary();
            this.PveStageTableByStageId = new Dictionary();
            this.PveSweepTableByStageId = new Dictionary();
            this.PveTimeDropTableByStageId = new Dictionary();
            this.QuestLogTableByLevel = new Dictionary();
            this.RandomNameTableById = new Dictionary();
            this.RankCycleRewardTableByIndexId = new Dictionary();
            this.RankRewardTableById = new Dictionary();
            this.RechargeTableById = new Dictionary();
            this.RecommendTeamTableById = new Dictionary();
            this.RobotTableById = new Dictionary();
            this.RogueGroupTableById = new Dictionary();
            this.RogueTableById = new Dictionary();
            this.ScrollPaintingTableById = new Dictionary();
            this.ServerlistTableByID = new Dictionary();
            this.SignInGiftTableByDay = new Dictionary();
            this.SkillGroupTableById = new Dictionary();
            this.SkillPowerTableById = new Dictionary();
            this.SkillSummonTableBySummonId = new Dictionary();
            this.SkillTableById = new Dictionary();
            this.SoundTableById = new Dictionary();
            this.TaskTableById = new Dictionary();
            this.TipsTableById = new Dictionary();
            this.TriggerTableById = new Dictionary();
            this.VipBonusTableByIndexId = new Dictionary();
            this.VipTableByVipLv = new Dictionary();
            this.VirtualItemByVirtualItemId = new Dictionary();
            this.VoidStageTableById = new Dictionary();
            this.WeeklyTaskBoxTableById = new Dictionary();
            this.WorldBossDamTableById = new Dictionary();
            this.WorldBossRewardTableById = new Dictionary();
          } // 构建索引


          BuildData() {
            this.AchievementTaskTableById = new Dictionary();

            if (this.AchievementTaskTable) {
              for (let v of this.AchievementTaskTable) {
                this.AchievementTaskTableById.setValue(v.Id, v);
              }
            }

            this.ActivityCumulativeRechargeTableByIndexId = new Dictionary();

            if (this.ActivityCumulativeRechargeTable) {
              for (let v of this.ActivityCumulativeRechargeTable) {
                this.ActivityCumulativeRechargeTableByIndexId.setValue(v.IndexId, v);
              }
            }

            this.ActivityHeroGrowTableById = new Dictionary();

            if (this.ActivityHeroGrowTable) {
              for (let v of this.ActivityHeroGrowTable) {
                this.ActivityHeroGrowTableById.setValue(v.Id, v);
              }
            }

            this.ActivityNewPlayerTaskScoreTableById = new Dictionary();

            if (this.ActivityNewPlayerTaskScoreTable) {
              for (let v of this.ActivityNewPlayerTaskScoreTable) {
                this.ActivityNewPlayerTaskScoreTableById.setValue(v.Id, v);
              }
            }

            this.ActivityNewPlayerTaskTableById = new Dictionary();

            if (this.ActivityNewPlayerTaskTable) {
              for (let v of this.ActivityNewPlayerTaskTable) {
                this.ActivityNewPlayerTaskTableById.setValue(v.Id, v);
              }
            }

            this.ActivityRankTableById = new Dictionary();

            if (this.ActivityRankTable) {
              for (let v of this.ActivityRankTable) {
                this.ActivityRankTableById.setValue(v.Id, v);
              }
            }

            this.ActivityTableByActivityId = new Dictionary();

            if (this.ActivityTable) {
              for (let v of this.ActivityTable) {
                this.ActivityTableByActivityId.setValue(v.ActivityId, v);
              }
            }

            this.AdvertPosTableByAdType = new Dictionary();

            if (this.AdvertPosTable) {
              for (let v of this.AdvertPosTable) {
                this.AdvertPosTableByAdType.setValue(v.AdType, v);
              }
            }

            this.AnimationTableById = new Dictionary();

            if (this.AnimationTable) {
              for (let v of this.AnimationTable) {
                this.AnimationTableById.setValue(v.Id, v);
              }
            }

            this.BattlePassTableById = new Dictionary();

            if (this.BattlePassTable) {
              for (let v of this.BattlePassTable) {
                this.BattlePassTableById.setValue(v.Id, v);
              }
            }

            this.BookDictionaryByPhaseOneBook = new Dictionary();

            if (this.BookDictionary) {
              for (let v of this.BookDictionary) {
                this.BookDictionaryByPhaseOneBook.setValue(v.PhaseOneBook, v);
              }
            }

            this.BookFragmentTableById = new Dictionary();

            if (this.BookFragmentTable) {
              for (let v of this.BookFragmentTable) {
                this.BookFragmentTableById.setValue(v.Id, v);
              }
            }

            this.BookLevelTableById = new Dictionary();

            if (this.BookLevelTable) {
              for (let v of this.BookLevelTable) {
                this.BookLevelTableById.setValue(v.Id, v);
              }
            }

            this.BookSeriesTableById = new Dictionary();

            if (this.BookSeriesTable) {
              for (let v of this.BookSeriesTable) {
                this.BookSeriesTableById.setValue(v.Id, v);
              }
            }

            this.BookSlotTableById = new Dictionary();

            if (this.BookSlotTable) {
              for (let v of this.BookSlotTable) {
                this.BookSlotTableById.setValue(v.Id, v);
              }
            }

            this.BookStarTableById = new Dictionary();

            if (this.BookStarTable) {
              for (let v of this.BookStarTable) {
                this.BookStarTableById.setValue(v.Id, v);
              }
            }

            this.BookTableById = new Dictionary();

            if (this.BookTable) {
              for (let v of this.BookTable) {
                this.BookTableById.setValue(v.Id, v);
              }
            }

            this.BoundTableById = new Dictionary();

            if (this.BoundTable) {
              for (let v of this.BoundTable) {
                this.BoundTableById.setValue(v.Id, v);
              }
            }

            this.BreakEggTableById = new Dictionary();

            if (this.BreakEggTable) {
              for (let v of this.BreakEggTable) {
                this.BreakEggTableById.setValue(v.Id, v);
              }
            }

            this.BuffTableById = new Dictionary();

            if (this.BuffTable) {
              for (let v of this.BuffTable) {
                this.BuffTableById.setValue(v.Id, v);
              }
            }

            this.BulletTableById = new Dictionary();

            if (this.BulletTable) {
              for (let v of this.BulletTable) {
                this.BulletTableById.setValue(v.Id, v);
              }
            }

            this.BuyDiamondsTableByGoodsId = new Dictionary();

            if (this.BuyDiamondsTable) {
              for (let v of this.BuyDiamondsTable) {
                this.BuyDiamondsTableByGoodsId.setValue(v.GoodsId, v);
              }
            }

            this.BuyGoldTableByType = new Dictionary();

            if (this.BuyGoldTable) {
              for (let v of this.BuyGoldTable) {
                this.BuyGoldTableByType.setValue(v.Type, v);
              }
            }

            this.BuyStaminaTableByType = new Dictionary();

            if (this.BuyStaminaTable) {
              for (let v of this.BuyStaminaTable) {
                this.BuyStaminaTableByType.setValue(v.Type, v);
              }
            }

            this.ChallengeButtonTableById = new Dictionary();

            if (this.ChallengeButtonTable) {
              for (let v of this.ChallengeButtonTable) {
                this.ChallengeButtonTableById.setValue(v.Id, v);
              }
            }

            this.ChannelTableByChannelType = new Dictionary();

            if (this.ChannelTable) {
              for (let v of this.ChannelTable) {
                this.ChannelTableByChannelType.setValue(v.ChannelType, v);
              }
            }

            this.ChapterFristRewardTableById = new Dictionary();

            if (this.ChapterFristRewardTable) {
              for (let v of this.ChapterFristRewardTable) {
                this.ChapterFristRewardTableById.setValue(v.Id, v);
              }
            }

            this.ChatBreviaryTableByType = new Dictionary();

            if (this.ChatBreviaryTable) {
              for (let v of this.ChatBreviaryTable) {
                this.ChatBreviaryTableByType.setValue(v.Type, v);
              }
            }

            this.ChoiceBoxTableByChoiceBoxId = new Dictionary();

            if (this.ChoiceBoxTable) {
              for (let v of this.ChoiceBoxTable) {
                this.ChoiceBoxTableByChoiceBoxId.setValue(v.ChoiceBoxId, v);
              }
            }

            this.ClimbTowerTableByStageId = new Dictionary();

            if (this.ClimbTowerTable) {
              for (let v of this.ClimbTowerTable) {
                this.ClimbTowerTableByStageId.setValue(v.StageId, v);
              }
            }

            this.ComicByComicID = new Dictionary();

            if (this.Comic) {
              for (let v of this.Comic) {
                this.ComicByComicID.setValue(v.ComicID, v);
              }
            }

            this.DailyChallengeBuffTableById = new Dictionary();

            if (this.DailyChallengeBuffTable) {
              for (let v of this.DailyChallengeBuffTable) {
                this.DailyChallengeBuffTableById.setValue(v.Id, v);
              }
            }

            this.DailyChallengeLevelTableByLevel = new Dictionary();

            if (this.DailyChallengeLevelTable) {
              for (let v of this.DailyChallengeLevelTable) {
                this.DailyChallengeLevelTableByLevel.setValue(v.Level, v);
              }
            }

            this.DailyRewardTableById = new Dictionary();

            if (this.DailyRewardTable) {
              for (let v of this.DailyRewardTable) {
                this.DailyRewardTableById.setValue(v.Id, v);
              }
            }

            this.DailyShopItemTableById = new Dictionary();

            if (this.DailyShopItemTable) {
              for (let v of this.DailyShopItemTable) {
                this.DailyShopItemTableById.setValue(v.Id, v);
              }
            }

            this.DailyShopTableByShopId = new Dictionary();

            if (this.DailyShopTable) {
              for (let v of this.DailyShopTable) {
                this.DailyShopTableByShopId.setValue(v.ShopId, v);
              }
            }

            this.DropTableById = new Dictionary();

            if (this.DropTable) {
              for (let v of this.DropTable) {
                this.DropTableById.setValue(v.Id, v);
              }
            }

            this.EffectTableById = new Dictionary();

            if (this.EffectTable) {
              for (let v of this.EffectTable) {
                this.EffectTableById.setValue(v.Id, v);
              }
            }

            this.ElixirTableById = new Dictionary();

            if (this.ElixirTable) {
              for (let v of this.ElixirTable) {
                this.ElixirTableById.setValue(v.Id, v);
              }
            }

            this.EquipAttrGroupTableById = new Dictionary();

            if (this.EquipAttrGroupTable) {
              for (let v of this.EquipAttrGroupTable) {
                this.EquipAttrGroupTableById.setValue(v.Id, v);
              }
            }

            this.EquipAttrTableById = new Dictionary();

            if (this.EquipAttrTable) {
              for (let v of this.EquipAttrTable) {
                this.EquipAttrTableById.setValue(v.Id, v);
              }
            }

            this.EquipSkillTableById = new Dictionary();

            if (this.EquipSkillTable) {
              for (let v of this.EquipSkillTable) {
                this.EquipSkillTableById.setValue(v.Id, v);
              }
            }

            this.EquipTableById = new Dictionary();

            if (this.EquipTable) {
              for (let v of this.EquipTable) {
                this.EquipTableById.setValue(v.Id, v);
              }
            }

            this.EquipUpgradeTableById = new Dictionary();

            if (this.EquipUpgradeTable) {
              for (let v of this.EquipUpgradeTable) {
                this.EquipUpgradeTableById.setValue(v.Id, v);
              }
            }

            this.FeatherEggDropById = new Dictionary();

            if (this.FeatherEggDrop) {
              for (let v of this.FeatherEggDrop) {
                this.FeatherEggDropById.setValue(v.Id, v);
              }
            }

            this.FincaFightTeamByLevel = new Dictionary();

            if (this.FincaFightTeam) {
              for (let v of this.FincaFightTeam) {
                this.FincaFightTeamByLevel.setValue(v.Level, v);
              }
            }

            this.FirstRechargeTableById = new Dictionary();

            if (this.FirstRechargeTable) {
              for (let v of this.FirstRechargeTable) {
                this.FirstRechargeTableById.setValue(v.Id, v);
              }
            }

            this.GachaTableById = new Dictionary();

            if (this.GachaTable) {
              for (let v of this.GachaTable) {
                this.GachaTableById.setValue(v.Id, v);
              }
            }

            this.GachaUpTableById = new Dictionary();

            if (this.GachaUpTable) {
              for (let v of this.GachaUpTable) {
                this.GachaUpTableById.setValue(v.Id, v);
              }
            }

            this.GeneLevelTableById = new Dictionary();

            if (this.GeneLevelTable) {
              for (let v of this.GeneLevelTable) {
                this.GeneLevelTableById.setValue(v.Id, v);
              }
            }

            this.GuideDialogueTableById = new Dictionary();

            if (this.GuideDialogueTable) {
              for (let v of this.GuideDialogueTable) {
                this.GuideDialogueTableById.setValue(v.Id, v);
              }
            }

            this.GuideTableById = new Dictionary();

            if (this.GuideTable) {
              for (let v of this.GuideTable) {
                this.GuideTableById.setValue(v.Id, v);
              }
            }

            this.GuildAttrTableById = new Dictionary();

            if (this.GuildAttrTable) {
              for (let v of this.GuildAttrTable) {
                this.GuildAttrTableById.setValue(v.Id, v);
              }
            }

            this.GuildBossPointTableById = new Dictionary();

            if (this.GuildBossPointTable) {
              for (let v of this.GuildBossPointTable) {
                this.GuildBossPointTableById.setValue(v.Id, v);
              }
            }

            this.GuildFlagTableById = new Dictionary();

            if (this.GuildFlagTable) {
              for (let v of this.GuildFlagTable) {
                this.GuildFlagTableById.setValue(v.Id, v);
              }
            }

            this.GuildGiftTableById = new Dictionary();

            if (this.GuildGiftTable) {
              for (let v of this.GuildGiftTable) {
                this.GuildGiftTableById.setValue(v.Id, v);
              }
            }

            this.GuildLevelTableById = new Dictionary();

            if (this.GuildLevelTable) {
              for (let v of this.GuildLevelTable) {
                this.GuildLevelTableById.setValue(v.Id, v);
              }
            }

            this.GuildOpenFunctionTableByName = new Dictionary();

            if (this.GuildOpenFunctionTable) {
              for (let v of this.GuildOpenFunctionTable) {
                this.GuildOpenFunctionTableByName.setValue(v.Name, v);
              }
            }

            this.GuildPositionTableByPosition = new Dictionary();

            if (this.GuildPositionTable) {
              for (let v of this.GuildPositionTable) {
                this.GuildPositionTableByPosition.setValue(v.Position, v);
              }
            }

            this.GuildSignInTableById = new Dictionary();

            if (this.GuildSignInTable) {
              for (let v of this.GuildSignInTable) {
                this.GuildSignInTableById.setValue(v.Id, v);
              }
            }

            this.HeadFramTableById = new Dictionary();

            if (this.HeadFramTable) {
              for (let v of this.HeadFramTable) {
                this.HeadFramTableById.setValue(v.Id, v);
              }
            }

            this.HeadTableById = new Dictionary();

            if (this.HeadTable) {
              for (let v of this.HeadTable) {
                this.HeadTableById.setValue(v.Id, v);
              }
            }

            this.HeroAlbumTableByHeroAptitude = new Dictionary();

            if (this.HeroAlbumTable) {
              for (let v of this.HeroAlbumTable) {
                this.HeroAlbumTableByHeroAptitude.setValue(v.HeroAptitude, v);
              }
            }

            this.HeroAptitudeTableByHeroAptitude = new Dictionary();

            if (this.HeroAptitudeTable) {
              for (let v of this.HeroAptitudeTable) {
                this.HeroAptitudeTableByHeroAptitude.setValue(v.HeroAptitude, v);
              }
            }

            this.HeroAttrClientTableByType = new Dictionary();

            if (this.HeroAttrClientTable) {
              for (let v of this.HeroAttrClientTable) {
                this.HeroAttrClientTableByType.setValue(v.Type, v);
              }
            }

            this.HeroAttrTableById = new Dictionary();

            if (this.HeroAttrTable) {
              for (let v of this.HeroAttrTable) {
                this.HeroAttrTableById.setValue(v.Id, v);
              }
            }

            this.HeroClassTableByHeroClass = new Dictionary();

            if (this.HeroClassTable) {
              for (let v of this.HeroClassTable) {
                this.HeroClassTableByHeroClass.setValue(v.HeroClass, v);
              }
            }

            this.HeroCollectionTableById = new Dictionary();

            if (this.HeroCollectionTable) {
              for (let v of this.HeroCollectionTable) {
                this.HeroCollectionTableById.setValue(v.Id, v);
              }
            }

            this.HeroCommonCostTableById = new Dictionary();

            if (this.HeroCommonCostTable) {
              for (let v of this.HeroCommonCostTable) {
                this.HeroCommonCostTableById.setValue(v.Id, v);
              }
            }

            this.HeroLevelResonanceTableById = new Dictionary();

            if (this.HeroLevelResonanceTable) {
              for (let v of this.HeroLevelResonanceTable) {
                this.HeroLevelResonanceTableById.setValue(v.Id, v);
              }
            }

            this.HeroLevelUpTableByLevel = new Dictionary();

            if (this.HeroLevelUpTable) {
              for (let v of this.HeroLevelUpTable) {
                this.HeroLevelUpTableByLevel.setValue(v.Level, v);
              }
            }

            this.HeroMasterTableById = new Dictionary();

            if (this.HeroMasterTable) {
              for (let v of this.HeroMasterTable) {
                this.HeroMasterTableById.setValue(v.Id, v);
              }
            }

            this.HeroPowerScoreById = new Dictionary();

            if (this.HeroPowerScore) {
              for (let v of this.HeroPowerScore) {
                this.HeroPowerScoreById.setValue(v.Id, v);
              }
            }

            this.HeroStarResonanceTableById = new Dictionary();

            if (this.HeroStarResonanceTable) {
              for (let v of this.HeroStarResonanceTable) {
                this.HeroStarResonanceTableById.setValue(v.Id, v);
              }
            }

            this.HeroStarStepTableById = new Dictionary();

            if (this.HeroStarStepTable) {
              for (let v of this.HeroStarStepTable) {
                this.HeroStarStepTableById.setValue(v.Id, v);
              }
            }

            this.HeroStarUpTableById = new Dictionary();

            if (this.HeroStarUpTable) {
              for (let v of this.HeroStarUpTable) {
                this.HeroStarUpTableById.setValue(v.Id, v);
              }
            }

            this.HeroTableById = new Dictionary();

            if (this.HeroTable) {
              for (let v of this.HeroTable) {
                this.HeroTableById.setValue(v.Id, v);
              }
            }

            this.ItemClientJumpTableByItemId = new Dictionary();

            if (this.ItemClientJumpTable) {
              for (let v of this.ItemClientJumpTable) {
                this.ItemClientJumpTableByItemId.setValue(v.ItemId, v);
              }
            }

            this.ItemQualityTableByQuality = new Dictionary();

            if (this.ItemQualityTable) {
              for (let v of this.ItemQualityTable) {
                this.ItemQualityTableByQuality.setValue(v.Quality, v);
              }
            }

            this.ItemStarClientTableById = new Dictionary();

            if (this.ItemStarClientTable) {
              for (let v of this.ItemStarClientTable) {
                this.ItemStarClientTableById.setValue(v.Id, v);
              }
            }

            this.ItemTableById = new Dictionary();

            if (this.ItemTable) {
              for (let v of this.ItemTable) {
                this.ItemTableById.setValue(v.Id, v);
              }
            }

            this.LimitTimeItemTableByItemId = new Dictionary();

            if (this.LimitTimeItemTable) {
              for (let v of this.LimitTimeItemTable) {
                this.LimitTimeItemTableByItemId.setValue(v.ItemId, v);
              }
            }

            this.MainChapterGiftTableByMallId = new Dictionary();

            if (this.MainChapterGiftTable) {
              for (let v of this.MainChapterGiftTable) {
                this.MainChapterGiftTableByMallId.setValue(v.MallId, v);
              }
            }

            this.MainChapterTableById = new Dictionary();

            if (this.MainChapterTable) {
              for (let v of this.MainChapterTable) {
                this.MainChapterTableById.setValue(v.Id, v);
              }
            }

            this.MallItemTabeById = new Dictionary();

            if (this.MallItemTabe) {
              for (let v of this.MallItemTabe) {
                this.MallItemTabeById.setValue(v.Id, v);
              }
            }

            this.MallTableByMallId = new Dictionary();

            if (this.MallTable) {
              for (let v of this.MallTable) {
                this.MallTableByMallId.setValue(v.MallId, v);
              }
            }

            this.MapBlockById = new Dictionary();

            if (this.MapBlock) {
              for (let v of this.MapBlock) {
                this.MapBlockById.setValue(v.Id, v);
              }
            }

            this.ModuleTableByModuleType = new Dictionary();

            if (this.ModuleTable) {
              for (let v of this.ModuleTable) {
                this.ModuleTableByModuleType.setValue(v.ModuleType, v);
              }
            }

            this.MonsterTableById = new Dictionary();

            if (this.MonsterTable) {
              for (let v of this.MonsterTable) {
                this.MonsterTableById.setValue(v.Id, v);
              }
            }

            this.MonthlyPassTableByType = new Dictionary();

            if (this.MonthlyPassTable) {
              for (let v of this.MonthlyPassTable) {
                this.MonthlyPassTableByType.setValue(v.Type, v);
              }
            }

            this.NewPlayerDailyGiftTableById = new Dictionary();

            if (this.NewPlayerDailyGiftTable) {
              for (let v of this.NewPlayerDailyGiftTable) {
                this.NewPlayerDailyGiftTableById.setValue(v.Id, v);
              }
            }

            this.NoticeTableById = new Dictionary();

            if (this.NoticeTable) {
              for (let v of this.NoticeTable) {
                this.NoticeTableById.setValue(v.Id, v);
              }
            }

            this.OpenFunctionTableByName = new Dictionary();

            if (this.OpenFunctionTable) {
              for (let v of this.OpenFunctionTable) {
                this.OpenFunctionTableByName.setValue(v.Name, v);
              }
            }

            this.PRBTableById = new Dictionary();

            if (this.PRBTable) {
              for (let v of this.PRBTable) {
                this.PRBTableById.setValue(v.Id, v);
              }
            }

            this.PatrolTableByPveStageId = new Dictionary();

            if (this.PatrolTable) {
              for (let v of this.PatrolTable) {
                this.PatrolTableByPveStageId.setValue(v.PveStageId, v);
              }
            }

            this.PlayerLvTableByPlayerLv = new Dictionary();

            if (this.PlayerLvTable) {
              for (let v of this.PlayerLvTable) {
                this.PlayerLvTableByPlayerLv.setValue(v.PlayerLv, v);
              }
            }

            this.PopWindowMechanismByID = new Dictionary();

            if (this.PopWindowMechanism) {
              for (let v of this.PopWindowMechanism) {
                this.PopWindowMechanismByID.setValue(v.ID, v);
              }
            }

            this.PvPStageTableByID = new Dictionary();

            if (this.PvPStageTable) {
              for (let v of this.PvPStageTable) {
                this.PvPStageTableByID.setValue(v.ID, v);
              }
            }

            this.PveAddFeatherDropTableByCount = new Dictionary();

            if (this.PveAddFeatherDropTable) {
              for (let v of this.PveAddFeatherDropTable) {
                this.PveAddFeatherDropTableByCount.setValue(v.Count, v);
              }
            }

            this.PveClearStageTableByStageId = new Dictionary();

            if (this.PveClearStageTable) {
              for (let v of this.PveClearStageTable) {
                this.PveClearStageTableByStageId.setValue(v.StageId, v);
              }
            }

            this.PveStageBuffTableById = new Dictionary();

            if (this.PveStageBuffTable) {
              for (let v of this.PveStageBuffTable) {
                this.PveStageBuffTableById.setValue(v.Id, v);
              }
            }

            this.PveStageDropTableByDropId = new Dictionary();

            if (this.PveStageDropTable) {
              for (let v of this.PveStageDropTable) {
                this.PveStageDropTableByDropId.setValue(v.DropId, v);
              }
            }

            this.PveStageTableByStageId = new Dictionary();

            if (this.PveStageTable) {
              for (let v of this.PveStageTable) {
                this.PveStageTableByStageId.setValue(v.StageId, v);
              }
            }

            this.PveSweepTableByStageId = new Dictionary();

            if (this.PveSweepTable) {
              for (let v of this.PveSweepTable) {
                this.PveSweepTableByStageId.setValue(v.StageId, v);
              }
            }

            this.PveTimeDropTableByStageId = new Dictionary();

            if (this.PveTimeDropTable) {
              for (let v of this.PveTimeDropTable) {
                this.PveTimeDropTableByStageId.setValue(v.StageId, v);
              }
            }

            this.QuestLogTableByLevel = new Dictionary();

            if (this.QuestLogTable) {
              for (let v of this.QuestLogTable) {
                this.QuestLogTableByLevel.setValue(v.Level, v);
              }
            }

            this.RandomNameTableById = new Dictionary();

            if (this.RandomNameTable) {
              for (let v of this.RandomNameTable) {
                this.RandomNameTableById.setValue(v.Id, v);
              }
            }

            this.RankCycleRewardTableByIndexId = new Dictionary();

            if (this.RankCycleRewardTable) {
              for (let v of this.RankCycleRewardTable) {
                this.RankCycleRewardTableByIndexId.setValue(v.IndexId, v);
              }
            }

            this.RankRewardTableById = new Dictionary();

            if (this.RankRewardTable) {
              for (let v of this.RankRewardTable) {
                this.RankRewardTableById.setValue(v.Id, v);
              }
            }

            this.RechargeTableById = new Dictionary();

            if (this.RechargeTable) {
              for (let v of this.RechargeTable) {
                this.RechargeTableById.setValue(v.Id, v);
              }
            }

            this.RecommendTeamTableById = new Dictionary();

            if (this.RecommendTeamTable) {
              for (let v of this.RecommendTeamTable) {
                this.RecommendTeamTableById.setValue(v.Id, v);
              }
            }

            this.RobotTableById = new Dictionary();

            if (this.RobotTable) {
              for (let v of this.RobotTable) {
                this.RobotTableById.setValue(v.Id, v);
              }
            }

            this.RogueGroupTableById = new Dictionary();

            if (this.RogueGroupTable) {
              for (let v of this.RogueGroupTable) {
                this.RogueGroupTableById.setValue(v.Id, v);
              }
            }

            this.RogueTableById = new Dictionary();

            if (this.RogueTable) {
              for (let v of this.RogueTable) {
                this.RogueTableById.setValue(v.Id, v);
              }
            }

            this.ScrollPaintingTableById = new Dictionary();

            if (this.ScrollPaintingTable) {
              for (let v of this.ScrollPaintingTable) {
                this.ScrollPaintingTableById.setValue(v.Id, v);
              }
            }

            this.ServerlistTableByID = new Dictionary();

            if (this.ServerlistTable) {
              for (let v of this.ServerlistTable) {
                this.ServerlistTableByID.setValue(v.ID, v);
              }
            }

            this.SignInGiftTableByDay = new Dictionary();

            if (this.SignInGiftTable) {
              for (let v of this.SignInGiftTable) {
                this.SignInGiftTableByDay.setValue(v.Day, v);
              }
            }

            this.SkillGroupTableById = new Dictionary();

            if (this.SkillGroupTable) {
              for (let v of this.SkillGroupTable) {
                this.SkillGroupTableById.setValue(v.Id, v);
              }
            }

            this.SkillPowerTableById = new Dictionary();

            if (this.SkillPowerTable) {
              for (let v of this.SkillPowerTable) {
                this.SkillPowerTableById.setValue(v.Id, v);
              }
            }

            this.SkillSummonTableBySummonId = new Dictionary();

            if (this.SkillSummonTable) {
              for (let v of this.SkillSummonTable) {
                this.SkillSummonTableBySummonId.setValue(v.SummonId, v);
              }
            }

            this.SkillTableById = new Dictionary();

            if (this.SkillTable) {
              for (let v of this.SkillTable) {
                this.SkillTableById.setValue(v.Id, v);
              }
            }

            this.SoundTableById = new Dictionary();

            if (this.SoundTable) {
              for (let v of this.SoundTable) {
                this.SoundTableById.setValue(v.Id, v);
              }
            }

            this.TaskTableById = new Dictionary();

            if (this.TaskTable) {
              for (let v of this.TaskTable) {
                this.TaskTableById.setValue(v.Id, v);
              }
            }

            this.TipsTableById = new Dictionary();

            if (this.TipsTable) {
              for (let v of this.TipsTable) {
                this.TipsTableById.setValue(v.Id, v);
              }
            }

            this.TriggerTableById = new Dictionary();

            if (this.TriggerTable) {
              for (let v of this.TriggerTable) {
                this.TriggerTableById.setValue(v.Id, v);
              }
            }

            this.VipBonusTableByIndexId = new Dictionary();

            if (this.VipBonusTable) {
              for (let v of this.VipBonusTable) {
                this.VipBonusTableByIndexId.setValue(v.IndexId, v);
              }
            }

            this.VipTableByVipLv = new Dictionary();

            if (this.VipTable) {
              for (let v of this.VipTable) {
                this.VipTableByVipLv.setValue(v.VipLv, v);
              }
            }

            this.VirtualItemByVirtualItemId = new Dictionary();

            if (this.VirtualItem) {
              for (let v of this.VirtualItem) {
                this.VirtualItemByVirtualItemId.setValue(v.VirtualItemId, v);
              }
            }

            this.VoidStageTableById = new Dictionary();

            if (this.VoidStageTable) {
              for (let v of this.VoidStageTable) {
                this.VoidStageTableById.setValue(v.Id, v);
              }
            }

            this.WeeklyTaskBoxTableById = new Dictionary();

            if (this.WeeklyTaskBoxTable) {
              for (let v of this.WeeklyTaskBoxTable) {
                this.WeeklyTaskBoxTableById.setValue(v.Id, v);
              }
            }

            this.WorldBossDamTableById = new Dictionary();

            if (this.WorldBossDamTable) {
              for (let v of this.WorldBossDamTable) {
                this.WorldBossDamTableById.setValue(v.Id, v);
              }
            }

            this.WorldBossRewardTableById = new Dictionary();

            if (this.WorldBossRewardTable) {
              for (let v of this.WorldBossRewardTable) {
                this.WorldBossRewardTableById.setValue(v.Id, v);
              }
            }
          }

        }

        _tab.Table = Table; // Used internally by dictionary

        class Dictionary {
          /**
           * Creates an empty dictionary.
           * @class <p>Dictionaries map keys to values; each key can map to at most one value.
           * This implementation accepts any kind of objects as keys.</p>
           *
           * <p>If the keys are custom objects a function which converts keys to unique
           * strings must be provided. Example:</p>
           * <pre>
           * function petToString(pet) {
           *  return pet.name;
           * }
           * </pre>
           * @constructor
           * @param {function(Object):string=} toStrFunction optional function used
           * to convert keys to strings. If the keys aren't strings or if toString()
           * is not appropriate, a custom function which receives a key and returns a
           * unique string must be provided.
           */
          constructor(toStrFunction) {
            /**
             * Object holding the key-value pairs.
             * @type {Object}
             * @private
             */
            this.table = void 0;
            //: [key: K] will not work since indices can only by strings in javascript and typescript enforces this.

            /**
             * Number of elements in the list.
             * @type {number}
             * @private
             */
            this.nElements = void 0;

            /**
             * Function used to convert keys to strings.
             * @type {function(Object):string}
             * @protected
             */
            this.toStr = void 0;
            this.table = {};
            this.nElements = 0;
            this.toStr = toStrFunction || defaultToString;
          }
          /**
           * Returns the value to which this dictionary maps the specified key.
           * Returns undefined if this dictionary contains no mapping for this key.
           * @param {Object} key key whose associated value is to be returned.
           * @return {*} the value to which this dictionary maps the specified key or
           * undefined if the map contains no mapping for this key.
           */


          getValue(key) {
            const pair = this.table['$' + this.toStr(key)];

            if (isUndefined(pair)) {
              return undefined;
            }

            return pair.value;
          }
          /**
           * Associates the specified value with the specified key in this dictionary.
           * If the dictionary previously contained a mapping for this key, the old
           * value is replaced by the specified value.
           * @param {Object} key key with which the specified value is to be
           * associated.
           * @param {Object} value value to be associated with the specified key.
           * @return {*} previous value associated with the specified key, or undefined if
           * there was no mapping for the key or if the key/value are undefined.
           */


          setValue(key, value) {
            if (isUndefined(key) || isUndefined(value)) {
              return undefined;
            }

            let ret;
            const k = '$' + this.toStr(key);
            const previousElement = this.table[k];

            if (isUndefined(previousElement)) {
              this.nElements++;
              ret = undefined;
            } else {
              ret = previousElement.value;
            }

            this.table[k] = {
              key: key,
              value: value
            };
            return ret;
          }
          /**
           * Removes the mapping for this key from this dictionary if it is present.
           * @param {Object} key key whose mapping is to be removed from the
           * dictionary.
           * @return {*} previous value associated with specified key, or undefined if
           * there was no mapping for key.
           */


          remove(key) {
            const k = '$' + this.toStr(key);
            const previousElement = this.table[k];

            if (!isUndefined(previousElement)) {
              delete this.table[k];
              this.nElements--;
              return previousElement.value;
            }

            return undefined;
          }
          /**
           * Returns an array containing all of the keys in this dictionary.
           * @return {Array} an array containing all of the keys in this dictionary.
           */


          keys() {
            const array = [];

            for (const name in this.table) {
              if (has(this.table, name)) {
                const pair = this.table[name];
                array.push(pair.key);
              }
            }

            return array;
          }
          /**
           * Returns an array containing all of the values in this dictionary.
           * @return {Array} an array containing all of the values in this dictionary.
           */


          values() {
            const array = [];

            for (const name in this.table) {
              if (has(this.table, name)) {
                const pair = this.table[name];
                array.push(pair.value);
              }
            }

            return array;
          }
          /**
           * Executes the provided function once for each key-value pair
           * present in this dictionary.
           * @param {function(Object,Object):*} callback function to execute, it is
           * invoked with two arguments: key and value. To break the iteration you can
           * optionally return false.
           */


          forEach(callback) {
            for (const name in this.table) {
              if (has(this.table, name)) {
                const pair = this.table[name];
                const ret = callback(pair.key, pair.value);

                if (ret === false) {
                  return;
                }
              }
            }
          }
          /**
           * Returns true if this dictionary contains a mapping for the specified key.
           * @param {Object} key key whose presence in this dictionary is to be
           * tested.
           * @return {boolean} true if this dictionary contains a mapping for the
           * specified key.
           */


          containsKey(key) {
            return !isUndefined(this.getValue(key));
          }
          /**
           * Removes all mappings from this dictionary.
           * @this {collections.Dictionary}
           */


          clear() {
            this.table = {};
            this.nElements = 0;
          }
          /**
           * Returns the number of keys in this dictionary.
           * @return {number} the number of key-value mappings in this dictionary.
           */


          size() {
            return this.nElements;
          }
          /**
           * Returns true if this dictionary contains no mappings.
           * @return {boolean} true if this dictionary contains no mappings.
           */


          isEmpty() {
            return this.nElements <= 0;
          }

          toString() {
            let toret = '{';
            this.forEach((k, v) => {
              toret += "\n\t" + k.toString() + " : " + v.toString();
            });
            return toret + '\n}';
          }

        }

        _tab.Dictionary = Dictionary;

        // End of dictionary
        function defaultToString(item) {
          if (item === null) {
            return 'COLLECTION_NULL';
          } else if (isUndefined(item)) {
            return 'COLLECTION_UNDEFINED';
          } else if (isString(item)) {
            return '$s' + item;
          } else {
            return '$o' + item.toString();
          }
        }

        const _hasOwnProperty = Object.prototype.hasOwnProperty;

        const has = function (obj, prop) {
          return _hasOwnProperty.call(obj, prop);
        };

        function isUndefined(obj) {
          return typeof obj === 'undefined';
        }

        function isString(obj) {
          return Object.prototype.toString.call(obj) === '[object String]';
        } //Polyfill


        if (typeof Object.assign !== 'function') {
          // Must be writable: true, enumerable: false, configurable: true
          Object.defineProperty(Object, "assign", {
            value: function assign(target, varArgs) {
              // .length of function is 2
              'use strict';

              if (target === null || target === undefined) {
                throw new TypeError('Cannot convert undefined or null to object');
              }

              var to = Object(target);

              for (var index = 1; index < arguments.length; index++) {
                var nextSource = arguments[index];

                if (nextSource !== null && nextSource !== undefined) {
                  for (var nextKey in nextSource) {
                    // Avoid bugs when hasOwnProperty is shadowed
                    if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
                      to[nextKey] = nextSource[nextKey];
                    }
                  }
                }
              }

              return to;
            },
            writable: true,
            configurable: true
          });
        }
      })(tab || _export("tab", tab = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e0b4149e7259c18dd0e5efafe006b023d237f7c.js.map