System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ProgressBar, InfiniteCell, Func, RoleData, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, TalentViewSpecialItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleData(extras) {
    _reporterNs.report("RoleData", "../role/RoleData", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      ProgressBar = _cc.ProgressBar;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }, function (_unresolved_4) {
      RoleData = _unresolved_4.RoleData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b5896dx6ThNlYcQzV3HjJHK", "TalentViewSpecialItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'ProgressBar']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("TalentViewSpecialItem", TalentViewSpecialItem = (_dec = ccclass('TalentViewSpecialItem'), _dec2 = property(ProgressBar), _dec(_class = (_class2 = class TalentViewSpecialItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bar_progress", _descriptor, this);
        }

        UpdateContent(data) {
          console.log(data);
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).cocosNodeZIndex(this.node, -1);
          this.bar_progress.progress = (_crd && RoleData === void 0 ? (_reportPossibleCrUseOfRoleData({
            error: Error()
          }), RoleData) : RoleData).ins.gene.bigGeneLevel ? 1 : 0;
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bar_progress", [_dec2], {
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
//# sourceMappingURL=8d90640aed468b8f77e8f5564b1b9d48fc4a689d.js.map