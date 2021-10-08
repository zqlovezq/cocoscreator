
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Config');
require('./assets/Script/Hook');
require('./assets/Script/IndexMain');
require('./assets/Script/Level');
require('./assets/Script/MD5');
require('./assets/Script/Main');
require('./assets/Script/Tools');
require('./assets/Script/login');
require('./assets/migration/use_reversed_rotateBy');

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
//------QC-SOURCE-SPLIT------

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/migration/use_reversed_rotateBy.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '1a8c0/npapCw52O67NIaoqR', 'use_reversed_rotateBy');
// migration/use_reversed_rotateBy.js

"use strict";

/*
 * This script is automatically generated by Cocos Creator and is only used for projects compatible with v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 versions.
 * You do not need to manually add this script in any other project.
 * If you don't use cc.Action in your project, you can delete this script directly.
 * If your project is hosted in VCS such as git, submit this script together.
 *
 * 此脚本由 Cocos Creator 自动生成，仅用于兼容 v2.1.0/v2.1.1/v2.3.0/v2.3.1/v2.3.2 版本的工程，
 * 你无需在任何其它项目中手动添加此脚本。
 * 如果你的项目中没用到 Action，可直接删除该脚本。
 * 如果你的项目有托管于 git 等版本库，请将此脚本一并上传。
 */
cc.RotateBy._reverse = true;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9taWdyYXRpb24vdXNlX3JldmVyc2VkX3JvdGF0ZUJ5LmpzIl0sIm5hbWVzIjpbImNjIiwiUm90YXRlQnkiLCJfcmV2ZXJzZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUFBLEVBQUUsQ0FBQ0MsUUFBSCxDQUFZQyxRQUFaLEdBQXVCLElBQXZCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvKlxuICogVGhpcyBzY3JpcHQgaXMgYXV0b21hdGljYWxseSBnZW5lcmF0ZWQgYnkgQ29jb3MgQ3JlYXRvciBhbmQgaXMgb25seSB1c2VkIGZvciBwcm9qZWN0cyBjb21wYXRpYmxlIHdpdGggdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiB2ZXJzaW9ucy5cbiAqIFlvdSBkbyBub3QgbmVlZCB0byBtYW51YWxseSBhZGQgdGhpcyBzY3JpcHQgaW4gYW55IG90aGVyIHByb2plY3QuXG4gKiBJZiB5b3UgZG9uJ3QgdXNlIGNjLkFjdGlvbiBpbiB5b3VyIHByb2plY3QsIHlvdSBjYW4gZGVsZXRlIHRoaXMgc2NyaXB0IGRpcmVjdGx5LlxuICogSWYgeW91ciBwcm9qZWN0IGlzIGhvc3RlZCBpbiBWQ1Mgc3VjaCBhcyBnaXQsIHN1Ym1pdCB0aGlzIHNjcmlwdCB0b2dldGhlci5cbiAqXG4gKiDmraTohJrmnKznlLEgQ29jb3MgQ3JlYXRvciDoh6rliqjnlJ/miJDvvIzku4XnlKjkuo7lhbzlrrkgdjIuMS4wL3YyLjEuMS92Mi4zLjAvdjIuMy4xL3YyLjMuMiDniYjmnKznmoTlt6XnqIvvvIxcbiAqIOS9oOaXoOmcgOWcqOS7u+S9leWFtuWug+mhueebruS4reaJi+WKqOa3u+WKoOatpOiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5Lit5rKh55So5YiwIEFjdGlvbu+8jOWPr+ebtOaOpeWIoOmZpOivpeiEmuacrOOAglxuICog5aaC5p6c5L2g55qE6aG555uu5pyJ5omY566h5LqOIGdpdCDnrYnniYjmnKzlupPvvIzor7flsIbmraTohJrmnKzkuIDlubbkuIrkvKDjgIJcbiAqL1xuXG5jYy5Sb3RhdGVCeS5fcmV2ZXJzZSA9IHRydWU7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/MD5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'd3587Rv7sxDF50sBHdGpncc', 'MD5');
// Script/MD5.js

"use strict";

function md5(string) {
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
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
  lX8 = lX & 0x80000000;
  lY8 = lY & 0x80000000;
  lX4 = lX & 0x40000000;
  lY4 = lY & 0x40000000;
  lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

  if (lX4 & lY4) {
    return lResult ^ 0x80000000 ^ lX8 ^ lY8;
  }

  if (lX4 | lY4) {
    if (lResult & 0x40000000) {
      return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
    } else {
      return lResult ^ 0x40000000 ^ lX8 ^ lY8;
    }
  } else {
    return lResult ^ lX8 ^ lY8;
  }
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
  var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
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
  lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
  lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
  lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
  return lWordArray;
}

function WordToHex(lValue) {
  var WordToHexValue = "",
      WordToHexValue_temp = "",
      lByte,
      lCount;

  for (lCount = 0; lCount <= 3; lCount++) {
    lByte = lValue >>> lCount * 8 & 255;
    WordToHexValue_temp = "0" + lByte.toString(16);
    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
  }

  return WordToHexValue;
}

function Utf8Encode(string) {
  var utftext = "";

  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192);
      utftext += String.fromCharCode(c & 63 | 128);
    } else {
      utftext += String.fromCharCode(c >> 12 | 224);
      utftext += String.fromCharCode(c >> 6 & 63 | 128);
      utftext += String.fromCharCode(c & 63 | 128);
    }
  }

  return utftext;
}

module.exports = md5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTUQ1LmpzIl0sIm5hbWVzIjpbIm1kNSIsInN0cmluZyIsIngiLCJBcnJheSIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsImEiLCJiIiwiYyIsImQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJVdGY4RW5jb2RlIiwiQ29udmVydFRvV29yZEFycmF5IiwibGVuZ3RoIiwiRkYiLCJHRyIsIkhIIiwiSUkiLCJBZGRVbnNpZ25lZCIsImNwcm9fcHNpZCIsImNwcm9fcHN3aWR0aCIsImNwcm9fcHNoZWlnaHQiLCJ0ZW1wIiwiV29yZFRvSGV4IiwidG9Mb3dlckNhc2UiLCJSb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiRiIsInkiLCJ6IiwiRyIsIkgiLCJJIiwicyIsImFjIiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNfdGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc190ZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIldvcmRUb0hleFZhbHVlIiwiV29yZFRvSGV4VmFsdWVfdGVtcCIsImxCeXRlIiwibENvdW50IiwidG9TdHJpbmciLCJzdWJzdHIiLCJ1dGZ0ZXh0IiwibiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCLE1BQUlDLENBQUMsR0FBR0MsS0FBSyxFQUFiO0FBQ0EsTUFBSUMsQ0FBSixFQUFPQyxFQUFQLEVBQVdDLEVBQVgsRUFBZUMsRUFBZixFQUFtQkMsRUFBbkIsRUFBdUJDLENBQXZCLEVBQTBCQyxDQUExQixFQUE2QkMsQ0FBN0IsRUFBZ0NDLENBQWhDO0FBQ0EsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFBQSxNQUFhQyxHQUFHLEdBQUcsRUFBbkI7QUFBQSxNQUF1QkMsR0FBRyxHQUFHLEVBQTdCO0FBQUEsTUFBaUNDLEdBQUcsR0FBRyxFQUF2QztBQUEyQyxNQUFJQyxHQUFHLEdBQUcsQ0FBVjtBQUFBLE1BQWFDLEdBQUcsR0FBRyxDQUFuQjtBQUFBLE1BQXNCQyxHQUFHLEdBQUcsRUFBNUI7QUFBQSxNQUFnQ0MsR0FBRyxHQUFHLEVBQXRDO0FBQTBDLE1BQUlDLEdBQUcsR0FBRyxDQUFWO0FBQUEsTUFBYUMsR0FBRyxHQUFHLEVBQW5CO0FBQUEsTUFBdUJDLEdBQUcsR0FBRyxFQUE3QjtBQUFBLE1BQWlDQyxHQUFHLEdBQUcsRUFBdkM7QUFBMkMsTUFBSUMsR0FBRyxHQUFHLENBQVY7QUFBQSxNQUFhQyxHQUFHLEdBQUcsRUFBbkI7QUFBQSxNQUF1QkMsR0FBRyxHQUFHLEVBQTdCO0FBQUEsTUFBaUNDLEdBQUcsR0FBRyxFQUF2QztBQUEyQzNCLEVBQUFBLE1BQU0sR0FBRzRCLFVBQVUsQ0FBQzVCLE1BQUQsQ0FBbkI7QUFBNkJDLEVBQUFBLENBQUMsR0FBRzRCLGtCQUFrQixDQUFDN0IsTUFBRCxDQUF0QjtBQUFnQ1EsRUFBQUEsQ0FBQyxHQUFHLFVBQUo7QUFBZ0JDLEVBQUFBLENBQUMsR0FBRyxVQUFKO0FBQWdCQyxFQUFBQSxDQUFDLEdBQUcsVUFBSjtBQUFnQkMsRUFBQUEsQ0FBQyxHQUFHLFVBQUo7O0FBQ3hSLE9BQUtSLENBQUMsR0FBRyxDQUFULEVBQVlBLENBQUMsR0FBR0YsQ0FBQyxDQUFDNkIsTUFBbEIsRUFBMEIzQixDQUFDLElBQUksRUFBL0IsRUFBbUM7QUFDL0JDLElBQUFBLEVBQUUsR0FBR0ksQ0FBTDtBQUFRSCxJQUFBQSxFQUFFLEdBQUdJLENBQUw7QUFBUUgsSUFBQUEsRUFBRSxHQUFHSSxDQUFMO0FBQVFILElBQUFBLEVBQUUsR0FBR0ksQ0FBTDtBQUN4QkgsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJTLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NELElBQUFBLENBQUMsR0FBR29CLEVBQUUsQ0FBQ3BCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCVSxHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDSCxJQUFBQSxDQUFDLEdBQUdxQixFQUFFLENBQUNyQixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QlcsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ0wsSUFBQUEsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJZLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NQLElBQUFBLENBQUMsR0FBR3VCLEVBQUUsQ0FBQ3ZCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVYsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCUyxHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDRCxJQUFBQSxDQUFDLEdBQUdvQixFQUFFLENBQUNwQixDQUFELEVBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFULENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QlUsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ0gsSUFBQUEsQ0FBQyxHQUFHcUIsRUFBRSxDQUFDckIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhUixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJXLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NMLElBQUFBLENBQUMsR0FBR3NCLEVBQUUsQ0FBQ3RCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCWSxHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDUCxJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QlMsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ0QsSUFBQUEsQ0FBQyxHQUFHb0IsRUFBRSxDQUFDcEIsQ0FBRCxFQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJVLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NILElBQUFBLENBQUMsR0FBR3FCLEVBQUUsQ0FBQ3JCLENBQUQsRUFBSUMsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYVIsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCVyxHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdETCxJQUFBQSxDQUFDLEdBQUdzQixFQUFFLENBQUN0QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFQLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QlksR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRFAsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0JTLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RELElBQUFBLENBQUMsR0FBR29CLEVBQUUsQ0FBQ3BCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCVSxHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdESCxJQUFBQSxDQUFDLEdBQUdxQixFQUFFLENBQUNyQixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QlcsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnREwsSUFBQUEsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0JZLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RQLElBQUFBLENBQUMsR0FBR3dCLEVBQUUsQ0FBQ3hCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVYsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCYSxHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDTCxJQUFBQSxDQUFDLEdBQUdxQixFQUFFLENBQUNyQixDQUFELEVBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFULENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QmMsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1AsSUFBQUEsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhUixDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0JlLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RULElBQUFBLENBQUMsR0FBR3VCLEVBQUUsQ0FBQ3ZCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCZ0IsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1gsSUFBQUEsQ0FBQyxHQUFHd0IsRUFBRSxDQUFDeEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJhLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NMLElBQUFBLENBQUMsR0FBR3FCLEVBQUUsQ0FBQ3JCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCYyxHQUF4QixFQUE2QixTQUE3QixDQUFOO0FBQStDUCxJQUFBQSxDQUFDLEdBQUdzQixFQUFFLENBQUN0QixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QmUsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRFQsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJnQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDWCxJQUFBQSxDQUFDLEdBQUd3QixFQUFFLENBQUN4QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QmEsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUNobkNMLElBQUFBLENBQUMsR0FBR3FCLEVBQUUsQ0FBQ3JCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCYyxHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdEUCxJQUFBQSxDQUFDLEdBQUdzQixFQUFFLENBQUN0QixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QmUsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1QsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJnQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDWCxJQUFBQSxDQUFDLEdBQUd3QixFQUFFLENBQUN4QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QmEsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnREwsSUFBQUEsQ0FBQyxHQUFHcUIsRUFBRSxDQUFDckIsQ0FBRCxFQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJjLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NQLElBQUFBLENBQUMsR0FBR3NCLEVBQUUsQ0FBQ3RCLENBQUQsRUFBSUMsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYVIsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCZSxHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDVCxJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFQLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QmdCLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RYLElBQUFBLENBQUMsR0FBR3lCLEVBQUUsQ0FBQ3pCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVYsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCaUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1QsSUFBQUEsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBRCxFQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJrQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDWCxJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3Qm1CLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RiLElBQUFBLENBQUMsR0FBR3dCLEVBQUUsQ0FBQ3hCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCb0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRGYsSUFBQUEsQ0FBQyxHQUFHeUIsRUFBRSxDQUFDekIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJpQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDVCxJQUFBQSxDQUFDLEdBQUdzQixFQUFFLENBQUN0QixDQUFELEVBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFULENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QmtCLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NYLElBQUFBLENBQUMsR0FBR3VCLEVBQUUsQ0FBQ3ZCLENBQUQsRUFBSUMsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYVIsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCbUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ2IsSUFBQUEsQ0FBQyxHQUFHd0IsRUFBRSxDQUFDeEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0JvQixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdEZixJQUFBQSxDQUFDLEdBQUd5QixFQUFFLENBQUN6QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QmlCLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RULElBQUFBLENBQUMsR0FBR3NCLEVBQUUsQ0FBQ3RCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCa0IsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1gsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhUixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJtQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDYixJQUFBQSxDQUFDLEdBQUd3QixFQUFFLENBQUN4QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFQLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1Qm9CLEdBQXZCLEVBQTRCLFNBQTVCLENBQU47QUFBOENmLElBQUFBLENBQUMsR0FBR3lCLEVBQUUsQ0FBQ3pCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVYsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCaUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ1QsSUFBQUEsQ0FBQyxHQUFHc0IsRUFBRSxDQUFDdEIsQ0FBRCxFQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVCxDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0JrQixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdEWCxJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3Qm1CLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RiLElBQUFBLENBQUMsR0FBR3dCLEVBQUUsQ0FBQ3hCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCb0IsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ2YsSUFBQUEsQ0FBQyxHQUFHMEIsRUFBRSxDQUFDMUIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJxQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDYixJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFULENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QnNCLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NmLElBQUFBLENBQUMsR0FBR3dCLEVBQUUsQ0FBQ3hCLENBQUQsRUFBSUMsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYVIsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCdUIsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRGpCLElBQUFBLENBQUMsR0FBR3lCLEVBQUUsQ0FBQ3pCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCd0IsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ25CLElBQUFBLENBQUMsR0FBRzBCLEVBQUUsQ0FBQzFCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVYsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCcUIsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRGIsSUFBQUEsQ0FBQyxHQUFHdUIsRUFBRSxDQUFDdkIsQ0FBRCxFQUFJSCxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVCxDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJzQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDZixJQUFBQSxDQUFDLEdBQUd3QixFQUFFLENBQUN4QixDQUFELEVBQUlDLENBQUosRUFBT0gsQ0FBUCxFQUFVQyxDQUFWLEVBQWFSLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QnVCLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RqQixJQUFBQSxDQUFDLEdBQUd5QixFQUFFLENBQUN6QixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVSCxDQUFWLEVBQWFQLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QndCLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NuQixJQUFBQSxDQUFDLEdBQUcwQixFQUFFLENBQUMxQixDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFWLENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLENBQUwsQ0FBZCxFQUF1QnFCLEdBQXZCLEVBQTRCLFVBQTVCLENBQU47QUFBK0NiLElBQUFBLENBQUMsR0FBR3VCLEVBQUUsQ0FBQ3ZCLENBQUQsRUFBSUgsQ0FBSixFQUFPQyxDQUFQLEVBQVVDLENBQVYsRUFBYVQsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsRUFBTCxDQUFkLEVBQXdCc0IsR0FBeEIsRUFBNkIsVUFBN0IsQ0FBTjtBQUFnRGYsSUFBQUEsQ0FBQyxHQUFHd0IsRUFBRSxDQUFDeEIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9ILENBQVAsRUFBVUMsQ0FBVixFQUFhUixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJ1QixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDakIsSUFBQUEsQ0FBQyxHQUFHeUIsRUFBRSxDQUFDekIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUgsQ0FBVixFQUFhUCxDQUFDLENBQUNFLENBQUMsR0FBRyxFQUFMLENBQWQsRUFBd0J3QixHQUF4QixFQUE2QixVQUE3QixDQUFOO0FBQWdEbkIsSUFBQUEsQ0FBQyxHQUFHMEIsRUFBRSxDQUFDMUIsQ0FBRCxFQUFJQyxDQUFKLEVBQU9DLENBQVAsRUFBVUMsQ0FBVixFQUFhVixDQUFDLENBQUNFLENBQUMsR0FBRyxDQUFMLENBQWQsRUFBdUJxQixHQUF2QixFQUE0QixVQUE1QixDQUFOO0FBQStDYixJQUFBQSxDQUFDLEdBQUd1QixFQUFFLENBQUN2QixDQUFELEVBQUlILENBQUosRUFBT0MsQ0FBUCxFQUFVQyxDQUFWLEVBQWFULENBQUMsQ0FBQ0UsQ0FBQyxHQUFHLEVBQUwsQ0FBZCxFQUF3QnNCLEdBQXhCLEVBQTZCLFVBQTdCLENBQU47QUFBZ0RmLElBQUFBLENBQUMsR0FBR3dCLEVBQUUsQ0FBQ3hCLENBQUQsRUFBSUMsQ0FBSixFQUFPSCxDQUFQLEVBQVVDLENBQVYsRUFBYVIsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCdUIsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ2pCLElBQUFBLENBQUMsR0FBR3lCLEVBQUUsQ0FBQ3pCLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLEVBQVVILENBQVYsRUFBYVAsQ0FBQyxDQUFDRSxDQUFDLEdBQUcsQ0FBTCxDQUFkLEVBQXVCd0IsR0FBdkIsRUFBNEIsVUFBNUIsQ0FBTjtBQUErQ25CLElBQUFBLENBQUMsR0FBRzJCLFdBQVcsQ0FBQzNCLENBQUQsRUFBSUosRUFBSixDQUFmO0FBQXdCSyxJQUFBQSxDQUFDLEdBQUcwQixXQUFXLENBQUMxQixDQUFELEVBQUlKLEVBQUosQ0FBZjtBQUF3QkssSUFBQUEsQ0FBQyxHQUFHeUIsV0FBVyxDQUFDekIsQ0FBRCxFQUFJSixFQUFKLENBQWY7QUFBd0JLLElBQUFBLENBQUMsR0FBR3dCLFdBQVcsQ0FBQ3hCLENBQUQsRUFBSUosRUFBSixDQUFmO0FBQ2w0RDs7QUFFRCxNQUFJNkIsU0FBUyxHQUFHLFVBQWhCO0FBQTRCLE1BQUlDLFlBQVksR0FBRyxHQUFuQjtBQUF3QixNQUFJQyxhQUFhLEdBQUcsR0FBcEI7QUFHcEQsTUFBSUMsSUFBSSxHQUFHQyxTQUFTLENBQUNoQyxDQUFELENBQVQsR0FBZWdDLFNBQVMsQ0FBQy9CLENBQUQsQ0FBeEIsR0FBOEIrQixTQUFTLENBQUM5QixDQUFELENBQXZDLEdBQTZDOEIsU0FBUyxDQUFDN0IsQ0FBRCxDQUFqRTtBQUFzRSxTQUFPNEIsSUFBSSxDQUFDRSxXQUFMLEVBQVA7QUFDekU7O0FBQ0QsU0FBU0MsVUFBVCxDQUFvQkMsTUFBcEIsRUFBNEJDLFVBQTVCLEVBQXdDO0FBQ3BDLFNBQVFELE1BQU0sSUFBSUMsVUFBWCxHQUEwQkQsTUFBTSxLQUFNLEtBQUtDLFVBQWxEO0FBQ0g7O0FBQ0QsU0FBU1QsV0FBVCxDQUFxQlUsRUFBckIsRUFBeUJDLEVBQXpCLEVBQTZCO0FBQ3pCLE1BQUlDLEdBQUosRUFBU0MsR0FBVCxFQUFjQyxHQUFkLEVBQW1CQyxHQUFuQixFQUF3QkMsT0FBeEI7QUFBaUNGLEVBQUFBLEdBQUcsR0FBSUosRUFBRSxHQUFHLFVBQVo7QUFBeUJLLEVBQUFBLEdBQUcsR0FBSUosRUFBRSxHQUFHLFVBQVo7QUFBeUJDLEVBQUFBLEdBQUcsR0FBSUYsRUFBRSxHQUFHLFVBQVo7QUFBeUJHLEVBQUFBLEdBQUcsR0FBSUYsRUFBRSxHQUFHLFVBQVo7QUFDNUdLLEVBQUFBLE9BQU8sR0FBRyxDQUFDTixFQUFFLEdBQUcsVUFBTixLQUFxQkMsRUFBRSxHQUFHLFVBQTFCLENBQVY7O0FBQWlELE1BQUlDLEdBQUcsR0FBR0MsR0FBVixFQUFlO0FBQzVELFdBQVFHLE9BQU8sR0FBRyxVQUFWLEdBQXVCRixHQUF2QixHQUE2QkMsR0FBckM7QUFDSDs7QUFDRCxNQUFJSCxHQUFHLEdBQUdDLEdBQVYsRUFBZTtBQUNYLFFBQUlHLE9BQU8sR0FBRyxVQUFkLEVBQTBCO0FBQ3RCLGFBQVFBLE9BQU8sR0FBRyxVQUFWLEdBQXVCRixHQUF2QixHQUE2QkMsR0FBckM7QUFDSCxLQUZELE1BRU87QUFDSCxhQUFRQyxPQUFPLEdBQUcsVUFBVixHQUF1QkYsR0FBdkIsR0FBNkJDLEdBQXJDO0FBQ0g7QUFDSixHQU5ELE1BTU87QUFDSCxXQUFRQyxPQUFPLEdBQUdGLEdBQVYsR0FBZ0JDLEdBQXhCO0FBQ0g7QUFDSjs7QUFDRCxTQUFTRSxDQUFULENBQVduRCxDQUFYLEVBQWNvRCxDQUFkLEVBQWlCQyxDQUFqQixFQUFvQjtBQUNoQixTQUFRckQsQ0FBQyxHQUFHb0QsQ0FBTCxHQUFZLENBQUNwRCxDQUFGLEdBQU9xRCxDQUF6QjtBQUNIOztBQUNELFNBQVNDLENBQVQsQ0FBV3RELENBQVgsRUFBY29ELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQ2hCLFNBQVFyRCxDQUFDLEdBQUdxRCxDQUFMLEdBQVdELENBQUMsR0FBSSxDQUFDQyxDQUF4QjtBQUNIOztBQUNELFNBQVNFLENBQVQsQ0FBV3ZELENBQVgsRUFBY29ELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQUUsU0FBUXJELENBQUMsR0FBR29ELENBQUosR0FBUUMsQ0FBaEI7QUFBcUI7O0FBQzNDLFNBQVNHLENBQVQsQ0FBV3hELENBQVgsRUFBY29ELENBQWQsRUFBaUJDLENBQWpCLEVBQW9CO0FBQUUsU0FBUUQsQ0FBQyxJQUFJcEQsQ0FBQyxHQUFJLENBQUNxRCxDQUFWLENBQVQ7QUFBMEI7O0FBQ2hELFNBQVN2QixFQUFULENBQVl2QixDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QlYsQ0FBeEIsRUFBMkJ5RCxDQUEzQixFQUE4QkMsRUFBOUIsRUFBa0M7QUFDOUJuRCxFQUFBQSxDQUFDLEdBQUcyQixXQUFXLENBQUMzQixDQUFELEVBQUkyQixXQUFXLENBQUNBLFdBQVcsQ0FBQ2lCLENBQUMsQ0FBQzNDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLENBQUYsRUFBYVYsQ0FBYixDQUFaLEVBQTZCMEQsRUFBN0IsQ0FBZixDQUFmO0FBQWlFLFNBQU94QixXQUFXLENBQUNPLFVBQVUsQ0FBQ2xDLENBQUQsRUFBSWtELENBQUosQ0FBWCxFQUFtQmpELENBQW5CLENBQWxCO0FBQ3BFOztBQUNELFNBQVN1QixFQUFULENBQVl4QixDQUFaLEVBQWVDLENBQWYsRUFBa0JDLENBQWxCLEVBQXFCQyxDQUFyQixFQUF3QlYsQ0FBeEIsRUFBMkJ5RCxDQUEzQixFQUE4QkMsRUFBOUIsRUFBa0M7QUFDOUJuRCxFQUFBQSxDQUFDLEdBQUcyQixXQUFXLENBQUMzQixDQUFELEVBQUkyQixXQUFXLENBQUNBLFdBQVcsQ0FBQ29CLENBQUMsQ0FBQzlDLENBQUQsRUFBSUMsQ0FBSixFQUFPQyxDQUFQLENBQUYsRUFBYVYsQ0FBYixDQUFaLEVBQTZCMEQsRUFBN0IsQ0FBZixDQUFmO0FBSUEsU0FBT3hCLFdBQVcsQ0FBQ08sVUFBVSxDQUFDbEMsQ0FBRCxFQUFJa0QsQ0FBSixDQUFYLEVBQW1CakQsQ0FBbkIsQ0FBbEI7QUFDSDs7QUFDRCxTQUFTd0IsRUFBVCxDQUFZekIsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JWLENBQXhCLEVBQTJCeUQsQ0FBM0IsRUFBOEJDLEVBQTlCLEVBQWtDO0FBQzlCbkQsRUFBQUEsQ0FBQyxHQUFHMkIsV0FBVyxDQUFDM0IsQ0FBRCxFQUFJMkIsV0FBVyxDQUFDQSxXQUFXLENBQUNxQixDQUFDLENBQUMvQyxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFGLEVBQWFWLENBQWIsQ0FBWixFQUE2QjBELEVBQTdCLENBQWYsQ0FBZjtBQUFpRSxTQUFPeEIsV0FBVyxDQUFDTyxVQUFVLENBQUNsQyxDQUFELEVBQUlrRCxDQUFKLENBQVgsRUFBbUJqRCxDQUFuQixDQUFsQjtBQUNwRTs7QUFDRCxTQUFTeUIsRUFBVCxDQUFZMUIsQ0FBWixFQUFlQyxDQUFmLEVBQWtCQyxDQUFsQixFQUFxQkMsQ0FBckIsRUFBd0JWLENBQXhCLEVBQTJCeUQsQ0FBM0IsRUFBOEJDLEVBQTlCLEVBQWtDO0FBQzlCbkQsRUFBQUEsQ0FBQyxHQUFHMkIsV0FBVyxDQUFDM0IsQ0FBRCxFQUFJMkIsV0FBVyxDQUFDQSxXQUFXLENBQUNzQixDQUFDLENBQUNoRCxDQUFELEVBQUlDLENBQUosRUFBT0MsQ0FBUCxDQUFGLEVBQWFWLENBQWIsQ0FBWixFQUE2QjBELEVBQTdCLENBQWYsQ0FBZjtBQUFpRSxTQUFPeEIsV0FBVyxDQUFDTyxVQUFVLENBQUNsQyxDQUFELEVBQUlrRCxDQUFKLENBQVgsRUFBbUJqRCxDQUFuQixDQUFsQjtBQUNwRTs7QUFDRCxTQUFTb0Isa0JBQVQsQ0FBNEI3QixNQUE1QixFQUFvQztBQUNoQyxNQUFJNEQsVUFBSjtBQUNBLE1BQUlDLGNBQWMsR0FBRzdELE1BQU0sQ0FBQzhCLE1BQTVCO0FBQ0EsTUFBSWdDLG9CQUFvQixHQUFHRCxjQUFjLEdBQUcsQ0FBNUM7QUFBK0MsTUFBSUUsb0JBQW9CLEdBQ3ZFLENBQUNELG9CQUFvQixHQUFJQSxvQkFBb0IsR0FBRyxFQUFoRCxJQUF1RCxFQURSO0FBQ1ksTUFBSUUsY0FBYyxHQUFHLENBQUNELG9CQUFvQixHQUFHLENBQXhCLElBQTZCLEVBQWxEO0FBQXNELE1BQUlFLFVBQVUsR0FBRy9ELEtBQUssQ0FBQzhELGNBQWMsR0FBRyxDQUFsQixDQUF0QjtBQUE0QyxNQUFJRSxhQUFhLEdBQUcsQ0FBcEI7QUFBdUIsTUFBSUMsVUFBVSxHQUFHLENBQWpCOztBQUNwTCxTQUFPQSxVQUFVLEdBQUdOLGNBQXBCLEVBQW9DO0FBQ2hDRCxJQUFBQSxVQUFVLEdBQUcsQ0FBQ08sVUFBVSxHQUFJQSxVQUFVLEdBQUcsQ0FBNUIsSUFBa0MsQ0FBL0M7QUFBa0RELElBQUFBLGFBQWEsR0FBSUMsVUFBVSxHQUFHLENBQWQsR0FBbUIsQ0FBbkM7QUFDbERGLElBQUFBLFVBQVUsQ0FBQ0wsVUFBRCxDQUFWLEdBQTBCSyxVQUFVLENBQUNMLFVBQUQsQ0FBVixHQUEwQjVELE1BQU0sQ0FBQ29FLFVBQVAsQ0FBa0JELFVBQWxCLEtBQWlDRCxhQUFyRjtBQUFzR0MsSUFBQUEsVUFBVTtBQUNuSDs7QUFDRFAsRUFBQUEsVUFBVSxHQUFHLENBQUNPLFVBQVUsR0FBSUEsVUFBVSxHQUFHLENBQTVCLElBQWtDLENBQS9DO0FBQWtERCxFQUFBQSxhQUFhLEdBQUlDLFVBQVUsR0FBRyxDQUFkLEdBQW1CLENBQW5DO0FBQ2xERixFQUFBQSxVQUFVLENBQUNMLFVBQUQsQ0FBVixHQUF5QkssVUFBVSxDQUFDTCxVQUFELENBQVYsR0FBMEIsUUFBUU0sYUFBM0Q7QUFBMkVELEVBQUFBLFVBQVUsQ0FBQ0QsY0FBYyxHQUFHLENBQWxCLENBQVYsR0FBaUNILGNBQWMsSUFBSSxDQUFuRDtBQUFzREksRUFBQUEsVUFBVSxDQUFDRCxjQUFjLEdBQUcsQ0FBbEIsQ0FBVixHQUFpQ0gsY0FBYyxLQUFLLEVBQXBEO0FBQXdELFNBQU9JLFVBQVA7QUFDNUw7O0FBQ0QsU0FBU3pCLFNBQVQsQ0FBbUJHLE1BQW5CLEVBQTJCO0FBQ3ZCLE1BQUkwQixjQUFjLEdBQUcsRUFBckI7QUFBQSxNQUF5QkMsbUJBQW1CLEdBQUcsRUFBL0M7QUFBQSxNQUFtREMsS0FBbkQ7QUFBQSxNQUEwREMsTUFBMUQ7O0FBQWtFLE9BQUtBLE1BQU0sR0FBRyxDQUFkLEVBQWlCQSxNQUFNLElBQUksQ0FBM0IsRUFBOEJBLE1BQU0sRUFBcEMsRUFBd0M7QUFDdEdELElBQUFBLEtBQUssR0FBSTVCLE1BQU0sS0FBTTZCLE1BQU0sR0FBRyxDQUF0QixHQUE0QixHQUFwQztBQUNBRixJQUFBQSxtQkFBbUIsR0FBRyxNQUFNQyxLQUFLLENBQUNFLFFBQU4sQ0FBZSxFQUFmLENBQTVCO0FBQWdESixJQUFBQSxjQUFjLEdBQzlEQSxjQUFjLEdBQUdDLG1CQUFtQixDQUFDSSxNQUFwQixDQUEyQkosbUJBQW1CLENBQUN4QyxNQUFwQixHQUE2QixDQUF4RCxFQUEyRCxDQUEzRCxDQUQrQjtBQUVuRDs7QUFDRCxTQUFPdUMsY0FBUDtBQUNIOztBQUdELFNBQVN6QyxVQUFULENBQW9CNUIsTUFBcEIsRUFBNEI7QUFDeEIsTUFBSTJFLE9BQU8sR0FBRyxFQUFkOztBQUNBLE9BQUssSUFBSUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRzVFLE1BQU0sQ0FBQzhCLE1BQTNCLEVBQW1DOEMsQ0FBQyxFQUFwQyxFQUF3QztBQUNwQyxRQUFJbEUsQ0FBQyxHQUFHVixNQUFNLENBQUNvRSxVQUFQLENBQWtCUSxDQUFsQixDQUFSOztBQUE4QixRQUFJbEUsQ0FBQyxHQUFHLEdBQVIsRUFBYTtBQUN2Q2lFLE1BQUFBLE9BQU8sSUFBSUUsTUFBTSxDQUFDQyxZQUFQLENBQW9CcEUsQ0FBcEIsQ0FBWDtBQUNILEtBRjZCLE1BRXZCLElBQUtBLENBQUMsR0FBRyxHQUFMLElBQWNBLENBQUMsR0FBRyxJQUF0QixFQUE2QjtBQUNoQ2lFLE1BQUFBLE9BQU8sSUFBSUUsTUFBTSxDQUFDQyxZQUFQLENBQXFCcEUsQ0FBQyxJQUFJLENBQU4sR0FBVyxHQUEvQixDQUFYO0FBQWdEaUUsTUFBQUEsT0FBTyxJQUFJRSxNQUFNLENBQUNDLFlBQVAsQ0FBcUJwRSxDQUFDLEdBQUcsRUFBTCxHQUFXLEdBQS9CLENBQVg7QUFDbkQsS0FGTSxNQUVBO0FBQ0hpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsSUFBSSxFQUFOLEdBQVksR0FBaEMsQ0FBWDtBQUFpRGlFLE1BQUFBLE9BQU8sSUFBSUUsTUFBTSxDQUFDQyxZQUFQLENBQXNCcEUsQ0FBQyxJQUFJLENBQU4sR0FBVyxFQUFaLEdBQWtCLEdBQXRDLENBQVg7QUFBdURpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsR0FBRyxFQUFMLEdBQVcsR0FBL0IsQ0FBWDtBQUMzRztBQUNKOztBQUNELFNBQU9pRSxPQUFQO0FBQ0g7O0FBRURJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpGLEdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZDUoc3RyaW5nKSB7ICBcbiAgICB2YXIgeCA9IEFycmF5KCk7ICBcbiAgICB2YXIgaywgQUEsIEJCLCBDQywgREQsIGEsIGIsIGMsIGQ7ICBcbiAgICB2YXIgUzExID0gNywgUzEyID0gMTIsIFMxMyA9IDE3LCBTMTQgPSAyMjsgdmFyIFMyMSA9IDUsIFMyMiA9IDksIFMyMyA9IDE0LCBTMjQgPSAyMDsgdmFyIFMzMSA9IDQsIFMzMiA9IDExLCBTMzMgPSAxNiwgUzM0ID0gMjM7IHZhciBTNDEgPSA2LCBTNDIgPSAxMCwgUzQzID0gMTUsIFM0NCA9IDIxOyBzdHJpbmcgPSBVdGY4RW5jb2RlKHN0cmluZyk7IHggPSBDb252ZXJ0VG9Xb3JkQXJyYXkoc3RyaW5nKTsgYSA9IDB4Njc0NTIzMDE7IGIgPSAweEVGQ0RBQjg5OyBjID0gMHg5OEJBRENGRTsgZCA9IDB4MTAzMjU0NzY7ICBcbiAgICBmb3IgKGsgPSAwOyBrIDwgeC5sZW5ndGg7IGsgKz0gMTYpIHsgIFxuICAgICAgICBBQSA9IGE7IEJCID0gYjsgQ0MgPSBjOyBERCA9IGQ7ICBcbiAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7IGMgPSBGRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTsgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7IGQgPSBGRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTsgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7IGEgPSBGRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTsgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7ICBcbiAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7IGEgPSBHRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTsgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpOyBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTsgZCA9IEhIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpOyBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpOyBkID0gSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7IGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpOyBjID0gSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7IGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTsgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpOyBhID0gSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7IGQgPSBJSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTsgYiA9IElJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpOyBhID0gQWRkVW5zaWduZWQoYSwgQUEpOyBiID0gQWRkVW5zaWduZWQoYiwgQkIpOyBjID0gQWRkVW5zaWduZWQoYywgQ0MpOyBkID0gQWRkVW5zaWduZWQoZCwgREQpOyAgXG4gICAgfSAgXG5cbiAgICB2YXIgY3Byb19wc2lkID0gXCJ1MjU3Mjk1NFwiOyB2YXIgY3Byb19wc3dpZHRoID0gOTY2OyB2YXIgY3Byb19wc2hlaWdodCA9IDEyMDsgIFxuXG5cbiAgICB2YXIgdGVtcCA9IFdvcmRUb0hleChhKSArIFdvcmRUb0hleChiKSArIFdvcmRUb0hleChjKSArIFdvcmRUb0hleChkKTsgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTsgIFxufSAgXG5mdW5jdGlvbiBSb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykgeyAgXG4gICAgcmV0dXJuIChsVmFsdWUgPDwgaVNoaWZ0Qml0cykgfCAobFZhbHVlID4+PiAoMzIgLSBpU2hpZnRCaXRzKSk7ICBcbn0gIFxuZnVuY3Rpb24gQWRkVW5zaWduZWQobFgsIGxZKSB7ICBcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0OyBsWDggPSAobFggJiAweDgwMDAwMDAwKTsgbFk4ID0gKGxZICYgMHg4MDAwMDAwMCk7IGxYNCA9IChsWCAmIDB4NDAwMDAwMDApOyBsWTQgPSAobFkgJiAweDQwMDAwMDAwKTsgIFxuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpOyBpZiAobFg0ICYgbFk0KSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZOCk7ICBcbiAgICB9ICBcbiAgICBpZiAobFg0IHwgbFk0KSB7ICBcbiAgICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gIFxuICAgIH0gZWxzZSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gbFg4IF4gbFk4KTsgIFxuICAgIH0gIFxufSAgXG5mdW5jdGlvbiBGKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHkpIHwgKCh+eCkgJiB6KTsgIFxufSAgXG5mdW5jdGlvbiBHKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHopIHwgKHkgJiAofnopKTsgIFxufSAgXG5mdW5jdGlvbiBIKHgsIHksIHopIHsgcmV0dXJuICh4IF4geSBeIHopOyB9ICBcbmZ1bmN0aW9uIEkoeCwgeSwgeikgeyByZXR1cm4gKHkgXiAoeCB8ICh+eikpKTsgfSAgXG5mdW5jdGlvbiBGRihhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEYoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChHKGIsIGMsIGQpLCB4KSwgYWMpKTsgIFxuXG5cblxuICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTsgIFxufSAgXG5mdW5jdGlvbiBISChhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEgoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChJKGIsIGMsIGQpLCB4KSwgYWMpKTsgcmV0dXJuIEFkZFVuc2lnbmVkKFJvdGF0ZUxlZnQoYSwgcyksIGIpOyAgXG59ICBcbmZ1bmN0aW9uIENvbnZlcnRUb1dvcmRBcnJheShzdHJpbmcpIHsgIFxuICAgIHZhciBsV29yZENvdW50OyAgXG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDsgIFxuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc190ZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODsgdmFyIGxOdW1iZXJPZldvcmRzX3RlbXAyID0gIFxuICAgIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAtIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAlIDY0KSkgLyA2NDsgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzX3RlbXAyICsgMSkgKiAxNjsgdmFyIGxXb3JkQXJyYXkgPSBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpOyB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7IHZhciBsQnl0ZUNvdW50ID0gMDsgIFxuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHsgIFxuICAgICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gKGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAoc3RyaW5nLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbikpOyBsQnl0ZUNvdW50Kys7ICBcbiAgICB9ICBcbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgKDB4ODAgPDwgbEJ5dGVQb3NpdGlvbik7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTsgcmV0dXJuIGxXb3JkQXJyYXk7ICBcbn0gIFxuZnVuY3Rpb24gV29yZFRvSGV4KGxWYWx1ZSkgeyAgXG4gICAgdmFyIFdvcmRUb0hleFZhbHVlID0gXCJcIiwgV29yZFRvSGV4VmFsdWVfdGVtcCA9IFwiXCIsIGxCeXRlLCBsQ291bnQ7IGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7ICBcbiAgICAgICAgbEJ5dGUgPSAobFZhbHVlID4+PiAobENvdW50ICogOCkpICYgMjU1OyAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlX3RlbXAgPSBcIjBcIiArIGxCeXRlLnRvU3RyaW5nKDE2KTsgV29yZFRvSGV4VmFsdWUgPSAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlICsgV29yZFRvSGV4VmFsdWVfdGVtcC5zdWJzdHIoV29yZFRvSGV4VmFsdWVfdGVtcC5sZW5ndGggLSAyLCAyKTsgIFxuICAgIH0gIFxuICAgIHJldHVybiBXb3JkVG9IZXhWYWx1ZTsgIFxufSAgXG5cblxuZnVuY3Rpb24gVXRmOEVuY29kZShzdHJpbmcpIHsgIFxuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjsgIFxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7ICBcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTsgaWYgKGMgPCAxMjgpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpOyAgXG4gICAgICAgIH0gZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTsgIFxuICAgICAgICB9IGVsc2UgeyAgXG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7IHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7ICBcbiAgICAgICAgfSAgXG4gICAgfSAgXG4gICAgcmV0dXJuIHV0ZnRleHQ7ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZDUgXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Level.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '19283dAXTFAOrQfB3/KaAjP', 'Level');
// Script/Level.js

"use strict";

//关卡数据
// 
module.exports = {
  "level0": {
    "id": "零",
    "score": 500,
    "maxScore": 1500,
    "totalScore": 1500,
    "extra": "red,mystery",
    "redPack": 88.88
  },
  "level1": {
    "id": "一",
    "score": 500,
    "maxScore": 1500,
    "totalScore": 1500,
    "good": "b|150,g|1350",
    "extra": "red",
    "redPack": 88.88
  },
  "level2": {
    "id": "二",
    "score": 925,
    "maxScore": 1840,
    "totalScore": 3340,
    "good": "b|300,g|940,m|200,d|400",
    "extra": "red",
    "redPack": 66.66
  },
  "level3": {
    "id": "三",
    "score": 1560,
    "maxScore": 1000,
    "totalScore": 4340,
    "good": "b|200,g|800",
    "redPack": 20.96
  },
  "level4": {
    "id": "四",
    "score": 2405,
    "maxScore": 1500,
    "totalScore": 5840,
    "good": "b|200,g|1225,m|75",
    "extra": "red",
    "redPack": 14.36
  },
  "level5": {
    "id": "五",
    "score": 3460,
    "maxScore": 1300,
    "totalScore": 7140,
    "good": "b|130,g|370,d|800",
    "boom": 1,
    "redPack": 10.71
  },
  "level6": {
    "id": "六",
    "score": 4725,
    "maxScore": 2000,
    "totalScore": 9140,
    "good": "b|200,d|1200,g|600",
    "redPack": 8.42
  },
  "level7": {
    "id": "七",
    "score": 6200,
    "maxScore": 1500,
    "totalScore": 10640,
    "good": "b|200,g|1000,d|400",
    "extra": "red,mystery",
    "boom": 2,
    "redPack": 6.88
  },
  "level8": {
    "id": "八",
    "score": 7500,
    "maxScore": 2000,
    "totalScore": 12640,
    "good": "b|200,g|1400,m|400",
    "redPack": 5.77
  },
  "level9": {
    "id": "九",
    "score": 9395,
    "maxScore": 2000,
    "totalScore": 14640,
    "good": "b|300,g|1300,d|400",
    "redPack": 4.94
  },
  "level10": {
    "id": "十",
    "score": 10500,
    "maxScore": 2000,
    "totalScore": 16640,
    "good": "b|200,g|1200,d|400,m|200",
    "extra": "red",
    "redPack": 4.30
  },
  "level11": {
    "id": "十一",
    "score": 12000,
    "maxScore": 1500,
    "totalScore": 18140,
    "good": "b|200,g|850,d|400",
    "mouse": "1",
    "extra": "red,mystery",
    "boom": 1,
    "redPack": 3.80
  },
  "level12": {
    "id": "十二",
    "score": 13000,
    "maxScore": 3000,
    "totalScore": 21140,
    "good": "b|200,g|1400,d|1200,m|200",
    "extra": "red",
    "redPack": 3.39
  },
  "level13": {
    "id": "十三",
    "score": 15700,
    "maxScore": 2500,
    "totalScore": 23640,
    "good": "b|200,g|1500,d|800",
    "extra": "red",
    "redPack": 3.05
  },
  "level14": {
    "id": "十四",
    "score": 17500,
    "maxScore": 2000,
    "totalScore": 25640,
    "good": "b|200,g|900,d|800",
    "mouse": "2",
    "boom": 2,
    "redPack": 2.76
  },
  "level15": {
    "id": "十五",
    "score": 18500,
    "maxScore": 3000,
    "totalScore": 28640,
    "good": "b|200,g|800,d|2000",
    "extra": "red,mystery",
    "redPack": 2.52
  },
  "level16": {
    "id": "十六",
    "score": 21000,
    "maxScore": 3000,
    "totalScore": 31640,
    "good": "b|200,g|1300,d|800",
    "mouse": ",1",
    "redPack": 2.32
  },
  "level17": {
    "id": "十七",
    "score": 22500,
    "maxScore": 3500,
    "totalScore": 35140,
    "good": "g|1125,b|175,m|100",
    "mouse": ",3",
    "redPack": 2.14
  },
  "level18": {
    "id": "十八",
    "score": 24000,
    "maxScore": 5000,
    "totalScore": 40140,
    "good": "g|1000,d|800,m|200",
    "extra": "red,mystery",
    "mouse": "4,4",
    "redPack": 1.99
  },
  "level19": {
    "id": "十九",
    "score": 30000,
    "maxScore": 4700,
    "totalScore": 44840,
    "good": "b|200,g|1100,d|1200,m|100",
    "mouse": ",3",
    "redPack": 1.85
  },
  "level20": {
    "id": "二十",
    "score": 33000,
    "maxScore": 4000,
    "totalScore": 48840,
    "good": "b|200,g|1300,m|200",
    "mouse": "4,3",
    "extra": "red",
    "boom": 1,
    "redPack": 1.73
  },
  "level21": {
    "id": "二十一",
    "score": 36500,
    "maxScore": 4000,
    "totalScore": 52840,
    "good": "g|500",
    "mouse": ",5",
    "boom": 1,
    "redPack": 1.62
  },
  "level22": {
    "id": "二十二",
    "score": 39000,
    "maxScore": 4000,
    "totalScore": 56840,
    "good": "d|4000",
    "extra": "red",
    "boom": 2,
    "redPack": 1.53
  },
  "level23": {
    "id": "二十三",
    "score": 41500,
    "maxScore": 4000,
    "totalScore": 60840,
    "good": "b|200,g|1500,m|200",
    "mouse": ",3",
    "extra": ",mystery",
    "boom": 2,
    "redPack": 1.44
  },
  "level24": {
    "id": "二十四",
    "score": 43500,
    "maxScore": 4000,
    "totalScore": 64840,
    "good": "b|200,g|1400,d|800,m|200",
    "mouse": ",2",
    "extra": "red",
    "redPack": 1.36
  },
  "level25": {
    "id": "二十五",
    "score": 46000,
    "maxScore": 4200,
    "totalScore": 69040,
    "mouse": ",6",
    "boom": 3,
    "redPack": 1.29
  },
  "level26": {
    "id": "二十六",
    "score": 49500,
    "maxScore": 5000,
    "totalScore": 74040,
    "mouse": "16,6",
    "boom": 1,
    "redPack": 1.22
  },
  "level27": {
    "id": "二十七",
    "score": 52500,
    "maxScore": 5000,
    "totalScore": 79040,
    "good": "b|200,g|500,d|3600",
    "mouse": ",1",
    "boom": 1,
    "extra": "red",
    "redPack": 1.17
  },
  "level28": {
    "id": "二十八",
    "score": 55500,
    "maxScore": 5000,
    "totalScore": 84040,
    "good": "b|200,g|1100,m|150,d|1200",
    "mouse": "5,3",
    "boom": 1,
    "extra": "red",
    "redPack": 1.11
  },
  "level29": {
    "id": "二十九",
    "score": 58000,
    "maxScore": 5000,
    "totalScore": 89040,
    "good": "b|200,g|1300,d|1200",
    "mouse": "4,3",
    "extra": "red",
    "boom": 1,
    "redPack": 1.06
  },
  "level30": {
    "id": "三十",
    "score": 62000,
    "maxScore": 5000,
    "totalScore": 94040,
    "good": "b|200,g|1250,d|2000",
    "mouse": "3,2",
    "boom": 3,
    "extra": "red",
    "redPack": 1.01
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTGV2ZWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFtQjtBQUVmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLEdBRkg7QUFHUCxnQkFBVyxJQUhKO0FBSVAsa0JBQWEsSUFKTjtBQUtQLGFBQVEsYUFMRDtBQU1QLGVBQVU7QUFOSCxHQUZJO0FBV2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxjQUxBO0FBTVAsYUFBUSxLQU5EO0FBT1AsZUFBVTtBQVBILEdBWEk7QUFvQmYsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyx5QkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXBCSTtBQTZCZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLGFBTEE7QUFNUCxlQUFVO0FBTkgsR0E3Qkk7QUFxQ2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsSUFGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxtQkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXJDSTtBQThDZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLG1CQUxBO0FBTVAsWUFBTyxDQU5BO0FBT1AsZUFBVTtBQVBILEdBOUNJO0FBdURmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLElBRkg7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QUFVO0FBUEYsR0FwUEc7QUE2UGYsYUFBWTtBQUNSLFVBQUssS0FERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURixHQTdQRztBQXdRZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLDJCQUxDO0FBTVIsYUFBUSxLQU5BO0FBT1IsWUFBTyxDQVBDO0FBUVIsYUFBUSxLQVJBO0FBU1IsZUFBVTtBQVRGLEdBeFFHO0FBbVJmLGFBQVk7QUFDUixVQUFLLEtBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8scUJBTEM7QUFNUixhQUFRLEtBTkE7QUFPUixhQUFRLEtBUEE7QUFRUixZQUFPLENBUkM7QUFTUixlQUFVO0FBVEYsR0FuUkc7QUE4UmYsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxxQkFMQztBQU1SLGFBQVEsS0FOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURjtBQTlSRyxDQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhbPljaHmlbDmja5cbi8vIFxubW9kdWxlLmV4cG9ydHMgID0gIHtcblxuICAgIFwibGV2ZWwwXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIumbtlwiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNTAwLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWQsbXlzdGVyeVwiLFxuICAgICAgICBcInJlZFBhY2tcIjo4OC44OFxuICAgIH0sXG5cbiAgICBcImxldmVsMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogNTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJnb29kXCI6XCJifDE1MCxnfDEzNTBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjg4Ljg4XG4gICAgfSxcbiAgICBcImxldmVsMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogOTI1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MTg0MCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MzM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDMwMCxnfDk0MCxtfDIwMCxkfDQwMFwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6NjYuNjZcbiAgICB9LFxuICAgIFwibGV2ZWwzXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4iVwiLFxuICAgICAgICBcInNjb3JlXCIgOiAxNTYwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDgwMFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoyMC45NlxuICAgIH0sXG4gICAgXCJsZXZlbDRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDUsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTIyNSxtfDc1XCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxNC4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDM0NjAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxMzAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo3MTQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MTMwLGd8MzcwLGR8ODAwXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEwLjcxXG4gICAgfSxcbiAgICBcImxldmVsNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogNDcyNSxcbiAgICAgICAgXCJtYXhTY29yZVwiOjIwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjkxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZHwxMjAwLGd8NjAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjguNDJcbiAgICB9LFxuICAgIFwibGV2ZWw3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA2MjAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTA2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMDAwLGR8NDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjYuODhcbiAgICB9LFxuICAgIFwibGV2ZWw4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTI2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNDAwLG18NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjUuNzdcbiAgICB9LFxuICAgIFwibGV2ZWw5XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS5nVwiLFxuICAgICAgICBcInNjb3JlXCIgOiA5Mzk1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTQ2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwzMDAsZ3wxMzAwLGR8NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuOTRcbiAgICB9LFxuICAgIFwibGV2ZWwxMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoyMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNjY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyMDAsZHw0MDAsbXwyMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuMzBcbiAgICB9LFxuICAgIFwibGV2ZWwxMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxODE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDg1MCxkfDQwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIxXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjMuODBcbiAgICB9LFxuICAgIFwibGV2ZWwxMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTMwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoyMTE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE0MDAsZHwxMjAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjM5XG4gICAgfSxcbiAgICBcImxldmVsMTNcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LiJXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE1NzAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjM2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNTAwLGR8ODAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjA1XG4gICAgfSxcbiAgICBcImxldmVsMTRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjU2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w5MDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiMlwiLFxuICAgICAgICBcImJvb21cIjoyLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjc2XG4gICAgfSxcbiAgICBcImxldmVsMTVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE4NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MzAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6Mjg2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w4MDAsZHwyMDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwicmVkUGFja1wiOjIuNTJcbiAgICB9LFxuICAgIFwibGV2ZWwxNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogMjEwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjozMTY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEzMDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDFcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6Mi4zMlxuICAgIH0sXG4gICAgXCJsZXZlbDE3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiAyMjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjM1MDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjM1MTQwLFxuICAgICAgICBcImdvb2RcIjpcImd8MTEyNSxifDE3NSxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjE0XG4gICAgfSxcbiAgICBcImxldmVsMThcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5YWrXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDAxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiZ3wxMDAwLGR8ODAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsNFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjk5XG4gICAgfSxcbiAgICBcImxldmVsMTlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMwMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDcwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDQ4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMTAwLGR8MTIwMCxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjg1XG4gICAgfSxcbiAgICBcImxldmVsMjBcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2BXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMzMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDg4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLG18MjAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsM1wiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS43M1xuICAgIH0sXG4gICAgXCJsZXZlbDIxXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4gFwiLFxuICAgICAgICBcInNjb3JlXCIgOiAzNjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjUyODQwLFxuICAgICAgICBcImdvb2RcIjpcImd8NTAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIiw1XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNjJcbiAgICB9LFxuICAgIFwibGV2ZWwyMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMzkwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1Njg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJkfDQwMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNTNcbiAgICB9LFxuICAgIFwibGV2ZWwyM1wiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuIlcIixcbiAgICAgICAgXCJzY29yZVwiIDogNDE1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo2MDg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE1MDAsbXwyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwiLG15c3RlcnlcIixcbiAgICAgICAgXCJib29tXCI6MixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS40NFxuICAgIH0sXG4gICAgXCJsZXZlbDI0XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWbm1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA0MzUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY0ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTQwMCxkfDgwMCxtfDIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMlwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDI1XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS6lFwiLFxuICAgICAgICBcInNjb3JlXCIgOiA0NjAwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQyMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY5MDQwLFxuICAgICAgICBcIm1vdXNlXCI6XCIsNlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjI5XG4gICAgfSxcbiAgICBcImxldmVsMjZcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5YWtXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDQ5NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NzQwNDAsXG4gICAgICAgIFwibW91c2VcIjpcIjE2LDZcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4yMlxuICAgIH0sXG4gICAgXCJsZXZlbDI3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjc5MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8NTAwLGR8MzYwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMVwiLFxuICAgICAgICBcImJvb21cIjoxLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4xN1xuICAgIH0sXG4gICAgXCJsZXZlbDI4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1NTUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjg0MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTEwMCxtfDE1MCxkfDEyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiNSwzXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjExXG4gICAgfSxcbiAgICBcImxldmVsMjlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDU4MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6ODkwNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLGR8MTIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCI0LDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuMDZcbiAgICB9LFxuICAgIFwibGV2ZWwzMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuInljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogNjIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo1MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo5NDA0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyNTAsZHwyMDAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjMsMlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4wMVxuICAgIH1cbn0iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5f815fcXZ9BIY+pPRsOeaGx', 'Tools');
// Script/Tools.js

"use strict";

cc.Tools = {
  /**
   * @param {*} event 数数打点的事件名称
   * @param {*} pro 数数打点的关联属性
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      console.log("cocos----注册打点" + event); // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, JSON.stringify(pro));

      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;Ljava/lang/String;)V", event, JSON.stringify(pro));
    }
  },

  /**
   * 看视频回调
   */
  adCallBack: function adCallBack(ecpm) {
    console.log("cocos----观看视频回调"); // 获取广告ad之前先用epcr
    // 看视频得体力

    this.getUserEcpm(ecpm).then(function () {
      console.log("cocos----获取ecpm之后才调用");

      if (cc.zm.userInfo.power <= 0) {
        console.log("cocos----体力接口");
        var sendData = {
          ad: cc.zm.ad
        };
        cc.Tools.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
          console.log("cocos----获取体力奖励");
          cc.zm.userInfo.power = res.data.value;

          if (cc.zm.videoAd.enterGame) {
            cc.director.loadScene('Game');
          }
        });
      } // 看视频得红包


      if (cc.zm.videoAd.redPack) {
        console.log("cocos----获取红包接口");
        cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.videoAd.redPack).then(function (res) {
          console.log("cocos----获取红包奖励", res);
          var sendData = {};
          cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
            cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

            if (cc.zm.userInfo.power > 0) {
              cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
                cc.zm.LevelInfo = res.data;
                cc.zm.videoAd.redPack = null;

                if (cc.zm.LevelInfo.stage < 30) {
                  cc.director.loadScene('Game');
                } else {
                  // 直接返回主界面
                  cc.director.loadScene('Index');
                }
              });
            } else {
              // 小于0 弹出看视频获得体力的接口
              cc.director.loadScene('Index');
            }
          });
        });
      }

      if (cc.zm.videoAd.clickSign) {
        console.log("cocos----签到接口");
        cc.zm.videoAd.clickSign = false;
      }

      if (cc.zm.videoAd.clickTable) {
        console.log("cocos----转盘接口");
        cc.zm.videoAd.clickTable = false;
      }
    });
  },
  // 显示激励视频
  showJiliAd: function showJiliAd() {
    console.log("cocos----点击显示激励视频");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "()V");
    }
  },
  // 显示banner
  showBanner: function showBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
    }
  },
  // 隐藏banner
  hideBanner: function hideBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
    }
  },
  // 显示插屏广告
  showTableScreen: function showTableScreen() {
    console.log("cococ----触发插屏");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
    }
  },
  // 隐藏插屏广告
  hideTableScreen: function hideTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
    }
  },
  // 微信登陆
  wxLogin: function wxLogin() {
    console.log("cocos----wxLogin");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    console.log("cocos----wxLoginResultcode=" + errCode);
    cc.wxLoginResultcode = errCode;
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm) {
    if (!cc.zm) {
      return;
    }

    console.log("cocos----调用ecpm=", ecpm);
    return new Promise(function (resolve, reject) {
      var sendData = {
        "ecpm": parseInt(ecpm),
        "ts": new Date().getTime() //时间戳

      };
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Rc", "POST", data).then(function (res) {
        console.log("cocos----Ecpm成功", res.data);
        cc.zm.ad = res.data.ad;
        resolve();
      })["catch"](function (res) {
        console.log("cocos----Ecpm失败", res);
        reject(res);
      });
    });
  },

  /**
   * 
   * @param {*} data 需要签名数据
   * @returns 
   */
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
    strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi;
    return data;
  },
  // 适配屏幕
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

  /**
   * 
   * @param {*} n node节点
   * @param {*} str  显示的tips内容
   */
  showTips: function showTips(n, str) {
    var tips = n.getChildByName("Tips");
    tips.getComponent(cc.Label).string = str;
    tips.stopAllActions();
    tips.y = 145;
    cc.tween(tips).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 300
    }).delay(0.5).to(0.1, {
      opacity: 0
    }).start();
  },

  /**
   * 
   * @param {*} url 请求接口的url----pit.v1.PitSvc/UserInfo
   * @param {*} type 请求接口的类型 只能是GET--POST
   * @param {*} data 请求接口所需要的数据
   * @returns 
   */
  sendRequest: function sendRequest(url, type, data) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var requestURL = "https://pit.api.jiankangzhuan.com/" + url;
      xhr.open(type, requestURL, true);

      if (cc.sys.isNative) {
        xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
      }

      if (cc.wxToken) {
        xhr.setRequestHeader("Authorization", cc.wxToken);
      }

      xhr.setRequestHeader("Content-Type", "application/json");
      console.log("cocos----requestURL=", requestURL);
      console.log("cocos----data=", JSON.stringify(data));

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          console.log("cocos----http res:" + xhr.response); // 统一处理

          var _response = JSON.parse(xhr.response);

          if (_response.code === 0) {
            resolve(_response);
          } else {
            console.log("cocos----" + _response.message);
            reject(_response.message);
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error(xhr.statusText));
      };

      xhr.send(JSON.stringify(data));
    });
  }
};

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJjb25zb2xlIiwibG9nIiwianNiIiwicmVmbGVjdGlvbiIsImNhbGxTdGF0aWNNZXRob2QiLCJKU09OIiwic3RyaW5naWZ5IiwiYWRDYWxsQmFjayIsImVjcG0iLCJnZXRVc2VyRWNwbSIsInRoZW4iLCJ6bSIsInVzZXJJbmZvIiwicG93ZXIiLCJzZW5kRGF0YSIsImFkIiwic2VuZFJlcXVlc3QiLCJyZXMiLCJkYXRhIiwidmFsdWUiLCJ2aWRlb0FkIiwiZW50ZXJHYW1lIiwiZGlyZWN0b3IiLCJsb2FkU2NlbmUiLCJyZWRQYWNrIiwiTGV2ZWxJbmZvIiwic3RhZ2UiLCJjbGlja1NpZ24iLCJjbGlja1RhYmxlIiwic2hvd0ppbGlBZCIsInNob3dCYW5uZXIiLCJoaWRlQmFubmVyIiwic2hvd1RhYmxlU2NyZWVuIiwiaGlkZVRhYmxlU2NyZWVuIiwid3hMb2dpbiIsInd4TG9naW5SZXN1bHQiLCJlcnJDb2RlIiwid3hMb2dpblJlc3VsdGNvZGUiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInBhcnNlSW50IiwiRGF0ZSIsImdldFRpbWUiLCJjcmVhdGVTaWduRGF0YSIsInNvcnRMaXN0Iiwia2V5IiwiaGFzT3duUHJvcGVydHkiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInNjMSIsImhleF9tZDUiLCJyZXF1aXJlIiwic2lnbiIsInNjcmVlbkFkYXB0ZXIiLCJjYW52YXMiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJzaG93VGlwcyIsIm4iLCJzdHIiLCJ0aXBzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJMYWJlbCIsInN0cmluZyIsInN0b3BBbGxBY3Rpb25zIiwieSIsInR3ZWVuIiwidG8iLCJvcGFjaXR5IiwiZGVsYXkiLCJzdGFydCIsInVybCIsInR5cGUiLCJ4aHIiLCJYTUxIdHRwUmVxdWVzdCIsInJlcXVlc3RVUkwiLCJvcGVuIiwic2V0UmVxdWVzdEhlYWRlciIsInd4VG9rZW4iLCJvbnJlYWR5c3RhdGVjaGFuZ2UiLCJyZWFkeVN0YXRlIiwic3RhdHVzIiwicmVzcG9uc2UiLCJfcmVzcG9uc2UiLCJwYXJzZSIsImNvZGUiLCJtZXNzYWdlIiwib25lcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsInNlbmQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxHQUFXO0FBQ1A7QUFDSjtBQUNBO0FBQ0E7QUFDSUMsRUFBQUEsR0FMTyxlQUtIQyxLQUxHLEVBS0lDLEdBTEosRUFLUztBQUNaLFFBQUlKLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxrQkFBa0JMLEtBQTlCLEVBRGlCLENBRWpCOztBQUNBTSxNQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MscUNBQWhDLEVBQXVFLEtBQXZFLEVBQThFLHlDQUE5RSxFQUF5SFIsS0FBekgsRUFBK0hTLElBQUksQ0FBQ0MsU0FBTCxDQUFlVCxHQUFmLENBQS9IO0FBQ0g7QUFDSixHQVhNOztBQWFQO0FBQ0o7QUFDQTtBQUNJVSxFQUFBQSxVQWhCTyxzQkFnQklDLElBaEJKLEVBZ0JVO0FBQ2JSLElBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLGlCQUFaLEVBRGEsQ0FFYjtBQUNBOztBQUNBLFNBQUtRLFdBQUwsQ0FBaUJELElBQWpCLEVBQXVCRSxJQUF2QixDQUE0QixZQUFJO0FBQzVCVixNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxzQkFBWjs7QUFDQSxVQUFJUixFQUFFLENBQUNrQixFQUFILENBQU1DLFFBQU4sQ0FBZUMs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LENBQUN1RCxTQUFTLENBQUNHLE9BQVgsQ0FBTjtBQUNIO0FBQ0o7QUFDSixPQVpEOztBQWFBYixNQUFBQSxHQUFHLENBQUNjLE9BQUosR0FBYyxZQUFZO0FBQ3RCM0QsUUFBQUEsTUFBTSxDQUFDLElBQUk0RCxLQUFKLENBQVVmLEdBQUcsQ0FBQ2dCLFVBQWQsQ0FBRCxDQUFOO0FBQ0gsT0FGRDs7QUFHQWhCLE1BQUFBLEdBQUcsQ0FBQ2lCLElBQUosQ0FBU2pHLElBQUksQ0FBQ0MsU0FBTCxDQUFlWSxJQUFmLENBQVQ7QUFDSCxLQTlCTSxDQUFQO0FBK0JIO0FBNU9NLENBQVgiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLlRvb2xzID0ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQg5pWw5pWw5omT54K555qE5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBwcm8g5pWw5pWw5omT54K555qE5YWz6IGU5bGe5oCnXG4gICAgKi9cbiAgICBkb3QoZXZlbnQsIHBybykge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeazqOWGjOaJk+eCuVwiICsgZXZlbnQpO1xuICAgICAgICAgICAgLy8ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50LCBKU09OLnN0cmluZ2lmeShwcm8pKTtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImRvdFwiLCBcIihMamF2YS9sYW5nL1N0cmluZztMamF2YS9sYW5nL1N0cmluZzspVlwiLCBldmVudCxKU09OLnN0cmluZ2lmeShwcm8pKTtcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnnIvop4bpopHlm57osINcbiAgICAgKi9cbiAgICBhZENhbGxCYWNrKGVjcG0pIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3op4LnnIvop4bpopHlm57osINcIik7XG4gICAgICAgIC8vIOiOt+WPluW5v+WRimFk5LmL5YmN5YWI55SoZXBjclxuICAgICAgICAvLyDnnIvop4bpopHlvpfkvZPliptcbiAgICAgICAgdGhpcy5nZXRVc2VyRWNwbShlY3BtKS50aGVuKCgpPT57XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPlmVjcG3kuYvlkI7miY3osIPnlKhcIik7XG4gICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXI8PTApIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeS9k+WKm+aOpeWPo1wiKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFkOiBjYy56bS5hZFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvR3Jvd1Bvd2VyXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t6I635Y+W5L2T5Yqb5aWW5YqxXCIpXG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyID0gcmVzLmRhdGEudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmKGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lKXtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDnnIvop4bpopHlvpfnuqLljIVcbiAgICAgICAgICAgIGlmIChjYy56bS52aWRlb0FkLnJlZFBhY2spIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPlue6ouWMheaOpeWPo1wiKTtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUGFzc0FkXCIsIFwiUE9TVFwiLCBjYy56bS52aWRlb0FkLnJlZFBhY2spLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeiOt+WPlue6ouWMheWlluWKsVwiLCByZXMpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS52aWRlb0FkLnJlZFBhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLnN0YWdlIDwgMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjYy56bS52aWRlb0FkLmNsaWNrU2lnbil7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3nrb7liLDmjqXlj6NcIik7XG4gICAgICAgICAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1NpZ24gPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmKGNjLnptLnZpZGVvQWQuY2xpY2tUYWJsZSl7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3ovaznm5jmjqXlj6NcIik7XG4gICAgICAgICAgICAgICAgY2Muem0udmlkZW9BZC5jbGlja1RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrmv4DlirHop4bpopFcbiAgICBzaG93SmlsaUFkKCkge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeeCueWHu+aYvuekuua/gOWKseinhumikVwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QWRcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekumJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dCYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmakOiXj2Jhbm5lclxuICAgIGhpZGVCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImhpZGVCYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuuaPkuWxj+W5v+WRilxuICAgIHNob3dUYWJsZVNjcmVlbigpIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2NvYy0tLS3op6blj5Hmj5LlsY9cIik7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JeP5o+S5bGP5bm/5ZGKXG4gICAgaGlkZVRhYmxlU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlVGFibGVTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOW+ruS/oeeZu+mZhlxuICAgIHd4TG9naW4oKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0td3hMb2dpblwiKTtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwid2VpeGluX2xvZ2luXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIFwid2VpeGluX2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAqIOaOpeaUtm5hdGl2ZeW+ruS/oeaOiOadg+eahGNvZGVcbiAgICAqIEBwYXJhbSBlcnJDb2RlIFxuICAgICovXG4gICAgd3hMb2dpblJlc3VsdChlcnJDb2RlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0td3hMb2dpblJlc3VsdGNvZGU9XCIgKyBlcnJDb2RlKVxuICAgICAgICBjYy53eExvZ2luUmVzdWx0Y29kZSA9IGVyckNvZGU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDnnIvlub/lkYrkuYvlkI7liLfmlrDkuIDkuItlY3BtXG4gICAgICovXG4gICAgIGdldFVzZXJFY3BtKGVjcG0pIHtcbiAgICAgICAgIGlmKCFjYy56bSl7XG4gICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgfVxuICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3osIPnlKhlY3BtPVwiLGVjcG0pO1xuICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3Qpe1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiZWNwbVwiOiBwYXJzZUludChlY3BtKSxcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9SY1wiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS1FY3Bt5oiQ5YqfXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBjYy56bS5hZCA9IHJlcy5kYXRhLmFkO1xuICAgICAgICAgICAgICAgIHJlc29sdmUoKTtcbiAgICAgICAgICAgIH0pLmNhdGNoKChyZXMpPT57XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS1FY3Bt5aSx6LSlXCIsIHJlcyk7XG4gICAgICAgICAgICAgICAgcmVqZWN0KHJlcyk7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgfSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gZGF0YSDpnIDopoHnrb7lkI3mlbDmja5cbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBjcmVhdGVTaWduRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHNvcnRMaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPSBcInNpZ25cIikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xuICAgICAgICAgICAgICAgIGl0ZW0ua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzb3J0TGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29ydExpc3Quc29ydCgpO1xuICAgICAgICB2YXIgc3RyVG9KaWFNaSA9IFwiXCI7XG4gICAgICAgIHNvcnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgc3RyVG9KaWFNaSArPSBcIiZcIiArIGtleSArIFwiPVwiICsgZGF0YVtrZXldO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgc3RyVG9KaWFNaSA9IFwidG9rZW49XCIgKyBjYy56bS51c2VySW5mby5zYzEgKyBzdHJUb0ppYU1pO1xuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvLyDpgILphY3lsY/luZVcbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUuaGVpZ2h0IC8gd2luU2l6ZS53aWR0aCA8PSA3MjAgLyAxMjgwKSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBuIG5vZGXoioLngrlcbiAgICAgKiBAcGFyYW0geyp9IHN0ciAg5pi+56S655qEdGlwc+WGheWuuVxuICAgICAqL1xuICAgIHNob3dUaXBzKG4sc3RyKSB7XG4gICAgICAgIGxldCB0aXBzID0gbi5nZXRDaGlsZEJ5TmFtZShcIlRpcHNcIik7XG4gICAgICAgIHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPXN0cjtcbiAgICAgICAgdGlwcy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICB0aXBzLnkgPSAxNDU7XG4gICAgICAgIGNjLnR3ZWVuKHRpcHMpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMSwgeyB5OiAzMDAgfSkuZGVsYXkoMC41KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBcbiAgICAgKiBAcGFyYW0geyp9IHVybCDor7fmsYLmjqXlj6PnmoR1cmwtLS0tcGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1xuICAgICAqIEBwYXJhbSB7Kn0gdHlwZSDor7fmsYLmjqXlj6PnmoTnsbvlnosg5Y+q6IO95pivR0VULS1QT1NUXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIOivt+axguaOpeWPo+aJgOmcgOimgeeahOaVsOaNrlxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIHNlbmRSZXF1ZXN0OiBmdW5jdGlvbiAodXJsLCB0eXBlLGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0VVJMID0gXCJodHRwczovL3BpdC5hcGkuamlhbmthbmd6aHVhbi5jb20vXCIgKyB1cmw7XG4gICAgICAgICAgICB4aHIub3Blbih0eXBlLCByZXF1ZXN0VVJMLCB0cnVlKTtcbiAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGVpbmdcIiwgXCJnemlwLGRlZmxhdGVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZihjYy53eFRva2VuKXtcbiAgICAgICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkF1dGhvcml6YXRpb25cIiwgY2Mud3hUb2tlbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkNvbnRlbnQtVHlwZVwiLCBcImFwcGxpY2F0aW9uL2pzb25cIik7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLXJlcXVlc3RVUkw9XCIsIHJlcXVlc3RVUkwpO1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS1kYXRhPVwiLCBKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgIGlmICh4aHIucmVhZHlTdGF0ZSA9PT0gNCAmJiB4aHIuc3RhdHVzID09IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLWh0dHAgcmVzOlwiICsgeGhyLnJlc3BvbnNlKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g57uf5LiA5aSE55CGXG4gICAgICAgICAgICAgICAgICAgIGxldCBfcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmKF9yZXNwb25zZS5jb2RlPT09MCl7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXNvbHZlKF9yZXNwb25zZSlcbiAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLVwiK19yZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChfcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB4aHIub25lcnJvciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgICAgICByZWplY3QobmV3IEVycm9yKHhoci5zdGF0dXNUZXh0KSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgfSlcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0a35WjyStJPpmP4ZgIidJg', 'Main');
// Script/Main.js

"use strict";

var _Config = _interopRequireDefault(require("./Config"));

var _Level = _interopRequireDefault(require("./Level"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//引入 得分等配置 太长 所以换个文件写
cc.Class({
  "extends": cc.Component,
  properties: {
    //钩子速度
    speed: {
      "default": 3,
      displayName: '钩子速度'
    },
    //钩子旋转速度
    rotateSpeed: {
      "default": 1,
      displayName: '钩子旋转速度'
    },
    //钩子范围
    HookRange: {
      "default": 70,
      displayName: '钩子旋转角度范围'
    },
    //所有的prefab 这种方式是同步的 代码比较好写 就是难拖
    Prefabs: {
      "default": [],
      type: cc.Prefab
    },
    InitTime: {
      "default": 10
    },
    //钩子触碰到物品的声音
    CollisionAudio: {
      type: cc.AudioClip,
      "default": null
    },
    //加分的声音
    AddScroeAudio: {
      type: cc.AudioClip,
      "default": null
    },
    // 道具的纹理
    PropSpriteFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    Boom: {
      type: cc.Prefab,
      "default": null
    },
    HookFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    HeroFrames: {
      type: cc.SpriteFrame,
      "default": []
    },
    LotteryFramse: {
      type: cc.SpriteFrame,
      "default": []
    }
  },
  // LIFE-CYCLE CALLBACKS:
  onLoad: function onLoad() {
    /**
     * 初始化
     */
    this.init(); //加载首页资源

    cc.director.preloadScene('Index');
  },
  setGuide: function setGuide() {
    var index = this.guideIndex;

    if (index <= 3) {
      var guide = cc.find('Canvas/Guide');
      guide.getChildByName("guide_" + index).active = true;
    } else {
      this.guide = false;
      cc.find('Canvas/Guide').active = false;
    }
  },
  nextGuide: function nextGuide(e, msg) {
    var guide = cc.find('Canvas/Guide');
    var guide_1 = guide.getChildByName("guide_1");
    var guide_2 = guide.getChildByName("guide_2");
    var guide_3 = guide.getChildByName("guide_3");
    guide_1.active = false;
    guide_2.active = false;
    guide_3.active = false;

    if (msg === "2") {
      cc.sys.localStorage.setItem("guide", 2);
      guide.getChildByName("guide_2").active = true;
    } else if (msg === "3") {
      cc.sys.localStorage.setItem("guide", 3);
      guide.getChildByName("guide_3").active = true;
    } else if (msg === "4") {
      this.guide = false;
      this.ResumeGameLayer();
      cc.sys.localStorage.setItem("guide", 4);
      cc.find('Canvas/Guide').active = false;
    }
  },
  hideNeedLayer: function hideNeedLayer() {
    var _this = this;

    // 如果开始游戏 那么刷新一下道具数据
    cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      var sendDta = {
        prop: 4
      };
      cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
        console.log("cocos---使用体力成功");
      });
      cc.zm.LevelInfo = res.data; // 关闭界面开始游戏

      _this.NeedLayer.active = false; // 点击开始游戏之前 重新同步一下道具信息
      // 隐藏banner

      cc.Tools.hideBanner();

      _this.handleDaoju();

      _this.adjusBoomLayout();

      _this.ResumeGameLayer(); // 对关卡进行打点


      if (cc.zm.LevelInfo.stage <= 5) {
        cc.Tools.dot("start_" + cc.zm.LevelInfo.stage, null);
      }
    });
  },
  hideLotteryLayer: function hideLotteryLayer() {
    this.LotteryLayer.active = false;
  },
  showBackLayer: function showBackLayer() {
    this.BackLayer.active = true;
    this.PauseGameLayer();
  },

  /**
   * @description 初始化 各种需要的比变量
   */
  init: function init() {
    var _this2 = this;

    //钩子矿工
    this.Miner = cc.find('Canvas/Header/Miner'); //矿工动画 
    //获取钩子

    this.Hook = cc.find('Canvas/Header/Miner/Hook'); //获取钩子初始长度

    this.HookHeight = this.Hook.height; //放下钩子开关 0 停止 1 发射 2拉回

    this.HookState = 0;
    this.curScore = 0;
    this.pauseGame = false; // 初始化矿工的精灵帧

    this.MinerSp = this.Miner.getComponent("sp.Skeleton"); // 看视频得体力界面

    this.seeVideoLayer = cc.find('Canvas/SeeVideolayer'); //得分累计

    this.Score = cc.find('Canvas/ScoreAndTarget/Score').getComponent(cc.Label); //通关目标分数

    this.TargetScore = cc.find('Canvas/ScoreAndTarget/Target').getComponent(cc.Label); //倒计时

    this.Time = cc.find('Canvas/CheckpointAndTime/Time').getComponent(cc.Label); //关卡数

    this.Checkpoint = cc.find('Canvas/CheckpointAndTime/Checkpoint').getComponent(cc.Label);
    this.NeedLayer = cc.find('Canvas/NeedLayer');
    this.BackLayer = cc.find('Canvas/BackLayer');
    this.PropNode = cc.find('Canvas/Header/Prop');
    this.LotteryLayer = this.NeedLayer.getChildByName("LotteryLayer"); //物品区域

    this.itemArea = cc.find('Canvas/ItemArea'); //开启碰撞

    this.manager = cc.director.getCollisionManager();
    this.manager.enabled = true; // this.manager.enabledDebugDraw = true;
    // manager.enabledDrawBoundingBox = true;
    //重组prefab数组 方便查询

    this.Prefab = {};
    this.Prefabs.forEach(function (item) {
      _this2.Prefab[item._name] = item;
    }); //发射钩子按钮

    var emitHook = cc.find('Canvas/emitHookBtn'); //弹出框

    this.Mask = cc.find('Canvas/Mask'); //游戏结束按钮 包括过关/结束游戏

    this.Mask.on(cc.Node.EventType.TOUCH_END, this.CloseMask.bind(this));
    emitHook.on(cc.Node.EventType.TOUCH_END, this.emitHookBtn.bind(this));
    this.boomNumber = -1;
    this.liquidNumber = 0;
    this.adjusBoomLayout();
    cc.Tools.screenAdapter();
    this.ResetInfo();
    this.StartTime();
    this.SetLevel();
    this.CreateTargetScore();
    this.CreateItem();
    this.redPack = this.levelInfo.redPack;
    this.extarRedPack = 0; // 是否新手引导

    this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));

    if (this.guideIndex < 4 && this.guideIndex >= 1) {
      this.guide = true; // 有新手引导暂停游戏

      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = true;
      this.setGuide();
    } else {
      this.guide = false;
      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = false;
      cc.Tools.showBanner();
      this.NeedLayer.active = true;
      var needScore = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label);
      var needLevel = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
      needScore.string = "\u8981\u6C42\u5206\u6570\uFF1A" + this.levelInfo.score;
      needLevel.string = "\u7B2C" + this.levelInfo.id + "\u5173"; // 抽奖选关卡
      // 前端随机一个道具
      // 炸弹：10 11时钟 13药水

      var arr = [10, 11, 13];
      var rdm = this.createRandm(0, 2);
      var prop = arr[rdm];
      this.LotteryProp = prop;
      var icon = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);

      if (prop === 10) {
        // 当前是炸弹
        icon.spriteFrame = this.LotteryFramse[2];
      } else if (prop === 11) {
        icon.spriteFrame = this.LotteryFramse[0];
      } else if (prop === 13) {
        icon.spriteFrame = this.LotteryFramse[1];
      }
    }
  },
  LookVideoGetAward: function LookVideoGetAward() {
    var _this3 = this;

    cc.Tools.showJiliAd();
    var sendData = {
      "ad": cc.zm.ad,
      "weapon": this.LotteryProp
    };
    cc.Tools.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then(function (res) {
      // 炸弹：10 11时钟 13药水
      _this3.LotteryAward = res.data.award;

      _this3.hideLotteryLayer();
    });
  },
  // 使用道具
  handleDaoju: function handleDaoju() {
    var _this4 = this;

    // 道具的数量为
    var weapon = cc.zm.LevelInfo.weapon; // prop类型 10.炸弹 11.时钟 12.石化手册 13.药水 14.三叶草
    // 处理道具 道具分别为 炸弹 boomNumber 时钟 clockNumber 石化手册 handbookNumber 药水 liquidNumber 三叶草 cloverNumber

    var data = {
      "1": "体力",
      "10": "炸弹",
      "11": "时钟",
      "12": "石化手册",
      "13": "药水",
      "14": "三叶草"
    };

    var _loop = function _loop(i) {
      if (weapon[i].prop === 10) {
        // 当前是炸弹
        _this4.boomNumber = weapon[i].num - 1;
      } else {
        // 如果是其他物品那么直接使用
        if (weapon[i].num) {
          // 直接使用
          var sendDta = {
            prop: weapon[i].prop
          };
          cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
            console.log("cocos---使用成功-", data[weapon[i].prop]);
          });
        }
      }

      if (weapon[i].prop === 11) {
        _this4.clockNumber = weapon[i].num;
      }

      if (weapon[i].prop === 12) {
        _this4.handbookNumber = weapon[i].num;
      }

      if (weapon[i].prop === 13) {
        _this4.liquidNumber = weapon[i].num;
      }

      if (weapon[i].prop === 14) {
        _this4.cloverNumber = weapon[i].num;
      }
    };

    for (var i = 0; i < weapon.length; i++) {
      _loop(i);
    }
  },

  /**
   * @description 钩子旋转
   */
  HookRoTate: function HookRoTate() {
    if (this.HookState) return; //限制范围 只能在 70 与 -70 之间

    if (this.Hook.angle >= 70) {
      this.rotateSpeed = -this.rotateSpeed;
    } else if (this.Hook.angle <= -70) {
      this.rotateSpeed = Math.abs(this.rotateSpeed);
    }

    ;
    this.Hook.angle += this.rotateSpeed;
  },

  /**
   * @description 发射钩子按钮事件
   */
  emitHookBtn: function emitHookBtn() {
    //TODO 停止钩子旋转
    //打开/关闭 钩子开关 没有拉回之前 当前position ！= 初始位置时 不允许操作
    if (this.HookState) return; // 当前发射绳子

    this.MinerSp.setAnimation(0, "fang", true);
    this.HookState = 1;
  },

  /**
   * @description 发射钩子
   */
  emitHook: function emitHook() {
    switch (this.HookState) {
      case 1:
        this.Hook.height += this.speed;
        break;

      case 2:
        if (this.Hook.height <= this.HookHeight) {
          //检测是否拉回物品
          if (this.Hook.children[0]) {
            if (this.Hook.children[0].childrenCount) {
              this.Handle(this.Hook.children[0].children); //停止播放拉回动画

              this.MinerSp.setAnimation(0, "idle3", false);
              this.MinerSp.addAnimation(0, "idle", true);
            } else {
              this.MinerSp.setAnimation(0, "idle", true);
            }
          }

          this.StopHookMove();
        } else {
          this.Hook.height -= this.speed;
        }

        ;
        break;
    }

    ;
  },

  /**
   * @description 拉回钩子
   */
  PullBackHook: function PullBackHook() {
    //播放拉回钩子动画
    // 将钩子的图片转化
    this.MinerSp.setAnimation(0, "la", true);
    this.HookState = 2;
  },

  /**
   * 设置钩子拉回的速度
   */
  SetSpeed: function SetSpeed(other) {
    // 是否有药水效果 如果有那么speed速度增加10%
    var promote = 1;
    _Config["default"][other.node.name] = _Config["default"][other.node.name] || {};

    if (this.liquidNumber) {
      console.log("cocos----药水效果速度增加10%");
      promote = 1.1;
    }

    this.speed = _Config["default"][other.node.name].speed * promote || 10;
  },

  /**
   * 重置所有分数信息
   */
  ResetInfo: function ResetInfo() {
    //this.victory 游戏胜利失败状态 0 = 游戏中 1 = 成功 2 = 失败
    this.victory = this.Score.string = this.Time.string = this.Checkpoint.string = this.TargetScore.string = 0;
  },

  /**
   * 启动倒计时
   */
  StartTime: function StartTime() {
    // 是否存在时钟 存在时钟 this.InitTime+10秒
    if (this.clockNumber) {
      console.log("cocos----使用时钟成功+10s");
      this.clockNumber = 0;
      this.InitTime += 10;
    }

    this.Time.string = this.InitTime;

    this.timer = function () {
      this.InitTime--;
      this.Time.string = this.InitTime;

      if (this.InitTime <= 0) {
        this.unschedule(this.timer);
        this.GameOver();
      }

      ;
    };

    this.schedule(this.timer, 1);
  },

  /**
   * 设置关卡数
   */
  SetLevel: function SetLevel() {
    this.levelInfo = _Level["default"]["level" + cc.zm.LevelInfo.stage]; // this.levelInfo = Level["level15"]

    this.Score.string = cc.zm.LevelInfo.current_score;
    this.Checkpoint.string = "" + cc.zm.LevelInfo.stage;
  },

  /**
   * 确定过关目标分数
   * 目标分数根据关卡关数确定 难度累加率为
   *  基数 1000
   *  每关递增500分
   * 
   * 最大 5000分
   */
  CreateTargetScore: function CreateTargetScore() {
    this.TargetScore.string = this.levelInfo.score;
  },

  /**
   * 生成物品 需要根据目标分来生成 生成的所有物品总分必须比目标过关分数高20%
   * 生成的物品数量在 10-30
   */
  CreateItem: function CreateItem() {
    var _this5 = this;

    var newItemArr = this.newCreateCalc(); // 写一个算法 根据分数先将arr 排序 总分不能超过最大分数 如果超了 则从小开始减少 直到分数小于最大分数
    //生成相应的Prfab

    newItemArr.forEach(function (item) {
      var node = cc.instantiate(_this5.Prefab[item.name]);

      var XY = _this5.randomXY(node);

      node.parent = _this5.itemArea;

      if (item.score) {
        node.score = item.score;
      }

      if (item.prop) {
        node.extra = item.prop;
      }

      node.setPosition(XY);

      if (item.name === "Tnt") {
        var boom = cc.instantiate(_this5.Boom);

        _this5.node.addChild(boom);

        boom.name = "tntBoom";
        boom.setPosition(cc.v2(XY.x, XY.y - 218));
        node.boom = boom;
      }
    }); // todo先不创建老鼠试试

    if (this.levelInfo.mouse) {
      var data = this.levelInfo.mouse.split(","); // 普通老鼠

      var mouseNumber = Number(data[0]);

      if (mouseNumber > 0) {
        for (var i = 0; i < mouseNumber; i++) {
          var node = cc.instantiate(this.Prefab["Mouse"]);
          var randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
          var randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);
          var pos = cc.v2(randX, randY);
          node.parent = this.itemArea;
          node.score = 50;
          node.setPosition(pos);
          this.moveMouse(node);
        }
      }

      var DrillMouseNumber = Number(data[1]);

      if (DrillMouseNumber > 0) {
        for (var _i = 0; _i < DrillMouseNumber; _i++) {
          var _node2 = cc.instantiate(this.Prefab["DrillMouse"]);

          var _randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);

          var _randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);

          var _pos2 = cc.v2(_randX, _randY);

          _node2.parent = this.itemArea;
          _node2.score = 700;

          _node2.setPosition(_pos2);

          this.moveMouse(_node2);
        }
      }
    }
  },
  // 生成的物品是可动的
  moveMouse: function moveMouse(mouse) {
    // 先将老鼠移动到最右边 时间为600/距离*5
    var _moveTime = 10;

    var time = parseInt(300 - mouse.x) / 600 * _moveTime;

    cc.tween(mouse).to(time, {
      x: 300
    }).start();
    this.scheduleOnce(function () {
      // 现在开始 老鼠做规律运动先将老鼠反转
      if (mouse.name !== "") {
        mouse.scaleX = -1;
        cc.tween(mouse).repeatForever(cc.tween().to(_moveTime, {
          x: -300
        }).delay(1).call(function () {
          mouse.scaleX = 1;
        }).to(_moveTime, {
          x: 300
        }).delay(1).call(function () {
          mouse.scaleX = -1;
        })).start();
      }
    }, time + 1);
  },
  // 写一个算法。。一只有一个总数量 可以得到 各个物品的数量
  newCreateCalc: function newCreateCalc() {
    var createItemArr = []; // 先生成红包跟神秘物品

    if (this.levelInfo.extra) {
      var extra = this.levelInfo.extra.split(","); // 0是红包 创建一个红包

      if (extra[0]) {
        var _arr = [];
        var obj = {
          "name": "Red",
          // 开出的红包金额
          "prop": 0.1,
          "width": 70
        };

        _arr.push(obj);

        createItemArr = [].concat(createItemArr, _arr);
      }

      if (extra[1]) {
        var _arr2 = [];
        var _prop = null; // 当前是神秘物品 先随机出物品 是否有三叶草 如果有 药水的随机概率增加

        if (this.cloverNumber) {
          var arr = ["炸弹", "3元红包", "5元红包", "药水", "药水"];
          var rmd = this.createRandm(0, 4);
          _prop = arr[rmd];
        } else {
          var _arr3 = ["炸弹", "3元红包", "5元红包", "药水"];

          var _rmd = this.createRandm(0, 3);

          _prop = _arr3[_rmd];
        }

        var _obj = {
          "name": "Mystery",
          // 开出的红包金额
          "prop": _prop,
          "width": 71
        };

        _arr2.push(_obj);

        createItemArr = [].concat(createItemArr, _arr2);
      }
    }

    if (this.levelInfo.boom) {
      for (var i = 0; i < this.levelInfo.boom; i++) {
        var _arr4 = [];
        var _obj2 = {
          "name": "Tnt",
          "width": 77
        };

        _arr4.push(_obj2);

        createItemArr = [].concat(createItemArr, _arr4);
      }
    } // 根据积分 生成对应个数


    if (!this.levelInfo.good) {
      return createItemArr;
    }

    var info = this.levelInfo.good.split(","); // let maxScore = this.levelInfo.maxScore;

    var scoreArr = [];

    for (var _i2 = 0; _i2 < info.length; _i2++) {
      var _info = info[_i2].split("|");

      var type = _info[0];
      var percent = Number(_info[1]);

      var _newArr = this.createByType(type, percent);

      scoreArr = [].concat(scoreArr, _newArr);
    } // 将积分数组排序


    var _scoreArr = scoreArr.sort(function (a, b) {
      if (a.score > b.score) {
        return -1;
      }

      if (a.score < b.score) {
        return 1;
      }

      return 0;
    }); // 计算所有arr中的分数是不是超过 本关的最大值 如果超过那么从后往前计算值


    var newArr = [];
    var totalScore = this.levelInfo.maxScore;
    var _score = 0;

    for (var _i3 = 0; _i3 < _scoreArr.length; _i3++) {
      _score += _scoreArr[_i3].score;

      if (_score <= totalScore) {
        newArr.push(_scoreArr[_i3]);
      } else {
        break;
      }
    }

    createItemArr = [].concat(createItemArr, newArr); // 将createItemArr排序按照宽度

    createItemArr = createItemArr.sort(function (a, b) {
      if (a.width > b.width) {
        return -1;
      }

      if (a.width < b.width) {
        return 1;
      }

      return 0;
    });
    return createItemArr;
  },
  // 根据积分跟类型生成数量name
  createByType: function createByType(type, score) {
    var arr = [];
    var _score = 0;

    switch (type) {
      case "b":
        // 当前是石块 是否有化石手册 如果有 石头的价值提升20% todo
        var promote = 1;

        if (this.handbookNumber) {
          console.log("cocos----石化手册使用成功石头的价值提升20%");
          promote = 1.2;
        }

        for (var i = 0; i < 30; i++) {
          var name = "Stone-";
          var scoreCig = [20, 30, 40];
          var widthCig = [42, 89, 154];
          var rdm = this.createRandm(0, 2);
          _score += scoreCig[rdm];

          if (_score > score) {
            break;
          }

          var obj = {
            "name": name + rdm,
            "score": scoreCig[rdm] * promote,
            "width": widthCig[rdm]
          };
          arr.push(obj);
        }

        break;

      case "g":
        // 当前是黄金
        for (var _i4 = 0; _i4 < 30; _i4++) {
          var _name = "Gold-";
          var _scoreCig = []; // 根据当前积分的最大值动态生成数组

          var __score = score - _score;

          if (__score >= 300) {
            _scoreCig = [50, 100, 150, 200, 300];
          } else {
            var _key = Math.floor(__score / 50);

            var key = _key > 4 ? 4 : _key;

            for (var k = 0; k < key; k++) {
              _scoreCig.push(50 * (1 + k));
            }
          }

          var width = {
            "50": 36,
            "100": 62,
            "150": 83,
            "200": 108,
            "300": 146
          };

          var _rdm = this.createRandm(0, _scoreCig.length - 1);

          _score += _scoreCig[_rdm];

          if (_score > score) {
            break;
          }

          if (_scoreCig.length === 0) {
            break;
          }

          var _obj3 = {
            "name": _name + _rdm,
            "score": _scoreCig[_rdm],
            "width": width["" + _scoreCig[_rdm]]
          };
          arr.push(_obj3);
        }

        break;

      case "d":
        // 当前是钻石
        for (var _i5 = 0; _i5 < 30; _i5++) {
          var _name2 = "Drill";
          _score += 400;

          if (_score > score) {
            break;
          }

          var _obj4 = {
            "name": _name2,
            "score": 400,
            "width": 29
          };
          arr.push(_obj4);
        }

        break;

      case "m":
        // 当前是神秘物品
        for (var _i6 = 0; _i6 < 30; _i6++) {
          var _name3 = "Mystery";
          var _scoreCig2 = null;

          if (score - _score > 200) {
            _scoreCig2 = this.createRandm(30, 200);
          } else if (score - _score > 30) {
            _scoreCig2 = this.createRandm(30, score - _score);
          } else {
            _scoreCig2 = 30;
          }

          _score += _scoreCig2;

          if (_score > score) {
            break;
          }

          var _obj5 = {
            "name": _name3,
            "prop": _scoreCig2,
            "width": 71
          };
          arr.push(_obj5);
        }

        break;
    }

    return arr;
  },

  /**
   * 随机坐标 判断这个坐标产生的rect是否跟其他的所有的物品的rect相接触 如果没有返回坐标 如果接触重新随机
   */
  randomXY: function randomXY(item) {
    //x = 屏幕宽度 / 2 * 随机数
    //y = 地平面位置 + 随机数cc.random0To1() +高度范围（可以说是Y的最小点）
    //地平面位置 = 地面y + 地面 高度 / 2
    // - 30是因为物品锚点在中间位置 设置坐标到范围定点的时候 会有部分超出
    var groundY = this.itemArea.y + this.itemArea.height / 2;
    var randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
    var randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2); // 随机生成的一个坐标

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

      if (isPeng) {
        return this.randomXY(item);
      } else {
        return pos;
      }
    } else {
      return pos;
    }
  },

  /**
   * @description 炸弹范围的物品进行销毁
   * @param {cc.Node} Tnt
   * @returns 
   */
  destroyTnt: function destroyTnt(Tnt) {
    // 遍历this.itemArea内所有的节点 当节点的中心节点在炸弹内 则销毁
    for (var i = this.itemArea.children.length - 1; i >= 0; i--) {
      var n = this.itemArea.children[i];

      if (n !== Tnt) {
        // 通过Tnt的中心位置 创建一个rect区域
        var _pos = Tnt.getPosition(cc.v2());

        var rect = new cc.Rect(_pos.x - 125, _pos.y - 125, 250, 250);
        var pos = n.getPosition(cc.v2());

        if (rect.contains(pos)) {
          n.removeFromParent();
          n.destroy();
          n = null;
        }
      }
    }
  },

  /**
   * 生成n-m随机数
   */
  createRandm: function createRandm(n, m) {
    m += 1;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },

  /**
   * @description 关闭绳子状态
   */
  StopHookMove: function StopHookMove() {
    this.HookState = 0;
    this.Hook.height = this.HookHeight; //重置发射钩子速度

    this.speed = 6;
    this.Hook.getChildByName("hook_1").getComponent(cc.Sprite).spriteFrame = this.HookFrames[0];
  },

  /**
   * @description 处理拉回的物品，删除物品以及添加得分
   */
  Handle: function Handle(items) {
    this.AddProp(items);
    this.AddScore(items);
    this.RemoveItem(items); // 判断是否还有物品在地图上 如果没有那么结算 结束

    if (this.itemArea.children.length === 0) {
      // 地图物品消失 结算
      // todo
      this.GameOver();
    }

    if (this.node.getChildByName("boom")) {
      var boom = this.node.getChildByName("boom");
      boom.removeFromParent();
      boom.destroy();
      boom = null;
    }
  },
  // 调整现有的炸弹的现实效果
  adjusBoomLayout: function adjusBoomLayout() {
    var layout = this.PropNode.getChildByName("Layout");
    layout.active = true;

    if (this.boomNumber >= 2) {
      this.boomNumber = 2;
    }

    for (var i = 0; i < 3; i++) {
      var boom = layout.children[i];

      if (i <= this.boomNumber) {
        boom.active = true;
      } else {
        boom.active = false;
      }
    }
  },

  /**
   * @description 获得道具
   */
  AddProp: function AddProp(items) {
    if (!items[0]) return;

    if (items[0].name === "Mystery") {
      var prop = items[0].extra;

      if (isNaN(prop)) {
        switch (prop) {
          case "炸弹":
            this.boomNumber++;
            this.adjusBoomLayout();
            this.showMestery(0);
            break;

          case "3元红包":
            this.showMestery(1);
            this.extarRedPack += 3;
            break;

          case "5元红包":
            this.showMestery(2);
            this.extarRedPack += 5;
            break;

          case "药水":
            this.showMestery(3);
            break;
        }
      } else {
        // 当前是积分
        this.Score.string = parseInt(this.Score.string) + (prop || 0);
        this.curScore += prop || 0;
        this.addAnim("score", prop);
      }

      if (cc.zm.showMusic) {
        cc.audioEngine.play(this.AddScroeAudio);
      }
    } else if (items[0].name === "Red") {
      // 随机3-8块钱 2位有效小数
      var extraRedPack = Math.floor(this.createRandm(300, 800)) / 100;
      this.extarRedPack += extraRedPack;
      this.addAnim("red", extraRedPack);

      if (cc.zm.showMusic) {
        cc.audioEngine.play(this.AddScroeAudio);
      }
    }
  },
  showMestery: function showMestery(type) {
    // ["炸弹","3元红包","5元红包","药水"]
    var mestery = this.PropNode.getChildByName("Mestery");
    mestery.active = true;
    mestery.getComponent(cc.Sprite).spriteFrame = this.PropSpriteFrames[type];
    mestery.stopAllActions();
    cc.tween(mestery).to(2, {
      y: mestery.y + 100,
      opacity: 0
    }).call(function () {
      mestery.opacity = 255;
      mestery.y -= 100;
      mestery.active = false;
    }).start();
  },

  /**
   * @description 删除物品
   */
  RemoveItem: function RemoveItem(items) {
    items.forEach(function (item) {
      if (item) {
        item.destroy();
        item = null;
      }
    });
  },

  /**
   * @description 添加得分
   */
  AddScore: function AddScore(items) {
    if (!items[0]) return;
    if (!items[0].score) return; // let scoreCon = ItemAttr[items[0].name] || {};

    this.Score.string = parseInt(this.Score.string) + (items[0].score || 0);
    this.curScore += items[0].score || 0; //播放得分音效

    if (cc.zm.showMusic) {
      cc.audioEngine.play(this.AddScroeAudio);
    } // 增加一个增加积分飘向--->Score位置点动画


    this.addAnim("score", items[0].score);
  },
  // 做一个增加积分点动画
  addAnim: function addAnim(type, score) {
    var add = null;

    if (type === "score") {
      add = this.Score.node.parent.getChildByName("addScore");
    } else if (type === "red") {
      add = this.Score.node.parent.getChildByName("addRed");
    }

    add.getComponent(cc.Label).string = "+" + score;
    add.stopAllActions();
    add.opacity = 0;
    add.y = -132;
    cc.tween(add).to(0.1, {
      opacity: 255
    }).to(1, {
      y: 42
    }).to(0.1, {
      opacity: 0
    }).start();
  },

  /**
   * 显示Mask victory=0 victory=1胜利 victory=2失败
   */
  ShowMask: function ShowMask() {
    var _this6 = this;

    //显示弹出框
    cc.Tools.showBanner();
    this.Mask.active = true; // this.PauseGameLayer()

    var Fail = this.Mask.getChildByName("Fail");
    var Success = this.Mask.getChildByName("Success");
    Fail.active = false;
    Success.active = false;

    if (cc.zm.LevelInfo.stage <= 5) {
      cc.Tools.dot("end_" + cc.zm.LevelInfo.stage, null);
    }

    if (this.victory === 1) {
      Success.active = true; // 通关成功打点

      cc.Tools.dot("through", {
        level_num: cc.zm.LevelInfo.stage,
        level_result: "成功"
      }); // 设置目标内容

      var lbl = Success.getChildByName("lbl").getComponent(cc.Label); // 像服务器发送每日任务请求

      cc.Tools.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
        var items = res.data.items;
        var item = null;

        for (var i = 0; i < items.length; i++) {
          if (!items[i].status) {
            // 未领取
            item = items[i];
            break;
          }
        } // lbl.string = `每日任务达成条件，看广告${item.curr_ad}/+${item.need_ad},需要通关${item.curr_pass_stage}/+${item.need_pass_stage}`
        // 判断各种条件
        // 先判断用户关卡条件


        lbl.string = "";

        if (item.curr_pass_stage < item.need_pass_stage) {
          // 当前关卡等级小于需要关卡等级
          lbl.string = "\u901A\u5173" + item.need_pass_stage + "\u5173\u540E\u53EF\u63D0\u73B0";
        } else {
          // 关卡等级达成 判断第二条件 
          if (item.curr_sign_in < item.need_sign_in) {
            lbl.string = "\u5B8C\u6210\u4ECA\u65E5\u7B7E\u5230\u53EF\u63D0\u73B0";
          } else {
            if (item.curr_ad < item.need_ad) {
              lbl.string = "\u518D\u770B" + (item.need_ad - item.curr_ad) + "\u4E2A\u89C6\u9891\u53EF\u63D0\u73B0";
            }
          }
        }
      });
      var awrad = Success.getChildByName("award").getComponent(cc.Label);
      awrad.string = "\u5956\u52B1\u7EA2\u5305+" + this.redPack;

      if (cc.zm.LevelInfo.ever_pass) {
        awrad.node.active = false;
      }

      var extatAward = Success.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);

      if (this.extarRedPack) {
        extatAward.node.parent.active = true;
        extatAward.string = "+" + this.extarRedPack;
      } else {
        extatAward.node.parent.active = false;
      } // 成功或者失败发送数据 red_pack:红包 score:分数 ts：时间戳 sign MD5数据
      // 


      var sendData = {
        "bomb": this.boomNumber + 1,
        //炸弹个数
        "potion": this.liquidNumber,
        //药水
        "score": this.curScore,
        //分数
        "ts": new Date().getTime() //时间戳

      };
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function (res) {
        console.log("cocos----Pass通关成功返回信息", res);
      });
    } else if (this.victory === 2) {
      Fail.active = true;
      cc.Tools.dot("through", {
        level_num: cc.zm.LevelInfo.stage,
        level_result: "失败"
      }); // 通关失败不用告诉服务器
    }

    cc.tween(this.Mask).to(0.3, {
      scale: 1
    }).call(function () {
      _this6.PauseGameLayer();
    }).start();
  },

  /**
   * 恢复游戏，关闭弹出框
   * 如果是游戏通关原因而打开的弹出框不予理睬
   */
  CloseMask: function CloseMask() {
    if (this.victory) return;
    this.ResumeGameLayer();
  },

  /**
   * 重玩本关
   */
  Reload: function Reload() {
    //停止倒计时
    this.timer && this.unschedule(this.timer); //重载场景

    cc.director.loadScene('Game');
  },

  /**
   * 继续下一关
   */
  Next: function Next() {
    var _this7 = this;

    switch (this.victory) {
      case 0:
        //继续游戏
        this.CloseMask();
        break;

      case 1:
        // 过关成功点击进入下一关之前 先获取用户信息 看用户是否有体力
        var sendData = {};
        cc.Tools.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
          cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

          if (cc.zm.userInfo.power > 0) {
            cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;

              if (cc.zm.LevelInfo.stage < 30) {
                _this7.Reload();
              } else {
                // 直接返回主界面
                cc.Tools.hideBanner();
                cc.endCountTime = new Date().getTime();
                cc.director.loadScene('Index');
              }
            });
          } else {
            // 小于0 弹出看视频获得体力的接口
            _this7.seeVideoLayer.active = true;
            cc.Tools.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;
            });
          }
        });
        break;

      case 2:
        //退出游戏
        this.ExitGame();
        break;
    }

    ;
  },
  // 看视频得红包
  AwardVideo: function AwardVideo(e) {
    console.log("cocos----看视频得奖励");
    cc.Tools.showJiliAd();
    var pack = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack;
    var sendData = {
      "red_pack": parseInt((pack + this.extarRedPack) * 100),
      //红包
      "ad": cc.zm.ad
    };
    cc.zm.videoAd.redPack = sendData;
    this.timer && this.unschedule(this.timer);
  },
  // 看视频得体力
  seeVideoAward: function seeVideoAward(e) {
    cc.zm.videoAd.enterGame = true;
    cc.Tools.showJiliAd();
    var target = e.target;
    this.timer && this.unschedule(this.timer);
    target.parent.active = false;
  },
  closeLayer: function closeLayer(e) {
    var target = e.target;
    target.parent.active = false;
  },

  /**
   * 退出游戏 返回上一个场景
   */
  ExitGame: function ExitGame() {
    cc.endCountTime = new Date().getTime();
    cc.director.loadScene('Index');
  },
  ResumeGameLayer: function ResumeGameLayer() {
    this.BackLayer.active = false;
    this.pauseGame = false;
    this.StartTime();
    this.MinerSp.paused = false;
  },
  // 暂停当前界面
  PauseGameLayer: function PauseGameLayer() {
    this.pauseGame = true;
    this.unschedule(this.timer);
    this.MinerSp.paused = true;
  },

  /**
   * 游戏结束
   * 胜利或失败都视为游戏结束
   */
  GameOver: function GameOver() {
    //判断用户得分是否超过目标分
    var s = 0;

    if (parseInt(this.Score.string) >= parseInt(this.TargetScore.string)) {
      s = 1;
    } else {
      //游戏失败
      s = 2;
    }

    ;
    this.victory = s;
    this.ShowMask();
  },
  // start () {
  // },
  update: function update(dt) {
    if (this.pauseGame) {
      return;
    }

    if (this.NeedLayer.active) {
      return;
    } // this.moveMouse();


    this.emitHook();
    this.HookRoTate();
  },
  // 使用道具
  useProp: function useProp(e, msg) {
    // 如果是炸弹
    switch (msg) {
      case "炸弹":
        // 当前的状态必须是绳子处于能拉回的状态
        // 检测是否有物品
        if (this.Hook.children[0].children[0] && this.boomNumber > -1) {
          // 使用炸弹像服务器发送消息
          if (cc.zm.showShake) {
            if (cc.sys.isNative) {
              jsb.Device.vibrate(0.3);
            }
          } // 先提前前端使用 是画面同步


          this.boomNumber--;
          this.adjusBoomLayout(); // 获取拉去的物品的位置

          var _node = this.Hook.children[0].children[0];

          var pos = _node.convertToWorldSpaceAR(cc.v2(0, 0)); // 添加炸弹效果


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
          cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta);
        }

        break;

      default:
        break;
    }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzcGxheU5hbWUiLCJyb3RhdGVTcGVlZCIsIkhvb2tSYW5nZSIsIlByZWZhYnMiLCJ0eXBlIiwiUHJlZmFiIiwiSW5pdFRpbWUiLCJDb2xsaXNpb25BdWRpbyIsIkF1ZGlvQ2xpcCIsIkFkZFNjcm9lQXVkaW8iLCJQcm9wU3ByaXRlRnJhbWVzIiwiU3ByaXRlRnJhbWUiLCJCb29tIiwiSG9va0ZyYW1lcyIsIkhlcm9GcmFtZXMiLCJMb3R0ZXJ5RnJhbXNlIiwib25Mb2FkIiwiaW5pdCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwic2V0R3VpZGUiLCJpbmRleCIsImd1aWRlSW5kZXgiLCJndWlkZSIsImZpbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIm5leHRHdWlkZSIsImUiLCJtc2ciLCJndWlkZV8xIiwiZ3VpZGVfMiIsImd1aWRlXzMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiUmVzdW1lR2FtZUxheWVyIiwiaGlkZU5lZWRMYXllciIsIlRvb2xzIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGlkZUJhbm5lciIsImhhbmRsZURhb2p1IiwiYWRqdXNCb29tTGF5b3V0Iiwic3RhZ2UiLCJkb3QiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJIb29rIiwiSG9va0hlaWdodCIsImhlaWdodCIsIkhvb2tTdGF0ZSIsImN1clNjb3JlIiwicGF1c2VHYW1lIiwiTWluZXJTcCIsImdldENvbXBvbmVudCIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJzaG93QmFubmVyIiwibmVlZFNjb3JlIiwibmVlZExldmVsIiwic3RyaW5nIiwic2NvcmUiLCJpZCIsImFyciIsInJkbSIsImNyZWF0ZVJhbmRtIiwiTG90dGVyeVByb3AiLCJpY29uIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJMb29rVmlkZW9HZXRBd2FyZCIsInNob3dKaWxpQWQiLCJzZW5kRGF0YSIsImFkIiwiTG90dGVyeUF3YXJkIiwiYXdhcmQiLCJ3ZWFwb24iLCJpIiwibnVtIiwiY2xvY2tOdW1iZXIiLCJoYW5kYm9va051bWJlciIsImNsb3Zlck51bWJlciIsImxlbmd0aCIsIkhvb2tSb1RhdGUiLCJhbmdsZSIsIk1hdGgiLCJhYnMiLCJzZXRBbmltYXRpb24iLCJjaGlsZHJlbiIsImNoaWxkcmVuQ291bnQiLCJIYW5kbGUiLCJhZGRBbmltYXRpb24iLCJTdG9wSG9va01vdmUiLCJQdWxsQmFja0hvb2siLCJTZXRTcGVlZCIsIm90aGVyIiwicHJvbW90ZSIsIkl0ZW1BdHRyIiwibm9kZSIsIm5hbWUiLCJ2aWN0b3J5IiwidGltZXIiLCJ1bnNjaGVkdWxlIiwiR2FtZU92ZXIiLCJzY2hlZHVsZSIsIkxldmVsIiwiY3VycmVudF9zY29yZSIsIm5ld0l0ZW1BcnIiLCJuZXdDcmVhdGVDYWxjIiwiaW5zdGFudGlhdGUiLCJYWSIsInJhbmRvbVhZIiwicGFyZW50IiwiZXh0cmEiLCJzZXRQb3NpdGlvbiIsImJvb20iLCJhZGRDaGlsZCIsInYyIiwieCIsInkiLCJtb3VzZSIsInNwbGl0IiwibW91c2VOdW1iZXIiLCJOdW1iZXIiLCJyYW5kWCIsIndpZHRoIiwicmFuZG9tIiwicmFuZFkiLCJwb3MiLCJtb3ZlTW91c2UiLCJEcmlsbE1vdXNlTnVtYmVyIiwiX21vdmVUaW1lIiwidGltZSIsInR3ZWVuIiwidG8iLCJzdGFydCIsInNjaGVkdWxlT25jZSIsInNjYWxlWCIsInJlcGVhdEZvcmV2ZXIiLCJkZWxheSIsImNhbGwiLCJjcmVhdGVJdGVtQXJyIiwiX2FyciIsIm9iaiIsInB1c2giLCJfcHJvcCIsInJtZCIsImdvb2QiLCJpbmZvIiwic2NvcmVBcnIiLCJfaW5mbyIsInBlcmNlbnQiLCJuZXdBcnIiLCJjcmVhdGVCeVR5cGUiLCJfc2NvcmVBcnIiLCJzb3J0IiwiYSIsImIiLCJ0b3RhbFNjb3JlIiwibWF4U2NvcmUiLCJfc2NvcmUiLCJzY29yZUNpZyIsIndpZHRoQ2lnIiwiX19zY29yZSIsIl9rZXkiLCJmbG9vciIsImtleSIsImsiLCJncm91bmRZIiwicmVjdCIsIlJlY3QiLCJpc1BlbmciLCJuIiwiYm91bmRpbmdCb3giLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJkZXN0cm95VG50IiwiVG50IiwiX3BvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbnMiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsIm0iLCJpdGVtcyIsIkFkZFByb3AiLCJBZGRTY29yZSIsIlJlbW92ZUl0ZW0iLCJsYXlvdXQiLCJpc05hTiIsInNob3dNZXN0ZXJ5IiwiYWRkQW5pbSIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwicGxheSIsImV4dHJhUmVkUGFjayIsIm1lc3RlcnkiLCJzdG9wQWxsQWN0aW9ucyIsIm9wYWNpdHkiLCJhZGQiLCJTaG93TWFzayIsIkZhaWwiLCJTdWNjZXNzIiwibGV2ZWxfbnVtIiwibGV2ZWxfcmVzdWx0IiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV2ZXJfcGFzcyIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJSZWxvYWQiLCJsb2FkU2NlbmUiLCJOZXh0IiwidXNlckluZm8iLCJwb3dlciIsImVuZENvdW50VGltZSIsIkV4aXRHYW1lIiwiQXdhcmRWaWRlbyIsInBhY2siLCJ2aWRlb0FkIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInRhcmdldCIsImNsb3NlTGF5ZXIiLCJwYXVzZWQiLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtBQUVIQyxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsQ0FEQTtBQUVURCxNQUFBQSxXQUFXLEVBQUU7QUFGSixLQVBMO0FBV1I7QUFDQUUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsRUFERjtBQUVQRixNQUFBQSxX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O0FBQ0EsY0FBSTJDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FoRCxVQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1ERyxPQUFuRDtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFwQ1I7QUFzQ0g7QUF6cUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5byV5YWlIOW+l+WIhuetiemFjee9riDlpKrplb8g5omA5Lul5o2i5Liq5paH5Lu25YaZXG5pbXBvcnQgSXRlbUF0dHIgZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IExldmVsIGZyb20gJy4vTGV2ZWwnO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/pkqnlrZDpgJ/luqZcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDml4vovazpgJ/luqZcbiAgICAgICAgcm90YXRlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDojIPlm7RcbiAgICAgICAgSG9va1JhbmdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA3MCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6KeS5bqm6IyD5Zu0J1xuICAgICAgICB9LFxuICAgICAgICAvL+aJgOacieeahHByZWZhYiDov5nnp43mlrnlvI/mmK/lkIzmraXnmoQg5Luj56CB5q+U6L6D5aW95YaZIOWwseaYr+mavuaLllxuICAgICAgICBQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBJbml0VGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6Kem56Kw5Yiw54mp5ZOB55qE5aOw6Z+zXG4gICAgICAgIENvbGxpc2lvbkF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvL+WKoOWIhueahOWjsOmfs1xuICAgICAgICBBZGRTY3JvZUF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvLyDpgZPlhbfnmoTnurnnkIZcbiAgICAgICAgUHJvcFNwcml0ZUZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgQm9vbToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgSG9va0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgSGVyb0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgTG90dGVyeUZyYW1zZToge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIneWni+WMllxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgLy/liqDovb3pppbpobXotYTmupBcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgc2V0R3VpZGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3VpZGVJbmRleDtcbiAgICAgICAgaWYgKGluZGV4IDw9IDMpIHtcbiAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlX1wiICsgaW5kZXgpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dEd1aWRlKGUsIG1zZykge1xuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKTtcbiAgICAgICAgbGV0IGd1aWRlXzEgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzFcIik7XG4gICAgICAgIGxldCBndWlkZV8yID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMyA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKTtcbiAgICAgICAgZ3VpZGVfMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1zZyA9PT0gXCIyXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDIpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjNcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMyk7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiNFwiKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgNCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZU5lZWRMYXllcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5byA5aeL5ri45oiPIOmCo+S5iOWIt+aWsOS4gOS4i+mBk+WFt+aVsOaNrlxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS3kvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICAvLyDlr7nlhbPljaHov5vooYzmiZPngrlcbiAgICAgICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic3RhcnRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlLG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICAvL+iOt+WPlumSqeWtkFxuICAgICAgICB0aGlzLkhvb2sgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyL0hvb2snKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDliJ3lp4vplb/luqZcbiAgICAgICAgdGhpcy5Ib29rSGVpZ2h0ID0gdGhpcy5Ib29rLmhlaWdodDtcbiAgICAgICAgLy/mlL7kuIvpkqnlrZDlvIDlhbMgMCDlgZzmraIgMSDlj5HlsIQgMuaLieWbnlxuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICAvLyDliJ3lp4vljJbnn7/lt6XnmoTnsr7ngbXluKdcbiAgICAgICAgdGhpcy5NaW5lclNwID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgIHRoaXMuc2VlVmlkZW9MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZWVWaWRlb2xheWVyJylcbiAgICAgICAgLy/lvpfliIbntK/orqFcbiAgICAgICAgdGhpcy5TY29yZSA9IGNjLmZpbmQoJ0NhbnZhcy9TY29yZUFuZFRhcmdldC9TY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v6YCa5YWz55uu5qCH5YiG5pWwXG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvVGFyZ2V0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lgJLorqHml7ZcbiAgICAgICAgdGhpcy5UaW1lID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL1RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+WFs+WNoeaVsFxuICAgICAgICB0aGlzLkNoZWNrcG9pbnQgPSBjYy5maW5kKCdDYW52YXMvQ2hlY2twb2ludEFuZFRpbWUvQ2hlY2twb2ludCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuTmVlZExheWVyID0gY2MuZmluZCgnQ2FudmFzL05lZWRMYXllcicpO1xuICAgICAgICB0aGlzLkJhY2tMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrTGF5ZXInKTtcbiAgICAgICAgdGhpcy5Qcm9wTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvUHJvcCcpO1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllciA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwiTG90dGVyeUxheWVyXCIpO1xuICAgICAgICAvL+eJqeWTgeWMuuWfn1xuICAgICAgICB0aGlzLml0ZW1BcmVhID0gY2MuZmluZCgnQ2FudmFzL0l0ZW1BcmVhJyk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKeXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy/ph43nu4RwcmVmYWLmlbDnu4Qg5pa55L6/5p+l6K+iXG4gICAgICAgIHRoaXMuUHJlZmFiID0ge307XG4gICAgICAgIHRoaXMuUHJlZmFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5QcmVmYWJbaXRlbS5fbmFtZV0gPSBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WPkeWwhOmSqeWtkOaMiemSrlxuICAgICAgICBsZXQgZW1pdEhvb2sgPSBjYy5maW5kKCdDYW52YXMvZW1pdEhvb2tCdG4nKTtcbiAgICAgICAgLy/lvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnQ2FudmFzL01hc2snKTtcbiAgICAgICAgLy/muLjmiI/nu5PmnZ/mjInpkq4g5YyF5ous6L+H5YWzL+e7k+adn+a4uOaIj1xuICAgICAgICB0aGlzLk1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLkNsb3NlTWFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZW1pdEhvb2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVtaXRIb29rQnRuLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAtMTtcbiAgICAgICAgdGhpcy5saXF1aWROdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIHRoaXMuUmVzZXRJbmZvKCk7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuU2V0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVUYXJnZXRTY29yZSgpO1xuICAgICAgICB0aGlzLkNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgdGhpcy5yZWRQYWNrID0gdGhpcy5sZXZlbEluZm8ucmVkUGFjaztcbiAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgPSAwO1xuICAgICAgICAvLyDmmK/lkKbmlrDmiYvlvJXlr7xcbiAgICAgICAgdGhpcy5ndWlkZUluZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpO1xuICAgICAgICBpZiAodGhpcy5ndWlkZUluZGV4IDwgNCAmJiB0aGlzLmd1aWRlSW5kZXggPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmnInmlrDmiYvlvJXlr7zmmoLlgZzmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEd1aWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmVlZFNjb3JlID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxldCBuZWVkTGV2ZWwgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRMZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbmVlZFNjb3JlLnN0cmluZyA9IGDopoHmsYLliIbmlbDvvJoke3RoaXMubGV2ZWxJbmZvLnNjb3JlfWBcbiAgICAgICAgICAgIG5lZWRMZXZlbC5zdHJpbmcgPSBg56ysJHt0aGlzLmxldmVsSW5mby5pZH3lhbNgO1xuICAgICAgICAgICAgLy8g5oq95aWW6YCJ5YWz5Y2hXG4gICAgICAgICAgICAvLyDliY3nq6/pmo/mnLrkuIDkuKrpgZPlhbdcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICBsZXQgYXJyID0gWzEwLCAxMSwgMTNdO1xuICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMik7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGFycltyZG1dO1xuICAgICAgICAgICAgdGhpcy5Mb3R0ZXJ5UHJvcCA9IHByb3A7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuTG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMl1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzBdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBMb29rVmlkZW9HZXRBd2FyZCgpIHtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkLFxuICAgICAgICAgICAgXCJ3ZWFwb25cIjogdGhpcy5Mb3R0ZXJ5UHJvcFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5MlwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeUF3YXJkID0gcmVzLmRhdGEuYXdhcmQ7XG4gICAgICAgICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICBoYW5kbGVEYW9qdSgpIHtcbiAgICAgICAgLy8g6YGT5YW355qE5pWw6YeP5Li6XG4gICAgICAgIGxldCB3ZWFwb24gPSBjYy56bS5MZXZlbEluZm8ud2VhcG9uO1xuICAgICAgICAvLyBwcm9w57G75Z6LIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDEzLuiNr+awtCAxNC7kuInlj7bojYlcbiAgICAgICAgLy8g5aSE55CG6YGT5YW3IOmBk+WFt+WIhuWIq+S4uiDngrjlvLkgYm9vbU51bWJlciDml7bpkp8gY2xvY2tOdW1iZXIg55+z5YyW5omL5YaMIGhhbmRib29rTnVtYmVyIOiNr+awtCBsaXF1aWROdW1iZXIg5LiJ5Y+26I2JIGNsb3Zlck51bWJlclxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiBcIuS9k+WKm1wiLFxuICAgICAgICAgICAgXCIxMFwiOiBcIueCuOW8uVwiLFxuICAgICAgICAgICAgXCIxMVwiOiBcIuaXtumSn1wiLFxuICAgICAgICAgICAgXCIxMlwiOiBcIuefs+WMluaJi+WGjFwiLFxuICAgICAgICAgICAgXCIxM1wiOiBcIuiNr+awtFwiLFxuICAgICAgICAgICAgXCIxNFwiOiBcIuS4ieWPtuiNiVwiXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWFwb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSB3ZWFwb25baV0ubnVtIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5YW25LuW54mp5ZOB6YKj5LmI55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogd2VhcG9uW2ldLnByb3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0t5L2/55So5oiQ5YqfLVwiLCBkYXRhW3dlYXBvbltpXS5wcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSB3ZWFwb25baV0ubnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kYm9va051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpcXVpZE51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Zlck51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZKp5a2Q5peL6L2sXG4gICAgICovXG4gICAgSG9va1JvVGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgLy/pmZDliLbojIPlm7Qg5Y+q6IO95ZyoIDcwIOS4jiAtNzAg5LmL6Ze0XG4gICAgICAgIGlmICh0aGlzLkhvb2suYW5nbGUgPj0gNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAtdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkhvb2suYW5nbGUgPD0gLTcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gTWF0aC5hYnModGhpcy5yb3RhdGVTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5Ib29rLmFuZ2xlICs9IHRoaXMucm90YXRlU3BlZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZDmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBlbWl0SG9va0J0bigpIHtcbiAgICAgICAgLy9UT0RPIOWBnOatoumSqeWtkOaXi+i9rFxuICAgICAgICAvL+aJk+W8gC/lhbPpl60g6ZKp5a2Q5byA5YWzIOayoeacieaLieWbnuS5i+WJjSDlvZPliY1wb3NpdGlvbiDvvIE9IOWIneWni+S9jee9ruaXtiDkuI3lhYHorrjmk43kvZxcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG4gICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwiZmFuZ1wiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2QXG4gICAgICovXG4gICAgZW1pdEhvb2soKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5Ib29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlM1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLmFkZEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcEhvb2tNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmi4nlm57pkqnlrZBcbiAgICAgKi9cbiAgICBQdWxsQmFja0hvb2soKSB7XG4gICAgICAgIC8v5pKt5pS+5ouJ5Zue6ZKp5a2Q5Yqo55S7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwibGFcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3oja/msLTmlYjmnpzpgJ/luqblop7liqAxMCVcIilcbiAgICAgICAgICAgIHByb21vdGUgPSAxLjFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwZWVkID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXS5zcGVlZCAqIHByb21vdGUgfHwgMTA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaJgOacieWIhuaVsOS/oeaBr1xuICAgICAqL1xuICAgIFJlc2V0SW5mbygpIHtcbiAgICAgICAgLy90aGlzLnZpY3Rvcnkg5ri45oiP6IOc5Yip5aSx6LSl54q25oCBIDAgPSDmuLjmiI/kuK0gMSA9IOaIkOWKnyAyID0g5aSx6LSlXG4gICAgICAgIHRoaXMudmljdG9yeSA9XG4gICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuQ2hlY2twb2ludC5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjlgJLorqHml7ZcbiAgICAgKi9cbiAgICBTdGFydFRpbWUoKSB7XG4gICAgICAgIC8vIOaYr+WQpuWtmOWcqOaXtumSnyDlrZjlnKjml7bpkp8gdGhpcy5Jbml0VGltZSsxMOenklxuICAgICAgICBpZiAodGhpcy5jbG9ja051bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3kvb/nlKjml7bpkp/miJDlip8rMTBzXCIpXG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMTVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnoa7lrprov4flhbPnm67moIfliIbmlbBcbiAgICAgKiDnm67moIfliIbmlbDmoLnmja7lhbPljaHlhbPmlbDnoa7lrpog6Zq+5bqm57Sv5Yqg546H5Li6XG4gICAgICogIOWfuuaVsCAxMDAwXG4gICAgICogIOavj+WFs+mAkuWinjUwMOWIhlxuICAgICAqIFxuICAgICAqIOacgOWkpyA1MDAw5YiGXG4gICAgICovXG4gICAgQ3JlYXRlVGFyZ2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nID0gdGhpcy5sZXZlbEluZm8uc2NvcmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOeJqeWTgSDpnIDopoHmoLnmja7nm67moIfliIbmnaXnlJ/miJAg55Sf5oiQ55qE5omA5pyJ54mp5ZOB5oC75YiG5b+F6aG75q+U55uu5qCH6L+H5YWz5YiG5pWw6auYMjAlXG4gICAgICog55Sf5oiQ55qE54mp5ZOB5pWw6YeP5ZyoIDEwLTMwXG4gICAgICovXG4gICAgQ3JlYXRlSXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1BcnIgPSB0aGlzLm5ld0NyZWF0ZUNhbGMoKTtcbiAgICAgICAgLy8g5YaZ5LiA5Liq566X5rOVIOagueaNruWIhuaVsOWFiOWwhmFyciDmjpLluo8g5oC75YiG5LiN6IO96LaF6L+H5pyA5aSn5YiG5pWwIOWmguaenOi2heS6hiDliJnku47lsI/lvIDlp4vlh4/lsJEg55u05Yiw5YiG5pWw5bCP5LqO5pyA5aSn5YiG5pWwXG4gICAgICAgIC8v55Sf5oiQ55u45bqU55qEUHJmYWJcbiAgICAgICAgbmV3SXRlbUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltpdGVtLm5hbWVdKTtcbiAgICAgICAgICAgIGxldCBYWSA9IHRoaXMucmFuZG9tWFkobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICBpZiAoaXRlbS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvcCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXh0cmEgPSBpdGVtLnByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKFhZKTtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiVG50XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQm9vbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgIGJvb20ubmFtZSA9IFwidG50Qm9vbVwiO1xuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIoWFkueCwgWFkueSAtIDIxOCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuYm9vbSA9IGJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b2Rv5YWI5LiN5Yib5bu66ICB6byg6K+V6K+VXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5tb3VzZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsSW5mby5tb3VzZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyDmma7pgJrogIHpvKBcbiAgICAgICAgICAgIGxldCBtb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzBdKTtcbiAgICAgICAgICAgIGlmIChtb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdXNlTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltcIk1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNTA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTW91c2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IERyaWxsTW91c2VOdW1iZXIgPSBOdW1iZXIoZGF0YVsxXSk7XG4gICAgICAgICAgICBpZiAoRHJpbGxNb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERyaWxsTW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiRHJpbGxNb3VzZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeUn+aIkOeahOeJqeWTgeaYr+WPr+WKqOeahFxuICAgIG1vdmVNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyDlhYjlsIbogIHpvKDnp7vliqjliLDmnIDlj7Povrkg5pe26Ze05Li6NjAwL+i3neemuyo1XG4gICAgICAgIGxldCBfbW92ZVRpbWUgPSAxMFxuICAgICAgICBsZXQgdGltZSA9IChwYXJzZUludCgzMDAgLSBtb3VzZS54KSAvIDYwMCkgKiBfbW92ZVRpbWVcbiAgICAgICAgY2MudHdlZW4obW91c2UpLnRvKHRpbWUsIHsgeDogMzAwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8g546w5Zyo5byA5aeLIOiAgem8oOWBmuinhOW+i+i/kOWKqOWFiOWwhuiAgem8oOWPjei9rFxuICAgICAgICAgICAgaWYgKG1vdXNlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAtMTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb3VzZSkucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKF9tb3ZlVGltZSwgeyB4OiAtMzAwIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIH0pLnRvKF9tb3ZlVGltZSwgeyB4OiAzMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIH0pKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUgKyAxKVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOV44CC44CC5LiA5Y+q5pyJ5LiA5Liq5oC75pWw6YePIOWPr+S7peW+l+WIsCDlkITkuKrnianlk4HnmoTmlbDph49cbiAgICBuZXdDcmVhdGVDYWxjKCkge1xuICAgICAgICBsZXQgY3JlYXRlSXRlbUFyciA9IFtdO1xuICAgICAgICAvLyDlhYjnlJ/miJDnuqLljIXot5/npZ7np5jnianlk4FcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmEgPSB0aGlzLmxldmVsSW5mby5leHRyYS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyAw5piv57qi5YyFIOWIm+W7uuS4gOS4que6ouWMhVxuICAgICAgICAgICAgaWYgKGV4dHJhWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8g5byA5Ye655qE57qi5YyF6YeR6aKdXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dHJhWzFdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgSDlhYjpmo/mnLrlh7rnianlk4Eg5piv5ZCm5pyJ5LiJ5Y+26I2JIOWmguaenOaciSDoja/msLTnmoTpmo/mnLrmpoLnjoflop7liqBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbG92ZXJOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXCLngrjlvLlcIiwgXCIz5YWD57qi5YyFXCIsIFwiNeWFg+e6ouWMhVwiLCBcIuiNr+awtFwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJtZCA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9wID0gYXJyW3JtZF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlzdGVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IF9wcm9wLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uYm9vbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsSW5mby5ib29tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRudFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7np6/liIYg55Sf5oiQ5a+55bqU5Liq5pWwXG4gICAgICAgIGlmICghdGhpcy5sZXZlbEluZm8uZ29vZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmxldmVsSW5mby5nb29kLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgLy8gbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbEluZm8ubWF4U2NvcmU7XG4gICAgICAgIGxldCBzY29yZUFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfaW5mbyA9IGluZm9baV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBfaW5mb1swXTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKF9pbmZvWzFdKVxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuY3JlYXRlQnlUeXBlKHR5cGUsIHBlcmNlbnQpO1xuICAgICAgICAgICAgc2NvcmVBcnIgPSBbLi4uc2NvcmVBcnIsIC4uLm5ld0Fycl1cbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbnp6/liIbmlbDnu4TmjpLluo9cbiAgICAgICAgbGV0IF9zY29yZUFyciA9IHNjb3JlQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPCBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiuoeeul+aJgOaciWFycuS4reeahOWIhuaVsOaYr+S4jeaYr+i2hei/hyDmnKzlhbPnmoTmnIDlpKflgLwg5aaC5p6c6LaF6L+H6YKj5LmI5LuO5ZCO5b6A5YmN6K6h566X5YC8XG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Njb3JlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2NvcmUgKz0gX3Njb3JlQXJyW2ldLnNjb3JlO1xuICAgICAgICAgICAgaWYgKF9zY29yZSA8PSB0b3RhbFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goX3Njb3JlQXJyW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLm5ld0Fycl07XG4gICAgICAgIC8vIOWwhmNyZWF0ZUl0ZW1BcnLmjpLluo/mjInnhaflrr3luqZcbiAgICAgICAgY3JlYXRlSXRlbUFyciA9IGNyZWF0ZUl0ZW1BcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA8IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgfSxcbiAgICAvLyDmoLnmja7np6/liIbot5/nsbvlnovnlJ/miJDmlbDph49uYW1lXG4gICAgY3JlYXRlQnlUeXBlKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/nn7PlnZcg5piv5ZCm5pyJ5YyW55+z5omL5YaMIOWmguaenOaciSDnn7PlpLTnmoTku7flgLzmj5DljYcyMCUgdG9kb1xuICAgICAgICAgICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kYm9va051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeefs+WMluaJi+WGjOS9v+eUqOaIkOWKn+efs+WktOeahOS7t+WAvOaPkOWNhzIwJVwiKVxuICAgICAgICAgICAgICAgICAgICBwcm9tb3RlID0gMS4yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiU3RvbmUtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gWzIwLCAzMCwgNDBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhDaWcgPSBbNDIsIDg5LCAxNTRdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dICogcHJvbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhDaWdbcmRtXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/pu4Tph5FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkdvbGQtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruW9k+WJjeenr+WIhueahOacgOWkp+WAvOWKqOaAgeeUn+aIkOaVsOe7hFxuICAgICAgICAgICAgICAgICAgICBsZXQgX19zY29yZSA9IHNjb3JlIC0gX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19zY29yZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gWzUwLCAxMDAsIDE1MCwgMjAwLCAzMDBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9rZXkgPSBNYXRoLmZsb29yKF9fc2NvcmUgLyA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBfa2V5ID4gNCA/IDQgOiBfa2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcucHVzaCg1MCAqICgxICsgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNTBcIjogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEwMFwiOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTUwXCI6IDgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyMDBcIjogMTA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDBcIjogMTQ2XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgc2NvcmVDaWcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSBzY29yZUNpZ1tyZG1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZUNpZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSArIHJkbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogc2NvcmVDaWdbcmRtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhbXCJcIiArIHNjb3JlQ2lnW3JkbV1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+mSu+efs1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiRHJpbGxcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyOVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/npZ7np5jnianlk4FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgLSBfc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSAtIF9zY29yZSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZyA9IHRoaXMuY3JlYXRlUmFuZG0oMzAsIHNjb3JlIC0gX3Njb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiBzY29yZUNpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpmo/mnLrlnZDmoIcg5Yik5pat6L+Z5Liq5Z2Q5qCH5Lqn55Sf55qEcmVjdOaYr+WQpui3n+WFtuS7lueahOaJgOacieeahOeJqeWTgeeahHJlY3Tnm7jmjqXop6Yg5aaC5p6c5rKh5pyJ6L+U5Zue5Z2Q5qCHIOWmguaenOaOpeinpumHjeaWsOmaj+aculxuICAgICAqL1xuICAgIHJhbmRvbVhZKGl0ZW0pIHtcbiAgICAgICAgLy94ID0g5bGP5bmV5a695bqmIC8gMiAqIOmaj+acuuaVsFxuICAgICAgICAvL3kgPSDlnLDlubPpnaLkvY3nva4gKyDpmo/mnLrmlbBjYy5yYW5kb20wVG8xKCkgK+mrmOW6puiMg+WbtO+8iOWPr+S7peivtOaYr1nnmoTmnIDlsI/ngrnvvIlcbiAgICAgICAgLy/lnLDlubPpnaLkvY3nva4gPSDlnLDpnaJ5ICsg5Zyw6Z2iIOmrmOW6piAvIDJcbiAgICAgICAgLy8gLSAzMOaYr+WboOS4uueJqeWTgemUmueCueWcqOS4remXtOS9jee9riDorr7nva7lnZDmoIfliLDojIPlm7TlrprngrnnmoTml7blgJkg5Lya5pyJ6YOo5YiG6LaF5Ye6XG4gICAgICAgIGxldCBncm91bmRZID0gdGhpcy5pdGVtQXJlYS55ICsgdGhpcy5pdGVtQXJlYS5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIC8vIOmaj+acuueUn+aIkOeahOS4gOS4quWdkOagh1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChwb3MueCAtIGl0ZW0ud2lkdGggLyAyLCBwb3MueSAtIGl0ZW0uaGVpZ2h0IC8gMiwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IGlzUGVuZyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG4uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guaW50ZXJzZWN0cyhyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBpc1BlbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQZW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tWFkoaXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDngrjlvLnojIPlm7TnmoTnianlk4Hov5vooYzplIDmr4FcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IFRudFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRlc3Ryb3lUbnQoVG50KSB7XG4gICAgICAgIC8vIOmBjeWOhnRoaXMuaXRlbUFyZWHlhoXmiYDmnInnmoToioLngrkg5b2T6IqC54K555qE5Lit5b+D6IqC54K55Zyo54K45by55YaFIOWImemUgOavgVxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG4gIT09IFRudCkge1xuICAgICAgICAgICAgICAgIC8vIOmAmui/h1RudOeahOS4reW/g+S9jee9riDliJvlu7rkuIDkuKpyZWN05Yy65Z+fXG4gICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBUbnQuZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChfcG9zLnggLSAxMjUsIF9wb3MueSAtIDEyNSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBuLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeUn+aIkG4tbemaj+acuuaVsFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWFs+mXree7s+WtkOeKtuaAgVxuICAgICAqL1xuICAgIFN0b3BIb29rTW92ZSgpIHtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ID0gdGhpcy5Ib29rSGVpZ2h0O1xuICAgICAgICAvL+mHjee9ruWPkeWwhOmSqeWtkOmAn+W6plxuICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgdGhpcy5Ib29rLmdldENoaWxkQnlOYW1lKFwiaG9va18xXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Ib29rRnJhbWVzWzBdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlpITnkIbmi4nlm57nmoTnianlk4HvvIzliKDpmaTnianlk4Hku6Xlj4rmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBIYW5kbGUoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5BZGRQcm9wKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5BZGRTY29yZShpdGVtcyk7XG4gICAgICAgIHRoaXMuUmVtb3ZlSXRlbShpdGVtcyk7XG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui/mOacieeJqeWTgeWcqOWcsOWbvuS4iiDlpoLmnpzmsqHmnInpgqPkuYjnu5Pnrpcg57uT5p2fXG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5Zyw5Zu+54mp5ZOB5raI5aSxIOe7k+eul1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIilcbiAgICAgICAgICAgIGJvb20ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgYm9vbS5kZXN0cm95KCk7XG4gICAgICAgICAgICBib29tID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6LCD5pW0546w5pyJ55qE54K45by555qE546w5a6e5pWI5p6cXG4gICAgYWRqdXNCb29tTGF5b3V0KCkge1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcbiAgICAgICAgbGF5b3V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvb21OdW1iZXIgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJvb20gPSBsYXlvdXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaSA8PSB0aGlzLmJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfpgZPlhbdcbiAgICAgKi9cbiAgICBBZGRQcm9wKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiTXlzdGVyeVwiKSB7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGl0ZW1zWzBdLmV4dHJhO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM+WFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjXlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLoja/msLRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+enr+WIhlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBwcm9wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtc1swXS5uYW1lID09PSBcIlJlZFwiKSB7XG4gICAgICAgICAgICAvLyDpmo/mnLozLTjlnZfpkrEgMuS9jeacieaViOWwj+aVsFxuICAgICAgICAgICAgbGV0IGV4dHJhUmVkUGFjayA9IChNYXRoLmZsb29yKHRoaXMuY3JlYXRlUmFuZG0oMzAwLCA4MDApKSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSBleHRyYVJlZFBhY2s7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJyZWRcIiwgZXh0cmFSZWRQYWNrKTtcbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNZXN0ZXJ5KHR5cGUpIHtcbiAgICAgICAgLy8gW1wi54K45by5XCIsXCIz5YWD57qi5YyFXCIsXCI15YWD57qi5YyFXCIsXCLoja/msLRcIl1cbiAgICAgICAgbGV0IG1lc3RlcnkgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTWVzdGVyeVwiKTtcbiAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBtZXN0ZXJ5LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Qcm9wU3ByaXRlRnJhbWVzW3R5cGVdO1xuICAgICAgICBtZXN0ZXJ5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKG1lc3RlcnkpLnRvKDIsIHsgeTogbWVzdGVyeS55ICsgMTAwLCBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgbWVzdGVyeS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgbWVzdGVyeS55IC09IDEwMDtcbiAgICAgICAgICAgIG1lc3RlcnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTnianlk4FcbiAgICAgKi9cbiAgICBSZW1vdmVJdGVtKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBBZGRTY29yZShpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmICghaXRlbXNbMF0uc2NvcmUpIHJldHVybjtcbiAgICAgICAgLy8gbGV0IHNjb3JlQ29uID0gSXRlbUF0dHJbaXRlbXNbMF0ubmFtZV0gfHwge307XG4gICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICB0aGlzLmN1clNjb3JlICs9IChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWinuWKoOS4gOS4quWinuWKoOenr+WIhumjmOWQkS0tLT5TY29yZeS9jee9rueCueWKqOeUu1xuICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBpdGVtc1swXS5zY29yZSlcbiAgICB9LFxuICAgIC8vIOWBmuS4gOS4quWinuWKoOenr+WIhueCueWKqOeUu1xuICAgIGFkZEFuaW0odHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFkZCA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09PSBcInNjb3JlXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRTY29yZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlZFwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkUmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFkZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgc2NvcmU7XG4gICAgICAgIGFkZC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBhZGQub3BhY2l0eSA9IDA7XG4gICAgICAgIGFkZC55ID0gLTEzMjtcbiAgICAgICAgY2MudHdlZW4oYWRkKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLnRvKDEsIHsgeTogNDIgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pi+56S6TWFzayB2aWN0b3J5PTAgdmljdG9yeT0x6IOc5YipIHZpY3Rvcnk9MuWksei0pVxuICAgICAqL1xuICAgIFNob3dNYXNrKCkge1xuICAgICAgICAvL+aYvuekuuW8ueWHuuahhlxuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIHRoaXMuTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLlBhdXNlR2FtZUxheWVyKClcbiAgICAgICAgbGV0IEZhaWwgPSB0aGlzLk1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJGYWlsXCIpO1xuICAgICAgICBsZXQgU3VjY2VzcyA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIlN1Y2Nlc3NcIik7XG4gICAgICAgIEZhaWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIFN1Y2Nlc3MuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJlbmRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlLG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5Yqf5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5oiQ5YqfXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacqumihuWPllxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYmwuc3RyaW5nID0gYOavj+aXpeS7u+WKoei+vuaIkOadoeS7tu+8jOeci+W5v+WRiiR7aXRlbS5jdXJyX2FkfS8rJHtpdGVtLm5lZWRfYWR9LOmcgOimgemAmuWFsyR7aXRlbS5jdXJyX3Bhc3Nfc3RhZ2V9Lyske2l0ZW0ubmVlZF9wYXNzX3N0YWdlfWBcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3lkITnp43mnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3nlKjmiLflhbPljaHmnaHku7ZcbiAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3Bhc3Nfc3RhZ2UgPCBpdGVtLm5lZWRfcGFzc19zdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3lhbPljaHnrYnnuqflsI/kuo7pnIDopoHlhbPljaHnrYnnuqdcbiAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDpgJrlhbMke2l0ZW0ubmVlZF9wYXNzX3N0YWdlfeWFs+WQjuWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhbPljaHnrYnnuqfovr7miJAg5Yik5pat56ys5LqM5p2h5Lu2IFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3NpZ25faW4gPCBpdGVtLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlrozmiJDku4rml6Xnrb7liLDlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX2FkIDwgaXRlbS5uZWVkX2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlho3nnIske2l0ZW0ubmVlZF9hZCAtIGl0ZW0uY3Vycl9hZH3kuKrop4bpopHlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGF3cmFkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBhd3JhZC5zdHJpbmcgPSBg5aWW5Yqx57qi5YyFKyR7dGhpcy5yZWRQYWNrfWA7XG4gICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcykge1xuICAgICAgICAgICAgICAgIGF3cmFkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0YXRBd2FyZCA9IFN1Y2Nlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJleHRyYUF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRhclJlZFBhY2spIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5zdHJpbmcgPSBgKyR7dGhpcy5leHRhclJlZFBhY2t9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaIkOWKn+aIluiAheWksei0peWPkemAgeaVsOaNriByZWRfcGFjazrnuqLljIUgc2NvcmU65YiG5pWwIHRz77ya5pe26Ze05oizIHNpZ24gTUQ15pWw5o2uXG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImJvbWJcIjogdGhpcy5ib29tTnVtYmVyICsgMSwvL+eCuOW8ueS4quaVsFxuICAgICAgICAgICAgICAgIFwicG90aW9uXCI6IHRoaXMubGlxdWlkTnVtYmVyLC8v6I2v5rC0XG4gICAgICAgICAgICAgICAgXCJzY29yZVwiOiB0aGlzLmN1clNjb3JlLC8v5YiG5pWwXG4gICAgICAgICAgICAgICAgXCJ0c1wiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8v5pe26Ze05oizXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLVBhc3PpgJrlhbPmiJDlip/ov5Tlm57kv6Hmga9cIiwgcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWN0b3J5ID09PSAyKSB7XG4gICAgICAgICAgICBGYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5aSx6LSlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDpgJrlhbPlpLHotKXkuI3nlKjlkYror4nmnI3liqHlmahcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLk1hc2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oGi5aSN5ri45oiP77yM5YWz6Zet5by55Ye65qGGXG4gICAgICog5aaC5p6c5piv5ri45oiP6YCa5YWz5Y6f5Zug6ICM5omT5byA55qE5by55Ye65qGG5LiN5LqI55CG552sXG4gICAgICovXG4gICAgQ2xvc2VNYXNrKCkge1xuICAgICAgICBpZiAodGhpcy52aWN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN546p5pys5YWzXG4gICAgICovXG4gICAgUmVsb2FkKCkge1xuICAgICAgICAvL+WBnOatouWAkuiuoeaXtlxuICAgICAgICB0aGlzLnRpbWVyICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgLy/ph43ovb3lnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7p+e7reS4i+S4gOWFs1xuICAgICAqL1xuICAgIE5leHQoKSB7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnZpY3RvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAvL+e7p+e7rea4uOaIj1xuICAgICAgICAgICAgICAgIHRoaXMuQ2xvc2VNYXNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8g6L+H5YWz5oiQ5Yqf54K55Ye76L+b5YWl5LiL5LiA5YWz5LmL5YmNIOWFiOiOt+WPlueUqOaIt+S/oeaBryDnnIvnlKjmiLfmmK/lkKbmnInkvZPliptcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5oaWRlQmFubmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4wIOW8ueWHuueci+inhumikeiOt+W+l+S9k+WKm+eahOaOpeWPo1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVWaWRlb0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v6YCA5Ye65ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X57qi5YyFXG4gICAgQXdhcmRWaWRlbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBwYWNrID0gY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyA/IDAgOiB0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgY2Muem0udmlkZW9BZC5yZWRQYWNrID0gc2VuZERhdGE7XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5L2T5YqbXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gdHJ1ZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZUxheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgIDlh7rmuLjmiI8g6L+U5Zue5LiK5LiA5Liq5Zy65pmvXG4gICAgICovXG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgfSxcbiAgICBSZXN1bWVHYW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuQmFja0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLk1pbmVyU3AucGF1c2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmoLlgZzlvZPliY3nlYzpnaJcbiAgICBQYXVzZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog6IOc5Yip5oiW5aSx6LSl6YO96KeG5Li65ri45oiP57uT5p2fXG4gICAgICovXG4gICAgR2FtZU92ZXIoKSB7XG4gICAgICAgIC8v5Yik5pat55So5oi35b6X5YiG5piv5ZCm6LaF6L+H55uu5qCH5YiGXG4gICAgICAgIGxldCBzID0gMDtcblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpID49IHBhcnNlSW50KHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nKSkge1xuICAgICAgICAgICAgcyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+a4uOaIj+Wksei0pVxuICAgICAgICAgICAgcyA9IDI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmljdG9yeSA9IHM7XG4gICAgICAgIHRoaXMuU2hvd01hc2soKTtcbiAgICB9LFxuXG4gICAgLy8gc3RhcnQgKCkge1xuXG4gICAgLy8gfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VHYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTmVlZExheWVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubW92ZU1vdXNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEhvb2soKTtcbiAgICAgICAgdGhpcy5Ib29rUm9UYXRlKCk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICB1c2VQcm9wKGUsIG1zZykge1xuICAgICAgICAvLyDlpoLmnpzmmK/ngrjlvLlcbiAgICAgICAgc3dpdGNoIChtc2cpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnirbmgIHlv4XpobvmmK/nu7PlrZDlpITkuo7og73mi4nlm57nmoTnirbmgIFcbiAgICAgICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnianlk4FcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdICYmIHRoaXMuYm9vbU51bWJlciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOeCuOW8ueWDj+acjeWKoeWZqOWPkemAgea2iOaBr1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5o+Q5YmN5YmN56uv5L2/55SoIOaYr+eUu+mdouWQjOatpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXItLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ouJ5Y6755qE54mp5ZOB55qE5L2N572uXG4gICAgICAgICAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gX25vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg54K45by55pWI5p6cXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJib29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKGNjLnYyKHBvcy54IC0gc2l6ZS53aWR0aCAvIDIsIHBvcy55IC0gc2l6ZS5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIF9ub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b4a04rebRMUI4NhPKaXcvz', 'Config');
// Script/Config.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//物品属性
//速度： 0.8 ： 超慢 ：非常慢，1 ， 2 ：慢 ， 3 ： 一般，5 ：快 ， 6 ： 很快
var _default = {
  //钻石
  "Drill": {
    "score": 600,
    "speed": 10
  },
  "DrillMouse": {
    "score": 700,
    "speed": 10
  },
  "Tnt": {
    "score": 10,
    "speed": 7
  },
  "Mouse": {
    "score": 50,
    "speed": 10
  },
  "Red": {
    "score": 0,
    "speed": 10
  },
  "Mystery": {
    "score": 0,
    "speed": 10
  },
  //黄金 0
  "Gold-0": {
    "score": 50,
    "speed": 10
  },
  //黄金 1
  "Gold-1": {
    "score": 100,
    "speed": 8
  },
  //黄金 2
  "Gold-2": {
    "score": 150,
    "speed": 7
  },
  //黄金 3
  "Gold-3": {
    "score": 200,
    "speed": 5
  },
  //黄金 4
  "Gold-4": {
    "score": 300,
    "speed": 4
  },
  //黄金 5
  "Gold-5": {
    "score": 400,
    "speed": 3
  },
  //黄金 6
  "Gold-6": {
    "score": 500,
    "speed": 2
  },
  //石头 小
  "Stone-0": {
    "score": 10,
    "speed": 7
  },
  //石头 中
  "Stone-1": {
    "score": 30,
    "speed": 7
  },
  //石头 大
  "Stone-2": {
    "score": 60,
    "speed": 3
  }
};
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO2VBQ2U7QUFDWDtBQUNBLFdBQVU7QUFDTixhQUFVLEdBREo7QUFFTixhQUFVO0FBRkosR0FGQztBQU1YLGdCQUFlO0FBQ1gsYUFBVSxHQURDO0FBRVgsYUFBVTtBQUZDLEdBTko7QUFVWCxTQUFRO0FBQ0osYUFBVSxFQUROO0FBRUosYUFBVTtBQUZOLEdBVkc7QUFjWCxXQUFVO0FBQ04sYUFBVSxFQURKO0FBRU4sYUFBVTtBQUZKLEdBZEM7QUFrQlgsU0FBUTtBQUNKLGFBQVUsQ0FETjtBQUVKLGFBQVU7QUFGTixHQWxCRztBQXNCWCxhQUFZO0FBQ1IsYUFBVSxDQURGO0FBRVIsYUFBVTtBQUZGLEdBdEJEO0FBMEJYO0FBQ0EsWUFBVztBQUNQLGFBQVUsRUFESDtBQUVQLGFBQVU7QUFGSCxHQTNCQTtBQStCWDtBQUNBLFlBQVc7QUFDUCxhQUFVLEdBREg7QUFFUCxhQUFVO0FBRkgsR0FoQ0E7QUFvQ1g7QUFDQSxZQUFXO0FBQ1AsYUFBVSxHQURIO0FBRVAsYUFBVTtBQUZILEdBckNBO0FBeUNYO0FBQ0EsWUFBVztBQUNQLGFBQVUsR0FESDtBQUVQLGFBQVU7QUFGSCxHQTFDQTtBQThDWDtBQUNBLFlBQVc7QUFDUCxhQUFVLEdBREg7QUFFUCxhQUFVO0FBRkgsR0EvQ0E7QUFtRFg7QUFDQSxZQUFXO0FBQ1AsYUFBVSxHQURIO0FBRVAsYUFBVTtBQUZILEdBcERBO0FBd0RYO0FBQ0EsWUFBVztBQUNQLGFBQVUsR0FESDtBQUVQLGFBQVU7QUFGSCxHQXpEQTtBQTZEWDtBQUNBLGFBQVk7QUFDUixhQUFVLEVBREY7QUFFUixhQUFVO0FBRkYsR0E5REQ7QUFrRVg7QUFDQSxhQUFZO0FBQ1IsYUFBVSxFQURGO0FBRVIsYUFBVTtBQUZGLEdBbkVEO0FBdUVYO0FBQ0EsYUFBWTtBQUNSLGFBQVUsRUFERjtBQUVSLGFBQVU7QUFGRjtBQXhFRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nianlk4HlsZ7mgKdcbi8v6YCf5bqm77yaIDAuOCDvvJog6LaF5oWiIO+8mumdnuW4uOaFou+8jDEg77yMIDIg77ya5oWiIO+8jCAzIO+8miDkuIDoiKzvvIw1IO+8muW/qyDvvIwgNiDvvJog5b6I5b+rXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy/pkrvnn7NcbiAgICBcIkRyaWxsXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDYwMCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIFwiRHJpbGxNb3VzZVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA3MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDEwXG4gICAgfSxcbiAgICBcIlRudFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMCxcbiAgICAgICAgXCJzcGVlZFwiIDogN1xuICAgIH0sXG4gICAgXCJNb3VzZVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIFwiUmVkXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDEwXG4gICAgfSxcbiAgICBcIk15c3RlcnlcIiA6IHtcbiAgICAgICAgXCJzY29yZVwiIDogMCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIC8v6buE6YeRIDBcbiAgICBcIkdvbGQtMFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIC8v6buE6YeRIDFcbiAgICBcIkdvbGQtMVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDhcbiAgICB9LFxuICAgIC8v6buE6YeRIDJcbiAgICBcIkdvbGQtMlwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxNTAsXG4gICAgICAgIFwic3BlZWRcIiA6IDdcbiAgICB9LFxuICAgIC8v6buE6YeRIDNcbiAgICBcIkdvbGQtM1wiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAyMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDVcbiAgICB9LFxuICAgIC8v6buE6YeRIDRcbiAgICBcIkdvbGQtNFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAzMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDRcbiAgICB9LFxuICAgIC8v6buE6YeRIDVcbiAgICBcIkdvbGQtNVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA0MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDNcbiAgICB9LFxuICAgIC8v6buE6YeRIDZcbiAgICBcIkdvbGQtNlwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDJcbiAgICB9LFxuICAgIC8v55+z5aS0IOWwj1xuICAgIFwiU3RvbmUtMFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMCxcbiAgICAgICAgXCJzcGVlZFwiIDogN1xuICAgIH0sXG4gICAgLy/nn7PlpLQg5LitXG4gICAgXCJTdG9uZS0xXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDMwLFxuICAgICAgICBcInNwZWVkXCIgOiA3XG4gICAgfSxcbiAgICAvL+efs+WktCDlpKdcbiAgICBcIlN0b25lLTJcIiA6IHtcbiAgICAgICAgXCJzY29yZVwiIDogNjAsXG4gICAgICAgIFwic3BlZWRcIiA6IDNcbiAgICB9LFxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b7cdHix81Ol6r4h+cnHYQh', 'login');
// Script/login.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0;

    if (!cc.sys.isNative) {
      cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4");
    }

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      this.protocol = true;
      cc.wxToken = cc.sys.localStorage.getItem("token");

      if (cc.sys.isNative) {
        if (cc.sys.localStorage.getItem("realName")) {
          cc.beginCountTime = new Date().getTime();
          cc.director.loadScene('Index');
        } else {
          this.showRealLayer();
        }
      } else {
        cc.beginCountTime = new Date().getTime();
        cc.director.loadScene('Index');
      }
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.Tools.wxLogin();
      } else {
        cc.Tools.showTips(this.node, "请先同意用户协议和隐私政策");
      }
    }
  },
  // 选择用户协议
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
  update: function update(dt) {
    var _this = this;

    this.time += dt;

    if (!this.needLogin) {
      return;
    }

    if (this.time >= 1) {
      this.time = 0;

      if (cc.wxLoginResultcode && this.protocol) {
        this.protocol = false;
        var data = {
          "channel": "1",
          "imei": "1",
          "mac": "1",
          "distinct_id": "1",
          "oaid": "1",
          "android_id": "1",
          "code": cc.wxLoginResultcode
        };
        cc.Tools.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.Tools.dot("register", {
            register_time: new Date(),
            channel: "微信"
          });

          if (cc.sys.localStorage.getItem("realName")) {
            cc.beginCountTime = new Date().getTime();
            cc.director.loadScene('Index');
          } else {
            _this.showRealLayer();
          }
        });
      }
    }
  },
  // 显示用户协议
  showUserProtocol: function showUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = true;
  },
  hideUserProtocol: function hideUserProtocol() {
    var protocol = this.node.getChildByName("user_protocol");
    protocol.active = false;
  },
  // 显示隐私政策
  showUserPrivacy: function showUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = true;
  },
  hideUserPrivacy: function hideUserPrivacy() {
    var privacy = this.node.getChildByName("user_privacy");
    privacy.active = false;
  },
  // 实名认证
  showRealLayer: function showRealLayer() {
    this.realNameLayer = this.node.getChildByName("RealName");
    this.realNameLayer.active = true;
  },
  // 实名认证点击
  clickRealLayer: function clickRealLayer(e) {
    var target = e.target;
    var _realName = this.realNameLayer.getChildByName("edit1").getComponent(cc.EditBox).string;
    var _realNumber = this.realNameLayer.getChildByName("edit2").getComponent(cc.EditBox).string;
    console.log("cocos----\u771F\u5B9E\u59D3\u540D" + _realName + "------\u8EAB\u4EFD\u8BC1\u53F7" + _realNumber); // 用local记录 是否实名

    if (this.regYourName(_realName) && this.regYourNumber(_realNumber)) {
      console.log("cocos----认证成功");
      cc.sys.localStorage.setItem("realName", true);
      cc.director.loadScene('Index');
    }
  },
  // 判断真实姓名
  regYourName: function regYourName(name) {
    var regName = /^[\u4e00-\u9fa5]{2,4}$/;

    if (!regName.test(name)) {
      cc.Tools.showTips(this.node, "真实姓名填写有误");
      return false;
    }

    return true;
  },
  // 判断身份证号
  regYourNumber: function regYourNumber(num) {
    var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;

    if (!regIdNo.test(num)) {
      cc.Tools.showTips(this.node, '身份证号填写有误');
      return false;
    }

    return true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiY2MiLCJDbGFzcyIsIkNvbXBvbmVudCIsInByb3BlcnRpZXMiLCJzdGFydCIsInByb3RvY29sIiwibmVlZExvZ2luIiwidGltZSIsInN5cyIsImlzTmF0aXZlIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsImdldEl0ZW0iLCJ3eFRva2VuIiwiYmVnaW5Db3VudFRpbWUiLCJEYXRlIiwiZ2V0VGltZSIsImRpcmVjdG9yIiwibG9hZFNjZW5lIiwic2hvd1JlYWxMYXllciIsIm9uTG9naW5XWCIsIlRvb2xzIiwid3hMb2dpbiIsInNob3dUaXBzIiwibm9kZSIsImNsaWNrUHJvdG9jb2wiLCJlIiwidGFyZ2V0IiwicmlnaHQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsInVwZGF0ZSIsImR0Iiwid3hMb2dpblJlc3VsdGNvZGUiLCJkYXRhIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwidG9rZW4iLCJkb3QiLCJyZWdpc3Rlcl90aW1lIiwiY2hhbm5lbCIsInNob3dVc2VyUHJvdG9jb2wiLCJoaWRlVXNlclByb3RvY29sIiwic2hvd1VzZXJQcml2YWN5IiwicHJpdmFjeSIsImhpZGVVc2VyUHJpdmFjeSIsInJlYWxOYW1lTGF5ZXIiLCJjbGlja1JlYWxMYXllciIsIl9yZWFsTmFtZSIsImdldENvbXBvbmVudCIsIkVkaXRCb3giLCJzdHJpbmciLCJfcmVhbE51bWJlciIsImNvbnNvbGUiLCJsb2ciLCJyZWdZb3VyTmFtZSIsInJlZ1lvdXJOdW1iZXIiLCJuYW1lIiwicmVnTmFtZSIsInRlc3QiLCJudW0iLCJyZWdJZE5vIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUUsRUFIUDtBQU9MO0FBRUE7QUFFQUMsRUFBQUEsS0FYSyxtQkFXRztBQUNK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dUNBQTRCTixTQUE1QixzQ0FBa0RJLFdBQWxELEVBSmMsQ0FLZDs7QUFDQSxRQUFHLEtBQUtHLFdBQUwsQ0FBaUJQLFNBQWpCLEtBQTZCLEtBQUtRLGFBQUwsQ0FBbUJKLFdBQW5CLENBQWhDLEVBQWdFO0FBQzVEQyxNQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaO0FBQ0F2RCxNQUFBQSxFQUFFLENBQUNRLEdBQUgsQ0FBT0UsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsVUFBNUIsRUFBd0MsSUFBeEM7QUFDQVgsTUFBQUEsRUFBRSxDQUFDaUIsUUFBSCxDQUFZQyxTQUFaLENBQXNCLE9BQXRCO0FBQ0g7QUFDSixHQTNISTtBQTRITDtBQUNBc0MsRUFBQUEsV0E3SEssdUJBNkhPRSxJQTdIUCxFQTZIYTtBQUNkLFFBQUlDLE9BQU8sR0FBRyx3QkFBZDs7QUFDQSxRQUFJLENBQUNBLE9BQU8sQ0FBQ0MsSUFBUixDQUFhRixJQUFiLENBQUwsRUFBeUI7QUFDckIxRCxNQUFBQSxFQUFFLENBQUNxQixLQUFILENBQVNFLFFBQVQsQ0FBa0IsS0FBS0MsSUFBdkIsRUFBNEIsVUFBNUI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSCxHQXBJSTtBQXFJTDtBQUNBaUMsRUFBQUEsYUF0SUsseUJBc0lTSSxHQXRJVCxFQXNJYztBQUNmLFFBQUlDLE9BQU8sR0FBRywwQ0FBZDs7QUFDQSxRQUFJLENBQUNBLE9BQU8sQ0FBQ0YsSUFBUixDQUFhQyxHQUFiLENBQUwsRUFBd0I7QUFDcEI3RCxNQUFBQSxFQUFFLENBQUNxQixLQUFILENBQVNFLFFBQVQsQ0FBa0IsS0FBS0MsSUFBdkIsRUFBNEIsVUFBNUI7QUFDQSxhQUFPLEtBQVA7QUFDSDs7QUFDRCxXQUFPLElBQVA7QUFDSDtBQTdJSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuXG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQoKSB7XG4gICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5uZWVkTG9naW4gPSB0cnVlO1xuICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICBpZiAoIWNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKMWMyVnlYMmxrSWpveE1EQXhNVGN4TENKdmNHVnVYMmxrSWpvaWIxRlhORkkxT1ZWU1JsRjFZVE5TV2psdlgzbGZkR0o2VUVkTE5DSXNJbTVwWTJ0ZmJtRnRaU0k2SXVhMXQtZWJsLWlJdWVtVnZ6SXVNQ0lzSW1kbGJtUmxjaUk2TVN3aVlYWmhkR0Z5SWpvaWFIUjBjSE02THk5MGFHbHlaSGQ0TG5Gc2IyZHZMbU51TDIxdGIzQmxiaTkyYVY4ek1pOW1SMHhrUjFwbmVHNXdWbXRKUWxkamFXRXplV2xqYVdKNmFXSkZRMEowVnpGaFFraEViVWRoV21WNmNUQXljV2RRVVVOM1NUTjVPR2xqVkU1bldFdENjREJPY0V4Qk5VSkZkRFo2VUVkc1NHMVZUV1k1YkhkNFFrMW5MekV6TWlJc0ltTnlaV0YwWlY5MGFXMWxJam93TENKamFHRnVibVZzSWpvaU1TSXNJbVJwYzNScGJtTjBYMmxrSWpvaU1TSjkuSzVDOVhTa0VFakJCZlBGbjFtNUJvWEd1MTF1YlBjOWxTdkRSQUhrdl9WNFwiKVxuICAgICAgICB9XG4gICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJ0b2tlblwiKSkge1xuICAgICAgICAgICAgdGhpcy5uZWVkTG9naW4gPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSB0cnVlO1xuICAgICAgICAgICAgY2Mud3hUb2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwicmVhbE5hbWVcIikpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuYmVnaW5Db3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlYWxMYXllcigpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1lbHNle1xuICAgICAgICAgICAgICAgIGNjLmJlZ2luQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBvbkxvZ2luV1goKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGlmICh0aGlzLnByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMud3hMb2dpbigpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsXCLor7flhYjlkIzmhI/nlKjmiLfljY/orq7lkozpmpDnp4HmlL/nrZZcIilcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6YCJ5oup55So5oi35Y2P6K6uXG4gICAgY2xpY2tQcm90b2NvbChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgbGV0IHJpZ2h0ID0gdGFyZ2V0LmdldENoaWxkQnlOYW1lKFwicmlnaHRcIik7XG4gICAgICAgIGlmICh0aGlzLnByb3RvY29sKSB7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJpZ2h0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnByb3RvY29sID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgdXBkYXRlKGR0KSB7XG4gICAgICAgIHRoaXMudGltZSArPSBkdDtcbiAgICAgICAgaWYgKCF0aGlzLm5lZWRMb2dpbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnRpbWUgPj0gMSkge1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgICAgIGlmIChjYy53eExvZ2luUmVzdWx0Y29kZSAmJiB0aGlzLnByb3RvY29sKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBcImNoYW5uZWxcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiaW1laVwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJtYWNcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiZGlzdGluY3RfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwib2FpZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJhbmRyb2lkX2lkXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImNvZGVcIjogY2Mud3hMb2dpblJlc3VsdGNvZGVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEvcmVnaXN0ZXJcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy53eFRva2VuID0gcmVzLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwicmVnaXN0ZXJcIiwgeyByZWdpc3Rlcl90aW1lOiBuZXcgRGF0ZSgpLCBjaGFubmVsOiBcIuW+ruS/oVwiIH0pXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJyZWFsTmFtZVwiKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuYmVnaW5Db3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1JlYWxMYXllcigpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S655So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S66ZqQ56eB5pS/562WXG4gICAgc2hvd1VzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOWunuWQjeiupOivgVxuICAgIHNob3dSZWFsTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucmVhbE5hbWVMYXllciA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIlJlYWxOYW1lXCIpO1xuICAgICAgICB0aGlzLnJlYWxOYW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIC8vIOWunuWQjeiupOivgeeCueWHu1xuICAgIGNsaWNrUmVhbExheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgX3JlYWxOYW1lID0gdGhpcy5yZWFsTmFtZUxheWVyLmdldENoaWxkQnlOYW1lKFwiZWRpdDFcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgbGV0IF9yZWFsTnVtYmVyID0gdGhpcy5yZWFsTmFtZUxheWVyLmdldENoaWxkQnlOYW1lKFwiZWRpdDJcIikuZ2V0Q29tcG9uZW50KGNjLkVkaXRCb3gpLnN0cmluZztcbiAgICAgICAgY29uc29sZS5sb2coYGNvY29zLS0tLeecn+WunuWnk+WQjSR7X3JlYWxOYW1lfS0tLS0tLei6q+S7veivgeWPtyR7X3JlYWxOdW1iZXJ9YCk7XG4gICAgICAgIC8vIOeUqGxvY2Fs6K6w5b2VIOaYr+WQpuWunuWQjVxuICAgICAgICBpZih0aGlzLnJlZ1lvdXJOYW1lKF9yZWFsTmFtZSkmJnRoaXMucmVnWW91ck51bWJlcihfcmVhbE51bWJlcikpe1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3orqTor4HmiJDlip9cIik7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJyZWFsTmFtZVwiLCB0cnVlKVxuICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDliKTmlq3nnJ/lrp7lp5PlkI1cbiAgICByZWdZb3VyTmFtZShuYW1lKSB7XG4gICAgICAgIHZhciByZWdOYW1lID0gL15bXFx1NGUwMC1cXHU5ZmE1XXsyLDR9JC87XG4gICAgICAgIGlmICghcmVnTmFtZS50ZXN0KG5hbWUpKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsXCLnnJ/lrp7lp5PlkI3loavlhpnmnInor69cIilcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZVxuICAgIH0sXG4gICAgLy8g5Yik5pat6Lqr5Lu96K+B5Y+3XG4gICAgcmVnWW91ck51bWJlcihudW0pIHtcbiAgICAgICAgdmFyIHJlZ0lkTm8gPSAvKF5cXGR7MTV9JCl8KF5cXGR7MTh9JCl8KF5cXGR7MTd9KFxcZHxYfHgpJCkvO1xuICAgICAgICBpZiAoIXJlZ0lkTm8udGVzdChudW0pKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsJ+i6q+S7veivgeWPt+Whq+WGmeacieivrycpO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlXG4gICAgfVxufSk7XG5cblxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Hook.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d771RnIftD4KOCJTnyU0cq', 'Hook');
// Script/Hook.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  //这个只是当前挂在了这个组件的节点初始完成执行，start 是所有节点初始完成执行
  // onLoad () {},
  start: function start() {
    //初始化 放到update里执行，必须等待canvas的prefab加载完事后才执行初始化
    this.init();
  },

  /**
   * @description 初始化 所有东西需要在动态资源加载完成后进行初始化
   */
  init: function init() {
    //获取Main 组件 需要先获取节点
    this.Canvas = cc.find('Canvas');
    this.Main = this.Canvas.getComponent('Main');
    this.Prefab = this.Main.Prefab; //获取钩子下item节点

    this.Item = cc.find('Canvas/Header/Miner/Hook/item'); //监听碰撞

    this.onCollisionEnter = this.onCollisionEnterA;
  },

  /**
   * @description 监听碰撞
   * @param {Object} other 其他与本节点碰撞的节点
   * @param {Object} self 本节点
   */
  onCollisionEnterA: function onCollisionEnterA(other, self) {
    if (this.Main.HookState == 2) return;
    this.other = other;
    this.isWall = this.Wall(other);
    this.isTnt = this.Tnt(other);
    this.isMouse = this.Mouse(other); //处理钩子撞墙

    if (this.isWall) {
      //拉回钩子
      this.Main.PullBackHook();
      return;
    }

    ;

    if (this.isTnt) {
      this.Main.destroyTnt(other.node);
      other.node.getChildByName("icon").active = false;
      var boom = other.node.boom;
      boom.active = true;
      boom.getComponent(cc.Animation).play("boom");

      if (cc.zm.showShake) {
        if (cc.sys.isNative) {
          jsb.Device.vibrate(0.3);
        }
      }
    }

    if (this.isMouse) {
      other.node.stopAllActions();
    } //根据物品设置拉回钩子速度


    this.Main.SetSpeed(other); //播放碰撞音效

    if (cc.zm.showMusic) {
      cc.audioEngine.play(this.Main.CollisionAudio);
    } //将物品放置钩子上


    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
    other.node.parent = this.Item;
    other.node.anchorY = 1;
    this.node.getComponent(cc.Sprite).spriteFrame = this.Main.HookFrames[1];
    this.Main.PullBackHook();
  },

  /**
   * @description 删除被勾中的物品再创建被勾中的物品
   */
  MoveItemToHook: function MoveItemToHook() {
    if (this.isWall) return; // if(this.isTnt)return;

    this.other.node.y = -(this.Main.Hook.height + 2);
    this.other.node.x = -(this.Main.Hook.width / 2);
  },

  /**
   * @description 返回钩子是否撞墙
   */
  Wall: function Wall(other) {
    return other.node.group == 'Wall';
  },

  /**
   * @description 返回是否是炸药桶
   */
  Tnt: function Tnt(other) {
    return other.node.group == 'Tnt';
  },
  Mouse: function Mouse(other) {
    return other.node.group == 'Mouse';
  },
  update: function update(dt) {
    if (this.other && this.other.node && this.Main.HookState == 2) {
      this.MoveItemToHook();
    }

    ;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSG9vay5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwiaW5pdCIsIkNhbnZhcyIsImZpbmQiLCJNYWluIiwiZ2V0Q29tcG9uZW50IiwiUHJlZmFiIiwiSXRlbSIsIm9uQ29sbGlzaW9uRW50ZXIiLCJvbkNvbGxpc2lvbkVudGVyQSIsIm90aGVyIiwic2VsZiIsIkhvb2tTdGF0ZSIsImlzV2FsbCIsIldhbGwiLCJpc1RudCIsIlRudCIsImlzTW91c2UiLCJNb3VzZSIsIlB1bGxCYWNrSG9vayIsImRlc3Ryb3lUbnQiLCJub2RlIiwiZ2V0Q2hpbGRCeU5hbWUiLCJhY3RpdmUiLCJib29tIiwiQW5pbWF0aW9uIiwicGxheSIsInptIiwic2hvd1NoYWtlIiwic3lzIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwic3RvcEFsbEFjdGlvbnMiLCJTZXRTcGVlZCIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwiQ29sbGlzaW9uQXVkaW8iLCJ5IiwiSG9vayIsImhlaWdodCIsIngiLCJ3aWR0aCIsInBhcmVudCIsImFuY2hvclkiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkhvb2tGcmFtZXMiLCJNb3ZlSXRlbVRvSG9vayIsImdyb3VwIiwidXBkYXRlIiwiZHQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBTUw7QUFDQTtBQUNBO0FBRUFDLEVBQUFBLEtBVkssbUJBVUk7QUFDTDtBQUNBLFNBQUtDLElBQUw7QUFDSCxHQWJJOztBQWNMO0FBQ0o7QUFDQTtBQUNJQSxFQUFBQSxJQWpCSyxrQkFpQkM7QUFDRjtBQUNBLFNBQUtDLE1BQUwsR0FBY04sRUFBRSxDQUFDTyxJQUFILENBQVEsUUFBUixDQUFk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LyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuICAgIC8v6L+Z5Liq5Y+q5piv5b2T5YmN5oyC5Zyo5LqG6L+Z5Liq57uE5Lu255qE6IqC54K55Yid5aeL5a6M5oiQ5omn6KGM77yMc3RhcnQg5piv5omA5pyJ6IqC54K55Yid5aeL5a6M5oiQ5omn6KGMXG4gICAgLy8gb25Mb2FkICgpIHt9LFxuXG4gICAgc3RhcnQgKCkge1xuICAgICAgICAvL+WIneWni+WMliDmlL7liLB1cGRhdGXph4zmiafooYzvvIzlv4XpobvnrYnlvoVjYW52YXPnmoRwcmVmYWLliqDovb3lrozkuovlkI7miY3miafooYzliJ3lp4vljJZcbiAgICAgICAgdGhpcy5pbml0KCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOaJgOacieS4nOilv+mcgOimgeWcqOWKqOaAgei1hOa6kOWKoOi9veWujOaIkOWQjui/m+ihjOWIneWni+WMllxuICAgICAqL1xuICAgIGluaXQoKXtcbiAgICAgICAgLy/ojrflj5ZNYWluIOe7hOS7tiDpnIDopoHlhYjojrflj5boioLngrlcbiAgICAgICAgdGhpcy5DYW52YXMgPSBjYy5maW5kKCdDYW52YXMnKTtcbiAgICAgICAgdGhpcy5NYWluID0gdGhpcy5DYW52YXMuZ2V0Q29tcG9uZW50KCdNYWluJyk7XG4gICAgICAgIHRoaXMuUHJlZmFiID0gdGhpcy5NYWluLlByZWZhYjtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDkuItpdGVt6IqC54K5XG4gICAgICAgIHRoaXMuSXRlbSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvTWluZXIvSG9vay9pdGVtJyk7XG4gICAgICAgIC8v55uR5ZCs56Kw5pKeXG4gICAgICAgIHRoaXMub25Db2xsaXNpb25FbnRlciA9IHRoaXMub25Db2xsaXNpb25FbnRlckE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDnm5HlkKznorDmkp5cbiAgICAgKiBAcGFyYW0ge09iamVjdH0gb3RoZXIg5YW25LuW5LiO5pys6IqC54K556Kw5pKe55qE6IqC54K5XG4gICAgICogQHBhcmFtIHtPYmplY3R9IHNlbGYg5pys6IqC54K5XG4gICAgICovXG4gICAgb25Db2xsaXNpb25FbnRlckEob3RoZXIsIHNlbGYpe1xuICAgICAgICBpZih0aGlzLk1haW4uSG9va1N0YXRlID09IDIpcmV0dXJuO1xuICAgICAgICB0aGlzLm90aGVyID0gb3RoZXI7XG4gICAgICAgIHRoaXMuaXNXYWxsID0gdGhpcy5XYWxsKG90aGVyKTtcbiAgICAgICAgdGhpcy5pc1RudCA9IHRoaXMuVG50KG90aGVyKTtcbiAgICAgICAgdGhpcy5pc01vdXNlID0gdGhpcy5Nb3VzZShvdGhlcik7XG4gICAgICAgIC8v5aSE55CG6ZKp5a2Q5pKe5aKZXG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXtcbiAgICAgICAgICAgIC8v5ouJ5Zue6ZKp5a2QXG4gICAgICAgICAgICB0aGlzLk1haW4uUHVsbEJhY2tIb29rKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH07XG4gICAgICAgIGlmKHRoaXMuaXNUbnQpe1xuICAgICAgICAgICAgdGhpcy5NYWluLmRlc3Ryb3lUbnQob3RoZXIubm9kZSk7XG4gICAgICAgICAgICBvdGhlci5ub2RlLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGxldCBib29tID0gb3RoZXIubm9kZS5ib29tO1xuICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcbiAgICAgICAgICAgIGlmKGNjLnptLnNob3dTaGFrZSl7XG4gICAgICAgICAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmKHRoaXMuaXNNb3VzZSl7XG4gICAgICAgICAgICBvdGhlci5ub2RlLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIH1cbiAgICAgICAgLy/moLnmja7nianlk4Horr7nva7mi4nlm57pkqnlrZDpgJ/luqZcbiAgICAgICAgdGhpcy5NYWluLlNldFNwZWVkKG90aGVyKTtcbiAgICAgICAgLy/mkq3mlL7norDmkp7pn7PmlYhcbiAgICAgICAgaWYoY2Muem0uc2hvd011c2ljKXtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5NYWluLkNvbGxpc2lvbkF1ZGlvKTtcbiAgICAgICAgfVxuICAgICAgICAvL+WwhueJqeWTgeaUvue9rumSqeWtkOS4ilxuICAgICAgICB0aGlzLm90aGVyLm5vZGUueSA9IC0odGhpcy5NYWluLkhvb2suaGVpZ2h0ICsgMik7XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS54ID0gLSh0aGlzLk1haW4uSG9vay53aWR0aCAvIDIpO1xuICAgICAgICBvdGhlci5ub2RlLnBhcmVudCA9IHRoaXMuSXRlbTtcbiAgICAgICAgb3RoZXIubm9kZS5hbmNob3JZID0gMTtcbiAgICAgICAgdGhpcy5ub2RlLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5NYWluLkhvb2tGcmFtZXNbMV1cbiAgICAgICAgdGhpcy5NYWluLlB1bGxCYWNrSG9vaygpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOiiq+WLvuS4reeahOeJqeWTgeWGjeWIm+W7uuiiq+WLvuS4reeahOeJqeWTgVxuICAgICAqL1xuICAgIE1vdmVJdGVtVG9Ib29rKCl7XG4gICAgICAgIGlmKHRoaXMuaXNXYWxsKXJldHVybjtcbiAgICAgICAgLy8gaWYodGhpcy5pc1RudClyZXR1cm47XG4gICAgICAgIHRoaXMub3RoZXIubm9kZS55ID0gLSh0aGlzLk1haW4uSG9vay5oZWlnaHQgKyAyKTtcbiAgICAgICAgdGhpcy5vdGhlci5ub2RlLnggPSAtKHRoaXMuTWFpbi5Ib29rLndpZHRoIC8gMik7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDov5Tlm57pkqnlrZDmmK/lkKbmkp7loplcbiAgICAgKi9cbiAgICBXYWxsKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ1dhbGwnO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOi/lOWbnuaYr+WQpuaYr+eCuOiNr+ahtlxuICAgICAqL1xuICAgICBUbnQob3RoZXIpe1xuICAgICAgICByZXR1cm4gb3RoZXIubm9kZS5ncm91cCA9PSAnVG50JztcbiAgICB9LFxuICAgIE1vdXNlKG90aGVyKXtcbiAgICAgICAgcmV0dXJuIG90aGVyLm5vZGUuZ3JvdXAgPT0gJ01vdXNlJztcbiAgICB9LFxuICAgIHVwZGF0ZSAoZHQpIHtcbiAgICAgICAgaWYodGhpcy5vdGhlciAmJiB0aGlzLm90aGVyLm5vZGUgJiYgdGhpcy5NYWluLkhvb2tTdGF0ZSA9PSAyKXtcbiAgICAgICAgICAgIHRoaXMuTW92ZUl0ZW1Ub0hvb2soKTtcbiAgICAgICAgfTtcbiAgICB9LFxufSk7XG4iXX0=
//------QC-SOURCE-SPLIT------
