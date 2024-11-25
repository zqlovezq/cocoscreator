System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, SpriteFrame, Texture2D, _decorator, assetManager, sp, SceneMgr, EDITOR, LangMgr, _dec, _class, _class2, _crd, ccclass, property, ResMgr;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  /*  */
  function LoadResAsync(url, type, progressCallback) {
    return new Promise(resolve => {
      ResMgr.load(url, type, progressCallback, (err, resource) => {
        if (err) {
          console.error(url, err);
          resolve(null);
        } else {
          resolve(resource);
        }
      });
    });
  }

  function setSpData(_spine, data) {
    _spine.skeletonData = data;
  }

  /* 从资源Map拿到资源数据 加载 */
  function setTexture(_x2, _x3) {
    return _setTexture.apply(this, arguments);
  }

  function _setTexture() {
    _setTexture = _asyncToGenerator(function* (sprite, path) {
      if (path == null || !sprite || !sprite.isValid) {
        return;
      }

      sprite["loadPath"] = path;

      if (path == "") {
        sprite.spriteFrame = null;
        return;
      }

      var SpriteFram = ResMgr.get(path, SpriteFrame);

      if (!SpriteFram) {
        SpriteFram = yield LoadResAsync(path, SpriteFrame);
      }

      if (!sprite.isValid) {
        return;
      }

      if (sprite["loadPath"] != path) {
        //解决多次加载引起的最终会显示加载最慢的资源问题
        return;
      }

      if (SpriteFram != null) {
        sprite.spriteFrame = SpriteFram;
      } else {
        console.error("setTexture error :" + path);
      }
    });
    return _setTexture.apply(this, arguments);
  }

  function loadByResMap(list, totalRes, progressCallback) {
    var promiseArray = [];
    var completedRes = 0;

    for (var key in list) {
      var res = list[key];
      var loadPromise = LoadResAsync(res.url, res.type);
      promiseArray.push(loadPromise);
      loadPromise.then(() => {
        ++completedRes;
        progressCallback && progressCallback(completedRes / totalRes);
      });
    }

    return Promise.all(promiseArray);
  }

  function _reportPossibleCrUseOfSceneMgr(extras) {
    _reporterNs.report("SceneMgr", "./SceneMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLangMgr(extras) {
    _reporterNs.report("LangMgr", "./LangMgr", _context.meta, extras);
  }

  _export({
    LoadResAsync: LoadResAsync,
    loadByResMap: loadByResMap
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Label = _cc.Label;
      Sprite = _cc.Sprite;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
      _decorator = _cc._decorator;
      assetManager = _cc.assetManager;
      sp = _cc.sp;
    }, function (_unresolved_2) {
      SceneMgr = _unresolved_2.SceneMgr;
    }, function (_ccEnv) {
      EDITOR = _ccEnv.EDITOR;
    }, function (_unresolved_3) {
      LangMgr = _unresolved_3.LangMgr;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "94a08qqCCJOf4CEV85gx8/g", "ResMgr", undefined);

      __checkObsolete__(['Asset', 'AssetManager', 'Font', 'Label', 'Node', 'NodeEventType', 'Prefab', 'Sprite', 'SpriteFrame', 'Texture2D', '_decorator', 'assetManager', 'director', 'macro', 'path', 'resources', 'settings', 'sp']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ResMgr", ResMgr = (_dec = ccclass('ResMgr'), _dec(_class = (_class2 = class ResMgr {
        static log() {
          console.log("ResMgr.log", ResMgr.getBundle());
        }

        static setFont(font) {
          ResMgr.systemFont = font;
        } //全局只有gameRes一个有效bundle


        static getBundle() {
          if (ResMgr.gameResBundle == null) {
            ResMgr.gameResBundle = assetManager.getBundle("gameRes");
          }

          return ResMgr.gameResBundle;
        }

        static transforPath(paths, type) {
          paths = (_crd && LangMgr === void 0 ? (_reportPossibleCrUseOfLangMgr({
            error: Error()
          }), LangMgr) : LangMgr).transformPath(paths);

          if (type == SpriteFrame) {
            if (paths.indexOf("/spriteFrame") == -1) {
              paths = paths + "/spriteFrame";
            }
          } else if (type == Texture2D) {
            paths = paths + "/texture";
          }

          return paths;
        }

        static get(paths, type) {
          paths = ResMgr.transforPath(paths, type);
          return ResMgr.getBundle().get(paths, type);
        } //除了LoadResAsync函数，其他任何地方都不应该使用ResMgr


        static load(paths, type, onProgress, onComplete) {
          paths = ResMgr.transforPath(paths, type);
          var res = ResMgr.getBundle().get(paths, type);

          if (res) {
            if (onComplete) {
              onComplete(null, res);
            }
          } else {
            ResMgr.getBundle().load(paths, type, onProgress, (error, res) => {
              if (onComplete) {
                onComplete(error, res);
              }

              var map = ResMgr.getSceneMap((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
                error: Error()
              }), SceneMgr) : SceneMgr).getNowSceneName());
              map[paths] = type;
            });
          }
        }

        static addRef(paths, type) {
          ResMgr.load(paths, type, null, (err, resource) => {
            if (resource) {
              resource.addRef();
            }
          });
        }

        static preload(paths, type, onComplete) {
          ResMgr.getBundle().preload(paths, type, (error, items) => {
            onComplete && onComplete();
          });
        }

        static release(path, type) {
          if (ResMgr.isRelease) {
            path = ResMgr.transforPath(path, type);
            ResMgr.getBundle().release(path, type);
          } // setTimeout(() => {
          //     ResMgr.getBundle().preload(path)
          // }, 100);

        }

        static getSceneMap(sceneName) {
          if (!ResMgr.cache.has(sceneName)) {
            ResMgr.cache.set(sceneName, {});
          }

          return ResMgr.cache.get(sceneName);
        }

        static releaseScene(sceneName) {
          var map = ResMgr.getSceneMap(sceneName); // console.log("释放场景资源", sceneName, map,ResMgr.cache)

          var ass;

          for (var key in map) {
            var _type = map[key];
            ass = ResMgr.getBundle().get(key, _type);

            if (ass && ass.refCount == 0) {
              ResMgr.getBundle().release(key, _type); // delete map[key]
            }
          }
        }

        static printCache() {
          for (var iterator of ResMgr.cache) {
            var map = iterator[1];

            for (var key in map) {
              var _type = map[key];

              if (ResMgr.getBundle().get(key, _type)) {// console.log(key, ResMgr.getBundle().get(key, _type).refCount)
              }
            }
          }
        }

      }, _class2.isRelease = false, _class2.gameResBundle = void 0, _class2.cache = new Map(), _class2.systemFont = null, _class2)) || _class));

      sp.Skeleton.prototype.setSpData = function (data) {
        setSpData(this, data);
      };

      Label.prototype["start"] = function () {
        if (EDITOR) {
          return;
        }

        if (this.useSystemFont && ResMgr.systemFont) {
          this.font = ResMgr.systemFont;
        } // console.log("start", this.font, "更换字体", this.useSystemFont)

      };

      Sprite.prototype.setTexture = /*#__PURE__*/_asyncToGenerator(function* (icon) {
        setTexture(this, icon);
      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60aa5ed6a5bafae662fbb448b8dfb3987ae4d4d0.js.map