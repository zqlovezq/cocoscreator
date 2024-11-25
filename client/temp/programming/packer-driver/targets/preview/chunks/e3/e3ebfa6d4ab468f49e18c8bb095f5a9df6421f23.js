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

        module.exports = inquire;
        /**
         * Requires a module only if available.
         * @memberof util
         * @param {string} moduleName Module to require
         * @returns {?Object} Required module if available and not empty, otherwise `null`
         */

        function inquire(moduleName) {
          try {
            var mod = eval("quire".replace(/^/, "re"))(moduleName); // eslint-disable-line no-eval

            if (mod && (mod.length || Object.keys(mod).length)) return mod;
          } catch (e) {} // eslint-disable-line no-empty


          return null;
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=e3ebfa6d4ab468f49e18c8bb095f5a9df6421f23.js.map