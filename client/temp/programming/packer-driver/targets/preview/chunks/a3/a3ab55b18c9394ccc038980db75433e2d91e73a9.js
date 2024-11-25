System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, instantiate, Label, Node, Prefab, Sprite, Toggle, UITransform, ViewPop, JIANGHU_TYPE, RoleData, InfiniteList, InstanceZonesViewItem, EventMgr, proto, Net, ShowItemNotEnoughTips, ShowTips, UIMgr, ViewName, GameplayViewDataMgr, LangMgr, CommonTipsPop, ItemData, RedMgr, RedDotType, ActivityData, ConsumptionToPurchase, GameUtil, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _dec14, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _descriptor13, _crd, ccclass, property, InstanceZonesView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfJIANGHU_TYPE(extras) {
    _reporterNs.report("JIANGHU_TYPE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInfiniteList(extras) {
    _reporterNs.report("InfiniteList", "../../../../Common/InfiniteList/InfiniteList", _context.meta, extras);
  }

  function _reportPossibleCrUseOfInstanceZonesViewItem(extras) {
    _reporterNs.report("InstanceZonesViewItem", "./InstanceZonesViewItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../../item/ItemData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedMgr(extras) {
    _reporterNs.report("RedMgr", "../../../mgr/RedMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../../red/RedDotType", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../../activity/ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfConsumptionToPurchase(extras) {
    _reporterNs.report("ConsumptionToPurchase", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      Sprite = _cc.Sprite;
      Toggle = _cc.Toggle;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      JIANGHU_TYPE = _unresolved_3.JIANGHU_TYPE;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }, function (_unresolved_5) {
      InfiniteList = _unresolved_5.default;
    }, function (_unresolved_6) {
      InstanceZonesViewItem = _unresolved_6.InstanceZonesViewItem;
    }, function (_unresolved_7) {
      EventMgr = _unresolved_7.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      Net = _unresolved_8.Net;
    }, function (_unresolved_9) {
      ShowItemNotEnoughTips = _unresolved_9.ShowItemNotEnoughTips;
      ShowTips = _unresolved_9.ShowTips;
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      GameplayViewDataMgr = _unresolved_11.GameplayViewDataMgr;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }, function (_unresolved_13) {
      CommonTipsPop = _unresolved_13.CommonTipsPop;
    }, function (_unresolved_14) {
      ItemData = _unresolved_14.ItemData;
    }, function (_unresolved_15) {
      RedMgr = _unresolved_15.RedMgr;
    }, function (_unresolved_16) {
      RedDotType = _unresolved_16.RedDotType;
    }, function (_unresolved_17) {
      ActivityData = _unresolved_17.ActivityData;
    }, function (_unresolved_18) {
      ConsumptionToPurchase = _unresolved_18.ConsumptionToPurchase;
      GameUtil = _unresolved_18.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bfd70sA4S1Gq4jMEM6JeVBH", "InstanceZonesView", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventTouch', 'instantiate', 'Label', 'Node', 'Prefab', 'Sprite', 'Toggle', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("InstanceZonesView", InstanceZonesView = (_dec = ccclass('InstanceZonesView'), _dec2 = property(Label), _dec3 = property(_crd && InfiniteList === void 0 ? (_reportPossibleCrUseOfInfiniteList({
        error: Error()
      }), InfiniteList) : InfiniteList), _dec4 = property(Prefab), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Node), _dec12 = property(Node), _dec13 = property(Node), _dec14 = property(Label), _dec(_class = (_class2 = class InstanceZonesView extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lbl_power", _descriptor, this);

          _initializerDefineProperty(this, "list_view", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_item", _descriptor3, this);

          _initializerDefineProperty(this, "node_gold_bg", _descriptor4, this);

          _initializerDefineProperty(this, "node_exp_bg", _descriptor5, this);

          _initializerDefineProperty(this, "node_sweep_free", _descriptor6, this);

          _initializerDefineProperty(this, "node_sweep_buy", _descriptor7, this);

          _initializerDefineProperty(this, "reward_btn_1", _descriptor8, this);

          _initializerDefineProperty(this, "reward_btn_2", _descriptor9, this);

          _initializerDefineProperty(this, "node_toggle", _descriptor10, this);

          _initializerDefineProperty(this, "node_sweep", _descriptor11, this);

          _initializerDefineProperty(this, "node_ordinary_sweep", _descriptor12, this);

          _initializerDefineProperty(this, "node_sweep_buy_diamond", _descriptor13, this);

          this.view_type = (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).NONE;
          this._GoldStageData = [];
          this._FeedStageData = [];
          this.curExportInfo = null;
          this._sweepInfo = null;
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.StartStageRsp, this.on_s2c_StartStageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.FinishStageRsp, this.on_s2c_FinishStageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SweepExploreStageRsp, this.on_s2c_SweepExploreStageRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SweepExploreStageOneClickRsp, this.on_s2c_SweepExploreStageOneClickRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetExploreStageInfoMapRsp, this.on_s2c_GetExploreStageInfoMapRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        on_s2c_GetExploreStageInfoMapRsp(msg) {
          (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.initData(msg.stageInfoMap);
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyFreeTimes);
          this.list_view.Refresh();
          this.scrollToIndex();
        } // 开始主线关卡


        on_s2c_StartStageRsp(msg) {// let finish_msg = new proto.Msg_FinishStageReq();
          // finish_msg.result = proto.Msg_FinishStageReq.Result.Win;
          // finish_msg.aliveSeconds = 540
          // Net.Send(proto.Ptl.FinishStageReq, finish_msg)
        }

        on_s2c_FinishStageRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;

          var _msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_GetExploreStageInfoMapReq();

          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetExploreStageInfoMapReq, _msg);
        }

        on_s2c_SweepExploreStageRsp(msg) {
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
          this.curExportInfo.freeSweepTimes = msg.freeSweepTimes;
          this.curExportInfo.notFreeSweepTimes = msg.notFreeSweepTimes;
          this.changeDataByViewType(false);
          this.list_view.Refresh();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyFreeTimes);
        }

        on_s2c_SweepExploreStageOneClickRsp(msg) {
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
          this.curExportInfo.freeSweepTimes = msg.freeSweepTimes;
          this.curExportInfo.notFreeSweepTimes = msg.notFreeSweepTimes;
          this.changeDataByViewType(false);
          this.list_view.Refresh();
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyFreeTimes);
        }

        onShow() {
          // 默认黄金工厂
          (_crd && RedMgr === void 0 ? (_reportPossibleCrUseOfRedMgr({
            error: Error()
          }), RedMgr) : RedMgr).refreshEvent((_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).ChallengeDailyAward);

          if (typeof this.openData === "number") {
            this.openData = [this.openData];
          }

          this.view_type = this.openData ? this.openData[0] : (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage;
          this.node_toggle.getChildByName("Toggle" + this.view_type).getComponent(Toggle).isChecked = true;
          this.changeDataByViewType(true);
          this._GoldStageData = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getStageTab((_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage);
          this._FeedStageData = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getStageTab((_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).FeedStage);
          this.lbl_power.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
            error: Error()
          }), GameUtil) : GameUtil).convertNumber((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.powerScore); // const vipLevel = ActivityData.ins.vipMsg.vipLevel;
          // this.node_sweep.active = vipLevel >= 2;

          this.list_view.Init({
            getCellNumber: this.getCellCount.bind(this),
            getCellSize: this.getCellHeight.bind(this),
            getCellIdentifer: this.getCellIdentifer.bind(this),
            getCellView: this.getCellView.bind(this),
            getCellData: this.GetCellData.bind(this)
          });
          this.scrollToIndex();
        } // 根据viewtype变化的数据


        changeDataByViewType(type) {
          if (type) {
            this.curExportInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getExportInfo(this.view_type);
            this.node_gold_bg.active = this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage;
            this.node_exp_bg.active = !(this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage);
            this.reward_btn_1.active = this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage;
            this.reward_btn_2.active = this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
              error: Error()
            }), JIANGHU_TYPE) : JIANGHU_TYPE).FeedStage;
          }

          this._sweepInfo = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getSweepInfo(this.view_type);
          (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.setCurFightStageId(this.view_type);

          if (this._sweepInfo.freeTimes > 0) {
            this.node_sweep_free.active = true;
            this.node_sweep_buy.active = false;
            this.node_sweep_free.getChildByName("num_label").getComponent(Label).string = String(this._sweepInfo.freeTimes);
          } else {
            this.node_sweep_free.active = false;
            this.node_sweep_buy.active = true;
            this.node_sweep_buy.getChildByName("num_label").getComponent(Label).string = String(this._sweepInfo.buyTimes);
          }

          var vipLevel = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.vipMsg.vipLevel;

          if (this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage) {
            this.node_ordinary_sweep.active = vipLevel < 2 && this.curExportInfo.clearedStageIds.indexOf(10101) > -1;
          } else {
            this.node_ordinary_sweep.active = vipLevel < 2 && this.curExportInfo.clearedStageIds.indexOf(10201) > -1;
          }

          this.setOrdinaryBtn();
          this.node_sweep.getComponent(Sprite).grayscale = this._sweepInfo.freeTimes === 0 && this._sweepInfo.buyTimes === 0 || vipLevel < 2;
          this.node_sweep.getComponent(Button).interactable = !(this._sweepInfo.freeTimes === 0 && this._sweepInfo.buyTimes === 0) && vipLevel >= 2;
        }

        scrollToIndex() {
          var index = this.curExportInfo.clearedStageIds.indexOf((_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this.view_type));
          var pos = this.list_view.GetScrollPosOfCell(index);
          var maxY = this.list_view.getContent().getComponent(UITransform).height - 490;
          var max_y = pos.y > maxY ? maxY : pos.y;
          this.list_view.setContentPos(max_y, 0, max_y);
        }

        onDestroy() {
          super.onDestroy();
        }

        clickChangeView(e, type) {
          if (this.view_type === Number(type)) {
            return;
          }

          this.view_type = Number(type);
          this.changeDataByViewType(true);
          this.list_view.Reload(false, true);
          this.scrollToIndex();
        }

        getCellCount() {
          if (this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage) {
            return this._GoldStageData.length;
          } else {
            return this._FeedStageData.length;
          }
        }

        getCellHeight(idx) {
          return 100;
        }

        getCellIdentifer(idx) {
          return "InstanceZonesViewItem";
        }

        getCellView(idx, identifer) {
          return instantiate(this.pfb_item).getComponent(_crd && InstanceZonesViewItem === void 0 ? (_reportPossibleCrUseOfInstanceZonesViewItem({
            error: Error()
          }), InstanceZonesViewItem) : InstanceZonesViewItem);
        }

        GetCellData(idx) {
          if (this.view_type === (_crd && JIANGHU_TYPE === void 0 ? (_reportPossibleCrUseOfJIANGHU_TYPE({
            error: Error()
          }), JIANGHU_TYPE) : JIANGHU_TYPE).GoldStage) {
            return {
              data: this._GoldStageData[idx],
              type: this.view_type,
              exportData: this.curExportInfo
            };
          } else {
            return {
              data: this._FeedStageData[idx],
              type: this.view_type,
              exportData: this.curExportInfo
            };
          }
        } // 点击进入通关奖励界面


        onClickAwardLayer() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).InstanceRewardPop,
            data: this.view_type
          });
        } // 一键扫荡


        oneClickSweep() {
          var sweepInfo = this._sweepInfo;
          var needDiamond = 0;
          var curHaveDiamond = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
            error: Error()
          }), ItemData) : ItemData).ins.getCount(1);

          var sendMsg = () => {
            var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_SweepExploreStageOneClickReq();
            msg.buySweepTimes = sweepInfo.buyTimes > 0;
            msg.stageId = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
              error: Error()
            }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this.view_type);
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.SweepExploreStageOneClickReq, msg);
          }; // 剩余次数 所需要的钻石为


          if (sweepInfo.buyTimes) {
            for (var i = this.curExportInfo.notFreeSweepTimes; i < sweepInfo.maxBuyTimes; i++) {
              var addCount = sweepInfo.diamondData[i] ? sweepInfo.diamondData[i] : sweepInfo.diamondData[sweepInfo.diamondData.length - 1];
              needDiamond += addCount;
            }

            if (this.curExportInfo.clearedStageIds.length > 0) {
              var tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("Tips_instance_2", [sweepInfo.freeTimes, sweepInfo.buyTimes, needDiamond]);
              (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
                error: Error()
              }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
                if (val) {
                  if (curHaveDiamond < needDiamond) {
                    (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                      error: Error()
                    }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
                  } else {
                    sendMsg();
                  }
                }
              });
            }
          } else {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_timeshortage"));
          }
        } // 关闭界面


        onClikhideView() {
          this.onClose();
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).GameplayView
          });
        } // 设置普通扫荡按钮


        setOrdinaryBtn() {
          if (this.node_ordinary_sweep.active) {
            var sweepNode = this.node_ordinary_sweep.getChildByName("sweep_btn");
            var buyNode = this.node_ordinary_sweep.getChildByName("paysweep_btn");
            var lockNode = this.node_ordinary_sweep.getChildByName("lock_node");
            sweepNode.active = this._sweepInfo.freeTimes > 0;
            buyNode.active = this._sweepInfo.freeTimes == 0 && this._sweepInfo.buyTimes > 0;
            lockNode.active = this._sweepInfo.buyTimes === 0;

            if (this.node_sweep_buy.active) {
              this.node_sweep_buy_diamond.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_instance_3", [this._sweepInfo.diamondData[this.curExportInfo.notFreeSweepTimes]]);
            }
          }
        } // 扫荡


        onClickSweep() {
          var canSweep = this.setSweepdata();

          if (canSweep) {
            this.sendMsg();
          }
        }

        sendMsg() {
          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_SweepExploreStageReq();
          msg.stageId = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.getCurSweepStageId(this.view_type);
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SweepExploreStageReq, msg);
        } // 如果是扫荡判断当前的数据 返回是否可以扫荡


        setSweepdata() {
          var self = this;
          var sweepInfo = this._sweepInfo;
          var needDiamond = this._sweepInfo.diamondData[this.curExportInfo.notFreeSweepTimes];
          var canUse = false;

          if (sweepInfo.freeTimes === 0) {
            // 判断付费次数
            if (sweepInfo.buyTimes === 0) {
              (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
                error: Error()
              }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab('Tips_timeshortage'));
            } else {
              // 弹窗是否花费一定钻石购买次数
              (_crd && ConsumptionToPurchase === void 0 ? (_reportPossibleCrUseOfConsumptionToPurchase({
                error: Error()
              }), ConsumptionToPurchase) : ConsumptionToPurchase)(1, needDiamond, "Tips_instance_1", () => {
                self.sendMsg();
              });
            }
          } else {
            canUse = true;
          }

          return canUse;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_power", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "list_view", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_gold_bg", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_exp_bg", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep_free", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep_buy", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "reward_btn_1", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "reward_btn_2", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "node_toggle", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "node_ordinary_sweep", [_dec13], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor13 = _applyDecoratedDescriptor(_class2.prototype, "node_sweep_buy_diamond", [_dec14], {
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
//# sourceMappingURL=a3ab55b18c9394ccc038980db75433e2d91e73a9.js.map