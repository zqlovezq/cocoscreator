"use strict";
cc._RF.push(module, '6b7cdHix81Ol6r4h+cnHYQh', 'login');
// Script/login.js

"use strict";

var http = require("Http");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0; //    获取用户信息
    //  cc.sys.localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4")

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      cc.wxToken = cc.sys.localStorage.getItem("token");
      cc.director.loadScene('Index');
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.wxLogin.wxLogin();
      } else {
        this.showTips();
      }
    } // this.schedule(()=>{
    //     // cc.wxLoginInfo.wxLoginResultcode = {};
    // },1)

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
  showTips: function showTips() {
    var tips = this.node.getChildByName("tips");
    tips.y = 0;
    tips.active = true;
    cc.tween(tips).to(1, {
      y: 100
    }).delay(0.5).call(function () {
      tips.active = false;
    }).start();
  },
  update: function update(dt) {
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
        http.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          // this.token.string = JSON.stringify(res)
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.director.loadScene('Index');
        });
      }
    }
  }
});

cc._RF.pop();