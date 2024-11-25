System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RoleState5Born, MonsterState5Born, _crd;

  function _reportPossibleCrUseOfMonster(extras) {
    _reporterNs.report("Monster", "../Monster", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRoleState5Born(extras) {
    _reporterNs.report("RoleState5Born", "../../role/state/RoleState5Born", _context.meta, extras);
  }

  _export("MonsterState5Born", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RoleState5Born = _unresolved_2.RoleState5Born;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "590cd83vaFKRYoW3qNNM2Dv", "MonsterState5Born", undefined);

      _export("MonsterState5Born", MonsterState5Born = class MonsterState5Born extends (_crd && RoleState5Born === void 0 ? (_reportPossibleCrUseOfRoleState5Born({
        error: Error()
      }), RoleState5Born) : RoleState5Born) {
        constructor(...args) {
          super(...args);
          this.abs = void 0;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=dc47cf6ec571a47267469fd8080390dda917ffe6.js.map