
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
require('./assets/Script/Http');
require('./assets/Script/IndexMain');
require('./assets/Script/Level');
require('./assets/Script/MD5');
require('./assets/Script/Main');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTUQ1LmpzIl0sIm5hbWVzIjpbIm1kNSIsInN0cmluZyIsIngiLCJBcnJheSIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsImEiLCJiIiwiYyIsImQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJVdGY4RW5jb2RlIiwiQ29udmVydFRvV29yZEFycmF5IiwibGVuZ3RoIiwiRkYiLCJHRyIsIkhIIiwiSUkiLCJBZGRVbnNpZ25lZCIsImNwcm9fcHNpZCIsImNwcm9fcHN3aWR0aCIsImNwcm9fcHNoZWlnaHQiLCJ0ZW1wIiwiV29yZFRvSGV4IiwidG9Mb3dlckNhc2UiLCJSb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiRiIsInkiLCJ6IiwiRyIsIkgiLCJJIiwicyIsImFjIiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNfdGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc190ZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIldvcmRUb0hleFZhbHVlIiwiV29yZFRvSGV4VmFsdWVfdGVtcCIsImxCeXRlIiwibENvdW50IiwidG9TdHJpbmciLCJzdWJzdHIiLCJ1dGZ0ZXh0IiwibiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCLE1BQUlDLENBQUMsR0FBR0MsS0FBSyxFQUFiO0FBQ0EsTUFBSUMsQ0FBSixFQUFPQyxFQUFQLEVBQVdDLEVBQVgs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QUFDbkQsS0FGTSxNQUVBO0FBQ0hpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsSUFBSSxFQUFOLEdBQVksR0FBaEMsQ0FBWDtBQUFpRGlFLE1BQUFBLE9BQU8sSUFBSUUsTUFBTSxDQUFDQyxZQUFQLENBQXNCcEUsQ0FBQyxJQUFJLENBQU4sR0FBVyxFQUFaLEdBQWtCLEdBQXRDLENBQVg7QUFBdURpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsR0FBRyxFQUFMLEdBQVcsR0FBL0IsQ0FBWDtBQUMzRztBQUNKOztBQUNELFNBQU9pRSxPQUFQO0FBQ0g7O0FBRURJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpGLEdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZDUoc3RyaW5nKSB7ICBcbiAgICB2YXIgeCA9IEFycmF5KCk7ICBcbiAgICB2YXIgaywgQUEsIEJCLCBDQywgREQsIGEsIGIsIGMsIGQ7ICBcbiAgICB2YXIgUzExID0gNywgUzEyID0gMTIsIFMxMyA9IDE3LCBTMTQgPSAyMjsgdmFyIFMyMSA9IDUsIFMyMiA9IDksIFMyMyA9IDE0LCBTMjQgPSAyMDsgdmFyIFMzMSA9IDQsIFMzMiA9IDExLCBTMzMgPSAxNiwgUzM0ID0gMjM7IHZhciBTNDEgPSA2LCBTNDIgPSAxMCwgUzQzID0gMTUsIFM0NCA9IDIxOyBzdHJpbmcgPSBVdGY4RW5jb2RlKHN0cmluZyk7IHggPSBDb252ZXJ0VG9Xb3JkQXJyYXkoc3RyaW5nKTsgYSA9IDB4Njc0NTIzMDE7IGIgPSAweEVGQ0RBQjg5OyBjID0gMHg5OEJBRENGRTsgZCA9IDB4MTAzMjU0NzY7ICBcbiAgICBmb3IgKGsgPSAwOyBrIDwgeC5sZW5ndGg7IGsgKz0gMTYpIHsgIFxuICAgICAgICBBQSA9IGE7IEJCID0gYjsgQ0MgPSBjOyBERCA9IGQ7ICBcbiAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7IGMgPSBGRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTsgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7IGQgPSBGRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTsgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7IGEgPSBGRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTsgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7ICBcbiAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7IGEgPSBHRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTsgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpOyBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTsgZCA9IEhIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpOyBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpOyBkID0gSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7IGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpOyBjID0gSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7IGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTsgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpOyBhID0gSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7IGQgPSBJSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTsgYiA9IElJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpOyBhID0gQWRkVW5zaWduZWQoYSwgQUEpOyBiID0gQWRkVW5zaWduZWQoYiwgQkIpOyBjID0gQWRkVW5zaWduZWQoYywgQ0MpOyBkID0gQWRkVW5zaWduZWQoZCwgREQpOyAgXG4gICAgfSAgXG5cbiAgICB2YXIgY3Byb19wc2lkID0gXCJ1MjU3Mjk1NFwiOyB2YXIgY3Byb19wc3dpZHRoID0gOTY2OyB2YXIgY3Byb19wc2hlaWdodCA9IDEyMDsgIFxuXG5cbiAgICB2YXIgdGVtcCA9IFdvcmRUb0hleChhKSArIFdvcmRUb0hleChiKSArIFdvcmRUb0hleChjKSArIFdvcmRUb0hleChkKTsgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTsgIFxufSAgXG5mdW5jdGlvbiBSb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykgeyAgXG4gICAgcmV0dXJuIChsVmFsdWUgPDwgaVNoaWZ0Qml0cykgfCAobFZhbHVlID4+PiAoMzIgLSBpU2hpZnRCaXRzKSk7ICBcbn0gIFxuZnVuY3Rpb24gQWRkVW5zaWduZWQobFgsIGxZKSB7ICBcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0OyBsWDggPSAobFggJiAweDgwMDAwMDAwKTsgbFk4ID0gKGxZICYgMHg4MDAwMDAwMCk7IGxYNCA9IChsWCAmIDB4NDAwMDAwMDApOyBsWTQgPSAobFkgJiAweDQwMDAwMDAwKTsgIFxuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpOyBpZiAobFg0ICYgbFk0KSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZOCk7ICBcbiAgICB9ICBcbiAgICBpZiAobFg0IHwgbFk0KSB7ICBcbiAgICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gIFxuICAgIH0gZWxzZSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gbFg4IF4gbFk4KTsgIFxuICAgIH0gIFxufSAgXG5mdW5jdGlvbiBGKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHkpIHwgKCh+eCkgJiB6KTsgIFxufSAgXG5mdW5jdGlvbiBHKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHopIHwgKHkgJiAofnopKTsgIFxufSAgXG5mdW5jdGlvbiBIKHgsIHksIHopIHsgcmV0dXJuICh4IF4geSBeIHopOyB9ICBcbmZ1bmN0aW9uIEkoeCwgeSwgeikgeyByZXR1cm4gKHkgXiAoeCB8ICh+eikpKTsgfSAgXG5mdW5jdGlvbiBGRihhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEYoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChHKGIsIGMsIGQpLCB4KSwgYWMpKTsgIFxuXG5cblxuICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTsgIFxufSAgXG5mdW5jdGlvbiBISChhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEgoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChJKGIsIGMsIGQpLCB4KSwgYWMpKTsgcmV0dXJuIEFkZFVuc2lnbmVkKFJvdGF0ZUxlZnQoYSwgcyksIGIpOyAgXG59ICBcbmZ1bmN0aW9uIENvbnZlcnRUb1dvcmRBcnJheShzdHJpbmcpIHsgIFxuICAgIHZhciBsV29yZENvdW50OyAgXG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDsgIFxuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc190ZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODsgdmFyIGxOdW1iZXJPZldvcmRzX3RlbXAyID0gIFxuICAgIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAtIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAlIDY0KSkgLyA2NDsgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzX3RlbXAyICsgMSkgKiAxNjsgdmFyIGxXb3JkQXJyYXkgPSBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpOyB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7IHZhciBsQnl0ZUNvdW50ID0gMDsgIFxuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHsgIFxuICAgICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gKGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAoc3RyaW5nLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbikpOyBsQnl0ZUNvdW50Kys7ICBcbiAgICB9ICBcbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgKDB4ODAgPDwgbEJ5dGVQb3NpdGlvbik7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTsgcmV0dXJuIGxXb3JkQXJyYXk7ICBcbn0gIFxuZnVuY3Rpb24gV29yZFRvSGV4KGxWYWx1ZSkgeyAgXG4gICAgdmFyIFdvcmRUb0hleFZhbHVlID0gXCJcIiwgV29yZFRvSGV4VmFsdWVfdGVtcCA9IFwiXCIsIGxCeXRlLCBsQ291bnQ7IGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7ICBcbiAgICAgICAgbEJ5dGUgPSAobFZhbHVlID4+PiAobENvdW50ICogOCkpICYgMjU1OyAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlX3RlbXAgPSBcIjBcIiArIGxCeXRlLnRvU3RyaW5nKDE2KTsgV29yZFRvSGV4VmFsdWUgPSAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlICsgV29yZFRvSGV4VmFsdWVfdGVtcC5zdWJzdHIoV29yZFRvSGV4VmFsdWVfdGVtcC5sZW5ndGggLSAyLCAyKTsgIFxuICAgIH0gIFxuICAgIHJldHVybiBXb3JkVG9IZXhWYWx1ZTsgIFxufSAgXG5cblxuZnVuY3Rpb24gVXRmOEVuY29kZShzdHJpbmcpIHsgIFxuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjsgIFxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7ICBcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTsgaWYgKGMgPCAxMjgpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpOyAgXG4gICAgICAgIH0gZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTsgIFxuICAgICAgICB9IGVsc2UgeyAgXG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7IHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7ICBcbiAgICAgICAgfSAgXG4gICAgfSAgXG4gICAgcmV0dXJuIHV0ZnRleHQ7ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZDUgXG5cbiJdfQ==
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
var http = require("Http");

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
    http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
      var sendDta = {
        prop: 4
      };
      http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
        console.log("使用体力成功");
      });
      cc.zm.LevelInfo = res.data; // 关闭界面开始游戏

      _this.NeedLayer.active = false; // 点击开始游戏之前 重新同步一下道具信息

      _this.handleDaoju();

      _this.adjusBoomLayout();

      _this.ResumeGameLayer();
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

    this.MinerAnimation = this.Miner.getComponent(cc.Animation); //获取钩子

    this.Hook = cc.find('Canvas/Header/Miner/Hook'); //获取钩子初始长度

    this.HookHeight = this.Hook.height; //放下钩子开关 0 停止 1 发射 2拉回

    this.HookState = 0;
    this.curScore = 0;
    this.pauseGame = false; // 初始化矿工的精灵帧

    this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0]; // 看视频得体力界面

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
    this.screenAdapter();
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

    // http.sendRequest("pit.v1.PitSvc/ExchangeWeapon", "POST", {prop:this.LotteryAward}).then((res) => {
    //     this.hideLotteryLayer();
    // })
    var sendData = {
      "ad": cc.zm.ad,
      "weapon": this.LotteryProp
    };
    http.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then(function (res) {
      // console.log("点击开始转盘", res);
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
          http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {
            console.log("使用成功-", data[weapon[i].prop]);
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
    if (this.HookState) return;
    this.HookState = 1;
  },

  /**
   * @description 发射钩子
   */
  emitHook: function emitHook() {
    switch (this.HookState) {
      case 1:
        this.Hook.height += this.speed; // 当前发射绳子

        this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[1];
        break;

      case 2:
        if (this.Hook.height <= this.HookHeight) {
          //检测是否拉回物品
          if (this.Hook.children[0]) {
            if (this.Hook.children[0].childrenCount) {
              this.Handle(this.Hook.children[0].children);
            }

            ;
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
    this.MinerAnimation.play('hero'); // 将钩子的图片转化

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
      console.log("药水效果速度增加10%");
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
      console.log("使用时钟成功+10s");
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

    console.log("itemArr=", newItemArr);
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

    createItemArr = [].concat(createItemArr, newArr);
    console.log("createItemArr未按照宽度排序=", createItemArr); // 将createItemArr排序按照宽度

    createItemArr = createItemArr.sort(function (a, b) {
      if (a.width > b.width) {
        return -1;
      }

      if (a.width < b.width) {
        return 1;
      }

      return 0;
    });
    console.log("createItemArr照宽度排序=", createItemArr);
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
          console.log("石化手册使用成功石头的价值提升20%");
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
    this.Hook.height = this.HookHeight; //停止播放拉回动画

    this.MinerAnimation.stop('hero');
    this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0]; //重置发射钩子速度

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
    this.Mask.active = true; // this.PauseGameLayer()

    var Fail = this.Mask.getChildByName("Fail");
    var Success = this.Mask.getChildByName("Success");
    Fail.active = false;
    Success.active = false;

    if (this.victory === 1) {
      Success.active = true; // 设置目标内容

      var lbl = Success.getChildByName("lbl").getComponent(cc.Label); // 像服务器发送每日任务请求

      http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then(function (res) {
        // console.log("七日任务列表=", res.data);
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
      var data = this.createSignData(sendData);
      http.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function (res) {
        console.log("Pass通关成功返回信息", res);
      });
    } else if (this.victory === 2) {
      Fail.active = true; // 通关失败不用告诉服务器
    }

    cc.tween(this.Mask).to(0.3, {
      scale: 1
    }).call(function () {
      _this6.PauseGameLayer();
    }).start();
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
    // console.log("未加密前=",strToJiaMi)

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi; // console.log("加密后=",strToJiaMi)

    return data;
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
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
          cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

          if (cc.zm.userInfo.power > 0) {
            http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;

              if (cc.zm.LevelInfo.stage < 30) {
                _this7.Reload();
              } else {
                // 直接返回主界面
                cc.director.loadScene('Index');
              }
            });
          } else {
            // 小于0 弹出看视频获得体力的接口
            _this7.seeVideoLayer.active = true;
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
  AwardVideo: function AwardVideo(e) {
    var _this8 = this;

    console.log("看视频得奖励");
    var sendData = {
      "red_pack": parseInt((this.redPack + this.extarRedPack) * 100),
      //红包
      "ad": cc.zm.ad
    };
    http.sendRequest("pit.v1.PitSvc/PassAd", "POST", sendData).then(function (res) {
      console.log("PassAd返回信息", res);
      var sendData = {};
      http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
        cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

        if (cc.zm.userInfo.power > 0) {
          http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
            cc.zm.LevelInfo = res.data; // console.log("关卡信息=", cc.zm.LevelInfo);

            if (cc.zm.LevelInfo.stage < 30) {
              _this8.Reload();
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
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward(e) {
    var _this9 = this;

    var target = e.target;
    var sendData = {
      ad: cc.zm.ad
    };
    http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
      target.parent.active = false;

      _this9.Reload();
    });
  },
  closeLayer: function closeLayer(e) {
    var target = e.target;
    target.parent.active = false;
  },

  /**
   * 退出游戏 返回上一个场景
   */
  ExitGame: function ExitGame() {
    cc.director.loadScene('Index');
  },
  ResumeGameLayer: function ResumeGameLayer() {
    this.BackLayer.active = false;
    this.pauseGame = false;
    this.StartTime();

    if (this.HookState === 2) {
      this.MinerAnimation.play('hero');
    }
  },
  // 暂停当前界面
  PauseGameLayer: function PauseGameLayer() {
    this.pauseGame = true;
    this.unschedule(this.timer);

    if (this.HookState === 2) {
      this.MinerAnimation.stop('hero');
    }
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
          http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJkaXNwbGF5TmFtZSIsInJvdGF0ZVNwZWVkIiwiSG9va1JhbmdlIiwiUHJlZmFicyIsInR5cGUiLCJQcmVmYWIiLCJJbml0VGltZSIsIkNvbGxpc2lvbkF1ZGlvIiwiQXVkaW9DbGlwIiwiQWRkU2Nyb2VBdWRpbyIsIlByb3BTcHJpdGVGcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkJvb20iLCJIb29rRnJhbWVzIiwiSGVyb0ZyYW1lcyIsIkxvdHRlcnlGcmFtc2UiLCJvbkxvYWQiLCJpbml0IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJzZXRHdWlkZSIsImluZGV4IiwiZ3VpZGVJbmRleCIsImd1aWRlIiwiZmluZCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwibmV4dEd1aWRlIiwiZSIsIm1zZyIsImd1aWRlXzEiLCJndWlkZV8yIiwiZ3VpZGVfMyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJSZXN1bWVHYW1lTGF5ZXIiLCJoaWRlTmVlZExheWVyIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGFuZGxlRGFvanUiLCJhZGp1c0Jvb21MYXlvdXQiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJNaW5lckFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIkhvb2siLCJIb29rSGVpZ2h0IiwiaGVpZ2h0IiwiSG9va1N0YXRlIiwiY3VyU2NvcmUiLCJwYXVzZUdhbWUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJuZWVkU2NvcmUiLCJuZWVkTGV2ZWwiLCJzdHJpbmciLCJzY29yZSIsImlkIiwiYXJyIiwicmRtIiwiY3JlYXRlUmFuZG0iLCJMb3R0ZXJ5UHJvcCIsImljb24iLCJMb29rVmlkZW9HZXRBd2FyZCIsInNlbmREYXRhIiwiYWQiLCJMb3R0ZXJ5QXdhcmQiLCJhd2FyZCIsIndlYXBvbiIsImkiLCJudW0iLCJjbG9ja051bWJlciIsImhhbmRib29rTnVtYmVyIiwiY2xvdmVyTnVtYmVyIiwibGVuZ3RoIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJIb29rUm9UYXRlIiwiYW5nbGUiLCJNYXRoIiwiYWJzIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkNvdW50IiwiSGFuZGxlIiwiU3RvcEhvb2tNb3ZlIiwiUHVsbEJhY2tIb29rIiwicGxheSIsIlNldFNwZWVkIiwib3RoZXIiLCJwcm9tb3RlIiwiSXRlbUF0dHIiLCJub2RlIiwibmFtZSIsInZpY3RvcnkiLCJ0aW1lciIsInVuc2NoZWR1bGUiLCJHYW1lT3ZlciIsInNjaGVkdWxlIiwiTGV2ZWwiLCJzdGFnZSIsImN1cnJlbnRfc2NvcmUiLCJuZXdJdGVtQXJyIiwibmV3Q3JlYXRlQ2FsYyIsImluc3RhbnRpYXRlIiwiWFkiLCJyYW5kb21YWSIsInBhcmVudCIsImV4dHJhIiwic2V0UG9zaXRpb24iLCJib29tIiwiYWRkQ2hpbGQiLCJ2MiIsIngiLCJ5IiwibW91c2UiLCJzcGxpdCIsIm1vdXNlTnVtYmVyIiwiTnVtYmVyIiwicmFuZFgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsIm1vdmVNb3VzZSIsIkRyaWxsTW91c2VOdW1iZXIiLCJfbW92ZVRpbWUiLCJ0aW1lIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwic2NhbGVYIiwicmVwZWF0Rm9yZXZlciIsImRlbGF5IiwiY2FsbCIsImNyZWF0ZUl0ZW1BcnIiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwid2lkdGhDaWciLCJfX3Njb3JlIiwiX2tleSIsImZsb29yIiwia2V5IiwiayIsImdyb3VuZFkiLCJyZWN0IiwiUmVjdCIsImlzUGVuZyIsIm4iLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImRlc3Ryb3lUbnQiLCJUbnQiLCJfcG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWlucyIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwibSIsInN0b3AiLCJpdGVtcyIsIkFkZFByb3AiLCJBZGRTY29yZSIsIlJlbW92ZUl0ZW0iLCJsYXlvdXQiLCJpc05hTiIsInNob3dNZXN0ZXJ5IiwiYWRkQW5pbSIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwiZXh0cmFSZWRQYWNrIiwibWVzdGVyeSIsInN0b3BBbGxBY3Rpb25zIiwib3BhY2l0eSIsImFkZCIsIlNob3dNYXNrIiwiRmFpbCIsIlN1Y2Nlc3MiLCJsYmwiLCJzdGF0dXMiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2FkIiwibmVlZF9hZCIsImF3cmFkIiwiZXh0YXRBd2FyZCIsIkRhdGUiLCJnZXRUaW1lIiwiY3JlYXRlU2lnbkRhdGEiLCJzY2FsZSIsInNvcnRMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsInN0clRvSmlhTWkiLCJ1c2VySW5mbyIsInNjMSIsImhleF9tZDUiLCJzaWduIiwiUmVsb2FkIiwibG9hZFNjZW5lIiwiTmV4dCIsInBvd2VyIiwiRXhpdEdhbWUiLCJBd2FyZFZpZGVvIiwic2VlVmlkZW9Bd2FyZCIsInRhcmdldCIsImNsb3NlTGF5ZXIiLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxDQUROO0FBRUhDLE1BQUFBLFdBQVcsRUFBRTtBQUZWLEtBRkM7QUFNUjtBQUNBQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxDQURBO0FBRVRELE1BQUFBLFdBQVcsRUFBRTtBQUZKLEtBUEw7QUFXUjtBQUNBRSxJQUFBQSxTQUFTLEVBQUU7QUFDUCxp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QUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBS3RTLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBSTBDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FqRCxVQUFBQSxJQUFJLENBQUM2QyxXQUFMLENBQWlCLG9CQUFqQixFQUF1QyxNQUF2QyxFQUErQ0csT0FBL0M7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBcENSO0FBc0NIO0FBcnRDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+W8leWFpSDlvpfliIbnrYnphY3nva4g5aSq6ZW/IOaJgOS7peaNouS4quaWh+S7tuWGmVxuaW1wb3J0IEl0ZW1BdHRyIGZyb20gJy4vQ29uZmlnJztcbmltcG9ydCBMZXZlbCBmcm9tICcuL0xldmVsJztcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q5peL6L2s6YCf5bqmXG4gICAgICAgIHJvdGF0ZVNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDml4vovazpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6IyD5Zu0XG4gICAgICAgIEhvb2tSYW5nZToge1xuICAgICAgICAgICAgZGVmYXVsdDogNzAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOinkuW6puiMg+WbtCdcbiAgICAgICAgfSxcbiAgICAgICAgLy/miYDmnInnmoRwcmVmYWIg6L+Z56eN5pa55byP5piv5ZCM5q2l55qEIOS7o+eggeavlOi+g+WlveWGmSDlsLHmmK/pmr7mi5ZcbiAgICAgICAgUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgSW5pdFRpbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOinpueisOWIsOeJqeWTgeeahOWjsOmfs1xuICAgICAgICBDb2xsaXNpb25BdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy/liqDliIbnmoTlo7Dpn7NcbiAgICAgICAgQWRkU2Nyb2VBdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6YGT5YW355qE57q555CGXG4gICAgICAgIFByb3BTcHJpdGVGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEJvb206IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIEhvb2tGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEhlcm9GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIExvdHRlcnlGcmFtc2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3lp4vljJZcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIC8v5Yqg6L296aaW6aG16LWE5rqQXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIHNldEd1aWRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmd1aWRlSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8PSAzKSB7XG4gICAgICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKVxuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV9cIiArIGluZGV4KS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5leHRHdWlkZShlLCBtc2cpIHtcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJyk7XG4gICAgICAgIGxldCBndWlkZV8xID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8xXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMiA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKTtcbiAgICAgICAgbGV0IGd1aWRlXzMgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIik7XG4gICAgICAgIGd1aWRlXzEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChtc2cgPT09IFwiMlwiKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAyKTtcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDMpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8zXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjRcIikge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDQpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGVOZWVkTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOW8gOWni+a4uOaIjyDpgqPkuYjliLfmlrDkuIDkuIvpgZPlhbfmlbDmja5cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZBcbiAgICAgICAgdGhpcy5Ib29rID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lci9Ib29rJyk7XG4gICAgICAgIC8v6I635Y+W6ZKp5a2Q5Yid5aeL6ZW/5bqmXG4gICAgICAgIHRoaXMuSG9va0hlaWdodCA9IHRoaXMuSG9vay5oZWlnaHQ7XG4gICAgICAgIC8v5pS+5LiL6ZKp5a2Q5byA5YWzIDAg5YGc5q2iIDEg5Y+R5bCEIDLmi4nlm55cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgLy8g5Yid5aeL5YyW55+/5bel55qE57K+54G15binXG4gICAgICAgIHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhlcm9GcmFtZXNbMF07XG4gICAgICAgIC8vIOeci+inhumikeW+l+S9k+WKm+eVjOmdolxuICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2VlVmlkZW9sYXllcicpXG4gICAgICAgIC8v5b6X5YiG57Sv6K6hXG4gICAgICAgIHRoaXMuU2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvU2NvcmUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+mAmuWFs+ebruagh+WIhuaVsFxuICAgICAgICB0aGlzLlRhcmdldFNjb3JlID0gY2MuZmluZCgnQ2FudmFzL1Njb3JlQW5kVGFyZ2V0L1RhcmdldCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v5YCS6K6h5pe2XG4gICAgICAgIHRoaXMuVGltZSA9IGNjLmZpbmQoJ0NhbnZhcy9DaGVja3BvaW50QW5kVGltZS9UaW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lhbPljaHmlbBcbiAgICAgICAgdGhpcy5DaGVja3BvaW50ID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL0NoZWNrcG9pbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLk5lZWRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9OZWVkTGF5ZXInKTtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvQmFja0xheWVyJyk7XG4gICAgICAgIHRoaXMuUHJvcE5vZGUgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL1Byb3AnKTtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIkxvdHRlcnlMYXllclwiKTtcbiAgICAgICAgLy/nianlk4HljLrln59cbiAgICAgICAgdGhpcy5pdGVtQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9JdGVtQXJlYScpO1xuICAgICAgICAvL+W8gOWQr+eisOaSnlxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMubWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuXG4gICAgICAgIC8v6YeN57uEcHJlZmFi5pWw57uEIOaWueS+v+afpeivolxuICAgICAgICB0aGlzLlByZWZhYiA9IHt9O1xuICAgICAgICB0aGlzLlByZWZhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuUHJlZmFiW2l0ZW0uX25hbWVdID0gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/lj5HlsITpkqnlrZDmjInpkq5cbiAgICAgICAgbGV0IGVtaXRIb29rID0gY2MuZmluZCgnQ2FudmFzL2VtaXRIb29rQnRuJyk7XG4gICAgICAgIC8v5by55Ye65qGGXG4gICAgICAgIHRoaXMuTWFzayA9IGNjLmZpbmQoJ0NhbnZhcy9NYXNrJyk7XG4gICAgICAgIC8v5ri45oiP57uT5p2f5oyJ6ZKuIOWMheaLrOi/h+WFsy/nu5PmnZ/muLjmiI9cbiAgICAgICAgdGhpcy5NYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5DbG9zZU1hc2suYmluZCh0aGlzKSk7XG4gICAgICAgIGVtaXRIb29rLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbWl0SG9va0J0bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gLTE7XG4gICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgdGhpcy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIHRoaXMuUmVzZXRJbmZvKCk7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuU2V0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVUYXJnZXRTY29yZSgpO1xuICAgICAgICB0aGlzLkNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgdGhpcy5yZWRQYWNrID0gdGhpcy5sZXZlbEluZm8ucmVkUGFjaztcbiAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgPSAwO1xuICAgICAgICAvLyDmmK/lkKbmlrDmiYvlvJXlr7xcbiAgICAgICAgdGhpcy5ndWlkZUluZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpO1xuICAgICAgICBpZiAodGhpcy5ndWlkZUluZGV4IDwgNCAmJiB0aGlzLmd1aWRlSW5kZXggPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmnInmlrDmiYvlvJXlr7zmmoLlgZzmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEd1aWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmVlZFNjb3JlID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxldCBuZWVkTGV2ZWwgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRMZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbmVlZFNjb3JlLnN0cmluZyA9IGDopoHmsYLliIbmlbDvvJoke3RoaXMubGV2ZWxJbmZvLnNjb3JlfWBcbiAgICAgICAgICAgIG5lZWRMZXZlbC5zdHJpbmcgPSBg56ysJHt0aGlzLmxldmVsSW5mby5pZH3lhbNgO1xuICAgICAgICAgICAgLy8g5oq95aWW6YCJ5YWz5Y2hXG4gICAgICAgICAgICAvLyDliY3nq6/pmo/mnLrkuIDkuKrpgZPlhbdcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICBsZXQgYXJyID0gWzEwLCAxMSwgMTNdO1xuICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMik7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGFycltyZG1dO1xuICAgICAgICAgICAgdGhpcy5Mb3R0ZXJ5UHJvcCA9IHByb3A7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuTG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMl1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzBdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBMb29rVmlkZW9HZXRBd2FyZCgpIHtcbiAgICAgICAgLy8gaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VXZWFwb25cIiwgXCJQT1NUXCIsIHtwcm9wOnRoaXMuTG90dGVyeUF3YXJkfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZCxcbiAgICAgICAgICAgIFwid2VhcG9uXCI6IHRoaXMuTG90dGVyeVByb3BcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5MlwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vlvIDlp4vovaznm5hcIiwgcmVzKTtcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlBd2FyZCA9IHJlcy5kYXRhLmF3YXJkO1xuICAgICAgICAgICAgdGhpcy5oaWRlTG90dGVyeUxheWVyKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICBoYW5kbGVEYW9qdSgpIHtcbiAgICAgICAgLy8g6YGT5YW355qE5pWw6YeP5Li6XG4gICAgICAgIGxldCB3ZWFwb24gPSBjYy56bS5MZXZlbEluZm8ud2VhcG9uO1xuICAgICAgICAvLyBwcm9w57G75Z6LIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDEzLuiNr+awtCAxNC7kuInlj7bojYlcbiAgICAgICAgLy8g5aSE55CG6YGT5YW3IOmBk+WFt+WIhuWIq+S4uiDngrjlvLkgYm9vbU51bWJlciDml7bpkp8gY2xvY2tOdW1iZXIg55+z5YyW5omL5YaMIGhhbmRib29rTnVtYmVyIOiNr+awtCBsaXF1aWROdW1iZXIg5LiJ5Y+26I2JIGNsb3Zlck51bWJlclxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiBcIuS9k+WKm1wiLFxuICAgICAgICAgICAgXCIxMFwiOiBcIueCuOW8uVwiLFxuICAgICAgICAgICAgXCIxMVwiOiBcIuaXtumSn1wiLFxuICAgICAgICAgICAgXCIxMlwiOiBcIuefs+WMluaJi+WGjFwiLFxuICAgICAgICAgICAgXCIxM1wiOiBcIuiNr+awtFwiLFxuICAgICAgICAgICAgXCIxNFwiOiBcIuS4ieWPtuiNiVwiXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWFwb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSB3ZWFwb25baV0ubnVtIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5YW25LuW54mp5ZOB6YKj5LmI55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogd2VhcG9uW2ldLnByb3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Qcm9wXCIsIFwiUE9TVFwiLCBzZW5kRHRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L2/55So5oiQ5YqfLVwiLCBkYXRhW3dlYXBvbltpXS5wcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSB3ZWFwb25baV0ubnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kYm9va051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpcXVpZE51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Zlck51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUuaGVpZ2h0IC8gd2luU2l6ZS53aWR0aCA8PSA3MjAgLyAxMjgwKSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmSqeWtkOaXi+i9rFxuICAgICAqL1xuICAgIEhvb2tSb1RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLkhvb2tTdGF0ZSkgcmV0dXJuO1xuXG4gICAgICAgIC8v6ZmQ5Yi26IyD5Zu0IOWPquiDveWcqCA3MCDkuI4gLTcwIOS5i+mXtFxuICAgICAgICBpZiAodGhpcy5Ib29rLmFuZ2xlID49IDcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gLXRoaXMucm90YXRlU3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5Ib29rLmFuZ2xlIDw9IC03MCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IE1hdGguYWJzKHRoaXMucm90YXRlU3BlZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuSG9vay5hbmdsZSArPSB0aGlzLnJvdGF0ZVNwZWVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2Q5oyJ6ZKu5LqL5Lu2XG4gICAgICovXG4gICAgZW1pdEhvb2tCdG4oKSB7XG4gICAgICAgIC8vVE9ETyDlgZzmraLpkqnlrZDml4vovaxcbiAgICAgICAgLy/miZPlvIAv5YWz6ZetIOmSqeWtkOW8gOWFsyDmsqHmnInmi4nlm57kuYvliY0g5b2T5YmNcG9zaXRpb24g77yBPSDliJ3lp4vkvY3nva7ml7Yg5LiN5YWB6K645pON5L2cXG4gICAgICAgIGlmICh0aGlzLkhvb2tTdGF0ZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWPkeWwhOmSqeWtkFxuICAgICAqL1xuICAgIGVtaXRIb29rKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuSG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICAgICAgICAgIHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhlcm9GcmFtZXNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdG9wSG9va01vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaLieWbnumSqeWtkFxuICAgICAqL1xuICAgIFB1bGxCYWNrSG9vaygpIHtcbiAgICAgICAgLy/mkq3mlL7mi4nlm57pkqnlrZDliqjnlLtcbiAgICAgICAgdGhpcy5NaW5lckFuaW1hdGlvbi5wbGF5KCdoZXJvJyk7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuXG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLoja/msLTmlYjmnpzpgJ/luqblop7liqAxMCVcIilcbiAgICAgICAgICAgIHByb21vdGUgPSAxLjFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwZWVkID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXS5zcGVlZCAqIHByb21vdGUgfHwgMTA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaJgOacieWIhuaVsOS/oeaBr1xuICAgICAqL1xuICAgIFJlc2V0SW5mbygpIHtcbiAgICAgICAgLy90aGlzLnZpY3Rvcnkg5ri45oiP6IOc5Yip5aSx6LSl54q25oCBIDAgPSDmuLjmiI/kuK0gMSA9IOaIkOWKnyAyID0g5aSx6LSlXG4gICAgICAgIHRoaXMudmljdG9yeSA9XG4gICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuQ2hlY2twb2ludC5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjlgJLorqHml7ZcbiAgICAgKi9cbiAgICBTdGFydFRpbWUoKSB7XG4gICAgICAgIC8vIOaYr+WQpuWtmOWcqOaXtumSnyDlrZjlnKjml7bpkp8gdGhpcy5Jbml0VGltZSsxMOenklxuICAgICAgICBpZiAodGhpcy5jbG9ja051bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjml7bpkp/miJDlip8rMTBzXCIpXG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMTVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnoa7lrprov4flhbPnm67moIfliIbmlbBcbiAgICAgKiDnm67moIfliIbmlbDmoLnmja7lhbPljaHlhbPmlbDnoa7lrpog6Zq+5bqm57Sv5Yqg546H5Li6XG4gICAgICogIOWfuuaVsCAxMDAwXG4gICAgICogIOavj+WFs+mAkuWinjUwMOWIhlxuICAgICAqIFxuICAgICAqIOacgOWkpyA1MDAw5YiGXG4gICAgICovXG4gICAgQ3JlYXRlVGFyZ2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nID0gdGhpcy5sZXZlbEluZm8uc2NvcmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOeJqeWTgSDpnIDopoHmoLnmja7nm67moIfliIbmnaXnlJ/miJAg55Sf5oiQ55qE5omA5pyJ54mp5ZOB5oC75YiG5b+F6aG75q+U55uu5qCH6L+H5YWz5YiG5pWw6auYMjAlXG4gICAgICog55Sf5oiQ55qE54mp5ZOB5pWw6YeP5ZyoIDEwLTMwXG4gICAgICovXG4gICAgQ3JlYXRlSXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1BcnIgPSB0aGlzLm5ld0NyZWF0ZUNhbGMoKTtcbiAgICAgICAgLy8g5YaZ5LiA5Liq566X5rOVIOagueaNruWIhuaVsOWFiOWwhmFyciDmjpLluo8g5oC75YiG5LiN6IO96LaF6L+H5pyA5aSn5YiG5pWwIOWmguaenOi2heS6hiDliJnku47lsI/lvIDlp4vlh4/lsJEg55u05Yiw5YiG5pWw5bCP5LqO5pyA5aSn5YiG5pWwXG4gICAgICAgIC8v55Sf5oiQ55u45bqU55qEUHJmYWJcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtQXJyPVwiLCBuZXdJdGVtQXJyKTtcbiAgICAgICAgbmV3SXRlbUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltpdGVtLm5hbWVdKTtcbiAgICAgICAgICAgIGxldCBYWSA9IHRoaXMucmFuZG9tWFkobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICBpZiAoaXRlbS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvcCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXh0cmEgPSBpdGVtLnByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKFhZKTtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiVG50XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQm9vbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgIGJvb20ubmFtZSA9IFwidG50Qm9vbVwiO1xuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIoWFkueCwgWFkueSAtIDIxOCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuYm9vbSA9IGJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b2Rv5YWI5LiN5Yib5bu66ICB6byg6K+V6K+VXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5tb3VzZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsSW5mby5tb3VzZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyDmma7pgJrogIHpvKBcbiAgICAgICAgICAgIGxldCBtb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzBdKTtcbiAgICAgICAgICAgIGlmIChtb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdXNlTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltcIk1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNTA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTW91c2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IERyaWxsTW91c2VOdW1iZXIgPSBOdW1iZXIoZGF0YVsxXSk7XG4gICAgICAgICAgICBpZiAoRHJpbGxNb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERyaWxsTW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiRHJpbGxNb3VzZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeUn+aIkOeahOeJqeWTgeaYr+WPr+WKqOeahFxuICAgIG1vdmVNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyDlhYjlsIbogIHpvKDnp7vliqjliLDmnIDlj7Povrkg5pe26Ze05Li6NjAwL+i3neemuyo1XG4gICAgICAgIGxldCBfbW92ZVRpbWUgPSAxMFxuICAgICAgICBsZXQgdGltZSA9IChwYXJzZUludCgzMDAgLSBtb3VzZS54KSAvIDYwMCkgKiBfbW92ZVRpbWVcbiAgICAgICAgY2MudHdlZW4obW91c2UpLnRvKHRpbWUsIHsgeDogMzAwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8g546w5Zyo5byA5aeLIOiAgem8oOWBmuinhOW+i+i/kOWKqOWFiOWwhuiAgem8oOWPjei9rFxuICAgICAgICAgICAgaWYgKG1vdXNlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAtMTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb3VzZSkucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKF9tb3ZlVGltZSwgeyB4OiAtMzAwIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIH0pLnRvKF9tb3ZlVGltZSwgeyB4OiAzMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIH0pKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUgKyAxKVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOV44CC44CC5LiA5Y+q5pyJ5LiA5Liq5oC75pWw6YePIOWPr+S7peW+l+WIsCDlkITkuKrnianlk4HnmoTmlbDph49cbiAgICBuZXdDcmVhdGVDYWxjKCkge1xuICAgICAgICBsZXQgY3JlYXRlSXRlbUFyciA9IFtdO1xuICAgICAgICAvLyDlhYjnlJ/miJDnuqLljIXot5/npZ7np5jnianlk4FcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmEgPSB0aGlzLmxldmVsSW5mby5leHRyYS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyAw5piv57qi5YyFIOWIm+W7uuS4gOS4que6ouWMhVxuICAgICAgICAgICAgaWYgKGV4dHJhWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8g5byA5Ye655qE57qi5YyF6YeR6aKdXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dHJhWzFdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgSDlhYjpmo/mnLrlh7rnianlk4Eg5piv5ZCm5pyJ5LiJ5Y+26I2JIOWmguaenOaciSDoja/msLTnmoTpmo/mnLrmpoLnjoflop7liqBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbG92ZXJOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXCLngrjlvLlcIiwgXCIz5YWD57qi5YyFXCIsIFwiNeWFg+e6ouWMhVwiLCBcIuiNr+awtFwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJtZCA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9wID0gYXJyW3JtZF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlzdGVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IF9wcm9wLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uYm9vbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsSW5mby5ib29tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRudFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7np6/liIYg55Sf5oiQ5a+55bqU5Liq5pWwXG4gICAgICAgIGlmICghdGhpcy5sZXZlbEluZm8uZ29vZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmxldmVsSW5mby5nb29kLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgLy8gbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbEluZm8ubWF4U2NvcmU7XG4gICAgICAgIGxldCBzY29yZUFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfaW5mbyA9IGluZm9baV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBfaW5mb1swXTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKF9pbmZvWzFdKVxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuY3JlYXRlQnlUeXBlKHR5cGUsIHBlcmNlbnQpO1xuICAgICAgICAgICAgc2NvcmVBcnIgPSBbLi4uc2NvcmVBcnIsIC4uLm5ld0Fycl1cbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbnp6/liIbmlbDnu4TmjpLluo9cbiAgICAgICAgbGV0IF9zY29yZUFyciA9IHNjb3JlQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPCBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiuoeeul+aJgOaciWFycuS4reeahOWIhuaVsOaYr+S4jeaYr+i2hei/hyDmnKzlhbPnmoTmnIDlpKflgLwg5aaC5p6c6LaF6L+H6YKj5LmI5LuO5ZCO5b6A5YmN6K6h566X5YC8XG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Njb3JlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2NvcmUgKz0gX3Njb3JlQXJyW2ldLnNjb3JlO1xuICAgICAgICAgICAgaWYgKF9zY29yZSA8PSB0b3RhbFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goX3Njb3JlQXJyW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLm5ld0Fycl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlSXRlbUFycuacquaMieeFp+WuveW6puaOkuW6jz1cIiwgY3JlYXRlSXRlbUFycik7XG4gICAgICAgIC8vIOWwhmNyZWF0ZUl0ZW1BcnLmjpLluo/mjInnhaflrr3luqZcbiAgICAgICAgY3JlYXRlSXRlbUFyciA9IGNyZWF0ZUl0ZW1BcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA8IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVJdGVtQXJy54Wn5a695bqm5o6S5bqPPVwiLCBjcmVhdGVJdGVtQXJyKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgfSxcbiAgICAvLyDmoLnmja7np6/liIbot5/nsbvlnovnlJ/miJDmlbDph49uYW1lXG4gICAgY3JlYXRlQnlUeXBlKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/nn7PlnZcg5piv5ZCm5pyJ5YyW55+z5omL5YaMIOWmguaenOaciSDnn7PlpLTnmoTku7flgLzmj5DljYcyMCUgdG9kb1xuICAgICAgICAgICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kYm9va051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuefs+WMluaJi+WGjOS9v+eUqOaIkOWKn+efs+WktOeahOS7t+WAvOaPkOWNhzIwJVwiKVxuICAgICAgICAgICAgICAgICAgICBwcm9tb3RlID0gMS4yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiU3RvbmUtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gWzIwLCAzMCwgNDBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhDaWcgPSBbNDIsIDg5LCAxNTRdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dICogcHJvbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhDaWdbcmRtXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/pu4Tph5FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkdvbGQtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruW9k+WJjeenr+WIhueahOacgOWkp+WAvOWKqOaAgeeUn+aIkOaVsOe7hFxuICAgICAgICAgICAgICAgICAgICBsZXQgX19zY29yZSA9IHNjb3JlIC0gX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19zY29yZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gWzUwLCAxMDAsIDE1MCwgMjAwLCAzMDBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9rZXkgPSBNYXRoLmZsb29yKF9fc2NvcmUgLyA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBfa2V5ID4gNCA/IDQgOiBfa2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcucHVzaCg1MCAqICgxICsgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNTBcIjogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEwMFwiOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTUwXCI6IDgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyMDBcIjogMTA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDBcIjogMTQ2XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgc2NvcmVDaWcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSBzY29yZUNpZ1tyZG1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZUNpZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSArIHJkbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogc2NvcmVDaWdbcmRtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhbXCJcIiArIHNjb3JlQ2lnW3JkbV1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+mSu+efs1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiRHJpbGxcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyOVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/npZ7np5jnianlk4FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgLSBfc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSAtIF9zY29yZSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZyA9IHRoaXMuY3JlYXRlUmFuZG0oMzAsIHNjb3JlIC0gX3Njb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiBzY29yZUNpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpmo/mnLrlnZDmoIcg5Yik5pat6L+Z5Liq5Z2Q5qCH5Lqn55Sf55qEcmVjdOaYr+WQpui3n+WFtuS7lueahOaJgOacieeahOeJqeWTgeeahHJlY3Tnm7jmjqXop6Yg5aaC5p6c5rKh5pyJ6L+U5Zue5Z2Q5qCHIOWmguaenOaOpeinpumHjeaWsOmaj+aculxuICAgICAqL1xuICAgIHJhbmRvbVhZKGl0ZW0pIHtcbiAgICAgICAgLy94ID0g5bGP5bmV5a695bqmIC8gMiAqIOmaj+acuuaVsFxuICAgICAgICAvL3kgPSDlnLDlubPpnaLkvY3nva4gKyDpmo/mnLrmlbBjYy5yYW5kb20wVG8xKCkgK+mrmOW6puiMg+WbtO+8iOWPr+S7peivtOaYr1nnmoTmnIDlsI/ngrnvvIlcbiAgICAgICAgLy/lnLDlubPpnaLkvY3nva4gPSDlnLDpnaJ5ICsg5Zyw6Z2iIOmrmOW6piAvIDJcbiAgICAgICAgLy8gLSAzMOaYr+WboOS4uueJqeWTgemUmueCueWcqOS4remXtOS9jee9riDorr7nva7lnZDmoIfliLDojIPlm7TlrprngrnnmoTml7blgJkg5Lya5pyJ6YOo5YiG6LaF5Ye6XG4gICAgICAgIGxldCBncm91bmRZID0gdGhpcy5pdGVtQXJlYS55ICsgdGhpcy5pdGVtQXJlYS5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIC8vIOmaj+acuueUn+aIkOeahOS4gOS4quWdkOagh1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChwb3MueCAtIGl0ZW0ud2lkdGggLyAyLCBwb3MueSAtIGl0ZW0uaGVpZ2h0IC8gMiwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IGlzUGVuZyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG4uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guaW50ZXJzZWN0cyhyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBpc1BlbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQZW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tWFkoaXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDngrjlvLnojIPlm7TnmoTnianlk4Hov5vooYzplIDmr4FcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IFRudFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRlc3Ryb3lUbnQoVG50KSB7XG4gICAgICAgIC8vIOmBjeWOhnRoaXMuaXRlbUFyZWHlhoXmiYDmnInnmoToioLngrkg5b2T6IqC54K555qE5Lit5b+D6IqC54K55Zyo54K45by55YaFIOWImemUgOavgVxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG4gIT09IFRudCkge1xuICAgICAgICAgICAgICAgIC8vIOmAmui/h1RudOeahOS4reW/g+S9jee9riDliJvlu7rkuIDkuKpyZWN05Yy65Z+fXG4gICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBUbnQuZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChfcG9zLnggLSAxMjUsIF9wb3MueSAtIDEyNSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBuLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeUn+aIkG4tbemaj+acuuaVsFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWFs+mXree7s+WtkOeKtuaAgVxuICAgICAqL1xuICAgIFN0b3BIb29rTW92ZSgpIHtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ID0gdGhpcy5Ib29rSGVpZ2h0O1xuICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnN0b3AoJ2hlcm8nKTtcbiAgICAgICAgdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSGVyb0ZyYW1lc1swXTtcbiAgICAgICAgLy/ph43nva7lj5HlsITpkqnlrZDpgJ/luqZcbiAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgIHRoaXMuSG9vay5nZXRDaGlsZEJ5TmFtZShcImhvb2tfMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSG9va0ZyYW1lc1swXVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5aSE55CG5ouJ5Zue55qE54mp5ZOB77yM5Yig6Zmk54mp5ZOB5Lul5Y+K5re75Yqg5b6X5YiGXG4gICAgICovXG4gICAgSGFuZGxlKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuQWRkUHJvcChpdGVtcyk7XG4gICAgICAgIHRoaXMuQWRkU2NvcmUoaXRlbXMpO1xuICAgICAgICB0aGlzLlJlbW92ZUl0ZW0oaXRlbXMpO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbov5jmnInnianlk4HlnKjlnLDlm77kuIog5aaC5p6c5rKh5pyJ6YKj5LmI57uT566XIOe7k+adn1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIOWcsOWbvueJqeWTgea2iOWksSDnu5PnrpdcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIHRoaXMuR2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vbVwiKSkge1xuICAgICAgICAgICAgbGV0IGJvb20gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpXG4gICAgICAgICAgICBib29tLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIGJvb20uZGVzdHJveSgpO1xuICAgICAgICAgICAgYm9vbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOiwg+aVtOeOsOacieeahOeCuOW8ueeahOeOsOWunuaViOaenFxuICAgIGFkanVzQm9vbUxheW91dCgpIHtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuUHJvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIik7XG4gICAgICAgIGxheW91dC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ib29tTnVtYmVyID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlciA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBib29tID0gbGF5b3V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGkgPD0gdGhpcy5ib29tTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635b6X6YGT5YW3XG4gICAgICovXG4gICAgQWRkUHJvcChpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmIChpdGVtc1swXS5uYW1lID09PSBcIk15c3RlcnlcIikge1xuICAgICAgICAgICAgbGV0IHByb3AgPSBpdGVtc1swXS5leHRyYTtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wKSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwi54K45by5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRqdXNCb29tTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjPlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI15YWD57qi5YyFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwi6I2v5rC0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/np6/liIZcbiAgICAgICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IHBhcnNlSW50KHRoaXMuU2NvcmUuc3RyaW5nKSArIChwcm9wIHx8IDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2NvcmUgKz0gKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltKFwic2NvcmVcIiwgcHJvcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbXNbMF0ubmFtZSA9PT0gXCJSZWRcIikge1xuICAgICAgICAgICAgLy8g6ZqP5py6My045Z2X6ZKxIDLkvY3mnInmlYjlsI/mlbBcbiAgICAgICAgICAgIGxldCBleHRyYVJlZFBhY2sgPSAoTWF0aC5mbG9vcih0aGlzLmNyZWF0ZVJhbmRtKDMwMCwgODAwKSkpIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gZXh0cmFSZWRQYWNrO1xuICAgICAgICAgICAgdGhpcy5hZGRBbmltKFwicmVkXCIsIGV4dHJhUmVkUGFjayk7XG4gICAgICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93TWVzdGVyeSh0eXBlKSB7XG4gICAgICAgIC8vIFtcIueCuOW8uVwiLFwiM+WFg+e6ouWMhVwiLFwiNeWFg+e6ouWMhVwiLFwi6I2v5rC0XCJdXG4gICAgICAgIGxldCBtZXN0ZXJ5ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1lc3RlcnlcIik7XG4gICAgICAgIG1lc3RlcnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWVzdGVyeS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuUHJvcFNwcml0ZUZyYW1lc1t0eXBlXTtcbiAgICAgICAgbWVzdGVyeS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBjYy50d2VlbihtZXN0ZXJ5KS50bygyLCB7IHk6IG1lc3RlcnkueSArIDEwMCwgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIG1lc3Rlcnkub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIG1lc3RlcnkueSAtPSAxMDA7XG4gICAgICAgICAgICBtZXN0ZXJ5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6Zmk54mp5ZOBXG4gICAgICovXG4gICAgUmVtb3ZlSXRlbShpdGVtcykge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75Yqg5b6X5YiGXG4gICAgICovXG4gICAgQWRkU2NvcmUoaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtc1swXSkgcmV0dXJuO1xuICAgICAgICBpZiAoIWl0ZW1zWzBdLnNjb3JlKSByZXR1cm47XG4gICAgICAgIC8vIGxldCBzY29yZUNvbiA9IEl0ZW1BdHRyW2l0ZW1zWzBdLm5hbWVdIHx8IHt9O1xuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IHBhcnNlSW50KHRoaXMuU2NvcmUuc3RyaW5nKSArIChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgdGhpcy5jdXJTY29yZSArPSAoaXRlbXNbMF0uc2NvcmUgfHwgMCk7XG4gICAgICAgIC8v5pKt5pS+5b6X5YiG6Z+z5pWIXG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlop7liqDkuIDkuKrlop7liqDnp6/liIbpo5jlkJEtLS0+U2NvcmXkvY3nva7ngrnliqjnlLtcbiAgICAgICAgdGhpcy5hZGRBbmltKFwic2NvcmVcIiwgaXRlbXNbMF0uc2NvcmUpXG4gICAgfSxcbiAgICAvLyDlgZrkuIDkuKrlop7liqDnp6/liIbngrnliqjnlLtcbiAgICBhZGRBbmltKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhZGQgPSBudWxsO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJzY29yZVwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkU2NvcmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJyZWRcIikge1xuICAgICAgICAgICAgYWRkID0gdGhpcy5TY29yZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkZFJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBhZGQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHNjb3JlO1xuICAgICAgICBhZGQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgYWRkLm9wYWNpdHkgPSAwO1xuICAgICAgICBhZGQueSA9IC0xMzI7XG4gICAgICAgIGNjLnR3ZWVuKGFkZCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygxLCB7IHk6IDQyIH0pLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYvuekuk1hc2sgdmljdG9yeT0wIHZpY3Rvcnk9MeiDnOWIqSB2aWN0b3J5PTLlpLHotKVcbiAgICAgKi9cbiAgICBTaG93TWFzaygpIHtcbiAgICAgICAgLy/mmL7npLrlvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKVxuICAgICAgICBsZXQgRmFpbCA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIkZhaWxcIik7XG4gICAgICAgIGxldCBTdWNjZXNzID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgRmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6K6+572u55uu5qCH5YaF5a65XG4gICAgICAgICAgICBsZXQgbGJsID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5q+P5pel5Lu75Yqh6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pyq6aKG5Y+WXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxibC5zdHJpbmcgPSBg5q+P5pel5Lu75Yqh6L6+5oiQ5p2h5Lu277yM55yL5bm/5ZGKJHtpdGVtLmN1cnJfYWR9Lyske2l0ZW0ubmVlZF9hZH0s6ZyA6KaB6YCa5YWzJHtpdGVtLmN1cnJfcGFzc19zdGFnZX0vKyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V9YFxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreWQhOenjeadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreeUqOaIt+WFs+WNoeadoeS7tlxuICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfcGFzc19zdGFnZSA8IGl0ZW0ubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWFs+WNoeetiee6p+Wwj+S6jumcgOimgeWFs+WNoeetiee6p1xuICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOmAmuWFsyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V95YWz5ZCO5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFs+WNoeetiee6p+i+vuaIkCDliKTmlq3nrKzkuozmnaHku7YgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfc2lnbl9pbiA8IGl0ZW0ubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWujOaIkOS7iuaXpeetvuWIsOWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfYWQgPCBpdGVtLm5lZWRfYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWGjeeciyR7aXRlbS5uZWVkX2FkIC0gaXRlbS5jdXJyX2FkfeS4quinhumikeWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgYXdyYWQgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwiYXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3cmFkLnN0cmluZyA9IGDlpZblirHnuqLljIUrJHt0aGlzLnJlZFBhY2t9YDtcbiAgICAgICAgICAgIGxldCBleHRhdEF3YXJkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhQXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dGFyUmVkUGFjaykge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHt0aGlzLmV4dGFyUmVkUGFja31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5Y+R6YCB5pWw5o2uIHJlZF9wYWNrOue6ouWMhSBzY29yZTrliIbmlbAgdHPvvJrml7bpl7TmiLMgc2lnbiBNRDXmlbDmja5cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiYm9tYlwiOiB0aGlzLmJvb21OdW1iZXIgKyAxLC8v54K45by55Liq5pWwXG4gICAgICAgICAgICAgICAgXCJwb3Rpb25cIjogdGhpcy5saXF1aWROdW1iZXIsLy/oja/msLRcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHRoaXMuY3VyU2NvcmUsLy/liIbmlbBcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTaWduRGF0YShzZW5kRGF0YSk7XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3PpgJrlhbPmiJDlip/ov5Tlm57kv6Hmga9cIiwgcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWN0b3J5ID09PSAyKSB7XG4gICAgICAgICAgICBGYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDpgJrlhbPlpLHotKXkuI3nlKjlkYror4nmnI3liqHlmahcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLk1hc2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgY3JlYXRlU2lnbkRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBzb3J0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT0gXCJzaWduXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc29ydExpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvcnRMaXN0LnNvcnQoKTtcbiAgICAgICAgdmFyIHN0clRvSmlhTWkgPSBcIlwiO1xuICAgICAgICBzb3J0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHN0clRvSmlhTWkgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIGRhdGFba2V5XTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHN0clRvSmlhTWkgPSBcInRva2VuPVwiICsgY2Muem0udXNlckluZm8uc2MxICsgc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gdmFyIG5vSmlhTWkgPSBzdHJUb0ppYU1pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuacquWKoOWvhuWJjT1cIixzdHJUb0ppYU1pKVxuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yqg5a+G5ZCOPVwiLHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI/vvIzlhbPpl63lvLnlh7rmoYZcbiAgICAgKiDlpoLmnpzmmK/muLjmiI/pgJrlhbPljp/lm6DogIzmiZPlvIDnmoTlvLnlh7rmoYbkuI3kuojnkIbnnaxcbiAgICAgKi9cbiAgICBDbG9zZU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDph43njqnmnKzlhbNcbiAgICAgKi9cbiAgICBSZWxvYWQoKSB7XG4gICAgICAgIC8v5YGc5q2i5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICAvL+mHjei9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57un57ut5LiL5LiA5YWzXG4gICAgICovXG4gICAgTmV4dCgpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudmljdG9yeSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZU1hc2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyDov4flhbPmiJDlip/ngrnlh7vov5vlhaXkuIvkuIDlhbPkuYvliY0g5YWI6I635Y+W55So5oi35L+h5oGvIOeci+eUqOaIt+aYr+WQpuacieS9k+WKm1xuICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2T5Yqb5aSn5LqOMCDov5vlhaXkuIvkuIDlhbNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4wIOW8ueWHuueci+inhumikeiOt+W+l+S9k+WKm+eahOaOpeWPo1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVWaWRlb0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v6YCA5Ye65ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgQXdhcmRWaWRlbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcInJlZF9wYWNrXCI6IHBhcnNlSW50KCh0aGlzLnJlZFBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUGFzc0FkXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3NBZOi/lOWbnuS/oeaBr1wiLCByZXMpO1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBhZDogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3NlTGF5ZXIoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmAgOWHuua4uOaIjyDov5Tlm57kuIrkuIDkuKrlnLrmma9cbiAgICAgKi9cbiAgICBFeGl0R2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgUmVzdW1lR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdGFydFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnBsYXkoJ2hlcm8nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pqC5YGc5b2T5YmN55WM6Z2iXG4gICAgUGF1c2VHYW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuTWluZXJBbmltYXRpb24uc3RvcCgnaGVybycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDog5zliKnmiJblpLHotKXpg73op4bkuLrmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgLy/liKTmlq3nlKjmiLflvpfliIbmmK/lkKbotoXov4fnm67moIfliIZcbiAgICAgICAgbGV0IHMgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgPj0gcGFyc2VJbnQodGhpcy5UYXJnZXRTY29yZS5zdHJpbmcpKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5ri45oiP5aSx6LSlXG4gICAgICAgICAgICBzID0gMjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWN0b3J5ID0gcztcbiAgICAgICAgdGhpcy5TaG93TWFzaygpO1xuICAgIH0sXG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZUdhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5OZWVkTGF5ZXIuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5tb3ZlTW91c2UoKTtcbiAgICAgICAgdGhpcy5lbWl0SG9vaygpO1xuICAgICAgICB0aGlzLkhvb2tSb1RhdGUoKTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIHVzZVByb3AoZSwgbXNnKSB7XG4gICAgICAgIC8vIOWmguaenOaYr+eCuOW8uVxuICAgICAgICBzd2l0Y2ggKG1zZykge1xuICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeeahOeKtuaAgeW/hemhu+aYr+e7s+WtkOWkhOS6juiDveaLieWbnueahOeKtuaAgVxuICAgICAgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuacieeJqeWTgVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0gJiYgdGhpcy5ib29tTnVtYmVyID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55So54K45by55YOP5pyN5Yqh5Zmo5Y+R6YCB5raI5oGvXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc2IuRGV2aWNlLnZpYnJhdGUoMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlhYjmj5DliY3liY3nq6/kvb/nlKgg5piv55S76Z2i5ZCM5q2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlci0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bmi4nljrvnmoTnianlk4HnmoTkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGV0IF9ub2RlID0gdGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDngrjlvLnmlYjmnpxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJvb20pO1xuICAgICAgICAgICAgICAgICAgICBib29tLm5hbWUgPSBcImJvb21cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpXG4gICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIocG9zLnggLSBzaXplLndpZHRoIC8gMiwgcG9zLnkgLSBzaXplLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBib29tLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib29tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgX25vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogMTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Qcm9wXCIsIFwiUE9TVFwiLCBzZW5kRHRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=
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

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Http.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'cd96dt+tdBJybW9vwwJ42yn', 'Http');
// Script/Http.js

"use strict";

cc.Class({
  "extends": cc.Component,
  properties: {},
  statics: {
    base_url: "https://pit.api.jiankangzhuan.com/",
    //测试服
    // sendRequest: function (url, data, success, fail) {
    //     var xhr = new XMLHttpRequest();
    //     xhr.timeout = 2000;
    //     var requestURL = this.base_url + url;
    //     xhr.open(data.type, requestURL, true);
    //     // xhr.responseType = "arraybuffer" 
    //     if(cc.sys.isNative){
    //         cc.log("isNative");
    //         xhr.setRequestHeader("Accept-Encodeing","gzip,deflate");
    //     }
    //     if(url==="pit.v1.PitSvc/UserInfo"){
    //         // 如果当前是获取用户信息 测试用的token
    //         let token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMDcwLCJvcGVuX2lkIjoiIiwibmlja19uYW1lIjoi6K6_5a6iOTUyNyIsImdlbmRlciI6MCwiYXZhdGFyIjoiIiwiY3JlYXRlX3RpbWUiOjE2MzA5OTM0MzksImNoYW5uZWwiOiIiLCJkaXN0aW5jdF9pZCI6IiJ9.ptOVOXd2IDFE9C9fi6o7KAgY2I53xQmnsjv3AmEEcFc"
    //         xhr.setRequestHeader("Authorization",token);
    //     }
    //     cc.log("requestURL=",requestURL)
    //     xhr.onreadystatechange = function () {
    //         if (xhr.readyState === 4 && xhr.status == 200) {
    //             cc.log("http res:" + xhr.response);
    //             if (success !== null) {
    //                 success(xhr.response);
    //             }
    //         }
    //     };
    //     xhr.send(JSON.stringify(data));
    //     return xhr;
    // }
    // 用新的promise来写这个接口
    sendRequest: function sendRequest(url, type, data) {
      return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
        var requestURL = "https://pit.api.jiankangzhuan.com/" + url; // let requestURL = "https://qa.api.jiankangzhuan.com/v2.QASvc/UserQaRankingList";

        xhr.open(type, requestURL, true);

        if (cc.sys.isNative) {
          cc.log("isNative");
          xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
        }

        if (cc.wxToken) {
          xhr.setRequestHeader("Authorization", cc.wxToken);
        }

        xhr.setRequestHeader("Content-Type", "application/json");
        cc.log("requestURL=", requestURL);
        cc.log("data=", JSON.stringify(data));

        xhr.onreadystatechange = function () {
          // cc.log(xhr.readyState,"+",xhr.status)
          if (xhr.readyState === 4 && xhr.status == 200) {
            cc.log("http res:" + xhr.response); // 统一处理

            var _response = JSON.parse(xhr.response);

            if (_response.code === 0) {
              resolve(_response);
            } else {
              console.log(_response.message);
              reject(_response.message);
            }
          }
        };

        xhr.onerror = function () {
          reject(new Error(xhr.statusText));
        }; // console.log("data",JSON.stringify(data));
        // xhr.send();


        xhr.send(JSON.stringify(data));
      });
    }
  },
  // use this for initialization
  onLoad: function onLoad() {}
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSHR0cC5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXRpY3MiLCJiYXNlX3VybCIsInNlbmRSZXF1ZXN0IiwidXJsIiwidHlwZSIsImRhdGEiLCJQcm9taXNlIiwicmVzb2x2ZSIsInJlamVjdCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFVSTCIsIm9wZW4iLCJzeXMiLCJpc05hdGl2ZSIsImxvZyIsInNldFJlcXVlc3RIZWFkZXIiLCJ3eFRva2VuIiwiSlNPTiIsInN0cmluZ2lmeSIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJyZXNwb25zZSIsIl9yZXNwb25zZSIsInBhcnNlIiwiY29kZSIsImNvbnNvbGUiLCJtZXNzYWdlIiwib25lcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsInNlbmQiLCJvbkxvYWQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUFBLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0xDLEVBQUFBLE9BQU8sRUFBRTtBQUNMQyxJQUFBQSxRQUFRLEVBQUUsb0NBREw7QUFDMEM7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQUMsSUFBQUEsV0FBVyxFQUFFLHFCQUFVQyxHQUFWLEVBQWVDLElBQWYsRUFBb0JDLElBQXBCLEVBQTBCO0FBQ25DLGFBQU8sSUFBSUMsT0FBSixDQUFZLFVBQVVDLE9BQVYsRUFBbUJDLE1BQW5CLEVBQTJCO0FBQzFDLFlBQUlDLEdBQUcsR0FBRyxJQUFJQyxjQUFKLEVBQVY7QUFDQSxZQUFJQyxVQUFVLEdBQUcsdUNBQXVDUixHQUF4RCxDQUYwQyxDQUcxQzs7QUFDQU0sUUFBQUEsR0FBRyxDQUFDRyxJQUFKLENBQVNSLElBQVQsRUFBZU8sVUFBZixFQUEyQixJQUEzQjs7QUFDQSxZQUFJZixFQUFFLENBQUNpQixHQUFILENBQU9DLFFBQVgsRUFBcUI7QUFDakJsQixVQUFBQSxFQUFFLENBQUNtQixHQUFILENBQU8sVUFBUDtBQUNBTixVQUFBQSxHQUFHLENBQUNPLGdCQUFKLENBQXFCLGtCQUFyQixFQUF5QyxjQUF6QztBQUNIOztBQUNELFlBQUdwQixFQUFFLENBQUNxQixPQUFOLEVBQWM7QUFDVlIsVUFBQUEsR0FBRyxDQUFDTyxnQkFBSixDQUFxQixlQUFyQixFQUFzQ3BCLEVBQUUsQ0FBQ3FCLE9BQXpDO0FBQ0g7O0FBQ0RSLFFBQUFBLEdBQUcsQ0FBQ08sZ0JBQUosQ0FBcUIsY0FBckIsRUFBcUMsa0JBQXJDO0FBQ0FwQixRQUFBQSxFQUFFLENBQUNtQixHQUFILENBQU8sYUFBUCxFQUFzQkosVUFBdEI7QUFDQWYsUUFBQUEsRUFBRSxDQUFDbUIsR0FBSCxDQUFPLE9BQVAsRUFBZ0JHLElBQUksQ0FBQ0MsU0FBTCxDQUFlZCxJQUFmLENBQWhCOztBQUNBSSxRQUFBQSxHQUFHLENBQUNXLGtCQUFKLEdBQXlCLFlBQVk7QUFDakM7QUFDQSxjQUFJWCxHQUFHLENBQUNZLFVBQUosS0FBbUIsQ0FBbkIsSUFBd0JaLEdBQUcsQ0FBQ2EsTUFBSixJQUFjLEdBQTFDLEVBQStDO0FBQzNDMUIsWUFBQUEsRUFBRSxDQUFDbUIsR0FBSCxDQUFPLGNBQWNOLEdBQUcsQ0FBQ2MsUUFBekIsRUFEMkMsQ0FFM0M7O0FBQ0EsZ0JBQUlDLFNBQVMsR0FBR04sSUFBSSxDQUFDTyxLQUFMLENBQVdoQixHQUFHLENBQUNjLFFBQWYsQ0FBaEI7O0FBQ0EsZ0JBQUdDLFNBQVMsQ0FBQ0UsSUFBVixLQUFpQixDQUFwQixFQUFzQjtBQUNsQm5CLGNBQUFBLE9BQU8sQ0FBQ2lCLFNBQUQsQ0FBUDtBQUNILGFBRkQsTUFFSztBQUNERyxjQUFBQSxPQUFPLENBQUNaLEdBQVIsQ0FBWVMsU0FBUyxDQUFDSSxPQUF0QjtBQUNBcEIsY0FBQUEsTUFBTSxDQUFDZ0IsU0FBUyxDQUFDSSxPQUFYLENBQU47QUFDSDtBQUNKO0FBQ0osU0FiRDs7QUFjQW5CLFFBQUFBLEdBQUcsQ0FBQ29CLE9BQUosR0FBYyxZQUFZO0FBQ3RCckIsVUFBQUEsTUFBTSxDQUFDLElBQUlzQixLQUFKLENBQVVyQixHQUFHLENBQUNzQixVQUFkLENBQUQsQ0FBTjtBQUNILFNBRkQsQ0E3QjBDLENBZ0MxQztBQUNBOzs7QUFDQXRCLFFBQUFBLEdBQUcsQ0FBQ3VCLElBQUosQ0FBU2QsSUFBSSxDQUFDQyxTQUFMLENBQWVkLElBQWYsQ0FBVDtBQUNILE9BbkNNLENBQVA7QUFvQ0g7QUFuRUksR0FQSjtBQTZFTDtBQUNBNEIsRUFBQUEsTUFBTSxFQUFFLGtCQUFZLENBRW5CO0FBaEZJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG5cbiAgICB9LFxuXG4gICAgc3RhdGljczoge1xuICAgICAgICBiYXNlX3VybDogXCJodHRwczovL3BpdC5hcGkuamlhbmthbmd6aHVhbi5jb20vXCIsLy/mtYvor5XmnI1cbiAgICAgICAgLy8gc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIGRhdGEsIHN1Y2Nlc3MsIGZhaWwpIHtcbiAgICAgICAgLy8gICAgIHZhciB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgLy8gICAgIHhoci50aW1lb3V0ID0gMjAwMDtcbiAgICAgICAgLy8gICAgIHZhciByZXF1ZXN0VVJMID0gdGhpcy5iYXNlX3VybCArIHVybDtcbiAgICAgICAgLy8gICAgIHhoci5vcGVuKGRhdGEudHlwZSwgcmVxdWVzdFVSTCwgdHJ1ZSk7XG4gICAgICAgIC8vICAgICAvLyB4aHIucmVzcG9uc2VUeXBlID0gXCJhcnJheWJ1ZmZlclwiIFxuICAgICAgICAvLyAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgLy8gICAgICAgICBjYy5sb2coXCJpc05hdGl2ZVwiKTtcbiAgICAgICAgLy8gICAgICAgICB4aHIuc2V0UmVxdWVzdEhlYWRlcihcIkFjY2VwdC1FbmNvZGVpbmdcIixcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgLy8gICAgIH1cbiAgICAgICAgLy8gICAgIGlmKHVybD09PVwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiKXtcbiAgICAgICAgLy8gICAgICAgICAvLyDlpoLmnpzlvZPliY3mmK/ojrflj5bnlKjmiLfkv6Hmga8g5rWL6K+V55So55qEdG9rZW5cbiAgICAgICAgLy8gICAgICAgICBsZXQgdG9rZW4gPSBcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam94TURBeE1EY3dMQ0p2Y0dWdVgybGtJam9pSWl3aWJtbGphMTl1WVcxbElqb2k2SzZfNWE2aU9UVXlOeUlzSW1kbGJtUmxjaUk2TUN3aVlYWmhkR0Z5SWpvaUlpd2lZM0psWVhSbFgzUnBiV1VpT2pFMk16QTVPVE0wTXprc0ltTm9ZVzV1Wld3aU9pSWlMQ0prYVhOMGFXNWpkRjlwWkNJNklpSjkucHRPVk9YZDJJREZFOUM5Zmk2bzdLQWdZMkk1M3hRbW5zanYzQW1FRWNGY1wiXG4gICAgICAgIC8vICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJBdXRob3JpemF0aW9uXCIsdG9rZW4pO1xuICAgICAgICAvLyAgICAgfVxuICAgICAgICAvLyAgICAgY2MubG9nKFwicmVxdWVzdFVSTD1cIixyZXF1ZXN0VVJMKVxuICAgICAgICAvLyAgICAgeGhyLm9ucmVhZHlzdGF0ZWNoYW5nZSA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgLy8gICAgICAgICBpZiAoeGhyLnJlYWR5U3RhdGUgPT09IDQgJiYgeGhyLnN0YXR1cyA9PSAyMDApIHtcbiAgICAgICAgLy8gICAgICAgICAgICAgY2MubG9nKFwiaHR0cCByZXM6XCIgKyB4aHIucmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICBpZiAoc3VjY2VzcyAhPT0gbnVsbCkge1xuICAgICAgICAvLyAgICAgICAgICAgICAgICAgc3VjY2Vzcyh4aHIucmVzcG9uc2UpO1xuICAgICAgICAvLyAgICAgICAgICAgICB9XG4gICAgICAgIC8vICAgICAgICAgfVxuICAgICAgICAvLyAgICAgfTtcbiAgICAgICAgLy8gICAgIHhoci5zZW5kKEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgLy8gICAgIHJldHVybiB4aHI7XG4gICAgICAgIC8vIH1cbiAgICAgICAgLy8g55So5paw55qEcHJvbWlzZeadpeWGmei/meS4quaOpeWPo1xuICAgICAgICBzZW5kUmVxdWVzdDogZnVuY3Rpb24gKHVybCwgdHlwZSxkYXRhKSB7XG4gICAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVxdWVzdFVSTCA9IFwiaHR0cHM6Ly9waXQuYXBpLmppYW5rYW5nemh1YW4uY29tL1wiICsgdXJsO1xuICAgICAgICAgICAgICAgIC8vIGxldCByZXF1ZXN0VVJMID0gXCJodHRwczovL3FhLmFwaS5qaWFua2FuZ3podWFuLmNvbS92Mi5RQVN2Yy9Vc2VyUWFSYW5raW5nTGlzdFwiO1xuICAgICAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHJlcXVlc3RVUkwsIHRydWUpO1xuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MubG9nKFwiaXNOYXRpdmVcIik7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kZWluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYoY2Mud3hUb2tlbil7XG4gICAgICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCBjYy53eFRva2VuKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLnNldFJlcXVlc3RIZWFkZXIoXCJDb250ZW50LVR5cGVcIiwgXCJhcHBsaWNhdGlvbi9qc29uXCIpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcInJlcXVlc3RVUkw9XCIsIHJlcXVlc3RVUkwpO1xuICAgICAgICAgICAgICAgIGNjLmxvZyhcImRhdGE9XCIsIEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgICAgICAgICAgICAgICB4aHIub25yZWFkeXN0YXRlY2hhbmdlID0gZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBjYy5sb2coeGhyLnJlYWR5U3RhdGUsXCIrXCIseGhyLnN0YXR1cylcbiAgICAgICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5sb2coXCJodHRwIHJlczpcIiArIHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDnu5/kuIDlpITnkIZcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBfcmVzcG9uc2UgPSBKU09OLnBhcnNlKHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZihfcmVzcG9uc2UuY29kZT09PTApe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3Jlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coX3Jlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlamVjdChfcmVzcG9uc2UubWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIHJlamVjdChuZXcgRXJyb3IoeGhyLnN0YXR1c1RleHQpKVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImRhdGFcIixKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICAgICAgLy8geGhyLnNlbmQoKTtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIHVzZSB0aGlzIGZvciBpbml0aWFsaXphdGlvblxuICAgIG9uTG9hZDogZnVuY3Rpb24gKCkge1xuXG4gICAgfSxcbn0pO1xuIl19
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

var http = require("Http");

cc.Class({
  "extends": cc.Component,
  properties: {},
  // LIFE-CYCLE CALLBACKS:
  // onLoad () {},
  start: function start() {
    this.protocol = false;
    this.needLogin = true;
    this.time = 0; //    获取用户信息
    //  cc.sys.localStorage.setItem("token","eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4")

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      cc.wxToken = cc.sys.localStorage.getItem("token");
      cc.director.loadScene('Index');
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.wxLogin.wxLogin();
      } else {
        this.showTips();
      }
    } // this.schedule(()=>{
    //     // cc.wxLoginInfo.wxLoginResultcode = {};
    // },1)

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
  showTips: function showTips() {
    var tips = this.node.getChildByName("tips");
    tips.y = 0;
    tips.active = true;
    cc.tween(tips).to(1, {
      y: 100
    }).delay(0.5).call(function () {
      tips.active = false;
    }).start();
  },
  update: function update(dt) {
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
        http.sendRequest("pit.v1/register", "POST", data).then(function (res) {
          // this.token.string = JSON.stringify(res)
          cc.wxToken = res.data.token;
          cc.sys.localStorage.setItem("token", res.data.token);
          cc.director.loadScene('Index');
        });
      }
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwicHJvdG9jb2wiLCJuZWVkTG9naW4iLCJ0aW1lIiwic3lzIiwibG9jYWxTdG9yYWdlIiwiZ2V0SXRlbSIsInd4VG9rZW4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uTG9naW5XWCIsImlzTmF0aXZlIiwid3hMb2dpbiIsInNob3dUaXBzIiwiY2xpY2tQcm90b2NvbCIsImUiLCJ0YXJnZXQiLCJyaWdodCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwidGlwcyIsIm5vZGUiLCJ5IiwidHdlZW4iLCJ0byIsImRlbGF5IiwiY2FsbCIsInVwZGF0ZSIsImR0Iiwid3hMb2dpblJlc3VsdGNvZGUiLCJkYXRhIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwidG9rZW4iLCJzZXRJdGVtIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRSxFQUhQO0FBT0w7QUFFQTtBQUVBQyxFQUFBQSxLQVhLLG1CQVdJO0FBQ04sU0FBS0MsUUFBTCxHQUFnQixLQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsSUFBakI7QUFDQSxTQUFLQyxJQUFMLEdBQVksQ0FBWixDQUhNLENBSVQ7QUFDSTs7QUFDQSxRQUFHUCxFQUFFLENBQUNRLEdBQUgsQ0FBT0MsWUFBUCxDQUFvQkMsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBSCxFQUF3QztBQUNwQyxXQUFLSixTQUFMLEdBQWlCLEtBQWpCO0FBQ0FOLE1BQUFBLEVBQUUsQ0FBQ1csT0FBSCxHQUFhWCxFQUFFLENBQUNRLEdBQUgsQ0FBT0Ms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SSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBodHRwID0gcmVxdWlyZShcIkh0dHBcIik7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBcbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICAvLyBvbkxvYWQgKCkge30sXG5cbiAgICBzdGFydCAoKSB7XG4gICAgICAgdGhpcy5wcm90b2NvbCA9IGZhbHNlO1xuICAgICAgIHRoaXMubmVlZExvZ2luID0gdHJ1ZTtcbiAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgIC8vICAgIOiOt+WPlueUqOaIt+S/oeaBr1xuICAgICAgICAvLyAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIixcImV5SmhiR2NpT2lKSVV6STFOaUlzSW5SNWNDSTZJa3BYVkNKOS5leUoxYzJWeVgybGtJam94TURBeE1UY3hMQ0p2Y0dWdVgybGtJam9pYjFGWE5GSTFPVlZTUmxGMVlUTlNXamx2WDNsZmRHSjZVRWRMTkNJc0ltNXBZMnRmYm1GdFpTSTZJdWExdC1lYmwtaUl1ZW1WdnpJdU1DSXNJbWRsYm1SbGNpSTZNU3dpWVhaaGRHRnlJam9pYUhSMGNITTZMeTkwYUdseVpIZDRMbkZzYjJkdkxtTnVMMjF0YjNCbGJpOTJhVjh6TWk5bVIweGtSMXBuZUc1d1ZtdEpRbGRqYVdFemVXbGphV0o2YVdKRlEwSjBWekZoUWtoRWJVZGhXbVY2Y1RBeWNXZFFVVU4zU1RONU9HbGpWRTVuV0V0Q2NEQk9jRXhCTlVKRmREWjZVRWRzU0cxVlRXWTViSGQ0UWsxbkx6RXpNaUlzSW1OeVpXRjBaVjkwYVcxbElqb3dMQ0pqYUdGdWJtVnNJam9pTVNJc0ltUnBjM1JwYm1OMFgybGtJam9pTVNKOS5LNUM5WFNrRUVqQkJmUEZuMW01Qm9YR3UxMXViUGM5bFN2RFJBSGt2X1Y0XCIpXG4gICAgICAgIGlmKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpKXtcbiAgICAgICAgICAgIHRoaXMubmVlZExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICBjYy53eFRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9naW5XWCgpe1xuICAgICAgICBpZihjYy5zeXMuaXNOYXRpdmUpe1xuICAgICAgICAgICAgaWYodGhpcy5wcm90b2NvbCl7XG4gICAgICAgICAgICAgICAgY2Mud3hMb2dpbi53eExvZ2luKCk7XG4gICAgICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dUaXBzKClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnNjaGVkdWxlKCgpPT57XG4gICAgICAgIC8vICAgICAvLyBjYy53eExvZ2luSW5mby53eExvZ2luUmVzdWx0Y29kZSA9IHt9O1xuICAgICAgICAgICBcbiAgICAgICAgLy8gfSwxKVxuICAgIH0sXG4gICAgLy8g6YCJ5oup55So5oi35Y2P6K6uXG4gICAgY2xpY2tQcm90b2NvbChlKXtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgcmlnaHQgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKTtcbiAgICAgICAgaWYodGhpcy5wcm90b2NvbCl7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICByaWdodC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dUaXBzKCl7XG4gICAgICAgIGxldCB0aXBzID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidGlwc1wiKTtcbiAgICAgICAgdGlwcy55ID0gMDtcbiAgICAgICAgdGlwcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBjYy50d2Vlbih0aXBzKS50bygxLHt5OjEwMH0pLmRlbGF5KDAuNSkuY2FsbCgoKT0+e1xuICAgICAgICAgICAgdGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgdXBkYXRlKGR0KXtcbiAgICAgICAgdGhpcy50aW1lKz1kdDtcbiAgICAgICAgaWYoIXRoaXMubmVlZExvZ2luKXtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZih0aGlzLnRpbWU+PTEpe1xuICAgICAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgICAgIGlmKGNjLnd4TG9naW5SZXN1bHRjb2RlJiZ0aGlzLnByb3RvY29sKXtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2hhbm5lbFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbWVpXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hY1wiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0aW5jdF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvYWlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWRfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBjYy53eExvZ2luUmVzdWx0Y29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS9yZWdpc3RlclwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHRoaXMudG9rZW4uc3RyaW5nID0gSlNPTi5zdHJpbmdpZnkocmVzKVxuICAgICAgICAgICAgICAgICAgICBjYy53eFRva2VuID0gcmVzLmRhdGEudG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIHJlcy5kYXRhLnRva2VuKTtcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG59KTtcblxuXG4iXX0=
//------QC-SOURCE-SPLIT------
