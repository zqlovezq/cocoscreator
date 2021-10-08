
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
      cc.zm.userInfo = _this2.userInfo; // console.log("cocos----user info " + JSON.stringify(this.userInfo));
      // 注册打点

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
    // cc.zm.userInfo.win = true;
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
      cc.zm.LevelInfo = res.data; // console.log("cocos----关卡信息=", JSON.stringify(cc.zm.LevelInfo));
      // 判断

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
        }; // console.log("cocos----打点数据", JSON.stringify(dotData))

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
        }; // console.log("cocos----打点数据", JSON.stringify(dotData))

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
    }

    e.target.parent.active = false; // 关闭当前也进入首页 刷新界面

    this.signNumber = 0;
    this.getUserInfo();
    cc.endCountTime = new Date().getTime();
  },
  // 点击签到按钮
  clickSignBtn: function clickSignBtn(e) {
    // 签到
    cc.Tools.showJiliAd();

    if (!cc.sys.isNative) {
      cc.zm.videoAd.clickSign = false;
    }
  },
  // 点击转盘开始按钮
  clickTurnTableBtn: function clickTurnTableBtn(e) {
    // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
    if (this.countDownTime > 0) {
      // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
      return;
    }

    cc.Tools.showJiliAd();

    if (!cc.sys.isNative) {
      cc.zm.videoAd.clickTable = false;
    }
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
      // console.log("cocos----获取签到奖励");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYW5DbGlja0ZyaXN0QnRuIiwic2V0SXRlbSIsInNob3dCYW5uZXIiLCJzY2hlZHVsZU9uY2UiLCJzY2FsZSIsInR3ZWVuIiwidG8iLCJkZWxheSIsImNhbGwiLCJzdGFydCIsIlNldExheWVyIiwiU2lnbkxheWVyIiwiVHVybnRhYmxlTGF5ZXIiLCJHZXRNb25ldHlMYXllciIsIlNldmVuV29ya0xheWVyIiwiUmVkUG9vbExheWVyIiwiR2V0R29vZExheWVyIiwiU2VlVmlkZW9sYXllciIsIlJlc3VtZUxheWVyIiwic2hvd011c2ljIiwic2hvd1NoYWtlIiwiY291bnREb3duVGltZSIsInNpZ25OdW1iZXIiLCJCR01fSUQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImd1aWRlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRVc2VySW5mbyIsInNpZ25faW5fYWN0aSIsInR1cm50YWJsZV9hY3RpIiwiY2FzaF9vdXRfYWN0aSIsImJhbmtfYWN0aSIsImphY2twb3RfYWN0aSIsImxldmVsX3N0YXJ0Iiwic2VuZERhdGEiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJ1c2VySW5mbyIsImRhdGEiLCJzaWdzaWduX2luX3RpbWUiLCJEYXRlIiwic2hvd0luZGV4TGF5ZXIiLCJQb3dlclRpbWUiLCJ0aW1lIiwiZ2V0Q29tcG9uZW50IiwiTGFiZWwiLCJwb3dlciIsInNjaGVkdWxlIiwiUG93ZXJUaW1lU2NoZWR1bGUiLCJzdHJpbmciLCJ1bnNjaGVkdWxlIiwicG93ZXJfc2VjIiwiY2hhbmdlU2Vjb25kIiwicyIsIm1pbnV0ZSIsIk1hdGgiLCJmbG9vciIsInNlY29uZCIsImd1aWRlT3ZlciIsIlN0YXJ0R2FtZSIsInN0b3AiLCJkb3REYXRhIiwiTGV2ZWxJbmZvIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwiZW50ZXJHYW1lIiwic2hvd0ppbGlBZCIsInNob3dTaWduTGF5ZXIiLCJpdGVtcyIsImJ0bkNvbSIsIkJ1dHRvbiIsInNpZ25EYXkiLCJkYXkiLCJpIiwiZGF5Tm9kZSIsIl9kYXRhIiwic3RhdHVzIiwiZW5hYmxlQXV0b0dyYXlFZmZlY3QiLCJpbnRlcmFjdGFibGUiLCJjb21wbGV0ZUJ0biIsInNlbGVjdEJ0biIsInVuU2VsZWN0QnRuIiwic2hvd1NldExheWVyIiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJ1c2VySWQiLCJ1c2VyX2lkIiwiaWNvbiIsIlNwcml0ZSIsInJlbW90ZVVybCIsImF2YXRhcl91cmwiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwiZW5kQ291bnRUaW1lIiwiZ2V0VGltZSIsImJlZ2luQ291bnRUaW1lIiwic2hvd1RhYmxlU2NyZWVuIiwiaGlkZUJhbm5lciIsInJlZF9wYWNrIiwiZ2MiLCJzY29yZSIsIndpbiIsInNob3dUdXJudGFibGVMYXllciIsInBvaW50IiwiYW5nbGUiLCJzZWMiLCJhYnMiLCJUdXJuVGFibGVDb3VudERvd24iLCJzaG93UmVkUG9vbExheWVyIiwicG9vbEluZm8iLCJhcnIiLCJ2YWx1ZSIsImNvbSIsImhvdXIiLCJzaG93U2V2ZW5Xb3JrTGF5ZXIiLCJzZXJ2ZXJEYXkiLCJsZW5ndGgiLCJfc3RhdHVzIiwibnVtIiwicHVzaCIsInRpdGxlIiwibGF5b3V0IiwiX2xheW91dCIsImoiLCJfbGF5b3V0SCIsImJ0biIsIl9pZCIsImlkIiwiaXNDb21wbGV0ZSIsImN1cnJfcGFzc19zdGFnZSIsIm5lZWRfcGFzc19zdGFnZSIsImN1cnJfc2lnbl9pbiIsIm5lZWRfc2lnbl9pbiIsImN1cnJfaW52aXRlIiwibmVlZF9pbnZpdGUiLCJjb21wbGV0ZSIsInJlZCIsInZpZGVvVGV4dCIsIm5lZWRfYWQiLCJiYXIiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY3Vycl9hZCIsImJhckxibCIsIml0ZW1MYXlvdXQiLCJpdGVtMCIsIml0ZW0xIiwiaXRlbTIiLCJhcnJvdyIsInNob3dSZXN1bWVMYXllciIsInJlc3VtZUxldmVsIiwic2V2ZW5Xb3JrR2V0TW9uZXkiLCJlIiwidGFyZ2V0Iiwic2hvd1RpcHMiLCJub2RlIiwiY2FzaF90eXBlIiwiY2FzaF9udW0iLCJjYXNoX3RpbWVzIiwiY2FzaF9yZXN1bHQiLCJzaG93R2V0TW9uZXlMYXllciIsImdldE1vbmV5U3RhZ2UiLCJMZW5ndGgiLCJ0aW1lcyIsImV4dHJhY3RNb25leSIsImNob2ljZUJ0biIsImNob2ljZUdldE1vbmV5QnRuIiwibXNnIiwibW9uZXkiLCJOdW1iZXIiLCJjbGlja0dldE1vbmV5QnRuMSIsImxheWVyIiwicGFyZW50Iiwic3RvcEJHTSIsImV2ZW50IiwicGF1c2UiLCJyZXN1bWUiLCJzaGFrZVBob25lIiwiRXhpdEJhY2tCdG4iLCJjbGlja1NpZ25CdG4iLCJpc05hdGl2ZSIsImNsaWNrVHVyblRhYmxlQnRuIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0IiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJlbmRBbmdsZSIsImFkIiwic2hvd1BvcCIsImNhcmQiLCJvYmoiLCJhd2FyZCIsIm5hbWUiLCJpbmRleCIsIl9hd2FyZCIsImdvb2ROYW1lIiwiZ29vZE51bWJlciIsImdjTnVtYmVyIiwidGV4dE51bWJlciIsInRleHQiLCJsYXlvdXQxIiwibGF5b3V0MiIsImxibCIsIkV4aXRXeExvZ2luIiwid3hUb2tlbiIsInd4TG9naW5SZXN1bHRjb2RlIiwicmVtb3ZlSXRlbSIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElB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LCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBodHRwID0gcmVxdWlyZShcIkh0dHBcIik7XG5jb25zdCBBV0FSRCA9IGNjLkVudW0oe1xuICAgIERBWV8xOiAwLFxuICAgIERBWV8yOiAxLFxuICAgIERBWV8zOiAyLFxuICAgIERBWV80OiAzLFxuICAgIERBWV81OiA0LFxuICAgIERBWV82OiA1LFxuICAgIERBWV83OiA2LFxuICAgIFJFRF81OiA3LFxuICAgIFJFRF8xMDogOCxcbiAgICBCT09NOiA5LFxuICAgIExPQ0s6IDEwLFxuICAgIFNIT1VDRTogMTEsXG4gICAgUE9XRVI6IDEyXG59KVxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgQkdNOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIFNldmVuRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBBd2FyZEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgVGV4dEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+WFs+mXrUZQU+mdouadv1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBjYy56bSA9IHt9O1xuICAgICAgICBjYy56bS52aWRlb0FkID0ge307XG4gICAgICAgIC8vIOetvuWIsOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IHRydWU7XG4gICAgICAgIC8vIOi9rOebmOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAvLyDlop7liqDlsY/luZXop4bpopFcbiAgICAgICAgY2MuVG9vbHMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICAvLyDov5vlhaXkuLvnlYzpnaLmiZPngrlcbiAgICAgICAgY2MuVG9vbHMuZG90KFwiZW50ZXJfbWFpblwiLG51bGwpXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+esrOS4gOasoei/m+WFpea4uOaIjyDlpoLmnpznrKzkuIDmrKHov5vlhaXpgqPkuYjlvLnlh7pGaXJzdOW8ueeql1xuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvRmlyc3QnKTtcbiAgICAgICAgdGhpcy5maXJzdExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX2ZpcnN0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RcIik7XG4gICAgICAgIHRoaXMuY2FuQ2xpY2tGcmlzdEJ0biA9IGZhbHNlO1xuICAgICAgICBpZiAoIV9maXJzdCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgLy8g5pi+56S6YmFubmVy5bm/5ZGKXG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdExheWVyLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZpcnN0TGF5ZXIpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5kZWxheSgzKS5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2tGcmlzdEJ0biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfVxuICAgICAgICAvL+ebkeWQrOW8gOWni+a4uOaIj1xuICAgICAgICAvLyDorr7nva7nlYzpnaJcbiAgICAgICAgdGhpcy5TZXRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZXRMYXllcicpO1xuICAgICAgICAvLyDnrb7liLDnlYzpnaJcbiAgICAgICAgdGhpcy5TaWduTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2lnbkxheWVyJyk7XG4gICAgICAgIC8vIOWkp+i9rOebmOeVjOmdolxuICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyID0gY2MuZmluZCgnQ2FudmFzL1R1cm50YWJsZUxheWVyJyk7XG4gICAgICAgIC8vIOWtmOmSsee9kOeVjOmdoiDmj5DnjrDkuZ/mmK/ov5nkuKrnlYzpnaJcbiAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9HZXRNb25leUxheWVyJyk7XG4gICAgICAgIC8vIOS4g+aXpeS7u+WKoVxuICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZXZlbldvcmtMYXllclwiKTtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF55WM6Z2iXG4gICAgICAgIHRoaXMuUmVkUG9vbExheWVyID0gY2MuZmluZChcIkNhbnZhcy9SZWRQb29sTGF5ZXJcIilcbiAgICAgICAgLy8g6I635Y+W54mp5ZOB55qE5by556qXXG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyID0gY2MuZmluZChcIkNhbnZhcy9HZXRHb29kXCIpXG4gICAgICAgIC8vIOeci+inhumikeW+l+WlluWKseeVjOmdolxuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NlZVZpZGVvbGF5ZXJcIilcbiAgICAgICAgLy8g6YeN572u5YWz5Y2h55WM6Z2iXG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1Jlc3VtZUxheWVyXCIpXG4gICAgICAgIGNjLnptLnNob3dNdXNpYyA9IHRydWU7XG4gICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IDA7XG4gICAgICAgIHRoaXMuc2lnbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuQkdNX0lEID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkJHTSk7XG4gICAgICAgIC8v6aKE5Yqg6L295Zy65pmvMlxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgLy8g5paw5omL5byV5a+8XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgIGd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpICE9PSBcIm92ZXJcIikge1xuICAgICAgICAgICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgPT09ICc0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIC8vIOiusOW9leaJk+eCueeahOWAvFxuICAgICAgICAvLyDnrb7liLDmiZPngrlcbiAgICAgICAgdGhpcy5zaWduX2luX2FjdGkgPSAwO1xuICAgICAgICAvLyDovaznm5jmiZPngrlcbiAgICAgICAgdGhpcy50dXJudGFibGVfYWN0aSA9IDA7XG4gICAgICAgIC8vIOaPkOeOsOaJk+eCuVxuICAgICAgICB0aGlzLmNhc2hfb3V0X2FjdGkgPSAwO1xuICAgICAgICAvLyDlrZjpkrHnvZDmiZPngrlcbiAgICAgICAgdGhpcy5iYW5rX2FjdGkgPSAwO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXmiZPngrlcbiAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkgPSAwO1xuICAgICAgICAvLyDlvIDlp4vmuLjmiI/miZPngrlcbiAgICAgICAgdGhpcy5sZXZlbF9zdGFydCA9IDA7XG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHRoaXMudXNlckluZm9cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tdXNlciBpbmZvIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbykpO1xuICAgICAgICAgICAgLy8g5rOo5YaM5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJzaWduX2luXCIsIHsgc2lnc2lnbl9pbl90aW1lOiBuZXcgRGF0ZSgpIH0pXG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleExheWVyKCk7XG4gICAgICAgICAgICAvLyDkvZPlipvmmK/lkKblgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuUG93ZXJUaW1lKClcblxuICAgICAgICAgICAgLy8gdG9kbyB0ZXN0XG4gICAgICAgICAgICAvLyAgY2MuVG9vbHMuYWRDYWxsQmFjaygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgUG93ZXJUaW1lKCkge1xuICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8IDUpIHtcbiAgICAgICAgICAgIC8vIOeOsOWcqOaJjeS8muWAkuiuoeaXtlxuICAgICAgICAgICAgLy8g5YWI6I635Y+WXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUG93ZXJUaW1lU2NoZWR1bGUoKSB7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlcl9zZWMgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICAgICAgLy8g5Zyo6I635Y+W55So5oi35L+h5oGvIOaYr+WQpuS9k+WKm+a7oSDmsqHmnInmu6HmjqXnnYDlgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQoY2Muem0udXNlckluZm8ucG93ZXJfc2VjKTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYy0tXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWGmeS4gOS4queul+azlSDlsIbnp5LmlbDkvKDov5vmnaXnlJ/miJDkuIDkuKowMDowMOW9ouW8j+eahOWtl+espuS4slxuICAgIGNoYW5nZVNlY29uZChzKSB7XG4gICAgICAgIGxldCBtaW51dGUgPSBcIjBcIiArIE1hdGguZmxvb3IocyAvIDYwKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IHMgJSA2MCA+PSAxMCA/IHMgJSA2MCA6IFwiMFwiICsgcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGUgKyBcIjpcIiArIHNlY29uZFxuICAgIH0sXG4gICAgZ3VpZGVPdmVyKCkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgXCJvdmVyXCIpO1xuICAgIH0sXG4gICAgU3RhcnRHYW1lKCkge1xuICAgICAgICAvL+WFs+mXrUJHTVxuICAgICAgICAvLyBjYy56bS51c2VySW5mby53aW4gPSB0cnVlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuQkdNX0lEKTtcbiAgICAgICAgLy/muIXnqbrlhbPljaHmlbAg5LiN5riF56m65YWz5Y2hXG4gICAgICAgIGlmICh0aGlzLmd1aWRlKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvL+i3s+i9rOWcuuaZr1xuICAgICAgICAvLyDlvIDlp4vmuLjmiI/kuYvliY0g5YWI6I635Y+W5YWz5Y2h5L+h5oGvIOWmguaenOayoeacieWFs+WNoeS/oeaBr+S4jei/m+WFpea4uOaIj1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF9zdGFydCsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5YWz5Y2h5L+h5oGvPVwiLCBKU09OLnN0cmluZ2lmeShjYy56bS5MZXZlbEluZm8pKTtcbiAgICAgICAgICAgIC8vIOWIpOaWrVxuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrnnIvop4bpopHojrflvpfkvZPlipvnlYzpnaJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWVWaWRlb2xheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd1NlZVZpZGVvbGF5ZXIoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDnnIvop4bpopHlvpflpZblirFcbiAgICBzZWVWaWRlb0F3YXJkKCkge1xuICAgICAgICBjYy56bS52aWRlb0FkLmVudGVyR2FtZSA9IGZhbHNlO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuetvuWIsOeVjOmdolxuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWFiOiOt+WPluetvuWIsOWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluTGlzdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIC8vIOetvuWIsOaMiemSruaJk+eCuVxuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5zaWduX2luX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIGxldCBidG5Db20gPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcInNpZ25CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZihpPT09dGhpcy5zaWduRGF5KXtcbiAgICAgICAgICAgICAgICAgICAgaWYoX2RhdGEuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNpZ25EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrorr7nva7nlYzpnaJcbiAgICBzaG93U2V0TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuU2V0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IG5pY2tOYW1lID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5pa2VuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIG5pY2tOYW1lLnN0cmluZyA9IHRoaXMudXNlckluZm8ubmlja19uYW1lO1xuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJpZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB1c2VySWQuc3RyaW5nID0gYOeUqOaIt0lE77yaJHt0aGlzLnVzZXJJbmZvLnVzZXJfaWR9YFxuICAgICAgICAvLyBpY29uXG4gICAgICAgIGxldCBpY29uID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB2YXIgcmVtb3RlVXJsID0gdGhpcy51c2VySW5mby5hdmF0YXJfdXJsO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZW1vdGVVcmwsIHsgZXh0OiAnLnBuZycgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrkuLvnlYzpnaJcbiAgICBzaG93SW5kZXhMYXllcigpIHtcbiAgICAgICAgLy8g6ZqQ6JePYmFubmVyXG4gICAgICAgIGlmKCFjYy5lbmRDb3VudFRpbWUpe1xuICAgICAgICAgICAgY2MuZW5kQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoY2MuZW5kQ291bnRUaW1lLWNjLmJlZ2luQ291bnRUaW1lPjMwMDAwKXtcbiAgICAgICAgICAgICAgICAvLyDop6blj5Hmj5LlsY9cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGFibGVTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICBjYy5iZWdpbkNvdW50VGltZSA9IGNjLmVuZENvdW50VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5oaWRlQmFubmVyKCk7XG4gICAgICAgIC8vIOe6ouWMheeahOaVsOmHj1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dldE1vbmV5L2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucmVkX3BhY2s7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlcjtcbiAgICAgICAgLy8g5YWD5a6d55qE5Liq5pWwXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvWXVhbkJhby9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLmdjO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dvbGQvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5zY29yZTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnBvd2VyXG4gICAgICAgIGxldCBidG5Db20gPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0JlZ2luR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLndpbikge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlpKfovaznm5jnlYzpnaJcbiAgICBzaG93VHVybnRhYmxlTGF5ZXIoKSB7XG4gICAgICAgIC8vIOaYvuekuuWkp+i9rOebmOS5i+WJjeiOt+WPlueUqOaIt+S/oeaBr+aOpeWPo1xuICAgICAgICB0aGlzLnBvaW50ID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy50dXJudGFibGVfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImJlZ2luQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnNlYyA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAvLyDmraTml7bovaznm5jngrnlh7vmjInpkq4g572u54Gw5LiU5LiN5Y+v54K55Ye7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gTWF0aC5hYnMoY2Muem0udXNlckluZm8uc2VjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duLCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOWkp+i9rOebmOeahOWAkuiuoeaXtlxuICAgIFR1cm5UYWJsZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudExibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZS0tO1xuICAgICAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQodGhpcy5jb3VudERvd25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S657qi5YyF5rGg55WM6Z2iXG4gICAgc2hvd1JlZFBvb2xMYXllcigpIHtcbiAgICAgICAgLy8g6I635Y+W5aWW5rGg5L+h5oGvXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvSmFja1BvdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3RfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICB0aGlzLlJlZFBvb2xMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHBvb2xJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgYXJyID0gW1wia2FpXCIsIFwieGluXCIsIFwia3VhbmdcIiwgXCJnb25nXCJdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBvb2xJbmZvW2FycltpXV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKGFycltpXSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb20uc3RyaW5nID0gXCJ4XCIgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWlluaxoOmHkeminSBcbiAgICAgICAgICAgIC8vIGxldCBhd2FyZF9sYmwgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgLy8gYXdhcmRfbGJsLnN0cmluZyA9IHBvb2xJbmZvLmFtb3VudFxuICAgICAgICAgICAgLy8g5aKe5Yqg5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgaG91ciA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaG91ci5zdHJpbmcgPSBwb29sSW5mby5ob3VyO1xuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbWludXRlLnN0cmluZyA9IHBvb2xJbmZvLm1pbnV0ZSA8IDEwID8gXCIwXCIgKyBwb29sSW5mby5taW51dGUgOiBwb29sSW5mby5taW51dGU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLo35pel5Lu75Yqh55WM6Z2iXG4gICAgc2hvd1NldmVuV29ya0xheWVyKCkge1xuICAgICAgICAvLyDnjrDojrflj5bkuIPml6Xku7vliqHliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICAvLyDpgJrov4fmlbDmja7liJ3lp4vljJbnlYzpnaIg54q25oCBIDAu5pyq6aKG5Y+WIDEu5bey6aKG5Y+WXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJEYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID09PSBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI6I635Y+W6Ieq5bex55qE5pWw5o2uIFxuICAgICAgICAgICAgICAgIGxldCBfc3RhdHVzID0gaXRlbXNbaV0uc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICghX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBpdGVtc1tpXS5udW07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPiBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBzZXJ2ZXJEYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICAvLyB0aGlzLnNpZ25OdW1iZXIgPSA3O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IGl0ZW1zW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9sYXlvdXQgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dEggPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfXCIgKyAoaiArIDEpKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0SC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICAgICAgICAgIGJ0bi5faWQgPSBfZGF0YS5pZDtcbiAgICAgICAgICAgICAgICBidG4udmFsdWUgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3miYDmnInmnaHku7bmmK/lkKblnYfovr7miJBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UgJiYgX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pbiAmJiBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadoeS7tui+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOayoeaciei+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5YWI6K6+572u5paH5pysXG4gICAgICAgICAgICAgICAgLy8g57qi5YyFXG4gICAgICAgICAgICAgICAgbGV0IHJlZCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGJsMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHJlZC5zdHJpbmcgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7op4LnnIvop4bpopHmrKHmlbBcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9UZXh0ID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdmlkZW9UZXh0LnN0cmluZyA9IGDop4LnnIske19kYXRhLm5lZWRfYWR95Liq6KeG6aKRYFxuICAgICAgICAgICAgICAgIC8vIOi/m+W6puadoVxuICAgICAgICAgICAgICAgIGxldCBiYXIgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gX2RhdGEuY3Vycl9hZCAvIF9kYXRhLm5lZWRfYWQ7XG4gICAgICAgICAgICAgICAgbGV0IGJhckxibCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiYmFyTGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgYmFyTGJsLnN0cmluZyA9IGAke19kYXRhLmN1cnJfYWR9LyR7X2RhdGEubmVlZF9hZH1gXG4gICAgICAgICAgICAgICAgLy8g6aKd5aSW5p2h5Lu2XG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB6YCa5YWz5pWwXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1MYXlvdXQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTAgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8wXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzFcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmAmui/h+esrCR7X2RhdGEubmVlZF9wYXNzX3N0YWdlfeWFs2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0wLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX3Bhc3Nfc3RhZ2UgPj0gX2RhdGEubmVlZF9wYXNzX3N0YWdlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6aKG5Y+W562+5Yiw5aWW5YqxYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmCgOivtyR7X2RhdGEubmVlZF9pbnZpdGV95Liq5aW95Y+LYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S66YeN572u5YWz5Y2h55WM6Z2iXG4gICAgc2hvd1Jlc3VtZUxheWVyKCkge1xuICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICByZXN1bWVMZXZlbCgpIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Jlc2V0XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBzZXZlbldvcmtHZXRNb25leShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLmnaHku7bmnKrovr7miJBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QdWxsTWlzc2lvblwiLCBcIlBPU1RcIiwgeyBpZDogdGFyZ2V0Ll9pZCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWIt+aWsFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NldmVuV29ya0xheWVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLnuqLljIXmj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90aW1lczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9yZXN1bHQ6IFwi5oiQ5YqfXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS3miZPngrnmlbDmja5cIiwgSlNPTi5zdHJpbmdpZnkoZG90RGF0YSkpXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2FzaF9vdXRcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TYXZpbmdQb3RcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5iYW5rX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBnYyA9IGRhdGEuZ2MgfHwgMFxuICAgICAgICAgICAgLy8g5YWI5a6a5LmJ5b2T5YmN6YKj5Liq6Zi25q615piv5ZCm5Y+v5Lul5o+Q5Y+WXG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFswLjMsIDAuNSwgMSwgMiwgNSwgMTAsIDIwXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXRlbXNbaV0udGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliJ3lp4vljJblrZjpkrHnvZDnlYzpnaLlsZ7mgKdcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOaYvuekuuWFg+WuneS9meminVxuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIll1YW5CYW9fTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2M7XG4gICAgICAgICAgICAvLyAvLyDlhYPlrp3ot5/njrDph5Hov5vooYzovazmjaIg6L2s5o2i5q+U5L6L5Li6MTAwMDA6MVxuICAgICAgICAgICAgdGhpcy5leHRyYWN0TW9uZXkgPSBnYyAvIDEwMDAwO1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIkNoYW5nZV9OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmV4dHJhY3RNb25leSArIFwi5YWDXCI7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgICAgICAvLyDlvIDlp4vnmoTml7blgJlnZXRNb25leUJ0bue9rueBsOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g54K55Ye76YCJ5oup5o+Q546w6YeR6ZKx5oyJ6ZKuXG4gICAgY2hvaWNlR2V0TW9uZXlCdG4oZSwgbXNnKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+aPkOeOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4xKGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VcIiwgXCJQT1NUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/mj5DnjrBcbiAgICAgICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90eXBlOiBcIuWFg+WuneaPkOeOsFwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX251bTogdGhpcy5jaG9pY2VCdG4ubW9uZXksXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5omT54K55pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRvdERhdGEpKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHVuU2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjb21wbGV0ZUJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJjb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLlNpZ25MYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25MYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZmlyc3RMYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLmNhbkNsaWNrRnJpc3RCdG4pe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICBjYy5lbmRDb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG5cbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIC8vIOaKveWlluWAkuiuoeaXtiA+PTAg5Luj6KGo5Y+v5Lul5oq95aWW77yMPDAg5Y+W57ud5a+55YC8IOWAkuaVsOenkuaVsFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gNSAmJiB0aGlzLnBvaW50LmFuZ2xlIDw9IHRoaXMuZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSB0aGlzLmVuZEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBpZiAoIWNjLnptLnZpZGVvQWQuY2xpY2tTaWduKSB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgICAvLyDlhYjlg4/mnI3liqHlmajlj5HpgIHor7fmsYLojrflj5bnianlk4FpZFxuICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==