
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