System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Button, EventHandler, ShowTips, UIMgr, ViewName, LangMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, HelpButton;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfShowTips(extras) {
    _reporterNs.report("ShowTips", "../../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "../../logic/mgr/UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewName(extras) {
    _reporterNs.report("ViewName", "../../logic/define/ViewDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../logic/mgr/LangMgr", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Button = _cc.Button;
      EventHandler = _cc.EventHandler;
    }, function (_unresolved_2) {
      ShowTips = _unresolved_2.ShowTips;
      UIMgr = _unresolved_2.UIMgr;
    }, function (_unresolved_3) {
      ViewName = _unresolved_3.ViewName;
    }, function (_unresolved_4) {
      LangMgr = _unresolved_4.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "00c8e9UBs5KJr5I/o4b7bzw", "HelpButton", undefined);

      __checkObsolete__(['_decorator', 'Button', 'Component', 'EventHandler', 'Node']);

      ({
        ccclass,
        property
      } = _decorator);
      /**
       * 
       * CustomComponent
       * zhudingchao
       * Tue Jun 25 2024 17:59:21 GMT+0800 (中国标准时间)
       * db://assets/scripts/framework/editor/customComponent.ts
       *
       */

      _export("HelpButton", HelpButton = (_dec = ccclass('HelpButton'), _dec2 = property({
        visible: true,
        tooltip: '语言key'
      }), _dec3 = property({
        tooltip: "备注",
        displayName: "备注"
      }), _dec(_class = (_class2 = class HelpButton extends Button {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "worldKey", _descriptor, this);

          _initializerDefineProperty(this, "desc", _descriptor2, this);
        }

        onLoad() {}

        start() {
          if (this.clickEvents.length == 0) {
            var event = new EventHandler();
            event.target = this.node;
            event.component = "HelpButton";
            event.handler = "onClickBtn";
            this.clickEvents.push(event);
          }
        }

        onClickBtn() {
          if (this.worldKey == "") {
            (_crd && ShowTips === void 0 ? (_reportPossibleCrUseOfShowTips({
              error: Error()
            }), ShowTips) : ShowTips)("未配置key");
            return;
          }

          (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
            error: Error()
          }), UIMgr) : UIMgr).ins.show({
            viewName: (_crd && ViewName === void 0 ? (_reportPossibleCrUseOfViewName({
              error: Error()
            }), ViewName) : ViewName).CommonHelpPop,
            data: {
              "content": (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                error: Error()
              }), LangMgr) : LangMgr).getLab(this.worldKey)
            }
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "worldKey", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=ebc0ec0bb80ea1e1bd92923521846d206d2b1151.js.map