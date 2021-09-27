
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
    var _this8 = this;

    console.log("看视频得奖励");
    var pack = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack;
    var sendData = {
      "red_pack": parseInt((pack + this.extarRedPack) * 100),
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJodHRwIiwicmVxdWlyZSIsImNjIiwiQ2xhc3MiLCJDb21wb25lbnQiLCJwcm9wZXJ0aWVzIiwic3BlZWQiLCJkaXNwbGF5TmFtZSIsInJvdGF0ZVNwZWVkIiwiSG9va1JhbmdlIiwiUHJlZmFicyIsInR5cGUiLCJQcmVmYWIiLCJJbml0VGltZSIsIkNvbGxpc2lvbkF1ZGlvIiwiQXVkaW9DbGlwIiwiQWRkU2Nyb2VBdWRpbyIsIlByb3BTcHJpdGVGcmFtZXMiLCJTcHJpdGVGcmFtZSIsIkJvb20iLCJIb29rRnJhbWVzIiwiSGVyb0ZyYW1lcyIsIkxvdHRlcnlGcmFtc2UiLCJvbkxvYWQiLCJpbml0IiwiZGlyZWN0b3IiLCJwcmVsb2FkU2NlbmUiLCJzZXRHdWlkZSIsImluZGV4IiwiZ3VpZGVJbmRleCIsImd1aWRlIiwiZmluZCIsImdldENoaWxkQnlOYW1lIiwiYWN0aXZlIiwibmV4dEd1aWRlIiwiZSIsIm1zZyIsImd1aWRlXzEiLCJndWlkZV8yIiwiZ3VpZGVfMyIsInN5cyIsImxvY2FsU3RvcmFnZSIsInNldEl0ZW0iLCJSZXN1bWVHYW1lTGF5ZXIiLCJoaWRlTmVlZExheWVyIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGFuZGxlRGFvanUiLCJhZGp1c0Jvb21MYXlvdXQiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJNaW5lckFuaW1hdGlvbiIsImdldENvbXBvbmVudCIsIkFuaW1hdGlvbiIsIkhvb2siLCJIb29rSGVpZ2h0IiwiaGVpZ2h0IiwiSG9va1N0YXRlIiwiY3VyU2NvcmUiLCJwYXVzZUdhbWUiLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJuZWVkU2NvcmUiLCJuZWVkTGV2ZWwiLCJzdHJpbmciLCJzY29yZSIsImlkIiwiYXJyIiwicmRtIiwiY3JlYXRlUmFuZG0iLCJMb3R0ZXJ5UHJvcCIsImljb24iLCJMb29rVmlkZW9HZXRBd2FyZCIsInNlbmREYXRhIiwiYWQiLCJMb3R0ZXJ5QXdhcmQiLCJhd2FyZCIsIndlYXBvbiIsImkiLCJudW0iLCJjbG9ja051bWJlciIsImhhbmRib29rTnVtYmVyIiwiY2xvdmVyTnVtYmVyIiwibGVuZ3RoIiwiY2FudmFzIiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJIb29rUm9UYXRlIiwiYW5nbGUiLCJNYXRoIiwiYWJzIiwiY2hpbGRyZW4iLCJjaGlsZHJlbkNvdW50IiwiSGFuZGxlIiwiU3RvcEhvb2tNb3ZlIiwiUHVsbEJhY2tIb29rIiwicGxheSIsIlNldFNwZWVkIiwib3RoZXIiLCJwcm9tb3RlIiwiSXRlbUF0dHIiLCJub2RlIiwibmFtZSIsInZpY3RvcnkiLCJ0aW1lciIsInVuc2NoZWR1bGUiLCJHYW1lT3ZlciIsInNjaGVkdWxlIiwiTGV2ZWwiLCJzdGFnZSIsImN1cnJlbnRfc2NvcmUiLCJuZXdJdGVtQXJyIiwibmV3Q3JlYXRlQ2FsYyIsImluc3RhbnRpYXRlIiwiWFkiLCJyYW5kb21YWSIsInBhcmVudCIsImV4dHJhIiwic2V0UG9zaXRpb24iLCJib29tIiwiYWRkQ2hpbGQiLCJ2MiIsIngiLCJ5IiwibW91c2UiLCJzcGxpdCIsIm1vdXNlTnVtYmVyIiwiTnVtYmVyIiwicmFuZFgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsIm1vdmVNb3VzZSIsIkRyaWxsTW91c2VOdW1iZXIiLCJfbW92ZVRpbWUiLCJ0aW1lIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwic2NhbGVYIiwicmVwZWF0Rm9yZXZlciIsImRlbGF5IiwiY2FsbCIsImNyZWF0ZUl0ZW1BcnIiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwid2lkdGhDaWciLCJfX3Njb3JlIiwiX2tleSIsImZsb29yIiwia2V5IiwiayIsImdyb3VuZFkiLCJyZWN0IiwiUmVjdCIsImlzUGVuZyIsIm4iLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImRlc3Ryb3lUbnQiLCJUbnQiLCJfcG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWlucyIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwibSIsInN0b3AiLCJpdGVtcyIsIkFkZFByb3AiLCJBZGRTY29yZSIsIlJlbW92ZUl0ZW0iLCJsYXlvdXQiLCJpc05hTiIsInNob3dNZXN0ZXJ5IiwiYWRkQW5pbSIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwiZXh0cmFSZWRQYWNrIiwibWVzdGVyeSIsInN0b3BBbGxBY3Rpb25zIiwib3BhY2l0eSIsImFkZCIsIlNob3dNYXNrIiwiRmFpbCIsIlN1Y2Nlc3MiLCJsYmwiLCJzdGF0dXMiLCJjdXJyX3Bhc3Nfc3RhZ2UiLCJuZWVkX3Bhc3Nfc3RhZ2UiLCJjdXJyX3NpZ25faW4iLCJuZWVkX3NpZ25faW4iLCJjdXJyX2FkIiwibmVlZF9hZCIsImF3cmFkIiwiZXZlcl9wYXNzIiwiZXh0YXRBd2FyZCIsIkRhdGUiLCJnZXRUaW1lIiwiY3JlYXRlU2lnbkRhdGEiLCJzY2FsZSIsInNvcnRMaXN0IiwiaGFzT3duUHJvcGVydHkiLCJ2YWx1ZSIsInN0clRvSmlhTWkiLCJ1c2VySW5mbyIsInNjMSIsImhleF9tZDUiLCJzaWduIiwiUmVsb2FkIiwibG9hZFNjZW5lIiwiTmV4dCIsInBvd2VyIiwiRXhpdEdhbWUiLCJBd2FyZFZpZGVvIiwicGFjayIsInNlZVZpZGVvQXdhcmQiLCJ0YXJnZXQiLCJjbG9zZUxheWVyIiwicyIsInVwZGF0ZSIsImR0IiwidXNlUHJvcCIsInNob3dTaGFrZSIsImlzTmF0aXZlIiwianNiIiwiRGV2aWNlIiwidmlicmF0ZSIsIl9ub2RlIiwiY29udmVydFRvV29ybGRTcGFjZUFSIiwic2l6ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFDQTs7QUFDQTs7OztBQUZBO0FBR0EsSUFBTUEsSUFBSSxHQUFHQyxPQUFPLENBQUMsTUFBRCxDQUFwQjs7QUFDQUMsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtBQUVIQyxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsQ0FEQTtBQUVURCxNQUFBQSxXQUFXLEVBQUU7QUFGSixLQVBMO0FBV1I7QUFDQUUsSUFB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QUEzQixFQUE4QitDLEdBQUcsQ0FBQ1IsQ0FBSixHQUFRK0gsSUFBSSxDQUFDM08sTUFBTCxHQUFjLENBQXBELENBQWpCO0FBQ0F3RyxVQUFBQSxJQUFJLENBQUM1SSxNQUFMLEdBQWMsSUFBZDtBQUNBNEksVUFBQUEsSUFBSSxDQUFDNUcsWUFBTCxDQUFrQi9ELEVBQUUsQ0FBQ2dFLFNBQXJCLEVBQWdDb0YsSUFBaEMsQ0FBcUMsTUFBckM7O0FBRUF3SixVQUFBQSxLQUFLLENBQUMvRCxPQUFOOztBQUNBK0QsVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQSxlQUFLeFMsS0FBTCxHQUFhLEVBQWI7QUFDQSxjQUFJMEMsT0FBTyxHQUFHO0FBQ1ZDLFlBQUFBLElBQUksRUFBRTtBQURJLFdBQWQ7QUFHQWpELFVBQUFBLElBQUksQ0FBQzZDLFdBQUwsQ0FBaUIsb0JBQWpCLEVBQXVDLE1BQXZDLEVBQStDRyxPQUEvQztBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFwQ1I7QUFzQ0g7QUF6dENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5byV5YWlIOW+l+WIhuetiemFjee9riDlpKrplb8g5omA5Lul5o2i5Liq5paH5Lu25YaZXG5pbXBvcnQgSXRlbUF0dHIgZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IExldmVsIGZyb20gJy4vTGV2ZWwnO1xuY29uc3QgaHR0cCA9IHJlcXVpcmUoXCJIdHRwXCIpO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/pkqnlrZDpgJ/luqZcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDml4vovazpgJ/luqZcbiAgICAgICAgcm90YXRlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDojIPlm7RcbiAgICAgICAgSG9va1JhbmdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA3MCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6KeS5bqm6IyD5Zu0J1xuICAgICAgICB9LFxuICAgICAgICAvL+aJgOacieeahHByZWZhYiDov5nnp43mlrnlvI/mmK/lkIzmraXnmoQg5Luj56CB5q+U6L6D5aW95YaZIOWwseaYr+mavuaLllxuICAgICAgICBQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBJbml0VGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6Kem56Kw5Yiw54mp5ZOB55qE5aOw6Z+zXG4gICAgICAgIENvbGxpc2lvbkF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvL+WKoOWIhueahOWjsOmfs1xuICAgICAgICBBZGRTY3JvZUF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvLyDpgZPlhbfnmoTnurnnkIZcbiAgICAgICAgUHJvcFNwcml0ZUZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgQm9vbToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgSG9va0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgSGVyb0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgTG90dGVyeUZyYW1zZToge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIneWni+WMllxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgLy/liqDovb3pppbpobXotYTmupBcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgc2V0R3VpZGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3VpZGVJbmRleDtcbiAgICAgICAgaWYgKGluZGV4IDw9IDMpIHtcbiAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlX1wiICsgaW5kZXgpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dEd1aWRlKGUsIG1zZykge1xuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKTtcbiAgICAgICAgbGV0IGd1aWRlXzEgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzFcIik7XG4gICAgICAgIGxldCBndWlkZV8yID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMyA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKTtcbiAgICAgICAgZ3VpZGVfMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1zZyA9PT0gXCIyXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDIpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjNcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMyk7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiNFwiKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgNCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZU5lZWRMYXllcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5byA5aeL5ri45oiPIOmCo+S5iOWIt+aWsOS4gOS4i+mBk+WFt+aVsOaNrlxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICBwcm9wOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Qcm9wXCIsIFwiUE9TVFwiLCBzZW5kRHRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOS9k+WKm+aIkOWKn1wiKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgIC8vIOWFs+mXreeVjOmdouW8gOWni+a4uOaIj1xuICAgICAgICAgICAgdGhpcy5OZWVkTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyDngrnlh7vlvIDlp4vmuLjmiI/kuYvliY0g6YeN5paw5ZCM5q2l5LiA5LiL6YGT5YW35L+h5oGvXG4gICAgICAgICAgICB0aGlzLmhhbmRsZURhb2p1KCk7XG4gICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICBoaWRlTG90dGVyeUxheWVyKCkge1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIHNob3dCYWNrTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuQmFja0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliJ3lp4vljJYg5ZCE56eN6ZyA6KaB55qE5q+U5Y+Y6YePXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgLy/pkqnlrZDnn7/lt6VcbiAgICAgICAgdGhpcy5NaW5lciA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvTWluZXInKTtcbiAgICAgICAgLy/nn7/lt6XliqjnlLsgXG4gICAgICAgIHRoaXMuTWluZXJBbmltYXRpb24gPSB0aGlzLk1pbmVyLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pO1xuICAgICAgICAvL+iOt+WPlumSqeWtkFxuICAgICAgICB0aGlzLkhvb2sgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyL0hvb2snKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDliJ3lp4vplb/luqZcbiAgICAgICAgdGhpcy5Ib29rSGVpZ2h0ID0gdGhpcy5Ib29rLmhlaWdodDtcbiAgICAgICAgLy/mlL7kuIvpkqnlrZDlvIDlhbMgMCDlgZzmraIgMSDlj5HlsIQgMuaLieWbnlxuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICAvLyDliJ3lp4vljJbnn7/lt6XnmoTnsr7ngbXluKdcbiAgICAgICAgdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSGVyb0ZyYW1lc1swXTtcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgIHRoaXMuc2VlVmlkZW9MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZWVWaWRlb2xheWVyJylcbiAgICAgICAgLy/lvpfliIbntK/orqFcbiAgICAgICAgdGhpcy5TY29yZSA9IGNjLmZpbmQoJ0NhbnZhcy9TY29yZUFuZFRhcmdldC9TY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v6YCa5YWz55uu5qCH5YiG5pWwXG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvVGFyZ2V0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lgJLorqHml7ZcbiAgICAgICAgdGhpcy5UaW1lID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL1RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+WFs+WNoeaVsFxuICAgICAgICB0aGlzLkNoZWNrcG9pbnQgPSBjYy5maW5kKCdDYW52YXMvQ2hlY2twb2ludEFuZFRpbWUvQ2hlY2twb2ludCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuTmVlZExheWVyID0gY2MuZmluZCgnQ2FudmFzL05lZWRMYXllcicpO1xuICAgICAgICB0aGlzLkJhY2tMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrTGF5ZXInKTtcbiAgICAgICAgdGhpcy5Qcm9wTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvUHJvcCcpO1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllciA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwiTG90dGVyeUxheWVyXCIpO1xuICAgICAgICAvL+eJqeWTgeWMuuWfn1xuICAgICAgICB0aGlzLml0ZW1BcmVhID0gY2MuZmluZCgnQ2FudmFzL0l0ZW1BcmVhJyk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKeXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy/ph43nu4RwcmVmYWLmlbDnu4Qg5pa55L6/5p+l6K+iXG4gICAgICAgIHRoaXMuUHJlZmFiID0ge307XG4gICAgICAgIHRoaXMuUHJlZmFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5QcmVmYWJbaXRlbS5fbmFtZV0gPSBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WPkeWwhOmSqeWtkOaMiemSrlxuICAgICAgICBsZXQgZW1pdEhvb2sgPSBjYy5maW5kKCdDYW52YXMvZW1pdEhvb2tCdG4nKTtcbiAgICAgICAgLy/lvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnQ2FudmFzL01hc2snKTtcbiAgICAgICAgLy/muLjmiI/nu5PmnZ/mjInpkq4g5YyF5ous6L+H5YWzL+e7k+adn+a4uOaIj1xuICAgICAgICB0aGlzLk1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLkNsb3NlTWFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZW1pdEhvb2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVtaXRIb29rQnRuLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAtMTtcbiAgICAgICAgdGhpcy5saXF1aWROdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICB0aGlzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgdGhpcy5SZXNldEluZm8oKTtcbiAgICAgICAgdGhpcy5TdGFydFRpbWUoKTtcbiAgICAgICAgdGhpcy5TZXRMZXZlbCgpO1xuICAgICAgICB0aGlzLkNyZWF0ZVRhcmdldFNjb3JlKCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlSXRlbSgpO1xuICAgICAgICB0aGlzLnJlZFBhY2sgPSB0aGlzLmxldmVsSW5mby5yZWRQYWNrO1xuICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayA9IDA7XG4gICAgICAgIC8vIOaYr+WQpuaWsOaJi+W8leWvvFxuICAgICAgICB0aGlzLmd1aWRlSW5kZXggPSBwYXJzZUludChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJndWlkZVwiKSk7XG4gICAgICAgIGlmICh0aGlzLmd1aWRlSW5kZXggPCA0ICYmIHRoaXMuZ3VpZGVJbmRleCA+PSAxKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gdHJ1ZTtcbiAgICAgICAgICAgIC8vIOacieaWsOaJi+W8leWvvOaaguWBnOa4uOaIj1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuc2V0R3VpZGUoKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5OZWVkTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBuZWVkU2NvcmUgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRTY29yZVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbGV0IG5lZWRMZXZlbCA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwibmVlZExldmVsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBuZWVkU2NvcmUuc3RyaW5nID0gYOimgeaxguWIhuaVsO+8miR7dGhpcy5sZXZlbEluZm8uc2NvcmV9YFxuICAgICAgICAgICAgbmVlZExldmVsLnN0cmluZyA9IGDnrKwke3RoaXMubGV2ZWxJbmZvLmlkfeWFs2A7XG4gICAgICAgICAgICAvLyDmir3lpZbpgInlhbPljaFcbiAgICAgICAgICAgIC8vIOWJjeerr+maj+acuuS4gOS4qumBk+WFt1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIGxldCBhcnIgPSBbMTAsIDExLCAxM107XG4gICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgIGxldCBwcm9wID0gYXJyW3JkbV07XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlQcm9wID0gcHJvcDtcbiAgICAgICAgICAgIGxldCBpY29uID0gdGhpcy5Mb3R0ZXJ5TGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJpY29uXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpO1xuICAgICAgICAgICAgaWYgKHByb3AgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv54K45by5XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsyXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMF1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIExvb2tWaWRlb0dldEF3YXJkKCkge1xuICAgICAgICAvLyBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9FeGNoYW5nZVdlYXBvblwiLCBcIlBPU1RcIiwge3Byb3A6dGhpcy5Mb3R0ZXJ5QXdhcmR9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgLy8gICAgIHRoaXMuaGlkZUxvdHRlcnlMYXllcigpO1xuICAgICAgICAvLyB9KVxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkLFxuICAgICAgICAgICAgXCJ3ZWFwb25cIjogdGhpcy5Mb3R0ZXJ5UHJvcFxuICAgICAgICB9XG4gICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL0xvdHRlcnkyXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIueCueWHu+W8gOWni+i9rOebmFwiLCByZXMpO1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeUF3YXJkID0gcmVzLmRhdGEuYXdhcmQ7XG4gICAgICAgICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcblxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIGhhbmRsZURhb2p1KCkge1xuICAgICAgICAvLyDpgZPlhbfnmoTmlbDph4/kuLpcbiAgICAgICAgbGV0IHdlYXBvbiA9IGNjLnptLkxldmVsSW5mby53ZWFwb247XG4gICAgICAgIC8vIHByb3DnsbvlnosgMTAu54K45by5IDExLuaXtumSnyAxMi7nn7PljJbmiYvlhowgMTMu6I2v5rC0IDE0LuS4ieWPtuiNiVxuICAgICAgICAvLyDlpITnkIbpgZPlhbcg6YGT5YW35YiG5Yir5Li6IOeCuOW8uSBib29tTnVtYmVyIOaXtumSnyBjbG9ja051bWJlciDnn7PljJbmiYvlhowgaGFuZGJvb2tOdW1iZXIg6I2v5rC0IGxpcXVpZE51bWJlciDkuInlj7bojYkgY2xvdmVyTnVtYmVyXG4gICAgICAgIGxldCBkYXRhID0ge1xuICAgICAgICAgICAgXCIxXCI6IFwi5L2T5YqbXCIsXG4gICAgICAgICAgICBcIjEwXCI6IFwi54K45by5XCIsXG4gICAgICAgICAgICBcIjExXCI6IFwi5pe26ZKfXCIsXG4gICAgICAgICAgICBcIjEyXCI6IFwi55+z5YyW5omL5YaMXCIsXG4gICAgICAgICAgICBcIjEzXCI6IFwi6I2v5rC0XCIsXG4gICAgICAgICAgICBcIjE0XCI6IFwi5LiJ5Y+26I2JXCJcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHdlYXBvbi5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlciA9IHdlYXBvbltpXS5udW0gLSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzmmK/lhbbku5bnianlk4HpgqPkuYjnm7TmjqXkvb/nlKhcbiAgICAgICAgICAgICAgICBpZiAod2VhcG9uW2ldLm51bSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXkvb/nlKhcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBwcm9wOiB3ZWFwb25baV0ucHJvcFxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjmiJDlip8tXCIsIGRhdGFbd2VhcG9uW2ldLnByb3BdKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRib29rTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdmVyTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIHNjcmVlbkFkYXB0ZXIoKSB7XG4gICAgICAgIGxldCBjYW52YXMgPSBjYy5maW5kKFwiQ2FudmFzXCIpLmdldENvbXBvbmVudChjYy5DYW52YXMpO1xuICAgICAgICBsZXQgd2luU2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKTtcblxuICAgICAgICBpZiAod2luU2l6ZS5oZWlnaHQgLyB3aW5TaXplLndpZHRoIDw9IDcyMCAvIDEyODApIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBjYW52YXMuZml0SGVpZ2h0ID0gZmFsc2U7XG4gICAgICAgICAgICBjYW52YXMuZml0V2lkdGggPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZKp5a2Q5peL6L2sXG4gICAgICovXG4gICAgSG9va1JvVGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgLy/pmZDliLbojIPlm7Qg5Y+q6IO95ZyoIDcwIOS4jiAtNzAg5LmL6Ze0XG4gICAgICAgIGlmICh0aGlzLkhvb2suYW5nbGUgPj0gNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAtdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkhvb2suYW5nbGUgPD0gLTcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gTWF0aC5hYnModGhpcy5yb3RhdGVTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5Ib29rLmFuZ2xlICs9IHRoaXMucm90YXRlU3BlZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZDmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBlbWl0SG9va0J0bigpIHtcbiAgICAgICAgLy9UT0RPIOWBnOatoumSqeWtkOaXi+i9rFxuICAgICAgICAvL+aJk+W8gC/lhbPpl60g6ZKp5a2Q5byA5YWzIOayoeacieaLieWbnuS5i+WJjSDlvZPliY1wb3NpdGlvbiDvvIE9IOWIneWni+S9jee9ruaXtiDkuI3lhYHorrjmk43kvZxcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2QXG4gICAgICovXG4gICAgZW1pdEhvb2soKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5Ib29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5Y+R5bCE57uz5a2QXG4gICAgICAgICAgICAgICAgdGhpcy5NaW5lci5nZXRDb21wb25lbnQoY2MuU3ByaXRlKS5zcHJpdGVGcmFtZSA9IHRoaXMuSGVyb0ZyYW1lc1sxXTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmhlaWdodCA8PSB0aGlzLkhvb2tIZWlnaHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL+ajgOa1i+aYr+WQpuaLieWbnueJqeWTgVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZSh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aGlzLlN0b3BIb29rTW92ZSgpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuSG9vay5oZWlnaHQgLT0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5ouJ5Zue6ZKp5a2QXG4gICAgICovXG4gICAgUHVsbEJhY2tIb29rKCkge1xuICAgICAgICAvL+aSreaUvuaLieWbnumSqeWtkOWKqOeUu1xuICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnBsYXkoJ2hlcm8nKTtcbiAgICAgICAgLy8g5bCG6ZKp5a2Q55qE5Zu+54mH6L2s5YyWXG5cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pkqnlrZDmi4nlm57nmoTpgJ/luqZcbiAgICAgKi9cbiAgICBTZXRTcGVlZChvdGhlcikge1xuICAgICAgICAvLyDmmK/lkKbmnInoja/msLTmlYjmnpwg5aaC5p6c5pyJ6YKj5LmIc3BlZWTpgJ/luqblop7liqAxMCVcbiAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMubGlxdWlkTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiNr+awtOaViOaenOmAn+W6puWinuWKoDEwJVwiKVxuICAgICAgICAgICAgcHJvbW90ZSA9IDEuMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BlZWQgPSBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdLnNwZWVkICogcHJvbW90ZSB8fCAxMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN572u5omA5pyJ5YiG5pWw5L+h5oGvXG4gICAgICovXG4gICAgUmVzZXRJbmZvKCkge1xuICAgICAgICAvL3RoaXMudmljdG9yeSDmuLjmiI/og5zliKnlpLHotKXnirbmgIEgMCA9IOa4uOaIj+S4rSAxID0g5oiQ5YqfIDIgPSDlpLHotKVcbiAgICAgICAgdGhpcy52aWN0b3J5ID1cbiAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRhcmdldFNjb3JlLnN0cmluZyA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOWAkuiuoeaXtlxuICAgICAqL1xuICAgIFN0YXJ0VGltZSgpIHtcbiAgICAgICAgLy8g5piv5ZCm5a2Y5Zyo5pe26ZKfIOWtmOWcqOaXtumSnyB0aGlzLkluaXRUaW1lKzEw56eSXG4gICAgICAgIGlmICh0aGlzLmNsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOaXtumSn+aIkOWKnysxMHNcIilcbiAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5Jbml0VGltZSArPSAxMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgdGhpcy50aW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPSB0aGlzLkluaXRUaW1lO1xuICAgICAgICAgICAgaWYgKHRoaXMuSW5pdFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lciwgMSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5YWz5Y2h5pWwXG4gICAgICovXG4gICAgU2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxJbmZvID0gTGV2ZWxbXCJsZXZlbFwiICsgY2Muem0uTGV2ZWxJbmZvLnN0YWdlXVxuICAgICAgICAvLyB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWwxNVwiXVxuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IGNjLnptLkxldmVsSW5mby5jdXJyZW50X3Njb3JlO1xuICAgICAgICB0aGlzLkNoZWNrcG9pbnQuc3RyaW5nID0gYCR7Y2Muem0uTGV2ZWxJbmZvLnN0YWdlfWA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruWumui/h+WFs+ebruagh+WIhuaVsFxuICAgICAqIOebruagh+WIhuaVsOagueaNruWFs+WNoeWFs+aVsOehruWumiDpmr7luqbntK/liqDnjofkuLpcbiAgICAgKiAg5Z+65pWwIDEwMDBcbiAgICAgKiAg5q+P5YWz6YCS5aKeNTAw5YiGXG4gICAgICogXG4gICAgICog5pyA5aSnIDUwMDDliIZcbiAgICAgKi9cbiAgICBDcmVhdGVUYXJnZXRTY29yZSgpIHtcbiAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSB0aGlzLmxldmVsSW5mby5zY29yZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ54mp5ZOBIOmcgOimgeagueaNruebruagh+WIhuadpeeUn+aIkCDnlJ/miJDnmoTmiYDmnInnianlk4HmgLvliIblv4Xpobvmr5Tnm67moIfov4flhbPliIbmlbDpq5gyMCVcbiAgICAgKiDnlJ/miJDnmoTnianlk4HmlbDph4/lnKggMTAtMzBcbiAgICAgKi9cbiAgICBDcmVhdGVJdGVtKCkge1xuICAgICAgICBsZXQgbmV3SXRlbUFyciA9IHRoaXMubmV3Q3JlYXRlQ2FsYygpO1xuICAgICAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5qC55o2u5YiG5pWw5YWI5bCGYXJyIOaOkuW6jyDmgLvliIbkuI3og73otoXov4fmnIDlpKfliIbmlbAg5aaC5p6c6LaF5LqGIOWImeS7juWwj+W8gOWni+WHj+WwkSDnm7TliLDliIbmlbDlsI/kuo7mnIDlpKfliIbmlbBcbiAgICAgICAgLy/nlJ/miJDnm7jlupTnmoRQcmZhYlxuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1BcnI9XCIsIG5ld0l0ZW1BcnIpO1xuICAgICAgICBuZXdJdGVtQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW2l0ZW0ubmFtZV0pO1xuICAgICAgICAgICAgbGV0IFhZID0gdGhpcy5yYW5kb21YWShub2RlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IGl0ZW0uc2NvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5wcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYSA9IGl0ZW0ucHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oWFkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJUbnRcIikge1xuICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJ0bnRCb29tXCI7XG4gICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbihjYy52MihYWS54LCBYWS55IC0gMjE4KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5ib29tID0gYm9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvZG/lhYjkuI3liJvlu7rogIHpvKDor5Xor5VcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLm1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxJbmZvLm1vdXNlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIOaZrumAmuiAgem8oFxuICAgICAgICAgICAgbGV0IG1vdXNlTnVtYmVyID0gTnVtYmVyKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKG1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiTW91c2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgRHJpbGxNb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChEcmlsbE1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRHJpbGxNb3VzZU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJbXCJEcmlsbE1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNzAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU1vdXNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g55Sf5oiQ55qE54mp5ZOB5piv5Y+v5Yqo55qEXG4gICAgbW92ZU1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIOWFiOWwhuiAgem8oOenu+WKqOWIsOacgOWPs+i+uSDml7bpl7TkuLo2MDAv6Led56a7KjVcbiAgICAgICAgbGV0IF9tb3ZlVGltZSA9IDEwXG4gICAgICAgIGxldCB0aW1lID0gKHBhcnNlSW50KDMwMCAtIG1vdXNlLngpIC8gNjAwKSAqIF9tb3ZlVGltZVxuICAgICAgICBjYy50d2Vlbihtb3VzZSkudG8odGltZSwgeyB4OiAzMDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyDnjrDlnKjlvIDlp4sg6ICB6byg5YGa6KeE5b6L6L+Q5Yqo5YWI5bCG6ICB6byg5Y+N6L2sXG4gICAgICAgICAgICBpZiAobW91c2UubmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG1vdXNlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oX21vdmVUaW1lLCB7IHg6IC0zMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfSkudG8oX21vdmVUaW1lLCB7IHg6IDMwMCB9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Uuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgfSkpLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSArIDEpXG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5XjgILjgILkuIDlj6rmnInkuIDkuKrmgLvmlbDph48g5Y+v5Lul5b6X5YiwIOWQhOS4queJqeWTgeeahOaVsOmHj1xuICAgIG5ld0NyZWF0ZUNhbGMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVJdGVtQXJyID0gW107XG4gICAgICAgIC8vIOWFiOeUn+aIkOe6ouWMhei3n+elnuenmOeJqeWTgVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCBleHRyYSA9IHRoaXMubGV2ZWxJbmZvLmV4dHJhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIDDmmK/nuqLljIUg5Yib5bu65LiA5Liq57qi5YyFXG4gICAgICAgICAgICBpZiAoZXh0cmFbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLl9hcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0cmFbMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBfcHJvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56We56eY54mp5ZOBIOWFiOmaj+acuuWHuueJqeWTgSDmmK/lkKbmnInkuInlj7bojYkg5aaC5p6c5pyJIOiNr+awtOeahOmaj+acuuamgueOh+WinuWKoFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsb3Zlck51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi54K45by5XCIsIFwiM+WFg+e6ouWMhVwiLCBcIjXlhYPnuqLljIVcIiwgXCLoja/msLRcIiwgXCLoja/msLRcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBybWQgPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBfcHJvcCA9IGFycltybWRdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeXN0ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8gOWHuueahOe6ouWMhemHkeminVxuICAgICAgICAgICAgICAgICAgICBcInByb3BcIjogX3Byb3AsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5ib29tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxJbmZvLmJvb207IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruenr+WIhiDnlJ/miJDlr7nlupTkuKrmlbBcbiAgICAgICAgaWYgKCF0aGlzLmxldmVsSW5mby5nb29kKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5mbyA9IHRoaXMubGV2ZWxJbmZvLmdvb2Quc3BsaXQoXCIsXCIpO1xuICAgICAgICAvLyBsZXQgbWF4U2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IHNjb3JlQXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9pbmZvID0gaW5mb1tpXS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IF9pbmZvWzBdO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBOdW1iZXIoX2luZm9bMV0pXG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gdGhpcy5jcmVhdGVCeVR5cGUodHlwZSwgcGVyY2VudCk7XG4gICAgICAgICAgICBzY29yZUFyciA9IFsuLi5zY29yZUFyciwgLi4ubmV3QXJyXVxuICAgICAgICB9XG4gICAgICAgIC8vIOWwhuenr+WIhuaVsOe7hOaOkuW6j1xuICAgICAgICBsZXQgX3Njb3JlQXJyID0gc2NvcmVBcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPiBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5zY29yZSA8IGIuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6K6h566X5omA5pyJYXJy5Lit55qE5YiG5pWw5piv5LiN5piv6LaF6L+HIOacrOWFs+eahOacgOWkp+WAvCDlpoLmnpzotoXov4fpgqPkuYjku47lkI7lvoDliY3orqHnrpflgLxcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgICBsZXQgdG90YWxTY29yZSA9IHRoaXMubGV2ZWxJbmZvLm1heFNjb3JlO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2NvcmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9zY29yZSArPSBfc2NvcmVBcnJbaV0uc2NvcmU7XG4gICAgICAgICAgICBpZiAoX3Njb3JlIDw9IHRvdGFsU2NvcmUpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChfc2NvcmVBcnJbaV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4ubmV3QXJyXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVJdGVtQXJy5pyq5oyJ54Wn5a695bqm5o6S5bqPPVwiLCBjcmVhdGVJdGVtQXJyKTtcbiAgICAgICAgLy8g5bCGY3JlYXRlSXRlbUFycuaOkuW6j+aMieeFp+WuveW6plxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gY3JlYXRlSXRlbUFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA+IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUl0ZW1BcnLnhaflrr3luqbmjpLluo89XCIsIGNyZWF0ZUl0ZW1BcnIpO1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICB9LFxuICAgIC8vIOagueaNruenr+WIhui3n+exu+Wei+eUn+aIkOaVsOmHj25hbWVcbiAgICBjcmVhdGVCeVR5cGUodHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+efs+WdlyDmmK/lkKbmnInljJbnn7PmiYvlhowg5aaC5p6c5pyJIOefs+WktOeahOS7t+WAvOaPkOWNhzIwJSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRib29rTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55+z5YyW5omL5YaM5L2/55So5oiQ5Yqf55+z5aS055qE5Lu35YC85o+Q5Y2HMjAlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByb21vdGUgPSAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJTdG9uZS1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbMjAsIDMwLCA0MF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aENpZyA9IFs0MiwgODksIDE1NF07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWdbcmRtXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUgKyByZG0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHNjb3JlQ2lnW3JkbV0gKiBwcm9tb3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aENpZ1tyZG1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+m7hOmHkVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiR29sZC1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN56ev5YiG55qE5pyA5aSn5YC85Yqo5oCB55Sf5oiQ5pWw57uEXG4gICAgICAgICAgICAgICAgICAgIGxldCBfX3Njb3JlID0gc2NvcmUgLSBfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3Njb3JlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSBbNTAsIDEwMCwgMTUwLCAyMDAsIDMwMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2tleSA9IE1hdGguZmxvb3IoX19zY29yZSAvIDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IF9rZXkgPiA0ID8gNCA6IF9rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5OyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZy5wdXNoKDUwICogKDEgKyBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI1MFwiOiAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwXCI6IDYyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxNTBcIjogODMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjIwMFwiOiAxMDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjMwMFwiOiAxNDZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCBzY29yZUNpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQ2lnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aFtcIlwiICsgc2NvcmVDaWdbcmRtXV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv6ZK755+zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJEcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiTXlzdGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZUNpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSAtIF9zY29yZSA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSB0aGlzLmNyZWF0ZVJhbmRtKDMwLCAyMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlIC0gX3Njb3JlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgc2NvcmUgLSBfc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IHNjb3JlQ2lnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmaj+acuuWdkOaghyDliKTmlq3ov5nkuKrlnZDmoIfkuqfnlJ/nmoRyZWN05piv5ZCm6Lef5YW25LuW55qE5omA5pyJ55qE54mp5ZOB55qEcmVjdOebuOaOpeinpiDlpoLmnpzmsqHmnInov5Tlm57lnZDmoIcg5aaC5p6c5o6l6Kem6YeN5paw6ZqP5py6XG4gICAgICovXG4gICAgcmFuZG9tWFkoaXRlbSkge1xuICAgICAgICAvL3ggPSDlsY/luZXlrr3luqYgLyAyICog6ZqP5py65pWwXG4gICAgICAgIC8veSA9IOWcsOW5s+mdouS9jee9riArIOmaj+acuuaVsGNjLnJhbmRvbTBUbzEoKSAr6auY5bqm6IyD5Zu077yI5Y+v5Lul6K+05pivWeeahOacgOWwj+eCue+8iVxuICAgICAgICAvL+WcsOW5s+mdouS9jee9riA9IOWcsOmdonkgKyDlnLDpnaIg6auY5bqmIC8gMlxuICAgICAgICAvLyAtIDMw5piv5Zug5Li654mp5ZOB6ZSa54K55Zyo5Lit6Ze05L2N572uIOiuvue9ruWdkOagh+WIsOiMg+WbtOWumueCueeahOaXtuWAmSDkvJrmnInpg6jliIbotoXlh7pcbiAgICAgICAgbGV0IGdyb3VuZFkgPSB0aGlzLml0ZW1BcmVhLnkgKyB0aGlzLml0ZW1BcmVhLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgLy8g6ZqP5py655Sf5oiQ55qE5LiA5Liq5Z2Q5qCHXG4gICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KHBvcy54IC0gaXRlbS53aWR0aCAvIDIsIHBvcy55IC0gaXRlbS5oZWlnaHQgLyAyLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgaXNQZW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gbi5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmIChib3VuZGluZ0JveC5pbnRlcnNlY3RzKHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVuZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1BlbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21YWShpdGVtKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeCuOW8ueiMg+WbtOeahOeJqeWTgei/m+ihjOmUgOavgVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gVG50XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZGVzdHJveVRudChUbnQpIHtcbiAgICAgICAgLy8g6YGN5Y6GdGhpcy5pdGVtQXJlYeWGheaJgOacieeahOiKgueCuSDlvZPoioLngrnnmoTkuK3lv4PoioLngrnlnKjngrjlvLnlhoUg5YiZ6ZSA5q+BXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobiAhPT0gVG50KSB7XG4gICAgICAgICAgICAgICAgLy8g6YCa6L+HVG5055qE5Lit5b+D5L2N572uIOWIm+W7uuS4gOS4qnJlY3TljLrln59cbiAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IFRudC5nZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KF9wb3MueCAtIDEyNSwgX3Bvcy55IC0gMTI1LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMocG9zKSkge1xuICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog55Sf5oiQbi1t6ZqP5py65pWwXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5YWz6Zet57uz5a2Q54q25oCBXG4gICAgICovXG4gICAgU3RvcEhvb2tNb3ZlKCkge1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuSG9vay5oZWlnaHQgPSB0aGlzLkhvb2tIZWlnaHQ7XG4gICAgICAgIC8v5YGc5q2i5pKt5pS+5ouJ5Zue5Yqo55S7XG4gICAgICAgIHRoaXMuTWluZXJBbmltYXRpb24uc3RvcCgnaGVybycpO1xuICAgICAgICB0aGlzLk1pbmVyLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5IZXJvRnJhbWVzWzBdO1xuICAgICAgICAvL+mHjee9ruWPkeWwhOmSqeWtkOmAn+W6plxuICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgdGhpcy5Ib29rLmdldENoaWxkQnlOYW1lKFwiaG9va18xXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Ib29rRnJhbWVzWzBdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlpITnkIbmi4nlm57nmoTnianlk4HvvIzliKDpmaTnianlk4Hku6Xlj4rmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBIYW5kbGUoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5BZGRQcm9wKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5BZGRTY29yZShpdGVtcyk7XG4gICAgICAgIHRoaXMuUmVtb3ZlSXRlbShpdGVtcyk7XG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui/mOacieeJqeWTgeWcqOWcsOWbvuS4iiDlpoLmnpzmsqHmnInpgqPkuYjnu5Pnrpcg57uT5p2fXG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5Zyw5Zu+54mp5ZOB5raI5aSxIOe7k+eul1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIilcbiAgICAgICAgICAgIGJvb20ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgYm9vbS5kZXN0cm95KCk7XG4gICAgICAgICAgICBib29tID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6LCD5pW0546w5pyJ55qE54K45by555qE546w5a6e5pWI5p6cXG4gICAgYWRqdXNCb29tTGF5b3V0KCkge1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcbiAgICAgICAgbGF5b3V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvb21OdW1iZXIgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJvb20gPSBsYXlvdXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaSA8PSB0aGlzLmJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfpgZPlhbdcbiAgICAgKi9cbiAgICBBZGRQcm9wKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiTXlzdGVyeVwiKSB7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGl0ZW1zWzBdLmV4dHJhO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM+WFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjXlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLoja/msLRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+enr+WIhlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBwcm9wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtc1swXS5uYW1lID09PSBcIlJlZFwiKSB7XG4gICAgICAgICAgICAvLyDpmo/mnLozLTjlnZfpkrEgMuS9jeacieaViOWwj+aVsFxuICAgICAgICAgICAgbGV0IGV4dHJhUmVkUGFjayA9IChNYXRoLmZsb29yKHRoaXMuY3JlYXRlUmFuZG0oMzAwLCA4MDApKSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSBleHRyYVJlZFBhY2s7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJyZWRcIiwgZXh0cmFSZWRQYWNrKTtcbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNZXN0ZXJ5KHR5cGUpIHtcbiAgICAgICAgLy8gW1wi54K45by5XCIsXCIz5YWD57qi5YyFXCIsXCI15YWD57qi5YyFXCIsXCLoja/msLRcIl1cbiAgICAgICAgbGV0IG1lc3RlcnkgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTWVzdGVyeVwiKTtcbiAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBtZXN0ZXJ5LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Qcm9wU3ByaXRlRnJhbWVzW3R5cGVdO1xuICAgICAgICBtZXN0ZXJ5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKG1lc3RlcnkpLnRvKDIsIHsgeTogbWVzdGVyeS55ICsgMTAwLCBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgbWVzdGVyeS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgbWVzdGVyeS55IC09IDEwMDtcbiAgICAgICAgICAgIG1lc3RlcnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTnianlk4FcbiAgICAgKi9cbiAgICBSZW1vdmVJdGVtKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBBZGRTY29yZShpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmICghaXRlbXNbMF0uc2NvcmUpIHJldHVybjtcbiAgICAgICAgLy8gbGV0IHNjb3JlQ29uID0gSXRlbUF0dHJbaXRlbXNbMF0ubmFtZV0gfHwge307XG4gICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICB0aGlzLmN1clNjb3JlICs9IChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWinuWKoOS4gOS4quWinuWKoOenr+WIhumjmOWQkS0tLT5TY29yZeS9jee9rueCueWKqOeUu1xuICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBpdGVtc1swXS5zY29yZSlcbiAgICB9LFxuICAgIC8vIOWBmuS4gOS4quWinuWKoOenr+WIhueCueWKqOeUu1xuICAgIGFkZEFuaW0odHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFkZCA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09PSBcInNjb3JlXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRTY29yZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlZFwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkUmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFkZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgc2NvcmU7XG4gICAgICAgIGFkZC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBhZGQub3BhY2l0eSA9IDA7XG4gICAgICAgIGFkZC55ID0gLTEzMjtcbiAgICAgICAgY2MudHdlZW4oYWRkKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLnRvKDEsIHsgeTogNDIgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pi+56S6TWFzayB2aWN0b3J5PTAgdmljdG9yeT0x6IOc5YipIHZpY3Rvcnk9MuWksei0pVxuICAgICAqL1xuICAgIFNob3dNYXNrKCkge1xuICAgICAgICAvL+aYvuekuuW8ueWHuuahhlxuICAgICAgICB0aGlzLk1hc2suYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5QYXVzZUdhbWVMYXllcigpXG4gICAgICAgIGxldCBGYWlsID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiRmFpbFwiKTtcbiAgICAgICAgbGV0IFN1Y2Nlc3MgPSB0aGlzLk1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJTdWNjZXNzXCIpO1xuICAgICAgICBGYWlsLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBTdWNjZXNzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAodGhpcy52aWN0b3J5ID09PSAxKSB7XG4gICAgICAgICAgICBTdWNjZXNzLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL01pc3Npb25zXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuS4g+aXpeS7u+WKoeWIl+ihqD1cIiwgcmVzLmRhdGEpO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtcyA9IHJlcy5kYXRhLml0ZW1zO1xuICAgICAgICAgICAgICAgIGxldCBpdGVtID0gbnVsbDtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGl0ZW1zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghaXRlbXNbaV0uc3RhdHVzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDmnKrpooblj5ZcbiAgICAgICAgICAgICAgICAgICAgICAgIGl0ZW0gPSBpdGVtc1tpXVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgLy8gbGJsLnN0cmluZyA9IGDmr4/ml6Xku7vliqHovr7miJDmnaHku7bvvIznnIvlub/lkYoke2l0ZW0uY3Vycl9hZH0vKyR7aXRlbS5uZWVkX2FkfSzpnIDopoHpgJrlhbMke2l0ZW0uY3Vycl9wYXNzX3N0YWdlfS8rJHtpdGVtLm5lZWRfcGFzc19zdGFnZX1gXG4gICAgICAgICAgICAgICAgLy8g5Yik5pat5ZCE56eN5p2h5Lu2XG4gICAgICAgICAgICAgICAgLy8g5YWI5Yik5pat55So5oi35YWz5Y2h5p2h5Lu2XG4gICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9wYXNzX3N0YWdlIDwgaXRlbS5uZWVkX3Bhc3Nfc3RhZ2UpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5b2T5YmN5YWz5Y2h562J57qn5bCP5LqO6ZyA6KaB5YWz5Y2h562J57qnXG4gICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg6YCa5YWzJHtpdGVtLm5lZWRfcGFzc19zdGFnZX3lhbPlkI7lj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5YWz5Y2h562J57qn6L6+5oiQIOWIpOaWreesrOS6jOadoeS7tiBcbiAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9zaWduX2luIDwgaXRlbS5uZWVkX3NpZ25faW4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg5a6M5oiQ5LuK5pel562+5Yiw5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGl0ZW0uY3Vycl9hZCA8IGl0ZW0ubmVlZF9hZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBg5YaN55yLJHtpdGVtLm5lZWRfYWQgLSBpdGVtLmN1cnJfYWR95Liq6KeG6aKR5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGxldCBhd3JhZCA9IFN1Y2Nlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgYXdyYWQuc3RyaW5nID0gYOWlluWKsee6ouWMhSske3RoaXMucmVkUGFja31gO1xuICAgICAgICAgICAgaWYoY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyl7XG4gICAgICAgICAgICAgICAgYXdyYWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRhdEF3YXJkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhQXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dGFyUmVkUGFjaykge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHt0aGlzLmV4dGFyUmVkUGFja31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5Y+R6YCB5pWw5o2uIHJlZF9wYWNrOue6ouWMhSBzY29yZTrliIbmlbAgdHPvvJrml7bpl7TmiLMgc2lnbiBNRDXmlbDmja5cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiYm9tYlwiOiB0aGlzLmJvb21OdW1iZXIgKyAxLC8v54K45by55Liq5pWwXG4gICAgICAgICAgICAgICAgXCJwb3Rpb25cIjogdGhpcy5saXF1aWROdW1iZXIsLy/oja/msLRcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHRoaXMuY3VyU2NvcmUsLy/liIbmlbBcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gdGhpcy5jcmVhdGVTaWduRGF0YShzZW5kRGF0YSk7XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3PpgJrlhbPmiJDlip/ov5Tlm57kv6Hmga9cIiwgcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWN0b3J5ID09PSAyKSB7XG4gICAgICAgICAgICBGYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDpgJrlhbPlpLHotKXkuI3nlKjlkYror4nmnI3liqHlmahcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLk1hc2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgY3JlYXRlU2lnbkRhdGE6IGZ1bmN0aW9uIChkYXRhKSB7XG4gICAgICAgIHZhciBzb3J0TGlzdCA9IFtdO1xuICAgICAgICBmb3IgKHZhciBrZXkgaW4gZGF0YSkge1xuICAgICAgICAgICAgaWYgKGRhdGEuaGFzT3duUHJvcGVydHkoa2V5KSAmJiBrZXkgIT0gXCJzaWduXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgdmFsdWUgPSBkYXRhW2tleV07XG4gICAgICAgICAgICAgICAgdmFyIGl0ZW0gPSB7fTtcbiAgICAgICAgICAgICAgICBpdGVtLmtleSA9IGtleTtcbiAgICAgICAgICAgICAgICBpdGVtLnZhbHVlID0gdmFsdWU7XG4gICAgICAgICAgICAgICAgc29ydExpc3QucHVzaChrZXkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHNvcnRMaXN0LnNvcnQoKTtcbiAgICAgICAgdmFyIHN0clRvSmlhTWkgPSBcIlwiO1xuICAgICAgICBzb3J0TGlzdC5mb3JFYWNoKGZ1bmN0aW9uIChrZXkpIHtcbiAgICAgICAgICAgIHN0clRvSmlhTWkgKz0gXCImXCIgKyBrZXkgKyBcIj1cIiArIGRhdGFba2V5XTtcbiAgICAgICAgfSwgdGhpcyk7XG4gICAgICAgIHN0clRvSmlhTWkgPSBcInRva2VuPVwiICsgY2Muem0udXNlckluZm8uc2MxICsgc3RyVG9KaWFNaTtcbiAgICAgICAgLy8gdmFyIG5vSmlhTWkgPSBzdHJUb0ppYU1pO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuacquWKoOWvhuWJjT1cIixzdHJUb0ppYU1pKVxuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwi5Yqg5a+G5ZCOPVwiLHN0clRvSmlhTWkpXG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI/vvIzlhbPpl63lvLnlh7rmoYZcbiAgICAgKiDlpoLmnpzmmK/muLjmiI/pgJrlhbPljp/lm6DogIzmiZPlvIDnmoTlvLnlh7rmoYbkuI3kuojnkIbnnaxcbiAgICAgKi9cbiAgICBDbG9zZU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDph43njqnmnKzlhbNcbiAgICAgKi9cbiAgICBSZWxvYWQoKSB7XG4gICAgICAgIC8v5YGc5q2i5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICAvL+mHjei9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57un57ut5LiL5LiA5YWzXG4gICAgICovXG4gICAgTmV4dCgpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudmljdG9yeSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZU1hc2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyDov4flhbPmiJDlip/ngrnlh7vov5vlhaXkuIvkuIDlhbPkuYvliY0g5YWI6I635Y+W55So5oi35L+h5oGvIOeci+eUqOaIt+aYr+WQpuacieS9k+WKm1xuICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGh0dHAuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2T5Yqb5aSn5LqOMCDov5vlhaXkuIvkuIDlhbNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4wIOW8ueWHuueci+inhumikeiOt+W+l+S9k+WKm+eahOaOpeWPo1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVWaWRlb0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v6YCA5Ye65ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgQXdhcmRWaWRlbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwi55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBsZXQgcGFjayA9IGNjLnptLkxldmVsSW5mby5ldmVyX3Bhc3M/MDp0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUGFzc0FkXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIlBhc3NBZOi/lOWbnuS/oeaBr1wiLCByZXMpO1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaHR0cC5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWFs+WNoeS/oeaBrz1cIiwgY2Muem0uTGV2ZWxJbmZvKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5aWW5YqxXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBhZDogY2Muem0uYWRcbiAgICAgICAgfVxuICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Hcm93UG93ZXJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGNsb3NlTGF5ZXIoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmAgOWHuua4uOaIjyDov5Tlm57kuIrkuIDkuKrlnLrmma9cbiAgICAgKi9cbiAgICBFeGl0R2FtZSgpIHtcbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgUmVzdW1lR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5TdGFydFRpbWUoKTtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlID09PSAyKSB7XG4gICAgICAgICAgICB0aGlzLk1pbmVyQW5pbWF0aW9uLnBsYXkoJ2hlcm8nKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pqC5YGc5b2T5YmN55WM6Z2iXG4gICAgUGF1c2VHYW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gdHJ1ZTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUgPT09IDIpIHtcbiAgICAgICAgICAgIHRoaXMuTWluZXJBbmltYXRpb24uc3RvcCgnaGVybycpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDog5zliKnmiJblpLHotKXpg73op4bkuLrmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgLy/liKTmlq3nlKjmiLflvpfliIbmmK/lkKbotoXov4fnm67moIfliIZcbiAgICAgICAgbGV0IHMgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgPj0gcGFyc2VJbnQodGhpcy5UYXJnZXRTY29yZS5zdHJpbmcpKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5ri45oiP5aSx6LSlXG4gICAgICAgICAgICBzID0gMjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWN0b3J5ID0gcztcbiAgICAgICAgdGhpcy5TaG93TWFzaygpO1xuICAgIH0sXG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZUdhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5OZWVkTGF5ZXIuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5tb3ZlTW91c2UoKTtcbiAgICAgICAgdGhpcy5lbWl0SG9vaygpO1xuICAgICAgICB0aGlzLkhvb2tSb1RhdGUoKTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIHVzZVByb3AoZSwgbXNnKSB7XG4gICAgICAgIC8vIOWmguaenOaYr+eCuOW8uVxuICAgICAgICBzd2l0Y2ggKG1zZykge1xuICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeeahOeKtuaAgeW/hemhu+aYr+e7s+WtkOWkhOS6juiDveaLieWbnueahOeKtuaAgVxuICAgICAgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuacieeJqeWTgVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0gJiYgdGhpcy5ib29tTnVtYmVyID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55So54K45by55YOP5pyN5Yqh5Zmo5Y+R6YCB5raI5oGvXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc2IuRGV2aWNlLnZpYnJhdGUoMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlhYjmj5DliY3liY3nq6/kvb/nlKgg5piv55S76Z2i5ZCM5q2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlci0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bmi4nljrvnmoTnianlk4HnmoTkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGV0IF9ub2RlID0gdGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDngrjlvLnmlYjmnpxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJvb20pO1xuICAgICAgICAgICAgICAgICAgICBib29tLm5hbWUgPSBcImJvb21cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpXG4gICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIocG9zLnggLSBzaXplLndpZHRoIC8gMiwgcG9zLnkgLSBzaXplLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBib29tLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib29tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgX25vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogMTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBodHRwLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Qcm9wXCIsIFwiUE9TVFwiLCBzZW5kRHRhKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgfVxufSk7XG4iXX0=