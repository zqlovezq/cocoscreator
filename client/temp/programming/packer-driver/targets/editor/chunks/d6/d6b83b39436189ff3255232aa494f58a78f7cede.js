System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, Vec3, PvpObj, PvpObjType, tab, PvpMove, PvpMoveCircle, PvpMoveLine, FightMacro, _dec, _class, _crd, ccclass, property, tempPos, PvpBullet;

  function _reportPossibleCrUseOfPvpObj(extras) {
    _reporterNs.report("PvpObj", "./PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpObjType(extras) {
    _reporterNs.report("PvpObjType", "./PvpObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfproto(extras) {
    _reporterNs.report("proto", "client_protocol", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpMove(extras) {
    _reporterNs.report("PvpMove", "../move/PvpMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpMoveCircle(extras) {
    _reporterNs.report("PvpMoveCircle", "../move/PvpMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPvpMoveLine(extras) {
    _reporterNs.report("PvpMoveLine", "../move/PvpMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../../define/FightDefine", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      PvpObj = _unresolved_2.PvpObj;
      PvpObjType = _unresolved_2.PvpObjType;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }, function (_unresolved_4) {
      PvpMove = _unresolved_4.PvpMove;
      PvpMoveCircle = _unresolved_4.PvpMoveCircle;
      PvpMoveLine = _unresolved_4.PvpMoveLine;
    }, function (_unresolved_5) {
      FightMacro = _unresolved_5.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "aab19rPLs5CHZVJV9LIyx/E", "PvpBullet", undefined);

      __checkObsolete__(['_decorator', 'Component', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();

      _export("PvpBullet", PvpBullet = (_dec = ccclass('PvpBullet'), _dec(_class = class PvpBullet extends (_crd && PvpObj === void 0 ? (_reportPossibleCrUseOfPvpObj({
        error: Error()
      }), PvpObj) : PvpObj) {
        constructor(...args) {
          super(...args);
          this.objType = (_crd && PvpObjType === void 0 ? (_reportPossibleCrUseOfPvpObjType({
            error: Error()
          }), PvpObjType) : PvpObjType).bullet;
          this.configTab = void 0;

          /** 开始位置 */
          this.startPos = new Vec3();
          this.fl = void 0;
          this.move = void 0;
        }

        reset() {
          super.reset();
          this.fl = null;
          this.move = null;
          this.startPos.set(Vec3.ZERO);

          if (this.isMaskParent()) {
            let parent = this.node.parent;
            this.node.removeFromParent();
            parent.destroy();
          }
        }

        setFl(fl) {
          this.isDead = true;
          this.fl = fl;
          this.configTab = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BulletTableById.getValue(fl.bulletId); // this.speed = this.configTab.Speed

          this.speed = 0;
          tempPos.x = this.fl.x;
          tempPos.y = this.fl.y;
          tempPos.z = 0;
          (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
            error: Error()
          }), FightMacro) : FightMacro).serverPostion(tempPos);
          this.setStartPos(tempPos); // this.setVelocityAngle(this.fl.angle)
        }

        init() {
          super.init();
          this.playAnim(this.fl.walkAnimId);
        }

        isMaskParent() {
          return this.node && this.node.parent && this.node.parent.name == "BulletLaunchMask";
        }

        setStartPos(pos) {
          this.startPos.set(pos);

          if (this.isMaskParent()) {
            this.node.parent.position = pos;
            tempPos.set(Vec3.ZERO);
            this.setPosition(tempPos);
          } else {
            this.setPosition(pos);
          }
        }

        updateFrame(dt) {
          if (this.isDead) {
            return;
          }

          super.updateFrame(dt);
          this.move && this.move.updateFrame(dt);
        }

        setVelocity(ve) {
          super.setVelocity(ve);
          this.checkNodeAngle();
        }

        setVelocityAngle(angle) {
          super.setVelocityAngle(angle);
          this.checkNodeAngle();
        }

        checkNodeAngle() {
          if (this.isMaskParent() || this.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_StraightLine || this.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Laser || this.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Trajectory) {
            this.setAngle(this.voAngle);
          }
        }

        run() {
          this.move = this.getMove(this.configTab.Trajectory);
          this.isDead = false;
        }

        getMove(moveType) {
          let absMove;

          if (moveType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_StraightLine) {
            if (this.configTab.Centrifugation.length > 0) {
              absMove = new (_crd && PvpMoveCircle === void 0 ? (_reportPossibleCrUseOfPvpMoveCircle({
                error: Error()
              }), PvpMoveCircle) : PvpMoveCircle)();
            } else {
              absMove = new (_crd && PvpMoveLine === void 0 ? (_reportPossibleCrUseOfPvpMoveLine({
                error: Error()
              }), PvpMoveLine) : PvpMoveLine)();
            }
          } else {
            absMove = new (_crd && PvpMove === void 0 ? (_reportPossibleCrUseOfPvpMove({
              error: Error()
            }), PvpMove) : PvpMove)();
          }

          absMove.setAbs(this);
          absMove.init();
          return absMove;
        }

        getLiveTime() {
          if (this.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Trajectory) {
            let total = 0;
            this.configTab.LiveTime.forEach(v => {
              total += v;
            });
            return total;
          }

          return this.configTab.LiveTime[0];
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=d6b83b39436189ff3255232aa494f58a78f7cede.js.map