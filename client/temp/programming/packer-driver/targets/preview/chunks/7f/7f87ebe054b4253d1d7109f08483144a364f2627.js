System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsRoleState, AbsStateType, RoleState5Born, _crd;

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  _export("RoleState5Born", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbsRoleState = _unresolved_2.AbsRoleState;
      AbsStateType = _unresolved_2.AbsStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "443acFvt29F76aSFJ9vd0CS", "RoleState5Born", undefined);

      _export("RoleState5Born", RoleState5Born = class RoleState5Born extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBorn);
        }

        enter() {
          this.abs.info.onBorn();
          this.abs.updateHP();
          return super.enter();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7f87ebe054b4253d1d7109f08483144a364f2627.js.map