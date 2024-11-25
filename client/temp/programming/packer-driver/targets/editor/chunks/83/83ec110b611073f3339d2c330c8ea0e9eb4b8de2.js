System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsRoleState, AbsStateType, RoleState10Vertigo, _crd;

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  _export("RoleState10Vertigo", void 0);

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

      _cclegacy._RF.push({}, "652834oRyxBx6HMHQdrcFC/", "RoleState10Vertigo", undefined);

      _export("RoleState10Vertigo", RoleState10Vertigo = class RoleState10Vertigo extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleVertigo);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=83ec110b611073f3339d2c330c8ea0e9eb4b8de2.js.map