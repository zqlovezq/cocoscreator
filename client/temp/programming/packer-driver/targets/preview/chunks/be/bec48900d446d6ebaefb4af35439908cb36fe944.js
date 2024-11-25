System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, RoleState1Idle, MonsterState1Idle, _crd;

  function _reportPossibleCrUseOfRoleState1Idle(extras) {
    _reporterNs.report("RoleState1Idle", "../../role/state/RoleState1Idle", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../Monster", _context.meta, extras);
  }

  _export("MonsterState1Idle", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      RoleState1Idle = _unresolved_2.RoleState1Idle;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "e2fbb1ZvuZF4ZwSyBvS6IYu", "MonsterState1Idle", undefined);

      __checkObsolete__(['Vec3']);

      _export("MonsterState1Idle", MonsterState1Idle = class MonsterState1Idle extends (_crd && RoleState1Idle === void 0 ? (_reportPossibleCrUseOfRoleState1Idle({
        error: Error()
      }), RoleState1Idle) : RoleState1Idle) {
        constructor() {
          super(...arguments);
          this.abs = void 0;
        }

        enter() {
          this.abs.aiHunt.nextCheck = 0;
          return super.enter();
        }

        updateFrame(dt) {
          super.updateFrame(dt);
          this.abs.aiHunt.updateFrame(dt);
        }

        avatarPlayComplete(animName) {}

        checkEnterAttack() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=bec48900d446d6ebaefb4af35439908cb36fe944.js.map