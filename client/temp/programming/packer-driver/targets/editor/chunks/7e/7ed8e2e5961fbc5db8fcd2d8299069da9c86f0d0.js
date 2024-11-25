System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, DamageTick, _crd;

  _export("DamageTick", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "90b73V1W05CsJ82F3aSUaoW", "DamageTick", undefined);

      _export("DamageTick", DamageTick = class DamageTick {
        constructor() {
          this.lifeTime = 0;
          this.passTime = 0;
          this._valid = false;
          this.bulletSoleId = "";
        }

        isValid() {
          return this._valid;
        }

        reset() {
          this._valid = false;
          this.lifeTime = 0;
          this.passTime = 0;
        }

        setLiftTime(time) {
          this.lifeTime = time;
          this.passTime = 0;
          this._valid = true;
        }

        updateFrame(dt) {
          if (!this._valid) {
            return;
          }

          this.passTime = this.passTime + dt;

          if (this.passTime >= this.lifeTime) {
            this.onTimeComplete();
            return;
          }
        }

        onTimeComplete() {
          this._valid = false;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=7ed8e2e5961fbc5db8fcd2d8299069da9c86f0d0.js.map