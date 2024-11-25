System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, BulletMoveLine, BulletMoveTraceTarget, _crd, tempPos, NextTime;

  function _reportPossibleCrUseOfBulletMoveLine(extras) {
    _reporterNs.report("BulletMoveLine", "./BulletMoveLine", _context.meta, extras);
  }

  _export("BulletMoveTraceTarget", void 0);

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

      _cclegacy._RF.push({}, "7165d8yokND7aYdC+2qSwk1", "BulletMoveTraceTarget", undefined);

      __checkObsolete__(['Vec3', 'math', 'v2', 'v3']);

      tempPos = new Vec3();
      NextTime = 500;
      /** 追中目标 */

      _export("BulletMoveTraceTarget", BulletMoveTraceTarget = class BulletMoveTraceTarget extends (_crd && BulletMoveLine === void 0 ? (_reportPossibleCrUseOfBulletMoveLine({
        error: Error()
      }), BulletMoveLine) : BulletMoveLine) {
        constructor(...args) {
          super(...args);
          this.isTargetDead = false;
          this.traceTime = 0;
        }

        init() {
          // //设置子弹角度
          this.isTargetDead = false;
          this.traceTime = NextTime;
        }

        updateFrame(dt) {
          super.updateFrame(dt);
          this.traceTime -= dt;

          if (this.traceTime == 0) {
            this.traceTime = NextTime;
            this.traceDirection(this.abs.getPosition(), this.abs.targetRole.getHitPos());
          }
        }

        onFlyComplete() {
          super.onFlyComplete();
          this.onEnemyDead();
        }

        offDead() {
          if (this.abs.targetRole && this.abs.targetRole.isValid) {
            this.abs.targetRole.node.off("AbsRole_dead", this.onEnemyDead, this);
          }
        }

        onDead() {
          if (this.abs.targetRole && this.abs.targetRole.isValid) {
            this.abs.targetRole.node.on("AbsRole_dead", this.onEnemyDead, this);
          }
        }

        onEnemyDead() {
          this.isTargetDead = true;
          this.offDead();
        }

        checkNextBorder(dt) {//不做屏幕反弹
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=68b9a3013617eec5aeec1084931fdbaa163142b9.js.map