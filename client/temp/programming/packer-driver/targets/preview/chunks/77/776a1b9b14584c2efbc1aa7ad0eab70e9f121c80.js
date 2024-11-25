System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsBulletState, AbsStateType, BulletControl, BulletState103Boom, _crd;

  function _reportPossibleCrUseOfAbsBulletState(extras) {
    _reporterNs.report("AbsBulletState", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../BulletControl", _context.meta, extras);
  }

  _export("BulletState103Boom", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbsBulletState = _unresolved_2.AbsBulletState;
      AbsStateType = _unresolved_2.AbsStateType;
    }, function (_unresolved_3) {
      BulletControl = _unresolved_3.BulletControl;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c19511BKLlBD5KEGPM2vY5D", "BulletState103Boom", undefined);

      _export("BulletState103Boom", BulletState103Boom = class BulletState103Boom extends (_crd && AbsBulletState === void 0 ? (_reportPossibleCrUseOfAbsBulletState({
        error: Error()
      }), AbsBulletState) : AbsBulletState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBoom);
        }

        avatarPlayComplete(animName) {
          (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
            error: Error()
          }), BulletControl) : BulletControl).ins.checkDeathTrigger(this.abs); //销毁--

          this.abs.recycle();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=776a1b9b14584c2efbc1aa7ad0eab70e9f121c80.js.map