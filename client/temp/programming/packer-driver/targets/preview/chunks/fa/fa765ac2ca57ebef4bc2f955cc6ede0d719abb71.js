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
        // var Audio = require('Sound')

        /**
         * 装饰器
         * @param {*} decorator 
         */
        function wrap(decorator) {
          return function (obj, key) {
            var target = obj.prototype;
            var descriptor = Object.getOwnPropertyDescriptor(target, key);
            decorator(target, key, descriptor);
          };
        } //按下button后，加一个音效


        var buttonSound = wrap(function (target, key, descriptor) {
          Object.defineProperty(target, key, {
            value: function value(event) {
              // Audio.PlaySound("Button")
              if (window && window["GlobelPlaySound"]) {
                window["GlobelPlaySound"]("Button");
              }

              return descriptor.value.call(this, event);
            }
          });
        });
        buttonSound(cc.Button, "_onTouchEnded"); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=fa765ac2ca57ebef4bc2f955cc6ede0d719abb71.js.map