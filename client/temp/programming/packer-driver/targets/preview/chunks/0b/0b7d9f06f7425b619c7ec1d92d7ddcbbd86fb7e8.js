System.register(["cc"], function (_export, _context) {
  "use strict";

  var _cclegacy, _crd, ShaderUtil;

  _export("ShaderUtil", void 0);

  return {
    setters: [function (_cc) {
      _cclegacy = _cc.cclegacy;
    }],
    execute: function () {
      _crd = true;

      _cclegacy._RF.push({}, "6c831aH2JhGF46cREcW0izT", "ShaderUtil", undefined);

      (function (_ShaderUtil) {
        function flashWhiteSprite() {
          return "shader/white/white-sprite-material";
        }

        _ShaderUtil.flashWhiteSprite = flashWhiteSprite;

        function flashWhiteSpine() {
          return "shader/white/white-spine-material";
        }

        _ShaderUtil.flashWhiteSpine = flashWhiteSpine;
      })(ShaderUtil || _export("ShaderUtil", ShaderUtil = {}));

      _cclegacy._RF.pop();

      _crd = false;
    }
  };
});
//# sourceMappingURL=0b7d9f06f7425b619c7ec1d92d7ddcbbd86fb7e8.js.map