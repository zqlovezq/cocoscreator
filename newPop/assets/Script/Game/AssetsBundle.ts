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
    private abBunds = {};
    private total: number = 0;
    private now: number = 0;
    private progressFunc: Function = null;
    private endFunc: Function = null;
    protected onLoad(): void {
        if (AssetsBundle.Instance === null) {
            AssetsBundle.Instance = this;
        } else {
            //this.destroy();
            //临时方案
            AssetsBundle.Instance = this;
            return;
        }
    }
    /**
     * 加载我们的资源包
     * @param resPkg = {ab包名:{assetType:cc.Prefab,urls:[路径1]}}
    */
    preloadResPkg(abName:string, resPkg, progressFunc, endFunc): void {
        this.total = 0;
        this.now = 0;
        this.progressFunc = progressFunc;
        this.endFunc = endFunc;
        for (let key in resPkg) {
            this.total += resPkg[key].urls.length;
        }
        this.loadAssetsBundle(abName, () => {
            this.loadAssetsInAssetsBundle(abName,resPkg);
        })
    }
    private loadAssetsBundle(abName: string, endFunc: Function): void {
        cc.assetManager.loadBundle(abName, (err, bundle) => {
            if (err !== null) {
                this.abBunds[abName] = null;
            } else {
                this.abBunds[abName] = bundle;
            }
            if (endFunc) {
                endFunc();
            }
        })

    }
    private loadAssetsInAssetsBundle(abName:string,resPkg): void {
        for (let key in resPkg) {
            let urlSet = resPkg[key].urls;
            let typeClass = resPkg[key].assetType;
            for (let i = 0; i < urlSet.length; i++) {
                this.loadRes(this.abBunds[abName], urlSet[i], typeClass)
            }
        }
    }
    private loadRes(abBundle, url, typeClass): void {
        abBundle.load(url, typeClass, (error, asset) => {
            this.now++;
            if (this.progressFunc) {
                this.progressFunc(this.now, this.total);
            }
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
    public getAsset(abName, url): any {
        let bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        return bundle.get(url);
    }
    public loadScene(abName, url): any {
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
    public realeseResPkg(abName): any {
        let bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    }
}
