System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsMoveType, BulletMove, FixedUtil, BuletMoveLaser, _crd;

  function _reportPossibleCrUseOfAbsMoveType(extras) {
    _reporterNs.report("AbsMoveType", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMove(extras) {
    _reporterNs.report("BulletMove", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../util/FixedUtil", _context.meta, extras);
  }

  _export("BuletMoveLaser", void 0);

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
      BulletMove = _unresolved_2.BulletMove;
    }, function (_unresolved_3) {
      FixedUtil = _unresolved_3.FixedUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "bccbdyOrBhJsqqUknjqeK7n", "BuletMoveLaser", undefined);

      __checkObsolete__(['Size', 'UITransform', 'Vec2', 'Vec3', 'game', 'math', 'v2', 'v3', 'view']);

      /** 激光
       * 宽度延伸，位置不变
       */
      _export("BuletMoveLaser", BuletMoveLaser = class BuletMoveLaser extends (_crd && BulletMove === void 0 ? (_reportPossibleCrUseOfBulletMove({
        error: Error()
      }), BulletMove) : BulletMove) {
        constructor() {
          super((_crd && AbsMoveType === void 0 ? (_reportPossibleCrUseOfAbsMoveType({
            error: Error()
          }), AbsMoveType) : AbsMoveType).bulletMoveLine);
          this.widthPos = new Vec3(0, 0, 0);
        }

        init() {
          this.widthPos.x = this.abs.size.x;
          this.widthPos.y = 0;
          this.updateSize();
        }

        fly(dt) {
          //计算新位置
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(this.widthPos, this.widthPos, this.abs.velocity, dt);
          this.updateSize();
        }

        updateSize() {
          this.abs.size.x = Math.abs(this.widthPos.x);
          this.abs.center.x = Math.abs(this.abs.size.x / 2);
          this.abs.body.shape.center.x = this.abs.center.x;
          this.abs.body.shape.size.x = this.abs.size.x;
          this.abs.updatePostion();
          this.abs.initGraphics();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d2a31c630fa45c5e6eb80ed66fdc3ab1d0bdd22a.js.map