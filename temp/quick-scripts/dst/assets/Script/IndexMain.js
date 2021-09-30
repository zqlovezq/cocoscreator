
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

    cc.Tools.dot("enter_main"); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

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
    } // 显示banner广告


    cc.Tools.showBanner(); // 获取用户信息

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
      cc.log("cocos user info " + _this.userInfo); // 注册打点

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
      _this3.signDay = res.data.day;
      _this3.SignLayer.active = true;

      for (var i = 1; i <= 7; i++) {
        var dayNode = _this3.SignLayer.getChildByName("day_" + i);

        var _data = items[i - 1];

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


      var award_lbl = _this5.RedPoolLayer.getChildByName("award_lbl").getComponent(cc.Label);

      award_lbl.string = poolInfo.amount; // 增加倒计时

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
      cc.Tools.showBanner(); // console.log("七日任务列表=", res.data);
      // 通过数据初始化界面 状态 0.未领取 1.已领取

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
        // console.log("像服务器发送提现请求", res.data);
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
        cc.log("打点数据", dotData);
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
      var gc = data.gc || 0; // console.log("存钱罐信息=", data);
      // 先定义当前那个阶段是否可以提取

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
      // console.log("开始提现", this.choiceBtn.money);
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
        cc.log("打点数据", dotData);
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
    } // 关闭当前也进入首页 刷新界面


    this.signNumber = 0;
    this.getUserInfo(); // console.log("退出登陆");
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
      } // console.log(this.speed);


      if (this.speed <= 5 && this.point.angle <= this.endAngle) {
        this.beginTurn = false;
        this.point.angle = this.endAngle;
      }
    } // 签到


    if (!cc.zm.videoAd.clickSign) {
      cc.log("获取签到奖励");
      cc.zm.videoAd.clickSign = true; // 实时更新签到界面

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2NoZWR1bGVPbmNlIiwic2NhbGUiLCJ0d2VlbiIsInRvIiwic3RhcnQiLCJTZXRMYXllciIsIlNpZ25MYXllciIsIlR1cm50YWJsZUxheWVyIiwiR2V0TW9uZXR5TGF5ZXIiLCJTZXZlbldvcmtMYXllciIsIlJlZFBvb2xMYXllciIsIkdldEdvb2RMYXllciIsIlNlZVZpZGVvbGF5ZXIiLCJSZXN1bWVMYXllciIsInNob3dNdXNpYyIsInNob3dTaGFrZSIsImNvdW50RG93blRpbWUiLCJzaWduTnVtYmVyIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwic2hvd0Jhbm5lciIsImdldFVzZXJJbmZvIiwic2lnbl9pbl9hY3RpIiwidHVybnRhYmxlX2FjdGkiLCJjYXNoX291dF9hY3RpIiwiYmFua19hY3RpIiwiamFja3BvdF9hY3RpIiwibGV2ZWxfc3RhcnQiLCJzZW5kRGF0YSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsInVzZXJJbmZvIiwiZGF0YSIsImxvZyIsInNpZ3NpZ25faW5fdGltZSIsIkRhdGUiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiU3RhcnRHYW1lIiwic3RvcCIsImRvdERhdGEiLCJMZXZlbEluZm8iLCJjb25zb2xlIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwiZW50ZXJHYW1lIiwic2hvd0ppbGlBZCIsInNob3dTaWduTGF5ZXIiLCJpdGVtcyIsInNpZ25EYXkiLCJkYXkiLCJpIiwiZGF5Tm9kZSIsIl9kYXRhIiwic3RhdHVzIiwiY29tcGxldGVCdG4iLCJzZWxlY3RCdG4iLCJ1blNlbGVjdEJ0biIsInNob3dTZXRMYXllciIsIm5pY2tOYW1lIiwibmlja19uYW1lIiwidXNlcklkIiwidXNlcl9pZCIsImljb24iLCJTcHJpdGUiLCJyZW1vdGVVcmwiLCJhdmF0YXJfdXJsIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsImhpZGVCYW5uZXIiLCJyZWRfcGFjayIsImdjIiwic2NvcmUiLCJidG5Db20iLCJCdXR0b24iLCJ3aW4iLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsInNob3dUdXJudGFibGVMYXllciIsInBvaW50IiwiYW5nbGUiLCJzZWMiLCJhYnMiLCJUdXJuVGFibGVDb3VudERvd24iLCJzaG93UmVkUG9vbExheWVyIiwicG9vbEluZm8iLCJhcnIiLCJ2YWx1ZSIsImNvbSIsImF3YXJkX2xibCIsImFtb3VudCIsImhvdXIiLCJzaG93U2V2ZW5Xb3JrTGF5ZXIiLCJzZXJ2ZXJEYXkiLCJsZW5ndGgiLCJfc3RhdHVzIiwibnVtIiwicHVzaCIsInRpdGxlIiwibGF5b3V0IiwiX2xheW91dCIsImoiLCJfbGF5b3V0SCIsImJ0biIsIl9pZCIsImlkIiwiaXNDb21wbGV0ZSIsImN1cnJfcGFzc19zdGFnZSIsIm5lZWRfcGFzc19zdGFnZSIsImN1cnJfc2lnbl9pbiIsIm5lZWRfc2lnbl9pbiIsImN1cnJfaW52aXRlIiwibmVlZF9pbnZpdGUiLCJjb21wbGV0ZSIsInJlZCIsInZpZGVvVGV4dCIsIm5lZWRfYWQiLCJiYXIiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY3Vycl9hZCIsImJhckxibCIsIml0ZW1MYXlvdXQiLCJpdGVtMCIsIml0ZW0xIiwiaXRlbTIiLCJhcnJvdyIsInNob3dSZXN1bWVMYXllciIsInJlc3VtZUxldmVsIiwic2V2ZW5Xb3JrR2V0TW9uZXkiLCJlIiwidGFyZ2V0Iiwic2hvd1RpcHMiLCJub2RlIiwiY2FzaF90eXBlIiwiY2FzaF9udW0iLCJjYXNoX3RpbWVzIiwiY2FzaF9yZXN1bHQiLCJzaG93R2V0TW9uZXlMYXllciIsImdldE1vbmV5U3RhZ2UiLCJMZW5ndGgiLCJ0aW1lcyIsImV4dHJhY3RNb25leSIsImNob2ljZUJ0biIsImNob2ljZUdldE1vbmV5QnRuIiwibXNnIiwibW9uZXkiLCJOdW1iZXIiLCJjbGlja0dldE1vbmV5QnRuMSIsImxheWVyIiwicGFyZW50Iiwic3RvcEJHTSIsImV2ZW50IiwicGF1c2UiLCJyZXN1bWUiLCJzaGFrZVBob25lIiwiRXhpdEJhY2tCdG4iLCJjbGlja1NpZ25CdG4iLCJpc05hdGl2ZSIsImNsaWNrVHVyblRhYmxlQnRuIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0IiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJlbmRBbmdsZSIsInNob3dQb3AiLCJjYXJkIiwiYWQiLCJvYmoiLCJhd2FyZCIsIm5hbWUiLCJpbmRleCIsIl9hd2FyZCIsImdvb2ROYW1lIiwiZ29vZE51bWJlciIsImdjTnVtYmVyIiwidGV4dE51bWJlciIsInRleHQiLCJsYXlvdXQxIiwibGF5b3V0MiIsImxibCIsIkV4aXRXeExvZ2luIiwid3hUb2tlbiIsInd4TG9naW5SZXN1bHRjb2RlIiwicmVtb3ZlSXRlbSIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENBQVM7QUFDTCxhQUFTZixFQUFFLENBQUNnQixTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSQyxJQUFBQSxHQUFHLEVBQUU7QUFDRCxpQkFBUyxJQURSO0FBRURDLE1BQUFBLElBQUksRUFBRW5CLEVBQUUsQ0FBQ29CO0FBRlIsS0FERztBQUtSQyxJQUFBQSxXQUFXLEVBQUU7QUFD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YTtBQUNkLFFBQUlILFFBQVEsR0FBRyxLQUFLdk4sUUFBTCxDQUFjbUIsY0FBZCxDQUE2QixjQUE3QixDQUFmO0FBQ0FvTSxJQUFBQSxRQUFRLENBQUNsTyxNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUFoMEJJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOiA4LFxuICAgIEJPT006IDksXG4gICAgTE9DSzogMTAsXG4gICAgU0hPVUNFOiAxMSxcbiAgICBQT1dFUjogMTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YWz6ZetRlBT6Z2i5p2/XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIGNjLnptID0ge307XG4gICAgICAgIGNjLnptLnZpZGVvQWQgPSB7fTtcbiAgICAgICAgLy8g562+5Yiw5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgLy8g6L2s55uY5qCH6K6wXG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IHRydWU7XG4gICAgICAgIC8vIOWinuWKoOWxj+W5leinhumikVxuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIC8vIOi/m+WFpeS4u+eVjOmdouaJk+eCuVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJlbnRlcl9tYWluXCIpXG4gICAgICAgIC8vIOWIpOaWreaYr+WQpuaYr+esrOS4gOasoei/m+WFpea4uOaIjyDlpoLmnpznrKzkuIDmrKHov5vlhaXpgqPkuYjlvLnlh7pGaXJzdOW8ueeql1xuICAgICAgICBsZXQgZmlyc3RMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9GaXJzdCcpO1xuICAgICAgICBmaXJzdExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBsZXQgX2ZpcnN0ID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZmlyc3RcIik7XG4gICAgICAgIGlmICghX2ZpcnN0KSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLnNjYWxlID0gMDtcbiAgICAgICAgICAgICAgICBmaXJzdExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgY2MudHdlZW4oZmlyc3RMYXllcikudG8oMC41LCB7IHNjYWxlOiAxIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIH0sIDEpXG4gICAgICAgIH1cbiAgICAgICAgLy/nm5HlkKzlvIDlp4vmuLjmiI9cbiAgICAgICAgLy8g6K6+572u55WM6Z2iXG4gICAgICAgIHRoaXMuU2V0TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2V0TGF5ZXInKTtcbiAgICAgICAgLy8g562+5Yiw55WM6Z2iXG4gICAgICAgIHRoaXMuU2lnbkxheWVyID0gY2MuZmluZCgnQ2FudmFzL1NpZ25MYXllcicpO1xuICAgICAgICAvLyDlpKfovaznm5jnlYzpnaJcbiAgICAgICAgdGhpcy5UdXJudGFibGVMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9UdXJudGFibGVMYXllcicpO1xuICAgICAgICAvLyDlrZjpkrHnvZDnlYzpnaIg5o+Q546w5Lmf5piv6L+Z5Liq55WM6Z2iXG4gICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvR2V0TW9uZXlMYXllcicpO1xuICAgICAgICAvLyDkuIPml6Xku7vliqFcbiAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2V2ZW5Xb3JrTGF5ZXJcIik7XG4gICAgICAgIC8vIOWlluaxoOe6ouWMheeVjOmdolxuICAgICAgICB0aGlzLlJlZFBvb2xMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVkUG9vbExheWVyXCIpXG4gICAgICAgIC8vIOiOt+WPlueJqeWTgeeahOW8ueeql1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvR2V0R29vZFwiKVxuICAgICAgICAvLyDnnIvop4bpopHlvpflpZblirHnlYzpnaJcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZWVWaWRlb2xheWVyXCIpXG4gICAgICAgIC8vIOmHjee9ruWFs+WNoeeVjOmdolxuICAgICAgICB0aGlzLlJlc3VtZUxheWVyID0gY2MuZmluZChcIkNhbnZhcy9SZXN1bWVMYXllclwiKVxuICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmNvdW50RG93blRpbWUgPSAwO1xuICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLkJHTV9JRCA9IGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5CR00pO1xuICAgICAgICAvL+mihOWKoOi9veWcuuaZrzJcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgICAgIC8vIOaWsOaJi+W8leWvvFxuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKVxuICAgICAgICBndWlkZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzRcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSAhPT0gXCJvdmVyXCIpIHtcbiAgICAgICAgICAgIGlmICghY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpID09PSAnNCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzRcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmmL7npLpiYW5uZXLlub/lkYpcbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyDorrDlvZXmiZPngrnnmoTlgLxcbiAgICAgICAgLy8g562+5Yiw5omT54K5XG4gICAgICAgIHRoaXMuc2lnbl9pbl9hY3RpID0gMDtcbiAgICAgICAgLy8g6L2s55uY5omT54K5XG4gICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkgPSAwO1xuICAgICAgICAvLyDmj5DnjrDmiZPngrlcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpID0gMDtcbiAgICAgICAgLy8g5a2Y6ZKx572Q5omT54K5XG4gICAgICAgIHRoaXMuYmFua19hY3RpID0gMDtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF5omT54K5XG4gICAgICAgIHRoaXMuamFja3BvdF9hY3RpID0gMDtcbiAgICAgICAgLy8g5byA5aeL5ri45oiP5omT54K5XG4gICAgICAgIHRoaXMubGV2ZWxfc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICBjYy5sb2coXCJjb2NvcyB1c2VyIGluZm8gXCIgKyB0aGlzLnVzZXJJbmZvKTtcbiAgICAgICAgICAgIC8vIOazqOWGjOaJk+eCuVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic2lnbl9pblwiLCB7IHNpZ3NpZ25faW5fdGltZTogbmV3IERhdGUoKSB9KVxuICAgICAgICAgICAgdGhpcy5zaG93SW5kZXhMYXllcigpO1xuICAgICAgICAgICAgLy8g5L2T5Yqb5piv5ZCm5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLlBvd2VyVGltZSgpXG5cbiAgICAgICAgICAgIC8vIHRvZG8gdGVzdFxuICAgICAgICAgICAgLy8gIGNjLlRvb2xzLmFkQ2FsbEJhY2soKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFBvd2VyVGltZSgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPCA1KSB7XG4gICAgICAgICAgICAvLyDnjrDlnKjmiY3kvJrlgJLorqHml7ZcbiAgICAgICAgICAgIC8vIOWFiOiOt+WPllxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBvd2VyVGltZVNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXJfc2VjIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgICAgIC8vIOWcqOiOt+WPlueUqOaIt+S/oeaBryDmmK/lkKbkvZPlipvmu6Eg5rKh5pyJ5ruh5o6l552A5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyk7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlcl9zZWMtLVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5bCG56eS5pWw5Lyg6L+b5p2l55Sf5oiQ5LiA5LiqMDA6MDDlvaLlvI/nmoTlrZfnrKbkuLJcbiAgICBjaGFuZ2VTZWNvbmQocykge1xuICAgICAgICBsZXQgbWludXRlID0gXCIwXCIgKyBNYXRoLmZsb29yKHMgLyA2MCk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBzICUgNjAgPj0gMTAgPyBzICUgNjAgOiBcIjBcIiArIHMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlICsgXCI6XCIgKyBzZWNvbmRcbiAgICB9LFxuICAgIGd1aWRlT3ZlcigpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIFwib3ZlclwiKTtcbiAgICB9LFxuICAgIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy/lhbPpl61CR01cbiAgICAgICAgLy8gY2Muem0udXNlckluZm8ud2luID0gdHJ1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLkJHTV9JRCk7XG4gICAgICAgIC8v5riF56m65YWz5Y2h5pWwIOS4jea4heepuuWFs+WNoVxuICAgICAgICBpZiAodGhpcy5ndWlkZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ot7PovazlnLrmma9cbiAgICAgICAgLy8g5byA5aeL5ri45oiP5LmL5YmNIOWFiOiOt+WPluWFs+WNoeS/oeaBryDlpoLmnpzmsqHmnInlhbPljaHkv6Hmga/kuI3ov5vlhaXmuLjmiI9cbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcblxuICAgICAgICAgICAgdGhpcy5sZXZlbF9zdGFydCsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5YWz5Y2h5L+h5oGvPVwiLCBjYy56bS5MZXZlbEluZm8pO1xuICAgICAgICAgICAgLy8g5Yik5patXG4gICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaYvuekuueci+inhumikeiOt+W+l+S9k+WKm+eVjOmdolxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlZVZpZGVvbGF5ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93U2VlVmlkZW9sYXllcigpIHtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+WlluWKsVxuICAgIHNlZVZpZGVvQXdhcmQoKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gZmFsc2U7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgdGhpcy5TZWVWaWRlb2xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S6562+5Yiw55WM6Z2iXG4gICAgc2hvd1NpZ25MYXllcigpIHtcbiAgICAgICAgLy8g5YWI6I635Y+W562+5Yiw5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TaWduSW5MaXN0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgLy8g562+5Yiw5oyJ6ZKu5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLnNpZ25faW5fYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2lnbkRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuiuvue9rueVjOmdolxuICAgIHNob3dTZXRMYXllcigpIHtcbiAgICAgICAgdGhpcy5TZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICBsZXQgbmlja05hbWUgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibmlrZW5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbmlja05hbWUuc3RyaW5nID0gdGhpcy51c2VySW5mby5uaWNrX25hbWU7XG4gICAgICAgIGxldCB1c2VySWQgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcmlkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHVzZXJJZC5zdHJpbmcgPSBg55So5oi3SUTvvJoke3RoaXMudXNlckluZm8udXNlcl9pZH1gXG4gICAgICAgIC8vIGljb25cbiAgICAgICAgbGV0IGljb24gPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciByZW1vdGVVcmwgPSB0aGlzLnVzZXJJbmZvLmF2YXRhcl91cmw7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgeyBleHQ6ICcucG5nJyB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuS4u+eVjOmdolxuICAgIHNob3dJbmRleExheWVyKCkge1xuICAgICAgICAvLyDpmpDol49iYW5uZXJcbiAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAvLyDnuqLljIXnmoTmlbDph49cbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9HZXRNb25leS9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnJlZF9wYWNrO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucG93ZXI7XG4gICAgICAgIC8vIOWFg+WuneeahOS4quaVsFxuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1l1YW5CYW8vbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5nYztcbiAgICAgICAgY2MuZmluZChcIkNhbnZhcy9JbmRleC9Hb2xkL2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8uc2NvcmU7XG4gICAgICAgIC8vIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlclxuICAgICAgICBsZXQgYnRuQ29tID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9CZWdpbkdhbWVcIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby53aW4pIHtcbiAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65aSn6L2s55uY55WM6Z2iXG4gICAgc2hvd1R1cm50YWJsZUxheWVyKCkge1xuICAgICAgICAvLyDmmL7npLrlpKfovaznm5jkuYvliY3ojrflj5bnlKjmiLfkv6Hmga/mjqXlj6NcbiAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gMzYwO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YVxuICAgICAgICAgICAgdGhpcy5UdXJudGFibGVMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJiZWdpbkJ0blwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5zZWMgPCAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pyJ5YCS6K6h5pe2IOW8gOWni+WAkuiuoeaXtiB0b2RvXG4gICAgICAgICAgICAgICAgLy8g5q2k5pe26L2s55uY54K55Ye75oyJ6ZKuIOe9rueBsOS4lOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IE1hdGguYWJzKGNjLnptLnVzZXJJbmZvLnNlYyk7XG4gICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlR1cm5UYWJsZUNvdW50RG93biwgMSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDlpKfovaznm5jnmoTlgJLorqHml7ZcbiAgICBUdXJuVGFibGVDb3VudERvd24oKSB7XG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPCAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5q+P5LiA56eS5pu05paw5YCS6K6h5pe2XG4gICAgICAgICAgICAgICAgbGV0IHRpbWUgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB0aGlzLmNvdW50RG93blRpbWUtLTtcbiAgICAgICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKHRoaXMuY291bnREb3duVGltZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuue6ouWMheaxoOeVjOmdolxuICAgIHNob3dSZWRQb29sTGF5ZXIoKSB7XG4gICAgICAgIC8vIOiOt+WPluWlluaxoOS/oeaBr1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0phY2tQb3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5qYWNrcG90X2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwb29sSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcImthaVwiLCBcInhpblwiLCBcImt1YW5nXCIsIFwiZ29uZ1wiXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCA0OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsdWUgPSBwb29sSW5mb1thcnJbaV1dO1xuICAgICAgICAgICAgICAgIGxldCBjb20gPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShhcnJbaV0pLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgY29tLnN0cmluZyA9IFwieFwiICsgdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDlpZbmsaDph5Hpop0gXG4gICAgICAgICAgICBsZXQgYXdhcmRfbGJsID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3YXJkX2xibC5zdHJpbmcgPSBwb29sSW5mby5hbW91bnRcbiAgICAgICAgICAgIC8vIOWinuWKoOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IGhvdXIgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzFcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGhvdXIuc3RyaW5nID0gcG9vbEluZm8uaG91cjtcbiAgICAgICAgICAgIGxldCBtaW51dGUgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImNvdW50XzJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG1pbnV0ZS5zdHJpbmcgPSBwb29sSW5mby5taW51dGUgPCAxMCA/IFwiMFwiICsgcG9vbEluZm8ubWludXRlIDogcG9vbEluZm8ubWludXRlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S6N+aXpeS7u+WKoeeVjOmdolxuICAgIHNob3dTZXZlbldvcmtMYXllcigpIHtcbiAgICAgICAgLy8g546w6I635Y+W5LiD5pel5Lu75Yqh5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vIOmAmui/h+aVsOaNruWIneWni+WMlueVjOmdoiDnirbmgIEgMC7mnKrpooblj5YgMS7lt7Lpooblj5ZcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgbGV0IHNlcnZlckRheSA9IHJlcy5kYXRhLmRheTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyDlhYjojrflj5boh6rlt7HnmoTmlbDmja4gXG4gICAgICAgICAgICAgICAgbGV0IF9zdGF0dXMgPSBpdGVtc1tpXS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKCFfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IGl0ZW1zW2ldLm51bTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA+IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IHNlcnZlckRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIC8vIHRoaXMuc2lnbk51bWJlciA9IDc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA9PT0gaXRlbXNbaV0ubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDorr7nva50aXRsZVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLlNldmVuRnJhbWVzW2FyclswXS5udW0gLSAxXVxuICAgICAgICAgICAgLy8g5LiA5Y+q5b2T5YmN5pWw5o2uaXRlbSDpgJrov4fmlbDmja5cbiAgICAgICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGJ0bi52YWx1ZSA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMCA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpooblj5bnrb7liLDlpZblirFgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YKA6K+3JHtfZGF0YS5uZWVkX2ludml0ZX3kuKrlpb3lj4tgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHJlc3VtZUxldmVsKCkge1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmVzZXRcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIHNldmVuV29ya0dldE1vbmV5KGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG5cbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBpZiAoIXRhcmdldC5jb21wbGV0ZSkge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuadoeS7tuacqui+vuaIkFwiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1B1bGxNaXNzaW9uXCIsIFwiUE9TVFwiLCB7IGlkOiB0YXJnZXQuX2lkIH0pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglxuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWIt+aWsFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NldmVuV29ya0xheWVyKCk7XG4gICAgICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdHlwZTogXCLnuqLljIXmj5DnjrBcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9udW06IHRhcmdldC52YWx1ZSxcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90aW1lczogXCJcIixcbiAgICAgICAgICAgICAgICAgICAgY2FzaF9yZXN1bHQ6IFwi5oiQ5YqfXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2MubG9nKFwi5omT54K55pWw5o2uXCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2FzaF9vdXRcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TYXZpbmdQb3RcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5iYW5rX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcblxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBnYyA9IGRhdGEuZ2MgfHwgMFxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLlrZjpkrHnvZDkv6Hmga89XCIsIGRhdGEpO1xuICAgICAgICAgICAgLy8g5YWI5a6a5LmJ5b2T5YmN6YKj5Liq6Zi25q615piv5ZCm5Y+v5Lul5o+Q5Y+WXG4gICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSAwO1xuICAgICAgICAgICAgbGV0IGFyciA9IFswLjMsIDAuNSwgMSwgMiwgNSwgMTAsIDIwXVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkYXRhLml0ZW1zLkxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKGRhdGEuaXRlbXNbaV0udGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gYXJyW2ldO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDliJ3lp4vljJblrZjpkrHnvZDnlYzpnaLlsZ7mgKdcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOaYvuekuuWFg+WuneS9meminVxuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIll1YW5CYW9fTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gZ2M7XG4gICAgICAgICAgICAvLyAvLyDlhYPlrp3ot5/njrDph5Hov5vooYzovazmjaIg6L2s5o2i5q+U5L6L5Li6MTAwMDA6MVxuICAgICAgICAgICAgdGhpcy5leHRyYWN0TW9uZXkgPSBnYyAvIDEwMDAwO1xuICAgICAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcIkNoYW5nZV9OdW1iZXJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLmV4dHJhY3RNb25leSArIFwi5YWDXCI7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgICAgICAvLyDlvIDlp4vnmoTml7blgJlnZXRNb25leUJ0bue9rueBsOS4jeWPr+eCueWHu1xuICAgICAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g54K55Ye76YCJ5oup5o+Q546w6YeR6ZKx5oyJ6ZKuXG4gICAgY2hvaWNlR2V0TW9uZXlCdG4oZSwgbXNnKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKHRoaXMuY2hvaWNlQnRuKTtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuID0gdGFyZ2V0O1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4ubW9uZXkgPSBOdW1iZXIobXNnKVxuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4odGFyZ2V0KTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgYnRuID0gdGhpcy5HZXRNb25ldHlMYXllci5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+aPkOeOsOaMiemSrlxuICAgIGNsaWNrR2V0TW9uZXlCdG4xKGUpIHtcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpKys7XG4gICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5o+Q546wXCIsIHRoaXMuY2hvaWNlQnRuLm1vbmV5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VcIiwgXCJQT1NUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/mj5DnjrBcbiAgICAgICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgY2FzaF90eXBlOiBcIuWFg+WuneaPkOeOsFwiLFxuICAgICAgICAgICAgICAgICAgICBjYXNoX251bTogdGhpcy5jaG9pY2VCdG4ubW9uZXksXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfdGltZXM6IFwiXCIsXG4gICAgICAgICAgICAgICAgICAgIGNhc2hfcmVzdWx0OiBcIuaIkOWKn1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNjLmxvZyhcIuaJk+eCueaVsOaNrlwiLCBkb3REYXRhKVxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNhc2hfb3V0XCIsIGRvdERhdGEpXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93U2hha2UgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHVuU2VsZWN0QnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjb21wbGV0ZUJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJjb21wbGV0ZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bikge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuVHVybnRhYmxlTGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUdXJudGFibGVMYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumAgOWHuueZu+mZhlwiKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGlmICghY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG5cbiAgICAgICAgLy8g5q+P55yL5LiA5qyh6KeG6aKR5Y+v6I635b6X5LiA5qyh5oq95aWW5py65Lya77yM5q+P5qyh5oq95aWW5Ya35Y205pe26Ze05Li6NeWIhumSnyDlhrfljbTml7bpl7TorqnmnI3liqHlmajlgZpcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA+IDApIHtcbiAgICAgICAgICAgIC8vIOaKveWlluWAkuiuoeaXtiA+PTAg5Luj6KGo5Y+v5Lul5oq95aWW77yMPDAg5Y+W57ud5a+55YC8IOWAkuaVsOenkuaVsFxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBjcmVhdGVSYW5kbShuLCBtKSB7XG4gICAgICAgIG0gKz0gMTtcbiAgICAgICAgbGV0IGEgPSBtIC0gbjtcbiAgICAgICAgbGV0IG51bSA9IE1hdGgucmFuZG9tKCkgKiBhICsgbjtcbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KG51bSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICh0aGlzLmJlZ2luVHVybikge1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sXG4gICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlIC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICBpZiAodGhpcy5wb2ludC5hbmdsZSA8PSAwKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLmNpcmNsZSsrO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2lyY2xlICUgMiA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAvLyDmnaHku7bovr7miJAg6KGo56S66L2s5LqG5Lik5ZyIXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc3BlZWQgLT0gdGhpcy52YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMudmFsdWUgPT09IDQuNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDQuNTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgKz0gMS41O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2codGhpcy5zcGVlZCk7XG4gICAgICAgICAgICBpZiAodGhpcy5zcGVlZCA8PSA1ICYmIHRoaXMucG9pbnQuYW5nbGUgPD0gdGhpcy5lbmRBbmdsZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmVnaW5UdXJuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IHRoaXMuZW5kQW5nbGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g562+5YiwXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1NpZ24pIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuiOt+WPluetvuWIsOWlluWKsVwiKTtcbiAgICAgICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tTaWduID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOWunuaXtuabtOaWsOetvuWIsOeVjOmdolxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25JblwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAgICAgLy8gZGF0YeaVsOaNriBnY+WlluWKseWFg+WunSBjYXJkIDDmnKrojrflvpcgMeW8gCwy5b+DLDPnn79cbiAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoYXJyW3RoaXMuc2lnbkRheSAtIDFdLCBBV0FSRFtcIkRBWV9cIiArIHRoaXMuc2lnbkRheV0sIGRhdGEuZ2MsIGRhdGEuY2FyZClcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g6L2s55uYXG4gICAgICAgIGlmICghY2Muem0udmlkZW9BZC5jbGlja1RhYmxlKSB7XG4gICAgICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyAxLuS9k+WKmyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAzMS7kupTlhYPnuqLljIUgMzIu5Y2B5YWD57qi5YyFXG4gICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgICAgICBcIjEwXCI6IDI0MCxcbiAgICAgICAgICAgICAgICBcIjExXCI6IDE4MCxcbiAgICAgICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgICAgICBcIjMxXCI6IDM2MCxcbiAgICAgICAgICAgICAgICBcIjMyXCI6IDMwMFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnlcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmVuZEFuZ2xlID0gb2JqW1wiXCIgKyByZXMuZGF0YS5hd2FyZF07XG4gICAgICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQgPSB0aGlzLlR1cm50YWJsZUxheWVyLmdldENoaWxkQnlOYW1lKFwiUG9pbnRlclwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTg7XG4gICAgICAgICAgICAgICAgdGhpcy52YWx1ZSA9IDE7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgICAgIH0sIDQuNSlcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuR2V0R29vZExheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgbGV0IHRleHQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0ZXh0LnN0cmluZyA9IGDojrflvpcke2dvb2ROYW1lfWA7XG4gICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkF3YXJkRnJhbWVzW2dvb2ROdW1iZXJdO1xuICAgICAgICBsZXQgbGF5b3V0MSA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8xXCIpO1xuICAgICAgICBsZXQgbGF5b3V0MiA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICBpZiAoZ2NOdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBsYmwgPSBsYXlvdXQxLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYOiOt+W+l+WFg+WunSske2djTnVtYmVyfWBcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRleHROdW1iZXIpIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBpY29uID0gbGF5b3V0Mi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5UZXh0RnJhbWVzW3RleHROdW1iZXIgLSAxXTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGxheW91dDIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRXeExvZ2luKCkge1xuICAgICAgICAvLyDmuIXmjol0b2tlblxuICAgICAgICBjYy53eFRva2VuID0gbnVsbDtcbiAgICAgICAgY2Mud3hMb2dpblJlc3VsdGNvZGUgPSBudWxsO1xuICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnJlbW92ZUl0ZW0oXCJ0b2tlblwiKTtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiTG9naW5cIik7XG4gICAgfSxcbiAgICAvLyDmmL7npLrnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuumakOengeaUv+etllxuICAgIHNob3dVc2VyUHJpdmFjeSgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8g6K6+572u55So5oi35Y2P6K6uXG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG59KTtcbiJdfQ==