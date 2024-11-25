cc.game.once(cc.Game.EVENT_ENGINE_INITED, function () {
    if (!window["EDITOR"]) {
        return
    }
    cc.js.mixin(cc.internal.SpineSkeleton.prototype, {
        updateAnimation(dt) {
            this.markForUpdateRenderData();
            // if (EDITOR_NOT_IN_PREVIEW) return;
            if (this.paused) return;
            dt *= this._timeScale * 1.0;
            if (this.isAnimationCached()) {
                if (this._isAniComplete) {
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
                    if (this._accTime > this._headAniInfo?.delay) {
                        const aniInfo = this._headAniInfo;
                        this._headAniInfo = null;
                        this.setAnimation(0, aniInfo?.animationName, aniInfo?.loop);
                    }
                    return;
                }
                this._updateCache(dt);
            } else {
                this._instance.updateAnimation(dt);
            }
        }
    });
})
