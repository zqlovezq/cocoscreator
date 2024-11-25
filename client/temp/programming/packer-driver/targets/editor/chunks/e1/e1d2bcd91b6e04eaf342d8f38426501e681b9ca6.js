System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Prefab, instantiate, tween, Vec3, UITransform, BlackTipsItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, MAX_CHILD_COUNT, BlackTips;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfBlackTipsItem(extras) {
    _reporterNs.report("BlackTipsItem", "./BlackTipsItem", _context.meta, extras);
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
      Prefab = _cc.Prefab;
      instantiate = _cc.instantiate;
      tween = _cc.tween;
      Vec3 = _cc.Vec3;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      BlackTipsItem = _unresolved_2.BlackTipsItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5c08flp9OpGIZwbEjIoWP0k", "BlackTips", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'Prefab', 'instantiate', 'tween', 'Vec3', 'UITransform', 'Sprite', 'UIOpacity']);

      ({
        ccclass,
        property
      } = _decorator);
      MAX_CHILD_COUNT = 3;

      _export("BlackTips", BlackTips = (_dec = ccclass('BlackTips'), _dec2 = property(Prefab), _dec(_class = (_class2 = class BlackTips extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "prefabItem", _descriptor, this);
        }

        AddTips(str) {
          if (this.node.children.length == MAX_CHILD_COUNT) {
            let child = this.node.children[0];
            child.removeFromParent();
            child.destroy();
          }

          for (let child of this.node.children) {
            tween(child).by(0.2, {
              position: new Vec3(0, child.getComponent(UITransform).height + 30, 0)
            }).start();
          }

          let item = instantiate(this.prefabItem).getComponent(_crd && BlackTipsItem === void 0 ? (_reportPossibleCrUseOfBlackTipsItem({
            error: Error()
          }), BlackTipsItem) : BlackTipsItem);
          this.node.addChild(item.node);
          item.SetString(str);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "prefabItem", [_dec2], {
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
//# sourceMappingURL=e1d2bcd91b6e04eaf342d8f38426501e681b9ca6.js.map