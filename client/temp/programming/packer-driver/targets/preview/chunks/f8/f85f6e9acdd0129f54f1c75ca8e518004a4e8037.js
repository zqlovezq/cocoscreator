System.register(["__unresolved_0", "cc", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, FightMacro, _crd, FixedUtil;

  function _reportPossibleCrUseOfFightMacro(extras) {
    _reporterNs.report("FightMacro", "../define/FightDefine", _context.meta, extras);
  }

  _export("FixedUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }, function (_unresolved_2) {
      FightMacro = _unresolved_2.FightMacro;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "240efv1W7JGLI1C4mT5wSeT", "FixedUtil", undefined);

      __checkObsolete__(['Vec2', 'Vec3']);

      (function (_FixedUtil) {
        function toFixed() {
          return 0;
        }

        _FixedUtil.toFixed = toFixed;

        function deltaTimeMovePostion(out, pos, velocity, deltaTime, add) {
          if (add) {
            add = ((_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT + add) / (_crd && FightMacro === void 0 ? (_reportPossibleCrUseOfFightMacro({
              error: Error()
            }), FightMacro) : FightMacro).PERCENT;
          } else {
            add = 1;
          } //计算新位置


          out.x = pos.x + velocity.x * add * deltaTime / 1000;
          out.y = pos.y + velocity.y * add * deltaTime / 1000;
          return out;
        }

        _FixedUtil.deltaTimeMovePostion = deltaTimeMovePostion;
      })(FixedUtil || _export("FixedUtil", FixedUtil = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=f85f6e9acdd0129f54f1c75ca8e518004a4e8037.js.map