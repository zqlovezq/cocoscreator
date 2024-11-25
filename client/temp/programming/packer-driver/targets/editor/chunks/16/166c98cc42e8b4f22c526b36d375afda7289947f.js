System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Node, SpriteFrame, Texture2D, ViewPop, LoadResAsync, ResMgr, Bridge, _dec, _dec2, _dec3, _class, _class2, _descriptor, _descriptor2, _crd, ccclass, property, AzheGmPop;

  function _initializerDefineProperty(target, property, descriptor, context) { if (!descriptor) return; Object.defineProperty(target, property, { enumerable: descriptor.enumerable, configurable: descriptor.configurable, writable: descriptor.writable, value: descriptor.initializer ? descriptor.initializer.call(context) : void 0 }); }

  function _applyDecoratedDescriptor(target, property, decorators, descriptor, context) { var desc = {}; Object.keys(descriptor).forEach(function (key) { desc[key] = descriptor[key]; }); desc.enumerable = !!desc.enumerable; desc.configurable = !!desc.configurable; if ('value' in desc || desc.initializer) { desc.writable = true; } desc = decorators.slice().reverse().reduce(function (desc, decorator) { return decorator(target, property, desc) || desc; }, desc); if (context && desc.initializer !== void 0) { desc.value = desc.initializer ? desc.initializer.call(context) : void 0; desc.initializer = undefined; } if (desc.initializer === void 0) { Object.defineProperty(target, property, desc); desc = null; } return desc; }

  function _initializerWarningHelper(descriptor, context) { throw new Error('Decorating class property failed. Please ensure that ' + 'transform-class-properties is enabled and runs after the decorators transform.'); }

  function _reportPossibleCrUseOfViewPop(extras) {
    _reporterNs.report("ViewPop", "../../framework/base/ViewPop", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLoadResAsync(extras) {
    _reporterNs.report("LoadResAsync", "../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfResMgr(extras) {
    _reporterNs.report("ResMgr", "../mgr/ResMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBridge(extras) {
    _reporterNs.report("Bridge", "../../framework/Bridge", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Node = _cc.Node;
      SpriteFrame = _cc.SpriteFrame;
      Texture2D = _cc.Texture2D;
    }, function (_unresolved_2) {
      ViewPop = _unresolved_2.ViewPop;
    }, function (_unresolved_3) {
      LoadResAsync = _unresolved_3.LoadResAsync;
      ResMgr = _unresolved_3.ResMgr;
    }, function (_unresolved_4) {
      Bridge = _unresolved_4.Bridge;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "dcda533W4FPdba4gu49qjHw", "AzheGmPop", undefined);

      __checkObsolete__(['_decorator', 'Animation', 'AnimationClip', 'Color', 'director', 'game', 'Graphics', 'instantiate', 'js', 'Label', 'Layers', 'Material', 'Node', 'Prefab', 'Rect', 'resources', 'sp', 'Sprite', 'SpriteAtlas', 'SpriteFrame', 'sys', 'Texture2D', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);

      _export("AzheGmPop", AzheGmPop = (_dec = ccclass('AzheGmPop'), _dec2 = property(Node), _dec3 = property(Node), _dec(_class = (_class2 = class AzheGmPop extends (_crd && ViewPop === void 0 ? (_reportPossibleCrUseOfViewPop({
        error: Error()
      }), ViewPop) : ViewPop) {
        constructor(...args) {
          super(...args);

          _initializerDefineProperty(this, "node1", _descriptor, this);

          _initializerDefineProperty(this, "node2", _descriptor2, this);

          this.hitColorFrame = 0;
        }

        onLoad() {// this.spine.setCompleteListener((trackEntry) => {
          //     if (trackEntry.loop) {
          //         return
          //     }
          //     let name = trackEntry.animation ? trackEntry.animation.name : '';
          //     console.log("播放时间", name, new Date().getTime() - this.time)
          //     this.time = new Date().getTime()
          // })
        }

        register() {}

        update(dt) {// let m1 = this.node1.getComponent(Sprite).getMaterialInstance(0)
          // m1.setProperty('u_time', game.totalTime * 0.001)
        }

        onClick1() {// Bridge.testCall()
          // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
          // let m2 = this.node2.getComponent(Sprite).getMaterialInstance(0)
          // m2.setProperty('u_color', [0, 0, 0, 1])
          // m2.setProperty('u_rate', 0.6)
          // ResMgr.printCache()
          // Random.seed = 1720664297127
          // UIMgr.ins.show({ viewName: ViewName.ConfirmPop })
          // CommonTipsPop.create("ok", (closeType: CommonTipsPopCloseType) => {
          //     if (closeType == CommonTipsPopCloseType.confirm) {
          //         console.log("ok")
          //     } else {
          //         console.log("cancel")
          //     }
          // })
          // console.log(this.spine.skeletonData._skeletonCache.animations)
          // for (let index = 0; index < this.spine.skeletonData._skeletonCache.animations.length; index++) {
          //     const v = this.spine.skeletonData._skeletonCache.animations[index];
          //     console.log("动画", v.name, v.duration)
          // }
          // this.time = new Date().getTime()
          // this.spine.setAnimation(0, "action_dead", false);
          // this.spine.addAnimation(0, "action_born", false);
          // this.spine.addAnimation(0, "action_dead", false);
          // this.spine.addAnimation(0, "action_idle", false);
          // this.spine.addAnimation(0, "action_move", false);    
          // this.ava = FPSAvatar.get()
          // this.ava.node.layer = Layers.Enum.UI_2D
          // this.node.addChild(this.ava.node)
        }

        onClick2FightScene() {
          (_crd && Bridge === void 0 ? (_reportPossibleCrUseOfBridge({
            error: Error()
          }), Bridge) : Bridge).testCallWithBack(); // let list = []
          // for (let index = 0; index < 100; index++) {
          //     list.push(Random.getInt())
          // }
          // console.log(list)
          // Loading.create()
          // this.scheduleOnce(() => {
          //     Loading.hide()
          // }, 2)
        }

        onClick3DynamicAtlas() {
          // UIMgr.ins.show({ viewName: ViewName.DynamicAtlas })
          // console.log(this.spine.skeletonData._skeletonCache.animations)
          // console.log(this.spine.skeletonData.skeletonJson)
          // console.log(this.spine)
          // console.log(this.spine._cachedSockets.get("root/point_attack"))
          // console.log(this.spine._skeleton["_bones"][this.spine._cachedSockets.get("root/point_attack")])
          // console.log(this.spine.querySockets())
          this.loadSpriteFrame1();
        }

        async test() {
          this.test1();
        }

        test1() {}

        onClick4() {}

        onClick5() {
          this.spr.spriteFrame = null;
          let path = "textrue/test/testbg";
          (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
            error: Error()
          }), ResMgr) : ResMgr).getBundle().release(path + "/spriteFrame", SpriteFrame); // let spf = this.spr.spriteFrame
          // if (spf) {
          //     this.spr.spriteFrame = null
          //     spf.decRef()
          //     console.log(spf)
          //     let path = "textrue/test/testbg"

          this.scheduleOnce(() => {
            console.log((_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(path, SpriteFrame));
            console.log((_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(path, Texture2D)); // console.log(ResMgr.get(path, SpriteFrame))
          }, 2); // }
        }

        async loadSpriteFrame1() {
          if (this.spr.spriteFrame == null) {
            let path = "textrue/test/testbg";
            console.log((_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(path, SpriteFrame));
            let sf = await (_crd && LoadResAsync === void 0 ? (_reportPossibleCrUseOfLoadResAsync({
              error: Error()
            }), LoadResAsync) : LoadResAsync)(path, SpriteFrame);
            sf.addRef();
            this.spr.spriteFrame = sf;
            console.log(path, (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(path, SpriteFrame), (_crd && ResMgr === void 0 ? (_reportPossibleCrUseOfResMgr({
              error: Error()
            }), ResMgr) : ResMgr).get(path, Texture2D));
          }
        }

      }, (_descriptor = _applyDecoratedDescriptor(_class2.prototype, "node1", [_dec2], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      }), _descriptor2 = _applyDecoratedDescriptor(_class2.prototype, "node2", [_dec3], {
        configurable: true,
        enumerable: true,
        writable: true,
        initializer: function () {
          return null;
        }
      })), _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=166c98cc42e8b4f22c526b36d375afda7289947f.js.map