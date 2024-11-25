System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, Animation, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, BlackTipsItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Label = _cc.Label;
      Animation = _cc.Animation;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4f70fo1glpA4IbPTsjHgBbA", "BlackTipsItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node', 'Animation']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("BlackTipsItem", BlackTipsItem = (_dec = ccclass('BlackTipsItem'), _dec2 = property(Label), _dec(_class = (_class2 = class BlackTipsItem extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "lblTips", _descriptor, this);
        }

        SetString(str) {
          this.lblTips.string = str;
          var anim = this.node.getComponent(Animation);
          anim.play("blackTipsItem");
          anim.on(Animation.EventType.FINISHED, () => {
            this.node.removeFromParent();
            this.node.destroy();
          }, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lblTips", [_dec2], {
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
//# sourceMappingURL=eebdc383795eec248c25dbdc2454f0981b0eea0b.js.map