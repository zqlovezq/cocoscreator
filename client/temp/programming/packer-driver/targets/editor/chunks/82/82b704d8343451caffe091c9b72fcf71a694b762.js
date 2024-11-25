System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Node, _decorator, _dec, _dec2, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, OpenFunctionInJumpComp;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Node = _cc.Node;
      _decorator = _cc._decorator;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b34a4SCDJNKfbv2HPnubif5", "OpenFunctionInJumpComp", undefined);

      __checkObsolete__(['Component', 'Enum', 'Node', '_decorator']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 功能入口 解锁、跳转
       */

      _export("default", OpenFunctionInJumpComp = (_dec = property(Node), _dec2 = property({
        type: 0,
        displayName: '点击是否跳转界面'
      }), ccclass(_class = (_class2 = class OpenFunctionInJumpComp extends Component {
        constructor(...args) {
          super(...args);

          // @property({
          //     type: Enum(tab.OpenFunctionName),
          //     tooltip: "功能枚举"
          // })
          // opName: tab.OpenFunctionName = tab.OpenFunctionName.OpenFunctionName_ErrorUse;
          _initializerDefineProperty(this, "lockNode", _descriptor, this);

          _initializerDefineProperty(this, "isJump", _descriptor2, this);
        }

        onLoad() {
          this.checkVisible();
        }

        checkVisible() {// let isVisible = checkFunctionIsOpen(this.opName)
          // if (this.lockNode) {
          //     this.node.active = true
          //     this.lockNode.active = !isVisible
          // } else {
          //     this.node.active = isVisible
          // }
        }

        onClick() {// if (!Role.Instance.IsGuideFinished() && this.opName === tab.OpenFunctionName.OpenFunctionName_EndingMaster) {
          //     return;
          // }
          // if (this.isJump && checkFunctionIsOpen(this.opName)) {
          //     Net.pushLoaclMessage(LOCAL_MESSAGE.LocalMsg_NotifyClosePopupLayer) /* 关闭Popup */
          //     UiMgr.ins.jumpLayer(this.opName)
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "lockNode", [_dec], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "isJump", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return false;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=82b704d8343451caffe091c9b72fcf71a694b762.js.map