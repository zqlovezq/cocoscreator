System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, AbsStateType, DefaultState, StateMachine, _crd;

  function _reportPossibleCrUseOfAbsObj(extras) {
    _reporterNs.report("AbsObj", "../AbsObj", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsState(extras) {
    _reporterNs.report("AbsState", "./AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsStateType(extras) {
    _reporterNs.report("AbsStateType", "./AbsState", _context.meta, extras);
  }

  function _reportPossibleCrUseOfDefaultState(extras) {
    _reporterNs.report("DefaultState", "./AbsState", _context.meta, extras);
  }

  _export("StateMachine", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
    }, function (_unresolved_2) {
      AbsStateType = _unresolved_2.AbsStateType;
      DefaultState = _unresolved_2.DefaultState;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6eaebeDroBOIq50Q4VW9vyN", "StateMachine", undefined);

      /** 状态机 */
      _export("StateMachine", StateMachine = class StateMachine {
        constructor() {
          this.abs = null;
          this.states = [];
          this.currentState = null;
        }

        isState(stateType) {
          return this.currentState && this.currentState.stateType === stateType;
        }

        setAbs(abs) {
          this.abs = abs;
          this.clearState();
        }

        updateFrame(deltaTime) {
          if (this.abs.isDead) return;
          if (this.currentState) this.currentState.updateFrame(deltaTime);
        }

        avatarPlayComplete(animName) {
          if (this.currentState) this.currentState.avatarPlayComplete(animName);
        }

        clearState() {
          this.states.length = 0;
          this.addState(new (_crd && DefaultState === void 0 ? (_reportPossibleCrUseOfDefaultState({
            error: Error()
          }), DefaultState) : DefaultState)());
        }

        addStates(ss) {
          for (var s of ss) {
            this.addState(s);
          }
        }

        addState(s) {
          if (this.states[s.stateType]) {
            throw new Error("AbsState is same");
          }

          this.states[s.stateType] = s;
        }

        run() {
          this.changeState((_crd && AbsStateType === void 0 ? (_reportPossibleCrUseOfAbsStateType({
            error: Error()
          }), AbsStateType) : AbsStateType).default);
        }

        changeState(stateType) {
          if (this.currentState) this.currentState.leave();
          this.currentState = this.states[stateType];
          this.currentState.setAbs(this.abs);
          this.currentState.enter();
          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af50e577cd8b670ba7d6b1022f862f4cbbdaaad9.js.map