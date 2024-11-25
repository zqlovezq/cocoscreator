System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Enum, Node, tab, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, WelfareActivityToggleItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../Table/table_gen", _context.meta, extras);
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
      Enum = _cc.Enum;
      Node = _cc.Node;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "0d0c7ooSihFXL0ZB47/8EDl", "WelfareActivityToggleItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Enum', 'Node', 'Toggle']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * WelfareActivityToggle
       * zhudingchao
       * Tue Jun 25 2024 16:55:56 GMT+0800 (中国标准时间)
       * db://assets/gameRes/prefab/activity/WelfareActivityToggle.ts
       *
       */

      _export("WelfareActivityToggleItem", WelfareActivityToggleItem = (_dec = ccclass('WelfareActivityToggleItem'), _dec2 = property({
        type: Enum((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
          error: Error()
        }), tab) : tab).OpenFunctionName),
        tooltip: "功能枚举"
      }), _dec3 = property(Node), _dec(_class = (_class2 = class WelfareActivityToggleItem extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "opName", _descriptor, this);

          _initializerDefineProperty(this, "redPoint", _descriptor2, this);

          this.index = void 0;
        }

        updateRedPoint() {}

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "opName", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).OpenFunctionName.OpenFunctionName_None;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "redPoint", [_dec3], {
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
//# sourceMappingURL=94b5478d14996f99c86b0a260c6bd0fb62e135df.js.map