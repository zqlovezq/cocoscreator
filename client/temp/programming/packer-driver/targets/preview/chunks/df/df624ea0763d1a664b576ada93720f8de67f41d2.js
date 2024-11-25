System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RoleState4Dead, EventMgr, FightEvent, MonsterState4Dead, _crd;

  function _reportPossibleCrUseOfRoleState4Dead(extras) {
    _reporterNs.report("RoleState4Dead", "../../role/state/RoleState4Dead", _context.meta, extras);
  }

  function _reportPossibleCrUseOfEventMgr(extras) {
    _reporterNs.report("EventMgr", "../../../../../../mgr/EventMgr", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightEvent(extras) {
    _reporterNs.report("FightEvent", "../../../../../define/FightEvent", _context.meta, extras);
  }

  function _reportPossibleCrUseOfMonsterInfo(extras) {
    _reporterNs.report("MonsterInfo", "../MonsterInfo", _context.meta, extras);
  }

  _export("MonsterState4Dead", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RoleState4Dead = _unresolved_2.RoleState4Dead;
    }, function (_unresolved_3) {
      EventMgr = _unresolved_3.EventMgr;
    }, function (_unresolved_4) {
      FightEvent = _unresolved_4.FightEvent;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "acb87b2IoxMLZ7Kvf+5Lr4e", "MonsterState4Dead", undefined);

      _export("MonsterState4Dead", MonsterState4Dead = class MonsterState4Dead extends (_crd && RoleState4Dead === void 0 ? (_reportPossibleCrUseOfRoleState4Dead({
        error: Error()
      }), RoleState4Dead) : RoleState4Dead) {
        enter() {
          if (this.abs.info.isBoss) {
            (_crd && EventMgr === void 0 ? (_reportPossibleCrUseOfEventMgr({
              error: Error()
            }), EventMgr) : EventMgr).emitFight((_crd && FightEvent === void 0 ? (_reportPossibleCrUseOfFightEvent({
              error: Error()
            }), FightEvent) : FightEvent).Boss_Dead_State);
          }

          return super.enter();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=df624ea0763d1a664b576ada93720f8de67f41d2.js.map