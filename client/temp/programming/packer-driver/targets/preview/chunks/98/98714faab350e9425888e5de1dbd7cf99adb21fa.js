System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Size, _decorator, view, _crd, ccclass, property, ViewSize, ViewName;

  _export("ViewSize", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Size = _cc.Size;
      _decorator = _cc._decorator;
      view = _cc.view;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a9104AAQPVG0IntN7jOH+Ry", "ViewDefine", undefined);

      __checkObsolete__(['Node', 'Size', '_decorator', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 界面尺寸定义 */

      (function (_ViewSize) {
        function init() {
          hirdSize.width = view.getVisibleSize().width * 0.8;
          halfSize.width = view.getVisibleSize().width * 0.5;
          console.log("屏幕尺寸", halfSize.width, halfSize.height, view);
        }

        _ViewSize.init = init;
        var frameSize = _ViewSize.frameSize = new Size(1280, 720);
        var hirdSize = _ViewSize.hirdSize = new Size(frameSize.width * 0.8, frameSize.height * 0.8);
        var halfSize = _ViewSize.halfSize = new Size(frameSize.width * 0.5, frameSize.height * 0.5);
        var halfFrameSize = _ViewSize.halfFrameSize = new Size(frameSize.width * 0.5, frameSize.height * 0.5);
      })(ViewSize || _export("ViewSize", ViewSize = {}));
      /**
       * 界面传入参数
       * viewName 推荐使用枚举
       */


      /** 游戏内所有通过UIMgr.ins.show打开的界面 
       * 和ModuleTable表ViewName保持一致
       */
      _export("ViewName", ViewName = /*#__PURE__*/function (ViewName) {
        ViewName["LoginView"] = "LoginView";
        ViewName["HomeMainView"] = "HomeMainView";
        ViewName["ConfirmPop"] = "ConfirmPop";
        ViewName["DynamicAtlas"] = "DynamicAtlas";
        ViewName["Reconnect"] = "Reconnect";
        ViewName["AzheGmPop"] = "AzheGmPop";
        ViewName["FightUIView"] = "FightUIView";
        ViewName["BagPop"] = "BagPop";
        ViewName["CongratulationPop"] = "CongratulationPop";
        ViewName["HeroBagView"] = "HeroBagView";
        ViewName["HeroDetailView"] = "HeroDetailView";
        ViewName["HeroMaterialPop"] = "HeroMaterialPop";
        ViewName["HeroRecommendPop"] = "HeroRecommendPop";
        ViewName["HeroAutoAscendPop"] = "HeroAutoAscendPop";
        ViewName["HeroResolvePop"] = "HeroResolvePop";
        ViewName["HeroResetPop"] = "HeroResetPop";
        ViewName["HeroSkillPop"] = "HeroSkillPop";
        ViewName["HeroResonancePop"] = "HeroResonancePop";
        ViewName["HeroStarSpecialPop"] = "HeroStarSpecialPop";
        ViewName["BattleMainRewardPop"] = "BattleMainRewardPop";
        ViewName["HeroAttrPop"] = "HeroAttrPop";
        ViewName["PaintingAttributePop"] = "PaintingAttributePop";
        ViewName["PaintingLvupPop"] = "PaintingLvupPop";
        ViewName["PaintingView"] = "PaintingView";
        ViewName["RecruitGetPop"] = "RecruitGetPop";
        ViewName["ItemInfoPop"] = "ItemInfoPop";
        ViewName["RecruitProbabilityPop"] = "RecruitProbabilityPop";
        ViewName["RecruitProProbabilityPop"] = "RecruitProProbabilityPop";
        ViewName["RecruitFriendProbabilityPop"] = "RecruitFriendProbabilityPop";
        ViewName["RecruitMustProbabilityPop"] = "RecruitMustProbabilityPop";
        ViewName["RareBookProbabilityPop"] = "RareBookProbabilityPop";
        ViewName["RareBookSrProbabilityPop"] = "RareBookSrProbabilityPop";
        ViewName["RecruitGuaranteePop"] = "RecruitGuaranteePop";
        ViewName["RareBookGuaranteedPop"] = "RareBookGuaranteedPop";
        ViewName["NewHeroPop"] = "NewHeroPop";
        ViewName["RareBookGetPop"] = "RareBookGetPop";
        ViewName["Loading"] = "Loading";
        ViewName["EquipmentDetailPop"] = "EquipmentDetailPop";
        ViewName["EquipmentView"] = "EquipmentView";
        ViewName["EquipResolvePop"] = "EquipResolvePop";
        ViewName["EquipMasterPop"] = "EquipMasterPop";
        ViewName["JadeDetailPop"] = "JadeDetailPop";
        ViewName["JadeSkillPreviewPop"] = "JadeSkillPreviewPop";
        ViewName["JadeSelectPop"] = "JadeSelectPop";
        ViewName["JadeRecastPop"] = "JadeRecastPop";
        ViewName["CommonBlackTipsPop"] = "CommonBlackTipsPop";
        ViewName["JadeSkillDetailPop"] = "JadeSkillDetailPop";
        ViewName["RareBookDetailView"] = "RareBookDetailView";
        ViewName["RareBookGroupPop"] = "RareBookGroupPop";
        ViewName["RareBookLevelPreviewPop"] = "RareBookLevelPreviewPop";
        ViewName["RareBookRewardPreviewPop"] = "RareBookRewardPreviewPop";
        ViewName["CheckRoleInfoPop"] = "CheckRoleInfoPop";
        ViewName["CheckRoleInfoReportPop"] = "CheckRoleInfoReportPop";
        ViewName["RareBookExchangePop"] = "RareBookExchangePop";
        ViewName["RareBookEquipPop"] = "RareBookEquipPop";
        ViewName["WeaponPop"] = "WeaponPop";
        ViewName["RareBookInfoItemPop"] = "RareBookInfoItemPop";
        ViewName["MailPop"] = "MailPop";
        ViewName["CommonBoxTipsPop"] = "CommonBoxTipsPop";
        ViewName["PlayerLvUpPop"] = "PlayerLvUpPop";
        ViewName["ForceUpPop"] = "ForceUpPop";
        ViewName["RoleInfoPop"] = "RoleInfoPop";
        ViewName["RoleInfoChangeNamePop"] = "RoleInfoChangeNamePop";
        ViewName["PrestigePop"] = "PrestigePop";
        ViewName["TaskView"] = "TaskView";
        ViewName["StarUpPop"] = "StarUpPop";
        ViewName["FightDamageRankPop"] = "FightDamageRankPop";
        ViewName["CheckRoleInfoHeroPop"] = "CheckRoleInfoHeroPop";
        ViewName["ResourceBuyPop"] = "ResourceBuyPop";
        ViewName["EnergyAccumulatePop"] = "EnergyAccumulatePop";
        ViewName["RoleInfoRedemptionCodePop"] = "RoleInfoRedemptionCodePop";
        ViewName["ChatPop"] = "ChatPop";
        ViewName["InstanceZonesView"] = "InstanceZonesView";
        ViewName["InstanceRewardPop"] = "InstanceRewardPop";
        ViewName["WarningPop"] = "WarningPop";
        ViewName["NewPlayerSignInView"] = "NewPlayerSignInView";
        ViewName["SignInView"] = "SignInView";
        ViewName["HeroRoadView"] = "HeroRoadView";
        ViewName["CommonHelpPop"] = "CommonHelpPop";
        ViewName["FightWinPop"] = "FightWinPop";
        ViewName["FightLosePop"] = "FightLosePop";
        ViewName["MallMainView"] = "MallMainView";
        ViewName["DiamondBuyPop"] = "DiamondBuyPop";
        ViewName["MonthlyCardView"] = "MonthlyCardView";
        ViewName["VipPrivilegeView"] = "VipPrivilegeView";
        ViewName["FightWorldBossResultPop"] = "FightWorldBossResultPop";
        ViewName["CycleGiftView"] = "CycleGiftView";
        ViewName["ChapterGiftView"] = "ChapterGiftView";
        ViewName["ActivityMainView"] = "ActivityMainView";
        ViewName["NewHandGiftView"] = "NewHandGiftView";
        ViewName["WelfareActivityMainView"] = "WelfareActivityMainView";
        ViewName["TopWarRankRewardPop"] = "TopWarRankRewardPop";
        ViewName["EveryDayChallengeHelpPop"] = "EveryDayChallengeHelpPop";
        ViewName["ClimbingTowerTowerEveryDayRewardPop"] = "ClimbingTowerTowerEveryDayRewardPop";
        ViewName["ClimbingTowerRewardPop"] = "ClimbingTowerRewardPop";
        ViewName["FriendPop"] = "FriendPop";
        ViewName["GameplayView"] = "GameplayView";
        ViewName["FengyunRankingView"] = "FengyunRankingView";
        ViewName["EquipFettersPop"] = "EquipFettersPop";
        ViewName["FunctionUnlockPop"] = "FunctionUnlockPop";
        ViewName["ClimbingTowerMainView"] = "ClimbingTowerMainView";
        ViewName["EveryDayChallengeView"] = "EveryDayChallengeView";
        ViewName["TopWarView"] = "TopWarView";
        ViewName["SdkTestPop"] = "SdkTestPop";
        ViewName["EveryDayBuffPop"] = "EveryDayBuffPop";
        ViewName["RoleInfoDecorationsPop"] = "RoleInfoDecorationsPop";
        ViewName["AssociationView"] = "AssociationView";
        ViewName["AssociationMainView"] = "AssociationMainView";
        ViewName["AssociationApplyView"] = "AssociationApplyView";
        ViewName["AssociationChangeFlagPop"] = "AssociationChangeFlagPop";
        ViewName["AssociationApplyListPop"] = "AssociationApplyListPop";
        ViewName["AssociationGiftPop"] = "AssociationGiftPop";
        ViewName["AssociationTaskPop"] = "AssociationTaskPop";
        ViewName["AssociationSkillPop"] = "AssociationSkillPop";
        ViewName["AssociationLogPop"] = "AssociationLogPop";
        ViewName["AssociationMainPop"] = "AssociationMainPop";
        ViewName["AssociationCreatePop"] = "AssociationCreatePop";
        ViewName["AssociationChangeInfoPop"] = "AssociationChangeInfoPop";
        ViewName["AssociationChangeNoticePop"] = "AssociationChangeNoticePop";
        ViewName["AssociationDonatePop"] = "AssociationDonatePop";
        ViewName["AssociationSkillResetPop"] = "AssociationSkillResetPop";
        ViewName["AssociationAttrPop"] = "AssociationAttrPop";
        ViewName["AssociationBossView"] = "AssociationBossView";
        ViewName["AssociationRankPop"] = "AssociationRankPop";
        ViewName["AssociationRankRewardPop"] = "AssociationRankRewardPop";
        ViewName["CommunityPop"] = "CommunityPop";
        ViewName["FightAssociationBossResultPop"] = "FightAssociationBossResultPop";
        ViewName["NewPlayerSignInPop"] = "NewPlayerSignInPop";
        ViewName["SignInGiftPop"] = "SignInGiftPop";
        ViewName["PatrolPop"] = "PatrolPop";
        ViewName["CombineActivityMainView"] = "CombineActivityMainView";
        ViewName["RecruitLimitView"] = "RecruitLimitView";
        ViewName["BannerPop"] = "BannerPop";
        ViewName["RecruitLimitProbabilityPop1000"] = "RecruitLimitProbabilityPop1000";
        ViewName["FincaFightLogPop"] = "FincaFightLogPop";
        ViewName["FincaFightStageView"] = "FincaFightStageView";
        ViewName["FincaFightRankRewardPop"] = "FincaFightRankRewardPop";
        ViewName["FincaFightView"] = "FincaFightView";
        ViewName["ItemBuyPop"] = "ItemBuyPop";
        ViewName["BattleMainRecordPop"] = "BattleMainRecordPop";
        ViewName["BattleMainView"] = "BattleMainView";
        ViewName["ItemGetWayPop"] = "ItemGetWayPop";
        return ViewName;
      }({}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=98714faab350e9425888e5de1dbd7cf99adb21fa.js.map