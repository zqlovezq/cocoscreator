System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, __checkObsolete__, __checkObsoleteInNamespace__, v3, CocosUtil, _crd;

  _export("CocosUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
      __checkObsolete__ = _cc.__checkObsolete__;
      __checkObsoleteInNamespace__ = _cc.__checkObsoleteInNamespace__;
      v3 = _cc.v3;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "36194dyWEpGpLyzfQMXsFnv", "CocosUtil", undefined);

      __checkObsolete__(['Node', 'TiledMap', 'Vec2', 'Vec3', 'sys', 'v3']);

      _export("CocosUtil", CocosUtil = class CocosUtil {
        static v3(x, y, z, out) {
          var v = v3() || out;
          v.x = x || 0;
          v.y = y || x;
          v.z = z || x;
          return v;
        }

        static v3Out(out) {
          out = out || this.v3(0);
          return out;
        }

        static pos() {}

      });

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=6eea2949174979b53652e0850f098638c8e56835.js.map