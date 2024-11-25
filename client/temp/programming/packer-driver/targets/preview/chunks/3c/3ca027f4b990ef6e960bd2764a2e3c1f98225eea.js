System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Animation, instantiate, Node, Prefab, AbsControl, LoadResAsync, ResMgr, tab, BattleMainDataControl, Func, Sound, _dec, _class, _class2, _crd, ccclass, property, ComicControl;

  function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

  function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

  function _reportPossibleCrUseOfAbsControl(extras) {
    _reporterNs.report("AbsControl", "../../framework/base/IAbs", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../../logic/mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBattleMainDataControl(extras) {
    _reporterNs.report("BattleMainDataControl", "../../logic/model/home/battle/BattleMainDataControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../logic/utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../../logic/utils/Sound", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Animation = _cc.Animation;
      instantiate = _cc.instantiate;
      Node = _cc.Node;
      Prefab = _cc.Prefab;
    }, function (_unresolved_2) {
      AbsControl = _unresolved_2.AbsControl;
    }, function (_unresolved_3) {
      LoadResAsync = _unresolved_3.LoadResAsync;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      BattleMainDataControl = _unresolved_5.BattleMainDataControl;
    }, function (_unresolved_6) {
      Func = _unresolved_6.Func;
    }, function (_unresolved_7) {
      Sound = _unresolved_7.default;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dbca316GPNPuL7ZshqzTl1o", "ComicControl", undefined);
      /*
       * @Date: 2024-10-09 10:34:05
       * @LastEditors: wzq
       * @pragram:漫画控制组件
       * @LastEditTime: 2024-10-25 14:53:57
       */


      __checkObsolete__(['_decorator', 'Component', 'director', 'Animation', 'instantiate', 'Node', 'Prefab', 'EventTouch']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("ComicControl", ComicControl = (_dec = ccclass('ComicControl'), _dec(_class = (_class2 = class ComicControl extends (_crd && AbsControl === void 0 ? (_reportPossibleCrUseOfAbsControl({
        error: Error()
      }), AbsControl) : AbsControl) {
        constructor() {
          super(...arguments);
          this.comicData = null;
          this.comicNode = null;
          this.comicIndex = -1;
          this.comicAnimState = null;
          this.comicCanTouch = true;
          this.clickEnd = false;
          this.comicOvercallback = null;
          this.waitEnd = null;
        }

        static get ins() {
          if (null == this._instance) {
            this._instance = new ComicControl();
          }

          return this._instance;
        }

        getComicCondition(stageId) {
          var id = 0;
          var isPass = (_crd && BattleMainDataControl === void 0 ? (_reportPossibleCrUseOfBattleMainDataControl({
            error: Error()
          }), BattleMainDataControl) : BattleMainDataControl).ins.getIsPasstStageByStageId(stageId);

          if (!isPass) {
            return id;
          }

          for (var i = 0; i < (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().Comic.length; i++) {
            var comicTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().Comic[i];

            if (comicTab.ComicUnlock === stageId) {
              id = comicTab.ComicID;
            }
          }

          return id;
        }
        /* 当前场景添加漫画节点 播放完之后再场景中删除 */


        addComic(id, parenNode, cb) {
          var _this = this;

          return _asyncToGenerator(function* () {
            console.log("cocos 当前播放的漫画id=", id);
            _this.comicOvercallback = null;

            if (cb) {
              _this.comicOvercallback = cb;
            }

            _this.comicCanTouch = true;
            _this.comicIndex = 0;
            _this.comicData = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).getData().ComicByComicID.getValue(id);
            var pfb = yield (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(_this.comicData.prefabName, Prefab);
            var comic_prefab = instantiate(pfb);
            comic_prefab.name = "comic";
            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).cocosNodeZIndex(comic_prefab, 9999);
            _this.comicNode = comic_prefab;
            parenNode.addChild(comic_prefab);

            _this.comicNode.on(Node.EventType.TOUCH_START, _this.touchComic, _this);

            _this.playAnim();
          })();
        }

        touchComic() {
          if (this.clickEnd) {
            var comic_anim_node = this.comicNode.getChildByName(this.comicData.NodeName[this.comicIndex - 1]);

            if (this.comicIndex === this.comicData.NodeName.length) {
              clearTimeout(this.waitEnd);
              this.releaseComic();
            } else {
              clearTimeout(this.waitEnd);
              comic_anim_node.active = false;
              this.playAnim();
            }
          } else {
            if (this.comicAnimState && this.comicCanTouch) {
              this.comicCanTouch = false; // 将当前时间设为动画的时长，这样就跳到了最后一帧

              this.comicAnimState.time = this.comicAnimState.duration;
              this.comicAnimState.sample(); // 强制更新动画到当前帧
            }
          }
        } // 播放动画


        playAnim() {
          if (this.comicIndex == 0) {
            (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
              error: Error()
            }), Sound) : Sound).ins.pause();
          } // 节点名字


          var self = this;
          this.clickEnd = false;
          this.waitEnd = null;
          this.comicCanTouch = true;
          var comic_anim_node = this.comicNode.getChildByName(this.comicData.NodeName[this.comicIndex]); // 动画名字

          var comic_anim_name = this.comicData.AnimationName[this.comicIndex];
          var anim = comic_anim_node.getComponent(Animation);
          anim.play(comic_anim_name);
          this.comicAnimState = anim.getState(comic_anim_name);
          anim.on(Animation.EventType.FINISHED, e => {
            console.log("cocos 动画播放完---", comic_anim_name);
            self.comicIndex++;
            self.comicCanTouch = false;
            self.clickEnd = true;

            if (self.comicIndex === self.comicData.NodeName.length) {
              // 漫画结束结束
              console.log("cocos 漫画结束结束--- 释放资源");
              self.waitEnd = setTimeout(() => {
                self.releaseComic();
              }, 3000);
            } else {
              self.waitEnd = setTimeout(() => {
                comic_anim_node.active = false;
                self.playAnim();
              }, 3000);
            }
          });
        }

        releaseComic() {
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.resume();
          this.comicNode.off(Node.EventType.TOUCH_START, this.touchComic, this);
          this.comicNode.destroy();
          this.comicNode = null;
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).release(this.comicData.prefabName, Prefab);

          if (this.comicOvercallback) {
            this.comicOvercallback();
          }
        }

      }, _class2._instance = void 0, _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=3ca027f4b990ef6e960bd2764a2e3c1f98225eea.js.map