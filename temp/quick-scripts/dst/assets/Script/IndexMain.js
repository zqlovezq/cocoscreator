
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/IndexMain.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'ec6barLP8hJ4Lk8WUBUuH5V', 'IndexMain');
// Script/IndexMain.js

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
  "extends": cc.Component,
  properties: {
    BGM: {
      "default": null,
      type: cc.AudioClip
    },
    SevenFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    AwardFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    TextFrames: {
      type: cc.SpriteFrame,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    //关闭FPS面板
    // cc.director.setDisplayStats(false);
    cc.zm = {}; // 增加屏幕视频

    this.screenAdapter(); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

    var firstLayer = cc.find('Canvas/First');
    firstLayer.active = false;

    var _first = cc.sys.localStorage.getItem("first");

    if (!_first) {
      cc.sys.localStorage.setItem("first", true);
      this.scheduleOnce(function () {
        firstLayer.scale = 0;
        firstLayer.active = true;
        cc.tween(firstLayer).to(0.5, {
          scale: 1
        }).start();
      }, 1);
    } //监听开始游戏
    // 设置界面


    this.SetLayer = cc.find('Canvas/SetLayer'); // 签到界面

    this.SignLayer = cc.find('Canvas/SignLayer'); // 大转盘界面

    this.TurntableLayer = cc.find('Canvas/TurntableLayer'); // 存钱罐界面 提现也是这个界面

    this.GetMonetyLayer = cc.find('Canvas/GetMoneyLayer'); // 七日任务

    this.SevenWorkLayer = cc.find("Canvas/SevenWorkLayer"); // 奖池红包界面

    this.RedPoolLayer = cc.find("Canvas/RedPoolLayer"); // 获取物品的弹窗

    this.GetGoodLayer = cc.find("Canvas/GetGood"); // 看视频得奖励界面

    this.SeeVideolayer = cc.find("Canvas/SeeVideolayer"); // 重置关卡界面

    this.ResumeLayer = cc.find("Canvas/ResumeLayer");
    cc.zm.showMusic = true;
    cc.zm.showShake = true;
    this.countDownTime = 0; // startBtn.on(cc.Node.EventType.TOUCH_END,this.StartGame.bind(this));

    this.BGM_ID = cc.audioEngine.play(this.BGM); // console.log(http.sendRequest);
    //预加载场景2

    cc.director.preloadScene('Game'); // 新手引导

    var guide = cc.find('Canvas/Guide');
    guide.active = false;
    guide.getChildByName("guide_0").active = false;
    guide.getChildByName("guide_4").active = false;

    if (cc.sys.localStorage.getItem("guide") !== "over") {
      if (!cc.sys.localStorage.getItem("guide")) {
        this.guide = true;
        guide.active = true;
        guide.getChildByName("guide_0").active = true;
      }

      if (cc.sys.localStorage.getItem("guide") === '4') {
        this.guide = false;
        guide.active = true;
        guide.getChildByName("guide_4").active = true;
      }
    } // 获取用户信息


    this.getUserInfo();
  },
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
    strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi; // var noJiaMi = strToJiaMi;
    // console.log("未加密前=", strToJiaMi)

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi; // console.log("加密后=", strToJiaMi)

    return data;
  },
  getUserEcpm: function getUserEcpm() {
    var sendData = {
      "ecpm": 1,
      "ts": new Date().getTime() //时间戳

    };
    var data = this.createSignData(sendData);
    http.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function (res) {
      console.log("刷新用户的Ecpm", res.data);
      cc.zm.ad = res.data.ad;
    });
  },
  getUserInfo: function getUserInfo() {
    var _this = this;

    var sendData = {};
    http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      _this.userInfo = res.data;
      cc.zm.userInfo = _this.userInfo; // console.log(this.userInfo);

      _this.showIndexLayer(); // 刷新一下用户的Ecpm


      _this.getUserEcpm(); // 体力是否倒计时


      _this.PowerTime();
    });
  },
  PowerTime: function PowerTime() {
    var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);

    if (cc.zm.userInfo.power < 5) {
      // 现在才会倒计时
      // 先获取
      this.schedule(this.PowerTimeSchedule, 1);
    } else {
      time.string = "00:00";
      this.unschedule(this.PowerTimeSchedule);
    }
  },
  PowerTimeSchedule: function PowerTimeSchedule() {
    if (cc.zm.userInfo.power_sec <= 0) {
      this.unschedule(this.PowerTimeSchedule); // 在获取用户信息 是否体力满 没有满接着倒计时

      this.getUserInfo();
    } else {
      // 每一秒更新倒计时
      var time = cc.find("Canvas/Index/Power/time").getComponent(cc.Label);
      time.string = this.changeSecond(cc.zm.userInfo.power_sec);
      cc.zm.userInfo.power_sec--;
    }
  },
  // 写一个算法 将秒数传进来生成一个00:00形式的字符串
  changeSecond: function changeSecond(s) {
    var minute = "0" + Math.floor(s / 60);
    var second = s % 60 >= 10 ? s % 60 : "0" + s % 60;
    return minute + ":" + second;
  },
  guideOver: function guideOver() {
    cc.find('Canvas/Guide').active = false;
    cc.sys.localStorage.setItem("guide", "over");
  },
  // 设置屏幕适配
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
  StartGame: function StartGame() {
    var _this2 = this;

    //关闭BGM
    cc.audioEngine.stop(this.BGM_ID); //清空关卡数 不清空关卡
    // cc.sys.localStorage.removeItem('level');
    // cc.sys.localStorage.removeItem('score');

    if (this.guide) {
      cc.sys.localStorage.setItem("guide", 1);
    } //跳转场景
    // 开始游戏之前 先获取关卡信息 如果没有关卡信息不进入游戏


    http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      cc.zm.LevelInfo = res.data;
      console.log("关卡信息=", cc.zm.LevelInfo); // 判断

      if (cc.zm.userInfo.power <= 0) {
        // 显示看视频获得体力界面
        _this2.showSeeVideolayer();
      } else {
        cc.director.loadScene("Game");
      }
    });
  },
  showSeeVideolayer: function showSeeVideolayer() {
    this.SeeVideolayer.active = true;
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward() {
    var _this3 = this;

    var sendData = {
      ad: cc.zm.ad
    };
    http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
      _this3.SeeVideolayer.active = false;

      _this3.getUserInfo();
    });
  },
  // 显示签到界面
  showSignLayer: function showSignLayer() {
    var _this4 = this;

    // 先获取签到列表
    var sendData = {};
    http.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function (res) {
      // console.log("签到列表", res);
      var day = 0;
      var items = res.data.items;

      for (var i = 0; i < items.length; i++) {
        var _data = items[i];

        if (_data.status) {
          day = _data.day;
          break;
        }
      }

      _this4.signDay = day > 0 ? day : 1; // this.signDay=0;

      _this4.SignLayer.active = true;

      for (var _i = 1; _i <= 7; _i++) {
        var dayNode = _this4.SignLayer.getChildByName("day_" + _i);

        if (_i <= day) {
          _this4.completeBtn(dayNode);
        } else if (_i === day + 1) {
          _this4.selectBtn(dayNode);
        } else {
          _this4.unSelectBtn(dayNode);
        }
      }
    });
  },
  // 显示设置界面
  showSetLayer: function showSetLayer() {
    this.SetLayer.active = true; // 获取用户信息
    // http.sendRequest("pit.v1.PitSvc/Stage");

    var nickName = this.SetLayer.getChildByName("nikename").getComponent(cc.Label);
    nickName.string = this.userInfo.nick_name;
    var userId = this.SetLayer.getChildByName("userid").getComponent(cc.Label);
    userId.string = "\u7528\u6237ID\uFF1A" + this.userInfo.user_id; // icon

    var icon = this.SetLayer.getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
    var remoteUrl = this.userInfo.avatar_url;
    cc.assetManager.loadRemote(remoteUrl, {
      ext: '.png'
    }, function (err, texture) {
      // Use texture to create sprite frame
      icon.spriteFrame = new cc.SpriteFrame(texture);
    });
  },
  // 显示主界面
  showIndexLayer: function showIndexLayer() {
    // 红包的数量
    cc.find("Canvas/Index/GetMoney/lbl").getComponent(cc.Label).string = this.userInfo.red_pack;
    cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power; // 元宝的个数

    cc.find("Canvas/Index/YuanBao/lbl").getComponent(cc.Label).string = this.userInfo.gc;
    cc.find("Canvas/Index/Gold/lbl").getComponent(cc.Label).string = this.userInfo.score; // cc.find("Canvas/Index/Power/lbl").getComponent(cc.Label).string = this.userInfo.power
  },
  // 显示大转盘界面
  showTurntableLayer: function showTurntableLayer() {
    var _this5 = this;

    // 显示大转盘之前获取用户信息接口
    this.point = this.TurntableLayer.getChildByName("Pointer");
    this.point.angle = 360;
    var sendData = {};
    http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      cc.zm.userInfo = res.data;
      _this5.TurntableLayer.active = true;

      var btnCom = _this5.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);

      if (cc.zm.userInfo.sec < 0) {
        // 有倒计时 开始倒计时 todo
        // 此时转盘点击按钮 置灰且不可点击
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
        _this5.countDownTime = Math.abs(cc.zm.userInfo.sec);

        _this5.schedule(_this5.TurnTableCountDown, 1);
      } else {
        btnCom.interactable = true;
      }
    });
  },
  // 大转盘的倒计时
  TurnTableCountDown: function TurnTableCountDown() {
    if (this.countDownTime) {
      if (this.countDownTime < 0) {
        this.unschedule(this.TurnTableCountDown);
      } else {
        // 每一秒更新倒计时
        var time = this.TurntableLayer.getChildByName("countLbl").getComponent(cc.Label);
        this.countDownTime--;
        time.string = this.changeSecond(this.countDownTime);
      }
    }
  },
  // 显示红包池界面
  showRedPoolLayer: function showRedPoolLayer() {
    var _this6 = this;

    // 获取奖池信息
    var sendData = {};
    http.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then(function (res) {
      _this6.RedPoolLayer.active = true;
      var poolInfo = res.data;
      var arr = ["kai", "xin", "kuang", "gong"];

      for (var i = 0; i < 4; i++) {
        var value = poolInfo[arr[i]];

        var com = _this6.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);

        com.string = "x" + value;
      } // 奖池金额 


      var award_lbl = _this6.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);

      award_lbl.string = poolInfo.amount; // 增加倒计时

      var hour = _this6.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label);

      hour.string = poolInfo.hour;

      var minute = _this6.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label);

      minute.string = poolInfo.minute < 10 ? "0" + poolInfo.minute : poolInfo.minute;
    });
  },
  // 显示7日任务界面
  showSevenWorkLayer: function showSevenWorkLayer() {
    var _this7 = this;

    // 现获取七日任务列表
    var sendData = {};
    http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
      // console.log("七日任务列表=", res.data);
      // 通过数据初始化界面 状态 0.未领取 1.已领取
      var items = res.data.items;
      var signNumber = 0;
      var arr = [];

      for (var i = 0; i < items.length; i++) {
        // 先获取自己的数据 
        var _status = items[i].status;

        if (!_status) {
          signNumber = items[i].num;
          break;
        }
      }

      for (var _i2 = 0; _i2 < items.length; _i2++) {
        if (signNumber === items[_i2].num) {
          arr.push(items[_i2]);
        }
      } // 设置title


      var title = _this7.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);

      title.spriteFrame = _this7.SevenFrames[arr[0].num - 1]; // 一只当前数据item 通过数据

      var layout = _this7.SevenWorkLayer.getChildByName("layout");

      for (var j = 0; j < arr.length; j++) {
        var _data = arr[j];

        var _layoutH = layout.getChildByName("layout_" + (j + 1));

        _layoutH.active = true;

        var btn = _layoutH.getChildByName("getMoneyBtn");

        btn._id = _data.id;
        var btnCom = btn.getComponent(cc.Button);

        if (_data.status === 1) {
          btnCom.enableAutoGrayEffect = true;
          btnCom.interactable = false;
        } else {
          btnCom.interactable = true; // 判断所有条件是否均达成

          var isComplete = false;

          if (_data.curr_pass_stage >= _data.need_pass_stage && _data.curr_sign_in >= _data.need_sign_in && _data.curr_invite >= _data.need_invite) {
            isComplete = true;
          }

          if (isComplete) {
            // 条件达成
            btn.complete = true;
          } else {
            // 没有达成
            btn.complete = false;
          }
        } // 先设置文本
        // 红包


        var red = _layoutH.getChildByName("lbl1").getComponent(cc.Label);

        red.string = _data.value; // 设置观看视频次数

        var videoText = _layoutH.getChildByName("lbl2").getComponent(cc.Label);

        videoText.string = "\u89C2\u770B" + _data.need_ad + "\u4E2A\u89C6\u9891"; // 进度条

        var bar = _layoutH.getChildByName("progressBar").getComponent(cc.ProgressBar);

        bar.progress = _data.curr_ad / _data.need_ad;

        var barLbl = _layoutH.getChildByName("barLbl").getComponent(cc.Label);

        barLbl.string = _data.curr_ad + "/" + _data.need_ad; // 额外条件
        // 需要通关数

        var itemLayout = _layoutH.getChildByName("layout");

        if (_data.need_pass_stage) {
          var item0 = itemLayout.getChildByName("item_0");
          item0.active = true;
          item0.getChildByName("lbl").getComponent(cc.Label).string = "\u901A\u8FC7\u7B2C" + _data.need_pass_stage + "\u5173";
          var arrow = item0.getChildByName("icon").getChildByName("arrow");
          arrow.active = _data.curr_pass_stage >= _data.need_pass_stage;
        }

        if (_data.need_sign_in) {
          var item1 = itemLayout.getChildByName("item_1");
          item1.active = true;
          item1.getChildByName("lbl").getComponent(cc.Label).string = "\u9886\u53D6\u7B7E\u5230\u5956\u52B1";

          var _arrow = item1.getChildByName("icon").getChildByName("arrow");

          _arrow.active = _data.curr_sign_in >= _data.need_sign_in;
        }

        if (_data.need_invite) {
          var _item = itemLayout.getChildByName("item_2");

          _item.active = true;
          _item.getChildByName("lbl").getComponent(cc.Label).string = "\u9080\u8BF7" + _data.need_invite + "\u4E2A\u597D\u53CB";

          var _arrow2 = _item.getChildByName("icon").getChildByName("arrow");

          _arrow2.active = _data.curr_invite >= _data.need_invite;
        }
      }

      _this7.SevenWorkLayer.active = true;
    });
  },
  // 显示重置关卡界面
  showResumeLayer: function showResumeLayer() {
    this.ResumeLayer.active = true;
  },
  resumeLevel: function resumeLevel() {
    var _this8 = this;

    http.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function (res) {
      _this8.ResumeLayer.active = false;

      _this8.getUserInfo();
    });
  },
  sevenWorkGetMoney: function sevenWorkGetMoney(e) {
    var _this9 = this;

    var target = e.target;

    if (!target.complete) {
      this.showTips("条件未达成");
    } else {
      // 像服务器发送提现请求
      http.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
        id: target._id
      }).then(function (res) {
        // 像服务器发送提现请求
        // console.log("像服务器发送提现请求", res.data);
        _this9.SevenWorkLayer.getChildByName("getLayer").active = true;
      });
    }
  },
  // 显示存钱罐界面
  showGetMoneyLayer: function showGetMoneyLayer() {
    var _this10 = this;

    // 打开存钱罐 获取存钱罐的信息
    http.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function (res) {
      var data = res.data;
      var gc = data.gc || 0; // console.log("存钱罐信息=", data);
      // 先定义当前那个阶段是否可以提取

      _this10.getMoneyStage = 0;
      var arr = [0.3, 0.5, 1, 2, 5, 10, 20];

      for (var i = 0; i < data.items.Length; i++) {
        if (data.items[i].times) {
          _this10.getMoneyStage = arr[i];
          break;
        }
      } // 初始化存钱罐界面属性


      _this10.GetMonetyLayer.active = true; // 显示元宝余额

      _this10.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = gc; // // 元宝跟现金进行转换 转换比例为10000:1

      _this10.extractMoney = gc / 10000;
      _this10.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = _this10.extractMoney + "元";
      _this10.choiceBtn = null; // 开始的时候getMoneyBtn置灰不可点击

      var btn = _this10.GetMonetyLayer.getChildByName("getMoneyBtn");

      var btnCom = btn.getComponent(cc.Button);
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
    });
  },
  // 点击选择提现金钱按钮
  choiceGetMoneyBtn: function choiceGetMoneyBtn(e, msg) {
    var target = e.target;

    if (this.choiceBtn === null) {
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
  // 点击提现按钮
  clickGetMoneyBtn1: function clickGetMoneyBtn1(e) {
    var target = e.target;

    if (this.choiceBtn === null) {
      return;
    } else {
      // 开始提现金钱
      // 判断条件 1  是否元宝数量是否满足提现档位，不满足时提示：元宝数量不足
      // 判断条件 2  档位是否为最小档位，如果不是提示：请先完成上一个档位提现
      // console.log("开始提现", this.choiceBtn.money);
      if (this.extractMoney < this.choiceBtn.money) {
        // 不符合条件1 弹出元宝数量不足的tips
        this.showTips("元宝数量不足");
        return;
      }

      if (this.choiceBtn.money > this.getMoneyStage) {
        // 不符合条件2 
        this.showTips("请先完成上一个档位提现");
        return;
      } // 都符合条件像服务器发送请求


      http.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function (res) {
        // 成功提现
        var layer = target.parent.getChildByName("getLayer");
        layer.active = true;
      });
    }
  },
  showTips: function showTips(msg) {
    var tips = cc.find("Canvas/Tips");
    tips.stopAllActions();
    tips.y = 145;
    var lbl = tips.getComponent(cc.Label);
    lbl.string = msg;
    cc.tween(tips).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 300
    }).delay(0.5).to(0.1, {
      opacity: 0
    }).start();
  },
  // 关闭音乐
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
  // 关闭震动
  shakePhone: function shakePhone(event) {
    if (cc.zm.showShake) {
      cc.zm.showShake = false;
      this.unSelectBtn(event.target); // console.log(jsb.Device);
      // jsb.Device.vibrate(3);
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
  // 用户协议
  showUserXieYi: function showUserXieYi() {// console.log("用户协议");
  },
  // 隐私政策
  showUserYinSi: function showUserYinSi() {// console.log("隐私政策");
  },
  // 退出登陆
  ExitBackBtn: function ExitBackBtn(e) {
    e.target.parent.active = false;

    if (this.choiceBtn) {
      this.unSelectBtn(this.choiceBtn);
      this.choiceBtn = null;
    }

    if (this.TurntableLayer.active === true) {
      this.showTurntableLayer();
    } // 关闭当前也进入首页 刷新界面


    this.getUserInfo(); // console.log("退出登陆");
  },
  // 点击签到按钮
  clickSignBtn: function clickSignBtn(e) {
    var _this11 = this;

    // 签到
    var sendData = {
      ad: cc.zm.ad
    };
    http.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then(function (res) {
      // let res = {data:{
      //     "day":1,
      //     "card":1,
      //     "gc":100,            }}
      // console.log("点击签到", res);
      var signDay = _this11.SignLayer.getChildByName("day_" + _this11.signDay);

      _this11.completeBtn(signDay); // data数据 gc奖励元宝 card 0未获得 1开,2心,3矿


      var arr = ["三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包"];
      var data = res.data;

      _this11.showPop(arr[_this11.signDay - 1], AWARD["DAY_" + _this11.signDay], data.gc, data.card);
    })["catch"](function (res) {
      _this11.showTips("今日奖励已领取");
    });
  },
  // 点击体现按钮
  clickGetMoneyBtn: function clickGetMoneyBtn(e) {// console.log("点击提现按钮");
    // this.showGetMoneyLayer();
  },
  // 点击转盘开始按钮
  clickTurnTableBtn: function clickTurnTableBtn(e) {
    var _this12 = this;

    // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
    if (this.countDownTime > 0) {
      // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
      // this.showTips("抽奖倒计时");
      return;
    } // 先像服务器发送请求获取物品id


    var sendData = {
      "ad": cc.zm.ad
    }; // 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包

    var obj = {
      "1": 60,
      "10": 240,
      "11": 180,
      "12": 120,
      "31": 360,
      "32": 300
    };
    http.sendRequest("pit.v1.PitSvc/Lottery", "POST", sendData).then(function (res) {
      // console.log("点击开始转盘", res);
      // todo test 当前转盘id是3
      _this12.endAngle = obj["" + res.data.award]; // 开始旋转 初始速度为

      _this12.point = _this12.TurntableLayer.getChildByName("Pointer");
      _this12.beginTurn = true;
      _this12.point.angle = 360;
      _this12.speed = 18;
      _this12.value = 1;
      _this12.circle = 0; // this.turnData = res.data;

      _this12.scheduleOnce(function () {
        var data = res.data;
        var award = {
          "1": {
            name: "体力x1",
            index: AWARD.POWER
          },
          "10": {
            name: "炸弹x1",
            index: AWARD.BOOM
          },
          "11": {
            name: "时钟x1",
            index: AWARD.LOCK
          },
          "12": {
            name: "石化手册x1",
            index: AWARD.SHOUCE
          },
          "31": {
            name: "五元红包",
            index: AWARD.RED_5
          },
          "32": {
            name: "十元红包",
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
      // 开始旋转
      this.point.angle -= this.speed;

      if (this.point.angle <= 0) {
        this.point.angle = 360;
        this.circle++;

        if (this.circle % 2 === 0) {
          // 条件达成 表示转了两圈
          this.speed -= this.value;

          if (this.value === 4.5) {
            this.value = 4.5;
          } else {
            this.value += 1.5;
          }
        }
      } // console.log(this.speed);


      if (this.speed <= 5 && this.point.angle <= this.endAngle) {
        this.beginTurn = false;
        this.point.angle = this.endAngle;
      }
    }
  },
  // 增加显示弹出获得物品的弹窗
  // 奖品类型 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
  showPop: function showPop(goodName, goodNumber, gcNumber, textNumber) {
    this.GetGoodLayer.active = true;
    var layout = this.GetGoodLayer.getChildByName("layout");
    var icon = this.GetGoodLayer.getChildByName("icon").getComponent(cc.Sprite);
    var text = this.GetGoodLayer.getChildByName("lbl").getComponent(cc.Label);
    text.string = "\u83B7\u5F97" + goodName;
    icon.spriteFrame = this.AwardFrames[goodNumber];
    var layout1 = layout.getChildByName("layout_1");
    var layout2 = layout.getChildByName("layout_2");

    if (gcNumber) {
      layout1.active = true;
      var lbl = layout1.getChildByName("lbl").getComponent(cc.Label);
      lbl.string = "\u83B7\u5F97\u5143\u5B9D+" + gcNumber;
    } else {
      layout1.active = false;
    }

    if (textNumber) {
      layout2.active = true;

      var _icon = layout2.getChildByName("icon").getComponent(cc.Sprite);

      _icon.spriteFrame = this.TextFrames[textNumber - 1];
    } else {
      layout2.active = false;
    }
  },
  // 退出登陆
  ExitWxLogin: function ExitWxLogin() {
    // 清掉token
    cc.wxToken = null;
    cc.wxLoginResultcode = null;
    cc.sys.localStorage.removeItem("token");
    cc.director.loadScene("Login");
  },
  // 点击加载广告
  adPlay: function adPlay() {
    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "loadJiLiVideo", "()V");
  }
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbImh0dHAiLCJyZXF1aXJlIiwiQVdBUkQiLCJjYyIsIkVudW0iLCJEQVlfMSIsIkRBWV8yIiwiREFZXzMiLCJEQVlfNCIsIkRBWV81IiwiREFZXzYiLCJEQVlfNyIsIlJFRF81IiwiUkVEXzEwIiwiQk9PTSIsIkxPQ0siLCJTSE9VQ0UiLCJQT1dFUiIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkJHTSIsInR5cGUiLCJBdWRpb0NsaXAiLCJTZXZlbkZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiQXdhcmRGcmFtZXMiLCJUZXh0RnJhbWVzIiwib25Mb2FkIiwiem0iLCJzY3JlZW5BZGFwdGVyIiwiZmlyc3RMYXllciIsImZpbmQiLCJhY3RpdmUiLCJfZmlyc3QiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNjaGVkdWxlT25jZSIsInNjYWxlIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiU2V0TGF5ZXIiLCJTaWduTGF5ZXIiLCJUdXJudGFibGVMYXllciIsIkdldE1vbmV0eUxheWVyIiwiU2V2ZW5Xb3JrTGF5ZXIiLCJSZWRQb29sTGF5ZXIiLCJHZXRHb29kTGF5ZXIiLCJTZWVWaWRlb2xheWVyIiwiUmVzdW1lTGF5ZXIiLCJzaG93TXVzaWMiLCJzaG93U2hha2UiLCJjb3VudERvd25UaW1lIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVTaWduRGF0YSIsImRhdGEiLCJzb3J0TGlzdCIsImtleSIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInVzZXJJbmZvIiwic2MxIiwiaGV4X21kNSIsInNpZ24iLCJnZXRVc2VyRWNwbSIsInNlbmREYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYWQiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJTdGFydEdhbWUiLCJzdG9wIiwiTGV2ZWxJbmZvIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwic2hvd1NpZ25MYXllciIsImRheSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsIl9kYXRhIiwic3RhdHVzIiwic2lnbkRheSIsImRheU5vZGUiLCJjb21wbGV0ZUJ0biIsInNlbGVjdEJ0biIsInVuU2VsZWN0QnRuIiwic2hvd1NldExheWVyIiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJ1c2VySWQiLCJ1c2VyX2lkIiwiaWNvbiIsIlNwcml0ZSIsInJlbW90ZVVybCIsImF2YXRhcl91cmwiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwic2hvd1R1cm50YWJsZUxheWVyIiwicG9pbnQiLCJhbmdsZSIsImJ0bkNvbSIsIkJ1dHRvbiIsInNlYyIsImVuYWJsZUF1dG9HcmF5RWZmZWN0IiwiaW50ZXJhY3RhYmxlIiwiYWJzIiwiVHVyblRhYmxlQ291bnREb3duIiwic2hvd1JlZFBvb2xMYXllciIsInBvb2xJbmZvIiwiYXJyIiwiY29tIiwiYXdhcmRfbGJsIiwiYW1vdW50IiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNpZ25OdW1iZXIiLCJfc3RhdHVzIiwibnVtIiwidGl0bGUiLCJsYXlvdXQiLCJqIiwiX2xheW91dEgiLCJidG4iLCJfaWQiLCJpZCIsImlzQ29tcGxldGUiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2ludml0ZSIsIm5lZWRfaW52aXRlIiwiY29tcGxldGUiLCJyZWQiLCJ2aWRlb1RleHQiLCJuZWVkX2FkIiwiYmFyIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImN1cnJfYWQiLCJiYXJMYmwiLCJpdGVtTGF5b3V0IiwiaXRlbTAiLCJhcnJvdyIsIml0ZW0xIiwic2hvd1Jlc3VtZUxheWVyIiwicmVzdW1lTGV2ZWwiLCJzZXZlbldvcmtHZXRNb25leSIsImUiLCJ0YXJnZXQiLCJzaG93VGlwcyIsInNob3dHZXRNb25leUxheWVyIiwiZ2V0TW9uZXlTdGFnZSIsIkxlbmd0aCIsInRpbWVzIiwiZXh0cmFjdE1vbmV5IiwiY2hvaWNlQnRuIiwiY2hvaWNlR2V0TW9uZXlCdG4iLCJtc2ciLCJtb25leSIsIk51bWJlciIsImNsaWNrR2V0TW9uZXlCdG4xIiwibGF5ZXIiLCJwYXJlbnQiLCJ0aXBzIiwic3RvcEFsbEFjdGlvbnMiLCJ5IiwibGJsIiwib3BhY2l0eSIsImRlbGF5Iiwic3RvcEJHTSIsImV2ZW50IiwicGF1c2UiLCJyZXN1bWUiLCJzaGFrZVBob25lIiwic2hvd1VzZXJYaWVZaSIsInNob3dVc2VyWWluU2kiLCJFeGl0QmFja0J0biIsImNsaWNrU2lnbkJ0biIsInNob3dQb3AiLCJjYXJkIiwiY2xpY2tHZXRNb25leUJ0biIsImNsaWNrVHVyblRhYmxlQnRuIiwib2JqIiwiZW5kQW5nbGUiLCJhd2FyZCIsImJlZ2luVHVybiIsInNwZWVkIiwiY2lyY2xlIiwibmFtZSIsImluZGV4IiwiX2F3YXJkIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0IiwiZ29vZE5hbWUiLCJnb29kTnVtYmVyIiwiZ2NOdW1iZXIiLCJ0ZXh0TnVtYmVyIiwidGV4dCIsImxheW91dDEiLCJsYXlvdXQyIiwiRXhpdFd4TG9naW4iLCJ3eFRva2VuIiwid3hMb2dpblJlc3VsdGNvZGUiLCJyZW1vdmVJdGVtIiwiYWRQbGF5IiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBQyxDQVRXO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUMsQ0FWYTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFDLEVBWGE7QUFZbEJDLEVBQUFBLE1BQU0sRUFBQyxFQVpXO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUM7QUFiWSxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElBQUksRUFBRW5CLEVBQUUsQ0FBQ29CO0FBRlIsS0FERztBQUtS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Z0MscUNBQWhDLEVBQXVFLGVBQXZFLEVBQXdGLEtBQXhGO0FBQ0g7QUFsdUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOjgsXG4gICAgQk9PTTo5LFxuICAgIExPQ0s6MTAsXG4gICAgU0hPVUNFOjExLFxuICAgIFBPV0VSOjEyXG59KVxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgQkdNOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIFNldmVuRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBBd2FyZEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgVGV4dEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YWz6ZetRlBT6Z2i5p2/XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIGNjLnptID0ge307XG4gICAgICAgIC8vIOWinuWKoOWxj+W5leinhumikVxuICAgICAgICB0aGlzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5piv56ys5LiA5qyh6L+b5YWl5ri45oiPIOWmguaenOesrOS4gOasoei/m+WFpemCo+S5iOW8ueWHukZpcnN05by556qXXG4gICAgICAgIGxldCBmaXJzdExheWVyID0gY2MuZmluZCgnQ2FudmFzL0ZpcnN0Jyk7XG4gICAgICAgIGZpcnN0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCBfZmlyc3QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKTtcbiAgICAgICAgaWYoIV9maXJzdCl7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFwiLHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZmlyc3RMYXllcikudG8oMC41LHtzY2FsZToxfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwxKVxuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiPXG4gICAgICAgIC8vIOiuvue9rueVjOmdolxuICAgICAgICB0aGlzLlNldExheWVyID0gY2MuZmluZCgnQ2FudmFzL1NldExheWVyJyk7XG4gICAgICAgIC8vIOetvuWIsOeVjOmdolxuICAgICAgICB0aGlzLlNpZ25MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TaWduTGF5ZXInKTtcbiAgICAgICAgLy8g5aSn6L2s55uY55WM6Z2iXG4gICAgICAgIHRoaXMuVHVybnRhYmxlTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVHVybnRhYmxlTGF5ZXInKTtcbiAgICAgICAgLy8g5a2Y6ZKx572Q55WM6Z2iIOaPkOeOsOS5n+aYr+i/meS4queVjOmdolxuICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyID0gY2MuZmluZCgnQ2FudmFzL0dldE1vbmV5TGF5ZXInKTtcbiAgICAgICAgLy8g5LiD5pel5Lu75YqhXG4gICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldmVuV29ya0xheWVyXCIpO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXnlYzpnaJcbiAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1JlZFBvb2xMYXllclwiKVxuICAgICAgICAvLyDojrflj5bnianlk4HnmoTlvLnnqpdcbiAgICAgICAgdGhpcy5HZXRHb29kTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dldEdvb2RcIilcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5aWW5Yqx55WM6Z2iXG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2VlVmlkZW9sYXllclwiKVxuICAgICAgICAvLyDph43nva7lhbPljaHnlYzpnaJcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllciA9ICBjYy5maW5kKFwiQ2FudmFzL1Jlc3VtZUxheWVyXCIpXG4gICAgICAgIGNjLnptLnNob3dNdXNpYyA9IHRydWU7XG4gICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IDA7XG4gICAgICAgIC8vIHN0YXJ0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLlN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5CR01fSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQkdNKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cC5zZW5kUmVxdWVzdCk7XG4gICAgICAgIC8v6aKE5Yqg6L295Zy65pmvMlxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgLy8g5paw5omL5byV5a+8XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgIGd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpICE9PSBcIm92ZXJcIikge1xuICAgICAgICAgICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgPT09ICc0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgfSxcbiAgICBjcmVhdGVTaWduRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHNvcnRMaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPSBcInNpZ25cIikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xuICAgICAgICAgICAgICAgIGl0ZW0ua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzb3J0TGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29ydExpc3Quc29ydCgpO1xuICAgICAgICB2YXIgc3RyVG9KaWFNaSA9IFwiXCI7XG4gICAgICAgIHNvcnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgc3RyVG9KaWFNaSArPSBcIiZcIiArIGtleSArIFwiPVwiICsgZGF0YVtrZXldO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgc3RyVG9KaWFNaSA9IFwidG9rZW49XCIgKyBjYy56bS51c2VySW5mby5zYzEgKyBzdHJUb0ppYU1pO1xuICAgICAgICAvLyB2YXIgbm9KaWFNaSA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyq5Yqg5a+G5YmNPVwiLCBzdHJUb0ppYU1pKVxuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yqg5a+G5ZCOPVwiLCBzdHJUb0ppYU1pKVxuICAgICAgICByZXR1cm4gZGF0YTtcblxuICAgIH0sXG4gICAgZ2V0VXNlckVjcG0oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwiZWNwbVwiOiAxLFxuICAgICAgICAgICAgXCJ0c1wiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8v5pe26Ze05oizXG4gICAgICAgIH07XG4gICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTaWduRGF0YShzZW5kRGF0YSk7XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1JjXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5Yi35paw55So5oi355qERWNwbVwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICBjYy56bS5hZCA9IHJlcy5kYXRhLmFkO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHRoaXMudXNlckluZm9cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMudXNlckluZm8pO1xuICAgICAgICAgICAgdGhpcy5zaG93SW5kZXhMYXllcigpO1xuICAgICAgICAgICAgLy8g5Yi35paw5LiA5LiL55So5oi355qERWNwbVxuICAgICAgICAgICAgdGhpcy5nZXRVc2VyRWNwbSgpO1xuICAgICAgICAgICAgLy8g5L2T5Yqb5piv5ZCm5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLlBvd2VyVGltZSgpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBQb3dlclRpbWUoKXtcbiAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICBpZihjYy56bS51c2VySW5mby5wb3dlcjw1KXtcbiAgICAgICAgICAgIC8vIOeOsOWcqOaJjeS8muWAkuiuoeaXtlxuICAgICAgICAgICAgLy8g5YWI6I635Y+WXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUsIDEpXG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBvd2VyVGltZVNjaGVkdWxlKCl7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlcl9zZWMgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICAgICAgLy8g5Zyo6I635Y+W55So5oi35L+h5oGvIOaYr+WQpuS9k+WKm+a7oSDmsqHmnInmu6HmjqXnnYDlgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyk7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlcl9zZWMtLVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5bCG56eS5pWw5Lyg6L+b5p2l55Sf5oiQ5LiA5LiqMDA6MDDlvaLlvI/nmoTlrZfnrKbkuLJcbiAgICBjaGFuZ2VTZWNvbmQocyl7XG4gICAgICAgIGxldCBtaW51dGUgPSBcIjBcIitNYXRoLmZsb29yKHMvNjApO1xuICAgICAgICBsZXQgc2Vjb25kID0gcyU2MD49MTA/cyU2MDpcIjBcIitzJTYwXG4gICAgICAgIHJldHVybiBtaW51dGUrXCI6XCIrc2Vjb25kXG4gICAgfSxcbiAgICBndWlkZU92ZXIoKSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCBcIm92ZXJcIik7XG4gICAgfSxcbiAgICAvLyDorr7nva7lsY/luZXpgILphY1cbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUuaGVpZ2h0IC8gd2luU2l6ZS53aWR0aCA8PSA3MjAgLyAxMjgwKSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgU3RhcnRHYW1lKCkge1xuICAgICAgICAvL+WFs+mXrUJHTVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuQkdNX0lEKTtcbiAgICAgICAgLy/muIXnqbrlhbPljaHmlbAg5LiN5riF56m65YWz5Y2hXG4gICAgICAgIC8vIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbSgnbGV2ZWwnKTtcbiAgICAgICAgLy8gY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKCdzY29yZScpO1xuICAgICAgICBpZiAodGhpcy5ndWlkZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ot7PovazlnLrmma9cbiAgICAgICAgLy8g5byA5aeL5ri45oiP5LmL5YmNIOWFiOiOt+WPluWFs+WNoeS/oeaBryDlpoLmnpzmsqHmnInlhbPljaHkv6Hmga/kuI3ov5vlhaXmuLjmiI9cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgIC8vIOWIpOaWrVxuICAgICAgICAgICAgaWYoY2Muem0udXNlckluZm8ucG93ZXI8PTApe1xuICAgICAgICAgICAgICAgIC8vIOaYvuekuueci+inhumikeiOt+W+l+S9k+WKm+eVjOmdolxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlZVZpZGVvbGF5ZXIoKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd1NlZVZpZGVvbGF5ZXIoKXtcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDnnIvop4bpopHlvpflpZblirFcbiAgICBzZWVWaWRlb0F3YXJkKCl7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIGFkOmNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvR3Jvd1Bvd2VyXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S6562+5Yiw55WM6Z2iXG4gICAgc2hvd1NpZ25MYXllcigpIHtcbiAgICAgICAgLy8g5YWI6I635Y+W562+5Yiw5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25Jbkxpc3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLnrb7liLDliJfooahcIiwgcmVzKTtcbiAgICAgICAgICAgIGxldCBkYXkgPSAwO1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gaXRlbXNbaV07XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBkYXkgPSBfZGF0YS5kYXk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc2lnbkRheSA9IGRheT4wP2RheToxO1xuICAgICAgICAgICAgLy8gdGhpcy5zaWduRGF5PTA7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGlmIChpIDw9IGRheSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoaSA9PT0gZGF5KzEpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S66K6+572u55WM6Z2iXG4gICAgc2hvd1NldExheWVyKCkge1xuICAgICAgICB0aGlzLlNldExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAvLyBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiKTtcbiAgICAgICAgbGV0IG5pY2tOYW1lID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5pa2VuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIG5pY2tOYW1lLnN0cmluZyA9IHRoaXMudXNlckluZm8ubmlja19uYW1lO1xuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJpZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB1c2VySWQuc3RyaW5nID0gYOeUqOaIt0lE77yaJHt0aGlzLnVzZXJJbmZvLnVzZXJfaWR9YFxuICAgICAgICAvLyBpY29uXG4gICAgICAgIGxldCBpY29uID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB2YXIgcmVtb3RlVXJsID0gdGhpcy51c2VySW5mby5hdmF0YXJfdXJsO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZW1vdGVVcmwsIHtleHQ6Jy5wbmcnfSxmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuS4u+eVjOmdolxuICAgIHNob3dJbmRleExheWVyKCkge1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiYmVnaW5CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYoY2Muem0udXNlckluZm8uc2VjPDApe1xuICAgICAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24sIDEpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKXtcbiAgICAgICAgaWYodGhpcy5jb3VudERvd25UaW1lKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50TGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lLS07XG4gICAgICAgICAgICAgICAgdGltZS5zdHJpbmcgPSB0aGlzLmNoYW5nZVNlY29uZCh0aGlzLmNvdW50RG93blRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrnuqLljIXmsaDnlYzpnaJcbiAgICBzaG93UmVkUG9vbExheWVyKCkge1xuICAgICAgICAvLyDojrflj5blpZbmsaDkv6Hmga9cbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGU8MTA/XCIwXCIrcG9vbEluZm8ubWludXRlOnBvb2xJbmZvLm1pbnV0ZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaYvuekujfml6Xku7vliqHnlYzpnaJcbiAgICBzaG93U2V2ZW5Xb3JrTGF5ZXIoKSB7XG4gICAgICAgIC8vIOeOsOiOt+WPluS4g+aXpeS7u+WKoeWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vIOmAmui/h+aVsOaNruWIneWni+WMlueVjOmdoiDnirbmgIEgMC7mnKrpooblj5YgMS7lt7Lpooblj5ZcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgbGV0IHNpZ25OdW1iZXIgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiOt+WPluiHquW3seeahOaVsOaNriBcbiAgICAgICAgICAgICAgICBsZXQgX3N0YXR1cyA9IGl0ZW1zW2ldLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZighX3N0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25OdW1iZXIgPSBpdGVtc1tpXS5udW07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaWduTnVtYmVyPT09aXRlbXNbaV0ubnVtKXtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0wID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMFwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8xXCIpO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpooblj5bnrb7liLDlpZblirFgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMlwiKTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YKA6K+3JHtfZGF0YS5uZWVkX2ludml0ZX3kuKrlpb3lj4tgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKXtcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgcmVzdW1lTGV2ZWwoKXtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmVzZXRcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHNldmVuV29ya0dldE1vbmV5KGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuadoeS7tuacqui+vuaIkFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHVsbE1pc3Npb25cIiwgXCJQT1NUXCIsIHtpZDp0YXJnZXQuX2lkfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65a2Y6ZKx572Q55WM6Z2iXG4gICAgc2hvd0dldE1vbmV5TGF5ZXIoKSB7XG4gICAgICAgIC8vIOaJk+W8gOWtmOmSsee9kCDojrflj5blrZjpkrHnvZDnmoTkv6Hmga9cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2F2aW5nUG90XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgZ2MgPSBkYXRhLmdjIHx8IDBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5a2Y6ZKx572Q5L+h5oGvPVwiLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIOWFiOWumuS5ieW9k+WJjemCo+S4qumYtuauteaYr+WQpuWPr+S7peaPkOWPllxuICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gMDtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMC4zLCAwLjUsIDEsIDIsIDUsIDEwLCAyMF1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLml0ZW1zW2ldLnRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5a2Y6ZKx572Q55WM6Z2i5bGe5oCnXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmmL7npLrlhYPlrp3kvZnpop1cbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJZdWFuQmFvX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdjO1xuICAgICAgICAgICAgLy8gLy8g5YWD5a6d6Lef546w6YeR6L+b6KGM6L2s5o2iIOi9rOaNouavlOS+i+S4ujEwMDAwOjFcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1vbmV5ID0gZ2MgLyAxMDAwMDtcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFuZ2VfTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5leHRyYWN0TW9uZXkgKyBcIuWFg1wiO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5byA5aeL55qE5pe25YCZZ2V0TW9uZXlCdG7nva7ngbDkuI3lj6/ngrnlh7tcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOeCueWHu+mAieaLqeaPkOeOsOmHkemSseaMiemSrlxuICAgIGNob2ljZUdldE1vbmV5QnRuKGUsIG1zZykge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDngrnlh7vmj5DnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuMShlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5o+Q546wXCIsIHRoaXMuY2hvaWNlQnRuLm1vbmV5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9FeGNoYW5nZVwiLCBcIlBPU1RcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOaIkOWKn+aPkOeOsFxuXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dUaXBzKG1zZykge1xuICAgICAgICBsZXQgdGlwcyA9IGNjLmZpbmQoXCJDYW52YXMvVGlwc1wiKVxuICAgICAgICB0aXBzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRpcHMueSA9IDE0NTtcbiAgICAgICAgbGV0IGxibCA9IHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGJsLnN0cmluZyA9IG1zZztcbiAgICAgICAgY2MudHdlZW4odGlwcykudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygxLCB7IHk6IDMwMCB9KS5kZWxheSgwLjUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc2IuRGV2aWNlKTtcbiAgICAgICAgICAgIC8vIGpzYi5EZXZpY2UudmlicmF0ZSgzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3RCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgdW5TZWxlY3RCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbXBsZXRlQnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcImNvbXBsZXRlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclhpZVlpKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+WNj+iurlwiKTtcbiAgICB9LFxuICAgIC8vIOmakOengeaUv+etllxuICAgIHNob3dVc2VyWWluU2koKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6ZqQ56eB5pS/562WXCIpO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bikge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGhpcy5UdXJudGFibGVMYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1R1cm50YWJsZUxheWVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWz6Zet5b2T5YmN5Lmf6L+b5YWl6aaW6aG1IOWIt+aWsOeVjOmdolxuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6YCA5Ye655m76ZmGXCIpO1xuICAgIH0sXG4gICAgLy8g54K55Ye7562+5Yiw5oyJ6ZKuXG4gICAgY2xpY2tTaWduQnRuKGUpIHtcbiAgICAgICAgLy8g562+5YiwXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIGFkOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gbGV0IHJlcyA9IHtkYXRhOntcbiAgICAgICAgICAgIC8vICAgICBcImRheVwiOjEsXG4gICAgICAgICAgICAvLyAgICAgXCJjYXJkXCI6MSxcbiAgICAgICAgICAgIC8vICAgICBcImdjXCI6MTAwLCAgICAgICAgICAgIH19XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+etvuWIsFwiLCByZXMpO1xuICAgICAgICAgICAgbGV0IHNpZ25EYXkgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIHRoaXMuc2lnbkRheSk7XG4gICAgICAgICAgICB0aGlzLmNvbXBsZXRlQnRuKHNpZ25EYXkpO1xuICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgIGxldCBhcnIgPSBbXCLkuInlhYPnuqLljIVcIixcIueCuOiNr3gxXCIsXCLoja/msLR4MVwiLFwiNTAw5YWD5a6dXCIsXCI4Ljg45YWD57qi5YyFXCIsXCLml7bpkp94MVwiLFwiMTguODjlhYPnuqLljIVcIl1cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheS0xXSxBV0FSRFtcIkRBWV9cIit0aGlzLnNpZ25EYXldLGRhdGEuZ2MsZGF0YS5jYXJkKVxuICAgICAgICB9KS5jYXRjaCgocmVzKT0+e1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuS7iuaXpeWlluWKseW3sumihuWPllwiKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDngrnlh7vkvZPnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuKGUpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vmj5DnjrDmjInpkq5cIik7XG4gICAgICAgIC8vIHRoaXMuc2hvd0dldE1vbmV5TGF5ZXIoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+i9rOebmOW8gOWni+aMiemSrlxuICAgIGNsaWNrVHVyblRhYmxlQnRuKGUpIHtcbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYodGhpcy5jb3VudERvd25UaW1lPjApe1xuICAgICAgICAgICAgLy8g5oq95aWW5YCS6K6h5pe2ID49MCDku6Pooajlj6/ku6Xmir3lpZbvvIw8MCDlj5bnu53lr7nlgLwg5YCS5pWw56eS5pWwXG4gICAgICAgICAgICAvLyB0aGlzLnNob3dUaXBzKFwi5oq95aWW5YCS6K6h5pe2XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFiOWDj+acjeWKoeWZqOWPkemAgeivt+axguiOt+WPlueJqeWTgWlkXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwiYWRcIjogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBcIjFcIjo2MCxcbiAgICAgICAgICAgIFwiMTBcIjoyNDAsXG4gICAgICAgICAgICBcIjExXCI6MTgwLFxuICAgICAgICAgICAgXCIxMlwiOjEyMCxcbiAgICAgICAgICAgIFwiMzFcIjozNjAsXG4gICAgICAgICAgICBcIjMyXCI6MzAwXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeVwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vlvIDlp4vovaznm5hcIiwgcmVzKTtcbiAgICAgICAgICAgIC8vIHRvZG8gdGVzdCDlvZPliY3ovaznm5hpZOaYrzNcbiAgICAgICAgICAgIHRoaXMuZW5kQW5nbGUgPSBvYmpbXCJcIityZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAvLyDlvIDlp4vml4vovawg5Yid5aeL6YCf5bqm5Li6XG4gICAgICAgICAgICB0aGlzLnBvaW50ID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50ZXJcIik7XG4gICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDE4O1xuICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICB0aGlzLmNpcmNsZSA9IDA7XG4gICAgICAgICAgICAvLyB0aGlzLnR1cm5EYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICBcIjFcIjp7bmFtZTpcIuS9k+WKm3gxXCIsaW5kZXg6QVdBUkQuUE9XRVJ9LFxuICAgICAgICAgICAgICAgICAgICBcIjEwXCI6e25hbWU6XCLngrjlvLl4MVwiLGluZGV4OkFXQVJELkJPT019LFxuICAgICAgICAgICAgICAgICAgICBcIjExXCI6e25hbWU6XCLml7bpkp94MVwiLGluZGV4OkFXQVJELkxPQ0t9LFxuICAgICAgICAgICAgICAgICAgICBcIjEyXCI6e25hbWU6XCLnn7PljJbmiYvlhox4MVwiLGluZGV4OkFXQVJELlNIT1VDRX0sXG4gICAgICAgICAgICAgICAgICAgIFwiMzFcIjp7bmFtZTpcIuS6lOWFg+e6ouWMhVwiLGluZGV4OkFXQVJELlJFRF81fSxcbiAgICAgICAgICAgICAgICAgICAgXCIzMlwiOntuYW1lOlwi5Y2B5YWD57qi5YyFXCIsaW5kZXg6QVdBUkQuUkVEXzEwfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgX2F3YXJkID0gYXdhcmRbZGF0YS5hd2FyZF1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsX2F3YXJkLmluZGV4LGRhdGEuZ2MsZGF0YS5jYXJkKVxuICAgICAgICAgICAgfSw0LjUpXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8PSA1ICYmIHRoaXMucG9pbnQuYW5nbGUgPD0gdGhpcy5lbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5UdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IHRoaXMuZW5kQW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWinuWKoOaYvuekuuW8ueWHuuiOt+W+l+eJqeWTgeeahOW8ueeql1xuICAgIC8vIOWlluWTgeexu+WeiyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgc2hvd1BvcChnb29kTmFtZSxnb29kTnVtYmVyLGdjTnVtYmVyLHRleHROdW1iZXIpe1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRleHQuc3RyaW5nID0gYOiOt+W+lyR7Z29vZE5hbWV9YDtcbiAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuQXdhcmRGcmFtZXNbZ29vZE51bWJlcl07XG4gICAgICAgIGxldCBsYXlvdXQxID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzFcIik7XG4gICAgICAgIGxldCBsYXlvdXQyID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzJcIik7XG4gICAgICAgIGlmKGdjTnVtYmVyKXtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsYXlvdXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRleHROdW1iZXIpe1xuICAgICAgICAgICAgbGF5b3V0Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGljb24gPSBsYXlvdXQyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlRleHRGcmFtZXNbdGV4dE51bWJlci0xXTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDpgIDlh7rnmbvpmYZcbiAgICBFeGl0V3hMb2dpbigpe1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDngrnlh7vliqDovb3lub/lkYpcbiAgICBhZFBsYXkoKSB7XG4gICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImxvYWRKaUxpVmlkZW9cIiwgXCIoKVZcIik7XG4gICAgfSxcbn0pO1xuIl19