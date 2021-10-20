
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

    cc.zm.videoAd.clickTable = true;
    cc.Tools.Event.on('getTable', this.getTableFunc, this);
    cc.Tools.Event.on('getSign', this.getSignFunc, this);
    cc.Tools.Event.on('getPower', this.getPowerFunc, this);
    cc.Tools.Event.on('showPop', this.showPopFunc, this);
    this.popData = null; // 增加屏幕视频

    cc.Tools.screenAdapter(); // 进入主界面打点

    cc.Tools.dot("enter_main"); // 判断是否是第一次进入游戏 如果第一次进入那么弹出First弹窗

    this.firstLayer = cc.find('Canvas/First');
    this.firstLayer.active = false;

    var _first = cc.sys.localStorage.getItem("first");

    this.canClickFristBtn = false;

    if (!_first) {
      // 显示banner广告
      // cc.Tools.showBanner();
      this.scheduleOnce(function () {
        _this.firstLayer.scale = 0;
        _this.firstLayer.active = true;
        cc.tween(_this.firstLayer).to(0.5, {
          scale: 1
        }).delay(3).call(function () {
          cc.sys.localStorage.setItem("first", true);
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
    this.beginTurn = false;
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


    this.getUserInfo();

    Date.prototype.Format = function (fmt) {
      var o = {
        "M+": this.getMonth() + 1,
        //月份 
        "d+": this.getDate(),
        //日 
        "H+": this.getHours(),
        //小时 
        "m+": this.getMinutes(),
        //分 
        "s+": this.getSeconds(),
        //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3),
        //季度 
        "S": this.getMilliseconds() //毫秒 

      };
      if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));

      for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
      }

      return fmt;
    }; // 注册登陆打点


    var _dotTime = new Date().Format("yyyy-MM-dd HH:mm:ss");

    cc.Tools.dot("sign_in", {
      sigsign_in_time: _dotTime
    }); // 记录打点的值
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

      _this2.showIndexLayer(); // 体力是否倒计时


      _this2.PowerTime();
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
    }

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
      cc.zm.LevelInfo = res.data; // 判断

      if (cc.zm.userInfo.power <= 0) {
        // 显示看视频获得体力界面
        _this3.showSeeVideolayer();
      } else {
        cc.Tools.hideTableScreen();
        cc.director.loadScene("Game");
      }
    });
  },
  showSeeVideolayer: function showSeeVideolayer() {
    // cc.Tools.showBanner();
    this.SeeVideolayer.active = true;
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward() {
    cc.zm.videoAd.enterGame = false;
    cc.Tools.showJiliAd(1);
    this.SeeVideolayer.active = false;
  },
  // 显示签到界面
  showSignLayer: function showSignLayer() {
    var _this4 = this;

    // 先获取签到列表
    var sendData = {};
    cc.Tools.sendRequest("pit.v1.PitSvc/SignInList", "GET", sendData).then(function (res) {
      var items = res.data.items; // 签到按钮打点
      // cc.Tools.showBanner();

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
    // cc.Tools.showBanner();

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
    } // cc.Tools.hideBanner();
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
    cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
      // cc.Tools.showBanner();
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
      // cc.Tools.showBanner();
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
      // cc.Tools.showBanner();
      // 通过数据初始化界面 状态 0.未领取 1.已领取
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
      })["catch"](function (res) {
        cc.Tools.showTips(_this9.node, res);
      });
    }
  },
  // 显示存钱罐界面
  showGetMoneyLayer: function showGetMoneyLayer() {
    var _this10 = this;

    // 打开存钱罐 获取存钱罐的信息
    console.log("cocos-----刷新存钱罐");
    cc.Tools.sendRequest("pit.v1.PitSvc/SavingPot", "GET", {}).then(function (res) {
      // cc.Tools.showBanner();
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

      for (var i = 0; i < data.items.length; i++) {
        if (data.items[i].times) {
          _this10.getMoneyStage = arr[i];
          break;
        }
      }

      for (var _i2 = 0; _i2 < data.items.length; _i2++) {
        var _btn = _this10.GetMonetyLayer.getChildByName("btn_" + (_i2 + 1));

        var lbl = _btn.getChildByName("timesLbl").getComponent(cc.Label);

        lbl.string = data.items[_i2].times + "次";
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
      }

      if (this.choiceBtn.money < this.getMoneyStage) {
        // 不符合条件2 
        cc.Tools.showTips(this.node, "没有提现次数");
        return;
      }

      if (this.choiceBtn.money >= 2) {
        cc.Tools.showTips(this.node, "提现成功,请等待审核");
        this.showGetMoneyLayer();
      } // 都符合条件像服务器发送请求


      cc.Tools.sendRequest("pit.v1.PitSvc/Exchange", "POST", {}).then(function (res) {
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
    if (this.firstLayer.active === true) {
      if (!this.canClickFristBtn) {
        return;
      }
    }

    if (this.beginTurn) {
      return;
    }

    e.target.parent.active = false;

    if (this.choiceBtn) {
      this.unSelectBtn(this.choiceBtn);
      this.choiceBtn = null;
    }

    if (this.TurntableLayer.active === true) {
      this.showTurntableLayer();
    } else if (this.SignLayer.active === true) {
      this.showSignLayer();
    } else if (this.GetMonetyLayer.active === true) {
      this.showGetMoneyLayer();
    } else {
      // 关闭当前也进入首页 刷新界面
      this.signNumber = 0;
      cc.endCountTime = new Date().getTime();
      this.getUserInfo();
    }
  },
  // 点击签到按钮
  clickSignBtn: function clickSignBtn(e) {
    // 签到
    cc.Tools.showJiliAd(3);
  },
  // 点击转盘开始按钮
  clickTurnTableBtn: function clickTurnTableBtn(e) {
    // 每看一次视频可获得一次抽奖机会，每次抽奖冷却时间为5分钟 冷却时间让服务器做
    if (this.countDownTime > 0) {
      // 抽奖倒计时 >=0 代表可以抽奖，<0 取绝对值 倒数秒数
      return;
    }

    cc.Tools.showJiliAd(4);
  },
  createRandm: function createRandm(n, m) {
    m += 1;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },
  update: function update(dt) {
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
        cc.Tools.emitEvent("showPop");
      }
    }
  },
  getPowerFunc: function getPowerFunc() {
    console.log("cocos--看视频得体力");

    if (cc.zm.userInfo.power <= 0) {
      var sendData = {
        ad: cc.zm.ad
      };
      cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
        cc.zm.userInfo.power = res.data.value;

        if (cc.zm.videoAd.enterGame) {
          cc.director.loadScene('Game');
        }
      });
    }
  },
  getSignFunc: function getSignFunc() {
    var _this11 = this;

    console.log("cocos--看视频签到");
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
  },
  getTableFunc: function getTableFunc() {
    var _this12 = this;

    console.log("cocos--看视频大转盘");
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
    cc.Tools.sendRequest("pit.v1.PitSvc/Lottery", "POST", sendData).then(function (res) {
      _this12.endAngle = obj["" + res.data.award]; // 开始旋转 初始速度为

      _this12.point = _this12.TurntableLayer.getChildByName("Pointer");
      _this12.beginTurn = true;
      _this12.point.angle = 360;
      _this12.speed = 18;
      _this12.value = 1;
      _this12.circle = 0;
      _this12.popData = res.data;
    });
  },
  showPopFunc: function showPopFunc() {
    var data = this.popData;
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
    this.showPop(_award.name, _award.index, data.gc, data.card);
  },
  // 增加显示弹出获得物品的弹窗
  // 奖品类型 1.体力 10.炸弹 11.时钟 12.石化手册 31.五元红包 32.十元红包
  showPop: function showPop(goodName, goodNumber, gcNumber, textNumber) {
    this.GetGoodLayer.active = true; // cc.Tools.showBanner();

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbIkFXQVJEIiwiY2MiLCJFbnVtIiwiREFZXzEiLCJEQVlfMiIsIkRBWV8zIiwiREFZXzQiLCJEQVlfNSIsIkRBWV82IiwiREFZXzciLCJSRURfNSIsIlJFRF8xMCIsIkJPT00iLCJMT0NLIiwiU0hPVUNFIiwiUE9XRVIiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJCR00iLCJ0eXBlIiwiQXVkaW9DbGlwIiwiU2V2ZW5GcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkF3YXJkRnJhbWVzIiwiVGV4dEZyYW1lcyIsIm9uTG9hZCIsInptIiwidmlkZW9BZCIsImNsaWNrU2lnbiIsImNsaWNrVGFibGUiLCJUb29scyIsIkV2ZW50Iiwib24iLCJnZXRUYWJsZUZ1bmMiLCJnZXRTaWduRnVuYyIsImdldFBvd2VyRnVuYyIsInNob3dQb3BGdW5jIiwicG9wRGF0YSIsInNjcmVlbkFkYXB0ZXIiLCJkb3QiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJjYW5DbGlja0ZyaXN0QnRuIiwic2NoZWR1bGVPbmNlIiwic2NhbGUiLCJ0d2VlbiIsInRvIiwiZGVsYXkiLCJjYWxsIiwic2V0SXRlbSIsInN0YXJ0IiwiU2V0TGF5ZXIiLCJTaWduTGF5ZXIiLCJUdXJudGFibGVMYXllciIsIkdldE1vbmV0eUxheWVyIiwiU2V2ZW5Xb3JrTGF5ZXIiLCJSZWRQb29sTGF5ZXIiLCJHZXRHb29kTGF5ZXIiLCJTZWVWaWRlb2xheWVyIiwiUmVzdW1lTGF5ZXIiLCJzaG93TXVzaWMiLCJzaG93U2hha2UiLCJjb3VudERvd25UaW1lIiwic2lnbk51bWJlciIsImJlZ2luVHVybiIsIkJHTV9JRCIsImF1ZGlvRW5naW5lIiwicGxheSIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwiZ3VpZGUiLCJnZXRDaGlsZEJ5TmFtZSIsImdldFVzZXJJbmZvIiwiRGF0ZSIsInByb3RvdHlwZSIsIkZvcm1hdCIsImZtdCIsIm8iLCJnZXRNb250aCIsImdldERhdGUiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwiTWF0aCIsImZsb29yIiwiZ2V0TWlsbGlzZWNvbmRzIiwidGVzdCIsInJlcGxhY2UiLCJSZWdFeHAiLCIkMSIsImdldEZ1bGxZZWFyIiwic3Vic3RyIiwibGVuZ3RoIiwiayIsIl9kb3RUaW1lIiwic2lnc2lnbl9pbl90aW1lIiwic2lnbl9pbl9hY3RpIiwidHVybnRhYmxlX2FjdGkiLCJjYXNoX291dF9hY3RpIiwiYmFua19hY3RpIiwiamFja3BvdF9hY3RpIiwibGV2ZWxfc3RhcnQiLCJzZW5kRGF0YSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsInVzZXJJbmZvIiwiZGF0YSIsInNob3dJbmRleExheWVyIiwiUG93ZXJUaW1lIiwidGltZSIsImdldENvbXBvbmVudCIsIkxhYmVsIiwicG93ZXIiLCJzY2hlZHVsZSIsIlBvd2VyVGltZVNjaGVkdWxlIiwic3RyaW5nIiwidW5zY2hlZHVsZSIsInBvd2VyX3NlYyIsImNoYW5nZVNlY29uZCIsInMiLCJtaW51dGUiLCJzZWNvbmQiLCJndWlkZU92ZXIiLCJTdGFydEdhbWUiLCJzdG9wIiwiZG90RGF0YSIsIkxldmVsSW5mbyIsInNob3dTZWVWaWRlb2xheWVyIiwiaGlkZVRhYmxlU2NyZWVuIiwibG9hZFNjZW5lIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInNob3dKaWxpQWQiLCJzaG93U2lnbkxheWVyIiwiaXRlbXMiLCJidG5Db20iLCJCdXR0b24iLCJzaWduRGF5IiwiZGF5IiwiaSIsImRheU5vZGUiLCJfZGF0YSIsInN0YXR1cyIsImVuYWJsZUF1dG9HcmF5RWZmZWN0IiwiaW50ZXJhY3RhYmxlIiwiY29tcGxldGVCdG4iLCJzZWxlY3RCdG4iLCJ1blNlbGVjdEJ0biIsInNob3dTZXRMYXllciIsIm5pY2tOYW1lIiwibmlja19uYW1lIiwidXNlcklkIiwidXNlcl9pZCIsImljb24iLCJTcHJpdGUiLCJyZW1vdGVVcmwiLCJhdmF0YXJfdXJsIiwiYXNzZXRNYW5hZ2VyIiwibG9hZFJlbW90ZSIsImV4dCIsImVyciIsInRleHR1cmUiLCJzcHJpdGVGcmFtZSIsImVuZENvdW50VGltZSIsImdldFRpbWUiLCJiZWdpbkNvdW50VGltZSIsInNob3dUYWJsZVNjcmVlbiIsInJlZF9wYWNrIiwiZ2MiLCJzY29yZSIsIndpbiIsInNob3dUdXJudGFibGVMYXllciIsInBvaW50IiwiYW5nbGUiLCJzZWMiLCJhYnMiLCJUdXJuVGFibGVDb3VudERvd24iLCJzaG93UmVkUG9vbExheWVyIiwicG9vbEluZm8iLCJhcnIiLCJ2YWx1ZSIsImNvbSIsImhvdXIiLCJzaG93U2V2ZW5Xb3JrTGF5ZXIiLCJzZXJ2ZXJEYXkiLCJfc3RhdHVzIiwibnVtIiwicHVzaCIsInRpdGxlIiwibGF5b3V0IiwiX2xheW91dCIsImoiLCJfbGF5b3V0SCIsImJ0biIsIl9pZCIsImlkIiwiaXNDb21wbGV0ZSIsImN1cnJfcGFzc19zdGFnZSIsIm5lZWRfcGFzc19zdGFnZSIsImN1cnJfc2lnbl9pbiIsIm5lZWRfc2lnbl9pbiIsImN1cnJfaW52aXRlIiwibmVlZF9pbnZpdGUiLCJjb21wbGV0ZSIsInJlZCIsInZpZGVvVGV4dCIsIm5lZWRfYWQiLCJiYXIiLCJQcm9ncmVzc0JhciIsInByb2dyZXNzIiwiY3Vycl9hZCIsImJhckxibCIsIml0ZW1MYXlvdXQiLCJpdGVtMCIsIml0ZW0xIiwiaXRlbTIiLCJhcnJvdyIsInNob3dSZXN1bWVMYXllciIsInJlc3VtZUxldmVsIiwic2V2ZW5Xb3JrR2V0TW9uZXkiLCJlIiwidGFyZ2V0Iiwic2hvd1RpcHMiLCJub2RlIiwic2hvd0dldE1vbmV5TGF5ZXIiLCJjb25zb2xlIiwibG9nIiwiZ2V0TW9uZXlTdGFnZSIsInRpbWVzIiwibGJsIiwiZXh0cmFjdE1vbmV5IiwiY2hvaWNlQnRuIiwiY2hvaWNlR2V0TW9uZXlCdG4iLCJtc2ciLCJtb25leSIsIk51bWJlciIsImNsaWNrR2V0TW9uZXlCdG4xIiwibGF5ZXIiLCJwYXJlbnQiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJFeGl0QmFja0J0biIsImNsaWNrU2lnbkJ0biIsImNsaWNrVHVyblRhYmxlQnRuIiwiY3JlYXRlUmFuZG0iLCJuIiwibSIsImEiLCJyYW5kb20iLCJwYXJzZUludCIsInVwZGF0ZSIsImR0Iiwic3BlZWQiLCJjaXJjbGUiLCJlbmRBbmdsZSIsImVtaXRFdmVudCIsImFkIiwic2hvd1BvcCIsImNhcmQiLCJvYmoiLCJhd2FyZCIsIm5hbWUiLCJpbmRleCIsIl9hd2FyZCIsImdvb2ROYW1lIiwiZ29vZE51bWJlciIsImdjTnVtYmVyIiwidGV4dE51bWJlciIsInRleHQiLCJsYXlvdXQxIiwibGF5b3V0MiIsIkV4aXRXeExvZ2luIiwid3hUb2tlbiIsInd4TG9naW5SZXN1bHRjb2RlIiwicmVtb3ZlSXRlbSIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUE7QUFDQSxJQUFNQSxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFB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QVQsR0FBa0IsS0FBbEI7QUFDSCxHQTUyQkk7QUE2MkJMO0FBQ0FxUCxFQUFBQSxlQTkyQkssNkJBODJCYTtBQUNkLFFBQUlGLFFBQVEsR0FBRyxLQUFLck8sUUFBTCxDQUFjb0IsY0FBZCxDQUE2QixjQUE3QixDQUFmLENBRGMsQ0FFZDs7QUFDQWlOLElBQUFBLFFBQVEsQ0FBQ25QLE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxHQWwzQkk7QUFtM0JMc1AsRUFBQUEsZUFuM0JLLDZCQW0zQmE7QUFDZCxRQUFJSCxRQUFRLEdBQUcsS0FBS3JPLFFBQUwsQ0FBY29CLGNBQWQsQ0FBNkIsY0FBN0IsQ0FBZjtBQUNBaU4sSUFBQUEsUUFBUSxDQUFDblAsTUFBVCxHQUFrQixLQUFsQjtBQUNIO0FBdDNCSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvLyBjb25zdCBodHRwID0gcmVxdWlyZShcIkh0dHBcIik7XG5jb25zdCBBV0FSRCA9IGNjLkVudW0oe1xuICAgIERBWV8xOiAwLFxuICAgIERBWV8yOiAxLFxuICAgIERBWV8zOiAyLFxuICAgIERBWV80OiAzLFxuICAgIERBWV81OiA0LFxuICAgIERBWV82OiA1LFxuICAgIERBWV83OiA2LFxuICAgIFJFRF81OiA3LFxuICAgIFJFRF8xMDogOCxcbiAgICBCT09NOiA5LFxuICAgIExPQ0s6IDEwLFxuICAgIFNIT1VDRTogMTEsXG4gICAgUE9XRVI6IDEyXG59KVxuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgQkdNOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwXG4gICAgICAgIH0sXG4gICAgICAgIFNldmVuRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBBd2FyZEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgVGV4dEZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvL+WFs+mXrUZQU+mdouadv1xuICAgICAgICAvLyBjYy5kaXJlY3Rvci5zZXREaXNwbGF5U3RhdHMoZmFsc2UpO1xuICAgICAgICBjYy56bSA9IHt9O1xuICAgICAgICBjYy56bS52aWRlb0FkID0ge307XG4gICAgICAgIC8vIOetvuWIsOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrU2lnbiA9IHRydWU7XG4gICAgICAgIC8vIOi9rOebmOagh+iusFxuICAgICAgICBjYy56bS52aWRlb0FkLmNsaWNrVGFibGUgPSB0cnVlO1xuICAgICAgICBjYy5Ub29scy5FdmVudC5vbignZ2V0VGFibGUnLCB0aGlzLmdldFRhYmxlRnVuYywgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKCdnZXRTaWduJywgdGhpcy5nZXRTaWduRnVuYywgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKCdnZXRQb3dlcicsIHRoaXMuZ2V0UG93ZXJGdW5jLCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oJ3Nob3dQb3AnLCB0aGlzLnNob3dQb3BGdW5jLCB0aGlzKTtcbiAgICAgICAgdGhpcy5wb3BEYXRhID0gbnVsbDtcbiAgICAgICAgLy8g5aKe5Yqg5bGP5bmV6KeG6aKRXG4gICAgICAgIGNjLlRvb2xzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgLy8g6L+b5YWl5Li755WM6Z2i5omT54K5XG4gICAgICAgIGNjLlRvb2xzLmRvdChcImVudGVyX21haW5cIilcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5piv56ys5LiA5qyh6L+b5YWl5ri45oiPIOWmguaenOesrOS4gOasoei/m+WFpemCo+S5iOW8ueWHukZpcnN05by556qXXG4gICAgICAgIHRoaXMuZmlyc3RMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9GaXJzdCcpO1xuICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCBfZmlyc3QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKTtcbiAgICAgICAgdGhpcy5jYW5DbGlja0ZyaXN0QnRuID0gZmFsc2U7XG4gICAgICAgIGlmICghX2ZpcnN0KSB7XG4gICAgICAgICAgICAvLyDmmL7npLpiYW5uZXLlub/lkYpcbiAgICAgICAgICAgIC8vIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmZpcnN0TGF5ZXIuc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuZmlyc3RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMuZmlyc3RMYXllcikudG8oMC41LCB7IHNjYWxlOiAxIH0pLmRlbGF5KDMpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJmaXJzdFwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jYW5DbGlja0ZyaXN0QnRuID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgICAgICB9LCAxKVxuICAgICAgICB9XG4gICAgICAgIC8v55uR5ZCs5byA5aeL5ri45oiPXG4gICAgICAgIC8vIOiuvue9rueVjOmdolxuICAgICAgICB0aGlzLlNldExheWVyID0gY2MuZmluZCgnQ2FudmFzL1NldExheWVyJyk7XG4gICAgICAgIC8vIOetvuWIsOeVjOmdolxuICAgICAgICB0aGlzLlNpZ25MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TaWduTGF5ZXInKTtcbiAgICAgICAgLy8g5aSn6L2s55uY55WM6Z2iXG4gICAgICAgIHRoaXMuVHVybnRhYmxlTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvVHVybnRhYmxlTGF5ZXInKTtcbiAgICAgICAgLy8g5a2Y6ZKx572Q55WM6Z2iIOaPkOeOsOS5n+aYr+i/meS4queVjOmdolxuICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyID0gY2MuZmluZCgnQ2FudmFzL0dldE1vbmV5TGF5ZXInKTtcbiAgICAgICAgLy8g5LiD5pel5Lu75YqhXG4gICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NldmVuV29ya0xheWVyXCIpO1xuICAgICAgICAvLyDlpZbmsaDnuqLljIXnlYzpnaJcbiAgICAgICAgdGhpcy5SZWRQb29sTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1JlZFBvb2xMYXllclwiKVxuICAgICAgICAvLyDojrflj5bnianlk4HnmoTlvLnnqpdcbiAgICAgICAgdGhpcy5HZXRHb29kTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL0dldEdvb2RcIilcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5aWW5Yqx55WM6Z2iXG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllciA9IGNjLmZpbmQoXCJDYW52YXMvU2VlVmlkZW9sYXllclwiKVxuICAgICAgICAvLyDph43nva7lhbPljaHnlYzpnaJcbiAgICAgICAgdGhpcy5SZXN1bWVMYXllciA9IGNjLmZpbmQoXCJDYW52YXMvUmVzdW1lTGF5ZXJcIilcbiAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5iZWdpblR1cm4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5CR01fSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQkdNKTtcbiAgICAgICAgLy/pooTliqDovb3lnLrmma8yXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAvLyDmlrDmiYvlvJXlr7xcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgZ3VpZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgIT09IFwib3ZlclwiKSB7XG4gICAgICAgICAgICBpZiAoIWNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSA9PT0gJzQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV80XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgRGF0ZS5wcm90b3R5cGUuRm9ybWF0ID0gZnVuY3Rpb24gKGZtdCkge1xuICAgICAgICAgICAgdmFyIG8gPSB7XG4gICAgICAgICAgICAgICAgXCJNK1wiOiB0aGlzLmdldE1vbnRoKCkgKyAxLCAvL+aciOS7vSBcbiAgICAgICAgICAgICAgICBcImQrXCI6IHRoaXMuZ2V0RGF0ZSgpLCAvL+aXpSBcbiAgICAgICAgICAgICAgICBcIkgrXCI6IHRoaXMuZ2V0SG91cnMoKSwgLy/lsI/ml7YgXG4gICAgICAgICAgICAgICAgXCJtK1wiOiB0aGlzLmdldE1pbnV0ZXMoKSwgLy/liIYgXG4gICAgICAgICAgICAgICAgXCJzK1wiOiB0aGlzLmdldFNlY29uZHMoKSwgLy/np5IgXG4gICAgICAgICAgICAgICAgXCJxK1wiOiBNYXRoLmZsb29yKCh0aGlzLmdldE1vbnRoKCkgKyAzKSAvIDMpLCAvL+Wto+W6piBcbiAgICAgICAgICAgICAgICBcIlNcIjogdGhpcy5nZXRNaWxsaXNlY29uZHMoKSAvL+avq+enkiBcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBpZiAoLyh5KykvLnRlc3QoZm10KSkgZm10ID0gZm10LnJlcGxhY2UoUmVnRXhwLiQxLCAodGhpcy5nZXRGdWxsWWVhcigpICsgXCJcIikuc3Vic3RyKDQgLSBSZWdFeHAuJDEubGVuZ3RoKSk7XG4gICAgICAgICAgICBmb3IgKHZhciBrIGluIG8pXG4gICAgICAgICAgICBpZiAobmV3IFJlZ0V4cChcIihcIiArIGsgKyBcIilcIikudGVzdChmbXQpKSBmbXQgPSBmbXQucmVwbGFjZShSZWdFeHAuJDEsIChSZWdFeHAuJDEubGVuZ3RoID09IDEpID8gKG9ba10pIDogKChcIjAwXCIgKyBvW2tdKS5zdWJzdHIoKFwiXCIgKyBvW2tdKS5sZW5ndGgpKSk7XG4gICAgICAgICAgICByZXR1cm4gZm10O1xuICAgICAgICB9XG4gICAgICAgIC8vIOazqOWGjOeZu+mZhuaJk+eCuVxuICAgICAgICBsZXQgX2RvdFRpbWUgPSBuZXcgRGF0ZSgpLkZvcm1hdChcInl5eXktTU0tZGQgSEg6bW06c3NcIilcbiAgICAgICAgY2MuVG9vbHMuZG90KFwic2lnbl9pblwiLCB7IHNpZ3NpZ25faW5fdGltZTogX2RvdFRpbWV9KVxuICAgICAgICAvLyDorrDlvZXmiZPngrnnmoTlgLxcbiAgICAgICAgLy8g562+5Yiw5omT54K5XG4gICAgICAgIHRoaXMuc2lnbl9pbl9hY3RpID0gMDtcbiAgICAgICAgLy8g6L2s55uY5omT54K5XG4gICAgICAgIHRoaXMudHVybnRhYmxlX2FjdGkgPSAwO1xuICAgICAgICAvLyDmj5DnjrDmiZPngrlcbiAgICAgICAgdGhpcy5jYXNoX291dF9hY3RpID0gMDtcbiAgICAgICAgLy8g5a2Y6ZKx572Q5omT54K5XG4gICAgICAgIHRoaXMuYmFua19hY3RpID0gMDtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF5omT54K5XG4gICAgICAgIHRoaXMuamFja3BvdF9hY3RpID0gMDtcbiAgICAgICAgLy8g5byA5aeL5ri45oiP5omT54K5XG4gICAgICAgIHRoaXMubGV2ZWxfc3RhcnQgPSAwO1xuICAgIH0sXG4gICAgZ2V0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSB0aGlzLnVzZXJJbmZvXG4gICAgICAgICAgICB0aGlzLnNob3dJbmRleExheWVyKCk7XG4gICAgICAgICAgICAvLyDkvZPlipvmmK/lkKblgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuUG93ZXJUaW1lKClcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIFBvd2VyVGltZSgpIHtcbiAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKVxuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPCA1KSB7XG4gICAgICAgICAgICAvLyDnjrDlnKjmiY3kvJrlgJLorqHml7ZcbiAgICAgICAgICAgIC8vIOWFiOiOt+WPllxuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlLCAxKVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGltZS5zdHJpbmcgPSBcIjAwOjAwXCI7XG4gICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5Qb3dlclRpbWVTY2hlZHVsZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFBvd2VyVGltZVNjaGVkdWxlKCkge1xuICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXJfc2VjIDw9IDApIHtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgICAgIC8vIOWcqOiOt+WPlueUqOaIt+S/oeaBryDmmK/lkKbkvZPlipvmu6Eg5rKh5pyJ5ruh5o6l552A5YCS6K6h5pe2XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCB0aW1lID0gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci90aW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IHRoaXMuY2hhbmdlU2Vjb25kKGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYyk7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlcl9zZWMtLVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5bCG56eS5pWw5Lyg6L+b5p2l55Sf5oiQ5LiA5LiqMDA6MDDlvaLlvI/nmoTlrZfnrKbkuLJcbiAgICBjaGFuZ2VTZWNvbmQocykge1xuICAgICAgICBsZXQgbWludXRlID0gXCIwXCIgKyBNYXRoLmZsb29yKHMgLyA2MCk7XG4gICAgICAgIGxldCBzZWNvbmQgPSBzICUgNjAgPj0gMTAgPyBzICUgNjAgOiBcIjBcIiArIHMgJSA2MFxuICAgICAgICByZXR1cm4gbWludXRlICsgXCI6XCIgKyBzZWNvbmRcbiAgICB9LFxuICAgIGd1aWRlT3ZlcigpIHtcbiAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIFwib3ZlclwiKTtcbiAgICB9LFxuICAgIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy/lhbPpl61CR01cbiAgICAgICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNjLmF1ZGlvRW5naW5lLnN0b3AodGhpcy5CR01fSUQpO1xuICAgICAgICAvL+a4heepuuWFs+WNoeaVsCDkuI3muIXnqbrlhbPljaFcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGUpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDEpO1xuICAgICAgICB9XG4gICAgICAgIC8v6Lez6L2s5Zy65pmvXG4gICAgICAgIC8vIOW8gOWni+a4uOaIj+S5i+WJjSDlhYjojrflj5blhbPljaHkv6Hmga8g5aaC5p6c5rKh5pyJ5YWz5Y2h5L+h5oGv5LiN6L+b5YWl5ri45oiPXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxldmVsX3N0YXJ0Kys7XG4gICAgICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgICAgICBzaWduX2luX2FjdGk6IHRoaXMuc2lnbl9pbl9hY3RpLFxuICAgICAgICAgICAgICAgIHR1cm50YWJsZV9hY3RpOiB0aGlzLnR1cm50YWJsZV9hY3RpLFxuICAgICAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgICAgICBiYW5rX2FjdGk6IHRoaXMuYmFua19hY3RpLFxuICAgICAgICAgICAgICAgIGphY2twb3RfYWN0aTogdGhpcy5qYWNrcG90X2FjdGksXG4gICAgICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImNsaWNrXCIsIGRvdERhdGEpXG5cbiAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgLy8g5Yik5patXG4gICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPD0gMCkge1xuICAgICAgICAgICAgICAgIC8vIOaYvuekuueci+inhumikeiOt+W+l+S9k+WKm+eVjOmdolxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NlZVZpZGVvbGF5ZXIoKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuaGlkZVRhYmxlU2NyZWVuKCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKFwiR2FtZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93U2VlVmlkZW9sYXllcigpIHtcbiAgICAgICAgLy8gY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+WlluWKsVxuICAgIHNlZVZpZGVvQXdhcmQoKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gZmFsc2U7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoMSk7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuetvuWIsOeVjOmdolxuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWFiOiOt+WPluetvuWIsOWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluTGlzdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIC8vIOetvuWIsOaMiemSruaJk+eCuVxuICAgICAgICAgICAgLy8gY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5zaWduX2luX2FjdGkrKztcbiAgICAgICAgICAgIGxldCBkb3REYXRhID0ge1xuICAgICAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICAgICAgdHVybnRhYmxlX2FjdGk6IHRoaXMudHVybnRhYmxlX2FjdGksXG4gICAgICAgICAgICAgICAgY2FzaF9vdXRfYWN0aTogdGhpcy5jYXNoX291dF9hY3RpLFxuICAgICAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICAgICAgamFja3BvdF9hY3RpOiB0aGlzLmphY2twb3RfYWN0aSxcbiAgICAgICAgICAgICAgICBsZXZlbF9zdGFydDogdGhpcy5sZXZlbF9zdGFydFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwiY2xpY2tcIiwgZG90RGF0YSlcbiAgICAgICAgICAgIGxldCBidG5Db20gPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcInNpZ25CdG5cIikuZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoaSA9PT0gdGhpcy5zaWduRGF5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2lnbkRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuiuvue9rueVjOmdolxuICAgIHNob3dTZXRMYXllcigpIHtcbiAgICAgICAgdGhpcy5TZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgLy8gY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICBsZXQgbmlja05hbWUgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibmlrZW5hbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbmlja05hbWUuc3RyaW5nID0gdGhpcy51c2VySW5mby5uaWNrX25hbWU7XG4gICAgICAgIGxldCB1c2VySWQgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcmlkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHVzZXJJZC5zdHJpbmcgPSBg55So5oi3SUTvvJoke3RoaXMudXNlckluZm8udXNlcl9pZH1gXG4gICAgICAgIC8vIGljb25cbiAgICAgICAgbGV0IGljb24gPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwibWFza1wiKS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIHZhciByZW1vdGVVcmwgPSB0aGlzLnVzZXJJbmZvLmF2YXRhcl91cmw7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5sb2FkUmVtb3RlKHJlbW90ZVVybCwgeyBleHQ6ICcucG5nJyB9LCBmdW5jdGlvbiAoZXJyLCB0ZXh0dXJlKSB7XG4gICAgICAgICAgICAvLyBVc2UgdGV4dHVyZSB0byBjcmVhdGUgc3ByaXRlIGZyYW1lXG4gICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gbmV3IGNjLlNwcml0ZUZyYW1lKHRleHR1cmUpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuS4u+eVjOmdolxuICAgIHNob3dJbmRleExheWVyKCkge1xuICAgICAgICAvLyDpmpDol49iYW5uZXJcbiAgICAgICAgaWYgKCFjYy5lbmRDb3VudFRpbWUpIHtcbiAgICAgICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKGNjLmVuZENvdW50VGltZSAtIGNjLmJlZ2luQ291bnRUaW1lID4gMzAwMDApIHtcbiAgICAgICAgICAgICAgICAvLyDop6blj5Hmj5LlsY9cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGFibGVTY3JlZW4oKTtcbiAgICAgICAgICAgICAgICBjYy5iZWdpbkNvdW50VGltZSA9IGNjLmVuZENvdW50VGltZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyBjYy5Ub29scy5oaWRlQmFubmVyKCk7XG4gICAgICAgIC8vIOe6ouWMheeahOaVsOmHj1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dldE1vbmV5L2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucmVkX3BhY2s7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlcjtcbiAgICAgICAgLy8g5YWD5a6d55qE5Liq5pWwXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvWXVhbkJhby9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLmdjO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dvbGQvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5zY29yZTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnBvd2VyXG4gICAgICAgIGxldCBidG5Db20gPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0JlZ2luR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLndpbikge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlpKfovaznm5jnlYzpnaJcbiAgICBzaG93VHVybnRhYmxlTGF5ZXIoKSB7XG4gICAgICAgIC8vIOaYvuekuuWkp+i9rOebmOS5i+WJjeiOt+WPlueUqOaIt+S/oeaBr+aOpeWPo1xuICAgICAgICB0aGlzLnBvaW50ID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY2MuVG9vbHMuc2hvd0Jhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy50dXJudGFibGVfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImJlZ2luQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnNlYyA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAvLyDmraTml7bovaznm5jngrnlh7vmjInpkq4g572u54Gw5LiU5LiN5Y+v54K55Ye7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gTWF0aC5hYnMoY2Muem0udXNlckluZm8uc2VjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duLCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOWkp+i9rOebmOeahOWAkuiuoeaXtlxuICAgIFR1cm5UYWJsZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudExibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZS0tO1xuICAgICAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQodGhpcy5jb3VudERvd25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S657qi5YyF5rGg55WM6Z2iXG4gICAgc2hvd1JlZFBvb2xMYXllcigpIHtcbiAgICAgICAgLy8g6I635Y+W5aWW5rGg5L+h5oGvXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvSmFja1BvdFwiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLmphY2twb3RfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICB0aGlzLlJlZFBvb2xMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHBvb2xJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgYXJyID0gW1wia2FpXCIsIFwieGluXCIsIFwia3VhbmdcIiwgXCJnb25nXCJdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDQ7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCB2YWx1ZSA9IHBvb2xJbmZvW2FycltpXV07XG4gICAgICAgICAgICAgICAgbGV0IGNvbSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKGFycltpXSkuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBjb20uc3RyaW5nID0gXCJ4XCIgKyB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWlluaxoOmHkeminSBcbiAgICAgICAgICAgIC8vIGxldCBhd2FyZF9sYmwgPSB0aGlzLlJlZFBvb2xMYXllci5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgLy8gYXdhcmRfbGJsLnN0cmluZyA9IHBvb2xJbmZvLmFtb3VudFxuICAgICAgICAgICAgLy8g5aKe5Yqg5YCS6K6h5pe2XG4gICAgICAgICAgICBsZXQgaG91ciA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaG91ci5zdHJpbmcgPSBwb29sSW5mby5ob3VyO1xuICAgICAgICAgICAgbGV0IG1pbnV0ZSA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiY291bnRfMlwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbWludXRlLnN0cmluZyA9IHBvb2xJbmZvLm1pbnV0ZSA8IDEwID8gXCIwXCIgKyBwb29sSW5mby5taW51dGUgOiBwb29sSW5mby5taW51dGU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLo35pel5Lu75Yqh55WM6Z2iXG4gICAgc2hvd1NldmVuV29ya0xheWVyKCkge1xuICAgICAgICAvLyDnjrDojrflj5bkuIPml6Xku7vliqHliJfooahcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICAvLyDpgJrov4fmlbDmja7liJ3lp4vljJbnlYzpnaIg54q25oCBIDAu5pyq6aKG5Y+WIDEu5bey6aKG5Y+WXG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIGxldCBzZXJ2ZXJEYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICBpZiAodGhpcy5zaWduTnVtYmVyID09PSBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYXJyID0gW107XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgLy8g5YWI6I635Y+W6Ieq5bex55qE5pWw5o2uIFxuICAgICAgICAgICAgICAgIGxldCBfc3RhdHVzID0gaXRlbXNbaV0uc3RhdHVzO1xuICAgICAgICAgICAgICAgIGlmICghX3N0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBpdGVtc1tpXS5udW07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPiBzZXJ2ZXJEYXkpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSBzZXJ2ZXJEYXk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICAvLyB0aGlzLnNpZ25OdW1iZXIgPSA3O1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IGl0ZW1zW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChpdGVtc1tpXSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6K6+572udGl0bGVcbiAgICAgICAgICAgIGxldCB0aXRsZSA9IHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5TZXZlbkZyYW1lc1thcnJbMF0ubnVtIC0gMV1cbiAgICAgICAgICAgIC8vIOS4gOWPquW9k+WJjeaVsOaNrml0ZW0g6YCa6L+H5pWw5o2uXG4gICAgICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgIGlmIChhcnIubGVuZ3RoID09PSAxKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9sYXlvdXQgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0LmFjdGl2ZSA9IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGFyci5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGFycltqXTtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dEggPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfXCIgKyAoaiArIDEpKTtcbiAgICAgICAgICAgICAgICBfbGF5b3V0SC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImdldE1vbmV5QnRuXCIpO1xuICAgICAgICAgICAgICAgIGJ0bi5faWQgPSBfZGF0YS5pZDtcbiAgICAgICAgICAgICAgICBidG4udmFsdWUgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAvLyDliKTmlq3miYDmnInmnaHku7bmmK/lkKblnYfovr7miJBcbiAgICAgICAgICAgICAgICAgICAgbGV0IGlzQ29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UgJiYgX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pbiAmJiBfZGF0YS5jdXJyX2ludml0ZSA+PSBfZGF0YS5uZWVkX2ludml0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaXNDb21wbGV0ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGlzQ29tcGxldGUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOadoeS7tui+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOayoeaciei+vuaIkFxuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmNvbXBsZXRlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8g5YWI6K6+572u5paH5pysXG4gICAgICAgICAgICAgICAgLy8g57qi5YyFXG4gICAgICAgICAgICAgICAgbGV0IHJlZCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGJsMVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHJlZC5zdHJpbmcgPSBfZGF0YS52YWx1ZTtcbiAgICAgICAgICAgICAgICAvLyDorr7nva7op4LnnIvop4bpopHmrKHmlbBcbiAgICAgICAgICAgICAgICBsZXQgdmlkZW9UZXh0ID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgdmlkZW9UZXh0LnN0cmluZyA9IGDop4LnnIske19kYXRhLm5lZWRfYWR95Liq6KeG6aKRYFxuICAgICAgICAgICAgICAgIC8vIOi/m+W6puadoVxuICAgICAgICAgICAgICAgIGxldCBiYXIgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzQmFyXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gX2RhdGEuY3Vycl9hZCAvIF9kYXRhLm5lZWRfYWQ7XG4gICAgICAgICAgICAgICAgbGV0IGJhckxibCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiYmFyTGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgYmFyTGJsLnN0cmluZyA9IGAke19kYXRhLmN1cnJfYWR9LyR7X2RhdGEubmVlZF9hZH1gXG4gICAgICAgICAgICAgICAgLy8g6aKd5aSW5p2h5Lu2XG4gICAgICAgICAgICAgICAgLy8g6ZyA6KaB6YCa5YWz5pWwXG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1MYXlvdXQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTAgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8wXCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMSA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzFcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0yID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMlwiKTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0wLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmAmui/h+esrCR7X2RhdGEubmVlZF9wYXNzX3N0YWdlfeWFs2A7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnJvdyA9IGl0ZW0wLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDaGlsZEJ5TmFtZShcImFycm93XCIpO1xuICAgICAgICAgICAgICAgICAgICBhcnJvdy5hY3RpdmUgPSBfZGF0YS5jdXJyX3Bhc3Nfc3RhZ2UgPj0gX2RhdGEubmVlZF9wYXNzX3N0YWdlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6aKG5Y+W562+5Yiw5aWW5YqxYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTEuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfc2lnbl9pbiA+PSBfZGF0YS5uZWVkX3NpZ25faW5cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0yLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYOmCgOivtyR7X2RhdGEubmVlZF9pbnZpdGV95Liq5aW95Y+LYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5TZXZlbldvcmtMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy8g5pi+56S66YeN572u5YWz5Y2h55WM6Z2iXG4gICAgc2hvd1Jlc3VtZUxheWVyKCkge1xuICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICByZXN1bWVMZXZlbCgpIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Jlc2V0XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBzZXZlbldvcmtHZXRNb25leShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKCF0YXJnZXQuY29tcGxldGUpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLmnaHku7bmnKrovr7miJBcIik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QdWxsTWlzc2lvblwiLCBcIlBPU1RcIiwgeyBpZDogdGFyZ2V0Ll9pZCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgICAgICBsZXQgYnRuQ29tID0gdGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5lbmFibGVBdXRvR3JheUVmZmVjdCA9IHRydWU7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuU2V2ZW5Xb3JrTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRMYXllclwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIC8vIOmHjeaWsOWIt+aWsFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1NldmVuV29ya0xheWVyKCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzKT0+e1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgcmVzKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuWtmOmSsee9kOeVjOmdolxuICAgIHNob3dHZXRNb25leUxheWVyKCkge1xuICAgICAgICAvLyDmiZPlvIDlrZjpkrHnvZAg6I635Y+W5a2Y6ZKx572Q55qE5L+h5oGvXG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tLeWIt+aWsOWtmOmSsee9kFwiKTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NhdmluZ1BvdFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLmJhbmtfYWN0aSsrO1xuICAgICAgICAgICAgbGV0IGRvdERhdGEgPSB7XG4gICAgICAgICAgICAgICAgc2lnbl9pbl9hY3RpOiB0aGlzLnNpZ25faW5fYWN0aSxcbiAgICAgICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgICAgICBjYXNoX291dF9hY3RpOiB0aGlzLmNhc2hfb3V0X2FjdGksXG4gICAgICAgICAgICAgICAgYmFua19hY3RpOiB0aGlzLmJhbmtfYWN0aSxcbiAgICAgICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgICAgIGxldmVsX3N0YXJ0OiB0aGlzLmxldmVsX3N0YXJ0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgbGV0IGdjID0gZGF0YS5nYyB8fCAwXG4gICAgICAgICAgICAvLyDlhYjlrprkuYnlvZPliY3pgqPkuKrpmLbmrrXmmK/lkKblj6/ku6Xmj5Dlj5ZcbiAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IDA7XG4gICAgICAgICAgICBsZXQgYXJyID0gWzAuMywgMC41LCAxLCAyLCA1LCAxMCwgMjBdXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRhdGEuaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBpZiAoZGF0YS5pdGVtc1tpXS50aW1lcykge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmdldE1vbmV5U3RhZ2UgPSBhcnJbaV07XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiYnRuX1wiKyhpKzEpKTtcbiAgICAgICAgICAgICAgICBsZXQgbGJsID0gYnRuLmdldENoaWxkQnlOYW1lKFwidGltZXNMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gZGF0YS5pdGVtc1tpXS50aW1lcytcIuasoVwiO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5a2Y6ZKx572Q55WM6Z2i5bGe5oCnXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmmL7npLrlhYPlrp3kvZnpop1cbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJZdWFuQmFvX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdjO1xuICAgICAgICAgICAgLy8gLy8g5YWD5a6d6Lef546w6YeR6L+b6KGM6L2s5o2iIOi9rOaNouavlOS+i+S4ujEwMDAwOjFcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1vbmV5ID0gZ2MgLyAxMDAwMDtcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFuZ2VfTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5leHRyYWN0TW9uZXkgKyBcIuWFg1wiO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5byA5aeL55qE5pe25YCZZ2V0TW9uZXlCdG7nva7ngbDkuI3lj6/ngrnlh7tcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOeCueWHu+mAieaLqeaPkOeOsOmHkemSseaMiemSrlxuICAgIGNob2ljZUdldE1vbmV5QnRuKGUsIG1zZykge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDngrnlh7vmj5DnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuMShlKSB7XG4gICAgICAgIHRoaXMuY2FzaF9vdXRfYWN0aSsrO1xuICAgICAgICBsZXQgZG90RGF0YSA9IHtcbiAgICAgICAgICAgIHNpZ25faW5fYWN0aTogdGhpcy5zaWduX2luX2FjdGksXG4gICAgICAgICAgICB0dXJudGFibGVfYWN0aTogdGhpcy50dXJudGFibGVfYWN0aSxcbiAgICAgICAgICAgIGNhc2hfb3V0X2FjdGk6IHRoaXMuY2FzaF9vdXRfYWN0aSxcbiAgICAgICAgICAgIGJhbmtfYWN0aTogdGhpcy5iYW5rX2FjdGksXG4gICAgICAgICAgICBqYWNrcG90X2FjdGk6IHRoaXMuamFja3BvdF9hY3RpLFxuICAgICAgICAgICAgbGV2ZWxfc3RhcnQ6IHRoaXMubGV2ZWxfc3RhcnRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5kb3QoXCJjbGlja1wiLCBkb3REYXRhKVxuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5byA5aeL5o+Q546w6YeR6ZKxXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMSAg5piv5ZCm5YWD5a6d5pWw6YeP5piv5ZCm5ruh6Laz5o+Q546w5qGj5L2N77yM5LiN5ruh6Laz5pe25o+Q56S677ya5YWD5a6d5pWw6YeP5LiN6LazXG4gICAgICAgICAgICAvLyDliKTmlq3mnaHku7YgMiAg5qGj5L2N5piv5ZCm5Li65pyA5bCP5qGj5L2N77yM5aaC5p6c5LiN5piv5o+Q56S677ya6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXG4gICAgICAgICAgICBpZiAodGhpcy5leHRyYWN0TW9uZXkgPCB0aGlzLmNob2ljZUJ0bi5tb25leSkge1xuICAgICAgICAgICAgICAgIC8vIOS4jeespuWQiOadoeS7tjEg5by55Ye65YWD5a6d5pWw6YeP5LiN6Laz55qEdGlwc1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLlhYPlrp3mlbDph4/kuI3otrNcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuLm1vbmV5ID4gdGhpcy5nZXRNb25leVN0YWdlKSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MiBcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi6K+35YWI5a6M5oiQ5LiK5LiA5Liq5qGj5L2N5o+Q546wXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKHRoaXMuY2hvaWNlQnRuLm1vbmV5IDwgdGhpcy5nZXRNb25leVN0YWdlKXtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLmsqHmnInmj5DnjrDmrKHmlbBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYodGhpcy5jaG9pY2VCdG4ubW9uZXk+PTIpe1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgXCLmj5DnjrDmiJDlip8s6K+3562J5b6F5a6h5qC4XCIpO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd0dldE1vbmV5TGF5ZXIoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOmDveespuWQiOadoeS7tuWDj+acjeWKoeWZqOWPkemAgeivt+axglxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0V4Y2hhbmdlXCIsIFwiUE9TVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pn7PkuZBcbiAgICBzdG9wQkdNKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dNdXNpYyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGF1c2UodGhpcy5CR01fSUQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5yZXN1bWUodGhpcy5CR01fSUQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlhbPpl63pnIfliqhcbiAgICBzaGFrZVBob25lKGV2ZW50KSB7XG4gICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICB1blNlbGVjdEJ0bihidG4pIHtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgY29tcGxldGVCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgYnRuLmdldENoaWxkQnlOYW1lKFwiY29tcGxldGVcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOmAgOWHuueZu+mZhlxuICAgIEV4aXRCYWNrQnRuKGUpIHtcbiAgICAgICAgaWYgKHRoaXMuZmlyc3RMYXllci5hY3RpdmUgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5jYW5DbGlja0ZyaXN0QnRuKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuYmVnaW5UdXJuKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bikge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuVHVybnRhYmxlTGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUdXJudGFibGVMYXllcigpO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuU2lnbkxheWVyLmFjdGl2ZSA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgdGhpcy5zaG93U2lnbkxheWVyKCk7XG4gICAgICAgIH0gZWxzZSBpZih0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZT09PXRydWUpe1xuICAgICAgICAgICAgdGhpcy5zaG93R2V0TW9uZXlMYXllcigpO1xuICAgICAgICB9IGVsc2V7XG4gICAgICAgICAgICAvLyDlhbPpl63lvZPliY3kuZ/ov5vlhaXpppbpobUg5Yi35paw55WM6Z2iXG4gICAgICAgICAgICB0aGlzLnNpZ25OdW1iZXIgPSAwO1xuICAgICAgICAgICAgY2MuZW5kQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKDMpO1xuICAgIH0sXG4gICAgLy8g54K55Ye76L2s55uY5byA5aeL5oyJ6ZKuXG4gICAgY2xpY2tUdXJuVGFibGVCdG4oZSkge1xuXG4gICAgICAgIC8vIOavj+eci+S4gOasoeinhumikeWPr+iOt+W+l+S4gOasoeaKveWlluacuuS8mu+8jOavj+asoeaKveWlluWGt+WNtOaXtumXtOS4ujXliIbpkp8g5Ya35Y205pe26Ze06K6p5pyN5Yqh5Zmo5YGaXG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPiAwKSB7XG4gICAgICAgICAgICAvLyDmir3lpZblgJLorqHml7YgPj0wIOS7o+ihqOWPr+S7peaKveWllu+8jDwwIOWPlue7neWvueWAvCDlgJLmlbDnp5LmlbBcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKDQpO1xuICAgIH0sXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIC8vIOi9rOebmFxuICAgICAgICBpZiAodGhpcy5iZWdpblR1cm4pIHtcbiAgICAgICAgICAgIC8vIOW8gOWni+aXi+i9rFxuICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnQuYW5nbGUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUrKztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNpcmNsZSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQIOihqOekuui9rOS6huS4pOWciFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSA0LjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSA0LjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlICs9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnNwZWVkIDw9IDUgJiYgdGhpcy5wb2ludC5hbmdsZSA8PSB0aGlzLmVuZEFuZ2xlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iZWdpblR1cm4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLnBvaW50LmFuZ2xlID0gdGhpcy5lbmRBbmdsZTtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJzaG93UG9wXCIpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFBvd2VyRnVuYygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS3nnIvop4bpopHlvpfkvZPliptcIilcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDw9IDApIHtcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhZDogY2Muem0uYWRcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mby5wb3dlciA9IHJlcy5kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmIChjYy56bS52aWRlb0FkLmVudGVyR2FtZSkge1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0U2lnbkZ1bmMoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0t55yL6KeG6aKR562+5YiwXCIpXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwiYWRcIjogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2lnbkluXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2lnbkRheSA9IHRoaXMuU2lnbkxheWVyLmdldENoaWxkQnlOYW1lKFwiZGF5X1wiICsgdGhpcy5zaWduRGF5KTtcbiAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oc2lnbkRheSk7XG4gICAgICAgICAgICAvLyBkYXRh5pWw5o2uIGdj5aWW5Yqx5YWD5a6dIGNhcmQgMOacquiOt+W+lyAx5byALDLlv4MsM+efv1xuICAgICAgICAgICAgbGV0IGFyciA9IFtcIuS4ieWFg+e6ouWMhVwiLCBcIueCuOiNr3gxXCIsIFwi6I2v5rC0eDFcIiwgXCI1MDDlhYPlrp1cIiwgXCI4Ljg45YWD57qi5YyFXCIsIFwi5pe26ZKfeDFcIiwgXCIxOC44OOWFg+e6ouWMhVwiXVxuICAgICAgICAgICAgbGV0IGRhdGEgPSByZXMuZGF0YTtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcChhcnJbdGhpcy5zaWduRGF5IC0gMV0sIEFXQVJEW1wiREFZX1wiICsgdGhpcy5zaWduRGF5XSwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICB9KS5jYXRjaCgocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIFwi5LuK5pel5aWW5Yqx5bey6aKG5Y+WXCIpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGdldFRhYmxlRnVuYygpe1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS3nnIvop4bpopHlpKfovaznm5hcIilcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIC8vIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgIFwiMTBcIjogMjQwLFxuICAgICAgICAgICAgXCIxMVwiOiAxODAsXG4gICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgIFwiMzFcIjogMzYwLFxuICAgICAgICAgICAgXCIzMlwiOiAzMDBcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeVwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZSA9IG9ialtcIlwiICsgcmVzLmRhdGEuYXdhcmRdO1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5iZWdpblR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAxODtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgdGhpcy5wb3BEYXRhID0gcmVzLmRhdGFcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBzaG93UG9wRnVuYygpe1xuICAgICAgICBsZXQgZGF0YSA9IHRoaXMucG9wRGF0YTtcbiAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgXCIxXCI6IHsgbmFtZTogXCLkvZPlipt4MVwiLCBpbmRleDogQVdBUkQuUE9XRVIgfSxcbiAgICAgICAgICAgIFwiMTBcIjogeyBuYW1lOiBcIueCuOW8uXgxXCIsIGluZGV4OiBBV0FSRC5CT09NIH0sXG4gICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgXCIxMlwiOiB7IG5hbWU6IFwi55+z5YyW5omL5YaMeDFcIiwgaW5kZXg6IEFXQVJELlNIT1VDRSB9LFxuICAgICAgICAgICAgXCIzMVwiOiB7IG5hbWU6IFwi5LqU5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfNSB9LFxuICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBfYXdhcmQgPSBhd2FyZFtkYXRhLmF3YXJkXVxuICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgIH0sXG4gICAgLy8g5aKe5Yqg5pi+56S65by55Ye66I635b6X54mp5ZOB55qE5by556qXXG4gICAgLy8g5aWW5ZOB57G75Z6LIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICBzaG93UG9wKGdvb2ROYW1lLCBnb29kTnVtYmVyLCBnY051bWJlciwgdGV4dE51bWJlcikge1xuICAgICAgICB0aGlzLkdldEdvb2RMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGV4dC5zdHJpbmcgPSBg6I635b6XJHtnb29kTmFtZX1gO1xuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Bd2FyZEZyYW1lc1tnb29kTnVtYmVyXTtcbiAgICAgICAgbGV0IGxheW91dDEgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMVwiKTtcbiAgICAgICAgbGV0IGxheW91dDIgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgaWYgKGdjTnVtYmVyKSB7XG4gICAgICAgICAgICBsYXlvdXQxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGJsID0gbGF5b3V0MS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDojrflvpflhYPlrp0rJHtnY051bWJlcn1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXlvdXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0TnVtYmVyKSB7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheW91dDIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuVGV4dEZyYW1lc1t0ZXh0TnVtYmVyIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDpgIDlh7rnmbvpmYZcbiAgICBFeGl0V3hMb2dpbigpIHtcbiAgICAgICAgLy8g5riF5o6JdG9rZW5cbiAgICAgICAgY2Mud3hUb2tlbiA9IG51bGw7XG4gICAgICAgIGNjLnd4TG9naW5SZXN1bHRjb2RlID0gbnVsbDtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvZ2luXCIpO1xuICAgIH0sXG4gICAgLy8g5pi+56S655So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmL7npLrpmpDnp4HmlL/nrZZcbiAgICBzaG93VXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIOiuvue9rueUqOaIt+WNj+iurlxuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcml2YWN5XCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxufSk7XG4iXX0=