System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Node, Vec3, Layout, InfiniteCell, MallCommodityItem, tab, DiamondBuyItem, CycleGiftItem, NewHandGiftItem, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _descriptor5, _crd, ccclass, property, MallLayoutCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMallCommodityItem(extras) {
    _reporterNs.report("MallCommodityItem", "./MallCommodityItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDiamondBuyItem(extras) {
    _reporterNs.report("DiamondBuyItem", "../common/DiamondBuyItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCycleGiftItem(extras) {
    _reporterNs.report("CycleGiftItem", "../activity/wonderfulActivity/CycleGiftItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfNewHandGiftItem(extras) {
    _reporterNs.report("NewHandGiftItem", "../activity/wonderfulActivity/NewHandGiftItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      instantiate = _cc.instantiate;
      Prefab = _cc.Prefab;
      Node = _cc.Node;
      Vec3 = _cc.Vec3;
      Layout = _cc.Layout;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      MallCommodityItem = _unresolved_3.MallCommodityItem;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      DiamondBuyItem = _unresolved_5.DiamondBuyItem;
    }, function (_unresolved_6) {
      CycleGiftItem = _unresolved_6.CycleGiftItem;
    }, function (_unresolved_7) {
      NewHandGiftItem = _unresolved_7.NewHandGiftItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "8be3bYo29NHvof5Yqcs5wWP", "MallLayoutCell", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Node', 'Vec3', 'Layout']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MallLayoutCell", MallLayoutCell = (_dec = ccclass('MallLayoutCell'), _dec2 = property(Prefab), _dec3 = property(Prefab), _dec4 = property(Prefab), _dec5 = property(Prefab), _dec6 = property(Node), _dec(_class = (_class2 = class MallLayoutCell extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "pfb_cell_item", _descriptor, this);

          _initializerDefineProperty(this, "pfb_diamond_item", _descriptor2, this);

          _initializerDefineProperty(this, "pfb_gift_item", _descriptor3, this);

          _initializerDefineProperty(this, "pfb_NewPlayerMall_item", _descriptor4, this);

          _initializerDefineProperty(this, "node_content", _descriptor5, this);
        }

        UpdateContent(listData) {
          this.node_content.removeAllChildren();

          for (let i = 0; i < listData.data.length; i++) {
            let node = null;
            let itemTs = null;
            const layout = this.node_content.getComponent(Layout);
            const pos = this.node_content.getPosition();
            layout.spacingX = 20;

            if (listData.view === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_Tab5) {
              node = instantiate(this.pfb_diamond_item);
              node.parent = this.node_content;
              itemTs = node.getComponent(_crd && DiamondBuyItem === void 0 ? (_reportPossibleCrUseOfDiamondBuyItem({
                error: Error()
              }), DiamondBuyItem) : DiamondBuyItem);
              itemTs.initData(listData.data[i]);

              if (listData.viewName) {
                layout.spacingX = 50;
                this.node_content.setPosition(new Vec3(pos.x + 20, pos.y, 0));
              }
            } else if (listData.view === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_SpecialGiftTab1) {
              node = instantiate(this.pfb_gift_item);
              node.parent = this.node_content;
              itemTs = node.getComponent(_crd && CycleGiftItem === void 0 ? (_reportPossibleCrUseOfCycleGiftItem({
                error: Error()
              }), CycleGiftItem) : CycleGiftItem);
              itemTs.initData(listData.data[i], listData.viewName);
              layout.spacingX = 0;
            } else if (listData.view === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_NewPlayerMall || listData.view === (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).MallTab.MallTab_NewPlayerMall2) {
              node = instantiate(this.pfb_NewPlayerMall_item);
              node.parent = this.node_content;
              itemTs = node.getComponent(_crd && NewHandGiftItem === void 0 ? (_reportPossibleCrUseOfNewHandGiftItem({
                error: Error()
              }), NewHandGiftItem) : NewHandGiftItem);
              itemTs.initData(listData.data[i], listData.viewName);
              layout.spacingX = 0;
            } else {
              node = instantiate(this.pfb_cell_item);
              node.parent = this.node_content;
              itemTs = node.getComponent(_crd && MallCommodityItem === void 0 ? (_reportPossibleCrUseOfMallCommodityItem({
                error: Error()
              }), MallCommodityItem) : MallCommodityItem);
              itemTs.initData(listData.data[i], listData.view, listData.viewName);
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_cell_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "pfb_diamond_item", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "pfb_gift_item", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "pfb_NewPlayerMall_item", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor5 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec6], {
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
//# sourceMappingURL=40140205f712897cf10cb115ad3a7de4b23e2a0c.js.map