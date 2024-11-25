System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, FixedUtil, BuletMoveLaser, BuletMoveTrackLaser, _crd, TrackLaserState, tempPos;

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuletMoveLaser(extras) {
    _reporterNs.report("BuletMoveLaser", "./BuletMoveLaser", _context.meta, extras);
  }

  _export("BuletMoveTrackLaser", void 0);

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
      BuletMoveLaser = _unresolved_3.BuletMoveLaser;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "11e53XP+LxG6KdEB/3jDWP7", "BuletMoveTrackLaser", undefined);

      __checkObsolete__(['Vec3']);

      TrackLaserState = {
        extend: 0,
        wating: 1,
        shrink: 2
      };
      tempPos = new Vec3();
      /** 激光 延伸-停留-收缩
       * 宽度延伸，位置不变
       */

      _export("BuletMoveTrackLaser", BuletMoveTrackLaser = class BuletMoveTrackLaser extends (_crd && BuletMoveLaser === void 0 ? (_reportPossibleCrUseOfBuletMoveLaser({
        error: Error()
      }), BuletMoveLaser) : BuletMoveLaser) {
        constructor() {
          super(...arguments);
          this.extendTime = 0.1;
          this.watingTime = 0;
          this.shrink = 0;
          this.state = TrackLaserState.extend;
          this.shrinkVelocity = new Vec3();
        }

        init() {
          this.watingTime = this.abs.info.configTab.LiveTime[0];
          this.extendTime = this.abs.info.configTab.LiveTime[1];
          this.shrink = this.abs.info.configTab.LiveTime[2];
          super.init();
        }

        fly(dt) {
          if (this.state == TrackLaserState.extend) {
            super.fly(dt);

            if (this.passTime >= this.extendTime) {
              this.state = TrackLaserState.wating;
            }
          } else if (this.state == TrackLaserState.wating) {
            if (this.passTime >= this.watingTime + this.extendTime) {
              this.state = TrackLaserState.shrink;
              this.shrinkVelocity.set(this.abs.velocity);
              this.shrinkVelocity.x = this.shrinkVelocity.x * -1;
              this.shrinkVelocity.y = this.shrinkVelocity.y * -1;
            }
          } else if (this.state == TrackLaserState.shrink) {
            this.onShrink(dt);
          }
        }

        onShrink(dt) {
          //计算新位置
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(this.widthPos, this.widthPos, this.shrinkVelocity, dt);
          this.updateSize(); //计算新位置

          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt);
          this.setAbsPos(tempPos);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=cf366cd5823cbb54829496e5ebba956f2a291a45.js.map