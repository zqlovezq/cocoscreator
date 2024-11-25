import { Asset, AssetManager, Font, Label, Node, NodeEventType, Prefab, Sprite, SpriteFrame, Texture2D, _decorator, assetManager, director, macro, path, resources, settings, sp } from "cc";
import { SceneMgr } from "./SceneMgr";
import { EDITOR } from "cc/env";
import { LangMgr } from "./LangMgr";


const { ccclass, property } = _decorator;

@ccclass('ResMgr')
export class ResMgr {
    static isRelease: boolean = false
    static log() {
        console.log("ResMgr.log", ResMgr.getBundle())
    }
    static gameResBundle: AssetManager.Bundle

    static cache: Map<string, {}> = new Map()

    static systemFont:Font = null

    static setFont(font:Font){
        ResMgr.systemFont = font
    }

    //全局只有gameRes一个有效bundle
    static getBundle(): AssetManager.Bundle {
        if (ResMgr.gameResBundle == null) {
            ResMgr.gameResBundle = assetManager.getBundle("gameRes")
        }
        return ResMgr.gameResBundle
    }

    static transforPath(paths: string, type: typeof Asset) {
        paths = LangMgr.transformPath(paths)
        if (type == SpriteFrame) {
            if (paths.indexOf("/spriteFrame") == -1) {
                paths = paths + "/spriteFrame"
            }
        } else if (type == Texture2D) {
            paths = paths + "/texture"
        }
        return paths
    }
    static get<T extends Asset>(paths: string, type: typeof Asset) {
        paths = ResMgr.transforPath(paths, type)
        return ResMgr.getBundle().get<T>(paths, type)
    }

    //除了LoadResAsync函数，其他任何地方都不应该使用ResMgr
    public static load<T extends Asset>(paths: string, type: typeof Asset,
        onProgress: (finish: number, total: number, item: AssetManager.RequestItem) => void,
        onComplete: (error: Error, assets: T | null) => void) {

        paths = ResMgr.transforPath(paths, type)

        let res = ResMgr.getBundle().get<T>(paths, type)
        if (res) {
            if (onComplete) {
                onComplete(null, res)
            }
        } else {
            ResMgr.getBundle().load(paths, type, onProgress, (error: Error, res: T) => {
                if (onComplete) {
                    onComplete(error, res)
                }
                let map = ResMgr.getSceneMap(SceneMgr.getNowSceneName())
                map[paths] = type
            })
        }
    }

    public static addRef(paths: string, type: typeof Asset) {
        ResMgr.load(paths, type, null, (err: Error, resource: any) => {
            if (resource) {
                resource.addRef()
            }
        })
    }

    public static preload(paths: string, type: typeof Asset,
        onComplete: () => void) {
        ResMgr.getBundle().preload(paths, type, (error: Error, items: AssetManager.RequestItem[]) => {
            onComplete && onComplete()
        })
    }

    public static release(path: string, type: typeof Asset) {
        if (ResMgr.isRelease) {
            path = ResMgr.transforPath(path, type)
            ResMgr.getBundle().release(path, type)
        }

        // setTimeout(() => {
        //     ResMgr.getBundle().preload(path)
        // }, 100);
    }

    static getSceneMap(sceneName: string) {
        if (!ResMgr.cache.has(sceneName)) {
            ResMgr.cache.set(sceneName, {})
        }
        return ResMgr.cache.get(sceneName)
    }
    public static releaseScene(sceneName: string) {
        let map = ResMgr.getSceneMap(sceneName)
        // console.log("释放场景资源", sceneName, map,ResMgr.cache)
        let ass: Asset
        for (let key in map) {
            let _type = map[key]
            ass = ResMgr.getBundle().get(key, _type)
            if (ass && ass.refCount == 0) {
                ResMgr.getBundle().release(key, _type)
                // delete map[key]
            }
        }


    }

    public static printCache() {
        for (const iterator of ResMgr.cache) {
            let map = iterator[1]
            for (let key in map) {
                let _type = map[key]
                if (ResMgr.getBundle().get(key, _type)) {
                    // console.log(key, ResMgr.getBundle().get(key, _type).refCount)
                }
            }
        }
    }
}

/*  */
export function LoadResAsync(url: string, type: typeof Asset,
    progressCallback?: (completedCount: number, totalCount: number, item: any) => void): Promise<any> {
    return new Promise(resolve => {
        ResMgr.load(url, type, progressCallback, (err: Error, resource: any) => {
            if (err) {
                console.error(url, err);
                resolve(null);
            } else {
                resolve(resource);
            }
        })
    })
}

sp.Skeleton.prototype.setSpData = function (data: sp.SkeletonData) {
    setSpData(this, data);
}

function setSpData(_spine: sp.Skeleton, data: sp.SkeletonData) {
    _spine.skeletonData = data
}

Label.prototype["start"] = function () {
    if (EDITOR) {
        return
    }
    if (this.useSystemFont && ResMgr.systemFont) {
        this.font = ResMgr.systemFont
    }
    // console.log("start", this.font, "更换字体", this.useSystemFont)
}

Sprite.prototype.setTexture = async function (icon: string) {
    setTexture(this, icon);
}

async function setTexture(sprite: Sprite, path: string) {
    if (path == null || !sprite || !sprite.isValid) {
        return;
    }
    sprite["loadPath"] = path
    if (path == "") {
        sprite.spriteFrame = null
        return
    }
    let SpriteFram: SpriteFrame = ResMgr.get(path, SpriteFrame);
    if (!SpriteFram) {
        SpriteFram = await LoadResAsync(path, SpriteFrame);
    }
    if (!sprite.isValid) {
        return
    }

    if (sprite["loadPath"] != path) {//解决多次加载引起的最终会显示加载最慢的资源问题
        return
    }
    if (SpriteFram != null) {
        sprite.spriteFrame = SpriteFram;
    }
    else {
        console.error("setTexture error :" + path);
    }
}

/* 从资源Map拿到资源数据 加载 */
export function loadByResMap(list: any, totalRes: number, progressCallback?: (progress: number) => void): Promise<any[]> {
    let promiseArray = []
    let completedRes = 0;

    for (const key in list) {
        const res = list[key];
        let loadPromise = LoadResAsync(res.url, res.type);
        promiseArray.push(loadPromise)
        loadPromise.then(() => {
            ++completedRes;
            progressCallback && progressCallback(completedRes / totalRes)
        })
    }

    return Promise.all(promiseArray);
}