
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYW5DbGlja0ZyaXN0QnRuIiwic2V0SXRlbSIsInNob3dCYW5uZXIiLCJzY2hlZHVsZU9uY2UiLCJzY2FsZSIsInR3ZWVuIiwidG8iLCJkZWxheSIsImNhbGwiLCJzdGFydCIsIlNldExheWVyIiwiU2lnbkxheWVyIiwiVHVybnRhYmxlTGF5ZXIiLCJHZXRNb25ldHlMYXllciIsIlNldmVuV29ya0xheWVyIiwiUmVkUG9vbExheWVyIiwiR2V0R29vZExheWVyIiwiU2VlVmlkZW9sYXllciIsIlJlc3VtZUxheWVyIiwic2hvd011c2ljIiwic2hvd1NoYWtlIiwiY291bnREb3duVGltZSIsInNpZ25OdW1iZXIiLCJCR01fSUQiLCJhdWRpb0VuZ2luZSIsInBsYXkiLCJkaXJlY3RvciIsInByZWxvYWRTY2VuZSIsImd1aWRlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJnZXRVc2VySW5mbyIsInNpZ25faW5fYWN0aSIsInR1cm50YWJsZV9hY3RpIiwiY2FzaF9vdXRfYWN0aSIsImJhbmtfYWN0aSIsImphY2twb3RfYWN0aSIsImxldmVsX3N0YXJ0Iiwic2VuZERhdGEiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJ1c2VySW5mbyIsImRhdGEiLCJjb25zb2xlIiwibG9nIiwiSlNPTiIsInN0cmluZ2lmeSIsInNpZ3NpZ25faW5fdGltZSIsIkRhdGUiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiU3RhcnRHYW1lIiwic3RvcCIsImRvdERhdGEiLCJMZXZlbEluZm8iLCJzaG93U2VlVmlkZW9sYXllciIsImxvYWRTY2VuZSIsInNlZVZpZGVvQXdhcmQiLCJlbnRlckdhbWUiLCJzaG93SmlsaUFkIiwic2hvd1NpZ25MYXllciIsIml0ZW1zIiwiYnRuQ29tIiwiQnV0dG9uIiwic2lnbkRheSIsImRheSIsImkiLCJkYXlOb2RlIiwiX2RhdGEiLCJzdGF0dXMiLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsImNvbXBsZXRlQnRuIiwic2VsZWN0QnRuIiwidW5TZWxlY3RCdG4iLCJzaG93U2V0TGF5ZXIiLCJuaWNrTmFtZSIsIm5pY2tfbmFtZSIsInVzZXJJZCIsInVzZXJfaWQiLCJpY29uIiwiU3ByaXRlIiwicmVtb3RlVXJsIiwiYXZhdGFyX3VybCIsImFzc2V0TWFuYWdlciIsImxvYWRSZW1vdGUiLCJleHQiLCJlcnIiLCJ0ZXh0dXJlIiwic3ByaXRlRnJhbWUiLCJlbmRDb3VudFRpbWUiLCJnZXRUaW1lIiwiYmVnaW5Db3VudFRpbWUiLCJzaG93VGFibGVTY3JlZW4iLCJoaWRlQmFubmVyIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwid2luIiwic2hvd1R1cm50YWJsZUxheWVyIiwicG9pbnQiLCJhbmdsZSIsInNlYyIsImFicyIsIlR1cm5UYWJsZUNvdW50RG93biIsInNob3dSZWRQb29sTGF5ZXIiLCJwb29sSW5mbyIsImFyciIsInZhbHVlIiwiY29tIiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNlcnZlckRheSIsImxlbmd0aCIsIl9zdGF0dXMiLCJudW0iLCJwdXNoIiwidGl0bGUiLCJsYXlvdXQiLCJfbGF5b3V0IiwiaiIsIl9sYXlvdXRIIiwiYnRuIiwiX2lkIiwiaWQiLCJpc0NvbXBsZXRlIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9pbnZpdGUiLCJuZWVkX2ludml0ZSIsImNvbXBsZXRlIiwicmVkIiwidmlkZW9UZXh0IiwibmVlZF9hZCIsImJhciIsIlByb2dyZXNzQmFyIiwicHJvZ3Jlc3MiLCJjdXJyX2FkIiwiYmFyTGJsIiwiaXRlbUxheW91dCIsIml0ZW0wIiwiaXRlbTEiLCJpdGVtMiIsImFycm93Iiwic2hvd1Jlc3VtZUxheWVyIiwicmVzdW1lTGV2ZWwiLCJzZXZlbldvcmtHZXRNb25leSIsImUiLCJ0YXJnZXQiLCJzaG93VGlwcyIsIm5vZGUiLCJjYXNoX3R5cGUiLCJjYXNoX251bSIsImNhc2hfdGltZXMiLCJjYXNoX3Jlc3VsdCIsInNob3dHZXRNb25leUxheWVyIiwiZ2V0TW9uZXlTdGFnZSIsIkxlbmd0aCIsInRpbWVzIiwiZXh0cmFjdE1vbmV5IiwiY2hvaWNlQnRuIiwiY2hvaWNlR2V0TW9uZXlCdG4iLCJtc2ciLCJtb25leSIsIk51bWJlciIsImNsaWNrR2V0TW9uZXlCdG4xIiwibGF5ZXIiLCJwYXJlbnQiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJFeGl0QmFja0J0biIsImNsaWNrU2lnbkJ0biIsImlzTmF0aXZlIiwiY2xpY2tUdXJuVGFibGVCdG4iLCJjcmVhdGVSYW5kbSIsIm4iLCJtIiwiYSIsInJhbmRvbSIsInBhcnNlSW50IiwidXBkYXRlIiwiZHQiLCJiZWdpblR1cm4iLCJzcGVlZCIsImNpcmNsZSIsImVuZEFuZ2xlIiwiYWQiLCJzaG93UG9wIiwiY2FyZCIsIm9iaiIsImF3YXJkIiwibmFtZSIsImluZGV4IiwiX2F3YXJkIiwiZ29vZE5hbWUiLCJnb29kTnVtYmVyIiwiZ2NOdW1iZXIiLCJ0ZXh0TnVtYmVyIiwidGV4dCIsImxheW91dDEiLCJsYXlvdXQyIiwibGJsIiwiRXhpdFd4TG9naW4iLCJ3eFRva2VuIiwid3hMb2dpblJlc3VsdGNvZGUiLCJyZW1vdmVJdGVtIiwic2hvd1VzZXJQcm90b2NvbCIsInByb3RvY29sIiwiaGlkZVVzZXJQcm90b2NvbCIsInNob3dVc2VyUHJpdmFjeSIsImhpZGVVc2VyUHJpdmFjeSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBLElBQU1BLEtBQUssR0FBR0MsRUFBRSxDQUFDQyxJQUFILENBQVE7QUFDbEJDLEVBQUFBLEtBQUssRUFBRSxDQURXO0FBRWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FGVztBQUdsQkMsRUFBQUEsS0FBSyxFQUFFLENBSFc7QUFJbEJDLEVBQUFBLEtBQUssRUFBRSxDQUpXO0FBS2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FMVztBQU1sQkMsRUFBQUEsS0FBSyxFQUFFLENBTlc7QUFPbEJDLEVBQUFBLEtBQUssRUFBRSxDQVBXO0FBUWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FSVztBQVNsQkMsRUFBQUEsTUFBTSxFQUFFLENBVFU7QUFVbEJDLEVBQUFBLElBQUksRUFBRSxDQVZZO0FBV2xCQyxFQUFBQSxJQUFJLEVBQUUsRUFYWTtBQVlsQkMsRUFBQUEsTUFBTSxFQUFFLEVBWlU7QUFhbEJDLEVBQUFBLEtBQUssRUFBRTtBQWJXLENBQVIsQ0FBZDtBQWVBZCxFQUFFLENBQUNlLEtBQUgsQ0FBUztBQUNMLGFBQVNmLEVBQUUsQ0FBQ2dCLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1JDLElBQUFBLEdBQUcsRUFBRTtBQUNELGlCQUFTLElBRFI7QUFFREMsTUFBQUEsSUFBSSxFQUFFbkIsRUFBRSxDQUFDb0I7QUFGUixLQURHO0FBS1JDLElBQUFBLFdBQVcsRUFBRTtBQUNURixNQUFBQSxJQUFJLEVBQUVuQixFQUFFLENBQUNzQixXQURBO0FBRVQsaUJBQVM7QUFGQSxLQUxMO0FBU1JDLElBQUFBLFdBQVcsRUFBRTtBQUNUSixNQUFBQSxJQUFJLEVBQUVuQixFQUFFLENBQUNzQixXQURBO0FBRVQsaUJBQVM7QUFGQSxLQVRMO0FBYVJFLElBQUFBLFVBQVUsRUFBRTtBQUNSTCxNQUFBQSxJQUFJLEVBQUVuQixFQUFFLENBQUNzQixXQUREO0FBRVIsaUJBQVM7QUFGRDtBQWJKLEdBSFA7QUFzQkw7QUFDQUcsRUFBQUEsTUF2Qkssb0JBdUJJO0FBQUE7O0FBQ0w7QUFDQTtBQUNBekIsSUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxHQUFRLEVBQVI7QUFDQTFCLElBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTUMsT0FBTixHQUFnQixFQUFoQixDQUpLLENBS0w7O0FBQ0EzQixJQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0MsU0FBZCxHQUEwQixJQUExQixDQU5LLENBT0w7O0FBQ0E1QixJQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0UsVUFBZCxHQUEyQixJQUEzQixDQVJLLENBU0w7O0FBQ0E3QixJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNDLGFBQVQsR0FWSyxDQVdMOztBQUNBL0IsSUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTRSxHQUFULENBQWEsWUFBYixFQUEwQixJQUExQixFQVpLLENBYUw7O0FBQ0EsU0FBS0MsVUFBTCxHQUFrQmpDLEVBQUUsQ0FBQ2tDLElBQUgsQ0FBUSxjQUFSLENBQWxCO0FBQ0EsU0FBS0QsVUFBTCxDQUFnQkUsTUFBaEIsR0FBeUIsS0FBekI7O0FBQ0EsUUFBSUMsTUFBTSxHQUFHcEMsRUFBRSxDQUFDcUMsR0FBSCxDQUFPQyxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixDQUFiOztBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLEtBQXhCOztBQUNBLFFBQUksQ0FBQ0osTUFBTCxFQUFhO0FBQ1RwQyxNQUFBQSxFQUFFLENBQUNxQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JHLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLElBQXJDLEVBRFMsQ0FFUjs7QUFDRHpDLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU1ksVUFBVDtBQUNBLFdBQUtDLFlBQUwsQ0FBa0IsWUFBTTtBQUNwQixRQUFBLEtBQUksQ0FBQ1YsVUFBTCxDQUFnQlcsS0FBaEIsR0FBd0IsQ0FBeEI7QUFDQSxRQUFBLEtBQUksQ0FBQ1gsVUFBTCxDQUFnQkUsTUFBaEIsR0FBeUIsSUFBekI7QUFDQW5DLFFBQUFBLEVBQUUsQ0FBQzZDLEtBQUgsQ0FBUyxLQUFJLENBQUNaLFVBQWQsRUFBMEJhLEVBQTFCLENBQTZCLEdBQTdCLEVBQWtDO0FBQUVGLFVBQUFBLEtBQUssRUFBRTtBQUFULFNBQWxDLEVBQWdERyxLQUFoRCxDQUFzRCxDQUF0RCxFQUF5REMsSUFBekQsQ0FBOEQsWUFBSTtBQUM5RCxVQUFBLEtBQUksQ0FBQ1IsZ0JBQUwsR0FBd0IsSUFBeEI7QUFDSCxTQUZELEVBRUdTLEtBRkg7QUFHSCxPQU5ELEVBTUcsQ0FOSDtBQU9ILEtBN0JJLENBOEJMO0FBQ0E7OztBQUNBLFNBQUtDLFFBQUwsR0FBZ0JsRCxFQUFFLENBQUNrQyxJQUFILENBQVEsaUJBQVIsQ0FBaEIsQ0FoQ0ssQ0FpQ0w7O0FBQ0EsU0FBS2lCLFNBQUwsR0FBaUJuRCxFQUFFLENBQUNrQyxJQUFILENBQVEsa0JBQVIsQ0FBakIsQ0FsQ0ssQ0FtQ0w7O0FBQ0EsU0FBS2tCLGNBQUwsR0FBc0JwRCxFQUFFLENBQUNrQyxJQUFILENBQVEsdUJBQVIsQ0FBdEIsQ0FwQ0ssQ0FxQ0w7O0FBQ0EsU0FBS21CLGNBQUwsR0FBc0JyRCxFQUFFLENBQUNrQyxJQUFILENBQVEsc0JBQVIsQ0FBdEIsQ0F0Q0ssQ0F1Q0w7O0FBQ0EsU0FBS29CLGNBQUwsR0FBc0J0RCxFQUFFLENBQUNrQyxJQUFILENBQVEsdUJBQVIsQ0FBdEIsQ0F4Q0ssQ0F5Q0w7O0FBQ0EsU0FBS3FCLFlBQUwsR0FBb0J2RCxFQUFFLENBQUNrQyxJQUFILENBQVEscUJBQVIsQ0FBcEIsQ0ExQ0ssQ0EyQ0w7O0FBQ0EsU0FBS3NCLFlBQUwsR0FBb0J4RCxFQUFFLENBQUNrQyxJQUFILENBQVEsZ0JBQVIsQ0FBcEIsQ0E1Q0ssQ0E2Q0w7O0FBQ0EsU0FBS3VCLGFBQUwsR0FBcUJ6RCxFQUFFLENBQUNrQyxJQUFILENBQVEsc0JBQVIsQ0FBckIsQ0E5Q0ssQ0ErQ0w7O0FBQ0EsU0FBS3dCLFdBQUwsR0FBbUIxRCxFQUFFLENBQUNrQyxJQUFILENBQVEsb0JBQVIsQ0FBbkI7QUFDQWxDLElBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTWlDLFNBQU4sR0FBa0IsSUFBbEI7QUFDQTNELElBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTWtDLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLENBQXJCO0FBQ0EsU0FBS0MsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtDLE1BQUwsR0FBYy9ELEVBQUUsQ0FBQ2dFLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLL0MsR0FBekIsQ0FBZCxDQXJESyxDQXNETDs7QUFDQWxCLElBQUFBLEVBQUUsQ0FBQ2tFLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixNQUF6QixFQXZESyxDQXdETDs7QUFDQSxRQUFJQyxLQUFLLEdBQUdwRSxFQUFFLENBQUNrQyxJQUFILENBQVEsY0FBUixDQUFaO0FBQ0FrQyxJQUFBQSxLQUFLLENBQUNqQyxNQUFOLEdBQWUsS0FBZjtBQUNBaUMsSUFBQUEsS0FBSyxDQUFDQyxjQUFOLENBQXFCLFNBQXJCLEVBQWdDbEMsTUFBaEMsR0FBeUMsS0FBekM7QUFDQWlDLElBQUFBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixTQUFyQixFQUFnQ2xDLE1BQWhDLEdBQXlDLEtBQXpDOztBQUNBLFFBQUluQyxFQUFFLENBQUNxQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLE1BQXlDLE1BQTdDLEVBQXFEO0FBQ2pELFVBQUksQ0FBQ3ZDLEVBQUUsQ0FBQ3FDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBTCxFQUEyQztBQUN2QyxhQUFLNkIsS0FBTCxHQUFhLElBQWI7QUFDQUEsUUFBQUEsS0FBSyxDQUFDakMsTUFBTixHQUFlLElBQWY7QUFDQWlDLFFBQUFBLEtBQUssQ0FBQ0MsY0FBTixDQUFxQixTQUFyQixFQUFnQ2xDLE1BQWhDLEdBQXlDLElBQXpDO0FBQ0g7O0FBQ0QsVUFBSW5DLEVBQUUsQ0FBQ3FDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsTUFBeUMsR0FBN0MsRUFBa0Q7QUFDOUMsYUFBSzZCLEtBQUwsR0FBYSxLQUFiO0FBQ0FBLFFBQUFBLEtBQUssQ0FBQ2pDLE1BQU4sR0FBZSxJQUFmO0FBQ0FpQyxRQUFBQSxLQUFLLENBQUNDLGNBQU4sQ0FBcUIsU0FBckIsRUFBZ0NsQyxNQUFoQyxHQUF5QyxJQUF6QztBQUNIO0FBQ0osS0F4RUksQ0F5RUw7OztBQUNBLFNBQUttQyxXQUFMLEdBMUVLLENBMkVMO0FBQ0E7O0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQixDQTdFSyxDQThFTDs7QUFDQSxTQUFLQyxjQUFMLEdBQXNCLENBQXRCLENBL0VLLENBZ0ZMOztBQUNBLFNBQUtDLGFBQUwsR0FBcUIsQ0FBckIsQ0FqRkssQ0FrRkw7O0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixDQUFqQixDQW5GSyxDQW9GTDs7QUFDQSxTQUFLQyxZQUFMLEdBQW9CLENBQXBCLENBckZLLENBc0ZMOztBQUNBLFNBQUtDLFdBQUwsR0FBbUIsQ0FBbkI7QUFDSCxHQS9HSTtBQWdITE4sRUFBQUEsV0FoSEsseUJBZ0hTO0FBQUE7O0FBQ1YsUUFBSU8sUUFBUSxHQUFHLEVBQWY7QUFDQTdFLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIsd0JBQXJCLEVBQStDLEtBQS9DLEVBQXNERCxRQUF0RCxFQUFnRUUsSUFBaEUsQ0FBcUUsVUFBQ0MsR0FBRCxFQUFTO0FBQzFFLE1BQUEsTUFBSSxDQUFDQyxRQUFMLEdBQWdCRCxHQUFHLENBQUNFLElBQXBCO0FBQ0FsRixNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLEdBQWlCLE1BQUksQ0FBQ0EsUUFBdEI7QUFDQUUsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksd0JBQXdCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZSxNQUFJLENBQUNMLFFBQXBCLENBQXBDLEVBSDBFLENBSTFFOztBQUNBakYsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTRSxHQUFULENBQWEsU0FBYixFQUF3QjtBQUFFdUQsUUFBQUEsZUFBZSxFQUFFLElBQUlDLElBQUo7QUFBbkIsT0FBeEI7O0FBQ0EsTUFBQSxNQUFJLENBQUNDLGNBQUwsR0FOMEUsQ0FPMUU7OztBQUNBLE1BQUEsTUFBSSxDQUFDQyxTQUFMLEdBUjBFLENBVTFFO0FBQ0E7O0FBQ0gsS0FaRDtBQWFILEdBL0hJO0FBZ0lMQSxFQUFBQSxTQWhJSyx1QkFnSU87QUFDUixRQUFJQyxJQUFJLEdBQUczRixFQUFFLENBQUNrQyxJQUFILENBQVEseUJBQVIsRUFBbUMwRCxZQUFuQyxDQUFnRDVGLEVBQUUsQ0FBQzZGLEtBQW5ELENBQVg7O0FBQ0EsUUFBSTdGLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTXVELFFBQU4sQ0FBZWEsS0FBZixHQUF1QixDQUEzQixFQUE4QjtBQUMxQjtBQUNBO0FBQ0EsV0FBS0MsUUFBTCxDQUFjLEtBQUtDLGlCQUFuQixFQUFzQyxDQUF0QztBQUNILEtBSkQsTUFJTztBQUNITCxNQUFBQSxJQUFJLENBQUNNLE1BQUwsR0FBYyxPQUFkO0FBQ0EsV0FBS0MsVUFBTCxDQUFnQixLQUFLRixpQkFBckI7QUFDSDtBQUNKLEdBMUlJO0FBMklMQSxFQUFBQSxpQkEzSUssK0JBMkllO0FBQ2hCLFFBQUloRyxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLENBQWVrQixTQUFmLElBQTRCLENBQWhDLEVBQW1DO0FBQy9CLFdBQUtELFVBQUwsQ0FBZ0IsS0FBS0YsaUJBQXJCLEVBRCtCLENBRS9COztBQUNBLFdBQUsxQixXQUFMO0FBQ0gsS0FKRCxNQUlPO0FBQ0g7QUFDQSxVQUFJcUIsSUFBSSxHQUFHM0YsRUFBRSxDQUFDa0MsSUFBSCxDQUFRLHlCQUFSLEVBQW1DMEQsWUFBbkMsQ0FBZ0Q1RixFQUFFLENBQUM2RixLQUFuRCxDQUFYO0FBQ0FGLE1BQUFBLElBQUksQ0FBQ00sTUFBTCxHQUFjLEtBQUtHLFlBQUwsQ0FBa0JwRyxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLENBQWVrQixTQUFqQyxDQUFkO0FBQ0FuRyxNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLENBQWVrQixTQUFmO0FBQ0g7QUFDSixHQXRKSTtBQXVKTDtBQUNBQyxFQUFBQSxZQXhKSyx3QkF3SlFDLENBeEpSLEVBd0pXO0FBQ1osUUFBSUMsTUFBTSxHQUFHLE1BQU1DLElBQUksQ0FBQ0MsS0FBTCxDQUFXSCxDQUFDLEdBQUcsRUFBZixDQUFuQjtBQUNBLFFBQUlJLE1BQU0sR0FBR0osQ0FBQyxHQUFHLEVBQUosSUFBVSxFQUFWLEdBQWVBLENBQUMsR0FBRyxFQUFuQixHQUF3QixNQUFNQSxDQUFDLEdBQUcsRUFBL0M7QUFDQSxXQUFPQyxNQUFNLEdBQUcsR0FBVCxHQUFlRyxNQUF0QjtBQUNILEdBNUpJO0FBNkpMQyxFQUFBQSxTQTdKSyx1QkE2Sk87QUFDUjFHLElBQUFBLEVBQUUsQ0FBQ2tDLElBQUgsQ0FBUSxjQUFSLEVBQXdCQyxNQUF4QixHQUFpQyxLQUFqQztBQUNBbkMsSUFBQUEsRUFBRSxDQUFDcUMsR0FBSCxDQUFPQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixPQUE1QixFQUFxQyxNQUFyQztBQUNILEdBaEtJO0FBaUtMa0UsRUFBQUEsU0FqS0ssdUJBaUtPO0FBQUE7O0FBQ1I7QUFDQTtBQUNBM0csSUFBQUEsRUFBRSxDQUFDZ0UsV0FBSCxDQUFlNEMsSUFBZixDQUFvQixLQUFLN0MsTUFBekIsRUFIUSxDQUlSOztBQUNBLFFBQUksS0FBS0ssS0FBVCxFQUFnQjtBQUNacEUsTUFBQUEsRUFBRSxDQUFDcUMsR0FBSCxDQUFPQyxZQUFQLENBQW9CRyxPQUFwQixDQUE0QixPQUE1QixFQUFxQyxDQUFyQztBQUNILEtBUE8sQ0FRUjtBQUNBOzs7QUFDQXpDLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIscUJBQXJCLEVBQTRDLEtBQTVDLEVBQW1ELEVBQW5ELEVBQXVEQyxJQUF2RCxDQUE0RCxVQUFDQyxHQUFELEVBQVM7QUFDakUsTUFBQSxNQUFJLENBQUNKLFdBQUw7QUFDQSxVQUFJaUMsT0FBTyxHQUFHO0FBQ1Z0QyxRQUFBQSxZQUFZLEVBQUUsTUFBSSxDQUFDQSxZQURUO0FBRVZDLFFBQUFBLGNBQWMsRUFBRSxNQUFJLENBQUNBLGNBRlg7QUFHVkMsUUFBQUEsYUFBYSxFQUFFLE1BQUksQ0FBQ0EsYUFIVjtBQUlWQyxRQUFBQSxTQUFTLEVBQUUsTUFBSSxDQUFDQSxTQUpOO0FBS1ZDLFFBQUFBLFlBQVksRUFBRSxNQUFJLENBQUNBLFlBTFQ7QUFNVkMsUUFBQUEsV0FBVyxFQUFFLE1BQUksQ0FBQ0E7QUFOUixPQUFkO0FBUUE1RSxNQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNFLEdBQVQsQ0FBYSxPQUFiLEVBQXNCNkUsT0FBdEI7QUFFQTdHLE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTW9GLFNBQU4sR0FBa0I5QixHQUFHLENBQUNFLElBQXRCO0FBQ0FDLE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGdCQUFaLEVBQThCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXRGLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTW9GLFNBQXJCLENBQTlCLEVBYmlFLENBY2pFOztBQUNBLFVBQUk5RyxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLENBQWVhLEtBQWYsSUFBd0IsQ0FBNUIsRUFBK0I7QUFDM0I7QUFDQSxRQUFBLE1BQUksQ0FBQ2lCLGlCQUFMO0FBQ0gsT0FIRCxNQUdPO0FBQ0gvRyxRQUFBQSxFQUFFLENBQUNrRSxRQUFILENBQVk4QyxTQUFaLENBQXNCLE1BQXRCO0FBQ0g7QUFDSixLQXJCRDtBQXNCSCxHQWpNSTtBQWtNTEQsRUFBQUEsaUJBbE1LLCtCQWtNZTtBQUNoQi9HLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU1ksVUFBVDtBQUNBLFNBQUtlLGFBQUwsQ0FBbUJ0QixNQUFuQixHQUE0QixJQUE1QjtBQUNILEdBck1JO0FBc01MO0FBQ0E4RSxFQUFBQSxhQXZNSywyQkF1TVc7QUFDWmpILElBQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTUMsT0FBTixDQUFjdUYsU0FBZCxHQUEwQixLQUExQjtBQUNBbEgsSUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTcUYsVUFBVDtBQUNBLFNBQUsxRCxhQUFMLENBQW1CdEIsTUFBbkIsR0FBNEIsS0FBNUI7QUFDSCxHQTNNSTtBQTRNTDtBQUNBaUYsRUFBQUEsYUE3TUssMkJBNk1XO0FBQUE7O0FBQ1o7QUFDQSxRQUFJdkMsUUFBUSxHQUFHLEVBQWY7QUFDQTdFLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIsMEJBQXJCLEVBQWlELEtBQWpELEVBQXdERCxRQUF4RCxFQUFrRUUsSUFBbEUsQ0FBdUUsVUFBQ0MsR0FBRCxFQUFTO0FBQzVFLFVBQUlxQyxLQUFLLEdBQUdyQyxHQUFHLENBQUNFLElBQUosQ0FBU21DLEtBQXJCLENBRDRFLENBRTVFOztBQUNBckgsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTWSxVQUFUO0FBQ0EsTUFBQSxNQUFJLENBQUM2QixZQUFMO0FBQ0EsVUFBSXNDLE9BQU8sR0FBRztBQUNWdEMsUUFBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0EsWUFEVDtBQUVWQyxRQUFBQSxjQUFjLEVBQUUsTUFBSSxDQUFDQSxjQUZYO0FBR1ZDLFFBQUFBLGFBQWEsRUFBRSxNQUFJLENBQUNBLGFBSFY7QUFJVkMsUUFBQUEsU0FBUyxFQUFFLE1BQUksQ0FBQ0EsU0FKTjtBQUtWQyxRQUFBQSxZQUFZLEVBQUUsTUFBSSxDQUFDQSxZQUxUO0FBTVZDLFFBQUFBLFdBQVcsRUFBRSxNQUFJLENBQUNBO0FBTlIsT0FBZDtBQVFBNUUsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTRSxHQUFULENBQWEsT0FBYixFQUFzQjZFLE9BQXRCOztBQUNBLFVBQUlTLE1BQU0sR0FBRyxNQUFJLENBQUNuRSxTQUFMLENBQWVrQixjQUFmLENBQThCLFNBQTlCLEVBQXlDdUIsWUFBekMsQ0FBc0Q1RixFQUFFLENBQUN1SCxNQUF6RCxDQUFiOztBQUNBLE1BQUEsTUFBSSxDQUFDQyxPQUFMLEdBQWV4QyxHQUFHLENBQUNFLElBQUosQ0FBU3VDLEdBQXhCO0FBQ0EsTUFBQSxNQUFJLENBQUN0RSxTQUFMLENBQWVoQixNQUFmLEdBQXdCLElBQXhCOztBQUNBLFdBQUssSUFBSXVGLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLElBQUksQ0FBckIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsWUFBSUMsT0FBTyxHQUFHLE1BQUksQ0FBQ3hFLFNBQUwsQ0FBZWtCLGNBQWYsQ0FBOEIsU0FBU3FELENBQXZDLENBQWQ7O0FBQ0EsWUFBSUUsS0FBSyxHQUFHUCxLQUFLLENBQUNLLENBQUMsR0FBRyxDQUFMLENBQWpCOztBQUNBLFlBQUdBLENBQUMsS0FBRyxNQUFJLENBQUNGLE9BQVosRUFBb0I7QUFDaEIsY0FBR0ksS0FBSyxDQUFDQyxNQUFULEVBQWdCO0FBQ1pQLFlBQUFBLE1BQU0sQ0FBQ1Esb0JBQVAsR0FBOEIsSUFBOUI7QUFDQVIsWUFBQUEsTUFBTSxDQUFDUyxZQUFQLEdBQXNCLEtBQXRCO0FBQ0gsV0FIRCxNQUdLO0FBQ0RULFlBQUFBLE1BQU0sQ0FBQ1MsWUFBUCxHQUFzQixJQUF0QjtBQUNIO0FBQ0o7O0FBQ0QsWUFBSUgsS0FBSyxDQUFDQyxNQUFWLEVBQWtCO0FBQ2QsVUFBQSxNQUFJLENBQUNHLFdBQUwsQ0FBaUJMLE9BQWpCO0FBQ0gsU0FGRCxNQUVPO0FBQ0gsY0FBSUQsQ0FBQyxLQUFLLE1BQUksQ0FBQ0YsT0FBZixFQUF3QjtBQUNwQixZQUFBLE1BQUksQ0FBQ1MsU0FBTCxDQUFlTixPQUFmO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsWUFBQSxNQUFJLENBQUNPLFdBQUwsQ0FBaUJQLE9BQWpCO0FBQ0g7QUFDSjtBQUNKO0FBQ0osS0F0Q0Q7QUF1Q0gsR0F2UEk7QUF3UEw7QUFDQVEsRUFBQUEsWUF6UEssMEJBeVBVO0FBQ1gsU0FBS2pGLFFBQUwsQ0FBY2YsTUFBZCxHQUF1QixJQUF2QixDQURXLENBRVg7O0FBQ0FuQyxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNZLFVBQVQ7QUFDQSxRQUFJMEYsUUFBUSxHQUFHLEtBQUtsRixRQUFMLENBQWNtQixjQUFkLENBQTZCLFVBQTdCLEVBQXlDdUIsWUFBekMsQ0FBc0Q1RixFQUFFLENBQUM2RixLQUF6RCxDQUFmO0FBQ0F1QyxJQUFBQSxRQUFRLENBQUNuQyxNQUFULEdBQWtCLEtBQUtoQixRQUFMLENBQWNvRCxTQUFoQztBQUNBLFFBQUlDLE1BQU0sR0FBRyxLQUFLcEYsUUFBTCxDQUFjbUIsY0FBZCxDQUE2QixRQUE3QixFQUF1Q3VCLFlBQXZDLENBQW9ENUYsRUFBRSxDQUFDNkYsS0FBdkQsQ0FBYjtBQUNBeUMsSUFBQUEsTUFBTSxDQUFDckMsTUFBUCw0QkFBd0IsS0FBS2hCLFFBQUwsQ0FBY3NELE9BQXRDLENBUFcsQ0FRWDs7QUFDQSxRQUFJQyxJQUFJLEdBQUcsS0FBS3RGLFFBQUwsQ0FBY21CLGNBQWQsQ0FBNkIsTUFBN0IsRUFBcUNBLGNBQXJDLENBQW9ELE1BQXBELEVBQTREdUIsWUFBNUQsQ0FBeUU1RixFQUFFLENBQUN5SSxNQUE1RSxDQUFYO0FBQ0EsUUFBSUMsU0FBUyxHQUFHLEtBQUt6RCxRQUFMLENBQWMwRCxVQUE5QjtBQUNBM0ksSUFBQUEsRUFBRSxDQUFDNEksWUFBSCxDQUFnQkMsVUFBaEIsQ0FBMkJILFNBQTNCLEVBQXNDO0FBQUVJLE1BQUFBLEdBQUcsRUFBRTtBQUFQLEtBQXRDLEVBQXVELFVBQVVDLEdBQVYsRUFBZUMsT0FBZixFQUF3QjtBQUMzRTtBQUNBUixNQUFBQSxJQUFJLENBQUNTLFdBQUwsR0FBbUIsSUFBSWpKLEVBQUUsQ0FBQ3NCLFdBQVAsQ0FBbUIwSCxPQUFuQixDQUFuQjtBQUNILEtBSEQ7QUFJSCxHQXhRSTtBQXlRTDtBQUNBdkQsRUFBQUEsY0ExUUssNEJBMFFZO0FBQ2I7QUFDQSxRQUFHLENBQUN6RixFQUFFLENBQUNrSixZQUFQLEVBQW9CO0FBQ2hCbEosTUFBQUEsRUFBRSxDQUFDa0osWUFBSCxHQUFrQixJQUFJMUQsSUFBSixHQUFXMkQsT0FBWCxFQUFsQjtBQUNILEtBRkQsTUFFSztBQUNELFVBQUduSixFQUFFLENBQUNrSixZQUFILEdBQWdCbEosRUFBRSxDQUFDb0osY0FBbkIsR0FBa0MsS0FBckMsRUFBMkM7QUFDdkM7QUFDQXBKLFFBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU3VILGVBQVQ7QUFDQXJKLFFBQUFBLEVBQUUsQ0FBQ29KLGNBQUgsR0FBb0JwSixFQUFFLENBQUNrSixZQUF2QjtBQUNIO0FBQ0o7O0FBQ0RsSixJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVN3SCxVQUFULEdBWGEsQ0FZYjs7QUFDQXRKLElBQUFBLEVBQUUsQ0FBQ2tDLElBQUgsQ0FBUSwyQkFBUixFQUFxQzBELFlBQXJDLENBQWtENUYsRUFBRSxDQUFDNkYsS0FBckQsRUFBNERJLE1BQTVELEdBQXFFLEtBQUtoQixRQUFMLENBQWNzRSxRQUFuRjtBQUNBdkosSUFBQUEsRUFBRSxDQUFDa0MsSUFBSCxDQUFRLHdCQUFSLEVBQWtDMEQsWUFBbEMsQ0FBK0M1RixFQUFFLENBQUM2RixLQUFsRCxFQUF5REksTUFBekQsR0FBa0UsS0FBS2hCLFFBQUwsQ0FBY2EsS0FBaEYsQ0FkYSxDQWViOztBQUNBOUYsSUFBQUEsRUFBRSxDQUFDa0MsSUFBSCxDQUFRLDBCQUFSLEVBQW9DMEQsWUFBcEMsQ0FBaUQ1RixFQUFFLENBQUM2RixLQUFwRCxFQUEyREksTUFBM0QsR0FBb0UsS0FBS2hCLFFBQUwsQ0FBY3VFLEVBQWxGO0FBQ0F4SixJQUFBQSxFQUFFLENBQUNrQyxJQUFILENBQVEsdUJBQVIsRUFBaUMwRCxZQUFqQyxDQUE4QzVGLEVBQUUsQ0FBQzZGLEtBQWpELEVBQXdESSxNQUF4RCxHQUFpRSxLQUFLaEIsUUFBTCxDQUFjd0UsS0FBL0UsQ0FqQmEsQ0FrQmI7O0FBQ0EsUUFBSW5DLE1BQU0sR0FBR3RILEVBQUUsQ0FBQ2tDLElBQUgsQ0FBUSx3QkFBUixFQUFrQzBELFlBQWxDLENBQStDNUYsRUFBRSxDQUFDdUgsTUFBbEQsQ0FBYjs7QUFDQSxRQUFJdkgsRUFBRSxDQUFDMEIsRUFBSCxDQUFNdUQsUUFBTixDQUFleUUsR0FBbkIsRUFBd0I7QUFDcEJwQyxNQUFBQSxNQUFNLENBQUNRLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FSLE1BQUFBLE1BQU0sQ0FBQ1MsWUFBUCxHQUFzQixLQUF0QjtBQUNILEtBSEQsTUFHTztBQUNIVCxNQUFBQSxNQUFNLENBQUNTLFlBQVAsR0FBc0IsSUFBdEI7QUFDSDtBQUNKLEdBcFNJO0FBcVNMO0FBQ0E0QixFQUFBQSxrQkF0U0ssZ0NBc1NnQjtBQUFBOztBQUNqQjtBQUNBLFNBQUtDLEtBQUwsR0FBYSxLQUFLeEcsY0FBTCxDQUFvQmlCLGNBQXBCLENBQW1DLFNBQW5DLENBQWI7QUFDQSxTQUFLdUYsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsUUFBSWhGLFFBQVEsR0FBRyxFQUFmO0FBQ0E3RSxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNnRCxXQUFULENBQXFCLHdCQUFyQixFQUErQyxLQUEvQyxFQUFzREQsUUFBdEQsRUFBZ0VFLElBQWhFLENBQXFFLFVBQUNDLEdBQUQsRUFBUztBQUMxRWhGLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU1ksVUFBVDtBQUNBLE1BQUEsTUFBSSxDQUFDOEIsY0FBTDtBQUNBLFVBQUlxQyxPQUFPLEdBQUc7QUFDVnRDLFFBQUFBLFlBQVksRUFBRSxNQUFJLENBQUNBLFlBRFQ7QUFFVkMsUUFBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ0EsY0FGWDtBQUdWQyxRQUFBQSxhQUFhLEVBQUUsTUFBSSxDQUFDQSxhQUhWO0FBSVZDLFFBQUFBLFNBQVMsRUFBRSxNQUFJLENBQUNBLFNBSk47QUFLVkMsUUFBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0EsWUFMVDtBQU1WQyxRQUFBQSxXQUFXLEVBQUUsTUFBSSxDQUFDQTtBQU5SLE9BQWQ7QUFRQTVFLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU0UsR0FBVCxDQUFhLE9BQWIsRUFBc0I2RSxPQUF0QjtBQUVBN0csTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNdUQsUUFBTixHQUFpQkQsR0FBRyxDQUFDRSxJQUFyQjtBQUNBLE1BQUEsTUFBSSxDQUFDOUIsY0FBTCxDQUFvQmpCLE1BQXBCLEdBQTZCLElBQTdCOztBQUNBLFVBQUltRixNQUFNLEdBQUcsTUFBSSxDQUFDbEUsY0FBTCxDQUFvQmlCLGNBQXBCLENBQW1DLFVBQW5DLEVBQStDdUIsWUFBL0MsQ0FBNEQ1RixFQUFFLENBQUN1SCxNQUEvRCxDQUFiOztBQUNBLFVBQUl2SCxFQUFFLENBQUMwQixFQUFILENBQU11RCxRQUFOLENBQWU2RSxHQUFmLEdBQXFCLENBQXpCLEVBQTRCO0FBQ3hCO0FBQ0E7QUFDQXhDLFFBQUFBLE1BQU0sQ0FBQ1Esb0JBQVAsR0FBOEIsSUFBOUI7QUFDQVIsUUFBQUEsTUFBTSxDQUFDUyxZQUFQLEdBQXNCLEtBQXRCO0FBQ0EsUUFBQSxNQUFJLENBQUNsRSxhQUFMLEdBQXFCMEMsSUFBSSxDQUFDd0QsR0FBTCxDQUFTL0osRUFBRSxDQUFDMEIsRUFBSCxDQUFNdUQsUUFBTixDQUFlNkUsR0FBeEIsQ0FBckI7O0FBQ0EsUUFBQSxNQUFJLENBQUMvRCxRQUFMLENBQWMsTUFBSSxDQUFDaUUsa0JBQW5CLEVBQXVDLENBQXZDO0FBQ0gsT0FQRCxNQU9PO0FBQ0gxQyxRQUFBQSxNQUFNLENBQUNTLFlBQVAsR0FBc0IsSUFBdEI7QUFDSDtBQUNKLEtBMUJEO0FBMkJILEdBdFVJO0FBdVVMO0FBQ0FpQyxFQUFBQSxrQkF4VUssZ0NBd1VnQjtBQUNqQixRQUFJLEtBQUtuRyxhQUFULEVBQXdCO0FBQ3BCLFVBQUksS0FBS0EsYUFBTCxHQUFxQixDQUF6QixFQUE0QjtBQUN4QixhQUFLcUMsVUFBTCxDQUFnQixLQUFLOEQsa0JBQXJCO0FBQ0gsT0FGRCxNQUVPO0FBQ0g7QUFDQSxZQUFJckUsSUFBSSxHQUFHLEtBQUt2QyxjQUFMLENBQW9CaUIsY0FBcEIsQ0FBbUMsVUFBbkMsRUFBK0N1QixZQUEvQyxDQUE0RDVGLEVBQUUsQ0FBQzZGLEtBQS9ELENBQVg7QUFDQSxhQUFLaEMsYUFBTDtBQUNBOEIsUUFBQUEsSUFBSSxDQUFDTSxNQUFMLEdBQWMsS0FBS0csWUFBTCxDQUFrQixLQUFLdkMsYUFBdkIsQ0FBZDtBQUNIO0FBQ0o7QUFDSixHQW5WSTtBQW9WTDtBQUNBb0csRUFBQUEsZ0JBclZLLDhCQXFWYztBQUFBOztBQUNmO0FBQ0EsUUFBSXBGLFFBQVEsR0FBRyxFQUFmO0FBQ0E3RSxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNnRCxXQUFULENBQXFCLHVCQUFyQixFQUE4QyxLQUE5QyxFQUFxREQsUUFBckQsRUFBK0RFLElBQS9ELENBQW9FLFVBQUNDLEdBQUQsRUFBUztBQUN6RWhGLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU1ksVUFBVDtBQUNBLE1BQUEsTUFBSSxDQUFDaUMsWUFBTDtBQUNBLFVBQUlrQyxPQUFPLEdBQUc7QUFDVnRDLFFBQUFBLFlBQVksRUFBRSxNQUFJLENBQUNBLFlBRFQ7QUFFVkMsUUFBQUEsY0FBYyxFQUFFLE1BQUksQ0FBQ0EsY0FGWDtBQUdWQyxRQUFBQSxhQUFhLEVBQUUsTUFBSSxDQUFDQSxhQUhWO0FBSVZDLFFBQUFBLFNBQVMsRUFBRSxNQUFJLENBQUNBLFNBSk47QUFLVkMsUUFBQUEsWUFBWSxFQUFFLE1BQUksQ0FBQ0EsWUFMVDtBQU1WQyxRQUFBQSxXQUFXLEVBQUUsTUFBSSxDQUFDQTtBQU5SLE9BQWQ7QUFRQTVFLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU0UsR0FBVCxDQUFhLE9BQWIsRUFBc0I2RSxPQUF0QjtBQUVBLE1BQUEsTUFBSSxDQUFDdEQsWUFBTCxDQUFrQnBCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0EsVUFBSStILFFBQVEsR0FBR2xGLEdBQUcsQ0FBQ0UsSUFBbkI7QUFDQSxVQUFJaUYsR0FBRyxHQUFHLENBQUMsS0FBRCxFQUFRLEtBQVIsRUFBZSxPQUFmLEVBQXdCLE1BQXhCLENBQVY7O0FBQ0EsV0FBSyxJQUFJekMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixZQUFJMEMsS0FBSyxHQUFHRixRQUFRLENBQUNDLEdBQUcsQ0FBQ3pDLENBQUQsQ0FBSixDQUFwQjs7QUFDQSxZQUFJMkMsR0FBRyxHQUFHLE1BQUksQ0FBQzlHLFlBQUwsQ0FBa0JjLGNBQWxCLENBQWlDOEYsR0FBRyxDQUFDekMsQ0FBRCxDQUFwQyxFQUF5QzlCLFlBQXpDLENBQXNENUYsRUFBRSxDQUFDNkYsS0FBekQsQ0FBVjs7QUFDQXdFLFFBQUFBLEdBQUcsQ0FBQ3BFLE1BQUosR0FBYSxNQUFNbUUsS0FBbkI7QUFDSCxPQXBCd0UsQ0FxQnpFO0FBQ0E7QUFDQTtBQUNBOzs7QUFDQSxVQUFJRSxJQUFJLEdBQUcsTUFBSSxDQUFDL0csWUFBTCxDQUFrQmMsY0FBbEIsQ0FBaUMsU0FBakMsRUFBNEN1QixZQUE1QyxDQUF5RDVGLEVBQUUsQ0FBQzZGLEtBQTVELENBQVg7O0FBQ0F5RSxNQUFBQSxJQUFJLENBQUNyRSxNQUFMLEdBQWNpRSxRQUFRLENBQUNJLElBQXZCOztBQUNBLFVBQUloRSxNQUFNLEdBQUcsTUFBSSxDQUFDL0MsWUFBTCxDQUFrQmMsY0FBbEIsQ0FBaUMsU0FBakMsRUFBNEN1QixZQUE1QyxDQUF5RDVGLEVBQUUsQ0FBQzZGLEtBQTVELENBQWI7O0FBQ0FTLE1BQUFBLE1BQU0sQ0FBQ0wsTUFBUCxHQUFnQmlFLFFBQVEsQ0FBQzVELE1BQVQsR0FBa0IsRUFBbEIsR0FBdUIsTUFBTTRELFFBQVEsQ0FBQzVELE1BQXRDLEdBQStDNEQsUUFBUSxDQUFDNUQsTUFBeEU7QUFDSCxLQTdCRDtBQThCSCxHQXRYSTtBQXVYTDtBQUNBaUUsRUFBQUEsa0JBeFhLLGdDQXdYZ0I7QUFBQTs7QUFDakI7QUFDQSxRQUFJMUYsUUFBUSxHQUFHLEVBQWY7QUFDQTdFLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIsd0JBQXJCLEVBQStDLEtBQS9DLEVBQXNERCxRQUF0RCxFQUFnRUUsSUFBaEUsQ0FBcUUsVUFBQ0MsR0FBRCxFQUFTO0FBQzFFaEYsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTWSxVQUFULEdBRDBFLENBRTFFOztBQUNBLFVBQUkyRSxLQUFLLEdBQUdyQyxHQUFHLENBQUNFLElBQUosQ0FBU21DLEtBQXJCO0FBQ0EsVUFBSW1ELFNBQVMsR0FBR3hGLEdBQUcsQ0FBQ0UsSUFBSixDQUFTdUMsR0FBekI7O0FBQ0EsVUFBSSxNQUFJLENBQUMzRCxVQUFMLEtBQW9CMEcsU0FBeEIsRUFBbUM7QUFDL0I7QUFDSDs7QUFDRCxVQUFJTCxHQUFHLEdBQUcsRUFBVjs7QUFDQSxXQUFLLElBQUl6QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHTCxLQUFLLENBQUNvRCxNQUExQixFQUFrQy9DLENBQUMsRUFBbkMsRUFBdUM7QUFDbkM7QUFDQSxZQUFJZ0QsT0FBTyxHQUFHckQsS0FBSyxDQUFDSyxDQUFELENBQUwsQ0FBU0csTUFBdkI7O0FBQ0EsWUFBSSxDQUFDNkMsT0FBTCxFQUFjO0FBQ1YsVUFBQSxNQUFJLENBQUM1RyxVQUFMLEdBQWtCdUQsS0FBSyxDQUFDSyxDQUFELENBQUwsQ0FBU2lELEdBQTNCO0FBQ0E7QUFDSDtBQUNKOztBQUNELFVBQUksTUFBSSxDQUFDN0csVUFBTCxHQUFrQjBHLFNBQXRCLEVBQWlDO0FBQzdCLFFBQUEsTUFBSSxDQUFDMUcsVUFBTCxHQUFrQjBHLFNBQWxCO0FBQ0gsT0FuQnlFLENBb0IxRTtBQUNBOzs7QUFDQSxXQUFLLElBQUk5QyxFQUFDLEdBQUcsQ0FBYixFQUFnQkEsRUFBQyxHQUFHTCxLQUFLLENBQUNvRCxNQUExQixFQUFrQy9DLEVBQUMsRUFBbkMsRUFBdUM7QUFDbkMsWUFBSSxNQUFJLENBQUM1RCxVQUFMLEtBQW9CdUQsS0FBSyxDQUFDSyxFQUFELENBQUwsQ0FBU2lELEdBQWpDLEVBQXNDO0FBQ2xDUixVQUFBQSxHQUFHLENBQUNTLElBQUosQ0FBU3ZELEtBQUssQ0FBQ0ssRUFBRCxDQUFkO0FBQ0g7QUFDSixPQTFCeUUsQ0EyQjFFOzs7QUFDQSxVQUFJbUQsS0FBSyxHQUFHLE1BQUksQ0FBQ3ZILGNBQUwsQ0FBb0JlLGNBQXBCLENBQW1DLE9BQW5DLEVBQTRDdUIsWUFBNUMsQ0FBeUQ1RixFQUFFLENBQUN5SSxNQUE1RCxDQUFaOztBQUNBb0MsTUFBQUEsS0FBSyxDQUFDNUIsV0FBTixHQUFvQixNQUFJLENBQUM1SCxXQUFMLENBQWlCOEksR0FBRyxDQUFDLENBQUQsQ0FBSCxDQUFPUSxHQUFQLEdBQWEsQ0FBOUIsQ0FBcEIsQ0E3QjBFLENBOEIxRTs7QUFDQSxVQUFJRyxNQUFNLEdBQUcsTUFBSSxDQUFDeEgsY0FBTCxDQUFvQmUsY0FBcEIsQ0FBbUMsUUFBbkMsQ0FBYjs7QUFDQSxVQUFJOEYsR0FBRyxDQUFDTSxNQUFKLEtBQWUsQ0FBbkIsRUFBc0I7QUFDbEIsWUFBSU0sT0FBTyxHQUFHRCxNQUFNLENBQUN6RyxjQUFQLENBQXNCLFVBQXRCLENBQWQ7O0FBQ0EwRyxRQUFBQSxPQUFPLENBQUM1SSxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7O0FBQ0QsV0FBSyxJQUFJNkksQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR2IsR0FBRyxDQUFDTSxNQUF4QixFQUFnQ08sQ0FBQyxFQUFqQyxFQUFxQztBQUNqQyxZQUFJcEQsS0FBSyxHQUFHdUMsR0FBRyxDQUFDYSxDQUFELENBQWY7O0FBQ0EsWUFBSUMsUUFBUSxHQUFHSCxNQUFNLENBQUN6RyxjQUFQLENBQXNCLGFBQWEyRyxDQUFDLEdBQUcsQ0FBakIsQ0FBdEIsQ0FBZjs7QUFDQUMsUUFBQUEsUUFBUSxDQUFDOUksTUFBVCxHQUFrQixJQUFsQjs7QUFDQSxZQUFJK0ksR0FBRyxHQUFHRCxRQUFRLENBQUM1RyxjQUFULENBQXdCLGFBQXhCLENBQVY7O0FBQ0E2RyxRQUFBQSxHQUFHLENBQUNDLEdBQUosR0FBVXZELEtBQUssQ0FBQ3dELEVBQWhCO0FBQ0FGLFFBQUFBLEdBQUcsQ0FBQ2QsS0FBSixHQUFZeEMsS0FBSyxDQUFDd0MsS0FBbEI7QUFDQSxZQUFJOUMsTUFBTSxHQUFHNEQsR0FBRyxDQUFDdEYsWUFBSixDQUFpQjVGLEVBQUUsQ0FBQ3VILE1BQXBCLENBQWI7O0FBQ0EsWUFBSUssS0FBSyxDQUFDQyxNQUFOLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCUCxVQUFBQSxNQUFNLENBQUNRLG9CQUFQLEdBQThCLElBQTlCO0FBQ0FSLFVBQUFBLE1BQU0sQ0FBQ1MsWUFBUCxHQUFzQixLQUF0QjtBQUNILFNBSEQsTUFHTztBQUNIVCxVQUFBQSxNQUFNLENBQUNTLFlBQVAsR0FBc0IsSUFBdEIsQ0FERyxDQUVIOztBQUNBLGNBQUlzRCxVQUFVLEdBQUcsS0FBakI7O0FBQ0EsY0FBSXpELEtBQUssQ0FBQzBELGVBQU4sSUFBeUIxRCxLQUFLLENBQUMyRCxlQUEvQixJQUFrRDNELEtBQUssQ0FBQzRELFlBQU4sSUFBc0I1RCxLQUFLLENBQUM2RCxZQUE5RSxJQUE4RjdELEtBQUssQ0FBQzhELFdBQU4sSUFBcUI5RCxLQUFLLENBQUMrRCxXQUE3SCxFQUEwSTtBQUN0SU4sWUFBQUEsVUFBVSxHQUFHLElBQWI7QUFDSDs7QUFDRCxjQUFJQSxVQUFKLEVBQWdCO0FBQ1o7QUFDQUgsWUFBQUEsR0FBRyxDQUFDVSxRQUFKLEdBQWUsSUFBZjtBQUNILFdBSEQsTUFHTztBQUNIO0FBQ0FWLFlBQUFBLEdBQUcsQ0FBQ1UsUUFBSixHQUFlLEtBQWY7QUFDSDtBQUNKLFNBekJnQyxDQTBCakM7QUFDQTs7O0FBQ0EsWUFBSUMsR0FBRyxHQUFHWixRQUFRLENBQUM1RyxjQUFULENBQXdCLE1BQXhCLEVBQWdDdUIsWUFBaEMsQ0FBNkM1RixFQUFFLENBQUM2RixLQUFoRCxDQUFWOztBQUNBZ0csUUFBQUEsR0FBRyxDQUFDNUYsTUFBSixHQUFhMkIsS0FBSyxDQUFDd0MsS0FBbkIsQ0E3QmlDLENBOEJqQzs7QUFDQSxZQUFJMEIsU0FBUyxHQUFHYixRQUFRLENBQUM1RyxjQUFULENBQXdCLE1BQXhCLEVBQWdDdUIsWUFBaEMsQ0FBNkM1RixFQUFFLENBQUM2RixLQUFoRCxDQUFoQjs7QUFDQWlHLFFBQUFBLFNBQVMsQ0FBQzdGLE1BQVYsb0JBQXdCMkIsS0FBSyxDQUFDbUUsT0FBOUIsd0JBaENpQyxDQWlDakM7O0FBQ0EsWUFBSUMsR0FBRyxHQUFHZixRQUFRLENBQUM1RyxjQUFULENBQXdCLGFBQXhCLEVBQXVDdUIsWUFBdkMsQ0FBb0Q1RixFQUFFLENBQUNpTSxXQUF2RCxDQUFWOztBQUNBRCxRQUFBQSxHQUFHLENBQUNFLFFBQUosR0FBZXRFLEtBQUssQ0FBQ3VFLE9BQU4sR0FBZ0J2RSxLQUFLLENBQUNtRSxPQUFyQzs7QUFDQSxZQUFJSyxNQUFNLEdBQUduQixRQUFRLENBQUM1RyxjQUFULENBQXdCLFFBQXhCLEVBQWtDdUIsWUFBbEMsQ0FBK0M1RixFQUFFLENBQUM2RixLQUFsRCxDQUFiOztBQUNBdUcsUUFBQUEsTUFBTSxDQUFDbkcsTUFBUCxHQUFtQjJCLEtBQUssQ0FBQ3VFLE9BQXpCLFNBQW9DdkUsS0FBSyxDQUFDbUUsT0FBMUMsQ0FyQ2lDLENBc0NqQztBQUNBOztBQUNBLFlBQUlNLFVBQVUsR0FBR3BCLFFBQVEsQ0FBQzVHLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBakI7O0FBQ0EsWUFBSWlJLEtBQUssR0FBR0QsVUFBVSxDQUFDaEksY0FBWCxDQUEwQixRQUExQixDQUFaO0FBQ0EsWUFBSWtJLEtBQUssR0FBR0YsVUFBVSxDQUFDaEksY0FBWCxDQUEwQixRQUExQixDQUFaO0FBQ0EsWUFBSW1JLEtBQUssR0FBR0gsVUFBVSxDQUFDaEksY0FBWCxDQUEwQixRQUExQixDQUFaOztBQUNBLFlBQUl1RCxLQUFLLENBQUMyRCxlQUFWLEVBQTJCO0FBQ3ZCZSxVQUFBQSxLQUFLLENBQUNuSyxNQUFOLEdBQWUsSUFBZjtBQUNBbUssVUFBQUEsS0FBSyxDQUFDakksY0FBTixDQUFxQixLQUFyQixFQUE0QnVCLFlBQTVCLENBQXlDNUYsRUFBRSxDQUFDNkYsS0FBNUMsRUFBbURJLE1BQW5ELDBCQUFrRTJCLEtBQUssQ0FBQzJELGVBQXhFO0FBQ0EsY0FBSWtCLEtBQUssR0FBR0gsS0FBSyxDQUFDakksY0FBTixDQUFxQixNQUFyQixFQUE2QkEsY0FBN0IsQ0FBNEMsT0FBNUMsQ0FBWjtBQUNBb0ksVUFBQUEsS0FBSyxDQUFDdEssTUFBTixHQUFleUYsS0FBSyxDQUFDMEQsZUFBTixJQUF5QjFELEtBQUssQ0FBQzJELGVBQTlDO0FBQ0gsU0FMRCxNQUtPO0FBQ0hlLFVBQUFBLEtBQUssQ0FBQ25LLE1BQU4sR0FBZSxLQUFmO0FBQ0g7O0FBQ0QsWUFBSXlGLEtBQUssQ0FBQzZELFlBQVYsRUFBd0I7QUFDcEJjLFVBQUFBLEtBQUssQ0FBQ3BLLE1BQU4sR0FBZSxJQUFmO0FBQ0FvSyxVQUFBQSxLQUFLLENBQUNsSSxjQUFOLENBQXFCLEtBQXJCLEVBQTRCdUIsWUFBNUIsQ0FBeUM1RixFQUFFLENBQUM2RixLQUE1QyxFQUFtREksTUFBbkQ7O0FBQ0EsY0FBSXdHLE1BQUssR0FBR0YsS0FBSyxDQUFDbEksY0FBTixDQUFxQixNQUFyQixFQUE2QkEsY0FBN0IsQ0FBNEMsT0FBNUMsQ0FBWjs7QUFDQW9JLFVBQUFBLE1BQUssQ0FBQ3RLLE1BQU4sR0FBZXlGLEtBQUssQ0FBQzRELFlBQU4sSUFBc0I1RCxLQUFLLENBQUM2RCxZQUEzQztBQUNILFNBTEQsTUFLTztBQUNIYyxVQUFBQSxLQUFLLENBQUNwSyxNQUFOLEdBQWUsS0FBZjtBQUNIOztBQUNELFlBQUl5RixLQUFLLENBQUMrRCxXQUFWLEVBQXVCO0FBQ25CYSxVQUFBQSxLQUFLLENBQUNySyxNQUFOLEdBQWUsSUFBZjtBQUNBcUssVUFBQUEsS0FBSyxDQUFDbkksY0FBTixDQUFxQixLQUFyQixFQUE0QnVCLFlBQTVCLENBQXlDNUYsRUFBRSxDQUFDNkYsS0FBNUMsRUFBbURJLE1BQW5ELG9CQUFpRTJCLEtBQUssQ0FBQytELFdBQXZFOztBQUNBLGNBQUljLE9BQUssR0FBR0QsS0FBSyxDQUFDbkksY0FBTixDQUFxQixNQUFyQixFQUE2QkEsY0FBN0IsQ0FBNEMsT0FBNUMsQ0FBWjs7QUFDQW9JLFVBQUFBLE9BQUssQ0FBQ3RLLE1BQU4sR0FBZXlGLEtBQUssQ0FBQzhELFdBQU4sSUFBcUI5RCxLQUFLLENBQUMrRCxXQUExQztBQUNILFNBTEQsTUFLTztBQUNIYSxVQUFBQSxLQUFLLENBQUNySyxNQUFOLEdBQWUsS0FBZjtBQUNIO0FBQ0o7O0FBQ0QsTUFBQSxNQUFJLENBQUNtQixjQUFMLENBQW9CbkIsTUFBcEIsR0FBNkIsSUFBN0I7QUFDSCxLQTFHRDtBQTJHSCxHQXRlSTtBQXVlTDtBQUNBdUssRUFBQUEsZUF4ZUssNkJBd2VhO0FBQ2QsU0FBS2hKLFdBQUwsQ0FBaUJ2QixNQUFqQixHQUEwQixJQUExQjtBQUNILEdBMWVJO0FBMmVMd0ssRUFBQUEsV0EzZUsseUJBMmVTO0FBQUE7O0FBQ1YzTSxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNnRCxXQUFULENBQXFCLHFCQUFyQixFQUE0QyxLQUE1QyxFQUFtRCxFQUFuRCxFQUF1REMsSUFBdkQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pFLE1BQUEsTUFBSSxDQUFDdEIsV0FBTCxDQUFpQnZCLE1BQWpCLEdBQTBCLEtBQTFCOztBQUNBLE1BQUEsTUFBSSxDQUFDbUMsV0FBTDtBQUNILEtBSEQ7QUFJSCxHQWhmSTtBQWlmTHNJLEVBQUFBLGlCQWpmSyw2QkFpZmFDLENBamZiLEVBaWZnQjtBQUFBOztBQUNqQixTQUFLcEksYUFBTDtBQUNBLFFBQUlvQyxPQUFPLEdBQUc7QUFDVnRDLE1BQUFBLFlBQVksRUFBRSxLQUFLQSxZQURUO0FBRVZDLE1BQUFBLGNBQWMsRUFBRSxLQUFLQSxjQUZYO0FBR1ZDLE1BQUFBLGFBQWEsRUFBRSxLQUFLQSxhQUhWO0FBSVZDLE1BQUFBLFNBQVMsRUFBRSxLQUFLQSxTQUpOO0FBS1ZDLE1BQUFBLFlBQVksRUFBRSxLQUFLQSxZQUxUO0FBTVZDLE1BQUFBLFdBQVcsRUFBRSxLQUFLQTtBQU5SLEtBQWQ7QUFRQTVFLElBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU0UsR0FBVCxDQUFhLE9BQWIsRUFBc0I2RSxPQUF0QjtBQUVBLFFBQUlpRyxNQUFNLEdBQUdELENBQUMsQ0FBQ0MsTUFBZjs7QUFDQSxRQUFJLENBQUNBLE1BQU0sQ0FBQ2xCLFFBQVosRUFBc0I7QUFDbEI1TCxNQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNpTCxRQUFULENBQWtCLEtBQUtDLElBQXZCLEVBQTZCLE9BQTdCO0FBQ0gsS0FGRCxNQUVPO0FBQ0g7QUFDQWhOLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIsMkJBQXJCLEVBQWtELE1BQWxELEVBQTBEO0FBQUVzRyxRQUFBQSxFQUFFLEVBQUUwQixNQUFNLENBQUMzQjtBQUFiLE9BQTFELEVBQThFcEcsSUFBOUUsQ0FBbUYsVUFBQ0MsR0FBRCxFQUFTO0FBQ3hGO0FBQ0EsWUFBSXNDLE1BQU0sR0FBR3dGLE1BQU0sQ0FBQ2xILFlBQVAsQ0FBb0I1RixFQUFFLENBQUN1SCxNQUF2QixDQUFiO0FBQ0FELFFBQUFBLE1BQU0sQ0FBQ1Esb0JBQVAsR0FBOEIsSUFBOUI7QUFDQVIsUUFBQUEsTUFBTSxDQUFDUyxZQUFQLEdBQXNCLEtBQXRCO0FBQ0EsUUFBQSxNQUFJLENBQUN6RSxjQUFMLENBQW9CZSxjQUFwQixDQUFtQyxVQUFuQyxFQUErQ2xDLE1BQS9DLEdBQXdELElBQXhELENBTHdGLENBTXhGOztBQUNBLFFBQUEsTUFBSSxDQUFDb0ksa0JBQUw7O0FBQ0EsWUFBSTFELE9BQU8sR0FBRztBQUNWb0csVUFBQUEsU0FBUyxFQUFFLE1BREQ7QUFFVkMsVUFBQUEsUUFBUSxFQUFFSixNQUFNLENBQUMxQyxLQUZQO0FBR1YrQyxVQUFBQSxVQUFVLEVBQUUsRUFIRjtBQUlWQyxVQUFBQSxXQUFXLEVBQUU7QUFKSCxTQUFkO0FBTUFqSSxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCQyxJQUFJLENBQUNDLFNBQUwsQ0FBZXVCLE9BQWYsQ0FBN0I7QUFDQTdHLFFBQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU0UsR0FBVCxDQUFhLFVBQWIsRUFBeUI2RSxPQUF6QjtBQUNILE9BaEJEO0FBaUJIO0FBQ0osR0FwaEJJO0FBcWhCTDtBQUNBd0csRUFBQUEsaUJBdGhCSywrQkFzaEJlO0FBQUE7O0FBQ2hCO0FBQ0FyTixJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNnRCxXQUFULENBQXFCLHlCQUFyQixFQUFnRCxLQUFoRCxFQUF1RCxFQUF2RCxFQUEyREMsSUFBM0QsQ0FBZ0UsVUFBQ0MsR0FBRCxFQUFTO0FBQ3JFaEYsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTWSxVQUFUO0FBQ0EsTUFBQSxPQUFJLENBQUNnQyxTQUFMO0FBQ0EsVUFBSW1DLE9BQU8sR0FBRztBQUNWdEMsUUFBQUEsWUFBWSxFQUFFLE9BQUksQ0FBQ0EsWUFEVDtBQUVWQyxRQUFBQSxjQUFjLEVBQUUsT0FBSSxDQUFDQSxjQUZYO0FBR1ZDLFFBQUFBLGFBQWEsRUFBRSxPQUFJLENBQUNBLGFBSFY7QUFJVkMsUUFBQUEsU0FBUyxFQUFFLE9BQUksQ0FBQ0EsU0FKTjtBQUtWQyxRQUFBQSxZQUFZLEVBQUUsT0FBSSxDQUFDQSxZQUxUO0FBTVZDLFFBQUFBLFdBQVcsRUFBRSxPQUFJLENBQUNBO0FBTlIsT0FBZDtBQVFBNUUsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTRSxHQUFULENBQWEsT0FBYixFQUFzQjZFLE9BQXRCO0FBRUEsVUFBSTNCLElBQUksR0FBR0YsR0FBRyxDQUFDRSxJQUFmO0FBQ0EsVUFBSXNFLEVBQUUsR0FBR3RFLElBQUksQ0FBQ3NFLEVBQUwsSUFBVyxDQUFwQixDQWRxRSxDQWVyRTs7QUFDQSxNQUFBLE9BQUksQ0FBQzhELGFBQUwsR0FBcUIsQ0FBckI7QUFDQSxVQUFJbkQsR0FBRyxHQUFHLENBQUMsR0FBRCxFQUFNLEdBQU4sRUFBVyxDQUFYLEVBQWMsQ0FBZCxFQUFpQixDQUFqQixFQUFvQixFQUFwQixFQUF3QixFQUF4QixDQUFWOztBQUNBLFdBQUssSUFBSXpDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUd4QyxJQUFJLENBQUNtQyxLQUFMLENBQVdrRyxNQUEvQixFQUF1QzdGLENBQUMsRUFBeEMsRUFBNEM7QUFDeEMsWUFBSXhDLElBQUksQ0FBQ21DLEtBQUwsQ0FBV0ssQ0FBWCxFQUFjOEYsS0FBbEIsRUFBeUI7QUFDckIsVUFBQSxPQUFJLENBQUNGLGFBQUwsR0FBcUJuRCxHQUFHLENBQUN6QyxDQUFELENBQXhCO0FBQ0E7QUFDSDtBQUNKLE9BdkJvRSxDQXdCckU7OztBQUNBLE1BQUEsT0FBSSxDQUFDckUsY0FBTCxDQUFvQmxCLE1BQXBCLEdBQTZCLElBQTdCLENBekJxRSxDQTBCckU7O0FBQ0EsTUFBQSxPQUFJLENBQUNrQixjQUFMLENBQW9CZ0IsY0FBcEIsQ0FBbUMsZ0JBQW5DLEVBQXFEdUIsWUFBckQsQ0FBa0U1RixFQUFFLENBQUM2RixLQUFyRSxFQUE0RUksTUFBNUUsR0FBcUZ1RCxFQUFyRixDQTNCcUUsQ0E0QnJFOztBQUNBLE1BQUEsT0FBSSxDQUFDaUUsWUFBTCxHQUFvQmpFLEVBQUUsR0FBRyxLQUF6QjtBQUNBLE1BQUEsT0FBSSxDQUFDbkcsY0FBTCxDQUFvQmdCLGNBQXBCLENBQW1DLGVBQW5DLEVBQW9EdUIsWUFBcEQsQ0FBaUU1RixFQUFFLENBQUM2RixLQUFwRSxFQUEyRUksTUFBM0UsR0FBb0YsT0FBSSxDQUFDd0gsWUFBTCxHQUFvQixHQUF4RztBQUNBLE1BQUEsT0FBSSxDQUFDQyxTQUFMLEdBQWlCLElBQWpCLENBL0JxRSxDQWdDckU7O0FBQ0EsVUFBSXhDLEdBQUcsR0FBRyxPQUFJLENBQUM3SCxjQUFMLENBQW9CZ0IsY0FBcEIsQ0FBbUMsYUFBbkMsQ0FBVjs7QUFDQSxVQUFJaUQsTUFBTSxHQUFHNEQsR0FBRyxDQUFDdEYsWUFBSixDQUFpQjVGLEVBQUUsQ0FBQ3VILE1BQXBCLENBQWI7QUFDQUQsTUFBQUEsTUFBTSxDQUFDUSxvQkFBUCxHQUE4QixJQUE5QjtBQUNBUixNQUFBQSxNQUFNLENBQUNTLFlBQVAsR0FBc0IsS0FBdEI7QUFDSCxLQXJDRDtBQXNDSCxHQTlqQkk7QUErakJMO0FBQ0E0RixFQUFBQSxpQkFoa0JLLDZCQWdrQmFkLENBaGtCYixFQWdrQmdCZSxHQWhrQmhCLEVBZ2tCcUI7QUFDdEIsUUFBSWQsTUFBTSxHQUFHRCxDQUFDLENBQUNDLE1BQWY7O0FBQ0EsUUFBSSxLQUFLWSxTQUFMLEtBQW1CLElBQXZCLEVBQTZCO0FBQ3pCLFdBQUtBLFNBQUwsR0FBaUJaLE1BQWpCO0FBQ0EsV0FBS1ksU0FBTCxDQUFlRyxLQUFmLEdBQXVCQyxNQUFNLENBQUNGLEdBQUQsQ0FBN0I7QUFDQSxXQUFLM0YsU0FBTCxDQUFlNkUsTUFBZjtBQUNILEtBSkQsTUFJTztBQUNILFdBQUs1RSxXQUFMLENBQWlCLEtBQUt3RixTQUF0QjtBQUNBLFdBQUtBLFNBQUwsR0FBaUJaLE1BQWpCO0FBQ0EsV0FBS1ksU0FBTCxDQUFlRyxLQUFmLEdBQXVCQyxNQUFNLENBQUNGLEdBQUQsQ0FBN0I7QUFDQSxXQUFLM0YsU0FBTCxDQUFlNkUsTUFBZjtBQUNIOztBQUNELFFBQUk1QixHQUFHLEdBQUcsS0FBSzdILGNBQUwsQ0FBb0JnQixjQUFwQixDQUFtQyxhQUFuQyxDQUFWO0FBQ0EsUUFBSWlELE1BQU0sR0FBRzRELEdBQUcsQ0FBQ3RGLFlBQUosQ0FBaUI1RixFQUFFLENBQUN1SCxNQUFwQixDQUFiO0FBQ0FELElBQUFBLE1BQU0sQ0FBQ1MsWUFBUCxHQUFzQixJQUF0QjtBQUNILEdBL2tCSTtBQWdsQkw7QUFDQWdHLEVBQUFBLGlCQWpsQkssNkJBaWxCYWxCLENBamxCYixFQWlsQmdCO0FBQUE7O0FBQ2pCLFNBQUtwSSxhQUFMO0FBQ0EsUUFBSW9DLE9BQU8sR0FBRztBQUNWdEMsTUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBRFQ7QUFFVkMsTUFBQUEsY0FBYyxFQUFFLEtBQUtBLGNBRlg7QUFHVkMsTUFBQUEsYUFBYSxFQUFFLEtBQUtBLGFBSFY7QUFJVkMsTUFBQUEsU0FBUyxFQUFFLEtBQUtBLFNBSk47QUFLVkMsTUFBQUEsWUFBWSxFQUFFLEtBQUtBLFlBTFQ7QUFNVkMsTUFBQUEsV0FBVyxFQUFFLEtBQUtBO0FBTlIsS0FBZDtBQVFBNUUsSUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTRSxHQUFULENBQWEsT0FBYixFQUFzQjZFLE9BQXRCO0FBQ0EsUUFBSWlHLE1BQU0sR0FBR0QsQ0FBQyxDQUFDQyxNQUFmOztBQUNBLFFBQUksS0FBS1ksU0FBTCxLQUFtQixJQUF2QixFQUE2QjtBQUN6QjtBQUNILEtBRkQsTUFFTztBQUNIO0FBQ0E7QUFDQTtBQUNBLFVBQUksS0FBS0QsWUFBTCxHQUFvQixLQUFLQyxTQUFMLENBQWVHLEtBQXZDLEVBQThDO0FBQzFDO0FBQ0E3TixRQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNpTCxRQUFULENBQWtCLEtBQUtDLElBQXZCLEVBQTZCLFFBQTdCO0FBQ0E7QUFDSDs7QUFDRCxVQUFJLEtBQUtVLFNBQUwsQ0FBZUcsS0FBZixHQUF1QixLQUFLUCxhQUFoQyxFQUErQztBQUMzQztBQUNBdE4sUUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTaUwsUUFBVCxDQUFrQixLQUFLQyxJQUF2QixFQUE2QixhQUE3QjtBQUNBO0FBQ0gsT0FiRSxDQWNIOzs7QUFDQWhOLE1BQUFBLEVBQUUsQ0FBQzhCLEtBQUgsQ0FBU2dELFdBQVQsQ0FBcUIsd0JBQXJCLEVBQStDLE1BQS9DLEVBQXVELEVBQXZELEVBQTJEQyxJQUEzRCxDQUFnRSxVQUFDQyxHQUFELEVBQVM7QUFDckU7QUFDQSxZQUFJNkIsT0FBTyxHQUFHO0FBQ1ZvRyxVQUFBQSxTQUFTLEVBQUUsTUFERDtBQUVWQyxVQUFBQSxRQUFRLEVBQUUsT0FBSSxDQUFDUSxTQUFMLENBQWVHLEtBRmY7QUFHVlYsVUFBQUEsVUFBVSxFQUFFLEVBSEY7QUFJVkMsVUFBQUEsV0FBVyxFQUFFO0FBSkgsU0FBZDtBQU1BakksUUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksZUFBWixFQUE2QkMsSUFBSSxDQUFDQyxTQUFMLENBQWV1QixPQUFmLENBQTdCO0FBQ0E3RyxRQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNFLEdBQVQsQ0FBYSxVQUFiLEVBQXlCNkUsT0FBekI7QUFDQSxZQUFJbUgsS0FBSyxHQUFHbEIsTUFBTSxDQUFDbUIsTUFBUCxDQUFjNUosY0FBZCxDQUE2QixVQUE3QixDQUFaO0FBQ0EySixRQUFBQSxLQUFLLENBQUM3TCxNQUFOLEdBQWUsSUFBZjtBQUVILE9BYkQ7QUFjSDtBQUNKLEdBN25CSTtBQThuQkw7QUFDQStMLEVBQUFBLE9BL25CSyxtQkErbkJHQyxLQS9uQkgsRUErbkJVO0FBQ1gsUUFBSW5PLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTWlDLFNBQVYsRUFBcUI7QUFDakIzRCxNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1pQyxTQUFOLEdBQWtCLEtBQWxCO0FBQ0EsV0FBS3VFLFdBQUwsQ0FBaUJpRyxLQUFLLENBQUNyQixNQUF2QjtBQUNBOU0sTUFBQUEsRUFBRSxDQUFDZ0UsV0FBSCxDQUFlb0ssS0FBZixDQUFxQixLQUFLckssTUFBMUI7QUFDSCxLQUpELE1BSU87QUFDSC9ELE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTWlDLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxXQUFLc0UsU0FBTCxDQUFla0csS0FBSyxDQUFDckIsTUFBckI7QUFDQTlNLE1BQUFBLEVBQUUsQ0FBQ2dFLFdBQUgsQ0FBZXFLLE1BQWYsQ0FBc0IsS0FBS3RLLE1BQTNCO0FBQ0g7QUFDSixHQXpvQkk7QUEwb0JMO0FBQ0F1SyxFQUFBQSxVQTNvQkssc0JBMm9CTUgsS0Ezb0JOLEVBMm9CYTtBQUNkLFFBQUluTyxFQUFFLENBQUMwQixFQUFILENBQU1rQyxTQUFWLEVBQXFCO0FBQ2pCNUQsTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNa0MsU0FBTixHQUFrQixLQUFsQjtBQUNBLFdBQUtzRSxXQUFMLENBQWlCaUcsS0FBSyxDQUFDckIsTUFBdkI7QUFDSCxLQUhELE1BR087QUFDSDlNLE1BQUFBLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTWtDLFNBQU4sR0FBa0IsSUFBbEI7QUFDQSxXQUFLcUUsU0FBTCxDQUFla0csS0FBSyxDQUFDckIsTUFBckI7QUFDSDtBQUNKLEdBbnBCSTtBQW9wQkw3RSxFQUFBQSxTQXBwQksscUJBb3BCS2lELEdBcHBCTCxFQW9wQlU7QUFDWEEsSUFBQUEsR0FBRyxDQUFDN0csY0FBSixDQUFtQixRQUFuQixFQUE2QmxDLE1BQTdCLEdBQXNDLElBQXRDO0FBQ0gsR0F0cEJJO0FBdXBCTCtGLEVBQUFBLFdBdnBCSyx1QkF1cEJPZ0QsR0F2cEJQLEVBdXBCWTtBQUNiQSxJQUFBQSxHQUFHLENBQUM3RyxjQUFKLENBQW1CLFFBQW5CLEVBQTZCbEMsTUFBN0IsR0FBc0MsS0FBdEM7QUFDSCxHQXpwQkk7QUEwcEJMNkYsRUFBQUEsV0ExcEJLLHVCQTBwQk9rRCxHQTFwQlAsRUEwcEJZO0FBQ2JBLElBQUFBLEdBQUcsQ0FBQzdHLGNBQUosQ0FBbUIsUUFBbkIsRUFBNkJsQyxNQUE3QixHQUFzQyxLQUF0QztBQUNBK0ksSUFBQUEsR0FBRyxDQUFDN0csY0FBSixDQUFtQixVQUFuQixFQUErQmxDLE1BQS9CLEdBQXdDLElBQXhDO0FBQ0gsR0E3cEJJO0FBOHBCTDtBQUNBb00sRUFBQUEsV0EvcEJLLHVCQStwQk8xQixDQS9wQlAsRUErcEJVO0FBQ1gsUUFBSSxLQUFLYSxTQUFULEVBQW9CO0FBQ2hCLFdBQUt4RixXQUFMLENBQWlCLEtBQUt3RixTQUF0QjtBQUNBLFdBQUtBLFNBQUwsR0FBaUIsSUFBakI7QUFDSDs7QUFDRCxRQUFJLEtBQUt0SyxjQUFMLENBQW9CakIsTUFBcEIsS0FBK0IsSUFBbkMsRUFBeUM7QUFDckMsV0FBS3dILGtCQUFMO0FBQ0g7O0FBQ0QsUUFBRyxLQUFLeEcsU0FBTCxDQUFlaEIsTUFBZixLQUF3QixJQUEzQixFQUFnQztBQUM1QixXQUFLaUYsYUFBTDtBQUNIOztBQUNELFFBQUcsS0FBS25GLFVBQUwsQ0FBZ0JFLE1BQWhCLEtBQXlCLElBQTVCLEVBQWlDO0FBQzdCLFVBQUcsQ0FBQyxLQUFLSyxnQkFBVCxFQUEwQjtBQUN0QjtBQUNIO0FBQ0o7O0FBQ0RxSyxJQUFBQSxDQUFDLENBQUNDLE1BQUYsQ0FBU21CLE1BQVQsQ0FBZ0I5TCxNQUFoQixHQUF5QixLQUF6QixDQWhCVyxDQWlCWDs7QUFDQSxTQUFLMkIsVUFBTCxHQUFrQixDQUFsQjtBQUNBLFNBQUtRLFdBQUw7QUFDQXRFLElBQUFBLEVBQUUsQ0FBQ2tKLFlBQUgsR0FBa0IsSUFBSTFELElBQUosR0FBVzJELE9BQVgsRUFBbEI7QUFDSCxHQXByQkk7QUFxckJMO0FBQ0FxRixFQUFBQSxZQXRyQkssd0JBc3JCUTNCLENBdHJCUixFQXNyQlc7QUFDWjtBQUNBN00sSUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTcUYsVUFBVDs7QUFDQSxRQUFJLENBQUNuSCxFQUFFLENBQUNxQyxHQUFILENBQU9vTSxRQUFaLEVBQXNCO0FBQ2xCek8sTUFBQUEsRUFBRSxDQUFDMEIsRUFBSCxDQUFNQyxPQUFOLENBQWNDLFNBQWQsR0FBMEIsS0FBMUI7QUFDSDtBQUNKLEdBNXJCSTtBQTZyQkw7QUFDQThNLEVBQUFBLGlCQTlyQkssNkJBOHJCYTdCLENBOXJCYixFQThyQmdCO0FBRWpCO0FBQ0EsUUFBSSxLQUFLaEosYUFBTCxHQUFxQixDQUF6QixFQUE0QjtBQUN4QjtBQUNBO0FBQ0g7O0FBQ0Q3RCxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNxRixVQUFUOztBQUNBLFFBQUksQ0FBQ25ILEVBQUUsQ0FBQ3FDLEdBQUgsQ0FBT29NLFFBQVosRUFBc0I7QUFDbEJ6TyxNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0UsVUFBZCxHQUEyQixLQUEzQjtBQUNIO0FBQ0osR0F6c0JJO0FBMHNCTDhNLEVBQUFBLFdBMXNCSyx1QkEwc0JPQyxDQTFzQlAsRUEwc0JVQyxDQTFzQlYsRUEwc0JhO0FBQ2RBLElBQUFBLENBQUMsSUFBSSxDQUFMO0FBQ0EsUUFBSUMsQ0FBQyxHQUFHRCxDQUFDLEdBQUdELENBQVo7QUFDQSxRQUFJakUsR0FBRyxHQUFHcEUsSUFBSSxDQUFDd0ksTUFBTCxLQUFnQkQsQ0FBaEIsR0FBb0JGLENBQTlCO0FBQ0EsV0FBT0ksUUFBUSxDQUFDckUsR0FBRCxDQUFmO0FBQ0gsR0Evc0JJO0FBZ3RCTHNFLEVBQUFBLE1BaHRCSyxrQkFndEJFQyxFQWh0QkYsRUFndEJNO0FBQUE7O0FBQ1A7QUFDQSxRQUFJLEtBQUtDLFNBQVQsRUFBb0I7QUFDaEI7QUFDQSxXQUFLdkYsS0FBTCxDQUFXQyxLQUFYLElBQW9CLEtBQUt1RixLQUF6Qjs7QUFDQSxVQUFJLEtBQUt4RixLQUFMLENBQVdDLEtBQVgsSUFBb0IsQ0FBeEIsRUFBMkI7QUFDdkIsYUFBS0QsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsYUFBS3dGLE1BQUw7O0FBRUEsWUFBSSxLQUFLQSxNQUFMLEdBQWMsQ0FBZCxLQUFvQixDQUF4QixFQUEyQjtBQUN2QjtBQUNBLGVBQUtELEtBQUwsSUFBYyxLQUFLaEYsS0FBbkI7O0FBQ0EsY0FBSSxLQUFLQSxLQUFMLEtBQWUsR0FBbkIsRUFBd0I7QUFDcEIsaUJBQUtBLEtBQUwsR0FBYSxHQUFiO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsaUJBQUtBLEtBQUwsSUFBYyxHQUFkO0FBQ0g7QUFDSjtBQUNKOztBQUNELFVBQUksS0FBS2dGLEtBQUwsSUFBYyxDQUFkLElBQW1CLEtBQUt4RixLQUFMLENBQVdDLEtBQVgsSUFBb0IsS0FBS3lGLFFBQWhELEVBQTBEO0FBQ3RELGFBQUtILFNBQUwsR0FBaUIsS0FBakI7QUFDQSxhQUFLdkYsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEtBQUt5RixRQUF4QjtBQUNIO0FBQ0osS0F2Qk0sQ0F3QlA7OztBQUNBLFFBQUksQ0FBQ3RQLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTUMsT0FBTixDQUFjQyxTQUFuQixFQUE4QjtBQUMxQnVELE1BQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaO0FBQ0FwRixNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0MsU0FBZCxHQUEwQixJQUExQixDQUYwQixDQUcxQjtBQUNFOztBQUNBLFVBQUlpRCxRQUFRLEdBQUc7QUFDYixjQUFNN0UsRUFBRSxDQUFDMEIsRUFBSCxDQUFNNk47QUFEQyxPQUFmO0FBR0Z2UCxNQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNnRCxXQUFULENBQXFCLHNCQUFyQixFQUE2QyxNQUE3QyxFQUFxREQsUUFBckQsRUFBK0RFLElBQS9ELENBQW9FLFVBQUNDLEdBQUQsRUFBUztBQUN6RSxZQUFJd0MsT0FBTyxHQUFHLE9BQUksQ0FBQ3JFLFNBQUwsQ0FBZWtCLGNBQWYsQ0FBOEIsU0FBUyxPQUFJLENBQUNtRCxPQUE1QyxDQUFkOztBQUNBLFFBQUEsT0FBSSxDQUFDUSxXQUFMLENBQWlCUixPQUFqQixFQUZ5RSxDQUd6RTs7O0FBQ0EsWUFBSTJDLEdBQUcsR0FBRyxDQUFDLE1BQUQsRUFBUyxNQUFULEVBQWlCLE1BQWpCLEVBQXlCLE9BQXpCLEVBQWtDLFNBQWxDLEVBQTZDLE1BQTdDLEVBQXFELFVBQXJELENBQVY7QUFDQSxZQUFJakYsSUFBSSxHQUFHRixHQUFHLENBQUNFLElBQWY7O0FBQ0EsUUFBQSxPQUFJLENBQUNzSyxPQUFMLENBQWFyRixHQUFHLENBQUMsT0FBSSxDQUFDM0MsT0FBTCxHQUFlLENBQWhCLENBQWhCLEVBQW9DekgsS0FBSyxDQUFDLFNBQVMsT0FBSSxDQUFDeUgsT0FBZixDQUF6QyxFQUFrRXRDLElBQUksQ0FBQ3NFLEVBQXZFLEVBQTJFdEUsSUFBSSxDQUFDdUssSUFBaEY7QUFDSCxPQVBELFdBT1MsVUFBQ3pLLEdBQUQsRUFBUztBQUNkaEYsUUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTaUwsUUFBVCxDQUFrQixPQUFJLENBQUNDLElBQXZCLEVBQTZCLFNBQTdCO0FBQ0gsT0FURDtBQVVILEtBM0NNLENBNENQOzs7QUFDQSxRQUFJLENBQUNoTixFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0UsVUFBbkIsRUFBK0I7QUFDM0I3QixNQUFBQSxFQUFFLENBQUMwQixFQUFILENBQU1DLE9BQU4sQ0FBY0UsVUFBZCxHQUEyQixJQUEzQixDQUQyQixDQUUzQjs7QUFDQSxVQUFJZ0QsU0FBUSxHQUFHO0FBQ1gsY0FBTTdFLEVBQUUsQ0FBQzBCLEVBQUgsQ0FBTTZOO0FBREQsT0FBZixDQUgyQixDQU0zQjs7QUFDQSxVQUFJRyxHQUFHLEdBQUc7QUFDTixhQUFLLEVBREM7QUFFTixjQUFNLEdBRkE7QUFHTixjQUFNLEdBSEE7QUFJTixjQUFNLEdBSkE7QUFLTixjQUFNLEdBTEE7QUFNTixjQUFNO0FBTkEsT0FBVjtBQVFBMVAsTUFBQUEsRUFBRSxDQUFDOEIsS0FBSCxDQUFTZ0QsV0FBVCxDQUFxQix1QkFBckIsRUFBOEMsTUFBOUMsRUFBc0RELFNBQXRELEVBQWdFRSxJQUFoRSxDQUFxRSxVQUFDQyxHQUFELEVBQVM7QUFDMUUsUUFBQSxPQUFJLENBQUNzSyxRQUFMLEdBQWdCSSxHQUFHLENBQUMsS0FBSzFLLEdBQUcsQ0FBQ0UsSUFBSixDQUFTeUssS0FBZixDQUFuQixDQUQwRSxDQUUxRTs7QUFDQSxRQUFBLE9BQUksQ0FBQy9GLEtBQUwsR0FBYSxPQUFJLENBQUN4RyxjQUFMLENBQW9CaUIsY0FBcEIsQ0FBbUMsU0FBbkMsQ0FBYjtBQUNBLFFBQUEsT0FBSSxDQUFDOEssU0FBTCxHQUFpQixJQUFqQjtBQUNBLFFBQUEsT0FBSSxDQUFDdkYsS0FBTCxDQUFXQyxLQUFYLEdBQW1CLEdBQW5CO0FBQ0EsUUFBQSxPQUFJLENBQUN1RixLQUFMLEdBQWEsRUFBYjtBQUNBLFFBQUEsT0FBSSxDQUFDaEYsS0FBTCxHQUFhLENBQWI7QUFDQSxRQUFBLE9BQUksQ0FBQ2lGLE1BQUwsR0FBYyxDQUFkOztBQUNBLFFBQUEsT0FBSSxDQUFDMU0sWUFBTCxDQUFrQixZQUFNO0FBQ3BCLGNBQUl1QyxJQUFJLEdBQUdGLEdBQUcsQ0FBQ0UsSUFBZjtBQUNBLGNBQUl5SyxLQUFLLEdBQUc7QUFDUixpQkFBSztBQUFFQyxjQUFBQSxJQUFJLEVBQUUsTUFBUjtBQUFnQkMsY0FBQUEsS0FBSyxFQUFFOVAsS0FBSyxDQUFDZTtBQUE3QixhQURHO0FBRVIsa0JBQU07QUFBRThPLGNBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxjQUFBQSxLQUFLLEVBQUU5UCxLQUFLLENBQUNZO0FBQTdCLGFBRkU7QUFHUixrQkFBTTtBQUFFaVAsY0FBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGNBQUFBLEtBQUssRUFBRTlQLEtBQUssQ0FBQ2E7QUFBN0IsYUFIRTtBQUlSLGtCQUFNO0FBQUVnUCxjQUFBQSxJQUFJLEVBQUUsUUFBUjtBQUFrQkMsY0FBQUEsS0FBSyxFQUFFOVAsS0FBSyxDQUFDYztBQUEvQixhQUpFO0FBS1Isa0JBQU07QUFBRStPLGNBQUFBLElBQUksRUFBRSxNQUFSO0FBQWdCQyxjQUFBQSxLQUFLLEVBQUU5UCxLQUFLLENBQUNVO0FBQTdCLGFBTEU7QUFNUixrQkFBTTtBQUFFbVAsY0FBQUEsSUFBSSxFQUFFLE1BQVI7QUFBZ0JDLGNBQUFBLEtBQUssRUFBRTlQLEtBQUssQ0FBQ1c7QUFBN0I7QUFORSxXQUFaO0FBUUEsY0FBSW9QLE1BQU0sR0FBR0gsS0FBSyxDQUFDekssSUFBSSxDQUFDeUssS0FBTixDQUFsQjs7QUFDQSxVQUFBLE9BQUksQ0FBQ0gsT0FBTCxDQUFhTSxNQUFNLENBQUNGLElBQXBCLEVBQTBCRSxNQUFNLENBQUNELEtBQWpDLEVBQXdDM0ssSUFBSSxDQUFDc0UsRUFBN0MsRUFBaUR0RSxJQUFJLENBQUN1SyxJQUF0RDtBQUNILFNBWkQsRUFZRyxHQVpIO0FBYUgsT0F0QkQ7QUF1Qkg7QUFDSixHQXB5Qkk7QUFxeUJMO0FBQ0E7QUFDQUQsRUFBQUEsT0F2eUJLLG1CQXV5QkdPLFFBdnlCSCxFQXV5QmFDLFVBdnlCYixFQXV5QnlCQyxRQXZ5QnpCLEVBdXlCbUNDLFVBdnlCbkMsRUF1eUIrQztBQUNoRCxTQUFLMU0sWUFBTCxDQUFrQnJCLE1BQWxCLEdBQTJCLElBQTNCO0FBQ0FuQyxJQUFBQSxFQUFFLENBQUM4QixLQUFILENBQVNZLFVBQVQ7QUFDQSxRQUFJb0ksTUFBTSxHQUFHLEtBQUt0SCxZQUFMLENBQWtCYSxjQUFsQixDQUFpQyxRQUFqQyxDQUFiO0FBQ0EsUUFBSW1FLElBQUksR0FBRyxLQUFLaEYsWUFBTCxDQUFrQmEsY0FBbEIsQ0FBaUMsTUFBakMsRUFBeUN1QixZQUF6QyxDQUFzRDVGLEVBQUUsQ0FBQ3lJLE1BQXpELENBQVg7QUFDQSxRQUFJMEgsSUFBSSxHQUFHLEtBQUszTSxZQUFMLENBQWtCYSxjQUFsQixDQUFpQyxLQUFqQyxFQUF3Q3VCLFlBQXhDLENBQXFENUYsRUFBRSxDQUFDNkYsS0FBeEQsQ0FBWDtBQUNBc0ssSUFBQUEsSUFBSSxDQUFDbEssTUFBTCxvQkFBbUI4SixRQUFuQjtBQUNBdkgsSUFBQUEsSUFBSSxDQUFDUyxXQUFMLEdBQW1CLEtBQUsxSCxXQUFMLENBQWlCeU8sVUFBakIsQ0FBbkI7QUFDQSxRQUFJSSxPQUFPLEdBQUd0RixNQUFNLENBQUN6RyxjQUFQLENBQXNCLFVBQXRCLENBQWQ7QUFDQSxRQUFJZ00sT0FBTyxHQUFHdkYsTUFBTSxDQUFDekcsY0FBUCxDQUFzQixVQUF0QixDQUFkOztBQUNBLFFBQUk0TCxRQUFKLEVBQWM7QUFDVkcsTUFBQUEsT0FBTyxDQUFDak8sTUFBUixHQUFpQixJQUFqQjtBQUNBLFVBQUltTyxHQUFHLEdBQUdGLE9BQU8sQ0FBQy9MLGNBQVIsQ0FBdUIsS0FBdkIsRUFBOEJ1QixZQUE5QixDQUEyQzVGLEVBQUUsQ0FBQzZGLEtBQTlDLENBQVY7QUFDQXlLLE1BQUFBLEdBQUcsQ0FBQ3JLLE1BQUosaUNBQXFCZ0ssUUFBckI7QUFDSCxLQUpELE1BSU87QUFDSEcsTUFBQUEsT0FBTyxDQUFDak8sTUFBUixHQUFpQixLQUFqQjtBQUNIOztBQUNELFFBQUkrTixVQUFKLEVBQWdCO0FBQ1pHLE1BQUFBLE9BQU8sQ0FBQ2xPLE1BQVIsR0FBaUIsSUFBakI7O0FBQ0EsVUFBSXFHLEtBQUksR0FBRzZILE9BQU8sQ0FBQ2hNLGNBQVIsQ0FBdUIsTUFBdkIsRUFBK0J1QixZQUEvQixDQUE0QzVGLEVBQUUsQ0FBQ3lJLE1BQS9DLENBQVg7O0FBQ0FELE1BQUFBLEtBQUksQ0FBQ1MsV0FBTCxHQUFtQixLQUFLekgsVUFBTCxDQUFnQjBPLFVBQVUsR0FBRyxDQUE3QixDQUFuQjtBQUNILEtBSkQsTUFJTztBQUNIRyxNQUFBQSxPQUFPLENBQUNsTyxNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFDSixHQS96Qkk7QUFnMEJMO0FBQ0FvTyxFQUFBQSxXQWowQksseUJBaTBCUztBQUNWO0FBQ0F2USxJQUFBQSxFQUFFLENBQUN3USxPQUFILEdBQWEsSUFBYjtBQUNBeFEsSUFBQUEsRUFBRSxDQUFDeVEsaUJBQUgsR0FBdUIsSUFBdkI7QUFDQXpRLElBQUFBLEVBQUUsQ0FBQ3FDLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQm9PLFVBQXBCLENBQStCLE9BQS9CO0FBQ0ExUSxJQUFBQSxFQUFFLENBQUNrRSxRQUFILENBQVk4QyxTQUFaLENBQXNCLE9BQXRCO0FBQ0gsR0F2MEJJO0FBdzBCTDtBQUNBMkosRUFBQUEsZ0JBejBCSyw4QkF5MEJjO0FBQ2YsUUFBSUMsUUFBUSxHQUFHLEtBQUsxTixRQUFMLENBQWNtQixjQUFkLENBQTZCLGVBQTdCLENBQWY7QUFDQXVNLElBQUFBLFFBQVEsQ0FBQ3pPLE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxHQTUwQkk7QUE2MEJMME8sRUFBQUEsZ0JBNzBCSyw4QkE2MEJjO0FBQ2YsUUFBSUQsUUFBUSxHQUFHLEtBQUsxTixRQUFMLENBQWNtQixjQUFkLENBQTZCLGVBQTdCLENBQWY7QUFDQXVNLElBQUFBLFFBQVEsQ0FBQ3pPLE1BQVQsR0FBa0IsS0FBbEI7QUFDSCxHQWgxQkk7QUFpMUJMO0FBQ0EyTyxFQUFBQSxlQWwxQkssNkJBazFCYTtBQUNkLFFBQUlGLFFBQVEsR0FBRyxLQUFLMU4sUUFBTCxDQUFjbUIsY0FBZCxDQUE2QixjQUE3QixDQUFmLENBRGMsQ0FFZDs7QUFDQXVNLElBQUFBLFFBQVEsQ0FBQ3pPLE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxHQXQxQkk7QUF1MUJMNE8sRUFBQUEsZUF2MUJLLDZCQXUxQmE7QUFDZCxRQUFJSCxRQUFRLEdBQUcsS0FBSzFOLFFBQUwsQ0FBY21CLGNBQWQsQ0FBNkIsY0FBN0IsQ0FBZjtBQUNBdU0sSUFBQUEsUUFBUSxDQUFDek8sTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBMTFCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBodHRwID0gcmVxdWlyZShcIkh0dHBcIik7XG5jb25zdCBBV0FSRCA9IGNjLkVudW0oe1xuICAgIERBWV8xOiAwLFxuICAgIERBWV8yOiAxLFxuICAgIERBWV8zOiAyLFxuICAgIERBWV80OiAzLFxuICAgIERBWV81OiA0LFxuICAgIERBWV82OiA1LFxuICAgIERBWV83OiA2LFxuICAgIFJFRF81OiA3LFxuICAgIFJFRF8xMDogOCxcbiAgICBCT09NOiA5LFxuICAgIExPQ0s6IDEwLFxuICAgIFNIT1VDRTogMTEsXG4gICAgUE9XRVI6IDEyXG59KVxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgQkdNOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIFNldmVuRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBBd2FyZEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgVGV4dEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+WFs+mXrUZQU+mdouadv1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBjYy56bSA9IHt9O1xuICAgICAgICBjYy56bS52aWRlb0FkID0ge307XG4gICAgICAgIC8vIOetvuWIsOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IHRydWU7XG4gICAgICAgIC8vIOi9rOebmOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAvLyDlop7liqDlsY/luZXop4bpopFcbiAgICAgICAgY2MuVG9vbHMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICAvLyDov5vlhaXkuLvnlYzpnaLmiZPngrlcbiAgICAgICAgY2MuVG9vbHMuZG90KFwiZW50ZXJfbWFpblwiLG51bGwpXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+esrOS4gOasoei/m+WFpea4uOaIjyDlpoLmnpznrKzkuIDmrKHov5vlhaXpgqPkuYjlvLnlh7pGaXJzdOW8ueeql1xuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvRmlyc3QnKTtcbiAgICAgICAgdGhpcy5maXJzdExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX2ZpcnN0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RcIik7XG4gICAgICAgIHRoaXMuY2FuQ2xpY2tGcmlzdEJ0biA9IGZhbHNlO1xuICAgICAgICBpZiAoIV9maXJzdCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgLy8g5pi+56S6YmFubmVy5bm/5ZGKXG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5maXJzdExheWVyLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbih0aGlzLmZpcnN0TGF5ZXIpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5kZWxheSgzKS5jYWxsKCgpPT57XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2FuQ2xpY2tGcmlzdEJ0biA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfVxuICAgICAgICAvL+ebkeWQrOW8gOWni+a4uOaIj1xuICAgICAgICAvLyDorr7nva7nlYzpnaJcbiAgICAgICAgdGhpcy5TZXRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZXRMYXllcicpO1xuICAgICAgICAvLyDnrb7liLDnlYzpnaJcbiAgICAgICAgdGhpcy5TaWduTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2lnbkxheWVyJyk7XG4gICAgICAgIC8vIOWkp+i9rOebmOeVjOmdolxuICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyID0gY2MuZmluZCgnQ2FudmFzL1R1cm50YWJsZUxheWVyJyk7XG4gICAgICAgIC8vIOWtmOmSsee9kOeVjOmdoiDmj5DnjrDkuZ/mmK/ov5nkuKrnlYzpnaJcbiAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9HZXRNb25leUxheWVyJyk7XG4gICAgICAgIC8vIOS4g+aXpeS7u+WKoVxuICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZXZlbldvcmtMYXllclwiKTtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF55WM6Z2iXG4gICAgICAgIHRoaXMuUmVkUG9vbExheWVyID0gY2MuZmluZChcIkNhbnZhcy9SZWRQb29sTGF5ZXJcIilcbiAgICAgICAgLy8g6I635Y+W54mp5ZOB55qE5by556qXXG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyID0gY2MuZmluZChcIkNhbnZhcy9HZXRHb29kXCIpXG4gICAgICAgIC8vIOeci+inhumikeW+l+WlluWKseeVjOmdolxuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NlZVZpZGVvbGF5ZXJcIilcbiAgICAgICAgLy8g6YeN572u5YWz5Y2h55WM6Z2iXG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1Jlc3VtZUxheWVyXCIpXG4gICAgICAgIGNjLnptLnNob3dNdXNpYyA9IHRydWU7XG4gICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IDA7XG4gICAgICAgIHRoaXMuc2lnbk51bWJlciA9IDA7XG4gICAgICAgIHRoaXMuQkdNX0lEID0gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkJHTSk7XG4gICAgICAgIC8v6aKE5Yqg6L295Zy65pmvMlxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgLy8g5paw5omL5byV5a+8XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgIGd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpICE9PSBcIm92ZXJcIikge1xuICAgICAgICAgICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgPT09ICc0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIC8vIOiusOW9leaJk+eCueeahOWAvFxuICAgICAgICAvLyDnrb7liLDmiZPngrlcbiAgICAgICAgdGhpcy5zaWduX2luX2FjdGkgPSAwO1xuICAgICAgICAvLyDovaznm5jmiZPngrlcbiAgICAgICAgdGhpcy50dXJudGFibGVfYWN0aSA9IDA7XG4gICAgICAgIC8vIOaPkOeOsOaJk+eCuVxuICAgICAgICB0aGlzLmNhc2hfb3V0X2FjdGkgPSAwO1xuICAgICAgICAvLyDlrZjpkrHnvZDmiZPngrlcbiAgICAgICAgdGhpcy5iYW5rX2FjdGkgPSAwO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXmiZPngrlcbiAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkgPSAwO1xuICAgICAgICAvLyDlvIDlp4vmuLjmiI/miZPngrlcbiAgICAgICAgdGhpcy5sZXZlbF9zdGFydCA9IDA7XG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHRoaXMudXNlckluZm9cbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tdXNlciBpbmZvIFwiICsgSlNPTi5zdHJpbmdpZnkodGhpcy51c2VySW5mbykpO1xuICAgICAgICAgICAgLy8g5rOo5YaM5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJzaWduX2luXCIsIHsgc2lnc2lnbl9pbl90aW1lOiBuZXcgRGF0ZSgpIH0pXG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleExheWVyKCk7XG4gICAgICAgICAgICAvLyDkvZPlipvmmK/lkKblgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuUG93ZXJUaW1lKClcblxuICAgICAgICAgICAgLy8gdG9kbyB0ZXN0XG4gICAgICAgICAgICAvLyAgY2MuVG9vbHMuYWRDYWxsQmFjaygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgUG93ZXJUaW1lKCkge1xuICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8IDUpIHtcbiAgICAgICAgICAgIC8vIOeOsOWcqOaJjeS8muWAkuiuoeaXtlxuICAgICAgICAgICAgLy8g5YWI6I635Y+WXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUG93ZXJUaW1lU2NoZWR1bGUoKSB7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlcl9zZWMgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICAgICAgLy8g5Zyo6I635Y+W55So5oi35L+h5oGvIOaYr+WQpuS9k+WKm+a7oSDmsqHmnInmu6HmjqXnnYDlgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQoY2Muem0udXNlckluZm8ucG93ZXJfc2VjKTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYy0tXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWGmeS4gOS4queul+azlSDlsIbnp5LmlbDkvKDov5vmnaXnlJ/miJDkuIDkuKowMDowMOW9ouW8j+eahOWtl+espuS4slxuICAgIGNoYW5nZVNlY29uZChzKSB7XG4gICAgICAgIGxldCBtaW51dGUgPSBcIjBcIiArIE1hdGguZmxvb3IocyAvIDYwKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IHMgJSA2MCA+PSAxMCA/IHMgJSA2MCA6IFwiMFwiICsgcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGUgKyBcIjpcIiArIHNlY29uZFxuICAgIH0sXG4gICAgZ3VpZGVPdmVyKCkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgXCJvdmVyXCIpO1xuICAgIH0sXG4gICAgU3RhcnRHYW1lKCkge1xuICAgICAgICAvL+WFs+mXrUJHTVxuICAgICAgICAvLyBjYy56bS51c2VySW5mby53aW4gPSB0cnVlO1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5zdG9wKHRoaXMuQkdNX0lEKTtcbiAgICAgICAgLy/muIXnqbrlhbPljaHmlbAg5LiN5riF56m65YWz5Y2hXG4gICAgICAgIGlmICh0aGlzLmd1aWRlKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAxKTtcbiAgICAgICAgfVxuICAgICAgICAvL+i3s+i9rOWcuuaZr1xuICAgICAgICAvLyDlvIDlp4vmuLjmiI/kuYvliY0g5YWI6I635Y+W5YWz5Y2h5L+h5oGvIOWmguaenOayoeacieWFs+WNoeS/oeaBr+S4jei/m+WFpea4uOaIj1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5sZXZlbF9zdGFydCsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5YWz5Y2h5L+h5oGvPVwiLCBKU09OLnN0cmluZ2lmeShjYy56bS5MZXZlbEluZm8pKTtcbiAgICAgICAgICAgIC8vIOWIpOaWrVxuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrnnIvop4bpopHojrflvpfkvZPlipvnlYzpnaJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWVWaWRlb2xheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd1NlZVZpZGVvbGF5ZXIoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDnnIvop4bpopHlvpflpZblirFcbiAgICBzZWVWaWRlb0F3YXJkKCkge1xuICAgICAgICBjYy56bS52aWRlb0FkLmVudGVyR2FtZSA9IGZhbHNlO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuetvuWIsOeVjOmdolxuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWFiOiOt+WPluetvuWIsOWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluTGlzdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIC8vIOetvuWIsOaMiemSruaJk+eCuVxuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5zaWduX2luX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIGxldCBidG5Db20gPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcInNpZ25CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZihpPT09dGhpcy5zaWduRGF5KXtcbiAgICAgICAgICAgICAgICAgICAgaWYoX2RhdGEuc3RhdHVzKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlQnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChpID09PSB0aGlzLnNpZ25EYXkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrorr7nva7nlYzpnaJcbiAgICBzaG93U2V0TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuU2V0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IG5pY2tOYW1lID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5pa2VuYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIG5pY2tOYW1lLnN0cmluZyA9IHRoaXMudXNlckluZm8ubmlja19uYW1lO1xuICAgICAgICBsZXQgdXNlcklkID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJpZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB1c2VySWQuc3RyaW5nID0gYOeUqOaIt0lE77yaJHt0aGlzLnVzZXJJbmZvLnVzZXJfaWR9YFxuICAgICAgICAvLyBpY29uXG4gICAgICAgIGxldCBpY29uID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm1hc2tcIikuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICB2YXIgcmVtb3RlVXJsID0gdGhpcy51c2VySW5mby5hdmF0YXJfdXJsO1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZFJlbW90ZShyZW1vdGVVcmwsIHsgZXh0OiAnLnBuZycgfSwgZnVuY3Rpb24gKGVyciwgdGV4dHVyZSkge1xuICAgICAgICAgICAgLy8gVXNlIHRleHR1cmUgdG8gY3JlYXRlIHNwcml0ZSBmcmFtZVxuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IG5ldyBjYy5TcHJpdGVGcmFtZSh0ZXh0dXJlKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDmmL7npLrkuLvnlYzpnaJcbiAgICBzaG93SW5kZXhMYXllcigpIHtcbiAgICAgICAgLy8g6ZqQ6JePYmFubmVyXG4gICAgICAgIGlmKCFjYy5lbmRDb3VudFRpbWUpe1xuICAgICAgICAgICAgY2MuZW5kQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgaWYoY2MuZW5kQ291bnRUaW1lLWNjLmJlZ2luQ291bnRUaW1lPjMwMDAwKXtcbiAgICAgICAgICAgICAgICAvLyDop6blj5Hmj5LlsY9cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGFibGVTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICBjYy5iZWdpbkNvdW50VGltZSA9IGNjLmVuZENvdW50VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5oaWRlQmFubmVyKCk7XG4gICAgICAgIC8vIOe6ouWMheeahOaVsOmHj1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dldE1vbmV5L2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucmVkX3BhY2s7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlcjtcbiAgICAgICAgLy8g5YWD5a6d55qE5Liq5pWwXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvWXVhbkJhby9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLmdjO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dvbGQvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5zY29yZTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnBvd2VyXG4gICAgICAgIGxldCBidG5Db20gPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0JlZ2luR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLndpbikge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlpKfovaznm5jnlYzpnaJcbiAgICBzaG93VHVybnRhYmxlTGF5ZXIoKSB7XG4gICAgICAgIC8vIOaYvuekuuWkp+i9rOebmOS5i+WJjeiOt+WPlueUqOaIt+S/oeaBr+aOpeWPo1xuICAgICAgICB0aGlzLnBvaW50ID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy50dXJudGFibGVfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImJlZ2luQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnNlYyA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAvLyDmraTml7bovaznm5jngrnlh7vmjInpkq4g572u54Gw5LiU5LiN5Y+v54K55Ye7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gTWF0aC5hYnMoY2Muem0udXNlckluZm8uc2VjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duLCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOWkp+i9rOebmOeahOWAkuiuoeaXtlxuICAgIFR1cm5UYWJsZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudExibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZS0tO1xuICAgICAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQodGhpcy5jb3VudERvd25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S657qi5YyF5rGg55WM6Z2iXG4gICAgc2hvd1JlZFBvb2xMYXllcigpIHtcbiAgICAgICAgLy8g6I635Y+W5aWW5rGg5L+h5oGvXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvSmFja1BvdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3RfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICB0aGlzLlJlZFBvb2xMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHBvb2xJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgYXJyID0gW1wia2FpXCIsIFwieGluXCIsIFwia3VhbmdcIiwgXCJnb25nXCJdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBvb2xJbmZvW2FycltpXV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKGFycltpXSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb20uc3RyaW5nID0gXCJ4XCIgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWlluaxoOmHkeminSBcbiAgICAgICAgICAgIC8vIGxldCBhd2FyZF9sYmwgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgLy8gYXdhcmRfbGJsLnN0cmluZyA9IHBvb2xJbmZvLmFtb3VudFxuICAgICAgICAgICAgLy8g5aKe5Yqg5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgaG91ciA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaG91ci5zdHJpbmcgPSBwb29sSW5mby5ob3VyO1xuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbWludXRlLnN0cmluZyA9IHBvb2xJbmZvLm1pbnV0ZSA8IDEwID8gXCIwXCIgKyBwb29sSW5mby5taW51dGUgOiBwb29sSW5mby5taW51dGU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLo35pel5Lu75Yqh55WM6Z2iXG4gICAgc2hvd1NldmVuV29ya0xheWVyKCkge1xuICAgICAgICAvLyDnjrDojrflj5bkuIPml6Xku7vliqHliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICAvLyDpgJrov4fmlbDmja7liJ3lp4vljJbnlYzpnaIg54q25oCBIDAu5pyq6aKG5Y+WIDEu5bey6aKG5Y+WXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJEYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID09PSBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI6I635Y+W6Ieq5bex55qE5pWw5o2uIFxuICAgICAgICAgICAgICAgIGxldCBfc3RhdHVzID0gaXRlbXNbaV0uc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICghX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBpdGVtc1tpXS5udW07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPiBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBzZXJ2ZXJEYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICAvLyB0aGlzLnNpZ25OdW1iZXIgPSA3O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IGl0ZW1zW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9sYXlvdXQgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dEggPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfXCIgKyAoaiArIDEpKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0SC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICAgICAgICAgIGJ0bi5faWQgPSBfZGF0YS5pZDtcbiAgICAgICAgICAgICAgICBidG4udmFsdWUgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3miYDmnInmnaHku7bmmK/lkKblnYfovr7miJBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UgJiYgX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pbiAmJiBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadoeS7tui+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOayoeaciei+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5YWI6K6+572u5paH5pysXG4gICAgICAgICAgICAgICAgLy8g57qi5YyFXG4gICAgICAgICAgICAgICAgbGV0IHJlZCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGJsMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHJlZC5zdHJpbmcgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7op4LnnIvop4bpopHmrKHmlbBcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9UZXh0ID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdmlkZW9UZXh0LnN0cmluZyA9IGDop4LnnIske19kYXRhLm5lZWRfYWR95Liq6KeG6aKRYFxuICAgICAgICAgICAgICAgIC8vIOi/m+W6puadoVxuICAgICAgICAgICAgICAgIGxldCBiYXIgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gX2RhdGEuY3Vycl9hZCAvIF9kYXRhLm5lZWRfYWQ7XG4gICAgICAgICAgICAgICAgbGV0IGJhckxibCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiYmFyTGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgYmFyTGJsLnN0cmluZyA9IGAke19kYXRhLmN1cnJfYWR9LyR7X2RhdGEubmVlZF9hZH1gXG4gICAgICAgICAgICAgICAgLy8g6aKd5aSW5p2h5Lu2XG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB6YCa5YWz5pWwXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1MYXlvdXQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTAgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8wXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzFcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmAmui/h+esrCR7X2RhdGEubmVlZF9wYXNzX3N0YWdlfeWFs2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0wLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX3Bhc3Nfc3RhZ2UgPj0gX2RhdGEubmVlZF9wYXNzX3N0YWdlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6aKG5Y+W562+5Yiw5aWW5YqxYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmCgOivtyR7X2RhdGEubmVlZF9pbnZpdGV95Liq5aW95Y+LYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S66YeN572u5YWz5Y2h55WM6Z2iXG4gICAgc2hvd1Jlc3VtZUxheWVyKCkge1xuICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICByZXN1bWVMZXZlbCgpIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Jlc2V0XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBzZXZlbldvcmtHZXRNb25leShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLmnaHku7bmnKrovr7miJBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QdWxsTWlzc2lvblwiLCBcIlBPU1RcIiwgeyBpZDogdGFyZ2V0Ll9pZCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWIt+aWsFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NldmVuV29ya0xheWVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLnuqLljIXmj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90aW1lczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9yZXN1bHQ6IFwi5oiQ5YqfXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3miZPngrnmlbDmja5cIiwgSlNPTi5zdHJpbmdpZnkoZG90RGF0YSkpXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2FzaF9vdXRcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TYXZpbmdQb3RcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5iYW5rX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBnYyA9IGRhdGEuZ2MgfHwgMFxuICAgICAgICAgICAgLy8g5YWI5a6a5LmJ5b2T5YmN6YKj5Liq6Zi25q615piv5ZCm5Y+v5Lul5o+Q5Y+WXG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFswLjMsIDAuNSwgMSwgMiwgNSwgMTAsIDIwXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXRlbXNbaV0udGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliJ3lp4vljJblrZjpkrHnvZDnlYzpnaLlsZ7mgKdcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOaYvuekuuWFg+WuneS9meminVxuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIll1YW5CYW9fTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2M7XG4gICAgICAgICAgICAvLyAvLyDlhYPlrp3ot5/njrDph5Hov5vooYzovazmjaIg6L2s5o2i5q+U5L6L5Li6MTAwMDA6MVxuICAgICAgICAgICAgdGhpcy5leHRyYWN0TW9uZXkgPSBnYyAvIDEwMDAwO1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIkNoYW5nZV9OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmV4dHJhY3RNb25leSArIFwi5YWDXCI7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgICAgICAvLyDlvIDlp4vnmoTml7blgJlnZXRNb25leUJ0bue9rueBsOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g54K55Ye76YCJ5oup5o+Q546w6YeR6ZKx5oyJ6ZKuXG4gICAgY2hvaWNlR2V0TW9uZXlCdG4oZSwgbXNnKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+aPkOeOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4xKGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VcIiwgXCJQT1NUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/mj5DnjrBcbiAgICAgICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90eXBlOiBcIuWFg+WuneaPkOeOsFwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX251bTogdGhpcy5jaG9pY2VCdG4ubW9uZXksXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5omT54K55pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRvdERhdGEpKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHVuU2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjb21wbGV0ZUJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJjb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLlNpZ25MYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25MYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuZmlyc3RMYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIGlmKCF0aGlzLmNhbkNsaWNrRnJpc3RCdG4pe1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICBjYy5lbmRDb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG5cbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIC8vIOaKveWlluWAkuiuoeaXtiA+PTAg5Luj6KGo5Y+v5Lul5oq95aWW77yMPDAg5Y+W57ud5a+55YC8IOWAkuaVsOenkuaVsFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gNSAmJiB0aGlzLnBvaW50LmFuZ2xlIDw9IHRoaXMuZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSB0aGlzLmVuZEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBpZiAoIWNjLnptLnZpZGVvQWQuY2xpY2tTaWduKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgICAvLyDlhYjlg4/mnI3liqHlmajlj5HpgIHor7fmsYLojrflj5bnianlk4FpZFxuICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==