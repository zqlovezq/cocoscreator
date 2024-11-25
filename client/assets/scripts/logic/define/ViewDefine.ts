import { Node, Size, _decorator, view } from "cc";
import { tab } from "../../Table/table_gen";

const { ccclass, property } = _decorator;


/** 界面尺寸定义 */
export namespace ViewSize {
  export function init() {
    hirdSize.width = view.getVisibleSize().width * 0.8
    halfSize.width = view.getVisibleSize().width * 0.5
    console.log("屏幕尺寸",halfSize.width,halfSize.height,view)
  }
  /** 设计尺寸 */
  export const frameSize: Size = new Size(1280, 720)
  /** 三分之一尺寸 */
  export const hirdSize: Size = new Size(frameSize.width * 0.8, frameSize.height * 0.8)
  /** 半屏 */
  export const halfSize: Size = new Size(frameSize.width * 0.5, frameSize.height * 0.5)
  export const halfFrameSize:Size = new Size(frameSize.width * 0.5, frameSize.height * 0.5)
}



/**
 * 界面传入参数
 * viewName 推荐使用枚举
 */
export interface ViewData {
  /** 界面名称 推荐使用枚举 */
  viewName: string | ViewName,
  data?: any,
  parent?: Node,
  zIndex?: number
}

/** 游戏内所有通过UIMgr.ins.show打开的界面 
 * 和ModuleTable表ViewName保持一致
 */
export enum ViewName {
  LoginView = "LoginView",
  HomeMainView = "HomeMainView",
  ConfirmPop = "ConfirmPop",
  DynamicAtlas = "DynamicAtlas",
  Reconnect = "Reconnect",
  AzheGmPop = "AzheGmPop",
  FightUIView = "FightUIView",
  BagPop = "BagPop",
  CongratulationPop = "CongratulationPop",
  HeroBagView = "HeroBagView",
  HeroDetailView = "HeroDetailView",
  HeroMaterialPop = "HeroMaterialPop",
  HeroRecommendPop = "HeroRecommendPop",
  HeroAutoAscendPop = "HeroAutoAscendPop",
  HeroResolvePop = "HeroResolvePop",
  HeroResetPop = "HeroResetPop",
  HeroSkillPop = "HeroSkillPop",
  HeroResonancePop = "HeroResonancePop",
  HeroStarSpecialPop = "HeroStarSpecialPop",
  BattleMainRewardPop = "BattleMainRewardPop",
  HeroAttrPop = "HeroAttrPop",
  PaintingAttributePop = "PaintingAttributePop",
  PaintingLvupPop = "PaintingLvupPop",
  PaintingView = "PaintingView",
  RecruitGetPop = "RecruitGetPop",
  ItemInfoPop = "ItemInfoPop",
  RecruitProbabilityPop = "RecruitProbabilityPop",
  RecruitProProbabilityPop = "RecruitProProbabilityPop",
  RecruitFriendProbabilityPop = "RecruitFriendProbabilityPop",
  RecruitMustProbabilityPop = "RecruitMustProbabilityPop",
  RareBookProbabilityPop = "RareBookProbabilityPop",
  RareBookSrProbabilityPop = "RareBookSrProbabilityPop",
  RecruitGuaranteePop = "RecruitGuaranteePop",
  RareBookGuaranteedPop = "RareBookGuaranteedPop",
  NewHeroPop = "NewHeroPop",
  RareBookGetPop = "RareBookGetPop",
  Loading = "Loading",
  EquipmentDetailPop = "EquipmentDetailPop",
  EquipmentView = "EquipmentView",
  EquipResolvePop = "EquipResolvePop",
  EquipMasterPop = "EquipMasterPop",
  JadeDetailPop = "JadeDetailPop",
  JadeSkillPreviewPop = "JadeSkillPreviewPop",
  JadeSelectPop = "JadeSelectPop",
  JadeRecastPop = "JadeRecastPop",
  CommonBlackTipsPop = "CommonBlackTipsPop",
  JadeSkillDetailPop = "JadeSkillDetailPop",
  RareBookDetailView = "RareBookDetailView",
  RareBookGroupPop = "RareBookGroupPop",
  RareBookLevelPreviewPop = "RareBookLevelPreviewPop",
  RareBookRewardPreviewPop = "RareBookRewardPreviewPop",
  CheckRoleInfoPop = "CheckRoleInfoPop",
  CheckRoleInfoReportPop = "CheckRoleInfoReportPop",
  RareBookExchangePop = "RareBookExchangePop",
  RareBookEquipPop = "RareBookEquipPop",
  WeaponPop = "WeaponPop",
  RareBookInfoItemPop = "RareBookInfoItemPop",
  MailPop = "MailPop",
  CommonBoxTipsPop = "CommonBoxTipsPop",
  PlayerLvUpPop = "PlayerLvUpPop",
  ForceUpPop = "ForceUpPop",
  RoleInfoPop = "RoleInfoPop",
  RoleInfoChangeNamePop = "RoleInfoChangeNamePop",
  PrestigePop = "PrestigePop",
  TaskView = "TaskView",
  StarUpPop = "StarUpPop",
  FightDamageRankPop = "FightDamageRankPop",
  CheckRoleInfoHeroPop = "CheckRoleInfoHeroPop",
  ResourceBuyPop = "ResourceBuyPop",
  EnergyAccumulatePop = "EnergyAccumulatePop",
  RoleInfoRedemptionCodePop = "RoleInfoRedemptionCodePop",
  ChatPop = "ChatPop",
  InstanceZonesView = "InstanceZonesView",
  InstanceRewardPop = "InstanceRewardPop",
  WarningPop = "WarningPop",
  NewPlayerSignInView = "NewPlayerSignInView",
  SignInView = "SignInView",
  HeroRoadView = "HeroRoadView",
  CommonHelpPop = "CommonHelpPop",
  FightWinPop = "FightWinPop",
  FightLosePop = "FightLosePop",
  MallMainView = "MallMainView",
  DiamondBuyPop = "DiamondBuyPop",
  MonthlyCardView = "MonthlyCardView",
  VipPrivilegeView = "VipPrivilegeView",
  FightWorldBossResultPop = "FightWorldBossResultPop",
  CycleGiftView = "CycleGiftView",
  ChapterGiftView = "ChapterGiftView",
  ActivityMainView = "ActivityMainView",
  NewHandGiftView = "NewHandGiftView",
  WelfareActivityMainView = "WelfareActivityMainView",
  TopWarRankRewardPop = "TopWarRankRewardPop",
  EveryDayChallengeHelpPop = "EveryDayChallengeHelpPop",
  ClimbingTowerTowerEveryDayRewardPop = "ClimbingTowerTowerEveryDayRewardPop",
  ClimbingTowerRewardPop = 'ClimbingTowerRewardPop',
  FriendPop = "FriendPop",
  GameplayView = "GameplayView",
  FengyunRankingView = "FengyunRankingView",
  EquipFettersPop = "EquipFettersPop",
  FunctionUnlockPop = "FunctionUnlockPop",
  ClimbingTowerMainView = "ClimbingTowerMainView",
  EveryDayChallengeView = "EveryDayChallengeView",
  TopWarView = "TopWarView",
  SdkTestPop = "SdkTestPop",
  EveryDayBuffPop = "EveryDayBuffPop",
  RoleInfoDecorationsPop = "RoleInfoDecorationsPop",
  AssociationView = "AssociationView",
  AssociationMainView = "AssociationMainView",
  AssociationApplyView = "AssociationApplyView",
  AssociationChangeFlagPop = "AssociationChangeFlagPop",
  AssociationApplyListPop = "AssociationApplyListPop",
  AssociationGiftPop = "AssociationGiftPop",
  AssociationTaskPop = "AssociationTaskPop",
  AssociationSkillPop = "AssociationSkillPop",
  AssociationLogPop = "AssociationLogPop",
  AssociationMainPop = 'AssociationMainPop',
  AssociationCreatePop = "AssociationCreatePop",
  AssociationChangeInfoPop = "AssociationChangeInfoPop",
  AssociationChangeNoticePop = "AssociationChangeNoticePop",
  AssociationDonatePop = "AssociationDonatePop",
  AssociationSkillResetPop = "AssociationSkillResetPop",
  AssociationAttrPop = "AssociationAttrPop",
  AssociationBossView = "AssociationBossView",
  AssociationRankPop = "AssociationRankPop",
  AssociationRankRewardPop = "AssociationRankRewardPop",
  CommunityPop = "CommunityPop",
  FightAssociationBossResultPop = "FightAssociationBossResultPop",
  NewPlayerSignInPop = "NewPlayerSignInPop",
  SignInGiftPop = "SignInGiftPop",
  PatrolPop = "PatrolPop",
  CombineActivityMainView = "CombineActivityMainView",
  RecruitLimitView = "RecruitLimitView",
  BannerPop = "BannerPop",
  RecruitLimitProbabilityPop1000 = "RecruitLimitProbabilityPop1000",
  FincaFightLogPop = "FincaFightLogPop",
  FincaFightStageView = "FincaFightStageView",
  FincaFightRankRewardPop = "FincaFightRankRewardPop",
  FincaFightView = "FincaFightView",
  ItemBuyPop = "ItemBuyPop",
  BattleMainRecordPop="BattleMainRecordPop",
  BattleMainView = "BattleMainView",
  ItemGetWayPop = "ItemGetWayPop",
}

