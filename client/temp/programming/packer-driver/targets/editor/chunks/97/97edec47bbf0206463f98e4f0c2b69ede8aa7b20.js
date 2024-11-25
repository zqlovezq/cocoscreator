System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tab, FightData, AbsRoleState, AbsStateType, PlayerControl, RoleState1Idle, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightData(extras) {
    _reporterNs.report("FightData", "../../../../../data/FightData", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfPlayerControl(extras) {
    _reporterNs.report("PlayerControl", "../PlayerControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfRole(extras) {
    _reporterNs.report("Role", "../Role", _context.meta, extras);
  }

  _export("RoleState1Idle", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      FightData = _unresolved_3.FightData;
    }, function (_unresolved_4) {
      AbsRoleState = _unresolved_4.AbsRoleState;
      AbsStateType = _unresolved_4.AbsStateType;
    }, function (_unresolved_5) {
      PlayerControl = _unresolved_5.PlayerControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "19224AJns9LxLXfXl4CBajI", "RoleState1Idle", undefined);

      _export("RoleState1Idle", RoleState1Idle = class RoleState1Idle extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleIdle);
        }

        enter() {
          if (this.abs.info.isVertigo()) {
            this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).RoleVertigo);
            return false;
          }

          let boo = super.enter();

          if ((_crd && FightData === void 0 ? (_reportPossibleCrUseOfFightData({
            error: Error()
          }), FightData) : FightData).ins.pause) {
            this.abs.avatar.updatePause(true);
            return true;
          }

          if (boo) {
            this.checkEnterAttack();
          }

          if (this.abs.isRole()) {
            this.abs.showShotPos();
          }

          return boo;
        }

        updateFrame(delteTime) {
          super.updateFrame(delteTime);
          this.checkEnterAttack();
        }

        checkEnterAttack() {
          let isAudo = this.abs.info.isAudo;

          if (this.abs.info.isLeader && (_crd && PlayerControl === void 0 ? (_reportPossibleCrUseOfPlayerControl({
            error: Error()
          }), PlayerControl) : PlayerControl).ins.getClicking()) {
            isAudo = true;
            this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleAttack);
            return;
          }

          if (isAudo && this.abs.info.checkSkillGroupUse((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).AttackType.AttackType_Attack)) {
            this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
              error: Error()
            }), AbsStateType) : AbsStateType).roleAttack);
          }
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=97edec47bbf0206463f98e4f0c2b69ede8aa7b20.js.map