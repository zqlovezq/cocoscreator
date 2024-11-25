System.register(["__unresolved_0", "__unresolved_1"], function (_export, _context) {
  "use strict";

  var _cjsLoader, _req, _cjsExports, __cjsMetaURL;

  _export("default", void 0);

  return {
    setters: [function (_unresolved_) {
      _cjsLoader = _unresolved_.default;
    }, function (_unresolved_2) {
      _req = _unresolved_2.__cjsMetaURL;
    }],
    execute: function () {
      _export("__cjsMetaURL", __cjsMetaURL = _context.meta.url);

      _cjsLoader.define(__cjsMetaURL, function (exports, require, module, __filename, __dirname) {
        // #region ORIGINAL CODE
        "use strict";
        /**
         * Wrappers for common types.
         * @type {Object.<string,IWrapper>}
         * @const
         */

        var wrappers = exports;

        var Message = require("./message");
        /**
         * From object converter part of an {@link IWrapper}.
         * @typedef WrapperFromObjectConverter
         * @type {function}
         * @param {Object.<string,*>} object Plain object
         * @returns {Message<{}>} Message instance
         * @this Type
         */

        /**
         * To object converter part of an {@link IWrapper}.
         * @typedef WrapperToObjectConverter
         * @type {function}
         * @param {Message<{}>} message Message instance
         * @param {IConversionOptions} [options] Conversion options
         * @returns {Object.<string,*>} Plain object
         * @this Type
         */

        /**
         * Common type wrapper part of {@link wrappers}.
         * @interface IWrapper
         * @property {WrapperFromObjectConverter} [fromObject] From object converter
         * @property {WrapperToObjectConverter} [toObject] To object converter
         */
        // Custom wrapper for Any


        wrappers[".google.protobuf.Any"] = {
          fromObject: function (object) {
            // unwrap value type if mapped
            if (object && object["@type"]) {
              // Only use fully qualified type name after the last '/'
              var name = object["@type"].substring(object["@type"].lastIndexOf("/") + 1);
              var type = this.lookup(name);
              /* istanbul ignore else */

              if (type) {
                // type_url does not accept leading "."
                var type_url = object["@type"].charAt(0) === "." ? object["@type"].slice(1) : object["@type"]; // type_url prefix is optional, but path seperator is required

                if (type_url.indexOf("/") === -1) {
                  type_url = "/" + type_url;
                }

                return this.create({
                  type_url: type_url,
                  value: type.encode(type.fromObject(object)).finish()
                });
              }
            }

            return this.fromObject(object);
          },
          toObject: function (message, options) {
            // Default prefix
            var googleApi = "type.googleapis.com/";
            var prefix = "";
            var name = ""; // decode value if requested and unmapped

            if (options && options.json && message.type_url && message.value) {
              // Only use fully qualified type name after the last '/'
              name = message.type_url.substring(message.type_url.lastIndexOf("/") + 1); // Separate the prefix used

              prefix = message.type_url.substring(0, message.type_url.lastIndexOf("/") + 1);
              var type = this.lookup(name);
              /* istanbul ignore else */

              if (type) message = type.decode(message.value);
            } // wrap value if unmapped


            if (!(message instanceof this.ctor) && message instanceof Message) {
              var object = message.$type.toObject(message, options);
              var messageName = message.$type.fullName[0] === "." ? message.$type.fullName.slice(1) : message.$type.fullName; // Default to type.googleapis.com prefix if no prefix is used

              if (prefix === "") {
                prefix = googleApi;
              }

              name = prefix + messageName;
              object["@type"] = name;
              return object;
            }

            return this.toObject(message, options);
          }
        }; // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, () => ({
        './message': _req
      }));
    }
  };
});
//# sourceMappingURL=d6daace48a9e37394c574dba0c6c56f73d4d51de.js.map