System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, ScrollView, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, ScrollViewTouchEnd;

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
      Node = _cc.Node;
      ScrollView = _cc.ScrollView;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0bf1dff5HVJz74e5FNrsaWk", "ScrollViewTouchEnd", undefined); // ScrollViewTouchEnd.ts


      __checkObsolete__(['_decorator', 'Component', 'Node', 'ScrollView', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ScrollViewTouchEnd", ScrollViewTouchEnd = (_dec = ccclass('ScrollViewTouchEnd'), _dec2 = property(ScrollView), _dec(_class = (_class2 = class ScrollViewTouchEnd extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "scrollView", _descriptor, this);
        }

        onLoad() {
          this.scrollView.node.on(Node.EventType.TOUCH_END, this.onTouchEnd, this);
        }

        onTouchEnd(event) {
          console.log('Touch ended'); // 在此处添加你的处理代码

          event.propagationStopped = false;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "scrollView", [_dec2], {
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
//# sourceMappingURL=8703bbb56d8bb4fefb1fd4f1aea5b770f195938d.js.map