System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, AbsStateType, LockEnemy, _crd, LockEnemyState;

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../obj/role/AbsRole", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../obj/AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../obj/state/AbsState", _context.meta, extras);
  }

  _export("LockEnemy", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      AbsStateType = _unresolved_2.AbsStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "47e52G7o6lFzJKcGpba4EJn", "LockEnemy", undefined);

      __checkObsolete__(['Vec3', 'View', 'game', 'size', 'v2', 'view']);

      _export("LockEnemyState", LockEnemyState = /*#__PURE__*/function (LockEnemyState) {
        LockEnemyState[LockEnemyState["default"] = 0] = "default";
        LockEnemyState[LockEnemyState["preLock"] = 1] = "preLock";
        LockEnemyState[LockEnemyState["lock"] = 2] = "lock";
        return LockEnemyState;
      }({}));
      /** 
       * 锁定敌人 
       * 预锁定敌人 （在警戒范围内最近的敌人）角色移动到攻击范围内更改为锁定状态
       */


      _export("LockEnemy", LockEnemy = class LockEnemy {
        constructor() {
          this.state = LockEnemyState.default;
          this.owner = void 0;
          this.enemy = void 0;
        }

        setEnemys(enemys) {
          if (!this.owner.stateMachine.isState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleIdle)) {
            return;
          }

          if (enemys.length > 0) {
            this.setEnemy(enemys[0]);
          }
        }

        setOnwer(owner) {
          this.owner = owner;
        }

        setEnemy(enemy) {
          if (this.enemy) {
            this.enemy.node.off("AbsRole_dead", this.onEnemyDead, this);
          }

          this.enemy = enemy;

          if (enemy) {
            this.enemy.node.on("AbsRole_dead", this.onEnemyDead, this);
            this.setState(LockEnemyState.preLock);
          } else {
            this.setState(LockEnemyState.default);
          }
        }

        setState(state) {
          this.state = state;

          if (this.isPreLock()) {
            this.owner && this.owner.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleMove);
          } else if (this.isLock()) {
            this.owner && this.owner.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleAttack);
          } else {// this.owner && this.owner.changeState(AbsStateType.roleIdle)
          }
        }
        /** 是否为锁敌状态 */


        isLock() {
          return this.state == LockEnemyState.lock;
        }
        /** 是否为预锁定状态 */


        isPreLock() {
          return this.state == LockEnemyState.preLock;
        }
        /** 是否为死亡（default）状态 */


        isDead() {
          return this.state == LockEnemyState.default || this.enemy == null || this.enemy.isDead;
        }

        onEnemyDead(e) {
          this.setEnemy(null);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=a845f09070059f25a8daa19bf34b54caa69e8ae0.js.map