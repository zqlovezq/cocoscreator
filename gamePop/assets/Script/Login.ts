const { ccclass, property } = cc._decorator;

@ccclass
export default class Login extends cc.Component {
    private userPrivacy:cc.Node = null;
    private userProtocol:cc.Node = null;
    private protect:cc.Node = null;
    private protocol:boolean = false;
    start() {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        cc.Tools.breatheAnim(this.node.getChildByName("login_btn"));
        cc.Tools.Event.on('getCode', this.getCode, this);
        this.userPrivacy = this.node.getChildByName("user_privacy");
        this.userProtocol = this.node.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            let wxToken =  cc.sys.localStorage.getItem("token");
            if(!wxToken){
                this.registerEvent();
            }else{
                cc.director.loadScene('Main');
            }
        } else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjozMCwib3Blbl9pZCI6Im81Q1ZlNV9JckZBTmh4MHVtcEQtNDRjNWh3VmciLCJuaWNrX25hbWUiOiLmtbfnm5foiLnplb8yLjAiLCJnZW5kZXIiOjAsImF2YXRhciI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvZm1tQ1Z4SVJTRTkwdWlhdnRqNkt0UTZRVnl1TTZETjF1aWMyZ2liTnJKSndoejJJZjJtaDZzWUVpYllxUW9kemlhelNXbkJFSWZmZlFQc09OcFl5bVFDMHhkZy8xMzIiLCJjcmVhdGVfdGltZSI6MTYzNzcyMzc4OCwiY2hhbm5lbCI6IndhbGsiLCJkaXN0aW5jdF9pZCI6ImMwZDBlOWZiLWVmN2QtNDU3NS1iMjMxLWVlNGIyZDVlNTQwZSIsImltZWkiOiIiLCJtYWMiOiIwMjowMDowMDowMDowMDowMCJ9._5MoWt2F_QL_DB4o9AqFIK30u7Y_RPBAyRcA6zSTLjw");
            cc.director.loadScene('Main');
        }
    }
    registerEvent(){
        this.protect = this.node.getChildByName("protect");
        this.protect.active = true;
        let acceptBtn = this.protect.getChildByName("accept_btn");
        let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        acceptBtn.on(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
        noAcceptBtn.on(cc.Node.EventType.TOUCH_END,this.closeProtectLayer,this);
        this.node.getChildByName("login_btn").on(cc.Node.EventType.TOUCH_END,this.loginBtn,this);
        this.node.getChildByName("surn_btn").on(cc.Node.EventType.TOUCH_END,this.clickProtocol,this);
        let privacyBtn = this.node.getChildByName("privacy_btn");
        privacyBtn.on(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.on(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.node.getChildByName("protocol_btn");
        protocolBtn.on(cc.Node.EventType.TOUCH_END,this.showProtocolLayer,this);

        let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        closeProtocol.on(cc.Node.EventType.TOUCH_END,this.closeProtocolLayer,this);
    }
    closeProtectLayer(e){
        this.protect.active = false;
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
        this.node.getChildByName("login_btn").off(cc.Node.EventType.TOUCH_END,this.loginBtn,this);
        this.node.getChildByName("surn_btn").off(cc.Node.EventType.TOUCH_END,this.clickProtocol,this)
        let privacyBtn = this.node.getChildByName("privacy_btn");
        privacyBtn.off(cc.Node.EventType.TOUCH_END,this.showPrivacyLayer,this);

        let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        closePrivacy.off(cc.Node.EventType.TOUCH_END,this.closePrivacyLayer,this);

        let protocolBtn = this.node.getChildByName("protocol_btn");
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
                cc.Tools.showTips(this.node, "<color=#000000>请先同意隐私政策和用户协议</color>")
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
        cc.Tools.sendRequest("register", "POST", data).then((res) => {
            cc.sys.localStorage.setItem("token", res.data.token);
            // 拼接一个打点时间
            cc.director.loadScene('Main');
            this.removeEvent();
        })
    }
}
