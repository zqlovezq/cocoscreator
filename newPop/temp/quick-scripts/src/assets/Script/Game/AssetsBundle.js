"use strict";
cc._RF.push(module, 'c0d4fRodptH+4vK9pQTa/85', 'AssetsBundle');
// Script/Game/AssetsBundle.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
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
var AssetsBundle = /** @class */ (function (_super) {
    __extends(AssetsBundle, _super);
    function AssetsBundle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.total = 0;
        _this.now = 0;
        _this.totalAb = 0;
        _this.nowAb = 0;
        _this.progressFunc = null;
        _this.endFunc = null;
        _this.abBunds = {};
        return _this;
    }
    AssetsBundle.prototype.onLoad = function () {
        //单例
        if (AssetsBundle.Instance === null) {
            AssetsBundle.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    };
    /**
     * 加载我们的资源包
     * @param resPkg = {ab包名:{assetType:cc.Prefab,urls:[路径1]}}
    */
    AssetsBundle.prototype.preloadResPkg = function (resPkg, progressFunc, endFunc) {
        var _this = this;
        this.total = 0;
        this.now = 0;
        this.totalAb = 0;
        this.nowAb = 0;
        this.progressFunc = progressFunc;
        this.endFunc = endFunc;
        for (var key in resPkg) {
            this.totalAb++;
            var json = resPkg[key];
            for (var val in json) {
                this.total += json[val].urls.length;
            }
        }
        for (var key in resPkg) {
            this.loadAssetsBundle(key, function () {
                _this.nowAb++;
                if (_this.nowAb === _this.totalAb) {
                    _this.loadAssetsInAssetsBundle(resPkg);
                }
            });
        }
    };
    AssetsBundle.prototype.loadAssetsBundle = function (abName, endFunc) {
        var _this = this;
        cc.assetManager.loadBundle(abName, function (err, bundle) {
            if (err !== null) {
                console.log("[AssetsBundle]:load AssetsBundle Error:" + abName);
                _this.abBunds[abName] = null;
            }
            else {
                console.log("[AssetsBundle]:load AssetsBundle Success:" + abName);
                _this.abBunds[abName] = bundle;
            }
            if (endFunc) {
                endFunc();
            }
        });
    };
    AssetsBundle.prototype.loadAssetsInAssetsBundle = function (resPkg) {
        for (var key in resPkg) {
            var json = resPkg[key];
            for (var val in json) {
                var urlSet = json[val].urls;
                var typeClass = json[val].assetType;
                for (var i = 0; i < urlSet.length; i++) {
                    this.loadRes(this.abBunds[key], urlSet[i], typeClass);
                }
            }
        }
    };
    AssetsBundle.prototype.loadRes = function (abBundle, url, typeClass) {
        var _this = this;
        abBundle.load(url, typeClass, function (error, asset) {
            _this.now++;
            if (error) {
                console.log("load Res" + url + "error:" + error);
            }
            else {
                console.log("load Res" + url + "success!");
            }
            if (_this.progressFunc) {
                _this.progressFunc(_this.now, _this.total);
            }
            console.log(_this.now, _this.total);
            if (_this.now >= _this.total) {
                if (_this.endFunc !== null) {
                    _this.endFunc();
                }
            }
        });
    };
    /**
   * 获取资源
   * @param abName--->包名
   * @param url---->地址
  */
    AssetsBundle.prototype.getAsset = function (abName, url) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        return bundle.get(url);
    };
    AssetsBundle.prototype.loadScene = function (abName, url) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.loadScene(url, function (err, scene) {
            cc.director.runScene(scene);
        });
    };
    //释放bundle
    AssetsBundle.prototype.realeseResPkg = function (abName) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    };
    AssetsBundle.Instance = null;
    return AssetsBundle;
}(cc.Component));
exports.default = AssetsBundle;

cc._RF.pop();