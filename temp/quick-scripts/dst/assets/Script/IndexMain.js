
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
    // cc.zm.userInfo.win = true;
    cc.audioEngine.stop(this.BGM_ID); //清空关卡数 不清空关卡

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

    var btnCom = cc.find("Canvas/Index/BeginGame").getComponent(cc.Button);

    if (cc.zm.userInfo.win) {
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
    } else {
      btnCom.interactable = true;
    }
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

        var item0 = itemLayout.getChildByName("item_0");
        var item1 = itemLayout.getChildByName("item_1");
        var item2 = itemLayout.getChildByName("item_2");

        if (_data.need_pass_stage) {
          item0.active = true;
          item0.getChildByName("lbl").getComponent(cc.Label).string = "\u901A\u8FC7\u7B2C" + _data.need_pass_stage + "\u5173";
          var arrow = item0.getChildByName("icon").getChildByName("arrow");
          arrow.active = _data.curr_pass_stage >= _data.need_pass_stage;
        } else {
          item0.active = false;
        }

        if (_data.need_sign_in) {
          item1.active = true;
          item1.getChildByName("lbl").getComponent(cc.Label).string = "\u9886\u53D6\u7B7E\u5230\u5956\u52B1";

          var _arrow = item1.getChildByName("icon").getChildByName("arrow");

          _arrow.active = _data.curr_sign_in >= _data.need_sign_in;
        } else {
          item1.active = false;
        }

        if (_data.need_invite) {
          item2.active = true;
          item2.getChildByName("lbl").getComponent(cc.Label).string = "\u9080\u8BF7" + _data.need_invite + "\u4E2A\u597D\u53CB";

          var _arrow2 = item1.getChildByName("icon").getChildByName("arrow");

          _arrow2.active = _data.curr_invite >= _data.need_invite;
        } else {
          item2.active = false;
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
        var btnCom = target.getComponent(cc.Button);
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbImh0dHAiLCJyZXF1aXJlIiwiQVdBUkQiLCJjYyIsIkVudW0iLCJEQVlfMSIsIkRBWV8yIiwiREFZXzMiLCJEQVlfNCIsIkRBWV81IiwiREFZXzYiLCJEQVlfNyIsIlJFRF81IiwiUkVEXzEwIiwiQk9PTSIsIkxPQ0siLCJTSE9VQ0UiLCJQT1dFUiIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkJHTSIsInR5cGUiLCJBdWRpb0NsaXAiLCJTZXZlbkZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiQXdhcmRGcmFtZXMiLCJUZXh0RnJhbWVzIiwib25Mb2FkIiwiem0iLCJzY3JlZW5BZGFwdGVyIiwiZmlyc3RMYXllciIsImZpbmQiLCJhY3RpdmUiLCJfZmlyc3QiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNjaGVkdWxlT25jZSIsInNjYWxlIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiU2V0TGF5ZXIiLCJTaWduTGF5ZXIiLCJUdXJudGFibGVMYXllciIsIkdldE1vbmV0eUxheWVyIiwiU2V2ZW5Xb3JrTGF5ZXIiLCJSZWRQb29sTGF5ZXIiLCJHZXRHb29kTGF5ZXIiLCJTZWVWaWRlb2xheWVyIiwiUmVzdW1lTGF5ZXIiLCJzaG93TXVzaWMiLCJzaG93U2hha2UiLCJjb3VudERvd25UaW1lIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVTaWduRGF0YSIsImRhdGEiLCJzb3J0TGlzdCIsImtleSIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInVzZXJJbmZvIiwic2MxIiwiaGV4X21kNSIsInNpZ24iLCJnZXRVc2VyRWNwbSIsInNlbmREYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYWQiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJTdGFydEdhbWUiLCJzdG9wIiwiTGV2ZWxJbmZvIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwic2hvd1NpZ25MYXllciIsImRheSIsIml0ZW1zIiwiaSIsImxlbmd0aCIsIl9kYXRhIiwic3RhdHVzIiwic2lnbkRheSIsImRheU5vZGUiLCJjb21wbGV0ZUJ0biIsInNlbGVjdEJ0biIsInVuU2VsZWN0QnRuIiwic2hvd1NldExheWVyIiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJ1c2VySWQiLCJ1c2VyX2lkIiwiaWNvbiIsIlNwcml0ZSIsInJlbW90ZVVybCIsImF2YXRhcl91cmwiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwiYnRuQ29tIiwiQnV0dG9uIiwid2luIiwiZW5hYmxlQXV0b0dyYXlFZmZlY3QiLCJpbnRlcmFjdGFibGUiLCJzaG93VHVybnRhYmxlTGF5ZXIiLCJwb2ludCIsImFuZ2xlIiwic2VjIiwiYWJzIiwiVHVyblRhYmxlQ291bnREb3duIiwic2hvd1JlZFBvb2xMYXllciIsInBvb2xJbmZvIiwiYXJyIiwiY29tIiwiYXdhcmRfbGJsIiwiYW1vdW50IiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNpZ25OdW1iZXIiLCJfc3RhdHVzIiwibnVtIiwidGl0bGUiLCJsYXlvdXQiLCJqIiwiX2xheW91dEgiLCJidG4iLCJfaWQiLCJpZCIsImlzQ29tcGxldGUiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2ludml0ZSIsIm5lZWRfaW52aXRlIiwiY29tcGxldGUiLCJyZWQiLCJ2aWRlb1RleHQiLCJuZWVkX2FkIiwiYmFyIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImN1cnJfYWQiLCJiYXJMYmwiLCJpdGVtTGF5b3V0IiwiaXRlbTAiLCJpdGVtMSIsIml0ZW0yIiwiYXJyb3ciLCJzaG93UmVzdW1lTGF5ZXIiLCJyZXN1bWVMZXZlbCIsInNldmVuV29ya0dldE1vbmV5IiwiZSIsInRhcmdldCIsInNob3dUaXBzIiwic2hvd0dldE1vbmV5TGF5ZXIiLCJnZXRNb25leVN0YWdlIiwiTGVuZ3RoIiwidGltZXMiLCJleHRyYWN0TW9uZXkiLCJjaG9pY2VCdG4iLCJjaG9pY2VHZXRNb25leUJ0biIsIm1zZyIsIm1vbmV5IiwiTnVtYmVyIiwiY2xpY2tHZXRNb25leUJ0bjEiLCJsYXllciIsInBhcmVudCIsInRpcHMiLCJzdG9wQWxsQWN0aW9ucyIsInkiLCJsYmwiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJzaG93VXNlclhpZVlpIiwic2hvd1VzZXJZaW5TaSIsIkV4aXRCYWNrQnRuIiwiY2xpY2tTaWduQnRuIiwic2hvd1BvcCIsImNhcmQiLCJjbGlja0dldE1vbmV5QnRuIiwiY2xpY2tUdXJuVGFibGVCdG4iLCJvYmoiLCJlbmRBbmdsZSIsImF3YXJkIiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJuYW1lIiwiaW5kZXgiLCJfYXdhcmQiLCJjcmVhdGVSYW5kbSIsIm4iLCJtIiwiYSIsInJhbmRvbSIsInBhcnNlSW50IiwidXBkYXRlIiwiZHQiLCJnb29kTmFtZSIsImdvb2ROdW1iZXIiLCJnY051bWJlciIsInRleHROdW1iZXIiLCJ0ZXh0IiwibGF5b3V0MSIsImxheW91dDIiLCJFeGl0V3hMb2dpbiIsInd4VG9rZW4iLCJ3eExvZ2luUmVzdWx0Y29kZSIsInJlbW92ZUl0ZW0iLCJhZFBsYXkiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBLElBQU1DLEtBQUssR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDbEJDLEVBQUFBLEtBQUssRUFBRSxDQURXO0FBRWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FGVztBQUdsQkMsRUFBQUEsS0FBSyxFQUFFLENBSFc7QUFJbEJDLEVBQUFBLEtBQUssRUFBRSxDQUpXO0FBS2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FMVztBQU1sQkMsRUFBQUEsS0FBSyxFQUFFLENBTlc7QUFPbEJDLEVBQUFBLEtBQUssRUFBRSxDQVBXO0FBUWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FSVztBQVNsQkMsRUFBQUEsTUFBTSxFQUFDLENBVFc7QUFVbEJDLEVBQUFBLElBQUksRUFBQyxDQVZhO0FBV2xCQyxFQUFBQSxJQUFJLEVBQUMsRUFYYTtBQVlsQkMsRUFBQUEsTUFBTSxFQUFDLEVBWlc7QUFhbEJDLEVBQUFBLEtBQUssRUFBQztBQWJZLENBQVIsQ0FBZDtBQWVBZCxFQUFFLENBQUNlLEtBQUgsQ0FBUztBQUNMLGFBQVNmLEVBQUUsQ0FBQ2dCLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDb0I7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RUFBYztBQUNWRyxNQUFBQSxPQUFPLENBQUN0TyxNQUFSLEdBQWlCLElBQWpCOztBQUNBLFVBQUkwRyxLQUFJLEdBQUc0SCxPQUFPLENBQUN6TSxjQUFSLENBQXVCLE1BQXZCLEVBQStCOEIsWUFBL0IsQ0FBNEN6RixFQUFFLENBQUN5SSxNQUEvQyxDQUFYOztBQUNBRCxNQUFBQSxLQUFJLENBQUNTLFdBQUwsR0FBbUIsS0FBS3pILFVBQUwsQ0FBZ0J5TyxVQUFVLEdBQUMsQ0FBM0IsQ0FBbkI7QUFDSCxLQUpELE1BSUs7QUFDREcsTUFBQUEsT0FBTyxDQUFDdE8sTUFBUixHQUFpQixLQUFqQjtBQUNIO0FBQ0osR0FydUJJO0FBc3VCTDtBQUNBdU8sRUFBQUEsV0F2dUJLLHlCQXV1QlE7QUFDVDtBQUNBclEsSUFBQUEsRUFBRSxDQUFDc1EsT0FBSCxHQUFhLElBQWI7QUFDQXRRLElBQUFBLEVBQUUsQ0FBQ3VRLGlCQUFILEdBQXVCLElBQXZCO0FBQ0F2USxJQUFBQSxFQUFFLENBQUNnQyxHQUFILENBQU9DLFlBQVAsQ0FBb0J1TyxVQUFwQixDQUErQixPQUEvQjtBQUNBeFEsSUFBQUEsRUFBRSxDQUFDd0QsUUFBSCxDQUFZNkQsU0FBWixDQUFzQixPQUF0QjtBQUNILEdBN3VCSTtBQTh1Qkw7QUFDQW9KLEVBQUFBLE1BL3VCSyxvQkErdUJJO0FBQ0xDLElBQUFBLEdBQUcsQ0FBQ0MsVUFBSixDQUFlQyxnQkFBZixDQUFnQyxxQ0FBaEMsRUFBdUUsZUFBdkUsRUFBd0YsS0FBeEY7QUFDSDtBQWp2QkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJIdHRwXCIpO1xuY29uc3QgQVdBUkQgPSBjYy5FbnVtKHtcbiAgICBEQVlfMTogMCxcbiAgICBEQVlfMjogMSxcbiAgICBEQVlfMzogMixcbiAgICBEQVlfNDogMyxcbiAgICBEQVlfNTogNCxcbiAgICBEQVlfNjogNSxcbiAgICBEQVlfNzogNixcbiAgICBSRURfNTogNyxcbiAgICBSRURfMTA6OCxcbiAgICBCT09NOjksXG4gICAgTE9DSzoxMCxcbiAgICBTSE9VQ0U6MTEsXG4gICAgUE9XRVI6MTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/lhbPpl61GUFPpnaLmnb9cbiAgICAgICAgLy8gY2MuZGlyZWN0b3Iuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgY2Muem0gPSB7fTtcbiAgICAgICAgLy8g5aKe5Yqg5bGP5bmV6KeG6aKRXG4gICAgICAgIHRoaXMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXmuLjmiI8g5aaC5p6c56ys5LiA5qyh6L+b5YWl6YKj5LmI5by55Ye6Rmlyc3TlvLnnqpdcbiAgICAgICAgbGV0IGZpcnN0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvRmlyc3QnKTtcbiAgICAgICAgZmlyc3RMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9maXJzdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0XCIpO1xuICAgICAgICBpZighX2ZpcnN0KXtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0XCIsdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgICAgIGZpcnN0TGF5ZXIuc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIGZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihmaXJzdExheWVyKS50bygwLjUse3NjYWxlOjF9KS5zdGFydCgpXG4gICAgICAgICAgICB9LDEpXG4gICAgICAgIH1cbiAgICAgICAgLy/nm5HlkKzlvIDlp4vmuLjmiI9cbiAgICAgICAgLy8g6K6+572u55WM6Z2iXG4gICAgICAgIHRoaXMuU2V0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2V0TGF5ZXInKTtcbiAgICAgICAgLy8g562+5Yiw55WM6Z2iXG4gICAgICAgIHRoaXMuU2lnbkxheWVyID0gY2MuZmluZCgnQ2FudmFzL1NpZ25MYXllcicpO1xuICAgICAgICAvLyDlpKfovaznm5jnlYzpnaJcbiAgICAgICAgdGhpcy5UdXJudGFibGVMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9UdXJudGFibGVMYXllcicpO1xuICAgICAgICAvLyDlrZjpkrHnvZDnlYzpnaIg5o+Q546w5Lmf5piv6L+Z5Liq55WM6Z2iXG4gICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvR2V0TW9uZXlMYXllcicpO1xuICAgICAgICAvLyDkuIPml6Xku7vliqFcbiAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2V2ZW5Xb3JrTGF5ZXJcIik7XG4gICAgICAgIC8vIOWlluaxoOe6ouWMheeVjOmdolxuICAgICAgICB0aGlzLlJlZFBvb2xMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVkUG9vbExheWVyXCIpXG4gICAgICAgIC8vIOiOt+WPlueJqeWTgeeahOW8ueeql1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvR2V0R29vZFwiKVxuICAgICAgICAvLyDnnIvop4bpopHlvpflpZblirHnlYzpnaJcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZWVWaWRlb2xheWVyXCIpXG4gICAgICAgIC8vIOmHjee9ruWFs+WNoeeVjOmdolxuICAgICAgICB0aGlzLlJlc3VtZUxheWVyID0gIGNjLmZpbmQoXCJDYW52YXMvUmVzdW1lTGF5ZXJcIilcbiAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gMDtcbiAgICAgICAgLy8gc3RhcnRCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuU3RhcnRHYW1lLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLkJHTV9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5CR00pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhodHRwLnNlbmRSZXF1ZXN0KTtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma8yXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgZ3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgIT09IFwib3ZlclwiKSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSA9PT0gJzQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNpZ25EYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgc29ydExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9IFwic2lnblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb3J0TGlzdC5zb3J0KCk7XG4gICAgICAgIHZhciBzdHJUb0ppYU1pID0gXCJcIjtcbiAgICAgICAgc29ydExpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzdHJUb0ppYU1pICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyBkYXRhW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBzdHJUb0ppYU1pID0gXCJ0b2tlbj1cIiArIGNjLnptLnVzZXJJbmZvLnNjMSArIHN0clRvSmlhTWk7XG4gICAgICAgIC8vIHZhciBub0ppYU1pID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmnKrliqDlr4bliY09XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHZhciBoZXhfbWQ1ID0gcmVxdWlyZShcIk1ENVwiKVxuICAgICAgICBzdHJUb0ppYU1pID0gaGV4X21kNShzdHJUb0ppYU1pKTtcbiAgICAgICAgZGF0YS5zaWduID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDlr4blkI49XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICBnZXRVc2VyRWNwbSgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJlY3BtXCI6IDEsXG4gICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmNcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDnlKjmiLfnmoRFY3BtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGNjLnptLmFkID0gcmVzLmRhdGEuYWQ7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleExheWVyKCk7XG4gICAgICAgICAgICAvLyDliLfmlrDkuIDkuIvnlKjmiLfnmoRFY3BtXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJFY3BtKCk7XG4gICAgICAgICAgICAvLyDkvZPlipvmmK/lkKblgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuUG93ZXJUaW1lKClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFBvd2VyVGltZSgpe1xuICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIGlmKGNjLnptLnVzZXJJbmZvLnBvd2VyPDUpe1xuICAgICAgICAgICAgLy8g546w5Zyo5omN5Lya5YCS6K6h5pe2XG4gICAgICAgICAgICAvLyDlhYjojrflj5ZcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSwgMSlcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUG93ZXJUaW1lU2NoZWR1bGUoKXtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgICAgICAvLyDlnKjojrflj5bnlKjmiLfkv6Hmga8g5piv5ZCm5L2T5Yqb5ruhIOayoeaciea7oeaOpeedgOWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQoY2Muem0udXNlckluZm8ucG93ZXJfc2VjKTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYy0tXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWGmeS4gOS4queul+azlSDlsIbnp5LmlbDkvKDov5vmnaXnlJ/miJDkuIDkuKowMDowMOW9ouW8j+eahOWtl+espuS4slxuICAgIGNoYW5nZVNlY29uZChzKXtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IFwiMFwiK01hdGguZmxvb3Iocy82MCk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBzJTYwPj0xMD9zJTYwOlwiMFwiK3MlNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZStcIjpcIitzZWNvbmRcbiAgICB9LFxuICAgIGd1aWRlT3ZlcigpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIFwib3ZlclwiKTtcbiAgICB9LFxuICAgIC8vIOiuvue9ruWxj+W5lemAgumFjVxuICAgIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDw9IDcyMCAvIDEyODApIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTdGFydEdhbWUoKSB7XG4gICAgICAgIC8v5YWz6ZetQkdNXG4gICAgICAgIC8vIGNjLnptLnVzZXJJbmZvLndpbiA9IHRydWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5CR01fSUQpO1xuICAgICAgICAvL+a4heepuuWFs+WNoeaVsCDkuI3muIXnqbrlhbPljaFcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGUpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8v6Lez6L2s5Zy65pmvXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+S5i+WJjSDlhYjojrflj5blhbPljaHkv6Hmga8g5aaC5p6c5rKh5pyJ5YWz5Y2h5L+h5oGv5LiN6L+b5YWl5ri45oiPXG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhbPljaHkv6Hmga89XCIsIGNjLnptLkxldmVsSW5mbyk7XG4gICAgICAgICAgICAvLyDliKTmlq1cbiAgICAgICAgICAgIGlmKGNjLnptLnVzZXJJbmZvLnBvd2VyPD0wKXtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrnnIvop4bpopHojrflvpfkvZPlipvnlYzpnaJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWVWaWRlb2xheWVyKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dTZWVWaWRlb2xheWVyKCl7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZCgpe1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBhZDpjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0dyb3dQb3dlclwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuetvuWIsOeVjOmdolxuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWFiOiOt+WPluetvuWIsOWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TaWduSW5MaXN0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi562+5Yiw5YiX6KGoXCIsIHJlcyk7XG4gICAgICAgICAgICBsZXQgZGF5ID0gMDtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2ldO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgZGF5ID0gX2RhdGEuZGF5O1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSBkYXk+MD9kYXk6MTtcbiAgICAgICAgICAgIC8vIHRoaXMuc2lnbkRheT0wO1xuICAgICAgICAgICAgdGhpcy5TaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXlOb2RlID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBpZiAoaSA8PSBkYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKGkgPT09IGRheSsxKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuiuvue9rueVjOmdolxuICAgIHNob3dTZXRMYXllcigpIHtcbiAgICAgICAgdGhpcy5TZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgLy8gaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIik7XG4gICAgICAgIGxldCBuaWNrTmFtZSA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuaWtlbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBuaWNrTmFtZS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLm5pY2tfbmFtZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyaWRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdXNlcklkLnN0cmluZyA9IGDnlKjmiLdJRO+8miR7dGhpcy51c2VySW5mby51c2VyX2lkfWBcbiAgICAgICAgLy8gaWNvblxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IHRoaXMudXNlckluZm8uYXZhdGFyX3VybDtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVtb3RlVXJsLCB7ZXh0OicucG5nJ30sZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrkuLvnlYzpnaJcbiAgICBzaG93SW5kZXhMYXllcigpIHtcbiAgICAgICAgLy8g57qi5YyF55qE5pWw6YePXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvR2V0TW9uZXkvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5yZWRfcGFjaztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnBvd2VyO1xuICAgICAgICAvLyDlhYPlrp3nmoTkuKrmlbBcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9ZdWFuQmFvL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uZ2M7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvR29sZC9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnNjb3JlO1xuICAgICAgICAvLyBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXJcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvQmVnaW5HYW1lXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBpZihjYy56bS51c2VySW5mby53aW4pe1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiYmVnaW5CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYoY2Muem0udXNlckluZm8uc2VjPDApe1xuICAgICAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24sIDEpXG4gICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKXtcbiAgICAgICAgaWYodGhpcy5jb3VudERvd25UaW1lKXtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgICAgIGxldCB0aW1lID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50TGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lLS07XG4gICAgICAgICAgICAgICAgdGltZS5zdHJpbmcgPSB0aGlzLmNoYW5nZVNlY29uZCh0aGlzLmNvdW50RG93blRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrnuqLljIXmsaDnlYzpnaJcbiAgICBzaG93UmVkUG9vbExheWVyKCkge1xuICAgICAgICAvLyDojrflj5blpZbmsaDkv6Hmga9cbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGU8MTA/XCIwXCIrcG9vbEluZm8ubWludXRlOnBvb2xJbmZvLm1pbnV0ZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaYvuekujfml6Xku7vliqHnlYzpnaJcbiAgICBzaG93U2V2ZW5Xb3JrTGF5ZXIoKSB7XG4gICAgICAgIC8vIOeOsOiOt+WPluS4g+aXpeS7u+WKoeWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vIOmAmui/h+aVsOaNruWIneWni+WMlueVjOmdoiDnirbmgIEgMC7mnKrpooblj5YgMS7lt7Lpooblj5ZcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgbGV0IHNpZ25OdW1iZXIgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiOt+WPluiHquW3seeahOaVsOaNriBcbiAgICAgICAgICAgICAgICBsZXQgX3N0YXR1cyA9IGl0ZW1zW2ldLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZighX3N0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgIHNpZ25OdW1iZXIgPSBpdGVtc1tpXS5udW07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZihzaWduTnVtYmVyPT09aXRlbXNbaV0ubnVtKXtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIH0gIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMCA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6aKG5Y+W562+5Yiw5aWW5YqxYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW5cbiAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpgoDor7cke19kYXRhLm5lZWRfaW52aXRlfeS4quWlveWPi2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0xLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZVxuICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKXtcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgcmVzdW1lTGV2ZWwoKXtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmVzZXRcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHNldmVuV29ya0dldE1vbmV5KGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuadoeS7tuacqui+vuaIkFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHVsbE1pc3Npb25cIiwgXCJQT1NUXCIsIHtpZDp0YXJnZXQuX2lkfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSB0YXJnZXQuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlrZjpkrHnvZDnlYzpnaJcbiAgICBzaG93R2V0TW9uZXlMYXllcigpIHtcbiAgICAgICAgLy8g5omT5byA5a2Y6ZKx572QIOiOt+WPluWtmOmSsee9kOeahOS/oeaBr1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TYXZpbmdQb3RcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBnYyA9IGRhdGEuZ2MgfHwgMFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlrZjpkrHnvZDkv6Hmga89XCIsIGRhdGEpO1xuICAgICAgICAgICAgLy8g5YWI5a6a5LmJ5b2T5YmN6YKj5Liq6Zi25q615piv5ZCm5Y+v5Lul5o+Q5Y+WXG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFswLjMsIDAuNSwgMSwgMiwgNSwgMTAsIDIwXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXRlbXNbaV0udGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliJ3lp4vljJblrZjpkrHnvZDnlYzpnaLlsZ7mgKdcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOaYvuekuuWFg+WuneS9meminVxuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIll1YW5CYW9fTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2M7XG4gICAgICAgICAgICAvLyAvLyDlhYPlrp3ot5/njrDph5Hov5vooYzovazmjaIg6L2s5o2i5q+U5L6L5Li6MTAwMDA6MVxuICAgICAgICAgICAgdGhpcy5leHRyYWN0TW9uZXkgPSBnYyAvIDEwMDAwO1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIkNoYW5nZV9OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmV4dHJhY3RNb25leSArIFwi5YWDXCI7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgICAgICAvLyDlvIDlp4vnmoTml7blgJlnZXRNb25leUJ0bue9rueBsOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g54K55Ye76YCJ5oup5o+Q546w6YeR6ZKx5oyJ6ZKuXG4gICAgY2hvaWNlR2V0TW9uZXlCdG4oZSwgbXNnKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+aPkOeOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4xKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOW8gOWni+aPkOeOsOmHkemSsVxuICAgICAgICAgICAgLy8g5Yik5pat5p2h5Lu2IDEgIOaYr+WQpuWFg+WuneaVsOmHj+aYr+WQpua7oei2s+aPkOeOsOaho+S9je+8jOS4jea7oei2s+aXtuaPkOekuu+8muWFg+WuneaVsOmHj+S4jei2s1xuICAgICAgICAgICAgLy8g5Yik5pat5p2h5Lu2IDIgIOaho+S9jeaYr+WQpuS4uuacgOWwj+aho+S9je+8jOWmguaenOS4jeaYr+aPkOekuu+8muivt+WFiOWujOaIkOS4iuS4gOS4quaho+S9jeaPkOeOsFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlvIDlp4vmj5DnjrBcIiwgdGhpcy5jaG9pY2VCdG4ubW9uZXkpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXh0cmFjdE1vbmV5IDwgdGhpcy5jaG9pY2VCdG4ubW9uZXkpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YxIOW8ueWHuuWFg+WuneaVsOmHj+S4jei2s+eahHRpcHNcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi5YWD5a6d5pWw6YeP5LiN6LazXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bi5tb25leSA+IHRoaXMuZ2V0TW9uZXlTdGFnZSkge1xuICAgICAgICAgICAgICAgIC8vIOS4jeespuWQiOadoeS7tjIgXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuivt+WFiOWujOaIkOS4iuS4gOS4quaho+S9jeaPkOeOsFwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDpg73nrKblkIjmnaHku7blg4/mnI3liqHlmajlj5HpgIHor7fmsYJcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0V4Y2hhbmdlXCIsIFwiUE9TVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5oiQ5Yqf5o+Q546wXG5cbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSB0YXJnZXQucGFyZW50LmdldENoaWxkQnlOYW1lKFwiZ2V0TGF5ZXJcIik7XG4gICAgICAgICAgICAgICAgbGF5ZXIuYWN0aXZlID0gdHJ1ZTtcblxuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd1RpcHMobXNnKSB7XG4gICAgICAgIGxldCB0aXBzID0gY2MuZmluZChcIkNhbnZhcy9UaXBzXCIpXG4gICAgICAgIHRpcHMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgdGlwcy55ID0gMTQ1O1xuICAgICAgICBsZXQgbGJsID0gdGlwcy5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsYmwuc3RyaW5nID0gbXNnO1xuICAgICAgICBjYy50d2Vlbih0aXBzKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLnRvKDEsIHsgeTogMzAwIH0pLmRlbGF5KDAuNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLy8g5YWz6Zet6Z+z5LmQXG4gICAgc3RvcEJHTShldmVudCkge1xuICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBhdXNlKHRoaXMuQkdNX0lEKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dNdXNpYyA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucmVzdW1lKHRoaXMuQkdNX0lEKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5YWz6Zet6ZyH5YqoXG4gICAgc2hha2VQaG9uZShldmVudCkge1xuICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKGpzYi5EZXZpY2UpO1xuICAgICAgICAgICAgLy8ganNiLkRldmljZS52aWJyYXRlKDMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICB1blNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcGxldGVCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwiY29tcGxldGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeUqOaIt+WNj+iurlxuICAgIHNob3dVc2VyWGllWWkoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi55So5oi35Y2P6K6uXCIpO1xuICAgIH0sXG4gICAgLy8g6ZqQ56eB5pS/562WXG4gICAgc2hvd1VzZXJZaW5TaSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLpmpDnp4HmlL/nrZZcIik7XG4gICAgfSxcbiAgICAvLyDpgIDlh7rnmbvpmYZcbiAgICBFeGl0QmFja0J0bihlKSB7XG4gICAgICAgIGUudGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuKSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZT09PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlhbPpl63lvZPliY3kuZ/ov5vlhaXpppbpobUg5Yi35paw55WM6Z2iXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLpgIDlh7rnmbvpmYZcIik7XG4gICAgfSxcbiAgICAvLyDngrnlh7vnrb7liLDmjInpkq5cbiAgICBjbGlja1NpZ25CdG4oZSkge1xuICAgICAgICAvLyDnrb7liLBcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBsZXQgcmVzID0ge2RhdGE6e1xuICAgICAgICAgICAgLy8gICAgIFwiZGF5XCI6MSxcbiAgICAgICAgICAgIC8vICAgICBcImNhcmRcIjoxLFxuICAgICAgICAgICAgLy8gICAgIFwiZ2NcIjoxMDAsICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Ye7562+5YiwXCIsIHJlcyk7XG4gICAgICAgICAgICBsZXQgc2lnbkRheSA9IHRoaXMuU2lnbkxheWVyLmdldENoaWxkQnlOYW1lKFwiZGF5X1wiICsgdGhpcy5zaWduRGF5KTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAvLyBkYXRh5pWw5o2uIGdj5aWW5Yqx5YWD5a6dIGNhcmQgMOacquiOt+W+lyAx5byALDLlv4MsM+efv1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcIuS4ieWFg+e6ouWMhVwiLFwi54K46I2veDFcIixcIuiNr+awtHgxXCIsXCI1MDDlhYPlrp1cIixcIjguODjlhYPnuqLljIVcIixcIuaXtumSn3gxXCIsXCIxOC44OOWFg+e6ouWMhVwiXVxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcChhcnJbdGhpcy5zaWduRGF5LTFdLEFXQVJEW1wiREFZX1wiK3RoaXMuc2lnbkRheV0sZGF0YS5nYyxkYXRhLmNhcmQpXG4gICAgICAgIH0pLmNhdGNoKChyZXMpPT57XG4gICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+S9k+eOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4oZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+aPkOeOsOaMiemSrlwiKTtcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0TW9uZXlMYXllcigpO1xuICAgIH0sXG4gICAgLy8g54K55Ye76L2s55uY5byA5aeL5oyJ6ZKuXG4gICAgY2xpY2tUdXJuVGFibGVCdG4oZSkge1xuICAgICAgICAvLyDmr4/nnIvkuIDmrKHop4bpopHlj6/ojrflvpfkuIDmrKHmir3lpZbmnLrkvJrvvIzmr4/mrKHmir3lpZblhrfljbTml7bpl7TkuLo15YiG6ZKfIOWGt+WNtOaXtumXtOiuqeacjeWKoeWZqOWBmlxuICAgICAgICBpZih0aGlzLmNvdW50RG93blRpbWU+MCl7XG4gICAgICAgICAgICAvLyDmir3lpZblgJLorqHml7YgPj0wIOS7o+ihqOWPr+S7peaKveWllu+8jDwwIOWPlue7neWvueWAvCDlgJLmlbDnp5LmlbBcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd1RpcHMoXCLmir3lpZblgJLorqHml7ZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIC8vIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIFwiMVwiOjYwLFxuICAgICAgICAgICAgXCIxMFwiOjI0MCxcbiAgICAgICAgICAgIFwiMTFcIjoxODAsXG4gICAgICAgICAgICBcIjEyXCI6MTIwLFxuICAgICAgICAgICAgXCIzMVwiOjM2MCxcbiAgICAgICAgICAgIFwiMzJcIjozMDBcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5XCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+W8gOWni+i9rOebmFwiLCByZXMpO1xuICAgICAgICAgICAgLy8gdG9kbyB0ZXN0IOW9k+WJjei9rOebmGlk5pivM1xuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZSA9IG9ialtcIlwiK3Jlcy5kYXRhLmF3YXJkXTtcbiAgICAgICAgICAgIC8vIOW8gOWni+aXi+i9rCDliJ3lp4vpgJ/luqbkuLpcbiAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5UdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlID0gMDtcbiAgICAgICAgICAgIC8vIHRoaXMudHVybkRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpPT57XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICBsZXQgYXdhcmQgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiMVwiOntuYW1lOlwi5L2T5YqbeDFcIixpbmRleDpBV0FSRC5QT1dFUn0sXG4gICAgICAgICAgICAgICAgICAgIFwiMTBcIjp7bmFtZTpcIueCuOW8uXgxXCIsaW5kZXg6QVdBUkQuQk9PTX0sXG4gICAgICAgICAgICAgICAgICAgIFwiMTFcIjp7bmFtZTpcIuaXtumSn3gxXCIsaW5kZXg6QVdBUkQuTE9DS30sXG4gICAgICAgICAgICAgICAgICAgIFwiMTJcIjp7bmFtZTpcIuefs+WMluaJi+WGjHgxXCIsaW5kZXg6QVdBUkQuU0hPVUNFfSxcbiAgICAgICAgICAgICAgICAgICAgXCIzMVwiOntuYW1lOlwi5LqU5YWD57qi5YyFXCIsaW5kZXg6QVdBUkQuUkVEXzV9LFxuICAgICAgICAgICAgICAgICAgICBcIjMyXCI6e25hbWU6XCLljYHlhYPnuqLljIVcIixpbmRleDpBV0FSRC5SRURfMTB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcChfYXdhcmQubmFtZSxfYXdhcmQuaW5kZXgsZGF0YS5nYyxkYXRhLmNhcmQpXG4gICAgICAgICAgICB9LDQuNSlcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmVnaW5UdXJuKSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vml4vovaxcbiAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50LmFuZ2xlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlKys7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaXJjbGUgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOadoeS7tui+vuaIkCDooajnpLrovazkuobkuKTlnIhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gNC41KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gNC41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSArPSAxLjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDw9IDUgJiYgdGhpcy5wb2ludC5hbmdsZSA8PSB0aGlzLmVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gdGhpcy5lbmRBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5aKe5Yqg5pi+56S65by55Ye66I635b6X54mp5ZOB55qE5by556qXXG4gICAgLy8g5aWW5ZOB57G75Z6LIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICBzaG93UG9wKGdvb2ROYW1lLGdvb2ROdW1iZXIsZ2NOdW1iZXIsdGV4dE51bWJlcil7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGV4dC5zdHJpbmcgPSBg6I635b6XJHtnb29kTmFtZX1gO1xuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Bd2FyZEZyYW1lc1tnb29kTnVtYmVyXTtcbiAgICAgICAgbGV0IGxheW91dDEgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMVwiKTtcbiAgICAgICAgbGV0IGxheW91dDIgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgaWYoZ2NOdW1iZXIpe1xuICAgICAgICAgICAgbGF5b3V0MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxibCA9IGxheW91dDEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg6I635b6X5YWD5a6dKyR7Z2NOdW1iZXJ9YFxuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYodGV4dE51bWJlcil7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheW91dDIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuVGV4dEZyYW1lc1t0ZXh0TnVtYmVyLTFdO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCl7XG4gICAgICAgIC8vIOa4heaOiXRva2VuXG4gICAgICAgIGNjLnd4VG9rZW4gPSBudWxsO1xuICAgICAgICBjYy53eExvZ2luUmVzdWx0Y29kZSA9IG51bGw7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2dpblwiKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+WKoOi9veW5v+WRilxuICAgIGFkUGxheSgpIHtcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwibG9hZEppTGlWaWRlb1wiLCBcIigpVlwiKTtcbiAgICB9LFxufSk7XG4iXX0=