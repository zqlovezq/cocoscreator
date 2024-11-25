System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "client_protocol", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, error, Label, ComponentBase, SignInRewardItem, ActivityData, proto, ActivityControl, EventMgr, UIMgr, ViewName, RoleData, TimeUtil, LangMgr, HeroDataControl, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, SignInView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSignInRewardItem(extras) {
    _reporterNs.report("SignInRewardItem", "./SignInRewardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHeroDataControl(extras) {
    _reporterNs.report("HeroDataControl", "../../hero/herobag/HeroDataControl", _context.meta, extras);
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
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      SignInRewardItem = _unresolved_3.SignInRewardItem;
    }, function (_unresolved_4) {
      ActivityData = _unresolved_4.ActivityData;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_5) {
      ActivityControl = _unresolved_5.ActivityControl;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      RoleData = _unresolved_9.RoleData;
    }, function (_unresolved_10) {
      TimeUtil = _unresolved_10.TimeUtil;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_unresolved_12) {
      HeroDataControl = _unresolved_12.HeroDataControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "80b5ajf1p9A1pM3hVJkR6be", "SignInView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'error', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * SignInView
       * zhudingchao
       * Thu Jun 20 2024 17:38:38 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/signIn/SignInView.ts
       *
       */

      _export("SignInView", SignInView = (_dec = ccclass('SignInView'), _dec2 = property([_crd && SignInRewardItem === void 0 ? (_reportPossibleCrUseOfSignInRewardItem({
        error: Error()
      }), SignInRewardItem) : SignInRewardItem]), _dec3 = property(Label), _dec(_class = (_class2 = class SignInView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "signItems", _descriptor, this);

          _initializerDefineProperty(this, "timeLab", _descriptor2, this);

          this.signId = void 0;
          this.type = void 0;
          this.tabs = void 0;
          this.msg = void 0;

          this.onTouchItem = day => {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requestGetDailyReward(this.msg.id, day);
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetDailyRewardRsp, this.on_s2c_GetDailyRewardRsp, this);
        }

        start() {}

        initView(type) {
          this.type = type;
          this.msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType(this.type);

          if (!this.msg) {
            error("签到数据错误==", type);
            return;
          }

          if (this.timeLab) {
            if (Number(this.msg.closeTime) > 0) {
              let lastTimer = Number(this.msg.closeTime) - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.getServerUtcTime();

              if (lastTimer > 0) {
                let ret = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
                  error: Error()
                }), TimeUtil) : TimeUtil).formaterWithOutSecond3(lastTimer);
                let day = ret.day ? ret.day : 0;
                let hours = ret.hours ? ret.hours : 0;
                this.timeLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).getCombineString("ui_commondesc_71", [day, hours]);
              } else {
                this.timeLab.node.active = false;
              }
            } else {
              this.timeLab.node.active = false;
            }
          }

          this.tabs = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewrdItemsById(this.msg.id);

          for (let i = 0; i < this.signItems.length; i++) {
            let day = this.tabs[i].Index;
            let index = this.msg.activatedList.indexOf(day);
            let state = 0;

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

        updateView() {
          this.msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getDailyRewardMsgByType(this.type);

          for (let i = 0; i < this.signItems.length; i++) {
            let day = this.tabs[i].Index;
            let index = this.msg.activatedList.indexOf(day);
            let state = 0;

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

        onClickHero(event, heroId) {
          heroId = Number(heroId);
          (_crd && HeroDataControl === void 0 ? (_reportPossibleCrUseOfHeroDataControl({
            error: Error()
          }), HeroDataControl) : HeroDataControl).ins.refreshBookData(heroId);
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).HeroBagView,
            data: {
              viewType: 2
            },
            zIndex: 300
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "signItems", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "timeLab", [_dec3], {
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
//# sourceMappingURL=e60a4de2820a1eb82ba4fa601997706df9204b00.js.map