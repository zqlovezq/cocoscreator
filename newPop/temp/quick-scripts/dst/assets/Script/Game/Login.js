
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69b22qLxxJKdrL2JFXfTrAW', 'Login');
// Script/Game/Login.ts

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
var CocosBridge_1 = require("../Tools/CocosBridge");
var AssetsBundle_1 = require("./AssetsBundle");
var GameResPkg_1 = require("./GameResPkg");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.onLoad = function () {
        if (Login.Instance === null) {
            Login.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    };
    Login.prototype.LoginGame = function () {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        // this.loginLayer = this.node.getChildByName("login");
        // cc.Tools.breatheAnim(this.loginLayer.getChildByName("login_btn"));
        // cc.Tools.Event.on('getCode', this.getCode, this);
        // this.userPrivacy = this.loginLayer.getChildByName("user_privacy");
        // this.userProtocol = this.loginLayer.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            var wxToken = cc.sys.localStorage.getItem("token");
            if (!wxToken) {
                this.registerEvent();
            }
            else {
                CocosBridge_1.default.JSCallNative("preLoadRewardVideoAd", "" + { "token": wxToken });
                this.getAdTimes();
            }
        }
        else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjowLCJ1c2VyX2lkIjo3OTU5Miwib3Blbl9pZCI6Im9qbGR1NmIyMFMzbWtJM1pWNmgxOS1oU1YwQlUiLCJuaWNrX25hbWUiOiJZLvCfjLUiLCJnZW5kZXIiOjAsImF2YXRhciI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvNE9SaGdyendTeEVJUXk1anJmNXR3VE0wdmQ1ZjBHRDVGVWZiejRiV01ybktNVVJKVVJzQzhFMHZ2OTdLUVFFdERUR1RrbncxYWVka0FtZFEyeDZpYkRnLzEzMiIsImNyZWF0ZV90aW1lIjoxNjQ1NDI1NjYzLCJjaGFubmVsIjoibWVpenUyIiwiZGlzdGluY3RfaWQiOiI4ZDZjMGRmZC0yMzAzLTQwMTUtOTNjNS1lMjY1NGU1ZTI4ZmQiLCJpbWVpIjoiIiwibWFjIjoiMDI6MDA6MDA6MDA6MDA6MDAiLCJhbmRyb2lkX2lkIjoiNzZjZWYzMWRlNGE1NDY3NCIsIm9haWQiOiJmZWVmNWZiYi1jZjZiLTY3MzItYmM3Zi01YmZmNzdkZGRiNzkifQ.BmVpohnKod-1_L2paFDLMSDO1YgQR6CjUNTj1IXYMkc");
            this.getAdTimes();
        }
    };
    Login.prototype.registerEvent = function () {
        // this.protect = this.loginLayer.getChildByName("protect");
        // this.protect.active = true;
        // let acceptBtn = this.protect.getChildByName("accept_btn");
        // let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        // acceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // noAcceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // this.loginLayer.getChildByName("login_btn").on(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        // this.loginLayer.getChildByName("surn_btn").on(cc.Node.EventType.TOUCH_END, this.clickProtocol, this);
        // let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        // privacyBtn.on(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);
        // let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        // closePrivacy.on(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);
        // let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        // protocolBtn.on(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);
        // let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        // closeProtocol.on(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);
    };
    Login.prototype.closeProtectLayer = function (e) {
        // this.protect.active = false;
        // cc.Tools.getPermission();
    };
    Login.prototype.clickProtocol = function (e) {
        // let target = e.target;
        // let select = target.getChildByName("select");
        // if (this.protocol) {
        //     select.active = false;
        //     this.protocol = false;
        // } else {
        //     select.active = true;
        //     this.protocol = true;
        // }
    };
    // closePrivacyLayer(): void {
    //     this.userPrivacy.active = false;
    // }
    // showPrivacyLayer(): void {
    //     this.userPrivacy.active = true;
    // }
    // closeProtocolLayer(): void {
    //     this.userProtocol.active = false;
    // }
    // showProtocolLayer(): void {
    //     this.userProtocol.active = true;
    // }
    Login.prototype.removeEvent = function () {
        // this.loginLayer.getChildByName("login_btn").off(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        // this.loginLayer.getChildByName("surn_btn").off(cc.Node.EventType.TOUCH_END, this.clickProtocol, this)
        // let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        // privacyBtn.off(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);
        // let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        // closePrivacy.off(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);
        // let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        // protocolBtn.off(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);
        // let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        // closeProtocol.off(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);
        // let acceptBtn = this.protect.getChildByName("accept_btn");
        // let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        // acceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // noAcceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
    };
    // loginBtn(): void {
    //     if (cc.sys.isNative) {
    //         if (this.protocol) {
    //             CocosBridge.JSCallNative("wxLogin", "wx_login");
    //         } else {
    //             cc.Tools.showTips(this.loginLayer, "<color=#000000>请先同意隐私政策和用户协议</color>")
    //         }
    //     }
    // }
    Login.prototype.getAdTimes = function () {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserStat", "GET", sendData).then(function (res) {
            cc.Tools.ad.adShowNum = res.data.ad_show_num;
            cc.Tools.ad.adPosId = res.data.ad_pos_id;
            cc.Tools.ad.adDif = res.data.is_need_watch;
            cc.Tools.ad.steal_left_num = res.data.steal_left_num;
            cc.Tools.treasure = res.data.treasure;
            //
            // let login: cc.Node = this.node.getChildByName("login");
            // let loading: cc.Node = this.node.getChildByName("loading");
            // login.active = false;
            // loading.active = true;
            var progress = _this.node.getChildByName("progress").getComponent(cc.ProgressBar);
            // progress.progress = 0;
            // let icon: cc.Node = loading.getChildByName("icon");
            // cc.tween(progress).to(2, { progress: 1 }).call(() => {
            //     this.startUpdate = false;
            //     cc.director.loadScene('Main');
            // }).start();
            // icon.runAction(cc.moveBy(2, 500, 0));
            AssetsBundle_1.default.Instance.preloadResPkg(GameResPkg_1.default, function (now, total) {
                progress.progress = now / total;
                var sp = progress.node.getChildByName("sp");
                sp.x = 608 * progress.progress + sp.width / 2 - 20;
            }, function () {
                AssetsBundle_1.default.Instance.loadScene("Game", "Main");
            });
        });
    };
    Login.prototype.getCode = function (code) {
        var _this = this;
        // {"channel":"walk","imei":"","android_id":"8bacfc24ece79979","mac":"02:00:00:00:00:00","uid":"3b0fe5ec-050d-46bf-aac6-0dc5aa5889c4","oaid":"fbf75dfb-fffd-7f02-6ef6-f7ffbfad8da6"}
        var data = {
            "channel": cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "",
            "imei": cc.Tools.DeviceInfo.imei ? cc.Tools.DeviceInfo.imei : "",
            "mac": cc.Tools.DeviceInfo.mac ? cc.Tools.DeviceInfo.mac : "",
            "distinct_id": cc.Tools.DeviceInfo.uid ? cc.Tools.DeviceInfo.uid : "",
            "oaid": cc.Tools.DeviceInfo.oaid ? cc.Tools.DeviceInfo.oaid : "",
            "android_id": cc.Tools.DeviceInfo.android_id ? cc.Tools.DeviceInfo.android_id : "",
            "sm_device_id": cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "",
            "code": code
        };
        cc.sys.localStorage.setItem("channel", cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "");
        cc.sys.localStorage.setItem("sm_device_id", cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "");
        cc.Tools.sendRequest("register", "POST", data).then(function (res) {
            cc.sys.localStorage.setItem("token", res.data.token);
            CocosBridge_1.default.JSCallNative("preLoadRewardVideoAd", "" + { "token": res.data.token });
            _this.removeEvent();
            _this.getAdTimes();
        });
    };
    Login.Instance = null;
    return Login;
}(cc.Component));
exports.default = Login;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsK0NBQTBDO0FBQzFDLDJDQUFrQztBQUNsQztJQUFtQyx5QkFBWTtJQUEvQzs7SUErSkEsQ0FBQztJQTdKYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDekIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtJQUNMLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0Qyx1REFBdUQ7UUFDdkQscUVBQXFFO1FBQ3JFLG9EQUFvRDtRQUNwRCxxRUFBcUU7UUFDckUsdUVBQXVFO1FBQ3ZFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILHFCQUFXLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUMzRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7U0FDSjthQUFNO1lBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFB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QUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELHFCQUFXLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDbEYsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE3SmEsY0FBUSxHQUFVLElBQUksQ0FBQztJQThKekMsWUFBQztDQS9KRCxBQStKQyxDQS9Ka0MsRUFBRSxDQUFDLFNBQVMsR0ErSjlDO2tCQS9Kb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2Nvc0JyaWRnZSBmcm9tIFwiLi4vVG9vbHMvQ29jb3NCcmlkZ2VcIjtcbmltcG9ydCBBc3NldHNCdW5kbGUgZnJvbSBcIi4vQXNzZXRzQnVuZGxlXCI7XG5pbXBvcnQgcmVzUGtnIGZyb20gXCIuL0dhbWVSZXNQa2dcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBMb2dpbiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKExvZ2luLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2dpbi5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dpbkdhbWUoKTogdm9pZCB7XG4gICAgICAgIGNjLlRvb2xzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9naW5cIik7XG4gICAgICAgIC8vIGNjLlRvb2xzLmJyZWF0aGVBbmltKHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcImxvZ2luX2J0blwiKSk7XG4gICAgICAgIC8vIGNjLlRvb2xzLkV2ZW50Lm9uKCdnZXRDb2RlJywgdGhpcy5nZXRDb2RlLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy51c2VyUHJpdmFjeSA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8gdGhpcy51c2VyUHJvdG9jb2wgPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBsZXQgd3hUb2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgaWYgKCF3eFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInByZUxvYWRSZXdhcmRWaWRlb0FkXCIsIFwiXCIgKyB7IFwidG9rZW5cIjogd3hUb2tlbiB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWRUaW1lcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKV1pYSnphVzl1SWpvd0xDSjFjMlZ5WDJsa0lqbzNPVFU1TWl3aWIzQmxibDlwWkNJNkltOXFiR1IxTm1JeU1GTXpiV3RKTTFwV05tZ3hPUzFvVTFZd1FsVWlMQ0p1YVdOclgyNWhiV1VpT2lKWkx2Q2ZqTFVpTENKblpXNWtaWElpT2pBc0ltRjJZWFJoY2lJNkltaDBkSEJ6T2k4dmRHaHBjbVIzZUM1eGJHOW5ieTVqYmk5dGJXOXdaVzR2ZG1sZk16SXZORTlTYUdkeWVuZFRlRVZKVVhrMWFuSm1OWFIzVkUwd2RtUTFaakJIUkRWR1ZXWmllalJpVjAxeWJrdE5WVkpLVlZKelF6aEZNSFoyT1RkTFVWRkZkRVJVUjFScmJuY3hZV1ZrYTBGdFpGRXllRFpwWWtSbkx6RXpNaUlzSW1OeVpXRjBaVjkwYVcxbElqb3hOalExTkRJMU5qWXpMQ0pqYUdGdWJtVnNJam9pYldWcGVuVXlJaXdpWkdsemRHbHVZM1JmYVdRaU9pSTRaRFpqTUdSbVpDMHlNekF6TFRRd01UVXRPVE5qTlMxbE1qWTFOR1UxWlRJNFptUWlMQ0pwYldWcElqb2lJaXdpYldGaklqb2lNREk2TURBNk1EQTZNREE2TURBNk1EQWlMQ0poYm1SeWIybGtYMmxrSWpvaU56WmpaV1l6TVdSbE5HRTFORFkzTkNJc0ltOWhhV1FpT2lKbVpXVm1OV1ppWWkxalpqWmlMVFkzTXpJdFltTTNaaTAxWW1abU56ZGtaR1JpTnpraWZRLkJtVnBvaG5Lb2QtMV9MMnBhRkRMTVNETzFZZ1FSNkNqVU5UajFJWFlNa2NcIik7XG4gICAgICAgICAgICB0aGlzLmdldEFkVGltZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnByb3RlY3QgPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJwcm90ZWN0XCIpO1xuICAgICAgICAvLyB0aGlzLnByb3RlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IGFjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcImFjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGxldCBub0FjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcIm5vX2FjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGFjY2VwdEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcm90ZWN0TGF5ZXIsIHRoaXMpO1xuICAgICAgICAvLyBub0FjY2VwdEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcm90ZWN0TGF5ZXIsIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsb2dpbl9idG5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmxvZ2luQnRuLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwic3Vybl9idG5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrUHJvdG9jb2wsIHRoaXMpO1xuICAgICAgICAvLyBsZXQgcHJpdmFjeUJ0biA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInByaXZhY3lfYnRuXCIpO1xuICAgICAgICAvLyBwcml2YWN5QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93UHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcml2YWN5ID0gdGhpcy51c2VyUHJpdmFjeS5nZXRDaGlsZEJ5TmFtZShcImNsb3NlX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIGNsb3NlUHJpdmFjeS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcml2YWN5TGF5ZXIsIHRoaXMpO1xuXG4gICAgICAgIC8vIGxldCBwcm90b2NvbEJ0biA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInByb3RvY29sX2J0blwiKTtcbiAgICAgICAgLy8gcHJvdG9jb2xCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNob3dQcm90b2NvbExheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcm90b2NvbCA9IHRoaXMudXNlclByb3RvY29sLmdldENoaWxkQnlOYW1lKFwiY2xvc2VfcHJvdG9jb2xcIik7XG4gICAgICAgIC8vIGNsb3NlUHJvdG9jb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdG9jb2xMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIGNsb3NlUHJvdGVjdExheWVyKGUpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5wcm90ZWN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjYy5Ub29scy5nZXRQZXJtaXNzaW9uKCk7XG4gICAgfVxuICAgIGNsaWNrUHJvdG9jb2woZSk6IHZvaWQge1xuICAgICAgICAvLyBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIC8vIGxldCBzZWxlY3QgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIik7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3RvY29sKSB7XG4gICAgICAgIC8vICAgICBzZWxlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBzZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHRoaXMucHJvdG9jb2wgPSB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIGNsb3NlUHJpdmFjeUxheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcml2YWN5LmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vIH1cbiAgICAvLyBzaG93UHJpdmFjeUxheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcml2YWN5LmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gfVxuICAgIC8vIGNsb3NlUHJvdG9jb2xMYXllcigpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy51c2VyUHJvdG9jb2wuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gfVxuICAgIC8vIHNob3dQcm90b2NvbExheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcm90b2NvbC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vIH1cbiAgICByZW1vdmVFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwibG9naW5fYnRuXCIpLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMubG9naW5CdG4sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzdXJuX2J0blwiKS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrUHJvdG9jb2wsIHRoaXMpXG4gICAgICAgIC8vIGxldCBwcml2YWN5QnRuID0gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwicHJpdmFjeV9idG5cIik7XG4gICAgICAgIC8vIHByaXZhY3lCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93UHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcml2YWN5ID0gdGhpcy51c2VyUHJpdmFjeS5nZXRDaGlsZEJ5TmFtZShcImNsb3NlX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIGNsb3NlUHJpdmFjeS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgcHJvdG9jb2xCdG4gPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJwcm90b2NvbF9idG5cIik7XG4gICAgICAgIC8vIHByb3RvY29sQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2hvd1Byb3RvY29sTGF5ZXIsIHRoaXMpO1xuXG4gICAgICAgIC8vIGxldCBjbG9zZVByb3RvY29sID0gdGhpcy51c2VyUHJvdG9jb2wuZ2V0Q2hpbGRCeU5hbWUoXCJjbG9zZV9wcm90b2NvbFwiKTtcbiAgICAgICAgLy8gY2xvc2VQcm90b2NvbC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdG9jb2xMYXllciwgdGhpcyk7XG5cbiAgICAgICAgLy8gbGV0IGFjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcImFjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGxldCBub0FjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcIm5vX2FjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGFjY2VwdEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdGVjdExheWVyLCB0aGlzKTtcbiAgICAgICAgLy8gbm9BY2NlcHRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbG9zZVByb3RlY3RMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIC8vIGxvZ2luQnRuKCk6IHZvaWQge1xuICAgIC8vICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5wcm90b2NvbCkge1xuICAgIC8vICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInd4TG9naW5cIiwgXCJ3eF9sb2dpblwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5sb2dpbkxheWVyLCBcIjxjb2xvcj0jMDAwMDAwPuivt+WFiOWQjOaEj+makOengeaUv+etluWSjOeUqOaIt+WNj+iurjwvY29sb3I+XCIpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgZ2V0QWRUaW1lcygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiVXNlclN0YXRcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRTaG93TnVtID0gcmVzLmRhdGEuYWRfc2hvd19udW07XG4gICAgICAgICAgICBjYy5Ub29scy5hZC5hZFBvc0lkID0gcmVzLmRhdGEuYWRfcG9zX2lkO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWREaWYgPSByZXMuZGF0YS5pc19uZWVkX3dhdGNoO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuc3RlYWxfbGVmdF9udW0gPSByZXMuZGF0YS5zdGVhbF9sZWZ0X251bTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnRyZWFzdXJlID0gcmVzLmRhdGEudHJlYXN1cmU7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbGV0IGxvZ2luOiBjYy5Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9naW5cIik7XG4gICAgICAgICAgICAvLyBsZXQgbG9hZGluZzogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICAvLyBsb2dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgLy8gbGV0IGljb246IGNjLk5vZGUgPSBsb2FkaW5nLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHByb2dyZXNzKS50bygyLCB7IHByb2dyZXNzOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhcnRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW4nKTtcbiAgICAgICAgICAgIC8vIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyBpY29uLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMiwgNTAwLCAwKSk7XG4gICAgICAgICAgICBBc3NldHNCdW5kbGUuSW5zdGFuY2UucHJlbG9hZFJlc1BrZyhyZXNQa2csKG5vdzpudW1iZXIsIHRvdGFsOm51bWJlcik9PntcbiAgICAgICAgICAgICAgICBwcm9ncmVzcy5wcm9ncmVzcyA9IG5vdy90b3RhbDtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBwcm9ncmVzcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BcIik7XG4gICAgICAgICAgICAgICAgc3AueCA9IDYwOCpwcm9ncmVzcy5wcm9ncmVzcytzcC53aWR0aC8yLTIwO1xuICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgIEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5sb2FkU2NlbmUoXCJHYW1lXCIsXCJNYWluXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdldENvZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHtcImNoYW5uZWxcIjpcIndhbGtcIixcImltZWlcIjpcIlwiLFwiYW5kcm9pZF9pZFwiOlwiOGJhY2ZjMjRlY2U3OTk3OVwiLFwibWFjXCI6XCIwMjowMDowMDowMDowMDowMFwiLFwidWlkXCI6XCIzYjBmZTVlYy0wNTBkLTQ2YmYtYWFjNi0wZGM1YWE1ODg5YzRcIixcIm9haWRcIjpcImZiZjc1ZGZiLWZmZmQtN2YwMi02ZWY2LWY3ZmZiZmFkOGRhNlwifVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiY2hhbm5lbFwiOiBjYy5Ub29scy5EZXZpY2VJbmZvLmNoYW5uZWwgPyBjYy5Ub29scy5EZXZpY2VJbmZvLmNoYW5uZWwgOiBcIlwiLFxuICAgICAgICAgICAgXCJpbWVpXCI6IGNjLlRvb2xzLkRldmljZUluZm8uaW1laSA/IGNjLlRvb2xzLkRldmljZUluZm8uaW1laSA6IFwiXCIsXG4gICAgICAgICAgICBcIm1hY1wiOiBjYy5Ub29scy5EZXZpY2VJbmZvLm1hYyA/IGNjLlRvb2xzLkRldmljZUluZm8ubWFjIDogXCJcIixcbiAgICAgICAgICAgIFwiZGlzdGluY3RfaWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby51aWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLnVpZCA6IFwiXCIsXG4gICAgICAgICAgICBcIm9haWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby5vYWlkID8gY2MuVG9vbHMuRGV2aWNlSW5mby5vYWlkIDogXCJcIixcbiAgICAgICAgICAgIFwiYW5kcm9pZF9pZFwiOiBjYy5Ub29scy5EZXZpY2VJbmZvLmFuZHJvaWRfaWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLmFuZHJvaWRfaWQgOiBcIlwiLFxuICAgICAgICAgICAgXCJzbV9kZXZpY2VfaWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby5zbV9kZXZpY2VfaWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLnNtX2RldmljZV9pZCA6IFwiXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogY29kZVxuICAgICAgICB9XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5uZWxcIiwgY2MuVG9vbHMuRGV2aWNlSW5mby5jaGFubmVsID8gY2MuVG9vbHMuRGV2aWNlSW5mby5jaGFubmVsIDogXCJcIik7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNtX2RldmljZV9pZFwiLCBjYy5Ub29scy5EZXZpY2VJbmZvLnNtX2RldmljZV9pZCA/IGNjLlRvb2xzLkRldmljZUluZm8uc21fZGV2aWNlX2lkIDogXCJcIik7XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicmVnaXN0ZXJcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwicHJlTG9hZFJld2FyZFZpZGVvQWRcIiwgXCJcIiArIHsgXCJ0b2tlblwiOiByZXMuZGF0YS50b2tlbiB9KVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5nZXRBZFRpbWVzKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19