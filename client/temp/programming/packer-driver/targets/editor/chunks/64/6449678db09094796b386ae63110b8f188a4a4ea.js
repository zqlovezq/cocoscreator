System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, CCBoolean, Component, Sprite, SpriteFrame, EDITOR, ResMgr, LangMgr, _dec, _dec2, _dec3, _dec4, _dec5, _dec6, _dec7, _dec8, _class, _class2, _descriptor, _descriptor2, _descriptor3, _descriptor4, _crd, ccclass, property, executeInEditMode, menu, LangSprite;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../../logic/mgr/ResMgr", _context.meta, extras);
  }

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
      CCBoolean = _cc.CCBoolean;
      Component = _cc.Component;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_2) {
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49989/OdZ9MUIv+hDWNCKAU", "LangSprite", undefined);

      // @ts-ignore
      __checkObsolete__(['_decorator', 'AssetManager', 'assetManager', 'CCBoolean', 'CCInteger', 'Component', 'Label', 'Sprite', 'SpriteFrame']);

      ({
        ccclass,
        property,
        executeInEditMode,
        menu
      } = _decorator);

      _export("default", LangSprite = (_dec = ccclass('LangSprite'), _dec2 = executeInEditMode(true), _dec3 = property({
        visible: false,
        type: SpriteFrame
      }), _dec4 = property({
        visible: true,
        type: SpriteFrame
      }), _dec5 = property({
        visible: false
      }), _dec6 = property({
        displayName: "是否预加载",
        visible: true,
        type: CCBoolean
      }), _dec7 = property({
        displayName: "资源uuid",

        visible() {
          return !this.preload;
        }

      }), _dec8 = property({
        tooltip: "备注",
        displayName: "备注"
      }), _dec(_class = _dec2(_class = (_class2 = class LangSprite extends Component {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "_spriteFrame", _descriptor, this);

          _initializerDefineProperty(this, "_preload", _descriptor2, this);

          _initializerDefineProperty(this, "sprUUID", _descriptor3, this);

          this.spr = null;

          _initializerDefineProperty(this, "desc", _descriptor4, this);
        }

        set spriteFrame(value) {
          this._spriteFrame = value;
          this.render();
        }

        get spriteFrame() {
          return this._spriteFrame;
        }

        set preload(value) {
          this._preload = value;
          this.preloadChange();
        }

        get preload() {
          return this._preload;
        }

        onLoad() {
          this.spr = this.node.getComponent(Sprite);

          if (!EDITOR) {
            this.spriteFrame = this._spriteFrame;
          } else {
            this.preload = this._preload;
          }
        }

        render() {
          if (EDITOR) {
            if (this._spriteFrame == null) {
              this.spr.spriteFrame = null;
              this.sprUUID = "";
              return;
            }

            if (this.preload) {
              this.spr.spriteFrame = this._spriteFrame;
            } else {
              this.sprUUID = this._spriteFrame.uuid;
              this._spriteFrame = null;
            }
          } else {
            if (this.preload) {
              this.spr.spriteFrame = this._spriteFrame;

              if (this._spriteFrame) {
                let assetInfo = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).getBundle().getAssetInfo(this._spriteFrame.uuid);

                if (assetInfo && (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
                  error: Error()
                }), LangMgr) : LangMgr).checkPath(assetInfo['path'])) {
                  this.spr.spriteFrame = null;
                  this.spr.setTexture(assetInfo['path']);
                }
              }
            } else {
              if (this.sprUUID == "") {
                return;
              }

              let assetInfo = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                error: Error()
              }), ResMgr) : ResMgr).getBundle().getAssetInfo(this.sprUUID);

              if (assetInfo == null) {
                return;
              }

              this.spr.setTexture(assetInfo['path']);
            }
          }
        }

        preloadChange() {
          if (this.preload) {
            this.sprUUID = "";
          } else {
            if (this._spriteFrame) {
              this.sprUUID = this._spriteFrame.uuid;
            }

            this._spriteFrame = null;
            this.spr.spriteFrame = null;
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "_spriteFrame", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "spriteFrame", [_dec4], Object.getOwnPropertyDescriptor(_class2.prototype, "spriteFrame"), _class2.prototype), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "_preload", [_dec5], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return true;
        }
      }), _applyDecoratedDescriptor(_class2.prototype, "preload", [_dec6], Object.getOwnPropertyDescriptor(_class2.prototype, "preload"), _class2.prototype), _descriptor3 = _applyDecoratedDescriptor(_class2.prototype, "sprUUID", [_dec7], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      }), _descriptor4 = _applyDecoratedDescriptor(_class2.prototype, "desc", [_dec8], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return "";
        }
      })), _class2)) || _class) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6449678db09094796b386ae63110b8f188a4a4ea.js.map