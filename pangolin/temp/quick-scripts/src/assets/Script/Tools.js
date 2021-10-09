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
      console.log("cocos----注册打点" + event); // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, JSON.stringify(pro));

      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;Ljava/lang/String;)V", event, JSON.stringify(pro));
    }
  },

  /**
   * 看视频回调
   */
  adCallBack: function adCallBack(ecpm) {
    console.log("cocos----观看视频回调"); // 获取广告ad之前先用epcr
    // 看视频得体力

    this.getUserEcpm(ecpm).then(function () {
      console.log("cocos----获取ecpm之后才调用");

      if (cc.zm.userInfo.power <= 0) {
        console.log("cocos----体力接口");
        var sendData = {
          ad: cc.zm.ad
        };
        cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
          console.log("cocos----获取体力奖励");
          cc.zm.userInfo.power = res.data.value;

          if (cc.zm.videoAd.enterGame) {
            cc.director.loadScene('Game');
          }
        });
      } // 看视频得红包


      if (cc.zm.videoAd.redPack) {
        console.log("cocos----获取红包接口", cc.zm.videoAd.redPack);
        cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.videoAd.redPack).then(function (res) {
          console.log("cocos----获取红包奖励", res);
          var sendData = {};
          cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
            cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

            if (cc.zm.userInfo.power > 0) {
              cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
                cc.zm.LevelInfo = res.data;
                cc.zm.videoAd.redPack = null;

                if (cc.zm.LevelInfo.stage < 30) {
                  cc.director.loadScene('Game');
                } else {
                  // 直接返回主界面
                  cc.director.loadScene('Index');
                }
              });
            } else {
              // 小于0 弹出看视频获得体力的接口
              cc.director.loadScene('Index');
            }
          });
        });
      }

      if (cc.zm.videoAd.clickSign) {
        console.log("cocos----签到接口");
        cc.zm.videoAd.clickSign = false;
      }

      if (cc.zm.videoAd.clickTable) {
        console.log("cocos----转盘接口");
        cc.zm.videoAd.clickTable = false;
      }
    });
  },
  // 显示激励视频
  showJiliAd: function showJiliAd() {
    console.log("cocos----点击显示激励视频");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
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
    console.log("cococ----触发插屏");

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
    console.log("cocos----wxLogin");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    console.log("cocos----wxLoginResultcode=" + errCode);
    cc.wxLoginResultcode = errCode;
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm) {
    if (!cc.zm) {
      return;
    }

    console.log("cocos----调用ecpm=", ecpm);
    return new Promise(function (resolve, reject) {
      var sendData = {
        "ecpm": parseInt(ecpm),
        "ts": new Date().getTime() //时间戳

      };
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function (res) {
        console.log("cocos----Ecpm成功", JSON.stringify(res.data));
        cc.zm.ad = res.data.ad;

        if (cc.zm.videoAd.redPack) {
          cc.zm.videoAd.redPack.ad = cc.zm.ad;
        }

        resolve();
      });
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
      console.log("cocos----requestURL=", requestURL);
      console.log("cocos----data=", JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          console.log("cocos----http res:" + xhr.response); // 统一处理

          var _response = JSON.parse(xhr.response);

          if (_response.code === 0) {
            resolve(_response);
          } else {
            console.log("cocos----" + _response.message);
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