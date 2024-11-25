System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, AbsBuff, _crd, tempPos;

  function _reportPossibleCrUseOfBuffTab(extras) {
    _reporterNs.report("BuffTab", "../../test/HeroTabData", _context.meta, extras);
  }

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../../../../Table/table_gen", _context.meta, extras);
  }

  _export("AbsBuff", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "c3cfcYcE89NwKGhE+bwCCoM", "AbsBuff", undefined);

      __checkObsolete__(['Vec3', 'View', 'game', 'size', 'v2', 'view']);

      tempPos = new Vec3();

      _export("AbsBuff", AbsBuff = class AbsBuff {
        constructor() {
          this.lifeTime = 0;
          this.passTime = 0;
          this.buffTab = void 0;
          this.data = void 0;
          this._valid = false;
          this.configId = void 0;
          this.configTab = void 0;
        }

        setConfigId(id) {
          this.configId = id;
          this._valid = true;
          this.passTime = 0;
        }

        isValid() {
          return this._valid;
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
//# sourceMappingURL=038c6cc4f9d44578c9c3b3e88a644a6edc9edfe5.js.map