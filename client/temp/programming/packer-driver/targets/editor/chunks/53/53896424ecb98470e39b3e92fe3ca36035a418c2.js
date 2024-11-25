System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, tween, v3, CCFloat, Component, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, MoveByAction;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      v3 = _cc.v3;
      CCFloat = _cc.CCFloat;
      Component = _cc.Component;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e06d766CkdLEahWArPWQ12u", "MoveByAction", undefined);

      __checkObsolete__(['_decorator', 'Tween', 'Vec3', 'Node', 'tween', 'v3', 'CCFloat', 'Component']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("MoveByAction", MoveByAction = (_dec = ccclass('MoveByAction'), _dec2 = property(CCFloat), _dec3 = property(Vec3), _dec(_class = (_class2 = class MoveByAction extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "time", _descriptor, this);

          _initializerDefineProperty(this, "byPostion", _descriptor2, this);

          this.startPos = void 0;
        }

        onLoad() {
          this.startPos = v3(this.node.position);
        }

        start() {
          console.log(this.time);
          tween(this.node).repeatForever(tween().by(this.time, {
            position: this.byPostion
          }).call(() => {
            this.node.position = this.startPos;
          })).start();
        }

        moveBy() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "time", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return 0;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "byPostion", [_dec3], {
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
//# sourceMappingURL=53896424ecb98470e39b3e92fe3ca36035a418c2.js.map