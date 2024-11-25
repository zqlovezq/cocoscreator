System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Component, Prefab, _decorator, Animation, director, instantiate, isValid, log, Layers, LoadResAsync, ResMgr, tab, _class, _class2, _crd, NODE_NAME, PREFAB_URL, ccclass, property, WaitingTag, Waiting;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Component = _cc.Component;
      Prefab = _cc.Prefab;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      director = _cc.director;
      instantiate = _cc.instantiate;
      isValid = _cc.isValid;
      log = _cc.log;
      Layers = _cc.Layers;
    }, function (_unresolved_2) {
      LoadResAsync = _unresolved_2.LoadResAsync;
      ResMgr = _unresolved_2.ResMgr;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "d1e90vUXMNOkI0T8v9BVxmi", "Waiting", undefined);
      /**
       * 
       */


      __checkObsolete__(['Component', 'Prefab', '_decorator', 'Animation', 'director', 'instantiate', 'isValid', 'log', 'resources', 'Layers']);

      NODE_NAME = 'Waiting';
      PREFAB_URL = 'prefab/Waiting';
      ({
        ccclass,
        property
      } = _decorator);

      _export("WaitingTag", WaitingTag = /*#__PURE__*/function (WaitingTag) {
        WaitingTag["Login"] = "Login";
        WaitingTag["PAY"] = "PAY";
        return WaitingTag;
      }({}));

      _export("default", Waiting = ccclass(_class = (_class2 = class Waiting extends Component {
        /* 显示等待界面
         * @param disconectDuration 超过这个时间会断线，传0表示不断线
         */
        static Show(tag, disconectDuration, delay) {
          return _asyncToGenerator(function* () {
            if (disconectDuration === void 0) {
              disconectDuration = 15;
            }

            if (delay === void 0) {
              delay = 1;
            }

            Waiting.tagDict.setValue(tag, null);

            if (Waiting.getWaitingNode()) {
              return;
            }

            Waiting.toBeShown = true;
            var res = (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(PREFAB_URL, Prefab);

            if (!res) {
              res = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
                error: Error()
              }), LoadResAsync) : LoadResAsync)(PREFAB_URL, Prefab);

              if (!Waiting.toBeShown || Waiting.getWaitingNode()) {
                return;
              }
            }

            if (res) {
              var waitingNode = instantiate(res);
              waitingNode.layer = Layers.Enum.UI_2D;
              var waiting = waitingNode.getComponent(Waiting);
              waitingNode.name = NODE_NAME;
              director.getScene().addChild(waitingNode);
              waiting.playAnim(delay);

              if (disconectDuration > 0) {
                waiting.scheduleOnce(() => {
                  if (isValid(waitingNode) && waitingNode.parent != null) {
                    //断线
                    log("!!! Waiting Timeout !!!");
                    Waiting.Disconnect();
                  }
                }, disconectDuration);
              }

              console.log(waitingNode);
            }
          })();
        }

        static Disconnect() {// Net.Disconnect()
          // Waiting.Hide("", true)
        }
        /**
         * 显示等待界面，当收到指定协议时关闭
         * @param ptl 协议号
         */


        static WaitPtl(ptl, disconectDuration, delay) {
          if (disconectDuration === void 0) {
            disconectDuration = 15;
          }

          if (delay === void 0) {
            delay = 1;
          }

          Waiting.Show("waitptl_" + ptl, disconectDuration, delay);
        }
        /**
         * 关闭等待界面
         * @param tag 与Show函数传入的tag一致才能关闭界面
         * @param force 无论tag值是什么，强制关闭等待界面
         */


        static Hide(tag, force) {
          if (force === void 0) {
            force = false;
          }

          if (!Waiting.toBeShown) {
            return;
          }

          if (force) {
            Waiting.tagDict.clear();
          } else {
            Waiting.tagDict.remove(tag);

            if (!Waiting.tagDict.isEmpty()) {
              return;
            }
          }

          Waiting.toBeShown = false;
          var watingNode = Waiting.getWaitingNode();

          if (watingNode) {
            watingNode.removeFromParent();
            watingNode.destroy();
          }
        }
        /*  */


        static getWaitingNode() {
          return director.getScene().getChildByName(NODE_NAME);
        }
        /*  */


        playAnim(delay) {
          var anim = this.node.getComponent(Animation);

          if (delay <= 0) {
            anim.play(anim.defaultClip.name);
          } else {
            anim.play();
          }
        }

      }, _class2.tagDict = new (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
        error: Error()
      }), tab) : tab).Dictionary(), _class2.toBeShown = false, _class2)) || _class);

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=4a16051acc5499133a21bb0eb4881591d70a1a7d.js.map