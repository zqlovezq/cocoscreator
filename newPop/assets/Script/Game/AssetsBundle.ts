//写个功能AssetBundle--->负责资源的管理
//如何实现基于AssetsBundle的资源管理模块
/**
 * 资源管理的接口
 * 预加载：“场景”，我们要的那些资源先预加载进来
 * let resPkg = {
 *      ab包名(key):{
 *          assetType:cc.Prefab,
 *          urls:[第一个资源路径,第二个资源路径]
 *      }
 * }
 * 1:preloadResPkg(resPkg,progressFunc,endFunc)
 * 获取资源的接口
 * 2:getAsset(abName,url)--->返回资源
 * 3:realeseResPkg(resPkg)--->释放资源
 * 4:单独的加载资源；
 */
export default class AssetsBundle extends cc.Component {
    public static Instance: AssetsBundle = null;
    private total: number = 0;
    private now: number = 0;
    private totalAb: number = 0;
    private nowAb: number = 0;
    private progressFunc: Function = null;
    private endFunc: Function = null;
    private abBunds = {};
    onLoad() {
        //单例
        if (AssetsBundle.Instance === null) {
            AssetsBundle.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }
    /**
     * 加载我们的资源包
     * @param resPkg = {ab包名:{assetType:cc.Prefab,urls:[路径1]}}
    */
    preloadResPkg(resPkg, progressFunc, endFunc): void {
        this.total = 0;
        this.now = 0;
        this.totalAb = 0;
        this.nowAb = 0;
        this.progressFunc = progressFunc;
        this.endFunc = endFunc;
        for (let key in resPkg) {
            this.totalAb++;
            let json = resPkg[key];
            for(let val in json){
                this.total += json[val].urls.length;
            }
        }
        for (let key in resPkg) {
            this.loadAssetsBundle(key, () => {
                this.nowAb++;
                if (this.nowAb === this.totalAb) {
                    this.loadAssetsInAssetsBundle(resPkg);
                }
            })
        }
    }
    private loadAssetsBundle(abName: string, endFunc: Function): void {
        cc.assetManager.loadBundle(abName, (err, bundle) => {
            if (err !== null) {
                console.log("[AssetsBundle]:load AssetsBundle Error:" + abName);
                this.abBunds[abName] = null;
            } else {
                console.log("[AssetsBundle]:load AssetsBundle Success:" + abName);
                this.abBunds[abName] = bundle;
            }
            if (endFunc) {
                endFunc();
            }
        })

    }
    private loadAssetsInAssetsBundle(resPkg): void {
        for (let key in resPkg) {
            let json = resPkg[key];
            for(let val in json){
                let urlSet = json[val].urls;
                let typeClass = json[val].assetType;
                for (let i = 0; i < urlSet.length; i++) {
                    this.loadRes(this.abBunds[key], urlSet[i], typeClass)
                }
            }
        }
    }
    private loadRes(abBundle, url, typeClass): void {
        abBundle.load(url, typeClass, (error, asset) => {
            this.now++;
            if (error) {
                console.log("load Res" + url + "error:" + error);
            }
            else {
                console.log("load Res" + url + "success!");
            }
            if (this.progressFunc) {
                this.progressFunc(this.now, this.total);
            }
            console.log(this.now, this.total);
            if (this.now >= this.total) {
                if (this.endFunc !== null) {
                    this.endFunc();
                }
            }
        })
    }
    /**
   * 获取资源
   * @param abName--->包名
   * @param url---->地址
  */
    getAsset(abName, url): any {
        let bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        return bundle.get(url);
    }
    loadScene(abName,url):any{
        let bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.loadScene(url, function (err, scene) {
            cc.director.runScene(scene);
        });
    }
    //释放bundle
    realeseResPkg(abName): any {
        let bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    }
}
