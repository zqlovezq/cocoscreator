System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCInteger, Component, instantiate, Node, Prefab, ResourceItemNode, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, ResourceItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResourceItemNode(extras) {
    _reporterNs.report("ResourceItemNode", "./ResourceItemNode", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      CCInteger = _cc.CCInteger;
      Component = _cc.Component;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      ResourceItemNode = _unresolved_2.ResourceItemNode;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "9e429ATMPFKWKBCCMWTBI+Z", "ResourceItem", undefined);

      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'instantiate', 'Label', 'Node', 'Prefab', 'SpringJoint2D', 'Sprite']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResourceItem", ResourceItem = (_dec = ccclass('ResourceItem'), _dec2 = property({
        type: [CCInteger],
        displayName: '要显示的资源ItemId数组'
      }), _dec3 = property(Prefab), _dec4 = property(Node), _dec(_class = (_class2 = class ResourceItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "itemIds", _descriptor, this);

          _initializerDefineProperty(this, "itemNodePrb", _descriptor2, this);

          _initializerDefineProperty(this, "layoutNode", _descriptor3, this);

          this.itemNodes = void 0;
        }

        start() {
          this.initView();
        }

        initView() {
          this.itemNodes = [];

          for (let key in this.itemIds) {
            let node = instantiate(this.itemNodePrb);
            node.parent = this.layoutNode;
            let com = node.getComponent(_crd && ResourceItemNode === void 0 ? (_reportPossibleCrUseOfResourceItemNode({
              error: Error()
            }), ResourceItemNode) : ResourceItemNode);
            com.initItemId(this.itemIds[key]);
            this.itemNodes.push(com);
          }
        }

        setItemIds(ids) {
          this.layoutNode.destroyAllChildren();

          for (let key in ids) {
            let node = instantiate(this.itemNodePrb);
            node.parent = this.layoutNode;
            let com = node.getComponent(_crd && ResourceItemNode === void 0 ? (_reportPossibleCrUseOfResourceItemNode({
              error: Error()
            }), ResourceItemNode) : ResourceItemNode);
            com.initItemId(ids[key]);
          }
        }

        onDestroy() {
          this.itemNodes = null;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "itemIds", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return [];
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "itemNodePrb", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "layoutNode", [_dec4], {
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
//# sourceMappingURL=405d22b689c6df71601aa0a91fa29629b8fbd106.js.map