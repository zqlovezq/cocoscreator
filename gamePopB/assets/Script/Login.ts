const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {
    private userPrivacy: cc.Node = null;
    private userProtocol: cc.Node = null;
    private protect: cc.Node = null;
    private protocol: boolean = true;
    private loginLayer: cc.Node = null;
    private count:number=0;
    private startUpdate:boolean=false;
    start() {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        this.loginLayer = this.node.getChildByName("login");
        cc.Tools.breatheAnim(this.loginLayer.getChildByName("login_btn"));
        cc.Tools.Event.on('getCode', this.getCode, this);
        this.userPrivacy = this.loginLayer.getChildByName("user_privacy");
        this.userProtocol = this.loginLayer.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            let wxToken = cc.sys.localStorage.getItem("token");
            console.log("cocos---token=", wxToken);
            if (!wxToken) {
                this.registerEvent();
            } else {
                this.getAdTimes();
            }
        } else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjowLCJ1c2VyX2lkIjoxMDMzLCJvcGVuX2lkIjoib2psZHU2ZkxtU1ZZSjJQSzd4T0pRM19FVzJlayIsIm5pY2tfbmFtZSI6IuS4jeWGjemBpei_nCIsImdlbmRlciI6MCwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9GNzVQVW9scGpSY0cySVRweWwybWZXSDhoNzZoZjJnU0RFUWFBSEhURFNYZjZ3SlJkT2QxTWozeU1ab2Rua0VwcUhURmJyS0g1bFpKTkdvcUIxaDFsQS8xMzIiLCJjcmVhdGVfdGltZSI6MTY0MzI4Mzc3OCwiY2hhbm5lbCI6InRvdXRpYW96dDAxLXNmIiwiZGlzdGluY3RfaWQiOiI4ZDMzOTIyNi05Mzc5LTQ0YzQtODcxYS1kMDFlNmVkODRmZTIiLCJpbWVpIjoiODYwMzE5MDQyMzU4MDQ3IiwibWFjIjoiMDI6MDA6MDA6MDA6MDA6MDAiLCJhbmRyb2lkX2lkIjoiMjljZWIwMjEwNDUwODc5OSIsIm9haWQiOiJkYmZjZTY1MDgwNmM1YTEyIn0.m37jlw29uEKwl_5sjQgtuzJnQFMtrG6Gc3Rk8cuGaW4");
            // cc.director.loadScene('Main');
            this.getAdTimes();
        }
    }
    registerEvent() {
        this.protect = this.loginLayer.getChildByName("protect");
        this.protect.active = true;
        let acceptBtn = this.protect.getChildByName("accept_btn");
        let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        acceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        noAcceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        this.loginLayer.getChildByName("login_btn").on(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        this.loginLayer.getChildByName("surn_btn").on(cc.Node.EventType.TOUCH_END, this.clickProtocol, this);
        let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        privacyBtn.on(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.on(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);

        let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        protocolBtn.on(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.on(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);
    }
    closeProtectLayer(e) {
        this.protect.active = false;
        cc.Tools.getPermission();
    }
    clickProtocol(e) {
        let target = e.target;
        let select = target.getChildByName("select");
        if (this.protocol) {
            select.active = false;
            this.protocol = false;
        } else {
            select.active = true;
            this.protocol = true;
        }
    }
    closePrivacyLayer() {
        this.userPrivacy.active = false;
    }
    showPrivacyLayer() {
        this.userPrivacy.active = true;
    }
    closeProtocolLayer() {
        this.userProtocol.active = false;
    }
    showProtocolLayer() {
        this.userProtocol.active = true;
    }
    removeEvent() {
        this.loginLayer.getChildByName("login_btn").off(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        this.loginLayer.getChildByName("surn_btn").off(cc.Node.EventType.TOUCH_END, this.clickProtocol, this)
        let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        privacyBtn.off(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.off(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);

        let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        protocolBtn.off(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.off(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);

        let acceptBtn = this.protect.getChildByName("accept_btn");
        let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        acceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        noAcceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
    }
    loginBtn() {
        if (cc.sys.isNative) {
            if (this.protocol) {
                cc.Tools.wxLogin();
            } else {
                cc.Tools.showTips(this.loginLayer, "<color=#000000>请先同意隐私政策和用户协议</color>")
            }
        }
    }
    getAdTimes() {
        let sendData = {};
        cc.Tools.sendRequest("UserStat", "GET", sendData).then((res) => {
            cc.Tools.ad.adShowNum = res.data.ad_show_num;
            cc.Tools.ad.adPosId = res.data.ad_pos_id;
            cc.Tools.ad.adDif = res.data.is_need_watch;
            cc.Tools.treasure = res.data.treasure;
            //
            let login: cc.Node = this.node.getChildByName("login");
            let loading: cc.Node = this.node.getChildByName("loading");
            login.active = false;
            loading.active = true;
            let progress: cc.ProgressBar = loading.getChildByName("progress").getComponent(cc.ProgressBar);
            progress.progress = 0;
            let icon: cc.Node = loading.getChildByName("icon");
            this.startUpdate = true;
            cc.tween(progress).to(2, { progress: 1 }).call(() => {
                this.startUpdate = false;
                cc.director.loadScene('Main');
            }).start();
            icon.runAction(cc.moveBy(2, 500, 0));
        })
    }
    update(dt: number) {
        if(this.startUpdate){
            let loading: cc.Node = this.node.getChildByName("loading");
            //进度条的百分显示
            let lbl = loading.getChildByName("lbl").getComponent(cc.Label);
            let desc = loading.getChildByName("desc").getComponent(cc.Label);
            let config = {
                "1": "开宝箱，赢活动奖金全提现",
                "2": "开宝箱，偷红包，赚钱多多",
            }
            this.count++;
            if(this.count>=100){
                this.count = 100;
            }
            lbl.string = this.count + "%";
            desc.string = config[Math.ceil(this.count / 50)]
        }
    }
    getCode(code: string) {
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
            // 拼接一个打点时间
            // cc.director.loadScene('Main');
            // cc.director.loadScene('Strategy');
            this.removeEvent();
            this.getAdTimes();
        })
    }
}
