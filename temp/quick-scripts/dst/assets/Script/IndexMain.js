
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
      var items = res.data.items;
      _this4.signDay = res.data.day;
      _this4.SignLayer.active = true;

      for (var i = 1; i <= 7; i++) {
        var dayNode = _this4.SignLayer.getChildByName("day_" + i);

        var _data = items[i - 1];

        if (_data.status) {
          _this4.completeBtn(dayNode);
        } else {
          if (i === _this4.signDay) {
            _this4.selectBtn(dayNode);
          } else {
            _this4.unSelectBtn(dayNode);
          }
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
      var serverDay = res.data.day;
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

      if (signNumber > serverDay) {
        signNumber = serverDay;
      }

      for (var _i = 0; _i < items.length; _i++) {
        if (signNumber === items[_i].num) {
          arr.push(items[_i]);
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
  },
  // 显示用户协议
  showUserProtocol: function showUserProtocol() {
    var protocol = this.SetLayer.getChildByName("user_protocol");
    protocol.active = true;
  },
  hideUserProtocol: function hideUserProtocol() {
    var protocol = this.SetLayer.getChildByName("user_protocol");
    protocol.active = false;
  },
  // 显示隐私政策
  showUserPrivacy: function showUserPrivacy() {
    var protocol = this.SetLayer.getChildByName("user_privacy"); // 设置用户协议

    protocol.active = true;
  },
  hideUserPrivacy: function hideUserPrivacy() {
    var protocol = this.SetLayer.getChildByName("user_privacy");
    protocol.active = false;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbImh0dHAiLCJyZXF1aXJlIiwiQVdBUkQiLCJjYyIsIkVudW0iLCJEQVlfMSIsIkRBWV8yIiwiREFZXzMiLCJEQVlfNCIsIkRBWV81IiwiREFZXzYiLCJEQVlfNyIsIlJFRF81IiwiUkVEXzEwIiwiQk9PTSIsIkxPQ0siLCJTSE9VQ0UiLCJQT1dFUiIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkJHTSIsInR5cGUiLCJBdWRpb0NsaXAiLCJTZXZlbkZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiQXdhcmRGcmFtZXMiLCJUZXh0RnJhbWVzIiwib25Mb2FkIiwiem0iLCJzY3JlZW5BZGFwdGVyIiwiZmlyc3RMYXllciIsImZpbmQiLCJhY3RpdmUiLCJfZmlyc3QiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJnZXRJdGVtIiwic2V0SXRlbSIsInNjaGVkdWxlT25jZSIsInNjYWxlIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiU2V0TGF5ZXIiLCJTaWduTGF5ZXIiLCJUdXJudGFibGVMYXllciIsIkdldE1vbmV0eUxheWVyIiwiU2V2ZW5Xb3JrTGF5ZXIiLCJSZWRQb29sTGF5ZXIiLCJHZXRHb29kTGF5ZXIiLCJTZWVWaWRlb2xheWVyIiwiUmVzdW1lTGF5ZXIiLCJzaG93TXVzaWMiLCJzaG93U2hha2UiLCJjb3VudERvd25UaW1lIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwiZ2V0VXNlckluZm8iLCJjcmVhdGVTaWduRGF0YSIsImRhdGEiLCJzb3J0TGlzdCIsImtleSIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInVzZXJJbmZvIiwic2MxIiwiaGV4X21kNSIsInNpZ24iLCJnZXRVc2VyRWNwbSIsInNlbmREYXRhIiwiRGF0ZSIsImdldFRpbWUiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJjb25zb2xlIiwibG9nIiwiYWQiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJTdGFydEdhbWUiLCJzdG9wIiwiTGV2ZWxJbmZvIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwic2hvd1NpZ25MYXllciIsIml0ZW1zIiwic2lnbkRheSIsImRheSIsImkiLCJkYXlOb2RlIiwiX2RhdGEiLCJzdGF0dXMiLCJjb21wbGV0ZUJ0biIsInNlbGVjdEJ0biIsInVuU2VsZWN0QnRuIiwic2hvd1NldExheWVyIiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJ1c2VySWQiLCJ1c2VyX2lkIiwiaWNvbiIsIlNwcml0ZSIsInJlbW90ZVVybCIsImF2YXRhcl91cmwiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwiYnRuQ29tIiwiQnV0dG9uIiwid2luIiwiZW5hYmxlQXV0b0dyYXlFZmZlY3QiLCJpbnRlcmFjdGFibGUiLCJzaG93VHVybnRhYmxlTGF5ZXIiLCJwb2ludCIsImFuZ2xlIiwic2VjIiwiYWJzIiwiVHVyblRhYmxlQ291bnREb3duIiwic2hvd1JlZFBvb2xMYXllciIsInBvb2xJbmZvIiwiYXJyIiwiY29tIiwiYXdhcmRfbGJsIiwiYW1vdW50IiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNlcnZlckRheSIsInNpZ25OdW1iZXIiLCJsZW5ndGgiLCJfc3RhdHVzIiwibnVtIiwidGl0bGUiLCJsYXlvdXQiLCJqIiwiX2xheW91dEgiLCJidG4iLCJfaWQiLCJpZCIsImlzQ29tcGxldGUiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2ludml0ZSIsIm5lZWRfaW52aXRlIiwiY29tcGxldGUiLCJyZWQiLCJ2aWRlb1RleHQiLCJuZWVkX2FkIiwiYmFyIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImN1cnJfYWQiLCJiYXJMYmwiLCJpdGVtTGF5b3V0IiwiaXRlbTAiLCJpdGVtMSIsIml0ZW0yIiwiYXJyb3ciLCJzaG93UmVzdW1lTGF5ZXIiLCJyZXN1bWVMZXZlbCIsInNldmVuV29ya0dldE1vbmV5IiwiZSIsInRhcmdldCIsInNob3dUaXBzIiwic2hvd0dldE1vbmV5TGF5ZXIiLCJnZXRNb25leVN0YWdlIiwiTGVuZ3RoIiwidGltZXMiLCJleHRyYWN0TW9uZXkiLCJjaG9pY2VCdG4iLCJjaG9pY2VHZXRNb25leUJ0biIsIm1zZyIsIm1vbmV5IiwiTnVtYmVyIiwiY2xpY2tHZXRNb25leUJ0bjEiLCJsYXllciIsInBhcmVudCIsInRpcHMiLCJzdG9wQWxsQWN0aW9ucyIsInkiLCJsYmwiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJzaG93VXNlclhpZVlpIiwic2hvd1VzZXJZaW5TaSIsIkV4aXRCYWNrQnRuIiwiY2xpY2tTaWduQnRuIiwic2hvd1BvcCIsImNhcmQiLCJjbGlja0dldE1vbmV5QnRuIiwiY2xpY2tUdXJuVGFibGVCdG4iLCJvYmoiLCJlbmRBbmdsZSIsImF3YXJkIiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJuYW1lIiwiaW5kZXgiLCJfYXdhcmQiLCJjcmVhdGVSYW5kbSIsIm4iLCJtIiwiYSIsInJhbmRvbSIsInBhcnNlSW50IiwidXBkYXRlIiwiZHQiLCJnb29kTmFtZSIsImdvb2ROdW1iZXIiLCJnY051bWJlciIsInRleHROdW1iZXIiLCJ0ZXh0IiwibGF5b3V0MSIsImxheW91dDIiLCJFeGl0V3hMb2dpbiIsInd4VG9rZW4iLCJ3eExvZ2luUmVzdWx0Y29kZSIsInJlbW92ZUl0ZW0iLCJhZFBsYXkiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElBQUksRUFBRW5CLEVBQUUsQ0FBQ29CO0FBRlIsS0FERztBQUtSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEYsTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDc0IsV0FEQTtBQUVULGlCQUFTO0FBRkEsS0FMTDtBQVNSQyxJQUFBQSxXQUFXLEVBQUU7QUFDVEosTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDc0IsV0FEQTtBQUVULGlCQUFTO0FBRkEsS0FUTDtBQWFSRSxJQUFBQSxVQUFVLEVBQUU7QUFDUkwsTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDc0IsV0FERDtBQUVSLGlCQUFTO0FBRkQ7QUFiSixHQUhQO0FBc0JMO0FBRUFHLEVBQUFBLE1BeEJLLG9CQXdCSTtBQUNMO0FBQ0E7QUFDQXpCLElBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsR0FBUSxFQUFSLENBSEssQ0FJTDs7QUFDQSxTQUFLQyxhQUFMLEdBTEssQ0FNTDs7QUFDQSxRQUFJQyxVQUFVLEdBQUc1QixFQUFFLENBQUM2QixJQUFILENBQVEsY0FBUixDQUFqQjtBQUNBRCxJQUFBQSxVQUFVLENBQUNFLE1BQVgsR0FBb0IsS0FBcEI7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHL0IsRUFBRSxDQUFDZ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQUFiOztBQUNBLFFBQUksQ0FBQ0gsTUFBTCxFQUFhO0FBQ1QvQixNQUFBQSxFQUFFLENBQUNnQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLElBQXJDO0FBQ0EsV0FBS0MsWUFBTCxDQUFrQixZQUFNO0FBQ3BCUixRQUFBQSxVQUFVLENBQUNTLEtBQVgsR0FBbUIsQ0FBbkI7QUFDQVQsUUFBQUEsVUFBVSxDQUFDRSxNQUFYLEdBQW9CLElBQXBCO0FBQ0E5QixRQUFBQSxFQUFFLENBQUNzQyxLQUFILENBQVNWLFVBQVQsRUFBcUJXLEVBQXJCLENBQXdCLEdBQXhCLEVBQTZCO0FBQUVGLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQTdCLEVBQTJDRyxLQUEzQztBQUNILE9BSkQsRUFJRyxDQUpIO0FBS0gsS0FqQkksQ0FrQkw7QUFDQTs7O0FBQ0EsU0FBS0MsUUFBTCxHQUFnQnpDLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxpQkFBUixDQUFoQixDQXBCSyxDQXFCTDs7QUFDQSxTQUFLYSxTQUFMLEdBQWlCMUMsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLGtCQUFSLENBQWpCLENBdEJLLENBdUJMOztBQUNBLFNBQUtjLGNBQUwsR0FBc0IzQyxFQUFFLENBQUM2QixJQUFILENBQVEsdUJBQVIsQ0FBdEIsQ0F4QkssQ0F5Qkw7O0FBQ0EsU0FBS2UsY0FBTCxHQUFzQjVDLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxzQkFBUixDQUF0QixDQTFCSyxDQTJCTDs7QUFDQSxTQUFLZ0IsY0FBTCxHQUFzQjdDLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSx1QkFBUixDQUF0QixDQTVCSyxDQTZCTDs7QUFDQSxTQUFLaUIsWUFBTCxHQUFvQjlDLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxxQkFBUixDQUFwQixDQTlCSyxDQStCTDs7QUFDQSxTQUFLa0IsWUFBTCxHQUFvQi9DLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxnQkFBUixDQUFwQixDQWhDSyxDQWlDTDs7QUFDQSxTQUFLbUIsYUFBTCxHQUFxQmhELEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxzQkFBUixDQUFyQixDQWxDSyxDQW1DTDs7QUFDQSxTQUFLb0IsV0FBTCxHQUFtQmpELEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxvQkFBUixDQUFuQjtBQUNBN0IsSUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNd0IsU0FBTixHQUFrQixJQUFsQjtBQUNBbEQsSUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNeUIsU0FBTixHQUFrQixJQUFsQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBckIsQ0F2Q0ssQ0F3Q0w7O0FBQ0EsU0FBS0MsTUFBTCxHQUFjckQsRUFBRSxDQUFDc0QsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUtyQyxHQUF6QixDQUFkLENBekNLLENBMENMO0FBQ0E7O0FBQ0FsQixJQUFBQSxFQUFFLENBQUN3RCxRQUFILENBQVlDLFlBQVosQ0FBeUIsTUFBekIsRUE1Q0ssQ0E2Q0w7O0FBQ0EsUUFBSUMsS0FBSyxHQUFHMUQsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLGNBQVIsQ0FBWjtBQUNBNkIsSUFBQUEsS0FBSyxDQUFDNUIsTUFBTixHQUFlLEtBQWY7QUFDQTRCLElBQUFBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixTQUFyQixFQUFnQzdCLE1BQWhDLEdBQXlDLEtBQXpDO0FBQ0E0QixJQUFBQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsU0FBckIsRUFBZ0M3QixNQUFoQyxHQUF5QyxLQUF6Qzs7QUFDQSxRQUFJOUIsRUFBRSxDQUFDZ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixNQUF5QyxNQUE3QyxFQUFxRDtBQUNqRCxVQUFJLENBQUNsQyxFQUFFLENBQUNnQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLENBQUwsRUFBMkM7QUFDdkMsYUFBS3dCLEtBQUwsR0FBYSxJQUFiO0FBQ0FBLFFBQUFBLEtBQUssQ0FBQzVCLE1BQU4sR0FBZSxJQUFmO0FBQ0E0QixRQUFBQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsU0FBckIsRUFBZ0M3QixNQUFoQyxHQUF5QyxJQUF6QztBQUNIOztBQUNELFVBQUk5QixFQUFFLENBQUNnQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLE1BQXlDLEdBQTdDLEVBQWtEO0FBQzlDLGFBQUt3QixLQUFMLEdBQWEsS0FBYjtBQUNBQSxRQUFBQSxLQUFLLENBQUM1QixNQUFOLEdBQWUsSUFBZjtBQUNBNEIsUUFBQUEsS0FBSyxDQUFDQyxjQUFOLENBQXFCLFNBQXJCLEVBQWdDN0IsTUFBaEMsR0FBeUMsSUFBekM7QUFDSDtBQUNKLEtBN0RJLENBOERMOzs7QUFDQSxTQUFLOEIsV0FBTDtBQUNILEdBeEZJO0FBeUZMQyxFQUFBQSxjQUFjLEVBQUUsd0JBQVVDLElBQVYsRUFBZ0I7QUFDNUIsUUFBSUMsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJQyxHQUFULElBQWdCRixJQUFoQixFQUFzQjtBQUNsQixVQUFJQSxJQUFJLENBQUNHLGNBQUwsQ0FBb0JELEdBQXBCLEtBQTRCQSxHQUFHLElBQUksTUFBdkMsRUFBK0M7QUFDM0MsWUFBSUUsS0FBSyxHQUFHSixJQUFJLENBQUNFLEdBQUQsQ0FBaEI7QUFDQSxZQUFJRyxJQUFJLEdBQUcsRUFBWDtBQUNBQSxRQUFBQSxJQUFJLENBQUNILEdBQUwsR0FBV0EsR0FBWDtBQUNBRyxRQUFBQSxJQUFJLENBQUNELEtBQUwsR0FBYUEsS0FBYjtBQUNBSCxRQUFBQSxRQUFRLENBQUNLLElBQVQsQ0FBY0osR0FBZDtBQUNIO0FBQ0o7O0FBQ0RELElBQUFBLFFBQVEsQ0FBQ00sSUFBVDtBQUNBLFFBQUlDLFVBQVUsR0FBRyxFQUFqQjtBQUNBUCxJQUFBQSxRQUFRLENBQUNRLE9BQVQsQ0FBaUIsVUFBVVAsR0FBVixFQUFlO0FBQzVCTSxNQUFBQSxVQUFVLElBQUksTUFBTU4sR0FBTixHQUFZLEdBQVosR0FBa0JGLElBQUksQ0FBQ0UsR0FBRCxDQUFwQztBQUNILEtBRkQsRUFFRyxJQUZIO0FBR0FNLElBQUFBLFVBQVUsR0FBRyxXQUFXdEUsRUFBRSxDQUFDMEIsRUFBSCxDQUFNOEMsUUFBTixDQUFlQyxHQUExQixHQUFnQ0gsVUFBN0MsQ0FoQjRCLENBaUI1QjtBQUNBOztBQUNBLFFBQUlJLE9BQU8sR0FBRzVFLE9BQU8sQ0FBQyxLQUFELENBQXJCOztBQUNBd0UsSUFBQUEsVUFBVSxHQUFHSSxPQUFPLENBQUNKLFVBQUQsQ0FBcEI7QUFDQVIsSUFBQUEsSUFBSSxDQUFDYSxJQUFMLEdBQVlMLFVBQVosQ0FyQjRCLENBc0I1Qjs7QUFDQSxXQUFPUixJQUFQO0FBRUgsR0FsSEk7QUFtSExjLEVBQUFBLFdBbkhLLHlCQW1IUztBQUNWLFFBQUlDLFFBQVEsR0FBRztBQUNYLGNBQVEsQ0FERztBQUVYLFlBQU0sSUFBSUMsSUFBSixHQUFXQyxPQUFYLEVBRkssQ0FFZTs7QUFGZixLQUFmO0FBSUEsUUFBSWpCLElBQUksR0FBRyxLQUFLRCxjQUFMLENBQW9CZ0IsUUFBcEIsQ0FBWDtBQUNBaEYsSUFBQUEsSUFBSSxDQUFDbUYsV0FBTCxDQUFpQixrQkFBakIsRUFBcUMsTUFBckMsRUFBNkNsQixJQUE3QyxFQUFtRG1CLElBQW5ELENBQXdELFVBQUNDLEdBQUQsRUFBUztBQUM3REMsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksV0FBWixFQUF5QkYsR0FBRyxDQUFDcEIsSUFBN0I7QUFDQTlELE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTTJELEVBQU4sR0FBV0gsR0FBRyxDQUFDcEIsSUFBSixDQUFTdUIsRUFBcEI7QUFDSCxLQUhEO0FBSUgsR0E3SEk7QUE4SEx6QixFQUFBQSxXQTlISyx5QkE4SFM7QUFBQTs7QUFDVixRQUFJaUIsUUFBUSxHQUFHLEVBQWY7QUFDQWhGLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIsd0JBQWpCLEVBQTJDLEtBQTNDLEVBQWtESCxRQUFsRCxFQUE0REksSUFBNUQsQ0FBaUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RFLE1BQUEsS0FBSSxDQUFDVixRQUFMLEdBQWdCVSxHQUFHLENBQUNwQixJQUFwQjtBQUNBOUQsTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNOEMsUUFBTixHQUFpQixLQUFJLENBQUNBLFFBQXRCLENBRnNFLENBR3RFOztBQUNBLE1BQUEsS0FBSSxDQUFDYyxjQUFMLEdBSnNFLENBS3RFOzs7QUFDQSxNQUFBLEtBQUksQ0FBQ1YsV0FBTCxHQU5zRSxDQU90RTs7O0FBQ0EsTUFBQSxLQUFJLENBQUNXLFNBQUw7QUFDSCxLQVREO0FBVUgsR0ExSUk7QUEySUxBLEVBQUFBLFNBM0lLLHVCQTJJTztBQUNSLFFBQUlDLElBQUksR0FBR3hGLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSx5QkFBUixFQUFtQzRELFlBQW5DLENBQWdEekYsRUFBRSxDQUFDMEYsS0FBbkQsQ0FBWDs7QUFDQSxRQUFJMUYsRUFBRSxDQUFDMEIsRUFBSCxDQUFNOEMsUUFBTixDQUFlbUIsS0FBZixHQUF1QixDQUEzQixFQUE4QjtBQUMxQjtBQUNBO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEtBQUtDLGlCQUFuQixFQUFzQyxDQUF0QztBQUNILEtBSkQsTUFJTztBQUNITCxNQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxPQUFkO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQixLQUFLRixpQkFBckI7QUFDSDtBQUNKLEdBckpJO0FBc0pMQSxFQUFBQSxpQkF0SkssK0JBc0plO0FBQ2hCLFFBQUk3RixFQUFFLENBQUMwQixFQUFILENBQU04QyxRQUFOLENBQWV3QixTQUFmLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CLFdBQUtELFVBQUwsQ0FBZ0IsS0FBS0YsaUJBQXJCLEVBRCtCLENBRS9COztBQUNBLFdBQUtqQyxXQUFMO0FBQ0gsS0FKRCxNQUlPO0FBQ0g7QUFDQSxVQUFJNEIsSUFBSSxHQUFHeEYsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLHlCQUFSLEVBQW1DNEQsWUFBbkMsQ0FBZ0R6RixFQUFFLENBQUMwRixLQUFuRCxDQUFYO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLEtBQUtHLFlBQUwsQ0FBa0JqRyxFQUFFLENBQUMwQixFQUFILENBQU04QyxRQUFOLENBQWV3QixTQUFqQyxDQUFkO0FBQ0FoRyxNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU04QyxRQUFOLENBQWV3QixTQUFmO0FBQ0g7QUFDSixHQWpLSTtBQWtLTDtBQUNBQyxFQUFBQSxZQW5LSyx3QkFtS1FDLENBbktSLEVBbUtXO0FBQ1osUUFBSUMsTUFBTSxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLEdBQUcsRUFBZixDQUFuQjtBQUNBLFFBQUlJLE1BQU0sR0FBR0osQ0FBQyxHQUFHLEVBQUosSUFBVSxFQUFWLEdBQWVBLENBQUMsR0FBRyxFQUFuQixHQUF3QixNQUFNQSxDQUFDLEdBQUcsRUFBL0M7QUFDQSxXQUFPQyxNQUFNLEdBQUcsR0FBVCxHQUFlRyxNQUF0QjtBQUNILEdBdktJO0FBd0tMQyxFQUFBQSxTQXhLSyx1QkF3S087QUFDUnZHLElBQUFBLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxjQUFSLEVBQXdCQyxNQUF4QixHQUFpQyxLQUFqQztBQUNBOUIsSUFBQUEsRUFBRSxDQUFDZ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9CRSxPQUFwQixDQUE0QixPQUE1QixFQUFxQyxNQUFyQztBQUNILEdBM0tJO0FBNEtMO0FBQ0FSLEVBQUFBLGFBN0tLLDJCQTZLVztBQUNaLFFBQUk2RSxNQUFNLEdBQUd4RyxFQUFFLENBQUM2QixJQUFILENBQVEsUUFBUixFQUFrQjRELFlBQWxCLENBQStCekYsRUFBRSxDQUFDeUcsTUFBbEMsQ0FBYjtBQUNBLFFBQUlDLE9BQU8sR0FBRzFHLEVBQUUsQ0FBQzJHLElBQUgsQ0FBUUMsY0FBUixFQUFkOztBQUVBLFFBQUlGLE9BQU8sQ0FBQ0csTUFBUixHQUFpQkgsT0FBTyxDQUFDSSxLQUF6QixJQUFrQyxNQUFNLElBQTVDLEVBQWtEO0FBQzlDTixNQUFBQSxNQUFNLENBQUNPLFNBQVAsR0FBbUIsSUFBbkI7QUFDQVAsTUFBQUEsTUFBTSxDQUFDUSxRQUFQLEdBQWtCLEtBQWxCO0FBQ0gsS0FIRCxNQUlLO0FBQ0RSLE1BQUFBLE1BQU0sQ0FBQ08sU0FBUCxHQUFtQixLQUFuQjtBQUNBUCxNQUFBQSxNQUFNLENBQUNRLFFBQVAsR0FBa0IsSUFBbEI7QUFDSDtBQUNKLEdBekxJO0FBMExMQyxFQUFBQSxTQTFMSyx1QkEwTE87QUFBQTs7QUFDUjtBQUNBO0FBQ0FqSCxJQUFBQSxFQUFFLENBQUNzRCxXQUFILENBQWU0RCxJQUFmLENBQW9CLEtBQUs3RCxNQUF6QixFQUhRLENBSVI7O0FBQ0EsUUFBSSxLQUFLSyxLQUFULEVBQWdCO0FBQ1oxRCxNQUFBQSxFQUFFLENBQUNnQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JFLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLENBQXJDO0FBQ0gsS0FQTyxDQVFSO0FBQ0E7OztBQUNBdEMsSUFBQUEsSUFBSSxDQUFDbUYsV0FBTCxDQUFpQixxQkFBakIsRUFBd0MsS0FBeEMsRUFBK0MsRUFBL0MsRUFBbURDLElBQW5ELENBQXdELFVBQUNDLEdBQUQsRUFBUztBQUM3RGxGLE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTXlGLFNBQU4sR0FBa0JqQyxHQUFHLENBQUNwQixJQUF0QjtBQUNBcUIsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksT0FBWixFQUFxQnBGLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTXlGLFNBQTNCLEVBRjZELENBRzdEOztBQUNBLFVBQUluSCxFQUFFLENBQUMwQixFQUFILENBQU04QyxRQUFOLENBQWVtQixLQUFmLElBQXdCLENBQTVCLEVBQStCO0FBQzNCO0FBQ0EsUUFBQSxNQUFJLENBQUN5QixpQkFBTDtBQUNILE9BSEQsTUFHTztBQUNIcEgsUUFBQUEsRUFBRSxDQUFDd0QsUUFBSCxDQUFZNkQsU0FBWixDQUFzQixNQUF0QjtBQUNIO0FBQ0osS0FWRDtBQVdILEdBL01JO0FBZ05MRCxFQUFBQSxpQkFoTkssK0JBZ05lO0FBQ2hCLFNBQUtwRSxhQUFMLENBQW1CbEIsTUFBbkIsR0FBNEIsSUFBNUI7QUFDSCxHQWxOSTtBQW1OTDtBQUNBd0YsRUFBQUEsYUFwTkssMkJBb05XO0FBQUE7O0FBQ1osUUFBSXpDLFFBQVEsR0FBRztBQUNYUSxNQUFBQSxFQUFFLEVBQUVyRixFQUFFLENBQUMwQixFQUFILENBQU0yRDtBQURDLEtBQWY7QUFHQXhGLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIseUJBQWpCLEVBQTRDLE1BQTVDLEVBQW9ESCxRQUFwRCxFQUE4REksSUFBOUQsQ0FBbUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hFLE1BQUEsTUFBSSxDQUFDbEMsYUFBTCxDQUFtQmxCLE1BQW5CLEdBQTRCLEtBQTVCOztBQUNBLE1BQUEsTUFBSSxDQUFDOEIsV0FBTDtBQUNILEtBSEQ7QUFJSCxHQTVOSTtBQTZOTDtBQUNBMkQsRUFBQUEsYUE5TkssMkJBOE5XO0FBQUE7O0FBQ1o7QUFDQSxRQUFJMUMsUUFBUSxHQUFHLEVBQWY7QUFDQWhGLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIsMEJBQWpCLEVBQTZDLEtBQTdDLEVBQW9ESCxRQUFwRCxFQUE4REksSUFBOUQsQ0FBbUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hFLFVBQUlzQyxLQUFLLEdBQUd0QyxHQUFHLENBQUNwQixJQUFKLENBQVMwRCxLQUFyQjtBQUNBLE1BQUEsTUFBSSxDQUFDQyxPQUFMLEdBQWV2QyxHQUFHLENBQUNwQixJQUFKLENBQVM0RCxHQUF4QjtBQUNBLE1BQUEsTUFBSSxDQUFDaEYsU0FBTCxDQUFlWixNQUFmLEdBQXdCLElBQXhCOztBQUNBLFdBQUssSUFBSTZGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksQ0FBckIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsWUFBSUMsT0FBTyxHQUFHLE1BQUksQ0FBQ2xGLFNBQUwsQ0FBZWlCLGNBQWYsQ0FBOEIsU0FBU2dFLENBQXZDLENBQWQ7O0FBQ0EsWUFBSUUsS0FBSyxHQUFHTCxLQUFLLENBQUNHLENBQUMsR0FBRyxDQUFMLENBQWpCOztBQUNBLFlBQUlFLEtBQUssQ0FBQ0MsTUFBVixFQUFrQjtBQUNkLFVBQUEsTUFBSSxDQUFDQyxXQUFMLENBQWlCSCxPQUFqQjtBQUNILFNBRkQsTUFFTztBQUNILGNBQUlELENBQUMsS0FBSyxNQUFJLENBQUNGLE9BQWYsRUFBd0I7QUFDcEIsWUFBQSxNQUFJLENBQUNPLFNBQUwsQ0FBZUosT0FBZjtBQUNILFdBRkQsTUFFTztBQUNILFlBQUEsTUFBSSxDQUFDSyxXQUFMLENBQWlCTCxPQUFqQjtBQUNIO0FBQ0o7QUFDSjtBQUNKLEtBakJEO0FBa0JILEdBblBJO0FBb1BMO0FBQ0FNLEVBQUFBLFlBclBLLDBCQXFQVTtBQUNYLFNBQUt6RixRQUFMLENBQWNYLE1BQWQsR0FBdUIsSUFBdkIsQ0FEVyxDQUVYO0FBQ0E7O0FBQ0EsUUFBSXFHLFFBQVEsR0FBRyxLQUFLMUYsUUFBTCxDQUFja0IsY0FBZCxDQUE2QixVQUE3QixFQUF5QzhCLFlBQXpDLENBQXNEekYsRUFBRSxDQUFDMEYsS0FBekQsQ0FBZjtBQUNBeUMsSUFBQUEsUUFBUSxDQUFDckMsTUFBVCxHQUFrQixLQUFLdEIsUUFBTCxDQUFjNEQsU0FBaEM7QUFDQSxRQUFJQyxNQUFNLEdBQUcsS0FBSzVGLFFBQUwsQ0FBY2tCLGNBQWQsQ0FBNkIsUUFBN0IsRUFBdUM4QixZQUF2QyxDQUFvRHpGLEVBQUUsQ0FBQzBGLEtBQXZELENBQWI7QUFDQTJDLElBQUFBLE1BQU0sQ0FBQ3ZDLE1BQVAsNEJBQXdCLEtBQUt0QixRQUFMLENBQWM4RCxPQUF0QyxDQVBXLENBUVg7O0FBQ0EsUUFBSUMsSUFBSSxHQUFHLEtBQUs5RixRQUFMLENBQWNrQixjQUFkLENBQTZCLE1BQTdCLEVBQXFDQSxjQUFyQyxDQUFvRCxNQUFwRCxFQUE0RDhCLFlBQTVELENBQXlFekYsRUFBRSxDQUFDd0ksTUFBNUUsQ0FBWDtBQUNBLFFBQUlDLFNBQVMsR0FBRyxLQUFLakUsUUFBTCxDQUFja0UsVUFBOUI7QUFDQTFJLElBQUFBLEVBQUUsQ0FBQzJJLFlBQUgsQ0FBZ0JDLFVBQWhCLENBQTJCSCxTQUEzQixFQUFzQztBQUFFSSxNQUFBQSxHQUFHLEVBQUU7QUFBUCxLQUF0QyxFQUF1RCxVQUFVQyxHQUFWLEVBQWVDLE9BQWYsRUFBd0I7QUFDM0U7QUFDQVIsTUFBQUEsSUFBSSxDQUFDUyxXQUFMLEdBQW1CLElBQUloSixFQUFFLENBQUNzQixXQUFQLENBQW1CeUgsT0FBbkIsQ0FBbkI7QUFDSCxLQUhEO0FBSUgsR0FwUUk7QUFxUUw7QUFDQXpELEVBQUFBLGNBdFFLLDRCQXNRWTtBQUNiO0FBQ0F0RixJQUFBQSxFQUFFLENBQUM2QixJQUFILENBQVEsMkJBQVIsRUFBcUM0RCxZQUFyQyxDQUFrRHpGLEVBQUUsQ0FBQzBGLEtBQXJELEVBQTRESSxNQUE1RCxHQUFxRSxLQUFLdEIsUUFBTCxDQUFjeUUsUUFBbkY7QUFDQWpKLElBQUFBLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSx3QkFBUixFQUFrQzRELFlBQWxDLENBQStDekYsRUFBRSxDQUFDMEYsS0FBbEQsRUFBeURJLE1BQXpELEdBQWtFLEtBQUt0QixRQUFMLENBQWNtQixLQUFoRixDQUhhLENBSWI7O0FBQ0EzRixJQUFBQSxFQUFFLENBQUM2QixJQUFILENBQVEsMEJBQVIsRUFBb0M0RCxZQUFwQyxDQUFpRHpGLEVBQUUsQ0FBQzBGLEtBQXBELEVBQTJESSxNQUEzRCxHQUFvRSxLQUFLdEIsUUFBTCxDQUFjMEUsRUFBbEY7QUFDQWxKLElBQUFBLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSx1QkFBUixFQUFpQzRELFlBQWpDLENBQThDekYsRUFBRSxDQUFDMEYsS0FBakQsRUFBd0RJLE1BQXhELEdBQWlFLEtBQUt0QixRQUFMLENBQWMyRSxLQUEvRSxDQU5hLENBT2I7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHcEosRUFBRSxDQUFDNkIsSUFBSCxDQUFRLHdCQUFSLEVBQWtDNEQsWUFBbEMsQ0FBK0N6RixFQUFFLENBQUNxSixNQUFsRCxDQUFiOztBQUNBLFFBQUlySixFQUFFLENBQUMwQixFQUFILENBQU04QyxRQUFOLENBQWU4RSxHQUFuQixFQUF3QjtBQUNwQkYsTUFBQUEsTUFBTSxDQUFDRyxvQkFBUCxHQUE4QixJQUE5QjtBQUNBSCxNQUFBQSxNQUFNLENBQUNJLFlBQVAsR0FBc0IsS0FBdEI7QUFDSCxLQUhELE1BR087QUFDSEosTUFBQUEsTUFBTSxDQUFDSSxZQUFQLEdBQXNCLElBQXRCO0FBQ0g7QUFDSixHQXJSSTtBQXNSTDtBQUNBQyxFQUFBQSxrQkF2UkssZ0NBdVJnQjtBQUFBOztBQUNqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFLL0csY0FBTCxDQUFvQmdCLGNBQXBCLENBQW1DLFNBQW5DLENBQWI7QUFDQSxTQUFLK0YsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsUUFBSTlFLFFBQVEsR0FBRyxFQUFmO0FBQ0FoRixJQUFBQSxJQUFJLENBQUNtRixXQUFMLENBQWlCLHdCQUFqQixFQUEyQyxLQUEzQyxFQUFrREgsUUFBbEQsRUFBNERJLElBQTVELENBQWlFLFVBQUNDLEdBQUQsRUFBUztBQUN0RWxGLE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTThDLFFBQU4sR0FBaUJVLEdBQUcsQ0FBQ3BCLElBQXJCO0FBQ0EsTUFBQSxNQUFJLENBQUNuQixjQUFMLENBQW9CYixNQUFwQixHQUE2QixJQUE3Qjs7QUFDQSxVQUFJc0gsTUFBTSxHQUFHLE1BQUksQ0FBQ3pHLGNBQUwsQ0FBb0JnQixjQUFwQixDQUFtQyxVQUFuQyxFQUErQzhCLFlBQS9DLENBQTREekYsRUFBRSxDQUFDcUosTUFBL0QsQ0FBYjs7QUFDQSxVQUFJckosRUFBRSxDQUFDMEIsRUFBSCxDQUFNOEMsUUFBTixDQUFlb0YsR0FBZixHQUFxQixDQUF6QixFQUE0QjtBQUN4QjtBQUNBO0FBQ0FSLFFBQUFBLE1BQU0sQ0FBQ0csb0JBQVAsR0FBOEIsSUFBOUI7QUFDQUgsUUFBQUEsTUFBTSxDQUFDSSxZQUFQLEdBQXNCLEtBQXRCO0FBQ0EsUUFBQSxNQUFJLENBQUNwRyxhQUFMLEdBQXFCZ0QsSUFBSSxDQUFDeUQsR0FBTCxDQUFTN0osRUFBRSxDQUFDMEIsRUFBSCxDQUFNOEMsUUFBTixDQUFlb0YsR0FBeEIsQ0FBckI7O0FBQ0EsUUFBQSxNQUFJLENBQUNoRSxRQUFMLENBQWMsTUFBSSxDQUFDa0Usa0JBQW5CLEVBQXVDLENBQXZDO0FBQ0gsT0FQRCxNQU9PO0FBQ0hWLFFBQUFBLE1BQU0sQ0FBQ0ksWUFBUCxHQUFzQixJQUF0QjtBQUNIO0FBQ0osS0FkRDtBQWVILEdBM1NJO0FBNFNMO0FBQ0FNLEVBQUFBLGtCQTdTSyxnQ0E2U2dCO0FBQ2pCLFFBQUksS0FBSzFHLGFBQVQsRUFBd0I7QUFDcEIsVUFBSSxLQUFLQSxhQUFMLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCLGFBQUsyQyxVQUFMLENBQWdCLEtBQUsrRCxrQkFBckI7QUFDSCxPQUZELE1BRU87QUFDSDtBQUNBLFlBQUl0RSxJQUFJLEdBQUcsS0FBSzdDLGNBQUwsQ0FBb0JnQixjQUFwQixDQUFtQyxVQUFuQyxFQUErQzhCLFlBQS9DLENBQTREekYsRUFBRSxDQUFDMEYsS0FBL0QsQ0FBWDtBQUNBLGFBQUt0QyxhQUFMO0FBQ0FvQyxRQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxLQUFLRyxZQUFMLENBQWtCLEtBQUs3QyxhQUF2QixDQUFkO0FBQ0g7QUFDSjtBQUNKLEdBeFRJO0FBeVRMO0FBQ0EyRyxFQUFBQSxnQkExVEssOEJBMFRjO0FBQUE7O0FBQ2Y7QUFDQSxRQUFJbEYsUUFBUSxHQUFHLEVBQWY7QUFDQWhGLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIsdUJBQWpCLEVBQTBDLEtBQTFDLEVBQWlESCxRQUFqRCxFQUEyREksSUFBM0QsQ0FBZ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JFLE1BQUEsTUFBSSxDQUFDcEMsWUFBTCxDQUFrQmhCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsVUFBSWtJLFFBQVEsR0FBRzlFLEdBQUcsQ0FBQ3BCLElBQW5CO0FBQ0EsVUFBSW1HLEdBQUcsR0FBRyxDQUFDLEtBQUQsRUFBUSxLQUFSLEVBQWUsT0FBZixFQUF3QixNQUF4QixDQUFWOztBQUNBLFdBQUssSUFBSXRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsQ0FBcEIsRUFBdUJBLENBQUMsRUFBeEIsRUFBNEI7QUFDeEIsWUFBSXpELEtBQUssR0FBRzhGLFFBQVEsQ0FBQ0MsR0FBRyxDQUFDdEMsQ0FBRCxDQUFKLENBQXBCOztBQUNBLFlBQUl1QyxHQUFHLEdBQUcsTUFBSSxDQUFDcEgsWUFBTCxDQUFrQmEsY0FBbEIsQ0FBaUNzRyxHQUFHLENBQUN0QyxDQUFELENBQXBDLEVBQXlDbEMsWUFBekMsQ0FBc0R6RixFQUFFLENBQUMwRixLQUF6RCxDQUFWOztBQUNBd0UsUUFBQUEsR0FBRyxDQUFDcEUsTUFBSixHQUFhLE1BQU01QixLQUFuQjtBQUNILE9BUm9FLENBU3JFOzs7QUFDQSxVQUFJaUcsU0FBUyxHQUFHLE1BQUksQ0FBQ3JILFlBQUwsQ0FBa0JhLGNBQWxCLENBQWlDLFdBQWpDLEVBQThDOEIsWUFBOUMsQ0FBMkR6RixFQUFFLENBQUMwRixLQUE5RCxDQUFoQjs7QUFDQXlFLE1BQUFBLFNBQVMsQ0FBQ3JFLE1BQVYsR0FBbUJrRSxRQUFRLENBQUNJLE1BQTVCLENBWHFFLENBWXJFOztBQUNBLFVBQUlDLElBQUksR0FBRyxNQUFJLENBQUN2SCxZQUFMLENBQWtCYSxjQUFsQixDQUFpQyxTQUFqQyxFQUE0QzhCLFlBQTVDLENBQXlEekYsRUFBRSxDQUFDMEYsS0FBNUQsQ0FBWDs7QUFDQTJFLE1BQUFBLElBQUksQ0FBQ3ZFLE1BQUwsR0FBY2tFLFFBQVEsQ0FBQ0ssSUFBdkI7O0FBQ0EsVUFBSWxFLE1BQU0sR0FBRyxNQUFJLENBQUNyRCxZQUFMLENBQWtCYSxjQUFsQixDQUFpQyxTQUFqQyxFQUE0QzhCLFlBQTVDLENBQXlEekYsRUFBRSxDQUFDMEYsS0FBNUQsQ0FBYjs7QUFDQVMsTUFBQUEsTUFBTSxDQUFDTCxNQUFQLEdBQWdCa0UsUUFBUSxDQUFDN0QsTUFBVCxHQUFrQixFQUFsQixHQUF1QixNQUFNNkQsUUFBUSxDQUFDN0QsTUFBdEMsR0FBK0M2RCxRQUFRLENBQUM3RCxNQUF4RTtBQUNILEtBakJEO0FBa0JILEdBL1VJO0FBZ1ZMO0FBQ0FtRSxFQUFBQSxrQkFqVkssZ0NBaVZnQjtBQUFBOztBQUNqQjtBQUNBLFFBQUl6RixRQUFRLEdBQUcsRUFBZjtBQUNBaEYsSUFBQUEsSUFBSSxDQUFDbUYsV0FBTCxDQUFpQix3QkFBakIsRUFBMkMsS0FBM0MsRUFBa0RILFFBQWxELEVBQTRESSxJQUE1RCxDQUFpRSxVQUFDQyxHQUFELEVBQVM7QUFDdEU7QUFDQTtBQUNBLFVBQUlzQyxLQUFLLEdBQUd0QyxHQUFHLENBQUNwQixJQUFKLENBQVMwRCxLQUFyQjtBQUNBLFVBQUkrQyxTQUFTLEdBQUdyRixHQUFHLENBQUNwQixJQUFKLENBQVM0RCxHQUF6QjtBQUNBLFVBQUk4QyxVQUFVLEdBQUcsQ0FBakI7QUFDQSxVQUFJUCxHQUFHLEdBQUcsRUFBVjs7QUFDQSxXQUFLLElBQUl0QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHSCxLQUFLLENBQUNpRCxNQUExQixFQUFrQzlDLENBQUMsRUFBbkMsRUFBdUM7QUFDbkM7QUFDQSxZQUFJK0MsT0FBTyxHQUFHbEQsS0FBSyxDQUFDRyxDQUFELENBQUwsQ0FBU0csTUFBdkI7O0FBQ0EsWUFBSSxDQUFDNEMsT0FBTCxFQUFjO0FBQ1ZGLFVBQUFBLFVBQVUsR0FBR2hELEtBQUssQ0FBQ0csQ0FBRCxDQUFMLENBQVNnRCxHQUF0QjtBQUNBO0FBQ0g7QUFDSjs7QUFDRCxVQUFJSCxVQUFVLEdBQUdELFNBQWpCLEVBQTRCO0FBQ3hCQyxRQUFBQSxVQUFVLEdBQUdELFNBQWI7QUFDSDs7QUFDRCxXQUFLLElBQUk1QyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHSCxLQUFLLENBQUNpRCxNQUExQixFQUFrQzlDLEVBQUMsRUFBbkMsRUFBdUM7QUFDbkMsWUFBSTZDLFVBQVUsS0FBS2hELEtBQUssQ0FBQ0csRUFBRCxDQUFMLENBQVNnRCxHQUE1QixFQUFpQztBQUM3QlYsVUFBQUEsR0FBRyxDQUFDN0YsSUFBSixDQUFTb0QsS0FBSyxDQUFDRyxFQUFELENBQWQ7QUFDSDtBQUNKLE9BdEJxRSxDQXVCdEU7OztBQUNBLFVBQUlpRCxLQUFLLEdBQUcsTUFBSSxDQUFDL0gsY0FBTCxDQUFvQmMsY0FBcEIsQ0FBbUMsT0FBbkMsRUFBNEM4QixZQUE1QyxDQUF5RHpGLEVBQUUsQ0FBQ3dJLE1BQTVELENBQVo7O0FBQ0FvQyxNQUFBQSxLQUFLLENBQUM1QixXQUFOLEdBQW9CLE1BQUksQ0FBQzNILFdBQUwsQ0FBaUI0SSxHQUFHLENBQUMsQ0FBRCxDQUFILENBQU9VLEdBQVAsR0FBYSxDQUE5QixDQUFwQixDQXpCc0UsQ0EwQnRFOztBQUNBLFVBQUlFLE1BQU0sR0FBRyxNQUFJLENBQUNoSSxjQUFMLENBQW9CYyxjQUFwQixDQUFtQyxRQUFuQyxDQUFiOztBQUNBLFdBQUssSUFBSW1ILENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUdiLEdBQUcsQ0FBQ1EsTUFBeEIsRUFBZ0NLLENBQUMsRUFBakMsRUFBcUM7QUFDakMsWUFBSWpELEtBQUssR0FBR29DLEdBQUcsQ0FBQ2EsQ0FBRCxDQUFmOztBQUNBLFlBQUlDLFFBQVEsR0FBR0YsTUFBTSxDQUFDbEgsY0FBUCxDQUFzQixhQUFhbUgsQ0FBQyxHQUFHLENBQWpCLENBQXRCLENBQWY7O0FBQ0FDLFFBQUFBLFFBQVEsQ0FBQ2pKLE1BQVQsR0FBa0IsSUFBbEI7O0FBQ0EsWUFBSWtKLEdBQUcsR0FBR0QsUUFBUSxDQUFDcEgsY0FBVCxDQUF3QixhQUF4QixDQUFWOztBQUNBcUgsUUFBQUEsR0FBRyxDQUFDQyxHQUFKLEdBQVVwRCxLQUFLLENBQUNxRCxFQUFoQjtBQUNBLFlBQUk5QixNQUFNLEdBQUc0QixHQUFHLENBQUN2RixZQUFKLENBQWlCekYsRUFBRSxDQUFDcUosTUFBcEIsQ0FBYjs7QUFDQSxZQUFJeEIsS0FBSyxDQUFDQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCc0IsVUFBQUEsTUFBTSxDQUFDRyxvQkFBUCxHQUE4QixJQUE5QjtBQUNBSCxVQUFBQSxNQUFNLENBQUNJLFlBQVAsR0FBc0IsS0FBdEI7QUFDSCxTQUhELE1BR087QUFDSEosVUFBQUEsTUFBTSxDQUFDSSxZQUFQLEdBQXNCLElBQXRCLENBREcsQ0FFSDs7QUFDQSxjQUFJMkIsVUFBVSxHQUFHLEtBQWpCOztBQUNBLGNBQUl0RCxLQUFLLENBQUN1RCxlQUFOLElBQXlCdkQsS0FBSyxDQUFDd0QsZUFBL0IsSUFBa0R4RCxLQUFLLENBQUN5RCxZQUFOLElBQXNCekQsS0FBSyxDQUFDMEQsWUFBOUUsSUFBOEYxRCxLQUFLLENBQUMyRCxXQUFOLElBQXFCM0QsS0FBSyxDQUFDNEQsV0FBN0gsRUFBMEk7QUFDdElOLFlBQUFBLFVBQVUsR0FBRyxJQUFiO0FBQ0g7O0FBQ0QsY0FBSUEsVUFBSixFQUFnQjtBQUNaO0FBQ0FILFlBQUFBLEdBQUcsQ0FBQ1UsUUFBSixHQUFlLElBQWY7QUFDSCxXQUhELE1BR087QUFDSDtBQUNBVixZQUFBQSxHQUFHLENBQUNVLFFBQUosR0FBZSxLQUFmO0FBQ0g7QUFDSixTQXhCZ0MsQ0F5QmpDO0FBQ0E7OztBQUNBLFlBQUlDLEdBQUcsR0FBR1osUUFBUSxDQUFDcEgsY0FBVCxDQUF3QixNQUF4QixFQUFnQzhCLFlBQWhDLENBQTZDekYsRUFBRSxDQUFDMEYsS0FBaEQsQ0FBVjs7QUFDQWlHLFFBQUFBLEdBQUcsQ0FBQzdGLE1BQUosR0FBYStCLEtBQUssQ0FBQzNELEtBQW5CLENBNUJpQyxDQTZCakM7O0FBQ0EsWUFBSTBILFNBQVMsR0FBR2IsUUFBUSxDQUFDcEgsY0FBVCxDQUF3QixNQUF4QixFQUFnQzhCLFlBQWhDLENBQTZDekYsRUFBRSxDQUFDMEYsS0FBaEQsQ0FBaEI7O0FBQ0FrRyxRQUFBQSxTQUFTLENBQUM5RixNQUFWLG9CQUF3QitCLEtBQUssQ0FBQ2dFLE9BQTlCLHdCQS9CaUMsQ0FnQ2pDOztBQUNBLFlBQUlDLEdBQUcsR0FBR2YsUUFBUSxDQUFDcEgsY0FBVCxDQUF3QixhQUF4QixFQUF1QzhCLFlBQXZDLENBQW9EekYsRUFBRSxDQUFDK0wsV0FBdkQsQ0FBVjs7QUFDQUQsUUFBQUEsR0FBRyxDQUFDRSxRQUFKLEdBQWVuRSxLQUFLLENBQUNvRSxPQUFOLEdBQWdCcEUsS0FBSyxDQUFDZ0UsT0FBckM7O0FBQ0EsWUFBSUssTUFBTSxHQUFHbkIsUUFBUSxDQUFDcEgsY0FBVCxDQUF3QixRQUF4QixFQUFrQzhCLFlBQWxDLENBQStDekYsRUFBRSxDQUFDMEYsS0FBbEQsQ0FBYjs7QUFDQXdHLFFBQUFBLE1BQU0sQ0FBQ3BHLE1BQVAsR0FBbUIrQixLQUFLLENBQUNvRSxPQUF6QixTQUFvQ3BFLEtBQUssQ0FBQ2dFLE9BQTFDLENBcENpQyxDQXFDakM7QUFDQTs7QUFDQSxZQUFJTSxVQUFVLEdBQUdwQixRQUFRLENBQUNwSCxjQUFULENBQXdCLFFBQXhCLENBQWpCOztBQUNBLFlBQUl5SSxLQUFLLEdBQUdELFVBQVUsQ0FBQ3hJLGNBQVgsQ0FBMEIsUUFBMUIsQ0FBWjtBQUNBLFlBQUkwSSxLQUFLLEdBQUdGLFVBQVUsQ0FBQ3hJLGNBQVgsQ0FBMEIsUUFBMUIsQ0FBWjtBQUNBLFlBQUkySSxLQUFLLEdBQUdILFVBQVUsQ0FBQ3hJLGNBQVgsQ0FBMEIsUUFBMUIsQ0FBWjs7QUFDQSxZQUFJa0UsS0FBSyxDQUFDd0QsZUFBVixFQUEyQjtBQUN2QmUsVUFBQUEsS0FBSyxDQUFDdEssTUFBTixHQUFlLElBQWY7QUFDQXNLLFVBQUFBLEtBQUssQ0FBQ3pJLGNBQU4sQ0FBcUIsS0FBckIsRUFBNEI4QixZQUE1QixDQUF5Q3pGLEVBQUUsQ0FBQzBGLEtBQTVDLEVBQW1ESSxNQUFuRCwwQkFBa0UrQixLQUFLLENBQUN3RCxlQUF4RTtBQUNBLGNBQUlrQixLQUFLLEdBQUdILEtBQUssQ0FBQ3pJLGNBQU4sQ0FBcUIsTUFBckIsRUFBNkJBLGNBQTdCLENBQTRDLE9BQTVDLENBQVo7QUFDQTRJLFVBQUFBLEtBQUssQ0FBQ3pLLE1BQU4sR0FBZStGLEtBQUssQ0FBQ3VELGVBQU4sSUFBeUJ2RCxLQUFLLENBQUN3RCxlQUE5QztBQUNILFNBTEQsTUFLTztBQUNIZSxVQUFBQSxLQUFLLENBQUN0SyxNQUFOLEdBQWUsS0FBZjtBQUNIOztBQUNELFlBQUkrRixLQUFLLENBQUMwRCxZQUFWLEVBQXdCO0FBQ3BCYyxVQUFBQSxLQUFLLENBQUN2SyxNQUFOLEdBQWUsSUFBZjtBQUNBdUssVUFBQUEsS0FBSyxDQUFDMUksY0FBTixDQUFxQixLQUFyQixFQUE0QjhCLFlBQTVCLENBQXlDekYsRUFBRSxDQUFDMEYsS0FBNUMsRUFBbURJLE1BQW5EOztBQUNBLGNBQUl5RyxNQUFLLEdBQUdGLEtBQUssQ0FBQzFJLGNBQU4sQ0FBcUIsTUFBckIsRUFBNkJBLGNBQTdCLENBQTRDLE9BQTVDLENBQVo7O0FBQ0E0SSxVQUFBQSxNQUFLLENBQUN6SyxNQUFOLEdBQWUrRixLQUFLLENBQUN5RCxZQUFOLElBQXNCekQsS0FBSyxDQUFDMEQsWUFBM0M7QUFDSCxTQUxELE1BS087QUFDSGMsVUFBQUEsS0FBSyxDQUFDdkssTUFBTixHQUFlLEtBQWY7QUFDSDs7QUFDRCxZQUFJK0YsS0FBSyxDQUFDNEQsV0FBVixFQUF1QjtBQUNuQmEsVUFBQUEsS0FBSyxDQUFDeEssTUFBTixHQUFlLElBQWY7QUFDQXdLLFVBQUFBLEtBQUssQ0FBQzNJLGNBQU4sQ0FBcUIsS0FBckIsRUFBNEI4QixZQUE1QixDQUF5Q3pGLEVBQUUsQ0FBQzBGLEtBQTVDLEVBQW1ESSxNQUFuRCxvQkFBaUUrQixLQUFLLENBQUM0RCxXQUF2RTs7QUFDQSxjQUFJYyxPQUFLLEdBQUdGLEtBQUssQ0FBQzFJLGNBQU4sQ0FBcUIsTUFBckIsRUFBNkJBLGNBQTdCLENBQTRDLE9BQTVDLENBQVo7O0FBQ0E0SSxVQUFBQSxPQUFLLENBQUN6SyxNQUFOLEdBQWUrRixLQUFLLENBQUMyRCxXQUFOLElBQXFCM0QsS0FBSyxDQUFDNEQsV0FBMUM7QUFDSCxTQUxELE1BS087QUFDSGEsVUFBQUEsS0FBSyxDQUFDeEssTUFBTixHQUFlLEtBQWY7QUFDSDtBQUNKOztBQUNELE1BQUEsTUFBSSxDQUFDZSxjQUFMLENBQW9CZixNQUFwQixHQUE2QixJQUE3QjtBQUNILEtBakdEO0FBa0dILEdBdGJJO0FBdWJMO0FBQ0EwSyxFQUFBQSxlQXhiSyw2QkF3YmE7QUFDZCxTQUFLdkosV0FBTCxDQUFpQm5CLE1BQWpCLEdBQTBCLElBQTFCO0FBQ0gsR0ExYkk7QUEyYkwySyxFQUFBQSxXQTNiSyx5QkEyYlM7QUFBQTs7QUFDVjVNLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIscUJBQWpCLEVBQXdDLEtBQXhDLEVBQStDLEVBQS9DLEVBQW1EQyxJQUFuRCxDQUF3RCxVQUFDQyxHQUFELEVBQVM7QUFDN0QsTUFBQSxNQUFJLENBQUNqQyxXQUFMLENBQWlCbkIsTUFBakIsR0FBMEIsS0FBMUI7O0FBQ0EsTUFBQSxNQUFJLENBQUM4QixXQUFMO0FBQ0gsS0FIRDtBQUlILEdBaGNJO0FBaWNMOEksRUFBQUEsaUJBamNLLDZCQWljYUMsQ0FqY2IsRUFpY2dCO0FBQUE7O0FBQ2pCLFFBQUlDLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFmOztBQUNBLFFBQUksQ0FBQ0EsTUFBTSxDQUFDbEIsUUFBWixFQUFzQjtBQUNsQixXQUFLbUIsUUFBTCxDQUFjLE9BQWQ7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBaE4sTUFBQUEsSUFBSSxDQUFDbUYsV0FBTCxDQUFpQiwyQkFBakIsRUFBOEMsTUFBOUMsRUFBc0Q7QUFBRWtHLFFBQUFBLEVBQUUsRUFBRTBCLE1BQU0sQ0FBQzNCO0FBQWIsT0FBdEQsRUFBMEVoRyxJQUExRSxDQUErRSxVQUFDQyxHQUFELEVBQVM7QUFDcEY7QUFDQTtBQUNBLFlBQUlrRSxNQUFNLEdBQUd3RCxNQUFNLENBQUNuSCxZQUFQLENBQW9CekYsRUFBRSxDQUFDcUosTUFBdkIsQ0FBYjtBQUNBRCxRQUFBQSxNQUFNLENBQUNHLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FILFFBQUFBLE1BQU0sQ0FBQ0ksWUFBUCxHQUFzQixLQUF0QjtBQUNBLFFBQUEsTUFBSSxDQUFDM0csY0FBTCxDQUFvQmMsY0FBcEIsQ0FBbUMsVUFBbkMsRUFBK0M3QixNQUEvQyxHQUF3RCxJQUF4RDtBQUNILE9BUEQ7QUFRSDtBQUNKLEdBaGRJO0FBaWRMO0FBQ0FnTCxFQUFBQSxpQkFsZEssK0JBa2RlO0FBQUE7O0FBQ2hCO0FBQ0FqTixJQUFBQSxJQUFJLENBQUNtRixXQUFMLENBQWlCLHlCQUFqQixFQUE0QyxLQUE1QyxFQUFtRCxFQUFuRCxFQUF1REMsSUFBdkQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pFLFVBQUlwQixJQUFJLEdBQUdvQixHQUFHLENBQUNwQixJQUFmO0FBQ0EsVUFBSW9GLEVBQUUsR0FBR3BGLElBQUksQ0FBQ29GLEVBQUwsSUFBVyxDQUFwQixDQUZpRSxDQUdqRTtBQUNBOztBQUNBLE1BQUEsT0FBSSxDQUFDNkQsYUFBTCxHQUFxQixDQUFyQjtBQUNBLFVBQUk5QyxHQUFHLEdBQUcsQ0FBQyxHQUFELEVBQU0sR0FBTixFQUFXLENBQVgsRUFBYyxDQUFkLEVBQWlCLENBQWpCLEVBQW9CLEVBQXBCLEVBQXdCLEVBQXhCLENBQVY7O0FBQ0EsV0FBSyxJQUFJdEMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzdELElBQUksQ0FBQzBELEtBQUwsQ0FBV3dGLE1BQS9CLEVBQXVDckYsQ0FBQyxFQUF4QyxFQUE0QztBQUN4QyxZQUFJN0QsSUFBSSxDQUFDMEQsS0FBTCxDQUFXRyxDQUFYLEVBQWNzRixLQUFsQixFQUF5QjtBQUNyQixVQUFBLE9BQUksQ0FBQ0YsYUFBTCxHQUFxQjlDLEdBQUcsQ0FBQ3RDLENBQUQsQ0FBeEI7QUFDQTtBQUNIO0FBQ0osT0FaZ0UsQ0FhakU7OztBQUNBLE1BQUEsT0FBSSxDQUFDL0UsY0FBTCxDQUFvQmQsTUFBcEIsR0FBNkIsSUFBN0IsQ0FkaUUsQ0FlakU7O0FBQ0EsTUFBQSxPQUFJLENBQUNjLGNBQUwsQ0FBb0JlLGNBQXBCLENBQW1DLGdCQUFuQyxFQUFxRDhCLFlBQXJELENBQWtFekYsRUFBRSxDQUFDMEYsS0FBckUsRUFBNEVJLE1BQTVFLEdBQXFGb0QsRUFBckYsQ0FoQmlFLENBaUJqRTs7QUFDQSxNQUFBLE9BQUksQ0FBQ2dFLFlBQUwsR0FBb0JoRSxFQUFFLEdBQUcsS0FBekI7QUFDQSxNQUFBLE9BQUksQ0FBQ3RHLGNBQUwsQ0FBb0JlLGNBQXBCLENBQW1DLGVBQW5DLEVBQW9EOEIsWUFBcEQsQ0FBaUV6RixFQUFFLENBQUMwRixLQUFwRSxFQUEyRUksTUFBM0UsR0FBb0YsT0FBSSxDQUFDb0gsWUFBTCxHQUFvQixHQUF4RztBQUNBLE1BQUEsT0FBSSxDQUFDQyxTQUFMLEdBQWlCLElBQWpCLENBcEJpRSxDQXFCakU7O0FBQ0EsVUFBSW5DLEdBQUcsR0FBRyxPQUFJLENBQUNwSSxjQUFMLENBQW9CZSxjQUFwQixDQUFtQyxhQUFuQyxDQUFWOztBQUNBLFVBQUl5RixNQUFNLEdBQUc0QixHQUFHLENBQUN2RixZQUFKLENBQWlCekYsRUFBRSxDQUFDcUosTUFBcEIsQ0FBYjtBQUNBRCxNQUFBQSxNQUFNLENBQUNHLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FILE1BQUFBLE1BQU0sQ0FBQ0ksWUFBUCxHQUFzQixLQUF0QjtBQUNILEtBMUJEO0FBMkJILEdBL2VJO0FBZ2ZMO0FBQ0E0RCxFQUFBQSxpQkFqZkssNkJBaWZhVCxDQWpmYixFQWlmZ0JVLEdBamZoQixFQWlmcUI7QUFDdEIsUUFBSVQsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQWY7O0FBQ0EsUUFBSSxLQUFLTyxTQUFMLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLFdBQUtBLFNBQUwsR0FBaUJQLE1BQWpCO0FBQ0EsV0FBS08sU0FBTCxDQUFlRyxLQUFmLEdBQXVCQyxNQUFNLENBQUNGLEdBQUQsQ0FBN0I7QUFDQSxXQUFLckYsU0FBTCxDQUFlNEUsTUFBZjtBQUNILEtBSkQsTUFJTztBQUNILFdBQUszRSxXQUFMLENBQWlCLEtBQUtrRixTQUF0QjtBQUNBLFdBQUtBLFNBQUwsR0FBaUJQLE1BQWpCO0FBQ0EsV0FBS08sU0FBTCxDQUFlRyxLQUFmLEdBQXVCQyxNQUFNLENBQUNGLEdBQUQsQ0FBN0I7QUFDQSxXQUFLckYsU0FBTCxDQUFlNEUsTUFBZjtBQUNIOztBQUNELFFBQUk1QixHQUFHLEdBQUcsS0FBS3BJLGNBQUwsQ0FBb0JlLGNBQXBCLENBQW1DLGFBQW5DLENBQVY7QUFDQSxRQUFJeUYsTUFBTSxHQUFHNEIsR0FBRyxDQUFDdkYsWUFBSixDQUFpQnpGLEVBQUUsQ0FBQ3FKLE1BQXBCLENBQWI7QUFDQUQsSUFBQUEsTUFBTSxDQUFDSSxZQUFQLEdBQXNCLElBQXRCO0FBQ0gsR0FoZ0JJO0FBaWdCTDtBQUNBZ0UsRUFBQUEsaUJBbGdCSyw2QkFrZ0JhYixDQWxnQmIsRUFrZ0JnQjtBQUNqQixRQUFJQyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBZjs7QUFDQSxRQUFJLEtBQUtPLFNBQUwsS0FBbUIsSUFBdkIsRUFBNkI7QUFDekI7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS0QsWUFBTCxHQUFvQixLQUFLQyxTQUFMLENBQWVHLEtBQXZDLEVBQThDO0FBQzFDO0FBQ0EsYUFBS1QsUUFBTCxDQUFjLFFBQWQ7QUFDQTtBQUNIOztBQUNELFVBQUksS0FBS00sU0FBTCxDQUFlRyxLQUFmLEdBQXVCLEtBQUtQLGFBQWhDLEVBQStDO0FBQzNDO0FBQ0EsYUFBS0YsUUFBTCxDQUFjLGFBQWQ7QUFDQTtBQUNILE9BZEUsQ0FlSDs7O0FBQ0FoTixNQUFBQSxJQUFJLENBQUNtRixXQUFMLENBQWlCLHdCQUFqQixFQUEyQyxNQUEzQyxFQUFtRCxFQUFuRCxFQUF1REMsSUFBdkQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pFO0FBRUEsWUFBSXVJLEtBQUssR0FBR2IsTUFBTSxDQUFDYyxNQUFQLENBQWMvSixjQUFkLENBQTZCLFVBQTdCLENBQVo7QUFDQThKLFFBQUFBLEtBQUssQ0FBQzNMLE1BQU4sR0FBZSxJQUFmO0FBRUgsT0FORDtBQU9IO0FBQ0osR0E5aEJJO0FBK2hCTCtLLEVBQUFBLFFBL2hCSyxvQkEraEJJUSxHQS9oQkosRUEraEJTO0FBQ1YsUUFBSU0sSUFBSSxHQUFHM04sRUFBRSxDQUFDNkIsSUFBSCxDQUFRLGFBQVIsQ0FBWDtBQUNBOEwsSUFBQUEsSUFBSSxDQUFDQyxjQUFMO0FBQ0FELElBQUFBLElBQUksQ0FBQ0UsQ0FBTCxHQUFTLEdBQVQ7QUFDQSxRQUFJQyxHQUFHLEdBQUdILElBQUksQ0FBQ2xJLFlBQUwsQ0FBa0J6RixFQUFFLENBQUMwRixLQUFyQixDQUFWO0FBQ0FvSSxJQUFBQSxHQUFHLENBQUNoSSxNQUFKLEdBQWF1SCxHQUFiO0FBQ0FyTixJQUFBQSxFQUFFLENBQUNzQyxLQUFILENBQVNxTCxJQUFULEVBQWVwTCxFQUFmLENBQWtCLEdBQWxCLEVBQXVCO0FBQUV3TCxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUF2QixFQUF5Q3hMLEVBQXpDLENBQTRDLENBQTVDLEVBQStDO0FBQUVzTCxNQUFBQSxDQUFDLEVBQUU7QUFBTCxLQUEvQyxFQUEyREcsS0FBM0QsQ0FBaUUsR0FBakUsRUFBc0V6TCxFQUF0RSxDQUF5RSxHQUF6RSxFQUE4RTtBQUFFd0wsTUFBQUEsT0FBTyxFQUFFO0FBQVgsS0FBOUUsRUFBOEZ2TCxLQUE5RjtBQUNILEdBdGlCSTtBQXVpQkw7QUFDQXlMLEVBQUFBLE9BeGlCSyxtQkF3aUJHQyxLQXhpQkgsRUF3aUJVO0FBQ1gsUUFBSWxPLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTXdCLFNBQVYsRUFBcUI7QUFDakJsRCxNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU13QixTQUFOLEdBQWtCLEtBQWxCO0FBQ0EsV0FBSytFLFdBQUwsQ0FBaUJpRyxLQUFLLENBQUN0QixNQUF2QjtBQUNBNU0sTUFBQUEsRUFBRSxDQUFDc0QsV0FBSCxDQUFlNkssS0FBZixDQUFxQixLQUFLOUssTUFBMUI7QUFDSCxLQUpELE1BSU87QUFDSHJELE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTXdCLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxXQUFLOEUsU0FBTCxDQUFla0csS0FBSyxDQUFDdEIsTUFBckI7QUFDQTVNLE1BQUFBLEVBQUUsQ0FBQ3NELFdBQUgsQ0FBZThLLE1BQWYsQ0FBc0IsS0FBSy9LLE1BQTNCO0FBQ0g7QUFDSixHQWxqQkk7QUFtakJMO0FBQ0FnTCxFQUFBQSxVQXBqQkssc0JBb2pCTUgsS0FwakJOLEVBb2pCYTtBQUNkLFFBQUlsTyxFQUFFLENBQUMwQixFQUFILENBQU15QixTQUFWLEVBQXFCO0FBQ2pCbkQsTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNeUIsU0FBTixHQUFrQixLQUFsQjtBQUNBLFdBQUs4RSxXQUFMLENBQWlCaUcsS0FBSyxDQUFDdEIsTUFBdkIsRUFGaUIsQ0FHakI7QUFDQTtBQUNILEtBTEQsTUFLTztBQUNINU0sTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNeUIsU0FBTixHQUFrQixJQUFsQjtBQUNBLFdBQUs2RSxTQUFMLENBQWVrRyxLQUFLLENBQUN0QixNQUFyQjtBQUNIO0FBQ0osR0E5akJJO0FBK2pCTDVFLEVBQUFBLFNBL2pCSyxxQkErakJLZ0QsR0EvakJMLEVBK2pCVTtBQUNYQSxJQUFBQSxHQUFHLENBQUNySCxjQUFKLENBQW1CLFFBQW5CLEVBQTZCN0IsTUFBN0IsR0FBc0MsSUFBdEM7QUFDSCxHQWprQkk7QUFra0JMbUcsRUFBQUEsV0Fsa0JLLHVCQWtrQk8rQyxHQWxrQlAsRUFra0JZO0FBQ2JBLElBQUFBLEdBQUcsQ0FBQ3JILGNBQUosQ0FBbUIsUUFBbkIsRUFBNkI3QixNQUE3QixHQUFzQyxLQUF0QztBQUNILEdBcGtCSTtBQXFrQkxpRyxFQUFBQSxXQXJrQkssdUJBcWtCT2lELEdBcmtCUCxFQXFrQlk7QUFDYkEsSUFBQUEsR0FBRyxDQUFDckgsY0FBSixDQUFtQixRQUFuQixFQUE2QjdCLE1BQTdCLEdBQXNDLEtBQXRDO0FBQ0FrSixJQUFBQSxHQUFHLENBQUNySCxjQUFKLENBQW1CLFVBQW5CLEVBQStCN0IsTUFBL0IsR0FBd0MsSUFBeEM7QUFDSCxHQXhrQkk7QUF5a0JMO0FBQ0F3TSxFQUFBQSxhQTFrQkssMkJBMGtCVyxDQUNaO0FBQ0gsR0E1a0JJO0FBNmtCTDtBQUNBQyxFQUFBQSxhQTlrQkssMkJBOGtCVyxDQUNaO0FBQ0gsR0FobEJJO0FBaWxCTDtBQUNBQyxFQUFBQSxXQWxsQkssdUJBa2xCTzdCLENBbGxCUCxFQWtsQlU7QUFDWEEsSUFBQUEsQ0FBQyxDQUFDQyxNQUFGLENBQVNjLE1BQVQsQ0FBZ0I1TCxNQUFoQixHQUF5QixLQUF6Qjs7QUFDQSxRQUFJLEtBQUtxTCxTQUFULEVBQW9CO0FBQ2hCLFdBQUtsRixXQUFMLENBQWlCLEtBQUtrRixTQUF0QjtBQUNBLFdBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDSDs7QUFDRCxRQUFJLEtBQUt4SyxjQUFMLENBQW9CYixNQUFwQixLQUErQixJQUFuQyxFQUF5QztBQUNyQyxXQUFLMkgsa0JBQUw7QUFDSCxLQVJVLENBU1g7OztBQUNBLFNBQUs3RixXQUFMLEdBVlcsQ0FXWDtBQUNILEdBOWxCSTtBQStsQkw7QUFDQTZLLEVBQUFBLFlBaG1CSyx3QkFnbUJROUIsQ0FobUJSLEVBZ21CVztBQUFBOztBQUNaO0FBQ0EsUUFBSTlILFFBQVEsR0FBRztBQUNYUSxNQUFBQSxFQUFFLEVBQUVyRixFQUFFLENBQUMwQixFQUFILENBQU0yRDtBQURDLEtBQWY7QUFHQXhGLElBQUFBLElBQUksQ0FBQ21GLFdBQUwsQ0FBaUIsc0JBQWpCLEVBQXlDLE1BQXpDLEVBQWlESCxRQUFqRCxFQUEyREksSUFBM0QsQ0FBZ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFJdUMsT0FBTyxHQUFHLE9BQUksQ0FBQy9FLFNBQUwsQ0FBZWlCLGNBQWYsQ0FBOEIsU0FBUyxPQUFJLENBQUM4RCxPQUE1QyxDQUFkOztBQUNBLE1BQUEsT0FBSSxDQUFDTSxXQUFMLENBQWlCTixPQUFqQixFQVBxRSxDQVFyRTs7O0FBQ0EsVUFBSXdDLEdBQUcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE9BQXpCLEVBQWtDLFNBQWxDLEVBQTZDLE1BQTdDLEVBQXFELFVBQXJELENBQVY7QUFDQSxVQUFJbkcsSUFBSSxHQUFHb0IsR0FBRyxDQUFDcEIsSUFBZjs7QUFDQSxNQUFBLE9BQUksQ0FBQzRLLE9BQUwsQ0FBYXpFLEdBQUcsQ0FBQyxPQUFJLENBQUN4QyxPQUFMLEdBQWUsQ0FBaEIsQ0FBaEIsRUFBb0MxSCxLQUFLLENBQUMsU0FBUyxPQUFJLENBQUMwSCxPQUFmLENBQXpDLEVBQWtFM0QsSUFBSSxDQUFDb0YsRUFBdkUsRUFBMkVwRixJQUFJLENBQUM2SyxJQUFoRjtBQUNILEtBWkQsV0FZUyxVQUFDekosR0FBRCxFQUFTO0FBQ2QsTUFBQSxPQUFJLENBQUMySCxRQUFMLENBQWMsU0FBZDtBQUNILEtBZEQ7QUFlSCxHQXBuQkk7QUFxbkJMO0FBQ0ErQixFQUFBQSxnQkF0bkJLLDRCQXNuQllqQyxDQXRuQlosRUFzbkJlLENBQ2hCO0FBQ0E7QUFDSCxHQXpuQkk7QUEwbkJMO0FBQ0FrQyxFQUFBQSxpQkEzbkJLLDZCQTJuQmFsQyxDQTNuQmIsRUEybkJnQjtBQUFBOztBQUNqQjtBQUNBLFFBQUksS0FBS3ZKLGFBQUwsR0FBcUIsQ0FBekIsRUFBNEI7QUFDeEI7QUFDQTtBQUNBO0FBQ0gsS0FOZ0IsQ0FPakI7OztBQUNBLFFBQUl5QixRQUFRLEdBQUc7QUFDWCxZQUFNN0UsRUFBRSxDQUFDMEIsRUFBSCxDQUFNMkQ7QUFERCxLQUFmLENBUmlCLENBV2pCOztBQUNBLFFBQUl5SixHQUFHLEdBQUc7QUFDTixXQUFLLEVBREM7QUFFTixZQUFNLEdBRkE7QUFHTixZQUFNLEdBSEE7QUFJTixZQUFNLEdBSkE7QUFLTixZQUFNLEdBTEE7QUFNTixZQUFNO0FBTkEsS0FBVjtBQVFBalAsSUFBQUEsSUFBSSxDQUFDbUYsV0FBTCxDQUFpQix1QkFBakIsRUFBMEMsTUFBMUMsRUFBa0RILFFBQWxELEVBQTRESSxJQUE1RCxDQUFpRSxVQUFDQyxHQUFELEVBQVM7QUFDdEU7QUFDQTtBQUNBLE1BQUEsT0FBSSxDQUFDNkosUUFBTCxHQUFnQkQsR0FBRyxDQUFDLEtBQUs1SixHQUFHLENBQUNwQixJQUFKLENBQVNrTCxLQUFmLENBQW5CLENBSHNFLENBSXRFOztBQUNBLE1BQUEsT0FBSSxDQUFDdEYsS0FBTCxHQUFhLE9BQUksQ0FBQy9HLGNBQUwsQ0FBb0JnQixjQUFwQixDQUFtQyxTQUFuQyxDQUFiO0FBQ0EsTUFBQSxPQUFJLENBQUNzTCxTQUFMLEdBQWlCLElBQWpCO0FBQ0EsTUFBQSxPQUFJLENBQUN2RixLQUFMLENBQVdDLEtBQVgsR0FBbUIsR0FBbkI7QUFDQSxNQUFBLE9BQUksQ0FBQ3VGLEtBQUwsR0FBYSxFQUFiO0FBQ0EsTUFBQSxPQUFJLENBQUNoTCxLQUFMLEdBQWEsQ0FBYjtBQUNBLE1BQUEsT0FBSSxDQUFDaUwsTUFBTCxHQUFjLENBQWQsQ0FWc0UsQ0FXdEU7O0FBQ0EsTUFBQSxPQUFJLENBQUMvTSxZQUFMLENBQWtCLFlBQU07QUFDcEIsWUFBSTBCLElBQUksR0FBR29CLEdBQUcsQ0FBQ3BCLElBQWY7QUFDQSxZQUFJa0wsS0FBSyxHQUFHO0FBQ1IsZUFBSztBQUFFSSxZQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsWUFBQUEsS0FBSyxFQUFFdFAsS0FBSyxDQUFDZTtBQUE3QixXQURHO0FBRVIsZ0JBQU07QUFBRXNPLFlBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFBQSxLQUFLLEVBQUV0UCxLQUFLLENBQUNZO0FBQTdCLFdBRkU7QUFHUixnQkFBTTtBQUFFeU8sWUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQUFBLEtBQUssRUFBRXRQLEtBQUssQ0FBQ2E7QUFBN0IsV0FIRTtBQUlSLGdCQUFNO0FBQUV3TyxZQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsWUFBQUEsS0FBSyxFQUFFdFAsS0FBSyxDQUFDYztBQUEvQixXQUpFO0FBS1IsZ0JBQU07QUFBRXVPLFlBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxZQUFBQSxLQUFLLEVBQUV0UCxLQUFLLENBQUNVO0FBQTdCLFdBTEU7QUFNUixnQkFBTTtBQUFFMk8sWUFBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLFlBQUFBLEtBQUssRUFBRXRQLEtBQUssQ0FBQ1c7QUFBN0I7QUFORSxTQUFaO0FBUUEsWUFBSTRPLE1BQU0sR0FBR04sS0FBSyxDQUFDbEwsSUFBSSxDQUFDa0wsS0FBTixDQUFsQjs7QUFDQSxRQUFBLE9BQUksQ0FBQ04sT0FBTCxDQUFhWSxNQUFNLENBQUNGLElBQXBCLEVBQTBCRSxNQUFNLENBQUNELEtBQWpDLEVBQXdDdkwsSUFBSSxDQUFDb0YsRUFBN0MsRUFBaURwRixJQUFJLENBQUM2SyxJQUF0RDtBQUNILE9BWkQsRUFZRyxHQVpIO0FBYUgsS0F6QkQ7QUEwQkgsR0F6cUJJO0FBMHFCTFksRUFBQUEsV0ExcUJLLHVCQTBxQk9DLENBMXFCUCxFQTBxQlVDLENBMXFCVixFQTBxQmE7QUFDZEEsSUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDQSxRQUFJQyxDQUFDLEdBQUdELENBQUMsR0FBR0QsQ0FBWjtBQUNBLFFBQUk3RSxHQUFHLEdBQUd2RSxJQUFJLENBQUN1SixNQUFMLEtBQWdCRCxDQUFoQixHQUFvQkYsQ0FBOUI7QUFDQSxXQUFPSSxRQUFRLENBQUNqRixHQUFELENBQWY7QUFDSCxHQS9xQkk7QUFnckJMa0YsRUFBQUEsTUFockJLLGtCQWdyQkVDLEVBaHJCRixFQWdyQk07QUFDUCxRQUFJLEtBQUtiLFNBQVQsRUFBb0I7QUFDaEI7QUFDQSxXQUFLdkYsS0FBTCxDQUFXQyxLQUFYLElBQW9CLEtBQUt1RixLQUF6Qjs7QUFDQSxVQUFJLEtBQUt4RixLQUFMLENBQVdDLEtBQVgsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsYUFBS3dGLE1BQUw7O0FBRUEsWUFBSSxLQUFLQSxNQUFMLEdBQWMsQ0FBZCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QjtBQUNBLGVBQUtELEtBQUwsSUFBYyxLQUFLaEwsS0FBbkI7O0FBQ0EsY0FBSSxLQUFLQSxLQUFMLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEIsaUJBQUtBLEtBQUwsR0FBYSxHQUFiO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsaUJBQUtBLEtBQUwsSUFBYyxHQUFkO0FBQ0g7QUFDSjtBQUNKLE9BaEJlLENBaUJoQjs7O0FBQ0EsVUFBSSxLQUFLZ0wsS0FBTCxJQUFjLENBQWQsSUFBbUIsS0FBS3hGLEtBQUwsQ0FBV0MsS0FBWCxJQUFvQixLQUFLb0YsUUFBaEQsRUFBMEQ7QUFDdEQsYUFBS0UsU0FBTCxHQUFpQixLQUFqQjtBQUNBLGFBQUt2RixLQUFMLENBQVdDLEtBQVgsR0FBbUIsS0FBS29GLFFBQXhCO0FBQ0g7QUFDSjtBQUNKLEdBeHNCSTtBQXlzQkw7QUFDQTtBQUNBTCxFQUFBQSxPQTNzQkssbUJBMnNCR3FCLFFBM3NCSCxFQTJzQmFDLFVBM3NCYixFQTJzQnlCQyxRQTNzQnpCLEVBMnNCbUNDLFVBM3NCbkMsRUEyc0IrQztBQUNoRCxTQUFLbk4sWUFBTCxDQUFrQmpCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsUUFBSStJLE1BQU0sR0FBRyxLQUFLOUgsWUFBTCxDQUFrQlksY0FBbEIsQ0FBaUMsUUFBakMsQ0FBYjtBQUNBLFFBQUk0RSxJQUFJLEdBQUcsS0FBS3hGLFlBQUwsQ0FBa0JZLGNBQWxCLENBQWlDLE1BQWpDLEVBQXlDOEIsWUFBekMsQ0FBc0R6RixFQUFFLENBQUN3SSxNQUF6RCxDQUFYO0FBQ0EsUUFBSTJILElBQUksR0FBRyxLQUFLcE4sWUFBTCxDQUFrQlksY0FBbEIsQ0FBaUMsS0FBakMsRUFBd0M4QixZQUF4QyxDQUFxRHpGLEVBQUUsQ0FBQzBGLEtBQXhELENBQVg7QUFDQXlLLElBQUFBLElBQUksQ0FBQ3JLLE1BQUwsb0JBQW1CaUssUUFBbkI7QUFDQXhILElBQUFBLElBQUksQ0FBQ1MsV0FBTCxHQUFtQixLQUFLekgsV0FBTCxDQUFpQnlPLFVBQWpCLENBQW5CO0FBQ0EsUUFBSUksT0FBTyxHQUFHdkYsTUFBTSxDQUFDbEgsY0FBUCxDQUFzQixVQUF0QixDQUFkO0FBQ0EsUUFBSTBNLE9BQU8sR0FBR3hGLE1BQU0sQ0FBQ2xILGNBQVAsQ0FBc0IsVUFBdEIsQ0FBZDs7QUFDQSxRQUFJc00sUUFBSixFQUFjO0FBQ1ZHLE1BQUFBLE9BQU8sQ0FBQ3RPLE1BQVIsR0FBaUIsSUFBakI7QUFDQSxVQUFJZ00sR0FBRyxHQUFHc0MsT0FBTyxDQUFDek0sY0FBUixDQUF1QixLQUF2QixFQUE4QjhCLFlBQTlCLENBQTJDekYsRUFBRSxDQUFDMEYsS0FBOUMsQ0FBVjtBQUNBb0ksTUFBQUEsR0FBRyxDQUFDaEksTUFBSixpQ0FBcUJtSyxRQUFyQjtBQUNILEtBSkQsTUFJTztBQUNIRyxNQUFBQSxPQUFPLENBQUN0TyxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7O0FBQ0QsUUFBSW9PLFVBQUosRUFBZ0I7QUFDWkcsTUFBQUEsT0FBTyxDQUFDdk8sTUFBUixHQUFpQixJQUFqQjs7QUFDQSxVQUFJeUcsS0FBSSxHQUFHOEgsT0FBTyxDQUFDMU0sY0FBUixDQUF1QixNQUF2QixFQUErQjhCLFlBQS9CLENBQTRDekYsRUFBRSxDQUFDd0ksTUFBL0MsQ0FBWDs7QUFDQUQsTUFBQUEsS0FBSSxDQUFDUyxXQUFMLEdBQW1CLEtBQUt4SCxVQUFMLENBQWdCME8sVUFBVSxHQUFHLENBQTdCLENBQW5CO0FBQ0gsS0FKRCxNQUlPO0FBQ0hHLE1BQUFBLE9BQU8sQ0FBQ3ZPLE1BQVIsR0FBaUIsS0FBakI7QUFDSDtBQUNKLEdBbHVCSTtBQW11Qkw7QUFDQXdPLEVBQUFBLFdBcHVCSyx5QkFvdUJTO0FBQ1Y7QUFDQXRRLElBQUFBLEVBQUUsQ0FBQ3VRLE9BQUgsR0FBYSxJQUFiO0FBQ0F2USxJQUFBQSxFQUFFLENBQUN3USxpQkFBSCxHQUF1QixJQUF2QjtBQUNBeFEsSUFBQUEsRUFBRSxDQUFDZ0MsR0FBSCxDQUFPQyxZQUFQLENBQW9Cd08sVUFBcEIsQ0FBK0IsT0FBL0I7QUFDQXpRLElBQUFBLEVBQUUsQ0FBQ3dELFFBQUgsQ0FBWTZELFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxHQTF1Qkk7QUEydUJMO0FBQ0FxSixFQUFBQSxNQTV1Qkssb0JBNHVCSTtBQUNMQyxJQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MscUNBQWhDLEVBQXVFLGVBQXZFLEVBQXdGLEtBQXhGO0FBQ0gsR0E5dUJJO0FBK3VCTDtBQUNBQyxFQUFBQSxnQkFodkJLLDhCQWd2QmM7QUFDZixRQUFJQyxRQUFRLEdBQUcsS0FBS3RPLFFBQUwsQ0FBY2tCLGNBQWQsQ0FBNkIsZUFBN0IsQ0FBZjtBQUNBb04sSUFBQUEsUUFBUSxDQUFDalAsTUFBVCxHQUFrQixJQUFsQjtBQUNILEdBbnZCSTtBQW92QkxrUCxFQUFBQSxnQkFwdkJLLDhCQW92QmM7QUFDZixRQUFJRCxRQUFRLEdBQUcsS0FBS3RPLFFBQUwsQ0FBY2tCLGNBQWQsQ0FBNkIsZUFBN0IsQ0FBZjtBQUNBb04sSUFBQUEsUUFBUSxDQUFDalAsTUFBVCxHQUFrQixLQUFsQjtBQUNILEdBdnZCSTtBQXd2Qkw7QUFDQW1QLEVBQUFBLGVBenZCSyw2QkF5dkJhO0FBQ2QsUUFBSUYsUUFBUSxHQUFHLEtBQUt0TyxRQUFMLENBQWNrQixjQUFkLENBQTZCLGNBQTdCLENBQWYsQ0FEYyxDQUVkOztBQUNBb04sSUFBQUEsUUFBUSxDQUFDalAsTUFBVCxHQUFrQixJQUFsQjtBQUNILEdBN3ZCSTtBQTh2QkxvUCxFQUFBQSxlQTl2QkssNkJBOHZCYTtBQUNkLFFBQUlILFFBQVEsR0FBRyxLQUFLdE8sUUFBTCxDQUFja0IsY0FBZCxDQUE2QixjQUE3QixDQUFmO0FBQ0FvTixJQUFBQSxRQUFRLENBQUNqUCxNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUFqd0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOiA4LFxuICAgIEJPT006IDksXG4gICAgTE9DSzogMTAsXG4gICAgU0hPVUNFOiAxMSxcbiAgICBQT1dFUjogMTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/lhbPpl61GUFPpnaLmnb9cbiAgICAgICAgLy8gY2MuZGlyZWN0b3Iuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgY2Muem0gPSB7fTtcbiAgICAgICAgLy8g5aKe5Yqg5bGP5bmV6KeG6aKRXG4gICAgICAgIHRoaXMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXmuLjmiI8g5aaC5p6c56ys5LiA5qyh6L+b5YWl6YKj5LmI5by55Ye6Rmlyc3TlvLnnqpdcbiAgICAgICAgbGV0IGZpcnN0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvRmlyc3QnKTtcbiAgICAgICAgZmlyc3RMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9maXJzdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0XCIpO1xuICAgICAgICBpZiAoIV9maXJzdCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlyc3RMYXllci5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgZmlyc3RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZpcnN0TGF5ZXIpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiPXG4gICAgICAgIC8vIOiuvue9rueVjOmdolxuICAgICAgICB0aGlzLlNldExheWVyID0gY2MuZmluZCgnQ2FudmFzL1NldExheWVyJyk7XG4gICAgICAgIC8vIOetvuWIsOeVjOmdolxuICAgICAgICB0aGlzLlNpZ25MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TaWduTGF5ZXInKTtcbiAgICAgICAgLy8g5aSn6L2s55uY55WM6Z2iXG4gICAgICAgIHRoaXMuVHVybnRhYmxlTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVHVybnRhYmxlTGF5ZXInKTtcbiAgICAgICAgLy8g5a2Y6ZKx572Q55WM6Z2iIOaPkOeOsOS5n+aYr+i/meS4queVjOmdolxuICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyID0gY2MuZmluZCgnQ2FudmFzL0dldE1vbmV5TGF5ZXInKTtcbiAgICAgICAgLy8g5LiD5pel5Lu75YqhXG4gICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldmVuV29ya0xheWVyXCIpO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXnlYzpnaJcbiAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1JlZFBvb2xMYXllclwiKVxuICAgICAgICAvLyDojrflj5bnianlk4HnmoTlvLnnqpdcbiAgICAgICAgdGhpcy5HZXRHb29kTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dldEdvb2RcIilcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5aWW5Yqx55WM6Z2iXG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2VlVmlkZW9sYXllclwiKVxuICAgICAgICAvLyDph43nva7lhbPljaHnlYzpnaJcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVzdW1lTGF5ZXJcIilcbiAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gMDtcbiAgICAgICAgLy8gc3RhcnRCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuU3RhcnRHYW1lLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLkJHTV9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5CR00pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhodHRwLnNlbmRSZXF1ZXN0KTtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma8yXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgZ3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgIT09IFwib3ZlclwiKSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSA9PT0gJzQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNpZ25EYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgc29ydExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9IFwic2lnblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb3J0TGlzdC5zb3J0KCk7XG4gICAgICAgIHZhciBzdHJUb0ppYU1pID0gXCJcIjtcbiAgICAgICAgc29ydExpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzdHJUb0ppYU1pICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyBkYXRhW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBzdHJUb0ppYU1pID0gXCJ0b2tlbj1cIiArIGNjLnptLnVzZXJJbmZvLnNjMSArIHN0clRvSmlhTWk7XG4gICAgICAgIC8vIHZhciBub0ppYU1pID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmnKrliqDlr4bliY09XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHZhciBoZXhfbWQ1ID0gcmVxdWlyZShcIk1ENVwiKVxuICAgICAgICBzdHJUb0ppYU1pID0gaGV4X21kNShzdHJUb0ppYU1pKTtcbiAgICAgICAgZGF0YS5zaWduID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDlr4blkI49XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICBnZXRVc2VyRWNwbSgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJlY3BtXCI6IDEsXG4gICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmNcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDnlKjmiLfnmoRFY3BtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGNjLnptLmFkID0gcmVzLmRhdGEuYWQ7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy51c2VySW5mbyk7XG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleExheWVyKCk7XG4gICAgICAgICAgICAvLyDliLfmlrDkuIDkuIvnlKjmiLfnmoRFY3BtXG4gICAgICAgICAgICB0aGlzLmdldFVzZXJFY3BtKCk7XG4gICAgICAgICAgICAvLyDkvZPlipvmmK/lkKblgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuUG93ZXJUaW1lKClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFBvd2VyVGltZSgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPCA1KSB7XG4gICAgICAgICAgICAvLyDnjrDlnKjmiY3kvJrlgJLorqHml7ZcbiAgICAgICAgICAgIC8vIOWFiOiOt+WPllxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBvd2VyVGltZVNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXJfc2VjIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgICAgIC8vIOWcqOiOt+WPlueUqOaIt+S/oeaBryDmmK/lkKbkvZPlipvmu6Eg5rKh5pyJ5ruh5o6l552A5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyk7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlcl9zZWMtLVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5bCG56eS5pWw5Lyg6L+b5p2l55Sf5oiQ5LiA5LiqMDA6MDDlvaLlvI/nmoTlrZfnrKbkuLJcbiAgICBjaGFuZ2VTZWNvbmQocykge1xuICAgICAgICBsZXQgbWludXRlID0gXCIwXCIgKyBNYXRoLmZsb29yKHMgLyA2MCk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBzICUgNjAgPj0gMTAgPyBzICUgNjAgOiBcIjBcIiArIHMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlICsgXCI6XCIgKyBzZWNvbmRcbiAgICB9LFxuICAgIGd1aWRlT3ZlcigpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIFwib3ZlclwiKTtcbiAgICB9LFxuICAgIC8vIOiuvue9ruWxj+W5lemAgumFjVxuICAgIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDw9IDcyMCAvIDEyODApIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBTdGFydEdhbWUoKSB7XG4gICAgICAgIC8v5YWz6ZetQkdNXG4gICAgICAgIC8vIGNjLnptLnVzZXJJbmZvLndpbiA9IHRydWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5CR01fSUQpO1xuICAgICAgICAvL+a4heepuuWFs+WNoeaVsCDkuI3muIXnqbrlhbPljaFcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGUpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8v6Lez6L2s5Zy65pmvXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+S5i+WJjSDlhYjojrflj5blhbPljaHkv6Hmga8g5aaC5p6c5rKh5pyJ5YWz5Y2h5L+h5oGv5LiN6L+b5YWl5ri45oiPXG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLlhbPljaHkv6Hmga89XCIsIGNjLnptLkxldmVsSW5mbyk7XG4gICAgICAgICAgICAvLyDliKTmlq1cbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S655yL6KeG6aKR6I635b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VlVmlkZW9sYXllcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dTZWVWaWRlb2xheWVyKCkge1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+WlluWKsVxuICAgIHNlZVZpZGVvQXdhcmQoKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIGFkOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0dyb3dQb3dlclwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuetvuWIsOeVjOmdolxuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWFiOiOt+WPluetvuWIsOWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TaWduSW5MaXN0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgdGhpcy5zaWduRGF5ID0gcmVzLmRhdGEuZGF5O1xuICAgICAgICAgICAgdGhpcy5TaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXlOb2RlID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSBpdGVtc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNpZ25EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrorr7nva7nlYzpnaJcbiAgICBzaG93U2V0TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuU2V0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIC8vIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIpO1xuICAgICAgICBsZXQgbmlja05hbWUgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibmlrZW5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbmlja05hbWUuc3RyaW5nID0gdGhpcy51c2VySW5mby5uaWNrX25hbWU7XG4gICAgICAgIGxldCB1c2VySWQgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcmlkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHVzZXJJZC5zdHJpbmcgPSBg55So5oi3SUTvvJoke3RoaXMudXNlckluZm8udXNlcl9pZH1gXG4gICAgICAgIC8vIGljb25cbiAgICAgICAgbGV0IGljb24gPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciByZW1vdGVVcmwgPSB0aGlzLnVzZXJJbmZvLmF2YXRhcl91cmw7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgeyBleHQ6ICcucG5nJyB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuS4u+eVjOmdolxuICAgIHNob3dJbmRleExheWVyKCkge1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgICAgICBsZXQgYnRuQ29tID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9CZWdpbkdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby53aW4pIHtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZWdpbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5zZWMgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ5YCS6K6h5pe2IOW8gOWni+WAkuiuoeaXtiB0b2RvXG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlR1cm5UYWJsZUNvdW50RG93biwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUtLTtcbiAgICAgICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKHRoaXMuY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuue6ouWMheaxoOeVjOmdolxuICAgIHNob3dSZWRQb29sTGF5ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWlluaxoOS/oeaBr1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvSmFja1BvdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlJlZFBvb2xMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHBvb2xJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgYXJyID0gW1wia2FpXCIsIFwieGluXCIsIFwia3VhbmdcIiwgXCJnb25nXCJdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBvb2xJbmZvW2FycltpXV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKGFycltpXSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb20uc3RyaW5nID0gXCJ4XCIgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWlluaxoOmHkeminSBcbiAgICAgICAgICAgIGxldCBhd2FyZF9sYmwgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgYXdhcmRfbGJsLnN0cmluZyA9IHBvb2xJbmZvLmFtb3VudFxuICAgICAgICAgICAgLy8g5aKe5Yqg5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgaG91ciA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaG91ci5zdHJpbmcgPSBwb29sSW5mby5ob3VyO1xuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbWludXRlLnN0cmluZyA9IHBvb2xJbmZvLm1pbnV0ZSA8IDEwID8gXCIwXCIgKyBwb29sSW5mby5taW51dGUgOiBwb29sSW5mby5taW51dGU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLo35pel5Lu75Yqh55WM6Z2iXG4gICAgc2hvd1NldmVuV29ya0xheWVyKCkge1xuICAgICAgICAvLyDnjrDojrflj5bkuIPml6Xku7vliqHliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL01pc3Npb25zXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5LiD5pel5Lu75Yqh5YiX6KGoPVwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAvLyDpgJrov4fmlbDmja7liJ3lp4vljJbnlYzpnaIg54q25oCBIDAu5pyq6aKG5Y+WIDEu5bey6aKG5Y+WXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJEYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICBsZXQgc2lnbk51bWJlciA9IDA7XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI6I635Y+W6Ieq5bex55qE5pWw5o2uIFxuICAgICAgICAgICAgICAgIGxldCBfc3RhdHVzID0gaXRlbXNbaV0uc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICghX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICBzaWduTnVtYmVyID0gaXRlbXNbaV0ubnVtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2lnbk51bWJlciA+IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHNpZ25OdW1iZXIgPSBzZXJ2ZXJEYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHNpZ25OdW1iZXIgPT09IGl0ZW1zW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMCA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpooblj5bnrb7liLDlpZblirFgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YKA6K+3JHtfZGF0YS5uZWVkX2ludml0ZX3kuKrlpb3lj4tgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHJlc3VtZUxldmVsKCkge1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9SZXNldFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgc2V2ZW5Xb3JrR2V0TW9uZXkoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi5p2h5Lu25pyq6L6+5oiQXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QdWxsTWlzc2lvblwiLCBcIlBPU1RcIiwgeyBpZDogdGFyZ2V0Ll9pZCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TGF5ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NhdmluZ1BvdFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGdjID0gZGF0YS5nYyB8fCAwXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWtmOmSsee9kOS/oeaBrz1cIiwgZGF0YSk7XG4gICAgICAgICAgICAvLyDlhYjlrprkuYnlvZPliY3pgqPkuKrpmLbmrrXmmK/lkKblj6/ku6Xmj5Dlj5ZcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IDA7XG4gICAgICAgICAgICBsZXQgYXJyID0gWzAuMywgMC41LCAxLCAyLCA1LCAxMCwgMjBdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuaXRlbXMuTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pdGVtc1tpXS50aW1lcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWIneWni+WMluWtmOmSsee9kOeVjOmdouWxnuaAp1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5pi+56S65YWD5a6d5L2Z6aKdXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiWXVhbkJhb19OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBnYztcbiAgICAgICAgICAgIC8vIC8vIOWFg+Wunei3n+eOsOmHkei/m+ihjOi9rOaNoiDovazmjaLmr5TkvovkuLoxMDAwMDoxXG4gICAgICAgICAgICB0aGlzLmV4dHJhY3RNb25leSA9IGdjIC8gMTAwMDA7XG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiQ2hhbmdlX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMuZXh0cmFjdE1vbmV5ICsgXCLlhYNcIjtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gbnVsbDtcbiAgICAgICAgICAgIC8vIOW8gOWni+eahOaXtuWAmWdldE1vbmV5QnRu572u54Gw5LiN5Y+v54K55Ye7XG4gICAgICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDngrnlh7vpgInmi6nmj5DnjrDph5HpkrHmjInpkq5cbiAgICBjaG9pY2VHZXRNb25leUJ0bihlLCBtc2cpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g54K55Ye75o+Q546w5oyJ6ZKuXG4gICAgY2xpY2tHZXRNb25leUJ0bjEoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5byA5aeL5o+Q546w6YeR6ZKxXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMSAg5piv5ZCm5YWD5a6d5pWw6YeP5piv5ZCm5ruh6Laz5o+Q546w5qGj5L2N77yM5LiN5ruh6Laz5pe25o+Q56S677ya5YWD5a6d5pWw6YeP5LiN6LazXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMiAg5qGj5L2N5piv5ZCm5Li65pyA5bCP5qGj5L2N77yM5aaC5p6c5LiN5piv5o+Q56S677ya6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuW8gOWni+aPkOeOsFwiLCB0aGlzLmNob2ljZUJ0bi5tb25leSk7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYWN0TW9uZXkgPCB0aGlzLmNob2ljZUJ0bi5tb25leSkge1xuICAgICAgICAgICAgICAgIC8vIOS4jeespuWQiOadoeS7tjEg5by55Ye65YWD5a6d5pWw6YeP5LiN6Laz55qEdGlwc1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoXCLlhYPlrp3mlbDph4/kuI3otrNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuLm1vbmV5ID4gdGhpcy5nZXRNb25leVN0YWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MiBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmDveespuWQiOadoeS7tuWDj+acjeWKoeWZqOWPkemAgeivt+axglxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VcIiwgXCJQT1NUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/mj5DnjrBcblxuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IHRhcmdldC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKTtcbiAgICAgICAgICAgICAgICBsYXllci5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93VGlwcyhtc2cpIHtcbiAgICAgICAgbGV0IHRpcHMgPSBjYy5maW5kKFwiQ2FudmFzL1RpcHNcIilcbiAgICAgICAgdGlwcy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aXBzLnkgPSAxNDU7XG4gICAgICAgIGxldCBsYmwgPSB0aXBzLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxibC5zdHJpbmcgPSBtc2c7XG4gICAgICAgIGNjLnR3ZWVuKHRpcHMpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMSwgeyB5OiAzMDAgfSkuZGVsYXkoMC41KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvLyDlhbPpl63pn7PkuZBcbiAgICBzdG9wQkdNKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dNdXNpYyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5CR01fSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5CR01fSUQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pnIfliqhcbiAgICBzaGFrZVBob25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coanNiLkRldmljZSk7XG4gICAgICAgICAgICAvLyBqc2IuRGV2aWNlLnZpYnJhdGUoMyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHVuU2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjb21wbGV0ZUJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJjb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g55So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJYaWVZaSgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLnlKjmiLfljY/orq5cIik7XG4gICAgfSxcbiAgICAvLyDpmpDnp4HmlL/nrZZcbiAgICBzaG93VXNlcllpblNpKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumakOengeaUv+etllwiKTtcbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRCYWNrQnRuKGUpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlhbPpl63lvZPliY3kuZ/ov5vlhaXpppbpobUg5Yi35paw55WM6Z2iXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLpgIDlh7rnmbvpmYZcIik7XG4gICAgfSxcbiAgICAvLyDngrnlh7vnrb7liLDmjInpkq5cbiAgICBjbGlja1NpZ25CdG4oZSkge1xuICAgICAgICAvLyDnrb7liLBcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBsZXQgcmVzID0ge2RhdGE6e1xuICAgICAgICAgICAgLy8gICAgIFwiZGF5XCI6MSxcbiAgICAgICAgICAgIC8vICAgICBcImNhcmRcIjoxLFxuICAgICAgICAgICAgLy8gICAgIFwiZ2NcIjoxMDAsICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Ye7562+5YiwXCIsIHJlcyk7XG4gICAgICAgICAgICBsZXQgc2lnbkRheSA9IHRoaXMuU2lnbkxheWVyLmdldENoaWxkQnlOYW1lKFwiZGF5X1wiICsgdGhpcy5zaWduRGF5KTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAvLyBkYXRh5pWw5o2uIGdj5aWW5Yqx5YWD5a6dIGNhcmQgMOacquiOt+W+lyAx5byALDLlv4MsM+efv1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcIuS4ieWFg+e6ouWMhVwiLCBcIueCuOiNr3gxXCIsIFwi6I2v5rC0eDFcIiwgXCI1MDDlhYPlrp1cIiwgXCI4Ljg45YWD57qi5YyFXCIsIFwi5pe26ZKfeDFcIiwgXCIxOC44OOWFg+e6ouWMhVwiXVxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcChhcnJbdGhpcy5zaWduRGF5IC0gMV0sIEFXQVJEW1wiREFZX1wiICsgdGhpcy5zaWduRGF5XSwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICB9KS5jYXRjaCgocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+S9k+eOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4oZSkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+aPkOeOsOaMiemSrlwiKTtcbiAgICAgICAgLy8gdGhpcy5zaG93R2V0TW9uZXlMYXllcigpO1xuICAgIH0sXG4gICAgLy8g54K55Ye76L2s55uY5byA5aeL5oyJ6ZKuXG4gICAgY2xpY2tUdXJuVGFibGVCdG4oZSkge1xuICAgICAgICAvLyDmr4/nnIvkuIDmrKHop4bpopHlj6/ojrflvpfkuIDmrKHmir3lpZbmnLrkvJrvvIzmr4/mrKHmir3lpZblhrfljbTml7bpl7TkuLo15YiG6ZKfIOWGt+WNtOaXtumXtOiuqeacjeWKoeWZqOWBmlxuICAgICAgICBpZiAodGhpcy5jb3VudERvd25UaW1lID4gMCkge1xuICAgICAgICAgICAgLy8g5oq95aWW5YCS6K6h5pe2ID49MCDku6Pooajlj6/ku6Xmir3lpZbvvIw8MCDlj5bnu53lr7nlgLwg5YCS5pWw56eS5pWwXG4gICAgICAgICAgICAvLyB0aGlzLnNob3dUaXBzKFwi5oq95aWW5YCS6K6h5pe2XCIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFiOWDj+acjeWKoeWZqOWPkemAgeivt+axguiOt+WPlueJqeWTgWlkXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwiYWRcIjogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICBcIjFcIjogNjAsXG4gICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgIFwiMTFcIjogMTgwLFxuICAgICAgICAgICAgXCIxMlwiOiAxMjAsXG4gICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgIFwiMzJcIjogMzAwXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeVwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vlvIDlp4vovaznm5hcIiwgcmVzKTtcbiAgICAgICAgICAgIC8vIHRvZG8gdGVzdCDlvZPliY3ovaznm5hpZOaYrzNcbiAgICAgICAgICAgIHRoaXMuZW5kQW5nbGUgPSBvYmpbXCJcIiArIHJlcy5kYXRhLmF3YXJkXTtcbiAgICAgICAgICAgIC8vIOW8gOWni+aXi+i9rCDliJ3lp4vpgJ/luqbkuLpcbiAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgIHRoaXMuYmVnaW5UdXJuID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICB0aGlzLnZhbHVlID0gMTtcbiAgICAgICAgICAgIHRoaXMuY2lyY2xlID0gMDtcbiAgICAgICAgICAgIC8vIHRoaXMudHVybkRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIGxldCBhd2FyZCA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIxMFwiOiB7IG5hbWU6IFwi54K45by5eDFcIiwgaW5kZXg6IEFXQVJELkJPT00gfSxcbiAgICAgICAgICAgICAgICAgICAgXCIxMVwiOiB7IG5hbWU6IFwi5pe26ZKfeDFcIiwgaW5kZXg6IEFXQVJELkxPQ0sgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICBcIjMxXCI6IHsgbmFtZTogXCLkupTlhYPnuqLljIVcIiwgaW5kZXg6IEFXQVJELlJFRF81IH0sXG4gICAgICAgICAgICAgICAgICAgIFwiMzJcIjogeyBuYW1lOiBcIuWNgeWFg+e6ouWMhVwiLCBpbmRleDogQVdBUkQuUkVEXzEwIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IF9hd2FyZCA9IGF3YXJkW2RhdGEuYXdhcmRdXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wKF9hd2FyZC5uYW1lLCBfYXdhcmQuaW5kZXgsIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmVnaW5UdXJuKSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vml4vovaxcbiAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLnBvaW50LmFuZ2xlIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICAgICAgICAgIHRoaXMuY2lyY2xlKys7XG5cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jaXJjbGUgJSAyID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOadoeS7tui+vuaIkCDooajnpLrovazkuobkuKTlnIhcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCAtPSB0aGlzLnZhbHVlO1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy52YWx1ZSA9PT0gNC41KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlID0gNC41O1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSArPSAxLjU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyh0aGlzLnNwZWVkKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDw9IDUgJiYgdGhpcy5wb2ludC5hbmdsZSA8PSB0aGlzLmVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gdGhpcy5lbmRBbmdsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5aKe5Yqg5pi+56S65by55Ye66I635b6X54mp5ZOB55qE5by556qXXG4gICAgLy8g5aWW5ZOB57G75Z6LIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICBzaG93UG9wKGdvb2ROYW1lLCBnb29kTnVtYmVyLCBnY051bWJlciwgdGV4dE51bWJlcikge1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgIGxldCBpY29uID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICBsZXQgdGV4dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRleHQuc3RyaW5nID0gYOiOt+W+lyR7Z29vZE5hbWV9YDtcbiAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuQXdhcmRGcmFtZXNbZ29vZE51bWJlcl07XG4gICAgICAgIGxldCBsYXlvdXQxID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzFcIik7XG4gICAgICAgIGxldCBsYXlvdXQyID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzJcIik7XG4gICAgICAgIGlmIChnY051bWJlcikge1xuICAgICAgICAgICAgbGF5b3V0MS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGxibCA9IGxheW91dDEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg6I635b6X5YWD5a6dKyR7Z2NOdW1iZXJ9YFxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5b3V0MS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGV4dE51bWJlcikge1xuICAgICAgICAgICAgbGF5b3V0Mi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGljb24gPSBsYXlvdXQyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLlRleHRGcmFtZXNbdGV4dE51bWJlciAtIDFdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgbGF5b3V0Mi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdFd4TG9naW4oKSB7XG4gICAgICAgIC8vIOa4heaOiXRva2VuXG4gICAgICAgIGNjLnd4VG9rZW4gPSBudWxsO1xuICAgICAgICBjYy53eExvZ2luUmVzdWx0Y29kZSA9IG51bGw7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShcInRva2VuXCIpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJMb2dpblwiKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+WKoOi9veW5v+WRilxuICAgIGFkUGxheSgpIHtcbiAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwibG9hZEppTGlWaWRlb1wiLCBcIigpVlwiKTtcbiAgICB9LFxuICAgIC8vIOaYvuekuueUqOaIt+WNj+iurlxuICAgIHNob3dVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S66ZqQ56eB5pS/562WXG4gICAgc2hvd1VzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcml2YWN5XCIpO1xuICAgICAgICAvLyDorr7nva7nlKjmiLfljY/orq5cbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gZmFsc2U7XG4gICAgfVxufSk7XG4iXX0=