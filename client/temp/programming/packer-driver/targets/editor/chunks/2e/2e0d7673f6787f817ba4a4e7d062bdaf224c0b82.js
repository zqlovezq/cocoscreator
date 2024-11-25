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

        module.exports = asPromise;
        /**
         * Callback as used by {@link util.asPromise}.
         * @typedef asPromiseCallback
         * @type {function}
         * @param {Error|null} error Error, if any
         * @param {...*} params Additional arguments
         * @returns {undefined}
         */

        /**
         * Returns a promise from a node-style callback function.
         * @memberof util
         * @param {asPromiseCallback} fn Function to call
         * @param {*} ctx Function context
         * @param {...*} params Function arguments
         * @returns {Promise<*>} Promisified function
         */

        function asPromise(fn, ctx
        /*, varargs */
        ) {
          var params = new Array(arguments.length - 1),
              offset = 0,
              index = 2,
              pending = true;

          while (index < arguments.length) params[offset++] = arguments[index++];

          return new Promise(function executor(resolve, reject) {
            params[offset] = function callback(err
            /*, varargs */
            ) {
              if (pending) {
                pending = false;
                if (err) reject(err);else {
                  var params = new Array(arguments.length - 1),
                      offset = 0;

                  while (offset < params.length) params[offset++] = arguments[offset];

                  resolve.apply(null, params);
                }
              }
            };

            try {
              fn.apply(ctx || null, params);
            } catch (err) {
              if (pending) {
                pending = false;
                reject(err);
              }
            }
          });
        } // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=2e0d7673f6787f817ba4a4e7d062bdaf224c0b82.js.map