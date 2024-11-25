System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, EditBox, ViewPop, AssociationControl, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, AssociationChangeNoticePop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAssociationControl(extras) {
    _reporterNs.report("AssociationControl", "./AssociationControl", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      EditBox = _cc.EditBox;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      AssociationControl = _unresolved_3.AssociationControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c0d2fiy7aJG/pzAoftMd1Qz", "AssociationChangeNoticePop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'EditBox', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AssociationChangeNoticePop", AssociationChangeNoticePop = (_dec = ccclass('AssociationChangeNoticePop'), _dec2 = property(EditBox), _dec(_class = (_class2 = class AssociationChangeNoticePop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "edit_box_change_notice", _descriptor, this);
        }

        //更改公会的公告
        onShow() {}

        onDestroy() {
          super.onDestroy();
        }

        register() {}

        unRegister() {
          super.unRegister();
        }
        /* 更改公告 */


        onClickChangeNotice() {
          if (this.edit_box_change_notice.string.length === 0) {
            console.log("更改公告不能为空");
            return;
          }

          this.onClose();
          (_crd && AssociationControl === void 0 ? (_reportPossibleCrUseOfAssociationControl({
            error: Error()
          }), AssociationControl) : AssociationControl).ins.reqSetGuildNotice(this.edit_box_change_notice.string);
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "edit_box_change_notice", [_dec2], {
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
//# sourceMappingURL=271bb1cca274864df2e672507c760f63de9ed282.js.map