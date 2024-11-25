System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "client_protocol", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, Vec3, dailyBuyShop, tab, ItemInfo, ItemPoolMgr, PayControl, proto, Net, MallDataMgr, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _dec9, _dec10, _dec11, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _descriptor8, _descriptor9, _descriptor10, _crd, ccclass, property, RookieShopItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfdailyBuyShop(extras) {
    _reporterNs.report("dailyBuyShop", "../../../utils/GameUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemInfo(extras) {
    _reporterNs.report("ItemInfo", "../../item/ItemInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../../item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNet(extras) {
    _reporterNs.report("Net", "../../../net/Net", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallDataMgr(extras) {
    _reporterNs.report("MallDataMgr", "../../shop/MallDataMgr", _context.meta, extras);
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
      Label = _cc.Label;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      dailyBuyShop = _unresolved_2.dailyBuyShop;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      ItemInfo = _unresolved_4.ItemInfo;
    }, function (_unresolved_5) {
      ItemPoolMgr = _unresolved_5.ItemPoolMgr;
    }, function (_unresolved_6) {
      PayControl = _unresolved_6.PayControl;
    }, function (_client_protocol) {
      proto = _client_protocol.proto;
    }, function (_unresolved_7) {
      Net = _unresolved_7.Net;
    }, function (_unresolved_8) {
      MallDataMgr = _unresolved_8.MallDataMgr;
    }, function (_unresolved_9) {
      ChannelMgr = _unresolved_9.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "1f7d3489rpMLpbAqsVHIbOJ", "RookieShopItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("RookieShopItem", RookieShopItem = (_dec = ccclass('RookieShopItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(Node), _dec5 = property(Node), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec9 = property(Label), _dec10 = property(Label), _dec11 = property(Sprite), _dec(_class = (_class2 = class RookieShopItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node_first_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);

          _initializerDefineProperty(this, "node_diamonds", _descriptor3, this);

          _initializerDefineProperty(this, "node_free", _descriptor4, this);

          _initializerDefineProperty(this, "node_RMB", _descriptor5, this);

          _initializerDefineProperty(this, "node_got", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor7, this);

          _initializerDefineProperty(this, "lbl_limit", _descriptor8, this);

          _initializerDefineProperty(this, "lbl_diamond", _descriptor9, this);

          _initializerDefineProperty(this, "sp_chaozhi", _descriptor10, this);

          this._CostItemId = 0;
          this._CostItemNum = 0;
          // private _GetItemId:number = 0;
          // private _GetItemNum:number = 0;
          this._trialId = 0;
          this._mallData = null;
          this._rechargeId = 0;
          this.boughtCount = 0;
        }

        initData(data, id) {
          this._trialId = id;
          this._mallData = data;
          this.node_content.destroyAllChildren();
          this.node_diamonds.active = false;
          this.node_free.active = false;
          this.node_RMB.active = false;
          this.boughtCount = (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
            error: Error()
          }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this._mallData.MallId).get(this._mallData.Id);
          this.lbl_limit.string = String(this._mallData.LimitCount - this.boughtCount);
          this.node_got.active = this.boughtCount >= this._mallData.LimitCount;
          const awards = this._mallData.GetItemIds;
          const awardNums = this._mallData.GetItemNum;
          const firstAward = awards[0];
          const firstAwardNum = awardNums[0];
          const otherAward = [];
          const otherAwardNums = [];

          for (let i = 1; i < awards.length; i++) {
            otherAward.push(awards[i]);
            otherAwardNums.push(awardNums[i]);
          }

          const firstInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
            error: Error()
          }), ItemInfo) : ItemInfo)();
          firstInfo.itemId = firstAward;
          firstInfo.num = firstAwardNum;
          (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
            error: Error()
          }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(firstInfo, this.node_first_item);

          if (otherAward.length === 0) {
            this.node_first_item.setPosition(new Vec3(0, -100, 0));
          }

          this.node_content.destroyAllChildren();

          for (let i = 0; i < otherAward.length; i++) {
            const awardInfo = new (_crd && ItemInfo === void 0 ? (_reportPossibleCrUseOfItemInfo({
              error: Error()
            }), ItemInfo) : ItemInfo)();
            awardInfo.itemId = otherAward[i];
            awardInfo.num = otherAwardNums[i];
            (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
              error: Error()
            }), ItemPoolMgr) : ItemPoolMgr).ins.createRewadItem(awardInfo, this.node_content);
          }

          if (this._mallData.CostType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_CostItem) {
            // 钻石购买
            if (this._mallData.CostItemIds[0]) {
              this.node_diamonds.active = true;
              this._CostItemId = this._mallData.CostItemIds[0];
              this._CostItemNum = this._mallData.CostItemNum[0];
              this.lbl_diamond.string = String(this._CostItemNum);
            } else {
              this.node_free.active = true;
              this._CostItemId = 0;
              this._CostItemNum = 0;
            }
          } else if (this._mallData.CostType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).MallCostType.MallCostType_Recharge) {
            // 充值购买
            this.node_RMB.active = true;
            this._rechargeId = this._mallData.RechargeId;
            const rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().RechargeTableById.getValue(this._rechargeId);
            this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(rechargeTab);
          }

          if (this._mallData.IconUrl) {
            this.sp_chaozhi.node.active = true;
            this.sp_chaozhi.setTexture(this._mallData.IconUrl);
          } else {
            this.sp_chaozhi.node.active = false;
          }
        } // 购买商品


        clickBuy() {
          if (this.boughtCount >= this._mallData.LimitCount) {
            console.log("没有次数了");
            return;
          }

          const sendMsg = () => {
            let msg = new (_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Msg_BuyFixedShopCommodityReq();
            msg.commodityId = this._mallData.Id;
            msg.num = 1;
            (_crd && Net === void 0 ? (_reportPossibleCrUseOfNet({
              error: Error()
            }), Net) : Net).Send((_crd && proto === void 0 ? (_reportPossibleCrUseOfproto({
              error: Error()
            }), proto) : proto).Ptl.BuyFixedShopCommodityReq, msg);
          };

          if (this._CostItemId) {
            // 花钻石
            (_crd && dailyBuyShop === void 0 ? (_reportPossibleCrUseOfdailyBuyShop({
              error: Error()
            }), dailyBuyShop) : dailyBuyShop)(this._CostItemId, this._CostItemNum, -1, "Tips_common_buy", () => {
              sendMsg();
            });
          } else {
            //免费 判断是否有广告次数
            sendMsg();
          }
        }

        clickRMB() {
          var self = this;

          if (this.boughtCount >= this._mallData.LimitCount) {
            console.log("没有次数了");
            return;
          }

          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(this._rechargeId, () => {
            // 刷新界面 数据
            (_crd && MallDataMgr === void 0 ? (_reportPossibleCrUseOfMallDataMgr({
              error: Error()
            }), MallDataMgr) : MallDataMgr).ins.getFixedShopData(this._mallData.MallId).set(this._mallData.Id, self.boughtCount + 1);
            this.initData(self._mallData, self._trialId);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node_first_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "node_diamonds", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "node_free", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_RMB", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_got", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor8 = _applyDecoratedDescriptor(_class2.prototype, "lbl_limit", [_dec9], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor9 = _applyDecoratedDescriptor(_class2.prototype, "lbl_diamond", [_dec10], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor10 = _applyDecoratedDescriptor(_class2.prototype, "sp_chaozhi", [_dec11], {
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
//# sourceMappingURL=05009ccd22b2eb41c11fb158483c2439f698e913.js.map