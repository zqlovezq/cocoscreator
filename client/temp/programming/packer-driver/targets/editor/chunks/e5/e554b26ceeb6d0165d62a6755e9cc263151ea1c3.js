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
        cc.game.once(cc.Game.EVENT_ENGINE_INITED, function () {
          if (!window["EDITOR"]) {
            return;
          }

          cc.js.mixin(cc.internal.SpineSkeleton.prototype, {
            updateAnimation(dt) {
              this.markForUpdateRenderData(); // if (EDITOR_NOT_IN_PREVIEW) return;

              if (this.paused) return;
              dt *= this._timeScale * 1.0;

              if (this.isAnimationCached()) {
                if (this._isAniComplete) {
                  var _this$_headAniInfo;

                  if (this._animationQueue.length === 0 && !this._headAniInfo) {
                    const frameCache = this._animCache;

                    if (frameCache && frameCache.isInvalid()) {
                      frameCache.updateToFrame(0);
                      const frames = frameCache.frames;
                      this._curFrame = frames[frames.length - 1];
                    }

                    return;
                  }

                  if (!this._headAniInfo) {
                    this._headAniInfo = this._animationQueue.shift();
                  }

                  this._accTime += dt;

                  if (this._accTime > ((_this$_headAniInfo = this._headAniInfo) == null ? void 0 : _this$_headAniInfo.delay)) {
                    const aniInfo = this._headAniInfo;
                    this._headAniInfo = null;
                    this.setAnimation(0, aniInfo == null ? void 0 : aniInfo.animationName, aniInfo == null ? void 0 : aniInfo.loop);
                  }

                  return;
                }

                this._updateCache(dt);
              } else {
                this._instance.updateAnimation(dt);
              }
            }

          });
        }); // #endregion ORIGINAL CODE

        _export("default", _cjsExports = module.exports);
      }, {});
    }
  };
});
//# sourceMappingURL=e554b26ceeb6d0165d62a6755e9cc263151ea1c3.js.map