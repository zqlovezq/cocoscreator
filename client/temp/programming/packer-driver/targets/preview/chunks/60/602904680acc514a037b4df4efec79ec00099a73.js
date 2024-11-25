System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, ProgressBar, tab, ItemInfo, ItemPoolMgr, LangMgr, ActivityData, AWARD_STATE, UIMgr, ActivityControl, ButtonLock, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _crd, ccclass, property, CombineAccumulatedRechargeCellItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAWARD_STATE(extras) {
    _reporterNs.report("AWARD_STATE", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfButtonLock(extras) {
    _reporterNs.report("ButtonLock", "../../../utils/GameUtil", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      ActivityData = _unresolved_6.ActivityData;
    }, function (_unresolved_7) {
      AWARD_STATE = _unresolved_7.AWARD_STATE;
    }, function (_unresolved_8) {
      UIMgr = _unresolved_8.UIMgr;
    }, function (_unresolved_9) {
      ActivityControl = _unresolved_9.ActivityControl;
    }, function (_unresolved_10) {
      ButtonLock = _unresolved_10.ButtonLock;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "43a811e3N9LRbWOPyRH/0lQ", "CombineAccumulatedRechargeCellItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("CombineAccumulatedRechargeCellItem", CombineAccumulatedRechargeCellItem = (_dec = ccclass('CombineAccumulatedRechargeCellItem'), _dec2 = property(Node), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(ProgressBar), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Node), _dec9 = property(Node), _dec10 = (_crd && ButtonLock === void 0 ? (_reportPossibleCrUseOfButtonLock({
        error: Error()
      }), ButtonLock) : ButtonLock)(1, () => {}), _dec(_class = (_class2 = class CombineAccumulatedRechargeCellItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_reawrd", _descriptor, this);

          _initializerDefineProperty(this, "lbl_target_amount", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_progress_num", _descriptor3, this);

          _initializerDefineProperty(this, "bar_progress", _descriptor4, this);

          _initializerDefineProperty(this, "node_go", _descriptor5, this);

          _initializerDefineProperty(this, "node_receive", _descriptor6, this);

          _initializerDefineProperty(this, "node_got", _descriptor7, this);

          _initializerDefineProperty(this, "node_lock", _descriptor8, this);

          this._state = (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).NONE;
          this._type = "";
          this._awardId = 0;
        }

        initData(tab, type) {
          // 显示奖励
          this._type = type;
          this._awardId = tab.IndexId;
          var maxValue = 0;

          if (type === "PriceDollar") {
            maxValue = tab[type] / 100;
          } else {
            maxValue = tab[type];
          }

          this.lbl_target_amount.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_accumulatedrecharge_1", [maxValue]);
          var serverData = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.getRechargeServerData(tab.ActivityId);
          this.lbl_progress_num.string = serverData.payAmount + "/" + maxValue;
          this.bar_progress.progress = serverData.payAmount / maxValue > 1 ? 1 : serverData.payAmount / maxValue;
          this.node_reawrd.destroyAllChildren();

          for (var i = 0; i < tab.RewardItemIds.length; i++) {
            var id = tab.RewardItemIds[i];
            var count = tab.RewardItemNum[i];
            var awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = id;
            awardInfo.num = count;
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_reawrd);
          }

          var state = this.getRewardState(serverData, tab);
          this.node_go.active = state === (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).GO;
          this.node_receive.active = state === (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).RECEIVE;
          this.node_got.active = state === (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).GOT;
          this.node_lock.active = state === (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
            error: Error()
          }), AWARD_STATE) : AWARD_STATE).LOCK;
        }

        getRewardState(serverData, tabData) {
          // 根据当前的充值金额获取当前的档位
          var curTabGo = null;

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ActivityCumulativeRechargeTable.length; i++) {
            var _tab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ActivityCumulativeRechargeTable[i];

            if (_tab.ActivityId === serverData.activityId) {
              if (_tab[this._type] > serverData.payAmount) {
                curTabGo = _tab;
                break;
              } else {
                if (i === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).getData().ActivityCumulativeRechargeTable.length - 1) {
                  if (_tab[this._type] < serverData.payAmount) {
                    curTabGo = _tab;
                  }
                }
              }
            }
          }

          if (serverData.payAmount >= tabData[this._type]) {
            // 已经领取
            if (serverData.receivedRewardIds.indexOf(tabData.IndexId) > -1) {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).GOT;
            } else {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).RECEIVE;
            }
          } else {
            if (tabData.IndexId === curTabGo.IndexId) {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).GO;
            } else {
              return (_crd && AWARD_STATE === void 0 ? (_reportPossibleCrUseOfAWARD_STATE({
                error: Error()
              }), AWARD_STATE) : AWARD_STATE).LOCK;
            }
          }
        } // 点击前往


        onClickGoBtn() {
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.hideView("CombineActivityMainView");
          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.jumpLayer((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Module.Module_ActivityMainView);
        } // 领取奖励


        onClickReceive() {
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.requestReceiveCumulativeRechargeReward(this._awardId);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_reawrd", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_target_amount", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_progress_num", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "bar_progress", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_go", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_receive", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "node_lock", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "onClickReceive", [_dec10], Object.getOwnPropertyDescriptor(_class2.prototype, "onClickReceive"), _class2.prototype)), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=602904680acc514a037b4df4efec79ec00099a73.js.map