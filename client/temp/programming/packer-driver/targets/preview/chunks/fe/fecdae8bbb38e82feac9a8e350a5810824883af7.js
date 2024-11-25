System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Component, Layers, Node, Sprite, UITransform, Vec3, _dec, _class, _class2, _crd, ccclass, property, tempPos, FPSAvatar;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Component = _cc.Component;
      Layers = _cc.Layers;
      Node = _cc.Node;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "de6919ZxGdFJbEEMy/U3y8u", "FPSAvatar", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Layers', 'Node', 'Prefab', 'Sprite', 'SpriteFrame', 'UITransform', 'v3', 'Vec3', 'warn']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();

      _export("FPSAvatar", FPSAvatar = (_dec = ccclass('FPSAvatar'), _dec(_class = (_class2 = class FPSAvatar extends Component {
        constructor() {
          super(...arguments);
          this.spr = void 0;
          this._isPlay = false;
          this.sample = 0;
          this.nowIndex = 0;
          this.duration = 0;
          this.step = 0;
          this.isComplete = false;
          this.time = 0;
          this.totalTime = 0;
          this.timeScale = 1;
          this.iamges = [];
          this.wrapMode = false;
          this.actionName = "";
          this.cb = void 0;
        }

        static get() {
          var fps = FPSAvatar.poolUIs.pop();

          if (fps == null) {
            var nn = new Node("FPSAvatar");
            nn.layer = Layers.Enum.DEFAULT;
            fps = nn.addComponent(FPSAvatar);
          }

          return fps;
        }

        static put(fps) {
          fps.node.removeFromParent();
          fps.reset();
          FPSAvatar.poolUIs.push(fps);
        }
        /** 销毁 */


        static destory() {
          for (var i = 0; i < FPSAvatar.poolUIs.length; i++) {
            FPSAvatar.poolUIs[i].node.destroy();
          }

          FPSAvatar.poolUIs.length = 0;
        }

        createWithSpriteFrames(spriteFrames, sample) {
          this.iamges = spriteFrames;
          this.sample = sample;
          this.duration = spriteFrames.length / sample;
          this.step = 1 / sample;
          this.time = 0;
          this.totalTime = 0;
          this.updateNowSpr();
        }

        setFb(fb) {
          this.cb = fb;
        }

        setSprite(sp) {
          this.spr = sp;
          this.spr.node.position = tempPos.set(0, 0, 0);
          this.spr.node.scale = tempPos.set(1, 1, 1);
          this.node.addChild(this.spr.node);
        }

        update(dt) {
          if (!this._isPlay) return;
          this.time += dt * this.timeScale;
          this.totalTime += dt * this.timeScale;

          if (this.time >= this.step) {
            this.time -= this.step;
            this.addSelf();
          }
        }

        addSelf() {
          this.nowIndex += 1;
          this.updateNowSpr();
        }

        updateNowSpr() {
          if (this.iamges == null) {
            return;
          }

          if (this.nowIndex >= this.iamges.length) {
            if (!this.wrapMode) {
              this.playComplete();
              return;
            }

            this.play(this.wrapMode);
            return;
          }

          if (this.spr == null) {
            var nn = new Node("spr");
            nn.addComponent(UITransform);
            this.spr = nn.addComponent(Sprite);
            nn.layer = this.node.layer;
            this.node.addChild(nn);
          }

          this.spr.spriteFrame = this.iamges[this.nowIndex];
        }

        get isPlay() {
          return this._isPlay;
        }

        set isPlay(v) {
          this._isPlay = v;
        }
        /** 暂停 */


        pause() {
          this.isPlay = false;
        }
        /** 恢复 */


        resume() {
          this.isPlay = true;
        }
        /** 播放 */


        play(isLoop) {
          this.wrapMode = isLoop;
          this.resetTime();
          this.isComplete = false;
          this.isPlay = true;
          this.updateNowSpr();
        }
        /** 停止 */


        stop() {
          this.resetTime();
          this.isPlay = false;
        }

        playComplete() {
          this.isComplete = true;
          this._isPlay = false;
          this.cb && this.cb();
        }

        recycle() {
          FPSAvatar.put(this);
        }

        resetTime() {
          this.time = 0;
          this.nowIndex = 0;
          this.totalTime = 0;

          if (this.spr) {
            this.spr.spriteFrame = null;
          }
        }

        reset() {
          this.resetTime();
          this.isComplete = false;
          this.wrapMode = false;
          this.iamges = null;
          this.actionName = "";
          this.clearSprite();
        }

        clearSprite() {
          this.spr = null;
        }

        hasImage() {
          return this.iamges && this.iamges.length > 0;
        }

      }, _class2.poolUIs = [], _class2)) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=fecdae8bbb38e82feac9a8e350a5810824883af7.js.map