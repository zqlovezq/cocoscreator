"use strict";
cc._RF.push(module, '6b7cdHix81Ol6r4h+cnHYQh', 'login');
// Script/login.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0;

    if (!cc.sys.isNative) {
      cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4");
    }

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      this.protocol = true;
      cc.wxToken = cc.sys.localStorage.getItem("token");

      if (cc.sys.isNative) {
        if (cc.sys.localStorage.getItem("realName")) {
          cc.director.loadScene('Index');
        } else {
          this.showRealLayer();
        }
      } else {
        cc.director.loadScene('Index');
      }
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.Tools.wxLogin();
      } else {
        cc.Tools.showTips(this.node, "请先同意用户协议和隐私政策");
      }
    }
  },
  // 选择用户协议
  clickProtocol: function clickProtocol(e) {
    var target = e.target;
    var right = target.getChildByName("right");

    if (this.protocol) {
      right.active = false;
      this.protocol = false;
    } else {
      right.active = true;
      this.protocol = true;
    }
  },
  update: function update(dt) {
    var _this = this;

    this.time += dt;

    if (!this.needLogin) {
      return;
    }

    if (this.time >= 1) {
      this.time = 0;

      if (cc.wxLoginResultcode && this.protocol) {
        this.protocol = false;
        var data = {
          "channel": "1",
          "imei": "1",
          "mac": "1",
          "distinct_id": "1",
          "oaid": "1",
          "android_id": "1",
          "code": cc.wxLoginResultcode
        };
        cc.Tools.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.Tools.dot("register", {
            register_time: new Date(),
            channel: "微信"
          });

          if (cc.sys.localStorage.getItem("realName")) {
            cc.director.loadScene('Index');
          } else {
            _this.showRealLayer();
          }
        });
      }
    }
  },
  // 显示用户协议
  showUserProtocol: function showUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = true;
  },
  hideUserProtocol: function hideUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = false;
  },
  // 显示隐私政策
  showUserPrivacy: function showUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = true;
  },
  hideUserPrivacy: function hideUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = false;
  },
  // 实名认证
  showRealLayer: function showRealLayer() {
    this.realNameLayer = this.node.getChildByName("RealName");
    this.realNameLayer.active = true;
  },
  // 实名认证点击
  clickRealLayer: function clickRealLayer(e) {
    var target = e.target;
    var _realName = this.realNameLayer.getChildByName("edit1").getComponent(cc.EditBox).string;
    var _realNumber = this.realNameLayer.getChildByName("edit2").getComponent(cc.EditBox).string;
    cc.log("\u771F\u5B9E\u59D3\u540D" + _realName + "------\u8EAB\u4EFD\u8BC1\u53F7" + _realNumber); // 用local记录 是否实名

    if (this.regYourName(_realName) && this.regYourNumber(_realNumber)) {
      cc.log("认证成功");
      cc.sys.localStorage.setItem("realName", true);
      cc.director.loadScene('Index');
    }
  },
  // 判断真实姓名
  regYourName: function regYourName(name) {
    var regName = /^[\u4e00-\u9fa5]{2,4}$/;

    if (!regName.test(name)) {
      cc.Tools.showTips(this.node, "真实姓名填写有误");
      return false;
    }

    return true;
  },
  // 判断身份证号
  regYourNumber: function regYourNumber(num) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    if (!regIdNo.test(num)) {
      cc.Tools.showTips(this.node, '身份证号填写有误');
      return false;
    }

    return true;
  }
});

cc._RF.pop();