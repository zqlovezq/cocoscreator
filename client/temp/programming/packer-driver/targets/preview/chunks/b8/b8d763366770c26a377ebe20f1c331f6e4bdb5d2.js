System.register(["__unresolved_0", "cc", "__unresolved_1", "client_protocol", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, AbsControl, proto, tab, Net, EventMgr, HeroData, LocalEvent, RoleData, HeroTeamControl, HeroDataControl, HeroRed, BattleMainDataControl, OpenFunctionMgr, AdMgr, UIMgr, ViewName, MallDataMgr, BattlePassDataMgr, RookieTaskMgr, SettingsManager, RedMgr, RedDotType, GameplayViewDataMgr, FengyunRankControl, AssociationData, SettingRedManager, SignInGiftData, GuideController, ComicControl, MainSceneQueueUI, TaskData, FincaFightData, HeroControl, _crd, ccclass, property;

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "./HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "./HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "./herobag/HeroDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "./herobag/HeroRed", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "../activity/battlePass/BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskMgr(extras) {
    _reporterNs.report("RookieTaskMgr", "../activity/rookieTask/RookieTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingsManager(extras) {
    _reporterNs.report("SettingsManager", "../role/SettingsManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../jianghu/GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankControl(extras) {
    _reporterNs.report("FengyunRankControl", "../fengyunRanking/FengyunRankControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "../association/AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSettingRedManager(extras) {
    _reporterNs.report("SettingRedManager", "../role/SettingRedManager", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "../activity/signGift/SignInGiftData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfComicControl(extras) {
    _reporterNs.report("ComicControl", "../../../Common/script/ComicControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMainSceneQueueUI(extras) {
    _reporterNs.report("MainSceneQueueUI", "../../utils/MainSceneQueueUI", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTaskData(extras) {
    _reporterNs.report("TaskData", "../task/TaskData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFincaFightData(extras) {
    _reporterNs.report("FincaFightData", "../fincaFight/FincaFightData", _context.meta, extras);
  }

  _export("HeroControl", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      Net = _unresolved_4.Net;
    }, function (_unresolved_5) {
      EventMgr = _unresolved_5.EventMgr;
    }, function (_unresolved_6) {
      HeroData = _unresolved_6.HeroData;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      RoleData = _unresolved_8.RoleData;
    }, function (_unresolved_9) {
      HeroTeamControl = _unresolved_9.HeroTeamControl;
    }, function (_unresolved_10) {
      HeroDataControl = _unresolved_10.HeroDataControl;
    }, function (_unresolved_11) {
      HeroRed = _unresolved_11.HeroRed;
    }, function (_unresolved_12) {
      BattleMainDataControl = _unresolved_12.BattleMainDataControl;
    }, function (_unresolved_13) {
      OpenFunctionMgr = _unresolved_13.OpenFunctionMgr;
    }, function (_unresolved_14) {
      AdMgr = _unresolved_14.AdMgr;
    }, function (_unresolved_15) {
      UIMgr = _unresolved_15.UIMgr;
    }, function (_unresolved_16) {
      ViewName = _unresolved_16.ViewName;
    }, function (_unresolved_17) {
      MallDataMgr = _unresolved_17.MallDataMgr;
    }, function (_unresolved_18) {
      BattlePassDataMgr = _unresolved_18.BattlePassDataMgr;
    }, function (_unresolved_19) {
      RookieTaskMgr = _unresolved_19.RookieTaskMgr;
    }, function (_unresolved_20) {
      SettingsManager = _unresolved_20.SettingsManager;
    }, function (_unresolved_21) {
      RedMgr = _unresolved_21.RedMgr;
    }, function (_unresolved_22) {
      RedDotType = _unresolved_22.RedDotType;
    }, function (_unresolved_23) {
      GameplayViewDataMgr = _unresolved_23.GameplayViewDataMgr;
    }, function (_unresolved_24) {
      FengyunRankControl = _unresolved_24.FengyunRankControl;
    }, function (_unresolved_25) {
      AssociationData = _unresolved_25.AssociationData;
    }, function (_unresolved_26) {
      SettingRedManager = _unresolved_26.SettingRedManager;
    }, function (_unresolved_27) {
      SignInGiftData = _unresolved_27.SignInGiftData;
    }, function (_unresolved_28) {
      GuideController = _unresolved_28.GuideController;
    }, function (_unresolved_29) {
      ComicControl = _unresolved_29.ComicControl;
    }, function (_unresolved_30) {
      MainSceneQueueUI = _unresolved_30.default;
    }, function (_unresolved_31) {
      TaskData = _unresolved_31.TaskData;
    }, function (_unresolved_32) {
      FincaFightData = _unresolved_32.FincaFightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "a6234LKfHFKgIDCyjaEmb64", "HeroControl", undefined);

      __checkObsolete__(['Node', '_decorator', 'js', 'primitives', 'sys']);

      ({
        ccclass,
        property
      } = _decorator);
      /** 英雄 */

      _export("HeroControl", HeroControl = class HeroControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        static get ins() {
          if (null == this._instance) {
            this._instance = new HeroControl();
          }

          return this._instance;
        }

        register() {
          // EventMgr.onMsg(proto.Ptl.GetHeroesRsp, this.on_s2c_GetHeroesReq, this);

          /* 获取背包数据 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroBagRsp, this.on_s2c_GetHeroBagRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this);
          /* 获取关卡数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this);
          /* 抽卡数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateDropSum, this.on_s2c_UpdateDropSum, this);
          /* 获取功能开发数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetOpenFunctionsRsp, this.on_s2c_GetOpenFunctionsRsp, this);
          /* 开放功能变更推送 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.OpenFunctionChangePush, this.on_s2c_OpenFunctionChangePush, this);
          /* 广告推送数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AdvWatchDataPush, this.on_s2c_AdvWatchDataPush, this);
          /* 查看玩家数据 */
          // EventMgr.onMsg(proto.Ptl.GetSimpleRoleRsp, this.on_s2c_GetSimpleRoleRsp, this);

          /* 商店每日信息 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyShopInfoRsp, this.on_s2c_GetDailyShopInfoRsp, this);
          /* 商店固定信息 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFixedShopInfoMapRsp, this.on_s2c_GetFixedShopInfoMapRsp, this);
          /* 战令信息 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
          /* 试炼信息 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetNewPlayerTrialMapRsp, this.on_s2c_GetNewPlayerTrialMapRsp, this);
          /* 等级刷新 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RoleLevelUpPush, this.on_s2c_RoleLevelUpPush, this);
          /* 刷新图签信息 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UnlockedHeroAlbumPush, this.on_s2c_UnlockedHeroAlbumPush, this);
          /* 探险任务 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetExploreStageInfoMapRsp, this.on_s2c_GetExploreStageInfoMapRsp, this);
          /* 设置客户端数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetClientDataRsp, this.on_s2c_SetClientDataRsp, this);
          /* 新英雄绘卷数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangedScrollPaintingPush, this.on_s2c_ChangedScrollPaintingPush, this);
          /* 公会数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GuildBossDataPush, this.on_s2c_GuildBossDataPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetGuildInfoRsp, this.on_s2c_GetGuildInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetJoinGuildRequestsRsp, this.on_s2c_GetJoinGuildRequestsRsp, this); // NewDayPush 跨天跨天通知

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.NewDayPush, this.on_s2c_NewDayPush, this);
          /* 签到数据 */

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSignInGiftInfoRsp, this.on_s2c_GetSignInGiftInfoRsp, this); // 监听一下主场景加载完成

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).SceneLoaded, this.SceneLoadFunc, this); // 战令购买

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveBattlePassTaskRewardsRsp, this.on_s2c_ReceiveBattlePassTaskRewardsRsp, this); // 获取庄园战信息

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleInfoRsp, this.on_s2c_GetFincaBattleInfoRsp, this);
        }

        requestHeros() {
          // let msg = new proto.Msg_GetHeroesReq()
          // Net.Send(proto.Ptl.GetHeroesReq, msg)
          // 功能开启信息
          var func_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetOpenFunctionsReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetOpenFunctionsReq, func_msg); // 关卡信息

          var stage_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetMainStageInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageInfoReq, stage_msg); // 精英关卡信息

          var elite_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetEliteStageInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetEliteStageInfoReq, elite_msg); // 背包信息

          var bag_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetHeroBagReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetHeroBagReq, bag_msg); // 获取每日商店信息

          var daily_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetDailyShopInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyShopInfoReq, daily_msg); // 获取固定商店信息

          var fixed_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFixedShopInfoMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFixedShopInfoMapReq, fixed_msg); // 获取战令信息

          var pass_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetBattlePassInfoMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetBattlePassInfoMapReq, pass_msg); // 获取试炼任务信息

          var trial_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetNewPlayerTrialMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetNewPlayerTrialMapReq, trial_msg); // 探险任务

          var explore_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetExploreStageInfoMapReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetExploreStageInfoMapReq, explore_msg); // 签到数据

          var sign_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetSignInGiftInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetSignInGiftInfoReq, sign_msg); // 提前获取风云榜信息

          (_crd && FengyunRankControl === void 0 ? (_reportPossibleCrUseOfFengyunRankControl({
            error: Error()
          }), FengyunRankControl) : FengyunRankControl).ins.reqGetHonorRollMap(); // 获取公会信息 公会如果开放获取公会信息

          var isGuildOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Association);

          if (isGuildOpen) {
            var guild_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_GetGuildInfoReq();
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.GetGuildInfoReq, guild_msg);
          } // 获取竞技场信息


          var finca_msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetFincaBattleInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetFincaBattleInfoReq, finca_msg);
        }

        on_s2c_GetHeroBagRsp(msg) {
          /* 初始化team数据 */
          (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
            error: Error()
          }), HeroTeamControl) : HeroTeamControl).ins.initTeam(msg.teamSlots, msg.levelResonance, msg.starResonance);
          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.purge();
          (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.adds(msg.heroes); // 背包容量等级

          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.capacityLevel = msg.capacityLevel;
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.initData(msg.heroAlbumMap, msg.receivedRecommendTeamIds);
          /* 广告 */

          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.init();
          /* 红点 */

          (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.init(); // 设置

          (_crd && SettingsManager === void 0 ? (_reportPossibleCrUseOfSettingsManager({
            error: Error()
          }), SettingsManager) : SettingsManager).ins.loadSettings(); // 初始化红点弹窗提示

          (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
            error: Error()
          }), SettingRedManager) : SettingRedManager).ins.loadSettings(); // 初始化自动弹窗

          (_crd && MainSceneQueueUI === void 0 ? (_reportPossibleCrUseOfMainSceneQueueUI({
            error: Error()
          }), MainSceneQueueUI) : MainSceneQueueUI).init();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LoginProcessComplete);
        }

        on_s2c_Msg_UpdateHeroPowerScore(msg) {
          var heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(msg.heroId);

          if (heroInfo) {
            heroInfo.powerScore = msg.powerScore;
          }
        }

        on_s2c_GetMainStageInfoRsp(msg) {
          (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.initData(msg);
        }

        on_s2c_GetOpenFunctionsRsp(msg) {
          (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.setOpenFunctionData(msg.openFunctions);
        } // 刷新抽卡剩余次数


        on_s2c_UpdateDropSum(msg) {
          console.log(msg);
          var dropData = msg.data[0];
          var _roleDropData = null;

          for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.drop.data.length; i++) {
            var data = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.drop.data[i];

            if (data.id === dropData.id) {
              _roleDropData = data;
            }
          }

          if (_roleDropData) {
            _roleDropData.sum = dropData.sum;
          } else {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.drop.data.push(dropData);
          }
        }

        on_s2c_OpenFunctionChangePush(msg) {
          // 开放功能推送
          (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.pushOpenFunctionData(msg.openFunctions);
        }

        on_s2c_AdvWatchDataPush(msg) {
          // 广告光看次数推送
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.refreshData(msg.data);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds);
        } // // 查看玩家信息
        // on_s2c_GetSimpleRoleRsp(msg: proto.Msg_GetSimpleRoleRsp) {
        //     UIMgr.ins.show({ viewName: ViewName.CheckRoleInfoPop, data: { data: msg.role } })
        // }


        on_s2c_GetDailyShopInfoRsp(msg) {
          (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.initDailyShop(msg);
        }

        on_s2c_GetFixedShopInfoMapRsp(msg) {
          (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.initFixedShop(msg);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).openFuncRed);
        }

        on_s2c_GetBattlePassInfoMapRsp(msg) {
          (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.initPassBattle(msg);
        }

        on_s2c_GetNewPlayerTrialMapRsp(msg) {
          (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.initTask(msg);
        }

        on_s2c_RoleLevelUpPush(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.oldLevel = msg.level;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.addLevelUpAward(msg.rewards);
        }

        on_s2c_UnlockedHeroAlbumPush(msg) {
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshHeroAlbumIds(msg.heroItemId);
        }

        on_s2c_GetExploreStageInfoMapRsp(msg) {
          (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.initData(msg.stageInfoMap);
        }

        on_s2c_SetClientDataRsp(msg) {}

        on_s2c_ChangedScrollPaintingPush(msg) {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.paintings.length > 0) {
            var refresh = false;

            for (var i = 0; i < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.paintings.length; i++) {
              var painting = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.paintings[i];

              if (painting.heroItemId === msg.painting.heroItemId) {
                refresh = true;
                painting.unlockStar = msg.painting.unlockStar;
              }
            }

            if (!refresh) {
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.paintings.push(msg.painting);
            }
          } else {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.paintings.push(msg.painting);
          } // 刷新数据


          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.updatePaintings(); // 刷新红点

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).HeroPainting);
        }

        on_s2c_GetGuildInfoRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.initAssociationData(msg);
        }

        on_s2c_GetJoinGuildRequestsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.guildRequests = msg.requests;
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Apply);
        }

        on_s2c_GuildBossDataPush(msg) {
          (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.GuildBossMsg = msg;
        }

        on_s2c_NewDayPush(msg) {
          if (msg.time) {
            // 刷新需要跨天的红点
            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.staminaInfo) {
              (_crd && SettingRedManager === void 0 ? (_reportPossibleCrUseOfSettingRedManager({
                error: Error()
              }), SettingRedManager) : SettingRedManager).ins.resetLoadSetting();
            }
          }
        }

        on_s2c_GetSignInGiftInfoRsp(msg) {
          (_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.initSignInGift(msg);
        }

        SceneLoadFunc(sceneName) {
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding() && sceneName == "MainScene") {
            var achieveCondition = (_crd && ComicControl === void 0 ? (_reportPossibleCrUseOfComicControl({
              error: Error()
            }), ComicControl) : ComicControl).ins.getComicCondition((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId);

            if (achieveCondition && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId && (!(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.Comic || Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.Comic) < (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId)) {
              (_crd && ComicControl === void 0 ? (_reportPossibleCrUseOfComicControl({
                error: Error()
              }), ComicControl) : ComicControl).ins.addComic(achieveCondition, (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.uiNode);
              (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.setClientData("Comic", "" + (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.curClearStageId);
            }
          }
        }

        on_s2c_ReceiveBattlePassTaskRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CongratulationPop,
            data: msg.rewards
          });
          (_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.refreshTasks(msg.id, msg.tasks); // 更新任务

          (_crd && TaskData === void 0 ? (_reportPossibleCrUseOfTaskData({
            error: Error()
          }), TaskData) : TaskData).ins.refreshBattlePassTaskInfo(msg.tasks);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Battle_Pass);
        }

        on_s2c_GetFincaBattleInfoRsp(msg) {
          (_crd && FincaFightData === void 0 ? (_reportPossibleCrUseOfFincaFightData({
            error: Error()
          }), FincaFightData) : FincaFightData).ins.initData(msg);
        }

      });

      HeroControl._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b8d763366770c26a377ebe20f1c331f6e4bdb5d2.js.map