System.register(["__unresolved_0"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        module.exports = {};
        /**
         * Named roots.
         * This is where pbjs stores generated structures (the option `-r, --root` specifies a name).
         * Can also be used manually to make roots available across modules.
         * @name roots
         * @type {Object.<string,Root>}
         * @example
         * // pbjs -r myroot -o compiled.js ...
         *
         * // in another module:
         * require("./compiled.js");
         *
         * // in any subsequent module:
         * var root = protobuf.roots["myroot"];
         */
        // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=f2ac7f28386b06a1c2c21d484fe9992155199bee.js.map