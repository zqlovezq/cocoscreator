System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Tween, Vec3, tween, v3, _dec, _class, _crd, ccclass, property, AcitonType, ShakeAction;

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Tween = _cc.Tween;
      Vec3 = _cc.Vec3;
      tween = _cc.tween;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "737dekUee1H6YTrQI8w052B", "ShakeAction", undefined);

      __checkObsolete__(['_decorator', 'Tween', 'Vec3', 'Node', 'tween', 'v3']);

      ({
        ccclass,
        property
      } = _decorator); // //震屏

      // /**
      // * 动作枚举
      // */
      _export("AcitonType", AcitonType = /*#__PURE__*/function (AcitonType) {
        AcitonType[AcitonType["shake"] = 1] = "shake";
        return AcitonType;
      }({}));

      _export("ShakeAction", ShakeAction = (_dec = ccclass('ShakeAction'), _dec(_class = class ShakeAction {
        constructor() {
          this.shakeTween = void 0;
          this.shakeNowPos = void 0;
          this.shakeNode = void 0;
          this.timeoutHandler = void 0;
          this.acs = void 0;
          this.acIndex = void 0;
        }

        // /**
        // * 播放震屏
        // * @param acNode 动作节点
        // * @param acs 动作序列
        // */
        runActions(acNode, acs) {
          this.shakeNode = acNode;
          this.acs = acs;
          this.runOne(0);
        } // /**
        // * 停止震屏
        // */


        stopAll() {
          this.stopShake();
          this.acs = null;
        }

        playNext() {
          this.acIndex = this.acIndex + 1;
          this.runOne(this.acIndex);
        }

        runOne(index) {
          if (this.acs == null) {
            return;
          }

          this.acIndex = index;
          var acData = this.acs[index];

          if (acData == null) {
            return;
          }

          if (acData.delay) {
            tween(this.shakeNode).delay(acData.delay).call(() => {
              this.runAction(this.shakeNode, acData.duration);
            }).tag(-999).start();
          } else {
            this.runAction(this.shakeNode, acData.duration);
          }
        } // /**
        // *
        // * @param acNode 动作节点
        // * @param duration 时间（秒）
        // */


        runAction(acNode, duration, callback) {
          this.stopShake();
          this.shakeNode = acNode;
          this.shakeNowPos = new Vec3(acNode.position);
          this.shakeTween = tween(acNode).repeatForever(tween().to(0.02, {
            position: v3(5, 7)
          }).to(0.02, {
            position: v3(-6, 7)
          }).to(0.02, {
            position: v3(-13, 3)
          }).to(0.02, {
            position: v3(3, -6)
          }).to(0.02, {
            position: v3(-5, 5)
          }).to(0.02, {
            position: v3(2, -8)
          }).to(0.02, {
            position: v3(-8, -10)
          }).to(0.02, {
            position: v3(3, 10)
          }).to(0.02, {
            position: v3(0, 0)
          })).start();
          var time = new Date().getTime();
          tween(this.shakeNode).delay(duration).call(() => {
            this.stopShake();
            this.playNext();
            callback && callback();
          }).tag(-999).start();
        }

        stopShake() {
          if (this.shakeTween) {
            this.shakeTween.stop();
            this.shakeNode.position = this.shakeNowPos;
            this.shakeTween = null;
          }

          Tween.stopAllByTag(999);
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=02dbc13dd033d8d24ca2ad6460d71a19c00f0ac5.js.map