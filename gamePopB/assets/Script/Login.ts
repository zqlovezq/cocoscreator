const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {
    private userPrivacy:cc.Node = null;
    private userProtocol:cc.Node = null;
    private protect:cc.Node = null;
    private protocol:boolean = true;
    private loginLayer:cc.Node = null;
    start() {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        this.loginLayer = this.node.getChildByName("login");
        cc.Tools.breatheAnim(this.loginLayer.getChildByName("login_btn"));
        cc.Tools.Event.on('getCode', this.getCode, this);
        this.userPrivacy = this.loginLayer.getChildByName("user_privacy");
        this.userProtocol = this.loginLayer.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            let wxToken =  cc.sys.localStorage.getItem("token");
            if(!wxToken){
                this.registerEvent();
            }else{
                cc.director.loadScene('Main');
            }
        } else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDEsIm9wZW5faWQiOiJvNUNWZTVfSXJGQU5oeDB1bXBELTQ0YzVod1ZnIiwibmlja19uYW1lIjoi5rW355uX6Ii56ZW_Mi4wIiwiZ2VuZGVyIjowLCJhdmF0YXIiOiJodHRwczovL3RoaXJkd3gucWxvZ28uY24vbW1vcGVuL3ZpXzMyL2ZtbUNWeElSU0U5MHVpYXZ0ajZLdFE2UVZ5dU02RE4xdWljMmdpYk5ySkp3aHoySWYybWg2c1lFaWJZcVFvZHppYXpTV25CRUlmZmZRUHNPTnBZeW1RQzB4ZGcvMTMyIiwiY3JlYXRlX3RpbWUiOjE2Mzk1NjAwODUsImNoYW5uZWwiOiJ0YXB0YXAiLCJkaXN0aW5jdF9pZCI6Ijg3ZmQzZDY5LTU0YjYtNDVlZi05YzI3LWIzZTk2Y2EyNjdiNyIsImltZWkiOiIiLCJtYWMiOiIwMjowMDowMDowMDowMDowMCIsImFuZHJvaWRfaWQiOiI3NmNlZjMxZGU0YTU0Njc0Iiwib2FpZCI6IiJ9.K5qf6ZX27hwvjq6eszxzDyTN_yRXrUhXc_bZ_HBUw5k");
            cc.director.loadScene('Main');
        }
    }
    registerEvent(){
        this.protect = this.loginLayer.getChildByName("protect");
        this.protect.active = true;
        let acceptBtn = this.protect.getChildByName("accept_btn");
        let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        acceptBtn.on(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
        noAcceptBtn.on(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
        this.loginLayer.getChildByName("login_btn").on(cc.Node.EventType.TOUCH_END,this.loginBtn,this);
        this.loginLayer.getChildByName("surn_btn").on(cc.Node.EventType.TOUCH_END,this.clickProtocol,this);
        let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        privacyBtn.on(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.on(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        protocolBtn.on(cc.Node.EventType.TOUCH_END,this.showProtocolLayer,this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.on(cc.Node.EventType.TOUCH_END,this.closeProtocolLayer,this);
    }
    closeProtectLayer(e){
        this.protect.active = false;
        cc.Tools.getPermission();
    }
    clickProtocol(e){
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
    closePrivacyLayer(){
        this.userPrivacy.active = false;
    }
    showPrivacyLayer(){
        this.userPrivacy.active = true;
    }
    closeProtocolLayer(){
        this.userProtocol.active = false;
    }
    showProtocolLayer(){
        this.userProtocol.active = true;
    }
    removeEvent(){
        this.loginLayer.getChildByName("login_btn").off(cc.Node.EventType.TOUCH_END,this.loginBtn,this);
        this.loginLayer.getChildByName("surn_btn").off(cc.Node.EventType.TOUCH_END,this.clickProtocol,this)
        let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        privacyBtn.off(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.off(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        protocolBtn.off(cc.Node.EventType.TOUCH_END,this.showProtocolLayer,this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.off(cc.Node.EventType.TOUCH_END,this.closeProtocolLayer,this);

        let acceptBtn = this.protect.getChildByName("accept_btn");
        let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        acceptBtn.off(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
        noAcceptBtn.off(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
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
    getCode(code:string) {
        // {"channel":"walk","imei":"","android_id":"8bacfc24ece79979","mac":"02:00:00:00:00:00","uid":"3b0fe5ec-050d-46bf-aac6-0dc5aa5889c4","oaid":"fbf75dfb-fffd-7f02-6ef6-f7ffbfad8da6"}
        let data = {
            "channel": cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "",
            "imei": cc.Tools.DeviceInfo.imei ? cc.Tools.DeviceInfo.imei : "",
            "mac": cc.Tools.DeviceInfo.mac ? cc.Tools.DeviceInfo.mac : "",
            "distinct_id": cc.Tools.DeviceInfo.uid ? cc.Tools.DeviceInfo.uid : "",
            "oaid": cc.Tools.DeviceInfo.oaid ? cc.Tools.DeviceInfo.oaid : "",
            "android_id": cc.Tools.DeviceInfo.android_id ? cc.Tools.DeviceInfo.android_id : "",
            "code": code
        }
        cc.sys.localStorage.setItem("channel", cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "");
        cc.Tools.sendRequest("register", "POST", data).then((res) => {
            cc.sys.localStorage.setItem("token", res.data.token);
            // 拼接一个打点时间
            cc.director.loadScene('Main');
            // cc.director.loadScene('Strategy');
            this.removeEvent();
        })
    }
}