System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4", "__unresolved_5", "__unresolved_6", "__unresolved_7", "__unresolved_8"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, FightRootControl, AbsRoleState, AbsStateType, PlayerControl, tab, BulletControl, CDTime, SkillControl, FightData, RoleState3Attack, _crd, CdType, velocity, tempData;

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../../../FightRootControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../../../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../../../bullet/BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfCDTime(extras) {
    _reporterNs.report("CDTime", "../../../../cd/CDTime", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillTab(extras) {
    _reporterNs.report("SkillTab", "../../../../../power/powerTab/SkillTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSkillControl(extras) {
    _reporterNs.report("SkillControl", "../../../../skill/SkillControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleInfo(extras) {
    _reporterNs.report("AbsRoleInfo", "../../AbsRoleInfo", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletTab(extras) {
    _reporterNs.report("BulletTab", "../../../../../power/powerTab/BulletTab", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../../../../data/FightData", _context.meta, extras);
  }

  _export("RoleState3Attack", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      FightRootControl = _unresolved_2.FightRootControl;
    }, function (_unresolved_3) {
      AbsRoleState = _unresolved_3.AbsRoleState;
      AbsStateType = _unresolved_3.AbsStateType;
    }, function (_unresolved_4) {
      PlayerControl = _unresolved_4.PlayerControl;
    }, function (_unresolved_5) {
      tab = _unresolved_5.tab;
    }, function (_unresolved_6) {
      BulletControl = _unresolved_6.BulletControl;
    }, function (_unresolved_7) {
      CDTime = _unresolved_7.CDTime;
    }, function (_unresolved_8) {
      SkillControl = _unresolved_8.SkillControl;
    }, function (_unresolved_9) {
      FightData = _unresolved_9.FightData;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "86e2cphMVRENpI5JLNwpfLs", "RoleState3Attack", undefined);

      __checkObsolete__(['Vec3']);

      CdType = {
        BulletTimeCD: "BulletTimeCD",
        RunningShotCD: "RunningShotCD"
      };
      velocity = new Vec3();
      tempData = {};

      _export("RoleState3Attack", RoleState3Attack = class RoleState3Attack extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleAttack);
          this.info = void 0;
          this.cd = new (_crd && CDTime === void 0 ? (_reportPossibleCrUseOfCDTime({
            error: Error()
          }), CDTime) : CDTime)();
          this.tmpSkill = void 0;
          this.runningShotCount = 0;
          this.bulletGroupId = 0;
          //子弹组id (连射为同一组)
          this.isTargetPos = false;
          this.targetPos = new Vec3();
          this.testTime = 0;
          this.actionTime = 0;
        }

        setAbs(abs) {
          super.setAbs(abs);
          this.info = this.abs.info;
        }

        enter() {
          this.isTargetPos = false;

          if (this.abs.info.isLeader) {
            this.isTargetPos = (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getClicking();
            this.targetPos.set((_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
              error: Error()
            }), PlayerControl) : PlayerControl).ins.getClickNodePos());
          }

          this.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_PreAttack);
          this.tmpSkill = this.info.getNowSkill();

          if (this.tmpSkill == null) {
            console.warn("没有当前技能");
            this.avatarPlayComplete("");
            return;
          }

          (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
            error: Error()
          }), SkillControl) : SkillControl).ins.useSkillTarget(this.tmpSkill, this.abs);
          this.abs.animationId = this.tmpSkill.ActionID;
          this.abs.avatar.setOtherSpeedScale(0);

          if (this.tmpSkill.SkillType != (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).SkillType.SkillType_holdAttack) {
            this.abs.avatar.setOtherSpeedScale(Math.max(this.abs.info.attrData.getAttr((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).AttrType.AttrType_AttackSpeed), -9000));
          }

          this.runningShotCount = 0;
          this.bulletGroupId = (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.addSelfGroupId();
          this.cd.reset();
          this.cd.setTypeKey(CdType.BulletTimeCD);
          this.cd.setLiftTime(this.tmpSkill.BulletTime, this.onCdEnd.bind(this));
          this.cd.setSpeed(this.abs.avatar.otherSpeedScale);
          this.testTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          this.actionTime = (_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).time;
          return true;
        }

        onCdEnd(keyType) {
          if (keyType == CdType.BulletTimeCD) {
            //消耗的出手次数， 触发器可能会修改
            tempData.baseNum = this.tmpSkill.Expend;
            this.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).Triggertype.Triggertype_Attack, tempData);
            this.info.subNormalAttack(tempData.baseNum);
            this.emitBullet();

            if (this.tmpSkill.isRunningShot()) {
              var addRate = 0;

              if (!this.tmpSkill.isRunningShotSuccess(addRate)) {
                return;
              }

              this.runningShotCount = 0;
              this.cd.reset();
              this.cd.setTypeKey(CdType.RunningShotCD);
              this.cd.setLiftTime(this.tmpSkill.RunningShot[0], this.onCdEnd.bind(this));
            }
          } else if (keyType == CdType.RunningShotCD) {
            this.runningShotCount++;
            this.emitBullet();

            if (this.runningShotCount < this.tmpSkill.RunningShot[1]) {
              this.cd.reset();
              this.cd.setTypeKey(CdType.RunningShotCD);
              this.cd.setLiftTime(this.tmpSkill.RunningShot[0], this.onCdEnd.bind(this));
            }
          }
        }

        updateFrame(delteTime) {
          super.updateFrame(delteTime);
          this.cd.updateFrame(delteTime);
        }

        avatarPlayComplete(animName) {
          this.abs.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ClearType.ClearType_Attack);
          this.info.refreshHoldTime(); //攻击后清除蓄力时间

          this.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_AttackCount);
          this.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_AttackEnd);

          if (!this.abs.isState(this.stateType)) {
            return;
          }

          if (this.abs.info.checkNormalCd()) {
            this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).RoleSkillCd);
            return;
          }

          super.avatarPlayComplete(animName);
        }

        emitBullet() {
          var testBullet = (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).getData().BulletTableById.getValue((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.testBulletId);

          if (testBullet) {
            var bulletTab = this.info.skillPowers.createTypeAnyId((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).PowerType.PowerType_BulletTable, testBullet.Id);

            if (this.abs.info.isAudo) {
              (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
                error: Error()
              }), BulletControl) : BulletControl).ins.audoEmitBullet(bulletTab, this.abs, this.bulletGroupId);
            } else {
              (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
                error: Error()
              }), BulletControl) : BulletControl).ins.clickEmitBullet(bulletTab, this.abs, this.targetPos, this.bulletGroupId);
            }
          } else {
            if (this.isTargetPos) {
              (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
                error: Error()
              }), SkillControl) : SkillControl).ins.useSkillBullet(this.tmpSkill, this.abs, this.targetPos, this.bulletGroupId, this.runningShotCount > 0);
            } else {
              var re = (_crd && SkillControl === void 0 ? (_reportPossibleCrUseOfSkillControl({
                error: Error()
              }), SkillControl) : SkillControl).ins.useSkillBullet(this.tmpSkill, this.abs, null, this.bulletGroupId, this.runningShotCount > 0);

              if (this.tmpSkill.RunningShotBulletType == (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
                error: Error()
              }), tab) : tab).RunningShotBulletType.RunningShotBulletType_SameEnemy && re) {
                this.isTargetPos = true;
                this.targetPos.set(re);
              }
            }
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b51ccf2b24dbb32f8904365642c3fa61742c487c.js.map