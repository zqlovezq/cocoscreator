System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, BulletMoveLine, FixedUtil, MathAngle, BulletMoveCentrifugation, _crd, tempPos, tempPos1, angleVelocity;

  function _reportPossibleCrUseOfBulletMoveLine(extras) {
    _reporterNs.report("BulletMoveLine", "./BulletMoveLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../../../framework/collision/Maths", _context.meta, extras);
  }

  _export("BulletMoveCentrifugation", void 0);

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
    }, function (_unresolved_3) {
      FixedUtil = _unresolved_3.FixedUtil;
    }, function (_unresolved_4) {
      MathAngle = _unresolved_4.MathAngle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "38065W4TDRMtoekmrBIiOg8", "BulletMoveCentrifugation", undefined);

      __checkObsolete__(['Mat4', 'Quat', 'Vec3', 'math', 'v2', 'v3']);

      tempPos = new Vec3();
      tempPos1 = new Vec3();
      angleVelocity = new Vec3();
      /** 离心运动 包含离心回旋 */

      _export("BulletMoveCentrifugation", BulletMoveCentrifugation = class BulletMoveCentrifugation extends (_crd && BulletMoveLine === void 0 ? (_reportPossibleCrUseOfBulletMoveLine({
        error: Error()
      }), BulletMoveLine) : BulletMoveLine) {
        constructor() {
          super(...arguments);
          this.roundCount = void 0;
          //回旋次数
          this.totalCount = void 0;
          //总次数
          this.oneWayTime = void 0;
          //表里配置的为单程时间
          this.waitingTime = 0;
          //等待时间 
          this.angle = 0;
          this.angleVelocity = new Vec3();
          this.startPos = new Vec3();
          this.nowPos = new Vec3();
          this.idx = 0;
        }

        init() {
          super.init();
          this.angleVelocity.set(1, 0, 0);
          this.angleVelocity.multiplyScalar(this.abs.speed * this.abs.voRatio);
          this.angle = this.abs.voAngle;
          this.startPos.set(this.abs.getTruePosition());
          this.nowPos.set(0, 0, 0);
        }

        setLiftTime(t) {
          if (this.abs.info.isRound()) {
            this.oneWayTime = t;
            this.roundCount = 0;
            this.totalCount = this.abs.info.configTab.Round[0] * 2;
            t = t * this.totalCount;
          }

          super.setLiftTime(t);
        }

        checkFlip() {
          if (this.waitingTime == 0) {
            this.angleVelocity.x = -this.angleVelocity.x;
            this.angleVelocity.y = -this.angleVelocity.y;
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

          if (this.abs.isDead) {
            return;
          }

          if (this.abs && this.abs.info && this.abs.info.isRound()) {
            if (this.roundCount != this.getPassTimeRoundCount()) {
              this.roundCount = this.getPassTimeRoundCount();

              if (this.roundCount == this.totalCount) {
                return;
              }

              this.waitingTime = this.abs.info.configTab.Round[1];
              this.checkFlip();
            }
          }
        }

        fly(dt) {
          this.angle = this.angle + this.abs.info.configTab.Centrifugation[1]; //计算新位置

          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(this.nowPos, this.nowPos, this.angleVelocity, dt);
          (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).rotatePoint(this.nowPos, this.angle, tempPos1);
          tempPos1.add(this.startPos);
          this.setAbsPos(tempPos1);
        }

        getPassTimeRoundCount() {
          return Math.floor(this.passTime / this.oneWayTime);
        } // rotatePoint(point: Vec3, angle: number, out: Vec3): { x: number, y: number } {
        //     const radians = angle * Math.PI / 180;
        //     out.x = point.x * Math.cos(radians) - point.y * Math.sin(radians);
        //     out.y = point.x * Math.sin(radians) + point.y * Math.cos(radians);
        //     return out
        // }


      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=2393991617f21e436cf366ec296fb87c587ce489.js.map