System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11", "__unresolved_12", "__unresolved_13", "__unresolved_14", "__unresolved_15", "__unresolved_16", "__unresolved_17", "cc/env"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Layers, Node, PhysicsSystem, Size, Sprite, UITransform, Vec3, _decorator, AbsObjType, AbsRole, AbsStateType, RoleState1Idle, tab, RoleState3Attack, RoleState4Dead, RoleState5Born, RoleState6Revive, EventMgr, FightEvent, RoleState7SkillCd, CollisionGroup, RoleState8NoActive, RoleState9BackJump, RoleState10Vertigo, PlayerControl, PREVIEW, _dec, _class, _crd, ccclass, property, tempPos, Role;

  function _reportPossibleCrUseOfCollisionObject(extras) {
    _reporterNs.report("CollisionObject", "../../../../../../framework/collision/CollisionObject", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObjType(extras) {
    _reporterNs.report("AbsObjType", "../../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState1Idle(extras) {
    _reporterNs.report("RoleState1Idle", "./state/RoleState1Idle", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState3Attack(extras) {
    _reporterNs.report("RoleState3Attack", "./state/RoleState3Attack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState4Dead(extras) {
    _reporterNs.report("RoleState4Dead", "./state/RoleState4Dead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState5Born(extras) {
    _reporterNs.report("RoleState5Born", "./state/RoleState5Born", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState6Revive(extras) {
    _reporterNs.report("RoleState6Revive", "./state/RoleState6Revive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState7SkillCd(extras) {
    _reporterNs.report("RoleState7SkillCd", "./state/RoleState7SkillCd", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleInfo(extras) {
    _reporterNs.report("RoleInfo", "./RoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCollisionGroup(extras) {
    _reporterNs.report("CollisionGroup", "../../../../define/FightDefine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightUITeamItem(extras) {
    _reporterNs.report("FightUITeamItem", "../../../../view/common/FightUITeamItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState8NoActive(extras) {
    _reporterNs.report("RoleState8NoActive", "./state/RoleState8NoActive", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState9BackJump(extras) {
    _reporterNs.report("RoleState9BackJump", "./state/RoleState9BackJump", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState10Vertigo(extras) {
    _reporterNs.report("RoleState10Vertigo", "./state/RoleState10Vertigo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightBarItem(extras) {
    _reporterNs.report("FightBarItem", "../../../../view/common/FightBarItem", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "./PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfHoldTimeEffectUI(extras) {
    _reporterNs.report("HoldTimeEffectUI", "../../../effect/HoldTimeEffectUI", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Layers = _cc.Layers;
      Node = _cc.Node;
      PhysicsSystem = _cc.PhysicsSystem;
      Size = _cc.Size;
      Sprite = _cc.Sprite;
      UITransform = _cc.UITransform;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
    }, function (_unresolved_2) {
      AbsObjType = _unresolved_2.AbsObjType;
    }, function (_unresolved_3) {
      AbsRole = _unresolved_3.AbsRole;
    }, function (_unresolved_4) {
      AbsStateType = _unresolved_4.AbsStateType;
    }, function (_unresolved_5) {
      RoleState1Idle = _unresolved_5.RoleState1Idle;
    }, function (_unresolved_6) {
      tab = _unresolved_6.tab;
    }, function (_unresolved_7) {
      RoleState3Attack = _unresolved_7.RoleState3Attack;
    }, function (_unresolved_8) {
      RoleState4Dead = _unresolved_8.RoleState4Dead;
    }, function (_unresolved_9) {
      RoleState5Born = _unresolved_9.RoleState5Born;
    }, function (_unresolved_10) {
      RoleState6Revive = _unresolved_10.RoleState6Revive;
    }, function (_unresolved_11) {
      EventMgr = _unresolved_11.EventMgr;
    }, function (_unresolved_12) {
      FightEvent = _unresolved_12.FightEvent;
    }, function (_unresolved_13) {
      RoleState7SkillCd = _unresolved_13.RoleState7SkillCd;
    }, function (_unresolved_14) {
      CollisionGroup = _unresolved_14.CollisionGroup;
    }, function (_unresolved_15) {
      RoleState8NoActive = _unresolved_15.RoleState8NoActive;
    }, function (_unresolved_16) {
      RoleState9BackJump = _unresolved_16.RoleState9BackJump;
    }, function (_unresolved_17) {
      RoleState10Vertigo = _unresolved_17.RoleState10Vertigo;
    }, function (_unresolved_18) {
      PlayerControl = _unresolved_18.PlayerControl;
    }, function (_ccEnv) {
      PREVIEW = _ccEnv.PREVIEW;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3c42czCnxVLX4t/xvkt8Zeb", "Role", undefined);

      __checkObsolete__(['Color', 'Input', 'Layers', 'Node', 'PhysicsSystem', 'Prefab', 'Quat', 'Size', 'Sprite', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'sp', 'v3', 'view']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3(0, 0, 0);

      _export("Role", Role = (_dec = ccclass('Role'), _dec(_class = class Role extends (_crd && AbsRole === void 0 ? (_reportPossibleCrUseOfAbsRole({
        error: Error()
      }), AbsRole) : AbsRole) {
        constructor() {
          super(...arguments);
          this.objType = (_crd && AbsObjType === void 0 ? (_reportPossibleCrUseOfAbsObjType({
            error: Error()
          }), AbsObjType) : AbsObjType).role;
          this.roleHead = void 0;
          this.barItem = void 0;
          this.info = void 0;
          this.holdEffect = void 0;
          this.isShotIcon = false;
        }

        start() {}

        reset() {
          if (this.holdEffect) {
            this.holdEffect.remove();
            this.holdEffect = null;
          }

          if (this.barItem) {
            this.barItem.node.destroy();
            this.barItem = null;
          }

          super.reset();
        }

        initMachine() {
          super.initMachine();
          this.stateMachine.addState(new (_crd && RoleState1Idle === void 0 ? (_reportPossibleCrUseOfRoleState1Idle({
            error: Error()
          }), RoleState1Idle) : RoleState1Idle)());
          this.stateMachine.addState(new (_crd && RoleState3Attack === void 0 ? (_reportPossibleCrUseOfRoleState3Attack({
            error: Error()
          }), RoleState3Attack) : RoleState3Attack)());
          this.stateMachine.addState(new (_crd && RoleState4Dead === void 0 ? (_reportPossibleCrUseOfRoleState4Dead({
            error: Error()
          }), RoleState4Dead) : RoleState4Dead)());
          this.stateMachine.addState(new (_crd && RoleState5Born === void 0 ? (_reportPossibleCrUseOfRoleState5Born({
            error: Error()
          }), RoleState5Born) : RoleState5Born)());
          this.stateMachine.addState(new (_crd && RoleState6Revive === void 0 ? (_reportPossibleCrUseOfRoleState6Revive({
            error: Error()
          }), RoleState6Revive) : RoleState6Revive)());
          this.stateMachine.addState(new (_crd && RoleState7SkillCd === void 0 ? (_reportPossibleCrUseOfRoleState7SkillCd({
            error: Error()
          }), RoleState7SkillCd) : RoleState7SkillCd)());
          this.stateMachine.addState(new (_crd && RoleState8NoActive === void 0 ? (_reportPossibleCrUseOfRoleState8NoActive({
            error: Error()
          }), RoleState8NoActive) : RoleState8NoActive)());
          this.stateMachine.addState(new (_crd && RoleState9BackJump === void 0 ? (_reportPossibleCrUseOfRoleState9BackJump({
            error: Error()
          }), RoleState9BackJump) : RoleState9BackJump)());
          this.stateMachine.addState(new (_crd && RoleState10Vertigo === void 0 ? (_reportPossibleCrUseOfRoleState10Vertigo({
            error: Error()
          }), RoleState10Vertigo) : RoleState10Vertigo)());
        }

        setObjInfo(_info) {
          super.setObjInfo(_info);
          this.setBounds(this.info.configTab.Bounds);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleIdle, this.info.configTab.Idle);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleDead, this.info.configTab.Dead);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBorn, this.info.configTab.Born);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleRevive, this.info.configTab.Revive);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleSkillCd, this.info.configTab.Idle2);
          this.setStateAnimId((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleVertigo, this.info.configTab.Idle);
        }

        init() {
          this.speed = 200;
          this.group = PhysicsSystem.PhysicsGroup[(_crd && CollisionGroup === void 0 ? (_reportPossibleCrUseOfCollisionGroup({
            error: Error()
          }), CollisionGroup) : CollisionGroup).role];
          this.setTrigger(true);
          this.initBoby();
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleNoActive);
        }
        /** 死亡 */


        onDead() {
          super.onDead();

          if (this.barItem) {
            this.barItem.isActive = false;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).add_DeadEffect, this);
        }
        /** 复活 */


        onRevive() {
          if (this.barItem) {
            this.barItem.isActive = true;
          }

          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).remove_DeadEffect, this);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Hit_Effect_Add, (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().GetKeyValue_ConfigTable().Resurrectioneffect, this);
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleRevive);
          this.avatarShadow.node.active = true;
        }

        updateFrame(dt) {
          super.updateFrame(dt);

          if (this.holdEffect) {
            this.holdEffect.updateFrame(dt);
          }
        } //进入警戒范围


        onDetectorToEnemy(enemys) {} //掉落物进入拾取范围


        onCollect(b) {}
        /** 触碰掉落 */


        onHitDrop(dropObj) {}

        sendClickSkill(uiPos) {
          if (this.isDead) {
            return;
          }

          if (this.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleVertigo)) {
            return;
          }

          this.info.useWeaponSkill((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getClickNodePos());

          if (this.info.checkNormalCd()) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Fight_Skill_Cding, uiPos);
            return;
          }

          if (this.isAttack()) {
            return;
          }

          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleAttack);
        }

        onLevelUp() {
          console.log("播放升级特效---");
        }

        updateActive() {
          super.updateActive();

          if (this.barItem) {
            this.barItem.node.active = this.isActive;
            this.barItem.isActive = true;
            this.updateHP();

            if (this.isActive) {
              tempPos.set(this.node.position);
              tempPos.y += 125;
              this.barItem.node.position = tempPos;
            }
          }
        }

        updateHP() {
          if (this.barItem) {
            this.barItem.changeHp();
          }
        }

        hpAcive(isBool) {}

        updateSkillCd(pro) {
          if (this.barItem) {
            this.barItem.changeSkillCd(pro);
          }
        }

        showShotPos() {
          if (!PREVIEW) {
            return;
          }

          if (this.isShotIcon) {
            return;
          }

          this.isShotIcon = true;
          var grayNode = new Node("GrayNode");
          grayNode.layer = Layers.Enum.DEFAULT;
          var uitrans = grayNode.addComponent(UITransform);
          uitrans.setContentSize(new Size(5, 5));
          this.node.addChild(grayNode);
          var spr = grayNode.addComponent(Sprite);
          spr.sizeMode = Sprite.SizeMode.CUSTOM;
          spr.setTexture("textrue/bg_1");
          tempPos.set(this.getShotPos());
          tempPos.subtract(this.getPosition());
          grayNode.position = tempPos;
        }

        getBonePos(boneName) {
          if (boneName == "root/point_attack" && this.info.configTab.ShotPos.length) {
            tempPos.set(Vec3.ZERO);
            tempPos.x = this.info.configTab.ShotPos[0] || 0;
            tempPos.y = this.info.configTab.ShotPos[1] || 0;
            return tempPos;
          } else if (boneName == "root/point_beattack" && this.info.configTab.HitPos.length) {
            tempPos.set(Vec3.ZERO);
            tempPos.x = this.info.configTab.HitPos[0] || 0;
            tempPos.y = this.info.configTab.HitPos[1] || 0;
            return tempPos;
          } else {
            return this.getBonePos(boneName);
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=9441fbbbdb9161ed81c47a3c5ab14b3619a0b37c.js.map