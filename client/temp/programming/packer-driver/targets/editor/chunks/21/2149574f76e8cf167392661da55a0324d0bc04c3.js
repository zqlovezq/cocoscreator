System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "client_protocol", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29", "__unresolved_30", "__unresolved_31", "__unresolved_32", "__unresolved_33", "__unresolved_34", "__unresolved_35", "__unresolved_36", "__unresolved_37", "__unresolved_38", "__unresolved_39"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, ProgressBar, RichText, sp, Sprite, ViewScreen, UIMgr, ViewName, RoleData, EventMgr, LocalEvent, PlayerHeadItem, ResourceItem, BattleMainDataControl, tab, createAnimation, GameUtil, setTextTime, setTextTime_3, LangMgr, ItemData, proto, PrestigeData, ChatData, ActivityData, HeroData, HeroTeamControl, PayData, OpenFunctionMgr, PatrolDataMgr, Net, RedDotType, RedMgr, RookieTaskMgr, FengyunRankData, GuideController, DisableGuideController, EnableGuideController, ChannelMgr, Global, RoleControl, MallDataMgr, MALLNAME, DEVELOPTYPE, TRIALLAYER, BattlePassDataMgr, AssociationControl, RedComp, RedEventComp, ForceUpPop, SignInGiftData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _dec19, _dec20, _dec21, _dec22, _dec23, _dec24, _dec25, _dec26, _dec27, _dec28, _dec29, _dec30, _dec31, _dec32, _dec33, _dec34, _dec35, _dec36, _dec37, _dec38, _dec39, _dec40, _dec41, _dec42, _dec43, _dec44, _dec45, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _descriptor18, _descriptor19, _descriptor20, _descriptor21, _descriptor22, _descriptor23, _descriptor24, _descriptor25, _descriptor26, _descriptor27, _descriptor28, _descriptor29, _descriptor30, _descriptor31, _descriptor32, _descriptor33, _descriptor34, _descriptor35, _descriptor36, _descriptor37, _descriptor38, _descriptor39, _descriptor40, _descriptor41, _descriptor42, _descriptor43, _descriptor44, _crd, ccclass, property, HomeMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerHeadItem(extras) {
    _reporterNs.report("PlayerHeadItem", "../common/PlayerHeadItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResourceItem(extras) {
    _reporterNs.report("ResourceItem", "../common/ResourceItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "./battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfcreateAnimation(extras) {
    _reporterNs.report("createAnimation", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPrestigeData(extras) {
    _reporterNs.report("PrestigeData", "../prestige/PrestigeData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatData(extras) {
    _reporterNs.report("ChatData", "../chat/ChatData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroData(extras) {
    _reporterNs.report("HeroData", "../hero/HeroData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroTeamControl(extras) {
    _reporterNs.report("HeroTeamControl", "../hero/HeroTeamControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfOpenFunctionMgr(extras) {
    _reporterNs.report("OpenFunctionMgr", "../../../Common/component/OpenFunctionMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPatrolDataMgr(extras) {
    _reporterNs.report("PatrolDataMgr", "./Patrol/PatrolDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieTaskMgr(extras) {
    _reporterNs.report("RookieTaskMgr", "../activity/rookieTask/RookieTaskMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFengyunRankData(extras) {
    _reporterNs.report("FengyunRankData", "../fengyunRanking/FengyunRankData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisableGuideController(extras) {
    _reporterNs.report("DisableGuideController", "../../guide/GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEnableGuideController(extras) {
    _reporterNs.report("EnableGuideController", "../../guide/GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../../../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleControl(extras) {
    _reporterNs.report("RoleControl", "../role/RoleControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDEVELOPTYPE(extras) {
    _reporterNs.report("DEVELOPTYPE", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALLAYER(extras) {
    _reporterNs.report("TRIALLAYER", "../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattlePassDataMgr(extras) {
    _reporterNs.report("BattlePassDataMgr", "../activity/battlePass/BattlePassDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "../association/AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedComp(extras) {
    _reporterNs.report("RedComp", "../../../Common/component/RedComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedEventComp(extras) {
    _reporterNs.report("RedEventComp", "../../../Common/component/RedEventComp", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityOpenInfo(extras) {
    _reporterNs.report("ActivityOpenInfo", "../activity/ActivityOpenInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfForceUpPop(extras) {
    _reporterNs.report("ForceUpPop", "../item/ForceUpPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInGiftData(extras) {
    _reporterNs.report("SignInGiftData", "../activity/signGift/SignInGiftData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
      RichText = _cc.RichText;
      sp = _cc.sp;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ViewName = _unresolved_4.ViewName;
    }, function (_unresolved_5) {
      RoleData = _unresolved_5.RoleData;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      LocalEvent = _unresolved_7.LocalEvent;
    }, function (_unresolved_8) {
      PlayerHeadItem = _unresolved_8.PlayerHeadItem;
    }, function (_unresolved_9) {
      ResourceItem = _unresolved_9.ResourceItem;
    }, function (_unresolved_10) {
      BattleMainDataControl = _unresolved_10.BattleMainDataControl;
    }, function (_unresolved_11) {
      tab = _unresolved_11.tab;
    }, function (_unresolved_12) {
      createAnimation = _unresolved_12.createAnimation;
      GameUtil = _unresolved_12.GameUtil;
      setTextTime = _unresolved_12.setTextTime;
      setTextTime_3 = _unresolved_12.setTextTime_3;
    }, function (_unresolved_13) {
      LangMgr = _unresolved_13.LangMgr;
    }, function (_unresolved_14) {
      ItemData = _unresolved_14.ItemData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_15) {
      PrestigeData = _unresolved_15.PrestigeData;
    }, function (_unresolved_16) {
      ChatData = _unresolved_16.ChatData;
    }, function (_unresolved_17) {
      ActivityData = _unresolved_17.ActivityData;
    }, function (_unresolved_18) {
      HeroData = _unresolved_18.HeroData;
    }, function (_unresolved_19) {
      HeroTeamControl = _unresolved_19.HeroTeamControl;
    }, function (_unresolved_20) {
      PayData = _unresolved_20.PayData;
    }, function (_unresolved_21) {
      OpenFunctionMgr = _unresolved_21.OpenFunctionMgr;
    }, function (_unresolved_22) {
      PatrolDataMgr = _unresolved_22.PatrolDataMgr;
    }, function (_unresolved_23) {
      Net = _unresolved_23.Net;
    }, function (_unresolved_24) {
      RedDotType = _unresolved_24.RedDotType;
    }, function (_unresolved_25) {
      RedMgr = _unresolved_25.RedMgr;
    }, function (_unresolved_26) {
      RookieTaskMgr = _unresolved_26.RookieTaskMgr;
    }, function (_unresolved_27) {
      FengyunRankData = _unresolved_27.FengyunRankData;
    }, function (_unresolved_28) {
      GuideController = _unresolved_28.GuideController;
    }, function (_unresolved_29) {
      DisableGuideController = _unresolved_29.DisableGuideController;
      EnableGuideController = _unresolved_29.EnableGuideController;
    }, function (_unresolved_30) {
      ChannelMgr = _unresolved_30.ChannelMgr;
    }, function (_unresolved_31) {
      Global = _unresolved_31.Global;
    }, function (_unresolved_32) {
      RoleControl = _unresolved_32.RoleControl;
    }, function (_unresolved_33) {
      MallDataMgr = _unresolved_33.MallDataMgr;
    }, function (_unresolved_34) {
      MALLNAME = _unresolved_34.MALLNAME;
      DEVELOPTYPE = _unresolved_34.DEVELOPTYPE;
      TRIALLAYER = _unresolved_34.TRIALLAYER;
    }, function (_unresolved_35) {
      BattlePassDataMgr = _unresolved_35.BattlePassDataMgr;
    }, function (_unresolved_36) {
      AssociationControl = _unresolved_36.AssociationControl;
    }, function (_unresolved_37) {
      RedComp = _unresolved_37.default;
    }, function (_unresolved_38) {
      RedEventComp = _unresolved_38.default;
    }, function (_unresolved_39) {
      ForceUpPop = _unresolved_39.ForceUpPop;
    }, function (_unresolved_40) {
      SignInGiftData = _unresolved_40.SignInGiftData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8f7acfiMThEwZ0BLq8/Mlyu", "HomeMainView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'instantiate', 'Label', 'Layers', 'log', 'Node', 'ProgressBar', 'RichText', 'Size', 'sp', 'Sprite', 'SpriteFrame', 'SpriteRenderer', 'Tween', 'tween', 'UITransform', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("HomeMainView", HomeMainView = (_dec = ccclass('HomeMainView'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec12 = property(Label), _dec13 = property(Label), _dec14 = property(ProgressBar), _dec15 = property(_crd && PlayerHeadItem === void 0 ? (_reportPossibleCrUseOfPlayerHeadItem({
        error: Error()
      }), PlayerHeadItem) : PlayerHeadItem), _dec16 = property(_crd && ResourceItem === void 0 ? (_reportPossibleCrUseOfResourceItem({
        error: Error()
      }), ResourceItem) : ResourceItem), _dec17 = property(Label), _dec18 = property(Label), _dec19 = property(Label), _dec20 = property(Node), _dec21 = property(Label), _dec22 = property(Node), _dec23 = property(Node), _dec24 = property(Label), _dec25 = property(Label), _dec26 = property(Node), _dec27 = property(RichText), _dec28 = property(Node), _dec29 = property(Node), _dec30 = property(Node), _dec31 = property(Node), _dec32 = property(Label), _dec33 = property(Node), _dec34 = property(Node), _dec35 = property(Node), _dec36 = property(Node), _dec37 = property(Node), _dec38 = property(Node), _dec39 = property(Node), _dec40 = property(Node), _dec41 = property(Node), _dec42 = property(Node), _dec43 = property(Sprite), _dec44 = property(Node), _dec45 = property(Node), _dec(_class = (_class2 = class HomeMainView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "forceLab", _descriptor, this);

          _initializerDefineProperty(this, "nameLab", _descriptor2, this);

          _initializerDefineProperty(this, "titleImg", _descriptor3, this);

          _initializerDefineProperty(this, "vipImg", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_level", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_vip_level", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_power_score", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_chapter_name", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_max_alive_second", _descriptor9, this);

          _initializerDefineProperty(this, "lbl_chapter_icon", _descriptor10, this);

          _initializerDefineProperty(this, "lbl_chapter_num", _descriptor11, this);

          _initializerDefineProperty(this, "lbl_revive_num", _descriptor12, this);

          _initializerDefineProperty(this, "expBar", _descriptor13, this);

          _initializerDefineProperty(this, "palyerHeadItem", _descriptor14, this);

          _initializerDefineProperty(this, "resourceItem", _descriptor15, this);

          _initializerDefineProperty(this, "prestigeNameLab", _descriptor16, this);

          _initializerDefineProperty(this, "prestigeTotalLab", _descriptor17, this);

          _initializerDefineProperty(this, "prestigeNowLab", _descriptor18, this);

          _initializerDefineProperty(this, "chatNode", _descriptor19, this);

          _initializerDefineProperty(this, "channelLab", _descriptor20, this);

          _initializerDefineProperty(this, "chatWorldNode", _descriptor21, this);

          _initializerDefineProperty(this, "chatNotNode", _descriptor22, this);

          _initializerDefineProperty(this, "chatNameLab", _descriptor23, this);

          _initializerDefineProperty(this, "chatContentLab", _descriptor24, this);

          _initializerDefineProperty(this, "chatSystemNode", _descriptor25, this);

          _initializerDefineProperty(this, "chatSystemRichTxt", _descriptor26, this);

          _initializerDefineProperty(this, "limitBtnNode", _descriptor27, this);

          _initializerDefineProperty(this, "node_spines", _descriptor28, this);

          _initializerDefineProperty(this, "firstRechargeBtnNode", _descriptor29, this);

          _initializerDefineProperty(this, "breakEggNode", _descriptor30, this);

          _initializerDefineProperty(this, "breakEggNumLab", _descriptor31, this);

          _initializerDefineProperty(this, "breakEggNumNode", _descriptor32, this);

          _initializerDefineProperty(this, "node_battle_pass", _descriptor33, this);

          _initializerDefineProperty(this, "node_patrol_red", _descriptor34, this);

          _initializerDefineProperty(this, "node_rookie_task_btn", _descriptor35, this);

          _initializerDefineProperty(this, "node_red_trial", _descriptor36, this);

          _initializerDefineProperty(this, "honorRankNode", _descriptor37, this);

          _initializerDefineProperty(this, "node_day_gift_btn", _descriptor38, this);

          _initializerDefineProperty(this, "node_finger", _descriptor39, this);

          _initializerDefineProperty(this, "node_activity_red", _descriptor40, this);

          _initializerDefineProperty(this, "node_activity_group", _descriptor41, this);

          _initializerDefineProperty(this, "sp_activity_combine", _descriptor42, this);

          _initializerDefineProperty(this, "node_signing_gift", _descriptor43, this);

          this.PatrolTime = 0;
          this.checkGuide = true;

          _initializerDefineProperty(this, "event_scroll", _descriptor44, this);
        }

        onLoad() {
          super.onLoad();
          this.event_scroll.active = !(_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).isReview;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ItemChangePush, this.on_s2c_ItemChangePush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.RoleLevelUpPush, this.on_s2c_RoleLevelUpPush, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateRolePowerScore, this.on_s2c_UpdateRolePowerScore, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.UpdateHeroPowerScore, this.on_s2c_Msg_UpdateHeroPowerScore, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetBattlePassInfoMapRsp, this.on_s2c_GetBattlePassInfoMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Prestige_Change, this.updatePrestige, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).ChatMessage_Change, this.updateChatMessage, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LimitedBenefits_Change, this.updateLimitReward, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).FirstRecharge_Chang, this.updateFirstRecharge, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).BreakEgg_change, this.updateBreakEgg, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).VipLevel_Change, this.updateVip, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).hidePop, this.checkMainView, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPatrolInfoRsp, this.on_s2c_GetPatrolInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceivePatrolRewardRsp, this.on_s2c_ReceivePatrolRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ChangeRoleNameRsp, this.on_s2c_ChangeRoleName, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).TrialRed, this.updateTrialRed, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).checkOpenFuncPop, this.checkOpenFuncPop, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.LimitedRewardPush, this.updateLimitReward, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SetTeamSlotRsp, this.on_s2c_SetTeamSlotRsp, this);
          (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
            error: Error()
          }), RoleControl) : RoleControl).ins.requestGetServerTime(); // 精彩活动红点

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityRsp, this.on_s2c_BuyFixedShopCommodityRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.AdvWatchDataPush, this.updateActivityRed, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).openFuncRed, this.updateActivityRed, this);
        }

        on_s2c_ChangeRoleName(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.changeNameTimes++;
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.name = msg.name;
            this.updatePlayerName();
          }
        }
        /* 上阵英雄 */


        on_s2c_SetTeamSlotRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.updateHeroSpine(Number(msg.heroId));
        }

        on_s2c_UpdateRolePowerScore(msg) {
          // 战力提升
          if (msg.powerScore > (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ForceUpPop,
              data: {
                power: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.powerScore,
                addPower: msg.powerScore - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.powerScore
              }
            });
          }

          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore = msg.powerScore;
          this.updateForce();
        }

        on_s2c_Msg_UpdateHeroPowerScore(msg) {
          const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
            error: Error()
          }), HeroData) : HeroData).ins.getById(msg.heroId);

          if (heroInfo) {
            heroInfo.powerScore = msg.powerScore;
          }
        }

        on_s2c_RoleLevelUpPush(msg) {
          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.oldLevel = msg.level; // 播放小鸡升级动画

          this.updateLevel(); //----武器装备槽位根据等级解锁 需要刷新红点-------

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).BooK_Equip);
        }

        on_s2c_ItemChangePush(msg) {
          if (msg.updatedItems) {
            for (let i = 0; i < msg.updatedItems.length; i++) {
              const item = msg.updatedItems[i];

              if (item.itemId === 3) {
                this.updateExpBar();
              }

              if (item.itemId === 202) {
                this.lbl_revive_num.string = String((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                  error: Error()
                }), ItemData) : ItemData).ins.getCount(202));
              }
            }
          }
        }

        start() {
          if ((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getStageClearIds().length === 0 && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.curClearStageId === 101) {
            (_crd && EnableGuideController === void 0 ? (_reportPossibleCrUseOfEnableGuideController({
              error: Error()
            }), EnableGuideController) : EnableGuideController)();
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.showMonster = false;
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.dropCount = 1;
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.node_jump.active = false;
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).unLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).JadeDrop);
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.clearTask();
          }

          if (!(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished() && this.checkGuide) {
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.clearTask();
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setGuideStep();
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).CheckGuide);
            this.checkGuide = false;
          } else {
            (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
              error: Error()
            }), DisableGuideController) : DisableGuideController)();
          }

          clearTimeout((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.setTimeOutCount); // 刷新一下武器礼包状态

          (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.refresh7GiftPackBuyState();
          this.initView();
          (_crd && RoleControl === void 0 ? (_reportPossibleCrUseOfRoleControl({
            error: Error()
          }), RoleControl) : RoleControl).ins.updateNoticeRed();
        }

        initView() {
          this.updatePlayerName();
          this.updateChapterData();
          this.updateForce();
          this.updateLevel();
          this.updateVip();
          this.updateExpBar();
          this.updatePrestige();
          this.updateChatMessage();
          this.updateLimitReward();
          this.updateHeroSpine();
          this.updateFirstRecharge();
          this.updateBreakEgg();
          this.updatePatrolData();
          this.updateTrial();
          this.jumpToChallenge();
          this.updateGiftBtn();
          this.refreshRed();
          this.updateActivityRed();
          this.showFinger();
          this.refreshActivityGroup(); // log("数字1000===="+GameUtil.convertNumber(1000));
          // log("数字10000===="+GameUtil.convertNumber(10000));
          // log("数字100003===="+GameUtil.convertNumber(100003));
          // log("数字101003===="+GameUtil.convertNumber(101003)+"======",GameUtil.convertNumber(101003,true));
          // log("数字101503===="+GameUtil.convertNumber(101503)+"======",GameUtil.convertNumber(101503,true));
          // log("数字10150333222===="+GameUtil.convertNumber(10150333222)+"======",GameUtil.convertNumber(10150333222,true));
          // log("数字18150333222===="+GameUtil.convertNumber(18150333222)+"======",GameUtil.convertNumber(18150333222,true));

          this.updateHonorRank();
        }

        onClickFight() {// SceneMgr.ins.enterFight()
        }

        onClickMatch() {}

        onClickTest() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).AzheGmPop
          });
        }
        /**刷新体力 */


        updatePower() {}
        /**
         * 刷新玩家名称
         */


        updatePlayerName() {
          this.nameLab.string = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.name;
        }
        /**
         * 刷新头像信息
         */


        updateHeadInfo() {}
        /**刷新玩家等级 */


        updateLevel() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.oldLevel && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.oldLevel > (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level) {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.level = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.oldLevel;
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.oldLevel = 0;
            this.scheduleOnce(() => {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).PlayerLvUpPop,
                data: (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                  error: Error()
                }), RoleData) : RoleData).ins.level
              });
            });
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).roleLevelUp((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.sdkRole());
          } else {
            this.checkOpenFuncPop();
          }

          this.lbl_level.string = String((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level);
        }
        /**刷新经验条 */


        updateExpBar() {
          // 当前等级
          const playerLv = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.level;
          const PlayerLvTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PlayerLvTableByPlayerLv.getValue(playerLv);
          const curExpMax = PlayerLvTab.Exp;
          const ExpCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(3);
          let ExpBarMother = 0;
          let ExpBarChild = 0;

          if (playerLv > 1) {
            const lasExpMax = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PlayerLvTableByPlayerLv.getValue(playerLv - 1).Exp;
            ExpBarMother = curExpMax - lasExpMax;
            ExpBarChild = ExpCount - lasExpMax;
          } else {
            ExpBarMother = curExpMax;
            ExpBarChild = ExpCount;
          }

          this.expBar.progress = ExpBarChild / ExpBarMother;
        }

        updateVip() {
          this.lbl_vip_level.string = String((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.vipLevel);
        }

        updateForce() {
          this.lbl_power_score.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore);
        }
        /* 玩家章节信息 */


        updateChapterData() {
          const curChapterId = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getChapterId();
          const chapterData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(curChapterId);
          this.lbl_chapter_icon.setTexture(chapterData.Icon);
          this.lbl_max_alive_second.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
            error: Error()
          }), setTextTime_3) : setTextTime_3)((_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getCurMaxAliveSecond());
          this.lbl_chapter_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(chapterData.Name);
          this.lbl_chapter_num.string = String(curChapterId);
          this.lbl_revive_num.string = String((_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(202));
        }

        updatePrestige() {
          let taskInfo = (_crd && PrestigeData === void 0 ? (_reportPossibleCrUseOfPrestigeData({
            error: Error()
          }), PrestigeData) : PrestigeData).ins.getHomeShowTaskInfo();

          if (taskInfo) {
            this.prestigeNameLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(taskInfo.taskTable.Describe);
            this.prestigeTotalLab.string = taskInfo.taskTable.FinishParam1 + "";
            this.prestigeNowLab.string = taskInfo.progress + "";
          }
        }

        updateChatMessage() {
          let info = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.newMessageInfo;

          if (info) {
            this.chatNode.active = true;
            this.chatNotNode.active = false;
            let type = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.getChanneTypeById(Number(info.channelId));

            if (type == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).ChatChannelType.World) {
              this.chatWorldNode.active = true;
              this.chatSystemNode.active = false;
              this.chatNameLab.string = info.sender.name;
              this.chatContentLab.string = info.normal; //this.channelLab.string="世界";

              this.channelLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_74");
            } else {
              this.chatWorldNode.active = false;
              this.chatSystemNode.active = true;
              this.chatSystemRichTxt.string = info.systemContent; //this.channelLab.string="系统";

              this.channelLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab("ui_commondesc_75");
            }
          } else {
            this.chatNode.active = false;
            this.chatNotNode.active = true;
          }
        }

        updateLimitReward() {
          this.limitBtnNode.active = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_LimitBenifit);
        }

        onClickChat() {
          let info = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
            error: Error()
          }), ChatData) : ChatData).ins.newMessageInfo;

          if (info) {
            let type = (_crd && ChatData === void 0 ? (_reportPossibleCrUseOfChatData({
              error: Error()
            }), ChatData) : ChatData).ins.getChanneTypeById(Number(info.channelId));
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ChatPop,
              data: {
                "channelType": type
              }
            });
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ChatPop
            });
          }
        }

        onDestroy() {
          if ((_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.getView("ForceUpPop")) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.getView("ForceUpPop").getComponent(_crd && ForceUpPop === void 0 ? (_reportPossibleCrUseOfForceUpPop({
              error: Error()
            }), ForceUpPop) : ForceUpPop).onClose();
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).unTarget(this);
        }
        /* 更新队伍上阵 */


        updateHeroSpine(heroId) {
          if (heroId) {
            // 判断英雄职业 替换spine
            const _heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(heroId);

            const _heroClass = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
              error: Error()
            }), HeroData) : HeroData).ins.getById(heroId).heroTable.Class;

            const _spine = this.node_spines.getChildByName("spine" + _heroClass).getComponent(sp.Skeleton);

            (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
              error: Error()
            }), createAnimation) : createAnimation)(_spine.node, _heroInfo.heroTable.Idle);
          } else {
            const teamInfo = (_crd && HeroTeamControl === void 0 ? (_reportPossibleCrUseOfHeroTeamControl({
              error: Error()
            }), HeroTeamControl) : HeroTeamControl).ins.getTeam();

            for (let i = 1; i <= teamInfo.length; i++) {
              const heroId = teamInfo[i - 1].heroId;
              const heroInfo = (_crd && HeroData === void 0 ? (_reportPossibleCrUseOfHeroData({
                error: Error()
              }), HeroData) : HeroData).ins.getById(heroId);
              const spine = this.node_spines.getChildByName("spine" + i).getComponent(sp.Skeleton);
              (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                error: Error()
              }), createAnimation) : createAnimation)(spine.node, heroInfo.heroTable.Idle);
            }
          }
        }

        updateFirstRecharge() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).First_Recharge);
          this.firstRechargeBtnNode.active = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.isShowFirstRecharge() && (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_FirstRecharge);

          if (this.firstRechargeBtnNode.active) {
            let table = (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
              error: Error()
            }), PayData) : PayData).ins.getFirstRechargeTable();

            if (table) {
              this.firstRechargeBtnNode.getComponent(Sprite).setTexture(table.ButtonIcon);
              (_crd && createAnimation === void 0 ? (_reportPossibleCrUseOfcreateAnimation({
                error: Error()
              }), createAnimation) : createAnimation)(this.firstRechargeBtnNode.getChildByName("spine"), table.IconAnimationId);
            }
          }
        }
        /**刷新砸金鸡活动 */


        updateBreakEgg() {
          if ((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.isOpenBreakEgg() && (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_CrazyChicken)) {
            let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.breakEggMsg;
            this.breakEggNode.active = true;
            let table = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().BreakEggTableById.getValue(msg.id);

            if (msg.score >= table.MaxScore) {
              this.breakEggNumNode.active = true;
              this.breakEggNumLab.string = table.MaxScore + "";
            } else {
              this.breakEggNumNode.active = false;
            }
          } else {
            this.breakEggNode.active = false;
          }
        }
        /* 战令信息 */


        on_s2c_GetBattlePassInfoMapRsp(msg) {
          if ((_crd && BattlePassDataMgr === void 0 ? (_reportPossibleCrUseOfBattlePassDataMgr({
            error: Error()
          }), BattlePassDataMgr) : BattlePassDataMgr).ins.getBattleMap().size > 0) {
            this.node_battle_pass.active = true;
          } else {
            this.node_battle_pass.active = false;
          }
        }

        onClickVipBtn() {
          if ((_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip)) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).WelfareActivityMainView,
              data: {
                "type": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).OpenFunctionName.OpenFunctionName_Vip
              }
            });
          }
        }

        updatePatrolData() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChapterAward);
          let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetPatrolInfoReq();
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPatrolInfoReq, msg);
        }

        on_s2c_ReceivePatrolRewardRsp(msg) {
          let startPatrolData = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetPatrolInfoRsp();
          startPatrolData.startPatrolTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime();
          startPatrolData.lastReceiveBaseRewardsTimeMap = msg.lastReceiveBaseRewardsTimeMap;
          startPatrolData.lastReceiveExtraRewardsTimeMap = msg.lastReceiveExtraRewardsTimeMap;
          this.on_s2c_GetPatrolInfoRsp(startPatrolData);
        }

        on_s2c_GetPatrolInfoRsp(msg) {
          let canCheck = false;

          if (!(_crd && PatrolDataMgr === void 0 ? (_reportPossibleCrUseOfPatrolDataMgr({
            error: Error()
          }), PatrolDataMgr) : PatrolDataMgr).ins.startPatrolData) {
            canCheck = true;
          }

          (_crd && PatrolDataMgr === void 0 ? (_reportPossibleCrUseOfPatrolDataMgr({
            error: Error()
          }), PatrolDataMgr) : PatrolDataMgr).ins.initData(msg);
          this.PatrolTime = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime() - Number(msg.startPatrolTime);
          this.node_patrol_red.active = this.PatrolTime >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PatrolTipsTime;
          this.unschedule(this.updatePatrolTime);
          this.schedule(this.updatePatrolTime, 600);

          if (canCheck) {
            this.checkAutoPop();
          }
        }

        updatePatrolTime() {
          this.PatrolTime += 600;
          this.node_patrol_red.active = this.PatrolTime >= (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().PatrolTipsTime;
        }

        updateTrial() {
          const allTrial = this.node_rookie_task_btn.getChildByName("common_img");
          const rookieTrial = this.node_rookie_task_btn.getChildByName("newhand_img");
          const advanceTrial = this.node_rookie_task_btn.getChildByName("advanced_img");
          allTrial.active = false;
          rookieTrial.active = false;
          advanceTrial.active = false;
          const openName1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask;
          const openName2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityNewPlayerTask2;
          const data1 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName1);
          const data2 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.getTrialTask(openName2);

          if (data1 && data2) {
            allTrial.active = true;
          } else {
            if (data1) {
              rookieTrial.active = true;
            }

            if (data2) {
              advanceTrial.active = true;
            }
          }

          this.node_rookie_task_btn.active = rookieTrial.active || advanceTrial.active || allTrial.active;
          this.updateTrialRed();
        } // 刷新试炼红点


        updateTrialRed() {
          (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_trialRed();
          const red1 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_score_red((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE);
          const red2 = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.red_score_red((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE);
          this.node_red_trial.active = (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) || (_crd && RookieTaskMgr === void 0 ? (_reportPossibleCrUseOfRookieTaskMgr({
            error: Error()
          }), RookieTaskMgr) : RookieTaskMgr).ins.checkIsRed((_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE) || red1 || red2;
        }

        jumpToChallenge() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.curClearStageId && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished()) {
            const jumpName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().PveStageTableByStageId.getValue((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.curClearStageId);

            if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_FeedStage || jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_GoldStage) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).InstanceZonesView,
                data: [jumpName.StageType]
              });
            } else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_ClimbTower) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).ClimbingTowerMainView
              });
            } else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_WorldBoss) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).TopWarView
              });
            } else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_DailyChallenge) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).EveryDayChallengeView
              });
            } else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_GuildBoss) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).AssociationView,
                data: jumpName.StageType
              });
            } else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_PVPBattle) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FincaFightView
              });
            } // else if (jumpName.StageType === tab.PveStageType.PveStageType_MainChapter) {
            //     if(BattleMainDataControl.ins.getStageClearIds().length>=4){
            //         UIMgr.ins.show({ viewName: ViewName.BattleMainView, data: 1 })
            //     }
            // } 
            else if (jumpName.StageType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PveStageType.PveStageType_EliteChapter) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).BattleMainView,
                data: 2
              });
            }
          } // 是否显示漫画


          (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.curClearStageId = 0;
        }

        updateHonorRank() {
          let isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_ActivityRank);
          this.honorRankNode.active = isOpen && (_crd && FengyunRankData === void 0 ? (_reportPossibleCrUseOfFengyunRankData({
            error: Error()
          }), FengyunRankData) : FengyunRankData).ins.isOpenActivity(101);
        }

        checkOpenFuncPop() {
          let list = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.waitPopOpenName;

          if (list.length === 0) {
            // EventMgr.emitLocal(LocalEvent.hidePop);
            this.scheduleOnce(() => {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).hidePop);
            });
          }

          if (list.length > 0) {
            let name = list.shift();
            this.scheduleOnce(() => {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).FunctionUnlockPop,
                data: {
                  "functionName": name
                }
              });
            });
          }
        }

        updateGiftBtn() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Seven_Gift_Pack);
          const nowDay = Math.floor(((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.getServerUtcTime() - Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.createTime)) / 86400) + 1;
          const heroNode = this.node_day_gift_btn.getChildByName("hero_img");
          const weaponNode = this.node_day_gift_btn.getChildByName("weapon_img");
          weaponNode.active = nowDay > 7;
          heroNode.active = !weaponNode.active;
          const Map = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.get7GiftPackBuyState();
          const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
            error: Error()
          }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_Hero7GiftPack);
          this.node_day_gift_btn.active = (Map.get((_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).HERO) || Map.get((_crd && DEVELOPTYPE === void 0 ? (_reportPossibleCrUseOfDEVELOPTYPE({
            error: Error()
          }), DEVELOPTYPE) : DEVELOPTYPE).BOOK)) && isOpen;
          this.node_signing_gift.active = !(_crd && SignInGiftData === void 0 ? (_reportPossibleCrUseOfSignInGiftData({
            error: Error()
          }), SignInGiftData) : SignInGiftData).ins.checkActivityEnd();
        } // 显示小手


        showFinger() {
          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.failTimes === "true") {
            this.node_finger.active = true;
          } else {
            this.node_finger.active = false;
          }
        }

        checkMainView() {
          console.log("cocos 当前的uiNode = ", (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.uiNode.children.length);

          if ((_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.uiNode.children.length === 1) {
            if (!(_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.IsGuideFinished()) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).checkMainView);
            } // 如果首冲功能开启 且没有弹出过 弹出首冲按钮


            const isOpen = (_crd && OpenFunctionMgr === void 0 ? (_reportPossibleCrUseOfOpenFunctionMgr({
              error: Error()
            }), OpenFunctionMgr) : OpenFunctionMgr).ins.checkFunctionIsOpen((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).OpenFunctionName.OpenFunctionName_FirstRecharge);
            const openFirstRecharge = Boolean(Number((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.clientData.openFirstRecharge));

            if (isOpen && !openFirstRecharge && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.IsGuideFinished()) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).Module.Module_FirstRechargePop);
            }
          }
        } // 刷新红点数据


        refreshRed() {
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Feng_Yun_Rank);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Skill); // 获取已经申请的公会信息

          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqGetJoinGuildRequests(0);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Sign);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Guild_Activity);
        }

        on_s2c_BuyFixedShopCommodityRsp(msg) {
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
          const mallName = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(msg.commodityId).MallId;
          (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(mallName).set(msg.commodityId, msg.boughtCount);

          if (mallName == (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall || mallName == (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall2) {
            this.updateActivityRed();
          }
        }
        /* 刷新一下精彩活动礼包 */


        updateActivityRed() {
          const dailyRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "11");
          const weekRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "12");
          const MonthRed = (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).ins.isRed((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).GachaAds, "13"); // 精英新手的免费礼包

          const newBoughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall).get(7001);
          const newBoughtCount2 = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall2).get(7101);
          const mallItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(7001);
          const mallItemTab2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(7101);
          const red_NewPlayerMall = newBoughtCount < mallItemTab.LimitCount && (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall) > 0;
          const red_NewPlayerMall2 = newBoughtCount2 < mallItemTab2.LimitCount && (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopExpireTime((_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NewPlayerMall2) > 0;
          this.node_activity_red.active = dailyRed || weekRed || MonthRed || red_NewPlayerMall || red_NewPlayerMall2;
        }

        checkAutoPop() {
          if (!(_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isGuiding()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
              error: Error()
            }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_check);
          }
        } // 刷新活动组按钮


        refreshActivityGroup() {
          const groups = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllActivityGroup();

          if (groups.length <= 0) {
            this.node_activity_group.active = false;
            return;
          }

          const content = this.node_activity_group.parent;

          for (let i = content.children.length - 1; i >= 0; i--) {
            let ch = content.children[i];

            if (ch.name === "ActivityGroup") {
              ch.removeFromParent();
              ch.destroy();
              ch = null;
            }
          }

          for (let i = 0; i < groups.length; i++) {
            const info = groups[i];
            const tabData = info.activityTable;
            let btnNode = null;

            if (i === 0) {
              // 设置groupBtn
              btnNode = this.node_activity_group;
            } else {
              btnNode = instantiate(this.node_activity_group);
              btnNode.name = "ActivityGroup";
              content.addChild(btnNode);
            } // 增加红点


            const redDot = btnNode.getChildByName("redDot");
            let com = redDot.addComponent(_crd && RedComp === void 0 ? (_reportPossibleCrUseOfRedComp({
              error: Error()
            }), RedComp) : RedComp);
            com.redNode = redDot;
            let evet1 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet1.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Pass;
            evet1.child = String(info.TabId);
            com.types.push(evet1);
            let evet2 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet2.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Grow;
            evet2.child = String(info.TabId);
            com.types.push(evet2);
            let evet3 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet3.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Shop;
            evet3.child = String(info.TabId);
            com.types.push(evet3);
            let evet4 = new (_crd && RedEventComp === void 0 ? (_reportPossibleCrUseOfRedEventComp({
              error: Error()
            }), RedEventComp) : RedEventComp)();
            evet4.event = (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).Combine_Recharge;
            evet4.child = String(info.TabId);
            com.types.push(evet4);
            com.addRed();
            btnNode.active = info.isOpen();

            if (info.isOpen()) {
              const sp = btnNode.getComponent(Sprite);
              sp.setTexture(tabData.ButtonIconUrl);
              const btn = btnNode.getComponent(Button);
              btn.node.on(Button.EventType.CLICK, () => {
                (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                  error: Error()
                }), UIMgr) : UIMgr).ins.show({
                  viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                    error: Error()
                  }), ViewName) : ViewName).CombineActivityMainView,
                  data: info.TabId
                });
              }, this); // 显示倒计时

              let countDown = Number(info.endTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();

              const timeUpdate = () => {
                countDown--;

                if (countDown <= 0) {
                  btnNode.active = false;
                  this.unschedule(timeUpdate);
                } else {
                  btnNode.getChildByName("time_txt").getComponent(Label).string = (_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                    error: Error()
                  }), setTextTime) : setTextTime)(countDown);
                }
              };

              timeUpdate();
              this.unschedule(timeUpdate);
              this.schedule(timeUpdate, 1);
            }
          }

          const gachaUpData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllUpData();

          if (gachaUpData.length > 0) {
            const upActInfo = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.getAllUpData()[0];
            const gachaUpTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GachaUpTableById.getValue(upActInfo.activityTable.Param1);
            this.sp_activity_combine.setTexture(gachaUpTab.IconUrl);
          }

          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Pass);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Grow);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).Combine_Shop);
        }

        onClickGachaBtn() {
          if ((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.GachaUpIsOpen() && (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.IsGuideFinished()) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).RecruitLimitView
            });
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Module.Module_RecruitView);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "forceLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "nameLab", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "titleImg", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "vipImg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_level", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_vip_level", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_power_score", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_chapter_name", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_max_alive_second", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "lbl_chapter_icon", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lbl_chapter_num", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "lbl_revive_num", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "expBar", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "palyerHeadItem", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "resourceItem", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "prestigeNameLab", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "prestigeTotalLab", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor18 = _applyDecoratedDescriptor(_class2.prototype, "prestigeNowLab", [_dec19], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor19 = _applyDecoratedDescriptor(_class2.prototype, "chatNode", [_dec20], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor20 = _applyDecoratedDescriptor(_class2.prototype, "channelLab", [_dec21], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor21 = _applyDecoratedDescriptor(_class2.prototype, "chatWorldNode", [_dec22], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor22 = _applyDecoratedDescriptor(_class2.prototype, "chatNotNode", [_dec23], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor23 = _applyDecoratedDescriptor(_class2.prototype, "chatNameLab", [_dec24], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor24 = _applyDecoratedDescriptor(_class2.prototype, "chatContentLab", [_dec25], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor25 = _applyDecoratedDescriptor(_class2.prototype, "chatSystemNode", [_dec26], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor26 = _applyDecoratedDescriptor(_class2.prototype, "chatSystemRichTxt", [_dec27], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor27 = _applyDecoratedDescriptor(_class2.prototype, "limitBtnNode", [_dec28], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor28 = _applyDecoratedDescriptor(_class2.prototype, "node_spines", [_dec29], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor29 = _applyDecoratedDescriptor(_class2.prototype, "firstRechargeBtnNode", [_dec30], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor30 = _applyDecoratedDescriptor(_class2.prototype, "breakEggNode", [_dec31], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor31 = _applyDecoratedDescriptor(_class2.prototype, "breakEggNumLab", [_dec32], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor32 = _applyDecoratedDescriptor(_class2.prototype, "breakEggNumNode", [_dec33], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor33 = _applyDecoratedDescriptor(_class2.prototype, "node_battle_pass", [_dec34], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor34 = _applyDecoratedDescriptor(_class2.prototype, "node_patrol_red", [_dec35], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor35 = _applyDecoratedDescriptor(_class2.prototype, "node_rookie_task_btn", [_dec36], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor36 = _applyDecoratedDescriptor(_class2.prototype, "node_red_trial", [_dec37], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor37 = _applyDecoratedDescriptor(_class2.prototype, "honorRankNode", [_dec38], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor38 = _applyDecoratedDescriptor(_class2.prototype, "node_day_gift_btn", [_dec39], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor39 = _applyDecoratedDescriptor(_class2.prototype, "node_finger", [_dec40], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor40 = _applyDecoratedDescriptor(_class2.prototype, "node_activity_red", [_dec41], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor41 = _applyDecoratedDescriptor(_class2.prototype, "node_activity_group", [_dec42], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor42 = _applyDecoratedDescriptor(_class2.prototype, "sp_activity_combine", [_dec43], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor43 = _applyDecoratedDescriptor(_class2.prototype, "node_signing_gift", [_dec44], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor44 = _applyDecoratedDescriptor(_class2.prototype, "event_scroll", [_dec45], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2149574f76e8cf167392661da55a0324d0bc04c3.js.map