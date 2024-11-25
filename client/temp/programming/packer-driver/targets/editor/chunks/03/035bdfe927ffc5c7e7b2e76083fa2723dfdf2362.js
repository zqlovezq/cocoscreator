System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, RichText, UITransform, InfiniteCell, Func, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, ChatServerItem;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfInfiniteCell(extras) {
    _reporterNs.report("InfiniteCell", "../../../Common/InfiniteList/InfiniteCell", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChatMessageInfo(extras) {
    _reporterNs.report("ChatMessageInfo", "./ChatMessageInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../utils/Func", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      RichText = _cc.RichText;
      UITransform = _cc.UITransform;
    }, function (_unresolved_2) {
      InfiniteCell = _unresolved_2.default;
    }, function (_unresolved_3) {
      Func = _unresolved_3.Func;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2345a4tnLVCq7Hk3OGmKf+7", "ChatServerItem", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Node', 'RichText', 'UITransform']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * ChatServerItem
       * zhudingchao
       * Mon Jun 17 2024 16:42:49 GMT+0800 (中国标准时间)
       * db://assets/scripts/logic/model/chat/ChatServerItem.ts
       *
       */

      _export("ChatServerItem", ChatServerItem = (_dec = ccclass('ChatServerItem'), _dec2 = property(UITransform), _dec3 = property(RichText), _dec(_class = (_class2 = class ChatServerItem extends (_crd && InfiniteCell === void 0 ? (_reportPossibleCrUseOfInfiniteCell({
        error: Error()
      }), InfiniteCell) : InfiniteCell) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "chatLayout", _descriptor, this);

          _initializerDefineProperty(this, "richText", _descriptor2, this);
        }

        UpdateContent(data) {
          if (!data["ZH_width"]) {
            data["ZH_width"] = (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).getStrZhWidth(data.normal) * 24 + 30;
          }

          if (data["ZH_width"] < 480) {
            this.chatLayout.width = data["ZH_width"];
          } else {
            this.chatLayout.width = 480;
          }

          this.richText.string = data.systemContent; // if(len*22<370){
          //     this.chatLayout.width=len*22+25;
          // }else{
          //     this.chatLayout.width=390; 
          // }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "chatLayout", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "richText", [_dec3], {
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
//# sourceMappingURL=035bdfe927ffc5c7e7b2e76083fa2723dfdf2362.js.map