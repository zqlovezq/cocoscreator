System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ViewSize, _crd, CollisionGroup, BulletForwardArrow, FightMacro;

  function _reportPossibleCrUseOfViewSize(extras) {
    _reporterNs.report("ViewSize", "../../define/ViewDefine", _context.meta, extras);
  }

  _export("FightMacro", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      ViewSize = _unresolved_2.ViewSize;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "b8a233hseNG/J95QzM5qy7U", "FightDefine", undefined);

      __checkObsolete__(['Size', 'sys', 'Vec3', 'view']);

      /** 碰撞组 */
      _export("CollisionGroup", CollisionGroup = /*#__PURE__*/function (CollisionGroup) {
        CollisionGroup["role"] = "role";
        CollisionGroup["roleBullet"] = "roleBullet";
        CollisionGroup["monster"] = "monster";
        CollisionGroup["monsterBullet"] = "monsterBullet";
        return CollisionGroup;
      }({}));
      /** 多向剑相交类型 */


      _export("BulletForwardArrow", BulletForwardArrow = /*#__PURE__*/function (BulletForwardArrow) {
        BulletForwardArrow[BulletForwardArrow["parallel"] = 1] = "parallel";
        BulletForwardArrow[BulletForwardArrow["intersect"] = 2] = "intersect";
        return BulletForwardArrow;
      }({}));

      (function (_FightMacro) {
        const MAX_CHANCE = _FightMacro.MAX_CHANCE = 10000;
        const MAX_HERO_COUNT = _FightMacro.MAX_HERO_COUNT = 5;
        const PERCENT = _FightMacro.PERCENT = 10000;
        const SECOND = _FightMacro.SECOND = 1000;

        let RolePosType = /*#__PURE__*/function (RolePosType) {
          RolePosType[RolePosType["one"] = 1] = "one";
          RolePosType[RolePosType["two"] = 2] = "two";
          RolePosType[RolePosType["three"] = 3] = "three";
          RolePosType[RolePosType["four"] = 4] = "four";
          RolePosType[RolePosType["five"] = 5] = "five";
          return RolePosType;
        }({});

        _FightMacro.RolePosType = RolePosType;

        function isEffectShowBelow(id) {
          return id >= 8000 && id <= 9000;
        }

        _FightMacro.isEffectShowBelow = isEffectShowBelow;

        function damageStr(damage) {
          let str;

          if (damage < 1000) {
            str = damage.toString();
          } else if (1000 <= damage && damage < 1000000) {
            str = (damage / 1000).toFixed(1) + "K";
          } else {
            str = (damage / 1000000).toFixed(1) + "M";
          }

          return str;
        }

        _FightMacro.damageStr = damageStr;

        function serverPostion(position) {
          position.x -= (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfFrameSize.width;
          position.y -= (_crd && ViewSize === void 0 ? (_reportPossibleCrUseOfViewSize({
            error: Error()
          }), ViewSize) : ViewSize).halfFrameSize.height;
        }

        _FightMacro.serverPostion = serverPostion;
      })(FightMacro || _export("FightMacro", FightMacro = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=217777fcdaffeada268347232e6fd8f1b38da0e5.js.map