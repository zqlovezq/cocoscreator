System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "client_protocol", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, Vec3, ItemInfo, ItemPoolMgr, tab, ChannelMgr, MallDataMgr, MALLNAME, AdMgr, ShowTips, proto, Net, LangMgr, PayControl, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _crd, ccclass, property, NewHandGiftItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMALLNAME(extras) {
    _reporterNs.report("MALLNAME", "../../../../Common/script/EnumTypeMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAdMgr(extras) {
    _reporterNs.report("AdMgr", "../../AdMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../../mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../mgr/LangMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
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
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      ItemInfo = _unresolved_2.ItemInfo;
    }, function (_unresolved_3) {
      ItemPoolMgr = _unresolved_3.ItemPoolMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      ChannelMgr = _unresolved_5.ChannelMgr;
    }, function (_unresolved_6) {
      MallDataMgr = _unresolved_6.MallDataMgr;
    }, function (_unresolved_7) {
      MALLNAME = _unresolved_7.MALLNAME;
    }, function (_unresolved_8) {
      AdMgr = _unresolved_8.AdMgr;
    }, function (_unresolved_9) {
      ShowTips = _unresolved_9.ShowTips;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_10) {
      Net = _unresolved_10.Net;
    }, function (_unresolved_11) {
      LangMgr = _unresolved_11.LangMgr;
    }, function (_unresolved_12) {
      PayControl = _unresolved_12.PayControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5961e/YEIBL+5WAWr0fnAVS", "NewHandGiftItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("NewHandGiftItem", NewHandGiftItem = (_dec = ccclass('NewHandGiftItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Label), _dec8 = property(Node), _dec9 = property(Label), _dec10 = property(Sprite), _dec(_class = (_class2 = class NewHandGiftItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "node_first_item", _descriptor, this);

          _initializerDefineProperty(this, "node_layout", _descriptor2, this);

          _initializerDefineProperty(this, "node_price_btn", _descriptor3, this);

          _initializerDefineProperty(this, "node_ads_btn", _descriptor4, this);

          _initializerDefineProperty(this, "node_diamond_btn", _descriptor5, this);

          _initializerDefineProperty(this, "lbl_limit_time", _descriptor6, this);

          _initializerDefineProperty(this, "node_nothing", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_diamond_count", _descriptor8, this);

          _initializerDefineProperty(this, "sp_chaozhi", _descriptor9, this);

          this.mallItemTab = null;
          this._view_name = (_crd && MALLNAME === void 0 ? (_reportPossibleCrUseOfMALLNAME({
            error: Error()
          }), MALLNAME) : MALLNAME).NONE;
          this.boughtCount = 0;
        }

        initData(viewData, viewName) {
          //   根据商品id设置item
          this._view_name = viewName;
          this.mallItemTab = viewData; //先创建首个奖励

          this.setStaticView();
          this.setAsyncView();
        }

        setStaticView() {
          var awards = this.mallItemTab.GetItemIds;
          var awardNums = this.mallItemTab.GetItemNum;
          var firstAward = awards[0];
          var firstAwardNum = awardNums[0];
          var otherAward = [];
          var otherAwardNums = [];

          for (var i = 1; i < awards.length; i++) {
            otherAward.push(awards[i]);
            otherAwardNums.push(awardNums[i]);
          }

          var firstInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          firstInfo.itemId = firstAward;
          firstInfo.num = firstAwardNum;
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(firstInfo, this.node_first_item);

          if (otherAward.length === 0) {
            this.node_first_item.setPosition(new Vec3(0, -135, 0));
          }

          this.node_layout.destroyAllChildren();

          for (var _i = 0; _i < otherAward.length; _i++) {
            var awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = otherAward[_i];
            awardInfo.num = otherAwardNums[_i];
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_layout);
          } // 显示价格


          if (this.mallItemTab.RechargeId) {
            var rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RechargeTableById.getValue(this.mallItemTab.RechargeId);
            var lbl_price = this.node_price_btn.getChildByName("price_txt").getComponent(Label);
            lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTab);
          }
        }

        setAsyncView() {
          this.boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this._view_name).get(this.mallItemTab.Id);
          this.node_ads_btn.active = this.mallItemTab.CostType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_Advert;
          this.node_price_btn.active = this.mallItemTab.CostType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_Recharge;
          this.node_diamond_btn.active = this.mallItemTab.CostType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_CostItem;

          if (this.mallItemTab.CostType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_Advert) {
            // 当前是广告 显示广告次数跟广告剩余次数
            var maxAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.getAdCountMaxByType(this.mallItemTab.AdType);
            var curAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
              error: Error()
            }), AdMgr) : AdMgr).ins.getAdCountByType(this.mallItemTab.AdType);
            this.lbl_limit_time.string = String(maxAdTimes - curAdTimes);
            this.node_nothing.active = curAdTimes >= maxAdTimes;
          } else if (this.mallItemTab.CostType === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_CostItem) {
            this.lbl_limit_time.string = String(this.mallItemTab.LimitCount - this.boughtCount);
            this.node_nothing.active = this.boughtCount >= this.mallItemTab.LimitCount;
            this.lbl_diamond_count.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab("ui_commondesc_90");
            this.lbl_diamond_count.fontSize = 26;
            this.lbl_diamond_count.outlineWidth = 3;
          } else {
            this.lbl_limit_time.string = String(this.mallItemTab.LimitCount - this.boughtCount);
            this.node_nothing.active = this.boughtCount >= this.mallItemTab.LimitCount;
          }

          if (this.mallItemTab.IconUrl) {
            this.sp_chaozhi.node.active = true;
            this.sp_chaozhi.setTexture(this.mallItemTab.IconUrl);
          } else {
            this.sp_chaozhi.node.active = false;
          }
        }

        clickFreeAdBuyItem() {
          var maxAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountMaxByType(this.mallItemTab.AdType);
          var curAdTimes = (_crd && AdMgr === void 0 ? (_reportPossibleCrUseOfAdMgr({
            error: Error()
          }), AdMgr) : AdMgr).ins.getAdCountByType(this.mallItemTab.AdType);

          if (curAdTimes >= maxAdTimes) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab('Tips_timeshortage'));
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BuyFixedShopCommodityReq();
          msg.commodityId = this.mallItemTab.Id;
          msg.num = 1;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityReq, msg);
        }

        clickFreeBuyItem() {
          var self = this;

          if (self.boughtCount >= self.mallItemTab.LimitCount) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab('Tips_timeshortage'));
            return;
          }

          var msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Msg_BuyFixedShopCommodityReq();
          msg.commodityId = this.mallItemTab.Id;
          msg.num = 1;
          (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
            error: Error()
          }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
            error: Error()
          }), proto) : proto).Ptl.BuyFixedShopCommodityReq, msg);
        }

        clicRMBkBuy() {
          var self = this;

          if (self.boughtCount >= self.mallItemTab.LimitCount) {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab('Tips_timeshortage'));
            return;
          }

          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(self.mallItemTab.RechargeId, () => {
            (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
              error: Error()
            }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(self._view_name).set(self.mallItemTab.Id, self.boughtCount + 1);
            self.setAsyncView();
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_first_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_layout", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_price_btn", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_ads_btn", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_diamond_btn", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "lbl_limit_time", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "node_nothing", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_diamond_count", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "sp_chaozhi", [_dec10], {
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
//# sourceMappingURL=e3cf4e3b12d0c7860c6f40cd8c72bf6af81572f1.js.map