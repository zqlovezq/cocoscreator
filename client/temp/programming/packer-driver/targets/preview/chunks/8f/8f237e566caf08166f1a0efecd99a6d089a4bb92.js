System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, instantiate, Prefab, Node, InfiniteCell, RookieShopItem, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, TrialLayoutCell;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRookieShopItem(extras) {
    _reporterNs.report("RookieShopItem", "./RookieShopItem", _context.meta, extras);
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
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      RookieShopItem = _unresolved_3.RookieShopItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c5c75rpHt5EkJCkqRSkdOwy", "TrialLayoutCell", undefined);

      __checkObsolete__(['_decorator', 'instantiate', 'Prefab', 'Node', 'Vec3', 'Layout']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TrialLayoutCell", TrialLayoutCell = (_dec = ccclass('TrialLayoutCell'), _dec2 = property(Prefab), _dec3 = property(Node), _dec(_class = (_class2 = class TrialLayoutCell extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "pfb_trial_item", _descriptor, this);

          _initializerDefineProperty(this, "node_content", _descriptor2, this);
        }

        UpdateContent(listData) {
          this.node_content.removeAllChildren();

          for (var i = 0; i < listData.data.length; i++) {
            var node = instantiate(this.pfb_trial_item);
            node.parent = this.node_content;
            var itemTs = node.getComponent(_crd && RookieShopItem === void 0 ? (_reportPossibleCrUseOfRookieShopItem({
              error: Error()
            }), RookieShopItem) : RookieShopItem);
            itemTs.initData(listData.data[i], listData.id);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "pfb_trial_item", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node_content", [_dec3], {
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
//# sourceMappingURL=8f237e566caf08166f1a0efecd99a6d089a4bb92.js.map