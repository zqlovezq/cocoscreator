System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "client_protocol", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, Label, Node, Sprite, ViewPop, CommonItem, ItemInfo, LangMgr, CommonTipsPop, ShowItemNotEnoughTips, proto, Net, tab, MallDataMgr, ItemData, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _crd, ccclass, property, ItemBuyPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonItem(extras) {
    _reporterNs.report("CommonItem", "../item/CommonItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCommonTipsPop(extras) {
    _reporterNs.report("CommonTipsPop", "./CommonTipsPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowItemNotEnoughTips(extras) {
    _reporterNs.report("ShowItemNotEnoughTips", "../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemData(extras) {
    _reporterNs.report("ItemData", "../item/ItemData", _context.meta, extras);
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
      CommonItem = _unresolved_3.CommonItem;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      LangMgr = _unresolved_5.LangMgr;
    }, function (_unresolved_6) {
      CommonTipsPop = _unresolved_6.CommonTipsPop;
    }, function (_unresolved_7) {
      ShowItemNotEnoughTips = _unresolved_7.ShowItemNotEnoughTips;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_8) {
      Net = _unresolved_8.Net;
    }, function (_unresolved_9) {
      tab = _unresolved_9.tab;
    }, function (_unresolved_10) {
      MallDataMgr = _unresolved_10.MallDataMgr;
    }, function (_unresolved_11) {
      ItemData = _unresolved_11.ItemData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "eddaalqL8tGoo+QJw4xR+RE", "ItemBuyPop", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ItemBuyPop", ItemBuyPop = (_dec = ccclass('ItemBuyPop'), _dec2 = property(Label), _dec3 = property(Label), _dec4 = property(_crd && CommonItem === void 0 ? (_reportPossibleCrUseOfCommonItem({
        error: Error()
      }), CommonItem) : CommonItem), _dec5 = property(Node), _dec6 = property(Label), _dec7 = property(Label), _dec(_class = (_class2 = class ItemBuyPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "lbl_cost_diamon", _descriptor, this);

          _initializerDefineProperty(this, "lbl_num", _descriptor2, this);

          _initializerDefineProperty(this, "common_item", _descriptor3, this);

          _initializerDefineProperty(this, "node_btn", _descriptor4, this);

          _initializerDefineProperty(this, "lbl_limit", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_name", _descriptor6, this);

          this._itemCount = 0;
          this._maxRemainCount = 0;
          this._curCostDiamond = 0;
          this.mallItemId = 0;
          this.mallItemTab = null;
          this._CostItemId = 0;
          this._CostItemNum = 0;
          this._GetItemId = 0;
          this._GetItemNum = 0;
          this.boughtCount = 0;
        }

        onShow() {
          (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this.openData.name);
          this.mallItemId = Number(this.openData.name) * 10 + 1;
          this.mallItemTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().MallItemTabeById.getValue(this.mallItemId);
          this.boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this.openData.name).get(this.mallItemTab.Id);
          this._maxRemainCount = this.mallItemTab.LimitCount - this.boughtCount;
          this._GetItemId = this.mallItemTab.GetItemIds[0];
          this._GetItemNum = this.mallItemTab.GetItemNum[0];
          this._CostItemId = this.mallItemTab.CostItemIds[0];
          this._CostItemNum = this.mallItemTab.CostItemNum[0];

          if (this._maxRemainCount > 0) {
            this._itemCount = 1;
          } else {
            this.node_btn.getComponent(Button).interactable = false;
            this.node_btn.getComponent(Sprite).grayscale = true;
          }

          const award = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          award.itemId = this._GetItemId;
          award.num = this._GetItemNum;
          this.common_item.initData(award);
          this.lbl_name.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(award.itemTable.Name);
          this.updateLbl();
        }

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }

        clickAdd() {
          this._itemCount++;

          if (this._itemCount > this._maxRemainCount) {
            this._itemCount = this._maxRemainCount;
          }

          this.updateLbl();
        } // sub碎片


        clickSub() {
          this._itemCount--;

          if (this._maxRemainCount >= 1 && this._itemCount < 1) {
            this._itemCount = 1;
          }

          if (this._itemCount < 0) {
            this._itemCount = 0;
          }

          this.updateLbl();
        } // max碎片


        clickMax() {
          this._itemCount = this._maxRemainCount;
          this.updateLbl();
        }

        updateLbl() {
          this.lbl_num.string = String(this._itemCount);
          let totalCount = this._CostItemNum * this._itemCount;
          this._curCostDiamond = totalCount;
          this.lbl_cost_diamon.string = String(totalCount);
          this.lbl_limit.string = this.boughtCount + this._itemCount + "/" + this.mallItemTab.LimitCount;
        }

        onClickBtn() {
          const itemCostTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._CostItemId);
          const itemGetTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().ItemTableById.getValue(this._GetItemId);
          const tipsStr = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getCombineString("Tips_common_buy", [(_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemCostTab.Name), this._curCostDiamond, (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).getLab(itemGetTab.Name)]);
          (_crd && CommonTipsPop === void 0 ? (_reportPossibleCrUseOfCommonTipsPop({
            error: Error()
          }), CommonTipsPop) : CommonTipsPop).create(tipsStr, val => {
            if (val) {
              const haveCount = (_crd && ItemData === void 0 ? (_reportPossibleCrUseOfItemData({
                error: Error()
              }), ItemData) : ItemData).ins.getCount(this._CostItemId);

              if (haveCount < this._curCostDiamond) {
                (_crd && ShowItemNotEnoughTips === void 0 ? (_reportPossibleCrUseOfShowItemNotEnoughTips({
                  error: Error()
                }), ShowItemNotEnoughTips) : ShowItemNotEnoughTips)(this._CostItemId);
              } else {
                let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Msg_BuyFixedShopCommodityReq();
                msg.commodityId = this.mallItemId;
                msg.num = this._itemCount;
                (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
                  error: Error()
                }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
                  error: Error()
                }), proto) : proto).Ptl.BuyFixedShopCommodityReq, msg);
              }
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lbl_cost_diamon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_num", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "common_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "lbl_limit", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_name", [_dec7], {
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
//# sourceMappingURL=f5b51ab9de91c7b2d48ceee09169c451cbc9a944.js.map