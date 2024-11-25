System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, Vec3, BulletMoveLine, BulletMoveForwardOwner, _crd, tempPos;

  function _reportPossibleCrUseOfBulletMoveLine(extras) {
    _reporterNs.report("BulletMoveLine", "./BulletMoveLine", _context.meta, extras);
  }

  function _reportPossibleCrUseOfAbsRole(extras) {
    _reporterNs.report("AbsRole", "../../obj/role/AbsRole", _context.meta, extras);
  }

  _export("BulletMoveForwardOwner", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      Vec3 = _cc.Vec3;
    }, function (_unresolved_2) {
      BulletMoveLine = _unresolved_2.BulletMoveLine;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "3698fo+NzFDwICvW9nUPiss", "BulletMoveForwardOwner", undefined);

      __checkObsolete__(['Vec3', 'math', 'setPropertyEnumTypeOnAttrs', 'v2', 'v3']);

      tempPos = new Vec3();
      /** 跟随 */

      _export("BulletMoveForwardOwner", BulletMoveForwardOwner = class BulletMoveForwardOwner extends (_crd && BulletMoveLine === void 0 ? (_reportPossibleCrUseOfBulletMoveLine({
        error: Error()
      }), BulletMoveLine) : BulletMoveLine) {
        constructor(...args) {
          super(...args);
          this.ownerAbs = void 0;
        }

        init() {
          super.init();
          this.ownerAbs = this.abs.owner.abs;
        }

        fly(dt) {
          if (this.ownerAbs && !this.ownerAbs.isDead) {
            tempPos.x = this.abs.owner.abs.getPosition().x + this.abs.info.configTab.BulletOffset[0] || 0;
            tempPos.y = this.abs.owner.abs.getPosition().y + this.abs.info.configTab.BulletOffset[1] || 0;
            this.setAbsPos(tempPos);
          }
        }
        /** 检查是否完成 */


        checkComplete() {
          if (this.ownerAbs && this.ownerAbs.isDead) {
            return true;
          }

          return super.checkComplete();
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=8b53a24a09e3748412c0f47adb89bdf8916720e7.js.map