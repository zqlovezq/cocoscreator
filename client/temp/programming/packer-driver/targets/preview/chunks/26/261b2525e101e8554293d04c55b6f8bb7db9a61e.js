System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Label, RichText, EDITOR, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, executeInEditMode, menu, LangLabel;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../../../logic/mgr/LangMgr", _context.meta, extras);
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
      Label = _cc.Label;
      RichText = _cc.RichText;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      LangMgr = _unresolved_2.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6506abppAZAI6cX36wAgQds", "LangLabel", undefined);

      // @ts-ignore
      __checkObsolete__(['_decorator', 'CCInteger', 'Component', 'Label', 'RichText']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);

      _export("default", LangLabel = (_dec = ccclass('LangLabel'), _dec2 = executeInEditMode(true), _dec3 = property({
        visible: false
      }), _dec4 = property({
        visible: true,
        tooltip: '语言key'
      }), _dec5 = property({
        tooltip: "备注",
        displayName: "备注"
      }), _dec(_class = _dec2(_class = (_class2 = class LangLabel extends Component {
        constructor() {
          super(...arguments);

          _initializerDefineProperty(this, "_key", _descriptor, this);

          _initializerDefineProperty(this, "desc", _descriptor2, this);

          this.label = null;
        }

        set key(value) {
          this._key = value;
          this.render();
        }

        get key() {
          return this._key;
        }

        onLoad() {
          this.label = this.node.getComponent(Label) || this.node.getComponent(RichText);

          if (!EDITOR) {
            this.key = this._key;
          }
        }

        render() {
          if (typeof this.label === 'undefined') {
            return;
          }

          if (EDITOR) {
            this.label.string = this.key;
          } else {
            this.label.string = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).getLab(this.key);
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_key", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return '';
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "key", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "key"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=261b2525e101e8554293d04c55b6f8bb7db9a61e.js.map