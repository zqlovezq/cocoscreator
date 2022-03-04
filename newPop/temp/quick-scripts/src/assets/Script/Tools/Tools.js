"use strict";
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