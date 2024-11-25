System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, ViewPop, WeaponInfoItem, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, RareBookInfoItemPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfWeaponInfoItem(extras) {
    _reporterNs.report("WeaponInfoItem", "../common/WeaponInfoItem", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      WeaponInfoItem = _unresolved_3.WeaponInfoItem;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "915a3sKjslFnrEY+ezbS+gZ", "RareBookInfoItemPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * RareBookInfoItemPop
       * zhudingchao
       * Wed May 29 2024 10:58:13 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/rareBook/RareBookInfoItemPop.ts
       *
       */

      _export("RareBookInfoItemPop", RareBookInfoItemPop = (_dec = ccclass('RareBookInfoItemPop'), _dec2 = property(_crd && WeaponInfoItem === void 0 ? (_reportPossibleCrUseOfWeaponInfoItem({
        error: Error()
      }), WeaponInfoItem) : WeaponInfoItem), _dec(_class = (_class2 = class RareBookInfoItemPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "weaponItem", _descriptor, this);
        }

        register() {}

        onShow() {
          let bookInfo = this.openData["bookInfo"];

          if (bookInfo) {
            this.weaponItem.initData(bookInfo);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "weaponItem", [_dec2], {
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
//# sourceMappingURL=ca3955db04b80511914b93c439024ca2eb5e4b7d.js.map