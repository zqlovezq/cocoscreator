//注意！！！
//本文件不能引用除Analytics外的任何其他脚本！！！！

import Analytics, { CAEvtID, CAEvtName } from "./Analytics";
import { WechatgameServerId, WechatgameVer } from "./wechat_ver";

//启用动态合图
cc.macro.CLEANUP_IMAGE_CACHE = false;
cc.dynamicAtlasManager.enabled = true;

const SizeKB = 1024
const SizeMB = 1024 * 1024

const {ccclass, property} = cc._decorator;

declare let window: Window & {
    game_version:string;
    wx:any;
    Sentry:any;
    __errorHandler:(file:string, line:number, err:string, callstack:string)=>void;
};

@ccclass
export default class UpdateScene extends cc.Component {
    @property(cc.Label)
    lblVersion:cc.Label = null;

    @property(cc.ProgressBar)
    progressBar: cc.ProgressBar = null; 

    @property(cc.Label)
    lblPercent: cc.Label = null;

    @property(cc.Node)
    nodeLoading:cc.Node = null;

    @property(cc.Node)
    nodeInit:cc.Node = null;

    private _am:jsb.AssetsManager
    private _loadDone = false;

    onLoad () {

        this.nodeInit.active = true;
        this.nodeLoading.active = false;

        let version = "0.0.0"
        let env = "production"
        let initSentry = true
        if(cc.sys.isNative) {
            //原生端
            env = "native"
            jsb.Device.setKeepScreenOn(true)
            // let searchPath = jsb.fileUtils.getSearchPaths()
            // console.log(`searchPath: ${JSON.stringify(searchPath)}`)
            let storagePath = jsb.fileUtils.getWritablePath() + "update";
            this._am = new jsb.AssetsManager("", storagePath)

            if(this._am.loadLocalManifest("assets/version/project.manifest")) {
                console.log(`loadLocalManifest succeed: ${this._am.getLocalManifest().getVersion()}, url:${this._am.getLocalManifest().getVersionFileUrl()}`)
                window.game_version = this._am.getLocalManifest().getVersion()
                this.lblVersion.string = `ver.${window.game_version}`
                version = window.game_version
            } else {
                console.log("loadLocalManifest failed~")
            }
        } else if(cc.sys.platform == cc.sys.WECHAT_GAME && window.wx) {
            //微信小游戏有自己的监控，不上报
            initSentry = false;

            //获取版本号(非release环境无法获取版本号,所以需要写死在代码里面)
            window.game_version = WechatgameVer;
            this.lblVersion.string = `t.${WechatgameServerId} ver.${window.game_version}`
            version = window.game_version

            try {
                // let accountInfo = window.wx.getAccountInfoSync();
                // if(accountInfo) {
                //     console.log(`${JSON.stringify(accountInfo)}`)
                //     // if(accountInfo.miniProgram.version != "") {
                //     //     window.game_version = accountInfo.miniProgram.version
                //     //     this.lblVersion.string = `ver.${window.game_version}`
                //     //     version = window.game_version
                //     // }
                // }

                //屏幕常亮
                if(window.wx.setKeepScreenOn) {
                    window.wx.setKeepScreenOn({
                        keepScreenOn: true
                    }).catch(()=>{

                    });
                }

                //授权信息检测
                window.wx.getSetting({
                    success (res) {
                        console.log(res.authSetting);
                        if (!res.authSetting["scope.userInfo"]) {
                            window.wx.authorize({
                                scope: 'scope.userInfo',
                                success: function(){
                                    cc.director.emit("scope.userInfo", true)
                                },
                                fail: function() {
                                    //获取微信界面大小
                                    let sysInfo = window.wx.getSystemInfoSync();
                                    let width = sysInfo.screenWidth;
                                    let height = sysInfo.screenHeight;

                                    console.log("用户信息未授权");
                                    let button = window.wx.createUserInfoButton({
                                        type: 'text',
                                        text: '',
                                        style: {
                                            left: 0,
                                            top: 0,
                                            width: width,
                                            height: height,
                                            backgroundColor: '#00000000',//最后两位为透明度
                                            color: '#ffffff',
                                            fontSize: 20,
                                            textAlign: "center",
                                            lineHeight: height,
                                        }
                                    });
                                    button.onTap((res) => {
                                        if (res.userInfo) {
                                            console.log("用户授权:", res);
                                            cc.director.emit("scope.userInfo", true)
                                        }else {
                                            console.log("用户拒绝授权:", res);
                                        }
                                        button.destroy();
                                    });
                                },
                            })
                        }
                    }
                })
            } catch(e) {
            }
        }

        if(!CC_PREVIEW && initSentry && window.Sentry) {
            //错误上报
            window.Sentry.init({
                dsn: "https://a394c4094bd44553b50d57ccab67bab7@qmzg2h5-test.gameserver.youxigu.com:19001/2",
                environment: CC_PREVIEW ? "preview" : env,
                release: version,
                debug: false,
                autoSessionTracking: false, 
            })

            if(cc.sys.isNative) {
                //原生端需要用window.__errorHandler来捕捉错误
                window.__errorHandler = function (file:string,line:number,errStr:string,stack:string) {
                    let err = new Error()
                    err.name = errStr
                    err.message = errStr
                    err.stack = stack

                    let evtStart = err.name.indexOf(" ", 1)
                    if(evtStart >= 0) {
                        let evtEnd = err.name.indexOf(":", evtStart + 1)
                        if(evtEnd >= 0) {
                            err.name = err.name.substring(evtStart + 1, evtEnd)
                        }
                    }
                    window.Sentry.captureException(err)
                }
            }
        }

        /* zhibo-S@20230410 for <删除打点> */
        //数据统计        
        // Analytics.Instance.Init({
        //     appID: "686610080",         // 游戏ID
        //     version: version,           // 游戏/应用版本号
        //     storeID: "",                // 分发渠道
        //     engine: "cocos",            // 游戏引擎
        // });
        /* zhibo-E@20230410 for <删除打点> */
    }

    start() {
        cc.assetManager.presets['bundle'].maxConcurrency = 1024;
        cc.assetManager.presets['bundle'].maxRequestsPerFrame = 1024;

        //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.LoadFirstRes) /* zhibo-@20230410 for <删除打点> */
        this.loadScript()
        this.schedule(this.loadScript.bind(this), 5.0)
    }

    loadScript() {
        console.log("loadScript...")
        cc.assetManager.loadBundle("Script", (err: Error, bundle: cc.AssetManager.Bundle)=>{
            if(err) {
                console.error(err)
                //Analytics.Instance.EventFailed(CAEvtID.EventTracking, CAEvtName.LoadFirstRes, `loadBundle Script faild: ${err.message}`) /* zhibo-@20230410 for <删除打点> */
                return;
            }
                
            this.unscheduleAllCallbacks();
            if(this._loadDone) {
                return;
            }
            this._loadDone = true;

            //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoadFirstRes) /* zhibo-@20230410 for <删除打点> */

            if(cc.sys.isNative) {
                if(this._am) {
                    this._am.setEventCallback(this.eventCallback.bind(this))
                    this._am.checkUpdate() //检查更新
                }
            } else {
                //Analytics.Instance.EventStart(CAEvtID.EventTracking, CAEvtName.LoadLoginScene) /* zhibo-@20230410 for <删除打点> */
                cc.director.loadScene("LoginScene", ()=>{
                    //Analytics.Instance.EventSuccess(CAEvtID.EventTracking, CAEvtName.LoadLoginScene) /* zhibo-@20230410 for <删除打点> */
                })
            }
        })
    }

    eventCallback(event: jsb.EventAssetsManager) {
        var needRestart = false;
        console.log('Code: ' + event.getEventCode());
        switch (event.getEventCode())
        {
            case jsb.EventAssetsManager.ALREADY_UP_TO_DATE:
                //已经是最新版本
                console.log("ALREADY_UP_TO_DATE")
                cc.director.loadScene("LoginScene")
                break;
            case jsb.EventAssetsManager.NEW_VERSION_FOUND:
                //发现新版本
                this.nodeInit.active = false;
                this.nodeLoading.active = true;
                this.progressBar.progress = 0;
                this.lblPercent.string = ""
                this._am.update()
                console.log("NEW_VERSION_FOUND")
                break;
            case jsb.EventAssetsManager.UPDATE_PROGRESSION:
                this.setDownloadProgress(event.getDownloadedBytes(), event.getTotalBytes())
                break;
            case jsb.EventAssetsManager.UPDATE_FINISHED:
                //更新完成
                console.log("UPDATE_FINISHED")
                this.progressBar.progress = 1;
                this.setDownloadProgress(event.getTotalBytes(), event.getTotalBytes())
                this.scheduleOnce(()=>{
                    this.Restart()
                }, 0.2)
                break;
            case jsb.EventAssetsManager.ASSET_UPDATED:
                break;
            default:
                console.error("update failed: " + this.getErrorMsg(event))
                cc.director.loadScene("LoginScene")
                break;
        }
    }

    getErrorMsg(event: jsb.EventAssetsManager) {
        switch (event.getEventCode()) {
            case jsb.EventAssetsManager.ERROR_NO_LOCAL_MANIFEST:
                return "ERROR_NO_LOCAL_MANIFEST"
            case jsb.EventAssetsManager.ERROR_DOWNLOAD_MANIFEST:
                return "ERROR_DOWNLOAD_MANIFEST"
            case jsb.EventAssetsManager.ERROR_PARSE_MANIFEST:
                return "ERROR_PARSE_MANIFEST"
            case jsb.EventAssetsManager.UPDATE_FAILED:
                return  "UPDATE_FAILED: " + event.getMessage()
            case jsb.EventAssetsManager.ERROR_UPDATING:
                return "ERROR_UPDATING: " + event.getMessage()
            case jsb.EventAssetsManager.ERROR_DECOMPRESS:
                return "ERROR_UPDATING: " + event.getMessage()
        }
        return ""
    }

    Restart() {
        // Prepend the manifest's search path
        var searchPaths = jsb.fileUtils.getSearchPaths();
        var newPaths = this._am.getLocalManifest().getSearchPaths();
        console.log(`Old SearchPaths: ${JSON.stringify(searchPaths)}`)
        console.log(`Manifest SearchPaths: ${JSON.stringify(newPaths)}`)
        Array.prototype.unshift.apply(searchPaths, newPaths);
        searchPaths = this.trimSearchPath(searchPaths)
        console.log(`New SearchPaths: ${JSON.stringify(searchPaths)}`)
        // This value will be retrieved and appended to the default search path during game startup,
        // please refer to samples/js-tests/main.js for detailed usage.
        // !!! Re-add the search paths in main.js is very important, otherwise, new scripts won't take effect.
        cc.sys.localStorage.setItem('HotUpdateSearchPaths', JSON.stringify(searchPaths));
        jsb.fileUtils.setSearchPaths(searchPaths);

        cc.audioEngine.stopAll();
        cc.game.restart();
    }

    trimSearchPath(searchPaths:string[]) {
        let newSearchPath = []
        for(let path of searchPaths) {
            let index = newSearchPath.findIndex(value=>{
                return value == path;
            })
            if(index < 0) { 
                //newSearchPath中没有这个path才添加
                newSearchPath.push(path)
            }
        }
        return newSearchPath
    }

    setDownloadProgress(downloadBytes:number, totalBytes:number) {
        if(totalBytes <= 0) {
            return
        }

        this.progressBar.progress = downloadBytes / totalBytes
        if(totalBytes < SizeMB) {
            this.lblPercent.string = `${(downloadBytes/SizeKB).toFixed(2)}KB / ${(totalBytes/SizeKB).toFixed(2)}KB`
        } else {
            this.lblPercent.string = `${(downloadBytes/SizeMB).toFixed(2)}MB / ${(totalBytes/SizeMB).toFixed(2)}MB`
        }
    }
}
