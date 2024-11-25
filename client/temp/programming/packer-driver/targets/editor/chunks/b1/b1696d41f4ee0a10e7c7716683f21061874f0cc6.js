System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, BulletMoveLine, BulletMoveRound, _crd, tempPos, tempPos1;

  function _reportPossibleCrUseOfBulletMoveLine(extras) {
    _reporterNs.report("BulletMoveLine", "./BulletMoveLine", _context.meta, extras);
  }

  _export("BulletMoveRound", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BulletMoveLine = _unresolved_2.BulletMoveLine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "be04d6vDS9AgIfUtdO3GgqA", "BulletMoveRound", undefined);

      __checkObsolete__(['Vec3', 'math', 'v2', 'v3']);

      tempPos = new Vec3();
      tempPos1 = new Vec3();
      /** 回旋--直线 */

      _export("BulletMoveRound", BulletMoveRound = class BulletMoveRound extends (_crd && BulletMoveLine === void 0 ? (_reportPossibleCrUseOfBulletMoveLine({
        error: Error()
      }), BulletMoveLine) : BulletMoveLine) {
        constructor(...args) {
          super(...args);
          this.roundCount = void 0;
          //回旋次数
          this.totalCount = void 0;
          //总次数
          this.oneWayTime = void 0;
          //表里配置的为单程时间
          this.waitingTime = 0;
        }

        //等待时间
        setLiftTime(t) {
          this.oneWayTime = t;
          this.roundCount = 0;
          this.totalCount = this.abs.info.configTab.Round[0] * 2;
          t = t * this.totalCount;
          super.setLiftTime(t);
        }

        checkFlip() {
          if (this.waitingTime == 0) {
            this.abs.velocityFlip();
          }
        }

        updateFrame(dt) {
          if (this.waitingTime > 0) {
            this.waitingTime -= dt;
            this.waitingTime = Math.max(this.waitingTime, 0);
            this.checkFlip();
            this.checkRotate();
            return;
          }

          super.updateFrame(dt);

          if (this.roundCount != this.getPassTimeRoundCount()) {
            this.roundCount = this.getPassTimeRoundCount();

            if (this.roundCount == this.totalCount) {
              return;
            }

            this.waitingTime = this.abs.info.configTab.Round[1];
            this.checkFlip();
          }
        }

        getPassTimeRoundCount() {
          return Math.floor(this.passTime / this.oneWayTime);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b1696d41f4ee0a10e7c7716683f21061874f0cc6.js.map