System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Label, ViewPop, GameUtil, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TopWarHurtPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameUtil(extras) {
    _reporterNs.report("GameUtil", "../../../utils/GameUtil", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Label = _cc.Label;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      GameUtil = _unresolved_3.GameUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "cda60Xyyq9C8rLIr4WQnshJ", "TopWarHurtPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Label', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * TopWarHurtPop
       * zhudingchao
       * Wed Jul 10 2024 10:14:56 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/jianghu/topWar/TopWarHurtPop.ts
       *
       */

      _export("TopWarHurtPop", TopWarHurtPop = (_dec = ccclass('TopWarHurtPop'), _dec2 = property(Label), _dec(_class = (_class2 = class TopWarHurtPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "damageLab", _descriptor, this);
        }

        register() {}

        onShow() {
          if (this.openData && this.openData["maxDamage"]) {
            this.damageLab.string = (_crd && GameUtil === void 0 ? (_reportPossibleCrUseOfGameUtil({
              error: Error()
            }), GameUtil) : GameUtil).convertNumber(this.openData["maxDamage"]);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "damageLab", [_dec2], {
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
//# sourceMappingURL=cf64c5d4c688d785753321e64c32733af097b675.js.map