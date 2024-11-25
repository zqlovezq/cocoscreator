System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "client_protocol", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Label, Node, NodeEventType, Prefab, ProgressBar, ScrollView, UITransform, Vec2, ViewScreen, ViewName, ShowTips, UIMgr, Net, InfiniteList, BattleMainItem, EventMgr, LocalEvent, tab, proto, BattleMainDataControl, RedMgr, RedDotType, ItemData, LangMgr, CommonItem, ItemInfo, setTextTime_3, RoleData, stepBranchGuide, GuideController, DisableGuideController, PowerDifficultyTag, TRIALLAYER, BattleMainEliteData, BattleMainEliteControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _dec15, _dec16, _dec17, _dec18, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _descriptor14, _descriptor15, _descriptor16, _descriptor17, _crd, ccclass, property, BattleMainView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewScreen(extras) {
    _reporterNs.report("ViewScreen", "../../../../framework/base/ViewScreen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainItem(extras) {
    _reporterNs.report("BattleMainItem", "./BattleMainItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "./BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime_(extras) {
    _reporterNs.report("setTextTime_3", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfstepBranchGuide(extras) {
    _reporterNs.report("stepBranchGuide", "../../../guide/GuideTask", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDisableGuideController(extras) {
    _reporterNs.report("DisableGuideController", "../../../guide/GuideCommand", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPowerDifficultyTag(extras) {
    _reporterNs.report("PowerDifficultyTag", "../PowerDifficultyTag", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTRIALLAYER(extras) {
    _reporterNs.report("TRIALLAYER", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainEliteData(extras) {
    _reporterNs.report("BattleMainEliteData", "./BattleMainEliteData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainEliteControl(extras) {
    _reporterNs.report("BattleMainEliteControl", "./BattleMainEliteControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Label = _cc.Label;
      Node = _cc.Node;
      NodeEventType = _cc.NodeEventType;
      Prefab = _cc.Prefab;
      ProgressBar = _cc.ProgressBar;
      ScrollView = _cc.ScrollView;
      UITransform = _cc.UITransform;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ViewScreen = _unresolved_2.ViewScreen;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      ShowTips = _unresolved_4.ShowTips;
      UIMgr = _unresolved_4.UIMgr;
    }, function (_unresolved_5) {
      Net = _unresolved_5.Net;
    }, function (_unresolved_6) {
      InfiniteList = _unresolved_6.default;
    }, function (_unresolved_7) {
      BattleMainItem = _unresolved_7.BattleMainItem;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      LocalEvent = _unresolved_9.LocalEvent;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_11) {
      BattleMainDataControl = _unresolved_11.BattleMainDataControl;
    }, function (_unresolved_12) {
      RedMgr = _unresolved_12.RedMgr;
    }, function (_unresolved_13) {
      RedDotType = _unresolved_13.RedDotType;
    }, function (_unresolved_14) {
      ItemData = _unresolved_14.ItemData;
    }, function (_unresolved_15) {
      LangMgr = _unresolved_15.LangMgr;
    }, function (_unresolved_16) {
      CommonItem = _unresolved_16.CommonItem;
    }, function (_unresolved_17) {
      ItemInfo = _unresolved_17.ItemInfo;
    }, function (_unresolved_18) {
      setTextTime_3 = _unresolved_18.setTextTime_3;
    }, function (_unresolved_19) {
      RoleData = _unresolved_19.RoleData;
    }, function (_unresolved_20) {
      stepBranchGuide = _unresolved_20.stepBranchGuide;
    }, function (_unresolved_21) {
      GuideController = _unresolved_21.GuideController;
    }, function (_unresolved_22) {
      DisableGuideController = _unresolved_22.DisableGuideController;
    }, function (_unresolved_23) {
      PowerDifficultyTag = _unresolved_23.PowerDifficultyTag;
    }, function (_unresolved_24) {
      TRIALLAYER = _unresolved_24.TRIALLAYER;
    }, function (_unresolved_25) {
      BattleMainEliteData = _unresolved_25.BattleMainEliteData;
    }, function (_unresolved_26) {
      BattleMainEliteControl = _unresolved_26.BattleMainEliteControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "177acHtsTRJ/YMMbhiaOVce", "BattleMainView", undefined);

      __checkObsolete__(['_decorator', 'EventTouch', 'instantiate', 'Label', 'Layers', 'Node', 'NodeEventType', 'Prefab', 'ProgressBar', 'ScrollView', 'Size', 'Sprite', 'SpriteFrame', 'Tween', 'tween', 'UITransform', 'Vec2', 'Vec3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BattleMainView", BattleMainView = (_dec = ccclass('BattleMainView'), _dec2 = property(Prefab), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property([_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem]), _dec8 = property(ProgressBar), _dec9 = property(Label), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Node), _dec15 = property(Label), _dec16 = property(Node), _dec17 = property(Node), _dec18 = property(Node), _dec(_class = (_class2 = class BattleMainView extends (_crd && ViewScreen === void 0 ? (_reportPossibleCrUseOfViewScreen({
        error: Error()
      }), ViewScreen) : ViewScreen) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_level_item", _descriptor, this);

          _initializerDefineProperty(this, "list_levels", _descriptor2, this);

          _initializerDefineProperty(this, "node_battle_btn", _descriptor3, this);

          _initializerDefineProperty(this, "node_tip", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_desc", _descriptor5, this);

          _initializerDefineProperty(this, "award_items", _descriptor6, this);

          _initializerDefineProperty(this, "award_bar", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_reward", _descriptor8, this);

          _initializerDefineProperty(this, "node_ordinary", _descriptor9, this);

          _initializerDefineProperty(this, "node_elite", _descriptor10, this);

          _initializerDefineProperty(this, "node_reward_show", _descriptor11, this);

          _initializerDefineProperty(this, "node_reward_elite", _descriptor12, this);

          _initializerDefineProperty(this, "node_complete", _descriptor13, this);

          _initializerDefineProperty(this, "lbl_elite_count", _descriptor14, this);

          _initializerDefineProperty(this, "node_bg_elite", _descriptor15, this);

          _initializerDefineProperty(this, "node_bg_ordinary", _descriptor16, this);

          _initializerDefineProperty(this, "node_power", _descriptor17, this);

          this._scrollView = null;
          this._clickIdx = 0;
          this._starClickIdx = 0;
          this._bTouch = false;
          this._showGuildFinger = false;
          this._viewLayer = (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).NONE;
          this._selfData = null;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).Level_Item_Select, this.levelSelect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMainFirstRewardRsp, this.on_s2c_ReceiveMainFirstRewardRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageInfoRsp, this.on_s2c_GetMainStageInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageCleardRecordsRsp, this.on_s2c_GetMainStageCleardRecordsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveEliteClearStageRewardsRsp, this.on_s2c_ReceiveEliteClearStageRewardsRsp, this);
        }

        on_s2c_GetMainStageInfoRsp(msg) {
          this.list_levels.Refresh();
          this.levelSelect([this._selfData.getChapterId() - 1]);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).StageFirstReward);
        }
        /* 领取首通奖励 */


        on_s2c_ReceiveMainFirstRewardRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.rewards) {
            // 刷新列表状态
            var self = this;

            self._selfData.addReceiveFirstRewardId(msg.stageId, msg.indexes);

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.hideView((_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).BattleMainRewardPop);
            self.setBattleReward();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).StageFirstReward);
            (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
              error: Error()
            }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
              error: Error()
            }), RedDotType) : RedDotType).ChapterAward);
          }
        }
        /* 领取精英首通奖励 */


        on_s2c_ReceiveEliteClearStageRewardsRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          if (msg.rewards) {
            this._selfData.addReceiveFirstRewardId(msg.stageId);

            this.setEliteBattleReward();
          }
        }

        onDestroy() {
          super.onDestroy();

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.node.active && this._showGuildFinger) {
            (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
              error: Error()
            }), DisableGuideController) : DisableGuideController)();
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).hidePop);
        }

        onEnterBattle() {
          console.log("进入战斗");
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Disconnect();
        }

        switchView(e, type) {
          if (Number(type) === this._viewLayer) {
            return;
          }

          this._viewLayer = Number(type);
          this.node_elite.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          this.node_ordinary.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE;
          this.node_bg_elite.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE;
          this.node_bg_ordinary.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;

          if (this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) {
            this._selfData = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
              error: Error()
            }), BattleMainDataControl) : BattleMainDataControl).ins;
          } else {
            this._selfData = (_crd && BattleMainEliteData === void 0 ? (_reportPossibleCrUseOfBattleMainEliteData({
              error: Error()
            }), BattleMainEliteData) : BattleMainEliteData).ins;
          }

          this.node_power.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          console.log("cocos 当前章节为=", this._selfData.getChapterId());
          this.setView();
        }

        onShow() {
          this._viewLayer = this.openData ? this.openData : (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          this._selfData = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE ? (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins : (_crd && BattleMainEliteData === void 0 ? (_reportPossibleCrUseOfBattleMainEliteData({
            error: Error()
          }), BattleMainEliteData) : BattleMainEliteData).ins;
          console.log("cocos 当前章节为=", this._selfData.getChapterId());
          this.node_power.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          this.node_elite.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE && this._selfData.getChapterId() >= 2;
          this.node_ordinary.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE;
          this.node_bg_elite.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE;
          this.node_bg_ordinary.active = this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE;
          this._showGuildFinger = false;
          this.list_levels.getContent().getComponent(UITransform).setAnchorPoint(0, 0.5);
          this._scrollView = this.list_levels.getComponent(ScrollView);
          this.setView();
          this.list_levels.node.on("scrolling", this.onScrolling, this);
          this.list_levels.node.on("scroll-ended", this.onScrollEnd, this);

          this._scrollView.node.on(NodeEventType.TOUCH_START, this._onTouchStar, this, true);

          this._scrollView.node.on(NodeEventType.TOUCH_END, this._onTouchEnded, this, true);

          this._scrollView.node.on(NodeEventType.TOUCH_CANCEL, this._onTouchCancel, this);
        }

        setView() {
          this.list_levels.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellWidth.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
          this.list_levels.Reload(true, true);
          this.list_levels.scrollToOffset(new Vec2(0, 5), 1, true);

          var islock = this._selfData.getStageIsLock(this._selfData.getChapterId());

          if (islock) {
            this.levelSelect([this._selfData.getChapterId() - 2]);
          } else {
            this.levelSelect([this._selfData.getChapterId() - 1]);
          }

          if (this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE) {
            this.setBattleReward();
            var countData = (_crd && BattleMainEliteData === void 0 ? (_reportPossibleCrUseOfBattleMainEliteData({
              error: Error()
            }), BattleMainEliteData) : BattleMainEliteData).ins.getChapterCount();
            this.lbl_elite_count.string = countData.curCount + "/" + countData.maxCount;
          } else {
            this.setEliteBattleReward();
          }
        }

        onScrollEnd() {
          if (this._bTouch) {
            this._bTouch = false;
            this.levelSelect([this._clickIdx]);
          }
        }

        _onTouchCancel(e) {
          this._onTouchEnded(e);
        }

        _onTouchStar(e) {
          this._bTouch = true;
          this._starClickIdx = this._clickIdx;
        }

        _onTouchEnded(e) {
          var item = e.target.parent;
          this._bTouch = false;

          this._scrollView.stopAutoScroll();

          if (this._starClickIdx === this._clickIdx && !isNaN(item.name)) {
            var dataIndex = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
              error: Error()
            }), BattleMainItem) : BattleMainItem).dataIndex;
            this.levelSelect([dataIndex]);
          } else {
            this.levelSelect([this._clickIdx]);
          }
        }

        getCellCount() {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTable.length;
        }

        getCellWidth() {
          return 300;
        }

        getCellIdentifer() {
          return "BattleMainItem";
        }

        getCellView() {
          return instantiate(this.pfb_level_item).getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
            error: Error()
          }), BattleMainItem) : BattleMainItem);
        }

        GetCellData(idx) {
          return {
            index: idx,
            ins: this._selfData
          };
        }

        onScrolling() {
          var offset = this.list_levels.getScrollOffset();

          if (offset.x > 0) {
            this._clickIdx = 0;
            this._bTouch = false;
            this.levelSelect([this._clickIdx]);
          } else {
            this.updateItemScale();
          }
        }

        updateItemScale() {
          var scrollViewMidX = this.list_levels.node.getComponent(UITransform).width / 2;
          var itemChildren = this.list_levels.getContent().children;
          var markScale = 0;
          var dataIndex = 0;
          itemChildren.forEach(item => {
            var worldPos = item.parent.getComponent(UITransform).convertToWorldSpaceAR(item.position);
            var viewPos = this.list_levels.node.getComponent(UITransform).convertToNodeSpaceAR(worldPos);
            var distanceToCenter = Math.abs(viewPos.x - scrollViewMidX);
            var scale = Math.max(0.6, 0.6 + 0.6 * (1 - distanceToCenter / scrollViewMidX));
            item.getChildByName("info_node").setScale(scale, scale);
            var itemTs = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
              error: Error()
            }), BattleMainItem) : BattleMainItem);

            if (markScale < scale) {
              markScale = scale;
              dataIndex = itemTs.dataIndex;
            }
          });
          this._clickIdx = dataIndex;
        }

        levelSelect(data) {
          this._clickIdx = data[0];
          var content = this.list_levels.getContent();
          var pos = this.list_levels.GetScrollPosOfCell(this._clickIdx);
          var scrollViewMidX = this.list_levels.node.getComponent(UITransform).width / 2;
          var contentX = content.getPosition().x;
          var dis = pos.x + contentX;
          var moveX = contentX - (dis - scrollViewMidX); // const time = (dis / 2000) > 0.1 ? 0.1 : (dis / 2000);

          this._scrollView.scrollToOffset(new Vec2(Math.abs(moveX), 0), 0.1);

          var islock = this._selfData.getStageIsLock(this._clickIdx + 1);

          this.node_tip.active = islock;
          this.node_battle_btn.active = !islock;
          this.lbl_desc.node.parent.active = !islock;

          if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.clientData.failTimes === "true") {
            (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.setClientData("failTimes", "false");
            (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
              error: Error()
            }), stepBranchGuide) : stepBranchGuide)(501);
          }

          var battleShow = false;

          if (this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ELITE && this.node_battle_btn.active) {
            this.node_battle_btn.active = false;
            battleShow = true;
          } else {
            this.node_complete.active = false;
          } // 是否显示文本


          this.lbl_desc.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MainChapterTableById.getValue(this._clickIdx + 1).Introduction);
          this.scheduleOnce(() => {
            var itemChildren = content.children;
            itemChildren.forEach(item => {
              var itemTs = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
                error: Error()
              }), BattleMainItem) : BattleMainItem);
              itemTs.setSelect(itemTs.dataIndex === this._clickIdx);
            });
            var item = content.getChildByName(String(this._clickIdx));

            if (item) {
              var stageId = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
                error: Error()
              }), BattleMainItem) : BattleMainItem).ClickStage;
              this.node_battle_btn.getComponent(_crd && PowerDifficultyTag === void 0 ? (_reportPossibleCrUseOfPowerDifficultyTag({
                error: Error()
              }), PowerDifficultyTag) : PowerDifficultyTag) && this.node_battle_btn.getComponent(_crd && PowerDifficultyTag === void 0 ? (_reportPossibleCrUseOfPowerDifficultyTag({
                error: Error()
              }), PowerDifficultyTag) : PowerDifficultyTag).setStageId(stageId);

              if (this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
                error: Error()
              }), TRIALLAYER) : TRIALLAYER).ELITE) {
                // 判断精英副本是否通关
                var ids = this._selfData.getStageClearIds();

                if (ids.indexOf(stageId) > -1) {
                  this.node_battle_btn.active = false;
                  this.node_complete.active = true;
                } else {
                  this.node_complete.active = false;
                  this.node_battle_btn.active = battleShow;
                }
              }
            }
          }, 0.1);
        }
        /* 点击显示通关奖励 */


        clickShowClearAward() {
          var content = this.list_levels.getContent();
          var item = content.getChildByName(String(this._clickIdx));
          var stageId = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
            error: Error()
          }), BattleMainItem) : BattleMainItem).ClickStage;

          if (this._selfData.getReceiveStageId()) {
            /* 有可领取的奖励 */
            var _stageId = this._selfData.getReceiveStageId();

            var _chapterId = this._selfData.getChapterId(_stageId);

            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).BattleMainRewardPop,
              data: {
                chapterId: _chapterId,
                Id: _stageId,
                ins: this._selfData
              }
            });
          } else {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).BattleMainRewardPop,
              data: {
                chapterId: this._clickIdx + 1,
                Id: stageId,
                ins: this._selfData
              }
            });
          }
        }
        /* 点击通关 */


        clickBattleBtn() {
          /* 如果体力不足 前端拦截 */
          var powerData = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getByItemId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).CurrencyType.CurrencyType_Stamina);
          var powerCont = powerData.num;

          if (this._viewLayer === (_crd && TRIALLAYER === void 0 ? (_reportPossibleCrUseOfTRIALLAYER({
            error: Error()
          }), TRIALLAYER) : TRIALLAYER).ROOKIE && powerCont < 5) {
            // 体力不足返回
            var str = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getCombineString("Tips_itemshortage", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(powerData.itemTable.Name)]);
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)(str);
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).ResourceBuyPop,
              data: {
                "itemId": (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).CurrencyType.CurrencyType_Stamina
              }
            });
            return;
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.node.active && this._showGuildFinger) {
            (_crd && DisableGuideController === void 0 ? (_reportPossibleCrUseOfDisableGuideController({
              error: Error()
            }), DisableGuideController) : DisableGuideController)();
          }

          var content = this.list_levels.getContent();
          var item = content.getChildByName(String(this._clickIdx));
          var stageId = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
            error: Error()
          }), BattleMainItem) : BattleMainItem).ClickStage;
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_StartStageReq();
          msg.stageId = stageId;

          if (msg.stageId === 103) {
            (_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
              error: Error()
            }), GuideController) : GuideController).ins.registerGuildeSelectLeader();
          }

          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartStageReq, msg);
        }

        setEliteBattleReward() {
          var stageId = this._selfData.getReceiveStageId();

          var receiveAwards = this._selfData.getReceiveFirstRewardIds();

          var clearIds = this._selfData.getStageClearIds();

          var rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().PveClearStageTableByStageId.getValue(stageId);
          var rewardIds = rewardTabData.ClearRewardItemIds;
          var rewardNums = rewardTabData.ClearRewardItemNum;
          var canReceive = receiveAwards.indexOf(stageId) === -1 && clearIds.indexOf(stageId) > -1;
          this.node_reward_show.active = false;
          this.node_reward_elite.active = true;

          for (var i = 0; i < this.award_items.length; i++) {
            var com = this.award_items[i];
            com.setTouchCallBack(null);

            if (rewardIds[i]) {
              com.node.parent.active = true;
              com.node.parent.getChildByName("canget_node").active = canReceive;
              var item_data = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              item_data.itemId = rewardIds[i];
              item_data.num = rewardNums[i];
              com.initData(item_data, true, false);

              if (canReceive) {
                com.setTouchCallBack(() => {
                  (_crd && BattleMainEliteControl === void 0 ? (_reportPossibleCrUseOfBattleMainEliteControl({
                    error: Error()
                  }), BattleMainEliteControl) : BattleMainEliteControl).ins.reqReceiveEliteClearStageRewards(stageId);
                });
              }
            } else {
              com.node.parent.active = false;
            }
          }
        }
        /* 设置通关奖励界面 */


        setBattleReward() {
          this.node_reward_show.active = true;
          this.node_reward_elite.active = false;

          var stageId = this._selfData.getReceiveStageId();

          if (stageId) {
            this.setAwards(stageId, true);
          } else {
            this.setAwards(this._selfData.getCurFightStageId(), false);
          }

          if (this._selfData.getReceiveFirstRewardIds().length === 0 && this._selfData.getStageClearIds().length >= 3) {
            this._showGuildFinger = true;
            (_crd && stepBranchGuide === void 0 ? (_reportPossibleCrUseOfstepBranchGuide({
              error: Error()
            }), stepBranchGuide) : stepBranchGuide)(507);
          }
        }

        setAwards(stageId, canReceive) {
          var _this = this;

          var rewardTabData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ChapterFristRewardTableById.getValue(stageId);

          var ids = this._selfData.getReceiveFirstRewardIds();

          var idx = 0;

          if (ids.length > 0) {
            var lastIdx = ids[ids.length - 1].index;
            idx = lastIdx < 2 ? lastIdx + 1 : 0;
          } else {
            idx = 0;
          }

          this.award_bar.progress = idx / 2;
          var rewardIds = rewardTabData["RewardItemIds" + (idx + 1)];
          var rewardNums = rewardTabData["RewardItemNum" + (idx + 1)];
          this.setProgressDot(stageId, idx, true);
          this.lbl_reward.string = (_crd && setTextTime_3 === void 0 ? (_reportPossibleCrUseOfsetTextTime_({
            error: Error()
          }), setTextTime_3) : setTextTime_3)(rewardTabData.Time[idx]) + (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab("ui_commondesc_57");

          var _loop = function _loop() {
            var com = _this.award_items[i];
            com.setTouchCallBack(null);

            if (rewardIds[i]) {
              com.node.parent.active = true;
              com.node.parent.getChildByName("canget_node").active = canReceive;
              var item_data = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
                error: Error()
              }), ItemInfo) : ItemInfo)();
              item_data.itemId = rewardIds[i];
              item_data.num = rewardNums[i];
              com.initData(item_data, true, false);

              if (canReceive) {
                var indexes = _this._selfData.getAllIndex(stageId);

                com.setTouchCallBack(() => {
                  var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).Msg_ReceiveMainFirstRewardReq();
                  msg.indexes = [indexes[0]];
                  msg.stageId = stageId;
                  (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                    error: Error()
                  }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                    error: Error()
                  }), proto) : proto).Ptl.ReceiveMainFirstRewardReq, msg);
                });
              } else {
                com.setTouchCallBack(() => {
                  (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                    error: Error()
                  }), UIMgr) : UIMgr).ins.show({
                    viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                      error: Error()
                    }), ViewName) : ViewName).BattleMainRewardPop,
                    data: {
                      chapterId: _this._clickIdx + 1,
                      Id: stageId
                    }
                  });
                });
              }
            } else {
              com.node.parent.active = false;
            }
          };

          for (var i = 0; i < this.award_items.length; i++) {
            _loop();
          }
        }

        setProgressDot(stageId, idx, isActive) {
          var progressNode = this.award_bar.node.parent;

          for (var i = 1; i <= 3; i++) {
            var dot = progressNode.getChildByName("dot_" + i);

            var isGot = this._selfData.getReceiveFirstRewardById(stageId, i - 1);

            dot.active = Boolean(isGot) || isActive && idx === i - 1;
          }
        }

        onRecordClick() {
          var content = this.list_levels.getContent();
          var item = content.getChildByName(String(this._clickIdx));
          var stageId = item.getComponent(_crd && BattleMainItem === void 0 ? (_reportPossibleCrUseOfBattleMainItem({
            error: Error()
          }), BattleMainItem) : BattleMainItem).ClickStage;
          console.log(stageId);
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetMainStageCleardRecordsReq();
          msg.stageId = stageId;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetMainStageCleardRecordsReq, msg);
        }

        on_s2c_GetMainStageCleardRecordsRsp(msg) {
          if (msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            return;
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).BattleMainRecordPop,
            data: msg
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_level_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "list_levels", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_battle_btn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_tip", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_desc", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "award_items", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "award_bar", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_reward", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "node_ordinary", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_elite", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_reward_show", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_reward_elite", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_complete", [_dec14], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor14 = _applyDecoratedDescriptor(_class2.prototype, "lbl_elite_count", [_dec15], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor15 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_elite", [_dec16], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor16 = _applyDecoratedDescriptor(_class2.prototype, "node_bg_ordinary", [_dec17], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor17 = _applyDecoratedDescriptor(_class2.prototype, "node_power", [_dec18], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9e2d900ff47739d79269ac220694357cf8b94250.js.map