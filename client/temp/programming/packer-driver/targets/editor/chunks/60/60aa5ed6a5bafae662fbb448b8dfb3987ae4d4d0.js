System.register(["__unresolved_0", "cc", "__unresolved_1", "cc/env", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Label, Sprite, SpriteFrame, Texture2D, _decorator, assetManager, sp, SceneMgr, EDITOR, LangMgr, _dec, _class, _class2, _crd, ccclass, property, ResMgr;

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

  async function setTexture(sprite, path) {
    if (path == null || !sprite || !sprite.isValid) {
      return;
    }

    sprite["loadPath"] = path;

    if (path == "") {
      sprite.spriteFrame = null;
      return;
    }

    let SpriteFram = ResMgr.get(path, SpriteFrame);

    if (!SpriteFram) {
      SpriteFram = await LoadResAsync(path, SpriteFrame);
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
  }
  /* 从资源Map拿到资源数据 加载 */


  function loadByResMap(list, totalRes, progressCallback) {
    let promiseArray = [];
    let completedRes = 0;

    for (const key in list) {
      const res = list[key];
      let loadPromise = LoadResAsync(res.url, res.type);
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
          let res = ResMgr.getBundle().get(paths, type);

          if (res) {
            if (onComplete) {
              onComplete(null, res);
            }
          } else {
            ResMgr.getBundle().load(paths, type, onProgress, (error, res) => {
              if (onComplete) {
                onComplete(error, res);
              }

              let map = ResMgr.getSceneMap((_crd && SceneMgr === void 0 ? (_reportPossibleCrUseOfSceneMgr({
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
          let map = ResMgr.getSceneMap(sceneName); // console.log("释放场景资源", sceneName, map,ResMgr.cache)

          let ass;

          for (let key in map) {
            let _type = map[key];
            ass = ResMgr.getBundle().get(key, _type);

            if (ass && ass.refCount == 0) {
              ResMgr.getBundle().release(key, _type); // delete map[key]
            }
          }
        }

        static printCache() {
          for (const iterator of ResMgr.cache) {
            let map = iterator[1];

            for (let key in map) {
              let _type = map[key];

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

      Sprite.prototype.setTexture = async function (icon) {
        setTexture(this, icon);
      };

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=60aa5ed6a5bafae662fbb448b8dfb3987ae4d4d0.js.map