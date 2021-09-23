
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

    this.Miner.getComponent(cc.Sprite).spriteFrame = this.HeroFrames[0]; //得分累计

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
    // this.levelInfo = Level["level" + cc.zm.LevelInfo.stage]
    this.levelInfo = _Level["default"]["level20"]; // this.levelInfo = Level["level25"]

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

      console.log("XY=", XY, item);
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

      if (item.name === "Mouse" || item.name === "DrillMouse") {
        node.zIdex = 1;

        _this5.moveMouse(node);
      }
    });
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
          "prop": 0.1
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
          "prop": _prop
        };

        _arr2.push(_obj);

        createItemArr = [].concat(createItemArr, _arr2);
      }
    }

    if (this.levelInfo.boom) {
      for (var i = 0; i < this.levelInfo.boom; i++) {
        var _arr4 = [];
        var _obj2 = {
          "name": "Tnt"
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

    for (var _i = 0; _i < info.length; _i++) {
      var _info = info[_i].split("|");

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

    for (var _i2 = 0; _i2 < _scoreArr.length; _i2++) {
      _score += _scoreArr[_i2].score;

      if (_score <= totalScore) {
        newArr.push(_scoreArr[_i2]);
      } else {
        break;
      }
    }

    createItemArr = [].concat(createItemArr, newArr); // console.log("createItemArr=",createItemArr);

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
          var rdm = this.createRandm(0, 2);
          _score += scoreCig[rdm];

          if (_score > score) {
            break;
          }

          var obj = {
            "name": name + rdm,
            "score": scoreCig[rdm] * promote
          };
          arr.push(obj);
        }

        break;

      case "g":
        // 当前是黄金
        for (var _i3 = 0; _i3 < 30; _i3++) {
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
          } // console.log("scoreCig-----",scoreCig,"-----------",__score);


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
            "score": _scoreCig[_rdm]
          };
          arr.push(_obj3);
        }

        break;

      case "d":
        // 当前是钻石
        for (var _i4 = 0; _i4 < 30; _i4++) {
          var _name2 = "Drill";
          _score += 400;

          if (_score > score) {
            break;
          }

          var _obj4 = {
            "name": _name2,
            "score": 400
          };
          arr.push(_obj4);
        }

        break;

      case "zs":
        for (var _i5 = 0; _i5 < 30; _i5++) {
          var _name3 = "DrillMouse";
          _score += 700;

          if (_score > score) {
            break;
          }

          var _obj5 = {
            "name": _name3,
            "score": 700
          };
          arr.push(_obj5);
        }

        break;

      case "s":
        for (var _i6 = 0; _i6 < 30; _i6++) {
          var _name4 = "Mouse";
          _score += 50;

          if (_score > score) {
            break;
          }

          var _obj6 = {
            "name": _name4,
            "score": 50
          };
          arr.push(_obj6);
        }

        break;

      case "m":
        // 当前是神秘物品
        for (var _i7 = 0; _i7 < 30; _i7++) {
          var _name5 = "Mystery";
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

          var _obj7 = {
            "name": _name5,
            "prop": _scoreCig2
          };
          arr.push(_obj7);
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

        if (n.name === "Mouse" || n.name === "DrillMouse") {
          continue;
        }

        var boundingBox = n.getBoundingBox();

        if (boundingBox.intersects(rect)) {
          // 两者有相交继续随机
          // this.randomXY(item);
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
        var rect = Tnt.getBoundingBox();
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
      var extraRedPack = this.createRandm(300, 800) / 100;
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
        // 成功过关记录当前的分数
        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
          cc.zm.LevelInfo = res.data; // console.log("关卡信息=", cc.zm.LevelInfo);

          _this7.Reload();
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
      console.log("PassAd返回信息", res); // let btnCom = e.target.getComponent(cc.Button);
      // btnCom.enableAutoGrayEffect = true;
      // btnCom.interactable = false;
      // 直接进入下一关

      http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then(function (res) {
        cc.zm.LevelInfo = res.data; // console.log("关卡信息=", cc.zm.LevelInfo);

        _this8.Reload();
      });
    });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJkaXNwbGF5TmFtZSIsInJvdGF0ZVNwZWVkIiwiSG9va1JhbmdlIiwiUHJlZmFicyIsInR5cGUiLCJQcmVmYWIiLCJJbml0VGltZSIsIkNvbGxpc2lvbkF1ZGlvIiwiQXVkaW9DbGlwIiwiQWRkU2Nyb2VBdWRpbyIsIlByb3BTcHJpdGVGcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkJvb20iLCJIb29rRnJhbWVzIiwiSGVyb0ZyYW1lcyIsIkxvdHRlcnlGcmFtc2UiLCJvbkxvYWQiLCJpbml0IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJzZXRHdWlkZSIsImluZGV4IiwiZ3VpZGVJbmRleCIsImd1aWRlIiwiZmluZCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwibmV4dEd1aWRlIiwiZSIsIm1zZyIsImd1aWRlXzEiLCJndWlkZV8yIiwiZ3VpZGVfMyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJSZXN1bWVHYW1lTGF5ZXIiLCJoaWRlTmVlZExheWVyIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGFuZGxlRGFvanUiLCJhZGp1c0Jvb21MYXlvdXQiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJNaW5lckFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIkhvb2siLCJIb29rSGVpZ2h0IiwiaGVpZ2h0IiwiSG9va1N0YXRlIiwiY3VyU2NvcmUiLCJwYXVzZUdhbWUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIlNjb3JlIiwiTGFiZWwiLCJUYXJnZXRTY29yZSIsIlRpbWUiLCJDaGVja3BvaW50IiwiUHJvcE5vZGUiLCJpdGVtQXJlYSIsIm1hbmFnZXIiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImZvckVhY2giLCJpdGVtIiwiX25hbWUiLCJlbWl0SG9vayIsIk1hc2siLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJDbG9zZU1hc2siLCJiaW5kIiwiZW1pdEhvb2tCdG4iLCJib29tTnVtYmVyIiwibGlxdWlkTnVtYmVyIiwic2NyZWVuQWRhcHRlciIsIlJlc2V0SW5mbyIsIlN0YXJ0VGltZSIsIlNldExldmVsIiwiQ3JlYXRlVGFyZ2V0U2NvcmUiLCJDcmVhdGVJdGVtIiwicmVkUGFjayIsImxldmVsSW5mbyIsImV4dGFyUmVkUGFjayIsInBhcnNlSW50IiwiZ2V0SXRlbSIsIm5lZWRTY29yZSIsIm5lZWRMZXZlbCIsInN0cmluZyIsInNjb3JlIiwiaWQiLCJhcnIiLCJyZG0iLCJjcmVhdGVSYW5kbSIsIkxvdHRlcnlQcm9wIiwiaWNvbiIsIkxvb2tWaWRlb0dldEF3YXJkIiwic2VuZERhdGEiLCJhZCIsIkxvdHRlcnlBd2FyZCIsImF3YXJkIiwid2VhcG9uIiwiaSIsIm51bSIsImNsb2NrTnVtYmVyIiwiaGFuZGJvb2tOdW1iZXIiLCJjbG92ZXJOdW1iZXIiLCJsZW5ndGgiLCJjYW52YXMiLCJDYW52YXMiLCJ3aW5TaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwid2lkdGgiLCJmaXRIZWlnaHQiLCJmaXRXaWR0aCIsIkhvb2tSb1RhdGUiLCJhbmdsZSIsIk1hdGgiLCJhYnMiLCJjaGlsZHJlbiIsImNoaWxkcmVuQ291bnQiLCJIYW5kbGUiLCJTdG9wSG9va01vdmUiLCJQdWxsQmFja0hvb2siLCJwbGF5IiwiU2V0U3BlZWQiLCJvdGhlciIsInByb21vdGUiLCJJdGVtQXR0ciIsIm5vZGUiLCJuYW1lIiwidmljdG9yeSIsInRpbWVyIiwidW5zY2hlZHVsZSIsIkdhbWVPdmVyIiwic2NoZWR1bGUiLCJMZXZlbCIsImN1cnJlbnRfc2NvcmUiLCJzdGFnZSIsIm5ld0l0ZW1BcnIiLCJuZXdDcmVhdGVDYWxjIiwiaW5zdGFudGlhdGUiLCJYWSIsInJhbmRvbVhZIiwicGFyZW50IiwiZXh0cmEiLCJzZXRQb3NpdGlvbiIsImJvb20iLCJhZGRDaGlsZCIsInYyIiwieCIsInkiLCJ6SWRleCIsIm1vdmVNb3VzZSIsIm1vdXNlIiwiX21vdmVUaW1lIiwidGltZSIsInR3ZWVuIiwidG8iLCJzdGFydCIsInNjaGVkdWxlT25jZSIsInNjYWxlWCIsInJlcGVhdEZvcmV2ZXIiLCJkZWxheSIsImNhbGwiLCJjcmVhdGVJdGVtQXJyIiwic3BsaXQiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIk51bWJlciIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwiX19zY29yZSIsIl9rZXkiLCJmbG9vciIsImtleSIsImsiLCJncm91bmRZIiwicmFuZFgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsInJlY3QiLCJSZWN0IiwiaXNQZW5nIiwibiIsImJvdW5kaW5nQm94IiwiZ2V0Qm91bmRpbmdCb3giLCJpbnRlcnNlY3RzIiwiZGVzdHJveVRudCIsIlRudCIsImdldFBvc2l0aW9uIiwiY29udGFpbnMiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsIm0iLCJzdG9wIiwiaXRlbXMiLCJBZGRQcm9wIiwiQWRkU2NvcmUiLCJSZW1vdmVJdGVtIiwibGF5b3V0IiwiaXNOYU4iLCJzaG93TWVzdGVyeSIsImFkZEFuaW0iLCJzaG93TXVzaWMiLCJhdWRpb0VuZ2luZSIsImV4dHJhUmVkUGFjayIsIm1lc3RlcnkiLCJzdG9wQWxsQWN0aW9ucyIsIm9wYWNpdHkiLCJhZGQiLCJTaG93TWFzayIsIkZhaWwiLCJTdWNjZXNzIiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJzb3J0TGlzdCIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJzdHJUb0ppYU1pIiwidXNlckluZm8iLCJzYzEiLCJoZXhfbWQ1Iiwic2lnbiIsIlJlbG9hZCIsImxvYWRTY2VuZSIsIk5leHQiLCJFeGl0R2FtZSIsIkF3YXJkVmlkZW8iLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQSxJQUFNQSxJQUFJLEdBQUdDLE9BQU8sQ0FBQyxNQUFELENBQXBCOztBQUNBQyxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxDQUROO0FBRUhDLE1BQUFBLFdBQVcsRUFBRTtBQUZWLEtBRkM7QUFNUjtBQUNBQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxDQURBO0FBRVRELE1BQUFBLFdBQVcsRUFBRTtBQUZKLEtBUEw7QUFXUjtBQUNBRSxJQUFBQSxTQUFTLEVBQUU7QUFDUCxpQkFBUyxFQURGO0FBRVBGLE1BQUFBLFdBQVcsRUFBRTtBQUZOLEtBWkg7QUFnQlI7QUFDQUcsSUFBQUEsT0FBTyxFQUFFO0FBQ0wsaUJBQVMsRUFESjtBQUVMQyxNQUFBQSxJQUFJLEVB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QUwsR0FBYyxDQUFwRCxDQUFqQjtBQUNBdUcsVUFBQUEsSUFBSSxDQUFDM0ksTUFBTCxHQUFjLElBQWQ7QUFDQTJJLFVBQUFBLElBQUksQ0FBQzNHLFlBQUwsQ0FBa0IvRCxFQUFFLENBQUNnRSxTQUFyQixFQUFnQ21GLElBQWhDLENBQXFDLE1BQXJDOztBQUVBK0ksVUFBQUEsS0FBSyxDQUFDekQsT0FBTjs7QUFDQXlELFVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBSzlSLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBSTBDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FqRCxVQUFBQSxJQUFJLENBQUM2QyxXQUFMLENBQWlCLG9CQUFqQixFQUF1QyxNQUF2QyxFQUErQ0csT0FBL0M7QUFDSDs7QUFDRDs7QUFDSjtBQUNJO0FBcENSO0FBc0NIO0FBenBDSSxDQUFUIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyIvL+W8leWFpSDlvpfliIbnrYnphY3nva4g5aSq6ZW/IOaJgOS7peaNouS4quaWh+S7tuWGmVxuaW1wb3J0IEl0ZW1BdHRyIGZyb20gJy4vQ29uZmlnJztcbmltcG9ydCBMZXZlbCBmcm9tICcuL0xldmVsJztcbmNvbnN0IGh0dHAgPSByZXF1aXJlKFwiSHR0cFwiKTtcbmNjLkNsYXNzKHtcbiAgICBleHRlbmRzOiBjYy5Db21wb25lbnQsXG5cbiAgICBwcm9wZXJ0aWVzOiB7XG4gICAgICAgIC8v6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAzLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q5peL6L2s6YCf5bqmXG4gICAgICAgIHJvdGF0ZVNwZWVkOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDml4vovazpgJ/luqYnXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6IyD5Zu0XG4gICAgICAgIEhvb2tSYW5nZToge1xuICAgICAgICAgICAgZGVmYXVsdDogNzAsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOinkuW6puiMg+WbtCdcbiAgICAgICAgfSxcbiAgICAgICAgLy/miYDmnInnmoRwcmVmYWIg6L+Z56eN5pa55byP5piv5ZCM5q2l55qEIOS7o+eggeavlOi+g+WlveWGmSDlsLHmmK/pmr7mi5ZcbiAgICAgICAgUHJlZmFiczoge1xuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWJcbiAgICAgICAgfSxcbiAgICAgICAgSW5pdFRpbWU6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEwLFxuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOinpueisOWIsOeJqeWTgeeahOWjsOmfs1xuICAgICAgICBDb2xsaXNpb25BdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy/liqDliIbnmoTlo7Dpn7NcbiAgICAgICAgQWRkU2Nyb2VBdWRpbzoge1xuICAgICAgICAgICAgdHlwZTogY2MuQXVkaW9DbGlwLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgLy8g6YGT5YW355qE57q555CGXG4gICAgICAgIFByb3BTcHJpdGVGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEJvb206IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYixcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIEhvb2tGcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIEhlcm9GcmFtZXM6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH0sXG4gICAgICAgIExvdHRlcnlGcmFtc2U6IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgZGVmYXVsdDogW10sXG4gICAgICAgIH1cbiAgICB9LFxuXG4gICAgLy8gTElGRS1DWUNMRSBDQUxMQkFDS1M6XG5cbiAgICBvbkxvYWQoKSB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3lp4vljJZcbiAgICAgICAgICovXG4gICAgICAgIHRoaXMuaW5pdCgpO1xuXG4gICAgICAgIC8v5Yqg6L296aaW6aG16LWE5rqQXG4gICAgICAgIGNjLmRpcmVjdG9yLnByZWxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIHNldEd1aWRlKCkge1xuICAgICAgICBsZXQgaW5kZXggPSB0aGlzLmd1aWRlSW5kZXg7XG4gICAgICAgIGlmIChpbmRleCA8PSAzKSB7XG4gICAgICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKVxuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV9cIiArIGluZGV4KS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIG5leHRHdWlkZShlLCBtc2cpIHtcbiAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJyk7XG4gICAgICAgIGxldCBndWlkZV8xID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8xXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMiA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKTtcbiAgICAgICAgbGV0IGd1aWRlXzMgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIik7XG4gICAgICAgIGd1aWRlXzEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGd1aWRlXzMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmIChtc2cgPT09IFwiMlwiKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAyKTtcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMlwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gXCIzXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDMpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8zXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjRcIikge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDQpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGhpZGVOZWVkTGF5ZXIoKSB7XG4gICAgICAgIC8vIOWmguaenOW8gOWni+a4uOaIjyDpgqPkuYjliLfmlrDkuIDkuIvpgZPlhbfmlbDmja5cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZBcbiAgICAgICAgdGhpcy5Ib29rID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lci9Ib29rJyk7XG4gICAgICAgIC8v6I635Y+W6ZKp5a2Q5Yid5aeL6ZW/5bqmXG4gICAgICAgIHRoaXMuSG9va0hlaWdodCA9IHRoaXMuSG9vay5oZWlnaHQ7XG4gICAgICAgIC8v5pS+5LiL6ZKp5a2Q5byA5YWzIDAg5YGc5q2iIDEg5Y+R5bCEIDLmi4nlm55cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgLy8g5Yid5aeL5YyW55+/5bel55qE57K+54G15binXG4gICAgICAgIHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhlcm9GcmFtZXNbMF07XG4gICAgICAgIC8v5b6X5YiG57Sv6K6hXG4gICAgICAgIHRoaXMuU2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvU2NvcmUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+mAmuWFs+ebruagh+WIhuaVsFxuICAgICAgICB0aGlzLlRhcmdldFNjb3JlID0gY2MuZmluZCgnQ2FudmFzL1Njb3JlQW5kVGFyZ2V0L1RhcmdldCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v5YCS6K6h5pe2XG4gICAgICAgIHRoaXMuVGltZSA9IGNjLmZpbmQoJ0NhbnZhcy9DaGVja3BvaW50QW5kVGltZS9UaW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lhbPljaHmlbBcbiAgICAgICAgdGhpcy5DaGVja3BvaW50ID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL0NoZWNrcG9pbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLk5lZWRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9OZWVkTGF5ZXInKTtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvQmFja0xheWVyJyk7XG4gICAgICAgIHRoaXMuUHJvcE5vZGUgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL1Byb3AnKTtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIkxvdHRlcnlMYXllclwiKTtcbiAgICAgICAgLy/nianlk4HljLrln59cbiAgICAgICAgdGhpcy5pdGVtQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9JdGVtQXJlYScpO1xuICAgICAgICAvL+W8gOWQr+eisOaSnlxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMubWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuXG4gICAgICAgIC8v6YeN57uEcHJlZmFi5pWw57uEIOaWueS+v+afpeivolxuICAgICAgICB0aGlzLlByZWZhYiA9IHt9O1xuICAgICAgICB0aGlzLlByZWZhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuUHJlZmFiW2l0ZW0uX25hbWVdID0gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/lj5HlsITpkqnlrZDmjInpkq5cbiAgICAgICAgbGV0IGVtaXRIb29rID0gY2MuZmluZCgnQ2FudmFzL2VtaXRIb29rQnRuJyk7XG4gICAgICAgIC8v5by55Ye65qGGXG4gICAgICAgIHRoaXMuTWFzayA9IGNjLmZpbmQoJ0NhbnZhcy9NYXNrJyk7XG4gICAgICAgIC8v5ri45oiP57uT5p2f5oyJ6ZKuIOWMheaLrOi/h+WFsy/nu5PmnZ/muLjmiI9cbiAgICAgICAgdGhpcy5NYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5DbG9zZU1hc2suYmluZCh0aGlzKSk7XG4gICAgICAgIGVtaXRIb29rLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbWl0SG9va0J0bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gLTE7XG4gICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgdGhpcy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIHRoaXMuUmVzZXRJbmZvKCk7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuU2V0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVUYXJnZXRTY29yZSgpO1xuICAgICAgICB0aGlzLkNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgdGhpcy5yZWRQYWNrID0gdGhpcy5sZXZlbEluZm8ucmVkUGFjaztcbiAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgPSAwO1xuICAgICAgICAvLyDmmK/lkKbmlrDmiYvlvJXlr7xcbiAgICAgICAgdGhpcy5ndWlkZUluZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpO1xuICAgICAgICBpZiAodGhpcy5ndWlkZUluZGV4IDwgNCAmJiB0aGlzLmd1aWRlSW5kZXggPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmnInmlrDmiYvlvJXlr7zmmoLlgZzmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEd1aWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmVlZFNjb3JlID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxldCBuZWVkTGV2ZWwgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRMZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbmVlZFNjb3JlLnN0cmluZyA9IGDopoHmsYLliIbmlbDvvJoke3RoaXMubGV2ZWxJbmZvLnNjb3JlfWBcbiAgICAgICAgICAgIG5lZWRMZXZlbC5zdHJpbmcgPSBg56ysJHt0aGlzLmxldmVsSW5mby5pZH3lhbNgO1xuICAgICAgICAgICAgLy8g5oq95aWW6YCJ5YWz5Y2hXG4gICAgICAgICAgICAvLyDliY3nq6/pmo/mnLrkuIDkuKrpgZPlhbdcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICBsZXQgYXJyID0gWzEwLCAxMSwgMTNdO1xuICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMik7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGFycltyZG1dO1xuICAgICAgICAgICAgdGhpcy5Mb3R0ZXJ5UHJvcCA9IHByb3A7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuTG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMl1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzBdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBMb29rVmlkZW9HZXRBd2FyZCgpIHtcbiAgICAgICAgLy8gaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvRXhjaGFuZ2VXZWFwb25cIiwgXCJQT1NUXCIsIHtwcm9wOnRoaXMuTG90dGVyeUF3YXJkfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgIC8vICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcbiAgICAgICAgLy8gfSlcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZCxcbiAgICAgICAgICAgIFwid2VhcG9uXCI6IHRoaXMuTG90dGVyeVByb3BcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5MlwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLngrnlh7vlvIDlp4vovaznm5hcIiwgcmVzKTtcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlBd2FyZCA9IHJlcy5kYXRhLmF3YXJkO1xuICAgICAgICAgICAgdGhpcy5oaWRlTG90dGVyeUxheWVyKCk7XG5cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICBoYW5kbGVEYW9qdSgpIHtcbiAgICAgICAgLy8g6YGT5YW355qE5pWw6YeP5Li6XG4gICAgICAgIGxldCB3ZWFwb24gPSBjYy56bS5MZXZlbEluZm8ud2VhcG9uO1xuICAgICAgICAvLyBwcm9w57G75Z6LIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDEzLuiNr+awtCAxNC7kuInlj7bojYlcbiAgICAgICAgLy8g5aSE55CG6YGT5YW3IOmBk+WFt+WIhuWIq+S4uiDngrjlvLkgYm9vbU51bWJlciDml7bpkp8gY2xvY2tOdW1iZXIg55+z5YyW5omL5YaMIGhhbmRib29rTnVtYmVyIOiNr+awtCBsaXF1aWROdW1iZXIg5LiJ5Y+26I2JIGNsb3Zlck51bWJlclxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiBcIuS9k+WKm1wiLFxuICAgICAgICAgICAgXCIxMFwiOiBcIueCuOW8uVwiLFxuICAgICAgICAgICAgXCIxMVwiOiBcIuaXtumSn1wiLFxuICAgICAgICAgICAgXCIxMlwiOiBcIuefs+WMluaJi+WGjFwiLFxuICAgICAgICAgICAgXCIxM1wiOiBcIuiNr+awtFwiLFxuICAgICAgICAgICAgXCIxNFwiOiBcIuS4ieWPtuiNiVwiXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWFwb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSB3ZWFwb25baV0ubnVtIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5YW25LuW54mp5ZOB6YKj5LmI55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogd2VhcG9uW2ldLnByb3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Qcm9wXCIsIFwiUE9TVFwiLCBzZW5kRHRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi5L2/55So5oiQ5YqfLVwiLCBkYXRhW3dlYXBvbltpXS5wcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSB3ZWFwb25baV0ubnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kYm9va051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpcXVpZE51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Zlck51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUuaGVpZ2h0IC8gd2luU2l6ZS53aWR0aCA8PSA3MjAgLyAxMjgwKSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGNhbnZhcy5maXRXaWR0aCA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOmSqeWtkOaXi+i9rFxuICAgICAqL1xuICAgIEhvb2tSb1RhdGUoKSB7XG4gICAgICAgIGlmICh0aGlzLkhvb2tTdGF0ZSkgcmV0dXJuO1xuXG4gICAgICAgIC8v6ZmQ5Yi26IyD5Zu0IOWPquiDveWcqCA3MCDkuI4gLTcwIOS5i+mXtFxuICAgICAgICBpZiAodGhpcy5Ib29rLmFuZ2xlID49IDcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gLXRoaXMucm90YXRlU3BlZWQ7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy5Ib29rLmFuZ2xlIDw9IC03MCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IE1hdGguYWJzKHRoaXMucm90YXRlU3BlZWQpO1xuICAgICAgICB9O1xuXG4gICAgICAgIHRoaXMuSG9vay5hbmdsZSArPSB0aGlzLnJvdGF0ZVNwZWVkO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2Q5oyJ6ZKu5LqL5Lu2XG4gICAgICovXG4gICAgZW1pdEhvb2tCdG4oKSB7XG4gICAgICAgIC8vVE9ETyDlgZzmraLpkqnlrZDml4vovaxcbiAgICAgICAgLy/miZPlvIAv5YWz6ZetIOmSqeWtkOW8gOWFsyDmsqHmnInmi4nlm57kuYvliY0g5b2T5YmNcG9zaXRpb24g77yBPSDliJ3lp4vkvY3nva7ml7Yg5LiN5YWB6K645pON5L2cXG4gICAgICAgIGlmICh0aGlzLkhvb2tTdGF0ZSkgcmV0dXJuO1xuXG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWPkeWwhOmSqeWtkFxuICAgICAqL1xuICAgIGVtaXRIb29rKCkge1xuICAgICAgICBzd2l0Y2ggKHRoaXMuSG9va1N0YXRlKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCArPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICAgICAgICAgIHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhlcm9GcmFtZXNbMV07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdG9wSG9va01vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaLieWbnumSqeWtkFxuICAgICAqL1xuICAgIFB1bGxCYWNrSG9vaygpIHtcbiAgICAgICAgLy/mkq3mlL7mi4nlm57pkqnlrZDliqjnlLtcbiAgICAgICAgdGhpcy5NaW5lckFuaW1hdGlvbi5wbGF5KCdoZXJvJyk7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuXG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLoja/msLTmlYjmnpzpgJ/luqblop7liqAxMCVcIilcbiAgICAgICAgICAgIHByb21vdGUgPSAxLjFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwZWVkID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXS5zcGVlZCAqIHByb21vdGUgfHwgMTA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaJgOacieWIhuaVsOS/oeaBr1xuICAgICAqL1xuICAgIFJlc2V0SW5mbygpIHtcbiAgICAgICAgLy90aGlzLnZpY3Rvcnkg5ri45oiP6IOc5Yip5aSx6LSl54q25oCBIDAgPSDmuLjmiI/kuK0gMSA9IOaIkOWKnyAyID0g5aSx6LSlXG4gICAgICAgIHRoaXMudmljdG9yeSA9XG4gICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuQ2hlY2twb2ludC5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjlgJLorqHml7ZcbiAgICAgKi9cbiAgICBTdGFydFRpbWUoKSB7XG4gICAgICAgIC8vIOaYr+WQpuWtmOWcqOaXtumSnyDlrZjlnKjml7bpkp8gdGhpcy5Jbml0VGltZSsxMOenklxuICAgICAgICBpZiAodGhpcy5jbG9ja051bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjml7bpkp/miJDlip8rMTBzXCIpXG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICAvLyB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMjBcIl1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMjVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnoa7lrprov4flhbPnm67moIfliIbmlbBcbiAgICAgKiDnm67moIfliIbmlbDmoLnmja7lhbPljaHlhbPmlbDnoa7lrpog6Zq+5bqm57Sv5Yqg546H5Li6XG4gICAgICogIOWfuuaVsCAxMDAwXG4gICAgICogIOavj+WFs+mAkuWinjUwMOWIhlxuICAgICAqIFxuICAgICAqIOacgOWkpyA1MDAw5YiGXG4gICAgICovXG4gICAgQ3JlYXRlVGFyZ2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nID0gdGhpcy5sZXZlbEluZm8uc2NvcmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOeJqeWTgSDpnIDopoHmoLnmja7nm67moIfliIbmnaXnlJ/miJAg55Sf5oiQ55qE5omA5pyJ54mp5ZOB5oC75YiG5b+F6aG75q+U55uu5qCH6L+H5YWz5YiG5pWw6auYMjAlXG4gICAgICog55Sf5oiQ55qE54mp5ZOB5pWw6YeP5ZyoIDEwLTMwXG4gICAgICovXG4gICAgQ3JlYXRlSXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1BcnIgPSB0aGlzLm5ld0NyZWF0ZUNhbGMoKTtcbiAgICAgICAgLy8g5YaZ5LiA5Liq566X5rOVIOagueaNruWIhuaVsOWFiOWwhmFyciDmjpLluo8g5oC75YiG5LiN6IO96LaF6L+H5pyA5aSn5YiG5pWwIOWmguaenOi2heS6hiDliJnku47lsI/lvIDlp4vlh4/lsJEg55u05Yiw5YiG5pWw5bCP5LqO5pyA5aSn5YiG5pWwXG4gICAgICAgIC8v55Sf5oiQ55u45bqU55qEUHJmYWJcbiAgICAgICAgY29uc29sZS5sb2coXCJpdGVtQXJyPVwiLG5ld0l0ZW1BcnIpO1xuICAgICAgICBuZXdJdGVtQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW2l0ZW0ubmFtZV0pO1xuICAgICAgICAgICAgbGV0IFhZID0gdGhpcy5yYW5kb21YWShub2RlKTtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiWFk9XCIsWFksaXRlbSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICBpZiAoaXRlbS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvcCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXh0cmEgPSBpdGVtLnByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKFhZKTtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiVG50XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQm9vbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgIGJvb20ubmFtZSA9IFwidG50Qm9vbVwiO1xuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIoWFkueCwgWFkueSAtIDIxOCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuYm9vbSA9IGJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5uYW1lID09PSBcIk1vdXNlXCIgfHwgaXRlbS5uYW1lID09PSBcIkRyaWxsTW91c2VcIikge1xuICAgICAgICAgICAgICAgIG5vZGUueklkZXggPSAxO1xuICAgICAgICAgICAgICAgIHRoaXMubW92ZU1vdXNlKG5vZGUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOeUn+aIkOeahOeJqeWTgeaYr+WPr+WKqOeahFxuICAgIG1vdmVNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyDlhYjlsIbogIHpvKDnp7vliqjliLDmnIDlj7Povrkg5pe26Ze05Li6NjAwL+i3neemuyo1XG4gICAgICAgIGxldCBfbW92ZVRpbWUgPSAxMFxuICAgICAgICBsZXQgdGltZSA9IChwYXJzZUludCgzMDAgLSBtb3VzZS54KSAvIDYwMCkgKiBfbW92ZVRpbWVcbiAgICAgICAgY2MudHdlZW4obW91c2UpLnRvKHRpbWUsIHsgeDogMzAwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8g546w5Zyo5byA5aeLIOiAgem8oOWBmuinhOW+i+i/kOWKqOWFiOWwhuiAgem8oOWPjei9rFxuICAgICAgICAgICAgaWYobW91c2UubmFtZSE9PVwiXCIpe1xuICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG1vdXNlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oX21vdmVUaW1lLCB7IHg6IC0zMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfSkudG8oX21vdmVUaW1lLCB7IHg6IDMwMCB9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Uuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgfSkpLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSArIDEpXG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5XjgILjgILkuIDlj6rmnInkuIDkuKrmgLvmlbDph48g5Y+v5Lul5b6X5YiwIOWQhOS4queJqeWTgeeahOaVsOmHj1xuICAgIG5ld0NyZWF0ZUNhbGMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVJdGVtQXJyID0gW107XG4gICAgICAgIC8vIOWFiOeUn+aIkOe6ouWMhei3n+elnuenmOeJqeWTgVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCBleHRyYSA9IHRoaXMubGV2ZWxJbmZvLmV4dHJhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIDDmmK/nuqLljIUg5Yib5bu65LiA5Liq57qi5YyFXG4gICAgICAgICAgICBpZiAoZXh0cmFbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IDAuMVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLl9hcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0cmFbMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBfcHJvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56We56eY54mp5ZOBIOWFiOmaj+acuuWHuueJqeWTgSDmmK/lkKbmnInkuInlj7bojYkg5aaC5p6c5pyJIOiNr+awtOeahOmaj+acuuamgueOh+WinuWKoFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsb3Zlck51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi54K45by5XCIsIFwiM+WFg+e6ouWMhVwiLCBcIjXlhYPnuqLljIVcIiwgXCLoja/msLRcIiwgXCLoja/msLRcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBybWQgPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBfcHJvcCA9IGFycltybWRdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeXN0ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8gOWHuueahOe6ouWMhemHkeminVxuICAgICAgICAgICAgICAgICAgICBcInByb3BcIjogX3Byb3BcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5ib29tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxJbmZvLmJvb207IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG50XCIsXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7np6/liIYg55Sf5oiQ5a+55bqU5Liq5pWwXG4gICAgICAgIGlmICghdGhpcy5sZXZlbEluZm8uZ29vZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmxldmVsSW5mby5nb29kLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgLy8gbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbEluZm8ubWF4U2NvcmU7XG4gICAgICAgIGxldCBzY29yZUFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfaW5mbyA9IGluZm9baV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBfaW5mb1swXTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKF9pbmZvWzFdKVxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuY3JlYXRlQnlUeXBlKHR5cGUsIHBlcmNlbnQpO1xuICAgICAgICAgICAgc2NvcmVBcnIgPSBbLi4uc2NvcmVBcnIsIC4uLm5ld0Fycl1cbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbnp6/liIbmlbDnu4TmjpLluo9cbiAgICAgICAgbGV0IF9zY29yZUFyciA9IHNjb3JlQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPCBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiuoeeul+aJgOaciWFycuS4reeahOWIhuaVsOaYr+S4jeaYr+i2hei/hyDmnKzlhbPnmoTmnIDlpKflgLwg5aaC5p6c6LaF6L+H6YKj5LmI5LuO5ZCO5b6A5YmN6K6h566X5YC8XG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Njb3JlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2NvcmUgKz0gX3Njb3JlQXJyW2ldLnNjb3JlO1xuICAgICAgICAgICAgaWYgKF9zY29yZSA8PSB0b3RhbFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goX3Njb3JlQXJyW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLm5ld0Fycl07XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY3JlYXRlSXRlbUFycj1cIixjcmVhdGVJdGVtQXJyKTtcblxuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICB9LFxuICAgIC8vIOagueaNruenr+WIhui3n+exu+Wei+eUn+aIkOaVsOmHj25hbWVcbiAgICBjcmVhdGVCeVR5cGUodHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+efs+WdlyDmmK/lkKbmnInljJbnn7PmiYvlhowg5aaC5p6c5pyJIOefs+WktOeahOS7t+WAvOaPkOWNhzIwJSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRib29rTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55+z5YyW5omL5YaM5L2/55So5oiQ5Yqf55+z5aS055qE5Lu35YC85o+Q5Y2HMjAlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByb21vdGUgPSAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJTdG9uZS1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbMjAsIDMwLCA0MF07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWdbcmRtXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUgKyByZG0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHNjb3JlQ2lnW3JkbV0gKiBwcm9tb3RlXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+m7hOmHkVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiR29sZC1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN56ev5YiG55qE5pyA5aSn5YC85Yqo5oCB55Sf5oiQ5pWw57uEXG4gICAgICAgICAgICAgICAgICAgIGxldCBfX3Njb3JlID0gc2NvcmUgLSBfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3Njb3JlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSBbNTAsIDEwMCwgMTUwLCAyMDAsIDMwMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2tleSA9IE1hdGguZmxvb3IoX19zY29yZSAvIDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IF9rZXkgPiA0ID8gNCA6IF9rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5OyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZy5wdXNoKDUwICogKDEgKyBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJzY29yZUNpZy0tLS0tXCIsc2NvcmVDaWcsXCItLS0tLS0tLS0tLVwiLF9fc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCBzY29yZUNpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQ2lnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+mSu+efs1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiRHJpbGxcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNDAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwienNcIjpcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkRyaWxsTW91c2VcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNzAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNzAwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwic1wiOlxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiTW91c2VcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNTA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA1MFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/npZ7np5jnianlk4FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgLSBfc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSAtIF9zY29yZSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZyA9IHRoaXMuY3JlYXRlUmFuZG0oMzAsIHNjb3JlIC0gX3Njb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiBzY29yZUNpZ1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmaj+acuuWdkOaghyDliKTmlq3ov5nkuKrlnZDmoIfkuqfnlJ/nmoRyZWN05piv5ZCm6Lef5YW25LuW55qE5omA5pyJ55qE54mp5ZOB55qEcmVjdOebuOaOpeinpiDlpoLmnpzmsqHmnInov5Tlm57lnZDmoIcg5aaC5p6c5o6l6Kem6YeN5paw6ZqP5py6XG4gICAgICovXG4gICAgcmFuZG9tWFkoaXRlbSkge1xuICAgICAgICAvL3ggPSDlsY/luZXlrr3luqYgLyAyICog6ZqP5py65pWwXG4gICAgICAgIC8veSA9IOWcsOW5s+mdouS9jee9riArIOmaj+acuuaVsGNjLnJhbmRvbTBUbzEoKSAr6auY5bqm6IyD5Zu077yI5Y+v5Lul6K+05pivWeeahOacgOWwj+eCue+8iVxuICAgICAgICAvL+WcsOW5s+mdouS9jee9riA9IOWcsOmdonkgKyDlnLDpnaIg6auY5bqmIC8gMlxuICAgICAgICAvLyAtIDMw5piv5Zug5Li654mp5ZOB6ZSa54K55Zyo5Lit6Ze05L2N572uIOiuvue9ruWdkOagh+WIsOiMg+WbtOWumueCueeahOaXtuWAmSDkvJrmnInpg6jliIbotoXlh7pcbiAgICAgICAgbGV0IGdyb3VuZFkgPSB0aGlzLml0ZW1BcmVhLnkgKyB0aGlzLml0ZW1BcmVhLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgLy8g6ZqP5py655Sf5oiQ55qE5LiA5Liq5Z2Q5qCHXG4gICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KHBvcy54IC0gaXRlbS53aWR0aCAvIDIsIHBvcy55IC0gaXRlbS5oZWlnaHQgLyAyLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgaXNQZW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgaWYgKG4ubmFtZSA9PT0gXCJNb3VzZVwiIHx8IG4ubmFtZSA9PT0gXCJEcmlsbE1vdXNlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG4uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guaW50ZXJzZWN0cyhyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDkuKTogIXmnInnm7jkuqTnu6fnu63pmo/mnLpcbiAgICAgICAgICAgICAgICAgICAgLy8gdGhpcy5yYW5kb21YWShpdGVtKTtcbiAgICAgICAgICAgICAgICAgICAgaXNQZW5nID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlzUGVuZykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJhbmRvbVhZKGl0ZW0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g54K45by56IyD5Zu055qE54mp5ZOB6L+b6KGM6ZSA5q+BXG4gICAgICogQHBhcmFtIHtjYy5Ob2RlfSBUbnRcbiAgICAgKiBAcmV0dXJucyBcbiAgICAgKi9cbiAgICBkZXN0cm95VG50KFRudCkge1xuICAgICAgICAvLyDpgY3ljoZ0aGlzLml0ZW1BcmVh5YaF5omA5pyJ55qE6IqC54K5IOW9k+iKgueCueeahOS4reW/g+iKgueCueWcqOeCuOW8ueWGhSDliJnplIDmr4FcbiAgICAgICAgZm9yIChsZXQgaSA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgIGxldCBuID0gdGhpcy5pdGVtQXJlYS5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChuICE9PSBUbnQpIHtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IFRudC5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBuLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeUn+aIkG4tbemaj+acuuaVsFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWFs+mXree7s+WtkOeKtuaAgVxuICAgICAqL1xuICAgIFN0b3BIb29rTW92ZSgpIHtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ID0gdGhpcy5Ib29rSGVpZ2h0O1xuICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnN0b3AoJ2hlcm8nKTtcbiAgICAgICAgdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSGVyb0ZyYW1lc1swXTtcbiAgICAgICAgLy/ph43nva7lj5HlsITpkqnlrZDpgJ/luqZcbiAgICAgICAgdGhpcy5zcGVlZCA9IDY7XG4gICAgICAgIHRoaXMuSG9vay5nZXRDaGlsZEJ5TmFtZShcImhvb2tfMVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSG9va0ZyYW1lc1swXVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5aSE55CG5ouJ5Zue55qE54mp5ZOB77yM5Yig6Zmk54mp5ZOB5Lul5Y+K5re75Yqg5b6X5YiGXG4gICAgICovXG4gICAgSGFuZGxlKGl0ZW1zKSB7XG4gICAgICAgIHRoaXMuQWRkUHJvcChpdGVtcyk7XG4gICAgICAgIHRoaXMuQWRkU2NvcmUoaXRlbXMpO1xuICAgICAgICB0aGlzLlJlbW92ZUl0ZW0oaXRlbXMpO1xuICAgICAgICAvLyDliKTmlq3mmK/lkKbov5jmnInnianlk4HlnKjlnLDlm77kuIog5aaC5p6c5rKh5pyJ6YKj5LmI57uT566XIOe7k+adn1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIC8vIOWcsOWbvueJqeWTgea2iOWksSDnu5PnrpdcbiAgICAgICAgICAgIC8vIHRvZG9cbiAgICAgICAgICAgIHRoaXMuR2FtZU92ZXIoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vbVwiKSkge1xuICAgICAgICAgICAgbGV0IGJvb20gPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpXG4gICAgICAgICAgICBib29tLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgIGJvb20uZGVzdHJveSgpO1xuICAgICAgICAgICAgYm9vbSA9IG51bGw7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOiwg+aVtOeOsOacieeahOeCuOW8ueeahOeOsOWunuaViOaenFxuICAgIGFkanVzQm9vbUxheW91dCgpIHtcbiAgICAgICAgbGV0IGxheW91dCA9IHRoaXMuUHJvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJMYXlvdXRcIik7XG4gICAgICAgIGxheW91dC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBpZiAodGhpcy5ib29tTnVtYmVyID49IDIpIHtcbiAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlciA9IDI7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBib29tID0gbGF5b3V0LmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKGkgPD0gdGhpcy5ib29tTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6I635b6X6YGT5YW3XG4gICAgICovXG4gICAgQWRkUHJvcChpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmIChpdGVtc1swXS5uYW1lID09PSBcIk15c3RlcnlcIikge1xuICAgICAgICAgICAgbGV0IHByb3AgPSBpdGVtc1swXS5leHRyYTtcbiAgICAgICAgICAgIGlmIChpc05hTihwcm9wKSkge1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocHJvcCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwi54K45by5XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYWRqdXNCb29tTGF5b3V0KCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDApXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjPlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCI15YWD57qi5YyFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDIpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gNTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwi6I2v5rC0XCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDMpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/np6/liIZcbiAgICAgICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IHBhcnNlSW50KHRoaXMuU2NvcmUuc3RyaW5nKSArIChwcm9wIHx8IDApO1xuICAgICAgICAgICAgICAgIHRoaXMuY3VyU2NvcmUgKz0gKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRBbmltKFwic2NvcmVcIiwgcHJvcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSBpZiAoaXRlbXNbMF0ubmFtZSA9PT0gXCJSZWRcIikge1xuICAgICAgICAgICAgLy8g6ZqP5py6My045Z2X6ZKxIDLkvY3mnInmlYjlsI/mlbBcbiAgICAgICAgICAgIGxldCBleHRyYVJlZFBhY2sgPSAodGhpcy5jcmVhdGVSYW5kbSgzMDAsIDgwMCkpIC8gMTAwO1xuICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gZXh0cmFSZWRQYWNrO1xuICAgICAgICAgICAgdGhpcy5hZGRBbmltKFwicmVkXCIsIGV4dHJhUmVkUGFjayk7XG4gICAgICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBzaG93TWVzdGVyeSh0eXBlKSB7XG4gICAgICAgIC8vIFtcIueCuOW8uVwiLFwiM+WFg+e6ouWMhVwiLFwiNeWFg+e6ouWMhVwiLFwi6I2v5rC0XCJdXG4gICAgICAgIGxldCBtZXN0ZXJ5ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIk1lc3RlcnlcIik7XG4gICAgICAgIG1lc3RlcnkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgbWVzdGVyeS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuUHJvcFNwcml0ZUZyYW1lc1t0eXBlXTtcbiAgICAgICAgbWVzdGVyeS5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBjYy50d2VlbihtZXN0ZXJ5KS50bygyLCB7IHk6IG1lc3RlcnkueSArIDEwMCwgb3BhY2l0eTogMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIG1lc3Rlcnkub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIG1lc3RlcnkueSAtPSAxMDA7XG4gICAgICAgICAgICBtZXN0ZXJ5LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yig6Zmk54mp5ZOBXG4gICAgICovXG4gICAgUmVtb3ZlSXRlbShpdGVtcykge1xuICAgICAgICBpdGVtcy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgaWYgKGl0ZW0pIHtcbiAgICAgICAgICAgICAgICBpdGVtLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5re75Yqg5b6X5YiGXG4gICAgICovXG4gICAgQWRkU2NvcmUoaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtc1swXSkgcmV0dXJuO1xuICAgICAgICBpZiAoIWl0ZW1zWzBdLnNjb3JlKSByZXR1cm47XG4gICAgICAgIC8vIGxldCBzY29yZUNvbiA9IEl0ZW1BdHRyW2l0ZW1zWzBdLm5hbWVdIHx8IHt9O1xuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IHBhcnNlSW50KHRoaXMuU2NvcmUuc3RyaW5nKSArIChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgdGhpcy5jdXJTY29yZSArPSAoaXRlbXNbMF0uc2NvcmUgfHwgMCk7XG4gICAgICAgIC8v5pKt5pS+5b6X5YiG6Z+z5pWIXG4gICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgfVxuICAgICAgICAvLyDlop7liqDkuIDkuKrlop7liqDnp6/liIbpo5jlkJEtLS0+U2NvcmXkvY3nva7ngrnliqjnlLtcbiAgICAgICAgdGhpcy5hZGRBbmltKFwic2NvcmVcIiwgaXRlbXNbMF0uc2NvcmUpXG4gICAgfSxcbiAgICAvLyDlgZrkuIDkuKrlop7liqDnp6/liIbngrnliqjnlLtcbiAgICBhZGRBbmltKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhZGQgPSBudWxsO1xuICAgICAgICBpZiAodHlwZSA9PT0gXCJzY29yZVwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkU2NvcmVcIik7XG4gICAgICAgIH0gZWxzZSBpZiAodHlwZSA9PT0gXCJyZWRcIikge1xuICAgICAgICAgICAgYWRkID0gdGhpcy5TY29yZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkZFJlZFwiKTtcbiAgICAgICAgfVxuICAgICAgICBhZGQuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSBcIitcIiArIHNjb3JlO1xuICAgICAgICBhZGQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgYWRkLm9wYWNpdHkgPSAwO1xuICAgICAgICBhZGQueSA9IC0xMzI7XG4gICAgICAgIGNjLnR3ZWVuKGFkZCkudG8oMC4xLCB7IG9wYWNpdHk6IDI1NSB9KS50bygxLCB7IHk6IDQyIH0pLnRvKDAuMSwgeyBvcGFjaXR5OiAwIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaYvuekuk1hc2sgdmljdG9yeT0wIHZpY3Rvcnk9MeiDnOWIqSB2aWN0b3J5PTLlpLHotKVcbiAgICAgKi9cbiAgICBTaG93TWFzaygpIHtcbiAgICAgICAgLy/mmL7npLrlvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKVxuICAgICAgICBsZXQgRmFpbCA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIkZhaWxcIik7XG4gICAgICAgIGxldCBTdWNjZXNzID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgRmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6K6+572u55uu5qCH5YaF5a65XG4gICAgICAgICAgICBsZXQgbGJsID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6YCB5q+P5pel5Lu75Yqh6K+35rGCXG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pyq6aKG5Y+WXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxibC5zdHJpbmcgPSBg5q+P5pel5Lu75Yqh6L6+5oiQ5p2h5Lu277yM55yL5bm/5ZGKJHtpdGVtLmN1cnJfYWR9Lyske2l0ZW0ubmVlZF9hZH0s6ZyA6KaB6YCa5YWzJHtpdGVtLmN1cnJfcGFzc19zdGFnZX0vKyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V9YFxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreWQhOenjeadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreeUqOaIt+WFs+WNoeadoeS7tlxuICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfcGFzc19zdGFnZSA8IGl0ZW0ubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWFs+WNoeetiee6p+Wwj+S6jumcgOimgeWFs+WNoeetiee6p1xuICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOmAmuWFsyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V95YWz5ZCO5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFs+WNoeetiee6p+i+vuaIkCDliKTmlq3nrKzkuozmnaHku7YgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfc2lnbl9pbiA8IGl0ZW0ubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWujOaIkOS7iuaXpeetvuWIsOWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfYWQgPCBpdGVtLm5lZWRfYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWGjeeciyR7aXRlbS5uZWVkX2FkIC0gaXRlbS5jdXJyX2FkfeS4quinhumikeWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgYXdyYWQgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwiYXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3cmFkLnN0cmluZyA9IGDlpZblirHnuqLljIUrJHt0aGlzLnJlZFBhY2t9YDtcbiAgICAgICAgICAgIGxldCBleHRhdEF3YXJkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhQXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dGFyUmVkUGFjaykge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHt0aGlzLmV4dGFyUmVkUGFja31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5Y+R6YCB5pWw5o2uIHJlZF9wYWNrOue6ouWMhSBzY29yZTrliIbmlbAgdHPvvJrml7bpl7TmiLMgc2lnbiBNRDXmlbDmja5cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiYm9tYlwiOiB0aGlzLmJvb21OdW1iZXIgKyAxLC8v54K45by55Liq5pWwXG4gICAgICAgICAgICAgICAgXCJwb3Rpb25cIjogdGhpcy5saXF1aWROdW1iZXIsLy/oja/msLRcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHRoaXMuY3VyU2NvcmUsLy/liIbmlbBcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTaWduRGF0YShzZW5kRGF0YSk7XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3PpgJrlhbPmiJDlip/ov5Tlm57kv6Hmga9cIiwgcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWN0b3J5ID09PSAyKSB7XG4gICAgICAgICAgICBGYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDpgJrlhbPlpLHotKXkuI3nlKjlkYror4nmnI3liqHlmahcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLk1hc2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgY3JlYXRlU2lnbkRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBzb3J0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT0gXCJzaWduXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc29ydExpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvcnRMaXN0LnNvcnQoKTtcbiAgICAgICAgdmFyIHN0clRvSmlhTWkgPSBcIlwiO1xuICAgICAgICBzb3J0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHN0clRvSmlhTWkgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIGRhdGFba2V5XTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHN0clRvSmlhTWkgPSBcInRva2VuPVwiICsgY2Muem0udXNlckluZm8uc2MxICsgc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gdmFyIG5vSmlhTWkgPSBzdHJUb0ppYU1pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuacquWKoOWvhuWJjT1cIixzdHJUb0ppYU1pKVxuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yqg5a+G5ZCOPVwiLHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI/vvIzlhbPpl63lvLnlh7rmoYZcbiAgICAgKiDlpoLmnpzmmK/muLjmiI/pgJrlhbPljp/lm6DogIzmiZPlvIDnmoTlvLnlh7rmoYbkuI3kuojnkIbnnaxcbiAgICAgKi9cbiAgICBDbG9zZU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDph43njqnmnKzlhbNcbiAgICAgKi9cbiAgICBSZWxvYWQoKSB7XG4gICAgICAgIC8v5YGc5q2i5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICAvL+mHjei9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57un57ut5LiL5LiA5YWzXG4gICAgICovXG4gICAgTmV4dCgpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudmljdG9yeSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZU1hc2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyDmiJDlip/ov4flhbPorrDlvZXlvZPliY3nmoTliIbmlbBcbiAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWxvYWQoKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvL+mAgOWHuua4uOaIj1xuICAgICAgICAgICAgICAgIHRoaXMuRXhpdEdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIEF3YXJkVmlkZW8oZSkge1xuICAgICAgICBjb25zb2xlLmxvZyhcIueci+inhumikeW+l+WlluWKsVwiKTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJyZWRfcGFja1wiOiBwYXJzZUludCgodGhpcy5yZWRQYWNrICsgdGhpcy5leHRhclJlZFBhY2spICogMTAwKSwvL+e6ouWMhVxuICAgICAgICAgICAgXCJhZFwiOmNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUGFzc0FkXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3NBZOi/lOWbnuS/oeaBr1wiLCByZXMpO1xuICAgICAgICAgICAgLy8gbGV0IGJ0bkNvbSA9IGUudGFyZ2V0LmdldENvbXBvbmVudChjYy5CdXR0b24pO1xuICAgICAgICAgICAgLy8gYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIOebtOaOpei/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5YWz5Y2h5L+h5oGvPVwiLCBjYy56bS5MZXZlbEluZm8pO1xuICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgIDlh7rmuLjmiI8g6L+U5Zue5LiK5LiA5Liq5Zy65pmvXG4gICAgICovXG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIFJlc3VtZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIGlmICh0aGlzLkhvb2tTdGF0ZSA9PT0gMikge1xuICAgICAgICAgICAgdGhpcy5NaW5lckFuaW1hdGlvbi5wbGF5KCdoZXJvJyk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOaaguWBnOW9k+WJjeeVjOmdolxuICAgIFBhdXNlR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnN0b3AoJ2hlcm8nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog6IOc5Yip5oiW5aSx6LSl6YO96KeG5Li65ri45oiP57uT5p2fXG4gICAgICovXG4gICAgR2FtZU92ZXIoKSB7XG4gICAgICAgIC8v5Yik5pat55So5oi35b6X5YiG5piv5ZCm6LaF6L+H55uu5qCH5YiGXG4gICAgICAgIGxldCBzID0gMDtcblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpID49IHBhcnNlSW50KHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nKSkge1xuICAgICAgICAgICAgcyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+a4uOaIj+Wksei0pVxuICAgICAgICAgICAgcyA9IDI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmljdG9yeSA9IHM7XG4gICAgICAgIHRoaXMuU2hvd01hc2soKTtcbiAgICB9LFxuXG4gICAgLy8gc3RhcnQgKCkge1xuXG4gICAgLy8gfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VHYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTmVlZExheWVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubW92ZU1vdXNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEhvb2soKTtcbiAgICAgICAgdGhpcy5Ib29rUm9UYXRlKCk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICB1c2VQcm9wKGUsIG1zZykge1xuICAgICAgICAvLyDlpoLmnpzmmK/ngrjlvLlcbiAgICAgICAgc3dpdGNoIChtc2cpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnirbmgIHlv4XpobvmmK/nu7PlrZDlpITkuo7og73mi4nlm57nmoTnirbmgIFcbiAgICAgICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnianlk4FcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdICYmIHRoaXMuYm9vbU51bWJlciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOeCuOW8ueWDj+acjeWKoeWZqOWPkemAgea2iOaBr1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5o+Q5YmN5YmN56uv5L2/55SoIOaYr+eUu+mdouWQjOatpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXItLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ouJ5Y6755qE54mp5ZOB55qE5L2N572uXG4gICAgICAgICAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gX25vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg54K45by55pWI5p6cXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJib29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKGNjLnYyKHBvcy54IC0gc2l6ZS53aWR0aCAvIDIsIHBvcy55IC0gc2l6ZS5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIF9ub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn0pO1xuIl19