
/** Namespace proto. */
export namespace proto {

    /** Ptl enum. */
    enum Ptl {
        UNSPECIFIED = 0,
        Ping = 10000,
        LoginReq = 10001,
        LoginRsp = 10002,
        Pong = 10003,
        CreateRoleReq = 11000,
        CreateRoleRsp = 11001,
        SyncRolePush = 11002,
        ItemChangePush = 11007,
        GetHeroBagReq = 11012,
        GetHeroBagRsp = 11013,
        SetTeamSlotReq = 11014,
        SetTeamSlotRsp = 11015,
        UpTeamSlotLevelReq = 11016,
        UpTeamSlotLevelRsp = 11017,
        ResetTeamSlotLevelReq = 11018,
        ResetTeamSlotLevelRsp = 11019,
        UpHeroStarReq = 11020,
        UpHeroStarRsp = 11021,
        ResetHeroStarReq = 11022,
        ResetHeroStarRsp = 11023,
        DisbandHeroesReq = 11024,
        DisbandHeroesRsp = 11025,
        UpHeroStarOneClickReq = 11026,
        UpHeroStarOneClickRsp = 11027,
        UpHeroBagCapacityReq = 11028,
        UpHeroBagCapacityRsp = 11029,
        ChangeEquipReq = 11030,
        ChangeEquipRsp = 11031,
        EnhanceEquipReq = 11032,
        EnhanceEquipRsp = 11033,
        RefineEquipReq = 11034,
        RefineEquipRsp = 11035,
        UpdateHeroMasterLv = 11036,
        ReceiveRecommendTeamRewardReq = 11037,
        ReceiveRecommendTeamRewardRsp = 11038,
        ReceiveHeroAlbumRewardReq = 11039,
        ReceiveHeroAlbumRewardRsp = 11040,
        UpLevelResonanceReq = 11041,
        UpLevelResonanceRsp = 11042,
        UpStarResonanceReq = 11043,
        UpStarResonanceRsp = 11044,
        DecomposeEquipReq = 11045,
        DecomposeEquipRsp = 11046,
        FeatherRecastReq = 11047,
        FeatherRecastRsp = 11048,
        FeatherRecastConfirmReq = 11049,
        FeatherRecastConfirmRsp = 11050,
        UpdateHeroPowerScore = 11051,
        UpdateRolePowerScore = 11052,
        FinishHeroStarStepReq = 11053,
        FinishHeroStarStepRsp = 11054,
        UpgradeGeneLevelReq = 11055,
        UpgradeGeneLevelRsp = 11056,
        UndressEquipReq = 11057,
        UndressEquipRsp = 11058,
        SwitchEquipReq = 11059,
        SwitchEquipRsp = 11060,
        UpgradeBookLevelReq = 11061,
        UpgradeBookLevelRsp = 11062,
        UpgradeBookStarReq = 11063,
        UpgradeBookStarRsp = 11064,
        TakeBookReq = 11065,
        TakeBookRsp = 11066,
        DropBookReq = 11067,
        DropBookRsp = 11068,
        UpdateBookSeriesData = 11069,
        GetScrollPaintingsReq = 11070,
        GetScrollPaintingsRsp = 11071,
        UpgradeScrollPaintingStarReq = 11072,
        UpgradeScrollPaintingStarRsp = 11073,
        GetSimpleRoleReq = 11074,
        GetSimpleRoleRsp = 11075,
        LockEquipReq = 11076,
        LockEquipRsp = 11077,
        ChangeRoleNameReq = 11078,
        ChangeRoleNameRsp = 11079,
        GetAvatarInfoReq = 11080,
        GetAvatarInfoRsp = 11081,
        SetHeadIconReq = 11082,
        SetHeadIconRsp = 11083,
        SetHeadFrameReq = 11084,
        SetHeadFrameRsp = 11085,
        SetChatBubbleReq = 11086,
        SetChatBubbleRsp = 11087,
        SetMainSceneReq = 11088,
        SetMainSceneRsp = 11089,
        BookFragmentSwitchReq = 11090,
        BookFragmentSwitchRsp = 11091,
        CombineBookFragmentReq = 11092,
        CombineBookFragmentRsp = 11093,
        RoleLevelUpPush = 11094,
        UpdateDropSum = 11095,
        GetMainStageInfoReq = 11096,
        GetMainStageInfoRsp = 11097,
        StartStageReq = 11098,
        StartStageRsp = 11099,
        FinishStageReq = 11100,
        FinishStageRsp = 11101,
        ReceiveMainFirstRewardReq = 11102,
        ReceiveMainFirstRewardRsp = 11103,
        GachaReq = 11104,
        GachaRsp = 11105,
        UseItemReq = 11106,
        UseItemRsp = 11107,
        GetOpenFunctionsReq = 11108,
        GetOpenFunctionsRsp = 11109,
        OpenFunctionChangePush = 11110,
        UpdateBookPowerScore = 11111,
        UseElixirReq = 11112,
        UseElixirRsp = 11113,
        FightInfoPush = 11114,
        ReceiveOpenFunctionRewardReq = 11115,
        ReceiveOpenFunctionRewardRsp = 11116,
        GetMailsReq = 11117,
        GetMailsRsp = 11118,
        ReceiveMailsRewardReq = 11119,
        ReceiveMailsRewardRsp = 11120,
        DeleteMailsReq = 11121,
        DeleteMailsRsp = 11122,
        NewMailsPush = 11123,
        GetDailyTasksReq = 11124,
        GetDailyTasksRsp = 11125,
        ReceiveDailyTaskRewardReq = 11126,
        ReceiveDailyTaskRewardRsp = 11127,
        ReceiveDailyActivityTaskRewardReq = 11128,
        ReceiveDailyActivityTaskRewardRsp = 11129,
        GetWeeklyTasksReq = 11130,
        GetWeeklyTasksRsp = 11131,
        ReceiveWeeklyTaskRewardReq = 11132,
        ReceiveWeeklyTaskRewardRsp = 11133,
        ReceiveWeeklyActivityTaskRewardReq = 11134,
        ReceiveWeeklyActivityTaskRewardRsp = 11135,
        GetAchievementTasksReq = 11136,
        GetAchievementTasksRsp = 11137,
        ReceiveAchievementTaskRewardReq = 11138,
        ReceiveAchievementTaskRewardRsp = 11139,
        AdvWatchDataPush = 11140,
        GetQuestLogsReq = 11141,
        GetQuestLogsRsp = 11142,
        ReceiveQuestLogRewardReq = 11143,
        ReceiveQuestLogRewardRsp = 11144,
        UpQuestLogLevelReq = 11145,
        UpQuestLogLevelRsp = 11146,
        TaskChangePush = 11147,
        GetFriendSimpleRoleReq = 11148,
        GetFriendSimpleRoleRsp = 11149,
        AddFriendPush = 11150,
        RemoveFriendPush = 11151,
        AddBlacklistReq = 11152,
        AddBlacklistRsp = 11153,
        RemoveBlacklistReq = 11154,
        RemoveBlacklistRsp = 11155,
        UpdateFriendOnlineTime = 11156,
        UpdatFriendPowerScore = 11157,
        AddFriendReq = 11158,
        AddFriendRsp = 11159,
        RemoveFriendReq = 11160,
        RemoveFriendRsp = 11161,
        ConfirmFriendReq = 11162,
        ConfirmFriendRsp = 11163,
        RemoveFriendApplyReq = 11164,
        RemoveFriendApplyRsp = 11165,
        RecommendFriendReq = 11166,
        RecommendFriendRsp = 11167,
        FindFriendReq = 11168,
        FindFriendRsp = 11169,
        GivingGiftReq = 11170,
        GivingGiftRsp = 11171,
        RecvGiftReq = 11172,
        RecvGiftRsp = 11173,
        SyncGiftList = 11174,
        GiftPush = 11175,
        UseRedeemCodeReq = 11176,
        UseRedeemCodeRsp = 11177,
        GetHeroRankReq = 11178,
        GetHeroRankRsp = 11179,
        GetRankReq = 11180,
        GetRankRsp = 11181,
        GetStaminaInfoReq = 11182,
        GetStaminaInfoRsp = 11183,
        BuyStaminaReq = 11184,
        BuyStaminaRsp = 11185,
        SetAutoDisbandReq = 11186,
        SetAutoDisbandRsp = 11187,
        GetPatrolInfoReq = 11188,
        GetPatrolInfoRsp = 11189,
        ReceivePatrolRewardReq = 11190,
        ReceivePatrolRewardRsp = 11191,
        ReceiveQuickPatrolRewardReq = 11192,
        ReceiveQuickPatrolRewardRsp = 11193,
        LimitedRewardPush = 11194,
        GetLimitedRewardReq = 11195,
        GetLimitedRewardRsp = 11196,
        GetExploreStageInfoMapReq = 11197,
        GetExploreStageInfoMapRsp = 11198,
        SweepExploreStageReq = 11199,
        SweepExploreStageRsp = 11200,
        SweepExploreStageOneClickReq = 11201,
        SweepExploreStageOneClickRsp = 11202,
        ReceiveExploreStageFirstRewardReq = 11203,
        ReceiveExploreStageFirstRewardRsp = 11204,
        DailyRewardPush = 11205,
        GetDailyRewardReq = 11206,
        GetDailyRewardRsp = 11207,
        UseHeroPieceOneClickReq = 11208,
        UseHeroPieceOneClickRsp = 11209,
        GetFixedShopInfoMapReq = 11210,
        GetFixedShopInfoMapRsp = 11211,
        BuyFixedShopCommodityReq = 11212,
        BuyFixedShopCommodityRsp = 11213,
        StartPayReq = 11214,
        StartPayRsp = 11215,
        EndPayReq = 11216,
        EndPayRsp = 11217,
        PayByVoucherReq = 11218,
        PayByVoucherRsp = 11219,
        GetPendingPayOrderIdReq = 11220,
        GetPendingPayOrderIdRsp = 11221,
        ClearPendingPayOrderIdReq = 11222,
        ClearPendingPayOrderIdRsp = 11223,
        DeliverGoodsPush = 11224,
        GetPayInfoReq = 11225,
        GetPayInfoRsp = 11226,
        HeroCollectionPush = 11227,
        GetHeroCollectionRewardReq = 11228,
        GetHeroCollectionRewardRsp = 11229,
        GetDailyShopInfoReq = 11230,
        GetDailyShopInfoRsp = 11231,
        RefreshDailyShopReq = 11232,
        RefreshDailyShopRsp = 11233,
        BuyDailyShopCommodityReq = 11234,
        BuyDailyShopCommodityRsp = 11235,
        BuyDailyShopCommodityOneClickReq = 11236,
        BuyDailyShopCommodityOneClickRsp = 11237,
        BreakEggPush = 11238,
        ReceiveMainStageDoubleRewardsReq = 11239,
        ReceiveMainStageDoubleRewardsRsp = 11240,
        GetVipInfoReq = 11241,
        GetVipInfoRsp = 11242,
        ReceiveVipDailyGiftReq = 11243,
        ReceiveVipDailyGiftRsp = 11244,
        BuyVipGiftReq = 11245,
        BuyVipGiftRsp = 11246,
        ReviveOnStageReq = 11247,
        ReviveOnStageRsp = 11248,
        WatchAdReq = 11249,
        WatchAdRsp = 11250,
        GetPrivilegeInfoReq = 11251,
        GetPrivilegeInfoRsp = 11252,
        ReceivePrivilegeDailyRewardsReq = 11253,
        ReceivePrivilegeDailyRewardsRsp = 11254,
        ReceiveMonthlyPassAdditionalRewardsReq = 11255,
        ReceiveMonthlyPassAdditionalRewardsRsp = 11256,
        GetBattlePassInfoMapReq = 11257,
        GetBattlePassInfoMapRsp = 11258,
        ReceiveBattlePassTaskRewardsReq = 11259,
        ReceiveBattlePassTaskRewardsRsp = 11260,
        BuyBattlePassLevelReq = 11263,
        BuyBattlePassLevelRsp = 11264,
        BuyGoldReq = 11265,
        BuyGoldRsp = 11266,
        ClientDebugPush = 11267,
        VipBonusPush = 11268,
        VipLevelUpPush = 11269,
        WorldBossDataPush = 11270,
        WorldBossSweepReq = 11271,
        WorldBossSweepRsp = 11272,
        DailyChallengeLevelReq = 11273,
        DailyChallengeLevelRsp = 11274,
        DailyChallengeRewardReq = 11275,
        DailyChallengeRewardRsp = 11276,
        DailyChallengeSweepReq = 11277,
        DailyChallengeSweepRsp = 11278,
        DailyChallengeWatchAdvReq = 11279,
        DailyChallengeWatchAdvRsp = 11280,
        DailyChallengeDataPush = 11281,
        GetNewPlayerTrialMapReq = 11282,
        GetNewPlayerTrialMapRsp = 11283,
        ReceiveNewPlayerTrialTaskRewardsReq = 11284,
        ReceiveNewPlayerTrialTaskRewardsRsp = 11285,
        ReceiveNewPlayerTrialScoreRewardsReq = 11286,
        ReceiveNewPlayerTrialScoreRewardsRsp = 11287,
        GetClimbTowerInfoReq = 11288,
        GetClimbTowerInfoRsp = 11289,
        ReceiveClimbTowerDailyRewardsReq = 11290,
        ReceiveClimbTowerDailyRewardsRsp = 11291,
        ReceiveClimbTowerClearStageRewardsReq = 11292,
        ReceiveClimbTowerClearStageRewardsRsp = 11293,
        QuickFinishClimbTowerStageReq = 11294,
        QuickFinishClimbTowerStageRsp = 11295,
        UnlockedHeroAlbumPush = 11296,
        ChangedNewPlayerTrialScorePush = 11297,
        GetHonorRollMapReq = 11298,
        GetHonorRollMapRsp = 11299,
        ReceiveHonorRollTasksRewardsReq = 11300,
        ReceiveHonorRollTasksRewardsRsp = 11301,
        ActivitiesPush = 11302,
        SetClientDataReq = 11303,
        SetClientDataRsp = 11304,
        ChangedScrollPaintingPush = 11305,
        GetServerTimeReq = 11306,
        GetServerTimeRsp = 11307,
        PingDelay = 11308,
        GetRecommendGuildsReq = 11309,
        GetRecommendGuildsRsp = 11310,
        GetGuildInfoReq = 11311,
        GetGuildInfoRsp = 11312,
        CreateGuildReq = 11313,
        CreateGuildRsp = 11314,
        ApplyJoinGuildReq = 11315,
        ApplyJoinGuildRsp = 11316,
        ProcessGuildApplyReq = 11317,
        ProcessGuildApplyRsp = 11318,
        QuitGuildReq = 11319,
        QuitGuildRsp = 11320,
        KickGuildMemberReq = 11321,
        KickGuildMemberRsp = 11322,
        SetGuildNameAndFlagReq = 11323,
        SetGuildNameAndFlagRsp = 11324,
        SetGuildMemberJobReq = 11325,
        SetGuildMemberJobRsp = 11326,
        SignGuildReq = 11327,
        SignGuildRsp = 11328,
        BargainGuildReq = 11329,
        BargainGuildRsp = 11330,
        BuyGuildGiftReq = 11331,
        BuyGuildGiftRsp = 11332,
        UpgradeGuildSkillReq = 11333,
        UpgradeGuildSkillRsp = 11334,
        ResetGuildSkillReq = 11335,
        ResetGuildSkillRsp = 11336,
        ReceiveGuildDailyTasksRewardsReq = 11337,
        ReceiveGuildDailyTasksRewardsRsp = 11338,
        ReceiveGuildTaskChestRewardsReq = 11339,
        ReceiveGuildTaskChestRewardsRsp = 11340,
        SetGuildNoticeReq = 11341,
        SetGuildNoticeRsp = 11342,
        GetJoinGuildRequestsReq = 11343,
        GetJoinGuildRequestsRsp = 11344,
        ApplyJoinGuildOneClickReq = 11345,
        ApplyJoinGuildOneClickRsp = 11346,
        ImpeachGuildLeaderReq = 11347,
        ImpeachGuildLeaderRsp = 11348,
        SetGuildNeedCheckReq = 11349,
        SetGuildNeedCheckRsp = 11350,
        GuildChatChannelPush = 11351,
        GetGuildRankReq = 11352,
        GetGuildRankRsp = 11353,
        GetGuildRankInfoReq = 11354,
        GetGuildRankInfoRsp = 11355,
        GuildBossDataPush = 11356,
        GetGuildBossRankReq = 11357,
        GetGuildBossRankRsp = 11358,
        JoinedGuildPush = 11359,
        KickedOutGuildPush = 11360,
        QuickFinGuildBossReq = 11361,
        QuickFinGuildBossRsp = 11362,
        Mobile37PopupsPush = 11363,
        GuildBossRankNotify = 11364,
        RejectAllGuildApplyReq = 11365,
        RejectAllGuildApplyRsp = 11366,
        NewDayPush = 11367,
        GetSignInGiftInfoReq = 11368,
        GetSignInGiftInfoRsp = 11369,
        ReceiveSignInGiftReq = 11370,
        ReceiveSignInGiftRsp = 11371,
        GuileLevelUpPush = 11372,
        GetActivityHeroGrowMapReq = 11373,
        GetActivityHeroGrowMapRsp = 11374,
        ReceiveActivityHeroGrowRewardReq = 11375,
        ReceiveActivityHeroGrowRewardRsp = 11376,
        GetActivityGachaUpMapReq = 11377,
        GetActivityGachaUpMapRsp = 11378,
        ReceiveActivityGachaUpTasksRewardsReq = 11379,
        ReceiveActivityGachaUpTasksRewardsRsp = 11380,
        GetFincaBattleInfoReq = 11381,
        GetFincaBattleInfoRsp = 11382,
        FincaBattleFightReq = 11385,
        FincaBattleFightRsp = 11386,
        SetFincaBattleHeroIdsReq = 11387,
        SetFincaBattleHeroIdsRsp = 11388,
        SetFincaBattleBookIdsReq = 11389,
        SetFincaBattleBookIdsRsp = 11390,
        GetFincaBattleOpponentsReq = 11391,
        GetFincaBattleOpponentsRsp = 11392,
        GetFincaBattleFightRecordsReq = 11393,
        GetFincaBattleFightRecordsRsp = 11394,
        GuildMemberChangedPush = 11395,
        QueryGuildInfoReq = 11396,
        QueryGuildInfoRsp = 11397,
        GetSimpleRankReq = 11398,
        GetSimpleRankRsp = 11399,
        GetMainStageCleardRecordsReq = 11400,
        GetMainStageCleardRecordsRsp = 11401,
        GetCumulativeRechargeMapReq = 11402,
        GetCumulativeRechargeMapRsp = 11403,
        ReceiveCumulativeRechargeRewardReq = 11404,
        ReceiveCumulativeRechargeRewardRsp = 11405,
        GetEliteStageInfoReq = 11406,
        GetEliteStageInfoRsp = 11407,
        ReceiveEliteClearStageRewardsReq = 11408,
        ReceiveEliteClearStageRewardsRsp = 11409,
        JoinChatChannelReq = 12000,
        JoinChatChannelRsp = 12001,
        LeaveChatChannelReq = 12002,
        LeaveChatChannelRsp = 12003,
        SendChatMessageReq = 12004,
        SendChatMessageRsp = 12005,
        ChatMessagePush = 12006,
        DefaultChatChannelsPush = 12007,
        JoinGuildRequestReplyPush = 13000
    }

    /** CommonErrorCode enum. */
    enum CommonErrorCode {
        Succeed = 0,
        Failed = 1,
        NoRole = 2,
        RoleNameExist = 3,
        RoleNameInvalid = 4,
        FuncNotOpen = 5,
        ItemNotEnough = 6,
        ChatSendFrequently = 7,
        ChatSensitiveWords = 8,
        TryAgainLater = 9,
        FriendListWasFull = 10,
        TargetFriendListWasFull = 11,
        ApplyFriendListWasFull = 12,
        BlacklistWasFull = 13,
        AlreadyBeBlacklist = 14,
        AlreadyBlacklist = 15,
        AlreadyFriend = 16,
        NotFriend = 17,
        NotInApplyList = 18,
        AlreadyApply = 19,
        NotInBlacklist = 20,
        RecommendTimeLimit = 21,
        FriendGiftRecvLimit = 22,
        FriendGiftRepeatGive = 23,
        FriendGiftGivingLimit = 24,
        RoleBanned = 25,
        NotInWhiteList = 26,
        RedeemCodeNotFound = 27,
        RedeemCodeUsed = 28,
        RedeemCodeGroupNotFound = 29,
        RedeemCodeExpired = 30,
        RedeemCodeGroupUsed = 31,
        BagWasFull = 32,
        SensitiveWords = 33,
        ChatMsgNotShow = 34,
        RoleBannedChat = 35,
        DiamondNegative = 36,
        GuildNameExist = 37,
        MemberNotInGuild = 38,
        TargetNotInRank = 39,
        JoinGuildApplyNotFound = 40,
        GuildMemberFull = 41,
        GuildCannotDisband = 42,
        FightInnerError = 43,
        FincaBattleSettleing = 44
    }

    /** Properties of a CommonError. */
    interface ICommonError {

        /** CommonError code */
        code?: (proto.CommonErrorCode|null);

        /** CommonError message */
        message?: (string|null);
    }

    /** Represents a CommonError. */
    class CommonError implements ICommonError {

        /**
         * Constructs a new CommonError.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICommonError);

        /** CommonError code. */
        public code: proto.CommonErrorCode;

        /** CommonError message. */
        public message: string;

        /**
         * Encodes the specified CommonError message. Does not implicitly {@link proto.CommonError.verify|verify} messages.
         * @param m CommonError message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICommonError, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CommonError message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CommonError
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CommonError;
    }

    /** Properties of a Msg_Ping. */
    interface IMsg_Ping {

        /** Msg_Ping id */
        id?: (number|Long|null);

        /** Msg_Ping time */
        time?: (number|Long|null);
    }

    /** Represents a Msg_Ping. */
    class Msg_Ping implements IMsg_Ping {

        /**
         * Constructs a new Msg_Ping.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_Ping);

        /** Msg_Ping id. */
        public id: (number|Long);

        /** Msg_Ping time. */
        public time: (number|Long);

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

    /** Properties of a Msg_Pong. */
    interface IMsg_Pong {

        /** Msg_Pong id */
        id?: (number|Long|null);

        /** Msg_Pong time */
        time?: (number|Long|null);
    }

    /** Represents a Msg_Pong. */
    class Msg_Pong implements IMsg_Pong {

        /**
         * Constructs a new Msg_Pong.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_Pong);

        /** Msg_Pong id. */
        public id: (number|Long);

        /** Msg_Pong time. */
        public time: (number|Long);

        /**
         * Encodes the specified Msg_Pong message. Does not implicitly {@link proto.Msg_Pong.verify|verify} messages.
         * @param m Msg_Pong message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_Pong, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_Pong message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_Pong
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_Pong;
    }

    /** Properties of a Msg_LoginReq. */
    interface IMsg_LoginReq {

        /** Msg_LoginReq uid */
        uid?: (string|null);

        /** Msg_LoginReq token */
        token?: (string|null);

        /** Msg_LoginReq group */
        group?: (string|null);

        /** Msg_LoginReq area */
        area?: (number|null);
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

        /** Msg_LoginReq area. */
        public area: number;

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

        /** Msg_LoginRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_LoginRsp. */
    class Msg_LoginRsp implements IMsg_LoginRsp {

        /**
         * Constructs a new Msg_LoginRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LoginRsp);

        /** Msg_LoginRsp error. */
        public error?: (proto.ICommonError|null);

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

    /** Properties of a Msg_CreateRoleReq. */
    interface IMsg_CreateRoleReq {

        /** Msg_CreateRoleReq name */
        name?: (string|null);

        /** Msg_CreateRoleReq area */
        area?: (number|null);

        /** Msg_CreateRoleReq platform */
        platform?: (string|null);

        /** Msg_CreateRoleReq adid */
        adid?: (string|null);
    }

    /** Represents a Msg_CreateRoleReq. */
    class Msg_CreateRoleReq implements IMsg_CreateRoleReq {

        /**
         * Constructs a new Msg_CreateRoleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateRoleReq);

        /** Msg_CreateRoleReq name. */
        public name: string;

        /** Msg_CreateRoleReq area. */
        public area: number;

        /** Msg_CreateRoleReq platform. */
        public platform: string;

        /** Msg_CreateRoleReq adid. */
        public adid: string;

        /**
         * Encodes the specified Msg_CreateRoleReq message. Does not implicitly {@link proto.Msg_CreateRoleReq.verify|verify} messages.
         * @param m Msg_CreateRoleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateRoleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateRoleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateRoleReq;
    }

    /** Properties of a Msg_CreateRoleRsp. */
    interface IMsg_CreateRoleRsp {

        /** Msg_CreateRoleRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_CreateRoleRsp. */
    class Msg_CreateRoleRsp implements IMsg_CreateRoleRsp {

        /**
         * Constructs a new Msg_CreateRoleRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateRoleRsp);

        /** Msg_CreateRoleRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_CreateRoleRsp message. Does not implicitly {@link proto.Msg_CreateRoleRsp.verify|verify} messages.
         * @param m Msg_CreateRoleRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateRoleRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateRoleRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateRoleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateRoleRsp;
    }

    /** Properties of a Role. */
    interface IRole {

        /** Role id */
        id?: (string|null);

        /** Role uid */
        uid?: (string|null);

        /** Role name */
        name?: (string|null);

        /** Role area */
        area?: (number|null);

        /** Role changeNameTimes */
        changeNameTimes?: (number|null);

        /** Role level */
        level?: (number|null);

        /** Role vipLevel */
        vipLevel?: (number|null);

        /** Role equip */
        equip?: (proto.IEquipPbData|null);

        /** Role heroBag */
        heroBag?: (proto.IMsg_GetHeroBagRsp|null);

        /** Role powerScore */
        powerScore?: (number|null);

        /** Role book */
        book?: (proto.IBookPbData|null);

        /** Role paintings */
        paintings?: (proto.IScrollPainting[]|null);

        /** Role simpleItems */
        simpleItems?: (proto.IItem[]|null);

        /** Role drop */
        drop?: (proto.IDropPbData|null);

        /** Role mainStageInfo */
        mainStageInfo?: (proto.IMsg_GetMainStageInfoRsp|null);

        /** Role elixir */
        elixir?: (proto.IElixirPbData|null);

        /** Role fightInfo */
        fightInfo?: (proto.IFightInfo|null);

        /** Role gene */
        gene?: (proto.IGenePbData|null);

        /** Role adv */
        adv?: (proto.IAdvPbData|null);

        /** Role autoDisband */
        autoDisband?: (boolean|null);

        /** Role buyGoldHistory */
        buyGoldHistory?: (proto.IBuyGoldHistory[]|null);

        /** Role vipBonusMap */
        vipBonusMap?: ({ [k: string]: number }|null);

        /** Role createTime */
        createTime?: (number|Long|null);

        /** Role honorRollInfo */
        honorRollInfo?: (proto.IMsg_GetHonorRollMapRsp|null);

        /** Role fightingStageId */
        fightingStageId?: (number|null);

        /** Role openFunctions */
        openFunctions?: (proto.IOpenFunction[]|null);

        /** Role activities */
        activities?: (proto.IActivity[]|null);

        /** Role clientData */
        clientData?: ({ [k: string]: string }|null);

        /** Role avatarInfo */
        avatarInfo?: (proto.IMsg_GetAvatarInfoRsp|null);

        /** Role todayLoginTimes */
        todayLoginTimes?: (number|null);

        /** Role serverTime */
        serverTime?: (number|Long|null);

        /** Role heroGrowInfo */
        heroGrowInfo?: (proto.IMsg_GetActivityHeroGrowMapRsp|null);

        /** Role gachaUpInfo */
        gachaUpInfo?: (proto.IMsg_GetActivityGachaUpMapRsp|null);

        /** Role eliteStageInfo */
        eliteStageInfo?: (proto.IMsg_GetEliteStageInfoRsp|null);
    }

    /** Represents a Role. */
    class Role implements IRole {

        /**
         * Constructs a new Role.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRole);

        /** Role id. */
        public id: string;

        /** Role uid. */
        public uid: string;

        /** Role name. */
        public name: string;

        /** Role area. */
        public area: number;

        /** Role changeNameTimes. */
        public changeNameTimes: number;

        /** Role level. */
        public level: number;

        /** Role vipLevel. */
        public vipLevel: number;

        /** Role equip. */
        public equip?: (proto.IEquipPbData|null);

        /** Role heroBag. */
        public heroBag?: (proto.IMsg_GetHeroBagRsp|null);

        /** Role powerScore. */
        public powerScore: number;

        /** Role book. */
        public book?: (proto.IBookPbData|null);

        /** Role paintings. */
        public paintings: proto.IScrollPainting[];

        /** Role simpleItems. */
        public simpleItems: proto.IItem[];

        /** Role drop. */
        public drop?: (proto.IDropPbData|null);

        /** Role mainStageInfo. */
        public mainStageInfo?: (proto.IMsg_GetMainStageInfoRsp|null);

        /** Role elixir. */
        public elixir?: (proto.IElixirPbData|null);

        /** Role fightInfo. */
        public fightInfo?: (proto.IFightInfo|null);

        /** Role gene. */
        public gene?: (proto.IGenePbData|null);

        /** Role adv. */
        public adv?: (proto.IAdvPbData|null);

        /** Role autoDisband. */
        public autoDisband: boolean;

        /** Role buyGoldHistory. */
        public buyGoldHistory: proto.IBuyGoldHistory[];

        /** Role vipBonusMap. */
        public vipBonusMap: { [k: string]: number };

        /** Role createTime. */
        public createTime: (number|Long);

        /** Role honorRollInfo. */
        public honorRollInfo?: (proto.IMsg_GetHonorRollMapRsp|null);

        /** Role fightingStageId. */
        public fightingStageId: number;

        /** Role openFunctions. */
        public openFunctions: proto.IOpenFunction[];

        /** Role activities. */
        public activities: proto.IActivity[];

        /** Role clientData. */
        public clientData: { [k: string]: string };

        /** Role avatarInfo. */
        public avatarInfo?: (proto.IMsg_GetAvatarInfoRsp|null);

        /** Role todayLoginTimes. */
        public todayLoginTimes: number;

        /** Role serverTime. */
        public serverTime: (number|Long);

        /** Role heroGrowInfo. */
        public heroGrowInfo?: (proto.IMsg_GetActivityHeroGrowMapRsp|null);

        /** Role gachaUpInfo. */
        public gachaUpInfo?: (proto.IMsg_GetActivityGachaUpMapRsp|null);

        /** Role eliteStageInfo. */
        public eliteStageInfo?: (proto.IMsg_GetEliteStageInfoRsp|null);

        /**
         * Encodes the specified Role message. Does not implicitly {@link proto.Role.verify|verify} messages.
         * @param m Role message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Role message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Role
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Role;
    }

    /** Properties of a Msg_SyncRolePush. */
    interface IMsg_SyncRolePush {

        /** Msg_SyncRolePush role */
        role?: (proto.IRole|null);
    }

    /** Represents a Msg_SyncRolePush. */
    class Msg_SyncRolePush implements IMsg_SyncRolePush {

        /**
         * Constructs a new Msg_SyncRolePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncRolePush);

        /** Msg_SyncRolePush role. */
        public role?: (proto.IRole|null);

        /**
         * Encodes the specified Msg_SyncRolePush message. Does not implicitly {@link proto.Msg_SyncRolePush.verify|verify} messages.
         * @param m Msg_SyncRolePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncRolePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncRolePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncRolePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncRolePush;
    }

    /** Properties of an Item. */
    interface IItem {

        /** Item itemId */
        itemId?: (number|null);

        /** Item num */
        num?: (number|Long|null);

        /** Item extra */
        extra?: (proto.Item.IExtra|null);

        /** Item transaction */
        transaction?: (proto.IItem[]|null);
    }

    /** Represents an Item. */
    class Item implements IItem {

        /**
         * Constructs a new Item.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IItem);

        /** Item itemId. */
        public itemId: number;

        /** Item num. */
        public num: (number|Long);

        /** Item extra. */
        public extra?: (proto.Item.IExtra|null);

        /** Item transaction. */
        public transaction: proto.IItem[];

        /**
         * Encodes the specified Item message. Does not implicitly {@link proto.Item.verify|verify} messages.
         * @param m Item message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Item message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Item
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Item;
    }

    namespace Item {

        /** Properties of an Extra. */
        interface IExtra {

            /** Extra heroStar */
            heroStar?: (number|null);

            /** Extra expireAt */
            expireAt?: (number|Long|null);
        }

        /** Represents an Extra. */
        class Extra implements IExtra {

            /**
             * Constructs a new Extra.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Item.IExtra);

            /** Extra heroStar. */
            public heroStar: number;

            /** Extra expireAt. */
            public expireAt: (number|Long);

            /**
             * Encodes the specified Extra message. Does not implicitly {@link proto.Item.Extra.verify|verify} messages.
             * @param m Extra message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Item.IExtra, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes an Extra message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns Extra
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Item.Extra;
        }
    }

    /** Properties of a Hero. */
    interface IHero {

        /** Hero id */
        id?: (number|Long|null);

        /** Hero itemId */
        itemId?: (number|null);

        /** Hero level */
        level?: (number|null);

        /** Hero star */
        star?: (number|null);

        /** Hero powerScore */
        powerScore?: (number|null);

        /** Hero finshedStarSteps */
        finshedStarSteps?: (number[]|null);
    }

    /** Represents a Hero. */
    class Hero implements IHero {

        /**
         * Constructs a new Hero.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHero);

        /** Hero id. */
        public id: (number|Long);

        /** Hero itemId. */
        public itemId: number;

        /** Hero level. */
        public level: number;

        /** Hero star. */
        public star: number;

        /** Hero powerScore. */
        public powerScore: number;

        /** Hero finshedStarSteps. */
        public finshedStarSteps: number[];

        /**
         * Encodes the specified Hero message. Does not implicitly {@link proto.Hero.verify|verify} messages.
         * @param m Hero message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHero, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Hero message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Hero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Hero;
    }

    /** Properties of an UniqueItem. */
    interface IUniqueItem {

        /** UniqueItem id */
        id?: (number|Long|null);

        /** UniqueItem itemId */
        itemId?: (number|null);
    }

    /** Represents an UniqueItem. */
    class UniqueItem implements IUniqueItem {

        /**
         * Constructs a new UniqueItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IUniqueItem);

        /** UniqueItem id. */
        public id: (number|Long);

        /** UniqueItem itemId. */
        public itemId: number;

        /**
         * Encodes the specified UniqueItem message. Does not implicitly {@link proto.UniqueItem.verify|verify} messages.
         * @param m UniqueItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IUniqueItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UniqueItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UniqueItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.UniqueItem;
    }

    /** Properties of a Msg_ItemChangePush. */
    interface IMsg_ItemChangePush {

        /** Msg_ItemChangePush updatedItems */
        updatedItems?: (proto.IItem[]|null);

        /** Msg_ItemChangePush removedSingleItems */
        removedSingleItems?: (proto.IItem[]|null);

        /** Msg_ItemChangePush updatedSingleItems */
        updatedSingleItems?: (proto.IItem[]|null);

        /** Msg_ItemChangePush removedItems */
        removedItems?: (proto.IUniqueItem[]|null);

        /** Msg_ItemChangePush updatedHeroes */
        updatedHeroes?: (proto.IHero[]|null);

        /** Msg_ItemChangePush updatedEquipments */
        updatedEquipments?: (proto.IEquipData[]|null);

        /** Msg_ItemChangePush updatedBooks */
        updatedBooks?: (proto.IBookData[]|null);
    }

    /** Represents a Msg_ItemChangePush. */
    class Msg_ItemChangePush implements IMsg_ItemChangePush {

        /**
         * Constructs a new Msg_ItemChangePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ItemChangePush);

        /** Msg_ItemChangePush updatedItems. */
        public updatedItems: proto.IItem[];

        /** Msg_ItemChangePush removedSingleItems. */
        public removedSingleItems: proto.IItem[];

        /** Msg_ItemChangePush updatedSingleItems. */
        public updatedSingleItems: proto.IItem[];

        /** Msg_ItemChangePush removedItems. */
        public removedItems: proto.IUniqueItem[];

        /** Msg_ItemChangePush updatedHeroes. */
        public updatedHeroes: proto.IHero[];

        /** Msg_ItemChangePush updatedEquipments. */
        public updatedEquipments: proto.IEquipData[];

        /** Msg_ItemChangePush updatedBooks. */
        public updatedBooks: proto.IBookData[];

        /**
         * Encodes the specified Msg_ItemChangePush message. Does not implicitly {@link proto.Msg_ItemChangePush.verify|verify} messages.
         * @param m Msg_ItemChangePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ItemChangePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ItemChangePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ItemChangePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ItemChangePush;
    }

    /** Properties of a TeamSlot. */
    interface ITeamSlot {

        /** TeamSlot heroClass */
        heroClass?: (number|null);

        /** TeamSlot heroId */
        heroId?: (number|Long|null);

        /** TeamSlot level */
        level?: (number|null);
    }

    /** Represents a TeamSlot. */
    class TeamSlot implements ITeamSlot {

        /**
         * Constructs a new TeamSlot.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITeamSlot);

        /** TeamSlot heroClass. */
        public heroClass: number;

        /** TeamSlot heroId. */
        public heroId: (number|Long);

        /** TeamSlot level. */
        public level: number;

        /**
         * Encodes the specified TeamSlot message. Does not implicitly {@link proto.TeamSlot.verify|verify} messages.
         * @param m TeamSlot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITeamSlot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a TeamSlot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns TeamSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.TeamSlot;
    }

    /** Properties of a Msg_GetHeroBagReq. */
    interface IMsg_GetHeroBagReq {
    }

    /** Represents a Msg_GetHeroBagReq. */
    class Msg_GetHeroBagReq implements IMsg_GetHeroBagReq {

        /**
         * Constructs a new Msg_GetHeroBagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroBagReq);

        /**
         * Encodes the specified Msg_GetHeroBagReq message. Does not implicitly {@link proto.Msg_GetHeroBagReq.verify|verify} messages.
         * @param m Msg_GetHeroBagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroBagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroBagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroBagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroBagReq;
    }

    /** Properties of a Msg_GetHeroBagRsp. */
    interface IMsg_GetHeroBagRsp {

        /** Msg_GetHeroBagRsp heroes */
        heroes?: (proto.IHero[]|null);

        /** Msg_GetHeroBagRsp capacityLevel */
        capacityLevel?: (number|null);

        /** Msg_GetHeroBagRsp teamSlots */
        teamSlots?: (proto.ITeamSlot[]|null);

        /** Msg_GetHeroBagRsp levelResonance */
        levelResonance?: (number|null);

        /** Msg_GetHeroBagRsp starResonance */
        starResonance?: (number|null);

        /** Msg_GetHeroBagRsp receivedRecommendTeamIds */
        receivedRecommendTeamIds?: (number[]|null);

        /** Msg_GetHeroBagRsp heroAlbumMap */
        heroAlbumMap?: ({ [k: string]: proto.Msg_GetHeroBagRsp.IHeroAlbum }|null);
    }

    /** Represents a Msg_GetHeroBagRsp. */
    class Msg_GetHeroBagRsp implements IMsg_GetHeroBagRsp {

        /**
         * Constructs a new Msg_GetHeroBagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroBagRsp);

        /** Msg_GetHeroBagRsp heroes. */
        public heroes: proto.IHero[];

        /** Msg_GetHeroBagRsp capacityLevel. */
        public capacityLevel: number;

        /** Msg_GetHeroBagRsp teamSlots. */
        public teamSlots: proto.ITeamSlot[];

        /** Msg_GetHeroBagRsp levelResonance. */
        public levelResonance: number;

        /** Msg_GetHeroBagRsp starResonance. */
        public starResonance: number;

        /** Msg_GetHeroBagRsp receivedRecommendTeamIds. */
        public receivedRecommendTeamIds: number[];

        /** Msg_GetHeroBagRsp heroAlbumMap. */
        public heroAlbumMap: { [k: string]: proto.Msg_GetHeroBagRsp.IHeroAlbum };

        /**
         * Encodes the specified Msg_GetHeroBagRsp message. Does not implicitly {@link proto.Msg_GetHeroBagRsp.verify|verify} messages.
         * @param m Msg_GetHeroBagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroBagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroBagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroBagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroBagRsp;
    }

    namespace Msg_GetHeroBagRsp {

        /** Properties of a HeroAlbum. */
        interface IHeroAlbum {

            /** HeroAlbum id */
            id?: (number|null);

            /** HeroAlbum isReceived */
            isReceived?: (boolean|null);
        }

        /** Represents a HeroAlbum. */
        class HeroAlbum implements IHeroAlbum {

            /**
             * Constructs a new HeroAlbum.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Msg_GetHeroBagRsp.IHeroAlbum);

            /** HeroAlbum id. */
            public id: number;

            /** HeroAlbum isReceived. */
            public isReceived: boolean;

            /**
             * Encodes the specified HeroAlbum message. Does not implicitly {@link proto.Msg_GetHeroBagRsp.HeroAlbum.verify|verify} messages.
             * @param m HeroAlbum message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Msg_GetHeroBagRsp.IHeroAlbum, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a HeroAlbum message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns HeroAlbum
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroBagRsp.HeroAlbum;
        }
    }

    /** Properties of a Msg_SetTeamSlotReq. */
    interface IMsg_SetTeamSlotReq {

        /** Msg_SetTeamSlotReq heroId */
        heroId?: (number|Long|null);
    }

    /** Represents a Msg_SetTeamSlotReq. */
    class Msg_SetTeamSlotReq implements IMsg_SetTeamSlotReq {

        /**
         * Constructs a new Msg_SetTeamSlotReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetTeamSlotReq);

        /** Msg_SetTeamSlotReq heroId. */
        public heroId: (number|Long);

        /**
         * Encodes the specified Msg_SetTeamSlotReq message. Does not implicitly {@link proto.Msg_SetTeamSlotReq.verify|verify} messages.
         * @param m Msg_SetTeamSlotReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetTeamSlotReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetTeamSlotReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetTeamSlotReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetTeamSlotReq;
    }

    /** Properties of a Msg_SetTeamSlotRsp. */
    interface IMsg_SetTeamSlotRsp {

        /** Msg_SetTeamSlotRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetTeamSlotRsp heroId */
        heroId?: (number|Long|null);
    }

    /** Represents a Msg_SetTeamSlotRsp. */
    class Msg_SetTeamSlotRsp implements IMsg_SetTeamSlotRsp {

        /**
         * Constructs a new Msg_SetTeamSlotRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetTeamSlotRsp);

        /** Msg_SetTeamSlotRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetTeamSlotRsp heroId. */
        public heroId: (number|Long);

        /**
         * Encodes the specified Msg_SetTeamSlotRsp message. Does not implicitly {@link proto.Msg_SetTeamSlotRsp.verify|verify} messages.
         * @param m Msg_SetTeamSlotRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetTeamSlotRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetTeamSlotRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetTeamSlotRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetTeamSlotRsp;
    }

    /** Properties of a Msg_UpTeamSlotLevelReq. */
    interface IMsg_UpTeamSlotLevelReq {

        /** Msg_UpTeamSlotLevelReq heroClass */
        heroClass?: (number|null);

        /** Msg_UpTeamSlotLevelReq level */
        level?: (number|null);
    }

    /** Represents a Msg_UpTeamSlotLevelReq. */
    class Msg_UpTeamSlotLevelReq implements IMsg_UpTeamSlotLevelReq {

        /**
         * Constructs a new Msg_UpTeamSlotLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpTeamSlotLevelReq);

        /** Msg_UpTeamSlotLevelReq heroClass. */
        public heroClass: number;

        /** Msg_UpTeamSlotLevelReq level. */
        public level: number;

        /**
         * Encodes the specified Msg_UpTeamSlotLevelReq message. Does not implicitly {@link proto.Msg_UpTeamSlotLevelReq.verify|verify} messages.
         * @param m Msg_UpTeamSlotLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpTeamSlotLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpTeamSlotLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpTeamSlotLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpTeamSlotLevelReq;
    }

    /** Properties of a Msg_UpTeamSlotLevelRsp. */
    interface IMsg_UpTeamSlotLevelRsp {

        /** Msg_UpTeamSlotLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpTeamSlotLevelRsp heroClass */
        heroClass?: (number|null);

        /** Msg_UpTeamSlotLevelRsp newLevel */
        newLevel?: (number|null);
    }

    /** Represents a Msg_UpTeamSlotLevelRsp. */
    class Msg_UpTeamSlotLevelRsp implements IMsg_UpTeamSlotLevelRsp {

        /**
         * Constructs a new Msg_UpTeamSlotLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpTeamSlotLevelRsp);

        /** Msg_UpTeamSlotLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpTeamSlotLevelRsp heroClass. */
        public heroClass: number;

        /** Msg_UpTeamSlotLevelRsp newLevel. */
        public newLevel: number;

        /**
         * Encodes the specified Msg_UpTeamSlotLevelRsp message. Does not implicitly {@link proto.Msg_UpTeamSlotLevelRsp.verify|verify} messages.
         * @param m Msg_UpTeamSlotLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpTeamSlotLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpTeamSlotLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpTeamSlotLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpTeamSlotLevelRsp;
    }

    /** Properties of a Msg_ResetTeamSlotLevelReq. */
    interface IMsg_ResetTeamSlotLevelReq {

        /** Msg_ResetTeamSlotLevelReq heroClass */
        heroClass?: (number|null);
    }

    /** Represents a Msg_ResetTeamSlotLevelReq. */
    class Msg_ResetTeamSlotLevelReq implements IMsg_ResetTeamSlotLevelReq {

        /**
         * Constructs a new Msg_ResetTeamSlotLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetTeamSlotLevelReq);

        /** Msg_ResetTeamSlotLevelReq heroClass. */
        public heroClass: number;

        /**
         * Encodes the specified Msg_ResetTeamSlotLevelReq message. Does not implicitly {@link proto.Msg_ResetTeamSlotLevelReq.verify|verify} messages.
         * @param m Msg_ResetTeamSlotLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetTeamSlotLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetTeamSlotLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetTeamSlotLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetTeamSlotLevelReq;
    }

    /** Properties of a Msg_ResetTeamSlotLevelRsp. */
    interface IMsg_ResetTeamSlotLevelRsp {

        /** Msg_ResetTeamSlotLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ResetTeamSlotLevelRsp heroClass */
        heroClass?: (number|null);

        /** Msg_ResetTeamSlotLevelRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ResetTeamSlotLevelRsp. */
    class Msg_ResetTeamSlotLevelRsp implements IMsg_ResetTeamSlotLevelRsp {

        /**
         * Constructs a new Msg_ResetTeamSlotLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetTeamSlotLevelRsp);

        /** Msg_ResetTeamSlotLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ResetTeamSlotLevelRsp heroClass. */
        public heroClass: number;

        /** Msg_ResetTeamSlotLevelRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ResetTeamSlotLevelRsp message. Does not implicitly {@link proto.Msg_ResetTeamSlotLevelRsp.verify|verify} messages.
         * @param m Msg_ResetTeamSlotLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetTeamSlotLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetTeamSlotLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetTeamSlotLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetTeamSlotLevelRsp;
    }

    /** Properties of an UpHeroStarCost. */
    interface IUpHeroStarCost {

        /** UpHeroStarCost costType */
        costType?: (number|null);

        /** UpHeroStarCost costHeroIds */
        costHeroIds?: ((number|Long)[]|null);

        /** UpHeroStarCost costItems */
        costItems?: (proto.IItem[]|null);
    }

    /** Represents an UpHeroStarCost. */
    class UpHeroStarCost implements IUpHeroStarCost {

        /**
         * Constructs a new UpHeroStarCost.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IUpHeroStarCost);

        /** UpHeroStarCost costType. */
        public costType: number;

        /** UpHeroStarCost costHeroIds. */
        public costHeroIds: (number|Long)[];

        /** UpHeroStarCost costItems. */
        public costItems: proto.IItem[];

        /**
         * Encodes the specified UpHeroStarCost message. Does not implicitly {@link proto.UpHeroStarCost.verify|verify} messages.
         * @param m UpHeroStarCost message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IUpHeroStarCost, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpHeroStarCost message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UpHeroStarCost
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.UpHeroStarCost;
    }

    /** Properties of a Msg_UpHeroStarReq. */
    interface IMsg_UpHeroStarReq {

        /** Msg_UpHeroStarReq heroId */
        heroId?: (number|Long|null);

        /** Msg_UpHeroStarReq upStarCosts */
        upStarCosts?: (proto.IUpHeroStarCost[]|null);
    }

    /** Represents a Msg_UpHeroStarReq. */
    class Msg_UpHeroStarReq implements IMsg_UpHeroStarReq {

        /**
         * Constructs a new Msg_UpHeroStarReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroStarReq);

        /** Msg_UpHeroStarReq heroId. */
        public heroId: (number|Long);

        /** Msg_UpHeroStarReq upStarCosts. */
        public upStarCosts: proto.IUpHeroStarCost[];

        /**
         * Encodes the specified Msg_UpHeroStarReq message. Does not implicitly {@link proto.Msg_UpHeroStarReq.verify|verify} messages.
         * @param m Msg_UpHeroStarReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroStarReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroStarReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroStarReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroStarReq;
    }

    /** Properties of a Msg_UpHeroStarRsp. */
    interface IMsg_UpHeroStarRsp {

        /** Msg_UpHeroStarRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpHeroStarRsp heroId */
        heroId?: (number|Long|null);

        /** Msg_UpHeroStarRsp star */
        star?: (number|null);
    }

    /** Represents a Msg_UpHeroStarRsp. */
    class Msg_UpHeroStarRsp implements IMsg_UpHeroStarRsp {

        /**
         * Constructs a new Msg_UpHeroStarRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroStarRsp);

        /** Msg_UpHeroStarRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpHeroStarRsp heroId. */
        public heroId: (number|Long);

        /** Msg_UpHeroStarRsp star. */
        public star: number;

        /**
         * Encodes the specified Msg_UpHeroStarRsp message. Does not implicitly {@link proto.Msg_UpHeroStarRsp.verify|verify} messages.
         * @param m Msg_UpHeroStarRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroStarRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroStarRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroStarRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroStarRsp;
    }

    /** Properties of a Msg_ResetHeroStarReq. */
    interface IMsg_ResetHeroStarReq {

        /** Msg_ResetHeroStarReq heroId */
        heroId?: (number|Long|null);
    }

    /** Represents a Msg_ResetHeroStarReq. */
    class Msg_ResetHeroStarReq implements IMsg_ResetHeroStarReq {

        /**
         * Constructs a new Msg_ResetHeroStarReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetHeroStarReq);

        /** Msg_ResetHeroStarReq heroId. */
        public heroId: (number|Long);

        /**
         * Encodes the specified Msg_ResetHeroStarReq message. Does not implicitly {@link proto.Msg_ResetHeroStarReq.verify|verify} messages.
         * @param m Msg_ResetHeroStarReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetHeroStarReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetHeroStarReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetHeroStarReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetHeroStarReq;
    }

    /** Properties of a Msg_ResetHeroStarRsp. */
    interface IMsg_ResetHeroStarRsp {

        /** Msg_ResetHeroStarRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ResetHeroStarRsp heroId */
        heroId?: (number|Long|null);

        /** Msg_ResetHeroStarRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_ResetHeroStarRsp star */
        star?: (number|null);
    }

    /** Represents a Msg_ResetHeroStarRsp. */
    class Msg_ResetHeroStarRsp implements IMsg_ResetHeroStarRsp {

        /**
         * Constructs a new Msg_ResetHeroStarRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetHeroStarRsp);

        /** Msg_ResetHeroStarRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ResetHeroStarRsp heroId. */
        public heroId: (number|Long);

        /** Msg_ResetHeroStarRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_ResetHeroStarRsp star. */
        public star: number;

        /**
         * Encodes the specified Msg_ResetHeroStarRsp message. Does not implicitly {@link proto.Msg_ResetHeroStarRsp.verify|verify} messages.
         * @param m Msg_ResetHeroStarRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetHeroStarRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetHeroStarRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetHeroStarRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetHeroStarRsp;
    }

    /** Properties of a Msg_DisbandHeroesReq. */
    interface IMsg_DisbandHeroesReq {

        /** Msg_DisbandHeroesReq heroIds */
        heroIds?: ((number|Long)[]|null);
    }

    /** Represents a Msg_DisbandHeroesReq. */
    class Msg_DisbandHeroesReq implements IMsg_DisbandHeroesReq {

        /**
         * Constructs a new Msg_DisbandHeroesReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DisbandHeroesReq);

        /** Msg_DisbandHeroesReq heroIds. */
        public heroIds: (number|Long)[];

        /**
         * Encodes the specified Msg_DisbandHeroesReq message. Does not implicitly {@link proto.Msg_DisbandHeroesReq.verify|verify} messages.
         * @param m Msg_DisbandHeroesReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DisbandHeroesReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DisbandHeroesReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DisbandHeroesReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DisbandHeroesReq;
    }

    /** Properties of a Msg_DisbandHeroesRsp. */
    interface IMsg_DisbandHeroesRsp {

        /** Msg_DisbandHeroesRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DisbandHeroesRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_DisbandHeroesRsp. */
    class Msg_DisbandHeroesRsp implements IMsg_DisbandHeroesRsp {

        /**
         * Constructs a new Msg_DisbandHeroesRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DisbandHeroesRsp);

        /** Msg_DisbandHeroesRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DisbandHeroesRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_DisbandHeroesRsp message. Does not implicitly {@link proto.Msg_DisbandHeroesRsp.verify|verify} messages.
         * @param m Msg_DisbandHeroesRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DisbandHeroesRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DisbandHeroesRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DisbandHeroesRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DisbandHeroesRsp;
    }

    /** Properties of a Msg_UpHeroStarOneClickReq. */
    interface IMsg_UpHeroStarOneClickReq {

        /** Msg_UpHeroStarOneClickReq upStarCosts */
        upStarCosts?: (proto.IMsg_UpHeroStarReq[]|null);
    }

    /** Represents a Msg_UpHeroStarOneClickReq. */
    class Msg_UpHeroStarOneClickReq implements IMsg_UpHeroStarOneClickReq {

        /**
         * Constructs a new Msg_UpHeroStarOneClickReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroStarOneClickReq);

        /** Msg_UpHeroStarOneClickReq upStarCosts. */
        public upStarCosts: proto.IMsg_UpHeroStarReq[];

        /**
         * Encodes the specified Msg_UpHeroStarOneClickReq message. Does not implicitly {@link proto.Msg_UpHeroStarOneClickReq.verify|verify} messages.
         * @param m Msg_UpHeroStarOneClickReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroStarOneClickReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroStarOneClickReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroStarOneClickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroStarOneClickReq;
    }

    /** Properties of a Msg_UpHeroStarOneClickRsp. */
    interface IMsg_UpHeroStarOneClickRsp {

        /** Msg_UpHeroStarOneClickRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpHeroStarOneClickRsp heroes */
        heroes?: (proto.IHero[]|null);
    }

    /** Represents a Msg_UpHeroStarOneClickRsp. */
    class Msg_UpHeroStarOneClickRsp implements IMsg_UpHeroStarOneClickRsp {

        /**
         * Constructs a new Msg_UpHeroStarOneClickRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroStarOneClickRsp);

        /** Msg_UpHeroStarOneClickRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpHeroStarOneClickRsp heroes. */
        public heroes: proto.IHero[];

        /**
         * Encodes the specified Msg_UpHeroStarOneClickRsp message. Does not implicitly {@link proto.Msg_UpHeroStarOneClickRsp.verify|verify} messages.
         * @param m Msg_UpHeroStarOneClickRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroStarOneClickRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroStarOneClickRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroStarOneClickRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroStarOneClickRsp;
    }

    /** Properties of a Msg_UpHeroBagCapacityReq. */
    interface IMsg_UpHeroBagCapacityReq {
    }

    /** Represents a Msg_UpHeroBagCapacityReq. */
    class Msg_UpHeroBagCapacityReq implements IMsg_UpHeroBagCapacityReq {

        /**
         * Constructs a new Msg_UpHeroBagCapacityReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroBagCapacityReq);

        /**
         * Encodes the specified Msg_UpHeroBagCapacityReq message. Does not implicitly {@link proto.Msg_UpHeroBagCapacityReq.verify|verify} messages.
         * @param m Msg_UpHeroBagCapacityReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroBagCapacityReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroBagCapacityReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroBagCapacityReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroBagCapacityReq;
    }

    /** Properties of a Msg_UpHeroBagCapacityRsp. */
    interface IMsg_UpHeroBagCapacityRsp {

        /** Msg_UpHeroBagCapacityRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpHeroBagCapacityRsp capacityLevel */
        capacityLevel?: (number|null);
    }

    /** Represents a Msg_UpHeroBagCapacityRsp. */
    class Msg_UpHeroBagCapacityRsp implements IMsg_UpHeroBagCapacityRsp {

        /**
         * Constructs a new Msg_UpHeroBagCapacityRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpHeroBagCapacityRsp);

        /** Msg_UpHeroBagCapacityRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpHeroBagCapacityRsp capacityLevel. */
        public capacityLevel: number;

        /**
         * Encodes the specified Msg_UpHeroBagCapacityRsp message. Does not implicitly {@link proto.Msg_UpHeroBagCapacityRsp.verify|verify} messages.
         * @param m Msg_UpHeroBagCapacityRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpHeroBagCapacityRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpHeroBagCapacityRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpHeroBagCapacityRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpHeroBagCapacityRsp;
    }

    /** Properties of an EquipData. */
    interface IEquipData {

        /** EquipData id */
        id?: (number|Long|null);

        /** EquipData itemId */
        itemId?: (number|null);

        /** EquipData score */
        score?: (number|null);

        /** EquipData baseAttr */
        baseAttr?: (number[]|null);

        /** EquipData extraAttr */
        extraAttr?: (number[]|null);

        /** EquipData skillList */
        skillList?: (number[]|null);

        /** EquipData luckRecastRCount */
        luckRecastRCount?: (number|null);

        /** EquipData newSkillList1 */
        newSkillList1?: (number[]|null);

        /** EquipData newSkillList2 */
        newSkillList2?: (number[]|null);

        /** EquipData locked */
        locked?: (boolean|null);
    }

    /** Represents an EquipData. */
    class EquipData implements IEquipData {

        /**
         * Constructs a new EquipData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEquipData);

        /** EquipData id. */
        public id: (number|Long);

        /** EquipData itemId. */
        public itemId: number;

        /** EquipData score. */
        public score: number;

        /** EquipData baseAttr. */
        public baseAttr: number[];

        /** EquipData extraAttr. */
        public extraAttr: number[];

        /** EquipData skillList. */
        public skillList: number[];

        /** EquipData luckRecastRCount. */
        public luckRecastRCount: number;

        /** EquipData newSkillList1. */
        public newSkillList1: number[];

        /** EquipData newSkillList2. */
        public newSkillList2: number[];

        /** EquipData locked. */
        public locked: boolean;

        /**
         * Encodes the specified EquipData message. Does not implicitly {@link proto.EquipData.verify|verify} messages.
         * @param m EquipData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEquipData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EquipData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EquipData;
    }

    /** Properties of a HeroMasterData. */
    interface IHeroMasterData {

        /** HeroMasterData qualityLv */
        qualityLv?: (number|null);

        /** HeroMasterData enhanceLv */
        enhanceLv?: (number|null);

        /** HeroMasterData refineLv */
        refineLv?: (number|null);
    }

    /** Represents a HeroMasterData. */
    class HeroMasterData implements IHeroMasterData {

        /**
         * Constructs a new HeroMasterData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHeroMasterData);

        /** HeroMasterData qualityLv. */
        public qualityLv: number;

        /** HeroMasterData enhanceLv. */
        public enhanceLv: number;

        /** HeroMasterData refineLv. */
        public refineLv: number;

        /**
         * Encodes the specified HeroMasterData message. Does not implicitly {@link proto.HeroMasterData.verify|verify} messages.
         * @param m HeroMasterData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHeroMasterData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroMasterData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeroMasterData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HeroMasterData;
    }

    /** Properties of an EquipSlotData. */
    interface IEquipSlotData {

        /** EquipSlotData equipId */
        equipId?: (number|Long|null);

        /** EquipSlotData enhanceLv */
        enhanceLv?: (number|null);

        /** EquipSlotData refineLv */
        refineLv?: (number|null);
    }

    /** Represents an EquipSlotData. */
    class EquipSlotData implements IEquipSlotData {

        /**
         * Constructs a new EquipSlotData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEquipSlotData);

        /** EquipSlotData equipId. */
        public equipId: (number|Long);

        /** EquipSlotData enhanceLv. */
        public enhanceLv: number;

        /** EquipSlotData refineLv. */
        public refineLv: number;

        /**
         * Encodes the specified EquipSlotData message. Does not implicitly {@link proto.EquipSlotData.verify|verify} messages.
         * @param m EquipSlotData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEquipSlotData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipSlotData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EquipSlotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EquipSlotData;
    }

    /** Properties of an EquipContainerData. */
    interface IEquipContainerData {

        /** EquipContainerData heroClass */
        heroClass?: (number|null);

        /** EquipContainerData slotData */
        slotData?: (proto.IEquipSlotData[]|null);

        /** EquipContainerData masterData */
        masterData?: (proto.IHeroMasterData|null);
    }

    /** Represents an EquipContainerData. */
    class EquipContainerData implements IEquipContainerData {

        /**
         * Constructs a new EquipContainerData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEquipContainerData);

        /** EquipContainerData heroClass. */
        public heroClass: number;

        /** EquipContainerData slotData. */
        public slotData: proto.IEquipSlotData[];

        /** EquipContainerData masterData. */
        public masterData?: (proto.IHeroMasterData|null);

        /**
         * Encodes the specified EquipContainerData message. Does not implicitly {@link proto.EquipContainerData.verify|verify} messages.
         * @param m EquipContainerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEquipContainerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipContainerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EquipContainerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EquipContainerData;
    }

    /** Properties of an EquipPbData. */
    interface IEquipPbData {

        /** EquipPbData equipList */
        equipList?: (proto.IEquipData[]|null);

        /** EquipPbData containerList */
        containerList?: (proto.IEquipContainerData[]|null);
    }

    /** Represents an EquipPbData. */
    class EquipPbData implements IEquipPbData {

        /**
         * Constructs a new EquipPbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IEquipPbData);

        /** EquipPbData equipList. */
        public equipList: proto.IEquipData[];

        /** EquipPbData containerList. */
        public containerList: proto.IEquipContainerData[];

        /**
         * Encodes the specified EquipPbData message. Does not implicitly {@link proto.EquipPbData.verify|verify} messages.
         * @param m EquipPbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IEquipPbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an EquipPbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns EquipPbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.EquipPbData;
    }

    /** Properties of a Msg_ChangeEquipReq. */
    interface IMsg_ChangeEquipReq {

        /** Msg_ChangeEquipReq heroClass */
        heroClass?: (number|null);

        /** Msg_ChangeEquipReq equipList */
        equipList?: ((number|Long)[]|null);
    }

    /** Represents a Msg_ChangeEquipReq. */
    class Msg_ChangeEquipReq implements IMsg_ChangeEquipReq {

        /**
         * Constructs a new Msg_ChangeEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeEquipReq);

        /** Msg_ChangeEquipReq heroClass. */
        public heroClass: number;

        /** Msg_ChangeEquipReq equipList. */
        public equipList: (number|Long)[];

        /**
         * Encodes the specified Msg_ChangeEquipReq message. Does not implicitly {@link proto.Msg_ChangeEquipReq.verify|verify} messages.
         * @param m Msg_ChangeEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeEquipReq;
    }

    /** Properties of a Msg_ChangeEquipRsp. */
    interface IMsg_ChangeEquipRsp {

        /** Msg_ChangeEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ChangeEquipRsp heroClass */
        heroClass?: (number|null);

        /** Msg_ChangeEquipRsp equipList */
        equipList?: ((number|Long)[]|null);
    }

    /** Represents a Msg_ChangeEquipRsp. */
    class Msg_ChangeEquipRsp implements IMsg_ChangeEquipRsp {

        /**
         * Constructs a new Msg_ChangeEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeEquipRsp);

        /** Msg_ChangeEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ChangeEquipRsp heroClass. */
        public heroClass: number;

        /** Msg_ChangeEquipRsp equipList. */
        public equipList: (number|Long)[];

        /**
         * Encodes the specified Msg_ChangeEquipRsp message. Does not implicitly {@link proto.Msg_ChangeEquipRsp.verify|verify} messages.
         * @param m Msg_ChangeEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeEquipRsp;
    }

    /** Properties of a Msg_UndressEquipReq. */
    interface IMsg_UndressEquipReq {

        /** Msg_UndressEquipReq heroClass */
        heroClass?: (number|null);

        /** Msg_UndressEquipReq equipId */
        equipId?: (number|Long|null);
    }

    /** Represents a Msg_UndressEquipReq. */
    class Msg_UndressEquipReq implements IMsg_UndressEquipReq {

        /**
         * Constructs a new Msg_UndressEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UndressEquipReq);

        /** Msg_UndressEquipReq heroClass. */
        public heroClass: number;

        /** Msg_UndressEquipReq equipId. */
        public equipId: (number|Long);

        /**
         * Encodes the specified Msg_UndressEquipReq message. Does not implicitly {@link proto.Msg_UndressEquipReq.verify|verify} messages.
         * @param m Msg_UndressEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UndressEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UndressEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UndressEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UndressEquipReq;
    }

    /** Properties of a Msg_UndressEquipRsp. */
    interface IMsg_UndressEquipRsp {

        /** Msg_UndressEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UndressEquipRsp heroClass */
        heroClass?: (number|null);

        /** Msg_UndressEquipRsp equipId */
        equipId?: (number|Long|null);
    }

    /** Represents a Msg_UndressEquipRsp. */
    class Msg_UndressEquipRsp implements IMsg_UndressEquipRsp {

        /**
         * Constructs a new Msg_UndressEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UndressEquipRsp);

        /** Msg_UndressEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UndressEquipRsp heroClass. */
        public heroClass: number;

        /** Msg_UndressEquipRsp equipId. */
        public equipId: (number|Long);

        /**
         * Encodes the specified Msg_UndressEquipRsp message. Does not implicitly {@link proto.Msg_UndressEquipRsp.verify|verify} messages.
         * @param m Msg_UndressEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UndressEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UndressEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UndressEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UndressEquipRsp;
    }

    /** Properties of a Msg_SwitchEquipReq. */
    interface IMsg_SwitchEquipReq {

        /** Msg_SwitchEquipReq heroClass1 */
        heroClass1?: (number|null);

        /** Msg_SwitchEquipReq equipId1 */
        equipId1?: (number|Long|null);

        /** Msg_SwitchEquipReq heroClass2 */
        heroClass2?: (number|null);

        /** Msg_SwitchEquipReq equipId2 */
        equipId2?: (number|Long|null);
    }

    /** Represents a Msg_SwitchEquipReq. */
    class Msg_SwitchEquipReq implements IMsg_SwitchEquipReq {

        /**
         * Constructs a new Msg_SwitchEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SwitchEquipReq);

        /** Msg_SwitchEquipReq heroClass1. */
        public heroClass1: number;

        /** Msg_SwitchEquipReq equipId1. */
        public equipId1: (number|Long);

        /** Msg_SwitchEquipReq heroClass2. */
        public heroClass2: number;

        /** Msg_SwitchEquipReq equipId2. */
        public equipId2: (number|Long);

        /**
         * Encodes the specified Msg_SwitchEquipReq message. Does not implicitly {@link proto.Msg_SwitchEquipReq.verify|verify} messages.
         * @param m Msg_SwitchEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SwitchEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SwitchEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SwitchEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SwitchEquipReq;
    }

    /** Properties of a Msg_SwitchEquipRsp. */
    interface IMsg_SwitchEquipRsp {

        /** Msg_SwitchEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SwitchEquipRsp heroClass1 */
        heroClass1?: (number|null);

        /** Msg_SwitchEquipRsp equipId1 */
        equipId1?: (number|Long|null);

        /** Msg_SwitchEquipRsp heroClass2 */
        heroClass2?: (number|null);

        /** Msg_SwitchEquipRsp equipId2 */
        equipId2?: (number|Long|null);
    }

    /** Represents a Msg_SwitchEquipRsp. */
    class Msg_SwitchEquipRsp implements IMsg_SwitchEquipRsp {

        /**
         * Constructs a new Msg_SwitchEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SwitchEquipRsp);

        /** Msg_SwitchEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SwitchEquipRsp heroClass1. */
        public heroClass1: number;

        /** Msg_SwitchEquipRsp equipId1. */
        public equipId1: (number|Long);

        /** Msg_SwitchEquipRsp heroClass2. */
        public heroClass2: number;

        /** Msg_SwitchEquipRsp equipId2. */
        public equipId2: (number|Long);

        /**
         * Encodes the specified Msg_SwitchEquipRsp message. Does not implicitly {@link proto.Msg_SwitchEquipRsp.verify|verify} messages.
         * @param m Msg_SwitchEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SwitchEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SwitchEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SwitchEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SwitchEquipRsp;
    }

    /** Properties of a Msg_DecomposeEquipReq. */
    interface IMsg_DecomposeEquipReq {

        /** Msg_DecomposeEquipReq equipList */
        equipList?: ((number|Long)[]|null);
    }

    /** Represents a Msg_DecomposeEquipReq. */
    class Msg_DecomposeEquipReq implements IMsg_DecomposeEquipReq {

        /**
         * Constructs a new Msg_DecomposeEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DecomposeEquipReq);

        /** Msg_DecomposeEquipReq equipList. */
        public equipList: (number|Long)[];

        /**
         * Encodes the specified Msg_DecomposeEquipReq message. Does not implicitly {@link proto.Msg_DecomposeEquipReq.verify|verify} messages.
         * @param m Msg_DecomposeEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DecomposeEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DecomposeEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DecomposeEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DecomposeEquipReq;
    }

    /** Properties of a Msg_DecomposeEquipRsp. */
    interface IMsg_DecomposeEquipRsp {

        /** Msg_DecomposeEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DecomposeEquipRsp equipList */
        equipList?: ((number|Long)[]|null);

        /** Msg_DecomposeEquipRsp items */
        items?: (proto.IItem[]|null);
    }

    /** Represents a Msg_DecomposeEquipRsp. */
    class Msg_DecomposeEquipRsp implements IMsg_DecomposeEquipRsp {

        /**
         * Constructs a new Msg_DecomposeEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DecomposeEquipRsp);

        /** Msg_DecomposeEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DecomposeEquipRsp equipList. */
        public equipList: (number|Long)[];

        /** Msg_DecomposeEquipRsp items. */
        public items: proto.IItem[];

        /**
         * Encodes the specified Msg_DecomposeEquipRsp message. Does not implicitly {@link proto.Msg_DecomposeEquipRsp.verify|verify} messages.
         * @param m Msg_DecomposeEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DecomposeEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DecomposeEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DecomposeEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DecomposeEquipRsp;
    }

    /** Properties of a Msg_EnhanceEquipReq. */
    interface IMsg_EnhanceEquipReq {

        /** Msg_EnhanceEquipReq heroClass */
        heroClass?: (number|null);

        /** Msg_EnhanceEquipReq slotList */
        slotList?: (number[]|null);
    }

    /** Represents a Msg_EnhanceEquipReq. */
    class Msg_EnhanceEquipReq implements IMsg_EnhanceEquipReq {

        /**
         * Constructs a new Msg_EnhanceEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_EnhanceEquipReq);

        /** Msg_EnhanceEquipReq heroClass. */
        public heroClass: number;

        /** Msg_EnhanceEquipReq slotList. */
        public slotList: number[];

        /**
         * Encodes the specified Msg_EnhanceEquipReq message. Does not implicitly {@link proto.Msg_EnhanceEquipReq.verify|verify} messages.
         * @param m Msg_EnhanceEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_EnhanceEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_EnhanceEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_EnhanceEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_EnhanceEquipReq;
    }

    /** Properties of an UpdateEquipSlotData. */
    interface IUpdateEquipSlotData {

        /** UpdateEquipSlotData equipType */
        equipType?: (number|null);

        /** UpdateEquipSlotData slotData */
        slotData?: (proto.IEquipSlotData|null);
    }

    /** Represents an UpdateEquipSlotData. */
    class UpdateEquipSlotData implements IUpdateEquipSlotData {

        /**
         * Constructs a new UpdateEquipSlotData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IUpdateEquipSlotData);

        /** UpdateEquipSlotData equipType. */
        public equipType: number;

        /** UpdateEquipSlotData slotData. */
        public slotData?: (proto.IEquipSlotData|null);

        /**
         * Encodes the specified UpdateEquipSlotData message. Does not implicitly {@link proto.UpdateEquipSlotData.verify|verify} messages.
         * @param m UpdateEquipSlotData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IUpdateEquipSlotData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an UpdateEquipSlotData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UpdateEquipSlotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.UpdateEquipSlotData;
    }

    /** Properties of a Msg_EnhanceEquipRsp. */
    interface IMsg_EnhanceEquipRsp {

        /** Msg_EnhanceEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_EnhanceEquipRsp heroClass */
        heroClass?: (number|null);

        /** Msg_EnhanceEquipRsp updateData */
        updateData?: (proto.IUpdateEquipSlotData[]|null);
    }

    /** Represents a Msg_EnhanceEquipRsp. */
    class Msg_EnhanceEquipRsp implements IMsg_EnhanceEquipRsp {

        /**
         * Constructs a new Msg_EnhanceEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_EnhanceEquipRsp);

        /** Msg_EnhanceEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_EnhanceEquipRsp heroClass. */
        public heroClass: number;

        /** Msg_EnhanceEquipRsp updateData. */
        public updateData: proto.IUpdateEquipSlotData[];

        /**
         * Encodes the specified Msg_EnhanceEquipRsp message. Does not implicitly {@link proto.Msg_EnhanceEquipRsp.verify|verify} messages.
         * @param m Msg_EnhanceEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_EnhanceEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_EnhanceEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_EnhanceEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_EnhanceEquipRsp;
    }

    /** Properties of a Msg_RefineEquipReq. */
    interface IMsg_RefineEquipReq {

        /** Msg_RefineEquipReq heroClass */
        heroClass?: (number|null);

        /** Msg_RefineEquipReq slotIndex */
        slotIndex?: (number|null);
    }

    /** Represents a Msg_RefineEquipReq. */
    class Msg_RefineEquipReq implements IMsg_RefineEquipReq {

        /**
         * Constructs a new Msg_RefineEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefineEquipReq);

        /** Msg_RefineEquipReq heroClass. */
        public heroClass: number;

        /** Msg_RefineEquipReq slotIndex. */
        public slotIndex: number;

        /**
         * Encodes the specified Msg_RefineEquipReq message. Does not implicitly {@link proto.Msg_RefineEquipReq.verify|verify} messages.
         * @param m Msg_RefineEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefineEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefineEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefineEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefineEquipReq;
    }

    /** Properties of a Msg_RefineEquipRsp. */
    interface IMsg_RefineEquipRsp {

        /** Msg_RefineEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_RefineEquipRsp heroClass */
        heroClass?: (number|null);

        /** Msg_RefineEquipRsp updateData */
        updateData?: (proto.IUpdateEquipSlotData|null);
    }

    /** Represents a Msg_RefineEquipRsp. */
    class Msg_RefineEquipRsp implements IMsg_RefineEquipRsp {

        /**
         * Constructs a new Msg_RefineEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefineEquipRsp);

        /** Msg_RefineEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_RefineEquipRsp heroClass. */
        public heroClass: number;

        /** Msg_RefineEquipRsp updateData. */
        public updateData?: (proto.IUpdateEquipSlotData|null);

        /**
         * Encodes the specified Msg_RefineEquipRsp message. Does not implicitly {@link proto.Msg_RefineEquipRsp.verify|verify} messages.
         * @param m Msg_RefineEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefineEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefineEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefineEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefineEquipRsp;
    }

    /** Properties of a Msg_UpdateHeroMasterLv. */
    interface IMsg_UpdateHeroMasterLv {

        /** Msg_UpdateHeroMasterLv heroClass */
        heroClass?: (number|null);

        /** Msg_UpdateHeroMasterLv masterData */
        masterData?: (proto.IHeroMasterData|null);
    }

    /** Represents a Msg_UpdateHeroMasterLv. */
    class Msg_UpdateHeroMasterLv implements IMsg_UpdateHeroMasterLv {

        /**
         * Constructs a new Msg_UpdateHeroMasterLv.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateHeroMasterLv);

        /** Msg_UpdateHeroMasterLv heroClass. */
        public heroClass: number;

        /** Msg_UpdateHeroMasterLv masterData. */
        public masterData?: (proto.IHeroMasterData|null);

        /**
         * Encodes the specified Msg_UpdateHeroMasterLv message. Does not implicitly {@link proto.Msg_UpdateHeroMasterLv.verify|verify} messages.
         * @param m Msg_UpdateHeroMasterLv message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateHeroMasterLv, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateHeroMasterLv message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateHeroMasterLv
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateHeroMasterLv;
    }

    /** Properties of a Msg_ReceiveRecommendTeamRewardReq. */
    interface IMsg_ReceiveRecommendTeamRewardReq {

        /** Msg_ReceiveRecommendTeamRewardReq recommendTeamId */
        recommendTeamId?: (number|null);
    }

    /** Represents a Msg_ReceiveRecommendTeamRewardReq. */
    class Msg_ReceiveRecommendTeamRewardReq implements IMsg_ReceiveRecommendTeamRewardReq {

        /**
         * Constructs a new Msg_ReceiveRecommendTeamRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveRecommendTeamRewardReq);

        /** Msg_ReceiveRecommendTeamRewardReq recommendTeamId. */
        public recommendTeamId: number;

        /**
         * Encodes the specified Msg_ReceiveRecommendTeamRewardReq message. Does not implicitly {@link proto.Msg_ReceiveRecommendTeamRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveRecommendTeamRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveRecommendTeamRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveRecommendTeamRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveRecommendTeamRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveRecommendTeamRewardReq;
    }

    /** Properties of a Msg_ReceiveRecommendTeamRewardRsp. */
    interface IMsg_ReceiveRecommendTeamRewardRsp {

        /** Msg_ReceiveRecommendTeamRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveRecommendTeamRewardRsp recommendTeamId */
        recommendTeamId?: (number|null);

        /** Msg_ReceiveRecommendTeamRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveRecommendTeamRewardRsp. */
    class Msg_ReceiveRecommendTeamRewardRsp implements IMsg_ReceiveRecommendTeamRewardRsp {

        /**
         * Constructs a new Msg_ReceiveRecommendTeamRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveRecommendTeamRewardRsp);

        /** Msg_ReceiveRecommendTeamRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveRecommendTeamRewardRsp recommendTeamId. */
        public recommendTeamId: number;

        /** Msg_ReceiveRecommendTeamRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveRecommendTeamRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveRecommendTeamRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveRecommendTeamRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveRecommendTeamRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveRecommendTeamRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveRecommendTeamRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveRecommendTeamRewardRsp;
    }

    /** Properties of a Msg_ReceiveHeroAlbumRewardReq. */
    interface IMsg_ReceiveHeroAlbumRewardReq {

        /** Msg_ReceiveHeroAlbumRewardReq heroItemId */
        heroItemId?: (number|null);
    }

    /** Represents a Msg_ReceiveHeroAlbumRewardReq. */
    class Msg_ReceiveHeroAlbumRewardReq implements IMsg_ReceiveHeroAlbumRewardReq {

        /**
         * Constructs a new Msg_ReceiveHeroAlbumRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroAlbumRewardReq);

        /** Msg_ReceiveHeroAlbumRewardReq heroItemId. */
        public heroItemId: number;

        /**
         * Encodes the specified Msg_ReceiveHeroAlbumRewardReq message. Does not implicitly {@link proto.Msg_ReceiveHeroAlbumRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveHeroAlbumRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroAlbumRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroAlbumRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroAlbumRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroAlbumRewardReq;
    }

    /** Properties of a Msg_ReceiveHeroAlbumRewardRsp. */
    interface IMsg_ReceiveHeroAlbumRewardRsp {

        /** Msg_ReceiveHeroAlbumRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveHeroAlbumRewardRsp heroItemId */
        heroItemId?: (number|null);

        /** Msg_ReceiveHeroAlbumRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveHeroAlbumRewardRsp. */
    class Msg_ReceiveHeroAlbumRewardRsp implements IMsg_ReceiveHeroAlbumRewardRsp {

        /**
         * Constructs a new Msg_ReceiveHeroAlbumRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHeroAlbumRewardRsp);

        /** Msg_ReceiveHeroAlbumRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveHeroAlbumRewardRsp heroItemId. */
        public heroItemId: number;

        /** Msg_ReceiveHeroAlbumRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveHeroAlbumRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveHeroAlbumRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveHeroAlbumRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHeroAlbumRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHeroAlbumRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHeroAlbumRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHeroAlbumRewardRsp;
    }

    /** Properties of a Msg_UpLevelResonanceReq. */
    interface IMsg_UpLevelResonanceReq {
    }

    /** Represents a Msg_UpLevelResonanceReq. */
    class Msg_UpLevelResonanceReq implements IMsg_UpLevelResonanceReq {

        /**
         * Constructs a new Msg_UpLevelResonanceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpLevelResonanceReq);

        /**
         * Encodes the specified Msg_UpLevelResonanceReq message. Does not implicitly {@link proto.Msg_UpLevelResonanceReq.verify|verify} messages.
         * @param m Msg_UpLevelResonanceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpLevelResonanceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpLevelResonanceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpLevelResonanceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpLevelResonanceReq;
    }

    /** Properties of a Msg_UpLevelResonanceRsp. */
    interface IMsg_UpLevelResonanceRsp {

        /** Msg_UpLevelResonanceRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpLevelResonanceRsp levelResonance */
        levelResonance?: (number|null);
    }

    /** Represents a Msg_UpLevelResonanceRsp. */
    class Msg_UpLevelResonanceRsp implements IMsg_UpLevelResonanceRsp {

        /**
         * Constructs a new Msg_UpLevelResonanceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpLevelResonanceRsp);

        /** Msg_UpLevelResonanceRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpLevelResonanceRsp levelResonance. */
        public levelResonance: number;

        /**
         * Encodes the specified Msg_UpLevelResonanceRsp message. Does not implicitly {@link proto.Msg_UpLevelResonanceRsp.verify|verify} messages.
         * @param m Msg_UpLevelResonanceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpLevelResonanceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpLevelResonanceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpLevelResonanceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpLevelResonanceRsp;
    }

    /** Properties of a Msg_UpStarResonanceReq. */
    interface IMsg_UpStarResonanceReq {
    }

    /** Represents a Msg_UpStarResonanceReq. */
    class Msg_UpStarResonanceReq implements IMsg_UpStarResonanceReq {

        /**
         * Constructs a new Msg_UpStarResonanceReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpStarResonanceReq);

        /**
         * Encodes the specified Msg_UpStarResonanceReq message. Does not implicitly {@link proto.Msg_UpStarResonanceReq.verify|verify} messages.
         * @param m Msg_UpStarResonanceReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpStarResonanceReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpStarResonanceReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpStarResonanceReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpStarResonanceReq;
    }

    /** Properties of a Msg_UpStarResonanceRsp. */
    interface IMsg_UpStarResonanceRsp {

        /** Msg_UpStarResonanceRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpStarResonanceRsp starResonance */
        starResonance?: (number|null);
    }

    /** Represents a Msg_UpStarResonanceRsp. */
    class Msg_UpStarResonanceRsp implements IMsg_UpStarResonanceRsp {

        /**
         * Constructs a new Msg_UpStarResonanceRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpStarResonanceRsp);

        /** Msg_UpStarResonanceRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpStarResonanceRsp starResonance. */
        public starResonance: number;

        /**
         * Encodes the specified Msg_UpStarResonanceRsp message. Does not implicitly {@link proto.Msg_UpStarResonanceRsp.verify|verify} messages.
         * @param m Msg_UpStarResonanceRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpStarResonanceRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpStarResonanceRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpStarResonanceRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpStarResonanceRsp;
    }

    /** Properties of a Msg_FeatherRecastReq. */
    interface IMsg_FeatherRecastReq {

        /** Msg_FeatherRecastReq equipId */
        equipId?: (number|Long|null);
    }

    /** Represents a Msg_FeatherRecastReq. */
    class Msg_FeatherRecastReq implements IMsg_FeatherRecastReq {

        /**
         * Constructs a new Msg_FeatherRecastReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FeatherRecastReq);

        /** Msg_FeatherRecastReq equipId. */
        public equipId: (number|Long);

        /**
         * Encodes the specified Msg_FeatherRecastReq message. Does not implicitly {@link proto.Msg_FeatherRecastReq.verify|verify} messages.
         * @param m Msg_FeatherRecastReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FeatherRecastReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FeatherRecastReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FeatherRecastReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FeatherRecastReq;
    }

    /** Properties of a Msg_FeatherRecastRsp. */
    interface IMsg_FeatherRecastRsp {

        /** Msg_FeatherRecastRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FeatherRecastRsp data */
        data?: (proto.IEquipData|null);
    }

    /** Represents a Msg_FeatherRecastRsp. */
    class Msg_FeatherRecastRsp implements IMsg_FeatherRecastRsp {

        /**
         * Constructs a new Msg_FeatherRecastRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FeatherRecastRsp);

        /** Msg_FeatherRecastRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FeatherRecastRsp data. */
        public data?: (proto.IEquipData|null);

        /**
         * Encodes the specified Msg_FeatherRecastRsp message. Does not implicitly {@link proto.Msg_FeatherRecastRsp.verify|verify} messages.
         * @param m Msg_FeatherRecastRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FeatherRecastRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FeatherRecastRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FeatherRecastRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FeatherRecastRsp;
    }

    /** Properties of a Msg_FeatherRecastConfirmReq. */
    interface IMsg_FeatherRecastConfirmReq {

        /** Msg_FeatherRecastConfirmReq equipId */
        equipId?: (number|Long|null);

        /** Msg_FeatherRecastConfirmReq result */
        result?: (proto.Msg_FeatherRecastConfirmReq.ConfirmResult|null);
    }

    /** Represents a Msg_FeatherRecastConfirmReq. */
    class Msg_FeatherRecastConfirmReq implements IMsg_FeatherRecastConfirmReq {

        /**
         * Constructs a new Msg_FeatherRecastConfirmReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FeatherRecastConfirmReq);

        /** Msg_FeatherRecastConfirmReq equipId. */
        public equipId: (number|Long);

        /** Msg_FeatherRecastConfirmReq result. */
        public result: proto.Msg_FeatherRecastConfirmReq.ConfirmResult;

        /**
         * Encodes the specified Msg_FeatherRecastConfirmReq message. Does not implicitly {@link proto.Msg_FeatherRecastConfirmReq.verify|verify} messages.
         * @param m Msg_FeatherRecastConfirmReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FeatherRecastConfirmReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FeatherRecastConfirmReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FeatherRecastConfirmReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FeatherRecastConfirmReq;
    }

    namespace Msg_FeatherRecastConfirmReq {

        /** ConfirmResult enum. */
        enum ConfirmResult {
            Left = 0,
            Right = 1
        }
    }

    /** Properties of a Msg_FeatherRecastConfirmRsp. */
    interface IMsg_FeatherRecastConfirmRsp {

        /** Msg_FeatherRecastConfirmRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FeatherRecastConfirmRsp data */
        data?: (proto.IEquipData|null);
    }

    /** Represents a Msg_FeatherRecastConfirmRsp. */
    class Msg_FeatherRecastConfirmRsp implements IMsg_FeatherRecastConfirmRsp {

        /**
         * Constructs a new Msg_FeatherRecastConfirmRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FeatherRecastConfirmRsp);

        /** Msg_FeatherRecastConfirmRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FeatherRecastConfirmRsp data. */
        public data?: (proto.IEquipData|null);

        /**
         * Encodes the specified Msg_FeatherRecastConfirmRsp message. Does not implicitly {@link proto.Msg_FeatherRecastConfirmRsp.verify|verify} messages.
         * @param m Msg_FeatherRecastConfirmRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FeatherRecastConfirmRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FeatherRecastConfirmRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FeatherRecastConfirmRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FeatherRecastConfirmRsp;
    }

    /** EquipLockState enum. */
    enum EquipLockState {
        Unlock = 0,
        Lock = 1
    }

    /** Properties of a Msg_LockEquipReq. */
    interface IMsg_LockEquipReq {

        /** Msg_LockEquipReq equipId */
        equipId?: (number|Long|null);

        /** Msg_LockEquipReq state */
        state?: (proto.EquipLockState|null);
    }

    /** Represents a Msg_LockEquipReq. */
    class Msg_LockEquipReq implements IMsg_LockEquipReq {

        /**
         * Constructs a new Msg_LockEquipReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LockEquipReq);

        /** Msg_LockEquipReq equipId. */
        public equipId: (number|Long);

        /** Msg_LockEquipReq state. */
        public state: proto.EquipLockState;

        /**
         * Encodes the specified Msg_LockEquipReq message. Does not implicitly {@link proto.Msg_LockEquipReq.verify|verify} messages.
         * @param m Msg_LockEquipReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LockEquipReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LockEquipReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LockEquipReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LockEquipReq;
    }

    /** Properties of a Msg_LockEquipRsp. */
    interface IMsg_LockEquipRsp {

        /** Msg_LockEquipRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_LockEquipRsp equipId */
        equipId?: (number|Long|null);

        /** Msg_LockEquipRsp state */
        state?: (proto.EquipLockState|null);
    }

    /** Represents a Msg_LockEquipRsp. */
    class Msg_LockEquipRsp implements IMsg_LockEquipRsp {

        /**
         * Constructs a new Msg_LockEquipRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LockEquipRsp);

        /** Msg_LockEquipRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_LockEquipRsp equipId. */
        public equipId: (number|Long);

        /** Msg_LockEquipRsp state. */
        public state: proto.EquipLockState;

        /**
         * Encodes the specified Msg_LockEquipRsp message. Does not implicitly {@link proto.Msg_LockEquipRsp.verify|verify} messages.
         * @param m Msg_LockEquipRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LockEquipRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LockEquipRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LockEquipRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LockEquipRsp;
    }

    /** Properties of a Msg_UpdateHeroPowerScore. */
    interface IMsg_UpdateHeroPowerScore {

        /** Msg_UpdateHeroPowerScore heroId */
        heroId?: (number|Long|null);

        /** Msg_UpdateHeroPowerScore powerScore */
        powerScore?: (number|null);
    }

    /** Represents a Msg_UpdateHeroPowerScore. */
    class Msg_UpdateHeroPowerScore implements IMsg_UpdateHeroPowerScore {

        /**
         * Constructs a new Msg_UpdateHeroPowerScore.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateHeroPowerScore);

        /** Msg_UpdateHeroPowerScore heroId. */
        public heroId: (number|Long);

        /** Msg_UpdateHeroPowerScore powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified Msg_UpdateHeroPowerScore message. Does not implicitly {@link proto.Msg_UpdateHeroPowerScore.verify|verify} messages.
         * @param m Msg_UpdateHeroPowerScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateHeroPowerScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateHeroPowerScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateHeroPowerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateHeroPowerScore;
    }

    /** Properties of a Msg_UpdateRolePowerScore. */
    interface IMsg_UpdateRolePowerScore {

        /** Msg_UpdateRolePowerScore powerScore */
        powerScore?: (number|null);
    }

    /** Represents a Msg_UpdateRolePowerScore. */
    class Msg_UpdateRolePowerScore implements IMsg_UpdateRolePowerScore {

        /**
         * Constructs a new Msg_UpdateRolePowerScore.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateRolePowerScore);

        /** Msg_UpdateRolePowerScore powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified Msg_UpdateRolePowerScore message. Does not implicitly {@link proto.Msg_UpdateRolePowerScore.verify|verify} messages.
         * @param m Msg_UpdateRolePowerScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateRolePowerScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateRolePowerScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateRolePowerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateRolePowerScore;
    }

    /** Properties of a Msg_FinishHeroStarStepReq. */
    interface IMsg_FinishHeroStarStepReq {

        /** Msg_FinishHeroStarStepReq heroId */
        heroId?: (number|Long|null);

        /** Msg_FinishHeroStarStepReq stepId */
        stepId?: (number|null);

        /** Msg_FinishHeroStarStepReq upStarCosts */
        upStarCosts?: (proto.IUpHeroStarCost[]|null);
    }

    /** Represents a Msg_FinishHeroStarStepReq. */
    class Msg_FinishHeroStarStepReq implements IMsg_FinishHeroStarStepReq {

        /**
         * Constructs a new Msg_FinishHeroStarStepReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FinishHeroStarStepReq);

        /** Msg_FinishHeroStarStepReq heroId. */
        public heroId: (number|Long);

        /** Msg_FinishHeroStarStepReq stepId. */
        public stepId: number;

        /** Msg_FinishHeroStarStepReq upStarCosts. */
        public upStarCosts: proto.IUpHeroStarCost[];

        /**
         * Encodes the specified Msg_FinishHeroStarStepReq message. Does not implicitly {@link proto.Msg_FinishHeroStarStepReq.verify|verify} messages.
         * @param m Msg_FinishHeroStarStepReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FinishHeroStarStepReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FinishHeroStarStepReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FinishHeroStarStepReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FinishHeroStarStepReq;
    }

    /** Properties of a Msg_FinishHeroStarStepRsp. */
    interface IMsg_FinishHeroStarStepRsp {

        /** Msg_FinishHeroStarStepRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FinishHeroStarStepRsp heroId */
        heroId?: (number|Long|null);

        /** Msg_FinishHeroStarStepRsp stepId */
        stepId?: (number|null);
    }

    /** Represents a Msg_FinishHeroStarStepRsp. */
    class Msg_FinishHeroStarStepRsp implements IMsg_FinishHeroStarStepRsp {

        /**
         * Constructs a new Msg_FinishHeroStarStepRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FinishHeroStarStepRsp);

        /** Msg_FinishHeroStarStepRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FinishHeroStarStepRsp heroId. */
        public heroId: (number|Long);

        /** Msg_FinishHeroStarStepRsp stepId. */
        public stepId: number;

        /**
         * Encodes the specified Msg_FinishHeroStarStepRsp message. Does not implicitly {@link proto.Msg_FinishHeroStarStepRsp.verify|verify} messages.
         * @param m Msg_FinishHeroStarStepRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FinishHeroStarStepRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FinishHeroStarStepRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FinishHeroStarStepRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FinishHeroStarStepRsp;
    }

    /** Properties of a GenePbData. */
    interface IGenePbData {

        /** GenePbData smallGeneLevel */
        smallGeneLevel?: (number|null);

        /** GenePbData bigGeneLevel */
        bigGeneLevel?: (number|null);
    }

    /** Represents a GenePbData. */
    class GenePbData implements IGenePbData {

        /**
         * Constructs a new GenePbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGenePbData);

        /** GenePbData smallGeneLevel. */
        public smallGeneLevel: number;

        /** GenePbData bigGeneLevel. */
        public bigGeneLevel: number;

        /**
         * Encodes the specified GenePbData message. Does not implicitly {@link proto.GenePbData.verify|verify} messages.
         * @param m GenePbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGenePbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GenePbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GenePbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GenePbData;
    }

    /** Properties of a Msg_UpgradeGeneLevelReq. */
    interface IMsg_UpgradeGeneLevelReq {

        /** Msg_UpgradeGeneLevelReq type */
        type?: (number|null);
    }

    /** Represents a Msg_UpgradeGeneLevelReq. */
    class Msg_UpgradeGeneLevelReq implements IMsg_UpgradeGeneLevelReq {

        /**
         * Constructs a new Msg_UpgradeGeneLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeGeneLevelReq);

        /** Msg_UpgradeGeneLevelReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_UpgradeGeneLevelReq message. Does not implicitly {@link proto.Msg_UpgradeGeneLevelReq.verify|verify} messages.
         * @param m Msg_UpgradeGeneLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeGeneLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeGeneLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeGeneLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeGeneLevelReq;
    }

    /** Properties of a Msg_UpgradeGeneLevelRsp. */
    interface IMsg_UpgradeGeneLevelRsp {

        /** Msg_UpgradeGeneLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpgradeGeneLevelRsp type */
        type?: (number|null);

        /** Msg_UpgradeGeneLevelRsp level */
        level?: (number|null);
    }

    /** Represents a Msg_UpgradeGeneLevelRsp. */
    class Msg_UpgradeGeneLevelRsp implements IMsg_UpgradeGeneLevelRsp {

        /**
         * Constructs a new Msg_UpgradeGeneLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeGeneLevelRsp);

        /** Msg_UpgradeGeneLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpgradeGeneLevelRsp type. */
        public type: number;

        /** Msg_UpgradeGeneLevelRsp level. */
        public level: number;

        /**
         * Encodes the specified Msg_UpgradeGeneLevelRsp message. Does not implicitly {@link proto.Msg_UpgradeGeneLevelRsp.verify|verify} messages.
         * @param m Msg_UpgradeGeneLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeGeneLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeGeneLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeGeneLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeGeneLevelRsp;
    }

    /** Properties of a BookData. */
    interface IBookData {

        /** BookData id */
        id?: (number|Long|null);

        /** BookData itemId */
        itemId?: (number|null);

        /** BookData star */
        star?: (number|null);

        /** BookData level */
        level?: (number|null);

        /** BookData powerScore */
        powerScore?: (number|null);
    }

    /** Represents a BookData. */
    class BookData implements IBookData {

        /**
         * Constructs a new BookData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookData);

        /** BookData id. */
        public id: (number|Long);

        /** BookData itemId. */
        public itemId: number;

        /** BookData star. */
        public star: number;

        /** BookData level. */
        public level: number;

        /** BookData powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified BookData message. Does not implicitly {@link proto.BookData.verify|verify} messages.
         * @param m BookData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookData;
    }

    /** Properties of a BookSlotData. */
    interface IBookSlotData {

        /** BookSlotData bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a BookSlotData. */
    class BookSlotData implements IBookSlotData {

        /**
         * Constructs a new BookSlotData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookSlotData);

        /** BookSlotData bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified BookSlotData message. Does not implicitly {@link proto.BookSlotData.verify|verify} messages.
         * @param m BookSlotData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookSlotData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookSlotData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookSlotData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookSlotData;
    }

    /** Properties of a BookContainerData. */
    interface IBookContainerData {

        /** BookContainerData heroClass */
        heroClass?: (number|null);

        /** BookContainerData slotData */
        slotData?: (proto.IBookSlotData[]|null);
    }

    /** Represents a BookContainerData. */
    class BookContainerData implements IBookContainerData {

        /**
         * Constructs a new BookContainerData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookContainerData);

        /** BookContainerData heroClass. */
        public heroClass: number;

        /** BookContainerData slotData. */
        public slotData: proto.IBookSlotData[];

        /**
         * Encodes the specified BookContainerData message. Does not implicitly {@link proto.BookContainerData.verify|verify} messages.
         * @param m BookContainerData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookContainerData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookContainerData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookContainerData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookContainerData;
    }

    /** Properties of a BookSeriesData. */
    interface IBookSeriesData {

        /** BookSeriesData id */
        id?: (number|null);

        /** BookSeriesData count */
        count?: (number|null);
    }

    /** Represents a BookSeriesData. */
    class BookSeriesData implements IBookSeriesData {

        /**
         * Constructs a new BookSeriesData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookSeriesData);

        /** BookSeriesData id. */
        public id: number;

        /** BookSeriesData count. */
        public count: number;

        /**
         * Encodes the specified BookSeriesData message. Does not implicitly {@link proto.BookSeriesData.verify|verify} messages.
         * @param m BookSeriesData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookSeriesData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookSeriesData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookSeriesData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookSeriesData;
    }

    /** Properties of a BookPbData. */
    interface IBookPbData {

        /** BookPbData equipList */
        equipList?: (proto.IBookData[]|null);

        /** BookPbData containerList */
        containerList?: (proto.IBookContainerData[]|null);

        /** BookPbData seriesData */
        seriesData?: (proto.IBookSeriesData[]|null);

        /** BookPbData powerScore */
        powerScore?: (number|null);
    }

    /** Represents a BookPbData. */
    class BookPbData implements IBookPbData {

        /**
         * Constructs a new BookPbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookPbData);

        /** BookPbData equipList. */
        public equipList: proto.IBookData[];

        /** BookPbData containerList. */
        public containerList: proto.IBookContainerData[];

        /** BookPbData seriesData. */
        public seriesData: proto.IBookSeriesData[];

        /** BookPbData powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified BookPbData message. Does not implicitly {@link proto.BookPbData.verify|verify} messages.
         * @param m BookPbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookPbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookPbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookPbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookPbData;
    }

    /** Properties of a Msg_UpgradeBookLevelReq. */
    interface IMsg_UpgradeBookLevelReq {

        /** Msg_UpgradeBookLevelReq bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a Msg_UpgradeBookLevelReq. */
    class Msg_UpgradeBookLevelReq implements IMsg_UpgradeBookLevelReq {

        /**
         * Constructs a new Msg_UpgradeBookLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeBookLevelReq);

        /** Msg_UpgradeBookLevelReq bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified Msg_UpgradeBookLevelReq message. Does not implicitly {@link proto.Msg_UpgradeBookLevelReq.verify|verify} messages.
         * @param m Msg_UpgradeBookLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeBookLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeBookLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeBookLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeBookLevelReq;
    }

    /** Properties of a Msg_UpgradeBookLevelRsp. */
    interface IMsg_UpgradeBookLevelRsp {

        /** Msg_UpgradeBookLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpgradeBookLevelRsp book */
        book?: (proto.IBookData|null);
    }

    /** Represents a Msg_UpgradeBookLevelRsp. */
    class Msg_UpgradeBookLevelRsp implements IMsg_UpgradeBookLevelRsp {

        /**
         * Constructs a new Msg_UpgradeBookLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeBookLevelRsp);

        /** Msg_UpgradeBookLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpgradeBookLevelRsp book. */
        public book?: (proto.IBookData|null);

        /**
         * Encodes the specified Msg_UpgradeBookLevelRsp message. Does not implicitly {@link proto.Msg_UpgradeBookLevelRsp.verify|verify} messages.
         * @param m Msg_UpgradeBookLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeBookLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeBookLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeBookLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeBookLevelRsp;
    }

    /** Properties of a Msg_UpgradeBookStarReq. */
    interface IMsg_UpgradeBookStarReq {

        /** Msg_UpgradeBookStarReq bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a Msg_UpgradeBookStarReq. */
    class Msg_UpgradeBookStarReq implements IMsg_UpgradeBookStarReq {

        /**
         * Constructs a new Msg_UpgradeBookStarReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeBookStarReq);

        /** Msg_UpgradeBookStarReq bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified Msg_UpgradeBookStarReq message. Does not implicitly {@link proto.Msg_UpgradeBookStarReq.verify|verify} messages.
         * @param m Msg_UpgradeBookStarReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeBookStarReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeBookStarReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeBookStarReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeBookStarReq;
    }

    /** Properties of a Msg_UpgradeBookStarRsp. */
    interface IMsg_UpgradeBookStarRsp {

        /** Msg_UpgradeBookStarRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpgradeBookStarRsp book */
        book?: (proto.IBookData|null);
    }

    /** Represents a Msg_UpgradeBookStarRsp. */
    class Msg_UpgradeBookStarRsp implements IMsg_UpgradeBookStarRsp {

        /**
         * Constructs a new Msg_UpgradeBookStarRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeBookStarRsp);

        /** Msg_UpgradeBookStarRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpgradeBookStarRsp book. */
        public book?: (proto.IBookData|null);

        /**
         * Encodes the specified Msg_UpgradeBookStarRsp message. Does not implicitly {@link proto.Msg_UpgradeBookStarRsp.verify|verify} messages.
         * @param m Msg_UpgradeBookStarRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeBookStarRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeBookStarRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeBookStarRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeBookStarRsp;
    }

    /** Properties of a Msg_TakeBookReq. */
    interface IMsg_TakeBookReq {

        /** Msg_TakeBookReq bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a Msg_TakeBookReq. */
    class Msg_TakeBookReq implements IMsg_TakeBookReq {

        /**
         * Constructs a new Msg_TakeBookReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TakeBookReq);

        /** Msg_TakeBookReq bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified Msg_TakeBookReq message. Does not implicitly {@link proto.Msg_TakeBookReq.verify|verify} messages.
         * @param m Msg_TakeBookReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TakeBookReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TakeBookReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TakeBookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TakeBookReq;
    }

    /** Properties of a Msg_TakeBookRsp. */
    interface IMsg_TakeBookRsp {

        /** Msg_TakeBookRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_TakeBookRsp bookId */
        bookId?: (number|Long|null);

        /** Msg_TakeBookRsp slot */
        slot?: (number|null);
    }

    /** Represents a Msg_TakeBookRsp. */
    class Msg_TakeBookRsp implements IMsg_TakeBookRsp {

        /**
         * Constructs a new Msg_TakeBookRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TakeBookRsp);

        /** Msg_TakeBookRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_TakeBookRsp bookId. */
        public bookId: (number|Long);

        /** Msg_TakeBookRsp slot. */
        public slot: number;

        /**
         * Encodes the specified Msg_TakeBookRsp message. Does not implicitly {@link proto.Msg_TakeBookRsp.verify|verify} messages.
         * @param m Msg_TakeBookRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TakeBookRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TakeBookRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TakeBookRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TakeBookRsp;
    }

    /** Properties of a Msg_DropBookReq. */
    interface IMsg_DropBookReq {

        /** Msg_DropBookReq bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a Msg_DropBookReq. */
    class Msg_DropBookReq implements IMsg_DropBookReq {

        /**
         * Constructs a new Msg_DropBookReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DropBookReq);

        /** Msg_DropBookReq bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified Msg_DropBookReq message. Does not implicitly {@link proto.Msg_DropBookReq.verify|verify} messages.
         * @param m Msg_DropBookReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DropBookReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DropBookReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DropBookReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DropBookReq;
    }

    /** Properties of a Msg_DropBookRsp. */
    interface IMsg_DropBookRsp {

        /** Msg_DropBookRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DropBookRsp bookId */
        bookId?: (number|Long|null);

        /** Msg_DropBookRsp slot */
        slot?: (number|null);
    }

    /** Represents a Msg_DropBookRsp. */
    class Msg_DropBookRsp implements IMsg_DropBookRsp {

        /**
         * Constructs a new Msg_DropBookRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DropBookRsp);

        /** Msg_DropBookRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DropBookRsp bookId. */
        public bookId: (number|Long);

        /** Msg_DropBookRsp slot. */
        public slot: number;

        /**
         * Encodes the specified Msg_DropBookRsp message. Does not implicitly {@link proto.Msg_DropBookRsp.verify|verify} messages.
         * @param m Msg_DropBookRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DropBookRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DropBookRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DropBookRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DropBookRsp;
    }

    /** Properties of a Msg_UpdateBookSeriesData. */
    interface IMsg_UpdateBookSeriesData {

        /** Msg_UpdateBookSeriesData seriesData */
        seriesData?: (proto.IBookSeriesData[]|null);
    }

    /** Represents a Msg_UpdateBookSeriesData. */
    class Msg_UpdateBookSeriesData implements IMsg_UpdateBookSeriesData {

        /**
         * Constructs a new Msg_UpdateBookSeriesData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateBookSeriesData);

        /** Msg_UpdateBookSeriesData seriesData. */
        public seriesData: proto.IBookSeriesData[];

        /**
         * Encodes the specified Msg_UpdateBookSeriesData message. Does not implicitly {@link proto.Msg_UpdateBookSeriesData.verify|verify} messages.
         * @param m Msg_UpdateBookSeriesData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateBookSeriesData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateBookSeriesData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateBookSeriesData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateBookSeriesData;
    }

    /** Properties of a Msg_BookFragmentSwitchReq. */
    interface IMsg_BookFragmentSwitchReq {
    }

    /** Represents a Msg_BookFragmentSwitchReq. */
    class Msg_BookFragmentSwitchReq implements IMsg_BookFragmentSwitchReq {

        /**
         * Constructs a new Msg_BookFragmentSwitchReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BookFragmentSwitchReq);

        /**
         * Encodes the specified Msg_BookFragmentSwitchReq message. Does not implicitly {@link proto.Msg_BookFragmentSwitchReq.verify|verify} messages.
         * @param m Msg_BookFragmentSwitchReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BookFragmentSwitchReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BookFragmentSwitchReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BookFragmentSwitchReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BookFragmentSwitchReq;
    }

    /** Properties of a Msg_BookFragmentSwitchRsp. */
    interface IMsg_BookFragmentSwitchRsp {

        /** Msg_BookFragmentSwitchRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BookFragmentSwitchRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BookFragmentSwitchRsp. */
    class Msg_BookFragmentSwitchRsp implements IMsg_BookFragmentSwitchRsp {

        /**
         * Constructs a new Msg_BookFragmentSwitchRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BookFragmentSwitchRsp);

        /** Msg_BookFragmentSwitchRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BookFragmentSwitchRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BookFragmentSwitchRsp message. Does not implicitly {@link proto.Msg_BookFragmentSwitchRsp.verify|verify} messages.
         * @param m Msg_BookFragmentSwitchRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BookFragmentSwitchRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BookFragmentSwitchRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BookFragmentSwitchRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BookFragmentSwitchRsp;
    }

    /** Properties of a Msg_CombineBookFragmentReq. */
    interface IMsg_CombineBookFragmentReq {

        /** Msg_CombineBookFragmentReq itemId */
        itemId?: (number|null);
    }

    /** Represents a Msg_CombineBookFragmentReq. */
    class Msg_CombineBookFragmentReq implements IMsg_CombineBookFragmentReq {

        /**
         * Constructs a new Msg_CombineBookFragmentReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CombineBookFragmentReq);

        /** Msg_CombineBookFragmentReq itemId. */
        public itemId: number;

        /**
         * Encodes the specified Msg_CombineBookFragmentReq message. Does not implicitly {@link proto.Msg_CombineBookFragmentReq.verify|verify} messages.
         * @param m Msg_CombineBookFragmentReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CombineBookFragmentReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CombineBookFragmentReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CombineBookFragmentReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CombineBookFragmentReq;
    }

    /** Properties of a Msg_CombineBookFragmentRsp. */
    interface IMsg_CombineBookFragmentRsp {

        /** Msg_CombineBookFragmentRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_CombineBookFragmentRsp bookId */
        bookId?: (number|Long|null);
    }

    /** Represents a Msg_CombineBookFragmentRsp. */
    class Msg_CombineBookFragmentRsp implements IMsg_CombineBookFragmentRsp {

        /**
         * Constructs a new Msg_CombineBookFragmentRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CombineBookFragmentRsp);

        /** Msg_CombineBookFragmentRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_CombineBookFragmentRsp bookId. */
        public bookId: (number|Long);

        /**
         * Encodes the specified Msg_CombineBookFragmentRsp message. Does not implicitly {@link proto.Msg_CombineBookFragmentRsp.verify|verify} messages.
         * @param m Msg_CombineBookFragmentRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CombineBookFragmentRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CombineBookFragmentRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CombineBookFragmentRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CombineBookFragmentRsp;
    }

    /** Properties of a Msg_UpdateBookPowerScore. */
    interface IMsg_UpdateBookPowerScore {

        /** Msg_UpdateBookPowerScore powerScore */
        powerScore?: (number|null);
    }

    /** Represents a Msg_UpdateBookPowerScore. */
    class Msg_UpdateBookPowerScore implements IMsg_UpdateBookPowerScore {

        /**
         * Constructs a new Msg_UpdateBookPowerScore.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateBookPowerScore);

        /** Msg_UpdateBookPowerScore powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified Msg_UpdateBookPowerScore message. Does not implicitly {@link proto.Msg_UpdateBookPowerScore.verify|verify} messages.
         * @param m Msg_UpdateBookPowerScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateBookPowerScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateBookPowerScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateBookPowerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateBookPowerScore;
    }

    /** Properties of a ScrollPainting. */
    interface IScrollPainting {

        /** ScrollPainting heroItemId */
        heroItemId?: (number|null);

        /** ScrollPainting star */
        star?: (number|null);

        /** ScrollPainting unlockStar */
        unlockStar?: (number|null);
    }

    /** Represents a ScrollPainting. */
    class ScrollPainting implements IScrollPainting {

        /**
         * Constructs a new ScrollPainting.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IScrollPainting);

        /** ScrollPainting heroItemId. */
        public heroItemId: number;

        /** ScrollPainting star. */
        public star: number;

        /** ScrollPainting unlockStar. */
        public unlockStar: number;

        /**
         * Encodes the specified ScrollPainting message. Does not implicitly {@link proto.ScrollPainting.verify|verify} messages.
         * @param m ScrollPainting message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IScrollPainting, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ScrollPainting message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ScrollPainting
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ScrollPainting;
    }

    /** Properties of a Msg_GetScrollPaintingsReq. */
    interface IMsg_GetScrollPaintingsReq {
    }

    /** Represents a Msg_GetScrollPaintingsReq. */
    class Msg_GetScrollPaintingsReq implements IMsg_GetScrollPaintingsReq {

        /**
         * Constructs a new Msg_GetScrollPaintingsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetScrollPaintingsReq);

        /**
         * Encodes the specified Msg_GetScrollPaintingsReq message. Does not implicitly {@link proto.Msg_GetScrollPaintingsReq.verify|verify} messages.
         * @param m Msg_GetScrollPaintingsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetScrollPaintingsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetScrollPaintingsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetScrollPaintingsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetScrollPaintingsReq;
    }

    /** Properties of a Msg_GetScrollPaintingsRsp. */
    interface IMsg_GetScrollPaintingsRsp {

        /** Msg_GetScrollPaintingsRsp paintings */
        paintings?: (proto.IScrollPainting[]|null);
    }

    /** Represents a Msg_GetScrollPaintingsRsp. */
    class Msg_GetScrollPaintingsRsp implements IMsg_GetScrollPaintingsRsp {

        /**
         * Constructs a new Msg_GetScrollPaintingsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetScrollPaintingsRsp);

        /** Msg_GetScrollPaintingsRsp paintings. */
        public paintings: proto.IScrollPainting[];

        /**
         * Encodes the specified Msg_GetScrollPaintingsRsp message. Does not implicitly {@link proto.Msg_GetScrollPaintingsRsp.verify|verify} messages.
         * @param m Msg_GetScrollPaintingsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetScrollPaintingsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetScrollPaintingsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetScrollPaintingsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetScrollPaintingsRsp;
    }

    /** Properties of a Msg_UpgradeScrollPaintingStarReq. */
    interface IMsg_UpgradeScrollPaintingStarReq {

        /** Msg_UpgradeScrollPaintingStarReq heroItemId */
        heroItemId?: (number|null);
    }

    /** Represents a Msg_UpgradeScrollPaintingStarReq. */
    class Msg_UpgradeScrollPaintingStarReq implements IMsg_UpgradeScrollPaintingStarReq {

        /**
         * Constructs a new Msg_UpgradeScrollPaintingStarReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeScrollPaintingStarReq);

        /** Msg_UpgradeScrollPaintingStarReq heroItemId. */
        public heroItemId: number;

        /**
         * Encodes the specified Msg_UpgradeScrollPaintingStarReq message. Does not implicitly {@link proto.Msg_UpgradeScrollPaintingStarReq.verify|verify} messages.
         * @param m Msg_UpgradeScrollPaintingStarReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeScrollPaintingStarReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeScrollPaintingStarReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeScrollPaintingStarReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeScrollPaintingStarReq;
    }

    /** Properties of a Msg_UpgradeScrollPaintingStarRsp. */
    interface IMsg_UpgradeScrollPaintingStarRsp {

        /** Msg_UpgradeScrollPaintingStarRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpgradeScrollPaintingStarRsp heroItemId */
        heroItemId?: (number|null);

        /** Msg_UpgradeScrollPaintingStarRsp star */
        star?: (number|null);
    }

    /** Represents a Msg_UpgradeScrollPaintingStarRsp. */
    class Msg_UpgradeScrollPaintingStarRsp implements IMsg_UpgradeScrollPaintingStarRsp {

        /**
         * Constructs a new Msg_UpgradeScrollPaintingStarRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeScrollPaintingStarRsp);

        /** Msg_UpgradeScrollPaintingStarRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpgradeScrollPaintingStarRsp heroItemId. */
        public heroItemId: number;

        /** Msg_UpgradeScrollPaintingStarRsp star. */
        public star: number;

        /**
         * Encodes the specified Msg_UpgradeScrollPaintingStarRsp message. Does not implicitly {@link proto.Msg_UpgradeScrollPaintingStarRsp.verify|verify} messages.
         * @param m Msg_UpgradeScrollPaintingStarRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeScrollPaintingStarRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeScrollPaintingStarRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeScrollPaintingStarRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeScrollPaintingStarRsp;
    }

    /** Properties of a SimpleHeroEquip. */
    interface ISimpleHeroEquip {

        /** SimpleHeroEquip itemId */
        itemId?: (number|null);

        /** SimpleHeroEquip enhanceLv */
        enhanceLv?: (number|null);

        /** SimpleHeroEquip refineLv */
        refineLv?: (number|null);

        /** SimpleHeroEquip powerScore */
        powerScore?: (number|null);

        /** SimpleHeroEquip baseAttr */
        baseAttr?: (number[]|null);

        /** SimpleHeroEquip extraAttr */
        extraAttr?: (number[]|null);

        /** SimpleHeroEquip skillList */
        skillList?: (number[]|null);
    }

    /** Represents a SimpleHeroEquip. */
    class SimpleHeroEquip implements ISimpleHeroEquip {

        /**
         * Constructs a new SimpleHeroEquip.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleHeroEquip);

        /** SimpleHeroEquip itemId. */
        public itemId: number;

        /** SimpleHeroEquip enhanceLv. */
        public enhanceLv: number;

        /** SimpleHeroEquip refineLv. */
        public refineLv: number;

        /** SimpleHeroEquip powerScore. */
        public powerScore: number;

        /** SimpleHeroEquip baseAttr. */
        public baseAttr: number[];

        /** SimpleHeroEquip extraAttr. */
        public extraAttr: number[];

        /** SimpleHeroEquip skillList. */
        public skillList: number[];

        /**
         * Encodes the specified SimpleHeroEquip message. Does not implicitly {@link proto.SimpleHeroEquip.verify|verify} messages.
         * @param m SimpleHeroEquip message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleHeroEquip, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleHeroEquip message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleHeroEquip
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleHeroEquip;
    }

    /** Properties of a SimpleHeroBook. */
    interface ISimpleHeroBook {

        /** SimpleHeroBook itemId */
        itemId?: (number|null);

        /** SimpleHeroBook star */
        star?: (number|null);

        /** SimpleHeroBook level */
        level?: (number|null);

        /** SimpleHeroBook powerScore */
        powerScore?: (number|null);
    }

    /** Represents a SimpleHeroBook. */
    class SimpleHeroBook implements ISimpleHeroBook {

        /**
         * Constructs a new SimpleHeroBook.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleHeroBook);

        /** SimpleHeroBook itemId. */
        public itemId: number;

        /** SimpleHeroBook star. */
        public star: number;

        /** SimpleHeroBook level. */
        public level: number;

        /** SimpleHeroBook powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified SimpleHeroBook message. Does not implicitly {@link proto.SimpleHeroBook.verify|verify} messages.
         * @param m SimpleHeroBook message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleHeroBook, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleHeroBook message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleHeroBook
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleHeroBook;
    }

    /** Properties of a SimpleHero. */
    interface ISimpleHero {

        /** SimpleHero roleId */
        roleId?: (string|null);

        /** SimpleHero areaId */
        areaId?: (number|null);

        /** SimpleHero itemId */
        itemId?: (number|null);

        /** SimpleHero roleName */
        roleName?: (string|null);

        /** SimpleHero powerScore */
        powerScore?: (number|null);

        /** SimpleHero star */
        star?: (number|null);

        /** SimpleHero level */
        level?: (number|null);

        /** SimpleHero attrList */
        attrList?: (proto.IFightAttrData[]|null);

        /** SimpleHero equipList */
        equipList?: (proto.ISimpleHeroEquip[]|null);

        /** SimpleHero bookList */
        bookList?: (proto.ISimpleHeroBook[]|null);
    }

    /** Represents a SimpleHero. */
    class SimpleHero implements ISimpleHero {

        /**
         * Constructs a new SimpleHero.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleHero);

        /** SimpleHero roleId. */
        public roleId: string;

        /** SimpleHero areaId. */
        public areaId: number;

        /** SimpleHero itemId. */
        public itemId: number;

        /** SimpleHero roleName. */
        public roleName: string;

        /** SimpleHero powerScore. */
        public powerScore: number;

        /** SimpleHero star. */
        public star: number;

        /** SimpleHero level. */
        public level: number;

        /** SimpleHero attrList. */
        public attrList: proto.IFightAttrData[];

        /** SimpleHero equipList. */
        public equipList: proto.ISimpleHeroEquip[];

        /** SimpleHero bookList. */
        public bookList: proto.ISimpleHeroBook[];

        /**
         * Encodes the specified SimpleHero message. Does not implicitly {@link proto.SimpleHero.verify|verify} messages.
         * @param m SimpleHero message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleHero, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleHero message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleHero;
    }

    /** Properties of a SimpleRole. */
    interface ISimpleRole {

        /** SimpleRole id */
        id?: (string|null);

        /** SimpleRole areaId */
        areaId?: (number|null);

        /** SimpleRole name */
        name?: (string|null);

        /** SimpleRole headIcon */
        headIcon?: (number|null);

        /** SimpleRole headFrame */
        headFrame?: (number|null);

        /** SimpleRole level */
        level?: (number|null);

        /** SimpleRole reputation */
        reputation?: (number|null);

        /** SimpleRole powerScore */
        powerScore?: (number|null);

        /** SimpleRole mainStage */
        mainStage?: (number|null);

        /** SimpleRole guildName */
        guildName?: (string|null);

        /** SimpleRole offlineTime */
        offlineTime?: (number|Long|null);

        /** SimpleRole heroes */
        heroes?: (proto.ISimpleHero[]|null);
    }

    /** Represents a SimpleRole. */
    class SimpleRole implements ISimpleRole {

        /**
         * Constructs a new SimpleRole.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleRole);

        /** SimpleRole id. */
        public id: string;

        /** SimpleRole areaId. */
        public areaId: number;

        /** SimpleRole name. */
        public name: string;

        /** SimpleRole headIcon. */
        public headIcon: number;

        /** SimpleRole headFrame. */
        public headFrame: number;

        /** SimpleRole level. */
        public level: number;

        /** SimpleRole reputation. */
        public reputation: number;

        /** SimpleRole powerScore. */
        public powerScore: number;

        /** SimpleRole mainStage. */
        public mainStage: number;

        /** SimpleRole guildName. */
        public guildName: string;

        /** SimpleRole offlineTime. */
        public offlineTime: (number|Long);

        /** SimpleRole heroes. */
        public heroes: proto.ISimpleHero[];

        /**
         * Encodes the specified SimpleRole message. Does not implicitly {@link proto.SimpleRole.verify|verify} messages.
         * @param m SimpleRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleRole;
    }

    /** Properties of a Msg_GetSimpleRoleReq. */
    interface IMsg_GetSimpleRoleReq {

        /** Msg_GetSimpleRoleReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_GetSimpleRoleReq. */
    class Msg_GetSimpleRoleReq implements IMsg_GetSimpleRoleReq {

        /**
         * Constructs a new Msg_GetSimpleRoleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSimpleRoleReq);

        /** Msg_GetSimpleRoleReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_GetSimpleRoleReq message. Does not implicitly {@link proto.Msg_GetSimpleRoleReq.verify|verify} messages.
         * @param m Msg_GetSimpleRoleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSimpleRoleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSimpleRoleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSimpleRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSimpleRoleReq;
    }

    /** Properties of a Msg_GetSimpleRoleRsp. */
    interface IMsg_GetSimpleRoleRsp {

        /** Msg_GetSimpleRoleRsp role */
        role?: (proto.ISimpleRole|null);
    }

    /** Represents a Msg_GetSimpleRoleRsp. */
    class Msg_GetSimpleRoleRsp implements IMsg_GetSimpleRoleRsp {

        /**
         * Constructs a new Msg_GetSimpleRoleRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSimpleRoleRsp);

        /** Msg_GetSimpleRoleRsp role. */
        public role?: (proto.ISimpleRole|null);

        /**
         * Encodes the specified Msg_GetSimpleRoleRsp message. Does not implicitly {@link proto.Msg_GetSimpleRoleRsp.verify|verify} messages.
         * @param m Msg_GetSimpleRoleRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSimpleRoleRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSimpleRoleRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSimpleRoleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSimpleRoleRsp;
    }

    /** Properties of a Msg_ChangeRoleNameReq. */
    interface IMsg_ChangeRoleNameReq {

        /** Msg_ChangeRoleNameReq name */
        name?: (string|null);
    }

    /** Represents a Msg_ChangeRoleNameReq. */
    class Msg_ChangeRoleNameReq implements IMsg_ChangeRoleNameReq {

        /**
         * Constructs a new Msg_ChangeRoleNameReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeRoleNameReq);

        /** Msg_ChangeRoleNameReq name. */
        public name: string;

        /**
         * Encodes the specified Msg_ChangeRoleNameReq message. Does not implicitly {@link proto.Msg_ChangeRoleNameReq.verify|verify} messages.
         * @param m Msg_ChangeRoleNameReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeRoleNameReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeRoleNameReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeRoleNameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeRoleNameReq;
    }

    /** Properties of a Msg_ChangeRoleNameRsp. */
    interface IMsg_ChangeRoleNameRsp {

        /** Msg_ChangeRoleNameRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ChangeRoleNameRsp name */
        name?: (string|null);
    }

    /** Represents a Msg_ChangeRoleNameRsp. */
    class Msg_ChangeRoleNameRsp implements IMsg_ChangeRoleNameRsp {

        /**
         * Constructs a new Msg_ChangeRoleNameRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangeRoleNameRsp);

        /** Msg_ChangeRoleNameRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ChangeRoleNameRsp name. */
        public name: string;

        /**
         * Encodes the specified Msg_ChangeRoleNameRsp message. Does not implicitly {@link proto.Msg_ChangeRoleNameRsp.verify|verify} messages.
         * @param m Msg_ChangeRoleNameRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangeRoleNameRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangeRoleNameRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangeRoleNameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangeRoleNameRsp;
    }

    /** Properties of a Msg_GetAvatarInfoReq. */
    interface IMsg_GetAvatarInfoReq {
    }

    /** Represents a Msg_GetAvatarInfoReq. */
    class Msg_GetAvatarInfoReq implements IMsg_GetAvatarInfoReq {

        /**
         * Constructs a new Msg_GetAvatarInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAvatarInfoReq);

        /**
         * Encodes the specified Msg_GetAvatarInfoReq message. Does not implicitly {@link proto.Msg_GetAvatarInfoReq.verify|verify} messages.
         * @param m Msg_GetAvatarInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAvatarInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAvatarInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAvatarInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAvatarInfoReq;
    }

    /** Properties of a Msg_GetAvatarInfoRsp. */
    interface IMsg_GetAvatarInfoRsp {

        /** Msg_GetAvatarInfoRsp headIcons */
        headIcons?: (proto.IItem[]|null);

        /** Msg_GetAvatarInfoRsp headIcon */
        headIcon?: (number|null);

        /** Msg_GetAvatarInfoRsp headFrames */
        headFrames?: (proto.IItem[]|null);

        /** Msg_GetAvatarInfoRsp headFrame */
        headFrame?: (number|null);

        /** Msg_GetAvatarInfoRsp chatBubbles */
        chatBubbles?: (proto.IItem[]|null);

        /** Msg_GetAvatarInfoRsp chatBubble */
        chatBubble?: (number|null);

        /** Msg_GetAvatarInfoRsp mainScenes */
        mainScenes?: (proto.IItem[]|null);

        /** Msg_GetAvatarInfoRsp mainScene */
        mainScene?: (number|null);
    }

    /** Represents a Msg_GetAvatarInfoRsp. */
    class Msg_GetAvatarInfoRsp implements IMsg_GetAvatarInfoRsp {

        /**
         * Constructs a new Msg_GetAvatarInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAvatarInfoRsp);

        /** Msg_GetAvatarInfoRsp headIcons. */
        public headIcons: proto.IItem[];

        /** Msg_GetAvatarInfoRsp headIcon. */
        public headIcon: number;

        /** Msg_GetAvatarInfoRsp headFrames. */
        public headFrames: proto.IItem[];

        /** Msg_GetAvatarInfoRsp headFrame. */
        public headFrame: number;

        /** Msg_GetAvatarInfoRsp chatBubbles. */
        public chatBubbles: proto.IItem[];

        /** Msg_GetAvatarInfoRsp chatBubble. */
        public chatBubble: number;

        /** Msg_GetAvatarInfoRsp mainScenes. */
        public mainScenes: proto.IItem[];

        /** Msg_GetAvatarInfoRsp mainScene. */
        public mainScene: number;

        /**
         * Encodes the specified Msg_GetAvatarInfoRsp message. Does not implicitly {@link proto.Msg_GetAvatarInfoRsp.verify|verify} messages.
         * @param m Msg_GetAvatarInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAvatarInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAvatarInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAvatarInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAvatarInfoRsp;
    }

    /** Properties of a Msg_SetHeadIconReq. */
    interface IMsg_SetHeadIconReq {

        /** Msg_SetHeadIconReq headIcon */
        headIcon?: (number|null);
    }

    /** Represents a Msg_SetHeadIconReq. */
    class Msg_SetHeadIconReq implements IMsg_SetHeadIconReq {

        /**
         * Constructs a new Msg_SetHeadIconReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetHeadIconReq);

        /** Msg_SetHeadIconReq headIcon. */
        public headIcon: number;

        /**
         * Encodes the specified Msg_SetHeadIconReq message. Does not implicitly {@link proto.Msg_SetHeadIconReq.verify|verify} messages.
         * @param m Msg_SetHeadIconReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetHeadIconReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetHeadIconReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetHeadIconReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetHeadIconReq;
    }

    /** Properties of a Msg_SetHeadIconRsp. */
    interface IMsg_SetHeadIconRsp {

        /** Msg_SetHeadIconRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetHeadIconRsp headIcon */
        headIcon?: (number|null);
    }

    /** Represents a Msg_SetHeadIconRsp. */
    class Msg_SetHeadIconRsp implements IMsg_SetHeadIconRsp {

        /**
         * Constructs a new Msg_SetHeadIconRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetHeadIconRsp);

        /** Msg_SetHeadIconRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetHeadIconRsp headIcon. */
        public headIcon: number;

        /**
         * Encodes the specified Msg_SetHeadIconRsp message. Does not implicitly {@link proto.Msg_SetHeadIconRsp.verify|verify} messages.
         * @param m Msg_SetHeadIconRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetHeadIconRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetHeadIconRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetHeadIconRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetHeadIconRsp;
    }

    /** Properties of a Msg_SetHeadFrameReq. */
    interface IMsg_SetHeadFrameReq {

        /** Msg_SetHeadFrameReq headFrame */
        headFrame?: (number|null);
    }

    /** Represents a Msg_SetHeadFrameReq. */
    class Msg_SetHeadFrameReq implements IMsg_SetHeadFrameReq {

        /**
         * Constructs a new Msg_SetHeadFrameReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetHeadFrameReq);

        /** Msg_SetHeadFrameReq headFrame. */
        public headFrame: number;

        /**
         * Encodes the specified Msg_SetHeadFrameReq message. Does not implicitly {@link proto.Msg_SetHeadFrameReq.verify|verify} messages.
         * @param m Msg_SetHeadFrameReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetHeadFrameReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetHeadFrameReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetHeadFrameReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetHeadFrameReq;
    }

    /** Properties of a Msg_SetHeadFrameRsp. */
    interface IMsg_SetHeadFrameRsp {

        /** Msg_SetHeadFrameRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetHeadFrameRsp headFrame */
        headFrame?: (number|null);
    }

    /** Represents a Msg_SetHeadFrameRsp. */
    class Msg_SetHeadFrameRsp implements IMsg_SetHeadFrameRsp {

        /**
         * Constructs a new Msg_SetHeadFrameRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetHeadFrameRsp);

        /** Msg_SetHeadFrameRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetHeadFrameRsp headFrame. */
        public headFrame: number;

        /**
         * Encodes the specified Msg_SetHeadFrameRsp message. Does not implicitly {@link proto.Msg_SetHeadFrameRsp.verify|verify} messages.
         * @param m Msg_SetHeadFrameRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetHeadFrameRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetHeadFrameRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetHeadFrameRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetHeadFrameRsp;
    }

    /** Properties of a Msg_SetChatBubbleReq. */
    interface IMsg_SetChatBubbleReq {

        /** Msg_SetChatBubbleReq chatBubble */
        chatBubble?: (number|null);
    }

    /** Represents a Msg_SetChatBubbleReq. */
    class Msg_SetChatBubbleReq implements IMsg_SetChatBubbleReq {

        /**
         * Constructs a new Msg_SetChatBubbleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetChatBubbleReq);

        /** Msg_SetChatBubbleReq chatBubble. */
        public chatBubble: number;

        /**
         * Encodes the specified Msg_SetChatBubbleReq message. Does not implicitly {@link proto.Msg_SetChatBubbleReq.verify|verify} messages.
         * @param m Msg_SetChatBubbleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetChatBubbleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetChatBubbleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetChatBubbleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetChatBubbleReq;
    }

    /** Properties of a Msg_SetChatBubbleRsp. */
    interface IMsg_SetChatBubbleRsp {

        /** Msg_SetChatBubbleRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetChatBubbleRsp chatBubble */
        chatBubble?: (number|null);
    }

    /** Represents a Msg_SetChatBubbleRsp. */
    class Msg_SetChatBubbleRsp implements IMsg_SetChatBubbleRsp {

        /**
         * Constructs a new Msg_SetChatBubbleRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetChatBubbleRsp);

        /** Msg_SetChatBubbleRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetChatBubbleRsp chatBubble. */
        public chatBubble: number;

        /**
         * Encodes the specified Msg_SetChatBubbleRsp message. Does not implicitly {@link proto.Msg_SetChatBubbleRsp.verify|verify} messages.
         * @param m Msg_SetChatBubbleRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetChatBubbleRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetChatBubbleRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetChatBubbleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetChatBubbleRsp;
    }

    /** Properties of a Msg_SetMainSceneReq. */
    interface IMsg_SetMainSceneReq {

        /** Msg_SetMainSceneReq mainScene */
        mainScene?: (number|null);
    }

    /** Represents a Msg_SetMainSceneReq. */
    class Msg_SetMainSceneReq implements IMsg_SetMainSceneReq {

        /**
         * Constructs a new Msg_SetMainSceneReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetMainSceneReq);

        /** Msg_SetMainSceneReq mainScene. */
        public mainScene: number;

        /**
         * Encodes the specified Msg_SetMainSceneReq message. Does not implicitly {@link proto.Msg_SetMainSceneReq.verify|verify} messages.
         * @param m Msg_SetMainSceneReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetMainSceneReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetMainSceneReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetMainSceneReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetMainSceneReq;
    }

    /** Properties of a Msg_SetMainSceneRsp. */
    interface IMsg_SetMainSceneRsp {

        /** Msg_SetMainSceneRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetMainSceneRsp mainScene */
        mainScene?: (number|null);
    }

    /** Represents a Msg_SetMainSceneRsp. */
    class Msg_SetMainSceneRsp implements IMsg_SetMainSceneRsp {

        /**
         * Constructs a new Msg_SetMainSceneRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetMainSceneRsp);

        /** Msg_SetMainSceneRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetMainSceneRsp mainScene. */
        public mainScene: number;

        /**
         * Encodes the specified Msg_SetMainSceneRsp message. Does not implicitly {@link proto.Msg_SetMainSceneRsp.verify|verify} messages.
         * @param m Msg_SetMainSceneRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetMainSceneRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetMainSceneRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetMainSceneRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetMainSceneRsp;
    }

    /** Properties of a Msg_RoleLevelUpPush. */
    interface IMsg_RoleLevelUpPush {

        /** Msg_RoleLevelUpPush level */
        level?: (number|null);

        /** Msg_RoleLevelUpPush rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_RoleLevelUpPush. */
    class Msg_RoleLevelUpPush implements IMsg_RoleLevelUpPush {

        /**
         * Constructs a new Msg_RoleLevelUpPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RoleLevelUpPush);

        /** Msg_RoleLevelUpPush level. */
        public level: number;

        /** Msg_RoleLevelUpPush rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_RoleLevelUpPush message. Does not implicitly {@link proto.Msg_RoleLevelUpPush.verify|verify} messages.
         * @param m Msg_RoleLevelUpPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RoleLevelUpPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RoleLevelUpPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RoleLevelUpPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RoleLevelUpPush;
    }

    /** Properties of a DropSumData. */
    interface IDropSumData {

        /** DropSumData id */
        id?: (string|null);

        /** DropSumData sum */
        sum?: (number|null);
    }

    /** Represents a DropSumData. */
    class DropSumData implements IDropSumData {

        /**
         * Constructs a new DropSumData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDropSumData);

        /** DropSumData id. */
        public id: string;

        /** DropSumData sum. */
        public sum: number;

        /**
         * Encodes the specified DropSumData message. Does not implicitly {@link proto.DropSumData.verify|verify} messages.
         * @param m DropSumData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDropSumData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DropSumData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DropSumData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DropSumData;
    }

    /** Properties of a DropPbData. */
    interface IDropPbData {

        /** DropPbData data */
        data?: (proto.IDropSumData[]|null);
    }

    /** Represents a DropPbData. */
    class DropPbData implements IDropPbData {

        /**
         * Constructs a new DropPbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDropPbData);

        /** DropPbData data. */
        public data: proto.IDropSumData[];

        /**
         * Encodes the specified DropPbData message. Does not implicitly {@link proto.DropPbData.verify|verify} messages.
         * @param m DropPbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDropPbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DropPbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DropPbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DropPbData;
    }

    /** Properties of a Msg_UpdateDropSum. */
    interface IMsg_UpdateDropSum {

        /** Msg_UpdateDropSum data */
        data?: (proto.IDropSumData[]|null);
    }

    /** Represents a Msg_UpdateDropSum. */
    class Msg_UpdateDropSum implements IMsg_UpdateDropSum {

        /**
         * Constructs a new Msg_UpdateDropSum.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateDropSum);

        /** Msg_UpdateDropSum data. */
        public data: proto.IDropSumData[];

        /**
         * Encodes the specified Msg_UpdateDropSum message. Does not implicitly {@link proto.Msg_UpdateDropSum.verify|verify} messages.
         * @param m Msg_UpdateDropSum message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateDropSum, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateDropSum message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateDropSum
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateDropSum;
    }

    /** Properties of a FirstRewardId. */
    interface IFirstRewardId {

        /** FirstRewardId stageId */
        stageId?: (number|null);

        /** FirstRewardId index */
        index?: (number|null);
    }

    /** Represents a FirstRewardId. */
    class FirstRewardId implements IFirstRewardId {

        /**
         * Constructs a new FirstRewardId.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFirstRewardId);

        /** FirstRewardId stageId. */
        public stageId: number;

        /** FirstRewardId index. */
        public index: number;

        /**
         * Encodes the specified FirstRewardId message. Does not implicitly {@link proto.FirstRewardId.verify|verify} messages.
         * @param m FirstRewardId message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFirstRewardId, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FirstRewardId message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FirstRewardId
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FirstRewardId;
    }

    /** Properties of a Msg_GetMainStageInfoReq. */
    interface IMsg_GetMainStageInfoReq {
    }

    /** Represents a Msg_GetMainStageInfoReq. */
    class Msg_GetMainStageInfoReq implements IMsg_GetMainStageInfoReq {

        /**
         * Constructs a new Msg_GetMainStageInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMainStageInfoReq);

        /**
         * Encodes the specified Msg_GetMainStageInfoReq message. Does not implicitly {@link proto.Msg_GetMainStageInfoReq.verify|verify} messages.
         * @param m Msg_GetMainStageInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMainStageInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMainStageInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMainStageInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMainStageInfoReq;
    }

    /** Properties of a Msg_GetMainStageInfoRsp. */
    interface IMsg_GetMainStageInfoRsp {

        /** Msg_GetMainStageInfoRsp clearedStageIds */
        clearedStageIds?: (number[]|null);

        /** Msg_GetMainStageInfoRsp currentMainStageMaxAliveSeconds */
        currentMainStageMaxAliveSeconds?: (number|null);

        /** Msg_GetMainStageInfoRsp fightingMainStageId */
        fightingMainStageId?: (number|null);

        /** Msg_GetMainStageInfoRsp receivedMainFirstRewardIds */
        receivedMainFirstRewardIds?: (proto.IFirstRewardId[]|null);
    }

    /** Represents a Msg_GetMainStageInfoRsp. */
    class Msg_GetMainStageInfoRsp implements IMsg_GetMainStageInfoRsp {

        /**
         * Constructs a new Msg_GetMainStageInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMainStageInfoRsp);

        /** Msg_GetMainStageInfoRsp clearedStageIds. */
        public clearedStageIds: number[];

        /** Msg_GetMainStageInfoRsp currentMainStageMaxAliveSeconds. */
        public currentMainStageMaxAliveSeconds: number;

        /** Msg_GetMainStageInfoRsp fightingMainStageId. */
        public fightingMainStageId: number;

        /** Msg_GetMainStageInfoRsp receivedMainFirstRewardIds. */
        public receivedMainFirstRewardIds: proto.IFirstRewardId[];

        /**
         * Encodes the specified Msg_GetMainStageInfoRsp message. Does not implicitly {@link proto.Msg_GetMainStageInfoRsp.verify|verify} messages.
         * @param m Msg_GetMainStageInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMainStageInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMainStageInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMainStageInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMainStageInfoRsp;
    }

    /** Properties of a Msg_StartStageReq. */
    interface IMsg_StartStageReq {

        /** Msg_StartStageReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_StartStageReq. */
    class Msg_StartStageReq implements IMsg_StartStageReq {

        /**
         * Constructs a new Msg_StartStageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartStageReq);

        /** Msg_StartStageReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_StartStageReq message. Does not implicitly {@link proto.Msg_StartStageReq.verify|verify} messages.
         * @param m Msg_StartStageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartStageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartStageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartStageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartStageReq;
    }

    /** Properties of a Msg_StartStageRsp. */
    interface IMsg_StartStageRsp {

        /** Msg_StartStageRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_StartStageRsp. */
    class Msg_StartStageRsp implements IMsg_StartStageRsp {

        /**
         * Constructs a new Msg_StartStageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartStageRsp);

        /** Msg_StartStageRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_StartStageRsp message. Does not implicitly {@link proto.Msg_StartStageRsp.verify|verify} messages.
         * @param m Msg_StartStageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartStageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartStageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartStageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartStageRsp;
    }

    /** Properties of a StageFightBufferData. */
    interface IStageFightBufferData {

        /** StageFightBufferData bufferId */
        bufferId?: (number|null);

        /** StageFightBufferData createTime */
        createTime?: (number|null);

        /** StageFightBufferData layer */
        layer?: (number|null);

        /** StageFightBufferData adder */
        adder?: (number|null);

        /** StageFightBufferData target */
        target?: (number|null);
    }

    /** Represents a StageFightBufferData. */
    class StageFightBufferData implements IStageFightBufferData {

        /**
         * Constructs a new StageFightBufferData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IStageFightBufferData);

        /** StageFightBufferData bufferId. */
        public bufferId: number;

        /** StageFightBufferData createTime. */
        public createTime: number;

        /** StageFightBufferData layer. */
        public layer: number;

        /** StageFightBufferData adder. */
        public adder: number;

        /** StageFightBufferData target. */
        public target: number;

        /**
         * Encodes the specified StageFightBufferData message. Does not implicitly {@link proto.StageFightBufferData.verify|verify} messages.
         * @param m StageFightBufferData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IStageFightBufferData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StageFightBufferData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StageFightBufferData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.StageFightBufferData;
    }

    /** CombatEvent enum. */
    enum CombatEvent {
        AddBuffer = 0,
        RemoveBuffer = 1,
        Attack = 2
    }

    /** Properties of a CombatData. */
    interface ICombatData {

        /** CombatData timestamp */
        timestamp?: (number|null);

        /** CombatData ev */
        ev?: (proto.CombatEvent|null);

        /** CombatData addBuffer */
        addBuffer?: (proto.ICombatEventAddBuffer|null);

        /** CombatData removeBuffer */
        removeBuffer?: (proto.ICombatEventRemoveBuffer|null);

        /** CombatData attack */
        attack?: (proto.ICombatEventAttack|null);
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

        /** CombatData addBuffer. */
        public addBuffer?: (proto.ICombatEventAddBuffer|null);

        /** CombatData removeBuffer. */
        public removeBuffer?: (proto.ICombatEventRemoveBuffer|null);

        /** CombatData attack. */
        public attack?: (proto.ICombatEventAttack|null);

        /** CombatData EventData. */
        public EventData?: ("addBuffer"|"removeBuffer"|"attack");

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

    /** Properties of a StageFightHeroData. */
    interface IStageFightHeroData {

        /** StageFightHeroData heroClass */
        heroClass?: (number|null);

        /** StageFightHeroData heroSerial */
        heroSerial?: (number|null);

        /** StageFightHeroData bufferList */
        bufferList?: (proto.IStageFightBufferData[]|null);

        /** StageFightHeroData hp */
        hp?: (number|Long|null);
    }

    /** Represents a StageFightHeroData. */
    class StageFightHeroData implements IStageFightHeroData {

        /**
         * Constructs a new StageFightHeroData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IStageFightHeroData);

        /** StageFightHeroData heroClass. */
        public heroClass: number;

        /** StageFightHeroData heroSerial. */
        public heroSerial: number;

        /** StageFightHeroData bufferList. */
        public bufferList: proto.IStageFightBufferData[];

        /** StageFightHeroData hp. */
        public hp: (number|Long);

        /**
         * Encodes the specified StageFightHeroData message. Does not implicitly {@link proto.StageFightHeroData.verify|verify} messages.
         * @param m StageFightHeroData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IStageFightHeroData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StageFightHeroData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StageFightHeroData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.StageFightHeroData;
    }

    /** Properties of a StageFightExtraWeaponData. */
    interface IStageFightExtraWeaponData {

        /** StageFightExtraWeaponData timestamp */
        timestamp?: (number|null);

        /** StageFightExtraWeaponData weaponId */
        weaponId?: (number|null);
    }

    /** Represents a StageFightExtraWeaponData. */
    class StageFightExtraWeaponData implements IStageFightExtraWeaponData {

        /**
         * Constructs a new StageFightExtraWeaponData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IStageFightExtraWeaponData);

        /** StageFightExtraWeaponData timestamp. */
        public timestamp: number;

        /** StageFightExtraWeaponData weaponId. */
        public weaponId: number;

        /**
         * Encodes the specified StageFightExtraWeaponData message. Does not implicitly {@link proto.StageFightExtraWeaponData.verify|verify} messages.
         * @param m StageFightExtraWeaponData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IStageFightExtraWeaponData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StageFightExtraWeaponData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StageFightExtraWeaponData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.StageFightExtraWeaponData;
    }

    /** Properties of a StageBossFightData. */
    interface IStageBossFightData {

        /** StageBossFightData bossId */
        bossId?: (number|null);

        /** StageBossFightData bossSerial */
        bossSerial?: (number|null);

        /** StageBossFightData weaponList */
        weaponList?: (number[]|null);

        /** StageBossFightData extraWeaponList */
        extraWeaponList?: (proto.IStageFightExtraWeaponData[]|null);

        /** StageBossFightData startTime */
        startTime?: (number|null);

        /** StageBossFightData fightTime */
        fightTime?: (number|null);

        /** StageBossFightData reviveRecord */
        reviveRecord?: (number[]|null);

        /** StageBossFightData heroList */
        heroList?: (proto.IStageFightHeroData[]|null);

        /** StageBossFightData combatData */
        combatData?: (proto.ICombatData[]|null);
    }

    /** Represents a StageBossFightData. */
    class StageBossFightData implements IStageBossFightData {

        /**
         * Constructs a new StageBossFightData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IStageBossFightData);

        /** StageBossFightData bossId. */
        public bossId: number;

        /** StageBossFightData bossSerial. */
        public bossSerial: number;

        /** StageBossFightData weaponList. */
        public weaponList: number[];

        /** StageBossFightData extraWeaponList. */
        public extraWeaponList: proto.IStageFightExtraWeaponData[];

        /** StageBossFightData startTime. */
        public startTime: number;

        /** StageBossFightData fightTime. */
        public fightTime: number;

        /** StageBossFightData reviveRecord. */
        public reviveRecord: number[];

        /** StageBossFightData heroList. */
        public heroList: proto.IStageFightHeroData[];

        /** StageBossFightData combatData. */
        public combatData: proto.ICombatData[];

        /**
         * Encodes the specified StageBossFightData message. Does not implicitly {@link proto.StageBossFightData.verify|verify} messages.
         * @param m StageBossFightData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IStageBossFightData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a StageBossFightData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns StageBossFightData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.StageBossFightData;
    }

    /** Properties of a CombatEventAddBuffer. */
    interface ICombatEventAddBuffer {

        /** CombatEventAddBuffer adder */
        adder?: (number|null);

        /** CombatEventAddBuffer target */
        target?: (number|null);

        /** CombatEventAddBuffer bufferId */
        bufferId?: (number|null);

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

        /** CombatEventAddBuffer adder. */
        public adder: number;

        /** CombatEventAddBuffer target. */
        public target: number;

        /** CombatEventAddBuffer bufferId. */
        public bufferId: number;

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

        /** CombatEventRemoveBuffer owner */
        owner?: (number|null);

        /** CombatEventRemoveBuffer bufferId */
        bufferId?: (number|null);

        /** CombatEventRemoveBuffer layer */
        layer?: (number|null);
    }

    /** Represents a CombatEventRemoveBuffer. */
    class CombatEventRemoveBuffer implements ICombatEventRemoveBuffer {

        /**
         * Constructs a new CombatEventRemoveBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventRemoveBuffer);

        /** CombatEventRemoveBuffer owner. */
        public owner: number;

        /** CombatEventRemoveBuffer bufferId. */
        public bufferId: number;

        /** CombatEventRemoveBuffer layer. */
        public layer: number;

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

    /** Properties of a CombatEventAttack. */
    interface ICombatEventAttack {

        /** CombatEventAttack attacker */
        attacker?: (number|null);

        /** CombatEventAttack target */
        target?: (number|null);

        /** CombatEventAttack bulletId */
        bulletId?: (number|null);

        /** CombatEventAttack isCritical */
        isCritical?: (boolean|null);

        /** CombatEventAttack isFatalAtk */
        isFatalAtk?: (boolean|null);

        /** CombatEventAttack damage */
        damage?: (number|Long|null);
    }

    /** Represents a CombatEventAttack. */
    class CombatEventAttack implements ICombatEventAttack {

        /**
         * Constructs a new CombatEventAttack.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICombatEventAttack);

        /** CombatEventAttack attacker. */
        public attacker: number;

        /** CombatEventAttack target. */
        public target: number;

        /** CombatEventAttack bulletId. */
        public bulletId: number;

        /** CombatEventAttack isCritical. */
        public isCritical: boolean;

        /** CombatEventAttack isFatalAtk. */
        public isFatalAtk: boolean;

        /** CombatEventAttack damage. */
        public damage: (number|Long);

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

    /** Properties of a Msg_FinishStageReq. */
    interface IMsg_FinishStageReq {

        /** Msg_FinishStageReq result */
        result?: (proto.Msg_FinishStageReq.Result|null);

        /** Msg_FinishStageReq aliveSeconds */
        aliveSeconds?: (number|null);

        /** Msg_FinishStageReq score */
        score?: (number|Long|null);

        /** Msg_FinishStageReq killNum */
        killNum?: (number|Long|null);

        /** Msg_FinishStageReq collectFeatherNum */
        collectFeatherNum?: (number|null);

        /** Msg_FinishStageReq killBossNum */
        killBossNum?: (number|null);

        /** Msg_FinishStageReq bossFightData */
        bossFightData?: (proto.IStageBossFightData[]|null);

        /** Msg_FinishStageReq record */
        record?: (proto.IMainStageCleardRecord|null);
    }

    /** Represents a Msg_FinishStageReq. */
    class Msg_FinishStageReq implements IMsg_FinishStageReq {

        /**
         * Constructs a new Msg_FinishStageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FinishStageReq);

        /** Msg_FinishStageReq result. */
        public result: proto.Msg_FinishStageReq.Result;

        /** Msg_FinishStageReq aliveSeconds. */
        public aliveSeconds: number;

        /** Msg_FinishStageReq score. */
        public score: (number|Long);

        /** Msg_FinishStageReq killNum. */
        public killNum: (number|Long);

        /** Msg_FinishStageReq collectFeatherNum. */
        public collectFeatherNum: number;

        /** Msg_FinishStageReq killBossNum. */
        public killBossNum: number;

        /** Msg_FinishStageReq bossFightData. */
        public bossFightData: proto.IStageBossFightData[];

        /** Msg_FinishStageReq record. */
        public record?: (proto.IMainStageCleardRecord|null);

        /**
         * Encodes the specified Msg_FinishStageReq message. Does not implicitly {@link proto.Msg_FinishStageReq.verify|verify} messages.
         * @param m Msg_FinishStageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FinishStageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FinishStageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FinishStageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FinishStageReq;
    }

    namespace Msg_FinishStageReq {

        /** Result enum. */
        enum Result {
            Quit = 0,
            Win = 1,
            Lose = 2
        }
    }

    /** Properties of a Msg_FinishStageRsp. */
    interface IMsg_FinishStageRsp {

        /** Msg_FinishStageRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FinishStageRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_FinishStageRsp stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_FinishStageRsp. */
    class Msg_FinishStageRsp implements IMsg_FinishStageRsp {

        /**
         * Constructs a new Msg_FinishStageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FinishStageRsp);

        /** Msg_FinishStageRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FinishStageRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_FinishStageRsp stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_FinishStageRsp message. Does not implicitly {@link proto.Msg_FinishStageRsp.verify|verify} messages.
         * @param m Msg_FinishStageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FinishStageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FinishStageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FinishStageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FinishStageRsp;
    }

    /** Properties of a Msg_ReceiveMainStageDoubleRewardsReq. */
    interface IMsg_ReceiveMainStageDoubleRewardsReq {
    }

    /** Represents a Msg_ReceiveMainStageDoubleRewardsReq. */
    class Msg_ReceiveMainStageDoubleRewardsReq implements IMsg_ReceiveMainStageDoubleRewardsReq {

        /**
         * Constructs a new Msg_ReceiveMainStageDoubleRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMainStageDoubleRewardsReq);

        /**
         * Encodes the specified Msg_ReceiveMainStageDoubleRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveMainStageDoubleRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveMainStageDoubleRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMainStageDoubleRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMainStageDoubleRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMainStageDoubleRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMainStageDoubleRewardsReq;
    }

    /** Properties of a Msg_ReceiveMainStageDoubleRewardsRsp. */
    interface IMsg_ReceiveMainStageDoubleRewardsRsp {

        /** Msg_ReceiveMainStageDoubleRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveMainStageDoubleRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveMainStageDoubleRewardsRsp. */
    class Msg_ReceiveMainStageDoubleRewardsRsp implements IMsg_ReceiveMainStageDoubleRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveMainStageDoubleRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMainStageDoubleRewardsRsp);

        /** Msg_ReceiveMainStageDoubleRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveMainStageDoubleRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveMainStageDoubleRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveMainStageDoubleRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveMainStageDoubleRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMainStageDoubleRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMainStageDoubleRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMainStageDoubleRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMainStageDoubleRewardsRsp;
    }

    /** Properties of a Msg_ReceiveMainFirstRewardReq. */
    interface IMsg_ReceiveMainFirstRewardReq {

        /** Msg_ReceiveMainFirstRewardReq stageId */
        stageId?: (number|null);

        /** Msg_ReceiveMainFirstRewardReq indexes */
        indexes?: (number[]|null);
    }

    /** Represents a Msg_ReceiveMainFirstRewardReq. */
    class Msg_ReceiveMainFirstRewardReq implements IMsg_ReceiveMainFirstRewardReq {

        /**
         * Constructs a new Msg_ReceiveMainFirstRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMainFirstRewardReq);

        /** Msg_ReceiveMainFirstRewardReq stageId. */
        public stageId: number;

        /** Msg_ReceiveMainFirstRewardReq indexes. */
        public indexes: number[];

        /**
         * Encodes the specified Msg_ReceiveMainFirstRewardReq message. Does not implicitly {@link proto.Msg_ReceiveMainFirstRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveMainFirstRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMainFirstRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMainFirstRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMainFirstRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMainFirstRewardReq;
    }

    /** Properties of a Msg_ReceiveMainFirstRewardRsp. */
    interface IMsg_ReceiveMainFirstRewardRsp {

        /** Msg_ReceiveMainFirstRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveMainFirstRewardRsp stageId */
        stageId?: (number|null);

        /** Msg_ReceiveMainFirstRewardRsp indexes */
        indexes?: (number[]|null);

        /** Msg_ReceiveMainFirstRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveMainFirstRewardRsp. */
    class Msg_ReceiveMainFirstRewardRsp implements IMsg_ReceiveMainFirstRewardRsp {

        /**
         * Constructs a new Msg_ReceiveMainFirstRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMainFirstRewardRsp);

        /** Msg_ReceiveMainFirstRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveMainFirstRewardRsp stageId. */
        public stageId: number;

        /** Msg_ReceiveMainFirstRewardRsp indexes. */
        public indexes: number[];

        /** Msg_ReceiveMainFirstRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveMainFirstRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveMainFirstRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveMainFirstRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMainFirstRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMainFirstRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMainFirstRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMainFirstRewardRsp;
    }

    /** Properties of a Msg_GachaReq. */
    interface IMsg_GachaReq {

        /** Msg_GachaReq id */
        id?: (number|null);

        /** Msg_GachaReq fromAdv */
        fromAdv?: (boolean|null);
    }

    /** Represents a Msg_GachaReq. */
    class Msg_GachaReq implements IMsg_GachaReq {

        /**
         * Constructs a new Msg_GachaReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaReq);

        /** Msg_GachaReq id. */
        public id: number;

        /** Msg_GachaReq fromAdv. */
        public fromAdv: boolean;

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

    /** Properties of a Msg_GachaRsp. */
    interface IMsg_GachaRsp {

        /** Msg_GachaRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GachaRsp id */
        id?: (number|null);

        /** Msg_GachaRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_GachaRsp. */
    class Msg_GachaRsp implements IMsg_GachaRsp {

        /**
         * Constructs a new Msg_GachaRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GachaRsp);

        /** Msg_GachaRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GachaRsp id. */
        public id: number;

        /** Msg_GachaRsp rewards. */
        public rewards: proto.IItem[];

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

    /** Properties of a UseItemExtra. */
    interface IUseItemExtra {

        /** UseItemExtra choiceIndexes */
        choiceIndexes?: (number[]|null);
    }

    /** Represents a UseItemExtra. */
    class UseItemExtra implements IUseItemExtra {

        /**
         * Constructs a new UseItemExtra.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IUseItemExtra);

        /** UseItemExtra choiceIndexes. */
        public choiceIndexes: number[];

        /**
         * Encodes the specified UseItemExtra message. Does not implicitly {@link proto.UseItemExtra.verify|verify} messages.
         * @param m UseItemExtra message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IUseItemExtra, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a UseItemExtra message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns UseItemExtra
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.UseItemExtra;
    }

    /** Properties of a Msg_UseItemReq. */
    interface IMsg_UseItemReq {

        /** Msg_UseItemReq timestamp */
        timestamp?: (number|null);

        /** Msg_UseItemReq itemId */
        itemId?: (number|null);

        /** Msg_UseItemReq itemCount */
        itemCount?: (number|Long|null);

        /** Msg_UseItemReq extra */
        extra?: (proto.IUseItemExtra|null);
    }

    /** Represents a Msg_UseItemReq. */
    class Msg_UseItemReq implements IMsg_UseItemReq {

        /**
         * Constructs a new Msg_UseItemReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseItemReq);

        /** Msg_UseItemReq timestamp. */
        public timestamp: number;

        /** Msg_UseItemReq itemId. */
        public itemId: number;

        /** Msg_UseItemReq itemCount. */
        public itemCount: (number|Long);

        /** Msg_UseItemReq extra. */
        public extra?: (proto.IUseItemExtra|null);

        /**
         * Encodes the specified Msg_UseItemReq message. Does not implicitly {@link proto.Msg_UseItemReq.verify|verify} messages.
         * @param m Msg_UseItemReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseItemReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseItemReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseItemReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseItemReq;
    }

    /** Properties of a Msg_UseItemRsp. */
    interface IMsg_UseItemRsp {

        /** Msg_UseItemRsp timestamp */
        timestamp?: (number|null);

        /** Msg_UseItemRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UseItemRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_UseItemRsp. */
    class Msg_UseItemRsp implements IMsg_UseItemRsp {

        /**
         * Constructs a new Msg_UseItemRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseItemRsp);

        /** Msg_UseItemRsp timestamp. */
        public timestamp: number;

        /** Msg_UseItemRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UseItemRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_UseItemRsp message. Does not implicitly {@link proto.Msg_UseItemRsp.verify|verify} messages.
         * @param m Msg_UseItemRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseItemRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseItemRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseItemRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseItemRsp;
    }

    /** Properties of an OpenFunction. */
    interface IOpenFunction {

        /** OpenFunction name */
        name?: (number|null);

        /** OpenFunction isOpen */
        isOpen?: (boolean|null);

        /** OpenFunction isReceivedRewards */
        isReceivedRewards?: (boolean|null);
    }

    /** Represents an OpenFunction. */
    class OpenFunction implements IOpenFunction {

        /**
         * Constructs a new OpenFunction.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IOpenFunction);

        /** OpenFunction name. */
        public name: number;

        /** OpenFunction isOpen. */
        public isOpen: boolean;

        /** OpenFunction isReceivedRewards. */
        public isReceivedRewards: boolean;

        /**
         * Encodes the specified OpenFunction message. Does not implicitly {@link proto.OpenFunction.verify|verify} messages.
         * @param m OpenFunction message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IOpenFunction, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an OpenFunction message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns OpenFunction
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.OpenFunction;
    }

    /** Properties of a Msg_GetOpenFunctionsReq. */
    interface IMsg_GetOpenFunctionsReq {
    }

    /** Represents a Msg_GetOpenFunctionsReq. */
    class Msg_GetOpenFunctionsReq implements IMsg_GetOpenFunctionsReq {

        /**
         * Constructs a new Msg_GetOpenFunctionsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetOpenFunctionsReq);

        /**
         * Encodes the specified Msg_GetOpenFunctionsReq message. Does not implicitly {@link proto.Msg_GetOpenFunctionsReq.verify|verify} messages.
         * @param m Msg_GetOpenFunctionsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetOpenFunctionsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetOpenFunctionsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetOpenFunctionsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetOpenFunctionsReq;
    }

    /** Properties of a Msg_GetOpenFunctionsRsp. */
    interface IMsg_GetOpenFunctionsRsp {

        /** Msg_GetOpenFunctionsRsp openFunctions */
        openFunctions?: (proto.IOpenFunction[]|null);
    }

    /** Represents a Msg_GetOpenFunctionsRsp. */
    class Msg_GetOpenFunctionsRsp implements IMsg_GetOpenFunctionsRsp {

        /**
         * Constructs a new Msg_GetOpenFunctionsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetOpenFunctionsRsp);

        /** Msg_GetOpenFunctionsRsp openFunctions. */
        public openFunctions: proto.IOpenFunction[];

        /**
         * Encodes the specified Msg_GetOpenFunctionsRsp message. Does not implicitly {@link proto.Msg_GetOpenFunctionsRsp.verify|verify} messages.
         * @param m Msg_GetOpenFunctionsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetOpenFunctionsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetOpenFunctionsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetOpenFunctionsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetOpenFunctionsRsp;
    }

    /** Properties of a Msg_OpenFunctionChangePush. */
    interface IMsg_OpenFunctionChangePush {

        /** Msg_OpenFunctionChangePush openFunctions */
        openFunctions?: (proto.IOpenFunction[]|null);
    }

    /** Represents a Msg_OpenFunctionChangePush. */
    class Msg_OpenFunctionChangePush implements IMsg_OpenFunctionChangePush {

        /**
         * Constructs a new Msg_OpenFunctionChangePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_OpenFunctionChangePush);

        /** Msg_OpenFunctionChangePush openFunctions. */
        public openFunctions: proto.IOpenFunction[];

        /**
         * Encodes the specified Msg_OpenFunctionChangePush message. Does not implicitly {@link proto.Msg_OpenFunctionChangePush.verify|verify} messages.
         * @param m Msg_OpenFunctionChangePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_OpenFunctionChangePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_OpenFunctionChangePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_OpenFunctionChangePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_OpenFunctionChangePush;
    }

    /** Properties of a Msg_ReceiveOpenFunctionRewardReq. */
    interface IMsg_ReceiveOpenFunctionRewardReq {

        /** Msg_ReceiveOpenFunctionRewardReq name */
        name?: (number|null);
    }

    /** Represents a Msg_ReceiveOpenFunctionRewardReq. */
    class Msg_ReceiveOpenFunctionRewardReq implements IMsg_ReceiveOpenFunctionRewardReq {

        /**
         * Constructs a new Msg_ReceiveOpenFunctionRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveOpenFunctionRewardReq);

        /** Msg_ReceiveOpenFunctionRewardReq name. */
        public name: number;

        /**
         * Encodes the specified Msg_ReceiveOpenFunctionRewardReq message. Does not implicitly {@link proto.Msg_ReceiveOpenFunctionRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveOpenFunctionRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveOpenFunctionRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveOpenFunctionRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveOpenFunctionRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveOpenFunctionRewardReq;
    }

    /** Properties of a Msg_ReceiveOpenFunctionRewardRsp. */
    interface IMsg_ReceiveOpenFunctionRewardRsp {

        /** Msg_ReceiveOpenFunctionRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveOpenFunctionRewardRsp name */
        name?: (number|null);

        /** Msg_ReceiveOpenFunctionRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveOpenFunctionRewardRsp. */
    class Msg_ReceiveOpenFunctionRewardRsp implements IMsg_ReceiveOpenFunctionRewardRsp {

        /**
         * Constructs a new Msg_ReceiveOpenFunctionRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveOpenFunctionRewardRsp);

        /** Msg_ReceiveOpenFunctionRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveOpenFunctionRewardRsp name. */
        public name: number;

        /** Msg_ReceiveOpenFunctionRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveOpenFunctionRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveOpenFunctionRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveOpenFunctionRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveOpenFunctionRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveOpenFunctionRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveOpenFunctionRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveOpenFunctionRewardRsp;
    }

    /** Properties of an ElixirData. */
    interface IElixirData {

        /** ElixirData id */
        id?: (number|null);

        /** ElixirData count */
        count?: (number|null);
    }

    /** Represents an ElixirData. */
    class ElixirData implements IElixirData {

        /**
         * Constructs a new ElixirData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IElixirData);

        /** ElixirData id. */
        public id: number;

        /** ElixirData count. */
        public count: number;

        /**
         * Encodes the specified ElixirData message. Does not implicitly {@link proto.ElixirData.verify|verify} messages.
         * @param m ElixirData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IElixirData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElixirData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ElixirData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ElixirData;
    }

    /** Properties of an ElixirPbData. */
    interface IElixirPbData {

        /** ElixirPbData data */
        data?: (proto.IElixirData[]|null);
    }

    /** Represents an ElixirPbData. */
    class ElixirPbData implements IElixirPbData {

        /**
         * Constructs a new ElixirPbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IElixirPbData);

        /** ElixirPbData data. */
        public data: proto.IElixirData[];

        /**
         * Encodes the specified ElixirPbData message. Does not implicitly {@link proto.ElixirPbData.verify|verify} messages.
         * @param m ElixirPbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IElixirPbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElixirPbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ElixirPbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ElixirPbData;
    }

    /** Properties of an ElixirItem. */
    interface IElixirItem {

        /** ElixirItem id */
        id?: (number|null);

        /** ElixirItem count */
        count?: (number|null);
    }

    /** Represents an ElixirItem. */
    class ElixirItem implements IElixirItem {

        /**
         * Constructs a new ElixirItem.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IElixirItem);

        /** ElixirItem id. */
        public id: number;

        /** ElixirItem count. */
        public count: number;

        /**
         * Encodes the specified ElixirItem message. Does not implicitly {@link proto.ElixirItem.verify|verify} messages.
         * @param m ElixirItem message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IElixirItem, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ElixirItem message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ElixirItem
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ElixirItem;
    }

    /** Properties of a Msg_UseElixirReq. */
    interface IMsg_UseElixirReq {

        /** Msg_UseElixirReq items */
        items?: (proto.IElixirItem[]|null);
    }

    /** Represents a Msg_UseElixirReq. */
    class Msg_UseElixirReq implements IMsg_UseElixirReq {

        /**
         * Constructs a new Msg_UseElixirReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseElixirReq);

        /** Msg_UseElixirReq items. */
        public items: proto.IElixirItem[];

        /**
         * Encodes the specified Msg_UseElixirReq message. Does not implicitly {@link proto.Msg_UseElixirReq.verify|verify} messages.
         * @param m Msg_UseElixirReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseElixirReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseElixirReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseElixirReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseElixirReq;
    }

    /** Properties of a Msg_UseElixirRsp. */
    interface IMsg_UseElixirRsp {

        /** Msg_UseElixirRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UseElixirRsp data */
        data?: (proto.IElixirData[]|null);
    }

    /** Represents a Msg_UseElixirRsp. */
    class Msg_UseElixirRsp implements IMsg_UseElixirRsp {

        /**
         * Constructs a new Msg_UseElixirRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseElixirRsp);

        /** Msg_UseElixirRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UseElixirRsp data. */
        public data: proto.IElixirData[];

        /**
         * Encodes the specified Msg_UseElixirRsp message. Does not implicitly {@link proto.Msg_UseElixirRsp.verify|verify} messages.
         * @param m Msg_UseElixirRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseElixirRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseElixirRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseElixirRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseElixirRsp;
    }

    /** Properties of a FightAttrData. */
    interface IFightAttrData {

        /** FightAttrData type */
        type?: (number|null);

        /** FightAttrData value */
        value?: (number|Long|null);
    }

    /** Represents a FightAttrData. */
    class FightAttrData implements IFightAttrData {

        /**
         * Constructs a new FightAttrData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightAttrData);

        /** FightAttrData type. */
        public type: number;

        /** FightAttrData value. */
        public value: (number|Long);

        /**
         * Encodes the specified FightAttrData message. Does not implicitly {@link proto.FightAttrData.verify|verify} messages.
         * @param m FightAttrData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightAttrData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightAttrData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightAttrData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightAttrData;
    }

    /** Properties of a HeroFightData. */
    interface IHeroFightData {

        /** HeroFightData id */
        id?: (number|null);

        /** HeroFightData itemId */
        itemId?: (number|null);

        /** HeroFightData star */
        star?: (number|null);

        /** HeroFightData level */
        level?: (number|null);

        /** HeroFightData attrList */
        attrList?: (proto.IFightAttrData[]|null);

        /** HeroFightData skillList */
        skillList?: (number[]|null);
    }

    /** Represents a HeroFightData. */
    class HeroFightData implements IHeroFightData {

        /**
         * Constructs a new HeroFightData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHeroFightData);

        /** HeroFightData id. */
        public id: number;

        /** HeroFightData itemId. */
        public itemId: number;

        /** HeroFightData star. */
        public star: number;

        /** HeroFightData level. */
        public level: number;

        /** HeroFightData attrList. */
        public attrList: proto.IFightAttrData[];

        /** HeroFightData skillList. */
        public skillList: number[];

        /**
         * Encodes the specified HeroFightData message. Does not implicitly {@link proto.HeroFightData.verify|verify} messages.
         * @param m HeroFightData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHeroFightData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroFightData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeroFightData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HeroFightData;
    }

    /** Properties of a BookFightData. */
    interface IBookFightData {

        /** BookFightData id */
        id?: (number|null);

        /** BookFightData star */
        star?: (number|null);

        /** BookFightData level */
        level?: (number|null);
    }

    /** Represents a BookFightData. */
    class BookFightData implements IBookFightData {

        /**
         * Constructs a new BookFightData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBookFightData);

        /** BookFightData id. */
        public id: number;

        /** BookFightData star. */
        public star: number;

        /** BookFightData level. */
        public level: number;

        /**
         * Encodes the specified BookFightData message. Does not implicitly {@link proto.BookFightData.verify|verify} messages.
         * @param m BookFightData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBookFightData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BookFightData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BookFightData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BookFightData;
    }

    /** Properties of a FightInfo. */
    interface IFightInfo {

        /** FightInfo stageId */
        stageId?: (number|null);

        /** FightInfo heroData */
        heroData?: (proto.IHeroFightData[]|null);

        /** FightInfo skillList */
        skillList?: (number[]|null);

        /** FightInfo bufferList */
        bufferList?: (number[]|null);

        /** FightInfo bookList */
        bookList?: (proto.IBookFightData[]|null);
    }

    /** Represents a FightInfo. */
    class FightInfo implements IFightInfo {

        /**
         * Constructs a new FightInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightInfo);

        /** FightInfo stageId. */
        public stageId: number;

        /** FightInfo heroData. */
        public heroData: proto.IHeroFightData[];

        /** FightInfo skillList. */
        public skillList: number[];

        /** FightInfo bufferList. */
        public bufferList: number[];

        /** FightInfo bookList. */
        public bookList: proto.IBookFightData[];

        /**
         * Encodes the specified FightInfo message. Does not implicitly {@link proto.FightInfo.verify|verify} messages.
         * @param m FightInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightInfo;
    }

    /** Properties of a Msg_FightInfoPush. */
    interface IMsg_FightInfoPush {

        /** Msg_FightInfoPush info */
        info?: (proto.IFightInfo|null);
    }

    /** Represents a Msg_FightInfoPush. */
    class Msg_FightInfoPush implements IMsg_FightInfoPush {

        /**
         * Constructs a new Msg_FightInfoPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FightInfoPush);

        /** Msg_FightInfoPush info. */
        public info?: (proto.IFightInfo|null);

        /**
         * Encodes the specified Msg_FightInfoPush message. Does not implicitly {@link proto.Msg_FightInfoPush.verify|verify} messages.
         * @param m Msg_FightInfoPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FightInfoPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FightInfoPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FightInfoPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FightInfoPush;
    }

    /** SysMailType enum. */
    enum SysMailType {
        Gm = 0,
        Function = 1
    }

    /** Properties of a Mail. */
    interface IMail {

        /** Mail id */
        id?: (number|Long|null);

        /** Mail Title */
        Title?: (string|null);

        /** Mail Sender */
        Sender?: (string|null);

        /** Mail Content */
        Content?: (string|null);

        /** Mail Rewards */
        Rewards?: (proto.IItem[]|null);

        /** Mail IsRewardsReceived */
        IsRewardsReceived?: (boolean|null);

        /** Mail CreatedAt */
        CreatedAt?: (number|Long|null);

        /** Mail ExpireAt */
        ExpireAt?: (number|Long|null);

        /** Mail Type */
        Type?: (proto.SysMailType|null);
    }

    /** Represents a Mail. */
    class Mail implements IMail {

        /**
         * Constructs a new Mail.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMail);

        /** Mail id. */
        public id: (number|Long);

        /** Mail Title. */
        public Title: string;

        /** Mail Sender. */
        public Sender: string;

        /** Mail Content. */
        public Content: string;

        /** Mail Rewards. */
        public Rewards: proto.IItem[];

        /** Mail IsRewardsReceived. */
        public IsRewardsReceived: boolean;

        /** Mail CreatedAt. */
        public CreatedAt: (number|Long);

        /** Mail ExpireAt. */
        public ExpireAt: (number|Long);

        /** Mail Type. */
        public Type: proto.SysMailType;

        /**
         * Encodes the specified Mail message. Does not implicitly {@link proto.Mail.verify|verify} messages.
         * @param m Mail message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMail, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mail message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Mail
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Mail;
    }

    /** Properties of a Msg_GetMailsReq. */
    interface IMsg_GetMailsReq {
    }

    /** Represents a Msg_GetMailsReq. */
    class Msg_GetMailsReq implements IMsg_GetMailsReq {

        /**
         * Constructs a new Msg_GetMailsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMailsReq);

        /**
         * Encodes the specified Msg_GetMailsReq message. Does not implicitly {@link proto.Msg_GetMailsReq.verify|verify} messages.
         * @param m Msg_GetMailsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMailsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMailsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMailsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMailsReq;
    }

    /** Properties of a Msg_GetMailsRsp. */
    interface IMsg_GetMailsRsp {

        /** Msg_GetMailsRsp mails */
        mails?: (proto.IMail[]|null);
    }

    /** Represents a Msg_GetMailsRsp. */
    class Msg_GetMailsRsp implements IMsg_GetMailsRsp {

        /**
         * Constructs a new Msg_GetMailsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMailsRsp);

        /** Msg_GetMailsRsp mails. */
        public mails: proto.IMail[];

        /**
         * Encodes the specified Msg_GetMailsRsp message. Does not implicitly {@link proto.Msg_GetMailsRsp.verify|verify} messages.
         * @param m Msg_GetMailsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMailsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMailsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMailsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMailsRsp;
    }

    /** Properties of a Msg_ReceiveMailsRewardReq. */
    interface IMsg_ReceiveMailsRewardReq {

        /** Msg_ReceiveMailsRewardReq ids */
        ids?: ((number|Long)[]|null);
    }

    /** Represents a Msg_ReceiveMailsRewardReq. */
    class Msg_ReceiveMailsRewardReq implements IMsg_ReceiveMailsRewardReq {

        /**
         * Constructs a new Msg_ReceiveMailsRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMailsRewardReq);

        /** Msg_ReceiveMailsRewardReq ids. */
        public ids: (number|Long)[];

        /**
         * Encodes the specified Msg_ReceiveMailsRewardReq message. Does not implicitly {@link proto.Msg_ReceiveMailsRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveMailsRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMailsRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMailsRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMailsRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMailsRewardReq;
    }

    /** Properties of a Msg_ReceiveMailsRewardRsp. */
    interface IMsg_ReceiveMailsRewardRsp {

        /** Msg_ReceiveMailsRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveMailsRewardRsp ids */
        ids?: ((number|Long)[]|null);

        /** Msg_ReceiveMailsRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveMailsRewardRsp. */
    class Msg_ReceiveMailsRewardRsp implements IMsg_ReceiveMailsRewardRsp {

        /**
         * Constructs a new Msg_ReceiveMailsRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMailsRewardRsp);

        /** Msg_ReceiveMailsRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveMailsRewardRsp ids. */
        public ids: (number|Long)[];

        /** Msg_ReceiveMailsRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveMailsRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveMailsRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveMailsRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMailsRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMailsRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMailsRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMailsRewardRsp;
    }

    /** Properties of a Msg_DeleteMailsReq. */
    interface IMsg_DeleteMailsReq {

        /** Msg_DeleteMailsReq ids */
        ids?: ((number|Long)[]|null);
    }

    /** Represents a Msg_DeleteMailsReq. */
    class Msg_DeleteMailsReq implements IMsg_DeleteMailsReq {

        /**
         * Constructs a new Msg_DeleteMailsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DeleteMailsReq);

        /** Msg_DeleteMailsReq ids. */
        public ids: (number|Long)[];

        /**
         * Encodes the specified Msg_DeleteMailsReq message. Does not implicitly {@link proto.Msg_DeleteMailsReq.verify|verify} messages.
         * @param m Msg_DeleteMailsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DeleteMailsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DeleteMailsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DeleteMailsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DeleteMailsReq;
    }

    /** Properties of a Msg_DeleteMailsRsp. */
    interface IMsg_DeleteMailsRsp {

        /** Msg_DeleteMailsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DeleteMailsRsp ids */
        ids?: ((number|Long)[]|null);
    }

    /** Represents a Msg_DeleteMailsRsp. */
    class Msg_DeleteMailsRsp implements IMsg_DeleteMailsRsp {

        /**
         * Constructs a new Msg_DeleteMailsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DeleteMailsRsp);

        /** Msg_DeleteMailsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DeleteMailsRsp ids. */
        public ids: (number|Long)[];

        /**
         * Encodes the specified Msg_DeleteMailsRsp message. Does not implicitly {@link proto.Msg_DeleteMailsRsp.verify|verify} messages.
         * @param m Msg_DeleteMailsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DeleteMailsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DeleteMailsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DeleteMailsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DeleteMailsRsp;
    }

    /** Properties of a Msg_NewMailsPush. */
    interface IMsg_NewMailsPush {
    }

    /** Represents a Msg_NewMailsPush. */
    class Msg_NewMailsPush implements IMsg_NewMailsPush {

        /**
         * Constructs a new Msg_NewMailsPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_NewMailsPush);

        /**
         * Encodes the specified Msg_NewMailsPush message. Does not implicitly {@link proto.Msg_NewMailsPush.verify|verify} messages.
         * @param m Msg_NewMailsPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_NewMailsPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_NewMailsPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_NewMailsPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_NewMailsPush;
    }

    /** Properties of a Task. */
    interface ITask {

        /** Task id */
        id?: (number|null);

        /** Task taskTabId */
        taskTabId?: (number|null);

        /** Task progress */
        progress?: (number|null);

        /** Task isReceived */
        isReceived?: (boolean|null);

        /** Task isAdvanceReceived */
        isAdvanceReceived?: (boolean|null);
    }

    /** Represents a Task. */
    class Task implements ITask {

        /**
         * Constructs a new Task.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ITask);

        /** Task id. */
        public id: number;

        /** Task taskTabId. */
        public taskTabId: number;

        /** Task progress. */
        public progress: number;

        /** Task isReceived. */
        public isReceived: boolean;

        /** Task isAdvanceReceived. */
        public isAdvanceReceived: boolean;

        /**
         * Encodes the specified Task message. Does not implicitly {@link proto.Task.verify|verify} messages.
         * @param m Task message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ITask, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Task message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Task
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Task;
    }

    /** Properties of a Msg_GetDailyTasksReq. */
    interface IMsg_GetDailyTasksReq {
    }

    /** Represents a Msg_GetDailyTasksReq. */
    class Msg_GetDailyTasksReq implements IMsg_GetDailyTasksReq {

        /**
         * Constructs a new Msg_GetDailyTasksReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyTasksReq);

        /**
         * Encodes the specified Msg_GetDailyTasksReq message. Does not implicitly {@link proto.Msg_GetDailyTasksReq.verify|verify} messages.
         * @param m Msg_GetDailyTasksReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyTasksReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyTasksReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyTasksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyTasksReq;
    }

    /** Properties of a Msg_GetDailyTasksRsp. */
    interface IMsg_GetDailyTasksRsp {

        /** Msg_GetDailyTasksRsp tasks */
        tasks?: (proto.ITask[]|null);

        /** Msg_GetDailyTasksRsp ReceivedIndexes */
        ReceivedIndexes?: (number[]|null);

        /** Msg_GetDailyTasksRsp TodayChapterId */
        TodayChapterId?: (number|null);
    }

    /** Represents a Msg_GetDailyTasksRsp. */
    class Msg_GetDailyTasksRsp implements IMsg_GetDailyTasksRsp {

        /**
         * Constructs a new Msg_GetDailyTasksRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyTasksRsp);

        /** Msg_GetDailyTasksRsp tasks. */
        public tasks: proto.ITask[];

        /** Msg_GetDailyTasksRsp ReceivedIndexes. */
        public ReceivedIndexes: number[];

        /** Msg_GetDailyTasksRsp TodayChapterId. */
        public TodayChapterId: number;

        /**
         * Encodes the specified Msg_GetDailyTasksRsp message. Does not implicitly {@link proto.Msg_GetDailyTasksRsp.verify|verify} messages.
         * @param m Msg_GetDailyTasksRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyTasksRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyTasksRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyTasksRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyTasksRsp;
    }

    /** Properties of a Msg_ReceiveDailyTaskRewardReq. */
    interface IMsg_ReceiveDailyTaskRewardReq {

        /** Msg_ReceiveDailyTaskRewardReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveDailyTaskRewardReq. */
    class Msg_ReceiveDailyTaskRewardReq implements IMsg_ReceiveDailyTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveDailyTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDailyTaskRewardReq);

        /** Msg_ReceiveDailyTaskRewardReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveDailyTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveDailyTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveDailyTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDailyTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDailyTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDailyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDailyTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveDailyTaskRewardRsp. */
    interface IMsg_ReceiveDailyTaskRewardRsp {

        /** Msg_ReceiveDailyTaskRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveDailyTaskRewardRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveDailyTaskRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveDailyTaskRewardRsp. */
    class Msg_ReceiveDailyTaskRewardRsp implements IMsg_ReceiveDailyTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveDailyTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDailyTaskRewardRsp);

        /** Msg_ReceiveDailyTaskRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveDailyTaskRewardRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveDailyTaskRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveDailyTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveDailyTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveDailyTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDailyTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDailyTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDailyTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDailyTaskRewardRsp;
    }

    /** Properties of a Msg_ReceiveDailyActivityTaskRewardReq. */
    interface IMsg_ReceiveDailyActivityTaskRewardReq {

        /** Msg_ReceiveDailyActivityTaskRewardReq indexes */
        indexes?: (number[]|null);
    }

    /** Represents a Msg_ReceiveDailyActivityTaskRewardReq. */
    class Msg_ReceiveDailyActivityTaskRewardReq implements IMsg_ReceiveDailyActivityTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveDailyActivityTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDailyActivityTaskRewardReq);

        /** Msg_ReceiveDailyActivityTaskRewardReq indexes. */
        public indexes: number[];

        /**
         * Encodes the specified Msg_ReceiveDailyActivityTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveDailyActivityTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveDailyActivityTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDailyActivityTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDailyActivityTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDailyActivityTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDailyActivityTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveDailyActivityTaskRewardRsp. */
    interface IMsg_ReceiveDailyActivityTaskRewardRsp {

        /** Msg_ReceiveDailyActivityTaskRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveDailyActivityTaskRewardRsp indexes */
        indexes?: (number[]|null);

        /** Msg_ReceiveDailyActivityTaskRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveDailyActivityTaskRewardRsp. */
    class Msg_ReceiveDailyActivityTaskRewardRsp implements IMsg_ReceiveDailyActivityTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveDailyActivityTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveDailyActivityTaskRewardRsp);

        /** Msg_ReceiveDailyActivityTaskRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveDailyActivityTaskRewardRsp indexes. */
        public indexes: number[];

        /** Msg_ReceiveDailyActivityTaskRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveDailyActivityTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveDailyActivityTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveDailyActivityTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveDailyActivityTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveDailyActivityTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveDailyActivityTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveDailyActivityTaskRewardRsp;
    }

    /** Properties of a Msg_GetWeeklyTasksReq. */
    interface IMsg_GetWeeklyTasksReq {
    }

    /** Represents a Msg_GetWeeklyTasksReq. */
    class Msg_GetWeeklyTasksReq implements IMsg_GetWeeklyTasksReq {

        /**
         * Constructs a new Msg_GetWeeklyTasksReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetWeeklyTasksReq);

        /**
         * Encodes the specified Msg_GetWeeklyTasksReq message. Does not implicitly {@link proto.Msg_GetWeeklyTasksReq.verify|verify} messages.
         * @param m Msg_GetWeeklyTasksReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetWeeklyTasksReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetWeeklyTasksReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetWeeklyTasksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetWeeklyTasksReq;
    }

    /** Properties of a Msg_GetWeeklyTasksRsp. */
    interface IMsg_GetWeeklyTasksRsp {

        /** Msg_GetWeeklyTasksRsp tasks */
        tasks?: (proto.ITask[]|null);

        /** Msg_GetWeeklyTasksRsp ReceivedIndexes */
        ReceivedIndexes?: (number[]|null);
    }

    /** Represents a Msg_GetWeeklyTasksRsp. */
    class Msg_GetWeeklyTasksRsp implements IMsg_GetWeeklyTasksRsp {

        /**
         * Constructs a new Msg_GetWeeklyTasksRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetWeeklyTasksRsp);

        /** Msg_GetWeeklyTasksRsp tasks. */
        public tasks: proto.ITask[];

        /** Msg_GetWeeklyTasksRsp ReceivedIndexes. */
        public ReceivedIndexes: number[];

        /**
         * Encodes the specified Msg_GetWeeklyTasksRsp message. Does not implicitly {@link proto.Msg_GetWeeklyTasksRsp.verify|verify} messages.
         * @param m Msg_GetWeeklyTasksRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetWeeklyTasksRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetWeeklyTasksRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetWeeklyTasksRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetWeeklyTasksRsp;
    }

    /** Properties of a Msg_ReceiveWeeklyTaskRewardReq. */
    interface IMsg_ReceiveWeeklyTaskRewardReq {

        /** Msg_ReceiveWeeklyTaskRewardReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveWeeklyTaskRewardReq. */
    class Msg_ReceiveWeeklyTaskRewardReq implements IMsg_ReceiveWeeklyTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveWeeklyTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveWeeklyTaskRewardReq);

        /** Msg_ReceiveWeeklyTaskRewardReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveWeeklyTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveWeeklyTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveWeeklyTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveWeeklyTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveWeeklyTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveWeeklyTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveWeeklyTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveWeeklyTaskRewardRsp. */
    interface IMsg_ReceiveWeeklyTaskRewardRsp {

        /** Msg_ReceiveWeeklyTaskRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveWeeklyTaskRewardRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveWeeklyTaskRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveWeeklyTaskRewardRsp. */
    class Msg_ReceiveWeeklyTaskRewardRsp implements IMsg_ReceiveWeeklyTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveWeeklyTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveWeeklyTaskRewardRsp);

        /** Msg_ReceiveWeeklyTaskRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveWeeklyTaskRewardRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveWeeklyTaskRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveWeeklyTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveWeeklyTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveWeeklyTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveWeeklyTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveWeeklyTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveWeeklyTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveWeeklyTaskRewardRsp;
    }

    /** Properties of a Msg_ReceiveWeeklyActivityTaskRewardReq. */
    interface IMsg_ReceiveWeeklyActivityTaskRewardReq {

        /** Msg_ReceiveWeeklyActivityTaskRewardReq indexes */
        indexes?: (number[]|null);
    }

    /** Represents a Msg_ReceiveWeeklyActivityTaskRewardReq. */
    class Msg_ReceiveWeeklyActivityTaskRewardReq implements IMsg_ReceiveWeeklyActivityTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveWeeklyActivityTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveWeeklyActivityTaskRewardReq);

        /** Msg_ReceiveWeeklyActivityTaskRewardReq indexes. */
        public indexes: number[];

        /**
         * Encodes the specified Msg_ReceiveWeeklyActivityTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveWeeklyActivityTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveWeeklyActivityTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveWeeklyActivityTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveWeeklyActivityTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveWeeklyActivityTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveWeeklyActivityTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveWeeklyActivityTaskRewardRsp. */
    interface IMsg_ReceiveWeeklyActivityTaskRewardRsp {

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp indexes */
        indexes?: (number[]|null);

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveWeeklyActivityTaskRewardRsp. */
    class Msg_ReceiveWeeklyActivityTaskRewardRsp implements IMsg_ReceiveWeeklyActivityTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveWeeklyActivityTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveWeeklyActivityTaskRewardRsp);

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp indexes. */
        public indexes: number[];

        /** Msg_ReceiveWeeklyActivityTaskRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveWeeklyActivityTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveWeeklyActivityTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveWeeklyActivityTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveWeeklyActivityTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveWeeklyActivityTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveWeeklyActivityTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveWeeklyActivityTaskRewardRsp;
    }

    /** Properties of a Msg_GetAchievementTasksReq. */
    interface IMsg_GetAchievementTasksReq {
    }

    /** Represents a Msg_GetAchievementTasksReq. */
    class Msg_GetAchievementTasksReq implements IMsg_GetAchievementTasksReq {

        /**
         * Constructs a new Msg_GetAchievementTasksReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAchievementTasksReq);

        /**
         * Encodes the specified Msg_GetAchievementTasksReq message. Does not implicitly {@link proto.Msg_GetAchievementTasksReq.verify|verify} messages.
         * @param m Msg_GetAchievementTasksReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAchievementTasksReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAchievementTasksReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAchievementTasksReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAchievementTasksReq;
    }

    /** Properties of a Msg_GetAchievementTasksRsp. */
    interface IMsg_GetAchievementTasksRsp {

        /** Msg_GetAchievementTasksRsp tasks */
        tasks?: (proto.ITask[]|null);
    }

    /** Represents a Msg_GetAchievementTasksRsp. */
    class Msg_GetAchievementTasksRsp implements IMsg_GetAchievementTasksRsp {

        /**
         * Constructs a new Msg_GetAchievementTasksRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetAchievementTasksRsp);

        /** Msg_GetAchievementTasksRsp tasks. */
        public tasks: proto.ITask[];

        /**
         * Encodes the specified Msg_GetAchievementTasksRsp message. Does not implicitly {@link proto.Msg_GetAchievementTasksRsp.verify|verify} messages.
         * @param m Msg_GetAchievementTasksRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetAchievementTasksRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetAchievementTasksRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetAchievementTasksRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetAchievementTasksRsp;
    }

    /** Properties of a Msg_ReceiveAchievementTaskRewardReq. */
    interface IMsg_ReceiveAchievementTaskRewardReq {

        /** Msg_ReceiveAchievementTaskRewardReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveAchievementTaskRewardReq. */
    class Msg_ReceiveAchievementTaskRewardReq implements IMsg_ReceiveAchievementTaskRewardReq {

        /**
         * Constructs a new Msg_ReceiveAchievementTaskRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveAchievementTaskRewardReq);

        /** Msg_ReceiveAchievementTaskRewardReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveAchievementTaskRewardReq message. Does not implicitly {@link proto.Msg_ReceiveAchievementTaskRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveAchievementTaskRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveAchievementTaskRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveAchievementTaskRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveAchievementTaskRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveAchievementTaskRewardReq;
    }

    /** Properties of a Msg_ReceiveAchievementTaskRewardRsp. */
    interface IMsg_ReceiveAchievementTaskRewardRsp {

        /** Msg_ReceiveAchievementTaskRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveAchievementTaskRewardRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveAchievementTaskRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveAchievementTaskRewardRsp. */
    class Msg_ReceiveAchievementTaskRewardRsp implements IMsg_ReceiveAchievementTaskRewardRsp {

        /**
         * Constructs a new Msg_ReceiveAchievementTaskRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveAchievementTaskRewardRsp);

        /** Msg_ReceiveAchievementTaskRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveAchievementTaskRewardRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveAchievementTaskRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveAchievementTaskRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveAchievementTaskRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveAchievementTaskRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveAchievementTaskRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveAchievementTaskRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveAchievementTaskRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveAchievementTaskRewardRsp;
    }

    /** Properties of an AdvWatchData. */
    interface IAdvWatchData {

        /** AdvWatchData type */
        type?: (number|null);

        /** AdvWatchData count */
        count?: (number|null);
    }

    /** Represents an AdvWatchData. */
    class AdvWatchData implements IAdvWatchData {

        /**
         * Constructs a new AdvWatchData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAdvWatchData);

        /** AdvWatchData type. */
        public type: number;

        /** AdvWatchData count. */
        public count: number;

        /**
         * Encodes the specified AdvWatchData message. Does not implicitly {@link proto.AdvWatchData.verify|verify} messages.
         * @param m AdvWatchData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAdvWatchData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvWatchData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AdvWatchData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AdvWatchData;
    }

    /** Properties of an AdvPbData. */
    interface IAdvPbData {

        /** AdvPbData data */
        data?: (proto.IAdvWatchData[]|null);
    }

    /** Represents an AdvPbData. */
    class AdvPbData implements IAdvPbData {

        /**
         * Constructs a new AdvPbData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IAdvPbData);

        /** AdvPbData data. */
        public data: proto.IAdvWatchData[];

        /**
         * Encodes the specified AdvPbData message. Does not implicitly {@link proto.AdvPbData.verify|verify} messages.
         * @param m AdvPbData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IAdvPbData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an AdvPbData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns AdvPbData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.AdvPbData;
    }

    /** Properties of a Msg_AdvWatchDataPush. */
    interface IMsg_AdvWatchDataPush {

        /** Msg_AdvWatchDataPush data */
        data?: (proto.IAdvWatchData|null);
    }

    /** Represents a Msg_AdvWatchDataPush. */
    class Msg_AdvWatchDataPush implements IMsg_AdvWatchDataPush {

        /**
         * Constructs a new Msg_AdvWatchDataPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AdvWatchDataPush);

        /** Msg_AdvWatchDataPush data. */
        public data?: (proto.IAdvWatchData|null);

        /**
         * Encodes the specified Msg_AdvWatchDataPush message. Does not implicitly {@link proto.Msg_AdvWatchDataPush.verify|verify} messages.
         * @param m Msg_AdvWatchDataPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AdvWatchDataPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AdvWatchDataPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AdvWatchDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AdvWatchDataPush;
    }

    /** Properties of a Msg_GetQuestLogsReq. */
    interface IMsg_GetQuestLogsReq {
    }

    /** Represents a Msg_GetQuestLogsReq. */
    class Msg_GetQuestLogsReq implements IMsg_GetQuestLogsReq {

        /**
         * Constructs a new Msg_GetQuestLogsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetQuestLogsReq);

        /**
         * Encodes the specified Msg_GetQuestLogsReq message. Does not implicitly {@link proto.Msg_GetQuestLogsReq.verify|verify} messages.
         * @param m Msg_GetQuestLogsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetQuestLogsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetQuestLogsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetQuestLogsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetQuestLogsReq;
    }

    /** Properties of a Msg_GetQuestLogsRsp. */
    interface IMsg_GetQuestLogsRsp {

        /** Msg_GetQuestLogsRsp tasks */
        tasks?: (proto.ITask[]|null);

        /** Msg_GetQuestLogsRsp level */
        level?: (number|null);
    }

    /** Represents a Msg_GetQuestLogsRsp. */
    class Msg_GetQuestLogsRsp implements IMsg_GetQuestLogsRsp {

        /**
         * Constructs a new Msg_GetQuestLogsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetQuestLogsRsp);

        /** Msg_GetQuestLogsRsp tasks. */
        public tasks: proto.ITask[];

        /** Msg_GetQuestLogsRsp level. */
        public level: number;

        /**
         * Encodes the specified Msg_GetQuestLogsRsp message. Does not implicitly {@link proto.Msg_GetQuestLogsRsp.verify|verify} messages.
         * @param m Msg_GetQuestLogsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetQuestLogsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetQuestLogsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetQuestLogsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetQuestLogsRsp;
    }

    /** Properties of a Msg_ReceiveQuestLogRewardReq. */
    interface IMsg_ReceiveQuestLogRewardReq {

        /** Msg_ReceiveQuestLogRewardReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveQuestLogRewardReq. */
    class Msg_ReceiveQuestLogRewardReq implements IMsg_ReceiveQuestLogRewardReq {

        /**
         * Constructs a new Msg_ReceiveQuestLogRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveQuestLogRewardReq);

        /** Msg_ReceiveQuestLogRewardReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveQuestLogRewardReq message. Does not implicitly {@link proto.Msg_ReceiveQuestLogRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveQuestLogRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveQuestLogRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveQuestLogRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveQuestLogRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveQuestLogRewardReq;
    }

    /** Properties of a Msg_ReceiveQuestLogRewardRsp. */
    interface IMsg_ReceiveQuestLogRewardRsp {

        /** Msg_ReceiveQuestLogRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveQuestLogRewardRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveQuestLogRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveQuestLogRewardRsp. */
    class Msg_ReceiveQuestLogRewardRsp implements IMsg_ReceiveQuestLogRewardRsp {

        /**
         * Constructs a new Msg_ReceiveQuestLogRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveQuestLogRewardRsp);

        /** Msg_ReceiveQuestLogRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveQuestLogRewardRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveQuestLogRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveQuestLogRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveQuestLogRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveQuestLogRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveQuestLogRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveQuestLogRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveQuestLogRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveQuestLogRewardRsp;
    }

    /** Properties of a Msg_UpQuestLogLevelReq. */
    interface IMsg_UpQuestLogLevelReq {
    }

    /** Represents a Msg_UpQuestLogLevelReq. */
    class Msg_UpQuestLogLevelReq implements IMsg_UpQuestLogLevelReq {

        /**
         * Constructs a new Msg_UpQuestLogLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpQuestLogLevelReq);

        /**
         * Encodes the specified Msg_UpQuestLogLevelReq message. Does not implicitly {@link proto.Msg_UpQuestLogLevelReq.verify|verify} messages.
         * @param m Msg_UpQuestLogLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpQuestLogLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpQuestLogLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpQuestLogLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpQuestLogLevelReq;
    }

    /** Properties of a Msg_UpQuestLogLevelRsp. */
    interface IMsg_UpQuestLogLevelRsp {

        /** Msg_UpQuestLogLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpQuestLogLevelRsp level */
        level?: (number|null);
    }

    /** Represents a Msg_UpQuestLogLevelRsp. */
    class Msg_UpQuestLogLevelRsp implements IMsg_UpQuestLogLevelRsp {

        /**
         * Constructs a new Msg_UpQuestLogLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpQuestLogLevelRsp);

        /** Msg_UpQuestLogLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpQuestLogLevelRsp level. */
        public level: number;

        /**
         * Encodes the specified Msg_UpQuestLogLevelRsp message. Does not implicitly {@link proto.Msg_UpQuestLogLevelRsp.verify|verify} messages.
         * @param m Msg_UpQuestLogLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpQuestLogLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpQuestLogLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpQuestLogLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpQuestLogLevelRsp;
    }

    /** Properties of a Msg_TaskChangePush. */
    interface IMsg_TaskChangePush {

        /** Msg_TaskChangePush addedTasks */
        addedTasks?: (proto.ITask[]|null);

        /** Msg_TaskChangePush removedTasks */
        removedTasks?: (proto.ITask[]|null);

        /** Msg_TaskChangePush finishedTasks */
        finishedTasks?: (proto.ITask[]|null);
    }

    /** Represents a Msg_TaskChangePush. */
    class Msg_TaskChangePush implements IMsg_TaskChangePush {

        /**
         * Constructs a new Msg_TaskChangePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_TaskChangePush);

        /** Msg_TaskChangePush addedTasks. */
        public addedTasks: proto.ITask[];

        /** Msg_TaskChangePush removedTasks. */
        public removedTasks: proto.ITask[];

        /** Msg_TaskChangePush finishedTasks. */
        public finishedTasks: proto.ITask[];

        /**
         * Encodes the specified Msg_TaskChangePush message. Does not implicitly {@link proto.Msg_TaskChangePush.verify|verify} messages.
         * @param m Msg_TaskChangePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_TaskChangePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_TaskChangePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_TaskChangePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_TaskChangePush;
    }

    /** Properties of a Msg_JoinChatChannelReq. */
    interface IMsg_JoinChatChannelReq {

        /** Msg_JoinChatChannelReq channelId */
        channelId?: (number|Long|null);
    }

    /** Represents a Msg_JoinChatChannelReq. */
    class Msg_JoinChatChannelReq implements IMsg_JoinChatChannelReq {

        /**
         * Constructs a new Msg_JoinChatChannelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinChatChannelReq);

        /** Msg_JoinChatChannelReq channelId. */
        public channelId: (number|Long);

        /**
         * Encodes the specified Msg_JoinChatChannelReq message. Does not implicitly {@link proto.Msg_JoinChatChannelReq.verify|verify} messages.
         * @param m Msg_JoinChatChannelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinChatChannelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinChatChannelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinChatChannelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinChatChannelReq;
    }

    /** Properties of a Msg_JoinChatChannelRsp. */
    interface IMsg_JoinChatChannelRsp {

        /** Msg_JoinChatChannelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_JoinChatChannelRsp channelId */
        channelId?: (number|Long|null);
    }

    /** Represents a Msg_JoinChatChannelRsp. */
    class Msg_JoinChatChannelRsp implements IMsg_JoinChatChannelRsp {

        /**
         * Constructs a new Msg_JoinChatChannelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinChatChannelRsp);

        /** Msg_JoinChatChannelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_JoinChatChannelRsp channelId. */
        public channelId: (number|Long);

        /**
         * Encodes the specified Msg_JoinChatChannelRsp message. Does not implicitly {@link proto.Msg_JoinChatChannelRsp.verify|verify} messages.
         * @param m Msg_JoinChatChannelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinChatChannelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinChatChannelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinChatChannelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinChatChannelRsp;
    }

    /** Properties of a Msg_LeaveChatChannelReq. */
    interface IMsg_LeaveChatChannelReq {

        /** Msg_LeaveChatChannelReq channelId */
        channelId?: (number|Long|null);
    }

    /** Represents a Msg_LeaveChatChannelReq. */
    class Msg_LeaveChatChannelReq implements IMsg_LeaveChatChannelReq {

        /**
         * Constructs a new Msg_LeaveChatChannelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LeaveChatChannelReq);

        /** Msg_LeaveChatChannelReq channelId. */
        public channelId: (number|Long);

        /**
         * Encodes the specified Msg_LeaveChatChannelReq message. Does not implicitly {@link proto.Msg_LeaveChatChannelReq.verify|verify} messages.
         * @param m Msg_LeaveChatChannelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LeaveChatChannelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LeaveChatChannelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LeaveChatChannelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LeaveChatChannelReq;
    }

    /** Properties of a Msg_LeaveChatChannelRsp. */
    interface IMsg_LeaveChatChannelRsp {

        /** Msg_LeaveChatChannelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_LeaveChatChannelRsp channelId */
        channelId?: (number|Long|null);
    }

    /** Represents a Msg_LeaveChatChannelRsp. */
    class Msg_LeaveChatChannelRsp implements IMsg_LeaveChatChannelRsp {

        /**
         * Constructs a new Msg_LeaveChatChannelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LeaveChatChannelRsp);

        /** Msg_LeaveChatChannelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_LeaveChatChannelRsp channelId. */
        public channelId: (number|Long);

        /**
         * Encodes the specified Msg_LeaveChatChannelRsp message. Does not implicitly {@link proto.Msg_LeaveChatChannelRsp.verify|verify} messages.
         * @param m Msg_LeaveChatChannelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LeaveChatChannelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LeaveChatChannelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LeaveChatChannelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LeaveChatChannelRsp;
    }

    /** ChatChannelType enum. */
    enum ChatChannelType {
        System = 0,
        World = 1,
        Guild = 2
    }

    /** Properties of a ChatChannel. */
    interface IChatChannel {

        /** ChatChannel Id */
        Id?: (number|Long|null);

        /** ChatChannel type */
        type?: (proto.ChatChannelType|null);
    }

    /** Represents a ChatChannel. */
    class ChatChannel implements IChatChannel {

        /**
         * Constructs a new ChatChannel.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IChatChannel);

        /** ChatChannel Id. */
        public Id: (number|Long);

        /** ChatChannel type. */
        public type: proto.ChatChannelType;

        /**
         * Encodes the specified ChatChannel message. Does not implicitly {@link proto.ChatChannel.verify|verify} messages.
         * @param m ChatChannel message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IChatChannel, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatChannel message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatChannel
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatChannel;
    }

    /** Properties of a Msg_DefaultChatChannelsPush. */
    interface IMsg_DefaultChatChannelsPush {

        /** Msg_DefaultChatChannelsPush channels */
        channels?: (proto.IChatChannel[]|null);
    }

    /** Represents a Msg_DefaultChatChannelsPush. */
    class Msg_DefaultChatChannelsPush implements IMsg_DefaultChatChannelsPush {

        /**
         * Constructs a new Msg_DefaultChatChannelsPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DefaultChatChannelsPush);

        /** Msg_DefaultChatChannelsPush channels. */
        public channels: proto.IChatChannel[];

        /**
         * Encodes the specified Msg_DefaultChatChannelsPush message. Does not implicitly {@link proto.Msg_DefaultChatChannelsPush.verify|verify} messages.
         * @param m Msg_DefaultChatChannelsPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DefaultChatChannelsPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DefaultChatChannelsPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DefaultChatChannelsPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DefaultChatChannelsPush;
    }

    /** Properties of a ChatPlayer. */
    interface IChatPlayer {

        /** ChatPlayer uid */
        uid?: (string|null);

        /** ChatPlayer roleId */
        roleId?: (string|null);

        /** ChatPlayer areaId */
        areaId?: (number|null);

        /** ChatPlayer name */
        name?: (string|null);

        /** ChatPlayer headIcon */
        headIcon?: (number|null);

        /** ChatPlayer headFrame */
        headFrame?: (number|null);

        /** ChatPlayer chatBubble */
        chatBubble?: (number|null);

        /** ChatPlayer level */
        level?: (number|null);

        /** ChatPlayer questLogLevel */
        questLogLevel?: (number|null);

        /** ChatPlayer guildId */
        guildId?: (string|null);

        /** ChatPlayer totalRechargeAmount */
        totalRechargeAmount?: (number|null);

        /** ChatPlayer powerScore */
        powerScore?: (number|null);
    }

    /** Represents a ChatPlayer. */
    class ChatPlayer implements IChatPlayer {

        /**
         * Constructs a new ChatPlayer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IChatPlayer);

        /** ChatPlayer uid. */
        public uid: string;

        /** ChatPlayer roleId. */
        public roleId: string;

        /** ChatPlayer areaId. */
        public areaId: number;

        /** ChatPlayer name. */
        public name: string;

        /** ChatPlayer headIcon. */
        public headIcon: number;

        /** ChatPlayer headFrame. */
        public headFrame: number;

        /** ChatPlayer chatBubble. */
        public chatBubble: number;

        /** ChatPlayer level. */
        public level: number;

        /** ChatPlayer questLogLevel. */
        public questLogLevel: number;

        /** ChatPlayer guildId. */
        public guildId: string;

        /** ChatPlayer totalRechargeAmount. */
        public totalRechargeAmount: number;

        /** ChatPlayer powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified ChatPlayer message. Does not implicitly {@link proto.ChatPlayer.verify|verify} messages.
         * @param m ChatPlayer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IChatPlayer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatPlayer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatPlayer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatPlayer;
    }

    /** Properties of a ChatMessage. */
    interface IChatMessage {

        /** ChatMessage id */
        id?: (number|Long|null);

        /** ChatMessage channelId */
        channelId?: (number|Long|null);

        /** ChatMessage receiverId */
        receiverId?: (string|null);

        /** ChatMessage timestamp */
        timestamp?: (number|Long|null);

        /** ChatMessage sender */
        sender?: (proto.IChatPlayer|null);

        /** ChatMessage normal */
        normal?: (string|null);

        /** ChatMessage notice */
        notice?: (proto.ChatMessage.ISystemNotice|null);

        /** ChatMessage clientCustomNotice */
        clientCustomNotice?: (proto.ChatMessage.IClientCustomNotice|null);
    }

    /** Represents a ChatMessage. */
    class ChatMessage implements IChatMessage {

        /**
         * Constructs a new ChatMessage.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IChatMessage);

        /** ChatMessage id. */
        public id: (number|Long);

        /** ChatMessage channelId. */
        public channelId: (number|Long);

        /** ChatMessage receiverId. */
        public receiverId: string;

        /** ChatMessage timestamp. */
        public timestamp: (number|Long);

        /** ChatMessage sender. */
        public sender?: (proto.IChatPlayer|null);

        /** ChatMessage normal. */
        public normal: string;

        /** ChatMessage notice. */
        public notice?: (proto.ChatMessage.ISystemNotice|null);

        /** ChatMessage clientCustomNotice. */
        public clientCustomNotice?: (proto.ChatMessage.IClientCustomNotice|null);

        /** ChatMessage content. */
        public content?: ("normal"|"notice"|"clientCustomNotice");

        /**
         * Encodes the specified ChatMessage message. Does not implicitly {@link proto.ChatMessage.verify|verify} messages.
         * @param m ChatMessage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IChatMessage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a ChatMessage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ChatMessage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatMessage;
    }

    namespace ChatMessage {

        /** Properties of a SystemNotice. */
        interface ISystemNotice {

            /** SystemNotice noticeId */
            noticeId?: (number|null);

            /** SystemNotice params */
            params?: (string[]|null);
        }

        /** Represents a SystemNotice. */
        class SystemNotice implements ISystemNotice {

            /**
             * Constructs a new SystemNotice.
             * @param [p] Properties to set
             */
            constructor(p?: proto.ChatMessage.ISystemNotice);

            /** SystemNotice noticeId. */
            public noticeId: number;

            /** SystemNotice params. */
            public params: string[];

            /**
             * Encodes the specified SystemNotice message. Does not implicitly {@link proto.ChatMessage.SystemNotice.verify|verify} messages.
             * @param m SystemNotice message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.ChatMessage.ISystemNotice, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a SystemNotice message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns SystemNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatMessage.SystemNotice;
        }

        /** Properties of a ClientCustomNotice. */
        interface IClientCustomNotice {

            /** ClientCustomNotice noticeType */
            noticeType?: (number|null);

            /** ClientCustomNotice content */
            content?: (string|null);

            /** ClientCustomNotice params */
            params?: (string[]|null);
        }

        /** Represents a ClientCustomNotice. */
        class ClientCustomNotice implements IClientCustomNotice {

            /**
             * Constructs a new ClientCustomNotice.
             * @param [p] Properties to set
             */
            constructor(p?: proto.ChatMessage.IClientCustomNotice);

            /** ClientCustomNotice noticeType. */
            public noticeType: number;

            /** ClientCustomNotice content. */
            public content: string;

            /** ClientCustomNotice params. */
            public params: string[];

            /**
             * Encodes the specified ClientCustomNotice message. Does not implicitly {@link proto.ChatMessage.ClientCustomNotice.verify|verify} messages.
             * @param m ClientCustomNotice message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.ChatMessage.IClientCustomNotice, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a ClientCustomNotice message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns ClientCustomNotice
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ChatMessage.ClientCustomNotice;
        }
    }

    /** Properties of a Msg_SendChatMessageReq. */
    interface IMsg_SendChatMessageReq {

        /** Msg_SendChatMessageReq channelId */
        channelId?: (number|Long|null);

        /** Msg_SendChatMessageReq message */
        message?: (proto.IChatMessage|null);
    }

    /** Represents a Msg_SendChatMessageReq. */
    class Msg_SendChatMessageReq implements IMsg_SendChatMessageReq {

        /**
         * Constructs a new Msg_SendChatMessageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SendChatMessageReq);

        /** Msg_SendChatMessageReq channelId. */
        public channelId: (number|Long);

        /** Msg_SendChatMessageReq message. */
        public message?: (proto.IChatMessage|null);

        /**
         * Encodes the specified Msg_SendChatMessageReq message. Does not implicitly {@link proto.Msg_SendChatMessageReq.verify|verify} messages.
         * @param m Msg_SendChatMessageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SendChatMessageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SendChatMessageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SendChatMessageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SendChatMessageReq;
    }

    /** Properties of a Msg_SendChatMessageRsp. */
    interface IMsg_SendChatMessageRsp {

        /** Msg_SendChatMessageRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SendChatMessageRsp message */
        message?: (proto.IChatMessage|null);
    }

    /** Represents a Msg_SendChatMessageRsp. */
    class Msg_SendChatMessageRsp implements IMsg_SendChatMessageRsp {

        /**
         * Constructs a new Msg_SendChatMessageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SendChatMessageRsp);

        /** Msg_SendChatMessageRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SendChatMessageRsp message. */
        public message?: (proto.IChatMessage|null);

        /**
         * Encodes the specified Msg_SendChatMessageRsp message. Does not implicitly {@link proto.Msg_SendChatMessageRsp.verify|verify} messages.
         * @param m Msg_SendChatMessageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SendChatMessageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SendChatMessageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SendChatMessageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SendChatMessageRsp;
    }

    /** Properties of a Msg_ChatMessagePush. */
    interface IMsg_ChatMessagePush {

        /** Msg_ChatMessagePush message */
        message?: (proto.IChatMessage|null);
    }

    /** Represents a Msg_ChatMessagePush. */
    class Msg_ChatMessagePush implements IMsg_ChatMessagePush {

        /**
         * Constructs a new Msg_ChatMessagePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChatMessagePush);

        /** Msg_ChatMessagePush message. */
        public message?: (proto.IChatMessage|null);

        /**
         * Encodes the specified Msg_ChatMessagePush message. Does not implicitly {@link proto.Msg_ChatMessagePush.verify|verify} messages.
         * @param m Msg_ChatMessagePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChatMessagePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChatMessagePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChatMessagePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChatMessagePush;
    }

    /** FriendListType enum. */
    enum FriendListType {
        FriendList = 0,
        ApplyList = 1,
        BlackList = 2
    }

    /** Properties of a Msg_GetFriendSimpleRoleReq. */
    interface IMsg_GetFriendSimpleRoleReq {

        /** Msg_GetFriendSimpleRoleReq type */
        type?: (proto.FriendListType|null);
    }

    /** Represents a Msg_GetFriendSimpleRoleReq. */
    class Msg_GetFriendSimpleRoleReq implements IMsg_GetFriendSimpleRoleReq {

        /**
         * Constructs a new Msg_GetFriendSimpleRoleReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendSimpleRoleReq);

        /** Msg_GetFriendSimpleRoleReq type. */
        public type: proto.FriendListType;

        /**
         * Encodes the specified Msg_GetFriendSimpleRoleReq message. Does not implicitly {@link proto.Msg_GetFriendSimpleRoleReq.verify|verify} messages.
         * @param m Msg_GetFriendSimpleRoleReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendSimpleRoleReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendSimpleRoleReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendSimpleRoleReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendSimpleRoleReq;
    }

    /** Properties of a Msg_GetFriendSimpleRoleRsp. */
    interface IMsg_GetFriendSimpleRoleRsp {

        /** Msg_GetFriendSimpleRoleRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetFriendSimpleRoleRsp type */
        type?: (proto.FriendListType|null);

        /** Msg_GetFriendSimpleRoleRsp list */
        list?: (proto.ISimpleRole[]|null);
    }

    /** Represents a Msg_GetFriendSimpleRoleRsp. */
    class Msg_GetFriendSimpleRoleRsp implements IMsg_GetFriendSimpleRoleRsp {

        /**
         * Constructs a new Msg_GetFriendSimpleRoleRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFriendSimpleRoleRsp);

        /** Msg_GetFriendSimpleRoleRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetFriendSimpleRoleRsp type. */
        public type: proto.FriendListType;

        /** Msg_GetFriendSimpleRoleRsp list. */
        public list: proto.ISimpleRole[];

        /**
         * Encodes the specified Msg_GetFriendSimpleRoleRsp message. Does not implicitly {@link proto.Msg_GetFriendSimpleRoleRsp.verify|verify} messages.
         * @param m Msg_GetFriendSimpleRoleRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFriendSimpleRoleRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFriendSimpleRoleRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFriendSimpleRoleRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFriendSimpleRoleRsp;
    }

    /** Properties of a Msg_AddFriendPush. */
    interface IMsg_AddFriendPush {

        /** Msg_AddFriendPush type */
        type?: (proto.FriendListType|null);

        /** Msg_AddFriendPush role */
        role?: (proto.ISimpleRole|null);
    }

    /** Represents a Msg_AddFriendPush. */
    class Msg_AddFriendPush implements IMsg_AddFriendPush {

        /**
         * Constructs a new Msg_AddFriendPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddFriendPush);

        /** Msg_AddFriendPush type. */
        public type: proto.FriendListType;

        /** Msg_AddFriendPush role. */
        public role?: (proto.ISimpleRole|null);

        /**
         * Encodes the specified Msg_AddFriendPush message. Does not implicitly {@link proto.Msg_AddFriendPush.verify|verify} messages.
         * @param m Msg_AddFriendPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AddFriendPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AddFriendPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AddFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AddFriendPush;
    }

    /** Properties of a Msg_RemoveFriendPush. */
    interface IMsg_RemoveFriendPush {

        /** Msg_RemoveFriendPush type */
        type?: (proto.FriendListType|null);

        /** Msg_RemoveFriendPush roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_RemoveFriendPush. */
    class Msg_RemoveFriendPush implements IMsg_RemoveFriendPush {

        /**
         * Constructs a new Msg_RemoveFriendPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveFriendPush);

        /** Msg_RemoveFriendPush type. */
        public type: proto.FriendListType;

        /** Msg_RemoveFriendPush roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_RemoveFriendPush message. Does not implicitly {@link proto.Msg_RemoveFriendPush.verify|verify} messages.
         * @param m Msg_RemoveFriendPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveFriendPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveFriendPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveFriendPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveFriendPush;
    }

    /** Properties of a Msg_UpdateFriendOnlineTime. */
    interface IMsg_UpdateFriendOnlineTime {

        /** Msg_UpdateFriendOnlineTime roleId */
        roleId?: (string|null);

        /** Msg_UpdateFriendOnlineTime offlineTime */
        offlineTime?: (number|Long|null);
    }

    /** Represents a Msg_UpdateFriendOnlineTime. */
    class Msg_UpdateFriendOnlineTime implements IMsg_UpdateFriendOnlineTime {

        /**
         * Constructs a new Msg_UpdateFriendOnlineTime.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdateFriendOnlineTime);

        /** Msg_UpdateFriendOnlineTime roleId. */
        public roleId: string;

        /** Msg_UpdateFriendOnlineTime offlineTime. */
        public offlineTime: (number|Long);

        /**
         * Encodes the specified Msg_UpdateFriendOnlineTime message. Does not implicitly {@link proto.Msg_UpdateFriendOnlineTime.verify|verify} messages.
         * @param m Msg_UpdateFriendOnlineTime message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdateFriendOnlineTime, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdateFriendOnlineTime message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdateFriendOnlineTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdateFriendOnlineTime;
    }

    /** Properties of a Msg_UpdatFriendPowerScore. */
    interface IMsg_UpdatFriendPowerScore {

        /** Msg_UpdatFriendPowerScore roleId */
        roleId?: (string|null);

        /** Msg_UpdatFriendPowerScore powerScore */
        powerScore?: (number|null);
    }

    /** Represents a Msg_UpdatFriendPowerScore. */
    class Msg_UpdatFriendPowerScore implements IMsg_UpdatFriendPowerScore {

        /**
         * Constructs a new Msg_UpdatFriendPowerScore.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpdatFriendPowerScore);

        /** Msg_UpdatFriendPowerScore roleId. */
        public roleId: string;

        /** Msg_UpdatFriendPowerScore powerScore. */
        public powerScore: number;

        /**
         * Encodes the specified Msg_UpdatFriendPowerScore message. Does not implicitly {@link proto.Msg_UpdatFriendPowerScore.verify|verify} messages.
         * @param m Msg_UpdatFriendPowerScore message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpdatFriendPowerScore, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpdatFriendPowerScore message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpdatFriendPowerScore
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpdatFriendPowerScore;
    }

    /** Properties of a Msg_AddBlacklistReq. */
    interface IMsg_AddBlacklistReq {

        /** Msg_AddBlacklistReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_AddBlacklistReq. */
    class Msg_AddBlacklistReq implements IMsg_AddBlacklistReq {

        /**
         * Constructs a new Msg_AddBlacklistReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddBlacklistReq);

        /** Msg_AddBlacklistReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_AddBlacklistReq message. Does not implicitly {@link proto.Msg_AddBlacklistReq.verify|verify} messages.
         * @param m Msg_AddBlacklistReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AddBlacklistReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AddBlacklistReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AddBlacklistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AddBlacklistReq;
    }

    /** Properties of a Msg_AddBlacklistRsp. */
    interface IMsg_AddBlacklistRsp {

        /** Msg_AddBlacklistRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_AddBlacklistRsp. */
    class Msg_AddBlacklistRsp implements IMsg_AddBlacklistRsp {

        /**
         * Constructs a new Msg_AddBlacklistRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddBlacklistRsp);

        /** Msg_AddBlacklistRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_AddBlacklistRsp message. Does not implicitly {@link proto.Msg_AddBlacklistRsp.verify|verify} messages.
         * @param m Msg_AddBlacklistRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_AddBlacklistRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_AddBlacklistRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_AddBlacklistRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_AddBlacklistRsp;
    }

    /** Properties of a Msg_RemoveBlacklistReq. */
    interface IMsg_RemoveBlacklistReq {

        /** Msg_RemoveBlacklistReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_RemoveBlacklistReq. */
    class Msg_RemoveBlacklistReq implements IMsg_RemoveBlacklistReq {

        /**
         * Constructs a new Msg_RemoveBlacklistReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveBlacklistReq);

        /** Msg_RemoveBlacklistReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_RemoveBlacklistReq message. Does not implicitly {@link proto.Msg_RemoveBlacklistReq.verify|verify} messages.
         * @param m Msg_RemoveBlacklistReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveBlacklistReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveBlacklistReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveBlacklistReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveBlacklistReq;
    }

    /** Properties of a Msg_RemoveBlacklistRsp. */
    interface IMsg_RemoveBlacklistRsp {

        /** Msg_RemoveBlacklistRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_RemoveBlacklistRsp. */
    class Msg_RemoveBlacklistRsp implements IMsg_RemoveBlacklistRsp {

        /**
         * Constructs a new Msg_RemoveBlacklistRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveBlacklistRsp);

        /** Msg_RemoveBlacklistRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_RemoveBlacklistRsp message. Does not implicitly {@link proto.Msg_RemoveBlacklistRsp.verify|verify} messages.
         * @param m Msg_RemoveBlacklistRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveBlacklistRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveBlacklistRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveBlacklistRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveBlacklistRsp;
    }

    /** Properties of a Msg_AddFriendReq. */
    interface IMsg_AddFriendReq {

        /** Msg_AddFriendReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_AddFriendReq. */
    class Msg_AddFriendReq implements IMsg_AddFriendReq {

        /**
         * Constructs a new Msg_AddFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddFriendReq);

        /** Msg_AddFriendReq roleId. */
        public roleId: string;

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

        /** Msg_AddFriendRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_AddFriendRsp roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_AddFriendRsp. */
    class Msg_AddFriendRsp implements IMsg_AddFriendRsp {

        /**
         * Constructs a new Msg_AddFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_AddFriendRsp);

        /** Msg_AddFriendRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_AddFriendRsp roleId. */
        public roleId: string;

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

    /** Properties of a Msg_ConfirmFriendReq. */
    interface IMsg_ConfirmFriendReq {

        /** Msg_ConfirmFriendReq roleId */
        roleId?: (string[]|null);
    }

    /** Represents a Msg_ConfirmFriendReq. */
    class Msg_ConfirmFriendReq implements IMsg_ConfirmFriendReq {

        /**
         * Constructs a new Msg_ConfirmFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ConfirmFriendReq);

        /** Msg_ConfirmFriendReq roleId. */
        public roleId: string[];

        /**
         * Encodes the specified Msg_ConfirmFriendReq message. Does not implicitly {@link proto.Msg_ConfirmFriendReq.verify|verify} messages.
         * @param m Msg_ConfirmFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ConfirmFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ConfirmFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ConfirmFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ConfirmFriendReq;
    }

    /** Properties of a Msg_ConfirmFriendRsp. */
    interface IMsg_ConfirmFriendRsp {

        /** Msg_ConfirmFriendRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_ConfirmFriendRsp. */
    class Msg_ConfirmFriendRsp implements IMsg_ConfirmFriendRsp {

        /**
         * Constructs a new Msg_ConfirmFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ConfirmFriendRsp);

        /** Msg_ConfirmFriendRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_ConfirmFriendRsp message. Does not implicitly {@link proto.Msg_ConfirmFriendRsp.verify|verify} messages.
         * @param m Msg_ConfirmFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ConfirmFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ConfirmFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ConfirmFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ConfirmFriendRsp;
    }

    /** Properties of a Msg_RemoveFriendApplyReq. */
    interface IMsg_RemoveFriendApplyReq {

        /** Msg_RemoveFriendApplyReq roleId */
        roleId?: (string[]|null);
    }

    /** Represents a Msg_RemoveFriendApplyReq. */
    class Msg_RemoveFriendApplyReq implements IMsg_RemoveFriendApplyReq {

        /**
         * Constructs a new Msg_RemoveFriendApplyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveFriendApplyReq);

        /** Msg_RemoveFriendApplyReq roleId. */
        public roleId: string[];

        /**
         * Encodes the specified Msg_RemoveFriendApplyReq message. Does not implicitly {@link proto.Msg_RemoveFriendApplyReq.verify|verify} messages.
         * @param m Msg_RemoveFriendApplyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveFriendApplyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveFriendApplyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveFriendApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveFriendApplyReq;
    }

    /** Properties of a Msg_RemoveFriendApplyRsp. */
    interface IMsg_RemoveFriendApplyRsp {

        /** Msg_RemoveFriendApplyRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_RemoveFriendApplyRsp. */
    class Msg_RemoveFriendApplyRsp implements IMsg_RemoveFriendApplyRsp {

        /**
         * Constructs a new Msg_RemoveFriendApplyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveFriendApplyRsp);

        /** Msg_RemoveFriendApplyRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_RemoveFriendApplyRsp message. Does not implicitly {@link proto.Msg_RemoveFriendApplyRsp.verify|verify} messages.
         * @param m Msg_RemoveFriendApplyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveFriendApplyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveFriendApplyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveFriendApplyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveFriendApplyRsp;
    }

    /** Properties of a Msg_RemoveFriendReq. */
    interface IMsg_RemoveFriendReq {

        /** Msg_RemoveFriendReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_RemoveFriendReq. */
    class Msg_RemoveFriendReq implements IMsg_RemoveFriendReq {

        /**
         * Constructs a new Msg_RemoveFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveFriendReq);

        /** Msg_RemoveFriendReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_RemoveFriendReq message. Does not implicitly {@link proto.Msg_RemoveFriendReq.verify|verify} messages.
         * @param m Msg_RemoveFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveFriendReq;
    }

    /** Properties of a Msg_RemoveFriendRsp. */
    interface IMsg_RemoveFriendRsp {

        /** Msg_RemoveFriendRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_RemoveFriendRsp roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_RemoveFriendRsp. */
    class Msg_RemoveFriendRsp implements IMsg_RemoveFriendRsp {

        /**
         * Constructs a new Msg_RemoveFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RemoveFriendRsp);

        /** Msg_RemoveFriendRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_RemoveFriendRsp roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_RemoveFriendRsp message. Does not implicitly {@link proto.Msg_RemoveFriendRsp.verify|verify} messages.
         * @param m Msg_RemoveFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RemoveFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RemoveFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RemoveFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RemoveFriendRsp;
    }

    /** Properties of a Msg_RecommendFriendReq. */
    interface IMsg_RecommendFriendReq {
    }

    /** Represents a Msg_RecommendFriendReq. */
    class Msg_RecommendFriendReq implements IMsg_RecommendFriendReq {

        /**
         * Constructs a new Msg_RecommendFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecommendFriendReq);

        /**
         * Encodes the specified Msg_RecommendFriendReq message. Does not implicitly {@link proto.Msg_RecommendFriendReq.verify|verify} messages.
         * @param m Msg_RecommendFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecommendFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecommendFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecommendFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecommendFriendReq;
    }

    /** Properties of a Msg_RecommendFriendRsp. */
    interface IMsg_RecommendFriendRsp {

        /** Msg_RecommendFriendRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_RecommendFriendRsp list */
        list?: (proto.ISimpleRole[]|null);
    }

    /** Represents a Msg_RecommendFriendRsp. */
    class Msg_RecommendFriendRsp implements IMsg_RecommendFriendRsp {

        /**
         * Constructs a new Msg_RecommendFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecommendFriendRsp);

        /** Msg_RecommendFriendRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_RecommendFriendRsp list. */
        public list: proto.ISimpleRole[];

        /**
         * Encodes the specified Msg_RecommendFriendRsp message. Does not implicitly {@link proto.Msg_RecommendFriendRsp.verify|verify} messages.
         * @param m Msg_RecommendFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecommendFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecommendFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecommendFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecommendFriendRsp;
    }

    /** Properties of a Msg_FindFriendReq. */
    interface IMsg_FindFriendReq {

        /** Msg_FindFriendReq name */
        name?: (string|null);
    }

    /** Represents a Msg_FindFriendReq. */
    class Msg_FindFriendReq implements IMsg_FindFriendReq {

        /**
         * Constructs a new Msg_FindFriendReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FindFriendReq);

        /** Msg_FindFriendReq name. */
        public name: string;

        /**
         * Encodes the specified Msg_FindFriendReq message. Does not implicitly {@link proto.Msg_FindFriendReq.verify|verify} messages.
         * @param m Msg_FindFriendReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FindFriendReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FindFriendReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FindFriendReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FindFriendReq;
    }

    /** Properties of a Msg_FindFriendRsp. */
    interface IMsg_FindFriendRsp {

        /** Msg_FindFriendRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FindFriendRsp role */
        role?: (proto.ISimpleRole|null);
    }

    /** Represents a Msg_FindFriendRsp. */
    class Msg_FindFriendRsp implements IMsg_FindFriendRsp {

        /**
         * Constructs a new Msg_FindFriendRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FindFriendRsp);

        /** Msg_FindFriendRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FindFriendRsp role. */
        public role?: (proto.ISimpleRole|null);

        /**
         * Encodes the specified Msg_FindFriendRsp message. Does not implicitly {@link proto.Msg_FindFriendRsp.verify|verify} messages.
         * @param m Msg_FindFriendRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FindFriendRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FindFriendRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FindFriendRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FindFriendRsp;
    }

    /** Properties of a Msg_GivingGiftReq. */
    interface IMsg_GivingGiftReq {

        /** Msg_GivingGiftReq roleId */
        roleId?: (string[]|null);
    }

    /** Represents a Msg_GivingGiftReq. */
    class Msg_GivingGiftReq implements IMsg_GivingGiftReq {

        /**
         * Constructs a new Msg_GivingGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GivingGiftReq);

        /** Msg_GivingGiftReq roleId. */
        public roleId: string[];

        /**
         * Encodes the specified Msg_GivingGiftReq message. Does not implicitly {@link proto.Msg_GivingGiftReq.verify|verify} messages.
         * @param m Msg_GivingGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GivingGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GivingGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GivingGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GivingGiftReq;
    }

    /** Properties of a Msg_GivingGiftRsp. */
    interface IMsg_GivingGiftRsp {

        /** Msg_GivingGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GivingGiftRsp roleId */
        roleId?: (string[]|null);
    }

    /** Represents a Msg_GivingGiftRsp. */
    class Msg_GivingGiftRsp implements IMsg_GivingGiftRsp {

        /**
         * Constructs a new Msg_GivingGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GivingGiftRsp);

        /** Msg_GivingGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GivingGiftRsp roleId. */
        public roleId: string[];

        /**
         * Encodes the specified Msg_GivingGiftRsp message. Does not implicitly {@link proto.Msg_GivingGiftRsp.verify|verify} messages.
         * @param m Msg_GivingGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GivingGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GivingGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GivingGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GivingGiftRsp;
    }

    /** Properties of a Msg_RecvGiftReq. */
    interface IMsg_RecvGiftReq {

        /** Msg_RecvGiftReq roleId */
        roleId?: (string[]|null);
    }

    /** Represents a Msg_RecvGiftReq. */
    class Msg_RecvGiftReq implements IMsg_RecvGiftReq {

        /**
         * Constructs a new Msg_RecvGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecvGiftReq);

        /** Msg_RecvGiftReq roleId. */
        public roleId: string[];

        /**
         * Encodes the specified Msg_RecvGiftReq message. Does not implicitly {@link proto.Msg_RecvGiftReq.verify|verify} messages.
         * @param m Msg_RecvGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecvGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecvGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecvGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecvGiftReq;
    }

    /** Properties of a RecvGiftResult. */
    interface IRecvGiftResult {

        /** RecvGiftResult error */
        error?: (proto.ICommonError|null);

        /** RecvGiftResult roleId */
        roleId?: (string|null);
    }

    /** Represents a RecvGiftResult. */
    class RecvGiftResult implements IRecvGiftResult {

        /**
         * Constructs a new RecvGiftResult.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IRecvGiftResult);

        /** RecvGiftResult error. */
        public error?: (proto.ICommonError|null);

        /** RecvGiftResult roleId. */
        public roleId: string;

        /**
         * Encodes the specified RecvGiftResult message. Does not implicitly {@link proto.RecvGiftResult.verify|verify} messages.
         * @param m RecvGiftResult message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IRecvGiftResult, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a RecvGiftResult message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns RecvGiftResult
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.RecvGiftResult;
    }

    /** Properties of a Msg_RecvGiftRsp. */
    interface IMsg_RecvGiftRsp {

        /** Msg_RecvGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_RecvGiftRsp result */
        result?: (proto.IRecvGiftResult[]|null);
    }

    /** Represents a Msg_RecvGiftRsp. */
    class Msg_RecvGiftRsp implements IMsg_RecvGiftRsp {

        /**
         * Constructs a new Msg_RecvGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RecvGiftRsp);

        /** Msg_RecvGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_RecvGiftRsp result. */
        public result: proto.IRecvGiftResult[];

        /**
         * Encodes the specified Msg_RecvGiftRsp message. Does not implicitly {@link proto.Msg_RecvGiftRsp.verify|verify} messages.
         * @param m Msg_RecvGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RecvGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RecvGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RecvGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RecvGiftRsp;
    }

    /** Properties of a Msg_SyncGiftList. */
    interface IMsg_SyncGiftList {

        /** Msg_SyncGiftList givingList */
        givingList?: (string[]|null);

        /** Msg_SyncGiftList recvList */
        recvList?: (string[]|null);

        /** Msg_SyncGiftList giftList */
        giftList?: (string[]|null);
    }

    /** Represents a Msg_SyncGiftList. */
    class Msg_SyncGiftList implements IMsg_SyncGiftList {

        /**
         * Constructs a new Msg_SyncGiftList.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SyncGiftList);

        /** Msg_SyncGiftList givingList. */
        public givingList: string[];

        /** Msg_SyncGiftList recvList. */
        public recvList: string[];

        /** Msg_SyncGiftList giftList. */
        public giftList: string[];

        /**
         * Encodes the specified Msg_SyncGiftList message. Does not implicitly {@link proto.Msg_SyncGiftList.verify|verify} messages.
         * @param m Msg_SyncGiftList message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SyncGiftList, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SyncGiftList message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SyncGiftList
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SyncGiftList;
    }

    /** Properties of a Msg_GiftPush. */
    interface IMsg_GiftPush {

        /** Msg_GiftPush roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_GiftPush. */
    class Msg_GiftPush implements IMsg_GiftPush {

        /**
         * Constructs a new Msg_GiftPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GiftPush);

        /** Msg_GiftPush roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_GiftPush message. Does not implicitly {@link proto.Msg_GiftPush.verify|verify} messages.
         * @param m Msg_GiftPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GiftPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GiftPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GiftPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GiftPush;
    }

    /** Properties of a Msg_UseRedeemCodeReq. */
    interface IMsg_UseRedeemCodeReq {

        /** Msg_UseRedeemCodeReq code */
        code?: (string|null);
    }

    /** Represents a Msg_UseRedeemCodeReq. */
    class Msg_UseRedeemCodeReq implements IMsg_UseRedeemCodeReq {

        /**
         * Constructs a new Msg_UseRedeemCodeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseRedeemCodeReq);

        /** Msg_UseRedeemCodeReq code. */
        public code: string;

        /**
         * Encodes the specified Msg_UseRedeemCodeReq message. Does not implicitly {@link proto.Msg_UseRedeemCodeReq.verify|verify} messages.
         * @param m Msg_UseRedeemCodeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseRedeemCodeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseRedeemCodeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseRedeemCodeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseRedeemCodeReq;
    }

    /** Properties of a Msg_UseRedeemCodeRsp. */
    interface IMsg_UseRedeemCodeRsp {

        /** Msg_UseRedeemCodeRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UseRedeemCodeRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_UseRedeemCodeRsp. */
    class Msg_UseRedeemCodeRsp implements IMsg_UseRedeemCodeRsp {

        /**
         * Constructs a new Msg_UseRedeemCodeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseRedeemCodeRsp);

        /** Msg_UseRedeemCodeRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UseRedeemCodeRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_UseRedeemCodeRsp message. Does not implicitly {@link proto.Msg_UseRedeemCodeRsp.verify|verify} messages.
         * @param m Msg_UseRedeemCodeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseRedeemCodeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseRedeemCodeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseRedeemCodeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseRedeemCodeRsp;
    }

    /** Properties of a Msg_GetHeroRankReq. */
    interface IMsg_GetHeroRankReq {

        /** Msg_GetHeroRankReq rankId */
        rankId?: (number|null);
    }

    /** Represents a Msg_GetHeroRankReq. */
    class Msg_GetHeroRankReq implements IMsg_GetHeroRankReq {

        /**
         * Constructs a new Msg_GetHeroRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroRankReq);

        /** Msg_GetHeroRankReq rankId. */
        public rankId: number;

        /**
         * Encodes the specified Msg_GetHeroRankReq message. Does not implicitly {@link proto.Msg_GetHeroRankReq.verify|verify} messages.
         * @param m Msg_GetHeroRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroRankReq;
    }

    /** Properties of a Msg_GetHeroRankRsp. */
    interface IMsg_GetHeroRankRsp {

        /** Msg_GetHeroRankRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetHeroRankRsp rankId */
        rankId?: (number|null);

        /** Msg_GetHeroRankRsp ranking */
        ranking?: (number|null);

        /** Msg_GetHeroRankRsp rankList */
        rankList?: (proto.ISimpleHero[]|null);

        /** Msg_GetHeroRankRsp selfSimple */
        selfSimple?: (proto.ISimpleHero|null);

        /** Msg_GetHeroRankRsp settleTime */
        settleTime?: (number|Long|null);
    }

    /** Represents a Msg_GetHeroRankRsp. */
    class Msg_GetHeroRankRsp implements IMsg_GetHeroRankRsp {

        /**
         * Constructs a new Msg_GetHeroRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroRankRsp);

        /** Msg_GetHeroRankRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetHeroRankRsp rankId. */
        public rankId: number;

        /** Msg_GetHeroRankRsp ranking. */
        public ranking: number;

        /** Msg_GetHeroRankRsp rankList. */
        public rankList: proto.ISimpleHero[];

        /** Msg_GetHeroRankRsp selfSimple. */
        public selfSimple?: (proto.ISimpleHero|null);

        /** Msg_GetHeroRankRsp settleTime. */
        public settleTime: (number|Long);

        /**
         * Encodes the specified Msg_GetHeroRankRsp message. Does not implicitly {@link proto.Msg_GetHeroRankRsp.verify|verify} messages.
         * @param m Msg_GetHeroRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroRankRsp;
    }

    /** Properties of a SimpleRank. */
    interface ISimpleRank {

        /** SimpleRank simple */
        simple?: (proto.ISimpleRole|null);

        /** SimpleRank score */
        score?: (number|Long|null);
    }

    /** Represents a SimpleRank. */
    class SimpleRank implements ISimpleRank {

        /**
         * Constructs a new SimpleRank.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleRank);

        /** SimpleRank simple. */
        public simple?: (proto.ISimpleRole|null);

        /** SimpleRank score. */
        public score: (number|Long);

        /**
         * Encodes the specified SimpleRank message. Does not implicitly {@link proto.SimpleRank.verify|verify} messages.
         * @param m SimpleRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleRank;
    }

    /** Properties of a Msg_GetRankReq. */
    interface IMsg_GetRankReq {

        /** Msg_GetRankReq rankId */
        rankId?: (number|null);
    }

    /** Represents a Msg_GetRankReq. */
    class Msg_GetRankReq implements IMsg_GetRankReq {

        /**
         * Constructs a new Msg_GetRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankReq);

        /** Msg_GetRankReq rankId. */
        public rankId: number;

        /**
         * Encodes the specified Msg_GetRankReq message. Does not implicitly {@link proto.Msg_GetRankReq.verify|verify} messages.
         * @param m Msg_GetRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankReq;
    }

    /** Properties of a Msg_GetRankRsp. */
    interface IMsg_GetRankRsp {

        /** Msg_GetRankRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetRankRsp rankId */
        rankId?: (number|null);

        /** Msg_GetRankRsp ranking */
        ranking?: (number|null);

        /** Msg_GetRankRsp rankList */
        rankList?: (proto.ISimpleRank[]|null);

        /** Msg_GetRankRsp selfSimple */
        selfSimple?: (proto.ISimpleRank|null);

        /** Msg_GetRankRsp settleTime */
        settleTime?: (number|Long|null);
    }

    /** Represents a Msg_GetRankRsp. */
    class Msg_GetRankRsp implements IMsg_GetRankRsp {

        /**
         * Constructs a new Msg_GetRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRankRsp);

        /** Msg_GetRankRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetRankRsp rankId. */
        public rankId: number;

        /** Msg_GetRankRsp ranking. */
        public ranking: number;

        /** Msg_GetRankRsp rankList. */
        public rankList: proto.ISimpleRank[];

        /** Msg_GetRankRsp selfSimple. */
        public selfSimple?: (proto.ISimpleRank|null);

        /** Msg_GetRankRsp settleTime. */
        public settleTime: (number|Long);

        /**
         * Encodes the specified Msg_GetRankRsp message. Does not implicitly {@link proto.Msg_GetRankRsp.verify|verify} messages.
         * @param m Msg_GetRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRankRsp;
    }

    /** Properties of a Msg_GetStaminaInfoReq. */
    interface IMsg_GetStaminaInfoReq {
    }

    /** Represents a Msg_GetStaminaInfoReq. */
    class Msg_GetStaminaInfoReq implements IMsg_GetStaminaInfoReq {

        /**
         * Constructs a new Msg_GetStaminaInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetStaminaInfoReq);

        /**
         * Encodes the specified Msg_GetStaminaInfoReq message. Does not implicitly {@link proto.Msg_GetStaminaInfoReq.verify|verify} messages.
         * @param m Msg_GetStaminaInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetStaminaInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetStaminaInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetStaminaInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetStaminaInfoReq;
    }

    /** Properties of a Msg_GetStaminaInfoRsp. */
    interface IMsg_GetStaminaInfoRsp {

        /** Msg_GetStaminaInfoRsp maxStamina */
        maxStamina?: (number|null);

        /** Msg_GetStaminaInfoRsp lastRecoverTime */
        lastRecoverTime?: (number|Long|null);

        /** Msg_GetStaminaInfoRsp remainBuyTimesMap */
        remainBuyTimesMap?: ({ [k: string]: number }|null);
    }

    /** Represents a Msg_GetStaminaInfoRsp. */
    class Msg_GetStaminaInfoRsp implements IMsg_GetStaminaInfoRsp {

        /**
         * Constructs a new Msg_GetStaminaInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetStaminaInfoRsp);

        /** Msg_GetStaminaInfoRsp maxStamina. */
        public maxStamina: number;

        /** Msg_GetStaminaInfoRsp lastRecoverTime. */
        public lastRecoverTime: (number|Long);

        /** Msg_GetStaminaInfoRsp remainBuyTimesMap. */
        public remainBuyTimesMap: { [k: string]: number };

        /**
         * Encodes the specified Msg_GetStaminaInfoRsp message. Does not implicitly {@link proto.Msg_GetStaminaInfoRsp.verify|verify} messages.
         * @param m Msg_GetStaminaInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetStaminaInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetStaminaInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetStaminaInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetStaminaInfoRsp;
    }

    /** Properties of a Msg_BuyStaminaReq. */
    interface IMsg_BuyStaminaReq {

        /** Msg_BuyStaminaReq type */
        type?: (number|null);

        /** Msg_BuyStaminaReq num */
        num?: (number|null);
    }

    /** Represents a Msg_BuyStaminaReq. */
    class Msg_BuyStaminaReq implements IMsg_BuyStaminaReq {

        /**
         * Constructs a new Msg_BuyStaminaReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyStaminaReq);

        /** Msg_BuyStaminaReq type. */
        public type: number;

        /** Msg_BuyStaminaReq num. */
        public num: number;

        /**
         * Encodes the specified Msg_BuyStaminaReq message. Does not implicitly {@link proto.Msg_BuyStaminaReq.verify|verify} messages.
         * @param m Msg_BuyStaminaReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyStaminaReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyStaminaReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyStaminaReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyStaminaReq;
    }

    /** Properties of a Msg_BuyStaminaRsp. */
    interface IMsg_BuyStaminaRsp {

        /** Msg_BuyStaminaRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyStaminaRsp type */
        type?: (number|null);

        /** Msg_BuyStaminaRsp remainBuyTimes */
        remainBuyTimes?: (number|null);

        /** Msg_BuyStaminaRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyStaminaRsp. */
    class Msg_BuyStaminaRsp implements IMsg_BuyStaminaRsp {

        /**
         * Constructs a new Msg_BuyStaminaRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyStaminaRsp);

        /** Msg_BuyStaminaRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyStaminaRsp type. */
        public type: number;

        /** Msg_BuyStaminaRsp remainBuyTimes. */
        public remainBuyTimes: number;

        /** Msg_BuyStaminaRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyStaminaRsp message. Does not implicitly {@link proto.Msg_BuyStaminaRsp.verify|verify} messages.
         * @param m Msg_BuyStaminaRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyStaminaRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyStaminaRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyStaminaRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyStaminaRsp;
    }

    /** Properties of a Msg_SetAutoDisbandReq. */
    interface IMsg_SetAutoDisbandReq {

        /** Msg_SetAutoDisbandReq autoDisband */
        autoDisband?: (boolean|null);
    }

    /** Represents a Msg_SetAutoDisbandReq. */
    class Msg_SetAutoDisbandReq implements IMsg_SetAutoDisbandReq {

        /**
         * Constructs a new Msg_SetAutoDisbandReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetAutoDisbandReq);

        /** Msg_SetAutoDisbandReq autoDisband. */
        public autoDisband: boolean;

        /**
         * Encodes the specified Msg_SetAutoDisbandReq message. Does not implicitly {@link proto.Msg_SetAutoDisbandReq.verify|verify} messages.
         * @param m Msg_SetAutoDisbandReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetAutoDisbandReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetAutoDisbandReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetAutoDisbandReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetAutoDisbandReq;
    }

    /** Properties of a Msg_SetAutoDisbandRsp. */
    interface IMsg_SetAutoDisbandRsp {

        /** Msg_SetAutoDisbandRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetAutoDisbandRsp autoDisband */
        autoDisband?: (boolean|null);
    }

    /** Represents a Msg_SetAutoDisbandRsp. */
    class Msg_SetAutoDisbandRsp implements IMsg_SetAutoDisbandRsp {

        /**
         * Constructs a new Msg_SetAutoDisbandRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetAutoDisbandRsp);

        /** Msg_SetAutoDisbandRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetAutoDisbandRsp autoDisband. */
        public autoDisband: boolean;

        /**
         * Encodes the specified Msg_SetAutoDisbandRsp message. Does not implicitly {@link proto.Msg_SetAutoDisbandRsp.verify|verify} messages.
         * @param m Msg_SetAutoDisbandRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetAutoDisbandRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetAutoDisbandRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetAutoDisbandRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetAutoDisbandRsp;
    }

    /** Properties of a Msg_GetPatrolInfoReq. */
    interface IMsg_GetPatrolInfoReq {
    }

    /** Represents a Msg_GetPatrolInfoReq. */
    class Msg_GetPatrolInfoReq implements IMsg_GetPatrolInfoReq {

        /**
         * Constructs a new Msg_GetPatrolInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPatrolInfoReq);

        /**
         * Encodes the specified Msg_GetPatrolInfoReq message. Does not implicitly {@link proto.Msg_GetPatrolInfoReq.verify|verify} messages.
         * @param m Msg_GetPatrolInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPatrolInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPatrolInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPatrolInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPatrolInfoReq;
    }

    /** Properties of a Msg_GetPatrolInfoRsp. */
    interface IMsg_GetPatrolInfoRsp {

        /** Msg_GetPatrolInfoRsp startPatrolTime */
        startPatrolTime?: (number|Long|null);

        /** Msg_GetPatrolInfoRsp lastReceiveBaseRewardsTimeMap */
        lastReceiveBaseRewardsTimeMap?: ({ [k: string]: (number|Long) }|null);

        /** Msg_GetPatrolInfoRsp lastReceiveExtraRewardsTimeMap */
        lastReceiveExtraRewardsTimeMap?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a Msg_GetPatrolInfoRsp. */
    class Msg_GetPatrolInfoRsp implements IMsg_GetPatrolInfoRsp {

        /**
         * Constructs a new Msg_GetPatrolInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPatrolInfoRsp);

        /** Msg_GetPatrolInfoRsp startPatrolTime. */
        public startPatrolTime: (number|Long);

        /** Msg_GetPatrolInfoRsp lastReceiveBaseRewardsTimeMap. */
        public lastReceiveBaseRewardsTimeMap: { [k: string]: (number|Long) };

        /** Msg_GetPatrolInfoRsp lastReceiveExtraRewardsTimeMap. */
        public lastReceiveExtraRewardsTimeMap: { [k: string]: (number|Long) };

        /**
         * Encodes the specified Msg_GetPatrolInfoRsp message. Does not implicitly {@link proto.Msg_GetPatrolInfoRsp.verify|verify} messages.
         * @param m Msg_GetPatrolInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPatrolInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPatrolInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPatrolInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPatrolInfoRsp;
    }

    /** Properties of a Msg_ReceivePatrolRewardReq. */
    interface IMsg_ReceivePatrolRewardReq {
    }

    /** Represents a Msg_ReceivePatrolRewardReq. */
    class Msg_ReceivePatrolRewardReq implements IMsg_ReceivePatrolRewardReq {

        /**
         * Constructs a new Msg_ReceivePatrolRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceivePatrolRewardReq);

        /**
         * Encodes the specified Msg_ReceivePatrolRewardReq message. Does not implicitly {@link proto.Msg_ReceivePatrolRewardReq.verify|verify} messages.
         * @param m Msg_ReceivePatrolRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceivePatrolRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceivePatrolRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceivePatrolRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceivePatrolRewardReq;
    }

    /** Properties of a Msg_ReceivePatrolRewardRsp. */
    interface IMsg_ReceivePatrolRewardRsp {

        /** Msg_ReceivePatrolRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceivePatrolRewardRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_ReceivePatrolRewardRsp lastReceiveBaseRewardsTimeMap */
        lastReceiveBaseRewardsTimeMap?: ({ [k: string]: (number|Long) }|null);

        /** Msg_ReceivePatrolRewardRsp lastReceiveExtraRewardsTimeMap */
        lastReceiveExtraRewardsTimeMap?: ({ [k: string]: (number|Long) }|null);
    }

    /** Represents a Msg_ReceivePatrolRewardRsp. */
    class Msg_ReceivePatrolRewardRsp implements IMsg_ReceivePatrolRewardRsp {

        /**
         * Constructs a new Msg_ReceivePatrolRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceivePatrolRewardRsp);

        /** Msg_ReceivePatrolRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceivePatrolRewardRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_ReceivePatrolRewardRsp lastReceiveBaseRewardsTimeMap. */
        public lastReceiveBaseRewardsTimeMap: { [k: string]: (number|Long) };

        /** Msg_ReceivePatrolRewardRsp lastReceiveExtraRewardsTimeMap. */
        public lastReceiveExtraRewardsTimeMap: { [k: string]: (number|Long) };

        /**
         * Encodes the specified Msg_ReceivePatrolRewardRsp message. Does not implicitly {@link proto.Msg_ReceivePatrolRewardRsp.verify|verify} messages.
         * @param m Msg_ReceivePatrolRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceivePatrolRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceivePatrolRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceivePatrolRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceivePatrolRewardRsp;
    }

    /** Properties of a Msg_ReceiveQuickPatrolRewardReq. */
    interface IMsg_ReceiveQuickPatrolRewardReq {

        /** Msg_ReceiveQuickPatrolRewardReq type */
        type?: (number|null);
    }

    /** Represents a Msg_ReceiveQuickPatrolRewardReq. */
    class Msg_ReceiveQuickPatrolRewardReq implements IMsg_ReceiveQuickPatrolRewardReq {

        /**
         * Constructs a new Msg_ReceiveQuickPatrolRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveQuickPatrolRewardReq);

        /** Msg_ReceiveQuickPatrolRewardReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_ReceiveQuickPatrolRewardReq message. Does not implicitly {@link proto.Msg_ReceiveQuickPatrolRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveQuickPatrolRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveQuickPatrolRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveQuickPatrolRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveQuickPatrolRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveQuickPatrolRewardReq;
    }

    /** Properties of a Msg_ReceiveQuickPatrolRewardRsp. */
    interface IMsg_ReceiveQuickPatrolRewardRsp {

        /** Msg_ReceiveQuickPatrolRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveQuickPatrolRewardRsp type */
        type?: (number|null);

        /** Msg_ReceiveQuickPatrolRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveQuickPatrolRewardRsp. */
    class Msg_ReceiveQuickPatrolRewardRsp implements IMsg_ReceiveQuickPatrolRewardRsp {

        /**
         * Constructs a new Msg_ReceiveQuickPatrolRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveQuickPatrolRewardRsp);

        /** Msg_ReceiveQuickPatrolRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveQuickPatrolRewardRsp type. */
        public type: number;

        /** Msg_ReceiveQuickPatrolRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveQuickPatrolRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveQuickPatrolRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveQuickPatrolRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveQuickPatrolRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveQuickPatrolRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveQuickPatrolRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveQuickPatrolRewardRsp;
    }

    /** Properties of a Msg_LimitedRewardPush. */
    interface IMsg_LimitedRewardPush {

        /** Msg_LimitedRewardPush id */
        id?: (number|null);

        /** Msg_LimitedRewardPush reward */
        reward?: (proto.IItem|null);
    }

    /** Represents a Msg_LimitedRewardPush. */
    class Msg_LimitedRewardPush implements IMsg_LimitedRewardPush {

        /**
         * Constructs a new Msg_LimitedRewardPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_LimitedRewardPush);

        /** Msg_LimitedRewardPush id. */
        public id: number;

        /** Msg_LimitedRewardPush reward. */
        public reward?: (proto.IItem|null);

        /**
         * Encodes the specified Msg_LimitedRewardPush message. Does not implicitly {@link proto.Msg_LimitedRewardPush.verify|verify} messages.
         * @param m Msg_LimitedRewardPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_LimitedRewardPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_LimitedRewardPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_LimitedRewardPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_LimitedRewardPush;
    }

    /** Properties of a Msg_GetLimitedRewardReq. */
    interface IMsg_GetLimitedRewardReq {

        /** Msg_GetLimitedRewardReq id */
        id?: (number|null);
    }

    /** Represents a Msg_GetLimitedRewardReq. */
    class Msg_GetLimitedRewardReq implements IMsg_GetLimitedRewardReq {

        /**
         * Constructs a new Msg_GetLimitedRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetLimitedRewardReq);

        /** Msg_GetLimitedRewardReq id. */
        public id: number;

        /**
         * Encodes the specified Msg_GetLimitedRewardReq message. Does not implicitly {@link proto.Msg_GetLimitedRewardReq.verify|verify} messages.
         * @param m Msg_GetLimitedRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetLimitedRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetLimitedRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetLimitedRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetLimitedRewardReq;
    }

    /** Properties of a Msg_GetLimitedRewardRsp. */
    interface IMsg_GetLimitedRewardRsp {

        /** Msg_GetLimitedRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetLimitedRewardRsp reward */
        reward?: (proto.IItem|null);
    }

    /** Represents a Msg_GetLimitedRewardRsp. */
    class Msg_GetLimitedRewardRsp implements IMsg_GetLimitedRewardRsp {

        /**
         * Constructs a new Msg_GetLimitedRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetLimitedRewardRsp);

        /** Msg_GetLimitedRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetLimitedRewardRsp reward. */
        public reward?: (proto.IItem|null);

        /**
         * Encodes the specified Msg_GetLimitedRewardRsp message. Does not implicitly {@link proto.Msg_GetLimitedRewardRsp.verify|verify} messages.
         * @param m Msg_GetLimitedRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetLimitedRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetLimitedRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetLimitedRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetLimitedRewardRsp;
    }

    /** Properties of an ExportStageInfo. */
    interface IExportStageInfo {

        /** ExportStageInfo fightingStageId */
        fightingStageId?: (number|null);

        /** ExportStageInfo clearedStageIds */
        clearedStageIds?: (number[]|null);

        /** ExportStageInfo receivedFirstRewardStageIds */
        receivedFirstRewardStageIds?: (number[]|null);

        /** ExportStageInfo freeSweepTimes */
        freeSweepTimes?: (number|null);

        /** ExportStageInfo notFreeSweepTimes */
        notFreeSweepTimes?: (number|null);
    }

    /** Represents an ExportStageInfo. */
    class ExportStageInfo implements IExportStageInfo {

        /**
         * Constructs a new ExportStageInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IExportStageInfo);

        /** ExportStageInfo fightingStageId. */
        public fightingStageId: number;

        /** ExportStageInfo clearedStageIds. */
        public clearedStageIds: number[];

        /** ExportStageInfo receivedFirstRewardStageIds. */
        public receivedFirstRewardStageIds: number[];

        /** ExportStageInfo freeSweepTimes. */
        public freeSweepTimes: number;

        /** ExportStageInfo notFreeSweepTimes. */
        public notFreeSweepTimes: number;

        /**
         * Encodes the specified ExportStageInfo message. Does not implicitly {@link proto.ExportStageInfo.verify|verify} messages.
         * @param m ExportStageInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IExportStageInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an ExportStageInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns ExportStageInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.ExportStageInfo;
    }

    /** Properties of a Msg_GetExploreStageInfoMapReq. */
    interface IMsg_GetExploreStageInfoMapReq {
    }

    /** Represents a Msg_GetExploreStageInfoMapReq. */
    class Msg_GetExploreStageInfoMapReq implements IMsg_GetExploreStageInfoMapReq {

        /**
         * Constructs a new Msg_GetExploreStageInfoMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetExploreStageInfoMapReq);

        /**
         * Encodes the specified Msg_GetExploreStageInfoMapReq message. Does not implicitly {@link proto.Msg_GetExploreStageInfoMapReq.verify|verify} messages.
         * @param m Msg_GetExploreStageInfoMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetExploreStageInfoMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetExploreStageInfoMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetExploreStageInfoMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetExploreStageInfoMapReq;
    }

    /** Properties of a Msg_GetExploreStageInfoMapRsp. */
    interface IMsg_GetExploreStageInfoMapRsp {

        /** Msg_GetExploreStageInfoMapRsp stageInfoMap */
        stageInfoMap?: ({ [k: string]: proto.IExportStageInfo }|null);
    }

    /** Represents a Msg_GetExploreStageInfoMapRsp. */
    class Msg_GetExploreStageInfoMapRsp implements IMsg_GetExploreStageInfoMapRsp {

        /**
         * Constructs a new Msg_GetExploreStageInfoMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetExploreStageInfoMapRsp);

        /** Msg_GetExploreStageInfoMapRsp stageInfoMap. */
        public stageInfoMap: { [k: string]: proto.IExportStageInfo };

        /**
         * Encodes the specified Msg_GetExploreStageInfoMapRsp message. Does not implicitly {@link proto.Msg_GetExploreStageInfoMapRsp.verify|verify} messages.
         * @param m Msg_GetExploreStageInfoMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetExploreStageInfoMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetExploreStageInfoMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetExploreStageInfoMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetExploreStageInfoMapRsp;
    }

    /** Properties of a Msg_SweepExploreStageReq. */
    interface IMsg_SweepExploreStageReq {

        /** Msg_SweepExploreStageReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_SweepExploreStageReq. */
    class Msg_SweepExploreStageReq implements IMsg_SweepExploreStageReq {

        /**
         * Constructs a new Msg_SweepExploreStageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SweepExploreStageReq);

        /** Msg_SweepExploreStageReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_SweepExploreStageReq message. Does not implicitly {@link proto.Msg_SweepExploreStageReq.verify|verify} messages.
         * @param m Msg_SweepExploreStageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SweepExploreStageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SweepExploreStageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SweepExploreStageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SweepExploreStageReq;
    }

    /** Properties of a Msg_SweepExploreStageRsp. */
    interface IMsg_SweepExploreStageRsp {

        /** Msg_SweepExploreStageRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SweepExploreStageRsp stageId */
        stageId?: (number|null);

        /** Msg_SweepExploreStageRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_SweepExploreStageRsp freeSweepTimes */
        freeSweepTimes?: (number|null);

        /** Msg_SweepExploreStageRsp notFreeSweepTimes */
        notFreeSweepTimes?: (number|null);
    }

    /** Represents a Msg_SweepExploreStageRsp. */
    class Msg_SweepExploreStageRsp implements IMsg_SweepExploreStageRsp {

        /**
         * Constructs a new Msg_SweepExploreStageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SweepExploreStageRsp);

        /** Msg_SweepExploreStageRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SweepExploreStageRsp stageId. */
        public stageId: number;

        /** Msg_SweepExploreStageRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_SweepExploreStageRsp freeSweepTimes. */
        public freeSweepTimes: number;

        /** Msg_SweepExploreStageRsp notFreeSweepTimes. */
        public notFreeSweepTimes: number;

        /**
         * Encodes the specified Msg_SweepExploreStageRsp message. Does not implicitly {@link proto.Msg_SweepExploreStageRsp.verify|verify} messages.
         * @param m Msg_SweepExploreStageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SweepExploreStageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SweepExploreStageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SweepExploreStageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SweepExploreStageRsp;
    }

    /** Properties of a Msg_SweepExploreStageOneClickReq. */
    interface IMsg_SweepExploreStageOneClickReq {

        /** Msg_SweepExploreStageOneClickReq stageId */
        stageId?: (number|null);

        /** Msg_SweepExploreStageOneClickReq buySweepTimes */
        buySweepTimes?: (boolean|null);
    }

    /** Represents a Msg_SweepExploreStageOneClickReq. */
    class Msg_SweepExploreStageOneClickReq implements IMsg_SweepExploreStageOneClickReq {

        /**
         * Constructs a new Msg_SweepExploreStageOneClickReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SweepExploreStageOneClickReq);

        /** Msg_SweepExploreStageOneClickReq stageId. */
        public stageId: number;

        /** Msg_SweepExploreStageOneClickReq buySweepTimes. */
        public buySweepTimes: boolean;

        /**
         * Encodes the specified Msg_SweepExploreStageOneClickReq message. Does not implicitly {@link proto.Msg_SweepExploreStageOneClickReq.verify|verify} messages.
         * @param m Msg_SweepExploreStageOneClickReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SweepExploreStageOneClickReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SweepExploreStageOneClickReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SweepExploreStageOneClickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SweepExploreStageOneClickReq;
    }

    /** Properties of a Msg_SweepExploreStageOneClickRsp. */
    interface IMsg_SweepExploreStageOneClickRsp {

        /** Msg_SweepExploreStageOneClickRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SweepExploreStageOneClickRsp stageId */
        stageId?: (number|null);

        /** Msg_SweepExploreStageOneClickRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_SweepExploreStageOneClickRsp freeSweepTimes */
        freeSweepTimes?: (number|null);

        /** Msg_SweepExploreStageOneClickRsp notFreeSweepTimes */
        notFreeSweepTimes?: (number|null);
    }

    /** Represents a Msg_SweepExploreStageOneClickRsp. */
    class Msg_SweepExploreStageOneClickRsp implements IMsg_SweepExploreStageOneClickRsp {

        /**
         * Constructs a new Msg_SweepExploreStageOneClickRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SweepExploreStageOneClickRsp);

        /** Msg_SweepExploreStageOneClickRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SweepExploreStageOneClickRsp stageId. */
        public stageId: number;

        /** Msg_SweepExploreStageOneClickRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_SweepExploreStageOneClickRsp freeSweepTimes. */
        public freeSweepTimes: number;

        /** Msg_SweepExploreStageOneClickRsp notFreeSweepTimes. */
        public notFreeSweepTimes: number;

        /**
         * Encodes the specified Msg_SweepExploreStageOneClickRsp message. Does not implicitly {@link proto.Msg_SweepExploreStageOneClickRsp.verify|verify} messages.
         * @param m Msg_SweepExploreStageOneClickRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SweepExploreStageOneClickRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SweepExploreStageOneClickRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SweepExploreStageOneClickRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SweepExploreStageOneClickRsp;
    }

    /** Properties of a Msg_ReceiveExploreStageFirstRewardReq. */
    interface IMsg_ReceiveExploreStageFirstRewardReq {

        /** Msg_ReceiveExploreStageFirstRewardReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_ReceiveExploreStageFirstRewardReq. */
    class Msg_ReceiveExploreStageFirstRewardReq implements IMsg_ReceiveExploreStageFirstRewardReq {

        /**
         * Constructs a new Msg_ReceiveExploreStageFirstRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveExploreStageFirstRewardReq);

        /** Msg_ReceiveExploreStageFirstRewardReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_ReceiveExploreStageFirstRewardReq message. Does not implicitly {@link proto.Msg_ReceiveExploreStageFirstRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveExploreStageFirstRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveExploreStageFirstRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveExploreStageFirstRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveExploreStageFirstRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveExploreStageFirstRewardReq;
    }

    /** Properties of a Msg_ReceiveExploreStageFirstRewardRsp. */
    interface IMsg_ReceiveExploreStageFirstRewardRsp {

        /** Msg_ReceiveExploreStageFirstRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveExploreStageFirstRewardRsp stageId */
        stageId?: (number|null);

        /** Msg_ReceiveExploreStageFirstRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveExploreStageFirstRewardRsp. */
    class Msg_ReceiveExploreStageFirstRewardRsp implements IMsg_ReceiveExploreStageFirstRewardRsp {

        /**
         * Constructs a new Msg_ReceiveExploreStageFirstRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveExploreStageFirstRewardRsp);

        /** Msg_ReceiveExploreStageFirstRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveExploreStageFirstRewardRsp stageId. */
        public stageId: number;

        /** Msg_ReceiveExploreStageFirstRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveExploreStageFirstRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveExploreStageFirstRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveExploreStageFirstRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveExploreStageFirstRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveExploreStageFirstRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveExploreStageFirstRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveExploreStageFirstRewardRsp;
    }

    /** Properties of a Msg_DailyRewardPush. */
    interface IMsg_DailyRewardPush {

        /** Msg_DailyRewardPush id */
        id?: (number|null);

        /** Msg_DailyRewardPush closeTime */
        closeTime?: (number|Long|null);

        /** Msg_DailyRewardPush activatedList */
        activatedList?: (number[]|null);

        /** Msg_DailyRewardPush rewardList */
        rewardList?: (number[]|null);
    }

    /** Represents a Msg_DailyRewardPush. */
    class Msg_DailyRewardPush implements IMsg_DailyRewardPush {

        /**
         * Constructs a new Msg_DailyRewardPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyRewardPush);

        /** Msg_DailyRewardPush id. */
        public id: number;

        /** Msg_DailyRewardPush closeTime. */
        public closeTime: (number|Long);

        /** Msg_DailyRewardPush activatedList. */
        public activatedList: number[];

        /** Msg_DailyRewardPush rewardList. */
        public rewardList: number[];

        /**
         * Encodes the specified Msg_DailyRewardPush message. Does not implicitly {@link proto.Msg_DailyRewardPush.verify|verify} messages.
         * @param m Msg_DailyRewardPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyRewardPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyRewardPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyRewardPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyRewardPush;
    }

    /** Properties of a Msg_GetDailyRewardReq. */
    interface IMsg_GetDailyRewardReq {

        /** Msg_GetDailyRewardReq id */
        id?: (number|null);

        /** Msg_GetDailyRewardReq day */
        day?: (number|null);
    }

    /** Represents a Msg_GetDailyRewardReq. */
    class Msg_GetDailyRewardReq implements IMsg_GetDailyRewardReq {

        /**
         * Constructs a new Msg_GetDailyRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyRewardReq);

        /** Msg_GetDailyRewardReq id. */
        public id: number;

        /** Msg_GetDailyRewardReq day. */
        public day: number;

        /**
         * Encodes the specified Msg_GetDailyRewardReq message. Does not implicitly {@link proto.Msg_GetDailyRewardReq.verify|verify} messages.
         * @param m Msg_GetDailyRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyRewardReq;
    }

    /** Properties of a Msg_GetDailyRewardRsp. */
    interface IMsg_GetDailyRewardRsp {

        /** Msg_GetDailyRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetDailyRewardRsp day */
        day?: (number|null);

        /** Msg_GetDailyRewardRsp data */
        data?: (proto.IMsg_DailyRewardPush|null);

        /** Msg_GetDailyRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_GetDailyRewardRsp. */
    class Msg_GetDailyRewardRsp implements IMsg_GetDailyRewardRsp {

        /**
         * Constructs a new Msg_GetDailyRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyRewardRsp);

        /** Msg_GetDailyRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetDailyRewardRsp day. */
        public day: number;

        /** Msg_GetDailyRewardRsp data. */
        public data?: (proto.IMsg_DailyRewardPush|null);

        /** Msg_GetDailyRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_GetDailyRewardRsp message. Does not implicitly {@link proto.Msg_GetDailyRewardRsp.verify|verify} messages.
         * @param m Msg_GetDailyRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyRewardRsp;
    }

    /** Properties of a Msg_UseHeroPieceOneClickReq. */
    interface IMsg_UseHeroPieceOneClickReq {
    }

    /** Represents a Msg_UseHeroPieceOneClickReq. */
    class Msg_UseHeroPieceOneClickReq implements IMsg_UseHeroPieceOneClickReq {

        /**
         * Constructs a new Msg_UseHeroPieceOneClickReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseHeroPieceOneClickReq);

        /**
         * Encodes the specified Msg_UseHeroPieceOneClickReq message. Does not implicitly {@link proto.Msg_UseHeroPieceOneClickReq.verify|verify} messages.
         * @param m Msg_UseHeroPieceOneClickReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseHeroPieceOneClickReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseHeroPieceOneClickReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseHeroPieceOneClickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseHeroPieceOneClickReq;
    }

    /** Properties of a Msg_UseHeroPieceOneClickRsp. */
    interface IMsg_UseHeroPieceOneClickRsp {

        /** Msg_UseHeroPieceOneClickRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UseHeroPieceOneClickRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_UseHeroPieceOneClickRsp. */
    class Msg_UseHeroPieceOneClickRsp implements IMsg_UseHeroPieceOneClickRsp {

        /**
         * Constructs a new Msg_UseHeroPieceOneClickRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UseHeroPieceOneClickRsp);

        /** Msg_UseHeroPieceOneClickRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UseHeroPieceOneClickRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_UseHeroPieceOneClickRsp message. Does not implicitly {@link proto.Msg_UseHeroPieceOneClickRsp.verify|verify} messages.
         * @param m Msg_UseHeroPieceOneClickRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UseHeroPieceOneClickRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UseHeroPieceOneClickRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UseHeroPieceOneClickRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UseHeroPieceOneClickRsp;
    }

    /** Properties of a FixedShopCommodity. */
    interface IFixedShopCommodity {

        /** FixedShopCommodity id */
        id?: (number|null);

        /** FixedShopCommodity boughtCount */
        boughtCount?: (number|null);
    }

    /** Represents a FixedShopCommodity. */
    class FixedShopCommodity implements IFixedShopCommodity {

        /**
         * Constructs a new FixedShopCommodity.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFixedShopCommodity);

        /** FixedShopCommodity id. */
        public id: number;

        /** FixedShopCommodity boughtCount. */
        public boughtCount: number;

        /**
         * Encodes the specified FixedShopCommodity message. Does not implicitly {@link proto.FixedShopCommodity.verify|verify} messages.
         * @param m FixedShopCommodity message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFixedShopCommodity, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedShopCommodity message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FixedShopCommodity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FixedShopCommodity;
    }

    /** Properties of a FixedShopInfo. */
    interface IFixedShopInfo {

        /** FixedShopInfo name */
        name?: (number|null);

        /** FixedShopInfo commodityMap */
        commodityMap?: ({ [k: string]: proto.IFixedShopCommodity }|null);

        /** FixedShopInfo version */
        version?: (number|null);

        /** FixedShopInfo expireTime */
        expireTime?: (number|Long|null);
    }

    /** Represents a FixedShopInfo. */
    class FixedShopInfo implements IFixedShopInfo {

        /**
         * Constructs a new FixedShopInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFixedShopInfo);

        /** FixedShopInfo name. */
        public name: number;

        /** FixedShopInfo commodityMap. */
        public commodityMap: { [k: string]: proto.IFixedShopCommodity };

        /** FixedShopInfo version. */
        public version: number;

        /** FixedShopInfo expireTime. */
        public expireTime: (number|Long);

        /**
         * Encodes the specified FixedShopInfo message. Does not implicitly {@link proto.FixedShopInfo.verify|verify} messages.
         * @param m FixedShopInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFixedShopInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FixedShopInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FixedShopInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FixedShopInfo;
    }

    /** Properties of a Msg_GetFixedShopInfoMapReq. */
    interface IMsg_GetFixedShopInfoMapReq {
    }

    /** Represents a Msg_GetFixedShopInfoMapReq. */
    class Msg_GetFixedShopInfoMapReq implements IMsg_GetFixedShopInfoMapReq {

        /**
         * Constructs a new Msg_GetFixedShopInfoMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFixedShopInfoMapReq);

        /**
         * Encodes the specified Msg_GetFixedShopInfoMapReq message. Does not implicitly {@link proto.Msg_GetFixedShopInfoMapReq.verify|verify} messages.
         * @param m Msg_GetFixedShopInfoMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFixedShopInfoMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFixedShopInfoMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFixedShopInfoMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFixedShopInfoMapReq;
    }

    /** Properties of a Msg_GetFixedShopInfoMapRsp. */
    interface IMsg_GetFixedShopInfoMapRsp {

        /** Msg_GetFixedShopInfoMapRsp shopInfoMap */
        shopInfoMap?: ({ [k: string]: proto.IFixedShopInfo }|null);
    }

    /** Represents a Msg_GetFixedShopInfoMapRsp. */
    class Msg_GetFixedShopInfoMapRsp implements IMsg_GetFixedShopInfoMapRsp {

        /**
         * Constructs a new Msg_GetFixedShopInfoMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFixedShopInfoMapRsp);

        /** Msg_GetFixedShopInfoMapRsp shopInfoMap. */
        public shopInfoMap: { [k: string]: proto.IFixedShopInfo };

        /**
         * Encodes the specified Msg_GetFixedShopInfoMapRsp message. Does not implicitly {@link proto.Msg_GetFixedShopInfoMapRsp.verify|verify} messages.
         * @param m Msg_GetFixedShopInfoMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFixedShopInfoMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFixedShopInfoMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFixedShopInfoMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFixedShopInfoMapRsp;
    }

    /** Properties of a Msg_BuyFixedShopCommodityReq. */
    interface IMsg_BuyFixedShopCommodityReq {

        /** Msg_BuyFixedShopCommodityReq commodityId */
        commodityId?: (number|null);

        /** Msg_BuyFixedShopCommodityReq num */
        num?: (number|null);
    }

    /** Represents a Msg_BuyFixedShopCommodityReq. */
    class Msg_BuyFixedShopCommodityReq implements IMsg_BuyFixedShopCommodityReq {

        /**
         * Constructs a new Msg_BuyFixedShopCommodityReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyFixedShopCommodityReq);

        /** Msg_BuyFixedShopCommodityReq commodityId. */
        public commodityId: number;

        /** Msg_BuyFixedShopCommodityReq num. */
        public num: number;

        /**
         * Encodes the specified Msg_BuyFixedShopCommodityReq message. Does not implicitly {@link proto.Msg_BuyFixedShopCommodityReq.verify|verify} messages.
         * @param m Msg_BuyFixedShopCommodityReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyFixedShopCommodityReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyFixedShopCommodityReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyFixedShopCommodityReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyFixedShopCommodityReq;
    }

    /** Properties of a Msg_BuyFixedShopCommodityRsp. */
    interface IMsg_BuyFixedShopCommodityRsp {

        /** Msg_BuyFixedShopCommodityRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyFixedShopCommodityRsp commodityId */
        commodityId?: (number|null);

        /** Msg_BuyFixedShopCommodityRsp num */
        num?: (number|null);

        /** Msg_BuyFixedShopCommodityRsp boughtCount */
        boughtCount?: (number|null);

        /** Msg_BuyFixedShopCommodityRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyFixedShopCommodityRsp. */
    class Msg_BuyFixedShopCommodityRsp implements IMsg_BuyFixedShopCommodityRsp {

        /**
         * Constructs a new Msg_BuyFixedShopCommodityRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyFixedShopCommodityRsp);

        /** Msg_BuyFixedShopCommodityRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyFixedShopCommodityRsp commodityId. */
        public commodityId: number;

        /** Msg_BuyFixedShopCommodityRsp num. */
        public num: number;

        /** Msg_BuyFixedShopCommodityRsp boughtCount. */
        public boughtCount: number;

        /** Msg_BuyFixedShopCommodityRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyFixedShopCommodityRsp message. Does not implicitly {@link proto.Msg_BuyFixedShopCommodityRsp.verify|verify} messages.
         * @param m Msg_BuyFixedShopCommodityRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyFixedShopCommodityRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyFixedShopCommodityRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyFixedShopCommodityRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyFixedShopCommodityRsp;
    }

    /** Properties of a Msg_StartPayReq. */
    interface IMsg_StartPayReq {

        /** Msg_StartPayReq rechargeId */
        rechargeId?: (number|null);
    }

    /** Represents a Msg_StartPayReq. */
    class Msg_StartPayReq implements IMsg_StartPayReq {

        /**
         * Constructs a new Msg_StartPayReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartPayReq);

        /** Msg_StartPayReq rechargeId. */
        public rechargeId: number;

        /**
         * Encodes the specified Msg_StartPayReq message. Does not implicitly {@link proto.Msg_StartPayReq.verify|verify} messages.
         * @param m Msg_StartPayReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartPayReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartPayReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartPayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartPayReq;
    }

    /** Properties of a Msg_StartPayRsp. */
    interface IMsg_StartPayRsp {

        /** Msg_StartPayRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_StartPayRsp rechargeId */
        rechargeId?: (number|null);

        /** Msg_StartPayRsp orderId */
        orderId?: (string|null);

        /** Msg_StartPayRsp mobile37Sign */
        mobile37Sign?: (string|null);

        /** Msg_StartPayRsp mobile37SignTime */
        mobile37SignTime?: (number|Long|null);
    }

    /** Represents a Msg_StartPayRsp. */
    class Msg_StartPayRsp implements IMsg_StartPayRsp {

        /**
         * Constructs a new Msg_StartPayRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_StartPayRsp);

        /** Msg_StartPayRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_StartPayRsp rechargeId. */
        public rechargeId: number;

        /** Msg_StartPayRsp orderId. */
        public orderId: string;

        /** Msg_StartPayRsp mobile37Sign. */
        public mobile37Sign: string;

        /** Msg_StartPayRsp mobile37SignTime. */
        public mobile37SignTime: (number|Long);

        /**
         * Encodes the specified Msg_StartPayRsp message. Does not implicitly {@link proto.Msg_StartPayRsp.verify|verify} messages.
         * @param m Msg_StartPayRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_StartPayRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_StartPayRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_StartPayRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_StartPayRsp;
    }

    /** Properties of a Msg_EndPayReq. */
    interface IMsg_EndPayReq {

        /** Msg_EndPayReq orderId */
        orderId?: (string|null);
    }

    /** Represents a Msg_EndPayReq. */
    class Msg_EndPayReq implements IMsg_EndPayReq {

        /**
         * Constructs a new Msg_EndPayReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_EndPayReq);

        /** Msg_EndPayReq orderId. */
        public orderId: string;

        /**
         * Encodes the specified Msg_EndPayReq message. Does not implicitly {@link proto.Msg_EndPayReq.verify|verify} messages.
         * @param m Msg_EndPayReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_EndPayReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_EndPayReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_EndPayReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_EndPayReq;
    }

    /** Properties of a Msg_EndPayRsp. */
    interface IMsg_EndPayRsp {

        /** Msg_EndPayRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_EndPayRsp orderId */
        orderId?: (string|null);
    }

    /** Represents a Msg_EndPayRsp. */
    class Msg_EndPayRsp implements IMsg_EndPayRsp {

        /**
         * Constructs a new Msg_EndPayRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_EndPayRsp);

        /** Msg_EndPayRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_EndPayRsp orderId. */
        public orderId: string;

        /**
         * Encodes the specified Msg_EndPayRsp message. Does not implicitly {@link proto.Msg_EndPayRsp.verify|verify} messages.
         * @param m Msg_EndPayRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_EndPayRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_EndPayRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_EndPayRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_EndPayRsp;
    }

    /** Properties of a Msg_PayByVoucherReq. */
    interface IMsg_PayByVoucherReq {

        /** Msg_PayByVoucherReq rechargeId */
        rechargeId?: (number|null);
    }

    /** Represents a Msg_PayByVoucherReq. */
    class Msg_PayByVoucherReq implements IMsg_PayByVoucherReq {

        /**
         * Constructs a new Msg_PayByVoucherReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayByVoucherReq);

        /** Msg_PayByVoucherReq rechargeId. */
        public rechargeId: number;

        /**
         * Encodes the specified Msg_PayByVoucherReq message. Does not implicitly {@link proto.Msg_PayByVoucherReq.verify|verify} messages.
         * @param m Msg_PayByVoucherReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayByVoucherReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayByVoucherReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayByVoucherReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayByVoucherReq;
    }

    /** Properties of a Msg_PayByVoucherRsp. */
    interface IMsg_PayByVoucherRsp {

        /** Msg_PayByVoucherRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_PayByVoucherRsp rechargeId */
        rechargeId?: (number|null);

        /** Msg_PayByVoucherRsp orderId */
        orderId?: (string|null);
    }

    /** Represents a Msg_PayByVoucherRsp. */
    class Msg_PayByVoucherRsp implements IMsg_PayByVoucherRsp {

        /**
         * Constructs a new Msg_PayByVoucherRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PayByVoucherRsp);

        /** Msg_PayByVoucherRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_PayByVoucherRsp rechargeId. */
        public rechargeId: number;

        /** Msg_PayByVoucherRsp orderId. */
        public orderId: string;

        /**
         * Encodes the specified Msg_PayByVoucherRsp message. Does not implicitly {@link proto.Msg_PayByVoucherRsp.verify|verify} messages.
         * @param m Msg_PayByVoucherRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PayByVoucherRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PayByVoucherRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PayByVoucherRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PayByVoucherRsp;
    }

    /** Properties of a Msg_GetPendingPayOrderIdReq. */
    interface IMsg_GetPendingPayOrderIdReq {
    }

    /** Represents a Msg_GetPendingPayOrderIdReq. */
    class Msg_GetPendingPayOrderIdReq implements IMsg_GetPendingPayOrderIdReq {

        /**
         * Constructs a new Msg_GetPendingPayOrderIdReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPendingPayOrderIdReq);

        /**
         * Encodes the specified Msg_GetPendingPayOrderIdReq message. Does not implicitly {@link proto.Msg_GetPendingPayOrderIdReq.verify|verify} messages.
         * @param m Msg_GetPendingPayOrderIdReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPendingPayOrderIdReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPendingPayOrderIdReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPendingPayOrderIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPendingPayOrderIdReq;
    }

    /** Properties of a Msg_GetPendingPayOrderIdRsp. */
    interface IMsg_GetPendingPayOrderIdRsp {

        /** Msg_GetPendingPayOrderIdRsp orderId */
        orderId?: (string|null);
    }

    /** Represents a Msg_GetPendingPayOrderIdRsp. */
    class Msg_GetPendingPayOrderIdRsp implements IMsg_GetPendingPayOrderIdRsp {

        /**
         * Constructs a new Msg_GetPendingPayOrderIdRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPendingPayOrderIdRsp);

        /** Msg_GetPendingPayOrderIdRsp orderId. */
        public orderId: string;

        /**
         * Encodes the specified Msg_GetPendingPayOrderIdRsp message. Does not implicitly {@link proto.Msg_GetPendingPayOrderIdRsp.verify|verify} messages.
         * @param m Msg_GetPendingPayOrderIdRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPendingPayOrderIdRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPendingPayOrderIdRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPendingPayOrderIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPendingPayOrderIdRsp;
    }

    /** Properties of a Msg_ClearPendingPayOrderIdReq. */
    interface IMsg_ClearPendingPayOrderIdReq {
    }

    /** Represents a Msg_ClearPendingPayOrderIdReq. */
    class Msg_ClearPendingPayOrderIdReq implements IMsg_ClearPendingPayOrderIdReq {

        /**
         * Constructs a new Msg_ClearPendingPayOrderIdReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClearPendingPayOrderIdReq);

        /**
         * Encodes the specified Msg_ClearPendingPayOrderIdReq message. Does not implicitly {@link proto.Msg_ClearPendingPayOrderIdReq.verify|verify} messages.
         * @param m Msg_ClearPendingPayOrderIdReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClearPendingPayOrderIdReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClearPendingPayOrderIdReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClearPendingPayOrderIdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClearPendingPayOrderIdReq;
    }

    /** Properties of a Msg_ClearPendingPayOrderIdRsp. */
    interface IMsg_ClearPendingPayOrderIdRsp {

        /** Msg_ClearPendingPayOrderIdRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_ClearPendingPayOrderIdRsp. */
    class Msg_ClearPendingPayOrderIdRsp implements IMsg_ClearPendingPayOrderIdRsp {

        /**
         * Constructs a new Msg_ClearPendingPayOrderIdRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClearPendingPayOrderIdRsp);

        /** Msg_ClearPendingPayOrderIdRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_ClearPendingPayOrderIdRsp message. Does not implicitly {@link proto.Msg_ClearPendingPayOrderIdRsp.verify|verify} messages.
         * @param m Msg_ClearPendingPayOrderIdRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClearPendingPayOrderIdRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClearPendingPayOrderIdRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClearPendingPayOrderIdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClearPendingPayOrderIdRsp;
    }

    /** Properties of a Msg_DeliverGoodsPush. */
    interface IMsg_DeliverGoodsPush {

        /** Msg_DeliverGoodsPush orderId */
        orderId?: (string|null);

        /** Msg_DeliverGoodsPush rechargeId */
        rechargeId?: (number|null);

        /** Msg_DeliverGoodsPush rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_DeliverGoodsPush. */
    class Msg_DeliverGoodsPush implements IMsg_DeliverGoodsPush {

        /**
         * Constructs a new Msg_DeliverGoodsPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DeliverGoodsPush);

        /** Msg_DeliverGoodsPush orderId. */
        public orderId: string;

        /** Msg_DeliverGoodsPush rechargeId. */
        public rechargeId: number;

        /** Msg_DeliverGoodsPush rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_DeliverGoodsPush message. Does not implicitly {@link proto.Msg_DeliverGoodsPush.verify|verify} messages.
         * @param m Msg_DeliverGoodsPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DeliverGoodsPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DeliverGoodsPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DeliverGoodsPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DeliverGoodsPush;
    }

    /** Properties of a Msg_GetPayInfoReq. */
    interface IMsg_GetPayInfoReq {
    }

    /** Represents a Msg_GetPayInfoReq. */
    class Msg_GetPayInfoReq implements IMsg_GetPayInfoReq {

        /**
         * Constructs a new Msg_GetPayInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPayInfoReq);

        /**
         * Encodes the specified Msg_GetPayInfoReq message. Does not implicitly {@link proto.Msg_GetPayInfoReq.verify|verify} messages.
         * @param m Msg_GetPayInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPayInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPayInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPayInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPayInfoReq;
    }

    /** Properties of a Msg_GetPayInfoRsp. */
    interface IMsg_GetPayInfoRsp {

        /** Msg_GetPayInfoRsp pendingOrderId */
        pendingOrderId?: (string|null);

        /** Msg_GetPayInfoRsp buyDiamondsInfo */
        buyDiamondsInfo?: (proto.Msg_GetPayInfoRsp.IBuyDiamondsInfo|null);

        /** Msg_GetPayInfoRsp firstRechargeInfo */
        firstRechargeInfo?: (proto.Msg_GetPayInfoRsp.IFirstRechargeInfo|null);

        /** Msg_GetPayInfoRsp newPlayerDailyGiftInfo */
        newPlayerDailyGiftInfo?: (proto.Msg_GetPayInfoRsp.INewPlayerDailyGiftInfo|null);
    }

    /** Represents a Msg_GetPayInfoRsp. */
    class Msg_GetPayInfoRsp implements IMsg_GetPayInfoRsp {

        /**
         * Constructs a new Msg_GetPayInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPayInfoRsp);

        /** Msg_GetPayInfoRsp pendingOrderId. */
        public pendingOrderId: string;

        /** Msg_GetPayInfoRsp buyDiamondsInfo. */
        public buyDiamondsInfo?: (proto.Msg_GetPayInfoRsp.IBuyDiamondsInfo|null);

        /** Msg_GetPayInfoRsp firstRechargeInfo. */
        public firstRechargeInfo?: (proto.Msg_GetPayInfoRsp.IFirstRechargeInfo|null);

        /** Msg_GetPayInfoRsp newPlayerDailyGiftInfo. */
        public newPlayerDailyGiftInfo?: (proto.Msg_GetPayInfoRsp.INewPlayerDailyGiftInfo|null);

        /**
         * Encodes the specified Msg_GetPayInfoRsp message. Does not implicitly {@link proto.Msg_GetPayInfoRsp.verify|verify} messages.
         * @param m Msg_GetPayInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPayInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPayInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPayInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPayInfoRsp;
    }

    namespace Msg_GetPayInfoRsp {

        /** Properties of a BuyDiamondsInfo. */
        interface IBuyDiamondsInfo {

            /** BuyDiamondsInfo boughtGoodsIds */
            boughtGoodsIds?: (number[]|null);
        }

        /** Represents a BuyDiamondsInfo. */
        class BuyDiamondsInfo implements IBuyDiamondsInfo {

            /**
             * Constructs a new BuyDiamondsInfo.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Msg_GetPayInfoRsp.IBuyDiamondsInfo);

            /** BuyDiamondsInfo boughtGoodsIds. */
            public boughtGoodsIds: number[];

            /**
             * Encodes the specified BuyDiamondsInfo message. Does not implicitly {@link proto.Msg_GetPayInfoRsp.BuyDiamondsInfo.verify|verify} messages.
             * @param m BuyDiamondsInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Msg_GetPayInfoRsp.IBuyDiamondsInfo, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a BuyDiamondsInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns BuyDiamondsInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPayInfoRsp.BuyDiamondsInfo;
        }

        /** Properties of a FirstRechargeInfo. */
        interface IFirstRechargeInfo {

            /** FirstRechargeInfo boughtGoodsIds */
            boughtGoodsIds?: (number[]|null);
        }

        /** Represents a FirstRechargeInfo. */
        class FirstRechargeInfo implements IFirstRechargeInfo {

            /**
             * Constructs a new FirstRechargeInfo.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Msg_GetPayInfoRsp.IFirstRechargeInfo);

            /** FirstRechargeInfo boughtGoodsIds. */
            public boughtGoodsIds: number[];

            /**
             * Encodes the specified FirstRechargeInfo message. Does not implicitly {@link proto.Msg_GetPayInfoRsp.FirstRechargeInfo.verify|verify} messages.
             * @param m FirstRechargeInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Msg_GetPayInfoRsp.IFirstRechargeInfo, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a FirstRechargeInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns FirstRechargeInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPayInfoRsp.FirstRechargeInfo;
        }

        /** Properties of a NewPlayerDailyGiftInfo. */
        interface INewPlayerDailyGiftInfo {

            /** NewPlayerDailyGiftInfo boughtGoodsIds */
            boughtGoodsIds?: (number[]|null);
        }

        /** Represents a NewPlayerDailyGiftInfo. */
        class NewPlayerDailyGiftInfo implements INewPlayerDailyGiftInfo {

            /**
             * Constructs a new NewPlayerDailyGiftInfo.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Msg_GetPayInfoRsp.INewPlayerDailyGiftInfo);

            /** NewPlayerDailyGiftInfo boughtGoodsIds. */
            public boughtGoodsIds: number[];

            /**
             * Encodes the specified NewPlayerDailyGiftInfo message. Does not implicitly {@link proto.Msg_GetPayInfoRsp.NewPlayerDailyGiftInfo.verify|verify} messages.
             * @param m NewPlayerDailyGiftInfo message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Msg_GetPayInfoRsp.INewPlayerDailyGiftInfo, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a NewPlayerDailyGiftInfo message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns NewPlayerDailyGiftInfo
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPayInfoRsp.NewPlayerDailyGiftInfo;
        }
    }

    /** Properties of a Msg_HeroCollectionPush. */
    interface IMsg_HeroCollectionPush {

        /** Msg_HeroCollectionPush closeTime */
        closeTime?: (number|Long|null);

        /** Msg_HeroCollectionPush activatedList */
        activatedList?: (number[]|null);

        /** Msg_HeroCollectionPush rewardList */
        rewardList?: (number[]|null);

        /** Msg_HeroCollectionPush collectionData */
        collectionData?: (proto.Msg_HeroCollectionPush.ICollectionData[]|null);
    }

    /** Represents a Msg_HeroCollectionPush. */
    class Msg_HeroCollectionPush implements IMsg_HeroCollectionPush {

        /**
         * Constructs a new Msg_HeroCollectionPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_HeroCollectionPush);

        /** Msg_HeroCollectionPush closeTime. */
        public closeTime: (number|Long);

        /** Msg_HeroCollectionPush activatedList. */
        public activatedList: number[];

        /** Msg_HeroCollectionPush rewardList. */
        public rewardList: number[];

        /** Msg_HeroCollectionPush collectionData. */
        public collectionData: proto.Msg_HeroCollectionPush.ICollectionData[];

        /**
         * Encodes the specified Msg_HeroCollectionPush message. Does not implicitly {@link proto.Msg_HeroCollectionPush.verify|verify} messages.
         * @param m Msg_HeroCollectionPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_HeroCollectionPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_HeroCollectionPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_HeroCollectionPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HeroCollectionPush;
    }

    namespace Msg_HeroCollectionPush {

        /** Properties of a CollectionData. */
        interface ICollectionData {

            /** CollectionData type */
            type?: (number|null);

            /** CollectionData sum */
            sum?: (number|Long|null);
        }

        /** Represents a CollectionData. */
        class CollectionData implements ICollectionData {

            /**
             * Constructs a new CollectionData.
             * @param [p] Properties to set
             */
            constructor(p?: proto.Msg_HeroCollectionPush.ICollectionData);

            /** CollectionData type. */
            public type: number;

            /** CollectionData sum. */
            public sum: (number|Long);

            /**
             * Encodes the specified CollectionData message. Does not implicitly {@link proto.Msg_HeroCollectionPush.CollectionData.verify|verify} messages.
             * @param m CollectionData message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.Msg_HeroCollectionPush.ICollectionData, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a CollectionData message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns CollectionData
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_HeroCollectionPush.CollectionData;
        }
    }

    /** Properties of a Msg_GetHeroCollectionRewardReq. */
    interface IMsg_GetHeroCollectionRewardReq {

        /** Msg_GetHeroCollectionRewardReq id */
        id?: (number|null);
    }

    /** Represents a Msg_GetHeroCollectionRewardReq. */
    class Msg_GetHeroCollectionRewardReq implements IMsg_GetHeroCollectionRewardReq {

        /**
         * Constructs a new Msg_GetHeroCollectionRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroCollectionRewardReq);

        /** Msg_GetHeroCollectionRewardReq id. */
        public id: number;

        /**
         * Encodes the specified Msg_GetHeroCollectionRewardReq message. Does not implicitly {@link proto.Msg_GetHeroCollectionRewardReq.verify|verify} messages.
         * @param m Msg_GetHeroCollectionRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroCollectionRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroCollectionRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroCollectionRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroCollectionRewardReq;
    }

    /** Properties of a Msg_GetHeroCollectionRewardRsp. */
    interface IMsg_GetHeroCollectionRewardRsp {

        /** Msg_GetHeroCollectionRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetHeroCollectionRewardRsp id */
        id?: (number|null);

        /** Msg_GetHeroCollectionRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_GetHeroCollectionRewardRsp. */
    class Msg_GetHeroCollectionRewardRsp implements IMsg_GetHeroCollectionRewardRsp {

        /**
         * Constructs a new Msg_GetHeroCollectionRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHeroCollectionRewardRsp);

        /** Msg_GetHeroCollectionRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetHeroCollectionRewardRsp id. */
        public id: number;

        /** Msg_GetHeroCollectionRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_GetHeroCollectionRewardRsp message. Does not implicitly {@link proto.Msg_GetHeroCollectionRewardRsp.verify|verify} messages.
         * @param m Msg_GetHeroCollectionRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHeroCollectionRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHeroCollectionRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHeroCollectionRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHeroCollectionRewardRsp;
    }

    /** Properties of a DailyShopSlot. */
    interface IDailyShopSlot {

        /** DailyShopSlot index */
        index?: (number|null);

        /** DailyShopSlot commodityId */
        commodityId?: (number|null);

        /** DailyShopSlot isBought */
        isBought?: (boolean|null);
    }

    /** Represents a DailyShopSlot. */
    class DailyShopSlot implements IDailyShopSlot {

        /**
         * Constructs a new DailyShopSlot.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDailyShopSlot);

        /** DailyShopSlot index. */
        public index: number;

        /** DailyShopSlot commodityId. */
        public commodityId: number;

        /** DailyShopSlot isBought. */
        public isBought: boolean;

        /**
         * Encodes the specified DailyShopSlot message. Does not implicitly {@link proto.DailyShopSlot.verify|verify} messages.
         * @param m DailyShopSlot message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDailyShopSlot, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyShopSlot message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyShopSlot
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DailyShopSlot;
    }

    /** Properties of a Msg_GetDailyShopInfoReq. */
    interface IMsg_GetDailyShopInfoReq {
    }

    /** Represents a Msg_GetDailyShopInfoReq. */
    class Msg_GetDailyShopInfoReq implements IMsg_GetDailyShopInfoReq {

        /**
         * Constructs a new Msg_GetDailyShopInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyShopInfoReq);

        /**
         * Encodes the specified Msg_GetDailyShopInfoReq message. Does not implicitly {@link proto.Msg_GetDailyShopInfoReq.verify|verify} messages.
         * @param m Msg_GetDailyShopInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyShopInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyShopInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyShopInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyShopInfoReq;
    }

    /** Properties of a Msg_GetDailyShopInfoRsp. */
    interface IMsg_GetDailyShopInfoRsp {

        /** Msg_GetDailyShopInfoRsp slots */
        slots?: (proto.IDailyShopSlot[]|null);

        /** Msg_GetDailyShopInfoRsp lastFreeRefreshTime */
        lastFreeRefreshTime?: (number|Long|null);

        /** Msg_GetDailyShopInfoRsp freeRefreshTimes */
        freeRefreshTimes?: (number|null);

        /** Msg_GetDailyShopInfoRsp notFreeRefreshTimes */
        notFreeRefreshTimes?: (number|null);
    }

    /** Represents a Msg_GetDailyShopInfoRsp. */
    class Msg_GetDailyShopInfoRsp implements IMsg_GetDailyShopInfoRsp {

        /**
         * Constructs a new Msg_GetDailyShopInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetDailyShopInfoRsp);

        /** Msg_GetDailyShopInfoRsp slots. */
        public slots: proto.IDailyShopSlot[];

        /** Msg_GetDailyShopInfoRsp lastFreeRefreshTime. */
        public lastFreeRefreshTime: (number|Long);

        /** Msg_GetDailyShopInfoRsp freeRefreshTimes. */
        public freeRefreshTimes: number;

        /** Msg_GetDailyShopInfoRsp notFreeRefreshTimes. */
        public notFreeRefreshTimes: number;

        /**
         * Encodes the specified Msg_GetDailyShopInfoRsp message. Does not implicitly {@link proto.Msg_GetDailyShopInfoRsp.verify|verify} messages.
         * @param m Msg_GetDailyShopInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetDailyShopInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetDailyShopInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetDailyShopInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetDailyShopInfoRsp;
    }

    /** Properties of a Msg_RefreshDailyShopReq. */
    interface IMsg_RefreshDailyShopReq {

        /** Msg_RefreshDailyShopReq type */
        type?: (number|null);
    }

    /** Represents a Msg_RefreshDailyShopReq. */
    class Msg_RefreshDailyShopReq implements IMsg_RefreshDailyShopReq {

        /**
         * Constructs a new Msg_RefreshDailyShopReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshDailyShopReq);

        /** Msg_RefreshDailyShopReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_RefreshDailyShopReq message. Does not implicitly {@link proto.Msg_RefreshDailyShopReq.verify|verify} messages.
         * @param m Msg_RefreshDailyShopReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshDailyShopReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshDailyShopReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshDailyShopReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshDailyShopReq;
    }

    /** Properties of a Msg_RefreshDailyShopRsp. */
    interface IMsg_RefreshDailyShopRsp {

        /** Msg_RefreshDailyShopRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_RefreshDailyShopRsp type */
        type?: (number|null);

        /** Msg_RefreshDailyShopRsp slots */
        slots?: (proto.IDailyShopSlot[]|null);

        /** Msg_RefreshDailyShopRsp lastFreeRefreshTime */
        lastFreeRefreshTime?: (number|Long|null);

        /** Msg_RefreshDailyShopRsp freeRefreshTimes */
        freeRefreshTimes?: (number|null);

        /** Msg_RefreshDailyShopRsp notFreeRefreshTimes */
        notFreeRefreshTimes?: (number|null);
    }

    /** Represents a Msg_RefreshDailyShopRsp. */
    class Msg_RefreshDailyShopRsp implements IMsg_RefreshDailyShopRsp {

        /**
         * Constructs a new Msg_RefreshDailyShopRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RefreshDailyShopRsp);

        /** Msg_RefreshDailyShopRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_RefreshDailyShopRsp type. */
        public type: number;

        /** Msg_RefreshDailyShopRsp slots. */
        public slots: proto.IDailyShopSlot[];

        /** Msg_RefreshDailyShopRsp lastFreeRefreshTime. */
        public lastFreeRefreshTime: (number|Long);

        /** Msg_RefreshDailyShopRsp freeRefreshTimes. */
        public freeRefreshTimes: number;

        /** Msg_RefreshDailyShopRsp notFreeRefreshTimes. */
        public notFreeRefreshTimes: number;

        /**
         * Encodes the specified Msg_RefreshDailyShopRsp message. Does not implicitly {@link proto.Msg_RefreshDailyShopRsp.verify|verify} messages.
         * @param m Msg_RefreshDailyShopRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RefreshDailyShopRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RefreshDailyShopRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RefreshDailyShopRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RefreshDailyShopRsp;
    }

    /** Properties of a Msg_BuyDailyShopCommodityReq. */
    interface IMsg_BuyDailyShopCommodityReq {

        /** Msg_BuyDailyShopCommodityReq index */
        index?: (number|null);
    }

    /** Represents a Msg_BuyDailyShopCommodityReq. */
    class Msg_BuyDailyShopCommodityReq implements IMsg_BuyDailyShopCommodityReq {

        /**
         * Constructs a new Msg_BuyDailyShopCommodityReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDailyShopCommodityReq);

        /** Msg_BuyDailyShopCommodityReq index. */
        public index: number;

        /**
         * Encodes the specified Msg_BuyDailyShopCommodityReq message. Does not implicitly {@link proto.Msg_BuyDailyShopCommodityReq.verify|verify} messages.
         * @param m Msg_BuyDailyShopCommodityReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDailyShopCommodityReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDailyShopCommodityReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDailyShopCommodityReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDailyShopCommodityReq;
    }

    /** Properties of a Msg_BuyDailyShopCommodityRsp. */
    interface IMsg_BuyDailyShopCommodityRsp {

        /** Msg_BuyDailyShopCommodityRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyDailyShopCommodityRsp index */
        index?: (number|null);

        /** Msg_BuyDailyShopCommodityRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyDailyShopCommodityRsp. */
    class Msg_BuyDailyShopCommodityRsp implements IMsg_BuyDailyShopCommodityRsp {

        /**
         * Constructs a new Msg_BuyDailyShopCommodityRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDailyShopCommodityRsp);

        /** Msg_BuyDailyShopCommodityRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyDailyShopCommodityRsp index. */
        public index: number;

        /** Msg_BuyDailyShopCommodityRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyDailyShopCommodityRsp message. Does not implicitly {@link proto.Msg_BuyDailyShopCommodityRsp.verify|verify} messages.
         * @param m Msg_BuyDailyShopCommodityRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDailyShopCommodityRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDailyShopCommodityRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDailyShopCommodityRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDailyShopCommodityRsp;
    }

    /** Properties of a Msg_BuyDailyShopCommodityOneClickReq. */
    interface IMsg_BuyDailyShopCommodityOneClickReq {
    }

    /** Represents a Msg_BuyDailyShopCommodityOneClickReq. */
    class Msg_BuyDailyShopCommodityOneClickReq implements IMsg_BuyDailyShopCommodityOneClickReq {

        /**
         * Constructs a new Msg_BuyDailyShopCommodityOneClickReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDailyShopCommodityOneClickReq);

        /**
         * Encodes the specified Msg_BuyDailyShopCommodityOneClickReq message. Does not implicitly {@link proto.Msg_BuyDailyShopCommodityOneClickReq.verify|verify} messages.
         * @param m Msg_BuyDailyShopCommodityOneClickReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDailyShopCommodityOneClickReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDailyShopCommodityOneClickReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDailyShopCommodityOneClickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDailyShopCommodityOneClickReq;
    }

    /** Properties of a Msg_BuyDailyShopCommodityOneClickRsp. */
    interface IMsg_BuyDailyShopCommodityOneClickRsp {

        /** Msg_BuyDailyShopCommodityOneClickRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyDailyShopCommodityOneClickRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyDailyShopCommodityOneClickRsp. */
    class Msg_BuyDailyShopCommodityOneClickRsp implements IMsg_BuyDailyShopCommodityOneClickRsp {

        /**
         * Constructs a new Msg_BuyDailyShopCommodityOneClickRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyDailyShopCommodityOneClickRsp);

        /** Msg_BuyDailyShopCommodityOneClickRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyDailyShopCommodityOneClickRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyDailyShopCommodityOneClickRsp message. Does not implicitly {@link proto.Msg_BuyDailyShopCommodityOneClickRsp.verify|verify} messages.
         * @param m Msg_BuyDailyShopCommodityOneClickRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyDailyShopCommodityOneClickRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyDailyShopCommodityOneClickRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyDailyShopCommodityOneClickRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyDailyShopCommodityOneClickRsp;
    }

    /** Properties of a Msg_BreakEggPush. */
    interface IMsg_BreakEggPush {

        /** Msg_BreakEggPush id */
        id?: (number|null);

        /** Msg_BreakEggPush score */
        score?: (number|null);
    }

    /** Represents a Msg_BreakEggPush. */
    class Msg_BreakEggPush implements IMsg_BreakEggPush {

        /**
         * Constructs a new Msg_BreakEggPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BreakEggPush);

        /** Msg_BreakEggPush id. */
        public id: number;

        /** Msg_BreakEggPush score. */
        public score: number;

        /**
         * Encodes the specified Msg_BreakEggPush message. Does not implicitly {@link proto.Msg_BreakEggPush.verify|verify} messages.
         * @param m Msg_BreakEggPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BreakEggPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BreakEggPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BreakEggPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BreakEggPush;
    }

    /** Properties of a Msg_GetVipInfoReq. */
    interface IMsg_GetVipInfoReq {
    }

    /** Represents a Msg_GetVipInfoReq. */
    class Msg_GetVipInfoReq implements IMsg_GetVipInfoReq {

        /**
         * Constructs a new Msg_GetVipInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetVipInfoReq);

        /**
         * Encodes the specified Msg_GetVipInfoReq message. Does not implicitly {@link proto.Msg_GetVipInfoReq.verify|verify} messages.
         * @param m Msg_GetVipInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetVipInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetVipInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetVipInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetVipInfoReq;
    }

    /** Properties of a Msg_GetVipInfoRsp. */
    interface IMsg_GetVipInfoRsp {

        /** Msg_GetVipInfoRsp vipLevel */
        vipLevel?: (number|null);

        /** Msg_GetVipInfoRsp isDailyGiftReceived */
        isDailyGiftReceived?: (boolean|null);

        /** Msg_GetVipInfoRsp boughtVipGifts */
        boughtVipGifts?: (number[]|null);
    }

    /** Represents a Msg_GetVipInfoRsp. */
    class Msg_GetVipInfoRsp implements IMsg_GetVipInfoRsp {

        /**
         * Constructs a new Msg_GetVipInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetVipInfoRsp);

        /** Msg_GetVipInfoRsp vipLevel. */
        public vipLevel: number;

        /** Msg_GetVipInfoRsp isDailyGiftReceived. */
        public isDailyGiftReceived: boolean;

        /** Msg_GetVipInfoRsp boughtVipGifts. */
        public boughtVipGifts: number[];

        /**
         * Encodes the specified Msg_GetVipInfoRsp message. Does not implicitly {@link proto.Msg_GetVipInfoRsp.verify|verify} messages.
         * @param m Msg_GetVipInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetVipInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetVipInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetVipInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetVipInfoRsp;
    }

    /** Properties of a Msg_ReceiveVipDailyGiftReq. */
    interface IMsg_ReceiveVipDailyGiftReq {
    }

    /** Represents a Msg_ReceiveVipDailyGiftReq. */
    class Msg_ReceiveVipDailyGiftReq implements IMsg_ReceiveVipDailyGiftReq {

        /**
         * Constructs a new Msg_ReceiveVipDailyGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveVipDailyGiftReq);

        /**
         * Encodes the specified Msg_ReceiveVipDailyGiftReq message. Does not implicitly {@link proto.Msg_ReceiveVipDailyGiftReq.verify|verify} messages.
         * @param m Msg_ReceiveVipDailyGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveVipDailyGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveVipDailyGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveVipDailyGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveVipDailyGiftReq;
    }

    /** Properties of a Msg_ReceiveVipDailyGiftRsp. */
    interface IMsg_ReceiveVipDailyGiftRsp {

        /** Msg_ReceiveVipDailyGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveVipDailyGiftRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveVipDailyGiftRsp. */
    class Msg_ReceiveVipDailyGiftRsp implements IMsg_ReceiveVipDailyGiftRsp {

        /**
         * Constructs a new Msg_ReceiveVipDailyGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveVipDailyGiftRsp);

        /** Msg_ReceiveVipDailyGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveVipDailyGiftRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveVipDailyGiftRsp message. Does not implicitly {@link proto.Msg_ReceiveVipDailyGiftRsp.verify|verify} messages.
         * @param m Msg_ReceiveVipDailyGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveVipDailyGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveVipDailyGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveVipDailyGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveVipDailyGiftRsp;
    }

    /** Properties of a Msg_BuyVipGiftReq. */
    interface IMsg_BuyVipGiftReq {

        /** Msg_BuyVipGiftReq vipLevel */
        vipLevel?: (number|null);
    }

    /** Represents a Msg_BuyVipGiftReq. */
    class Msg_BuyVipGiftReq implements IMsg_BuyVipGiftReq {

        /**
         * Constructs a new Msg_BuyVipGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyVipGiftReq);

        /** Msg_BuyVipGiftReq vipLevel. */
        public vipLevel: number;

        /**
         * Encodes the specified Msg_BuyVipGiftReq message. Does not implicitly {@link proto.Msg_BuyVipGiftReq.verify|verify} messages.
         * @param m Msg_BuyVipGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyVipGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyVipGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyVipGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyVipGiftReq;
    }

    /** Properties of a Msg_BuyVipGiftRsp. */
    interface IMsg_BuyVipGiftRsp {

        /** Msg_BuyVipGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyVipGiftRsp vipLevel */
        vipLevel?: (number|null);

        /** Msg_BuyVipGiftRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyVipGiftRsp. */
    class Msg_BuyVipGiftRsp implements IMsg_BuyVipGiftRsp {

        /**
         * Constructs a new Msg_BuyVipGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyVipGiftRsp);

        /** Msg_BuyVipGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyVipGiftRsp vipLevel. */
        public vipLevel: number;

        /** Msg_BuyVipGiftRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyVipGiftRsp message. Does not implicitly {@link proto.Msg_BuyVipGiftRsp.verify|verify} messages.
         * @param m Msg_BuyVipGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyVipGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyVipGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyVipGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyVipGiftRsp;
    }

    /** Properties of a Msg_ReviveOnStageReq. */
    interface IMsg_ReviveOnStageReq {
    }

    /** Represents a Msg_ReviveOnStageReq. */
    class Msg_ReviveOnStageReq implements IMsg_ReviveOnStageReq {

        /**
         * Constructs a new Msg_ReviveOnStageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReviveOnStageReq);

        /**
         * Encodes the specified Msg_ReviveOnStageReq message. Does not implicitly {@link proto.Msg_ReviveOnStageReq.verify|verify} messages.
         * @param m Msg_ReviveOnStageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReviveOnStageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReviveOnStageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReviveOnStageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReviveOnStageReq;
    }

    /** Properties of a Msg_ReviveOnStageRsp. */
    interface IMsg_ReviveOnStageRsp {

        /** Msg_ReviveOnStageRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_ReviveOnStageRsp. */
    class Msg_ReviveOnStageRsp implements IMsg_ReviveOnStageRsp {

        /**
         * Constructs a new Msg_ReviveOnStageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReviveOnStageRsp);

        /** Msg_ReviveOnStageRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_ReviveOnStageRsp message. Does not implicitly {@link proto.Msg_ReviveOnStageRsp.verify|verify} messages.
         * @param m Msg_ReviveOnStageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReviveOnStageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReviveOnStageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReviveOnStageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReviveOnStageRsp;
    }

    /** Properties of a Msg_WatchAdReq. */
    interface IMsg_WatchAdReq {

        /** Msg_WatchAdReq type */
        type?: (number|null);
    }

    /** Represents a Msg_WatchAdReq. */
    class Msg_WatchAdReq implements IMsg_WatchAdReq {

        /**
         * Constructs a new Msg_WatchAdReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WatchAdReq);

        /** Msg_WatchAdReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_WatchAdReq message. Does not implicitly {@link proto.Msg_WatchAdReq.verify|verify} messages.
         * @param m Msg_WatchAdReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WatchAdReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WatchAdReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WatchAdReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WatchAdReq;
    }

    /** Properties of a Msg_WatchAdRsp. */
    interface IMsg_WatchAdRsp {

        /** Msg_WatchAdRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_WatchAdRsp type */
        type?: (number|null);
    }

    /** Represents a Msg_WatchAdRsp. */
    class Msg_WatchAdRsp implements IMsg_WatchAdRsp {

        /**
         * Constructs a new Msg_WatchAdRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WatchAdRsp);

        /** Msg_WatchAdRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_WatchAdRsp type. */
        public type: number;

        /**
         * Encodes the specified Msg_WatchAdRsp message. Does not implicitly {@link proto.Msg_WatchAdRsp.verify|verify} messages.
         * @param m Msg_WatchAdRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WatchAdRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WatchAdRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WatchAdRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WatchAdRsp;
    }

    /** Properties of a Privilege. */
    interface IPrivilege {

        /** Privilege type */
        type?: (number|null);

        /** Privilege expireTime */
        expireTime?: (number|Long|null);

        /** Privilege isDailyReceived */
        isDailyReceived?: (boolean|null);
    }

    /** Represents a Privilege. */
    class Privilege implements IPrivilege {

        /**
         * Constructs a new Privilege.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IPrivilege);

        /** Privilege type. */
        public type: number;

        /** Privilege expireTime. */
        public expireTime: (number|Long);

        /** Privilege isDailyReceived. */
        public isDailyReceived: boolean;

        /**
         * Encodes the specified Privilege message. Does not implicitly {@link proto.Privilege.verify|verify} messages.
         * @param m Privilege message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IPrivilege, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Privilege message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Privilege
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Privilege;
    }

    /** Properties of a Msg_GetPrivilegeInfoReq. */
    interface IMsg_GetPrivilegeInfoReq {
    }

    /** Represents a Msg_GetPrivilegeInfoReq. */
    class Msg_GetPrivilegeInfoReq implements IMsg_GetPrivilegeInfoReq {

        /**
         * Constructs a new Msg_GetPrivilegeInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPrivilegeInfoReq);

        /**
         * Encodes the specified Msg_GetPrivilegeInfoReq message. Does not implicitly {@link proto.Msg_GetPrivilegeInfoReq.verify|verify} messages.
         * @param m Msg_GetPrivilegeInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPrivilegeInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPrivilegeInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPrivilegeInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPrivilegeInfoReq;
    }

    /** Properties of a Msg_GetPrivilegeInfoRsp. */
    interface IMsg_GetPrivilegeInfoRsp {

        /** Msg_GetPrivilegeInfoRsp PrivilegeMap */
        PrivilegeMap?: ({ [k: string]: proto.IPrivilege }|null);

        /** Msg_GetPrivilegeInfoRsp montylyPassAddtionalExpireTime */
        montylyPassAddtionalExpireTime?: (number|Long|null);

        /** Msg_GetPrivilegeInfoRsp isReceivedMonthlyPassAddtional */
        isReceivedMonthlyPassAddtional?: (boolean|null);
    }

    /** Represents a Msg_GetPrivilegeInfoRsp. */
    class Msg_GetPrivilegeInfoRsp implements IMsg_GetPrivilegeInfoRsp {

        /**
         * Constructs a new Msg_GetPrivilegeInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetPrivilegeInfoRsp);

        /** Msg_GetPrivilegeInfoRsp PrivilegeMap. */
        public PrivilegeMap: { [k: string]: proto.IPrivilege };

        /** Msg_GetPrivilegeInfoRsp montylyPassAddtionalExpireTime. */
        public montylyPassAddtionalExpireTime: (number|Long);

        /** Msg_GetPrivilegeInfoRsp isReceivedMonthlyPassAddtional. */
        public isReceivedMonthlyPassAddtional: boolean;

        /**
         * Encodes the specified Msg_GetPrivilegeInfoRsp message. Does not implicitly {@link proto.Msg_GetPrivilegeInfoRsp.verify|verify} messages.
         * @param m Msg_GetPrivilegeInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetPrivilegeInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetPrivilegeInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetPrivilegeInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetPrivilegeInfoRsp;
    }

    /** Properties of a Msg_ReceivePrivilegeDailyRewardsReq. */
    interface IMsg_ReceivePrivilegeDailyRewardsReq {

        /** Msg_ReceivePrivilegeDailyRewardsReq type */
        type?: (number|null);
    }

    /** Represents a Msg_ReceivePrivilegeDailyRewardsReq. */
    class Msg_ReceivePrivilegeDailyRewardsReq implements IMsg_ReceivePrivilegeDailyRewardsReq {

        /**
         * Constructs a new Msg_ReceivePrivilegeDailyRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceivePrivilegeDailyRewardsReq);

        /** Msg_ReceivePrivilegeDailyRewardsReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_ReceivePrivilegeDailyRewardsReq message. Does not implicitly {@link proto.Msg_ReceivePrivilegeDailyRewardsReq.verify|verify} messages.
         * @param m Msg_ReceivePrivilegeDailyRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceivePrivilegeDailyRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceivePrivilegeDailyRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceivePrivilegeDailyRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceivePrivilegeDailyRewardsReq;
    }

    /** Properties of a Msg_ReceivePrivilegeDailyRewardsRsp. */
    interface IMsg_ReceivePrivilegeDailyRewardsRsp {

        /** Msg_ReceivePrivilegeDailyRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceivePrivilegeDailyRewardsRsp type */
        type?: (number|null);

        /** Msg_ReceivePrivilegeDailyRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceivePrivilegeDailyRewardsRsp. */
    class Msg_ReceivePrivilegeDailyRewardsRsp implements IMsg_ReceivePrivilegeDailyRewardsRsp {

        /**
         * Constructs a new Msg_ReceivePrivilegeDailyRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceivePrivilegeDailyRewardsRsp);

        /** Msg_ReceivePrivilegeDailyRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceivePrivilegeDailyRewardsRsp type. */
        public type: number;

        /** Msg_ReceivePrivilegeDailyRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceivePrivilegeDailyRewardsRsp message. Does not implicitly {@link proto.Msg_ReceivePrivilegeDailyRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceivePrivilegeDailyRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceivePrivilegeDailyRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceivePrivilegeDailyRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceivePrivilegeDailyRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceivePrivilegeDailyRewardsRsp;
    }

    /** Properties of a Msg_ReceiveMonthlyPassAdditionalRewardsReq. */
    interface IMsg_ReceiveMonthlyPassAdditionalRewardsReq {
    }

    /** Represents a Msg_ReceiveMonthlyPassAdditionalRewardsReq. */
    class Msg_ReceiveMonthlyPassAdditionalRewardsReq implements IMsg_ReceiveMonthlyPassAdditionalRewardsReq {

        /**
         * Constructs a new Msg_ReceiveMonthlyPassAdditionalRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMonthlyPassAdditionalRewardsReq);

        /**
         * Encodes the specified Msg_ReceiveMonthlyPassAdditionalRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveMonthlyPassAdditionalRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveMonthlyPassAdditionalRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMonthlyPassAdditionalRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMonthlyPassAdditionalRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMonthlyPassAdditionalRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMonthlyPassAdditionalRewardsReq;
    }

    /** Properties of a Msg_ReceiveMonthlyPassAdditionalRewardsRsp. */
    interface IMsg_ReceiveMonthlyPassAdditionalRewardsRsp {

        /** Msg_ReceiveMonthlyPassAdditionalRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveMonthlyPassAdditionalRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveMonthlyPassAdditionalRewardsRsp. */
    class Msg_ReceiveMonthlyPassAdditionalRewardsRsp implements IMsg_ReceiveMonthlyPassAdditionalRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveMonthlyPassAdditionalRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveMonthlyPassAdditionalRewardsRsp);

        /** Msg_ReceiveMonthlyPassAdditionalRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveMonthlyPassAdditionalRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveMonthlyPassAdditionalRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveMonthlyPassAdditionalRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveMonthlyPassAdditionalRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveMonthlyPassAdditionalRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveMonthlyPassAdditionalRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveMonthlyPassAdditionalRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveMonthlyPassAdditionalRewardsRsp;
    }

    /** Properties of a BattlePass. */
    interface IBattlePass {

        /** BattlePass id */
        id?: (number|null);

        /** BattlePass isBoughtAdvance */
        isBoughtAdvance?: (boolean|null);

        /** BattlePass lastResetTime */
        lastResetTime?: (number|Long|null);

        /** BattlePass tasks */
        tasks?: (proto.ITask[]|null);

        /** BattlePass activityEndTime */
        activityEndTime?: (number|Long|null);
    }

    /** Represents a BattlePass. */
    class BattlePass implements IBattlePass {

        /**
         * Constructs a new BattlePass.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBattlePass);

        /** BattlePass id. */
        public id: number;

        /** BattlePass isBoughtAdvance. */
        public isBoughtAdvance: boolean;

        /** BattlePass lastResetTime. */
        public lastResetTime: (number|Long);

        /** BattlePass tasks. */
        public tasks: proto.ITask[];

        /** BattlePass activityEndTime. */
        public activityEndTime: (number|Long);

        /**
         * Encodes the specified BattlePass message. Does not implicitly {@link proto.BattlePass.verify|verify} messages.
         * @param m BattlePass message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBattlePass, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BattlePass message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BattlePass
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BattlePass;
    }

    /** Properties of a Msg_GetBattlePassInfoMapReq. */
    interface IMsg_GetBattlePassInfoMapReq {
    }

    /** Represents a Msg_GetBattlePassInfoMapReq. */
    class Msg_GetBattlePassInfoMapReq implements IMsg_GetBattlePassInfoMapReq {

        /**
         * Constructs a new Msg_GetBattlePassInfoMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBattlePassInfoMapReq);

        /**
         * Encodes the specified Msg_GetBattlePassInfoMapReq message. Does not implicitly {@link proto.Msg_GetBattlePassInfoMapReq.verify|verify} messages.
         * @param m Msg_GetBattlePassInfoMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBattlePassInfoMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBattlePassInfoMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBattlePassInfoMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBattlePassInfoMapReq;
    }

    /** Properties of a Msg_GetBattlePassInfoMapRsp. */
    interface IMsg_GetBattlePassInfoMapRsp {

        /** Msg_GetBattlePassInfoMapRsp battlePassMap */
        battlePassMap?: ({ [k: string]: proto.IBattlePass }|null);
    }

    /** Represents a Msg_GetBattlePassInfoMapRsp. */
    class Msg_GetBattlePassInfoMapRsp implements IMsg_GetBattlePassInfoMapRsp {

        /**
         * Constructs a new Msg_GetBattlePassInfoMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetBattlePassInfoMapRsp);

        /** Msg_GetBattlePassInfoMapRsp battlePassMap. */
        public battlePassMap: { [k: string]: proto.IBattlePass };

        /**
         * Encodes the specified Msg_GetBattlePassInfoMapRsp message. Does not implicitly {@link proto.Msg_GetBattlePassInfoMapRsp.verify|verify} messages.
         * @param m Msg_GetBattlePassInfoMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetBattlePassInfoMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetBattlePassInfoMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetBattlePassInfoMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetBattlePassInfoMapRsp;
    }

    /** Properties of a Msg_ReceiveBattlePassTaskRewardsReq. */
    interface IMsg_ReceiveBattlePassTaskRewardsReq {

        /** Msg_ReceiveBattlePassTaskRewardsReq id */
        id?: (number|null);

        /** Msg_ReceiveBattlePassTaskRewardsReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveBattlePassTaskRewardsReq. */
    class Msg_ReceiveBattlePassTaskRewardsReq implements IMsg_ReceiveBattlePassTaskRewardsReq {

        /**
         * Constructs a new Msg_ReceiveBattlePassTaskRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveBattlePassTaskRewardsReq);

        /** Msg_ReceiveBattlePassTaskRewardsReq id. */
        public id: number;

        /** Msg_ReceiveBattlePassTaskRewardsReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveBattlePassTaskRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveBattlePassTaskRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveBattlePassTaskRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveBattlePassTaskRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveBattlePassTaskRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveBattlePassTaskRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveBattlePassTaskRewardsReq;
    }

    /** Properties of a Msg_ReceiveBattlePassTaskRewardsRsp. */
    interface IMsg_ReceiveBattlePassTaskRewardsRsp {

        /** Msg_ReceiveBattlePassTaskRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveBattlePassTaskRewardsRsp id */
        id?: (number|null);

        /** Msg_ReceiveBattlePassTaskRewardsRsp tasks */
        tasks?: (proto.ITask[]|null);

        /** Msg_ReceiveBattlePassTaskRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveBattlePassTaskRewardsRsp. */
    class Msg_ReceiveBattlePassTaskRewardsRsp implements IMsg_ReceiveBattlePassTaskRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveBattlePassTaskRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveBattlePassTaskRewardsRsp);

        /** Msg_ReceiveBattlePassTaskRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveBattlePassTaskRewardsRsp id. */
        public id: number;

        /** Msg_ReceiveBattlePassTaskRewardsRsp tasks. */
        public tasks: proto.ITask[];

        /** Msg_ReceiveBattlePassTaskRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveBattlePassTaskRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveBattlePassTaskRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveBattlePassTaskRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveBattlePassTaskRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveBattlePassTaskRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveBattlePassTaskRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveBattlePassTaskRewardsRsp;
    }

    /** Properties of a Msg_BuyBattlePassLevelReq. */
    interface IMsg_BuyBattlePassLevelReq {

        /** Msg_BuyBattlePassLevelReq id */
        id?: (number|null);
    }

    /** Represents a Msg_BuyBattlePassLevelReq. */
    class Msg_BuyBattlePassLevelReq implements IMsg_BuyBattlePassLevelReq {

        /**
         * Constructs a new Msg_BuyBattlePassLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyBattlePassLevelReq);

        /** Msg_BuyBattlePassLevelReq id. */
        public id: number;

        /**
         * Encodes the specified Msg_BuyBattlePassLevelReq message. Does not implicitly {@link proto.Msg_BuyBattlePassLevelReq.verify|verify} messages.
         * @param m Msg_BuyBattlePassLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyBattlePassLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyBattlePassLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyBattlePassLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyBattlePassLevelReq;
    }

    /** Properties of a Msg_BuyBattlePassLevelRsp. */
    interface IMsg_BuyBattlePassLevelRsp {

        /** Msg_BuyBattlePassLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyBattlePassLevelRsp id */
        id?: (number|null);

        /** Msg_BuyBattlePassLevelRsp progress */
        progress?: (number|null);
    }

    /** Represents a Msg_BuyBattlePassLevelRsp. */
    class Msg_BuyBattlePassLevelRsp implements IMsg_BuyBattlePassLevelRsp {

        /**
         * Constructs a new Msg_BuyBattlePassLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyBattlePassLevelRsp);

        /** Msg_BuyBattlePassLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyBattlePassLevelRsp id. */
        public id: number;

        /** Msg_BuyBattlePassLevelRsp progress. */
        public progress: number;

        /**
         * Encodes the specified Msg_BuyBattlePassLevelRsp message. Does not implicitly {@link proto.Msg_BuyBattlePassLevelRsp.verify|verify} messages.
         * @param m Msg_BuyBattlePassLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyBattlePassLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyBattlePassLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyBattlePassLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyBattlePassLevelRsp;
    }

    /** Properties of a BuyGoldHistory. */
    interface IBuyGoldHistory {

        /** BuyGoldHistory type */
        type?: (number|null);

        /** BuyGoldHistory count */
        count?: (number|null);
    }

    /** Represents a BuyGoldHistory. */
    class BuyGoldHistory implements IBuyGoldHistory {

        /**
         * Constructs a new BuyGoldHistory.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBuyGoldHistory);

        /** BuyGoldHistory type. */
        public type: number;

        /** BuyGoldHistory count. */
        public count: number;

        /**
         * Encodes the specified BuyGoldHistory message. Does not implicitly {@link proto.BuyGoldHistory.verify|verify} messages.
         * @param m BuyGoldHistory message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBuyGoldHistory, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BuyGoldHistory message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BuyGoldHistory
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BuyGoldHistory;
    }

    /** Properties of a Msg_BuyGoldReq. */
    interface IMsg_BuyGoldReq {

        /** Msg_BuyGoldReq type */
        type?: (number|null);
    }

    /** Represents a Msg_BuyGoldReq. */
    class Msg_BuyGoldReq implements IMsg_BuyGoldReq {

        /**
         * Constructs a new Msg_BuyGoldReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGoldReq);

        /** Msg_BuyGoldReq type. */
        public type: number;

        /**
         * Encodes the specified Msg_BuyGoldReq message. Does not implicitly {@link proto.Msg_BuyGoldReq.verify|verify} messages.
         * @param m Msg_BuyGoldReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGoldReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGoldReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGoldReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGoldReq;
    }

    /** Properties of a Msg_BuyGoldRsp. */
    interface IMsg_BuyGoldRsp {

        /** Msg_BuyGoldRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyGoldRsp history */
        history?: (proto.IBuyGoldHistory|null);

        /** Msg_BuyGoldRsp items */
        items?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyGoldRsp. */
    class Msg_BuyGoldRsp implements IMsg_BuyGoldRsp {

        /**
         * Constructs a new Msg_BuyGoldRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGoldRsp);

        /** Msg_BuyGoldRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyGoldRsp history. */
        public history?: (proto.IBuyGoldHistory|null);

        /** Msg_BuyGoldRsp items. */
        public items: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyGoldRsp message. Does not implicitly {@link proto.Msg_BuyGoldRsp.verify|verify} messages.
         * @param m Msg_BuyGoldRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGoldRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGoldRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGoldRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGoldRsp;
    }

    /** Properties of a Msg_ClientDebugPush. */
    interface IMsg_ClientDebugPush {

        /** Msg_ClientDebugPush log */
        log?: (string|null);
    }

    /** Represents a Msg_ClientDebugPush. */
    class Msg_ClientDebugPush implements IMsg_ClientDebugPush {

        /**
         * Constructs a new Msg_ClientDebugPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ClientDebugPush);

        /** Msg_ClientDebugPush log. */
        public log: string;

        /**
         * Encodes the specified Msg_ClientDebugPush message. Does not implicitly {@link proto.Msg_ClientDebugPush.verify|verify} messages.
         * @param m Msg_ClientDebugPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ClientDebugPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ClientDebugPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ClientDebugPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ClientDebugPush;
    }

    /** Properties of a Msg_VipBonusPush. */
    interface IMsg_VipBonusPush {

        /** Msg_VipBonusPush vipBonusMap */
        vipBonusMap?: ({ [k: string]: number }|null);
    }

    /** Represents a Msg_VipBonusPush. */
    class Msg_VipBonusPush implements IMsg_VipBonusPush {

        /**
         * Constructs a new Msg_VipBonusPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VipBonusPush);

        /** Msg_VipBonusPush vipBonusMap. */
        public vipBonusMap: { [k: string]: number };

        /**
         * Encodes the specified Msg_VipBonusPush message. Does not implicitly {@link proto.Msg_VipBonusPush.verify|verify} messages.
         * @param m Msg_VipBonusPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VipBonusPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VipBonusPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VipBonusPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VipBonusPush;
    }

    /** Properties of a Msg_VipLevelUpPush. */
    interface IMsg_VipLevelUpPush {

        /** Msg_VipLevelUpPush vipLevel */
        vipLevel?: (number|null);
    }

    /** Represents a Msg_VipLevelUpPush. */
    class Msg_VipLevelUpPush implements IMsg_VipLevelUpPush {

        /**
         * Constructs a new Msg_VipLevelUpPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_VipLevelUpPush);

        /** Msg_VipLevelUpPush vipLevel. */
        public vipLevel: number;

        /**
         * Encodes the specified Msg_VipLevelUpPush message. Does not implicitly {@link proto.Msg_VipLevelUpPush.verify|verify} messages.
         * @param m Msg_VipLevelUpPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_VipLevelUpPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_VipLevelUpPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_VipLevelUpPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_VipLevelUpPush;
    }

    /** Properties of a Msg_WorldBossDataPush. */
    interface IMsg_WorldBossDataPush {

        /** Msg_WorldBossDataPush maxScore */
        maxScore?: (number|Long|null);

        /** Msg_WorldBossDataPush totalScore */
        totalScore?: (number|Long|null);

        /** Msg_WorldBossDataPush ranking */
        ranking?: (number|null);

        /** Msg_WorldBossDataPush challengeCount */
        challengeCount?: (number|null);
    }

    /** Represents a Msg_WorldBossDataPush. */
    class Msg_WorldBossDataPush implements IMsg_WorldBossDataPush {

        /**
         * Constructs a new Msg_WorldBossDataPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WorldBossDataPush);

        /** Msg_WorldBossDataPush maxScore. */
        public maxScore: (number|Long);

        /** Msg_WorldBossDataPush totalScore. */
        public totalScore: (number|Long);

        /** Msg_WorldBossDataPush ranking. */
        public ranking: number;

        /** Msg_WorldBossDataPush challengeCount. */
        public challengeCount: number;

        /**
         * Encodes the specified Msg_WorldBossDataPush message. Does not implicitly {@link proto.Msg_WorldBossDataPush.verify|verify} messages.
         * @param m Msg_WorldBossDataPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WorldBossDataPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WorldBossDataPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WorldBossDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WorldBossDataPush;
    }

    /** Properties of a Msg_WorldBossSweepReq. */
    interface IMsg_WorldBossSweepReq {
    }

    /** Represents a Msg_WorldBossSweepReq. */
    class Msg_WorldBossSweepReq implements IMsg_WorldBossSweepReq {

        /**
         * Constructs a new Msg_WorldBossSweepReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WorldBossSweepReq);

        /**
         * Encodes the specified Msg_WorldBossSweepReq message. Does not implicitly {@link proto.Msg_WorldBossSweepReq.verify|verify} messages.
         * @param m Msg_WorldBossSweepReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WorldBossSweepReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WorldBossSweepReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WorldBossSweepReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WorldBossSweepReq;
    }

    /** Properties of a Msg_WorldBossSweepRsp. */
    interface IMsg_WorldBossSweepRsp {

        /** Msg_WorldBossSweepRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_WorldBossSweepRsp data */
        data?: (proto.IMsg_WorldBossDataPush|null);
    }

    /** Represents a Msg_WorldBossSweepRsp. */
    class Msg_WorldBossSweepRsp implements IMsg_WorldBossSweepRsp {

        /**
         * Constructs a new Msg_WorldBossSweepRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_WorldBossSweepRsp);

        /** Msg_WorldBossSweepRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_WorldBossSweepRsp data. */
        public data?: (proto.IMsg_WorldBossDataPush|null);

        /**
         * Encodes the specified Msg_WorldBossSweepRsp message. Does not implicitly {@link proto.Msg_WorldBossSweepRsp.verify|verify} messages.
         * @param m Msg_WorldBossSweepRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_WorldBossSweepRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_WorldBossSweepRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_WorldBossSweepRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_WorldBossSweepRsp;
    }

    /** Properties of a DailyChallengeData. */
    interface IDailyChallengeData {

        /** DailyChallengeData level */
        level?: (number|null);

        /** DailyChallengeData cd */
        cd?: (number|Long|null);

        /** DailyChallengeData score */
        score?: (number|null);

        /** DailyChallengeData receivedScore */
        receivedScore?: (number|null);

        /** DailyChallengeData maxScore */
        maxScore?: (number|null);

        /** DailyChallengeData challengeCount */
        challengeCount?: (number|null);

        /** DailyChallengeData challengeTotalCount */
        challengeTotalCount?: (number|null);
    }

    /** Represents a DailyChallengeData. */
    class DailyChallengeData implements IDailyChallengeData {

        /**
         * Constructs a new DailyChallengeData.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IDailyChallengeData);

        /** DailyChallengeData level. */
        public level: number;

        /** DailyChallengeData cd. */
        public cd: (number|Long);

        /** DailyChallengeData score. */
        public score: number;

        /** DailyChallengeData receivedScore. */
        public receivedScore: number;

        /** DailyChallengeData maxScore. */
        public maxScore: number;

        /** DailyChallengeData challengeCount. */
        public challengeCount: number;

        /** DailyChallengeData challengeTotalCount. */
        public challengeTotalCount: number;

        /**
         * Encodes the specified DailyChallengeData message. Does not implicitly {@link proto.DailyChallengeData.verify|verify} messages.
         * @param m DailyChallengeData message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IDailyChallengeData, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a DailyChallengeData message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns DailyChallengeData
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.DailyChallengeData;
    }

    /** Properties of a Msg_DailyChallengeLevelReq. */
    interface IMsg_DailyChallengeLevelReq {

        /** Msg_DailyChallengeLevelReq newLevel */
        newLevel?: (number|null);
    }

    /** Represents a Msg_DailyChallengeLevelReq. */
    class Msg_DailyChallengeLevelReq implements IMsg_DailyChallengeLevelReq {

        /**
         * Constructs a new Msg_DailyChallengeLevelReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeLevelReq);

        /** Msg_DailyChallengeLevelReq newLevel. */
        public newLevel: number;

        /**
         * Encodes the specified Msg_DailyChallengeLevelReq message. Does not implicitly {@link proto.Msg_DailyChallengeLevelReq.verify|verify} messages.
         * @param m Msg_DailyChallengeLevelReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeLevelReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeLevelReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeLevelReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeLevelReq;
    }

    /** Properties of a Msg_DailyChallengeLevelRsp. */
    interface IMsg_DailyChallengeLevelRsp {

        /** Msg_DailyChallengeLevelRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeLevelRsp data */
        data?: (proto.IDailyChallengeData|null);
    }

    /** Represents a Msg_DailyChallengeLevelRsp. */
    class Msg_DailyChallengeLevelRsp implements IMsg_DailyChallengeLevelRsp {

        /**
         * Constructs a new Msg_DailyChallengeLevelRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeLevelRsp);

        /** Msg_DailyChallengeLevelRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeLevelRsp data. */
        public data?: (proto.IDailyChallengeData|null);

        /**
         * Encodes the specified Msg_DailyChallengeLevelRsp message. Does not implicitly {@link proto.Msg_DailyChallengeLevelRsp.verify|verify} messages.
         * @param m Msg_DailyChallengeLevelRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeLevelRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeLevelRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeLevelRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeLevelRsp;
    }

    /** Properties of a Msg_DailyChallengeRewardReq. */
    interface IMsg_DailyChallengeRewardReq {
    }

    /** Represents a Msg_DailyChallengeRewardReq. */
    class Msg_DailyChallengeRewardReq implements IMsg_DailyChallengeRewardReq {

        /**
         * Constructs a new Msg_DailyChallengeRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeRewardReq);

        /**
         * Encodes the specified Msg_DailyChallengeRewardReq message. Does not implicitly {@link proto.Msg_DailyChallengeRewardReq.verify|verify} messages.
         * @param m Msg_DailyChallengeRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeRewardReq;
    }

    /** Properties of a Msg_DailyChallengeRewardRsp. */
    interface IMsg_DailyChallengeRewardRsp {

        /** Msg_DailyChallengeRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeRewardRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_DailyChallengeRewardRsp data */
        data?: (proto.IDailyChallengeData|null);
    }

    /** Represents a Msg_DailyChallengeRewardRsp. */
    class Msg_DailyChallengeRewardRsp implements IMsg_DailyChallengeRewardRsp {

        /**
         * Constructs a new Msg_DailyChallengeRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeRewardRsp);

        /** Msg_DailyChallengeRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeRewardRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_DailyChallengeRewardRsp data. */
        public data?: (proto.IDailyChallengeData|null);

        /**
         * Encodes the specified Msg_DailyChallengeRewardRsp message. Does not implicitly {@link proto.Msg_DailyChallengeRewardRsp.verify|verify} messages.
         * @param m Msg_DailyChallengeRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeRewardRsp;
    }

    /** Properties of a Msg_DailyChallengeSweepReq. */
    interface IMsg_DailyChallengeSweepReq {
    }

    /** Represents a Msg_DailyChallengeSweepReq. */
    class Msg_DailyChallengeSweepReq implements IMsg_DailyChallengeSweepReq {

        /**
         * Constructs a new Msg_DailyChallengeSweepReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeSweepReq);

        /**
         * Encodes the specified Msg_DailyChallengeSweepReq message. Does not implicitly {@link proto.Msg_DailyChallengeSweepReq.verify|verify} messages.
         * @param m Msg_DailyChallengeSweepReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeSweepReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeSweepReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeSweepReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeSweepReq;
    }

    /** Properties of a Msg_DailyChallengeSweepRsp. */
    interface IMsg_DailyChallengeSweepRsp {

        /** Msg_DailyChallengeSweepRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeSweepRsp data */
        data?: (proto.IDailyChallengeData|null);
    }

    /** Represents a Msg_DailyChallengeSweepRsp. */
    class Msg_DailyChallengeSweepRsp implements IMsg_DailyChallengeSweepRsp {

        /**
         * Constructs a new Msg_DailyChallengeSweepRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeSweepRsp);

        /** Msg_DailyChallengeSweepRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeSweepRsp data. */
        public data?: (proto.IDailyChallengeData|null);

        /**
         * Encodes the specified Msg_DailyChallengeSweepRsp message. Does not implicitly {@link proto.Msg_DailyChallengeSweepRsp.verify|verify} messages.
         * @param m Msg_DailyChallengeSweepRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeSweepRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeSweepRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeSweepRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeSweepRsp;
    }

    /** Properties of a Msg_DailyChallengeWatchAdvReq. */
    interface IMsg_DailyChallengeWatchAdvReq {
    }

    /** Represents a Msg_DailyChallengeWatchAdvReq. */
    class Msg_DailyChallengeWatchAdvReq implements IMsg_DailyChallengeWatchAdvReq {

        /**
         * Constructs a new Msg_DailyChallengeWatchAdvReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeWatchAdvReq);

        /**
         * Encodes the specified Msg_DailyChallengeWatchAdvReq message. Does not implicitly {@link proto.Msg_DailyChallengeWatchAdvReq.verify|verify} messages.
         * @param m Msg_DailyChallengeWatchAdvReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeWatchAdvReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeWatchAdvReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeWatchAdvReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeWatchAdvReq;
    }

    /** Properties of a Msg_DailyChallengeWatchAdvRsp. */
    interface IMsg_DailyChallengeWatchAdvRsp {

        /** Msg_DailyChallengeWatchAdvRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeWatchAdvRsp data */
        data?: (proto.IDailyChallengeData|null);
    }

    /** Represents a Msg_DailyChallengeWatchAdvRsp. */
    class Msg_DailyChallengeWatchAdvRsp implements IMsg_DailyChallengeWatchAdvRsp {

        /**
         * Constructs a new Msg_DailyChallengeWatchAdvRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeWatchAdvRsp);

        /** Msg_DailyChallengeWatchAdvRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_DailyChallengeWatchAdvRsp data. */
        public data?: (proto.IDailyChallengeData|null);

        /**
         * Encodes the specified Msg_DailyChallengeWatchAdvRsp message. Does not implicitly {@link proto.Msg_DailyChallengeWatchAdvRsp.verify|verify} messages.
         * @param m Msg_DailyChallengeWatchAdvRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeWatchAdvRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeWatchAdvRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeWatchAdvRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeWatchAdvRsp;
    }

    /** Properties of a Msg_DailyChallengeDataPush. */
    interface IMsg_DailyChallengeDataPush {

        /** Msg_DailyChallengeDataPush data */
        data?: (proto.IDailyChallengeData|null);

        /** Msg_DailyChallengeDataPush bufferList */
        bufferList?: (number[]|null);
    }

    /** Represents a Msg_DailyChallengeDataPush. */
    class Msg_DailyChallengeDataPush implements IMsg_DailyChallengeDataPush {

        /**
         * Constructs a new Msg_DailyChallengeDataPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_DailyChallengeDataPush);

        /** Msg_DailyChallengeDataPush data. */
        public data?: (proto.IDailyChallengeData|null);

        /** Msg_DailyChallengeDataPush bufferList. */
        public bufferList: number[];

        /**
         * Encodes the specified Msg_DailyChallengeDataPush message. Does not implicitly {@link proto.Msg_DailyChallengeDataPush.verify|verify} messages.
         * @param m Msg_DailyChallengeDataPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_DailyChallengeDataPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_DailyChallengeDataPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_DailyChallengeDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_DailyChallengeDataPush;
    }

    /** Properties of a NewPlayerTrial. */
    interface INewPlayerTrial {

        /** NewPlayerTrial id */
        id?: (number|null);

        /** NewPlayerTrial unlockedDays */
        unlockedDays?: (number|null);

        /** NewPlayerTrial score */
        score?: (number|null);

        /** NewPlayerTrial tasks */
        tasks?: (proto.ITask[]|null);

        /** NewPlayerTrial receivedScoreIds */
        receivedScoreIds?: (number[]|null);

        /** NewPlayerTrial expireTime */
        expireTime?: (number|Long|null);
    }

    /** Represents a NewPlayerTrial. */
    class NewPlayerTrial implements INewPlayerTrial {

        /**
         * Constructs a new NewPlayerTrial.
         * @param [p] Properties to set
         */
        constructor(p?: proto.INewPlayerTrial);

        /** NewPlayerTrial id. */
        public id: number;

        /** NewPlayerTrial unlockedDays. */
        public unlockedDays: number;

        /** NewPlayerTrial score. */
        public score: number;

        /** NewPlayerTrial tasks. */
        public tasks: proto.ITask[];

        /** NewPlayerTrial receivedScoreIds. */
        public receivedScoreIds: number[];

        /** NewPlayerTrial expireTime. */
        public expireTime: (number|Long);

        /**
         * Encodes the specified NewPlayerTrial message. Does not implicitly {@link proto.NewPlayerTrial.verify|verify} messages.
         * @param m NewPlayerTrial message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.INewPlayerTrial, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a NewPlayerTrial message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns NewPlayerTrial
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.NewPlayerTrial;
    }

    /** Properties of a Msg_GetNewPlayerTrialMapReq. */
    interface IMsg_GetNewPlayerTrialMapReq {
    }

    /** Represents a Msg_GetNewPlayerTrialMapReq. */
    class Msg_GetNewPlayerTrialMapReq implements IMsg_GetNewPlayerTrialMapReq {

        /**
         * Constructs a new Msg_GetNewPlayerTrialMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetNewPlayerTrialMapReq);

        /**
         * Encodes the specified Msg_GetNewPlayerTrialMapReq message. Does not implicitly {@link proto.Msg_GetNewPlayerTrialMapReq.verify|verify} messages.
         * @param m Msg_GetNewPlayerTrialMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetNewPlayerTrialMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetNewPlayerTrialMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetNewPlayerTrialMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetNewPlayerTrialMapReq;
    }

    /** Properties of a Msg_GetNewPlayerTrialMapRsp. */
    interface IMsg_GetNewPlayerTrialMapRsp {

        /** Msg_GetNewPlayerTrialMapRsp newPlayerTrialMap */
        newPlayerTrialMap?: ({ [k: string]: proto.INewPlayerTrial }|null);
    }

    /** Represents a Msg_GetNewPlayerTrialMapRsp. */
    class Msg_GetNewPlayerTrialMapRsp implements IMsg_GetNewPlayerTrialMapRsp {

        /**
         * Constructs a new Msg_GetNewPlayerTrialMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetNewPlayerTrialMapRsp);

        /** Msg_GetNewPlayerTrialMapRsp newPlayerTrialMap. */
        public newPlayerTrialMap: { [k: string]: proto.INewPlayerTrial };

        /**
         * Encodes the specified Msg_GetNewPlayerTrialMapRsp message. Does not implicitly {@link proto.Msg_GetNewPlayerTrialMapRsp.verify|verify} messages.
         * @param m Msg_GetNewPlayerTrialMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetNewPlayerTrialMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetNewPlayerTrialMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetNewPlayerTrialMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetNewPlayerTrialMapRsp;
    }

    /** Properties of a Msg_ReceiveNewPlayerTrialTaskRewardsReq. */
    interface IMsg_ReceiveNewPlayerTrialTaskRewardsReq {

        /** Msg_ReceiveNewPlayerTrialTaskRewardsReq trialId */
        trialId?: (number|null);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsReq taskId */
        taskId?: (number|null);
    }

    /** Represents a Msg_ReceiveNewPlayerTrialTaskRewardsReq. */
    class Msg_ReceiveNewPlayerTrialTaskRewardsReq implements IMsg_ReceiveNewPlayerTrialTaskRewardsReq {

        /**
         * Constructs a new Msg_ReceiveNewPlayerTrialTaskRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveNewPlayerTrialTaskRewardsReq);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsReq trialId. */
        public trialId: number;

        /** Msg_ReceiveNewPlayerTrialTaskRewardsReq taskId. */
        public taskId: number;

        /**
         * Encodes the specified Msg_ReceiveNewPlayerTrialTaskRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveNewPlayerTrialTaskRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveNewPlayerTrialTaskRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveNewPlayerTrialTaskRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveNewPlayerTrialTaskRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveNewPlayerTrialTaskRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveNewPlayerTrialTaskRewardsReq;
    }

    /** Properties of a Msg_ReceiveNewPlayerTrialTaskRewardsRsp. */
    interface IMsg_ReceiveNewPlayerTrialTaskRewardsRsp {

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp trialId */
        trialId?: (number|null);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp taskId */
        taskId?: (number|null);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveNewPlayerTrialTaskRewardsRsp. */
    class Msg_ReceiveNewPlayerTrialTaskRewardsRsp implements IMsg_ReceiveNewPlayerTrialTaskRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveNewPlayerTrialTaskRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveNewPlayerTrialTaskRewardsRsp);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp trialId. */
        public trialId: number;

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp taskId. */
        public taskId: number;

        /** Msg_ReceiveNewPlayerTrialTaskRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveNewPlayerTrialTaskRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveNewPlayerTrialTaskRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveNewPlayerTrialTaskRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveNewPlayerTrialTaskRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveNewPlayerTrialTaskRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveNewPlayerTrialTaskRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveNewPlayerTrialTaskRewardsRsp;
    }

    /** Properties of a Msg_ReceiveNewPlayerTrialScoreRewardsReq. */
    interface IMsg_ReceiveNewPlayerTrialScoreRewardsReq {

        /** Msg_ReceiveNewPlayerTrialScoreRewardsReq scoreId */
        scoreId?: (number|null);
    }

    /** Represents a Msg_ReceiveNewPlayerTrialScoreRewardsReq. */
    class Msg_ReceiveNewPlayerTrialScoreRewardsReq implements IMsg_ReceiveNewPlayerTrialScoreRewardsReq {

        /**
         * Constructs a new Msg_ReceiveNewPlayerTrialScoreRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveNewPlayerTrialScoreRewardsReq);

        /** Msg_ReceiveNewPlayerTrialScoreRewardsReq scoreId. */
        public scoreId: number;

        /**
         * Encodes the specified Msg_ReceiveNewPlayerTrialScoreRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveNewPlayerTrialScoreRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveNewPlayerTrialScoreRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveNewPlayerTrialScoreRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveNewPlayerTrialScoreRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveNewPlayerTrialScoreRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveNewPlayerTrialScoreRewardsReq;
    }

    /** Properties of a Msg_ReceiveNewPlayerTrialScoreRewardsRsp. */
    interface IMsg_ReceiveNewPlayerTrialScoreRewardsRsp {

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp scoreId */
        scoreId?: (number|null);

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveNewPlayerTrialScoreRewardsRsp. */
    class Msg_ReceiveNewPlayerTrialScoreRewardsRsp implements IMsg_ReceiveNewPlayerTrialScoreRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveNewPlayerTrialScoreRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveNewPlayerTrialScoreRewardsRsp);

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp scoreId. */
        public scoreId: number;

        /** Msg_ReceiveNewPlayerTrialScoreRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveNewPlayerTrialScoreRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveNewPlayerTrialScoreRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveNewPlayerTrialScoreRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveNewPlayerTrialScoreRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveNewPlayerTrialScoreRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveNewPlayerTrialScoreRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveNewPlayerTrialScoreRewardsRsp;
    }

    /** Properties of a Msg_GetClimbTowerInfoReq. */
    interface IMsg_GetClimbTowerInfoReq {
    }

    /** Represents a Msg_GetClimbTowerInfoReq. */
    class Msg_GetClimbTowerInfoReq implements IMsg_GetClimbTowerInfoReq {

        /**
         * Constructs a new Msg_GetClimbTowerInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetClimbTowerInfoReq);

        /**
         * Encodes the specified Msg_GetClimbTowerInfoReq message. Does not implicitly {@link proto.Msg_GetClimbTowerInfoReq.verify|verify} messages.
         * @param m Msg_GetClimbTowerInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetClimbTowerInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetClimbTowerInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetClimbTowerInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetClimbTowerInfoReq;
    }

    /** Properties of a Msg_GetClimbTowerInfoRsp. */
    interface IMsg_GetClimbTowerInfoRsp {

        /** Msg_GetClimbTowerInfoRsp clearedStageIds */
        clearedStageIds?: (number[]|null);

        /** Msg_GetClimbTowerInfoRsp defeatTimes */
        defeatTimes?: (number|null);

        /** Msg_GetClimbTowerInfoRsp isReceivedDailyRewards */
        isReceivedDailyRewards?: (boolean|null);

        /** Msg_GetClimbTowerInfoRsp receivedFirstRewardStageIds */
        receivedFirstRewardStageIds?: (number[]|null);
    }

    /** Represents a Msg_GetClimbTowerInfoRsp. */
    class Msg_GetClimbTowerInfoRsp implements IMsg_GetClimbTowerInfoRsp {

        /**
         * Constructs a new Msg_GetClimbTowerInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetClimbTowerInfoRsp);

        /** Msg_GetClimbTowerInfoRsp clearedStageIds. */
        public clearedStageIds: number[];

        /** Msg_GetClimbTowerInfoRsp defeatTimes. */
        public defeatTimes: number;

        /** Msg_GetClimbTowerInfoRsp isReceivedDailyRewards. */
        public isReceivedDailyRewards: boolean;

        /** Msg_GetClimbTowerInfoRsp receivedFirstRewardStageIds. */
        public receivedFirstRewardStageIds: number[];

        /**
         * Encodes the specified Msg_GetClimbTowerInfoRsp message. Does not implicitly {@link proto.Msg_GetClimbTowerInfoRsp.verify|verify} messages.
         * @param m Msg_GetClimbTowerInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetClimbTowerInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetClimbTowerInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetClimbTowerInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetClimbTowerInfoRsp;
    }

    /** Properties of a Msg_ReceiveClimbTowerDailyRewardsReq. */
    interface IMsg_ReceiveClimbTowerDailyRewardsReq {
    }

    /** Represents a Msg_ReceiveClimbTowerDailyRewardsReq. */
    class Msg_ReceiveClimbTowerDailyRewardsReq implements IMsg_ReceiveClimbTowerDailyRewardsReq {

        /**
         * Constructs a new Msg_ReceiveClimbTowerDailyRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveClimbTowerDailyRewardsReq);

        /**
         * Encodes the specified Msg_ReceiveClimbTowerDailyRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveClimbTowerDailyRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveClimbTowerDailyRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveClimbTowerDailyRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveClimbTowerDailyRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveClimbTowerDailyRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveClimbTowerDailyRewardsReq;
    }

    /** Properties of a Msg_ReceiveClimbTowerDailyRewardsRsp. */
    interface IMsg_ReceiveClimbTowerDailyRewardsRsp {

        /** Msg_ReceiveClimbTowerDailyRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveClimbTowerDailyRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveClimbTowerDailyRewardsRsp. */
    class Msg_ReceiveClimbTowerDailyRewardsRsp implements IMsg_ReceiveClimbTowerDailyRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveClimbTowerDailyRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveClimbTowerDailyRewardsRsp);

        /** Msg_ReceiveClimbTowerDailyRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveClimbTowerDailyRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveClimbTowerDailyRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveClimbTowerDailyRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveClimbTowerDailyRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveClimbTowerDailyRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveClimbTowerDailyRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveClimbTowerDailyRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveClimbTowerDailyRewardsRsp;
    }

    /** Properties of a Msg_ReceiveClimbTowerClearStageRewardsReq. */
    interface IMsg_ReceiveClimbTowerClearStageRewardsReq {

        /** Msg_ReceiveClimbTowerClearStageRewardsReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_ReceiveClimbTowerClearStageRewardsReq. */
    class Msg_ReceiveClimbTowerClearStageRewardsReq implements IMsg_ReceiveClimbTowerClearStageRewardsReq {

        /**
         * Constructs a new Msg_ReceiveClimbTowerClearStageRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveClimbTowerClearStageRewardsReq);

        /** Msg_ReceiveClimbTowerClearStageRewardsReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_ReceiveClimbTowerClearStageRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveClimbTowerClearStageRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveClimbTowerClearStageRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveClimbTowerClearStageRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveClimbTowerClearStageRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveClimbTowerClearStageRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveClimbTowerClearStageRewardsReq;
    }

    /** Properties of a Msg_ReceiveClimbTowerClearStageRewardsRsp. */
    interface IMsg_ReceiveClimbTowerClearStageRewardsRsp {

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp stageId */
        stageId?: (number|null);

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveClimbTowerClearStageRewardsRsp. */
    class Msg_ReceiveClimbTowerClearStageRewardsRsp implements IMsg_ReceiveClimbTowerClearStageRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveClimbTowerClearStageRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveClimbTowerClearStageRewardsRsp);

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp stageId. */
        public stageId: number;

        /** Msg_ReceiveClimbTowerClearStageRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveClimbTowerClearStageRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveClimbTowerClearStageRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveClimbTowerClearStageRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveClimbTowerClearStageRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveClimbTowerClearStageRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveClimbTowerClearStageRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveClimbTowerClearStageRewardsRsp;
    }

    /** Properties of a Msg_QuickFinishClimbTowerStageReq. */
    interface IMsg_QuickFinishClimbTowerStageReq {

        /** Msg_QuickFinishClimbTowerStageReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_QuickFinishClimbTowerStageReq. */
    class Msg_QuickFinishClimbTowerStageReq implements IMsg_QuickFinishClimbTowerStageReq {

        /**
         * Constructs a new Msg_QuickFinishClimbTowerStageReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuickFinishClimbTowerStageReq);

        /** Msg_QuickFinishClimbTowerStageReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_QuickFinishClimbTowerStageReq message. Does not implicitly {@link proto.Msg_QuickFinishClimbTowerStageReq.verify|verify} messages.
         * @param m Msg_QuickFinishClimbTowerStageReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuickFinishClimbTowerStageReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuickFinishClimbTowerStageReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuickFinishClimbTowerStageReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuickFinishClimbTowerStageReq;
    }

    /** Properties of a Msg_QuickFinishClimbTowerStageRsp. */
    interface IMsg_QuickFinishClimbTowerStageRsp {

        /** Msg_QuickFinishClimbTowerStageRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_QuickFinishClimbTowerStageRsp stageId */
        stageId?: (number|null);

        /** Msg_QuickFinishClimbTowerStageRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_QuickFinishClimbTowerStageRsp. */
    class Msg_QuickFinishClimbTowerStageRsp implements IMsg_QuickFinishClimbTowerStageRsp {

        /**
         * Constructs a new Msg_QuickFinishClimbTowerStageRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuickFinishClimbTowerStageRsp);

        /** Msg_QuickFinishClimbTowerStageRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_QuickFinishClimbTowerStageRsp stageId. */
        public stageId: number;

        /** Msg_QuickFinishClimbTowerStageRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_QuickFinishClimbTowerStageRsp message. Does not implicitly {@link proto.Msg_QuickFinishClimbTowerStageRsp.verify|verify} messages.
         * @param m Msg_QuickFinishClimbTowerStageRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuickFinishClimbTowerStageRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuickFinishClimbTowerStageRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuickFinishClimbTowerStageRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuickFinishClimbTowerStageRsp;
    }

    /** Properties of a Msg_UnlockedHeroAlbumPush. */
    interface IMsg_UnlockedHeroAlbumPush {

        /** Msg_UnlockedHeroAlbumPush heroItemId */
        heroItemId?: (number|null);
    }

    /** Represents a Msg_UnlockedHeroAlbumPush. */
    class Msg_UnlockedHeroAlbumPush implements IMsg_UnlockedHeroAlbumPush {

        /**
         * Constructs a new Msg_UnlockedHeroAlbumPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UnlockedHeroAlbumPush);

        /** Msg_UnlockedHeroAlbumPush heroItemId. */
        public heroItemId: number;

        /**
         * Encodes the specified Msg_UnlockedHeroAlbumPush message. Does not implicitly {@link proto.Msg_UnlockedHeroAlbumPush.verify|verify} messages.
         * @param m Msg_UnlockedHeroAlbumPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UnlockedHeroAlbumPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UnlockedHeroAlbumPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UnlockedHeroAlbumPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UnlockedHeroAlbumPush;
    }

    /** Properties of a Msg_ChangedNewPlayerTrialScorePush. */
    interface IMsg_ChangedNewPlayerTrialScorePush {

        /** Msg_ChangedNewPlayerTrialScorePush newPlayerTrialId */
        newPlayerTrialId?: (number|null);

        /** Msg_ChangedNewPlayerTrialScorePush score */
        score?: (number|null);
    }

    /** Represents a Msg_ChangedNewPlayerTrialScorePush. */
    class Msg_ChangedNewPlayerTrialScorePush implements IMsg_ChangedNewPlayerTrialScorePush {

        /**
         * Constructs a new Msg_ChangedNewPlayerTrialScorePush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangedNewPlayerTrialScorePush);

        /** Msg_ChangedNewPlayerTrialScorePush newPlayerTrialId. */
        public newPlayerTrialId: number;

        /** Msg_ChangedNewPlayerTrialScorePush score. */
        public score: number;

        /**
         * Encodes the specified Msg_ChangedNewPlayerTrialScorePush message. Does not implicitly {@link proto.Msg_ChangedNewPlayerTrialScorePush.verify|verify} messages.
         * @param m Msg_ChangedNewPlayerTrialScorePush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangedNewPlayerTrialScorePush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangedNewPlayerTrialScorePush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangedNewPlayerTrialScorePush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangedNewPlayerTrialScorePush;
    }

    /** Properties of an HonorRoll. */
    interface IHonorRoll {

        /** HonorRoll activityId */
        activityId?: (number|null);

        /** HonorRoll activityEndTime */
        activityEndTime?: (number|Long|null);

        /** HonorRoll tasks */
        tasks?: (proto.ITask[]|null);
    }

    /** Represents an HonorRoll. */
    class HonorRoll implements IHonorRoll {

        /**
         * Constructs a new HonorRoll.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHonorRoll);

        /** HonorRoll activityId. */
        public activityId: number;

        /** HonorRoll activityEndTime. */
        public activityEndTime: (number|Long);

        /** HonorRoll tasks. */
        public tasks: proto.ITask[];

        /**
         * Encodes the specified HonorRoll message. Does not implicitly {@link proto.HonorRoll.verify|verify} messages.
         * @param m HonorRoll message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHonorRoll, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an HonorRoll message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HonorRoll
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HonorRoll;
    }

    /** Properties of a Msg_GetHonorRollMapReq. */
    interface IMsg_GetHonorRollMapReq {
    }

    /** Represents a Msg_GetHonorRollMapReq. */
    class Msg_GetHonorRollMapReq implements IMsg_GetHonorRollMapReq {

        /**
         * Constructs a new Msg_GetHonorRollMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHonorRollMapReq);

        /**
         * Encodes the specified Msg_GetHonorRollMapReq message. Does not implicitly {@link proto.Msg_GetHonorRollMapReq.verify|verify} messages.
         * @param m Msg_GetHonorRollMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHonorRollMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHonorRollMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHonorRollMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHonorRollMapReq;
    }

    /** Properties of a Msg_GetHonorRollMapRsp. */
    interface IMsg_GetHonorRollMapRsp {

        /** Msg_GetHonorRollMapRsp honorRollMap */
        honorRollMap?: ({ [k: string]: proto.IHonorRoll }|null);
    }

    /** Represents a Msg_GetHonorRollMapRsp. */
    class Msg_GetHonorRollMapRsp implements IMsg_GetHonorRollMapRsp {

        /**
         * Constructs a new Msg_GetHonorRollMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetHonorRollMapRsp);

        /** Msg_GetHonorRollMapRsp honorRollMap. */
        public honorRollMap: { [k: string]: proto.IHonorRoll };

        /**
         * Encodes the specified Msg_GetHonorRollMapRsp message. Does not implicitly {@link proto.Msg_GetHonorRollMapRsp.verify|verify} messages.
         * @param m Msg_GetHonorRollMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetHonorRollMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetHonorRollMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetHonorRollMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetHonorRollMapRsp;
    }

    /** Properties of a Msg_ReceiveHonorRollTasksRewardsReq. */
    interface IMsg_ReceiveHonorRollTasksRewardsReq {

        /** Msg_ReceiveHonorRollTasksRewardsReq activityId */
        activityId?: (number|null);

        /** Msg_ReceiveHonorRollTasksRewardsReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveHonorRollTasksRewardsReq. */
    class Msg_ReceiveHonorRollTasksRewardsReq implements IMsg_ReceiveHonorRollTasksRewardsReq {

        /**
         * Constructs a new Msg_ReceiveHonorRollTasksRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHonorRollTasksRewardsReq);

        /** Msg_ReceiveHonorRollTasksRewardsReq activityId. */
        public activityId: number;

        /** Msg_ReceiveHonorRollTasksRewardsReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveHonorRollTasksRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveHonorRollTasksRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveHonorRollTasksRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHonorRollTasksRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHonorRollTasksRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHonorRollTasksRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHonorRollTasksRewardsReq;
    }

    /** Properties of a Msg_ReceiveHonorRollTasksRewardsRsp. */
    interface IMsg_ReceiveHonorRollTasksRewardsRsp {

        /** Msg_ReceiveHonorRollTasksRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveHonorRollTasksRewardsRsp activityId */
        activityId?: (number|null);

        /** Msg_ReceiveHonorRollTasksRewardsRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveHonorRollTasksRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveHonorRollTasksRewardsRsp. */
    class Msg_ReceiveHonorRollTasksRewardsRsp implements IMsg_ReceiveHonorRollTasksRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveHonorRollTasksRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveHonorRollTasksRewardsRsp);

        /** Msg_ReceiveHonorRollTasksRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveHonorRollTasksRewardsRsp activityId. */
        public activityId: number;

        /** Msg_ReceiveHonorRollTasksRewardsRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveHonorRollTasksRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveHonorRollTasksRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveHonorRollTasksRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveHonorRollTasksRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveHonorRollTasksRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveHonorRollTasksRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveHonorRollTasksRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveHonorRollTasksRewardsRsp;
    }

    /** Properties of an Activity. */
    interface IActivity {

        /** Activity TabId */
        TabId?: (number|null);

        /** Activity startTime */
        startTime?: (number|Long|null);

        /** Activity endTime */
        endTime?: (number|Long|null);
    }

    /** Represents an Activity. */
    class Activity implements IActivity {

        /**
         * Constructs a new Activity.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IActivity);

        /** Activity TabId. */
        public TabId: number;

        /** Activity startTime. */
        public startTime: (number|Long);

        /** Activity endTime. */
        public endTime: (number|Long);

        /**
         * Encodes the specified Activity message. Does not implicitly {@link proto.Activity.verify|verify} messages.
         * @param m Activity message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IActivity, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes an Activity message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Activity
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Activity;
    }

    /** Properties of a Msg_ActivitiesPush. */
    interface IMsg_ActivitiesPush {

        /** Msg_ActivitiesPush activities */
        activities?: (proto.IActivity[]|null);
    }

    /** Represents a Msg_ActivitiesPush. */
    class Msg_ActivitiesPush implements IMsg_ActivitiesPush {

        /**
         * Constructs a new Msg_ActivitiesPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ActivitiesPush);

        /** Msg_ActivitiesPush activities. */
        public activities: proto.IActivity[];

        /**
         * Encodes the specified Msg_ActivitiesPush message. Does not implicitly {@link proto.Msg_ActivitiesPush.verify|verify} messages.
         * @param m Msg_ActivitiesPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ActivitiesPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ActivitiesPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ActivitiesPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ActivitiesPush;
    }

    /** Properties of a Msg_SetClientDataReq. */
    interface IMsg_SetClientDataReq {

        /** Msg_SetClientDataReq key */
        key?: (string|null);

        /** Msg_SetClientDataReq data */
        data?: (string|null);
    }

    /** Represents a Msg_SetClientDataReq. */
    class Msg_SetClientDataReq implements IMsg_SetClientDataReq {

        /**
         * Constructs a new Msg_SetClientDataReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetClientDataReq);

        /** Msg_SetClientDataReq key. */
        public key: string;

        /** Msg_SetClientDataReq data. */
        public data: string;

        /**
         * Encodes the specified Msg_SetClientDataReq message. Does not implicitly {@link proto.Msg_SetClientDataReq.verify|verify} messages.
         * @param m Msg_SetClientDataReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetClientDataReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetClientDataReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetClientDataReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetClientDataReq;
    }

    /** Properties of a Msg_SetClientDataRsp. */
    interface IMsg_SetClientDataRsp {

        /** Msg_SetClientDataRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_SetClientDataRsp. */
    class Msg_SetClientDataRsp implements IMsg_SetClientDataRsp {

        /**
         * Constructs a new Msg_SetClientDataRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetClientDataRsp);

        /** Msg_SetClientDataRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_SetClientDataRsp message. Does not implicitly {@link proto.Msg_SetClientDataRsp.verify|verify} messages.
         * @param m Msg_SetClientDataRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetClientDataRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetClientDataRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetClientDataRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetClientDataRsp;
    }

    /** Properties of a Msg_ChangedScrollPaintingPush. */
    interface IMsg_ChangedScrollPaintingPush {

        /** Msg_ChangedScrollPaintingPush painting */
        painting?: (proto.IScrollPainting|null);
    }

    /** Represents a Msg_ChangedScrollPaintingPush. */
    class Msg_ChangedScrollPaintingPush implements IMsg_ChangedScrollPaintingPush {

        /**
         * Constructs a new Msg_ChangedScrollPaintingPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ChangedScrollPaintingPush);

        /** Msg_ChangedScrollPaintingPush painting. */
        public painting?: (proto.IScrollPainting|null);

        /**
         * Encodes the specified Msg_ChangedScrollPaintingPush message. Does not implicitly {@link proto.Msg_ChangedScrollPaintingPush.verify|verify} messages.
         * @param m Msg_ChangedScrollPaintingPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ChangedScrollPaintingPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ChangedScrollPaintingPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ChangedScrollPaintingPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ChangedScrollPaintingPush;
    }

    /** Properties of a Msg_GetServerTimeReq. */
    interface IMsg_GetServerTimeReq {

        /** Msg_GetServerTimeReq clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a Msg_GetServerTimeReq. */
    class Msg_GetServerTimeReq implements IMsg_GetServerTimeReq {

        /**
         * Constructs a new Msg_GetServerTimeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetServerTimeReq);

        /** Msg_GetServerTimeReq clientTime. */
        public clientTime: (number|Long);

        /**
         * Encodes the specified Msg_GetServerTimeReq message. Does not implicitly {@link proto.Msg_GetServerTimeReq.verify|verify} messages.
         * @param m Msg_GetServerTimeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetServerTimeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetServerTimeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetServerTimeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetServerTimeReq;
    }

    /** Properties of a Msg_GetServerTimeRsp. */
    interface IMsg_GetServerTimeRsp {

        /** Msg_GetServerTimeRsp serverTime */
        serverTime?: (number|Long|null);

        /** Msg_GetServerTimeRsp clientTime */
        clientTime?: (number|Long|null);
    }

    /** Represents a Msg_GetServerTimeRsp. */
    class Msg_GetServerTimeRsp implements IMsg_GetServerTimeRsp {

        /**
         * Constructs a new Msg_GetServerTimeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetServerTimeRsp);

        /** Msg_GetServerTimeRsp serverTime. */
        public serverTime: (number|Long);

        /** Msg_GetServerTimeRsp clientTime. */
        public clientTime: (number|Long);

        /**
         * Encodes the specified Msg_GetServerTimeRsp message. Does not implicitly {@link proto.Msg_GetServerTimeRsp.verify|verify} messages.
         * @param m Msg_GetServerTimeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetServerTimeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetServerTimeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetServerTimeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetServerTimeRsp;
    }

    /** Properties of a Msg_PingDelay. */
    interface IMsg_PingDelay {

        /** Msg_PingDelay delay */
        delay?: (number|null);
    }

    /** Represents a Msg_PingDelay. */
    class Msg_PingDelay implements IMsg_PingDelay {

        /**
         * Constructs a new Msg_PingDelay.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PingDelay);

        /** Msg_PingDelay delay. */
        public delay: number;

        /**
         * Encodes the specified Msg_PingDelay message. Does not implicitly {@link proto.Msg_PingDelay.verify|verify} messages.
         * @param m Msg_PingDelay message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PingDelay, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PingDelay message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PingDelay
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PingDelay;
    }

    /** Properties of a SimpleGuild. */
    interface ISimpleGuild {

        /** SimpleGuild id */
        id?: (string|null);

        /** SimpleGuild areaId */
        areaId?: (number|null);

        /** SimpleGuild name */
        name?: (string|null);

        /** SimpleGuild leaderId */
        leaderId?: (string|null);

        /** SimpleGuild leaderName */
        leaderName?: (string|null);

        /** SimpleGuild flagId */
        flagId?: (number|null);

        /** SimpleGuild level */
        level?: (number|null);

        /** SimpleGuild exp */
        exp?: (number|null);

        /** SimpleGuild notice */
        notice?: (string|null);

        /** SimpleGuild createTime */
        createTime?: (number|Long|null);

        /** SimpleGuild memberCount */
        memberCount?: (number|null);

        /** SimpleGuild powerScore */
        powerScore?: (number|null);

        /** SimpleGuild needCheck */
        needCheck?: (boolean|null);
    }

    /** Represents a SimpleGuild. */
    class SimpleGuild implements ISimpleGuild {

        /**
         * Constructs a new SimpleGuild.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ISimpleGuild);

        /** SimpleGuild id. */
        public id: string;

        /** SimpleGuild areaId. */
        public areaId: number;

        /** SimpleGuild name. */
        public name: string;

        /** SimpleGuild leaderId. */
        public leaderId: string;

        /** SimpleGuild leaderName. */
        public leaderName: string;

        /** SimpleGuild flagId. */
        public flagId: number;

        /** SimpleGuild level. */
        public level: number;

        /** SimpleGuild exp. */
        public exp: number;

        /** SimpleGuild notice. */
        public notice: string;

        /** SimpleGuild createTime. */
        public createTime: (number|Long);

        /** SimpleGuild memberCount. */
        public memberCount: number;

        /** SimpleGuild powerScore. */
        public powerScore: number;

        /** SimpleGuild needCheck. */
        public needCheck: boolean;

        /**
         * Encodes the specified SimpleGuild message. Does not implicitly {@link proto.SimpleGuild.verify|verify} messages.
         * @param m SimpleGuild message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ISimpleGuild, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a SimpleGuild message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns SimpleGuild
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.SimpleGuild;
    }

    /** Properties of a GuildMember. */
    interface IGuildMember {

        /** GuildMember roleId */
        roleId?: (string|null);

        /** GuildMember job */
        job?: (number|null);

        /** GuildMember joinTime */
        joinTime?: (number|Long|null);

        /** GuildMember name */
        name?: (string|null);

        /** GuildMember powerScore */
        powerScore?: (number|null);

        /** GuildMember headIcon */
        headIcon?: (number|null);

        /** GuildMember headFrame */
        headFrame?: (number|null);

        /** GuildMember lastLoginTime */
        lastLoginTime?: (number|Long|null);

        /** GuildMember lastLogoutTime */
        lastLogoutTime?: (number|Long|null);

        /** GuildMember level */
        level?: (number|null);

        /** GuildMember contribution */
        contribution?: (number|null);

        /** GuildMember highestHeroItemId */
        highestHeroItemId?: (number|null);

        /** GuildMember kickOutMemberCount */
        kickOutMemberCount?: (number|null);
    }

    /** Represents a GuildMember. */
    class GuildMember implements IGuildMember {

        /**
         * Constructs a new GuildMember.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGuildMember);

        /** GuildMember roleId. */
        public roleId: string;

        /** GuildMember job. */
        public job: number;

        /** GuildMember joinTime. */
        public joinTime: (number|Long);

        /** GuildMember name. */
        public name: string;

        /** GuildMember powerScore. */
        public powerScore: number;

        /** GuildMember headIcon. */
        public headIcon: number;

        /** GuildMember headFrame. */
        public headFrame: number;

        /** GuildMember lastLoginTime. */
        public lastLoginTime: (number|Long);

        /** GuildMember lastLogoutTime. */
        public lastLogoutTime: (number|Long);

        /** GuildMember level. */
        public level: number;

        /** GuildMember contribution. */
        public contribution: number;

        /** GuildMember highestHeroItemId. */
        public highestHeroItemId: number;

        /** GuildMember kickOutMemberCount. */
        public kickOutMemberCount: number;

        /**
         * Encodes the specified GuildMember message. Does not implicitly {@link proto.GuildMember.verify|verify} messages.
         * @param m GuildMember message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGuildMember, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildMember message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GuildMember
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GuildMember;
    }

    /** Properties of a BargainRecord. */
    interface IBargainRecord {

        /** BargainRecord roleId */
        roleId?: (string|null);

        /** BargainRecord roleName */
        roleName?: (string|null);

        /** BargainRecord bargainNum */
        bargainNum?: (number|null);
    }

    /** Represents a BargainRecord. */
    class BargainRecord implements IBargainRecord {

        /**
         * Constructs a new BargainRecord.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IBargainRecord);

        /** BargainRecord roleId. */
        public roleId: string;

        /** BargainRecord roleName. */
        public roleName: string;

        /** BargainRecord bargainNum. */
        public bargainNum: number;

        /**
         * Encodes the specified BargainRecord message. Does not implicitly {@link proto.BargainRecord.verify|verify} messages.
         * @param m BargainRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IBargainRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a BargainRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns BargainRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.BargainRecord;
    }

    /** Properties of a GuildGift. */
    interface IGuildGift {

        /** GuildGift id */
        id?: (number|Long|null);

        /** GuildGift tabId */
        tabId?: (number|null);

        /** GuildGift bargainRecords */
        bargainRecords?: (proto.IBargainRecord[]|null);

        /** GuildGift expireTime */
        expireTime?: (number|Long|null);
    }

    /** Represents a GuildGift. */
    class GuildGift implements IGuildGift {

        /**
         * Constructs a new GuildGift.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGuildGift);

        /** GuildGift id. */
        public id: (number|Long);

        /** GuildGift tabId. */
        public tabId: number;

        /** GuildGift bargainRecords. */
        public bargainRecords: proto.IBargainRecord[];

        /** GuildGift expireTime. */
        public expireTime: (number|Long);

        /**
         * Encodes the specified GuildGift message. Does not implicitly {@link proto.GuildGift.verify|verify} messages.
         * @param m GuildGift message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGuildGift, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildGift message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GuildGift
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GuildGift;
    }

    /** Properties of a GuildLog. */
    interface IGuildLog {

        /** GuildLog roleName */
        roleName?: (string|null);

        /** GuildLog event */
        event?: (number|null);

        /** GuildLog time */
        time?: (number|Long|null);
    }

    /** Represents a GuildLog. */
    class GuildLog implements IGuildLog {

        /**
         * Constructs a new GuildLog.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGuildLog);

        /** GuildLog roleName. */
        public roleName: string;

        /** GuildLog event. */
        public event: number;

        /** GuildLog time. */
        public time: (number|Long);

        /**
         * Encodes the specified GuildLog message. Does not implicitly {@link proto.GuildLog.verify|verify} messages.
         * @param m GuildLog message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGuildLog, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildLog message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GuildLog
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GuildLog;
    }

    /** Properties of a GuildInfo. */
    interface IGuildInfo {

        /** GuildInfo simple */
        simple?: (proto.ISimpleGuild|null);

        /** GuildInfo members */
        members?: (proto.IGuildMember[]|null);

        /** GuildInfo gifts */
        gifts?: (proto.IGuildGift[]|null);

        /** GuildInfo dailyFinishedTaskNumber */
        dailyFinishedTaskNumber?: (number|null);

        /** GuildInfo signTimes */
        signTimes?: (number|null);

        /** GuildInfo receivedActivityIndexes */
        receivedActivityIndexes?: (number[]|null);

        /** GuildInfo skillLevelMap */
        skillLevelMap?: ({ [k: string]: number }|null);

        /** GuildInfo notAllowJoinTime */
        notAllowJoinTime?: (number|Long|null);

        /** GuildInfo lastGetRecommendGuildsTime */
        lastGetRecommendGuildsTime?: (number|Long|null);

        /** GuildInfo logs */
        logs?: (proto.IGuildLog[]|null);

        /** GuildInfo tasks */
        tasks?: (proto.ITask[]|null);

        /** GuildInfo boughtUpLevelGiftTabIds */
        boughtUpLevelGiftTabIds?: (number[]|null);

        /** GuildInfo isBoughtCycleGift */
        isBoughtCycleGift?: (boolean|null);

        /** GuildInfo taskChestLevel */
        taskChestLevel?: (number|null);

        /** GuildInfo isBanNotice */
        isBanNotice?: (boolean|null);
    }

    /** Represents a GuildInfo. */
    class GuildInfo implements IGuildInfo {

        /**
         * Constructs a new GuildInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGuildInfo);

        /** GuildInfo simple. */
        public simple?: (proto.ISimpleGuild|null);

        /** GuildInfo members. */
        public members: proto.IGuildMember[];

        /** GuildInfo gifts. */
        public gifts: proto.IGuildGift[];

        /** GuildInfo dailyFinishedTaskNumber. */
        public dailyFinishedTaskNumber: number;

        /** GuildInfo signTimes. */
        public signTimes: number;

        /** GuildInfo receivedActivityIndexes. */
        public receivedActivityIndexes: number[];

        /** GuildInfo skillLevelMap. */
        public skillLevelMap: { [k: string]: number };

        /** GuildInfo notAllowJoinTime. */
        public notAllowJoinTime: (number|Long);

        /** GuildInfo lastGetRecommendGuildsTime. */
        public lastGetRecommendGuildsTime: (number|Long);

        /** GuildInfo logs. */
        public logs: proto.IGuildLog[];

        /** GuildInfo tasks. */
        public tasks: proto.ITask[];

        /** GuildInfo boughtUpLevelGiftTabIds. */
        public boughtUpLevelGiftTabIds: number[];

        /** GuildInfo isBoughtCycleGift. */
        public isBoughtCycleGift: boolean;

        /** GuildInfo taskChestLevel. */
        public taskChestLevel: number;

        /** GuildInfo isBanNotice. */
        public isBanNotice: boolean;

        /**
         * Encodes the specified GuildInfo message. Does not implicitly {@link proto.GuildInfo.verify|verify} messages.
         * @param m GuildInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGuildInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GuildInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GuildInfo;
    }

    /** Properties of a Msg_GetRecommendGuildsReq. */
    interface IMsg_GetRecommendGuildsReq {
    }

    /** Represents a Msg_GetRecommendGuildsReq. */
    class Msg_GetRecommendGuildsReq implements IMsg_GetRecommendGuildsReq {

        /**
         * Constructs a new Msg_GetRecommendGuildsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRecommendGuildsReq);

        /**
         * Encodes the specified Msg_GetRecommendGuildsReq message. Does not implicitly {@link proto.Msg_GetRecommendGuildsReq.verify|verify} messages.
         * @param m Msg_GetRecommendGuildsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRecommendGuildsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRecommendGuildsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRecommendGuildsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRecommendGuildsReq;
    }

    /** Properties of a Msg_GetRecommendGuildsRsp. */
    interface IMsg_GetRecommendGuildsRsp {

        /** Msg_GetRecommendGuildsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetRecommendGuildsRsp guilds */
        guilds?: (proto.ISimpleGuild[]|null);
    }

    /** Represents a Msg_GetRecommendGuildsRsp. */
    class Msg_GetRecommendGuildsRsp implements IMsg_GetRecommendGuildsRsp {

        /**
         * Constructs a new Msg_GetRecommendGuildsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetRecommendGuildsRsp);

        /** Msg_GetRecommendGuildsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetRecommendGuildsRsp guilds. */
        public guilds: proto.ISimpleGuild[];

        /**
         * Encodes the specified Msg_GetRecommendGuildsRsp message. Does not implicitly {@link proto.Msg_GetRecommendGuildsRsp.verify|verify} messages.
         * @param m Msg_GetRecommendGuildsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetRecommendGuildsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetRecommendGuildsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetRecommendGuildsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetRecommendGuildsRsp;
    }

    /** Properties of a Msg_GetGuildInfoReq. */
    interface IMsg_GetGuildInfoReq {
    }

    /** Represents a Msg_GetGuildInfoReq. */
    class Msg_GetGuildInfoReq implements IMsg_GetGuildInfoReq {

        /**
         * Constructs a new Msg_GetGuildInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildInfoReq);

        /**
         * Encodes the specified Msg_GetGuildInfoReq message. Does not implicitly {@link proto.Msg_GetGuildInfoReq.verify|verify} messages.
         * @param m Msg_GetGuildInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildInfoReq;
    }

    /** Properties of a Msg_GetGuildInfoRsp. */
    interface IMsg_GetGuildInfoRsp {

        /** Msg_GetGuildInfoRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetGuildInfoRsp guild */
        guild?: (proto.IGuildInfo|null);
    }

    /** Represents a Msg_GetGuildInfoRsp. */
    class Msg_GetGuildInfoRsp implements IMsg_GetGuildInfoRsp {

        /**
         * Constructs a new Msg_GetGuildInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildInfoRsp);

        /** Msg_GetGuildInfoRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetGuildInfoRsp guild. */
        public guild?: (proto.IGuildInfo|null);

        /**
         * Encodes the specified Msg_GetGuildInfoRsp message. Does not implicitly {@link proto.Msg_GetGuildInfoRsp.verify|verify} messages.
         * @param m Msg_GetGuildInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildInfoRsp;
    }

    /** Properties of a Msg_CreateGuildReq. */
    interface IMsg_CreateGuildReq {

        /** Msg_CreateGuildReq name */
        name?: (string|null);

        /** Msg_CreateGuildReq flagId */
        flagId?: (number|null);

        /** Msg_CreateGuildReq notice */
        notice?: (string|null);

        /** Msg_CreateGuildReq needCheck */
        needCheck?: (boolean|null);
    }

    /** Represents a Msg_CreateGuildReq. */
    class Msg_CreateGuildReq implements IMsg_CreateGuildReq {

        /**
         * Constructs a new Msg_CreateGuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateGuildReq);

        /** Msg_CreateGuildReq name. */
        public name: string;

        /** Msg_CreateGuildReq flagId. */
        public flagId: number;

        /** Msg_CreateGuildReq notice. */
        public notice: string;

        /** Msg_CreateGuildReq needCheck. */
        public needCheck: boolean;

        /**
         * Encodes the specified Msg_CreateGuildReq message. Does not implicitly {@link proto.Msg_CreateGuildReq.verify|verify} messages.
         * @param m Msg_CreateGuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateGuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateGuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateGuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateGuildReq;
    }

    /** Properties of a Msg_CreateGuildRsp. */
    interface IMsg_CreateGuildRsp {

        /** Msg_CreateGuildRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_CreateGuildRsp guild */
        guild?: (proto.IGuildInfo|null);
    }

    /** Represents a Msg_CreateGuildRsp. */
    class Msg_CreateGuildRsp implements IMsg_CreateGuildRsp {

        /**
         * Constructs a new Msg_CreateGuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_CreateGuildRsp);

        /** Msg_CreateGuildRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_CreateGuildRsp guild. */
        public guild?: (proto.IGuildInfo|null);

        /**
         * Encodes the specified Msg_CreateGuildRsp message. Does not implicitly {@link proto.Msg_CreateGuildRsp.verify|verify} messages.
         * @param m Msg_CreateGuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_CreateGuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_CreateGuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_CreateGuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_CreateGuildRsp;
    }

    /** Properties of a Msg_ApplyJoinGuildReq. */
    interface IMsg_ApplyJoinGuildReq {

        /** Msg_ApplyJoinGuildReq guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_ApplyJoinGuildReq. */
    class Msg_ApplyJoinGuildReq implements IMsg_ApplyJoinGuildReq {

        /**
         * Constructs a new Msg_ApplyJoinGuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ApplyJoinGuildReq);

        /** Msg_ApplyJoinGuildReq guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_ApplyJoinGuildReq message. Does not implicitly {@link proto.Msg_ApplyJoinGuildReq.verify|verify} messages.
         * @param m Msg_ApplyJoinGuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ApplyJoinGuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ApplyJoinGuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ApplyJoinGuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ApplyJoinGuildReq;
    }

    /** Properties of a Msg_ApplyJoinGuildRsp. */
    interface IMsg_ApplyJoinGuildRsp {

        /** Msg_ApplyJoinGuildRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ApplyJoinGuildRsp guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_ApplyJoinGuildRsp. */
    class Msg_ApplyJoinGuildRsp implements IMsg_ApplyJoinGuildRsp {

        /**
         * Constructs a new Msg_ApplyJoinGuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ApplyJoinGuildRsp);

        /** Msg_ApplyJoinGuildRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ApplyJoinGuildRsp guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_ApplyJoinGuildRsp message. Does not implicitly {@link proto.Msg_ApplyJoinGuildRsp.verify|verify} messages.
         * @param m Msg_ApplyJoinGuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ApplyJoinGuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ApplyJoinGuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ApplyJoinGuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ApplyJoinGuildRsp;
    }

    /** Properties of a Msg_ApplyJoinGuildOneClickReq. */
    interface IMsg_ApplyJoinGuildOneClickReq {

        /** Msg_ApplyJoinGuildOneClickReq guildIds */
        guildIds?: (string[]|null);
    }

    /** Represents a Msg_ApplyJoinGuildOneClickReq. */
    class Msg_ApplyJoinGuildOneClickReq implements IMsg_ApplyJoinGuildOneClickReq {

        /**
         * Constructs a new Msg_ApplyJoinGuildOneClickReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ApplyJoinGuildOneClickReq);

        /** Msg_ApplyJoinGuildOneClickReq guildIds. */
        public guildIds: string[];

        /**
         * Encodes the specified Msg_ApplyJoinGuildOneClickReq message. Does not implicitly {@link proto.Msg_ApplyJoinGuildOneClickReq.verify|verify} messages.
         * @param m Msg_ApplyJoinGuildOneClickReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ApplyJoinGuildOneClickReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ApplyJoinGuildOneClickReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ApplyJoinGuildOneClickReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ApplyJoinGuildOneClickReq;
    }

    /** Properties of a Msg_ApplyJoinGuildOneClickRsp. */
    interface IMsg_ApplyJoinGuildOneClickRsp {

        /** Msg_ApplyJoinGuildOneClickRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ApplyJoinGuildOneClickRsp guildIds */
        guildIds?: (string[]|null);
    }

    /** Represents a Msg_ApplyJoinGuildOneClickRsp. */
    class Msg_ApplyJoinGuildOneClickRsp implements IMsg_ApplyJoinGuildOneClickRsp {

        /**
         * Constructs a new Msg_ApplyJoinGuildOneClickRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ApplyJoinGuildOneClickRsp);

        /** Msg_ApplyJoinGuildOneClickRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ApplyJoinGuildOneClickRsp guildIds. */
        public guildIds: string[];

        /**
         * Encodes the specified Msg_ApplyJoinGuildOneClickRsp message. Does not implicitly {@link proto.Msg_ApplyJoinGuildOneClickRsp.verify|verify} messages.
         * @param m Msg_ApplyJoinGuildOneClickRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ApplyJoinGuildOneClickRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ApplyJoinGuildOneClickRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ApplyJoinGuildOneClickRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ApplyJoinGuildOneClickRsp;
    }

    /** Properties of a Msg_ProcessGuildApplyReq. */
    interface IMsg_ProcessGuildApplyReq {

        /** Msg_ProcessGuildApplyReq applyReqId */
        applyReqId?: (string|null);

        /** Msg_ProcessGuildApplyReq agree */
        agree?: (boolean|null);
    }

    /** Represents a Msg_ProcessGuildApplyReq. */
    class Msg_ProcessGuildApplyReq implements IMsg_ProcessGuildApplyReq {

        /**
         * Constructs a new Msg_ProcessGuildApplyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ProcessGuildApplyReq);

        /** Msg_ProcessGuildApplyReq applyReqId. */
        public applyReqId: string;

        /** Msg_ProcessGuildApplyReq agree. */
        public agree: boolean;

        /**
         * Encodes the specified Msg_ProcessGuildApplyReq message. Does not implicitly {@link proto.Msg_ProcessGuildApplyReq.verify|verify} messages.
         * @param m Msg_ProcessGuildApplyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ProcessGuildApplyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ProcessGuildApplyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ProcessGuildApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ProcessGuildApplyReq;
    }

    /** Properties of a Msg_ProcessGuildApplyRsp. */
    interface IMsg_ProcessGuildApplyRsp {

        /** Msg_ProcessGuildApplyRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ProcessGuildApplyRsp applyReqId */
        applyReqId?: (string|null);

        /** Msg_ProcessGuildApplyRsp agree */
        agree?: (boolean|null);

        /** Msg_ProcessGuildApplyRsp member */
        member?: (proto.IGuildMember|null);
    }

    /** Represents a Msg_ProcessGuildApplyRsp. */
    class Msg_ProcessGuildApplyRsp implements IMsg_ProcessGuildApplyRsp {

        /**
         * Constructs a new Msg_ProcessGuildApplyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ProcessGuildApplyRsp);

        /** Msg_ProcessGuildApplyRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ProcessGuildApplyRsp applyReqId. */
        public applyReqId: string;

        /** Msg_ProcessGuildApplyRsp agree. */
        public agree: boolean;

        /** Msg_ProcessGuildApplyRsp member. */
        public member?: (proto.IGuildMember|null);

        /**
         * Encodes the specified Msg_ProcessGuildApplyRsp message. Does not implicitly {@link proto.Msg_ProcessGuildApplyRsp.verify|verify} messages.
         * @param m Msg_ProcessGuildApplyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ProcessGuildApplyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ProcessGuildApplyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ProcessGuildApplyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ProcessGuildApplyRsp;
    }

    /** Properties of a Msg_RejectAllGuildApplyReq. */
    interface IMsg_RejectAllGuildApplyReq {
    }

    /** Represents a Msg_RejectAllGuildApplyReq. */
    class Msg_RejectAllGuildApplyReq implements IMsg_RejectAllGuildApplyReq {

        /**
         * Constructs a new Msg_RejectAllGuildApplyReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RejectAllGuildApplyReq);

        /**
         * Encodes the specified Msg_RejectAllGuildApplyReq message. Does not implicitly {@link proto.Msg_RejectAllGuildApplyReq.verify|verify} messages.
         * @param m Msg_RejectAllGuildApplyReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RejectAllGuildApplyReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RejectAllGuildApplyReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RejectAllGuildApplyReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RejectAllGuildApplyReq;
    }

    /** Properties of a Msg_RejectAllGuildApplyRsp. */
    interface IMsg_RejectAllGuildApplyRsp {

        /** Msg_RejectAllGuildApplyRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_RejectAllGuildApplyRsp. */
    class Msg_RejectAllGuildApplyRsp implements IMsg_RejectAllGuildApplyRsp {

        /**
         * Constructs a new Msg_RejectAllGuildApplyRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_RejectAllGuildApplyRsp);

        /** Msg_RejectAllGuildApplyRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_RejectAllGuildApplyRsp message. Does not implicitly {@link proto.Msg_RejectAllGuildApplyRsp.verify|verify} messages.
         * @param m Msg_RejectAllGuildApplyRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_RejectAllGuildApplyRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_RejectAllGuildApplyRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_RejectAllGuildApplyRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_RejectAllGuildApplyRsp;
    }

    /** Properties of a Msg_QuitGuildReq. */
    interface IMsg_QuitGuildReq {
    }

    /** Represents a Msg_QuitGuildReq. */
    class Msg_QuitGuildReq implements IMsg_QuitGuildReq {

        /**
         * Constructs a new Msg_QuitGuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuitGuildReq);

        /**
         * Encodes the specified Msg_QuitGuildReq message. Does not implicitly {@link proto.Msg_QuitGuildReq.verify|verify} messages.
         * @param m Msg_QuitGuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuitGuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuitGuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuitGuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuitGuildReq;
    }

    /** Properties of a Msg_QuitGuildRsp. */
    interface IMsg_QuitGuildRsp {

        /** Msg_QuitGuildRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_QuitGuildRsp. */
    class Msg_QuitGuildRsp implements IMsg_QuitGuildRsp {

        /**
         * Constructs a new Msg_QuitGuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuitGuildRsp);

        /** Msg_QuitGuildRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_QuitGuildRsp message. Does not implicitly {@link proto.Msg_QuitGuildRsp.verify|verify} messages.
         * @param m Msg_QuitGuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuitGuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuitGuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuitGuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuitGuildRsp;
    }

    /** Properties of a Msg_KickGuildMemberReq. */
    interface IMsg_KickGuildMemberReq {

        /** Msg_KickGuildMemberReq roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_KickGuildMemberReq. */
    class Msg_KickGuildMemberReq implements IMsg_KickGuildMemberReq {

        /**
         * Constructs a new Msg_KickGuildMemberReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_KickGuildMemberReq);

        /** Msg_KickGuildMemberReq roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_KickGuildMemberReq message. Does not implicitly {@link proto.Msg_KickGuildMemberReq.verify|verify} messages.
         * @param m Msg_KickGuildMemberReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_KickGuildMemberReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_KickGuildMemberReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_KickGuildMemberReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_KickGuildMemberReq;
    }

    /** Properties of a Msg_KickGuildMemberRsp. */
    interface IMsg_KickGuildMemberRsp {

        /** Msg_KickGuildMemberRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_KickGuildMemberRsp roleId */
        roleId?: (string|null);
    }

    /** Represents a Msg_KickGuildMemberRsp. */
    class Msg_KickGuildMemberRsp implements IMsg_KickGuildMemberRsp {

        /**
         * Constructs a new Msg_KickGuildMemberRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_KickGuildMemberRsp);

        /** Msg_KickGuildMemberRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_KickGuildMemberRsp roleId. */
        public roleId: string;

        /**
         * Encodes the specified Msg_KickGuildMemberRsp message. Does not implicitly {@link proto.Msg_KickGuildMemberRsp.verify|verify} messages.
         * @param m Msg_KickGuildMemberRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_KickGuildMemberRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_KickGuildMemberRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_KickGuildMemberRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_KickGuildMemberRsp;
    }

    /** Properties of a Msg_SetGuildNameAndFlagReq. */
    interface IMsg_SetGuildNameAndFlagReq {

        /** Msg_SetGuildNameAndFlagReq name */
        name?: (string|null);

        /** Msg_SetGuildNameAndFlagReq flagId */
        flagId?: (number|null);
    }

    /** Represents a Msg_SetGuildNameAndFlagReq. */
    class Msg_SetGuildNameAndFlagReq implements IMsg_SetGuildNameAndFlagReq {

        /**
         * Constructs a new Msg_SetGuildNameAndFlagReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNameAndFlagReq);

        /** Msg_SetGuildNameAndFlagReq name. */
        public name: string;

        /** Msg_SetGuildNameAndFlagReq flagId. */
        public flagId: number;

        /**
         * Encodes the specified Msg_SetGuildNameAndFlagReq message. Does not implicitly {@link proto.Msg_SetGuildNameAndFlagReq.verify|verify} messages.
         * @param m Msg_SetGuildNameAndFlagReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNameAndFlagReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNameAndFlagReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNameAndFlagReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNameAndFlagReq;
    }

    /** Properties of a Msg_SetGuildNameAndFlagRsp. */
    interface IMsg_SetGuildNameAndFlagRsp {

        /** Msg_SetGuildNameAndFlagRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetGuildNameAndFlagRsp name */
        name?: (string|null);

        /** Msg_SetGuildNameAndFlagRsp flagId */
        flagId?: (number|null);
    }

    /** Represents a Msg_SetGuildNameAndFlagRsp. */
    class Msg_SetGuildNameAndFlagRsp implements IMsg_SetGuildNameAndFlagRsp {

        /**
         * Constructs a new Msg_SetGuildNameAndFlagRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNameAndFlagRsp);

        /** Msg_SetGuildNameAndFlagRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetGuildNameAndFlagRsp name. */
        public name: string;

        /** Msg_SetGuildNameAndFlagRsp flagId. */
        public flagId: number;

        /**
         * Encodes the specified Msg_SetGuildNameAndFlagRsp message. Does not implicitly {@link proto.Msg_SetGuildNameAndFlagRsp.verify|verify} messages.
         * @param m Msg_SetGuildNameAndFlagRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNameAndFlagRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNameAndFlagRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNameAndFlagRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNameAndFlagRsp;
    }

    /** Properties of a Msg_SetGuildNoticeReq. */
    interface IMsg_SetGuildNoticeReq {

        /** Msg_SetGuildNoticeReq notice */
        notice?: (string|null);
    }

    /** Represents a Msg_SetGuildNoticeReq. */
    class Msg_SetGuildNoticeReq implements IMsg_SetGuildNoticeReq {

        /**
         * Constructs a new Msg_SetGuildNoticeReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNoticeReq);

        /** Msg_SetGuildNoticeReq notice. */
        public notice: string;

        /**
         * Encodes the specified Msg_SetGuildNoticeReq message. Does not implicitly {@link proto.Msg_SetGuildNoticeReq.verify|verify} messages.
         * @param m Msg_SetGuildNoticeReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNoticeReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNoticeReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNoticeReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNoticeReq;
    }

    /** Properties of a Msg_SetGuildNoticeRsp. */
    interface IMsg_SetGuildNoticeRsp {

        /** Msg_SetGuildNoticeRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetGuildNoticeRsp notice */
        notice?: (string|null);
    }

    /** Represents a Msg_SetGuildNoticeRsp. */
    class Msg_SetGuildNoticeRsp implements IMsg_SetGuildNoticeRsp {

        /**
         * Constructs a new Msg_SetGuildNoticeRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNoticeRsp);

        /** Msg_SetGuildNoticeRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetGuildNoticeRsp notice. */
        public notice: string;

        /**
         * Encodes the specified Msg_SetGuildNoticeRsp message. Does not implicitly {@link proto.Msg_SetGuildNoticeRsp.verify|verify} messages.
         * @param m Msg_SetGuildNoticeRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNoticeRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNoticeRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNoticeRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNoticeRsp;
    }

    /** Properties of a Msg_SetGuildMemberJobReq. */
    interface IMsg_SetGuildMemberJobReq {

        /** Msg_SetGuildMemberJobReq roleId */
        roleId?: (string|null);

        /** Msg_SetGuildMemberJobReq job */
        job?: (number|null);
    }

    /** Represents a Msg_SetGuildMemberJobReq. */
    class Msg_SetGuildMemberJobReq implements IMsg_SetGuildMemberJobReq {

        /**
         * Constructs a new Msg_SetGuildMemberJobReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildMemberJobReq);

        /** Msg_SetGuildMemberJobReq roleId. */
        public roleId: string;

        /** Msg_SetGuildMemberJobReq job. */
        public job: number;

        /**
         * Encodes the specified Msg_SetGuildMemberJobReq message. Does not implicitly {@link proto.Msg_SetGuildMemberJobReq.verify|verify} messages.
         * @param m Msg_SetGuildMemberJobReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildMemberJobReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildMemberJobReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildMemberJobReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildMemberJobReq;
    }

    /** Properties of a Msg_SetGuildMemberJobRsp. */
    interface IMsg_SetGuildMemberJobRsp {

        /** Msg_SetGuildMemberJobRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetGuildMemberJobRsp roleId */
        roleId?: (string|null);

        /** Msg_SetGuildMemberJobRsp job */
        job?: (number|null);
    }

    /** Represents a Msg_SetGuildMemberJobRsp. */
    class Msg_SetGuildMemberJobRsp implements IMsg_SetGuildMemberJobRsp {

        /**
         * Constructs a new Msg_SetGuildMemberJobRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildMemberJobRsp);

        /** Msg_SetGuildMemberJobRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetGuildMemberJobRsp roleId. */
        public roleId: string;

        /** Msg_SetGuildMemberJobRsp job. */
        public job: number;

        /**
         * Encodes the specified Msg_SetGuildMemberJobRsp message. Does not implicitly {@link proto.Msg_SetGuildMemberJobRsp.verify|verify} messages.
         * @param m Msg_SetGuildMemberJobRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildMemberJobRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildMemberJobRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildMemberJobRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildMemberJobRsp;
    }

    /** Properties of a Msg_SignGuildReq. */
    interface IMsg_SignGuildReq {

        /** Msg_SignGuildReq signTimes */
        signTimes?: (number|null);
    }

    /** Represents a Msg_SignGuildReq. */
    class Msg_SignGuildReq implements IMsg_SignGuildReq {

        /**
         * Constructs a new Msg_SignGuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SignGuildReq);

        /** Msg_SignGuildReq signTimes. */
        public signTimes: number;

        /**
         * Encodes the specified Msg_SignGuildReq message. Does not implicitly {@link proto.Msg_SignGuildReq.verify|verify} messages.
         * @param m Msg_SignGuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SignGuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SignGuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SignGuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SignGuildReq;
    }

    /** Properties of a Msg_SignGuildRsp. */
    interface IMsg_SignGuildRsp {

        /** Msg_SignGuildRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SignGuildRsp signTimes */
        signTimes?: (number|null);

        /** Msg_SignGuildRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_SignGuildRsp. */
    class Msg_SignGuildRsp implements IMsg_SignGuildRsp {

        /**
         * Constructs a new Msg_SignGuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SignGuildRsp);

        /** Msg_SignGuildRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SignGuildRsp signTimes. */
        public signTimes: number;

        /** Msg_SignGuildRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_SignGuildRsp message. Does not implicitly {@link proto.Msg_SignGuildRsp.verify|verify} messages.
         * @param m Msg_SignGuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SignGuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SignGuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SignGuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SignGuildRsp;
    }

    /** Properties of a Msg_BargainGuildReq. */
    interface IMsg_BargainGuildReq {

        /** Msg_BargainGuildReq giftId */
        giftId?: (number|Long|null);
    }

    /** Represents a Msg_BargainGuildReq. */
    class Msg_BargainGuildReq implements IMsg_BargainGuildReq {

        /**
         * Constructs a new Msg_BargainGuildReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BargainGuildReq);

        /** Msg_BargainGuildReq giftId. */
        public giftId: (number|Long);

        /**
         * Encodes the specified Msg_BargainGuildReq message. Does not implicitly {@link proto.Msg_BargainGuildReq.verify|verify} messages.
         * @param m Msg_BargainGuildReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BargainGuildReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BargainGuildReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BargainGuildReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BargainGuildReq;
    }

    /** Properties of a Msg_BargainGuildRsp. */
    interface IMsg_BargainGuildRsp {

        /** Msg_BargainGuildRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BargainGuildRsp giftId */
        giftId?: (number|Long|null);

        /** Msg_BargainGuildRsp gift */
        gift?: (proto.IGuildGift|null);
    }

    /** Represents a Msg_BargainGuildRsp. */
    class Msg_BargainGuildRsp implements IMsg_BargainGuildRsp {

        /**
         * Constructs a new Msg_BargainGuildRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BargainGuildRsp);

        /** Msg_BargainGuildRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BargainGuildRsp giftId. */
        public giftId: (number|Long);

        /** Msg_BargainGuildRsp gift. */
        public gift?: (proto.IGuildGift|null);

        /**
         * Encodes the specified Msg_BargainGuildRsp message. Does not implicitly {@link proto.Msg_BargainGuildRsp.verify|verify} messages.
         * @param m Msg_BargainGuildRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BargainGuildRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BargainGuildRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BargainGuildRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BargainGuildRsp;
    }

    /** Properties of a Msg_BuyGuildGiftReq. */
    interface IMsg_BuyGuildGiftReq {

        /** Msg_BuyGuildGiftReq giftId */
        giftId?: (number|Long|null);
    }

    /** Represents a Msg_BuyGuildGiftReq. */
    class Msg_BuyGuildGiftReq implements IMsg_BuyGuildGiftReq {

        /**
         * Constructs a new Msg_BuyGuildGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGuildGiftReq);

        /** Msg_BuyGuildGiftReq giftId. */
        public giftId: (number|Long);

        /**
         * Encodes the specified Msg_BuyGuildGiftReq message. Does not implicitly {@link proto.Msg_BuyGuildGiftReq.verify|verify} messages.
         * @param m Msg_BuyGuildGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGuildGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGuildGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGuildGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGuildGiftReq;
    }

    /** Properties of a Msg_BuyGuildGiftRsp. */
    interface IMsg_BuyGuildGiftRsp {

        /** Msg_BuyGuildGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_BuyGuildGiftRsp giftId */
        giftId?: (number|Long|null);

        /** Msg_BuyGuildGiftRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_BuyGuildGiftRsp. */
    class Msg_BuyGuildGiftRsp implements IMsg_BuyGuildGiftRsp {

        /**
         * Constructs a new Msg_BuyGuildGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_BuyGuildGiftRsp);

        /** Msg_BuyGuildGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_BuyGuildGiftRsp giftId. */
        public giftId: (number|Long);

        /** Msg_BuyGuildGiftRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_BuyGuildGiftRsp message. Does not implicitly {@link proto.Msg_BuyGuildGiftRsp.verify|verify} messages.
         * @param m Msg_BuyGuildGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_BuyGuildGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_BuyGuildGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_BuyGuildGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_BuyGuildGiftRsp;
    }

    /** Properties of a Msg_UpgradeGuildSkillReq. */
    interface IMsg_UpgradeGuildSkillReq {

        /** Msg_UpgradeGuildSkillReq heroClass */
        heroClass?: (number|null);
    }

    /** Represents a Msg_UpgradeGuildSkillReq. */
    class Msg_UpgradeGuildSkillReq implements IMsg_UpgradeGuildSkillReq {

        /**
         * Constructs a new Msg_UpgradeGuildSkillReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeGuildSkillReq);

        /** Msg_UpgradeGuildSkillReq heroClass. */
        public heroClass: number;

        /**
         * Encodes the specified Msg_UpgradeGuildSkillReq message. Does not implicitly {@link proto.Msg_UpgradeGuildSkillReq.verify|verify} messages.
         * @param m Msg_UpgradeGuildSkillReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeGuildSkillReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeGuildSkillReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeGuildSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeGuildSkillReq;
    }

    /** Properties of a Msg_UpgradeGuildSkillRsp. */
    interface IMsg_UpgradeGuildSkillRsp {

        /** Msg_UpgradeGuildSkillRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_UpgradeGuildSkillRsp heroClass */
        heroClass?: (number|null);
    }

    /** Represents a Msg_UpgradeGuildSkillRsp. */
    class Msg_UpgradeGuildSkillRsp implements IMsg_UpgradeGuildSkillRsp {

        /**
         * Constructs a new Msg_UpgradeGuildSkillRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_UpgradeGuildSkillRsp);

        /** Msg_UpgradeGuildSkillRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_UpgradeGuildSkillRsp heroClass. */
        public heroClass: number;

        /**
         * Encodes the specified Msg_UpgradeGuildSkillRsp message. Does not implicitly {@link proto.Msg_UpgradeGuildSkillRsp.verify|verify} messages.
         * @param m Msg_UpgradeGuildSkillRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_UpgradeGuildSkillRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_UpgradeGuildSkillRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_UpgradeGuildSkillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_UpgradeGuildSkillRsp;
    }

    /** Properties of a Msg_ResetGuildSkillReq. */
    interface IMsg_ResetGuildSkillReq {

        /** Msg_ResetGuildSkillReq heroClass */
        heroClass?: (number|null);
    }

    /** Represents a Msg_ResetGuildSkillReq. */
    class Msg_ResetGuildSkillReq implements IMsg_ResetGuildSkillReq {

        /**
         * Constructs a new Msg_ResetGuildSkillReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetGuildSkillReq);

        /** Msg_ResetGuildSkillReq heroClass. */
        public heroClass: number;

        /**
         * Encodes the specified Msg_ResetGuildSkillReq message. Does not implicitly {@link proto.Msg_ResetGuildSkillReq.verify|verify} messages.
         * @param m Msg_ResetGuildSkillReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetGuildSkillReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetGuildSkillReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetGuildSkillReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetGuildSkillReq;
    }

    /** Properties of a Msg_ResetGuildSkillRsp. */
    interface IMsg_ResetGuildSkillRsp {

        /** Msg_ResetGuildSkillRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ResetGuildSkillRsp heroClass */
        heroClass?: (number|null);

        /** Msg_ResetGuildSkillRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ResetGuildSkillRsp. */
    class Msg_ResetGuildSkillRsp implements IMsg_ResetGuildSkillRsp {

        /**
         * Constructs a new Msg_ResetGuildSkillRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ResetGuildSkillRsp);

        /** Msg_ResetGuildSkillRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ResetGuildSkillRsp heroClass. */
        public heroClass: number;

        /** Msg_ResetGuildSkillRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ResetGuildSkillRsp message. Does not implicitly {@link proto.Msg_ResetGuildSkillRsp.verify|verify} messages.
         * @param m Msg_ResetGuildSkillRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ResetGuildSkillRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ResetGuildSkillRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ResetGuildSkillRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ResetGuildSkillRsp;
    }

    /** Properties of a Msg_ReceiveGuildDailyTasksRewardsReq. */
    interface IMsg_ReceiveGuildDailyTasksRewardsReq {

        /** Msg_ReceiveGuildDailyTasksRewardsReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveGuildDailyTasksRewardsReq. */
    class Msg_ReceiveGuildDailyTasksRewardsReq implements IMsg_ReceiveGuildDailyTasksRewardsReq {

        /**
         * Constructs a new Msg_ReceiveGuildDailyTasksRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGuildDailyTasksRewardsReq);

        /** Msg_ReceiveGuildDailyTasksRewardsReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveGuildDailyTasksRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveGuildDailyTasksRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveGuildDailyTasksRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGuildDailyTasksRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGuildDailyTasksRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGuildDailyTasksRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGuildDailyTasksRewardsReq;
    }

    /** Properties of a Msg_ReceiveGuildDailyTasksRewardsRsp. */
    interface IMsg_ReceiveGuildDailyTasksRewardsRsp {

        /** Msg_ReceiveGuildDailyTasksRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveGuildDailyTasksRewardsRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveGuildDailyTasksRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveGuildDailyTasksRewardsRsp. */
    class Msg_ReceiveGuildDailyTasksRewardsRsp implements IMsg_ReceiveGuildDailyTasksRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveGuildDailyTasksRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGuildDailyTasksRewardsRsp);

        /** Msg_ReceiveGuildDailyTasksRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveGuildDailyTasksRewardsRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveGuildDailyTasksRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveGuildDailyTasksRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveGuildDailyTasksRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveGuildDailyTasksRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGuildDailyTasksRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGuildDailyTasksRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGuildDailyTasksRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGuildDailyTasksRewardsRsp;
    }

    /** Properties of a Msg_ReceiveGuildTaskChestRewardsReq. */
    interface IMsg_ReceiveGuildTaskChestRewardsReq {

        /** Msg_ReceiveGuildTaskChestRewardsReq indexes */
        indexes?: (number[]|null);
    }

    /** Represents a Msg_ReceiveGuildTaskChestRewardsReq. */
    class Msg_ReceiveGuildTaskChestRewardsReq implements IMsg_ReceiveGuildTaskChestRewardsReq {

        /**
         * Constructs a new Msg_ReceiveGuildTaskChestRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGuildTaskChestRewardsReq);

        /** Msg_ReceiveGuildTaskChestRewardsReq indexes. */
        public indexes: number[];

        /**
         * Encodes the specified Msg_ReceiveGuildTaskChestRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveGuildTaskChestRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveGuildTaskChestRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGuildTaskChestRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGuildTaskChestRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGuildTaskChestRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGuildTaskChestRewardsReq;
    }

    /** Properties of a Msg_ReceiveGuildTaskChestRewardsRsp. */
    interface IMsg_ReceiveGuildTaskChestRewardsRsp {

        /** Msg_ReceiveGuildTaskChestRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveGuildTaskChestRewardsRsp indexes */
        indexes?: (number[]|null);

        /** Msg_ReceiveGuildTaskChestRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveGuildTaskChestRewardsRsp. */
    class Msg_ReceiveGuildTaskChestRewardsRsp implements IMsg_ReceiveGuildTaskChestRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveGuildTaskChestRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveGuildTaskChestRewardsRsp);

        /** Msg_ReceiveGuildTaskChestRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveGuildTaskChestRewardsRsp indexes. */
        public indexes: number[];

        /** Msg_ReceiveGuildTaskChestRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveGuildTaskChestRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveGuildTaskChestRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveGuildTaskChestRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveGuildTaskChestRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveGuildTaskChestRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveGuildTaskChestRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveGuildTaskChestRewardsRsp;
    }

    /** Properties of a JoinGuildRequest. */
    interface IJoinGuildRequest {

        /** JoinGuildRequest id */
        id?: (string|null);

        /** JoinGuildRequest roleId */
        roleId?: (string|null);

        /** JoinGuildRequest guildId */
        guildId?: (string|null);

        /** JoinGuildRequest createTime */
        createTime?: (number|Long|null);

        /** JoinGuildRequest name */
        name?: (string|null);

        /** JoinGuildRequest powerScore */
        powerScore?: (number|null);

        /** JoinGuildRequest headIcon */
        headIcon?: (number|null);

        /** JoinGuildRequest headFrame */
        headFrame?: (number|null);

        /** JoinGuildRequest lastLoginTime */
        lastLoginTime?: (number|Long|null);

        /** JoinGuildRequest lastLogoutTime */
        lastLogoutTime?: (number|Long|null);

        /** JoinGuildRequest highestHeroItemId */
        highestHeroItemId?: (number|null);

        /** JoinGuildRequest level */
        level?: (number|null);
    }

    /** Represents a JoinGuildRequest. */
    class JoinGuildRequest implements IJoinGuildRequest {

        /**
         * Constructs a new JoinGuildRequest.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IJoinGuildRequest);

        /** JoinGuildRequest id. */
        public id: string;

        /** JoinGuildRequest roleId. */
        public roleId: string;

        /** JoinGuildRequest guildId. */
        public guildId: string;

        /** JoinGuildRequest createTime. */
        public createTime: (number|Long);

        /** JoinGuildRequest name. */
        public name: string;

        /** JoinGuildRequest powerScore. */
        public powerScore: number;

        /** JoinGuildRequest headIcon. */
        public headIcon: number;

        /** JoinGuildRequest headFrame. */
        public headFrame: number;

        /** JoinGuildRequest lastLoginTime. */
        public lastLoginTime: (number|Long);

        /** JoinGuildRequest lastLogoutTime. */
        public lastLogoutTime: (number|Long);

        /** JoinGuildRequest highestHeroItemId. */
        public highestHeroItemId: number;

        /** JoinGuildRequest level. */
        public level: number;

        /**
         * Encodes the specified JoinGuildRequest message. Does not implicitly {@link proto.JoinGuildRequest.verify|verify} messages.
         * @param m JoinGuildRequest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IJoinGuildRequest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a JoinGuildRequest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns JoinGuildRequest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.JoinGuildRequest;
    }

    /** Properties of a Msg_GetJoinGuildRequestsReq. */
    interface IMsg_GetJoinGuildRequestsReq {

        /** Msg_GetJoinGuildRequestsReq condition */
        condition?: (number|null);
    }

    /** Represents a Msg_GetJoinGuildRequestsReq. */
    class Msg_GetJoinGuildRequestsReq implements IMsg_GetJoinGuildRequestsReq {

        /**
         * Constructs a new Msg_GetJoinGuildRequestsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetJoinGuildRequestsReq);

        /** Msg_GetJoinGuildRequestsReq condition. */
        public condition: number;

        /**
         * Encodes the specified Msg_GetJoinGuildRequestsReq message. Does not implicitly {@link proto.Msg_GetJoinGuildRequestsReq.verify|verify} messages.
         * @param m Msg_GetJoinGuildRequestsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetJoinGuildRequestsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetJoinGuildRequestsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetJoinGuildRequestsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetJoinGuildRequestsReq;
    }

    /** Properties of a Msg_GetJoinGuildRequestsRsp. */
    interface IMsg_GetJoinGuildRequestsRsp {

        /** Msg_GetJoinGuildRequestsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetJoinGuildRequestsRsp condition */
        condition?: (number|null);

        /** Msg_GetJoinGuildRequestsRsp requests */
        requests?: (proto.IJoinGuildRequest[]|null);
    }

    /** Represents a Msg_GetJoinGuildRequestsRsp. */
    class Msg_GetJoinGuildRequestsRsp implements IMsg_GetJoinGuildRequestsRsp {

        /**
         * Constructs a new Msg_GetJoinGuildRequestsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetJoinGuildRequestsRsp);

        /** Msg_GetJoinGuildRequestsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetJoinGuildRequestsRsp condition. */
        public condition: number;

        /** Msg_GetJoinGuildRequestsRsp requests. */
        public requests: proto.IJoinGuildRequest[];

        /**
         * Encodes the specified Msg_GetJoinGuildRequestsRsp message. Does not implicitly {@link proto.Msg_GetJoinGuildRequestsRsp.verify|verify} messages.
         * @param m Msg_GetJoinGuildRequestsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetJoinGuildRequestsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetJoinGuildRequestsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetJoinGuildRequestsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetJoinGuildRequestsRsp;
    }

    /** Properties of a Msg_ImpeachGuildLeaderReq. */
    interface IMsg_ImpeachGuildLeaderReq {
    }

    /** Represents a Msg_ImpeachGuildLeaderReq. */
    class Msg_ImpeachGuildLeaderReq implements IMsg_ImpeachGuildLeaderReq {

        /**
         * Constructs a new Msg_ImpeachGuildLeaderReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImpeachGuildLeaderReq);

        /**
         * Encodes the specified Msg_ImpeachGuildLeaderReq message. Does not implicitly {@link proto.Msg_ImpeachGuildLeaderReq.verify|verify} messages.
         * @param m Msg_ImpeachGuildLeaderReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImpeachGuildLeaderReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImpeachGuildLeaderReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImpeachGuildLeaderReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImpeachGuildLeaderReq;
    }

    /** Properties of a Msg_ImpeachGuildLeaderRsp. */
    interface IMsg_ImpeachGuildLeaderRsp {

        /** Msg_ImpeachGuildLeaderRsp error */
        error?: (proto.ICommonError|null);
    }

    /** Represents a Msg_ImpeachGuildLeaderRsp. */
    class Msg_ImpeachGuildLeaderRsp implements IMsg_ImpeachGuildLeaderRsp {

        /**
         * Constructs a new Msg_ImpeachGuildLeaderRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ImpeachGuildLeaderRsp);

        /** Msg_ImpeachGuildLeaderRsp error. */
        public error?: (proto.ICommonError|null);

        /**
         * Encodes the specified Msg_ImpeachGuildLeaderRsp message. Does not implicitly {@link proto.Msg_ImpeachGuildLeaderRsp.verify|verify} messages.
         * @param m Msg_ImpeachGuildLeaderRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ImpeachGuildLeaderRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ImpeachGuildLeaderRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ImpeachGuildLeaderRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ImpeachGuildLeaderRsp;
    }

    /** Properties of a Msg_SetGuildNeedCheckReq. */
    interface IMsg_SetGuildNeedCheckReq {

        /** Msg_SetGuildNeedCheckReq needCheck */
        needCheck?: (boolean|null);
    }

    /** Represents a Msg_SetGuildNeedCheckReq. */
    class Msg_SetGuildNeedCheckReq implements IMsg_SetGuildNeedCheckReq {

        /**
         * Constructs a new Msg_SetGuildNeedCheckReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNeedCheckReq);

        /** Msg_SetGuildNeedCheckReq needCheck. */
        public needCheck: boolean;

        /**
         * Encodes the specified Msg_SetGuildNeedCheckReq message. Does not implicitly {@link proto.Msg_SetGuildNeedCheckReq.verify|verify} messages.
         * @param m Msg_SetGuildNeedCheckReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNeedCheckReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNeedCheckReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNeedCheckReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNeedCheckReq;
    }

    /** Properties of a Msg_SetGuildNeedCheckRsp. */
    interface IMsg_SetGuildNeedCheckRsp {

        /** Msg_SetGuildNeedCheckRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetGuildNeedCheckRsp needCheck */
        needCheck?: (boolean|null);
    }

    /** Represents a Msg_SetGuildNeedCheckRsp. */
    class Msg_SetGuildNeedCheckRsp implements IMsg_SetGuildNeedCheckRsp {

        /**
         * Constructs a new Msg_SetGuildNeedCheckRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetGuildNeedCheckRsp);

        /** Msg_SetGuildNeedCheckRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetGuildNeedCheckRsp needCheck. */
        public needCheck: boolean;

        /**
         * Encodes the specified Msg_SetGuildNeedCheckRsp message. Does not implicitly {@link proto.Msg_SetGuildNeedCheckRsp.verify|verify} messages.
         * @param m Msg_SetGuildNeedCheckRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetGuildNeedCheckRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetGuildNeedCheckRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetGuildNeedCheckRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetGuildNeedCheckRsp;
    }

    /** Properties of a Msg_GuildChatChannelPush. */
    interface IMsg_GuildChatChannelPush {

        /** Msg_GuildChatChannelPush channel */
        channel?: (proto.IChatChannel|null);
    }

    /** Represents a Msg_GuildChatChannelPush. */
    class Msg_GuildChatChannelPush implements IMsg_GuildChatChannelPush {

        /**
         * Constructs a new Msg_GuildChatChannelPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GuildChatChannelPush);

        /** Msg_GuildChatChannelPush channel. */
        public channel?: (proto.IChatChannel|null);

        /**
         * Encodes the specified Msg_GuildChatChannelPush message. Does not implicitly {@link proto.Msg_GuildChatChannelPush.verify|verify} messages.
         * @param m Msg_GuildChatChannelPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GuildChatChannelPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GuildChatChannelPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GuildChatChannelPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GuildChatChannelPush;
    }

    /** Properties of a Msg_GetGuildRankReq. */
    interface IMsg_GetGuildRankReq {

        /** Msg_GetGuildRankReq rankId */
        rankId?: (number|null);
    }

    /** Represents a Msg_GetGuildRankReq. */
    class Msg_GetGuildRankReq implements IMsg_GetGuildRankReq {

        /**
         * Constructs a new Msg_GetGuildRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildRankReq);

        /** Msg_GetGuildRankReq rankId. */
        public rankId: number;

        /**
         * Encodes the specified Msg_GetGuildRankReq message. Does not implicitly {@link proto.Msg_GetGuildRankReq.verify|verify} messages.
         * @param m Msg_GetGuildRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildRankReq;
    }

    /** Properties of a Msg_GetGuildRankRsp. */
    interface IMsg_GetGuildRankRsp {

        /** Msg_GetGuildRankRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetGuildRankRsp rankId */
        rankId?: (number|null);

        /** Msg_GetGuildRankRsp ranking */
        ranking?: (number|null);

        /** Msg_GetGuildRankRsp rankList */
        rankList?: (proto.ISimpleGuild[]|null);
    }

    /** Represents a Msg_GetGuildRankRsp. */
    class Msg_GetGuildRankRsp implements IMsg_GetGuildRankRsp {

        /**
         * Constructs a new Msg_GetGuildRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildRankRsp);

        /** Msg_GetGuildRankRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetGuildRankRsp rankId. */
        public rankId: number;

        /** Msg_GetGuildRankRsp ranking. */
        public ranking: number;

        /** Msg_GetGuildRankRsp rankList. */
        public rankList: proto.ISimpleGuild[];

        /**
         * Encodes the specified Msg_GetGuildRankRsp message. Does not implicitly {@link proto.Msg_GetGuildRankRsp.verify|verify} messages.
         * @param m Msg_GetGuildRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildRankRsp;
    }

    /** Properties of a Msg_GetGuildRankInfoReq. */
    interface IMsg_GetGuildRankInfoReq {

        /** Msg_GetGuildRankInfoReq rankId */
        rankId?: (number|null);

        /** Msg_GetGuildRankInfoReq guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_GetGuildRankInfoReq. */
    class Msg_GetGuildRankInfoReq implements IMsg_GetGuildRankInfoReq {

        /**
         * Constructs a new Msg_GetGuildRankInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildRankInfoReq);

        /** Msg_GetGuildRankInfoReq rankId. */
        public rankId: number;

        /** Msg_GetGuildRankInfoReq guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_GetGuildRankInfoReq message. Does not implicitly {@link proto.Msg_GetGuildRankInfoReq.verify|verify} messages.
         * @param m Msg_GetGuildRankInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildRankInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildRankInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildRankInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildRankInfoReq;
    }

    /** Properties of a Msg_GetGuildRankInfoRsp. */
    interface IMsg_GetGuildRankInfoRsp {

        /** Msg_GetGuildRankInfoRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetGuildRankInfoRsp guild */
        guild?: (proto.IGuildInfo|null);
    }

    /** Represents a Msg_GetGuildRankInfoRsp. */
    class Msg_GetGuildRankInfoRsp implements IMsg_GetGuildRankInfoRsp {

        /**
         * Constructs a new Msg_GetGuildRankInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildRankInfoRsp);

        /** Msg_GetGuildRankInfoRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetGuildRankInfoRsp guild. */
        public guild?: (proto.IGuildInfo|null);

        /**
         * Encodes the specified Msg_GetGuildRankInfoRsp message. Does not implicitly {@link proto.Msg_GetGuildRankInfoRsp.verify|verify} messages.
         * @param m Msg_GetGuildRankInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildRankInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildRankInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildRankInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildRankInfoRsp;
    }

    /** Properties of a Msg_GuildBossDataPush. */
    interface IMsg_GuildBossDataPush {

        /** Msg_GuildBossDataPush stageId */
        stageId?: (number|null);

        /** Msg_GuildBossDataPush challengeCount */
        challengeCount?: (number|null);

        /** Msg_GuildBossDataPush maxScore */
        maxScore?: (number|Long|null);
    }

    /** Represents a Msg_GuildBossDataPush. */
    class Msg_GuildBossDataPush implements IMsg_GuildBossDataPush {

        /**
         * Constructs a new Msg_GuildBossDataPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GuildBossDataPush);

        /** Msg_GuildBossDataPush stageId. */
        public stageId: number;

        /** Msg_GuildBossDataPush challengeCount. */
        public challengeCount: number;

        /** Msg_GuildBossDataPush maxScore. */
        public maxScore: (number|Long);

        /**
         * Encodes the specified Msg_GuildBossDataPush message. Does not implicitly {@link proto.Msg_GuildBossDataPush.verify|verify} messages.
         * @param m Msg_GuildBossDataPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GuildBossDataPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GuildBossDataPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GuildBossDataPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GuildBossDataPush;
    }

    /** Properties of a GuildBossRank. */
    interface IGuildBossRank {

        /** GuildBossRank guild */
        guild?: (proto.IGuildInfo|null);

        /** GuildBossRank score */
        score?: (number|Long|null);

        /** GuildBossRank members */
        members?: (number|null);
    }

    /** Represents a GuildBossRank. */
    class GuildBossRank implements IGuildBossRank {

        /**
         * Constructs a new GuildBossRank.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGuildBossRank);

        /** GuildBossRank guild. */
        public guild?: (proto.IGuildInfo|null);

        /** GuildBossRank score. */
        public score: (number|Long);

        /** GuildBossRank members. */
        public members: number;

        /**
         * Encodes the specified GuildBossRank message. Does not implicitly {@link proto.GuildBossRank.verify|verify} messages.
         * @param m GuildBossRank message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGuildBossRank, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GuildBossRank message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GuildBossRank
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GuildBossRank;
    }

    /** Properties of a Msg_GetGuildBossRankReq. */
    interface IMsg_GetGuildBossRankReq {

        /** Msg_GetGuildBossRankReq roleRankId */
        roleRankId?: (number|null);

        /** Msg_GetGuildBossRankReq guildRankId */
        guildRankId?: (number|null);
    }

    /** Represents a Msg_GetGuildBossRankReq. */
    class Msg_GetGuildBossRankReq implements IMsg_GetGuildBossRankReq {

        /**
         * Constructs a new Msg_GetGuildBossRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildBossRankReq);

        /** Msg_GetGuildBossRankReq roleRankId. */
        public roleRankId: number;

        /** Msg_GetGuildBossRankReq guildRankId. */
        public guildRankId: number;

        /**
         * Encodes the specified Msg_GetGuildBossRankReq message. Does not implicitly {@link proto.Msg_GetGuildBossRankReq.verify|verify} messages.
         * @param m Msg_GetGuildBossRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildBossRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildBossRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildBossRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildBossRankReq;
    }

    /** Properties of a Msg_GetGuildBossRankRsp. */
    interface IMsg_GetGuildBossRankRsp {

        /** Msg_GetGuildBossRankRsp roleRank */
        roleRank?: (proto.ISimpleRank[]|null);

        /** Msg_GetGuildBossRankRsp guildRank */
        guildRank?: (proto.IGuildBossRank[]|null);

        /** Msg_GetGuildBossRankRsp roleRankSelfRanking */
        roleRankSelfRanking?: (number|null);

        /** Msg_GetGuildBossRankRsp guildRankSelfRanking */
        guildRankSelfRanking?: (number|null);
    }

    /** Represents a Msg_GetGuildBossRankRsp. */
    class Msg_GetGuildBossRankRsp implements IMsg_GetGuildBossRankRsp {

        /**
         * Constructs a new Msg_GetGuildBossRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetGuildBossRankRsp);

        /** Msg_GetGuildBossRankRsp roleRank. */
        public roleRank: proto.ISimpleRank[];

        /** Msg_GetGuildBossRankRsp guildRank. */
        public guildRank: proto.IGuildBossRank[];

        /** Msg_GetGuildBossRankRsp roleRankSelfRanking. */
        public roleRankSelfRanking: number;

        /** Msg_GetGuildBossRankRsp guildRankSelfRanking. */
        public guildRankSelfRanking: number;

        /**
         * Encodes the specified Msg_GetGuildBossRankRsp message. Does not implicitly {@link proto.Msg_GetGuildBossRankRsp.verify|verify} messages.
         * @param m Msg_GetGuildBossRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetGuildBossRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetGuildBossRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetGuildBossRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetGuildBossRankRsp;
    }

    /** Properties of a Msg_JoinedGuildPush. */
    interface IMsg_JoinedGuildPush {

        /** Msg_JoinedGuildPush guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_JoinedGuildPush. */
    class Msg_JoinedGuildPush implements IMsg_JoinedGuildPush {

        /**
         * Constructs a new Msg_JoinedGuildPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinedGuildPush);

        /** Msg_JoinedGuildPush guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_JoinedGuildPush message. Does not implicitly {@link proto.Msg_JoinedGuildPush.verify|verify} messages.
         * @param m Msg_JoinedGuildPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinedGuildPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinedGuildPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinedGuildPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinedGuildPush;
    }

    /** Properties of a Msg_KickedOutGuildPush. */
    interface IMsg_KickedOutGuildPush {

        /** Msg_KickedOutGuildPush guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_KickedOutGuildPush. */
    class Msg_KickedOutGuildPush implements IMsg_KickedOutGuildPush {

        /**
         * Constructs a new Msg_KickedOutGuildPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_KickedOutGuildPush);

        /** Msg_KickedOutGuildPush guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_KickedOutGuildPush message. Does not implicitly {@link proto.Msg_KickedOutGuildPush.verify|verify} messages.
         * @param m Msg_KickedOutGuildPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_KickedOutGuildPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_KickedOutGuildPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_KickedOutGuildPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_KickedOutGuildPush;
    }

    /** Properties of a Msg_JoinGuildRequestReplyPush. */
    interface IMsg_JoinGuildRequestReplyPush {

        /** Msg_JoinGuildRequestReplyPush guildId */
        guildId?: (string|null);

        /** Msg_JoinGuildRequestReplyPush agree */
        agree?: (boolean|null);
    }

    /** Represents a Msg_JoinGuildRequestReplyPush. */
    class Msg_JoinGuildRequestReplyPush implements IMsg_JoinGuildRequestReplyPush {

        /**
         * Constructs a new Msg_JoinGuildRequestReplyPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_JoinGuildRequestReplyPush);

        /** Msg_JoinGuildRequestReplyPush guildId. */
        public guildId: string;

        /** Msg_JoinGuildRequestReplyPush agree. */
        public agree: boolean;

        /**
         * Encodes the specified Msg_JoinGuildRequestReplyPush message. Does not implicitly {@link proto.Msg_JoinGuildRequestReplyPush.verify|verify} messages.
         * @param m Msg_JoinGuildRequestReplyPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_JoinGuildRequestReplyPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_JoinGuildRequestReplyPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_JoinGuildRequestReplyPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_JoinGuildRequestReplyPush;
    }

    /** Properties of a Msg_GuileLevelUpPush. */
    interface IMsg_GuileLevelUpPush {

        /** Msg_GuileLevelUpPush level */
        level?: (number|null);

        /** Msg_GuileLevelUpPush exp */
        exp?: (number|null);
    }

    /** Represents a Msg_GuileLevelUpPush. */
    class Msg_GuileLevelUpPush implements IMsg_GuileLevelUpPush {

        /**
         * Constructs a new Msg_GuileLevelUpPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GuileLevelUpPush);

        /** Msg_GuileLevelUpPush level. */
        public level: number;

        /** Msg_GuileLevelUpPush exp. */
        public exp: number;

        /**
         * Encodes the specified Msg_GuileLevelUpPush message. Does not implicitly {@link proto.Msg_GuileLevelUpPush.verify|verify} messages.
         * @param m Msg_GuileLevelUpPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GuileLevelUpPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GuileLevelUpPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GuileLevelUpPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GuileLevelUpPush;
    }

    /** Properties of a Msg_GuildMemberChangedPush. */
    interface IMsg_GuildMemberChangedPush {

        /** Msg_GuildMemberChangedPush updatedMembers */
        updatedMembers?: (proto.IGuildMember[]|null);

        /** Msg_GuildMemberChangedPush quitedMemberIds */
        quitedMemberIds?: (string[]|null);
    }

    /** Represents a Msg_GuildMemberChangedPush. */
    class Msg_GuildMemberChangedPush implements IMsg_GuildMemberChangedPush {

        /**
         * Constructs a new Msg_GuildMemberChangedPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GuildMemberChangedPush);

        /** Msg_GuildMemberChangedPush updatedMembers. */
        public updatedMembers: proto.IGuildMember[];

        /** Msg_GuildMemberChangedPush quitedMemberIds. */
        public quitedMemberIds: string[];

        /**
         * Encodes the specified Msg_GuildMemberChangedPush message. Does not implicitly {@link proto.Msg_GuildMemberChangedPush.verify|verify} messages.
         * @param m Msg_GuildMemberChangedPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GuildMemberChangedPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GuildMemberChangedPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GuildMemberChangedPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GuildMemberChangedPush;
    }

    /** Properties of a Msg_QueryGuildInfoReq. */
    interface IMsg_QueryGuildInfoReq {

        /** Msg_QueryGuildInfoReq guildId */
        guildId?: (string|null);
    }

    /** Represents a Msg_QueryGuildInfoReq. */
    class Msg_QueryGuildInfoReq implements IMsg_QueryGuildInfoReq {

        /**
         * Constructs a new Msg_QueryGuildInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QueryGuildInfoReq);

        /** Msg_QueryGuildInfoReq guildId. */
        public guildId: string;

        /**
         * Encodes the specified Msg_QueryGuildInfoReq message. Does not implicitly {@link proto.Msg_QueryGuildInfoReq.verify|verify} messages.
         * @param m Msg_QueryGuildInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QueryGuildInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QueryGuildInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QueryGuildInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QueryGuildInfoReq;
    }

    /** Properties of a Msg_QueryGuildInfoRsp. */
    interface IMsg_QueryGuildInfoRsp {

        /** Msg_QueryGuildInfoRsp guild */
        guild?: (proto.IGuildInfo|null);
    }

    /** Represents a Msg_QueryGuildInfoRsp. */
    class Msg_QueryGuildInfoRsp implements IMsg_QueryGuildInfoRsp {

        /**
         * Constructs a new Msg_QueryGuildInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QueryGuildInfoRsp);

        /** Msg_QueryGuildInfoRsp guild. */
        public guild?: (proto.IGuildInfo|null);

        /**
         * Encodes the specified Msg_QueryGuildInfoRsp message. Does not implicitly {@link proto.Msg_QueryGuildInfoRsp.verify|verify} messages.
         * @param m Msg_QueryGuildInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QueryGuildInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QueryGuildInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QueryGuildInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QueryGuildInfoRsp;
    }

    /** Properties of a Msg_QuickFinGuildBossReq. */
    interface IMsg_QuickFinGuildBossReq {
    }

    /** Represents a Msg_QuickFinGuildBossReq. */
    class Msg_QuickFinGuildBossReq implements IMsg_QuickFinGuildBossReq {

        /**
         * Constructs a new Msg_QuickFinGuildBossReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuickFinGuildBossReq);

        /**
         * Encodes the specified Msg_QuickFinGuildBossReq message. Does not implicitly {@link proto.Msg_QuickFinGuildBossReq.verify|verify} messages.
         * @param m Msg_QuickFinGuildBossReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuickFinGuildBossReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuickFinGuildBossReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuickFinGuildBossReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuickFinGuildBossReq;
    }

    /** Properties of a Msg_QuickFinGuildBossRsp. */
    interface IMsg_QuickFinGuildBossRsp {

        /** Msg_QuickFinGuildBossRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_QuickFinGuildBossRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_QuickFinGuildBossRsp. */
    class Msg_QuickFinGuildBossRsp implements IMsg_QuickFinGuildBossRsp {

        /**
         * Constructs a new Msg_QuickFinGuildBossRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_QuickFinGuildBossRsp);

        /** Msg_QuickFinGuildBossRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_QuickFinGuildBossRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_QuickFinGuildBossRsp message. Does not implicitly {@link proto.Msg_QuickFinGuildBossRsp.verify|verify} messages.
         * @param m Msg_QuickFinGuildBossRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_QuickFinGuildBossRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_QuickFinGuildBossRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_QuickFinGuildBossRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_QuickFinGuildBossRsp;
    }

    /** Properties of a Msg_GuildBossRankNotify. */
    interface IMsg_GuildBossRankNotify {
    }

    /** Represents a Msg_GuildBossRankNotify. */
    class Msg_GuildBossRankNotify implements IMsg_GuildBossRankNotify {

        /**
         * Constructs a new Msg_GuildBossRankNotify.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GuildBossRankNotify);

        /**
         * Encodes the specified Msg_GuildBossRankNotify message. Does not implicitly {@link proto.Msg_GuildBossRankNotify.verify|verify} messages.
         * @param m Msg_GuildBossRankNotify message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GuildBossRankNotify, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GuildBossRankNotify message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GuildBossRankNotify
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GuildBossRankNotify;
    }

    /** Properties of a Mobile37PopupInfo. */
    interface IMobile37PopupInfo {

        /** Mobile37PopupInfo type */
        type?: (number|null);

        /** Mobile37PopupInfo buttonId */
        buttonId?: (string|null);

        /** Mobile37PopupInfo url */
        url?: (string|null);

        /** Mobile37PopupInfo red */
        red?: (boolean|null);

        /** Mobile37PopupInfo endTime */
        endTime?: (string|null);
    }

    /** Represents a Mobile37PopupInfo. */
    class Mobile37PopupInfo implements IMobile37PopupInfo {

        /**
         * Constructs a new Mobile37PopupInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMobile37PopupInfo);

        /** Mobile37PopupInfo type. */
        public type: number;

        /** Mobile37PopupInfo buttonId. */
        public buttonId: string;

        /** Mobile37PopupInfo url. */
        public url: string;

        /** Mobile37PopupInfo red. */
        public red: boolean;

        /** Mobile37PopupInfo endTime. */
        public endTime: string;

        /**
         * Encodes the specified Mobile37PopupInfo message. Does not implicitly {@link proto.Mobile37PopupInfo.verify|verify} messages.
         * @param m Mobile37PopupInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMobile37PopupInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Mobile37PopupInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Mobile37PopupInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Mobile37PopupInfo;
    }

    /** Properties of a Msg_Mobile37PopupsPush. */
    interface IMsg_Mobile37PopupsPush {

        /** Msg_Mobile37PopupsPush popups */
        popups?: (proto.IMobile37PopupInfo[]|null);
    }

    /** Represents a Msg_Mobile37PopupsPush. */
    class Msg_Mobile37PopupsPush implements IMsg_Mobile37PopupsPush {

        /**
         * Constructs a new Msg_Mobile37PopupsPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_Mobile37PopupsPush);

        /** Msg_Mobile37PopupsPush popups. */
        public popups: proto.IMobile37PopupInfo[];

        /**
         * Encodes the specified Msg_Mobile37PopupsPush message. Does not implicitly {@link proto.Msg_Mobile37PopupsPush.verify|verify} messages.
         * @param m Msg_Mobile37PopupsPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_Mobile37PopupsPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_Mobile37PopupsPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_Mobile37PopupsPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_Mobile37PopupsPush;
    }

    /** Properties of a Msg_NewDayPush. */
    interface IMsg_NewDayPush {

        /** Msg_NewDayPush time */
        time?: (number|Long|null);
    }

    /** Represents a Msg_NewDayPush. */
    class Msg_NewDayPush implements IMsg_NewDayPush {

        /**
         * Constructs a new Msg_NewDayPush.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_NewDayPush);

        /** Msg_NewDayPush time. */
        public time: (number|Long);

        /**
         * Encodes the specified Msg_NewDayPush message. Does not implicitly {@link proto.Msg_NewDayPush.verify|verify} messages.
         * @param m Msg_NewDayPush message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_NewDayPush, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_NewDayPush message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_NewDayPush
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_NewDayPush;
    }

    /** Properties of a Msg_GetSignInGiftInfoReq. */
    interface IMsg_GetSignInGiftInfoReq {
    }

    /** Represents a Msg_GetSignInGiftInfoReq. */
    class Msg_GetSignInGiftInfoReq implements IMsg_GetSignInGiftInfoReq {

        /**
         * Constructs a new Msg_GetSignInGiftInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSignInGiftInfoReq);

        /**
         * Encodes the specified Msg_GetSignInGiftInfoReq message. Does not implicitly {@link proto.Msg_GetSignInGiftInfoReq.verify|verify} messages.
         * @param m Msg_GetSignInGiftInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSignInGiftInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSignInGiftInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSignInGiftInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSignInGiftInfoReq;
    }

    /** Properties of a Msg_GetSignInGiftInfoRsp. */
    interface IMsg_GetSignInGiftInfoRsp {

        /** Msg_GetSignInGiftInfoRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetSignInGiftInfoRsp signInDays */
        signInDays?: (number|null);

        /** Msg_GetSignInGiftInfoRsp receivedDays */
        receivedDays?: (number[]|null);
    }

    /** Represents a Msg_GetSignInGiftInfoRsp. */
    class Msg_GetSignInGiftInfoRsp implements IMsg_GetSignInGiftInfoRsp {

        /**
         * Constructs a new Msg_GetSignInGiftInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSignInGiftInfoRsp);

        /** Msg_GetSignInGiftInfoRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetSignInGiftInfoRsp signInDays. */
        public signInDays: number;

        /** Msg_GetSignInGiftInfoRsp receivedDays. */
        public receivedDays: number[];

        /**
         * Encodes the specified Msg_GetSignInGiftInfoRsp message. Does not implicitly {@link proto.Msg_GetSignInGiftInfoRsp.verify|verify} messages.
         * @param m Msg_GetSignInGiftInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSignInGiftInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSignInGiftInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSignInGiftInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSignInGiftInfoRsp;
    }

    /** Properties of a Msg_ReceiveSignInGiftReq. */
    interface IMsg_ReceiveSignInGiftReq {

        /** Msg_ReceiveSignInGiftReq days */
        days?: (number[]|null);
    }

    /** Represents a Msg_ReceiveSignInGiftReq. */
    class Msg_ReceiveSignInGiftReq implements IMsg_ReceiveSignInGiftReq {

        /**
         * Constructs a new Msg_ReceiveSignInGiftReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSignInGiftReq);

        /** Msg_ReceiveSignInGiftReq days. */
        public days: number[];

        /**
         * Encodes the specified Msg_ReceiveSignInGiftReq message. Does not implicitly {@link proto.Msg_ReceiveSignInGiftReq.verify|verify} messages.
         * @param m Msg_ReceiveSignInGiftReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSignInGiftReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSignInGiftReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSignInGiftReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSignInGiftReq;
    }

    /** Properties of a Msg_ReceiveSignInGiftRsp. */
    interface IMsg_ReceiveSignInGiftRsp {

        /** Msg_ReceiveSignInGiftRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveSignInGiftRsp days */
        days?: (number[]|null);

        /** Msg_ReceiveSignInGiftRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveSignInGiftRsp. */
    class Msg_ReceiveSignInGiftRsp implements IMsg_ReceiveSignInGiftRsp {

        /**
         * Constructs a new Msg_ReceiveSignInGiftRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveSignInGiftRsp);

        /** Msg_ReceiveSignInGiftRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveSignInGiftRsp days. */
        public days: number[];

        /** Msg_ReceiveSignInGiftRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveSignInGiftRsp message. Does not implicitly {@link proto.Msg_ReceiveSignInGiftRsp.verify|verify} messages.
         * @param m Msg_ReceiveSignInGiftRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveSignInGiftRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveSignInGiftRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveSignInGiftRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveSignInGiftRsp;
    }

    /** Properties of a HeroGrow. */
    interface IHeroGrow {

        /** HeroGrow activityId */
        activityId?: (number|null);

        /** HeroGrow activityEndTime */
        activityEndTime?: (number|Long|null);

        /** HeroGrow heroItemId */
        heroItemId?: (number|null);

        /** HeroGrow receivedFreeRewardStars */
        receivedFreeRewardStars?: (number[]|null);

        /** HeroGrow boughtNotFreeRewardTimesMap */
        boughtNotFreeRewardTimesMap?: ({ [k: string]: number }|null);
    }

    /** Represents a HeroGrow. */
    class HeroGrow implements IHeroGrow {

        /**
         * Constructs a new HeroGrow.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IHeroGrow);

        /** HeroGrow activityId. */
        public activityId: number;

        /** HeroGrow activityEndTime. */
        public activityEndTime: (number|Long);

        /** HeroGrow heroItemId. */
        public heroItemId: number;

        /** HeroGrow receivedFreeRewardStars. */
        public receivedFreeRewardStars: number[];

        /** HeroGrow boughtNotFreeRewardTimesMap. */
        public boughtNotFreeRewardTimesMap: { [k: string]: number };

        /**
         * Encodes the specified HeroGrow message. Does not implicitly {@link proto.HeroGrow.verify|verify} messages.
         * @param m HeroGrow message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IHeroGrow, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a HeroGrow message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns HeroGrow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.HeroGrow;
    }

    /** Properties of a Msg_GetActivityHeroGrowMapReq. */
    interface IMsg_GetActivityHeroGrowMapReq {
    }

    /** Represents a Msg_GetActivityHeroGrowMapReq. */
    class Msg_GetActivityHeroGrowMapReq implements IMsg_GetActivityHeroGrowMapReq {

        /**
         * Constructs a new Msg_GetActivityHeroGrowMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetActivityHeroGrowMapReq);

        /**
         * Encodes the specified Msg_GetActivityHeroGrowMapReq message. Does not implicitly {@link proto.Msg_GetActivityHeroGrowMapReq.verify|verify} messages.
         * @param m Msg_GetActivityHeroGrowMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetActivityHeroGrowMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetActivityHeroGrowMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetActivityHeroGrowMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetActivityHeroGrowMapReq;
    }

    /** Properties of a Msg_GetActivityHeroGrowMapRsp. */
    interface IMsg_GetActivityHeroGrowMapRsp {

        /** Msg_GetActivityHeroGrowMapRsp activityHeroGrowMap */
        activityHeroGrowMap?: ({ [k: string]: proto.IHeroGrow }|null);
    }

    /** Represents a Msg_GetActivityHeroGrowMapRsp. */
    class Msg_GetActivityHeroGrowMapRsp implements IMsg_GetActivityHeroGrowMapRsp {

        /**
         * Constructs a new Msg_GetActivityHeroGrowMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetActivityHeroGrowMapRsp);

        /** Msg_GetActivityHeroGrowMapRsp activityHeroGrowMap. */
        public activityHeroGrowMap: { [k: string]: proto.IHeroGrow };

        /**
         * Encodes the specified Msg_GetActivityHeroGrowMapRsp message. Does not implicitly {@link proto.Msg_GetActivityHeroGrowMapRsp.verify|verify} messages.
         * @param m Msg_GetActivityHeroGrowMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetActivityHeroGrowMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetActivityHeroGrowMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetActivityHeroGrowMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetActivityHeroGrowMapRsp;
    }

    /** Properties of a Msg_ReceiveActivityHeroGrowRewardReq. */
    interface IMsg_ReceiveActivityHeroGrowRewardReq {

        /** Msg_ReceiveActivityHeroGrowRewardReq activityId */
        activityId?: (number|null);

        /** Msg_ReceiveActivityHeroGrowRewardReq star */
        star?: (number|null);
    }

    /** Represents a Msg_ReceiveActivityHeroGrowRewardReq. */
    class Msg_ReceiveActivityHeroGrowRewardReq implements IMsg_ReceiveActivityHeroGrowRewardReq {

        /**
         * Constructs a new Msg_ReceiveActivityHeroGrowRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveActivityHeroGrowRewardReq);

        /** Msg_ReceiveActivityHeroGrowRewardReq activityId. */
        public activityId: number;

        /** Msg_ReceiveActivityHeroGrowRewardReq star. */
        public star: number;

        /**
         * Encodes the specified Msg_ReceiveActivityHeroGrowRewardReq message. Does not implicitly {@link proto.Msg_ReceiveActivityHeroGrowRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveActivityHeroGrowRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveActivityHeroGrowRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveActivityHeroGrowRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveActivityHeroGrowRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveActivityHeroGrowRewardReq;
    }

    /** Properties of a Msg_ReceiveActivityHeroGrowRewardRsp. */
    interface IMsg_ReceiveActivityHeroGrowRewardRsp {

        /** Msg_ReceiveActivityHeroGrowRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveActivityHeroGrowRewardRsp activityId */
        activityId?: (number|null);

        /** Msg_ReceiveActivityHeroGrowRewardRsp star */
        star?: (number|null);

        /** Msg_ReceiveActivityHeroGrowRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveActivityHeroGrowRewardRsp. */
    class Msg_ReceiveActivityHeroGrowRewardRsp implements IMsg_ReceiveActivityHeroGrowRewardRsp {

        /**
         * Constructs a new Msg_ReceiveActivityHeroGrowRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveActivityHeroGrowRewardRsp);

        /** Msg_ReceiveActivityHeroGrowRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveActivityHeroGrowRewardRsp activityId. */
        public activityId: number;

        /** Msg_ReceiveActivityHeroGrowRewardRsp star. */
        public star: number;

        /** Msg_ReceiveActivityHeroGrowRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveActivityHeroGrowRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveActivityHeroGrowRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveActivityHeroGrowRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveActivityHeroGrowRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveActivityHeroGrowRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveActivityHeroGrowRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveActivityHeroGrowRewardRsp;
    }

    /** Properties of a GachaUp. */
    interface IGachaUp {

        /** GachaUp activityId */
        activityId?: (number|null);

        /** GachaUp activityEndTime */
        activityEndTime?: (number|Long|null);

        /** GachaUp tasks */
        tasks?: (proto.ITask[]|null);
    }

    /** Represents a GachaUp. */
    class GachaUp implements IGachaUp {

        /**
         * Constructs a new GachaUp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IGachaUp);

        /** GachaUp activityId. */
        public activityId: number;

        /** GachaUp activityEndTime. */
        public activityEndTime: (number|Long);

        /** GachaUp tasks. */
        public tasks: proto.ITask[];

        /**
         * Encodes the specified GachaUp message. Does not implicitly {@link proto.GachaUp.verify|verify} messages.
         * @param m GachaUp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IGachaUp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a GachaUp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns GachaUp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.GachaUp;
    }

    /** Properties of a Msg_GetActivityGachaUpMapReq. */
    interface IMsg_GetActivityGachaUpMapReq {
    }

    /** Represents a Msg_GetActivityGachaUpMapReq. */
    class Msg_GetActivityGachaUpMapReq implements IMsg_GetActivityGachaUpMapReq {

        /**
         * Constructs a new Msg_GetActivityGachaUpMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetActivityGachaUpMapReq);

        /**
         * Encodes the specified Msg_GetActivityGachaUpMapReq message. Does not implicitly {@link proto.Msg_GetActivityGachaUpMapReq.verify|verify} messages.
         * @param m Msg_GetActivityGachaUpMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetActivityGachaUpMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetActivityGachaUpMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetActivityGachaUpMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetActivityGachaUpMapReq;
    }

    /** Properties of a Msg_GetActivityGachaUpMapRsp. */
    interface IMsg_GetActivityGachaUpMapRsp {

        /** Msg_GetActivityGachaUpMapRsp activityGachaUpMap */
        activityGachaUpMap?: ({ [k: string]: proto.IGachaUp }|null);
    }

    /** Represents a Msg_GetActivityGachaUpMapRsp. */
    class Msg_GetActivityGachaUpMapRsp implements IMsg_GetActivityGachaUpMapRsp {

        /**
         * Constructs a new Msg_GetActivityGachaUpMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetActivityGachaUpMapRsp);

        /** Msg_GetActivityGachaUpMapRsp activityGachaUpMap. */
        public activityGachaUpMap: { [k: string]: proto.IGachaUp };

        /**
         * Encodes the specified Msg_GetActivityGachaUpMapRsp message. Does not implicitly {@link proto.Msg_GetActivityGachaUpMapRsp.verify|verify} messages.
         * @param m Msg_GetActivityGachaUpMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetActivityGachaUpMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetActivityGachaUpMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetActivityGachaUpMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetActivityGachaUpMapRsp;
    }

    /** Properties of a Msg_ReceiveActivityGachaUpTasksRewardsReq. */
    interface IMsg_ReceiveActivityGachaUpTasksRewardsReq {

        /** Msg_ReceiveActivityGachaUpTasksRewardsReq activityId */
        activityId?: (number|null);

        /** Msg_ReceiveActivityGachaUpTasksRewardsReq taskIds */
        taskIds?: (number[]|null);
    }

    /** Represents a Msg_ReceiveActivityGachaUpTasksRewardsReq. */
    class Msg_ReceiveActivityGachaUpTasksRewardsReq implements IMsg_ReceiveActivityGachaUpTasksRewardsReq {

        /**
         * Constructs a new Msg_ReceiveActivityGachaUpTasksRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveActivityGachaUpTasksRewardsReq);

        /** Msg_ReceiveActivityGachaUpTasksRewardsReq activityId. */
        public activityId: number;

        /** Msg_ReceiveActivityGachaUpTasksRewardsReq taskIds. */
        public taskIds: number[];

        /**
         * Encodes the specified Msg_ReceiveActivityGachaUpTasksRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveActivityGachaUpTasksRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveActivityGachaUpTasksRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveActivityGachaUpTasksRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveActivityGachaUpTasksRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveActivityGachaUpTasksRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveActivityGachaUpTasksRewardsReq;
    }

    /** Properties of a Msg_ReceiveActivityGachaUpTasksRewardsRsp. */
    interface IMsg_ReceiveActivityGachaUpTasksRewardsRsp {

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp activityId */
        activityId?: (number|null);

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp taskIds */
        taskIds?: (number[]|null);

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveActivityGachaUpTasksRewardsRsp. */
    class Msg_ReceiveActivityGachaUpTasksRewardsRsp implements IMsg_ReceiveActivityGachaUpTasksRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveActivityGachaUpTasksRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveActivityGachaUpTasksRewardsRsp);

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp activityId. */
        public activityId: number;

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp taskIds. */
        public taskIds: number[];

        /** Msg_ReceiveActivityGachaUpTasksRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveActivityGachaUpTasksRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveActivityGachaUpTasksRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveActivityGachaUpTasksRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveActivityGachaUpTasksRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveActivityGachaUpTasksRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveActivityGachaUpTasksRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveActivityGachaUpTasksRewardsRsp;
    }

    /** FightEvent enum. */
    enum FightEvent {
        FEUnknown = 0,
        FEUpdateHP = 1,
        FECreateHero = 2,
        FECreateBullet = 3,
        FERemoveObject = 4,
        FEAddBuffer = 5,
        FEUpdateBuffer = 6,
        FEUseSkill = 7,
        FEObjectDead = 8,
        FEObjectRevive = 9,
        FEDamage = 10,
        FEStartRest = 11,
        FEEndRest = 12,
        FEMoveTo = 13,
        FEEndFight = 14,
        FEDrawLine = 15,
        FEBufferHeal = 16,
        FEUpdateHoldTime = 17,
        FEMoveLineCircle = 18
    }

    /** Properties of a FightFlow. */
    interface IFightFlow {

        /** FightFlow timestamp */
        timestamp?: (number|null);

        /** FightFlow ev */
        ev?: (proto.FightEvent|null);

        /** FightFlow updateHP */
        updateHP?: (proto.IFightFlowUpdateHP|null);

        /** FightFlow createHero */
        createHero?: (proto.IFightFlowCreateHero|null);

        /** FightFlow createBullet */
        createBullet?: (proto.IFightFlowCreateBullet|null);

        /** FightFlow removeObject */
        removeObject?: (proto.IFightFlowRemoveObject|null);

        /** FightFlow addBuffer */
        addBuffer?: (proto.IFightFlowAddBuffer|null);

        /** FightFlow updateBuffer */
        updateBuffer?: (proto.IFightFlowUpdateBuffer|null);

        /** FightFlow useSkill */
        useSkill?: (proto.IFightFlowUseSkill|null);

        /** FightFlow objectDead */
        objectDead?: (proto.IFightFlowObjectDead|null);

        /** FightFlow objectRevive */
        objectRevive?: (proto.IFightFlowObjectRevive|null);

        /** FightFlow damage */
        damage?: (proto.IFightFlowDamage|null);

        /** FightFlow startRest */
        startRest?: (proto.IFightFlowStartRest|null);

        /** FightFlow endRest */
        endRest?: (proto.IFightFlowEndRest|null);

        /** FightFlow moveTo */
        moveTo?: (proto.IFightFlowMoveTo|null);

        /** FightFlow endFight */
        endFight?: (proto.IFightFlowEndFight|null);

        /** FightFlow drawLine */
        drawLine?: (proto.IFightFlowDrawLine|null);

        /** FightFlow bufferHeal */
        bufferHeal?: (proto.IFightFlowBufferHeal|null);

        /** FightFlow updateHoldTime */
        updateHoldTime?: (proto.IFightFlowUpdateHoldTime|null);

        /** FightFlow moveLineCircle */
        moveLineCircle?: (proto.IFightFlowMoveLineCircle|null);
    }

    /** Represents a FightFlow. */
    class FightFlow implements IFightFlow {

        /**
         * Constructs a new FightFlow.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlow);

        /** FightFlow timestamp. */
        public timestamp: number;

        /** FightFlow ev. */
        public ev: proto.FightEvent;

        /** FightFlow updateHP. */
        public updateHP?: (proto.IFightFlowUpdateHP|null);

        /** FightFlow createHero. */
        public createHero?: (proto.IFightFlowCreateHero|null);

        /** FightFlow createBullet. */
        public createBullet?: (proto.IFightFlowCreateBullet|null);

        /** FightFlow removeObject. */
        public removeObject?: (proto.IFightFlowRemoveObject|null);

        /** FightFlow addBuffer. */
        public addBuffer?: (proto.IFightFlowAddBuffer|null);

        /** FightFlow updateBuffer. */
        public updateBuffer?: (proto.IFightFlowUpdateBuffer|null);

        /** FightFlow useSkill. */
        public useSkill?: (proto.IFightFlowUseSkill|null);

        /** FightFlow objectDead. */
        public objectDead?: (proto.IFightFlowObjectDead|null);

        /** FightFlow objectRevive. */
        public objectRevive?: (proto.IFightFlowObjectRevive|null);

        /** FightFlow damage. */
        public damage?: (proto.IFightFlowDamage|null);

        /** FightFlow startRest. */
        public startRest?: (proto.IFightFlowStartRest|null);

        /** FightFlow endRest. */
        public endRest?: (proto.IFightFlowEndRest|null);

        /** FightFlow moveTo. */
        public moveTo?: (proto.IFightFlowMoveTo|null);

        /** FightFlow endFight. */
        public endFight?: (proto.IFightFlowEndFight|null);

        /** FightFlow drawLine. */
        public drawLine?: (proto.IFightFlowDrawLine|null);

        /** FightFlow bufferHeal. */
        public bufferHeal?: (proto.IFightFlowBufferHeal|null);

        /** FightFlow updateHoldTime. */
        public updateHoldTime?: (proto.IFightFlowUpdateHoldTime|null);

        /** FightFlow moveLineCircle. */
        public moveLineCircle?: (proto.IFightFlowMoveLineCircle|null);

        /** FightFlow Event. */
        public Event?: ("updateHP"|"createHero"|"createBullet"|"removeObject"|"addBuffer"|"updateBuffer"|"useSkill"|"objectDead"|"objectRevive"|"damage"|"startRest"|"endRest"|"moveTo"|"endFight"|"drawLine"|"bufferHeal"|"updateHoldTime"|"moveLineCircle");

        /**
         * Encodes the specified FightFlow message. Does not implicitly {@link proto.FightFlow.verify|verify} messages.
         * @param m FightFlow message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlow, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlow message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlow
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlow;
    }

    /** Properties of a FightFlowUpdateHP. */
    interface IFightFlowUpdateHP {

        /** FightFlowUpdateHP serial */
        serial?: (number|null);

        /** FightFlowUpdateHP hp */
        hp?: (number|Long|null);

        /** FightFlowUpdateHP maxHp */
        maxHp?: (number|Long|null);

        /** FightFlowUpdateHP sheild */
        sheild?: (number|Long|null);

        /** FightFlowUpdateHP maxShield */
        maxShield?: (number|Long|null);
    }

    /** Represents a FightFlowUpdateHP. */
    class FightFlowUpdateHP implements IFightFlowUpdateHP {

        /**
         * Constructs a new FightFlowUpdateHP.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowUpdateHP);

        /** FightFlowUpdateHP serial. */
        public serial: number;

        /** FightFlowUpdateHP hp. */
        public hp: (number|Long);

        /** FightFlowUpdateHP maxHp. */
        public maxHp: (number|Long);

        /** FightFlowUpdateHP sheild. */
        public sheild: (number|Long);

        /** FightFlowUpdateHP maxShield. */
        public maxShield: (number|Long);

        /**
         * Encodes the specified FightFlowUpdateHP message. Does not implicitly {@link proto.FightFlowUpdateHP.verify|verify} messages.
         * @param m FightFlowUpdateHP message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowUpdateHP, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowUpdateHP message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowUpdateHP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowUpdateHP;
    }

    /** Properties of a FightFlowCreateHero. */
    interface IFightFlowCreateHero {

        /** FightFlowCreateHero serial */
        serial?: (number|null);

        /** FightFlowCreateHero group */
        group?: (number|null);

        /** FightFlowCreateHero x */
        x?: (number|null);

        /** FightFlowCreateHero y */
        y?: (number|null);
    }

    /** Represents a FightFlowCreateHero. */
    class FightFlowCreateHero implements IFightFlowCreateHero {

        /**
         * Constructs a new FightFlowCreateHero.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowCreateHero);

        /** FightFlowCreateHero serial. */
        public serial: number;

        /** FightFlowCreateHero group. */
        public group: number;

        /** FightFlowCreateHero x. */
        public x: number;

        /** FightFlowCreateHero y. */
        public y: number;

        /**
         * Encodes the specified FightFlowCreateHero message. Does not implicitly {@link proto.FightFlowCreateHero.verify|verify} messages.
         * @param m FightFlowCreateHero message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowCreateHero, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowCreateHero message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowCreateHero
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowCreateHero;
    }

    /** Properties of a FightFlowCreateBullet. */
    interface IFightFlowCreateBullet {

        /** FightFlowCreateBullet serial */
        serial?: (number|null);

        /** FightFlowCreateBullet bulletId */
        bulletId?: (number|null);

        /** FightFlowCreateBullet group */
        group?: (number|null);

        /** FightFlowCreateBullet walkAnimId */
        walkAnimId?: (number|null);

        /** FightFlowCreateBullet x */
        x?: (number|null);

        /** FightFlowCreateBullet y */
        y?: (number|null);

        /** FightFlowCreateBullet hitEffect */
        hitEffect?: (number[]|null);
    }

    /** Represents a FightFlowCreateBullet. */
    class FightFlowCreateBullet implements IFightFlowCreateBullet {

        /**
         * Constructs a new FightFlowCreateBullet.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowCreateBullet);

        /** FightFlowCreateBullet serial. */
        public serial: number;

        /** FightFlowCreateBullet bulletId. */
        public bulletId: number;

        /** FightFlowCreateBullet group. */
        public group: number;

        /** FightFlowCreateBullet walkAnimId. */
        public walkAnimId: number;

        /** FightFlowCreateBullet x. */
        public x: number;

        /** FightFlowCreateBullet y. */
        public y: number;

        /** FightFlowCreateBullet hitEffect. */
        public hitEffect: number[];

        /**
         * Encodes the specified FightFlowCreateBullet message. Does not implicitly {@link proto.FightFlowCreateBullet.verify|verify} messages.
         * @param m FightFlowCreateBullet message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowCreateBullet, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowCreateBullet message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowCreateBullet
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowCreateBullet;
    }

    /** Properties of a FightFlowRemoveObject. */
    interface IFightFlowRemoveObject {

        /** FightFlowRemoveObject serial */
        serial?: (number|null);
    }

    /** Represents a FightFlowRemoveObject. */
    class FightFlowRemoveObject implements IFightFlowRemoveObject {

        /**
         * Constructs a new FightFlowRemoveObject.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowRemoveObject);

        /** FightFlowRemoveObject serial. */
        public serial: number;

        /**
         * Encodes the specified FightFlowRemoveObject message. Does not implicitly {@link proto.FightFlowRemoveObject.verify|verify} messages.
         * @param m FightFlowRemoveObject message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowRemoveObject, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowRemoveObject message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowRemoveObject
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowRemoveObject;
    }

    /** Properties of a FightFlowAddBuffer. */
    interface IFightFlowAddBuffer {

        /** FightFlowAddBuffer adder */
        adder?: (number|null);

        /** FightFlowAddBuffer owner */
        owner?: (number|null);

        /** FightFlowAddBuffer bufferId */
        bufferId?: (number|null);

        /** FightFlowAddBuffer index */
        index?: (number|null);

        /** FightFlowAddBuffer layer */
        layer?: (number|null);
    }

    /** Represents a FightFlowAddBuffer. */
    class FightFlowAddBuffer implements IFightFlowAddBuffer {

        /**
         * Constructs a new FightFlowAddBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowAddBuffer);

        /** FightFlowAddBuffer adder. */
        public adder: number;

        /** FightFlowAddBuffer owner. */
        public owner: number;

        /** FightFlowAddBuffer bufferId. */
        public bufferId: number;

        /** FightFlowAddBuffer index. */
        public index: number;

        /** FightFlowAddBuffer layer. */
        public layer: number;

        /**
         * Encodes the specified FightFlowAddBuffer message. Does not implicitly {@link proto.FightFlowAddBuffer.verify|verify} messages.
         * @param m FightFlowAddBuffer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowAddBuffer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowAddBuffer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowAddBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowAddBuffer;
    }

    /** Properties of a FightFlowUpdateBuffer. */
    interface IFightFlowUpdateBuffer {

        /** FightFlowUpdateBuffer owner */
        owner?: (number|null);

        /** FightFlowUpdateBuffer index */
        index?: (number|null);

        /** FightFlowUpdateBuffer layer */
        layer?: (number|null);
    }

    /** Represents a FightFlowUpdateBuffer. */
    class FightFlowUpdateBuffer implements IFightFlowUpdateBuffer {

        /**
         * Constructs a new FightFlowUpdateBuffer.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowUpdateBuffer);

        /** FightFlowUpdateBuffer owner. */
        public owner: number;

        /** FightFlowUpdateBuffer index. */
        public index: number;

        /** FightFlowUpdateBuffer layer. */
        public layer: number;

        /**
         * Encodes the specified FightFlowUpdateBuffer message. Does not implicitly {@link proto.FightFlowUpdateBuffer.verify|verify} messages.
         * @param m FightFlowUpdateBuffer message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowUpdateBuffer, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowUpdateBuffer message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowUpdateBuffer
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowUpdateBuffer;
    }

    /** Properties of a FightFlowUseSkill. */
    interface IFightFlowUseSkill {

        /** FightFlowUseSkill skillId */
        skillId?: (number|null);

        /** FightFlowUseSkill attacker */
        attacker?: (number|null);

        /** FightFlowUseSkill actionId */
        actionId?: (number|null);

        /** FightFlowUseSkill attackSpeed */
        attackSpeed?: (number|null);

        /** FightFlowUseSkill attackCount */
        attackCount?: (number|null);
    }

    /** Represents a FightFlowUseSkill. */
    class FightFlowUseSkill implements IFightFlowUseSkill {

        /**
         * Constructs a new FightFlowUseSkill.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowUseSkill);

        /** FightFlowUseSkill skillId. */
        public skillId: number;

        /** FightFlowUseSkill attacker. */
        public attacker: number;

        /** FightFlowUseSkill actionId. */
        public actionId: number;

        /** FightFlowUseSkill attackSpeed. */
        public attackSpeed: number;

        /** FightFlowUseSkill attackCount. */
        public attackCount: number;

        /**
         * Encodes the specified FightFlowUseSkill message. Does not implicitly {@link proto.FightFlowUseSkill.verify|verify} messages.
         * @param m FightFlowUseSkill message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowUseSkill, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowUseSkill message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowUseSkill
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowUseSkill;
    }

    /** Properties of a FightFlowObjectDead. */
    interface IFightFlowObjectDead {

        /** FightFlowObjectDead hp */
        hp?: (proto.IFightFlowUpdateHP|null);
    }

    /** Represents a FightFlowObjectDead. */
    class FightFlowObjectDead implements IFightFlowObjectDead {

        /**
         * Constructs a new FightFlowObjectDead.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowObjectDead);

        /** FightFlowObjectDead hp. */
        public hp?: (proto.IFightFlowUpdateHP|null);

        /**
         * Encodes the specified FightFlowObjectDead message. Does not implicitly {@link proto.FightFlowObjectDead.verify|verify} messages.
         * @param m FightFlowObjectDead message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowObjectDead, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowObjectDead message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowObjectDead
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowObjectDead;
    }

    /** Properties of a FightFlowObjectRevive. */
    interface IFightFlowObjectRevive {

        /** FightFlowObjectRevive hp */
        hp?: (proto.IFightFlowUpdateHP|null);
    }

    /** Represents a FightFlowObjectRevive. */
    class FightFlowObjectRevive implements IFightFlowObjectRevive {

        /**
         * Constructs a new FightFlowObjectRevive.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowObjectRevive);

        /** FightFlowObjectRevive hp. */
        public hp?: (proto.IFightFlowUpdateHP|null);

        /**
         * Encodes the specified FightFlowObjectRevive message. Does not implicitly {@link proto.FightFlowObjectRevive.verify|verify} messages.
         * @param m FightFlowObjectRevive message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowObjectRevive, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowObjectRevive message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowObjectRevive
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowObjectRevive;
    }

    /** Properties of a FightFlowDamage. */
    interface IFightFlowDamage {

        /** FightFlowDamage attacker */
        attacker?: (number|null);

        /** FightFlowDamage target */
        target?: (number|null);

        /** FightFlowDamage bulletSerial */
        bulletSerial?: (number|null);

        /** FightFlowDamage damage */
        damage?: (number|Long|null);

        /** FightFlowDamage shieldDamage */
        shieldDamage?: (number|Long|null);

        /** FightFlowDamage isCritical */
        isCritical?: (boolean|null);

        /** FightFlowDamage isFatalAtk */
        isFatalAtk?: (boolean|null);

        /** FightFlowDamage isDivulse */
        isDivulse?: (boolean|null);
    }

    /** Represents a FightFlowDamage. */
    class FightFlowDamage implements IFightFlowDamage {

        /**
         * Constructs a new FightFlowDamage.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowDamage);

        /** FightFlowDamage attacker. */
        public attacker: number;

        /** FightFlowDamage target. */
        public target: number;

        /** FightFlowDamage bulletSerial. */
        public bulletSerial: number;

        /** FightFlowDamage damage. */
        public damage: (number|Long);

        /** FightFlowDamage shieldDamage. */
        public shieldDamage: (number|Long);

        /** FightFlowDamage isCritical. */
        public isCritical: boolean;

        /** FightFlowDamage isFatalAtk. */
        public isFatalAtk: boolean;

        /** FightFlowDamage isDivulse. */
        public isDivulse: boolean;

        /**
         * Encodes the specified FightFlowDamage message. Does not implicitly {@link proto.FightFlowDamage.verify|verify} messages.
         * @param m FightFlowDamage message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowDamage, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowDamage message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowDamage
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowDamage;
    }

    /** Properties of a FightFlowStartRest. */
    interface IFightFlowStartRest {

        /** FightFlowStartRest serial */
        serial?: (number|null);

        /** FightFlowStartRest restTime */
        restTime?: (number|null);
    }

    /** Represents a FightFlowStartRest. */
    class FightFlowStartRest implements IFightFlowStartRest {

        /**
         * Constructs a new FightFlowStartRest.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowStartRest);

        /** FightFlowStartRest serial. */
        public serial: number;

        /** FightFlowStartRest restTime. */
        public restTime: number;

        /**
         * Encodes the specified FightFlowStartRest message. Does not implicitly {@link proto.FightFlowStartRest.verify|verify} messages.
         * @param m FightFlowStartRest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowStartRest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowStartRest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowStartRest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowStartRest;
    }

    /** Properties of a FightFlowEndRest. */
    interface IFightFlowEndRest {

        /** FightFlowEndRest serial */
        serial?: (number|null);

        /** FightFlowEndRest attackCount */
        attackCount?: (number|null);
    }

    /** Represents a FightFlowEndRest. */
    class FightFlowEndRest implements IFightFlowEndRest {

        /**
         * Constructs a new FightFlowEndRest.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowEndRest);

        /** FightFlowEndRest serial. */
        public serial: number;

        /** FightFlowEndRest attackCount. */
        public attackCount: number;

        /**
         * Encodes the specified FightFlowEndRest message. Does not implicitly {@link proto.FightFlowEndRest.verify|verify} messages.
         * @param m FightFlowEndRest message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowEndRest, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowEndRest message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowEndRest
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowEndRest;
    }

    /** Properties of a FightFlowMoveTo. */
    interface IFightFlowMoveTo {

        /** FightFlowMoveTo serial */
        serial?: (number|null);

        /** FightFlowMoveTo x */
        x?: (number|null);

        /** FightFlowMoveTo y */
        y?: (number|null);

        /** FightFlowMoveTo dx */
        dx?: (number|null);

        /** FightFlowMoveTo dy */
        dy?: (number|null);

        /** FightFlowMoveTo speed */
        speed?: (number|null);
    }

    /** Represents a FightFlowMoveTo. */
    class FightFlowMoveTo implements IFightFlowMoveTo {

        /**
         * Constructs a new FightFlowMoveTo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowMoveTo);

        /** FightFlowMoveTo serial. */
        public serial: number;

        /** FightFlowMoveTo x. */
        public x: number;

        /** FightFlowMoveTo y. */
        public y: number;

        /** FightFlowMoveTo dx. */
        public dx: number;

        /** FightFlowMoveTo dy. */
        public dy: number;

        /** FightFlowMoveTo speed. */
        public speed: number;

        /**
         * Encodes the specified FightFlowMoveTo message. Does not implicitly {@link proto.FightFlowMoveTo.verify|verify} messages.
         * @param m FightFlowMoveTo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowMoveTo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowMoveTo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowMoveTo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowMoveTo;
    }

    /** Properties of a FightFlowEndFight. */
    interface IFightFlowEndFight {

        /** FightFlowEndFight result */
        result?: (number|null);
    }

    /** Represents a FightFlowEndFight. */
    class FightFlowEndFight implements IFightFlowEndFight {

        /**
         * Constructs a new FightFlowEndFight.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowEndFight);

        /** FightFlowEndFight result. */
        public result: number;

        /**
         * Encodes the specified FightFlowEndFight message. Does not implicitly {@link proto.FightFlowEndFight.verify|verify} messages.
         * @param m FightFlowEndFight message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowEndFight, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowEndFight message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowEndFight
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowEndFight;
    }

    /** Properties of a FightFlowDrawLine. */
    interface IFightFlowDrawLine {

        /** FightFlowDrawLine serial */
        serial?: (number|null);

        /** FightFlowDrawLine points */
        points?: (number[]|null);
    }

    /** Represents a FightFlowDrawLine. */
    class FightFlowDrawLine implements IFightFlowDrawLine {

        /**
         * Constructs a new FightFlowDrawLine.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowDrawLine);

        /** FightFlowDrawLine serial. */
        public serial: number;

        /** FightFlowDrawLine points. */
        public points: number[];

        /**
         * Encodes the specified FightFlowDrawLine message. Does not implicitly {@link proto.FightFlowDrawLine.verify|verify} messages.
         * @param m FightFlowDrawLine message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowDrawLine, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowDrawLine message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowDrawLine
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowDrawLine;
    }

    /** Properties of a FightFlowBufferHeal. */
    interface IFightFlowBufferHeal {

        /** FightFlowBufferHeal serial */
        serial?: (number|null);

        /** FightFlowBufferHeal healHp */
        healHp?: (number|Long|null);

        /** FightFlowBufferHeal bufferIndex */
        bufferIndex?: (number|null);
    }

    /** Represents a FightFlowBufferHeal. */
    class FightFlowBufferHeal implements IFightFlowBufferHeal {

        /**
         * Constructs a new FightFlowBufferHeal.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowBufferHeal);

        /** FightFlowBufferHeal serial. */
        public serial: number;

        /** FightFlowBufferHeal healHp. */
        public healHp: (number|Long);

        /** FightFlowBufferHeal bufferIndex. */
        public bufferIndex: number;

        /**
         * Encodes the specified FightFlowBufferHeal message. Does not implicitly {@link proto.FightFlowBufferHeal.verify|verify} messages.
         * @param m FightFlowBufferHeal message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowBufferHeal, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowBufferHeal message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowBufferHeal
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowBufferHeal;
    }

    /** Properties of a FightFlowUpdateHoldTime. */
    interface IFightFlowUpdateHoldTime {

        /** FightFlowUpdateHoldTime serial */
        serial?: (number|null);

        /** FightFlowUpdateHoldTime holdTime */
        holdTime?: (number|null);
    }

    /** Represents a FightFlowUpdateHoldTime. */
    class FightFlowUpdateHoldTime implements IFightFlowUpdateHoldTime {

        /**
         * Constructs a new FightFlowUpdateHoldTime.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowUpdateHoldTime);

        /** FightFlowUpdateHoldTime serial. */
        public serial: number;

        /** FightFlowUpdateHoldTime holdTime. */
        public holdTime: number;

        /**
         * Encodes the specified FightFlowUpdateHoldTime message. Does not implicitly {@link proto.FightFlowUpdateHoldTime.verify|verify} messages.
         * @param m FightFlowUpdateHoldTime message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowUpdateHoldTime, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowUpdateHoldTime message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowUpdateHoldTime
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowUpdateHoldTime;
    }

    /** Properties of a FightFlowMoveLineCircle. */
    interface IFightFlowMoveLineCircle {

        /** FightFlowMoveLineCircle serial */
        serial?: (number|null);

        /** FightFlowMoveLineCircle x */
        x?: (number|null);

        /** FightFlowMoveLineCircle y */
        y?: (number|null);

        /** FightFlowMoveLineCircle dx */
        dx?: (number|null);

        /** FightFlowMoveLineCircle dy */
        dy?: (number|null);

        /** FightFlowMoveLineCircle speed */
        speed?: (number|null);

        /** FightFlowMoveLineCircle angle */
        angle?: (number|null);
    }

    /** Represents a FightFlowMoveLineCircle. */
    class FightFlowMoveLineCircle implements IFightFlowMoveLineCircle {

        /**
         * Constructs a new FightFlowMoveLineCircle.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightFlowMoveLineCircle);

        /** FightFlowMoveLineCircle serial. */
        public serial: number;

        /** FightFlowMoveLineCircle x. */
        public x: number;

        /** FightFlowMoveLineCircle y. */
        public y: number;

        /** FightFlowMoveLineCircle dx. */
        public dx: number;

        /** FightFlowMoveLineCircle dy. */
        public dy: number;

        /** FightFlowMoveLineCircle speed. */
        public speed: number;

        /** FightFlowMoveLineCircle angle. */
        public angle: number;

        /**
         * Encodes the specified FightFlowMoveLineCircle message. Does not implicitly {@link proto.FightFlowMoveLineCircle.verify|verify} messages.
         * @param m FightFlowMoveLineCircle message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightFlowMoveLineCircle, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightFlowMoveLineCircle message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightFlowMoveLineCircle
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightFlowMoveLineCircle;
    }

    /** Properties of a FightPvP. */
    interface IFightPvP {

        /** FightPvP fightInfo */
        fightInfo?: (proto.IMsg_PvPFightInfo[]|null);

        /** FightPvP fightFlow */
        fightFlow?: (proto.IFightFlow[]|null);
    }

    /** Represents a FightPvP. */
    class FightPvP implements IFightPvP {

        /**
         * Constructs a new FightPvP.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFightPvP);

        /** FightPvP fightInfo. */
        public fightInfo: proto.IMsg_PvPFightInfo[];

        /** FightPvP fightFlow. */
        public fightFlow: proto.IFightFlow[];

        /**
         * Encodes the specified FightPvP message. Does not implicitly {@link proto.FightPvP.verify|verify} messages.
         * @param m FightPvP message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFightPvP, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FightPvP message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FightPvP
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FightPvP;
    }

    /** Properties of a Msg_PvPFightInfo. */
    interface IMsg_PvPFightInfo {

        /** Msg_PvPFightInfo fightInfo */
        fightInfo?: (proto.IFightInfo|null);

        /** Msg_PvPFightInfo roleId */
        roleId?: (string|null);

        /** Msg_PvPFightInfo books */
        books?: (number[]|null);

        /** Msg_PvPFightInfo questLevel */
        questLevel?: (number|null);
    }

    /** Represents a Msg_PvPFightInfo. */
    class Msg_PvPFightInfo implements IMsg_PvPFightInfo {

        /**
         * Constructs a new Msg_PvPFightInfo.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_PvPFightInfo);

        /** Msg_PvPFightInfo fightInfo. */
        public fightInfo?: (proto.IFightInfo|null);

        /** Msg_PvPFightInfo roleId. */
        public roleId: string;

        /** Msg_PvPFightInfo books. */
        public books: number[];

        /** Msg_PvPFightInfo questLevel. */
        public questLevel: number;

        /**
         * Encodes the specified Msg_PvPFightInfo message. Does not implicitly {@link proto.Msg_PvPFightInfo.verify|verify} messages.
         * @param m Msg_PvPFightInfo message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_PvPFightInfo, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_PvPFightInfo message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_PvPFightInfo
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_PvPFightInfo;
    }

    /** Properties of a Msg_GetFincaBattleInfoReq. */
    interface IMsg_GetFincaBattleInfoReq {
    }

    /** Represents a Msg_GetFincaBattleInfoReq. */
    class Msg_GetFincaBattleInfoReq implements IMsg_GetFincaBattleInfoReq {

        /**
         * Constructs a new Msg_GetFincaBattleInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleInfoReq);

        /**
         * Encodes the specified Msg_GetFincaBattleInfoReq message. Does not implicitly {@link proto.Msg_GetFincaBattleInfoReq.verify|verify} messages.
         * @param m Msg_GetFincaBattleInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleInfoReq;
    }

    /** Properties of a Msg_GetFincaBattleInfoRsp. */
    interface IMsg_GetFincaBattleInfoRsp {

        /** Msg_GetFincaBattleInfoRsp heroIds */
        heroIds?: ((number|Long)[]|null);

        /** Msg_GetFincaBattleInfoRsp bookItemIds */
        bookItemIds?: (number[]|null);

        /** Msg_GetFincaBattleInfoRsp freeFightTimes */
        freeFightTimes?: (number|null);

        /** Msg_GetFincaBattleInfoRsp score */
        score?: (number|null);
    }

    /** Represents a Msg_GetFincaBattleInfoRsp. */
    class Msg_GetFincaBattleInfoRsp implements IMsg_GetFincaBattleInfoRsp {

        /**
         * Constructs a new Msg_GetFincaBattleInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleInfoRsp);

        /** Msg_GetFincaBattleInfoRsp heroIds. */
        public heroIds: (number|Long)[];

        /** Msg_GetFincaBattleInfoRsp bookItemIds. */
        public bookItemIds: number[];

        /** Msg_GetFincaBattleInfoRsp freeFightTimes. */
        public freeFightTimes: number;

        /** Msg_GetFincaBattleInfoRsp score. */
        public score: number;

        /**
         * Encodes the specified Msg_GetFincaBattleInfoRsp message. Does not implicitly {@link proto.Msg_GetFincaBattleInfoRsp.verify|verify} messages.
         * @param m Msg_GetFincaBattleInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleInfoRsp;
    }

    /** Properties of a Msg_FincaBattleFightReq. */
    interface IMsg_FincaBattleFightReq {

        /** Msg_FincaBattleFightReq opponentRoleId */
        opponentRoleId?: (string|null);

        /** Msg_FincaBattleFightReq isSweep */
        isSweep?: (boolean|null);
    }

    /** Represents a Msg_FincaBattleFightReq. */
    class Msg_FincaBattleFightReq implements IMsg_FincaBattleFightReq {

        /**
         * Constructs a new Msg_FincaBattleFightReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FincaBattleFightReq);

        /** Msg_FincaBattleFightReq opponentRoleId. */
        public opponentRoleId: string;

        /** Msg_FincaBattleFightReq isSweep. */
        public isSweep: boolean;

        /**
         * Encodes the specified Msg_FincaBattleFightReq message. Does not implicitly {@link proto.Msg_FincaBattleFightReq.verify|verify} messages.
         * @param m Msg_FincaBattleFightReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FincaBattleFightReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FincaBattleFightReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FincaBattleFightReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FincaBattleFightReq;
    }

    /** Properties of a Msg_FincaBattleFightRsp. */
    interface IMsg_FincaBattleFightRsp {

        /** Msg_FincaBattleFightRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_FincaBattleFightRsp opponentRoleId */
        opponentRoleId?: (string|null);

        /** Msg_FincaBattleFightRsp isSweep */
        isSweep?: (boolean|null);

        /** Msg_FincaBattleFightRsp freeFightTimes */
        freeFightTimes?: (number|null);

        /** Msg_FincaBattleFightRsp changeScore */
        changeScore?: (number|Long|null);

        /** Msg_FincaBattleFightRsp recording */
        recording?: (Uint8Array|null);

        /** Msg_FincaBattleFightRsp rewards */
        rewards?: (proto.IItem[]|null);

        /** Msg_FincaBattleFightRsp newScore */
        newScore?: (number|Long|null);
    }

    /** Represents a Msg_FincaBattleFightRsp. */
    class Msg_FincaBattleFightRsp implements IMsg_FincaBattleFightRsp {

        /**
         * Constructs a new Msg_FincaBattleFightRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_FincaBattleFightRsp);

        /** Msg_FincaBattleFightRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_FincaBattleFightRsp opponentRoleId. */
        public opponentRoleId: string;

        /** Msg_FincaBattleFightRsp isSweep. */
        public isSweep: boolean;

        /** Msg_FincaBattleFightRsp freeFightTimes. */
        public freeFightTimes: number;

        /** Msg_FincaBattleFightRsp changeScore. */
        public changeScore: (number|Long);

        /** Msg_FincaBattleFightRsp recording. */
        public recording: Uint8Array;

        /** Msg_FincaBattleFightRsp rewards. */
        public rewards: proto.IItem[];

        /** Msg_FincaBattleFightRsp newScore. */
        public newScore: (number|Long);

        /**
         * Encodes the specified Msg_FincaBattleFightRsp message. Does not implicitly {@link proto.Msg_FincaBattleFightRsp.verify|verify} messages.
         * @param m Msg_FincaBattleFightRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_FincaBattleFightRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_FincaBattleFightRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_FincaBattleFightRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_FincaBattleFightRsp;
    }

    /** Properties of a Msg_SetFincaBattleHeroIdsReq. */
    interface IMsg_SetFincaBattleHeroIdsReq {

        /** Msg_SetFincaBattleHeroIdsReq heroIds */
        heroIds?: ((number|Long)[]|null);
    }

    /** Represents a Msg_SetFincaBattleHeroIdsReq. */
    class Msg_SetFincaBattleHeroIdsReq implements IMsg_SetFincaBattleHeroIdsReq {

        /**
         * Constructs a new Msg_SetFincaBattleHeroIdsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetFincaBattleHeroIdsReq);

        /** Msg_SetFincaBattleHeroIdsReq heroIds. */
        public heroIds: (number|Long)[];

        /**
         * Encodes the specified Msg_SetFincaBattleHeroIdsReq message. Does not implicitly {@link proto.Msg_SetFincaBattleHeroIdsReq.verify|verify} messages.
         * @param m Msg_SetFincaBattleHeroIdsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetFincaBattleHeroIdsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetFincaBattleHeroIdsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetFincaBattleHeroIdsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetFincaBattleHeroIdsReq;
    }

    /** Properties of a Msg_SetFincaBattleHeroIdsRsp. */
    interface IMsg_SetFincaBattleHeroIdsRsp {

        /** Msg_SetFincaBattleHeroIdsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetFincaBattleHeroIdsRsp heroIds */
        heroIds?: ((number|Long)[]|null);
    }

    /** Represents a Msg_SetFincaBattleHeroIdsRsp. */
    class Msg_SetFincaBattleHeroIdsRsp implements IMsg_SetFincaBattleHeroIdsRsp {

        /**
         * Constructs a new Msg_SetFincaBattleHeroIdsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetFincaBattleHeroIdsRsp);

        /** Msg_SetFincaBattleHeroIdsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetFincaBattleHeroIdsRsp heroIds. */
        public heroIds: (number|Long)[];

        /**
         * Encodes the specified Msg_SetFincaBattleHeroIdsRsp message. Does not implicitly {@link proto.Msg_SetFincaBattleHeroIdsRsp.verify|verify} messages.
         * @param m Msg_SetFincaBattleHeroIdsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetFincaBattleHeroIdsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetFincaBattleHeroIdsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetFincaBattleHeroIdsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetFincaBattleHeroIdsRsp;
    }

    /** Properties of a Msg_SetFincaBattleBookIdsReq. */
    interface IMsg_SetFincaBattleBookIdsReq {

        /** Msg_SetFincaBattleBookIdsReq bookItemIds */
        bookItemIds?: (number[]|null);
    }

    /** Represents a Msg_SetFincaBattleBookIdsReq. */
    class Msg_SetFincaBattleBookIdsReq implements IMsg_SetFincaBattleBookIdsReq {

        /**
         * Constructs a new Msg_SetFincaBattleBookIdsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetFincaBattleBookIdsReq);

        /** Msg_SetFincaBattleBookIdsReq bookItemIds. */
        public bookItemIds: number[];

        /**
         * Encodes the specified Msg_SetFincaBattleBookIdsReq message. Does not implicitly {@link proto.Msg_SetFincaBattleBookIdsReq.verify|verify} messages.
         * @param m Msg_SetFincaBattleBookIdsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetFincaBattleBookIdsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetFincaBattleBookIdsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetFincaBattleBookIdsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetFincaBattleBookIdsReq;
    }

    /** Properties of a Msg_SetFincaBattleBookIdsRsp. */
    interface IMsg_SetFincaBattleBookIdsRsp {

        /** Msg_SetFincaBattleBookIdsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_SetFincaBattleBookIdsRsp bookItemIds */
        bookItemIds?: (number[]|null);
    }

    /** Represents a Msg_SetFincaBattleBookIdsRsp. */
    class Msg_SetFincaBattleBookIdsRsp implements IMsg_SetFincaBattleBookIdsRsp {

        /**
         * Constructs a new Msg_SetFincaBattleBookIdsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_SetFincaBattleBookIdsRsp);

        /** Msg_SetFincaBattleBookIdsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_SetFincaBattleBookIdsRsp bookItemIds. */
        public bookItemIds: number[];

        /**
         * Encodes the specified Msg_SetFincaBattleBookIdsRsp message. Does not implicitly {@link proto.Msg_SetFincaBattleBookIdsRsp.verify|verify} messages.
         * @param m Msg_SetFincaBattleBookIdsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_SetFincaBattleBookIdsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_SetFincaBattleBookIdsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_SetFincaBattleBookIdsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_SetFincaBattleBookIdsRsp;
    }

    /** Properties of a FincaBattleRole. */
    interface IFincaBattleRole {

        /** FincaBattleRole roleId */
        roleId?: (string|null);

        /** FincaBattleRole score */
        score?: (number|Long|null);

        /** FincaBattleRole powerScore */
        powerScore?: (number|null);

        /** FincaBattleRole simpleRole */
        simpleRole?: (proto.ISimpleRole|null);
    }

    /** Represents a FincaBattleRole. */
    class FincaBattleRole implements IFincaBattleRole {

        /**
         * Constructs a new FincaBattleRole.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFincaBattleRole);

        /** FincaBattleRole roleId. */
        public roleId: string;

        /** FincaBattleRole score. */
        public score: (number|Long);

        /** FincaBattleRole powerScore. */
        public powerScore: number;

        /** FincaBattleRole simpleRole. */
        public simpleRole?: (proto.ISimpleRole|null);

        /**
         * Encodes the specified FincaBattleRole message. Does not implicitly {@link proto.FincaBattleRole.verify|verify} messages.
         * @param m FincaBattleRole message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFincaBattleRole, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FincaBattleRole message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FincaBattleRole
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FincaBattleRole;
    }

    /** Properties of a Msg_GetFincaBattleOpponentsReq. */
    interface IMsg_GetFincaBattleOpponentsReq {

        /** Msg_GetFincaBattleOpponentsReq isRefresh */
        isRefresh?: (boolean|null);
    }

    /** Represents a Msg_GetFincaBattleOpponentsReq. */
    class Msg_GetFincaBattleOpponentsReq implements IMsg_GetFincaBattleOpponentsReq {

        /**
         * Constructs a new Msg_GetFincaBattleOpponentsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleOpponentsReq);

        /** Msg_GetFincaBattleOpponentsReq isRefresh. */
        public isRefresh: boolean;

        /**
         * Encodes the specified Msg_GetFincaBattleOpponentsReq message. Does not implicitly {@link proto.Msg_GetFincaBattleOpponentsReq.verify|verify} messages.
         * @param m Msg_GetFincaBattleOpponentsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleOpponentsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleOpponentsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleOpponentsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleOpponentsReq;
    }

    /** Properties of a Msg_GetFincaBattleOpponentsRsp. */
    interface IMsg_GetFincaBattleOpponentsRsp {

        /** Msg_GetFincaBattleOpponentsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetFincaBattleOpponentsRsp isRefresh */
        isRefresh?: (boolean|null);

        /** Msg_GetFincaBattleOpponentsRsp opponents */
        opponents?: (proto.IFincaBattleRole[]|null);
    }

    /** Represents a Msg_GetFincaBattleOpponentsRsp. */
    class Msg_GetFincaBattleOpponentsRsp implements IMsg_GetFincaBattleOpponentsRsp {

        /**
         * Constructs a new Msg_GetFincaBattleOpponentsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleOpponentsRsp);

        /** Msg_GetFincaBattleOpponentsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetFincaBattleOpponentsRsp isRefresh. */
        public isRefresh: boolean;

        /** Msg_GetFincaBattleOpponentsRsp opponents. */
        public opponents: proto.IFincaBattleRole[];

        /**
         * Encodes the specified Msg_GetFincaBattleOpponentsRsp message. Does not implicitly {@link proto.Msg_GetFincaBattleOpponentsRsp.verify|verify} messages.
         * @param m Msg_GetFincaBattleOpponentsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleOpponentsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleOpponentsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleOpponentsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleOpponentsRsp;
    }

    /** Properties of a FincaBattleFightRecord. */
    interface IFincaBattleFightRecord {

        /** FincaBattleFightRecord roleId */
        roleId?: (string|null);

        /** FincaBattleFightRecord roleName */
        roleName?: (string|null);

        /** FincaBattleFightRecord opponentRoleId */
        opponentRoleId?: (string|null);

        /** FincaBattleFightRecord opponentRoleName */
        opponentRoleName?: (string|null);

        /** FincaBattleFightRecord type */
        type?: (number|null);

        /** FincaBattleFightRecord time */
        time?: (number|Long|null);

        /** FincaBattleFightRecord isWin */
        isWin?: (boolean|null);

        /** FincaBattleFightRecord changeScore */
        changeScore?: (number|Long|null);
    }

    /** Represents a FincaBattleFightRecord. */
    class FincaBattleFightRecord implements IFincaBattleFightRecord {

        /**
         * Constructs a new FincaBattleFightRecord.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IFincaBattleFightRecord);

        /** FincaBattleFightRecord roleId. */
        public roleId: string;

        /** FincaBattleFightRecord roleName. */
        public roleName: string;

        /** FincaBattleFightRecord opponentRoleId. */
        public opponentRoleId: string;

        /** FincaBattleFightRecord opponentRoleName. */
        public opponentRoleName: string;

        /** FincaBattleFightRecord type. */
        public type: number;

        /** FincaBattleFightRecord time. */
        public time: (number|Long);

        /** FincaBattleFightRecord isWin. */
        public isWin: boolean;

        /** FincaBattleFightRecord changeScore. */
        public changeScore: (number|Long);

        /**
         * Encodes the specified FincaBattleFightRecord message. Does not implicitly {@link proto.FincaBattleFightRecord.verify|verify} messages.
         * @param m FincaBattleFightRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IFincaBattleFightRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a FincaBattleFightRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns FincaBattleFightRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.FincaBattleFightRecord;
    }

    /** Properties of a Msg_GetFincaBattleFightRecordsReq. */
    interface IMsg_GetFincaBattleFightRecordsReq {
    }

    /** Represents a Msg_GetFincaBattleFightRecordsReq. */
    class Msg_GetFincaBattleFightRecordsReq implements IMsg_GetFincaBattleFightRecordsReq {

        /**
         * Constructs a new Msg_GetFincaBattleFightRecordsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleFightRecordsReq);

        /**
         * Encodes the specified Msg_GetFincaBattleFightRecordsReq message. Does not implicitly {@link proto.Msg_GetFincaBattleFightRecordsReq.verify|verify} messages.
         * @param m Msg_GetFincaBattleFightRecordsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleFightRecordsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleFightRecordsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleFightRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleFightRecordsReq;
    }

    /** Properties of a Msg_GetFincaBattleFightRecordsRsp. */
    interface IMsg_GetFincaBattleFightRecordsRsp {

        /** Msg_GetFincaBattleFightRecordsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetFincaBattleFightRecordsRsp fightRecords */
        fightRecords?: (proto.IFincaBattleFightRecord[]|null);
    }

    /** Represents a Msg_GetFincaBattleFightRecordsRsp. */
    class Msg_GetFincaBattleFightRecordsRsp implements IMsg_GetFincaBattleFightRecordsRsp {

        /**
         * Constructs a new Msg_GetFincaBattleFightRecordsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetFincaBattleFightRecordsRsp);

        /** Msg_GetFincaBattleFightRecordsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetFincaBattleFightRecordsRsp fightRecords. */
        public fightRecords: proto.IFincaBattleFightRecord[];

        /**
         * Encodes the specified Msg_GetFincaBattleFightRecordsRsp message. Does not implicitly {@link proto.Msg_GetFincaBattleFightRecordsRsp.verify|verify} messages.
         * @param m Msg_GetFincaBattleFightRecordsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetFincaBattleFightRecordsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetFincaBattleFightRecordsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetFincaBattleFightRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetFincaBattleFightRecordsRsp;
    }

    /** Properties of a Msg_GetSimpleRankReq. */
    interface IMsg_GetSimpleRankReq {

        /** Msg_GetSimpleRankReq rankId */
        rankId?: (number|null);

        /** Msg_GetSimpleRankReq pageIndex */
        pageIndex?: (number|null);

        /** Msg_GetSimpleRankReq pageSize */
        pageSize?: (number|null);
    }

    /** Represents a Msg_GetSimpleRankReq. */
    class Msg_GetSimpleRankReq implements IMsg_GetSimpleRankReq {

        /**
         * Constructs a new Msg_GetSimpleRankReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSimpleRankReq);

        /** Msg_GetSimpleRankReq rankId. */
        public rankId: number;

        /** Msg_GetSimpleRankReq pageIndex. */
        public pageIndex: number;

        /** Msg_GetSimpleRankReq pageSize. */
        public pageSize: number;

        /**
         * Encodes the specified Msg_GetSimpleRankReq message. Does not implicitly {@link proto.Msg_GetSimpleRankReq.verify|verify} messages.
         * @param m Msg_GetSimpleRankReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSimpleRankReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSimpleRankReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSimpleRankReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSimpleRankReq;
    }

    /** Properties of a Msg_GetSimpleRankRsp. */
    interface IMsg_GetSimpleRankRsp {

        /** Msg_GetSimpleRankRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetSimpleRankRsp rankId */
        rankId?: (number|null);

        /** Msg_GetSimpleRankRsp pageIndex */
        pageIndex?: (number|null);

        /** Msg_GetSimpleRankRsp pageSize */
        pageSize?: (number|null);

        /** Msg_GetSimpleRankRsp total */
        total?: (number|null);

        /** Msg_GetSimpleRankRsp ranking */
        ranking?: (number|null);

        /** Msg_GetSimpleRankRsp rankList */
        rankList?: (proto.ISimpleRank[]|null);

        /** Msg_GetSimpleRankRsp selfSimple */
        selfSimple?: (proto.ISimpleRank|null);

        /** Msg_GetSimpleRankRsp settleTime */
        settleTime?: (number|Long|null);
    }

    /** Represents a Msg_GetSimpleRankRsp. */
    class Msg_GetSimpleRankRsp implements IMsg_GetSimpleRankRsp {

        /**
         * Constructs a new Msg_GetSimpleRankRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetSimpleRankRsp);

        /** Msg_GetSimpleRankRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetSimpleRankRsp rankId. */
        public rankId: number;

        /** Msg_GetSimpleRankRsp pageIndex. */
        public pageIndex: number;

        /** Msg_GetSimpleRankRsp pageSize. */
        public pageSize: number;

        /** Msg_GetSimpleRankRsp total. */
        public total: number;

        /** Msg_GetSimpleRankRsp ranking. */
        public ranking: number;

        /** Msg_GetSimpleRankRsp rankList. */
        public rankList: proto.ISimpleRank[];

        /** Msg_GetSimpleRankRsp selfSimple. */
        public selfSimple?: (proto.ISimpleRank|null);

        /** Msg_GetSimpleRankRsp settleTime. */
        public settleTime: (number|Long);

        /**
         * Encodes the specified Msg_GetSimpleRankRsp message. Does not implicitly {@link proto.Msg_GetSimpleRankRsp.verify|verify} messages.
         * @param m Msg_GetSimpleRankRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetSimpleRankRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetSimpleRankRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetSimpleRankRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetSimpleRankRsp;
    }

    /** Properties of a MainStageCleardRecord. */
    interface IMainStageCleardRecord {

        /** MainStageCleardRecord stageId */
        stageId?: (number|null);

        /** MainStageCleardRecord role */
        role?: (proto.ISimpleRole|null);

        /** MainStageCleardRecord weaponIds */
        weaponIds?: (number[]|null);

        /** MainStageCleardRecord heroes */
        heroes?: (proto.MainStageCleardRecord.IStageHero[]|null);

        /** MainStageCleardRecord time */
        time?: (number|Long|null);
    }

    /** Represents a MainStageCleardRecord. */
    class MainStageCleardRecord implements IMainStageCleardRecord {

        /**
         * Constructs a new MainStageCleardRecord.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMainStageCleardRecord);

        /** MainStageCleardRecord stageId. */
        public stageId: number;

        /** MainStageCleardRecord role. */
        public role?: (proto.ISimpleRole|null);

        /** MainStageCleardRecord weaponIds. */
        public weaponIds: number[];

        /** MainStageCleardRecord heroes. */
        public heroes: proto.MainStageCleardRecord.IStageHero[];

        /** MainStageCleardRecord time. */
        public time: (number|Long);

        /**
         * Encodes the specified MainStageCleardRecord message. Does not implicitly {@link proto.MainStageCleardRecord.verify|verify} messages.
         * @param m MainStageCleardRecord message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMainStageCleardRecord, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a MainStageCleardRecord message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns MainStageCleardRecord
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MainStageCleardRecord;
    }

    namespace MainStageCleardRecord {

        /** Properties of a StageHero. */
        interface IStageHero {

            /** StageHero heroItemId */
            heroItemId?: (number|null);

            /** StageHero level */
            level?: (number|null);

            /** StageHero damage */
            damage?: (number|null);
        }

        /** Represents a StageHero. */
        class StageHero implements IStageHero {

            /**
             * Constructs a new StageHero.
             * @param [p] Properties to set
             */
            constructor(p?: proto.MainStageCleardRecord.IStageHero);

            /** StageHero heroItemId. */
            public heroItemId: number;

            /** StageHero level. */
            public level: number;

            /** StageHero damage. */
            public damage: number;

            /**
             * Encodes the specified StageHero message. Does not implicitly {@link proto.MainStageCleardRecord.StageHero.verify|verify} messages.
             * @param m StageHero message or plain object to encode
             * @param [w] Writer to encode to
             * @returns Writer
             */
            public static encode(m: proto.MainStageCleardRecord.IStageHero, w?: $protobuf.Writer): $protobuf.Writer;

            /**
             * Decodes a StageHero message from the specified reader or buffer.
             * @param r Reader or buffer to decode from
             * @param [l] Message length if known beforehand
             * @returns StageHero
             * @throws {Error} If the payload is not a reader or valid buffer
             * @throws {$protobuf.util.ProtocolError} If required fields are missing
             */
            public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.MainStageCleardRecord.StageHero;
        }
    }

    /** Properties of a Msg_GetMainStageCleardRecordsReq. */
    interface IMsg_GetMainStageCleardRecordsReq {

        /** Msg_GetMainStageCleardRecordsReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_GetMainStageCleardRecordsReq. */
    class Msg_GetMainStageCleardRecordsReq implements IMsg_GetMainStageCleardRecordsReq {

        /**
         * Constructs a new Msg_GetMainStageCleardRecordsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMainStageCleardRecordsReq);

        /** Msg_GetMainStageCleardRecordsReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_GetMainStageCleardRecordsReq message. Does not implicitly {@link proto.Msg_GetMainStageCleardRecordsReq.verify|verify} messages.
         * @param m Msg_GetMainStageCleardRecordsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMainStageCleardRecordsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMainStageCleardRecordsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMainStageCleardRecordsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMainStageCleardRecordsReq;
    }

    /** Properties of a Msg_GetMainStageCleardRecordsRsp. */
    interface IMsg_GetMainStageCleardRecordsRsp {

        /** Msg_GetMainStageCleardRecordsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_GetMainStageCleardRecordsRsp stageId */
        stageId?: (number|null);

        /** Msg_GetMainStageCleardRecordsRsp firstRecord */
        firstRecord?: (proto.IMainStageCleardRecord|null);

        /** Msg_GetMainStageCleardRecordsRsp top3Records */
        top3Records?: (proto.IMainStageCleardRecord[]|null);
    }

    /** Represents a Msg_GetMainStageCleardRecordsRsp. */
    class Msg_GetMainStageCleardRecordsRsp implements IMsg_GetMainStageCleardRecordsRsp {

        /**
         * Constructs a new Msg_GetMainStageCleardRecordsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetMainStageCleardRecordsRsp);

        /** Msg_GetMainStageCleardRecordsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_GetMainStageCleardRecordsRsp stageId. */
        public stageId: number;

        /** Msg_GetMainStageCleardRecordsRsp firstRecord. */
        public firstRecord?: (proto.IMainStageCleardRecord|null);

        /** Msg_GetMainStageCleardRecordsRsp top3Records. */
        public top3Records: proto.IMainStageCleardRecord[];

        /**
         * Encodes the specified Msg_GetMainStageCleardRecordsRsp message. Does not implicitly {@link proto.Msg_GetMainStageCleardRecordsRsp.verify|verify} messages.
         * @param m Msg_GetMainStageCleardRecordsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetMainStageCleardRecordsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetMainStageCleardRecordsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetMainStageCleardRecordsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetMainStageCleardRecordsRsp;
    }

    /** Properties of a CumulativeRecharge. */
    interface ICumulativeRecharge {

        /** CumulativeRecharge activityId */
        activityId?: (number|null);

        /** CumulativeRecharge activityEndTime */
        activityEndTime?: (number|Long|null);

        /** CumulativeRecharge payAmount */
        payAmount?: (number|null);

        /** CumulativeRecharge receivedRewardIds */
        receivedRewardIds?: (number[]|null);
    }

    /** Represents a CumulativeRecharge. */
    class CumulativeRecharge implements ICumulativeRecharge {

        /**
         * Constructs a new CumulativeRecharge.
         * @param [p] Properties to set
         */
        constructor(p?: proto.ICumulativeRecharge);

        /** CumulativeRecharge activityId. */
        public activityId: number;

        /** CumulativeRecharge activityEndTime. */
        public activityEndTime: (number|Long);

        /** CumulativeRecharge payAmount. */
        public payAmount: number;

        /** CumulativeRecharge receivedRewardIds. */
        public receivedRewardIds: number[];

        /**
         * Encodes the specified CumulativeRecharge message. Does not implicitly {@link proto.CumulativeRecharge.verify|verify} messages.
         * @param m CumulativeRecharge message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.ICumulativeRecharge, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a CumulativeRecharge message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns CumulativeRecharge
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.CumulativeRecharge;
    }

    /** Properties of a Msg_GetCumulativeRechargeMapReq. */
    interface IMsg_GetCumulativeRechargeMapReq {
    }

    /** Represents a Msg_GetCumulativeRechargeMapReq. */
    class Msg_GetCumulativeRechargeMapReq implements IMsg_GetCumulativeRechargeMapReq {

        /**
         * Constructs a new Msg_GetCumulativeRechargeMapReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCumulativeRechargeMapReq);

        /**
         * Encodes the specified Msg_GetCumulativeRechargeMapReq message. Does not implicitly {@link proto.Msg_GetCumulativeRechargeMapReq.verify|verify} messages.
         * @param m Msg_GetCumulativeRechargeMapReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCumulativeRechargeMapReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCumulativeRechargeMapReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCumulativeRechargeMapReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCumulativeRechargeMapReq;
    }

    /** Properties of a Msg_GetCumulativeRechargeMapRsp. */
    interface IMsg_GetCumulativeRechargeMapRsp {

        /** Msg_GetCumulativeRechargeMapRsp cumulativeRechargeMap */
        cumulativeRechargeMap?: ({ [k: string]: proto.ICumulativeRecharge }|null);
    }

    /** Represents a Msg_GetCumulativeRechargeMapRsp. */
    class Msg_GetCumulativeRechargeMapRsp implements IMsg_GetCumulativeRechargeMapRsp {

        /**
         * Constructs a new Msg_GetCumulativeRechargeMapRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetCumulativeRechargeMapRsp);

        /** Msg_GetCumulativeRechargeMapRsp cumulativeRechargeMap. */
        public cumulativeRechargeMap: { [k: string]: proto.ICumulativeRecharge };

        /**
         * Encodes the specified Msg_GetCumulativeRechargeMapRsp message. Does not implicitly {@link proto.Msg_GetCumulativeRechargeMapRsp.verify|verify} messages.
         * @param m Msg_GetCumulativeRechargeMapRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetCumulativeRechargeMapRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetCumulativeRechargeMapRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetCumulativeRechargeMapRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetCumulativeRechargeMapRsp;
    }

    /** Properties of a Msg_ReceiveCumulativeRechargeRewardReq. */
    interface IMsg_ReceiveCumulativeRechargeRewardReq {

        /** Msg_ReceiveCumulativeRechargeRewardReq rewardId */
        rewardId?: (number|null);
    }

    /** Represents a Msg_ReceiveCumulativeRechargeRewardReq. */
    class Msg_ReceiveCumulativeRechargeRewardReq implements IMsg_ReceiveCumulativeRechargeRewardReq {

        /**
         * Constructs a new Msg_ReceiveCumulativeRechargeRewardReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveCumulativeRechargeRewardReq);

        /** Msg_ReceiveCumulativeRechargeRewardReq rewardId. */
        public rewardId: number;

        /**
         * Encodes the specified Msg_ReceiveCumulativeRechargeRewardReq message. Does not implicitly {@link proto.Msg_ReceiveCumulativeRechargeRewardReq.verify|verify} messages.
         * @param m Msg_ReceiveCumulativeRechargeRewardReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveCumulativeRechargeRewardReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveCumulativeRechargeRewardReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveCumulativeRechargeRewardReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveCumulativeRechargeRewardReq;
    }

    /** Properties of a Msg_ReceiveCumulativeRechargeRewardRsp. */
    interface IMsg_ReceiveCumulativeRechargeRewardRsp {

        /** Msg_ReceiveCumulativeRechargeRewardRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveCumulativeRechargeRewardRsp rewardId */
        rewardId?: (number|null);

        /** Msg_ReceiveCumulativeRechargeRewardRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveCumulativeRechargeRewardRsp. */
    class Msg_ReceiveCumulativeRechargeRewardRsp implements IMsg_ReceiveCumulativeRechargeRewardRsp {

        /**
         * Constructs a new Msg_ReceiveCumulativeRechargeRewardRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveCumulativeRechargeRewardRsp);

        /** Msg_ReceiveCumulativeRechargeRewardRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveCumulativeRechargeRewardRsp rewardId. */
        public rewardId: number;

        /** Msg_ReceiveCumulativeRechargeRewardRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveCumulativeRechargeRewardRsp message. Does not implicitly {@link proto.Msg_ReceiveCumulativeRechargeRewardRsp.verify|verify} messages.
         * @param m Msg_ReceiveCumulativeRechargeRewardRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveCumulativeRechargeRewardRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveCumulativeRechargeRewardRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveCumulativeRechargeRewardRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveCumulativeRechargeRewardRsp;
    }

    /** Properties of a Msg_GetEliteStageInfoReq. */
    interface IMsg_GetEliteStageInfoReq {
    }

    /** Represents a Msg_GetEliteStageInfoReq. */
    class Msg_GetEliteStageInfoReq implements IMsg_GetEliteStageInfoReq {

        /**
         * Constructs a new Msg_GetEliteStageInfoReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetEliteStageInfoReq);

        /**
         * Encodes the specified Msg_GetEliteStageInfoReq message. Does not implicitly {@link proto.Msg_GetEliteStageInfoReq.verify|verify} messages.
         * @param m Msg_GetEliteStageInfoReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetEliteStageInfoReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetEliteStageInfoReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetEliteStageInfoReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetEliteStageInfoReq;
    }

    /** Properties of a Msg_GetEliteStageInfoRsp. */
    interface IMsg_GetEliteStageInfoRsp {

        /** Msg_GetEliteStageInfoRsp clearedStageIds */
        clearedStageIds?: (number[]|null);

        /** Msg_GetEliteStageInfoRsp currentStageMaxAliveSeconds */
        currentStageMaxAliveSeconds?: (number|null);

        /** Msg_GetEliteStageInfoRsp fightingStageId */
        fightingStageId?: (number|null);

        /** Msg_GetEliteStageInfoRsp receivedFirstRewardStageIds */
        receivedFirstRewardStageIds?: (number[]|null);
    }

    /** Represents a Msg_GetEliteStageInfoRsp. */
    class Msg_GetEliteStageInfoRsp implements IMsg_GetEliteStageInfoRsp {

        /**
         * Constructs a new Msg_GetEliteStageInfoRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_GetEliteStageInfoRsp);

        /** Msg_GetEliteStageInfoRsp clearedStageIds. */
        public clearedStageIds: number[];

        /** Msg_GetEliteStageInfoRsp currentStageMaxAliveSeconds. */
        public currentStageMaxAliveSeconds: number;

        /** Msg_GetEliteStageInfoRsp fightingStageId. */
        public fightingStageId: number;

        /** Msg_GetEliteStageInfoRsp receivedFirstRewardStageIds. */
        public receivedFirstRewardStageIds: number[];

        /**
         * Encodes the specified Msg_GetEliteStageInfoRsp message. Does not implicitly {@link proto.Msg_GetEliteStageInfoRsp.verify|verify} messages.
         * @param m Msg_GetEliteStageInfoRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_GetEliteStageInfoRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_GetEliteStageInfoRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_GetEliteStageInfoRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_GetEliteStageInfoRsp;
    }

    /** Properties of a Msg_ReceiveEliteClearStageRewardsReq. */
    interface IMsg_ReceiveEliteClearStageRewardsReq {

        /** Msg_ReceiveEliteClearStageRewardsReq stageId */
        stageId?: (number|null);
    }

    /** Represents a Msg_ReceiveEliteClearStageRewardsReq. */
    class Msg_ReceiveEliteClearStageRewardsReq implements IMsg_ReceiveEliteClearStageRewardsReq {

        /**
         * Constructs a new Msg_ReceiveEliteClearStageRewardsReq.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveEliteClearStageRewardsReq);

        /** Msg_ReceiveEliteClearStageRewardsReq stageId. */
        public stageId: number;

        /**
         * Encodes the specified Msg_ReceiveEliteClearStageRewardsReq message. Does not implicitly {@link proto.Msg_ReceiveEliteClearStageRewardsReq.verify|verify} messages.
         * @param m Msg_ReceiveEliteClearStageRewardsReq message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveEliteClearStageRewardsReq, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveEliteClearStageRewardsReq message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveEliteClearStageRewardsReq
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveEliteClearStageRewardsReq;
    }

    /** Properties of a Msg_ReceiveEliteClearStageRewardsRsp. */
    interface IMsg_ReceiveEliteClearStageRewardsRsp {

        /** Msg_ReceiveEliteClearStageRewardsRsp error */
        error?: (proto.ICommonError|null);

        /** Msg_ReceiveEliteClearStageRewardsRsp stageId */
        stageId?: (number|null);

        /** Msg_ReceiveEliteClearStageRewardsRsp rewards */
        rewards?: (proto.IItem[]|null);
    }

    /** Represents a Msg_ReceiveEliteClearStageRewardsRsp. */
    class Msg_ReceiveEliteClearStageRewardsRsp implements IMsg_ReceiveEliteClearStageRewardsRsp {

        /**
         * Constructs a new Msg_ReceiveEliteClearStageRewardsRsp.
         * @param [p] Properties to set
         */
        constructor(p?: proto.IMsg_ReceiveEliteClearStageRewardsRsp);

        /** Msg_ReceiveEliteClearStageRewardsRsp error. */
        public error?: (proto.ICommonError|null);

        /** Msg_ReceiveEliteClearStageRewardsRsp stageId. */
        public stageId: number;

        /** Msg_ReceiveEliteClearStageRewardsRsp rewards. */
        public rewards: proto.IItem[];

        /**
         * Encodes the specified Msg_ReceiveEliteClearStageRewardsRsp message. Does not implicitly {@link proto.Msg_ReceiveEliteClearStageRewardsRsp.verify|verify} messages.
         * @param m Msg_ReceiveEliteClearStageRewardsRsp message or plain object to encode
         * @param [w] Writer to encode to
         * @returns Writer
         */
        public static encode(m: proto.IMsg_ReceiveEliteClearStageRewardsRsp, w?: $protobuf.Writer): $protobuf.Writer;

        /**
         * Decodes a Msg_ReceiveEliteClearStageRewardsRsp message from the specified reader or buffer.
         * @param r Reader or buffer to decode from
         * @param [l] Message length if known beforehand
         * @returns Msg_ReceiveEliteClearStageRewardsRsp
         * @throws {Error} If the payload is not a reader or valid buffer
         * @throws {$protobuf.util.ProtocolError} If required fields are missing
         */
        public static decode(r: ($protobuf.Reader|Uint8Array), l?: number): proto.Msg_ReceiveEliteClearStageRewardsRsp;
    }
}
