System.register(["__unresolved_0", "__unresolved_1", "__unresolved_2", "__unresolved_3", "__unresolved_4"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _req0, _req1, _req2, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }, function (_unresolved_3) {
      _req0 = _unresolved_3.__cjsMetaURL;
    }, function (_unresolved_4) {
      _req1 = _unresolved_4.__cjsMetaURL;
    }, function (_unresolved_5) {
      _req2 = _unresolved_5.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";

        var protobuf = module.exports = require("./index-light");

        protobuf.build = "full"; // Parser

        protobuf.tokenize = require("./tokenize");
        protobuf.parse = require("./parse");
        protobuf.common = require("./common"); // Configure parser

        protobuf.Root._configure(protobuf.Type, protobuf.parse, protobuf.common); // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, () => ({
        './index-light': _req,
        './tokenize': _req0,
        './parse': _req1,
        './common': _req2
      }));
    }
  };
});
//# sourceMappingURL=dbedf040f03b4c5ed3c36a03270dc35c9f5b44f3.js.map