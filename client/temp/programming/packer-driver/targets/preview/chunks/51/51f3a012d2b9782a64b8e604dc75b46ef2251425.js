System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Node, Prefab, ScrollView, Vec2, ActivityData, CombineAccumulatedRechargeCellItem, EventMgr, proto, ActivityControl, UIMgr, ViewName, HeroRed, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, CombineAccumulatedRechargeItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCombineAccumulatedRechargeCellItem(extras) {
    _reporterNs.report("CombineAccumulatedRechargeCellItem", "./CombineAccumulatedRechargeCellItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroRed(extras) {
    _reporterNs.report("HeroRed", "../../hero/herobag/HeroRed", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
      ScrollView = _cc.ScrollView;
      Vec2 = _cc.Vec2;
    }, function (_unresolved_2) {
      ActivityData = _unresolved_2.ActivityData;
    }, function (_unresolved_3) {
      CombineAccumulatedRechargeCellItem = _unresolved_3.CombineAccumulatedRechargeCellItem;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      ActivityControl = _unresolved_5.ActivityControl;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      HeroRed = _unresolved_8.HeroRed;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "073d8jMcVhAC4GUVh5w+Grx", "CombineAccumulatedRechargeItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Node', 'Prefab', 'ScrollView', 'Vec2']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineAccumulatedRechargeItem", CombineAccumulatedRechargeItem = (_dec = ccclass('CombineAccumulatedRechargeItem'), _dec2 = property(Prefab), _dec3 = property(Node), _dec4 = property(ScrollView), _dec(_class = (_class2 = class CombineAccumulatedRechargeItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "scroll_view", _descriptor3, this);

          this.activityId = 0;
          this.maxLen = 0;
        }

        onLoad() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetCumulativeRechargeMapRsp, this.on_s2c_GetCumulativeRechargeMapRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveCumulativeRechargeRewardRsp, this.on_s2c_ReceiveCumulativeRechargeRewardRsp, this);
        }

        onShow(activityId) {
          this.activityId = activityId;
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.requesGetCumulativeRecharge();
        }

        on_s2c_ReceiveCumulativeRechargeRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
            this.onShow(this.activityId);
          }
        }

        on_s2c_GetCumulativeRechargeMapRsp(msg) {
          this.setView();
        }

        setView() {
          this.maxLen = 0;
          var Tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllTabsByRechageId(this.activityId);
          var serverData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getRechargeServerData(this.activityId);
          this.node_content.destroyAllChildren();
          var type = (_crd && HeroRed === void 0 ? (_reportPossibleCrUseOfHeroRed({
            error: Error()
          }), HeroRed) : HeroRed).ins.getPayType();

          for (var i = 0; i < Tabs.length; i++) {
            if (Tabs[i].ShowId) {
              var _tab = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
                error: Error()
              }), ActivityData) : ActivityData).ins.getRechargeTabById(Tabs[i].ShowId);

              console.log(_tab);
              var needCount = _tab[type];

              if (serverData.payAmount < needCount) {
                break;
              }
            }

            var item = instantiate(this.pfb_item);
            var itemTs = item.getComponent(_crd && CombineAccumulatedRechargeCellItem === void 0 ? (_reportPossibleCrUseOfCombineAccumulatedRechargeCellItem({
              error: Error()
            }), CombineAccumulatedRechargeCellItem) : CombineAccumulatedRechargeCellItem);
            item.name = String(Tabs[i].IndexId);
            item.parent = this.node_content;
            itemTs.initData(Tabs[i], type);
            this.maxLen++;
          }

          this.scrollToReward();
        }

        scrollToReward() {
          var Tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllTabsByRechageId(this.activityId);

          if (Tabs) {
            var curLen = this.getIndex();
            this.scroll_view.scrollTo(new Vec2(0, 1 - curLen / this.maxLen), 0.2);
          }
        } // 获取没有领取的奖励


        getIndex() {
          var serverData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getRechargeServerData(this.activityId);
          var Tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getAllTabsByRechageId(this.activityId);
          var ids = serverData.receivedRewardIds.sort();

          if (ids.length === 0 || ids[0] !== Tabs[0].IndexId) {
            return 0;
          }

          if (ids.length === Tabs.length) {
            return Tabs.length;
          }

          var count = 0;

          for (var i = 0; i < ids.length; i++) {
            count++;

            if (ids[i + 1]) {
              if (ids[i + 1] - ids[i] !== 1) {
                return count + 1;
              }
            }
          }

          return count + 1;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "scroll_view", [_dec4], {
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
//# sourceMappingURL=51f3a012d2b9782a64b8e604dc75b46ef2251425.js.map