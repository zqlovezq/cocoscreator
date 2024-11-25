System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, PhysicsSystem, Vec3, _decorator, AbsRole, AbsObjType, AbsStateType, MonsterState2Move, MonsterHunt, MonsterState1Idle, MonsterState3Attack, MonsterState4Dead, MonsterState5Born, MonsterState6Revive, CollisionGroup, MonsterState7SkillCd, MonsterState9BackJump, RoleState10Vertigo, FixedUtil, _dec, _class, _crd, ccclass, property, tempPos, Monster;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState2Move(extras) {
    _reporterNs.report("MonsterState2Move", "./state/MonsterState2Move", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterHunt(extras) {
    _reporterNs.report("MonsterHunt", "../../../ai/MonsterHunt", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState1Idle(extras) {
    _reporterNs.report("MonsterState1Idle", "./state/MonsterState1Idle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState3Attack(extras) {
    _reporterNs.report("MonsterState3Attack", "./state/MonsterState3Attack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState4Dead(extras) {
    _reporterNs.report("MonsterState4Dead", "./state/MonsterState4Dead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState5Born(extras) {
    _reporterNs.report("MonsterState5Born", "./state/MonsterState5Born", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState6Revive(extras) {
    _reporterNs.report("MonsterState6Revive", "./state/MonsterState6Revive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterInfo(extras) {
    _reporterNs.report("MonsterInfo", "./MonsterInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionGroup(extras) {
    _reporterNs.report("CollisionGroup", "../../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState7SkillCd(extras) {
    _reporterNs.report("MonsterState7SkillCd", "./state/MonsterState7SkillCd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterState9BackJump(extras) {
    _reporterNs.report("MonsterState9BackJump", "./state/MonsterState9BackJump", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState10Vertigo(extras) {
    _reporterNs.report("RoleState10Vertigo", "../role/state/RoleState10Vertigo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      PhysicsSystem = _cc.PhysicsSystem;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsRole = _unresolved_2.AbsRole;
    }, function (_unresolved_3) {
      AbsObjType = _unresolved_3.AbsObjType;
    }, function (_unresolved_4) {
      AbsStateType = _unresolved_4.AbsStateType;
    }, function (_unresolved_5) {
      MonsterState2Move = _unresolved_5.MonsterState2Move;
    }, function (_unresolved_6) {
      MonsterHunt = _unresolved_6.MonsterHunt;
    }, function (_unresolved_7) {
      MonsterState1Idle = _unresolved_7.MonsterState1Idle;
    }, function (_unresolved_8) {
      MonsterState3Attack = _unresolved_8.MonsterState3Attack;
    }, function (_unresolved_9) {
      MonsterState4Dead = _unresolved_9.MonsterState4Dead;
    }, function (_unresolved_10) {
      MonsterState5Born = _unresolved_10.MonsterState5Born;
    }, function (_unresolved_11) {
      MonsterState6Revive = _unresolved_11.MonsterState6Revive;
    }, function (_unresolved_12) {
      CollisionGroup = _unresolved_12.CollisionGroup;
    }, function (_unresolved_13) {
      MonsterState7SkillCd = _unresolved_13.MonsterState7SkillCd;
    }, function (_unresolved_14) {
      MonsterState9BackJump = _unresolved_14.MonsterState9BackJump;
    }, function (_unresolved_15) {
      RoleState10Vertigo = _unresolved_15.RoleState10Vertigo;
    }, function (_unresolved_16) {
      FixedUtil = _unresolved_16.FixedUtil;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "ca71cFrKzRHm7FQMHF1awGU", "Monster", undefined);

      __checkObsolete__(['Color', 'Input', 'Layers', 'Node', 'PhysicsSystem', 'Prefab', 'Quat', 'Vec3', '_decorator', 'sp', 'v2', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();

      _export("Monster", Monster = (_dec = ccclass('Monster'), _dec(_class = class Monster extends (_crd && AbsRole === void 0 ? (_reportPossibleCrUseOfAbsRole({
        error: Error()
      }), AbsRole) : AbsRole) {
        constructor(...args) {
          super(...args);
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).enemy;
          this.info = void 0;
          this.aiHunt = void 0;
          this.commonBeatBack = new Vec3();
        }

        initMachine() {
          super.initMachine();
          this.stateMachine.addState(new (_crd && MonsterState1Idle === void 0 ? (_reportPossibleCrUseOfMonsterState1Idle({
            error: Error()
          }), MonsterState1Idle) : MonsterState1Idle)());
          this.stateMachine.addState(new (_crd && MonsterState2Move === void 0 ? (_reportPossibleCrUseOfMonsterState2Move({
            error: Error()
          }), MonsterState2Move) : MonsterState2Move)());
          this.stateMachine.addState(new (_crd && MonsterState3Attack === void 0 ? (_reportPossibleCrUseOfMonsterState3Attack({
            error: Error()
          }), MonsterState3Attack) : MonsterState3Attack)());
          this.stateMachine.addState(new (_crd && MonsterState4Dead === void 0 ? (_reportPossibleCrUseOfMonsterState4Dead({
            error: Error()
          }), MonsterState4Dead) : MonsterState4Dead)());
          this.stateMachine.addState(new (_crd && MonsterState5Born === void 0 ? (_reportPossibleCrUseOfMonsterState5Born({
            error: Error()
          }), MonsterState5Born) : MonsterState5Born)());
          this.stateMachine.addState(new (_crd && MonsterState6Revive === void 0 ? (_reportPossibleCrUseOfMonsterState6Revive({
            error: Error()
          }), MonsterState6Revive) : MonsterState6Revive)());
          this.stateMachine.addState(new (_crd && MonsterState7SkillCd === void 0 ? (_reportPossibleCrUseOfMonsterState7SkillCd({
            error: Error()
          }), MonsterState7SkillCd) : MonsterState7SkillCd)());
          this.stateMachine.addState(new (_crd && MonsterState9BackJump === void 0 ? (_reportPossibleCrUseOfMonsterState9BackJump({
            error: Error()
          }), MonsterState9BackJump) : MonsterState9BackJump)());
          this.stateMachine.addState(new (_crd && RoleState10Vertigo === void 0 ? (_reportPossibleCrUseOfRoleState10Vertigo({
            error: Error()
          }), RoleState10Vertigo) : RoleState10Vertigo)());
          this.aiHunt = new (_crd && MonsterHunt === void 0 ? (_reportPossibleCrUseOfMonsterHunt({
            error: Error()
          }), MonsterHunt) : MonsterHunt)();
          this.aiHunt.setAbs(this);
          this.avatar.setFlashWhite(true);
        }

        setObjInfo(_info) {
          super.setObjInfo(_info);
          this.setBounds(this.info.configTab.Bounds);
          this.setStateAllAnimdId(this.info.configTab);
        }

        setStateAllAnimdId(conf) {
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleIdle, conf.IdleAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleMove, conf.WalkAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleDead, conf.DeadAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBorn, conf.BornAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleRevive, conf.BornAnimationId);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleVertigo, conf.IdleAnimationId);
        }

        init() {
          this.speed = this.info.speed;
          this.group = PhysicsSystem.PhysicsGroup[(_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
            error: Error()
          }), CollisionGroup) : CollisionGroup).monster];
          this.initBoby();
          this.setTrigger(true);
        }

        updateFrame(dt) {
          super.updateFrame(dt);

          if (this.isReviceBeatBack) {
            this.updateReviceBeatBack(dt);
          }
        }

        setReviceBeatBack(bo) {
          if (bo) {
            this.beatBackVelocity.x = this.info.configTab.ReviveDefeatDistance;
            this.beatBackVelocity.y = 0;
            this.beatBackVelocity.z = 500;
          }

          this.setCommonBeatBack(bo);
        }

        beatBackUpdate(dt) {
          if (this.isReviceBeatBack) {
            this.isBeatBack = false;
            return;
          }

          super.beatBackUpdate(dt);
        }

        updateReviceBeatBack(dt) {
          this.reviceBeatTime += dt;
          (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
            error: Error()
          }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.getPosition(), this.beatBackVelocity, dt);
          this.setPosition(tempPos);

          if (this.reviceBeatTime > this.beatBackVelocity.z) {
            this.setCommonBeatBack(false);
            return;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a3add7cc13a740bc24e858dabfcacd576a963492.js.map