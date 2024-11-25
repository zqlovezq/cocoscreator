System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsMoveType, BulletMove, BulletTargetType, BulletMoveTarget, _crd, tempPos;

  function _reportPossibleCrUseOfAbsMoveType(extras) {
    _reporterNs.report("AbsMoveType", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMove(extras) {
    _reporterNs.report("BulletMove", "../AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTargetType(extras) {
    _reporterNs.report("BulletTargetType", "../../obj/bullet/BulletControl", _context.meta, extras);
  }

  _export("BulletMoveTarget", void 0);

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
      BulletTargetType = _unresolved_3.BulletTargetType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "30389m9uZJI57Pd6kHnZhJO", "BulletMoveTarget", undefined);

      __checkObsolete__(['Vec3', 'math', 'v2', 'v3']);

      tempPos = new Vec3();
      /** 无轨迹， 直接到达目标 */

      _export("BulletMoveTarget", BulletMoveTarget = class BulletMoveTarget extends (_crd && BulletMove === void 0 ? (_reportPossibleCrUseOfBulletMove({
        error: Error()
      }), BulletMove) : BulletMove) {
        constructor() {
          super((_crd && AbsMoveType === void 0 ? (_reportPossibleCrUseOfAbsMoveType({
            error: Error()
          }), AbsMoveType) : AbsMoveType).BulletMoveTarget);
        }

        init() {
          //自身、友方不用处理， 在创建子弹时已经设置为拥有者位置
          // if (this.abs.info.configTab.EffectUnit == tab.EffectUnit.EffectUnit_Enemy) {//敌方
          switch (this.abs.bulletTargetType) {
            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).role:
              this.abs.setPosition(this.abs.targetRole.getHitPos());
              break;

            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).pos:
              this.abs.setPosition(this.abs.targetPos);
              break;

            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).angle:
              console.error("无轨迹， 不会存在角度发射");
              this.abs.setAngle(0);
              break;
          }

          this.abs.setAngle(0); // }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af3cc028dd777579fef34533088947fabe9659d7.js.map