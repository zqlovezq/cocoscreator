System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "client_protocol", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, ViewPop, EventMgr, proto, SignInRewardItem, ActivityControl, UIMgr, ViewName, tab, ActivityData, LocalEvent, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, NewPlayerSignInPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInRewardItem(extras) {
    _reporterNs.report("SignInRewardItem", "../signIn/SignInRewardItem", _context.meta, extras);
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

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      error = _cc.error;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_4) {
      SignInRewardItem = _unresolved_4.SignInRewardItem;
    }, function (_unresolved_5) {
      ActivityControl = _unresolved_5.ActivityControl;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      ViewName = _unresolved_7.ViewName;
    }, function (_unresolved_8) {
      tab = _unresolved_8.tab;
    }, function (_unresolved_9) {
      ActivityData = _unresolved_9.ActivityData;
    }, function (_unresolved_10) {
      LocalEvent = _unresolved_10.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c7880fttOZEdI6O2YfZFDV1", "NewPlayerSignInPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewPlayerSignInPop", NewPlayerSignInPop = (_dec = ccclass('NewPlayerSignInPop'), _dec2 = property([_crd && SignInRewardItem === void 0 ? (_reportPossibleCrUseOfSignInRewardItem({
        error: Error()
      }), SignInRewardItem) : SignInRewardItem]), _dec(_class = (_class2 = class NewPlayerSignInPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "signItems", _descriptor, this);

          this.tabs = void 0;
          this.msg = void 0;
          this.curDay = 0;

          this.onTouchItem = day => {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requestGetDailyReward(this.msg.id, day);
          };
        }

        onShow() {
          this.msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);

          if (!this.msg) {
            error("签到数据错误==", (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);
            return;
          }

          this.tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewrdItemsById(this.msg.id);

          for (var i = 0; i < this.signItems.length; i++) {
            var day = this.tabs[i].Index;
            var index = this.msg.activatedList.indexOf(day);
            var state = 0;

            if (index >= 0) {
              state = 1;
            } else {
              index = this.msg.rewardList.indexOf(day);

              if (index >= 0) {
                state = 2;
              }
            }

            this.signItems[i].initView(this.tabs[i], state, this.onTouchItem);
          }
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this);
        }

        unRegister() {
          super.unRegister();
        }

        onDestroy() {
          super.onDestroy();
        }

        onClose() {
          super.onClose();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
            error: Error()
          }), LocalEvent) : LocalEvent).LocalMsg_QueueUI_deleteUI);
        }

        updateView() {
          this.msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).DailyRewardType.DailyRewardType_NewServer);

          for (var i = 0; i < this.signItems.length; i++) {
            var day = this.tabs[i].Index;
            var index = this.msg.activatedList.indexOf(day);
            var state = 0;

            if (index >= 0) {
              state = 1;
            } else {
              index = this.msg.rewardList.indexOf(day);

              if (index >= 0) {
                state = 2;
              }
            }

            this.signItems[i].updateState(state);
          }
        }

        // 领取每日奖励
        on_s2c_GetDailyRewardRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            if (msg.data.id == this.msg.id) {
              (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
                error: Error()
              }), UIMgr) : UIMgr).ins.show({
                viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                  error: Error()
                }), ViewName) : ViewName).CongratulationPop,
                data: msg.rewards
              });
              this.updateView();
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "signItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return [];
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6923003e93f69cb14bd543683e0511bda4f3a2d0.js.map