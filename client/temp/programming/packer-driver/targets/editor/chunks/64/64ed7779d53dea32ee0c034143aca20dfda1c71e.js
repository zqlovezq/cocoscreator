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

        module.exports = EventEmitter;
        /**
         * Constructs a new event emitter instance.
         * @classdesc A minimal event emitter.
         * @memberof util
         * @constructor
         */

        function EventEmitter() {
          /**
           * Registered listeners.
           * @type {Object.<string,*>}
           * @private
           */
          this._listeners = {};
        }
        /**
         * Registers an event listener.
         * @param {string} evt Event name
         * @param {function} fn Listener
         * @param {*} [ctx] Listener context
         * @returns {util.EventEmitter} `this`
         */


        EventEmitter.prototype.on = function on(evt, fn, ctx) {
          (this._listeners[evt] || (this._listeners[evt] = [])).push({
            fn: fn,
            ctx: ctx || this
          });
          return this;
        };
        /**
         * Removes an event listener or any matching listeners if arguments are omitted.
         * @param {string} [evt] Event name. Removes all listeners if omitted.
         * @param {function} [fn] Listener to remove. Removes all listeners of `evt` if omitted.
         * @returns {util.EventEmitter} `this`
         */


        EventEmitter.prototype.off = function off(evt, fn) {
          if (evt === undefined) this._listeners = {};else {
            if (fn === undefined) this._listeners[evt] = [];else {
              var listeners = this._listeners[evt];

              for (var i = 0; i < listeners.length;) if (listeners[i].fn === fn) listeners.splice(i, 1);else ++i;
            }
          }
          return this;
        };
        /**
         * Emits an event by calling its listeners with the specified arguments.
         * @param {string} evt Event name
         * @param {...*} args Arguments
         * @returns {util.EventEmitter} `this`
         */


        EventEmitter.prototype.emit = function emit(evt) {
          var listeners = this._listeners[evt];

          if (listeners) {
            var args = [],
                i = 1;

            for (; i < arguments.length;) args.push(arguments[i++]);

            for (i = 0; i < listeners.length;) listeners[i].fn.apply(listeners[i++].ctx, args);
          }

          return this;
        }; // #endregion ORIGINAL CODE


        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=64ed7779d53dea32ee0c034143aca20dfda1c71e.js.map