
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTWFpbi5qcyJdLCJuYW1lcyI6WyJjYyIsIkNsYXNzIiwiQ29tcG9uZW50IiwicHJvcGVydGllcyIsInNwZWVkIiwiZGlzcGxheU5hbWUiLCJyb3RhdGVTcGVlZCIsIkhvb2tSYW5nZSIsIlByZWZhYnMiLCJ0eXBlIiwiUHJlZmFiIiwiSW5pdFRpbWUiLCJDb2xsaXNpb25BdWRpbyIsIkF1ZGlvQ2xpcCIsIkFkZFNjcm9lQXVkaW8iLCJQcm9wU3ByaXRlRnJhbWVzIiwiU3ByaXRlRnJhbWUiLCJCb29tIiwiSG9va0ZyYW1lcyIsIkhlcm9GcmFtZXMiLCJMb3R0ZXJ5RnJhbXNlIiwib25Mb2FkIiwiaW5pdCIsImRpcmVjdG9yIiwicHJlbG9hZFNjZW5lIiwic2V0R3VpZGUiLCJpbmRleCIsImd1aWRlSW5kZXgiLCJndWlkZSIsImZpbmQiLCJnZXRDaGlsZEJ5TmFtZSIsImFjdGl2ZSIsIm5leHRHdWlkZSIsImUiLCJtc2ciLCJndWlkZV8xIiwiZ3VpZGVfMiIsImd1aWRlXzMiLCJzeXMiLCJsb2NhbFN0b3JhZ2UiLCJzZXRJdGVtIiwiUmVzdW1lR2FtZUxheWVyIiwiaGlkZU5lZWRMYXllciIsIlRvb2xzIiwic2VuZFJlcXVlc3QiLCJ0aGVuIiwicmVzIiwic2VuZER0YSIsInByb3AiLCJjb25zb2xlIiwibG9nIiwiem0iLCJMZXZlbEluZm8iLCJkYXRhIiwiTmVlZExheWVyIiwiaGlkZUJhbm5lciIsImhhbmRsZURhb2p1IiwiYWRqdXNCb29tTGF5b3V0Iiwic3RhZ2UiLCJkb3QiLCJoaWRlTG90dGVyeUxheWVyIiwiTG90dGVyeUxheWVyIiwic2hvd0JhY2tMYXllciIsIkJhY2tMYXllciIsIlBhdXNlR2FtZUxheWVyIiwiTWluZXIiLCJIb29rIiwiSG9va0hlaWdodCIsImhlaWdodCIsIkhvb2tTdGF0ZSIsImN1clNjb3JlIiwicGF1c2VHYW1lIiwiTWluZXJTcCIsImdldENvbXBvbmVudCIsInNlZVZpZGVvTGF5ZXIiLCJTY29yZSIsIkxhYmVsIiwiVGFyZ2V0U2NvcmUiLCJUaW1lIiwiQ2hlY2twb2ludCIsIlByb3BOb2RlIiwiaXRlbUFyZWEiLCJtYW5hZ2VyIiwiZ2V0Q29sbGlzaW9uTWFuYWdlciIsImVuYWJsZWQiLCJmb3JFYWNoIiwiaXRlbSIsIl9uYW1lIiwiZW1pdEhvb2siLCJNYXNrIiwib24iLCJOb2RlIiwiRXZlbnRUeXBlIiwiVE9VQ0hfRU5EIiwiQ2xvc2VNYXNrIiwiYmluZCIsImVtaXRIb29rQnRuIiwiYm9vbU51bWJlciIsImxpcXVpZE51bWJlciIsInNjcmVlbkFkYXB0ZXIiLCJSZXNldEluZm8iLCJTdGFydFRpbWUiLCJTZXRMZXZlbCIsIkNyZWF0ZVRhcmdldFNjb3JlIiwiQ3JlYXRlSXRlbSIsInJlZFBhY2siLCJsZXZlbEluZm8iLCJleHRhclJlZFBhY2siLCJwYXJzZUludCIsImdldEl0ZW0iLCJzaG93QmFubmVyIiwibmVlZFNjb3JlIiwibmVlZExldmVsIiwic3RyaW5nIiwic2NvcmUiLCJpZCIsImFyciIsInJkbSIsImNyZWF0ZVJhbmRtIiwiTG90dGVyeVByb3AiLCJpY29uIiwiU3ByaXRlIiwic3ByaXRlRnJhbWUiLCJMb29rVmlkZW9HZXRBd2FyZCIsInNob3dKaWxpQWQiLCJzZW5kRGF0YSIsImFkIiwiTG90dGVyeUF3YXJkIiwiYXdhcmQiLCJ3ZWFwb24iLCJpIiwibnVtIiwiY2xvY2tOdW1iZXIiLCJoYW5kYm9va051bWJlciIsImNsb3Zlck51bWJlciIsImxlbmd0aCIsIkhvb2tSb1RhdGUiLCJhbmdsZSIsIk1hdGgiLCJhYnMiLCJzZXRBbmltYXRpb24iLCJjaGlsZHJlbiIsImNoaWxkcmVuQ291bnQiLCJIYW5kbGUiLCJhZGRBbmltYXRpb24iLCJTdG9wSG9va01vdmUiLCJQdWxsQmFja0hvb2siLCJTZXRTcGVlZCIsIm90aGVyIiwicHJvbW90ZSIsIkl0ZW1BdHRyIiwibm9kZSIsIm5hbWUiLCJ2aWN0b3J5IiwidGltZXIiLCJ1bnNjaGVkdWxlIiwiR2FtZU92ZXIiLCJzY2hlZHVsZSIsIkxldmVsIiwiY3VycmVudF9zY29yZSIsIm5ld0l0ZW1BcnIiLCJuZXdDcmVhdGVDYWxjIiwiaW5zdGFudGlhdGUiLCJYWSIsInJhbmRvbVhZIiwicGFyZW50IiwiZXh0cmEiLCJzZXRQb3NpdGlvbiIsImJvb20iLCJhZGRDaGlsZCIsInYyIiwieCIsInkiLCJtb3VzZSIsInNwbGl0IiwibW91c2VOdW1iZXIiLCJOdW1iZXIiLCJyYW5kWCIsIndpZHRoIiwicmFuZG9tIiwicmFuZFkiLCJwb3MiLCJtb3ZlTW91c2UiLCJEcmlsbE1vdXNlTnVtYmVyIiwiX21vdmVUaW1lIiwidGltZSIsInR3ZWVuIiwidG8iLCJzdGFydCIsInNjaGVkdWxlT25jZSIsInNjYWxlWCIsInJlcGVhdEZvcmV2ZXIiLCJkZWxheSIsImNhbGwiLCJjcmVhdGVJdGVtQXJyIiwiX2FyciIsIm9iaiIsInB1c2giLCJfcHJvcCIsInJtZCIsImdvb2QiLCJpbmZvIiwic2NvcmVBcnIiLCJfaW5mbyIsInBlcmNlbnQiLCJuZXdBcnIiLCJjcmVhdGVCeVR5cGUiLCJfc2NvcmVBcnIiLCJzb3J0IiwiYSIsImIiLCJ0b3RhbFNjb3JlIiwibWF4U2NvcmUiLCJfc2NvcmUiLCJzY29yZUNpZyIsIndpZHRoQ2lnIiwiX19zY29yZSIsIl9rZXkiLCJmbG9vciIsImtleSIsImsiLCJncm91bmRZIiwicmVjdCIsIlJlY3QiLCJpc1BlbmciLCJuIiwiYm91bmRpbmdCb3giLCJnZXRCb3VuZGluZ0JveCIsImludGVyc2VjdHMiLCJkZXN0cm95VG50IiwiVG50IiwiX3BvcyIsImdldFBvc2l0aW9uIiwiY29udGFpbnMiLCJyZW1vdmVGcm9tUGFyZW50IiwiZGVzdHJveSIsIm0iLCJpdGVtcyIsIkFkZFByb3AiLCJBZGRTY29yZSIsIlJlbW92ZUl0ZW0iLCJsYXlvdXQiLCJpc05hTiIsInNob3dNZXN0ZXJ5IiwiYWRkQW5pbSIsInNob3dNdXNpYyIsImF1ZGlvRW5naW5lIiwicGxheSIsImV4dHJhUmVkUGFjayIsIm1lc3RlcnkiLCJzdG9wQWxsQWN0aW9ucyIsIm9wYWNpdHkiLCJhZGQiLCJTaG93TWFzayIsIkZhaWwiLCJTdWNjZXNzIiwibGV2ZWxfbnVtIiwibGV2ZWxfcmVzdWx0IiwibGJsIiwic3RhdHVzIiwiY3Vycl9wYXNzX3N0YWdlIiwibmVlZF9wYXNzX3N0YWdlIiwiY3Vycl9zaWduX2luIiwibmVlZF9zaWduX2luIiwiY3Vycl9hZCIsIm5lZWRfYWQiLCJhd3JhZCIsImV2ZXJfcGFzcyIsImV4dGF0QXdhcmQiLCJEYXRlIiwiZ2V0VGltZSIsImNyZWF0ZVNpZ25EYXRhIiwic2NhbGUiLCJSZWxvYWQiLCJsb2FkU2NlbmUiLCJOZXh0IiwidXNlckluZm8iLCJwb3dlciIsImVuZENvdW50VGltZSIsIkV4aXRHYW1lIiwiQXdhcmRWaWRlbyIsInBhY2siLCJ2aWRlb0FkIiwic2VlVmlkZW9Bd2FyZCIsImVudGVyR2FtZSIsInRhcmdldCIsImNsb3NlTGF5ZXIiLCJwYXVzZWQiLCJzIiwidXBkYXRlIiwiZHQiLCJ1c2VQcm9wIiwic2hvd1NoYWtlIiwiaXNOYXRpdmUiLCJqc2IiLCJEZXZpY2UiLCJ2aWJyYXRlIiwiX25vZGUiLCJjb252ZXJ0VG9Xb3JsZFNwYWNlQVIiLCJzaXplIiwidmlldyIsImdldFZpc2libGVTaXplIiwiQW5pbWF0aW9uIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUNBOztBQUNBOzs7O0FBRkE7QUFHQUEsRUFBRSxDQUFDQyxLQUFILENBQVM7QUFDTCxhQUFTRCxFQUFFLENBQUNFLFNBRFA7QUFHTEMsRUFBQUEsVUFBVSxFQUFFO0FBQ1I7QUFDQUMsSUFBQUEsS0FBSyxFQUFFO0FBQ0gsaUJBQVMsQ0FETjtBQUVIQyxNQUFBQSxXQUFXLEVBQUU7QUFGVixLQUZDO0FBTVI7QUFDQUMsSUFBQUEsV0FBVyxFQUFFO0FBQ1QsaUJBQVMsQ0FEQTtBQUVURCxNQUFBQSxXQUFXLEVBQUU7QUFGSixLQVBMO0FBV1I7QUFDQUUsSUFBQUEsU0FBUyxFQUFFO0FBQ1AsaUJBQVMsRUFERjtBQUVQRixNQUFBQSxXQUFXLEVBQUU7QUFGTixLQVpIO0FBZ0JSO0FBQ0FHLElBQUFBLE9BQU8sRUFBRTtBQUNMLGlCQUFTLEVBREo7QUFFTEMsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNVO0FBRkosS0FqQkQ7QUFxQlJDLElBQUFBLFFBQVEsRUFBRTtBQUNOLGlCQUFTO0FBREgsS0FyQkY7QUF3QlI7QUFDQUMsSUFBQUEsY0FBYyxFQUFFO0FBQ1pILE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDYSxTQURHO0FBRVosaUJBQVM7QUFGRyxLQXpCUjtBQTZCUjtBQUNBQyxJQUFBQSxhQUFhLEVBQUU7QUFDWEwsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNhLFNBREU7QUFFWCxpQkFBUztBQUZFLEtBOUJQO0FBa0NSO0FBQ0FFLElBQUFBLGdCQUFnQixFQUFFO0FBQ2ROLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDZ0IsV0FESztBQUVkLGlCQUFTO0FBRkssS0FuQ1Y7QUF1Q1JDLElBQUFBLElBQUksRUFBRTtBQUNGUixNQUFBQSxJQUFJLEVBQUVULEVBQUUsQ0FBQ1UsTUFEUDtBQUVGLGlCQUFTO0FBRlAsS0F2Q0U7QUEyQ1JRLElBQUFBLFVBQVUsRUFBRTtBQUNSVCxNQUFBQSxJQUFJLEVBQUVULEVBQUUsQ0FBQ2dCLFdBREQ7QUFFUixpQkFBUztBQUZELEtBM0NKO0FBK0NSRyxJQUFBQSxVQUFVLEVBQUU7QUFDUlYsTUFBQUEsSUFBSSxFQUFFVCxFQUFFLENBQUNnQixXQUREO0FBRVIsaUJBQVM7QUFGRCxLQS9DSjtBQW1EUkksSUFBQUEsYUFBYSxFQUFFO0FBQ1hYLE1BQUFBLElBQUksRUFBRVQsRUFBRSxDQUFDZ0IsV0FERTtBQUVYLGlCQUFTO0FBRkU7QUFuRFAsR0FIUDtBQTRETDtBQUVBSyxFQUFBQSxNQTlESyxvQkE4REk7QUFDTDtBQUNSO0FBQ0E7QUFDUSxTQUFLQyxJQUFMLEdBSkssQ0FNTDs7QUFDQXRCLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWUMsWUFBWixDQUF5QixPQUF6QjtBQUNILEdBdEVJO0FBdUVMQyxFQUFBQSxRQXZFSyxzQkF1RU07QUFDUCxRQUFJQyxLQUFLLEdBQUcsS0FBS0MsVUFBakI7O0FBQ0EsUUFBSUQsS0FBSyxJQUFJLENBQWIsRUFBZ0I7QUFDWixVQUFJRSxLQUFLLEdBQUc1QixFQUFFLENBQUM2QixJQUFILENBQVEsY0FBUixDQUFaO0FBQ0FELE1BQUFBLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixXQUFXSixLQUFoQyxFQUF1Q0ssTUFBdkMsR0FBZ0QsSUFBaEQ7QUFDSCxLQUhELE1BR087QUFDSCxXQUFLSCxLQUFMLEdBQWEsS0FBYjtBQUNBNUIsTUFBQUEsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLGNBQVIsRUFBd0JFLE1BQXhCLEdBQWlDLEtBQWpDO0FBQ0g7QUFDSixHQWhGSTtBQWlGTEMsRUFBQUEsU0FqRksscUJBaUZLQyxDQWpGTCxFQWlGUUMsR0FqRlIsRUFpRmE7QUFDZCxRQUFJTixLQUFLLEdBQUc1QixFQUFFLENBQUM2QixJQUFILENBQVEsY0FBUixDQUFaO0FBQ0EsUUFBSU0sT0FBTyxHQUFHUCxLQUFLLENBQUNFLGNBQU4sQ0FBcUIsU0FBckIsQ0FBZDtBQUNBLFFBQUlNLE9BQU8sR0FBR1IsS0FBSyxDQUFDRSxjQUFOLENBQXFCLFNBQXJCLENBQWQ7QUFDQSxRQUFJTyxPQUFPLEdBQUdULEtBQUssQ0FBQ0UsY0FBTixDQUFxQixTQUFyQixDQUFkO0FBQ0FLLElBQUFBLE9BQU8sQ0FBQ0osTUFBUixHQUFpQixLQUFqQjtBQUNBSyxJQUFBQSxPQUFPLENBQUNMLE1BQVIsR0FBaUIsS0FBakI7QUFDQU0sSUFBQUEsT0FBTyxDQUFDTixNQUFSLEdBQWlCLEtBQWpCOztBQUNBLFFBQUlHLEdBQUcsS0FBSyxHQUFaLEVBQWlCO0FBQ2JsQyxNQUFBQSxFQUFFLENBQUNzQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLENBQXJDO0FBQ0FaLE1BQUFBLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixTQUFyQixFQUFnQ0MsTUFBaEMsR0FBeUMsSUFBekM7QUFDSCxLQUhELE1BR08sSUFBSUcsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDcEJsQyxNQUFBQSxFQUFFLENBQUNzQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLENBQXJDO0FBQ0FaLE1BQUFBLEtBQUssQ0FBQ0UsY0FBTixDQUFxQixTQUFyQixFQUFnQ0MsTUFBaEMsR0FBeUMsSUFBekM7QUFDSCxLQUhNLE1BR0EsSUFBSUcsR0FBRyxLQUFLLEdBQVosRUFBaUI7QUFDcEIsV0FBS04sS0FBTCxHQUFhLEtBQWI7QUFDQSxXQUFLYSxlQUFMO0FBQ0F6QyxNQUFBQSxFQUFFLENBQUNzQyxHQUFILENBQU9DLFlBQVAsQ0FBb0JDLE9BQXBCLENBQTRCLE9BQTVCLEVBQXFDLENBQXJDO0FBQ0F4QyxNQUFBQSxFQUFFLENBQUM2QixJQUFILENBQVEsY0FBUixFQUF3QkUsTUFBeEIsR0FBaUMsS0FBakM7QUFDSDtBQUNKLEdBckdJO0FBc0dMVyxFQUFBQSxhQXRHSywyQkFzR1c7QUFBQTs7QUFDWjtBQUNBMUMsSUFBQUEsRUFBRSxDQUFDMkMsS0FBSCxDQUFTQyxXQUFULENBQXFCLHFCQUFyQixFQUE0QyxLQUE1QyxFQUFtRCxFQUFuRCxFQUF1REMsSUFBdkQsQ0FBNEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ2pFLFVBQUlDLE9BQU8sR0FBRztBQUNWQyxRQUFBQSxJQUFJLEVBQUU7QUFESSxPQUFkO0FBR0FoRCxNQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1ERyxPQUFuRCxFQUE0REYsSUFBNUQsQ0FBaUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RFRyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxnQkFBWjtBQUNILE9BRkQ7QUFHQWxELE1BQUFBLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTUMsU0FBTixHQUFrQk4sR0FBRyxDQUFDTyxJQUF0QixDQVBpRSxDQVFqRTs7QUFDQSxNQUFBLEtBQUksQ0FBQ0MsU0FBTCxDQUFldkIsTUFBZixHQUF3QixLQUF4QixDQVRpRSxDQVVqRTtBQUNDOztBQUNEL0IsTUFBQUEsRUFBRSxDQUFDMkMsS0FBSCxDQUFTWSxVQUFUOztBQUNBLE1BQUEsS0FBSSxDQUFDQyxXQUFMOztBQUNBLE1BQUEsS0FBSSxDQUFDQyxlQUFMOztBQUNBLE1BQUEsS0FBSSxDQUFDaEIsZUFBTCxHQWZpRSxDQWdCakU7OztBQUNBLFVBQUd6QyxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sQ0FBZ0JNLEtBQWhCLElBQXVCLENBQTFCLEVBQTRCO0FBQ3hCMUQsUUFBQUEsRUFBRSxDQUFDMkMsS0FBSCxDQUFTZ0IsR0FBVCxDQUFhLFdBQVMzRCxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sQ0FBZ0JNLEtBQXRDLEVBQTRDLElBQTVDO0FBQ0g7QUFDSixLQXBCRDtBQXFCSCxHQTdISTtBQThITEUsRUFBQUEsZ0JBOUhLLDhCQThIYztBQUNmLFNBQUtDLFlBQUwsQ0FBa0I5QixNQUFsQixHQUEyQixLQUEzQjtBQUNILEdBaElJO0FBaUlMK0IsRUFBQUEsYUFqSUssMkJBaUlXO0FBQ1osU0FBS0MsU0FBTCxDQUFlaEMsTUFBZixHQUF3QixJQUF4QjtBQUNBLFNBQUtpQyxjQUFMO0FBQ0gsR0FwSUk7O0FBcUlMO0FBQ0o7QUFDQTtBQUNJMUMsRUFBQUEsSUF4SUssa0JBd0lFO0FBQUE7O0FBQ0g7QUFDQSxTQUFLMkMsS0FBTCxHQUFhakUsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLHFCQUFSLENBQWIsQ0FGRyxDQUdIO0FBQ0E7O0FBQ0EsU0FBS3FDLElBQUwsR0FBWWxFLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSwwQkFBUixDQUFaLENBTEcsQ0FNSDs7QUFDQSxTQUFLc0MsVUFBTCxHQUFrQixLQUFLRCxJQUFMLENBQVVFLE1BQTVCLENBUEcsQ0FRSDs7QUFDQSxTQUFLQyxTQUFMLEdBQWlCLENBQWpCO0FBQ0EsU0FBS0MsUUFBTCxHQUFnQixDQUFoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsS0FBakIsQ0FYRyxDQVlIOztBQUNBLFNBQUtDLE9BQUwsR0FBZSxLQUFLUCxLQUFMLENBQVdRLFlBQVgsQ0FBd0IsYUFBeEIsQ0FBZixDQWJHLENBY0g7O0FBQ0EsU0FBS0MsYUFBTCxHQUFxQjFFLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxzQkFBUixDQUFyQixDQWZHLENBZ0JIOztBQUNBLFNBQUs4QyxLQUFMLEdBQWEzRSxFQUFFLENBQUM2QixJQUFILENBQVEsNkJBQVIsRUFBdUM0QyxZQUF2QyxDQUFvRHpFLEVBQUUsQ0FBQzRFLEtBQXZELENBQWIsQ0FqQkcsQ0FrQkg7O0FBQ0EsU0FBS0MsV0FBTCxHQUFtQjdFLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSw4QkFBUixFQUF3QzRDLFlBQXhDLENBQXFEekUsRUFBRSxDQUFDNEUsS0FBeEQsQ0FBbkIsQ0FuQkcsQ0FvQkg7O0FBQ0EsU0FBS0UsSUFBTCxHQUFZOUUsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLCtCQUFSLEVBQXlDNEMsWUFBekMsQ0FBc0R6RSxFQUFFLENBQUM0RSxLQUF6RCxDQUFaLENBckJHLENBc0JIOztBQUNBLFNBQUtHLFVBQUwsR0FBa0IvRSxFQUFFLENBQUM2QixJQUFILENBQVEscUNBQVIsRUFBK0M0QyxZQUEvQyxDQUE0RHpFLEVBQUUsQ0FBQzRFLEtBQS9ELENBQWxCO0FBQ0EsU0FBS3RCLFNBQUwsR0FBaUJ0RCxFQUFFLENBQUM2QixJQUFILENBQVEsa0JBQVIsQ0FBakI7QUFDQSxTQUFLa0MsU0FBTCxHQUFpQi9ELEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxrQkFBUixDQUFqQjtBQUNBLFNBQUttRCxRQUFMLEdBQWdCaEYsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLG9CQUFSLENBQWhCO0FBQ0EsU0FBS2dDLFlBQUwsR0FBb0IsS0FBS1AsU0FBTCxDQUFleEIsY0FBZixDQUE4QixjQUE5QixDQUFwQixDQTNCRyxDQTRCSDs7QUFDQSxTQUFLbUQsUUFBTCxHQUFnQmpGLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxpQkFBUixDQUFoQixDQTdCRyxDQThCSDs7QUFDQSxTQUFLcUQsT0FBTCxHQUFlbEYsRUFBRSxDQUFDdUIsUUFBSCxDQUFZNEQsbUJBQVosRUFBZjtBQUNBLFNBQUtELE9BQUwsQ0FBYUUsT0FBYixHQUF1QixJQUF2QixDQWhDRyxDQWlDSDtBQUNBO0FBRUE7O0FBQ0EsU0FBSzFFLE1BQUwsR0FBYyxFQUFkO0FBQ0EsU0FBS0YsT0FBTCxDQUFhNkUsT0FBYixDQUFxQixVQUFBQyxJQUFJLEVBQUk7QUFDekIsTUFBQSxNQUFJLENBQUM1RSxNQUFMLENBQVk0RSxJQUFJLENBQUNDLEtBQWpCLElBQTBCRCxJQUExQjtBQUNILEtBRkQsRUF0Q0csQ0EwQ0g7O0FBQ0EsUUFBSUUsUUFBUSxHQUFHeEYsRUFBRSxDQUFDNkIsSUFBSCxDQUFRLG9CQUFSLENBQWYsQ0EzQ0csQ0E0Q0g7O0FBQ0EsU0FBSzRELElBQUwsR0FBWXpGLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxhQUFSLENBQVosQ0E3Q0csQ0E4Q0g7O0FBQ0EsU0FBSzRELElBQUwsQ0FBVUMsRUFBVixDQUFhMUYsRUFBRSxDQUFDMkYsSUFBSCxDQUFRQyxTQUFSLENBQWtCQyxTQUEvQixFQUEwQyxLQUFLQyxTQUFMLENBQWVDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBMUM7QUFDQVAsSUFBQUEsUUFBUSxDQUFDRSxFQUFULENBQVkxRixFQUFFLENBQUMyRixJQUFILENBQVFDLFNBQVIsQ0FBa0JDLFNBQTlCLEVBQXlDLEtBQUtHLFdBQUwsQ0FBaUJELElBQWpCLENBQXNCLElBQXRCLENBQXpDO0FBQ0EsU0FBS0UsVUFBTCxHQUFrQixDQUFDLENBQW5CO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQixDQUFwQjtBQUNBLFNBQUt6QyxlQUFMO0FBQ0F6RCxJQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVN3RCxhQUFUO0FBQ0EsU0FBS0MsU0FBTDtBQUNBLFNBQUtDLFNBQUw7QUFDQSxTQUFLQyxRQUFMO0FBQ0EsU0FBS0MsaUJBQUw7QUFDQSxTQUFLQyxVQUFMO0FBQ0EsU0FBS0MsT0FBTCxHQUFlLEtBQUtDLFNBQUwsQ0FBZUQsT0FBOUI7QUFDQSxTQUFLRSxZQUFMLEdBQW9CLENBQXBCLENBM0RHLENBNERIOztBQUNBLFNBQUtoRixVQUFMLEdBQWtCaUYsUUFBUSxDQUFDNUcsRUFBRSxDQUFDc0MsR0FBSCxDQUFPQyxZQUFQLENBQW9Cc0UsT0FBcEIsQ0FBNEIsT0FBNUIsQ0FBRCxDQUExQjs7QUFDQSxRQUFJLEtBQUtsRixVQUFMLEdBQWtCLENBQWxCLElBQXVCLEtBQUtBLFVBQUwsSUFBbUIsQ0FBOUMsRUFBaUQ7QUFDN0MsV0FBS0MsS0FBTCxHQUFhLElBQWIsQ0FENkMsQ0FFN0M7O0FBQ0EsV0FBS29DLGNBQUw7QUFDQWhFLE1BQUFBLEVBQUUsQ0FBQzZCLElBQUgsQ0FBUSxjQUFSLEVBQXdCRSxNQUF4QixHQUFpQyxJQUFqQztBQUNBLFdBQUtOLFFBQUw7QUFDSCxLQU5ELE1BTU87QUFDSCxXQUFLRyxLQUFMLEdBQWEsS0FBYjtBQUNBLFdBQUtvQyxjQUFMO0FBQ0FoRSxNQUFBQSxFQUFFLENBQUM2QixJQUFILENBQVEsY0FBUixFQUF3QkUsTUFBeEIsR0FBaUMsS0FBakM7QUFDQS9CLE1BQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU21FLFVBQVQ7QUFDQSxXQUFLeEQsU0FBTCxDQUFldkIsTUFBZixHQUF3QixJQUF4QjtBQUNBLFVBQUlnRixTQUFTLEdBQUcsS0FBS3pELFNBQUwsQ0FBZXhCLGNBQWYsQ0FBOEIsV0FBOUIsRUFBMkMyQyxZQUEzQyxDQUF3RHpFLEVBQUUsQ0FBQzRFLEtBQTNELENBQWhCO0FBQ0EsVUFBSW9DLFNBQVMsR0FBRyxLQUFLMUQsU0FBTCxDQUFleEIsY0FBZixDQUE4QixXQUE5QixFQUEyQzJDLFlBQTNDLENBQXdEekUsRUFBRSxDQUFDNEUsS0FBM0QsQ0FBaEI7QUFDQW1DLE1BQUFBLFNBQVMsQ0FBQ0UsTUFBVixzQ0FBMkIsS0FBS1AsU0FBTCxDQUFlUSxLQUExQztBQUNBRixNQUFBQSxTQUFTLENBQUNDLE1BQVYsY0FBdUIsS0FBS1AsU0FBTCxDQUFlUyxFQUF0QyxZQVRHLENBVUg7QUFDQTtBQUNBOztBQUNBLFVBQUlDLEdBQUcsR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQUFWO0FBQ0EsVUFBSUMsR0FBRyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBVjtBQUNBLFVBQUl0RSxJQUFJLEdBQUdvRSxHQUFHLENBQUNDLEdBQUQsQ0FBZDtBQUNBLFdBQUtFLFdBQUwsR0FBbUJ2RSxJQUFuQjtBQUNBLFVBQUl3RSxJQUFJLEdBQUcsS0FBSzNELFlBQUwsQ0FBa0IvQixjQUFsQixDQUFpQyxNQUFqQyxFQUF5QzJDLFlBQXpDLENBQXNEekUsRUFBRSxDQUFDeUgsTUFBekQsQ0FBWDs7QUFDQSxVQUFJekUsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDYjtBQUNBd0UsUUFBQUEsSUFBSSxDQUFDRSxXQUFMLEdBQW1CLEtBQUt0RyxhQUFMLENBQW1CLENBQW5CLENBQW5CO0FBQ0gsT0FIRCxNQUdPLElBQUk0QixJQUFJLEtBQUssRUFBYixFQUFpQjtBQUNwQndFLFFBQUFBLElBQUksQ0FBQ0UsV0FBTCxHQUFtQixLQUFLdEcsYUFBTCxDQUFtQixDQUFuQixDQUFuQjtBQUNILE9BRk0sTUFFQSxJQUFJNEIsSUFBSSxLQUFLLEVBQWIsRUFBaUI7QUFDcEJ3RSxRQUFBQSxJQUFJLENBQUNFLFdBQUwsR0FBbUIsS0FBS3RHLGFBQUwsQ0FBbUIsQ0FBbkIsQ0FBbkI7QUFDSDtBQUNKO0FBQ0osR0F2T0k7QUF3T0x1RyxFQUFBQSxpQkF4T0ssK0JBd09lO0FBQUE7O0FBQ2hCM0gsSUFBQUEsRUFBRSxDQUFDMkMsS0FBSCxDQUFTaUYsVUFBVDtBQUNBLFFBQUlDLFFBQVEsR0FBRztBQUNYLFlBQU03SCxFQUFFLENBQUNtRCxFQUFILENBQU0yRSxFQUREO0FBRVgsZ0JBQVUsS0FBS1A7QUFGSixLQUFmO0FBSUF2SCxJQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsd0JBQXJCLEVBQStDLE1BQS9DLEVBQXVEaUYsUUFBdkQsRUFBaUVoRixJQUFqRSxDQUFzRSxVQUFDQyxHQUFELEVBQVM7QUFDM0U7QUFDQSxNQUFBLE1BQUksQ0FBQ2lGLFlBQUwsR0FBb0JqRixHQUFHLENBQUNPLElBQUosQ0FBUzJFLEtBQTdCOztBQUNBLE1BQUEsTUFBSSxDQUFDcEUsZ0JBQUw7QUFDSCxLQUpEO0FBS0gsR0FuUEk7QUFvUEw7QUFDQUosRUFBQUEsV0FyUEsseUJBcVBTO0FBQUE7O0FBQ1Y7QUFDQSxRQUFJeUUsTUFBTSxHQUFHakksRUFBRSxDQUFDbUQsRUFBSCxDQUFNQyxTQUFOLENBQWdCNkUsTUFBN0IsQ0FGVSxDQUdWO0FBQ0E7O0FBQ0EsUUFBSTVFLElBQUksR0FBRztBQUNQLFdBQUssSUFERTtBQUVQLFlBQU0sSUFGQztBQUdQLFlBQU0sSUFIQztBQUlQLFlBQU0sTUFKQztBQUtQLFlBQU0sSUFMQztBQU1QLFlBQU07QUFOQyxLQUFYOztBQUxVLCtCQWFENkUsQ0FiQztBQWNOLFVBQUlELE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVsRixJQUFWLEtBQW1CLEVBQXZCLEVBQTJCO0FBQ3ZCO0FBQ0EsUUFBQSxNQUFJLENBQUNpRCxVQUFMLEdBQWtCZ0MsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVUMsR0FBVixHQUFnQixDQUFsQztBQUNILE9BSEQsTUFHTztBQUNIO0FBQ0EsWUFBSUYsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVUMsR0FBZCxFQUFtQjtBQUNmO0FBQ0EsY0FBSXBGLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUVpRixNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVbEY7QUFETixXQUFkO0FBR0FoRCxVQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1ERyxPQUFuRCxFQUE0REYsSUFBNUQsQ0FBaUUsVUFBQ0MsR0FBRCxFQUFTO0FBQ3RFRyxZQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxlQUFaLEVBQTZCRyxJQUFJLENBQUM0RSxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVbEYsSUFBWCxDQUFqQztBQUNILFdBRkQ7QUFHSDtBQUNKOztBQUNELFVBQUlpRixNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVbEYsSUFBVixLQUFtQixFQUF2QixFQUEyQjtBQUN2QixRQUFBLE1BQUksQ0FBQ29GLFdBQUwsR0FBbUJILE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVDLEdBQTdCO0FBQ0g7O0FBQ0QsVUFBSUYsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVWxGLElBQVYsS0FBbUIsRUFBdkIsRUFBMkI7QUFDdkIsUUFBQSxNQUFJLENBQUNxRixjQUFMLEdBQXNCSixNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVQyxHQUFoQztBQUNIOztBQUNELFVBQUlGLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVsRixJQUFWLEtBQW1CLEVBQXZCLEVBQTJCO0FBQ3ZCLFFBQUEsTUFBSSxDQUFDa0QsWUFBTCxHQUFvQitCLE1BQU0sQ0FBQ0MsQ0FBRCxDQUFOLENBQVVDLEdBQTlCO0FBQ0g7O0FBQ0QsVUFBSUYsTUFBTSxDQUFDQyxDQUFELENBQU4sQ0FBVWxGLElBQVYsS0FBbUIsRUFBdkIsRUFBMkI7QUFDdkIsUUFBQSxNQUFJLENBQUNzRixZQUFMLEdBQW9CTCxNQUFNLENBQUNDLENBQUQsQ0FBTixDQUFVQyxHQUE5QjtBQUNIO0FBeENLOztBQWFWLFNBQUssSUFBSUQsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBR0QsTUFBTSxDQUFDTSxNQUEzQixFQUFtQ0wsQ0FBQyxFQUFwQyxFQUF3QztBQUFBLFlBQS9CQSxDQUErQjtBQTRCdkM7QUFFSixHQWhTSTs7QUFpU0w7QUFDSjtBQUNBO0FBQ0lNLEVBQUFBLFVBcFNLLHdCQW9TUTtBQUNULFFBQUksS0FBS25FLFNBQVQsRUFBb0IsT0FEWCxDQUdUOztBQUNBLFFBQUksS0FBS0gsSUFBTCxDQUFVdUUsS0FBVixJQUFtQixFQUF2QixFQUEyQjtBQUN2QixXQUFLbkksV0FBTCxHQUFtQixDQUFDLEtBQUtBLFdBQXpCO0FBQ0gsS0FGRCxNQUVPLElBQUksS0FBSzRELElBQUwsQ0FBVXVFLEtBQVYsSUFBbUIsQ0FBQyxFQUF4QixFQUE0QjtBQUMvQixXQUFLbkksV0FBTCxHQUFtQm9JLElBQUksQ0FBQ0MsR0FBTCxDQUFTLEtBQUtySSxXQUFkLENBQW5CO0FBQ0g7O0FBQUE7QUFFRCxTQUFLNEQsSUFBTCxDQUFVdUUsS0FBVixJQUFtQixLQUFLbkksV0FBeEI7QUFDSCxHQS9TSTs7QUFpVEw7QUFDSjtBQUNBO0FBQ0kwRixFQUFBQSxXQXBUSyx5QkFvVFM7QUFDVjtBQUNBO0FBQ0EsUUFBSSxLQUFLM0IsU0FBVCxFQUFvQixPQUhWLENBSVY7O0FBQ0EsU0FBS0csT0FBTCxDQUFhb0UsWUFBYixDQUEwQixDQUExQixFQUE2QixNQUE3QixFQUFxQyxJQUFyQztBQUNBLFNBQUt2RSxTQUFMLEdBQWlCLENBQWpCO0FBQ0gsR0EzVEk7O0FBNlRMO0FBQ0o7QUFDQTtBQUNJbUIsRUFBQUEsUUFoVUssc0JBZ1VNO0FBQ1AsWUFBUSxLQUFLbkIsU0FBYjtBQUNJLFdBQUssQ0FBTDtBQUNJLGFBQUtILElBQUwsQ0FBVUUsTUFBVixJQUFvQixLQUFLaEUsS0FBekI7QUFDQTs7QUFDSixXQUFLLENBQUw7QUFDSSxZQUFJLEtBQUs4RCxJQUFMLENBQVVFLE1BQVYsSUFBb0IsS0FBS0QsVUFBN0IsRUFBeUM7QUFFckM7QUFDQSxjQUFJLEtBQUtELElBQUwsQ0FBVTJFLFFBQVYsQ0FBbUIsQ0FBbkIsQ0FBSixFQUEyQjtBQUN2QixnQkFBSSxLQUFLM0UsSUFBTCxDQUFVMkUsUUFBVixDQUFtQixDQUFuQixFQUFzQkMsYUFBMUIsRUFBeUM7QUFDckMsbUJBQUtDLE1BQUwsQ0FBWSxLQUFLN0UsSUFBTCxDQUFVMkUsUUFBVixDQUFtQixDQUFuQixFQUFzQkEsUUFBbEMsRUFEcUMsQ0FFckM7O0FBQ0EsbUJBQUtyRSxPQUFMLENBQWFvRSxZQUFiLENBQTBCLENBQTFCLEVBQTZCLE9BQTdCLEVBQXNDLEtBQXRDO0FBQ0EsbUJBQUtwRSxPQUFMLENBQWF3RSxZQUFiLENBQTBCLENBQTFCLEVBQTZCLE1BQTdCLEVBQXFDLElBQXJDO0FBQ0gsYUFMRCxNQUtPO0FBQ0gsbUJBQUt4RSxPQUFMLENBQWFvRSxZQUFiLENBQTBCLENBQTFCLEVBQTZCLE1BQTdCLEVBQXFDLElBQXJDO0FBQ0g7QUFDSjs7QUFDRCxlQUFLSyxZQUFMO0FBQ0gsU0FkRCxNQWNPO0FBQ0gsZUFBSy9FLElBQUwsQ0FBVUUsTUFBVixJQUFvQixLQUFLaEUsS0FBekI7QUFDSDs7QUFBQTtBQUNEO0FBdEJSOztBQXVCQztBQUNKLEdBelZJOztBQTJWTDtBQUNKO0FBQ0E7QUFDSThJLEVBQUFBLFlBOVZLLDBCQThWVTtBQUNYO0FBQ0E7QUFDQSxTQUFLMUUsT0FBTCxDQUFhb0UsWUFBYixDQUEwQixDQUExQixFQUE2QixJQUE3QixFQUFtQyxJQUFuQztBQUNBLFNBQUt2RSxTQUFMLEdBQWlCLENBQWpCO0FBQ0gsR0FuV0k7O0FBcVdMO0FBQ0o7QUFDQTtBQUNJOEUsRUFBQUEsUUF4V0ssb0JBd1dJQyxLQXhXSixFQXdXVztBQUNaO0FBQ0EsUUFBSUMsT0FBTyxHQUFHLENBQWQ7QUFDQUMsdUJBQVNGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxJQUFwQixJQUE0QkYsbUJBQVNGLEtBQUssQ0FBQ0csSUFBTixDQUFXQyxJQUFwQixLQUE2QixFQUF6RDs7QUFDQSxRQUFJLEtBQUt0RCxZQUFULEVBQXVCO0FBQ25CakQsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksc0JBQVo7QUFDQW1HLE1BQUFBLE9BQU8sR0FBRyxHQUFWO0FBQ0g7O0FBQ0QsU0FBS2pKLEtBQUwsR0FBYWtKLG1CQUFTRixLQUFLLENBQUNHLElBQU4sQ0FBV0MsSUFBcEIsRUFBMEJwSixLQUExQixHQUFrQ2lKLE9BQWxDLElBQTZDLEVBQTFEO0FBQ0gsR0FqWEk7O0FBbVhMO0FBQ0o7QUFDQTtBQUNJakQsRUFBQUEsU0F0WEssdUJBc1hPO0FBQ1I7QUFDQSxTQUFLcUQsT0FBTCxHQUNJLEtBQUs5RSxLQUFMLENBQVdzQyxNQUFYLEdBQ0EsS0FBS25DLElBQUwsQ0FBVW1DLE1BQVYsR0FDQSxLQUFLbEMsVUFBTCxDQUFnQmtDLE1BQWhCLEdBQ0EsS0FBS3BDLFdBQUwsQ0FBaUJvQyxNQUFqQixHQUEwQixDQUo5QjtBQUtILEdBN1hJOztBQStYTDtBQUNKO0FBQ0E7QUFDSVosRUFBQUEsU0FsWUssdUJBa1lPO0FBQ1I7QUFDQSxRQUFJLEtBQUsrQixXQUFULEVBQXNCO0FBQ2xCbkYsTUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVkscUJBQVo7QUFDQSxXQUFLa0YsV0FBTCxHQUFtQixDQUFuQjtBQUNBLFdBQUt6SCxRQUFMLElBQWlCLEVBQWpCO0FBQ0g7O0FBQ0QsU0FBS21FLElBQUwsQ0FBVW1DLE1BQVYsR0FBbUIsS0FBS3RHLFFBQXhCOztBQUNBLFNBQUsrSSxLQUFMLEdBQWEsWUFBWTtBQUNyQixXQUFLL0ksUUFBTDtBQUNBLFdBQUttRSxJQUFMLENBQVVtQyxNQUFWLEdBQW1CLEtBQUt0RyxRQUF4Qjs7QUFDQSxVQUFJLEtBQUtBLFFBQUwsSUFBaUIsQ0FBckIsRUFBd0I7QUFDcEIsYUFBS2dKLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckI7QUFDQSxhQUFLRSxRQUFMO0FBQ0g7O0FBQUE7QUFDSixLQVBEOztBQVFBLFNBQUtDLFFBQUwsQ0FBYyxLQUFLSCxLQUFuQixFQUEwQixDQUExQjtBQUNILEdBblpJOztBQXFaTDtBQUNKO0FBQ0E7QUFDSXBELEVBQUFBLFFBeFpLLHNCQXdaTTtBQUNQLFNBQUtJLFNBQUwsR0FBaUJvRCxrQkFBTSxVQUFVOUosRUFBRSxDQUFDbUQsRUFBSCxDQUFNQyxTQUFOLENBQWdCTSxLQUFoQyxDQUFqQixDQURPLENBRVA7O0FBQ0EsU0FBS2lCLEtBQUwsQ0FBV3NDLE1BQVgsR0FBb0JqSCxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sQ0FBZ0IyRyxhQUFwQztBQUNBLFNBQUtoRixVQUFMLENBQWdCa0MsTUFBaEIsUUFBNEJqSCxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sQ0FBZ0JNLEtBQTVDO0FBQ0gsR0E3Wkk7O0FBK1pMO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDSTZDLEVBQUFBLGlCQXZhSywrQkF1YWU7QUFDaEIsU0FBSzFCLFdBQUwsQ0FBaUJvQyxNQUFqQixHQUEwQixLQUFLUCxTQUFMLENBQWVRLEtBQXpDO0FBQ0gsR0F6YUk7O0FBMmFMO0FBQ0o7QUFDQTtBQUNBO0FBQ0lWLEVBQUFBLFVBL2FLLHdCQSthUTtBQUFBOztBQUNULFFBQUl3RCxVQUFVLEdBQUcsS0FBS0MsYUFBTCxFQUFqQixDQURTLENBRVQ7QUFDQTs7QUFDQUQsSUFBQUEsVUFBVSxDQUFDM0UsT0FBWCxDQUFtQixVQUFBQyxJQUFJLEVBQUk7QUFDdkIsVUFBSWlFLElBQUksR0FBR3ZKLEVBQUUsQ0FBQ2tLLFdBQUgsQ0FBZSxNQUFJLENBQUN4SixNQUFMLENBQVk0RSxJQUFJLENBQUNrRSxJQUFqQixDQUFmLENBQVg7O0FBQ0EsVUFBSVcsRUFBRSxHQUFHLE1BQUksQ0FBQ0MsUUFBTCxDQUFjYixJQUFkLENBQVQ7O0FBQ0FBLE1BQUFBLElBQUksQ0FBQ2MsTUFBTCxHQUFjLE1BQUksQ0FBQ3BGLFFBQW5COztBQUNBLFVBQUlLLElBQUksQ0FBQzRCLEtBQVQsRUFBZ0I7QUFDWnFDLFFBQUFBLElBQUksQ0FBQ3JDLEtBQUwsR0FBYTVCLElBQUksQ0FBQzRCLEtBQWxCO0FBQ0g7O0FBQ0QsVUFBSTVCLElBQUksQ0FBQ3RDLElBQVQsRUFBZTtBQUNYdUcsUUFBQUEsSUFBSSxDQUFDZSxLQUFMLEdBQWFoRixJQUFJLENBQUN0QyxJQUFsQjtBQUNIOztBQUNEdUcsTUFBQUEsSUFBSSxDQUFDZ0IsV0FBTCxDQUFpQkosRUFBakI7O0FBQ0EsVUFBSTdFLElBQUksQ0FBQ2tFLElBQUwsS0FBYyxLQUFsQixFQUF5QjtBQUNyQixZQUFJZ0IsSUFBSSxHQUFHeEssRUFBRSxDQUFDa0ssV0FBSCxDQUFlLE1BQUksQ0FBQ2pKLElBQXBCLENBQVg7O0FBQ0EsUUFBQSxNQUFJLENBQUNzSSxJQUFMLENBQVVrQixRQUFWLENBQW1CRCxJQUFuQjs7QUFDQUEsUUFBQUEsSUFBSSxDQUFDaEIsSUFBTCxHQUFZLFNBQVo7QUFDQWdCLFFBQUFBLElBQUksQ0FBQ0QsV0FBTCxDQUFpQnZLLEVBQUUsQ0FBQzBLLEVBQUgsQ0FBTVAsRUFBRSxDQUFDUSxDQUFULEVBQVlSLEVBQUUsQ0FBQ1MsQ0FBSCxHQUFPLEdBQW5CLENBQWpCO0FBQ0FyQixRQUFBQSxJQUFJLENBQUNpQixJQUFMLEdBQVlBLElBQVo7QUFDSDtBQUNKLEtBbEJELEVBSlMsQ0F1QlQ7O0FBQ0EsUUFBSSxLQUFLOUQsU0FBTCxDQUFlbUUsS0FBbkIsRUFBMEI7QUFDdEIsVUFBSXhILElBQUksR0FBRyxLQUFLcUQsU0FBTCxDQUFlbUUsS0FBZixDQUFxQkMsS0FBckIsQ0FBMkIsR0FBM0IsQ0FBWCxDQURzQixDQUV0Qjs7QUFDQSxVQUFJQyxXQUFXLEdBQUdDLE1BQU0sQ0FBQzNILElBQUksQ0FBQyxDQUFELENBQUwsQ0FBeEI7O0FBQ0EsVUFBSTBILFdBQVcsR0FBRyxDQUFsQixFQUFxQjtBQUNqQixhQUFLLElBQUk3QyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHNkMsV0FBcEIsRUFBaUM3QyxDQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLGNBQUlxQixJQUFJLEdBQUd2SixFQUFFLENBQUNrSyxXQUFILENBQWUsS0FBS3hKLE1BQUwsQ0FBWSxPQUFaLENBQWYsQ0FBWDtBQUNBLGNBQUl1SyxLQUFLLEdBQUcsQ0FBQyxLQUFLaEcsUUFBTCxDQUFjaUcsS0FBZCxHQUFzQixFQUF2QixJQUE2QixDQUE3QixJQUFrQyxDQUFDeEMsSUFBSSxDQUFDeUMsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUExRCxDQUFaO0FBQ0EsY0FBSUMsS0FBSyxHQUFHLENBQUMsS0FBS25HLFFBQUwsQ0FBY2IsTUFBZCxHQUF1QixFQUF4QixJQUE4QixDQUE5QixJQUFtQyxDQUFDc0UsSUFBSSxDQUFDeUMsTUFBTCxLQUFnQixHQUFqQixJQUF3QixDQUEzRCxDQUFaO0FBQ0EsY0FBSUUsR0FBRyxHQUFHckwsRUFBRSxDQUFDMEssRUFBSCxDQUFNTyxLQUFOLEVBQWFHLEtBQWIsQ0FBVjtBQUNBN0IsVUFBQUEsSUFBSSxDQUFDYyxNQUFMLEdBQWMsS0FBS3BGLFFBQW5CO0FBQ0FzRSxVQUFBQSxJQUFJLENBQUNyQyxLQUFMLEdBQWEsRUFBYjtBQUNBcUMsVUFBQUEsSUFBSSxDQUFDZ0IsV0FBTCxDQUFpQmMsR0FBakI7QUFDQSxlQUFLQyxTQUFMLENBQWUvQixJQUFmO0FBQ0g7QUFDSjs7QUFDRCxVQUFJZ0MsZ0JBQWdCLEdBQUdQLE1BQU0sQ0FBQzNILElBQUksQ0FBQyxDQUFELENBQUwsQ0FBN0I7O0FBQ0EsVUFBSWtJLGdCQUFnQixHQUFHLENBQXZCLEVBQTBCO0FBQ3RCLGFBQUssSUFBSXJELEVBQUMsR0FBRyxDQUFiLEVBQWdCQSxFQUFDLEdBQUdxRCxnQkFBcEIsRUFBc0NyRCxFQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDLGNBQUlxQixNQUFJLEdBQUd2SixFQUFFLENBQUNrSyxXQUFILENBQWUsS0FBS3hKLE1BQUwsQ0FBWSxZQUFaLENBQWYsQ0FBWDs7QUFDQSxjQUFJdUssTUFBSyxHQUFHLENBQUMsS0FBS2hHLFFBQUwsQ0FBY2lHLEtBQWQsR0FBc0IsRUFBdkIsSUFBNkIsQ0FBN0IsSUFBa0MsQ0FBQ3hDLElBQUksQ0FBQ3lDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBMUQsQ0FBWjs7QUFDQSxjQUFJQyxNQUFLLEdBQUcsQ0FBQyxLQUFLbkcsUUFBTCxDQUFjYixNQUFkLEdBQXVCLEVBQXhCLElBQThCLENBQTlCLElBQW1DLENBQUNzRSxJQUFJLENBQUN5QyxNQUFMLEtBQWdCLEdBQWpCLElBQXdCLENBQTNELENBQVo7O0FBQ0EsY0FBSUUsS0FBRyxHQUFHckwsRUFBRSxDQUFDMEssRUFBSCxDQUFNTyxNQUFOLEVBQWFHLE1BQWIsQ0FBVjs7QUFDQTdCLFVBQUFBLE1BQUksQ0FBQ2MsTUFBTCxHQUFjLEtBQUtwRixRQUFuQjtBQUNBc0UsVUFBQUEsTUFBSSxDQUFDckMsS0FBTCxHQUFhLEdBQWI7O0FBQ0FxQyxVQUFBQSxNQUFJLENBQUNnQixXQUFMLENBQWlCYyxLQUFqQjs7QUFDQSxlQUFLQyxTQUFMLENBQWUvQixNQUFmO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0FyZUk7QUFzZUw7QUFDQStCLEVBQUFBLFNBdmVLLHFCQXVlS1QsS0F2ZUwsRUF1ZVk7QUFDYjtBQUNBLFFBQUlXLFNBQVMsR0FBRyxFQUFoQjs7QUFDQSxRQUFJQyxJQUFJLEdBQUk3RSxRQUFRLENBQUMsTUFBTWlFLEtBQUssQ0FBQ0YsQ0FBYixDQUFSLEdBQTBCLEdBQTNCLEdBQWtDYSxTQUE3Qzs7QUFDQXhMLElBQUFBLEVBQUUsQ0FBQzBMLEtBQUgsQ0FBU2IsS0FBVCxFQUFnQmMsRUFBaEIsQ0FBbUJGLElBQW5CLEVBQXlCO0FBQUVkLE1BQUFBLENBQUMsRUFBRTtBQUFMLEtBQXpCLEVBQXFDaUIsS0FBckM7QUFDQSxTQUFLQyxZQUFMLENBQWtCLFlBQU07QUFDcEI7QUFDQSxVQUFJaEIsS0FBSyxDQUFDckIsSUFBTixLQUFlLEVBQW5CLEVBQXVCO0FBQ25CcUIsUUFBQUEsS0FBSyxDQUFDaUIsTUFBTixHQUFlLENBQUMsQ0FBaEI7QUFDQTlMLFFBQUFBLEVBQUUsQ0FBQzBMLEtBQUgsQ0FBU2IsS0FBVCxFQUFnQmtCLGFBQWhCLENBQThCL0wsRUFBRSxDQUFDMEwsS0FBSCxHQUFXQyxFQUFYLENBQWNILFNBQWQsRUFBeUI7QUFBRWIsVUFBQUEsQ0FBQyxFQUFFLENBQUM7QUFBTixTQUF6QixFQUFzQ3FCLEtBQXRDLENBQTRDLENBQTVDLEVBQStDQyxJQUEvQyxDQUFvRCxZQUFNO0FBQ3BGcEIsVUFBQUEsS0FBSyxDQUFDaUIsTUFBTixHQUFlLENBQWY7QUFDSCxTQUY2QixFQUUzQkgsRUFGMkIsQ0FFeEJILFNBRndCLEVBRWI7QUFBRWIsVUFBQUEsQ0FBQyxFQUFFO0FBQUwsU0FGYSxFQUVEcUIsS0FGQyxDQUVLLENBRkwsRUFFUUMsSUFGUixDQUVhLFlBQU07QUFDN0NwQixVQUFBQSxLQUFLLENBQUNpQixNQUFOLEdBQWUsQ0FBQyxDQUFoQjtBQUNILFNBSjZCLENBQTlCLEVBSUlGLEtBSko7QUFLSDtBQUNKLEtBVkQsRUFVR0gsSUFBSSxHQUFHLENBVlY7QUFXSCxHQXZmSTtBQXdmTDtBQUNBeEIsRUFBQUEsYUF6ZkssMkJBeWZXO0FBQ1osUUFBSWlDLGFBQWEsR0FBRyxFQUFwQixDQURZLENBRVo7O0FBQ0EsUUFBSSxLQUFLeEYsU0FBTCxDQUFlNEQsS0FBbkIsRUFBMEI7QUFDdEIsVUFBSUEsS0FBSyxHQUFHLEtBQUs1RCxTQUFMLENBQWU0RCxLQUFmLENBQXFCUSxLQUFyQixDQUEyQixHQUEzQixDQUFaLENBRHNCLENBRXRCOztBQUNBLFVBQUlSLEtBQUssQ0FBQyxDQUFELENBQVQsRUFBYztBQUNWLFlBQUk2QixJQUFJLEdBQUcsRUFBWDtBQUNBLFlBQUlDLEdBQUcsR0FBRztBQUNOLGtCQUFRLEtBREY7QUFFTjtBQUNBLGtCQUFRLEdBSEY7QUFJTixtQkFBUztBQUpILFNBQVY7O0FBTUFELFFBQUFBLElBQUksQ0FBQ0UsSUFBTCxDQUFVRCxHQUFWOztBQUNBRixRQUFBQSxhQUFhLGFBQU9BLGFBQVAsRUFBeUJDLElBQXpCLENBQWI7QUFDSDs7QUFDRCxVQUFJN0IsS0FBSyxDQUFDLENBQUQsQ0FBVCxFQUFjO0FBQ1YsWUFBSTZCLEtBQUksR0FBRyxFQUFYO0FBQ0EsWUFBSUcsS0FBSyxHQUFHLElBQVosQ0FGVSxDQUdWOztBQUNBLFlBQUksS0FBS2hFLFlBQVQsRUFBdUI7QUFDbkIsY0FBSWxCLEdBQUcsR0FBRyxDQUFDLElBQUQsRUFBTyxNQUFQLEVBQWUsTUFBZixFQUF1QixJQUF2QixFQUE2QixJQUE3QixDQUFWO0FBQ0EsY0FBSW1GLEdBQUcsR0FBRyxLQUFLakYsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFWO0FBQ0FnRixVQUFBQSxLQUFLLEdBQUdsRixHQUFHLENBQUNtRixHQUFELENBQVg7QUFDSCxTQUpELE1BSU87QUFDSCxjQUFJbkYsS0FBRyxHQUFHLENBQUMsSUFBRCxFQUFPLE1BQVAsRUFBZSxNQUFmLEVBQXVCLElBQXZCLENBQVY7O0FBQ0EsY0FBSW1GLElBQUcsR0FBRyxLQUFLakYsV0FBTCxDQUFpQixDQUFqQixFQUFvQixDQUFwQixDQUFWOztBQUNBZ0YsVUFBQUEsS0FBSyxHQUFHbEYsS0FBRyxDQUFDbUYsSUFBRCxDQUFYO0FBQ0g7O0FBQ0QsWUFBSUgsSUFBRyxHQUFHO0FBQ04sa0JBQVEsU0FERjtBQUVOO0FBQ0Esa0JBQVFFLEtBSEY7QUFJTixtQkFBUztBQUpILFNBQVY7O0FBTUFILFFBQUFBLEtBQUksQ0FBQ0UsSUFBTCxDQUFVRCxJQUFWOztBQUNBRixRQUFBQSxhQUFhLGFBQU9BLGFBQVAsRUFBeUJDLEtBQXpCLENBQWI7QUFDSDtBQUNKOztBQUNELFFBQUksS0FBS3pGLFNBQUwsQ0FBZThELElBQW5CLEVBQXlCO0FBQ3JCLFdBQUssSUFBSXRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsS0FBS3hCLFNBQUwsQ0FBZThELElBQW5DLEVBQXlDdEMsQ0FBQyxFQUExQyxFQUE4QztBQUMxQyxZQUFJaUUsS0FBSSxHQUFHLEVBQVg7QUFDQSxZQUFJQyxLQUFHLEdBQUc7QUFDTixrQkFBUSxLQURGO0FBRU4sbUJBQVM7QUFGSCxTQUFWOztBQUlBRCxRQUFBQSxLQUFJLENBQUNFLElBQUwsQ0FBVUQsS0FBVjs7QUFDQUYsUUFBQUEsYUFBYSxhQUFPQSxhQUFQLEVBQXlCQyxLQUF6QixDQUFiO0FBQ0g7QUFDSixLQWxEVyxDQW1EWjs7O0FBQ0EsUUFBSSxDQUFDLEtBQUt6RixTQUFMLENBQWU4RixJQUFwQixFQUEwQjtBQUN0QixhQUFPTixhQUFQO0FBQ0g7O0FBQ0QsUUFBSU8sSUFBSSxHQUFHLEtBQUsvRixTQUFMLENBQWU4RixJQUFmLENBQW9CMUIsS0FBcEIsQ0FBMEIsR0FBMUIsQ0FBWCxDQXZEWSxDQXdEWjs7QUFDQSxRQUFJNEIsUUFBUSxHQUFHLEVBQWY7O0FBQ0EsU0FBSyxJQUFJeEUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBR3VFLElBQUksQ0FBQ2xFLE1BQXpCLEVBQWlDTCxHQUFDLEVBQWxDLEVBQXNDO0FBQ2xDLFVBQUl5RSxLQUFLLEdBQUdGLElBQUksQ0FBQ3ZFLEdBQUQsQ0FBSixDQUFRNEMsS0FBUixDQUFjLEdBQWQsQ0FBWjs7QUFDQSxVQUFJckssSUFBSSxHQUFHa00sS0FBSyxDQUFDLENBQUQsQ0FBaEI7QUFDQSxVQUFJQyxPQUFPLEdBQUc1QixNQUFNLENBQUMyQixLQUFLLENBQUMsQ0FBRCxDQUFOLENBQXBCOztBQUNBLFVBQUlFLE9BQU0sR0FBRyxLQUFLQyxZQUFMLENBQWtCck0sSUFBbEIsRUFBd0JtTSxPQUF4QixDQUFiOztBQUNBRixNQUFBQSxRQUFRLGFBQU9BLFFBQVAsRUFBb0JHLE9BQXBCLENBQVI7QUFDSCxLQWhFVyxDQWlFWjs7O0FBQ0EsUUFBSUUsU0FBUyxHQUFHTCxRQUFRLENBQUNNLElBQVQsQ0FBYyxVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUNwQyxVQUFJRCxDQUFDLENBQUMvRixLQUFGLEdBQVVnRyxDQUFDLENBQUNoRyxLQUFoQixFQUF1QjtBQUNuQixlQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELFVBQUkrRixDQUFDLENBQUMvRixLQUFGLEdBQVVnRyxDQUFDLENBQUNoRyxLQUFoQixFQUF1QjtBQUNuQixlQUFPLENBQVA7QUFDSDs7QUFDRCxhQUFPLENBQVA7QUFDSCxLQVJlLENBQWhCLENBbEVZLENBMkVaOzs7QUFDQSxRQUFJMkYsTUFBTSxHQUFHLEVBQWI7QUFDQSxRQUFJTSxVQUFVLEdBQUcsS0FBS3pHLFNBQUwsQ0FBZTBHLFFBQWhDO0FBQ0EsUUFBSUMsTUFBTSxHQUFHLENBQWI7O0FBQ0EsU0FBSyxJQUFJbkYsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRzZFLFNBQVMsQ0FBQ3hFLE1BQTlCLEVBQXNDTCxHQUFDLEVBQXZDLEVBQTJDO0FBQ3ZDbUYsTUFBQUEsTUFBTSxJQUFJTixTQUFTLENBQUM3RSxHQUFELENBQVQsQ0FBYWhCLEtBQXZCOztBQUNBLFVBQUltRyxNQUFNLElBQUlGLFVBQWQsRUFBMEI7QUFDdEJOLFFBQUFBLE1BQU0sQ0FBQ1IsSUFBUCxDQUFZVSxTQUFTLENBQUM3RSxHQUFELENBQXJCO0FBQ0gsT0FGRCxNQUVPO0FBQ0g7QUFDSDtBQUNKOztBQUNEZ0UsSUFBQUEsYUFBYSxhQUFPQSxhQUFQLEVBQXlCVyxNQUF6QixDQUFiLENBdkZZLENBd0ZaOztBQUNBWCxJQUFBQSxhQUFhLEdBQUdBLGFBQWEsQ0FBQ2MsSUFBZCxDQUFtQixVQUFDQyxDQUFELEVBQUlDLENBQUosRUFBVTtBQUN6QyxVQUFJRCxDQUFDLENBQUMvQixLQUFGLEdBQVVnQyxDQUFDLENBQUNoQyxLQUFoQixFQUF1QjtBQUNuQixlQUFPLENBQUMsQ0FBUjtBQUNIOztBQUNELFVBQUkrQixDQUFDLENBQUMvQixLQUFGLEdBQVVnQyxDQUFDLENBQUNoQyxLQUFoQixFQUF1QjtBQUNuQixlQUFPLENBQVA7QUFDSDs7QUFDRCxhQUFPLENBQVA7QUFDSCxLQVJlLENBQWhCO0FBU0EsV0FBT2dCLGFBQVA7QUFDSCxHQTVsQkk7QUE2bEJMO0FBQ0FZLEVBQUFBLFlBOWxCSyx3QkE4bEJRck0sSUE5bEJSLEVBOGxCY3lHLEtBOWxCZCxFQThsQnFCO0FBQ3RCLFFBQUlFLEdBQUcsR0FBRyxFQUFWO0FBQ0EsUUFBSWlHLE1BQU0sR0FBRyxDQUFiOztBQUNBLFlBQVE1TSxJQUFSO0FBQ0ksV0FBSyxHQUFMO0FBQ0k7QUFDQSxZQUFJNEksT0FBTyxHQUFHLENBQWQ7O0FBQ0EsWUFBSSxLQUFLaEIsY0FBVCxFQUF5QjtBQUNyQnBGLFVBQUFBLE9BQU8sQ0FBQ0MsR0FBUixDQUFZLDZCQUFaO0FBQ0FtRyxVQUFBQSxPQUFPLEdBQUcsR0FBVjtBQUNIOztBQUNELGFBQUssSUFBSW5CLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcsRUFBcEIsRUFBd0JBLENBQUMsRUFBekIsRUFBNkI7QUFDekIsY0FBSXNCLElBQUksR0FBRyxRQUFYO0FBQ0EsY0FBSThELFFBQVEsR0FBRyxDQUFDLEVBQUQsRUFBSyxFQUFMLEVBQVMsRUFBVCxDQUFmO0FBQ0EsY0FBSUMsUUFBUSxHQUFHLENBQUMsRUFBRCxFQUFLLEVBQUwsRUFBUyxHQUFULENBQWY7QUFDQSxjQUFJbEcsR0FBRyxHQUFHLEtBQUtDLFdBQUwsQ0FBaUIsQ0FBakIsRUFBb0IsQ0FBcEIsQ0FBVjtBQUNBK0YsVUFBQUEsTUFBTSxJQUFJQyxRQUFRLENBQUNqRyxHQUFELENBQWxCOztBQUNBLGNBQUlnRyxNQUFNLEdBQUduRyxLQUFiLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBQ0QsY0FBSWtGLEdBQUcsR0FBRztBQUNOLG9CQUFRNUMsSUFBSSxHQUFHbkMsR0FEVDtBQUVOLHFCQUFTaUcsUUFBUSxDQUFDakcsR0FBRCxDQUFSLEdBQWdCZ0MsT0FGbkI7QUFHTixxQkFBU2tFLFFBQVEsQ0FBQ2xHLEdBQUQ7QUFIWCxXQUFWO0FBS0FELFVBQUFBLEdBQUcsQ0FBQ2lGLElBQUosQ0FBU0QsR0FBVDtBQUNIOztBQUNEOztBQUNKLFdBQUssR0FBTDtBQUNJO0FBQ0EsYUFBSyxJQUFJbEUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRyxFQUFwQixFQUF3QkEsR0FBQyxFQUF6QixFQUE2QjtBQUN6QixjQUFJc0IsS0FBSSxHQUFHLE9BQVg7QUFDQSxjQUFJOEQsU0FBUSxHQUFHLEVBQWYsQ0FGeUIsQ0FHekI7O0FBQ0EsY0FBSUUsT0FBTyxHQUFHdEcsS0FBSyxHQUFHbUcsTUFBdEI7O0FBQ0EsY0FBSUcsT0FBTyxJQUFJLEdBQWYsRUFBb0I7QUFDaEJGLFlBQUFBLFNBQVEsR0FBRyxDQUFDLEVBQUQsRUFBSyxHQUFMLEVBQVUsR0FBVixFQUFlLEdBQWYsRUFBb0IsR0FBcEIsQ0FBWDtBQUNILFdBRkQsTUFFTztBQUNILGdCQUFJRyxJQUFJLEdBQUcvRSxJQUFJLENBQUNnRixLQUFMLENBQVdGLE9BQU8sR0FBRyxFQUFyQixDQUFYOztBQUNBLGdCQUFJRyxHQUFHLEdBQUdGLElBQUksR0FBRyxDQUFQLEdBQVcsQ0FBWCxHQUFlQSxJQUF6Qjs7QUFDQSxpQkFBSyxJQUFJRyxDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHRCxHQUFwQixFQUF5QkMsQ0FBQyxFQUExQixFQUE4QjtBQUMxQk4sY0FBQUEsU0FBUSxDQUFDakIsSUFBVCxDQUFjLE1BQU0sSUFBSXVCLENBQVYsQ0FBZDtBQUNIO0FBQ0o7O0FBQ0QsY0FBSTFDLEtBQUssR0FBRztBQUNSLGtCQUFNLEVBREU7QUFFUixtQkFBTyxFQUZDO0FBR1IsbUJBQU8sRUFIQztBQUlSLG1CQUFPLEdBSkM7QUFLUixtQkFBTztBQUxDLFdBQVo7O0FBT0EsY0FBSTdELElBQUcsR0FBRyxLQUFLQyxXQUFMLENBQWlCLENBQWpCLEVBQW9CZ0csU0FBUSxDQUFDL0UsTUFBVCxHQUFrQixDQUF0QyxDQUFWOztBQUNBOEUsVUFBQUEsTUFBTSxJQUFJQyxTQUFRLENBQUNqRyxJQUFELENBQWxCOztBQUNBLGNBQUlnRyxNQUFNLEdBQUduRyxLQUFiLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBQ0QsY0FBSW9HLFNBQVEsQ0FBQy9FLE1BQVQsS0FBb0IsQ0FBeEIsRUFBMkI7QUFDdkI7QUFDSDs7QUFDRCxjQUFJNkQsS0FBRyxHQUFHO0FBQ04sb0JBQVE1QyxLQUFJLEdBQUduQyxJQURUO0FBRU4scUJBQVNpRyxTQUFRLENBQUNqRyxJQUFELENBRlg7QUFHTixxQkFBUzZELEtBQUssQ0FBQyxLQUFLb0MsU0FBUSxDQUFDakcsSUFBRCxDQUFkO0FBSFIsV0FBVjtBQUtBRCxVQUFBQSxHQUFHLENBQUNpRixJQUFKLENBQVNELEtBQVQ7QUFDSDs7QUFDRDs7QUFDSixXQUFLLEdBQUw7QUFDSTtBQUNBLGFBQUssSUFBSWxFLEdBQUMsR0FBRyxDQUFiLEVBQWdCQSxHQUFDLEdBQUcsRUFBcEIsRUFBd0JBLEdBQUMsRUFBekIsRUFBNkI7QUFDekIsY0FBSXNCLE1BQUksR0FBRyxPQUFYO0FBQ0E2RCxVQUFBQSxNQUFNLElBQUksR0FBVjs7QUFDQSxjQUFJQSxNQUFNLEdBQUduRyxLQUFiLEVBQW9CO0FBQ2hCO0FBQ0g7O0FBQ0QsY0FBSWtGLEtBQUcsR0FBRztBQUNOLG9CQUFRNUMsTUFERjtBQUVOLHFCQUFTLEdBRkg7QUFHTixxQkFBUztBQUhILFdBQVY7QUFLQXBDLFVBQUFBLEdBQUcsQ0FBQ2lGLElBQUosQ0FBU0QsS0FBVDtBQUNIOztBQUNEOztBQUNKLFdBQUssR0FBTDtBQUNJO0FBQ0EsYUFBSyxJQUFJbEUsR0FBQyxHQUFHLENBQWIsRUFBZ0JBLEdBQUMsR0FBRyxFQUFwQixFQUF3QkEsR0FBQyxFQUF6QixFQUE2QjtBQUN6QixjQUFJc0IsTUFBSSxHQUFHLFNBQVg7QUFDQSxjQUFJOEQsVUFBUSxHQUFHLElBQWY7O0FBQ0EsY0FBSXBHLEtBQUssR0FBR21HLE1BQVIsR0FBaUIsR0FBckIsRUFBMEI7QUFDdEJDLFlBQUFBLFVBQVEsR0FBRyxLQUFLaEcsV0FBTCxDQUFpQixFQUFqQixFQUFxQixHQUFyQixDQUFYO0FBQ0gsV0FGRCxNQUVPLElBQUlKLEtBQUssR0FBR21HLE1BQVIsR0FBaUIsRUFBckIsRUFBeUI7QUFDNUJDLFlBQUFBLFVBQVEsR0FBRyxLQUFLaEcsV0FBTCxDQUFpQixFQUFqQixFQUFxQkosS0FBSyxHQUFHbUcsTUFBN0IsQ0FBWDtBQUNILFdBRk0sTUFFQTtBQUNIQyxZQUFBQSxVQUFRLEdBQUcsRUFBWDtBQUNIOztBQUNERCxVQUFBQSxNQUFNLElBQUlDLFVBQVY7O0FBQ0EsY0FBSUQsTUFBTSxHQUFHbkcsS0FBYixFQUFvQjtBQUNoQjtBQUNIOztBQUNELGNBQUlrRixLQUFHLEdBQUc7QUFDTixvQkFBUTVDLE1BREY7QUFFTixvQkFBUThELFVBRkY7QUFHTixxQkFBUztBQUhILFdBQVY7QUFLQWxHLFVBQUFBLEdBQUcsQ0FBQ2lGLElBQUosQ0FBU0QsS0FBVDtBQUNIOztBQUNEO0FBdkdSOztBQXlHQSxXQUFPaEYsR0FBUDtBQUNILEdBM3NCSTs7QUE0c0JMO0FBQ0o7QUFDQTtBQUNJZ0QsRUFBQUEsUUEvc0JLLG9CQStzQkk5RSxJQS9zQkosRUErc0JVO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQSxRQUFJdUksT0FBTyxHQUFHLEtBQUs1SSxRQUFMLENBQWMyRixDQUFkLEdBQWtCLEtBQUszRixRQUFMLENBQWNiLE1BQWQsR0FBdUIsQ0FBdkQ7QUFDQSxRQUFJNkcsS0FBSyxHQUFHLENBQUMsS0FBS2hHLFFBQUwsQ0FBY2lHLEtBQWQsR0FBc0IsRUFBdkIsSUFBNkIsQ0FBN0IsSUFBa0MsQ0FBQ3hDLElBQUksQ0FBQ3lDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBMUQsQ0FBWjtBQUNBLFFBQUlDLEtBQUssR0FBRyxDQUFDLEtBQUtuRyxRQUFMLENBQWNiLE1BQWQsR0FBdUIsRUFBeEIsSUFBOEIsQ0FBOUIsSUFBbUMsQ0FBQ3NFLElBQUksQ0FBQ3lDLE1BQUwsS0FBZ0IsR0FBakIsSUFBd0IsQ0FBM0QsQ0FBWixDQVBXLENBUVg7O0FBQ0EsUUFBSUUsR0FBRyxHQUFHckwsRUFBRSxDQUFDMEssRUFBSCxDQUFNTyxLQUFOLEVBQWFHLEtBQWIsQ0FBVjtBQUNBLFFBQUkwQyxJQUFJLEdBQUcsSUFBSTlOLEVBQUUsQ0FBQytOLElBQVAsQ0FBWTFDLEdBQUcsQ0FBQ1YsQ0FBSixHQUFRckYsSUFBSSxDQUFDNEYsS0FBTCxHQUFhLENBQWpDLEVBQW9DRyxHQUFHLENBQUNULENBQUosR0FBUXRGLElBQUksQ0FBQ2xCLE1BQUwsR0FBYyxDQUExRCxFQUE2RGtCLElBQUksQ0FBQzRGLEtBQWxFLEVBQXlFNUYsSUFBSSxDQUFDbEIsTUFBOUUsQ0FBWDs7QUFDQSxRQUFJLEtBQUthLFFBQUwsQ0FBYzRELFFBQWQsQ0FBdUJOLE1BQXZCLElBQWlDLENBQXJDLEVBQXdDO0FBQ3BDLFVBQUl5RixNQUFNLEdBQUcsS0FBYjs7QUFDQSxXQUFLLElBQUk5RixDQUFDLEdBQUcsQ0FBYixFQUFnQkEsQ0FBQyxHQUFHLEtBQUtqRCxRQUFMLENBQWM0RCxRQUFkLENBQXVCTixNQUEzQyxFQUFtREwsQ0FBQyxFQUFwRCxFQUF3RDtBQUNwRCxZQUFJK0YsQ0FBQyxHQUFHLEtBQUtoSixRQUFMLENBQWM0RCxRQUFkLENBQXVCWCxDQUF2QixDQUFSO0FBQ0EsWUFBSWdHLFdBQVcsR0FBR0QsQ0FBQyxDQUFDRSxjQUFGLEVBQWxCOztBQUNBLFlBQUlELFdBQVcsQ0FBQ0UsVUFBWixDQUF1Qk4sSUFBdkIsQ0FBSixFQUFrQztBQUM5QkUsVUFBQUEsTUFBTSxHQUFHLElBQVQ7QUFDQTtBQUNIO0FBQ0o7O0FBQ0QsVUFBSUEsTUFBSixFQUFZO0FBQ1IsZUFBTyxLQUFLNUQsUUFBTCxDQUFjOUUsSUFBZCxDQUFQO0FBQ0gsT0FGRCxNQUVPO0FBQ0gsZUFBTytGLEdBQVA7QUFDSDtBQUNKLEtBZkQsTUFlTztBQUNILGFBQU9BLEdBQVA7QUFDSDtBQUNKLEdBNXVCSTs7QUE2dUJMO0FBQ0o7QUFDQTtBQUNBO0FBQ0E7QUFDSWdELEVBQUFBLFVBbHZCSyxzQkFrdkJNQyxHQWx2Qk4sRUFrdkJXO0FBQ1o7QUFDQSxTQUFLLElBQUlwRyxDQUFDLEdBQUcsS0FBS2pELFFBQUwsQ0FBYzRELFFBQWQsQ0FBdUJOLE1BQXZCLEdBQWdDLENBQTdDLEVBQWdETCxDQUFDLElBQUksQ0FBckQsRUFBd0RBLENBQUMsRUFBekQsRUFBNkQ7QUFDekQsVUFBSStGLENBQUMsR0FBRyxLQUFLaEosUUFBTCxDQUFjNEQsUUFBZCxDQUF1QlgsQ0FBdkIsQ0FBUjs7QUFDQSxVQUFJK0YsQ0FBQyxLQUFLSyxHQUFWLEVBQWU7QUFDWDtBQUNBLFlBQUlDLElBQUksR0FBR0QsR0FBRyxDQUFDRSxXQUFKLENBQWdCeE8sRUFBRSxDQUFDMEssRUFBSCxFQUFoQixDQUFYOztBQUNBLFlBQUlvRCxJQUFJLEdBQUcsSUFBSTlOLEVBQUUsQ0FBQytOLElBQVAsQ0FBWVEsSUFBSSxDQUFDNUQsQ0FBTCxHQUFTLEdBQXJCLEVBQTBCNEQsSUFBSSxDQUFDM0QsQ0FBTCxHQUFTLEdBQW5DLEVBQXdDLEdBQXhDLEVBQTZDLEdBQTdDLENBQVg7QUFDQSxZQUFJUyxHQUFHLEdBQUc0QyxDQUFDLENBQUNPLFdBQUYsQ0FBY3hPLEVBQUUsQ0FBQzBLLEVBQUgsRUFBZCxDQUFWOztBQUNBLFlBQUlvRCxJQUFJLENBQUNXLFFBQUwsQ0FBY3BELEdBQWQsQ0FBSixFQUF3QjtBQUNwQjRDLFVBQUFBLENBQUMsQ0FBQ1MsZ0JBQUY7QUFDQVQsVUFBQUEsQ0FBQyxDQUFDVSxPQUFGO0FBQ0FWLFVBQUFBLENBQUMsR0FBRyxJQUFKO0FBQ0g7QUFDSjtBQUNKO0FBQ0osR0Fsd0JJOztBQW13Qkw7QUFDSjtBQUNBO0FBQ0kzRyxFQUFBQSxXQXR3QkssdUJBc3dCTzJHLENBdHdCUCxFQXN3QlVXLENBdHdCVixFQXN3QmE7QUFDZEEsSUFBQUEsQ0FBQyxJQUFJLENBQUw7QUFDQSxRQUFJM0IsQ0FBQyxHQUFHMkIsQ0FBQyxHQUFHWCxDQUFaO0FBQ0EsUUFBSTlGLEdBQUcsR0FBR08sSUFBSSxDQUFDeUMsTUFBTCxLQUFnQjhCLENBQWhCLEdBQW9CZ0IsQ0FBOUI7QUFDQSxXQUFPckgsUUFBUSxDQUFDdUIsR0FBRCxDQUFmO0FBQ0gsR0Ezd0JJOztBQTZ3Qkw7QUFDSjtBQUNBO0FBQ0ljLEVBQUFBLFlBaHhCSywwQkFneEJVO0FBQ1gsU0FBSzVFLFNBQUwsR0FBaUIsQ0FBakI7QUFDQSxTQUFLSCxJQUFMLENBQVVFLE1BQVYsR0FBbUIsS0FBS0QsVUFBeEIsQ0FGVyxDQUdYOztBQUNBLFNBQUsvRCxLQUFMLEdBQWEsQ0FBYjtBQUNBLFNBQUs4RCxJQUFMLENBQVVwQyxjQUFWLENBQXlCLFFBQXpCLEVBQW1DMkMsWUFBbkMsQ0FBZ0R6RSxFQUFFLENBQUN5SCxNQUFuRCxFQUEyREMsV0FBM0QsR0FBeUUsS0FBS3hHLFVBQUwsQ0FBZ0IsQ0FBaEIsQ0FBekU7QUFDSCxHQXR4Qkk7O0FBd3hCTDtBQUNKO0FBQ0E7QUFDSTZILEVBQUFBLE1BM3hCSyxrQkEyeEJFOEYsS0EzeEJGLEVBMnhCUztBQUNWLFNBQUtDLE9BQUwsQ0FBYUQsS0FBYjtBQUNBLFNBQUtFLFFBQUwsQ0FBY0YsS0FBZDtBQUNBLFNBQUtHLFVBQUwsQ0FBZ0JILEtBQWhCLEVBSFUsQ0FJVjs7QUFDQSxRQUFJLEtBQUs1SixRQUFMLENBQWM0RCxRQUFkLENBQXVCTixNQUF2QixLQUFrQyxDQUF0QyxFQUF5QztBQUNyQztBQUNBO0FBQ0EsV0FBS3FCLFFBQUw7QUFDSDs7QUFDRCxRQUFJLEtBQUtMLElBQUwsQ0FBVXpILGNBQVYsQ0FBeUIsTUFBekIsQ0FBSixFQUFzQztBQUNsQyxVQUFJMEksSUFBSSxHQUFHLEtBQUtqQixJQUFMLENBQVV6SCxjQUFWLENBQXlCLE1BQXpCLENBQVg7QUFDQTBJLE1BQUFBLElBQUksQ0FBQ2tFLGdCQUFMO0FBQ0FsRSxNQUFBQSxJQUFJLENBQUNtRSxPQUFMO0FBQ0FuRSxNQUFBQSxJQUFJLEdBQUcsSUFBUDtBQUNIO0FBQ0osR0EzeUJJO0FBNHlCTDtBQUNBL0csRUFBQUEsZUE3eUJLLDZCQTZ5QmE7QUFDZCxRQUFJd0wsTUFBTSxHQUFHLEtBQUtqSyxRQUFMLENBQWNsRCxjQUFkLENBQTZCLFFBQTdCLENBQWI7QUFDQW1OLElBQUFBLE1BQU0sQ0FBQ2xOLE1BQVAsR0FBZ0IsSUFBaEI7O0FBQ0EsUUFBSSxLQUFLa0UsVUFBTCxJQUFtQixDQUF2QixFQUEwQjtBQUN0QixXQUFLQSxVQUFMLEdBQWtCLENBQWxCO0FBQ0g7O0FBQ0QsU0FBSyxJQUFJaUMsQ0FBQyxHQUFHLENBQWIsRUFBZ0JBLENBQUMsR0FBRyxDQUFwQixFQUF1QkEsQ0FBQyxFQUF4QixFQUE0QjtBQUN4QixVQUFJc0MsSUFBSSxHQUFHeUUsTUFBTSxDQUFDcEcsUUFBUCxDQUFnQlgsQ0FBaEIsQ0FBWDs7QUFDQSxVQUFJQSxDQUFDLElBQUksS0FBS2pDLFVBQWQsRUFBMEI7QUFDdEJ1RSxRQUFBQSxJQUFJLENBQUN6SSxNQUFMLEdBQWMsSUFBZDtBQUNILE9BRkQsTUFFTztBQUNIeUksUUFBQUEsSUFBSSxDQUFDekksTUFBTCxHQUFjLEtBQWQ7QUFDSDtBQUNKO0FBQ0osR0EzekJJOztBQTR6Qkw7QUFDSjtBQUNBO0FBQ0krTSxFQUFBQSxPQS96QkssbUJBK3pCR0QsS0EvekJILEVBK3pCVTtBQUNYLFFBQUksQ0FBQ0EsS0FBSyxDQUFDLENBQUQsQ0FBVixFQUFlOztBQUNmLFFBQUlBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3JGLElBQVQsS0FBa0IsU0FBdEIsRUFBaUM7QUFDN0IsVUFBSXhHLElBQUksR0FBRzZMLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBU3ZFLEtBQXBCOztBQUNBLFVBQUk0RSxLQUFLLENBQUNsTSxJQUFELENBQVQsRUFBaUI7QUFDYixnQkFBUUEsSUFBUjtBQUNJLGVBQUssSUFBTDtBQUNJLGlCQUFLaUQsVUFBTDtBQUNBLGlCQUFLeEMsZUFBTDtBQUNBLGlCQUFLMEwsV0FBTCxDQUFpQixDQUFqQjtBQUNBOztBQUNKLGVBQUssTUFBTDtBQUNJLGlCQUFLQSxXQUFMLENBQWlCLENBQWpCO0FBQ0EsaUJBQUt4SSxZQUFMLElBQXFCLENBQXJCO0FBQ0E7O0FBQ0osZUFBSyxNQUFMO0FBQ0ksaUJBQUt3SSxXQUFMLENBQWlCLENBQWpCO0FBQ0EsaUJBQUt4SSxZQUFMLElBQXFCLENBQXJCO0FBQ0E7O0FBQ0osZUFBSyxJQUFMO0FBQ0ksaUJBQUt3SSxXQUFMLENBQWlCLENBQWpCO0FBQ0E7QUFoQlI7QUFrQkgsT0FuQkQsTUFtQk87QUFDSDtBQUNBLGFBQUt4SyxLQUFMLENBQVdzQyxNQUFYLEdBQW9CTCxRQUFRLENBQUMsS0FBS2pDLEtBQUwsQ0FBV3NDLE1BQVosQ0FBUixJQUErQmpFLElBQUksSUFBSSxDQUF2QyxDQUFwQjtBQUNBLGFBQUtzQixRQUFMLElBQWtCdEIsSUFBSSxJQUFJLENBQTFCO0FBQ0EsYUFBS29NLE9BQUwsQ0FBYSxPQUFiLEVBQXNCcE0sSUFBdEI7QUFDSDs7QUFDRCxVQUFJaEQsRUFBRSxDQUFDbUQsRUFBSCxDQUFNa00sU0FBVixFQUFxQjtBQUNqQnJQLFFBQUFBLEVBQUUsQ0FBQ3NQLFdBQUgsQ0FBZUMsSUFBZixDQUFvQixLQUFLek8sYUFBekI7QUFDSDtBQUNKLEtBOUJELE1BOEJPLElBQUkrTixLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVNyRixJQUFULEtBQWtCLEtBQXRCLEVBQTZCO0FBQ2hDO0FBQ0EsVUFBSWdHLFlBQVksR0FBSTlHLElBQUksQ0FBQ2dGLEtBQUwsQ0FBVyxLQUFLcEcsV0FBTCxDQUFpQixHQUFqQixFQUFzQixHQUF0QixDQUFYLENBQUQsR0FBMkMsR0FBOUQ7QUFDQSxXQUFLWCxZQUFMLElBQXFCNkksWUFBckI7QUFDQSxXQUFLSixPQUFMLENBQWEsS0FBYixFQUFvQkksWUFBcEI7O0FBQ0EsVUFBSXhQLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTWtNLFNBQVYsRUFBcUI7QUFDakJyUCxRQUFBQSxFQUFFLENBQUNzUCxXQUFILENBQWVDLElBQWYsQ0FBb0IsS0FBS3pPLGFBQXpCO0FBQ0g7QUFDSjtBQUNKLEdBeDJCSTtBQXkyQkxxTyxFQUFBQSxXQXoyQkssdUJBeTJCTzFPLElBejJCUCxFQXkyQmE7QUFDZDtBQUNBLFFBQUlnUCxPQUFPLEdBQUcsS0FBS3pLLFFBQUwsQ0FBY2xELGNBQWQsQ0FBNkIsU0FBN0IsQ0FBZDtBQUNBMk4sSUFBQUEsT0FBTyxDQUFDMU4sTUFBUixHQUFpQixJQUFqQjtBQUNBME4sSUFBQUEsT0FBTyxDQUFDaEwsWUFBUixDQUFxQnpFLEVBQUUsQ0FBQ3lILE1BQXhCLEVBQWdDQyxXQUFoQyxHQUE4QyxLQUFLM0csZ0JBQUwsQ0FBc0JOLElBQXRCLENBQTlDO0FBQ0FnUCxJQUFBQSxPQUFPLENBQUNDLGNBQVI7QUFDQTFQLElBQUFBLEVBQUUsQ0FBQzBMLEtBQUgsQ0FBUytELE9BQVQsRUFBa0I5RCxFQUFsQixDQUFxQixDQUFyQixFQUF3QjtBQUFFZixNQUFBQSxDQUFDLEVBQUU2RSxPQUFPLENBQUM3RSxDQUFSLEdBQVksR0FBakI7QUFBc0IrRSxNQUFBQSxPQUFPLEVBQUU7QUFBL0IsS0FBeEIsRUFBNEQxRCxJQUE1RCxDQUFpRSxZQUFNO0FBQ25Fd0QsTUFBQUEsT0FBTyxDQUFDRSxPQUFSLEdBQWtCLEdBQWxCO0FBQ0FGLE1BQUFBLE9BQU8sQ0FBQzdFLENBQVIsSUFBYSxHQUFiO0FBQ0E2RSxNQUFBQSxPQUFPLENBQUMxTixNQUFSLEdBQWlCLEtBQWpCO0FBQ0gsS0FKRCxFQUlHNkosS0FKSDtBQUtILEdBcDNCSTs7QUFxM0JMO0FBQ0o7QUFDQTtBQUNJb0QsRUFBQUEsVUF4M0JLLHNCQXczQk1ILEtBeDNCTixFQXczQmE7QUFDZEEsSUFBQUEsS0FBSyxDQUFDeEosT0FBTixDQUFjLFVBQUFDLElBQUksRUFBSTtBQUNsQixVQUFJQSxJQUFKLEVBQVU7QUFDTkEsUUFBQUEsSUFBSSxDQUFDcUosT0FBTDtBQUNBckosUUFBQUEsSUFBSSxHQUFHLElBQVA7QUFDSDtBQUNKLEtBTEQ7QUFNSCxHQS8zQkk7O0FBZzRCTDtBQUNKO0FBQ0E7QUFDSXlKLEVBQUFBLFFBbjRCSyxvQkFtNEJJRixLQW40QkosRUFtNEJXO0FBQ1osUUFBSSxDQUFDQSxLQUFLLENBQUMsQ0FBRCxDQUFWLEVBQWU7QUFDZixRQUFJLENBQUNBLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzNILEtBQWQsRUFBcUIsT0FGVCxDQUdaOztBQUNBLFNBQUt2QyxLQUFMLENBQVdzQyxNQUFYLEdBQW9CTCxRQUFRLENBQUMsS0FBS2pDLEtBQUwsQ0FBV3NDLE1BQVosQ0FBUixJQUErQjRILEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzNILEtBQVQsSUFBa0IsQ0FBakQsQ0FBcEI7QUFDQSxTQUFLNUMsUUFBTCxJQUFrQnVLLEtBQUssQ0FBQyxDQUFELENBQUwsQ0FBUzNILEtBQVQsSUFBa0IsQ0FBcEMsQ0FMWSxDQU1aOztBQUNBLFFBQUlsSCxFQUFFLENBQUNtRCxFQUFILENBQU1rTSxTQUFWLEVBQXFCO0FBQ2pCclAsTUFBQUEsRUFBRSxDQUFDc1AsV0FBSCxDQUFlQyxJQUFmLENBQW9CLEtBQUt6TyxhQUF6QjtBQUNILEtBVFcsQ0FVWjs7O0FBQ0EsU0FBS3NPLE9BQUwsQ0FBYSxPQUFiLEVBQXNCUCxLQUFLLENBQUMsQ0FBRCxDQUFMLENBQVMzSCxLQUEvQjtBQUNILEdBLzRCSTtBQWc1Qkw7QUFDQWtJLEVBQUFBLE9BajVCSyxtQkFpNUJHM08sSUFqNUJILEVBaTVCU3lHLEtBajVCVCxFQWk1QmdCO0FBQ2pCLFFBQUkwSSxHQUFHLEdBQUcsSUFBVjs7QUFDQSxRQUFJblAsSUFBSSxLQUFLLE9BQWIsRUFBc0I7QUFDbEJtUCxNQUFBQSxHQUFHLEdBQUcsS0FBS2pMLEtBQUwsQ0FBVzRFLElBQVgsQ0FBZ0JjLE1BQWhCLENBQXVCdkksY0FBdkIsQ0FBc0MsVUFBdEMsQ0FBTjtBQUNILEtBRkQsTUFFTyxJQUFJckIsSUFBSSxLQUFLLEtBQWIsRUFBb0I7QUFDdkJtUCxNQUFBQSxHQUFHLEdBQUcsS0FBS2pMLEtBQUwsQ0FBVzRFLElBQVgsQ0FBZ0JjLE1BQWhCLENBQXVCdkksY0FBdkIsQ0FBc0MsUUFBdEMsQ0FBTjtBQUNIOztBQUNEOE4sSUFBQUEsR0FBRyxDQUFDbkwsWUFBSixDQUFpQnpFLEVBQUUsQ0FBQzRFLEtBQXBCLEVBQTJCcUMsTUFBM0IsR0FBb0MsTUFBTUMsS0FBMUM7QUFDQTBJLElBQUFBLEdBQUcsQ0FBQ0YsY0FBSjtBQUNBRSxJQUFBQSxHQUFHLENBQUNELE9BQUosR0FBYyxDQUFkO0FBQ0FDLElBQUFBLEdBQUcsQ0FBQ2hGLENBQUosR0FBUSxDQUFDLEdBQVQ7QUFDQTVLLElBQUFBLEVBQUUsQ0FBQzBMLEtBQUgsQ0FBU2tFLEdBQVQsRUFBY2pFLEVBQWQsQ0FBaUIsR0FBakIsRUFBc0I7QUFBRWdFLE1BQUFBLE9BQU8sRUFBRTtBQUFYLEtBQXRCLEVBQXdDaEUsRUFBeEMsQ0FBMkMsQ0FBM0MsRUFBOEM7QUFBRWYsTUFBQUEsQ0FBQyxFQUFFO0FBQUwsS0FBOUMsRUFBeURlLEVBQXpELENBQTRELEdBQTVELEVBQWlFO0FBQUVnRSxNQUFBQSxPQUFPLEVBQUU7QUFBWCxLQUFqRSxFQUFpRi9ELEtBQWpGO0FBQ0gsR0E3NUJJOztBQTg1Qkw7QUFDSjtBQUNBO0FBQ0lpRSxFQUFBQSxRQWo2Qkssc0JBaTZCTTtBQUFBOztBQUNQO0FBQ0E3UCxJQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNtRSxVQUFUO0FBQ0EsU0FBS3JCLElBQUwsQ0FBVTFELE1BQVYsR0FBbUIsSUFBbkIsQ0FITyxDQUlQOztBQUNBLFFBQUkrTixJQUFJLEdBQUcsS0FBS3JLLElBQUwsQ0FBVTNELGNBQVYsQ0FBeUIsTUFBekIsQ0FBWDtBQUNBLFFBQUlpTyxPQUFPLEdBQUcsS0FBS3RLLElBQUwsQ0FBVTNELGNBQVYsQ0FBeUIsU0FBekIsQ0FBZDtBQUNBZ08sSUFBQUEsSUFBSSxDQUFDL04sTUFBTCxHQUFjLEtBQWQ7QUFDQWdPLElBQUFBLE9BQU8sQ0FBQ2hPLE1BQVIsR0FBaUIsS0FBakI7O0FBQ0EsUUFBRy9CLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTUMsU0FBTixDQUFnQk0sS0FBaEIsSUFBdUIsQ0FBMUIsRUFBNEI7QUFDeEIxRCxNQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNnQixHQUFULENBQWEsU0FBTzNELEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTUMsU0FBTixDQUFnQk0sS0FBcEMsRUFBMEMsSUFBMUM7QUFDSDs7QUFDRCxRQUFJLEtBQUsrRixPQUFMLEtBQWlCLENBQXJCLEVBQXdCO0FBQ3BCc0csTUFBQUEsT0FBTyxDQUFDaE8sTUFBUixHQUFpQixJQUFqQixDQURvQixDQUVwQjs7QUFDQS9CLE1BQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU2dCLEdBQVQsQ0FBYSxTQUFiLEVBQXVCO0FBQ25CcU0sUUFBQUEsU0FBUyxFQUFDaFEsRUFBRSxDQUFDbUQsRUFBSCxDQUFNQyxTQUFOLENBQWdCTSxLQURQO0FBRW5CdU0sUUFBQUEsWUFBWSxFQUFDO0FBRk0sT0FBdkIsRUFIb0IsQ0FPcEI7O0FBQ0EsVUFBSUMsR0FBRyxHQUFHSCxPQUFPLENBQUNqTyxjQUFSLENBQXVCLEtBQXZCLEVBQThCMkMsWUFBOUIsQ0FBMkN6RSxFQUFFLENBQUM0RSxLQUE5QyxDQUFWLENBUm9CLENBU3BCOztBQUNBNUUsTUFBQUEsRUFBRSxDQUFDMkMsS0FBSCxDQUFTQyxXQUFULENBQXFCLHdCQUFyQixFQUErQyxLQUEvQyxFQUFzRGlGLFFBQXRELEVBQWdFaEYsSUFBaEUsQ0FBcUUsVUFBQ0MsR0FBRCxFQUFTO0FBQzFFLFlBQUkrTCxLQUFLLEdBQUcvTCxHQUFHLENBQUNPLElBQUosQ0FBU3dMLEtBQXJCO0FBQ0EsWUFBSXZKLElBQUksR0FBRyxJQUFYOztBQUNBLGFBQUssSUFBSTRDLENBQUMsR0FBRyxDQUFiLEVBQWdCQSxDQUFDLEdBQUcyRyxLQUFLLENBQUN0RyxNQUExQixFQUFrQ0wsQ0FBQyxFQUFuQyxFQUF1QztBQUNuQyxjQUFJLENBQUMyRyxLQUFLLENBQUMzRyxDQUFELENBQUwsQ0FBU2lJLE1BQWQsRUFBc0I7QUFDbEI7QUFDQTdLLFlBQUFBLElBQUksR0FBR3VKLEtBQUssQ0FBQzNHLENBQUQsQ0FBWjtBQUNBO0FBQ0g7QUFDSixTQVR5RSxDQVUxRTtBQUNBO0FBQ0E7OztBQUNBZ0ksUUFBQUEsR0FBRyxDQUFDakosTUFBSixHQUFhLEVBQWI7O0FBQ0EsWUFBSTNCLElBQUksQ0FBQzhLLGVBQUwsR0FBdUI5SyxJQUFJLENBQUMrSyxlQUFoQyxFQUFpRDtBQUM3QztBQUNBSCxVQUFBQSxHQUFHLENBQUNqSixNQUFKLG9CQUFrQjNCLElBQUksQ0FBQytLLGVBQXZCO0FBQ0gsU0FIRCxNQUdPO0FBQ0g7QUFDQSxjQUFJL0ssSUFBSSxDQUFDZ0wsWUFBTCxHQUFvQmhMLElBQUksQ0FBQ2lMLFlBQTdCLEVBQTJDO0FBQ3ZDTCxZQUFBQSxHQUFHLENBQUNqSixNQUFKO0FBQ0gsV0FGRCxNQUVPO0FBQ0gsZ0JBQUkzQixJQUFJLENBQUNrTCxPQUFMLEdBQWVsTCxJQUFJLENBQUNtTCxPQUF4QixFQUFpQztBQUM3QlAsY0FBQUEsR0FBRyxDQUFDakosTUFBSixxQkFBa0IzQixJQUFJLENBQUNtTCxPQUFMLEdBQWVuTCxJQUFJLENBQUNrTCxPQUF0QztBQUNIO0FBQ0o7QUFDSjtBQUNKLE9BM0JEO0FBNEJBLFVBQUlFLEtBQUssR0FBR1gsT0FBTyxDQUFDak8sY0FBUixDQUF1QixPQUF2QixFQUFnQzJDLFlBQWhDLENBQTZDekUsRUFBRSxDQUFDNEUsS0FBaEQsQ0FBWjtBQUNBOEwsTUFBQUEsS0FBSyxDQUFDekosTUFBTixpQ0FBdUIsS0FBS1IsT0FBNUI7O0FBQ0EsVUFBSXpHLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTUMsU0FBTixDQUFnQnVOLFNBQXBCLEVBQStCO0FBQzNCRCxRQUFBQSxLQUFLLENBQUNuSCxJQUFOLENBQVd4SCxNQUFYLEdBQW9CLEtBQXBCO0FBQ0g7O0FBQ0QsVUFBSTZPLFVBQVUsR0FBR2IsT0FBTyxDQUFDak8sY0FBUixDQUF1QixRQUF2QixFQUFpQ0EsY0FBakMsQ0FBZ0QsWUFBaEQsRUFBOEQyQyxZQUE5RCxDQUEyRXpFLEVBQUUsQ0FBQzRFLEtBQTlFLENBQWpCOztBQUNBLFVBQUksS0FBSytCLFlBQVQsRUFBdUI7QUFDbkJpSyxRQUFBQSxVQUFVLENBQUNySCxJQUFYLENBQWdCYyxNQUFoQixDQUF1QnRJLE1BQXZCLEdBQWdDLElBQWhDO0FBQ0E2TyxRQUFBQSxVQUFVLENBQUMzSixNQUFYLFNBQXdCLEtBQUtOLFlBQTdCO0FBQ0gsT0FIRCxNQUdPO0FBQ0hpSyxRQUFBQSxVQUFVLENBQUNySCxJQUFYLENBQWdCYyxNQUFoQixDQUF1QnRJLE1BQXZCLEdBQWdDLEtBQWhDO0FBQ0gsT0FqRG1CLENBa0RwQjtBQUNBOzs7QUFDQSxVQUFJOEYsUUFBUSxHQUFHO0FBQ1gsZ0JBQVEsS0FBSzVCLFVBQUwsR0FBa0IsQ0FEZjtBQUNpQjtBQUM1QixrQkFBVSxLQUFLQyxZQUZKO0FBRWlCO0FBQzVCLGlCQUFTLEtBQUs1QixRQUhIO0FBR1k7QUFDdkIsY0FBTSxJQUFJdU0sSUFBSixHQUFXQyxPQUFYLEVBSkssQ0FJZTs7QUFKZixPQUFmO0FBTUEsVUFBSXpOLElBQUksR0FBR3JELEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU29PLGNBQVQsQ0FBd0JsSixRQUF4QixDQUFYO0FBQ0E3SCxNQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1EUyxJQUFuRCxFQUF5RFIsSUFBekQsQ0FBOEQsVUFBQ0MsR0FBRCxFQUFTO0FBQ25FRyxRQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSx1QkFBWixFQUFxQ0osR0FBckM7QUFDSCxPQUZEO0FBR0gsS0E5REQsTUE4RE8sSUFBSSxLQUFLMkcsT0FBTCxLQUFpQixDQUFyQixFQUF3QjtBQUMzQnFHLE1BQUFBLElBQUksQ0FBQy9OLE1BQUwsR0FBYyxJQUFkO0FBQ0EvQixNQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNnQixHQUFULENBQWEsU0FBYixFQUF1QjtBQUNuQnFNLFFBQUFBLFNBQVMsRUFBQ2hRLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTUMsU0FBTixDQUFnQk0sS0FEUDtBQUVuQnVNLFFBQUFBLFlBQVksRUFBQztBQUZNLE9BQXZCLEVBRjJCLENBTTNCO0FBQ0g7O0FBQ0RqUSxJQUFBQSxFQUFFLENBQUMwTCxLQUFILENBQVMsS0FBS2pHLElBQWQsRUFBb0JrRyxFQUFwQixDQUF1QixHQUF2QixFQUE0QjtBQUFFcUYsTUFBQUEsS0FBSyxFQUFFO0FBQVQsS0FBNUIsRUFBMEMvRSxJQUExQyxDQUErQyxZQUFNO0FBQ2pELE1BQUEsTUFBSSxDQUFDakksY0FBTDtBQUNILEtBRkQsRUFFRzRILEtBRkg7QUFHSCxHQXQvQkk7O0FBdS9CTDtBQUNKO0FBQ0E7QUFDQTtBQUNJOUYsRUFBQUEsU0EzL0JLLHVCQTIvQk87QUFDUixRQUFJLEtBQUsyRCxPQUFULEVBQWtCO0FBQ2xCLFNBQUtoSCxlQUFMO0FBQ0gsR0E5L0JJOztBQWdnQ0w7QUFDSjtBQUNBO0FBQ0l3TyxFQUFBQSxNQW5nQ0ssb0JBbWdDSTtBQUNMO0FBQ0EsU0FBS3ZILEtBQUwsSUFBYyxLQUFLQyxVQUFMLENBQWdCLEtBQUtELEtBQXJCLENBQWQsQ0FGSyxDQUdMOztBQUNBMUosSUFBQUEsRUFBRSxDQUFDdUIsUUFBSCxDQUFZMlAsU0FBWixDQUFzQixNQUF0QjtBQUNILEdBeGdDSTs7QUEwZ0NMO0FBQ0o7QUFDQTtBQUNJQyxFQUFBQSxJQTdnQ0ssa0JBNmdDRTtBQUFBOztBQUVILFlBQVEsS0FBSzFILE9BQWI7QUFDSSxXQUFLLENBQUw7QUFDSTtBQUNBLGFBQUszRCxTQUFMO0FBQ0E7O0FBQ0osV0FBSyxDQUFMO0FBQ0k7QUFDQSxZQUFJK0IsUUFBUSxHQUFHLEVBQWY7QUFDQTdILFFBQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU0MsV0FBVCxDQUFxQix3QkFBckIsRUFBK0MsS0FBL0MsRUFBc0RpRixRQUF0RCxFQUFnRWhGLElBQWhFLENBQXFFLFVBQUNDLEdBQUQsRUFBUztBQUMxRTlDLFVBQUFBLEVBQUUsQ0FBQ21ELEVBQUgsQ0FBTWlPLFFBQU4sR0FBaUJ0TyxHQUFHLENBQUNPLElBQXJCLENBRDBFLENBRTFFOztBQUNBLGNBQUlyRCxFQUFFLENBQUNtRCxFQUFILENBQU1pTyxRQUFOLENBQWVDLEtBQWYsR0FBdUIsQ0FBM0IsRUFBOEI7QUFDMUJyUixZQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIscUJBQXJCLEVBQTRDLEtBQTVDLEVBQW1ELEVBQW5ELEVBQXVEQyxJQUF2RCxDQUE0RCxVQUFDQyxHQUFELEVBQVM7QUFDakU5QyxjQUFBQSxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sR0FBa0JOLEdBQUcsQ0FBQ08sSUFBdEI7O0FBQ0Esa0JBQUlyRCxFQUFFLENBQUNtRCxFQUFILENBQU1DLFNBQU4sQ0FBZ0JNLEtBQWhCLEdBQXdCLEVBQTVCLEVBQWdDO0FBQzVCLGdCQUFBLE1BQUksQ0FBQ3VOLE1BQUw7QUFDSCxlQUZELE1BRU87QUFDSDtBQUNBalIsZ0JBQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU1ksVUFBVDtBQUNBdkQsZ0JBQUFBLEVBQUUsQ0FBQ3NSLFlBQUgsR0FBa0IsSUFBSVQsSUFBSixHQUFXQyxPQUFYLEVBQWxCO0FBQ0E5USxnQkFBQUEsRUFBRSxDQUFDdUIsUUFBSCxDQUFZMlAsU0FBWixDQUFzQixPQUF0QjtBQUNIO0FBQ0osYUFWRDtBQVdILFdBWkQsTUFZTztBQUNIO0FBQ0EsWUFBQSxNQUFJLENBQUN4TSxhQUFMLENBQW1CM0MsTUFBbkIsR0FBNEIsSUFBNUI7QUFDSDtBQUNKLFNBbkJEO0FBb0JBOztBQUNKLFdBQUssQ0FBTDtBQUNJO0FBQ0EsYUFBS3dQLFFBQUw7QUFDQTtBQWhDUjs7QUFpQ0M7QUFDSixHQWpqQ0k7QUFrakNMO0FBQ0FDLEVBQUFBLFVBbmpDSyxzQkFtakNNdlAsQ0FuakNOLEVBbWpDUztBQUNWZ0IsSUFBQUEsT0FBTyxDQUFDQyxHQUFSLENBQVksaUJBQVo7QUFDQWxELElBQUFBLEVBQUUsQ0FBQzJDLEtBQUgsQ0FBU2lGLFVBQVQ7QUFDQSxRQUFJNkosSUFBSSxHQUFHelIsRUFBRSxDQUFDbUQsRUFBSCxDQUFNQyxTQUFOLENBQWdCdU4sU0FBaEIsR0FBNEIsQ0FBNUIsR0FBZ0MsS0FBS2xLLE9BQWhEO0FBQ0EsUUFBSW9CLFFBQVEsR0FBRztBQUNYLGtCQUFZakIsUUFBUSxDQUFDLENBQUM2SyxJQUFJLEdBQUcsS0FBSzlLLFlBQWIsSUFBNkIsR0FBOUIsQ0FEVDtBQUM0QztBQUN2RCxZQUFNM0csRUFBRSxDQUFDbUQsRUFBSCxDQUFNMkU7QUFGRCxLQUFmO0FBSUE5SCxJQUFBQSxFQUFFLENBQUNtRCxFQUFILENBQU11TyxPQUFOLENBQWNqTCxPQUFkLEdBQXdCb0IsUUFBeEI7QUFDQSxTQUFLNkIsS0FBTCxJQUFjLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsQ0FBZDtBQUNILEdBN2pDSTtBQThqQ0w7QUFDQWlJLEVBQUFBLGFBL2pDSyx5QkErakNTMVAsQ0EvakNULEVBK2pDWTtBQUNiakMsSUFBQUEsRUFBRSxDQUFDbUQsRUFBSCxDQUFNdU8sT0FBTixDQUFjRSxTQUFkLEdBQTBCLElBQTFCO0FBQ0E1UixJQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNpRixVQUFUO0FBQ0EsUUFBSWlLLE1BQU0sR0FBRzVQLENBQUMsQ0FBQzRQLE1BQWY7QUFDQSxTQUFLbkksS0FBTCxJQUFjLEtBQUtDLFVBQUwsQ0FBZ0IsS0FBS0QsS0FBckIsQ0FBZDtBQUNBbUksSUFBQUEsTUFBTSxDQUFDeEgsTUFBUCxDQUFjdEksTUFBZCxHQUF1QixLQUF2QjtBQUNILEdBcmtDSTtBQXNrQ0wrUCxFQUFBQSxVQXRrQ0ssc0JBc2tDTTdQLENBdGtDTixFQXNrQ1M7QUFDVixRQUFJNFAsTUFBTSxHQUFHNVAsQ0FBQyxDQUFDNFAsTUFBZjtBQUNBQSxJQUFBQSxNQUFNLENBQUN4SCxNQUFQLENBQWN0SSxNQUFkLEdBQXVCLEtBQXZCO0FBQ0gsR0F6a0NJOztBQTBrQ0w7QUFDSjtBQUNBO0FBQ0l3UCxFQUFBQSxRQTdrQ0ssc0JBNmtDTTtBQUNQdlIsSUFBQUEsRUFBRSxDQUFDc1IsWUFBSCxHQUFrQixJQUFJVCxJQUFKLEdBQVdDLE9BQVgsRUFBbEI7QUFDQTlRLElBQUFBLEVBQUUsQ0FBQ3VCLFFBQUgsQ0FBWTJQLFNBQVosQ0FBc0IsT0FBdEI7QUFDSCxHQWhsQ0k7QUFpbENMek8sRUFBQUEsZUFqbENLLDZCQWlsQ2E7QUFDZCxTQUFLc0IsU0FBTCxDQUFlaEMsTUFBZixHQUF3QixLQUF4QjtBQUNBLFNBQUt3QyxTQUFMLEdBQWlCLEtBQWpCO0FBQ0EsU0FBSzhCLFNBQUw7QUFDQSxTQUFLN0IsT0FBTCxDQUFhdU4sTUFBYixHQUFzQixLQUF0QjtBQUNILEdBdGxDSTtBQXVsQ0w7QUFDQS9OLEVBQUFBLGNBeGxDSyw0QkF3bENZO0FBQ2IsU0FBS08sU0FBTCxHQUFpQixJQUFqQjtBQUNBLFNBQUtvRixVQUFMLENBQWdCLEtBQUtELEtBQXJCO0FBQ0EsU0FBS2xGLE9BQUwsQ0FBYXVOLE1BQWIsR0FBc0IsSUFBdEI7QUFDSCxHQTVsQ0k7O0FBNmxDTDtBQUNKO0FBQ0E7QUFDQTtBQUNJbkksRUFBQUEsUUFqbUNLLHNCQWltQ007QUFDUDtBQUNBLFFBQUlvSSxDQUFDLEdBQUcsQ0FBUjs7QUFFQSxRQUFJcEwsUUFBUSxDQUFDLEtBQUtqQyxLQUFMLENBQVdzQyxNQUFaLENBQVIsSUFBK0JMLFFBQVEsQ0FBQyxLQUFLL0IsV0FBTCxDQUFpQm9DLE1BQWxCLENBQTNDLEVBQXNFO0FBQ2xFK0ssTUFBQUEsQ0FBQyxHQUFHLENBQUo7QUFDSCxLQUZELE1BRU87QUFDSDtBQUNBQSxNQUFBQSxDQUFDLEdBQUcsQ0FBSjtBQUNIOztBQUFBO0FBQ0QsU0FBS3ZJLE9BQUwsR0FBZXVJLENBQWY7QUFDQSxTQUFLbkMsUUFBTDtBQUNILEdBN21DSTtBQSttQ0w7QUFFQTtBQUNBb0MsRUFBQUEsTUFsbkNLLGtCQWtuQ0VDLEVBbG5DRixFQWtuQ007QUFDUCxRQUFJLEtBQUszTixTQUFULEVBQW9CO0FBQ2hCO0FBQ0g7O0FBQ0QsUUFBSSxLQUFLakIsU0FBTCxDQUFldkIsTUFBbkIsRUFBMkI7QUFDdkI7QUFDSCxLQU5NLENBT1A7OztBQUNBLFNBQUt5RCxRQUFMO0FBQ0EsU0FBS2dELFVBQUw7QUFDSCxHQTVuQ0k7QUE2bkNMO0FBQ0EySixFQUFBQSxPQTluQ0ssbUJBOG5DR2xRLENBOW5DSCxFQThuQ01DLEdBOW5DTixFQThuQ1c7QUFDWjtBQUNBLFlBQVFBLEdBQVI7QUFDSSxXQUFLLElBQUw7QUFDSTtBQUNBO0FBQ0EsWUFBSSxLQUFLZ0MsSUFBTCxDQUFVMkUsUUFBVixDQUFtQixDQUFuQixFQUFzQkEsUUFBdEIsQ0FBK0IsQ0FBL0IsS0FBcUMsS0FBSzVDLFVBQUwsR0FBa0IsQ0FBQyxDQUE1RCxFQUErRDtBQUMzRDtBQUNBLGNBQUlqRyxFQUFFLENBQUNtRCxFQUFILENBQU1pUCxTQUFWLEVBQXFCO0FBQ2pCLGdCQUFJcFMsRUFBRSxDQUFDc0MsR0FBSCxDQUFPK1AsUUFBWCxFQUFxQjtBQUNqQkMsY0FBQUEsR0FBRyxDQUFDQyxNQUFKLENBQVdDLE9BQVgsQ0FBbUIsR0FBbkI7QUFDSDtBQUNKLFdBTjBELENBTzNEOzs7QUFDQSxlQUFLdk0sVUFBTDtBQUNBLGVBQUt4QyxlQUFMLEdBVDJELENBVTNEOztBQUNBLGNBQUlnUCxLQUFLLEdBQUcsS0FBS3ZPLElBQUwsQ0FBVTJFLFFBQVYsQ0FBbUIsQ0FBbkIsRUFBc0JBLFFBQXRCLENBQStCLENBQS9CLENBQVo7O0FBQ0EsY0FBSXdDLEdBQUcsR0FBR29ILEtBQUssQ0FBQ0MscUJBQU4sQ0FBNEIxUyxFQUFFLENBQUMwSyxFQUFILENBQU0sQ0FBTixFQUFTLENBQVQsQ0FBNUIsQ0FBVixDQVoyRCxDQWEzRDs7O0FBQ0EsY0FBSUYsSUFBSSxHQUFHeEssRUFBRSxDQUFDa0ssV0FBSCxDQUFlLEtBQUtqSixJQUFwQixDQUFYO0FBQ0F1SixVQUFBQSxJQUFJLENBQUNoQixJQUFMLEdBQVksTUFBWjtBQUNBLGVBQUtELElBQUwsQ0FBVWtCLFFBQVYsQ0FBbUJELElBQW5CO0FBQ0EsY0FBSW1JLElBQUksR0FBRzNTLEVBQUUsQ0FBQzRTLElBQUgsQ0FBUUMsY0FBUixFQUFYO0FBQ0FySSxVQUFBQSxJQUFJLENBQUNELFdBQUwsQ0FBaUJ2SyxFQUFFLENBQUMwSyxFQUFILENBQU1XLEdBQUcsQ0FBQ1YsQ0FBSixHQUFRZ0ksSUFBSSxDQUFDekgsS0FBTCxHQUFhLENBQTNCLEVBQThCRyxHQUFHLENBQUNULENBQUosR0FBUStILElBQUksQ0FBQ3ZPLE1BQUwsR0FBYyxDQUFwRCxDQUFqQjtBQUNBb0csVUFBQUEsSUFBSSxDQUFDekksTUFBTCxHQUFjLElBQWQ7QUFDQXlJLFVBQUFBLElBQUksQ0FBQy9GLFlBQUwsQ0FBa0J6RSxFQUFFLENBQUM4UyxTQUFyQixFQUFnQ3ZELElBQWhDLENBQXFDLE1BQXJDOztBQUVBa0QsVUFBQUEsS0FBSyxDQUFDOUQsT0FBTjs7QUFDQThELFVBQUFBLEtBQUssR0FBRyxJQUFSO0FBQ0EsZUFBS3JTLEtBQUwsR0FBYSxFQUFiO0FBQ0EsY0FBSTJDLE9BQU8sR0FBRztBQUNWQyxZQUFBQSxJQUFJLEVBQUU7QUFESSxXQUFkO0FBR0FoRCxVQUFBQSxFQUFFLENBQUMyQyxLQUFILENBQVNDLFdBQVQsQ0FBcUIsb0JBQXJCLEVBQTJDLE1BQTNDLEVBQW1ERyxPQUFuRDtBQUNIOztBQUNEOztBQUNKO0FBQ0k7QUFwQ1I7QUFzQ0g7QUF0cUNJLENBQVQiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIi8v5byV5YWlIOW+l+WIhuetiemFjee9riDlpKrplb8g5omA5Lul5o2i5Liq5paH5Lu25YaZXG5pbXBvcnQgSXRlbUF0dHIgZnJvbSAnLi9Db25maWcnO1xuaW1wb3J0IExldmVsIGZyb20gJy4vTGV2ZWwnO1xuY2MuQ2xhc3Moe1xuICAgIGV4dGVuZHM6IGNjLkNvbXBvbmVudCxcblxuICAgIHByb3BlcnRpZXM6IHtcbiAgICAgICAgLy/pkqnlrZDpgJ/luqZcbiAgICAgICAgc3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDMsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDml4vovazpgJ/luqZcbiAgICAgICAgcm90YXRlU3BlZWQ6IHtcbiAgICAgICAgICAgIGRlZmF1bHQ6IDEsXG4gICAgICAgICAgICBkaXNwbGF5TmFtZTogJ+mSqeWtkOaXi+i9rOmAn+W6pidcbiAgICAgICAgfSxcbiAgICAgICAgLy/pkqnlrZDojIPlm7RcbiAgICAgICAgSG9va1JhbmdlOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiA3MCxcbiAgICAgICAgICAgIGRpc3BsYXlOYW1lOiAn6ZKp5a2Q5peL6L2s6KeS5bqm6IyD5Zu0J1xuICAgICAgICB9LFxuICAgICAgICAvL+aJgOacieeahHByZWZhYiDov5nnp43mlrnlvI/mmK/lkIzmraXnmoQg5Luj56CB5q+U6L6D5aW95YaZIOWwseaYr+mavuaLllxuICAgICAgICBQcmVmYWJzOiB7XG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgICAgIHR5cGU6IGNjLlByZWZhYlxuICAgICAgICB9LFxuICAgICAgICBJbml0VGltZToge1xuICAgICAgICAgICAgZGVmYXVsdDogMTAsXG4gICAgICAgIH0sXG4gICAgICAgIC8v6ZKp5a2Q6Kem56Kw5Yiw54mp5ZOB55qE5aOw6Z+zXG4gICAgICAgIENvbGxpc2lvbkF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvL+WKoOWIhueahOWjsOmfs1xuICAgICAgICBBZGRTY3JvZUF1ZGlvOiB7XG4gICAgICAgICAgICB0eXBlOiBjYy5BdWRpb0NsaXAsXG4gICAgICAgICAgICBkZWZhdWx0OiBudWxsLFxuICAgICAgICB9LFxuICAgICAgICAvLyDpgZPlhbfnmoTnurnnkIZcbiAgICAgICAgUHJvcFNwcml0ZUZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgQm9vbToge1xuICAgICAgICAgICAgdHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgZGVmYXVsdDogbnVsbCxcbiAgICAgICAgfSxcbiAgICAgICAgSG9va0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgSGVyb0ZyYW1lczoge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfSxcbiAgICAgICAgTG90dGVyeUZyYW1zZToge1xuICAgICAgICAgICAgdHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICBkZWZhdWx0OiBbXSxcbiAgICAgICAgfVxuICAgIH0sXG5cbiAgICAvLyBMSUZFLUNZQ0xFIENBTExCQUNLUzpcblxuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWIneWni+WMllxuICAgICAgICAgKi9cbiAgICAgICAgdGhpcy5pbml0KCk7XG5cbiAgICAgICAgLy/liqDovb3pppbpobXotYTmupBcbiAgICAgICAgY2MuZGlyZWN0b3IucHJlbG9hZFNjZW5lKCdJbmRleCcpO1xuICAgIH0sXG4gICAgc2V0R3VpZGUoKSB7XG4gICAgICAgIGxldCBpbmRleCA9IHRoaXMuZ3VpZGVJbmRleDtcbiAgICAgICAgaWYgKGluZGV4IDw9IDMpIHtcbiAgICAgICAgICAgIGxldCBndWlkZSA9IGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpXG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlX1wiICsgaW5kZXgpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgbmV4dEd1aWRlKGUsIG1zZykge1xuICAgICAgICBsZXQgZ3VpZGUgPSBjYy5maW5kKCdDYW52YXMvR3VpZGUnKTtcbiAgICAgICAgbGV0IGd1aWRlXzEgPSBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzFcIik7XG4gICAgICAgIGxldCBndWlkZV8yID0gZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpO1xuICAgICAgICBsZXQgZ3VpZGVfMyA9IGd1aWRlLmdldENoaWxkQnlOYW1lKFwiZ3VpZGVfM1wiKTtcbiAgICAgICAgZ3VpZGVfMS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgZ3VpZGVfMy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKG1zZyA9PT0gXCIyXCIpIHtcbiAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImd1aWRlXCIsIDIpO1xuICAgICAgICAgICAgZ3VpZGUuZ2V0Q2hpbGRCeU5hbWUoXCJndWlkZV8yXCIpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH0gZWxzZSBpZiAobXNnID09PSBcIjNcIikge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgMyk7XG4gICAgICAgICAgICBndWlkZS5nZXRDaGlsZEJ5TmFtZShcImd1aWRlXzNcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfSBlbHNlIGlmIChtc2cgPT09IFwiNFwiKSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlJlc3VtZUdhbWVMYXllcigpO1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZ3VpZGVcIiwgNCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgaGlkZU5lZWRMYXllcigpIHtcbiAgICAgICAgLy8g5aaC5p6c5byA5aeL5ri45oiPIOmCo+S5iOWIt+aWsOS4gOS4i+mBk+WFt+aVsOaNrlxuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgbGV0IHNlbmREdGEgPSB7XG4gICAgICAgICAgICAgICAgcHJvcDogNFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS3kvb/nlKjkvZPlipvmiJDlip9cIilcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgY2Muem0uTGV2ZWxJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvLyDlhbPpl63nlYzpnaLlvIDlp4vmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgLy8g54K55Ye75byA5aeL5ri45oiP5LmL5YmNIOmHjeaWsOWQjOatpeS4gOS4i+mBk+WFt+S/oeaBr1xuICAgICAgICAgICAgIC8vIOmakOiXj2Jhbm5lclxuICAgICAgICAgICAgY2MuVG9vbHMuaGlkZUJhbm5lcigpO1xuICAgICAgICAgICAgdGhpcy5oYW5kbGVEYW9qdSgpO1xuICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKCk7XG4gICAgICAgICAgICAvLyDlr7nlhbPljaHov5vooYzmiZPngrlcbiAgICAgICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZG90KFwic3RhcnRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlLG51bGwpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH0sXG4gICAgaGlkZUxvdHRlcnlMYXllcigpIHtcbiAgICAgICAgdGhpcy5Mb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBzaG93QmFja0xheWVyKCkge1xuICAgICAgICB0aGlzLkJhY2tMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Yid5aeL5YyWIOWQhOenjemcgOimgeeahOavlOWPmOmHj1xuICAgICAqL1xuICAgIGluaXQoKSB7XG4gICAgICAgIC8v6ZKp5a2Q55+/5belXG4gICAgICAgIHRoaXMuTWluZXIgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyJyk7XG4gICAgICAgIC8v55+/5bel5Yqo55S7IFxuICAgICAgICAvL+iOt+WPlumSqeWtkFxuICAgICAgICB0aGlzLkhvb2sgPSBjYy5maW5kKCdDYW52YXMvSGVhZGVyL01pbmVyL0hvb2snKTtcbiAgICAgICAgLy/ojrflj5bpkqnlrZDliJ3lp4vplb/luqZcbiAgICAgICAgdGhpcy5Ib29rSGVpZ2h0ID0gdGhpcy5Ib29rLmhlaWdodDtcbiAgICAgICAgLy/mlL7kuIvpkqnlrZDlvIDlhbMgMCDlgZzmraIgMSDlj5HlsIQgMuaLieWbnlxuICAgICAgICB0aGlzLkhvb2tTdGF0ZSA9IDA7XG4gICAgICAgIHRoaXMuY3VyU2NvcmUgPSAwO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICAvLyDliJ3lp4vljJbnn7/lt6XnmoTnsr7ngbXluKdcbiAgICAgICAgdGhpcy5NaW5lclNwID0gdGhpcy5NaW5lci5nZXRDb21wb25lbnQoXCJzcC5Ta2VsZXRvblwiKTtcbiAgICAgICAgLy8g55yL6KeG6aKR5b6X5L2T5Yqb55WM6Z2iXG4gICAgICAgIHRoaXMuc2VlVmlkZW9MYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9TZWVWaWRlb2xheWVyJylcbiAgICAgICAgLy/lvpfliIbntK/orqFcbiAgICAgICAgdGhpcy5TY29yZSA9IGNjLmZpbmQoJ0NhbnZhcy9TY29yZUFuZFRhcmdldC9TY29yZScpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIC8v6YCa5YWz55uu5qCH5YiG5pWwXG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUgPSBjYy5maW5kKCdDYW52YXMvU2NvcmVBbmRUYXJnZXQvVGFyZ2V0JykuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgLy/lgJLorqHml7ZcbiAgICAgICAgdGhpcy5UaW1lID0gY2MuZmluZCgnQ2FudmFzL0NoZWNrcG9pbnRBbmRUaW1lL1RpbWUnKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAvL+WFs+WNoeaVsFxuICAgICAgICB0aGlzLkNoZWNrcG9pbnQgPSBjYy5maW5kKCdDYW52YXMvQ2hlY2twb2ludEFuZFRpbWUvQ2hlY2twb2ludCcpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHRoaXMuTmVlZExheWVyID0gY2MuZmluZCgnQ2FudmFzL05lZWRMYXllcicpO1xuICAgICAgICB0aGlzLkJhY2tMYXllciA9IGNjLmZpbmQoJ0NhbnZhcy9CYWNrTGF5ZXInKTtcbiAgICAgICAgdGhpcy5Qcm9wTm9kZSA9IGNjLmZpbmQoJ0NhbnZhcy9IZWFkZXIvUHJvcCcpO1xuICAgICAgICB0aGlzLkxvdHRlcnlMYXllciA9IHRoaXMuTmVlZExheWVyLmdldENoaWxkQnlOYW1lKFwiTG90dGVyeUxheWVyXCIpO1xuICAgICAgICAvL+eJqeWTgeWMuuWfn1xuICAgICAgICB0aGlzLml0ZW1BcmVhID0gY2MuZmluZCgnQ2FudmFzL0l0ZW1BcmVhJyk7XG4gICAgICAgIC8v5byA5ZCv56Kw5pKeXG4gICAgICAgIHRoaXMubWFuYWdlciA9IGNjLmRpcmVjdG9yLmdldENvbGxpc2lvbk1hbmFnZXIoKTtcbiAgICAgICAgdGhpcy5tYW5hZ2VyLmVuYWJsZWQgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLm1hbmFnZXIuZW5hYmxlZERlYnVnRHJhdyA9IHRydWU7XG4gICAgICAgIC8vIG1hbmFnZXIuZW5hYmxlZERyYXdCb3VuZGluZ0JveCA9IHRydWU7XG5cbiAgICAgICAgLy/ph43nu4RwcmVmYWLmlbDnu4Qg5pa55L6/5p+l6K+iXG4gICAgICAgIHRoaXMuUHJlZmFiID0ge307XG4gICAgICAgIHRoaXMuUHJlZmFicy5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgdGhpcy5QcmVmYWJbaXRlbS5fbmFtZV0gPSBpdGVtO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL+WPkeWwhOmSqeWtkOaMiemSrlxuICAgICAgICBsZXQgZW1pdEhvb2sgPSBjYy5maW5kKCdDYW52YXMvZW1pdEhvb2tCdG4nKTtcbiAgICAgICAgLy/lvLnlh7rmoYZcbiAgICAgICAgdGhpcy5NYXNrID0gY2MuZmluZCgnQ2FudmFzL01hc2snKTtcbiAgICAgICAgLy/muLjmiI/nu5PmnZ/mjInpkq4g5YyF5ous6L+H5YWzL+e7k+adn+a4uOaIj1xuICAgICAgICB0aGlzLk1hc2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLkNsb3NlTWFzay5iaW5kKHRoaXMpKTtcbiAgICAgICAgZW1pdEhvb2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmVtaXRIb29rQnRuLmJpbmQodGhpcykpO1xuICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSAtMTtcbiAgICAgICAgdGhpcy5saXF1aWROdW1iZXIgPSAwO1xuICAgICAgICB0aGlzLmFkanVzQm9vbUxheW91dCgpO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIHRoaXMuUmVzZXRJbmZvKCk7XG4gICAgICAgIHRoaXMuU3RhcnRUaW1lKCk7XG4gICAgICAgIHRoaXMuU2V0TGV2ZWwoKTtcbiAgICAgICAgdGhpcy5DcmVhdGVUYXJnZXRTY29yZSgpO1xuICAgICAgICB0aGlzLkNyZWF0ZUl0ZW0oKTtcbiAgICAgICAgdGhpcy5yZWRQYWNrID0gdGhpcy5sZXZlbEluZm8ucmVkUGFjaztcbiAgICAgICAgdGhpcy5leHRhclJlZFBhY2sgPSAwO1xuICAgICAgICAvLyDmmK/lkKbmlrDmiYvlvJXlr7xcbiAgICAgICAgdGhpcy5ndWlkZUluZGV4ID0gcGFyc2VJbnQoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiZ3VpZGVcIikpO1xuICAgICAgICBpZiAodGhpcy5ndWlkZUluZGV4IDwgNCAmJiB0aGlzLmd1aWRlSW5kZXggPj0gMSkge1xuICAgICAgICAgICAgdGhpcy5ndWlkZSA9IHRydWU7XG4gICAgICAgICAgICAvLyDmnInmlrDmiYvlvJXlr7zmmoLlgZzmuLjmiI9cbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgICAgIGNjLmZpbmQoJ0NhbnZhcy9HdWlkZScpLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnNldEd1aWRlKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmd1aWRlID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLlBhdXNlR2FtZUxheWVyKCk7XG4gICAgICAgICAgICBjYy5maW5kKCdDYW52YXMvR3VpZGUnKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dCYW5uZXIoKTtcbiAgICAgICAgICAgIHRoaXMuTmVlZExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBsZXQgbmVlZFNjb3JlID0gdGhpcy5OZWVkTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJuZWVkU2NvcmVcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKTtcbiAgICAgICAgICAgIGxldCBuZWVkTGV2ZWwgPSB0aGlzLk5lZWRMYXllci5nZXRDaGlsZEJ5TmFtZShcIm5lZWRMZXZlbFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbmVlZFNjb3JlLnN0cmluZyA9IGDopoHmsYLliIbmlbDvvJoke3RoaXMubGV2ZWxJbmZvLnNjb3JlfWBcbiAgICAgICAgICAgIG5lZWRMZXZlbC5zdHJpbmcgPSBg56ysJHt0aGlzLmxldmVsSW5mby5pZH3lhbNgO1xuICAgICAgICAgICAgLy8g5oq95aWW6YCJ5YWz5Y2hXG4gICAgICAgICAgICAvLyDliY3nq6/pmo/mnLrkuIDkuKrpgZPlhbdcbiAgICAgICAgICAgIC8vIOeCuOW8ue+8mjEwIDEx5pe26ZKfIDEz6I2v5rC0XG4gICAgICAgICAgICBsZXQgYXJyID0gWzEwLCAxMSwgMTNdO1xuICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMik7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGFycltyZG1dO1xuICAgICAgICAgICAgdGhpcy5Mb3R0ZXJ5UHJvcCA9IHByb3A7XG4gICAgICAgICAgICBsZXQgaWNvbiA9IHRoaXMuTG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgIGlmIChwcm9wID09PSAxMCkge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+eCuOW8uVxuICAgICAgICAgICAgICAgIGljb24uc3ByaXRlRnJhbWUgPSB0aGlzLkxvdHRlcnlGcmFtc2VbMl1cbiAgICAgICAgICAgIH0gZWxzZSBpZiAocHJvcCA9PT0gMTEpIHtcbiAgICAgICAgICAgICAgICBpY29uLnNwcml0ZUZyYW1lID0gdGhpcy5Mb3R0ZXJ5RnJhbXNlWzBdXG4gICAgICAgICAgICB9IGVsc2UgaWYgKHByb3AgPT09IDEzKSB7XG4gICAgICAgICAgICAgICAgaWNvbi5zcHJpdGVGcmFtZSA9IHRoaXMuTG90dGVyeUZyYW1zZVsxXVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfSxcbiAgICBMb29rVmlkZW9HZXRBd2FyZCgpIHtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkLFxuICAgICAgICAgICAgXCJ3ZWFwb25cIjogdGhpcy5Mb3R0ZXJ5UHJvcFxuICAgICAgICB9XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9Mb3R0ZXJ5MlwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgLy8g54K45by577yaMTAgMTHml7bpkp8gMTPoja/msLRcbiAgICAgICAgICAgIHRoaXMuTG90dGVyeUF3YXJkID0gcmVzLmRhdGEuYXdhcmQ7XG4gICAgICAgICAgICB0aGlzLmhpZGVMb3R0ZXJ5TGF5ZXIoKTtcbiAgICAgICAgfSk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICBoYW5kbGVEYW9qdSgpIHtcbiAgICAgICAgLy8g6YGT5YW355qE5pWw6YeP5Li6XG4gICAgICAgIGxldCB3ZWFwb24gPSBjYy56bS5MZXZlbEluZm8ud2VhcG9uO1xuICAgICAgICAvLyBwcm9w57G75Z6LIDEwLueCuOW8uSAxMS7ml7bpkp8gMTIu55+z5YyW5omL5YaMIDEzLuiNr+awtCAxNC7kuInlj7bojYlcbiAgICAgICAgLy8g5aSE55CG6YGT5YW3IOmBk+WFt+WIhuWIq+S4uiDngrjlvLkgYm9vbU51bWJlciDml7bpkp8gY2xvY2tOdW1iZXIg55+z5YyW5omL5YaMIGhhbmRib29rTnVtYmVyIOiNr+awtCBsaXF1aWROdW1iZXIg5LiJ5Y+26I2JIGNsb3Zlck51bWJlclxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiMVwiOiBcIuS9k+WKm1wiLFxuICAgICAgICAgICAgXCIxMFwiOiBcIueCuOW8uVwiLFxuICAgICAgICAgICAgXCIxMVwiOiBcIuaXtumSn1wiLFxuICAgICAgICAgICAgXCIxMlwiOiBcIuefs+WMluaJi+WGjFwiLFxuICAgICAgICAgICAgXCIxM1wiOiBcIuiNr+awtFwiLFxuICAgICAgICAgICAgXCIxNFwiOiBcIuS4ieWPtuiNiVwiXG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB3ZWFwb24ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTApIHtcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/ngrjlvLlcbiAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXIgPSB3ZWFwb25baV0ubnVtIC0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8g5aaC5p6c5piv5YW25LuW54mp5ZOB6YKj5LmI55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5udW0pIHtcbiAgICAgICAgICAgICAgICAgICAgLy8g55u05o6l5L2/55SoXG4gICAgICAgICAgICAgICAgICAgIGxldCBzZW5kRHRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgcHJvcDogd2VhcG9uW2ldLnByb3BcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvUHJvcFwiLCBcIlBPU1RcIiwgc2VuZER0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0t5L2/55So5oiQ5YqfLVwiLCBkYXRhW3dlYXBvbltpXS5wcm9wXSlcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHdlYXBvbltpXS5wcm9wID09PSAxMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvY2tOdW1iZXIgPSB3ZWFwb25baV0ubnVtXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAod2VhcG9uW2ldLnByb3AgPT09IDEyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kYm9va051bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTMpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxpcXVpZE51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh3ZWFwb25baV0ucHJvcCA9PT0gMTQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3Zlck51bWJlciA9IHdlYXBvbltpXS5udW1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g6ZKp5a2Q5peL6L2sXG4gICAgICovXG4gICAgSG9va1JvVGF0ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG5cbiAgICAgICAgLy/pmZDliLbojIPlm7Qg5Y+q6IO95ZyoIDcwIOS4jiAtNzAg5LmL6Ze0XG4gICAgICAgIGlmICh0aGlzLkhvb2suYW5nbGUgPj0gNzApIHtcbiAgICAgICAgICAgIHRoaXMucm90YXRlU3BlZWQgPSAtdGhpcy5yb3RhdGVTcGVlZDtcbiAgICAgICAgfSBlbHNlIGlmICh0aGlzLkhvb2suYW5nbGUgPD0gLTcwKSB7XG4gICAgICAgICAgICB0aGlzLnJvdGF0ZVNwZWVkID0gTWF0aC5hYnModGhpcy5yb3RhdGVTcGVlZCk7XG4gICAgICAgIH07XG5cbiAgICAgICAgdGhpcy5Ib29rLmFuZ2xlICs9IHRoaXMucm90YXRlU3BlZWQ7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlj5HlsITpkqnlrZDmjInpkq7kuovku7ZcbiAgICAgKi9cbiAgICBlbWl0SG9va0J0bigpIHtcbiAgICAgICAgLy9UT0RPIOWBnOatoumSqeWtkOaXi+i9rFxuICAgICAgICAvL+aJk+W8gC/lhbPpl60g6ZKp5a2Q5byA5YWzIOayoeacieaLieWbnuS5i+WJjSDlvZPliY1wb3NpdGlvbiDvvIE9IOWIneWni+S9jee9ruaXtiDkuI3lhYHorrjmk43kvZxcbiAgICAgICAgaWYgKHRoaXMuSG9va1N0YXRlKSByZXR1cm47XG4gICAgICAgIC8vIOW9k+WJjeWPkeWwhOe7s+WtkFxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwiZmFuZ1wiLCB0cnVlKTtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAxO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiBAZGVzY3JpcHRpb24g5Y+R5bCE6ZKp5a2QXG4gICAgICovXG4gICAgZW1pdEhvb2soKSB7XG4gICAgICAgIHN3aXRjaCAodGhpcy5Ib29rU3RhdGUpIHtcbiAgICAgICAgICAgIGNhc2UgMTpcbiAgICAgICAgICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ICs9IHRoaXMuc3BlZWQ7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5oZWlnaHQgPD0gdGhpcy5Ib29rSGVpZ2h0KSB7XG5cbiAgICAgICAgICAgICAgICAgICAgLy/mo4DmtYvmmK/lkKbmi4nlm57nianlk4FcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlbkNvdW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5IYW5kbGUodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+WBnOatouaSreaUvuaLieWbnuWKqOeUu1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlM1wiLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5NaW5lclNwLmFkZEFuaW1hdGlvbigwLCBcImlkbGVcIiwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuTWluZXJTcC5zZXRBbmltYXRpb24oMCwgXCJpZGxlXCIsIHRydWUpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuU3RvcEhvb2tNb3ZlKCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5Ib29rLmhlaWdodCAtPSB0aGlzLnNwZWVkO1xuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH07XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmi4nlm57pkqnlrZBcbiAgICAgKi9cbiAgICBQdWxsQmFja0hvb2soKSB7XG4gICAgICAgIC8v5pKt5pS+5ouJ5Zue6ZKp5a2Q5Yqo55S7XG4gICAgICAgIC8vIOWwhumSqeWtkOeahOWbvueJh+i9rOWMllxuICAgICAgICB0aGlzLk1pbmVyU3Auc2V0QW5pbWF0aW9uKDAsIFwibGFcIiwgdHJ1ZSk7XG4gICAgICAgIHRoaXMuSG9va1N0YXRlID0gMjtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6K6+572u6ZKp5a2Q5ouJ5Zue55qE6YCf5bqmXG4gICAgICovXG4gICAgU2V0U3BlZWQob3RoZXIpIHtcbiAgICAgICAgLy8g5piv5ZCm5pyJ6I2v5rC05pWI5p6cIOWmguaenOaciemCo+S5iHNwZWVk6YCf5bqm5aKe5YqgMTAlXG4gICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXSA9IEl0ZW1BdHRyW290aGVyLm5vZGUubmFtZV0gfHwge307XG4gICAgICAgIGlmICh0aGlzLmxpcXVpZE51bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3oja/msLTmlYjmnpzpgJ/luqblop7liqAxMCVcIilcbiAgICAgICAgICAgIHByb21vdGUgPSAxLjFcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNwZWVkID0gSXRlbUF0dHJbb3RoZXIubm9kZS5uYW1lXS5zcGVlZCAqIHByb21vdGUgfHwgMTA7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOmHjee9ruaJgOacieWIhuaVsOS/oeaBr1xuICAgICAqL1xuICAgIFJlc2V0SW5mbygpIHtcbiAgICAgICAgLy90aGlzLnZpY3Rvcnkg5ri45oiP6IOc5Yip5aSx6LSl54q25oCBIDAgPSDmuLjmiI/kuK0gMSA9IOaIkOWKnyAyID0g5aSx6LSlXG4gICAgICAgIHRoaXMudmljdG9yeSA9XG4gICAgICAgICAgICB0aGlzLlNjb3JlLnN0cmluZyA9XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID1cbiAgICAgICAgICAgIHRoaXMuQ2hlY2twb2ludC5zdHJpbmcgPVxuICAgICAgICAgICAgdGhpcy5UYXJnZXRTY29yZS5zdHJpbmcgPSAwO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDlkK/liqjlgJLorqHml7ZcbiAgICAgKi9cbiAgICBTdGFydFRpbWUoKSB7XG4gICAgICAgIC8vIOaYr+WQpuWtmOWcqOaXtumSnyDlrZjlnKjml7bpkp8gdGhpcy5Jbml0VGltZSsxMOenklxuICAgICAgICBpZiAodGhpcy5jbG9ja051bWJlcikge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3kvb/nlKjml7bpkp/miJDlip8rMTBzXCIpXG4gICAgICAgICAgICB0aGlzLmNsb2NrTnVtYmVyID0gMDtcbiAgICAgICAgICAgIHRoaXMuSW5pdFRpbWUgKz0gMTA7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5UaW1lLnN0cmluZyA9IHRoaXMuSW5pdFRpbWU7XG4gICAgICAgIHRoaXMudGltZXIgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICB0aGlzLkluaXRUaW1lLS07XG4gICAgICAgICAgICB0aGlzLlRpbWUuc3RyaW5nID0gdGhpcy5Jbml0VGltZTtcbiAgICAgICAgICAgIGlmICh0aGlzLkluaXRUaW1lIDw9IDApIHtcbiAgICAgICAgICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNjaGVkdWxlKHRoaXMudGltZXIsIDEpXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOiuvue9ruWFs+WNoeaVsFxuICAgICAqL1xuICAgIFNldExldmVsKCkge1xuICAgICAgICB0aGlzLmxldmVsSW5mbyA9IExldmVsW1wibGV2ZWxcIiArIGNjLnptLkxldmVsSW5mby5zdGFnZV1cbiAgICAgICAgLy8gdGhpcy5sZXZlbEluZm8gPSBMZXZlbFtcImxldmVsMTVcIl1cbiAgICAgICAgdGhpcy5TY29yZS5zdHJpbmcgPSBjYy56bS5MZXZlbEluZm8uY3VycmVudF9zY29yZTtcbiAgICAgICAgdGhpcy5DaGVja3BvaW50LnN0cmluZyA9IGAke2NjLnptLkxldmVsSW5mby5zdGFnZX1gO1xuICAgIH0sXG5cbiAgICAvKipcbiAgICAgKiDnoa7lrprov4flhbPnm67moIfliIbmlbBcbiAgICAgKiDnm67moIfliIbmlbDmoLnmja7lhbPljaHlhbPmlbDnoa7lrpog6Zq+5bqm57Sv5Yqg546H5Li6XG4gICAgICogIOWfuuaVsCAxMDAwXG4gICAgICogIOavj+WFs+mAkuWinjUwMOWIhlxuICAgICAqIFxuICAgICAqIOacgOWkpyA1MDAw5YiGXG4gICAgICovXG4gICAgQ3JlYXRlVGFyZ2V0U2NvcmUoKSB7XG4gICAgICAgIHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nID0gdGhpcy5sZXZlbEluZm8uc2NvcmU7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOeUn+aIkOeJqeWTgSDpnIDopoHmoLnmja7nm67moIfliIbmnaXnlJ/miJAg55Sf5oiQ55qE5omA5pyJ54mp5ZOB5oC75YiG5b+F6aG75q+U55uu5qCH6L+H5YWz5YiG5pWw6auYMjAlXG4gICAgICog55Sf5oiQ55qE54mp5ZOB5pWw6YeP5ZyoIDEwLTMwXG4gICAgICovXG4gICAgQ3JlYXRlSXRlbSgpIHtcbiAgICAgICAgbGV0IG5ld0l0ZW1BcnIgPSB0aGlzLm5ld0NyZWF0ZUNhbGMoKTtcbiAgICAgICAgLy8g5YaZ5LiA5Liq566X5rOVIOagueaNruWIhuaVsOWFiOWwhmFyciDmjpLluo8g5oC75YiG5LiN6IO96LaF6L+H5pyA5aSn5YiG5pWwIOWmguaenOi2heS6hiDliJnku47lsI/lvIDlp4vlh4/lsJEg55u05Yiw5YiG5pWw5bCP5LqO5pyA5aSn5YiG5pWwXG4gICAgICAgIC8v55Sf5oiQ55u45bqU55qEUHJmYWJcbiAgICAgICAgbmV3SXRlbUFyci5mb3JFYWNoKGl0ZW0gPT4ge1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltpdGVtLm5hbWVdKTtcbiAgICAgICAgICAgIGxldCBYWSA9IHRoaXMucmFuZG9tWFkobm9kZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuaXRlbUFyZWE7XG4gICAgICAgICAgICBpZiAoaXRlbS5zY29yZSkge1xuICAgICAgICAgICAgICAgIG5vZGUuc2NvcmUgPSBpdGVtLnNjb3JlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGl0ZW0ucHJvcCkge1xuICAgICAgICAgICAgICAgIG5vZGUuZXh0cmEgPSBpdGVtLnByb3A7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKFhZKTtcbiAgICAgICAgICAgIGlmIChpdGVtLm5hbWUgPT09IFwiVG50XCIpIHtcbiAgICAgICAgICAgICAgICBsZXQgYm9vbSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuQm9vbSk7XG4gICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgIGJvb20ubmFtZSA9IFwidG50Qm9vbVwiO1xuICAgICAgICAgICAgICAgIGJvb20uc2V0UG9zaXRpb24oY2MudjIoWFkueCwgWFkueSAtIDIxOCkpO1xuICAgICAgICAgICAgICAgIG5vZGUuYm9vbSA9IGJvb207XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICAvLyB0b2Rv5YWI5LiN5Yib5bu66ICB6byg6K+V6K+VXG4gICAgICAgIGlmICh0aGlzLmxldmVsSW5mby5tb3VzZSkge1xuICAgICAgICAgICAgbGV0IGRhdGEgPSB0aGlzLmxldmVsSW5mby5tb3VzZS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyDmma7pgJrogIHpvKBcbiAgICAgICAgICAgIGxldCBtb3VzZU51bWJlciA9IE51bWJlcihkYXRhWzBdKTtcbiAgICAgICAgICAgIGlmIChtb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IG1vdXNlTnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLlByZWZhYltcIk1vdXNlXCJdKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRYID0gKHRoaXMuaXRlbUFyZWEud2lkdGggLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmFuZFkgPSAodGhpcy5pdGVtQXJlYS5oZWlnaHQgLSAzMCkgLyAyICogKChNYXRoLnJhbmRvbSgpIC0gMC41KSAqIDIpO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLml0ZW1BcmVhO1xuICAgICAgICAgICAgICAgICAgICBub2RlLnNjb3JlID0gNTA7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24ocG9zKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5tb3ZlTW91c2Uobm9kZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IERyaWxsTW91c2VOdW1iZXIgPSBOdW1iZXIoZGF0YVsxXSk7XG4gICAgICAgICAgICBpZiAoRHJpbGxNb3VzZU51bWJlciA+IDApIHtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IERyaWxsTW91c2VOdW1iZXI7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMuUHJlZmFiW1wiRHJpbGxNb3VzZVwiXSk7XG4gICAgICAgICAgICAgICAgICAgIGxldCByYW5kWCA9ICh0aGlzLml0ZW1BcmVhLndpZHRoIC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJhbmRZID0gKHRoaXMuaXRlbUFyZWEuaGVpZ2h0IC0gMzApIC8gMiAqICgoTWF0aC5yYW5kb20oKSAtIDAuNSkgKiAyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHBvcyA9IGNjLnYyKHJhbmRYLCByYW5kWSk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5pdGVtQXJlYTtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zY29yZSA9IDcwMDtcbiAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbihwb3MpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLm1vdmVNb3VzZShub2RlKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOeUn+aIkOeahOeJqeWTgeaYr+WPr+WKqOeahFxuICAgIG1vdmVNb3VzZShtb3VzZSkge1xuICAgICAgICAvLyDlhYjlsIbogIHpvKDnp7vliqjliLDmnIDlj7Povrkg5pe26Ze05Li6NjAwL+i3neemuyo1XG4gICAgICAgIGxldCBfbW92ZVRpbWUgPSAxMFxuICAgICAgICBsZXQgdGltZSA9IChwYXJzZUludCgzMDAgLSBtb3VzZS54KSAvIDYwMCkgKiBfbW92ZVRpbWVcbiAgICAgICAgY2MudHdlZW4obW91c2UpLnRvKHRpbWUsIHsgeDogMzAwIH0pLnN0YXJ0KClcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgLy8g546w5Zyo5byA5aeLIOiAgem8oOWBmuinhOW+i+i/kOWKqOWFiOWwhuiAgem8oOWPjei9rFxuICAgICAgICAgICAgaWYgKG1vdXNlLm5hbWUgIT09IFwiXCIpIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAtMTtcbiAgICAgICAgICAgICAgICBjYy50d2Vlbihtb3VzZSkucmVwZWF0Rm9yZXZlcihjYy50d2VlbigpLnRvKF9tb3ZlVGltZSwgeyB4OiAtMzAwIH0pLmRlbGF5KDEpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBtb3VzZS5zY2FsZVggPSAxO1xuICAgICAgICAgICAgICAgIH0pLnRvKF9tb3ZlVGltZSwgeyB4OiAzMDAgfSkuZGVsYXkoMSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIG1vdXNlLnNjYWxlWCA9IC0xO1xuICAgICAgICAgICAgICAgIH0pKS5zdGFydCgpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIHRpbWUgKyAxKVxuICAgIH0sXG4gICAgLy8g5YaZ5LiA5Liq566X5rOV44CC44CC5LiA5Y+q5pyJ5LiA5Liq5oC75pWw6YePIOWPr+S7peW+l+WIsCDlkITkuKrnianlk4HnmoTmlbDph49cbiAgICBuZXdDcmVhdGVDYWxjKCkge1xuICAgICAgICBsZXQgY3JlYXRlSXRlbUFyciA9IFtdO1xuICAgICAgICAvLyDlhYjnlJ/miJDnuqLljIXot5/npZ7np5jnianlk4FcbiAgICAgICAgaWYgKHRoaXMubGV2ZWxJbmZvLmV4dHJhKSB7XG4gICAgICAgICAgICBsZXQgZXh0cmEgPSB0aGlzLmxldmVsSW5mby5leHRyYS5zcGxpdChcIixcIik7XG4gICAgICAgICAgICAvLyAw5piv57qi5YyFIOWIm+W7uuS4gOS4que6ouWMhVxuICAgICAgICAgICAgaWYgKGV4dHJhWzBdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogXCJSZWRcIixcbiAgICAgICAgICAgICAgICAgICAgLy8g5byA5Ye655qE57qi5YyF6YeR6aKdXG4gICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiAwLjEsXG4gICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgY3JlYXRlSXRlbUFyciA9IFsuLi5jcmVhdGVJdGVtQXJyLCAuLi5fYXJyXVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGV4dHJhWzFdKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9hcnIgPSBbXTtcbiAgICAgICAgICAgICAgICBsZXQgX3Byb3AgPSBudWxsO1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+elnuenmOeJqeWTgSDlhYjpmo/mnLrlh7rnianlk4Eg5piv5ZCm5pyJ5LiJ5Y+26I2JIOWmguaenOaciSDoja/msLTnmoTpmo/mnLrmpoLnjoflop7liqBcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jbG92ZXJOdW1iZXIpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGFyciA9IFtcIueCuOW8uVwiLCBcIjPlhYPnuqLljIVcIiwgXCI15YWD57qi5YyFXCIsIFwi6I2v5rC0XCIsIFwi6I2v5rC0XCJdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcm1kID0gdGhpcy5jcmVhdGVSYW5kbSgwLCA0KTtcbiAgICAgICAgICAgICAgICAgICAgX3Byb3AgPSBhcnJbcm1kXVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhcnIgPSBbXCLngrjlvLlcIiwgXCIz5YWD57qi5YyFXCIsIFwiNeWFg+e6ouWMhVwiLCBcIuiNr+awtFwiXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHJtZCA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgMyk7XG4gICAgICAgICAgICAgICAgICAgIF9wcm9wID0gYXJyW3JtZF1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgXCJuYW1lXCI6IFwiTXlzdGVyeVwiLFxuICAgICAgICAgICAgICAgICAgICAvLyDlvIDlh7rnmoTnuqLljIXph5Hpop1cbiAgICAgICAgICAgICAgICAgICAgXCJwcm9wXCI6IF9wcm9wLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDcxXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5sZXZlbEluZm8uYm9vbSkge1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmxldmVsSW5mby5ib29tOyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgX2FyciA9IFtdO1xuICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBcIlRudFwiLFxuICAgICAgICAgICAgICAgICAgICBcIndpZHRoXCI6IDc3XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIGNyZWF0ZUl0ZW1BcnIgPSBbLi4uY3JlYXRlSXRlbUFyciwgLi4uX2Fycl1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICAvLyDmoLnmja7np6/liIYg55Sf5oiQ5a+55bqU5Liq5pWwXG4gICAgICAgIGlmICghdGhpcy5sZXZlbEluZm8uZ29vZCkge1xuICAgICAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGluZm8gPSB0aGlzLmxldmVsSW5mby5nb29kLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgLy8gbGV0IG1heFNjb3JlID0gdGhpcy5sZXZlbEluZm8ubWF4U2NvcmU7XG4gICAgICAgIGxldCBzY29yZUFyciA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGluZm8ubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBfaW5mbyA9IGluZm9baV0uc3BsaXQoXCJ8XCIpO1xuICAgICAgICAgICAgbGV0IHR5cGUgPSBfaW5mb1swXTtcbiAgICAgICAgICAgIGxldCBwZXJjZW50ID0gTnVtYmVyKF9pbmZvWzFdKVxuICAgICAgICAgICAgbGV0IG5ld0FyciA9IHRoaXMuY3JlYXRlQnlUeXBlKHR5cGUsIHBlcmNlbnQpO1xuICAgICAgICAgICAgc2NvcmVBcnIgPSBbLi4uc2NvcmVBcnIsIC4uLm5ld0Fycl1cbiAgICAgICAgfVxuICAgICAgICAvLyDlsIbnp6/liIbmlbDnu4TmjpLluo9cbiAgICAgICAgbGV0IF9zY29yZUFyciA9IHNjb3JlQXJyLnNvcnQoKGEsIGIpID0+IHtcbiAgICAgICAgICAgIGlmIChhLnNjb3JlID4gYi5zY29yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybiAtMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGEuc2NvcmUgPCBiLnNjb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDFcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiAwXG4gICAgICAgIH0pXG4gICAgICAgIC8vIOiuoeeul+aJgOaciWFycuS4reeahOWIhuaVsOaYr+S4jeaYr+i2hei/hyDmnKzlhbPnmoTmnIDlpKflgLwg5aaC5p6c6LaF6L+H6YKj5LmI5LuO5ZCO5b6A5YmN6K6h566X5YC8XG4gICAgICAgIGxldCBuZXdBcnIgPSBbXTtcbiAgICAgICAgbGV0IHRvdGFsU2NvcmUgPSB0aGlzLmxldmVsSW5mby5tYXhTY29yZTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgX3Njb3JlQXJyLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBfc2NvcmUgKz0gX3Njb3JlQXJyW2ldLnNjb3JlO1xuICAgICAgICAgICAgaWYgKF9zY29yZSA8PSB0b3RhbFNjb3JlKSB7XG4gICAgICAgICAgICAgICAgbmV3QXJyLnB1c2goX3Njb3JlQXJyW2ldKVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjcmVhdGVJdGVtQXJyID0gWy4uLmNyZWF0ZUl0ZW1BcnIsIC4uLm5ld0Fycl07XG4gICAgICAgIC8vIOWwhmNyZWF0ZUl0ZW1BcnLmjpLluo/mjInnhaflrr3luqZcbiAgICAgICAgY3JlYXRlSXRlbUFyciA9IGNyZWF0ZUl0ZW1BcnIuc29ydCgoYSwgYikgPT4ge1xuICAgICAgICAgICAgaWYgKGEud2lkdGggPiBiLndpZHRoKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIC0xXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYS53aWR0aCA8IGIud2lkdGgpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gMVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIDBcbiAgICAgICAgfSlcbiAgICAgICAgcmV0dXJuIGNyZWF0ZUl0ZW1BcnI7XG4gICAgfSxcbiAgICAvLyDmoLnmja7np6/liIbot5/nsbvlnovnlJ/miJDmlbDph49uYW1lXG4gICAgY3JlYXRlQnlUeXBlKHR5cGUsIHNjb3JlKSB7XG4gICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgbGV0IF9zY29yZSA9IDA7XG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICAgICAgY2FzZSBcImJcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/nn7PlnZcg5piv5ZCm5pyJ5YyW55+z5omL5YaMIOWmguaenOaciSDnn7PlpLTnmoTku7flgLzmj5DljYcyMCUgdG9kb1xuICAgICAgICAgICAgICAgIGxldCBwcm9tb3RlID0gMTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5oYW5kYm9va051bWJlcikge1xuICAgICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeefs+WMluaJi+WGjOS9v+eUqOaIkOWKn+efs+WktOeahOS7t+WAvOaPkOWNhzIwJVwiKVxuICAgICAgICAgICAgICAgICAgICBwcm9tb3RlID0gMS4yXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiU3RvbmUtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gWzIwLCAzMCwgNDBdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgd2lkdGhDaWcgPSBbNDIsIDg5LCAxNTRdO1xuICAgICAgICAgICAgICAgICAgICBsZXQgcmRtID0gdGhpcy5jcmVhdGVSYW5kbSgwLCAyKTtcbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnW3JkbV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChfc2NvcmUgPiBzY29yZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwibmFtZVwiOiBuYW1lICsgcmRtLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJzY29yZVwiOiBzY29yZUNpZ1tyZG1dICogcHJvbW90ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhDaWdbcmRtXVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcImdcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/pu4Tph5FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIkdvbGQtXCJcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNjb3JlQ2lnID0gW107XG4gICAgICAgICAgICAgICAgICAgIC8vIOagueaNruW9k+WJjeenr+WIhueahOacgOWkp+WAvOWKqOaAgeeUn+aIkOaVsOe7hFxuICAgICAgICAgICAgICAgICAgICBsZXQgX19zY29yZSA9IHNjb3JlIC0gX3Njb3JlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX19zY29yZSA+PSAzMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gWzUwLCAxMDAsIDE1MCwgMjAwLCAzMDBdO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IF9rZXkgPSBNYXRoLmZsb29yKF9fc2NvcmUgLyA1MClcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrZXkgPSBfa2V5ID4gNCA/IDQgOiBfa2V5XG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IGtleTsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NvcmVDaWcucHVzaCg1MCAqICgxICsgaykpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCB3aWR0aCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiNTBcIjogMzYsXG4gICAgICAgICAgICAgICAgICAgICAgICBcIjEwMFwiOiA2MixcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiMTUwXCI6IDgzLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIyMDBcIjogMTA4LFxuICAgICAgICAgICAgICAgICAgICAgICAgXCIzMDBcIjogMTQ2XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGV0IHJkbSA9IHRoaXMuY3JlYXRlUmFuZG0oMCwgc2NvcmVDaWcubGVuZ3RoIC0gMSk7XG4gICAgICAgICAgICAgICAgICAgIF9zY29yZSArPSBzY29yZUNpZ1tyZG1dO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChzY29yZUNpZy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSArIHJkbSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogc2NvcmVDaWdbcmRtXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogd2lkdGhbXCJcIiArIHNjb3JlQ2lnW3JkbV1dXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIFwiZFwiOlxuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+mSu+efs1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMzA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbmFtZSA9IFwiRHJpbGxcIlxuICAgICAgICAgICAgICAgICAgICBfc2NvcmUgKz0gNDAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwic2NvcmVcIjogNDAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgXCJ3aWR0aFwiOiAyOVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcIm1cIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3mmK/npZ7np5jnianlk4FcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDMwOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG5hbWUgPSBcIk15c3RlcnlcIlxuICAgICAgICAgICAgICAgICAgICBsZXQgc2NvcmVDaWcgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICBpZiAoc2NvcmUgLSBfc2NvcmUgPiAyMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gdGhpcy5jcmVhdGVSYW5kbSgzMCwgMjAwKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIGlmIChzY29yZSAtIF9zY29yZSA+IDMwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzY29yZUNpZyA9IHRoaXMuY3JlYXRlUmFuZG0oMzAsIHNjb3JlIC0gX3Njb3JlKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNjb3JlQ2lnID0gMzA7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX3Njb3JlICs9IHNjb3JlQ2lnO1xuICAgICAgICAgICAgICAgICAgICBpZiAoX3Njb3JlID4gc2NvcmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBcIm5hbWVcIjogbmFtZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwicHJvcFwiOiBzY29yZUNpZyxcbiAgICAgICAgICAgICAgICAgICAgICAgIFwid2lkdGhcIjogNzFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVha1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnI7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpmo/mnLrlnZDmoIcg5Yik5pat6L+Z5Liq5Z2Q5qCH5Lqn55Sf55qEcmVjdOaYr+WQpui3n+WFtuS7lueahOaJgOacieeahOeJqeWTgeeahHJlY3Tnm7jmjqXop6Yg5aaC5p6c5rKh5pyJ6L+U5Zue5Z2Q5qCHIOWmguaenOaOpeinpumHjeaWsOmaj+aculxuICAgICAqL1xuICAgIHJhbmRvbVhZKGl0ZW0pIHtcbiAgICAgICAgLy94ID0g5bGP5bmV5a695bqmIC8gMiAqIOmaj+acuuaVsFxuICAgICAgICAvL3kgPSDlnLDlubPpnaLkvY3nva4gKyDpmo/mnLrmlbBjYy5yYW5kb20wVG8xKCkgK+mrmOW6puiMg+WbtO+8iOWPr+S7peivtOaYr1nnmoTmnIDlsI/ngrnvvIlcbiAgICAgICAgLy/lnLDlubPpnaLkvY3nva4gPSDlnLDpnaJ5ICsg5Zyw6Z2iIOmrmOW6piAvIDJcbiAgICAgICAgLy8gLSAzMOaYr+WboOS4uueJqeWTgemUmueCueWcqOS4remXtOS9jee9riDorr7nva7lnZDmoIfliLDojIPlm7TlrprngrnnmoTml7blgJkg5Lya5pyJ6YOo5YiG6LaF5Ye6XG4gICAgICAgIGxldCBncm91bmRZID0gdGhpcy5pdGVtQXJlYS55ICsgdGhpcy5pdGVtQXJlYS5oZWlnaHQgLyAyO1xuICAgICAgICBsZXQgcmFuZFggPSAodGhpcy5pdGVtQXJlYS53aWR0aCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIGxldCByYW5kWSA9ICh0aGlzLml0ZW1BcmVhLmhlaWdodCAtIDMwKSAvIDIgKiAoKE1hdGgucmFuZG9tKCkgLSAwLjUpICogMik7XG4gICAgICAgIC8vIOmaj+acuueUn+aIkOeahOS4gOS4quWdkOagh1xuICAgICAgICBsZXQgcG9zID0gY2MudjIocmFuZFgsIHJhbmRZKTtcbiAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChwb3MueCAtIGl0ZW0ud2lkdGggLyAyLCBwb3MueSAtIGl0ZW0uaGVpZ2h0IC8gMiwgaXRlbS53aWR0aCwgaXRlbS5oZWlnaHQpO1xuICAgICAgICBpZiAodGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggPj0gMSkge1xuICAgICAgICAgICAgbGV0IGlzUGVuZyA9IGZhbHNlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgICAgIGxldCBib3VuZGluZ0JveCA9IG4uZ2V0Qm91bmRpbmdCb3goKTtcbiAgICAgICAgICAgICAgICBpZiAoYm91bmRpbmdCb3guaW50ZXJzZWN0cyhyZWN0KSkge1xuICAgICAgICAgICAgICAgICAgICBpc1BlbmcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaXNQZW5nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucmFuZG9tWFkoaXRlbSlcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBvcztcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBwb3M7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDngrjlvLnojIPlm7TnmoTnianlk4Hov5vooYzplIDmr4FcbiAgICAgKiBAcGFyYW0ge2NjLk5vZGV9IFRudFxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGRlc3Ryb3lUbnQoVG50KSB7XG4gICAgICAgIC8vIOmBjeWOhnRoaXMuaXRlbUFyZWHlhoXmiYDmnInnmoToioLngrkg5b2T6IqC54K555qE5Lit5b+D6IqC54K55Zyo54K45by55YaFIOWImemUgOavgVxuICAgICAgICBmb3IgKGxldCBpID0gdGhpcy5pdGVtQXJlYS5jaGlsZHJlbi5sZW5ndGggLSAxOyBpID49IDA7IGktLSkge1xuICAgICAgICAgICAgbGV0IG4gPSB0aGlzLml0ZW1BcmVhLmNoaWxkcmVuW2ldO1xuICAgICAgICAgICAgaWYgKG4gIT09IFRudCkge1xuICAgICAgICAgICAgICAgIC8vIOmAmui/h1RudOeahOS4reW/g+S9jee9riDliJvlu7rkuIDkuKpyZWN05Yy65Z+fXG4gICAgICAgICAgICAgICAgbGV0IF9wb3MgPSBUbnQuZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgICAgICAgICAgbGV0IHJlY3QgPSBuZXcgY2MuUmVjdChfcG9zLnggLSAxMjUsIF9wb3MueSAtIDEyNSwgMjUwLCAyNTApO1xuICAgICAgICAgICAgICAgIGxldCBwb3MgPSBuLmdldFBvc2l0aW9uKGNjLnYyKCkpO1xuICAgICAgICAgICAgICAgIGlmIChyZWN0LmNvbnRhaW5zKHBvcykpIHtcbiAgICAgICAgICAgICAgICAgICAgbi5yZW1vdmVGcm9tUGFyZW50KCk7XG4gICAgICAgICAgICAgICAgICAgIG4uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgICAgICBuID0gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeUn+aIkG4tbemaj+acuuaVsFxuICAgICAqL1xuICAgIGNyZWF0ZVJhbmRtKG4sIG0pIHtcbiAgICAgICAgbSArPSAxO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICogQGRlc2NyaXB0aW9uIOWFs+mXree7s+WtkOeKtuaAgVxuICAgICAqL1xuICAgIFN0b3BIb29rTW92ZSgpIHtcbiAgICAgICAgdGhpcy5Ib29rU3RhdGUgPSAwO1xuICAgICAgICB0aGlzLkhvb2suaGVpZ2h0ID0gdGhpcy5Ib29rSGVpZ2h0O1xuICAgICAgICAvL+mHjee9ruWPkeWwhOmSqeWtkOmAn+W6plxuICAgICAgICB0aGlzLnNwZWVkID0gNjtcbiAgICAgICAgdGhpcy5Ib29rLmdldENoaWxkQnlOYW1lKFwiaG9va18xXCIpLmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Ib29rRnJhbWVzWzBdXG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDlpITnkIbmi4nlm57nmoTnianlk4HvvIzliKDpmaTnianlk4Hku6Xlj4rmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBIYW5kbGUoaXRlbXMpIHtcbiAgICAgICAgdGhpcy5BZGRQcm9wKGl0ZW1zKTtcbiAgICAgICAgdGhpcy5BZGRTY29yZShpdGVtcyk7XG4gICAgICAgIHRoaXMuUmVtb3ZlSXRlbShpdGVtcyk7XG4gICAgICAgIC8vIOWIpOaWreaYr+WQpui/mOacieeJqeWTgeWcqOWcsOWbvuS4iiDlpoLmnpzmsqHmnInpgqPkuYjnu5Pnrpcg57uT5p2fXG4gICAgICAgIGlmICh0aGlzLml0ZW1BcmVhLmNoaWxkcmVuLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgLy8g5Zyw5Zu+54mp5ZOB5raI5aSxIOe7k+eul1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgdGhpcy5HYW1lT3ZlcigpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJib29tXCIpKSB7XG4gICAgICAgICAgICBsZXQgYm9vbSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImJvb21cIilcbiAgICAgICAgICAgIGJvb20ucmVtb3ZlRnJvbVBhcmVudCgpO1xuICAgICAgICAgICAgYm9vbS5kZXN0cm95KCk7XG4gICAgICAgICAgICBib29tID0gbnVsbDtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6LCD5pW0546w5pyJ55qE54K45by555qE546w5a6e5pWI5p6cXG4gICAgYWRqdXNCb29tTGF5b3V0KCkge1xuICAgICAgICBsZXQgbGF5b3V0ID0gdGhpcy5Qcm9wTm9kZS5nZXRDaGlsZEJ5TmFtZShcIkxheW91dFwiKTtcbiAgICAgICAgbGF5b3V0LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIGlmICh0aGlzLmJvb21OdW1iZXIgPj0gMikge1xuICAgICAgICAgICAgdGhpcy5ib29tTnVtYmVyID0gMjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDM7IGkrKykge1xuICAgICAgICAgICAgbGV0IGJvb20gPSBsYXlvdXQuY2hpbGRyZW5baV07XG4gICAgICAgICAgICBpZiAoaSA8PSB0aGlzLmJvb21OdW1iZXIpIHtcbiAgICAgICAgICAgICAgICBib29tLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDojrflvpfpgZPlhbdcbiAgICAgKi9cbiAgICBBZGRQcm9wKGl0ZW1zKSB7XG4gICAgICAgIGlmICghaXRlbXNbMF0pIHJldHVybjtcbiAgICAgICAgaWYgKGl0ZW1zWzBdLm5hbWUgPT09IFwiTXlzdGVyeVwiKSB7XG4gICAgICAgICAgICBsZXQgcHJvcCA9IGl0ZW1zWzBdLmV4dHJhO1xuICAgICAgICAgICAgaWYgKGlzTmFOKHByb3ApKSB7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwcm9wKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYm9vbU51bWJlcisrO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMClcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiM+WFg+e6ouWMhVwiOlxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93TWVzdGVyeSgxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZXh0YXJSZWRQYWNrICs9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIjXlhYPnuqLljIVcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMik7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSA1O1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCLoja/msLRcIjpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd01lc3RlcnkoMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIOW9k+WJjeaYr+enr+WIhlxuICAgICAgICAgICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKHByb3AgfHwgMCk7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSAocHJvcCB8fCAwKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBwcm9wKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5BZGRTY3JvZUF1ZGlvKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIGlmIChpdGVtc1swXS5uYW1lID09PSBcIlJlZFwiKSB7XG4gICAgICAgICAgICAvLyDpmo/mnLozLTjlnZfpkrEgMuS9jeacieaViOWwj+aVsFxuICAgICAgICAgICAgbGV0IGV4dHJhUmVkUGFjayA9IChNYXRoLmZsb29yKHRoaXMuY3JlYXRlUmFuZG0oMzAwLCA4MDApKSkgLyAxMDA7XG4gICAgICAgICAgICB0aGlzLmV4dGFyUmVkUGFjayArPSBleHRyYVJlZFBhY2s7XG4gICAgICAgICAgICB0aGlzLmFkZEFuaW0oXCJyZWRcIiwgZXh0cmFSZWRQYWNrKTtcbiAgICAgICAgICAgIGlmIChjYy56bS5zaG93TXVzaWMpIHtcbiAgICAgICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuQWRkU2Nyb2VBdWRpbyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHNob3dNZXN0ZXJ5KHR5cGUpIHtcbiAgICAgICAgLy8gW1wi54K45by5XCIsXCIz5YWD57qi5YyFXCIsXCI15YWD57qi5YyFXCIsXCLoja/msLRcIl1cbiAgICAgICAgbGV0IG1lc3RlcnkgPSB0aGlzLlByb3BOb2RlLmdldENoaWxkQnlOYW1lKFwiTWVzdGVyeVwiKTtcbiAgICAgICAgbWVzdGVyeS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICBtZXN0ZXJ5LmdldENvbXBvbmVudChjYy5TcHJpdGUpLnNwcml0ZUZyYW1lID0gdGhpcy5Qcm9wU3ByaXRlRnJhbWVzW3R5cGVdO1xuICAgICAgICBtZXN0ZXJ5LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKG1lc3RlcnkpLnRvKDIsIHsgeTogbWVzdGVyeS55ICsgMTAwLCBvcGFjaXR5OiAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgbWVzdGVyeS5vcGFjaXR5ID0gMjU1O1xuICAgICAgICAgICAgbWVzdGVyeS55IC09IDEwMDtcbiAgICAgICAgICAgIG1lc3RlcnkuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIH0pLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDliKDpmaTnianlk4FcbiAgICAgKi9cbiAgICBSZW1vdmVJdGVtKGl0ZW1zKSB7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goaXRlbSA9PiB7XG4gICAgICAgICAgICBpZiAoaXRlbSkge1xuICAgICAgICAgICAgICAgIGl0ZW0uZGVzdHJveSgpO1xuICAgICAgICAgICAgICAgIGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIEBkZXNjcmlwdGlvbiDmt7vliqDlvpfliIZcbiAgICAgKi9cbiAgICBBZGRTY29yZShpdGVtcykge1xuICAgICAgICBpZiAoIWl0ZW1zWzBdKSByZXR1cm47XG4gICAgICAgIGlmICghaXRlbXNbMF0uc2NvcmUpIHJldHVybjtcbiAgICAgICAgLy8gbGV0IHNjb3JlQ29uID0gSXRlbUF0dHJbaXRlbXNbMF0ubmFtZV0gfHwge307XG4gICAgICAgIHRoaXMuU2NvcmUuc3RyaW5nID0gcGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpICsgKGl0ZW1zWzBdLnNjb3JlIHx8IDApO1xuICAgICAgICB0aGlzLmN1clNjb3JlICs9IChpdGVtc1swXS5zY29yZSB8fCAwKTtcbiAgICAgICAgLy/mkq3mlL7lvpfliIbpn7PmlYhcbiAgICAgICAgaWYgKGNjLnptLnNob3dNdXNpYykge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLkFkZFNjcm9lQXVkaW8pO1xuICAgICAgICB9XG4gICAgICAgIC8vIOWinuWKoOS4gOS4quWinuWKoOenr+WIhumjmOWQkS0tLT5TY29yZeS9jee9rueCueWKqOeUu1xuICAgICAgICB0aGlzLmFkZEFuaW0oXCJzY29yZVwiLCBpdGVtc1swXS5zY29yZSlcbiAgICB9LFxuICAgIC8vIOWBmuS4gOS4quWinuWKoOenr+WIhueCueWKqOeUu1xuICAgIGFkZEFuaW0odHlwZSwgc2NvcmUpIHtcbiAgICAgICAgbGV0IGFkZCA9IG51bGw7XG4gICAgICAgIGlmICh0eXBlID09PSBcInNjb3JlXCIpIHtcbiAgICAgICAgICAgIGFkZCA9IHRoaXMuU2NvcmUubm9kZS5wYXJlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhZGRTY29yZVwiKTtcbiAgICAgICAgfSBlbHNlIGlmICh0eXBlID09PSBcInJlZFwiKSB7XG4gICAgICAgICAgICBhZGQgPSB0aGlzLlNjb3JlLm5vZGUucGFyZW50LmdldENoaWxkQnlOYW1lKFwiYWRkUmVkXCIpO1xuICAgICAgICB9XG4gICAgICAgIGFkZC5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IFwiK1wiICsgc2NvcmU7XG4gICAgICAgIGFkZC5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICBhZGQub3BhY2l0eSA9IDA7XG4gICAgICAgIGFkZC55ID0gLTEzMjtcbiAgICAgICAgY2MudHdlZW4oYWRkKS50bygwLjEsIHsgb3BhY2l0eTogMjU1IH0pLnRvKDEsIHsgeTogNDIgfSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5pi+56S6TWFzayB2aWN0b3J5PTAgdmljdG9yeT0x6IOc5YipIHZpY3Rvcnk9MuWksei0pVxuICAgICAqL1xuICAgIFNob3dNYXNrKCkge1xuICAgICAgICAvL+aYvuekuuW8ueWHuuahhlxuICAgICAgICBjYy5Ub29scy5zaG93QmFubmVyKCk7XG4gICAgICAgIHRoaXMuTWFzay5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB0aGlzLlBhdXNlR2FtZUxheWVyKClcbiAgICAgICAgbGV0IEZhaWwgPSB0aGlzLk1hc2suZ2V0Q2hpbGRCeU5hbWUoXCJGYWlsXCIpO1xuICAgICAgICBsZXQgU3VjY2VzcyA9IHRoaXMuTWFzay5nZXRDaGlsZEJ5TmFtZShcIlN1Y2Nlc3NcIik7XG4gICAgICAgIEZhaWwuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIFN1Y2Nlc3MuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIGlmKGNjLnptLkxldmVsSW5mby5zdGFnZTw9NSl7XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJlbmRfXCIrY2Muem0uTGV2ZWxJbmZvLnN0YWdlLG51bGwpXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMudmljdG9yeSA9PT0gMSkge1xuICAgICAgICAgICAgU3VjY2Vzcy5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgLy8g6YCa5YWz5oiQ5Yqf5omT54K5XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5oiQ5YqfXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDorr7nva7nm67moIflhoXlrrlcbiAgICAgICAgICAgIGxldCBsYmwgPSBTdWNjZXNzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICAvLyDlg4/mnI3liqHlmajlj5HpgIHmr4/ml6Xku7vliqHor7fmsYJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9NaXNzaW9uc1wiLCBcIkdFVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW1zID0gcmVzLmRhdGEuaXRlbXM7XG4gICAgICAgICAgICAgICAgbGV0IGl0ZW0gPSBudWxsO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgaXRlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpdGVtc1tpXS5zdGF0dXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIOacqumihuWPllxuICAgICAgICAgICAgICAgICAgICAgICAgaXRlbSA9IGl0ZW1zW2ldXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBsYmwuc3RyaW5nID0gYOavj+aXpeS7u+WKoei+vuaIkOadoeS7tu+8jOeci+W5v+WRiiR7aXRlbS5jdXJyX2FkfS8rJHtpdGVtLm5lZWRfYWR9LOmcgOimgemAmuWFsyR7aXRlbS5jdXJyX3Bhc3Nfc3RhZ2V9Lyske2l0ZW0ubmVlZF9wYXNzX3N0YWdlfWBcbiAgICAgICAgICAgICAgICAvLyDliKTmlq3lkITnp43mnaHku7ZcbiAgICAgICAgICAgICAgICAvLyDlhYjliKTmlq3nlKjmiLflhbPljaHmnaHku7ZcbiAgICAgICAgICAgICAgICBsYmwuc3RyaW5nID0gXCJcIjtcbiAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3Bhc3Nfc3RhZ2UgPCBpdGVtLm5lZWRfcGFzc19zdGFnZSkge1xuICAgICAgICAgICAgICAgICAgICAvLyDlvZPliY3lhbPljaHnrYnnuqflsI/kuo7pnIDopoHlhbPljaHnrYnnuqdcbiAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDpgJrlhbMke2l0ZW0ubmVlZF9wYXNzX3N0YWdlfeWFs+WQjuWPr+aPkOeOsGBcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyDlhbPljaHnrYnnuqfovr7miJAg5Yik5pat56ys5LqM5p2h5Lu2IFxuICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX3NpZ25faW4gPCBpdGVtLm5lZWRfc2lnbl9pbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlrozmiJDku4rml6Xnrb7liLDlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoaXRlbS5jdXJyX2FkIDwgaXRlbS5uZWVkX2FkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGJsLnN0cmluZyA9IGDlho3nnIske2l0ZW0ubmVlZF9hZCAtIGl0ZW0uY3Vycl9hZH3kuKrop4bpopHlj6/mj5DnjrBgXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgbGV0IGF3cmFkID0gU3VjY2Vzcy5nZXRDaGlsZEJ5TmFtZShcImF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBhd3JhZC5zdHJpbmcgPSBg5aWW5Yqx57qi5YyFKyR7dGhpcy5yZWRQYWNrfWA7XG4gICAgICAgICAgICBpZiAoY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcykge1xuICAgICAgICAgICAgICAgIGF3cmFkLm5vZGUuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZXh0YXRBd2FyZCA9IFN1Y2Nlc3MuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJleHRyYUF3YXJkXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBpZiAodGhpcy5leHRhclJlZFBhY2spIHtcbiAgICAgICAgICAgICAgICBleHRhdEF3YXJkLm5vZGUucGFyZW50LmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5zdHJpbmcgPSBgKyR7dGhpcy5leHRhclJlZFBhY2t9YDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXh0YXRBd2FyZC5ub2RlLnBhcmVudC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOaIkOWKn+aIluiAheWksei0peWPkemAgeaVsOaNriByZWRfcGFjazrnuqLljIUgc2NvcmU65YiG5pWwIHRz77ya5pe26Ze05oizIHNpZ24gTUQ15pWw5o2uXG4gICAgICAgICAgICAvLyBcbiAgICAgICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImJvbWJcIjogdGhpcy5ib29tTnVtYmVyICsgMSwvL+eCuOW8ueS4quaVsFxuICAgICAgICAgICAgICAgIFwicG90aW9uXCI6IHRoaXMubGlxdWlkTnVtYmVyLC8v6I2v5rC0XG4gICAgICAgICAgICAgICAgXCJzY29yZVwiOiB0aGlzLmN1clNjb3JlLC8v5YiG5pWwXG4gICAgICAgICAgICAgICAgXCJ0c1wiOiBuZXcgRGF0ZSgpLmdldFRpbWUoKS8v5pe26Ze05oizXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicGl0LnYxLlBpdFN2Yy9QYXNzXCIsIFwiUE9TVFwiLCBkYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLVBhc3PpgJrlhbPmiJDlip/ov5Tlm57kv6Hmga9cIiwgcmVzKVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0gZWxzZSBpZiAodGhpcy52aWN0b3J5ID09PSAyKSB7XG4gICAgICAgICAgICBGYWlsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBjYy5Ub29scy5kb3QoXCJ0aHJvdWdoXCIse1xuICAgICAgICAgICAgICAgIGxldmVsX251bTpjYy56bS5MZXZlbEluZm8uc3RhZ2UsXG4gICAgICAgICAgICAgICAgbGV2ZWxfcmVzdWx0Olwi5aSx6LSlXCJcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAvLyDpgJrlhbPlpLHotKXkuI3nlKjlkYror4nmnI3liqHlmahcbiAgICAgICAgfVxuICAgICAgICBjYy50d2Vlbih0aGlzLk1hc2spLnRvKDAuMywgeyBzY2FsZTogMSB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuUGF1c2VHYW1lTGF5ZXIoKTtcbiAgICAgICAgfSkuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oGi5aSN5ri45oiP77yM5YWz6Zet5by55Ye65qGGXG4gICAgICog5aaC5p6c5piv5ri45oiP6YCa5YWz5Y6f5Zug6ICM5omT5byA55qE5by55Ye65qGG5LiN5LqI55CG552sXG4gICAgICovXG4gICAgQ2xvc2VNYXNrKCkge1xuICAgICAgICBpZiAodGhpcy52aWN0b3J5KSByZXR1cm47XG4gICAgICAgIHRoaXMuUmVzdW1lR2FtZUxheWVyKClcbiAgICB9LFxuXG4gICAgLyoqXG4gICAgICog6YeN546p5pys5YWzXG4gICAgICovXG4gICAgUmVsb2FkKCkge1xuICAgICAgICAvL+WBnOatouWAkuiuoeaXtlxuICAgICAgICB0aGlzLnRpbWVyICYmIHRoaXMudW5zY2hlZHVsZSh0aGlzLnRpbWVyKTtcbiAgICAgICAgLy/ph43ovb3lnLrmma9cbiAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdHYW1lJyk7XG4gICAgfSxcblxuICAgIC8qKlxuICAgICAqIOe7p+e7reS4i+S4gOWFs1xuICAgICAqL1xuICAgIE5leHQoKSB7XG5cbiAgICAgICAgc3dpdGNoICh0aGlzLnZpY3RvcnkpIHtcbiAgICAgICAgICAgIGNhc2UgMDpcbiAgICAgICAgICAgICAgICAvL+e7p+e7rea4uOaIj1xuICAgICAgICAgICAgICAgIHRoaXMuQ2xvc2VNYXNrKCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8g6L+H5YWz5oiQ5Yqf54K55Ye76L+b5YWl5LiL5LiA5YWz5LmL5YmNIOWFiOiOt+WPlueUqOaIt+S/oeaBryDnnIvnlKjmiLfmmK/lkKbmnInkvZPliptcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy56bS51c2VySW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAvLyDlpoLmnpzkvZPlipvlpKfkuo4wIOi/m+WFpeS4i+S4gOWFs1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0udXNlckluZm8ucG93ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcInBpdC52MS5QaXRTdmMvU3RhZ2VcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLnptLkxldmVsSW5mbyA9IHJlcy5kYXRhO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy56bS5MZXZlbEluZm8uc3RhZ2UgPCAzMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLlJlbG9hZCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOebtOaOpei/lOWbnuS4u+eVjOmdolxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5oaWRlQmFubmVyKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyDlsI/kuo4wIOW8ueWHuueci+inhumikeiOt+W+l+S9k+WKm+eahOaOpeWPo1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zZWVWaWRlb0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8v6YCA5Ye65ri45oiPXG4gICAgICAgICAgICAgICAgdGhpcy5FeGl0R2FtZSgpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9O1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X57qi5YyFXG4gICAgQXdhcmRWaWRlbyhlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t55yL6KeG6aKR5b6X5aWW5YqxXCIpO1xuICAgICAgICBjYy5Ub29scy5zaG93SmlsaUFkKCk7XG4gICAgICAgIGxldCBwYWNrID0gY2Muem0uTGV2ZWxJbmZvLmV2ZXJfcGFzcyA/IDAgOiB0aGlzLnJlZFBhY2s7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwicmVkX3BhY2tcIjogcGFyc2VJbnQoKHBhY2sgKyB0aGlzLmV4dGFyUmVkUGFjaykgKiAxMDApLC8v57qi5YyFXG4gICAgICAgICAgICBcImFkXCI6IGNjLnptLmFkXG4gICAgICAgIH1cbiAgICAgICAgY2Muem0udmlkZW9BZC5yZWRQYWNrID0gc2VuZERhdGE7XG4gICAgICAgIHRoaXMudGltZXIgJiYgdGhpcy51bnNjaGVkdWxlKHRoaXMudGltZXIpO1xuICAgIH0sXG4gICAgLy8g55yL6KeG6aKR5b6X5L2T5YqbXG4gICAgc2VlVmlkZW9Bd2FyZChlKSB7XG4gICAgICAgIGNjLnptLnZpZGVvQWQuZW50ZXJHYW1lID0gdHJ1ZTtcbiAgICAgICAgY2MuVG9vbHMuc2hvd0ppbGlBZCgpO1xuICAgICAgICBsZXQgdGFyZ2V0ID0gZS50YXJnZXRcbiAgICAgICAgdGhpcy50aW1lciAmJiB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICBjbG9zZUxheWVyKGUpIHtcbiAgICAgICAgbGV0IHRhcmdldCA9IGUudGFyZ2V0XG4gICAgICAgIHRhcmdldC5wYXJlbnQuYWN0aXZlID0gZmFsc2U7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDpgIDlh7rmuLjmiI8g6L+U5Zue5LiK5LiA5Liq5Zy65pmvXG4gICAgICovXG4gICAgRXhpdEdhbWUoKSB7XG4gICAgICAgIGNjLmVuZENvdW50VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0luZGV4Jyk7XG4gICAgfSxcbiAgICBSZXN1bWVHYW1lTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuQmFja0xheWVyLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnBhdXNlR2FtZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLlN0YXJ0VGltZSgpO1xuICAgICAgICB0aGlzLk1pbmVyU3AucGF1c2VkID0gZmFsc2U7XG4gICAgfSxcbiAgICAvLyDmmoLlgZzlvZPliY3nlYzpnaJcbiAgICBQYXVzZUdhbWVMYXllcigpIHtcbiAgICAgICAgdGhpcy5wYXVzZUdhbWUgPSB0cnVlO1xuICAgICAgICB0aGlzLnVuc2NoZWR1bGUodGhpcy50aW1lcik7XG4gICAgICAgIHRoaXMuTWluZXJTcC5wYXVzZWQgPSB0cnVlO1xuICAgIH0sXG4gICAgLyoqXG4gICAgICog5ri45oiP57uT5p2fXG4gICAgICog6IOc5Yip5oiW5aSx6LSl6YO96KeG5Li65ri45oiP57uT5p2fXG4gICAgICovXG4gICAgR2FtZU92ZXIoKSB7XG4gICAgICAgIC8v5Yik5pat55So5oi35b6X5YiG5piv5ZCm6LaF6L+H55uu5qCH5YiGXG4gICAgICAgIGxldCBzID0gMDtcblxuICAgICAgICBpZiAocGFyc2VJbnQodGhpcy5TY29yZS5zdHJpbmcpID49IHBhcnNlSW50KHRoaXMuVGFyZ2V0U2NvcmUuc3RyaW5nKSkge1xuICAgICAgICAgICAgcyA9IDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvL+a4uOaIj+Wksei0pVxuICAgICAgICAgICAgcyA9IDI7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMudmljdG9yeSA9IHM7XG4gICAgICAgIHRoaXMuU2hvd01hc2soKTtcbiAgICB9LFxuXG4gICAgLy8gc3RhcnQgKCkge1xuXG4gICAgLy8gfSxcbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMucGF1c2VHYW1lKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuTmVlZExheWVyLmFjdGl2ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIHRoaXMubW92ZU1vdXNlKCk7XG4gICAgICAgIHRoaXMuZW1pdEhvb2soKTtcbiAgICAgICAgdGhpcy5Ib29rUm9UYXRlKCk7XG4gICAgfSxcbiAgICAvLyDkvb/nlKjpgZPlhbdcbiAgICB1c2VQcm9wKGUsIG1zZykge1xuICAgICAgICAvLyDlpoLmnpzmmK/ngrjlvLlcbiAgICAgICAgc3dpdGNoIChtc2cpIHtcbiAgICAgICAgICAgIGNhc2UgXCLngrjlvLlcIjpcbiAgICAgICAgICAgICAgICAvLyDlvZPliY3nmoTnirbmgIHlv4XpobvmmK/nu7PlrZDlpITkuo7og73mi4nlm57nmoTnirbmgIFcbiAgICAgICAgICAgICAgICAvLyDmo4DmtYvmmK/lkKbmnInnianlk4FcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5Ib29rLmNoaWxkcmVuWzBdLmNoaWxkcmVuWzBdICYmIHRoaXMuYm9vbU51bWJlciA+IC0xKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOS9v+eUqOeCuOW8ueWDj+acjeWKoeWZqOWPkemAgea2iOaBr1xuICAgICAgICAgICAgICAgICAgICBpZiAoY2Muem0uc2hvd1NoYWtlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAganNiLkRldmljZS52aWJyYXRlKDAuMyk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgLy8g5YWI5o+Q5YmN5YmN56uv5L2/55SoIOaYr+eUu+mdouWQjOatpVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJvb21OdW1iZXItLTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hZGp1c0Jvb21MYXlvdXQoKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g6I635Y+W5ouJ5Y6755qE54mp5ZOB55qE5L2N572uXG4gICAgICAgICAgICAgICAgICAgIGxldCBfbm9kZSA9IHRoaXMuSG9vay5jaGlsZHJlblswXS5jaGlsZHJlblswXVxuICAgICAgICAgICAgICAgICAgICBsZXQgcG9zID0gX25vZGUuY29udmVydFRvV29ybGRTcGFjZUFSKGNjLnYyKDAsIDApKTtcbiAgICAgICAgICAgICAgICAgICAgLy8g5re75Yqg54K45by55pWI5p6cXG4gICAgICAgICAgICAgICAgICAgIGxldCBib29tID0gY2MuaW5zdGFudGlhdGUodGhpcy5Cb29tKTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5uYW1lID0gXCJib29tXCJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5ub2RlLmFkZENoaWxkKGJvb20pO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2l6ZSA9IGNjLnZpZXcuZ2V0VmlzaWJsZVNpemUoKVxuICAgICAgICAgICAgICAgICAgICBib29tLnNldFBvc2l0aW9uKGNjLnYyKHBvcy54IC0gc2l6ZS53aWR0aCAvIDIsIHBvcy55IC0gc2l6ZS5oZWlnaHQgLyAyKSk7XG4gICAgICAgICAgICAgICAgICAgIGJvb20uYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgYm9vbS5nZXRDb21wb25lbnQoY2MuQW5pbWF0aW9uKS5wbGF5KFwiYm9vbVwiKTtcblxuICAgICAgICAgICAgICAgICAgICBfbm9kZS5kZXN0cm95KCk7XG4gICAgICAgICAgICAgICAgICAgIF9ub2RlID0gbnVsbDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zcGVlZCA9IDEwO1xuICAgICAgICAgICAgICAgICAgICBsZXQgc2VuZER0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHByb3A6IDEwXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJwaXQudjEuUGl0U3ZjL1Byb3BcIiwgXCJQT1NUXCIsIHNlbmREdGEpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICB9LFxufSk7XG4iXX0=