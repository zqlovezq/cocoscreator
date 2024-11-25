System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Enum, _decorator, RedDotType, _dec, _dec2, _dec3, _dec4, _class, _class2, _descriptor, _descriptor2, _descriptor3, _crd, ccclass, property, RedEventComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfRedDotType(extras) {
    _reporterNs.report("RedDotType", "../../logic/red/RedDotType", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Enum = _cc.Enum;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      RedDotType = _unresolved_2.RedDotType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bb449V6hVxFxJwlJYUZok3O", "RedEventComp", undefined);

      __checkObsolete__(['Enum', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 红点组件
       */

      _export("default", RedEventComp = (_dec = ccclass("RedEventComp"), _dec2 = property({
        type: Enum(_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
          error: Error()
        }), RedDotType) : RedDotType),
        tooltip: "红点枚举"
      }), _dec3 = property({
        tooltip: "子类型,填完通知程序"
      }), _dec4 = property({
        tooltip: "子类型,填完通知程序"
      }), _dec(_class = (_class2 = class RedEventComp {
        constructor() {
          _initializerDefineProperty(this, "event", _descriptor, this);

          _initializerDefineProperty(this, "child", _descriptor2, this);

          _initializerDefineProperty(this, "child1", _descriptor3, this);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "event", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && RedDotType === void 0 ? (_reportPossibleCrUseOfRedDotType({
            error: Error()
          }), RedDotType) : RedDotType).empty;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "child", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "all";
        }
      }), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "child1", [_dec4], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "all";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=79227269c4b17ea53743de65b95f58b6e83da93f.js.map