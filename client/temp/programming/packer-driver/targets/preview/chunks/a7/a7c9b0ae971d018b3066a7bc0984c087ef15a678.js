System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Node, Sprite, tab, PayData, PayControl, ChannelMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _descriptor6, _descriptor7, _crd, ccclass, property, DiamondBuyItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayData(extras) {
    _reporterNs.report("PayData", "../pay/PayData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPayControl(extras) {
    _reporterNs.report("PayControl", "../pay/PayControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../../../channel/ChannelMgr", _context.meta, extras);
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
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      PayData = _unresolved_3.PayData;
    }, function (_unresolved_4) {
      PayControl = _unresolved_4.PayControl;
    }, function (_unresolved_5) {
      ChannelMgr = _unresolved_5.ChannelMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c4f94l+gBRFKKPBZa2chAoO", "DiamondBuyItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("DiamondBuyItem", DiamondBuyItem = (_dec = ccclass('DiamondBuyItem'), _dec2 = property(Sprite), _dec3 = property(Label), _dec4 = property(Label), _dec5 = property(Label), _dec6 = property(Node), _dec7 = property(Node), _dec8 = property(Label), _dec(_class = (_class2 = class DiamondBuyItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "sp_icon", _descriptor, this);

          _initializerDefineProperty(this, "lbl_num", _descriptor2, this);

          _initializerDefineProperty(this, "lbl_price", _descriptor3, this);

          _initializerDefineProperty(this, "lbl_extra_diamond", _descriptor4, this);

          _initializerDefineProperty(this, "node_extra_diamond_node", _descriptor5, this);

          _initializerDefineProperty(this, "node_first_recharge", _descriptor6, this);

          _initializerDefineProperty(this, "lbl_first_recharge_diamond", _descriptor7, this);

          this._tabData = null;
          this._rechargeTab = null;
        }

        initData(tabData) {
          // 根据是否买过获取首冲信息
          this.node_extra_diamond_node.active = false;
          this.node_first_recharge.active = false;

          if ((_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
            error: Error()
          }), PayData) : PayData).ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.indexOf(tabData.GoodsId) > -1) {
            this.lbl_extra_diamond.string = String(tabData.Add);
            this.node_extra_diamond_node.active = tabData.Add > 0;
          } else {
            this.lbl_first_recharge_diamond.string = String(tabData.FirstAdd);
            this.node_first_recharge.active = true;
          }

          this._tabData = tabData;
          this._rechargeTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().RechargeTableById.getValue(tabData.RechargeId);
          this.lbl_num.string = "x" + tabData.GetItemNum;
          this.lbl_price.string = (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).getSdkRechargeShowPrice(this._rechargeTab); // LangMgr.getCombineString("ui_commondesc_73", [this._rechargeTab.Price]);

          this.sp_icon.setTexture(tabData.Icon);
        } // 点击购买钻石


        clickBuyDiamond() {
          var self = this;
          (_crd && PayControl === void 0 ? (_reportPossibleCrUseOfPayControl({
            error: Error()
          }), PayControl) : PayControl).ins.requestPay(self._tabData.RechargeId, () => {
            // 刷新这个界面
            if ((_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
              error: Error()
            }), PayData) : PayData).ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.indexOf(self._tabData.GoodsId) === -1) {
              (_crd && PayData === void 0 ? (_reportPossibleCrUseOfPayData({
                error: Error()
              }), PayData) : PayData).ins.payInfoMsg.buyDiamondsInfo.boughtGoodsIds.push(self._tabData.GoodsId);
            }

            self.initData(self._tabData);
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "sp_icon", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "lbl_num", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "lbl_price", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "lbl_extra_diamond", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_extra_diamond_node", [_dec6], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor6 = _applyDecoratedDescriptor(_class2.prototype, "node_first_recharge", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor7 = _applyDecoratedDescriptor(_class2.prototype, "lbl_first_recharge_diamond", [_dec8], {
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
//# sourceMappingURL=a7c9b0ae971d018b3066a7bc0984c087ef15a678.js.map