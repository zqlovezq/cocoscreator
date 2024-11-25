System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, CDTime, _crd;

  _export("CDTime", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "153b6wPcQNGmK59vsluxa1v", "CDTime", undefined);

      _export("CDTime", CDTime = class CDTime {
        constructor() {
          this.lifeTime = 0;
          this.passTime = 0;
          this._valid = false;
          this.cb = void 0;
          this.typeKey = void 0;
          this.speed = 1;
        }

        isValid() {
          return this._valid;
        }

        kill() {
          this.reset();
          this._valid = false;
        }

        reset() {
          this._valid = true;
          this.cb = null;
          this.passTime = 0;
          this.typeKey = "";
          this.speed = 1;
        }

        setTypeKey(key) {
          this.typeKey = key;
        }

        setLiftTime(time, fb) {
          this.lifeTime = Math.max(time, 0);
          this.cb = fb;
          this.passTime = 0;
          this.speed = 1;
        }

        setSpeed(speed) {
          this.speed = speed;
        }

        updateFrame(dt) {
          if (!this._valid) {
            return;
          }

          this.passTime = this.passTime + dt * this.speed;

          if (this.passTime >= this.lifeTime) {
            this.onTimeComplete();
            return;
          }
        }

        onTimeComplete() {
          this._valid = false;
          this.cb && this.cb(this.typeKey);
        }

        getProgress() {
          return this.passTime / this.lifeTime;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=e70a4489e35f1b057f9c696e80e7edabb0c2f5da.js.map