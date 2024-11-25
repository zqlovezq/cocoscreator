System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RoleState2Move, FightRootControl, MonsterState2Move, _crd;

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState2Move(extras) {
    _reporterNs.report("RoleState2Move", "../../role/state/RoleState2Move", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../../../FightRootControl", _context.meta, extras);
  }

  _export("MonsterState2Move", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RoleState2Move = _unresolved_2.RoleState2Move;
    }, function (_unresolved_3) {
      FightRootControl = _unresolved_3.FightRootControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "554be/3VVBDdZ/qmlCuTzqx", "MonsterState2Move", undefined);

      _export("MonsterState2Move", MonsterState2Move = class MonsterState2Move extends (_crd && RoleState2Move === void 0 ? (_reportPossibleCrUseOfRoleState2Move({
        error: Error()
      }), RoleState2Move) : RoleState2Move) {
        constructor(...args) {
          super(...args);
          this.abs = void 0;
        }

        enter() {
          return super.enter();
        }

        updateFrame(dt) {
          if ((_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.monsterMove) {
            super.updateFrame(dt);
          }

          this.abs.aiHunt.updateFrame(dt);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=87c750d93f8ecbe3c0912ed2a61c4bb35e69995b.js.map