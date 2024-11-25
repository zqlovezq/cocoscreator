System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, FixedUtil, MathAngle, PvpMove, PvpMoveLine, PvpMoveCircle, _crd, tempPos, tempPos1;

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpBullet(extras) {
    _reporterNs.report("PvpBullet", "../obj/PvpBullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../../framework/collision/Maths", _context.meta, extras);
  }

  _export({
    PvpMove: void 0,
    PvpMoveLine: void 0,
    PvpMoveCircle: void 0
  });

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      FixedUtil = _unresolved_2.FixedUtil;
    }, function (_unresolved_3) {
      MathAngle = _unresolved_3.MathAngle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ebea7NJz51HUpkU0U5gSxt3", "PvpMove", undefined);

      __checkObsolete__(['Vec3']);

      tempPos = new Vec3();
      tempPos1 = new Vec3();
      /** 移动 （默认就是速率移动） */

      _export("PvpMove", PvpMove = class PvpMove {
        constructor() {
          this.abs = void 0;
        }

        setAbs(abs) {
          this.abs = abs;
        }

        init() {}

        setAbsPos(v3) {
          this.abs.setPosition(v3);
        }

        updateFrame(dt) {
          this.checkRotate();
          this.fly(dt);
        }

        checkRotate() {
          if (this.abs == null || this.abs && this.abs.isDead) {
            return;
          }

          if (this.abs.configTab.Rotate != 0) {
            this.abs.addAngle(this.abs.configTab.Rotate);
          }
        }

        fly(dt) {}

      });

      _export("PvpMoveLine", PvpMoveLine = class PvpMoveLine extends PvpMove {
        fly(dt) {
          //计算新位置
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt);
          this.setAbsPos(tempPos);
        }

      }); //离心运动


      _export("PvpMoveCircle", PvpMoveCircle = class PvpMoveCircle extends PvpMove {
        constructor() {
          super(...arguments);
          this.angle = 0;
          this.angleVelocity = new Vec3();
          this.startPos = new Vec3();
          this.nowPos = new Vec3();
          this.addAngle = 0;
        }

        init() {
          this.angleVelocity.set(this.abs.velocity);
          this.angleVelocity.normalize();
          this.angleVelocity.multiplyScalar(this.abs.speed);
          this.angle = 0;
          this.startPos.set(this.abs.getPosition());
          this.nowPos.set(0, 0, 0);
          this.addAngle = 0;
        }

        fly(dt) {
          this.angle = this.angle + this.addAngle; //计算新位置

          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(this.nowPos, this.nowPos, this.angleVelocity, dt);
          (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).rotatePoint(this.nowPos, this.angle, tempPos1);
          tempPos1.add(this.startPos);
          this.setAbsPos(tempPos1);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9989ac3ff6e5bfa601adea2d1ff50ca019d81c78.js.map