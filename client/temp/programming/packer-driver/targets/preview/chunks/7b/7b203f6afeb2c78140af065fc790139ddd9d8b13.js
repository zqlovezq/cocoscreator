System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, Component, director, DynamicAtlasManager, Game, game, macro, profiler, sys, view, DEBUG, UpdateView, Bridge, _dec, _dec2, _class, _class2, _descriptor, _crd, ccclass, property, UpdateScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUpdateView(extras) {
    _reporterNs.report("UpdateView", "./UpdateView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridge(extras) {
    _reporterNs.report("Bridge", "./Bridge", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      Component = _cc.Component;
      director = _cc.director;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      Game = _cc.Game;
      game = _cc.game;
      macro = _cc.macro;
      profiler = _cc.profiler;
      sys = _cc.sys;
      view = _cc.view;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      UpdateView = _unresolved_2.UpdateView;
    }, function (_unresolved_3) {
      Bridge = _unresolved_3.Bridge;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5979fEZrQJNU47KsrQDzkev", "UpdateScene", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'assetManager', 'Component', 'director', 'DynamicAtlasManager', 'Game', 'game', 'macro', 'Node', 'profiler', 'ResolutionPolicy', 'setDisplayStats', 'sys', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpdateScene", UpdateScene = (_dec = ccclass('UpdateScene'), _dec2 = property(_crd && UpdateView === void 0 ? (_reportPossibleCrUseOfUpdateView({
        error: Error()
      }), UpdateView) : UpdateView), _dec(_class = (_class2 = class UpdateScene extends Component {
        constructor() {
          super(...arguments);
          this._am = void 0;
          this._loadDone = false;

          _initializerDefineProperty(this, "updateView", _descriptor, this);
        }

        onLoad() {
          console.log("updatescene   onload");
          macro.CLEANUP_IMAGE_CACHE = false;
          DynamicAtlasManager.instance.enabled = true;
          profiler.showStats();
        }

        start() {
          assetManager.presets['bundle'].maxConcurrency = 1024;
          assetManager.presets['bundle'].maxRequestsPerFrame = 1024;

          if (DEBUG) {
            game.on(Game.EVENT_ENGINE_INITED, () => {
              view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            });
          }

          if (sys.isNative) {
            // game.frameRate = 60
            this.updateView.setCb(() => {
              this.loadScript();
            });
            this.updateView.check();
          } else {
            // game.frameRate = 45
            this.loadScript();
            this.schedule(this.loadScript.bind(this), 5.0);
          }
        }

        loadScript() {
          (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).init();
          assetManager.loadBundle("scripts", (err, bundle) => {
            if (err) {
              return;
            }

            this.unscheduleAllCallbacks();

            if (this._loadDone) {
              return;
            }

            this._loadDone = true;
            this.loadGames();
          });
        }

        loadGames() {
          this._loadDone = false;
          assetManager.loadBundle("gameRes", (err, bundle) => {
            if (err) {
              return;
            }

            this.unscheduleAllCallbacks();

            if (this._loadDone) {
              return;
            }

            this._loadDone = true;
            director.loadScene("LoginScene", () => {});
          });
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateView", [_dec2], {
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
//# sourceMappingURL=7b203f6afeb2c78140af065fc790139ddd9d8b13.js.map