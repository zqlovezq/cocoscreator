System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, Sound, AbsBulletState, AbsStateType, BulletState101Born, _crd;

  function _reportPossibleCrUseOfSound(extras) {
    _reporterNs.report("Sound", "../../../../../utils/Sound", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsBulletState(extras) {
    _reporterNs.report("AbsBulletState", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  _export("BulletState101Born", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      Sound = _unresolved_2.default;
    }, function (_unresolved_3) {
      AbsBulletState = _unresolved_3.AbsBulletState;
      AbsStateType = _unresolved_3.AbsStateType;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "2694aJZMJxDYLMfrioB7Ix7", "BulletState101Born", undefined);

      _export("BulletState101Born", BulletState101Born = class BulletState101Born extends (_crd && AbsBulletState === void 0 ? (_reportPossibleCrUseOfAbsBulletState({
        error: Error()
      }), AbsBulletState) : AbsBulletState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBorn);
        }

        enter() {
          (_crd && Sound === void 0 ? (_reportPossibleCrUseOfSound({
            error: Error()
          }), Sound) : Sound).ins.PlayHitEffect(this.abs.info.bornSound());
          return super.enter();
        }

        avatarPlayComplete(animName) {
          this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletMove);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=55465d52acd97fe2d6c216032756e690e35c9059.js.map