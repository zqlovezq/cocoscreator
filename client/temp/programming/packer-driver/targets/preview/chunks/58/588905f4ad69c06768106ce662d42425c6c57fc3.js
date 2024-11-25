System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Director, DynamicAtlasManager, director, sys, AbsMgr, LocalEvent, EventMgr, ResMgr, UIMgr, Loading, Avatar, ItemPoolMgr, FightMsgControl, SceneMgr, _crd, ScenesName;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAbsMgr(extras) {
    _reporterNs.report("AbsMgr", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../define/LocalEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "./EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "./ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfUIMgr(extras) {
    _reporterNs.report("UIMgr", "./UIMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoading(extras) {
    _reporterNs.report("Loading", "../model/Loading", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAvatar(extras) {
    _reporterNs.report("Avatar", "../fight/animation/Avatar", _context.meta, extras);
  }

  function _reportPossibleCrUseOfItemPoolMgr(extras) {
    _reporterNs.report("ItemPoolMgr", "../model/item/ItemPoolMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMsgControl(extras) {
    _reporterNs.report("FightMsgControl", "../fight/FightMsgControl", _context.meta, extras);
  }

  _export("SceneMgr", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Director = _cc.Director;
      DynamicAtlasManager = _cc.DynamicAtlasManager;
      director = _cc.director;
      sys = _cc.sys;
    }, function (_unresolved_2) {
      AbsMgr = _unresolved_2.AbsMgr;
    }, function (_unresolved_3) {
      LocalEvent = _unresolved_3.LocalEvent;
    }, function (_unresolved_4) {
      EventMgr = _unresolved_4.EventMgr;
    }, function (_unresolved_5) {
      ResMgr = _unresolved_5.ResMgr;
    }, function (_unresolved_6) {
      UIMgr = _unresolved_6.UIMgr;
    }, function (_unresolved_7) {
      Loading = _unresolved_7.Loading;
    }, function (_unresolved_8) {
      Avatar = _unresolved_8.Avatar;
    }, function (_unresolved_9) {
      ItemPoolMgr = _unresolved_9.ItemPoolMgr;
    }, function (_unresolved_10) {
      FightMsgControl = _unresolved_10.FightMsgControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "75fd3QQsWRHz66niLe+B/L2", "SceneMgr", undefined);

      __checkObsolete__(['Asset', 'Director', 'DynamicAtlasManager', 'JsonAsset', 'Material', 'Node', 'Prefab', 'Scene', 'SpriteAtlas', 'SpriteFrame', 'director', 'resources', 'settings', 'sp', 'sys', 'url']);

      _export("ScenesName", ScenesName = /*#__PURE__*/function (ScenesName) {
        ScenesName["login"] = "LoginScene";
        ScenesName["main"] = "MainScene";
        ScenesName["loading"] = "LoadingScene";
        ScenesName["fight"] = "FightScene";
        return ScenesName;
      }({}));
      /**
       * 场景管理
       */


      _export("SceneMgr", SceneMgr = class SceneMgr extends (_crd && AbsMgr === void 0 ? (_reportPossibleCrUseOfAbsMgr({
        error: Error()
      }), AbsMgr) : AbsMgr) {
        constructor() {
          super(...arguments);
          this.isLoadingScene = false;
          this.nowName = "LoginScene";
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new SceneMgr();
          }

          return this._instance;
        }

        static getNowSceneName() {
          return director.getScene() && director.getScene().name || SceneMgr.ins.nowName;
        }

        static isLoginScene() {
          return SceneMgr.isSceneByName(ScenesName.login);
        }

        static isFightScene() {
          return SceneMgr.isSceneByName(ScenesName.fight);
        }

        static isSceneByName(name) {
          return SceneMgr.getNowSceneName() == name;
        }

        init() {
          director.on(Director.EVENT_BEFORE_SCENE_LAUNCH, () => {
            console.log("运行新场景之前", SceneMgr.getNowSceneName());
            (_crd && UIMgr === void 0 ? (_reportPossibleCrUseOfUIMgr({
              error: Error()
            }), UIMgr) : UIMgr).ins.clearViewAndPop();
            DynamicAtlasManager.instance.reset();
          }, this);
          director.on(Director.EVENT_AFTER_SCENE_LAUNCH, () => {
            console.log("运行新场景之后", SceneMgr.getNowSceneName());
          }, this);
        }

        loadScene(sceneName, onLaunched) {
          if (this.isLoadingScene) {
            return;
          }

          this.isLoadingScene = true;
          director.loadScene(sceneName, err => {
            this.isLoadingScene = false;
            this.nowName = sceneName;
            var scene = null;

            if (!err) {
              scene = director.getScene();
              scene.name = sceneName;
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).SceneLoaded, sceneName);
            }

            console.log("加载场景完成", sceneName);

            if (onLaunched) {
              onLaunched(err, scene);
            }

            (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).log();
          });
        }

        enterFight() {
          var _this = this;

          return _asyncToGenerator(function* () {
            (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
              error: Error()
            }), Loading) : Loading).create();
            console.log("开始加载");

            _this.loadScene(ScenesName.loading, () => {
              console.log("enterFight");
              setTimeout(() => {
                (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.clear();
                (_crd && Avatar === void 0 ? (_reportPossibleCrUseOfAvatar({
                  error: Error()
                }), Avatar) : Avatar).destory();
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).releaseScene(ScenesName.login);
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).releaseScene(ScenesName.main);
                setTimeout(() => {
                  sys.garbageCollect();

                  _this.loadScene(ScenesName.fight, () => {
                    (_crd && FightMsgControl === void 0 ? (_reportPossibleCrUseOfFightMsgControl({
                      error: Error()
                    }), FightMsgControl) : FightMsgControl).ins.loadRes(() => {
                      //加载完成
                      console.log("战斗场景加载完成------");
                      (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                        error: Error()
                      }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                        error: Error()
                      }), LocalEvent) : LocalEvent).FightResLoadComplete);
                      (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
                        error: Error()
                      }), Loading) : Loading).hide();
                    });
                  });
                }, 20);
              }, 20);
            });
          })();
        }

        leaveFight(isTest) {
          return _asyncToGenerator(function* () {
            (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
              error: Error()
            }), Loading) : Loading).create();
            var toSceneName = isTest ? ScenesName.login : ScenesName.main;

            if (SceneMgr.isSceneByName(ScenesName.loading)) {
              SceneMgr.ins.loadScene(toSceneName, () => {
                (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
                  error: Error()
                }), Loading) : Loading).hide();
              });
              return;
            }

            SceneMgr.ins.loadScene(ScenesName.loading, () => {
              setTimeout(() => {
                (_crd && ItemPoolMgr === void 0 ? (_reportPossibleCrUseOfItemPoolMgr({
                  error: Error()
                }), ItemPoolMgr) : ItemPoolMgr).ins.clear();
                (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
                  error: Error()
                }), ResMgr) : ResMgr).releaseScene(ScenesName.fight);
                setTimeout(() => {
                  sys.garbageCollect();
                  director.preloadScene(toSceneName, () => {
                    SceneMgr.ins.loadScene(toSceneName, () => {
                      (_crd && Loading === void 0 ? (_reportPossibleCrUseOfLoading({
                        error: Error()
                      }), Loading) : Loading).hide();
                    });
                  });
                }, 30);
              }, 30);
            });
          })();
        }

      });

      SceneMgr._instance = void 0;

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=588905f4ad69c06768106ce662d42425c6c57fc3.js.map