System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ViewPop, ShowTips, UIMgr, ActivityData, ItemInfo, ItemPoolMgr, ActivityControl, EventMgr, proto, ViewName, tab, AdMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, LimitedBenefitsPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../AdMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ShowTips = _unresolved_3.ShowTips;
      UIMgr = _unresolved_3.UIMgr;
    }, function (_unresolved_4) {
      ActivityData = _unresolved_4.ActivityData;
    }, function (_unresolved_5) {
      ItemInfo = _unresolved_5.ItemInfo;
    }, function (_unresolved_6) {
      ItemPoolMgr = _unresolved_6.ItemPoolMgr;
    }, function (_unresolved_7) {
      ActivityControl = _unresolved_7.ActivityControl;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      ViewName = _unresolved_9.ViewName;
    }, function (_unresolved_10) {
      tab = _unresolved_10.tab;
    }, function (_unresolved_11) {
      AdMgr = _unresolved_11.AdMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "848fb372WBEv5p9f/rHybeG", "LimitedBenefitsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * LimitedBenefitsPop
       * zhudingchao
       * Wed Jun 19 2024 14:31:49 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/limitedBenefits/LimitedBenefitsPop.ts
       *
       */

      _export("LimitedBenefitsPop", LimitedBenefitsPop = (_dec = ccclass('LimitedBenefitsPop'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class LimitedBenefitsPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "rewardNode", _descriptor, this);

          _initializerDefineProperty(this, "jumpNode", _descriptor2, this);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetLimitedRewardRsp, this.on_s2c_GetLimitedRewardRsp, this);
        }

        onShow() {
          this.initView();
        }

        initView() {
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.limitedRewardMsg;

          if (msg && msg.reward.itemId != 0 && msg.reward.num != 0) {
            let item = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            item.merge(msg.reward);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createItem(item, this.rewardNode);
          } else {
            Error("限时奖励数据错误关闭界面");
            this.onClose();
          }
        }

        onClickClaimBtn() {
          (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.playVideoAd((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AdType.AdType_LimitedReward, () => {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requestLimitedReward((_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
              error: Error()
            }), ActivityData) : ActivityData).ins.limitedRewardMsg.id);
          });
        }

        onClickJump() {
          (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
            error: Error()
          }), ShowTips) : ShowTips)("前往月卡界面");
        } // 限时奖励消息推送


        on_s2c_GetLimitedRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: [msg.reward]
            });
            this.onClose();
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "rewardNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "jumpNode", [_dec3], {
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
//# sourceMappingURL=44771c572602294bf48b867b7c95a9fab39a6ddc.js.map