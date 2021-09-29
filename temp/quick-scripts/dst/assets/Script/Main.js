
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