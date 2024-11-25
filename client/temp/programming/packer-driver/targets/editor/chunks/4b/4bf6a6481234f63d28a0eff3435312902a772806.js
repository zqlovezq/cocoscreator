System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Node, RichText, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, MonthlyCardPrivilegeItem;

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
      RichText = _cc.RichText;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "4b6caCd6YZJT4QBqGKp97W3", "MonthlyCardPrivilegeItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * MonthlyCardPrivilegeItem
       * zhudingchao
       * Mon Jul 01 2024 16:54:59 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/activity/monthlyCard/MonthlyCardPrivilegeItem.ts
       *
       */

      _export("MonthlyCardPrivilegeItem", MonthlyCardPrivilegeItem = (_dec = ccclass('MonthlyCardPrivilegeItem'), _dec2 = property(Node), _dec3 = property(Node), _dec4 = property(RichText), _dec5 = property(RichText), _dec(_class = (_class2 = class MonthlyCardPrivilegeItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "vipNode", _descriptor2, this);

          _initializerDefineProperty(this, "richtext1", _descriptor3, this);

          _initializerDefineProperty(this, "richtext2", _descriptor4, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "vipNode", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "richtext1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "richtext2", [_dec5], {
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
//# sourceMappingURL=4bf6a6481234f63d28a0eff3435312902a772806.js.map