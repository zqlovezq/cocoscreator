System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8", "__unresolved_9", "__unresolved_10", "__unresolved_11"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, _decorator, js, AbsObj, StateMachine, AbsStateType, MonsterMoveLine, FixedUtil, DamageTick, EventMgr, FightEvent, ShadowEffect, GuideController, LocalEvent, _dec, _class, _crd, ccclass, property, tempPos, MAX_HIT_TIME, AbsRole;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfStateMachine(extras) {
    _reporterNs.report("StateMachine", "../state/StateMachine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "./AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterMoveLine(extras) {
    _reporterNs.report("MonsterMoveLine", "../../move/AbsMove", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFixedUtil(extras) {
    _reporterNs.report("FixedUtil", "../../../util/FixedUtil", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDamageTick(extras) {
    _reporterNs.report("DamageTick", "../../cd/DamageTick", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfShadowEffect(extras) {
    _reporterNs.report("ShadowEffect", "../../effect/ShadowEffect", _context.meta, extras);
  }

  function _reportPossibleCrUseOfGuideController(extras) {
    _reporterNs.report("GuideController", "../../../../guide/GuideController", _context.meta, extras);
  }

  function _reportPossibleCrUseOfLocalEvent(extras) {
    _reporterNs.report("LocalEvent", "../../../../define/LocalEvent", _context.meta, extras);
  }

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
      _decorator = _cc._decorator;
      js = _cc.js;
    }, function (_unresolved_2) {
      AbsObj = _unresolved_2.AbsObj;
    }, function (_unresolved_3) {
      StateMachine = _unresolved_3.StateMachine;
    }, function (_unresolved_4) {
      AbsStateType = _unresolved_4.AbsStateType;
    }, function (_unresolved_5) {
      MonsterMoveLine = _unresolved_5.MonsterMoveLine;
    }, function (_unresolved_6) {
      FixedUtil = _unresolved_6.FixedUtil;
    }, function (_unresolved_7) {
      DamageTick = _unresolved_7.DamageTick;
    }, function (_unresolved_8) {
      EventMgr = _unresolved_8.EventMgr;
    }, function (_unresolved_9) {
      FightEvent = _unresolved_9.FightEvent;
    }, function (_unresolved_10) {
      ShadowEffect = _unresolved_10.ShadowEffect;
    }, function (_unresolved_11) {
      GuideController = _unresolved_11.GuideController;
    }, function (_unresolved_12) {
      LocalEvent = _unresolved_12.LocalEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "802a7Mr2KxK85bBCQhgNro2", "AbsRole", undefined);

      __checkObsolete__(['Color', 'Input', 'Layers', 'Node', 'PhysicsSystem', 'Prefab', 'Quat', 'UITransform', 'Vec2', 'Vec3', '_decorator', 'js', 'sp', 'v3']);

      ({
        ccclass,
        property
      } = _decorator);
      tempPos = new Vec3();
      MAX_HIT_TIME = 160;
      /**战斗对象 地图上 角色、怪物*/

      _export("AbsRole", AbsRole = (_dec = ccclass('AbsRole'), _dec(_class = class AbsRole extends (_crd && AbsObj === void 0 ? (_reportPossibleCrUseOfAbsObj({
        error: Error()
      }), AbsObj) : AbsObj) {
        constructor(...args) {
          super(...args);
          this.aiMachine = void 0;

          /** 伤害间隔 */
          this.damageTicks = [];

          /** 子弹伤害组 key_bool */
          this.bulletDamageGroup = new Map();

          /** 父级唯一id  （伤害忽略）a子弹死亡触发的b子弹，再碰撞时不做伤害 */
          this.parentSoleId = new Map();
          this.info = void 0;
          this.backJump = void 0;
          this.avatarShadow = void 0;

          /** 复活击退 */
          this.isReviceBeatBack = false;
          this.reviceBeatTime = 0;
          this.hitColorFrame = 0;
          this.isBeatBack = false;
          this.beatBackVelocity = new Vec3();
          this.beatBackSpeed = 0;
          this.beatBackDt = 0;
          this.maxBeatFrame = 0;
          this.curBearFrame = 0;
        }

        reset() {
          this.avatarShadow.recycle();
          this.avatarShadow = null;
          super.reset();

          if (this.backJump) {
            this.backJump = null;
          }

          this.damageTicks.length = 0;
          this.bulletDamageGroup.clear();
          this.parentSoleId.clear();
          this.beatBackSpeed = 0;
          this.quitBeatBack();
          this.isReviceBeatBack = false;
          this.beatBackVelocity.set(Vec3.ZERO);
          this.hitColorFrame = 0;
        }

        initMachine() {
          this.initShadow(this.info.configTab.Shadow);
          super.initMachine();

          if (this.aiMachine == null) {
            this.aiMachine = new (_crd && StateMachine === void 0 ? (_reportPossibleCrUseOfStateMachine({
              error: Error()
            }), StateMachine) : StateMachine)();
          }

          this.aiMachine.setAbs(this);
          this.aiMachine.run();
          this.move = new (_crd && MonsterMoveLine === void 0 ? (_reportPossibleCrUseOfMonsterMoveLine({
            error: Error()
          }), MonsterMoveLine) : MonsterMoveLine)();
          this.move.setAbs(this);
        }

        updateFrame(dt) {
          this.updateHitTime(dt);
          super.updateFrame(dt);

          for (let index = this.damageTicks.length - 1; index >= 0; index--) {
            const v = this.damageTicks[index];

            if (!v.isValid()) {
              this.damageTicks.splice(index, 1);
              continue;
            }

            v.updateFrame(dt);
          }
        }

        setStealth(isbool) {
          this._isActive = !isbool;
          this.setTrigger(!isbool);
          this.avatar.setOpaticy(isbool ? 180 : 255);
        }

        isAttack() {
          return this.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleAttack);
        }
        /** 射击位置 */


        getShotPos() {
          if (this.animationId > 0 && this.avatar.animTab && this.avatar.animTab.AttackPoint != "") {
            return this.getAvatarSpineBonePos(js.formatStr("root/%s", this.avatar.animTab.AttackPoint));
          }

          return this.getAvatarSpineBonePos("root/point_attack");
        }
        /** 命中位置 */


        getHitPos() {
          return this.getAvatarSpineBonePos("root/point_beattack");
        }

        getAvatarSpineBonePos(boneName) {
          let bone = this.getBonePos(boneName);

          if (bone) {
            if (this.avatar && this.avatar.spine && this.avatar.spine.node) {
              tempPos.x = bone.x * this.avatar.spine.node.scale.x * this.getScale().x + this.avatar.spine.node.position.x;
              tempPos.y = bone.y * this.avatar.spine.node.scale.y * this.getScale().y + this.avatar.spine.node.position.y;
            } else {
              tempPos.x = bone.x;
              tempPos.y = bone.y;
            }

            tempPos.x += this.getPosition().x;
            tempPos.y += this.getPosition().y;
            tempPos.z += this.getPosition().z;
            return tempPos;
          }

          return this.getPosition();
        }
        /** 获取骨骼位置， 英雄会在role里重写， 优先读取表内 */


        getBonePos(boneName) {
          return this.avatar.getSpineBonePos(boneName);
        }
        /** 触碰掉落 */


        onHitDrop(dropObj) {}

        addDamageTick(bulletSoleId, time) {
          let tick = new (_crd && DamageTick === void 0 ? (_reportPossibleCrUseOfDamageTick({
            error: Error()
          }), DamageTick) : DamageTick)();
          tick.reset();
          tick.setLiftTime(time);
          tick.bulletSoleId = bulletSoleId;
          this.damageTicks.push(tick);
        }
        /** 检测伤害间隔 */


        checkDamageTick(bulletSoleId) {
          for (let index = 0; index < this.damageTicks.length; index++) {
            const v = this.damageTicks[index];

            if (v.bulletSoleId == bulletSoleId) {
              return v.isValid();
            }
          }

          return false;
        }
        /** 添加伤害组id */


        addDamegeGroupId(groupId) {
          this.bulletDamageGroup.set(groupId, 1);
        }
        /** 检测是否已有同组子弹伤害 */


        checkBulletDamageGroup(groupId) {
          return groupId == 0 ? 0 : this.bulletDamageGroup.get(groupId) || 0;
        }
        /** 添加伤害组id */


        addParentSoleId(soleId) {
          this.parentSoleId.set(soleId, 1);
        }
        /** 检测是否已被父级子弹伤害过 */


        checkParentSoleId(soleId) {
          return soleId == "" ? 0 : this.parentSoleId.get(soleId) || 0;
        }

        changeState(stateType) {
          if (this.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleVertigo)) {
            if (!(stateType == (_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleDead || stateType == (_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleIdle)) {
              console.log("眩晕状态只能切换到死亡、空闲 状态");
              return;
            }
          }

          if ((_crd && GuideController === void 0 ? (_reportPossibleCrUseOfGuideController({
            error: Error()
          }), GuideController) : GuideController).ins.isInFightGuiding() && this.info.isLeader) {
            if (stateType === (_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleIdle) {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).roleIdleState, true);
            } else {
              (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
                error: Error()
              }), EventMgr) : EventMgr).emitLocal((_crd && LocalEvent === void 0 ? (_reportPossibleCrUseOfLocalEvent({
                error: Error()
              }), LocalEvent) : LocalEvent).roleIdleState, false);
            }
          }

          return super.changeState(stateType);
        }
        /** 死亡 */


        onDead() {
          this.setTrigger(false);
          this.isDead = true;
          this.node.emit("AbsRole_dead", this);
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleDead);
        }
        /** 复活 */


        onRevive() {
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleRevive);
        }

        setBackJump(dd) {
          this.backJump = dd;
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBackJump);
        }

        /** 设置节点被命中 
         * @param _beatBackSpeed 击退速度
         */
        setIsHit(_beatBackSpeed) {
          if (this.hitColorFrame > 0) {
            return;
          }

          this.beatBackSpeed = _beatBackSpeed;
          this.hitColorFrame = MAX_HIT_TIME;
        }

        updateHitTime(dt) {
          if (this.hitColorFrame == 0) {
            return;
          }

          if (this.hitColorFrame == MAX_HIT_TIME) {
            this.maxBeatFrame = Math.ceil(MAX_HIT_TIME / dt);
            this.curBearFrame = this.maxBeatFrame;
          }

          this.beatBackUpdate(dt);
          this.setFlashWhiteRate();
          this.hitColorFrame -= dt;
          this.curBearFrame -= 1;
          this.hitColorFrame = Math.max(this.hitColorFrame, 0);
          this.curBearFrame = Math.max(this.curBearFrame, 0);

          if (this.hitColorFrame == 0) {
            this.setFlashWhiteRate();
            this.quitBeatBack();
          }
        }

        setFlashWhiteRate() {
          this.avatar.setFlashWhiteRate(Math.min((MAX_HIT_TIME - this.hitColorFrame) / MAX_HIT_TIME, 1));
        }

        beatBackUpdate(dt) {
          if (this.beatBackSpeed == 0 || this.curBearFrame == 0) {
            //没有击退速度
            this.quitBeatBack();
            return;
          }

          if (this.curBearFrame + 1 == this.maxBeatFrame) {
            this.isBeatBack = true;
            this.beatBackVelocity.set(this.velocity);
            this.beatBackVelocity.normalize(); // this.beatBackVelocity.x = -this.beatBackVelocity.x
            // this.beatBackVelocity.y = -this.beatBackVelocity.y

            this.beatBackVelocity.x = Math.abs(this.beatBackVelocity.x);
            this.beatBackVelocity.y = Math.abs(this.beatBackVelocity.y);
            this.beatBackVelocity.multiplyScalar(this.beatBackSpeed * this.voRatio);
            this.beatBackDt = dt;
            (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
              error: Error()
            }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.avatar.node.position, this.beatBackVelocity, this.beatBackDt * 2);
            tempPos.x = Math.min(tempPos.x, 20);
            tempPos.y = Math.min(tempPos.y, 20);
            this.avatar.node.position = tempPos;
            return;
          } else if (this.curBearFrame > 1) {
            return;
          } else if (this.curBearFrame == 1) {
            if (this.isBeatBack) {
              (_crd && FixedUtil === void 0 ? (_reportPossibleCrUseOfFixedUtil({
                error: Error()
              }), FixedUtil) : FixedUtil).deltaTimeMovePostion(tempPos, this.getPosition(), this.velocity, this.beatBackDt * 2);
              this.setPosition(tempPos);
            }
          }

          this.quitBeatBack();
        }

        quitBeatBack() {
          this.isBeatBack = false;

          if (this.avatar && this.avatar.node) {
            tempPos.x = tempPos.y = tempPos.z = 0;
            this.avatar.node.position = tempPos;
          }
        }

        updateHP() {}

        initShadow(animId) {
          this.avatarShadow = (_crd && ShadowEffect === void 0 ? (_reportPossibleCrUseOfShadowEffect({
            error: Error()
          }), ShadowEffect) : ShadowEffect).create();
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).Effect_Add_To_Layer, "shadow", this.avatarShadow.node);
          this.avatarShadow.run(animId);
        }

        updateActive() {
          this.avatarShadow.node.active = this.isActive;
        }

        setPosition(position) {
          super.setPosition(position);

          if (this.avatarShadow) {
            this.avatarShadow.node.setPosition(position);
          }
        }

        setSkillBearBack(bo, velocity) {
          if (bo) {
            this.beatBackVelocity.set(velocity);
          }

          this.setCommonBeatBack(bo);
        }

        setCommonBeatBack(bo) {
          this.isReviceBeatBack = bo;

          if (bo) {
            this.reviceBeatTime = 0;
          }
        }

      }) || _class));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5c6661d2330226fd296cefab0e26f6c6659075cb.js.map