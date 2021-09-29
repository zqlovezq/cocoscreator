
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