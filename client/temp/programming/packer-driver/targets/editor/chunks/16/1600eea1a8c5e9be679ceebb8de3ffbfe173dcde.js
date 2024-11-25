System.register(["__unresolved_0", "cc", "__unresolved_1", "__unresolved_2"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsBulletState, AbsStateType, BulletControl, BulletState102Move, _crd;

  function _reportPossibleCrUseOfAbsBulletState(extras) {
    _reporterNs.report("AbsBulletState", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "../../state/AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfBulletControl(extras) {
    _reporterNs.report("BulletControl", "../BulletControl", _context.meta, extras);
  }

  _export("BulletState102Move", void 0);

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

      _cclegacy._RF.push({}, "5c6efVegMNApY1WQ3O8p/p5", "BulletState102Move", undefined);

      _export("BulletState102Move", BulletState102Move = class BulletState102Move extends (_crd && AbsBulletState === void 0 ? (_reportPossibleCrUseOfAbsBulletState({
        error: Error()
      }), AbsBulletState) : AbsBulletState) {
        constructor() {
          super((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletMove);
          this.time = 0;
        }

        enter() {
          if (this.getAnimId() == 0) {
            return true;
          }

          return super.enter();
        }

        updateFrame(delteTime) {
          if (this.abs) {
            if (this.abs.isDead) {
              return;
            }

            if (this.abs.info.configTab.isIntervalEffect()) {
              this.time += delteTime;

              if (this.time >= this.abs.info.intervalTime()) {
                this.time = 0;
                (_crd && BulletControl === void 0 ? (_reportPossibleCrUseOfBulletControl({
                  error: Error()
                }), BulletControl) : BulletControl).ins.intervalTrigger(this.abs);
              }
            }

            this.abs.move && this.abs.move.updateFrame(delteTime);
          }
        }

        avatarPlayComplete(animName) {
          this.abs.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).bulletBoom);
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=1600eea1a8c5e9be679ceebb8de3ffbfe173dcde.js.map