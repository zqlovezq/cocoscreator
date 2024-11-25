System.register(["__unresolved_0", "cc"], function (_export, _context) {
  "use strict";

  var _reporterNs, _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, ModuleUtil, _crd;

  function _reportPossibleCrUseOftab(extras) {
    _reporterNs.report("tab", "../Table/table_gen", _context.meta, extras);
  }

  _export("ModuleUtil", void 0);

  return {
    setters: [function (_unresolved_) {
      _reporterNs = _unresolved_;
    }, function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "7e821GDVttL2qzD9dDV1jlk", "ModuleUtil", undefined);

      __checkObsolete__(['Color', 'Graphics', 'Layers', 'Node', 'Rect', 'Vec2', 'Vec3', 'sp', 'sys']);

      /** 模块相关 */
      _export("ModuleUtil", ModuleUtil = class ModuleUtil {
        static checkIsOpen(module) {
          return true;
        }

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=af190c38eb19e276f672d910dd692cfd3532e0d1.js.map