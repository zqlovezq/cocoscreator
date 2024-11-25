System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, tab, FixedUtil, ViewSize, AbsMove, BulletMove, MonsterMoveLine, ScreenUtil, _crd, AbsMoveType, tempPos, tempPos1, BorderType;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBullet(extras) {
    _reporterNs.report("Bullet", "../obj/bullet/Bullet", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../../../define/ViewDefine", _context.meta, extras);
  }

  _export({
    AbsMove: void 0,
    BulletMove: void 0,
    MonsterMoveLine: void 0,
    ScreenUtil: void 0
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
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      FixedUtil = _unresolved_3.FixedUtil;
    }, function (_unresolved_4) {
      ViewSize = _unresolved_4.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "91064D0HJtJWoEkfRH9gdYk", "AbsMove", undefined);

      __checkObsolete__(['Size', 'Vec3', 'math', 'view']);

      /** 状态机类型 */
      _export("AbsMoveType", AbsMoveType = /*#__PURE__*/function (AbsMoveType) {
        AbsMoveType[AbsMoveType["default"] = 0] = "default";
        AbsMoveType[AbsMoveType["velocity"] = 1] = "velocity";
        AbsMoveType[AbsMoveType["bulletMoveLine"] = 101] = "bulletMoveLine";
        AbsMoveType[AbsMoveType["bulletMoveRound"] = 102] = "bulletMoveRound";
        AbsMoveType[AbsMoveType["BulletMoveTarget"] = 103] = "BulletMoveTarget";
        return AbsMoveType;
      }({}));

      tempPos = new Vec3();
      tempPos1 = new Vec3();
      /** 移动 （默认就是速率移动） */

      _export("AbsMove", AbsMove = class AbsMove {
        constructor(sType) {
          this.moveType = void 0;
          this.abs = void 0;
          this.moveType = sType;
        }

        setAbs(abs) {
          this.abs = abs;
        }

        init() {}

        setAbsPos(v3) {
          this.abs.setPosition(v3);
        }

        updateFrame(dt) {
          this.fly(dt);

          if (this.checkComplete()) {
            this.onFlyComplete();
          }
        }

        fly(dt) {}

        onFlyComplete() {
          this.abs.onMoveComplete();
        }
        /** 检查是否完成 */


        checkComplete() {
          return false;
        }

      });

      _export("BulletMove", BulletMove = class BulletMove extends AbsMove {
        constructor() {
          super(...arguments);
          this.lifeTime = 0;
          this.passTime = 0;
          this.abs = void 0;
        }

        setLiftTime(t) {
          this.lifeTime = t;
          this.passTime = 0;
        }

        updateFrame(dt) {
          this.passTime = this.passTime + dt;
          super.updateFrame(dt);
          this.checkRotate();
        }

        checkRotate() {
          if (this.abs == null || this.abs && this.abs.isDead) {
            return;
          }

          if (this.abs.info.isRotate()) {
            this.abs.addAngle(this.abs.info.configTab.Rotate);
          }
        }

        checkComplete() {
          if (this.abs.info.isTimeDeath()) {
            if (this.passTime >= this.lifeTime) {
              return true;
            }
          } else if (this.abs.info.isHitDeath()) {
            if (ScreenUtil.isOutOfScreenThird(this.abs.getTruePosition())) {
              this.abs.OutOfScreen = true;
              return true;
            }
          } //判定是否到达目标


          return false;
        }

        traceDirection(startPos, targetPos) {
          Vec3.subtract(tempPos, targetPos, startPos);
          tempPos.normalize();
          this.abs.setVelocityAndRatio(tempPos, 1);
        }

        setVoAngle(angle) {
          this.abs.setVelocityAngle(angle);
        }

      });

      _export("MonsterMoveLine", MonsterMoveLine = class MonsterMoveLine extends AbsMove {
        constructor() {
          super(AbsMoveType.velocity);
          this.abs = void 0;
        }

        updateFrame(dt) {
          super.updateFrame(dt);
        }

        fly(dt) {
          if (this.abs.isBeatBack || this.abs.isReviceBeatBack) {
            return;
          } //计算新位置


          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.abs.getPosition(), this.abs.velocity, dt, this.abs.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttrType.AttrType_SpeedMoveAdd));
          this.setAbsPos(tempPos);
        }

        checkComplete() {
          //判定是否到达目标
          return false;
        }

      });

      _export("BorderType", BorderType = /*#__PURE__*/function (BorderType) {
        BorderType[BorderType["empty"] = 0] = "empty";
        BorderType[BorderType["leftRight"] = 1] = "leftRight";
        BorderType[BorderType["upDown"] = 2] = "upDown";
        return BorderType;
      }({}));
      /** 满屏再三分之一 */


      _export("ScreenUtil", ScreenUtil = class ScreenUtil {
        /** 是否超出屏幕三分之一 */
        static isOutOfScreenThird(pos) {
          if (Math.abs(pos.x) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).hirdSize.width || Math.abs(pos.y) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).hirdSize.height) {
            return true;
          }

          return false;
        }
        /** 是否超出屏幕 */


        static isOutOfScreen(pos) {
          if (Math.abs(pos.x) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.width || Math.abs(pos.y) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height) {
            return true;
          }

          return false;
        }
        /** 获取超出屏幕的类型 */


        static getOutOfScreenType(pos) {
          if (Math.abs(pos.x) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.width) {
            return BorderType.leftRight;
          } else if (Math.abs(pos.y) > (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfSize.height) {
            return BorderType.upDown;
          }

          return BorderType.empty;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=c5bd893d59cf5d977efaf94ce447181b96a08e47.js.map