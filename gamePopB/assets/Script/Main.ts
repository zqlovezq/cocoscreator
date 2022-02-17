// import Tools from "./Tools";
const { ccclass, property } = cc._decorator;
var self: any = null;
interface ticketInfo {
    // 券的数量
    ticket: number;
    // 额外的券
    add: number;
    // 视频类型
    videoType: number;
    //来自几级界面
    type: number
}
@ccclass
export default class Main extends cc.Component {
    // @property(cc.Node)
    background: cc.Node = null;
    // @property(cc.Node)
    blockBackground: cc.Node = null;
    ground: cc.Node = null;
    content: cc.Node = null;
    cashInfo: cc.Node = null;
    userInfo: cc.Node = null;
    scoreInfo: cc.Node = null;
    barrageLayer: cc.Node = null;
    getCashLayer: cc.Node = null;
    settingLayer: cc.Node = null;
    saveCashLayer: cc.Node = null;
    // @property(cc.Node)
    lotteryLayer: cc.Node = null;
    // @property(cc.Node)
    stealLayer: cc.Node = null;
    signLayer: cc.Node = null;
    popSuccessLayer: cc.Node = null;
    popDeleteLayer: cc.Node = null;
    popNewLayer: cc.Node = null;
    ticketLayer: cc.Node = null;
    ticketTenLayer: cc.Node = null;
    popSuperLayer: cc.Node = null;
    popSecretLayer: cc.Node = null;
    popStealMarkLayer: cc.Node = null;
    @property(cc.Prefab)
    packet: cc.Prefab = null;
    @property(cc.Prefab)
    blockNull: cc.Prefab = null;
    @property(cc.Prefab)
    red: cc.Prefab = null;
    @property(cc.Prefab)
    green: cc.Prefab = null;
    @property(cc.Prefab)
    yellow: cc.Prefab = null;
    @property(cc.Prefab)
    blue: cc.Prefab = null;
    @property(cc.Prefab)
    pink: cc.Prefab = null;
    @property(cc.Prefab)
    good: cc.Prefab = null;
    @property(cc.Prefab)
    great: cc.Prefab = null;
    @property(cc.Prefab)
    excellent: cc.Prefab = null;
    @property(cc.Prefab)
    amazing: cc.Prefab = null;
    @property(cc.Prefab)
    unbelievable: cc.Prefab = null;
    @property(cc.Prefab)
    desEffect: cc.Prefab = null;
    @property([cc.AudioClip])
    effectAudio = [];
    @property([cc.SpriteFrame])
    popDeleteType = [];
    @property([cc.SpriteFrame])
    liziBlock = []
    @property([cc.SpriteFrame])
    tiger = [];
    @property(cc.Prefab)
    pop_red: cc.Prefab = null;
    private a = [];
    private b = [];
    private deletePosArr = [];
    private difficulty = 3;
    private Delete_num = 0;
    private vh = 110;
    private lock = false;
    private targetScore = 1000;
    private curScore = 0;
    private level = 0;
    private clickRedNumber = 0;
    private clickOnce = true;
    private clickNumber = 0;
    private countTime = 0;
    private canClickRed = true;
    private clickRedArr = [];
    private startClickTime = 0;
    private isOverGame = false;
    private _count = 0;
    private showSecretTimes = 0;
    private clickPos = cc.v3(0, 0);
    private addTicket = 0;
    private barrageArr = [];
    private barrage: cc.Node;
    private barrageSpeed = 2;
    private barrageMove = false;
    private barrageLock = false;
    private superTime = 0;
    private special = false;
    onLoad() {
        // 初始化参数
        self = this;
        cc.Tools.screenAdapter();
        cc.Tools.Event.on("init", this.refreshUserInfo, this);
        cc.Tools.Event.on("getTicket", this.showTicketLayer, this);
        cc.Tools.Event.on("cash", this.showGetCashLayer, this);
        cc.Tools.Event.on("clickRed", this.canClickRedFunc, this);
        cc.Tools.Event.on("showPacket", this.showPacket, this);
        cc.Tools.Event.on("getTenTicket", this.showTenTicketLayer, this);
        cc.Tools.Event.on("refreshWallet", this.refreshWallet, this);
        cc.Tools.Event.on("showGuide", this.showGuideRed, this);
        cc.Tools.adTimes = 0;
        this.ground = cc.find("Canvas/background");
        this.content = cc.find("Canvas/content");
        this.background = this.ground.getChildByName("blockColour");
        this.blockBackground = this.ground.getChildByName("blockNull");
        this.cashInfo = this.content.getChildByName("info_layer").getChildByName("cash_info");
        this.userInfo = this.content.getChildByName("info_layer").getChildByName("user_info");
        this.scoreInfo = this.content.getChildByName("info_layer").getChildByName("score_info");
        this.barrageLayer = this.node.getChildByName("barrage_layer");
        this.countTime = new Date().getTime();
        this.preloadPrefab();
        this.initUserInfo();
        this.shieldBtn();
        //刷新一下当前的金钱数量
        this.refreshWallet();
        let box = this.scoreInfo.getChildByName("box");
        cc.Tools.breatheAnim(box);
        box.on(cc.Node.EventType.TOUCH_END, () => {
            this.showPopDeleteLayer(1, 10);
        }, this)
        this.scheduleOnce(() => {
            this.loadPrefab('Prefab/barrage').then((prefab: cc.Prefab) => {
                let barrage = cc.instantiate(prefab);
                self.barrageLayer.addChild(barrage);
                barrage.x = 1000;
                this.barrage = barrage;
                this.getBarrageInfo(true);
            })
        }, 1)
        //退出游戏的时候记录一下
        // 
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("cocos--EVENT_HIDE--退出游戏");
            //当前记录一个时间
            let date = new Date().getTime();
            cc.sys.localStorage.setItem("lastExit", Math.floor(date / 1000));
        });
    }
    //红包显示红点
    showGuideRed() {
        let btnLayer = this.content.getChildByName("btn_layer");
        let boxBtn = btnLayer.getChildByName("btn_5");
        boxBtn.getChildByName("red").active = false;
        if (cc.Tools.treasure.left_num_b || cc.Tools.treasure.left_num_a) {
            boxBtn.getChildByName("red").active = true;
        }
        let stealBtn = btnLayer.getChildByName("btn_4");
        let icon = stealBtn.getChildByName("icon");
        icon.active = true;
        icon.runAction(cc.sequence(cc.delayTime(4), cc.scaleTo(0.4, 0)));
    }
    //获取ad的信息
    getAd() {
        let date: Date = new Date();
        let year: number = date.getFullYear();
        let month: number = date.getMonth();
        let day: number = date.getDate();
        let dateStr: string = year + "" + month + "" + day;
        // console.log("")
        let markDate = cc.sys.localStorage.getItem("markDate");
        if (markDate !== dateStr) {
            //如果第二天
            cc.Tools.getFreeze();
            cc.sys.localStorage.setItem("adTimes", 0);
            cc.Tools.ad.adTimes = 0;
            cc.sys.localStorage.setItem("markDate", dateStr);
        } else {
            cc.Tools.ad.adTimes = cc.sys.localStorage.getItem("adTimes");
        }
        console.log("cocos----今天累计观看视频次数=", cc.Tools.ad.adTimes);
        cc.Tools.sendRequest("Conf", "GET", {}).then((res) => {
            //大小视频
            cc.Tools.ad.adSmall = res.data.ad_conf[0].ad_position_id;
            cc.Tools.ad.adBig = res.data.ad_conf[1].ad_position_id;
            cc.Tools.ad.adDiv = res.data.ad_conf[0].end_num;
            cc.Tools.ad.config = res.data.award_num_conf;
            cc.Tools.ad.config.sort(function (a, b) {
                if (a.num > b.num) {
                    return 1;
                }
                if (a.num < b.num) {
                    return -1;
                }
                return 0;
            })
            if (cc.Tools.ad.adTimes <= cc.Tools.ad.adDiv) {
                if (cc.Tools.ad.adSmall) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adSmall;
                }
            } else {
                if (cc.Tools.ad.adBig) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adBig;
                }
            }
            this.initAward();
        }).catch((err) => {
            console.log("cocos----广告err--" + err);
        })
    }
    //判断是否屏蔽
    shieldBtn() {
        if (cc.sys.localStorage.getItem("showBtn")) {
            let val = cc.sys.localStorage.getItem("showBtn");
            let btnLayer = this.content.getChildByName("btn_layer");
            for (let i = 3; i <= 8; i++) {
                let btn = btnLayer.getChildByName("btn_" + i);
                btn.active = val == 1 ? false : true;
            }
            if (val == 100) {
                this.showStealMarkLayer();
            }
        } else {
            cc.Tools.sendRequest("RegionConf", "GET", {}).then((res) => {
                if (res.data.status === 1) {
                    //不显示
                    cc.sys.localStorage.setItem("showBtn", 1);
                    let btnLayer = this.content.getChildByName("btn_layer");
                    for (let i = 3; i <= 8; i++) {
                        let btn = btnLayer.getChildByName("btn_" + i);
                        btn.active = false;
                    }
                } else if (res.data.status === 100) {
                    //显示
                    cc.sys.localStorage.setItem("showBtn", 100);
                    //显示新手奖励界面
                    this.showNewLayer();
                }
            }).catch((err) => {
                console.log("cocos----屏蔽err--" + err);
            })
        }
    }
    showStealMarkLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popStealMarkLayer) {
            this.loadPrefab('Prefab/stealMark').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.popStealMarkLayer = layer;
                self.node.addChild(layer);
                self.popStealMarkLayer.active = true;
            })
        } else {
            this.popStealMarkLayer.active = true;
        }
    }
    //获取弹幕信息
    getBarrageInfo(isFirst: boolean) {
        cc.Tools.sendRequest("Trend", "GET", {}).then((res) => {
            let items = res.data.items;
            self.barrageArr = [...self.barrageArr, ...items];
            // console.log("self.barrageArr", self.barrageArr);
            if (isFirst) {
                this.barrageMove = true;
                let data = self.barrageArr.shift();
                this.barrage.getComponent("Barrage").setBarrage(data)
            }
            this.barrageLock = false;
        }).catch((err) => {
            console.log("cocos----弹幕err--" + err);
        })
    }
    update(dt) {
        if (this.barrageMove && this.barrage && cc.sys.localStorage.getItem("showBtn") == 100) {
            let box = this.scoreInfo.getChildByName("box");
            this.barrage.x -= this.barrageSpeed;
            if (this.barrage.x < -700) {
                let data = self.barrageArr.shift();
                this.barrage.getComponent("Barrage").setBarrage(data);
            }
            if (this.barrageArr.length <= 0 && !this.barrageLock) {
                this.barrageLock = true;
                this.getBarrageInfo(false);
            }
            if (box.x < 700) {
                box.x += 1;
            } else {
                box.x = -700;
            }
            if (this.superTime > 30) {
                this.superTime = 0;
                this.showSuperLayer();
            } else {
                this.superTime += dt;
            }
            // if(this.superTime>5){
            //     console.log("update");
            // }
        }
    }
    /**
     * 初始化数数
    */
    initShuShu() {
        // 数数打点
        cc.Tools.shuShuDot();
        cc.Tools.setDistinctId();
        cc.Tools.setUserId();
    }
    /**
    * 处理小数精度问题
    * @returns 
    */
    handleNumber(numb) {
        // 先讲数字转换成字符串
        if (numb) {
            let str = "" + numb;
            let key = str.split(".");
            let newKey = key[0] + "." + key[1].slice(0, 2);
            return newKey;
        } else {
            return "0";
        }
    }
    /**
     * 初始化头像
     * @param url:头像url
     * @param vip:Vip等级
    */
    addAvatar(url: string, vip: number) {
        // cc.Tools.userInfo.next_grade_rate = 0.5;
        let bar: cc.Sprite = self.userInfo.getChildByName("vip_bar").getComponent(cc.Sprite);
        bar.fillRange = cc.Tools.userInfo.next_grade_rate;
        let avatarJs = self.userInfo.getChildByName("avatar").getComponent("Avatar");
        avatarJs.loadUrl(url).then((res) => {
            avatarJs.setAvatar(res, vip)
        })
    }
    // 初始化userInfo
    initUserInfo() {
        let sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then((res) => {
            cc.Tools.userInfo = res.data;
            this.userInfo.getChildByName("user_name").getComponent(cc.Label).string = res.data.nick_name;
            this.initShuShu();
            this.init();
            this.addAvatar(res.data.avatar_url, cc.Tools.userInfo.grade_id);
            //判断缓存的哪个激励视频
            this.getAd();
            // 显示冻结红包的进度条
            let freezenBtn = this.content.getChildByName("btn_layer").getChildByName("btn_3");
            let freezenRate = cc.Tools.userInfo.active_rate.split("|");
            let freezenBar = freezenBtn.getChildByName("bar").getComponent(cc.ProgressBar);
            freezenBar.progress = Number(freezenRate[0]) / Number(freezenRate[1]);
            freezenBtn.getChildByName("text").getComponent(cc.Label).string = `${freezenRate[0]}/${freezenRate[1]}`;
            if (freezenRate[0] === freezenRate[1]) {
                freezenBtn.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(0.1, 30), cc.rotateTo(0.1, 0), cc.rotateTo(0.1, -30), cc.rotateTo(0.1, 0), cc.delayTime(2))))
            }
            // 增加一个定时器 一定时间没有看视频 主动弹出视频
            if (cc.sys.localStorage.getItem("showBtn") == 100) {
                this.schedule(() => {
                    cc.Tools.sendRequest("AdIntervalShow", "GET", {}).then((res) => {
                        if (res.data.is_show && this.barrageMove) {
                            cc.Tools.showTips(this.node, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                                cc.Tools.showJiliAd(12);
                            });
                        }
                    })
                }, cc.Tools.userInfo.ad_show_interval_second)
            }
        }).catch((err) => {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        })
    }
    /**
     * @param isReload ----是否加载游戏 
     */
    refreshUserInfo(isReload: boolean) {
        let sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then((res) => {
            this.addCustomBarrage(res.data);
            cc.Tools.userInfo = res.data;
            //将视频暴击加入弹幕中
            this.barrageMove = true;
            this.superTime = 0;
            if (isReload) {
                this.init();
            }
        }).catch((err) => {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        })
    }
    //像弹幕里面增加新的信息
    addCustomBarrage(res: any) {
        if (cc.Tools.userInfo.num_award_got < res.num_award_got) {
            //看了新视频 想弹幕数组中添加信息
            let indexRed = 0,
                indexCrit = 0,
                config = cc.Tools.ad.config;
            console.log("ad config ", config);
            for (let i = 0; i < config.length; i++) {
                let _config = config[i];
                if (res.num_award_got <= _config.num) {
                    indexRed = _config.num;
                    indexCrit = _config.rate;
                    break;
                }
            }
            let info = {}
            info["data"] = `第${indexRed}个红包,暴击${indexCrit}%（已领取${res.num_award_got}/${indexRed}）`;
            info["action"] = "tip";
            info["user"] = {};
            info["refer_user"] = {};
            info["user"].avatar = cc.Tools.userInfo.avatar_url;
            info["user"].grade_id = cc.Tools.userInfo.grade_id;
            this.barrageArr.unshift(info);

            let awrad: cc.Node = this.content.getChildByName("award_bar");
            let progress_bar: cc.Node = awrad.getChildByName("progress_bar");
            let bar: cc.ProgressBar = progress_bar.getComponent(cc.ProgressBar);
            bar.progress = Number((res.num_award_got / indexRed).toFixed(2));
            let lbl: cc.Label = progress_bar.getChildByName("lbl").getComponent(cc.Label);
            lbl.string = `${res.num_award_got}/${indexRed})`;
            let layout: cc.Node = awrad.getChildByName("layout");
            let layoutLbl: cc.RichText = layout.getChildByName("lbl").getComponent(cc.RichText);
            layoutLbl.string = `<color=#FFCA00>第</c><color=#FB5A38>${indexRed}</color><color=#FFCA00>红包翻</c><color=#FB5A38>${indexCrit}%</color><color=#FFCA00>倍暴击奖励</c>`;
            layout.scaleX = 0;
            layout.stopAllActions();
            cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
        }
    }
    //初始化award
    initAward() {
        let indexRed = 0,
            indexCrit = 0,
            config = cc.Tools.ad.config;
        for (let i = 0; i < config.length; i++) {
            let _config = config[i];
            if (cc.Tools.userInfo.num_award_got <= _config.num) {
                indexRed = _config.num;
                indexCrit = _config.rate;
                break;
            }
        }
        let awrad: cc.Node = this.content.getChildByName("award_bar");
        let progress_bar: cc.Node = awrad.getChildByName("progress_bar");
        let bar: cc.ProgressBar = progress_bar.getComponent(cc.ProgressBar);
        bar.progress = Number((cc.Tools.userInfo.num_award_got / indexRed).toFixed(2));
        let lbl: cc.Label = progress_bar.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = `${cc.Tools.userInfo.num_award_got}/${indexRed}`;

        let layout: cc.Node = awrad.getChildByName("layout");
        let layoutLbl: cc.RichText = layout.getChildByName("lbl").getComponent(cc.RichText);
        layoutLbl.string = `<color=#FFCA00>第</c><color=#FB5A38>${indexRed}</color><color=#FFCA00>红包翻</c><color=#FB5A38>${indexCrit}%</color><color=#FFCA00>倍暴击奖励</c>`;
        layout.scaleX = 0;
        layout.stopAllActions();
        cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
    }
    /**
     * 刷新钱的接口
    */
    refreshWallet() {
        let sendData = {};
        cc.Tools.sendRequest("Wallet", "GET", sendData).then((res) => {
            console.log("cocos----刷新现有金钱----", JSON.stringify(res));
            cc.Tools.wallet.amount = res.data.amount;
            cc.Tools.wallet.save_amount = res.data.save_amount;
            cc.Tools.wallet.save_freeze_amount = res.data.save_freeze_amount;
            self.cashInfo.getChildByName("text").getComponent(cc.Label).string = res.data.amount;
            if (self.lotteryLayer) {
                self.lotteryLayer.getChildByName("wrap").getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
            }
            if (self.stealLayer) {
                let wrap: cc.Node = self.stealLayer.getChildByName("wrap");
                self.stealLayer.getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
                let down: cc.Node = wrap.getChildByName("down");
                let todayCash: cc.Node = down.getChildByName("today_cash");
                let todayCashText: cc.Label = todayCash.getChildByName("text").getComponent(cc.Label);
                todayCashText.string = res.data.save_amount;

                let tomorrowCash: cc.Node = down.getChildByName("tomorrow_cash");
                let tomorrowCashText: cc.Label = tomorrowCash.getChildByName("text").getComponent(cc.Label);
                tomorrowCashText.string = res.data.save_freeze_amount;
            }
        })
    }

    /**
     * 预加载prefab
     */
    preloadPrefab() {
        cc.resources.preload('Prefab/getCash', cc.Prefab);
        cc.resources.preload('Prefab/setting', cc.Prefab);
        cc.resources.preload('Prefab/lottery', cc.Prefab);
        cc.resources.preload('Prefab/popSuccess', cc.Prefab);
        cc.resources.preload('Prefab/popDelete', cc.Prefab);
        cc.resources.preload('Prefab/ticket', cc.Prefab);
        cc.resources.preload('Prefab/super', cc.Prefab);
        cc.resources.preload('Prefab/sign', cc.Prefab);
        cc.resources.preload('Prefab/stealMark', cc.Prefab);
        cc.resources.preload('Prefab/secretLayer', cc.Prefab);
        cc.resources.preload('Prefab/popNew', cc.Prefab);
    }
    loadPrefab(url: string) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(url, cc.Prefab, function (err, prefab) {
                if (prefab) {
                    resolve(prefab);
                } else {
                    reject(err);
                }
            });
        })
    }
    start() {
        // 注册点击事件
        this.registerEvent();
    }
    registerEvent() {
        let btnLayer = this.content.getChildByName("btn_layer");
        let btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"]
        for (let i = 1; i <= 8; i++) {
            let btn = btnLayer.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        let secretBtn = cc.find("Canvas/secret");
        secretBtn.on(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this)

        let freshBtn = cc.find("Canvas/lose/fresh_btn")
        freshBtn.on(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
    }
    removeEvent() {
        let btnLayer = this.content.getChildByName("btn_layer");
        let btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"]
        for (let i = 1; i <= 8; i++) {
            let btn = btnLayer.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        let secretBtn = cc.find("Canvas/secret");
        secretBtn.off(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this);
        let freshBtn = cc.find("Canvas/lose/fresh_btn")
        freshBtn.off(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
    }
    touchSnow() {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, `<b><color=#ffffff>点击太频繁</c></b>`);
            return;
        } else {
            cc.Tools.lock = true;
            setTimeout(() => {
                cc.Tools.lock = false;
            }, 3000)
        }
        cc.Tools.dot("click_snowman_1");
        cc.Tools.showTips(this.node, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
            cc.Tools.showJiliAd(3);
        });
    }
    //方向 1是现金红包 2是存钱罐
    showPacket(obj: any) {
        let end = obj.dir === 1 ? this.cashInfo : this.content.getChildByName("btn_layer").getChildByName("btn_4")
        this.showPacketAnim(10, 0.01, 200, cc.v3(360, 640), end, () => {
            cc.Tools.Event.emit("refreshWallet");
            if (obj.videoType === 4) {
                cc.Tools.emitEvent("init", true);
            } else if (obj.videoType === 9) {
                cc.Tools.emitEvent("init", false);
            }
        })
    }
    showSecretLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.showSecretTimes++;
        if (this.showSecretTimes >= 3) {
            this.showSecretTimes = 0;
            this.barrageMove = false;
            if (!this.popSecretLayer) {
                this.loadPrefab('Prefab/secretLayer').then((prefab: cc.Prefab) => {
                    let layer = cc.instantiate(prefab);
                    self.popSecretLayer = layer;
                    self.node.addChild(layer);
                    self.popSecretLayer.active = true;
                })
            } else {
                this.popSecretLayer.active = true;
            }
        }
    }
    touchRed() {
        if (cc.Tools.userInfo.up_level_num_not_get) {
            // 点击加锁
            if (cc.Tools.lock) {
                cc.Tools.showTips(this.node, `<b><color=#ffffff>点击太频繁</c></b>`);
                return;
            } else {
                cc.Tools.lock = true;
                setTimeout(() => {
                    cc.Tools.lock = false;
                }, 3000)
            }
            cc.Tools.dot("click_clickredbag_1");
            if (cc.Tools.userInfo.new_free_level_times) {
                let sendData = {
                    type: 4,
                    ts: new Date().getTime()
                };
                cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                    cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 4 });
                });
            } else {
                cc.Tools.showTips(this.node, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                    cc.Tools.showJiliAd(4);
                });
            }
        }
    }
    /**
    * popSuccess界面
    */
    showPopSuccessLayer() {
        this.scheduleOnce(() => {
            this.lock = false;
            this.barrageMove = false;
            cc.audioEngine.play(this.effectAudio[4], false, 1);
            if (!this.popSuccessLayer) {
                this.loadPrefab('Prefab/popSuccess').then((prefab: cc.Prefab) => {
                    let layer = cc.instantiate(prefab);
                    self.popSuccessLayer = layer;
                    self.node.addChild(layer);
                    let js = self.popSuccessLayer.getComponent("PopSuccess");
                    let num;
                    if (this.curScore > 6000) {
                        num = 3
                    } else if (this.curScore < 6000 && this.curScore > 3000) {
                        num = 2
                    } else {
                        num = 1
                    }
                    self.popSuccessLayer.active = true;
                    js.setStar(num)
                })
            } else {
                // this.popSuccessLayer.active = true;
                let js = self.popSuccessLayer.getComponent("PopSuccess");
                let num;
                if (this.curScore > 6000) {
                    num = 3
                } else if (this.curScore < 6000 && this.curScore > 3000) {
                    num = 2
                } else {
                    num = 1
                }
                self.popSuccessLayer.active = true;
                js.setStar(num)
            }

        }, 0.5)
    }
    /**
   * popDelete界面
   * @param  type 1---气泡红包 2---消除红包
   * @param videoType ---视频类型
   */
    showPopDeleteLayer(type: number, videoType: number) {
        this.scheduleOnce(() => {
            this.lock = false;
            this.barrageMove = false;
            cc.audioEngine.play(this.effectAudio[3], false, 1);
            if (!this.popDeleteLayer) {
                this.loadPrefab('Prefab/popDelete').then((prefab: cc.Prefab) => {
                    let layer = cc.instantiate(prefab);
                    self.popDeleteLayer = layer;
                    self.node.addChild(layer);
                    self.popDeleteLayer.active = true;
                    let title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                    title.spriteFrame = this.popDeleteType[type - 1]
                    cc.Tools.emitEvent("videoType", videoType);
                })
            } else {
                this.popDeleteLayer.active = true;
                let title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                title.spriteFrame = this.popDeleteType[type - 1]
                cc.Tools.emitEvent("videoType", videoType);
            }

        }, 0.5)
    }
    /**
     * 签到奖励
     */
    showSignLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.signLayer) {
            this.loadPrefab('Prefab/sign').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.signLayer = layer;
                self.node.addChild(layer);
                self.signLayer.active = true;
            })
        } else {
            this.signLayer.active = true;
        }
    }
    /**
     * 新手奖励
     */
    showNewLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popNewLayer) {
            this.loadPrefab('Prefab/popNew').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.popNewLayer = layer;
                self.node.addChild(layer);
                self.popNewLayer.active = true;
            })
        } else {
            this.popNewLayer.active = true;
        }
    }
    /**
     * 超级红包界面
     */
    showSuperLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popSuperLayer) {
            this.loadPrefab('Prefab/super').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.popSuperLayer = layer;
                self.node.addChild(layer);
                self.popSuperLayer.active = true;
            })
        } else {
            this.popSuperLayer.active = true;
        }
    }
    /**
    * ticket界面
    * @param type 来自几级界面
    */
    showTicketLayer(ticketInfo: ticketInfo) {
        console.log("cocos--获得奖励的信息---", JSON.stringify(ticketInfo));
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.ticketLayer) {
            this.loadPrefab('Prefab/ticket').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.ticketLayer = layer;
                self.ticketLayer.zIndex = 9999;
                self.node.addChild(layer);
                self.ticketLayer.active = true;
                let ticketJs = this.ticketLayer.getComponent("Ticket");
                ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType)
            })
        } else {
            this.ticketLayer.active = true;
            let ticketJs = this.ticketLayer.getComponent("Ticket");
            ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType);
        }
        // this.refreshUserInfo(false);
    }
    /**
     * 
    */
    showTenTicketLayer(ticketInfo: ticketInfo) {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.ticketTenLayer) {
            this.loadPrefab('Prefab/tenTicket').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.ticketTenLayer = layer;
                self.ticketTenLayer.zIndex = 9999;
                self.node.addChild(layer);
                self.ticketTenLayer.active = true;
                let ticketJs = this.ticketTenLayer.getComponent("TenTicket");
                ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType)
            })
        } else {
            this.ticketTenLayer.active = true;
            let ticketJs = this.ticketTenLayer.getComponent("TenTicket");
            ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType)
        }
    }
    /**
    * 解冻红包界面
    */
    showUnFreezeLayer(e) {
        let target = e.target;
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_icetable_1")
        // 解冻红包新需求
        cc.Tools.sendRequest("ActiveInfo", "GET", {}).then((res) => {
            let msg = cc.find("Canvas/msg");
            msg.active = true;
            msg.opacity = 0;
            let _msg = msg.getChildByName("lbl").getComponent(cc.Label);
            _msg.string = res.data.tip;
            msg.stopAllActions();
            msg.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(() => {
                msg.active = false;
            })));
            if (res.data.freeze_amount > 0) {
                // this.showPacket();
                cc.Tools.emitEvent("getTicket", { ticket: res.data.freeze_amount, add: 0, type: 1, videoType: 1 });
                target.stopAllActions();
                target.angle = 0;
            }
        });
    }
    /**
     * 存钱罐界面
     */
    showSaveCashLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_Piggybank_1")
        if (!this.saveCashLayer) {
            this.loadPrefab('Prefab/saveCash').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.saveCashLayer = layer;
                self.node.addChild(layer);
                let js = self.saveCashLayer.getComponent("SaveCash");
                js.isFirstShow = true;
                self.saveCashLayer.active = true;
            })
        } else {
            this.saveCashLayer.active = true;
        }
    }
    /**
    * 设置界面
    */
    showSetLayer() {
        this.barrageMove = false;
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.settingLayer) {
            this.loadPrefab('Prefab/setting').then((prefab) => {
                let layer = cc.instantiate(prefab);
                self.settingLayer = layer;
                self.node.addChild(layer);
                self.settingLayer.active = true;
            })
        } else {
            this.settingLayer.active = true;
        }
    }
    /**
     * 提现界面
     */
    showGetCashLayer() {
        this.barrageMove = false;
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_cash_1")
        if (!this.getCashLayer) {
            this.loadPrefab('Prefab/getCash').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.getCashLayer = layer;
                self.node.addChild(layer);
                self.getCashLayer.active = true;
            })
        } else {
            this.getCashLayer.active = true;
        }
    }
    /**
     * 转盘界面
     */
    showLotteryleLayer() {
        this.barrageMove = false;
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_turntable_1");
        let btnLayer = this.content.getChildByName("btn_layer");
        let boxBtn = btnLayer.getChildByName("btn_5");
        boxBtn.getChildByName("red").active = false;
        if (!this.lotteryLayer) {
            this.loadPrefab('Prefab/lottery').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.lotteryLayer = layer;
                self.node.addChild(layer);
                self.lotteryLayer.active = true;
            })
        } else {
            this.lotteryLayer.active = true;
        }
    }
    /**
     * 大乱斗界面
    */
    showStealLayer() {
        this.barrageMove = false;
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_turntable_1")
        if (!this.stealLayer) {
            this.loadPrefab('Prefab/steal').then((prefab: cc.Prefab) => {
                let layer = cc.instantiate(prefab);
                self.stealLayer = layer;
                self.node.addChild(layer);
                self.stealLayer.active = true;
            })
        } else {
            this.stealLayer.active = true;
        }
    }
    // todo
    clickRed(e: any) {
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        if (!this.canClickRed) {
            return;
        }
        this.clickRedNumber++;
        let bar = e.target.getChildByName("progress").getChildByName("bar");
        bar.width = this.clickRedNumber >= 6 ? 16 * 6 : this.clickRedNumber * 16;
        // 当天首次点击
        if (cc.Tools.userInfo.is_day_first_click_award) {
            let sendData = {};
            cc.Tools.sendRequest("FirstClickAward", "POST", sendData).then((res) => {
                cc.Tools.userInfo.is_day_first_click_award = false;
                this.showPopDeleteLayer(1, 1);
            })
            return;
        }
        // 
        if (!this.startClickTime) {
            this.startClickTime = new Date().getTime();
        } else {
            let newTime = new Date().getTime();
            let dt = newTime - this.startClickTime;
            this.clickRedArr.push(dt);
            this.startClickTime = newTime;
        }
        if (this.clickRedArr.length === 3) {
            // 当累计三次之后就行运算 当值小于800 说明此时连点了3次 并播放激励视频
            var total = this.clickRedArr.reduce(
                (acc, cur) => acc + cur,
                0
            );
            if (total < 800) {
                // 播放激励视频
                this.clickRedArr = [];
                this.startClickTime = 0;
                if (this.clickRedNumber < 6) {
                    cc.Tools.showTips(this.node, `<b><color=#ffffff>看完视频 领取更多红包券</c></b>`).then(() => {
                        cc.Tools.showJiliAd(7);
                    });
                    return;
                }
            } else {
                this.clickRedArr.shift();
            }
        }
        if (this.clickRedNumber >= 6) {
            let sendData = {};
            cc.Tools.sendRequest("ClickAwardStat", "GET", sendData).then((res) => {
                this.canClickRed = false;
                if (res.data.free_times) {
                    let sendData = {
                        type: 1,
                        ts: new Date().getTime()
                    }
                    cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                        this.showTicketLayer({ ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 1 });
                        this.clickRedNumber = 0;
                        bar.width = this.clickRedNumber >= 6 ? 16 * 6 : this.clickRedNumber * 16;
                    })
                } else {
                    this.showPopDeleteLayer(1, 1);
                    this.clickRedNumber = 0;
                    bar.width = this.clickRedNumber >= 6 ? 16 * 6 : this.clickRedNumber * 16;
                }
            });
        }
    }
    canClickRedFunc() {
        this.canClickRed = true;
    }
    touchGround(event: any) {
        if (this.lock) {
            return
        }
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        this.countTime = new Date().getTime();
        let windowSize = cc.winSize;
        let x = event.getLocationX()
        let y = event.getLocationY()
        this.Delete_num = 0
        this.clickPos = cc.v3(x, y);
        if (y > windowSize.height / 2 - 370 - this.vh && y < windowSize.height / 2 + 370 - this.vh) {
            let i = this.ToIJ(x, y).x
            let j = this.ToIJ(x, y).y
            this.Delete_num = 0;
            this.deletePosArr = [];
            let color = this.a[i][j];
            this.lock = true;
            this.Touch_block(i, j, this.a[i][j]);
            // todo
            if (this.Delete_num === 1) {
                this.a[i][j] = color;
                this.lock = false;
                return
            } else {
                this.handleDeleteBlock(false);
            }
        }
    }
    //设置scoreinfo
    setScoreInfo(score: number) {
        let scoreNode = this.scoreInfo.getChildByName("score");
        let scoreLbl = scoreNode.getChildByName("text").getComponent(cc.Label);
        scoreLbl.string = score + "分";
        //加进度条 进度条满分6000
        let progressBar = this.scoreInfo.getChildByName("progress").getComponent(cc.ProgressBar);
        //进度条大小取值0-1 为一位小数
        let val = (Math.floor(score * 100 / 6000)) / 100 > 1 ? 1 : (Math.floor(score * 100 / 6000)) / 100;
        // progressBar.progress = val
        // scoreNode.x = -150+390*val;
        cc.tween(progressBar).to(0.1, { progress: val }).start();
        cc.tween(scoreNode).to(0.1, { x: -150 + 390 * val }).start();
        //根据score判断星数
        for (let i = 1; i <= 3; i++) {
            let star = this.scoreInfo.getChildByName("star_" + i);
            let activeNode = star.getChildByName("active");
            let unActiveNode = star.getChildByName("unActive");
            unActiveNode.active = true;
            activeNode.active = false;
            if (score > 3000 * (i - 1)) {
                activeNode.active = true;
            }
        }
    }
    /**
     * 初始化关卡
     */
    init() {
        this.ground.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.curScore = 0;
        this.clickOnce = true;
        this.addTicket = 0;
        let levelLbl = this.scoreInfo.getChildByName("text").getComponent(cc.Label);
        levelLbl.string = `关卡：${cc.Tools.userInfo.level}`
        this.setScoreInfo(this.curScore);
        this.background.destroyAllChildren();
        this.blockBackground.destroyAllChildren();
        let blockNullColor = "#38537E";
        //先随机生成一个数组[1-5];
        // let arr = [1, 2, 3, 4, 5];
        // let newArr = [];
        // for (let i = 0; i < 3; i++) {
        //     let len = arr.length;
        //     let val = Math.floor(Math.random() * len);
        //     newArr.push(arr[val]);
        //     cc.Tools.remove(arr, arr[val]);
        // }
        //在0-99之间随机两个数
        let _arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let _arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        let _newArr = [];
        for (let i = 0; i < 2; i++) {
            let key = [];
            let len1 = _arr1.length;
            let val1 = Math.floor(Math.random() * len1);
            key.push(_arr1[val1]);
            cc.Tools.remove(_arr1, _arr1[val1]);

            let len2 = _arr2.length;
            let val2 = Math.floor(Math.random() * len2);
            key.push(_arr2[val2]);
            cc.Tools.remove(_arr2, _arr2[val2]);
            _newArr.push(key);
        }
        for (let i = 0; i < 10; i++) {
            this.a[i] = []
            this.b[i] = []
            for (let j = 0; j < 10; j++) {
                let special = false;
                for (let k = 0; k < _newArr.length; k++) {
                    let _x = _newArr[k][0];
                    let _y = _newArr[k][1];
                    if (i === _x && j === _y) {
                        special = true;
                        cc.Tools.remove(_newArr, _newArr[k]);
                    }
                }
                //    this.a[i][j] = newArr[Math.ceil(Math.random() * this.difficulty) - 1]
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty)
                let blockNull = cc.instantiate(this.blockNull)
                blockNull.parent = this.blockBackground || this.node
                blockNull.setPosition(this.ToXY(i, j))
                blockNull.color = new cc.Color().fromHEX(blockNullColor);
                if (blockNullColor === "#38537E") {
                    blockNullColor = "#344F7A"
                } else {
                    blockNullColor = "#38537E"
                }
                let node = null;
                switch (this.a[i][j]) {
                    case 1:
                        node = cc.instantiate(this.red)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 2:
                        node = cc.instantiate(this.green)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 3:
                        node = cc.instantiate(this.yellow)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 4:
                        node = cc.instantiate(this.blue)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 5:
                        node = cc.instantiate(this.pink)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))

                }
                this.b[i][j] = node;
                if (special) {
                    let pop = cc.instantiate(this.pop_red);
                    pop.getComponent(cc.Sprite).spriteFrame = this.tiger[this.a[i][j]-1];
                    node.addChild(pop);
                    node.special = true;
                }
            }
            if (blockNullColor === "#344F7A") {
                blockNullColor = "#38537E"
            } else {
                blockNullColor = "#344F7A"
            }
        }
    }
    ToXY(x: number, y: number) {
        return cc.v2(-(370 - (36 + y * 74)), 370 - (36 + x * 74))
    }
    ToIJ(i: number, j: number) {
        let windowSize = cc.winSize;
        if (j < windowSize.height / 2 - 370 - this.vh || j > windowSize.height / 2 + 370 - this.vh) {
            return
        }
        else {

            i = Math.floor((i - this.difficulty) / 74)
            j = Math.floor((windowSize.height / 2 + 375 - this.vh - j) / 74)
            return {
                x: j,
                y: i
            }
        }
    }
    goodFunction(num: number) {
        if (num === 2) {
            cc.audioEngine.play(this.effectAudio[5], false, 1);
        }
        if (num === 3) {
            cc.audioEngine.play(this.effectAudio[6], false, 1);
        }
        if (num === 4) {
            cc.audioEngine.play(this.effectAudio[7], false, 1);
        }
        if (num === 5) {
            cc.audioEngine.play(this.effectAudio[8], false, 1);
        }
        if (num >= 5 && num < 7) {
            cc.audioEngine.play(this.effectAudio[9], false, 1);
            let good = cc.instantiate(this.good)
            this.background.addChild(good);
            cc.tween(good).by(1, { y: 200 }).call(() => {
                good.destroy()
            }).start()
        }
        if (num >= 7 && num < 9) {
            cc.audioEngine.play(this.effectAudio[10], false, 1);
            let great = cc.instantiate(this.great)
            this.background.addChild(great);
            cc.tween(great).by(0.5, { y: 200 }).call(() => {
                great.destroy()
            }).start()
        }
        if (num >= 9 && num < 12) {
            cc.audioEngine.play(this.effectAudio[11], false, 1);
            let excellent = cc.instantiate(this.excellent)
            this.background.addChild(excellent);
            cc.tween(excellent).by(0.5, { y: 200 }).call(() => {
                excellent.destroy()
            }).start()
        }
        if (num >= 12 && num < 15) {
            cc.audioEngine.play(this.effectAudio[12], false, 1);
            let amazing = cc.instantiate(this.amazing)
            this.background.addChild(amazing);
            cc.tween(amazing).by(0.5, { y: 200 }).call(() => {
                amazing.destroy()
            }).start()
        }
        if (num >= 15) {
            cc.audioEngine.play(this.effectAudio[13], false, 1);
            let unbelievable = cc.instantiate(this.unbelievable)
            this.background.addChild(unbelievable);
            cc.tween(unbelievable).by(0.5, { y: 200 }).call(() => {
                unbelievable.destroy()
            }).start()
        }
    }
    Delete_block() {
        for (let j = 0; j < 10; j++) {
            let num = 0
            for (let i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    let action = cc.moveBy(0.3, 0, -num * 74)
                    this.b[i][j].runAction(action)
                    // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(0, -num * 74) }).start();
                    this.a[i + num][j] = this.a[i][j]
                    this.a[i][j] = 0
                    this.b[i + num][j] = this.b[i][j]
                    this.b[i][j] = null
                    continue
                }
                if (this.a[i][j] == 0) {
                    num = num + 1
                }

            }
        }

        let _count = 0
        for (let j = 0; j < 10; j++) {

            if (this.a[9][j] > 0 && _count > 0) {

                for (let i = 0; i < 10; i++) {
                    if (this.a[i][j] > 0) {
                        // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(-count * 74, 0) }).start();
                        var action = cc.moveBy(0.3, -_count * 74, 0)
                        this.b[i][j].runAction(action)
                        this.a[i][j - _count] = this.a[i][j]
                        this.a[i][j] = 0
                        this.b[i][j - _count] = this.b[i][j]
                        this.b[i][j] = null
                    }

                }
                continue
            }
            if (this.a[9][j] == 0) {
                _count++
            }
        }
    }
    // 老写法
    Touch_block(i: number, j: number, k: number) {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0
            this.Delete_num++
            let obj = {
                "i": i,
                "j": j,
                "k": k
            }
            //delete
            let arr = [];
            arr.push(obj);
            this.splitToArr(arr);
        }
    }
    // 分成数组

    splitToArr(arr) {
        let _arr = [];
        if (arr.length > 0) {
            this.deletePosArr.push(arr);
            for (let t = 0; t < arr.length; t++) {
                let data = arr[t];
                let i = data.i;
                let j = data.j;
                let k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.Delete_num++;
                        let obj = {
                            "i": i - 1,
                            "j": j,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (i != 9) {
                    if (this.a[i + 1][j] == k && k > 0) {
                        this.a[i + 1][j] = 0;
                        this.Delete_num++;
                        let obj = {
                            "i": i + 1,
                            "j": j,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (j != 0) {
                    if (this.a[i][j - 1] == k && k > 0) {
                        this.a[i][j - 1] = 0;
                        this.Delete_num++;
                        let obj = {
                            "i": i,
                            "j": j - 1,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
                if (j != 9) {
                    if (this.a[i][j + 1] == k && k > 0) {
                        this.a[i][j + 1] = 0;
                        this.Delete_num++;
                        let obj = {
                            "i": i,
                            "j": j + 1,
                            "k": k
                        }
                        _arr.push(obj);
                    }
                }
            }
            this.splitToArr(_arr);
        }
    }
    // 将要delete的数据进行处理
    handleDeleteBlock(isOver: boolean) {
        //计数
        if (!this.deletePosArr.length) {
            this.lock = false;
            return;
        }
        this._count = 0;
        this.isOverGame = isOver;
        this.schedule(this.deleteBlockCb, 0.1, this.deletePosArr.length - 1);
        if (!isOver) {
            //向服务器发送激活
            let isActive = cc.sys.localStorage.getItem("active");
            if (!isActive) {
                cc.Tools.sendRequest("UserLive", "POST", {
                    "ts": new Date().getTime()
                }).then((res) => {
                    cc.sys.localStorage.setItem("active", true);
                    console.log("cocos----激活成功");
                })
            }
            // 增加金钱特效
            let addInfo = this.cashInfo.getChildByName("add_info");
            this.addTicket += this.Delete_num;
            let num = addInfo.getChildByName("num").getComponent(cc.Label);
            num.string = "" + this.Delete_num;
            addInfo.stopAllActions();
            addInfo.opacity = 0;
            addInfo.y = -40;
            addInfo.runAction(cc.sequence(cc.fadeIn(0.1), cc.moveBy(0.5, 0, 40), cc.fadeOut(0.5)));
            this.showPacketAnim(3, 0.01, 100, this.clickPos, this.cashInfo, () => {
                this.cashInfo.getChildByName("text").getComponent(cc.Label).string = cc.Tools.userInfo.amount + this.addTicket;
            })
        }
    }
    deleteBlockCb() {
        // let count = 0;
        let arr = this.deletePosArr[this._count];
        for (let t = 0; t < arr.length; t++) {
            let data = arr[t];
            let i = data.i;
            let j = data.j;
            let k = data.k;
            let node = cc.instantiate(this.desEffect)
            node.parent = this.background || this.node
            node.setPosition(this.ToXY(i, j))
            let CustomParticle = node.getComponent(cc.ParticleSystem);
            // let color = this.getColorBlock(k);
            // CustomParticle.startColor = new cc.Color().fromHEX(color);
            // CustomParticle.startColorVar = new cc.Color(0, 0, 0)
            // CustomParticle.endColor = new cc.Color().fromHEX(color);
            // CustomParticle.endColorVar = new cc.Color(0, 0, 0)
            CustomParticle.spriteFrame = this.liziBlock[k - 1];
            CustomParticle.resetSystem();
            if (this.b[i][j].special) {
                this.special = true;
            }
            this.b[i][j].destroy()
            this.b[i][j] = null
        }
        if (this._count === this.deletePosArr.length - 1) {
            this.afterDeleteBlock()
        }
        this._count++;
    }
    afterDeleteBlock() {
        this.Delete_block();
        this.unschedule(this.deleteBlockCb);
        // 获取分数 getScore
        if (this.isOverGame) {
            this.setScore(true);
            return;
        } else {
            this.setScore(false);
        }
        if (this.clickOnce) {
            this.clickOnce = false;
            this.floaterMove();
        }
        if (this.special) {
            this.showPopDeleteLayer(2, 9);
            this.special = false;
            return;
        }
        if (this.Delete_num >= 12) {
            this.showPopDeleteLayer(2, 9);
        } else {
            let rdm = Math.floor(Math.random() * 4 + 5);
            if (this.Delete_num >= rdm) {
                this.clickNumber++;
                if (this.clickNumber >= 5) {
                    this.clickNumber = 0;
                    this.showPopDeleteLayer(2, 9);
                } else {
                    this.scheduleOnce(() => {
                        this.lock = false;
                    }, 0.5)
                }
            } else {
                this.scheduleOnce(() => {
                    this.lock = false;
                }, 0.5)
            }
        }
    }
    // 通过k的值返回色值
    getColorBlock(k: number): string {
        let color: string = null;
        switch (k) {
            case 1:
                // red
                color = "#DC5672"
                break;
            case 2:
                // green
                color = "#6EC46C"
                break;
            case 3:
                // pink
                color = "#BC63F0"
                break;
            case 4:
                //blue
                color = "#4CA8EA"
                break;
            case 5:
                // yellow
                color = "#E7CB55"
                break;
        }
        return color
    }
    setScore(isClear: boolean) {
        if (isClear) {
            cc.tween(this.node).delay(0.5).call(() => {
                this.updateLevel();
            }).start()
            this.scheduleOnce(() => {
                this.showPopSuccessLayer();
            }, 2)
            return;
        } else {
            // 如果当前没有方块
            let iskong = true;
            for (let i = 0; i < 10; i++) {
                for (let j = 0; j < 10; j++) {
                    if (this.a[i][j]) {
                        iskong = false;
                    }
                }
            }
            if (iskong) {
                cc.tween(this.node).delay(0.5).call(() => {
                    this.updateLevel();
                }).start()
                this.scheduleOnce(() => {
                    this.showPopSuccessLayer();
                }, 2)
                return;
            }
        }
        if (this.isEnd()) {
            // 增加积分 积分算法是
            // 剩余的方块
            this.deletePosArr = [];
            let arr = [];
            this.lock = true;
            this.ground.off(cc.Node.EventType.TOUCH_START, this.touchGround, this);
            this.scheduleOnce(() => {
                for (let i = 0; i < 10; i++) {
                    for (let j = 0; j < 10; j++) {
                        let k = this.a[i][j];
                        if (k) {
                            this.a[i][j] = 0
                            let obj = {
                                "i": i,
                                "j": j,
                                "k": k
                            }
                            arr.push(obj)
                        }
                    }
                }
                this.deletePosArr.push(arr);
                let len = this.Delete_num - 1;
                let score = this.targetScore - Math.pow(len, 2) * 10;
                this.curScore += score;
                this.setScoreInfo(this.curScore);
                this.handleDeleteBlock(true);
            }, 1)
        } else {
            // 增加积分 积分算法是 (消除数-1）的平方*10
            let len = this.Delete_num - 1
            let score = Math.pow(len, 2) * 10;
            this.curScore += score;
            this.setScoreInfo(this.curScore);
            this.goodFunction(this.Delete_num);
        }
    }
    updateLevel() {
        // 像服务器发请求过关
        let sendData = {
            "score": this.curScore,
            "ts": new Date().getTime(),//时间戳
            "level": cc.Tools.userInfo.level,
            "award": this.addTicket,
        };
        let data = cc.Tools.createSignData(sendData);
        cc.Tools.sendRequest("UpdateLevel", "POST", data).then((res) => {
            // 刷新一下cc.Tools.userInfo.new_free_level_times
            cc.Tools.userInfo.new_free_level_times = res.data.new_free_level_times;
            cc.Tools.showTips(this.node);
        });
    }
    isEnd() {
        let arr = this.a;
        for (let i = 0; i < 10; i++) {
            for (let j = 0; j < 10; j++) {
                let val = this.a[i][j];
                let left = -1;
                let right = -1;
                let up = -1;
                let down = -1;
                if (val) {
                    // 左右
                    if (j - 1 >= 0) {
                        if (this.a[i][j - 1]) {
                            left = this.a[i][j - 1]
                        }
                    }
                    if (j + 1 <= 9) {
                        if (this.a[i][j + 1]) {
                            right = this.a[i][j + 1]
                        }
                    }
                    if (i - 1 >= 0) {
                        if (this.a[i - 1][j]) {
                            up = this.a[i - 1][j]
                        }
                    }
                    if (i + 1 <= 9) {
                        if (this.a[i + 1][j]) {
                            down = this.a[i + 1][j]
                        }
                    }
                    if (val === left || val === right || val === up || val === down) {
                        return false;
                    }
                } else {
                    continue;
                }
            }
        }
        return true;
    }
    // 让浮球显示并浮动 点击 看激励视频
    floaterMove() {
        let floaterLayer = this.content.getChildByName("floater_layer");
        let val = cc.sys.localStorage.getItem("showBtn");
        if(val==100){
            if (floaterLayer.active === false) {
                floaterLayer.active = true;
            }
            for (let i = 1; i <= 3; i++) {
                let floater = floaterLayer.getChildByName("floater_" + i);
                floater.active = true;
                cc.Tools.popAnim(floater, 10);
                floater.on(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
            }
        }
    }
    // 专属浮球的事件 点击浮球观看视频 之后浮球消失并且清除事件
    clickFloate(e) {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, `<b><color=#ffffff>点击太频繁</c></b>`);
            return;
        } else {
            cc.Tools.lock = true;
            setTimeout(() => {
                cc.Tools.lock = false;
            }, 3000)
        }
        let target = e.target
        cc.Tools.dot("click_Floatredbag_1")
        cc.Tools.showJiliAd(2);
        // this.scheduleOnce(() => {
        target.active = false;
        // target.off(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
        // target.destroy();
        // target = null;
        // }, 1)
    }
    // update (dt) {}
    /**
    * 金币飞溅
    * 
    * @param {cc.Vec2} c 实例数量
    * @param {number} nt 实例时间
    * @param {number} [randomScope=80] 等分点的随机波动范围
    * @param {number} startPos 开始位置
    * @param {number} endNode 结束节点
    */
    showPacketAnim(c: number, nt: number, randomScope: number = 80, startPos: cc.Vec3 = cc.v3(0, 0), endNode: cc.Node, call: Function = null) {
        cc.audioEngine.play(this.effectAudio[14], false, 1);
        let newTime = nt;
        let tempPlayer = this.node.convertToNodeSpaceAR(startPos)

        let endP = endNode.getPosition()
        endP = this.node.convertToNodeSpaceAR(endNode.parent.convertToWorldSpaceAR(endP))
        let _count = 0;
        this.schedule(() => {
            let pre = cc.instantiate(this.packet);
            pre.parent = this.node;
            pre.setPosition(tempPlayer)
            let rannumx = cc.Tools.createRandom(-randomScope, randomScope);// (this.random2 - this.random1 + 1) + this.random1
            let rannumy = cc.Tools.createRandom(-randomScope, randomScope);//(this.random2 - this.random1 + 1) / 1.5 + this.random1 / 1.5)
            cc.tween(pre)
                .by(0.4, { position: cc.v3(rannumx, rannumy) }, { easing: 'quadOut' })
                .delay(0.3)
                .to(0.4, { position: cc.v3(endP) })
                .call(() => {
                    pre.destroy()
                    _count++
                    if (_count == c) {
                        // this.closeView()
                        // console.log("动画完毕")
                    }
                })
                .start()
        }, newTime, c)
        this.scheduleOnce(() => {
            call && call()
        }, 2)
    }
}
