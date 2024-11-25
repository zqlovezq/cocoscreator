System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, instantiate, Label, Node, Prefab, tab, ItemInfo, ItemPoolMgr, MonthlyCardPrivilegeItem, LangMgr, PayControl, ActivityControl, TimeUtil, RoleData, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _dec12, _dec13, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _descriptor11, _descriptor12, _crd, ccclass, property, MonthlyCardItem;

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

  function _reportPossibleCrUseOfMonthlyCardPrivilegeItem(extras) {
    _reporterNs.report("MonthlyCardPrivilegeItem", "./MonthlyCardPrivilegeItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfActivityControl(extras) {
    _reporterNs.report("ActivityControl", "../ActivityControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTimeUtil(extras) {
    _reporterNs.report("TimeUtil", "../../../utils/TimeUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      ItemInfo = _unresolved_3.ItemInfo;
    }, function (_unresolved_4) {
      ItemPoolMgr = _unresolved_4.ItemPoolMgr;
    }, function (_unresolved_5) {
      MonthlyCardPrivilegeItem = _unresolved_5.MonthlyCardPrivilegeItem;
    }, function (_unresolved_6) {
      LangMgr = _unresolved_6.LangMgr;
    }, function (_unresolved_7) {
      PayControl = _unresolved_7.PayControl;
    }, function (_unresolved_8) {
      ActivityControl = _unresolved_8.ActivityControl;
    }, function (_unresolved_9) {
      TimeUtil = _unresolved_9.TimeUtil;
    }, function (_unresolved_10) {
      RoleData = _unresolved_10.RoleData;
    }, function (_unresolved_11) {
      ChannelMgr = _unresolved_11.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cf7e6HwSvVOir65esogR0jb", "MonthlyCardItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'instantiate', 'Label', 'Node', 'Prefab']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MonthlyCardItem", MonthlyCardItem = (_dec = ccclass('MonthlyCardItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Node), _dec10 = property(Node), _dec11 = property(Prefab), _dec12 = property(Label), _dec13 = property(Node), _dec(_class = (_class2 = class MonthlyCardItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "cardNode1", _descriptor, this);

          _initializerDefineProperty(this, "cardNode2", _descriptor2, this);

          _initializerDefineProperty(this, "nowRewardNode", _descriptor3, this);

          _initializerDefineProperty(this, "everydayNode", _descriptor4, this);

          _initializerDefineProperty(this, "privilegeNode", _descriptor5, this);

          _initializerDefineProperty(this, "priceBtnNode", _descriptor6, this);

          _initializerDefineProperty(this, "priceNumLabel", _descriptor7, this);

          _initializerDefineProperty(this, "claimBtnNode", _descriptor8, this);

          _initializerDefineProperty(this, "gotBtnNode", _descriptor9, this);

          _initializerDefineProperty(this, "privilegeItemPrefb", _descriptor10, this);

          _initializerDefineProperty(this, "lastDayLab", _descriptor11, this);

          _initializerDefineProperty(this, "timerNode", _descriptor12, this);

          this.table = void 0;
          this.state = void 0;
        }

        initView(table) {
          this.table = table;
          this.cardNode1.active = table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass;
          this.cardNode2.active = table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass;
          var itemInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          itemInfo.initItemData(table.BuyRewardIds[0], table.BuyRewardNum[0]);
          var node = (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(itemInfo, this.nowRewardNode);
          node.setPosition(0, -30);

          for (var key in table.RewardIds) {
            var info = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            info.initItemData(table.RewardIds[key], table.RewardNum[key]);
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(info, this.everydayNode);
          }

          this.initPrivilegeView();
          this.updateView(0);
        }

        initPrivilegeView() {
          for (var key in this.table.WordKey) {
            var item = instantiate(this.privilegeItemPrefb);
            item.parent = this.privilegeNode;
            var com = item.getComponent(_crd && MonthlyCardPrivilegeItem === void 0 ? (_reportPossibleCrUseOfMonthlyCardPrivilegeItem({
              error: Error()
            }), MonthlyCardPrivilegeItem) : MonthlyCardPrivilegeItem);
            com.bgNode.active = this.table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass;
            com.vipNode.active = this.table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_PremiumMonthlyPass;

            if (this.table.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PrivilegedType.PrivilegedType_MonthlyPass) {
              com.richtext1.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(this.table.WordKey[key]);
            } else {
              com.richtext2.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(this.table.WordKey[key]);
            }
          }
        }
        /**
         * state: 0:未购买 1:已购买未领取 2:已领取
         */


        updateView(state, lastTimer) {
          if (lastTimer === void 0) {
            lastTimer = 0;
          }

          this.state = state;
          this.priceBtnNode.active = state == 0;
          this.claimBtnNode.active = state == 1;
          this.gotBtnNode.active = state == 2;

          if (state == 0) {
            this.timerNode.active = false;
            var rechargeTable = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RechargeTableById.getValue(this.table.RechargeId);
            this.priceNumLabel.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTable);
          } else {
            this.timerNode.active = true;
            var dayStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("Tips_common_day");
            var data = (_crd && TimeUtil === void 0 ? (_reportPossibleCrUseOfTimeUtil({
              error: Error()
            }), TimeUtil) : TimeUtil).formaterWithOutSecond3(lastTimer - (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
              error: Error()
            }), RoleData) : RoleData).ins.getServerUtcTime());
            this.lastDayLab.string = data["day"] + dayStr;
          }
        }

        onClickBuy() {
          if (this.state == 0) {
            (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
              error: Error()
            }), PayControl) : PayControl).ins.requestPay(this.table.RechargeId, null);
          }
        }

        onClickReceive() {
          if (this.state == 1) {
            (_crd && ActivityControl === void 0 ? (_reportPossibleCrUseOfActivityControl({
              error: Error()
            }), ActivityControl) : ActivityControl).ins.requestReceiveMonthlyPassDailyRewards(this.table.Type);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "cardNode1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "cardNode2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "nowRewardNode", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "everydayNode", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "privilegeNode", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "priceBtnNode", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "priceNumLabel", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "claimBtnNode", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "gotBtnNode", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "privilegeItemPrefb", [_dec11], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor11 = _applyDecoratedDescriptor(_class2.prototype, "lastDayLab", [_dec12], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor12 = _applyDecoratedDescriptor(_class2.prototype, "timerNode", [_dec13], {
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
//# sourceMappingURL=852e1c8245d480406f79c1b8ca48fb6963949ce0.js.map