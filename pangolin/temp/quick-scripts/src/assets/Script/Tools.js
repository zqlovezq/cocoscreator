"use strict";
cc._RF.push(module, '5f815fcXZ9BIY+pPRsOeaGx', 'Tools');
// Script/Tools.js

"use strict";

cc.Tools = {
  /**
   * @param {*} event 数数打点的事件名称
   * @param {*} pro 数数打点的关联属性
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      if (pro) {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;Ljava/lang/String;)V", event, JSON.stringify(pro));
      } else {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event);
      }
    }
  },
  getDevice: function getDevice(pram, data) {
    cc.Tools.DeviceInfo = JSON.parse(data);
  },

  /**
   * 看视频回调
   *  //type 1体力补充 2--过关奖励 3--签到 4--转盘 5--开局增益 6--插屏 7--开屏
   */
  adCallBack: function adCallBack(pram) {
    var _this = this;

    var _pram = pram.split(",");

    var ecpm = _pram[0];
    var type = _pram[1];
    console.log("cocos ecpm=", ecpm);
    this.getUserEcpm(ecpm, type).then(function () {
      switch (type) {
        case "1":
          // 看视频得体力
          _this.emitEvent("getPower");

          break;

        case "2":
          // 看视频得红包
          _this.emitEvent("getRedPackage");

          break;

        case "3":
          // 看视频签到
          _this.emitEvent("getSign");

          break;

        case "4":
          // 看视频转盘
          _this.emitEvent("getTable");

          break;

        case "5":
          // 看视频得道具
          _this.emitEvent("getWeapon");

          break;

        case "6":
          break;

        case "7":
          break;

        default:
          break;
      }
    });
  },
  emitEvent: function emitEvent(event) {
    cc.Tools.Event.emit(event);
  },
  // 显示激励视频
  showJiliAd: function showJiliAd(type) {
    var data = ["体力补充", "过关奖励", "签到", "转盘", "开局增益"];
    cc.Tools.dot("ad_show", {
      ad_scene: data[Number(type) - 1]
    });

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;)V", "" + type);
    }
  },
  // 显示banner
  showBanner: function showBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
    }
  },
  // 隐藏banner
  hideBanner: function hideBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
    }
  },
  // 显示插屏广告
  showTableScreen: function showTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
    }
  },
  // 隐藏插屏广告
  hideTableScreen: function hideTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
    }
  },
  // 微信登陆
  wxLogin: function wxLogin() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    cc.wxLoginResultcode = errCode;
    cc.Tools.emitEvent("getCode");
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm, type) {
    // 获取ecpm之后像服务器发的是ecpm/100
    var serverEcpm = parseInt(ecpm / 100); // 单价

    var priceEcpm = Number(ecpm / (10 * 10000));
    return new Promise(function (resolve, reject) {
      if (type === "6") {
        cc.Tools.dot("ad_flow", {
          ecpm: serverEcpm,
          ad_price_1: priceEcpm
        });
        resolve();
      } else if (type === "7") {
        cc.Tools.dot("ad_open_screen", {
          ecpm: serverEcpm,
          ad_price_1: priceEcpm
        });
        resolve();
      } else {
        var sendData = {
          "ecpm": Number(ecpm) / 100,
          "ts": new Date().getTime() //时间戳

        };
        var data = cc.Tools.createSignData(sendData);
        cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function (res) {
          var data = ["体力补充", "过关奖励", "签到", "转盘", "开局增益"];
          cc.Tools.dot("ad", {
            ad_type: "激励视频",
            ecpm: serverEcpm,
            ad_price_1: priceEcpm
          });
          cc.Tools.dot("ad_start", {
            ad_scene: data[Number(type) - 1],
            ecpm: serverEcpm
          });
          cc.zm.ad = res.data.ad;

          if (cc.zm.videoAd.redPack) {
            cc.zm.videoAd.redPack.ad = cc.zm.ad;
          }

          resolve();
        });
      }
    });
  },

  /**
   * 
   * @param {*} data 需要签名数据
   * @returns 
   */
  createSignData: function createSignData(data) {
    var sortList = [];

    for (var key in data) {
      if (data.hasOwnProperty(key) && key != "sign") {
        var value = data[key];
        var item = {};
        item.key = key;
        item.value = value;
        sortList.push(key);
      }
    }

    sortList.sort();
    var strToJiaMi = "";
    sortList.forEach(function (key) {
      strToJiaMi += "&" + key + "=" + data[key];
    }, this);
    strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi;
    return data;
  },
  // 适配屏幕
  screenAdapter: function screenAdapter() {
    var canvas = cc.find("Canvas").getComponent(cc.Canvas);
    var winSize = cc.view.getVisibleSize();

    if (winSize.height / winSize.width <= 720 / 1280) {
      canvas.fitHeight = true;
      canvas.fitWidth = false;
    } else {
      canvas.fitHeight = false;
      canvas.fitWidth = true;
    }
  },

  /**
   * 
   * @param {*} n node节点
   * @param {*} str  显示的tips内容
   */
  showTips: function showTips(n, str) {
    var tips = n.getChildByName("Tips");
    tips.getComponent(cc.Label).string = str;
    tips.stopAllActions();
    tips.y = 145;
    cc.tween(tips).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 300
    }).delay(0.5).to(0.1, {
      opacity: 0
    }).start();
  },

  /**
   * 
   * @param {*} url 请求接口的url----pit.v1.PitSvc/UserInfo
   * @param {*} type 请求接口的类型 只能是GET--POST
   * @param {*} data 请求接口所需要的数据
   * @returns 
   */
  sendRequest: function sendRequest(url, type, data) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var requestURL = "https://pit.api.jiankangzhuan.com/" + url;
      xhr.open(type, requestURL, true);

      if (cc.sys.isNative) {
        xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
      }

      if (cc.wxToken) {
        xhr.setRequestHeader("Authorization", cc.wxToken);
      }

      xhr.setRequestHeader("Content-Type", "application/json");
      console.log("cocos----xhr=", requestURL);
      console.log("cocos----data=", JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          console.log("cocos----http res:" + xhr.response); // 统一处理

          var _response = JSON.parse(xhr.response);

          if (_response.code === 0) {
            console.log("cocos----http success");
            resolve(_response);
          } else {
            console.log("cocos----http fail" + _response.message);
            reject(_response.message);
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error(xhr.statusText));
      };

      xhr.send(JSON.stringify(data));
    });
  }
};

cc._RF.pop();