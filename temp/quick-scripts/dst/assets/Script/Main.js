
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
        console.log("使用体力成功");
      });
      cc.zm.LevelInfo = res.data; // 关闭界面开始游戏

      _this.NeedLayer.active = false; // 点击开始游戏之前 重新同步一下道具信息
      // 隐藏banner

      cc.Tools.hideBanner();

      _this.handleDaoju();

      _this.adjusBoomLayout();

      _this.ResumeGameLayer(); // 对关卡进行打点


      if (cc.zm.LevelInfo.stage <= 5) {
        cc.Tools.dot("start_" + cc.zm.LevelInfo.stage);
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
    cc.Tools.showBanner();
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
      var data = cc.Tools.createSignData(sendData);
      cc.Tools.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then(function (res) {
        console.log("Pass通关成功返回信息", res);
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
  // 看视频得红包
  AwardVideo: function AwardVideo(e) {
    cc.log("看视频得奖励");
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzcGxheU5hbWUiLCJyb3RhdGVTcGVlZCIsIkhvb2tSYW5nZSIsIlByZWZhYnMiLCJ0eXBlIiwiUHJlZmFiIiwiSW5pdFRpbWUiLCJDb2xsaXNpb25BdWRpbyIsIkF1ZGlvQ2xpcCIsIkFkZFNjcm9lQXVkaW8iLCJQcm9wU3ByaXRlRnJhbWVzIiwiU3ByaXRlRnJhbWUiLCJCb29tIiwiSG9va0ZyYW1lcyIsIkhlcm9GcmFtZXMiLCJMb3R0ZXJ5RnJhbXNlIiwib25Mb2FkIiwiaW5pdCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwic2V0R3VpZGUiLCJpbmRleCIsImd1aWRlSW5kZXgiLCJndWlkZSIsImZpbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIm5leHRHdWlkZSIsImUiLCJtc2ciLCJndWlkZV8xIiwiZ3VpZGVfMiIsImd1aWRlXzMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiUmVzdW1lR2FtZUxheWVyIiwiaGlkZU5lZWRMYXllciIsIlRvb2xzIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGlkZUJhbm5lciIsImhhbmRsZURhb2p1IiwiYWRqdXNCb29tTGF5b3V0Iiwic3RhZ2UiLCJkb3QiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJIb29rIiwiSG9va0hlaWdodCIsImhlaWdodCIsIkhvb2tTdGF0ZSIsImN1clNjb3JlIiwicGF1c2VHYW1lIiwiTWluZXJTcCIsImdldENvbXBvbmVudCIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJuZWVkU2NvcmUiLCJuZWVkTGV2ZWwiLCJzdHJpbmciLCJzY29yZSIsImlkIiwiYXJyIiwicmRtIiwiY3JlYXRlUmFuZG0iLCJMb3R0ZXJ5UHJvcCIsImljb24iLCJTcHJpdGUiLCJzcHJpdGVGcmFtZSIsIkxvb2tWaWRlb0dldEF3YXJkIiwic2hvd0ppbGlBZCIsInNlbmREYXRhIiwiYWQiLCJMb3R0ZXJ5QXdhcmQiLCJhd2FyZCIsIndlYXBvbiIsImkiLCJudW0iLCJjbG9ja051bWJlciIsImhhbmRib29rTnVtYmVyIiwiY2xvdmVyTnVtYmVyIiwibGVuZ3RoIiwiSG9va1JvVGF0ZSIsImFuZ2xlIiwiTWF0aCIsImFicyIsInNldEFuaW1hdGlvbiIsImNoaWxkcmVuIiwiY2hpbGRyZW5Db3VudCIsIkhhbmRsZSIsImFkZEFuaW1hdGlvbiIsIlN0b3BIb29rTW92ZSIsIlB1bGxCYWNrSG9vayIsIlNldFNwZWVkIiwib3RoZXIiLCJwcm9tb3RlIiwiSXRlbUF0dHIiLCJub2RlIiwibmFtZSIsInZpY3RvcnkiLCJ0aW1lciIsInVuc2NoZWR1bGUiLCJHYW1lT3ZlciIsInNjaGVkdWxlIiwiTGV2ZWwiLCJjdXJyZW50X3Njb3JlIiwibmV3SXRlbUFyciIsIm5ld0NyZWF0ZUNhbGMiLCJpbnN0YW50aWF0ZSIsIlhZIiwicmFuZG9tWFkiLCJwYXJlbnQiLCJleHRyYSIsInNldFBvc2l0aW9uIiwiYm9vbSIsImFkZENoaWxkIiwidjIiLCJ4IiwieSIsIm1vdXNlIiwic3BsaXQiLCJtb3VzZU51bWJlciIsIk51bWJlciIsInJhbmRYIiwid2lkdGgiLCJyYW5kb20iLCJyYW5kWSIsInBvcyIsIm1vdmVNb3VzZSIsIkRyaWxsTW91c2VOdW1iZXIiLCJfbW92ZVRpbWUiLCJ0aW1lIiwidHdlZW4iLCJ0byIsInN0YXJ0Iiwic2NoZWR1bGVPbmNlIiwic2NhbGVYIiwicmVwZWF0Rm9yZXZlciIsImRlbGF5IiwiY2FsbCIsImNyZWF0ZUl0ZW1BcnIiLCJfYXJyIiwib2JqIiwicHVzaCIsIl9wcm9wIiwicm1kIiwiZ29vZCIsImluZm8iLCJzY29yZUFyciIsIl9pbmZvIiwicGVyY2VudCIsIm5ld0FyciIsImNyZWF0ZUJ5VHlwZSIsIl9zY29yZUFyciIsInNvcnQiLCJhIiwiYiIsInRvdGFsU2NvcmUiLCJtYXhTY29yZSIsIl9zY29yZSIsInNjb3JlQ2lnIiwid2lkdGhDaWciLCJfX3Njb3JlIiwiX2tleSIsImZsb29yIiwia2V5IiwiayIsImdyb3VuZFkiLCJyZWN0IiwiUmVjdCIsImlzUGVuZyIsIm4iLCJib3VuZGluZ0JveCIsImdldEJvdW5kaW5nQm94IiwiaW50ZXJzZWN0cyIsImRlc3Ryb3lUbnQiLCJUbnQiLCJfcG9zIiwiZ2V0UG9zaXRpb24iLCJjb250YWlucyIsInJlbW92ZUZyb21QYXJlbnQiLCJkZXN0cm95IiwibSIsIml0ZW1zIiwiQWRkUHJvcCIsIkFkZFNjb3JlIiwiUmVtb3ZlSXRlbSIsImxheW91dCIsImlzTmFOIiwic2hvd01lc3RlcnkiLCJhZGRBbmltIiwic2hvd011c2ljIiwiYXVkaW9FbmdpbmUiLCJwbGF5IiwiZXh0cmFSZWRQYWNrIiwibWVzdGVyeSIsInN0b3BBbGxBY3Rpb25zIiwib3BhY2l0eSIsImFkZCIsIlNob3dNYXNrIiwic2hvd0Jhbm5lciIsIkZhaWwiLCJTdWNjZXNzIiwibGV2ZWxfbnVtIiwibGV2ZWxfcmVzdWx0IiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV2ZXJfcGFzcyIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJSZWxvYWQiLCJsb2FkU2NlbmUiLCJOZXh0IiwidXNlckluZm8iLCJwb3dlciIsIkV4aXRHYW1lIiwiQXdhcmRWaWRlbyIsInBhY2siLCJ2aWRlb0FkIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInRhcmdldCIsImNsb3NlTGF5ZXIiLCJwYXVzZWQiLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtBQUVIQyxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsQ0FEQTtBQUVURCxNQUFBQSxXQUFXLEVBQUU7QUFGSixLQVBMO0FBV1I7QUFDQUUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsRUFERjtBQUVQRixNQUFBQSxXQUFXLEVBQUU7QUFGTixL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LEVBQVMsQ0FBVCxDQUE1QixDQUFWLENBWjJELENBYTNEOzs7QUFDQSxjQUFJRixJQUFJLEdBQUd2SyxFQUFFLENBQUNpSyxXQUFILENBQWUsS0FBS2hKLElBQXBCLENBQVg7QUFDQXNKLFVBQUFBLElBQUksQ0FBQ2hCLElBQUwsR0FBWSxNQUFaO0FBQ0EsZUFBS0QsSUFBTCxDQUFVa0IsUUFBVixDQUFtQkQsSUFBbkI7QUFDQSxjQUFJbUksSUFBSSxHQUFHMVMsRUFBRSxDQUFDMlMsSUFBSCxDQUFRQyxjQUFSLEVBQVg7QUFDQXJJLFVBQUFBLElBQUksQ0FBQ0QsV0FBTCxDQUFpQnRLLEVBQUUsQ0FBQ3lLLEVBQUgsQ0FBTVcsR0FBRyxDQUFDVixDQUFKLEdBQVFnSSxJQUFJLENBQUN6SCxLQUFMLEdBQWEsQ0FBM0IsRUFBOEJHLEdBQUcsQ0FBQ1QsQ0FBSixHQUFRK0gsSUFBSSxDQUFDdE8sTUFBTCxHQUFjLENBQXBELENBQWpCO0FBQ0FtRyxVQUFBQSxJQUFJLENBQUN4SSxNQUFMLEdBQWMsSUFBZDtBQUNBd0ksVUFBQUEsSUFBSSxDQUFDOUYsWUFBTCxDQUFrQnpFLEVBQUUsQ0FBQzZTLFNBQXJCLEVBQWdDdkQsSUFBaEMsQ0FBcUMsTUFBckM7O0FBRUFrRCxVQUFBQSxLQUFLLENBQUM5RCxPQUFOOztBQUNBOEQsVUFBQUEsS0FBSyxHQUFHLElBQVI7QUFDQSxlQUFLcFMsS0FBTCxHQUFhLEVBQWI7QUFDQSxjQUFJMkMsT0FBTyxHQUFHO0FBQ1ZDLFlBQUFBLElBQUksRUFBRTtBQURJLFdBQWQ7QUFHQWhELFVBQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQixvQkFBckIsRUFBMkMsTUFBM0MsRUFBbURHLE9BQW5EO0FBQ0g7O0FBQ0Q7O0FBQ0o7QUFDSTtBQXBDUjtBQXNDSDtBQXRxQ0ksQ0FBVCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lvJXlhaUg5b6X5YiG562J6YWN572uIOWkqumVvyDmiYDku6XmjaLkuKrmlofku7blhplcbmltcG9ydCBJdGVtQXR0ciBmcm9tICcuL0NvbmZpZyc7XG5pbXBvcnQgTGV2ZWwgZnJvbSAnLi9MZXZlbCc7XG5jYy5DbGFzcyh7XG4gICAgZXh0ZW5kczogY2MuQ29tcG9uZW50LFxuXG4gICAgcHJvcGVydGllczoge1xuICAgICAgICAvL+mSqeWtkOmAn+W6plxuICAgICAgICBzcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMyxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOaXi+i9rOmAn+W6plxuICAgICAgICByb3RhdGVTcGVlZDoge1xuICAgICAgICAgICAgZGVmYXVsdDogMSxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6YCf5bqmJ1xuICAgICAgICB9LFxuICAgICAgICAvL+mSqeWtkOiMg+WbtFxuICAgICAgICBIb29rUmFuZ2U6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDcwLFxuICAgICAgICAgICAgZGlzcGxheU5hbWU6ICfpkqnlrZDml4vovazop5LluqbojIPlm7QnXG4gICAgICAgIH0sXG4gICAgICAgIC8v5omA5pyJ55qEcHJlZmFiIOi/meenjeaWueW8j+aYr+WQjOatpeeahCDku6PnoIHmr5TovoPlpb3lhpkg5bCx5piv6Zq+5ouWXG4gICAgICAgIFByZWZhYnM6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiXG4gICAgICAgIH0sXG4gICAgICAgIEluaXRUaW1lOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiAxMCxcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDop6bnorDliLDnianlk4HnmoTlo7Dpn7NcbiAgICAgICAgQ29sbGlzaW9uQXVkaW86IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIC8v5Yqg5YiG55qE5aOw6Z+zXG4gICAgICAgIEFkZFNjcm9lQXVkaW86IHtcbiAgICAgICAgICAgIHR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIGRlZmF1bHQ6IG51bGwsXG4gICAgICAgIH0sXG4gICAgICAgIC8vIOmBk+WFt+eahOe6ueeQhlxuICAgICAgICBQcm9wU3ByaXRlRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBCb29tOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5QcmVmYWIsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICBIb29rRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBIZXJvRnJhbWVzOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9LFxuICAgICAgICBMb3R0ZXJ5RnJhbXNlOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5TcHJpdGVGcmFtZSxcbiAgICAgICAgICAgIGRlZmF1bHQ6IFtdLFxuICAgICAgICB9XG4gICAgfSxcblxuICAgIC8vIExJRkUtQ1lDTEUgQ0FMTEJBQ0tTOlxuXG4gICAgb25Mb2FkKCkge1xuICAgICAgICAvKipcbiAgICAgICAgICog5Yid5aeL5YyWXG4gICAgICAgICAqL1xuICAgICAgICB0aGlzLmluaXQoKTtcblxuICAgICAgICAvL+WKoOi9vemmlumhtei1hOa6kFxuICAgICAgICBjYy5kaXJlY3Rvci5wcmVsb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgfSxcbiAgICBzZXRHdWlkZSgpIHtcbiAgICAgICAgbGV0IGluZGV4ID0gdGhpcy5ndWlkZUluZGV4O1xuICAgICAgICBpZiAoaW5kZXggPD0gMykge1xuICAgICAgICAgICAgbGV0IGd1aWRlID0gY2MuZmluZCgnQ2FudmFzL0d1aWRlJylcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfXCIgKyBpbmRleCkuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBuZXh0R3VpZGUoZSwgbXNnKSB7XG4gICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpO1xuICAgICAgICBsZXQgZ3VpZGVfMSA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfMVwiKTtcbiAgICAgICAgbGV0IGd1aWRlXzIgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzJcIik7XG4gICAgICAgIGxldCBndWlkZV8zID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8zXCIpO1xuICAgICAgICBndWlkZV8xLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZV8yLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBndWlkZV8zLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICBpZiAobXNnID09PSBcIjJcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMik7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzJcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiM1wiKSB7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCAzKTtcbiAgICAgICAgICAgIGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9IGVsc2UgaWYgKG1zZyA9PT0gXCI0XCIpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJndWlkZVwiLCA0KTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBoaWRlTmVlZExheWVyKCkge1xuICAgICAgICAvLyDlpoLmnpzlvIDlp4vmuLjmiI8g6YKj5LmI5Yi35paw5LiA5LiL6YGT5YW35pWw5o2uXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICBwcm9wOiA0XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICAvLyDlr7nlhbPljaHov5vooYzmiZPngrlcbiAgICAgICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic3RhcnRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlKVxuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIGhpZGVMb3R0ZXJ5TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuTG90dGVyeUxheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH0sXG4gICAgc2hvd0JhY2tMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIneWni+WMliDlkITnp43pnIDopoHnmoTmr5Tlj5jph49cbiAgICAgKi9cbiAgICBpbml0KCkge1xuICAgICAgICAvL+mSqeWtkOefv+W3pVxuICAgICAgICB0aGlzLk1pbmVyID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lcicpO1xuICAgICAgICAvL+efv+W3peWKqOeUuyBcbiAgICAgICAgLy/ojrflj5bpkqnlrZBcbiAgICAgICAgdGhpcy5Ib29rID0gY2MuZmluZCgnQ2FudmFzL0hlYWRlci9NaW5lci9Ib29rJyk7XG4gICAgICAgIC8v6I635Y+W6ZKp5a2Q5Yid5aeL6ZW/5bqmXG4gICAgICAgIHRoaXMuSG9va0hlaWdodCA9IHRoaXMuSG9vay5oZWlnaHQ7XG4gICAgICAgIC8v5pS+5LiL6ZKp5a2Q5byA5YWzIDAg5YGc5q2iIDEg5Y+R5bCEIDLmi4nlm55cbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSBmYWxzZTtcbiAgICAgICAgLy8g5Yid5aeL5YyW55+/5bel55qE57K+54G15binXG4gICAgICAgIHRoaXMuTWluZXJTcCA9IHRoaXMuTWluZXIuZ2V0Q29tcG9uZW50KFwic3AuU2tlbGV0b25cIik7XG4gICAgICAgIC8vIOeci+inhumikeW+l+S9k+WKm+eVjOmdolxuICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvU2VlVmlkZW9sYXllcicpXG4gICAgICAgIC8v5b6X5YiG57Sv6K6hXG4gICAgICAgIHRoaXMuU2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvU2NvcmUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+mAmuWFs+ebruagh+WIhuaVsFxuICAgICAgICB0aGlzLlRhcmdldFNjb3JlID0gY2MuZmluZCgnQ2FudmFzL1Njb3JlQW5kVGFyZ2V0L1RhcmdldCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v5YCS6K6h5pe2XG4gICAgICAgIHRoaXMuVGltZSA9IGNjLmZpbmQoJ0NhbnZhcy9DaGVja3BvaW50QW5kVGltZS9UaW1lJykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lhbPljaHmlbBcbiAgICAgICAgdGhpcy5DaGVja3BvaW50ID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL0NoZWNrcG9pbnQnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICB0aGlzLk5lZWRMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9OZWVkTGF5ZXInKTtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIgPSBjYy5maW5kKCdDYW52YXMvQmFja0xheWVyJyk7XG4gICAgICAgIHRoaXMuUHJvcE5vZGUgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL1Byb3AnKTtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIkxvdHRlcnlMYXllclwiKTtcbiAgICAgICAgLy/nianlk4HljLrln59cbiAgICAgICAgdGhpcy5pdGVtQXJlYSA9IGNjLmZpbmQoJ0NhbnZhcy9JdGVtQXJlYScpO1xuICAgICAgICAvL+W8gOWQr+eisOaSnlxuICAgICAgICB0aGlzLm1hbmFnZXIgPSBjYy5kaXJlY3Rvci5nZXRDb2xsaXNpb25NYW5hZ2VyKCk7XG4gICAgICAgIHRoaXMubWFuYWdlci5lbmFibGVkID0gdHJ1ZTtcbiAgICAgICAgLy8gdGhpcy5tYW5hZ2VyLmVuYWJsZWREZWJ1Z0RyYXcgPSB0cnVlO1xuICAgICAgICAvLyBtYW5hZ2VyLmVuYWJsZWREcmF3Qm91bmRpbmdCb3ggPSB0cnVlO1xuXG4gICAgICAgIC8v6YeN57uEcHJlZmFi5pWw57uEIOaWueS+v+afpeivolxuICAgICAgICB0aGlzLlByZWZhYiA9IHt9O1xuICAgICAgICB0aGlzLlByZWZhYnMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIHRoaXMuUHJlZmFiW2l0ZW0uX25hbWVdID0gaXRlbTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy/lj5HlsITpkqnlrZDmjInpkq5cbiAgICAgICAgbGV0IGVtaXRIb29rID0gY2MuZmluZCgnQ2FudmFzL2VtaXRIb29rQnRuJyk7XG4gICAgICAgIC8v5by55Ye65qGGXG4gICAgICAgIHRoaXMuTWFzayA9IGNjLmZpbmQoJ0NhbnZhcy9NYXNrJyk7XG4gICAgICAgIC8v5ri45oiP57uT5p2f5oyJ6ZKuIOWMheaLrOi/h+WFsy/nu5PmnZ/muLjmiI9cbiAgICAgICAgdGhpcy5NYXNrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5DbG9zZU1hc2suYmluZCh0aGlzKSk7XG4gICAgICAgIGVtaXRIb29rLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5lbWl0SG9va0J0bi5iaW5kKHRoaXMpKTtcbiAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gLTE7XG4gICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gMDtcbiAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgY2MuVG9vbHMuc2NyZWVuQWRhcHRlcigpO1xuICAgICAgICB0aGlzLlJlc2V0SW5mbygpO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLlNldExldmVsKCk7XG4gICAgICAgIHRoaXMuQ3JlYXRlVGFyZ2V0U2NvcmUoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVJdGVtKCk7XG4gICAgICAgIHRoaXMucmVkUGFjayA9IHRoaXMubGV2ZWxJbmZvLnJlZFBhY2s7XG4gICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrID0gMDtcbiAgICAgICAgLy8g5piv5ZCm5paw5omL5byV5a+8XG4gICAgICAgIHRoaXMuZ3VpZGVJbmRleCA9IHBhcnNlSW50KGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImd1aWRlXCIpKTtcbiAgICAgICAgaWYgKHRoaXMuZ3VpZGVJbmRleCA8IDQgJiYgdGhpcy5ndWlkZUluZGV4ID49IDEpIHtcbiAgICAgICAgICAgIHRoaXMuZ3VpZGUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g5pyJ5paw5omL5byV5a+85pqC5YGc5ri45oiPXG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5zZXRHdWlkZSgpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2MuZmluZCgnQ2FudmFzL0d1aWRlJykuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLk5lZWRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IG5lZWRTY29yZSA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwibmVlZFNjb3JlXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsZXQgbmVlZExldmVsID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkTGV2ZWxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIG5lZWRTY29yZS5zdHJpbmcgPSBg6KaB5rGC5YiG5pWw77yaJHt0aGlzLmxldmVsSW5mby5zY29yZX1gXG4gICAgICAgICAgICBuZWVkTGV2ZWwuc3RyaW5nID0gYOesrCR7dGhpcy5sZXZlbEluZm8uaWR95YWzYDtcbiAgICAgICAgICAgIC8vIOaKveWllumAieWFs+WNoVxuICAgICAgICAgICAgLy8g5YmN56uv6ZqP5py65LiA5Liq6YGT5YW3XG4gICAgICAgICAgICAvLyDngrjlvLnvvJoxMCAxMeaXtumSnyAxM+iNr+awtFxuICAgICAgICAgICAgbGV0IGFyciA9IFsxMCwgMTEsIDEzXTtcbiAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgbGV0IHByb3AgPSBhcnJbcmRtXTtcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeVByb3AgPSBwcm9wO1xuICAgICAgICAgICAgbGV0IGljb24gPSB0aGlzLkxvdHRlcnlMYXllci5nZXRDaGlsZEJ5TmFtZShcImljb25cIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICBpZiAocHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzJdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVswXVxuICAgICAgICAgICAgfSBlbHNlIGlmIChwcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgTG9va1ZpZGVvR2V0QXdhcmQoKSB7XG4gICAgICAgIGNjLlRvb2xzLnNob3dKaWxpQWQoKTtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJhZFwiOiBjYy56bS5hZCxcbiAgICAgICAgICAgIFwid2VhcG9uXCI6IHRoaXMuTG90dGVyeVByb3BcbiAgICAgICAgfVxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvTG90dGVyeTJcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICB0aGlzLkxvdHRlcnlBd2FyZCA9IHJlcy5kYXRhLmF3YXJkO1xuICAgICAgICAgICAgdGhpcy5oaWRlTG90dGVyeUxheWVyKCk7XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLy8g5L2/55So6YGT5YW3XG4gICAgaGFuZGxlRGFvanUoKSB7XG4gICAgICAgIC8vIOmBk+WFt+eahOaVsOmHj+S4ulxuICAgICAgICBsZXQgd2VhcG9uID0gY2Muem0uTGV2ZWxJbmZvLndlYXBvbjtcbiAgICAgICAgLy8gcHJvcOexu+WeiyAxMC7ngrjlvLkgMTEu5pe26ZKfIDEyLuefs+WMluaJi+WGjCAxMy7oja/msLQgMTQu5LiJ5Y+26I2JXG4gICAgICAgIC8vIOWkhOeQhumBk+WFtyDpgZPlhbfliIbliKvkuLog54K45by5IGJvb21OdW1iZXIg5pe26ZKfIGNsb2NrTnVtYmVyIOefs+WMluaJi+WGjCBoYW5kYm9va051bWJlciDoja/msLQgbGlxdWlkTnVtYmVyIOS4ieWPtuiNiSBjbG92ZXJOdW1iZXJcbiAgICAgICAgbGV0IGRhdGEgPSB7XG4gICAgICAgICAgICBcIjFcIjogXCLkvZPliptcIixcbiAgICAgICAgICAgIFwiMTBcIjogXCLngrjlvLlcIixcbiAgICAgICAgICAgIFwiMTFcIjogXCLml7bpkp9cIixcbiAgICAgICAgICAgIFwiMTJcIjogXCLnn7PljJbmiYvlhoxcIixcbiAgICAgICAgICAgIFwiMTNcIjogXCLoja/msLRcIixcbiAgICAgICAgICAgIFwiMTRcIjogXCLkuInlj7bojYlcIlxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgd2VhcG9uLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEwKSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv54K45by5XG4gICAgICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gd2VhcG9uW2ldLm51bSAtIDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOWmguaenOaYr+WFtuS7lueJqeWTgemCo+S5iOebtOaOpeS9v+eUqFxuICAgICAgICAgICAgICAgIGlmICh3ZWFwb25baV0ubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpeS9v+eUqFxuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IHdlYXBvbltpXS5wcm9wXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCLkvb/nlKjmiJDlip8tXCIsIGRhdGFbd2VhcG9uW2ldLnByb3BdKVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDExKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9ja051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRib29rTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMykge1xuICAgICAgICAgICAgICAgIHRoaXMubGlxdWlkTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxNCkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvdmVyTnVtYmVyID0gd2VhcG9uW2ldLm51bVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDpkqnlrZDml4vovaxcbiAgICAgKi9cbiAgICBIb29rUm9UYXRlKCkge1xuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUpIHJldHVybjtcblxuICAgICAgICAvL+mZkOWItuiMg+WbtCDlj6rog73lnKggNzAg5LiOIC03MCDkuYvpl7RcbiAgICAgICAgaWYgKHRoaXMuSG9vay5hbmdsZSA+PSA3MCkge1xuICAgICAgICAgICAgdGhpcy5yb3RhdGVTcGVlZCA9IC10aGlzLnJvdGF0ZVNwZWVkO1xuICAgICAgICB9IGVsc2UgaWYgKHRoaXMuSG9vay5hbmdsZSA8PSAtNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSBNYXRoLmFicyh0aGlzLnJvdGF0ZVNwZWVkKTtcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLkhvb2suYW5nbGUgKz0gdGhpcy5yb3RhdGVTcGVlZDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWPkeWwhOmSqeWtkOaMiemSruS6i+S7tlxuICAgICAqL1xuICAgIGVtaXRIb29rQnRuKCkge1xuICAgICAgICAvL1RPRE8g5YGc5q2i6ZKp5a2Q5peL6L2sXG4gICAgICAgIC8v5omT5byAL+WFs+mXrSDpkqnlrZDlvIDlhbMg5rKh5pyJ5ouJ5Zue5LmL5YmNIOW9k+WJjXBvc2l0aW9uIO+8gT0g5Yid5aeL5L2N572u5pe2IOS4jeWFgeiuuOaTjeS9nFxuICAgICAgICBpZiAodGhpcy5Ib29rU3RhdGUpIHJldHVybjtcbiAgICAgICAgLy8g5b2T5YmN5Y+R5bCE57uz5a2QXG4gICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJmYW5nXCIsIHRydWUpO1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDE7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZBcbiAgICAgKi9cbiAgICBlbWl0SG9vaygpIHtcbiAgICAgICAgc3dpdGNoICh0aGlzLkhvb2tTdGF0ZSkge1xuICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgIHRoaXMuSG9vay5oZWlnaHQgKz0gdGhpcy5zcGVlZDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMjpcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmhlaWdodCA8PSB0aGlzLkhvb2tIZWlnaHQpIHtcblxuICAgICAgICAgICAgICAgICAgICAvL+ajgOa1i+aYr+WQpuaLieWbnueJqeWTgVxuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuQ291bnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkhhbmRsZSh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW4pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5YGc5q2i5pKt5pS+5ouJ5Zue5Yqo55S7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLnNldEFuaW1hdGlvbigwLCBcImlkbGUzXCIsIGZhbHNlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLk1pbmVyU3AuYWRkQW5pbWF0aW9uKDAsIFwiaWRsZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLnNldEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5TdG9wSG9va01vdmUoKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0IC09IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOaLieWbnumSqeWtkFxuICAgICAqL1xuICAgIFB1bGxCYWNrSG9vaygpIHtcbiAgICAgICAgLy/mkq3mlL7mi4nlm57pkqnlrZDliqjnlLtcbiAgICAgICAgLy8g5bCG6ZKp5a2Q55qE5Zu+54mH6L2s5YyWXG4gICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJsYVwiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAyO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDorr7nva7pkqnlrZDmi4nlm57nmoTpgJ/luqZcbiAgICAgKi9cbiAgICBTZXRTcGVlZChvdGhlcikge1xuICAgICAgICAvLyDmmK/lkKbmnInoja/msLTmlYjmnpwg5aaC5p6c5pyJ6YKj5LmIc3BlZWTpgJ/luqblop7liqAxMCVcbiAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSB8fCB7fTtcbiAgICAgICAgaWYgKHRoaXMubGlxdWlkTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuiNr+awtOaViOaenOmAn+W6puWinuWKoDEwJVwiKVxuICAgICAgICAgICAgcHJvbW90ZSA9IDEuMVxuICAgICAgICB9XG4gICAgICAgIHRoaXMuc3BlZWQgPSBJdGVtQXR0cltvdGhlci5ub2RlLm5hbWVdLnNwZWVkICogcHJvbW90ZSB8fCAxMDtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN572u5omA5pyJ5YiG5pWw5L+h5oGvXG4gICAgICovXG4gICAgUmVzZXRJbmZvKCkge1xuICAgICAgICAvL3RoaXMudmljdG9yeSDmuLjmiI/og5zliKnlpLHotKXnirbmgIEgMCA9IOa4uOaIj+S4rSAxID0g5oiQ5YqfIDIgPSDlpLHotKVcbiAgICAgICAgdGhpcy52aWN0b3J5ID1cbiAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRhcmdldFNjb3JlLnN0cmluZyA9IDA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOWQr+WKqOWAkuiuoeaXtlxuICAgICAqL1xuICAgIFN0YXJ0VGltZSgpIHtcbiAgICAgICAgLy8g5piv5ZCm5a2Y5Zyo5pe26ZKfIOWtmOWcqOaXtumSnyB0aGlzLkluaXRUaW1lKzEw56eSXG4gICAgICAgIGlmICh0aGlzLmNsb2NrTnVtYmVyKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIuS9v+eUqOaXtumSn+aIkOWKnysxMHNcIilcbiAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSAwO1xuICAgICAgICAgICAgdGhpcy5Jbml0VGltZSArPSAxMDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgdGhpcy50aW1lciA9IGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUtLTtcbiAgICAgICAgICAgIHRoaXMuVGltZS5zdHJpbmcgPSB0aGlzLkluaXRUaW1lO1xuICAgICAgICAgICAgaWYgKHRoaXMuSW5pdFRpbWUgPD0gMCkge1xuICAgICAgICAgICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2NoZWR1bGUodGhpcy50aW1lciwgMSlcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u5YWz5Y2h5pWwXG4gICAgICovXG4gICAgU2V0TGV2ZWwoKSB7XG4gICAgICAgIHRoaXMubGV2ZWxJbmZvID0gTGV2ZWxbXCJsZXZlbFwiICsgY2Muem0uTGV2ZWxJbmZvLnN0YWdlXVxuICAgICAgICAvLyB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWwxNVwiXVxuICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9IGNjLnptLkxldmVsSW5mby5jdXJyZW50X3Njb3JlO1xuICAgICAgICB0aGlzLkNoZWNrcG9pbnQuc3RyaW5nID0gYCR7Y2Muem0uTGV2ZWxJbmZvLnN0YWdlfWA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOehruWumui/h+WFs+ebruagh+WIhuaVsFxuICAgICAqIOebruagh+WIhuaVsOagueaNruWFs+WNoeWFs+aVsOehruWumiDpmr7luqbntK/liqDnjofkuLpcbiAgICAgKiAg5Z+65pWwIDEwMDBcbiAgICAgKiAg5q+P5YWz6YCS5aKeNTAw5YiGXG4gICAgICogXG4gICAgICog5pyA5aSnIDUwMDDliIZcbiAgICAgKi9cbiAgICBDcmVhdGVUYXJnZXRTY29yZSgpIHtcbiAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSB0aGlzLmxldmVsSW5mby5zY29yZTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog55Sf5oiQ54mp5ZOBIOmcgOimgeagueaNruebruagh+WIhuadpeeUn+aIkCDnlJ/miJDnmoTmiYDmnInnianlk4HmgLvliIblv4Xpobvmr5Tnm67moIfov4flhbPliIbmlbDpq5gyMCVcbiAgICAgKiDnlJ/miJDnmoTnianlk4HmlbDph4/lnKggMTAtMzBcbiAgICAgKi9cbiAgICBDcmVhdGVJdGVtKCkge1xuICAgICAgICBsZXQgbmV3SXRlbUFyciA9IHRoaXMubmV3Q3JlYXRlQ2FsYygpO1xuICAgICAgICAvLyDlhpnkuIDkuKrnrpfms5Ug5qC55o2u5YiG5pWw5YWI5bCGYXJyIOaOkuW6jyDmgLvliIbkuI3og73otoXov4fmnIDlpKfliIbmlbAg5aaC5p6c6LaF5LqGIOWImeS7juWwj+W8gOWni+WHj+WwkSDnm7TliLDliIbmlbDlsI/kuo7mnIDlpKfliIbmlbBcbiAgICAgICAgLy/nlJ/miJDnm7jlupTnmoRQcmZhYlxuICAgICAgICBjb25zb2xlLmxvZyhcIml0ZW1BcnI9XCIsIG5ld0l0ZW1BcnIpO1xuICAgICAgICBuZXdJdGVtQXJyLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW2l0ZW0ubmFtZV0pO1xuICAgICAgICAgICAgbGV0IFhZID0gdGhpcy5yYW5kb21YWShub2RlKTtcbiAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgIGlmIChpdGVtLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IGl0ZW0uc2NvcmU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXRlbS5wcm9wKSB7XG4gICAgICAgICAgICAgICAgbm9kZS5leHRyYSA9IGl0ZW0ucHJvcDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24oWFkpO1xuICAgICAgICAgICAgaWYgKGl0ZW0ubmFtZSA9PT0gXCJUbnRcIikge1xuICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJ0bnRCb29tXCI7XG4gICAgICAgICAgICAgICAgYm9vbS5zZXRQb3NpdGlvbihjYy52MihYWS54LCBYWS55IC0gMjE4KSk7XG4gICAgICAgICAgICAgICAgbm9kZS5ib29tID0gYm9vbTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIC8vIHRvZG/lhYjkuI3liJvlu7rogIHpvKDor5Xor5VcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLm1vdXNlKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IHRoaXMubGV2ZWxJbmZvLm1vdXNlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIOaZrumAmuiAgem8oFxuICAgICAgICAgICAgbGV0IG1vdXNlTnVtYmVyID0gTnVtYmVyKGRhdGFbMF0pO1xuICAgICAgICAgICAgaWYgKG1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiTW91c2VcIl0pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSA1MDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgRHJpbGxNb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzFdKTtcbiAgICAgICAgICAgIGlmIChEcmlsbE1vdXNlTnVtYmVyID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgRHJpbGxNb3VzZU51bWJlcjsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5QcmVmYWJbXCJEcmlsbE1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNzAwO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubW92ZU1vdXNlKG5vZGUpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g55Sf5oiQ55qE54mp5ZOB5piv5Y+v5Yqo55qEXG4gICAgbW92ZU1vdXNlKG1vdXNlKSB7XG4gICAgICAgIC8vIOWFiOWwhuiAgem8oOenu+WKqOWIsOacgOWPs+i+uSDml7bpl7TkuLo2MDAv6Led56a7KjVcbiAgICAgICAgbGV0IF9tb3ZlVGltZSA9IDEwXG4gICAgICAgIGxldCB0aW1lID0gKHBhcnNlSW50KDMwMCAtIG1vdXNlLngpIC8gNjAwKSAqIF9tb3ZlVGltZVxuICAgICAgICBjYy50d2Vlbihtb3VzZSkudG8odGltZSwgeyB4OiAzMDAgfSkuc3RhcnQoKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAvLyDnjrDlnKjlvIDlp4sg6ICB6byg5YGa6KeE5b6L6L+Q5Yqo5YWI5bCG6ICB6byg5Y+N6L2sXG4gICAgICAgICAgICBpZiAobW91c2UubmFtZSAhPT0gXCJcIikge1xuICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKG1vdXNlKS5yZXBlYXRGb3JldmVyKGNjLnR3ZWVuKCkudG8oX21vdmVUaW1lLCB7IHg6IC0zMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IDE7XG4gICAgICAgICAgICAgICAgfSkudG8oX21vdmVUaW1lLCB7IHg6IDMwMCB9KS5kZWxheSgxKS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbW91c2Uuc2NhbGVYID0gLTE7XG4gICAgICAgICAgICAgICAgfSkpLnN0YXJ0KClcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSwgdGltZSArIDEpXG4gICAgfSxcbiAgICAvLyDlhpnkuIDkuKrnrpfms5XjgILjgILkuIDlj6rmnInkuIDkuKrmgLvmlbDph48g5Y+v5Lul5b6X5YiwIOWQhOS4queJqeWTgeeahOaVsOmHj1xuICAgIG5ld0NyZWF0ZUNhbGMoKSB7XG4gICAgICAgIGxldCBjcmVhdGVJdGVtQXJyID0gW107XG4gICAgICAgIC8vIOWFiOeUn+aIkOe6ouWMhei3n+elnuenmOeJqeWTgVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uZXh0cmEpIHtcbiAgICAgICAgICAgIGxldCBleHRyYSA9IHRoaXMubGV2ZWxJbmZvLmV4dHJhLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIC8vIDDmmK/nuqLljIUg5Yib5bu65LiA5Liq57qi5YyFXG4gICAgICAgICAgICBpZiAoZXh0cmFbMF0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlJlZFwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IDAuMSxcbiAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLl9hcnJdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZXh0cmFbMV0pIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBfcHJvcCA9IG51bGw7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56We56eY54mp5ZOBIOWFiOmaj+acuuWHuueJqeWTgSDmmK/lkKbmnInkuInlj7bojYkg5aaC5p6c5pyJIOiNr+awtOeahOmaj+acuuamgueOh+WinuWKoFxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsb3Zlck51bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBsZXQgYXJyID0gW1wi54K45by5XCIsIFwiM+WFg+e6ouWMhVwiLCBcIjXlhYPnuqLljIVcIiwgXCLoja/msLRcIiwgXCLoja/msLRcIl07XG4gICAgICAgICAgICAgICAgICAgIGxldCBybWQgPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDQpO1xuICAgICAgICAgICAgICAgICAgICBfcHJvcCA9IGFycltybWRdXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAzKTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJNeXN0ZXJ5XCIsXG4gICAgICAgICAgICAgICAgICAgIC8vIOW8gOWHuueahOe6ouWMhemHkeminVxuICAgICAgICAgICAgICAgICAgICBcInByb3BcIjogX3Byb3AsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5ib29tKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMubGV2ZWxJbmZvLmJvb207IGkrKykge1xuICAgICAgICAgICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiVG50XCIsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzdcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIC8vIOagueaNruenr+WIhiDnlJ/miJDlr7nlupTkuKrmlbBcbiAgICAgICAgaWYgKCF0aGlzLmxldmVsSW5mby5nb29kKSB7XG4gICAgICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICAgICAgfVxuICAgICAgICBsZXQgaW5mbyA9IHRoaXMubGV2ZWxJbmZvLmdvb2Quc3BsaXQoXCIsXCIpO1xuICAgICAgICAvLyBsZXQgbWF4U2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IHNjb3JlQXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaW5mby5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9pbmZvID0gaW5mb1tpXS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgdHlwZSA9IF9pbmZvWzBdO1xuICAgICAgICAgICAgbGV0IHBlcmNlbnQgPSBOdW1iZXIoX2luZm9bMV0pXG4gICAgICAgICAgICBsZXQgbmV3QXJyID0gdGhpcy5jcmVhdGVCeVR5cGUodHlwZSwgcGVyY2VudCk7XG4gICAgICAgICAgICBzY29yZUFyciA9IFsuLi5zY29yZUFyciwgLi4ubmV3QXJyXVxuICAgICAgICB9XG4gICAgICAgIC8vIOWwhuenr+WIhuaVsOe7hOaOkuW6j1xuICAgICAgICBsZXQgX3Njb3JlQXJyID0gc2NvcmVBcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPiBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS5zY29yZSA8IGIuc2NvcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgLy8g6K6h566X5omA5pyJYXJy5Lit55qE5YiG5pWw5piv5LiN5piv6LaF6L+HIOacrOWFs+eahOacgOWkp+WAvCDlpoLmnpzotoXov4fpgqPkuYjku47lkI7lvoDliY3orqHnrpflgLxcbiAgICAgICAgbGV0IG5ld0FyciA9IFtdO1xuICAgICAgICBsZXQgdG90YWxTY29yZSA9IHRoaXMubGV2ZWxJbmZvLm1heFNjb3JlO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBfc2NvcmVBcnIubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIF9zY29yZSArPSBfc2NvcmVBcnJbaV0uc2NvcmU7XG4gICAgICAgICAgICBpZiAoX3Njb3JlIDw9IHRvdGFsU2NvcmUpIHtcbiAgICAgICAgICAgICAgICBuZXdBcnIucHVzaChfc2NvcmVBcnJbaV0pXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4ubmV3QXJyXTtcbiAgICAgICAgY29uc29sZS5sb2coXCJjcmVhdGVJdGVtQXJy5pyq5oyJ54Wn5a695bqm5o6S5bqPPVwiLCBjcmVhdGVJdGVtQXJyKTtcbiAgICAgICAgLy8g5bCGY3JlYXRlSXRlbUFycuaOkuW6j+aMieeFp+WuveW6plxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gY3JlYXRlSXRlbUFyci5zb3J0KChhLCBiKSA9PiB7XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA+IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gLTFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhLndpZHRoIDwgYi53aWR0aCkge1xuICAgICAgICAgICAgICAgIHJldHVybiAxXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gMFxuICAgICAgICB9KVxuICAgICAgICBjb25zb2xlLmxvZyhcImNyZWF0ZUl0ZW1BcnLnhaflrr3luqbmjpLluo89XCIsIGNyZWF0ZUl0ZW1BcnIpO1xuICAgICAgICByZXR1cm4gY3JlYXRlSXRlbUFycjtcbiAgICB9LFxuICAgIC8vIOagueaNruenr+WIhui3n+exu+Wei+eUn+aIkOaVsOmHj25hbWVcbiAgICBjcmVhdGVCeVR5cGUodHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFyciA9IFtdO1xuICAgICAgICBsZXQgX3Njb3JlID0gMDtcbiAgICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgICAgICBjYXNlIFwiYlwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+efs+WdlyDmmK/lkKbmnInljJbnn7PmiYvlhowg5aaC5p6c5pyJIOefs+WktOeahOS7t+WAvOaPkOWNhzIwJSB0b2RvXG4gICAgICAgICAgICAgICAgbGV0IHByb21vdGUgPSAxO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmhhbmRib29rTnVtYmVyKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwi55+z5YyW5omL5YaM5L2/55So5oiQ5Yqf55+z5aS055qE5Lu35YC85o+Q5Y2HMjAlXCIpXG4gICAgICAgICAgICAgICAgICAgIHByb21vdGUgPSAxLjJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJTdG9uZS1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbMjAsIDMwLCA0MF07XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aENpZyA9IFs0MiwgODksIDE1NF07XG4gICAgICAgICAgICAgICAgICAgIGxldCByZG0gPSB0aGlzLmNyZWF0ZVJhbmRtKDAsIDIpO1xuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWdbcmRtXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9zY29yZSA+IHNjb3JlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IG5hbWUgKyByZG0sXG4gICAgICAgICAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHNjb3JlQ2lnW3JkbV0gKiBwcm9tb3RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aENpZ1tyZG1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZ1wiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+m7hOmHkVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiR29sZC1cIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBbXTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5qC55o2u5b2T5YmN56ev5YiG55qE5pyA5aSn5YC85Yqo5oCB55Sf5oiQ5pWw57uEXG4gICAgICAgICAgICAgICAgICAgIGxldCBfX3Njb3JlID0gc2NvcmUgLSBfc2NvcmU7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfX3Njb3JlID49IDMwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSBbNTAsIDEwMCwgMTUwLCAyMDAsIDMwMF07XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgX2tleSA9IE1hdGguZmxvb3IoX19zY29yZSAvIDUwKVxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGtleSA9IF9rZXkgPiA0ID8gNCA6IF9rZXlcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGsgPSAwOyBrIDwga2V5OyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZy5wdXNoKDUwICogKDEgKyBrKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHdpZHRoID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgXCI1MFwiOiAzNixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTAwXCI6IDYyLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIxNTBcIjogODMsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjIwMFwiOiAxMDgsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjMwMFwiOiAxNDZcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCBzY29yZUNpZy5sZW5ndGggLSAxKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHNjb3JlQ2lnLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiB3aWR0aFtcIlwiICsgc2NvcmVDaWdbcmRtXV1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkXCI6XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv6ZK755+zXG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAzMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBuYW1lID0gXCJEcmlsbFwiXG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSA0MDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiA0MDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDI5XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwibVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiTXlzdGVyeVwiXG4gICAgICAgICAgICAgICAgICAgIGxldCBzY29yZUNpZyA9IG51bGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZSAtIF9zY29yZSA+IDIwMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSB0aGlzLmNyZWF0ZVJhbmRtKDMwLCAyMDApO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHNjb3JlIC0gX3Njb3JlID4gMzApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgc2NvcmUgLSBfc2NvcmUpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcgPSAzMDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gc2NvcmVDaWc7XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IHNjb3JlQ2lnLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiA3MVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrXG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGFycjtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOmaj+acuuWdkOaghyDliKTmlq3ov5nkuKrlnZDmoIfkuqfnlJ/nmoRyZWN05piv5ZCm6Lef5YW25LuW55qE5omA5pyJ55qE54mp5ZOB55qEcmVjdOebuOaOpeinpiDlpoLmnpzmsqHmnInov5Tlm57lnZDmoIcg5aaC5p6c5o6l6Kem6YeN5paw6ZqP5py6XG4gICAgICovXG4gICAgcmFuZG9tWFkoaXRlbSkge1xuICAgICAgICAvL3ggPSDlsY/luZXlrr3luqYgLyAyICog6ZqP5py65pWwXG4gICAgICAgIC8veSA9IOWcsOW5s+mdouS9jee9riArIOmaj+acuuaVsGNjLnJhbmRvbTBUbzEoKSAr6auY5bqm6IyD5Zu077yI5Y+v5Lul6K+05pivWeeahOacgOWwj+eCue+8iVxuICAgICAgICAvL+WcsOW5s+mdouS9jee9riA9IOWcsOmdonkgKyDlnLDpnaIg6auY5bqmIC8gMlxuICAgICAgICAvLyAtIDMw5piv5Zug5Li654mp5ZOB6ZSa54K55Zyo5Lit6Ze05L2N572uIOiuvue9ruWdkOagh+WIsOiMg+WbtOWumueCueeahOaXtuWAmSDkvJrmnInpg6jliIbotoXlh7pcbiAgICAgICAgbGV0IGdyb3VuZFkgPSB0aGlzLml0ZW1BcmVhLnkgKyB0aGlzLml0ZW1BcmVhLmhlaWdodCAvIDI7XG4gICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgLy8g6ZqP5py655Sf5oiQ55qE5LiA5Liq5Z2Q5qCHXG4gICAgICAgIGxldCBwb3MgPSBjYy52MihyYW5kWCwgcmFuZFkpO1xuICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KHBvcy54IC0gaXRlbS53aWR0aCAvIDIsIHBvcy55IC0gaXRlbS5oZWlnaHQgLyAyLCBpdGVtLndpZHRoLCBpdGVtLmhlaWdodCk7XG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA+PSAxKSB7XG4gICAgICAgICAgICBsZXQgaXNQZW5nID0gZmFsc2U7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICAgICAgbGV0IGJvdW5kaW5nQm94ID0gbi5nZXRCb3VuZGluZ0JveCgpO1xuICAgICAgICAgICAgICAgIGlmIChib3VuZGluZ0JveC5pbnRlcnNlY3RzKHJlY3QpKSB7XG4gICAgICAgICAgICAgICAgICAgIGlzUGVuZyA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpc1BlbmcpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5yYW5kb21YWShpdGVtKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gcG9zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOeCuOW8ueiMg+WbtOeahOeJqeWTgei/m+ihjOmUgOavgVxuICAgICAqIEBwYXJhbSB7Y2MuTm9kZX0gVG50XG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgZGVzdHJveVRudChUbnQpIHtcbiAgICAgICAgLy8g6YGN5Y6GdGhpcy5pdGVtQXJlYeWGheaJgOacieeahOiKgueCuSDlvZPoioLngrnnmoTkuK3lv4PoioLngrnlnKjngrjlvLnlhoUg5YiZ6ZSA5q+BXG4gICAgICAgIGZvciAobGV0IGkgPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCAtIDE7IGkgPj0gMDsgaS0tKSB7XG4gICAgICAgICAgICBsZXQgbiA9IHRoaXMuaXRlbUFyZWEuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAobiAhPT0gVG50KSB7XG4gICAgICAgICAgICAgICAgLy8g6YCa6L+HVG5055qE5Lit5b+D5L2N572uIOWIm+W7uuS4gOS4qnJlY3TljLrln59cbiAgICAgICAgICAgICAgICBsZXQgX3BvcyA9IFRudC5nZXRQb3NpdGlvbihjYy52MigpKTtcbiAgICAgICAgICAgICAgICBsZXQgcmVjdCA9IG5ldyBjYy5SZWN0KF9wb3MueCAtIDEyNSwgX3Bvcy55IC0gMTI1LCAyNTAsIDI1MCk7XG4gICAgICAgICAgICAgICAgbGV0IHBvcyA9IG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgaWYgKHJlY3QuY29udGFpbnMocG9zKSkge1xuICAgICAgICAgICAgICAgICAgICBuLnJlbW92ZUZyb21QYXJlbnQoKTtcbiAgICAgICAgICAgICAgICAgICAgbi5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIG4gPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog55Sf5oiQbi1t6ZqP5py65pWwXG4gICAgICovXG4gICAgY3JlYXRlUmFuZG0obiwgbSkge1xuICAgICAgICBtICs9IDE7XG4gICAgICAgIGxldCBhID0gbSAtIG47XG4gICAgICAgIGxldCBudW0gPSBNYXRoLnJhbmRvbSgpICogYSArIG47XG4gICAgICAgIHJldHVybiBwYXJzZUludChudW0pO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5YWz6Zet57uz5a2Q54q25oCBXG4gICAgICovXG4gICAgU3RvcEhvb2tNb3ZlKCkge1xuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuSG9vay5oZWlnaHQgPSB0aGlzLkhvb2tIZWlnaHQ7XG4gICAgICAgIC8v6YeN572u5Y+R5bCE6ZKp5a2Q6YCf5bqmXG4gICAgICAgIHRoaXMuc3BlZWQgPSA2O1xuICAgICAgICB0aGlzLkhvb2suZ2V0Q2hpbGRCeU5hbWUoXCJob29rXzFcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLkhvb2tGcmFtZXNbMF1cbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWkhOeQhuaLieWbnueahOeJqeWTge+8jOWIoOmZpOeJqeWTgeS7peWPiua3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEhhbmRsZShpdGVtcykge1xuICAgICAgICB0aGlzLkFkZFByb3AoaXRlbXMpO1xuICAgICAgICB0aGlzLkFkZFNjb3JlKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5SZW1vdmVJdGVtKGl0ZW1zKTtcbiAgICAgICAgLy8g5Yik5pat5piv5ZCm6L+Y5pyJ54mp5ZOB5Zyo5Zyw5Zu+5LiKIOWmguaenOayoeaciemCo+S5iOe7k+eulyDnu5PmnZ9cbiAgICAgICAgaWYgKHRoaXMuaXRlbUFyZWEuY2hpbGRyZW4ubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICAvLyDlnLDlm77nianlk4HmtojlpLEg57uT566XXG4gICAgICAgICAgICAvLyB0b2RvXG4gICAgICAgICAgICB0aGlzLkdhbWVPdmVyKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIikpIHtcbiAgICAgICAgICAgIGxldCBib29tID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYm9vbVwiKVxuICAgICAgICAgICAgYm9vbS5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICBib29tLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIGJvb20gPSBudWxsO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDosIPmlbTnjrDmnInnmoTngrjlvLnnmoTnjrDlrp7mlYjmnpxcbiAgICBhZGp1c0Jvb21MYXlvdXQoKSB7XG4gICAgICAgIGxldCBsYXlvdXQgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTGF5b3V0XCIpO1xuICAgICAgICBsYXlvdXQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgaWYgKHRoaXMuYm9vbU51bWJlciA+PSAyKSB7XG4gICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAyO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IGxheW91dC5jaGlsZHJlbltpXTtcbiAgICAgICAgICAgIGlmIChpIDw9IHRoaXMuYm9vbU51bWJlcikge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOiOt+W+l+mBk+WFt1xuICAgICAqL1xuICAgIEFkZFByb3AoaXRlbXMpIHtcbiAgICAgICAgaWYgKCFpdGVtc1swXSkgcmV0dXJuO1xuICAgICAgICBpZiAoaXRlbXNbMF0ubmFtZSA9PT0gXCJNeXN0ZXJ5XCIpIHtcbiAgICAgICAgICAgIGxldCBwcm9wID0gaXRlbXNbMF0uZXh0cmE7XG4gICAgICAgICAgICBpZiAoaXNOYU4ocHJvcCkpIHtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHByb3ApIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIz5YWD57qi5YyFXCI6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNob3dNZXN0ZXJ5KDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgKz0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiNeWFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDU7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIuiNr+awtFwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgzKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5b2T5YmN5piv56ev5YiGXG4gICAgICAgICAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmN1clNjb3JlICs9IChwcm9wIHx8IDApO1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIHByb3ApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2UgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiUmVkXCIpIHtcbiAgICAgICAgICAgIC8vIOmaj+acujMtOOWdl+mSsSAy5L2N5pyJ5pWI5bCP5pWwXG4gICAgICAgICAgICBsZXQgZXh0cmFSZWRQYWNrID0gKE1hdGguZmxvb3IodGhpcy5jcmVhdGVSYW5kbSgzMDAsIDgwMCkpKSAvIDEwMDtcbiAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IGV4dHJhUmVkUGFjaztcbiAgICAgICAgICAgIHRoaXMuYWRkQW5pbShcInJlZFwiLCBleHRyYVJlZFBhY2spO1xuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgc2hvd01lc3RlcnkodHlwZSkge1xuICAgICAgICAvLyBbXCLngrjlvLlcIixcIjPlhYPnuqLljIVcIixcIjXlhYPnuqLljIVcIixcIuiNr+awtFwiXVxuICAgICAgICBsZXQgbWVzdGVyeSA9IHRoaXMuUHJvcE5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJNZXN0ZXJ5XCIpO1xuICAgICAgICBtZXN0ZXJ5LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIG1lc3RlcnkuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLlByb3BTcHJpdGVGcmFtZXNbdHlwZV07XG4gICAgICAgIG1lc3Rlcnkuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgY2MudHdlZW4obWVzdGVyeSkudG8oMiwgeyB5OiBtZXN0ZXJ5LnkgKyAxMDAsIG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICBtZXN0ZXJ5Lm9wYWNpdHkgPSAyNTU7XG4gICAgICAgICAgICBtZXN0ZXJ5LnkgLT0gMTAwO1xuICAgICAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWIoOmZpOeJqeWTgVxuICAgICAqL1xuICAgIFJlbW92ZUl0ZW0oaXRlbXMpIHtcbiAgICAgICAgaXRlbXMuZm9yRWFjaChpdGVtID0+IHtcbiAgICAgICAgICAgIGlmIChpdGVtKSB7XG4gICAgICAgICAgICAgICAgaXRlbS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOa3u+WKoOW+l+WIhlxuICAgICAqL1xuICAgIEFkZFNjb3JlKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKCFpdGVtc1swXS5zY29yZSkgcmV0dXJuO1xuICAgICAgICAvLyBsZXQgc2NvcmVDb24gPSBJdGVtQXR0cltpdGVtc1swXS5uYW1lXSB8fCB7fTtcbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgKyAoaXRlbXNbMF0uc2NvcmUgfHwgMCk7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgKz0gKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICAvL+aSreaUvuW+l+WIhumfs+aViFxuICAgICAgICBpZiAoY2Muem0uc2hvd011c2ljKSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgIH1cbiAgICAgICAgLy8g5aKe5Yqg5LiA5Liq5aKe5Yqg56ev5YiG6aOY5ZCRLS0tPlNjb3Jl5L2N572u54K55Yqo55S7XG4gICAgICAgIHRoaXMuYWRkQW5pbShcInNjb3JlXCIsIGl0ZW1zWzBdLnNjb3JlKVxuICAgIH0sXG4gICAgLy8g5YGa5LiA5Liq5aKe5Yqg56ev5YiG54K55Yqo55S7XG4gICAgYWRkQW5pbSh0eXBlLCBzY29yZSkge1xuICAgICAgICBsZXQgYWRkID0gbnVsbDtcbiAgICAgICAgaWYgKHR5cGUgPT09IFwic2NvcmVcIikge1xuICAgICAgICAgICAgYWRkID0gdGhpcy5TY29yZS5ub2RlLnBhcmVudC5nZXRDaGlsZEJ5TmFtZShcImFkZFNjb3JlXCIpO1xuICAgICAgICB9IGVsc2UgaWYgKHR5cGUgPT09IFwicmVkXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRSZWRcIik7XG4gICAgICAgIH1cbiAgICAgICAgYWRkLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gXCIrXCIgKyBzY29yZTtcbiAgICAgICAgYWRkLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGFkZC5vcGFjaXR5ID0gMDtcbiAgICAgICAgYWRkLnkgPSAtMTMyO1xuICAgICAgICBjYy50d2VlbihhZGQpLnRvKDAuMSwgeyBvcGFjaXR5OiAyNTUgfSkudG8oMSwgeyB5OiA0MiB9KS50bygwLjEsIHsgb3BhY2l0eTogMCB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmmL7npLpNYXNrIHZpY3Rvcnk9MCB2aWN0b3J5PTHog5zliKkgdmljdG9yeT0y5aSx6LSlXG4gICAgICovXG4gICAgU2hvd01hc2soKSB7XG4gICAgICAgIC8v5pi+56S65by55Ye65qGGXG4gICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgdGhpcy5NYXNrLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIC8vIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKVxuICAgICAgICBsZXQgRmFpbCA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIkZhaWxcIik7XG4gICAgICAgIGxldCBTdWNjZXNzID0gdGhpcy5NYXNrLmdldENoaWxkQnlOYW1lKFwiU3VjY2Vzc1wiKTtcbiAgICAgICAgRmFpbC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYoY2Muem0uTGV2ZWxJbmZvLnN0YWdlPD01KXtcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcImVuZF9cIitjYy56bS5MZXZlbEluZm8uc3RhZ2UpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5Yqf5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5oiQ5YqfXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCLkuIPml6Xku7vliqHliJfooag9XCIsIHJlcy5kYXRhKTtcbiAgICAgICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgICAgICBsZXQgaXRlbSA9IG51bGw7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBpdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIWl0ZW1zW2ldLnN0YXR1cykge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8g5pyq6aKG5Y+WXG4gICAgICAgICAgICAgICAgICAgICAgICBpdGVtID0gaXRlbXNbaV1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIC8vIGxibC5zdHJpbmcgPSBg5q+P5pel5Lu75Yqh6L6+5oiQ5p2h5Lu277yM55yL5bm/5ZGKJHtpdGVtLmN1cnJfYWR9Lyske2l0ZW0ubmVlZF9hZH0s6ZyA6KaB6YCa5YWzJHtpdGVtLmN1cnJfcGFzc19zdGFnZX0vKyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V9YFxuICAgICAgICAgICAgICAgIC8vIOWIpOaWreWQhOenjeadoeS7tlxuICAgICAgICAgICAgICAgIC8vIOWFiOWIpOaWreeUqOaIt+WFs+WNoeadoeS7tlxuICAgICAgICAgICAgICAgIGxibC5zdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfcGFzc19zdGFnZSA8IGl0ZW0ubmVlZF9wYXNzX3N0YWdlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW9k+WJjeWFs+WNoeetiee6p+Wwj+S6jumcgOimgeWFs+WNoeetiee6p1xuICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOmAmuWFsyR7aXRlbS5uZWVkX3Bhc3Nfc3RhZ2V95YWz5ZCO5Y+v5o+Q546wYFxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWFs+WNoeetiee6p+i+vuaIkCDliKTmlq3nrKzkuozmnaHku7YgXG4gICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfc2lnbl9pbiA8IGl0ZW0ubmVlZF9zaWduX2luKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWujOaIkOS7iuaXpeetvuWIsOWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpdGVtLmN1cnJfYWQgPCBpdGVtLm5lZWRfYWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gYOWGjeeciyR7aXRlbS5uZWVkX2FkIC0gaXRlbS5jdXJyX2FkfeS4quinhumikeWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICBsZXQgYXdyYWQgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwiYXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGF3cmFkLnN0cmluZyA9IGDlpZblirHnuqLljIUrJHt0aGlzLnJlZFBhY2t9YDtcbiAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uZXZlcl9wYXNzKSB7XG4gICAgICAgICAgICAgICAgYXdyYWQubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBleHRhdEF3YXJkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS5nZXRDaGlsZEJ5TmFtZShcImV4dHJhQXdhcmRcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmV4dGFyUmVkUGFjaykge1xuICAgICAgICAgICAgICAgIGV4dGF0QXdhcmQubm9kZS5wYXJlbnQuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLnN0cmluZyA9IGArJHt0aGlzLmV4dGFyUmVkUGFja31gO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5oiQ5Yqf5oiW6ICF5aSx6LSl5Y+R6YCB5pWw5o2uIHJlZF9wYWNrOue6ouWMhSBzY29yZTrliIbmlbAgdHPvvJrml7bpl7TmiLMgc2lnbiBNRDXmlbDmja5cbiAgICAgICAgICAgIC8vIFxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiYm9tYlwiOiB0aGlzLmJvb21OdW1iZXIgKyAxLC8v54K45by55Liq5pWwXG4gICAgICAgICAgICAgICAgXCJwb3Rpb25cIjogdGhpcy5saXF1aWROdW1iZXIsLy/oja/msLRcbiAgICAgICAgICAgICAgICBcInNjb3JlXCI6IHRoaXMuY3VyU2NvcmUsLy/liIbmlbBcbiAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCBkYXRhID0gY2MuVG9vbHMuY3JlYXRlU2lnbkRhdGEoc2VuZERhdGEpO1xuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Bhc3NcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiUGFzc+mAmuWFs+aIkOWKn+i/lOWbnuS/oeaBr1wiLCByZXMpXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLnZpY3RvcnkgPT09IDIpIHtcbiAgICAgICAgICAgIEZhaWwuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLlRvb2xzLmRvdChcInRocm91Z2hcIix7XG4gICAgICAgICAgICAgICAgbGV2ZWxfbnVtOmNjLnptLkxldmVsSW5mby5zdGFnZSxcbiAgICAgICAgICAgICAgICBsZXZlbF9yZXN1bHQ6XCLlpLHotKVcIlxuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIC8vIOmAmuWFs+Wksei0peS4jeeUqOWRiuivieacjeWKoeWZqFxuICAgICAgICB9XG4gICAgICAgIGNjLnR3ZWVuKHRoaXMuTWFzaykudG8oMC4zLCB7IHNjYWxlOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5QYXVzZUdhbWVMYXllcigpO1xuICAgICAgICB9KS5zdGFydCgpXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmgaLlpI3muLjmiI/vvIzlhbPpl63lvLnlh7rmoYZcbiAgICAgKiDlpoLmnpzmmK/muLjmiI/pgJrlhbPljp/lm6DogIzmiZPlvIDnmoTlvLnlh7rmoYbkuI3kuojnkIbnnaxcbiAgICAgKi9cbiAgICBDbG9zZU1hc2soKSB7XG4gICAgICAgIGlmICh0aGlzLnZpY3RvcnkpIHJldHVybjtcbiAgICAgICAgdGhpcy5SZXN1bWVHYW1lTGF5ZXIoKVxuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDph43njqnmnKzlhbNcbiAgICAgKi9cbiAgICBSZWxvYWQoKSB7XG4gICAgICAgIC8v5YGc5q2i5YCS6K6h5pe2XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgICAgICAvL+mHjei9veWcuuaZr1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0dhbWUnKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog57un57ut5LiL5LiA5YWzXG4gICAgICovXG4gICAgTmV4dCgpIHtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMudmljdG9yeSkge1xuICAgICAgICAgICAgY2FzZSAwOlxuICAgICAgICAgICAgICAgIC8v57un57ut5ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5DbG9zZU1hc2soKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICAvLyDov4flhbPmiJDlip/ngrnlh7vov5vlhaXkuIvkuIDlhbPkuYvliY0g5YWI6I635Y+W55So5oi35L+h5oGvIOeci+eUqOaIt+aYr+WQpuacieS9k+WKm1xuICAgICAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Vc2VySW5mb1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnptLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWmguaenOS9k+WKm+Wkp+S6jjAg6L+b5YWl5LiL5LiA5YWzXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS51c2VySW5mby5wb3dlciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9TdGFnZVwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGNjLnptLkxldmVsSW5mby5zdGFnZSA8IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuUmVsb2FkKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l6L+U5Zue5Li755WM6Z2iXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOWwj+S6jjAg5by55Ye655yL6KeG6aKR6I635b6X5L2T5Yqb55qE5o6l5Y+jXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLnNlZVZpZGVvTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgLy/pgIDlh7rmuLjmiI9cbiAgICAgICAgICAgICAgICB0aGlzLkV4aXRHYW1lKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcbiAgICAvLyDnnIvop4bpopHlvpfnuqLljIVcbiAgICBBd2FyZFZpZGVvKGUpIHtcbiAgICAgICAgY2MubG9nKFwi55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBwYWNrID0gY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyA/IDAgOiB0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgY2Muem0udmlkZW9BZC5yZWRQYWNrID0gc2VuZERhdGE7XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5L2T5YqbXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gdHJ1ZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZUxheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgIDlh7rmuLjmiI8g6L+U5Zue5LiK5LiA5Liq5Zy65pmvXG4gICAgICovXG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIGNjLmRpcmVjdG9yLmxvYWRTY2VuZSgnSW5kZXgnKTtcbiAgICB9LFxuICAgIFJlc3VtZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5CYWNrTGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHRoaXMucGF1c2VHYW1lID0gZmFsc2U7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSBmYWxzZTtcbiAgICB9LFxuICAgIC8vIOaaguWBnOW9k+WJjeeVjOmdolxuICAgIFBhdXNlR2FtZUxheWVyKCkge1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IHRydWU7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgdGhpcy5NaW5lclNwLnBhdXNlZCA9IHRydWU7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmuLjmiI/nu5PmnZ9cbiAgICAgKiDog5zliKnmiJblpLHotKXpg73op4bkuLrmuLjmiI/nu5PmnZ9cbiAgICAgKi9cbiAgICBHYW1lT3ZlcigpIHtcbiAgICAgICAgLy/liKTmlq3nlKjmiLflvpfliIbmmK/lkKbotoXov4fnm67moIfliIZcbiAgICAgICAgbGV0IHMgPSAwO1xuXG4gICAgICAgIGlmIChwYXJzZUludCh0aGlzLlNjb3JlLnN0cmluZykgPj0gcGFyc2VJbnQodGhpcy5UYXJnZXRTY29yZS5zdHJpbmcpKSB7XG4gICAgICAgICAgICBzID0gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8v5ri45oiP5aSx6LSlXG4gICAgICAgICAgICBzID0gMjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy52aWN0b3J5ID0gcztcbiAgICAgICAgdGhpcy5TaG93TWFzaygpO1xuICAgIH0sXG5cbiAgICAvLyBzdGFydCAoKSB7XG5cbiAgICAvLyB9LFxuICAgIHVwZGF0ZShkdCkge1xuICAgICAgICBpZiAodGhpcy5wYXVzZUdhbWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5OZWVkTGF5ZXIuYWN0aXZlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgLy8gdGhpcy5tb3ZlTW91c2UoKTtcbiAgICAgICAgdGhpcy5lbWl0SG9vaygpO1xuICAgICAgICB0aGlzLkhvb2tSb1RhdGUoKTtcbiAgICB9LFxuICAgIC8vIOS9v+eUqOmBk+WFt1xuICAgIHVzZVByb3AoZSwgbXNnKSB7XG4gICAgICAgIC8vIOWmguaenOaYr+eCuOW8uVxuICAgICAgICBzd2l0Y2ggKG1zZykge1xuICAgICAgICAgICAgY2FzZSBcIueCuOW8uVwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeeahOeKtuaAgeW/hemhu+aYr+e7s+WtkOWkhOS6juiDveaLieWbnueahOeKtuaAgVxuICAgICAgICAgICAgICAgIC8vIOajgOa1i+aYr+WQpuacieeJqeWTgVxuICAgICAgICAgICAgICAgIGlmICh0aGlzLkhvb2suY2hpbGRyZW5bMF0uY2hpbGRyZW5bMF0gJiYgdGhpcy5ib29tTnVtYmVyID4gLTEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g5L2/55So54K45by55YOP5pyN5Yqh5Zmo5Y+R6YCB5raI5oGvXG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5zaG93U2hha2UpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBqc2IuRGV2aWNlLnZpYnJhdGUoMC4zKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAvLyDlhYjmj5DliY3liY3nq6/kvb/nlKgg5piv55S76Z2i5ZCM5q2lXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlci0tO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICAgICAgICAgICAgICAvLyDojrflj5bmi4nljrvnmoTnianlk4HnmoTkvY3nva5cbiAgICAgICAgICAgICAgICAgICAgbGV0IF9ub2RlID0gdGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdXG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3MgPSBfbm9kZS5jb252ZXJ0VG9Xb3JsZFNwYWNlQVIoY2MudjIoMCwgMCkpO1xuICAgICAgICAgICAgICAgICAgICAvLyDmt7vliqDngrjlvLnmlYjmnpxcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJvb20gPSBjYy5pbnN0YW50aWF0ZSh0aGlzLkJvb20pO1xuICAgICAgICAgICAgICAgICAgICBib29tLm5hbWUgPSBcImJvb21cIlxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5vZGUuYWRkQ2hpbGQoYm9vbSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzaXplID0gY2Mudmlldy5nZXRWaXNpYmxlU2l6ZSgpXG4gICAgICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIocG9zLnggLSBzaXplLndpZHRoIC8gMiwgcG9zLnkgLSBzaXplLmhlaWdodCAvIDIpKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBib29tLmdldENvbXBvbmVudChjYy5BbmltYXRpb24pLnBsYXkoXCJib29tXCIpO1xuXG4gICAgICAgICAgICAgICAgICAgIF9ub2RlLmRlc3Ryb3koKTtcbiAgICAgICAgICAgICAgICAgICAgX25vZGUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLnNwZWVkID0gMTA7XG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogMTBcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH0sXG59KTtcbiJdfQ==