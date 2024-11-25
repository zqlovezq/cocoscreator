System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2", "__unresolved_3"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, RoleState3Attack, BulletControl, FightRootControl, MonsterState3Attack, _crd;

  function _reportPossibleCrUseOfRoleState3Attack(extras) {
    _reporterNs.report("RoleState3Attack", "../../role/state/RoleState3Attack", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../../../bullet/BulletControl", _context.meta, extras);
  }

  function _reportPossibleCrUseOfFightRootControl(extras) {
    _reporterNs.report("FightRootControl", "../../../../../FightRootControl", _context.meta, extras);
  }

  _export("MonsterState3Attack", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      RoleState3Attack = _unresolved_2.RoleState3Attack;
    }, function (_unresolved_3) {
      BulletControl = _unresolved_3.BulletControl;
    }, function (_unresolved_4) {
      FightRootControl = _unresolved_4.FightRootControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "49d55T1PdNGf6n1JCJydv07", "MonsterState3Attack", undefined);

      _export("MonsterState3Attack", MonsterState3Attack = class MonsterState3Attack extends (_crd && RoleState3Attack === void 0 ? (_reportPossibleCrUseOfRoleState3Attack({
        error: Error()
      }), RoleState3Attack) : RoleState3Attack) {
        emitBullet() {
          if (!(_crd && FightRootControl === void 0 ? (_reportPossibleCrUseOfFightRootControl({
            error: Error()
          }), FightRootControl) : FightRootControl).ins.monsterAttack) {
            return;
          } //怪物直接发送子弹


          (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.audoEmitBullet(this.tmpSkill.bulletTab, this.abs, this.bulletGroupId);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8fd0f4cc3cbbaca59d659e87d73ad4dabc346281.js.map