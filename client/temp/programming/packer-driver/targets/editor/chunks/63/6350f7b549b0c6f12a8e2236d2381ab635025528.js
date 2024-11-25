System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsStateType, SearchEnemy, tab, Vector2, MonsterHunt, _crd, HuntState, tempPos, tempStartPos, Max_Time, Min_Time;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../obj/state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfSearchEnemy(extras) {
    _reporterNs.report("SearchEnemy", "./SearchEnemy", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../obj/role/monster/Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfVector(extras) {
    _reporterNs.report("Vector2", "../../../../framework/collision/Maths", _context.meta, extras);
  }

  _export("MonsterHunt", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsStateType = _unresolved_2.AbsStateType;
    }, function (_unresolved_3) {
      SearchEnemy = _unresolved_3.SearchEnemy;
    }, function (_unresolved_4) {
      tab = _unresolved_4.tab;
    }, function (_unresolved_5) {
      Vector2 = _unresolved_5.Vector2;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "744293w7axL8ojg74+6n3HM", "MonsterHunt", undefined);

      __checkObsolete__(['Vec3', 'View', 'game', 'size', 'v2', 'v3', 'view']);

      HuntState = {
        Warning: 1,
        Attack: 2
      };
      tempPos = new Vec3(0, 0, 0);
      tempStartPos = new Vec3(0, 0, 0);
      Max_Time = 500;
      Min_Time = 100;
      /** 
       * 怪物寻敌 
       */

      _export("MonsterHunt", MonsterHunt = class MonsterHunt {
        constructor() {
          this.abs = void 0;
          this.targetRole = void 0;
          this.checkTime = 500;
          this.nextCheck = 0;
        }

        //下一轮时间
        setAbs(abs) {
          this.abs = abs;
          this.checkTime = Max_Time;
        }

        updateFrame(dt) {
          //--范围检测
          this.checkMove(dt);
        }

        findTarget() {
          if (this.targetRole == null || this.targetRole && this.targetRole.isDead) {
            this.targetRole = (_crd && SearchEnemy === void 0 ? (_reportPossibleCrUseOfSearchEnemy({
              error: Error()
            }), SearchEnemy) : SearchEnemy).getBySearchEnemy(this.abs.objId, this.abs.objType, this.abs.getHitPos(), (_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
              error: Error()
            }), tab) : tab).EffectUnit.EffectUnit_Enemy, this.abs.info.configTab.SearchRules);
          }

          if (this.targetRole == null) {// console.log("怪物 根据锁敌规则， 没有找到敌人，根据默认规则再次查找")
          }
        }

        checkMove(dt) {
          if (this.abs.isDead) {
            return;
          }

          this.nextCheck -= dt;

          if (this.nextCheck <= 0) {
            this.nextCheck = this.checkTime;
            this.targetRole = null;
            this.findTarget();

            if (this.targetRole == null) {
              this.abs.velocity.x = this.abs.velocity.y = 0;
              return;
            }

            this.checkAttack();
          }
        } //检测攻击范围，发动攻击


        checkAttack() {
          tempPos.set(this.targetRole.getHitPos());
          let lengthSqr = (_crd && Vector2 === void 0 ? (_reportPossibleCrUseOfVector({
            error: Error()
          }), Vector2) : Vector2).squaredDistance(this.abs.getHitPos(), tempPos);
          this.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_SearchEnemy, {
            distance: lengthSqr
          });
          let sqr = this.abs.info.attackRange * this.abs.info.attackRange - lengthSqr; //攻击半径

          if (sqr > 0) {
            this.checkTime = Max_Time;
            this.onAttack();
          } else {
            if (sqr < -10000) {
              this.checkTime = Min_Time;
            }

            this.enterState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleMove);

            if (this.abs.getPosition().x < 100) {
              //计算朝目标行进方向
              tempPos.set(this.abs.getHitPos());
              this.abs.traceDirection(tempPos, this.targetRole.getHitPos());
            } else {
              this.abs.setVelocityAngle(180);
            }
          }
        } //进入攻击范围


        onAttack() {
          let nowSkill = this.abs.info.getNowSkill();

          if (nowSkill) {
            this.abs.velocity.x = this.abs.velocity.y = 0; //检测技能是否可以释放

            if (nowSkill.isInCD(this.abs.info.attrData)) {
              // console.log("怪物技能cd,站这不动")
              return;
            }

            if (this.abs.info.checkSkillEffectUnit(nowSkill) || this.abs.info.checSkillBulletEffectUnit(nowSkill)) {
              //进入攻击状态
              this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
                error: Error()
              }), AbsStateType) : AbsStateType).roleAttack);
            } else {// console.log("没有敌人")
            }
          }
        }

        enterState(state) {
          if (this.abs.isState(state)) {
            return;
          }

          this.abs.changeState(state);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6350f7b549b0c6f12a8e2236d2381ab635025528.js.map