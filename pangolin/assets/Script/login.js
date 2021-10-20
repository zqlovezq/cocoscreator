cc.Class({
    extends: cc.Component,

    properties: {

    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start() {
        this.protocol = false;
        // this.needLogin = true;
        this.time = 0;
        // 注册一个事件 监听微信返回的code
        cc.Tools.Event = new cc.EventTarget();
        cc.Tools.Event.on('getCode', this.getCode, this);
        if (!cc.sys.isNative) {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMjQxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjoxNjM0MTk4ODUyLCJjaGFubmVsIjoid2FsayIsImRpc3RpbmN0X2lkIjoiYmFlNGY0N2MtZmZiMy00MGIxLWJhMzYtZTc0NjlkMTU0ODk4In0.u5sj49OYNGfbxzA4rM3CJfKqBjEYSZAN-mXVJOQ-U4M")
        }
        if (cc.sys.localStorage.getItem("token")) {
            // this.needLogin = false;
            this.protocol = true;
            cc.wxToken = cc.sys.localStorage.getItem("token");
            console.log("cocos--token---",cc.wxToken);
            if (cc.sys.isNative) {
                cc.beginCountTime = new Date().getTime();
                cc.director.loadScene('Index');
                // if (cc.sys.localStorage.getItem("realName")) {
                //     cc.beginCountTime = new Date().getTime();
                //     cc.director.loadScene('Index');
                // } else {
                //     this.showRealLayer();
                // }
            } else {
                cc.beginCountTime = new Date().getTime();
                cc.director.loadScene('Index');
            }
        }
        Date.prototype.Format = function (fmt) {
            var o = {
                "M+": this.getMonth() + 1, //月份 
                "d+": this.getDate(), //日 
                "H+": this.getHours(), //小时 
                "m+": this.getMinutes(), //分 
                "s+": this.getSeconds(), //秒 
                "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
                "S": this.getMilliseconds() //毫秒 
            };
            if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
            for (var k in o)
                if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
            return fmt;
        }
    },
    onLoginWX() {
        if (cc.sys.isNative) {
            if (this.protocol) {
                cc.Tools.wxLogin();
            } else {
                cc.Tools.showTips(this.node, "请先同意用户协议和隐私政策")
            }
        }
    },
    // 选择用户协议
    clickProtocol(e) {
        let target = e.target;
        let right = target.getChildByName("right");
        if (this.protocol) {
            right.active = false;
            this.protocol = false;
        } else {
            right.active = true;
            this.protocol = true;
        }
    },
    getCode() {
        this.protocol = false;
        // {"channel":"walk","imei":"","android_id":"8bacfc24ece79979","mac":"02:00:00:00:00:00","uid":"3b0fe5ec-050d-46bf-aac6-0dc5aa5889c4","oaid":"fbf75dfb-fffd-7f02-6ef6-f7ffbfad8da6"}
        let data = {
            "channel": cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "",
            "imei": cc.Tools.DeviceInfo.imei ? cc.Tools.DeviceInfo.imei : "",
            "mac": cc.Tools.DeviceInfo.mac ? cc.Tools.DeviceInfo.mac : "",
            "distinct_id": cc.Tools.DeviceInfo.uid ? cc.Tools.DeviceInfo.uid : "",
            "oaid": cc.Tools.DeviceInfo.oaid ? cc.Tools.DeviceInfo.oaid : "",
            "android_id": cc.Tools.DeviceInfo.android_id ? cc.Tools.DeviceInfo.android_id : "",
            "code": cc.wxLoginResultcode
        }
        cc.Tools.sendRequest("pit.v1/register", "POST", data).then((res) => {
            cc.wxToken = res.data.token;
            cc.sys.localStorage.setItem("token", res.data.token);
            let _dotTime = new Date().Format("yyyy-MM-dd HH:mm:ss")
            cc.Tools.dot("register", { register_time: _dotTime, channel: cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "" })
            // if (cc.sys.localStorage.getItem("realName")) {
            cc.beginCountTime = new Date().getTime();
            cc.director.loadScene('Index');
            // } else {
            //     this.showRealLayer();
            // }
        })
    },
    // 显示用户协议
    showUserProtocol() {
        let protocol = this.node.getChildByName("user_protocol");
        protocol.active = true;
    },
    hideUserProtocol() {
        let protocol = this.node.getChildByName("user_protocol");
        protocol.active = false;
    },
    // 显示隐私政策
    showUserPrivacy() {
        let privacy = this.node.getChildByName("user_privacy");
        privacy.active = true;
    },
    hideUserPrivacy() {
        let privacy = this.node.getChildByName("user_privacy");
        privacy.active = false;
    },
    // 实名认证
    showRealLayer() {
        this.realNameLayer = this.node.getChildByName("RealName");
        this.realNameLayer.active = true;
    },
    // 实名认证点击
    clickRealLayer(e) {
        let target = e.target;
        let _realName = this.realNameLayer.getChildByName("edit1").getComponent(cc.EditBox).string;
        let _realNumber = this.realNameLayer.getChildByName("edit2").getComponent(cc.EditBox).string;
        // 用local记录 是否实名
        if (this.regYourName(_realName) && this.regYourNumber(_realNumber)) {
            cc.sys.localStorage.setItem("realName", true)
            cc.beginCountTime = new Date().getTime();
            cc.director.loadScene('Index');
        }
    },
    // 判断真实姓名
    regYourName(name) {
        var regName = /^[\u4e00-\u9fa5]{2,4}$/;
        if (!regName.test(name)) {
            cc.Tools.showTips(this.node, "真实姓名填写有误")
            return false;
        }
        return true
    },
    // 判断身份证号
    regYourNumber(num) {
        var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
        if (!regIdNo.test(num)) {
            cc.Tools.showTips(this.node, '身份证号填写有误');
            return false;
        }
        return true
    }
});


