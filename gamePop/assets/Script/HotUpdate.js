// HotUpdate.js

cc.Class({

    extends: cc.Component,



    properties: {

        manifestUrl: cc.Asset,

        _updating: false,

        _canRetry: false,

        _storagePath: '',
        label: {

            default: null,

            type: cc.Label

        },
        bar:{
            default:null,
            type:cc.ProgressBar
        }
    },
    checkCb(event) {
        switch (event.getEventCode()) {

            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:

                this.label.string = '本地文件丢失';

                break;

            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:

            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:

                this.label.string = '下载远程mainfest文件错误';

                break;

            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:

                this.label.string = '已经是最新版本';
                console.log('cocos----已经是最新版本');
                cc.director.loadScene("Login");
                break;

            case jsb.EventAssetsManager.NEW_VERSION_FOUND:

                this.label.string = '有新版本发现';
                console.log('cocos----有新版本发现');
                this.node.opacity = 255;
                this._updating = false;
                this.hotUpdate();
                break;

            default:
                return;

        }
        // this._am.setEventCallback(null);

        // this._checkListener = null;
    },
    updateCb(event) {

        var needRestart = false;
        console.log("cocos-----event.getEventCode()=",event.getEventCode())
        var failed = false;
        switch (event.getEventCode()) {

            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                this.label.string = '本地版本文件丢失，无法更新';

                failed = true;

                break;

            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                let percent = parseInt(event.getPercent() * 100);

                if (Number.isNaN(percent)) percent = 0;

                this.label.string = '更新进度:' + percent+"%";
                this.bar.progress = percent/100;
                break;

            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:

            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                this.label.string = '下载远程版本文件失败';

                failed = true;

                break;

            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                this.label.string = '当前为最新版本';

                failed = true;

                break;

            case jsb.EventAssetsManager.UPDATE_FINISHED:
                this.label.string = '更新完成. ' + event.getMessage();

                needRestart = true;

                break;

            case jsb.EventAssetsManager.UPDATE_FAILED:
                this.label.string = '更新失败. ' + event.getMessage();

                this._updating = false;

                this._canRetry = true;

                break;

            case jsb.EventAssetsManager.ERROR_UPDATING:
                this.label.string = '资源更新错误: ' + event.getAssetId() + ', ' + event.getMessage();

                break;

            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                this.label.string = event.getMessage();

                break;

            default:

                break;

        }

        if (failed) {

            this._am.setEventCallback(null);

            this._updateListener = null;

            this._updating = false;

        }



        if (needRestart) {

            this._am.setEventCallback(null);

            this._updateListener = null;

            // Prepend the manifest's search path

            var searchPaths = jsb.fileUtils.getSearchPaths();

            var newPaths = this._am.getLocalManifest().getSearchPaths();
            for (var i = 0; i < newPaths.length; i++) {
                if (searchPaths.indexOf(newPaths[i]) == -1) {
                    Array.prototype.unshift.apply(searchPaths, [newPaths[i]]);
                }
            }

            // This value will be retrieved and appended to the default search path during game startup,

            // please refer to samples/js-tests/main.js for detailed usage.

            // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.

            cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));

            jsb.fileUtils.setSearchPaths(searchPaths);



            cc.audioEngine.stopAll();

            cc.game.restart();
        }

    },
    retry() {

        if (!this._updating && this._canRetry) {

            this._canRetry = false;



            this.label.string = '重现获取失败资源...';

            this._am.downloadFailedAssets();

        }

    },
    checkUpdate() {
        if (this._updating) {

            this.label.string = '检查更新中...';

            return;

        }
        if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
            var url = this.manifestUrl.nativeUrl;
            if (cc.loader.md5Pipe) {
                url = cc.loader.md5Pipe.transformURL(url);
            }
            this._am.loadLocalManifest(url);
        }
        if (!this._am.getLocalManifest() || !this._am.getLocalManifest().isLoaded()) {

            this.label.string = '本地manifest加载失败...';

            return;

        }

        this._am.setEventCallback(this.checkCb.bind(this));



        this._am.checkUpdate();

        this._updating = true;
    },

    hotUpdate() {
        console.log("cocos-----开始更新");
        if (this._am && !this._updating) {
            console.log("cocos---hotUpdate--"+JSON.stringify(this._am));
            this._am.setEventCallback(this.updateCb.bind(this));
            if (this._am.getState() === jsb.AssetsManager.State.UNINITED) {
                // this._am.loadLocalManifest(this.manifestUrl);
                // Resolve md5 url
                var url = this.manifestUrl.nativeUrl;
                if (cc.loader.md5Pipe) {
                    url = cc.loader.md5Pipe.transformURL(url);
                }
                this._am.loadLocalManifest(url);
            }
            this._failCount = 0;
            this._am.update();
            this._updating = true;
        }

    },
    // use this for initialization

    onLoad() {

        if (!cc.sys.isNative) {

            return;

        }
        this._storagePath = ((jsb.fileUtils ? jsb.fileUtils.getWritablePath() : '/') + 'remote-asset');

        cc.log('Storage path for remote asset : ' + this._storagePath);

        this.versionCompareHandle = (versionA, versionB) => {

            this.label.string = 'Compare: version A is ' + versionA + ', version B is ' + versionB;

            var vA = versionA.split('.');

            var vB = versionB.split('.');

            for (var i = 0; i < vA.length; ++i) {

                var a = parseInt(vA[i]);

                var b = parseInt(vB[i] || 0);

                if (a === b) {

                    continue;

                }

                else {

                    return a - b;

                }

            }

            if (vB.length > vA.length) {

                return -1;

            }

            else {

                return 0;

            }

        };


        // Init with empty manifest url for testing custom manifest

        this._am = new jsb.AssetsManager('', this._storagePath, this.versionCompareHandle);

        this._am.setVerifyCallback((path, asset) => {

            var compressed = asset.compressed;

            var expectedMD5 = asset.md5;

            var relativePath = asset.path;

            var size = asset.size;

            if (compressed) {

                // this.label.string = 'Verification passed : ' + relativePath;

                return true;

            } else {

                this.label.string = 'Verification passed : ' + relativePath + ' (' + expectedMD5 + ')';

                return true;

            }

        });



        // this.label.string = '热更新组件加载完毕，请手动点击检测按钮';



        if (cc.sys.os === cc.sys.OS_ANDROID) {

            // Some Android device may slow down the download process when concurrent tasks is too much.

            // The value may not be accurate, please do more test and find what's most suitable for your game.

            this._am.setMaxConcurrentTask(2);

            // this.label.string = 'Max concurrent tasks count have been limited to 2';

        }



        //检查更新

         this.checkUpdate();

    },



    onDestroy() {

        if (this._updateListener) {

            this._am.setEventCallback(null);

            this._updateListener = null;

        }

    }

});