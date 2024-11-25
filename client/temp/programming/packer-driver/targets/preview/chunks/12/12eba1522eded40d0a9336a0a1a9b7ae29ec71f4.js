System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsRoleState, AbsStateType, tab, RoleState6Revive, _crd, velocity;

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  _export("RoleState6Revive", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      AbsRoleState = _unresolved_2.AbsRoleState;
      AbsStateType = _unresolved_2.AbsStateType;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b1b76F1qdpDcJu2ZC0IBFfm", "RoleState6Revive", undefined);

      __checkObsolete__(['Vec3']);

      velocity = new Vec3();

      _export("RoleState6Revive", RoleState6Revive = class RoleState6Revive extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleRevive);
        }

        enter() {
          this.abs.isDead = false;
          this.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_Revive);
          this.abs.info.onRevice();
          this.abs.isActive = false;
          return super.enter();
        }

        leave() {
          this.abs.isActive = true;
        }

        avatarPlayComplete(animName) {
          this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleIdle);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=12eba1522eded40d0a9336a0a1a9b7ae29ec71f4.js.map