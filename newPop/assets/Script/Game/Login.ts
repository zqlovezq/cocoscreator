import CocosBridge from "../Tools/CocosBridge";
import AssetsBundle from "./AssetsBundle";
import resPkg from "./GameResPkg";
export default class Login extends cc.Component {
    public static Instance: Login = null;
    protected onLoad(): void {
        if (Login.Instance === null) {
            Login.Instance = this;
        } else {
            this.destroy();
            return;
        }
    }
    LoginGame(): void {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        // this.loginLayer = this.node.getChildByName("login");
        // cc.Tools.breatheAnim(this.loginLayer.getChildByName("login_btn"));
        // cc.Tools.Event.on('getCode', this.getCode, this);
        // this.userPrivacy = this.loginLayer.getChildByName("user_privacy");
        // this.userProtocol = this.loginLayer.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            let wxToken = cc.sys.localStorage.getItem("token");
            if (!wxToken) {
                this.registerEvent();
            } else {
                CocosBridge.JSCallNative("preLoadRewardVideoAd", "" + { "token": wxToken })
                this.getAdTimes();
            }
        } else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjowLCJ1c2VyX2lkIjo3OTU5Miwib3Blbl9pZCI6Im9qbGR1NmIyMFMzbWtJM1pWNmgxOS1oU1YwQlUiLCJuaWNrX25hbWUiOiJZLvCfjLUiLCJnZW5kZXIiOjAsImF2YXRhciI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvNE9SaGdyendTeEVJUXk1anJmNXR3VE0wdmQ1ZjBHRDVGVWZiejRiV01ybktNVVJKVVJzQzhFMHZ2OTdLUVFFdERUR1RrbncxYWVka0FtZFEyeDZpYkRnLzEzMiIsImNyZWF0ZV90aW1lIjoxNjQ1NDI1NjYzLCJjaGFubmVsIjoibWVpenUyIiwiZGlzdGluY3RfaWQiOiI4ZDZjMGRmZC0yMzAzLTQwMTUtOTNjNS1lMjY1NGU1ZTI4ZmQiLCJpbWVpIjoiIiwibWFjIjoiMDI6MDA6MDA6MDA6MDA6MDAiLCJhbmRyb2lkX2lkIjoiNzZjZWYzMWRlNGE1NDY3NCIsIm9haWQiOiJmZWVmNWZiYi1jZjZiLTY3MzItYmM3Zi01YmZmNzdkZGRiNzkifQ.BmVpohnKod-1_L2paFDLMSDO1YgQR6CjUNTj1IXYMkc");
            this.getAdTimes();
        }
    }
    registerEvent(): void {
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
    }
    closeProtectLayer(e): void {
        // this.protect.active = false;
        // cc.Tools.getPermission();
    }
    clickProtocol(e): void {
        // let target = e.target;
        // let select = target.getChildByName("select");
        // if (this.protocol) {
        //     select.active = false;
        //     this.protocol = false;
        // } else {
        //     select.active = true;
        //     this.protocol = true;
        // }
    }
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
    removeEvent(): void {
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
    }
    // loginBtn(): void {
    //     if (cc.sys.isNative) {
    //         if (this.protocol) {
    //             CocosBridge.JSCallNative("wxLogin", "wx_login");
    //         } else {
    //             cc.Tools.showTips(this.loginLayer, "<color=#000000>请先同意隐私政策和用户协议</color>")
    //         }
    //     }
    // }
    getAdTimes(): void {
        let sendData = {};
        cc.Tools.sendRequest("UserStat", "GET", sendData).then((res) => {
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
            let progress: cc.ProgressBar = this.node.getChildByName("progress").getComponent(cc.ProgressBar);
            // progress.progress = 0;
            // let icon: cc.Node = loading.getChildByName("icon");
            // cc.tween(progress).to(2, { progress: 1 }).call(() => {
            //     this.startUpdate = false;
            //     cc.director.loadScene('Main');
            // }).start();
            // icon.runAction(cc.moveBy(2, 500, 0));
            AssetsBundle.Instance.preloadResPkg(resPkg,(now:number, total:number)=>{
                progress.progress = now/total;
                let sp = progress.node.getChildByName("sp");
                sp.x = 608*progress.progress+sp.width/2-20;
            },()=>{
                AssetsBundle.Instance.loadScene("Game","Main");
            });
        })
    }
    getCode(code: string): void {
        // {"channel":"walk","imei":"","android_id":"8bacfc24ece79979","mac":"02:00:00:00:00:00","uid":"3b0fe5ec-050d-46bf-aac6-0dc5aa5889c4","oaid":"fbf75dfb-fffd-7f02-6ef6-f7ffbfad8da6"}
        let data = {
            "channel": cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "",
            "imei": cc.Tools.DeviceInfo.imei ? cc.Tools.DeviceInfo.imei : "",
            "mac": cc.Tools.DeviceInfo.mac ? cc.Tools.DeviceInfo.mac : "",
            "distinct_id": cc.Tools.DeviceInfo.uid ? cc.Tools.DeviceInfo.uid : "",
            "oaid": cc.Tools.DeviceInfo.oaid ? cc.Tools.DeviceInfo.oaid : "",
            "android_id": cc.Tools.DeviceInfo.android_id ? cc.Tools.DeviceInfo.android_id : "",
            "sm_device_id": cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "",
            "code": code
        }
        cc.sys.localStorage.setItem("channel", cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "");
        cc.sys.localStorage.setItem("sm_device_id", cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "");
        cc.Tools.sendRequest("register", "POST", data).then((res) => {
            cc.sys.localStorage.setItem("token", res.data.token);
            CocosBridge.JSCallNative("preLoadRewardVideoAd", "" + { "token": res.data.token })
            this.removeEvent();
            this.getAdTimes();
        })
    }
}
