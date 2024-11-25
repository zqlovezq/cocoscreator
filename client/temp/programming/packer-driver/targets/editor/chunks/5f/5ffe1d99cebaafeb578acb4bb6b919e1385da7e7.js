System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, tab, EventMgr, FightEvent, AbsRoleState, AbsStateType, RoleState4Dead, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  _export("RoleState4Dead", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      tab = _unresolved_2.tab;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }, function (_unresolved_5) {
      AbsRoleState = _unresolved_5.AbsRoleState;
      AbsStateType = _unresolved_5.AbsStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "754dc53vjNLMpQgEXpjUlpF", "RoleState4Dead", undefined);

      _export("RoleState4Dead", RoleState4Dead = class RoleState4Dead extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).roleDead);
        }

        enter() {
          this.abs.info.checkRemoveBuff((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).ClearType.ClearType_Die);
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).deal_clear_bullet, this.abs);
          return super.enter();
        }

        avatarPlayComplete(animName) {
          (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
            error: Error()
          }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
            error: Error()
          }), FightEvent) : FightEvent).AbsRole_Deal, this.abs);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=5ffe1d99cebaafeb578acb4bb6b919e1385da7e7.js.map