System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "client_protocol", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, ViewPop, AssociationData, CommonItem, tab, AssociationControl, ItemInfo, EventMgr, proto, CommonTipsPop, ShowItemNotEnoughTips, RoleData, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, AssociationDonatePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationData(extras) {
    _reporterNs.report("AssociationData", "./AssociationData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "../common/CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationData = _unresolved_3.AssociationData;
    }, function (_unresolved_4) {
      CommonItem = _unresolved_4.CommonItem;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      AssociationControl = _unresolved_6.AssociationControl;
    }, function (_unresolved_7) {
      ItemInfo = _unresolved_7.ItemInfo;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_9) {
      CommonTipsPop = _unresolved_9.CommonTipsPop;
    }, function (_unresolved_10) {
      ShowItemNotEnoughTips = _unresolved_10.ShowItemNotEnoughTips;
    }, function (_unresolved_11) {
      RoleData = _unresolved_11.RoleData;
    }, function (_unresolved_12) {
      LangMgr = _unresolved_12.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "20a04Ggv+NGxI45MrwBHgUu", "AssociationDonatePop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationDonatePop", AssociationDonatePop = (_dec = ccclass('AssociationDonatePop'), _dec2 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Label), _dec6 = property(Label), _dec7 = property(Label), _dec8 = property(Node), _dec(_class = (_class2 = class AssociationDonatePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "common_item", _descriptor, this);

          _initializerDefineProperty(this, "node_free", _descriptor2, this);

          _initializerDefineProperty(this, "node_cost", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_remain_time", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_cost_diamon", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_num", _descriptor6, this);

          _initializerDefineProperty(this, "node_sign", _descriptor7, this);

          this._maxRemainSignCount = 0;
          this._itemCount = 0;
          this._curCostDiamond = 0;
        }

        onShow() {
          this.refreshSignView();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {
          /* 监听公会签到 */
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).onMsg((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.SignGuildRsp, this.on_s2c_SignGuildRsp, this);
        }

        unRegister() {
          super.unRegister();
        }
        /* 签到信息 */


        refreshSignView() {
          // 当前签到次数
          var guildInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo();
          var signCount = guildInfo.signTimes; // 根据签到次数显示item

          var maxSignCount = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildSignInTable.length;
          var guildSignTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GuildSignInTableById.getValue(signCount + 1 > maxSignCount ? maxSignCount : signCount + 1);
          this._maxRemainSignCount = maxSignCount - signCount;
          this.lbl_remain_time.string = this._maxRemainSignCount + "/" + maxSignCount;

          if (this._maxRemainSignCount > 0) {
            this._itemCount = 1;
          } else {
            this.node_sign.getComponent(Button).interactable = false;
            this.node_sign.getComponent(Sprite).grayscale = true;
          }

          var award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          award.itemId = guildSignTab.RewardItemIds[0];
          award.num = guildSignTab.RewardCount[0];
          this.common_item.initData(award);
          this.updateLbl();
        }

        onClickSign() {
          var CostCount = this._curCostDiamond;

          if (CostCount === 0) {
            (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
              error: Error()
            }), AssociationControl) : AssociationControl).ins.reqSignGuild(this._itemCount);
            return;
          }

          var tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("ui_association_3", [CostCount, this._itemCount]);
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
            if (val) {
              if ((_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
                error: Error()
              }), RoleData) : RoleData).ins.diamond < CostCount) {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(1);
              } else {
                (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
                  error: Error()
                }), AssociationControl) : AssociationControl).ins.reqSignGuild(this._itemCount);
              }
            }
          });
        }

        clickAdd() {
          this._itemCount++;

          if (this._itemCount > this._maxRemainSignCount) {
            this._itemCount = this._maxRemainSignCount;
          }

          this.updateLbl();
        } // sub碎片


        clickSub() {
          this._itemCount--;

          if (this._maxRemainSignCount >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
          }

          if (this._itemCount < 0) {
            this._itemCount = 0;
          }

          this.updateLbl();
        } // max碎片


        clickMax() {
          this._itemCount = this._maxRemainSignCount;
          this.updateLbl();
        }

        updateLbl() {
          this.lbl_num.string = String(this._itemCount);
          this.node_free.active = false;
          this.node_cost.active = false;
          var guildInfo = (_crd && AssociationData === void 0 ? (_reportPossibleCrUseOfAssociationData({
            error: Error()
          }), AssociationData) : AssociationData).ins.getAssocitionInfo();
          var signCount = guildInfo.signTimes;
          var totalCount = 0;

          for (var i = signCount + 1; i <= signCount + this._itemCount; i++) {
            var guildSignTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().GuildSignInTableById.getValue(i);

            if (guildSignTab) {
              totalCount += guildSignTab.SignInCostDiamond;
            }
          }

          if (totalCount === 0) {
            this.node_free.active = true;
          } else {
            this.node_cost.active = true;
            this.lbl_cost_diamon.string = String(totalCount);
          }

          this._curCostDiamond = totalCount;
        }

        on_s2c_SignGuildRsp(msg) {
          if (msg.error && msg.error.code != (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).CommonErrorCode.Succeed) return;
          this.refreshSignView();
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_free", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_cost", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_remain_time", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_cost_diamon", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_num", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_sign", [_dec8], {
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
//# sourceMappingURL=a0412347c868d4b9bf10cb914b9cccfd231da7e9.js.map