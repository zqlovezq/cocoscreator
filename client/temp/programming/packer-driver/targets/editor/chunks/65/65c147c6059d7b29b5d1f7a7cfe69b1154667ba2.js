System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, HorizontalTextAlignment, Label, Node, UITransform, ViewPop, LangMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, CommonBlackTipsPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      HorizontalTextAlignment = _cc.HorizontalTextAlignment;
      Label = _cc.Label;
      Node = _cc.Node;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "55030plC75OZLbKnmDu204I", "CommonBlackTipsPop", undefined);

      __checkObsolete__(['_decorator', 'Component', 'HorizontalTextAlignment', 'Label', 'Node', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * 通用提示框
       * CommonBlackTipsPop
       * zhudingchao
       * Mon May 20 2024 14:10:40 GMT+0800 (中国标准时间)
       * CommonBlackTipsPop.ts
       * CommonBlackTipsPop
       * db://assets/scripts/logic/model/common/CommonBlackTipsPop.ts
       * https://docs.cocos.com/creator/3.8/manual/zh/
       *
       */

      _export("CommonBlackTipsPop", CommonBlackTipsPop = (_dec = ccclass('CommonBlackTipsPop'), _dec2 = property(Node), _dec3 = property(Label), _dec(_class = (_class2 = class CommonBlackTipsPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "bgNode", _descriptor, this);

          _initializerDefineProperty(this, "tipsLab", _descriptor2, this);
        }

        register() {}

        onShow() {
          if (this.openData["worldPos"]) {
            // let pos=this.node.getComponent(UITransform).convertToNodeSpaceAR(this.openData["worldPos"])
            this.bgNode.worldPosition = this.openData["worldPos"];
          }

          if (this.openData["WordTableKey"]) {
            this.tipsLab.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(this.openData["WordTableKey"]);
          }

          if (this.openData["scaleX"]) {
            let sX = this.openData["scaleX"];
            this.bgNode.setScale(sX, 1);

            if (sX < 0) {
              this.tipsLab.node.setScale(sX, 1);
              this.tipsLab.node.getComponent(UITransform).anchorX = 1;
              this.tipsLab.horizontalAlign = HorizontalTextAlignment.RIGHT;
            }
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "bgNode", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "tipsLab", [_dec3], {
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
//# sourceMappingURL=65c147c6059d7b29b5d1f7a7cfe69b1154667ba2.js.map