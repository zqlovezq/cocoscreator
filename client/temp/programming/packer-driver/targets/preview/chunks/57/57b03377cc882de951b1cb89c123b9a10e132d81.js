System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "client_protocol", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, Node, ViewPop, ClimbingTowerTowerEveryDayRewardItem, GameplayViewDataMgr, GameplayControl, proto, EventMgr, UIMgr, ViewName, getTimeUntilNextDay, setTextTime, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, ClimbingTowerTowerEveryDayRewardPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClimbingTowerTowerEveryDayRewardItem(extras) {
    _reporterNs.report("ClimbingTowerTowerEveryDayRewardItem", "./ClimbingTowerTowerEveryDayRewardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayViewDataMgr(extras) {
    _reporterNs.report("GameplayViewDataMgr", "../GameplayViewDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameplayControl(extras) {
    _reporterNs.report("GameplayControl", "../GameplayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
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

  function _reportPossibleCrUseOfgetTimeUntilNextDay(extras) {
    _reporterNs.report("getTimeUntilNextDay", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfsetTextTime(extras) {
    _reporterNs.report("setTextTime", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      ClimbingTowerTowerEveryDayRewardItem = _unresolved_3.ClimbingTowerTowerEveryDayRewardItem;
    }, function (_unresolved_4) {
      GameplayViewDataMgr = _unresolved_4.GameplayViewDataMgr;
    }, function (_unresolved_5) {
      GameplayControl = _unresolved_5.GameplayControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_6) {
      EventMgr = _unresolved_6.EventMgr;
    }, function (_unresolved_7) {
      UIMgr = _unresolved_7.UIMgr;
    }, function (_unresolved_8) {
      ViewName = _unresolved_8.ViewName;
    }, function (_unresolved_9) {
      getTimeUntilNextDay = _unresolved_9.getTimeUntilNextDay;
      setTextTime = _unresolved_9.setTextTime;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1b468Q0EB9GR7hrtHgRqfaM", "ClimbingTowerTowerEveryDayRewardPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ClimbingTowerTowerEveryDayRewardPop
       * zhudingchao
       * Thu Jul 11 2024 17:13:54 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/climbingTower/ClimbingTowerTowerEveryDayRewardPop.ts
       *
       */

      _export("ClimbingTowerTowerEveryDayRewardPop", ClimbingTowerTowerEveryDayRewardPop = (_dec = ccclass('ClimbingTowerTowerEveryDayRewardPop'), _dec2 = property(Label), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property([_crd && ClimbingTowerTowerEveryDayRewardItem === void 0 ? (_reportPossibleCrUseOfClimbingTowerTowerEveryDayRewardItem({
        error: Error()
      }), ClimbingTowerTowerEveryDayRewardItem) : ClimbingTowerTowerEveryDayRewardItem]), _dec(_class = (_class2 = class ClimbingTowerTowerEveryDayRewardPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "canReceivedLab", _descriptor, this);

          _initializerDefineProperty(this, "receivedNode", _descriptor2, this);

          _initializerDefineProperty(this, "reachNode", _descriptor3, this);

          _initializerDefineProperty(this, "timerLab", _descriptor4, this);

          _initializerDefineProperty(this, "items", _descriptor5, this);

          this.currStateId = void 0;
          this.endTimer = void 0;

          this.updateTimer = () => {
            this.endTimer--;

            if (this.endTimer >= 0) {
              //let tips = "{0}後可再次領取"
              this.timerLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_13", [(_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
                error: Error()
              }), setTextTime) : setTextTime)(this.endTimer)]);
            } else {
              this.unschedule(this.updateTimer);
            }
          };
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveClimbTowerDailyRewardsRsp, this.on_s2c_ReceiveClimbTowerDailyRewardsRsp, this);
        }

        onShow() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;

          if (msg.clearedStageIds.length == 0) {
            this.items[0].initView(null, false);
            this.items[1].initView(30101, true);
            this.currStateId = 0;
          } else {
            var id = msg.clearedStageIds[msg.clearedStageIds.length - 1];
            this.items[0].initView(id, false);
            this.items[1].initView(id + 1, true);
            this.currStateId = id;
          }

          if (msg.isReceivedDailyRewards) {
            this.timerLab.node.active = true;
          } else {
            this.timerLab.node.active = false;
          }

          this.updateBtn();
        }

        updateBtn() {
          var msg = (_crd && GameplayViewDataMgr === void 0 ? (_reportPossibleCrUseOfGameplayViewDataMgr({
            error: Error()
          }), GameplayViewDataMgr) : GameplayViewDataMgr).ins.climbTowerInfoMsg;

          if (msg.isReceivedDailyRewards) {
            this.timerLab.node.active = true;
            this.initEndTimer();
          } else {
            this.timerLab.node.active = false;
          }

          if (msg.clearedStageIds.length == 0) {
            this.reachNode.active = false;
            this.receivedNode.active = false;
          } else {
            this.reachNode.active = !msg.isReceivedDailyRewards;
            this.receivedNode.active = msg.isReceivedDailyRewards;
          }
        }

        initEndTimer() {
          this.unschedule(this.updateTimer);
          this.endTimer = (_crd && getTimeUntilNextDay === void 0 ? (_reportPossibleCrUseOfgetTimeUntilNextDay({
            error: Error()
          }), getTimeUntilNextDay) : getTimeUntilNextDay)(); //let tips = "{0}後可再次領取"

          this.timerLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_climbingtower_13", [(_crd && setTextTime === void 0 ? (_reportPossibleCrUseOfsetTextTime({
            error: Error()
          }), setTextTime) : setTextTime)(this.endTimer)]);
          this.schedule(this.updateTimer, 1);
        }

        onClickReachBtn() {
          if (this.currStateId > 0) {
            (_crd && GameplayControl === void 0 ? (_reportPossibleCrUseOfGameplayControl({
              error: Error()
            }), GameplayControl) : GameplayControl).ins.requestReceiveClimbTowerDailyRewards();
          }
        }

        on_s2c_ReceiveClimbTowerDailyRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateBtn();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "canReceivedLab", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "receivedNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "reachNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "timerLab", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "items", [_dec6], {
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
//# sourceMappingURL=57b03377cc882de951b1cb89c123b9a10e132d81.js.map