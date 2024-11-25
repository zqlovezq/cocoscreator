System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsMoveType, BorderType, BulletMove, ScreenUtil, FixedUtil, BulletMoveLine, _crd, tempPos, tempPos1;

  function _reportPossibleCrUseOfAbsMoveType(extras) {
    _reporterNs.report("AbsMoveType", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBorderType(extras) {
    _reporterNs.report("BorderType", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMove(extras) {
    _reporterNs.report("BulletMove", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfScreenUtil(extras) {
    _reporterNs.report("ScreenUtil", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../util/FixedUtil", _context.meta, extras);
  }

  _export("BulletMoveLine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsMoveType = _unresolved_2.AbsMoveType;
      BorderType = _unresolved_2.BorderType;
      BulletMove = _unresolved_2.BulletMove;
      ScreenUtil = _unresolved_2.ScreenUtil;
    }, function (_unresolved_3) {
      FixedUtil = _unresolved_3.FixedUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "65aafX9K39BsaO5BZh9WqJv", "BulletMoveLine", undefined);

      __checkObsolete__(['Size', 'Vec3', 'game', 'math', 'v2', 'v3', 'view']);

      tempPos = new Vec3();
      tempPos1 = new Vec3();
      /** 移动--直线 */

      _export("BulletMoveLine", BulletMoveLine = class BulletMoveLine extends (_crd && BulletMove === void 0 ? (_reportPossibleCrUseOfBulletMove({
        error: Error()
      }), BulletMove) : BulletMove) {
        constructor() {
          super((_crd && AbsMoveType === void 0 ? (_reportPossibleCrUseOfAbsMoveType({
            error: Error()
          }), AbsMoveType) : AbsMoveType).bulletMoveLine);
        }

        init() {}

        updateFrame(dt) {
          super.updateFrame(dt);
        }

        fly(dt) {
          //计算新位置
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt);
          this.setAbsPos(tempPos);

          if (this.abs.info.isScreenBounce()) {
            this.checkNextBorder(dt);
          }
        }

        updateNextPos(dt) {
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt);
        }

        checkNextBorder(dt) {
          this.updateNextPos(dt);
          let type = (_crd && ScreenUtil === void 0 ? (_reportPossibleCrUseOfScreenUtil({
            error: Error()
          }), ScreenUtil) : ScreenUtil).getOutOfScreenType(tempPos);

          if (type != (_crd && BorderType === void 0 ? (_reportPossibleCrUseOfBorderType({
            error: Error()
          }), BorderType) : BorderType).empty) {
            //下一帧超出范围
            if (type == (_crd && BorderType === void 0 ? (_reportPossibleCrUseOfBorderType({
              error: Error()
            }), BorderType) : BorderType).leftRight) {
              this.abs.velocity.x = -this.abs.velocity.x;
            } else if (type == (_crd && BorderType === void 0 ? (_reportPossibleCrUseOfBorderType({
              error: Error()
            }), BorderType) : BorderType).upDown) {
              this.abs.velocity.y = -this.abs.velocity.y;
            }

            this.abs.velocity.normalize();
            this.abs.setVelocity(this.abs.velocity);
            this.abs.info.addScreenBounceCount(); // FixedUtil.deltaTimeMovePostion(tempPos1, tempPos, this.abs.velocity, dt)
            // this.abs.setAngle(this.abs.skillTab.baseAngle + MathAngle.posToAngle(tempPos, tempPos1))
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6009dd88358dbc3e8c002329e463c2ca1bbf5be6.js.map