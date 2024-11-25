System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, RoleState6Revive, MonsterState6Revive, _crd, velocity, nextTime;

  function _reportPossibleCrUseOfRoleState6Revive(extras) {
    _reporterNs.report("RoleState6Revive", "../../role/state/RoleState6Revive", _context.meta, extras);
  }

  _export("MonsterState6Revive", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      RoleState6Revive = _unresolved_2.RoleState6Revive;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c2a87cPg8RMK6Iwfg8Z+Kvk", "MonsterState6Revive", undefined);

      __checkObsolete__(['Vec3']);

      velocity = new Vec3();
      nextTime = 100;

      _export("MonsterState6Revive", MonsterState6Revive = class MonsterState6Revive extends (_crd && RoleState6Revive === void 0 ? (_reportPossibleCrUseOfRoleState6Revive({
        error: Error()
      }), RoleState6Revive) : RoleState6Revive) {});

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=da33ae2ca6ed8eb3753b35cc9e565d904706a323.js.map