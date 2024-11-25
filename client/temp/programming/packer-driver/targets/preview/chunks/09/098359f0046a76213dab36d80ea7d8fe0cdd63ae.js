System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsRoleState, AbsStateType, tab, RoleState9BackJump, _crd, tempPos, startPos;

  function _reportPossibleCrUseOfAbsRoleState(extras) {
    _reporterNs.report("AbsRoleState", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../../../../Table/table_gen", _context.meta, extras);
  }

  _export("RoleState9BackJump", void 0);

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

      _cclegacy._RF.push({}, "e62edb1H59FIKiz6F1X9X1X", "RoleState9BackJump", undefined);

      __checkObsolete__(['Vec3']);

      tempPos = new Vec3();
      startPos = new Vec3();

      _export("RoleState9BackJump", RoleState9BackJump = class RoleState9BackJump extends (_crd && AbsRoleState === void 0 ? (_reportPossibleCrUseOfAbsRoleState({
        error: Error()
      }), AbsRoleState) : AbsRoleState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).RoleBackJump);
          this.step = 0;
          this.totalTime = 0;
          this.nowTime = 0;
        }

        enter() {
          this.abs.animationId = this.abs.backJump[1];
          startPos.x = this.abs.getPosition().x;
          startPos.y = this.abs.getPosition().y;
          tempPos.x = startPos.x;
          tempPos.y = startPos.y;
          this.totalTime = this.abs.backJump[2] || 1000;
          this.step = this.abs.backJump[0] / this.totalTime;
          this.nowTime = 0;
          return true;
        }

        updateFrame(dt) {
          this.nowTime += dt;

          if (this.nowTime >= this.totalTime) {
            this.nowTime = this.totalTime;
          }

          tempPos.x = startPos.x + this.step * this.nowTime;
          this.abs.setPosition(tempPos);
        }

        avatarPlayComplete(animName) {
          startPos.x += this.abs.backJump[0];
          this.abs.setPosition(startPos);
          this.abs.info.onSkillTrigger((_crd && tab === void 0 ? (_reportPossibleCrUseOftab({
            error: Error()
          }), tab) : tab).Triggertype.Triggertype_BackJumpFinish);
          super.avatarPlayComplete(animName);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=098359f0046a76213dab36d80ea7d8fe0cdd63ae.js.map