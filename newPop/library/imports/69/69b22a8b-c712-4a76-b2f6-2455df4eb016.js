"use strict";
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