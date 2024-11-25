import { _decorator, assetManager, BlockInputEvents, Button, Color, Component, director, game, instantiate, Label, Layers, native, Node, path, Prefab, ProgressBar, ResolutionPolicy, Sprite, tween, UITransform, Vec3, view } from 'cc';
import { Global } from '../Global';
import { Func } from '../logic/utils/Func';
import { ChannelMgr } from '../channel/ChannelMgr';

const { ccclass, property } = _decorator;


@ccclass('UpdateView')
export class UpdateView extends Component {

    @property(ProgressBar)
    bar: ProgressBar = null

    @property(Label)
    lab: Label = null

    @property(Label)
    verLab: Label = null

    private _updating = false;
    private _canRetry = false;
    private _storagePath = '';
    private _am: native.AssetsManager = null!;
    private _checkListener = null;
    private _updateListener = null;
    private _failCount = 0;
    private versionCompareHandle: (versionA: string, versionB: string) => number = null!;

    cb: Function
    protected onLoad(): void {
        this.verLab.string = ""
        this.lab.string = ""
        this.showBar(false)
    }

    setCb(_cb: Function) {
        this.cb = _cb
    }

    check() {
        this.loadUpdate()
    }


    loadUpdate() {
        let paths = native.fileUtils.getSearchPaths()
        if (paths && paths.length > 0){
            this._storagePath = native.fileUtils.getSearchPaths()[0]
        }else{
            this._storagePath = ((native.fileUtils ? native.fileUtils.getWritablePath() : '/') + 'newUpdate');
        }
        console.log('Storage path for remote asset : ' + this._storagePath);
        console.log("当前搜索路径",paths)
        
        // // Setup your own version compare handler, versionA and B is versions in string
        // // if the return value greater than 0, versionA is greater than B,
        // // if the return value equals 0, versionA equals to B,
        // // if the return value smaller than 0, versionA is smaller than B.
        this.versionCompareHandle = function (versionA: string, versionB: string) {
            console.log("JS Custom Version Compare: version A is " + versionA + ', version B is ' + versionB);
            var vA = versionA.split('.');
            var vB = versionB.split('.');
            for (var i = 0; i < vA.length; ++i) {
                var a = parseInt(vA[i]);
                var b = parseInt(vB[i] || '0');
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

        // // Init with empty manifest url for testing custom manifest
        this._am = new native.AssetsManager('version/project.manifest', this._storagePath, this.versionCompareHandle);

        // // Setup the verification callback, but we don't have md5 check function yet, so only print some message
        // // Return true if the verification passed, otherwise return false
        this._am.setVerifyCallback(function (path: string, asset: any) {
            // // When asset is compressed, we don't need to check its md5, because zip file have been deleted.
            var compressed = asset.compressed;
            // // Retrieve the correct md5 value.
            var expectedMD5 = asset.md5;
            // // asset.path is relative path and path is absolute.
            var relativePath = asset.path;
            // // The size of asset file, but this value could be absent.
            var size = asset.size;
            if (compressed) {
                return true;
            }
            else {
                return true;
            }
        });
        Global.RES_VERSION = this._am.getLocalManifest().getVersion()
        this.verLab.string = Global.getVersionStr()
    }

    checkUpdate() {
        if (this._updating) {
            return;
        }

        this._am.setCDNUrl(Global.getHotUpdateURL())
        this._am.setEventCallback(this.checkCb.bind(this));

        this._am.checkUpdate();
        this._updating = true;
    }

    checkCb(event: any) {
        console.log('Code: ' + event.getEventCode());
        var isGame = false
        switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                // //下载清单文件失败，跳过热更新。
                isGame = true
                console.log("找不到本地清单文件，跳过了热更新。")
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                isGame = true
                console.log("下载清单文件失败，跳过热更新。")
                break;
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
                // //已经更新了最新的远程版本。
                isGame = true
                console.log("已经更新了最新的远程版本。")
                break;
            case native.EventAssetsManager.NEW_VERSION_FOUND:
                // //可以开始更新游戏
                console.log("可以开始更新游戏")
                ChannelMgr.gameHotfixStart()
                this.showBar(true)
                this.setProgress(0.01)
                isGame = false
                break;
            default:
                return;
        }

        this._am.setEventCallback(null!);
        this._checkListener = null;
        this._updating = false;
        if (isGame) {
            this.cb()
        } else {
            this.hotUpdate()
        }
    }

    showBar(isShow: boolean) {
        this.bar.node.active = this.lab.node.active = isShow
    }
    setProgress(progress: number) {
        let progressStr = (progress * 100).toFixed(2) + '%'
        this.bar.progress = progress
        this.lab.string = progressStr
    }

    hotUpdate() {
        if (this._am && !this._updating) {
            this._am.setEventCallback(this.updateCb.bind(this));

            this._failCount = 0;
            this._am.update();
            this._updating = true;
        }
    }

    updateCb(event: any) {
        var needRestart = false;
        var failed = false;
        switch (event.getEventCode()) {
            case native.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                console.log('找不到本地清单文件，跳过了热更新。')
                failed = true;
                break;
            case native.EventAssetsManager.UPDATE_PROGRESSION:
                // //更新中
                this.setProgress(Func.checkInt(event.getPercent()))
                break;
            case native.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
            case native.EventAssetsManager.ERROR_PARSE_MANIFEST:
                console.log('下载清单文件失败，跳过热更新。')
                failed = true;
                break;
            case native.EventAssetsManager.ALREADY_UP_TO_DATE:
                console.log('已经更新了最新的远程版本。')
                failed = true;
                break;
            case native.EventAssetsManager.UPDATE_FINISHED:
                // //更新完成
                console.log('更新完成')
                needRestart = true;
                ChannelMgr.gameHotfixSuccess()
                break;
            case native.EventAssetsManager.UPDATE_FAILED:
                // //更新失败 可以尝试再次更新
                console.log('更新失败 可以尝试再次更新')
                this._updating = false;
                this._canRetry = true;
                this.retry()
                break;
            case native.EventAssetsManager.ERROR_UPDATING:
                // //资源更新错误
                console.log('资源更新错误: ' + event.getAssetId() + ', ' + event.getMessage())
                break;
            case native.EventAssetsManager.ERROR_DECOMPRESS:
                // //解压时出错
                console.log('解压时出错')
                break;
            default:
                break;
        }

        if (failed) {
            this._am.setEventCallback(null!);
            this._updateListener = null;
            this._updating = false;
        }

        if (needRestart) {
            this._am.setEventCallback(null!);
            this._updateListener = null;
            game.restart()
            //热更完成
        }
    }

    retry() {
        if (!this._updating && this._canRetry) {
            this._canRetry = false;

            this.lab.string = "重试失败的文件"
            this._am.downloadFailedAssets();
        }
    }
}

