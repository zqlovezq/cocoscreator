
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
      cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {});
      cc.zm.LevelInfo = res.data; // 关闭界面开始游戏

      _this.NeedLayer.active = false; // 点击开始游戏之前 重新同步一下道具信息
      // 隐藏banner
      // cc.Tools.hideBanner();

      _this.handleDaoju();

      _this.adjusBoomLayout();

      _this.ResumeGameLayer(); // 对关卡进行打点

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
    cc.zm.videoAd.clickWeapon = true;
    this.ResetInfo();
    this.StartTime();
    this.SetLevel();
    this.CreateTargetScore();
    this.CreateItem();
    this.redPack = this.levelInfo.redPack;
    this.extarRedPack = 0; // 是否新手引导

    this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));
    cc.Tools.Event.on('getWeapon', this.getWeaponFunc, this);
    cc.Tools.Event.on('getRedPackage', this.getRedPackageFunc, this);

    if (this.guideIndex < 4 && this.guideIndex >= 1) {
      this.guide = true; // 有新手引导暂停游戏

      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = true;
      this.setGuide();
    } else {
      this.guide = false;
      this.PauseGameLayer();
      cc.find('Canvas/Guide').active = false; // cc.Tools.showBanner();

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
    cc.Tools.showJiliAd(5);
  },
  // 使用道具
  handleDaoju: function handleDaoju() {
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

    for (var i = 0; i < weapon.length; i++) {
      if (weapon[i].prop === 10) {
        // 当前是炸弹
        this.boomNumber = weapon[i].num - 1;
      } else {
        // 如果是其他物品那么直接使用
        if (weapon[i].num) {
          // 直接使用
          var sendDta = {
            prop: weapon[i].prop
          };
          cc.Tools.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then(function (res) {});
        }
      }

      if (weapon[i].prop === 11) {
        this.clockNumber = weapon[i].num;
      }

      if (weapon[i].prop === 12) {
        this.handbookNumber = weapon[i].num;
      }

      if (weapon[i].prop === 13) {
        this.liquidNumber = weapon[i].num;
      }

      if (weapon[i].prop === 14) {
        this.cloverNumber = weapon[i].num;
      }
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

    if (cc.zm.LevelInfo.stage <= 5) {
      cc.Tools.dot("start_" + cc.zm.LevelInfo.stage);
    }
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
    var _this3 = this;

    var newItemArr = this.newCreateCalc(); // 写一个算法 根据分数先将arr 排序 总分不能超过最大分数 如果超了 则从小开始减少 直到分数小于最大分数
    //生成相应的Prfab

    newItemArr.forEach(function (item) {
      var node = cc.instantiate(_this3.Prefab[item.name]);

      var XY = _this3.randomXY(node);

      node.parent = _this3.itemArea;

      if (item.score) {
        node.score = item.score;
      }

      if (item.prop) {
        node.extra = item.prop;
      }

      node.setPosition(XY);

      if (item.name === "Tnt") {
        var boom = cc.instantiate(_this3.Boom);

        _this3.node.addChild(boom);

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
    var _this4 = this;

    //显示弹出框
    // cc.Tools.showBanner();
    this.Mask.active = true; // this.PauseGameLayer()

    var Fail = this.Mask.getChildByName("Fail");
    var Success = this.Mask.getChildByName("Success");
    Fail.active = false;
    Success.active = false;

    if (cc.zm.LevelInfo.stage <= 5) {
      cc.Tools.dot("end_" + cc.zm.LevelInfo.stage);
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
        var str = this.handleNumber(this.extarRedPack);
        extatAward.node.parent.active = true;
        extatAward.string = "+" + str;
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
      cc.Tools.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function (res) {});
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
      _this4.PauseGameLayer();
    }).start();
  },

  /**
   * 处理小数精度问题
   * @returns 
   */
  handleNumber: function handleNumber(numb) {
    // 先讲数字转换成字符串
    var str = "" + numb;
    var key = str.split(".");
    var newKey = key[0] + "." + key[1].slice(0, 2);
    return newKey;
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
    var _this5 = this;

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
                _this5.Reload();
              } else {
                // 直接返回主界面
                // cc.Tools.hideBanner();
                cc.endCountTime = new Date().getTime();
                cc.director.loadScene('Index');
              }
            });
          } else {
            // 小于0 弹出看视频获得体力的接口
            _this5.seeVideoLayer.active = true;
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
    cc.Tools.showJiliAd(2);
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
    cc.Tools.showJiliAd(1);
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
  getRedPackageFunc: function getRedPackageFunc() {
    console.log("cocos--看视频得红包");

    if (cc.zm.videoAd.redPack) {
      cc.Tools.sendRequest("pit.v1.PitSvc/PassAd", "POST", cc.zm.videoAd.redPack).then(function (res) {
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
  },
  getWeaponFunc: function getWeaponFunc() {
    var _this6 = this;

    // 像服务发送请求看视频得道具
    console.log("cocos--看视频得道具");
    var sendData = {
      "ad": cc.zm.ad,
      "weapon": this.LotteryProp
    };
    cc.Tools.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then(function (res) {
      // 炸弹：10 11时钟 13药水
      _this6.LotteryAward = res.data.award;

      _this6.hideLotteryLayer();
    });
  },
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzcGxheU5hbWUiLCJyb3RhdGVTcGVlZCIsIkhvb2tSYW5nZSIsIlByZWZhYnMiLCJ0eXBlIiwiUHJlZmFiIiwiSW5pdFRpbWUiLCJDb2xsaXNpb25BdWRpbyIsIkF1ZGlvQ2xpcCIsIkFkZFNjcm9lQXVkaW8iLCJQcm9wU3ByaXRlRnJhbWVzIiwiU3ByaXRlRnJhbWUiLCJCb29tIiwiSG9va0ZyYW1lcyIsIkhlcm9GcmFtZXMiLCJMb3R0ZXJ5RnJhbXNlIiwib25Mb2FkIiwiaW5pdCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwic2V0R3VpZGUiLCJpbmRleCIsImd1aWRlSW5kZXgiLCJndWlkZSIsImZpbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIm5leHRHdWlkZSIsImUiLCJtc2ciLCJndWlkZV8xIiwiZ3VpZGVfMiIsImd1aWRlXzMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiUmVzdW1lR2FtZUxheWVyIiwiaGlkZU5lZWRMYXllciIsIlRvb2xzIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJ6bSIsIkxldmVsSW5mbyIsImRhdGEiLCJOZWVkTGF5ZXIiLCJoYW5kbGVEYW9qdSIsImFkanVzQm9vbUxheW91dCIsImhpZGVMb3R0ZXJ5TGF5ZXIiLCJMb3R0ZXJ5TGF5ZXIiLCJzaG93QmFja0xheWVyIiwiQmFja0xheWVyIiwiUGF1c2VHYW1lTGF5ZXIiLCJNaW5lciIsIkhvb2siLCJIb29rSGVpZ2h0IiwiaGVpZ2h0IiwiSG9va1N0YXRlIiwiY3VyU2NvcmUiLCJwYXVzZUdhbWUiLCJNaW5lclNwIiwiZ2V0Q29tcG9uZW50Iiwic2VlVmlkZW9MYXllciIsIlNjb3JlIiwiTGFiZWwiLCJUYXJnZXRTY29yZSIsIlRpbWUiLCJDaGVja3BvaW50IiwiUHJvcE5vZGUiLCJpdGVtQXJlYSIsIm1hbmFnZXIiLCJnZXRDb2xsaXNpb25NYW5hZ2VyIiwiZW5hYmxlZCIsImZvckVhY2giLCJpdGVtIiwiX25hbWUiLCJlbWl0SG9vayIsIk1hc2siLCJvbiIsIk5vZGUiLCJFdmVudFR5cGUiLCJUT1VDSF9FTkQiLCJDbG9zZU1hc2siLCJiaW5kIiwiZW1pdEhvb2tCdG4iLCJib29tTnVtYmVyIiwibGlxdWlkTnVtYmVyIiwic2NyZWVuQWRhcHRlciIsInZpZGVvQWQiLCJjbGlja1dlYXBvbiIsIlJlc2V0SW5mbyIsIlN0YXJ0VGltZSIsIlNldExldmVsIiwiQ3JlYXRlVGFyZ2V0U2NvcmUiLCJDcmVhdGVJdGVtIiwicmVkUGFjayIsImxldmVsSW5mbyIsImV4dGFyUmVkUGFjayIsInBhcnNlSW50IiwiZ2V0SXRlbSIsIkV2ZW50IiwiZ2V0V2VhcG9uRnVuYyIsImdldFJlZFBhY2thZ2VGdW5jIiwibmVlZFNjb3JlIiwibmVlZExldmVsIiwic3RyaW5nIiwic2NvcmUiLCJpZCIsImFyciIsInJkbSIsImNyZWF0ZVJhbmRtIiwiTG90dGVyeVByb3AiLCJpY29uIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJMb29rVmlkZW9HZXRBd2FyZCIsInNob3dKaWxpQWQiLCJ3ZWFwb24iLCJpIiwibGVuZ3RoIiwibnVtIiwiY2xvY2tOdW1iZXIiLCJoYW5kYm9va051bWJlciIsImNsb3Zlck51bWJlciIsIkhvb2tSb1RhdGUiLCJhbmdsZSIsIk1hdGgiLCJhYnMiLCJzZXRBbmltYXRpb24iLCJjaGlsZHJlbiIsImNoaWxkcmVuQ291bnQiLCJIYW5kbGUiLCJhZGRBbmltYXRpb24iLCJTdG9wSG9va01vdmUiLCJQdWxsQmFja0hvb2siLCJTZXRTcGVlZCIsIm90aGVyIiwicHJvbW90ZSIsIkl0ZW1BdHRyIiwibm9kZSIsIm5hbWUiLCJ2aWN0b3J5IiwidGltZXIiLCJ1bnNjaGVkdWxlIiwiR2FtZU92ZXIiLCJzY2hlZHVsZSIsIkxldmVsIiwic3RhZ2UiLCJjdXJyZW50X3Njb3JlIiwiZG90IiwibmV3SXRlbUFyciIsIm5ld0NyZWF0ZUNhbGMiLCJpbnN0YW50aWF0ZSIsIlhZIiwicmFuZG9tWFkiLCJwYXJlbnQiLCJleHRyYSIsInNldFBvc2l0aW9uIiwiYm9vbSIsImFkZENoaWxkIiwidjIiLCJ4IiwieSIsIm1vdXNlIiwic3BsaXQiLCJtb3VzZU51bWJlciIsIk51bWJlciIsInJhbmRYIiwid2lkdGgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsIm1vdmVNb3VzZSIsIkRyaWxsTW91c2VOdW1iZXIiLCJfbW92ZVRpbWUiLCJ0aW1lIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwic2NhbGVYIiwicmVwZWF0Rm9yZXZlciIsImRlbGF5IiwiY2FsbCIsImNyZWF0ZUl0ZW1BcnIiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwid2lkdGhDaWciLCJfX3Njb3JlIiwiX2tleSIsImZsb29yIiwia2V5IiwiayIsImdyb3VuZFkiLCJyZWN0IiwiUmVjdCIsImlzUGVuZyIsIm4iLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImRlc3Ryb3lUbnQiLCJUbnQiLCJfcG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWlucyIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwibSIsIml0ZW1zIiwiQWRkUHJvcCIsIkFkZFNjb3JlIiwiUmVtb3ZlSXRlbSIsImxheW91dCIsImlzTmFOIiwic2hvd01lc3RlcnkiLCJhZGRBbmltIiwic2hvd011c2ljIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZXh0cmFSZWRQYWNrIiwibWVzdGVyeSIsInN0b3BBbGxBY3Rpb25zIiwib3BhY2l0eSIsImFkZCIsIlNob3dNYXNrIiwiRmFpbCIsIlN1Y2Nlc3MiLCJsZXZlbF9udW0iLCJsZXZlbF9yZXN1bHQiLCJsYmwiLCJzZW5kRGF0YSIsInN0YXR1cyIsImN1cnJfcGFzc19zdGFnZSIsIm5lZWRfcGFzc19zdGFnZSIsImN1cnJfc2lnbl9pbiIsIm5lZWRfc2lnbl9pbiIsImN1cnJfYWQiLCJuZWVkX2FkIiwiYXdyYWQiLCJldmVyX3Bhc3MiLCJleHRhdEF3YXJkIiwic3RyIiwiaGFuZGxlTnVtYmVyIiwiRGF0ZSIsImdldFRpbWUiLCJjcmVhdGVTaWduRGF0YSIsInNjYWxlIiwibnVtYiIsIm5ld0tleSIsInNsaWNlIiwiUmVsb2FkIiwibG9hZFNjZW5lIiwiTmV4dCIsInVzZXJJbmZvIiwicG93ZXIiLCJlbmRDb3VudFRpbWUiLCJFeGl0R2FtZSIsIkF3YXJkVmlkZW8iLCJwYWNrIiwiYWQiLCJzZWVWaWRlb0F3YXJkIiwiZW50ZXJHYW1lIiwidGFyZ2V0IiwiY2xvc2VMYXllciIsInBhdXNlZCIsInMiLCJjb25zb2xlIiwibG9nIiwiTG90dGVyeUF3YXJkIiwiYXdhcmQiLCJ1cGRhdGUiLCJkdCIsInVzZVByb3AiLCJzaG93U2hha2UiLCJpc05hdGl2ZSIsImpzYiIsIkRldmljZSIsInZpYnJhdGUiLCJfbm9kZSIsImNvbnZlcnRUb1dvcmxkU3BhY2VBUiIsInNpemUiLCJ2aWV3IiwiZ2V0VmlzaWJsZVNpemUiLCJBbmltYXRpb24iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0FBQ0E7Ozs7QUFGQTtBQUdBQSxFQUFFLENBQUNDLEtBQUgsQ0FBUztBQUNMLGFBQVNELEVBQUUsQ0FBQ0UsU0FEUDtBQUdMQyxFQUFBQSxVQUFVLEVBQUU7QUFDUjtBQUNBQyxJQUFBQSxLQUFLLEVBQUU7QUFDSCxpQkFBUyxDQUROO0FBRUhDLE1BQUFBLFdBQVcsRUFBRTtBQUZWLEtBRkM7QUFNUjtBQUNBQyxJQUFBQSxXQUFXLEVBQUU7QUFDVCxpQkFBUyxDQURBO0FBRVRELE1BQUFB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QUwsQ0FBVW9CLFFBQVYsQ0FBbUJELElBQW5CO0FBQ0EsY0FBSTZJLElBQUksR0FBR2xULEVBQUUsQ0FBQ21ULElBQUgsQ0FBUUMsY0FBUixFQUFYO0FBQ0EvSSxVQUFBQSxJQUFJLENBQUNELFdBQUwsQ0FBaUJwSyxFQUFFLENBQUN1SyxFQUFILENBQU1XLEdBQUcsQ0FBQ1YsQ0FBSixHQUFRMEksSUFBSSxDQUFDbkksS0FBTCxHQUFhLENBQTNCLEVBQThCRyxHQUFHLENBQUNULENBQUosR0FBUXlJLElBQUksQ0FBQ25QLE1BQUwsR0FBYyxDQUFwRCxDQUFqQjtBQUNBc0csVUFBQUEsSUFBSSxDQUFDdEksTUFBTCxHQUFjLElBQWQ7QUFDQXNJLFVBQUFBLElBQUksQ0FBQ2pHLFlBQUwsQ0FBa0JwRSxFQUFFLENBQUNxVCxTQUFyQixFQUFnQ2pFLElBQWhDLENBQXFDLE1BQXJDOztBQUVBNEQsVUFBQUEsS0FBSyxDQUFDeEUsT0FBTjs7QUFDQXdFLFVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBSzVTLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBSTJDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FoRCxVQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1ERyxPQUFuRDtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFwQ1I7QUFzQ0g7QUFodENJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5byV5YWlIOW+l+WIhuetiemFjee9riDlpKrplb8g5omA5Lul5o2i5Liq5paH5Lu25YaZXG5pbXBvcnQgSXRlbUF0dHIgZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IExldmVsIGZyb20gJy4vTGV2ZWwnO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/pkqnlrZDpgJ/luqZcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDml4vovazpgJ/luqZcbiAgICAgICAgcm90YXRlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDojIPlm7RcbiAgICAgICAgSG9va1JhbmdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA3MCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6KeS5bqm6IyD5Zu0J1xuICAgICAgICB9LFxuICAgICAgICAvL+aJgOacieeahHByZWZhYiDov5nnp43mlrnlvI/mmK/lkIzmraXnmoQg5Luj56CB5q+U6L6D5aW95YaZIOWwseaYr+mavuaLllxuICAgICAgICBQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBJbml0VGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6Kem56Kw5Yiw54mp5ZOB55qE5aOw6Z+zXG4gICAgICAgIENvbGxpc2lvbkF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvL+WKoOWIhueahOWjsOmfs1xuICAgICAgICBBZGRTY3JvZUF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvLyDpgZPlhbfnmoTnurnnkIZcbiAgICAgICAgUHJvcFNwcml0ZUZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgQm9vbToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgSG9va0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgSGVyb0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgTG90dGVyeUZyYW1zZToge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIneWni+WMllxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgLy/liqDovb3pppbpobXotYTmupBcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgc2V0R3VpZGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3VpZGVJbmRleDtcbiAgICAgICAgaWYgKGluZGV4IDw9IDMpIHtcbiAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlX1wiICsgaW5kZXgpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dEd1aWRlKGUsIG1zZykge1xuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKTtcbiAgICAgICAgbGV0IGd1aWRlXzEgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzFcIik7XG4gICAgICAgIGxldCBndWlkZV8yID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMyA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKTtcbiAgICAgICAgZ3VpZGVfMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1zZyA9PT0gXCIyXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDIpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjNcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMyk7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiNFwiKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgNCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZU5lZWRMYXllcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5byA5aeL5ri45oiPIOmCo+S5iOWIt+aWsOS4gOS4i+mBk+WFt+aVsOaNrlxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgLy8g5YWz6Zet55WM6Z2i5byA5aeL5ri45oiPXG4gICAgICAgICAgICB0aGlzLk5lZWRMYXllci5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIOeCueWHu+W8gOWni+a4uOaIj+S5i+WJjSDph43mlrDlkIzmraXkuIDkuIvpgZPlhbfkv6Hmga9cbiAgICAgICAgICAgICAvLyDpmpDol49iYW5uZXJcbiAgICAgICAgICAgIC8vIGNjLlRvb2xzLmhpZGVCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRGFvanUoKTtcbiAgICAgICAgICAgIHRoaXMuYWRqdXNCb29tTGF5b3V0KCk7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgLy8g5a+55YWz5Y2h6L+b6KGM5omT54K5XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICAvL+iOt+WPlumSqeWtkFxuICAgICAgICB0aGlzLkhvb2sgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyL0hvb2snKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDliJ3lp4vplb/luqZcbiAgICAgICAgdGhpcy5Ib29rSGVpZ2h0ID0gdGhpcy5Ib29rLmhlaWdodDtcbiAgICAgICAgLy/mlL7kuIvpkqnlrZDlvIDlhbMgMCDlgZzmraIgMSDlj5HlsIQgMuaLieWbnlxuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICAvLyDliJ3lp4vljJbnn7/lt6XnmoTnsr7ngbXluKdcbiAgICAgICAgdGhpcy5NaW5lclNwID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgIHRoaXMuc2VlVmlkZW9MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZWVWaWRlb2xheWVyJylcbiAgICAgICAgLy/lvpfliIbntK/orqFcbiAgICAgICAgdGhpcy5TY29yZSA9IGNjLmZpbmQoJ0NhbnZhcy9TY29yZUFuZFRhcmdldC9TY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v6YCa5YWz55uu5qCH5YiG5pWwXG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvVGFyZ2V0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lgJLorqHml7ZcbiAgICAgICAgdGhpcy5UaW1lID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL1RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+WFs+WNoeaVsFxuICAgICAgICB0aGlzLkNoZWNrcG9pbnQgPSBjYy5maW5kKCdDYW52YXMvQ2hlY2twb2ludEFuZFRpbWUvQ2hlY2twb2ludCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuTmVlZExheWVyID0gY2MuZmluZCgnQ2FudmFzL05lZWRMYXllcicpO1xuICAgICAgICB0aGlzLkJhY2tMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrTGF5ZXInKTtcbiAgICAgICAgdGhpcy5Qcm9wTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvUHJvcCcpO1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllciA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwiTG90dGVyeUxheWVyXCIpO1xuICAgICAgICAvL+eJqeWTgeWMuuWfn1xuICAgICAgICB0aGlzLml0ZW1BcmVhID0gY2MuZmluZCgnQ2FudmFzL0l0ZW1BcmVhJyk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKeXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy/ph43nu4RwcmVmYWLmlbDnu4Qg5pa55L6/5p+l6K+iXG4gICAgICAgIHRoaXMuUHJlZmFiID0ge307XG4gICAgICAgIHRoaXMuUHJlZmFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5QcmVmYWJbaXRlbS5fbmFtZV0gPSBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WPkeWwhOmSqeWtkOaMiemSrlxuICAgICAgICBsZXQgZW1pdEhvb2sgPSBjYy5maW5kKCdDYW52YXMvZW1pdEhvb2tCdG4nKTtcbiAgICAgICAgLy/lvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnQ2FudmFzL01hc2snKTtcbiAgICAgICAgLy/muLjmiI/nu5PmnZ/mjInpkq4g5YyF5ous6L+H5YWzL+e7k+adn+a4uOaIj1xuICAgICAgICB0aGlzLk1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLkNsb3NlTWFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZW1pdEhvb2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVtaXRIb29rQnRuLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAtMTtcbiAgICAgICAgdGhpcy5saXF1aWROdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuY2xpY2tXZWFwb24gPSB0cnVlO1xuICAgICAgICB0aGlzLlJlc2V0SW5mbygpO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLlNldExldmVsKCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlVGFyZ2V0U2NvcmUoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVJdGVtKCk7XG4gICAgICAgIHRoaXMucmVkUGFjayA9IHRoaXMubGV2ZWxJbmZvLnJlZFBhY2s7XG4gICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrID0gMDtcbiAgICAgICAgLy8g5piv5ZCm5paw5omL5byV5a+8XG4gICAgICAgIHRoaXMuZ3VpZGVJbmRleCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKTtcblxuICAgICAgICBjYy5Ub29scy5FdmVudC5vbignZ2V0V2VhcG9uJywgdGhpcy5nZXRXZWFwb25GdW5jLCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oJ2dldFJlZFBhY2thZ2UnLCB0aGlzLmdldFJlZFBhY2thZ2VGdW5jLCB0aGlzKTtcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGVJbmRleCA8IDQgJiYgdGhpcy5ndWlkZUluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5pyJ5paw5omL5byV5a+85pqC5YGc5ri45oiPXG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRHdWlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAvLyBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgICAgICB0aGlzLk5lZWRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5lZWRTY29yZSA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwibmVlZFNjb3JlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsZXQgbmVlZExldmVsID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5lZWRTY29yZS5zdHJpbmcgPSBg6KaB5rGC5YiG5pWw77yaJHt0aGlzLmxldmVsSW5mby5zY29yZX1gXG4gICAgICAgICAgICBuZWVkTGV2ZWwuc3RyaW5nID0gYOesrCR7dGhpcy5sZXZlbEluZm8uaWR95YWzYDtcbiAgICAgICAgICAgIC8vIOaKveWllumAieWFs+WNoVxuICAgICAgICAgICAgLy8g5YmN56uv6ZqP5py65LiA5Liq6YGT5YW3XG4gICAgICAgICAgICAvLyDngrjlvLnvvJoxMCAxMeaXtumSnyAxM+iNr+awtFxuICAgICAgICAgICAgbGV0IGFyciA9IFsxMCwgMTEsIDEzXTtcbiAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgbGV0IHByb3AgPSBhcnJbcmRtXTtcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeVByb3AgPSBwcm9wO1xuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLkxvdHRlcnlMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzJdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVswXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgTG9va1ZpZGVvR2V0QXdhcmQoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoNSk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICBoYW5kbGVEYW9qdSgpIHtcbiAgICAgICAgLy8g6YGT5YW355qE5pWw6YeP5Li6XG4gICAgICAgIGxldCB3ZWFwb24gPSBjYy56bS5MZXZlbEluZm8ud2VhcG9uO1xuICAgICAgICAvLyBwcm9w57G75Z6LIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDEzLuiNr+awtCAxNC7kuInlj7bojYlcbiAgICAgICAgLy8g5aSE55CG6YGT5YW3IOmBk+WFt+WIhuWIq+S4uiDngrjlvLkgYm9vbU51bWJlciDml7bpkp8gY2xvY2tOdW1iZXIg55+z5YyW5omL5YaMIGhhbmRib29rTnVtYmVyIOiNr+awtCBsaXF1aWROdW1iZXIg5LiJ5Y+26I2JIGNsb3Zlck51bWJlclxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiBcIuS9k+WKm1wiLFxuICAgICAgICAgICAgXCIxMFwiOiBcIueCuOW8uVwiLFxuICAgICAgICAgICAgXCIxMVwiOiBcIuaXtumSn1wiLFxuICAgICAgICAgICAgXCIxMlwiOiBcIuefs+WMluaJi+WGjFwiLFxuICAgICAgICAgICAgXCIxM1wiOiBcIuiNr+awtFwiLFxuICAgICAgICAgICAgXCIxNFwiOiBcIuS4ieWPtuiNiVwiXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWFwb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSB3ZWFwb25baV0ubnVtIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5YW25LuW54mp5ZOB6YKj5LmI55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogd2VhcG9uW2ldLnByb3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSB3ZWFwb25baV0ubnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kYm9va051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpcXVpZE51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Zlck51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZKp5a2Q5peL6L2sXG4gICAgICovXG4gICAgSG9va1JvVGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgLy/pmZDliLbojIPlm7Qg5Y+q6IO95ZyoIDcwIOS4jiAtNzAg5LmL6Ze0XG4gICAgICAgIGlmICh0aGlzLkhvb2suYW5nbGUgPj0gNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAtdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkhvb2suYW5nbGUgPD0gLTcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gTWF0aC5hYnModGhpcy5yb3RhdGVTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5Ib29rLmFuZ2xlICs9IHRoaXMucm90YXRlU3BlZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZDmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBlbWl0SG9va0J0bigpIHtcbiAgICAgICAgLy9UT0RPIOWBnOatoumSqeWtkOaXi+i9rFxuICAgICAgICAvL+aJk+W8gC/lhbPpl60g6ZKp5a2Q5byA5YWzIOayoeacieaLieWbnuS5i+WJjSDlvZPliY1wb3NpdGlvbiDvvIE9IOWIneWni+S9jee9ruaXtiDkuI3lhYHorrjmk43kvZxcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG4gICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwiZmFuZ1wiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2QXG4gICAgICovXG4gICAgZW1pdEhvb2soKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5Ib29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlM1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLmFkZEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcEhvb2tNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmi4nlm57pkqnlrZBcbiAgICAgKi9cbiAgICBQdWxsQmFja0hvb2soKSB7XG4gICAgICAgIC8v5pKt5pS+5ouJ5Zue6ZKp5a2Q5Yqo55S7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwibGFcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgcHJvbW90ZSA9IDEuMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BlZWQgPSBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdLnNwZWVkICogcHJvbW90ZSB8fCAxMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN572u5omA5pyJ5YiG5pWw5L+h5oGvXG4gICAgICovXG4gICAgUmVzZXRJbmZvKCkge1xuICAgICAgICAvL3RoaXMudmljdG9yeSDmuLjmiI/og5zliKnlpLHotKXnirbmgIEgMCA9IOa4uOaIj+S4rSAxID0g5oiQ5YqfIDIgPSDlpLHotKVcbiAgICAgICAgdGhpcy52aWN0b3J5ID1cbiAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRhcmdldFNjb3JlLnN0cmluZyA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOWAkuiuoeaXtlxuICAgICAqL1xuICAgIFN0YXJ0VGltZSgpIHtcbiAgICAgICAgLy8g5piv5ZCm5a2Y5Zyo5pe26ZKfIOWtmOWcqOaXtumSnyB0aGlzLkluaXRUaW1lKzEw56eSXG4gICAgICAgIGlmICh0aGlzLmNsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMTVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgICAgICBpZihjYy56bS5MZXZlbEluZm8uc3RhZ2U8PTUpe1xuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic3RhcnRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlKVxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruWumui/h+WFs+ebruagh+WIhuaVsFxuICAgICAqIOebruagh+WIhuaVsOagueaNruWFs+WNoeWFs+aVsOehruWumiDpmr7luqbntK/liqDnjofkuLpcbiAgICAgKiAg5Z+65pWwIDEwMDBcbiAgICAgKiAg5q+P5YWz6YCS5aKeNTAw5YiGXG4gICAgICogXG4gICAgICog5pyA5aSnIDUwMDDliIZcbiAgICAgKi9cbiAgICBDcmVhdGVUYXJnZXRTY29yZSgpIHtcbiAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSB0aGlzLmxldmVsSW5mby5zY29yZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ54mp5ZOBIOmcgOimgeagueaNruebruagh+WIhuadpeeUn+aIkCDnlJ/miJDnmoTmiYDmnInnianlk4HmgLvliIblv4Xpobvmr5Tnm67moIfov4flhbPliIbmlbDpq5gyMCVcbiAgICAgKiDnlJ/miJDnmoTnianlk4HmlbDph4/lnKggMTAtMzBcbiAgICAgKi9cbiAgICBDcmVhdGVJdGVtKCkge1xuICAgICAgICBsZXQgbmV3SXRlbUFyciA9IHRoaXMubmV3Q3JlYXRlQ2FsYygpO1xuICAgICAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5qC55o2u5YiG5pWw5YWI5bCGYXJyIOaOkuW6jyDmgLvliIbkuI3og73otoXov4fmnIDlpKfliIbmlbAg5aaC5p6c6LaF5LqGIOWImeS7juWwj+W8gOWni+WHj+WwkSDnm7TliLDliIbmlbDlsI/kuo7mnIDlpKfliIbmlbBcbiAgICAgICAgLy/nlJ/miJDnm7jlupTnmoRQcmZhYlxuICAgICAgICBuZXdJdGVtQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW2l0ZW0ubmFtZV0pO1xuICAgICAgICAgICAgbGV0IFhZID0gdGhpcy5yYW5kb21YWShub2RlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IGl0ZW0uc2NvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5wcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYSA9IGl0ZW0ucHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oWFkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJUbnRcIikge1xuICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJ0bnRCb29tXCI7XG4gICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbihjYy52MihYWS54LCBYWS55IC0gMjE4KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5ib29tID0gYm9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvZG/lhYjkuI3liJvlu7rogIHpvKDor5Xor5VcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLm1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxJbmZvLm1vdXNlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIOaZrumAmuiAgem8oFxuICAgICAgICAgICAgbGV0IG1vdXNlTnVtYmVyID0gTnVtYmVyKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKG1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiTW91c2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgRHJpbGxNb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChEcmlsbE1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRHJpbGxNb3VzZU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJbXCJEcmlsbE1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNzAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU1vdXNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g55Sf5oiQ55qE54mp5ZOB5piv5Y+v5Yqo55qEXG4gICAgbW92ZU1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIOWFiOWwhuiAgem8oOenu+WKqOWIsOacgOWPs+i+uSDml7bpl7TkuLo2MDAv6Led56a7KjVcbiAgICAgICAgbGV0IF9tb3ZlVGltZSA9IDEwXG4gICAgICAgIGxldCB0aW1lID0gKHBhcnNlSW50KDMwMCAtIG1vdXNlLngpIC8gNjAwKSAqIF9tb3ZlVGltZVxuICAgICAgICBjYy50d2Vlbihtb3VzZSkudG8odGltZSwgeyB4OiAzMDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyDnjrDlnKjlvIDlp4sg6ICB6byg5YGa6KeE5b6L6L+Q5Yqo5YWI5bCG6ICB6byg5Y+N6L2sXG4gICAgICAgICAgICBpZiAobW91c2UubmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG1vdXNlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oX21vdmVUaW1lLCB7IHg6IC0zMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfSkudG8oX21vdmVUaW1lLCB7IHg6IDMwMCB9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Uuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgfSkpLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSArIDEpXG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5XjgILjgILkuIDlj6rmnInkuIDkuKrmgLvmlbDph48g5Y+v5Lul5b6X5YiwIOWQhOS4queJqeWTgeeahOaVsOmHj1xuICAgIG5ld0NyZWF0ZUNhbGMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVJdGVtQXJyID0gW107XG4gICAgICAgIC8vIOWFiOeUn+aIkOe6ouWMhei3n+elnuenmOeJqeWTgVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCBleHRyYSA9IHRoaXMubGV2ZWxJbmZvLmV4dHJhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIDDmmK/nuqLljIUg5Yib5bu65LiA5Liq57qi5YyFXG4gICAgICAgICAgICBpZiAoZXh0cmFbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLl9hcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0cmFbMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBfcHJvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56We56eY54mp5ZOBIOWFiOmaj+acuuWHuueJqeWTgSDmmK/lkKbmnInkuInlj7bojYkg5aaC5p6c5pyJIOiNr+awtOeahOmaj+acuuamgueOh+WinuWKoFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsb3Zlck51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi54K45by5XCIsIFwiM+WFg+e6ouWMhVwiLCBcIjXlhYPnuqLljIVcIiwgXCLoja/msLRcIiwgXCLoja/msLRcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBybWQgPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBfcHJvcCA9IGFycltybWRdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeXN0ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8gOWHuueahOe6ouWMhemHkeminVxuICAgICAgICAgICAgICAgICAgICBcInByb3BcIjogX3Byb3AsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5ib29tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxJbmZvLmJvb207IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruenr+WIhiDnlJ/miJDlr7nlupTkuKrmlbBcbiAgICAgICAgaWYgKCF0aGlzLmxldmVsSW5mby5nb29kKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5mbyA9IHRoaXMubGV2ZWxJbmZvLmdvb2Quc3BsaXQoXCIsXCIpO1xuICAgICAgICAvLyBsZXQgbWF4U2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IHNjb3JlQXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9pbmZvID0gaW5mb1tpXS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IF9pbmZvWzBdO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBOdW1iZXIoX2luZm9bMV0pXG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gdGhpcy5jcmVhdGVCeVR5cGUodHlwZSwgcGVyY2VudCk7XG4gICAgICAgICAgICBzY29yZUFyciA9IFsuLi5zY29yZUFyciwgLi4ubmV3QXJyXVxuICAgICAgICB9XG4gICAgICAgIC8vIOWwhuenr+WIhuaVsOe7hOaOkuW6j1xuICAgICAgICBsZXQgX3Njb3JlQXJyID0gc2NvcmVBcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPiBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5zY29yZSA8IGIuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6K6h566X5omA5pyJYXJy5Lit55qE5YiG5pWw5piv5LiN5piv6LaF6L+HIOacrOWFs+eahOacgOWkp+WAvCDlpoLmnpzotoXov4fpgqPkuYjku47lkI7lvoDliY3orqHnrpflgLxcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgICBsZXQgdG90YWxTY29yZSA9IHRoaXMubGV2ZWxJbmZvLm1heFNjb3JlO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2NvcmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9zY29yZSArPSBfc2NvcmVBcnJbaV0uc2NvcmU7XG4gICAgICAgICAgICBpZiAoX3Njb3JlIDw9IHRvdGFsU2NvcmUpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChfc2NvcmVBcnJbaV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4ubmV3QXJyXTtcbiAgICAgICAgLy8g5bCGY3JlYXRlSXRlbUFycuaOkuW6j+aMieeFp+WuveW6plxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gY3JlYXRlSXRlbUFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA+IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICB9LFxuICAgIC8vIOagueaNruenr+WIhui3n+exu+Wei+eUn+aIkOaVsOmHj25hbWVcbiAgICBjcmVhdGVCeVR5cGUodHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+efs+WdlyDmmK/lkKbmnInljJbnn7PmiYvlhowg5aaC5p6c5pyJIOefs+WktOeahOS7t+WAvOaPkOWNhzIwJSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRib29rTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIHByb21vdGUgPSAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJTdG9uZS1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbMjAsIDMwLCA0MF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aENpZyA9IFs0MiwgODksIDE1NF07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWdbcmRtXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUgKyByZG0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHNjb3JlQ2lnW3JkbV0gKiBwcm9tb3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aENpZ1tyZG1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+m7hOmHkVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiR29sZC1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN56ev5YiG55qE5pyA5aSn5YC85Yqo5oCB55Sf5oiQ5pWw57uEXG4gICAgICAgICAgICAgICAgICAgIGxldCBfX3Njb3JlID0gc2NvcmUgLSBfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3Njb3JlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSBbNTAsIDEwMCwgMTUwLCAyMDAsIDMwMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2tleSA9IE1hdGguZmxvb3IoX19zY29yZSAvIDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IF9rZXkgPiA0ID8gNCA6IF9rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5OyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZy5wdXNoKDUwICogKDEgKyBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI1MFwiOiAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwXCI6IDYyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxNTBcIjogODMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjIwMFwiOiAxMDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjMwMFwiOiAxNDZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCBzY29yZUNpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQ2lnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aFtcIlwiICsgc2NvcmVDaWdbcmRtXV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv6ZK755+zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJEcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiTXlzdGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZUNpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSAtIF9zY29yZSA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSB0aGlzLmNyZWF0ZVJhbmRtKDMwLCAyMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlIC0gX3Njb3JlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgc2NvcmUgLSBfc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IHNjb3JlQ2lnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmaj+acuuWdkOaghyDliKTmlq3ov5nkuKrlnZDmoIfkuqfnlJ/nmoRyZWN05piv5ZCm6Lef5YW25LuW55qE5omA5pyJ55qE54mp5ZOB55qEcmVjdOebuOaOpeinpiDlpoLmnpzmsqHmnInov5Tlm57lnZDmoIcg5aaC5p6c5o6l6Kem6YeN5paw6ZqP5py6XG4gICAgICovXG4gICAgcmFuZG9tWFkoaXRlbSkge1xuICAgICAgICAvL3ggPSDlsY/luZXlrr3luqYgLyAyICog6ZqP5py65pWwXG4gICAgICAgIC8veSA9IOWcsOW5s+mdouS9jee9riArIOmaj+acuuaVsGNjLnJhbmRvbTBUbzEoKSAr6auY5bqm6IyD5Zu077yI5Y+v5Lul6K+05pivWeeahOacgOWwj+eCue+8iVxuICAgICAgICAvL+WcsOW5s+mdouS9jee9riA9IOWcsOmdonkgKyDlnLDpnaIg6auY5bqmIC8gMlxuICAgICAgICAvLyAtIDMw5piv5Zug5Li654mp5ZOB6ZSa54K55Zyo5Lit6Ze05L2N572uIOiuvue9ruWdkOagh+WIsOiMg+WbtOWumueCueeahOaXtuWAmSDkvJrmnInpg6jliIbotoXlh7pcbiAgICAgICAgbGV0IGdyb3VuZFkgPSB0aGlzLml0ZW1BcmVhLnkgKyB0aGlzLml0ZW1BcmVhLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgLy8g6ZqP5py655Sf5oiQ55qE5LiA5Liq5Z2Q5qCHXG4gICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KHBvcy54IC0gaXRlbS53aWR0aCAvIDIsIHBvcy55IC0gaXRlbS5oZWlnaHQgLyAyLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgaXNQZW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gbi5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmIChib3VuZGluZ0JveC5pbnRlcnNlY3RzKHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVuZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1BlbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21YWShpdGVtKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeCuOW8ueiMg+WbtOeahOeJqeWTgei/m+ihjOmUgOavgVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gVG50XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZGVzdHJveVRudChUbnQpIHtcbiAgICAgICAgLy8g6YGN5Y6GdGhpcy5pdGVtQXJlYeWGheaJgOacieeahOiKgueCuSDlvZPoioLngrnnmoTkuK3lv4PoioLngrnlnKjngrjlvLnlhoUg5YiZ6ZSA5q+BXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobiAhPT0gVG50KSB7XG4gICAgICAgICAgICAgICAgLy8g6YCa6L+HVG5055qE5Lit5b+D5L2N572uIOWIm+W7uuS4gOS4qnJlY3TljLrln59cbiAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IFRudC5nZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KF9wb3MueCAtIDEyNSwgX3Bvcy55IC0gMTI1LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMocG9zKSkge1xuICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog55Sf5oiQbi1t6ZqP5py65pWwXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5YWz6Zet57uz5a2Q54q25oCBXG4gICAgICovXG4gICAgU3RvcEhvb2tNb3ZlKCkge1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuSG9vay5oZWlnaHQgPSB0aGlzLkhvb2tIZWlnaHQ7XG4gICAgICAgIC8v6YeN572u5Y+R5bCE6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICB0aGlzLkhvb2suZ2V0Q2hpbGRCeU5hbWUoXCJob29rXzFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhvb2tGcmFtZXNbMF1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWkhOeQhuaLieWbnueahOeJqeWTge+8jOWIoOmZpOeJqeWTgeS7peWPiua3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEhhbmRsZShpdGVtcykge1xuICAgICAgICB0aGlzLkFkZFByb3AoaXRlbXMpO1xuICAgICAgICB0aGlzLkFkZFNjb3JlKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5SZW1vdmVJdGVtKGl0ZW1zKTtcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6L+Y5pyJ54mp5ZOB5Zyo5Zyw5Zu+5LiKIOWmguaenOayoeaciemCo+S5iOe7k+eulyDnu5PmnZ9cbiAgICAgICAgaWYgKHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyDlnLDlm77nianlk4HmtojlpLEg57uT566XXG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIikpIHtcbiAgICAgICAgICAgIGxldCBib29tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vbVwiKVxuICAgICAgICAgICAgYm9vbS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICBib29tLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGJvb20gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDosIPmlbTnjrDmnInnmoTngrjlvLnnmoTnjrDlrp7mlYjmnpxcbiAgICBhZGp1c0Jvb21MYXlvdXQoKSB7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xuICAgICAgICBsYXlvdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYm9vbU51bWJlciA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IGxheW91dC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChpIDw9IHRoaXMuYm9vbU51bWJlcikge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+mBk+WFt1xuICAgICAqL1xuICAgIEFkZFByb3AoaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtc1swXSkgcmV0dXJuO1xuICAgICAgICBpZiAoaXRlbXNbMF0ubmFtZSA9PT0gXCJNeXN0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gaXRlbXNbMF0uZXh0cmE7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIz5YWD57qi5YyFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNeWFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIuiNr+awtFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56ev5YiGXG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNjb3JlICs9IChwcm9wIHx8IDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIHByb3ApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiUmVkXCIpIHtcbiAgICAgICAgICAgIC8vIOmaj+acujMtOOWdl+mSsSAy5L2N5pyJ5pWI5bCP5pWwXG4gICAgICAgICAgICBsZXQgZXh0cmFSZWRQYWNrID0gKE1hdGguZmxvb3IodGhpcy5jcmVhdGVSYW5kbSgzMDAsIDgwMCkpKSAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IGV4dHJhUmVkUGFjaztcbiAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInJlZFwiLCBleHRyYVJlZFBhY2spO1xuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01lc3RlcnkodHlwZSkge1xuICAgICAgICAvLyBbXCLngrjlvLlcIixcIjPlhYPnuqLljIVcIixcIjXlhYPnuqLljIVcIixcIuiNr+awtFwiXVxuICAgICAgICBsZXQgbWVzdGVyeSA9IHRoaXMuUHJvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNZXN0ZXJ5XCIpO1xuICAgICAgICBtZXN0ZXJ5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1lc3RlcnkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlByb3BTcHJpdGVGcmFtZXNbdHlwZV07XG4gICAgICAgIG1lc3Rlcnkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MudHdlZW4obWVzdGVyeSkudG8oMiwgeyB5OiBtZXN0ZXJ5LnkgKyAxMDAsIG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBtZXN0ZXJ5Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBtZXN0ZXJ5LnkgLT0gMTAwO1xuICAgICAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOeJqeWTgVxuICAgICAqL1xuICAgIFJlbW92ZUl0ZW0oaXRlbXMpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOa3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEFkZFNjb3JlKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKCFpdGVtc1swXS5zY29yZSkgcmV0dXJuO1xuICAgICAgICAvLyBsZXQgc2NvcmVDb24gPSBJdGVtQXR0cltpdGVtc1swXS5uYW1lXSB8fCB7fTtcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAoaXRlbXNbMF0uc2NvcmUgfHwgMCk7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgKz0gKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICAvL+aSreaUvuW+l+WIhumfs+aViFxuICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aKe5Yqg5LiA5Liq5aKe5Yqg56ev5YiG6aOY5ZCRLS0tPlNjb3Jl5L2N572u54K55Yqo55S7XG4gICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIGl0ZW1zWzBdLnNjb3JlKVxuICAgIH0sXG4gICAgLy8g5YGa5LiA5Liq5aKe5Yqg56ev5YiG54K55Yqo55S7XG4gICAgYWRkQW5pbSh0eXBlLCBzY29yZSkge1xuICAgICAgICBsZXQgYWRkID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2NvcmVcIikge1xuICAgICAgICAgICAgYWRkID0gdGhpcy5TY29yZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkZFNjb3JlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicmVkXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRSZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyBzY29yZTtcbiAgICAgICAgYWRkLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGFkZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgYWRkLnkgPSAtMTMyO1xuICAgICAgICBjYy50d2VlbihhZGQpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMSwgeyB5OiA0MiB9KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmL7npLpNYXNrIHZpY3Rvcnk9MCB2aWN0b3J5PTHog5zliKkgdmljdG9yeT0y5aSx6LSlXG4gICAgICovXG4gICAgU2hvd01hc2soKSB7XG4gICAgICAgIC8v5pi+56S65by55Ye65qGGXG4gICAgICAgIC8vIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKVxuICAgICAgICBsZXQgRmFpbCA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIkZhaWxcIik7XG4gICAgICAgIGxldCBTdWNjZXNzID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgRmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYoY2Muem0uTGV2ZWxJbmZvLnN0YWdlPD01KXtcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImVuZF9cIitjYy56bS5MZXZlbEluZm8uc3RhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5Yqf5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5oiQ5YqfXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacqumihuWPllxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYmwuc3RyaW5nID0gYOavj+aXpeS7u+WKoei+vuaIkOadoeS7tu+8jOeci+W5v+WRiiR7aXRlbS5jdXJyX2FkfS8rJHtpdGVtLm5lZWRfYWR9LOmcgOimgemAmuWFsyR7aXRlbS5jdXJyX3Bhc3Nfc3RhZ2V9Lyske2l0ZW0ubmVlZF9wYXNzX3N0YWdlfWBcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3lkITnp43mnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3nlKjmiLflhbPljaHmnaHku7ZcbiAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3Bhc3Nfc3RhZ2UgPCBpdGVtLm5lZWRfcGFzc19zdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3lhbPljaHnrYnnuqflsI/kuo7pnIDopoHlhbPljaHnrYnnuqdcbiAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDpgJrlhbMke2l0ZW0ubmVlZF9wYXNzX3N0YWdlfeWFs+WQjuWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhbPljaHnrYnnuqfovr7miJAg5Yik5pat56ys5LqM5p2h5Lu2IFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3NpZ25faW4gPCBpdGVtLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlrozmiJDku4rml6Xnrb7liLDlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX2FkIDwgaXRlbS5uZWVkX2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlho3nnIske2l0ZW0ubmVlZF9hZCAtIGl0ZW0uY3Vycl9hZH3kuKrop4bpopHlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGF3cmFkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBhd3JhZC5zdHJpbmcgPSBg5aWW5Yqx57qi5YyFKyR7dGhpcy5yZWRQYWNrfWA7XG4gICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcykge1xuICAgICAgICAgICAgICAgIGF3cmFkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0YXRBd2FyZCA9IFN1Y2Nlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJleHRyYUF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRhclJlZFBhY2spIHtcbiAgICAgICAgICAgICAgICBsZXQgc3RyID0gdGhpcy5oYW5kbGVOdW1iZXIodGhpcy5leHRhclJlZFBhY2spO1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHtzdHJ9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaIkOWKn+aIluiAheWksei0peWPkemAgeaVsOaNriByZWRfcGFjazrnuqLljIUgc2NvcmU65YiG5pWwIHRz77ya5pe26Ze05oizIHNpZ24gTUQ15pWw5o2uXG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImJvbWJcIjogdGhpcy5ib29tTnVtYmVyICsgMSwvL+eCuOW8ueS4quaVsFxuICAgICAgICAgICAgICAgIFwicG90aW9uXCI6IHRoaXMubGlxdWlkTnVtYmVyLC8v6I2v5rC0XG4gICAgICAgICAgICAgICAgXCJzY29yZVwiOiB0aGlzLmN1clNjb3JlLC8v5YiG5pWwXG4gICAgICAgICAgICAgICAgXCJ0c1wiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8v5pe26Ze05oizXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMudmljdG9yeSA9PT0gMikge1xuICAgICAgICAgICAgRmFpbC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwidGhyb3VnaFwiLHtcbiAgICAgICAgICAgICAgICBsZXZlbF9udW06Y2Muem0uTGV2ZWxJbmZvLnN0YWdlLFxuICAgICAgICAgICAgICAgIGxldmVsX3Jlc3VsdDpcIuWksei0pVwiXG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLy8g6YCa5YWz5aSx6LSl5LiN55So5ZGK6K+J5pyN5Yqh5ZmoXG4gICAgICAgIH1cbiAgICAgICAgY2MudHdlZW4odGhpcy5NYXNrKS50bygwLjMsIHsgc2NhbGU6IDEgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWkhOeQhuWwj+aVsOeyvuW6pumXrumimFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgICBoYW5kbGVOdW1iZXIobnVtYil7XG4gICAgICAgIC8vIOWFiOiusuaVsOWtl+i9rOaNouaIkOWtl+espuS4slxuICAgICAgICBsZXQgc3RyID0gXCJcIitudW1iO1xuICAgICAgICBsZXQga2V5ID0gc3RyLnNwbGl0KFwiLlwiKTtcbiAgICAgICAgbGV0IG5ld0tleSA9IGtleVswXStcIi5cIitrZXlbMV0uc2xpY2UoMCwyKTtcbiAgICAgICAgcmV0dXJuIG5ld0tleTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOaBouWkjea4uOaIj++8jOWFs+mXreW8ueWHuuahhlxuICAgICAqIOWmguaenOaYr+a4uOaIj+mAmuWFs+WOn+WboOiAjOaJk+W8gOeahOW8ueWHuuahhuS4jeS6iOeQhuedrFxuICAgICAqL1xuICAgIENsb3NlTWFzaygpIHtcbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSkgcmV0dXJuO1xuICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjeeOqeacrOWFs1xuICAgICAqL1xuICAgIFJlbG9hZCgpIHtcbiAgICAgICAgLy/lgZzmraLlgJLorqHml7ZcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIC8v6YeN6L295Zy65pmvXG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnR2FtZScpO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnu6fnu63kuIvkuIDlhbNcbiAgICAgKi9cbiAgICBOZXh0KCkge1xuXG4gICAgICAgIHN3aXRjaCAodGhpcy52aWN0b3J5KSB7XG4gICAgICAgICAgICBjYXNlIDA6XG4gICAgICAgICAgICAgICAgLy/nu6fnu63muLjmiI9cbiAgICAgICAgICAgICAgICB0aGlzLkNsb3NlTWFzaygpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIC8vIOi/h+WFs+aIkOWKn+eCueWHu+i/m+WFpeS4i+S4gOWFs+S5i+WJjSDlhYjojrflj5bnlKjmiLfkv6Hmga8g55yL55So5oi35piv5ZCm5pyJ5L2T5YqbXG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2T5Yqb5aSn5LqOMCDov5vlhaXkuIvkuIDlhbNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLnN0YWdlIDwgMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5SZWxvYWQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXov5Tlm57kuLvnlYzpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5lbmRDb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2VlVmlkZW9MYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICAvL+mAgOWHuua4uOaIj1xuICAgICAgICAgICAgICAgIHRoaXMuRXhpdEdhbWUoKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+e6ouWMhVxuICAgIEF3YXJkVmlkZW8oZSkge1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKDIpO1xuICAgICAgICBsZXQgcGFjayA9IGNjLnptLkxldmVsSW5mby5ldmVyX3Bhc3MgPyAwIDogdGhpcy5yZWRQYWNrO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcInJlZF9wYWNrXCI6IHBhcnNlSW50KChwYWNrICsgdGhpcy5leHRhclJlZFBhY2spICogMTAwKSwvL+e6ouWMhVxuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZFxuICAgICAgICB9XG4gICAgICAgIGNjLnptLnZpZGVvQWQucmVkUGFjayA9IHNlbmREYXRhO1xuICAgICAgICB0aGlzLnRpbWVyICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICB9LFxuICAgIC8vIOeci+inhumikeW+l+S9k+WKm1xuICAgIHNlZVZpZGVvQXdhcmQoZSkge1xuICAgICAgICBjYy56bS52aWRlb0FkLmVudGVyR2FtZSA9IHRydWU7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoMSk7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICB0aGlzLnRpbWVyICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIGNsb3NlTGF5ZXIoZSkge1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGFyZ2V0LnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmAgOWHuua4uOaIjyDov5Tlm57kuIrkuIDkuKrlnLrmma9cbiAgICAgKi9cbiAgICBFeGl0R2FtZSgpIHtcbiAgICAgICAgY2MuZW5kQ291bnRUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIFJlc3VtZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaaguWBnOW9k+WJjeeVjOmdolxuICAgIFBhdXNlR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5NaW5lclNwLnBhdXNlZCA9IHRydWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDog5zliKnmiJblpLHotKXpg73op4bkuLrmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgLy/liKTmlq3nlKjmiLflvpfliIbmmK/lkKbotoXov4fnm67moIfliIZcbiAgICAgICAgbGV0IHMgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgPj0gcGFyc2VJbnQodGhpcy5UYXJnZXRTY29yZS5zdHJpbmcpKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5ri45oiP5aSx6LSlXG4gICAgICAgICAgICBzID0gMjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWN0b3J5ID0gcztcbiAgICAgICAgdGhpcy5TaG93TWFzaygpO1xuICAgIH0sXG4gICAgZ2V0UmVkUGFja2FnZUZ1bmMoKXtcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0t55yL6KeG6aKR5b6X57qi5YyFXCIpXG4gICAgICAgIGlmIChjYy56bS52aWRlb0FkLnJlZFBhY2spIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzQWRcIiwgXCJQT1NUXCIsIGNjLnptLnZpZGVvQWQucmVkUGFjaykudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1VzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2Muem0udXNlckluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5aaC5p6c5L2T5Yqb5aSn5LqOMCDov5vlhaXkuIvkuIDlhbNcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLnVzZXJJbmZvLnBvd2VyID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1N0YWdlXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS5MZXZlbEluZm8gPSByZXMuZGF0YTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy56bS52aWRlb0FkLnJlZFBhY2sgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDnm7TmjqXov5Tlm57kuLvnlYzpnaJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdJbmRleCcpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5bCP5LqOMCDlvLnlh7rnnIvop4bpopHojrflvpfkvZPlipvnmoTmjqXlj6NcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgZ2V0V2VhcG9uRnVuYygpe1xuICAgICAgICAvLyDlg4/mnI3liqHlj5HpgIHor7fmsYLnnIvop4bpopHlvpfpgZPlhbdcbiAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0t55yL6KeG6aKR5b6X6YGT5YW3XCIpO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkLFxuICAgICAgICAgICAgXCJ3ZWFwb25cIjogdGhpcy5Mb3R0ZXJ5UHJvcFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5MlwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeUF3YXJkID0gcmVzLmRhdGEuYXdhcmQ7XG4gICAgICAgICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VHYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTmVlZExheWVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubW92ZU1vdXNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEhvb2soKTtcbiAgICAgICAgdGhpcy5Ib29rUm9UYXRlKCk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICB1c2VQcm9wKGUsIG1zZykge1xuICAgICAgICAvLyDlpoLmnpzmmK/ngrjlvLlcbiAgICAgICAgc3dpdGNoIChtc2cpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnirbmgIHlv4XpobvmmK/nu7PlrZDlpITkuo7og73mi4nlm57nmoTnirbmgIFcbiAgICAgICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnianlk4FcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdICYmIHRoaXMuYm9vbU51bWJlciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOeCuOW8ueWDj+acjeWKoeWZqOWPkemAgea2iOaBr1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5o+Q5YmN5YmN56uv5L2/55SoIOaYr+eUu+mdouWQjOatpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXItLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ouJ5Y6755qE54mp5ZOB55qE5L2N572uXG4gICAgICAgICAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gX25vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg54K45by55pWI5p6cXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJib29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKGNjLnYyKHBvcy54IC0gc2l6ZS53aWR0aCAvIDIsIHBvcy55IC0gc2l6ZS5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIF9ub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=