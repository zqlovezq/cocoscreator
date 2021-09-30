
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
    //关闭FPS面板
    // cc.director.setDisplayStats(false);
    cc.zm = {};
    cc.zm.videoAd = {}; // 签到标记

    cc.zm.videoAd.clickSign = true; // 转盘标记

    cc.zm.videoAd.clickTable = true; // 增加屏幕视频

    cc.Tools.screenAdapter(); // 进入主界面打点

    cc.Tools.dot("enter_main", null); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

    var firstLayer = cc.find('Canvas/First');
    firstLayer.active = false;

    var _first = cc.sys.localStorage.getItem("first");

    if (!_first) {
      cc.sys.localStorage.setItem("first", true); // 显示banner广告

      cc.Tools.showBanner();
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
    var _this = this;

    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      _this.userInfo = res.data;
      cc.zm.userInfo = _this.userInfo;
      console.log("cocos----user info " + JSON.stringify(_this.userInfo)); // 注册打点

      cc.Tools.dot("sign_in", {
        sigsign_in_time: new Date()
      });

      _this.showIndexLayer(); // 体力是否倒计时


      _this.PowerTime(); // todo test
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
    var _this2 = this;

    //关闭BGM
    // cc.zm.userInfo.win = true;
    cc.audioEngine.stop(this.BGM_ID); //清空关卡数 不清空关卡

    if (this.guide) {
      cc.sys.localStorage.setItem("guide", 1);
    } //跳转场景
    // 开始游戏之前 先获取关卡信息 如果没有关卡信息不进入游戏


    cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      _this2.level_start++;
      var dotData = {
        sign_in_acti: _this2.sign_in_acti,
        turntable_acti: _this2.turntable_acti,
        cash_out_acti: _this2.cash_out_acti,
        bank_acti: _this2.bank_acti,
        jackpot_acti: _this2.jackpot_acti,
        level_start: _this2.level_start
      };
      cc.Tools.dot("click", dotData);
      cc.zm.LevelInfo = res.data;
      console.log("cocos----关卡信息=", JSON.stringify(cc.zm.LevelInfo)); // 判断

      if (cc.zm.userInfo.power <= 0) {
        // 显示看视频获得体力界面
        _this2.showSeeVideolayer();
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
    var _this3 = this;

    // 先获取签到列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function (res) {
      var items = res.data.items; // 签到按钮打点

      cc.Tools.showBanner();
      _this3.sign_in_acti++;
      var dotData = {
        sign_in_acti: _this3.sign_in_acti,
        turntable_acti: _this3.turntable_acti,
        cash_out_acti: _this3.cash_out_acti,
        bank_acti: _this3.bank_acti,
        jackpot_acti: _this3.jackpot_acti,
        level_start: _this3.level_start
      };
      cc.Tools.dot("click", dotData);

      var btnCom = _this3.SignLayer.getChildByName("signBtn").getComponent(cc.Button);

      _this3.signDay = res.data.day;
      _this3.SignLayer.active = true;

      for (var i = 1; i <= 7; i++) {
        var dayNode = _this3.SignLayer.getChildByName("day_" + i);

        var _data = items[i - 1];

        if (i === _this3.signDay) {
          if (_data.status) {
            btnCom.enableAutoGrayEffect = true;
            btnCom.interactable = false;
          } else {
            btnCom.interactable = true;
          }
        }

        if (_data.status) {
          _this3.completeBtn(dayNode);
        } else {
          if (i === _this3.signDay) {
            _this3.selectBtn(dayNode);
          } else {
            _this3.unSelectBtn(dayNode);
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
    var _this4 = this;

    // 显示大转盘之前获取用户信息接口
    this.point = this.TurntableLayer.getChildByName("Pointer");
    this.point.angle = 360;
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this4.turntable_acti++;
      var dotData = {
        sign_in_acti: _this4.sign_in_acti,
        turntable_acti: _this4.turntable_acti,
        cash_out_acti: _this4.cash_out_acti,
        bank_acti: _this4.bank_acti,
        jackpot_acti: _this4.jackpot_acti,
        level_start: _this4.level_start
      };
      cc.Tools.dot("click", dotData);
      cc.zm.userInfo = res.data;
      _this4.TurntableLayer.active = true;

      var btnCom = _this4.TurntableLayer.getChildByName("beginBtn").getComponent(cc.Button);

      if (cc.zm.userInfo.sec < 0) {
        // 有倒计时 开始倒计时 todo
        // 此时转盘点击按钮 置灰且不可点击
        btnCom.enableAutoGrayEffect = true;
        btnCom.interactable = false;
        _this4.countDownTime = Math.abs(cc.zm.userInfo.sec);

        _this4.schedule(_this4.TurnTableCountDown, 1);
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
    var _this5 = this;

    // 获取奖池信息
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/JackPot", "GET", sendData).then(function (res) {
      cc.Tools.showBanner();
      _this5.jackpot_acti++;
      var dotData = {
        sign_in_acti: _this5.sign_in_acti,
        turntable_acti: _this5.turntable_acti,
        cash_out_acti: _this5.cash_out_acti,
        bank_acti: _this5.bank_acti,
        jackpot_acti: _this5.jackpot_acti,
        level_start: _this5.level_start
      };
      cc.Tools.dot("click", dotData);
      _this5.RedPoolLayer.active = true;
      var poolInfo = res.data;
      var arr = ["kai", "xin", "kuang", "gong"];

      for (var i = 0; i < 4; i++) {
        var value = poolInfo[arr[i]];

        var com = _this5.RedPoolLayer.getChildByName(arr[i]).getComponent(cc.Label);

        com.string = "x" + value;
      } // 奖池金额 
      // let award_lbl = this.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);
      // award_lbl.string = poolInfo.amount
      // 增加倒计时


      var hour = _this5.RedPoolLayer.getChildByName("count_1").getComponent(cc.Label);

      hour.string = poolInfo.hour;

      var minute = _this5.RedPoolLayer.getChildByName("count_2").getComponent(cc.Label);

      minute.string = poolInfo.minute < 10 ? "0" + poolInfo.minute : poolInfo.minute;
    });
  },
  // 显示7日任务界面
  showSevenWorkLayer: function showSevenWorkLayer() {
    var _this6 = this;

    // 现获取七日任务列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
      cc.Tools.showBanner(); // 通过数据初始化界面 状态 0.未领取 1.已领取

      var items = res.data.items;
      var serverDay = res.data.day;

      if (_this6.signNumber === serverDay) {
        return;
      }

      var arr = [];

      for (var i = 0; i < items.length; i++) {
        // 先获取自己的数据 
        var _status = items[i].status;

        if (!_status) {
          _this6.signNumber = items[i].num;
          break;
        }
      }

      if (_this6.signNumber > serverDay) {
        _this6.signNumber = serverDay;
      } // todo
      // this.signNumber = 7;


      for (var _i = 0; _i < items.length; _i++) {
        if (_this6.signNumber === items[_i].num) {
          arr.push(items[_i]);
        }
      } // 设置title


      var title = _this6.SevenWorkLayer.getChildByName("title").getComponent(cc.Sprite);

      title.spriteFrame = _this6.SevenFrames[arr[0].num - 1]; // 一只当前数据item 通过数据

      var layout = _this6.SevenWorkLayer.getChildByName("layout");

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

      _this6.SevenWorkLayer.active = true;
    });
  },
  // 显示重置关卡界面
  showResumeLayer: function showResumeLayer() {
    this.ResumeLayer.active = true;
  },
  resumeLevel: function resumeLevel() {
    var _this7 = this;

    cc.Tools.sendRequest("pit.v1.PitSvc/Reset", "GET", {}).then(function (res) {
      _this7.ResumeLayer.active = false;

      _this7.getUserInfo();
    });
  },
  sevenWorkGetMoney: function sevenWorkGetMoney(e) {
    var _this8 = this;

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
        _this8.SevenWorkLayer.getChildByName("getLayer").active = true; // 重新刷新

        _this8.showSevenWorkLayer();

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
    var _this9 = this;

    // 打开存钱罐 获取存钱罐的信息
    cc.Tools.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function (res) {
      cc.Tools.showBanner();
      _this9.bank_acti++;
      var dotData = {
        sign_in_acti: _this9.sign_in_acti,
        turntable_acti: _this9.turntable_acti,
        cash_out_acti: _this9.cash_out_acti,
        bank_acti: _this9.bank_acti,
        jackpot_acti: _this9.jackpot_acti,
        level_start: _this9.level_start
      };
      cc.Tools.dot("click", dotData);
      var data = res.data;
      var gc = data.gc || 0; // 先定义当前那个阶段是否可以提取

      _this9.getMoneyStage = 0;
      var arr = [0.3, 0.5, 1, 2, 5, 10, 20];

      for (var i = 0; i < data.items.Length; i++) {
        if (data.items[i].times) {
          _this9.getMoneyStage = arr[i];
          break;
        }
      } // 初始化存钱罐界面属性


      _this9.GetMonetyLayer.active = true; // 显示元宝余额

      _this9.GetMonetyLayer.getChildByName("YuanBao_Number").getComponent(cc.Label).string = gc; // // 元宝跟现金进行转换 转换比例为10000:1

      _this9.extractMoney = gc / 10000;
      _this9.GetMonetyLayer.getChildByName("Change_Number").getComponent(cc.Label).string = _this9.extractMoney + "元";
      _this9.choiceBtn = null; // 开始的时候getMoneyBtn置灰不可点击

      var btn = _this9.GetMonetyLayer.getChildByName("getMoneyBtn");

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
    var _this10 = this;

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
          cash_num: _this10.choiceBtn.money,
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
    } // 关闭当前也进入首页 刷新界面


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
    var _this11 = this;

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
        var signDay = _this11.SignLayer.getChildByName("day_" + _this11.signDay);

        _this11.completeBtn(signDay); // data数据 gc奖励元宝 card 0未获得 1开,2心,3矿


        var arr = ["三元红包", "炸药x1", "药水x1", "500元宝", "8.88元红包", "时钟x1", "18.88元红包"];
        var data = res.data;

        _this11.showPop(arr[_this11.signDay - 1], AWARD["DAY_" + _this11.signDay], data.gc, data.card);
      })["catch"](function (res) {
        cc.Tools.showTips(_this11.node, "今日奖励已领取");
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
        _this11.endAngle = obj["" + res.data.award]; // 开始旋转 初始速度为

        _this11.point = _this11.TurntableLayer.getChildByName("Pointer");
        _this11.beginTurn = true;
        _this11.point.angle = 360;
        _this11.speed = 18;
        _this11.value = 1;
        _this11.circle = 0;

        _this11.scheduleOnce(function () {
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

          _this11.showPop(_award.name, _award.index, data.gc, data.card);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2hvd0Jhbm5lciIsInNjaGVkdWxlT25jZSIsInNjYWxlIiwidHdlZW4iLCJ0byIsInN0YXJ0IiwiU2V0TGF5ZXIiLCJTaWduTGF5ZXIiLCJUdXJudGFibGVMYXllciIsIkdldE1vbmV0eUxheWVyIiwiU2V2ZW5Xb3JrTGF5ZXIiLCJSZWRQb29sTGF5ZXIiLCJHZXRHb29kTGF5ZXIiLCJTZWVWaWRlb2xheWVyIiwiUmVzdW1lTGF5ZXIiLCJzaG93TXVzaWMiLCJzaG93U2hha2UiLCJjb3VudERvd25UaW1lIiwic2lnbk51bWJlciIsIkJHTV9JRCIsImF1ZGlvRW5naW5lIiwicGxheSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwiZ3VpZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldFVzZXJJbmZvIiwic2lnbl9pbl9hY3RpIiwidHVybnRhYmxlX2FjdGkiLCJjYXNoX291dF9hY3RpIiwiYmFua19hY3RpIiwiamFja3BvdF9hY3RpIiwibGV2ZWxfc3RhcnQiLCJzZW5kRGF0YSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsInVzZXJJbmZvIiwiZGF0YSIsImNvbnNvbGUiLCJsb2ciLCJKU09OIiwic3RyaW5naWZ5Iiwic2lnc2lnbl9pbl90aW1lIiwiRGF0ZSIsInNob3dJbmRleExheWVyIiwiUG93ZXJUaW1lIiwidGltZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwicG93ZXIiLCJzY2hlZHVsZSIsIlBvd2VyVGltZVNjaGVkdWxlIiwic3RyaW5nIiwidW5zY2hlZHVsZSIsInBvd2VyX3NlYyIsImNoYW5nZVNlY29uZCIsInMiLCJtaW51dGUiLCJNYXRoIiwiZmxvb3IiLCJzZWNvbmQiLCJndWlkZU92ZXIiLCJTdGFydEdhbWUiLCJzdG9wIiwiZG90RGF0YSIsIkxldmVsSW5mbyIsInNob3dTZWVWaWRlb2xheWVyIiwibG9hZFNjZW5lIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInNob3dKaWxpQWQiLCJzaG93U2lnbkxheWVyIiwiaXRlbXMiLCJidG5Db20iLCJCdXR0b24iLCJzaWduRGF5IiwiZGF5IiwiaSIsImRheU5vZGUiLCJfZGF0YSIsInN0YXR1cyIsImVuYWJsZUF1dG9HcmF5RWZmZWN0IiwiaW50ZXJhY3RhYmxlIiwiY29tcGxldGVCdG4iLCJzZWxlY3RCdG4iLCJ1blNlbGVjdEJ0biIsInNob3dTZXRMYXllciIsIm5pY2tOYW1lIiwibmlja19uYW1lIiwidXNlcklkIiwidXNlcl9pZCIsImljb24iLCJTcHJpdGUiLCJyZW1vdGVVcmwiLCJhdmF0YXJfdXJsIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsImVuZENvdW50VGltZSIsImdldFRpbWUiLCJiZWdpbkNvdW50VGltZSIsInNob3dUYWJsZVNjcmVlbiIsImhpZGVCYW5uZXIiLCJyZWRfcGFjayIsImdjIiwic2NvcmUiLCJ3aW4iLCJzaG93VHVybnRhYmxlTGF5ZXIiLCJwb2ludCIsImFuZ2xlIiwic2VjIiwiYWJzIiwiVHVyblRhYmxlQ291bnREb3duIiwic2hvd1JlZFBvb2xMYXllciIsInBvb2xJbmZvIiwiYXJyIiwidmFsdWUiLCJjb20iLCJob3VyIiwic2hvd1NldmVuV29ya0xheWVyIiwic2VydmVyRGF5IiwibGVuZ3RoIiwiX3N0YXR1cyIsIm51bSIsInB1c2giLCJ0aXRsZSIsImxheW91dCIsIl9sYXlvdXQiLCJqIiwiX2xheW91dEgiLCJidG4iLCJfaWQiLCJpZCIsImlzQ29tcGxldGUiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2ludml0ZSIsIm5lZWRfaW52aXRlIiwiY29tcGxldGUiLCJyZWQiLCJ2aWRlb1RleHQiLCJuZWVkX2FkIiwiYmFyIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImN1cnJfYWQiLCJiYXJMYmwiLCJpdGVtTGF5b3V0IiwiaXRlbTAiLCJpdGVtMSIsIml0ZW0yIiwiYXJyb3ciLCJzaG93UmVzdW1lTGF5ZXIiLCJyZXN1bWVMZXZlbCIsInNldmVuV29ya0dldE1vbmV5IiwiZSIsInRhcmdldCIsInNob3dUaXBzIiwibm9kZSIsImNhc2hfdHlwZSIsImNhc2hfbnVtIiwiY2FzaF90aW1lcyIsImNhc2hfcmVzdWx0Iiwic2hvd0dldE1vbmV5TGF5ZXIiLCJnZXRNb25leVN0YWdlIiwiTGVuZ3RoIiwidGltZXMiLCJleHRyYWN0TW9uZXkiLCJjaG9pY2VCdG4iLCJjaG9pY2VHZXRNb25leUJ0biIsIm1zZyIsIm1vbmV5IiwiTnVtYmVyIiwiY2xpY2tHZXRNb25leUJ0bjEiLCJsYXllciIsInBhcmVudCIsInN0b3BCR00iLCJldmVudCIsInBhdXNlIiwicmVzdW1lIiwic2hha2VQaG9uZSIsIkV4aXRCYWNrQnRuIiwiY2xpY2tTaWduQnRuIiwiaXNOYXRpdmUiLCJjbGlja1R1cm5UYWJsZUJ0biIsImNyZWF0ZVJhbmRtIiwibiIsIm0iLCJhIiwicmFuZG9tIiwicGFyc2VJbnQiLCJ1cGRhdGUiLCJkdCIsImJlZ2luVHVybiIsInNwZWVkIiwiY2lyY2xlIiwiZW5kQW5nbGUiLCJhZCIsInNob3dQb3AiLCJjYXJkIiwib2JqIiwiYXdhcmQiLCJuYW1lIiwiaW5kZXgiLCJfYXdhcmQiLCJnb29kTmFtZSIsImdvb2ROdW1iZXIiLCJnY051bWJlciIsInRleHROdW1iZXIiLCJ0ZXh0IiwibGF5b3V0MSIsImxheW91dDIiLCJsYmwiLCJFeGl0V3hMb2dpbiIsInd4VG9rZW4iLCJ3eExvZ2luUmVzdWx0Y29kZSIsInJlbW92ZUl0ZW0iLCJzaG93VXNlclByb3RvY29sIiwicHJvdG9jb2wiLCJoaWRlVXNlclByb3RvY29sIiwic2hvd1VzZXJQcml2YWN5IiwiaGlkZVVzZXJQcml2YWN5Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0EsSUFBTUEsS0FBSyxHQUFHQyxFQUFFLENBQUNDLElBQUgsQ0FBUTtBQUNsQkMsRUFBQUEsS0FBSyxFQUFFLENBRFc7QUFFbEJDLEVBQUFBLEtBQUssRUFBRSxDQUZXO0FBR2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FIVztBQUlsQkMsRUFBQUEsS0FBSyxFQUFFLENBSlc7QUFLbEJDLEVBQUFBLEtBQUssRUFBRSxDQUxXO0FBTWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FOVztBQU9sQkMsRUFBQUEsS0FBSyxFQUFFLENBUFc7QUFRbEJDLEVBQUFBLEtBQUssRUFBRSxDQVJXO0FBU2xCQyxFQUFBQSxNQUFNLEVBQUUsQ0FUVTtBQVVsQkMsRUFBQUEsSUFBSSxFQUFFLENBVlk7QUFXbEJDLEVBQUFBLElBQUksRUFBRSxFQVhZO0FBWWxCQyxFQUFBQSxNQUFNLEVBQUUsRUFaVTtBQWFsQkMsRUFBQUEsS0FBSyxFQUFFO0FBYlcsQ0FBUixDQUFkO0FBZUFkLEVBQUUsQ0FBQ2UsS0FBSCxDQUFTO0FBQ0wsYUFBU2YsRUFBRSxDQUFDZ0IsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUkMsSUFBQUEsR0FBRyxFQUFFO0FBQ0QsaUJBQVMsSUFEUjtBQUVEQyxNQUFBQSxJ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QWY7QUFDQXVNLElBQUFBLFFBQVEsQ0FBQ3RPLE1BQVQsR0FBa0IsS0FBbEI7QUFDSDtBQW4xQkksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy8gY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJIdHRwXCIpO1xuY29uc3QgQVdBUkQgPSBjYy5FbnVtKHtcbiAgICBEQVlfMTogMCxcbiAgICBEQVlfMjogMSxcbiAgICBEQVlfMzogMixcbiAgICBEQVlfNDogMyxcbiAgICBEQVlfNTogNCxcbiAgICBEQVlfNjogNSxcbiAgICBEQVlfNzogNixcbiAgICBSRURfNTogNyxcbiAgICBSRURfMTA6IDgsXG4gICAgQk9PTTogOSxcbiAgICBMT0NLOiAxMCxcbiAgICBTSE9VQ0U6IDExLFxuICAgIFBPV0VSOiAxMlxufSlcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIEJHTToge1xuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcFxuICAgICAgICB9LFxuICAgICAgICBTZXZlbkZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgQXdhcmRGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIFRleHRGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/lhbPpl61GUFPpnaLmnb9cbiAgICAgICAgLy8gY2MuZGlyZWN0b3Iuc2V0RGlzcGxheVN0YXRzKGZhbHNlKTtcbiAgICAgICAgY2Muem0gPSB7fTtcbiAgICAgICAgY2Muem0udmlkZW9BZCA9IHt9O1xuICAgICAgICAvLyDnrb7liLDmoIforrBcbiAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1NpZ24gPSB0cnVlO1xuICAgICAgICAvLyDovaznm5jmoIforrBcbiAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1RhYmxlID0gdHJ1ZTtcbiAgICAgICAgLy8g5aKe5Yqg5bGP5bmV6KeG6aKRXG4gICAgICAgIGNjLlRvb2xzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgLy8g6L+b5YWl5Li755WM6Z2i5omT54K5XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImVudGVyX21haW5cIixudWxsKVxuICAgICAgICAvLyDliKTmlq3mmK/lkKbmmK/nrKzkuIDmrKHov5vlhaXmuLjmiI8g5aaC5p6c56ys5LiA5qyh6L+b5YWl6YKj5LmI5by55Ye6Rmlyc3TlvLnnqpdcbiAgICAgICAgbGV0IGZpcnN0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvRmlyc3QnKTtcbiAgICAgICAgZmlyc3RMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgbGV0IF9maXJzdCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0XCIpO1xuICAgICAgICBpZiAoIV9maXJzdCkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgLy8g5pi+56S6YmFubmVy5bm/5ZGKXG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZmlyc3RMYXllci5zY2FsZSA9IDA7XG4gICAgICAgICAgICAgICAgZmlyc3RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKGZpcnN0TGF5ZXIpLnRvKDAuNSwgeyBzY2FsZTogMSB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiPXG4gICAgICAgIC8vIOiuvue9rueVjOmdolxuICAgICAgICB0aGlzLlNldExheWVyID0gY2MuZmluZCgnQ2FudmFzL1NldExheWVyJyk7XG4gICAgICAgIC8vIOetvuWIsOeVjOmdolxuICAgICAgICB0aGlzLlNpZ25MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TaWduTGF5ZXInKTtcbiAgICAgICAgLy8g5aSn6L2s55uY55WM6Z2iXG4gICAgICAgIHRoaXMuVHVybnRhYmxlTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVHVybnRhYmxlTGF5ZXInKTtcbiAgICAgICAgLy8g5a2Y6ZKx572Q55WM6Z2iIOaPkOeOsOS5n+aYr+i/meS4queVjOmdolxuICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyID0gY2MuZmluZCgnQ2FudmFzL0dldE1vbmV5TGF5ZXInKTtcbiAgICAgICAgLy8g5LiD5pel5Lu75YqhXG4gICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldmVuV29ya0xheWVyXCIpO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXnlYzpnaJcbiAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1JlZFBvb2xMYXllclwiKVxuICAgICAgICAvLyDojrflj5bnianlk4HnmoTlvLnnqpdcbiAgICAgICAgdGhpcy5HZXRHb29kTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dldEdvb2RcIilcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5aWW5Yqx55WM6Z2iXG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2VlVmlkZW9sYXllclwiKVxuICAgICAgICAvLyDph43nva7lhbPljaHnlYzpnaJcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVzdW1lTGF5ZXJcIilcbiAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5CR01fSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQkdNKTtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma8yXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgZ3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgIT09IFwib3ZlclwiKSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSA9PT0gJzQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgLy8g6K6w5b2V5omT54K555qE5YC8XG4gICAgICAgIC8vIOetvuWIsOaJk+eCuVxuICAgICAgICB0aGlzLnNpZ25faW5fYWN0aSA9IDA7XG4gICAgICAgIC8vIOi9rOebmOaJk+eCuVxuICAgICAgICB0aGlzLnR1cm50YWJsZV9hY3RpID0gMDtcbiAgICAgICAgLy8g5o+Q546w5omT54K5XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSA9IDA7XG4gICAgICAgIC8vIOWtmOmSsee9kOaJk+eCuVxuICAgICAgICB0aGlzLmJhbmtfYWN0aSA9IDA7XG4gICAgICAgIC8vIOWlluaxoOe6ouWMheaJk+eCuVxuICAgICAgICB0aGlzLmphY2twb3RfYWN0aSA9IDA7XG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+aJk+eCuVxuICAgICAgICB0aGlzLmxldmVsX3N0YXJ0ID0gMDtcbiAgICB9LFxuICAgIGdldFVzZXJJbmZvKCkge1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS11c2VyIGluZm8gXCIgKyBKU09OLnN0cmluZ2lmeSh0aGlzLnVzZXJJbmZvKSk7XG4gICAgICAgICAgICAvLyDms6jlhozmiZPngrlcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcInNpZ25faW5cIiwgeyBzaWdzaWduX2luX3RpbWU6IG5ldyBEYXRlKCkgfSlcbiAgICAgICAgICAgIHRoaXMuc2hvd0luZGV4TGF5ZXIoKTtcbiAgICAgICAgICAgIC8vIOS9k+WKm+aYr+WQpuWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5Qb3dlclRpbWUoKVxuXG4gICAgICAgICAgICAvLyB0b2RvIHRlc3RcbiAgICAgICAgICAgIC8vICBjYy5Ub29scy5hZENhbGxCYWNrKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBQb3dlclRpbWUoKSB7XG4gICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbClcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDwgNSkge1xuICAgICAgICAgICAgLy8g546w5Zyo5omN5Lya5YCS6K6h5pe2XG4gICAgICAgICAgICAvLyDlhYjojrflj5ZcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gXCIwMDowMFwiO1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBQb3dlclRpbWVTY2hlZHVsZSgpIHtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyA8PSAwKSB7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgICAgICAvLyDlnKjojrflj5bnlKjmiLfkv6Hmga8g5piv5ZCm5L2T5Yqb5ruhIOayoeaciea7oeaOpeedgOWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSB0aGlzLmNoYW5nZVNlY29uZChjYy56bS51c2VySW5mby5wb3dlcl9zZWMpO1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8ucG93ZXJfc2VjLS1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOVIOWwhuenkuaVsOS8oOi/m+adpeeUn+aIkOS4gOS4qjAwOjAw5b2i5byP55qE5a2X56ym5LiyXG4gICAgY2hhbmdlU2Vjb25kKHMpIHtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IFwiMFwiICsgTWF0aC5mbG9vcihzIC8gNjApO1xuICAgICAgICBsZXQgc2Vjb25kID0gcyAlIDYwID49IDEwID8gcyAlIDYwIDogXCIwXCIgKyBzICUgNjBcbiAgICAgICAgcmV0dXJuIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kXG4gICAgfSxcbiAgICBndWlkZU92ZXIoKSB7XG4gICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCBcIm92ZXJcIik7XG4gICAgfSxcbiAgICBTdGFydEdhbWUoKSB7XG4gICAgICAgIC8v5YWz6ZetQkdNXG4gICAgICAgIC8vIGNjLnptLnVzZXJJbmZvLndpbiA9IHRydWU7XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5CR01fSUQpO1xuICAgICAgICAvL+a4heepuuWFs+WNoeaVsCDkuI3muIXnqbrlhbPljaFcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGUpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8v6Lez6L2s5Zy65pmvXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+S5i+WJjSDlhYjojrflj5blhbPljaHkv6Hmga8g5aaC5p6c5rKh5pyJ5YWz5Y2h5L+h5oGv5LiN6L+b5YWl5ri45oiPXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG5cbiAgICAgICAgICAgIHRoaXMubGV2ZWxfc3RhcnQrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeWFs+WNoeS/oeaBrz1cIiwgSlNPTi5zdHJpbmdpZnkoY2Muem0uTGV2ZWxJbmZvKSk7XG4gICAgICAgICAgICAvLyDliKTmlq1cbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pi+56S655yL6KeG6aKR6I635b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93U2VlVmlkZW9sYXllcigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoXCJHYW1lXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIHNob3dTZWVWaWRlb2xheWVyKCkge1xuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZCgpIHtcbiAgICAgICAgY2Muem0udmlkZW9BZC5lbnRlckdhbWUgPSBmYWxzZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnrb7liLDnlYzpnaJcbiAgICBzaG93U2lnbkxheWVyKCkge1xuICAgICAgICAvLyDlhYjojrflj5bnrb7liLDliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge31cbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25Jbkxpc3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAvLyDnrb7liLDmjInpkq7miZPngrlcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2lnbl9pbl9hY3RpKys7XG4gICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzaWduQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgdGhpcy5zaWduRGF5ID0gcmVzLmRhdGEuZGF5O1xuICAgICAgICAgICAgdGhpcy5TaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDc7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXlOb2RlID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSBpdGVtc1tpIC0gMV07XG4gICAgICAgICAgICAgICAgaWYoaT09PXRoaXMuc2lnbkRheSl7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9kYXRhLnN0YXR1cyl7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5zaWduRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bihkYXlOb2RlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S66K6+572u55WM6Z2iXG4gICAgc2hvd1NldExheWVyKCkge1xuICAgICAgICB0aGlzLlNldExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIGxldCBuaWNrTmFtZSA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuaWtlbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBuaWNrTmFtZS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLm5pY2tfbmFtZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyaWRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdXNlcklkLnN0cmluZyA9IGDnlKjmiLdJRO+8miR7dGhpcy51c2VySW5mby51c2VyX2lkfWBcbiAgICAgICAgLy8gaWNvblxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IHRoaXMudXNlckluZm8uYXZhdGFyX3VybDtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVtb3RlVXJsLCB7IGV4dDogJy5wbmcnIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcbiAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S65Li755WM6Z2iXG4gICAgc2hvd0luZGV4TGF5ZXIoKSB7XG4gICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICBpZighY2MuZW5kQ291bnRUaW1lKXtcbiAgICAgICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIGlmKGNjLmVuZENvdW50VGltZS1jYy5iZWdpbkNvdW50VGltZT4zMDAwMCl7XG4gICAgICAgICAgICAgICAgLy8g6Kem5Y+R5o+S5bGPXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RhYmxlU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgY2MuYmVnaW5Db3VudFRpbWUgPSBjYy5lbmRDb3VudFRpbWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgICAgICBsZXQgYnRuQ29tID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9CZWdpbkdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby53aW4pIHtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZWdpbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5zZWMgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ5YCS6K6h5pe2IOW8gOWni+WAkuiuoeaXtiB0b2RvXG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlR1cm5UYWJsZUNvdW50RG93biwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUtLTtcbiAgICAgICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKHRoaXMuY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuue6ouWMheaxoOeVjOmdolxuICAgIHNob3dSZWRQb29sTGF5ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWlluaxoOS/oeaBr1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICAvLyBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIC8vIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGUgPCAxMCA/IFwiMFwiICsgcG9vbEluZm8ubWludXRlIDogcG9vbEluZm8ubWludXRlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S6N+aXpeS7u+WKoeeVjOmdolxuICAgIHNob3dTZXZlbldvcmtMYXllcigpIHtcbiAgICAgICAgLy8g546w6I635Y+W5LiD5pel5Lu75Yqh5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgLy8g6YCa6L+H5pWw5o2u5Yid5aeL5YyW55WM6Z2iIOeKtuaAgSAwLuacqumihuWPliAxLuW3sumihuWPllxuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICBsZXQgc2VydmVyRGF5ID0gcmVzLmRhdGEuZGF5O1xuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA9PT0gc2VydmVyRGF5KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIC8vIOWFiOiOt+WPluiHquW3seeahOaVsOaNriBcbiAgICAgICAgICAgICAgICBsZXQgX3N0YXR1cyA9IGl0ZW1zW2ldLnN0YXR1cztcbiAgICAgICAgICAgICAgICBpZiAoIV9zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gaXRlbXNbaV0ubnVtO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID4gc2VydmVyRGF5KSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gc2VydmVyRGF5O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgLy8gdGhpcy5zaWduTnVtYmVyID0gNztcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID09PSBpdGVtc1tpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2goaXRlbXNbaV0pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOiuvue9rnRpdGxlXG4gICAgICAgICAgICBsZXQgdGl0bGUgPSB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICB0aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMuU2V2ZW5GcmFtZXNbYXJyWzBdLm51bSAtIDFdXG4gICAgICAgICAgICAvLyDkuIDlj6rlvZPliY3mlbDmja5pdGVtIOmAmui/h+aVsOaNrlxuICAgICAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBpZiAoYXJyLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0ID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0XzJcIik7XG4gICAgICAgICAgICAgICAgX2xheW91dC5hY3RpdmUgPSBmYWxzZVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCBhcnIubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2RhdGEgPSBhcnJbal07XG4gICAgICAgICAgICAgICAgbGV0IF9sYXlvdXRIID0gbGF5b3V0LmdldENoaWxkQnlOYW1lKFwibGF5b3V0X1wiICsgKGogKyAxKSk7XG4gICAgICAgICAgICAgICAgX2xheW91dEguYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgICAgICBidG4uX2lkID0gX2RhdGEuaWQ7XG4gICAgICAgICAgICAgICAgYnRuLnZhbHVlID0gX2RhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzID09PSAxKSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5Yik5pat5omA5pyJ5p2h5Lu25piv5ZCm5Z2H6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgIGxldCBpc0NvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGF0YS5jdXJyX3Bhc3Nfc3RhZ2UgPj0gX2RhdGEubmVlZF9wYXNzX3N0YWdlICYmIF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW4gJiYgX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlzQ29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpc0NvbXBsZXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmsqHmnInovr7miJBcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bi5jb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIOWFiOiuvue9ruaWh+acrFxuICAgICAgICAgICAgICAgIC8vIOe6ouWMhVxuICAgICAgICAgICAgICAgIGxldCByZWQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICByZWQuc3RyaW5nID0gX2RhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgLy8g6K6+572u6KeC55yL6KeG6aKR5qyh5pWwXG4gICAgICAgICAgICAgICAgbGV0IHZpZGVvVGV4dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGJsMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHZpZGVvVGV4dC5zdHJpbmcgPSBg6KeC55yLJHtfZGF0YS5uZWVkX2FkfeS4quinhumikWBcbiAgICAgICAgICAgICAgICAvLyDov5vluqbmnaFcbiAgICAgICAgICAgICAgICBsZXQgYmFyID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc0JhclwiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgICAgIGJhci5wcm9ncmVzcyA9IF9kYXRhLmN1cnJfYWQgLyBfZGF0YS5uZWVkX2FkO1xuICAgICAgICAgICAgICAgIGxldCBiYXJMYmwgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImJhckxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGJhckxibC5zdHJpbmcgPSBgJHtfZGF0YS5jdXJyX2FkfS8ke19kYXRhLm5lZWRfYWR9YFxuICAgICAgICAgICAgICAgIC8vIOmineWkluadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOmcgOimgemAmuWFs+aVsFxuICAgICAgICAgICAgICAgIGxldCBpdGVtTGF5b3V0ID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0wID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTEgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8xXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMiA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzJcIik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfcGFzc19zdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpgJrov4fnrKwke19kYXRhLm5lZWRfcGFzc19zdGFnZX3lhbNgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmihuWPluetvuWIsOWlluWKsWA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0xLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpgoDor7cke19kYXRhLm5lZWRfaW52aXRlfeS4quWlveWPi2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0yLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaYvuekuumHjee9ruWFs+WNoeeVjOmdolxuICAgIHNob3dSZXN1bWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgcmVzdW1lTGV2ZWwoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9SZXNldFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgc2V2ZW5Xb3JrR2V0TW9uZXkoZSkge1xuICAgICAgICB0aGlzLmNhc2hfb3V0X2FjdGkrKztcbiAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgIH1cbiAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5p2h5Lu25pyq6L6+5oiQXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHVsbE1pc3Npb25cIiwgXCJQT1NUXCIsIHsgaWQ6IHRhcmdldC5faWQgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TGF5ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyDph43mlrDliLfmlrBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZXZlbldvcmtMYXllcigpO1xuICAgICAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBjYXNoX3R5cGU6IFwi57qi5YyF5o+Q546wXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfbnVtOiB0YXJnZXQudmFsdWUsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5omT54K55pWw5o2uXCIsIEpTT04uc3RyaW5naWZ5KGRvdERhdGEpKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlrZjpkrHnvZDnlYzpnaJcbiAgICBzaG93R2V0TW9uZXlMYXllcigpIHtcbiAgICAgICAgLy8g5omT5byA5a2Y6ZKx572QIOiOt+WPluWtmOmSsee9kOeahOS/oeaBr1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2F2aW5nUG90XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuYmFua19hY3RpKys7XG4gICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG5cbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgZ2MgPSBkYXRhLmdjIHx8IDBcbiAgICAgICAgICAgIC8vIOWFiOWumuS5ieW9k+WJjemCo+S4qumYtuauteaYr+WQpuWPr+S7peaPkOWPllxuICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gMDtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMC4zLCAwLjUsIDEsIDIsIDUsIDEwLCAyMF1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLml0ZW1zW2ldLnRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5a2Y6ZKx572Q55WM6Z2i5bGe5oCnXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmmL7npLrlhYPlrp3kvZnpop1cbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJZdWFuQmFvX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdjO1xuICAgICAgICAgICAgLy8gLy8g5YWD5a6d6Lef546w6YeR6L+b6KGM6L2s5o2iIOi9rOaNouavlOS+i+S4ujEwMDAwOjFcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1vbmV5ID0gZ2MgLyAxMDAwMDtcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFuZ2VfTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5leHRyYWN0TW9uZXkgKyBcIuWFg1wiO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5byA5aeL55qE5pe25YCZZ2V0TW9uZXlCdG7nva7ngbDkuI3lj6/ngrnlh7tcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOeCueWHu+mAieaLqeaPkOeOsOmHkemSseaMiemSrlxuICAgIGNob2ljZUdldE1vbmV5QnRuKGUsIG1zZykge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDngrnlh7vmj5DnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuMShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5byA5aeL5o+Q546w6YeR6ZKxXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMSAg5piv5ZCm5YWD5a6d5pWw6YeP5piv5ZCm5ruh6Laz5o+Q546w5qGj5L2N77yM5LiN5ruh6Laz5pe25o+Q56S677ya5YWD5a6d5pWw6YeP5LiN6LazXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMiAg5qGj5L2N5piv5ZCm5Li65pyA5bCP5qGj5L2N77yM5aaC5p6c5LiN5piv5o+Q56S677ya6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYWN0TW9uZXkgPCB0aGlzLmNob2ljZUJ0bi5tb25leSkge1xuICAgICAgICAgICAgICAgIC8vIOS4jeespuWQiOadoeS7tjEg5by55Ye65YWD5a6d5pWw6YeP5LiN6Laz55qEdGlwc1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLlhYPlrp3mlbDph4/kuI3otrNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuLm1vbmV5ID4gdGhpcy5nZXRNb25leVN0YWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MiBcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmDveespuWQiOadoeS7tuWDj+acjeWKoeWZqOWPkemAgeivt+axglxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0V4Y2hhbmdlXCIsIFwiUE9TVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8g5oiQ5Yqf5o+Q546wXG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLlhYPlrp3mj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRoaXMuY2hvaWNlQnRuLm1vbmV5LFxuICAgICAgICAgICAgICAgICAgICBjYXNoX3RpbWVzOiBcIlwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX3Jlc3VsdDogXCLmiJDlip9cIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeaJk+eCueaVsOaNrlwiLCBKU09OLnN0cmluZ2lmeShkb3REYXRhKSlcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjYXNoX291dFwiLCBkb3REYXRhKVxuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IHRhcmdldC5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKTtcbiAgICAgICAgICAgICAgICBsYXllci5hY3RpdmUgPSB0cnVlO1xuXG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pn7PkuZBcbiAgICBzdG9wQkdNKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dNdXNpYyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5CR01fSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5CR01fSUQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pnIfliqhcbiAgICBzaGFrZVBob25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICB1blNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcGxldGVCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwiY29tcGxldGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRCYWNrQnRuKGUpIHtcbiAgICAgICAgZS50YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4pIHtcbiAgICAgICAgICAgIHRoaXMudW5TZWxlY3RCdG4odGhpcy5jaG9pY2VCdG4pO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93VHVybnRhYmxlTGF5ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLlNpZ25MYXllci5hY3RpdmU9PT10cnVlKXtcbiAgICAgICAgICAgIHRoaXMuc2hvd1NpZ25MYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICBjYy5lbmRDb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG5cbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIC8vIOaKveWlluWAkuiuoeaXtiA+PTAg5Luj6KGo5Y+v5Lul5oq95aWW77yMPDAg5Y+W57ud5a+55YC8IOWAkuaVsOenkuaVsFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gNSAmJiB0aGlzLnBvaW50LmFuZ2xlIDw9IHRoaXMuZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSB0aGlzLmVuZEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBpZiAoIWNjLnptLnZpZGVvQWQuY2xpY2tTaWduKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgICAvLyDlhYjlg4/mnI3liqHlmajlj5HpgIHor7fmsYLojrflj5bnianlk4FpZFxuICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==