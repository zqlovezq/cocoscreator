System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, ComponentBase, MonthlyCardItem, tab, ItemPoolMgr, ItemInfo, ActivityData, EventMgr, proto, UIMgr, ViewName, ActivityControl, RoleData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, MonthlyCardView;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfComponentBase(extras) {
    _reporterNs.report("ComponentBase", "../../../../framework/base/ComponentBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonthlyCardItem(extras) {
    _reporterNs.report("MonthlyCardItem", "./MonthlyCardItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityData(extras) {
    _reporterNs.report("ActivityData", "../ActivityData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../../define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
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
      ComponentBase = _unresolved_2.ComponentBase;
    }, function (_unresolved_3) {
      MonthlyCardItem = _unresolved_3.MonthlyCardItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      ItemInfo = _unresolved_6.ItemInfo;
    }, function (_unresolved_7) {
      ActivityData = _unresolved_7.ActivityData;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      UIMgr = _unresolved_9.UIMgr;
    }, function (_unresolved_10) {
      ViewName = _unresolved_10.ViewName;
    }, function (_unresolved_11) {
      ActivityControl = _unresolved_11.ActivityControl;
    }, function (_unresolved_12) {
      RoleData = _unresolved_12.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "205296hJpFEP54PXHcoQpbn", "MonthlyCardView", undefined);

      __checkObsolete__(['_decorator', 'Component', 'ForwardFlow', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonthlyCardView", MonthlyCardView = (_dec = ccclass('MonthlyCardView'), _dec2 = property(_crd && MonthlyCardItem === void 0 ? (_reportPossibleCrUseOfMonthlyCardItem({
        error: Error()
      }), MonthlyCardItem) : MonthlyCardItem), _dec3 = property(_crd && MonthlyCardItem === void 0 ? (_reportPossibleCrUseOfMonthlyCardItem({
        error: Error()
      }), MonthlyCardItem) : MonthlyCardItem), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec(_class = (_class2 = class MonthlyCardView extends (_crd && ComponentBase === void 0 ? (_reportPossibleCrUseOfComponentBase({
        error: Error()
      }), ComponentBase) : ComponentBase) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "cardItem1", _descriptor, this);

          _initializerDefineProperty(this, "cardItem2", _descriptor2, this);

          _initializerDefineProperty(this, "extraNode", _descriptor3, this);

          _initializerDefineProperty(this, "extraRewardNode", _descriptor4, this);

          _initializerDefineProperty(this, "reachBtnNode", _descriptor5, this);

          _initializerDefineProperty(this, "notreachBtnNode", _descriptor6, this);
        }

        register() {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.GetPrivilegeInfoRsp, this.on_s2c_GetMonthlyPassInfoRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceivePrivilegeDailyRewardsRsp, this.on_s2c_ReceiveMonthlyPassDailyRewardsRsp, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.ReceiveMonthlyPassAdditionalRewardsRsp, this.on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp, this);
        }

        initView() {
          let table1 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MonthlyPassTableByType.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass);
          this.cardItem1.initView(table1);
          let table2 = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MonthlyPassTableByType.getValue((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass);
          this.cardItem2.initView(table2);
          let rewards = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().MonthlyPassBothRewardItemIds;
          let nums = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().MonthlyPassBothRewardItemNum;

          for (let key in rewards) {
            let info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            info.initItemData(rewards[key], nums[key]);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(info, this.extraRewardNode);
          }

          this.updateView();
        }

        updateView() {
          let msg = (_crd && ActivityData === void 0 ? (_reportPossibleCrUseOfActivityData({
            error: Error()
          }), ActivityData) : ActivityData).ins.monthlyPassInfo;
          let isMonthlyPass = false;

          if (msg.PrivilegeMap && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass]) {
            let privileged = msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass];

            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime() < privileged.expireTime) {
              let stage = privileged.isDailyReceived ? 2 : 1;
              this.cardItem1.updateView(stage, privileged.expireTime);
              isMonthlyPass = true;
            } else {
              this.cardItem1.updateView(0);
            }
          } else {
            this.cardItem1.updateView(0);
          }

          let isPremiumMonthlyPass = false;

          if (msg.PrivilegeMap && msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass]) {
            let privileged = msg.PrivilegeMap[(_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass];

            if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime() < privileged.expireTime) {
              let stage = privileged.isDailyReceived ? 2 : 1;
              this.cardItem2.updateView(stage, privileged.expireTime);
              isPremiumMonthlyPass = true;
            } else {
              this.cardItem2.updateView(0);
            }
          } else {
            this.cardItem2.updateView(0);
          }

          if (msg.isReceivedMonthlyPassAddtional) {
            this.extraNode.active = false;
          } else {
            let isReach = false;

            if (msg.PrivilegeMap && isMonthlyPass && isPremiumMonthlyPass) {
              isReach = true;
            }

            this.notreachBtnNode.active = !isReach;
            this.reachBtnNode.active = isReach;
          }
        }

        onClickReachBtn() {
          (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
            error: Error()
          }), ActivityControl) : ActivityControl).ins.requestReceiveMonthlyPassAllBoughtRewards();
        }
        /**月卡信息 */


        on_s2c_GetMonthlyPassInfoRsp(msg) {
          this.updateView();
        } // 领取月卡每日奖励


        on_s2c_ReceiveMonthlyPassDailyRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateView();
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.show({
              viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
                error: Error()
              }), ViewName) : ViewName).CongratulationPop,
              data: msg.rewards
            });
          }
        } // 领取月卡加码奖励


        on_s2c_ReceiveMonthlyPassAllBoughtRewardsRsp(msg) {
          if (!msg.error || msg.error.code == (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) {
            this.updateView();
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

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardItem1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardItem2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "extraNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "extraRewardNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "reachBtnNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "notreachBtnNode", [_dec7], {
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
//# sourceMappingURL=56d353d658cc4c505718d397263fa020f26a588a.js.map