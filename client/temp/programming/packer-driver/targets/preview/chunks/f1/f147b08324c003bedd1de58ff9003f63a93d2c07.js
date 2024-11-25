System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "__unresolved_18", "__unresolved_19", "__unresolved_20", "__unresolved_21", "__unresolved_22", "__unresolved_23", "__unresolved_24", "__unresolved_25", "__unresolved_26", "__unresolved_27", "__unresolved_28", "__unresolved_29"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, _decorator, js, PhysicsSystem, Vec3, Func, Trigger, AbsObj, AbsObjType, AbsMoveType, BulletMove, BulletMoveLine, tab, BulletState101Born, BulletState102Move, BulletState103Boom, AbsStateType, BulletMoveRound, BulletMoveTarget, BulletControl, BulletTargetType, BulletMoveCentrifugation, DamageCalculation, AbsObjInfoAttr, DamageLab, BulletForwardArrow, CollisionGroup, MathAngle, ShapeType, BulletMoveForwardOwner, EventMgr, FightEvent, FightData, BuffControl, BuletMoveLaser, Sound, BuletMoveTrackLaser, Random, _dec, _class, _crd, ccclass, property, tempPos, Bullet;

  function _reportPossibleCrUseOfFunc(extras) {
    _reporterNs.report("Func", "../../../../utils/Func", _context.meta, extras);
  }

  function _reportPossibleCrUseOfTrigger(extras) {
    _reporterNs.report("Trigger", "../../../../../framework/collision/CollisionObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionBody(extras) {
    _reporterNs.report("CollisionBody", "../../../../../framework/collision/CollisionBody", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsMoveType(extras) {
    _reporterNs.report("AbsMoveType", "../../move/AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMove(extras) {
    _reporterNs.report("BulletMove", "../../move/AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMoveLine(extras) {
    _reporterNs.report("BulletMoveLine", "../../move/bullet/BulletMoveLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletState101Born(extras) {
    _reporterNs.report("BulletState101Born", "./state/BulletState101Born", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletState102Move(extras) {
    _reporterNs.report("BulletState102Move", "./state/BulletState102Move", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletState103Boom(extras) {
    _reporterNs.report("BulletState103Boom", "./state/BulletState103Boom", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletInfo(extras) {
    _reporterNs.report("BulletInfo", "./BulletInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMoveRound(extras) {
    _reporterNs.report("BulletMoveRound", "../../move/bullet/BulletMoveRound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMoveTarget(extras) {
    _reporterNs.report("BulletMoveTarget", "../../move/bullet/BulletMoveTarget", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "./BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTargetType(extras) {
    _reporterNs.report("BulletTargetType", "./BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMoveCentrifugation(extras) {
    _reporterNs.report("BulletMoveCentrifugation", "../../move/bullet/BulletMoveCentrifugation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageCalculation(extras) {
    _reporterNs.report("DamageCalculation", "../../damage/DamageCalculation", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjInfoAttr(extras) {
    _reporterNs.report("AbsObjInfoAttr", "../AbsObjInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageLab(extras) {
    _reporterNs.report("DamageLab", "../../damage/DamageLab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletForwardArrow(extras) {
    _reporterNs.report("BulletForwardArrow", "../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionGroup(extras) {
    _reporterNs.report("CollisionGroup", "../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMathAngle(extras) {
    _reporterNs.report("MathAngle", "../../../../../framework/collision/Maths", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShapeType(extras) {
    _reporterNs.report("ShapeType", "../../../../../framework/collision/CollisionShape", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsOwner(extras) {
    _reporterNs.report("AbsOwner", "../AbsOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageData(extras) {
    _reporterNs.report("DamageData", "../../damage/DamageData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletMoveForwardOwner(extras) {
    _reporterNs.report("BulletMoveForwardOwner", "../../move/bullet/BulletMoveForwardOwner", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuffControl(extras) {
    _reporterNs.report("BuffControl", "../../buff/BuffControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuletMoveLaser(extras) {
    _reporterNs.report("BuletMoveLaser", "../../move/bullet/BuletMoveLaser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../../../../utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBuletMoveTrackLaser(extras) {
    _reporterNs.report("BuletMoveTrackLaser", "../../move/bullet/BuletMoveTrackLaser", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRandom(extras) {
    _reporterNs.report("Random", "../../../util/Random", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      _decorator = _cc._decorator;
      js = _cc.js;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      Func = _unresolved_2.Func;
    }, function (_unresolved_3) {
      Trigger = _unresolved_3.Trigger;
    }, function (_unresolved_4) {
      AbsObj = _unresolved_4.AbsObj;
      AbsObjType = _unresolved_4.AbsObjType;
    }, function (_unresolved_5) {
      AbsMoveType = _unresolved_5.AbsMoveType;
      BulletMove = _unresolved_5.BulletMove;
    }, function (_unresolved_6) {
      BulletMoveLine = _unresolved_6.BulletMoveLine;
    }, function (_unresolved_7) {
      tab = _unresolved_7.tab;
    }, function (_unresolved_8) {
      BulletState101Born = _unresolved_8.BulletState101Born;
    }, function (_unresolved_9) {
      BulletState102Move = _unresolved_9.BulletState102Move;
    }, function (_unresolved_10) {
      BulletState103Boom = _unresolved_10.BulletState103Boom;
    }, function (_unresolved_11) {
      AbsStateType = _unresolved_11.AbsStateType;
    }, function (_unresolved_12) {
      BulletMoveRound = _unresolved_12.BulletMoveRound;
    }, function (_unresolved_13) {
      BulletMoveTarget = _unresolved_13.BulletMoveTarget;
    }, function (_unresolved_14) {
      BulletControl = _unresolved_14.BulletControl;
      BulletTargetType = _unresolved_14.BulletTargetType;
    }, function (_unresolved_15) {
      BulletMoveCentrifugation = _unresolved_15.BulletMoveCentrifugation;
    }, function (_unresolved_16) {
      DamageCalculation = _unresolved_16.DamageCalculation;
    }, function (_unresolved_17) {
      AbsObjInfoAttr = _unresolved_17.AbsObjInfoAttr;
    }, function (_unresolved_18) {
      DamageLab = _unresolved_18.DamageLab;
    }, function (_unresolved_19) {
      BulletForwardArrow = _unresolved_19.BulletForwardArrow;
      CollisionGroup = _unresolved_19.CollisionGroup;
    }, function (_unresolved_20) {
      MathAngle = _unresolved_20.MathAngle;
    }, function (_unresolved_21) {
      ShapeType = _unresolved_21.ShapeType;
    }, function (_unresolved_22) {
      BulletMoveForwardOwner = _unresolved_22.BulletMoveForwardOwner;
    }, function (_unresolved_23) {
      EventMgr = _unresolved_23.EventMgr;
    }, function (_unresolved_24) {
      FightEvent = _unresolved_24.FightEvent;
    }, function (_unresolved_25) {
      FightData = _unresolved_25.FightData;
    }, function (_unresolved_26) {
      BuffControl = _unresolved_26.BuffControl;
    }, function (_unresolved_27) {
      BuletMoveLaser = _unresolved_27.BuletMoveLaser;
    }, function (_unresolved_28) {
      Sound = _unresolved_28.default;
    }, function (_unresolved_29) {
      BuletMoveTrackLaser = _unresolved_29.BuletMoveTrackLaser;
    }, function (_unresolved_30) {
      Random = _unresolved_30.Random;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "78e86Lf/H9AgoUykh/K+khN", "Bullet", undefined);

      __checkObsolete__(['_decorator', 'absMax', 'instantiate', 'js', 'Layers', 'Node', 'PhysicsSystem', 'Prefab', 'Quat', 'sp', 'Vec3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);

      _export("Bullet", Bullet = (_dec = ccclass('Bullet'), _dec(_class = class Bullet extends (_crd && AbsObj === void 0 ? (_reportPossibleCrUseOfAbsObj({
        error: Error()
      }), AbsObj) : AbsObj) {
        constructor() {
          super(...arguments);
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).bullet;
          this.move = void 0;
          this.info = void 0;

          /** 子弹唯一id */
          this.bulletSoleId = void 0;

          /** 子弹所有人 */
          this.owner = void 0;
          this.bulletTargetType = (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
            error: Error()
          }), BulletTargetType) : BulletTargetType).default;

          /** 目标 */
          this.targetRole = void 0;

          /** 目标位置 */
          this.targetPos = new Vec3();

          /** 开始位置 */
          this.startPos = new Vec3();

          /** 伤害过的对象 */
          this.havaDamageObjIds = new Array();

          /** 命中次数 */
          this.hitCount = 0;
          this.isCanTrigger = true;

          /** 飞出屏幕 */
          this.OutOfScreen = false;
          this.hitBackIds = new Map();
          this.ignoreTriggerTime = 0;
          this.isOwnDeath = false;
        }

        reset() {
          super.reset();
          this.hitCount = 0;
          this.havaDamageObjIds.length = 0;
          this.OutOfScreen = false;
          this.targetRole = null;
          this.targetPos.x = this.targetPos.y = this.targetPos.z = 0;
          this.startPos.x = this.startPos.y = this.startPos.z = 0;
          this.hitBackIds.clear();

          if (this.isMaskParent()) {
            var parent = this.node.parent;
            this.node.removeFromParent();
            parent.destroy();
          }
        }

        initMachine() {
          super.initMachine();
          this.stateMachine.addState(new (_crd && BulletState101Born === void 0 ? (_reportPossibleCrUseOfBulletState101Born({
            error: Error()
          }), BulletState101Born) : BulletState101Born)());
          this.stateMachine.addState(new (_crd && BulletState102Move === void 0 ? (_reportPossibleCrUseOfBulletState102Move({
            error: Error()
          }), BulletState102Move) : BulletState102Move)());
          this.stateMachine.addState(new (_crd && BulletState103Boom === void 0 ? (_reportPossibleCrUseOfBulletState103Boom({
            error: Error()
          }), BulletState103Boom) : BulletState103Boom)());
        }

        setObjInfo(_info) {
          super.setObjInfo(_info); // this.setBounds(this.info.configTab.Bounds)

          this.setBoundTabs();
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBorn, this.info.configTab.BornAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletMove, this.info.configTab.WalkAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBoom, this.info.configTab.DeadAnimationId);
        }

        setBoundTabs() {
          this.isCanTrigger = false;
          var bound = this.info.configTab.boundTabs[0];

          if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Circle) {
            this.type = (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Sphere;
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
            this.radius = bound.Parameters[2];

            if (this.center.x != 0 || this.center.y != 0 || this.radius != 0) {
              this.isCanTrigger = true;
            }
          } else if (bound.Type == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).BoundType.BoundType_Rectangle) {
            this.type = (_crd && ShapeType === void 0 ? (_reportPossibleCrUseOfShapeType({
              error: Error()
            }), ShapeType) : ShapeType).Box;
            this.center.x = bound.Parameters[0];
            this.center.y = bound.Parameters[1];
            this.size.x = bound.Parameters[2];
            this.size.y = bound.Parameters[3];

            if (this.center.x != 0 || this.center.y != 0 || this.size.x != 0 || this.size.y != 0) {
              this.isCanTrigger = true;
            } // this.center.x = 0
            // this.center.y = 0
            // this.size.x = 100
            // this.size.y = 20

          }
        }

        init() {
          this.speed = this.info.configTab.Speed;
          this.group = PhysicsSystem.PhysicsGroup[(_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
            error: Error()
          }), CollisionGroup) : CollisionGroup).roleBullet];
          this.setTrigger(this.isCanTrigger);
          this.initBoby();
          this.isDead = true;
          this.bulletSoleId = js.formatStr("%s_%s_%s", this.body.id, this.configId, (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).random(1, 100000));
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
          if (this.isMaskParent() || this.info.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_StraightLine || this.info.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Laser || this.info.configTab.Trajectory == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Trajectory.Trajectory_Trajectory) {
            this.setAngle(this.voAngle);
          }
        }

        isMaskParent() {
          return this.node && this.node.parent && this.node.parent.name == "BulletLaunchMask";
        }

        setAngle(angle) {
          if (this.isMaskParent()) {
            this.voAngle = 0;
            super.setAngle(this.voAngle);
            (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).angleToDirection(this.voAngle, this.velocity);
            this.velocity.multiplyScalar(this.speed * this.voRatio);
            this.node.parent.angle = angle;
          } else {
            super.setAngle(angle);
          }
        }

        setAbsOnwer(owner) {
          this.owner = owner;

          if (owner && owner.abs && owner.abs.isDead) {
            owner.lockAttr();
          }
        }

        getTruePosition() {
          if (this.isMaskParent()) {
            (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
              error: Error()
            }), MathAngle) : MathAngle).rotatePoint(this.node.position, this.node.parent.angle, tempPos);
            tempPos.add(this.node.parent.position); // console.log("实际位置", tempPos.x, tempPos.y, "遮罩位置", this.node.parent.position.x, this.node.parent.position.y, "节点位置", this.node.position.x, this.node.position.y)

            return tempPos;
          } else {
            return this.getPosition();
          }
        }

        setStartPos(pos) {
          this.startPos.set(pos);

          if (this.isMaskParent()) {
            this.node.parent.position = this.startPos;
            tempPos.set(Vec3.ZERO);
            this.setPosition(tempPos);
            this.getTruePosition();
          } else {
            this.setPosition(this.startPos);
          }
        }

        setTargetType(type, target) {
          this.bulletTargetType = type;
          this.setTargetRole(null);
          this.setTargetPos(null);

          if (this.info.configTab.isSearchNone() && !this.info.configTab.isExtends()) {
            this.bulletTargetType = (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).default;
            return;
          }

          switch (type) {
            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).role:
              this.setTargetRole(target);
              break;

            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).pos:
              this.setTargetPos(target);
              break;

            case (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).angle:
              this.voAngle = target;
              break;
          }
        }

        setTargetPos(pos) {
          if (pos == null) {
            this.targetPos.set(0, 0, 0);
            return;
          }

          this.targetPos.set(pos);
        }

        setTargetRole(abs) {
          this.targetRole = abs;
        }

        getBulletGroup() {
          //ToDo  正常角色发出的子弹为roleBullet, 怪物子弹为monsterBullet    roleBullet碰撞怪物， monsterBullet碰撞角色
          var bulletGroup = (_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
            error: Error()
          }), CollisionGroup) : CollisionGroup).roleBullet;

          if (this.info.configTab.EffectUnit == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectUnit.EffectUnit_Mine) {
            //自身
            if (this.owner.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).role) {
              bulletGroup = (_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
                error: Error()
              }), CollisionGroup) : CollisionGroup).monsterBullet;
            }
          } else if (this.info.configTab.EffectUnit == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectUnit.EffectUnit_Friend) {
            //友方
            if (this.owner.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).role) {
              bulletGroup = (_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
                error: Error()
              }), CollisionGroup) : CollisionGroup).monsterBullet;
            }
          } else if (this.info.configTab.EffectUnit == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).EffectUnit.EffectUnit_Enemy) {
            //敌方
            if (this.owner.objType == (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
              error: Error()
            }), AbsObjType) : AbsObjType).enemy) {
              bulletGroup = (_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
                error: Error()
              }), CollisionGroup) : CollisionGroup).monsterBullet;
            }
          }

          return bulletGroup;
        }

        forwardArrowOffset() {
          var offsety = this.info.getObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
            error: Error()
          }), AbsObjInfoAttr) : AbsObjInfoAttr).forwardArrowOffsetY);

          if (offsety == 0) {
            return;
          }

          var offsetAngle = (offsety > 0 ? 90 : -90) + this.voAngle;
          (_crd && MathAngle === void 0 ? (_reportPossibleCrUseOfMathAngle({
            error: Error()
          }), MathAngle) : MathAngle).angleToDirection(offsetAngle, tempPos);
          tempPos.multiplyScalar(Math.abs(offsety));
          this.startPos.add(tempPos);
          this.setPosition(this.startPos);
        }

        targetDirection() {
          if (this.bulletTargetType == (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
            error: Error()
          }), BulletTargetType) : BulletTargetType).angle) {
            this.setVelocityAngle(this.voAngle);
          } else if (this.bulletTargetType == (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
            error: Error()
          }), BulletTargetType) : BulletTargetType).pos) {
            this.traceDirection(this.startPos, this.targetPos);
          } else if (this.bulletTargetType == (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
            error: Error()
          }), BulletTargetType) : BulletTargetType).role) {
            this.traceDirection(this.startPos, this.targetRole.getHitPos());
          }
        }

        run() {
          this.isOwnDeath = this.info.isOwnDeath();

          if (this.info.isForwardOwner()) {
            this.bulletTargetType = (_crd && BulletTargetType === void 0 ? (_reportPossibleCrUseOfBulletTargetType({
              error: Error()
            }), BulletTargetType) : BulletTargetType).owner;
          }

          this.updateGroup(this.getBulletGroup());
          this.targetDirection();
          this.isDead = false;

          if (this.info.isForwardArrowAndType((_crd && BulletForwardArrow === void 0 ? (_reportPossibleCrUseOfBulletForwardArrow({
            error: Error()
          }), BulletForwardArrow) : BulletForwardArrow).intersect)) {
            //多向剑相交， 需要先设置发射点偏移量
            this.forwardArrowOffset();
            this.targetDirection();
          }

          this.move = this.getMove(this.info.configTab.Trajectory);

          if (this.info.isForwardArrowAndType((_crd && BulletForwardArrow === void 0 ? (_reportPossibleCrUseOfBulletForwardArrow({
            error: Error()
          }), BulletForwardArrow) : BulletForwardArrow).parallel)) {
            //多向剑平行，朝向角度计算完之后， 设置发射点偏移量
            this.forwardArrowOffset();
          } //设置正向剑属性


          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBorn);
        }

        updateFrame(dt) {
          if (this.isDead) {
            return;
          }

          if (this.owner && !this.owner.isLock) {
            //来源属性非锁定状态， 并且发射者已死亡
            if (this.owner.abs && this.owner.abs.isDead) {
              this.recycle();
              return;
            }
          }

          super.updateFrame(dt);
        }

        getMove(moveType) {
          var absMove;

          if (this.info.isForwardOwner()) {
            absMove = new (_crd && BulletMoveForwardOwner === void 0 ? (_reportPossibleCrUseOfBulletMoveForwardOwner({
              error: Error()
            }), BulletMoveForwardOwner) : BulletMoveForwardOwner)();
          } else if (this.info.isCentrifugation()) {
            absMove = new (_crd && BulletMoveCentrifugation === void 0 ? (_reportPossibleCrUseOfBulletMoveCentrifugation({
              error: Error()
            }), BulletMoveCentrifugation) : BulletMoveCentrifugation)();
          } else if (this.info.isRound()) {
            absMove = new (_crd && BulletMoveRound === void 0 ? (_reportPossibleCrUseOfBulletMoveRound({
              error: Error()
            }), BulletMoveRound) : BulletMoveRound)();
          } else {
            if (moveType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Trajectory.Trajectory_StraightLine) {
              absMove = new (_crd && BulletMoveLine === void 0 ? (_reportPossibleCrUseOfBulletMoveLine({
                error: Error()
              }), BulletMoveLine) : BulletMoveLine)();
            } else if (moveType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Trajectory.Trajectory_Trackless) {
              absMove = new (_crd && BulletMoveTarget === void 0 ? (_reportPossibleCrUseOfBulletMoveTarget({
                error: Error()
              }), BulletMoveTarget) : BulletMoveTarget)();
            } else if (moveType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Trajectory.Trajectory_Laser) {
              absMove = new (_crd && BuletMoveLaser === void 0 ? (_reportPossibleCrUseOfBuletMoveLaser({
                error: Error()
              }), BuletMoveLaser) : BuletMoveLaser)();
            } else if (moveType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Trajectory.Trajectory_Trajectory) {
              absMove = new (_crd && BuletMoveTrackLaser === void 0 ? (_reportPossibleCrUseOfBuletMoveTrackLaser({
                error: Error()
              }), BuletMoveTrackLaser) : BuletMoveTrackLaser)();
            } else {
              absMove = new (_crd && BulletMove === void 0 ? (_reportPossibleCrUseOfBulletMove({
                error: Error()
              }), BulletMove) : BulletMove)((_crd && AbsMoveType === void 0 ? (_reportPossibleCrUseOfAbsMoveType({
                error: Error()
              }), AbsMoveType) : AbsMoveType).default);
            }
          }

          absMove.setAbs(this);
          absMove.setLiftTime(this.info.getLiveTime());
          absMove.init();
          return absMove;
        }

        onMoveComplete() {
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBoom);
        }

        onTrigger(b, trigger) {
          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).exit) return;
          var defanseAbs = b.object;

          if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).enter) {
            this.onHitRole(defanseAbs);
          } else if (trigger == (_crd && Trigger === void 0 ? (_reportPossibleCrUseOfTrigger({
            error: Error()
          }), Trigger) : Trigger).stay) {
            if (this.info.configTab.DamageTick > 0) {
              if (defanseAbs.checkDamageTick(this.bulletSoleId)) {
                return;
              }

              this.onHitRole(defanseAbs);
            }
          }
        }
        /**
         * 命中角色
         * @param defanseAbs 
         */


        onHitRole(defanseAbs) {
          if (defanseAbs.info.isInvincible()) {
            return;
          }

          if (defanseAbs.checkParentSoleId(this.info.parentSoleId) != 0) {
            // console.log("父对象已伤害过")
            return;
          }

          if (this.info.isOlnyOne() && defanseAbs.checkBulletDamageGroup(this.info.groupId)) {
            // console.log("子弹组已伤害过")
            return;
          }

          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.PlayHitEffect(this.info.hitSound());

          if (this.owner.abs && !this.owner.abs.isDead) {
            this.owner.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_AtHIT, {
              otherAbsInfo: defanseAbs.info
            });
          }

          var damageData;

          if (this.info.configTab.DamageScale.length > 0) {
            super.onHitRole(defanseAbs);
            defanseAbs.info.beHitFront(this);
            this.endDamegeObj = defanseAbs;
            var damageAmount = this.info.configTab.DamageAmount + 1;

            for (var index = 0; index < damageAmount; index++) {
              damageData = (_crd && DamageCalculation === void 0 ? (_reportPossibleCrUseOfDamageCalculation({
                error: Error()
              }), DamageCalculation) : DamageCalculation).bullet_damageCalculate(this, defanseAbs, index);

              if (damageData) {
                //目前只有眩晕
                (_crd && BuffControl === void 0 ? (_reportPossibleCrUseOfBuffControl({
                  error: Error()
                }), BuffControl) : BuffControl).ins.addBuff(damageData.addBuffTab, this.owner.objId, defanseAbs);
                defanseAbs.info.onHitDamage(damageData);
                (_crd && DamageLab === void 0 ? (_reportPossibleCrUseOfDamageLab({
                  error: Error()
                }), DamageLab) : DamageLab).addShowDamageNum(damageData, defanseAbs, index);
              }
            }
          } else {// console.log("碰撞角色，但是没有伤害")
          }

          if (damageData && damageData.isDamage() && damageData.damage >= 0) {
            defanseAbs.setIsHit(this.info.configTab.HitShake);

            if (defanseAbs.isMonster()) {
              if (!defanseAbs.info.configTab.IsDefeat) {
                defanseAbs.beatBackSpeed = defanseAbs.curBearFrame = 0;
              }

              if (defanseAbs.info.configTab.IsHitBack && !this.hitBackIds.has(defanseAbs.objId)) {
                if (this.info.configTab.isHitBack()) {
                  tempPos.x = this.info.configTab.HitBack[1];
                  tempPos.z = this.info.configTab.HitBack[0];
                  tempPos.y = 0;
                  defanseAbs.setSkillBearBack(true, tempPos);
                  this.hitBackIds.set(defanseAbs.objId, 1);
                } else if ((_crd && Random === void 0 ? (_reportPossibleCrUseOfRandom({
                  error: Error()
                }), Random) : Random).isSuccess(this.owner.getAttrData().getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                  error: Error()
                }), tab) : tab).AttrType.AttrType_HitBackChance))) {
                  tempPos.x = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().GetKeyValue_ConfigTable().NormalHitBack[1];
                  tempPos.z = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                    error: Error()
                  }), tab) : tab).getData().GetKeyValue_ConfigTable().NormalHitBack[0];
                  tempPos.y = 0;
                  defanseAbs.setSkillBearBack(true, tempPos);
                  this.hitBackIds.set(defanseAbs.objId, 1);
                }
              }
            }
          }

          if (defanseAbs.isDead) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Kill, damageData, this.owner, defanseAbs);
          }

          if (!defanseAbs.isDead && this.info.configTab.DamageTick) {
            defanseAbs.addDamageTick(this.bulletSoleId, this.info.configTab.DamageTick);
          }

          defanseAbs.info.beHitBack(this);
          (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.checkHitTrigger(this);

          if (this.info.isHitDeath()) {
            this.info.addObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
              error: Error()
            }), AbsObjInfoAttr) : AbsObjInfoAttr).hitCount, 1);

            if (this.info.isPenetrationDeath()) {
              //穿透完毕
              if (this.info.isCatapult()) {
                // 检测是否弹射
                this.info.addObjAttr((_crd && AbsObjInfoAttr === void 0 ? (_reportPossibleCrUseOfAbsObjInfoAttr({
                  error: Error()
                }), AbsObjInfoAttr) : AbsObjInfoAttr).catapultCount, 1);

                if (!this.info.isCatapultDeath()) {
                  //还有弹射次数
                  (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
                    error: Error()
                  }), BulletControl) : BulletControl).ins.addCatapult(this, defanseAbs);
                  return;
                }
              }

              this.move.onFlyComplete();
            }
          }
        }

        /** 子弹所有人死亡 */
        onOwnerDeal() {
          this.owner.lockAttr();

          if (this.isOwnDeath) {
            this.move.onFlyComplete();
          }
        }

        preCollider() {
          if (this.ignoreTrigger && this.isCollisionInterval()) {
            if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time - this.ignoreTriggerTime >= this.info.configTab.CollisionInterval) {
              this.setIgnoreTrigger(false);
            }
          }
        }

        lateCollider() {
          if (this.isCollisionInterval() && !this.ignoreTrigger) {
            this.setIgnoreTrigger(true);
            this.ignoreTriggerTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
              error: Error()
            }), FightData) : FightData).time;
          }
        }

        isCollisionInterval() {
          if (!this.isDead && this.info) {
            return this.info.configTab.CollisionInterval > 0;
          }

          return super.isCollisionInterval();
        }

        avatarUpdate() {
          if (this.animationId > 0 && this.avatar && this.avatar.animTab) {
            var zIndex = 0;

            switch (this.avatar.animTab.Type) {
              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_SkeletonData:
                zIndex = 1;
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_Plist:
                zIndex = 2;
                break;

              case (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).AnimationType.AnimationType_SpriteFrame:
                zIndex = 3;
                break;
            }

            (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
              error: Error()
            }), Func) : Func).setzIndex(this.node, zIndex);
          }
        }

        addHitCount() {
          this.hitCount += 1;
        }
        /** 添加一个伤害目标id */


        addHavaDamageObjId(objId) {
          (_crd && Func === void 0 ? (_reportPossibleCrUseOfFunc({
            error: Error()
          }), Func) : Func).remove(this.havaDamageObjIds, objId);
          this.havaDamageObjIds.push(objId);
        }

        addhavaDamageObjIds(objIds) {
          if (objIds) {
            for (var index = 0; index < objIds.length; index++) {
              var element = objIds[index];
              this.addHavaDamageObjId(element);
            }
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f147b08324c003bedd1de58ff9003f63a93d2c07.js.map