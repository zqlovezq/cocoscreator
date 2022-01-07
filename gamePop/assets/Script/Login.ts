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
                this.getAdTimes();
            }
        } else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjowLCJ1c2VyX2lkIjoyNTk2OCwib3Blbl9pZCI6Im81Q1ZlNV9JckZBTmh4MHVtcEQtNDRjNWh3VmciLCJuaWNrX25hbWUiOiLmtbfnm5foiLnplb8yLjAiLCJnZW5kZXIiOjAsImF2YXRhciI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvZm1tQ1Z4SVJTRTkwdWlhdnRqNkt0UTZRVnl1TTZETjF1aWMyZ2liTnJKSndoejJJZjJtaDZzWUVpYllxUW9kemlhelNXbkJFSWZmZlFQc09OcFl5bVFDMHhkZy8xMzIiLCJjcmVhdGVfdGltZSI6MTY0MTAyMTMyNywiY2hhbm5lbCI6InRhcHRhcCIsImRpc3RpbmN0X2lkIjoiMjg2NTRjMTEtYTE2Yy00ZTI4LThhZGEtNmI2M2FhMTI3MjA1IiwiaW1laSI6Ijg2ODczNDAzNjYxNDg3OCIsIm1hYyI6IjAyOjAwOjAwOjAwOjAwOjAwIiwiYW5kcm9pZF9pZCI6Ijc2Y2VmMzFkZTRhNTQ2NzQiLCJvYWlkIjoiZmVlZjVmYmItY2Y2Yi02NzMyLWJjN2YtNWJmZjc3ZGRkYjc5In0.Dz0Eb9IF7BeO0gQXutb465oV3VvSIrRdCK1TdkfcNqQ");
            cc.director.loadScene('Main');
        }
    }
    getAdTimes(){
        let sendData = {};
        cc.Tools.sendRequest("UserStat", "GET", sendData).then((res) => {
           cc.Tools.adShowNum = res.data.ad_show_num;
           cc.Tools.adPosId = res.data.ad_pos_id;
           cc.Tools.adDif = res.data.is_need_watch;
           //然后像android预加载
           cc.Tools.setNewAdId(cc.Tools.adPosId,cc.Tools.adDif?"true":"false");
           cc.director.loadScene('Main');
        })
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
            console.log("cocos----token---",JSON.stringify(res));
            // 拼接一个打点时间
            // cc.director.loadScene('Main');
            // cc.director.loadScene('Strategy');
            this.removeEvent();
            this.getAdTimes();
        })
    }
}
