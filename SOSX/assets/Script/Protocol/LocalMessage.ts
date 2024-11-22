/**
 *  客户端消息
 */

export enum LOCAL_MESSAGE {
    LocalMsg_Begin = 0,
    LocalMsg_UpdateItemData,
    LocalMsg_UplvCardSuccess,
    LocalMsg_UpdateGold,
    LocalMsg_updateDiamond,
    LocalMsg_UpdateCardStrengthLv,
    LocalMsg_UpdateCardSynthesisLv,
    LocalMsg_ResetCardState,
    LocalMsg_JumpShop,
    LocalMsg_AutoScrollAssignPos,
    LocalMsg_PlaySpecialGoldNodeEffect,
    LocalMsg_ResumeDeckLayerDefault,
    LocalMsg_NewDay,
    LocalMsg_InitDeckLayer,
    LocalMsg_UpdateRoleExpAndLevel,
    LocalMsg_TaskFlyScore,
    LocalMsg_TaskNodeToHide,
    LocalMsg_TaskGiftFlyScore,
    LocalMsg_ShowTaskTips,
    LocalMsg_RereshMainPageSeasonRewardState,
    LocalMsg_HistoryMaxlvChange,
    LocalMsg_TaskBoxGetAward,
    LocalMsg_PlayCardIncreaseAnim,
    LocalMsg_HideCancelMachFightBtn,
    LocalMsg_RereshSeasonInfo,
    SceneLoaded,
    PopLayer,
    DestroyPopLayer,
    OpenSeasonPageLayer,
    CheckGuide,
    HideDialogue,
    DialogueStart,
    AddEnemy,
    RemoveEnemy,
    RebornEnemy,
    CompoundEnemy,
    HideFrameTips,
    HideExchangeTips,
    FightEnd,
    RecvFightEnd,
    RecvBountyFightEnd,
    ConstructionPhase,
    UpdateAddMana,
    NotifyExchangeTower,
    PopCardInfoDetail,
    ClosedCardInfoDetail,
    BossAppear,
    BossLowHP,
    CancelRunningGuide,
    LocalMsg_NotifyGuideWalkPath,
    LocalMsg_NotifyGuideTransferArrow,
    LocalMsg_NotifyAutoBuildTower,
    LocalMsg_RoleGradeChanged,
    LocalMsg_CheckUnlockAccelerateBag,
    CheckRankBoxUnlocked,
    RankBoxUnlocked,
    RankBoxOpen,
    LocalMsg_ReceiveSeasonReward,
    CheckMainScenePage,
    MainScenePage,
    CheckCardLvUp,
    CanCardLvUp,
    RefreshBattleLayerGuide,
    TakeGuideReward,
    EnableFightTips,
    LocalMsg_TalentRefreshCellList,
    LocalMsg_TalentRefreshLeftPoint,
    LocalMsg_EnableTalentScroll,
    LocalMsg_RefreshDevilInfo,
    LocalMsg_UpdateRedColorBufferFrame,
    LocalMsg_UpdateBlueColorBufferFrame,
    OnPackageInfo,
    LocalMsg_TalentReddot,
    LocalMsg_ChangeNameSuccess,
    EnablePageViewTouch,
    GuideEnablePageViewEvent,
    LocalMsg_UpdateSelectAllianceIconIdx,
    LocalMsg_UpdateAllianceBaseInfo,
    LocalMsg_NotifyExitAllianceInfo,
    LocalMsg_UpdateAllianceBtnReddot,
    LocalMsg_NotifyOpenAlliance,
    LocalMsg_UpdateMainsceneBossBox,
    LocalMsg_BossboxOpenNow,
    LocalMsg_BossboxPreviewtips,
    LocalMsg_NotifyCloseAllianceDetailPage,
    LocalMsg_UpdateMainPageAllianceName,
    LocalMsg_NotifyClickSupportHelpBtn,
    LocalMsg_UpdateAllianceSupportReddot,
    LocalMsg_BossboxAwardFlyGold,
    LocalMsg_NotifyCloseSupportSelectCard,
    LocalMsg_NotifyDealSupportPushMsg,
    LocalMsg_DisposeAfterRequestJoinAlliance,
    LocalMsg_UpdateSupportScore,
    LocalMsg_NotifyCloseSupportHelpFrame,
    LocalMsg_ShrinkSupportAreaEnd,
    LocalMsg_ChatModelShrinkSupportInfoEnd,
    LocalMsg_UpdateSupportInfo,
    LocalMsg_NewCard,
    LocalMsg_NotifyOpenEmotionSelector,
    LocalMsg_NotifyCloseEmotionSelector,
    LocalMsg_ChallengeRefreshDevilInfo,
    LocalMsg_ChallengeShowFighLayer,
    LocalMsg_NotifyUpdateAllianceViewList,
    LocalMsg_NotifyUpdateChatViewList,
    LocalMsg_NotifyUpdatePrivateChatPlayerList,
    LocalMsg_NotifySelectPrivateObjName,
    LocalMsg_NewPrivateMsg,
    LocalMsg_UpdatePrivateRedTip,
    LocalMsg_NotifyNewFightInvitation,
    LocalMsg_ShowChallengeToFight,
    LocalMsg_ChallengeFightBackToMain,
    LocalMsg_SetChallengeIcon,
    LocalMsg_NotifyBuyPveSuccess,
    LocalMsg_SelecetNavigationBtn,
    LocalMsg_ShowNavigationNode,
    LocalMsg_UpdateRoleExpAndLevel_ex,
    LocalMsg_NotifyUpdateAllianceSupportCD,
    LocalMsg_NotifyAllMembersHideAppointNode,
    LocalMsg_NotifyMailStateChange,
    LocalMsg_NotifyNewMail,
    LocalMsg_NotifyOpenFriendInfo,
    LocalMsg_NewFriendApply,
    LocalMsg_TransmitFriendRoleID,
    LocalMsg_NotifyNewFriendFightInvitation,
    LocalMsg_NotifyExpandEnemyCardInfo,
    LocalMsg_NotifyClosedEnemyCardInfo,
    LocalMsg_OnBuyEvilPass,
    LocalMsg_NewTalent,
    LocalMsg_NotifyCloseCopyDeck,
    LocalMsg_NotifyCleanFriendFightInvitation,
    LocalMsg_NotifySelectCardUUID,
    LocalMsg_NotifyCleanWatchTime,
    LocalMsg_NotifyOverMoveArea,
    LocalMsg_FightRewardCellHideTips,
    LocalMsg_HideRoleInfoResourcesTips,
    LocalMsg_RefreshRecommendLayer,
    LocalMsg_NotifyScrollLastRainbowTask,
    LocalMsg_NotifyScrollToIdxOfRainbowTask,
    LocalMsg_NotifyRainbowTaskProgress,
    LocalMsg_NotifyOpenUpLvRainbowTask,
    LocalMsg_NotifyMaintainRainbowReward,
    LocalMsg_NotifyRefreshRainbowTask,
    LocalMsg_RefreshRainbowRedDot,
    LocalMsg_NotifyPlayOpenTaskEffect,
    LocalMsg_NotifyUpdateSilentState,
    LocalMsg_NotifyClosedBoxTips,
    LocalMsg_UpdateSevenSignInActivityRedDot,
    LocalMsg_CheckSevenSignInIsOver,
    LocalMsg_NotifyClosedItemTips,
    LocalMsg_NotifyGroutTaskUpdate,
    LocalMsg_NotifyOpenNextGroutTask,
    LocalMsg_NotifyUpdateRunningGroutTask,
    LocalMsg_NotifyRefreshGroutStepTask,
    LocalMsg_NotifyBeReadyNotice,
    LocalMsg_NotifyCheckNoticeRedTip,
    LocalMsg_Reconnect,
    RequestSnapshot,
    LocalMsg_FightReady,
    LocalMsg_NotifySwitchEmotion,
    LocalMsg_ResetEmotionState,
    LocalMsg_NewEmotion,
    LocalMsg_CloseAllianceDetailLayer,
    AllianceDetailUpdateMembers,
    LocalMsg_RefreshEquipmentBattleMap,
    LocalMsg_NewBattleMap,
    LocalMsg_SetShopReddotVisible,
    LocalMsg_RefreshGetNewBattleMap,
    LocalMsg_AutoScrollGiftOrEvilNode,
    LocalMsg_PlayEmotionGoods,
    LocalMsg_SetPlayEmotionTimer,
    LocalMsg_NotifyCardUpLvAniOver,
    LocalMsg_RefreshEmotionStore,
    LocalMsg_ResetDeckLayer,
    LocalMsg_RefreshPreSeasonRank,
    Activity_RefreshReddotVisible,
    Activity_CloseLayer,
    Activity_NewActivityOpen,
    Activity_GrowFundGetAwardRsp,
    Activity_ActivityRechargeRsp,
    HideInviteReddot,
    LocalMsg_NotifyClosedOneYuan2Buy,
    LocalMsg_RefreshBoxSpeedUpTimeLeft,
    LocalMsg_NotifyRefreshEveryDayDiscountsGiftBag,
    LocalMsg_NotifyClosedDiscountsGiftBag,
    LocalMsg_NotifyHeroLoadReddot,
    LocalMsg_HeroLoadGetAward,
    LocalMsg_HeroLoadGetScoreAward,
    LocalMsg_NotifyUnpackRebateSelectCard,
    LocalMsg_NotifyRefreshQuestionState,
    LocalMsg_RecordQuestionClick,
    LocalMsg_NotifyClosedQuestionRedDot,
    LocalMsg_NotifyClosedQuestionEntry,
    LocalMsg_NotifyRefreshSelectFrame,
    LocalMsg_CheckSpringFestivalSignInIsOver,
    //LocalMsg_NotifyRefreshSpringFestivalPage,
    LocalMsg_NotifyDefaultSelectDay,
    OverBagGiftLayer_Hide,
    LocalMsg_NotifyFightSelfCardInfo,
    PushOverBagGift,
    SelectCardBySelf,
    Activity_DataReached,
    LocalMsg_NewSeasonJustBeginning,
    LocalMsg_NotifyRealNameRegister,
    LocalMsg_NotifyShutdownRealNamePopFrame,
	LocalMsg_NotifyWxShareResult,
    TowerDie,
    LocalMsg_NotifyClosePopupLayer,     /* 关闭PopupLayer */
    LocalMsg_AutoScrollDailyGiftNode,   /* 商店页面滚动到"每日礼包"位置 */
    LocalMsg_UpdateTenConsecutiveBoxRedDot,
    COMBAT_DONE,
    CONSTRUCTING,
    GUIDE_MAIN,
    LocalMsg_UpdateWechatUserInfo,
    LocalMsg_HotStartup, /* 热启动 */
    LocalMsg_ShowOpenDrawBox,//打开自选宝箱界面
    LocalMsg_DrawBoxOKSelect,//自选宝箱确认选择
    LocalMsg_CheckPassportRed,//检测通行证红点
    LocalMsg_QueueUI_check,//队列UI,检测
    LocalMsg_QueueUI_deleteUI,//队列UI,删除ui
}