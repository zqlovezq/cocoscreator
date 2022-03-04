
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d7eaacDHtN8JTIoUmPIlQ0', 'Tools');
// Script/Tools/Tools.js

"use strict";

var Pubkey = "-----BEGIN RSA Public Key-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAd71hqQFal9eqThSMwr\niMwpTvyTYkX9Y0vuFqEoqU72qQ98CUhxwxLczuFZBmvlL2diIVf1dROR3MoHm/wI\nAP3pqFuV5XMrclrlOkIr9h1WNIje/Hfe1GMmixj8JRTf6MEDQ5vA8m+PyHdRAxCc\nLqYwji3LB3VU+XJkOcdlRHK1oi6BBY7/qJj2HuLgFfvhWW9Qc+SRsu6aKEA+x11u\nZLCtABgAMDcD1zYdEu1Kaw22iQJRF9ZchgPEWKo0okAR5bAYRx5D+MhirQ20XJGM\nvgOiqF3LYpuA75UTjN5qGs9DVzYlnRamGfx3otJwzoKc0N8BLewlncRheJH4kGej\nhwIDAQAB\n-----END RSA Public Key-----";
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
  //像服务器发送请求
  getDevice: function getDevice(pram, data) {
    cc.Tools.DeviceInfo = JSON.parse(data);
  },
  setAdTimes: function setAdTimes() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getAdTimes", "()V");
    }
  },
  getPermission: function getPermission() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPermission", "()V");
    }
  },
  getAdTimes: function getAdTimes(data) {
    cc.Tools.adTimes = Number(data);
  },
  //数美接口
  sm: function sm(type) {
    console.log("cocos----sm---", "type=" + type);

    var _type;

    var json = {
      "adType": "REWARDED_VIDEO_AD",
      "codeId": cc.Tools.ad.adPosId ? cc.Tools.ad.adPosId : "0"
    };

    if (type === "adGet") {
      cc.Tools.ad.adId = cc.Tools.userInfo.user_id + "-" + cc.Tools.uuid(8, 10);
    }

    json.adId = cc.Tools.ad.adId;

    if (type.indexOf("adFinish") > -1) {
      _type = "adFinish";

      var __type = type.split(",");

      if (__type[1]) {
        if (__type[1] === "close") {
          json.adFinishType = "CLICK_CLOSE_BUTTON";
        } else if (__type[1] === "complete") {
          json.adFinishType = "COMPLETE_AD";
        } else if (__type[1] === "skip") {
          json.adFinishType = "SKIP_AD";
        } else if (__type[1] === "error") {
          json.adFinishType = "SHOW_AD_ERROR";
        }
      }
    } else {
      _type = type;
    }

    var sendData = {
      "device_id": cc.sys.localStorage.getItem("sm_device_id"),
      "event": _type,
      "millisecond": new Date().getTime(),
      "add_json": JSON.stringify(json)
    };
    cc.Tools.sendRequest("ShuMeiEvent", "POST", sendData).then(function (res) {});
  },
  //uuid(8, 10)
  uuid: function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  },

  /**
   * 获取当前的存钱罐的钱数
  */
  getFreeze: function getFreeze() {
    if (cc.sys.isNative && cc.sys.localStorage.getItem("showBtn") == 100) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setFreeze", "(Ljava/lang/String;Ljava/lang/String;)V", cc.Tools.userInfo.calendar_msg, cc.Tools.userInfo.calendar_timestamp);
    }
  },
  setDistinctId: function setDistinctId() {
    // console.log("cocos-----distinct_id=".cc.Tools.userInfo.distinct_id);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setDistinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
    }
  },
  setUserId: function setUserId() {
    // console.log("cocos-----user_id=".cc.Tools.userInfo.user_id);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setUsertId", "(Ljava/lang/String;)V", cc.Tools.userInfo.user_id + "");
    }
  },
  setLevel: function setLevel() {
    // console.log("cocos-----level=",cc.Tools.userInfo.level);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLevel", "(Ljava/lang/String;)V", cc.Tools.userInfo.level + "");
    }
  },
  //数数打点
  shuShuDot: function shuShuDot() {
    // console.log("cocos-----shuShu");
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "startShuShu", "()V");
    }
  },
  adCallBack: function adCallBack(pram) {
    var _this = this;

    var _pram = pram.split(",");

    var ecpm = _pram[0];
    var type = _pram[1];
    var sendData = {};
    this.getUserEcpm(ecpm, type).then(function (ad) {
      // 点我领红包
      sendData = {
        "ad_id": ad,
        "ts": new Date().getTime(),
        //时间戳
        "type": parseInt(type),
        "action": "AdAward"
      };

      switch (type) {
        case "1": //点我领红包

        case "2": //悬浮红包

        case "3": //新春红包

        case "4": //成功过关

        case "7": //点我领红包

        case "8": //超级红包

        case "9": //消除红包

        case "12": //自动红包

        case "10":
          //飞行红包
          cc.Tools.sendRequest("PipeAction", "POST", sendData).then(function (res) {
            _this.emitEvent("getTicket", {
              ticket: res.amount,
              add: res.add_amount,
              type: 1,
              videoType: parseInt(type)
            });
          });
          break;

        case "11": //提现视频

        case "15": //存钱罐解冻

        case "17":
          //签到
          cc.Tools.sendRequest("PipeAction", "POST", sendData).then(function (res) {
            _this.emitEvent("getTicket", {
              ticket: res.amount,
              add: res.add_amount,
              type: 2,
              videoType: parseInt(type)
            });
          });
          break;

        case "5":
          //解冻红包
          _this.emitEvent("freeze", ad);

          break;

        case "6":
          // 存钱罐
          _this.emitEvent("saveCash", ad);

          break;

        case "13":
          //偷能量
          _this.emitEvent("steal", ad);

          break;

        case "14":
          //复仇
          _this.emitEvent("revenge", ad);

          break;

        case "16":
          //宝箱
          _this.emitEvent("openBox", ad);

          break;

        default:
          break;
      }
    });
  },
  emitEvent: function emitEvent(event, arg) {
    cc.Tools.Event.emit(event, arg);
  },
  // 显示激励视频
  showJiliAd: function showJiliAd(type) {
    if (cc.sys.isNative) {
      // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;)V", "" + type);
      if (cc.Tools.ad.adShowNum > 0) {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPreLoadJili", "(Ljava/lang/String;)V", "" + type);
      } else {
        cc.Tools.emitEvent("showTips", "今天观看视频次数已经达到上限");
      }
    } else {
      cc.Tools.adCallBack("100," + type);
    }
  },
  //请求预加载新的广告ID isDif 是否分层
  setNewAdId: function setNewAdId(id) {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preLoadRewardad", "(Ljava/lang/String;)V", "" + id);
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
  //显示信息流广告
  showFeedScreen: function showFeedScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showFeedScreen", "()V");
    }
  },
  //隐藏信息流广告
  hideFeedScreen: function hideFeedScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideFeedScreen", "()V");
    }
  },
  wxShare: function wxShare(type) {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_share", "(I)V", type);
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
    cc.Tools.emitEvent("getCode", errCode);
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm, type) {
    // 获取ecpm之后像服务器发的是ecpm/100
    var serverEcpm = parseInt(ecpm / 100);
    return new Promise(function (resolve, reject) {
      var sendData = {
        "ecpm": serverEcpm,
        "ts": new Date().getTime(),
        //时间戳
        "type": parseInt(type)
      };
      var data = cc.Tools.createSignData(sendData);
      data.action = "Ecpm";
      cc.Tools.sendRequest("PipeAction", "POST", data).then(function (res) {
        cc.Tools.reminderMsg = res.msg;
        cc.Tools.ad.adShowNum = res.ad_show_num;
        console.log("cocos----ecpm类型----" + type);

        if (type < 20) {
          cc.Tools.ad.adTimes++;

          if (cc.Tools.ad.adTimes <= cc.Tools.ad.adDiv) {
            if (cc.Tools.ad.adSmall) {
              cc.Tools.ad.adPosId = cc.Tools.ad.adSmall;
            }
          } else {
            if (cc.Tools.ad.adBig) {
              cc.Tools.ad.adPosId = cc.Tools.ad.adBig;
            }
          }

          cc.Tools.setNewAdId(cc.Tools.ad.adPosId);
        }

        cc.sys.localStorage.setItem("adTimes", cc.Tools.ad.adTimes);
        resolve(res.ad_id);
      })["catch"](function (res) {
        console.log("cocos----Ecpm----bug----", JSON.stringify(res));

        if (cc.Tools.ad.adPosId) {
          cc.Tools.setNewAdId(cc.Tools.ad.adPosId);
        }
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
    strToJiaMi = "token=" + cc.Tools.userInfo.sc1 + strToJiaMi;
    console.log("cocos----加密串---", strToJiaMi);

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi;
    return data;
  },
  // 适配屏幕
  screenAdapter: function screenAdapter() {
    var canvas = cc.find("Canvas").getComponent(cc.Canvas);
    var winSize = cc.view.getVisibleSize();

    if (winSize.width / winSize.height <= 1080 / 1920) {
      canvas.fitHeight = false;
      canvas.fitWidth = true;
    } else {
      canvas.fitHeight = true;
      canvas.fitWidth = false;
    }
  },

  /**
     * 
     * @param {*} n node节点
     * @param {*} str  显示的tips内容
     */
  showTips: function showTips(n, str) {
    return new Promise(function (resolve, reject) {
      var tips = n.getChildByName("Tips");

      if (!tips) {
        reject();
      }

      var icon = tips.getChildByName("icon");
      var lbl = tips.getChildByName("lbl");

      if (str) {
        icon.active = false;
        lbl.active = true;
        var text = lbl.getChildByName("layout").getChildByName("text");
        text.getComponent(cc.RichText).string = str;

        if (lbl.getChildByName("icon")) {
          var _icon = lbl.getChildByName("icon");

          cc.tween(_icon).delay(0.05).call(function () {
            _icon.x = lbl.getChildByName("layout").width / 2 - 15;
          }).start();
        }
      } else {
        icon.active = true;
        lbl.active = false;
      }

      tips.stopAllActions();
      tips.zIndex = 9999;
      tips.y = 145;
      tips.opacity = 255;
      tips.active = true;
      cc.tween(tips).to(1, {
        y: 300
      }).delay(0.5).to(0.1, {
        opacity: 0
      }).call(function () {
        tips.active = false;
        resolve();
      }).start();
    });
  },

  /**
   * 接口加密
  */
  encryptData: function encryptData(data) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----');
    var str = JSON.stringify(data);
    var encrypted = encrypt.encrypt(str);
    var backData = [];

    for (var i = 0; i < encrypted.length; i += 1000) {
      backData.push(encrypted.slice(i, i + 1000));
    }

    var obj = {};
    obj.data = backData;
    return obj;
  },
  decryptData: function decryptData(encryptedData) {
    var parseData = ""; // console.log('cocos----解密后数据:', encryptedData.length);

    for (var i = 0; i < encryptedData.length; i++) {
      var decrypt = new JSEncrypt();
      decrypt.setPrivateKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----');
      var uncrypted = decrypt.decrypt(encryptedData[i]); // console.log('cocos----解密后----数据:', uncrypted);

      parseData += uncrypted;
    }

    console.log('cocos----解密后数据:%o', parseData);
    return JSON.parse(parseData);
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
      var requestURL = "https://api.jiankangzhuan.com/api.xxrich/" + url; //test todo
      // let requestURL = "http://192.168.110.195:8888/api.xxrich/" + url;

      xhr.open(type, requestURL, true);

      if (cc.sys.isNative) {
        xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
      }

      var wxToken = cc.sys.localStorage.getItem("token");

      if (wxToken) {
        xhr.setRequestHeader("Authorization", wxToken);
      }

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          // 统一处理
          var _response = JSON.parse(xhr.response); // console.log("cocos-----" + url + "------", xhr.response);
          // 判断接口是否是加密接口


          if (data.action) {
            if (_response.code === 0) {
              //解密
              // console.log("cocos-----"+url+"-----"+data.action+"----"+xhr.response)
              resolve(cc.Tools.decryptData(_response.data.data));
            } else {
              reject(_response.message);
            }
          } else {
            if (_response.code === 0) {
              resolve(_response);
            } else {
              reject(_response.message);
            }
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error(xhr.statusText));
      };

      if (data.action) {
        xhr.send(JSON.stringify(cc.Tools.encryptData(data)));
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  },

  /**
   * 按钮呼吸动画
   * @param btn:cc.Node
   */
  breatheAnim: function breatheAnim(btn) {
    btn.stopAllActions();
    var action = cc.sequence(cc.scaleTo(0.5, 0.9), cc.scaleTo(0.5, 1));
    cc.tween(btn).repeatForever(action).start();
  },

  /**
   * 旋转动画
   * @param btn:cc.Node
   */
  rotateAnim: function rotateAnim(btn) {
    btn.stopAllActions();
    btn.angle = 0;
    var action = cc.sequence(cc.rotateBy(2, 360), cc.callFunc(function () {
      btn.angle = 0;
    }));
    cc.tween(btn).repeatForever(action).start();
  },

  /**
   * 停止节点动画
   */
  stopAnim: function stopAnim(btn) {
    btn.stopAllActions();
  },

  /**
   * 
   * @param {动画节点} btn 
   */
  popAnim: function popAnim(btn, y) {
    btn.stopAllActions();
    var pos = btn.getPosition(cc.v2()); //随机一个两位数小数

    var rdm = cc.Tools.createRandom(0, y);
    var action1 = cc.moveTo(1, pos.x, pos.y + rdm + 5);
    var action2 = cc.moveTo(1, pos.x, pos.y);
    var action3 = cc.moveTo(1, pos.x, pos.y - rdm - 5);
    var action4 = cc.moveTo(1, pos.x, pos.y);
    var ac = [];
    ac.push(action1, action2, action3, action4);
    var action = cc.sequence(ac);
    cc.tween(btn).delay(Math.random()).repeatForever(action).start();
  },

  /**
   * 按钮置灰
   */
  setButtonGary: function setButtonGary(btn) {
    var btnCom = btn.getComponent(cc.Button);

    if (btnCom) {
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
      btn.targetOff("touchend");
    }
  },

  /**
   * 在一个范围内随机
   */
  createRandom: function createRandom(n, m) {
    ++m;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },

  /**
   * 将秒数转成时间
  */
  changeTime: function changeTime(count) {
    var hour = Math.floor(count / 3600);
    var minute = Math.floor((count - 3600 * hour) / 60);
    var second = count - hour * 3600 - 60 * minute;
    console.log(hour + "\u65F6+" + minute + "\u5206+" + second + "\u79D2");
    return (hour > 0 ? hour + "时" : "") + (minute > 0 ? minute + "分" : "") + (second > 0 ? second + "秒" : "");
  },

  /**
   * 将秒数转成天数
  */
  changeSecondTime: function changeSecondTime(count) {
    var day = Math.floor(count / (3600 * 24));
    var hour = Math.floor((count - day * (3600 * 24)) / 3600);
    var minute = Math.floor((count - 3600 * hour - day * (3600 * 24)) / 60); // let second = count - hour * 3600 - 60 * minute;

    return (day > 0 ? day + "天" : "") + (hour > 0 ? hour + "时" : "") + (minute > 0 ? minute + "分" : "");
  },

  /**
   * 将时间戳转化
  */
  //将数组中的一个数值删除
  remove: function remove(arr, val) {
    var index = arr.indexOf(val);

    if (index > -1) {
      arr.splice(index, 1);
      return index;
    }

    return index;
  },
  changeTimeToloc: function changeTimeToloc(time) {
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate();
    var hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
    var minute = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    var second = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
    return year + "/" + month + "/" + day + " " + hours + ":" + minute + ":" + second;
  }
};
cc.Tools.userInfo = {}; //用户信息

cc.Tools.ad = {}; //广告

cc.Tools.treasure = {}; //宝箱

cc.Tools.wallet = {}; //钱

cc.Tools.ad.adTimes = 0;
cc.Tools.ad.adDiv = 10;

cc._RF.pop();
                    }
                    if (nodeEnv) {
                        __define(__module.exports, __require, __module);
                    }
                    else {
                        __quick_compile_project__.registerModuleFunc(__filename, function () {
                            __define(__module.exports, __require, __module);
                        });
                    }
                })();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMvVG9vbHMuanMiXSwibmFtZXMiOlsiUHVia2V5IiwiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXREZXZpY2UiLCJwcmFtIiwiZGF0YSIsIkRldmljZUluZm8iLCJwYXJzZSIsInNldEFkVGltZXMiLCJnZXRQZXJtaXNzaW9uIiwiZ2V0QWRUaW1lcyIsImFkVGltZXMiLCJOdW1iZXIiLCJzbSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJqc29uIiwiYWQiLCJhZFBvc0lkIiwiYWRJZCIsInVzZXJJbmZvIiwidXNlcl9pZCIsInV1aWQiLCJpbmRleE9mIiwiX190eXBlIiwic3BsaXQiLCJhZEZpbmlzaFR5cGUiLCJzZW5kRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJEYXRlIiwiZ2V0VGltZSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsImxlbiIsInJhZGl4IiwiY2hhcnMiLCJpIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsInIiLCJqb2luIiwiZ2V0RnJlZXplIiwiY2FsZW5kYXJfbXNnIiwiY2FsZW5kYXJfdGltZXN0YW1wIiwic2V0RGlzdGluY3RJZCIsImRpc3RpbmN0X2lkIiwic2V0VXNlcklkIiwic2V0TGV2ZWwiLCJsZXZlbCIsInNodVNodURvdCIsImFkQ2FsbEJhY2siLCJfcHJhbSIsImVjcG0iLCJnZXRVc2VyRWNwbSIsInBhcnNlSW50IiwiZW1pdEV2ZW50IiwidGlja2V0IiwiYW1vdW50IiwiYWRkIiwiYWRkX2Ftb3VudCIsInZpZGVvVHlwZSIsImFyZyIsIkV2ZW50IiwiZW1pdCIsInNob3dKaWxpQWQiLCJhZFNob3dOdW0iLCJzZXROZXdBZElkIiwiaWQiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsInNob3dUYWJsZVNjcmVlbiIsImhpZGVUYWJsZVNjcmVlbiIsInNob3dGZWVkU2NyZWVuIiwiaGlkZUZlZWRTY3JlZW4iLCJ3eFNoYXJlIiwid3hMb2dpbiIsInd4TG9naW5SZXN1bHQiLCJlcnJDb2RlIiwic2VydmVyRWNwbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlU2lnbkRhdGEiLCJhY3Rpb24iLCJyZW1pbmRlck1zZyIsIm1zZyIsImFkX3Nob3dfbnVtIiwiYWREaXYiLCJhZFNtYWxsIiwiYWRCaWciLCJzZXRJdGVtIiwiYWRfaWQiLCJzb3J0TGlzdCIsImtleSIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInNjMSIsImhleF9tZDUiLCJyZXF1aXJlIiwic2lnbiIsInNjcmVlbkFkYXB0ZXIiLCJjYW52YXMiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJzaG93VGlwcyIsIm4iLCJzdHIiLCJ0aXBzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJpY29uIiwibGJsIiwiYWN0aXZlIiwidGV4dCIsIlJpY2hUZXh0Iiwic3RyaW5nIiwiX2ljb24iLCJ0d2VlbiIsImRlbGF5IiwiY2FsbCIsIngiLCJzdGFydCIsInN0b3BBbGxBY3Rpb25zIiwiekluZGV4IiwieSIsIm9wYWNpdHkiLCJ0byIsImVuY3J5cHREYXRhIiwiZW5jcnlwdCIsIkpTRW5jcnlwdCIsInNldFB1YmxpY0tleSIsImVuY3J5cHRlZCIsImJhY2tEYXRhIiwic2xpY2UiLCJvYmoiLCJkZWNyeXB0RGF0YSIsImVuY3J5cHRlZERhdGEiLCJwYXJzZURhdGEiLCJkZWNyeXB0Iiwic2V0UHJpdmF0ZUtleSIsInVuY3J5cHRlZCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFVSTCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3hUb2tlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJfcmVzcG9uc2UiLCJyZXNwb25zZSIsImNvZGUiLCJtZXNzYWdlIiwib25lcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsInNlbmQiLCJicmVhdGhlQW5pbSIsImJ0biIsInNlcXVlbmNlIiwic2NhbGVUbyIsInJlcGVhdEZvcmV2ZXIiLCJyb3RhdGVBbmltIiwiYW5nbGUiLCJyb3RhdGVCeSIsImNhbGxGdW5jIiwic3RvcEFuaW0iLCJwb3BBbmltIiwicG9zIiwiZ2V0UG9zaXRpb24iLCJ2MiIsInJkbSIsImNyZWF0ZVJhbmRvbSIsImFjdGlvbjEiLCJtb3ZlVG8iLCJhY3Rpb24yIiwiYWN0aW9uMyIsImFjdGlvbjQiLCJhYyIsInNldEJ1dHRvbkdhcnkiLCJidG5Db20iLCJCdXR0b24iLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsInRhcmdldE9mZiIsIm0iLCJhIiwibnVtIiwiY2hhbmdlVGltZSIsImNvdW50IiwiaG91ciIsImZsb29yIiwibWludXRlIiwic2Vjb25kIiwiY2hhbmdlU2Vjb25kVGltZSIsImRheSIsInJlbW92ZSIsImFyciIsInZhbCIsImluZGV4Iiwic3BsaWNlIiwiY2hhbmdlVGltZVRvbG9jIiwidGltZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInRyZWFzdXJlIiwid2FsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sdWRBQVY7QUFTQUMsRUFBRSxDQUFDQyxLQUFILEdBQVc7QUFDUDtBQUNKO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxHQUxPLGVBS0hDLEtBTEcsRUFLSUMsR0FMSixFQUtTO0FBQ1osUUFBSUosRUFBRSxDQUFDSyxH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LENBQUNTLFVBQUwsS0FBb0IsQ0FBcEIsR0FBd0JULElBQUksQ0FBQ1MsVUFBTCxFQUF4QixHQUE0QyxNQUFNVCxJQUFJLENBQUNTLFVBQUwsRUFBL0Q7QUFDQSxXQUFPUixJQUFJLEdBQUcsR0FBUCxHQUFhRSxLQUFiLEdBQXFCLEdBQXJCLEdBQTJCWCxHQUEzQixHQUFpQyxHQUFqQyxHQUF1Q2MsS0FBdkMsR0FBK0MsR0FBL0MsR0FBcURqQixNQUFyRCxHQUE4RCxHQUE5RCxHQUFvRUMsTUFBM0U7QUFDSDtBQS9qQk0sQ0FBWDtBQWlrQkE3TixFQUFFLENBQUNDLEtBQUgsQ0FBUzhCLFFBQVQsR0FBb0IsRUFBcEIsRUFBdUI7O0FBQ3ZCL0IsRUFBRSxDQUFDQyxLQUFILENBQVMyQixFQUFULEdBQWMsRUFBZCxFQUFpQjs7QUFDakI1QixFQUFFLENBQUNDLEtBQUgsQ0FBU2dQLFFBQVQsR0FBb0IsRUFBcEIsRUFBdUI7O0FBQ3ZCalAsRUFBRSxDQUFDQyxLQUFILENBQVNpUCxNQUFULEdBQWtCLEVBQWxCLEVBQXFCOztBQUNyQmxQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTMkIsRUFBVCxDQUFZUixPQUFaLEdBQXNCLENBQXRCO0FBQ0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBUzJCLEVBQVQsQ0FBWXlFLEtBQVosR0FBb0IsRUFBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQdWJrZXkgPSBgLS0tLS1CRUdJTiBSU0EgUHVibGljIEtleS0tLS0tXG5NSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXZBZDcxaHFRRmFsOWVxVGhTTXdyXG5pTXdwVHZ5VFlrWDlZMHZ1RnFFb3FVNzJxUTk4Q1VoeHd4TGN6dUZaQm12bEwyZGlJVmYxZFJPUjNNb0htL3dJXG5BUDNwcUZ1VjVYTXJjbHJsT2tJcjloMVdOSWplL0hmZTFHTW1peGo4SlJUZjZNRURRNXZBOG0rUHlIZFJBeENjXG5McVl3amkzTEIzVlUrWEprT2NkbFJISzFvaTZCQlk3L3FKajJIdUxnRmZ2aFdXOVFjK1NSc3U2YUtFQSt4MTF1XG5aTEN0QUJnQU1EY0QxellkRXUxS2F3MjJpUUpSRjlaY2hnUEVXS28wb2tBUjViQVlSeDVEK01oaXJRMjBYSkdNXG52Z09pcUYzTFlwdUE3NVVUak41cUdzOURWellsblJhbUdmeDNvdEp3em9LYzBOOEJMZXdsbmNSaGVKSDRrR2VqXG5od0lEQVFBQlxuLS0tLS1FTkQgUlNBIFB1YmxpYyBLZXktLS0tLWBcbmNjLlRvb2xzID0ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQg5pWw5pWw5omT54K555qE5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBwcm8g5pWw5pWw5omT54K555qE5YWz6IGU5bGe5oCnXG4gICAgKi9cbiAgICBkb3QoZXZlbnQsIHBybykge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBpZiAocHJvKSB7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50LCBKU09OLnN0cmluZ2lmeShwcm8pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/lg4/mnI3liqHlmajlj5HpgIHor7fmsYJcbiAgICBnZXREZXZpY2UocHJhbSwgZGF0YSkge1xuICAgICAgICBjYy5Ub29scy5EZXZpY2VJbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9LFxuICAgIHNldEFkVGltZXMoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldEFkVGltZXNcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFBlcm1pc3Npb24oKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldFBlcm1pc3Npb25cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEFkVGltZXMoZGF0YSkge1xuICAgICAgICBjYy5Ub29scy5hZFRpbWVzID0gTnVtYmVyKGRhdGEpO1xuICAgIH0sXG4gICAgLy/mlbDnvo7mjqXlj6NcbiAgICBzbSh0eXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tc20tLS1cIiwgXCJ0eXBlPVwiICsgdHlwZSk7XG4gICAgICAgIGxldCBfdHlwZTtcbiAgICAgICAgbGV0IGpzb24gPSB7XG4gICAgICAgICAgICBcImFkVHlwZVwiOiBcIlJFV0FSREVEX1ZJREVPX0FEXCIsXG4gICAgICAgICAgICBcImNvZGVJZFwiOiBjYy5Ub29scy5hZC5hZFBvc0lkID8gY2MuVG9vbHMuYWQuYWRQb3NJZCA6IFwiMFwiLFxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcImFkR2V0XCIpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkSWQgPSBjYy5Ub29scy51c2VySW5mby51c2VyX2lkICsgXCItXCIgKyBjYy5Ub29scy51dWlkKDgsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBqc29uLmFkSWQgPSBjYy5Ub29scy5hZC5hZElkO1xuICAgICAgICBpZiAodHlwZS5pbmRleE9mKFwiYWRGaW5pc2hcIikgPiAtMSkge1xuICAgICAgICAgICAgX3R5cGUgPSBcImFkRmluaXNoXCJcbiAgICAgICAgICAgIGxldCBfX3R5cGUgPSB0eXBlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGlmIChfX3R5cGVbMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoX190eXBlWzFdID09PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAganNvbi5hZEZpbmlzaFR5cGUgPSBcIkNMSUNLX0NMT1NFX0JVVFRPTlwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfX3R5cGVbMV0gPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiQ09NUExFVEVfQURcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX190eXBlWzFdID09PSBcInNraXBcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiU0tJUF9BRFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfX3R5cGVbMV0gPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiU0hPV19BRF9FUlJPUlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3R5cGUgPSB0eXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJkZXZpY2VfaWRcIjogY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic21fZGV2aWNlX2lkXCIpLFxuICAgICAgICAgICAgXCJldmVudFwiOiBfdHlwZSxcbiAgICAgICAgICAgIFwibWlsbGlzZWNvbmRcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBcImFkZF9qc29uXCI6IEpTT04uc3RyaW5naWZ5KGpzb24pXG4gICAgICAgIH07XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiU2h1TWVpRXZlbnRcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy91dWlkKDgsIDEwKVxuICAgIHV1aWQobGVuLCByYWRpeCkge1xuICAgICAgICB2YXIgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcbiAgICAgICAgdmFyIHV1aWQgPSBbXSwgaTtcbiAgICAgICAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgdXVpZFtpXSA9IGNoYXJzWzAgfCBNYXRoLnJhbmRvbSgpICogcmFkaXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB1dWlkWzhdID0gdXVpZFsxM10gPSB1dWlkWzE4XSA9IHV1aWRbMjNdID0gJy0nO1xuICAgICAgICAgICAgdXVpZFsxNF0gPSAnNCc7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByID0gMCB8IE1hdGgucmFuZG9tKCkgKiAxNjtcbiAgICAgICAgICAgICAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXVpZC5qb2luKCcnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPluW9k+WJjeeahOWtmOmSsee9kOeahOmSseaVsFxuICAgICovXG4gICAgZ2V0RnJlZXplKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIikgPT0gMTAwKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzZXRGcmVlemVcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8uY2FsZW5kYXJfbXNnLCBjYy5Ub29scy51c2VySW5mby5jYWxlbmRhcl90aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXREaXN0aW5jdElkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvY29zLS0tLS1kaXN0aW5jdF9pZD1cIi5jYy5Ub29scy51c2VySW5mby5kaXN0aW5jdF9pZCk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNldERpc3RpbmN0SWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8uZGlzdGluY3RfaWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRVc2VySWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tLXVzZXJfaWQ9XCIuY2MuVG9vbHMudXNlckluZm8udXNlcl9pZCk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNldFVzZXJ0SWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8udXNlcl9pZCArIFwiXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRMZXZlbCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tbGV2ZWw9XCIsY2MuVG9vbHMudXNlckluZm8ubGV2ZWwpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJnZXRMZXZlbFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBjYy5Ub29scy51c2VySW5mby5sZXZlbCArIFwiXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aVsOaVsOaJk+eCuVxuICAgIHNodVNodURvdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tc2h1U2h1XCIpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzdGFydFNodVNodVwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWRDYWxsQmFjayhwcmFtKSB7XG4gICAgICAgIGxldCBfcHJhbSA9IHByYW0uc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgZWNwbSA9IF9wcmFtWzBdO1xuICAgICAgICBsZXQgdHlwZSA9IF9wcmFtWzFdO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5nZXRVc2VyRWNwbShlY3BtLCB0eXBlKS50aGVuKChhZCkgPT4ge1xuICAgICAgICAgICAgLy8g54K55oiR6aKG57qi5YyFXG4gICAgICAgICAgICBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkX2lkXCI6IGFkLFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogcGFyc2VJbnQodHlwZSksXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJBZEF3YXJkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOi8v54K55oiR6aKG57qi5YyFXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjovL+aCrOa1rue6ouWMhVxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6Ly/mlrDmmKXnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOi8v5oiQ5Yqf6L+H5YWzXG4gICAgICAgICAgICAgICAgY2FzZSBcIjdcIjovL+eCueaIkemihue6ouWMhVxuICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6Ly/otoXnuqfnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiOVwiOi8v5raI6Zmk57qi5YyFXG4gICAgICAgICAgICAgICAgY2FzZSBcIjEyXCI6Ly/oh6rliqjnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTBcIjovL+mjnuihjOe6ouWMhVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlBpcGVBY3Rpb25cIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KFwiZ2V0VGlja2V0XCIsIHsgdGlja2V0OiByZXMuYW1vdW50LCBhZGQ6IHJlcy5hZGRfYW1vdW50LCB0eXBlOiAxLCB2aWRlb1R5cGU6IHBhcnNlSW50KHR5cGUpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTFcIjovL+aPkOeOsOinhumikVxuICAgICAgICAgICAgICAgIGNhc2UgXCIxNVwiOi8v5a2Y6ZKx572Q6Kej5Ya7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE3XCI6Ly/nrb7liLBcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJQaXBlQWN0aW9uXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcImdldFRpY2tldFwiLCB7IHRpY2tldDogcmVzLmFtb3VudCwgYWRkOiByZXMuYWRkX2Ftb3VudCwgdHlwZTogMiwgdmlkZW9UeXBlOiBwYXJzZUludCh0eXBlKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjVcIjovL+ino+WGu+e6ouWMhVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcImZyZWV6ZVwiLCBhZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI2XCI6Ly8g5a2Y6ZKx572QXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KFwic2F2ZUNhc2hcIiwgYWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTNcIjovL+WBt+iDvemHj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcInN0ZWFsXCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE0XCI6Ly/lpI3ku4dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoXCJyZXZlbmdlXCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE2XCI6Ly/lrp3nrrFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoXCJvcGVuQm94XCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBlbWl0RXZlbnQoZXZlbnQsIGFyZykge1xuICAgICAgICBjYy5Ub29scy5FdmVudC5lbWl0KGV2ZW50LCBhcmcpO1xuICAgIH0sXG4gICAgLy8g5pi+56S65r+A5Yqx6KeG6aKRXG4gICAgc2hvd0ppbGlBZCh0eXBlKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dBZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIlwiICsgdHlwZSk7XG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRTaG93TnVtID4gMCkge1xuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldFByZUxvYWRKaWxpXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIFwiXCIgKyB0eXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwic2hvd1RpcHNcIiwgXCLku4rlpKnop4LnnIvop4bpopHmrKHmlbDlt7Lnu4/ovr7liLDkuIrpmZBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5Ub29scy5hZENhbGxCYWNrKFwiMTAwLFwiICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v6K+35rGC6aKE5Yqg6L295paw55qE5bm/5ZGKSUQgaXNEaWYg5piv5ZCm5YiG5bGCXG4gICAgc2V0TmV3QWRJZChpZCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJwcmVMb2FkUmV3YXJkYWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJcIiArIGlkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S6YmFubmVyXG4gICAgc2hvd0Jhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd0Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JePYmFubmVyXG4gICAgaGlkZUJhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgc2hvd1RhYmxlU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93VGFibGVTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmakOiXj+aPkuWxj+W5v+WRilxuICAgIGhpZGVUYWJsZVNjcmVlbigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZVRhYmxlU2NyZWVuXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aYvuekuuS/oeaBr+a1geW5v+WRilxuICAgIHNob3dGZWVkU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93RmVlZFNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/pmpDol4/kv6Hmga/mtYHlub/lkYpcbiAgICBoaWRlRmVlZFNjcmVlbigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUZlZWRTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHd4U2hhcmUodHlwZSkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJ3ZWl4aW5fc2hhcmVcIiwgXCIoSSlWXCIsIHR5cGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlvq7kv6HnmbvpmYZcbiAgICB3eExvZ2luKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJ3ZWl4aW5fbG9naW5cIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJ3ZWl4aW5fbG9naW5cIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICog5o6l5pS2bmF0aXZl5b6u5L+h5o6I5p2D55qEY29kZVxuICAgICogQHBhcmFtIGVyckNvZGUgXG4gICAgKi9cbiAgICB3eExvZ2luUmVzdWx0KGVyckNvZGUpIHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiZ2V0Q29kZVwiLCBlcnJDb2RlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeci+W5v+WRiuS5i+WQjuWIt+aWsOS4gOS4i2VjcG1cbiAgICAgKi9cbiAgICBnZXRVc2VyRWNwbShlY3BtLCB0eXBlKSB7XG4gICAgICAgIC8vIOiOt+WPlmVjcG3kuYvlkI7lg4/mnI3liqHlmajlj5HnmoTmmK9lY3BtLzEwMFxuICAgICAgICBsZXQgc2VydmVyRWNwbSA9IHBhcnNlSW50KGVjcG0gLyAxMDApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiZWNwbVwiOiBzZXJ2ZXJFY3BtLFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogcGFyc2VJbnQodHlwZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGRhdGEuYWN0aW9uID0gXCJFY3BtXCJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiUGlwZUFjdGlvblwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMucmVtaW5kZXJNc2cgPSByZXMubXNnO1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkU2hvd051bSA9IHJlcy5hZF9zaG93X251bTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLWVjcG3nsbvlnostLS0tXCIgKyB0eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA8IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkVGltZXMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkVGltZXMgPD0gY2MuVG9vbHMuYWQuYWREaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFNtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkU21hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRCaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5hZC5hZFBvc0lkID0gY2MuVG9vbHMuYWQuYWRCaWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2V0TmV3QWRJZChjYy5Ub29scy5hZC5hZFBvc0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRUaW1lc1wiLCBjYy5Ub29scy5hZC5hZFRpbWVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5hZF9pZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS1FY3BtLS0tLWJ1Zy0tLS1cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkUG9zSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2V0TmV3QWRJZChjYy5Ub29scy5hZC5hZFBvc0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIOmcgOimgeetvuWQjeaVsOaNrlxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGNyZWF0ZVNpZ25EYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgc29ydExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9IFwic2lnblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb3J0TGlzdC5zb3J0KCk7XG4gICAgICAgIHZhciBzdHJUb0ppYU1pID0gXCJcIjtcbiAgICAgICAgc29ydExpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzdHJUb0ppYU1pICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyBkYXRhW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBzdHJUb0ppYU1pID0gXCJ0b2tlbj1cIiArIGNjLlRvb2xzLnVzZXJJbmZvLnNjMSArIHN0clRvSmlhTWk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5Yqg5a+G5LiyLS0tXCIsIHN0clRvSmlhTWkpO1xuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvLyDpgILphY3lsY/luZVcbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUud2lkdGggLyB3aW5TaXplLmhlaWdodCA8PSAxMDgwIC8gMTkyMCkge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAgICogXG4gICAgICAgKiBAcGFyYW0geyp9IG4gbm9kZeiKgueCuVxuICAgICAgICogQHBhcmFtIHsqfSBzdHIgIOaYvuekuueahHRpcHPlhoXlrrlcbiAgICAgICAqL1xuICAgIHNob3dUaXBzKG4sIHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHRpcHMgPSBuLmdldENoaWxkQnlOYW1lKFwiVGlwc1wiKTtcbiAgICAgICAgICAgIGlmICghdGlwcykge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGljb24gPSB0aXBzLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIGxldCBsYmwgPSB0aXBzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpO1xuICAgICAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgIGljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGJsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBsYmwuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHRleHQuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBzdHI7XG4gICAgICAgICAgICAgICAgaWYgKGxibC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pY29uID0gbGJsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oX2ljb24pLmRlbGF5KDAuMDUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ljb24ueCA9IGxibC5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS53aWR0aCAvIDIgLSAxNVxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxibC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpcHMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRpcHMuekluZGV4ID0gOTk5OTtcbiAgICAgICAgICAgIHRpcHMueSA9IDE0NTtcbiAgICAgICAgICAgIHRpcHMub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRpcHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRpcHMpLnRvKDEsIHsgeTogMzAwIH0pLmRlbGF5KDAuNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmjqXlj6PliqDlr4ZcbiAgICAqL1xuICAgIGVuY3J5cHREYXRhKGRhdGEpIHtcbiAgICAgICAgbGV0IGVuY3J5cHQgPSBuZXcgSlNFbmNyeXB0KCk7XG4gICAgICAgIGVuY3J5cHQuc2V0UHVibGljS2V5KCctLS0tLUJFR0lOIFJTQSBQdWJsaWMgS2V5LS0tLS0nICsgUHVia2V5ICsgJy0tLS0tRU5EIFJTQSBQdWJsaWMgS2V5LS0tLS0nKTtcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBsZXQgZW5jcnlwdGVkID0gZW5jcnlwdC5lbmNyeXB0KHN0cik7XG4gICAgICAgIGxldCBiYWNrRGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY3J5cHRlZC5sZW5ndGg7IGkgKz0gMTAwMCkge1xuICAgICAgICAgICAgYmFja0RhdGEucHVzaChlbmNyeXB0ZWQuc2xpY2UoaSwgaSArIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0ge1xuXG4gICAgICAgIH1cbiAgICAgICAgb2JqLmRhdGEgPSBiYWNrRGF0YVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZGVjcnlwdERhdGEoZW5jcnlwdGVkRGF0YSkge1xuICAgICAgICBsZXQgcGFyc2VEYXRhID0gXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQjuaVsOaNrjonLCBlbmNyeXB0ZWREYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jcnlwdGVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY3J5cHQgPSBuZXcgSlNFbmNyeXB0KCk7XG4gICAgICAgICAgICBkZWNyeXB0LnNldFByaXZhdGVLZXkoJy0tLS0tQkVHSU4gUlNBIFB1YmxpYyBLZXktLS0tLScgKyBQdWJrZXkgKyAnLS0tLS1FTkQgUlNBIFB1YmxpYyBLZXktLS0tLScpXG4gICAgICAgICAgICBsZXQgdW5jcnlwdGVkID0gZGVjcnlwdC5kZWNyeXB0KGVuY3J5cHRlZERhdGFbaV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQji0tLS3mlbDmja46JywgdW5jcnlwdGVkKTtcbiAgICAgICAgICAgIHBhcnNlRGF0YSArPSB1bmNyeXB0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQjuaVsOaNrjolbycsIHBhcnNlRGF0YSk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHBhcnNlRGF0YSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdXJsIOivt+axguaOpeWPo+eahHVybC0tLS1waXQudjEuUGl0U3ZjL1VzZXJJbmZvXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIOivt+axguaOpeWPo+eahOexu+WeiyDlj6rog73mmK9HRVQtLVBPU1RcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEg6K+35rGC5o6l5Y+j5omA6ZyA6KaB55qE5pWw5o2uXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0VVJMID0gXCJodHRwczovL2FwaS5qaWFua2FuZ3podWFuLmNvbS9hcGkueHhyaWNoL1wiICsgdXJsO1xuICAgICAgICAgICAgLy90ZXN0IHRvZG9cbiAgICAgICAgICAgIC8vIGxldCByZXF1ZXN0VVJMID0gXCJodHRwOi8vMTkyLjE2OC4xMTAuMTk1Ojg4ODgvYXBpLnh4cmljaC9cIiArIHVybDtcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHJlcXVlc3RVUkwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kZWluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB3eFRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgICBpZiAod3hUb2tlbikge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCB3eFRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOe7n+S4gOWkhOeQhlxuICAgICAgICAgICAgICAgICAgICBsZXQgX3Jlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvY29zLS0tLS1cIiArIHVybCArIFwiLS0tLS0tXCIsIHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaOpeWPo+aYr+WQpuaYr+WKoOWvhuaOpeWPo1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcmVzcG9uc2UuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kej5a+GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tXCIrdXJsK1wiLS0tLS1cIitkYXRhLmFjdGlvbitcIi0tLS1cIit4aHIucmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjYy5Ub29scy5kZWNyeXB0RGF0YShfcmVzcG9uc2UuZGF0YS5kYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF9yZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcmVzcG9uc2UuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3Jlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoX3Jlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShjYy5Ub29scy5lbmNyeXB0RGF0YShkYXRhKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmjInpkq7lkbzlkLjliqjnlLtcbiAgICAgKiBAcGFyYW0gYnRuOmNjLk5vZGVcbiAgICAgKi9cbiAgICBicmVhdGhlQW5pbShidG4pIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuNSwgMC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKVxuICAgICAgICBjYy50d2VlbihidG4pXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhY3Rpb24pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5peL6L2s5Yqo55S7XG4gICAgICogQHBhcmFtIGJ0bjpjYy5Ob2RlXG4gICAgICovXG4gICAgcm90YXRlQW5pbShidG4pIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGJ0bi5hbmdsZSA9IDA7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5yb3RhdGVCeSgyLCAzNjApLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBidG4uYW5nbGUgPSAwO1xuICAgICAgICB9KSlcbiAgICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWBnOatouiKgueCueWKqOeUu1xuICAgICAqL1xuICAgIHN0b3BBbmltKGJ0bikge1xuICAgICAgICBidG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB75Yqo55S76IqC54K5fSBidG4gXG4gICAgICovXG4gICAgcG9wQW5pbShidG4sIHkpIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBwb3MgPSBidG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgIC8v6ZqP5py65LiA5Liq5Lik5L2N5pWw5bCP5pWwXG4gICAgICAgIGxldCByZG0gPSBjYy5Ub29scy5jcmVhdGVSYW5kb20oMCwgeSk7XG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MubW92ZVRvKDEsIHBvcy54LCBwb3MueSArIHJkbSArIDUpO1xuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLm1vdmVUbygxLCBwb3MueCwgcG9zLnkpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLm1vdmVUbygxLCBwb3MueCwgcG9zLnkgLSByZG0gLSA1KTtcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5tb3ZlVG8oMSwgcG9zLngsIHBvcy55KTtcbiAgICAgICAgbGV0IGFjID0gW107XG4gICAgICAgIGFjLnB1c2goYWN0aW9uMSwgYWN0aW9uMiwgYWN0aW9uMywgYWN0aW9uNCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShhYylcbiAgICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAgICAgLmRlbGF5KE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhY3Rpb24pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oyJ6ZKu572u54GwXG4gICAgICovXG4gICAgc2V0QnV0dG9uR2FyeShidG4pIHtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGJ0bkNvbSkge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJ0bi50YXJnZXRPZmYoXCJ0b3VjaGVuZFwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Zyo5LiA5Liq6IyD5Zu05YaF6ZqP5py6XG4gICAgICovXG4gICAgY3JlYXRlUmFuZG9tKG4sIG0pIHtcbiAgICAgICAgKyttO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaIkOaXtumXtFxuICAgICovXG4gICAgY2hhbmdlVGltZShjb3VudCkge1xuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IoY291bnQgLyAzNjAwKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IE1hdGguZmxvb3IoKGNvdW50IC0gMzYwMCAqIGhvdXIpIC8gNjApO1xuICAgICAgICBsZXQgc2Vjb25kID0gY291bnQgLSBob3VyICogMzYwMCAtIDYwICogbWludXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtob3VyfeaXtiske21pbnV0ZX3liIYrJHtzZWNvbmR956eSYCk7XG4gICAgICAgIHJldHVybiAoaG91ciA+IDAgPyBob3VyICsgXCLml7ZcIiA6IFwiXCIpICsgKG1pbnV0ZSA+IDAgPyBtaW51dGUgKyBcIuWIhlwiIDogXCJcIikgKyAoc2Vjb25kID4gMCA/IHNlY29uZCArIFwi56eSXCIgOiBcIlwiKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaIkOWkqeaVsFxuICAgICovXG4gICAgY2hhbmdlU2Vjb25kVGltZShjb3VudCkge1xuICAgICAgICBsZXQgZGF5ID0gTWF0aC5mbG9vcihjb3VudCAvICgzNjAwICogMjQpKVxuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IoKGNvdW50IC0gZGF5ICogKDM2MDAgKiAyNCkpIC8gMzYwMCk7XG4gICAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKChjb3VudCAtIDM2MDAgKiBob3VyIC0gZGF5ICogKDM2MDAgKiAyNCkpIC8gNjApO1xuICAgICAgICAvLyBsZXQgc2Vjb25kID0gY291bnQgLSBob3VyICogMzYwMCAtIDYwICogbWludXRlO1xuICAgICAgICByZXR1cm4gKGRheSA+IDAgPyBkYXkgKyBcIuWkqVwiIDogXCJcIikgKyAoaG91ciA+IDAgPyBob3VyICsgXCLml7ZcIiA6IFwiXCIpICsgKG1pbnV0ZSA+IDAgPyBtaW51dGUgKyBcIuWIhlwiIDogXCJcIik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlsIbml7bpl7TmiLPovazljJZcbiAgICAqL1xuICAgIC8v5bCG5pWw57uE5Lit55qE5LiA5Liq5pWw5YC85Yig6ZmkXG4gICAgcmVtb3ZlKGFyciwgdmFsKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKHZhbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcbiAgICBjaGFuZ2VUaW1lVG9sb2ModGltZSkge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA+IDkgPyBkYXRlLmdldE1vbnRoKCkgKyAxIDogXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IFwiMFwiICsgZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBsZXQgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkgPiA5ID8gZGF0ZS5nZXRTZWNvbmRzKCkgOiBcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICByZXR1cm4geWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRheSArIFwiIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kO1xuICAgIH1cbn1cbmNjLlRvb2xzLnVzZXJJbmZvID0ge307Ly/nlKjmiLfkv6Hmga9cbmNjLlRvb2xzLmFkID0ge307Ly/lub/lkYpcbmNjLlRvb2xzLnRyZWFzdXJlID0ge307Ly/lrp3nrrFcbmNjLlRvb2xzLndhbGxldCA9IHt9Oy8v6ZKxXG5jYy5Ub29scy5hZC5hZFRpbWVzID0gMDtcbmNjLlRvb2xzLmFkLmFkRGl2ID0gMTA7Il19