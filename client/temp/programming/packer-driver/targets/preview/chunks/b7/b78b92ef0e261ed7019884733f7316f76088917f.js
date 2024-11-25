System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsRoleState, AbsStateType, tab, RoleState7SkillCd, _crd;

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../Role", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  _export("RoleState7SkillCd", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbsRoleState = _unresolved_2.AbsRoleState;
      AbsStateType = _unresolved_2.AbsStateType;
    }, function (_unresolved_3) {
      tab = _unresolved_3.tab;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b66a0KDAh5OcpE9BriQMhzo", "RoleState7SkillCd", undefined);

      _export("RoleState7SkillCd", RoleState7SkillCd = class RoleState7SkillCd extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleSkillCd);
          this.abs = void 0;
        }

        enter() {
          this.abs.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ClearType.ClearType_Breath);
          this.abs.info.inSkillGroupCD((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack, this.onCdEnd.bind(this));
          this.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_BreathStart);
          this.updateCd(0);
          return super.enter();
        }

        updateFrame(delteTime) {
          this.abs.info.normalGroupCD.updateFrame(delteTime);
          this.updateCd(this.abs.info.normalGroupCD.getProgress());
        }

        leave() {
          this.updateCd(1);
        }

        onCdEnd() {
          this.avatarPlayComplete("");
        }

        avatarPlayComplete(animName) {
          this.abs.info.normalFillUp(); //装填

          this.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_BreathEnd);
          super.avatarPlayComplete(animName);
        }

        updateCd(per) {
          if (this.abs.isRole()) {
            this.abs.updateSkillCd(per);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=b78b92ef0e261ed7019884733f7316f76088917f.js.map