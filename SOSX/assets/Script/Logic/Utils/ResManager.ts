import { tab } from "../../Table/table_gen"
declare let window: Window & {
    wx: any;
}

export default class ResManager {
    private static _dict = new tab.Dictionary<string, cc.Asset[]>();
    private static _extra: cc.Asset[] = []

    //除了LoadResAsync函数，其他任何地方都不应该使用ResManager
    public static load<T extends cc.Asset>(paths: string, type: typeof cc.Asset,
        onProgress: (finish: number, total: number, item: cc.AssetManager.RequestItem) => void,
        onComplete: (error: Error, assets: T | null) => void) {
        if (paths.indexOf("?") > -1) {
            let res = ResManager.getBundleAsset<T>(paths, type);
            if (res) {
                ResManager.addRefByScene(res);
                if (onComplete) {
                    onComplete(null, res)
                }
            } else {
                ResManager.loadBundleAsset(paths, type,(error: Error, _res: T) => {
                    ResManager.addRefByScene(_res);
                    if (onComplete) {
                        onComplete(null, _res)
                    }
                });
            }
        } else {
            let res = cc.resources.get<T>(paths, type)
            if (res) {
                ResManager.addRefByScene(res);
                if (onComplete) {
                    onComplete(null, res)
                }
            } else {
                cc.resources.load(paths, type, onProgress, (error: Error, res: T) => {
                    if (res) {
                        ResManager.addRefByScene(res, true)
                    }
                    if (onComplete) {
                        onComplete(error, res)
                    }
                })
            }
        }
    }

    private static addRefByScene<T extends cc.Asset>(res: T, forece = false) {
        // let sceneName = cc.director.getScene().name
        // if(!forece && (res as any).__lastscene__ == sceneName) {
        //     return
        // }
        // (res as any).__lastscene__ = sceneName

        // let array = ResManager._dict.getValue(sceneName)
        // if(array !== undefined) {
        //     array.push(res)
        // } else {
        //     ResManager._dict.setValue(sceneName, [res])
        // }
        // res.addRef()
    }

    public static releaseAllScene() {
        // ResManager._dict.forEach((key:string, value:cc.Asset[])=>{
        //     for(let asset of value) {
        //         asset.decRef()
        //         this.printIfReleased(asset);

        //         if((asset as any).__lastscene__ == key) {
        //             (asset as any).__lastscene__ = ""
        //         }
        //     }
        //     return true
        // })

        // ResManager._dict.clear() //清除
        // if(window.wx && window.wx.triggerGC) {
        //     console.log("wx.triggerGC()")
        //     window.wx.triggerGC()
        // }
    }

    public static releaseCurrentScene() {
        // let sceneName = cc.director.getScene().name
        // let array = ResManager._dict.getValue(sceneName)
        // if(array !== undefined) {
        //     for(let asset of array) {
        //         asset.decRef()
        //         this.printIfReleased(asset);

        //         if((asset as any).__lastscene__ == sceneName) {
        //             (asset as any).__lastscene__ = ""
        //         }
        //     }
        //     ResManager._dict.remove(sceneName)
        // }

        // if(window.wx && window.wx.triggerGC) {
        //     window.wx.triggerGC()
        // }
    }

    public static releaseOtherScene() {
        // let sceneName = cc.director.getScene().name;
        // let sceneArray:cc.Asset[] = [];
        // ResManager._dict.forEach((key:string, value:cc.Asset[])=>{
        //     if(key == sceneName) {
        //         sceneArray = value;
        //     } else {
        //         for(let asset of value) {
        //             asset.decRef()
        //             this.printIfReleased(asset);

        //             if((asset as any).__lastscene__ == key) {
        //                 (asset as any).__lastscene__ = ""
        //             }
        //         }
        //     }
        //     return true
        // })

        // ResManager._dict.clear() //清除
        // if(sceneArray.length > 0) {
        //     ResManager._dict.setValue(sceneName, sceneArray)
        // }

        // if(window.wx && window.wx.triggerGC) {
        //     console.log("wx.triggerGC()")
        //     window.wx.triggerGC()
        // }
    }

    public static mergeResTo(dstScene: string, srcScene?: string) {
        // if(srcScene === undefined) {
        //     //默认取当前scene
        //     srcScene = cc.director.getScene().name;
        // }
        // let srcArray = ResManager._dict.getValue(srcScene)
        // if(srcArray === undefined) {
        //     return;
        // }

        // let dstArray = ResManager._dict.getValue(dstScene)
        // if(dstArray === undefined) {
        //     dstArray = srcArray
        // } else {
        //     dstArray = dstArray.concat(srcArray)
        // }
        // ResManager._dict.setValue(dstScene, dstArray)
        // ResManager._dict.remove(srcScene)
    }

    public static addExtraRef<T extends cc.Asset>(res: T) {
        // if(ResManager._extra.indexOf(res) < 0) {
        //     res.addRef()
        //     ResManager._extra.push(res)
        // }
    }

    public static defExtraRef<T extends cc.Asset>(res: T) {
        // let idx = ResManager._extra.indexOf(res)
        // if(idx >= 0) {
        //     res.decRef()
        //     ResManager._extra.splice(idx, 1)
        // }
    }

    public static printRes() {
        // let totalKB = 0;
        // cc.assetManager.assets.forEach((tex, id) => {
        //     if (tex != null && tex instanceof cc.Texture2D) {
        //         // cc.log(id);
        //         //cc.log("textrue: ", tex.width, "x", tex.height);
        //         let pixel = 32 / 8;
        //         let memKB = tex.width * tex.height * pixel / 1024;
        //         totalKB += memKB;
        //         //cc.log("momery: ", memKB, "KB");
        //     }
        // });
        // cc.log("total momery: ", totalKB, "KB");
    }

    private static printIfReleased(asset: cc.Asset) {
        // if(asset.refCount == 0) {
        //     cc.log(`release: ${asset.name}, ${(asset as any).__classname__}`)
        // } else if(asset.refCount < 0) {
        //     cc.error(`release error???`)
        // }
    }
    public static loadBundleAsset<T extends cc.Asset>(url: string,type?: typeof cc.Asset, complete?: Function): T {
        let abName = url.split("?")
        cc.assetManager.loadBundle(abName[0], (err, bundle) => {
            bundle.load(abName[1], (error, asset) => {
                if (error) {
                    cc.error(`load ${abName[1]} resources fail`);
                    complete(error,null);
                }
                if (complete) {
                    complete(null,asset)
                }
            })
        })
        return null
    }
    public static getBundleAsset<T extends cc.Asset>(path: string, type?: typeof cc.Asset): T {
        let abName = path.split("?")
        let bundle = cc.assetManager.getBundle(abName[0]);
        if (bundle === null) {
            return null;
        }
        return bundle.get(abName[1], type);
    }
}
