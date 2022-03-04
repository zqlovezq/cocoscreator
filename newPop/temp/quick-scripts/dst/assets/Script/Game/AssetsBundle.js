
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AssetsBundle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9Bc3NldHNCdW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNIO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkhDO1FBM0hXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQUcsRUFBRSxDQUFDOztJQXFIekIsQ0FBQztJQXBIRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSTtRQUNKLElBQUksWUFBWSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtJQUNMLENBQUM7SUFDRDs7O01BR0U7SUFDRixvQ0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPO1FBQTNDLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMs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QU07UUFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRywwQkFBMEIsQ0FBQyxDQUFDO1lBQzlELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTNIYSxxQkFBUSxHQUFpQixJQUFJLENBQUM7SUE0SGhELG1CQUFDO0NBN0hELEFBNkhDLENBN0h5QyxFQUFFLENBQUMsU0FBUyxHQTZIckQ7a0JBN0hvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhpnkuKrlip/og71Bc3NldEJ1bmRsZS0tLT7otJ/otKPotYTmupDnmoTnrqHnkIZcbi8v5aaC5L2V5a6e546w5Z+65LqOQXNzZXRzQnVuZGxl55qE6LWE5rqQ566h55CG5qih5Z2XXG4vKipcbiAqIOi1hOa6kOeuoeeQhueahOaOpeWPo1xuICog6aKE5Yqg6L2977ya4oCc5Zy65pmv4oCd77yM5oiR5Lus6KaB55qE6YKj5Lqb6LWE5rqQ5YWI6aKE5Yqg6L296L+b5p2lXG4gKiBsZXQgcmVzUGtnID0ge1xuICogICAgICBhYuWMheWQjShrZXkpOntcbiAqICAgICAgICAgIGFzc2V0VHlwZTpjYy5QcmVmYWIsXG4gKiAgICAgICAgICB1cmxzOlvnrKzkuIDkuKrotYTmupDot6/lvoQs56ys5LqM5Liq6LWE5rqQ6Lev5b6EXVxuICogICAgICB9XG4gKiB9XG4gKiAxOnByZWxvYWRSZXNQa2cocmVzUGtnLHByb2dyZXNzRnVuYyxlbmRGdW5jKVxuICog6I635Y+W6LWE5rqQ55qE5o6l5Y+jXG4gKiAyOmdldEFzc2V0KGFiTmFtZSx1cmwpLS0tPui/lOWbnui1hOa6kFxuICogMzpyZWFsZXNlUmVzUGtnKHJlc1BrZyktLS0+6YeK5pS+6LWE5rqQXG4gKiA0OuWNleeLrOeahOWKoOi9vei1hOa6kO+8m1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldHNCdW5kbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEFzc2V0c0J1bmRsZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvdGFsQWI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBub3dBYjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHByb2dyZXNzRnVuYzogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgZW5kRnVuYzogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgYWJCdW5kcyA9IHt9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/ljZXkvotcbiAgICAgICAgaWYgKEFzc2V0c0J1bmRsZS5JbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgQXNzZXRzQnVuZGxlLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9veaIkeS7rOeahOi1hOa6kOWMhVxuICAgICAqIEBwYXJhbSByZXNQa2cgPSB7YWLljIXlkI06e2Fzc2V0VHlwZTpjYy5QcmVmYWIsdXJsczpb6Lev5b6EMV19fVxuICAgICovXG4gICAgcHJlbG9hZFJlc1BrZyhyZXNQa2csIHByb2dyZXNzRnVuYywgZW5kRnVuYyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsQWIgPSAwO1xuICAgICAgICB0aGlzLm5vd0FiID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmMgPSBwcm9ncmVzc0Z1bmM7XG4gICAgICAgIHRoaXMuZW5kRnVuYyA9IGVuZEZ1bmM7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxBYisrO1xuICAgICAgICAgICAgbGV0IGpzb24gPSByZXNQa2dba2V5XTtcbiAgICAgICAgICAgIGZvcihsZXQgdmFsIGluIGpzb24pe1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWwgKz0ganNvblt2YWxdLnVybHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0c0J1bmRsZShrZXksICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd0FiKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93QWIgPT09IHRoaXMudG90YWxBYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNJbkFzc2V0c0J1bmRsZShyZXNQa2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkQXNzZXRzQnVuZGxlKGFiTmFtZTogc3RyaW5nLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShhYk5hbWUsIChlcnIsIGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0Fzc2V0c0J1bmRsZV06bG9hZCBBc3NldHNCdW5kbGUgRXJyb3I6XCIgKyBhYk5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWJCdW5kc1thYk5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbQXNzZXRzQnVuZGxlXTpsb2FkIEFzc2V0c0J1bmRsZSBTdWNjZXNzOlwiICsgYWJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IGJ1bmRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRGdW5jKSB7XG4gICAgICAgICAgICAgICAgZW5kRnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0luQXNzZXRzQnVuZGxlKHJlc1BrZyk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzUGtnKSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IHJlc1BrZ1trZXldO1xuICAgICAgICAgICAgZm9yKGxldCB2YWwgaW4ganNvbil7XG4gICAgICAgICAgICAgICAgbGV0IHVybFNldCA9IGpzb25bdmFsXS51cmxzO1xuICAgICAgICAgICAgICAgIGxldCB0eXBlQ2xhc3MgPSBqc29uW3ZhbF0uYXNzZXRUeXBlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcyh0aGlzLmFiQnVuZHNba2V5XSwgdXJsU2V0W2ldLCB0eXBlQ2xhc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbG9hZFJlcyhhYkJ1bmRsZSwgdXJsLCB0eXBlQ2xhc3MpOiB2b2lkIHtcbiAgICAgICAgYWJCdW5kbGUubG9hZCh1cmwsIHR5cGVDbGFzcywgKGVycm9yLCBhc3NldCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3crKztcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBSZXNcIiArIHVybCArIFwiZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgUmVzXCIgKyB1cmwgKyBcInN1Y2Nlc3MhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NGdW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmModGhpcy5ub3csIHRoaXMudG90YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub3csIHRoaXMudG90YWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMubm93ID49IHRoaXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRGdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kRnVuYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAqIOiOt+WPlui1hOa6kFxuICAgKiBAcGFyYW0gYWJOYW1lLS0tPuWMheWQjVxuICAgKiBAcGFyYW0gdXJsLS0tLT7lnLDlnYBcbiAgKi9cbiAgICBnZXRBc3NldChhYk5hbWUsIHVybCk6IGFueSB7XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGFiTmFtZSk7XG4gICAgICAgIGlmIChidW5kbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2Vycm9yXTpcIiArIGFiTmFtZSArIFwiQXNzZXRzQnVuZGxlIG5vdCBsb2FkZWQ6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1bmRsZS5nZXQodXJsKTtcbiAgICB9XG4gICAgbG9hZFNjZW5lKGFiTmFtZSx1cmwpOmFueXtcbiAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJOYW1lKTtcbiAgICAgICAgaWYgKGJ1bmRsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbZXJyb3JdOlwiICsgYWJOYW1lICsgXCJBc3NldHNCdW5kbGUgbm90IGxvYWRlZDpcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBidW5kbGUubG9hZFNjZW5lKHVybCwgZnVuY3Rpb24gKGVyciwgc2NlbmUpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJ1blNjZW5lKHNjZW5lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8v6YeK5pS+YnVuZGxlXG4gICAgcmVhbGVzZVJlc1BrZyhhYk5hbWUpOiBhbnkge1xuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShhYk5hbWUpO1xuICAgICAgICBpZiAoYnVuZGxlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltlcnJvcl06XCIgKyBhYk5hbWUgKyBcIkFzc2V0c0J1bmRsZSBub3QgbG9hZGVkOlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJ1bmRsZS5yZWxlYXNlQWxsKCk7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZW1vdmVCdW5kbGUoYnVuZGxlKTtcbiAgICB9XG59XG4iXX0=