
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

// const http = require("Http");
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
    var _this = this;

    //关闭FPS面板
    // cc.director.setDisplayStats(false);
    cc.zm = {};
    cc.zm.videoAd = {}; // 签到标记

    cc.zm.videoAd.clickSign = true; // 转盘标记

    cc.zm.videoAd.clickTable = true; // 增加屏幕视频

    cc.Tools.screenAdapter(); // 进入主界面打点

    cc.Tools.dot("enter_main", null); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

    this.firstLayer = cc.find('Canvas/First');
    this.firstLayer.active = false;

    var _first = cc.sys.localStorage.getItem("first");

    this.canClickFristBtn = false;

    if (!_first) {
      cc.sys.localStorage.setItem("first", true); // 显示banner广告

      cc.Tools.showBanner();
      this.scheduleOnce(function () {
        _this.firstLayer.scale = 0;
        _this.firstLayer.active = true;
        cc.tween(_this.firstLayer).to(0.5, {
          scale: 1
        }).delay(3).call(function () {
          _this.canClickFristBtn = true;
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
    this.countDownTime = 0;
    this.signNumber = 0;
    this.BGM_ID = cc.audioEngine.play(this.BGM); //预加载场景2

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


    this.getUserInfo(); // 记录打点的值
    // 签到打点

    this.sign_in_acti = 0; // 转盘打点

    this.turntable_acti = 0; // 提现打点

    this.cash_out_acti = 0; // 存钱罐打点

    this.bank_acti = 0; // 奖池红包打点

    this.jackpot_acti = 0; // 开始游戏打点

    this.level_start = 0;
  },
  getUserInfo: function getUserInfo() {
    var _this2 = this;

    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      _this2.userInfo = res.data;
      cc.zm.userInfo = _this2.userInfo;
      console.log("cocos----user info " + JSON.stringify(_this2.userInfo)); // 注册打点

      cc.Tools.dot("sign_in", {
        sigsign_in_time: new Date()
      });

      _this2.showIndexLayer(); // 体力是否倒计时


      _this2.PowerTime(); // todo test
      //  cc.Tools.adCallBack();

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
  StartGame: function StartGame() {
    var _this3 = this;

    //关闭BGM
    if (!cc.sys.localStorage.getItem("first")) {
      return;
    } // cc.zm.userInfo.win = true;


    cc.audioEngine.stop(this.BGM_ID); //清空关卡数 不清空关卡

    if (this.guide) {
      cc.sys.localStorage.setItem("guide", 1);
    } //跳转场景
    // 开始游戏之前 先获取关卡信息 如果没有关卡信息不进入游戏


    cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      _this3.level_start++;
      var dotData = {
        sign_in_acti: _this3.sign_in_acti,
        turntable_acti: _this3.turntable_acti,
        cash_out_acti: _this3.cash_out_acti,
        bank_acti: _this3.bank_acti,
        jackpot_acti: _this3.jackpot_acti,
        level_start: _this3.level_start
      };
      cc.Tools.dot("click", dotData);
      cc.zm.LevelInfo = res.data;
      console.log("cocos----关卡信息=", JSON.stringify(cc.zm.LevelInfo)); // 判断

      if (cc.zm.userInfo.power <= 0) {
        // 显示看视频获得体力界面
        _this3.showSeeVideolayer();
      } else {
        cc.director.loadScene("Game");
      }
    });
  },
  showSeeVideolayer: function showSeeVideolayer() {
    cc.Tools.showBanner();
    this.SeeVideolayer.active = true;
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward() {
    cc.zm.videoAd.enterGame = false;
    cc.Tools.showJiliAd();
    this.SeeVideolayer.active = false;
  },
  // 显示签到界面
  showSignLayer: function showSignLayer() {
    var _this4 = this;

    // 先获取签到列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function (res) {
      var items = res.data.items; // 签到按钮打点

      cc.Tools.showBanner();
      _this4.sign_in_acti++;
      var dotData = {
        sign_in_acti: _this4.sign_in_acti,
        turntable_acti: _this4.turntable_acti,
        cash_out_acti: _this4.cash_out_acti,
        bank_acti: _this4.bank_acti,
        jackpot_acti: _this4.jackpot_acti,
        level_start: _this4.level_start
      };
      cc.Tools.dot("click", dotData);

      var btnCom = _this4.SignLayer.getChildByName("signBtn").getComponent(cc.Button);

      _this4.signDay = res.data.day;
      _this4.SignLayer.active = true;

      for (var i = 1; i <= 7; i++) {
        var dayNode = _this4.SignLayer.getChildByName("day_" + i);

        var _data = items[i - 1];

        if (i === _this4.signDay) {
          if (_data.status) {
            btnCom.enableAutoGrayEffect = true;
            btnCom.interactable = false;
          } else {
            btnCom.interactable = true;
          }
        }

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

    cc.Tools.showBanner();
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
    // 隐藏banner
    if (!cc.endCountTime) {
      cc.endCountTime = new Date().getTime();
    } else {
      if (cc.endCountTime - cc.beginCountTime > 30000) {
        // 触发插屏
        cc.Tools.showTableScreen();
        cc.beginCountTime = cc.endCountTime;
      }
    }

    cc.Tools.hideBanner(); // 红包的数量

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
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this5.turntable_acti++;
      var dotData = {
        sign_in_acti: _this5.sign_in_acti,
        turntable_acti: _this5.turntable_acti,
        cash_out_acti: _this5.cash_out_acti,
        bank_acti: _this5.bank_acti,
        jackpot_acti: _this5.jackpot_acti,
        level_start: _this5.level_start
      };
      cc.Tools.dot("click", dotData);
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
    cc.Tools.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this6.jackpot_acti++;
      var dotData = {
        sign_in_acti: _this6.sign_in_acti,
        turntable_acti: _this6.turntable_acti,
        cash_out_acti: _this6.cash_out_acti,
        bank_acti: _this6.bank_acti,
        jackpot_acti: _this6.jackpot_acti,
        level_start: _this6.level_start
      };
      cc.Tools.dot("click", dotData);
      _this6.RedPoolLayer.active = true;
      var poolInfo = res.data;
      var arr = ["kai", "xin", "kuang", "gong"];

      for (var i = 0; i < 4; i++) {
        var value = poolInfo[arr[i]];

        var com = _this6.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);

        com.string = "x" + value;
      } // 奖池金额 
      // let award_lbl = this.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);
      // award_lbl.string = poolInfo.amount
      // 增加倒计时


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
    cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
      cc.Tools.showBanner(); // 通过数据初始化界面 状态 0.未领取 1.已领取

      var items = res.data.items;
      var serverDay = res.data.day;

      if (_this7.signNumber === serverDay) {
        return;
      }

      var arr = [];

      for (var i = 0; i < items.length; i++) {
        // 先获取自己的数据 
        var _status = items[i].status;

        if (!_status) {
          _this7.signNumber = items[i].num;
          break;
        }
      }

      if (_this7.signNumber > serverDay) {
        _this7.signNumber = serverDay;
      } // todo
      // this.signNumber = 7;


      for (var _i = 0; _i < items.length; _i++) {
        if (_this7.signNumber === items[_i].num) {
          arr.push(items[_i]);
        }
      } // 设置title


      var title = _this7.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);

      title.spriteFrame = _this7.SevenFrames[arr[0].num - 1]; // 一只当前数据item 通过数据

      var layout = _this7.SevenWorkLayer.getChildByName("layout");

      if (arr.length === 1) {
        var _layout = layout.getChildByName("layout_2");

        _layout.active = false;
      }

      for (var j = 0; j < arr.length; j++) {
        var _data = arr[j];

        var _layoutH = layout.getChildByName("layout_" + (j + 1));

        _layoutH.active = true;

        var btn = _layoutH.getChildByName("getMoneyBtn");

        btn._id = _data.id;
        btn.value = _data.value;
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

          var _arrow2 = item2.getChildByName("icon").getChildByName("arrow");

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

    cc.Tools.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function (res) {
      _this8.ResumeLayer.active = false;

      _this8.getUserInfo();
    });
  },
  sevenWorkGetMoney: function sevenWorkGetMoney(e) {
    var _this9 = this;

    this.cash_out_acti++;
    var dotData = {
      sign_in_acti: this.sign_in_acti,
      turntable_acti: this.turntable_acti,
      cash_out_acti: this.cash_out_acti,
      bank_acti: this.bank_acti,
      jackpot_acti: this.jackpot_acti,
      level_start: this.level_start
    };
    cc.Tools.dot("click", dotData);
    var target = e.target;

    if (!target.complete) {
      cc.Tools.showTips(this.node, "条件未达成");
    } else {
      // 像服务器发送提现请求
      cc.Tools.sendRequest("pit.v1.PitSvc/PullMission", "POST", {
        id: target._id
      }).then(function (res) {
        // 像服务器发送提现请求
        var btnCom = target.getComponent(cc.Button);
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
        _this9.SevenWorkLayer.getChildByName("getLayer").active = true; // 重新刷新

        _this9.showSevenWorkLayer();

        var dotData = {
          cash_type: "红包提现",
          cash_num: target.value,
          cash_times: "",
          cash_result: "成功"
        };
        console.log("cocos----打点数据", JSON.stringify(dotData));
        cc.Tools.dot("cash_out", dotData);
      });
    }
  },
  // 显示存钱罐界面
  showGetMoneyLayer: function showGetMoneyLayer() {
    var _this10 = this;

    // 打开存钱罐 获取存钱罐的信息
    cc.Tools.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function (res) {
      cc.Tools.showBanner();
      _this10.bank_acti++;
      var dotData = {
        sign_in_acti: _this10.sign_in_acti,
        turntable_acti: _this10.turntable_acti,
        cash_out_acti: _this10.cash_out_acti,
        bank_acti: _this10.bank_acti,
        jackpot_acti: _this10.jackpot_acti,
        level_start: _this10.level_start
      };
      cc.Tools.dot("click", dotData);
      var data = res.data;
      var gc = data.gc || 0; // 先定义当前那个阶段是否可以提取

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
    var _this11 = this;

    this.cash_out_acti++;
    var dotData = {
      sign_in_acti: this.sign_in_acti,
      turntable_acti: this.turntable_acti,
      cash_out_acti: this.cash_out_acti,
      bank_acti: this.bank_acti,
      jackpot_acti: this.jackpot_acti,
      level_start: this.level_start
    };
    cc.Tools.dot("click", dotData);
    var target = e.target;

    if (this.choiceBtn === null) {
      return;
    } else {
      // 开始提现金钱
      // 判断条件 1  是否元宝数量是否满足提现档位，不满足时提示：元宝数量不足
      // 判断条件 2  档位是否为最小档位，如果不是提示：请先完成上一个档位提现
      if (this.extractMoney < this.choiceBtn.money) {
        // 不符合条件1 弹出元宝数量不足的tips
        cc.Tools.showTips(this.node, "元宝数量不足");
        return;
      }

      if (this.choiceBtn.money > this.getMoneyStage) {
        // 不符合条件2 
        cc.Tools.showTips(this.node, "请先完成上一个档位提现");
        return;
      } // 都符合条件像服务器发送请求


      cc.Tools.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function (res) {
        // 成功提现
        var dotData = {
          cash_type: "元宝提现",
          cash_num: _this11.choiceBtn.money,
          cash_times: "",
          cash_result: "成功"
        };
        console.log("cocos----打点数据", JSON.stringify(dotData));
        cc.Tools.dot("cash_out", dotData);
        var layer = target.parent.getChildByName("getLayer");
        layer.active = true;
      });
    }
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
  // 退出登陆
  ExitBackBtn: function ExitBackBtn(e) {
    e.target.parent.active = false;

    if (this.choiceBtn) {
      this.unSelectBtn(this.choiceBtn);
      this.choiceBtn = null;
    }

    if (this.TurntableLayer.active === true) {
      this.showTurntableLayer();
    }

    if (this.SignLayer.active === true) {
      this.showSignLayer();
    }

    if (this.firstLayer.active === true) {
      if (!this.canClickFristBtn) {
        return;
      }
    } // 关闭当前也进入首页 刷新界面


    this.signNumber = 0;
    this.getUserInfo();
    cc.endCountTime = new Date().getTime();
  },
  // 点击签到按钮
  clickSignBtn: function clickSignBtn(e) {
    // 签到
    cc.Tools.showJiliAd();
  },
  // 点击转盘开始按钮
  clickTurnTableBtn: function clickTurnTableBtn(e) {
    // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
    if (this.countDownTime > 0) {
      // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
      return;
    }

    cc.Tools.showJiliAd();
  },
  createRandm: function createRandm(n, m) {
    m += 1;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },
  update: function update(dt) {
    var _this12 = this;

    // 转盘
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
      }

      if (this.speed <= 5 && this.point.angle <= this.endAngle) {
        this.beginTurn = false;
        this.point.angle = this.endAngle;
      }
    } // 签到


    if (!cc.zm.videoAd.clickSign) {
      console.log("cocos----获取签到奖励");
      cc.zm.videoAd.clickSign = true; // 实时更新签到界面
      // 先像服务器发送请求获取物品id

      var sendData = {
        "ad": cc.zm.ad
      };
      cc.Tools.sendRequest("pit.v1.PitSvc/SignIn", "POST", sendData).then(function (res) {
        var signDay = _this12.SignLayer.getChildByName("day_" + _this12.signDay);

        _this12.completeBtn(signDay); // data数据 gc奖励元宝 card 0未获得 1开,2心,3矿


        var arr = ["三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包"];
        var data = res.data;

        _this12.showPop(arr[_this12.signDay - 1], AWARD["DAY_" + _this12.signDay], data.gc, data.card);
      })["catch"](function (res) {
        cc.Tools.showTips(_this12.node, "今日奖励已领取");
      });
    } // 转盘


    if (!cc.zm.videoAd.clickTable) {
      cc.zm.videoAd.clickTable = true; // 先像服务器发送请求获取物品id

      var _sendData = {
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
      cc.Tools.sendRequest("pit.v1.PitSvc/Lottery", "POST", _sendData).then(function (res) {
        _this12.endAngle = obj["" + res.data.award]; // 开始旋转 初始速度为

        _this12.point = _this12.TurntableLayer.getChildByName("Pointer");
        _this12.beginTurn = true;
        _this12.point.angle = 360;
        _this12.speed = 18;
        _this12.value = 1;
        _this12.circle = 0;

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
    }
  },
  // 增加显示弹出获得物品的弹窗
  // 奖品类型 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
  showPop: function showPop(goodName, goodNumber, gcNumber, textNumber) {
    this.GetGoodLayer.active = true;
    cc.Tools.showBanner();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYW5DbGlja0ZyaXN0QnRuIiwic2V0SXRlbSIsInNob3dCYW5uZXIiLCJzY2hlZHVsZU9uY2UiLCJzY2FsZSIsInR3ZWVuIiwidG8iLCJkZWxheSIsImNhbGwiLCJzdGFydCIsIlNldExheWVyIiwiU2lnbkxheWVyIiwiVHVybnRhYmxlTGF5ZXIiLCJHZXRNb25ldHlMYXllciIsIlNldmVuV29ya0xheWVyIiwiUmVkUG9vbExheWVyIiwiR2V0R29vZExheWVyIiwiU2VlVmlkZW9sYXllciIsIlJlc3VtZUxheWVyIiwic2hvd011c2ljIiwic2hvd1NoYWtlIiwiY291bnREb3duVGltZSIsInNpZ25OdW1iZXIiLCJCR01fSUQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImd1aWRlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRVc2VySW5mbyIsInNpZ25faW5fYWN0aSIsInR1cm50YWJsZV9hY3RpIiwiY2FzaF9vdXRfYWN0aSIsImJhbmtfYWN0aSIsImphY2twb3RfYWN0aSIsImxldmVsX3N0YXJ0Iiwic2VuZERhdGEiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJ1c2VySW5mbyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpZ3NpZ25faW5fdGltZSIsIkRhdGUiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiU3RhcnRHYW1lIiwic3RvcCIsImRvdERhdGEiLCJMZXZlbEluZm8iLCJzaG93U2VlVmlkZW9sYXllciIsImxvYWRTY2VuZSIsInNlZVZpZGVvQXdhcmQiLCJlbnRlckdhbWUiLCJzaG93SmlsaUFkIiwic2hvd1NpZ25MYXllciIsIml0ZW1zIiwiYnRuQ29tIiwiQnV0dG9uIiwic2lnbkRheSIsImRheSIsImkiLCJkYXlOb2RlIiwiX2RhdGEiLCJzdGF0dXMiLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsImNvbXBsZXRlQnRuIiwic2VsZWN0QnRuIiwidW5TZWxlY3RCdG4iLCJzaG93U2V0TGF5ZXIiLCJuaWNrTmFtZSIsIm5pY2tfbmFtZSIsInVzZXJJZCIsInVzZXJfaWQiLCJpY29uIiwiU3ByaXRlIiwicmVtb3RlVXJsIiwiYXZhdGFyX3VybCIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJleHQiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJlbmRDb3VudFRpbWUiLCJnZXRUaW1lIiwiYmVnaW5Db3VudFRpbWUiLCJzaG93VGFibGVTY3JlZW4iLCJoaWRlQmFubmVyIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwid2luIiwic2hvd1R1cm50YWJsZUxheWVyIiwicG9pbnQiLCJhbmdsZSIsInNlYyIsImFicyIsIlR1cm5UYWJsZUNvdW50RG93biIsInNob3dSZWRQb29sTGF5ZXIiLCJwb29sSW5mbyIsImFyciIsInZhbHVlIiwiY29tIiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNlcnZlckRheSIsImxlbmd0aCIsIl9zdGF0dXMiLCJudW0iLCJwdXNoIiwidGl0bGUiLCJsYXlvdXQiLCJfbGF5b3V0IiwiaiIsIl9sYXlvdXRIIiwiYnRuIiwiX2lkIiwiaWQiLCJpc0NvbXBsZXRlIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9pbnZpdGUiLCJuZWVkX2ludml0ZSIsImNvbXBsZXRlIiwicmVkIiwidmlkZW9UZXh0IiwibmVlZF9hZCIsImJhciIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJjdXJyX2FkIiwiYmFyTGJsIiwiaXRlbUxheW91dCIsIml0ZW0wIiwiaXRlbTEiLCJpdGVtMiIsImFycm93Iiwic2hvd1Jlc3VtZUxheWVyIiwicmVzdW1lTGV2ZWwiLCJzZXZlbldvcmtHZXRNb25leSIsImUiLCJ0YXJnZXQiLCJzaG93VGlwcyIsIm5vZGUiLCJjYXNoX3R5cGUiLCJjYXNoX251bSIsImNhc2hfdGltZXMiLCJjYXNoX3Jlc3VsdCIsInNob3dHZXRNb25leUxheWVyIiwiZ2V0TW9uZXlTdGFnZSIsIkxlbmd0aCIsInRpbWVzIiwiZXh0cmFjdE1vbmV5IiwiY2hvaWNlQnRuIiwiY2hvaWNlR2V0TW9uZXlCdG4iLCJtc2ciLCJtb25leSIsIk51bWJlciIsImNsaWNrR2V0TW9uZXlCdG4xIiwibGF5ZXIiLCJwYXJlbnQiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJFeGl0QmFja0J0biIsImNsaWNrU2lnbkJ0biIsImNsaWNrVHVyblRhYmxlQnRuIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0IiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJlbmRBbmdsZSIsImFkIiwic2hvd1BvcCIsImNhcmQiLCJvYmoiLCJhd2FyZCIsIm5hbWUiLCJpbmRleCIsIl9hd2FyZCIsImdvb2ROYW1lIiwiZ29vZE51bWJlciIsImdjTnVtYmVyIiwidGV4dE51bWJlciIsInRleHQiLCJsYXlvdXQxIiwibGF5b3V0MiIsImxibCIsIkV4aXRXeExvZ2luIiwid3hUb2tlbiIsInd4TG9naW5SZXN1bHRjb2RlIiwicmVtb3ZlSXRlbSIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxp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QWYsQ0FEYyxDQUVkOztBQUNBc00sSUFBQUEsUUFBUSxDQUFDeE8sTUFBVCxHQUFrQixJQUFsQjtBQUNILEdBbjFCSTtBQW8xQkwyTyxFQUFBQSxlQXAxQkssNkJBbzFCYTtBQUNkLFFBQUlILFFBQVEsR0FBRyxLQUFLek4sUUFBTCxDQUFjbUIsY0FBZCxDQUE2QixjQUE3QixDQUFmO0FBQ0FzTSxJQUFBQSxRQUFRLENBQUN4TyxNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUF2MUJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOiA4LFxuICAgIEJPT006IDksXG4gICAgTE9DSzogMTAsXG4gICAgU0hPVUNFOiAxMSxcbiAgICBQT1dFUjogMTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YWz6ZetRlBT6Z2i5p2/XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIGNjLnptID0ge307XG4gICAgICAgIGNjLnptLnZpZGVvQWQgPSB7fTtcbiAgICAgICAgLy8g562+5Yiw5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgLy8g6L2s55uY5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IHRydWU7XG4gICAgICAgIC8vIOWinuWKoOWxj+W5leinhumikVxuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIC8vIOi/m+WFpeS4u+eVjOmdouaJk+eCuVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJlbnRlcl9tYWluXCIsbnVsbClcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5piv56ys5LiA5qyh6L+b5YWl5ri45oiPIOWmguaenOesrOS4gOasoei/m+WFpemCo+S5iOW8ueWHukZpcnN05by556qXXG4gICAgICAgIHRoaXMuZmlyc3RMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9GaXJzdCcpO1xuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCBfZmlyc3QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKTtcbiAgICAgICAgdGhpcy5jYW5DbGlja0ZyaXN0QnRuID0gZmFsc2U7XG4gICAgICAgIGlmICghX2ZpcnN0KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAvLyDmmL7npLpiYW5uZXLlub/lkYpcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlyc3RMYXllcikudG8oMC41LCB7IHNjYWxlOiAxIH0pLmRlbGF5KDMpLmNhbGwoKCk9PntcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGlja0ZyaXN0QnRuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiPXG4gICAgICAgIC8vIOiuvue9rueVjOmdolxuICAgICAgICB0aGlzLlNldExheWVyID0gY2MuZmluZCgnQ2FudmFzL1NldExheWVyJyk7XG4gICAgICAgIC8vIOetvuWIsOeVjOmdolxuICAgICAgICB0aGlzLlNpZ25MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TaWduTGF5ZXInKTtcbiAgICAgICAgLy8g5aSn6L2s55uY55WM6Z2iXG4gICAgICAgIHRoaXMuVHVybnRhYmxlTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVHVybnRhYmxlTGF5ZXInKTtcbiAgICAgICAgLy8g5a2Y6ZKx572Q55WM6Z2iIOaPkOeOsOS5n+aYr+i/meS4queVjOmdolxuICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyID0gY2MuZmluZCgnQ2FudmFzL0dldE1vbmV5TGF5ZXInKTtcbiAgICAgICAgLy8g5LiD5pel5Lu75YqhXG4gICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldmVuV29ya0xheWVyXCIpO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXnlYzpnaJcbiAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1JlZFBvb2xMYXllclwiKVxuICAgICAgICAvLyDojrflj5bnianlk4HnmoTlvLnnqpdcbiAgICAgICAgdGhpcy5HZXRHb29kTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dldEdvb2RcIilcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5aWW5Yqx55WM6Z2iXG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2VlVmlkZW9sYXllclwiKVxuICAgICAgICAvLyDph43nva7lhbPljaHnlYzpnaJcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVzdW1lTGF5ZXJcIilcbiAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5CR01fSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQkdNKTtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma8yXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgZ3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgIT09IFwib3ZlclwiKSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSA9PT0gJzQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgLy8g6K6w5b2V5omT54K555qE5YC8XG4gICAgICAgIC8vIOetvuWIsOaJk+eCuVxuICAgICAgICB0aGlzLnNpZ25faW5fYWN0aSA9IDA7XG4gICAgICAgIC8vIOi9rOebmOaJk+eCuVxuICAgICAgICB0aGlzLnR1cm50YWJsZV9hY3RpID0gMDtcbiAgICAgICAgLy8g5o+Q546w5omT54K5XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSA9IDA7XG4gICAgICAgIC8vIOWtmOmSsee9kOaJk+eCuVxuICAgICAgICB0aGlzLmJhbmtfYWN0aSA9IDA7XG4gICAgICAgIC8vIOWlluaxoOe6ouWMheaJk+eCuVxuICAgICAgICB0aGlzLmphY2twb3RfYWN0aSA9IDA7XG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+aJk+eCuVxuICAgICAgICB0aGlzLmxldmVsX3N0YXJ0ID0gMDtcbiAgICB9LFxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS11c2VyIGluZm8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKSk7XG4gICAgICAgICAgICAvLyDms6jlhozmiZPngrlcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcInNpZ25faW5cIiwgeyBzaWdzaWduX2luX3RpbWU6IG5ldyBEYXRlKCkgfSlcbiAgICAgICAgICAgIHRoaXMuc2hvd0luZGV4TGF5ZXIoKTtcbiAgICAgICAgICAgIC8vIOS9k+WKm+aYr+WQpuWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5Qb3dlclRpbWUoKVxuXG4gICAgICAgICAgICAvLyB0b2RvIHRlc3RcbiAgICAgICAgICAgIC8vICBjYy5Ub29scy5hZENhbGxCYWNrKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBQb3dlclRpbWUoKSB7XG4gICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbClcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDwgNSkge1xuICAgICAgICAgICAgLy8g546w5Zyo5omN5Lya5YCS6K6h5pe2XG4gICAgICAgICAgICAvLyDlhYjojrflj5ZcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBQb3dlclRpbWVTY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgICAgICAvLyDlnKjojrflj5bnlKjmiLfkv6Hmga8g5piv5ZCm5L2T5Yqb5ruhIOayoeaciea7oeaOpeedgOWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSB0aGlzLmNoYW5nZVNlY29uZChjYy56bS51c2VySW5mby5wb3dlcl9zZWMpO1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8ucG93ZXJfc2VjLS1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOVIOWwhuenkuaVsOS8oOi/m+adpeeUn+aIkOS4gOS4qjAwOjAw5b2i5byP55qE5a2X56ym5LiyXG4gICAgY2hhbmdlU2Vjb25kKHMpIHtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IFwiMFwiICsgTWF0aC5mbG9vcihzIC8gNjApO1xuICAgICAgICBsZXQgc2Vjb25kID0gcyAlIDYwID49IDEwID8gcyAlIDYwIDogXCIwXCIgKyBzICUgNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kXG4gICAgfSxcbiAgICBndWlkZU92ZXIoKSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCBcIm92ZXJcIik7XG4gICAgfSxcbiAgICBTdGFydEdhbWUoKSB7XG4gICAgICAgIC8v5YWz6ZetQkdNXG4gICAgICAgIGlmKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKSl7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gY2Muem0udXNlckluZm8ud2luID0gdHJ1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLkJHTV9JRCk7XG4gICAgICAgIC8v5riF56m65YWz5Y2h5pWwIOS4jea4heepuuWFs+WNoVxuICAgICAgICBpZiAodGhpcy5ndWlkZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ot7PovazlnLrmma9cbiAgICAgICAgLy8g5byA5aeL5ri45oiP5LmL5YmNIOWFiOiOt+WPluWFs+WNoeS/oeaBryDlpoLmnpzmsqHmnInlhbPljaHkv6Hmga/kuI3ov5vlhaXmuLjmiI9cbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMubGV2ZWxfc3RhcnQrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeWFs+WNoeS/oeaBrz1cIiwgSlNPTi5zdHJpbmdpZnkoY2Muem0uTGV2ZWxJbmZvKSk7XG4gICAgICAgICAgICAvLyDliKTmlq1cbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S655yL6KeG6aKR6I635b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VlVmlkZW9sYXllcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dTZWVWaWRlb2xheWVyKCkge1xuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZCgpIHtcbiAgICAgICAgY2Muem0udmlkZW9BZC5lbnRlckdhbWUgPSBmYWxzZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnrb7liLDnlYzpnaJcbiAgICBzaG93U2lnbkxheWVyKCkge1xuICAgICAgICAvLyDlhYjojrflj5bnrb7liLDliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge31cbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25Jbkxpc3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAvLyDnrb7liLDmjInpkq7miZPngrlcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2lnbl9pbl9hY3RpKys7XG4gICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgdGhpcy5zaWduRGF5ID0gcmVzLmRhdGEuZGF5O1xuICAgICAgICAgICAgdGhpcy5TaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXlOb2RlID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSBpdGVtc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgaWYoaT09PXRoaXMuc2lnbkRheSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9kYXRhLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5zaWduRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S66K6+572u55WM6Z2iXG4gICAgc2hvd1NldExheWVyKCkge1xuICAgICAgICB0aGlzLlNldExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIGxldCBuaWNrTmFtZSA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuaWtlbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBuaWNrTmFtZS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLm5pY2tfbmFtZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyaWRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdXNlcklkLnN0cmluZyA9IGDnlKjmiLdJRO+8miR7dGhpcy51c2VySW5mby51c2VyX2lkfWBcbiAgICAgICAgLy8gaWNvblxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IHRoaXMudXNlckluZm8uYXZhdGFyX3VybDtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVtb3RlVXJsLCB7IGV4dDogJy5wbmcnIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcbiAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S65Li755WM6Z2iXG4gICAgc2hvd0luZGV4TGF5ZXIoKSB7XG4gICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICBpZighY2MuZW5kQ291bnRUaW1lKXtcbiAgICAgICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKGNjLmVuZENvdW50VGltZS1jYy5iZWdpbkNvdW50VGltZT4zMDAwMCl7XG4gICAgICAgICAgICAgICAgLy8g6Kem5Y+R5o+S5bGPXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RhYmxlU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgY2MuYmVnaW5Db3VudFRpbWUgPSBjYy5lbmRDb3VudFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgICAgICBsZXQgYnRuQ29tID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9CZWdpbkdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby53aW4pIHtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZWdpbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5zZWMgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ5YCS6K6h5pe2IOW8gOWni+WAkuiuoeaXtiB0b2RvXG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlR1cm5UYWJsZUNvdW50RG93biwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUtLTtcbiAgICAgICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKHRoaXMuY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuue6ouWMheaxoOeVjOmdolxuICAgIHNob3dSZWRQb29sTGF5ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWlluaxoOS/oeaBr1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICAvLyBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIC8vIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGUgPCAxMCA/IFwiMFwiICsgcG9vbEluZm8ubWludXRlIDogcG9vbEluZm8ubWludXRlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S6N+aXpeS7u+WKoeeVjOmdolxuICAgIHNob3dTZXZlbldvcmtMYXllcigpIHtcbiAgICAgICAgLy8g546w6I635Y+W5LiD5pel5Lu75Yqh5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgLy8g6YCa6L+H5pWw5o2u5Yid5aeL5YyW55WM6Z2iIOeKtuaAgSAwLuacqumihuWPliAxLuW3sumihuWPllxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICBsZXQgc2VydmVyRGF5ID0gcmVzLmRhdGEuZGF5O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA9PT0gc2VydmVyRGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiOt+WPluiHquW3seeahOaVsOaNriBcbiAgICAgICAgICAgICAgICBsZXQgX3N0YXR1cyA9IGl0ZW1zW2ldLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAoIV9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gaXRlbXNbaV0ubnVtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID4gc2VydmVyRGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gc2VydmVyRGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgLy8gdGhpcy5zaWduTnVtYmVyID0gNztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID09PSBpdGVtc1tpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOiuvue9rnRpdGxlXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICB0aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMuU2V2ZW5GcmFtZXNbYXJyWzBdLm51bSAtIDFdXG4gICAgICAgICAgICAvLyDkuIDlj6rlvZPliY3mlbDmja5pdGVtIOmAmui/h+aVsOaNrlxuICAgICAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0ID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzJcIik7XG4gICAgICAgICAgICAgICAgX2xheW91dC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSBhcnJbal07XG4gICAgICAgICAgICAgICAgbGV0IF9sYXlvdXRIID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0X1wiICsgKGogKyAxKSk7XG4gICAgICAgICAgICAgICAgX2xheW91dEguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgICAgICBidG4uX2lkID0gX2RhdGEuaWQ7XG4gICAgICAgICAgICAgICAgYnRuLnZhbHVlID0gX2RhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5omA5pyJ5p2h5Lu25piv5ZCm5Z2H6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGF0YS5jdXJyX3Bhc3Nfc3RhZ2UgPj0gX2RhdGEubmVlZF9wYXNzX3N0YWdlICYmIF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW4gJiYgX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInovr7miJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWFiOiuvue9ruaWh+acrFxuICAgICAgICAgICAgICAgIC8vIOe6ouWMhVxuICAgICAgICAgICAgICAgIGxldCByZWQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICByZWQuc3RyaW5nID0gX2RhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u6KeC55yL6KeG6aKR5qyh5pWwXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvVGV4dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGJsMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHZpZGVvVGV4dC5zdHJpbmcgPSBg6KeC55yLJHtfZGF0YS5uZWVkX2FkfeS4quinhumikWBcbiAgICAgICAgICAgICAgICAvLyDov5vluqbmnaFcbiAgICAgICAgICAgICAgICBsZXQgYmFyID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgICAgIGJhci5wcm9ncmVzcyA9IF9kYXRhLmN1cnJfYWQgLyBfZGF0YS5uZWVkX2FkO1xuICAgICAgICAgICAgICAgIGxldCBiYXJMYmwgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImJhckxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGJhckxibC5zdHJpbmcgPSBgJHtfZGF0YS5jdXJyX2FkfS8ke19kYXRhLm5lZWRfYWR9YFxuICAgICAgICAgICAgICAgIC8vIOmineWkluadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOmcgOimgemAmuWFs+aVsFxuICAgICAgICAgICAgICAgIGxldCBpdGVtTGF5b3V0ID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0wID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8xXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzJcIik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfcGFzc19zdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpgJrov4fnrKwke19kYXRhLm5lZWRfcGFzc19zdGFnZX3lhbNgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmihuWPluetvuWIsOWlluWKsWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0xLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpgoDor7cke19kYXRhLm5lZWRfaW52aXRlfeS4quWlveWPi2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0yLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaYvuekuumHjee9ruWFs+WNoeeVjOmdolxuICAgIHNob3dSZXN1bWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgcmVzdW1lTGV2ZWwoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9SZXNldFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgc2V2ZW5Xb3JrR2V0TW9uZXkoZSkge1xuICAgICAgICB0aGlzLmNhc2hfb3V0X2FjdGkrKztcbiAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgIH1cbiAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5p2h5Lu25pyq6L6+5oiQXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHVsbE1pc3Npb25cIiwgXCJQT1NUXCIsIHsgaWQ6IHRhcmdldC5faWQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TGF5ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyDph43mlrDliLfmlrBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZXZlbldvcmtMYXllcigpO1xuICAgICAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBjYXNoX3R5cGU6IFwi57qi5YyF5o+Q546wXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfbnVtOiB0YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5omT54K55pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRvdERhdGEpKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlrZjpkrHnvZDnlYzpnaJcbiAgICBzaG93R2V0TW9uZXlMYXllcigpIHtcbiAgICAgICAgLy8g5omT5byA5a2Y6ZKx572QIOiOt+WPluWtmOmSsee9kOeahOS/oeaBr1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2F2aW5nUG90XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYmFua19hY3RpKys7XG4gICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgZ2MgPSBkYXRhLmdjIHx8IDBcbiAgICAgICAgICAgIC8vIOWFiOWumuS5ieW9k+WJjemCo+S4qumYtuauteaYr+WQpuWPr+S7peaPkOWPllxuICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gMDtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMC4zLCAwLjUsIDEsIDIsIDUsIDEwLCAyMF1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLml0ZW1zW2ldLnRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5a2Y6ZKx572Q55WM6Z2i5bGe5oCnXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmmL7npLrlhYPlrp3kvZnpop1cbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJZdWFuQmFvX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdjO1xuICAgICAgICAgICAgLy8gLy8g5YWD5a6d6Lef546w6YeR6L+b6KGM6L2s5o2iIOi9rOaNouavlOS+i+S4ujEwMDAwOjFcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1vbmV5ID0gZ2MgLyAxMDAwMDtcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFuZ2VfTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5leHRyYWN0TW9uZXkgKyBcIuWFg1wiO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5byA5aeL55qE5pe25YCZZ2V0TW9uZXlCdG7nva7ngbDkuI3lj6/ngrnlh7tcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOeCueWHu+mAieaLqeaPkOeOsOmHkemSseaMiemSrlxuICAgIGNob2ljZUdldE1vbmV5QnRuKGUsIG1zZykge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDngrnlh7vmj5DnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuMShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5byA5aeL5o+Q546w6YeR6ZKxXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMSAg5piv5ZCm5YWD5a6d5pWw6YeP5piv5ZCm5ruh6Laz5o+Q546w5qGj5L2N77yM5LiN5ruh6Laz5pe25o+Q56S677ya5YWD5a6d5pWw6YeP5LiN6LazXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMiAg5qGj5L2N5piv5ZCm5Li65pyA5bCP5qGj5L2N77yM5aaC5p6c5LiN5piv5o+Q56S677ya6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYWN0TW9uZXkgPCB0aGlzLmNob2ljZUJ0bi5tb25leSkge1xuICAgICAgICAgICAgICAgIC8vIOS4jeespuWQiOadoeS7tjEg5by55Ye65YWD5a6d5pWw6YeP5LiN6Laz55qEdGlwc1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLlhYPlrp3mlbDph4/kuI3otrNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuLm1vbmV5ID4gdGhpcy5nZXRNb25leVN0YWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MiBcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmDveespuWQiOadoeS7tuWDj+acjeWKoeWZqOWPkemAgeivt+axglxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0V4Y2hhbmdlXCIsIFwiUE9TVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5oiQ5Yqf5o+Q546wXG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLlhYPlrp3mj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRoaXMuY2hvaWNlQnRuLm1vbmV5LFxuICAgICAgICAgICAgICAgICAgICBjYXNoX3RpbWVzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX3Jlc3VsdDogXCLmiJDlip9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeaJk+eCueaVsOaNrlwiLCBKU09OLnN0cmluZ2lmeShkb3REYXRhKSlcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjYXNoX291dFwiLCBkb3REYXRhKVxuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IHRhcmdldC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKTtcbiAgICAgICAgICAgICAgICBsYXllci5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pn7PkuZBcbiAgICBzdG9wQkdNKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dNdXNpYyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5CR01fSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5CR01fSUQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pnIfliqhcbiAgICBzaGFrZVBob25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICB1blNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcGxldGVCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwiY29tcGxldGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRCYWNrQnRuKGUpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLlNpZ25MYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25MYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZmlyc3RMYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLmNhbkNsaWNrRnJpc3RCdG4pe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDlhbPpl63lvZPliY3kuZ/ov5vlhaXpppbpobUg5Yi35paw55WM6Z2iXG4gICAgICAgIHRoaXMuc2lnbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgY2MuZW5kQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7vnrb7liLDmjInpkq5cbiAgICBjbGlja1NpZ25CdG4oZSkge1xuICAgICAgICAvLyDnrb7liLBcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgIH0sXG4gICAgLy8g54K55Ye76L2s55uY5byA5aeL5oyJ6ZKuXG4gICAgY2xpY2tUdXJuVGFibGVCdG4oZSkge1xuXG4gICAgICAgIC8vIOavj+eci+S4gOasoeinhumikeWPr+iOt+W+l+S4gOasoeaKveWlluacuuS8mu+8jOavj+asoeaKveWlluWGt+WNtOaXtumXtOS4ujXliIbpkp8g5Ya35Y205pe26Ze06K6p5pyN5Yqh5Zmo5YGaXG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPiAwKSB7XG4gICAgICAgICAgICAvLyDmir3lpZblgJLorqHml7YgPj0wIOS7o+ihqOWPr+S7peaKveWllu+8jDwwIOWPlue7neWvueWAvCDlgJLmlbDnp5LmlbBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gNSAmJiB0aGlzLnBvaW50LmFuZ2xlIDw9IHRoaXMuZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSB0aGlzLmVuZEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBpZiAoIWNjLnptLnZpZGVvQWQuY2xpY2tTaWduKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgICAvLyDlhYjlg4/mnI3liqHlmajlj5HpgIHor7fmsYLojrflj5bnianlk4FpZFxuICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==