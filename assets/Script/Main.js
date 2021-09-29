//引入 得分等配置 太长 所以换个文件写
import ItemAttr from './Config';
import Level from './Level';
const http = require("Http");
cc.Class({
    extends: cc.Component,

    properties: {
        //钩子速度
        speed: {
            default: 3,
            displayName: '钩子速度'
        },
        //钩子旋转速度
        rotateSpeed: {
            default: 1,
            displayName: '钩子旋转速度'
        },
        //钩子范围
        HookRange: {
            default: 70,
            displayName: '钩子旋转角度范围'
        },
        //所有的prefab 这种方式是同步的 代码比较好写 就是难拖
        Prefabs: {
            default: [],
            type: cc.Prefab
        },
        InitTime: {
            default: 10,
        },
        //钩子触碰到物品的声音
        CollisionAudio: {
            type: cc.AudioClip,
            default: null,
        },
        //加分的声音
        AddScroeAudio: {
            type: cc.AudioClip,
            default: null,
        },
        // 道具的纹理
        PropSpriteFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
        Boom: {
            type: cc.Prefab,
            default: null,
        },
        HookFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
        HeroFrames: {
            type: cc.SpriteFrame,
            default: [],
        },
        LotteryFramse: {
            type: cc.SpriteFrame,
            default: [],
        }
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad() {
        /**
         * 初始化
         */
        this.init();

        //加载首页资源
        cc.director.preloadScene('Index');
    },
    setGuide() {
        let index = this.guideIndex;
        if (index <= 3) {
            let guide = cc.find('Canvas/Guide')
            guide.getChildByName("guide_" + index).active = true;
        } else {
            this.guide = false;
            cc.find('Canvas/Guide').active = false;
        }
    },
    nextGuide(e, msg) {
        let guide = cc.find('Canvas/Guide');
        let guide_1 = guide.getChildByName("guide_1");
        let guide_2 = guide.getChildByName("guide_2");
        let guide_3 = guide.getChildByName("guide_3");
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
    hideNeedLayer() {
        // 如果开始游戏 那么刷新一下道具数据
        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then((res) => {
            let sendDta = {
                prop: 4
            }
            http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then((res) => {
                console.log("使用体力成功")
            });
            cc.zm.LevelInfo = res.data;
            // 关闭界面开始游戏
            this.NeedLayer.active = false;
            // 点击开始游戏之前 重新同步一下道具信息
            this.handleDaoju();
            this.adjusBoomLayout();
            this.ResumeGameLayer();
        });
    },
    hideLotteryLayer() {
        this.LotteryLayer.active = false;
    },
    showBackLayer() {
        this.BackLayer.active = true;
        this.PauseGameLayer();
    },
    /**
     * @description 初始化 各种需要的比变量
     */
    init() {
        //钩子矿工
        this.Miner = cc.find('Canvas/Header/Miner');
        //矿工动画 
        //获取钩子
        this.Hook = cc.find('Canvas/Header/Miner/Hook');
        //获取钩子初始长度
        this.HookHeight = this.Hook.height;
        //放下钩子开关 0 停止 1 发射 2拉回
        this.HookState = 0;
        this.curScore = 0;
        this.pauseGame = false;
        // 初始化矿工的精灵帧
        this.MinerSp = this.Miner.getComponent("sp.Skeleton");
        // 看视频得体力界面
        this.seeVideoLayer = cc.find('Canvas/SeeVideolayer')
        //得分累计
        this.Score = cc.find('Canvas/ScoreAndTarget/Score').getComponent(cc.Label);
        //通关目标分数
        this.TargetScore = cc.find('Canvas/ScoreAndTarget/Target').getComponent(cc.Label);
        //倒计时
        this.Time = cc.find('Canvas/CheckpointAndTime/Time').getComponent(cc.Label);
        //关卡数
        this.Checkpoint = cc.find('Canvas/CheckpointAndTime/Checkpoint').getComponent(cc.Label);
        this.NeedLayer = cc.find('Canvas/NeedLayer');
        this.BackLayer = cc.find('Canvas/BackLayer');
        this.PropNode = cc.find('Canvas/Header/Prop');
        this.LotteryLayer = this.NeedLayer.getChildByName("LotteryLayer");
        //物品区域
        this.itemArea = cc.find('Canvas/ItemArea');
        //开启碰撞
        this.manager = cc.director.getCollisionManager();
        this.manager.enabled = true;
        // this.manager.enabledDebugDraw = true;
        // manager.enabledDrawBoundingBox = true;

        //重组prefab数组 方便查询
        this.Prefab = {};
        this.Prefabs.forEach(item => {
            this.Prefab[item._name] = item;
        });

        //发射钩子按钮
        let emitHook = cc.find('Canvas/emitHookBtn');
        //弹出框
        this.Mask = cc.find('Canvas/Mask');
        //游戏结束按钮 包括过关/结束游戏
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
        this.extarRedPack = 0;
        // 是否新手引导
        this.guideIndex = parseInt(cc.sys.localStorage.getItem("guide"));
        if (this.guideIndex < 4 && this.guideIndex >= 1) {
            this.guide = true;
            // 有新手引导暂停游戏
            this.PauseGameLayer();
            cc.find('Canvas/Guide').active = true;
            this.setGuide();
        } else {
            this.guide = false;
            this.PauseGameLayer();
            cc.find('Canvas/Guide').active = false;
            this.NeedLayer.active = true;
            let needScore = this.NeedLayer.getChildByName("needScore").getComponent(cc.Label);
            let needLevel = this.NeedLayer.getChildByName("needLevel").getComponent(cc.Label);
            needScore.string = `要求分数：${this.levelInfo.score}`
            needLevel.string = `第${this.levelInfo.id}关`;
            // 抽奖选关卡
            // 前端随机一个道具
            // 炸弹：10 11时钟 13药水
            let arr = [10, 11, 13];
            let rdm = this.createRandm(0, 2);
            let prop = arr[rdm];
            this.LotteryProp = prop;
            let icon = this.LotteryLayer.getChildByName("icon").getComponent(cc.Sprite);
            if (prop === 10) {
                // 当前是炸弹
                icon.spriteFrame = this.LotteryFramse[2]
            } else if (prop === 11) {
                icon.spriteFrame = this.LotteryFramse[0]
            } else if (prop === 13) {
                icon.spriteFrame = this.LotteryFramse[1]
            }
        }
    },
    LookVideoGetAward() {
        cc.Tools.showJiliAd();
        let sendData = {
            "ad": cc.zm.ad,
            "weapon": this.LotteryProp
        }
        http.sendRequest("pit.v1.PitSvc/Lottery2", "POST", sendData).then((res) => {
            // console.log("点击开始转盘", res);
            // 炸弹：10 11时钟 13药水
            this.LotteryAward = res.data.award;
            this.hideLotteryLayer();
        });
    },
    // 使用道具
    handleDaoju() {
        // 道具的数量为
        let weapon = cc.zm.LevelInfo.weapon;
        // prop类型 10.炸弹 11.时钟 12.石化手册 13.药水 14.三叶草
        // 处理道具 道具分别为 炸弹 boomNumber 时钟 clockNumber 石化手册 handbookNumber 药水 liquidNumber 三叶草 cloverNumber
        let data = {
            "1": "体力",
            "10": "炸弹",
            "11": "时钟",
            "12": "石化手册",
            "13": "药水",
            "14": "三叶草"
        }
        for (let i = 0; i < weapon.length; i++) {
            if (weapon[i].prop === 10) {
                // 当前是炸弹
                this.boomNumber = weapon[i].num - 1;
            } else {
                // 如果是其他物品那么直接使用
                if (weapon[i].num) {
                    // 直接使用
                    let sendDta = {
                        prop: weapon[i].prop
                    }
                    http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta).then((res) => {
                        console.log("使用成功-", data[weapon[i].prop])
                    });
                }
            }
            if (weapon[i].prop === 11) {
                this.clockNumber = weapon[i].num
            }
            if (weapon[i].prop === 12) {
                this.handbookNumber = weapon[i].num
            }
            if (weapon[i].prop === 13) {
                this.liquidNumber = weapon[i].num
            }
            if (weapon[i].prop === 14) {
                this.cloverNumber = weapon[i].num
            }
        }

    },
    screenAdapter() {
        let canvas = cc.find("Canvas").getComponent(cc.Canvas);
        let winSize = cc.view.getVisibleSize();

        if (winSize.height / winSize.width <= 720 / 1280) {
            canvas.fitHeight = true;
            canvas.fitWidth = false;
        }
        else {
            canvas.fitHeight = false;
            canvas.fitWidth = true;
        }
    },
    /**
     * @description 钩子旋转
     */
    HookRoTate() {
        if (this.HookState) return;

        //限制范围 只能在 70 与 -70 之间
        if (this.Hook.angle >= 70) {
            this.rotateSpeed = -this.rotateSpeed;
        } else if (this.Hook.angle <= -70) {
            this.rotateSpeed = Math.abs(this.rotateSpeed);
        };

        this.Hook.angle += this.rotateSpeed;
    },

    /**
     * @description 发射钩子按钮事件
     */
    emitHookBtn() {
        //TODO 停止钩子旋转
        //打开/关闭 钩子开关 没有拉回之前 当前position ！= 初始位置时 不允许操作
        if (this.HookState) return;
        // 当前发射绳子
        this.MinerSp.setAnimation(0, "fang", true);
        this.HookState = 1;
    },

    /**
     * @description 发射钩子
     */
    emitHook() {
        switch (this.HookState) {
            case 1:
                this.Hook.height += this.speed;
                break;
            case 2:
                if (this.Hook.height <= this.HookHeight) {

                    //检测是否拉回物品
                    if (this.Hook.children[0]) {
                        if (this.Hook.children[0].childrenCount) {
                            this.Handle(this.Hook.children[0].children);
                            //停止播放拉回动画
                            this.MinerSp.setAnimation(0, "idle3", false);
                            this.MinerSp.addAnimation(0, "idle", true);
                        } else {
                            this.MinerSp.setAnimation(0, "idle", true);
                        }
                    }
                    this.StopHookMove();
                } else {
                    this.Hook.height -= this.speed;
                };
                break;
        };
    },

    /**
     * @description 拉回钩子
     */
    PullBackHook() {
        //播放拉回钩子动画
        // 将钩子的图片转化
        this.MinerSp.setAnimation(0, "la", true);
        this.HookState = 2;
    },

    /**
     * 设置钩子拉回的速度
     */
    SetSpeed(other) {
        // 是否有药水效果 如果有那么speed速度增加10%
        let promote = 1;
        ItemAttr[other.node.name] = ItemAttr[other.node.name] || {};
        if (this.liquidNumber) {
            console.log("药水效果速度增加10%")
            promote = 1.1
        }
        this.speed = ItemAttr[other.node.name].speed * promote || 10;
    },

    /**
     * 重置所有分数信息
     */
    ResetInfo() {
        //this.victory 游戏胜利失败状态 0 = 游戏中 1 = 成功 2 = 失败
        this.victory =
            this.Score.string =
            this.Time.string =
            this.Checkpoint.string =
            this.TargetScore.string = 0;
    },

    /**
     * 启动倒计时
     */
    StartTime() {
        // 是否存在时钟 存在时钟 this.InitTime+10秒
        if (this.clockNumber) {
            console.log("使用时钟成功+10s")
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
            };
        }
        this.schedule(this.timer, 1)
    },

    /**
     * 设置关卡数
     */
    SetLevel() {
        this.levelInfo = Level["level" + cc.zm.LevelInfo.stage]
        // this.levelInfo = Level["level15"]
        this.Score.string = cc.zm.LevelInfo.current_score;
        this.Checkpoint.string = `${cc.zm.LevelInfo.stage}`;
    },

    /**
     * 确定过关目标分数
     * 目标分数根据关卡关数确定 难度累加率为
     *  基数 1000
     *  每关递增500分
     * 
     * 最大 5000分
     */
    CreateTargetScore() {
        this.TargetScore.string = this.levelInfo.score;
    },

    /**
     * 生成物品 需要根据目标分来生成 生成的所有物品总分必须比目标过关分数高20%
     * 生成的物品数量在 10-30
     */
    CreateItem() {
        let newItemArr = this.newCreateCalc();
        // 写一个算法 根据分数先将arr 排序 总分不能超过最大分数 如果超了 则从小开始减少 直到分数小于最大分数
        //生成相应的Prfab
        console.log("itemArr=", newItemArr);
        newItemArr.forEach(item => {
            let node = cc.instantiate(this.Prefab[item.name]);
            let XY = this.randomXY(node);
            node.parent = this.itemArea;
            if (item.score) {
                node.score = item.score;
            }
            if (item.prop) {
                node.extra = item.prop;
            }
            node.setPosition(XY);
            if (item.name === "Tnt") {
                let boom = cc.instantiate(this.Boom);
                this.node.addChild(boom);
                boom.name = "tntBoom";
                boom.setPosition(cc.v2(XY.x, XY.y - 218));
                node.boom = boom;
            }
        });
        // todo先不创建老鼠试试
        if (this.levelInfo.mouse) {
            let data = this.levelInfo.mouse.split(",");
            // 普通老鼠
            let mouseNumber = Number(data[0]);
            if (mouseNumber > 0) {
                for (let i = 0; i < mouseNumber; i++) {
                    let node = cc.instantiate(this.Prefab["Mouse"]);
                    let randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
                    let randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);
                    let pos = cc.v2(randX, randY);
                    node.parent = this.itemArea;
                    node.score = 50;
                    node.setPosition(pos);
                    this.moveMouse(node);
                }
            }
            let DrillMouseNumber = Number(data[1]);
            if (DrillMouseNumber > 0) {
                for (let i = 0; i < DrillMouseNumber; i++) {
                    let node = cc.instantiate(this.Prefab["DrillMouse"]);
                    let randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
                    let randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);
                    let pos = cc.v2(randX, randY);
                    node.parent = this.itemArea;
                    node.score = 700;
                    node.setPosition(pos);
                    this.moveMouse(node);
                }
            }
        }
    },
    // 生成的物品是可动的
    moveMouse(mouse) {
        // 先将老鼠移动到最右边 时间为600/距离*5
        let _moveTime = 10
        let time = (parseInt(300 - mouse.x) / 600) * _moveTime
        cc.tween(mouse).to(time, { x: 300 }).start()
        this.scheduleOnce(() => {
            // 现在开始 老鼠做规律运动先将老鼠反转
            if (mouse.name !== "") {
                mouse.scaleX = -1;
                cc.tween(mouse).repeatForever(cc.tween().to(_moveTime, { x: -300 }).delay(1).call(() => {
                    mouse.scaleX = 1;
                }).to(_moveTime, { x: 300 }).delay(1).call(() => {
                    mouse.scaleX = -1;
                })).start()
            }
        }, time + 1)
    },
    // 写一个算法。。一只有一个总数量 可以得到 各个物品的数量
    newCreateCalc() {
        let createItemArr = [];
        // 先生成红包跟神秘物品
        if (this.levelInfo.extra) {
            let extra = this.levelInfo.extra.split(",");
            // 0是红包 创建一个红包
            if (extra[0]) {
                let _arr = [];
                let obj = {
                    "name": "Red",
                    // 开出的红包金额
                    "prop": 0.1,
                    "width": 70
                }
                _arr.push(obj);
                createItemArr = [...createItemArr, ..._arr]
            }
            if (extra[1]) {
                let _arr = [];
                let _prop = null;
                // 当前是神秘物品 先随机出物品 是否有三叶草 如果有 药水的随机概率增加
                if (this.cloverNumber) {
                    let arr = ["炸弹", "3元红包", "5元红包", "药水", "药水"];
                    let rmd = this.createRandm(0, 4);
                    _prop = arr[rmd]
                } else {
                    let arr = ["炸弹", "3元红包", "5元红包", "药水"];
                    let rmd = this.createRandm(0, 3);
                    _prop = arr[rmd]
                }
                let obj = {
                    "name": "Mystery",
                    // 开出的红包金额
                    "prop": _prop,
                    "width": 71
                }
                _arr.push(obj);
                createItemArr = [...createItemArr, ..._arr]
            }
        }
        if (this.levelInfo.boom) {
            for (let i = 0; i < this.levelInfo.boom; i++) {
                let _arr = [];
                let obj = {
                    "name": "Tnt",
                    "width": 77
                }
                _arr.push(obj);
                createItemArr = [...createItemArr, ..._arr]
            }
        }
        // 根据积分 生成对应个数
        if (!this.levelInfo.good) {
            return createItemArr;
        }
        let info = this.levelInfo.good.split(",");
        // let maxScore = this.levelInfo.maxScore;
        let scoreArr = [];
        for (let i = 0; i < info.length; i++) {
            let _info = info[i].split("|");
            let type = _info[0];
            let percent = Number(_info[1])
            let newArr = this.createByType(type, percent);
            scoreArr = [...scoreArr, ...newArr]
        }
        // 将积分数组排序
        let _scoreArr = scoreArr.sort((a, b) => {
            if (a.score > b.score) {
                return -1
            }
            if (a.score < b.score) {
                return 1
            }
            return 0
        })
        // 计算所有arr中的分数是不是超过 本关的最大值 如果超过那么从后往前计算值
        let newArr = [];
        let totalScore = this.levelInfo.maxScore;
        let _score = 0;
        for (let i = 0; i < _scoreArr.length; i++) {
            _score += _scoreArr[i].score;
            if (_score <= totalScore) {
                newArr.push(_scoreArr[i])
            } else {
                break;
            }
        }
        createItemArr = [...createItemArr, ...newArr];
        console.log("createItemArr未按照宽度排序=", createItemArr);
        // 将createItemArr排序按照宽度
        createItemArr = createItemArr.sort((a, b) => {
            if (a.width > b.width) {
                return -1
            }
            if (a.width < b.width) {
                return 1
            }
            return 0
        })
        console.log("createItemArr照宽度排序=", createItemArr);
        return createItemArr;
    },
    // 根据积分跟类型生成数量name
    createByType(type, score) {
        let arr = [];
        let _score = 0;
        switch (type) {
            case "b":
                // 当前是石块 是否有化石手册 如果有 石头的价值提升20% todo
                let promote = 1;
                if (this.handbookNumber) {
                    console.log("石化手册使用成功石头的价值提升20%")
                    promote = 1.2
                }
                for (let i = 0; i < 30; i++) {
                    let name = "Stone-"
                    let scoreCig = [20, 30, 40];
                    let widthCig = [42, 89, 154];
                    let rdm = this.createRandm(0, 2);
                    _score += scoreCig[rdm];
                    if (_score > score) {
                        break;
                    }
                    let obj = {
                        "name": name + rdm,
                        "score": scoreCig[rdm] * promote,
                        "width": widthCig[rdm]
                    }
                    arr.push(obj);
                }
                break;
            case "g":
                // 当前是黄金
                for (let i = 0; i < 30; i++) {
                    let name = "Gold-"
                    let scoreCig = [];
                    // 根据当前积分的最大值动态生成数组
                    let __score = score - _score;
                    if (__score >= 300) {
                        scoreCig = [50, 100, 150, 200, 300];
                    } else {
                        let _key = Math.floor(__score / 50)
                        let key = _key > 4 ? 4 : _key
                        for (let k = 0; k < key; k++) {
                            scoreCig.push(50 * (1 + k));
                        }
                    }
                    let width = {
                        "50": 36,
                        "100": 62,
                        "150": 83,
                        "200": 108,
                        "300": 146
                    }
                    let rdm = this.createRandm(0, scoreCig.length - 1);
                    _score += scoreCig[rdm];
                    if (_score > score) {
                        break;
                    }
                    if (scoreCig.length === 0) {
                        break;
                    }
                    let obj = {
                        "name": name + rdm,
                        "score": scoreCig[rdm],
                        "width": width["" + scoreCig[rdm]]
                    }
                    arr.push(obj);
                }
                break;
            case "d":
                // 当前是钻石
                for (let i = 0; i < 30; i++) {
                    let name = "Drill"
                    _score += 400;
                    if (_score > score) {
                        break;
                    }
                    let obj = {
                        "name": name,
                        "score": 400,
                        "width": 29
                    }
                    arr.push(obj);
                }
                break;
            case "m":
                // 当前是神秘物品
                for (let i = 0; i < 30; i++) {
                    let name = "Mystery"
                    let scoreCig = null;
                    if (score - _score > 200) {
                        scoreCig = this.createRandm(30, 200);
                    } else if (score - _score > 30) {
                        scoreCig = this.createRandm(30, score - _score);
                    } else {
                        scoreCig = 30;
                    }
                    _score += scoreCig;
                    if (_score > score) {
                        break;
                    }
                    let obj = {
                        "name": name,
                        "prop": scoreCig,
                        "width": 71
                    }
                    arr.push(obj);
                }
                break
        }
        return arr;
    },
    /**
     * 随机坐标 判断这个坐标产生的rect是否跟其他的所有的物品的rect相接触 如果没有返回坐标 如果接触重新随机
     */
    randomXY(item) {
        //x = 屏幕宽度 / 2 * 随机数
        //y = 地平面位置 + 随机数cc.random0To1() +高度范围（可以说是Y的最小点）
        //地平面位置 = 地面y + 地面 高度 / 2
        // - 30是因为物品锚点在中间位置 设置坐标到范围定点的时候 会有部分超出
        let groundY = this.itemArea.y + this.itemArea.height / 2;
        let randX = (this.itemArea.width - 30) / 2 * ((Math.random() - 0.5) * 2);
        let randY = (this.itemArea.height - 30) / 2 * ((Math.random() - 0.5) * 2);
        // 随机生成的一个坐标
        let pos = cc.v2(randX, randY);
        let rect = new cc.Rect(pos.x - item.width / 2, pos.y - item.height / 2, item.width, item.height);
        if (this.itemArea.children.length >= 1) {
            let isPeng = false;
            for (let i = 0; i < this.itemArea.children.length; i++) {
                let n = this.itemArea.children[i];
                let boundingBox = n.getBoundingBox();
                if (boundingBox.intersects(rect)) {
                    isPeng = true;
                    break;
                }
            }
            if (isPeng) {
                return this.randomXY(item)
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
    destroyTnt(Tnt) {
        // 遍历this.itemArea内所有的节点 当节点的中心节点在炸弹内 则销毁
        for (let i = this.itemArea.children.length - 1; i >= 0; i--) {
            let n = this.itemArea.children[i];
            if (n !== Tnt) {
                // 通过Tnt的中心位置 创建一个rect区域
                let _pos = Tnt.getPosition(cc.v2());
                let rect = new cc.Rect(_pos.x - 125, _pos.y - 125, 250, 250);
                let pos = n.getPosition(cc.v2());
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
    createRandm(n, m) {
        m += 1;
        let a = m - n;
        let num = Math.random() * a + n;
        return parseInt(num);
    },

    /**
     * @description 关闭绳子状态
     */
    StopHookMove() {
        this.HookState = 0;
        this.Hook.height = this.HookHeight;
        //重置发射钩子速度
        this.speed = 6;
        this.Hook.getChildByName("hook_1").getComponent(cc.Sprite).spriteFrame = this.HookFrames[0]
    },

    /**
     * @description 处理拉回的物品，删除物品以及添加得分
     */
    Handle(items) {
        this.AddProp(items);
        this.AddScore(items);
        this.RemoveItem(items);
        // 判断是否还有物品在地图上 如果没有那么结算 结束
        if (this.itemArea.children.length === 0) {
            // 地图物品消失 结算
            // todo
            this.GameOver();
        }
        if (this.node.getChildByName("boom")) {
            let boom = this.node.getChildByName("boom")
            boom.removeFromParent();
            boom.destroy();
            boom = null;
        }
    },
    // 调整现有的炸弹的现实效果
    adjusBoomLayout() {
        let layout = this.PropNode.getChildByName("Layout");
        layout.active = true;
        if (this.boomNumber >= 2) {
            this.boomNumber = 2;
        }
        for (let i = 0; i < 3; i++) {
            let boom = layout.children[i];
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
    AddProp(items) {
        if (!items[0]) return;
        if (items[0].name === "Mystery") {
            let prop = items[0].extra;
            if (isNaN(prop)) {
                switch (prop) {
                    case "炸弹":
                        this.boomNumber++;
                        this.adjusBoomLayout();
                        this.showMestery(0)
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
                this.curScore += (prop || 0);
                this.addAnim("score", prop)
            }
            if (cc.zm.showMusic) {
                cc.audioEngine.play(this.AddScroeAudio);
            }
        } else if (items[0].name === "Red") {
            // 随机3-8块钱 2位有效小数
            let extraRedPack = (Math.floor(this.createRandm(300, 800))) / 100;
            this.extarRedPack += extraRedPack;
            this.addAnim("red", extraRedPack);
            if (cc.zm.showMusic) {
                cc.audioEngine.play(this.AddScroeAudio);
            }
        }
    },
    showMestery(type) {
        // ["炸弹","3元红包","5元红包","药水"]
        let mestery = this.PropNode.getChildByName("Mestery");
        mestery.active = true;
        mestery.getComponent(cc.Sprite).spriteFrame = this.PropSpriteFrames[type];
        mestery.stopAllActions();
        cc.tween(mestery).to(2, { y: mestery.y + 100, opacity: 0 }).call(() => {
            mestery.opacity = 255;
            mestery.y -= 100;
            mestery.active = false;
        }).start()
    },
    /**
     * @description 删除物品
     */
    RemoveItem(items) {
        items.forEach(item => {
            if (item) {
                item.destroy();
                item = null;
            }
        });
    },
    /**
     * @description 添加得分
     */
    AddScore(items) {
        if (!items[0]) return;
        if (!items[0].score) return;
        // let scoreCon = ItemAttr[items[0].name] || {};
        this.Score.string = parseInt(this.Score.string) + (items[0].score || 0);
        this.curScore += (items[0].score || 0);
        //播放得分音效
        if (cc.zm.showMusic) {
            cc.audioEngine.play(this.AddScroeAudio);
        }
        // 增加一个增加积分飘向--->Score位置点动画
        this.addAnim("score", items[0].score)
    },
    // 做一个增加积分点动画
    addAnim(type, score) {
        let add = null;
        if (type === "score") {
            add = this.Score.node.parent.getChildByName("addScore");
        } else if (type === "red") {
            add = this.Score.node.parent.getChildByName("addRed");
        }
        add.getComponent(cc.Label).string = "+" + score;
        add.stopAllActions();
        add.opacity = 0;
        add.y = -132;
        cc.tween(add).to(0.1, { opacity: 255 }).to(1, { y: 42 }).to(0.1, { opacity: 0 }).start()
    },
    /**
     * 显示Mask victory=0 victory=1胜利 victory=2失败
     */
    ShowMask() {
        //显示弹出框
        this.Mask.active = true;
        // this.PauseGameLayer()
        let Fail = this.Mask.getChildByName("Fail");
        let Success = this.Mask.getChildByName("Success");
        Fail.active = false;
        Success.active = false;
        if (this.victory === 1) {
            Success.active = true;
            // 设置目标内容
            let lbl = Success.getChildByName("lbl").getComponent(cc.Label);
            // 像服务器发送每日任务请求
            http.sendRequest("pit.v1.PitSvc/Missions", "GET", sendData).then((res) => {
                // console.log("七日任务列表=", res.data);
                let items = res.data.items;
                let item = null;
                for (let i = 0; i < items.length; i++) {
                    if (!items[i].status) {
                        // 未领取
                        item = items[i]
                        break;
                    }
                }
                // lbl.string = `每日任务达成条件，看广告${item.curr_ad}/+${item.need_ad},需要通关${item.curr_pass_stage}/+${item.need_pass_stage}`
                // 判断各种条件
                // 先判断用户关卡条件
                lbl.string = "";
                if (item.curr_pass_stage < item.need_pass_stage) {
                    // 当前关卡等级小于需要关卡等级
                    lbl.string = `通关${item.need_pass_stage}关后可提现`
                } else {
                    // 关卡等级达成 判断第二条件 
                    if (item.curr_sign_in < item.need_sign_in) {
                        lbl.string = `完成今日签到可提现`
                    } else {
                        if (item.curr_ad < item.need_ad) {
                            lbl.string = `再看${item.need_ad - item.curr_ad}个视频可提现`
                        }
                    }
                }
            })
            let awrad = Success.getChildByName("award").getComponent(cc.Label);
            awrad.string = `奖励红包+${this.redPack}`;
            if (cc.zm.LevelInfo.ever_pass) {
                awrad.node.active = false;
            }
            let extatAward = Success.getChildByName("layout").getChildByName("extraAward").getComponent(cc.Label);
            if (this.extarRedPack) {
                extatAward.node.parent.active = true;
                extatAward.string = `+${this.extarRedPack}`;
            } else {
                extatAward.node.parent.active = false;
            }
            // 成功或者失败发送数据 red_pack:红包 score:分数 ts：时间戳 sign MD5数据
            // 
            let sendData = {
                "bomb": this.boomNumber + 1,//炸弹个数
                "potion": this.liquidNumber,//药水
                "score": this.curScore,//分数
                "ts": new Date().getTime()//时间戳
            }
            let data = this.createSignData(sendData);
            http.sendRequest("pit.v1.PitSvc/Pass", "POST", data).then((res) => {
                console.log("Pass通关成功返回信息", res)
            });
        } else if (this.victory === 2) {
            Fail.active = true;
            // 通关失败不用告诉服务器
        }
        cc.tween(this.Mask).to(0.3, { scale: 1 }).call(() => {
            this.PauseGameLayer();
        }).start()
    },
    createSignData: function (data) {
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
        strToJiaMi = "token=" + cc.zm.userInfo.sc1 + strToJiaMi;
        // var noJiaMi = strToJiaMi;
        // console.log("未加密前=",strToJiaMi)
        var hex_md5 = require("MD5")
        strToJiaMi = hex_md5(strToJiaMi);
        data.sign = strToJiaMi;
        // console.log("加密后=",strToJiaMi)
        return data;

    },
    /**
     * 恢复游戏，关闭弹出框
     * 如果是游戏通关原因而打开的弹出框不予理睬
     */
    CloseMask() {
        if (this.victory) return;
        this.ResumeGameLayer()
    },

    /**
     * 重玩本关
     */
    Reload() {
        //停止倒计时
        this.timer && this.unschedule(this.timer);
        //重载场景
        cc.director.loadScene('Game');
    },

    /**
     * 继续下一关
     */
    Next() {

        switch (this.victory) {
            case 0:
                //继续游戏
                this.CloseMask();
                break;
            case 1:
                // 过关成功点击进入下一关之前 先获取用户信息 看用户是否有体力
                let sendData = {};
                http.sendRequest("pit.v1.PitSvc/UserInfo", "GET", sendData).then((res) => {
                    cc.zm.userInfo = res.data;
                    // 如果体力大于0 进入下一关
                    if (cc.zm.userInfo.power > 0) {
                        http.sendRequest("pit.v1.PitSvc/Stage", "GET", {}).then((res) => {
                            cc.zm.LevelInfo = res.data;
                            if (cc.zm.LevelInfo.stage < 30) {
                                this.Reload();
                            } else {
                                // 直接返回主界面
                                cc.director.loadScene('Index');
                            }
                        });
                    } else {
                        // 小于0 弹出看视频获得体力的接口
                        this.seeVideoLayer.active = true;
                    }
                })
                break;
            case 2:
                //退出游戏
                this.ExitGame();
                break;
        };
    },
    AwardVideo(e) {
        cc.log("看视频得奖励");
        cc.Tools.showJiliAd();
        let pack = cc.zm.LevelInfo.ever_pass ? 0 : this.redPack;
        let sendData = {
            "red_pack": parseInt((pack + this.extarRedPack) * 100),//红包
            "ad": cc.zm.ad
        }
        cc.zm.ad.redPack = sendData;
        this.timer && this.unschedule(this.timer);
    },
    // 看视频得奖励
    seeVideoAward(e) {
        cc.Tools.showJiliAd();
        let target = e.target
        cc.zm.ad.power = true;
        this.timer && this.unschedule(this.timer);
        target.parent.active = false;
    },
    closeLayer(e) {
        let target = e.target
        target.parent.active = false;
    },
    /**
     * 退出游戏 返回上一个场景
     */
    ExitGame() {
        cc.director.loadScene('Index');
    },
    ResumeGameLayer() {
        this.BackLayer.active = false;
        this.pauseGame = false;
        this.StartTime();
        this.MinerSp.paused = false;
    },
    // 暂停当前界面
    PauseGameLayer() {
        this.pauseGame = true;
        this.unschedule(this.timer);
        this.MinerSp.paused = true;
    },
    /**
     * 游戏结束
     * 胜利或失败都视为游戏结束
     */
    GameOver() {
        //判断用户得分是否超过目标分
        let s = 0;

        if (parseInt(this.Score.string) >= parseInt(this.TargetScore.string)) {
            s = 1;
        } else {
            //游戏失败
            s = 2;
        };
        this.victory = s;
        this.ShowMask();
    },

    // start () {

    // },
    update(dt) {
        if (this.pauseGame) {
            return;
        }
        if (this.NeedLayer.active) {
            return;
        }
        // this.moveMouse();
        this.emitHook();
        this.HookRoTate();
    },
    // 使用道具
    useProp(e, msg) {
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
                    }
                    // 先提前前端使用 是画面同步
                    this.boomNumber--;
                    this.adjusBoomLayout();
                    // 获取拉去的物品的位置
                    let _node = this.Hook.children[0].children[0]
                    let pos = _node.convertToWorldSpaceAR(cc.v2(0, 0));
                    // 添加炸弹效果
                    let boom = cc.instantiate(this.Boom);
                    boom.name = "boom"
                    this.node.addChild(boom);
                    let size = cc.view.getVisibleSize()
                    boom.setPosition(cc.v2(pos.x - size.width / 2, pos.y - size.height / 2));
                    boom.active = true;
                    boom.getComponent(cc.Animation).play("boom");

                    _node.destroy();
                    _node = null;
                    this.speed = 10;
                    let sendDta = {
                        prop: 10
                    }
                    http.sendRequest("pit.v1.PitSvc/Prop", "POST", sendDta);
                }
                break;
            default:
                break;
        }
    },
});
