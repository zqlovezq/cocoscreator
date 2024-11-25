System.register(["__unresolved_0", "cc", "cc/env", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, assetManager, director, DynamicAtlasManager, Font, Game, game, macro, sys, view, DEBUG, UpdateView, ChannelMgr, LoadTable, ClientView, GameInit, SceneBase, Global, ResMgr, LangMgr, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, UpdateScene;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfUpdateView(extras) {
    _reporterNs.report("UpdateView", "./UpdateView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfChannelMgr(extras) {
    _reporterNs.report("ChannelMgr", "../channel/ChannelMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadTable(extras) {
    _reporterNs.report("LoadTable", "../Table/table", _context.meta, extras);
  }

  function _reportPossibleCrUseOfClientView(extras) {
    _reporterNs.report("ClientView", "../logic/mgr/ClientView", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGameInit(extras) {
    _reporterNs.report("GameInit", "../GameInit", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSceneBase(extras) {
    _reporterNs.report("SceneBase", "../scene/SceneBase", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGlobal(extras) {
    _reporterNs.report("Global", "../Global", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "../logic/mgr/LangMgr", _context.meta, extras);
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
      director = _cc.director;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      Font = _cc.Font;
      Game = _cc.Game;
      game = _cc.game;
      macro = _cc.macro;
      sys = _cc.sys;
      view = _cc.view;
    }, function (_ccEnv) {
      DEBUG = _ccEnv.DEBUG;
    }, function (_unresolved_2) {
      UpdateView = _unresolved_2.UpdateView;
    }, function (_unresolved_3) {
      ChannelMgr = _unresolved_3.ChannelMgr;
    }, function (_unresolved_4) {
      LoadTable = _unresolved_4.LoadTable;
    }, function (_unresolved_5) {
      ClientView = _unresolved_5.ClientView;
    }, function (_unresolved_6) {
      GameInit = _unresolved_6.GameInit;
    }, function (_unresolved_7) {
      SceneBase = _unresolved_7.SceneBase;
    }, function (_unresolved_8) {
      Global = _unresolved_8.Global;
    }, function (_unresolved_9) {
      ResMgr = _unresolved_9.ResMgr;
    }, function (_unresolved_10) {
      LangMgr = _unresolved_10.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "5979fEZrQJNU47KsrQDzkev", "UpdateScene", undefined);

      __checkObsolete__(['_decorator', 'AssetManager', 'assetManager', 'Component', 'director', 'DynamicAtlasManager', 'Font', 'Game', 'game', 'macro', 'Node', 'profiler', 'Rect', 'ResolutionPolicy', 'setDisplayStats', 'Size', 'sys', 'v2', 'Vec2', 'view']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("UpdateScene", UpdateScene = (_dec = ccclass('UpdateScene'), _dec2 = property(_crd && UpdateView === void 0 ? (_reportPossibleCrUseOfUpdateView({
        error: Error()
      }), UpdateView) : UpdateView), _dec3 = property(Font), _dec(_class = (_class2 = class UpdateScene extends (_crd && SceneBase === void 0 ? (_reportPossibleCrUseOfSceneBase({
        error: Error()
      }), SceneBase) : SceneBase) {
        constructor() {
          super(...arguments);
          this._am = void 0;
          this._loadDone = false;

          _initializerDefineProperty(this, "updateView", _descriptor, this);

          _initializerDefineProperty(this, "font", _descriptor2, this);
        }

        onLoad() {
          macro.CLEANUP_IMAGE_CACHE = false;
          DynamicAtlasManager.instance.enabled = true;
          (_crd && GameInit === void 0 ? (_reportPossibleCrUseOfGameInit({
            error: Error()
          }), GameInit) : GameInit).ins.startGame();
          super.onLoad();
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).setFont(this.font);
        }

        start() {
          assetManager.presets['bundle'].maxConcurrency = 1024;
          assetManager.presets['bundle'].maxRequestsPerFrame = 1024;

          if (DEBUG) {
            game.on(Game.EVENT_ENGINE_INITED, () => {
              view.setOrientation(macro.ORIENTATION_LANDSCAPE);
            });
          }

          (_crd && LoadTable === void 0 ? (_reportPossibleCrUseOfLoadTable({
            error: Error()
          }), LoadTable) : LoadTable)((_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).ins.nowPath).then(() => {
            (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
              error: Error()
            }), LangMgr) : LangMgr).ins.InitData();
            (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
              error: Error()
            }), ChannelMgr) : ChannelMgr).init();
            (_crd && ClientView === void 0 ? (_reportPossibleCrUseOfClientView({
              error: Error()
            }), ClientView) : ClientView).ins.init();
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
            this.checkUpdate();
          });
        }

        checkUpdate() {
          if (sys.isNative) {
            //原生平台读取下本地版本
            this.updateView.loadUpdate();
          }

          (_crd && ChannelMgr === void 0 ? (_reportPossibleCrUseOfChannelMgr({
            error: Error()
          }), ChannelMgr) : ChannelMgr).initOnLineVersion(() => {
            if (sys.isNative) {
              this.updateView.setCb(() => {
                this.enterLogin();
              });
              this.updateView.checkUpdate();
            } else {
              this.enterLogin();
            }
          });
        }

        enterLogin() {
          this.updateView.verLab.node.active = true;
          this.updateView.verLab.string = (_crd && Global === void 0 ? (_reportPossibleCrUseOfGlobal({
            error: Error()
          }), Global) : Global).getVersionStr();
          director.loadScene("LoginScene", () => {}); // let rect1 = new Rect(20, 65, 90, 140)
          // let rect = new Rect(rect1.x - rect1.width / 2, rect1.y - rect1.height / 2, rect1.width, rect1.height)
          // let worldRect = new Rect(rect1)
          // worldRect.x = 100 + rect.x
          // worldRect.y = 200 + rect.y
          // console.log("位置", v2(100, 200), "\n原始包围盒", rect1, "\n局部坐标", rect, '\n世界坐标', worldRect)
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "updateView", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function initializer() {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "font", [_dec3], {
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
//# sourceMappingURL=4c9eb5b92911e2e9226554deb0e0d6b0a5843bf3.js.map