import * as $protobuf from "protobufjs";
/** Namespace proto. */
export namespace proto {

    /** Ptl enum. */
    enum Ptl {
        UNSPECIFIED = 0,
        Ping = 10000,
        Echo = 60000,
        LoginReq = 10001,
        LoginRsp = 10002,
        CreatRoleReq = 10003,
        CreatRoleRsp = 10004,
        SyncRole = 10005,
        ChangeDecksReq = 10006,
        ChangeDecksRsp = 10007,
        GetRankScoreRewardReq = 10008,
        GetRankScoreRewardRsp = 10009,
        GetBossBoxRewardReq = 10010,
        GetBossBoxRewardRsp = 10011,
        CardLevelUpReq = 10012,
        CardLevelUpRsp = 10013,
        ChangeIndexCardReq = 10014,
        ChangeIndexCardRsp = 10015,
        GetCooperateBoxRewardReq = 10016,
        GetCooperateBoxRewardRsp = 10017,
        UpdateItemData = 10018,
        RemoveItemData = 10019,
        SyncRoleGold = 10020,
        SyncRoleDiamond = 10021,
        GetShopInfoReq = 10022,
        GetShopInfoRsp = 10023,
        BuyShopGoodsReq = 10024,
        BuyShopGoodsRsp = 10025,
        FreeRefreshSpecialGoodsReq = 10026,
        FreeRefreshSpecialGoodsRsp = 10027,
        GetRankPackageInfoReq = 10028,
        GetRankPackageInfoRsp = 10029,
        UnlockRankBoxReq = 10030,
        UnlockRankBoxRsp = 10031,
        ReserveRankBoxReq = 10032,
        ReserveRankBoxRsp = 10033,
        OpenRankBoxReq = 10034,
        OpenRankBoxRsp = 10035,
        ImmediatelyOpenRankBoxReq = 10036,
        ImmediatelyOpenRankBoxRsp = 10037,
        PushPreventIndulge = 10038,
        PushDailyRefresh = 10039,
        SetLordReq = 10040,
        SetLordRsp = 10041,
        SetTalentReq = 10042,
        SetTalentRsp = 10043,
        GetPveClearRewardReq = 10044,
        GetPveClearRewardRsp = 10045,
        GetPveDailyRewardReq = 10046,
        GetPveDailyRewardRsp = 10047,
        BuyPveCountReq = 10048,
        BuyPveCountRsp = 10049,
        GetPveStatusReq = 10050,
        GetPveStatusRsp = 10051,
        GmAddCupReq = 10500,
        GmAddCupRsp = 10501,
        ReconnetFightReq = 10998,
        ReconnetFightRsp = 10999,
        StartMatchFightReq = 11000,
        StartMatchFightRsp = 11001,
        PullCardInfoReq = 11002,
        PullCardInfoRsp = 11003,
        PullCardReq = 11004,
        PullCardRsp = 11005,
        ChangeTeamIndexReq = 11006,
        ChangeTeamIndexRsp = 11007,
        CheckServerUTCTime = 11010,
        ChangeNameReq = 11011,
        ChangeNameRsp = 11012,
        HowManyTimesChangeNameReq = 11013,
        HowManyTimesChangeNameRsp = 11014,
        SyncRoleExpAndLevel = 11033,
        OpenRankRewardReq = 11045,
        OpenRankRewardRsp = 11046,
        TaskInfoReq = 11047,
        TaskInfoRsp = 11048,
        TaskGetGoalBoxReq = 11049,
        TaskGetGoalBoxRsp = 11050,
        TaskGetGiftReq = 11051,
        TaskGetGiftRsp = 11052,
        TaskGetRewardReq = 11053,
        TaskGetRewardRsp = 11054,
        TaskRefreshReq = 11055,
        TaskRefreshRsp = 11056,
        TaskPushTaskInfo = 11057,
        CancelMatchFightReq = 11067,
        CancelMatchFightRsp = 11068,
        PlayerInfoReq = 11073,
        PlayerInfoRsp = 11074,
        BossBoxInfoReq = 11075,
        BossBoxInfoRsp = 11076,
        BossBoxUnlockLvReq = 11077,
        BossBoxUnlockLvRsp = 11078,
        BossBoxGetLvRewardReq = 11079,
        BossBoxGetLvRewardRsp = 11080,
        ResetFightRecordReq = 11081,
        ResetFightRecordRsp = 11082,
        CreateAllianceReq = 11201,
        CreateAllianceRsp = 11202,
        JoinAllianceReq = 11203,
        JoinAllianceRsp = 11204,
        QuitAllianceReq = 11205,
        QuitAllianceRsp = 11206,
        DealAllianceJoinReq = 11207,
        DealAllianceJoinRsp = 11208,
        AllianceSetPostRankReq = 11209,
        AllianceSetPostRankRsp = 11210,
        QueryAllianceInfoReq = 11211,
        QueryAllianceInfoRsp = 11212,
        SearchAllianceReq = 11213,
        SearchAllianceRsp = 11214,
        RecommendAllianceReq = 11215,
        RecommendAllianceRsp = 11216,
        ModifyAllianceInfoReq = 11217,
        ModifyAllianceInfoRsp = 11218,
        ExpelMemberReq = 11219,
        ExpelMemberRsp = 11220,
        AllianceMsgPush = 11221,
        SyncRoleAllianceData = 11222,
        AllianceCardRequestDonateReq = 11223,
        AllianceCardRequestDonateRsp = 11224,
        AllianceDonateCardReq = 11225,
        AllianceDonateCardRsp = 11226,
        AllianceFightInvitationReq = 11231,
        AllianceFightAcceptReq = 11233,
        AllianceFightAcceptRsp = 11234,
        PushJoinOrExpelAllianceMsg = 11252,
        PushSupportInfo = 11253,
        PushRequestSupportInfo = 11254,
        PushAllianceExpelMember = 11255,
        PushAllianceFightInvite = 11256,
        PushAllianceFightStart = 11257,
        PushAllianceFightEnd = 11258,
        PushRecentlyAllianceFightInfo = 11259,
        PushCancelAllianceFightInvite = 11260,
        PushAllianceApplyMessage = 11261,
        PushAllianceLeaderChange = 11262,
        BuyDemonPassReq = 11301,
        BuyDemonPassRsp = 11302,
        SimpleGmReq = 11303,
        SimpleGmRsp = 11304,
        ChallengeGetInfoReq = 11401,
        ChallengeGetInfoRsp = 11402,
        ChallengeChangeDeckReq = 11403,
        ChallengeChangeDeckRsp = 11404,
        ChallengeSetLordReq = 11405,
        ChallengeSetLordRsp = 11406,
        ChallengeSetTalentReq = 11407,
        ChallengeSetTalentRsp = 11408,
        ChallengeCountResetReq = 11411,
        ChallengeCountResetRsp = 11412,
        ChallengeDoRewardReq = 11413,
        ChallengeDoRewardRsp = 11414,
        GetPvpRankingListReq = 11463,
        GetPvpRankingListRsp = 11464,
        GetCooperationRankingListReq = 11465,
        GetCooperationRankingListRsp = 11466,
        GetAllianceRankingListReq = 11467,
        GetAllianceRankingListRsp = 11468,
        ExchangeCodeReq = 11483,
        ExchangeCodeRsp = 11484,
        GetMailInfoListReq = 11493,
        GetMailInfoListRsp = 11494,
        ReceiveMailRewardReq = 11495,
        ReceiveMailRewardRsp = 11496,
        ReadMailReq = 11497,
        RemoveReadMailReq = 11499,
        RemoveReadMailRsp = 11500,
        PushNewMailTip = 11501,
        WriteAllianceMailReq = 11503,
        WriteAllianceMailRsp = 11504,
        GetFriendInfoListReq = 11513,
        GetFriendInfoListRsp = 11514,
        GetFriendApplyListReq = 11515,
        GetFriendApplyListRsp = 11516,
        PushNewFriendApplyInfo = 11517,
        OperatorFriendApplyReq = 11518,
        OperatorFriendApplyRsp = 11519,
        AddFriendReq = 11520,
        AddFriendRsp = 11521,
        DeleteFriendReq = 11522,
        DeleteFriendRsp = 11523,
        ChangeFriendInfo = 11524,
        InvitationFriendFightReq = 11525,
        InvitationFriendFightRsp = 11526,
        PushInvitationFriendFight = 11527,
        OperatorFriendFightInvitationReq = 11528,
        OperatorFriendFightInvitationRsp = 11529,
        FightLogReq = 11530,
        FightLogRsp = 11531,
        CopyDeckReq = 11532,
        CopyDeckRsp = 11533,
        ReportReq = 11534,
        ReportRsp = 11535,
        PushCancelFriendFight = 11540,
        PushPveForbidInfo = 11551,
        RainbowTaskListReq = 11561,
        RainbowTaskListRsp = 11562,
        UpLvRainbowReq = 11563,
        UpLvRainbowRsp = 11564,
        ImmFinishRainbowTaskReq = 11565,
        ImmFinishRainbowTaskRsp = 11566,
        RefreshRainbowTaskReq = 11567,
        RefreshRainbowTaskRsp = 11568,
        ReceiveRainbowRewardReq = 11569,
        ReceiveRainbowRewardRsp = 11570,
        PushRainbowTaskUpdate = 11571,
        PushRainbowTaskExpireRefresh = 11572,
        PushRainbowTaskRedDotStatus = 11573,
        GroutTaskListReq = 11583,
        GroutTaskListRsp = 11584,
        ReceiveGroutTaskRewardReq = 11585,
        ReceiveGroutTaskRewardRsp = 11586,
        ReceiveGroutTaskStepRewardReq = 11587,
        ReceiveGroutTaskStepRewardRsp = 11588,
        PushGroutTaskUpate = 11589,
        PushSevenDaySignInData = 11673,
        ReceiveSevenDaySignInRewardReq = 11674,
        ReceiveSevenDaySignInRewardRsp = 11675,
        GetGiftBagReq = 11676,
        GetGiftBagRsp = 11677,
        RefreshDayGiftBagReq = 11678,
        RefreshDayGiftBagRsp = 11679,
        BuyGiftDayReq = 11680,
        BuyGiftDayRsp = 11681,
        NewPlayerGiftBagReq = 11682,
        NewPlayerGiftBagRsp = 11683,
        BuyNewPlayerGiftBagReq = 11684,
        BuyNewPlayerGiftBagRsp = 11685,
        PushNewExGiftBag = 11686,
        PayStartReq = 11687,
        PayStartRsp = 11688,
        PayEndReq = 11689,
        PayEndRsp = 11690,
        SetGid = 11691,
        KickOff = 11692,
        SetWechatUserInfo = 11693,
        PrePayWechatRsp = 11694,
        ReportedAdvertTypeReq = 11700,
        SharedGameReq = 11701,
        SharedGameRsp = 11702,
        GetSharedAwardReq = 11703,
        GetSharedAwardRsp = 11704,
        PushSharedOfToday = 11705,
        SharedListReq = 11706,
        SharedListRsp = 11707,
        AfterSharedRewardReq = 11708,
        AfterSharedRewardRsp = 11709,
        WatchAdResumeSeasonScoreReq = 11710,
        WatchAdResumeSeasonScoreRsp = 11711,
        SwitchEmotionReq = 11728,
        SwitchEmotionRsp = 11729,
        BuyEmotionReq = 11730,
        BuyEmotionRsp = 11731,
        GetBattleMapReq = 11732,
        GetBattleMapRsp = 11733,
        ReplaceBattleMapReq = 11734,
        ReplaceBattleMapRsp = 11735,
        ScrollNoticeReq = 11736,
        ScrollNoticeRsp = 11737,
        LimitActivityReq = 11738,
        LimitActivityRsp = 11739,
        GrowFundGetAwardReq = 11740,
        GrowFundGetAwardRsp = 11741,
        ActivityRechargeRsp = 11742,
        ChangeActivityRsp = 11743,
        BoxAwardSelectReq = 11744,
        BoxAwardSelectRsp = 11745,
        DailyShareInviteReq = 11756,
        DailyShareInviteRsp = 11757,
        GetDailyShareInviteRewardReq = 11758,
        GetDailyShareInviteRewardRsp = 11759,
        PushDailyShareInviteTips = 11760,
        LookADAddBoxSpeedUpTimeInfoReq = 11761,
        LookADAddBoxSpeedUpTimeInfoRsp = 11762,
        LookADAddBoxSpeedUpTimeReq = 11763,
        LookADAddBoxSpeedUpTimeRsp = 11764,
        GetOneYuanToBuyInfoReq = 11765,
        GetOneYuanToBuyInfoRsp = 11766,
        ReceiveOneYuanRewardReq = 11767,
        ReceiveOneYuanRewardRsp = 11768,
        CostSomeThingToGetAvdRewardReq = 11769,
        CostSomeThingToGetAvdRewardRsp = 11770,
        SharePointEventReported = 11771,
        GetDiscountsGiftBagInfoReq = 11772,
        GetDiscountsGiftBagInfoRsp = 11773,
        ReceiveDiscountsGiftBagRewardReq = 11774,
        ReceiveDiscountsGiftBagRewardRsp = 11775,
        GetMembershipRewardReq = 11776,
        GetMembershipRewardRsp = 11777,
        HeroLoadTaskListReq = 11778,
        HeroLoadTaskListRsp = 11779,
        ReceiveHeroLoadTaskRewardReq = 11780,
        ReceiveHeroLoadTaskRewardRsp = 11781,
        ReceiveHeroLoadTaskStepRewardReq = 11782,
        ReceiveHeroLoadTaskStepRewardRsp = 11783,
        PushHeroLoadTaskUpate = 11784,
        ReceiveUnpackRebateCardReq = 11785,
        ReceiveUnpackRebateCardRsp = 11786,
        GetQuestionReq = 11787,
        GetQuestionRsp = 11788,
        SubmitQuestionReceiveRewardReq = 11789,
        SubmitQuestionReceiveRewardRsp = 11790,
        ReportedFirstCreateRoleReq = 11791,
        SearchDoubleEnergyInfoReq = 11792,
        SearchDoubleEnergyInfoRsp = 11793,
        SearchSpringFestivalInfoReq = 11794,
        SearchSpringFestivalInfoRsp = 11795,
        ReceiveSpringFestivalRewardReq = 11796,
        ReceiveSpringFestivalRewardRsp = 11797,
        OverBagGiftReq = 11798,
        OverBagGiftRsp = 11799,
        BuyOverBagGiftReq = 11800,
        BuyOverBagGiftRsp = 11801,
        PushOverBagGift = 11802,
        PushSelectCardBySelfRsp = 11803,
        SelectCardBySelfReq = 11804,
        SelectCardBySelfRsp = 11805,
        ChatStartPlaceHolder = 11815,
        ChatMsgPush = 11816,
        ChatSendMessageReq = 11817,
        ChatSendMessageRsp = 11818,
        ChatSendEmojiReq = 11819,
        ChatSendEmojiRsp = 11820,
        GetChatCdReq = 11821,
        GetChatCdRsp = 11822,
        ChatSendShareCardsReq = 11823,
        ChatSendShareCardsRsp = 11824,
        GetFriendOnlineStateListReq = 11825,
        GetFriendOnlineStateListRsp = 11826,
        CheckPlayerIsMyFriendReq = 11827,
        CheckPlayerIsMyFriendRsp = 11828,
        ChatEndPlaceHolder = 11839,
        GetPickedGiftBagInfoReq = 11840,
        GetPickedGiftBagInfoRsp = 11841,
        RefreshPickedGiftBagReq = 11842,
        RefreshPickedGiftBagRsp = 11843,
        BuyPickedGiftBagReq = 11844,
        BuyPickedGiftBagRsp = 11845,
        PickedGiftBagEndPlaceHolder = 11850,
        LuckySupplyReq = 11851,
        LuckySupplyRsp = 11852,
        LuckySupplyGetAwardReq = 11853,
        LuckySupplyGetAwardRsp = 11854,
        GachaReq = 11855,
        GachaRsp = 11856,
        GachaBoxReq = 11857,
        GachaBoxRsp = 11858,
        VictoryBoxInfoReq = 11859,
        VictoryBoxInfoRsp = 11860,
        VictoryBoxGetAwardReq = 11861,
        VictoryBoxGetAwardRsp = 11862,
        VictoryBoxRefuseReq = 11863,
        VictoryBoxRefuseRsp = 11864,
        WeeklyAdBoxInfoReq = 11865,
        WeeklyAdBoxInfoRsp = 11866,
        WeeklyAdBoxGetAwardReq = 11867,
        WeeklyAdBoxGetAwardRsp = 11868,
        CretePrivateRoomReq = 11871,
        CretePrivateRoomRsp = 11872,
        JoinPrivateRoomReq = 11873,
        JoinPrivateRoomRsp = 11874,
        SeasonOverRsp = 11875,
        SeasonResetRsp = 11876,
        SeasonRewardMsgRsp = 11877,
        GetSeasonRewardReq = 11878,
        GetSeasonRewardRsp = 11879,
        BountyPlayerNumberChangedPush = 11880,
        BountyRewardPush = 11881,
        RetrieveBountyRewardReq = 11882,
        RetrieveBountyRewardRsp = 11883,
        GetBountyStatReq = 11884,
        GetBountyStatRsp = 11885,
        ClearBountyStatReq = 11886,
        ClearBountyStatRsp = 11887,
        GetContinuousGiftReq = 11888,
        GetContinuousGiftRsp = 11889,
        BuyContinuousGiftReq = 11890,
        BuyContinuousGiftRsp = 11891,
        GetFirstRechargeGiftReq = 11892,
        GetFirstRechargeGiftRsp = 11893,
        BuyFirstRechargeGiftPush = 11894
    }

    /** FightPtl enum. */
    enum FightPtl {
        FIGHT_UNSPECIFIED = 0,
        FightReadyReq = 60001,
        FightReadyRsp = 60002,
        FightRandomNum = 60004,
        FightSyncRandomReq = 60005,
        FightSyncRandomRsp = 60006,
        FightSurrender = 60007,
        FightEnd = 60008,
        FightBuildReq = 60010,
        FightBuildRsp = 60011,
        FightCompoundReq = 60012,
        FightCompoundRsp = 60013,
        FightStrengthReq = 60014,
        FightStrengthRsp = 60015,
        FightSnapshotReq = 60016,
        FightSnapshotRsp = 60017,
        FightLordSkillReq = 60018,
        FightLordSkillRsp = 60019,
        FightEmoji = 60020,
        FightEmojiSync = 60021,
        FightGmWin = 60300,
        ConstructionPhase = 61000,
        CombatPhase = 61001,
        ClientConstructionEnd = 61002,
        ClientCombatEnd = 61003,
        BountyAllFightDataPush = 61004
    }

    /** CommonErrorCode enum. */
    enum CommonErrorCode {
        Succeed = 0,
        Failed = 1
    }

    /** Gender enum. */
    enum Gender {
        Male = 0,
        Female = 1
    }

    /** ConstItemID enum. */
    enum ConstItemID {
        CTI_None = 0,
        CTI_Gold = 1,
        CTI_Diamond = 2,
        CTI_Lightning = 3,
        CTI_RoleExp = 4
    }

    /** Properties of an ItemSimpleInfo. */
    interface IItemSimpleInfo {

        /** ItemSimpleInfo itemId */
        itemId?: (number|null);

        /** ItemSimpleInfo itemCount */
        itemCount?: (number|null);
    }

    /** Represents an ItemSimpleInfo. */
    class ItemSimpleInfo implements IItemSimpleInfo {

        /**
         * Constructs a new ItemSimpleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IItemSimpleInfo);

        /** ItemSimpleInfo itemId. */
        public itemId: number;

        /** ItemSimpleInfo itemCount. */
        public itemCount: number;

        /**
         * Encodes the specified ItemSimpleInfo message. Does not implicitly {@link proto.ItemSimpleInfo.verify|verify} messages.
         * @param m ItemSimpleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IItemSimpleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemSimpleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ItemSimpleInfo;
    }

    /** Properties of a RewardSimpleInfo. */
    interface IRewardSimpleInfo {

        /** RewardSimpleInfo rewardType */
        rewardType?: (number|null);

        /** RewardSimpleInfo rewardId */
        rewardId?: (number|null);

        /** RewardSimpleInfo rewardCount */
        rewardCount?: (number|null);

        /** RewardSimpleInfo transformedRewards */
        transformedRewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a RewardSimpleInfo. */
    class RewardSimpleInfo implements IRewardSimpleInfo {

        /**
         * Constructs a new RewardSimpleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRewardSimpleInfo);

        /** RewardSimpleInfo rewardType. */
        public rewardType: number;

        /** RewardSimpleInfo rewardId. */
        public rewardId: number;

        /** RewardSimpleInfo rewardCount. */
        public rewardCount: number;

        /** RewardSimpleInfo transformedRewards. */
        public transformedRewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified RewardSimpleInfo message. Does not implicitly {@link proto.RewardSimpleInfo.verify|verify} messages.
         * @param m RewardSimpleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRewardSimpleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RewardSimpleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RewardSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RewardSimpleInfo;
    }

    /** Properties of a VecRewardSimpleInfo. */
    interface IVecRewardSimpleInfo {

        /** VecRewardSimpleInfo awards */
        awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a VecRewardSimpleInfo. */
    class VecRewardSimpleInfo implements IVecRewardSimpleInfo {

        /**
         * Constructs a new VecRewardSimpleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IVecRewardSimpleInfo);

        /** VecRewardSimpleInfo awards. */
        public awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified VecRewardSimpleInfo message. Does not implicitly {@link proto.VecRewardSimpleInfo.verify|verify} messages.
         * @param m VecRewardSimpleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IVecRewardSimpleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a VecRewardSimpleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns VecRewardSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.VecRewardSimpleInfo;
    }

    /** ItemSource enum. */
    enum ItemSource {
        Default = 0,
        Recharge = 1,
        Shop = 2,
        BossBox = 3,
        CooperateBox = 4,
        PullCard = 5,
        RankScoreReward = 6,
        CardLevelUp = 7,
        RankBox = 8,
        TaskGoalBox = 9,
        TaskGift = 10,
        TaskReward = 11,
        Rookie = 12,
        AllianceDonate = 13,
        ChallengeAward = 14,
        GM = 15,
        RainbowTask = 16,
        SevenDaySignIn = 17,
        CreateAlliance = 18,
        TaskRefresh = 19,
        ChangeName = 20,
        Pve = 21,
        RefreshDayGiftBag = 22,
        ResetChallengeCount = 23,
        ExchangeCode = 24,
        BuyPveCount = 25,
        BuyGiftBag = 26,
        MailReward = 27,
        RainbowTaskLevelUp = 28,
        ShopGold1 = 29,
        ShopGold2 = 30,
        ShopGold3 = 31,
        PullCard1 = 32,
        PullCard2 = 33,
        PullCard3 = 34,
        GroutTask = 35,
        GrowFundAward = 36,
        OneYuanBuy = 37,
        DiscountsGiftBag = 38,
        WaitChooseReward = 39,
        SkipAdvert = 40,
        MonthlyPass = 41,
        LifetimePass = 42,
        InviteRecommend = 43,
        DailyShare = 44,
        BoxRebateCard = 45,
        WatchAdvertBagSpeedUp = 46,
        Question = 47,
        SpringFestivalSignIn = 48,
        OverflowBagGift = 49,
        OptionalCard = 50,
        LuckySupply = 51,
        Gacha = 52,
        GachaBox = 53,
        Pvp = 54,
        ResetFightRecord = 55,
        VictoryBox = 56,
        WeeklyAdBox = 57,
        RankOverReward = 58,
        BountyGame = 59,
        BuyContinusGift = 60
    }

    /** Properties of a PreventIndulgeData. */
    interface IPreventIndulgeData {

        /** PreventIndulgeData todayOnlineDuration */
        todayOnlineDuration?: (number|null);
    }

    /** Represents a PreventIndulgeData. */
    class PreventIndulgeData implements IPreventIndulgeData {

        /**
         * Constructs a new PreventIndulgeData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPreventIndulgeData);

        /** PreventIndulgeData todayOnlineDuration. */
        public todayOnlineDuration: number;

        /**
         * Encodes the specified PreventIndulgeData message. Does not implicitly {@link proto.PreventIndulgeData.verify|verify} messages.
         * @param m PreventIndulgeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPreventIndulgeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PreventIndulgeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PreventIndulgeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PreventIndulgeData;
    }

    /** Properties of a RoleData. */
    interface IRoleData {

        /** RoleData id */
        id?: (string|null);

        /** RoleData uid */
        uid?: (string|null);

        /** RoleData name */
        name?: (string|null);

        /** RoleData gender */
        gender?: (proto.Gender|null);

        /** RoleData items */
        items?: (proto.IItemData[]|null);

        /** RoleData decks */
        decks?: (proto.IDeckData[]|null);

        /** RoleData head */
        head?: (string|null);

        /** RoleData headFrame */
        headFrame?: (number|null);

        /** RoleData diamond */
        diamond?: (number|null);

        /** RoleData gold */
        gold?: (number|null);

        /** RoleData indexCard */
        indexCard?: (number|null);

        /** RoleData rankData */
        rankData?: (proto.IRankData|null);

        /** RoleData bossBox */
        bossBox?: (proto.IBossBoxData|null);

        /** RoleData cooperateBox */
        cooperateBox?: (proto.ICooperateBoxData|null);

        /** RoleData deckIndex */
        deckIndex?: (number|null);

        /** RoleData level */
        level?: (number|null);

        /** RoleData exp */
        exp?: (number|null);

        /** RoleData guideTrunk */
        guideTrunk?: (number|null);

        /** RoleData guideBranch */
        guideBranch?: (number[]|null);

        /** RoleData allianceData */
        allianceData?: (proto.IRoleAllianceData|null);

        /** RoleData isDemonPass */
        isDemonPass?: (boolean|null);

        /** RoleData donateData */
        donateData?: (proto.IAllianceDonateData|null);

        /** RoleData runningRainbowTask */
        runningRainbowTask?: (proto.IRainbowTaskPushData|null);

        /** RoleData createRoleUTC */
        createRoleUTC?: (number|null);

        /** RoleData emotions */
        emotions?: (number[]|null);

        /** RoleData usedBattleMapID */
        usedBattleMapID?: (number|null);

        /** RoleData maxWaveNum */
        maxWaveNum?: (number|null);

        /** RoleData bFirstPayEvilPass */
        bFirstPayEvilPass?: (boolean|null);

        /** RoleData gachaHitCount */
        gachaHitCount?: (number|null);

        /** RoleData gachaOpenCount */
        gachaOpenCount?: (number|null);

        /** RoleData gachaOpenStatus */
        gachaOpenStatus?: (number|null);

        /** RoleData RoomID */
        RoomID?: (number|null);

        /** RoleData RoomType */
        RoomType?: (number|null);

        /** RoleData RoomCreateTime */
        RoomCreateTime?: (number|Long|null);

        /** RoleData membershipData */
        membershipData?: (proto.IMembershipData|null);
    }

    /** Represents a RoleData. */
    class RoleData implements IRoleData {

        /**
         * Constructs a new RoleData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRoleData);

        /** RoleData id. */
        public id: string;

        /** RoleData uid. */
        public uid: string;

        /** RoleData name. */
        public name: string;

        /** RoleData gender. */
        public gender: proto.Gender;

        /** RoleData items. */
        public items: proto.IItemData[];

        /** RoleData decks. */
        public decks: proto.IDeckData[];

        /** RoleData head. */
        public head: string;

        /** RoleData headFrame. */
        public headFrame: number;

        /** RoleData diamond. */
        public diamond: number;

        /** RoleData gold. */
        public gold: number;

        /** RoleData indexCard. */
        public indexCard: number;

        /** RoleData rankData. */
        public rankData?: (proto.IRankData|null);

        /** RoleData bossBox. */
        public bossBox?: (proto.IBossBoxData|null);

        /** RoleData cooperateBox. */
        public cooperateBox?: (proto.ICooperateBoxData|null);

        /** RoleData deckIndex. */
        public deckIndex: number;

        /** RoleData level. */
        public level: number;

        /** RoleData exp. */
        public exp: number;

        /** RoleData guideTrunk. */
        public guideTrunk: number;

        /** RoleData guideBranch. */
        public guideBranch: number[];

        /** RoleData allianceData. */
        public allianceData?: (proto.IRoleAllianceData|null);

        /** RoleData isDemonPass. */
        public isDemonPass: boolean;

        /** RoleData donateData. */
        public donateData?: (proto.IAllianceDonateData|null);

        /** RoleData runningRainbowTask. */
        public runningRainbowTask?: (proto.IRainbowTaskPushData|null);

        /** RoleData createRoleUTC. */
        public createRoleUTC: number;

        /** RoleData emotions. */
        public emotions: number[];

        /** RoleData usedBattleMapID. */
        public usedBattleMapID: number;

        /** RoleData maxWaveNum. */
        public maxWaveNum: number;

        /** RoleData bFirstPayEvilPass. */
        public bFirstPayEvilPass: boolean;

        /** RoleData gachaHitCount. */
        public gachaHitCount: number;

        /** RoleData gachaOpenCount. */
        public gachaOpenCount: number;

        /** RoleData gachaOpenStatus. */
        public gachaOpenStatus: number;

        /** RoleData RoomID. */
        public RoomID: number;

        /** RoleData RoomType. */
        public RoomType: number;

        /** RoleData RoomCreateTime. */
        public RoomCreateTime: (number|Long);

        /** RoleData membershipData. */
        public membershipData?: (proto.IMembershipData|null);

        /**
         * Encodes the specified RoleData message. Does not implicitly {@link proto.RoleData.verify|verify} messages.
         * @param m RoleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRoleData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RoleData;
    }

    /** GachaOpenType enum. */
    enum GachaOpenType {
        Unknown = 0,
        Box1 = 1,
        Box2 = 2
    }

    /** Properties of an ItemData. */
    interface IItemData {

        /** ItemData id */
        id?: (string|null);

        /** ItemData staticId */
        staticId?: (number|null);

        /** ItemData count */
        count?: (number|null);

        /** ItemData level */
        level?: (number|null);
    }

    /** Represents an ItemData. */
    class ItemData implements IItemData {

        /**
         * Constructs a new ItemData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IItemData);

        /** ItemData id. */
        public id: string;

        /** ItemData staticId. */
        public staticId: number;

        /** ItemData count. */
        public count: number;

        /** ItemData level. */
        public level: number;

        /**
         * Encodes the specified ItemData message. Does not implicitly {@link proto.ItemData.verify|verify} messages.
         * @param m ItemData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IItemData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ItemData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ItemData;
    }

    /** Properties of a DeckData. */
    interface IDeckData {

        /** DeckData deckItems */
        deckItems?: (string[]|null);

        /** DeckData lord */
        lord?: (string|null);

        /** DeckData talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a DeckData. */
    class DeckData implements IDeckData {

        /**
         * Constructs a new DeckData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDeckData);

        /** DeckData deckItems. */
        public deckItems: string[];

        /** DeckData lord. */
        public lord: string;

        /** DeckData talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified DeckData message. Does not implicitly {@link proto.DeckData.verify|verify} messages.
         * @param m DeckData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDeckData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DeckData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DeckData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DeckData;
    }

    /** Properties of a TalenItem. */
    interface ITalenItem {

        /** TalenItem points */
        points?: (number[]|null);
    }

    /** Represents a TalenItem. */
    class TalenItem implements ITalenItem {

        /**
         * Constructs a new TalenItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITalenItem);

        /** TalenItem points. */
        public points: number[];

        /**
         * Encodes the specified TalenItem message. Does not implicitly {@link proto.TalenItem.verify|verify} messages.
         * @param m TalenItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITalenItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TalenItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TalenItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TalenItem;
    }

    /** Properties of a TalentData. */
    interface ITalentData {

        /** TalentData talentItems */
        talentItems?: (proto.ITalenItem[]|null);
    }

    /** Represents a TalentData. */
    class TalentData implements ITalentData {

        /**
         * Constructs a new TalentData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITalentData);

        /** TalentData talentItems. */
        public talentItems: proto.ITalenItem[];

        /**
         * Encodes the specified TalentData message. Does not implicitly {@link proto.TalentData.verify|verify} messages.
         * @param m TalentData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITalentData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TalentData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TalentData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TalentData;
    }

    /** Properties of a FightCardData. */
    interface IFightCardData {

        /** FightCardData staticId */
        staticId?: (number|null);

        /** FightCardData level */
        level?: (number|null);
    }

    /** Represents a FightCardData. */
    class FightCardData implements IFightCardData {

        /**
         * Constructs a new FightCardData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightCardData);

        /** FightCardData staticId. */
        public staticId: number;

        /** FightCardData level. */
        public level: number;

        /**
         * Encodes the specified FightCardData message. Does not implicitly {@link proto.FightCardData.verify|verify} messages.
         * @param m FightCardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightCardData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightCardData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightCardData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightCardData;
    }

    /** Properties of a MailData. */
    interface IMailData {

        /** MailData mailList */
        mailList?: (proto.IMailInfoData[]|null);

        /** MailData serverMailUtc */
        serverMailUtc?: (number|null);
    }

    /** Represents a MailData. */
    class MailData implements IMailData {

        /**
         * Constructs a new MailData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMailData);

        /** MailData mailList. */
        public mailList: proto.IMailInfoData[];

        /** MailData serverMailUtc. */
        public serverMailUtc: number;

        /**
         * Encodes the specified MailData message. Does not implicitly {@link proto.MailData.verify|verify} messages.
         * @param m MailData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMailData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MailData;
    }

    /** Properties of a FightData. */
    interface IFightData {

        /** FightData roleId */
        roleId?: (string|null);

        /** FightData name */
        name?: (string|null);

        /** FightData deckData */
        deckData?: (proto.IFightCardData[]|null);

        /** FightData criticalDamage */
        criticalDamage?: (number|null);

        /** FightData rankScore */
        rankScore?: (number|null);

        /** FightData rankGrade */
        rankGrade?: (number|null);

        /** FightData continuousWin */
        continuousWin?: (number|null);

        /** FightData continuousLose */
        continuousLose?: (number|null);

        /** FightData roleLv */
        roleLv?: (number|null);

        /** FightData allianceName */
        allianceName?: (string|null);

        /** FightData allianceIcon */
        allianceIcon?: (number|null);

        /** FightData usedBattleMapID */
        usedBattleMapID?: (number|null);

        /** FightData pvpCount */
        pvpCount?: (number|null);

        /** FightData pvpWinCount */
        pvpWinCount?: (number|null);

        /** FightData disposeId */
        disposeId?: (number|null);

        /** FightData robotIndices */
        robotIndices?: (number[]|null);
    }

    /** Represents a FightData. */
    class FightData implements IFightData {

        /**
         * Constructs a new FightData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightData);

        /** FightData roleId. */
        public roleId: string;

        /** FightData name. */
        public name: string;

        /** FightData deckData. */
        public deckData: proto.IFightCardData[];

        /** FightData criticalDamage. */
        public criticalDamage: number;

        /** FightData rankScore. */
        public rankScore: number;

        /** FightData rankGrade. */
        public rankGrade: number;

        /** FightData continuousWin. */
        public continuousWin: number;

        /** FightData continuousLose. */
        public continuousLose: number;

        /** FightData roleLv. */
        public roleLv: number;

        /** FightData allianceName. */
        public allianceName: string;

        /** FightData allianceIcon. */
        public allianceIcon: number;

        /** FightData usedBattleMapID. */
        public usedBattleMapID: number;

        /** FightData pvpCount. */
        public pvpCount: number;

        /** FightData pvpWinCount. */
        public pvpWinCount: number;

        /** FightData disposeId. */
        public disposeId: number;

        /** FightData robotIndices. */
        public robotIndices: number[];

        /**
         * Encodes the specified FightData message. Does not implicitly {@link proto.FightData.verify|verify} messages.
         * @param m FightData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightData;
    }

    /** Properties of a BountyFightData. */
    interface IBountyFightData {

        /** BountyFightData roleId */
        roleId?: (string|null);

        /** BountyFightData name */
        name?: (string|null);

        /** BountyFightData deckData */
        deckData?: (proto.IFightCardData[]|null);

        /** BountyFightData rankScore */
        rankScore?: (number|null);

        /** BountyFightData rankGrade */
        rankGrade?: (number|null);

        /** BountyFightData hp */
        hp?: (number|null);

        /** BountyFightData isCombating */
        isCombating?: (boolean|null);

        /** BountyFightData playerTag */
        playerTag?: (number|null);
    }

    /** Represents a BountyFightData. */
    class BountyFightData implements IBountyFightData {

        /**
         * Constructs a new BountyFightData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBountyFightData);

        /** BountyFightData roleId. */
        public roleId: string;

        /** BountyFightData name. */
        public name: string;

        /** BountyFightData deckData. */
        public deckData: proto.IFightCardData[];

        /** BountyFightData rankScore. */
        public rankScore: number;

        /** BountyFightData rankGrade. */
        public rankGrade: number;

        /** BountyFightData hp. */
        public hp: number;

        /** BountyFightData isCombating. */
        public isCombating: boolean;

        /** BountyFightData playerTag. */
        public playerTag: number;

        /**
         * Encodes the specified BountyFightData message. Does not implicitly {@link proto.BountyFightData.verify|verify} messages.
         * @param m BountyFightData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBountyFightData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BountyFightData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BountyFightData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BountyFightData;
    }

    /** Properties of a Msg_Ping. */
    interface IMsg_Ping {
    }

    /** Represents a Msg_Ping. */
    class Msg_Ping implements IMsg_Ping {

        /**
         * Constructs a new Msg_Ping.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_Ping);

        /**
         * Encodes the specified Msg_Ping message. Does not implicitly {@link proto.Msg_Ping.verify|verify} messages.
         * @param m Msg_Ping message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_Ping, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_Ping message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_Ping
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_Ping;
    }

    /** Properties of a Msg_LoginReq. */
    interface IMsg_LoginReq {

        /** Msg_LoginReq uid */
        uid?: (string|null);

        /** Msg_LoginReq token */
        token?: (string|null);

        /** Msg_LoginReq group */
        group?: (string|null);

        /** Msg_LoginReq PlatID */
        PlatID?: (number|null);

        /** Msg_LoginReq sharedrid */
        sharedrid?: (string|null);

        /** Msg_LoginReq RainbowDistinctID */
        RainbowDistinctID?: (string|null);
    }

    /** Represents a Msg_LoginReq. */
    class Msg_LoginReq implements IMsg_LoginReq {

        /**
         * Constructs a new Msg_LoginReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LoginReq);

        /** Msg_LoginReq uid. */
        public uid: string;

        /** Msg_LoginReq token. */
        public token: string;

        /** Msg_LoginReq group. */
        public group: string;

        /** Msg_LoginReq PlatID. */
        public PlatID: number;

        /** Msg_LoginReq sharedrid. */
        public sharedrid: string;

        /** Msg_LoginReq RainbowDistinctID. */
        public RainbowDistinctID: string;

        /**
         * Encodes the specified Msg_LoginReq message. Does not implicitly {@link proto.Msg_LoginReq.verify|verify} messages.
         * @param m Msg_LoginReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LoginReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LoginReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LoginReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LoginReq;
    }

    /** Properties of a Msg_LoginRsp. */
    interface IMsg_LoginRsp {

        /** Msg_LoginRsp result */
        result?: (proto.Msg_LoginRsp.ErrorCode|null);

        /** Msg_LoginRsp isFighting */
        isFighting?: (boolean|null);
    }

    /** Represents a Msg_LoginRsp. */
    class Msg_LoginRsp implements IMsg_LoginRsp {

        /**
         * Constructs a new Msg_LoginRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LoginRsp);

        /** Msg_LoginRsp result. */
        public result: proto.Msg_LoginRsp.ErrorCode;

        /** Msg_LoginRsp isFighting. */
        public isFighting: boolean;

        /**
         * Encodes the specified Msg_LoginRsp message. Does not implicitly {@link proto.Msg_LoginRsp.verify|verify} messages.
         * @param m Msg_LoginRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LoginRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LoginRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LoginRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LoginRsp;
    }

    namespace Msg_LoginRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Failed = 1,
            NoRole = 2,
            PreventIndulgeTime = 3,
            PreventIndulgeSpecialTime = 4
        }
    }

    /** Properties of a Msg_CreatRoleReq. */
    interface IMsg_CreatRoleReq {

        /** Msg_CreatRoleReq name */
        name?: (string|null);

        /** Msg_CreatRoleReq gender */
        gender?: (proto.Gender|null);

        /** Msg_CreatRoleReq PlatId */
        PlatId?: (number|null);

        /** Msg_CreatRoleReq recommendRoleID */
        recommendRoleID?: (string|null);

        /** Msg_CreatRoleReq idNumber */
        idNumber?: (string|null);

        /** Msg_CreatRoleReq relayMsg */
        relayMsg?: (string|null);
    }

    /** Represents a Msg_CreatRoleReq. */
    class Msg_CreatRoleReq implements IMsg_CreatRoleReq {

        /**
         * Constructs a new Msg_CreatRoleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreatRoleReq);

        /** Msg_CreatRoleReq name. */
        public name: string;

        /** Msg_CreatRoleReq gender. */
        public gender: proto.Gender;

        /** Msg_CreatRoleReq PlatId. */
        public PlatId: number;

        /** Msg_CreatRoleReq recommendRoleID. */
        public recommendRoleID: string;

        /** Msg_CreatRoleReq idNumber. */
        public idNumber: string;

        /** Msg_CreatRoleReq relayMsg. */
        public relayMsg: string;

        /**
         * Encodes the specified Msg_CreatRoleReq message. Does not implicitly {@link proto.Msg_CreatRoleReq.verify|verify} messages.
         * @param m Msg_CreatRoleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreatRoleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreatRoleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreatRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreatRoleReq;
    }

    /** Properties of a Msg_CreatRoleRsp. */
    interface IMsg_CreatRoleRsp {

        /** Msg_CreatRoleRsp result */
        result?: (proto.Msg_CreatRoleRsp.ErrorCode|null);
    }

    /** Represents a Msg_CreatRoleRsp. */
    class Msg_CreatRoleRsp implements IMsg_CreatRoleRsp {

        /**
         * Constructs a new Msg_CreatRoleRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreatRoleRsp);

        /** Msg_CreatRoleRsp result. */
        public result: proto.Msg_CreatRoleRsp.ErrorCode;

        /**
         * Encodes the specified Msg_CreatRoleRsp message. Does not implicitly {@link proto.Msg_CreatRoleRsp.verify|verify} messages.
         * @param m Msg_CreatRoleRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreatRoleRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreatRoleRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreatRoleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreatRoleRsp;
    }

    namespace Msg_CreatRoleRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            InvalidName = 1,
            DuplicatedName = 2,
            MaxRoleCount = 3
        }
    }

    /** Properties of a RankData. */
    interface IRankData {

        /** RankData score */
        score?: (number|null);

        /** RankData gotSocreRewardId */
        gotSocreRewardId?: (number[]|null);

        /** RankData historyMaxScore */
        historyMaxScore?: (number|null);

        /** RankData fightId */
        fightId?: (number|null);

        /** RankData buffEndUTC */
        buffEndUTC?: (number|null);

        /** RankData maxScore */
        maxScore?: (number|null);

        /** RankData oldScore */
        oldScore?: (number|null);

        /** RankData oldMaxScore */
        oldMaxScore?: (number|null);

        /** RankData isLastWin */
        isLastWin?: (boolean|null);

        /** RankData continuousWin */
        continuousWin?: (number|null);

        /** RankData continuousLose */
        continuousLose?: (number|null);

        /** RankData oldFakeRank */
        oldFakeRank?: (number|null);

        /** RankData scoreChangeTime */
        scoreChangeTime?: (number|null);

        /** RankData Matching */
        Matching?: (boolean|null);
    }

    /** Represents a RankData. */
    class RankData implements IRankData {

        /**
         * Constructs a new RankData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankData);

        /** RankData score. */
        public score: number;

        /** RankData gotSocreRewardId. */
        public gotSocreRewardId: number[];

        /** RankData historyMaxScore. */
        public historyMaxScore: number;

        /** RankData fightId. */
        public fightId: number;

        /** RankData buffEndUTC. */
        public buffEndUTC: number;

        /** RankData maxScore. */
        public maxScore: number;

        /** RankData oldScore. */
        public oldScore: number;

        /** RankData oldMaxScore. */
        public oldMaxScore: number;

        /** RankData isLastWin. */
        public isLastWin: boolean;

        /** RankData continuousWin. */
        public continuousWin: number;

        /** RankData continuousLose. */
        public continuousLose: number;

        /** RankData oldFakeRank. */
        public oldFakeRank: number;

        /** RankData scoreChangeTime. */
        public scoreChangeTime: number;

        /** RankData Matching. */
        public Matching: boolean;

        /**
         * Encodes the specified RankData message. Does not implicitly {@link proto.RankData.verify|verify} messages.
         * @param m RankData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankData;
    }

    /** Properties of a Msg_BossBoxInfoReq. */
    interface IMsg_BossBoxInfoReq {
    }

    /** Represents a Msg_BossBoxInfoReq. */
    class Msg_BossBoxInfoReq implements IMsg_BossBoxInfoReq {

        /**
         * Constructs a new Msg_BossBoxInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxInfoReq);

        /**
         * Encodes the specified Msg_BossBoxInfoReq message. Does not implicitly {@link proto.Msg_BossBoxInfoReq.verify|verify} messages.
         * @param m Msg_BossBoxInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxInfoReq;
    }

    /** Properties of a Msg_BossBoxInfoRsp. */
    interface IMsg_BossBoxInfoRsp {

        /** Msg_BossBoxInfoRsp data */
        data?: (proto.IBossBoxData|null);

        /** Msg_BossBoxInfoRsp nextDayUnLockLv */
        nextDayUnLockLv?: (number|null);
    }

    /** Represents a Msg_BossBoxInfoRsp. */
    class Msg_BossBoxInfoRsp implements IMsg_BossBoxInfoRsp {

        /**
         * Constructs a new Msg_BossBoxInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxInfoRsp);

        /** Msg_BossBoxInfoRsp data. */
        public data?: (proto.IBossBoxData|null);

        /** Msg_BossBoxInfoRsp nextDayUnLockLv. */
        public nextDayUnLockLv: number;

        /**
         * Encodes the specified Msg_BossBoxInfoRsp message. Does not implicitly {@link proto.Msg_BossBoxInfoRsp.verify|verify} messages.
         * @param m Msg_BossBoxInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxInfoRsp;
    }

    /** Properties of a Msg_BossBoxUnlockLvReq. */
    interface IMsg_BossBoxUnlockLvReq {

        /** Msg_BossBoxUnlockLvReq lv */
        lv?: (number|null);
    }

    /** Represents a Msg_BossBoxUnlockLvReq. */
    class Msg_BossBoxUnlockLvReq implements IMsg_BossBoxUnlockLvReq {

        /**
         * Constructs a new Msg_BossBoxUnlockLvReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxUnlockLvReq);

        /** Msg_BossBoxUnlockLvReq lv. */
        public lv: number;

        /**
         * Encodes the specified Msg_BossBoxUnlockLvReq message. Does not implicitly {@link proto.Msg_BossBoxUnlockLvReq.verify|verify} messages.
         * @param m Msg_BossBoxUnlockLvReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxUnlockLvReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxUnlockLvReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxUnlockLvReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxUnlockLvReq;
    }

    /** Properties of a Msg_BossBoxUnlockLvRsp. */
    interface IMsg_BossBoxUnlockLvRsp {

        /** Msg_BossBoxUnlockLvRsp result */
        result?: (proto.Msg_BossBoxUnlockLvRsp.ErrorCode|null);

        /** Msg_BossBoxUnlockLvRsp lv */
        lv?: (number|null);
    }

    /** Represents a Msg_BossBoxUnlockLvRsp. */
    class Msg_BossBoxUnlockLvRsp implements IMsg_BossBoxUnlockLvRsp {

        /**
         * Constructs a new Msg_BossBoxUnlockLvRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxUnlockLvRsp);

        /** Msg_BossBoxUnlockLvRsp result. */
        public result: proto.Msg_BossBoxUnlockLvRsp.ErrorCode;

        /** Msg_BossBoxUnlockLvRsp lv. */
        public lv: number;

        /**
         * Encodes the specified Msg_BossBoxUnlockLvRsp message. Does not implicitly {@link proto.Msg_BossBoxUnlockLvRsp.verify|verify} messages.
         * @param m Msg_BossBoxUnlockLvRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxUnlockLvRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxUnlockLvRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxUnlockLvRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxUnlockLvRsp;
    }

    namespace Msg_BossBoxUnlockLvRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            MaxLevel = 1,
            DiamondLack = 2,
            LvError = 3,
            TimeLimit = 4
        }
    }

    /** Properties of a Msg_BossBoxGetLvRewardReq. */
    interface IMsg_BossBoxGetLvRewardReq {

        /** Msg_BossBoxGetLvRewardReq bossBoxId */
        bossBoxId?: (number|null);

        /** Msg_BossBoxGetLvRewardReq optionalId */
        optionalId?: (number|null);
    }

    /** Represents a Msg_BossBoxGetLvRewardReq. */
    class Msg_BossBoxGetLvRewardReq implements IMsg_BossBoxGetLvRewardReq {

        /**
         * Constructs a new Msg_BossBoxGetLvRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxGetLvRewardReq);

        /** Msg_BossBoxGetLvRewardReq bossBoxId. */
        public bossBoxId: number;

        /** Msg_BossBoxGetLvRewardReq optionalId. */
        public optionalId: number;

        /**
         * Encodes the specified Msg_BossBoxGetLvRewardReq message. Does not implicitly {@link proto.Msg_BossBoxGetLvRewardReq.verify|verify} messages.
         * @param m Msg_BossBoxGetLvRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxGetLvRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxGetLvRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxGetLvRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxGetLvRewardReq;
    }

    /** Properties of a Msg_BossBoxGetLvRewardRsp. */
    interface IMsg_BossBoxGetLvRewardRsp {

        /** Msg_BossBoxGetLvRewardRsp result */
        result?: (proto.Msg_BossBoxGetLvRewardRsp.ErrorCode|null);

        /** Msg_BossBoxGetLvRewardRsp bossBoxId */
        bossBoxId?: (number|null);

        /** Msg_BossBoxGetLvRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BossBoxGetLvRewardRsp. */
    class Msg_BossBoxGetLvRewardRsp implements IMsg_BossBoxGetLvRewardRsp {

        /**
         * Constructs a new Msg_BossBoxGetLvRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BossBoxGetLvRewardRsp);

        /** Msg_BossBoxGetLvRewardRsp result. */
        public result: proto.Msg_BossBoxGetLvRewardRsp.ErrorCode;

        /** Msg_BossBoxGetLvRewardRsp bossBoxId. */
        public bossBoxId: number;

        /** Msg_BossBoxGetLvRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BossBoxGetLvRewardRsp message. Does not implicitly {@link proto.Msg_BossBoxGetLvRewardRsp.verify|verify} messages.
         * @param m Msg_BossBoxGetLvRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BossBoxGetLvRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BossBoxGetLvRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BossBoxGetLvRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BossBoxGetLvRewardRsp;
    }

    namespace Msg_BossBoxGetLvRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyGotReward = 1,
            LevelNotEnough = 2,
            LevleIsLock = 3,
            OperatorFailed = 4
        }
    }

    /** Properties of a BossBoxData. */
    interface IBossBoxData {

        /** BossBoxData level */
        level?: (number|null);

        /** BossBoxData exp */
        exp?: (number|null);

        /** BossBoxData gotBossBoxRewardLevels */
        gotBossBoxRewardLevels?: (number[]|null);

        /** BossBoxData gotBossBoxVipRewardLevels */
        gotBossBoxVipRewardLevels?: (number[]|null);
    }

    /** Represents a BossBoxData. */
    class BossBoxData implements IBossBoxData {

        /**
         * Constructs a new BossBoxData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBossBoxData);

        /** BossBoxData level. */
        public level: number;

        /** BossBoxData exp. */
        public exp: number;

        /** BossBoxData gotBossBoxRewardLevels. */
        public gotBossBoxRewardLevels: number[];

        /** BossBoxData gotBossBoxVipRewardLevels. */
        public gotBossBoxVipRewardLevels: number[];

        /**
         * Encodes the specified BossBoxData message. Does not implicitly {@link proto.BossBoxData.verify|verify} messages.
         * @param m BossBoxData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBossBoxData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BossBoxData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BossBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BossBoxData;
    }

    /** Properties of a CooperateBoxData. */
    interface ICooperateBoxData {

        /** CooperateBoxData progress */
        progress?: (number|null);
    }

    /** Represents a CooperateBoxData. */
    class CooperateBoxData implements ICooperateBoxData {

        /**
         * Constructs a new CooperateBoxData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICooperateBoxData);

        /** CooperateBoxData progress. */
        public progress: number;

        /**
         * Encodes the specified CooperateBoxData message. Does not implicitly {@link proto.CooperateBoxData.verify|verify} messages.
         * @param m CooperateBoxData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICooperateBoxData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CooperateBoxData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CooperateBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CooperateBoxData;
    }

    /** Properties of a Msg_SyncRole. */
    interface IMsg_SyncRole {

        /** Msg_SyncRole data */
        data?: (proto.IRoleData|null);
    }

    /** Represents a Msg_SyncRole. */
    class Msg_SyncRole implements IMsg_SyncRole {

        /**
         * Constructs a new Msg_SyncRole.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRole);

        /** Msg_SyncRole data. */
        public data?: (proto.IRoleData|null);

        /**
         * Encodes the specified Msg_SyncRole message. Does not implicitly {@link proto.Msg_SyncRole.verify|verify} messages.
         * @param m Msg_SyncRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRole;
    }

    /** Properties of a Msg_ChangeDecksReq. */
    interface IMsg_ChangeDecksReq {

        /** Msg_ChangeDecksReq deckIndex */
        deckIndex?: (number|null);

        /** Msg_ChangeDecksReq cardIndex */
        cardIndex?: (number|null);

        /** Msg_ChangeDecksReq cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_ChangeDecksReq. */
    class Msg_ChangeDecksReq implements IMsg_ChangeDecksReq {

        /**
         * Constructs a new Msg_ChangeDecksReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeDecksReq);

        /** Msg_ChangeDecksReq deckIndex. */
        public deckIndex: number;

        /** Msg_ChangeDecksReq cardIndex. */
        public cardIndex: number;

        /** Msg_ChangeDecksReq cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_ChangeDecksReq message. Does not implicitly {@link proto.Msg_ChangeDecksReq.verify|verify} messages.
         * @param m Msg_ChangeDecksReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeDecksReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeDecksReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeDecksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeDecksReq;
    }

    /** Properties of a Msg_ChangeDecksRsp. */
    interface IMsg_ChangeDecksRsp {

        /** Msg_ChangeDecksRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_ChangeDecksRsp deckIndex */
        deckIndex?: (number|null);

        /** Msg_ChangeDecksRsp deckItems */
        deckItems?: (string[]|null);
    }

    /** Represents a Msg_ChangeDecksRsp. */
    class Msg_ChangeDecksRsp implements IMsg_ChangeDecksRsp {

        /**
         * Constructs a new Msg_ChangeDecksRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeDecksRsp);

        /** Msg_ChangeDecksRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_ChangeDecksRsp deckIndex. */
        public deckIndex: number;

        /** Msg_ChangeDecksRsp deckItems. */
        public deckItems: string[];

        /**
         * Encodes the specified Msg_ChangeDecksRsp message. Does not implicitly {@link proto.Msg_ChangeDecksRsp.verify|verify} messages.
         * @param m Msg_ChangeDecksRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeDecksRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeDecksRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeDecksRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeDecksRsp;
    }

    /** Properties of a Msg_SetLordReq. */
    interface IMsg_SetLordReq {

        /** Msg_SetLordReq deckIndex */
        deckIndex?: (number|null);

        /** Msg_SetLordReq cardUUID */
        cardUUID?: (string|null);
    }

    /** Represents a Msg_SetLordReq. */
    class Msg_SetLordReq implements IMsg_SetLordReq {

        /**
         * Constructs a new Msg_SetLordReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetLordReq);

        /** Msg_SetLordReq deckIndex. */
        public deckIndex: number;

        /** Msg_SetLordReq cardUUID. */
        public cardUUID: string;

        /**
         * Encodes the specified Msg_SetLordReq message. Does not implicitly {@link proto.Msg_SetLordReq.verify|verify} messages.
         * @param m Msg_SetLordReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetLordReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetLordReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetLordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetLordReq;
    }

    /** Properties of a Msg_SetLordRsp. */
    interface IMsg_SetLordRsp {

        /** Msg_SetLordRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_SetLordRsp deckIndex */
        deckIndex?: (number|null);

        /** Msg_SetLordRsp lord */
        lord?: (string|null);
    }

    /** Represents a Msg_SetLordRsp. */
    class Msg_SetLordRsp implements IMsg_SetLordRsp {

        /**
         * Constructs a new Msg_SetLordRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetLordRsp);

        /** Msg_SetLordRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_SetLordRsp deckIndex. */
        public deckIndex: number;

        /** Msg_SetLordRsp lord. */
        public lord: string;

        /**
         * Encodes the specified Msg_SetLordRsp message. Does not implicitly {@link proto.Msg_SetLordRsp.verify|verify} messages.
         * @param m Msg_SetLordRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetLordRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetLordRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetLordRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetLordRsp;
    }

    /** Properties of a Msg_SetTalentReq. */
    interface IMsg_SetTalentReq {

        /** Msg_SetTalentReq deckIndex */
        deckIndex?: (number|null);

        /** Msg_SetTalentReq talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a Msg_SetTalentReq. */
    class Msg_SetTalentReq implements IMsg_SetTalentReq {

        /**
         * Constructs a new Msg_SetTalentReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetTalentReq);

        /** Msg_SetTalentReq deckIndex. */
        public deckIndex: number;

        /** Msg_SetTalentReq talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified Msg_SetTalentReq message. Does not implicitly {@link proto.Msg_SetTalentReq.verify|verify} messages.
         * @param m Msg_SetTalentReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetTalentReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetTalentReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetTalentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetTalentReq;
    }

    /** Properties of a Msg_SetTalentRsp. */
    interface IMsg_SetTalentRsp {

        /** Msg_SetTalentRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_SetTalentRsp deckIndex */
        deckIndex?: (number|null);

        /** Msg_SetTalentRsp talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a Msg_SetTalentRsp. */
    class Msg_SetTalentRsp implements IMsg_SetTalentRsp {

        /**
         * Constructs a new Msg_SetTalentRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetTalentRsp);

        /** Msg_SetTalentRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_SetTalentRsp deckIndex. */
        public deckIndex: number;

        /** Msg_SetTalentRsp talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified Msg_SetTalentRsp message. Does not implicitly {@link proto.Msg_SetTalentRsp.verify|verify} messages.
         * @param m Msg_SetTalentRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetTalentRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetTalentRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetTalentRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetTalentRsp;
    }

    /** Properties of a Msg_OpenRankRewardReq. */
    interface IMsg_OpenRankRewardReq {
    }

    /** Represents a Msg_OpenRankRewardReq. */
    class Msg_OpenRankRewardReq implements IMsg_OpenRankRewardReq {

        /**
         * Constructs a new Msg_OpenRankRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OpenRankRewardReq);

        /**
         * Encodes the specified Msg_OpenRankRewardReq message. Does not implicitly {@link proto.Msg_OpenRankRewardReq.verify|verify} messages.
         * @param m Msg_OpenRankRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OpenRankRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OpenRankRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OpenRankRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OpenRankRewardReq;
    }

    /** Properties of a Msg_OpenRankRewardRsp. */
    interface IMsg_OpenRankRewardRsp {

        /** Msg_OpenRankRewardRsp rankData */
        rankData?: (proto.IRankData|null);

        /** Msg_OpenRankRewardRsp fightId */
        fightId?: (number|null);

        /** Msg_OpenRankRewardRsp boxId */
        boxId?: (number|null);

        /** Msg_OpenRankRewardRsp seasonBoxRewards */
        seasonBoxRewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_OpenRankRewardRsp isDemonPass */
        isDemonPass?: (boolean|null);
    }

    /** Represents a Msg_OpenRankRewardRsp. */
    class Msg_OpenRankRewardRsp implements IMsg_OpenRankRewardRsp {

        /**
         * Constructs a new Msg_OpenRankRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OpenRankRewardRsp);

        /** Msg_OpenRankRewardRsp rankData. */
        public rankData?: (proto.IRankData|null);

        /** Msg_OpenRankRewardRsp fightId. */
        public fightId: number;

        /** Msg_OpenRankRewardRsp boxId. */
        public boxId: number;

        /** Msg_OpenRankRewardRsp seasonBoxRewards. */
        public seasonBoxRewards: proto.IRewardSimpleInfo[];

        /** Msg_OpenRankRewardRsp isDemonPass. */
        public isDemonPass: boolean;

        /**
         * Encodes the specified Msg_OpenRankRewardRsp message. Does not implicitly {@link proto.Msg_OpenRankRewardRsp.verify|verify} messages.
         * @param m Msg_OpenRankRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OpenRankRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OpenRankRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OpenRankRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OpenRankRewardRsp;
    }

    /** Properties of a Msg_GetRankScoreRewardReq. */
    interface IMsg_GetRankScoreRewardReq {

        /** Msg_GetRankScoreRewardReq rewardId */
        rewardId?: (number|null);

        /** Msg_GetRankScoreRewardReq itemIdx */
        itemIdx?: (number|null);
    }

    /** Represents a Msg_GetRankScoreRewardReq. */
    class Msg_GetRankScoreRewardReq implements IMsg_GetRankScoreRewardReq {

        /**
         * Constructs a new Msg_GetRankScoreRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankScoreRewardReq);

        /** Msg_GetRankScoreRewardReq rewardId. */
        public rewardId: number;

        /** Msg_GetRankScoreRewardReq itemIdx. */
        public itemIdx: number;

        /**
         * Encodes the specified Msg_GetRankScoreRewardReq message. Does not implicitly {@link proto.Msg_GetRankScoreRewardReq.verify|verify} messages.
         * @param m Msg_GetRankScoreRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankScoreRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankScoreRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankScoreRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankScoreRewardReq;
    }

    /** Properties of a Msg_GetRankScoreRewardRsp. */
    interface IMsg_GetRankScoreRewardRsp {

        /** Msg_GetRankScoreRewardRsp result */
        result?: (proto.Msg_GetRankScoreRewardRsp.ErrorCode|null);

        /** Msg_GetRankScoreRewardRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_GetRankScoreRewardRsp rewardId */
        rewardId?: (number|null);
    }

    /** Represents a Msg_GetRankScoreRewardRsp. */
    class Msg_GetRankScoreRewardRsp implements IMsg_GetRankScoreRewardRsp {

        /**
         * Constructs a new Msg_GetRankScoreRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankScoreRewardRsp);

        /** Msg_GetRankScoreRewardRsp result. */
        public result: proto.Msg_GetRankScoreRewardRsp.ErrorCode;

        /** Msg_GetRankScoreRewardRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_GetRankScoreRewardRsp rewardId. */
        public rewardId: number;

        /**
         * Encodes the specified Msg_GetRankScoreRewardRsp message. Does not implicitly {@link proto.Msg_GetRankScoreRewardRsp.verify|verify} messages.
         * @param m Msg_GetRankScoreRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankScoreRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankScoreRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankScoreRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankScoreRewardRsp;
    }

    namespace Msg_GetRankScoreRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyGotReward = 1,
            ScoreNotEnough = 2,
            OperatorFailed = 3
        }
    }

    /** Properties of a Msg_GetBossBoxRewardReq. */
    interface IMsg_GetBossBoxRewardReq {

        /** Msg_GetBossBoxRewardReq boxLevel */
        boxLevel?: (number|null);

        /** Msg_GetBossBoxRewardReq isVipReward */
        isVipReward?: (boolean|null);
    }

    /** Represents a Msg_GetBossBoxRewardReq. */
    class Msg_GetBossBoxRewardReq implements IMsg_GetBossBoxRewardReq {

        /**
         * Constructs a new Msg_GetBossBoxRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBossBoxRewardReq);

        /** Msg_GetBossBoxRewardReq boxLevel. */
        public boxLevel: number;

        /** Msg_GetBossBoxRewardReq isVipReward. */
        public isVipReward: boolean;

        /**
         * Encodes the specified Msg_GetBossBoxRewardReq message. Does not implicitly {@link proto.Msg_GetBossBoxRewardReq.verify|verify} messages.
         * @param m Msg_GetBossBoxRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBossBoxRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBossBoxRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBossBoxRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBossBoxRewardReq;
    }

    /** Properties of a Msg_GetBossBoxRewardRsp. */
    interface IMsg_GetBossBoxRewardRsp {

        /** Msg_GetBossBoxRewardRsp result */
        result?: (proto.Msg_GetBossBoxRewardRsp.ErrorCode|null);

        /** Msg_GetBossBoxRewardRsp rewards */
        rewards?: (proto.IItemSimpleInfo[]|null);

        /** Msg_GetBossBoxRewardRsp boxLevel */
        boxLevel?: (number|null);

        /** Msg_GetBossBoxRewardRsp isVipReward */
        isVipReward?: (boolean|null);
    }

    /** Represents a Msg_GetBossBoxRewardRsp. */
    class Msg_GetBossBoxRewardRsp implements IMsg_GetBossBoxRewardRsp {

        /**
         * Constructs a new Msg_GetBossBoxRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBossBoxRewardRsp);

        /** Msg_GetBossBoxRewardRsp result. */
        public result: proto.Msg_GetBossBoxRewardRsp.ErrorCode;

        /** Msg_GetBossBoxRewardRsp rewards. */
        public rewards: proto.IItemSimpleInfo[];

        /** Msg_GetBossBoxRewardRsp boxLevel. */
        public boxLevel: number;

        /** Msg_GetBossBoxRewardRsp isVipReward. */
        public isVipReward: boolean;

        /**
         * Encodes the specified Msg_GetBossBoxRewardRsp message. Does not implicitly {@link proto.Msg_GetBossBoxRewardRsp.verify|verify} messages.
         * @param m Msg_GetBossBoxRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBossBoxRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBossBoxRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBossBoxRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBossBoxRewardRsp;
    }

    namespace Msg_GetBossBoxRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyGotReward = 1,
            LevelNotEnough = 2,
            OperatorFailed = 3
        }
    }

    /** Properties of a Msg_CardLevelUpReq. */
    interface IMsg_CardLevelUpReq {

        /** Msg_CardLevelUpReq cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_CardLevelUpReq. */
    class Msg_CardLevelUpReq implements IMsg_CardLevelUpReq {

        /**
         * Constructs a new Msg_CardLevelUpReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CardLevelUpReq);

        /** Msg_CardLevelUpReq cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_CardLevelUpReq message. Does not implicitly {@link proto.Msg_CardLevelUpReq.verify|verify} messages.
         * @param m Msg_CardLevelUpReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CardLevelUpReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CardLevelUpReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CardLevelUpReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CardLevelUpReq;
    }

    /** Properties of a Msg_CardLevelUpRsp. */
    interface IMsg_CardLevelUpRsp {

        /** Msg_CardLevelUpRsp result */
        result?: (proto.Msg_CardLevelUpRsp.ErrorCode|null);

        /** Msg_CardLevelUpRsp cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_CardLevelUpRsp. */
    class Msg_CardLevelUpRsp implements IMsg_CardLevelUpRsp {

        /**
         * Constructs a new Msg_CardLevelUpRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CardLevelUpRsp);

        /** Msg_CardLevelUpRsp result. */
        public result: proto.Msg_CardLevelUpRsp.ErrorCode;

        /** Msg_CardLevelUpRsp cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_CardLevelUpRsp message. Does not implicitly {@link proto.Msg_CardLevelUpRsp.verify|verify} messages.
         * @param m Msg_CardLevelUpRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CardLevelUpRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CardLevelUpRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CardLevelUpRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CardLevelUpRsp;
    }

    namespace Msg_CardLevelUpRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NotEnoughMoney = 1,
            NotEnoughPiece = 2,
            MaxLevel = 3,
            OperatorFailed = 4
        }
    }

    /** Properties of a Msg_ChangeIndexCardReq. */
    interface IMsg_ChangeIndexCardReq {

        /** Msg_ChangeIndexCardReq indexCardId */
        indexCardId?: (number|null);
    }

    /** Represents a Msg_ChangeIndexCardReq. */
    class Msg_ChangeIndexCardReq implements IMsg_ChangeIndexCardReq {

        /**
         * Constructs a new Msg_ChangeIndexCardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeIndexCardReq);

        /** Msg_ChangeIndexCardReq indexCardId. */
        public indexCardId: number;

        /**
         * Encodes the specified Msg_ChangeIndexCardReq message. Does not implicitly {@link proto.Msg_ChangeIndexCardReq.verify|verify} messages.
         * @param m Msg_ChangeIndexCardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeIndexCardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeIndexCardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeIndexCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeIndexCardReq;
    }

    /** Properties of a Msg_ChangeIndexCardRsp. */
    interface IMsg_ChangeIndexCardRsp {

        /** Msg_ChangeIndexCardRsp result */
        result?: (proto.Msg_ChangeIndexCardRsp.ErrorCode|null);

        /** Msg_ChangeIndexCardRsp indexCardId */
        indexCardId?: (number|null);
    }

    /** Represents a Msg_ChangeIndexCardRsp. */
    class Msg_ChangeIndexCardRsp implements IMsg_ChangeIndexCardRsp {

        /**
         * Constructs a new Msg_ChangeIndexCardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeIndexCardRsp);

        /** Msg_ChangeIndexCardRsp result. */
        public result: proto.Msg_ChangeIndexCardRsp.ErrorCode;

        /** Msg_ChangeIndexCardRsp indexCardId. */
        public indexCardId: number;

        /**
         * Encodes the specified Msg_ChangeIndexCardRsp message. Does not implicitly {@link proto.Msg_ChangeIndexCardRsp.verify|verify} messages.
         * @param m Msg_ChangeIndexCardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeIndexCardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeIndexCardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeIndexCardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeIndexCardRsp;
    }

    namespace Msg_ChangeIndexCardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            CardNotExist = 1,
            RepeatedChange = 2,
            OperatorFailed = 3
        }
    }

    /** Properties of a Msg_GetCooperateBoxRewardReq. */
    interface IMsg_GetCooperateBoxRewardReq {
    }

    /** Represents a Msg_GetCooperateBoxRewardReq. */
    class Msg_GetCooperateBoxRewardReq implements IMsg_GetCooperateBoxRewardReq {

        /**
         * Constructs a new Msg_GetCooperateBoxRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCooperateBoxRewardReq);

        /**
         * Encodes the specified Msg_GetCooperateBoxRewardReq message. Does not implicitly {@link proto.Msg_GetCooperateBoxRewardReq.verify|verify} messages.
         * @param m Msg_GetCooperateBoxRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCooperateBoxRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCooperateBoxRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCooperateBoxRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCooperateBoxRewardReq;
    }

    /** Properties of a Msg_GetCooperateBoxRewardRsp. */
    interface IMsg_GetCooperateBoxRewardRsp {

        /** Msg_GetCooperateBoxRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetCooperateBoxRewardRsp rewards */
        rewards?: (proto.IItemSimpleInfo[]|null);
    }

    /** Represents a Msg_GetCooperateBoxRewardRsp. */
    class Msg_GetCooperateBoxRewardRsp implements IMsg_GetCooperateBoxRewardRsp {

        /**
         * Constructs a new Msg_GetCooperateBoxRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCooperateBoxRewardRsp);

        /** Msg_GetCooperateBoxRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetCooperateBoxRewardRsp rewards. */
        public rewards: proto.IItemSimpleInfo[];

        /**
         * Encodes the specified Msg_GetCooperateBoxRewardRsp message. Does not implicitly {@link proto.Msg_GetCooperateBoxRewardRsp.verify|verify} messages.
         * @param m Msg_GetCooperateBoxRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCooperateBoxRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCooperateBoxRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCooperateBoxRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCooperateBoxRewardRsp;
    }

    /** Properties of a Msg_UpdateItemData. */
    interface IMsg_UpdateItemData {

        /** Msg_UpdateItemData updateItems */
        updateItems?: (proto.IItemData[]|null);
    }

    /** Represents a Msg_UpdateItemData. */
    class Msg_UpdateItemData implements IMsg_UpdateItemData {

        /**
         * Constructs a new Msg_UpdateItemData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateItemData);

        /** Msg_UpdateItemData updateItems. */
        public updateItems: proto.IItemData[];

        /**
         * Encodes the specified Msg_UpdateItemData message. Does not implicitly {@link proto.Msg_UpdateItemData.verify|verify} messages.
         * @param m Msg_UpdateItemData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateItemData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateItemData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateItemData;
    }

    /** Properties of a Msg_RemoveItemData. */
    interface IMsg_RemoveItemData {

        /** Msg_RemoveItemData removeItemUuids */
        removeItemUuids?: (string[]|null);
    }

    /** Represents a Msg_RemoveItemData. */
    class Msg_RemoveItemData implements IMsg_RemoveItemData {

        /**
         * Constructs a new Msg_RemoveItemData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveItemData);

        /** Msg_RemoveItemData removeItemUuids. */
        public removeItemUuids: string[];

        /**
         * Encodes the specified Msg_RemoveItemData message. Does not implicitly {@link proto.Msg_RemoveItemData.verify|verify} messages.
         * @param m Msg_RemoveItemData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveItemData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveItemData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveItemData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveItemData;
    }

    /** Properties of a Msg_SyncRoleGold. */
    interface IMsg_SyncRoleGold {

        /** Msg_SyncRoleGold gold */
        gold?: (number|null);
    }

    /** Represents a Msg_SyncRoleGold. */
    class Msg_SyncRoleGold implements IMsg_SyncRoleGold {

        /**
         * Constructs a new Msg_SyncRoleGold.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRoleGold);

        /** Msg_SyncRoleGold gold. */
        public gold: number;

        /**
         * Encodes the specified Msg_SyncRoleGold message. Does not implicitly {@link proto.Msg_SyncRoleGold.verify|verify} messages.
         * @param m Msg_SyncRoleGold message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRoleGold, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRoleGold message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRoleGold
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRoleGold;
    }

    /** Properties of a Msg_SyncRoleDiamond. */
    interface IMsg_SyncRoleDiamond {

        /** Msg_SyncRoleDiamond diamond */
        diamond?: (number|null);
    }

    /** Represents a Msg_SyncRoleDiamond. */
    class Msg_SyncRoleDiamond implements IMsg_SyncRoleDiamond {

        /**
         * Constructs a new Msg_SyncRoleDiamond.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRoleDiamond);

        /** Msg_SyncRoleDiamond diamond. */
        public diamond: number;

        /**
         * Encodes the specified Msg_SyncRoleDiamond message. Does not implicitly {@link proto.Msg_SyncRoleDiamond.verify|verify} messages.
         * @param m Msg_SyncRoleDiamond message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRoleDiamond, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRoleDiamond message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRoleDiamond
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRoleDiamond;
    }

    /** Properties of a Msg_SyncRoleExpAndLevel. */
    interface IMsg_SyncRoleExpAndLevel {

        /** Msg_SyncRoleExpAndLevel exp */
        exp?: (number|null);

        /** Msg_SyncRoleExpAndLevel level */
        level?: (number|null);
    }

    /** Represents a Msg_SyncRoleExpAndLevel. */
    class Msg_SyncRoleExpAndLevel implements IMsg_SyncRoleExpAndLevel {

        /**
         * Constructs a new Msg_SyncRoleExpAndLevel.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRoleExpAndLevel);

        /** Msg_SyncRoleExpAndLevel exp. */
        public exp: number;

        /** Msg_SyncRoleExpAndLevel level. */
        public level: number;

        /**
         * Encodes the specified Msg_SyncRoleExpAndLevel message. Does not implicitly {@link proto.Msg_SyncRoleExpAndLevel.verify|verify} messages.
         * @param m Msg_SyncRoleExpAndLevel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRoleExpAndLevel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRoleExpAndLevel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRoleExpAndLevel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRoleExpAndLevel;
    }

    /** ShopGoodsType enum. */
    enum ShopGoodsType {
        Special = 0,
        Gold = 1,
        Diamond = 2,
        Emotion = 3
    }

    /** Properties of an EveryDaySpecialShop. */
    interface IEveryDaySpecialShop {

        /** EveryDaySpecialShop goods */
        goods?: (proto.IRewardSimpleInfo|null);

        /** EveryDaySpecialShop cost */
        cost?: (proto.IItemSimpleInfo|null);

        /** EveryDaySpecialShop leftBuyTimes */
        leftBuyTimes?: (number|null);
    }

    /** Represents an EveryDaySpecialShop. */
    class EveryDaySpecialShop implements IEveryDaySpecialShop {

        /**
         * Constructs a new EveryDaySpecialShop.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEveryDaySpecialShop);

        /** EveryDaySpecialShop goods. */
        public goods?: (proto.IRewardSimpleInfo|null);

        /** EveryDaySpecialShop cost. */
        public cost?: (proto.IItemSimpleInfo|null);

        /** EveryDaySpecialShop leftBuyTimes. */
        public leftBuyTimes: number;

        /**
         * Encodes the specified EveryDaySpecialShop message. Does not implicitly {@link proto.EveryDaySpecialShop.verify|verify} messages.
         * @param m EveryDaySpecialShop message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEveryDaySpecialShop, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EveryDaySpecialShop message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EveryDaySpecialShop
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EveryDaySpecialShop;
    }

    /** Properties of a ShopNormalGoods. */
    interface IShopNormalGoods {

        /** ShopNormalGoods goods */
        goods?: (proto.IRewardSimpleInfo|null);

        /** ShopNormalGoods cost */
        cost?: (proto.IItemSimpleInfo|null);
    }

    /** Represents a ShopNormalGoods. */
    class ShopNormalGoods implements IShopNormalGoods {

        /**
         * Constructs a new ShopNormalGoods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IShopNormalGoods);

        /** ShopNormalGoods goods. */
        public goods?: (proto.IRewardSimpleInfo|null);

        /** ShopNormalGoods cost. */
        public cost?: (proto.IItemSimpleInfo|null);

        /**
         * Encodes the specified ShopNormalGoods message. Does not implicitly {@link proto.ShopNormalGoods.verify|verify} messages.
         * @param m ShopNormalGoods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IShopNormalGoods, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopNormalGoods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopNormalGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ShopNormalGoods;
    }

    /** Properties of a ShopCashGoods. */
    interface IShopCashGoods {

        /** ShopCashGoods goods */
        goods?: (proto.IRewardSimpleInfo|null);

        /** ShopCashGoods cash */
        cash?: (number|null);

        /** ShopCashGoods bFirstRecharge */
        bFirstRecharge?: (boolean|null);

        /** ShopCashGoods rechargeID */
        rechargeID?: (number|null);

        /** ShopCashGoods cashFirstAdd */
        cashFirstAdd?: (number|null);

        /** ShopCashGoods cashAdd */
        cashAdd?: (number|null);
    }

    /** Represents a ShopCashGoods. */
    class ShopCashGoods implements IShopCashGoods {

        /**
         * Constructs a new ShopCashGoods.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IShopCashGoods);

        /** ShopCashGoods goods. */
        public goods?: (proto.IRewardSimpleInfo|null);

        /** ShopCashGoods cash. */
        public cash: number;

        /** ShopCashGoods bFirstRecharge. */
        public bFirstRecharge: boolean;

        /** ShopCashGoods rechargeID. */
        public rechargeID: number;

        /** ShopCashGoods cashFirstAdd. */
        public cashFirstAdd: number;

        /** ShopCashGoods cashAdd. */
        public cashAdd: number;

        /**
         * Encodes the specified ShopCashGoods message. Does not implicitly {@link proto.ShopCashGoods.verify|verify} messages.
         * @param m ShopCashGoods message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IShopCashGoods, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopCashGoods message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopCashGoods
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ShopCashGoods;
    }

    /** Properties of a ShopData. */
    interface IShopData {

        /** ShopData specialList */
        specialList?: (proto.IEveryDaySpecialShop[]|null);

        /** ShopData specialLastRefreshTime */
        specialLastRefreshTime?: (number|null);

        /** ShopData specialFreeRefreshLeftTimes */
        specialFreeRefreshLeftTimes?: (number|null);

        /** ShopData specialNextFreeRefreshTime */
        specialNextFreeRefreshTime?: (number|null);

        /** ShopData specialSixRefreshTimes */
        specialSixRefreshTimes?: (number|null);

        /** ShopData lastResetFirstChargeTime */
        lastResetFirstChargeTime?: (number|null);

        /** ShopData firstChargeRecord */
        firstChargeRecord?: (boolean[]|null);

        /** ShopData emotionList */
        emotionList?: (proto.IEmotionGoodsInfo[]|null);
    }

    /** Represents a ShopData. */
    class ShopData implements IShopData {

        /**
         * Constructs a new ShopData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IShopData);

        /** ShopData specialList. */
        public specialList: proto.IEveryDaySpecialShop[];

        /** ShopData specialLastRefreshTime. */
        public specialLastRefreshTime: number;

        /** ShopData specialFreeRefreshLeftTimes. */
        public specialFreeRefreshLeftTimes: number;

        /** ShopData specialNextFreeRefreshTime. */
        public specialNextFreeRefreshTime: number;

        /** ShopData specialSixRefreshTimes. */
        public specialSixRefreshTimes: number;

        /** ShopData lastResetFirstChargeTime. */
        public lastResetFirstChargeTime: number;

        /** ShopData firstChargeRecord. */
        public firstChargeRecord: boolean[];

        /** ShopData emotionList. */
        public emotionList: proto.IEmotionGoodsInfo[];

        /**
         * Encodes the specified ShopData message. Does not implicitly {@link proto.ShopData.verify|verify} messages.
         * @param m ShopData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IShopData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ShopData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ShopData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ShopData;
    }

    /** Properties of an EmotionGoodsInfo. */
    interface IEmotionGoodsInfo {

        /** EmotionGoodsInfo emotionID */
        emotionID?: (number|null);

        /** EmotionGoodsInfo bBought */
        bBought?: (boolean|null);
    }

    /** Represents an EmotionGoodsInfo. */
    class EmotionGoodsInfo implements IEmotionGoodsInfo {

        /**
         * Constructs a new EmotionGoodsInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEmotionGoodsInfo);

        /** EmotionGoodsInfo emotionID. */
        public emotionID: number;

        /** EmotionGoodsInfo bBought. */
        public bBought: boolean;

        /**
         * Encodes the specified EmotionGoodsInfo message. Does not implicitly {@link proto.EmotionGoodsInfo.verify|verify} messages.
         * @param m EmotionGoodsInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEmotionGoodsInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmotionGoodsInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EmotionGoodsInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EmotionGoodsInfo;
    }

    /** Properties of a Msg_GetShopInfoReq. */
    interface IMsg_GetShopInfoReq {
    }

    /** Represents a Msg_GetShopInfoReq. */
    class Msg_GetShopInfoReq implements IMsg_GetShopInfoReq {

        /**
         * Constructs a new Msg_GetShopInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetShopInfoReq);

        /**
         * Encodes the specified Msg_GetShopInfoReq message. Does not implicitly {@link proto.Msg_GetShopInfoReq.verify|verify} messages.
         * @param m Msg_GetShopInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetShopInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetShopInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetShopInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetShopInfoReq;
    }

    /** Properties of a Msg_GetShopInfoRsp. */
    interface IMsg_GetShopInfoRsp {

        /** Msg_GetShopInfoRsp commonList */
        commonList?: (proto.IShopNormalGoods[]|null);

        /** Msg_GetShopInfoRsp cashList */
        cashList?: (proto.IShopCashGoods[]|null);

        /** Msg_GetShopInfoRsp specialList */
        specialList?: (proto.IEveryDaySpecialShop[]|null);

        /** Msg_GetShopInfoRsp specialNextRefreshTime */
        specialNextRefreshTime?: (number|null);

        /** Msg_GetShopInfoRsp specialFreeRefreshLeftTimes */
        specialFreeRefreshLeftTimes?: (number|null);

        /** Msg_GetShopInfoRsp specialNextFreeRefreshTime */
        specialNextFreeRefreshTime?: (number|null);

        /** Msg_GetShopInfoRsp specialSixRefreshTimes */
        specialSixRefreshTimes?: (number|null);

        /** Msg_GetShopInfoRsp emotionList */
        emotionList?: (proto.IEmotionGoodsInfo[]|null);

        /** Msg_GetShopInfoRsp leftBuySuperBoxCount */
        leftBuySuperBoxCount?: (number|null);
    }

    /** Represents a Msg_GetShopInfoRsp. */
    class Msg_GetShopInfoRsp implements IMsg_GetShopInfoRsp {

        /**
         * Constructs a new Msg_GetShopInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetShopInfoRsp);

        /** Msg_GetShopInfoRsp commonList. */
        public commonList: proto.IShopNormalGoods[];

        /** Msg_GetShopInfoRsp cashList. */
        public cashList: proto.IShopCashGoods[];

        /** Msg_GetShopInfoRsp specialList. */
        public specialList: proto.IEveryDaySpecialShop[];

        /** Msg_GetShopInfoRsp specialNextRefreshTime. */
        public specialNextRefreshTime: number;

        /** Msg_GetShopInfoRsp specialFreeRefreshLeftTimes. */
        public specialFreeRefreshLeftTimes: number;

        /** Msg_GetShopInfoRsp specialNextFreeRefreshTime. */
        public specialNextFreeRefreshTime: number;

        /** Msg_GetShopInfoRsp specialSixRefreshTimes. */
        public specialSixRefreshTimes: number;

        /** Msg_GetShopInfoRsp emotionList. */
        public emotionList: proto.IEmotionGoodsInfo[];

        /** Msg_GetShopInfoRsp leftBuySuperBoxCount. */
        public leftBuySuperBoxCount: number;

        /**
         * Encodes the specified Msg_GetShopInfoRsp message. Does not implicitly {@link proto.Msg_GetShopInfoRsp.verify|verify} messages.
         * @param m Msg_GetShopInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetShopInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetShopInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetShopInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetShopInfoRsp;
    }

    /** Properties of a GiftBagCell. */
    interface IGiftBagCell {

        /** GiftBagCell GiftID */
        GiftID?: (number|null);

        /** GiftBagCell Price */
        Price?: (number|null);

        /** GiftBagCell BuyedTimes */
        BuyedTimes?: (number|null);

        /** GiftBagCell MaxBuyTimes */
        MaxBuyTimes?: (number|null);

        /** GiftBagCell Reward */
        Reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a GiftBagCell. */
    class GiftBagCell implements IGiftBagCell {

        /**
         * Constructs a new GiftBagCell.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGiftBagCell);

        /** GiftBagCell GiftID. */
        public GiftID: number;

        /** GiftBagCell Price. */
        public Price: number;

        /** GiftBagCell BuyedTimes. */
        public BuyedTimes: number;

        /** GiftBagCell MaxBuyTimes. */
        public MaxBuyTimes: number;

        /** GiftBagCell Reward. */
        public Reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified GiftBagCell message. Does not implicitly {@link proto.GiftBagCell.verify|verify} messages.
         * @param m GiftBagCell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGiftBagCell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftBagCell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GiftBagCell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GiftBagCell;
    }

    /** Properties of a DayGiftBagInfo. */
    interface IDayGiftBagInfo {

        /** DayGiftBagInfo GiftBags */
        GiftBags?: (proto.IGiftBagCell[]|null);

        /** DayGiftBagInfo ResetUTC */
        ResetUTC?: (number|null);

        /** DayGiftBagInfo AdvRefreshTimes */
        AdvRefreshTimes?: (number|null);
    }

    /** Represents a DayGiftBagInfo. */
    class DayGiftBagInfo implements IDayGiftBagInfo {

        /**
         * Constructs a new DayGiftBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDayGiftBagInfo);

        /** DayGiftBagInfo GiftBags. */
        public GiftBags: proto.IGiftBagCell[];

        /** DayGiftBagInfo ResetUTC. */
        public ResetUTC: number;

        /** DayGiftBagInfo AdvRefreshTimes. */
        public AdvRefreshTimes: number;

        /**
         * Encodes the specified DayGiftBagInfo message. Does not implicitly {@link proto.DayGiftBagInfo.verify|verify} messages.
         * @param m DayGiftBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDayGiftBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DayGiftBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DayGiftBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DayGiftBagInfo;
    }

    /** Properties of a WeekendGiftBagInfo. */
    interface IWeekendGiftBagInfo {

        /** WeekendGiftBagInfo GiftBags */
        GiftBags?: (proto.IGiftBagCell[]|null);

        /** WeekendGiftBagInfo ResetUTC */
        ResetUTC?: (number|null);
    }

    /** Represents a WeekendGiftBagInfo. */
    class WeekendGiftBagInfo implements IWeekendGiftBagInfo {

        /**
         * Constructs a new WeekendGiftBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IWeekendGiftBagInfo);

        /** WeekendGiftBagInfo GiftBags. */
        public GiftBags: proto.IGiftBagCell[];

        /** WeekendGiftBagInfo ResetUTC. */
        public ResetUTC: number;

        /**
         * Encodes the specified WeekendGiftBagInfo message. Does not implicitly {@link proto.WeekendGiftBagInfo.verify|verify} messages.
         * @param m WeekendGiftBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IWeekendGiftBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a WeekendGiftBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns WeekendGiftBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.WeekendGiftBagInfo;
    }

    /** Properties of an ExGratiaGiftBagInfo. */
    interface IExGratiaGiftBagInfo {

        /** ExGratiaGiftBagInfo GiftBags */
        GiftBags?: (proto.IGiftBagCell[]|null);

        /** ExGratiaGiftBagInfo EndTime */
        EndTime?: (number|null);
    }

    /** Represents an ExGratiaGiftBagInfo. */
    class ExGratiaGiftBagInfo implements IExGratiaGiftBagInfo {

        /**
         * Constructs a new ExGratiaGiftBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IExGratiaGiftBagInfo);

        /** ExGratiaGiftBagInfo GiftBags. */
        public GiftBags: proto.IGiftBagCell[];

        /** ExGratiaGiftBagInfo EndTime. */
        public EndTime: number;

        /**
         * Encodes the specified ExGratiaGiftBagInfo message. Does not implicitly {@link proto.ExGratiaGiftBagInfo.verify|verify} messages.
         * @param m ExGratiaGiftBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IExGratiaGiftBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExGratiaGiftBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExGratiaGiftBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ExGratiaGiftBagInfo;
    }

    /** Properties of a GiftBagData. */
    interface IGiftBagData {

        /** GiftBagData dailyGiftBag */
        dailyGiftBag?: (proto.IGiftBagCell[]|null);

        /** GiftBagData weekendGiftBag */
        weekendGiftBag?: (proto.IGiftBagCell[]|null);

        /** GiftBagData exGratiaGiftBag */
        exGratiaGiftBag?: (proto.IGiftBagCell[]|null);

        /** GiftBagData lastDailyRefreshTime */
        lastDailyRefreshTime?: (number|null);

        /** GiftBagData lastWeekendRefreshTime */
        lastWeekendRefreshTime?: (number|null);

        /** GiftBagData lastSaleOffGetTimestamp */
        lastSaleOffGetTimestamp?: (number|null);

        /** GiftBagData dailyGiftBagAdvRefreshTimes */
        dailyGiftBagAdvRefreshTimes?: (number|null);

        /** GiftBagData saleOffGiftBagEndTime */
        saleOffGiftBagEndTime?: (number|null);
    }

    /** Represents a GiftBagData. */
    class GiftBagData implements IGiftBagData {

        /**
         * Constructs a new GiftBagData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGiftBagData);

        /** GiftBagData dailyGiftBag. */
        public dailyGiftBag: proto.IGiftBagCell[];

        /** GiftBagData weekendGiftBag. */
        public weekendGiftBag: proto.IGiftBagCell[];

        /** GiftBagData exGratiaGiftBag. */
        public exGratiaGiftBag: proto.IGiftBagCell[];

        /** GiftBagData lastDailyRefreshTime. */
        public lastDailyRefreshTime: number;

        /** GiftBagData lastWeekendRefreshTime. */
        public lastWeekendRefreshTime: number;

        /** GiftBagData lastSaleOffGetTimestamp. */
        public lastSaleOffGetTimestamp: number;

        /** GiftBagData dailyGiftBagAdvRefreshTimes. */
        public dailyGiftBagAdvRefreshTimes: number;

        /** GiftBagData saleOffGiftBagEndTime. */
        public saleOffGiftBagEndTime: number;

        /**
         * Encodes the specified GiftBagData message. Does not implicitly {@link proto.GiftBagData.verify|verify} messages.
         * @param m GiftBagData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGiftBagData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftBagData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GiftBagData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GiftBagData;
    }

    /** Properties of a Msg_GetGiftBagReq. */
    interface IMsg_GetGiftBagReq {
    }

    /** Represents a Msg_GetGiftBagReq. */
    class Msg_GetGiftBagReq implements IMsg_GetGiftBagReq {

        /**
         * Constructs a new Msg_GetGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGiftBagReq);

        /**
         * Encodes the specified Msg_GetGiftBagReq message. Does not implicitly {@link proto.Msg_GetGiftBagReq.verify|verify} messages.
         * @param m Msg_GetGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGiftBagReq;
    }

    /** Properties of a Msg_GetGiftBagRsp. */
    interface IMsg_GetGiftBagRsp {

        /** Msg_GetGiftBagRsp dayGiftBag */
        dayGiftBag?: (proto.IDayGiftBagInfo|null);

        /** Msg_GetGiftBagRsp weekendGiftBag */
        weekendGiftBag?: (proto.IWeekendGiftBagInfo|null);

        /** Msg_GetGiftBagRsp exGratiaGiftBag */
        exGratiaGiftBag?: (proto.IExGratiaGiftBagInfo|null);
    }

    /** Represents a Msg_GetGiftBagRsp. */
    class Msg_GetGiftBagRsp implements IMsg_GetGiftBagRsp {

        /**
         * Constructs a new Msg_GetGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGiftBagRsp);

        /** Msg_GetGiftBagRsp dayGiftBag. */
        public dayGiftBag?: (proto.IDayGiftBagInfo|null);

        /** Msg_GetGiftBagRsp weekendGiftBag. */
        public weekendGiftBag?: (proto.IWeekendGiftBagInfo|null);

        /** Msg_GetGiftBagRsp exGratiaGiftBag. */
        public exGratiaGiftBag?: (proto.IExGratiaGiftBagInfo|null);

        /**
         * Encodes the specified Msg_GetGiftBagRsp message. Does not implicitly {@link proto.Msg_GetGiftBagRsp.verify|verify} messages.
         * @param m Msg_GetGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGiftBagRsp;
    }

    /** Properties of a Msg_RefreshDayGiftBagReq. */
    interface IMsg_RefreshDayGiftBagReq {

        /** Msg_RefreshDayGiftBagReq bAVDRefresh */
        bAVDRefresh?: (boolean|null);
    }

    /** Represents a Msg_RefreshDayGiftBagReq. */
    class Msg_RefreshDayGiftBagReq implements IMsg_RefreshDayGiftBagReq {

        /**
         * Constructs a new Msg_RefreshDayGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshDayGiftBagReq);

        /** Msg_RefreshDayGiftBagReq bAVDRefresh. */
        public bAVDRefresh: boolean;

        /**
         * Encodes the specified Msg_RefreshDayGiftBagReq message. Does not implicitly {@link proto.Msg_RefreshDayGiftBagReq.verify|verify} messages.
         * @param m Msg_RefreshDayGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshDayGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshDayGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshDayGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshDayGiftBagReq;
    }

    /** Properties of a Msg_RefreshDayGiftBagRsp. */
    interface IMsg_RefreshDayGiftBagRsp {

        /** Msg_RefreshDayGiftBagRsp result */
        result?: (proto.Msg_RefreshDayGiftBagRsp.ErrorCode|null);

        /** Msg_RefreshDayGiftBagRsp dayGiftBag */
        dayGiftBag?: (proto.IDayGiftBagInfo|null);
    }

    /** Represents a Msg_RefreshDayGiftBagRsp. */
    class Msg_RefreshDayGiftBagRsp implements IMsg_RefreshDayGiftBagRsp {

        /**
         * Constructs a new Msg_RefreshDayGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshDayGiftBagRsp);

        /** Msg_RefreshDayGiftBagRsp result. */
        public result: proto.Msg_RefreshDayGiftBagRsp.ErrorCode;

        /** Msg_RefreshDayGiftBagRsp dayGiftBag. */
        public dayGiftBag?: (proto.IDayGiftBagInfo|null);

        /**
         * Encodes the specified Msg_RefreshDayGiftBagRsp message. Does not implicitly {@link proto.Msg_RefreshDayGiftBagRsp.verify|verify} messages.
         * @param m Msg_RefreshDayGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshDayGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshDayGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshDayGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshDayGiftBagRsp;
    }

    namespace Msg_RefreshDayGiftBagRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            GiftNotExist = 1,
            AdvNotEnough = 2,
            DiamondNotEnough = 3
        }
    }

    /** GiftBagType enum. */
    enum GiftBagType {
        DayGift = 0,
        WeekendGift = 1,
        ExGift = 2
    }

    /** Properties of a Msg_BuyGiftDayReq. */
    interface IMsg_BuyGiftDayReq {

        /** Msg_BuyGiftDayReq giftType */
        giftType?: (proto.GiftBagType|null);

        /** Msg_BuyGiftDayReq giftID */
        giftID?: (number|null);
    }

    /** Represents a Msg_BuyGiftDayReq. */
    class Msg_BuyGiftDayReq implements IMsg_BuyGiftDayReq {

        /**
         * Constructs a new Msg_BuyGiftDayReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGiftDayReq);

        /** Msg_BuyGiftDayReq giftType. */
        public giftType: proto.GiftBagType;

        /** Msg_BuyGiftDayReq giftID. */
        public giftID: number;

        /**
         * Encodes the specified Msg_BuyGiftDayReq message. Does not implicitly {@link proto.Msg_BuyGiftDayReq.verify|verify} messages.
         * @param m Msg_BuyGiftDayReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGiftDayReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGiftDayReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGiftDayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGiftDayReq;
    }

    /** Properties of a Msg_BuyGiftDayRsp. */
    interface IMsg_BuyGiftDayRsp {

        /** Msg_BuyGiftDayRsp result */
        result?: (proto.Msg_BuyGiftDayRsp.ErrorCode|null);

        /** Msg_BuyGiftDayRsp awards */
        awards?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyGiftDayRsp. */
    class Msg_BuyGiftDayRsp implements IMsg_BuyGiftDayRsp {

        /**
         * Constructs a new Msg_BuyGiftDayRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGiftDayRsp);

        /** Msg_BuyGiftDayRsp result. */
        public result: proto.Msg_BuyGiftDayRsp.ErrorCode;

        /** Msg_BuyGiftDayRsp awards. */
        public awards: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyGiftDayRsp message. Does not implicitly {@link proto.Msg_BuyGiftDayRsp.verify|verify} messages.
         * @param m Msg_BuyGiftDayRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGiftDayRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGiftDayRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGiftDayRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGiftDayRsp;
    }

    namespace Msg_BuyGiftDayRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            GiftNotExist = 1,
            GiftTimePassed = 2,
            GiftBuyTimesNotEnough = 3
        }
    }

    /** Properties of a RookieGiftBagCell. */
    interface IRookieGiftBagCell {

        /** RookieGiftBagCell ID */
        ID?: (number|null);

        /** RookieGiftBagCell buyTimes */
        buyTimes?: (number|null);
    }

    /** Represents a RookieGiftBagCell. */
    class RookieGiftBagCell implements IRookieGiftBagCell {

        /**
         * Constructs a new RookieGiftBagCell.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRookieGiftBagCell);

        /** RookieGiftBagCell ID. */
        public ID: number;

        /** RookieGiftBagCell buyTimes. */
        public buyTimes: number;

        /**
         * Encodes the specified RookieGiftBagCell message. Does not implicitly {@link proto.RookieGiftBagCell.verify|verify} messages.
         * @param m RookieGiftBagCell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRookieGiftBagCell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RookieGiftBagCell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RookieGiftBagCell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RookieGiftBagCell;
    }

    /** Properties of a RookieGiftBagData. */
    interface IRookieGiftBagData {

        /** RookieGiftBagData rookieGiftBag */
        rookieGiftBag?: (proto.IRookieGiftBagCell[]|null);

        /** RookieGiftBagData rookieGiftBagOpenTime */
        rookieGiftBagOpenTime?: (number|null);
    }

    /** Represents a RookieGiftBagData. */
    class RookieGiftBagData implements IRookieGiftBagData {

        /**
         * Constructs a new RookieGiftBagData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRookieGiftBagData);

        /** RookieGiftBagData rookieGiftBag. */
        public rookieGiftBag: proto.IRookieGiftBagCell[];

        /** RookieGiftBagData rookieGiftBagOpenTime. */
        public rookieGiftBagOpenTime: number;

        /**
         * Encodes the specified RookieGiftBagData message. Does not implicitly {@link proto.RookieGiftBagData.verify|verify} messages.
         * @param m RookieGiftBagData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRookieGiftBagData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RookieGiftBagData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RookieGiftBagData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RookieGiftBagData;
    }

    /** Properties of a NewPlayerGiftBag. */
    interface INewPlayerGiftBag {

        /** NewPlayerGiftBag id */
        id?: (number|null);

        /** NewPlayerGiftBag buyTimes */
        buyTimes?: (number|null);

        /** NewPlayerGiftBag maxBuyTimes */
        maxBuyTimes?: (number|null);

        /** NewPlayerGiftBag price */
        price?: (number|null);

        /** NewPlayerGiftBag rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a NewPlayerGiftBag. */
    class NewPlayerGiftBag implements INewPlayerGiftBag {

        /**
         * Constructs a new NewPlayerGiftBag.
         * @param [p] Properties to set
         */
        constructor(p?: proto.INewPlayerGiftBag);

        /** NewPlayerGiftBag id. */
        public id: number;

        /** NewPlayerGiftBag buyTimes. */
        public buyTimes: number;

        /** NewPlayerGiftBag maxBuyTimes. */
        public maxBuyTimes: number;

        /** NewPlayerGiftBag price. */
        public price: number;

        /** NewPlayerGiftBag rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified NewPlayerGiftBag message. Does not implicitly {@link proto.NewPlayerGiftBag.verify|verify} messages.
         * @param m NewPlayerGiftBag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.INewPlayerGiftBag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewPlayerGiftBag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NewPlayerGiftBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.NewPlayerGiftBag;
    }

    /** Properties of a Msg_NewPlayerGiftBagReq. */
    interface IMsg_NewPlayerGiftBagReq {
    }

    /** Represents a Msg_NewPlayerGiftBagReq. */
    class Msg_NewPlayerGiftBagReq implements IMsg_NewPlayerGiftBagReq {

        /**
         * Constructs a new Msg_NewPlayerGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_NewPlayerGiftBagReq);

        /**
         * Encodes the specified Msg_NewPlayerGiftBagReq message. Does not implicitly {@link proto.Msg_NewPlayerGiftBagReq.verify|verify} messages.
         * @param m Msg_NewPlayerGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_NewPlayerGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_NewPlayerGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_NewPlayerGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_NewPlayerGiftBagReq;
    }

    /** Properties of a Msg_NewPlayerGiftBagRsp. */
    interface IMsg_NewPlayerGiftBagRsp {

        /** Msg_NewPlayerGiftBagRsp result */
        result?: (proto.Msg_NewPlayerGiftBagRsp.ErrorCode|null);

        /** Msg_NewPlayerGiftBagRsp bagGifts */
        bagGifts?: (proto.INewPlayerGiftBag[]|null);

        /** Msg_NewPlayerGiftBagRsp endUTC */
        endUTC?: (number|null);
    }

    /** Represents a Msg_NewPlayerGiftBagRsp. */
    class Msg_NewPlayerGiftBagRsp implements IMsg_NewPlayerGiftBagRsp {

        /**
         * Constructs a new Msg_NewPlayerGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_NewPlayerGiftBagRsp);

        /** Msg_NewPlayerGiftBagRsp result. */
        public result: proto.Msg_NewPlayerGiftBagRsp.ErrorCode;

        /** Msg_NewPlayerGiftBagRsp bagGifts. */
        public bagGifts: proto.INewPlayerGiftBag[];

        /** Msg_NewPlayerGiftBagRsp endUTC. */
        public endUTC: number;

        /**
         * Encodes the specified Msg_NewPlayerGiftBagRsp message. Does not implicitly {@link proto.Msg_NewPlayerGiftBagRsp.verify|verify} messages.
         * @param m Msg_NewPlayerGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_NewPlayerGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_NewPlayerGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_NewPlayerGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_NewPlayerGiftBagRsp;
    }

    namespace Msg_NewPlayerGiftBagRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Error = 1
        }
    }

    /** Properties of a Msg_BuyNewPlayerGiftBagReq. */
    interface IMsg_BuyNewPlayerGiftBagReq {

        /** Msg_BuyNewPlayerGiftBagReq ID */
        ID?: (number|null);
    }

    /** Represents a Msg_BuyNewPlayerGiftBagReq. */
    class Msg_BuyNewPlayerGiftBagReq implements IMsg_BuyNewPlayerGiftBagReq {

        /**
         * Constructs a new Msg_BuyNewPlayerGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyNewPlayerGiftBagReq);

        /** Msg_BuyNewPlayerGiftBagReq ID. */
        public ID: number;

        /**
         * Encodes the specified Msg_BuyNewPlayerGiftBagReq message. Does not implicitly {@link proto.Msg_BuyNewPlayerGiftBagReq.verify|verify} messages.
         * @param m Msg_BuyNewPlayerGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyNewPlayerGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyNewPlayerGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyNewPlayerGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyNewPlayerGiftBagReq;
    }

    /** Properties of a Msg_BuyNewPlayerGiftBagRsp. */
    interface IMsg_BuyNewPlayerGiftBagRsp {

        /** Msg_BuyNewPlayerGiftBagRsp result */
        result?: (proto.Msg_BuyNewPlayerGiftBagRsp.ErrorCode|null);

        /** Msg_BuyNewPlayerGiftBagRsp rewards */
        rewards?: (proto.IVecRewardSimpleInfo[]|null);

        /** Msg_BuyNewPlayerGiftBagRsp giftID */
        giftID?: (number|null);
    }

    /** Represents a Msg_BuyNewPlayerGiftBagRsp. */
    class Msg_BuyNewPlayerGiftBagRsp implements IMsg_BuyNewPlayerGiftBagRsp {

        /**
         * Constructs a new Msg_BuyNewPlayerGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyNewPlayerGiftBagRsp);

        /** Msg_BuyNewPlayerGiftBagRsp result. */
        public result: proto.Msg_BuyNewPlayerGiftBagRsp.ErrorCode;

        /** Msg_BuyNewPlayerGiftBagRsp rewards. */
        public rewards: proto.IVecRewardSimpleInfo[];

        /** Msg_BuyNewPlayerGiftBagRsp giftID. */
        public giftID: number;

        /**
         * Encodes the specified Msg_BuyNewPlayerGiftBagRsp message. Does not implicitly {@link proto.Msg_BuyNewPlayerGiftBagRsp.verify|verify} messages.
         * @param m Msg_BuyNewPlayerGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyNewPlayerGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyNewPlayerGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyNewPlayerGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyNewPlayerGiftBagRsp;
    }

    namespace Msg_BuyNewPlayerGiftBagRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            IDError = 1
        }
    }

    /** Properties of a Msg_PushNewExGiftBag. */
    interface IMsg_PushNewExGiftBag {
    }

    /** Represents a Msg_PushNewExGiftBag. */
    class Msg_PushNewExGiftBag implements IMsg_PushNewExGiftBag {

        /**
         * Constructs a new Msg_PushNewExGiftBag.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushNewExGiftBag);

        /**
         * Encodes the specified Msg_PushNewExGiftBag message. Does not implicitly {@link proto.Msg_PushNewExGiftBag.verify|verify} messages.
         * @param m Msg_PushNewExGiftBag message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushNewExGiftBag, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushNewExGiftBag message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushNewExGiftBag
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushNewExGiftBag;
    }

    /** Properties of a Msg_BuyShopGoodsReq. */
    interface IMsg_BuyShopGoodsReq {

        /** Msg_BuyShopGoodsReq buyType */
        buyType?: (proto.ShopGoodsType|null);

        /** Msg_BuyShopGoodsReq index */
        index?: (number|null);
    }

    /** Represents a Msg_BuyShopGoodsReq. */
    class Msg_BuyShopGoodsReq implements IMsg_BuyShopGoodsReq {

        /**
         * Constructs a new Msg_BuyShopGoodsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyShopGoodsReq);

        /** Msg_BuyShopGoodsReq buyType. */
        public buyType: proto.ShopGoodsType;

        /** Msg_BuyShopGoodsReq index. */
        public index: number;

        /**
         * Encodes the specified Msg_BuyShopGoodsReq message. Does not implicitly {@link proto.Msg_BuyShopGoodsReq.verify|verify} messages.
         * @param m Msg_BuyShopGoodsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyShopGoodsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyShopGoodsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyShopGoodsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyShopGoodsReq;
    }

    /** Properties of a Msg_BuyShopGoodsRsp. */
    interface IMsg_BuyShopGoodsRsp {

        /** Msg_BuyShopGoodsRsp result */
        result?: (proto.Msg_BuyShopGoodsRsp.ErrorCode|null);

        /** Msg_BuyShopGoodsRsp buyType */
        buyType?: (proto.ShopGoodsType|null);

        /** Msg_BuyShopGoodsRsp index */
        index?: (number|null);

        /** Msg_BuyShopGoodsRsp goods */
        goods?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyShopGoodsRsp. */
    class Msg_BuyShopGoodsRsp implements IMsg_BuyShopGoodsRsp {

        /**
         * Constructs a new Msg_BuyShopGoodsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyShopGoodsRsp);

        /** Msg_BuyShopGoodsRsp result. */
        public result: proto.Msg_BuyShopGoodsRsp.ErrorCode;

        /** Msg_BuyShopGoodsRsp buyType. */
        public buyType: proto.ShopGoodsType;

        /** Msg_BuyShopGoodsRsp index. */
        public index: number;

        /** Msg_BuyShopGoodsRsp goods. */
        public goods: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyShopGoodsRsp message. Does not implicitly {@link proto.Msg_BuyShopGoodsRsp.verify|verify} messages.
         * @param m Msg_BuyShopGoodsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyShopGoodsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyShopGoodsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyShopGoodsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyShopGoodsRsp;
    }

    namespace Msg_BuyShopGoodsRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NotEnoughMoney = 1,
            SellOut = 2,
            OperatorFailed = 3
        }
    }

    /** Properties of a Msg_FreeRefreshSpecialGoodsReq. */
    interface IMsg_FreeRefreshSpecialGoodsReq {
    }

    /** Represents a Msg_FreeRefreshSpecialGoodsReq. */
    class Msg_FreeRefreshSpecialGoodsReq implements IMsg_FreeRefreshSpecialGoodsReq {

        /**
         * Constructs a new Msg_FreeRefreshSpecialGoodsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FreeRefreshSpecialGoodsReq);

        /**
         * Encodes the specified Msg_FreeRefreshSpecialGoodsReq message. Does not implicitly {@link proto.Msg_FreeRefreshSpecialGoodsReq.verify|verify} messages.
         * @param m Msg_FreeRefreshSpecialGoodsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FreeRefreshSpecialGoodsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FreeRefreshSpecialGoodsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FreeRefreshSpecialGoodsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FreeRefreshSpecialGoodsReq;
    }

    /** Properties of a Msg_FreeRefreshSpecialGoodsRsp. */
    interface IMsg_FreeRefreshSpecialGoodsRsp {

        /** Msg_FreeRefreshSpecialGoodsRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FreeRefreshSpecialGoodsRsp leftTimes */
        leftTimes?: (number|null);

        /** Msg_FreeRefreshSpecialGoodsRsp nextRefreshTime */
        nextRefreshTime?: (number|null);

        /** Msg_FreeRefreshSpecialGoodsRsp specialList */
        specialList?: (proto.IEveryDaySpecialShop[]|null);

        /** Msg_FreeRefreshSpecialGoodsRsp specialSixRefreshTimes */
        specialSixRefreshTimes?: (number|null);
    }

    /** Represents a Msg_FreeRefreshSpecialGoodsRsp. */
    class Msg_FreeRefreshSpecialGoodsRsp implements IMsg_FreeRefreshSpecialGoodsRsp {

        /**
         * Constructs a new Msg_FreeRefreshSpecialGoodsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FreeRefreshSpecialGoodsRsp);

        /** Msg_FreeRefreshSpecialGoodsRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FreeRefreshSpecialGoodsRsp leftTimes. */
        public leftTimes: number;

        /** Msg_FreeRefreshSpecialGoodsRsp nextRefreshTime. */
        public nextRefreshTime: number;

        /** Msg_FreeRefreshSpecialGoodsRsp specialList. */
        public specialList: proto.IEveryDaySpecialShop[];

        /** Msg_FreeRefreshSpecialGoodsRsp specialSixRefreshTimes. */
        public specialSixRefreshTimes: number;

        /**
         * Encodes the specified Msg_FreeRefreshSpecialGoodsRsp message. Does not implicitly {@link proto.Msg_FreeRefreshSpecialGoodsRsp.verify|verify} messages.
         * @param m Msg_FreeRefreshSpecialGoodsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FreeRefreshSpecialGoodsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FreeRefreshSpecialGoodsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FreeRefreshSpecialGoodsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FreeRefreshSpecialGoodsRsp;
    }

    /** Properties of a Msg_ReconnetFightReq. */
    interface IMsg_ReconnetFightReq {
    }

    /** Represents a Msg_ReconnetFightReq. */
    class Msg_ReconnetFightReq implements IMsg_ReconnetFightReq {

        /**
         * Constructs a new Msg_ReconnetFightReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReconnetFightReq);

        /**
         * Encodes the specified Msg_ReconnetFightReq message. Does not implicitly {@link proto.Msg_ReconnetFightReq.verify|verify} messages.
         * @param m Msg_ReconnetFightReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReconnetFightReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReconnetFightReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReconnetFightReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReconnetFightReq;
    }

    /** Properties of a Msg_ReconnetFightRsp. */
    interface IMsg_ReconnetFightRsp {

        /** Msg_ReconnetFightRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_ReconnetFightRsp myData */
        myData?: (proto.IFightData|null);

        /** Msg_ReconnetFightRsp otherData */
        otherData?: (proto.IFightData|null);

        /** Msg_ReconnetFightRsp fightInstanceId */
        fightInstanceId?: (number|null);

        /** Msg_ReconnetFightRsp type */
        type?: (proto.FightType|null);

        /** Msg_ReconnetFightRsp allData */
        allData?: (proto.IBountyFightData[]|null);
    }

    /** Represents a Msg_ReconnetFightRsp. */
    class Msg_ReconnetFightRsp implements IMsg_ReconnetFightRsp {

        /**
         * Constructs a new Msg_ReconnetFightRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReconnetFightRsp);

        /** Msg_ReconnetFightRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_ReconnetFightRsp myData. */
        public myData?: (proto.IFightData|null);

        /** Msg_ReconnetFightRsp otherData. */
        public otherData?: (proto.IFightData|null);

        /** Msg_ReconnetFightRsp fightInstanceId. */
        public fightInstanceId: number;

        /** Msg_ReconnetFightRsp type. */
        public type: proto.FightType;

        /** Msg_ReconnetFightRsp allData. */
        public allData: proto.IBountyFightData[];

        /**
         * Encodes the specified Msg_ReconnetFightRsp message. Does not implicitly {@link proto.Msg_ReconnetFightRsp.verify|verify} messages.
         * @param m Msg_ReconnetFightRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReconnetFightRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReconnetFightRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReconnetFightRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReconnetFightRsp;
    }

    /** FightType enum. */
    enum FightType {
        PvP = 0,
        RookiePvP = 1,
        PvE = 2,
        Challenge = 3,
        AlliancePvP = 4,
        AlliancePvE = 5,
        FriendPvp = 6,
        FriendPve = 7,
        Training = 8,
        WorldChannelPvP = 9,
        WorldChannelPvE = 10,
        ChessFight = 11,
        Bounty = 12
    }

    /** Properties of a Msg_StartMatchFightReq. */
    interface IMsg_StartMatchFightReq {

        /** Msg_StartMatchFightReq type */
        type?: (proto.FightType|null);
    }

    /** Represents a Msg_StartMatchFightReq. */
    class Msg_StartMatchFightReq implements IMsg_StartMatchFightReq {

        /**
         * Constructs a new Msg_StartMatchFightReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartMatchFightReq);

        /** Msg_StartMatchFightReq type. */
        public type: proto.FightType;

        /**
         * Encodes the specified Msg_StartMatchFightReq message. Does not implicitly {@link proto.Msg_StartMatchFightReq.verify|verify} messages.
         * @param m Msg_StartMatchFightReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartMatchFightReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartMatchFightReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartMatchFightReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartMatchFightReq;
    }

    /** Properties of a Msg_StartMatchFightRsp. */
    interface IMsg_StartMatchFightRsp {

        /** Msg_StartMatchFightRsp result */
        result?: (proto.Msg_StartMatchFightRsp.ErrorCode|null);

        /** Msg_StartMatchFightRsp myData */
        myData?: (proto.IFightData|null);

        /** Msg_StartMatchFightRsp otherData */
        otherData?: (proto.IFightData|null);

        /** Msg_StartMatchFightRsp allData */
        allData?: (proto.IBountyFightData[]|null);

        /** Msg_StartMatchFightRsp fightInstanceId */
        fightInstanceId?: (number|null);

        /** Msg_StartMatchFightRsp type */
        type?: (proto.FightType|null);
    }

    /** Represents a Msg_StartMatchFightRsp. */
    class Msg_StartMatchFightRsp implements IMsg_StartMatchFightRsp {

        /**
         * Constructs a new Msg_StartMatchFightRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartMatchFightRsp);

        /** Msg_StartMatchFightRsp result. */
        public result: proto.Msg_StartMatchFightRsp.ErrorCode;

        /** Msg_StartMatchFightRsp myData. */
        public myData?: (proto.IFightData|null);

        /** Msg_StartMatchFightRsp otherData. */
        public otherData?: (proto.IFightData|null);

        /** Msg_StartMatchFightRsp allData. */
        public allData: proto.IBountyFightData[];

        /** Msg_StartMatchFightRsp fightInstanceId. */
        public fightInstanceId: number;

        /** Msg_StartMatchFightRsp type. */
        public type: proto.FightType;

        /**
         * Encodes the specified Msg_StartMatchFightRsp message. Does not implicitly {@link proto.Msg_StartMatchFightRsp.verify|verify} messages.
         * @param m Msg_StartMatchFightRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartMatchFightRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartMatchFightRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartMatchFightRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartMatchFightRsp;
    }

    namespace Msg_StartMatchFightRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Failed = 1,
            ReportedTooMuch = 2,
            BannedCard = 3
        }
    }

    /** Properties of a Msg_CancelMatchFightReq. */
    interface IMsg_CancelMatchFightReq {
    }

    /** Represents a Msg_CancelMatchFightReq. */
    class Msg_CancelMatchFightReq implements IMsg_CancelMatchFightReq {

        /**
         * Constructs a new Msg_CancelMatchFightReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CancelMatchFightReq);

        /**
         * Encodes the specified Msg_CancelMatchFightReq message. Does not implicitly {@link proto.Msg_CancelMatchFightReq.verify|verify} messages.
         * @param m Msg_CancelMatchFightReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CancelMatchFightReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CancelMatchFightReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CancelMatchFightReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CancelMatchFightReq;
    }

    /** Properties of a Msg_CancelMatchFightRsp. */
    interface IMsg_CancelMatchFightRsp {

        /** Msg_CancelMatchFightRsp result */
        result?: (proto.Msg_CancelMatchFightRsp.ErrorCode|null);
    }

    /** Represents a Msg_CancelMatchFightRsp. */
    class Msg_CancelMatchFightRsp implements IMsg_CancelMatchFightRsp {

        /**
         * Constructs a new Msg_CancelMatchFightRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CancelMatchFightRsp);

        /** Msg_CancelMatchFightRsp result. */
        public result: proto.Msg_CancelMatchFightRsp.ErrorCode;

        /**
         * Encodes the specified Msg_CancelMatchFightRsp message. Does not implicitly {@link proto.Msg_CancelMatchFightRsp.verify|verify} messages.
         * @param m Msg_CancelMatchFightRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CancelMatchFightRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CancelMatchFightRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CancelMatchFightRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CancelMatchFightRsp;
    }

    namespace Msg_CancelMatchFightRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            CancelFailed = 1,
            InvalidOperator = 2
        }
    }

    /** Properties of a Msg_FightReadyReq. */
    interface IMsg_FightReadyReq {

        /** Msg_FightReadyReq fightInstanceId */
        fightInstanceId?: (number|null);

        /** Msg_FightReadyReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_FightReadyReq. */
    class Msg_FightReadyReq implements IMsg_FightReadyReq {

        /**
         * Constructs a new Msg_FightReadyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightReadyReq);

        /** Msg_FightReadyReq fightInstanceId. */
        public fightInstanceId: number;

        /** Msg_FightReadyReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_FightReadyReq message. Does not implicitly {@link proto.Msg_FightReadyReq.verify|verify} messages.
         * @param m Msg_FightReadyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightReadyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightReadyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightReadyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightReadyReq;
    }

    /** Properties of a Msg_FightReadyRsp. */
    interface IMsg_FightReadyRsp {

        /** Msg_FightReadyRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightReadyRsp playerTag */
        playerTag?: (number|null);

        /** Msg_FightReadyRsp timestamp */
        timestamp?: (number|null);
    }

    /** Represents a Msg_FightReadyRsp. */
    class Msg_FightReadyRsp implements IMsg_FightReadyRsp {

        /**
         * Constructs a new Msg_FightReadyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightReadyRsp);

        /** Msg_FightReadyRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightReadyRsp playerTag. */
        public playerTag: number;

        /** Msg_FightReadyRsp timestamp. */
        public timestamp: number;

        /**
         * Encodes the specified Msg_FightReadyRsp message. Does not implicitly {@link proto.Msg_FightReadyRsp.verify|verify} messages.
         * @param m Msg_FightReadyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightReadyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightReadyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightReadyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightReadyRsp;
    }

    /** Properties of a Msg_ConstructionPhase. */
    interface IMsg_ConstructionPhase {

        /** Msg_ConstructionPhase round */
        round?: (number|null);

        /** Msg_ConstructionPhase nextCards */
        nextCards?: (number[]|null);

        /** Msg_ConstructionPhase leftCount */
        leftCount?: (number|null);

        /** Msg_ConstructionPhase towers */
        towers?: (proto.IFightTowerData[]|null);

        /** Msg_ConstructionPhase combatData */
        combatData?: (proto.ICombatData[]|null);

        /** Msg_ConstructionPhase opponentData */
        opponentData?: (proto.IBountyFightData|null);

        /** Msg_ConstructionPhase playerTag */
        playerTag?: (number|null);
    }

    /** Represents a Msg_ConstructionPhase. */
    class Msg_ConstructionPhase implements IMsg_ConstructionPhase {

        /**
         * Constructs a new Msg_ConstructionPhase.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ConstructionPhase);

        /** Msg_ConstructionPhase round. */
        public round: number;

        /** Msg_ConstructionPhase nextCards. */
        public nextCards: number[];

        /** Msg_ConstructionPhase leftCount. */
        public leftCount: number;

        /** Msg_ConstructionPhase towers. */
        public towers: proto.IFightTowerData[];

        /** Msg_ConstructionPhase combatData. */
        public combatData: proto.ICombatData[];

        /** Msg_ConstructionPhase opponentData. */
        public opponentData?: (proto.IBountyFightData|null);

        /** Msg_ConstructionPhase playerTag. */
        public playerTag: number;

        /**
         * Encodes the specified Msg_ConstructionPhase message. Does not implicitly {@link proto.Msg_ConstructionPhase.verify|verify} messages.
         * @param m Msg_ConstructionPhase message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ConstructionPhase, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ConstructionPhase message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ConstructionPhase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ConstructionPhase;
    }

    /** CombatEvent enum. */
    enum CombatEvent {
        Attack = 0,
        Cure = 1,
        AddBuffer = 2,
        RemoveBuffer = 3,
        Shield = 4,
        Revive = 5,
        Dead = 6,
        Move = 7,
        Hp = 8,
        Transform = 9
    }

    /** Properties of a CombatData. */
    interface ICombatData {

        /** CombatData timestamp */
        timestamp?: (number|null);

        /** CombatData ev */
        ev?: (proto.CombatEvent|null);

        /** CombatData attack */
        attack?: (proto.ICombatEventAttack|null);

        /** CombatData cure */
        cure?: (proto.ICombatEventCure|null);

        /** CombatData addBuffer */
        addBuffer?: (proto.ICombatEventAddBuffer|null);

        /** CombatData removeBuffer */
        removeBuffer?: (proto.ICombatEventRemoveBuffer|null);

        /** CombatData shield */
        shield?: (proto.ICombatEventShield|null);

        /** CombatData revive */
        revive?: (proto.ICombatEventRevive|null);

        /** CombatData dead */
        dead?: (proto.ICombatEventDead|null);

        /** CombatData move */
        move?: (proto.ICombatEventMove|null);

        /** CombatData hp */
        hp?: (proto.ICombatEventHp|null);

        /** CombatData transform */
        transform?: (proto.ICombatEventTransform|null);
    }

    /** Represents a CombatData. */
    class CombatData implements ICombatData {

        /**
         * Constructs a new CombatData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatData);

        /** CombatData timestamp. */
        public timestamp: number;

        /** CombatData ev. */
        public ev: proto.CombatEvent;

        /** CombatData attack. */
        public attack?: (proto.ICombatEventAttack|null);

        /** CombatData cure. */
        public cure?: (proto.ICombatEventCure|null);

        /** CombatData addBuffer. */
        public addBuffer?: (proto.ICombatEventAddBuffer|null);

        /** CombatData removeBuffer. */
        public removeBuffer?: (proto.ICombatEventRemoveBuffer|null);

        /** CombatData shield. */
        public shield?: (proto.ICombatEventShield|null);

        /** CombatData revive. */
        public revive?: (proto.ICombatEventRevive|null);

        /** CombatData dead. */
        public dead?: (proto.ICombatEventDead|null);

        /** CombatData move. */
        public move?: (proto.ICombatEventMove|null);

        /** CombatData hp. */
        public hp?: (proto.ICombatEventHp|null);

        /** CombatData transform. */
        public transform?: (proto.ICombatEventTransform|null);

        /** CombatData EventData. */
        public EventData?: ("attack"|"cure"|"addBuffer"|"removeBuffer"|"shield"|"revive"|"dead"|"move"|"hp"|"transform");

        /**
         * Encodes the specified CombatData message. Does not implicitly {@link proto.CombatData.verify|verify} messages.
         * @param m CombatData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatData;
    }

    /** Properties of a Msg_CombatPhase. */
    interface IMsg_CombatPhase {

        /** Msg_CombatPhase data */
        data?: (proto.ICombatData[]|null);

        /** Msg_CombatPhase towers */
        towers?: (proto.IFightTowerData[]|null);

        /** Msg_CombatPhase loseTag */
        loseTag?: (number|null);
    }

    /** Represents a Msg_CombatPhase. */
    class Msg_CombatPhase implements IMsg_CombatPhase {

        /**
         * Constructs a new Msg_CombatPhase.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CombatPhase);

        /** Msg_CombatPhase data. */
        public data: proto.ICombatData[];

        /** Msg_CombatPhase towers. */
        public towers: proto.IFightTowerData[];

        /** Msg_CombatPhase loseTag. */
        public loseTag: number;

        /**
         * Encodes the specified Msg_CombatPhase message. Does not implicitly {@link proto.Msg_CombatPhase.verify|verify} messages.
         * @param m Msg_CombatPhase message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CombatPhase, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CombatPhase message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CombatPhase
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CombatPhase;
    }

    /** Properties of a DamageDataBuffer. */
    interface IDamageDataBuffer {

        /** DamageDataBuffer bufferID */
        bufferID?: (number|null);

        /** DamageDataBuffer index */
        index?: (number|null);

        /** DamageDataBuffer layer */
        layer?: (number|null);
    }

    /** Represents a DamageDataBuffer. */
    class DamageDataBuffer implements IDamageDataBuffer {

        /**
         * Constructs a new DamageDataBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDamageDataBuffer);

        /** DamageDataBuffer bufferID. */
        public bufferID: number;

        /** DamageDataBuffer index. */
        public index: number;

        /** DamageDataBuffer layer. */
        public layer: number;

        /**
         * Encodes the specified DamageDataBuffer message. Does not implicitly {@link proto.DamageDataBuffer.verify|verify} messages.
         * @param m DamageDataBuffer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDamageDataBuffer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DamageDataBuffer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DamageDataBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DamageDataBuffer;
    }

    /** Properties of a DamageData. */
    interface IDamageData {

        /** DamageData enmeyId */
        enmeyId?: (number|null);

        /** DamageData damage */
        damage?: (number|Long|null);

        /** DamageData cure */
        cure?: (number|Long|null);

        /** DamageData shieldReduce */
        shieldReduce?: (number|Long|null);

        /** DamageData isCritical */
        isCritical?: (boolean|null);

        /** DamageData isInstantKill */
        isInstantKill?: (boolean|null);

        /** DamageData bufferList */
        bufferList?: (proto.IDamageDataBuffer[]|null);
    }

    /** Represents a DamageData. */
    class DamageData implements IDamageData {

        /**
         * Constructs a new DamageData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDamageData);

        /** DamageData enmeyId. */
        public enmeyId: number;

        /** DamageData damage. */
        public damage: (number|Long);

        /** DamageData cure. */
        public cure: (number|Long);

        /** DamageData shieldReduce. */
        public shieldReduce: (number|Long);

        /** DamageData isCritical. */
        public isCritical: boolean;

        /** DamageData isInstantKill. */
        public isInstantKill: boolean;

        /** DamageData bufferList. */
        public bufferList: proto.IDamageDataBuffer[];

        /**
         * Encodes the specified DamageData message. Does not implicitly {@link proto.DamageData.verify|verify} messages.
         * @param m DamageData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDamageData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DamageData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DamageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DamageData;
    }

    /** Properties of a CombatEventAttack. */
    interface ICombatEventAttack {

        /** CombatEventAttack towerId */
        towerId?: (number|null);

        /** CombatEventAttack skillID */
        skillID?: (number|null);

        /** CombatEventAttack damages */
        damages?: (proto.IDamageData[]|null);
    }

    /** Represents a CombatEventAttack. */
    class CombatEventAttack implements ICombatEventAttack {

        /**
         * Constructs a new CombatEventAttack.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventAttack);

        /** CombatEventAttack towerId. */
        public towerId: number;

        /** CombatEventAttack skillID. */
        public skillID: number;

        /** CombatEventAttack damages. */
        public damages: proto.IDamageData[];

        /**
         * Encodes the specified CombatEventAttack message. Does not implicitly {@link proto.CombatEventAttack.verify|verify} messages.
         * @param m CombatEventAttack message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventAttack, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventAttack message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventAttack
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventAttack;
    }

    /** Properties of a CombatEventCure. */
    interface ICombatEventCure {

        /** CombatEventCure towerId */
        towerId?: (number|null);

        /** CombatEventCure hp */
        hp?: (number|Long|null);
    }

    /** Represents a CombatEventCure. */
    class CombatEventCure implements ICombatEventCure {

        /**
         * Constructs a new CombatEventCure.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventCure);

        /** CombatEventCure towerId. */
        public towerId: number;

        /** CombatEventCure hp. */
        public hp: (number|Long);

        /**
         * Encodes the specified CombatEventCure message. Does not implicitly {@link proto.CombatEventCure.verify|verify} messages.
         * @param m CombatEventCure message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventCure, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventCure message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventCure
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventCure;
    }

    /** Properties of a CombatEventAddBuffer. */
    interface ICombatEventAddBuffer {

        /** CombatEventAddBuffer towerID */
        towerID?: (number|null);

        /** CombatEventAddBuffer bufferID */
        bufferID?: (number|null);

        /** CombatEventAddBuffer index */
        index?: (number|null);

        /** CombatEventAddBuffer layer */
        layer?: (number|null);
    }

    /** Represents a CombatEventAddBuffer. */
    class CombatEventAddBuffer implements ICombatEventAddBuffer {

        /**
         * Constructs a new CombatEventAddBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventAddBuffer);

        /** CombatEventAddBuffer towerID. */
        public towerID: number;

        /** CombatEventAddBuffer bufferID. */
        public bufferID: number;

        /** CombatEventAddBuffer index. */
        public index: number;

        /** CombatEventAddBuffer layer. */
        public layer: number;

        /**
         * Encodes the specified CombatEventAddBuffer message. Does not implicitly {@link proto.CombatEventAddBuffer.verify|verify} messages.
         * @param m CombatEventAddBuffer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventAddBuffer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventAddBuffer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventAddBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventAddBuffer;
    }

    /** Properties of a CombatEventRemoveBuffer. */
    interface ICombatEventRemoveBuffer {

        /** CombatEventRemoveBuffer towerID */
        towerID?: (number|null);

        /** CombatEventRemoveBuffer index */
        index?: (number|null);
    }

    /** Represents a CombatEventRemoveBuffer. */
    class CombatEventRemoveBuffer implements ICombatEventRemoveBuffer {

        /**
         * Constructs a new CombatEventRemoveBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventRemoveBuffer);

        /** CombatEventRemoveBuffer towerID. */
        public towerID: number;

        /** CombatEventRemoveBuffer index. */
        public index: number;

        /**
         * Encodes the specified CombatEventRemoveBuffer message. Does not implicitly {@link proto.CombatEventRemoveBuffer.verify|verify} messages.
         * @param m CombatEventRemoveBuffer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventRemoveBuffer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventRemoveBuffer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventRemoveBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventRemoveBuffer;
    }

    /** Properties of a CombatEventShield. */
    interface ICombatEventShield {

        /** CombatEventShield towerID */
        towerID?: (number|null);

        /** CombatEventShield shield */
        shield?: (number|Long|null);
    }

    /** Represents a CombatEventShield. */
    class CombatEventShield implements ICombatEventShield {

        /**
         * Constructs a new CombatEventShield.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventShield);

        /** CombatEventShield towerID. */
        public towerID: number;

        /** CombatEventShield shield. */
        public shield: (number|Long);

        /**
         * Encodes the specified CombatEventShield message. Does not implicitly {@link proto.CombatEventShield.verify|verify} messages.
         * @param m CombatEventShield message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventShield, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventShield message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventShield
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventShield;
    }

    /** Properties of a CombatEventRevive. */
    interface ICombatEventRevive {

        /** CombatEventRevive towerID */
        towerID?: (number|null);

        /** CombatEventRevive targetID */
        targetID?: (number|null);

        /** CombatEventRevive skillID */
        skillID?: (number|null);

        /** CombatEventRevive hp */
        hp?: (number|Long|null);

        /** CombatEventRevive shield */
        shield?: (number|Long|null);
    }

    /** Represents a CombatEventRevive. */
    class CombatEventRevive implements ICombatEventRevive {

        /**
         * Constructs a new CombatEventRevive.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventRevive);

        /** CombatEventRevive towerID. */
        public towerID: number;

        /** CombatEventRevive targetID. */
        public targetID: number;

        /** CombatEventRevive skillID. */
        public skillID: number;

        /** CombatEventRevive hp. */
        public hp: (number|Long);

        /** CombatEventRevive shield. */
        public shield: (number|Long);

        /**
         * Encodes the specified CombatEventRevive message. Does not implicitly {@link proto.CombatEventRevive.verify|verify} messages.
         * @param m CombatEventRevive message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventRevive, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventRevive message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventRevive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventRevive;
    }

    /** Properties of a CombatEventDead. */
    interface ICombatEventDead {

        /** CombatEventDead towerID */
        towerID?: (number|null);
    }

    /** Represents a CombatEventDead. */
    class CombatEventDead implements ICombatEventDead {

        /**
         * Constructs a new CombatEventDead.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventDead);

        /** CombatEventDead towerID. */
        public towerID: number;

        /**
         * Encodes the specified CombatEventDead message. Does not implicitly {@link proto.CombatEventDead.verify|verify} messages.
         * @param m CombatEventDead message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventDead, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventDead message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventDead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventDead;
    }

    /** Properties of a CombatEventMove. */
    interface ICombatEventMove {

        /** CombatEventMove towerID */
        towerID?: (number|null);

        /** CombatEventMove row */
        row?: (number|null);

        /** CombatEventMove column */
        column?: (number|null);

        /** CombatEventMove skillID */
        skillID?: (number|null);
    }

    /** Represents a CombatEventMove. */
    class CombatEventMove implements ICombatEventMove {

        /**
         * Constructs a new CombatEventMove.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventMove);

        /** CombatEventMove towerID. */
        public towerID: number;

        /** CombatEventMove row. */
        public row: number;

        /** CombatEventMove column. */
        public column: number;

        /** CombatEventMove skillID. */
        public skillID: number;

        /**
         * Encodes the specified CombatEventMove message. Does not implicitly {@link proto.CombatEventMove.verify|verify} messages.
         * @param m CombatEventMove message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventMove, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventMove message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventMove
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventMove;
    }

    /** Properties of a CombatEventHp. */
    interface ICombatEventHp {

        /** CombatEventHp towerID */
        towerID?: (number|null);

        /** CombatEventHp hp */
        hp?: (number|Long|null);

        /** CombatEventHp maxHp */
        maxHp?: (number|Long|null);
    }

    /** Represents a CombatEventHp. */
    class CombatEventHp implements ICombatEventHp {

        /**
         * Constructs a new CombatEventHp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventHp);

        /** CombatEventHp towerID. */
        public towerID: number;

        /** CombatEventHp hp. */
        public hp: (number|Long);

        /** CombatEventHp maxHp. */
        public maxHp: (number|Long);

        /**
         * Encodes the specified CombatEventHp message. Does not implicitly {@link proto.CombatEventHp.verify|verify} messages.
         * @param m CombatEventHp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventHp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventHp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventHp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventHp;
    }

    /** Properties of a CombatEventTransform. */
    interface ICombatEventTransform {

        /** CombatEventTransform towerID */
        towerID?: (number|null);

        /** CombatEventTransform cardID */
        cardID?: (number|null);

        /** CombatEventTransform maxHp */
        maxHp?: (number|Long|null);
    }

    /** Represents a CombatEventTransform. */
    class CombatEventTransform implements ICombatEventTransform {

        /**
         * Constructs a new CombatEventTransform.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventTransform);

        /** CombatEventTransform towerID. */
        public towerID: number;

        /** CombatEventTransform cardID. */
        public cardID: number;

        /** CombatEventTransform maxHp. */
        public maxHp: (number|Long);

        /**
         * Encodes the specified CombatEventTransform message. Does not implicitly {@link proto.CombatEventTransform.verify|verify} messages.
         * @param m CombatEventTransform message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICombatEventTransform, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CombatEventTransform message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CombatEventTransform
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CombatEventTransform;
    }

    /** Properties of a FightTowerData. */
    interface IFightTowerData {

        /** FightTowerData instanceID */
        instanceID?: (number|null);

        /** FightTowerData row */
        row?: (number|null);

        /** FightTowerData column */
        column?: (number|null);

        /** FightTowerData cardID */
        cardID?: (number|null);

        /** FightTowerData cardLv */
        cardLv?: (number|null);

        /** FightTowerData towerLv */
        towerLv?: (number|null);

        /** FightTowerData playerTag */
        playerTag?: (number|null);

        /** FightTowerData maxHp */
        maxHp?: (number|Long|null);
    }

    /** Represents a FightTowerData. */
    class FightTowerData implements IFightTowerData {

        /**
         * Constructs a new FightTowerData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightTowerData);

        /** FightTowerData instanceID. */
        public instanceID: number;

        /** FightTowerData row. */
        public row: number;

        /** FightTowerData column. */
        public column: number;

        /** FightTowerData cardID. */
        public cardID: number;

        /** FightTowerData cardLv. */
        public cardLv: number;

        /** FightTowerData towerLv. */
        public towerLv: number;

        /** FightTowerData playerTag. */
        public playerTag: number;

        /** FightTowerData maxHp. */
        public maxHp: (number|Long);

        /**
         * Encodes the specified FightTowerData message. Does not implicitly {@link proto.FightTowerData.verify|verify} messages.
         * @param m FightTowerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightTowerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightTowerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightTowerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightTowerData;
    }

    /** Properties of a Msg_FightRandomNum. */
    interface IMsg_FightRandomNum {

        /** Msg_FightRandomNum num */
        num?: (number[]|null);
    }

    /** Represents a Msg_FightRandomNum. */
    class Msg_FightRandomNum implements IMsg_FightRandomNum {

        /**
         * Constructs a new Msg_FightRandomNum.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightRandomNum);

        /** Msg_FightRandomNum num. */
        public num: number[];

        /**
         * Encodes the specified Msg_FightRandomNum message. Does not implicitly {@link proto.Msg_FightRandomNum.verify|verify} messages.
         * @param m Msg_FightRandomNum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightRandomNum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightRandomNum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightRandomNum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightRandomNum;
    }

    /** Properties of a Msg_FightSyncRandomReq. */
    interface IMsg_FightSyncRandomReq {

        /** Msg_FightSyncRandomReq fightInstanceId */
        fightInstanceId?: (number|null);
    }

    /** Represents a Msg_FightSyncRandomReq. */
    class Msg_FightSyncRandomReq implements IMsg_FightSyncRandomReq {

        /**
         * Constructs a new Msg_FightSyncRandomReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightSyncRandomReq);

        /** Msg_FightSyncRandomReq fightInstanceId. */
        public fightInstanceId: number;

        /**
         * Encodes the specified Msg_FightSyncRandomReq message. Does not implicitly {@link proto.Msg_FightSyncRandomReq.verify|verify} messages.
         * @param m Msg_FightSyncRandomReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightSyncRandomReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightSyncRandomReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightSyncRandomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightSyncRandomReq;
    }

    /** Properties of a Msg_FightSyncRandomRsp. */
    interface IMsg_FightSyncRandomRsp {

        /** Msg_FightSyncRandomRsp num */
        num?: (number[]|null);
    }

    /** Represents a Msg_FightSyncRandomRsp. */
    class Msg_FightSyncRandomRsp implements IMsg_FightSyncRandomRsp {

        /**
         * Constructs a new Msg_FightSyncRandomRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightSyncRandomRsp);

        /** Msg_FightSyncRandomRsp num. */
        public num: number[];

        /**
         * Encodes the specified Msg_FightSyncRandomRsp message. Does not implicitly {@link proto.Msg_FightSyncRandomRsp.verify|verify} messages.
         * @param m Msg_FightSyncRandomRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightSyncRandomRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightSyncRandomRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightSyncRandomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightSyncRandomRsp;
    }

    /** Properties of a Msg_FightBuildReq. */
    interface IMsg_FightBuildReq {

        /** Msg_FightBuildReq cardIndex */
        cardIndex?: (number|null);

        /** Msg_FightBuildReq row */
        row?: (number|null);

        /** Msg_FightBuildReq column */
        column?: (number|null);
    }

    /** Represents a Msg_FightBuildReq. */
    class Msg_FightBuildReq implements IMsg_FightBuildReq {

        /**
         * Constructs a new Msg_FightBuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightBuildReq);

        /** Msg_FightBuildReq cardIndex. */
        public cardIndex: number;

        /** Msg_FightBuildReq row. */
        public row: number;

        /** Msg_FightBuildReq column. */
        public column: number;

        /**
         * Encodes the specified Msg_FightBuildReq message. Does not implicitly {@link proto.Msg_FightBuildReq.verify|verify} messages.
         * @param m Msg_FightBuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightBuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightBuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightBuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightBuildReq;
    }

    /** Properties of a Msg_FightBuildRsp. */
    interface IMsg_FightBuildRsp {

        /** Msg_FightBuildRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightBuildRsp towerData */
        towerData?: (proto.IFightTowerData|null);

        /** Msg_FightBuildRsp nextCards */
        nextCards?: (number[]|null);

        /** Msg_FightBuildRsp leftCount */
        leftCount?: (number|null);

        /** Msg_FightBuildRsp combatData */
        combatData?: (proto.ICombatData[]|null);
    }

    /** Represents a Msg_FightBuildRsp. */
    class Msg_FightBuildRsp implements IMsg_FightBuildRsp {

        /**
         * Constructs a new Msg_FightBuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightBuildRsp);

        /** Msg_FightBuildRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightBuildRsp towerData. */
        public towerData?: (proto.IFightTowerData|null);

        /** Msg_FightBuildRsp nextCards. */
        public nextCards: number[];

        /** Msg_FightBuildRsp leftCount. */
        public leftCount: number;

        /** Msg_FightBuildRsp combatData. */
        public combatData: proto.ICombatData[];

        /**
         * Encodes the specified Msg_FightBuildRsp message. Does not implicitly {@link proto.Msg_FightBuildRsp.verify|verify} messages.
         * @param m Msg_FightBuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightBuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightBuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightBuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightBuildRsp;
    }

    /** Properties of a Msg_FightCompoundReq. */
    interface IMsg_FightCompoundReq {

        /** Msg_FightCompoundReq cmdID */
        cmdID?: (number|null);

        /** Msg_FightCompoundReq srcGridIndex */
        srcGridIndex?: (number|null);

        /** Msg_FightCompoundReq dstGridIndex */
        dstGridIndex?: (number|null);
    }

    /** Represents a Msg_FightCompoundReq. */
    class Msg_FightCompoundReq implements IMsg_FightCompoundReq {

        /**
         * Constructs a new Msg_FightCompoundReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightCompoundReq);

        /** Msg_FightCompoundReq cmdID. */
        public cmdID: number;

        /** Msg_FightCompoundReq srcGridIndex. */
        public srcGridIndex: number;

        /** Msg_FightCompoundReq dstGridIndex. */
        public dstGridIndex: number;

        /**
         * Encodes the specified Msg_FightCompoundReq message. Does not implicitly {@link proto.Msg_FightCompoundReq.verify|verify} messages.
         * @param m Msg_FightCompoundReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightCompoundReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightCompoundReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightCompoundReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightCompoundReq;
    }

    /** Properties of a Msg_FightCompoundRsp. */
    interface IMsg_FightCompoundRsp {

        /** Msg_FightCompoundRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightCompoundRsp cmdID */
        cmdID?: (number|null);
    }

    /** Represents a Msg_FightCompoundRsp. */
    class Msg_FightCompoundRsp implements IMsg_FightCompoundRsp {

        /**
         * Constructs a new Msg_FightCompoundRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightCompoundRsp);

        /** Msg_FightCompoundRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightCompoundRsp cmdID. */
        public cmdID: number;

        /**
         * Encodes the specified Msg_FightCompoundRsp message. Does not implicitly {@link proto.Msg_FightCompoundRsp.verify|verify} messages.
         * @param m Msg_FightCompoundRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightCompoundRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightCompoundRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightCompoundRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightCompoundRsp;
    }

    /** Properties of a PlayerFightDamageRecord. */
    interface IPlayerFightDamageRecord {

        /** PlayerFightDamageRecord damageRecord */
        damageRecord?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a PlayerFightDamageRecord. */
    class PlayerFightDamageRecord implements IPlayerFightDamageRecord {

        /**
         * Constructs a new PlayerFightDamageRecord.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerFightDamageRecord);

        /** PlayerFightDamageRecord damageRecord. */
        public damageRecord: { [k: string]: (number|Long) };

        /**
         * Encodes the specified PlayerFightDamageRecord message. Does not implicitly {@link proto.PlayerFightDamageRecord.verify|verify} messages.
         * @param m PlayerFightDamageRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerFightDamageRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerFightDamageRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerFightDamageRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerFightDamageRecord;
    }

    /** Properties of a Msg_FightSurrender. */
    interface IMsg_FightSurrender {
    }

    /** Represents a Msg_FightSurrender. */
    class Msg_FightSurrender implements IMsg_FightSurrender {

        /**
         * Constructs a new Msg_FightSurrender.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightSurrender);

        /**
         * Encodes the specified Msg_FightSurrender message. Does not implicitly {@link proto.Msg_FightSurrender.verify|verify} messages.
         * @param m Msg_FightSurrender message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightSurrender, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightSurrender message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightSurrender
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightSurrender;
    }

    /** Properties of a Msg_FightEnd. */
    interface IMsg_FightEnd {

        /** Msg_FightEnd isWin */
        isWin?: (boolean|null);

        /** Msg_FightEnd isSurrender */
        isSurrender?: (boolean|null);

        /** Msg_FightEnd changeCup */
        changeCup?: (number|null);

        /** Msg_FightEnd roleCup */
        roleCup?: (number|null);

        /** Msg_FightEnd killedBoss */
        killedBoss?: (number[]|null);

        /** Msg_FightEnd rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_FightEnd noBoxSpace */
        noBoxSpace?: (boolean|null);

        /** Msg_FightEnd waveNum */
        waveNum?: (number|null);

        /** Msg_FightEnd addLighting */
        addLighting?: (number|null);

        /** Msg_FightEnd fightType */
        fightType?: (number|null);

        /** Msg_FightEnd myDamage */
        myDamage?: (proto.IPlayerFightDamageRecord|null);

        /** Msg_FightEnd otherDamage */
        otherDamage?: (proto.IPlayerFightDamageRecord|null);

        /** Msg_FightEnd watchAdCount */
        watchAdCount?: (number|null);

        /** Msg_FightEnd otherChangeCup */
        otherChangeCup?: (number|null);
    }

    /** Represents a Msg_FightEnd. */
    class Msg_FightEnd implements IMsg_FightEnd {

        /**
         * Constructs a new Msg_FightEnd.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightEnd);

        /** Msg_FightEnd isWin. */
        public isWin: boolean;

        /** Msg_FightEnd isSurrender. */
        public isSurrender: boolean;

        /** Msg_FightEnd changeCup. */
        public changeCup: number;

        /** Msg_FightEnd roleCup. */
        public roleCup: number;

        /** Msg_FightEnd killedBoss. */
        public killedBoss: number[];

        /** Msg_FightEnd rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_FightEnd noBoxSpace. */
        public noBoxSpace: boolean;

        /** Msg_FightEnd waveNum. */
        public waveNum: number;

        /** Msg_FightEnd addLighting. */
        public addLighting: number;

        /** Msg_FightEnd fightType. */
        public fightType: number;

        /** Msg_FightEnd myDamage. */
        public myDamage?: (proto.IPlayerFightDamageRecord|null);

        /** Msg_FightEnd otherDamage. */
        public otherDamage?: (proto.IPlayerFightDamageRecord|null);

        /** Msg_FightEnd watchAdCount. */
        public watchAdCount: number;

        /** Msg_FightEnd otherChangeCup. */
        public otherChangeCup: number;

        /**
         * Encodes the specified Msg_FightEnd message. Does not implicitly {@link proto.Msg_FightEnd.verify|verify} messages.
         * @param m Msg_FightEnd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightEnd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightEnd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightEnd;
    }

    /** Properties of a Msg_FightStrengthReq. */
    interface IMsg_FightStrengthReq {

        /** Msg_FightStrengthReq cmdID */
        cmdID?: (number|null);

        /** Msg_FightStrengthReq strengthIndex */
        strengthIndex?: (number|null);
    }

    /** Represents a Msg_FightStrengthReq. */
    class Msg_FightStrengthReq implements IMsg_FightStrengthReq {

        /**
         * Constructs a new Msg_FightStrengthReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightStrengthReq);

        /** Msg_FightStrengthReq cmdID. */
        public cmdID: number;

        /** Msg_FightStrengthReq strengthIndex. */
        public strengthIndex: number;

        /**
         * Encodes the specified Msg_FightStrengthReq message. Does not implicitly {@link proto.Msg_FightStrengthReq.verify|verify} messages.
         * @param m Msg_FightStrengthReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightStrengthReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightStrengthReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightStrengthReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightStrengthReq;
    }

    /** Properties of a Msg_FightStrengthRsp. */
    interface IMsg_FightStrengthRsp {

        /** Msg_FightStrengthRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightStrengthRsp cmdID */
        cmdID?: (number|null);
    }

    /** Represents a Msg_FightStrengthRsp. */
    class Msg_FightStrengthRsp implements IMsg_FightStrengthRsp {

        /**
         * Constructs a new Msg_FightStrengthRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightStrengthRsp);

        /** Msg_FightStrengthRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightStrengthRsp cmdID. */
        public cmdID: number;

        /**
         * Encodes the specified Msg_FightStrengthRsp message. Does not implicitly {@link proto.Msg_FightStrengthRsp.verify|verify} messages.
         * @param m Msg_FightStrengthRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightStrengthRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightStrengthRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightStrengthRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightStrengthRsp;
    }

    /** Properties of a TowerStrengthData. */
    interface ITowerStrengthData {

        /** TowerStrengthData data */
        data?: (number[]|null);
    }

    /** Represents a TowerStrengthData. */
    class TowerStrengthData implements ITowerStrengthData {

        /**
         * Constructs a new TowerStrengthData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITowerStrengthData);

        /** TowerStrengthData data. */
        public data: number[];

        /**
         * Encodes the specified TowerStrengthData message. Does not implicitly {@link proto.TowerStrengthData.verify|verify} messages.
         * @param m TowerStrengthData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITowerStrengthData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TowerStrengthData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TowerStrengthData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TowerStrengthData;
    }

    /** Properties of a Msg_FightSnapshotReq. */
    interface IMsg_FightSnapshotReq {
    }

    /** Represents a Msg_FightSnapshotReq. */
    class Msg_FightSnapshotReq implements IMsg_FightSnapshotReq {

        /**
         * Constructs a new Msg_FightSnapshotReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightSnapshotReq);

        /**
         * Encodes the specified Msg_FightSnapshotReq message. Does not implicitly {@link proto.Msg_FightSnapshotReq.verify|verify} messages.
         * @param m Msg_FightSnapshotReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightSnapshotReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightSnapshotReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightSnapshotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightSnapshotReq;
    }

    /** Properties of a Msg_FightSnapshotRsp. */
    interface IMsg_FightSnapshotRsp {

        /** Msg_FightSnapshotRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightSnapshotRsp round */
        round?: (number|null);

        /** Msg_FightSnapshotRsp nextCards */
        nextCards?: (number[]|null);

        /** Msg_FightSnapshotRsp leftCount */
        leftCount?: (number|null);

        /** Msg_FightSnapshotRsp towers */
        towers?: (proto.IFightTowerData[]|null);

        /** Msg_FightSnapshotRsp combatData */
        combatData?: (proto.ICombatData[]|null);

        /** Msg_FightSnapshotRsp loseTag */
        loseTag?: (number|null);

        /** Msg_FightSnapshotRsp playerHeart */
        playerHeart?: (number[]|null);

        /** Msg_FightSnapshotRsp elpased */
        elpased?: (number|null);

        /** Msg_FightSnapshotRsp isCombatPhase */
        isCombatPhase?: (boolean|null);

        /** Msg_FightSnapshotRsp allData */
        allData?: (proto.IBountyFightData[]|null);

        /** Msg_FightSnapshotRsp opponentData */
        opponentData?: (proto.IBountyFightData|null);

        /** Msg_FightSnapshotRsp playerTag */
        playerTag?: (number|null);
    }

    /** Represents a Msg_FightSnapshotRsp. */
    class Msg_FightSnapshotRsp implements IMsg_FightSnapshotRsp {

        /**
         * Constructs a new Msg_FightSnapshotRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightSnapshotRsp);

        /** Msg_FightSnapshotRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightSnapshotRsp round. */
        public round: number;

        /** Msg_FightSnapshotRsp nextCards. */
        public nextCards: number[];

        /** Msg_FightSnapshotRsp leftCount. */
        public leftCount: number;

        /** Msg_FightSnapshotRsp towers. */
        public towers: proto.IFightTowerData[];

        /** Msg_FightSnapshotRsp combatData. */
        public combatData: proto.ICombatData[];

        /** Msg_FightSnapshotRsp loseTag. */
        public loseTag: number;

        /** Msg_FightSnapshotRsp playerHeart. */
        public playerHeart: number[];

        /** Msg_FightSnapshotRsp elpased. */
        public elpased: number;

        /** Msg_FightSnapshotRsp isCombatPhase. */
        public isCombatPhase: boolean;

        /** Msg_FightSnapshotRsp allData. */
        public allData: proto.IBountyFightData[];

        /** Msg_FightSnapshotRsp opponentData. */
        public opponentData?: (proto.IBountyFightData|null);

        /** Msg_FightSnapshotRsp playerTag. */
        public playerTag: number;

        /**
         * Encodes the specified Msg_FightSnapshotRsp message. Does not implicitly {@link proto.Msg_FightSnapshotRsp.verify|verify} messages.
         * @param m Msg_FightSnapshotRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightSnapshotRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightSnapshotRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightSnapshotRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightSnapshotRsp;
    }

    /** Properties of a Msg_ClientConstructionEnd. */
    interface IMsg_ClientConstructionEnd {
    }

    /** Represents a Msg_ClientConstructionEnd. */
    class Msg_ClientConstructionEnd implements IMsg_ClientConstructionEnd {

        /**
         * Constructs a new Msg_ClientConstructionEnd.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClientConstructionEnd);

        /**
         * Encodes the specified Msg_ClientConstructionEnd message. Does not implicitly {@link proto.Msg_ClientConstructionEnd.verify|verify} messages.
         * @param m Msg_ClientConstructionEnd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClientConstructionEnd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClientConstructionEnd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClientConstructionEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClientConstructionEnd;
    }

    /** Properties of a Msg_ClientCombatEnd. */
    interface IMsg_ClientCombatEnd {
    }

    /** Represents a Msg_ClientCombatEnd. */
    class Msg_ClientCombatEnd implements IMsg_ClientCombatEnd {

        /**
         * Constructs a new Msg_ClientCombatEnd.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClientCombatEnd);

        /**
         * Encodes the specified Msg_ClientCombatEnd message. Does not implicitly {@link proto.Msg_ClientCombatEnd.verify|verify} messages.
         * @param m Msg_ClientCombatEnd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClientCombatEnd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClientCombatEnd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClientCombatEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClientCombatEnd;
    }

    /** Properties of a Msg_FightLordSkillReq. */
    interface IMsg_FightLordSkillReq {

        /** Msg_FightLordSkillReq gridIdx */
        gridIdx?: (number|null);

        /** Msg_FightLordSkillReq playerTag */
        playerTag?: (number|null);
    }

    /** Represents a Msg_FightLordSkillReq. */
    class Msg_FightLordSkillReq implements IMsg_FightLordSkillReq {

        /**
         * Constructs a new Msg_FightLordSkillReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightLordSkillReq);

        /** Msg_FightLordSkillReq gridIdx. */
        public gridIdx: number;

        /** Msg_FightLordSkillReq playerTag. */
        public playerTag: number;

        /**
         * Encodes the specified Msg_FightLordSkillReq message. Does not implicitly {@link proto.Msg_FightLordSkillReq.verify|verify} messages.
         * @param m Msg_FightLordSkillReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightLordSkillReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightLordSkillReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightLordSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightLordSkillReq;
    }

    /** Properties of a Msg_FightLordSkillRsp. */
    interface IMsg_FightLordSkillRsp {

        /** Msg_FightLordSkillRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_FightLordSkillRsp countdown */
        countdown?: (number|null);

        /** Msg_FightLordSkillRsp currentCost */
        currentCost?: (number|null);

        /** Msg_FightLordSkillRsp nextCost */
        nextCost?: (number|null);
    }

    /** Represents a Msg_FightLordSkillRsp. */
    class Msg_FightLordSkillRsp implements IMsg_FightLordSkillRsp {

        /**
         * Constructs a new Msg_FightLordSkillRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightLordSkillRsp);

        /** Msg_FightLordSkillRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_FightLordSkillRsp countdown. */
        public countdown: number;

        /** Msg_FightLordSkillRsp currentCost. */
        public currentCost: number;

        /** Msg_FightLordSkillRsp nextCost. */
        public nextCost: number;

        /**
         * Encodes the specified Msg_FightLordSkillRsp message. Does not implicitly {@link proto.Msg_FightLordSkillRsp.verify|verify} messages.
         * @param m Msg_FightLordSkillRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightLordSkillRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightLordSkillRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightLordSkillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightLordSkillRsp;
    }

    /** Properties of a Msg_FightEmoji. */
    interface IMsg_FightEmoji {

        /** Msg_FightEmoji emojiID */
        emojiID?: (number|null);
    }

    /** Represents a Msg_FightEmoji. */
    class Msg_FightEmoji implements IMsg_FightEmoji {

        /**
         * Constructs a new Msg_FightEmoji.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightEmoji);

        /** Msg_FightEmoji emojiID. */
        public emojiID: number;

        /**
         * Encodes the specified Msg_FightEmoji message. Does not implicitly {@link proto.Msg_FightEmoji.verify|verify} messages.
         * @param m Msg_FightEmoji message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightEmoji, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightEmoji message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightEmoji
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightEmoji;
    }

    /** Properties of a Msg_FightEmojiSync. */
    interface IMsg_FightEmojiSync {

        /** Msg_FightEmojiSync emojiID */
        emojiID?: (number|null);
    }

    /** Represents a Msg_FightEmojiSync. */
    class Msg_FightEmojiSync implements IMsg_FightEmojiSync {

        /**
         * Constructs a new Msg_FightEmojiSync.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightEmojiSync);

        /** Msg_FightEmojiSync emojiID. */
        public emojiID: number;

        /**
         * Encodes the specified Msg_FightEmojiSync message. Does not implicitly {@link proto.Msg_FightEmojiSync.verify|verify} messages.
         * @param m Msg_FightEmojiSync message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightEmojiSync, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightEmojiSync message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightEmojiSync
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightEmojiSync;
    }

    /** PullCardType enum. */
    enum PullCardType {
        Free = 0,
        Normal = 1,
        HighClass = 2,
        Honour = 3
    }

    /** Properties of a PullCardData. */
    interface IPullCardData {

        /** PullCardData DayPullCount */
        DayPullCount?: (number|null);

        /** PullCardData FreePullCount */
        FreePullCount?: (number|null);

        /** PullCardData typeCount */
        typeCount?: ({ [k: string]: number }|null);
    }

    /** Represents a PullCardData. */
    class PullCardData implements IPullCardData {

        /**
         * Constructs a new PullCardData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPullCardData);

        /** PullCardData DayPullCount. */
        public DayPullCount: number;

        /** PullCardData FreePullCount. */
        public FreePullCount: number;

        /** PullCardData typeCount. */
        public typeCount: { [k: string]: number };

        /**
         * Encodes the specified PullCardData message. Does not implicitly {@link proto.PullCardData.verify|verify} messages.
         * @param m PullCardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPullCardData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PullCardData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PullCardData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PullCardData;
    }

    /** Properties of a Msg_PullCardInfoReq. */
    interface IMsg_PullCardInfoReq {
    }

    /** Represents a Msg_PullCardInfoReq. */
    class Msg_PullCardInfoReq implements IMsg_PullCardInfoReq {

        /**
         * Constructs a new Msg_PullCardInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PullCardInfoReq);

        /**
         * Encodes the specified Msg_PullCardInfoReq message. Does not implicitly {@link proto.Msg_PullCardInfoReq.verify|verify} messages.
         * @param m Msg_PullCardInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PullCardInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PullCardInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PullCardInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PullCardInfoReq;
    }

    /** Properties of a Msg_PullCardInfoRsp. */
    interface IMsg_PullCardInfoRsp {

        /** Msg_PullCardInfoRsp dayPullCount */
        dayPullCount?: (number|null);

        /** Msg_PullCardInfoRsp freePullCount */
        freePullCount?: (number|null);

        /** Msg_PullCardInfoRsp pullTypeCount */
        pullTypeCount?: ({ [k: string]: number }|null);
    }

    /** Represents a Msg_PullCardInfoRsp. */
    class Msg_PullCardInfoRsp implements IMsg_PullCardInfoRsp {

        /**
         * Constructs a new Msg_PullCardInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PullCardInfoRsp);

        /** Msg_PullCardInfoRsp dayPullCount. */
        public dayPullCount: number;

        /** Msg_PullCardInfoRsp freePullCount. */
        public freePullCount: number;

        /** Msg_PullCardInfoRsp pullTypeCount. */
        public pullTypeCount: { [k: string]: number };

        /**
         * Encodes the specified Msg_PullCardInfoRsp message. Does not implicitly {@link proto.Msg_PullCardInfoRsp.verify|verify} messages.
         * @param m Msg_PullCardInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PullCardInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PullCardInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PullCardInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PullCardInfoRsp;
    }

    /** Properties of a Msg_PullCardReq. */
    interface IMsg_PullCardReq {

        /** Msg_PullCardReq pullCardType */
        pullCardType?: (proto.PullCardType|null);
    }

    /** Represents a Msg_PullCardReq. */
    class Msg_PullCardReq implements IMsg_PullCardReq {

        /**
         * Constructs a new Msg_PullCardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PullCardReq);

        /** Msg_PullCardReq pullCardType. */
        public pullCardType: proto.PullCardType;

        /**
         * Encodes the specified Msg_PullCardReq message. Does not implicitly {@link proto.Msg_PullCardReq.verify|verify} messages.
         * @param m Msg_PullCardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PullCardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PullCardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PullCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PullCardReq;
    }

    /** Properties of a CardInfo. */
    interface ICardInfo {

        /** CardInfo cardID */
        cardID?: (number|null);

        /** CardInfo cardCount */
        cardCount?: (number|null);
    }

    /** Represents a CardInfo. */
    class CardInfo implements ICardInfo {

        /**
         * Constructs a new CardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICardInfo);

        /** CardInfo cardID. */
        public cardID: number;

        /** CardInfo cardCount. */
        public cardCount: number;

        /**
         * Encodes the specified CardInfo message. Does not implicitly {@link proto.CardInfo.verify|verify} messages.
         * @param m CardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CardInfo;
    }

    /** Properties of a Msg_PullCardRsp. */
    interface IMsg_PullCardRsp {

        /** Msg_PullCardRsp result */
        result?: (proto.Msg_PullCardRsp.ErrorCode|null);

        /** Msg_PullCardRsp pullCardType */
        pullCardType?: (proto.PullCardType|null);

        /** Msg_PullCardRsp pullCount */
        pullCount?: (number|null);

        /** Msg_PullCardRsp cards */
        cards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_PullCardRsp leftBuySuperBoxCount */
        leftBuySuperBoxCount?: (number|null);
    }

    /** Represents a Msg_PullCardRsp. */
    class Msg_PullCardRsp implements IMsg_PullCardRsp {

        /**
         * Constructs a new Msg_PullCardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PullCardRsp);

        /** Msg_PullCardRsp result. */
        public result: proto.Msg_PullCardRsp.ErrorCode;

        /** Msg_PullCardRsp pullCardType. */
        public pullCardType: proto.PullCardType;

        /** Msg_PullCardRsp pullCount. */
        public pullCount: number;

        /** Msg_PullCardRsp cards. */
        public cards: proto.IRewardSimpleInfo[];

        /** Msg_PullCardRsp leftBuySuperBoxCount. */
        public leftBuySuperBoxCount: number;

        /**
         * Encodes the specified Msg_PullCardRsp message. Does not implicitly {@link proto.Msg_PullCardRsp.verify|verify} messages.
         * @param m Msg_PullCardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PullCardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PullCardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PullCardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PullCardRsp;
    }

    namespace Msg_PullCardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Error = 1,
            NoFreeCount = 2,
            NoMoney = 3,
            NoPullCount = 4
        }
    }

    /** Properties of a Msg_CheckServerUTCTime. */
    interface IMsg_CheckServerUTCTime {

        /** Msg_CheckServerUTCTime serverUTC */
        serverUTC?: (number|Long|null);
    }

    /** Represents a Msg_CheckServerUTCTime. */
    class Msg_CheckServerUTCTime implements IMsg_CheckServerUTCTime {

        /**
         * Constructs a new Msg_CheckServerUTCTime.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CheckServerUTCTime);

        /** Msg_CheckServerUTCTime serverUTC. */
        public serverUTC: (number|Long);

        /**
         * Encodes the specified Msg_CheckServerUTCTime message. Does not implicitly {@link proto.Msg_CheckServerUTCTime.verify|verify} messages.
         * @param m Msg_CheckServerUTCTime message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CheckServerUTCTime, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CheckServerUTCTime message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CheckServerUTCTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CheckServerUTCTime;
    }

    /** Properties of a Msg_ChangeTeamIndexReq. */
    interface IMsg_ChangeTeamIndexReq {

        /** Msg_ChangeTeamIndexReq deckIndex */
        deckIndex?: (number|null);
    }

    /** Represents a Msg_ChangeTeamIndexReq. */
    class Msg_ChangeTeamIndexReq implements IMsg_ChangeTeamIndexReq {

        /**
         * Constructs a new Msg_ChangeTeamIndexReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeTeamIndexReq);

        /** Msg_ChangeTeamIndexReq deckIndex. */
        public deckIndex: number;

        /**
         * Encodes the specified Msg_ChangeTeamIndexReq message. Does not implicitly {@link proto.Msg_ChangeTeamIndexReq.verify|verify} messages.
         * @param m Msg_ChangeTeamIndexReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeTeamIndexReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeTeamIndexReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeTeamIndexReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeTeamIndexReq;
    }

    /** Properties of a Msg_ChangeTeamIndexRsp. */
    interface IMsg_ChangeTeamIndexRsp {

        /** Msg_ChangeTeamIndexRsp result */
        result?: (proto.Msg_ChangeTeamIndexRsp.ErrorCode|null);
    }

    /** Represents a Msg_ChangeTeamIndexRsp. */
    class Msg_ChangeTeamIndexRsp implements IMsg_ChangeTeamIndexRsp {

        /**
         * Constructs a new Msg_ChangeTeamIndexRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeTeamIndexRsp);

        /** Msg_ChangeTeamIndexRsp result. */
        public result: proto.Msg_ChangeTeamIndexRsp.ErrorCode;

        /**
         * Encodes the specified Msg_ChangeTeamIndexRsp message. Does not implicitly {@link proto.Msg_ChangeTeamIndexRsp.verify|verify} messages.
         * @param m Msg_ChangeTeamIndexRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeTeamIndexRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeTeamIndexRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeTeamIndexRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeTeamIndexRsp;
    }

    namespace Msg_ChangeTeamIndexRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TeamIndexError = 1
        }
    }

    /** Properties of a Msg_ChangeNameReq. */
    interface IMsg_ChangeNameReq {

        /** Msg_ChangeNameReq name */
        name?: (string|null);
    }

    /** Represents a Msg_ChangeNameReq. */
    class Msg_ChangeNameReq implements IMsg_ChangeNameReq {

        /**
         * Constructs a new Msg_ChangeNameReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeNameReq);

        /** Msg_ChangeNameReq name. */
        public name: string;

        /**
         * Encodes the specified Msg_ChangeNameReq message. Does not implicitly {@link proto.Msg_ChangeNameReq.verify|verify} messages.
         * @param m Msg_ChangeNameReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeNameReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeNameReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeNameReq;
    }

    /** Properties of a Msg_ChangeNameRsp. */
    interface IMsg_ChangeNameRsp {

        /** Msg_ChangeNameRsp result */
        result?: (proto.Msg_ChangeNameRsp.ErrorCode|null);

        /** Msg_ChangeNameRsp name */
        name?: (string|null);
    }

    /** Represents a Msg_ChangeNameRsp. */
    class Msg_ChangeNameRsp implements IMsg_ChangeNameRsp {

        /**
         * Constructs a new Msg_ChangeNameRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeNameRsp);

        /** Msg_ChangeNameRsp result. */
        public result: proto.Msg_ChangeNameRsp.ErrorCode;

        /** Msg_ChangeNameRsp name. */
        public name: string;

        /**
         * Encodes the specified Msg_ChangeNameRsp message. Does not implicitly {@link proto.Msg_ChangeNameRsp.verify|verify} messages.
         * @param m Msg_ChangeNameRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeNameRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeNameRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeNameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeNameRsp;
    }

    namespace Msg_ChangeNameRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            SensitiveWordError = 1,
            LengthInvalid = 2,
            NameRepeat = 3,
            DiamondNotEnough = 4
        }
    }

    /** Properties of a Msg_HowManyTimesChangeNameReq. */
    interface IMsg_HowManyTimesChangeNameReq {
    }

    /** Represents a Msg_HowManyTimesChangeNameReq. */
    class Msg_HowManyTimesChangeNameReq implements IMsg_HowManyTimesChangeNameReq {

        /**
         * Constructs a new Msg_HowManyTimesChangeNameReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_HowManyTimesChangeNameReq);

        /**
         * Encodes the specified Msg_HowManyTimesChangeNameReq message. Does not implicitly {@link proto.Msg_HowManyTimesChangeNameReq.verify|verify} messages.
         * @param m Msg_HowManyTimesChangeNameReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_HowManyTimesChangeNameReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_HowManyTimesChangeNameReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_HowManyTimesChangeNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HowManyTimesChangeNameReq;
    }

    /** Properties of a Msg_HowManyTimesChangeNameRsp. */
    interface IMsg_HowManyTimesChangeNameRsp {

        /** Msg_HowManyTimesChangeNameRsp count */
        count?: (number|null);

        /** Msg_HowManyTimesChangeNameRsp costDiamond */
        costDiamond?: (number|null);
    }

    /** Represents a Msg_HowManyTimesChangeNameRsp. */
    class Msg_HowManyTimesChangeNameRsp implements IMsg_HowManyTimesChangeNameRsp {

        /**
         * Constructs a new Msg_HowManyTimesChangeNameRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_HowManyTimesChangeNameRsp);

        /** Msg_HowManyTimesChangeNameRsp count. */
        public count: number;

        /** Msg_HowManyTimesChangeNameRsp costDiamond. */
        public costDiamond: number;

        /**
         * Encodes the specified Msg_HowManyTimesChangeNameRsp message. Does not implicitly {@link proto.Msg_HowManyTimesChangeNameRsp.verify|verify} messages.
         * @param m Msg_HowManyTimesChangeNameRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_HowManyTimesChangeNameRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_HowManyTimesChangeNameRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_HowManyTimesChangeNameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HowManyTimesChangeNameRsp;
    }

    /** Properties of a RankBoxData. */
    interface IRankBoxData {

        /** RankBoxData boxId */
        boxId?: (number|null);

        /** RankBoxData rankLevel */
        rankLevel?: (number|null);

        /** RankBoxData state */
        state?: (proto.RankBoxData.BoxState|null);

        /** RankBoxData unlockTime */
        unlockTime?: (number|null);

        /** RankBoxData startUnlockTime */
        startUnlockTime?: (number|null);
    }

    /** Represents a RankBoxData. */
    class RankBoxData implements IRankBoxData {

        /**
         * Constructs a new RankBoxData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankBoxData);

        /** RankBoxData boxId. */
        public boxId: number;

        /** RankBoxData rankLevel. */
        public rankLevel: number;

        /** RankBoxData state. */
        public state: proto.RankBoxData.BoxState;

        /** RankBoxData unlockTime. */
        public unlockTime: number;

        /** RankBoxData startUnlockTime. */
        public startUnlockTime: number;

        /**
         * Encodes the specified RankBoxData message. Does not implicitly {@link proto.RankBoxData.verify|verify} messages.
         * @param m RankBoxData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankBoxData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankBoxData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankBoxData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankBoxData;
    }

    namespace RankBoxData {

        /** BoxState enum. */
        enum BoxState {
            None = 0,
            Lock = 1,
            Unlocking = 2,
            Reserve = 3,
            Unlocked = 4
        }
    }

    /** Properties of a RankPackageData. */
    interface IRankPackageData {

        /** RankPackageData rankBoxList */
        rankBoxList?: (proto.IRankBoxData[]|null);

        /** RankPackageData boxLoopId */
        boxLoopId?: (number|null);
    }

    /** Represents a RankPackageData. */
    class RankPackageData implements IRankPackageData {

        /**
         * Constructs a new RankPackageData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankPackageData);

        /** RankPackageData rankBoxList. */
        public rankBoxList: proto.IRankBoxData[];

        /** RankPackageData boxLoopId. */
        public boxLoopId: number;

        /**
         * Encodes the specified RankPackageData message. Does not implicitly {@link proto.RankPackageData.verify|verify} messages.
         * @param m RankPackageData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankPackageData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankPackageData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankPackageData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankPackageData;
    }

    /** Properties of a Msg_GetRankPackageInfoReq. */
    interface IMsg_GetRankPackageInfoReq {
    }

    /** Represents a Msg_GetRankPackageInfoReq. */
    class Msg_GetRankPackageInfoReq implements IMsg_GetRankPackageInfoReq {

        /**
         * Constructs a new Msg_GetRankPackageInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankPackageInfoReq);

        /**
         * Encodes the specified Msg_GetRankPackageInfoReq message. Does not implicitly {@link proto.Msg_GetRankPackageInfoReq.verify|verify} messages.
         * @param m Msg_GetRankPackageInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankPackageInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankPackageInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankPackageInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankPackageInfoReq;
    }

    /** Properties of a Msg_GetRankPackageInfoRsp. */
    interface IMsg_GetRankPackageInfoRsp {

        /** Msg_GetRankPackageInfoRsp rankBoxList */
        rankBoxList?: (proto.IRankBoxData[]|null);
    }

    /** Represents a Msg_GetRankPackageInfoRsp. */
    class Msg_GetRankPackageInfoRsp implements IMsg_GetRankPackageInfoRsp {

        /**
         * Constructs a new Msg_GetRankPackageInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankPackageInfoRsp);

        /** Msg_GetRankPackageInfoRsp rankBoxList. */
        public rankBoxList: proto.IRankBoxData[];

        /**
         * Encodes the specified Msg_GetRankPackageInfoRsp message. Does not implicitly {@link proto.Msg_GetRankPackageInfoRsp.verify|verify} messages.
         * @param m Msg_GetRankPackageInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankPackageInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankPackageInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankPackageInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankPackageInfoRsp;
    }

    /** Properties of a Msg_UnlockRankBoxReq. */
    interface IMsg_UnlockRankBoxReq {

        /** Msg_UnlockRankBoxReq boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_UnlockRankBoxReq. */
    class Msg_UnlockRankBoxReq implements IMsg_UnlockRankBoxReq {

        /**
         * Constructs a new Msg_UnlockRankBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UnlockRankBoxReq);

        /** Msg_UnlockRankBoxReq boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_UnlockRankBoxReq message. Does not implicitly {@link proto.Msg_UnlockRankBoxReq.verify|verify} messages.
         * @param m Msg_UnlockRankBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UnlockRankBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UnlockRankBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UnlockRankBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UnlockRankBoxReq;
    }

    /** Properties of a Msg_UnlockRankBoxRsp. */
    interface IMsg_UnlockRankBoxRsp {

        /** Msg_UnlockRankBoxRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_UnlockRankBoxRsp boxPosIndex */
        boxPosIndex?: (number|null);

        /** Msg_UnlockRankBoxRsp curBox */
        curBox?: (proto.IRankBoxData|null);
    }

    /** Represents a Msg_UnlockRankBoxRsp. */
    class Msg_UnlockRankBoxRsp implements IMsg_UnlockRankBoxRsp {

        /**
         * Constructs a new Msg_UnlockRankBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UnlockRankBoxRsp);

        /** Msg_UnlockRankBoxRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_UnlockRankBoxRsp boxPosIndex. */
        public boxPosIndex: number;

        /** Msg_UnlockRankBoxRsp curBox. */
        public curBox?: (proto.IRankBoxData|null);

        /**
         * Encodes the specified Msg_UnlockRankBoxRsp message. Does not implicitly {@link proto.Msg_UnlockRankBoxRsp.verify|verify} messages.
         * @param m Msg_UnlockRankBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UnlockRankBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UnlockRankBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UnlockRankBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UnlockRankBoxRsp;
    }

    /** Properties of a Msg_ReserveRankBoxReq. */
    interface IMsg_ReserveRankBoxReq {

        /** Msg_ReserveRankBoxReq boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_ReserveRankBoxReq. */
    class Msg_ReserveRankBoxReq implements IMsg_ReserveRankBoxReq {

        /**
         * Constructs a new Msg_ReserveRankBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReserveRankBoxReq);

        /** Msg_ReserveRankBoxReq boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_ReserveRankBoxReq message. Does not implicitly {@link proto.Msg_ReserveRankBoxReq.verify|verify} messages.
         * @param m Msg_ReserveRankBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReserveRankBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReserveRankBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReserveRankBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReserveRankBoxReq;
    }

    /** Properties of a Msg_ReserveRankBoxRsp. */
    interface IMsg_ReserveRankBoxRsp {

        /** Msg_ReserveRankBoxRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_ReserveRankBoxRsp boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_ReserveRankBoxRsp. */
    class Msg_ReserveRankBoxRsp implements IMsg_ReserveRankBoxRsp {

        /**
         * Constructs a new Msg_ReserveRankBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReserveRankBoxRsp);

        /** Msg_ReserveRankBoxRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_ReserveRankBoxRsp boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_ReserveRankBoxRsp message. Does not implicitly {@link proto.Msg_ReserveRankBoxRsp.verify|verify} messages.
         * @param m Msg_ReserveRankBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReserveRankBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReserveRankBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReserveRankBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReserveRankBoxRsp;
    }

    /** Properties of a Msg_OpenRankBoxReq. */
    interface IMsg_OpenRankBoxReq {

        /** Msg_OpenRankBoxReq boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_OpenRankBoxReq. */
    class Msg_OpenRankBoxReq implements IMsg_OpenRankBoxReq {

        /**
         * Constructs a new Msg_OpenRankBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OpenRankBoxReq);

        /** Msg_OpenRankBoxReq boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_OpenRankBoxReq message. Does not implicitly {@link proto.Msg_OpenRankBoxReq.verify|verify} messages.
         * @param m Msg_OpenRankBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OpenRankBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OpenRankBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OpenRankBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OpenRankBoxReq;
    }

    /** Properties of a Msg_OpenRankBoxRsp. */
    interface IMsg_OpenRankBoxRsp {

        /** Msg_OpenRankBoxRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_OpenRankBoxRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_OpenRankBoxRsp boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_OpenRankBoxRsp. */
    class Msg_OpenRankBoxRsp implements IMsg_OpenRankBoxRsp {

        /**
         * Constructs a new Msg_OpenRankBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OpenRankBoxRsp);

        /** Msg_OpenRankBoxRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_OpenRankBoxRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_OpenRankBoxRsp boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_OpenRankBoxRsp message. Does not implicitly {@link proto.Msg_OpenRankBoxRsp.verify|verify} messages.
         * @param m Msg_OpenRankBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OpenRankBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OpenRankBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OpenRankBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OpenRankBoxRsp;
    }

    /** OpenRankBoxType enum. */
    enum OpenRankBoxType {
        ORB_Diamond = 0,
        ORB_AD = 1
    }

    /** Properties of a Msg_ImmediatelyOpenRankBoxReq. */
    interface IMsg_ImmediatelyOpenRankBoxReq {

        /** Msg_ImmediatelyOpenRankBoxReq boxPosIndex */
        boxPosIndex?: (number|null);

        /** Msg_ImmediatelyOpenRankBoxReq openType */
        openType?: (proto.OpenRankBoxType|null);
    }

    /** Represents a Msg_ImmediatelyOpenRankBoxReq. */
    class Msg_ImmediatelyOpenRankBoxReq implements IMsg_ImmediatelyOpenRankBoxReq {

        /**
         * Constructs a new Msg_ImmediatelyOpenRankBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImmediatelyOpenRankBoxReq);

        /** Msg_ImmediatelyOpenRankBoxReq boxPosIndex. */
        public boxPosIndex: number;

        /** Msg_ImmediatelyOpenRankBoxReq openType. */
        public openType: proto.OpenRankBoxType;

        /**
         * Encodes the specified Msg_ImmediatelyOpenRankBoxReq message. Does not implicitly {@link proto.Msg_ImmediatelyOpenRankBoxReq.verify|verify} messages.
         * @param m Msg_ImmediatelyOpenRankBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImmediatelyOpenRankBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImmediatelyOpenRankBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImmediatelyOpenRankBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImmediatelyOpenRankBoxReq;
    }

    /** Properties of a Msg_ImmediatelyOpenRankBoxRsp. */
    interface IMsg_ImmediatelyOpenRankBoxRsp {

        /** Msg_ImmediatelyOpenRankBoxRsp result */
        result?: (proto.Msg_ImmediatelyOpenRankBoxRsp.ErrorCode|null);

        /** Msg_ImmediatelyOpenRankBoxRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ImmediatelyOpenRankBoxRsp boxPosIndex */
        boxPosIndex?: (number|null);
    }

    /** Represents a Msg_ImmediatelyOpenRankBoxRsp. */
    class Msg_ImmediatelyOpenRankBoxRsp implements IMsg_ImmediatelyOpenRankBoxRsp {

        /**
         * Constructs a new Msg_ImmediatelyOpenRankBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImmediatelyOpenRankBoxRsp);

        /** Msg_ImmediatelyOpenRankBoxRsp result. */
        public result: proto.Msg_ImmediatelyOpenRankBoxRsp.ErrorCode;

        /** Msg_ImmediatelyOpenRankBoxRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_ImmediatelyOpenRankBoxRsp boxPosIndex. */
        public boxPosIndex: number;

        /**
         * Encodes the specified Msg_ImmediatelyOpenRankBoxRsp message. Does not implicitly {@link proto.Msg_ImmediatelyOpenRankBoxRsp.verify|verify} messages.
         * @param m Msg_ImmediatelyOpenRankBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImmediatelyOpenRankBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImmediatelyOpenRankBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImmediatelyOpenRankBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImmediatelyOpenRankBoxRsp;
    }

    namespace Msg_ImmediatelyOpenRankBoxRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NotEnoughDiamond = 1,
            OperatorFailed = 2
        }
    }

    /** Properties of a Msg_PushPreventIndulge. */
    interface IMsg_PushPreventIndulge {

        /** Msg_PushPreventIndulge type */
        type?: (proto.Msg_PushPreventIndulge.PreventIndulgeType|null);
    }

    /** Represents a Msg_PushPreventIndulge. */
    class Msg_PushPreventIndulge implements IMsg_PushPreventIndulge {

        /**
         * Constructs a new Msg_PushPreventIndulge.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushPreventIndulge);

        /** Msg_PushPreventIndulge type. */
        public type: proto.Msg_PushPreventIndulge.PreventIndulgeType;

        /**
         * Encodes the specified Msg_PushPreventIndulge message. Does not implicitly {@link proto.Msg_PushPreventIndulge.verify|verify} messages.
         * @param m Msg_PushPreventIndulge message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushPreventIndulge, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushPreventIndulge message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushPreventIndulge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushPreventIndulge;
    }

    namespace Msg_PushPreventIndulge {

        /** PreventIndulgeType enum. */
        enum PreventIndulgeType {
            None = 0,
            KickingOffLine = 1,
            PayNotAdult = 2,
            SpecialTime = 3
        }
    }

    /** Properties of a Msg_PushDailyRefresh. */
    interface IMsg_PushDailyRefresh {
    }

    /** Represents a Msg_PushDailyRefresh. */
    class Msg_PushDailyRefresh implements IMsg_PushDailyRefresh {

        /**
         * Constructs a new Msg_PushDailyRefresh.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushDailyRefresh);

        /**
         * Encodes the specified Msg_PushDailyRefresh message. Does not implicitly {@link proto.Msg_PushDailyRefresh.verify|verify} messages.
         * @param m Msg_PushDailyRefresh message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushDailyRefresh, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushDailyRefresh message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushDailyRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushDailyRefresh;
    }

    /** Properties of a Msg_TaskInfoReq. */
    interface IMsg_TaskInfoReq {
    }

    /** Represents a Msg_TaskInfoReq. */
    class Msg_TaskInfoReq implements IMsg_TaskInfoReq {

        /**
         * Constructs a new Msg_TaskInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskInfoReq);

        /**
         * Encodes the specified Msg_TaskInfoReq message. Does not implicitly {@link proto.Msg_TaskInfoReq.verify|verify} messages.
         * @param m Msg_TaskInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskInfoReq;
    }

    /** Properties of a GiftData. */
    interface IGiftData {

        /** GiftData UUId */
        UUId?: (string|null);

        /** GiftData giftId */
        giftId?: (number|null);

        /** GiftData state */
        state?: (proto.TaskState|null);

        /** GiftData refreshUTC */
        refreshUTC?: (number|Long|null);
    }

    /** Represents a GiftData. */
    class GiftData implements IGiftData {

        /**
         * Constructs a new GiftData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGiftData);

        /** GiftData UUId. */
        public UUId: string;

        /** GiftData giftId. */
        public giftId: number;

        /** GiftData state. */
        public state: proto.TaskState;

        /** GiftData refreshUTC. */
        public refreshUTC: (number|Long);

        /**
         * Encodes the specified GiftData message. Does not implicitly {@link proto.GiftData.verify|verify} messages.
         * @param m GiftData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGiftData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GiftData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GiftData;
    }

    /** Properties of a TaskCommonData. */
    interface ITaskCommonData {

        /** TaskCommonData goalBoxScore */
        goalBoxScore?: (number|null);

        /** TaskCommonData goalBoxId */
        goalBoxId?: (number|null);

        /** TaskCommonData boxGroupId */
        boxGroupId?: (number|null);

        /** TaskCommonData dailyGifts */
        dailyGifts?: (proto.IGiftData[]|null);

        /** TaskCommonData dailyTasks */
        dailyTasks?: (proto.ITaskData[]|null);

        /** TaskCommonData taskRefreshCount */
        taskRefreshCount?: (number|null);

        /** TaskCommonData ADRefreshUTC */
        ADRefreshUTC?: (number|Long|null);

        /** TaskCommonData RPRefreshByADCount */
        RPRefreshByADCount?: (number|null);

        /** TaskCommonData RPRefreshCount */
        RPRefreshCount?: (number|null);
    }

    /** Represents a TaskCommonData. */
    class TaskCommonData implements ITaskCommonData {

        /**
         * Constructs a new TaskCommonData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITaskCommonData);

        /** TaskCommonData goalBoxScore. */
        public goalBoxScore: number;

        /** TaskCommonData goalBoxId. */
        public goalBoxId: number;

        /** TaskCommonData boxGroupId. */
        public boxGroupId: number;

        /** TaskCommonData dailyGifts. */
        public dailyGifts: proto.IGiftData[];

        /** TaskCommonData dailyTasks. */
        public dailyTasks: proto.ITaskData[];

        /** TaskCommonData taskRefreshCount. */
        public taskRefreshCount: number;

        /** TaskCommonData ADRefreshUTC. */
        public ADRefreshUTC: (number|Long);

        /** TaskCommonData RPRefreshByADCount. */
        public RPRefreshByADCount: number;

        /** TaskCommonData RPRefreshCount. */
        public RPRefreshCount: number;

        /**
         * Encodes the specified TaskCommonData message. Does not implicitly {@link proto.TaskCommonData.verify|verify} messages.
         * @param m TaskCommonData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITaskCommonData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskCommonData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaskCommonData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TaskCommonData;
    }

    /** TaskState enum. */
    enum TaskState {
        Open = 0,
        Reward = 1,
        HaveReward = 2,
        UnOpen = 3
    }

    /** Properties of a GiftInfo. */
    interface IGiftInfo {

        /** GiftInfo UUId */
        UUId?: (string|null);

        /** GiftInfo giftId */
        giftId?: (number|null);

        /** GiftInfo state */
        state?: (proto.TaskState|null);

        /** GiftInfo leftSec */
        leftSec?: (number|null);
    }

    /** Represents a GiftInfo. */
    class GiftInfo implements IGiftInfo {

        /**
         * Constructs a new GiftInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGiftInfo);

        /** GiftInfo UUId. */
        public UUId: string;

        /** GiftInfo giftId. */
        public giftId: number;

        /** GiftInfo state. */
        public state: proto.TaskState;

        /** GiftInfo leftSec. */
        public leftSec: number;

        /**
         * Encodes the specified GiftInfo message. Does not implicitly {@link proto.GiftInfo.verify|verify} messages.
         * @param m GiftInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGiftInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GiftInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GiftInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GiftInfo;
    }

    /** Properties of a TaskData. */
    interface ITaskData {

        /** TaskData UUId */
        UUId?: (string|null);

        /** TaskData taskId */
        taskId?: (number|null);

        /** TaskData state */
        state?: (proto.TaskState|null);

        /** TaskData score */
        score?: (number|null);
    }

    /** Represents a TaskData. */
    class TaskData implements ITaskData {

        /**
         * Constructs a new TaskData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITaskData);

        /** TaskData UUId. */
        public UUId: string;

        /** TaskData taskId. */
        public taskId: number;

        /** TaskData state. */
        public state: proto.TaskState;

        /** TaskData score. */
        public score: number;

        /**
         * Encodes the specified TaskData message. Does not implicitly {@link proto.TaskData.verify|verify} messages.
         * @param m TaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TaskData;
    }

    /** Properties of a Msg_TaskInfoRsp. */
    interface IMsg_TaskInfoRsp {

        /** Msg_TaskInfoRsp goalBoxScore */
        goalBoxScore?: (number|null);

        /** Msg_TaskInfoRsp boxGroupId */
        boxGroupId?: (number|null);

        /** Msg_TaskInfoRsp dailyGifts */
        dailyGifts?: (proto.IGiftInfo[]|null);

        /** Msg_TaskInfoRsp dailyTasks */
        dailyTasks?: (proto.ITaskData[]|null);

        /** Msg_TaskInfoRsp taskFreeRefreshTimes */
        taskFreeRefreshTimes?: (number|null);

        /** Msg_TaskInfoRsp adRefreshLeftSec */
        adRefreshLeftSec?: (number|null);

        /** Msg_TaskInfoRsp ADReplaceRefreshTimes */
        ADReplaceRefreshTimes?: (number|null);
    }

    /** Represents a Msg_TaskInfoRsp. */
    class Msg_TaskInfoRsp implements IMsg_TaskInfoRsp {

        /**
         * Constructs a new Msg_TaskInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskInfoRsp);

        /** Msg_TaskInfoRsp goalBoxScore. */
        public goalBoxScore: number;

        /** Msg_TaskInfoRsp boxGroupId. */
        public boxGroupId: number;

        /** Msg_TaskInfoRsp dailyGifts. */
        public dailyGifts: proto.IGiftInfo[];

        /** Msg_TaskInfoRsp dailyTasks. */
        public dailyTasks: proto.ITaskData[];

        /** Msg_TaskInfoRsp taskFreeRefreshTimes. */
        public taskFreeRefreshTimes: number;

        /** Msg_TaskInfoRsp adRefreshLeftSec. */
        public adRefreshLeftSec: number;

        /** Msg_TaskInfoRsp ADReplaceRefreshTimes. */
        public ADReplaceRefreshTimes: number;

        /**
         * Encodes the specified Msg_TaskInfoRsp message. Does not implicitly {@link proto.Msg_TaskInfoRsp.verify|verify} messages.
         * @param m Msg_TaskInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskInfoRsp;
    }

    /** Properties of a Msg_TaskGetGoalBoxReq. */
    interface IMsg_TaskGetGoalBoxReq {

        /** Msg_TaskGetGoalBoxReq boxGroupId */
        boxGroupId?: (number|null);
    }

    /** Represents a Msg_TaskGetGoalBoxReq. */
    class Msg_TaskGetGoalBoxReq implements IMsg_TaskGetGoalBoxReq {

        /**
         * Constructs a new Msg_TaskGetGoalBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetGoalBoxReq);

        /** Msg_TaskGetGoalBoxReq boxGroupId. */
        public boxGroupId: number;

        /**
         * Encodes the specified Msg_TaskGetGoalBoxReq message. Does not implicitly {@link proto.Msg_TaskGetGoalBoxReq.verify|verify} messages.
         * @param m Msg_TaskGetGoalBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetGoalBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetGoalBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetGoalBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetGoalBoxReq;
    }

    /** Properties of a Msg_TaskGetGoalBoxRsp. */
    interface IMsg_TaskGetGoalBoxRsp {

        /** Msg_TaskGetGoalBoxRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_TaskGetGoalBoxRsp boxGroupId */
        boxGroupId?: (number|null);

        /** Msg_TaskGetGoalBoxRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_TaskGetGoalBoxRsp refreshBoxGroupId */
        refreshBoxGroupId?: (number|null);

        /** Msg_TaskGetGoalBoxRsp goalBoxScore */
        goalBoxScore?: (number|null);
    }

    /** Represents a Msg_TaskGetGoalBoxRsp. */
    class Msg_TaskGetGoalBoxRsp implements IMsg_TaskGetGoalBoxRsp {

        /**
         * Constructs a new Msg_TaskGetGoalBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetGoalBoxRsp);

        /** Msg_TaskGetGoalBoxRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_TaskGetGoalBoxRsp boxGroupId. */
        public boxGroupId: number;

        /** Msg_TaskGetGoalBoxRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_TaskGetGoalBoxRsp refreshBoxGroupId. */
        public refreshBoxGroupId: number;

        /** Msg_TaskGetGoalBoxRsp goalBoxScore. */
        public goalBoxScore: number;

        /**
         * Encodes the specified Msg_TaskGetGoalBoxRsp message. Does not implicitly {@link proto.Msg_TaskGetGoalBoxRsp.verify|verify} messages.
         * @param m Msg_TaskGetGoalBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetGoalBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetGoalBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetGoalBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetGoalBoxRsp;
    }

    /** Properties of a Msg_TaskGetGiftReq. */
    interface IMsg_TaskGetGiftReq {

        /** Msg_TaskGetGiftReq giftUUId */
        giftUUId?: (string|null);
    }

    /** Represents a Msg_TaskGetGiftReq. */
    class Msg_TaskGetGiftReq implements IMsg_TaskGetGiftReq {

        /**
         * Constructs a new Msg_TaskGetGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetGiftReq);

        /** Msg_TaskGetGiftReq giftUUId. */
        public giftUUId: string;

        /**
         * Encodes the specified Msg_TaskGetGiftReq message. Does not implicitly {@link proto.Msg_TaskGetGiftReq.verify|verify} messages.
         * @param m Msg_TaskGetGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetGiftReq;
    }

    /** Properties of a Msg_TaskGetGiftRsp. */
    interface IMsg_TaskGetGiftRsp {

        /** Msg_TaskGetGiftRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_TaskGetGiftRsp giftUUId */
        giftUUId?: (string|null);

        /** Msg_TaskGetGiftRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_TaskGetGiftRsp refreshGift */
        refreshGift?: (proto.IGiftInfo|null);
    }

    /** Represents a Msg_TaskGetGiftRsp. */
    class Msg_TaskGetGiftRsp implements IMsg_TaskGetGiftRsp {

        /**
         * Constructs a new Msg_TaskGetGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetGiftRsp);

        /** Msg_TaskGetGiftRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_TaskGetGiftRsp giftUUId. */
        public giftUUId: string;

        /** Msg_TaskGetGiftRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /** Msg_TaskGetGiftRsp refreshGift. */
        public refreshGift?: (proto.IGiftInfo|null);

        /**
         * Encodes the specified Msg_TaskGetGiftRsp message. Does not implicitly {@link proto.Msg_TaskGetGiftRsp.verify|verify} messages.
         * @param m Msg_TaskGetGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetGiftRsp;
    }

    /** Properties of a Msg_TaskGetRewardReq. */
    interface IMsg_TaskGetRewardReq {

        /** Msg_TaskGetRewardReq taskUUId */
        taskUUId?: (string|null);
    }

    /** Represents a Msg_TaskGetRewardReq. */
    class Msg_TaskGetRewardReq implements IMsg_TaskGetRewardReq {

        /**
         * Constructs a new Msg_TaskGetRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetRewardReq);

        /** Msg_TaskGetRewardReq taskUUId. */
        public taskUUId: string;

        /**
         * Encodes the specified Msg_TaskGetRewardReq message. Does not implicitly {@link proto.Msg_TaskGetRewardReq.verify|verify} messages.
         * @param m Msg_TaskGetRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetRewardReq;
    }

    /** Properties of a Msg_TaskGetRewardRsp. */
    interface IMsg_TaskGetRewardRsp {

        /** Msg_TaskGetRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_TaskGetRewardRsp taskInfo */
        taskInfo?: (proto.ITaskData|null);

        /** Msg_TaskGetRewardRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_TaskGetRewardRsp. */
    class Msg_TaskGetRewardRsp implements IMsg_TaskGetRewardRsp {

        /**
         * Constructs a new Msg_TaskGetRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskGetRewardRsp);

        /** Msg_TaskGetRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_TaskGetRewardRsp taskInfo. */
        public taskInfo?: (proto.ITaskData|null);

        /** Msg_TaskGetRewardRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_TaskGetRewardRsp message. Does not implicitly {@link proto.Msg_TaskGetRewardRsp.verify|verify} messages.
         * @param m Msg_TaskGetRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskGetRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskGetRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskGetRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskGetRewardRsp;
    }

    /** TaskRefreshType enum. */
    enum TaskRefreshType {
        TRT_Replace_Diamond = 0,
        TRT_Replace_AD = 1,
        TRT_Diamond = 2,
        TRT_AD = 3
    }

    /** Properties of a Msg_TaskRefreshReq. */
    interface IMsg_TaskRefreshReq {

        /** Msg_TaskRefreshReq refreshType */
        refreshType?: (proto.TaskRefreshType|null);

        /** Msg_TaskRefreshReq taskUUId */
        taskUUId?: (string|null);
    }

    /** Represents a Msg_TaskRefreshReq. */
    class Msg_TaskRefreshReq implements IMsg_TaskRefreshReq {

        /**
         * Constructs a new Msg_TaskRefreshReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskRefreshReq);

        /** Msg_TaskRefreshReq refreshType. */
        public refreshType: proto.TaskRefreshType;

        /** Msg_TaskRefreshReq taskUUId. */
        public taskUUId: string;

        /**
         * Encodes the specified Msg_TaskRefreshReq message. Does not implicitly {@link proto.Msg_TaskRefreshReq.verify|verify} messages.
         * @param m Msg_TaskRefreshReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskRefreshReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskRefreshReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskRefreshReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskRefreshReq;
    }

    /** Properties of a Msg_TaskRefreshRsp. */
    interface IMsg_TaskRefreshRsp {

        /** Msg_TaskRefreshRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_TaskRefreshRsp taskUUId */
        taskUUId?: (string|null);

        /** Msg_TaskRefreshRsp taskInfo */
        taskInfo?: (proto.ITaskData[]|null);

        /** Msg_TaskRefreshRsp taskFreeRefreshTimes */
        taskFreeRefreshTimes?: (number|null);

        /** Msg_TaskRefreshRsp ADRefreshLeftSec */
        ADRefreshLeftSec?: (number|null);

        /** Msg_TaskRefreshRsp ADReplaceRefreshTimes */
        ADReplaceRefreshTimes?: (number|null);
    }

    /** Represents a Msg_TaskRefreshRsp. */
    class Msg_TaskRefreshRsp implements IMsg_TaskRefreshRsp {

        /**
         * Constructs a new Msg_TaskRefreshRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskRefreshRsp);

        /** Msg_TaskRefreshRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_TaskRefreshRsp taskUUId. */
        public taskUUId: string;

        /** Msg_TaskRefreshRsp taskInfo. */
        public taskInfo: proto.ITaskData[];

        /** Msg_TaskRefreshRsp taskFreeRefreshTimes. */
        public taskFreeRefreshTimes: number;

        /** Msg_TaskRefreshRsp ADRefreshLeftSec. */
        public ADRefreshLeftSec: number;

        /** Msg_TaskRefreshRsp ADReplaceRefreshTimes. */
        public ADReplaceRefreshTimes: number;

        /**
         * Encodes the specified Msg_TaskRefreshRsp message. Does not implicitly {@link proto.Msg_TaskRefreshRsp.verify|verify} messages.
         * @param m Msg_TaskRefreshRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskRefreshRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskRefreshRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskRefreshRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskRefreshRsp;
    }

    /** Properties of a Msg_TaskPushTaskInfo. */
    interface IMsg_TaskPushTaskInfo {

        /** Msg_TaskPushTaskInfo tasks */
        tasks?: (proto.ITaskData[]|null);
    }

    /** Represents a Msg_TaskPushTaskInfo. */
    class Msg_TaskPushTaskInfo implements IMsg_TaskPushTaskInfo {

        /**
         * Constructs a new Msg_TaskPushTaskInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskPushTaskInfo);

        /** Msg_TaskPushTaskInfo tasks. */
        public tasks: proto.ITaskData[];

        /**
         * Encodes the specified Msg_TaskPushTaskInfo message. Does not implicitly {@link proto.Msg_TaskPushTaskInfo.verify|verify} messages.
         * @param m Msg_TaskPushTaskInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskPushTaskInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskPushTaskInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskPushTaskInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskPushTaskInfo;
    }

    /** Properties of a PlayerInfoFightRecord. */
    interface IPlayerInfoFightRecord {

        /** PlayerInfoFightRecord fightWinCount */
        fightWinCount?: (number|null);

        /** PlayerInfoFightRecord fightCount */
        fightCount?: (number|null);

        /** PlayerInfoFightRecord infiniteDefendMaxCnt */
        infiniteDefendMaxCnt?: (number|null);

        /** PlayerInfoFightRecord allianceSupportCnt */
        allianceSupportCnt?: (number|null);

        /** PlayerInfoFightRecord ownCardCount */
        ownCardCount?: (number|null);

        /** PlayerInfoFightRecord totalCardCount */
        totalCardCount?: (number|null);
    }

    /** Represents a PlayerInfoFightRecord. */
    class PlayerInfoFightRecord implements IPlayerInfoFightRecord {

        /**
         * Constructs a new PlayerInfoFightRecord.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerInfoFightRecord);

        /** PlayerInfoFightRecord fightWinCount. */
        public fightWinCount: number;

        /** PlayerInfoFightRecord fightCount. */
        public fightCount: number;

        /** PlayerInfoFightRecord infiniteDefendMaxCnt. */
        public infiniteDefendMaxCnt: number;

        /** PlayerInfoFightRecord allianceSupportCnt. */
        public allianceSupportCnt: number;

        /** PlayerInfoFightRecord ownCardCount. */
        public ownCardCount: number;

        /** PlayerInfoFightRecord totalCardCount. */
        public totalCardCount: number;

        /**
         * Encodes the specified PlayerInfoFightRecord message. Does not implicitly {@link proto.PlayerInfoFightRecord.verify|verify} messages.
         * @param m PlayerInfoFightRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerInfoFightRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerInfoFightRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerInfoFightRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerInfoFightRecord;
    }

    /** Properties of a PlayerSeasonInfo. */
    interface IPlayerSeasonInfo {

        /** PlayerSeasonInfo curScore */
        curScore?: (number|null);

        /** PlayerSeasonInfo curMaxScore */
        curMaxScore?: (number|null);

        /** PlayerSeasonInfo historyScore */
        historyScore?: (number|null);

        /** PlayerSeasonInfo historyMaxScore */
        historyMaxScore?: (number|null);

        /** PlayerSeasonInfo scoreChangeTime */
        scoreChangeTime?: (number|null);

        /** PlayerSeasonInfo seasonId */
        seasonId?: (number|null);
    }

    /** Represents a PlayerSeasonInfo. */
    class PlayerSeasonInfo implements IPlayerSeasonInfo {

        /**
         * Constructs a new PlayerSeasonInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerSeasonInfo);

        /** PlayerSeasonInfo curScore. */
        public curScore: number;

        /** PlayerSeasonInfo curMaxScore. */
        public curMaxScore: number;

        /** PlayerSeasonInfo historyScore. */
        public historyScore: number;

        /** PlayerSeasonInfo historyMaxScore. */
        public historyMaxScore: number;

        /** PlayerSeasonInfo scoreChangeTime. */
        public scoreChangeTime: number;

        /** PlayerSeasonInfo seasonId. */
        public seasonId: number;

        /**
         * Encodes the specified PlayerSeasonInfo message. Does not implicitly {@link proto.PlayerSeasonInfo.verify|verify} messages.
         * @param m PlayerSeasonInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerSeasonInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerSeasonInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerSeasonInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerSeasonInfo;
    }

    /** Properties of a PlayerBaseInfo. */
    interface IPlayerBaseInfo {

        /** PlayerBaseInfo roleId */
        roleId?: (string|null);

        /** PlayerBaseInfo roleLevel */
        roleLevel?: (number|null);

        /** PlayerBaseInfo roleName */
        roleName?: (string|null);

        /** PlayerBaseInfo roleGender */
        roleGender?: (proto.Gender|null);

        /** PlayerBaseInfo indexCard */
        indexCard?: (number|null);

        /** PlayerBaseInfo headUrl */
        headUrl?: (string|null);
    }

    /** Represents a PlayerBaseInfo. */
    class PlayerBaseInfo implements IPlayerBaseInfo {

        /**
         * Constructs a new PlayerBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerBaseInfo);

        /** PlayerBaseInfo roleId. */
        public roleId: string;

        /** PlayerBaseInfo roleLevel. */
        public roleLevel: number;

        /** PlayerBaseInfo roleName. */
        public roleName: string;

        /** PlayerBaseInfo roleGender. */
        public roleGender: proto.Gender;

        /** PlayerBaseInfo indexCard. */
        public indexCard: number;

        /** PlayerBaseInfo headUrl. */
        public headUrl: string;

        /**
         * Encodes the specified PlayerBaseInfo message. Does not implicitly {@link proto.PlayerBaseInfo.verify|verify} messages.
         * @param m PlayerBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerBaseInfo;
    }

    /** Properties of a PlayerDevilInfo. */
    interface IPlayerDevilInfo {

        /** PlayerDevilInfo devilCardData */
        devilCardData?: (proto.IFightCardData|null);
    }

    /** Represents a PlayerDevilInfo. */
    class PlayerDevilInfo implements IPlayerDevilInfo {

        /**
         * Constructs a new PlayerDevilInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerDevilInfo);

        /** PlayerDevilInfo devilCardData. */
        public devilCardData?: (proto.IFightCardData|null);

        /**
         * Encodes the specified PlayerDevilInfo message. Does not implicitly {@link proto.PlayerDevilInfo.verify|verify} messages.
         * @param m PlayerDevilInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerDevilInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerDevilInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerDevilInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerDevilInfo;
    }

    /** Properties of a PlayerAllianceInfo. */
    interface IPlayerAllianceInfo {

        /** PlayerAllianceInfo allianceName */
        allianceName?: (string|null);

        /** PlayerAllianceInfo allianceScore */
        allianceScore?: (number|null);

        /** PlayerAllianceInfo allianceUUID */
        allianceUUID?: (string|null);

        /** PlayerAllianceInfo position */
        position?: (number|null);

        /** PlayerAllianceInfo allianceIconIdx */
        allianceIconIdx?: (number|null);
    }

    /** Represents a PlayerAllianceInfo. */
    class PlayerAllianceInfo implements IPlayerAllianceInfo {

        /**
         * Constructs a new PlayerAllianceInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerAllianceInfo);

        /** PlayerAllianceInfo allianceName. */
        public allianceName: string;

        /** PlayerAllianceInfo allianceScore. */
        public allianceScore: number;

        /** PlayerAllianceInfo allianceUUID. */
        public allianceUUID: string;

        /** PlayerAllianceInfo position. */
        public position: number;

        /** PlayerAllianceInfo allianceIconIdx. */
        public allianceIconIdx: number;

        /**
         * Encodes the specified PlayerAllianceInfo message. Does not implicitly {@link proto.PlayerAllianceInfo.verify|verify} messages.
         * @param m PlayerAllianceInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerAllianceInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerAllianceInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerAllianceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerAllianceInfo;
    }

    /** Properties of a PlayerPvpCardInfo. */
    interface IPlayerPvpCardInfo {

        /** PlayerPvpCardInfo cardLists */
        cardLists?: (proto.IFightCardData[]|null);

        /** PlayerPvpCardInfo talentItems */
        talentItems?: (proto.ITalenItem[]|null);
    }

    /** Represents a PlayerPvpCardInfo. */
    class PlayerPvpCardInfo implements IPlayerPvpCardInfo {

        /**
         * Constructs a new PlayerPvpCardInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerPvpCardInfo);

        /** PlayerPvpCardInfo cardLists. */
        public cardLists: proto.IFightCardData[];

        /** PlayerPvpCardInfo talentItems. */
        public talentItems: proto.ITalenItem[];

        /**
         * Encodes the specified PlayerPvpCardInfo message. Does not implicitly {@link proto.PlayerPvpCardInfo.verify|verify} messages.
         * @param m PlayerPvpCardInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerPvpCardInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerPvpCardInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerPvpCardInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerPvpCardInfo;
    }

    /** Properties of a PlayerWechatInfo. */
    interface IPlayerWechatInfo {

        /** PlayerWechatInfo wechatName */
        wechatName?: (string|null);

        /** PlayerWechatInfo wechatAvatarUrl */
        wechatAvatarUrl?: (string|null);
    }

    /** Represents a PlayerWechatInfo. */
    class PlayerWechatInfo implements IPlayerWechatInfo {

        /**
         * Constructs a new PlayerWechatInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPlayerWechatInfo);

        /** PlayerWechatInfo wechatName. */
        public wechatName: string;

        /** PlayerWechatInfo wechatAvatarUrl. */
        public wechatAvatarUrl: string;

        /**
         * Encodes the specified PlayerWechatInfo message. Does not implicitly {@link proto.PlayerWechatInfo.verify|verify} messages.
         * @param m PlayerWechatInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPlayerWechatInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PlayerWechatInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PlayerWechatInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PlayerWechatInfo;
    }

    /** Properties of a Msg_PlayerInfoReq. */
    interface IMsg_PlayerInfoReq {

        /** Msg_PlayerInfoReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_PlayerInfoReq. */
    class Msg_PlayerInfoReq implements IMsg_PlayerInfoReq {

        /**
         * Constructs a new Msg_PlayerInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PlayerInfoReq);

        /** Msg_PlayerInfoReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_PlayerInfoReq message. Does not implicitly {@link proto.Msg_PlayerInfoReq.verify|verify} messages.
         * @param m Msg_PlayerInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PlayerInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PlayerInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PlayerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PlayerInfoReq;
    }

    /** Properties of a Msg_PlayerInfoRsp. */
    interface IMsg_PlayerInfoRsp {

        /** Msg_PlayerInfoRsp fightRecordInfo */
        fightRecordInfo?: (proto.IPlayerInfoFightRecord|null);

        /** Msg_PlayerInfoRsp playerBaseInfo */
        playerBaseInfo?: (proto.IPlayerBaseInfo|null);

        /** Msg_PlayerInfoRsp playerDevilInfo */
        playerDevilInfo?: (proto.IPlayerDevilInfo|null);

        /** Msg_PlayerInfoRsp pvpCardInfo */
        pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** Msg_PlayerInfoRsp seasonInfo */
        seasonInfo?: (proto.IPlayerSeasonInfo|null);

        /** Msg_PlayerInfoRsp allianceInfo */
        allianceInfo?: (proto.IPlayerAllianceInfo|null);

        /** Msg_PlayerInfoRsp wechatInfo */
        wechatInfo?: (proto.IPlayerWechatInfo|null);
    }

    /** Represents a Msg_PlayerInfoRsp. */
    class Msg_PlayerInfoRsp implements IMsg_PlayerInfoRsp {

        /**
         * Constructs a new Msg_PlayerInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PlayerInfoRsp);

        /** Msg_PlayerInfoRsp fightRecordInfo. */
        public fightRecordInfo?: (proto.IPlayerInfoFightRecord|null);

        /** Msg_PlayerInfoRsp playerBaseInfo. */
        public playerBaseInfo?: (proto.IPlayerBaseInfo|null);

        /** Msg_PlayerInfoRsp playerDevilInfo. */
        public playerDevilInfo?: (proto.IPlayerDevilInfo|null);

        /** Msg_PlayerInfoRsp pvpCardInfo. */
        public pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** Msg_PlayerInfoRsp seasonInfo. */
        public seasonInfo?: (proto.IPlayerSeasonInfo|null);

        /** Msg_PlayerInfoRsp allianceInfo. */
        public allianceInfo?: (proto.IPlayerAllianceInfo|null);

        /** Msg_PlayerInfoRsp wechatInfo. */
        public wechatInfo?: (proto.IPlayerWechatInfo|null);

        /**
         * Encodes the specified Msg_PlayerInfoRsp message. Does not implicitly {@link proto.Msg_PlayerInfoRsp.verify|verify} messages.
         * @param m Msg_PlayerInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PlayerInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PlayerInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PlayerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PlayerInfoRsp;
    }

    /** Properties of a Msg_ResetFightRecordReq. */
    interface IMsg_ResetFightRecordReq {
    }

    /** Represents a Msg_ResetFightRecordReq. */
    class Msg_ResetFightRecordReq implements IMsg_ResetFightRecordReq {

        /**
         * Constructs a new Msg_ResetFightRecordReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetFightRecordReq);

        /**
         * Encodes the specified Msg_ResetFightRecordReq message. Does not implicitly {@link proto.Msg_ResetFightRecordReq.verify|verify} messages.
         * @param m Msg_ResetFightRecordReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetFightRecordReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetFightRecordReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetFightRecordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetFightRecordReq;
    }

    /** Properties of a Msg_ResetFightRecordRsp. */
    interface IMsg_ResetFightRecordRsp {

        /** Msg_ResetFightRecordRsp result */
        result?: (proto.Msg_ResetFightRecordRsp.ErrorCode|null);
    }

    /** Represents a Msg_ResetFightRecordRsp. */
    class Msg_ResetFightRecordRsp implements IMsg_ResetFightRecordRsp {

        /**
         * Constructs a new Msg_ResetFightRecordRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetFightRecordRsp);

        /** Msg_ResetFightRecordRsp result. */
        public result: proto.Msg_ResetFightRecordRsp.ErrorCode;

        /**
         * Encodes the specified Msg_ResetFightRecordRsp message. Does not implicitly {@link proto.Msg_ResetFightRecordRsp.verify|verify} messages.
         * @param m Msg_ResetFightRecordRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetFightRecordRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetFightRecordRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetFightRecordRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetFightRecordRsp;
    }

    namespace Msg_ResetFightRecordRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            MoneyNotEnough = 1
        }
    }

    /** GlobalMessageType enum. */
    enum GlobalMessageType {
        JoinAllianceMsg = 0,
        AllianceSetPostRankMsg = 1,
        AllianceExpelMsg = 2,
        ExitAllianceMsg = 3,
        MemberRequestSupportMsg = 4,
        MemberNormalTxtMsg = 5,
        MemberEmotionMsg = 6,
        MemberFriendlyMatchInviteMsg = 7,
        MemberInfiniteDefenseInviteMsg = 8,
        AllianceDevilRewardMsg = 9,
        AlliancePvpInvitation = 10,
        CreateAllianceMsg = 11,
        ShareSelfCardGroup = 12
    }

    /** Properties of an AllianceMsgData. */
    interface IAllianceMsgData {

        /** AllianceMsgData msgType */
        msgType?: (proto.GlobalMessageType|null);

        /** AllianceMsgData content */
        content?: (string|null);

        /** AllianceMsgData utcTime */
        utcTime?: (number|null);

        /** AllianceMsgData msgSenderName */
        msgSenderName?: (string|null);

        /** AllianceMsgData senderUUID */
        senderUUID?: (string|null);

        /** AllianceMsgData playerHeadID */
        playerHeadID?: (number|null);
    }

    /** Represents an AllianceMsgData. */
    class AllianceMsgData implements IAllianceMsgData {

        /**
         * Constructs a new AllianceMsgData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceMsgData);

        /** AllianceMsgData msgType. */
        public msgType: proto.GlobalMessageType;

        /** AllianceMsgData content. */
        public content: string;

        /** AllianceMsgData utcTime. */
        public utcTime: number;

        /** AllianceMsgData msgSenderName. */
        public msgSenderName: string;

        /** AllianceMsgData senderUUID. */
        public senderUUID: string;

        /** AllianceMsgData playerHeadID. */
        public playerHeadID: number;

        /**
         * Encodes the specified AllianceMsgData message. Does not implicitly {@link proto.AllianceMsgData.verify|verify} messages.
         * @param m AllianceMsgData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceMsgData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceMsgData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceMsgData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceMsgData;
    }

    /** Properties of an AllianceSetPostRankStruct. */
    interface IAllianceSetPostRankStruct {

        /** AllianceSetPostRankStruct roleName */
        roleName?: (string|null);

        /** AllianceSetPostRankStruct postRank */
        postRank?: (number|null);
    }

    /** Represents an AllianceSetPostRankStruct. */
    class AllianceSetPostRankStruct implements IAllianceSetPostRankStruct {

        /**
         * Constructs a new AllianceSetPostRankStruct.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceSetPostRankStruct);

        /** AllianceSetPostRankStruct roleName. */
        public roleName: string;

        /** AllianceSetPostRankStruct postRank. */
        public postRank: number;

        /**
         * Encodes the specified AllianceSetPostRankStruct message. Does not implicitly {@link proto.AllianceSetPostRankStruct.verify|verify} messages.
         * @param m AllianceSetPostRankStruct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceSetPostRankStruct, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceSetPostRankStruct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceSetPostRankStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceSetPostRankStruct;
    }

    /** Properties of an AllianceFightPlayerInfo. */
    interface IAllianceFightPlayerInfo {

        /** AllianceFightPlayerInfo roleID */
        roleID?: (string|null);

        /** AllianceFightPlayerInfo roleName */
        roleName?: (string|null);

        /** AllianceFightPlayerInfo indexCard */
        indexCard?: (number|null);

        /** AllianceFightPlayerInfo pvpCardInfo */
        pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** AllianceFightPlayerInfo devilInfo */
        devilInfo?: (proto.IFightCardData|null);

        /** AllianceFightPlayerInfo allianceName */
        allianceName?: (string|null);

        /** AllianceFightPlayerInfo rankScore */
        rankScore?: (number|null);
    }

    /** Represents an AllianceFightPlayerInfo. */
    class AllianceFightPlayerInfo implements IAllianceFightPlayerInfo {

        /**
         * Constructs a new AllianceFightPlayerInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceFightPlayerInfo);

        /** AllianceFightPlayerInfo roleID. */
        public roleID: string;

        /** AllianceFightPlayerInfo roleName. */
        public roleName: string;

        /** AllianceFightPlayerInfo indexCard. */
        public indexCard: number;

        /** AllianceFightPlayerInfo pvpCardInfo. */
        public pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** AllianceFightPlayerInfo devilInfo. */
        public devilInfo?: (proto.IFightCardData|null);

        /** AllianceFightPlayerInfo allianceName. */
        public allianceName: string;

        /** AllianceFightPlayerInfo rankScore. */
        public rankScore: number;

        /**
         * Encodes the specified AllianceFightPlayerInfo message. Does not implicitly {@link proto.AllianceFightPlayerInfo.verify|verify} messages.
         * @param m AllianceFightPlayerInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceFightPlayerInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceFightPlayerInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceFightPlayerInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceFightPlayerInfo;
    }

    /** Properties of an AllianceFightInviteStruct. */
    interface IAllianceFightInviteStruct {

        /** AllianceFightInviteStruct roomID */
        roomID?: (number|null);

        /** AllianceFightInviteStruct type */
        type?: (proto.FightType|null);

        /** AllianceFightInviteStruct playerInfo */
        playerInfo?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightInviteStruct inviteMessage */
        inviteMessage?: (string|null);

        /** AllianceFightInviteStruct startTime */
        startTime?: (number|null);

        /** AllianceFightInviteStruct bCardLvLimit */
        bCardLvLimit?: (boolean|null);
    }

    /** Represents an AllianceFightInviteStruct. */
    class AllianceFightInviteStruct implements IAllianceFightInviteStruct {

        /**
         * Constructs a new AllianceFightInviteStruct.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceFightInviteStruct);

        /** AllianceFightInviteStruct roomID. */
        public roomID: number;

        /** AllianceFightInviteStruct type. */
        public type: proto.FightType;

        /** AllianceFightInviteStruct playerInfo. */
        public playerInfo?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightInviteStruct inviteMessage. */
        public inviteMessage: string;

        /** AllianceFightInviteStruct startTime. */
        public startTime: number;

        /** AllianceFightInviteStruct bCardLvLimit. */
        public bCardLvLimit: boolean;

        /**
         * Encodes the specified AllianceFightInviteStruct message. Does not implicitly {@link proto.AllianceFightInviteStruct.verify|verify} messages.
         * @param m AllianceFightInviteStruct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceFightInviteStruct, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceFightInviteStruct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceFightInviteStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceFightInviteStruct;
    }

    /** Properties of an AllianceFightOver. */
    interface IAllianceFightOver {

        /** AllianceFightOver wave */
        wave?: (number|null);

        /** AllianceFightOver duration */
        duration?: (number|null);

        /** AllianceFightOver winner */
        winner?: (string|null);
    }

    /** Represents an AllianceFightOver. */
    class AllianceFightOver implements IAllianceFightOver {

        /**
         * Constructs a new AllianceFightOver.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceFightOver);

        /** AllianceFightOver wave. */
        public wave: number;

        /** AllianceFightOver duration. */
        public duration: number;

        /** AllianceFightOver winner. */
        public winner: string;

        /**
         * Encodes the specified AllianceFightOver message. Does not implicitly {@link proto.AllianceFightOver.verify|verify} messages.
         * @param m AllianceFightOver message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceFightOver, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceFightOver message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceFightOver
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceFightOver;
    }

    /** Properties of an AllianceFightStruct. */
    interface IAllianceFightStruct {

        /** AllianceFightStruct type */
        type?: (proto.FightType|null);

        /** AllianceFightStruct player1 */
        player1?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightStruct player2 */
        player2?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightStruct startTime */
        startTime?: (number|null);

        /** AllianceFightStruct roomID */
        roomID?: (number|null);

        /** AllianceFightStruct overData */
        overData?: (proto.IAllianceFightOver|null);
    }

    /** Represents an AllianceFightStruct. */
    class AllianceFightStruct implements IAllianceFightStruct {

        /**
         * Constructs a new AllianceFightStruct.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceFightStruct);

        /** AllianceFightStruct type. */
        public type: proto.FightType;

        /** AllianceFightStruct player1. */
        public player1?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightStruct player2. */
        public player2?: (proto.IAllianceFightPlayerInfo|null);

        /** AllianceFightStruct startTime. */
        public startTime: number;

        /** AllianceFightStruct roomID. */
        public roomID: number;

        /** AllianceFightStruct overData. */
        public overData?: (proto.IAllianceFightOver|null);

        /**
         * Encodes the specified AllianceFightStruct message. Does not implicitly {@link proto.AllianceFightStruct.verify|verify} messages.
         * @param m AllianceFightStruct message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceFightStruct, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceFightStruct message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceFightStruct
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceFightStruct;
    }

    /** Properties of an AllianceDonateData. */
    interface IAllianceDonateData {

        /** AllianceDonateData nextCardRequestTime */
        nextCardRequestTime?: (number|null);

        /** AllianceDonateData todayDonateScore */
        todayDonateScore?: (number|null);

        /** AllianceDonateData recvCardDonateNumber */
        recvCardDonateNumber?: (number|null);

        /** AllianceDonateData totalDonateScore */
        totalDonateScore?: (number|null);
    }

    /** Represents an AllianceDonateData. */
    class AllianceDonateData implements IAllianceDonateData {

        /**
         * Constructs a new AllianceDonateData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceDonateData);

        /** AllianceDonateData nextCardRequestTime. */
        public nextCardRequestTime: number;

        /** AllianceDonateData todayDonateScore. */
        public todayDonateScore: number;

        /** AllianceDonateData recvCardDonateNumber. */
        public recvCardDonateNumber: number;

        /** AllianceDonateData totalDonateScore. */
        public totalDonateScore: number;

        /**
         * Encodes the specified AllianceDonateData message. Does not implicitly {@link proto.AllianceDonateData.verify|verify} messages.
         * @param m AllianceDonateData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceDonateData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceDonateData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceDonateData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceDonateData;
    }

    /** Properties of a RoleAllianceData. */
    interface IRoleAllianceData {

        /** RoleAllianceData allianceID */
        allianceID?: (string|null);

        /** RoleAllianceData PostRank */
        PostRank?: (number|null);

        /** RoleAllianceData applyingAllianceID */
        applyingAllianceID?: (string|null);

        /** RoleAllianceData allianceName */
        allianceName?: (string|null);

        /** RoleAllianceData allianceIcon */
        allianceIcon?: (number|null);

        /** RoleAllianceData allianceScore */
        allianceScore?: (number|null);
    }

    /** Represents a RoleAllianceData. */
    class RoleAllianceData implements IRoleAllianceData {

        /**
         * Constructs a new RoleAllianceData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRoleAllianceData);

        /** RoleAllianceData allianceID. */
        public allianceID: string;

        /** RoleAllianceData PostRank. */
        public PostRank: number;

        /** RoleAllianceData applyingAllianceID. */
        public applyingAllianceID: string;

        /** RoleAllianceData allianceName. */
        public allianceName: string;

        /** RoleAllianceData allianceIcon. */
        public allianceIcon: number;

        /** RoleAllianceData allianceScore. */
        public allianceScore: number;

        /**
         * Encodes the specified RoleAllianceData message. Does not implicitly {@link proto.RoleAllianceData.verify|verify} messages.
         * @param m RoleAllianceData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRoleAllianceData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleAllianceData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoleAllianceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RoleAllianceData;
    }

    /** Properties of an AllianceSimpleInfo. */
    interface IAllianceSimpleInfo {

        /** AllianceSimpleInfo allianceID */
        allianceID?: (string|null);

        /** AllianceSimpleInfo name */
        name?: (string|null);

        /** AllianceSimpleInfo icon */
        icon?: (number|null);

        /** AllianceSimpleInfo score */
        score?: (number|null);

        /** AllianceSimpleInfo numberOfMember */
        numberOfMember?: (number|null);
    }

    /** Represents an AllianceSimpleInfo. */
    class AllianceSimpleInfo implements IAllianceSimpleInfo {

        /**
         * Constructs a new AllianceSimpleInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceSimpleInfo);

        /** AllianceSimpleInfo allianceID. */
        public allianceID: string;

        /** AllianceSimpleInfo name. */
        public name: string;

        /** AllianceSimpleInfo icon. */
        public icon: number;

        /** AllianceSimpleInfo score. */
        public score: number;

        /** AllianceSimpleInfo numberOfMember. */
        public numberOfMember: number;

        /**
         * Encodes the specified AllianceSimpleInfo message. Does not implicitly {@link proto.AllianceSimpleInfo.verify|verify} messages.
         * @param m AllianceSimpleInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceSimpleInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceSimpleInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceSimpleInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceSimpleInfo;
    }

    /** Properties of an AllianceBaseInfo. */
    interface IAllianceBaseInfo {

        /** AllianceBaseInfo allianceID */
        allianceID?: (string|null);

        /** AllianceBaseInfo name */
        name?: (string|null);

        /** AllianceBaseInfo instruction */
        instruction?: (string|null);

        /** AllianceBaseInfo icon */
        icon?: (number|null);

        /** AllianceBaseInfo joinType */
        joinType?: (number|null);

        /** AllianceBaseInfo joinMinScore */
        joinMinScore?: (number|null);
    }

    /** Represents an AllianceBaseInfo. */
    class AllianceBaseInfo implements IAllianceBaseInfo {

        /**
         * Constructs a new AllianceBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceBaseInfo);

        /** AllianceBaseInfo allianceID. */
        public allianceID: string;

        /** AllianceBaseInfo name. */
        public name: string;

        /** AllianceBaseInfo instruction. */
        public instruction: string;

        /** AllianceBaseInfo icon. */
        public icon: number;

        /** AllianceBaseInfo joinType. */
        public joinType: number;

        /** AllianceBaseInfo joinMinScore. */
        public joinMinScore: number;

        /**
         * Encodes the specified AllianceBaseInfo message. Does not implicitly {@link proto.AllianceBaseInfo.verify|verify} messages.
         * @param m AllianceBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceBaseInfo;
    }

    /** Properties of an AllianceMemberInfo. */
    interface IAllianceMemberInfo {

        /** AllianceMemberInfo roleID */
        roleID?: (string|null);

        /** AllianceMemberInfo roleName */
        roleName?: (string|null);

        /** AllianceMemberInfo rankScore */
        rankScore?: (number|null);

        /** AllianceMemberInfo indexCard */
        indexCard?: (number|null);

        /** AllianceMemberInfo support */
        support?: (number|null);

        /** AllianceMemberInfo postRank */
        postRank?: (number|null);

        /** AllianceMemberInfo lastLoginTime */
        lastLoginTime?: (number|null);

        /** AllianceMemberInfo isOnline */
        isOnline?: (boolean|null);
    }

    /** Represents an AllianceMemberInfo. */
    class AllianceMemberInfo implements IAllianceMemberInfo {

        /**
         * Constructs a new AllianceMemberInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceMemberInfo);

        /** AllianceMemberInfo roleID. */
        public roleID: string;

        /** AllianceMemberInfo roleName. */
        public roleName: string;

        /** AllianceMemberInfo rankScore. */
        public rankScore: number;

        /** AllianceMemberInfo indexCard. */
        public indexCard: number;

        /** AllianceMemberInfo support. */
        public support: number;

        /** AllianceMemberInfo postRank. */
        public postRank: number;

        /** AllianceMemberInfo lastLoginTime. */
        public lastLoginTime: number;

        /** AllianceMemberInfo isOnline. */
        public isOnline: boolean;

        /**
         * Encodes the specified AllianceMemberInfo message. Does not implicitly {@link proto.AllianceMemberInfo.verify|verify} messages.
         * @param m AllianceMemberInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceMemberInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceMemberInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceMemberInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceMemberInfo;
    }

    /** Properties of an AllianceApplyInfo. */
    interface IAllianceApplyInfo {

        /** AllianceApplyInfo roleID */
        roleID?: (string|null);

        /** AllianceApplyInfo roleName */
        roleName?: (string|null);

        /** AllianceApplyInfo applyTime */
        applyTime?: (number|null);

        /** AllianceApplyInfo seasonScore */
        seasonScore?: (number|null);
    }

    /** Represents an AllianceApplyInfo. */
    class AllianceApplyInfo implements IAllianceApplyInfo {

        /**
         * Constructs a new AllianceApplyInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceApplyInfo);

        /** AllianceApplyInfo roleID. */
        public roleID: string;

        /** AllianceApplyInfo roleName. */
        public roleName: string;

        /** AllianceApplyInfo applyTime. */
        public applyTime: number;

        /** AllianceApplyInfo seasonScore. */
        public seasonScore: number;

        /**
         * Encodes the specified AllianceApplyInfo message. Does not implicitly {@link proto.AllianceApplyInfo.verify|verify} messages.
         * @param m AllianceApplyInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceApplyInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceApplyInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceApplyInfo;
    }

    /** Properties of an AllianceCardDonateInfo. */
    interface IAllianceCardDonateInfo {

        /** AllianceCardDonateInfo donateRoleID */
        donateRoleID?: (string|null);

        /** AllianceCardDonateInfo count */
        count?: (number|null);
    }

    /** Represents an AllianceCardDonateInfo. */
    class AllianceCardDonateInfo implements IAllianceCardDonateInfo {

        /**
         * Constructs a new AllianceCardDonateInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceCardDonateInfo);

        /** AllianceCardDonateInfo donateRoleID. */
        public donateRoleID: string;

        /** AllianceCardDonateInfo count. */
        public count: number;

        /**
         * Encodes the specified AllianceCardDonateInfo message. Does not implicitly {@link proto.AllianceCardDonateInfo.verify|verify} messages.
         * @param m AllianceCardDonateInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceCardDonateInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceCardDonateInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceCardDonateInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceCardDonateInfo;
    }

    /** Properties of an AllianceCardRequestInfo. */
    interface IAllianceCardRequestInfo {

        /** AllianceCardRequestInfo roleID */
        roleID?: (string|null);

        /** AllianceCardRequestInfo cardID */
        cardID?: (number|null);

        /** AllianceCardRequestInfo curNumber */
        curNumber?: (number|null);

        /** AllianceCardRequestInfo maxNumber */
        maxNumber?: (number|null);

        /** AllianceCardRequestInfo requestTime */
        requestTime?: (number|null);

        /** AllianceCardRequestInfo donateInfo */
        donateInfo?: (proto.IAllianceCardDonateInfo[]|null);
    }

    /** Represents an AllianceCardRequestInfo. */
    class AllianceCardRequestInfo implements IAllianceCardRequestInfo {

        /**
         * Constructs a new AllianceCardRequestInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceCardRequestInfo);

        /** AllianceCardRequestInfo roleID. */
        public roleID: string;

        /** AllianceCardRequestInfo cardID. */
        public cardID: number;

        /** AllianceCardRequestInfo curNumber. */
        public curNumber: number;

        /** AllianceCardRequestInfo maxNumber. */
        public maxNumber: number;

        /** AllianceCardRequestInfo requestTime. */
        public requestTime: number;

        /** AllianceCardRequestInfo donateInfo. */
        public donateInfo: proto.IAllianceCardDonateInfo[];

        /**
         * Encodes the specified AllianceCardRequestInfo message. Does not implicitly {@link proto.AllianceCardRequestInfo.verify|verify} messages.
         * @param m AllianceCardRequestInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceCardRequestInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceCardRequestInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceCardRequestInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceCardRequestInfo;
    }

    /** Properties of an AllianceInfo. */
    interface IAllianceInfo {

        /** AllianceInfo baseInfo */
        baseInfo?: (proto.IAllianceBaseInfo|null);

        /** AllianceInfo memberInfo */
        memberInfo?: (proto.IAllianceMemberInfo[]|null);

        /** AllianceInfo applyInfo */
        applyInfo?: (proto.IAllianceApplyInfo[]|null);

        /** AllianceInfo score */
        score?: (number|null);

        /** AllianceInfo totalSupport */
        totalSupport?: (number|null);

        /** AllianceInfo msgList */
        msgList?: (proto.IAllianceMsgData[]|null);

        /** AllianceInfo cardRequestInfo */
        cardRequestInfo?: (proto.IAllianceCardRequestInfo[]|null);
    }

    /** Represents an AllianceInfo. */
    class AllianceInfo implements IAllianceInfo {

        /**
         * Constructs a new AllianceInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAllianceInfo);

        /** AllianceInfo baseInfo. */
        public baseInfo?: (proto.IAllianceBaseInfo|null);

        /** AllianceInfo memberInfo. */
        public memberInfo: proto.IAllianceMemberInfo[];

        /** AllianceInfo applyInfo. */
        public applyInfo: proto.IAllianceApplyInfo[];

        /** AllianceInfo score. */
        public score: number;

        /** AllianceInfo totalSupport. */
        public totalSupport: number;

        /** AllianceInfo msgList. */
        public msgList: proto.IAllianceMsgData[];

        /** AllianceInfo cardRequestInfo. */
        public cardRequestInfo: proto.IAllianceCardRequestInfo[];

        /**
         * Encodes the specified AllianceInfo message. Does not implicitly {@link proto.AllianceInfo.verify|verify} messages.
         * @param m AllianceInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAllianceInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AllianceInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AllianceInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AllianceInfo;
    }

    /** Properties of a Msg_CreateAllianceReq. */
    interface IMsg_CreateAllianceReq {

        /** Msg_CreateAllianceReq name */
        name?: (string|null);

        /** Msg_CreateAllianceReq Instruction */
        Instruction?: (string|null);

        /** Msg_CreateAllianceReq JoinType */
        JoinType?: (number|null);

        /** Msg_CreateAllianceReq JoinMinScore */
        JoinMinScore?: (number|null);

        /** Msg_CreateAllianceReq Icon */
        Icon?: (number|null);
    }

    /** Represents a Msg_CreateAllianceReq. */
    class Msg_CreateAllianceReq implements IMsg_CreateAllianceReq {

        /**
         * Constructs a new Msg_CreateAllianceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateAllianceReq);

        /** Msg_CreateAllianceReq name. */
        public name: string;

        /** Msg_CreateAllianceReq Instruction. */
        public Instruction: string;

        /** Msg_CreateAllianceReq JoinType. */
        public JoinType: number;

        /** Msg_CreateAllianceReq JoinMinScore. */
        public JoinMinScore: number;

        /** Msg_CreateAllianceReq Icon. */
        public Icon: number;

        /**
         * Encodes the specified Msg_CreateAllianceReq message. Does not implicitly {@link proto.Msg_CreateAllianceReq.verify|verify} messages.
         * @param m Msg_CreateAllianceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateAllianceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateAllianceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateAllianceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateAllianceReq;
    }

    /** Properties of a Msg_CreateAllianceRsp. */
    interface IMsg_CreateAllianceRsp {

        /** Msg_CreateAllianceRsp result */
        result?: (proto.Msg_CreateAllianceRsp.ErrorCode|null);

        /** Msg_CreateAllianceRsp allianceInfo */
        allianceInfo?: (proto.IAllianceInfo|null);
    }

    /** Represents a Msg_CreateAllianceRsp. */
    class Msg_CreateAllianceRsp implements IMsg_CreateAllianceRsp {

        /**
         * Constructs a new Msg_CreateAllianceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateAllianceRsp);

        /** Msg_CreateAllianceRsp result. */
        public result: proto.Msg_CreateAllianceRsp.ErrorCode;

        /** Msg_CreateAllianceRsp allianceInfo. */
        public allianceInfo?: (proto.IAllianceInfo|null);

        /**
         * Encodes the specified Msg_CreateAllianceRsp message. Does not implicitly {@link proto.Msg_CreateAllianceRsp.verify|verify} messages.
         * @param m Msg_CreateAllianceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateAllianceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateAllianceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateAllianceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateAllianceRsp;
    }

    namespace Msg_CreateAllianceRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            MoneyNotEnough = 1,
            HaveAlliance = 2,
            AllianceInfoIncomplete = 3,
            SensitiveWordError = 4
        }
    }

    /** Properties of a Msg_JoinAllianceReq. */
    interface IMsg_JoinAllianceReq {

        /** Msg_JoinAllianceReq allianceID */
        allianceID?: (string|null);
    }

    /** Represents a Msg_JoinAllianceReq. */
    class Msg_JoinAllianceReq implements IMsg_JoinAllianceReq {

        /**
         * Constructs a new Msg_JoinAllianceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinAllianceReq);

        /** Msg_JoinAllianceReq allianceID. */
        public allianceID: string;

        /**
         * Encodes the specified Msg_JoinAllianceReq message. Does not implicitly {@link proto.Msg_JoinAllianceReq.verify|verify} messages.
         * @param m Msg_JoinAllianceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinAllianceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinAllianceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinAllianceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinAllianceReq;
    }

    /** Properties of a Msg_JoinAllianceRsp. */
    interface IMsg_JoinAllianceRsp {

        /** Msg_JoinAllianceRsp result */
        result?: (proto.Msg_JoinAllianceRsp.ErrorCode|null);

        /** Msg_JoinAllianceRsp allianceInfo */
        allianceInfo?: (proto.IAllianceInfo|null);
    }

    /** Represents a Msg_JoinAllianceRsp. */
    class Msg_JoinAllianceRsp implements IMsg_JoinAllianceRsp {

        /**
         * Constructs a new Msg_JoinAllianceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinAllianceRsp);

        /** Msg_JoinAllianceRsp result. */
        public result: proto.Msg_JoinAllianceRsp.ErrorCode;

        /** Msg_JoinAllianceRsp allianceInfo. */
        public allianceInfo?: (proto.IAllianceInfo|null);

        /**
         * Encodes the specified Msg_JoinAllianceRsp message. Does not implicitly {@link proto.Msg_JoinAllianceRsp.verify|verify} messages.
         * @param m Msg_JoinAllianceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinAllianceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinAllianceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinAllianceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinAllianceRsp;
    }

    namespace Msg_JoinAllianceRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            MemberFull = 1,
            HaveAlliance = 2,
            SeasonScoreNotEnough = 3
        }
    }

    /** Properties of a Msg_QuitAllianceReq. */
    interface IMsg_QuitAllianceReq {
    }

    /** Represents a Msg_QuitAllianceReq. */
    class Msg_QuitAllianceReq implements IMsg_QuitAllianceReq {

        /**
         * Constructs a new Msg_QuitAllianceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuitAllianceReq);

        /**
         * Encodes the specified Msg_QuitAllianceReq message. Does not implicitly {@link proto.Msg_QuitAllianceReq.verify|verify} messages.
         * @param m Msg_QuitAllianceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuitAllianceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuitAllianceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuitAllianceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuitAllianceReq;
    }

    /** Properties of a Msg_QuitAllianceRsp. */
    interface IMsg_QuitAllianceRsp {

        /** Msg_QuitAllianceRsp result */
        result?: (proto.CommonErrorCode|null);
    }

    /** Represents a Msg_QuitAllianceRsp. */
    class Msg_QuitAllianceRsp implements IMsg_QuitAllianceRsp {

        /**
         * Constructs a new Msg_QuitAllianceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuitAllianceRsp);

        /** Msg_QuitAllianceRsp result. */
        public result: proto.CommonErrorCode;

        /**
         * Encodes the specified Msg_QuitAllianceRsp message. Does not implicitly {@link proto.Msg_QuitAllianceRsp.verify|verify} messages.
         * @param m Msg_QuitAllianceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuitAllianceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuitAllianceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuitAllianceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuitAllianceRsp;
    }

    /** Properties of a Msg_DealAllianceJoinReq. */
    interface IMsg_DealAllianceJoinReq {

        /** Msg_DealAllianceJoinReq roleID */
        roleID?: (string|null);

        /** Msg_DealAllianceJoinReq result */
        result?: (boolean|null);
    }

    /** Represents a Msg_DealAllianceJoinReq. */
    class Msg_DealAllianceJoinReq implements IMsg_DealAllianceJoinReq {

        /**
         * Constructs a new Msg_DealAllianceJoinReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DealAllianceJoinReq);

        /** Msg_DealAllianceJoinReq roleID. */
        public roleID: string;

        /** Msg_DealAllianceJoinReq result. */
        public result: boolean;

        /**
         * Encodes the specified Msg_DealAllianceJoinReq message. Does not implicitly {@link proto.Msg_DealAllianceJoinReq.verify|verify} messages.
         * @param m Msg_DealAllianceJoinReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DealAllianceJoinReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DealAllianceJoinReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DealAllianceJoinReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DealAllianceJoinReq;
    }

    /** Properties of a Msg_DealAllianceJoinRsp. */
    interface IMsg_DealAllianceJoinRsp {

        /** Msg_DealAllianceJoinRsp result */
        result?: (proto.Msg_DealAllianceJoinRsp.ErrorCode|null);

        /** Msg_DealAllianceJoinRsp roleID */
        roleID?: (string|null);

        /** Msg_DealAllianceJoinRsp memberInfo */
        memberInfo?: (proto.IAllianceMemberInfo[]|null);

        /** Msg_DealAllianceJoinRsp applyInfo */
        applyInfo?: (proto.IAllianceApplyInfo[]|null);
    }

    /** Represents a Msg_DealAllianceJoinRsp. */
    class Msg_DealAllianceJoinRsp implements IMsg_DealAllianceJoinRsp {

        /**
         * Constructs a new Msg_DealAllianceJoinRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DealAllianceJoinRsp);

        /** Msg_DealAllianceJoinRsp result. */
        public result: proto.Msg_DealAllianceJoinRsp.ErrorCode;

        /** Msg_DealAllianceJoinRsp roleID. */
        public roleID: string;

        /** Msg_DealAllianceJoinRsp memberInfo. */
        public memberInfo: proto.IAllianceMemberInfo[];

        /** Msg_DealAllianceJoinRsp applyInfo. */
        public applyInfo: proto.IAllianceApplyInfo[];

        /**
         * Encodes the specified Msg_DealAllianceJoinRsp message. Does not implicitly {@link proto.Msg_DealAllianceJoinRsp.verify|verify} messages.
         * @param m Msg_DealAllianceJoinRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DealAllianceJoinRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DealAllianceJoinRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DealAllianceJoinRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DealAllianceJoinRsp;
    }

    namespace Msg_DealAllianceJoinRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyDealed = 1,
            PastDue = 2
        }
    }

    /** Properties of a Msg_AllianceSetPostRankReq. */
    interface IMsg_AllianceSetPostRankReq {

        /** Msg_AllianceSetPostRankReq roleID */
        roleID?: (string|null);

        /** Msg_AllianceSetPostRankReq postRank */
        postRank?: (number|null);
    }

    /** Represents a Msg_AllianceSetPostRankReq. */
    class Msg_AllianceSetPostRankReq implements IMsg_AllianceSetPostRankReq {

        /**
         * Constructs a new Msg_AllianceSetPostRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceSetPostRankReq);

        /** Msg_AllianceSetPostRankReq roleID. */
        public roleID: string;

        /** Msg_AllianceSetPostRankReq postRank. */
        public postRank: number;

        /**
         * Encodes the specified Msg_AllianceSetPostRankReq message. Does not implicitly {@link proto.Msg_AllianceSetPostRankReq.verify|verify} messages.
         * @param m Msg_AllianceSetPostRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceSetPostRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceSetPostRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceSetPostRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceSetPostRankReq;
    }

    /** Properties of a Msg_AllianceSetPostRankRsp. */
    interface IMsg_AllianceSetPostRankRsp {

        /** Msg_AllianceSetPostRankRsp result */
        result?: (proto.Msg_AllianceSetPostRankRsp.ErrorCode|null);

        /** Msg_AllianceSetPostRankRsp postRank */
        postRank?: (number|null);

        /** Msg_AllianceSetPostRankRsp playerUUID */
        playerUUID?: (string|null);
    }

    /** Represents a Msg_AllianceSetPostRankRsp. */
    class Msg_AllianceSetPostRankRsp implements IMsg_AllianceSetPostRankRsp {

        /**
         * Constructs a new Msg_AllianceSetPostRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceSetPostRankRsp);

        /** Msg_AllianceSetPostRankRsp result. */
        public result: proto.Msg_AllianceSetPostRankRsp.ErrorCode;

        /** Msg_AllianceSetPostRankRsp postRank. */
        public postRank: number;

        /** Msg_AllianceSetPostRankRsp playerUUID. */
        public playerUUID: string;

        /**
         * Encodes the specified Msg_AllianceSetPostRankRsp message. Does not implicitly {@link proto.Msg_AllianceSetPostRankRsp.verify|verify} messages.
         * @param m Msg_AllianceSetPostRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceSetPostRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceSetPostRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceSetPostRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceSetPostRankRsp;
    }

    namespace Msg_AllianceSetPostRankRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Inexistence = 1,
            PermissionDenied = 2
        }
    }

    /** Properties of a Msg_QueryAllianceInfoReq. */
    interface IMsg_QueryAllianceInfoReq {

        /** Msg_QueryAllianceInfoReq allianceID */
        allianceID?: (string|null);
    }

    /** Represents a Msg_QueryAllianceInfoReq. */
    class Msg_QueryAllianceInfoReq implements IMsg_QueryAllianceInfoReq {

        /**
         * Constructs a new Msg_QueryAllianceInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QueryAllianceInfoReq);

        /** Msg_QueryAllianceInfoReq allianceID. */
        public allianceID: string;

        /**
         * Encodes the specified Msg_QueryAllianceInfoReq message. Does not implicitly {@link proto.Msg_QueryAllianceInfoReq.verify|verify} messages.
         * @param m Msg_QueryAllianceInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QueryAllianceInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QueryAllianceInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QueryAllianceInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QueryAllianceInfoReq;
    }

    /** Properties of a Msg_QueryAllianceInfoRsp. */
    interface IMsg_QueryAllianceInfoRsp {

        /** Msg_QueryAllianceInfoRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_QueryAllianceInfoRsp allianceInfo */
        allianceInfo?: (proto.IAllianceInfo|null);
    }

    /** Represents a Msg_QueryAllianceInfoRsp. */
    class Msg_QueryAllianceInfoRsp implements IMsg_QueryAllianceInfoRsp {

        /**
         * Constructs a new Msg_QueryAllianceInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QueryAllianceInfoRsp);

        /** Msg_QueryAllianceInfoRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_QueryAllianceInfoRsp allianceInfo. */
        public allianceInfo?: (proto.IAllianceInfo|null);

        /**
         * Encodes the specified Msg_QueryAllianceInfoRsp message. Does not implicitly {@link proto.Msg_QueryAllianceInfoRsp.verify|verify} messages.
         * @param m Msg_QueryAllianceInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QueryAllianceInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QueryAllianceInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QueryAllianceInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QueryAllianceInfoRsp;
    }

    /** Properties of a Msg_SearchAllianceReq. */
    interface IMsg_SearchAllianceReq {

        /** Msg_SearchAllianceReq content */
        content?: (string|null);
    }

    /** Represents a Msg_SearchAllianceReq. */
    class Msg_SearchAllianceReq implements IMsg_SearchAllianceReq {

        /**
         * Constructs a new Msg_SearchAllianceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchAllianceReq);

        /** Msg_SearchAllianceReq content. */
        public content: string;

        /**
         * Encodes the specified Msg_SearchAllianceReq message. Does not implicitly {@link proto.Msg_SearchAllianceReq.verify|verify} messages.
         * @param m Msg_SearchAllianceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchAllianceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchAllianceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchAllianceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchAllianceReq;
    }

    /** Properties of a Msg_SearchAllianceRsp. */
    interface IMsg_SearchAllianceRsp {

        /** Msg_SearchAllianceRsp allianceInfo */
        allianceInfo?: (proto.IAllianceSimpleInfo[]|null);
    }

    /** Represents a Msg_SearchAllianceRsp. */
    class Msg_SearchAllianceRsp implements IMsg_SearchAllianceRsp {

        /**
         * Constructs a new Msg_SearchAllianceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchAllianceRsp);

        /** Msg_SearchAllianceRsp allianceInfo. */
        public allianceInfo: proto.IAllianceSimpleInfo[];

        /**
         * Encodes the specified Msg_SearchAllianceRsp message. Does not implicitly {@link proto.Msg_SearchAllianceRsp.verify|verify} messages.
         * @param m Msg_SearchAllianceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchAllianceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchAllianceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchAllianceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchAllianceRsp;
    }

    /** Properties of a Msg_RecommendAllianceReq. */
    interface IMsg_RecommendAllianceReq {
    }

    /** Represents a Msg_RecommendAllianceReq. */
    class Msg_RecommendAllianceReq implements IMsg_RecommendAllianceReq {

        /**
         * Constructs a new Msg_RecommendAllianceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecommendAllianceReq);

        /**
         * Encodes the specified Msg_RecommendAllianceReq message. Does not implicitly {@link proto.Msg_RecommendAllianceReq.verify|verify} messages.
         * @param m Msg_RecommendAllianceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecommendAllianceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecommendAllianceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecommendAllianceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecommendAllianceReq;
    }

    /** Properties of a Msg_RecommendAllianceRsp. */
    interface IMsg_RecommendAllianceRsp {

        /** Msg_RecommendAllianceRsp allianceInfo */
        allianceInfo?: (proto.IAllianceSimpleInfo[]|null);
    }

    /** Represents a Msg_RecommendAllianceRsp. */
    class Msg_RecommendAllianceRsp implements IMsg_RecommendAllianceRsp {

        /**
         * Constructs a new Msg_RecommendAllianceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecommendAllianceRsp);

        /** Msg_RecommendAllianceRsp allianceInfo. */
        public allianceInfo: proto.IAllianceSimpleInfo[];

        /**
         * Encodes the specified Msg_RecommendAllianceRsp message. Does not implicitly {@link proto.Msg_RecommendAllianceRsp.verify|verify} messages.
         * @param m Msg_RecommendAllianceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecommendAllianceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecommendAllianceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecommendAllianceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecommendAllianceRsp;
    }

    /** Properties of a Msg_ModifyAllianceInfoReq. */
    interface IMsg_ModifyAllianceInfoReq {

        /** Msg_ModifyAllianceInfoReq Instruction */
        Instruction?: (string|null);

        /** Msg_ModifyAllianceInfoReq JoinType */
        JoinType?: (number|null);

        /** Msg_ModifyAllianceInfoReq JoinMinScore */
        JoinMinScore?: (number|null);

        /** Msg_ModifyAllianceInfoReq Icon */
        Icon?: (number|null);

        /** Msg_ModifyAllianceInfoReq Name */
        Name?: (string|null);
    }

    /** Represents a Msg_ModifyAllianceInfoReq. */
    class Msg_ModifyAllianceInfoReq implements IMsg_ModifyAllianceInfoReq {

        /**
         * Constructs a new Msg_ModifyAllianceInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ModifyAllianceInfoReq);

        /** Msg_ModifyAllianceInfoReq Instruction. */
        public Instruction: string;

        /** Msg_ModifyAllianceInfoReq JoinType. */
        public JoinType: number;

        /** Msg_ModifyAllianceInfoReq JoinMinScore. */
        public JoinMinScore: number;

        /** Msg_ModifyAllianceInfoReq Icon. */
        public Icon: number;

        /** Msg_ModifyAllianceInfoReq Name. */
        public Name: string;

        /**
         * Encodes the specified Msg_ModifyAllianceInfoReq message. Does not implicitly {@link proto.Msg_ModifyAllianceInfoReq.verify|verify} messages.
         * @param m Msg_ModifyAllianceInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ModifyAllianceInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ModifyAllianceInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ModifyAllianceInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ModifyAllianceInfoReq;
    }

    /** Properties of a Msg_ModifyAllianceInfoRsp. */
    interface IMsg_ModifyAllianceInfoRsp {

        /** Msg_ModifyAllianceInfoRsp result */
        result?: (proto.Msg_ModifyAllianceInfoRsp.ErrorCode|null);

        /** Msg_ModifyAllianceInfoRsp baseInfo */
        baseInfo?: (proto.IAllianceBaseInfo|null);
    }

    /** Represents a Msg_ModifyAllianceInfoRsp. */
    class Msg_ModifyAllianceInfoRsp implements IMsg_ModifyAllianceInfoRsp {

        /**
         * Constructs a new Msg_ModifyAllianceInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ModifyAllianceInfoRsp);

        /** Msg_ModifyAllianceInfoRsp result. */
        public result: proto.Msg_ModifyAllianceInfoRsp.ErrorCode;

        /** Msg_ModifyAllianceInfoRsp baseInfo. */
        public baseInfo?: (proto.IAllianceBaseInfo|null);

        /**
         * Encodes the specified Msg_ModifyAllianceInfoRsp message. Does not implicitly {@link proto.Msg_ModifyAllianceInfoRsp.verify|verify} messages.
         * @param m Msg_ModifyAllianceInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ModifyAllianceInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ModifyAllianceInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ModifyAllianceInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ModifyAllianceInfoRsp;
    }

    namespace Msg_ModifyAllianceInfoRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NoAuth = 1,
            SensitiveWordError = 2,
            ModifyLimit = 3
        }
    }

    /** Properties of a Msg_ExpelMemberReq. */
    interface IMsg_ExpelMemberReq {

        /** Msg_ExpelMemberReq memberUUID */
        memberUUID?: (string|null);
    }

    /** Represents a Msg_ExpelMemberReq. */
    class Msg_ExpelMemberReq implements IMsg_ExpelMemberReq {

        /**
         * Constructs a new Msg_ExpelMemberReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ExpelMemberReq);

        /** Msg_ExpelMemberReq memberUUID. */
        public memberUUID: string;

        /**
         * Encodes the specified Msg_ExpelMemberReq message. Does not implicitly {@link proto.Msg_ExpelMemberReq.verify|verify} messages.
         * @param m Msg_ExpelMemberReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ExpelMemberReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ExpelMemberReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ExpelMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ExpelMemberReq;
    }

    /** Properties of a Msg_ExpelMemberRsp. */
    interface IMsg_ExpelMemberRsp {

        /** Msg_ExpelMemberRsp result */
        result?: (proto.Msg_ExpelMemberRsp.ErrorCode|null);

        /** Msg_ExpelMemberRsp memberUUID */
        memberUUID?: (string|null);
    }

    /** Represents a Msg_ExpelMemberRsp. */
    class Msg_ExpelMemberRsp implements IMsg_ExpelMemberRsp {

        /**
         * Constructs a new Msg_ExpelMemberRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ExpelMemberRsp);

        /** Msg_ExpelMemberRsp result. */
        public result: proto.Msg_ExpelMemberRsp.ErrorCode;

        /** Msg_ExpelMemberRsp memberUUID. */
        public memberUUID: string;

        /**
         * Encodes the specified Msg_ExpelMemberRsp message. Does not implicitly {@link proto.Msg_ExpelMemberRsp.verify|verify} messages.
         * @param m Msg_ExpelMemberRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ExpelMemberRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ExpelMemberRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ExpelMemberRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ExpelMemberRsp;
    }

    namespace Msg_ExpelMemberRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Inexistence = 1,
            PermissionDenied = 2
        }
    }

    /** PushJoinOrExpelType enum. */
    enum PushJoinOrExpelType {
        PushJoin = 0,
        PushExpel = 1
    }

    /** Properties of a Msg_PushJoinOrExpelAllianceMsg. */
    interface IMsg_PushJoinOrExpelAllianceMsg {

        /** Msg_PushJoinOrExpelAllianceMsg iconIdx */
        iconIdx?: (number|null);

        /** Msg_PushJoinOrExpelAllianceMsg name */
        name?: (string|null);

        /** Msg_PushJoinOrExpelAllianceMsg type */
        type?: (proto.PushJoinOrExpelType|null);
    }

    /** Represents a Msg_PushJoinOrExpelAllianceMsg. */
    class Msg_PushJoinOrExpelAllianceMsg implements IMsg_PushJoinOrExpelAllianceMsg {

        /**
         * Constructs a new Msg_PushJoinOrExpelAllianceMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushJoinOrExpelAllianceMsg);

        /** Msg_PushJoinOrExpelAllianceMsg iconIdx. */
        public iconIdx: number;

        /** Msg_PushJoinOrExpelAllianceMsg name. */
        public name: string;

        /** Msg_PushJoinOrExpelAllianceMsg type. */
        public type: proto.PushJoinOrExpelType;

        /**
         * Encodes the specified Msg_PushJoinOrExpelAllianceMsg message. Does not implicitly {@link proto.Msg_PushJoinOrExpelAllianceMsg.verify|verify} messages.
         * @param m Msg_PushJoinOrExpelAllianceMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushJoinOrExpelAllianceMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushJoinOrExpelAllianceMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushJoinOrExpelAllianceMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushJoinOrExpelAllianceMsg;
    }

    /** Properties of a Msg_AllianceMsgPush. */
    interface IMsg_AllianceMsgPush {

        /** Msg_AllianceMsgPush msg */
        msg?: (proto.IAllianceMsgData|null);
    }

    /** Represents a Msg_AllianceMsgPush. */
    class Msg_AllianceMsgPush implements IMsg_AllianceMsgPush {

        /**
         * Constructs a new Msg_AllianceMsgPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceMsgPush);

        /** Msg_AllianceMsgPush msg. */
        public msg?: (proto.IAllianceMsgData|null);

        /**
         * Encodes the specified Msg_AllianceMsgPush message. Does not implicitly {@link proto.Msg_AllianceMsgPush.verify|verify} messages.
         * @param m Msg_AllianceMsgPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceMsgPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceMsgPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceMsgPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceMsgPush;
    }

    /** ChatChannelType enum. */
    enum ChatChannelType {
        InValid = 0,
        WorldChannel = 1,
        AllianceChannel = 2,
        PrivateChannel = 3
    }

    /** Properties of a Msg_SyncRoleAllianceData. */
    interface IMsg_SyncRoleAllianceData {

        /** Msg_SyncRoleAllianceData allianceData */
        allianceData?: (proto.IRoleAllianceData|null);
    }

    /** Represents a Msg_SyncRoleAllianceData. */
    class Msg_SyncRoleAllianceData implements IMsg_SyncRoleAllianceData {

        /**
         * Constructs a new Msg_SyncRoleAllianceData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRoleAllianceData);

        /** Msg_SyncRoleAllianceData allianceData. */
        public allianceData?: (proto.IRoleAllianceData|null);

        /**
         * Encodes the specified Msg_SyncRoleAllianceData message. Does not implicitly {@link proto.Msg_SyncRoleAllianceData.verify|verify} messages.
         * @param m Msg_SyncRoleAllianceData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRoleAllianceData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRoleAllianceData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRoleAllianceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRoleAllianceData;
    }

    /** Properties of a Msg_AllianceCardRequestDonateReq. */
    interface IMsg_AllianceCardRequestDonateReq {

        /** Msg_AllianceCardRequestDonateReq cardID */
        cardID?: (number|null);
    }

    /** Represents a Msg_AllianceCardRequestDonateReq. */
    class Msg_AllianceCardRequestDonateReq implements IMsg_AllianceCardRequestDonateReq {

        /**
         * Constructs a new Msg_AllianceCardRequestDonateReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceCardRequestDonateReq);

        /** Msg_AllianceCardRequestDonateReq cardID. */
        public cardID: number;

        /**
         * Encodes the specified Msg_AllianceCardRequestDonateReq message. Does not implicitly {@link proto.Msg_AllianceCardRequestDonateReq.verify|verify} messages.
         * @param m Msg_AllianceCardRequestDonateReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceCardRequestDonateReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceCardRequestDonateReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceCardRequestDonateReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceCardRequestDonateReq;
    }

    /** Properties of a Msg_AllianceCardRequestDonateRsp. */
    interface IMsg_AllianceCardRequestDonateRsp {

        /** Msg_AllianceCardRequestDonateRsp result */
        result?: (proto.Msg_AllianceCardRequestDonateRsp.ErrorCode|null);

        /** Msg_AllianceCardRequestDonateRsp nextRequestUTC */
        nextRequestUTC?: (number|null);
    }

    /** Represents a Msg_AllianceCardRequestDonateRsp. */
    class Msg_AllianceCardRequestDonateRsp implements IMsg_AllianceCardRequestDonateRsp {

        /**
         * Constructs a new Msg_AllianceCardRequestDonateRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceCardRequestDonateRsp);

        /** Msg_AllianceCardRequestDonateRsp result. */
        public result: proto.Msg_AllianceCardRequestDonateRsp.ErrorCode;

        /** Msg_AllianceCardRequestDonateRsp nextRequestUTC. */
        public nextRequestUTC: number;

        /**
         * Encodes the specified Msg_AllianceCardRequestDonateRsp message. Does not implicitly {@link proto.Msg_AllianceCardRequestDonateRsp.verify|verify} messages.
         * @param m Msg_AllianceCardRequestDonateRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceCardRequestDonateRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceCardRequestDonateRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceCardRequestDonateRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceCardRequestDonateRsp;
    }

    namespace Msg_AllianceCardRequestDonateRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            CardNotExist = 1,
            RequestCooldown = 2
        }
    }

    /** Properties of a Msg_AllianceDonateCardReq. */
    interface IMsg_AllianceDonateCardReq {

        /** Msg_AllianceDonateCardReq roleID */
        roleID?: (string|null);

        /** Msg_AllianceDonateCardReq cardID */
        cardID?: (number|null);
    }

    /** Represents a Msg_AllianceDonateCardReq. */
    class Msg_AllianceDonateCardReq implements IMsg_AllianceDonateCardReq {

        /**
         * Constructs a new Msg_AllianceDonateCardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceDonateCardReq);

        /** Msg_AllianceDonateCardReq roleID. */
        public roleID: string;

        /** Msg_AllianceDonateCardReq cardID. */
        public cardID: number;

        /**
         * Encodes the specified Msg_AllianceDonateCardReq message. Does not implicitly {@link proto.Msg_AllianceDonateCardReq.verify|verify} messages.
         * @param m Msg_AllianceDonateCardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceDonateCardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceDonateCardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceDonateCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceDonateCardReq;
    }

    /** Properties of a Msg_AllianceDonateCardRsp. */
    interface IMsg_AllianceDonateCardRsp {

        /** Msg_AllianceDonateCardRsp result */
        result?: (proto.Msg_AllianceDonateCardRsp.ErrorCode|null);

        /** Msg_AllianceDonateCardRsp applicantID */
        applicantID?: (string|null);

        /** Msg_AllianceDonateCardRsp goldCount */
        goldCount?: (number|null);

        /** Msg_AllianceDonateCardRsp expCount */
        expCount?: (number|null);
    }

    /** Represents a Msg_AllianceDonateCardRsp. */
    class Msg_AllianceDonateCardRsp implements IMsg_AllianceDonateCardRsp {

        /**
         * Constructs a new Msg_AllianceDonateCardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceDonateCardRsp);

        /** Msg_AllianceDonateCardRsp result. */
        public result: proto.Msg_AllianceDonateCardRsp.ErrorCode;

        /** Msg_AllianceDonateCardRsp applicantID. */
        public applicantID: string;

        /** Msg_AllianceDonateCardRsp goldCount. */
        public goldCount: number;

        /** Msg_AllianceDonateCardRsp expCount. */
        public expCount: number;

        /**
         * Encodes the specified Msg_AllianceDonateCardRsp message. Does not implicitly {@link proto.Msg_AllianceDonateCardRsp.verify|verify} messages.
         * @param m Msg_AllianceDonateCardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceDonateCardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceDonateCardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceDonateCardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceDonateCardRsp;
    }

    namespace Msg_AllianceDonateCardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            CardNotEnough = 1,
            DonateTopLimit = 2,
            DonateScoreTopLimit = 3
        }
    }

    /** Properties of a Msg_AllianceFightInvitationReq. */
    interface IMsg_AllianceFightInvitationReq {

        /** Msg_AllianceFightInvitationReq type */
        type?: (proto.FightType|null);

        /** Msg_AllianceFightInvitationReq message */
        message?: (string|null);

        /** Msg_AllianceFightInvitationReq channel */
        channel?: (proto.ChatChannelType|null);

        /** Msg_AllianceFightInvitationReq bCardLvLimit */
        bCardLvLimit?: (boolean|null);
    }

    /** Represents a Msg_AllianceFightInvitationReq. */
    class Msg_AllianceFightInvitationReq implements IMsg_AllianceFightInvitationReq {

        /**
         * Constructs a new Msg_AllianceFightInvitationReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceFightInvitationReq);

        /** Msg_AllianceFightInvitationReq type. */
        public type: proto.FightType;

        /** Msg_AllianceFightInvitationReq message. */
        public message: string;

        /** Msg_AllianceFightInvitationReq channel. */
        public channel: proto.ChatChannelType;

        /** Msg_AllianceFightInvitationReq bCardLvLimit. */
        public bCardLvLimit: boolean;

        /**
         * Encodes the specified Msg_AllianceFightInvitationReq message. Does not implicitly {@link proto.Msg_AllianceFightInvitationReq.verify|verify} messages.
         * @param m Msg_AllianceFightInvitationReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceFightInvitationReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceFightInvitationReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceFightInvitationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceFightInvitationReq;
    }

    /** Properties of a Msg_AllianceFightAcceptReq. */
    interface IMsg_AllianceFightAcceptReq {

        /** Msg_AllianceFightAcceptReq type */
        type?: (proto.FightType|null);

        /** Msg_AllianceFightAcceptReq roomID */
        roomID?: (number|null);

        /** Msg_AllianceFightAcceptReq channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_AllianceFightAcceptReq. */
    class Msg_AllianceFightAcceptReq implements IMsg_AllianceFightAcceptReq {

        /**
         * Constructs a new Msg_AllianceFightAcceptReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceFightAcceptReq);

        /** Msg_AllianceFightAcceptReq type. */
        public type: proto.FightType;

        /** Msg_AllianceFightAcceptReq roomID. */
        public roomID: number;

        /** Msg_AllianceFightAcceptReq channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_AllianceFightAcceptReq message. Does not implicitly {@link proto.Msg_AllianceFightAcceptReq.verify|verify} messages.
         * @param m Msg_AllianceFightAcceptReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceFightAcceptReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceFightAcceptReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceFightAcceptReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceFightAcceptReq;
    }

    /** Properties of a Msg_AllianceFightAcceptRsp. */
    interface IMsg_AllianceFightAcceptRsp {

        /** Msg_AllianceFightAcceptRsp result */
        result?: (proto.Msg_AllianceFightAcceptRsp.ErrorCode|null);

        /** Msg_AllianceFightAcceptRsp roomID */
        roomID?: (number|null);

        /** Msg_AllianceFightAcceptRsp type */
        type?: (proto.FightType|null);

        /** Msg_AllianceFightAcceptRsp channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_AllianceFightAcceptRsp. */
    class Msg_AllianceFightAcceptRsp implements IMsg_AllianceFightAcceptRsp {

        /**
         * Constructs a new Msg_AllianceFightAcceptRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AllianceFightAcceptRsp);

        /** Msg_AllianceFightAcceptRsp result. */
        public result: proto.Msg_AllianceFightAcceptRsp.ErrorCode;

        /** Msg_AllianceFightAcceptRsp roomID. */
        public roomID: number;

        /** Msg_AllianceFightAcceptRsp type. */
        public type: proto.FightType;

        /** Msg_AllianceFightAcceptRsp channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_AllianceFightAcceptRsp message. Does not implicitly {@link proto.Msg_AllianceFightAcceptRsp.verify|verify} messages.
         * @param m Msg_AllianceFightAcceptRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AllianceFightAcceptRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AllianceFightAcceptRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AllianceFightAcceptRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AllianceFightAcceptRsp;
    }

    namespace Msg_AllianceFightAcceptRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            OverTime = 1,
            PveCountNotEnough = 2,
            CardLevelLimit = 3,
            BannedCard = 4
        }
    }

    /** Properties of a Msg_PushSupportInfo. */
    interface IMsg_PushSupportInfo {

        /** Msg_PushSupportInfo applicantID */
        applicantID?: (string|null);

        /** Msg_PushSupportInfo donateID */
        donateID?: (string|null);

        /** Msg_PushSupportInfo donorName */
        donorName?: (string|null);

        /** Msg_PushSupportInfo cardID */
        cardID?: (number|null);

        /** Msg_PushSupportInfo curGainSupportCnt */
        curGainSupportCnt?: (number|null);
    }

    /** Represents a Msg_PushSupportInfo. */
    class Msg_PushSupportInfo implements IMsg_PushSupportInfo {

        /**
         * Constructs a new Msg_PushSupportInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushSupportInfo);

        /** Msg_PushSupportInfo applicantID. */
        public applicantID: string;

        /** Msg_PushSupportInfo donateID. */
        public donateID: string;

        /** Msg_PushSupportInfo donorName. */
        public donorName: string;

        /** Msg_PushSupportInfo cardID. */
        public cardID: number;

        /** Msg_PushSupportInfo curGainSupportCnt. */
        public curGainSupportCnt: number;

        /**
         * Encodes the specified Msg_PushSupportInfo message. Does not implicitly {@link proto.Msg_PushSupportInfo.verify|verify} messages.
         * @param m Msg_PushSupportInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushSupportInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushSupportInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushSupportInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushSupportInfo;
    }

    /** Properties of a Msg_PushRequestSupportInfo. */
    interface IMsg_PushRequestSupportInfo {

        /** Msg_PushRequestSupportInfo cardRequestInfo */
        cardRequestInfo?: (proto.IAllianceCardRequestInfo|null);
    }

    /** Represents a Msg_PushRequestSupportInfo. */
    class Msg_PushRequestSupportInfo implements IMsg_PushRequestSupportInfo {

        /**
         * Constructs a new Msg_PushRequestSupportInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushRequestSupportInfo);

        /** Msg_PushRequestSupportInfo cardRequestInfo. */
        public cardRequestInfo?: (proto.IAllianceCardRequestInfo|null);

        /**
         * Encodes the specified Msg_PushRequestSupportInfo message. Does not implicitly {@link proto.Msg_PushRequestSupportInfo.verify|verify} messages.
         * @param m Msg_PushRequestSupportInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushRequestSupportInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushRequestSupportInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushRequestSupportInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushRequestSupportInfo;
    }

    /** Properties of a Msg_PushAllianceExpelMember. */
    interface IMsg_PushAllianceExpelMember {
    }

    /** Represents a Msg_PushAllianceExpelMember. */
    class Msg_PushAllianceExpelMember implements IMsg_PushAllianceExpelMember {

        /**
         * Constructs a new Msg_PushAllianceExpelMember.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceExpelMember);

        /**
         * Encodes the specified Msg_PushAllianceExpelMember message. Does not implicitly {@link proto.Msg_PushAllianceExpelMember.verify|verify} messages.
         * @param m Msg_PushAllianceExpelMember message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceExpelMember, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceExpelMember message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceExpelMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceExpelMember;
    }

    /** Properties of a Msg_PushAllianceFightInvite. */
    interface IMsg_PushAllianceFightInvite {

        /** Msg_PushAllianceFightInvite fightInvite */
        fightInvite?: (proto.IAllianceFightInviteStruct|null);

        /** Msg_PushAllianceFightInvite channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_PushAllianceFightInvite. */
    class Msg_PushAllianceFightInvite implements IMsg_PushAllianceFightInvite {

        /**
         * Constructs a new Msg_PushAllianceFightInvite.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceFightInvite);

        /** Msg_PushAllianceFightInvite fightInvite. */
        public fightInvite?: (proto.IAllianceFightInviteStruct|null);

        /** Msg_PushAllianceFightInvite channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_PushAllianceFightInvite message. Does not implicitly {@link proto.Msg_PushAllianceFightInvite.verify|verify} messages.
         * @param m Msg_PushAllianceFightInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceFightInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceFightInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceFightInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceFightInvite;
    }

    /** Properties of a Msg_PushAllianceFightStart. */
    interface IMsg_PushAllianceFightStart {

        /** Msg_PushAllianceFightStart fightStart */
        fightStart?: (proto.IAllianceFightStruct|null);

        /** Msg_PushAllianceFightStart channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_PushAllianceFightStart. */
    class Msg_PushAllianceFightStart implements IMsg_PushAllianceFightStart {

        /**
         * Constructs a new Msg_PushAllianceFightStart.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceFightStart);

        /** Msg_PushAllianceFightStart fightStart. */
        public fightStart?: (proto.IAllianceFightStruct|null);

        /** Msg_PushAllianceFightStart channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_PushAllianceFightStart message. Does not implicitly {@link proto.Msg_PushAllianceFightStart.verify|verify} messages.
         * @param m Msg_PushAllianceFightStart message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceFightStart, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceFightStart message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceFightStart
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceFightStart;
    }

    /** Properties of a Msg_PushAllianceFightEnd. */
    interface IMsg_PushAllianceFightEnd {

        /** Msg_PushAllianceFightEnd fightEnd */
        fightEnd?: (proto.IAllianceFightStruct|null);

        /** Msg_PushAllianceFightEnd channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_PushAllianceFightEnd. */
    class Msg_PushAllianceFightEnd implements IMsg_PushAllianceFightEnd {

        /**
         * Constructs a new Msg_PushAllianceFightEnd.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceFightEnd);

        /** Msg_PushAllianceFightEnd fightEnd. */
        public fightEnd?: (proto.IAllianceFightStruct|null);

        /** Msg_PushAllianceFightEnd channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_PushAllianceFightEnd message. Does not implicitly {@link proto.Msg_PushAllianceFightEnd.verify|verify} messages.
         * @param m Msg_PushAllianceFightEnd message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceFightEnd, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceFightEnd message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceFightEnd
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceFightEnd;
    }

    /** Properties of a Msg_PushRecentlyAllianceFightInfo. */
    interface IMsg_PushRecentlyAllianceFightInfo {

        /** Msg_PushRecentlyAllianceFightInfo fightInvite */
        fightInvite?: (proto.IAllianceFightInviteStruct[]|null);

        /** Msg_PushRecentlyAllianceFightInfo fightData */
        fightData?: (proto.IAllianceFightStruct[]|null);
    }

    /** Represents a Msg_PushRecentlyAllianceFightInfo. */
    class Msg_PushRecentlyAllianceFightInfo implements IMsg_PushRecentlyAllianceFightInfo {

        /**
         * Constructs a new Msg_PushRecentlyAllianceFightInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushRecentlyAllianceFightInfo);

        /** Msg_PushRecentlyAllianceFightInfo fightInvite. */
        public fightInvite: proto.IAllianceFightInviteStruct[];

        /** Msg_PushRecentlyAllianceFightInfo fightData. */
        public fightData: proto.IAllianceFightStruct[];

        /**
         * Encodes the specified Msg_PushRecentlyAllianceFightInfo message. Does not implicitly {@link proto.Msg_PushRecentlyAllianceFightInfo.verify|verify} messages.
         * @param m Msg_PushRecentlyAllianceFightInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushRecentlyAllianceFightInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushRecentlyAllianceFightInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushRecentlyAllianceFightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushRecentlyAllianceFightInfo;
    }

    /** Properties of a Msg_PushCancelAllianceFightInvite. */
    interface IMsg_PushCancelAllianceFightInvite {

        /** Msg_PushCancelAllianceFightInvite roomID */
        roomID?: (number|null);

        /** Msg_PushCancelAllianceFightInvite type */
        type?: (proto.FightType|null);

        /** Msg_PushCancelAllianceFightInvite channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_PushCancelAllianceFightInvite. */
    class Msg_PushCancelAllianceFightInvite implements IMsg_PushCancelAllianceFightInvite {

        /**
         * Constructs a new Msg_PushCancelAllianceFightInvite.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushCancelAllianceFightInvite);

        /** Msg_PushCancelAllianceFightInvite roomID. */
        public roomID: number;

        /** Msg_PushCancelAllianceFightInvite type. */
        public type: proto.FightType;

        /** Msg_PushCancelAllianceFightInvite channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_PushCancelAllianceFightInvite message. Does not implicitly {@link proto.Msg_PushCancelAllianceFightInvite.verify|verify} messages.
         * @param m Msg_PushCancelAllianceFightInvite message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushCancelAllianceFightInvite, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushCancelAllianceFightInvite message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushCancelAllianceFightInvite
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushCancelAllianceFightInvite;
    }

    /** Properties of a Msg_PushAllianceApplyMessage. */
    interface IMsg_PushAllianceApplyMessage {

        /** Msg_PushAllianceApplyMessage haveMessage */
        haveMessage?: (boolean|null);
    }

    /** Represents a Msg_PushAllianceApplyMessage. */
    class Msg_PushAllianceApplyMessage implements IMsg_PushAllianceApplyMessage {

        /**
         * Constructs a new Msg_PushAllianceApplyMessage.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceApplyMessage);

        /** Msg_PushAllianceApplyMessage haveMessage. */
        public haveMessage: boolean;

        /**
         * Encodes the specified Msg_PushAllianceApplyMessage message. Does not implicitly {@link proto.Msg_PushAllianceApplyMessage.verify|verify} messages.
         * @param m Msg_PushAllianceApplyMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceApplyMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceApplyMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceApplyMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceApplyMessage;
    }

    /** Properties of a Msg_PushAllianceLeaderChange. */
    interface IMsg_PushAllianceLeaderChange {
    }

    /** Represents a Msg_PushAllianceLeaderChange. */
    class Msg_PushAllianceLeaderChange implements IMsg_PushAllianceLeaderChange {

        /**
         * Constructs a new Msg_PushAllianceLeaderChange.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushAllianceLeaderChange);

        /**
         * Encodes the specified Msg_PushAllianceLeaderChange message. Does not implicitly {@link proto.Msg_PushAllianceLeaderChange.verify|verify} messages.
         * @param m Msg_PushAllianceLeaderChange message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushAllianceLeaderChange, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushAllianceLeaderChange message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushAllianceLeaderChange
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushAllianceLeaderChange;
    }

    /** Properties of a Msg_GetPveClearRewardReq. */
    interface IMsg_GetPveClearRewardReq {

        /** Msg_GetPveClearRewardReq waveNum */
        waveNum?: (number|null);
    }

    /** Represents a Msg_GetPveClearRewardReq. */
    class Msg_GetPveClearRewardReq implements IMsg_GetPveClearRewardReq {

        /**
         * Constructs a new Msg_GetPveClearRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveClearRewardReq);

        /** Msg_GetPveClearRewardReq waveNum. */
        public waveNum: number;

        /**
         * Encodes the specified Msg_GetPveClearRewardReq message. Does not implicitly {@link proto.Msg_GetPveClearRewardReq.verify|verify} messages.
         * @param m Msg_GetPveClearRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveClearRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveClearRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveClearRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveClearRewardReq;
    }

    /** Properties of a Msg_GetPveClearRewardRsp. */
    interface IMsg_GetPveClearRewardRsp {

        /** Msg_GetPveClearRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetPveClearRewardRsp addGold */
        addGold?: (number|null);

        /** Msg_GetPveClearRewardRsp clearRewards */
        clearRewards?: (number[]|null);
    }

    /** Represents a Msg_GetPveClearRewardRsp. */
    class Msg_GetPveClearRewardRsp implements IMsg_GetPveClearRewardRsp {

        /**
         * Constructs a new Msg_GetPveClearRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveClearRewardRsp);

        /** Msg_GetPveClearRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetPveClearRewardRsp addGold. */
        public addGold: number;

        /** Msg_GetPveClearRewardRsp clearRewards. */
        public clearRewards: number[];

        /**
         * Encodes the specified Msg_GetPveClearRewardRsp message. Does not implicitly {@link proto.Msg_GetPveClearRewardRsp.verify|verify} messages.
         * @param m Msg_GetPveClearRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveClearRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveClearRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveClearRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveClearRewardRsp;
    }

    /** PveDailyStatus enum. */
    enum PveDailyStatus {
        Incomplete = 0,
        Complete = 1,
        Received = 2
    }

    /** Properties of a Msg_GetPveDailyRewardReq. */
    interface IMsg_GetPveDailyRewardReq {
    }

    /** Represents a Msg_GetPveDailyRewardReq. */
    class Msg_GetPveDailyRewardReq implements IMsg_GetPveDailyRewardReq {

        /**
         * Constructs a new Msg_GetPveDailyRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveDailyRewardReq);

        /**
         * Encodes the specified Msg_GetPveDailyRewardReq message. Does not implicitly {@link proto.Msg_GetPveDailyRewardReq.verify|verify} messages.
         * @param m Msg_GetPveDailyRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveDailyRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveDailyRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveDailyRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveDailyRewardReq;
    }

    /** Properties of a Msg_GetPveDailyRewardRsp. */
    interface IMsg_GetPveDailyRewardRsp {

        /** Msg_GetPveDailyRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetPveDailyRewardRsp addGold */
        addGold?: (number|null);
    }

    /** Represents a Msg_GetPveDailyRewardRsp. */
    class Msg_GetPveDailyRewardRsp implements IMsg_GetPveDailyRewardRsp {

        /**
         * Constructs a new Msg_GetPveDailyRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveDailyRewardRsp);

        /** Msg_GetPveDailyRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetPveDailyRewardRsp addGold. */
        public addGold: number;

        /**
         * Encodes the specified Msg_GetPveDailyRewardRsp message. Does not implicitly {@link proto.Msg_GetPveDailyRewardRsp.verify|verify} messages.
         * @param m Msg_GetPveDailyRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveDailyRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveDailyRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveDailyRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveDailyRewardRsp;
    }

    /** Properties of a Msg_BuyPveCountReq. */
    interface IMsg_BuyPveCountReq {

        /** Msg_BuyPveCountReq byAd */
        byAd?: (boolean|null);
    }

    /** Represents a Msg_BuyPveCountReq. */
    class Msg_BuyPveCountReq implements IMsg_BuyPveCountReq {

        /**
         * Constructs a new Msg_BuyPveCountReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyPveCountReq);

        /** Msg_BuyPveCountReq byAd. */
        public byAd: boolean;

        /**
         * Encodes the specified Msg_BuyPveCountReq message. Does not implicitly {@link proto.Msg_BuyPveCountReq.verify|verify} messages.
         * @param m Msg_BuyPveCountReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyPveCountReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyPveCountReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyPveCountReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyPveCountReq;
    }

    /** Properties of a Msg_BuyPveCountRsp. */
    interface IMsg_BuyPveCountRsp {

        /** Msg_BuyPveCountRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_BuyPveCountRsp pveCount */
        pveCount?: (number|null);
    }

    /** Represents a Msg_BuyPveCountRsp. */
    class Msg_BuyPveCountRsp implements IMsg_BuyPveCountRsp {

        /**
         * Constructs a new Msg_BuyPveCountRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyPveCountRsp);

        /** Msg_BuyPveCountRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_BuyPveCountRsp pveCount. */
        public pveCount: number;

        /**
         * Encodes the specified Msg_BuyPveCountRsp message. Does not implicitly {@link proto.Msg_BuyPveCountRsp.verify|verify} messages.
         * @param m Msg_BuyPveCountRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyPveCountRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyPveCountRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyPveCountRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyPveCountRsp;
    }

    /** Properties of a Msg_GetPveStatusReq. */
    interface IMsg_GetPveStatusReq {
    }

    /** Represents a Msg_GetPveStatusReq. */
    class Msg_GetPveStatusReq implements IMsg_GetPveStatusReq {

        /**
         * Constructs a new Msg_GetPveStatusReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveStatusReq);

        /**
         * Encodes the specified Msg_GetPveStatusReq message. Does not implicitly {@link proto.Msg_GetPveStatusReq.verify|verify} messages.
         * @param m Msg_GetPveStatusReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveStatusReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveStatusReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveStatusReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveStatusReq;
    }

    /** Properties of a Msg_GetPveStatusRsp. */
    interface IMsg_GetPveStatusRsp {

        /** Msg_GetPveStatusRsp pveCount */
        pveCount?: (number|null);

        /** Msg_GetPveStatusRsp dailyStatus */
        dailyStatus?: (proto.PveDailyStatus|null);

        /** Msg_GetPveStatusRsp clearRewards */
        clearRewards?: (number[]|null);

        /** Msg_GetPveStatusRsp maxWave */
        maxWave?: (number|null);

        /** Msg_GetPveStatusRsp pveAdCount */
        pveAdCount?: (number|null);
    }

    /** Represents a Msg_GetPveStatusRsp. */
    class Msg_GetPveStatusRsp implements IMsg_GetPveStatusRsp {

        /**
         * Constructs a new Msg_GetPveStatusRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPveStatusRsp);

        /** Msg_GetPveStatusRsp pveCount. */
        public pveCount: number;

        /** Msg_GetPveStatusRsp dailyStatus. */
        public dailyStatus: proto.PveDailyStatus;

        /** Msg_GetPveStatusRsp clearRewards. */
        public clearRewards: number[];

        /** Msg_GetPveStatusRsp maxWave. */
        public maxWave: number;

        /** Msg_GetPveStatusRsp pveAdCount. */
        public pveAdCount: number;

        /**
         * Encodes the specified Msg_GetPveStatusRsp message. Does not implicitly {@link proto.Msg_GetPveStatusRsp.verify|verify} messages.
         * @param m Msg_GetPveStatusRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPveStatusRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPveStatusRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPveStatusRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPveStatusRsp;
    }

    /** Properties of a Msg_BuyDemonPassReq. */
    interface IMsg_BuyDemonPassReq {
    }

    /** Represents a Msg_BuyDemonPassReq. */
    class Msg_BuyDemonPassReq implements IMsg_BuyDemonPassReq {

        /**
         * Constructs a new Msg_BuyDemonPassReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDemonPassReq);

        /**
         * Encodes the specified Msg_BuyDemonPassReq message. Does not implicitly {@link proto.Msg_BuyDemonPassReq.verify|verify} messages.
         * @param m Msg_BuyDemonPassReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDemonPassReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDemonPassReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDemonPassReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDemonPassReq;
    }

    /** Properties of a Msg_BuyDemonPassRsp. */
    interface IMsg_BuyDemonPassRsp {

        /** Msg_BuyDemonPassRsp result */
        result?: (proto.Msg_BuyDemonPassRsp.ErrorCode|null);
    }

    /** Represents a Msg_BuyDemonPassRsp. */
    class Msg_BuyDemonPassRsp implements IMsg_BuyDemonPassRsp {

        /**
         * Constructs a new Msg_BuyDemonPassRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDemonPassRsp);

        /** Msg_BuyDemonPassRsp result. */
        public result: proto.Msg_BuyDemonPassRsp.ErrorCode;

        /**
         * Encodes the specified Msg_BuyDemonPassRsp message. Does not implicitly {@link proto.Msg_BuyDemonPassRsp.verify|verify} messages.
         * @param m Msg_BuyDemonPassRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDemonPassRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDemonPassRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDemonPassRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDemonPassRsp;
    }

    namespace Msg_BuyDemonPassRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Exist = 1,
            MoneyLack = 2
        }
    }

    /** Properties of a Msg_FightGmWin. */
    interface IMsg_FightGmWin {
    }

    /** Represents a Msg_FightGmWin. */
    class Msg_FightGmWin implements IMsg_FightGmWin {

        /**
         * Constructs a new Msg_FightGmWin.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightGmWin);

        /**
         * Encodes the specified Msg_FightGmWin message. Does not implicitly {@link proto.Msg_FightGmWin.verify|verify} messages.
         * @param m Msg_FightGmWin message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightGmWin, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightGmWin message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightGmWin
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightGmWin;
    }

    /** Properties of a Msg_GmAddCupReq. */
    interface IMsg_GmAddCupReq {

        /** Msg_GmAddCupReq delta */
        delta?: (number|null);
    }

    /** Represents a Msg_GmAddCupReq. */
    class Msg_GmAddCupReq implements IMsg_GmAddCupReq {

        /**
         * Constructs a new Msg_GmAddCupReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GmAddCupReq);

        /** Msg_GmAddCupReq delta. */
        public delta: number;

        /**
         * Encodes the specified Msg_GmAddCupReq message. Does not implicitly {@link proto.Msg_GmAddCupReq.verify|verify} messages.
         * @param m Msg_GmAddCupReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GmAddCupReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GmAddCupReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GmAddCupReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GmAddCupReq;
    }

    /** Properties of a Msg_GmAddCupRsp. */
    interface IMsg_GmAddCupRsp {

        /** Msg_GmAddCupRsp cup */
        cup?: (number|null);
    }

    /** Represents a Msg_GmAddCupRsp. */
    class Msg_GmAddCupRsp implements IMsg_GmAddCupRsp {

        /**
         * Constructs a new Msg_GmAddCupRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GmAddCupRsp);

        /** Msg_GmAddCupRsp cup. */
        public cup: number;

        /**
         * Encodes the specified Msg_GmAddCupRsp message. Does not implicitly {@link proto.Msg_GmAddCupRsp.verify|verify} messages.
         * @param m Msg_GmAddCupRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GmAddCupRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GmAddCupRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GmAddCupRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GmAddCupRsp;
    }

    /** Properties of a Msg_SimpleGmReq. */
    interface IMsg_SimpleGmReq {

        /** Msg_SimpleGmReq content */
        content?: (string|null);
    }

    /** Represents a Msg_SimpleGmReq. */
    class Msg_SimpleGmReq implements IMsg_SimpleGmReq {

        /**
         * Constructs a new Msg_SimpleGmReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SimpleGmReq);

        /** Msg_SimpleGmReq content. */
        public content: string;

        /**
         * Encodes the specified Msg_SimpleGmReq message. Does not implicitly {@link proto.Msg_SimpleGmReq.verify|verify} messages.
         * @param m Msg_SimpleGmReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SimpleGmReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SimpleGmReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SimpleGmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SimpleGmReq;
    }

    /** Properties of a Msg_SimpleGmRsp. */
    interface IMsg_SimpleGmRsp {

        /** Msg_SimpleGmRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_SimpleGmRsp content */
        content?: (string|null);
    }

    /** Represents a Msg_SimpleGmRsp. */
    class Msg_SimpleGmRsp implements IMsg_SimpleGmRsp {

        /**
         * Constructs a new Msg_SimpleGmRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SimpleGmRsp);

        /** Msg_SimpleGmRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_SimpleGmRsp content. */
        public content: string;

        /**
         * Encodes the specified Msg_SimpleGmRsp message. Does not implicitly {@link proto.Msg_SimpleGmRsp.verify|verify} messages.
         * @param m Msg_SimpleGmRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SimpleGmRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SimpleGmRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SimpleGmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SimpleGmRsp;
    }

    /** Properties of a RoleChallengeData. */
    interface IRoleChallengeData {

        /** RoleChallengeData challengeId */
        challengeId?: (number|null);

        /** RoleChallengeData failCount */
        failCount?: (number|null);

        /** RoleChallengeData winCount */
        winCount?: (number|null);

        /** RoleChallengeData awardCount */
        awardCount?: (number|null);

        /** RoleChallengeData cards */
        cards?: (proto.IFightCardData[]|null);

        /** RoleChallengeData lord */
        lord?: (proto.IFightCardData|null);

        /** RoleChallengeData talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a RoleChallengeData. */
    class RoleChallengeData implements IRoleChallengeData {

        /**
         * Constructs a new RoleChallengeData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRoleChallengeData);

        /** RoleChallengeData challengeId. */
        public challengeId: number;

        /** RoleChallengeData failCount. */
        public failCount: number;

        /** RoleChallengeData winCount. */
        public winCount: number;

        /** RoleChallengeData awardCount. */
        public awardCount: number;

        /** RoleChallengeData cards. */
        public cards: proto.IFightCardData[];

        /** RoleChallengeData lord. */
        public lord?: (proto.IFightCardData|null);

        /** RoleChallengeData talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified RoleChallengeData message. Does not implicitly {@link proto.RoleChallengeData.verify|verify} messages.
         * @param m RoleChallengeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRoleChallengeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RoleChallengeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RoleChallengeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RoleChallengeData;
    }

    /** Properties of a Msg_ChallengeGetInfoReq. */
    interface IMsg_ChallengeGetInfoReq {
    }

    /** Represents a Msg_ChallengeGetInfoReq. */
    class Msg_ChallengeGetInfoReq implements IMsg_ChallengeGetInfoReq {

        /**
         * Constructs a new Msg_ChallengeGetInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeGetInfoReq);

        /**
         * Encodes the specified Msg_ChallengeGetInfoReq message. Does not implicitly {@link proto.Msg_ChallengeGetInfoReq.verify|verify} messages.
         * @param m Msg_ChallengeGetInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeGetInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeGetInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeGetInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeGetInfoReq;
    }

    /** Properties of a ChallengeInfo. */
    interface IChallengeInfo {

        /** ChallengeInfo challengeId */
        challengeId?: (number|null);

        /** ChallengeInfo startUTC */
        startUTC?: (number|Long|null);

        /** ChallengeInfo endUTC */
        endUTC?: (number|Long|null);
    }

    /** Represents a ChallengeInfo. */
    class ChallengeInfo implements IChallengeInfo {

        /**
         * Constructs a new ChallengeInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IChallengeInfo);

        /** ChallengeInfo challengeId. */
        public challengeId: number;

        /** ChallengeInfo startUTC. */
        public startUTC: (number|Long);

        /** ChallengeInfo endUTC. */
        public endUTC: (number|Long);

        /**
         * Encodes the specified ChallengeInfo message. Does not implicitly {@link proto.ChallengeInfo.verify|verify} messages.
         * @param m ChallengeInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IChallengeInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChallengeInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChallengeInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChallengeInfo;
    }

    /** Properties of a Msg_ChallengeGetInfoRsp. */
    interface IMsg_ChallengeGetInfoRsp {

        /** Msg_ChallengeGetInfoRsp challengeData */
        challengeData?: (proto.IRoleChallengeData|null);

        /** Msg_ChallengeGetInfoRsp challengeInfos */
        challengeInfos?: (proto.IChallengeInfo[]|null);
    }

    /** Represents a Msg_ChallengeGetInfoRsp. */
    class Msg_ChallengeGetInfoRsp implements IMsg_ChallengeGetInfoRsp {

        /**
         * Constructs a new Msg_ChallengeGetInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeGetInfoRsp);

        /** Msg_ChallengeGetInfoRsp challengeData. */
        public challengeData?: (proto.IRoleChallengeData|null);

        /** Msg_ChallengeGetInfoRsp challengeInfos. */
        public challengeInfos: proto.IChallengeInfo[];

        /**
         * Encodes the specified Msg_ChallengeGetInfoRsp message. Does not implicitly {@link proto.Msg_ChallengeGetInfoRsp.verify|verify} messages.
         * @param m Msg_ChallengeGetInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeGetInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeGetInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeGetInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeGetInfoRsp;
    }

    /** Properties of a Msg_ChallengeChangeDeckReq. */
    interface IMsg_ChallengeChangeDeckReq {

        /** Msg_ChallengeChangeDeckReq cardIndex */
        cardIndex?: (number|null);

        /** Msg_ChallengeChangeDeckReq cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_ChallengeChangeDeckReq. */
    class Msg_ChallengeChangeDeckReq implements IMsg_ChallengeChangeDeckReq {

        /**
         * Constructs a new Msg_ChallengeChangeDeckReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeChangeDeckReq);

        /** Msg_ChallengeChangeDeckReq cardIndex. */
        public cardIndex: number;

        /** Msg_ChallengeChangeDeckReq cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_ChallengeChangeDeckReq message. Does not implicitly {@link proto.Msg_ChallengeChangeDeckReq.verify|verify} messages.
         * @param m Msg_ChallengeChangeDeckReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeChangeDeckReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeChangeDeckReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeChangeDeckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeChangeDeckReq;
    }

    /** Properties of a Msg_ChallengeChangeDeckRsp. */
    interface IMsg_ChallengeChangeDeckRsp {

        /** Msg_ChallengeChangeDeckRsp result */
        result?: (proto.Msg_ChallengeChangeDeckRsp.ErrorCode|null);

        /** Msg_ChallengeChangeDeckRsp cardIndex */
        cardIndex?: (number|null);

        /** Msg_ChallengeChangeDeckRsp cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_ChallengeChangeDeckRsp. */
    class Msg_ChallengeChangeDeckRsp implements IMsg_ChallengeChangeDeckRsp {

        /**
         * Constructs a new Msg_ChallengeChangeDeckRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeChangeDeckRsp);

        /** Msg_ChallengeChangeDeckRsp result. */
        public result: proto.Msg_ChallengeChangeDeckRsp.ErrorCode;

        /** Msg_ChallengeChangeDeckRsp cardIndex. */
        public cardIndex: number;

        /** Msg_ChallengeChangeDeckRsp cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_ChallengeChangeDeckRsp message. Does not implicitly {@link proto.Msg_ChallengeChangeDeckRsp.verify|verify} messages.
         * @param m Msg_ChallengeChangeDeckRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeChangeDeckRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeChangeDeckRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeChangeDeckRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeChangeDeckRsp;
    }

    namespace Msg_ChallengeChangeDeckRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ParamError = 1,
            NoChallenge = 2,
            ForbidQuality = 3,
            SpecifiedCard = 4
        }
    }

    /** Properties of a Msg_ChallengeSetLordReq. */
    interface IMsg_ChallengeSetLordReq {

        /** Msg_ChallengeSetLordReq cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_ChallengeSetLordReq. */
    class Msg_ChallengeSetLordReq implements IMsg_ChallengeSetLordReq {

        /**
         * Constructs a new Msg_ChallengeSetLordReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeSetLordReq);

        /** Msg_ChallengeSetLordReq cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_ChallengeSetLordReq message. Does not implicitly {@link proto.Msg_ChallengeSetLordReq.verify|verify} messages.
         * @param m Msg_ChallengeSetLordReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeSetLordReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeSetLordReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeSetLordReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeSetLordReq;
    }

    /** Properties of a Msg_ChallengeSetLordRsp. */
    interface IMsg_ChallengeSetLordRsp {

        /** Msg_ChallengeSetLordRsp result */
        result?: (proto.Msg_ChallengeSetLordRsp.ErrorCode|null);

        /** Msg_ChallengeSetLordRsp cardUuid */
        cardUuid?: (string|null);
    }

    /** Represents a Msg_ChallengeSetLordRsp. */
    class Msg_ChallengeSetLordRsp implements IMsg_ChallengeSetLordRsp {

        /**
         * Constructs a new Msg_ChallengeSetLordRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeSetLordRsp);

        /** Msg_ChallengeSetLordRsp result. */
        public result: proto.Msg_ChallengeSetLordRsp.ErrorCode;

        /** Msg_ChallengeSetLordRsp cardUuid. */
        public cardUuid: string;

        /**
         * Encodes the specified Msg_ChallengeSetLordRsp message. Does not implicitly {@link proto.Msg_ChallengeSetLordRsp.verify|verify} messages.
         * @param m Msg_ChallengeSetLordRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeSetLordRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeSetLordRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeSetLordRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeSetLordRsp;
    }

    namespace Msg_ChallengeSetLordRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ParamError = 1,
            NoChallenge = 2,
            ForbidQuality = 3,
            SpecifiedCard = 4
        }
    }

    /** Properties of a Msg_ChallengeSetTalentReq. */
    interface IMsg_ChallengeSetTalentReq {

        /** Msg_ChallengeSetTalentReq talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a Msg_ChallengeSetTalentReq. */
    class Msg_ChallengeSetTalentReq implements IMsg_ChallengeSetTalentReq {

        /**
         * Constructs a new Msg_ChallengeSetTalentReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeSetTalentReq);

        /** Msg_ChallengeSetTalentReq talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified Msg_ChallengeSetTalentReq message. Does not implicitly {@link proto.Msg_ChallengeSetTalentReq.verify|verify} messages.
         * @param m Msg_ChallengeSetTalentReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeSetTalentReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeSetTalentReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeSetTalentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeSetTalentReq;
    }

    /** Properties of a Msg_ChallengeSetTalentRsp. */
    interface IMsg_ChallengeSetTalentRsp {

        /** Msg_ChallengeSetTalentRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_ChallengeSetTalentRsp talent */
        talent?: (proto.ITalentData|null);
    }

    /** Represents a Msg_ChallengeSetTalentRsp. */
    class Msg_ChallengeSetTalentRsp implements IMsg_ChallengeSetTalentRsp {

        /**
         * Constructs a new Msg_ChallengeSetTalentRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeSetTalentRsp);

        /** Msg_ChallengeSetTalentRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_ChallengeSetTalentRsp talent. */
        public talent?: (proto.ITalentData|null);

        /**
         * Encodes the specified Msg_ChallengeSetTalentRsp message. Does not implicitly {@link proto.Msg_ChallengeSetTalentRsp.verify|verify} messages.
         * @param m Msg_ChallengeSetTalentRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeSetTalentRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeSetTalentRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeSetTalentRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeSetTalentRsp;
    }

    /** Properties of a Msg_ChallengeCountResetReq. */
    interface IMsg_ChallengeCountResetReq {

        /** Msg_ChallengeCountResetReq resetType */
        resetType?: (proto.Msg_ChallengeCountResetReq.ResetType|null);
    }

    /** Represents a Msg_ChallengeCountResetReq. */
    class Msg_ChallengeCountResetReq implements IMsg_ChallengeCountResetReq {

        /**
         * Constructs a new Msg_ChallengeCountResetReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeCountResetReq);

        /** Msg_ChallengeCountResetReq resetType. */
        public resetType: proto.Msg_ChallengeCountResetReq.ResetType;

        /**
         * Encodes the specified Msg_ChallengeCountResetReq message. Does not implicitly {@link proto.Msg_ChallengeCountResetReq.verify|verify} messages.
         * @param m Msg_ChallengeCountResetReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeCountResetReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeCountResetReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeCountResetReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeCountResetReq;
    }

    namespace Msg_ChallengeCountResetReq {

        /** ResetType enum. */
        enum ResetType {
            None = 0,
            CostGold = 1,
            EvilFree = 2,
            AVD = 3
        }
    }

    /** Properties of a Msg_ChallengeCountResetRsp. */
    interface IMsg_ChallengeCountResetRsp {

        /** Msg_ChallengeCountResetRsp result */
        result?: (proto.CommonErrorCode|null);
    }

    /** Represents a Msg_ChallengeCountResetRsp. */
    class Msg_ChallengeCountResetRsp implements IMsg_ChallengeCountResetRsp {

        /**
         * Constructs a new Msg_ChallengeCountResetRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeCountResetRsp);

        /** Msg_ChallengeCountResetRsp result. */
        public result: proto.CommonErrorCode;

        /**
         * Encodes the specified Msg_ChallengeCountResetRsp message. Does not implicitly {@link proto.Msg_ChallengeCountResetRsp.verify|verify} messages.
         * @param m Msg_ChallengeCountResetRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeCountResetRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeCountResetRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeCountResetRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeCountResetRsp;
    }

    /** Properties of a Msg_ChallengeDoRewardReq. */
    interface IMsg_ChallengeDoRewardReq {

        /** Msg_ChallengeDoRewardReq awardPosition */
        awardPosition?: (number|null);
    }

    /** Represents a Msg_ChallengeDoRewardReq. */
    class Msg_ChallengeDoRewardReq implements IMsg_ChallengeDoRewardReq {

        /**
         * Constructs a new Msg_ChallengeDoRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeDoRewardReq);

        /** Msg_ChallengeDoRewardReq awardPosition. */
        public awardPosition: number;

        /**
         * Encodes the specified Msg_ChallengeDoRewardReq message. Does not implicitly {@link proto.Msg_ChallengeDoRewardReq.verify|verify} messages.
         * @param m Msg_ChallengeDoRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeDoRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeDoRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeDoRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeDoRewardReq;
    }

    /** Properties of a Msg_ChallengeDoRewardRsp. */
    interface IMsg_ChallengeDoRewardRsp {

        /** Msg_ChallengeDoRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_ChallengeDoRewardRsp awardPosition */
        awardPosition?: (number|null);

        /** Msg_ChallengeDoRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ChallengeDoRewardRsp. */
    class Msg_ChallengeDoRewardRsp implements IMsg_ChallengeDoRewardRsp {

        /**
         * Constructs a new Msg_ChallengeDoRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChallengeDoRewardRsp);

        /** Msg_ChallengeDoRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_ChallengeDoRewardRsp awardPosition. */
        public awardPosition: number;

        /** Msg_ChallengeDoRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ChallengeDoRewardRsp message. Does not implicitly {@link proto.Msg_ChallengeDoRewardRsp.verify|verify} messages.
         * @param m Msg_ChallengeDoRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChallengeDoRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChallengeDoRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChallengeDoRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChallengeDoRewardRsp;
    }

    /** Properties of a RankingBaseRoleData. */
    interface IRankingBaseRoleData {

        /** RankingBaseRoleData roleUUID */
        roleUUID?: (string|null);

        /** RankingBaseRoleData roleName */
        roleName?: (string|null);

        /** RankingBaseRoleData headID */
        headID?: (number|null);

        /** RankingBaseRoleData allianceIconIdx */
        allianceIconIdx?: (number|null);

        /** RankingBaseRoleData allianceName */
        allianceName?: (string|null);

        /** RankingBaseRoleData pvpCardInfo */
        pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** RankingBaseRoleData headUrl */
        headUrl?: (string|null);
    }

    /** Represents a RankingBaseRoleData. */
    class RankingBaseRoleData implements IRankingBaseRoleData {

        /**
         * Constructs a new RankingBaseRoleData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankingBaseRoleData);

        /** RankingBaseRoleData roleUUID. */
        public roleUUID: string;

        /** RankingBaseRoleData roleName. */
        public roleName: string;

        /** RankingBaseRoleData headID. */
        public headID: number;

        /** RankingBaseRoleData allianceIconIdx. */
        public allianceIconIdx: number;

        /** RankingBaseRoleData allianceName. */
        public allianceName: string;

        /** RankingBaseRoleData pvpCardInfo. */
        public pvpCardInfo?: (proto.IPlayerPvpCardInfo|null);

        /** RankingBaseRoleData headUrl. */
        public headUrl: string;

        /**
         * Encodes the specified RankingBaseRoleData message. Does not implicitly {@link proto.RankingBaseRoleData.verify|verify} messages.
         * @param m RankingBaseRoleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankingBaseRoleData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankingBaseRoleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankingBaseRoleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankingBaseRoleData;
    }

    /** Properties of a RankingOfRoleData. */
    interface IRankingOfRoleData {

        /** RankingOfRoleData roleData */
        roleData?: (proto.IRankingBaseRoleData|null);

        /** RankingOfRoleData seasonScore */
        seasonScore?: (number|null);

        /** RankingOfRoleData timestamp */
        timestamp?: (number|null);
    }

    /** Represents a RankingOfRoleData. */
    class RankingOfRoleData implements IRankingOfRoleData {

        /**
         * Constructs a new RankingOfRoleData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankingOfRoleData);

        /** RankingOfRoleData roleData. */
        public roleData?: (proto.IRankingBaseRoleData|null);

        /** RankingOfRoleData seasonScore. */
        public seasonScore: number;

        /** RankingOfRoleData timestamp. */
        public timestamp: number;

        /**
         * Encodes the specified RankingOfRoleData message. Does not implicitly {@link proto.RankingOfRoleData.verify|verify} messages.
         * @param m RankingOfRoleData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankingOfRoleData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankingOfRoleData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankingOfRoleData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankingOfRoleData;
    }

    /** Properties of a Msg_GetPvpRankingListReq. */
    interface IMsg_GetPvpRankingListReq {
    }

    /** Represents a Msg_GetPvpRankingListReq. */
    class Msg_GetPvpRankingListReq implements IMsg_GetPvpRankingListReq {

        /**
         * Constructs a new Msg_GetPvpRankingListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPvpRankingListReq);

        /**
         * Encodes the specified Msg_GetPvpRankingListReq message. Does not implicitly {@link proto.Msg_GetPvpRankingListReq.verify|verify} messages.
         * @param m Msg_GetPvpRankingListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPvpRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPvpRankingListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPvpRankingListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPvpRankingListReq;
    }

    /** Properties of a Msg_GetPvpRankingListRsp. */
    interface IMsg_GetPvpRankingListRsp {

        /** Msg_GetPvpRankingListRsp roleRankingData */
        roleRankingData?: (proto.IRankingOfRoleData[]|null);

        /** Msg_GetPvpRankingListRsp preTop3RankingList */
        preTop3RankingList?: (proto.IRankingOfRoleData[]|null);

        /** Msg_GetPvpRankingListRsp selfRankingLv */
        selfRankingLv?: (number|null);
    }

    /** Represents a Msg_GetPvpRankingListRsp. */
    class Msg_GetPvpRankingListRsp implements IMsg_GetPvpRankingListRsp {

        /**
         * Constructs a new Msg_GetPvpRankingListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPvpRankingListRsp);

        /** Msg_GetPvpRankingListRsp roleRankingData. */
        public roleRankingData: proto.IRankingOfRoleData[];

        /** Msg_GetPvpRankingListRsp preTop3RankingList. */
        public preTop3RankingList: proto.IRankingOfRoleData[];

        /** Msg_GetPvpRankingListRsp selfRankingLv. */
        public selfRankingLv: number;

        /**
         * Encodes the specified Msg_GetPvpRankingListRsp message. Does not implicitly {@link proto.Msg_GetPvpRankingListRsp.verify|verify} messages.
         * @param m Msg_GetPvpRankingListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPvpRankingListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPvpRankingListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPvpRankingListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPvpRankingListRsp;
    }

    /** Properties of a CooperationRankingBaseData. */
    interface ICooperationRankingBaseData {

        /** CooperationRankingBaseData roleData */
        roleData?: (proto.IRankingBaseRoleData|null);

        /** CooperationRankingBaseData cardLists */
        cardLists?: (proto.IFightCardData[]|null);
    }

    /** Represents a CooperationRankingBaseData. */
    class CooperationRankingBaseData implements ICooperationRankingBaseData {

        /**
         * Constructs a new CooperationRankingBaseData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICooperationRankingBaseData);

        /** CooperationRankingBaseData roleData. */
        public roleData?: (proto.IRankingBaseRoleData|null);

        /** CooperationRankingBaseData cardLists. */
        public cardLists: proto.IFightCardData[];

        /**
         * Encodes the specified CooperationRankingBaseData message. Does not implicitly {@link proto.CooperationRankingBaseData.verify|verify} messages.
         * @param m CooperationRankingBaseData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICooperationRankingBaseData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CooperationRankingBaseData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CooperationRankingBaseData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CooperationRankingBaseData;
    }

    /** Properties of a CooperationBothRankingData. */
    interface ICooperationBothRankingData {

        /** CooperationBothRankingData leftPlayerData */
        leftPlayerData?: (proto.ICooperationRankingBaseData|null);

        /** CooperationBothRankingData rightPlayerData */
        rightPlayerData?: (proto.ICooperationRankingBaseData|null);

        /** CooperationBothRankingData maxRoundCount */
        maxRoundCount?: (number|null);

        /** CooperationBothRankingData timestamp */
        timestamp?: (number|null);
    }

    /** Represents a CooperationBothRankingData. */
    class CooperationBothRankingData implements ICooperationBothRankingData {

        /**
         * Constructs a new CooperationBothRankingData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICooperationBothRankingData);

        /** CooperationBothRankingData leftPlayerData. */
        public leftPlayerData?: (proto.ICooperationRankingBaseData|null);

        /** CooperationBothRankingData rightPlayerData. */
        public rightPlayerData?: (proto.ICooperationRankingBaseData|null);

        /** CooperationBothRankingData maxRoundCount. */
        public maxRoundCount: number;

        /** CooperationBothRankingData timestamp. */
        public timestamp: number;

        /**
         * Encodes the specified CooperationBothRankingData message. Does not implicitly {@link proto.CooperationBothRankingData.verify|verify} messages.
         * @param m CooperationBothRankingData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICooperationBothRankingData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CooperationBothRankingData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CooperationBothRankingData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CooperationBothRankingData;
    }

    /** Properties of a Msg_GetCooperationRankingListReq. */
    interface IMsg_GetCooperationRankingListReq {
    }

    /** Represents a Msg_GetCooperationRankingListReq. */
    class Msg_GetCooperationRankingListReq implements IMsg_GetCooperationRankingListReq {

        /**
         * Constructs a new Msg_GetCooperationRankingListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCooperationRankingListReq);

        /**
         * Encodes the specified Msg_GetCooperationRankingListReq message. Does not implicitly {@link proto.Msg_GetCooperationRankingListReq.verify|verify} messages.
         * @param m Msg_GetCooperationRankingListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCooperationRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCooperationRankingListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCooperationRankingListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCooperationRankingListReq;
    }

    /** Properties of a Msg_GetCooperationRankingListRsp. */
    interface IMsg_GetCooperationRankingListRsp {

        /** Msg_GetCooperationRankingListRsp rankingList */
        rankingList?: (proto.ICooperationBothRankingData[]|null);

        /** Msg_GetCooperationRankingListRsp selfData */
        selfData?: (proto.ICooperationBothRankingData|null);

        /** Msg_GetCooperationRankingListRsp selfRankLv */
        selfRankLv?: (number|null);
    }

    /** Represents a Msg_GetCooperationRankingListRsp. */
    class Msg_GetCooperationRankingListRsp implements IMsg_GetCooperationRankingListRsp {

        /**
         * Constructs a new Msg_GetCooperationRankingListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCooperationRankingListRsp);

        /** Msg_GetCooperationRankingListRsp rankingList. */
        public rankingList: proto.ICooperationBothRankingData[];

        /** Msg_GetCooperationRankingListRsp selfData. */
        public selfData?: (proto.ICooperationBothRankingData|null);

        /** Msg_GetCooperationRankingListRsp selfRankLv. */
        public selfRankLv: number;

        /**
         * Encodes the specified Msg_GetCooperationRankingListRsp message. Does not implicitly {@link proto.Msg_GetCooperationRankingListRsp.verify|verify} messages.
         * @param m Msg_GetCooperationRankingListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCooperationRankingListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCooperationRankingListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCooperationRankingListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCooperationRankingListRsp;
    }

    /** Properties of a RankingOfAllianceData. */
    interface IRankingOfAllianceData {

        /** RankingOfAllianceData rankData */
        rankData?: (proto.IAllianceSimpleInfo|null);
    }

    /** Represents a RankingOfAllianceData. */
    class RankingOfAllianceData implements IRankingOfAllianceData {

        /**
         * Constructs a new RankingOfAllianceData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRankingOfAllianceData);

        /** RankingOfAllianceData rankData. */
        public rankData?: (proto.IAllianceSimpleInfo|null);

        /**
         * Encodes the specified RankingOfAllianceData message. Does not implicitly {@link proto.RankingOfAllianceData.verify|verify} messages.
         * @param m RankingOfAllianceData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRankingOfAllianceData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RankingOfAllianceData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RankingOfAllianceData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RankingOfAllianceData;
    }

    /** Properties of a Msg_GetAllianceRankingListReq. */
    interface IMsg_GetAllianceRankingListReq {
    }

    /** Represents a Msg_GetAllianceRankingListReq. */
    class Msg_GetAllianceRankingListReq implements IMsg_GetAllianceRankingListReq {

        /**
         * Constructs a new Msg_GetAllianceRankingListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAllianceRankingListReq);

        /**
         * Encodes the specified Msg_GetAllianceRankingListReq message. Does not implicitly {@link proto.Msg_GetAllianceRankingListReq.verify|verify} messages.
         * @param m Msg_GetAllianceRankingListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAllianceRankingListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAllianceRankingListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAllianceRankingListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAllianceRankingListReq;
    }

    /** Properties of a Msg_GetAllianceRankingListRsp. */
    interface IMsg_GetAllianceRankingListRsp {

        /** Msg_GetAllianceRankingListRsp rankingList */
        rankingList?: (proto.IRankingOfAllianceData[]|null);
    }

    /** Represents a Msg_GetAllianceRankingListRsp. */
    class Msg_GetAllianceRankingListRsp implements IMsg_GetAllianceRankingListRsp {

        /**
         * Constructs a new Msg_GetAllianceRankingListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAllianceRankingListRsp);

        /** Msg_GetAllianceRankingListRsp rankingList. */
        public rankingList: proto.IRankingOfAllianceData[];

        /**
         * Encodes the specified Msg_GetAllianceRankingListRsp message. Does not implicitly {@link proto.Msg_GetAllianceRankingListRsp.verify|verify} messages.
         * @param m Msg_GetAllianceRankingListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAllianceRankingListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAllianceRankingListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAllianceRankingListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAllianceRankingListRsp;
    }

    /** Properties of a Msg_ExchangeCodeReq. */
    interface IMsg_ExchangeCodeReq {

        /** Msg_ExchangeCodeReq code */
        code?: (string|null);
    }

    /** Represents a Msg_ExchangeCodeReq. */
    class Msg_ExchangeCodeReq implements IMsg_ExchangeCodeReq {

        /**
         * Constructs a new Msg_ExchangeCodeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ExchangeCodeReq);

        /** Msg_ExchangeCodeReq code. */
        public code: string;

        /**
         * Encodes the specified Msg_ExchangeCodeReq message. Does not implicitly {@link proto.Msg_ExchangeCodeReq.verify|verify} messages.
         * @param m Msg_ExchangeCodeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ExchangeCodeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ExchangeCodeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ExchangeCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ExchangeCodeReq;
    }

    /** Properties of a Msg_ExchangeCodeRsp. */
    interface IMsg_ExchangeCodeRsp {

        /** Msg_ExchangeCodeRsp result */
        result?: (proto.Msg_ExchangeCodeRsp.ErrorCode|null);

        /** Msg_ExchangeCodeRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ExchangeCodeRsp. */
    class Msg_ExchangeCodeRsp implements IMsg_ExchangeCodeRsp {

        /**
         * Constructs a new Msg_ExchangeCodeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ExchangeCodeRsp);

        /** Msg_ExchangeCodeRsp result. */
        public result: proto.Msg_ExchangeCodeRsp.ErrorCode;

        /** Msg_ExchangeCodeRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ExchangeCodeRsp message. Does not implicitly {@link proto.Msg_ExchangeCodeRsp.verify|verify} messages.
         * @param m Msg_ExchangeCodeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ExchangeCodeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ExchangeCodeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ExchangeCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ExchangeCodeRsp;
    }

    namespace Msg_ExchangeCodeRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Invalid = 1,
            AlreadyExchange = 2
        }
    }

    /** MailType enum. */
    enum MailType {
        MailType_GM = 0,
        MailType_Alliance = 1
    }

    /** MailState enum. */
    enum MailState {
        MailState_AlreadyRead = 0,
        MailState_UnRead = 1,
        MailState_AlreadyReceive = 2,
        MailState_UnReceive = 3
    }

    /** Properties of a MailInfoData. */
    interface IMailInfoData {

        /** MailInfoData type */
        type?: (proto.MailType|null);

        /** MailInfoData mailID */
        mailID?: (string|null);

        /** MailInfoData mailTimestamp */
        mailTimestamp?: (number|null);

        /** MailInfoData iconID */
        iconID?: (number|null);

        /** MailInfoData mailTitle */
        mailTitle?: (string|null);

        /** MailInfoData mailContent */
        mailContent?: (string|null);

        /** MailInfoData senderName */
        senderName?: (string|null);

        /** MailInfoData mailState */
        mailState?: (proto.MailState|null);

        /** MailInfoData rewardValidTime */
        rewardValidTime?: (number|null);

        /** MailInfoData reward */
        reward?: (proto.IRewardSimpleInfo|null);
    }

    /** Represents a MailInfoData. */
    class MailInfoData implements IMailInfoData {

        /**
         * Constructs a new MailInfoData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMailInfoData);

        /** MailInfoData type. */
        public type: proto.MailType;

        /** MailInfoData mailID. */
        public mailID: string;

        /** MailInfoData mailTimestamp. */
        public mailTimestamp: number;

        /** MailInfoData iconID. */
        public iconID: number;

        /** MailInfoData mailTitle. */
        public mailTitle: string;

        /** MailInfoData mailContent. */
        public mailContent: string;

        /** MailInfoData senderName. */
        public senderName: string;

        /** MailInfoData mailState. */
        public mailState: proto.MailState;

        /** MailInfoData rewardValidTime. */
        public rewardValidTime: number;

        /** MailInfoData reward. */
        public reward?: (proto.IRewardSimpleInfo|null);

        /**
         * Encodes the specified MailInfoData message. Does not implicitly {@link proto.MailInfoData.verify|verify} messages.
         * @param m MailInfoData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMailInfoData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MailInfoData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MailInfoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MailInfoData;
    }

    /** Properties of a Msg_GetMailInfoListReq. */
    interface IMsg_GetMailInfoListReq {
    }

    /** Represents a Msg_GetMailInfoListReq. */
    class Msg_GetMailInfoListReq implements IMsg_GetMailInfoListReq {

        /**
         * Constructs a new Msg_GetMailInfoListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMailInfoListReq);

        /**
         * Encodes the specified Msg_GetMailInfoListReq message. Does not implicitly {@link proto.Msg_GetMailInfoListReq.verify|verify} messages.
         * @param m Msg_GetMailInfoListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMailInfoListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMailInfoListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMailInfoListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMailInfoListReq;
    }

    /** Properties of a Msg_GetMailInfoListRsp. */
    interface IMsg_GetMailInfoListRsp {

        /** Msg_GetMailInfoListRsp mailInfoList */
        mailInfoList?: (proto.IMailInfoData[]|null);
    }

    /** Represents a Msg_GetMailInfoListRsp. */
    class Msg_GetMailInfoListRsp implements IMsg_GetMailInfoListRsp {

        /**
         * Constructs a new Msg_GetMailInfoListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMailInfoListRsp);

        /** Msg_GetMailInfoListRsp mailInfoList. */
        public mailInfoList: proto.IMailInfoData[];

        /**
         * Encodes the specified Msg_GetMailInfoListRsp message. Does not implicitly {@link proto.Msg_GetMailInfoListRsp.verify|verify} messages.
         * @param m Msg_GetMailInfoListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMailInfoListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMailInfoListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMailInfoListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMailInfoListRsp;
    }

    /** Properties of a Msg_ReceiveMailRewardReq. */
    interface IMsg_ReceiveMailRewardReq {

        /** Msg_ReceiveMailRewardReq mailID */
        mailID?: (string|null);
    }

    /** Represents a Msg_ReceiveMailRewardReq. */
    class Msg_ReceiveMailRewardReq implements IMsg_ReceiveMailRewardReq {

        /**
         * Constructs a new Msg_ReceiveMailRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMailRewardReq);

        /** Msg_ReceiveMailRewardReq mailID. */
        public mailID: string;

        /**
         * Encodes the specified Msg_ReceiveMailRewardReq message. Does not implicitly {@link proto.Msg_ReceiveMailRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveMailRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMailRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMailRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMailRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMailRewardReq;
    }

    /** Properties of a Msg_ReceiveMailRewardRsp. */
    interface IMsg_ReceiveMailRewardRsp {

        /** Msg_ReceiveMailRewardRsp result */
        result?: (proto.Msg_ReceiveMailRewardRsp.ErrorCode|null);

        /** Msg_ReceiveMailRewardRsp mailID */
        mailID?: (string|null);

        /** Msg_ReceiveMailRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveMailRewardRsp. */
    class Msg_ReceiveMailRewardRsp implements IMsg_ReceiveMailRewardRsp {

        /**
         * Constructs a new Msg_ReceiveMailRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMailRewardRsp);

        /** Msg_ReceiveMailRewardRsp result. */
        public result: proto.Msg_ReceiveMailRewardRsp.ErrorCode;

        /** Msg_ReceiveMailRewardRsp mailID. */
        public mailID: string;

        /** Msg_ReceiveMailRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveMailRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveMailRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveMailRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMailRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMailRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMailRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMailRewardRsp;
    }

    namespace Msg_ReceiveMailRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            PastDue = 1,
            AlreadyReceive = 2,
            Inexistence = 3
        }
    }

    /** Properties of a Msg_ReadMailReq. */
    interface IMsg_ReadMailReq {

        /** Msg_ReadMailReq mailID */
        mailID?: (string|null);
    }

    /** Represents a Msg_ReadMailReq. */
    class Msg_ReadMailReq implements IMsg_ReadMailReq {

        /**
         * Constructs a new Msg_ReadMailReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReadMailReq);

        /** Msg_ReadMailReq mailID. */
        public mailID: string;

        /**
         * Encodes the specified Msg_ReadMailReq message. Does not implicitly {@link proto.Msg_ReadMailReq.verify|verify} messages.
         * @param m Msg_ReadMailReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReadMailReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReadMailReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReadMailReq;
    }

    /** Properties of a Msg_RemoveReadMailReq. */
    interface IMsg_RemoveReadMailReq {
    }

    /** Represents a Msg_RemoveReadMailReq. */
    class Msg_RemoveReadMailReq implements IMsg_RemoveReadMailReq {

        /**
         * Constructs a new Msg_RemoveReadMailReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveReadMailReq);

        /**
         * Encodes the specified Msg_RemoveReadMailReq message. Does not implicitly {@link proto.Msg_RemoveReadMailReq.verify|verify} messages.
         * @param m Msg_RemoveReadMailReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveReadMailReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveReadMailReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveReadMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveReadMailReq;
    }

    /** Properties of a Msg_RemoveReadMailRsp. */
    interface IMsg_RemoveReadMailRsp {

        /** Msg_RemoveReadMailRsp mailIDList */
        mailIDList?: (string[]|null);
    }

    /** Represents a Msg_RemoveReadMailRsp. */
    class Msg_RemoveReadMailRsp implements IMsg_RemoveReadMailRsp {

        /**
         * Constructs a new Msg_RemoveReadMailRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveReadMailRsp);

        /** Msg_RemoveReadMailRsp mailIDList. */
        public mailIDList: string[];

        /**
         * Encodes the specified Msg_RemoveReadMailRsp message. Does not implicitly {@link proto.Msg_RemoveReadMailRsp.verify|verify} messages.
         * @param m Msg_RemoveReadMailRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveReadMailRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveReadMailRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveReadMailRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveReadMailRsp;
    }

    /** Properties of a Msg_PushNewMailTip. */
    interface IMsg_PushNewMailTip {

        /** Msg_PushNewMailTip bNewMail */
        bNewMail?: (boolean|null);
    }

    /** Represents a Msg_PushNewMailTip. */
    class Msg_PushNewMailTip implements IMsg_PushNewMailTip {

        /**
         * Constructs a new Msg_PushNewMailTip.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushNewMailTip);

        /** Msg_PushNewMailTip bNewMail. */
        public bNewMail: boolean;

        /**
         * Encodes the specified Msg_PushNewMailTip message. Does not implicitly {@link proto.Msg_PushNewMailTip.verify|verify} messages.
         * @param m Msg_PushNewMailTip message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushNewMailTip, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushNewMailTip message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushNewMailTip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushNewMailTip;
    }

    /** Properties of a Msg_WriteAllianceMailReq. */
    interface IMsg_WriteAllianceMailReq {

        /** Msg_WriteAllianceMailReq title */
        title?: (string|null);

        /** Msg_WriteAllianceMailReq content */
        content?: (string|null);
    }

    /** Represents a Msg_WriteAllianceMailReq. */
    class Msg_WriteAllianceMailReq implements IMsg_WriteAllianceMailReq {

        /**
         * Constructs a new Msg_WriteAllianceMailReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WriteAllianceMailReq);

        /** Msg_WriteAllianceMailReq title. */
        public title: string;

        /** Msg_WriteAllianceMailReq content. */
        public content: string;

        /**
         * Encodes the specified Msg_WriteAllianceMailReq message. Does not implicitly {@link proto.Msg_WriteAllianceMailReq.verify|verify} messages.
         * @param m Msg_WriteAllianceMailReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WriteAllianceMailReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WriteAllianceMailReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WriteAllianceMailReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WriteAllianceMailReq;
    }

    /** Properties of a Msg_WriteAllianceMailRsp. */
    interface IMsg_WriteAllianceMailRsp {

        /** Msg_WriteAllianceMailRsp result */
        result?: (proto.Msg_WriteAllianceMailRsp.ErrorCode|null);
    }

    /** Represents a Msg_WriteAllianceMailRsp. */
    class Msg_WriteAllianceMailRsp implements IMsg_WriteAllianceMailRsp {

        /**
         * Constructs a new Msg_WriteAllianceMailRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WriteAllianceMailRsp);

        /** Msg_WriteAllianceMailRsp result. */
        public result: proto.Msg_WriteAllianceMailRsp.ErrorCode;

        /**
         * Encodes the specified Msg_WriteAllianceMailRsp message. Does not implicitly {@link proto.Msg_WriteAllianceMailRsp.verify|verify} messages.
         * @param m Msg_WriteAllianceMailRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WriteAllianceMailRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WriteAllianceMailRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WriteAllianceMailRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WriteAllianceMailRsp;
    }

    namespace Msg_WriteAllianceMailRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            SensitiveWordError = 1,
            TitleEmpty = 2,
            ContentEmpty = 3
        }
    }

    /** Properties of a FriendBaseInfo. */
    interface IFriendBaseInfo {

        /** FriendBaseInfo roleID */
        roleID?: (string|null);

        /** FriendBaseInfo roleName */
        roleName?: (string|null);

        /** FriendBaseInfo headID */
        headID?: (number|null);

        /** FriendBaseInfo allianceIconIdx */
        allianceIconIdx?: (number|null);

        /** FriendBaseInfo allianceName */
        allianceName?: (string|null);

        /** FriendBaseInfo seasonScore */
        seasonScore?: (number|null);
    }

    /** Represents a FriendBaseInfo. */
    class FriendBaseInfo implements IFriendBaseInfo {

        /**
         * Constructs a new FriendBaseInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFriendBaseInfo);

        /** FriendBaseInfo roleID. */
        public roleID: string;

        /** FriendBaseInfo roleName. */
        public roleName: string;

        /** FriendBaseInfo headID. */
        public headID: number;

        /** FriendBaseInfo allianceIconIdx. */
        public allianceIconIdx: number;

        /** FriendBaseInfo allianceName. */
        public allianceName: string;

        /** FriendBaseInfo seasonScore. */
        public seasonScore: number;

        /**
         * Encodes the specified FriendBaseInfo message. Does not implicitly {@link proto.FriendBaseInfo.verify|verify} messages.
         * @param m FriendBaseInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFriendBaseInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendBaseInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendBaseInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FriendBaseInfo;
    }

    /** Properties of a FriendInfoData. */
    interface IFriendInfoData {

        /** FriendInfoData baseInfo */
        baseInfo?: (proto.IFriendBaseInfo|null);

        /** FriendInfoData bOnline */
        bOnline?: (boolean|null);
    }

    /** Represents a FriendInfoData. */
    class FriendInfoData implements IFriendInfoData {

        /**
         * Constructs a new FriendInfoData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFriendInfoData);

        /** FriendInfoData baseInfo. */
        public baseInfo?: (proto.IFriendBaseInfo|null);

        /** FriendInfoData bOnline. */
        public bOnline: boolean;

        /**
         * Encodes the specified FriendInfoData message. Does not implicitly {@link proto.FriendInfoData.verify|verify} messages.
         * @param m FriendInfoData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFriendInfoData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendInfoData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendInfoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FriendInfoData;
    }

    /** Properties of a FriendApplyData. */
    interface IFriendApplyData {

        /** FriendApplyData baseInfo */
        baseInfo?: (proto.IFriendBaseInfo|null);

        /** FriendApplyData applyTime */
        applyTime?: (number|null);
    }

    /** Represents a FriendApplyData. */
    class FriendApplyData implements IFriendApplyData {

        /**
         * Constructs a new FriendApplyData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFriendApplyData);

        /** FriendApplyData baseInfo. */
        public baseInfo?: (proto.IFriendBaseInfo|null);

        /** FriendApplyData applyTime. */
        public applyTime: number;

        /**
         * Encodes the specified FriendApplyData message. Does not implicitly {@link proto.FriendApplyData.verify|verify} messages.
         * @param m FriendApplyData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFriendApplyData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendApplyData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendApplyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FriendApplyData;
    }

    /** Properties of a FriendFightInvitationData. */
    interface IFriendFightInvitationData {

        /** FriendFightInvitationData type */
        type?: (proto.FightType|null);

        /** FriendFightInvitationData roomID */
        roomID?: (number|null);

        /** FriendFightInvitationData message */
        message?: (string|null);

        /** FriendFightInvitationData roleID */
        roleID?: (string|null);

        /** FriendFightInvitationData roleName */
        roleName?: (string|null);

        /** FriendFightInvitationData headID */
        headID?: (number|null);

        /** FriendFightInvitationData invitationTime */
        invitationTime?: (number|null);
    }

    /** Represents a FriendFightInvitationData. */
    class FriendFightInvitationData implements IFriendFightInvitationData {

        /**
         * Constructs a new FriendFightInvitationData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFriendFightInvitationData);

        /** FriendFightInvitationData type. */
        public type: proto.FightType;

        /** FriendFightInvitationData roomID. */
        public roomID: number;

        /** FriendFightInvitationData message. */
        public message: string;

        /** FriendFightInvitationData roleID. */
        public roleID: string;

        /** FriendFightInvitationData roleName. */
        public roleName: string;

        /** FriendFightInvitationData headID. */
        public headID: number;

        /** FriendFightInvitationData invitationTime. */
        public invitationTime: number;

        /**
         * Encodes the specified FriendFightInvitationData message. Does not implicitly {@link proto.FriendFightInvitationData.verify|verify} messages.
         * @param m FriendFightInvitationData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFriendFightInvitationData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendFightInvitationData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendFightInvitationData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FriendFightInvitationData;
    }

    /** Properties of a Msg_GetFriendInfoListReq. */
    interface IMsg_GetFriendInfoListReq {
    }

    /** Represents a Msg_GetFriendInfoListReq. */
    class Msg_GetFriendInfoListReq implements IMsg_GetFriendInfoListReq {

        /**
         * Constructs a new Msg_GetFriendInfoListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendInfoListReq);

        /**
         * Encodes the specified Msg_GetFriendInfoListReq message. Does not implicitly {@link proto.Msg_GetFriendInfoListReq.verify|verify} messages.
         * @param m Msg_GetFriendInfoListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendInfoListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendInfoListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendInfoListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendInfoListReq;
    }

    /** Properties of a Msg_GetFriendInfoListRsp. */
    interface IMsg_GetFriendInfoListRsp {

        /** Msg_GetFriendInfoListRsp friendList */
        friendList?: (proto.IFriendInfoData[]|null);
    }

    /** Represents a Msg_GetFriendInfoListRsp. */
    class Msg_GetFriendInfoListRsp implements IMsg_GetFriendInfoListRsp {

        /**
         * Constructs a new Msg_GetFriendInfoListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendInfoListRsp);

        /** Msg_GetFriendInfoListRsp friendList. */
        public friendList: proto.IFriendInfoData[];

        /**
         * Encodes the specified Msg_GetFriendInfoListRsp message. Does not implicitly {@link proto.Msg_GetFriendInfoListRsp.verify|verify} messages.
         * @param m Msg_GetFriendInfoListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendInfoListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendInfoListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendInfoListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendInfoListRsp;
    }

    /** Properties of a FriendOnlineState. */
    interface IFriendOnlineState {

        /** FriendOnlineState roleID */
        roleID?: (string|null);

        /** FriendOnlineState bOnline */
        bOnline?: (boolean|null);
    }

    /** Represents a FriendOnlineState. */
    class FriendOnlineState implements IFriendOnlineState {

        /**
         * Constructs a new FriendOnlineState.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFriendOnlineState);

        /** FriendOnlineState roleID. */
        public roleID: string;

        /** FriendOnlineState bOnline. */
        public bOnline: boolean;

        /**
         * Encodes the specified FriendOnlineState message. Does not implicitly {@link proto.FriendOnlineState.verify|verify} messages.
         * @param m FriendOnlineState message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFriendOnlineState, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FriendOnlineState message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FriendOnlineState
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FriendOnlineState;
    }

    /** Properties of a Msg_GetFriendOnlineStateListReq. */
    interface IMsg_GetFriendOnlineStateListReq {
    }

    /** Represents a Msg_GetFriendOnlineStateListReq. */
    class Msg_GetFriendOnlineStateListReq implements IMsg_GetFriendOnlineStateListReq {

        /**
         * Constructs a new Msg_GetFriendOnlineStateListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendOnlineStateListReq);

        /**
         * Encodes the specified Msg_GetFriendOnlineStateListReq message. Does not implicitly {@link proto.Msg_GetFriendOnlineStateListReq.verify|verify} messages.
         * @param m Msg_GetFriendOnlineStateListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendOnlineStateListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendOnlineStateListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendOnlineStateListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendOnlineStateListReq;
    }

    /** Properties of a Msg_GetFriendOnlineStateListRsp. */
    interface IMsg_GetFriendOnlineStateListRsp {

        /** Msg_GetFriendOnlineStateListRsp friendList */
        friendList?: (proto.IFriendOnlineState[]|null);
    }

    /** Represents a Msg_GetFriendOnlineStateListRsp. */
    class Msg_GetFriendOnlineStateListRsp implements IMsg_GetFriendOnlineStateListRsp {

        /**
         * Constructs a new Msg_GetFriendOnlineStateListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendOnlineStateListRsp);

        /** Msg_GetFriendOnlineStateListRsp friendList. */
        public friendList: proto.IFriendOnlineState[];

        /**
         * Encodes the specified Msg_GetFriendOnlineStateListRsp message. Does not implicitly {@link proto.Msg_GetFriendOnlineStateListRsp.verify|verify} messages.
         * @param m Msg_GetFriendOnlineStateListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendOnlineStateListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendOnlineStateListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendOnlineStateListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendOnlineStateListRsp;
    }

    /** Properties of a Msg_GetFriendApplyListReq. */
    interface IMsg_GetFriendApplyListReq {
    }

    /** Represents a Msg_GetFriendApplyListReq. */
    class Msg_GetFriendApplyListReq implements IMsg_GetFriendApplyListReq {

        /**
         * Constructs a new Msg_GetFriendApplyListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendApplyListReq);

        /**
         * Encodes the specified Msg_GetFriendApplyListReq message. Does not implicitly {@link proto.Msg_GetFriendApplyListReq.verify|verify} messages.
         * @param m Msg_GetFriendApplyListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendApplyListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendApplyListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendApplyListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendApplyListReq;
    }

    /** Properties of a Msg_GetFriendApplyListRsp. */
    interface IMsg_GetFriendApplyListRsp {

        /** Msg_GetFriendApplyListRsp friendApplyList */
        friendApplyList?: (proto.IFriendApplyData[]|null);
    }

    /** Represents a Msg_GetFriendApplyListRsp. */
    class Msg_GetFriendApplyListRsp implements IMsg_GetFriendApplyListRsp {

        /**
         * Constructs a new Msg_GetFriendApplyListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendApplyListRsp);

        /** Msg_GetFriendApplyListRsp friendApplyList. */
        public friendApplyList: proto.IFriendApplyData[];

        /**
         * Encodes the specified Msg_GetFriendApplyListRsp message. Does not implicitly {@link proto.Msg_GetFriendApplyListRsp.verify|verify} messages.
         * @param m Msg_GetFriendApplyListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendApplyListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendApplyListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendApplyListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendApplyListRsp;
    }

    /** Properties of a Msg_PushNewFriendApplyInfo. */
    interface IMsg_PushNewFriendApplyInfo {

        /** Msg_PushNewFriendApplyInfo bNewFriendApply */
        bNewFriendApply?: (boolean|null);
    }

    /** Represents a Msg_PushNewFriendApplyInfo. */
    class Msg_PushNewFriendApplyInfo implements IMsg_PushNewFriendApplyInfo {

        /**
         * Constructs a new Msg_PushNewFriendApplyInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushNewFriendApplyInfo);

        /** Msg_PushNewFriendApplyInfo bNewFriendApply. */
        public bNewFriendApply: boolean;

        /**
         * Encodes the specified Msg_PushNewFriendApplyInfo message. Does not implicitly {@link proto.Msg_PushNewFriendApplyInfo.verify|verify} messages.
         * @param m Msg_PushNewFriendApplyInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushNewFriendApplyInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushNewFriendApplyInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushNewFriendApplyInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushNewFriendApplyInfo;
    }

    /** Properties of a Msg_OperatorFriendApplyReq. */
    interface IMsg_OperatorFriendApplyReq {

        /** Msg_OperatorFriendApplyReq roleID */
        roleID?: (string|null);

        /** Msg_OperatorFriendApplyReq bAgree */
        bAgree?: (boolean|null);
    }

    /** Represents a Msg_OperatorFriendApplyReq. */
    class Msg_OperatorFriendApplyReq implements IMsg_OperatorFriendApplyReq {

        /**
         * Constructs a new Msg_OperatorFriendApplyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OperatorFriendApplyReq);

        /** Msg_OperatorFriendApplyReq roleID. */
        public roleID: string;

        /** Msg_OperatorFriendApplyReq bAgree. */
        public bAgree: boolean;

        /**
         * Encodes the specified Msg_OperatorFriendApplyReq message. Does not implicitly {@link proto.Msg_OperatorFriendApplyReq.verify|verify} messages.
         * @param m Msg_OperatorFriendApplyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OperatorFriendApplyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OperatorFriendApplyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OperatorFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OperatorFriendApplyReq;
    }

    /** Properties of a Msg_OperatorFriendApplyRsp. */
    interface IMsg_OperatorFriendApplyRsp {

        /** Msg_OperatorFriendApplyRsp result */
        result?: (proto.Msg_OperatorFriendApplyRsp.ErrorCode|null);

        /** Msg_OperatorFriendApplyRsp newFriendInfo */
        newFriendInfo?: (proto.IFriendInfoData|null);

        /** Msg_OperatorFriendApplyRsp bAgree */
        bAgree?: (boolean|null);
    }

    /** Represents a Msg_OperatorFriendApplyRsp. */
    class Msg_OperatorFriendApplyRsp implements IMsg_OperatorFriendApplyRsp {

        /**
         * Constructs a new Msg_OperatorFriendApplyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OperatorFriendApplyRsp);

        /** Msg_OperatorFriendApplyRsp result. */
        public result: proto.Msg_OperatorFriendApplyRsp.ErrorCode;

        /** Msg_OperatorFriendApplyRsp newFriendInfo. */
        public newFriendInfo?: (proto.IFriendInfoData|null);

        /** Msg_OperatorFriendApplyRsp bAgree. */
        public bAgree: boolean;

        /**
         * Encodes the specified Msg_OperatorFriendApplyRsp message. Does not implicitly {@link proto.Msg_OperatorFriendApplyRsp.verify|verify} messages.
         * @param m Msg_OperatorFriendApplyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OperatorFriendApplyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OperatorFriendApplyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OperatorFriendApplyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OperatorFriendApplyRsp;
    }

    namespace Msg_OperatorFriendApplyRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ReachUpperLimit = 1
        }
    }

    /** Properties of a Msg_AddFriendReq. */
    interface IMsg_AddFriendReq {

        /** Msg_AddFriendReq roleName */
        roleName?: (string|null);

        /** Msg_AddFriendReq roleID */
        roleID?: (string|null);
    }

    /** Represents a Msg_AddFriendReq. */
    class Msg_AddFriendReq implements IMsg_AddFriendReq {

        /**
         * Constructs a new Msg_AddFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddFriendReq);

        /** Msg_AddFriendReq roleName. */
        public roleName: string;

        /** Msg_AddFriendReq roleID. */
        public roleID: string;

        /**
         * Encodes the specified Msg_AddFriendReq message. Does not implicitly {@link proto.Msg_AddFriendReq.verify|verify} messages.
         * @param m Msg_AddFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AddFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AddFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AddFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AddFriendReq;
    }

    /** Properties of a Msg_AddFriendRsp. */
    interface IMsg_AddFriendRsp {

        /** Msg_AddFriendRsp result */
        result?: (proto.Msg_AddFriendRsp.ErrorCode|null);
    }

    /** Represents a Msg_AddFriendRsp. */
    class Msg_AddFriendRsp implements IMsg_AddFriendRsp {

        /**
         * Constructs a new Msg_AddFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddFriendRsp);

        /** Msg_AddFriendRsp result. */
        public result: proto.Msg_AddFriendRsp.ErrorCode;

        /**
         * Encodes the specified Msg_AddFriendRsp message. Does not implicitly {@link proto.Msg_AddFriendRsp.verify|verify} messages.
         * @param m Msg_AddFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AddFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AddFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AddFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AddFriendRsp;
    }

    namespace Msg_AddFriendRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ReachUpperLimit = 1,
            RoleInexistence = 2,
            AlreadyFriend = 3
        }
    }

    /** Properties of a Msg_DeleteFriendReq. */
    interface IMsg_DeleteFriendReq {

        /** Msg_DeleteFriendReq roleID */
        roleID?: (string|null);
    }

    /** Represents a Msg_DeleteFriendReq. */
    class Msg_DeleteFriendReq implements IMsg_DeleteFriendReq {

        /**
         * Constructs a new Msg_DeleteFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DeleteFriendReq);

        /** Msg_DeleteFriendReq roleID. */
        public roleID: string;

        /**
         * Encodes the specified Msg_DeleteFriendReq message. Does not implicitly {@link proto.Msg_DeleteFriendReq.verify|verify} messages.
         * @param m Msg_DeleteFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DeleteFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DeleteFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DeleteFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DeleteFriendReq;
    }

    /** Properties of a Msg_DeleteFriendRsp. */
    interface IMsg_DeleteFriendRsp {

        /** Msg_DeleteFriendRsp result */
        result?: (proto.Msg_DeleteFriendRsp.ErrorCode|null);

        /** Msg_DeleteFriendRsp roleID */
        roleID?: (string|null);
    }

    /** Represents a Msg_DeleteFriendRsp. */
    class Msg_DeleteFriendRsp implements IMsg_DeleteFriendRsp {

        /**
         * Constructs a new Msg_DeleteFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DeleteFriendRsp);

        /** Msg_DeleteFriendRsp result. */
        public result: proto.Msg_DeleteFriendRsp.ErrorCode;

        /** Msg_DeleteFriendRsp roleID. */
        public roleID: string;

        /**
         * Encodes the specified Msg_DeleteFriendRsp message. Does not implicitly {@link proto.Msg_DeleteFriendRsp.verify|verify} messages.
         * @param m Msg_DeleteFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DeleteFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DeleteFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DeleteFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DeleteFriendRsp;
    }

    namespace Msg_DeleteFriendRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            FriendInexistence = 1
        }
    }

    /** Properties of a Msg_ChangeFriendInfo. */
    interface IMsg_ChangeFriendInfo {

        /** Msg_ChangeFriendInfo bDelete */
        bDelete?: (boolean|null);

        /** Msg_ChangeFriendInfo friendInfo */
        friendInfo?: (proto.IFriendInfoData|null);
    }

    /** Represents a Msg_ChangeFriendInfo. */
    class Msg_ChangeFriendInfo implements IMsg_ChangeFriendInfo {

        /**
         * Constructs a new Msg_ChangeFriendInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeFriendInfo);

        /** Msg_ChangeFriendInfo bDelete. */
        public bDelete: boolean;

        /** Msg_ChangeFriendInfo friendInfo. */
        public friendInfo?: (proto.IFriendInfoData|null);

        /**
         * Encodes the specified Msg_ChangeFriendInfo message. Does not implicitly {@link proto.Msg_ChangeFriendInfo.verify|verify} messages.
         * @param m Msg_ChangeFriendInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeFriendInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeFriendInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeFriendInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeFriendInfo;
    }

    /** Properties of a Msg_InvitationFriendFightReq. */
    interface IMsg_InvitationFriendFightReq {

        /** Msg_InvitationFriendFightReq type */
        type?: (proto.FightType|null);

        /** Msg_InvitationFriendFightReq message */
        message?: (string|null);

        /** Msg_InvitationFriendFightReq roleID */
        roleID?: (string|null);
    }

    /** Represents a Msg_InvitationFriendFightReq. */
    class Msg_InvitationFriendFightReq implements IMsg_InvitationFriendFightReq {

        /**
         * Constructs a new Msg_InvitationFriendFightReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_InvitationFriendFightReq);

        /** Msg_InvitationFriendFightReq type. */
        public type: proto.FightType;

        /** Msg_InvitationFriendFightReq message. */
        public message: string;

        /** Msg_InvitationFriendFightReq roleID. */
        public roleID: string;

        /**
         * Encodes the specified Msg_InvitationFriendFightReq message. Does not implicitly {@link proto.Msg_InvitationFriendFightReq.verify|verify} messages.
         * @param m Msg_InvitationFriendFightReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_InvitationFriendFightReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_InvitationFriendFightReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_InvitationFriendFightReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_InvitationFriendFightReq;
    }

    /** Properties of a Msg_InvitationFriendFightRsp. */
    interface IMsg_InvitationFriendFightRsp {

        /** Msg_InvitationFriendFightRsp result */
        result?: (proto.Msg_InvitationFriendFightRsp.ErrorCode|null);
    }

    /** Represents a Msg_InvitationFriendFightRsp. */
    class Msg_InvitationFriendFightRsp implements IMsg_InvitationFriendFightRsp {

        /**
         * Constructs a new Msg_InvitationFriendFightRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_InvitationFriendFightRsp);

        /** Msg_InvitationFriendFightRsp result. */
        public result: proto.Msg_InvitationFriendFightRsp.ErrorCode;

        /**
         * Encodes the specified Msg_InvitationFriendFightRsp message. Does not implicitly {@link proto.Msg_InvitationFriendFightRsp.verify|verify} messages.
         * @param m Msg_InvitationFriendFightRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_InvitationFriendFightRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_InvitationFriendFightRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_InvitationFriendFightRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_InvitationFriendFightRsp;
    }

    namespace Msg_InvitationFriendFightRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            FriendInexistence = 1,
            FightingNow = 2,
            RefuseInvite = 3
        }
    }

    /** Properties of a Msg_PushInvitationFriendFight. */
    interface IMsg_PushInvitationFriendFight {

        /** Msg_PushInvitationFriendFight fightInvitation */
        fightInvitation?: (proto.IFriendFightInvitationData|null);
    }

    /** Represents a Msg_PushInvitationFriendFight. */
    class Msg_PushInvitationFriendFight implements IMsg_PushInvitationFriendFight {

        /**
         * Constructs a new Msg_PushInvitationFriendFight.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushInvitationFriendFight);

        /** Msg_PushInvitationFriendFight fightInvitation. */
        public fightInvitation?: (proto.IFriendFightInvitationData|null);

        /**
         * Encodes the specified Msg_PushInvitationFriendFight message. Does not implicitly {@link proto.Msg_PushInvitationFriendFight.verify|verify} messages.
         * @param m Msg_PushInvitationFriendFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushInvitationFriendFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushInvitationFriendFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushInvitationFriendFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushInvitationFriendFight;
    }

    /** Properties of a Msg_OperatorFriendFightInvitationReq. */
    interface IMsg_OperatorFriendFightInvitationReq {

        /** Msg_OperatorFriendFightInvitationReq bAgree */
        bAgree?: (boolean|null);

        /** Msg_OperatorFriendFightInvitationReq roomID */
        roomID?: (number|null);

        /** Msg_OperatorFriendFightInvitationReq type */
        type?: (proto.FightType|null);

        /** Msg_OperatorFriendFightInvitationReq createRoleID */
        createRoleID?: (string|null);
    }

    /** Represents a Msg_OperatorFriendFightInvitationReq. */
    class Msg_OperatorFriendFightInvitationReq implements IMsg_OperatorFriendFightInvitationReq {

        /**
         * Constructs a new Msg_OperatorFriendFightInvitationReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OperatorFriendFightInvitationReq);

        /** Msg_OperatorFriendFightInvitationReq bAgree. */
        public bAgree: boolean;

        /** Msg_OperatorFriendFightInvitationReq roomID. */
        public roomID: number;

        /** Msg_OperatorFriendFightInvitationReq type. */
        public type: proto.FightType;

        /** Msg_OperatorFriendFightInvitationReq createRoleID. */
        public createRoleID: string;

        /**
         * Encodes the specified Msg_OperatorFriendFightInvitationReq message. Does not implicitly {@link proto.Msg_OperatorFriendFightInvitationReq.verify|verify} messages.
         * @param m Msg_OperatorFriendFightInvitationReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OperatorFriendFightInvitationReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OperatorFriendFightInvitationReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OperatorFriendFightInvitationReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OperatorFriendFightInvitationReq;
    }

    /** Properties of a Msg_PushCancelFriendFight. */
    interface IMsg_PushCancelFriendFight {

        /** Msg_PushCancelFriendFight roomID */
        roomID?: (number|null);
    }

    /** Represents a Msg_PushCancelFriendFight. */
    class Msg_PushCancelFriendFight implements IMsg_PushCancelFriendFight {

        /**
         * Constructs a new Msg_PushCancelFriendFight.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushCancelFriendFight);

        /** Msg_PushCancelFriendFight roomID. */
        public roomID: number;

        /**
         * Encodes the specified Msg_PushCancelFriendFight message. Does not implicitly {@link proto.Msg_PushCancelFriendFight.verify|verify} messages.
         * @param m Msg_PushCancelFriendFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushCancelFriendFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushCancelFriendFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushCancelFriendFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushCancelFriendFight;
    }

    /** Properties of a Msg_OperatorFriendFightInvitationRsp. */
    interface IMsg_OperatorFriendFightInvitationRsp {

        /** Msg_OperatorFriendFightInvitationRsp result */
        result?: (proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode|null);

        /** Msg_OperatorFriendFightInvitationRsp roomID */
        roomID?: (number|null);

        /** Msg_OperatorFriendFightInvitationRsp type */
        type?: (proto.FightType|null);

        /** Msg_OperatorFriendFightInvitationRsp bAgree */
        bAgree?: (boolean|null);
    }

    /** Represents a Msg_OperatorFriendFightInvitationRsp. */
    class Msg_OperatorFriendFightInvitationRsp implements IMsg_OperatorFriendFightInvitationRsp {

        /**
         * Constructs a new Msg_OperatorFriendFightInvitationRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OperatorFriendFightInvitationRsp);

        /** Msg_OperatorFriendFightInvitationRsp result. */
        public result: proto.Msg_OperatorFriendFightInvitationRsp.ErrorCode;

        /** Msg_OperatorFriendFightInvitationRsp roomID. */
        public roomID: number;

        /** Msg_OperatorFriendFightInvitationRsp type. */
        public type: proto.FightType;

        /** Msg_OperatorFriendFightInvitationRsp bAgree. */
        public bAgree: boolean;

        /**
         * Encodes the specified Msg_OperatorFriendFightInvitationRsp message. Does not implicitly {@link proto.Msg_OperatorFriendFightInvitationRsp.verify|verify} messages.
         * @param m Msg_OperatorFriendFightInvitationRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OperatorFriendFightInvitationRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OperatorFriendFightInvitationRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OperatorFriendFightInvitationRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OperatorFriendFightInvitationRsp;
    }

    namespace Msg_OperatorFriendFightInvitationRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyCancel = 1,
            PveCountNotEnough = 2
        }
    }

    /** Properties of a FightLogData. */
    interface IFightLogData {

        /** FightLogData FightDatas */
        FightDatas?: (proto.IFightData[]|null);

        /** FightLogData ChangeScore */
        ChangeScore?: (number|null);

        /** FightLogData Type */
        Type?: (proto.FightType|null);

        /** FightLogData WaveNum */
        WaveNum?: (number|null);

        /** FightLogData WinRoleId */
        WinRoleId?: (string|null);

        /** FightLogData ChallengeId */
        ChallengeId?: (number|null);

        /** FightLogData UTC */
        UTC?: (number|Long|null);

        /** FightLogData isReport */
        isReport?: (boolean|null);
    }

    /** Represents a FightLogData. */
    class FightLogData implements IFightLogData {

        /**
         * Constructs a new FightLogData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightLogData);

        /** FightLogData FightDatas. */
        public FightDatas: proto.IFightData[];

        /** FightLogData ChangeScore. */
        public ChangeScore: number;

        /** FightLogData Type. */
        public Type: proto.FightType;

        /** FightLogData WaveNum. */
        public WaveNum: number;

        /** FightLogData WinRoleId. */
        public WinRoleId: string;

        /** FightLogData ChallengeId. */
        public ChallengeId: number;

        /** FightLogData UTC. */
        public UTC: (number|Long);

        /** FightLogData isReport. */
        public isReport: boolean;

        /**
         * Encodes the specified FightLogData message. Does not implicitly {@link proto.FightLogData.verify|verify} messages.
         * @param m FightLogData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightLogData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightLogData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightLogData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightLogData;
    }

    /** Properties of a Msg_FightLogReq. */
    interface IMsg_FightLogReq {
    }

    /** Represents a Msg_FightLogReq. */
    class Msg_FightLogReq implements IMsg_FightLogReq {

        /**
         * Constructs a new Msg_FightLogReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightLogReq);

        /**
         * Encodes the specified Msg_FightLogReq message. Does not implicitly {@link proto.Msg_FightLogReq.verify|verify} messages.
         * @param m Msg_FightLogReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightLogReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightLogReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightLogReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightLogReq;
    }

    /** Properties of a Msg_FightLogRsp. */
    interface IMsg_FightLogRsp {

        /** Msg_FightLogRsp fightLogs */
        fightLogs?: (proto.IFightLogData[]|null);
    }

    /** Represents a Msg_FightLogRsp. */
    class Msg_FightLogRsp implements IMsg_FightLogRsp {

        /**
         * Constructs a new Msg_FightLogRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightLogRsp);

        /** Msg_FightLogRsp fightLogs. */
        public fightLogs: proto.IFightLogData[];

        /**
         * Encodes the specified Msg_FightLogRsp message. Does not implicitly {@link proto.Msg_FightLogRsp.verify|verify} messages.
         * @param m Msg_FightLogRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightLogRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightLogRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightLogRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightLogRsp;
    }

    /** Properties of a Msg_CopyDeckReq. */
    interface IMsg_CopyDeckReq {

        /** Msg_CopyDeckReq DeckData */
        DeckData?: (proto.IFightCardData[]|null);

        /** Msg_CopyDeckReq lordData */
        lordData?: (proto.IFightCardData|null);

        /** Msg_CopyDeckReq talent */
        talent?: (proto.ITalentData|null);

        /** Msg_CopyDeckReq deckIndex */
        deckIndex?: (number|null);
    }

    /** Represents a Msg_CopyDeckReq. */
    class Msg_CopyDeckReq implements IMsg_CopyDeckReq {

        /**
         * Constructs a new Msg_CopyDeckReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CopyDeckReq);

        /** Msg_CopyDeckReq DeckData. */
        public DeckData: proto.IFightCardData[];

        /** Msg_CopyDeckReq lordData. */
        public lordData?: (proto.IFightCardData|null);

        /** Msg_CopyDeckReq talent. */
        public talent?: (proto.ITalentData|null);

        /** Msg_CopyDeckReq deckIndex. */
        public deckIndex: number;

        /**
         * Encodes the specified Msg_CopyDeckReq message. Does not implicitly {@link proto.Msg_CopyDeckReq.verify|verify} messages.
         * @param m Msg_CopyDeckReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CopyDeckReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CopyDeckReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CopyDeckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CopyDeckReq;
    }

    /** Properties of a Msg_CopyDeckRsp. */
    interface IMsg_CopyDeckRsp {

        /** Msg_CopyDeckRsp result */
        result?: (proto.Msg_CopyDeckRsp.ErrorCode|null);

        /** Msg_CopyDeckRsp DeckData */
        DeckData?: (proto.IFightCardData[]|null);

        /** Msg_CopyDeckRsp lordData */
        lordData?: (proto.IFightCardData|null);

        /** Msg_CopyDeckRsp talent */
        talent?: (proto.ITalentData|null);

        /** Msg_CopyDeckRsp deckIndex */
        deckIndex?: (number|null);
    }

    /** Represents a Msg_CopyDeckRsp. */
    class Msg_CopyDeckRsp implements IMsg_CopyDeckRsp {

        /**
         * Constructs a new Msg_CopyDeckRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CopyDeckRsp);

        /** Msg_CopyDeckRsp result. */
        public result: proto.Msg_CopyDeckRsp.ErrorCode;

        /** Msg_CopyDeckRsp DeckData. */
        public DeckData: proto.IFightCardData[];

        /** Msg_CopyDeckRsp lordData. */
        public lordData?: (proto.IFightCardData|null);

        /** Msg_CopyDeckRsp talent. */
        public talent?: (proto.ITalentData|null);

        /** Msg_CopyDeckRsp deckIndex. */
        public deckIndex: number;

        /**
         * Encodes the specified Msg_CopyDeckRsp message. Does not implicitly {@link proto.Msg_CopyDeckRsp.verify|verify} messages.
         * @param m Msg_CopyDeckRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CopyDeckRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CopyDeckRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CopyDeckRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CopyDeckRsp;
    }

    namespace Msg_CopyDeckRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ParamError = 1,
            LackCard = 2
        }
    }

    /** Properties of a Msg_ReportReq. */
    interface IMsg_ReportReq {

        /** Msg_ReportReq FightLogIndex */
        FightLogIndex?: (number|null);

        /** Msg_ReportReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_ReportReq. */
    class Msg_ReportReq implements IMsg_ReportReq {

        /**
         * Constructs a new Msg_ReportReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReportReq);

        /** Msg_ReportReq FightLogIndex. */
        public FightLogIndex: number;

        /** Msg_ReportReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_ReportReq message. Does not implicitly {@link proto.Msg_ReportReq.verify|verify} messages.
         * @param m Msg_ReportReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReportReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReportReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReportReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReportReq;
    }

    /** Properties of a Msg_ReportRsp. */
    interface IMsg_ReportRsp {

        /** Msg_ReportRsp result */
        result?: (proto.Msg_ReportRsp.ErrorCode|null);

        /** Msg_ReportRsp FightLogIndex */
        FightLogIndex?: (number|null);

        /** Msg_ReportRsp roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_ReportRsp. */
    class Msg_ReportRsp implements IMsg_ReportRsp {

        /**
         * Constructs a new Msg_ReportRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReportRsp);

        /** Msg_ReportRsp result. */
        public result: proto.Msg_ReportRsp.ErrorCode;

        /** Msg_ReportRsp FightLogIndex. */
        public FightLogIndex: number;

        /** Msg_ReportRsp roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_ReportRsp message. Does not implicitly {@link proto.Msg_ReportRsp.verify|verify} messages.
         * @param m Msg_ReportRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReportRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReportRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReportRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReportRsp;
    }

    namespace Msg_ReportRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ParamError = 1,
            NonPve = 2,
            CountExceeded = 3,
            OutTime = 4
        }
    }

    /** Properties of a Msg_PushPveForbidInfo. */
    interface IMsg_PushPveForbidInfo {

        /** Msg_PushPveForbidInfo unsealUTC */
        unsealUTC?: (number|Long|null);
    }

    /** Represents a Msg_PushPveForbidInfo. */
    class Msg_PushPveForbidInfo implements IMsg_PushPveForbidInfo {

        /**
         * Constructs a new Msg_PushPveForbidInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushPveForbidInfo);

        /** Msg_PushPveForbidInfo unsealUTC. */
        public unsealUTC: (number|Long);

        /**
         * Encodes the specified Msg_PushPveForbidInfo message. Does not implicitly {@link proto.Msg_PushPveForbidInfo.verify|verify} messages.
         * @param m Msg_PushPveForbidInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushPveForbidInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushPveForbidInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushPveForbidInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushPveForbidInfo;
    }

    /** Properties of a RainbowRewardData. */
    interface IRainbowRewardData {

        /** RainbowRewardData rewardInfo */
        rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** RainbowRewardData rewardState */
        rewardState?: (proto.TaskState|null);
    }

    /** Represents a RainbowRewardData. */
    class RainbowRewardData implements IRainbowRewardData {

        /**
         * Constructs a new RainbowRewardData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRainbowRewardData);

        /** RainbowRewardData rewardInfo. */
        public rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** RainbowRewardData rewardState. */
        public rewardState: proto.TaskState;

        /**
         * Encodes the specified RainbowRewardData message. Does not implicitly {@link proto.RainbowRewardData.verify|verify} messages.
         * @param m RainbowRewardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRainbowRewardData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RainbowRewardData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RainbowRewardData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RainbowRewardData;
    }

    /** Properties of a RainbowInfoData. */
    interface IRainbowInfoData {

        /** RainbowInfoData data */
        data?: (proto.ITaskData|null);

        /** RainbowInfoData leftReward */
        leftReward?: (proto.IRainbowRewardData|null);

        /** RainbowInfoData rightReward */
        rightReward?: (proto.IRainbowRewardData|null);
    }

    /** Represents a RainbowInfoData. */
    class RainbowInfoData implements IRainbowInfoData {

        /**
         * Constructs a new RainbowInfoData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRainbowInfoData);

        /** RainbowInfoData data. */
        public data?: (proto.ITaskData|null);

        /** RainbowInfoData leftReward. */
        public leftReward?: (proto.IRainbowRewardData|null);

        /** RainbowInfoData rightReward. */
        public rightReward?: (proto.IRainbowRewardData|null);

        /**
         * Encodes the specified RainbowInfoData message. Does not implicitly {@link proto.RainbowInfoData.verify|verify} messages.
         * @param m RainbowInfoData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRainbowInfoData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RainbowInfoData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RainbowInfoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RainbowInfoData;
    }

    /** Properties of a RainbowTaskData. */
    interface IRainbowTaskData {

        /** RainbowTaskData rainbowTaskList */
        rainbowTaskList?: (proto.IRainbowInfoData[]|null);

        /** RainbowTaskData periodID */
        periodID?: (number|null);

        /** RainbowTaskData todayFreeRefreshCount */
        todayFreeRefreshCount?: (number|null);

        /** RainbowTaskData todayADRefreshCount */
        todayADRefreshCount?: (number|null);

        /** RainbowTaskData canLevelUp */
        canLevelUp?: (boolean|null);

        /** RainbowTaskData runningStarLv */
        runningStarLv?: (number|null);
    }

    /** Represents a RainbowTaskData. */
    class RainbowTaskData implements IRainbowTaskData {

        /**
         * Constructs a new RainbowTaskData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRainbowTaskData);

        /** RainbowTaskData rainbowTaskList. */
        public rainbowTaskList: proto.IRainbowInfoData[];

        /** RainbowTaskData periodID. */
        public periodID: number;

        /** RainbowTaskData todayFreeRefreshCount. */
        public todayFreeRefreshCount: number;

        /** RainbowTaskData todayADRefreshCount. */
        public todayADRefreshCount: number;

        /** RainbowTaskData canLevelUp. */
        public canLevelUp: boolean;

        /** RainbowTaskData runningStarLv. */
        public runningStarLv: number;

        /**
         * Encodes the specified RainbowTaskData message. Does not implicitly {@link proto.RainbowTaskData.verify|verify} messages.
         * @param m RainbowTaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRainbowTaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RainbowTaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RainbowTaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RainbowTaskData;
    }

    /** Properties of a Msg_RainbowTaskListReq. */
    interface IMsg_RainbowTaskListReq {
    }

    /** Represents a Msg_RainbowTaskListReq. */
    class Msg_RainbowTaskListReq implements IMsg_RainbowTaskListReq {

        /**
         * Constructs a new Msg_RainbowTaskListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RainbowTaskListReq);

        /**
         * Encodes the specified Msg_RainbowTaskListReq message. Does not implicitly {@link proto.Msg_RainbowTaskListReq.verify|verify} messages.
         * @param m Msg_RainbowTaskListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RainbowTaskListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RainbowTaskListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RainbowTaskListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RainbowTaskListReq;
    }

    /** Properties of a Msg_RainbowTaskListRsp. */
    interface IMsg_RainbowTaskListRsp {

        /** Msg_RainbowTaskListRsp bCanUpLv */
        bCanUpLv?: (boolean|null);

        /** Msg_RainbowTaskListRsp overUTC */
        overUTC?: (number|null);

        /** Msg_RainbowTaskListRsp leftAdCount */
        leftAdCount?: (number|null);

        /** Msg_RainbowTaskListRsp bFreeRefreshTask */
        bFreeRefreshTask?: (boolean|null);

        /** Msg_RainbowTaskListRsp taskList */
        taskList?: (proto.IRainbowInfoData[]|null);
    }

    /** Represents a Msg_RainbowTaskListRsp. */
    class Msg_RainbowTaskListRsp implements IMsg_RainbowTaskListRsp {

        /**
         * Constructs a new Msg_RainbowTaskListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RainbowTaskListRsp);

        /** Msg_RainbowTaskListRsp bCanUpLv. */
        public bCanUpLv: boolean;

        /** Msg_RainbowTaskListRsp overUTC. */
        public overUTC: number;

        /** Msg_RainbowTaskListRsp leftAdCount. */
        public leftAdCount: number;

        /** Msg_RainbowTaskListRsp bFreeRefreshTask. */
        public bFreeRefreshTask: boolean;

        /** Msg_RainbowTaskListRsp taskList. */
        public taskList: proto.IRainbowInfoData[];

        /**
         * Encodes the specified Msg_RainbowTaskListRsp message. Does not implicitly {@link proto.Msg_RainbowTaskListRsp.verify|verify} messages.
         * @param m Msg_RainbowTaskListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RainbowTaskListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RainbowTaskListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RainbowTaskListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RainbowTaskListRsp;
    }

    /** Properties of a Msg_UpLvRainbowReq. */
    interface IMsg_UpLvRainbowReq {
    }

    /** Represents a Msg_UpLvRainbowReq. */
    class Msg_UpLvRainbowReq implements IMsg_UpLvRainbowReq {

        /**
         * Constructs a new Msg_UpLvRainbowReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpLvRainbowReq);

        /**
         * Encodes the specified Msg_UpLvRainbowReq message. Does not implicitly {@link proto.Msg_UpLvRainbowReq.verify|verify} messages.
         * @param m Msg_UpLvRainbowReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpLvRainbowReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpLvRainbowReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpLvRainbowReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpLvRainbowReq;
    }

    /** Properties of a Msg_UpLvRainbowRsp. */
    interface IMsg_UpLvRainbowRsp {

        /** Msg_UpLvRainbowRsp result */
        result?: (proto.Msg_UpLvRainbowRsp.ErrorCode|null);
    }

    /** Represents a Msg_UpLvRainbowRsp. */
    class Msg_UpLvRainbowRsp implements IMsg_UpLvRainbowRsp {

        /**
         * Constructs a new Msg_UpLvRainbowRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpLvRainbowRsp);

        /** Msg_UpLvRainbowRsp result. */
        public result: proto.Msg_UpLvRainbowRsp.ErrorCode;

        /**
         * Encodes the specified Msg_UpLvRainbowRsp message. Does not implicitly {@link proto.Msg_UpLvRainbowRsp.verify|verify} messages.
         * @param m Msg_UpLvRainbowRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpLvRainbowRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpLvRainbowRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpLvRainbowRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpLvRainbowRsp;
    }

    namespace Msg_UpLvRainbowRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            DiamondNotEnough = 1,
            AlreadyUpLv = 2,
            TaskOver = 3,
            BanLvUpTime = 4
        }
    }

    /** Properties of a Msg_ImmFinishRainbowTaskReq. */
    interface IMsg_ImmFinishRainbowTaskReq {

        /** Msg_ImmFinishRainbowTaskReq taskUUID */
        taskUUID?: (string|null);

        /** Msg_ImmFinishRainbowTaskReq bCostGold */
        bCostGold?: (boolean|null);
    }

    /** Represents a Msg_ImmFinishRainbowTaskReq. */
    class Msg_ImmFinishRainbowTaskReq implements IMsg_ImmFinishRainbowTaskReq {

        /**
         * Constructs a new Msg_ImmFinishRainbowTaskReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImmFinishRainbowTaskReq);

        /** Msg_ImmFinishRainbowTaskReq taskUUID. */
        public taskUUID: string;

        /** Msg_ImmFinishRainbowTaskReq bCostGold. */
        public bCostGold: boolean;

        /**
         * Encodes the specified Msg_ImmFinishRainbowTaskReq message. Does not implicitly {@link proto.Msg_ImmFinishRainbowTaskReq.verify|verify} messages.
         * @param m Msg_ImmFinishRainbowTaskReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImmFinishRainbowTaskReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImmFinishRainbowTaskReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImmFinishRainbowTaskReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImmFinishRainbowTaskReq;
    }

    /** Properties of a Msg_ImmFinishRainbowTaskRsp. */
    interface IMsg_ImmFinishRainbowTaskRsp {

        /** Msg_ImmFinishRainbowTaskRsp result */
        result?: (proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode|null);

        /** Msg_ImmFinishRainbowTaskRsp taskUUID */
        taskUUID?: (string|null);

        /** Msg_ImmFinishRainbowTaskRsp data */
        data?: (proto.IRainbowTaskPushData|null);
    }

    /** Represents a Msg_ImmFinishRainbowTaskRsp. */
    class Msg_ImmFinishRainbowTaskRsp implements IMsg_ImmFinishRainbowTaskRsp {

        /**
         * Constructs a new Msg_ImmFinishRainbowTaskRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImmFinishRainbowTaskRsp);

        /** Msg_ImmFinishRainbowTaskRsp result. */
        public result: proto.Msg_ImmFinishRainbowTaskRsp.ErrorCode;

        /** Msg_ImmFinishRainbowTaskRsp taskUUID. */
        public taskUUID: string;

        /** Msg_ImmFinishRainbowTaskRsp data. */
        public data?: (proto.IRainbowTaskPushData|null);

        /**
         * Encodes the specified Msg_ImmFinishRainbowTaskRsp message. Does not implicitly {@link proto.Msg_ImmFinishRainbowTaskRsp.verify|verify} messages.
         * @param m Msg_ImmFinishRainbowTaskRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImmFinishRainbowTaskRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImmFinishRainbowTaskRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImmFinishRainbowTaskRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImmFinishRainbowTaskRsp;
    }

    namespace Msg_ImmFinishRainbowTaskRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            DiamondNotEnough = 1,
            GoldNotEnough = 2,
            TaskInExistence = 3,
            TaskOver = 4,
            TaskUnOpen = 5
        }
    }

    /** Properties of a Msg_RefreshRainbowTaskReq. */
    interface IMsg_RefreshRainbowTaskReq {

        /** Msg_RefreshRainbowTaskReq taskUUID */
        taskUUID?: (string|null);

        /** Msg_RefreshRainbowTaskReq taskStarLv */
        taskStarLv?: (number|null);
    }

    /** Represents a Msg_RefreshRainbowTaskReq. */
    class Msg_RefreshRainbowTaskReq implements IMsg_RefreshRainbowTaskReq {

        /**
         * Constructs a new Msg_RefreshRainbowTaskReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshRainbowTaskReq);

        /** Msg_RefreshRainbowTaskReq taskUUID. */
        public taskUUID: string;

        /** Msg_RefreshRainbowTaskReq taskStarLv. */
        public taskStarLv: number;

        /**
         * Encodes the specified Msg_RefreshRainbowTaskReq message. Does not implicitly {@link proto.Msg_RefreshRainbowTaskReq.verify|verify} messages.
         * @param m Msg_RefreshRainbowTaskReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshRainbowTaskReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshRainbowTaskReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshRainbowTaskReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshRainbowTaskReq;
    }

    /** Properties of a Msg_RefreshRainbowTaskRsp. */
    interface IMsg_RefreshRainbowTaskRsp {

        /** Msg_RefreshRainbowTaskRsp result */
        result?: (proto.Msg_RefreshRainbowTaskRsp.ErrorCode|null);

        /** Msg_RefreshRainbowTaskRsp newTask */
        newTask?: (proto.IRainbowInfoData|null);

        /** Msg_RefreshRainbowTaskRsp taskStarLv */
        taskStarLv?: (number|null);
    }

    /** Represents a Msg_RefreshRainbowTaskRsp. */
    class Msg_RefreshRainbowTaskRsp implements IMsg_RefreshRainbowTaskRsp {

        /**
         * Constructs a new Msg_RefreshRainbowTaskRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshRainbowTaskRsp);

        /** Msg_RefreshRainbowTaskRsp result. */
        public result: proto.Msg_RefreshRainbowTaskRsp.ErrorCode;

        /** Msg_RefreshRainbowTaskRsp newTask. */
        public newTask?: (proto.IRainbowInfoData|null);

        /** Msg_RefreshRainbowTaskRsp taskStarLv. */
        public taskStarLv: number;

        /**
         * Encodes the specified Msg_RefreshRainbowTaskRsp message. Does not implicitly {@link proto.Msg_RefreshRainbowTaskRsp.verify|verify} messages.
         * @param m Msg_RefreshRainbowTaskRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshRainbowTaskRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshRainbowTaskRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshRainbowTaskRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshRainbowTaskRsp;
    }

    namespace Msg_RefreshRainbowTaskRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TaskInExistence = 1,
            TaskOver = 2,
            TaskUnOpen = 3
        }
    }

    /** Properties of a Msg_ReceiveRainbowRewardReq. */
    interface IMsg_ReceiveRainbowRewardReq {

        /** Msg_ReceiveRainbowRewardReq taskStarLv */
        taskStarLv?: (number|null);

        /** Msg_ReceiveRainbowRewardReq bLeftReward */
        bLeftReward?: (boolean|null);
    }

    /** Represents a Msg_ReceiveRainbowRewardReq. */
    class Msg_ReceiveRainbowRewardReq implements IMsg_ReceiveRainbowRewardReq {

        /**
         * Constructs a new Msg_ReceiveRainbowRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveRainbowRewardReq);

        /** Msg_ReceiveRainbowRewardReq taskStarLv. */
        public taskStarLv: number;

        /** Msg_ReceiveRainbowRewardReq bLeftReward. */
        public bLeftReward: boolean;

        /**
         * Encodes the specified Msg_ReceiveRainbowRewardReq message. Does not implicitly {@link proto.Msg_ReceiveRainbowRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveRainbowRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveRainbowRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveRainbowRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveRainbowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveRainbowRewardReq;
    }

    /** Properties of a Msg_ReceiveRainbowRewardRsp. */
    interface IMsg_ReceiveRainbowRewardRsp {

        /** Msg_ReceiveRainbowRewardRsp result */
        result?: (proto.Msg_ReceiveRainbowRewardRsp.ErrorCode|null);

        /** Msg_ReceiveRainbowRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ReceiveRainbowRewardRsp taskStarLv */
        taskStarLv?: (number|null);

        /** Msg_ReceiveRainbowRewardRsp bLeftReward */
        bLeftReward?: (boolean|null);
    }

    /** Represents a Msg_ReceiveRainbowRewardRsp. */
    class Msg_ReceiveRainbowRewardRsp implements IMsg_ReceiveRainbowRewardRsp {

        /**
         * Constructs a new Msg_ReceiveRainbowRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveRainbowRewardRsp);

        /** Msg_ReceiveRainbowRewardRsp result. */
        public result: proto.Msg_ReceiveRainbowRewardRsp.ErrorCode;

        /** Msg_ReceiveRainbowRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_ReceiveRainbowRewardRsp taskStarLv. */
        public taskStarLv: number;

        /** Msg_ReceiveRainbowRewardRsp bLeftReward. */
        public bLeftReward: boolean;

        /**
         * Encodes the specified Msg_ReceiveRainbowRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveRainbowRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveRainbowRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveRainbowRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveRainbowRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveRainbowRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveRainbowRewardRsp;
    }

    namespace Msg_ReceiveRainbowRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TaskInExistence = 1,
            TaskOver = 2,
            TaskUnOpen = 3,
            AlreadyReceived = 4,
            NotUpLvTask = 5
        }
    }

    /** Properties of a RainbowTaskPushData. */
    interface IRainbowTaskPushData {

        /** RainbowTaskPushData data */
        data?: (proto.ITaskData|null);

        /** RainbowTaskPushData taskStarLv */
        taskStarLv?: (number|null);
    }

    /** Represents a RainbowTaskPushData. */
    class RainbowTaskPushData implements IRainbowTaskPushData {

        /**
         * Constructs a new RainbowTaskPushData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRainbowTaskPushData);

        /** RainbowTaskPushData data. */
        public data?: (proto.ITaskData|null);

        /** RainbowTaskPushData taskStarLv. */
        public taskStarLv: number;

        /**
         * Encodes the specified RainbowTaskPushData message. Does not implicitly {@link proto.RainbowTaskPushData.verify|verify} messages.
         * @param m RainbowTaskPushData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRainbowTaskPushData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RainbowTaskPushData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RainbowTaskPushData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RainbowTaskPushData;
    }

    /** Properties of a Msg_PushRainbowTaskUpdate. */
    interface IMsg_PushRainbowTaskUpdate {

        /** Msg_PushRainbowTaskUpdate data */
        data?: (proto.IRainbowTaskPushData|null);
    }

    /** Represents a Msg_PushRainbowTaskUpdate. */
    class Msg_PushRainbowTaskUpdate implements IMsg_PushRainbowTaskUpdate {

        /**
         * Constructs a new Msg_PushRainbowTaskUpdate.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushRainbowTaskUpdate);

        /** Msg_PushRainbowTaskUpdate data. */
        public data?: (proto.IRainbowTaskPushData|null);

        /**
         * Encodes the specified Msg_PushRainbowTaskUpdate message. Does not implicitly {@link proto.Msg_PushRainbowTaskUpdate.verify|verify} messages.
         * @param m Msg_PushRainbowTaskUpdate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushRainbowTaskUpdate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushRainbowTaskUpdate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushRainbowTaskUpdate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushRainbowTaskUpdate;
    }

    /** Properties of a Msg_PushRainbowTaskExpireRefresh. */
    interface IMsg_PushRainbowTaskExpireRefresh {

        /** Msg_PushRainbowTaskExpireRefresh runningTaskData */
        runningTaskData?: (proto.ITaskData|null);
    }

    /** Represents a Msg_PushRainbowTaskExpireRefresh. */
    class Msg_PushRainbowTaskExpireRefresh implements IMsg_PushRainbowTaskExpireRefresh {

        /**
         * Constructs a new Msg_PushRainbowTaskExpireRefresh.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushRainbowTaskExpireRefresh);

        /** Msg_PushRainbowTaskExpireRefresh runningTaskData. */
        public runningTaskData?: (proto.ITaskData|null);

        /**
         * Encodes the specified Msg_PushRainbowTaskExpireRefresh message. Does not implicitly {@link proto.Msg_PushRainbowTaskExpireRefresh.verify|verify} messages.
         * @param m Msg_PushRainbowTaskExpireRefresh message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushRainbowTaskExpireRefresh, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushRainbowTaskExpireRefresh message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushRainbowTaskExpireRefresh
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushRainbowTaskExpireRefresh;
    }

    /** Properties of a Msg_PushRainbowTaskRedDotStatus. */
    interface IMsg_PushRainbowTaskRedDotStatus {

        /** Msg_PushRainbowTaskRedDotStatus bHave */
        bHave?: (boolean|null);
    }

    /** Represents a Msg_PushRainbowTaskRedDotStatus. */
    class Msg_PushRainbowTaskRedDotStatus implements IMsg_PushRainbowTaskRedDotStatus {

        /**
         * Constructs a new Msg_PushRainbowTaskRedDotStatus.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushRainbowTaskRedDotStatus);

        /** Msg_PushRainbowTaskRedDotStatus bHave. */
        public bHave: boolean;

        /**
         * Encodes the specified Msg_PushRainbowTaskRedDotStatus message. Does not implicitly {@link proto.Msg_PushRainbowTaskRedDotStatus.verify|verify} messages.
         * @param m Msg_PushRainbowTaskRedDotStatus message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushRainbowTaskRedDotStatus, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushRainbowTaskRedDotStatus message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushRainbowTaskRedDotStatus
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushRainbowTaskRedDotStatus;
    }

    /** Properties of a SevenDaySignInDBData. */
    interface ISevenDaySignInDBData {

        /** SevenDaySignInDBData rewardData */
        rewardData?: (proto.ISevenDaySignInData[]|null);

        /** SevenDaySignInDBData curLoginDay */
        curLoginDay?: (number|null);

        /** SevenDaySignInDBData startTime */
        startTime?: (number|Long|null);

        /** SevenDaySignInDBData endTime */
        endTime?: (number|Long|null);

        /** SevenDaySignInDBData lastSignInTime */
        lastSignInTime?: (number|null);
    }

    /** Represents a SevenDaySignInDBData. */
    class SevenDaySignInDBData implements ISevenDaySignInDBData {

        /**
         * Constructs a new SevenDaySignInDBData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISevenDaySignInDBData);

        /** SevenDaySignInDBData rewardData. */
        public rewardData: proto.ISevenDaySignInData[];

        /** SevenDaySignInDBData curLoginDay. */
        public curLoginDay: number;

        /** SevenDaySignInDBData startTime. */
        public startTime: (number|Long);

        /** SevenDaySignInDBData endTime. */
        public endTime: (number|Long);

        /** SevenDaySignInDBData lastSignInTime. */
        public lastSignInTime: number;

        /**
         * Encodes the specified SevenDaySignInDBData message. Does not implicitly {@link proto.SevenDaySignInDBData.verify|verify} messages.
         * @param m SevenDaySignInDBData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISevenDaySignInDBData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDaySignInDBData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SevenDaySignInDBData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SevenDaySignInDBData;
    }

    /** Properties of a SevenDaySignInData. */
    interface ISevenDaySignInData {

        /** SevenDaySignInData rewardInfo */
        rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** SevenDaySignInData bReceived */
        bReceived?: (boolean|null);
    }

    /** Represents a SevenDaySignInData. */
    class SevenDaySignInData implements ISevenDaySignInData {

        /**
         * Constructs a new SevenDaySignInData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISevenDaySignInData);

        /** SevenDaySignInData rewardInfo. */
        public rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** SevenDaySignInData bReceived. */
        public bReceived: boolean;

        /**
         * Encodes the specified SevenDaySignInData message. Does not implicitly {@link proto.SevenDaySignInData.verify|verify} messages.
         * @param m SevenDaySignInData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISevenDaySignInData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SevenDaySignInData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SevenDaySignInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SevenDaySignInData;
    }

    /** Properties of a Msg_PushSevenDaySignInData. */
    interface IMsg_PushSevenDaySignInData {

        /** Msg_PushSevenDaySignInData actDataList */
        actDataList?: (proto.ISevenDaySignInData[]|null);

        /** Msg_PushSevenDaySignInData curLoginDay */
        curLoginDay?: (number|null);

        /** Msg_PushSevenDaySignInData startTime */
        startTime?: (number|Long|null);

        /** Msg_PushSevenDaySignInData overTimes */
        overTimes?: (number|Long|null);
    }

    /** Represents a Msg_PushSevenDaySignInData. */
    class Msg_PushSevenDaySignInData implements IMsg_PushSevenDaySignInData {

        /**
         * Constructs a new Msg_PushSevenDaySignInData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushSevenDaySignInData);

        /** Msg_PushSevenDaySignInData actDataList. */
        public actDataList: proto.ISevenDaySignInData[];

        /** Msg_PushSevenDaySignInData curLoginDay. */
        public curLoginDay: number;

        /** Msg_PushSevenDaySignInData startTime. */
        public startTime: (number|Long);

        /** Msg_PushSevenDaySignInData overTimes. */
        public overTimes: (number|Long);

        /**
         * Encodes the specified Msg_PushSevenDaySignInData message. Does not implicitly {@link proto.Msg_PushSevenDaySignInData.verify|verify} messages.
         * @param m Msg_PushSevenDaySignInData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushSevenDaySignInData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushSevenDaySignInData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushSevenDaySignInData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushSevenDaySignInData;
    }

    /** Properties of a Msg_ReceiveSevenDaySignInRewardReq. */
    interface IMsg_ReceiveSevenDaySignInRewardReq {

        /** Msg_ReceiveSevenDaySignInRewardReq day */
        day?: (number|null);
    }

    /** Represents a Msg_ReceiveSevenDaySignInRewardReq. */
    class Msg_ReceiveSevenDaySignInRewardReq implements IMsg_ReceiveSevenDaySignInRewardReq {

        /**
         * Constructs a new Msg_ReceiveSevenDaySignInRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSevenDaySignInRewardReq);

        /** Msg_ReceiveSevenDaySignInRewardReq day. */
        public day: number;

        /**
         * Encodes the specified Msg_ReceiveSevenDaySignInRewardReq message. Does not implicitly {@link proto.Msg_ReceiveSevenDaySignInRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveSevenDaySignInRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSevenDaySignInRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSevenDaySignInRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSevenDaySignInRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSevenDaySignInRewardReq;
    }

    /** Properties of a Msg_ReceiveSevenDaySignInRewardRsp. */
    interface IMsg_ReceiveSevenDaySignInRewardRsp {

        /** Msg_ReceiveSevenDaySignInRewardRsp result */
        result?: (proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode|null);

        /** Msg_ReceiveSevenDaySignInRewardRsp day */
        day?: (number|null);

        /** Msg_ReceiveSevenDaySignInRewardRsp rewardList */
        rewardList?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveSevenDaySignInRewardRsp. */
    class Msg_ReceiveSevenDaySignInRewardRsp implements IMsg_ReceiveSevenDaySignInRewardRsp {

        /**
         * Constructs a new Msg_ReceiveSevenDaySignInRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSevenDaySignInRewardRsp);

        /** Msg_ReceiveSevenDaySignInRewardRsp result. */
        public result: proto.Msg_ReceiveSevenDaySignInRewardRsp.ErrorCode;

        /** Msg_ReceiveSevenDaySignInRewardRsp day. */
        public day: number;

        /** Msg_ReceiveSevenDaySignInRewardRsp rewardList. */
        public rewardList: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveSevenDaySignInRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveSevenDaySignInRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveSevenDaySignInRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSevenDaySignInRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSevenDaySignInRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSevenDaySignInRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSevenDaySignInRewardRsp;
    }

    namespace Msg_ReceiveSevenDaySignInRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceived = 1,
            ActivityOver = 2,
            UnReachReceiveCond = 3
        }
    }

    /** Properties of a GroutTaskData. */
    interface IGroutTaskData {

        /** GroutTaskData rewardInfo */
        rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** GroutTaskData taskData */
        taskData?: (proto.ITaskData|null);
    }

    /** Represents a GroutTaskData. */
    class GroutTaskData implements IGroutTaskData {

        /**
         * Constructs a new GroutTaskData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGroutTaskData);

        /** GroutTaskData rewardInfo. */
        public rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** GroutTaskData taskData. */
        public taskData?: (proto.ITaskData|null);

        /**
         * Encodes the specified GroutTaskData message. Does not implicitly {@link proto.GroutTaskData.verify|verify} messages.
         * @param m GroutTaskData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGroutTaskData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroutTaskData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GroutTaskData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GroutTaskData;
    }

    /** Properties of a Msg_GroutTaskListReq. */
    interface IMsg_GroutTaskListReq {

        /** Msg_GroutTaskListReq taskStep */
        taskStep?: (number|null);
    }

    /** Represents a Msg_GroutTaskListReq. */
    class Msg_GroutTaskListReq implements IMsg_GroutTaskListReq {

        /**
         * Constructs a new Msg_GroutTaskListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GroutTaskListReq);

        /** Msg_GroutTaskListReq taskStep. */
        public taskStep: number;

        /**
         * Encodes the specified Msg_GroutTaskListReq message. Does not implicitly {@link proto.Msg_GroutTaskListReq.verify|verify} messages.
         * @param m Msg_GroutTaskListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GroutTaskListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GroutTaskListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GroutTaskListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GroutTaskListReq;
    }

    /** Properties of a Msg_GroutTaskListRsp. */
    interface IMsg_GroutTaskListRsp {

        /** Msg_GroutTaskListRsp taskDataList */
        taskDataList?: (proto.IGroutTaskData[]|null);

        /** Msg_GroutTaskListRsp bReceivedList */
        bReceivedList?: (boolean[]|null);
    }

    /** Represents a Msg_GroutTaskListRsp. */
    class Msg_GroutTaskListRsp implements IMsg_GroutTaskListRsp {

        /**
         * Constructs a new Msg_GroutTaskListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GroutTaskListRsp);

        /** Msg_GroutTaskListRsp taskDataList. */
        public taskDataList: proto.IGroutTaskData[];

        /** Msg_GroutTaskListRsp bReceivedList. */
        public bReceivedList: boolean[];

        /**
         * Encodes the specified Msg_GroutTaskListRsp message. Does not implicitly {@link proto.Msg_GroutTaskListRsp.verify|verify} messages.
         * @param m Msg_GroutTaskListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GroutTaskListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GroutTaskListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GroutTaskListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GroutTaskListRsp;
    }

    /** Properties of a Msg_ReceiveGroutTaskRewardReq. */
    interface IMsg_ReceiveGroutTaskRewardReq {

        /** Msg_ReceiveGroutTaskRewardReq taskUUID */
        taskUUID?: (string|null);
    }

    /** Represents a Msg_ReceiveGroutTaskRewardReq. */
    class Msg_ReceiveGroutTaskRewardReq implements IMsg_ReceiveGroutTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveGroutTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGroutTaskRewardReq);

        /** Msg_ReceiveGroutTaskRewardReq taskUUID. */
        public taskUUID: string;

        /**
         * Encodes the specified Msg_ReceiveGroutTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveGroutTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveGroutTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGroutTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGroutTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGroutTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGroutTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveGroutTaskRewardRsp. */
    interface IMsg_ReceiveGroutTaskRewardRsp {

        /** Msg_ReceiveGroutTaskRewardRsp result */
        result?: (proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode|null);

        /** Msg_ReceiveGroutTaskRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ReceiveGroutTaskRewardRsp taskUUID */
        taskUUID?: (string|null);
    }

    /** Represents a Msg_ReceiveGroutTaskRewardRsp. */
    class Msg_ReceiveGroutTaskRewardRsp implements IMsg_ReceiveGroutTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveGroutTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGroutTaskRewardRsp);

        /** Msg_ReceiveGroutTaskRewardRsp result. */
        public result: proto.Msg_ReceiveGroutTaskRewardRsp.ErrorCode;

        /** Msg_ReceiveGroutTaskRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_ReceiveGroutTaskRewardRsp taskUUID. */
        public taskUUID: string;

        /**
         * Encodes the specified Msg_ReceiveGroutTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveGroutTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveGroutTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGroutTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGroutTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGroutTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGroutTaskRewardRsp;
    }

    namespace Msg_ReceiveGroutTaskRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TaskInExistence = 1,
            TaskUnOpen = 2,
            AlreadyReceived = 3
        }
    }

    /** Properties of a Msg_ReceiveGroutTaskStepRewardReq. */
    interface IMsg_ReceiveGroutTaskStepRewardReq {

        /** Msg_ReceiveGroutTaskStepRewardReq taskStep */
        taskStep?: (number|null);
    }

    /** Represents a Msg_ReceiveGroutTaskStepRewardReq. */
    class Msg_ReceiveGroutTaskStepRewardReq implements IMsg_ReceiveGroutTaskStepRewardReq {

        /**
         * Constructs a new Msg_ReceiveGroutTaskStepRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGroutTaskStepRewardReq);

        /** Msg_ReceiveGroutTaskStepRewardReq taskStep. */
        public taskStep: number;

        /**
         * Encodes the specified Msg_ReceiveGroutTaskStepRewardReq message. Does not implicitly {@link proto.Msg_ReceiveGroutTaskStepRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveGroutTaskStepRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGroutTaskStepRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGroutTaskStepRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGroutTaskStepRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGroutTaskStepRewardReq;
    }

    /** Properties of a Msg_ReceiveGroutTaskStepRewardRsp. */
    interface IMsg_ReceiveGroutTaskStepRewardRsp {

        /** Msg_ReceiveGroutTaskStepRewardRsp result */
        result?: (proto.Msg_ReceiveGroutTaskStepRewardRsp.ErrorCode|null);

        /** Msg_ReceiveGroutTaskStepRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ReceiveGroutTaskStepRewardRsp taskStep */
        taskStep?: (number|null);
    }

    /** Represents a Msg_ReceiveGroutTaskStepRewardRsp. */
    class Msg_ReceiveGroutTaskStepRewardRsp implements IMsg_ReceiveGroutTaskStepRewardRsp {

        /**
         * Constructs a new Msg_ReceiveGroutTaskStepRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGroutTaskStepRewardRsp);

        /** Msg_ReceiveGroutTaskStepRewardRsp result. */
        public result: proto.Msg_ReceiveGroutTaskStepRewardRsp.ErrorCode;

        /** Msg_ReceiveGroutTaskStepRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_ReceiveGroutTaskStepRewardRsp taskStep. */
        public taskStep: number;

        /**
         * Encodes the specified Msg_ReceiveGroutTaskStepRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveGroutTaskStepRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveGroutTaskStepRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGroutTaskStepRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGroutTaskStepRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGroutTaskStepRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGroutTaskStepRewardRsp;
    }

    namespace Msg_ReceiveGroutTaskStepRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            UnFinishTaskStep = 1,
            AlreadyReceived = 2
        }
    }

    /** Properties of a Msg_PushGroutTaskUpate. */
    interface IMsg_PushGroutTaskUpate {

        /** Msg_PushGroutTaskUpate taskData */
        taskData?: (proto.ITaskData|null);

        /** Msg_PushGroutTaskUpate currentStep */
        currentStep?: (number|null);

        /** Msg_PushGroutTaskUpate bLoginPush */
        bLoginPush?: (boolean|null);

        /** Msg_PushGroutTaskUpate bFinish */
        bFinish?: (boolean|null);
    }

    /** Represents a Msg_PushGroutTaskUpate. */
    class Msg_PushGroutTaskUpate implements IMsg_PushGroutTaskUpate {

        /**
         * Constructs a new Msg_PushGroutTaskUpate.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushGroutTaskUpate);

        /** Msg_PushGroutTaskUpate taskData. */
        public taskData?: (proto.ITaskData|null);

        /** Msg_PushGroutTaskUpate currentStep. */
        public currentStep: number;

        /** Msg_PushGroutTaskUpate bLoginPush. */
        public bLoginPush: boolean;

        /** Msg_PushGroutTaskUpate bFinish. */
        public bFinish: boolean;

        /**
         * Encodes the specified Msg_PushGroutTaskUpate message. Does not implicitly {@link proto.Msg_PushGroutTaskUpate.verify|verify} messages.
         * @param m Msg_PushGroutTaskUpate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushGroutTaskUpate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushGroutTaskUpate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushGroutTaskUpate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushGroutTaskUpate;
    }

    /** Properties of a GroutTaskDBData. */
    interface IGroutTaskDBData {

        /** GroutTaskDBData groutTaskList */
        groutTaskList?: (proto.IGroutTaskData[]|null);

        /** GroutTaskDBData runningTaskIndex */
        runningTaskIndex?: (number|null);

        /** GroutTaskDBData runningStep */
        runningStep?: (number|null);

        /** GroutTaskDBData receivedRewardStep */
        receivedRewardStep?: (number|null);
    }

    /** Represents a GroutTaskDBData. */
    class GroutTaskDBData implements IGroutTaskDBData {

        /**
         * Constructs a new GroutTaskDBData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGroutTaskDBData);

        /** GroutTaskDBData groutTaskList. */
        public groutTaskList: proto.IGroutTaskData[];

        /** GroutTaskDBData runningTaskIndex. */
        public runningTaskIndex: number;

        /** GroutTaskDBData runningStep. */
        public runningStep: number;

        /** GroutTaskDBData receivedRewardStep. */
        public receivedRewardStep: number;

        /**
         * Encodes the specified GroutTaskDBData message. Does not implicitly {@link proto.GroutTaskDBData.verify|verify} messages.
         * @param m GroutTaskDBData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGroutTaskDBData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GroutTaskDBData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GroutTaskDBData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GroutTaskDBData;
    }

    /** GamePublishChannelType enum. */
    enum GamePublishChannelType {
        _37ChannelType = 0,
        TencentYouLiangHui = 1
    }

    /** Properties of a Msg_PayStartReq. */
    interface IMsg_PayStartReq {

        /** Msg_PayStartReq rechargeID */
        rechargeID?: (number|null);

        /** Msg_PayStartReq type */
        type?: (proto.GamePublishChannelType|null);
    }

    /** Represents a Msg_PayStartReq. */
    class Msg_PayStartReq implements IMsg_PayStartReq {

        /**
         * Constructs a new Msg_PayStartReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayStartReq);

        /** Msg_PayStartReq rechargeID. */
        public rechargeID: number;

        /** Msg_PayStartReq type. */
        public type: proto.GamePublishChannelType;

        /**
         * Encodes the specified Msg_PayStartReq message. Does not implicitly {@link proto.Msg_PayStartReq.verify|verify} messages.
         * @param m Msg_PayStartReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayStartReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayStartReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayStartReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayStartReq;
    }

    /** Properties of a Msg_PayStartRsp. */
    interface IMsg_PayStartRsp {

        /** Msg_PayStartRsp errCode */
        errCode?: (proto.Msg_PayStartRsp.ErrorCode|null);

        /** Msg_PayStartRsp orderID */
        orderID?: (string|null);

        /** Msg_PayStartRsp rechargeID */
        rechargeID?: (number|null);
    }

    /** Represents a Msg_PayStartRsp. */
    class Msg_PayStartRsp implements IMsg_PayStartRsp {

        /**
         * Constructs a new Msg_PayStartRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayStartRsp);

        /** Msg_PayStartRsp errCode. */
        public errCode: proto.Msg_PayStartRsp.ErrorCode;

        /** Msg_PayStartRsp orderID. */
        public orderID: string;

        /** Msg_PayStartRsp rechargeID. */
        public rechargeID: number;

        /**
         * Encodes the specified Msg_PayStartRsp message. Does not implicitly {@link proto.Msg_PayStartRsp.verify|verify} messages.
         * @param m Msg_PayStartRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayStartRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayStartRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayStartRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayStartRsp;
    }

    namespace Msg_PayStartRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Ok = 0,
            Pending = 1,
            Limited = 2,
            Forbidden = 3,
            Other = 4
        }
    }

    /** Properties of a Msg_PrePayWechatRsp. */
    interface IMsg_PrePayWechatRsp {

        /** Msg_PrePayWechatRsp type */
        type?: (proto.GamePublishChannelType|null);

        /** Msg_PrePayWechatRsp prepayID */
        prepayID?: (string|null);

        /** Msg_PrePayWechatRsp timestamp */
        timestamp?: (number|null);

        /** Msg_PrePayWechatRsp noncestr */
        noncestr?: (string|null);

        /** Msg_PrePayWechatRsp sign */
        sign?: (string|null);
    }

    /** Represents a Msg_PrePayWechatRsp. */
    class Msg_PrePayWechatRsp implements IMsg_PrePayWechatRsp {

        /**
         * Constructs a new Msg_PrePayWechatRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PrePayWechatRsp);

        /** Msg_PrePayWechatRsp type. */
        public type: proto.GamePublishChannelType;

        /** Msg_PrePayWechatRsp prepayID. */
        public prepayID: string;

        /** Msg_PrePayWechatRsp timestamp. */
        public timestamp: number;

        /** Msg_PrePayWechatRsp noncestr. */
        public noncestr: string;

        /** Msg_PrePayWechatRsp sign. */
        public sign: string;

        /**
         * Encodes the specified Msg_PrePayWechatRsp message. Does not implicitly {@link proto.Msg_PrePayWechatRsp.verify|verify} messages.
         * @param m Msg_PrePayWechatRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PrePayWechatRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PrePayWechatRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PrePayWechatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PrePayWechatRsp;
    }

    /** Properties of a Msg_PayEndReq. */
    interface IMsg_PayEndReq {

        /** Msg_PayEndReq orderID */
        orderID?: (string|null);

        /** Msg_PayEndReq rechargeID */
        rechargeID?: (number|null);

        /** Msg_PayEndReq dev */
        dev?: (boolean|null);
    }

    /** Represents a Msg_PayEndReq. */
    class Msg_PayEndReq implements IMsg_PayEndReq {

        /**
         * Constructs a new Msg_PayEndReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayEndReq);

        /** Msg_PayEndReq orderID. */
        public orderID: string;

        /** Msg_PayEndReq rechargeID. */
        public rechargeID: number;

        /** Msg_PayEndReq dev. */
        public dev: boolean;

        /**
         * Encodes the specified Msg_PayEndReq message. Does not implicitly {@link proto.Msg_PayEndReq.verify|verify} messages.
         * @param m Msg_PayEndReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayEndReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayEndReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayEndReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayEndReq;
    }

    /** Properties of a Msg_PayEndRsp. */
    interface IMsg_PayEndRsp {
    }

    /** Represents a Msg_PayEndRsp. */
    class Msg_PayEndRsp implements IMsg_PayEndRsp {

        /**
         * Constructs a new Msg_PayEndRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayEndRsp);

        /**
         * Encodes the specified Msg_PayEndRsp message. Does not implicitly {@link proto.Msg_PayEndRsp.verify|verify} messages.
         * @param m Msg_PayEndRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayEndRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayEndRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayEndRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayEndRsp;
    }

    /** Properties of a Msg_ReportedAdvertTypeReq. */
    interface IMsg_ReportedAdvertTypeReq {

        /** Msg_ReportedAdvertTypeReq AdvertType */
        AdvertType?: (number|null);

        /** Msg_ReportedAdvertTypeReq viewStatus */
        viewStatus?: (number|null);
    }

    /** Represents a Msg_ReportedAdvertTypeReq. */
    class Msg_ReportedAdvertTypeReq implements IMsg_ReportedAdvertTypeReq {

        /**
         * Constructs a new Msg_ReportedAdvertTypeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReportedAdvertTypeReq);

        /** Msg_ReportedAdvertTypeReq AdvertType. */
        public AdvertType: number;

        /** Msg_ReportedAdvertTypeReq viewStatus. */
        public viewStatus: number;

        /**
         * Encodes the specified Msg_ReportedAdvertTypeReq message. Does not implicitly {@link proto.Msg_ReportedAdvertTypeReq.verify|verify} messages.
         * @param m Msg_ReportedAdvertTypeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReportedAdvertTypeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReportedAdvertTypeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReportedAdvertTypeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReportedAdvertTypeReq;
    }

    /** Properties of a Msg_SetGid. */
    interface IMsg_SetGid {

        /** Msg_SetGid gid */
        gid?: (string|null);

        /** Msg_SetGid pid */
        pid?: (string|null);
    }

    /** Represents a Msg_SetGid. */
    class Msg_SetGid implements IMsg_SetGid {

        /**
         * Constructs a new Msg_SetGid.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGid);

        /** Msg_SetGid gid. */
        public gid: string;

        /** Msg_SetGid pid. */
        public pid: string;

        /**
         * Encodes the specified Msg_SetGid message. Does not implicitly {@link proto.Msg_SetGid.verify|verify} messages.
         * @param m Msg_SetGid message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGid, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGid message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGid
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGid;
    }

    /** Properties of a Msg_KickOff. */
    interface IMsg_KickOff {
    }

    /** Represents a Msg_KickOff. */
    class Msg_KickOff implements IMsg_KickOff {

        /**
         * Constructs a new Msg_KickOff.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_KickOff);

        /**
         * Encodes the specified Msg_KickOff message. Does not implicitly {@link proto.Msg_KickOff.verify|verify} messages.
         * @param m Msg_KickOff message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_KickOff, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_KickOff message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_KickOff
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_KickOff;
    }

    /** Properties of a SharedFriends. */
    interface ISharedFriends {

        /** SharedFriends rankScore */
        rankScore?: (number|null);

        /** SharedFriends name */
        name?: (string|null);

        /** SharedFriends indexCard */
        indexCard?: (number|null);

        /** SharedFriends playerUid */
        playerUid?: (string|null);

        /** SharedFriends wechatHeadIconURl */
        wechatHeadIconURl?: (string|null);

        /** SharedFriends wechatName */
        wechatName?: (string|null);
    }

    /** Represents a SharedFriends. */
    class SharedFriends implements ISharedFriends {

        /**
         * Constructs a new SharedFriends.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISharedFriends);

        /** SharedFriends rankScore. */
        public rankScore: number;

        /** SharedFriends name. */
        public name: string;

        /** SharedFriends indexCard. */
        public indexCard: number;

        /** SharedFriends playerUid. */
        public playerUid: string;

        /** SharedFriends wechatHeadIconURl. */
        public wechatHeadIconURl: string;

        /** SharedFriends wechatName. */
        public wechatName: string;

        /**
         * Encodes the specified SharedFriends message. Does not implicitly {@link proto.SharedFriends.verify|verify} messages.
         * @param m SharedFriends message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISharedFriends, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedFriends message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SharedFriends
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SharedFriends;
    }

    /** Properties of a Msg_SharedGameReq. */
    interface IMsg_SharedGameReq {
    }

    /** Represents a Msg_SharedGameReq. */
    class Msg_SharedGameReq implements IMsg_SharedGameReq {

        /**
         * Constructs a new Msg_SharedGameReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SharedGameReq);

        /**
         * Encodes the specified Msg_SharedGameReq message. Does not implicitly {@link proto.Msg_SharedGameReq.verify|verify} messages.
         * @param m Msg_SharedGameReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SharedGameReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SharedGameReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SharedGameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SharedGameReq;
    }

    /** Properties of a Msg_SharedGameRsp. */
    interface IMsg_SharedGameRsp {

        /** Msg_SharedGameRsp SharedFriendsCnt */
        SharedFriendsCnt?: (number|null);

        /** Msg_SharedGameRsp CurIndex */
        CurIndex?: (number|null);
    }

    /** Represents a Msg_SharedGameRsp. */
    class Msg_SharedGameRsp implements IMsg_SharedGameRsp {

        /**
         * Constructs a new Msg_SharedGameRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SharedGameRsp);

        /** Msg_SharedGameRsp SharedFriendsCnt. */
        public SharedFriendsCnt: number;

        /** Msg_SharedGameRsp CurIndex. */
        public CurIndex: number;

        /**
         * Encodes the specified Msg_SharedGameRsp message. Does not implicitly {@link proto.Msg_SharedGameRsp.verify|verify} messages.
         * @param m Msg_SharedGameRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SharedGameRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SharedGameRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SharedGameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SharedGameRsp;
    }

    /** Properties of a Msg_SharedListReq. */
    interface IMsg_SharedListReq {
    }

    /** Represents a Msg_SharedListReq. */
    class Msg_SharedListReq implements IMsg_SharedListReq {

        /**
         * Constructs a new Msg_SharedListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SharedListReq);

        /**
         * Encodes the specified Msg_SharedListReq message. Does not implicitly {@link proto.Msg_SharedListReq.verify|verify} messages.
         * @param m Msg_SharedListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SharedListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SharedListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SharedListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SharedListReq;
    }

    /** Properties of a Msg_SharedListRsp. */
    interface IMsg_SharedListRsp {

        /** Msg_SharedListRsp sharedFriends */
        sharedFriends?: (proto.ISharedFriends[]|null);
    }

    /** Represents a Msg_SharedListRsp. */
    class Msg_SharedListRsp implements IMsg_SharedListRsp {

        /**
         * Constructs a new Msg_SharedListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SharedListRsp);

        /** Msg_SharedListRsp sharedFriends. */
        public sharedFriends: proto.ISharedFriends[];

        /**
         * Encodes the specified Msg_SharedListRsp message. Does not implicitly {@link proto.Msg_SharedListRsp.verify|verify} messages.
         * @param m Msg_SharedListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SharedListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SharedListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SharedListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SharedListRsp;
    }

    /** Properties of a Msg_GetSharedAwardReq. */
    interface IMsg_GetSharedAwardReq {

        /** Msg_GetSharedAwardReq id */
        id?: (number|null);
    }

    /** Represents a Msg_GetSharedAwardReq. */
    class Msg_GetSharedAwardReq implements IMsg_GetSharedAwardReq {

        /**
         * Constructs a new Msg_GetSharedAwardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSharedAwardReq);

        /** Msg_GetSharedAwardReq id. */
        public id: number;

        /**
         * Encodes the specified Msg_GetSharedAwardReq message. Does not implicitly {@link proto.Msg_GetSharedAwardReq.verify|verify} messages.
         * @param m Msg_GetSharedAwardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSharedAwardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSharedAwardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSharedAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSharedAwardReq;
    }

    /** Properties of a Msg_GetSharedAwardRsp. */
    interface IMsg_GetSharedAwardRsp {

        /** Msg_GetSharedAwardRsp result */
        result?: (proto.Msg_GetSharedAwardRsp.ErrorCode|null);

        /** Msg_GetSharedAwardRsp awards */
        awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetSharedAwardRsp. */
    class Msg_GetSharedAwardRsp implements IMsg_GetSharedAwardRsp {

        /**
         * Constructs a new Msg_GetSharedAwardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSharedAwardRsp);

        /** Msg_GetSharedAwardRsp result. */
        public result: proto.Msg_GetSharedAwardRsp.ErrorCode;

        /** Msg_GetSharedAwardRsp awards. */
        public awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetSharedAwardRsp message. Does not implicitly {@link proto.Msg_GetSharedAwardRsp.verify|verify} messages.
         * @param m Msg_GetSharedAwardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSharedAwardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSharedAwardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSharedAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSharedAwardRsp;
    }

    namespace Msg_GetSharedAwardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Error = 1
        }
    }

    /** Properties of an InviteRecommendData. */
    interface IInviteRecommendData {

        /** InviteRecommendData step */
        step?: (number|null);

        /** InviteRecommendData inviteList */
        inviteList?: (string[]|null);
    }

    /** Represents an InviteRecommendData. */
    class InviteRecommendData implements IInviteRecommendData {

        /**
         * Constructs a new InviteRecommendData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IInviteRecommendData);

        /** InviteRecommendData step. */
        public step: number;

        /** InviteRecommendData inviteList. */
        public inviteList: string[];

        /**
         * Encodes the specified InviteRecommendData message. Does not implicitly {@link proto.InviteRecommendData.verify|verify} messages.
         * @param m InviteRecommendData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IInviteRecommendData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an InviteRecommendData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns InviteRecommendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.InviteRecommendData;
    }

    /** Properties of a DailyInviteRecommendData. */
    interface IDailyInviteRecommendData {

        /** DailyInviteRecommendData rewardLoopID */
        rewardLoopID?: (number|null);

        /** DailyInviteRecommendData inviteList */
        inviteList?: (string[]|null);

        /** DailyInviteRecommendData gotReward */
        gotReward?: (boolean|null);

        /** DailyInviteRecommendData lastRefreshTime */
        lastRefreshTime?: (number|null);
    }

    /** Represents a DailyInviteRecommendData. */
    class DailyInviteRecommendData implements IDailyInviteRecommendData {

        /**
         * Constructs a new DailyInviteRecommendData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDailyInviteRecommendData);

        /** DailyInviteRecommendData rewardLoopID. */
        public rewardLoopID: number;

        /** DailyInviteRecommendData inviteList. */
        public inviteList: string[];

        /** DailyInviteRecommendData gotReward. */
        public gotReward: boolean;

        /** DailyInviteRecommendData lastRefreshTime. */
        public lastRefreshTime: number;

        /**
         * Encodes the specified DailyInviteRecommendData message. Does not implicitly {@link proto.DailyInviteRecommendData.verify|verify} messages.
         * @param m DailyInviteRecommendData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDailyInviteRecommendData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyInviteRecommendData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyInviteRecommendData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DailyInviteRecommendData;
    }

    /** Properties of a SharedOfTodayObj. */
    interface ISharedOfTodayObj {

        /** SharedOfTodayObj type */
        type?: (number|null);

        /** SharedOfTodayObj sharedCntOfToday */
        sharedCntOfToday?: (number|null);
    }

    /** Represents a SharedOfTodayObj. */
    class SharedOfTodayObj implements ISharedOfTodayObj {

        /**
         * Constructs a new SharedOfTodayObj.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISharedOfTodayObj);

        /** SharedOfTodayObj type. */
        public type: number;

        /** SharedOfTodayObj sharedCntOfToday. */
        public sharedCntOfToday: number;

        /**
         * Encodes the specified SharedOfTodayObj message. Does not implicitly {@link proto.SharedOfTodayObj.verify|verify} messages.
         * @param m SharedOfTodayObj message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISharedOfTodayObj, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SharedOfTodayObj message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SharedOfTodayObj
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SharedOfTodayObj;
    }

    /** Properties of a Msg_PushSharedOfToday. */
    interface IMsg_PushSharedOfToday {

        /** Msg_PushSharedOfToday sharedList */
        sharedList?: (proto.ISharedOfTodayObj[]|null);
    }

    /** Represents a Msg_PushSharedOfToday. */
    class Msg_PushSharedOfToday implements IMsg_PushSharedOfToday {

        /**
         * Constructs a new Msg_PushSharedOfToday.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushSharedOfToday);

        /** Msg_PushSharedOfToday sharedList. */
        public sharedList: proto.ISharedOfTodayObj[];

        /**
         * Encodes the specified Msg_PushSharedOfToday message. Does not implicitly {@link proto.Msg_PushSharedOfToday.verify|verify} messages.
         * @param m Msg_PushSharedOfToday message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushSharedOfToday, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushSharedOfToday message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushSharedOfToday
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushSharedOfToday;
    }

    /** Properties of a DailyShareData. */
    interface IDailyShareData {

        /** DailyShareData dailyShareList */
        dailyShareList?: (proto.ISharedOfTodayObj[]|null);

        /** DailyShareData legendCardShareTimes */
        legendCardShareTimes?: (number|null);
    }

    /** Represents a DailyShareData. */
    class DailyShareData implements IDailyShareData {

        /**
         * Constructs a new DailyShareData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDailyShareData);

        /** DailyShareData dailyShareList. */
        public dailyShareList: proto.ISharedOfTodayObj[];

        /** DailyShareData legendCardShareTimes. */
        public legendCardShareTimes: number;

        /**
         * Encodes the specified DailyShareData message. Does not implicitly {@link proto.DailyShareData.verify|verify} messages.
         * @param m DailyShareData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDailyShareData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyShareData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyShareData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DailyShareData;
    }

    /** Properties of a Msg_AfterSharedRewardReq. */
    interface IMsg_AfterSharedRewardReq {

        /** Msg_AfterSharedRewardReq shareType */
        shareType?: (number|null);
    }

    /** Represents a Msg_AfterSharedRewardReq. */
    class Msg_AfterSharedRewardReq implements IMsg_AfterSharedRewardReq {

        /**
         * Constructs a new Msg_AfterSharedRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AfterSharedRewardReq);

        /** Msg_AfterSharedRewardReq shareType. */
        public shareType: number;

        /**
         * Encodes the specified Msg_AfterSharedRewardReq message. Does not implicitly {@link proto.Msg_AfterSharedRewardReq.verify|verify} messages.
         * @param m Msg_AfterSharedRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AfterSharedRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AfterSharedRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AfterSharedRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AfterSharedRewardReq;
    }

    /** Properties of a Msg_AfterSharedRewardRsp. */
    interface IMsg_AfterSharedRewardRsp {

        /** Msg_AfterSharedRewardRsp result */
        result?: (proto.Msg_AfterSharedRewardRsp.ErrorCode|null);

        /** Msg_AfterSharedRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_AfterSharedRewardRsp sharedList */
        sharedList?: (proto.ISharedOfTodayObj[]|null);
    }

    /** Represents a Msg_AfterSharedRewardRsp. */
    class Msg_AfterSharedRewardRsp implements IMsg_AfterSharedRewardRsp {

        /**
         * Constructs a new Msg_AfterSharedRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AfterSharedRewardRsp);

        /** Msg_AfterSharedRewardRsp result. */
        public result: proto.Msg_AfterSharedRewardRsp.ErrorCode;

        /** Msg_AfterSharedRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_AfterSharedRewardRsp sharedList. */
        public sharedList: proto.ISharedOfTodayObj[];

        /**
         * Encodes the specified Msg_AfterSharedRewardRsp message. Does not implicitly {@link proto.Msg_AfterSharedRewardRsp.verify|verify} messages.
         * @param m Msg_AfterSharedRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AfterSharedRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AfterSharedRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AfterSharedRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AfterSharedRewardRsp;
    }

    namespace Msg_AfterSharedRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceivedReward = 1,
            NoneFirstWinOfToday = 2
        }
    }

    /** Properties of a Msg_WatchAdResumeSeasonScoreReq. */
    interface IMsg_WatchAdResumeSeasonScoreReq {
    }

    /** Represents a Msg_WatchAdResumeSeasonScoreReq. */
    class Msg_WatchAdResumeSeasonScoreReq implements IMsg_WatchAdResumeSeasonScoreReq {

        /**
         * Constructs a new Msg_WatchAdResumeSeasonScoreReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WatchAdResumeSeasonScoreReq);

        /**
         * Encodes the specified Msg_WatchAdResumeSeasonScoreReq message. Does not implicitly {@link proto.Msg_WatchAdResumeSeasonScoreReq.verify|verify} messages.
         * @param m Msg_WatchAdResumeSeasonScoreReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WatchAdResumeSeasonScoreReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WatchAdResumeSeasonScoreReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WatchAdResumeSeasonScoreReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WatchAdResumeSeasonScoreReq;
    }

    /** Properties of a Msg_WatchAdResumeSeasonScoreRsp. */
    interface IMsg_WatchAdResumeSeasonScoreRsp {

        /** Msg_WatchAdResumeSeasonScoreRsp result */
        result?: (proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode|null);
    }

    /** Represents a Msg_WatchAdResumeSeasonScoreRsp. */
    class Msg_WatchAdResumeSeasonScoreRsp implements IMsg_WatchAdResumeSeasonScoreRsp {

        /**
         * Constructs a new Msg_WatchAdResumeSeasonScoreRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WatchAdResumeSeasonScoreRsp);

        /** Msg_WatchAdResumeSeasonScoreRsp result. */
        public result: proto.Msg_WatchAdResumeSeasonScoreRsp.ErrorCode;

        /**
         * Encodes the specified Msg_WatchAdResumeSeasonScoreRsp message. Does not implicitly {@link proto.Msg_WatchAdResumeSeasonScoreRsp.verify|verify} messages.
         * @param m Msg_WatchAdResumeSeasonScoreRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WatchAdResumeSeasonScoreRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WatchAdResumeSeasonScoreRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WatchAdResumeSeasonScoreRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WatchAdResumeSeasonScoreRsp;
    }

    namespace Msg_WatchAdResumeSeasonScoreRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            UseUpWatchAd = 1
        }
    }

    /** Properties of an EmotionData. */
    interface IEmotionData {

        /** EmotionData emotionList */
        emotionList?: (number[]|null);
    }

    /** Represents an EmotionData. */
    class EmotionData implements IEmotionData {

        /**
         * Constructs a new EmotionData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEmotionData);

        /** EmotionData emotionList. */
        public emotionList: number[];

        /**
         * Encodes the specified EmotionData message. Does not implicitly {@link proto.EmotionData.verify|verify} messages.
         * @param m EmotionData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEmotionData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EmotionData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EmotionData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EmotionData;
    }

    /** Properties of a Msg_SwitchEmotionReq. */
    interface IMsg_SwitchEmotionReq {

        /** Msg_SwitchEmotionReq originalIdx */
        originalIdx?: (number|null);

        /** Msg_SwitchEmotionReq replaceIdx */
        replaceIdx?: (number|null);
    }

    /** Represents a Msg_SwitchEmotionReq. */
    class Msg_SwitchEmotionReq implements IMsg_SwitchEmotionReq {

        /**
         * Constructs a new Msg_SwitchEmotionReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SwitchEmotionReq);

        /** Msg_SwitchEmotionReq originalIdx. */
        public originalIdx: number;

        /** Msg_SwitchEmotionReq replaceIdx. */
        public replaceIdx: number;

        /**
         * Encodes the specified Msg_SwitchEmotionReq message. Does not implicitly {@link proto.Msg_SwitchEmotionReq.verify|verify} messages.
         * @param m Msg_SwitchEmotionReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SwitchEmotionReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SwitchEmotionReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SwitchEmotionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SwitchEmotionReq;
    }

    /** Properties of a Msg_SwitchEmotionRsp. */
    interface IMsg_SwitchEmotionRsp {

        /** Msg_SwitchEmotionRsp result */
        result?: (proto.Msg_SwitchEmotionRsp.ErrorCode|null);

        /** Msg_SwitchEmotionRsp originalIdx */
        originalIdx?: (number|null);

        /** Msg_SwitchEmotionRsp replaceIdx */
        replaceIdx?: (number|null);
    }

    /** Represents a Msg_SwitchEmotionRsp. */
    class Msg_SwitchEmotionRsp implements IMsg_SwitchEmotionRsp {

        /**
         * Constructs a new Msg_SwitchEmotionRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SwitchEmotionRsp);

        /** Msg_SwitchEmotionRsp result. */
        public result: proto.Msg_SwitchEmotionRsp.ErrorCode;

        /** Msg_SwitchEmotionRsp originalIdx. */
        public originalIdx: number;

        /** Msg_SwitchEmotionRsp replaceIdx. */
        public replaceIdx: number;

        /**
         * Encodes the specified Msg_SwitchEmotionRsp message. Does not implicitly {@link proto.Msg_SwitchEmotionRsp.verify|verify} messages.
         * @param m Msg_SwitchEmotionRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SwitchEmotionRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SwitchEmotionRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SwitchEmotionRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SwitchEmotionRsp;
    }

    namespace Msg_SwitchEmotionRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NonEmotion = 1,
            AlreadyReplace = 2
        }
    }

    /** Properties of a Msg_SetWechatUserInfo. */
    interface IMsg_SetWechatUserInfo {

        /** Msg_SetWechatUserInfo wechatNickname */
        wechatNickname?: (string|null);

        /** Msg_SetWechatUserInfo wechatAvatarUrl */
        wechatAvatarUrl?: (string|null);
    }

    /** Represents a Msg_SetWechatUserInfo. */
    class Msg_SetWechatUserInfo implements IMsg_SetWechatUserInfo {

        /**
         * Constructs a new Msg_SetWechatUserInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetWechatUserInfo);

        /** Msg_SetWechatUserInfo wechatNickname. */
        public wechatNickname: string;

        /** Msg_SetWechatUserInfo wechatAvatarUrl. */
        public wechatAvatarUrl: string;

        /**
         * Encodes the specified Msg_SetWechatUserInfo message. Does not implicitly {@link proto.Msg_SetWechatUserInfo.verify|verify} messages.
         * @param m Msg_SetWechatUserInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetWechatUserInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetWechatUserInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetWechatUserInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetWechatUserInfo;
    }

    /** Properties of a BattleMapData. */
    interface IBattleMapData {

        /** BattleMapData battleMapList */
        battleMapList?: (number[]|null);

        /** BattleMapData usedBattleMap */
        usedBattleMap?: (number|null);
    }

    /** Represents a BattleMapData. */
    class BattleMapData implements IBattleMapData {

        /**
         * Constructs a new BattleMapData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBattleMapData);

        /** BattleMapData battleMapList. */
        public battleMapList: number[];

        /** BattleMapData usedBattleMap. */
        public usedBattleMap: number;

        /**
         * Encodes the specified BattleMapData message. Does not implicitly {@link proto.BattleMapData.verify|verify} messages.
         * @param m BattleMapData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBattleMapData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattleMapData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattleMapData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BattleMapData;
    }

    /** BattleMapState enum. */
    enum BattleMapState {
        Equipment = 0,
        AlreadyHold = 1,
        NonHold = 2
    }

    /** Properties of a Msg_GetBattleMapReq. */
    interface IMsg_GetBattleMapReq {
    }

    /** Represents a Msg_GetBattleMapReq. */
    class Msg_GetBattleMapReq implements IMsg_GetBattleMapReq {

        /**
         * Constructs a new Msg_GetBattleMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBattleMapReq);

        /**
         * Encodes the specified Msg_GetBattleMapReq message. Does not implicitly {@link proto.Msg_GetBattleMapReq.verify|verify} messages.
         * @param m Msg_GetBattleMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBattleMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBattleMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBattleMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBattleMapReq;
    }

    /** Properties of a Msg_GetBattleMapRsp. */
    interface IMsg_GetBattleMapRsp {

        /** Msg_GetBattleMapRsp alreadyHoldMaps */
        alreadyHoldMaps?: (number[]|null);

        /** Msg_GetBattleMapRsp nonHoldMaps */
        nonHoldMaps?: (number[]|null);
    }

    /** Represents a Msg_GetBattleMapRsp. */
    class Msg_GetBattleMapRsp implements IMsg_GetBattleMapRsp {

        /**
         * Constructs a new Msg_GetBattleMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBattleMapRsp);

        /** Msg_GetBattleMapRsp alreadyHoldMaps. */
        public alreadyHoldMaps: number[];

        /** Msg_GetBattleMapRsp nonHoldMaps. */
        public nonHoldMaps: number[];

        /**
         * Encodes the specified Msg_GetBattleMapRsp message. Does not implicitly {@link proto.Msg_GetBattleMapRsp.verify|verify} messages.
         * @param m Msg_GetBattleMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBattleMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBattleMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBattleMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBattleMapRsp;
    }

    /** Properties of a Msg_ReplaceBattleMapReq. */
    interface IMsg_ReplaceBattleMapReq {

        /** Msg_ReplaceBattleMapReq mapID */
        mapID?: (number|null);
    }

    /** Represents a Msg_ReplaceBattleMapReq. */
    class Msg_ReplaceBattleMapReq implements IMsg_ReplaceBattleMapReq {

        /**
         * Constructs a new Msg_ReplaceBattleMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReplaceBattleMapReq);

        /** Msg_ReplaceBattleMapReq mapID. */
        public mapID: number;

        /**
         * Encodes the specified Msg_ReplaceBattleMapReq message. Does not implicitly {@link proto.Msg_ReplaceBattleMapReq.verify|verify} messages.
         * @param m Msg_ReplaceBattleMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReplaceBattleMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReplaceBattleMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReplaceBattleMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReplaceBattleMapReq;
    }

    /** Properties of a Msg_ReplaceBattleMapRsp. */
    interface IMsg_ReplaceBattleMapRsp {

        /** Msg_ReplaceBattleMapRsp result */
        result?: (proto.Msg_ReplaceBattleMapRsp.ErrorCode|null);

        /** Msg_ReplaceBattleMapRsp curUsedMapID */
        curUsedMapID?: (number|null);
    }

    /** Represents a Msg_ReplaceBattleMapRsp. */
    class Msg_ReplaceBattleMapRsp implements IMsg_ReplaceBattleMapRsp {

        /**
         * Constructs a new Msg_ReplaceBattleMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReplaceBattleMapRsp);

        /** Msg_ReplaceBattleMapRsp result. */
        public result: proto.Msg_ReplaceBattleMapRsp.ErrorCode;

        /** Msg_ReplaceBattleMapRsp curUsedMapID. */
        public curUsedMapID: number;

        /**
         * Encodes the specified Msg_ReplaceBattleMapRsp message. Does not implicitly {@link proto.Msg_ReplaceBattleMapRsp.verify|verify} messages.
         * @param m Msg_ReplaceBattleMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReplaceBattleMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReplaceBattleMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReplaceBattleMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReplaceBattleMapRsp;
    }

    namespace Msg_ReplaceBattleMapRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            NonBattleMapID = 1,
            BattleMapAlreadyUsed = 2
        }
    }

    /** Properties of a Msg_BuyEmotionReq. */
    interface IMsg_BuyEmotionReq {

        /** Msg_BuyEmotionReq emotionID */
        emotionID?: (number|null);

        /** Msg_BuyEmotionReq goodsIdx */
        goodsIdx?: (number|null);
    }

    /** Represents a Msg_BuyEmotionReq. */
    class Msg_BuyEmotionReq implements IMsg_BuyEmotionReq {

        /**
         * Constructs a new Msg_BuyEmotionReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyEmotionReq);

        /** Msg_BuyEmotionReq emotionID. */
        public emotionID: number;

        /** Msg_BuyEmotionReq goodsIdx. */
        public goodsIdx: number;

        /**
         * Encodes the specified Msg_BuyEmotionReq message. Does not implicitly {@link proto.Msg_BuyEmotionReq.verify|verify} messages.
         * @param m Msg_BuyEmotionReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyEmotionReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyEmotionReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyEmotionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyEmotionReq;
    }

    /** Properties of a Msg_BuyEmotionRsp. */
    interface IMsg_BuyEmotionRsp {

        /** Msg_BuyEmotionRsp result */
        result?: (proto.Msg_BuyEmotionRsp.ErrorCode|null);

        /** Msg_BuyEmotionRsp emotionID */
        emotionID?: (number|null);

        /** Msg_BuyEmotionRsp goodsIdx */
        goodsIdx?: (number|null);
    }

    /** Represents a Msg_BuyEmotionRsp. */
    class Msg_BuyEmotionRsp implements IMsg_BuyEmotionRsp {

        /**
         * Constructs a new Msg_BuyEmotionRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyEmotionRsp);

        /** Msg_BuyEmotionRsp result. */
        public result: proto.Msg_BuyEmotionRsp.ErrorCode;

        /** Msg_BuyEmotionRsp emotionID. */
        public emotionID: number;

        /** Msg_BuyEmotionRsp goodsIdx. */
        public goodsIdx: number;

        /**
         * Encodes the specified Msg_BuyEmotionRsp message. Does not implicitly {@link proto.Msg_BuyEmotionRsp.verify|verify} messages.
         * @param m Msg_BuyEmotionRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyEmotionRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyEmotionRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyEmotionRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyEmotionRsp;
    }

    namespace Msg_BuyEmotionRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyHoldEmotion = 1,
            NonEmotion = 2
        }
    }

    /** Properties of a Msg_Echo. */
    interface IMsg_Echo {

        /** Msg_Echo index */
        index?: (number|null);
    }

    /** Represents a Msg_Echo. */
    class Msg_Echo implements IMsg_Echo {

        /**
         * Constructs a new Msg_Echo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_Echo);

        /** Msg_Echo index. */
        public index: number;

        /**
         * Encodes the specified Msg_Echo message. Does not implicitly {@link proto.Msg_Echo.verify|verify} messages.
         * @param m Msg_Echo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_Echo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_Echo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_Echo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_Echo;
    }

    /** Properties of a ScrollMsg. */
    interface IScrollMsg {

        /** ScrollMsg ID */
        ID?: (string|null);

        /** ScrollMsg beginTimeUTC */
        beginTimeUTC?: (number|null);

        /** ScrollMsg endTimeUTC */
        endTimeUTC?: (number|null);

        /** ScrollMsg contentTXT */
        contentTXT?: (string|null);

        /** ScrollMsg playInterval */
        playInterval?: (number|null);
    }

    /** Represents a ScrollMsg. */
    class ScrollMsg implements IScrollMsg {

        /**
         * Constructs a new ScrollMsg.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IScrollMsg);

        /** ScrollMsg ID. */
        public ID: string;

        /** ScrollMsg beginTimeUTC. */
        public beginTimeUTC: number;

        /** ScrollMsg endTimeUTC. */
        public endTimeUTC: number;

        /** ScrollMsg contentTXT. */
        public contentTXT: string;

        /** ScrollMsg playInterval. */
        public playInterval: number;

        /**
         * Encodes the specified ScrollMsg message. Does not implicitly {@link proto.ScrollMsg.verify|verify} messages.
         * @param m ScrollMsg message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IScrollMsg, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScrollMsg message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ScrollMsg
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ScrollMsg;
    }

    /** Properties of a Msg_ScrollNoticeReq. */
    interface IMsg_ScrollNoticeReq {
    }

    /** Represents a Msg_ScrollNoticeReq. */
    class Msg_ScrollNoticeReq implements IMsg_ScrollNoticeReq {

        /**
         * Constructs a new Msg_ScrollNoticeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ScrollNoticeReq);

        /**
         * Encodes the specified Msg_ScrollNoticeReq message. Does not implicitly {@link proto.Msg_ScrollNoticeReq.verify|verify} messages.
         * @param m Msg_ScrollNoticeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ScrollNoticeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ScrollNoticeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ScrollNoticeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ScrollNoticeReq;
    }

    /** Properties of a Msg_ScrollNoticeRsp. */
    interface IMsg_ScrollNoticeRsp {

        /** Msg_ScrollNoticeRsp notices */
        notices?: (proto.IScrollMsg[]|null);
    }

    /** Represents a Msg_ScrollNoticeRsp. */
    class Msg_ScrollNoticeRsp implements IMsg_ScrollNoticeRsp {

        /**
         * Constructs a new Msg_ScrollNoticeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ScrollNoticeRsp);

        /** Msg_ScrollNoticeRsp notices. */
        public notices: proto.IScrollMsg[];

        /**
         * Encodes the specified Msg_ScrollNoticeRsp message. Does not implicitly {@link proto.Msg_ScrollNoticeRsp.verify|verify} messages.
         * @param m Msg_ScrollNoticeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ScrollNoticeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ScrollNoticeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ScrollNoticeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ScrollNoticeRsp;
    }

    /** GFCellAwardState enum. */
    enum GFCellAwardState {
        NotGet = 0,
        GetFree = 1,
        GetAll = 2
    }

    /** Properties of a GFCell. */
    interface IGFCell {

        /** GFCell ID */
        ID?: (number|null);

        /** GFCell GetAwardType */
        GetAwardType?: (proto.GFCellAwardState|null);
    }

    /** Represents a GFCell. */
    class GFCell implements IGFCell {

        /**
         * Constructs a new GFCell.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGFCell);

        /** GFCell ID. */
        public ID: number;

        /** GFCell GetAwardType. */
        public GetAwardType: proto.GFCellAwardState;

        /**
         * Encodes the specified GFCell message. Does not implicitly {@link proto.GFCell.verify|verify} messages.
         * @param m GFCell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGFCell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GFCell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GFCell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GFCell;
    }

    /** Properties of a GrowFundData. */
    interface IGrowFundData {

        /** GrowFundData HistoryRankScore */
        HistoryRankScore?: (number|null);

        /** GrowFundData Cell */
        Cell?: (proto.IGFCell[]|null);

        /** GrowFundData UnlockFund */
        UnlockFund?: (boolean|null);
    }

    /** Represents a GrowFundData. */
    class GrowFundData implements IGrowFundData {

        /**
         * Constructs a new GrowFundData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGrowFundData);

        /** GrowFundData HistoryRankScore. */
        public HistoryRankScore: number;

        /** GrowFundData Cell. */
        public Cell: proto.IGFCell[];

        /** GrowFundData UnlockFund. */
        public UnlockFund: boolean;

        /**
         * Encodes the specified GrowFundData message. Does not implicitly {@link proto.GrowFundData.verify|verify} messages.
         * @param m GrowFundData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGrowFundData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GrowFundData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GrowFundData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GrowFundData;
    }

    /** Properties of a MonthAndWeekCardData. */
    interface IMonthAndWeekCardData {

        /** MonthAndWeekCardData reward */
        reward?: (proto.IRewardSimpleInfo|null);

        /** MonthAndWeekCardData everyDayMailRewardCount */
        everyDayMailRewardCount?: (number|null);

        /** MonthAndWeekCardData overTimes */
        overTimes?: (number|null);

        /** MonthAndWeekCardData rechargeID */
        rechargeID?: (number|null);
    }

    /** Represents a MonthAndWeekCardData. */
    class MonthAndWeekCardData implements IMonthAndWeekCardData {

        /**
         * Constructs a new MonthAndWeekCardData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMonthAndWeekCardData);

        /** MonthAndWeekCardData reward. */
        public reward?: (proto.IRewardSimpleInfo|null);

        /** MonthAndWeekCardData everyDayMailRewardCount. */
        public everyDayMailRewardCount: number;

        /** MonthAndWeekCardData overTimes. */
        public overTimes: number;

        /** MonthAndWeekCardData rechargeID. */
        public rechargeID: number;

        /**
         * Encodes the specified MonthAndWeekCardData message. Does not implicitly {@link proto.MonthAndWeekCardData.verify|verify} messages.
         * @param m MonthAndWeekCardData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMonthAndWeekCardData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonthAndWeekCardData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MonthAndWeekCardData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MonthAndWeekCardData;
    }

    /** Properties of a MonthAndWeekCardDataGroup. */
    interface IMonthAndWeekCardDataGroup {

        /** MonthAndWeekCardDataGroup monthCardData */
        monthCardData?: (proto.IMonthAndWeekCardData|null);

        /** MonthAndWeekCardDataGroup advertCardData */
        advertCardData?: (proto.IMonthAndWeekCardData|null);
    }

    /** Represents a MonthAndWeekCardDataGroup. */
    class MonthAndWeekCardDataGroup implements IMonthAndWeekCardDataGroup {

        /**
         * Constructs a new MonthAndWeekCardDataGroup.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMonthAndWeekCardDataGroup);

        /** MonthAndWeekCardDataGroup monthCardData. */
        public monthCardData?: (proto.IMonthAndWeekCardData|null);

        /** MonthAndWeekCardDataGroup advertCardData. */
        public advertCardData?: (proto.IMonthAndWeekCardData|null);

        /**
         * Encodes the specified MonthAndWeekCardDataGroup message. Does not implicitly {@link proto.MonthAndWeekCardDataGroup.verify|verify} messages.
         * @param m MonthAndWeekCardDataGroup message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMonthAndWeekCardDataGroup, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MonthAndWeekCardDataGroup message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MonthAndWeekCardDataGroup
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MonthAndWeekCardDataGroup;
    }

    /** Properties of an UnpackRebateData. */
    interface IUnpackRebateData {

        /** UnpackRebateData unpackRebateCount */
        unpackRebateCount?: (number|null);

        /** UnpackRebateData goldCardIDList */
        goldCardIDList?: (number[]|null);
    }

    /** Represents an UnpackRebateData. */
    class UnpackRebateData implements IUnpackRebateData {

        /**
         * Constructs a new UnpackRebateData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IUnpackRebateData);

        /** UnpackRebateData unpackRebateCount. */
        public unpackRebateCount: number;

        /** UnpackRebateData goldCardIDList. */
        public goldCardIDList: number[];

        /**
         * Encodes the specified UnpackRebateData message. Does not implicitly {@link proto.UnpackRebateData.verify|verify} messages.
         * @param m UnpackRebateData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IUnpackRebateData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UnpackRebateData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UnpackRebateData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.UnpackRebateData;
    }

    /** Properties of an ActivityInfo. */
    interface IActivityInfo {

        /** ActivityInfo ID */
        ID?: (number|null);

        /** ActivityInfo endTimeUTC */
        endTimeUTC?: (number|null);

        /** ActivityInfo beginTimeUTC */
        beginTimeUTC?: (number|null);

        /** ActivityInfo GrowFund */
        GrowFund?: (proto.IGrowFundData|null);

        /** ActivityInfo cardData */
        cardData?: (proto.IMonthAndWeekCardDataGroup|null);

        /** ActivityInfo unpackRebateInfo */
        unpackRebateInfo?: (proto.IUnpackRebateData|null);
    }

    /** Represents an ActivityInfo. */
    class ActivityInfo implements IActivityInfo {

        /**
         * Constructs a new ActivityInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IActivityInfo);

        /** ActivityInfo ID. */
        public ID: number;

        /** ActivityInfo endTimeUTC. */
        public endTimeUTC: number;

        /** ActivityInfo beginTimeUTC. */
        public beginTimeUTC: number;

        /** ActivityInfo GrowFund. */
        public GrowFund?: (proto.IGrowFundData|null);

        /** ActivityInfo cardData. */
        public cardData?: (proto.IMonthAndWeekCardDataGroup|null);

        /** ActivityInfo unpackRebateInfo. */
        public unpackRebateInfo?: (proto.IUnpackRebateData|null);

        /** ActivityInfo ActData. */
        public ActData?: ("GrowFund"|"cardData"|"unpackRebateInfo");

        /**
         * Encodes the specified ActivityInfo message. Does not implicitly {@link proto.ActivityInfo.verify|verify} messages.
         * @param m ActivityInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IActivityInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ActivityInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ActivityInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ActivityInfo;
    }

    /** Properties of a Msg_LimitActivityReq. */
    interface IMsg_LimitActivityReq {
    }

    /** Represents a Msg_LimitActivityReq. */
    class Msg_LimitActivityReq implements IMsg_LimitActivityReq {

        /**
         * Constructs a new Msg_LimitActivityReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LimitActivityReq);

        /**
         * Encodes the specified Msg_LimitActivityReq message. Does not implicitly {@link proto.Msg_LimitActivityReq.verify|verify} messages.
         * @param m Msg_LimitActivityReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LimitActivityReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LimitActivityReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LimitActivityReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LimitActivityReq;
    }

    /** Properties of a Msg_LimitActivityRsp. */
    interface IMsg_LimitActivityRsp {

        /** Msg_LimitActivityRsp openingActivities */
        openingActivities?: (proto.IActivityInfo[]|null);
    }

    /** Represents a Msg_LimitActivityRsp. */
    class Msg_LimitActivityRsp implements IMsg_LimitActivityRsp {

        /**
         * Constructs a new Msg_LimitActivityRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LimitActivityRsp);

        /** Msg_LimitActivityRsp openingActivities. */
        public openingActivities: proto.IActivityInfo[];

        /**
         * Encodes the specified Msg_LimitActivityRsp message. Does not implicitly {@link proto.Msg_LimitActivityRsp.verify|verify} messages.
         * @param m Msg_LimitActivityRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LimitActivityRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LimitActivityRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LimitActivityRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LimitActivityRsp;
    }

    /** Properties of a Msg_GrowFundGetAwardReq. */
    interface IMsg_GrowFundGetAwardReq {

        /** Msg_GrowFundGetAwardReq ID */
        ID?: (number|null);
    }

    /** Represents a Msg_GrowFundGetAwardReq. */
    class Msg_GrowFundGetAwardReq implements IMsg_GrowFundGetAwardReq {

        /**
         * Constructs a new Msg_GrowFundGetAwardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GrowFundGetAwardReq);

        /** Msg_GrowFundGetAwardReq ID. */
        public ID: number;

        /**
         * Encodes the specified Msg_GrowFundGetAwardReq message. Does not implicitly {@link proto.Msg_GrowFundGetAwardReq.verify|verify} messages.
         * @param m Msg_GrowFundGetAwardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GrowFundGetAwardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GrowFundGetAwardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GrowFundGetAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GrowFundGetAwardReq;
    }

    /** Properties of a Msg_GrowFundGetAwardRsp. */
    interface IMsg_GrowFundGetAwardRsp {

        /** Msg_GrowFundGetAwardRsp result */
        result?: (proto.Msg_GrowFundGetAwardRsp.ErrorCode|null);

        /** Msg_GrowFundGetAwardRsp info */
        info?: (proto.IGFCell|null);

        /** Msg_GrowFundGetAwardRsp Awards */
        Awards?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GrowFundGetAwardRsp. */
    class Msg_GrowFundGetAwardRsp implements IMsg_GrowFundGetAwardRsp {

        /**
         * Constructs a new Msg_GrowFundGetAwardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GrowFundGetAwardRsp);

        /** Msg_GrowFundGetAwardRsp result. */
        public result: proto.Msg_GrowFundGetAwardRsp.ErrorCode;

        /** Msg_GrowFundGetAwardRsp info. */
        public info?: (proto.IGFCell|null);

        /** Msg_GrowFundGetAwardRsp Awards. */
        public Awards: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GrowFundGetAwardRsp message. Does not implicitly {@link proto.Msg_GrowFundGetAwardRsp.verify|verify} messages.
         * @param m Msg_GrowFundGetAwardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GrowFundGetAwardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GrowFundGetAwardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GrowFundGetAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GrowFundGetAwardRsp;
    }

    namespace Msg_GrowFundGetAwardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a MembershipData. */
    interface IMembershipData {

        /** MembershipData MonthlyCardVaildTime */
        MonthlyCardVaildTime?: (number|Long|null);

        /** MembershipData MonthlyCardAwardTime */
        MonthlyCardAwardTime?: (number|Long|null);

        /** MembershipData LifetimeCardBuyTime */
        LifetimeCardBuyTime?: (number|Long|null);

        /** MembershipData LifetimeCardAwardTime */
        LifetimeCardAwardTime?: (number|Long|null);
    }

    /** Represents a MembershipData. */
    class MembershipData implements IMembershipData {

        /**
         * Constructs a new MembershipData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMembershipData);

        /** MembershipData MonthlyCardVaildTime. */
        public MonthlyCardVaildTime: (number|Long);

        /** MembershipData MonthlyCardAwardTime. */
        public MonthlyCardAwardTime: (number|Long);

        /** MembershipData LifetimeCardBuyTime. */
        public LifetimeCardBuyTime: (number|Long);

        /** MembershipData LifetimeCardAwardTime. */
        public LifetimeCardAwardTime: (number|Long);

        /**
         * Encodes the specified MembershipData message. Does not implicitly {@link proto.MembershipData.verify|verify} messages.
         * @param m MembershipData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMembershipData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MembershipData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MembershipData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MembershipData;
    }

    /** Properties of a Msg_GetMembershipRewardReq. */
    interface IMsg_GetMembershipRewardReq {

        /** Msg_GetMembershipRewardReq type */
        type?: (proto.Msg_GetMembershipRewardReq.Type|null);
    }

    /** Represents a Msg_GetMembershipRewardReq. */
    class Msg_GetMembershipRewardReq implements IMsg_GetMembershipRewardReq {

        /**
         * Constructs a new Msg_GetMembershipRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMembershipRewardReq);

        /** Msg_GetMembershipRewardReq type. */
        public type: proto.Msg_GetMembershipRewardReq.Type;

        /**
         * Encodes the specified Msg_GetMembershipRewardReq message. Does not implicitly {@link proto.Msg_GetMembershipRewardReq.verify|verify} messages.
         * @param m Msg_GetMembershipRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMembershipRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMembershipRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMembershipRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMembershipRewardReq;
    }

    namespace Msg_GetMembershipRewardReq {

        /** Type enum. */
        enum Type {
            Lifetime = 0,
            Monthly = 1,
            All = 2
        }
    }

    /** Properties of a Msg_GetMembershipRewardRsp. */
    interface IMsg_GetMembershipRewardRsp {

        /** Msg_GetMembershipRewardRsp Opt */
        Opt?: (proto.Msg_GetMembershipRewardRsp.Source|null);

        /** Msg_GetMembershipRewardRsp Result */
        Result?: (proto.Msg_GetMembershipRewardRsp.ErrorCode|null);

        /** Msg_GetMembershipRewardRsp Data */
        Data?: (proto.IMembershipData|null);

        /** Msg_GetMembershipRewardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetMembershipRewardRsp. */
    class Msg_GetMembershipRewardRsp implements IMsg_GetMembershipRewardRsp {

        /**
         * Constructs a new Msg_GetMembershipRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMembershipRewardRsp);

        /** Msg_GetMembershipRewardRsp Opt. */
        public Opt: proto.Msg_GetMembershipRewardRsp.Source;

        /** Msg_GetMembershipRewardRsp Result. */
        public Result: proto.Msg_GetMembershipRewardRsp.ErrorCode;

        /** Msg_GetMembershipRewardRsp Data. */
        public Data?: (proto.IMembershipData|null);

        /** Msg_GetMembershipRewardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetMembershipRewardRsp message. Does not implicitly {@link proto.Msg_GetMembershipRewardRsp.verify|verify} messages.
         * @param m Msg_GetMembershipRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMembershipRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMembershipRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMembershipRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMembershipRewardRsp;
    }

    namespace Msg_GetMembershipRewardRsp {

        /** Source enum. */
        enum Source {
            BuyMonthlyCard = 0,
            BuyLifetimeCard = 1,
            GetMonthlyReward = 2,
            GetLifetimeReward = 3,
            GetAllReward = 4
        }

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            LackMonthlyId = 1,
            GotMonthly = 2,
            LackLifetimeId = 3,
            GotLifetime = 4
        }
    }

    /** Properties of a Msg_ReceiveUnpackRebateCardReq. */
    interface IMsg_ReceiveUnpackRebateCardReq {

        /** Msg_ReceiveUnpackRebateCardReq selectCardID */
        selectCardID?: (number|null);
    }

    /** Represents a Msg_ReceiveUnpackRebateCardReq. */
    class Msg_ReceiveUnpackRebateCardReq implements IMsg_ReceiveUnpackRebateCardReq {

        /**
         * Constructs a new Msg_ReceiveUnpackRebateCardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveUnpackRebateCardReq);

        /** Msg_ReceiveUnpackRebateCardReq selectCardID. */
        public selectCardID: number;

        /**
         * Encodes the specified Msg_ReceiveUnpackRebateCardReq message. Does not implicitly {@link proto.Msg_ReceiveUnpackRebateCardReq.verify|verify} messages.
         * @param m Msg_ReceiveUnpackRebateCardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveUnpackRebateCardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveUnpackRebateCardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveUnpackRebateCardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveUnpackRebateCardReq;
    }

    /** Properties of a Msg_ReceiveUnpackRebateCardRsp. */
    interface IMsg_ReceiveUnpackRebateCardRsp {

        /** Msg_ReceiveUnpackRebateCardRsp result */
        result?: (proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode|null);

        /** Msg_ReceiveUnpackRebateCardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveUnpackRebateCardRsp. */
    class Msg_ReceiveUnpackRebateCardRsp implements IMsg_ReceiveUnpackRebateCardRsp {

        /**
         * Constructs a new Msg_ReceiveUnpackRebateCardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveUnpackRebateCardRsp);

        /** Msg_ReceiveUnpackRebateCardRsp result. */
        public result: proto.Msg_ReceiveUnpackRebateCardRsp.ErrorCode;

        /** Msg_ReceiveUnpackRebateCardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveUnpackRebateCardRsp message. Does not implicitly {@link proto.Msg_ReceiveUnpackRebateCardRsp.verify|verify} messages.
         * @param m Msg_ReceiveUnpackRebateCardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveUnpackRebateCardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveUnpackRebateCardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveUnpackRebateCardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveUnpackRebateCardRsp;
    }

    namespace Msg_ReceiveUnpackRebateCardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ReceiveCountNotEnough = 1
        }
    }

    /** Properties of a Msg_ActivityRechargeRsp. */
    interface IMsg_ActivityRechargeRsp {

        /** Msg_ActivityRechargeRsp result */
        result?: (proto.Msg_ActivityRechargeRsp.ErrorCode|null);

        /** Msg_ActivityRechargeRsp RechargeId */
        RechargeId?: (number|null);
    }

    /** Represents a Msg_ActivityRechargeRsp. */
    class Msg_ActivityRechargeRsp implements IMsg_ActivityRechargeRsp {

        /**
         * Constructs a new Msg_ActivityRechargeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ActivityRechargeRsp);

        /** Msg_ActivityRechargeRsp result. */
        public result: proto.Msg_ActivityRechargeRsp.ErrorCode;

        /** Msg_ActivityRechargeRsp RechargeId. */
        public RechargeId: number;

        /**
         * Encodes the specified Msg_ActivityRechargeRsp message. Does not implicitly {@link proto.Msg_ActivityRechargeRsp.verify|verify} messages.
         * @param m Msg_ActivityRechargeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ActivityRechargeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ActivityRechargeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ActivityRechargeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ActivityRechargeRsp;
    }

    namespace Msg_ActivityRechargeRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1,
            ActivityOver = 2
        }
    }

    /** Properties of a Msg_ChangeActivityRsp. */
    interface IMsg_ChangeActivityRsp {

        /** Msg_ChangeActivityRsp changeInfo */
        changeInfo?: (proto.IActivityInfo|null);
    }

    /** Represents a Msg_ChangeActivityRsp. */
    class Msg_ChangeActivityRsp implements IMsg_ChangeActivityRsp {

        /**
         * Constructs a new Msg_ChangeActivityRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeActivityRsp);

        /** Msg_ChangeActivityRsp changeInfo. */
        public changeInfo?: (proto.IActivityInfo|null);

        /**
         * Encodes the specified Msg_ChangeActivityRsp message. Does not implicitly {@link proto.Msg_ChangeActivityRsp.verify|verify} messages.
         * @param m Msg_ChangeActivityRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeActivityRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeActivityRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeActivityRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeActivityRsp;
    }

    /** Properties of a Msg_BoxAwardSelectReq. */
    interface IMsg_BoxAwardSelectReq {

        /** Msg_BoxAwardSelectReq boxIndex */
        boxIndex?: (number|null);

        /** Msg_BoxAwardSelectReq awardIndex */
        awardIndex?: (number|null);

        /** Msg_BoxAwardSelectReq selectIndex */
        selectIndex?: (number|null);
    }

    /** Represents a Msg_BoxAwardSelectReq. */
    class Msg_BoxAwardSelectReq implements IMsg_BoxAwardSelectReq {

        /**
         * Constructs a new Msg_BoxAwardSelectReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BoxAwardSelectReq);

        /** Msg_BoxAwardSelectReq boxIndex. */
        public boxIndex: number;

        /** Msg_BoxAwardSelectReq awardIndex. */
        public awardIndex: number;

        /** Msg_BoxAwardSelectReq selectIndex. */
        public selectIndex: number;

        /**
         * Encodes the specified Msg_BoxAwardSelectReq message. Does not implicitly {@link proto.Msg_BoxAwardSelectReq.verify|verify} messages.
         * @param m Msg_BoxAwardSelectReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BoxAwardSelectReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BoxAwardSelectReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BoxAwardSelectReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BoxAwardSelectReq;
    }

    /** Properties of a Msg_BoxAwardSelectRsp. */
    interface IMsg_BoxAwardSelectRsp {

        /** Msg_BoxAwardSelectRsp result */
        result?: (proto.Msg_BoxAwardSelectRsp.ErrorCode|null);

        /** Msg_BoxAwardSelectRsp award */
        award?: (proto.IRewardSimpleInfo|null);
    }

    /** Represents a Msg_BoxAwardSelectRsp. */
    class Msg_BoxAwardSelectRsp implements IMsg_BoxAwardSelectRsp {

        /**
         * Constructs a new Msg_BoxAwardSelectRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BoxAwardSelectRsp);

        /** Msg_BoxAwardSelectRsp result. */
        public result: proto.Msg_BoxAwardSelectRsp.ErrorCode;

        /** Msg_BoxAwardSelectRsp award. */
        public award?: (proto.IRewardSimpleInfo|null);

        /**
         * Encodes the specified Msg_BoxAwardSelectRsp message. Does not implicitly {@link proto.Msg_BoxAwardSelectRsp.verify|verify} messages.
         * @param m Msg_BoxAwardSelectRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BoxAwardSelectRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BoxAwardSelectRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BoxAwardSelectRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BoxAwardSelectRsp;
    }

    namespace Msg_BoxAwardSelectRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a Msg_DailyShareInviteReq. */
    interface IMsg_DailyShareInviteReq {
    }

    /** Represents a Msg_DailyShareInviteReq. */
    class Msg_DailyShareInviteReq implements IMsg_DailyShareInviteReq {

        /**
         * Constructs a new Msg_DailyShareInviteReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyShareInviteReq);

        /**
         * Encodes the specified Msg_DailyShareInviteReq message. Does not implicitly {@link proto.Msg_DailyShareInviteReq.verify|verify} messages.
         * @param m Msg_DailyShareInviteReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyShareInviteReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyShareInviteReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyShareInviteReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyShareInviteReq;
    }

    /** Properties of a Msg_DailyShareInviteRsp. */
    interface IMsg_DailyShareInviteRsp {

        /** Msg_DailyShareInviteRsp sharedFriends */
        sharedFriends?: (proto.ISharedFriends[]|null);

        /** Msg_DailyShareInviteRsp reward */
        reward?: (proto.IRewardSimpleInfo|null);

        /** Msg_DailyShareInviteRsp todayFinish */
        todayFinish?: (boolean|null);
    }

    /** Represents a Msg_DailyShareInviteRsp. */
    class Msg_DailyShareInviteRsp implements IMsg_DailyShareInviteRsp {

        /**
         * Constructs a new Msg_DailyShareInviteRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyShareInviteRsp);

        /** Msg_DailyShareInviteRsp sharedFriends. */
        public sharedFriends: proto.ISharedFriends[];

        /** Msg_DailyShareInviteRsp reward. */
        public reward?: (proto.IRewardSimpleInfo|null);

        /** Msg_DailyShareInviteRsp todayFinish. */
        public todayFinish: boolean;

        /**
         * Encodes the specified Msg_DailyShareInviteRsp message. Does not implicitly {@link proto.Msg_DailyShareInviteRsp.verify|verify} messages.
         * @param m Msg_DailyShareInviteRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyShareInviteRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyShareInviteRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyShareInviteRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyShareInviteRsp;
    }

    /** Properties of a Msg_GetDailyShareInviteRewardReq. */
    interface IMsg_GetDailyShareInviteRewardReq {
    }

    /** Represents a Msg_GetDailyShareInviteRewardReq. */
    class Msg_GetDailyShareInviteRewardReq implements IMsg_GetDailyShareInviteRewardReq {

        /**
         * Constructs a new Msg_GetDailyShareInviteRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyShareInviteRewardReq);

        /**
         * Encodes the specified Msg_GetDailyShareInviteRewardReq message. Does not implicitly {@link proto.Msg_GetDailyShareInviteRewardReq.verify|verify} messages.
         * @param m Msg_GetDailyShareInviteRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyShareInviteRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyShareInviteRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyShareInviteRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyShareInviteRewardReq;
    }

    /** Properties of a Msg_GetDailyShareInviteRewardRsp. */
    interface IMsg_GetDailyShareInviteRewardRsp {

        /** Msg_GetDailyShareInviteRewardRsp result */
        result?: (proto.Msg_GetDailyShareInviteRewardRsp.ErrorCode|null);

        /** Msg_GetDailyShareInviteRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetDailyShareInviteRewardRsp. */
    class Msg_GetDailyShareInviteRewardRsp implements IMsg_GetDailyShareInviteRewardRsp {

        /**
         * Constructs a new Msg_GetDailyShareInviteRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyShareInviteRewardRsp);

        /** Msg_GetDailyShareInviteRewardRsp result. */
        public result: proto.Msg_GetDailyShareInviteRewardRsp.ErrorCode;

        /** Msg_GetDailyShareInviteRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetDailyShareInviteRewardRsp message. Does not implicitly {@link proto.Msg_GetDailyShareInviteRewardRsp.verify|verify} messages.
         * @param m Msg_GetDailyShareInviteRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyShareInviteRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyShareInviteRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyShareInviteRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyShareInviteRewardRsp;
    }

    namespace Msg_GetDailyShareInviteRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a Msg_PushDailyShareInviteTips. */
    interface IMsg_PushDailyShareInviteTips {

        /** Msg_PushDailyShareInviteTips bHave */
        bHave?: (boolean|null);
    }

    /** Represents a Msg_PushDailyShareInviteTips. */
    class Msg_PushDailyShareInviteTips implements IMsg_PushDailyShareInviteTips {

        /**
         * Constructs a new Msg_PushDailyShareInviteTips.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushDailyShareInviteTips);

        /** Msg_PushDailyShareInviteTips bHave. */
        public bHave: boolean;

        /**
         * Encodes the specified Msg_PushDailyShareInviteTips message. Does not implicitly {@link proto.Msg_PushDailyShareInviteTips.verify|verify} messages.
         * @param m Msg_PushDailyShareInviteTips message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushDailyShareInviteTips, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushDailyShareInviteTips message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushDailyShareInviteTips
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushDailyShareInviteTips;
    }

    /** Properties of a Msg_LookADAddBoxSpeedUpTimeInfoReq. */
    interface IMsg_LookADAddBoxSpeedUpTimeInfoReq {
    }

    /** Represents a Msg_LookADAddBoxSpeedUpTimeInfoReq. */
    class Msg_LookADAddBoxSpeedUpTimeInfoReq implements IMsg_LookADAddBoxSpeedUpTimeInfoReq {

        /**
         * Constructs a new Msg_LookADAddBoxSpeedUpTimeInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LookADAddBoxSpeedUpTimeInfoReq);

        /**
         * Encodes the specified Msg_LookADAddBoxSpeedUpTimeInfoReq message. Does not implicitly {@link proto.Msg_LookADAddBoxSpeedUpTimeInfoReq.verify|verify} messages.
         * @param m Msg_LookADAddBoxSpeedUpTimeInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LookADAddBoxSpeedUpTimeInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LookADAddBoxSpeedUpTimeInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LookADAddBoxSpeedUpTimeInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LookADAddBoxSpeedUpTimeInfoReq;
    }

    /** Properties of a Msg_LookADAddBoxSpeedUpTimeInfoRsp. */
    interface IMsg_LookADAddBoxSpeedUpTimeInfoRsp {

        /** Msg_LookADAddBoxSpeedUpTimeInfoRsp result */
        result?: (proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp.ErrorCode|null);

        /** Msg_LookADAddBoxSpeedUpTimeInfoRsp times */
        times?: (number|null);
    }

    /** Represents a Msg_LookADAddBoxSpeedUpTimeInfoRsp. */
    class Msg_LookADAddBoxSpeedUpTimeInfoRsp implements IMsg_LookADAddBoxSpeedUpTimeInfoRsp {

        /**
         * Constructs a new Msg_LookADAddBoxSpeedUpTimeInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LookADAddBoxSpeedUpTimeInfoRsp);

        /** Msg_LookADAddBoxSpeedUpTimeInfoRsp result. */
        public result: proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp.ErrorCode;

        /** Msg_LookADAddBoxSpeedUpTimeInfoRsp times. */
        public times: number;

        /**
         * Encodes the specified Msg_LookADAddBoxSpeedUpTimeInfoRsp message. Does not implicitly {@link proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp.verify|verify} messages.
         * @param m Msg_LookADAddBoxSpeedUpTimeInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LookADAddBoxSpeedUpTimeInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LookADAddBoxSpeedUpTimeInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LookADAddBoxSpeedUpTimeInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LookADAddBoxSpeedUpTimeInfoRsp;
    }

    namespace Msg_LookADAddBoxSpeedUpTimeInfoRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a Msg_LookADAddBoxSpeedUpTimeReq. */
    interface IMsg_LookADAddBoxSpeedUpTimeReq {
    }

    /** Represents a Msg_LookADAddBoxSpeedUpTimeReq. */
    class Msg_LookADAddBoxSpeedUpTimeReq implements IMsg_LookADAddBoxSpeedUpTimeReq {

        /**
         * Constructs a new Msg_LookADAddBoxSpeedUpTimeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LookADAddBoxSpeedUpTimeReq);

        /**
         * Encodes the specified Msg_LookADAddBoxSpeedUpTimeReq message. Does not implicitly {@link proto.Msg_LookADAddBoxSpeedUpTimeReq.verify|verify} messages.
         * @param m Msg_LookADAddBoxSpeedUpTimeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LookADAddBoxSpeedUpTimeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LookADAddBoxSpeedUpTimeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LookADAddBoxSpeedUpTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LookADAddBoxSpeedUpTimeReq;
    }

    /** Properties of a Msg_LookADAddBoxSpeedUpTimeRsp. */
    interface IMsg_LookADAddBoxSpeedUpTimeRsp {

        /** Msg_LookADAddBoxSpeedUpTimeRsp result */
        result?: (proto.Msg_LookADAddBoxSpeedUpTimeRsp.ErrorCode|null);

        /** Msg_LookADAddBoxSpeedUpTimeRsp times */
        times?: (number|null);

        /** Msg_LookADAddBoxSpeedUpTimeRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_LookADAddBoxSpeedUpTimeRsp. */
    class Msg_LookADAddBoxSpeedUpTimeRsp implements IMsg_LookADAddBoxSpeedUpTimeRsp {

        /**
         * Constructs a new Msg_LookADAddBoxSpeedUpTimeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LookADAddBoxSpeedUpTimeRsp);

        /** Msg_LookADAddBoxSpeedUpTimeRsp result. */
        public result: proto.Msg_LookADAddBoxSpeedUpTimeRsp.ErrorCode;

        /** Msg_LookADAddBoxSpeedUpTimeRsp times. */
        public times: number;

        /** Msg_LookADAddBoxSpeedUpTimeRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_LookADAddBoxSpeedUpTimeRsp message. Does not implicitly {@link proto.Msg_LookADAddBoxSpeedUpTimeRsp.verify|verify} messages.
         * @param m Msg_LookADAddBoxSpeedUpTimeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LookADAddBoxSpeedUpTimeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LookADAddBoxSpeedUpTimeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LookADAddBoxSpeedUpTimeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LookADAddBoxSpeedUpTimeRsp;
    }

    namespace Msg_LookADAddBoxSpeedUpTimeRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a Msg_GetOneYuanToBuyInfoReq. */
    interface IMsg_GetOneYuanToBuyInfoReq {
    }

    /** Represents a Msg_GetOneYuanToBuyInfoReq. */
    class Msg_GetOneYuanToBuyInfoReq implements IMsg_GetOneYuanToBuyInfoReq {

        /**
         * Constructs a new Msg_GetOneYuanToBuyInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetOneYuanToBuyInfoReq);

        /**
         * Encodes the specified Msg_GetOneYuanToBuyInfoReq message. Does not implicitly {@link proto.Msg_GetOneYuanToBuyInfoReq.verify|verify} messages.
         * @param m Msg_GetOneYuanToBuyInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetOneYuanToBuyInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetOneYuanToBuyInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetOneYuanToBuyInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetOneYuanToBuyInfoReq;
    }

    /** Properties of a Msg_GetOneYuanToBuyInfoRsp. */
    interface IMsg_GetOneYuanToBuyInfoRsp {

        /** Msg_GetOneYuanToBuyInfoRsp buy */
        buy?: (boolean|null);

        /** Msg_GetOneYuanToBuyInfoRsp overTimes */
        overTimes?: (number|null);

        /** Msg_GetOneYuanToBuyInfoRsp rewardList */
        rewardList?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetOneYuanToBuyInfoRsp. */
    class Msg_GetOneYuanToBuyInfoRsp implements IMsg_GetOneYuanToBuyInfoRsp {

        /**
         * Constructs a new Msg_GetOneYuanToBuyInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetOneYuanToBuyInfoRsp);

        /** Msg_GetOneYuanToBuyInfoRsp buy. */
        public buy: boolean;

        /** Msg_GetOneYuanToBuyInfoRsp overTimes. */
        public overTimes: number;

        /** Msg_GetOneYuanToBuyInfoRsp rewardList. */
        public rewardList: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetOneYuanToBuyInfoRsp message. Does not implicitly {@link proto.Msg_GetOneYuanToBuyInfoRsp.verify|verify} messages.
         * @param m Msg_GetOneYuanToBuyInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetOneYuanToBuyInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetOneYuanToBuyInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetOneYuanToBuyInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetOneYuanToBuyInfoRsp;
    }

    /** Properties of a Msg_ReceiveOneYuanRewardReq. */
    interface IMsg_ReceiveOneYuanRewardReq {
    }

    /** Represents a Msg_ReceiveOneYuanRewardReq. */
    class Msg_ReceiveOneYuanRewardReq implements IMsg_ReceiveOneYuanRewardReq {

        /**
         * Constructs a new Msg_ReceiveOneYuanRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveOneYuanRewardReq);

        /**
         * Encodes the specified Msg_ReceiveOneYuanRewardReq message. Does not implicitly {@link proto.Msg_ReceiveOneYuanRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveOneYuanRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveOneYuanRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveOneYuanRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveOneYuanRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveOneYuanRewardReq;
    }

    /** Properties of a Msg_ReceiveOneYuanRewardRsp. */
    interface IMsg_ReceiveOneYuanRewardRsp {

        /** Msg_ReceiveOneYuanRewardRsp result */
        result?: (proto.Msg_ReceiveOneYuanRewardRsp.ErrorCode|null);

        /** Msg_ReceiveOneYuanRewardRsp rewardList */
        rewardList?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveOneYuanRewardRsp. */
    class Msg_ReceiveOneYuanRewardRsp implements IMsg_ReceiveOneYuanRewardRsp {

        /**
         * Constructs a new Msg_ReceiveOneYuanRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveOneYuanRewardRsp);

        /** Msg_ReceiveOneYuanRewardRsp result. */
        public result: proto.Msg_ReceiveOneYuanRewardRsp.ErrorCode;

        /** Msg_ReceiveOneYuanRewardRsp rewardList. */
        public rewardList: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveOneYuanRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveOneYuanRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveOneYuanRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveOneYuanRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveOneYuanRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveOneYuanRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveOneYuanRewardRsp;
    }

    namespace Msg_ReceiveOneYuanRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceived = 1,
            ActivityOver = 2,
            ScoreShortage = 3
        }
    }

    /** BuyAVDType enum. */
    enum BuyAVDType {
        BuyAVDNone = 0,
        BuyAVDItem = 1,
        BuyAVDGold = 2
    }

    /** Properties of a Msg_CostSomeThingToGetAvdRewardReq. */
    interface IMsg_CostSomeThingToGetAvdRewardReq {

        /** Msg_CostSomeThingToGetAvdRewardReq ntype */
        ntype?: (proto.BuyAVDType|null);
    }

    /** Represents a Msg_CostSomeThingToGetAvdRewardReq. */
    class Msg_CostSomeThingToGetAvdRewardReq implements IMsg_CostSomeThingToGetAvdRewardReq {

        /**
         * Constructs a new Msg_CostSomeThingToGetAvdRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CostSomeThingToGetAvdRewardReq);

        /** Msg_CostSomeThingToGetAvdRewardReq ntype. */
        public ntype: proto.BuyAVDType;

        /**
         * Encodes the specified Msg_CostSomeThingToGetAvdRewardReq message. Does not implicitly {@link proto.Msg_CostSomeThingToGetAvdRewardReq.verify|verify} messages.
         * @param m Msg_CostSomeThingToGetAvdRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CostSomeThingToGetAvdRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CostSomeThingToGetAvdRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CostSomeThingToGetAvdRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CostSomeThingToGetAvdRewardReq;
    }

    /** Properties of a Msg_CostSomeThingToGetAvdRewardRsp. */
    interface IMsg_CostSomeThingToGetAvdRewardRsp {

        /** Msg_CostSomeThingToGetAvdRewardRsp result */
        result?: (proto.Msg_CostSomeThingToGetAvdRewardRsp.ErrorCode|null);
    }

    /** Represents a Msg_CostSomeThingToGetAvdRewardRsp. */
    class Msg_CostSomeThingToGetAvdRewardRsp implements IMsg_CostSomeThingToGetAvdRewardRsp {

        /**
         * Constructs a new Msg_CostSomeThingToGetAvdRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CostSomeThingToGetAvdRewardRsp);

        /** Msg_CostSomeThingToGetAvdRewardRsp result. */
        public result: proto.Msg_CostSomeThingToGetAvdRewardRsp.ErrorCode;

        /**
         * Encodes the specified Msg_CostSomeThingToGetAvdRewardRsp message. Does not implicitly {@link proto.Msg_CostSomeThingToGetAvdRewardRsp.verify|verify} messages.
         * @param m Msg_CostSomeThingToGetAvdRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CostSomeThingToGetAvdRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CostSomeThingToGetAvdRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CostSomeThingToGetAvdRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CostSomeThingToGetAvdRewardRsp;
    }

    namespace Msg_CostSomeThingToGetAvdRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Fail = 1
        }
    }

    /** Properties of a Msg_SharePointEventReported. */
    interface IMsg_SharePointEventReported {

        /** Msg_SharePointEventReported shareDesc */
        shareDesc?: (string|null);

        /** Msg_SharePointEventReported shareType */
        shareType?: (number|null);
    }

    /** Represents a Msg_SharePointEventReported. */
    class Msg_SharePointEventReported implements IMsg_SharePointEventReported {

        /**
         * Constructs a new Msg_SharePointEventReported.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SharePointEventReported);

        /** Msg_SharePointEventReported shareDesc. */
        public shareDesc: string;

        /** Msg_SharePointEventReported shareType. */
        public shareType: number;

        /**
         * Encodes the specified Msg_SharePointEventReported message. Does not implicitly {@link proto.Msg_SharePointEventReported.verify|verify} messages.
         * @param m Msg_SharePointEventReported message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SharePointEventReported, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SharePointEventReported message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SharePointEventReported
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SharePointEventReported;
    }

    /** Properties of a Msg_GetDiscountsGiftBagInfoReq. */
    interface IMsg_GetDiscountsGiftBagInfoReq {
    }

    /** Represents a Msg_GetDiscountsGiftBagInfoReq. */
    class Msg_GetDiscountsGiftBagInfoReq implements IMsg_GetDiscountsGiftBagInfoReq {

        /**
         * Constructs a new Msg_GetDiscountsGiftBagInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDiscountsGiftBagInfoReq);

        /**
         * Encodes the specified Msg_GetDiscountsGiftBagInfoReq message. Does not implicitly {@link proto.Msg_GetDiscountsGiftBagInfoReq.verify|verify} messages.
         * @param m Msg_GetDiscountsGiftBagInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDiscountsGiftBagInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDiscountsGiftBagInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDiscountsGiftBagInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDiscountsGiftBagInfoReq;
    }

    /** Properties of a Msg_GetDiscountsGiftBagInfoRsp. */
    interface IMsg_GetDiscountsGiftBagInfoRsp {

        /** Msg_GetDiscountsGiftBagInfoRsp bBought */
        bBought?: (boolean|null);

        /** Msg_GetDiscountsGiftBagInfoRsp overTimes */
        overTimes?: (number|null);

        /** Msg_GetDiscountsGiftBagInfoRsp rechargeID */
        rechargeID?: (number|null);

        /** Msg_GetDiscountsGiftBagInfoRsp discountsNum */
        discountsNum?: (number|null);

        /** Msg_GetDiscountsGiftBagInfoRsp rewardList */
        rewardList?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetDiscountsGiftBagInfoRsp. */
    class Msg_GetDiscountsGiftBagInfoRsp implements IMsg_GetDiscountsGiftBagInfoRsp {

        /**
         * Constructs a new Msg_GetDiscountsGiftBagInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDiscountsGiftBagInfoRsp);

        /** Msg_GetDiscountsGiftBagInfoRsp bBought. */
        public bBought: boolean;

        /** Msg_GetDiscountsGiftBagInfoRsp overTimes. */
        public overTimes: number;

        /** Msg_GetDiscountsGiftBagInfoRsp rechargeID. */
        public rechargeID: number;

        /** Msg_GetDiscountsGiftBagInfoRsp discountsNum. */
        public discountsNum: number;

        /** Msg_GetDiscountsGiftBagInfoRsp rewardList. */
        public rewardList: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetDiscountsGiftBagInfoRsp message. Does not implicitly {@link proto.Msg_GetDiscountsGiftBagInfoRsp.verify|verify} messages.
         * @param m Msg_GetDiscountsGiftBagInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDiscountsGiftBagInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDiscountsGiftBagInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDiscountsGiftBagInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDiscountsGiftBagInfoRsp;
    }

    /** Properties of a Msg_ReceiveDiscountsGiftBagRewardReq. */
    interface IMsg_ReceiveDiscountsGiftBagRewardReq {
    }

    /** Represents a Msg_ReceiveDiscountsGiftBagRewardReq. */
    class Msg_ReceiveDiscountsGiftBagRewardReq implements IMsg_ReceiveDiscountsGiftBagRewardReq {

        /**
         * Constructs a new Msg_ReceiveDiscountsGiftBagRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDiscountsGiftBagRewardReq);

        /**
         * Encodes the specified Msg_ReceiveDiscountsGiftBagRewardReq message. Does not implicitly {@link proto.Msg_ReceiveDiscountsGiftBagRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveDiscountsGiftBagRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDiscountsGiftBagRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDiscountsGiftBagRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDiscountsGiftBagRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDiscountsGiftBagRewardReq;
    }

    /** Properties of a Msg_ReceiveDiscountsGiftBagRewardRsp. */
    interface IMsg_ReceiveDiscountsGiftBagRewardRsp {

        /** Msg_ReceiveDiscountsGiftBagRewardRsp result */
        result?: (proto.Msg_ReceiveDiscountsGiftBagRewardRsp.ErrorCode|null);

        /** Msg_ReceiveDiscountsGiftBagRewardRsp rewardList */
        rewardList?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveDiscountsGiftBagRewardRsp. */
    class Msg_ReceiveDiscountsGiftBagRewardRsp implements IMsg_ReceiveDiscountsGiftBagRewardRsp {

        /**
         * Constructs a new Msg_ReceiveDiscountsGiftBagRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDiscountsGiftBagRewardRsp);

        /** Msg_ReceiveDiscountsGiftBagRewardRsp result. */
        public result: proto.Msg_ReceiveDiscountsGiftBagRewardRsp.ErrorCode;

        /** Msg_ReceiveDiscountsGiftBagRewardRsp rewardList. */
        public rewardList: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveDiscountsGiftBagRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveDiscountsGiftBagRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveDiscountsGiftBagRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDiscountsGiftBagRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDiscountsGiftBagRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDiscountsGiftBagRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDiscountsGiftBagRewardRsp;
    }

    namespace Msg_ReceiveDiscountsGiftBagRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceived = 1,
            ActivityOver = 2,
            FirstOneYuanBuy = 3,
            FunctionNoOpen = 4
        }
    }

    /** HLTaskType enum. */
    enum HLTaskType {
        Award = 0,
        GetNormalAward = 1,
        TaskOpen = 2,
        GetADAward = 3
    }

    /** Properties of a HeroLoadTaskCell. */
    interface IHeroLoadTaskCell {

        /** HeroLoadTaskCell taskID */
        taskID?: (number|null);

        /** HeroLoadTaskCell taskProgress */
        taskProgress?: (number|null);

        /** HeroLoadTaskCell state */
        state?: (proto.HLTaskType|null);
    }

    /** Represents a HeroLoadTaskCell. */
    class HeroLoadTaskCell implements IHeroLoadTaskCell {

        /**
         * Constructs a new HeroLoadTaskCell.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHeroLoadTaskCell);

        /** HeroLoadTaskCell taskID. */
        public taskID: number;

        /** HeroLoadTaskCell taskProgress. */
        public taskProgress: number;

        /** HeroLoadTaskCell state. */
        public state: proto.HLTaskType;

        /**
         * Encodes the specified HeroLoadTaskCell message. Does not implicitly {@link proto.HeroLoadTaskCell.verify|verify} messages.
         * @param m HeroLoadTaskCell message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHeroLoadTaskCell, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroLoadTaskCell message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeroLoadTaskCell
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HeroLoadTaskCell;
    }

    /** Properties of a HeroLoadTaskDay. */
    interface IHeroLoadTaskDay {

        /** HeroLoadTaskDay tasks */
        tasks?: (proto.IHeroLoadTaskCell[]|null);
    }

    /** Represents a HeroLoadTaskDay. */
    class HeroLoadTaskDay implements IHeroLoadTaskDay {

        /**
         * Constructs a new HeroLoadTaskDay.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHeroLoadTaskDay);

        /** HeroLoadTaskDay tasks. */
        public tasks: proto.IHeroLoadTaskCell[];

        /**
         * Encodes the specified HeroLoadTaskDay message. Does not implicitly {@link proto.HeroLoadTaskDay.verify|verify} messages.
         * @param m HeroLoadTaskDay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHeroLoadTaskDay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroLoadTaskDay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeroLoadTaskDay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HeroLoadTaskDay;
    }

    /** Properties of a Msg_HeroLoadTaskListReq. */
    interface IMsg_HeroLoadTaskListReq {
    }

    /** Represents a Msg_HeroLoadTaskListReq. */
    class Msg_HeroLoadTaskListReq implements IMsg_HeroLoadTaskListReq {

        /**
         * Constructs a new Msg_HeroLoadTaskListReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_HeroLoadTaskListReq);

        /**
         * Encodes the specified Msg_HeroLoadTaskListReq message. Does not implicitly {@link proto.Msg_HeroLoadTaskListReq.verify|verify} messages.
         * @param m Msg_HeroLoadTaskListReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_HeroLoadTaskListReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_HeroLoadTaskListReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_HeroLoadTaskListReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HeroLoadTaskListReq;
    }

    /** Properties of a Msg_HeroLoadTaskListRsp. */
    interface IMsg_HeroLoadTaskListRsp {

        /** Msg_HeroLoadTaskListRsp tasks */
        tasks?: (proto.IHeroLoadTaskCell[]|null);

        /** Msg_HeroLoadTaskListRsp score */
        score?: (number|null);

        /** Msg_HeroLoadTaskListRsp alreadyGetIDList */
        alreadyGetIDList?: (number[]|null);

        /** Msg_HeroLoadTaskListRsp endUTC */
        endUTC?: (number|null);

        /** Msg_HeroLoadTaskListRsp unlockDay */
        unlockDay?: (number|null);
    }

    /** Represents a Msg_HeroLoadTaskListRsp. */
    class Msg_HeroLoadTaskListRsp implements IMsg_HeroLoadTaskListRsp {

        /**
         * Constructs a new Msg_HeroLoadTaskListRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_HeroLoadTaskListRsp);

        /** Msg_HeroLoadTaskListRsp tasks. */
        public tasks: proto.IHeroLoadTaskCell[];

        /** Msg_HeroLoadTaskListRsp score. */
        public score: number;

        /** Msg_HeroLoadTaskListRsp alreadyGetIDList. */
        public alreadyGetIDList: number[];

        /** Msg_HeroLoadTaskListRsp endUTC. */
        public endUTC: number;

        /** Msg_HeroLoadTaskListRsp unlockDay. */
        public unlockDay: number;

        /**
         * Encodes the specified Msg_HeroLoadTaskListRsp message. Does not implicitly {@link proto.Msg_HeroLoadTaskListRsp.verify|verify} messages.
         * @param m Msg_HeroLoadTaskListRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_HeroLoadTaskListRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_HeroLoadTaskListRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_HeroLoadTaskListRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HeroLoadTaskListRsp;
    }

    /** HLAwardType enum. */
    enum HLAwardType {
        NormalTaskType = 0,
        ADTaskType = 1
    }

    /** Properties of a Msg_ReceiveHeroLoadTaskRewardReq. */
    interface IMsg_ReceiveHeroLoadTaskRewardReq {

        /** Msg_ReceiveHeroLoadTaskRewardReq taskId */
        taskId?: (number|null);

        /** Msg_ReceiveHeroLoadTaskRewardReq ntype */
        ntype?: (proto.HLAwardType|null);
    }

    /** Represents a Msg_ReceiveHeroLoadTaskRewardReq. */
    class Msg_ReceiveHeroLoadTaskRewardReq implements IMsg_ReceiveHeroLoadTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveHeroLoadTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroLoadTaskRewardReq);

        /** Msg_ReceiveHeroLoadTaskRewardReq taskId. */
        public taskId: number;

        /** Msg_ReceiveHeroLoadTaskRewardReq ntype. */
        public ntype: proto.HLAwardType;

        /**
         * Encodes the specified Msg_ReceiveHeroLoadTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveHeroLoadTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveHeroLoadTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroLoadTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroLoadTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroLoadTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroLoadTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveHeroLoadTaskRewardRsp. */
    interface IMsg_ReceiveHeroLoadTaskRewardRsp {

        /** Msg_ReceiveHeroLoadTaskRewardRsp result */
        result?: (proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode|null);

        /** Msg_ReceiveHeroLoadTaskRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ReceiveHeroLoadTaskRewardRsp taskCells */
        taskCells?: (proto.IHeroLoadTaskCell|null);

        /** Msg_ReceiveHeroLoadTaskRewardRsp endUTC */
        endUTC?: (number|null);

        /** Msg_ReceiveHeroLoadTaskRewardRsp HLScore */
        HLScore?: (number|null);
    }

    /** Represents a Msg_ReceiveHeroLoadTaskRewardRsp. */
    class Msg_ReceiveHeroLoadTaskRewardRsp implements IMsg_ReceiveHeroLoadTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveHeroLoadTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroLoadTaskRewardRsp);

        /** Msg_ReceiveHeroLoadTaskRewardRsp result. */
        public result: proto.Msg_ReceiveHeroLoadTaskRewardRsp.ErrorCode;

        /** Msg_ReceiveHeroLoadTaskRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_ReceiveHeroLoadTaskRewardRsp taskCells. */
        public taskCells?: (proto.IHeroLoadTaskCell|null);

        /** Msg_ReceiveHeroLoadTaskRewardRsp endUTC. */
        public endUTC: number;

        /** Msg_ReceiveHeroLoadTaskRewardRsp HLScore. */
        public HLScore: number;

        /**
         * Encodes the specified Msg_ReceiveHeroLoadTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveHeroLoadTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveHeroLoadTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroLoadTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroLoadTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroLoadTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroLoadTaskRewardRsp;
    }

    namespace Msg_ReceiveHeroLoadTaskRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TaskInExistence = 1,
            TaskUnOpen = 2,
            AlreadyReceived = 3
        }
    }

    /** Properties of a Msg_ReceiveHeroLoadTaskStepRewardReq. */
    interface IMsg_ReceiveHeroLoadTaskStepRewardReq {

        /** Msg_ReceiveHeroLoadTaskStepRewardReq scoreID */
        scoreID?: (number|null);
    }

    /** Represents a Msg_ReceiveHeroLoadTaskStepRewardReq. */
    class Msg_ReceiveHeroLoadTaskStepRewardReq implements IMsg_ReceiveHeroLoadTaskStepRewardReq {

        /**
         * Constructs a new Msg_ReceiveHeroLoadTaskStepRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroLoadTaskStepRewardReq);

        /** Msg_ReceiveHeroLoadTaskStepRewardReq scoreID. */
        public scoreID: number;

        /**
         * Encodes the specified Msg_ReceiveHeroLoadTaskStepRewardReq message. Does not implicitly {@link proto.Msg_ReceiveHeroLoadTaskStepRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveHeroLoadTaskStepRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroLoadTaskStepRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroLoadTaskStepRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroLoadTaskStepRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroLoadTaskStepRewardReq;
    }

    /** Properties of a Msg_ReceiveHeroLoadTaskStepRewardRsp. */
    interface IMsg_ReceiveHeroLoadTaskStepRewardRsp {

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp result */
        result?: (proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.ErrorCode|null);

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp reward */
        reward?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp scoreID */
        scoreID?: (number|null);

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp endUTC */
        endUTC?: (number|null);
    }

    /** Represents a Msg_ReceiveHeroLoadTaskStepRewardRsp. */
    class Msg_ReceiveHeroLoadTaskStepRewardRsp implements IMsg_ReceiveHeroLoadTaskStepRewardRsp {

        /**
         * Constructs a new Msg_ReceiveHeroLoadTaskStepRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroLoadTaskStepRewardRsp);

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp result. */
        public result: proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.ErrorCode;

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp reward. */
        public reward: proto.IRewardSimpleInfo[];

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp scoreID. */
        public scoreID: number;

        /** Msg_ReceiveHeroLoadTaskStepRewardRsp endUTC. */
        public endUTC: number;

        /**
         * Encodes the specified Msg_ReceiveHeroLoadTaskStepRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveHeroLoadTaskStepRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveHeroLoadTaskStepRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroLoadTaskStepRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroLoadTaskStepRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroLoadTaskStepRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroLoadTaskStepRewardRsp;
    }

    namespace Msg_ReceiveHeroLoadTaskStepRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            UnFinishTaskStep = 1,
            AlreadyReceived = 2
        }
    }

    /** Properties of a Msg_PushHeroLoadTaskUpate. */
    interface IMsg_PushHeroLoadTaskUpate {

        /** Msg_PushHeroLoadTaskUpate tasks */
        tasks?: (proto.IHeroLoadTaskCell[]|null);
    }

    /** Represents a Msg_PushHeroLoadTaskUpate. */
    class Msg_PushHeroLoadTaskUpate implements IMsg_PushHeroLoadTaskUpate {

        /**
         * Constructs a new Msg_PushHeroLoadTaskUpate.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushHeroLoadTaskUpate);

        /** Msg_PushHeroLoadTaskUpate tasks. */
        public tasks: proto.IHeroLoadTaskCell[];

        /**
         * Encodes the specified Msg_PushHeroLoadTaskUpate message. Does not implicitly {@link proto.Msg_PushHeroLoadTaskUpate.verify|verify} messages.
         * @param m Msg_PushHeroLoadTaskUpate message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushHeroLoadTaskUpate, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushHeroLoadTaskUpate message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushHeroLoadTaskUpate
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushHeroLoadTaskUpate;
    }

    /** Properties of a QuestionnaireSurveyData. */
    interface IQuestionnaireSurveyData {

        /** QuestionnaireSurveyData ID */
        ID?: (number|null);

        /** QuestionnaireSurveyData answers */
        answers?: ({ [k: string]: string }|null);
    }

    /** Represents a QuestionnaireSurveyData. */
    class QuestionnaireSurveyData implements IQuestionnaireSurveyData {

        /**
         * Constructs a new QuestionnaireSurveyData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IQuestionnaireSurveyData);

        /** QuestionnaireSurveyData ID. */
        public ID: number;

        /** QuestionnaireSurveyData answers. */
        public answers: { [k: string]: string };

        /**
         * Encodes the specified QuestionnaireSurveyData message. Does not implicitly {@link proto.QuestionnaireSurveyData.verify|verify} messages.
         * @param m QuestionnaireSurveyData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IQuestionnaireSurveyData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a QuestionnaireSurveyData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns QuestionnaireSurveyData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.QuestionnaireSurveyData;
    }

    /** Properties of a Msg_GetQuestionReq. */
    interface IMsg_GetQuestionReq {
    }

    /** Represents a Msg_GetQuestionReq. */
    class Msg_GetQuestionReq implements IMsg_GetQuestionReq {

        /**
         * Constructs a new Msg_GetQuestionReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetQuestionReq);

        /**
         * Encodes the specified Msg_GetQuestionReq message. Does not implicitly {@link proto.Msg_GetQuestionReq.verify|verify} messages.
         * @param m Msg_GetQuestionReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetQuestionReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetQuestionReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetQuestionReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetQuestionReq;
    }

    /** Properties of a Msg_GetQuestionRsp. */
    interface IMsg_GetQuestionRsp {

        /** Msg_GetQuestionRsp bReceivedReward */
        bReceivedReward?: (boolean|null);

        /** Msg_GetQuestionRsp startUTC */
        startUTC?: (number|null);

        /** Msg_GetQuestionRsp overUTC */
        overUTC?: (number|null);
    }

    /** Represents a Msg_GetQuestionRsp. */
    class Msg_GetQuestionRsp implements IMsg_GetQuestionRsp {

        /**
         * Constructs a new Msg_GetQuestionRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetQuestionRsp);

        /** Msg_GetQuestionRsp bReceivedReward. */
        public bReceivedReward: boolean;

        /** Msg_GetQuestionRsp startUTC. */
        public startUTC: number;

        /** Msg_GetQuestionRsp overUTC. */
        public overUTC: number;

        /**
         * Encodes the specified Msg_GetQuestionRsp message. Does not implicitly {@link proto.Msg_GetQuestionRsp.verify|verify} messages.
         * @param m Msg_GetQuestionRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetQuestionRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetQuestionRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetQuestionRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetQuestionRsp;
    }

    /** Properties of a Msg_SubmitQuestionReceiveRewardReq. */
    interface IMsg_SubmitQuestionReceiveRewardReq {

        /** Msg_SubmitQuestionReceiveRewardReq answers */
        answers?: (proto.IQuestionnaireSurveyData[]|null);
    }

    /** Represents a Msg_SubmitQuestionReceiveRewardReq. */
    class Msg_SubmitQuestionReceiveRewardReq implements IMsg_SubmitQuestionReceiveRewardReq {

        /**
         * Constructs a new Msg_SubmitQuestionReceiveRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SubmitQuestionReceiveRewardReq);

        /** Msg_SubmitQuestionReceiveRewardReq answers. */
        public answers: proto.IQuestionnaireSurveyData[];

        /**
         * Encodes the specified Msg_SubmitQuestionReceiveRewardReq message. Does not implicitly {@link proto.Msg_SubmitQuestionReceiveRewardReq.verify|verify} messages.
         * @param m Msg_SubmitQuestionReceiveRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SubmitQuestionReceiveRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SubmitQuestionReceiveRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SubmitQuestionReceiveRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SubmitQuestionReceiveRewardReq;
    }

    /** Properties of a Msg_SubmitQuestionReceiveRewardRsp. */
    interface IMsg_SubmitQuestionReceiveRewardRsp {

        /** Msg_SubmitQuestionReceiveRewardRsp result */
        result?: (proto.Msg_SubmitQuestionReceiveRewardRsp.ErrorCode|null);

        /** Msg_SubmitQuestionReceiveRewardRsp rewardList */
        rewardList?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_SubmitQuestionReceiveRewardRsp. */
    class Msg_SubmitQuestionReceiveRewardRsp implements IMsg_SubmitQuestionReceiveRewardRsp {

        /**
         * Constructs a new Msg_SubmitQuestionReceiveRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SubmitQuestionReceiveRewardRsp);

        /** Msg_SubmitQuestionReceiveRewardRsp result. */
        public result: proto.Msg_SubmitQuestionReceiveRewardRsp.ErrorCode;

        /** Msg_SubmitQuestionReceiveRewardRsp rewardList. */
        public rewardList: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_SubmitQuestionReceiveRewardRsp message. Does not implicitly {@link proto.Msg_SubmitQuestionReceiveRewardRsp.verify|verify} messages.
         * @param m Msg_SubmitQuestionReceiveRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SubmitQuestionReceiveRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SubmitQuestionReceiveRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SubmitQuestionReceiveRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SubmitQuestionReceiveRewardRsp;
    }

    namespace Msg_SubmitQuestionReceiveRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            ActivityOver = 1,
            AlreadyReceived = 2
        }
    }

    /** Properties of a Msg_ReportedFirstCreateRoleReq. */
    interface IMsg_ReportedFirstCreateRoleReq {
    }

    /** Represents a Msg_ReportedFirstCreateRoleReq. */
    class Msg_ReportedFirstCreateRoleReq implements IMsg_ReportedFirstCreateRoleReq {

        /**
         * Constructs a new Msg_ReportedFirstCreateRoleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReportedFirstCreateRoleReq);

        /**
         * Encodes the specified Msg_ReportedFirstCreateRoleReq message. Does not implicitly {@link proto.Msg_ReportedFirstCreateRoleReq.verify|verify} messages.
         * @param m Msg_ReportedFirstCreateRoleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReportedFirstCreateRoleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReportedFirstCreateRoleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReportedFirstCreateRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReportedFirstCreateRoleReq;
    }

    /** Properties of a Msg_SearchDoubleEnergyInfoReq. */
    interface IMsg_SearchDoubleEnergyInfoReq {
    }

    /** Represents a Msg_SearchDoubleEnergyInfoReq. */
    class Msg_SearchDoubleEnergyInfoReq implements IMsg_SearchDoubleEnergyInfoReq {

        /**
         * Constructs a new Msg_SearchDoubleEnergyInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchDoubleEnergyInfoReq);

        /**
         * Encodes the specified Msg_SearchDoubleEnergyInfoReq message. Does not implicitly {@link proto.Msg_SearchDoubleEnergyInfoReq.verify|verify} messages.
         * @param m Msg_SearchDoubleEnergyInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchDoubleEnergyInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchDoubleEnergyInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchDoubleEnergyInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchDoubleEnergyInfoReq;
    }

    /** Properties of a Msg_SearchDoubleEnergyInfoRsp. */
    interface IMsg_SearchDoubleEnergyInfoRsp {

        /** Msg_SearchDoubleEnergyInfoRsp startUTC */
        startUTC?: (number|null);

        /** Msg_SearchDoubleEnergyInfoRsp overUTC */
        overUTC?: (number|null);
    }

    /** Represents a Msg_SearchDoubleEnergyInfoRsp. */
    class Msg_SearchDoubleEnergyInfoRsp implements IMsg_SearchDoubleEnergyInfoRsp {

        /**
         * Constructs a new Msg_SearchDoubleEnergyInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchDoubleEnergyInfoRsp);

        /** Msg_SearchDoubleEnergyInfoRsp startUTC. */
        public startUTC: number;

        /** Msg_SearchDoubleEnergyInfoRsp overUTC. */
        public overUTC: number;

        /**
         * Encodes the specified Msg_SearchDoubleEnergyInfoRsp message. Does not implicitly {@link proto.Msg_SearchDoubleEnergyInfoRsp.verify|verify} messages.
         * @param m Msg_SearchDoubleEnergyInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchDoubleEnergyInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchDoubleEnergyInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchDoubleEnergyInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchDoubleEnergyInfoRsp;
    }

    /** Properties of a SpringFestivalInfoData. */
    interface ISpringFestivalInfoData {

        /** SpringFestivalInfoData rewardInfo */
        rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** SpringFestivalInfoData bDoubleReward */
        bDoubleReward?: (boolean|null);

        /** SpringFestivalInfoData bReceived */
        bReceived?: (boolean|null);
    }

    /** Represents a SpringFestivalInfoData. */
    class SpringFestivalInfoData implements ISpringFestivalInfoData {

        /**
         * Constructs a new SpringFestivalInfoData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISpringFestivalInfoData);

        /** SpringFestivalInfoData rewardInfo. */
        public rewardInfo?: (proto.IRewardSimpleInfo|null);

        /** SpringFestivalInfoData bDoubleReward. */
        public bDoubleReward: boolean;

        /** SpringFestivalInfoData bReceived. */
        public bReceived: boolean;

        /**
         * Encodes the specified SpringFestivalInfoData message. Does not implicitly {@link proto.SpringFestivalInfoData.verify|verify} messages.
         * @param m SpringFestivalInfoData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISpringFestivalInfoData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpringFestivalInfoData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SpringFestivalInfoData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SpringFestivalInfoData;
    }

    /** Properties of a Msg_SearchSpringFestivalInfoReq. */
    interface IMsg_SearchSpringFestivalInfoReq {
    }

    /** Represents a Msg_SearchSpringFestivalInfoReq. */
    class Msg_SearchSpringFestivalInfoReq implements IMsg_SearchSpringFestivalInfoReq {

        /**
         * Constructs a new Msg_SearchSpringFestivalInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchSpringFestivalInfoReq);

        /**
         * Encodes the specified Msg_SearchSpringFestivalInfoReq message. Does not implicitly {@link proto.Msg_SearchSpringFestivalInfoReq.verify|verify} messages.
         * @param m Msg_SearchSpringFestivalInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchSpringFestivalInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchSpringFestivalInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchSpringFestivalInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchSpringFestivalInfoReq;
    }

    /** Properties of a Msg_SearchSpringFestivalInfoRsp. */
    interface IMsg_SearchSpringFestivalInfoRsp {

        /** Msg_SearchSpringFestivalInfoRsp curLoginDay */
        curLoginDay?: (number|null);

        /** Msg_SearchSpringFestivalInfoRsp startTime */
        startTime?: (number|null);

        /** Msg_SearchSpringFestivalInfoRsp overTime */
        overTime?: (number|null);

        /** Msg_SearchSpringFestivalInfoRsp rewardInfoList */
        rewardInfoList?: (proto.ISpringFestivalInfoData[]|null);
    }

    /** Represents a Msg_SearchSpringFestivalInfoRsp. */
    class Msg_SearchSpringFestivalInfoRsp implements IMsg_SearchSpringFestivalInfoRsp {

        /**
         * Constructs a new Msg_SearchSpringFestivalInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SearchSpringFestivalInfoRsp);

        /** Msg_SearchSpringFestivalInfoRsp curLoginDay. */
        public curLoginDay: number;

        /** Msg_SearchSpringFestivalInfoRsp startTime. */
        public startTime: number;

        /** Msg_SearchSpringFestivalInfoRsp overTime. */
        public overTime: number;

        /** Msg_SearchSpringFestivalInfoRsp rewardInfoList. */
        public rewardInfoList: proto.ISpringFestivalInfoData[];

        /**
         * Encodes the specified Msg_SearchSpringFestivalInfoRsp message. Does not implicitly {@link proto.Msg_SearchSpringFestivalInfoRsp.verify|verify} messages.
         * @param m Msg_SearchSpringFestivalInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SearchSpringFestivalInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SearchSpringFestivalInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SearchSpringFestivalInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SearchSpringFestivalInfoRsp;
    }

    /** Properties of a Msg_ReceiveSpringFestivalRewardReq. */
    interface IMsg_ReceiveSpringFestivalRewardReq {

        /** Msg_ReceiveSpringFestivalRewardReq day */
        day?: (number|null);

        /** Msg_ReceiveSpringFestivalRewardReq bDoubleReward */
        bDoubleReward?: (boolean|null);
    }

    /** Represents a Msg_ReceiveSpringFestivalRewardReq. */
    class Msg_ReceiveSpringFestivalRewardReq implements IMsg_ReceiveSpringFestivalRewardReq {

        /**
         * Constructs a new Msg_ReceiveSpringFestivalRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSpringFestivalRewardReq);

        /** Msg_ReceiveSpringFestivalRewardReq day. */
        public day: number;

        /** Msg_ReceiveSpringFestivalRewardReq bDoubleReward. */
        public bDoubleReward: boolean;

        /**
         * Encodes the specified Msg_ReceiveSpringFestivalRewardReq message. Does not implicitly {@link proto.Msg_ReceiveSpringFestivalRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveSpringFestivalRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSpringFestivalRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSpringFestivalRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSpringFestivalRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSpringFestivalRewardReq;
    }

    /** Properties of a Msg_ReceiveSpringFestivalRewardRsp. */
    interface IMsg_ReceiveSpringFestivalRewardRsp {

        /** Msg_ReceiveSpringFestivalRewardRsp result */
        result?: (proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode|null);

        /** Msg_ReceiveSpringFestivalRewardRsp day */
        day?: (number|null);

        /** Msg_ReceiveSpringFestivalRewardRsp rewardList */
        rewardList?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_ReceiveSpringFestivalRewardRsp. */
    class Msg_ReceiveSpringFestivalRewardRsp implements IMsg_ReceiveSpringFestivalRewardRsp {

        /**
         * Constructs a new Msg_ReceiveSpringFestivalRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSpringFestivalRewardRsp);

        /** Msg_ReceiveSpringFestivalRewardRsp result. */
        public result: proto.Msg_ReceiveSpringFestivalRewardRsp.ErrorCode;

        /** Msg_ReceiveSpringFestivalRewardRsp day. */
        public day: number;

        /** Msg_ReceiveSpringFestivalRewardRsp rewardList. */
        public rewardList: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_ReceiveSpringFestivalRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveSpringFestivalRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveSpringFestivalRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSpringFestivalRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSpringFestivalRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSpringFestivalRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSpringFestivalRewardRsp;
    }

    namespace Msg_ReceiveSpringFestivalRewardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceived = 1,
            ActivityOver = 2,
            UnReachReceiveCond = 3
        }
    }

    /** Properties of an OverBagGift. */
    interface IOverBagGift {

        /** OverBagGift overBagGiftId */
        overBagGiftId?: (number|null);

        /** OverBagGift endUTC */
        endUTC?: (number|null);

        /** OverBagGift buyUTC */
        buyUTC?: (number|Long|null);
    }

    /** Represents an OverBagGift. */
    class OverBagGift implements IOverBagGift {

        /**
         * Constructs a new OverBagGift.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IOverBagGift);

        /** OverBagGift overBagGiftId. */
        public overBagGiftId: number;

        /** OverBagGift endUTC. */
        public endUTC: number;

        /** OverBagGift buyUTC. */
        public buyUTC: (number|Long);

        /**
         * Encodes the specified OverBagGift message. Does not implicitly {@link proto.OverBagGift.verify|verify} messages.
         * @param m OverBagGift message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IOverBagGift, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OverBagGift message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns OverBagGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.OverBagGift;
    }

    /** Properties of a Msg_OverBagGiftReq. */
    interface IMsg_OverBagGiftReq {
    }

    /** Represents a Msg_OverBagGiftReq. */
    class Msg_OverBagGiftReq implements IMsg_OverBagGiftReq {

        /**
         * Constructs a new Msg_OverBagGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OverBagGiftReq);

        /**
         * Encodes the specified Msg_OverBagGiftReq message. Does not implicitly {@link proto.Msg_OverBagGiftReq.verify|verify} messages.
         * @param m Msg_OverBagGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OverBagGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OverBagGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OverBagGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OverBagGiftReq;
    }

    /** Properties of a Msg_OverBagGiftRsp. */
    interface IMsg_OverBagGiftRsp {

        /** Msg_OverBagGiftRsp bagGifts */
        bagGifts?: (proto.IOverBagGift[]|null);
    }

    /** Represents a Msg_OverBagGiftRsp. */
    class Msg_OverBagGiftRsp implements IMsg_OverBagGiftRsp {

        /**
         * Constructs a new Msg_OverBagGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OverBagGiftRsp);

        /** Msg_OverBagGiftRsp bagGifts. */
        public bagGifts: proto.IOverBagGift[];

        /**
         * Encodes the specified Msg_OverBagGiftRsp message. Does not implicitly {@link proto.Msg_OverBagGiftRsp.verify|verify} messages.
         * @param m Msg_OverBagGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OverBagGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OverBagGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OverBagGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OverBagGiftRsp;
    }

    /** Properties of a Msg_BuyOverBagGiftReq. */
    interface IMsg_BuyOverBagGiftReq {

        /** Msg_BuyOverBagGiftReq overBagGiftId */
        overBagGiftId?: (number|null);
    }

    /** Represents a Msg_BuyOverBagGiftReq. */
    class Msg_BuyOverBagGiftReq implements IMsg_BuyOverBagGiftReq {

        /**
         * Constructs a new Msg_BuyOverBagGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyOverBagGiftReq);

        /** Msg_BuyOverBagGiftReq overBagGiftId. */
        public overBagGiftId: number;

        /**
         * Encodes the specified Msg_BuyOverBagGiftReq message. Does not implicitly {@link proto.Msg_BuyOverBagGiftReq.verify|verify} messages.
         * @param m Msg_BuyOverBagGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyOverBagGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyOverBagGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyOverBagGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyOverBagGiftReq;
    }

    /** Properties of a Msg_BuyOverBagGiftRsp. */
    interface IMsg_BuyOverBagGiftRsp {

        /** Msg_BuyOverBagGiftRsp result */
        result?: (proto.Msg_BuyOverBagGiftRsp.ErrorCode|null);

        /** Msg_BuyOverBagGiftRsp overBagGiftId */
        overBagGiftId?: (number|null);

        /** Msg_BuyOverBagGiftRsp rewardList */
        rewardList?: (proto.IVecRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyOverBagGiftRsp. */
    class Msg_BuyOverBagGiftRsp implements IMsg_BuyOverBagGiftRsp {

        /**
         * Constructs a new Msg_BuyOverBagGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyOverBagGiftRsp);

        /** Msg_BuyOverBagGiftRsp result. */
        public result: proto.Msg_BuyOverBagGiftRsp.ErrorCode;

        /** Msg_BuyOverBagGiftRsp overBagGiftId. */
        public overBagGiftId: number;

        /** Msg_BuyOverBagGiftRsp rewardList. */
        public rewardList: proto.IVecRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyOverBagGiftRsp message. Does not implicitly {@link proto.Msg_BuyOverBagGiftRsp.verify|verify} messages.
         * @param m Msg_BuyOverBagGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyOverBagGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyOverBagGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyOverBagGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyOverBagGiftRsp;
    }

    namespace Msg_BuyOverBagGiftRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyReceived = 1,
            ActivityOver = 2,
            Error = 3
        }
    }

    /** Properties of a Msg_PushOverBagGift. */
    interface IMsg_PushOverBagGift {

        /** Msg_PushOverBagGift bagGifts */
        bagGifts?: (proto.IOverBagGift[]|null);
    }

    /** Represents a Msg_PushOverBagGift. */
    class Msg_PushOverBagGift implements IMsg_PushOverBagGift {

        /**
         * Constructs a new Msg_PushOverBagGift.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushOverBagGift);

        /** Msg_PushOverBagGift bagGifts. */
        public bagGifts: proto.IOverBagGift[];

        /**
         * Encodes the specified Msg_PushOverBagGift message. Does not implicitly {@link proto.Msg_PushOverBagGift.verify|verify} messages.
         * @param m Msg_PushOverBagGift message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushOverBagGift, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushOverBagGift message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushOverBagGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushOverBagGift;
    }

    /** Properties of a SpringFestivalSignInDBData. */
    interface ISpringFestivalSignInDBData {

        /** SpringFestivalSignInDBData rewardData */
        rewardData?: (proto.ISpringFestivalInfoData[]|null);

        /** SpringFestivalSignInDBData curLoginDay */
        curLoginDay?: (number|null);

        /** SpringFestivalSignInDBData startTime */
        startTime?: (number|null);

        /** SpringFestivalSignInDBData endTime */
        endTime?: (number|null);

        /** SpringFestivalSignInDBData lastSignInTime */
        lastSignInTime?: (number|null);
    }

    /** Represents a SpringFestivalSignInDBData. */
    class SpringFestivalSignInDBData implements ISpringFestivalSignInDBData {

        /**
         * Constructs a new SpringFestivalSignInDBData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISpringFestivalSignInDBData);

        /** SpringFestivalSignInDBData rewardData. */
        public rewardData: proto.ISpringFestivalInfoData[];

        /** SpringFestivalSignInDBData curLoginDay. */
        public curLoginDay: number;

        /** SpringFestivalSignInDBData startTime. */
        public startTime: number;

        /** SpringFestivalSignInDBData endTime. */
        public endTime: number;

        /** SpringFestivalSignInDBData lastSignInTime. */
        public lastSignInTime: number;

        /**
         * Encodes the specified SpringFestivalSignInDBData message. Does not implicitly {@link proto.SpringFestivalSignInDBData.verify|verify} messages.
         * @param m SpringFestivalSignInDBData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISpringFestivalSignInDBData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SpringFestivalSignInDBData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SpringFestivalSignInDBData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SpringFestivalSignInDBData;
    }

    /** Properties of a Msg_PushSelectCardBySelfRsp. */
    interface IMsg_PushSelectCardBySelfRsp {

        /** Msg_PushSelectCardBySelfRsp leftTimes */
        leftTimes?: (number|null);
    }

    /** Represents a Msg_PushSelectCardBySelfRsp. */
    class Msg_PushSelectCardBySelfRsp implements IMsg_PushSelectCardBySelfRsp {

        /**
         * Constructs a new Msg_PushSelectCardBySelfRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PushSelectCardBySelfRsp);

        /** Msg_PushSelectCardBySelfRsp leftTimes. */
        public leftTimes: number;

        /**
         * Encodes the specified Msg_PushSelectCardBySelfRsp message. Does not implicitly {@link proto.Msg_PushSelectCardBySelfRsp.verify|verify} messages.
         * @param m Msg_PushSelectCardBySelfRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PushSelectCardBySelfRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PushSelectCardBySelfRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PushSelectCardBySelfRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PushSelectCardBySelfRsp;
    }

    /** Properties of a Msg_SelectCardBySelfReq. */
    interface IMsg_SelectCardBySelfReq {

        /** Msg_SelectCardBySelfReq cardStaticId */
        cardStaticId?: (number|null);
    }

    /** Represents a Msg_SelectCardBySelfReq. */
    class Msg_SelectCardBySelfReq implements IMsg_SelectCardBySelfReq {

        /**
         * Constructs a new Msg_SelectCardBySelfReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SelectCardBySelfReq);

        /** Msg_SelectCardBySelfReq cardStaticId. */
        public cardStaticId: number;

        /**
         * Encodes the specified Msg_SelectCardBySelfReq message. Does not implicitly {@link proto.Msg_SelectCardBySelfReq.verify|verify} messages.
         * @param m Msg_SelectCardBySelfReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SelectCardBySelfReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SelectCardBySelfReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SelectCardBySelfReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SelectCardBySelfReq;
    }

    /** Properties of a Msg_SelectCardBySelfRsp. */
    interface IMsg_SelectCardBySelfRsp {

        /** Msg_SelectCardBySelfRsp result */
        result?: (proto.Msg_SelectCardBySelfRsp.ErrorCode|null);

        /** Msg_SelectCardBySelfRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_SelectCardBySelfRsp leftTimes */
        leftTimes?: (number|null);
    }

    /** Represents a Msg_SelectCardBySelfRsp. */
    class Msg_SelectCardBySelfRsp implements IMsg_SelectCardBySelfRsp {

        /**
         * Constructs a new Msg_SelectCardBySelfRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SelectCardBySelfRsp);

        /** Msg_SelectCardBySelfRsp result. */
        public result: proto.Msg_SelectCardBySelfRsp.ErrorCode;

        /** Msg_SelectCardBySelfRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /** Msg_SelectCardBySelfRsp leftTimes. */
        public leftTimes: number;

        /**
         * Encodes the specified Msg_SelectCardBySelfRsp message. Does not implicitly {@link proto.Msg_SelectCardBySelfRsp.verify|verify} messages.
         * @param m Msg_SelectCardBySelfRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SelectCardBySelfRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SelectCardBySelfRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SelectCardBySelfRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SelectCardBySelfRsp;
    }

    namespace Msg_SelectCardBySelfRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Error = 1
        }
    }

    /** Properties of a ChatMsgData. */
    interface IChatMsgData {

        /** ChatMsgData msgType */
        msgType?: (proto.GlobalMessageType|null);

        /** ChatMsgData content */
        content?: (string|null);

        /** ChatMsgData utcTime */
        utcTime?: (number|null);

        /** ChatMsgData msgSenderName */
        msgSenderName?: (string|null);

        /** ChatMsgData senderUUID */
        senderUUID?: (string|null);

        /** ChatMsgData playerHeadID */
        playerHeadID?: (number|null);

        /** ChatMsgData receiverUUID */
        receiverUUID?: (string|null);

        /** ChatMsgData rankScore */
        rankScore?: (number|null);

        /** ChatMsgData allianceName */
        allianceName?: (string|null);

        /** ChatMsgData allianceIconIdx */
        allianceIconIdx?: (number|null);
    }

    /** Represents a ChatMsgData. */
    class ChatMsgData implements IChatMsgData {

        /**
         * Constructs a new ChatMsgData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IChatMsgData);

        /** ChatMsgData msgType. */
        public msgType: proto.GlobalMessageType;

        /** ChatMsgData content. */
        public content: string;

        /** ChatMsgData utcTime. */
        public utcTime: number;

        /** ChatMsgData msgSenderName. */
        public msgSenderName: string;

        /** ChatMsgData senderUUID. */
        public senderUUID: string;

        /** ChatMsgData playerHeadID. */
        public playerHeadID: number;

        /** ChatMsgData receiverUUID. */
        public receiverUUID: string;

        /** ChatMsgData rankScore. */
        public rankScore: number;

        /** ChatMsgData allianceName. */
        public allianceName: string;

        /** ChatMsgData allianceIconIdx. */
        public allianceIconIdx: number;

        /**
         * Encodes the specified ChatMsgData message. Does not implicitly {@link proto.ChatMsgData.verify|verify} messages.
         * @param m ChatMsgData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IChatMsgData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMsgData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatMsgData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatMsgData;
    }

    /** Properties of a Msg_ChatMsgPush. */
    interface IMsg_ChatMsgPush {

        /** Msg_ChatMsgPush msg */
        msg?: (proto.IChatMsgData[]|null);

        /** Msg_ChatMsgPush channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_ChatMsgPush. */
    class Msg_ChatMsgPush implements IMsg_ChatMsgPush {

        /**
         * Constructs a new Msg_ChatMsgPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatMsgPush);

        /** Msg_ChatMsgPush msg. */
        public msg: proto.IChatMsgData[];

        /** Msg_ChatMsgPush channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_ChatMsgPush message. Does not implicitly {@link proto.Msg_ChatMsgPush.verify|verify} messages.
         * @param m Msg_ChatMsgPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatMsgPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatMsgPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatMsgPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatMsgPush;
    }

    /** Properties of a Msg_ChatSendMessageReq. */
    interface IMsg_ChatSendMessageReq {

        /** Msg_ChatSendMessageReq message */
        message?: (string|null);

        /** Msg_ChatSendMessageReq channel */
        channel?: (proto.ChatChannelType|null);

        /** Msg_ChatSendMessageReq receiverUUID */
        receiverUUID?: (string|null);
    }

    /** Represents a Msg_ChatSendMessageReq. */
    class Msg_ChatSendMessageReq implements IMsg_ChatSendMessageReq {

        /**
         * Constructs a new Msg_ChatSendMessageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendMessageReq);

        /** Msg_ChatSendMessageReq message. */
        public message: string;

        /** Msg_ChatSendMessageReq channel. */
        public channel: proto.ChatChannelType;

        /** Msg_ChatSendMessageReq receiverUUID. */
        public receiverUUID: string;

        /**
         * Encodes the specified Msg_ChatSendMessageReq message. Does not implicitly {@link proto.Msg_ChatSendMessageReq.verify|verify} messages.
         * @param m Msg_ChatSendMessageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendMessageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendMessageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendMessageReq;
    }

    /** Properties of a Msg_ChatSendMessageRsp. */
    interface IMsg_ChatSendMessageRsp {

        /** Msg_ChatSendMessageRsp result */
        result?: (proto.Msg_ChatSendMessageRsp.ErrorCode|null);

        /** Msg_ChatSendMessageRsp cd */
        cd?: (number|null);
    }

    /** Represents a Msg_ChatSendMessageRsp. */
    class Msg_ChatSendMessageRsp implements IMsg_ChatSendMessageRsp {

        /**
         * Constructs a new Msg_ChatSendMessageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendMessageRsp);

        /** Msg_ChatSendMessageRsp result. */
        public result: proto.Msg_ChatSendMessageRsp.ErrorCode;

        /** Msg_ChatSendMessageRsp cd. */
        public cd: number;

        /**
         * Encodes the specified Msg_ChatSendMessageRsp message. Does not implicitly {@link proto.Msg_ChatSendMessageRsp.verify|verify} messages.
         * @param m Msg_ChatSendMessageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendMessageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendMessageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendMessageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendMessageRsp;
    }

    namespace Msg_ChatSendMessageRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            SensitiveWordError = 1,
            CD = 2,
            NoAlliance = 3,
            NotFriend = 4
        }
    }

    /** Properties of a Msg_ChatSendEmojiReq. */
    interface IMsg_ChatSendEmojiReq {

        /** Msg_ChatSendEmojiReq emojiID */
        emojiID?: (number|null);

        /** Msg_ChatSendEmojiReq channel */
        channel?: (proto.ChatChannelType|null);

        /** Msg_ChatSendEmojiReq receiverUUID */
        receiverUUID?: (string|null);
    }

    /** Represents a Msg_ChatSendEmojiReq. */
    class Msg_ChatSendEmojiReq implements IMsg_ChatSendEmojiReq {

        /**
         * Constructs a new Msg_ChatSendEmojiReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendEmojiReq);

        /** Msg_ChatSendEmojiReq emojiID. */
        public emojiID: number;

        /** Msg_ChatSendEmojiReq channel. */
        public channel: proto.ChatChannelType;

        /** Msg_ChatSendEmojiReq receiverUUID. */
        public receiverUUID: string;

        /**
         * Encodes the specified Msg_ChatSendEmojiReq message. Does not implicitly {@link proto.Msg_ChatSendEmojiReq.verify|verify} messages.
         * @param m Msg_ChatSendEmojiReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendEmojiReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendEmojiReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendEmojiReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendEmojiReq;
    }

    /** Properties of a Msg_ChatSendEmojiRsp. */
    interface IMsg_ChatSendEmojiRsp {

        /** Msg_ChatSendEmojiRsp result */
        result?: (proto.Msg_ChatSendEmojiRsp.ErrorCode|null);

        /** Msg_ChatSendEmojiRsp cd */
        cd?: (number|null);
    }

    /** Represents a Msg_ChatSendEmojiRsp. */
    class Msg_ChatSendEmojiRsp implements IMsg_ChatSendEmojiRsp {

        /**
         * Constructs a new Msg_ChatSendEmojiRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendEmojiRsp);

        /** Msg_ChatSendEmojiRsp result. */
        public result: proto.Msg_ChatSendEmojiRsp.ErrorCode;

        /** Msg_ChatSendEmojiRsp cd. */
        public cd: number;

        /**
         * Encodes the specified Msg_ChatSendEmojiRsp message. Does not implicitly {@link proto.Msg_ChatSendEmojiRsp.verify|verify} messages.
         * @param m Msg_ChatSendEmojiRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendEmojiRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendEmojiRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendEmojiRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendEmojiRsp;
    }

    namespace Msg_ChatSendEmojiRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            EmojiNotExist = 1,
            CD = 2,
            NoAlliance = 3,
            NotFriend = 4
        }
    }

    /** Properties of a Msg_GetChatCdReq. */
    interface IMsg_GetChatCdReq {
    }

    /** Represents a Msg_GetChatCdReq. */
    class Msg_GetChatCdReq implements IMsg_GetChatCdReq {

        /**
         * Constructs a new Msg_GetChatCdReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetChatCdReq);

        /**
         * Encodes the specified Msg_GetChatCdReq message. Does not implicitly {@link proto.Msg_GetChatCdReq.verify|verify} messages.
         * @param m Msg_GetChatCdReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetChatCdReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetChatCdReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetChatCdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetChatCdReq;
    }

    /** Properties of a Msg_GetChatCdRsp. */
    interface IMsg_GetChatCdRsp {

        /** Msg_GetChatCdRsp cd */
        cd?: (number|null);
    }

    /** Represents a Msg_GetChatCdRsp. */
    class Msg_GetChatCdRsp implements IMsg_GetChatCdRsp {

        /**
         * Constructs a new Msg_GetChatCdRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetChatCdRsp);

        /** Msg_GetChatCdRsp cd. */
        public cd: number;

        /**
         * Encodes the specified Msg_GetChatCdRsp message. Does not implicitly {@link proto.Msg_GetChatCdRsp.verify|verify} messages.
         * @param m Msg_GetChatCdRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetChatCdRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetChatCdRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetChatCdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetChatCdRsp;
    }

    /** Properties of a Msg_CheckPlayerIsMyFriendReq. */
    interface IMsg_CheckPlayerIsMyFriendReq {

        /** Msg_CheckPlayerIsMyFriendReq playerUUID */
        playerUUID?: (string|null);
    }

    /** Represents a Msg_CheckPlayerIsMyFriendReq. */
    class Msg_CheckPlayerIsMyFriendReq implements IMsg_CheckPlayerIsMyFriendReq {

        /**
         * Constructs a new Msg_CheckPlayerIsMyFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CheckPlayerIsMyFriendReq);

        /** Msg_CheckPlayerIsMyFriendReq playerUUID. */
        public playerUUID: string;

        /**
         * Encodes the specified Msg_CheckPlayerIsMyFriendReq message. Does not implicitly {@link proto.Msg_CheckPlayerIsMyFriendReq.verify|verify} messages.
         * @param m Msg_CheckPlayerIsMyFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CheckPlayerIsMyFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CheckPlayerIsMyFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CheckPlayerIsMyFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CheckPlayerIsMyFriendReq;
    }

    /** Properties of a Msg_CheckPlayerIsMyFriendRsp. */
    interface IMsg_CheckPlayerIsMyFriendRsp {

        /** Msg_CheckPlayerIsMyFriendRsp bMyFriend */
        bMyFriend?: (boolean|null);
    }

    /** Represents a Msg_CheckPlayerIsMyFriendRsp. */
    class Msg_CheckPlayerIsMyFriendRsp implements IMsg_CheckPlayerIsMyFriendRsp {

        /**
         * Constructs a new Msg_CheckPlayerIsMyFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CheckPlayerIsMyFriendRsp);

        /** Msg_CheckPlayerIsMyFriendRsp bMyFriend. */
        public bMyFriend: boolean;

        /**
         * Encodes the specified Msg_CheckPlayerIsMyFriendRsp message. Does not implicitly {@link proto.Msg_CheckPlayerIsMyFriendRsp.verify|verify} messages.
         * @param m Msg_CheckPlayerIsMyFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CheckPlayerIsMyFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CheckPlayerIsMyFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CheckPlayerIsMyFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CheckPlayerIsMyFriendRsp;
    }

    /** Properties of a Msg_ChatSendShareCardsReq. */
    interface IMsg_ChatSendShareCardsReq {

        /** Msg_ChatSendShareCardsReq message */
        message?: (string|null);

        /** Msg_ChatSendShareCardsReq channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_ChatSendShareCardsReq. */
    class Msg_ChatSendShareCardsReq implements IMsg_ChatSendShareCardsReq {

        /**
         * Constructs a new Msg_ChatSendShareCardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendShareCardsReq);

        /** Msg_ChatSendShareCardsReq message. */
        public message: string;

        /** Msg_ChatSendShareCardsReq channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_ChatSendShareCardsReq message. Does not implicitly {@link proto.Msg_ChatSendShareCardsReq.verify|verify} messages.
         * @param m Msg_ChatSendShareCardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendShareCardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendShareCardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendShareCardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendShareCardsReq;
    }

    /** Properties of a Msg_ChatSendShareCardsRsp. */
    interface IMsg_ChatSendShareCardsRsp {

        /** Msg_ChatSendShareCardsRsp result */
        result?: (proto.Msg_ChatSendShareCardsRsp.ErrorCode|null);

        /** Msg_ChatSendShareCardsRsp cd */
        cd?: (number|null);

        /** Msg_ChatSendShareCardsRsp channel */
        channel?: (proto.ChatChannelType|null);
    }

    /** Represents a Msg_ChatSendShareCardsRsp. */
    class Msg_ChatSendShareCardsRsp implements IMsg_ChatSendShareCardsRsp {

        /**
         * Constructs a new Msg_ChatSendShareCardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatSendShareCardsRsp);

        /** Msg_ChatSendShareCardsRsp result. */
        public result: proto.Msg_ChatSendShareCardsRsp.ErrorCode;

        /** Msg_ChatSendShareCardsRsp cd. */
        public cd: number;

        /** Msg_ChatSendShareCardsRsp channel. */
        public channel: proto.ChatChannelType;

        /**
         * Encodes the specified Msg_ChatSendShareCardsRsp message. Does not implicitly {@link proto.Msg_ChatSendShareCardsRsp.verify|verify} messages.
         * @param m Msg_ChatSendShareCardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatSendShareCardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatSendShareCardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatSendShareCardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatSendShareCardsRsp;
    }

    namespace Msg_ChatSendShareCardsRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            CD = 2
        }
    }

    /** Properties of a PickedGiftBagInfo. */
    interface IPickedGiftBagInfo {

        /** PickedGiftBagInfo GiftID */
        GiftID?: (number|null);

        /** PickedGiftBagInfo Price */
        Price?: (number|null);

        /** PickedGiftBagInfo BuyedTimes */
        BuyedTimes?: (number|null);

        /** PickedGiftBagInfo MaxBuyTimes */
        MaxBuyTimes?: (number|null);

        /** PickedGiftBagInfo Reward */
        Reward?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a PickedGiftBagInfo. */
    class PickedGiftBagInfo implements IPickedGiftBagInfo {

        /**
         * Constructs a new PickedGiftBagInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPickedGiftBagInfo);

        /** PickedGiftBagInfo GiftID. */
        public GiftID: number;

        /** PickedGiftBagInfo Price. */
        public Price: number;

        /** PickedGiftBagInfo BuyedTimes. */
        public BuyedTimes: number;

        /** PickedGiftBagInfo MaxBuyTimes. */
        public MaxBuyTimes: number;

        /** PickedGiftBagInfo Reward. */
        public Reward: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified PickedGiftBagInfo message. Does not implicitly {@link proto.PickedGiftBagInfo.verify|verify} messages.
         * @param m PickedGiftBagInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPickedGiftBagInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PickedGiftBagInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PickedGiftBagInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PickedGiftBagInfo;
    }

    /** Properties of a Msg_GetPickedGiftBagInfoReq. */
    interface IMsg_GetPickedGiftBagInfoReq {
    }

    /** Represents a Msg_GetPickedGiftBagInfoReq. */
    class Msg_GetPickedGiftBagInfoReq implements IMsg_GetPickedGiftBagInfoReq {

        /**
         * Constructs a new Msg_GetPickedGiftBagInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPickedGiftBagInfoReq);

        /**
         * Encodes the specified Msg_GetPickedGiftBagInfoReq message. Does not implicitly {@link proto.Msg_GetPickedGiftBagInfoReq.verify|verify} messages.
         * @param m Msg_GetPickedGiftBagInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPickedGiftBagInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPickedGiftBagInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPickedGiftBagInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPickedGiftBagInfoReq;
    }

    /** Properties of a Msg_GetPickedGiftBagInfoRsp. */
    interface IMsg_GetPickedGiftBagInfoRsp {

        /** Msg_GetPickedGiftBagInfoRsp GiftBags */
        GiftBags?: (proto.IPickedGiftBagInfo[]|null);

        /** Msg_GetPickedGiftBagInfoRsp ResetUTC */
        ResetUTC?: (number|null);

        /** Msg_GetPickedGiftBagInfoRsp AdvRefreshTimes */
        AdvRefreshTimes?: (number|null);
    }

    /** Represents a Msg_GetPickedGiftBagInfoRsp. */
    class Msg_GetPickedGiftBagInfoRsp implements IMsg_GetPickedGiftBagInfoRsp {

        /**
         * Constructs a new Msg_GetPickedGiftBagInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPickedGiftBagInfoRsp);

        /** Msg_GetPickedGiftBagInfoRsp GiftBags. */
        public GiftBags: proto.IPickedGiftBagInfo[];

        /** Msg_GetPickedGiftBagInfoRsp ResetUTC. */
        public ResetUTC: number;

        /** Msg_GetPickedGiftBagInfoRsp AdvRefreshTimes. */
        public AdvRefreshTimes: number;

        /**
         * Encodes the specified Msg_GetPickedGiftBagInfoRsp message. Does not implicitly {@link proto.Msg_GetPickedGiftBagInfoRsp.verify|verify} messages.
         * @param m Msg_GetPickedGiftBagInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPickedGiftBagInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPickedGiftBagInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPickedGiftBagInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPickedGiftBagInfoRsp;
    }

    /** Properties of a Msg_RefreshPickedGiftBagReq. */
    interface IMsg_RefreshPickedGiftBagReq {
    }

    /** Represents a Msg_RefreshPickedGiftBagReq. */
    class Msg_RefreshPickedGiftBagReq implements IMsg_RefreshPickedGiftBagReq {

        /**
         * Constructs a new Msg_RefreshPickedGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshPickedGiftBagReq);

        /**
         * Encodes the specified Msg_RefreshPickedGiftBagReq message. Does not implicitly {@link proto.Msg_RefreshPickedGiftBagReq.verify|verify} messages.
         * @param m Msg_RefreshPickedGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshPickedGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshPickedGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshPickedGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshPickedGiftBagReq;
    }

    /** Properties of a Msg_RefreshPickedGiftBagRsp. */
    interface IMsg_RefreshPickedGiftBagRsp {

        /** Msg_RefreshPickedGiftBagRsp result */
        result?: (proto.Msg_RefreshPickedGiftBagRsp.ErrorCode|null);

        /** Msg_RefreshPickedGiftBagRsp GiftBags */
        GiftBags?: (proto.IPickedGiftBagInfo[]|null);

        /** Msg_RefreshPickedGiftBagRsp ResetUTC */
        ResetUTC?: (number|null);

        /** Msg_RefreshPickedGiftBagRsp AdvRefreshTimes */
        AdvRefreshTimes?: (number|null);
    }

    /** Represents a Msg_RefreshPickedGiftBagRsp. */
    class Msg_RefreshPickedGiftBagRsp implements IMsg_RefreshPickedGiftBagRsp {

        /**
         * Constructs a new Msg_RefreshPickedGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshPickedGiftBagRsp);

        /** Msg_RefreshPickedGiftBagRsp result. */
        public result: proto.Msg_RefreshPickedGiftBagRsp.ErrorCode;

        /** Msg_RefreshPickedGiftBagRsp GiftBags. */
        public GiftBags: proto.IPickedGiftBagInfo[];

        /** Msg_RefreshPickedGiftBagRsp ResetUTC. */
        public ResetUTC: number;

        /** Msg_RefreshPickedGiftBagRsp AdvRefreshTimes. */
        public AdvRefreshTimes: number;

        /**
         * Encodes the specified Msg_RefreshPickedGiftBagRsp message. Does not implicitly {@link proto.Msg_RefreshPickedGiftBagRsp.verify|verify} messages.
         * @param m Msg_RefreshPickedGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshPickedGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshPickedGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshPickedGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshPickedGiftBagRsp;
    }

    namespace Msg_RefreshPickedGiftBagRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AdvNotEnough = 1
        }
    }

    /** Properties of a Msg_BuyPickedGiftBagReq. */
    interface IMsg_BuyPickedGiftBagReq {

        /** Msg_BuyPickedGiftBagReq giftBagID */
        giftBagID?: (number|null);
    }

    /** Represents a Msg_BuyPickedGiftBagReq. */
    class Msg_BuyPickedGiftBagReq implements IMsg_BuyPickedGiftBagReq {

        /**
         * Constructs a new Msg_BuyPickedGiftBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyPickedGiftBagReq);

        /** Msg_BuyPickedGiftBagReq giftBagID. */
        public giftBagID: number;

        /**
         * Encodes the specified Msg_BuyPickedGiftBagReq message. Does not implicitly {@link proto.Msg_BuyPickedGiftBagReq.verify|verify} messages.
         * @param m Msg_BuyPickedGiftBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyPickedGiftBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyPickedGiftBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyPickedGiftBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyPickedGiftBagReq;
    }

    /** Properties of a Msg_BuyPickedGiftBagRsp. */
    interface IMsg_BuyPickedGiftBagRsp {

        /** Msg_BuyPickedGiftBagRsp result */
        result?: (proto.Msg_BuyPickedGiftBagRsp.ErrorCode|null);

        /** Msg_BuyPickedGiftBagRsp giftBagID */
        giftBagID?: (number|null);

        /** Msg_BuyPickedGiftBagRsp Rewards */
        Rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyPickedGiftBagRsp. */
    class Msg_BuyPickedGiftBagRsp implements IMsg_BuyPickedGiftBagRsp {

        /**
         * Constructs a new Msg_BuyPickedGiftBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyPickedGiftBagRsp);

        /** Msg_BuyPickedGiftBagRsp result. */
        public result: proto.Msg_BuyPickedGiftBagRsp.ErrorCode;

        /** Msg_BuyPickedGiftBagRsp giftBagID. */
        public giftBagID: number;

        /** Msg_BuyPickedGiftBagRsp Rewards. */
        public Rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyPickedGiftBagRsp message. Does not implicitly {@link proto.Msg_BuyPickedGiftBagRsp.verify|verify} messages.
         * @param m Msg_BuyPickedGiftBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyPickedGiftBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyPickedGiftBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyPickedGiftBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyPickedGiftBagRsp;
    }

    namespace Msg_BuyPickedGiftBagRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            GiftNotExist = 1,
            GiftBuyTimesNotEnough = 2
        }
    }

    /** Properties of a PickedGiftBagData. */
    interface IPickedGiftBagData {

        /** PickedGiftBagData pickedGiftBag */
        pickedGiftBag?: (proto.IPickedGiftBagInfo[]|null);

        /** PickedGiftBagData lastDailyRefreshTime */
        lastDailyRefreshTime?: (number|null);

        /** PickedGiftBagData advRefreshTimes */
        advRefreshTimes?: (number|null);
    }

    /** Represents a PickedGiftBagData. */
    class PickedGiftBagData implements IPickedGiftBagData {

        /**
         * Constructs a new PickedGiftBagData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPickedGiftBagData);

        /** PickedGiftBagData pickedGiftBag. */
        public pickedGiftBag: proto.IPickedGiftBagInfo[];

        /** PickedGiftBagData lastDailyRefreshTime. */
        public lastDailyRefreshTime: number;

        /** PickedGiftBagData advRefreshTimes. */
        public advRefreshTimes: number;

        /**
         * Encodes the specified PickedGiftBagData message. Does not implicitly {@link proto.PickedGiftBagData.verify|verify} messages.
         * @param m PickedGiftBagData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPickedGiftBagData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a PickedGiftBagData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns PickedGiftBagData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.PickedGiftBagData;
    }

    /** Properties of a Msg_LuckySupplyReq. */
    interface IMsg_LuckySupplyReq {
    }

    /** Represents a Msg_LuckySupplyReq. */
    class Msg_LuckySupplyReq implements IMsg_LuckySupplyReq {

        /**
         * Constructs a new Msg_LuckySupplyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LuckySupplyReq);

        /**
         * Encodes the specified Msg_LuckySupplyReq message. Does not implicitly {@link proto.Msg_LuckySupplyReq.verify|verify} messages.
         * @param m Msg_LuckySupplyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LuckySupplyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LuckySupplyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LuckySupplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LuckySupplyReq;
    }

    /** Properties of a Msg_LuckySupplyRsp. */
    interface IMsg_LuckySupplyRsp {

        /** Msg_LuckySupplyRsp LeftTimes */
        LeftTimes?: (number|null);
    }

    /** Represents a Msg_LuckySupplyRsp. */
    class Msg_LuckySupplyRsp implements IMsg_LuckySupplyRsp {

        /**
         * Constructs a new Msg_LuckySupplyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LuckySupplyRsp);

        /** Msg_LuckySupplyRsp LeftTimes. */
        public LeftTimes: number;

        /**
         * Encodes the specified Msg_LuckySupplyRsp message. Does not implicitly {@link proto.Msg_LuckySupplyRsp.verify|verify} messages.
         * @param m Msg_LuckySupplyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LuckySupplyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LuckySupplyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LuckySupplyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LuckySupplyRsp;
    }

    /** Properties of a Msg_LuckySupplyGetAwardReq. */
    interface IMsg_LuckySupplyGetAwardReq {
    }

    /** Represents a Msg_LuckySupplyGetAwardReq. */
    class Msg_LuckySupplyGetAwardReq implements IMsg_LuckySupplyGetAwardReq {

        /**
         * Constructs a new Msg_LuckySupplyGetAwardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LuckySupplyGetAwardReq);

        /**
         * Encodes the specified Msg_LuckySupplyGetAwardReq message. Does not implicitly {@link proto.Msg_LuckySupplyGetAwardReq.verify|verify} messages.
         * @param m Msg_LuckySupplyGetAwardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LuckySupplyGetAwardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LuckySupplyGetAwardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LuckySupplyGetAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LuckySupplyGetAwardReq;
    }

    /** Properties of a Msg_LuckySupplyGetAwardRsp. */
    interface IMsg_LuckySupplyGetAwardRsp {

        /** Msg_LuckySupplyGetAwardRsp result */
        result?: (proto.Msg_LuckySupplyGetAwardRsp.ErrorCode|null);

        /** Msg_LuckySupplyGetAwardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_LuckySupplyGetAwardRsp leftTimes */
        leftTimes?: (number|null);
    }

    /** Represents a Msg_LuckySupplyGetAwardRsp. */
    class Msg_LuckySupplyGetAwardRsp implements IMsg_LuckySupplyGetAwardRsp {

        /**
         * Constructs a new Msg_LuckySupplyGetAwardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LuckySupplyGetAwardRsp);

        /** Msg_LuckySupplyGetAwardRsp result. */
        public result: proto.Msg_LuckySupplyGetAwardRsp.ErrorCode;

        /** Msg_LuckySupplyGetAwardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /** Msg_LuckySupplyGetAwardRsp leftTimes. */
        public leftTimes: number;

        /**
         * Encodes the specified Msg_LuckySupplyGetAwardRsp message. Does not implicitly {@link proto.Msg_LuckySupplyGetAwardRsp.verify|verify} messages.
         * @param m Msg_LuckySupplyGetAwardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LuckySupplyGetAwardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LuckySupplyGetAwardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LuckySupplyGetAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LuckySupplyGetAwardRsp;
    }

    namespace Msg_LuckySupplyGetAwardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TimesNotEnough = 1
        }
    }

    /** Properties of a Msg_VictoryBoxInfoReq. */
    interface IMsg_VictoryBoxInfoReq {
    }

    /** Represents a Msg_VictoryBoxInfoReq. */
    class Msg_VictoryBoxInfoReq implements IMsg_VictoryBoxInfoReq {

        /**
         * Constructs a new Msg_VictoryBoxInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxInfoReq);

        /**
         * Encodes the specified Msg_VictoryBoxInfoReq message. Does not implicitly {@link proto.Msg_VictoryBoxInfoReq.verify|verify} messages.
         * @param m Msg_VictoryBoxInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxInfoReq;
    }

    /** Properties of a Msg_VictoryBoxInfoRsp. */
    interface IMsg_VictoryBoxInfoRsp {

        /** Msg_VictoryBoxInfoRsp RewardCount */
        RewardCount?: (number|null);

        /** Msg_VictoryBoxInfoRsp RefuseCount */
        RefuseCount?: (number|null);
    }

    /** Represents a Msg_VictoryBoxInfoRsp. */
    class Msg_VictoryBoxInfoRsp implements IMsg_VictoryBoxInfoRsp {

        /**
         * Constructs a new Msg_VictoryBoxInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxInfoRsp);

        /** Msg_VictoryBoxInfoRsp RewardCount. */
        public RewardCount: number;

        /** Msg_VictoryBoxInfoRsp RefuseCount. */
        public RefuseCount: number;

        /**
         * Encodes the specified Msg_VictoryBoxInfoRsp message. Does not implicitly {@link proto.Msg_VictoryBoxInfoRsp.verify|verify} messages.
         * @param m Msg_VictoryBoxInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxInfoRsp;
    }

    /** Properties of a Msg_VictoryBoxRefuseReq. */
    interface IMsg_VictoryBoxRefuseReq {
    }

    /** Represents a Msg_VictoryBoxRefuseReq. */
    class Msg_VictoryBoxRefuseReq implements IMsg_VictoryBoxRefuseReq {

        /**
         * Constructs a new Msg_VictoryBoxRefuseReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxRefuseReq);

        /**
         * Encodes the specified Msg_VictoryBoxRefuseReq message. Does not implicitly {@link proto.Msg_VictoryBoxRefuseReq.verify|verify} messages.
         * @param m Msg_VictoryBoxRefuseReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxRefuseReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxRefuseReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxRefuseReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxRefuseReq;
    }

    /** Properties of a Msg_VictoryBoxRefuseRsp. */
    interface IMsg_VictoryBoxRefuseRsp {

        /** Msg_VictoryBoxRefuseRsp RewardCount */
        RewardCount?: (number|null);

        /** Msg_VictoryBoxRefuseRsp RefuseCount */
        RefuseCount?: (number|null);
    }

    /** Represents a Msg_VictoryBoxRefuseRsp. */
    class Msg_VictoryBoxRefuseRsp implements IMsg_VictoryBoxRefuseRsp {

        /**
         * Constructs a new Msg_VictoryBoxRefuseRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxRefuseRsp);

        /** Msg_VictoryBoxRefuseRsp RewardCount. */
        public RewardCount: number;

        /** Msg_VictoryBoxRefuseRsp RefuseCount. */
        public RefuseCount: number;

        /**
         * Encodes the specified Msg_VictoryBoxRefuseRsp message. Does not implicitly {@link proto.Msg_VictoryBoxRefuseRsp.verify|verify} messages.
         * @param m Msg_VictoryBoxRefuseRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxRefuseRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxRefuseRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxRefuseRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxRefuseRsp;
    }

    /** Properties of a Msg_VictoryBoxGetAwardReq. */
    interface IMsg_VictoryBoxGetAwardReq {
    }

    /** Represents a Msg_VictoryBoxGetAwardReq. */
    class Msg_VictoryBoxGetAwardReq implements IMsg_VictoryBoxGetAwardReq {

        /**
         * Constructs a new Msg_VictoryBoxGetAwardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxGetAwardReq);

        /**
         * Encodes the specified Msg_VictoryBoxGetAwardReq message. Does not implicitly {@link proto.Msg_VictoryBoxGetAwardReq.verify|verify} messages.
         * @param m Msg_VictoryBoxGetAwardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxGetAwardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxGetAwardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxGetAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxGetAwardReq;
    }

    /** Properties of a Msg_VictoryBoxGetAwardRsp. */
    interface IMsg_VictoryBoxGetAwardRsp {

        /** Msg_VictoryBoxGetAwardRsp result */
        result?: (proto.Msg_VictoryBoxGetAwardRsp.ErrorCode|null);

        /** Msg_VictoryBoxGetAwardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);

        /** Msg_VictoryBoxGetAwardRsp RewardCount */
        RewardCount?: (number|null);

        /** Msg_VictoryBoxGetAwardRsp RefuseCount */
        RefuseCount?: (number|null);
    }

    /** Represents a Msg_VictoryBoxGetAwardRsp. */
    class Msg_VictoryBoxGetAwardRsp implements IMsg_VictoryBoxGetAwardRsp {

        /**
         * Constructs a new Msg_VictoryBoxGetAwardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VictoryBoxGetAwardRsp);

        /** Msg_VictoryBoxGetAwardRsp result. */
        public result: proto.Msg_VictoryBoxGetAwardRsp.ErrorCode;

        /** Msg_VictoryBoxGetAwardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /** Msg_VictoryBoxGetAwardRsp RewardCount. */
        public RewardCount: number;

        /** Msg_VictoryBoxGetAwardRsp RefuseCount. */
        public RefuseCount: number;

        /**
         * Encodes the specified Msg_VictoryBoxGetAwardRsp message. Does not implicitly {@link proto.Msg_VictoryBoxGetAwardRsp.verify|verify} messages.
         * @param m Msg_VictoryBoxGetAwardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VictoryBoxGetAwardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VictoryBoxGetAwardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VictoryBoxGetAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VictoryBoxGetAwardRsp;
    }

    namespace Msg_VictoryBoxGetAwardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TimesNotEnough = 1
        }
    }

    /** AdType enum. */
    enum AdType {
        AdType_LuckyBox = 0,
        AdType_VictoryBox = 1,
        AdType_SeasonScore = 2,
        AdType_PickedGift = 3,
        AdType_SpecialGoods = 4,
        AdType_TaskBox = 5,
        AdType_Max = 6
    }

    /** Properties of a Msg_WeeklyAdBoxInfoReq. */
    interface IMsg_WeeklyAdBoxInfoReq {
    }

    /** Represents a Msg_WeeklyAdBoxInfoReq. */
    class Msg_WeeklyAdBoxInfoReq implements IMsg_WeeklyAdBoxInfoReq {

        /**
         * Constructs a new Msg_WeeklyAdBoxInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WeeklyAdBoxInfoReq);

        /**
         * Encodes the specified Msg_WeeklyAdBoxInfoReq message. Does not implicitly {@link proto.Msg_WeeklyAdBoxInfoReq.verify|verify} messages.
         * @param m Msg_WeeklyAdBoxInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WeeklyAdBoxInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WeeklyAdBoxInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WeeklyAdBoxInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WeeklyAdBoxInfoReq;
    }

    /** Properties of a Msg_WeeklyAdBoxInfoRsp. */
    interface IMsg_WeeklyAdBoxInfoRsp {

        /** Msg_WeeklyAdBoxInfoRsp BoxID */
        BoxID?: (number|null);

        /** Msg_WeeklyAdBoxInfoRsp UnlockCount */
        UnlockCount?: (number|null);

        /** Msg_WeeklyAdBoxInfoRsp RewardList */
        RewardList?: (number[]|null);

        /** Msg_WeeklyAdBoxInfoRsp AcquireList */
        AcquireList?: (number[]|null);

        /** Msg_WeeklyAdBoxInfoRsp AdWatchedCount */
        AdWatchedCount?: (number[]|null);
    }

    /** Represents a Msg_WeeklyAdBoxInfoRsp. */
    class Msg_WeeklyAdBoxInfoRsp implements IMsg_WeeklyAdBoxInfoRsp {

        /**
         * Constructs a new Msg_WeeklyAdBoxInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WeeklyAdBoxInfoRsp);

        /** Msg_WeeklyAdBoxInfoRsp BoxID. */
        public BoxID: number;

        /** Msg_WeeklyAdBoxInfoRsp UnlockCount. */
        public UnlockCount: number;

        /** Msg_WeeklyAdBoxInfoRsp RewardList. */
        public RewardList: number[];

        /** Msg_WeeklyAdBoxInfoRsp AcquireList. */
        public AcquireList: number[];

        /** Msg_WeeklyAdBoxInfoRsp AdWatchedCount. */
        public AdWatchedCount: number[];

        /**
         * Encodes the specified Msg_WeeklyAdBoxInfoRsp message. Does not implicitly {@link proto.Msg_WeeklyAdBoxInfoRsp.verify|verify} messages.
         * @param m Msg_WeeklyAdBoxInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WeeklyAdBoxInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WeeklyAdBoxInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WeeklyAdBoxInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WeeklyAdBoxInfoRsp;
    }

    /** Properties of a Msg_WeeklyAdBoxGetAwardReq. */
    interface IMsg_WeeklyAdBoxGetAwardReq {

        /** Msg_WeeklyAdBoxGetAwardReq DayIndex */
        DayIndex?: (number|null);
    }

    /** Represents a Msg_WeeklyAdBoxGetAwardReq. */
    class Msg_WeeklyAdBoxGetAwardReq implements IMsg_WeeklyAdBoxGetAwardReq {

        /**
         * Constructs a new Msg_WeeklyAdBoxGetAwardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WeeklyAdBoxGetAwardReq);

        /** Msg_WeeklyAdBoxGetAwardReq DayIndex. */
        public DayIndex: number;

        /**
         * Encodes the specified Msg_WeeklyAdBoxGetAwardReq message. Does not implicitly {@link proto.Msg_WeeklyAdBoxGetAwardReq.verify|verify} messages.
         * @param m Msg_WeeklyAdBoxGetAwardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WeeklyAdBoxGetAwardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WeeklyAdBoxGetAwardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WeeklyAdBoxGetAwardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WeeklyAdBoxGetAwardReq;
    }

    /** Properties of a Msg_WeeklyAdBoxGetAwardRsp. */
    interface IMsg_WeeklyAdBoxGetAwardRsp {

        /** Msg_WeeklyAdBoxGetAwardRsp result */
        result?: (proto.Msg_WeeklyAdBoxGetAwardRsp.ErrorCode|null);

        /** Msg_WeeklyAdBoxGetAwardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_WeeklyAdBoxGetAwardRsp. */
    class Msg_WeeklyAdBoxGetAwardRsp implements IMsg_WeeklyAdBoxGetAwardRsp {

        /**
         * Constructs a new Msg_WeeklyAdBoxGetAwardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WeeklyAdBoxGetAwardRsp);

        /** Msg_WeeklyAdBoxGetAwardRsp result. */
        public result: proto.Msg_WeeklyAdBoxGetAwardRsp.ErrorCode;

        /** Msg_WeeklyAdBoxGetAwardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_WeeklyAdBoxGetAwardRsp message. Does not implicitly {@link proto.Msg_WeeklyAdBoxGetAwardRsp.verify|verify} messages.
         * @param m Msg_WeeklyAdBoxGetAwardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WeeklyAdBoxGetAwardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WeeklyAdBoxGetAwardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WeeklyAdBoxGetAwardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WeeklyAdBoxGetAwardRsp;
    }

    namespace Msg_WeeklyAdBoxGetAwardRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Unknown = 1,
            Locked = 2,
            Received = 3,
            WatchLimit = 4
        }
    }

    /** Properties of a Msg_GachaReq. */
    interface IMsg_GachaReq {

        /** Msg_GachaReq Type */
        Type?: (proto.Msg_GachaReq.GachaType|null);
    }

    /** Represents a Msg_GachaReq. */
    class Msg_GachaReq implements IMsg_GachaReq {

        /**
         * Constructs a new Msg_GachaReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaReq);

        /** Msg_GachaReq Type. */
        public Type: proto.Msg_GachaReq.GachaType;

        /**
         * Encodes the specified Msg_GachaReq message. Does not implicitly {@link proto.Msg_GachaReq.verify|verify} messages.
         * @param m Msg_GachaReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GachaReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GachaReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GachaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GachaReq;
    }

    namespace Msg_GachaReq {

        /** GachaType enum. */
        enum GachaType {
            Unknown = 0,
            One = 1,
            Ten = 2
        }
    }

    /** Properties of a Msg_GachaRsp. */
    interface IMsg_GachaRsp {

        /** Msg_GachaRsp Result */
        Result?: (proto.Msg_GachaRsp.ErrorCode|null);

        /** Msg_GachaRsp HitCount */
        HitCount?: (number|null);

        /** Msg_GachaRsp OpenCount */
        OpenCount?: (number|null);

        /** Msg_GachaRsp awards */
        awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GachaRsp. */
    class Msg_GachaRsp implements IMsg_GachaRsp {

        /**
         * Constructs a new Msg_GachaRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaRsp);

        /** Msg_GachaRsp Result. */
        public Result: proto.Msg_GachaRsp.ErrorCode;

        /** Msg_GachaRsp HitCount. */
        public HitCount: number;

        /** Msg_GachaRsp OpenCount. */
        public OpenCount: number;

        /** Msg_GachaRsp awards. */
        public awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GachaRsp message. Does not implicitly {@link proto.Msg_GachaRsp.verify|verify} messages.
         * @param m Msg_GachaRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GachaRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GachaRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GachaRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GachaRsp;
    }

    namespace Msg_GachaRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            TypeError = 1,
            DeamondNotEnough = 2
        }
    }

    /** Properties of a Msg_GachaBoxReq. */
    interface IMsg_GachaBoxReq {

        /** Msg_GachaBoxReq Type */
        Type?: (proto.GachaOpenType|null);

        /** Msg_GachaBoxReq CardID */
        CardID?: (number|null);
    }

    /** Represents a Msg_GachaBoxReq. */
    class Msg_GachaBoxReq implements IMsg_GachaBoxReq {

        /**
         * Constructs a new Msg_GachaBoxReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaBoxReq);

        /** Msg_GachaBoxReq Type. */
        public Type: proto.GachaOpenType;

        /** Msg_GachaBoxReq CardID. */
        public CardID: number;

        /**
         * Encodes the specified Msg_GachaBoxReq message. Does not implicitly {@link proto.Msg_GachaBoxReq.verify|verify} messages.
         * @param m Msg_GachaBoxReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GachaBoxReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GachaBoxReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GachaBoxReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GachaBoxReq;
    }

    /** Properties of a Msg_GachaBoxRsp. */
    interface IMsg_GachaBoxRsp {

        /** Msg_GachaBoxRsp Result */
        Result?: (proto.Msg_GachaBoxRsp.ErrorCode|null);

        /** Msg_GachaBoxRsp OpenCount */
        OpenCount?: (number|null);

        /** Msg_GachaBoxRsp Status */
        Status?: (number|null);

        /** Msg_GachaBoxRsp awards */
        awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GachaBoxRsp. */
    class Msg_GachaBoxRsp implements IMsg_GachaBoxRsp {

        /**
         * Constructs a new Msg_GachaBoxRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaBoxRsp);

        /** Msg_GachaBoxRsp Result. */
        public Result: proto.Msg_GachaBoxRsp.ErrorCode;

        /** Msg_GachaBoxRsp OpenCount. */
        public OpenCount: number;

        /** Msg_GachaBoxRsp Status. */
        public Status: number;

        /** Msg_GachaBoxRsp awards. */
        public awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GachaBoxRsp message. Does not implicitly {@link proto.Msg_GachaBoxRsp.verify|verify} messages.
         * @param m Msg_GachaBoxRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GachaBoxRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GachaBoxRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GachaBoxRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GachaBoxRsp;
    }

    namespace Msg_GachaBoxRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            AlreadyOpened = 1,
            CountLack = 2,
            TypeError = 3,
            NotFound = 4
        }
    }

    /** Properties of a Msg_CretePrivateRoomReq. */
    interface IMsg_CretePrivateRoomReq {

        /** Msg_CretePrivateRoomReq type */
        type?: (proto.FightType|null);

        /** Msg_CretePrivateRoomReq message */
        message?: (string|null);
    }

    /** Represents a Msg_CretePrivateRoomReq. */
    class Msg_CretePrivateRoomReq implements IMsg_CretePrivateRoomReq {

        /**
         * Constructs a new Msg_CretePrivateRoomReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CretePrivateRoomReq);

        /** Msg_CretePrivateRoomReq type. */
        public type: proto.FightType;

        /** Msg_CretePrivateRoomReq message. */
        public message: string;

        /**
         * Encodes the specified Msg_CretePrivateRoomReq message. Does not implicitly {@link proto.Msg_CretePrivateRoomReq.verify|verify} messages.
         * @param m Msg_CretePrivateRoomReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CretePrivateRoomReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CretePrivateRoomReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CretePrivateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CretePrivateRoomReq;
    }

    /** Properties of a Msg_CretePrivateRoomRsp. */
    interface IMsg_CretePrivateRoomRsp {

        /** Msg_CretePrivateRoomRsp roleId */
        roleId?: (string|null);

        /** Msg_CretePrivateRoomRsp roomID */
        roomID?: (number|null);
    }

    /** Represents a Msg_CretePrivateRoomRsp. */
    class Msg_CretePrivateRoomRsp implements IMsg_CretePrivateRoomRsp {

        /**
         * Constructs a new Msg_CretePrivateRoomRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CretePrivateRoomRsp);

        /** Msg_CretePrivateRoomRsp roleId. */
        public roleId: string;

        /** Msg_CretePrivateRoomRsp roomID. */
        public roomID: number;

        /**
         * Encodes the specified Msg_CretePrivateRoomRsp message. Does not implicitly {@link proto.Msg_CretePrivateRoomRsp.verify|verify} messages.
         * @param m Msg_CretePrivateRoomRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CretePrivateRoomRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CretePrivateRoomRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CretePrivateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CretePrivateRoomRsp;
    }

    /** Properties of a Msg_JoinPrivateRoomReq. */
    interface IMsg_JoinPrivateRoomReq {

        /** Msg_JoinPrivateRoomReq type */
        type?: (proto.FightType|null);

        /** Msg_JoinPrivateRoomReq roomID */
        roomID?: (number|null);
    }

    /** Represents a Msg_JoinPrivateRoomReq. */
    class Msg_JoinPrivateRoomReq implements IMsg_JoinPrivateRoomReq {

        /**
         * Constructs a new Msg_JoinPrivateRoomReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinPrivateRoomReq);

        /** Msg_JoinPrivateRoomReq type. */
        public type: proto.FightType;

        /** Msg_JoinPrivateRoomReq roomID. */
        public roomID: number;

        /**
         * Encodes the specified Msg_JoinPrivateRoomReq message. Does not implicitly {@link proto.Msg_JoinPrivateRoomReq.verify|verify} messages.
         * @param m Msg_JoinPrivateRoomReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinPrivateRoomReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinPrivateRoomReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinPrivateRoomReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinPrivateRoomReq;
    }

    /** Properties of a Msg_JoinPrivateRoomRsp. */
    interface IMsg_JoinPrivateRoomRsp {

        /** Msg_JoinPrivateRoomRsp Result */
        Result?: (proto.Msg_JoinPrivateRoomRsp.ErrorCode|null);

        /** Msg_JoinPrivateRoomRsp roomID */
        roomID?: (number|null);
    }

    /** Represents a Msg_JoinPrivateRoomRsp. */
    class Msg_JoinPrivateRoomRsp implements IMsg_JoinPrivateRoomRsp {

        /**
         * Constructs a new Msg_JoinPrivateRoomRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinPrivateRoomRsp);

        /** Msg_JoinPrivateRoomRsp Result. */
        public Result: proto.Msg_JoinPrivateRoomRsp.ErrorCode;

        /** Msg_JoinPrivateRoomRsp roomID. */
        public roomID: number;

        /**
         * Encodes the specified Msg_JoinPrivateRoomRsp message. Does not implicitly {@link proto.Msg_JoinPrivateRoomRsp.verify|verify} messages.
         * @param m Msg_JoinPrivateRoomRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinPrivateRoomRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinPrivateRoomRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinPrivateRoomRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinPrivateRoomRsp;
    }

    namespace Msg_JoinPrivateRoomRsp {

        /** ErrorCode enum. */
        enum ErrorCode {
            Succeed = 0,
            Failed = 1
        }
    }

    /** ChannelRelayType enum. */
    enum ChannelRelayType {
        None = 0,
        ByteDance = 1,
        TencentADQ = 2,
        WechatMP = 3
    }

    /** Properties of a Msg_SeasonOverRsp. */
    interface IMsg_SeasonOverRsp {
    }

    /** Represents a Msg_SeasonOverRsp. */
    class Msg_SeasonOverRsp implements IMsg_SeasonOverRsp {

        /**
         * Constructs a new Msg_SeasonOverRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SeasonOverRsp);

        /**
         * Encodes the specified Msg_SeasonOverRsp message. Does not implicitly {@link proto.Msg_SeasonOverRsp.verify|verify} messages.
         * @param m Msg_SeasonOverRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SeasonOverRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SeasonOverRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SeasonOverRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SeasonOverRsp;
    }

    /** Properties of a Msg_SeasonResetRsp. */
    interface IMsg_SeasonResetRsp {

        /** Msg_SeasonResetRsp OldScore */
        OldScore?: (number|null);

        /** Msg_SeasonResetRsp Score */
        Score?: (number|null);
    }

    /** Represents a Msg_SeasonResetRsp. */
    class Msg_SeasonResetRsp implements IMsg_SeasonResetRsp {

        /**
         * Constructs a new Msg_SeasonResetRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SeasonResetRsp);

        /** Msg_SeasonResetRsp OldScore. */
        public OldScore: number;

        /** Msg_SeasonResetRsp Score. */
        public Score: number;

        /**
         * Encodes the specified Msg_SeasonResetRsp message. Does not implicitly {@link proto.Msg_SeasonResetRsp.verify|verify} messages.
         * @param m Msg_SeasonResetRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SeasonResetRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SeasonResetRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SeasonResetRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SeasonResetRsp;
    }

    /** Properties of a Msg_SeasonRewardMsgRsp. */
    interface IMsg_SeasonRewardMsgRsp {

        /** Msg_SeasonRewardMsgRsp SeasonID */
        SeasonID?: (number|null);

        /** Msg_SeasonRewardMsgRsp Ranking */
        Ranking?: (number|null);
    }

    /** Represents a Msg_SeasonRewardMsgRsp. */
    class Msg_SeasonRewardMsgRsp implements IMsg_SeasonRewardMsgRsp {

        /**
         * Constructs a new Msg_SeasonRewardMsgRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SeasonRewardMsgRsp);

        /** Msg_SeasonRewardMsgRsp SeasonID. */
        public SeasonID: number;

        /** Msg_SeasonRewardMsgRsp Ranking. */
        public Ranking: number;

        /**
         * Encodes the specified Msg_SeasonRewardMsgRsp message. Does not implicitly {@link proto.Msg_SeasonRewardMsgRsp.verify|verify} messages.
         * @param m Msg_SeasonRewardMsgRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SeasonRewardMsgRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SeasonRewardMsgRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SeasonRewardMsgRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SeasonRewardMsgRsp;
    }

    /** Properties of a Msg_GetSeasonRewardReq. */
    interface IMsg_GetSeasonRewardReq {
    }

    /** Represents a Msg_GetSeasonRewardReq. */
    class Msg_GetSeasonRewardReq implements IMsg_GetSeasonRewardReq {

        /**
         * Constructs a new Msg_GetSeasonRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSeasonRewardReq);

        /**
         * Encodes the specified Msg_GetSeasonRewardReq message. Does not implicitly {@link proto.Msg_GetSeasonRewardReq.verify|verify} messages.
         * @param m Msg_GetSeasonRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSeasonRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSeasonRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSeasonRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSeasonRewardReq;
    }

    /** Properties of a Msg_GetSeasonRewardRsp. */
    interface IMsg_GetSeasonRewardRsp {

        /** Msg_GetSeasonRewardRsp Awards */
        Awards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_GetSeasonRewardRsp. */
    class Msg_GetSeasonRewardRsp implements IMsg_GetSeasonRewardRsp {

        /**
         * Constructs a new Msg_GetSeasonRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSeasonRewardRsp);

        /** Msg_GetSeasonRewardRsp Awards. */
        public Awards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_GetSeasonRewardRsp message. Does not implicitly {@link proto.Msg_GetSeasonRewardRsp.verify|verify} messages.
         * @param m Msg_GetSeasonRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSeasonRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSeasonRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSeasonRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSeasonRewardRsp;
    }

    /** Properties of a Msg_BountyPlayerNumberChangedPush. */
    interface IMsg_BountyPlayerNumberChangedPush {

        /** Msg_BountyPlayerNumberChangedPush PlayerNumber */
        PlayerNumber?: (number|null);
    }

    /** Represents a Msg_BountyPlayerNumberChangedPush. */
    class Msg_BountyPlayerNumberChangedPush implements IMsg_BountyPlayerNumberChangedPush {

        /**
         * Constructs a new Msg_BountyPlayerNumberChangedPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BountyPlayerNumberChangedPush);

        /** Msg_BountyPlayerNumberChangedPush PlayerNumber. */
        public PlayerNumber: number;

        /**
         * Encodes the specified Msg_BountyPlayerNumberChangedPush message. Does not implicitly {@link proto.Msg_BountyPlayerNumberChangedPush.verify|verify} messages.
         * @param m Msg_BountyPlayerNumberChangedPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BountyPlayerNumberChangedPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BountyPlayerNumberChangedPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BountyPlayerNumberChangedPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BountyPlayerNumberChangedPush;
    }

    /** Properties of a Msg_BountyAllFightDataPush. */
    interface IMsg_BountyAllFightDataPush {

        /** Msg_BountyAllFightDataPush allData */
        allData?: (proto.IBountyFightData[]|null);
    }

    /** Represents a Msg_BountyAllFightDataPush. */
    class Msg_BountyAllFightDataPush implements IMsg_BountyAllFightDataPush {

        /**
         * Constructs a new Msg_BountyAllFightDataPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BountyAllFightDataPush);

        /** Msg_BountyAllFightDataPush allData. */
        public allData: proto.IBountyFightData[];

        /**
         * Encodes the specified Msg_BountyAllFightDataPush message. Does not implicitly {@link proto.Msg_BountyAllFightDataPush.verify|verify} messages.
         * @param m Msg_BountyAllFightDataPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BountyAllFightDataPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BountyAllFightDataPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BountyAllFightDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BountyAllFightDataPush;
    }

    /** Properties of a Msg_BountyRewardPush. */
    interface IMsg_BountyRewardPush {

        /** Msg_BountyRewardPush rank */
        rank?: (number|null);

        /** Msg_BountyRewardPush allData */
        allData?: (proto.IBountyFightData[]|null);

        /** Msg_BountyRewardPush score */
        score?: (number|null);

        /** Msg_BountyRewardPush diamond */
        diamond?: (number|null);

        /** Msg_BountyRewardPush canRetrieve */
        canRetrieve?: (boolean|null);

        /** Msg_BountyRewardPush remainRetrieveTimes */
        remainRetrieveTimes?: (number|null);

        /** Msg_BountyRewardPush roleCup */
        roleCup?: (number|null);

        /** Msg_BountyRewardPush changeCup */
        changeCup?: (number|null);

        /** Msg_BountyRewardPush watchAdCount */
        watchAdCount?: (number|null);

        /** Msg_BountyRewardPush fightType */
        fightType?: (proto.FightType|null);

        /** Msg_BountyRewardPush isWin */
        isWin?: (boolean|null);

        /** Msg_BountyRewardPush rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BountyRewardPush. */
    class Msg_BountyRewardPush implements IMsg_BountyRewardPush {

        /**
         * Constructs a new Msg_BountyRewardPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BountyRewardPush);

        /** Msg_BountyRewardPush rank. */
        public rank: number;

        /** Msg_BountyRewardPush allData. */
        public allData: proto.IBountyFightData[];

        /** Msg_BountyRewardPush score. */
        public score: number;

        /** Msg_BountyRewardPush diamond. */
        public diamond: number;

        /** Msg_BountyRewardPush canRetrieve. */
        public canRetrieve: boolean;

        /** Msg_BountyRewardPush remainRetrieveTimes. */
        public remainRetrieveTimes: number;

        /** Msg_BountyRewardPush roleCup. */
        public roleCup: number;

        /** Msg_BountyRewardPush changeCup. */
        public changeCup: number;

        /** Msg_BountyRewardPush watchAdCount. */
        public watchAdCount: number;

        /** Msg_BountyRewardPush fightType. */
        public fightType: proto.FightType;

        /** Msg_BountyRewardPush isWin. */
        public isWin: boolean;

        /** Msg_BountyRewardPush rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BountyRewardPush message. Does not implicitly {@link proto.Msg_BountyRewardPush.verify|verify} messages.
         * @param m Msg_BountyRewardPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BountyRewardPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BountyRewardPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BountyRewardPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BountyRewardPush;
    }

    /** Properties of a Msg_RetrieveBountyRewardReq. */
    interface IMsg_RetrieveBountyRewardReq {

        /** Msg_RetrieveBountyRewardReq retrieve */
        retrieve?: (boolean|null);
    }

    /** Represents a Msg_RetrieveBountyRewardReq. */
    class Msg_RetrieveBountyRewardReq implements IMsg_RetrieveBountyRewardReq {

        /**
         * Constructs a new Msg_RetrieveBountyRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RetrieveBountyRewardReq);

        /** Msg_RetrieveBountyRewardReq retrieve. */
        public retrieve: boolean;

        /**
         * Encodes the specified Msg_RetrieveBountyRewardReq message. Does not implicitly {@link proto.Msg_RetrieveBountyRewardReq.verify|verify} messages.
         * @param m Msg_RetrieveBountyRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RetrieveBountyRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RetrieveBountyRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RetrieveBountyRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RetrieveBountyRewardReq;
    }

    /** Properties of a Msg_RetrieveBountyRewardRsp. */
    interface IMsg_RetrieveBountyRewardRsp {

        /** Msg_RetrieveBountyRewardRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_RetrieveBountyRewardRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_RetrieveBountyRewardRsp. */
    class Msg_RetrieveBountyRewardRsp implements IMsg_RetrieveBountyRewardRsp {

        /**
         * Constructs a new Msg_RetrieveBountyRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RetrieveBountyRewardRsp);

        /** Msg_RetrieveBountyRewardRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_RetrieveBountyRewardRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_RetrieveBountyRewardRsp message. Does not implicitly {@link proto.Msg_RetrieveBountyRewardRsp.verify|verify} messages.
         * @param m Msg_RetrieveBountyRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RetrieveBountyRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RetrieveBountyRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RetrieveBountyRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RetrieveBountyRewardRsp;
    }

    /** Properties of a Msg_GetBountyStatReq. */
    interface IMsg_GetBountyStatReq {
    }

    /** Represents a Msg_GetBountyStatReq. */
    class Msg_GetBountyStatReq implements IMsg_GetBountyStatReq {

        /**
         * Constructs a new Msg_GetBountyStatReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBountyStatReq);

        /**
         * Encodes the specified Msg_GetBountyStatReq message. Does not implicitly {@link proto.Msg_GetBountyStatReq.verify|verify} messages.
         * @param m Msg_GetBountyStatReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBountyStatReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBountyStatReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBountyStatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBountyStatReq;
    }

    /** Properties of a Msg_GetBountyStatRsp. */
    interface IMsg_GetBountyStatRsp {

        /** Msg_GetBountyStatRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetBountyStatRsp totalCount */
        totalCount?: (number|null);

        /** Msg_GetBountyStatRsp firstRankCount */
        firstRankCount?: (number|null);

        /** Msg_GetBountyStatRsp winRate */
        winRate?: (number|null);
    }

    /** Represents a Msg_GetBountyStatRsp. */
    class Msg_GetBountyStatRsp implements IMsg_GetBountyStatRsp {

        /**
         * Constructs a new Msg_GetBountyStatRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBountyStatRsp);

        /** Msg_GetBountyStatRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetBountyStatRsp totalCount. */
        public totalCount: number;

        /** Msg_GetBountyStatRsp firstRankCount. */
        public firstRankCount: number;

        /** Msg_GetBountyStatRsp winRate. */
        public winRate: number;

        /**
         * Encodes the specified Msg_GetBountyStatRsp message. Does not implicitly {@link proto.Msg_GetBountyStatRsp.verify|verify} messages.
         * @param m Msg_GetBountyStatRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBountyStatRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBountyStatRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBountyStatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBountyStatRsp;
    }

    /** Properties of a Msg_ClearBountyStatReq. */
    interface IMsg_ClearBountyStatReq {
    }

    /** Represents a Msg_ClearBountyStatReq. */
    class Msg_ClearBountyStatReq implements IMsg_ClearBountyStatReq {

        /**
         * Constructs a new Msg_ClearBountyStatReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClearBountyStatReq);

        /**
         * Encodes the specified Msg_ClearBountyStatReq message. Does not implicitly {@link proto.Msg_ClearBountyStatReq.verify|verify} messages.
         * @param m Msg_ClearBountyStatReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClearBountyStatReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClearBountyStatReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClearBountyStatReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClearBountyStatReq;
    }

    /** Properties of a Msg_ClearBountyStatRsp. */
    interface IMsg_ClearBountyStatRsp {

        /** Msg_ClearBountyStatRsp result */
        result?: (proto.CommonErrorCode|null);
    }

    /** Represents a Msg_ClearBountyStatRsp. */
    class Msg_ClearBountyStatRsp implements IMsg_ClearBountyStatRsp {

        /**
         * Constructs a new Msg_ClearBountyStatRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClearBountyStatRsp);

        /** Msg_ClearBountyStatRsp result. */
        public result: proto.CommonErrorCode;

        /**
         * Encodes the specified Msg_ClearBountyStatRsp message. Does not implicitly {@link proto.Msg_ClearBountyStatRsp.verify|verify} messages.
         * @param m Msg_ClearBountyStatRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClearBountyStatRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClearBountyStatRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClearBountyStatRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClearBountyStatRsp;
    }

    /** Properties of a Msg_GetContinuousGiftReq. */
    interface IMsg_GetContinuousGiftReq {
    }

    /** Represents a Msg_GetContinuousGiftReq. */
    class Msg_GetContinuousGiftReq implements IMsg_GetContinuousGiftReq {

        /**
         * Constructs a new Msg_GetContinuousGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetContinuousGiftReq);

        /**
         * Encodes the specified Msg_GetContinuousGiftReq message. Does not implicitly {@link proto.Msg_GetContinuousGiftReq.verify|verify} messages.
         * @param m Msg_GetContinuousGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetContinuousGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetContinuousGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetContinuousGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetContinuousGiftReq;
    }

    /** Properties of a Msg_GetContinuousGiftRsp. */
    interface IMsg_GetContinuousGiftRsp {

        /** Msg_GetContinuousGiftRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetContinuousGiftRsp boughtId */
        boughtId?: (number|null);
    }

    /** Represents a Msg_GetContinuousGiftRsp. */
    class Msg_GetContinuousGiftRsp implements IMsg_GetContinuousGiftRsp {

        /**
         * Constructs a new Msg_GetContinuousGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetContinuousGiftRsp);

        /** Msg_GetContinuousGiftRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetContinuousGiftRsp boughtId. */
        public boughtId: number;

        /**
         * Encodes the specified Msg_GetContinuousGiftRsp message. Does not implicitly {@link proto.Msg_GetContinuousGiftRsp.verify|verify} messages.
         * @param m Msg_GetContinuousGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetContinuousGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetContinuousGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetContinuousGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetContinuousGiftRsp;
    }

    /** Properties of a Msg_BuyContinuousGiftReq. */
    interface IMsg_BuyContinuousGiftReq {
    }

    /** Represents a Msg_BuyContinuousGiftReq. */
    class Msg_BuyContinuousGiftReq implements IMsg_BuyContinuousGiftReq {

        /**
         * Constructs a new Msg_BuyContinuousGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyContinuousGiftReq);

        /**
         * Encodes the specified Msg_BuyContinuousGiftReq message. Does not implicitly {@link proto.Msg_BuyContinuousGiftReq.verify|verify} messages.
         * @param m Msg_BuyContinuousGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyContinuousGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyContinuousGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyContinuousGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyContinuousGiftReq;
    }

    /** Properties of a Msg_BuyContinuousGiftRsp. */
    interface IMsg_BuyContinuousGiftRsp {

        /** Msg_BuyContinuousGiftRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_BuyContinuousGiftRsp boughtId */
        boughtId?: (number|null);

        /** Msg_BuyContinuousGiftRsp rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyContinuousGiftRsp. */
    class Msg_BuyContinuousGiftRsp implements IMsg_BuyContinuousGiftRsp {

        /**
         * Constructs a new Msg_BuyContinuousGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyContinuousGiftRsp);

        /** Msg_BuyContinuousGiftRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_BuyContinuousGiftRsp boughtId. */
        public boughtId: number;

        /** Msg_BuyContinuousGiftRsp rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyContinuousGiftRsp message. Does not implicitly {@link proto.Msg_BuyContinuousGiftRsp.verify|verify} messages.
         * @param m Msg_BuyContinuousGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyContinuousGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyContinuousGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyContinuousGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyContinuousGiftRsp;
    }

    /** Properties of a Msg_GetFirstRechargeGiftReq. */
    interface IMsg_GetFirstRechargeGiftReq {
    }

    /** Represents a Msg_GetFirstRechargeGiftReq. */
    class Msg_GetFirstRechargeGiftReq implements IMsg_GetFirstRechargeGiftReq {

        /**
         * Constructs a new Msg_GetFirstRechargeGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFirstRechargeGiftReq);

        /**
         * Encodes the specified Msg_GetFirstRechargeGiftReq message. Does not implicitly {@link proto.Msg_GetFirstRechargeGiftReq.verify|verify} messages.
         * @param m Msg_GetFirstRechargeGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFirstRechargeGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFirstRechargeGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFirstRechargeGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFirstRechargeGiftReq;
    }

    /** Properties of a BoughtTimes. */
    interface IBoughtTimes {

        /** BoughtTimes id */
        id?: (number|null);

        /** BoughtTimes times */
        times?: (number|null);
    }

    /** Represents a BoughtTimes. */
    class BoughtTimes implements IBoughtTimes {

        /**
         * Constructs a new BoughtTimes.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBoughtTimes);

        /** BoughtTimes id. */
        public id: number;

        /** BoughtTimes times. */
        public times: number;

        /**
         * Encodes the specified BoughtTimes message. Does not implicitly {@link proto.BoughtTimes.verify|verify} messages.
         * @param m BoughtTimes message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBoughtTimes, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BoughtTimes message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BoughtTimes
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BoughtTimes;
    }

    /** Properties of a Msg_GetFirstRechargeGiftRsp. */
    interface IMsg_GetFirstRechargeGiftRsp {

        /** Msg_GetFirstRechargeGiftRsp result */
        result?: (proto.CommonErrorCode|null);

        /** Msg_GetFirstRechargeGiftRsp boughtTimes */
        boughtTimes?: (proto.IBoughtTimes[]|null);
    }

    /** Represents a Msg_GetFirstRechargeGiftRsp. */
    class Msg_GetFirstRechargeGiftRsp implements IMsg_GetFirstRechargeGiftRsp {

        /**
         * Constructs a new Msg_GetFirstRechargeGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFirstRechargeGiftRsp);

        /** Msg_GetFirstRechargeGiftRsp result. */
        public result: proto.CommonErrorCode;

        /** Msg_GetFirstRechargeGiftRsp boughtTimes. */
        public boughtTimes: proto.IBoughtTimes[];

        /**
         * Encodes the specified Msg_GetFirstRechargeGiftRsp message. Does not implicitly {@link proto.Msg_GetFirstRechargeGiftRsp.verify|verify} messages.
         * @param m Msg_GetFirstRechargeGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFirstRechargeGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFirstRechargeGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFirstRechargeGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFirstRechargeGiftRsp;
    }

    /** Properties of a Msg_BuyFirstRechargeGiftPush. */
    interface IMsg_BuyFirstRechargeGiftPush {

        /** Msg_BuyFirstRechargeGiftPush boughtTimes */
        boughtTimes?: (proto.IBoughtTimes[]|null);

        /** Msg_BuyFirstRechargeGiftPush rewards */
        rewards?: (proto.IRewardSimpleInfo[]|null);
    }

    /** Represents a Msg_BuyFirstRechargeGiftPush. */
    class Msg_BuyFirstRechargeGiftPush implements IMsg_BuyFirstRechargeGiftPush {

        /**
         * Constructs a new Msg_BuyFirstRechargeGiftPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyFirstRechargeGiftPush);

        /** Msg_BuyFirstRechargeGiftPush boughtTimes. */
        public boughtTimes: proto.IBoughtTimes[];

        /** Msg_BuyFirstRechargeGiftPush rewards. */
        public rewards: proto.IRewardSimpleInfo[];

        /**
         * Encodes the specified Msg_BuyFirstRechargeGiftPush message. Does not implicitly {@link proto.Msg_BuyFirstRechargeGiftPush.verify|verify} messages.
         * @param m Msg_BuyFirstRechargeGiftPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyFirstRechargeGiftPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyFirstRechargeGiftPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyFirstRechargeGiftPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyFirstRechargeGiftPush;
    }
}
