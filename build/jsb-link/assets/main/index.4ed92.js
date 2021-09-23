window.__require = function e(t, n, r) {
  function s(o, u) {
    if (!n[o]) {
      if (!t[o]) {
        var b = o.split("/");
        b = b[b.length - 1];
        if (!t[b]) {
          var a = "function" == typeof __require && __require;
          if (!u && a) return a(b, !0);
          if (i) return i(b, !0);
          throw new Error("Cannot find module '" + o + "'");
        }
        o = b;
      }
      var f = n[o] = {
        exports: {}
      };
      t[o][0].call(f.exports, function(e) {
        var n = t[o][1][e];
        return s(n || e);
      }, f, f.exports, e, t, n, r);
    }
    return n[o].exports;
  }
  var i = "function" == typeof __require && __require;
  for (var o = 0; o < r.length; o++) s(r[o]);
  return s;
}({
  Config: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b4a04rebRMUI4NhPKaXcvz", "Config");
    "use strict";
    exports.__esModule = true;
    exports["default"] = void 0;
    var _default = {
      Drill: {
        score: 600,
        speed: 10
      },
      DrillMouse: {
        score: 700,
        speed: 10
      },
      Tnt: {
        score: 10,
        speed: 7
      },
      Mouse: {
        score: 50,
        speed: 10
      },
      Red: {
        score: 0,
        speed: 10
      },
      Mystery: {
        score: 0,
        speed: 10
      },
      "Gold-0": {
        score: 50,
        speed: 10
      },
      "Gold-1": {
        score: 100,
        speed: 8
      },
      "Gold-2": {
        score: 150,
        speed: 7
      },
      "Gold-3": {
        score: 200,
        speed: 5
      },
      "Gold-4": {
        score: 300,
        speed: 4
      },
      "Gold-5": {
        score: 400,
        speed: 3
      },
      "Gold-6": {
        score: 500,
        speed: 2
      },
      "Stone-0": {
        score: 10,
        speed: 7
      },
      "Stone-1": {
        score: 30,
        speed: 7
      },
      "Stone-2": {
        score: 60,
        speed: 3
      }
    };
    exports["default"] = _default;
    module.exports = exports["default"];
    cc._RF.pop();
  }, {} ],
  Hook: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "5d771RnIftD4KOCJTnyU0cq", "Hook");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.init();
      },
      init: function init() {
        this.Canvas = cc.find("Canvas");
        this.Main = this.Canvas.getComponent("Main");
        this.Prefab = this.Main.Prefab;
        this.Item = cc.find("Canvas/Header/Miner/Hook/item");
        this.onCollisionEnter = this.onCollisionEnterA;
      },
      onCollisionEnterA: function onCollisionEnterA(other, self) {
        if (2 == this.Main.HookState) return;
        this.other = other;
        this.isWall = this.Wall(other);
        this.isTnt = this.Tnt(other);
        this.isMouse = this.Mouse(other);
        if (this.isWall) {
          this.Main.PullBackHook();
          return;
        }
        if (this.isTnt) {
          this.Main.destroyTnt(other.node);
          other.node.getChildByName("icon").active = false;
          var boom = other.node.boom;
          boom.active = true;
          boom.getComponent(cc.Animation).play("boom");
          cc.zm.showShake && cc.sys.isNative && jsb.Device.vibrate(.3);
        }
        this.isMouse && other.node.stopAllActions();
        this.Main.SetSpeed(other);
        cc.zm.showMusic && cc.audioEngine.play(this.Main.CollisionAudio);
        this.other.node.y = -(this.Main.Hook.height + 2);
        this.other.node.x = -this.Main.Hook.width / 2;
        other.node.parent = this.Item;
        other.node.anchorY = 1;
        this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1];
        this.Main.PullBackHook();
      },
      MoveItemToHook: function MoveItemToHook() {
        if (this.isWall) return;
        this.other.node.y = -(this.Main.Hook.height + 2);
        this.other.node.x = -this.Main.Hook.width / 2;
      },
      Wall: function Wall(other) {
        return "Wall" == other.node.group;
      },
      Tnt: function Tnt(other) {
        return "Tnt" == other.node.group;
      },
      Mouse: function Mouse(other) {
        return "Mouse" == other.node.group;
      },
      update: function update(dt) {
        this.other && this.other.node && 2 == this.Main.HookState && this.MoveItemToHook();
      }
    });
    cc._RF.pop();
  }, {} ],
  Http: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "cd96dt+tdBJybW9vwwJ42yn", "Http");
    "use strict";
    cc.Class({
      extends: cc.Component,
      properties: {},
      statics: {
        base_url: "https://pit.api.jiankangzhuan.com/",
        sendRequest: function sendRequest(url, type, data) {
          return new Promise(function(resolve, reject) {
            var xhr = new XMLHttpRequest();
            var requestURL = "https://pit.api.jiankangzhuan.com/" + url;
            xhr.open(type, requestURL, true);
            if (cc.sys.isNative) {
              cc.log("isNative");
              xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
            }
            cc.wxToken && xhr.setRequestHeader("Authorization", cc.wxToken);
            xhr.setRequestHeader("Content-Type", "application/json");
            cc.log("requestURL=", requestURL);
            cc.log("data=", JSON.stringify(data));
            xhr.onreadystatechange = function() {
              if (4 === xhr.readyState && 200 == xhr.status) {
                cc.log("http res:" + xhr.response);
                var _response = JSON.parse(xhr.response);
                if (0 === _response.code) resolve(_response); else {
                  console.log(_response.message);
                  reject(_response.message);
                }
              }
            };
            xhr.onerror = function() {
              reject(new Error(xhr.statusText));
            };
            xhr.send(JSON.stringify(data));
          });
        }
      },
      onLoad: function onLoad() {}
    });
    cc._RF.pop();
  }, {} ],
  IndexMain: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "ec6barLP8hJ4Lk8WUBUuH5V", "IndexMain");
    "use strict";
    var http = require("Http");
    var AWARD = cc.Enum({
      DAY_1: 0,
      DAY_2: 1,
      DAY_3: 2,
      DAY_4: 3,
      DAY_5: 4,
      DAY_6: 5,
      DAY_7: 6,
      RED_5: 7,
      RED_10: 8,
      BOOM: 9,
      LOCK: 10,
      SHOUCE: 11,
      POWER: 12
    });
    cc.Class({
      extends: cc.Component,
      properties: {
        BGM: {
          default: null,
          type: cc.AudioClip
        },
        SevenFrames: {
          type: cc.SpriteFrame,
          default: []
        },
        AwardFrames: {
          type: cc.SpriteFrame,
          default: []
        },
        TextFrames: {
          type: cc.SpriteFrame,
          default: []
        }
      },
      onLoad: function onLoad() {
        cc.zm = {};
        this.screenAdapter();
        var firstLayer = cc.find("Canvas/First");
        firstLayer.active = false;
        var _first = cc.sys.localStorage.getItem("first");
        if (!_first) {
          cc.sys.localStorage.setItem("first", true);
          this.scheduleOnce(function() {
            firstLayer.scale = 0;
            firstLayer.active = true;
            cc.tween(firstLayer).to(.5, {
              scale: 1
            }).start();
          }, 1);
        }
        this.SetLayer = cc.find("Canvas/SetLayer");
        this.SignLayer = cc.find("Canvas/SignLayer");
        this.TurntableLayer = cc.find("Canvas/TurntableLayer");
        this.GetMonetyLayer = cc.find("Canvas/GetMoneyLayer");
        this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer");
        this.RedPoolLayer = cc.find("Canvas/RedPoolLayer");
        this.GetGoodLayer = cc.find("Canvas/GetGood");
        this.SeeVideolayer = cc.find("Canvas/SeeVideolayer");
        this.ResumeLayer = cc.find("Canvas/ResumeLayer");
        cc.zm.showMusic = true;
        cc.zm.showShake = true;
        this.countDownTime = 0;
        this.BGM_ID = cc.audioEngine.play(this.BGM);
        cc.director.preloadScene("Game");
        var guide = cc.find("Canvas/Guide");
        guide.active = false;
        guide.getChildByName("guide_0").active = false;
        guide.getChildByName("guide_4").active = false;
        if ("over" !== cc.sys.localStorage.getItem("guide")) {
          if (!cc.sys.localStorage.getItem("guide")) {
            this.guide = true;
            guide.active = true;
            guide.getChildByName("guide_0").active = true;
          }
          if ("4" === cc.sys.localStorage.getItem("guide")) {
            this.guide = false;
            guide.active = true;
            guide.getChildByName("guide_4").active = true;
          }
        }
        this.getUserInfo();
      },
      createSignData: function createSignData(data) {
        var sortList = [];
        for (var key in data) if (data.hasOwnProperty(key) && "sign" != key) {
          var value = data[key];
          var item = {};
          item.key = key;
          item.value = value;
          sortList.push(key);
        }
        sortList.sort();
        var strToJiaMi = "";
        sortList.forEach(function(key) {
          strToJiaMi += "&" + key + "=" + data[key];
        }, this);
        strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;
        var hex_md5 = require("MD5");
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
        return data;
      },
      getUserEcpm: function getUserEcpm() {
        var sendData = {
          ecpm: 1,
          ts: new Date().getTime()
        };
        var data = this.createSignData(sendData);
        http.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function(res) {
          console.log("\u5237\u65b0\u7528\u6237\u7684Ecpm", res.data);
          cc.zm.ad = res.data.ad;
        });
      },
      getUserInfo: function getUserInfo() {
        var _this = this;
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function(res) {
          _this.userInfo = res.data;
          cc.zm.userInfo = _this.userInfo;
          _this.showIndexLayer();
          _this.getUserEcpm();
          _this.PowerTime();
        });
      },
      PowerTime: function PowerTime() {
        var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
        if (cc.zm.userInfo.power < 5) this.schedule(this.PowerTimeSchedule, 1); else {
          time.string = "00:00";
          this.unschedule(this.PowerTimeSchedule);
        }
      },
      PowerTimeSchedule: function PowerTimeSchedule() {
        if (cc.zm.userInfo.power_sec <= 0) {
          this.unschedule(this.PowerTimeSchedule);
          this.getUserInfo();
        } else {
          var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
          time.string = this.changeSecond(cc.zm.userInfo.power_sec);
          cc.zm.userInfo.power_sec--;
        }
      },
      changeSecond: function changeSecond(s) {
        var minute = "0" + Math.floor(s / 60);
        var second = s % 60 >= 10 ? s % 60 : "0" + s % 60;
        return minute + ":" + second;
      },
      guideOver: function guideOver() {
        cc.find("Canvas/Guide").active = false;
        cc.sys.localStorage.setItem("guide", "over");
      },
      screenAdapter: function screenAdapter() {
        var canvas = cc.find("Canvas").getComponent(cc.Canvas);
        var winSize = cc.view.getVisibleSize();
        if (winSize.height / winSize.width <= .5625) {
          canvas.fitHeight = true;
          canvas.fitWidth = false;
        } else {
          canvas.fitHeight = false;
          canvas.fitWidth = true;
        }
      },
      StartGame: function StartGame() {
        var _this2 = this;
        cc.audioEngine.stop(this.BGM_ID);
        this.guide && cc.sys.localStorage.setItem("guide", 1);
        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(res) {
          cc.zm.LevelInfo = res.data;
          console.log("\u5173\u5361\u4fe1\u606f=", cc.zm.LevelInfo);
          cc.zm.userInfo.power <= 0 ? _this2.showSeeVideolayer() : cc.director.loadScene("Game");
        });
      },
      showSeeVideolayer: function showSeeVideolayer() {
        this.SeeVideolayer.active = true;
      },
      seeVideoAward: function seeVideoAward() {
        var _this3 = this;
        var sendData = {
          ad: cc.zm.ad
        };
        http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function(res) {
          _this3.SeeVideolayer.active = false;
          _this3.getUserInfo();
        });
      },
      showSignLayer: function showSignLayer() {
        var _this4 = this;
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function(res) {
          var day = 0;
          var items = res.data.items;
          for (var i = 0; i < items.length; i++) {
            var _data = items[i];
            if (_data.status) {
              day = _data.day;
              break;
            }
          }
          _this4.signDay = day > 0 ? day : 1;
          _this4.SignLayer.active = true;
          for (var _i = 1; _i <= 7; _i++) {
            var dayNode = _this4.SignLayer.getChildByName("day_" + _i);
            _i <= day ? _this4.completeBtn(dayNode) : _i === day + 1 ? _this4.selectBtn(dayNode) : _this4.unSelectBtn(dayNode);
          }
        });
      },
      showSetLayer: function showSetLayer() {
        this.SetLayer.active = true;
        var nickName = this.SetLayer.getChildByName("nikename").getComponent(cc.Label);
        nickName.string = this.userInfo.nick_name;
        var userId = this.SetLayer.getChildByName("userid").getComponent(cc.Label);
        userId.string = "\u7528\u6237ID\uff1a" + this.userInfo.user_id;
        var icon = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
        var remoteUrl = this.userInfo.avatar_url;
        cc.assetManager.loadRemote(remoteUrl, {
          ext: ".png"
        }, function(err, texture) {
          icon.spriteFrame = new cc.SpriteFrame(texture);
        });
      },
      showIndexLayer: function showIndexLayer() {
        cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
        cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power;
        cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
        cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score;
      },
      showTurntableLayer: function showTurntableLayer() {
        var _this5 = this;
        this.point = this.TurntableLayer.getChildByName("Pointer");
        this.point.angle = 360;
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function(res) {
          cc.zm.userInfo = res.data;
          _this5.TurntableLayer.active = true;
          var btnCom = _this5.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);
          if (cc.zm.userInfo.sec < 0) {
            btnCom.enableAutoGrayEffect = true;
            btnCom.interactable = false;
            _this5.countDownTime = Math.abs(cc.zm.userInfo.sec);
            _this5.schedule(_this5.TurnTableCountDown, 1);
          } else btnCom.interactable = true;
        });
      },
      TurnTableCountDown: function TurnTableCountDown() {
        if (this.countDownTime) if (this.countDownTime < 0) this.unschedule(this.TurnTableCountDown); else {
          var time = this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label);
          this.countDownTime--;
          time.string = this.changeSecond(this.countDownTime);
        }
      },
      showRedPoolLayer: function showRedPoolLayer() {
        var _this6 = this;
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then(function(res) {
          _this6.RedPoolLayer.active = true;
          var poolInfo = res.data;
          var arr = [ "kai", "xin", "kuang", "gong" ];
          for (var i = 0; i < 4; i++) {
            var value = poolInfo[arr[i]];
            var com = _this6.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);
            com.string = "x" + value;
          }
          var award_lbl = _this6.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);
          award_lbl.string = poolInfo.amount;
          var hour = _this6.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label);
          hour.string = poolInfo.hour;
          var minute = _this6.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label);
          minute.string = poolInfo.minute < 10 ? "0" + poolInfo.minute : poolInfo.minute;
        });
      },
      showSevenWorkLayer: function showSevenWorkLayer() {
        var _this7 = this;
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function(res) {
          var items = res.data.items;
          var signNumber = 0;
          var arr = [];
          for (var i = 0; i < items.length; i++) {
            var _status = items[i].status;
            if (!_status) {
              signNumber = items[i].num;
              break;
            }
          }
          for (var _i2 = 0; _i2 < items.length; _i2++) signNumber === items[_i2].num && arr.push(items[_i2]);
          var title = _this7.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);
          title.spriteFrame = _this7.SevenFrames[arr[0].num - 1];
          var layout = _this7.SevenWorkLayer.getChildByName("layout");
          for (var j = 0; j < arr.length; j++) {
            var _data = arr[j];
            var _layoutH = layout.getChildByName("layout_" + (j + 1));
            _layoutH.active = true;
            var btn = _layoutH.getChildByName("getMoneyBtn");
            btn._id = _data.id;
            var btnCom = btn.getComponent(cc.Button);
            if (1 === _data.status) {
              btnCom.enableAutoGrayEffect = true;
              btnCom.interactable = false;
            } else {
              btnCom.interactable = true;
              var isComplete = false;
              _data.curr_pass_stage >= _data.need_pass_stage && _data.curr_sign_in >= _data.need_sign_in && _data.curr_invite >= _data.need_invite && (isComplete = true);
              btn.complete = !!isComplete;
            }
            var red = _layoutH.getChildByName("lbl1").getComponent(cc.Label);
            red.string = _data.value;
            var videoText = _layoutH.getChildByName("lbl2").getComponent(cc.Label);
            videoText.string = "\u89c2\u770b" + _data.need_ad + "\u4e2a\u89c6\u9891";
            var bar = _layoutH.getChildByName("progressBar").getComponent(cc.ProgressBar);
            bar.progress = _data.curr_ad / _data.need_ad;
            var barLbl = _layoutH.getChildByName("barLbl").getComponent(cc.Label);
            barLbl.string = _data.curr_ad + "/" + _data.need_ad;
            var itemLayout = _layoutH.getChildByName("layout");
            if (_data.need_pass_stage) {
              var item0 = itemLayout.getChildByName("item_0");
              item0.active = true;
              item0.getChildByName("lbl").getComponent(cc.Label).string = "\u901a\u8fc7\u7b2c" + _data.need_pass_stage + "\u5173";
              var arrow = item0.getChildByName("icon").getChildByName("arrow");
              arrow.active = _data.curr_pass_stage >= _data.need_pass_stage;
            }
            if (_data.need_sign_in) {
              var item1 = itemLayout.getChildByName("item_1");
              item1.active = true;
              item1.getChildByName("lbl").getComponent(cc.Label).string = "\u9886\u53d6\u7b7e\u5230\u5956\u52b1";
              var _arrow = item1.getChildByName("icon").getChildByName("arrow");
              _arrow.active = _data.curr_sign_in >= _data.need_sign_in;
            }
            if (_data.need_invite) {
              var _item = itemLayout.getChildByName("item_2");
              _item.active = true;
              _item.getChildByName("lbl").getComponent(cc.Label).string = "\u9080\u8bf7" + _data.need_invite + "\u4e2a\u597d\u53cb";
              var _arrow2 = _item.getChildByName("icon").getChildByName("arrow");
              _arrow2.active = _data.curr_invite >= _data.need_invite;
            }
          }
          _this7.SevenWorkLayer.active = true;
        });
      },
      showResumeLayer: function showResumeLayer() {
        this.ResumeLayer.active = true;
      },
      resumeLevel: function resumeLevel() {
        var _this8 = this;
        http.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function(res) {
          _this8.ResumeLayer.active = false;
          _this8.getUserInfo();
        });
      },
      sevenWorkGetMoney: function sevenWorkGetMoney(e) {
        var _this9 = this;
        var target = e.target;
        target.complete ? http.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
          id: target._id
        }).then(function(res) {
          _this9.SevenWorkLayer.getChildByName("getLayer").active = true;
        }) : this.showTips("\u6761\u4ef6\u672a\u8fbe\u6210");
      },
      showGetMoneyLayer: function showGetMoneyLayer() {
        var _this10 = this;
        http.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function(res) {
          var data = res.data;
          var gc = data.gc || 0;
          _this10.getMoneyStage = 0;
          var arr = [ .3, .5, 1, 2, 5, 10, 20 ];
          for (var i = 0; i < data.items.Length; i++) if (data.items[i].times) {
            _this10.getMoneyStage = arr[i];
            break;
          }
          _this10.GetMonetyLayer.active = true;
          _this10.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = gc;
          _this10.extractMoney = gc / 1e4;
          _this10.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = _this10.extractMoney + "\u5143";
          _this10.choiceBtn = null;
          var btn = _this10.GetMonetyLayer.getChildByName("getMoneyBtn");
          var btnCom = btn.getComponent(cc.Button);
          btnCom.enableAutoGrayEffect = true;
          btnCom.interactable = false;
        });
      },
      choiceGetMoneyBtn: function choiceGetMoneyBtn(e, msg) {
        var target = e.target;
        if (null === this.choiceBtn) {
          this.choiceBtn = target;
          this.choiceBtn.money = Number(msg);
          this.selectBtn(target);
        } else {
          this.unSelectBtn(this.choiceBtn);
          this.choiceBtn = target;
          this.choiceBtn.money = Number(msg);
          this.selectBtn(target);
        }
        var btn = this.GetMonetyLayer.getChildByName("getMoneyBtn");
        var btnCom = btn.getComponent(cc.Button);
        btnCom.interactable = true;
      },
      clickGetMoneyBtn1: function clickGetMoneyBtn1(e) {
        var target = e.target;
        if (null === this.choiceBtn) return;
        if (this.extractMoney < this.choiceBtn.money) {
          this.showTips("\u5143\u5b9d\u6570\u91cf\u4e0d\u8db3");
          return;
        }
        if (this.choiceBtn.money > this.getMoneyStage) {
          this.showTips("\u8bf7\u5148\u5b8c\u6210\u4e0a\u4e00\u4e2a\u6863\u4f4d\u63d0\u73b0");
          return;
        }
        http.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function(res) {
          var layer = target.parent.getChildByName("getLayer");
          layer.active = true;
        });
      },
      showTips: function showTips(msg) {
        var tips = cc.find("Canvas/Tips");
        tips.stopAllActions();
        tips.y = 145;
        var lbl = tips.getComponent(cc.Label);
        lbl.string = msg;
        cc.tween(tips).to(.1, {
          opacity: 255
        }).to(1, {
          y: 300
        }).delay(.5).to(.1, {
          opacity: 0
        }).start();
      },
      stopBGM: function stopBGM(event) {
        if (cc.zm.showMusic) {
          cc.zm.showMusic = false;
          this.unSelectBtn(event.target);
          cc.audioEngine.pause(this.BGM_ID);
        } else {
          cc.zm.showMusic = true;
          this.selectBtn(event.target);
          cc.audioEngine.resume(this.BGM_ID);
        }
      },
      shakePhone: function shakePhone(event) {
        if (cc.zm.showShake) {
          cc.zm.showShake = false;
          this.unSelectBtn(event.target);
        } else {
          cc.zm.showShake = true;
          this.selectBtn(event.target);
        }
      },
      selectBtn: function selectBtn(btn) {
        btn.getChildByName("select").active = true;
      },
      unSelectBtn: function unSelectBtn(btn) {
        btn.getChildByName("select").active = false;
      },
      completeBtn: function completeBtn(btn) {
        btn.getChildByName("select").active = false;
        btn.getChildByName("complete").active = true;
      },
      showUserXieYi: function showUserXieYi() {},
      showUserYinSi: function showUserYinSi() {},
      ExitBackBtn: function ExitBackBtn(e) {
        e.target.parent.active = false;
        if (this.choiceBtn) {
          this.unSelectBtn(this.choiceBtn);
          this.choiceBtn = null;
        }
        true === this.TurntableLayer.active && this.showTurntableLayer();
        this.getUserInfo();
      },
      clickSignBtn: function clickSignBtn(e) {
        var _this11 = this;
        var sendData = {
          ad: cc.zm.ad
        };
        http.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then(function(res) {
          var signDay = _this11.SignLayer.getChildByName("day_" + _this11.signDay);
          _this11.completeBtn(signDay);
          var arr = [ "\u4e09\u5143\u7ea2\u5305", "\u70b8\u836fx1", "\u836f\u6c34x1", "500\u5143\u5b9d", "8.88\u5143\u7ea2\u5305", "\u65f6\u949fx1", "18.88\u5143\u7ea2\u5305" ];
          var data = res.data;
          _this11.showPop(arr[_this11.signDay - 1], AWARD["DAY_" + _this11.signDay], data.gc, data.card);
        })["catch"](function(res) {
          _this11.showTips("\u4eca\u65e5\u5956\u52b1\u5df2\u9886\u53d6");
        });
      },
      clickGetMoneyBtn: function clickGetMoneyBtn(e) {},
      clickTurnTableBtn: function clickTurnTableBtn(e) {
        var _this12 = this;
        if (this.countDownTime > 0) return;
        var sendData = {
          ad: cc.zm.ad
        };
        var obj = {
          1: 60,
          10: 240,
          11: 180,
          12: 120,
          31: 360,
          32: 300
        };
        http.sendRequest("pit.v1.PitSvc/Lottery", "POST", sendData).then(function(res) {
          _this12.endAngle = obj["" + res.data.award];
          _this12.point = _this12.TurntableLayer.getChildByName("Pointer");
          _this12.beginTurn = true;
          _this12.point.angle = 360;
          _this12.speed = 18;
          _this12.value = 1;
          _this12.circle = 0;
          _this12.scheduleOnce(function() {
            var data = res.data;
            var award = {
              1: {
                name: "\u4f53\u529bx1",
                index: AWARD.POWER
              },
              10: {
                name: "\u70b8\u5f39x1",
                index: AWARD.BOOM
              },
              11: {
                name: "\u65f6\u949fx1",
                index: AWARD.LOCK
              },
              12: {
                name: "\u77f3\u5316\u624b\u518cx1",
                index: AWARD.SHOUCE
              },
              31: {
                name: "\u4e94\u5143\u7ea2\u5305",
                index: AWARD.RED_5
              },
              32: {
                name: "\u5341\u5143\u7ea2\u5305",
                index: AWARD.RED_10
              }
            };
            var _award = award[data.award];
            _this12.showPop(_award.name, _award.index, data.gc, data.card);
          }, 4.5);
        });
      },
      createRandm: function createRandm(n, m) {
        m += 1;
        var a = m - n;
        var num = Math.random() * a + n;
        return parseInt(num);
      },
      update: function update(dt) {
        if (this.beginTurn) {
          this.point.angle -= this.speed;
          if (this.point.angle <= 0) {
            this.point.angle = 360;
            this.circle++;
            if (this.circle % 2 === 0) {
              this.speed -= this.value;
              4.5 === this.value ? this.value = 4.5 : this.value += 1.5;
            }
          }
          if (this.speed <= 5 && this.point.angle <= this.endAngle) {
            this.beginTurn = false;
            this.point.angle = this.endAngle;
          }
        }
      },
      showPop: function showPop(goodName, goodNumber, gcNumber, textNumber) {
        this.GetGoodLayer.active = true;
        var layout = this.GetGoodLayer.getChildByName("layout");
        var icon = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
        var text = this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label);
        text.string = "\u83b7\u5f97" + goodName;
        icon.spriteFrame = this.AwardFrames[goodNumber];
        var layout1 = layout.getChildByName("layout_1");
        var layout2 = layout.getChildByName("layout_2");
        if (gcNumber) {
          layout1.active = true;
          var lbl = layout1.getChildByName("lbl").getComponent(cc.Label);
          lbl.string = "\u83b7\u5f97\u5143\u5b9d+" + gcNumber;
        } else layout1.active = false;
        if (textNumber) {
          layout2.active = true;
          var _icon = layout2.getChildByName("icon").getComponent(cc.Sprite);
          _icon.spriteFrame = this.TextFrames[textNumber - 1];
        } else layout2.active = false;
      },
      ExitWxLogin: function ExitWxLogin() {
        cc.wxToken = null;
        cc.wxLoginResultcode = null;
        cc.sys.localStorage.removeItem("token");
        cc.director.loadScene("Login");
      },
      adPlay: function adPlay() {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadJiLiVideo", "()V");
      }
    });
    cc._RF.pop();
  }, {
    Http: "Http",
    MD5: "MD5"
  } ],
  Level: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "19283dAXTFAOrQfB3/KaAjP", "Level");
    "use strict";
    module.exports = {
      level0: {
        id: "\u96f6",
        score: 500,
        maxScore: 1500,
        totalScore: 1500,
        extra: "red,mystery",
        redPack: 88.88
      },
      level1: {
        id: "\u4e00",
        score: 500,
        maxScore: 1500,
        totalScore: 1500,
        good: "b|150,g|1350",
        extra: "red",
        redPack: 88.88
      },
      level2: {
        id: "\u4e8c",
        score: 925,
        maxScore: 1200,
        totalScore: 2700,
        good: "b|180,g|960,m|60",
        extra: "red",
        redPack: 66.66
      },
      level3: {
        id: "\u4e09",
        score: 1560,
        maxScore: 1e3,
        totalScore: 3700,
        good: "b|200,g|800",
        redPack: 20.96
      },
      level4: {
        id: "\u56db",
        score: 2405,
        maxScore: 1500,
        totalScore: 5200,
        good: "b|225,g|1200,m|75",
        extra: "red",
        redPack: 14.36
      },
      level5: {
        id: "\u4e94",
        score: 3460,
        maxScore: 1300,
        totalScore: 6500,
        good: "b|370,g|370,d|800",
        boom: 1,
        redPack: 10.71
      },
      level6: {
        id: "\u516d",
        score: 4725,
        maxScore: 2e3,
        totalScore: 8500,
        good: "b|200,d|1200,g|600",
        redPack: 8.42
      },
      level7: {
        id: "\u4e03",
        score: 6200,
        maxScore: 1500,
        totalScore: 1e4,
        good: "b|200,g|1000,d|400",
        extra: "red,mystery",
        boom: 2,
        redPack: 6.88
      },
      level8: {
        id: "\u516b",
        score: 7500,
        maxScore: 2e3,
        totalScore: 12e3,
        good: "b|200,g|1400,m|400",
        redPack: 5.77
      },
      level9: {
        id: "\u4e5d",
        score: 9395,
        maxScore: 2e3,
        totalScore: 14e3,
        good: "b|300,g|1300,d|400",
        redPack: 4.94
      },
      level10: {
        id: "\u5341",
        score: 10500,
        maxScore: 2e3,
        totalScore: 16e3,
        good: "b|400,g|1000,d|400,m|200",
        extra: "red",
        redPack: 4.3
      },
      level11: {
        id: "\u5341\u4e00",
        score: 12e3,
        maxScore: 1500,
        totalScore: 17500,
        good: "b|300,s|50,g|750,d|400",
        extra: "red,mystery",
        boom: 1,
        redPack: 3.8
      },
      level12: {
        id: "\u5341\u4e8c",
        score: 13e3,
        maxScore: 3e3,
        totalScore: 20500,
        good: "b|450,g|1150,d|1200,m|200",
        extra: "red",
        redPack: 3.39
      },
      level13: {
        id: "\u5341\u4e09",
        score: 15700,
        maxScore: 2500,
        totalScore: 23e3,
        good: "b|375,g|1725,d|400",
        extra: "red",
        redPack: 3.05
      },
      level14: {
        id: "\u5341\u56db",
        score: 17500,
        maxScore: 2e3,
        totalScore: 25e3,
        good: "b|200,s|100,g|900,d|800",
        boom: 2,
        redPack: 2.76
      },
      level15: {
        id: "\u5341\u4e94",
        score: 18500,
        maxScore: 5e3,
        totalScore: 3e4,
        good: "b|500,s|205,g|2650,d|1600",
        extra: "red,mystery",
        redPack: 2.52
      },
      level16: {
        id: "\u5341\u516d",
        score: 21e3,
        maxScore: 3e3,
        totalScore: 33e3,
        good: "b|300,g|1900,d|800",
        redPack: 2.32
      },
      level17: {
        id: "\u5341\u4e03",
        score: 22500,
        maxScore: 3500,
        totalScore: 36500,
        good: "g|1300,b|175,zs|2100,m|100",
        redPack: 2.14
      },
      level18: {
        id: "\u5341\u516b",
        score: 24e3,
        maxScore: 1e4,
        totalScore: 46500,
        good: "g|1900,zs|2100,d|5600,m|100,s|300",
        extra: "red,mystery",
        redPack: 1.99
      },
      level19: {
        id: "\u5341\u4e5d",
        score: 3e4,
        maxScore: 4e3,
        totalScore: 50500,
        good: "b|100,g|2000,zs|1400,d|400,m|100",
        redPack: 1.85
      },
      level20: {
        id: "\u4e8c\u5341",
        score: 33e3,
        maxScore: 4e3,
        totalScore: 54500,
        good: "b|400,s|400,g|3200",
        extra: "red",
        boom: 1,
        redPack: 1.73
      },
      level21: {
        id: "\u4e8c\u5341\u4e00",
        score: 36500,
        maxScore: 4e3,
        totalScore: 58500,
        good: "g|500,zs|3500",
        boom: 1,
        redPack: 1.62
      },
      level22: {
        id: "\u4e8c\u5341\u4e8c",
        score: 39e3,
        maxScore: 4e3,
        totalScore: 62500,
        good: "d|4000",
        extra: "red",
        boom: 2,
        redPack: 1.53
      },
      level23: {
        id: "\u4e8c\u5341\u4e09",
        score: 41500,
        maxScore: 4e3,
        totalScore: 66500,
        good: "b|400,g|2200,zs|1400",
        extra: ",mystery",
        boom: 2,
        redPack: 1.44
      },
      level24: {
        id: "\u4e8c\u5341\u56db",
        score: 43500,
        maxScore: 4e3,
        totalScore: 70500,
        good: "b|400,g|2200,zs|1400",
        extra: "red",
        redPack: 1.36
      },
      level25: {
        id: "\u4e8c\u5341\u4e94",
        score: 46e3,
        maxScore: 4200,
        totalScore: 74700,
        good: "zs|4200",
        boom: 3,
        redPack: 1.29
      },
      level26: {
        id: "\u4e8c\u5341\u516d",
        score: 49500,
        maxScore: 5e3,
        totalScore: 79700,
        good: "s|800,zs|4200",
        boom: 1,
        redPack: 1.22
      },
      level27: {
        id: "\u4e8c\u5341\u4e03",
        score: 52500,
        maxScore: 5e3,
        totalScore: 84700,
        good: "b|400,zs|700,d|3600",
        boom: 1,
        extra: "red",
        redPack: 1.17
      },
      level28: {
        id: "\u4e8c\u5341\u516b",
        score: 55500,
        maxScore: 5e3,
        totalScore: 89700,
        good: "b|500,g|2950,m|150,zs|1400",
        boom: 1,
        extra: "red",
        redPack: 1.11
      },
      level29: {
        id: "\u4e8c\u5341\u4e5d",
        score: 58e3,
        maxScore: 5e3,
        totalScore: 94700,
        good: "b|500,g|2950,m|150,zs|1400",
        extra: "red",
        boom: 1,
        redPack: 1.06
      },
      level30: {
        id: "\u4e09\u5341",
        score: 62e3,
        maxScore: 5e3,
        totalScore: 99700,
        good: "b|500,g|2950,s|150,zs|1400",
        boom: 1,
        extra: "red",
        redPack: 1.01
      }
    };
    cc._RF.pop();
  }, {} ],
  MD5: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "d3587Rv7sxDF50sBHdGpncc", "MD5");
    "use strict";
    function md5(string) {
      var x = Array();
      var k, AA, BB, CC, DD, a, b, c, d;
      var S11 = 7, S12 = 12, S13 = 17, S14 = 22;
      var S21 = 5, S22 = 9, S23 = 14, S24 = 20;
      var S31 = 4, S32 = 11, S33 = 16, S34 = 23;
      var S41 = 6, S42 = 10, S43 = 15, S44 = 21;
      string = Utf8Encode(string);
      x = ConvertToWordArray(string);
      a = 1732584193;
      b = 4023233417;
      c = 2562383102;
      d = 271733878;
      for (k = 0; k < x.length; k += 16) {
        AA = a;
        BB = b;
        CC = c;
        DD = d;
        a = FF(a, b, c, d, x[k + 0], S11, 3614090360);
        d = FF(d, a, b, c, x[k + 1], S12, 3905402710);
        c = FF(c, d, a, b, x[k + 2], S13, 606105819);
        b = FF(b, c, d, a, x[k + 3], S14, 3250441966);
        a = FF(a, b, c, d, x[k + 4], S11, 4118548399);
        d = FF(d, a, b, c, x[k + 5], S12, 1200080426);
        c = FF(c, d, a, b, x[k + 6], S13, 2821735955);
        b = FF(b, c, d, a, x[k + 7], S14, 4249261313);
        a = FF(a, b, c, d, x[k + 8], S11, 1770035416);
        d = FF(d, a, b, c, x[k + 9], S12, 2336552879);
        c = FF(c, d, a, b, x[k + 10], S13, 4294925233);
        b = FF(b, c, d, a, x[k + 11], S14, 2304563134);
        a = FF(a, b, c, d, x[k + 12], S11, 1804603682);
        d = FF(d, a, b, c, x[k + 13], S12, 4254626195);
        c = FF(c, d, a, b, x[k + 14], S13, 2792965006);
        b = FF(b, c, d, a, x[k + 15], S14, 1236535329);
        a = GG(a, b, c, d, x[k + 1], S21, 4129170786);
        d = GG(d, a, b, c, x[k + 6], S22, 3225465664);
        c = GG(c, d, a, b, x[k + 11], S23, 643717713);
        b = GG(b, c, d, a, x[k + 0], S24, 3921069994);
        a = GG(a, b, c, d, x[k + 5], S21, 3593408605);
        d = GG(d, a, b, c, x[k + 10], S22, 38016083);
        c = GG(c, d, a, b, x[k + 15], S23, 3634488961);
        b = GG(b, c, d, a, x[k + 4], S24, 3889429448);
        a = GG(a, b, c, d, x[k + 9], S21, 568446438);
        d = GG(d, a, b, c, x[k + 14], S22, 3275163606);
        c = GG(c, d, a, b, x[k + 3], S23, 4107603335);
        b = GG(b, c, d, a, x[k + 8], S24, 1163531501);
        a = GG(a, b, c, d, x[k + 13], S21, 2850285829);
        d = GG(d, a, b, c, x[k + 2], S22, 4243563512);
        c = GG(c, d, a, b, x[k + 7], S23, 1735328473);
        b = GG(b, c, d, a, x[k + 12], S24, 2368359562);
        a = HH(a, b, c, d, x[k + 5], S31, 4294588738);
        d = HH(d, a, b, c, x[k + 8], S32, 2272392833);
        c = HH(c, d, a, b, x[k + 11], S33, 1839030562);
        b = HH(b, c, d, a, x[k + 14], S34, 4259657740);
        a = HH(a, b, c, d, x[k + 1], S31, 2763975236);
        d = HH(d, a, b, c, x[k + 4], S32, 1272893353);
        c = HH(c, d, a, b, x[k + 7], S33, 4139469664);
        b = HH(b, c, d, a, x[k + 10], S34, 3200236656);
        a = HH(a, b, c, d, x[k + 13], S31, 681279174);
        d = HH(d, a, b, c, x[k + 0], S32, 3936430074);
        c = HH(c, d, a, b, x[k + 3], S33, 3572445317);
        b = HH(b, c, d, a, x[k + 6], S34, 76029189);
        a = HH(a, b, c, d, x[k + 9], S31, 3654602809);
        d = HH(d, a, b, c, x[k + 12], S32, 3873151461);
        c = HH(c, d, a, b, x[k + 15], S33, 530742520);
        b = HH(b, c, d, a, x[k + 2], S34, 3299628645);
        a = II(a, b, c, d, x[k + 0], S41, 4096336452);
        d = II(d, a, b, c, x[k + 7], S42, 1126891415);
        c = II(c, d, a, b, x[k + 14], S43, 2878612391);
        b = II(b, c, d, a, x[k + 5], S44, 4237533241);
        a = II(a, b, c, d, x[k + 12], S41, 1700485571);
        d = II(d, a, b, c, x[k + 3], S42, 2399980690);
        c = II(c, d, a, b, x[k + 10], S43, 4293915773);
        b = II(b, c, d, a, x[k + 1], S44, 2240044497);
        a = II(a, b, c, d, x[k + 8], S41, 1873313359);
        d = II(d, a, b, c, x[k + 15], S42, 4264355552);
        c = II(c, d, a, b, x[k + 6], S43, 2734768916);
        b = II(b, c, d, a, x[k + 13], S44, 1309151649);
        a = II(a, b, c, d, x[k + 4], S41, 4149444226);
        d = II(d, a, b, c, x[k + 11], S42, 3174756917);
        c = II(c, d, a, b, x[k + 2], S43, 718787259);
        b = II(b, c, d, a, x[k + 9], S44, 3951481745);
        a = AddUnsigned(a, AA);
        b = AddUnsigned(b, BB);
        c = AddUnsigned(c, CC);
        d = AddUnsigned(d, DD);
      }
      var cpro_psid = "u2572954";
      var cpro_pswidth = 966;
      var cpro_psheight = 120;
      var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
      return temp.toLowerCase();
    }
    function RotateLeft(lValue, iShiftBits) {
      return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
    }
    function AddUnsigned(lX, lY) {
      var lX4, lY4, lX8, lY8, lResult;
      lX8 = 2147483648 & lX;
      lY8 = 2147483648 & lY;
      lX4 = 1073741824 & lX;
      lY4 = 1073741824 & lY;
      lResult = (1073741823 & lX) + (1073741823 & lY);
      if (lX4 & lY4) return 2147483648 ^ lResult ^ lX8 ^ lY8;
      return lX4 | lY4 ? 1073741824 & lResult ? 3221225472 ^ lResult ^ lX8 ^ lY8 : 1073741824 ^ lResult ^ lX8 ^ lY8 : lResult ^ lX8 ^ lY8;
    }
    function F(x, y, z) {
      return x & y | ~x & z;
    }
    function G(x, y, z) {
      return x & z | y & ~z;
    }
    function H(x, y, z) {
      return x ^ y ^ z;
    }
    function I(x, y, z) {
      return y ^ (x | ~z);
    }
    function FF(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }
    function GG(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }
    function HH(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }
    function II(a, b, c, d, x, s, ac) {
      a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
      return AddUnsigned(RotateLeft(a, s), b);
    }
    function ConvertToWordArray(string) {
      var lWordCount;
      var lMessageLength = string.length;
      var lNumberOfWords_temp1 = lMessageLength + 8;
      var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
      var lNumberOfWords = 16 * (lNumberOfWords_temp2 + 1);
      var lWordArray = Array(lNumberOfWords - 1);
      var lBytePosition = 0;
      var lByteCount = 0;
      while (lByteCount < lMessageLength) {
        lWordCount = (lByteCount - lByteCount % 4) / 4;
        lBytePosition = lByteCount % 4 * 8;
        lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
        lByteCount++;
      }
      lWordCount = (lByteCount - lByteCount % 4) / 4;
      lBytePosition = lByteCount % 4 * 8;
      lWordArray[lWordCount] = lWordArray[lWordCount] | 128 << lBytePosition;
      lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
      lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
      return lWordArray;
    }
    function WordToHex(lValue) {
      var WordToHexValue = "", WordToHexValue_temp = "", lByte, lCount;
      for (lCount = 0; lCount <= 3; lCount++) {
        lByte = lValue >>> 8 * lCount & 255;
        WordToHexValue_temp = "0" + lByte.toString(16);
        WordToHexValue += WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
      }
      return WordToHexValue;
    }
    function Utf8Encode(string) {
      var utftext = "";
      for (var n = 0; n < string.length; n++) {
        var c = string.charCodeAt(n);
        if (c < 128) utftext += String.fromCharCode(c); else if (c > 127 && c < 2048) {
          utftext += String.fromCharCode(c >> 6 | 192);
          utftext += String.fromCharCode(63 & c | 128);
        } else {
          utftext += String.fromCharCode(c >> 12 | 224);
          utftext += String.fromCharCode(c >> 6 & 63 | 128);
          utftext += String.fromCharCode(63 & c | 128);
        }
      }
      return utftext;
    }
    module.exports = md5;
    cc._RF.pop();
  }, {} ],
  Main: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "a0a35WjyStJPpmP4ZgIidJg", "Main");
    "use strict";
    var _Config = _interopRequireDefault(require("./Config"));
    var _Level = _interopRequireDefault(require("./Level"));
    function _interopRequireDefault(obj) {
      return obj && obj.__esModule ? obj : {
        default: obj
      };
    }
    var http = require("Http");
    cc.Class({
      extends: cc.Component,
      properties: {
        speed: {
          default: 3,
          displayName: "\u94a9\u5b50\u901f\u5ea6"
        },
        rotateSpeed: {
          default: 1,
          displayName: "\u94a9\u5b50\u65cb\u8f6c\u901f\u5ea6"
        },
        HookRange: {
          default: 70,
          displayName: "\u94a9\u5b50\u65cb\u8f6c\u89d2\u5ea6\u8303\u56f4"
        },
        Prefabs: {
          default: [],
          type: cc.Prefab
        },
        InitTime: {
          default: 10
        },
        CollisionAudio: {
          type: cc.AudioClip,
          default: null
        },
        AddScroeAudio: {
          type: cc.AudioClip,
          default: null
        },
        PropSpriteFrames: {
          type: cc.SpriteFrame,
          default: []
        },
        Boom: {
          type: cc.Prefab,
          default: null
        },
        HookFrames: {
          type: cc.SpriteFrame,
          default: []
        },
        HeroFrames: {
          type: cc.SpriteFrame,
          default: []
        },
        LotteryFramse: {
          type: cc.SpriteFrame,
          default: []
        }
      },
      onLoad: function onLoad() {
        this.init();
        cc.director.preloadScene("Index");
      },
      setGuide: function setGuide() {
        var index = this.guideIndex;
        if (index <= 3) {
          var guide = cc.find("Canvas/Guide");
          guide.getChildByName("guide_" + index).active = true;
        } else {
          this.guide = false;
          cc.find("Canvas/Guide").active = false;
        }
      },
      nextGuide: function nextGuide(e, msg) {
        var guide = cc.find("Canvas/Guide");
        var guide_1 = guide.getChildByName("guide_1");
        var guide_2 = guide.getChildByName("guide_2");
        var guide_3 = guide.getChildByName("guide_3");
        guide_1.active = false;
        guide_2.active = false;
        guide_3.active = false;
        if ("2" === msg) {
          cc.sys.localStorage.setItem("guide", 2);
          guide.getChildByName("guide_2").active = true;
        } else if ("3" === msg) {
          cc.sys.localStorage.setItem("guide", 3);
          guide.getChildByName("guide_3").active = true;
        } else if ("4" === msg) {
          this.guide = false;
          this.ResumeGameLayer();
          cc.sys.localStorage.setItem("guide", 4);
          cc.find("Canvas/Guide").active = false;
        }
      },
      hideNeedLayer: function hideNeedLayer() {
        var _this = this;
        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(res) {
          var sendDta = {
            prop: 4
          };
          http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function(res) {
            console.log("\u4f7f\u7528\u4f53\u529b\u6210\u529f");
          });
          cc.zm.LevelInfo = res.data;
          _this.NeedLayer.active = false;
          _this.handleDaoju();
          _this.adjusBoomLayout();
          _this.ResumeGameLayer();
        });
      },
      hideLotteryLayer: function hideLotteryLayer() {
        this.LotteryLayer.active = false;
      },
      showBackLayer: function showBackLayer() {
        this.BackLayer.active = true;
        this.PauseGameLayer();
      },
      init: function init() {
        var _this2 = this;
        this.Miner = cc.find("Canvas/Header/Miner");
        this.MinerAnimation = this.Miner.getComponent(cc.Animation);
        this.Hook = cc.find("Canvas/Header/Miner/Hook");
        this.HookHeight = this.Hook.height;
        this.HookState = 0;
        this.curScore = 0;
        this.pauseGame = false;
        this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0];
        this.Score = cc.find("Canvas/ScoreAndTarget/Score").getComponent(cc.Label);
        this.TargetScore = cc.find("Canvas/ScoreAndTarget/Target").getComponent(cc.Label);
        this.Time = cc.find("Canvas/CheckpointAndTime/Time").getComponent(cc.Label);
        this.Checkpoint = cc.find("Canvas/CheckpointAndTime/Checkpoint").getComponent(cc.Label);
        this.NeedLayer = cc.find("Canvas/NeedLayer");
        this.BackLayer = cc.find("Canvas/BackLayer");
        this.PropNode = cc.find("Canvas/Header/Prop");
        this.LotteryLayer = this.NeedLayer.getChildByName("LotteryLayer");
        this.itemArea = cc.find("Canvas/ItemArea");
        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        this.Prefab = {};
        this.Prefabs.forEach(function(item) {
          _this2.Prefab[item._name] = item;
        });
        var emitHook = cc.find("Canvas/emitHookBtn");
        this.Mask = cc.find("Canvas/Mask");
        this.Mask.on(cc.Node.EventType.TOUCH_END, this.CloseMask.bind(this));
        emitHook.on(cc.Node.EventType.TOUCH_END, this.emitHookBtn.bind(this));
        this.boomNumber = -1;
        this.liquidNumber = 0;
        this.adjusBoomLayout();
        this.screenAdapter();
        this.ResetInfo();
        this.StartTime();
        this.SetLevel();
        this.CreateTargetScore();
        this.CreateItem();
        this.redPack = this.levelInfo.redPack;
        this.extarRedPack = 0;
        this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));
        if (this.guideIndex < 4 && this.guideIndex >= 1) {
          this.guide = true;
          this.PauseGameLayer();
          cc.find("Canvas/Guide").active = true;
          this.setGuide();
        } else {
          this.guide = false;
          this.PauseGameLayer();
          cc.find("Canvas/Guide").active = false;
          this.NeedLayer.active = true;
          var needScore = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label);
          var needLevel = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
          needScore.string = "\u8981\u6c42\u5206\u6570\uff1a" + this.levelInfo.score;
          needLevel.string = "\u7b2c" + this.levelInfo.id + "\u5173";
          var arr = [ 10, 11, 13 ];
          var rdm = this.createRandm(0, 2);
          var prop = arr[rdm];
          this.LotteryProp = prop;
          var icon = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);
          10 === prop ? icon.spriteFrame = this.LotteryFramse[2] : 11 === prop ? icon.spriteFrame = this.LotteryFramse[0] : 13 === prop && (icon.spriteFrame = this.LotteryFramse[1]);
        }
      },
      LookVideoGetAward: function LookVideoGetAward() {
        var _this3 = this;
        var sendData = {
          ad: cc.zm.ad,
          weapon: this.LotteryProp
        };
        http.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then(function(res) {
          _this3.LotteryAward = res.data.award;
          _this3.hideLotteryLayer();
        });
      },
      handleDaoju: function handleDaoju() {
        var _this4 = this;
        var weapon = cc.zm.LevelInfo.weapon;
        var data = {
          1: "\u4f53\u529b",
          10: "\u70b8\u5f39",
          11: "\u65f6\u949f",
          12: "\u77f3\u5316\u624b\u518c",
          13: "\u836f\u6c34",
          14: "\u4e09\u53f6\u8349"
        };
        var _loop = function _loop(i) {
          if (10 === weapon[i].prop) _this4.boomNumber = weapon[i].num - 1; else if (weapon[i].num) {
            var sendDta = {
              prop: weapon[i].prop
            };
            http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function(res) {
              console.log("\u4f7f\u7528\u6210\u529f-", data[weapon[i].prop]);
            });
          }
          11 === weapon[i].prop && (_this4.clockNumber = weapon[i].num);
          12 === weapon[i].prop && (_this4.handbookNumber = weapon[i].num);
          13 === weapon[i].prop && (_this4.liquidNumber = weapon[i].num);
          14 === weapon[i].prop && (_this4.cloverNumber = weapon[i].num);
        };
        for (var i = 0; i < weapon.length; i++) _loop(i);
      },
      screenAdapter: function screenAdapter() {
        var canvas = cc.find("Canvas").getComponent(cc.Canvas);
        var winSize = cc.view.getVisibleSize();
        if (winSize.height / winSize.width <= .5625) {
          canvas.fitHeight = true;
          canvas.fitWidth = false;
        } else {
          canvas.fitHeight = false;
          canvas.fitWidth = true;
        }
      },
      HookRoTate: function HookRoTate() {
        if (this.HookState) return;
        this.Hook.angle >= 70 ? this.rotateSpeed = -this.rotateSpeed : this.Hook.angle <= -70 && (this.rotateSpeed = Math.abs(this.rotateSpeed));
        this.Hook.angle += this.rotateSpeed;
      },
      emitHookBtn: function emitHookBtn() {
        if (this.HookState) return;
        this.HookState = 1;
      },
      emitHook: function emitHook() {
        switch (this.HookState) {
         case 1:
          this.Hook.height += this.speed;
          this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[1];
          break;

         case 2:
          if (this.Hook.height <= this.HookHeight) {
            this.Hook.children[0] && this.Hook.children[0].childrenCount && this.Handle(this.Hook.children[0].children);
            this.StopHookMove();
          } else this.Hook.height -= this.speed;
        }
      },
      PullBackHook: function PullBackHook() {
        this.MinerAnimation.play("hero");
        this.HookState = 2;
      },
      SetSpeed: function SetSpeed(other) {
        var promote = 1;
        _Config["default"][other.node.name] = _Config["default"][other.node.name] || {};
        if (this.liquidNumber) {
          console.log("\u836f\u6c34\u6548\u679c\u901f\u5ea6\u589e\u52a010%");
          promote = 1.1;
        }
        this.speed = _Config["default"][other.node.name].speed * promote || 10;
      },
      ResetInfo: function ResetInfo() {
        this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
      },
      StartTime: function StartTime() {
        if (this.clockNumber) {
          console.log("\u4f7f\u7528\u65f6\u949f\u6210\u529f+10s");
          this.clockNumber = 0;
          this.InitTime += 10;
        }
        this.Time.string = this.InitTime;
        this.timer = function() {
          this.InitTime--;
          this.Time.string = this.InitTime;
          if (this.InitTime <= 0) {
            this.unschedule(this.timer);
            this.GameOver();
          }
        };
        this.schedule(this.timer, 1);
      },
      SetLevel: function SetLevel() {
        this.levelInfo = _Level["default"]["level" + cc.zm.LevelInfo.stage];
        this.Score.string = cc.zm.LevelInfo.current_score;
        this.Checkpoint.string = "" + cc.zm.LevelInfo.stage;
      },
      CreateTargetScore: function CreateTargetScore() {
        this.TargetScore.string = this.levelInfo.score;
      },
      CreateItem: function CreateItem() {
        var _this5 = this;
        var newItemArr = this.newCreateCalc();
        newItemArr.forEach(function(item) {
          var node = cc.instantiate(_this5.Prefab[item.name]);
          var XY = _this5.randomXY(node);
          node.parent = _this5.itemArea;
          item.score && (node.score = item.score);
          item.prop && (node.extra = item.prop);
          node.setPosition(XY);
          if ("Tnt" === item.name) {
            var boom = cc.instantiate(_this5.Boom);
            _this5.node.addChild(boom);
            boom.name = "tntBoom";
            boom.setPosition(cc.v2(XY.x, XY.y - 218));
            node.boom = boom;
          }
          if ("Mouse" === item.name || "DrillMouse" === item.name) {
            node.zIdex = 1;
            _this5.moveMouse(node);
          }
        });
      },
      moveMouse: function moveMouse(mouse) {
        var _moveTime = 10;
        var time = parseInt(300 - mouse.x) / 600 * _moveTime;
        cc.tween(mouse).to(time, {
          x: 300
        }).start();
        this.scheduleOnce(function() {
          if ("" !== mouse.name) {
            mouse.scaleX = -1;
            cc.tween(mouse).repeatForever(cc.tween().to(_moveTime, {
              x: -300
            }).delay(1).call(function() {
              mouse.scaleX = 1;
            }).to(_moveTime, {
              x: 300
            }).delay(1).call(function() {
              mouse.scaleX = -1;
            })).start();
          }
        }, time + 1);
      },
      newCreateCalc: function newCreateCalc() {
        var createItemArr = [];
        if (this.levelInfo.extra) {
          var extra = this.levelInfo.extra.split(",");
          if (extra[0]) {
            var _arr = [];
            var obj = {
              name: "Red",
              prop: .1
            };
            _arr.push(obj);
            createItemArr = [].concat(createItemArr, _arr);
          }
          if (extra[1]) {
            var _arr2 = [];
            var _prop = null;
            if (this.cloverNumber) {
              var arr = [ "\u70b8\u5f39", "3\u5143\u7ea2\u5305", "5\u5143\u7ea2\u5305", "\u836f\u6c34", "\u836f\u6c34" ];
              var rmd = this.createRandm(0, 4);
              _prop = arr[rmd];
            } else {
              var _arr3 = [ "\u70b8\u5f39", "3\u5143\u7ea2\u5305", "5\u5143\u7ea2\u5305", "\u836f\u6c34" ];
              var _rmd = this.createRandm(0, 3);
              _prop = _arr3[_rmd];
            }
            var _obj = {
              name: "Mystery",
              prop: _prop
            };
            _arr2.push(_obj);
            createItemArr = [].concat(createItemArr, _arr2);
          }
        }
        if (this.levelInfo.boom) for (var i = 0; i < this.levelInfo.boom; i++) {
          var _arr4 = [];
          var _obj2 = {
            name: "Tnt"
          };
          _arr4.push(_obj2);
          createItemArr = [].concat(createItemArr, _arr4);
        }
        if (!this.levelInfo.good) return createItemArr;
        var info = this.levelInfo.good.split(",");
        var scoreArr = [];
        for (var _i = 0; _i < info.length; _i++) {
          var _info = info[_i].split("|");
          var type = _info[0];
          var percent = Number(_info[1]);
          var _newArr = this.createByType(type, percent);
          scoreArr = [].concat(scoreArr, _newArr);
        }
        var _scoreArr = scoreArr.sort(function(a, b) {
          if (a.score > b.score) return -1;
          if (a.score < b.score) return 1;
          return 0;
        });
        var newArr = [];
        var totalScore = this.levelInfo.maxScore;
        var _score = 0;
        for (var _i2 = 0; _i2 < _scoreArr.length; _i2++) {
          _score += _scoreArr[_i2].score;
          if (!(_score <= totalScore)) break;
          newArr.push(_scoreArr[_i2]);
        }
        createItemArr = [].concat(createItemArr, newArr);
        return createItemArr;
      },
      createByType: function createByType(type, score) {
        var arr = [];
        var _score = 0;
        switch (type) {
         case "b":
          var promote = 1;
          if (this.handbookNumber) {
            console.log("\u77f3\u5316\u624b\u518c\u4f7f\u7528\u6210\u529f\u77f3\u5934\u7684\u4ef7\u503c\u63d0\u534720%");
            promote = 1.2;
          }
          for (var i = 0; i < 30; i++) {
            var name = "Stone-";
            var scoreCig = [ 20, 30, 40 ];
            var rdm = this.createRandm(0, 2);
            _score += scoreCig[rdm];
            if (_score > score) break;
            var obj = {
              name: name + rdm,
              score: scoreCig[rdm] * promote
            };
            arr.push(obj);
          }
          break;

         case "g":
          for (var _i3 = 0; _i3 < 30; _i3++) {
            var _name = "Gold-";
            var _scoreCig = [];
            var __score = score - _score;
            if (__score >= 300) _scoreCig = [ 50, 100, 150, 200, 300 ]; else {
              var _key = Math.floor(__score / 50);
              var key = _key > 4 ? 4 : _key;
              for (var k = 0; k < key; k++) _scoreCig.push(50 * (1 + k));
            }
            var _rdm = this.createRandm(0, _scoreCig.length - 1);
            _score += _scoreCig[_rdm];
            if (_score > score) break;
            if (0 === _scoreCig.length) break;
            var _obj3 = {
              name: _name + _rdm,
              score: _scoreCig[_rdm]
            };
            arr.push(_obj3);
          }
          break;

         case "d":
          for (var _i4 = 0; _i4 < 30; _i4++) {
            var _name2 = "Drill";
            _score += 400;
            if (_score > score) break;
            var _obj4 = {
              name: _name2,
              score: 400
            };
            arr.push(_obj4);
          }
          break;

         case "zs":
          for (var _i5 = 0; _i5 < 30; _i5++) {
            var _name3 = "DrillMouse";
            _score += 700;
            if (_score > score) break;
            var _obj5 = {
              name: _name3,
              score: 700
            };
            arr.push(_obj5);
          }
          break;

         case "s":
          for (var _i6 = 0; _i6 < 30; _i6++) {
            var _name4 = "Mouse";
            _score += 50;
            if (_score > score) break;
            var _obj6 = {
              name: _name4,
              score: 50
            };
            arr.push(_obj6);
          }
          break;

         case "m":
          for (var _i7 = 0; _i7 < 30; _i7++) {
            var _name5 = "Mystery";
            var _scoreCig2 = null;
            _scoreCig2 = score - _score > 200 ? this.createRandm(30, 200) : score - _score > 30 ? this.createRandm(30, score - _score) : 30;
            _score += _scoreCig2;
            if (_score > score) break;
            var _obj7 = {
              name: _name5,
              prop: _scoreCig2
            };
            arr.push(_obj7);
          }
        }
        return arr;
      },
      randomXY: function randomXY(item) {
        var groundY = this.itemArea.y + this.itemArea.height / 2;
        var randX = (this.itemArea.width - 30) / 2 * (2 * (Math.random() - .5));
        var randY = (this.itemArea.height - 30) / 2 * (2 * (Math.random() - .5));
        var pos = cc.v2(randX, randY);
        var rect = new cc.Rect(pos.x - item.width / 2, pos.y - item.height / 2, item.width, item.height);
        if (this.itemArea.children.length >= 1) {
          var isPeng = false;
          for (var i = 0; i < this.itemArea.children.length; i++) {
            var n = this.itemArea.children[i];
            var boundingBox = n.getBoundingBox();
            if (boundingBox.intersects(rect)) {
              isPeng = true;
              break;
            }
          }
          return isPeng ? this.randomXY(item) : pos;
        }
        return pos;
      },
      destroyTnt: function destroyTnt(Tnt) {
        for (var i = this.itemArea.children.length - 1; i >= 0; i--) {
          var n = this.itemArea.children[i];
          if (n !== Tnt) {
            var rect = Tnt.getBoundingBox();
            var pos = n.getPosition(cc.v2());
            if (rect.contains(pos)) {
              n.removeFromParent();
              n.destroy();
              n = null;
            }
          }
        }
      },
      createRandm: function createRandm(n, m) {
        m += 1;
        var a = m - n;
        var num = Math.random() * a + n;
        return parseInt(num);
      },
      StopHookMove: function StopHookMove() {
        this.HookState = 0;
        this.Hook.height = this.HookHeight;
        this.MinerAnimation.stop("hero");
        this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0];
        this.speed = 6;
        this.Hook.getChildByName("hook_1").getComponent(cc.Sprite).spriteFrame = this.HookFrames[0];
      },
      Handle: function Handle(items) {
        this.AddProp(items);
        this.AddScore(items);
        this.RemoveItem(items);
        0 === this.itemArea.children.length && this.GameOver();
        if (this.node.getChildByName("boom")) {
          var boom = this.node.getChildByName("boom");
          boom.removeFromParent();
          boom.destroy();
          boom = null;
        }
      },
      adjusBoomLayout: function adjusBoomLayout() {
        var layout = this.PropNode.getChildByName("Layout");
        layout.active = true;
        this.boomNumber >= 2 && (this.boomNumber = 2);
        for (var i = 0; i < 3; i++) {
          var boom = layout.children[i];
          i <= this.boomNumber ? boom.active = true : boom.active = false;
        }
      },
      AddProp: function AddProp(items) {
        if (!items[0]) return;
        if ("Mystery" === items[0].name) {
          var prop = items[0].extra;
          if (isNaN(prop)) switch (prop) {
           case "\u70b8\u5f39":
            this.boomNumber++;
            this.adjusBoomLayout();
            this.showMestery(0);
            break;

           case "3\u5143\u7ea2\u5305":
            this.showMestery(1);
            this.extarRedPack += 3;
            break;

           case "5\u5143\u7ea2\u5305":
            this.showMestery(2);
            this.extarRedPack += 5;
            break;

           case "\u836f\u6c34":
            this.showMestery(3);
          } else {
            this.Score.string = parseInt(this.Score.string) + (prop || 0);
            this.curScore += prop || 0;
            this.addAnim("score", prop);
          }
          cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
        } else if ("Red" === items[0].name) {
          var extraRedPack = this.createRandm(300, 800) / 100;
          this.extarRedPack += extraRedPack;
          this.addAnim("red", extraRedPack);
          cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
        }
      },
      showMestery: function showMestery(type) {
        var mestery = this.PropNode.getChildByName("Mestery");
        mestery.active = true;
        mestery.getComponent(cc.Sprite).spriteFrame = this.PropSpriteFrames[type];
        mestery.stopAllActions();
        cc.tween(mestery).to(2, {
          y: mestery.y + 100,
          opacity: 0
        }).call(function() {
          mestery.opacity = 255;
          mestery.y -= 100;
          mestery.active = false;
        }).start();
      },
      RemoveItem: function RemoveItem(items) {
        items.forEach(function(item) {
          if (item) {
            item.destroy();
            item = null;
          }
        });
      },
      AddScore: function AddScore(items) {
        if (!items[0]) return;
        if (!items[0].score) return;
        this.Score.string = parseInt(this.Score.string) + (items[0].score || 0);
        this.curScore += items[0].score || 0;
        cc.zm.showMusic && cc.audioEngine.play(this.AddScroeAudio);
        this.addAnim("score", items[0].score);
      },
      addAnim: function addAnim(type, score) {
        var add = null;
        "score" === type ? add = this.Score.node.parent.getChildByName("addScore") : "red" === type && (add = this.Score.node.parent.getChildByName("addRed"));
        add.getComponent(cc.Label).string = "+" + score;
        add.stopAllActions();
        add.opacity = 0;
        add.y = -132;
        cc.tween(add).to(.1, {
          opacity: 255
        }).to(1, {
          y: 42
        }).to(.1, {
          opacity: 0
        }).start();
      },
      ShowMask: function ShowMask() {
        var _this6 = this;
        this.Mask.active = true;
        var Fail = this.Mask.getChildByName("Fail");
        var Success = this.Mask.getChildByName("Success");
        Fail.active = false;
        Success.active = false;
        if (1 === this.victory) {
          Success.active = true;
          var lbl = Success.getChildByName("lbl").getComponent(cc.Label);
          http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function(res) {
            var items = res.data.items;
            var item = null;
            for (var i = 0; i < items.length; i++) if (!items[i].status) {
              item = items[i];
              break;
            }
            lbl.string = "";
            item.curr_pass_stage < item.need_pass_stage ? lbl.string = "\u901a\u5173" + item.need_pass_stage + "\u5173\u540e\u53ef\u63d0\u73b0" : item.curr_sign_in < item.need_sign_in ? lbl.string = "\u5b8c\u6210\u4eca\u65e5\u7b7e\u5230\u53ef\u63d0\u73b0" : item.curr_ad < item.need_ad && (lbl.string = "\u518d\u770b" + (item.need_ad - item.curr_ad) + "\u4e2a\u89c6\u9891\u53ef\u63d0\u73b0");
          });
          var awrad = Success.getChildByName("award").getComponent(cc.Label);
          awrad.string = "\u5956\u52b1\u7ea2\u5305+" + this.redPack;
          var extatAward = Success.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);
          if (this.extarRedPack) {
            extatAward.node.parent.active = true;
            extatAward.string = "+" + this.extarRedPack;
          } else extatAward.node.parent.active = false;
          var sendData = {
            bomb: this.boomNumber + 1,
            potion: this.liquidNumber,
            score: this.curScore,
            ts: new Date().getTime()
          };
          var data = this.createSignData(sendData);
          http.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function(res) {
            console.log("Pass\u901a\u5173\u6210\u529f\u8fd4\u56de\u4fe1\u606f", res);
          });
        } else 2 === this.victory && (Fail.active = true);
        cc.tween(this.Mask).to(.3, {
          scale: 1
        }).call(function() {
          _this6.PauseGameLayer();
        }).start();
      },
      createSignData: function createSignData(data) {
        var sortList = [];
        for (var key in data) if (data.hasOwnProperty(key) && "sign" != key) {
          var value = data[key];
          var item = {};
          item.key = key;
          item.value = value;
          sortList.push(key);
        }
        sortList.sort();
        var strToJiaMi = "";
        sortList.forEach(function(key) {
          strToJiaMi += "&" + key + "=" + data[key];
        }, this);
        strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;
        var hex_md5 = require("MD5");
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
        return data;
      },
      CloseMask: function CloseMask() {
        if (this.victory) return;
        this.ResumeGameLayer();
      },
      Reload: function Reload() {
        this.timer && this.unschedule(this.timer);
        cc.director.loadScene("Game");
      },
      Next: function Next() {
        var _this7 = this;
        switch (this.victory) {
         case 0:
          this.CloseMask();
          break;

         case 1:
          http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(res) {
            cc.zm.LevelInfo = res.data;
            _this7.Reload();
          });
          break;

         case 2:
          this.ExitGame();
        }
      },
      AwardVideo: function AwardVideo(e) {
        var _this8 = this;
        console.log("\u770b\u89c6\u9891\u5f97\u5956\u52b1");
        var sendData = {
          red_pack: parseInt(100 * (this.redPack + this.extarRedPack)),
          ad: cc.zm.ad
        };
        http.sendRequest("pit.v1.PitSvc/PassAd", "POST", sendData).then(function(res) {
          console.log("PassAd\u8fd4\u56de\u4fe1\u606f", res);
          http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function(res) {
            cc.zm.LevelInfo = res.data;
            _this8.Reload();
          });
        });
      },
      ExitGame: function ExitGame() {
        cc.director.loadScene("Index");
      },
      ResumeGameLayer: function ResumeGameLayer() {
        this.BackLayer.active = false;
        this.pauseGame = false;
        this.StartTime();
        2 === this.HookState && this.MinerAnimation.play("hero");
      },
      PauseGameLayer: function PauseGameLayer() {
        this.pauseGame = true;
        this.unschedule(this.timer);
        2 === this.HookState && this.MinerAnimation.stop("hero");
      },
      GameOver: function GameOver() {
        var s = 0;
        s = parseInt(this.Score.string) >= parseInt(this.TargetScore.string) ? 1 : 2;
        this.victory = s;
        this.ShowMask();
      },
      update: function update(dt) {
        if (this.pauseGame) return;
        if (this.NeedLayer.active) return;
        this.emitHook();
        this.HookRoTate();
      },
      useProp: function useProp(e, msg) {
        switch (msg) {
         case "\u70b8\u5f39":
          if (this.Hook.children[0].children[0] && this.boomNumber > -1) {
            cc.zm.showShake && cc.sys.isNative && jsb.Device.vibrate(.3);
            this.boomNumber--;
            this.adjusBoomLayout();
            var _node = this.Hook.children[0].children[0];
            var pos = _node.convertToWorldSpaceAR(cc.v2(0, 0));
            var boom = cc.instantiate(this.Boom);
            boom.name = "boom";
            this.node.addChild(boom);
            var size = cc.view.getVisibleSize();
            boom.setPosition(cc.v2(pos.x - size.width / 2, pos.y - size.height / 2));
            boom.active = true;
            boom.getComponent(cc.Animation).play("boom");
            _node.destroy();
            _node = null;
            this.speed = 10;
            var sendDta = {
              prop: 10
            };
            http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta);
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    "./Config": "Config",
    "./Level": "Level",
    Http: "Http",
    MD5: "MD5"
  } ],
  login: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "6b7cdHix81Ol6r4h+cnHYQh", "login");
    "use strict";
    var http = require("Http");
    cc.Class({
      extends: cc.Component,
      properties: {},
      start: function start() {
        this.protocol = false;
        this.needLogin = true;
        this.time = 0;
        if (cc.sys.localStorage.getItem("token")) {
          this.needLogin = false;
          cc.wxToken = cc.sys.localStorage.getItem("token");
          cc.director.loadScene("Index");
        }
      },
      onLoginWX: function onLoginWX() {
        cc.sys.isNative && (this.protocol ? cc.wxLogin.wxLogin() : this.showTips());
      },
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
        }).delay(.5).call(function() {
          tips.active = false;
        }).start();
      },
      update: function update(dt) {
        this.time += dt;
        if (!this.needLogin) return;
        if (this.time >= 1) {
          this.time = 0;
          if (cc.wxLoginResultcode && this.protocol) {
            this.protocol = false;
            var data = {
              channel: "1",
              imei: "1",
              mac: "1",
              distinct_id: "1",
              oaid: "1",
              android_id: "1",
              code: cc.wxLoginResultcode
            };
            http.sendRequest("pit.v1/register", "POST", data).then(function(res) {
              cc.wxToken = res.data.token;
              cc.sys.localStorage.setItem("token", res.data.token);
              cc.director.loadScene("Index");
            });
          }
        }
      }
    });
    cc._RF.pop();
  }, {
    Http: "Http"
  } ],
  use_reversed_rotateBy: [ function(require, module, exports) {
    "use strict";
    cc._RF.push(module, "1a8c0/npapCw52O67NIaoqR", "use_reversed_rotateBy");
    "use strict";
    cc.RotateBy._reverse = true;
    cc._RF.pop();
  }, {} ]
}, {}, [ "Config", "Hook", "Http", "IndexMain", "Level", "MD5", "Main", "login", "use_reversed_rotateBy" ]);