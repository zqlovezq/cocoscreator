
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
    cc.zm = {};
    cc.zm.ad = {}; // 增加屏幕视频

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
    this.countDownTime = 0;
    this.signNumber = 0; // startBtn.on(cc.Node.EventType.TOUCH_END,this.StartGame.bind(this));

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
    } // 显示banner广告


    this.showBanner(); // 获取用户信息

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
      cc.zm.userInfo = _this.userInfo;
      cc.log("cocos user info " + _this.userInfo); // 注册打点

      cc.Tools.dot("register", {
        register_time: new Date(),
        channel: "微信"
      });

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
        _this9.SevenWorkLayer.getChildByName("getLayer").active = true; // 重新刷新

        _this9.showSevenWorkLayer();
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


    this.signNumber = 0;
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
    this.ta.logout();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvSW5kZXhNYWluLmpzIl0sIm5hbWVzIjpbImh0dHAiLCJyZXF1aXJlIiwiQVdBUkQiLCJjYyIsIkVudW0iLCJEQVlfMSIsIkRBWV8yIiwiREFZXzMiLCJEQVlfNCIsIkRBWV81IiwiREFZXzYiLCJEQVlfNyIsIlJFRF81IiwiUkVEXzEwIiwiQk9PTSIsIkxPQ0siLCJTSE9VQ0UiLCJQT1dFUiIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsIkJHTSIsInR5cGUiLCJBdWRpb0NsaXAiLCJTZXZlbkZyYW1lcyIsIlNwcml0ZUZyYW1lIiwiQXdhcmRGcmFtZXMiLCJUZXh0RnJhbWVzIiwib25Mb2FkIiwiem0iLCJhZCIsInNjcmVlbkFkYXB0ZXIiLCJmaXJzdExheWVyIiwiZmluZCIsImFjdGl2ZSIsIl9maXJzdCIsInN5cyIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJzZXRJdGVtIiwic2NoZWR1bGVPbmNlIiwic2NhbGUiLCJ0d2VlbiIsInRvIiwic3RhcnQiLCJTZXRMYXllciIsIlNpZ25MYXllciIsIlR1cm50YWJsZUxheWVyIiwiR2V0TW9uZXR5TGF5ZXIiLCJTZXZlbldvcmtMYXllciIsIlJlZFBvb2xMYXllciIsIkdldEdvb2RMYXllciIsIlNlZVZpZGVvbGF5ZXIiLCJSZXN1bWVMYXllciIsInNob3dNdXNpYyIsInNob3dTaGFrZSIsImNvdW50RG93blRpbWUiLCJzaWduTnVtYmVyIiwiQkdNX0lEIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJndWlkZSIsImdldENoaWxkQnlOYW1lIiwic2hvd0Jhbm5lciIsImdldFVzZXJJbmZvIiwiY3JlYXRlU2lnbkRhdGEiLCJkYXRhIiwic29ydExpc3QiLCJrZXkiLCJoYXNPd25Qcm9wZXJ0eSIsInZhbHVlIiwiaXRlbSIsInB1c2giLCJzb3J0Iiwic3RyVG9KaWFNaSIsImZvckVhY2giLCJ1c2VySW5mbyIsInNjMSIsImhleF9tZDUiLCJzaWduIiwiZ2V0VXNlckVjcG0iLCJzZW5kRGF0YSIsIkRhdGUiLCJnZXRUaW1lIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwiY29uc29sZSIsImxvZyIsIlRvb2xzIiwiZG90IiwicmVnaXN0ZXJfdGltZSIsImNoYW5uZWwiLCJzaG93SW5kZXhMYXllciIsIlBvd2VyVGltZSIsInRpbWUiLCJnZXRDb21wb25lbnQiLCJMYWJlbCIsInBvd2VyIiwic2NoZWR1bGUiLCJQb3dlclRpbWVTY2hlZHVsZSIsInN0cmluZyIsInVuc2NoZWR1bGUiLCJwb3dlcl9zZWMiLCJjaGFuZ2VTZWNvbmQiLCJzIiwibWludXRlIiwiTWF0aCIsImZsb29yIiwic2Vjb25kIiwiZ3VpZGVPdmVyIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsImhlaWdodCIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJTdGFydEdhbWUiLCJzdG9wIiwiTGV2ZWxJbmZvIiwic2hvd1NlZVZpZGVvbGF5ZXIiLCJsb2FkU2NlbmUiLCJzZWVWaWRlb0F3YXJkIiwic2hvd1NpZ25MYXllciIsIml0ZW1zIiwic2lnbkRheSIsImRheSIsImkiLCJkYXlOb2RlIiwiX2RhdGEiLCJzdGF0dXMiLCJjb21wbGV0ZUJ0biIsInNlbGVjdEJ0biIsInVuU2VsZWN0QnRuIiwic2hvd1NldExheWVyIiwibmlja05hbWUiLCJuaWNrX25hbWUiLCJ1c2VySWQiLCJ1c2VyX2lkIiwiaWNvbiIsIlNwcml0ZSIsInJlbW90ZVVybCIsImF2YXRhcl91cmwiLCJhc3NldE1hbmFnZXIiLCJsb2FkUmVtb3RlIiwiZXh0IiwiZXJyIiwidGV4dHVyZSIsInNwcml0ZUZyYW1lIiwicmVkX3BhY2siLCJnYyIsInNjb3JlIiwiYnRuQ29tIiwiQnV0dG9uIiwid2luIiwiZW5hYmxlQXV0b0dyYXlFZmZlY3QiLCJpbnRlcmFjdGFibGUiLCJzaG93VHVybnRhYmxlTGF5ZXIiLCJwb2ludCIsImFuZ2xlIiwic2VjIiwiYWJzIiwiVHVyblRhYmxlQ291bnREb3duIiwic2hvd1JlZFBvb2xMYXllciIsInBvb2xJbmZvIiwiYXJyIiwiY29tIiwiYXdhcmRfbGJsIiwiYW1vdW50IiwiaG91ciIsInNob3dTZXZlbldvcmtMYXllciIsInNlcnZlckRheSIsImxlbmd0aCIsIl9zdGF0dXMiLCJudW0iLCJ0aXRsZSIsImxheW91dCIsIl9sYXlvdXQiLCJqIiwiX2xheW91dEgiLCJidG4iLCJfaWQiLCJpZCIsImlzQ29tcGxldGUiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2ludml0ZSIsIm5lZWRfaW52aXRlIiwiY29tcGxldGUiLCJyZWQiLCJ2aWRlb1RleHQiLCJuZWVkX2FkIiwiYmFyIiwiUHJvZ3Jlc3NCYXIiLCJwcm9ncmVzcyIsImN1cnJfYWQiLCJiYXJMYmwiLCJpdGVtTGF5b3V0IiwiaXRlbTAiLCJpdGVtMSIsIml0ZW0yIiwiYXJyb3ciLCJzaG93UmVzdW1lTGF5ZXIiLCJyZXN1bWVMZXZlbCIsInNldmVuV29ya0dldE1vbmV5IiwiZSIsInRhcmdldCIsInNob3dUaXBzIiwic2hvd0dldE1vbmV5TGF5ZXIiLCJnZXRNb25leVN0YWdlIiwiTGVuZ3RoIiwidGltZXMiLCJleHRyYWN0TW9uZXkiLCJjaG9pY2VCdG4iLCJjaG9pY2VHZXRNb25leUJ0biIsIm1zZyIsIm1vbmV5IiwiTnVtYmVyIiwiY2xpY2tHZXRNb25leUJ0bjEiLCJsYXllciIsInBhcmVudCIsInRpcHMiLCJzdG9wQWxsQWN0aW9ucyIsInkiLCJsYmwiLCJvcGFjaXR5IiwiZGVsYXkiLCJzdG9wQkdNIiwiZXZlbnQiLCJwYXVzZSIsInJlc3VtZSIsInNoYWtlUGhvbmUiLCJzaG93VXNlclhpZVlpIiwic2hvd1VzZXJZaW5TaSIsIkV4aXRCYWNrQnRuIiwiY2xpY2tTaWduQnRuIiwic2hvd1BvcCIsImNhcmQiLCJjbGlja0dldE1vbmV5QnRuIiwiY2xpY2tUdXJuVGFibGVCdG4iLCJvYmoiLCJlbmRBbmdsZSIsImF3YXJkIiwiYmVnaW5UdXJuIiwic3BlZWQiLCJjaXJjbGUiLCJuYW1lIiwiaW5kZXgiLCJfYXdhcmQiLCJjcmVhdGVSYW5kbSIsIm4iLCJtIiwiYSIsInJhbmRvbSIsInBhcnNlSW50IiwidXBkYXRlIiwiZHQiLCJnb29kTmFtZSIsImdvb2ROdW1iZXIiLCJnY051bWJlciIsInRleHROdW1iZXIiLCJ0ZXh0IiwibGF5b3V0MSIsImxheW91dDIiLCJFeGl0V3hMb2dpbiIsInd4VG9rZW4iLCJ3eExvZ2luUmVzdWx0Y29kZSIsInJlbW92ZUl0ZW0iLCJ0YSIsImxvZ291dCIsInNob3dVc2VyUHJvdG9jb2wiLCJwcm90b2NvbCIsImhpZGVVc2VyUHJvdG9jb2wiLCJzaG93VXNlclByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQSxJQUFNQyxLQUFLLEdBQUdDLEVBQUUsQ0FBQ0MsSUFBSCxDQUFRO0FBQ2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FEVztBQUVsQkMsRUFBQUEsS0FBSyxFQUFFLENBRlc7QUFHbEJDLEVBQUFBLEtBQUssRUFBRSxDQUhXO0FBSWxCQyxFQUFBQSxLQUFLLEVBQUUsQ0FKVztBQUtsQkMsRUFBQUEsS0FBSyxFQUFFLENBTFc7QUFNbEJDLEVBQUFBLEtBQUssRUFBRSxDQU5XO0FBT2xCQyxFQUFBQSxLQUFLLEVBQUUsQ0FQVztBQVFsQkMsRUFBQUEsS0FBSyxFQUFFLENBUlc7QUFTbEJDLEVBQUFBLE1BQU0sRUFBRSxDQVRVO0FBVWxCQyxFQUFBQSxJQUFJLEVBQUUsQ0FWWTtBQVdsQkMsRUFBQUEsSUFBSSxFQUFFLEVBWFk7QUFZbEJDLEVBQUFBLE1BQU0sRUFBRSxFQVpVO0FBYWxCQyxFQUFBQSxLQUFLLEVBQUU7QUFiVyxDQUFSLENBQWQ7QUFlQWQsRUFBRSxDQUFDZSxLQUFILENB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QUE2QixjQUE3QixDQUFmO0FBQ0FzTixJQUFBQSxRQUFRLENBQUNwUCxNQUFULEdBQWtCLEtBQWxCO0FBQ0g7QUE5d0JJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNvbnN0IEFXQVJEID0gY2MuRW51bSh7XG4gICAgREFZXzE6IDAsXG4gICAgREFZXzI6IDEsXG4gICAgREFZXzM6IDIsXG4gICAgREFZXzQ6IDMsXG4gICAgREFZXzU6IDQsXG4gICAgREFZXzY6IDUsXG4gICAgREFZXzc6IDYsXG4gICAgUkVEXzU6IDcsXG4gICAgUkVEXzEwOiA4LFxuICAgIEJPT006IDksXG4gICAgTE9DSzogMTAsXG4gICAgU0hPVUNFOiAxMSxcbiAgICBQT1dFUjogMTJcbn0pXG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICBCR006IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXBcbiAgICAgICAgfSxcbiAgICAgICAgU2V2ZW5GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEF3YXJkRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBUZXh0RnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8v5YWz6ZetRlBT6Z2i5p2/XG4gICAgICAgIC8vIGNjLmRpcmVjdG9yLnNldERpc3BsYXlTdGF0cyhmYWxzZSk7XG4gICAgICAgIGNjLnptID0ge307XG4gICAgICAgIGNjLnptLmFkID0ge307XG4gICAgICAgIC8vIOWinuWKoOWxj+W5leinhumikVxuICAgICAgICB0aGlzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm5piv56ys5LiA5qyh6L+b5YWl5ri45oiPIOWmguaenOesrOS4gOasoei/m+WFpemCo+S5iOW8ueWHukZpcnN05by556qXXG4gICAgICAgIGxldCBmaXJzdExheWVyID0gY2MuZmluZCgnQ2FudmFzL0ZpcnN0Jyk7XG4gICAgICAgIGZpcnN0TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGxldCBfZmlyc3QgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJmaXJzdFwiKTtcbiAgICAgICAgaWYgKCFfZmlyc3QpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImZpcnN0XCIsIHRydWUpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZpcnN0TGF5ZXIuc2NhbGUgPSAwO1xuICAgICAgICAgICAgICAgIGZpcnN0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBjYy50d2VlbihmaXJzdExheWVyKS50bygwLjUsIHsgc2NhbGU6IDEgfSkuc3RhcnQoKVxuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfVxuICAgICAgICAvL+ebkeWQrOW8gOWni+a4uOaIj1xuICAgICAgICAvLyDorr7nva7nlYzpnaJcbiAgICAgICAgdGhpcy5TZXRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZXRMYXllcicpO1xuICAgICAgICAvLyDnrb7liLDnlYzpnaJcbiAgICAgICAgdGhpcy5TaWduTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2lnbkxheWVyJyk7XG4gICAgICAgIC8vIOWkp+i9rOebmOeVjOmdolxuICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyID0gY2MuZmluZCgnQ2FudmFzL1R1cm50YWJsZUxheWVyJyk7XG4gICAgICAgIC8vIOWtmOmSsee9kOeVjOmdoiDmj5DnjrDkuZ/mmK/ov5nkuKrnlYzpnaJcbiAgICAgICAgdGhpcy5HZXRNb25ldHlMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9HZXRNb25leUxheWVyJyk7XG4gICAgICAgIC8vIOS4g+aXpeS7u+WKoVxuICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyID0gY2MuZmluZChcIkNhbnZhcy9TZXZlbldvcmtMYXllclwiKTtcbiAgICAgICAgLy8g5aWW5rGg57qi5YyF55WM6Z2iXG4gICAgICAgIHRoaXMuUmVkUG9vbExheWVyID0gY2MuZmluZChcIkNhbnZhcy9SZWRQb29sTGF5ZXJcIilcbiAgICAgICAgLy8g6I635Y+W54mp5ZOB55qE5by556qXXG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyID0gY2MuZmluZChcIkNhbnZhcy9HZXRHb29kXCIpXG4gICAgICAgIC8vIOeci+inhumikeW+l+WlluWKseeVjOmdolxuICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1NlZVZpZGVvbGF5ZXJcIilcbiAgICAgICAgLy8g6YeN572u5YWz5Y2h55WM6Z2iXG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIgPSBjYy5maW5kKFwiQ2FudmFzL1Jlc3VtZUxheWVyXCIpXG4gICAgICAgIGNjLnptLnNob3dNdXNpYyA9IHRydWU7XG4gICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgIHRoaXMuY291bnREb3duVGltZSA9IDA7XG4gICAgICAgIHRoaXMuc2lnbk51bWJlciA9IDA7XG4gICAgICAgIC8vIHN0YXJ0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLlN0YXJ0R2FtZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5CR01fSUQgPSBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQkdNKTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coaHR0cC5zZW5kUmVxdWVzdCk7XG4gICAgICAgIC8v6aKE5Yqg6L295Zy65pmvMlxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgLy8g5paw5omL5byV5a+8XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgIGd1aWRlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzBcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpICE9PSBcIm92ZXJcIikge1xuICAgICAgICAgICAgaWYgKCFjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8wXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikgPT09ICc0Jykge1xuICAgICAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBndWlkZS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfNFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOaYvuekumJhbm5lcuW5v+WRilxuICAgICAgICB0aGlzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgLy8g6I635Y+W55So5oi35L+h5oGvXG4gICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICB9LFxuICAgIGNyZWF0ZVNpZ25EYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgc29ydExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9IFwic2lnblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb3J0TGlzdC5zb3J0KCk7XG4gICAgICAgIHZhciBzdHJUb0ppYU1pID0gXCJcIjtcbiAgICAgICAgc29ydExpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzdHJUb0ppYU1pICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyBkYXRhW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBzdHJUb0ppYU1pID0gXCJ0b2tlbj1cIiArIGNjLnptLnVzZXJJbmZvLnNjMSArIHN0clRvSmlhTWk7XG4gICAgICAgIC8vIHZhciBub0ppYU1pID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLmnKrliqDlr4bliY09XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHZhciBoZXhfbWQ1ID0gcmVxdWlyZShcIk1ENVwiKVxuICAgICAgICBzdHJUb0ppYU1pID0gaGV4X21kNShzdHJUb0ppYU1pKTtcbiAgICAgICAgZGF0YS5zaWduID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDlr4blkI49XCIsIHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICBnZXRVc2VyRWNwbSgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJlY3BtXCI6IDEsXG4gICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgfTtcbiAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUmNcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLliLfmlrDnlKjmiLfnmoRFY3BtXCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGNjLnptLmFkID0gcmVzLmRhdGEuYWQ7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBnZXRVc2VySW5mbygpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMudXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gdGhpcy51c2VySW5mb1xuICAgICAgICAgICAgY2MubG9nKFwiY29jb3MgdXNlciBpbmZvIFwiK3RoaXMudXNlckluZm8pO1xuICAgICAgICAgICAgLy8g5rOo5YaM5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJyZWdpc3RlclwiLHtyZWdpc3Rlcl90aW1lOm5ldyBEYXRlKCksY2hhbm5lbDpcIuW+ruS/oVwifSlcbiAgICAgICAgICAgIHRoaXMuc2hvd0luZGV4TGF5ZXIoKTtcbiAgICAgICAgICAgIC8vIOWIt+aWsOS4gOS4i+eUqOaIt+eahEVjcG1cbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckVjcG0oKTtcbiAgICAgICAgICAgIC8vIOS9k+WKm+aYr+WQpuWAkuiuoeaXtlxuICAgICAgICAgICAgdGhpcy5Qb3dlclRpbWUoKVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgUG93ZXJUaW1lKCkge1xuICAgICAgICBsZXQgdGltZSA9IGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvdGltZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpXG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA8IDUpIHtcbiAgICAgICAgICAgIC8vIOeOsOWcqOaJjeS8muWAkuiuoeaXtlxuICAgICAgICAgICAgLy8g5YWI6I635Y+WXG4gICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUsIDEpXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aW1lLnN0cmluZyA9IFwiMDA6MDBcIjtcbiAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLlBvd2VyVGltZVNjaGVkdWxlKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgUG93ZXJUaW1lU2NoZWR1bGUoKSB7XG4gICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlcl9zZWMgPD0gMCkge1xuICAgICAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuUG93ZXJUaW1lU2NoZWR1bGUpO1xuICAgICAgICAgICAgLy8g5Zyo6I635Y+W55So5oi35L+h5oGvIOaYr+WQpuS9k+WKm+a7oSDmsqHmnInmu6HmjqXnnYDlgJLorqHml7ZcbiAgICAgICAgICAgIHRoaXMuZ2V0VXNlckluZm8oKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOavj+S4gOenkuabtOaWsOWAkuiuoeaXtlxuICAgICAgICAgICAgbGV0IHRpbWUgPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L1Bvd2VyL3RpbWVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQoY2Muem0udXNlckluZm8ucG93ZXJfc2VjKTtcbiAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvLnBvd2VyX3NlYy0tXG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWGmeS4gOS4queul+azlSDlsIbnp5LmlbDkvKDov5vmnaXnlJ/miJDkuIDkuKowMDowMOW9ouW8j+eahOWtl+espuS4slxuICAgIGNoYW5nZVNlY29uZChzKSB7XG4gICAgICAgIGxldCBtaW51dGUgPSBcIjBcIiArIE1hdGguZmxvb3IocyAvIDYwKTtcbiAgICAgICAgbGV0IHNlY29uZCA9IHMgJSA2MCA+PSAxMCA/IHMgJSA2MCA6IFwiMFwiICsgcyAlIDYwXG4gICAgICAgIHJldHVybiBtaW51dGUgKyBcIjpcIiArIHNlY29uZFxuICAgIH0sXG4gICAgZ3VpZGVPdmVyKCkge1xuICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgXCJvdmVyXCIpO1xuICAgIH0sXG4gICAgLy8g6K6+572u5bGP5bmV6YCC6YWNXG4gICAgc2NyZWVuQWRhcHRlcigpIHtcbiAgICAgICAgbGV0IGNhbnZhcyA9IGNjLmZpbmQoXCJDYW52YXNcIikuZ2V0Q29tcG9uZW50KGNjLkNhbnZhcyk7XG4gICAgICAgIGxldCB3aW5TaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpO1xuXG4gICAgICAgIGlmICh3aW5TaXplLmhlaWdodCAvIHdpblNpemUud2lkdGggPD0gNzIwIC8gMTI4MCkge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IHRydWU7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSBmYWxzZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIFN0YXJ0R2FtZSgpIHtcbiAgICAgICAgLy/lhbPpl61CR01cbiAgICAgICAgLy8gY2Muem0udXNlckluZm8ud2luID0gdHJ1ZTtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUuc3RvcCh0aGlzLkJHTV9JRCk7XG4gICAgICAgIC8v5riF56m65YWz5Y2h5pWwIOS4jea4heepuuWFs+WNoVxuICAgICAgICBpZiAodGhpcy5ndWlkZSkge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgLy/ot7PovazlnLrmma9cbiAgICAgICAgLy8g5byA5aeL5ri45oiP5LmL5YmNIOWFiOiOt+WPluWFs+WNoeS/oeaBryDlpoLmnpzmsqHmnInlhbPljaHkv6Hmga/kuI3ov5vlhaXmuLjmiI9cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgIC8vIOWIpOaWrVxuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyIDw9IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmmL7npLrnnIvop4bpopHojrflvpfkvZPlipvnlYzpnaJcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZWVWaWRlb2xheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkdhbWVcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgc2hvd1NlZVZpZGVvbGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuU2VlVmlkZW9sYXllci5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZCgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvR3Jvd1Bvd2VyXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlNlZVZpZGVvbGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmdldFVzZXJJbmZvKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S6562+5Yiw55WM6Z2iXG4gICAgc2hvd1NpZ25MYXllcigpIHtcbiAgICAgICAgLy8g5YWI6I635Y+W562+5Yiw5YiX6KGoXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1NpZ25Jbkxpc3RcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICB0aGlzLnNpZ25EYXkgPSByZXMuZGF0YS5kYXk7XG4gICAgICAgICAgICB0aGlzLlNpZ25MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gNzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGRheU5vZGUgPSB0aGlzLlNpZ25MYXllci5nZXRDaGlsZEJ5TmFtZShcImRheV9cIiArIGkpO1xuICAgICAgICAgICAgICAgIGxldCBfZGF0YSA9IGl0ZW1zW2kgLSAxXTtcbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEuc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IHRoaXMuc2lnbkRheSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZGF5Tm9kZSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGRheU5vZGUpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOaYvuekuuiuvue9rueVjOmdolxuICAgIHNob3dTZXRMYXllcigpIHtcbiAgICAgICAgdGhpcy5TZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyDojrflj5bnlKjmiLfkv6Hmga9cbiAgICAgICAgLy8gaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIik7XG4gICAgICAgIGxldCBuaWNrTmFtZSA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuaWtlbmFtZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBuaWNrTmFtZS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLm5pY2tfbmFtZTtcbiAgICAgICAgbGV0IHVzZXJJZCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyaWRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdXNlcklkLnN0cmluZyA9IGDnlKjmiLdJRO+8miR7dGhpcy51c2VySW5mby51c2VyX2lkfWBcbiAgICAgICAgLy8gaWNvblxuICAgICAgICBsZXQgaWNvbiA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJtYXNrXCIpLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgdmFyIHJlbW90ZVVybCA9IHRoaXMudXNlckluZm8uYXZhdGFyX3VybDtcbiAgICAgICAgY2MuYXNzZXRNYW5hZ2VyLmxvYWRSZW1vdGUocmVtb3RlVXJsLCB7IGV4dDogJy5wbmcnIH0sIGZ1bmN0aW9uIChlcnIsIHRleHR1cmUpIHtcbiAgICAgICAgICAgIC8vIFVzZSB0ZXh0dXJlIHRvIGNyZWF0ZSBzcHJpdGUgZnJhbWVcbiAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSBuZXcgY2MuU3ByaXRlRnJhbWUodGV4dHVyZSk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5pi+56S65Li755WM6Z2iXG4gICAgc2hvd0luZGV4TGF5ZXIoKSB7XG4gICAgICAgIC8vIOe6ouWMheeahOaVsOmHj1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dldE1vbmV5L2xibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHRoaXMudXNlckluZm8ucmVkX3BhY2s7XG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvUG93ZXIvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5wb3dlcjtcbiAgICAgICAgLy8g5YWD5a6d55qE5Liq5pWwXG4gICAgICAgIGNjLmZpbmQoXCJDYW52YXMvSW5kZXgvWXVhbkJhby9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLmdjO1xuICAgICAgICBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0dvbGQvbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy51c2VySW5mby5zY29yZTtcbiAgICAgICAgLy8gY2MuZmluZChcIkNhbnZhcy9JbmRleC9Qb3dlci9sYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSB0aGlzLnVzZXJJbmZvLnBvd2VyXG4gICAgICAgIGxldCBidG5Db20gPSBjYy5maW5kKFwiQ2FudmFzL0luZGV4L0JlZ2luR2FtZVwiKS5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLndpbikge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDmmL7npLrlpKfovaznm5jnlYzpnaJcbiAgICBzaG93VHVybnRhYmxlTGF5ZXIoKSB7XG4gICAgICAgIC8vIOaYvuekuuWkp+i9rOebmOS5i+WJjeiOt+WPlueUqOaIt+S/oeaBr+aOpeWPo1xuICAgICAgICB0aGlzLnBvaW50ID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIlBvaW50ZXJcIik7XG4gICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhXG4gICAgICAgICAgICB0aGlzLlR1cm50YWJsZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gdGhpcy5UdXJudGFibGVMYXllci5nZXRDaGlsZEJ5TmFtZShcImJlZ2luQnRuXCIpLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnNlYyA8IDApIHtcbiAgICAgICAgICAgICAgICAvLyDmnInlgJLorqHml7Yg5byA5aeL5YCS6K6h5pe2IHRvZG9cbiAgICAgICAgICAgICAgICAvLyDmraTml7bovaznm5jngrnlh7vmjInpkq4g572u54Gw5LiU5LiN5Y+v54K55Ye7XG4gICAgICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgdGhpcy5jb3VudERvd25UaW1lID0gTWF0aC5hYnMoY2Muem0udXNlckluZm8uc2VjKTtcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMuVHVyblRhYmxlQ291bnREb3duLCAxKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOWkp+i9rOebmOeahOWAkuiuoeaXtlxuICAgIFR1cm5UYWJsZUNvdW50RG93bigpIHtcbiAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMuY291bnREb3duVGltZSA8IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy5UdXJuVGFibGVDb3VudERvd24pO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDmr4/kuIDnp5Lmm7TmlrDlgJLorqHml7ZcbiAgICAgICAgICAgICAgICBsZXQgdGltZSA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudExibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRoaXMuY291bnREb3duVGltZS0tO1xuICAgICAgICAgICAgICAgIHRpbWUuc3RyaW5nID0gdGhpcy5jaGFuZ2VTZWNvbmQodGhpcy5jb3VudERvd25UaW1lKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S657qi5YyF5rGg55WM6Z2iXG4gICAgc2hvd1JlZFBvb2xMYXllcigpIHtcbiAgICAgICAgLy8g6I635Y+W5aWW5rGg5L+h5oGvXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9KYWNrUG90XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUmVkUG9vbExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgcG9vbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXCJrYWlcIiwgXCJ4aW5cIiwgXCJrdWFuZ1wiLCBcImdvbmdcIl1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgNDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlID0gcG9vbEluZm9bYXJyW2ldXTtcbiAgICAgICAgICAgICAgICBsZXQgY29tID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoYXJyW2ldKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIGNvbS5zdHJpbmcgPSBcInhcIiArIHZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aWW5rGg6YeR6aKdIFxuICAgICAgICAgICAgbGV0IGF3YXJkX2xibCA9IHRoaXMuUmVkUG9vbExheWVyLmdldENoaWxkQnlOYW1lKFwiYXdhcmRfbGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBhd2FyZF9sYmwuc3RyaW5nID0gcG9vbEluZm8uYW1vdW50XG4gICAgICAgICAgICAvLyDlop7liqDlgJLorqHml7ZcbiAgICAgICAgICAgIGxldCBob3VyID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudF8xXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBob3VyLnN0cmluZyA9IHBvb2xJbmZvLmhvdXI7XG4gICAgICAgICAgICBsZXQgbWludXRlID0gdGhpcy5SZWRQb29sTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJjb3VudF8yXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBtaW51dGUuc3RyaW5nID0gcG9vbEluZm8ubWludXRlIDwgMTAgPyBcIjBcIiArIHBvb2xJbmZvLm1pbnV0ZSA6IHBvb2xJbmZvLm1pbnV0ZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOaYvuekujfml6Xku7vliqHnlYzpnaJcbiAgICBzaG93U2V2ZW5Xb3JrTGF5ZXIoKSB7XG4gICAgICAgIC8vIOeOsOiOt+WPluS4g+aXpeS7u+WKoeWIl+ihqFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTWlzc2lvbnNcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgIC8vIOmAmui/h+aVsOaNruWIneWni+WMlueVjOmdoiDnirbmgIEgMC7mnKrpooblj5YgMS7lt7Lpooblj5ZcbiAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgbGV0IHNlcnZlckRheSA9IHJlcy5kYXRhLmRheTtcbiAgICAgICAgICAgIGlmICh0aGlzLnNpZ25OdW1iZXIgPT09IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAvLyDlhYjojrflj5boh6rlt7HnmoTmlbDmja4gXG4gICAgICAgICAgICAgICAgbGV0IF9zdGF0dXMgPSBpdGVtc1tpXS5zdGF0dXM7XG4gICAgICAgICAgICAgICAgaWYgKCFfc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IGl0ZW1zW2ldLm51bTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA+IHNlcnZlckRheSkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2lnbk51bWJlciA9IHNlcnZlckRheTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIC8vIHRoaXMuc2lnbk51bWJlciA9IDc7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuc2lnbk51bWJlciA9PT0gaXRlbXNbaV0ubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKGl0ZW1zW2ldKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDorr7nva50aXRsZVxuICAgICAgICAgICAgbGV0IHRpdGxlID0gdGhpcy5TZXZlbldvcmtMYXllci5nZXRDaGlsZEJ5TmFtZShcInRpdGxlXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgdGl0bGUuc3ByaXRlRnJhbWUgPSB0aGlzLlNldmVuRnJhbWVzW2FyclswXS5udW0gLSAxXVxuICAgICAgICAgICAgLy8g5LiA5Y+q5b2T5YmN5pWw5o2uaXRlbSDpgJrov4fmlbDmja5cbiAgICAgICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgaWYgKGFyci5sZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICBsZXQgX2xheW91dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF8yXCIpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXQuYWN0aXZlID0gZmFsc2VcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAobGV0IGogPSAwOyBqIDwgYXJyLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9kYXRhID0gYXJyW2pdO1xuICAgICAgICAgICAgICAgIGxldCBfbGF5b3V0SCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxheW91dF9cIiArIChqICsgMSkpO1xuICAgICAgICAgICAgICAgIF9sYXlvdXRILmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IGJ0biA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICAgICAgYnRuLl9pZCA9IF9kYXRhLmlkO1xuICAgICAgICAgICAgICAgIGxldCBidG5Db20gPSBidG4uZ2V0Q29tcG9uZW50KGNjLkJ1dHRvbik7XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLnN0YXR1cyA9PT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBidG5Db20uaW50ZXJhY3RhYmxlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaJgOacieadoeS7tuaYr+WQpuWdh+i+vuaIkFxuICAgICAgICAgICAgICAgICAgICBsZXQgaXNDb21wbGV0ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX2RhdGEuY3Vycl9wYXNzX3N0YWdlID49IF9kYXRhLm5lZWRfcGFzc19zdGFnZSAmJiBfZGF0YS5jdXJyX3NpZ25faW4gPj0gX2RhdGEubmVlZF9zaWduX2luICYmIF9kYXRhLmN1cnJfaW52aXRlID49IF9kYXRhLm5lZWRfaW52aXRlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpc0NvbXBsZXRlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoaXNDb21wbGV0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5rKh5pyJ6L6+5oiQXG4gICAgICAgICAgICAgICAgICAgICAgICBidG4uY29tcGxldGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyDlhYjorr7nva7mlofmnKxcbiAgICAgICAgICAgICAgICAvLyDnuqLljIVcbiAgICAgICAgICAgICAgICBsZXQgcmVkID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJsYmwxXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAgICAgcmVkLnN0cmluZyA9IF9kYXRhLnZhbHVlO1xuICAgICAgICAgICAgICAgIC8vIOiuvue9ruingueci+inhumikeasoeaVsFxuICAgICAgICAgICAgICAgIGxldCB2aWRlb1RleHQgPSBfbGF5b3V0SC5nZXRDaGlsZEJ5TmFtZShcImxibDJcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICB2aWRlb1RleHQuc3RyaW5nID0gYOingueciyR7X2RhdGEubmVlZF9hZH3kuKrop4bpopFgXG4gICAgICAgICAgICAgICAgLy8g6L+b5bqm5p2hXG4gICAgICAgICAgICAgICAgbGV0IGJhciA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NCYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgICAgICBiYXIucHJvZ3Jlc3MgPSBfZGF0YS5jdXJyX2FkIC8gX2RhdGEubmVlZF9hZDtcbiAgICAgICAgICAgICAgICBsZXQgYmFyTGJsID0gX2xheW91dEguZ2V0Q2hpbGRCeU5hbWUoXCJiYXJMYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgICAgICBiYXJMYmwuc3RyaW5nID0gYCR7X2RhdGEuY3Vycl9hZH0vJHtfZGF0YS5uZWVkX2FkfWBcbiAgICAgICAgICAgICAgICAvLyDpop3lpJbmnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDpnIDopoHpgJrlhbPmlbBcbiAgICAgICAgICAgICAgICBsZXQgaXRlbUxheW91dCA9IF9sYXlvdXRILmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtMCA9IGl0ZW1MYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJpdGVtXzBcIik7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0xID0gaXRlbUxheW91dC5nZXRDaGlsZEJ5TmFtZShcIml0ZW1fMVwiKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbTIgPSBpdGVtTGF5b3V0LmdldENoaWxkQnlOYW1lKFwiaXRlbV8yXCIpO1xuICAgICAgICAgICAgICAgIGlmIChfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YCa6L+H56ysJHtfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2V95YWzYDtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFycm93ID0gaXRlbTAuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENoaWxkQnlOYW1lKFwiYXJyb3dcIik7XG4gICAgICAgICAgICAgICAgICAgIGFycm93LmFjdGl2ZSA9IF9kYXRhLmN1cnJfcGFzc19zdGFnZSA+PSBfZGF0YS5uZWVkX3Bhc3Nfc3RhZ2VcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKF9kYXRhLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGDpooblj5bnrb7liLDlpZblirFgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMS5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9zaWduX2luID49IF9kYXRhLm5lZWRfc2lnbl9pblxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGl0ZW0xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoX2RhdGEubmVlZF9pbnZpdGUpIHtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgaXRlbTIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBg6YKA6K+3JHtfZGF0YS5uZWVkX2ludml0ZX3kuKrlpb3lj4tgO1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyb3cgPSBpdGVtMi5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q2hpbGRCeU5hbWUoXCJhcnJvd1wiKTtcbiAgICAgICAgICAgICAgICAgICAgYXJyb3cuYWN0aXZlID0gX2RhdGEuY3Vycl9pbnZpdGUgPj0gX2RhdGEubmVlZF9pbnZpdGVcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBpdGVtMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvLyDmmL7npLrph43nva7lhbPljaHnlYzpnaJcbiAgICBzaG93UmVzdW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuUmVzdW1lTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIHJlc3VtZUxldmVsKCkge1xuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9SZXNldFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICB9KVxuICAgIH0sXG4gICAgc2V2ZW5Xb3JrR2V0TW9uZXkoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICghdGFyZ2V0LmNvbXBsZXRlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUaXBzKFwi5p2h5Lu25pyq6L6+5oiQXCIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5o+Q546w6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QdWxsTWlzc2lvblwiLCBcIlBPU1RcIiwgeyBpZDogdGFyZ2V0Ll9pZCB9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmj5DnjrDor7fmsYJcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWDj+acjeWKoeWZqOWPkemAgeaPkOeOsOivt+axglwiLCByZXMuZGF0YSk7XG4gICAgICAgICAgICAgICAgbGV0IGJ0bkNvbSA9IHRhcmdldC5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgICAgICAgICBidG5Db20uZW5hYmxlQXV0b0dyYXlFZmZlY3QgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB0aGlzLlNldmVuV29ya0xheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TGF5ZXJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAvLyDph43mlrDliLfmlrBcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTZXZlbldvcmtMYXllcigpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65a2Y6ZKx572Q55WM6Z2iXG4gICAgc2hvd0dldE1vbmV5TGF5ZXIoKSB7XG4gICAgICAgIC8vIOaJk+W8gOWtmOmSsee9kCDojrflj5blrZjpkrHnvZDnmoTkv6Hmga9cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU2F2aW5nUG90XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICBsZXQgZ2MgPSBkYXRhLmdjIHx8IDBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5a2Y6ZKx572Q5L+h5oGvPVwiLCBkYXRhKTtcbiAgICAgICAgICAgIC8vIOWFiOWumuS5ieW9k+WJjemCo+S4qumYtuauteaYr+WQpuWPr+S7peaPkOWPllxuICAgICAgICAgICAgdGhpcy5nZXRNb25leVN0YWdlID0gMDtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMC4zLCAwLjUsIDEsIDIsIDUsIDEwLCAyMF1cbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGF0YS5pdGVtcy5MZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmIChkYXRhLml0ZW1zW2ldLnRpbWVzKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZ2V0TW9uZXlTdGFnZSA9IGFycltpXTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5Yid5aeL5YyW5a2Y6ZKx572Q55WM6Z2i5bGe5oCnXG4gICAgICAgICAgICB0aGlzLkdldE1vbmV0eUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmmL7npLrlhYPlrp3kvZnpop1cbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJZdWFuQmFvX051bWJlclwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IGdjO1xuICAgICAgICAgICAgLy8gLy8g5YWD5a6d6Lef546w6YeR6L+b6KGM6L2s5o2iIOi9rOaNouavlOS+i+S4ujEwMDAwOjFcbiAgICAgICAgICAgIHRoaXMuZXh0cmFjdE1vbmV5ID0gZ2MgLyAxMDAwMDtcbiAgICAgICAgICAgIHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJDaGFuZ2VfTnVtYmVyXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gdGhpcy5leHRyYWN0TW9uZXkgKyBcIuWFg1wiO1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSBudWxsO1xuICAgICAgICAgICAgLy8g5byA5aeL55qE5pe25YCZZ2V0TW9uZXlCdG7nva7ngbDkuI3lj6/ngrnlh7tcbiAgICAgICAgICAgIGxldCBidG4gPSB0aGlzLkdldE1vbmV0eUxheWVyLmdldENoaWxkQnlOYW1lKFwiZ2V0TW9uZXlCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuQ29tID0gYnRuLmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgfSlcbiAgICB9LFxuICAgIC8vIOeCueWHu+mAieaLqeaPkOeOsOmHkemSseaMiemSrlxuICAgIGNob2ljZUdldE1vbmV5QnRuKGUsIG1zZykge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0biA9PT0gbnVsbCkge1xuICAgICAgICAgICAgdGhpcy5jaG9pY2VCdG4gPSB0YXJnZXQ7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0bi5tb25leSA9IE51bWJlcihtc2cpXG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bih0YXJnZXQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IHRhcmdldDtcbiAgICAgICAgICAgIHRoaXMuY2hvaWNlQnRuLm1vbmV5ID0gTnVtYmVyKG1zZylcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0QnRuKHRhcmdldCk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGJ0biA9IHRoaXMuR2V0TW9uZXR5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJnZXRNb25leUJ0blwiKTtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgYnRuQ29tLmludGVyYWN0YWJsZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDngrnlh7vmj5DnjrDmjInpkq5cbiAgICBjbGlja0dldE1vbmV5QnRuMShlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgaWYgKHRoaXMuY2hvaWNlQnRuID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlvIDlp4vmj5DnjrDph5HpkrFcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAxICDmmK/lkKblhYPlrp3mlbDph4/mmK/lkKbmu6HotrPmj5DnjrDmoaPkvY3vvIzkuI3mu6HotrPml7bmj5DnpLrvvJrlhYPlrp3mlbDph4/kuI3otrNcbiAgICAgICAgICAgIC8vIOWIpOaWreadoeS7tiAyICDmoaPkvY3mmK/lkKbkuLrmnIDlsI/moaPkvY3vvIzlpoLmnpzkuI3mmK/mj5DnpLrvvJror7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5byA5aeL5o+Q546wXCIsIHRoaXMuY2hvaWNlQnRuLm1vbmV5KTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dHJhY3RNb25leSA8IHRoaXMuY2hvaWNlQnRuLm1vbmV5KSB7XG4gICAgICAgICAgICAgICAgLy8g5LiN56ym5ZCI5p2h5Lu2MSDlvLnlh7rlhYPlrp3mlbDph4/kuI3otrPnmoR0aXBzXG4gICAgICAgICAgICAgICAgdGhpcy5zaG93VGlwcyhcIuWFg+WuneaVsOmHj+S4jei2s1wiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5jaG9pY2VCdG4ubW9uZXkgPiB0aGlzLmdldE1vbmV5U3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAvLyDkuI3nrKblkIjmnaHku7YyIFxuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoXCLor7flhYjlrozmiJDkuIrkuIDkuKrmoaPkvY3mj5DnjrBcIik7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g6YO956ym5ZCI5p2h5Lu25YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9FeGNoYW5nZVwiLCBcIlBPU1RcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIC8vIOaIkOWKn+aPkOeOsFxuXG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gdGFyZ2V0LnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImdldExheWVyXCIpO1xuICAgICAgICAgICAgICAgIGxheWVyLmFjdGl2ZSA9IHRydWU7XG5cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dUaXBzKG1zZykge1xuICAgICAgICBsZXQgdGlwcyA9IGNjLmZpbmQoXCJDYW52YXMvVGlwc1wiKVxuICAgICAgICB0aXBzLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIHRpcHMueSA9IDE0NTtcbiAgICAgICAgbGV0IGxibCA9IHRpcHMuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgbGJsLnN0cmluZyA9IG1zZztcbiAgICAgICAgY2MudHdlZW4odGlwcykudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygxLCB7IHk6IDMwMCB9KS5kZWxheSgwLjUpLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8vIOWFs+mXremfs+S5kFxuICAgIHN0b3BCR00oZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2Muem0uc2hvd011c2ljID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wYXVzZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy56bS5zaG93TXVzaWMgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RCdG4oZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnJlc3VtZSh0aGlzLkJHTV9JRCk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOWFs+mXremch+WKqFxuICAgIHNoYWtlUGhvbmUoZXZlbnQpIHtcbiAgICAgICAgaWYgKGNjLnptLnNob3dTaGFrZSkge1xuICAgICAgICAgICAgY2Muem0uc2hvd1NoYWtlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLnVuU2VsZWN0QnRuKGV2ZW50LnRhcmdldCk7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhqc2IuRGV2aWNlKTtcbiAgICAgICAgICAgIC8vIGpzYi5EZXZpY2UudmlicmF0ZSgzKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLnptLnNob3dTaGFrZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEJ0bihldmVudC50YXJnZXQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZWxlY3RCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgdW5TZWxlY3RCdG4oYnRuKSB7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNvbXBsZXRlQnRuKGJ0bikge1xuICAgICAgICBidG4uZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIikuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGJ0bi5nZXRDaGlsZEJ5TmFtZShcImNvbXBsZXRlXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICAvLyDnlKjmiLfljY/orq5cbiAgICBzaG93VXNlclhpZVlpKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueUqOaIt+WNj+iurlwiKTtcbiAgICB9LFxuICAgIC8vIOmakOengeaUv+etllxuICAgIHNob3dVc2VyWWluU2koKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi6ZqQ56eB5pS/562WXCIpO1xuICAgIH0sXG4gICAgLy8g6YCA5Ye655m76ZmGXG4gICAgRXhpdEJhY2tCdG4oZSkge1xuICAgICAgICBlLnRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmICh0aGlzLmNob2ljZUJ0bikge1xuICAgICAgICAgICAgdGhpcy51blNlbGVjdEJ0bih0aGlzLmNob2ljZUJ0bik7XG4gICAgICAgICAgICB0aGlzLmNob2ljZUJ0biA9IG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuVHVybnRhYmxlTGF5ZXIuYWN0aXZlID09PSB0cnVlKSB7XG4gICAgICAgICAgICB0aGlzLnNob3dUdXJudGFibGVMYXllcigpO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWFs+mXreW9k+WJjeS5n+i/m+WFpemmlumhtSDliLfmlrDnlYzpnaJcbiAgICAgICAgdGhpcy5zaWduTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5nZXRVc2VySW5mbygpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIumAgOWHuueZu+mZhlwiKTtcbiAgICB9LFxuICAgIC8vIOeCueWHu+etvuWIsOaMiemSrlxuICAgIGNsaWNrU2lnbkJ0bihlKSB7XG4gICAgICAgIC8vIOetvuWIsFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBhZDogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TaWduSW5cIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGxldCByZXMgPSB7ZGF0YTp7XG4gICAgICAgICAgICAvLyAgICAgXCJkYXlcIjoxLFxuICAgICAgICAgICAgLy8gICAgIFwiY2FyZFwiOjEsXG4gICAgICAgICAgICAvLyAgICAgXCJnY1wiOjEwMCwgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vnrb7liLBcIiwgcmVzKTtcbiAgICAgICAgICAgIGxldCBzaWduRGF5ID0gdGhpcy5TaWduTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJkYXlfXCIgKyB0aGlzLnNpZ25EYXkpO1xuICAgICAgICAgICAgdGhpcy5jb21wbGV0ZUJ0bihzaWduRGF5KTtcbiAgICAgICAgICAgIC8vIGRhdGHmlbDmja4gZ2PlpZblirHlhYPlrp0gY2FyZCAw5pyq6I635b6XIDHlvIAsMuW/gywz55+/XG4gICAgICAgICAgICBsZXQgYXJyID0gW1wi5LiJ5YWD57qi5YyFXCIsIFwi54K46I2veDFcIiwgXCLoja/msLR4MVwiLCBcIjUwMOWFg+WunVwiLCBcIjguODjlhYPnuqLljIVcIiwgXCLml7bpkp94MVwiLCBcIjE4Ljg45YWD57qi5YyFXCJdXG4gICAgICAgICAgICBsZXQgZGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zaG93UG9wKGFyclt0aGlzLnNpZ25EYXkgLSAxXSwgQVdBUkRbXCJEQVlfXCIgKyB0aGlzLnNpZ25EYXldLCBkYXRhLmdjLCBkYXRhLmNhcmQpXG4gICAgICAgIH0pLmNhdGNoKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoXCLku4rml6XlpZblirHlt7Lpooblj5ZcIik7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g54K55Ye75L2T546w5oyJ6ZKuXG4gICAgY2xpY2tHZXRNb25leUJ0bihlKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Ye75o+Q546w5oyJ6ZKuXCIpO1xuICAgICAgICAvLyB0aGlzLnNob3dHZXRNb25leUxheWVyKCk7XG4gICAgfSxcbiAgICAvLyDngrnlh7vovaznm5jlvIDlp4vmjInpkq5cbiAgICBjbGlja1R1cm5UYWJsZUJ0bihlKSB7XG4gICAgICAgIC8vIOavj+eci+S4gOasoeinhumikeWPr+iOt+W+l+S4gOasoeaKveWlluacuuS8mu+8jOavj+asoeaKveWlluWGt+WNtOaXtumXtOS4ujXliIbpkp8g5Ya35Y205pe26Ze06K6p5pyN5Yqh5Zmo5YGaXG4gICAgICAgIGlmICh0aGlzLmNvdW50RG93blRpbWUgPiAwKSB7XG4gICAgICAgICAgICAvLyDmir3lpZblgJLorqHml7YgPj0wIOS7o+ihqOWPr+S7peaKveWllu+8jDwwIOWPlue7neWvueWAvCDlgJLmlbDnp5LmlbBcbiAgICAgICAgICAgIC8vIHRoaXMuc2hvd1RpcHMoXCLmir3lpZblgJLorqHml7ZcIik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8g5YWI5YOP5pyN5Yqh5Zmo5Y+R6YCB6K+35rGC6I635Y+W54mp5ZOBaWRcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIC8vIDEu5L2T5YqbIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDMxLuS6lOWFg+e6ouWMhSAzMi7ljYHlhYPnuqLljIVcbiAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgIFwiMVwiOiA2MCxcbiAgICAgICAgICAgIFwiMTBcIjogMjQwLFxuICAgICAgICAgICAgXCIxMVwiOiAxODAsXG4gICAgICAgICAgICBcIjEyXCI6IDEyMCxcbiAgICAgICAgICAgIFwiMzFcIjogMzYwLFxuICAgICAgICAgICAgXCIzMlwiOiAzMDBcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5XCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+W8gOWni+i9rOebmFwiLCByZXMpO1xuICAgICAgICAgICAgLy8gdG9kbyB0ZXN0IOW9k+WJjei9rOebmGlk5pivM1xuICAgICAgICAgICAgdGhpcy5lbmRBbmdsZSA9IG9ialtcIlwiICsgcmVzLmRhdGEuYXdhcmRdO1xuICAgICAgICAgICAgLy8g5byA5aeL5peL6L2sIOWIneWni+mAn+W6puS4ulxuICAgICAgICAgICAgdGhpcy5wb2ludCA9IHRoaXMuVHVybnRhYmxlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJQb2ludGVyXCIpO1xuICAgICAgICAgICAgdGhpcy5iZWdpblR1cm4gPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSA9IDM2MDtcbiAgICAgICAgICAgIHRoaXMuc3BlZWQgPSAxODtcbiAgICAgICAgICAgIHRoaXMudmFsdWUgPSAxO1xuICAgICAgICAgICAgdGhpcy5jaXJjbGUgPSAwO1xuICAgICAgICAgICAgLy8gdGhpcy50dXJuRGF0YSA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgbGV0IGF3YXJkID0ge1xuICAgICAgICAgICAgICAgICAgICBcIjFcIjogeyBuYW1lOiBcIuS9k+WKm3gxXCIsIGluZGV4OiBBV0FSRC5QT1dFUiB9LFxuICAgICAgICAgICAgICAgICAgICBcIjEwXCI6IHsgbmFtZTogXCLngrjlvLl4MVwiLCBpbmRleDogQVdBUkQuQk9PTSB9LFxuICAgICAgICAgICAgICAgICAgICBcIjExXCI6IHsgbmFtZTogXCLml7bpkp94MVwiLCBpbmRleDogQVdBUkQuTE9DSyB9LFxuICAgICAgICAgICAgICAgICAgICBcIjEyXCI6IHsgbmFtZTogXCLnn7PljJbmiYvlhox4MVwiLCBpbmRleDogQVdBUkQuU0hPVUNFIH0sXG4gICAgICAgICAgICAgICAgICAgIFwiMzFcIjogeyBuYW1lOiBcIuS6lOWFg+e6ouWMhVwiLCBpbmRleDogQVdBUkQuUkVEXzUgfSxcbiAgICAgICAgICAgICAgICAgICAgXCIzMlwiOiB7IG5hbWU6IFwi5Y2B5YWD57qi5YyFXCIsIGluZGV4OiBBV0FSRC5SRURfMTAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgX2F3YXJkID0gYXdhcmRbZGF0YS5hd2FyZF1cbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3AoX2F3YXJkLm5hbWUsIF9hd2FyZC5pbmRleCwgZGF0YS5nYywgZGF0YS5jYXJkKVxuICAgICAgICAgICAgfSwgNC41KVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5iZWdpblR1cm4pIHtcbiAgICAgICAgICAgIC8vIOW8gOWni+aXi+i9rFxuICAgICAgICAgICAgdGhpcy5wb2ludC5hbmdsZSAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgaWYgKHRoaXMucG9pbnQuYW5nbGUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSAzNjA7XG4gICAgICAgICAgICAgICAgdGhpcy5jaXJjbGUrKztcblxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNpcmNsZSAlIDIgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5p2h5Lu26L6+5oiQIOihqOekuui9rOS6huS4pOWciFxuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkIC09IHRoaXMudmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLnZhbHVlID09PSA0LjUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMudmFsdWUgPSA0LjU7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnZhbHVlICs9IDEuNTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKHRoaXMuc3BlZWQpO1xuICAgICAgICAgICAgaWYgKHRoaXMuc3BlZWQgPD0gNSAmJiB0aGlzLnBvaW50LmFuZ2xlIDw9IHRoaXMuZW5kQW5nbGUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmJlZ2luVHVybiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMucG9pbnQuYW5nbGUgPSB0aGlzLmVuZEFuZ2xlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlop7liqDmmL7npLrlvLnlh7rojrflvpfnianlk4HnmoTlvLnnqpdcbiAgICAvLyDlpZblk4HnsbvlnosgMS7kvZPlipsgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMzEu5LqU5YWD57qi5YyFIDMyLuWNgeWFg+e6ouWMhVxuICAgIHNob3dQb3AoZ29vZE5hbWUsIGdvb2ROdW1iZXIsIGdjTnVtYmVyLCB0ZXh0TnVtYmVyKSB7XG4gICAgICAgIHRoaXMuR2V0R29vZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKTtcbiAgICAgICAgbGV0IGljb24gPSB0aGlzLkdldEdvb2RMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgIGxldCB0ZXh0ID0gdGhpcy5HZXRHb29kTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgdGV4dC5zdHJpbmcgPSBg6I635b6XJHtnb29kTmFtZX1gO1xuICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Bd2FyZEZyYW1lc1tnb29kTnVtYmVyXTtcbiAgICAgICAgbGV0IGxheW91dDEgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMVwiKTtcbiAgICAgICAgbGV0IGxheW91dDIgPSBsYXlvdXQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRfMlwiKTtcbiAgICAgICAgaWYgKGdjTnVtYmVyKSB7XG4gICAgICAgICAgICBsYXlvdXQxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbGJsID0gbGF5b3V0MS5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDojrflvpflhYPlrp0rJHtnY051bWJlcn1gXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXlvdXQxLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0ZXh0TnVtYmVyKSB7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IGxheW91dDIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuVGV4dEZyYW1lc1t0ZXh0TnVtYmVyIC0gMV07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsYXlvdXQyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDpgIDlh7rnmbvpmYZcbiAgICBFeGl0V3hMb2dpbigpIHtcbiAgICAgICAgLy8g5riF5o6JdG9rZW5cbiAgICAgICAgY2Mud3hUb2tlbiA9IG51bGw7XG4gICAgICAgIGNjLnd4TG9naW5SZXN1bHRjb2RlID0gbnVsbDtcbiAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5yZW1vdmVJdGVtKFwidG9rZW5cIik7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZShcIkxvZ2luXCIpO1xuICAgICAgICB0aGlzLnRhLmxvZ291dCgpO1xuICAgIH0sXG4gICAgLy8g5pi+56S655So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5TZXRMYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IHRydWU7XG4gICAgfSxcbiAgICBoaWRlVXNlclByb3RvY29sKCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmL7npLrpmpDnp4HmlL/nrZZcbiAgICBzaG93VXNlclByaXZhY3koKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMuU2V0TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIOiuvue9rueUqOaIt+WNj+iurlxuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJvdG9jb2wgPSB0aGlzLlNldExheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcml2YWN5XCIpO1xuICAgICAgICBwcm90b2NvbC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxufSk7XG4iXX0=
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

    cc.Tools.showJiliAd();
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
    cc.log("看视频得奖励");
    cc.Tools.showJiliAd();
    var pack = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack;
    var sendData = {
      "red_pack": parseInt((pack + this.extarRedPack) * 100),
      //红包
      "ad": cc.zm.ad
    };
    cc.zm.ad.redPack = sendData;
    this.timer && this.unschedule(this.timer);
  },
  // 看视频得奖励
  seeVideoAward: function seeVideoAward(e) {
    cc.Tools.showJiliAd();
    var target = e.target;
    cc.zm.ad.power = true;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJkaXNwbGF5TmFtZSIsInJvdGF0ZVNwZWVkIiwiSG9va1JhbmdlIiwiUHJlZmFicyIsInR5cGUiLCJQcmVmYWIiLCJJbml0VGltZSIsIkNvbGxpc2lvbkF1ZGlvIiwiQXVkaW9DbGlwIiwiQWRkU2Nyb2VBdWRpbyIsIlByb3BTcHJpdGVGcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkJvb20iLCJIb29rRnJhbWVzIiwiSGVyb0ZyYW1lcyIsIkxvdHRlcnlGcmFtc2UiLCJvbkxvYWQiLCJpbml0IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJzZXRHdWlkZSIsImluZGV4IiwiZ3VpZGVJbmRleCIsImd1aWRlIiwiZmluZCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwibmV4dEd1aWRlIiwiZSIsIm1zZyIsImd1aWRlXzEiLCJndWlkZV8yIiwiZ3VpZGVfMyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJSZXN1bWVHYW1lTGF5ZXIiLCJoaWRlTmVlZExheWVyIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGFuZGxlRGFvanUiLCJhZGp1c0Jvb21MYXlvdXQiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJIb29rIiwiSG9va0hlaWdodCIsImhlaWdodCIsIkhvb2tTdGF0ZSIsImN1clNjb3JlIiwicGF1c2VHYW1lIiwiTWluZXJTcCIsImdldENvbXBvbmVudCIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJuZWVkU2NvcmUiLCJuZWVkTGV2ZWwiLCJzdHJpbmciLCJzY29yZSIsImlkIiwiYXJyIiwicmRtIiwiY3JlYXRlUmFuZG0iLCJMb3R0ZXJ5UHJvcCIsImljb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkxvb2tWaWRlb0dldEF3YXJkIiwiVG9vbHMiLCJzaG93SmlsaUFkIiwic2VuZERhdGEiLCJhZCIsIkxvdHRlcnlBd2FyZCIsImF3YXJkIiwid2VhcG9uIiwiaSIsIm51bSIsImNsb2NrTnVtYmVyIiwiaGFuZGJvb2tOdW1iZXIiLCJjbG92ZXJOdW1iZXIiLCJsZW5ndGgiLCJjYW52YXMiLCJDYW52YXMiLCJ3aW5TaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwid2lkdGgiLCJmaXRIZWlnaHQiLCJmaXRXaWR0aCIsIkhvb2tSb1RhdGUiLCJhbmdsZSIsIk1hdGgiLCJhYnMiLCJzZXRBbmltYXRpb24iLCJjaGlsZHJlbiIsImNoaWxkcmVuQ291bnQiLCJIYW5kbGUiLCJhZGRBbmltYXRpb24iLCJTdG9wSG9va01vdmUiLCJQdWxsQmFja0hvb2siLCJTZXRTcGVlZCIsIm90aGVyIiwicHJvbW90ZSIsIkl0ZW1BdHRyIiwibm9kZSIsIm5hbWUiLCJ2aWN0b3J5IiwidGltZXIiLCJ1bnNjaGVkdWxlIiwiR2FtZU92ZXIiLCJzY2hlZHVsZSIsIkxldmVsIiwic3RhZ2UiLCJjdXJyZW50X3Njb3JlIiwibmV3SXRlbUFyciIsIm5ld0NyZWF0ZUNhbGMiLCJpbnN0YW50aWF0ZSIsIlhZIiwicmFuZG9tWFkiLCJwYXJlbnQiLCJleHRyYSIsInNldFBvc2l0aW9uIiwiYm9vbSIsImFkZENoaWxkIiwidjIiLCJ4IiwieSIsIm1vdXNlIiwic3BsaXQiLCJtb3VzZU51bWJlciIsIk51bWJlciIsInJhbmRYIiwicmFuZG9tIiwicmFuZFkiLCJwb3MiLCJtb3ZlTW91c2UiLCJEcmlsbE1vdXNlTnVtYmVyIiwiX21vdmVUaW1lIiwidGltZSIsInR3ZWVuIiwidG8iLCJzdGFydCIsInNjaGVkdWxlT25jZSIsInNjYWxlWCIsInJlcGVhdEZvcmV2ZXIiLCJkZWxheSIsImNhbGwiLCJjcmVhdGVJdGVtQXJyIiwiX2FyciIsIm9iaiIsInB1c2giLCJfcHJvcCIsInJtZCIsImdvb2QiLCJpbmZvIiwic2NvcmVBcnIiLCJfaW5mbyIsInBlcmNlbnQiLCJuZXdBcnIiLCJjcmVhdGVCeVR5cGUiLCJfc2NvcmVBcnIiLCJzb3J0IiwiYSIsImIiLCJ0b3RhbFNjb3JlIiwibWF4U2NvcmUiLCJfc2NvcmUiLCJzY29yZUNpZyIsIndpZHRoQ2lnIiwiX19zY29yZSIsIl9rZXkiLCJmbG9vciIsImtleSIsImsiLCJncm91bmRZIiwicmVjdCIsIlJlY3QiLCJpc1BlbmciLCJuIiwiYm91bmRpbmdCb3giLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJkZXN0cm95VG50IiwiVG50IiwiX3BvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbnMiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsIm0iLCJpdGVtcyIsIkFkZFByb3AiLCJBZGRTY29yZSIsIlJlbW92ZUl0ZW0iLCJsYXlvdXQiLCJpc05hTiIsInNob3dNZXN0ZXJ5IiwiYWRkQW5pbSIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwicGxheSIsImV4dHJhUmVkUGFjayIsIm1lc3RlcnkiLCJzdG9wQWxsQWN0aW9ucyIsIm9wYWNpdHkiLCJhZGQiLCJTaG93TWFzayIsIkZhaWwiLCJTdWNjZXNzIiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV2ZXJfcGFzcyIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJzb3J0TGlzdCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJzdHJUb0ppYU1pIiwidXNlckluZm8iLCJzYzEiLCJoZXhfbWQ1Iiwic2lnbiIsIlJlbG9hZCIsImxvYWRTY2VuZSIsIk5leHQiLCJwb3dlciIsIkV4aXRHYW1lIiwiQXdhcmRWaWRlbyIsInBhY2siLCJzZWVWaWRlb0F3YXJkIiwidGFyZ2V0IiwiY2xvc2VMYXllciIsInBhdXNlZCIsInMiLCJ1cGRhdGUiLCJkdCIsInVzZVByb3AiLCJzaG93U2hha2UiLCJpc05hdGl2ZSIsImpzYiIsIkRldmljZSIsInZpYnJhdGUiLCJfbm9kZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInNpemUiLCJBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFGQTtBQUdBLElBQU1BLElBQUksR0FBR0MsT0FBTyxDQUFDLE1BQUQsQ0FBcEI7O0FBQ0FDLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTO0FBQ0wsYUFBU0QsRUFBRSxDQUFDRSxTQURQO0FBR0xDLEVBQUFBLFVBQVUsRUFBRTtBQUNSO0FBQ0FDLElBQUFBLEtBQUssRUFBRTtBQUNILGlCQUFTLENBRE47QUFFSEMsTUFBQUEsV0FBVyxFQUFFO0FBRlYsS0FGQztBQU1SO0FBQ0FDLElBQUFBLFdBQVcsRUFBRTtBQUNULGlCQUFTLENBREE7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UWdJLElBQUksQ0FBQ2pQLE1BQUwsR0FBYyxDQUFwRCxDQUFqQjtBQUNBNkcsVUFBQUEsSUFBSSxDQUFDOUksTUFBTCxHQUFjLElBQWQ7QUFDQThJLFVBQUFBLElBQUksQ0FBQ3hHLFlBQUwsQ0FBa0JyRSxFQUFFLENBQUNrVCxTQUFyQixFQUFnQ3ZELElBQWhDLENBQXFDLE1BQXJDOztBQUVBb0QsVUFBQUEsS0FBSyxDQUFDaEUsT0FBTjs7QUFDQWdFLFVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBSzNTLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBSTBDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FqRCxVQUFBQSxJQUFJLENBQUM2QyxXQUFMLENBQWlCLG9CQUFqQixFQUF1QyxNQUF2QyxFQUErQ0csT0FBL0M7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBcENSO0FBc0NIO0FBMXJDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+W8leWFpSDlvpfliIbnrYnphY3nva4g5aSq6ZW/IOaJgOS7peaNouS4quaWh+S7tuWGmVxuaW1wb3J0IEl0ZW1BdHRyIGZyb20gJy4vQ29uZmlnJztcbmltcG9ydCBMZXZlbCBmcm9tICcuL0xldmVsJztcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q5peL6L2s6YCf5bqmXG4gICAgICAgIHJvdGF0ZVNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDml4vovazpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6IyD5Zu0XG4gICAgICAgIEhvb2tSYW5nZToge1xuICAgICAgICAgICAgZGVmYXVsdDogNzAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOinkuW6puiMg+WbtCdcbiAgICAgICAgfSxcbiAgICAgICAgLy/miYDmnInnmoRwcmVmYWIg6L+Z56eN5pa55byP5piv5ZCM5q2l55qEIOS7o+eggeavlOi+g+WlveWGmSDlsLHmmK/pmr7mi5ZcbiAgICAgICAgUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgSW5pdFRpbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOinpueisOWIsOeJqeWTgeeahOWjsOmfs1xuICAgICAgICBDb2xsaXNpb25BdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy/liqDliIbnmoTlo7Dpn7NcbiAgICAgICAgQWRkU2Nyb2VBdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6YGT5YW355qE57q555CGXG4gICAgICAgIFByb3BTcHJpdGVGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEJvb206IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIEhvb2tGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEhlcm9GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIExvdHRlcnlGcmFtc2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3lp4vljJZcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIC8v5Yqg6L296aaW6aG16LWE5rqQXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIHNldEd1aWRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmd1aWRlSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8PSAzKSB7XG4gICAgICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKVxuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV9cIiArIGluZGV4KS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5leHRHdWlkZShlLCBtc2cpIHtcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJyk7XG4gICAgICAgIGxldCBndWlkZV8xID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8xXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMiA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKTtcbiAgICAgICAgbGV0IGd1aWRlXzMgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIik7XG4gICAgICAgIGd1aWRlXzEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChtc2cgPT09IFwiMlwiKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAyKTtcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDMpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8zXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjRcIikge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDQpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGVOZWVkTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOW8gOWni+a4uOaIjyDpgqPkuYjliLfmlrDkuIDkuIvpgZPlhbfmlbDmja5cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICAvL+iOt+WPlumSqeWtkFxuICAgICAgICB0aGlzLkhvb2sgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyL0hvb2snKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDliJ3lp4vplb/luqZcbiAgICAgICAgdGhpcy5Ib29rSGVpZ2h0ID0gdGhpcy5Ib29rLmhlaWdodDtcbiAgICAgICAgLy/mlL7kuIvpkqnlrZDlvIDlhbMgMCDlgZzmraIgMSDlj5HlsIQgMuaLieWbnlxuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICAvLyDliJ3lp4vljJbnn7/lt6XnmoTnsr7ngbXluKdcbiAgICAgICAgdGhpcy5NaW5lclNwID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgIHRoaXMuc2VlVmlkZW9MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZWVWaWRlb2xheWVyJylcbiAgICAgICAgLy/lvpfliIbntK/orqFcbiAgICAgICAgdGhpcy5TY29yZSA9IGNjLmZpbmQoJ0NhbnZhcy9TY29yZUFuZFRhcmdldC9TY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v6YCa5YWz55uu5qCH5YiG5pWwXG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvVGFyZ2V0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lgJLorqHml7ZcbiAgICAgICAgdGhpcy5UaW1lID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL1RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+WFs+WNoeaVsFxuICAgICAgICB0aGlzLkNoZWNrcG9pbnQgPSBjYy5maW5kKCdDYW52YXMvQ2hlY2twb2ludEFuZFRpbWUvQ2hlY2twb2ludCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuTmVlZExheWVyID0gY2MuZmluZCgnQ2FudmFzL05lZWRMYXllcicpO1xuICAgICAgICB0aGlzLkJhY2tMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrTGF5ZXInKTtcbiAgICAgICAgdGhpcy5Qcm9wTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvUHJvcCcpO1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllciA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwiTG90dGVyeUxheWVyXCIpO1xuICAgICAgICAvL+eJqeWTgeWMuuWfn1xuICAgICAgICB0aGlzLml0ZW1BcmVhID0gY2MuZmluZCgnQ2FudmFzL0l0ZW1BcmVhJyk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKeXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy/ph43nu4RwcmVmYWLmlbDnu4Qg5pa55L6/5p+l6K+iXG4gICAgICAgIHRoaXMuUHJlZmFiID0ge307XG4gICAgICAgIHRoaXMuUHJlZmFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5QcmVmYWJbaXRlbS5fbmFtZV0gPSBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WPkeWwhOmSqeWtkOaMiemSrlxuICAgICAgICBsZXQgZW1pdEhvb2sgPSBjYy5maW5kKCdDYW52YXMvZW1pdEhvb2tCdG4nKTtcbiAgICAgICAgLy/lvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnQ2FudmFzL01hc2snKTtcbiAgICAgICAgLy/muLjmiI/nu5PmnZ/mjInpkq4g5YyF5ous6L+H5YWzL+e7k+adn+a4uOaIj1xuICAgICAgICB0aGlzLk1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLkNsb3NlTWFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZW1pdEhvb2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVtaXRIb29rQnRuLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAtMTtcbiAgICAgICAgdGhpcy5saXF1aWROdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICB0aGlzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgdGhpcy5SZXNldEluZm8oKTtcbiAgICAgICAgdGhpcy5TdGFydFRpbWUoKTtcbiAgICAgICAgdGhpcy5TZXRMZXZlbCgpO1xuICAgICAgICB0aGlzLkNyZWF0ZVRhcmdldFNjb3JlKCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlSXRlbSgpO1xuICAgICAgICB0aGlzLnJlZFBhY2sgPSB0aGlzLmxldmVsSW5mby5yZWRQYWNrO1xuICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayA9IDA7XG4gICAgICAgIC8vIOaYr+WQpuaWsOaJi+W8leWvvFxuICAgICAgICB0aGlzLmd1aWRlSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSk7XG4gICAgICAgIGlmICh0aGlzLmd1aWRlSW5kZXggPCA0ICYmIHRoaXMuZ3VpZGVJbmRleCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOacieaWsOaJi+W8leWvvOaaguWBnOa4uOaIj1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3VpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5OZWVkTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBuZWVkU2NvcmUgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGV0IG5lZWRMZXZlbCA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwibmVlZExldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBuZWVkU2NvcmUuc3RyaW5nID0gYOimgeaxguWIhuaVsO+8miR7dGhpcy5sZXZlbEluZm8uc2NvcmV9YFxuICAgICAgICAgICAgbmVlZExldmVsLnN0cmluZyA9IGDnrKwke3RoaXMubGV2ZWxJbmZvLmlkfeWFs2A7XG4gICAgICAgICAgICAvLyDmir3lpZbpgInlhbPljaFcbiAgICAgICAgICAgIC8vIOWJjeerr+maj+acuuS4gOS4qumBk+WFt1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMTAsIDExLCAxM107XG4gICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgIGxldCBwcm9wID0gYXJyW3JkbV07XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlQcm9wID0gcHJvcDtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5Mb3R0ZXJ5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv54K45by5XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsyXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMF1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIExvb2tWaWRlb0dldEF3YXJkKCkge1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwiYWRcIjogY2Muem0uYWQsXG4gICAgICAgICAgICBcIndlYXBvblwiOiB0aGlzLkxvdHRlcnlQcm9wXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeTJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi54K55Ye75byA5aeL6L2s55uYXCIsIHJlcyk7XG4gICAgICAgICAgICAvLyDngrjlvLnvvJoxMCAxMeaXtumSnyAxM+iNr+awtFxuICAgICAgICAgICAgdGhpcy5Mb3R0ZXJ5QXdhcmQgPSByZXMuZGF0YS5hd2FyZDtcbiAgICAgICAgICAgIHRoaXMuaGlkZUxvdHRlcnlMYXllcigpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIGhhbmRsZURhb2p1KCkge1xuICAgICAgICAvLyDpgZPlhbfnmoTmlbDph4/kuLpcbiAgICAgICAgbGV0IHdlYXBvbiA9IGNjLnptLkxldmVsSW5mby53ZWFwb247XG4gICAgICAgIC8vIHByb3DnsbvlnosgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMTMu6I2v5rC0IDE0LuS4ieWPtuiNiVxuICAgICAgICAvLyDlpITnkIbpgZPlhbcg6YGT5YW35YiG5Yir5Li6IOeCuOW8uSBib29tTnVtYmVyIOaXtumSnyBjbG9ja051bWJlciDnn7PljJbmiYvlhowgaGFuZGJvb2tOdW1iZXIg6I2v5rC0IGxpcXVpZE51bWJlciDkuInlj7bojYkgY2xvdmVyTnVtYmVyXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCIxXCI6IFwi5L2T5YqbXCIsXG4gICAgICAgICAgICBcIjEwXCI6IFwi54K45by5XCIsXG4gICAgICAgICAgICBcIjExXCI6IFwi5pe26ZKfXCIsXG4gICAgICAgICAgICBcIjEyXCI6IFwi55+z5YyW5omL5YaMXCIsXG4gICAgICAgICAgICBcIjEzXCI6IFwi6I2v5rC0XCIsXG4gICAgICAgICAgICBcIjE0XCI6IFwi5LiJ5Y+26I2JXCJcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXBvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlciA9IHdlYXBvbltpXS5udW0gLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/lhbbku5bnianlk4HpgqPkuYjnm7TmjqXkvb/nlKhcbiAgICAgICAgICAgICAgICBpZiAod2VhcG9uW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiB3ZWFwb25baV0ucHJvcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjmiJDlip8tXCIsIGRhdGFbd2VhcG9uW2ldLnByb3BdKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRib29rTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdmVyTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDw9IDcyMCAvIDEyODApIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZKp5a2Q5peL6L2sXG4gICAgICovXG4gICAgSG9va1JvVGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgLy/pmZDliLbojIPlm7Qg5Y+q6IO95ZyoIDcwIOS4jiAtNzAg5LmL6Ze0XG4gICAgICAgIGlmICh0aGlzLkhvb2suYW5nbGUgPj0gNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAtdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkhvb2suYW5nbGUgPD0gLTcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gTWF0aC5hYnModGhpcy5yb3RhdGVTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5Ib29rLmFuZ2xlICs9IHRoaXMucm90YXRlU3BlZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZDmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBlbWl0SG9va0J0bigpIHtcbiAgICAgICAgLy9UT0RPIOWBnOatoumSqeWtkOaXi+i9rFxuICAgICAgICAvL+aJk+W8gC/lhbPpl60g6ZKp5a2Q5byA5YWzIOayoeacieaLieWbnuS5i+WJjSDlvZPliY1wb3NpdGlvbiDvvIE9IOWIneWni+S9jee9ruaXtiDkuI3lhYHorrjmk43kvZxcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG4gICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwiZmFuZ1wiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2QXG4gICAgICovXG4gICAgZW1pdEhvb2soKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5Ib29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlM1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLmFkZEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcEhvb2tNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmi4nlm57pkqnlrZBcbiAgICAgKi9cbiAgICBQdWxsQmFja0hvb2soKSB7XG4gICAgICAgIC8v5pKt5pS+5ouJ5Zue6ZKp5a2Q5Yqo55S7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwibGFcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLoja/msLTmlYjmnpzpgJ/luqblop7liqAxMCVcIilcbiAgICAgICAgICAgIHByb21vdGUgPSAxLjFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwZWVkID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXS5zcGVlZCAqIHByb21vdGUgfHwgMTA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaJgOacieWIhuaVsOS/oeaBr1xuICAgICAqL1xuICAgIFJlc2V0SW5mbygpIHtcbiAgICAgICAgLy90aGlzLnZpY3Rvcnkg5ri45oiP6IOc5Yip5aSx6LSl54q25oCBIDAgPSDmuLjmiI/kuK0gMSA9IOaIkOWKnyAyID0g5aSx6LSlXG4gICAgICAgIHRoaXMudmljdG9yeSA9XG4gICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuQ2hlY2twb2ludC5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjlgJLorqHml7ZcbiAgICAgKi9cbiAgICBTdGFydFRpbWUoKSB7XG4gICAgICAgIC8vIOaYr+WQpuWtmOWcqOaXtumSnyDlrZjlnKjml7bpkp8gdGhpcy5Jbml0VGltZSsxMOenklxuICAgICAgICBpZiAodGhpcy5jbG9ja051bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjml7bpkp/miJDlip8rMTBzXCIpXG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMTVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnoa7lrprov4flhbPnm67moIfliIbmlbBcbiAgICAgKiDnm67moIfliIbmlbDmoLnmja7lhbPljaHlhbPmlbDnoa7lrpog6Zq+5bqm57Sv5Yqg546H5Li6XG4gICAgICogIOWfuuaVsCAxMDAwXG4gICAgICogIOavj+WFs+mAkuWinjUwMOWIhlxuICAgICAqIFxuICAgICAqIOacgOWkpyA1MDAw5YiGXG4gICAgICovXG4gICAgQ3JlYXRlVGFyZ2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nID0gdGhpcy5sZXZlbEluZm8uc2NvcmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOeJqeWTgSDpnIDopoHmoLnmja7nm67moIfliIbmnaXnlJ/miJAg55Sf5oiQ55qE5omA5pyJ54mp5ZOB5oC75YiG5b+F6aG75q+U55uu5qCH6L+H5YWz5YiG5pWw6auYMjAlXG4gICAgICog55Sf5oiQ55qE54mp5ZOB5pWw6YeP5ZyoIDEwLTMwXG4gICAgICovXG4gICAgQ3JlYXRlSXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1BcnIgPSB0aGlzLm5ld0NyZWF0ZUNhbGMoKTtcbiAgICAgICAgLy8g5YaZ5LiA5Liq566X5rOVIOagueaNruWIhuaVsOWFiOWwhmFyciDmjpLluo8g5oC75YiG5LiN6IO96LaF6L+H5pyA5aSn5YiG5pWwIOWmguaenOi2heS6hiDliJnku47lsI/lvIDlp4vlh4/lsJEg55u05Yiw5YiG5pWw5bCP5LqO5pyA5aSn5YiG5pWwXG4gICAgICAgIC8v55Sf5oiQ55u45bqU55qEUHJmYWJcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtQXJyPVwiLCBuZXdJdGVtQXJyKTtcbiAgICAgICAgbmV3SXRlbUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltpdGVtLm5hbWVdKTtcbiAgICAgICAgICAgIGxldCBYWSA9IHRoaXMucmFuZG9tWFkobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICBpZiAoaXRlbS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvcCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXh0cmEgPSBpdGVtLnByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKFhZKTtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiVG50XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQm9vbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgIGJvb20ubmFtZSA9IFwidG50Qm9vbVwiO1xuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIoWFkueCwgWFkueSAtIDIxOCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuYm9vbSA9IGJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b2Rv5YWI5LiN5Yib5bu66ICB6byg6K+V6K+VXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5tb3VzZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsSW5mby5tb3VzZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyDmma7pgJrogIHpvKBcbiAgICAgICAgICAgIGxldCBtb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzBdKTtcbiAgICAgICAgICAgIGlmIChtb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdXNlTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltcIk1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNTA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTW91c2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IERyaWxsTW91c2VOdW1iZXIgPSBOdW1iZXIoZGF0YVsxXSk7XG4gICAgICAgICAgICBpZiAoRHJpbGxNb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERyaWxsTW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiRHJpbGxNb3VzZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeUn+aIkOeahOeJqeWTgeaYr+WPr+WKqOeahFxuICAgIG1vdmVNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyDlhYjlsIbogIHpvKDnp7vliqjliLDmnIDlj7Povrkg5pe26Ze05Li6NjAwL+i3neemuyo1XG4gICAgICAgIGxldCBfbW92ZVRpbWUgPSAxMFxuICAgICAgICBsZXQgdGltZSA9IChwYXJzZUludCgzMDAgLSBtb3VzZS54KSAvIDYwMCkgKiBfbW92ZVRpbWVcbiAgICAgICAgY2MudHdlZW4obW91c2UpLnRvKHRpbWUsIHsgeDogMzAwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8g546w5Zyo5byA5aeLIOiAgem8oOWBmuinhOW+i+i/kOWKqOWFiOWwhuiAgem8oOWPjei9rFxuICAgICAgICAgICAgaWYgKG1vdXNlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAtMTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb3VzZSkucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKF9tb3ZlVGltZSwgeyB4OiAtMzAwIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIH0pLnRvKF9tb3ZlVGltZSwgeyB4OiAzMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIH0pKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUgKyAxKVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOV44CC44CC5LiA5Y+q5pyJ5LiA5Liq5oC75pWw6YePIOWPr+S7peW+l+WIsCDlkITkuKrnianlk4HnmoTmlbDph49cbiAgICBuZXdDcmVhdGVDYWxjKCkge1xuICAgICAgICBsZXQgY3JlYXRlSXRlbUFyciA9IFtdO1xuICAgICAgICAvLyDlhYjnlJ/miJDnuqLljIXot5/npZ7np5jnianlk4FcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmEgPSB0aGlzLmxldmVsSW5mby5leHRyYS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyAw5piv57qi5YyFIOWIm+W7uuS4gOS4que6ouWMhVxuICAgICAgICAgICAgaWYgKGV4dHJhWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8g5byA5Ye655qE57qi5YyF6YeR6aKdXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dHJhWzFdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgSDlhYjpmo/mnLrlh7rnianlk4Eg5piv5ZCm5pyJ5LiJ5Y+26I2JIOWmguaenOaciSDoja/msLTnmoTpmo/mnLrmpoLnjoflop7liqBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbG92ZXJOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXCLngrjlvLlcIiwgXCIz5YWD57qi5YyFXCIsIFwiNeWFg+e6ouWMhVwiLCBcIuiNr+awtFwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJtZCA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9wID0gYXJyW3JtZF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlzdGVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IF9wcm9wLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uYm9vbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsSW5mby5ib29tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRudFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7np6/liIYg55Sf5oiQ5a+55bqU5Liq5pWwXG4gICAgICAgIGlmICghdGhpcy5sZXZlbEluZm8uZ29vZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmxldmVsSW5mby5nb29kLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgLy8gbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbEluZm8ubWF4U2NvcmU7XG4gICAgICAgIGxldCBzY29yZUFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfaW5mbyA9IGluZm9baV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBfaW5mb1swXTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKF9pbmZvWzFdKVxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuY3JlYXRlQnlUeXBlKHR5cGUsIHBlcmNlbnQpO1xuICAgICAgICAgICAgc2NvcmVBcnIgPSBbLi4uc2NvcmVBcnIsIC4uLm5ld0Fycl1cbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbnp6/liIbmlbDnu4TmjpLluo9cbiAgICAgICAgbGV0IF9zY29yZUFyciA9IHNjb3JlQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPCBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiuoeeul+aJgOaciWFycuS4reeahOWIhuaVsOaYr+S4jeaYr+i2hei/hyDmnKzlhbPnmoTmnIDlpKflgLwg5aaC5p6c6LaF6L+H6YKj5LmI5LuO5ZCO5b6A5YmN6K6h566X5YC8XG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Njb3JlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2NvcmUgKz0gX3Njb3JlQXJyW2ldLnNjb3JlO1xuICAgICAgICAgICAgaWYgKF9zY29yZSA8PSB0b3RhbFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goX3Njb3JlQXJyW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLm5ld0Fycl07XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY3JlYXRlSXRlbUFycuacquaMieeFp+WuveW6puaOkuW6jz1cIiwgY3JlYXRlSXRlbUFycik7XG4gICAgICAgIC8vIOWwhmNyZWF0ZUl0ZW1BcnLmjpLluo/mjInnhaflrr3luqZcbiAgICAgICAgY3JlYXRlSXRlbUFyciA9IGNyZWF0ZUl0ZW1BcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA8IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVJdGVtQXJy54Wn5a695bqm5o6S5bqPPVwiLCBjcmVhdGVJdGVtQXJyKTtcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgfSxcbiAgICAvLyDmoLnmja7np6/liIbot5/nsbvlnovnlJ/miJDmlbDph49uYW1lXG4gICAgY3JlYXRlQnlUeXBlKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/nn7PlnZcg5piv5ZCm5pyJ5YyW55+z5omL5YaMIOWmguaenOaciSDnn7PlpLTnmoTku7flgLzmj5DljYcyMCUgdG9kb1xuICAgICAgICAgICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kYm9va051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuefs+WMluaJi+WGjOS9v+eUqOaIkOWKn+efs+WktOeahOS7t+WAvOaPkOWNhzIwJVwiKVxuICAgICAgICAgICAgICAgICAgICBwcm9tb3RlID0gMS4yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiU3RvbmUtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gWzIwLCAzMCwgNDBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhDaWcgPSBbNDIsIDg5LCAxNTRdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dICogcHJvbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhDaWdbcmRtXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/pu4Tph5FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkdvbGQtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruW9k+WJjeenr+WIhueahOacgOWkp+WAvOWKqOaAgeeUn+aIkOaVsOe7hFxuICAgICAgICAgICAgICAgICAgICBsZXQgX19zY29yZSA9IHNjb3JlIC0gX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19zY29yZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gWzUwLCAxMDAsIDE1MCwgMjAwLCAzMDBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9rZXkgPSBNYXRoLmZsb29yKF9fc2NvcmUgLyA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBfa2V5ID4gNCA/IDQgOiBfa2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcucHVzaCg1MCAqICgxICsgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNTBcIjogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEwMFwiOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTUwXCI6IDgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyMDBcIjogMTA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDBcIjogMTQ2XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgc2NvcmVDaWcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSBzY29yZUNpZ1tyZG1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZUNpZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSArIHJkbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogc2NvcmVDaWdbcmRtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhbXCJcIiArIHNjb3JlQ2lnW3JkbV1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+mSu+efs1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiRHJpbGxcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyOVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/npZ7np5jnianlk4FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgLSBfc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSAtIF9zY29yZSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZyA9IHRoaXMuY3JlYXRlUmFuZG0oMzAsIHNjb3JlIC0gX3Njb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiBzY29yZUNpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpmo/mnLrlnZDmoIcg5Yik5pat6L+Z5Liq5Z2Q5qCH5Lqn55Sf55qEcmVjdOaYr+WQpui3n+WFtuS7lueahOaJgOacieeahOeJqeWTgeeahHJlY3Tnm7jmjqXop6Yg5aaC5p6c5rKh5pyJ6L+U5Zue5Z2Q5qCHIOWmguaenOaOpeinpumHjeaWsOmaj+aculxuICAgICAqL1xuICAgIHJhbmRvbVhZKGl0ZW0pIHtcbiAgICAgICAgLy94ID0g5bGP5bmV5a695bqmIC8gMiAqIOmaj+acuuaVsFxuICAgICAgICAvL3kgPSDlnLDlubPpnaLkvY3nva4gKyDpmo/mnLrmlbBjYy5yYW5kb20wVG8xKCkgK+mrmOW6puiMg+WbtO+8iOWPr+S7peivtOaYr1nnmoTmnIDlsI/ngrnvvIlcbiAgICAgICAgLy/lnLDlubPpnaLkvY3nva4gPSDlnLDpnaJ5ICsg5Zyw6Z2iIOmrmOW6piAvIDJcbiAgICAgICAgLy8gLSAzMOaYr+WboOS4uueJqeWTgemUmueCueWcqOS4remXtOS9jee9riDorr7nva7lnZDmoIfliLDojIPlm7TlrprngrnnmoTml7blgJkg5Lya5pyJ6YOo5YiG6LaF5Ye6XG4gICAgICAgIGxldCBncm91bmRZID0gdGhpcy5pdGVtQXJlYS55ICsgdGhpcy5pdGVtQXJlYS5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIC8vIOmaj+acuueUn+aIkOeahOS4gOS4quWdkOagh1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChwb3MueCAtIGl0ZW0ud2lkdGggLyAyLCBwb3MueSAtIGl0ZW0uaGVpZ2h0IC8gMiwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IGlzUGVuZyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG4uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guaW50ZXJzZWN0cyhyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBpc1BlbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQZW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tWFkoaXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDngrjlvLnojIPlm7TnmoTnianlk4Hov5vooYzplIDmr4FcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IFRudFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRlc3Ryb3lUbnQoVG50KSB7XG4gICAgICAgIC8vIOmBjeWOhnRoaXMuaXRlbUFyZWHlhoXmiYDmnInnmoToioLngrkg5b2T6IqC54K555qE5Lit5b+D6IqC54K55Zyo54K45by55YaFIOWImemUgOavgVxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG4gIT09IFRudCkge1xuICAgICAgICAgICAgICAgIC8vIOmAmui/h1RudOeahOS4reW/g+S9jee9riDliJvlu7rkuIDkuKpyZWN05Yy65Z+fXG4gICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBUbnQuZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChfcG9zLnggLSAxMjUsIF9wb3MueSAtIDEyNSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBuLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeUn+aIkG4tbemaj+acuuaVsFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWFs+mXree7s+WtkOeKtuaAgVxuICAgICAqL1xuICAgIFN0b3BIb29rTW92ZSgpIHtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ID0gdGhpcy5Ib29rSGVpZ2h0O1xuICAgICAgICAvL+mHjee9ruWPkeWwhOmSqeWtkOmAn+W6plxuICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgdGhpcy5Ib29rLmdldENoaWxkQnlOYW1lKFwiaG9va18xXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Ib29rRnJhbWVzWzBdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlpITnkIbmi4nlm57nmoTnianlk4HvvIzliKDpmaTnianlk4Hku6Xlj4rmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBIYW5kbGUoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5BZGRQcm9wKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5BZGRTY29yZShpdGVtcyk7XG4gICAgICAgIHRoaXMuUmVtb3ZlSXRlbShpdGVtcyk7XG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui/mOacieeJqeWTgeWcqOWcsOWbvuS4iiDlpoLmnpzmsqHmnInpgqPkuYjnu5Pnrpcg57uT5p2fXG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5Zyw5Zu+54mp5ZOB5raI5aSxIOe7k+eul1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIilcbiAgICAgICAgICAgIGJvb20ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgYm9vbS5kZXN0cm95KCk7XG4gICAgICAgICAgICBib29tID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6LCD5pW0546w5pyJ55qE54K45by555qE546w5a6e5pWI5p6cXG4gICAgYWRqdXNCb29tTGF5b3V0KCkge1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcbiAgICAgICAgbGF5b3V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvb21OdW1iZXIgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJvb20gPSBsYXlvdXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaSA8PSB0aGlzLmJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfpgZPlhbdcbiAgICAgKi9cbiAgICBBZGRQcm9wKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiTXlzdGVyeVwiKSB7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGl0ZW1zWzBdLmV4dHJhO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM+WFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjXlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLoja/msLRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+enr+WIhlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBwcm9wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtc1swXS5uYW1lID09PSBcIlJlZFwiKSB7XG4gICAgICAgICAgICAvLyDpmo/mnLozLTjlnZfpkrEgMuS9jeacieaViOWwj+aVsFxuICAgICAgICAgICAgbGV0IGV4dHJhUmVkUGFjayA9IChNYXRoLmZsb29yKHRoaXMuY3JlYXRlUmFuZG0oMzAwLCA4MDApKSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSBleHRyYVJlZFBhY2s7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJyZWRcIiwgZXh0cmFSZWRQYWNrKTtcbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNZXN0ZXJ5KHR5cGUpIHtcbiAgICAgICAgLy8gW1wi54K45by5XCIsXCIz5YWD57qi5YyFXCIsXCI15YWD57qi5YyFXCIsXCLoja/msLRcIl1cbiAgICAgICAgbGV0IG1lc3RlcnkgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTWVzdGVyeVwiKTtcbiAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBtZXN0ZXJ5LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Qcm9wU3ByaXRlRnJhbWVzW3R5cGVdO1xuICAgICAgICBtZXN0ZXJ5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKG1lc3RlcnkpLnRvKDIsIHsgeTogbWVzdGVyeS55ICsgMTAwLCBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgbWVzdGVyeS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgbWVzdGVyeS55IC09IDEwMDtcbiAgICAgICAgICAgIG1lc3RlcnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTnianlk4FcbiAgICAgKi9cbiAgICBSZW1vdmVJdGVtKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBBZGRTY29yZShpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmICghaXRlbXNbMF0uc2NvcmUpIHJldHVybjtcbiAgICAgICAgLy8gbGV0IHNjb3JlQ29uID0gSXRlbUF0dHJbaXRlbXNbMF0ubmFtZV0gfHwge307XG4gICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICB0aGlzLmN1clNjb3JlICs9IChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWinuWKoOS4gOS4quWinuWKoOenr+WIhumjmOWQkS0tLT5TY29yZeS9jee9rueCueWKqOeUu1xuICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBpdGVtc1swXS5zY29yZSlcbiAgICB9LFxuICAgIC8vIOWBmuS4gOS4quWinuWKoOenr+WIhueCueWKqOeUu1xuICAgIGFkZEFuaW0odHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFkZCA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09PSBcInNjb3JlXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRTY29yZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlZFwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkUmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFkZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgc2NvcmU7XG4gICAgICAgIGFkZC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBhZGQub3BhY2l0eSA9IDA7XG4gICAgICAgIGFkZC55ID0gLTEzMjtcbiAgICAgICAgY2MudHdlZW4oYWRkKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLnRvKDEsIHsgeTogNDIgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pi+56S6TWFzayB2aWN0b3J5PTAgdmljdG9yeT0x6IOc5YipIHZpY3Rvcnk9MuWksei0pVxuICAgICAqL1xuICAgIFNob3dNYXNrKCkge1xuICAgICAgICAvL+aYvuekuuW8ueWHuuahhlxuICAgICAgICB0aGlzLk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5QYXVzZUdhbWVMYXllcigpXG4gICAgICAgIGxldCBGYWlsID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiRmFpbFwiKTtcbiAgICAgICAgbGV0IFN1Y2Nlc3MgPSB0aGlzLk1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJTdWNjZXNzXCIpO1xuICAgICAgICBGYWlsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBTdWNjZXNzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52aWN0b3J5ID09PSAxKSB7XG4gICAgICAgICAgICBTdWNjZXNzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL01pc3Npb25zXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4g+aXpeS7u+WKoeWIl+ihqD1cIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbXNbaV0uc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnKrpooblj5ZcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGJsLnN0cmluZyA9IGDmr4/ml6Xku7vliqHovr7miJDmnaHku7bvvIznnIvlub/lkYoke2l0ZW0uY3Vycl9hZH0vKyR7aXRlbS5uZWVkX2FkfSzpnIDopoHpgJrlhbMke2l0ZW0uY3Vycl9wYXNzX3N0YWdlfS8rJHtpdGVtLm5lZWRfcGFzc19zdGFnZX1gXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5ZCE56eN5p2h5Lu2XG4gICAgICAgICAgICAgICAgLy8g5YWI5Yik5pat55So5oi35YWz5Y2h5p2h5Lu2XG4gICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9wYXNzX3N0YWdlIDwgaXRlbS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN5YWz5Y2h562J57qn5bCP5LqO6ZyA6KaB5YWz5Y2h562J57qnXG4gICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg6YCa5YWzJHtpdGVtLm5lZWRfcGFzc19zdGFnZX3lhbPlkI7lj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWz5Y2h562J57qn6L6+5oiQIOWIpOaWreesrOS6jOadoeS7tiBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9zaWduX2luIDwgaXRlbS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg5a6M5oiQ5LuK5pel562+5Yiw5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9hZCA8IGl0ZW0ubmVlZF9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg5YaN55yLJHtpdGVtLm5lZWRfYWQgLSBpdGVtLmN1cnJfYWR95Liq6KeG6aKR5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBhd3JhZCA9IFN1Y2Nlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgYXdyYWQuc3RyaW5nID0gYOWlluWKsee6ouWMhSske3RoaXMucmVkUGFja31gO1xuICAgICAgICAgICAgaWYgKGNjLnptLkxldmVsSW5mby5ldmVyX3Bhc3MpIHtcbiAgICAgICAgICAgICAgICBhd3JhZC5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGV4dGF0QXdhcmQgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwiZXh0cmFBd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMuZXh0YXJSZWRQYWNrKSB7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5ub2RlLnBhcmVudC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQuc3RyaW5nID0gYCske3RoaXMuZXh0YXJSZWRQYWNrfWA7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyDmiJDlip/miJbogIXlpLHotKXlj5HpgIHmlbDmja4gcmVkX3BhY2s657qi5YyFIHNjb3JlOuWIhuaVsCB0c++8muaXtumXtOaIsyBzaWduIE1ENeaVsOaNrlxuICAgICAgICAgICAgLy8gXG4gICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgXCJib21iXCI6IHRoaXMuYm9vbU51bWJlciArIDEsLy/ngrjlvLnkuKrmlbBcbiAgICAgICAgICAgICAgICBcInBvdGlvblwiOiB0aGlzLmxpcXVpZE51bWJlciwvL+iNr+awtFxuICAgICAgICAgICAgICAgIFwic2NvcmVcIjogdGhpcy5jdXJTY29yZSwvL+WIhuaVsFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCkvL+aXtumXtOaIs1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Bhc3NcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc+mAmuWFs+aIkOWKn+i/lOWbnuS/oeaBr1wiLCByZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpY3RvcnkgPT09IDIpIHtcbiAgICAgICAgICAgIEZhaWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOmAmuWFs+Wksei0peS4jeeUqOWRiuivieacjeWKoeWZqFxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTWFzaykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICBjcmVhdGVTaWduRGF0YTogZnVuY3Rpb24gKGRhdGEpIHtcbiAgICAgICAgdmFyIHNvcnRMaXN0ID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBkYXRhKSB7XG4gICAgICAgICAgICBpZiAoZGF0YS5oYXNPd25Qcm9wZXJ0eShrZXkpICYmIGtleSAhPSBcInNpZ25cIikge1xuICAgICAgICAgICAgICAgIHZhciB2YWx1ZSA9IGRhdGFba2V5XTtcbiAgICAgICAgICAgICAgICB2YXIgaXRlbSA9IHt9O1xuICAgICAgICAgICAgICAgIGl0ZW0ua2V5ID0ga2V5O1xuICAgICAgICAgICAgICAgIGl0ZW0udmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICBzb3J0TGlzdC5wdXNoKGtleSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgc29ydExpc3Quc29ydCgpO1xuICAgICAgICB2YXIgc3RyVG9KaWFNaSA9IFwiXCI7XG4gICAgICAgIHNvcnRMaXN0LmZvckVhY2goZnVuY3Rpb24gKGtleSkge1xuICAgICAgICAgICAgc3RyVG9KaWFNaSArPSBcIiZcIiArIGtleSArIFwiPVwiICsgZGF0YVtrZXldO1xuICAgICAgICB9LCB0aGlzKTtcbiAgICAgICAgc3RyVG9KaWFNaSA9IFwidG9rZW49XCIgKyBjYy56bS51c2VySW5mby5zYzEgKyBzdHJUb0ppYU1pO1xuICAgICAgICAvLyB2YXIgbm9KaWFNaSA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5pyq5Yqg5a+G5YmNPVwiLHN0clRvSmlhTWkpXG4gICAgICAgIHZhciBoZXhfbWQ1ID0gcmVxdWlyZShcIk1ENVwiKVxuICAgICAgICBzdHJUb0ppYU1pID0gaGV4X21kNShzdHJUb0ppYU1pKTtcbiAgICAgICAgZGF0YS5zaWduID0gc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCLliqDlr4blkI49XCIsc3RyVG9KaWFNaSlcbiAgICAgICAgcmV0dXJuIGRhdGE7XG5cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaBouWkjea4uOaIj++8jOWFs+mXreW8ueWHuuahhlxuICAgICAqIOWmguaenOaYr+a4uOaIj+mAmuWFs+WOn+WboOiAjOaJk+W8gOeahOW8ueWHuuahhuS4jeS6iOeQhuedrFxuICAgICAqL1xuICAgIENsb3NlTWFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjeeOqeacrOWFs1xuICAgICAqL1xuICAgIFJlbG9hZCgpIHtcbiAgICAgICAgLy/lgZzmraLlgJLorqHml7ZcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIC8v6YeN6L295Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu6fnu63kuIvkuIDlhbNcbiAgICAgKi9cbiAgICBOZXh0KCkge1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy52aWN0b3J5KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/nu6fnu63muLjmiI9cbiAgICAgICAgICAgICAgICB0aGlzLkNsb3NlTWFzaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIOi/h+WFs+aIkOWKn+eCueWHu+i/m+WFpeS4i+S4gOWFs+S5i+WJjSDlhYjojrflj5bnlKjmiLfkv6Hmga8g55yL55So5oi35piv5ZCm5pyJ5L2T5YqbXG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLkxldmVsSW5mby5zdGFnZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jjAg5by55Ye655yL6KeG6aKR6I635b6X5L2T5Yqb55qE5o6l5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/pgIDlh7rmuLjmiI9cbiAgICAgICAgICAgICAgICB0aGlzLkV4aXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICBBd2FyZFZpZGVvKGUpIHtcbiAgICAgICAgY2MubG9nKFwi55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBwYWNrID0gY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyA/IDAgOiB0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgY2Muem0uYWQucmVkUGFjayA9IHNlbmREYXRhO1xuICAgICAgICB0aGlzLnRpbWVyICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+WlluWKsVxuICAgIHNlZVZpZGVvQXdhcmQoZSkge1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBjYy56bS5hZC5wb3dlciA9IHRydWU7XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICB0YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgY2xvc2VMYXllcihlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICB0YXJnZXQucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog6YCA5Ye65ri45oiPIOi/lOWbnuS4iuS4gOS4quWcuuaZr1xuICAgICAqL1xuICAgIEV4aXRHYW1lKCkge1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgfSxcbiAgICBSZXN1bWVHYW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuQmFja0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLk1pbmVyU3AucGF1c2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmoLlgZzlvZPliY3nlYzpnaJcbiAgICBQYXVzZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog6IOc5Yip5oiW5aSx6LSl6YO96KeG5Li65ri45oiP57uT5p2fXG4gICAgICovXG4gICAgR2FtZU92ZXIoKSB7XG4gICAgICAgIC8v5Yik5pat55So5oi35b6X5YiG5piv5ZCm6LaF6L+H55uu5qCH5YiGXG4gICAgICAgIGxldCBzID0gMDtcblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpID49IHBhcnNlSW50KHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nKSkge1xuICAgICAgICAgICAgcyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+a4uOaIj+Wksei0pVxuICAgICAgICAgICAgcyA9IDI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmljdG9yeSA9IHM7XG4gICAgICAgIHRoaXMuU2hvd01hc2soKTtcbiAgICB9LFxuXG4gICAgLy8gc3RhcnQgKCkge1xuXG4gICAgLy8gfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VHYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTmVlZExheWVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubW92ZU1vdXNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEhvb2soKTtcbiAgICAgICAgdGhpcy5Ib29rUm9UYXRlKCk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICB1c2VQcm9wKGUsIG1zZykge1xuICAgICAgICAvLyDlpoLmnpzmmK/ngrjlvLlcbiAgICAgICAgc3dpdGNoIChtc2cpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnirbmgIHlv4XpobvmmK/nu7PlrZDlpITkuo7og73mi4nlm57nmoTnirbmgIFcbiAgICAgICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnianlk4FcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdICYmIHRoaXMuYm9vbU51bWJlciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOeCuOW8ueWDj+acjeWKoeWZqOWPkemAgea2iOaBr1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5o+Q5YmN5YmN56uv5L2/55SoIOaYr+eUu+mdouWQjOatpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXItLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ouJ5Y6755qE54mp5ZOB55qE5L2N572uXG4gICAgICAgICAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gX25vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg54K45by55pWI5p6cXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJib29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKGNjLnYyKHBvcy54IC0gc2l6ZS53aWR0aCAvIDIsIHBvcy55IC0gc2l6ZS5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIF9ub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTGV2ZWwuanMiXSwibmFtZXMiOlsibW9kdWxlIiwiZXhwb3J0cyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0FBLE1BQU0sQ0FBQ0MsT0FBUCxHQUFtQjtBQUVmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLEdBRkg7QUFHUCxnQkFBVyxJQUhKO0FBSVAsa0JBQWEsSUFKTjtBQUtQLGFBQVEsYUFMRDtBQU1QLGVBQVU7QUFOSCxHQUZJO0FBV2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxjQUxBO0FBTVAsYUFBUSxLQU5EO0FBT1AsZUFBVTtBQVBILEdBWEk7QUFvQmYsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsR0FGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyx5QkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXBCSTtBQTZCZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLGFBTEE7QUFNUCxlQUFVO0FBTkgsR0E3Qkk7QUFxQ2YsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsSUFGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxJQUpOO0FBS1AsWUFBTyxtQkFMQTtBQU1QLGFBQVEsS0FORDtBQU9QLGVBQVU7QUFQSCxHQXJDSTtBQThDZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLElBSk47QUFLUCxZQUFPLG1CQUxBO0FBTVAsWUFBTyxDQU5BO0FBT1AsZUFBVTtBQVBILEdBOUNJO0FBdURmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLElBRkg7QUFHUCxnQkFBVyxJQUhKO0FBSVAsa0JBQWEsSUFKTjtBQUtQLFlBQU8sb0JBTEE7QUFNUCxlQUFVO0FBTkgsR0F2REk7QUErRGYsWUFBVztBQUNQLFVBQUssR0FERTtBQUVQLGFBQVUsSUFGSDtBQUdQLGdCQUFXLElBSEo7QUFJUCxrQkFBYSxLQUpOO0FBS1AsWUFBTyxvQkFMQTtBQU1QLGFBQVEsYUFORDtBQU9QLFlBQU8sQ0FQQTtBQVFQLGVBQVU7QUFSSCxHQS9ESTtBQXlFZixZQUFXO0FBQ1AsVUFBSyxHQURFO0FBRVAsYUFBVSxJQUZIO0FBR1AsZ0JBQVcsSUFISjtBQUlQLGtCQUFhLEtBSk47QUFLUCxZQUFPLG9CQUxBO0FBTVAsZUFBVTtBQU5ILEdBekVJO0FBaUZmLFlBQVc7QUFDUCxVQUFLLEdBREU7QUFFUCxhQUFVLElBRkg7QUFHUCxnQkFBVyxJQUhKO0FBSVAsa0JBQWEsS0FKTjtBQUtQLFlBQU8sb0JBTEE7QUFNUCxlQUFVO0FBTkgsR0FqRkk7QUF5RmYsYUFBWTtBQUNSLFVBQUssR0FERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTywwQkFMQztBQU1SLGFBQVEsS0FOQTtBQU9SLGVBQVU7QUFQRixHQXpGRztBQWtHZixhQUFZO0FBQ1IsVUFBSyxJQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLG1CQUxDO0FBTVIsYUFBUSxHQU5BO0FBT1IsYUFBUSxhQVBBO0FBUVIsWUFBTyxDQVJDO0FBU1IsZUFBVTtBQVRGLEdBbEdHO0FBNkdmLGFBQVk7QUFDUixVQUFLLElBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8sMkJBTEM7QUFNUixhQUFRLEtBTkE7QUFPUixlQUFVO0FBUEYsR0E3R0c7QUFzSGYsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsS0FOQTtBQU9SLGVBQVU7QUFQRixHQXRIRztBQStIZixhQUFZO0FBQ1IsVUFBSyxJQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLG1CQUxDO0FBTVIsYUFBUSxHQU5BO0FBT1IsWUFBTyxDQVBDO0FBUVIsZUFBVTtBQVJGLEdBL0hHO0FBeUlmLGFBQVk7QUFDUixVQUFLLElBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8sb0JBTEM7QUFNUixhQUFRLGFBTkE7QUFPUixlQUFVO0FBUEYsR0F6SUc7QUFrSmYsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLGVBQVU7QUFQRixHQWxKRztBQTJKZixhQUFZO0FBQ1IsVUFBSyxJQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLG9CQUxDO0FBTVIsYUFBUSxJQU5BO0FBT1IsZUFBVTtBQVBGLEdBM0pHO0FBb0tmLGFBQVk7QUFDUixVQUFLLElBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8sb0JBTEM7QUFNUixhQUFRLGFBTkE7QUFPUixhQUFRLEtBUEE7QUFRUixlQUFVO0FBUkYsR0FwS0c7QUE4S2YsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTywyQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLGVBQVU7QUFQRixHQTlLRztBQXVMZixhQUFZO0FBQ1IsVUFBSyxJQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLG9CQUxDO0FBTVIsYUFBUSxLQU5BO0FBT1IsYUFBUSxLQVBBO0FBUVIsWUFBTyxDQVJDO0FBU1IsZUFBVTtBQVRGLEdBdkxHO0FBa01mLGFBQVk7QUFDUixVQUFLLEtBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8sT0FMQztBQU1SLGFBQVEsSUFOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGVBQVU7QUFSRixHQWxNRztBQTRNZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLFFBTEM7QUFNUixhQUFRLEtBTkE7QUFPUixZQUFPLENBUEM7QUFRUixlQUFVO0FBUkYsR0E1TUc7QUFzTmYsYUFBWTtBQUNSLFVBQUssS0FERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLGFBQVEsVUFQQTtBQVFSLFlBQU8sQ0FSQztBQVNSLGVBQVU7QUFURixHQXRORztBQWlPZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLDBCQUxDO0FBTVIsYUFBUSxJQU5BO0FBT1IsYUFBUSxLQVBBO0FBUVIsZUFBVTtBQVJGLEdBak9HO0FBMk9mLGFBQVk7QUFDUixVQUFLLEtBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLGFBQVEsSUFMQTtBQU1SLFlBQU8sQ0FOQztBQU9SLGVBQVU7QUFQRixHQTNPRztBQW9QZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixhQUFRLE1BTEE7QUFNUixZQUFPLENBTkM7QUFPUixlQUFVO0FBUEYsR0FwUEc7QUE2UGYsYUFBWTtBQUNSLFVBQUssS0FERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxvQkFMQztBQU1SLGFBQVEsSUFOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURixHQTdQRztBQXdRZixhQUFZO0FBQ1IsVUFBSyxLQURHO0FBRVIsYUFBVSxLQUZGO0FBR1IsZ0JBQVcsSUFISDtBQUlSLGtCQUFhLEtBSkw7QUFLUixZQUFPLDJCQUxDO0FBTVIsYUFBUSxLQU5BO0FBT1IsWUFBTyxDQVBDO0FBUVIsYUFBUSxLQVJBO0FBU1IsZUFBVTtBQVRGLEdBeFFHO0FBbVJmLGFBQVk7QUFDUixVQUFLLEtBREc7QUFFUixhQUFVLEtBRkY7QUFHUixnQkFBVyxJQUhIO0FBSVIsa0JBQWEsS0FKTDtBQUtSLFlBQU8scUJBTEM7QUFNUixhQUFRLEtBTkE7QUFPUixhQUFRLEtBUEE7QUFRUixZQUFPLENBUkM7QUFTUixlQUFVO0FBVEYsR0FuUkc7QUE4UmYsYUFBWTtBQUNSLFVBQUssSUFERztBQUVSLGFBQVUsS0FGRjtBQUdSLGdCQUFXLElBSEg7QUFJUixrQkFBYSxLQUpMO0FBS1IsWUFBTyxxQkFMQztBQU1SLGFBQVEsS0FOQTtBQU9SLFlBQU8sQ0FQQztBQVFSLGFBQVEsS0FSQTtBQVNSLGVBQVU7QUFURjtBQTlSRyxDQUFuQiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhbPljaHmlbDmja5cbi8vIFxubW9kdWxlLmV4cG9ydHMgID0gIHtcblxuICAgIFwibGV2ZWwwXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIumbtlwiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNTAwLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWQsbXlzdGVyeVwiLFxuICAgICAgICBcInJlZFBhY2tcIjo4OC44OFxuICAgIH0sXG5cbiAgICBcImxldmVsMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogNTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJnb29kXCI6XCJifDE1MCxnfDEzNTBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjg4Ljg4XG4gICAgfSxcbiAgICBcImxldmVsMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogOTI1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MTg0MCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MzM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDMwMCxnfDk0MCxtfDIwMCxkfDQwMFwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6NjYuNjZcbiAgICB9LFxuICAgIFwibGV2ZWwzXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4iVwiLFxuICAgICAgICBcInNjb3JlXCIgOiAxNTYwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDM0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDgwMFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoyMC45NlxuICAgIH0sXG4gICAgXCJsZXZlbDRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDUsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTIyNSxtfDc1XCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxNC4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDM0NjAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxMzAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo3MTQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MTMwLGd8MzcwLGR8ODAwXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEwLjcxXG4gICAgfSxcbiAgICBcImxldmVsNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogNDcyNSxcbiAgICAgICAgXCJtYXhTY29yZVwiOjIwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjkxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZHwxMjAwLGd8NjAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjguNDJcbiAgICB9LFxuICAgIFwibGV2ZWw3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA2MjAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MTUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTA2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMDAwLGR8NDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjYuODhcbiAgICB9LFxuICAgIFwibGV2ZWw4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTI2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNDAwLG18NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjUuNzdcbiAgICB9LFxuICAgIFwibGV2ZWw5XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS5nVwiLFxuICAgICAgICBcInNjb3JlXCIgOiA5Mzk1LFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MTQ2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwzMDAsZ3wxMzAwLGR8NDAwXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuOTRcbiAgICB9LFxuICAgIFwibGV2ZWwxMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTA1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoyMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxNjY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyMDAsZHw0MDAsbXwyMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwicmVkUGFja1wiOjQuMzBcbiAgICB9LFxuICAgIFwibGV2ZWwxMVwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuIBcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjoxNTAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoxODE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDg1MCxkfDQwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIxXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjMuODBcbiAgICB9LFxuICAgIFwibGV2ZWwxMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMTMwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjoyMTE0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE0MDAsZHwxMjAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjM5XG4gICAgfSxcbiAgICBcImxldmVsMTNcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LiJXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE1NzAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjUwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjM2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxNTAwLGR8ODAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjozLjA1XG4gICAgfSxcbiAgICBcImxldmVsMTRcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5ZubXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE3NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MjAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6MjU2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w5MDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiMlwiLFxuICAgICAgICBcImJvb21cIjoyLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjc2XG4gICAgfSxcbiAgICBcImxldmVsMTVcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LqUXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDE4NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6MzAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6Mjg2NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3w4MDAsZHwyMDAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwicmVkUGFja1wiOjIuNTJcbiAgICB9LFxuICAgIFwibGV2ZWwxNlwiIDoge1xuICAgICAgICBcImlkXCI6XCLljYHlha1cIixcbiAgICAgICAgXCJzY29yZVwiIDogMjEwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjozMDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjozMTY0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEzMDAsZHw4MDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDFcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6Mi4zMlxuICAgIH0sXG4gICAgXCJsZXZlbDE3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiAyMjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjM1MDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjM1MTQwLFxuICAgICAgICBcImdvb2RcIjpcImd8MTEyNSxifDE3NSxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoyLjE0XG4gICAgfSxcbiAgICBcImxldmVsMThcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5YWrXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDI0MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDAxNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiZ3wxMDAwLGR8ODAwLG18MjAwXCIsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZCxteXN0ZXJ5XCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsNFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjk5XG4gICAgfSxcbiAgICBcImxldmVsMTlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMwMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDcwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDQ4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMTAwLGR8MTIwMCxtfDEwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsM1wiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjg1XG4gICAgfSxcbiAgICBcImxldmVsMjBcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2BXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDMzMDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NDAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NDg4NDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLG18MjAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjQsM1wiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS43M1xuICAgIH0sXG4gICAgXCJsZXZlbDIxXCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4gFwiLFxuICAgICAgICBcInNjb3JlXCIgOiAzNjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjUyODQwLFxuICAgICAgICBcImdvb2RcIjpcImd8NTAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIiw1XCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNjJcbiAgICB9LFxuICAgIFwibGV2ZWwyMlwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuoxcIixcbiAgICAgICAgXCJzY29yZVwiIDogMzkwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo1Njg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJkfDQwMDBcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjIsXG4gICAgICAgIFwicmVkUGFja1wiOjEuNTNcbiAgICB9LFxuICAgIFwibGV2ZWwyM1wiIDoge1xuICAgICAgICBcImlkXCI6XCLkuozljYHkuIlcIixcbiAgICAgICAgXCJzY29yZVwiIDogNDE1MDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo0MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo2MDg0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDE1MDAsbXwyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiLDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwiLG15c3RlcnlcIixcbiAgICAgICAgXCJib29tXCI6MixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS40NFxuICAgIH0sXG4gICAgXCJsZXZlbDI0XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWbm1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA0MzUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY0ODQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTQwMCxkfDgwMCxtfDIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMlwiLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4zNlxuICAgIH0sXG4gICAgXCJsZXZlbDI1XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS6lFwiLFxuICAgICAgICBcInNjb3JlXCIgOiA0NjAwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjQyMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjY5MDQwLFxuICAgICAgICBcIm1vdXNlXCI6XCIsNlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjI5XG4gICAgfSxcbiAgICBcImxldmVsMjZcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5YWtXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDQ5NTAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6NzQwNDAsXG4gICAgICAgIFwibW91c2VcIjpcIjE2LDZcIixcbiAgICAgICAgXCJib29tXCI6MSxcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4yMlxuICAgIH0sXG4gICAgXCJsZXZlbDI3XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeS4g1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1MjUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjc5MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8NTAwLGR8MzYwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCIsMVwiLFxuICAgICAgICBcImJvb21cIjoxLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4xN1xuICAgIH0sXG4gICAgXCJsZXZlbDI4XCIgOiB7XG4gICAgICAgIFwiaWRcIjpcIuS6jOWNgeWFq1wiLFxuICAgICAgICBcInNjb3JlXCIgOiA1NTUwMCxcbiAgICAgICAgXCJtYXhTY29yZVwiOjUwMDAsXG4gICAgICAgIFwidG90YWxTY29yZVwiOjg0MDQwLFxuICAgICAgICBcImdvb2RcIjpcImJ8MjAwLGd8MTEwMCxtfDE1MCxkfDEyMDBcIixcbiAgICAgICAgXCJtb3VzZVwiOlwiNSwzXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwiZXh0cmFcIjpcInJlZFwiLFxuICAgICAgICBcInJlZFBhY2tcIjoxLjExXG4gICAgfSxcbiAgICBcImxldmVsMjlcIiA6IHtcbiAgICAgICAgXCJpZFwiOlwi5LqM5Y2B5LmdXCIsXG4gICAgICAgIFwic2NvcmVcIiA6IDU4MDAwLFxuICAgICAgICBcIm1heFNjb3JlXCI6NTAwMCxcbiAgICAgICAgXCJ0b3RhbFNjb3JlXCI6ODkwNDAsXG4gICAgICAgIFwiZ29vZFwiOlwiYnwyMDAsZ3wxMzAwLGR8MTIwMFwiLFxuICAgICAgICBcIm1vdXNlXCI6XCI0LDNcIixcbiAgICAgICAgXCJleHRyYVwiOlwicmVkXCIsXG4gICAgICAgIFwiYm9vbVwiOjEsXG4gICAgICAgIFwicmVkUGFja1wiOjEuMDZcbiAgICB9LFxuICAgIFwibGV2ZWwzMFwiIDoge1xuICAgICAgICBcImlkXCI6XCLkuInljYFcIixcbiAgICAgICAgXCJzY29yZVwiIDogNjIwMDAsXG4gICAgICAgIFwibWF4U2NvcmVcIjo1MDAwLFxuICAgICAgICBcInRvdGFsU2NvcmVcIjo5NDA0MCxcbiAgICAgICAgXCJnb29kXCI6XCJifDIwMCxnfDEyNTAsZHwyMDAwXCIsXG4gICAgICAgIFwibW91c2VcIjpcIjMsMlwiLFxuICAgICAgICBcImJvb21cIjozLFxuICAgICAgICBcImV4dHJhXCI6XCJyZWRcIixcbiAgICAgICAgXCJyZWRQYWNrXCI6MS4wMVxuICAgIH1cbn0iXX0=
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
    this.time = 0;

    if (!cc.sys.isNative) {
      cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoxMDAxMTcxLCJvcGVuX2lkIjoib1FXNFI1OVVSRlF1YTNSWjlvX3lfdGJ6UEdLNCIsIm5pY2tfbmFtZSI6Iua1t-ebl-iIuemVvzIuMCIsImdlbmRlciI6MSwiYXZhdGFyIjoiaHR0cHM6Ly90aGlyZHd4LnFsb2dvLmNuL21tb3Blbi92aV8zMi9mR0xkR1pneG5wVmtJQldjaWEzeWljaWJ6aWJFQ0J0VzFhQkhEbUdhWmV6cTAycWdQUUN3STN5OGljVE5nWEtCcDBOcExBNUJFdDZ6UEdsSG1VTWY5bHd4Qk1nLzEzMiIsImNyZWF0ZV90aW1lIjowLCJjaGFubmVsIjoiMSIsImRpc3RpbmN0X2lkIjoiMSJ9.K5C9XSkEEjBBfPFn1m5BoXGu11ubPc9lSvDRAHkv_V4");
    }

    if (cc.sys.localStorage.getItem("token")) {
      this.needLogin = false;
      cc.wxToken = cc.sys.localStorage.getItem("token");
      cc.director.loadScene('Index');
    }
  },
  onLoginWX: function onLoginWX() {
    if (cc.sys.isNative) {
      if (this.protocol) {
        cc.Tools.wxLogin();
      } else {
        this.showTips();
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvbG9naW4uanMiXSwibmFtZXMiOlsiaHR0cCIsInJlcXVpcmUiLCJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInN0YXJ0IiwicHJvdG9jb2wiLCJuZWVkTG9naW4iLCJ0aW1lIiwic3lzIiwiaXNOYXRpdmUiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiZ2V0SXRlbSIsInd4VG9rZW4iLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsIm9uTG9naW5XWCIsIlRvb2xzIiwid3hMb2dpbiIsInNob3dUaXBzIiwiY2xpY2tQcm90b2NvbCIsImUiLCJ0YXJnZXQiLCJyaWdodCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwidGlwcyIsIm5vZGUiLCJ5IiwidHdlZW4iLCJ0byIsImRlbGF5IiwiY2FsbCIsInVwZGF0ZSIsImR0Iiwid3hMb2dpblJlc3VsdGNvZGUiLCJkYXRhIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwidG9rZW4iLCJzaG93VXNlclByb3RvY29sIiwiaGlkZVVzZXJQcm90b2NvbCIsInNob3dVc2VyUHJpdmFjeSIsInByaXZhY3kiLCJoaWRlVXNlclByaXZhY3kiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFLEVBSFA7QUFPTDtBQUVBO0FBRUFDLEVBQUFBLEtBWEssbUJBV0c7QUFDSixTQUFLQyxRQUFMLEdBQWdCLEtBQWhCO0FBQ0EsU0FBS0MsU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtDLElBQUwsR0FBWSxDQUFaOztBQUNBLFFBQUksQ0FBQ1AsRUFBRSxDQUFDUSxHQUFILENBQU9DLFFBQVosRUFBc0I7QUFDbEJULE1BQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFP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Q0FBU0ksS0FBdEI7QUFDQXhDLFVBQUFBLEVBQUUsQ0FBQ1EsR0FBSCxDQUFPRSxZQUFQLENBQW9CQyxPQUFwQixDQUE0QixPQUE1QixFQUFxQzRCLEdBQUcsQ0FBQ0gsSUFBSixDQUFTSSxLQUE5QztBQUNBeEMsVUFBQUEsRUFBRSxDQUFDYyxRQUFILENBQVlDLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxTQUxEO0FBTUg7QUFDSjtBQUNKLEdBL0VJO0FBZ0ZMO0FBQ0EwQixFQUFBQSxnQkFqRkssOEJBaUZjO0FBQ2YsUUFBSXBDLFFBQVEsR0FBRyxLQUFLc0IsSUFBTCxDQUFVSCxjQUFWLENBQXlCLGVBQXpCLENBQWY7QUFDQW5CLElBQUFBLFFBQVEsQ0FBQ29CLE1BQVQsR0FBa0IsSUFBbEI7QUFDSCxHQXBGSTtBQXFGTGlCLEVBQUFBLGdCQXJGSyw4QkFxRmM7QUFDZixRQUFJckMsUUFBUSxHQUFHLEtBQUtzQixJQUFMLENBQVVILGNBQVYsQ0FBeUIsZUFBekIsQ0FBZjtBQUNBbkIsSUFBQUEsUUFBUSxDQUFDb0IsTUFBVCxHQUFrQixLQUFsQjtBQUNILEdBeEZJO0FBeUZMO0FBQ0FrQixFQUFBQSxlQTFGSyw2QkEwRmE7QUFDZCxRQUFJQyxPQUFPLEdBQUcsS0FBS2pCLElBQUwsQ0FBVUgsY0FBVixDQUF5QixjQUF6QixDQUFkO0FBQ0FvQixJQUFBQSxPQUFPLENBQUNuQixNQUFSLEdBQWlCLElBQWpCO0FBQ0gsR0E3Rkk7QUE4RkxvQixFQUFBQSxlQTlGSyw2QkE4RmE7QUFDZCxRQUFJRCxPQUFPLEdBQUcsS0FBS2pCLElBQUwsQ0FBVUgsY0FBVixDQUF5QixjQUF6QixDQUFkO0FBQ0FvQixJQUFBQSxPQUFPLENBQUNuQixNQUFSLEdBQWlCLEtBQWpCO0FBQ0g7QUFqR0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJIdHRwXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcblxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIC8vIG9uTG9hZCAoKSB7fSxcblxuICAgIHN0YXJ0KCkge1xuICAgICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgIHRoaXMubmVlZExvZ2luID0gdHJ1ZTtcbiAgICAgICAgdGhpcy50aW1lID0gMDtcbiAgICAgICAgaWYgKCFjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIFwiZXlKaGJHY2lPaUpJVXpJMU5pSXNJblI1Y0NJNklrcFhWQ0o5LmV5SjFjMlZ5WDJsa0lqb3hNREF4TVRjeExDSnZjR1Z1WDJsa0lqb2liMUZYTkZJMU9WVlNSbEYxWVROU1dqbHZYM2xmZEdKNlVFZExOQ0lzSW01cFkydGZibUZ0WlNJNkl1YTF0LWVibC1pSXVlbVZ2ekl1TUNJc0ltZGxibVJsY2lJNk1Td2lZWFpoZEdGeUlqb2lhSFIwY0hNNkx5OTBhR2x5WkhkNExuRnNiMmR2TG1OdUwyMXRiM0JsYmk5MmFWOHpNaTltUjB4a1IxcG5lRzV3Vm10SlFsZGphV0V6ZVdsamFXSjZhV0pGUTBKMFZ6RmhRa2hFYlVkaFdtVjZjVEF5Y1dkUVVVTjNTVE41T0dsalZFNW5XRXRDY0RCT2NFeEJOVUpGZERaNlVFZHNTRzFWVFdZNWJIZDRRazFuTHpFek1pSXNJbU55WldGMFpWOTBhVzFsSWpvd0xDSmphR0Z1Ym1Wc0lqb2lNU0lzSW1ScGMzUnBibU4wWDJsa0lqb2lNU0o5Lks1QzlYU2tFRWpCQmZQRm4xbTVCb1hHdTExdWJQYzlsU3ZEUkFIa3ZfVjRcIilcbiAgICAgICAgfVxuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIikpIHtcbiAgICAgICAgICAgIHRoaXMubmVlZExvZ2luID0gZmFsc2U7XG4gICAgICAgICAgICBjYy53eFRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG9uTG9naW5XWCgpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy53eExvZ2luKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpcHMoKVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDpgInmi6nnlKjmiLfljY/orq5cbiAgICBjbGlja1Byb3RvY29sKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0O1xuICAgICAgICBsZXQgcmlnaHQgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJyaWdodFwiKTtcbiAgICAgICAgaWYgKHRoaXMucHJvdG9jb2wpIHtcbiAgICAgICAgICAgIHJpZ2h0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5wcm90b2NvbCA9IGZhbHNlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmlnaHQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMucHJvdG9jb2wgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93VGlwcygpIHtcbiAgICAgICAgbGV0IHRpcHMgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXBzXCIpO1xuICAgICAgICB0aXBzLnkgPSAwO1xuICAgICAgICB0aXBzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGNjLnR3ZWVuKHRpcHMpLnRvKDEsIHsgeTogMTAwIH0pLmRlbGF5KDAuNSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aXBzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgdGhpcy50aW1lICs9IGR0O1xuICAgICAgICBpZiAoIXRoaXMubmVlZExvZ2luKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudGltZSA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLnRpbWUgPSAwO1xuICAgICAgICAgICAgaWYgKGNjLnd4TG9naW5SZXN1bHRjb2RlICYmIHRoaXMucHJvdG9jb2wpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIFwiY2hhbm5lbFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJpbWVpXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcIm1hY1wiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJkaXN0aW5jdF9pZFwiOiBcIjFcIixcbiAgICAgICAgICAgICAgICAgICAgXCJvYWlkXCI6IFwiMVwiLFxuICAgICAgICAgICAgICAgICAgICBcImFuZHJvaWRfaWRcIjogXCIxXCIsXG4gICAgICAgICAgICAgICAgICAgIFwiY29kZVwiOiBjYy53eExvZ2luUmVzdWx0Y29kZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxL3JlZ2lzdGVyXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy50b2tlbi5zdHJpbmcgPSBKU09OLnN0cmluZ2lmeShyZXMpXG4gICAgICAgICAgICAgICAgICAgIGNjLnd4VG9rZW4gPSByZXMuZGF0YS50b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S655So5oi35Y2P6K6uXG4gICAgc2hvd1VzZXJQcm90b2NvbCgpIHtcbiAgICAgICAgbGV0IHByb3RvY29sID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwidXNlcl9wcm90b2NvbFwiKTtcbiAgICAgICAgcHJvdG9jb2wuYWN0aXZlID0gdHJ1ZTtcbiAgICB9LFxuICAgIGhpZGVVc2VyUHJvdG9jb2woKSB7XG4gICAgICAgIGxldCBwcm90b2NvbCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJvdG9jb2xcIik7XG4gICAgICAgIHByb3RvY29sLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgLy8g5pi+56S66ZqQ56eB5pS/562WXG4gICAgc2hvd1VzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSB0cnVlO1xuICAgIH0sXG4gICAgaGlkZVVzZXJQcml2YWN5KCkge1xuICAgICAgICBsZXQgcHJpdmFjeSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgcHJpdmFjeS5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxufSk7XG5cblxuIl19
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
   * 打点
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      cc.log("注册打点" + event);
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event, pro);
    }
  },

  /**
   * 看视频回调
   * @param errCode 
   */
  adCallBack: function adCallBack() {
    cc.log("观看视频回调");

    if (cc.zm.ad.power) {
      var sendData = {
        ad: cc.zm.ad
      };
      http.sendRequest("pit.v1.PitSvc/GrowPower", "POST", sendData).then(function (res) {
        cc.zm.ad.power = false;
        cc.director.loadScene('Game');
      });
    }

    if (cc.zm.ad.redPack) {
      http.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.ad.redPack).then(function (res) {
        console.log("PassAd返回信息", res);
        var sendData = {};
        http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then(function (res) {
          cc.zm.userInfo = res.data; // 如果体力大于0 进入下一关

          if (cc.zm.userInfo.power > 0) {
            http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
              cc.zm.LevelInfo = res.data;
              cc.zm.ad.redPack = null; // console.log("关卡信息=", cc.zm.LevelInfo);

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
  },
  // 显示激励视频
  showJiliAd: function showJiliAd() {
    cc.log("点击显示激励视频");

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
    cc.log("wxLogin");

    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    cc.log("wxLoginResultcode=" + errCode);
    cc.wxLoginResultcode = errCode;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMuanMiXSwibmFtZXMiOlsiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJsb2ciLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsImFkQ2FsbEJhY2siLCJ6bSIsImFkIiwicG93ZXIiLCJzZW5kRGF0YSIsImh0dHAiLCJzZW5kUmVxdWVzdCIsInRoZW4iLCJyZXMiLCJkaXJlY3RvciIsImxvYWRTY2VuZSIsInJlZFBhY2siLCJjb25zb2xlIiwidXNlckluZm8iLCJkYXRhIiwiTGV2ZWxJbmZvIiwic3RhZ2UiLCJzaG93SmlsaUFkIiwic2hvd0Jhbm5lciIsImhpZGVCYW5uZXIiLCJzaG93VGFibGVTY3JlZW4iLCJoaWRlVGFibGVTY3JlZW4iLCJ3eExvZ2luIiwid3hMb2dpblJlc3VsdCIsImVyckNvZGUiLCJ3eExvZ2luUmVzdWx0Y29kZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQUEsRUFBRSxDQUFDQyxLQUFILEdBQVc7QUFDUDtBQUNKO0FBQ0E7QUFDSUMsRUFBQUEsR0FKTyxlQUlIQyxLQUpHLEVBSUlDLEdBSkosRUFJUztBQUNaLFFBQUlKLEVBQUUsQ0FBQ0ssR0FBSCxDQUFPQyxRQUFYLEVBQXFCO0FBQ2pCTixNQUFBQSxFQUFFLENBQUNPLEdBQUgsQ0FBTyxTQUFTSixLQUFoQjtBQUNBSyxNQUFBQSxHQUFHLENBQUNDLFVBQUosQ0FBZUMsZ0JBQWYsQ0FBZ0MscUNBQWhDLEVBQXVFLEtBQXZFLEVBQThFLHVCQUE5RSxFQUF1R1AsS0FBdkcsRUFBOEdDLEdBQTlHO0FBQ0g7QUFDSixHQVRNOztBQVdQO0FBQ0o7QUFDQTtBQUNBO0FBQ0lPLEVBQUFBLFVBZk8sd0JBZU07QUFDVFgsSUFBQUEsRUFBRSxDQUFDTyxHQUFILENBQU8sUUFBUDs7QUFDQSxRQUFJUCxFQUFFLENBQUNZLEVBQUgsQ0FBTUMsRUFBTixDQUFTQyxLQUFiLEVB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cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjYy5Ub29scyA9IHtcbiAgICAvKipcbiAgICAgKiDmiZPngrlcbiAgICAqL1xuICAgIGRvdChldmVudCwgcHJvKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGNjLmxvZyhcIuazqOWGjOaJk+eCuVwiICsgZXZlbnQpO1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50LCBwcm8pO1xuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeci+inhumikeWbnuiwg1xuICAgICAqIEBwYXJhbSBlcnJDb2RlIFxuICAgICAqL1xuICAgIGFkQ2FsbEJhY2soKSB7XG4gICAgICAgIGNjLmxvZyhcIuingueci+inhumikeWbnuiwg1wiKTtcbiAgICAgICAgaWYgKGNjLnptLmFkLnBvd2VyKSB7XG4gICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWQ6IGNjLnptLmFkXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYy56bS5hZC5wb3dlciA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGNjLnptLmFkLnJlZFBhY2spIHtcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Bhc3NBZFwiLCBcIlBPU1RcIiwgY2Muem0uYWQucmVkUGFjaykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJQYXNzQWTov5Tlm57kv6Hmga9cIiwgcmVzKTtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9k+WKm+Wkp+S6jjAg6L+b5YWl5LiL5LiA5YWzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5hZC5yZWRQYWNrID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLnN0YWdlIDwgMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jjAg5by55Ye655yL6KeG6aKR6I635b6X5L2T5Yqb55qE5o6l5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekuua/gOWKseinhumikVxuICAgIHNob3dKaWxpQWQoKSB7XG4gICAgICAgIGNjLmxvZyhcIueCueWHu+aYvuekuua/gOWKseinhumikVwiKVxuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QWRcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaYvuekumJhbm5lclxuICAgIHNob3dCYW5uZXIoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dCYW5uZXJcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmakOiXj2Jhbm5lclxuICAgIGhpZGVCYW5uZXIoKXtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgc2hvd1RhYmxlU2NyZWVuKCl7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JeP5o+S5bGP5bm/5ZGKXG4gICAgaGlkZVRhYmxlU2NyZWVuKCl7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImhpZGVUYWJsZVNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5b6u5L+h55m76ZmGXG4gICAgd3hMb2dpbigpIHtcbiAgICAgICAgY2MubG9nKFwid3hMb2dpblwiKTtcbiAgICAgICAgaWYoY2Muc3lzLmlzTmF0aXZlKXtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcIndlaXhpbl9sb2dpblwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLFwid2VpeGluX2xvZ2luXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAgLyoqXG4gICAgICog5o6l5pS2bmF0aXZl5b6u5L+h5o6I5p2D55qEY29kZVxuICAgICAqIEBwYXJhbSBlcnJDb2RlIFxuICAgICAqL1xuICAgd3hMb2dpblJlc3VsdChlcnJDb2RlKSB7XG4gICAgY2MubG9nKFwid3hMb2dpblJlc3VsdGNvZGU9XCIgKyBlcnJDb2RlKVxuICAgIGNjLnd4TG9naW5SZXN1bHRjb2RlID0gZXJyQ29kZTtcbn1cbn0iXX0=
//------QC-SOURCE-SPLIT------
