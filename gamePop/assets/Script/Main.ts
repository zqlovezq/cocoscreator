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
    levelInfo: cc.Node = null;
    scoreInfo: cc.Node = null;
    tipsLayer: cc.Node = null;
    getCashLayer: cc.Node = null;
    settingLayer: cc.Node = null;
    saveCashLayer: cc.Node = null;
    unFreezeLayer: cc.Node = null;
    turntableLayer: cc.Node = null;
    popSuccessLayer: cc.Node = null;
    popDeleteLayer: cc.Node = null;
    ticketLayer: cc.Node = null;
    popSuperLayer: cc.Node = null;
    successSpine: cc.Node = null;
    scoreBar:cc.ProgressBar = null;
    percentBar:cc.ProgressBar = null;
    @property(cc.Prefab)
    packet: cc.Prefab = null;
    @property(cc.Prefab)
    blockNull: cc.Prefab = null;
    @property(cc.Prefab)
    red: cc.Prefab = null;
    @property(cc.Prefab)
    green: cc.Prefab = null;
    @property(cc.Prefab)
    pink: cc.Prefab = null;
    @property(cc.Prefab)
    blue: cc.Prefab = null;
    @property(cc.Prefab)
    yellow: cc.Prefab = null;
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
    popDeleteType = []
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
    private count = 0;
    onLoad() {
        // 初始化参数
        self = this;
        cc.Tools.screenAdapter();
        // cc.Tools.showTableScreen();
        cc.Tools.tableTimes = 0;
        cc.Tools.Event.on("init", this.refreshUserInfo, this);
        cc.Tools.Event.on("getTicket", this.showTicketLayer, this);
        cc.Tools.Event.on("time", this.refreshTime, this);
        cc.Tools.Event.on("cash", this.showGetCashLayer, this);
        cc.Tools.Event.on("clickRed", this.canClickRedFunc, this);
        cc.Tools.Event.on("showPacket", this.showPacket, this);
        this.ground = cc.find("Canvas/background");
        this.content = cc.find("Canvas/content");
        this.background = this.ground.getChildByName("blockColour");
        this.blockBackground = this.ground.getChildByName("blockNull");
        this.cashInfo = this.content.getChildByName("info_layer").getChildByName("cash_info");
        this.levelInfo = this.content.getChildByName("info_layer").getChildByName("level_info");
        this.scoreInfo = this.content.getChildByName("info_layer").getChildByName("score_info");
        this.successSpine = this.content.getChildByName("info_layer").getChildByName("tips_info").getChildByName("spine");
        this.tipsLayer = this.content.getChildByName("tips_layer");
        this.scoreBar = this.scoreInfo.getChildByName("progress").getComponent(cc.ProgressBar);
        this.percentBar = this.tipsLayer.getChildByName("progress").getComponent(cc.ProgressBar);
        this.countTime = new Date().getTime();
        // 预加载组建
        this.preloadPrefab();
        let isOld = cc.sys.localStorage.getItem("first")
        if (!isOld) {
            cc.sys.localStorage.setItem("first", true);
        }
        this.initUserInfo();
        // 增加一个计时器
        this.schedule(this.repeatFunc, 7.5);
    }
    // 主界面循环function
    repeatFunc() {
        // 每5秒检测玩家是否在主界面 并且没有行动
        let date = new Date().getTime();
        if (this.countTime && !this.lock) {
            if (date - this.countTime > 7500) {
                this.showSuperLayer();
            }
        }
        // 每5秒中滚屏
        this.unschedule(this.repeatFunc);
        let pop = this.tipsLayer.getChildByName("pop");
        pop.stopAllActions();
        cc.tween(pop).to(0.5, { scale: 1 }).delay(3).to(0.5, { scale: 0 }).call(() => {
            this.schedule(this.repeatFunc, 5)
        }).start();
    }
    refreshTime(time: number) {
        this.countTime = time;
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
    // 初始化userInfo
    // 今日第X个红包 +Y%额外奖励
    initUserInfo() {
        let sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then((res) => {
            cc.find("Canvas/lose").active = false;
            cc.Tools.userInfo = res.data;
            this.cashInfo.getChildByName("text").getComponent(cc.Label).string = this.handleNumber(cc.Tools.userInfo.amount / 10000) + "元";
            this.scoreInfo.getChildByName("times").getComponent(cc.Label).string = `${cc.Tools.userInfo.up_level_num_not_get}`;
            let tips = this.content.getChildByName("info_layer").getChildByName("tips_info")
            let lbl_1 = tips.getChildByName("mask").getChildByName("lbl_1").getComponent(cc.RichText);
            // let lbl_2 = tips.getChildByName("mask").getChildByName("lbl_2").getComponent(cc.RichText);
            if (cc.Tools.userInfo.level === 1) {
                lbl_1.string = "<b><color=#5bc5f5>通关第一关解锁  </c><color=#f55b5b>0.3元</color><color=#5bc5f5>无限次</c><color=#f55b5b>提现</color></b>"
            } else {
                let str = cc.Tools.userInfo.level_hint.split("|");
                lbl_1.string = `<b><color=#5bc5f5>通关第${str[0]}关  </c><color=#f55b5b>+${str[1]}%</color><color=#5bc5f5>额外红包奖励</c></b>`
                // let _str = cc.Tools.userInfo.num_hint.split("|");
                // lbl_2.string = `<b><color=#5bc5f5>今日第${_str[0]}个红包  </c><color=#f55b5b>+${_str[1]}%</color><color=#5bc5f5>额外奖励</c></b>`
            }
            let _str = cc.Tools.userInfo.num_hint.split("|");
            let text_1 = this.tipsLayer.getChildByName("text_1").getComponent(cc.Label);
            let text_2 = this.tipsLayer.getChildByName("text_2").getComponent(cc.Label);
            text_1.string = _str[0];
            text_2.string = `/${_str[1]}`
            this.percentBar.progress = Number(_str[0])/Number(_str[1]);
            let pop = this.tipsLayer.getChildByName("pop");
            let _lbl_1 = pop.getChildByName("lbl_1").getComponent(cc.RichText);
            let _lbl_2 = pop.getChildByName("lbl_2").getComponent(cc.RichText);
            _lbl_1.string = `<b><color=#5bc5f5>第</c><color=#f55b5b>${_str[1]}</color><color=#5bc5f5>个红包</c>`
            _lbl_2.string = `<b><color=#f55b5b>+${_str[2]}%倍</color><color=#5bc5f5>暴击奖励</c>`
            let btnLayer = this.content.getChildByName("btn_layer");
            // 红点
            if (cc.Tools.userInfo.amount >= 3000) {
                // 显示红点
                btnLayer.getChildByName("btn_4").getChildByName("red").active = true;
            } else {
                btnLayer.getChildByName("btn_4").getChildByName("red").active = false;
            }
            this.showSaveCashLayer();
            this.init();
        }).catch((err)=>{
            console.log("登陆失败");
            cc.find("Canvas/lose").active = true;
        })
    }
    /**
     * @param cb ----回调函数 
     * @param arg ----回调参数
     */
    refreshUserInfo(isReload: boolean) {
        let sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then((res) => {
            cc.find("Canvas/lose").active = false;
            cc.Tools.userInfo = res.data;
            this.cashInfo.getChildByName("text").getComponent(cc.Label).string = this.handleNumber(cc.Tools.userInfo.amount / 10000) + "元";
            this.scoreInfo.getChildByName("times").getComponent(cc.Label).string = `${cc.Tools.userInfo.up_level_num_not_get}`;
            let tips = this.content.getChildByName("info_layer").getChildByName("tips_info")
            let lbl_1 = tips.getChildByName("mask").getChildByName("lbl_1").getComponent(cc.RichText);
            // let lbl_2 = tips.getChildByName("mask").getChildByName("lbl_2").getComponent(cc.RichText);
            if (cc.Tools.userInfo.level === 1) {
                lbl_1.string = "<b><color=#5bc5f5>通关第一关解锁  </c><color=#f55b5b>0.3元</color><color=#5bc5f5>无限次</c><color=#f55b5b>提现</color></b>"
            } else {
                let str = cc.Tools.userInfo.level_hint.split("|");
                lbl_1.string = `<b><color=#5bc5f5>通关第${str[0]}关  </c><color=#f55b5b>+${str[1]}%</color><color=#5bc5f5>额外红包奖励</c></b>`
            }
            // tips
            let _str = cc.Tools.userInfo.num_hint.split("|");
            let text_1 = this.tipsLayer.getChildByName("text_1").getComponent(cc.Label);
            let text_2 = this.tipsLayer.getChildByName("text_2").getComponent(cc.Label);
            text_1.string = _str[0];
            text_2.string = `/${_str[1]}`;
            this.percentBar.progress = Number(_str[0])/Number(_str[1]);
            let pop = this.tipsLayer.getChildByName("pop");
            let _lbl_1 = pop.getChildByName("lbl_1").getComponent(cc.RichText);
            let _lbl_2 = pop.getChildByName("lbl_2").getComponent(cc.RichText);
            _lbl_1.string = `<b><color=#5bc5f5>第</c><color=#f55b5b>${_str[1]}</color><color=#5bc5f5>个红包</c>`
            _lbl_2.string = `<b><color=#f55b5b>+${_str[2]}%倍</color><color=#5bc5f5>暴击奖励</c>`

            let btnLayer = this.content.getChildByName("btn_layer");
            // 红点
            if (cc.Tools.userInfo.amount >= 3000) {
                // 显示红点
                btnLayer.getChildByName("btn_4").getChildByName("red").active = true;
            } else {
                btnLayer.getChildByName("btn_4").getChildByName("red").active = false;
            }
            if (isReload) {
                this.init();
            } else {
                // 刷新存钱罐显示tips
                let _pop = this.content.getChildByName("btn_layer").getChildByName("btn_2").getChildByName("pop");
                _pop.active = true;
                let _popLbl = _pop.getChildByName("lbl").getComponent(cc.Label);
                _popLbl.string = cc.Tools.userInfo.save_amount+cc.Tools.userInfo.save_freeze_amount;
                _pop.stopAllActions();
                cc.tween(_pop).to(0.5, { scale: 1 }).delay(3).to(0.5, { scale: 0 }).call(() => {
                    _pop.active = false;
                }).start();
            }
        }).catch((err)=>{
            console.log("登陆失败");
            cc.find("Canvas/lose").active = true;
        })
    }
    /**
     * 预加载prefab
     */
    preloadPrefab() {
        cc.resources.preload('Prefab/getCash', cc.Prefab);
        cc.resources.preload('Prefab/setting', cc.Prefab);
        cc.resources.preload('Prefab/saveCash', cc.Prefab);
        cc.resources.preload('Prefab/unFreeze', cc.Prefab);
        cc.resources.preload('Prefab/turntable', cc.Prefab);
        cc.resources.preload('Prefab/popSuccess', cc.Prefab);
        cc.resources.preload('Prefab/popDelete', cc.Prefab);
        cc.resources.preload('Prefab/ticket', cc.Prefab);
        cc.resources.preload('Prefab/super', cc.Prefab);
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
        // 给几个按钮注册事件
        let btnLayer = this.content.getChildByName("btn_layer");
        let btnType = ["showUnFreezeLayer", "showSaveCashLayer", "showSetLayer", "showGetCashLayer", "showTurntableLayer", "clickRed"]
        for (let i = 1; i <= 6; i++) {
            let btn = btnLayer.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        let spine = this.node.getChildByName("spine");
        spine.on(cc.Node.EventType.TOUCH_END, this.touchSnow, this);

        let redBtn = this.scoreInfo.getChildByName("icon");
        redBtn.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(0.1, 30), cc.rotateTo(0.1, 0), cc.rotateTo(0.1, -30), cc.rotateTo(0.1, 0), cc.delayTime(2))))
        redBtn.on(cc.Node.EventType.TOUCH_END, this.touchRed, this);
    }
    showPacket() {
        this.showPacketAnim(10, 0.01, 200, cc.v3(360, 640), this.cashInfo, () => { })
    }
    removeEvent() {
        let btnLayer = this.content.getChildByName("btn_layer");
        let layerType = ["showUnFreezeLayer", "showSaveCashLayer", "showSetLayer", "showGetCashLayer", "showTurntableLayer", "clickRed"]
        for (let i = 1; i <= 6; i++) {
            let btn = btnLayer.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this["show" + layerType[i - 1]], this);
        }
        let spine = this.node.getChildByName("spine");
        spine.off(cc.Node.EventType.TOUCH_END, this.touchSnow, this);

        let redBtn = this.scoreInfo.getChildByName("icon");
        redBtn.off(cc.Node.EventType.TOUCH_END, this.touchRed, this)
    }
    touchSnow() {
        cc.Tools.dot("click_snowman")
        cc.Tools.showJiliAd(10);
    }
    // todo
    touchRed() {
        if (cc.Tools.userInfo.up_level_num_not_get) {
            cc.Tools.dot("click_clickredbag");
            if (cc.Tools.userInfo.new_free_level_times) {
                let sendData = {
                    type: 4,
                    ts: new Date().getTime()
                };
                cc.Tools.sendRequest("NewAward", "POST", sendData).then((res) => {
                    cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 4 });
                });
            } else {
                cc.Tools.showJiliAd(4);
            }
        }
    }
    /**
    * popSuccess界面
    */
    showPopSuccessLayer() {
        this.scheduleOnce(() => {
            this.lock = false;
            cc.audioEngine.play(this.effectAudio[4], false, 1);
            if (!this.popSuccessLayer) {
                this.loadPrefab('Prefab/popSuccess').then((prefab) => {
                    let layer = cc.instantiate(prefab);
                    self.popSuccessLayer = layer;
                    self.node.addChild(layer);
                    self.popSuccessLayer.active = true;
                })
            } else {
                this.popSuccessLayer.active = true;
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
            cc.audioEngine.play(this.effectAudio[3], false, 1);
            if (!this.popDeleteLayer) {
                this.loadPrefab('Prefab/popDelete').then((prefab) => {
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
     * 超级红包界面
     */
    showSuperLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.popSuperLayer) {
            this.loadPrefab('Prefab/super').then((prefab) => {
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
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        console.log("cocos--------ticketInfo", JSON.stringify(ticketInfo));
        if (!this.ticketLayer) {
            this.loadPrefab('Prefab/ticket').then((prefab) => {
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
            ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType)
        }
        // this.refreshUserInfo(false);
    }
    /**
    * 解冻红包界面
    */
    showUnFreezeLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_icetable")
        if (!this.unFreezeLayer) {
            this.loadPrefab('Prefab/unFreeze').then((prefab) => {
                let layer = cc.instantiate(prefab);
                self.unFreezeLayer = layer;
                self.node.addChild(layer);
                self.unFreezeLayer.active = true;
            })
        } else {
            this.unFreezeLayer.active = true;
        }
    }
    /**
     * 存钱罐界面
     */
    showSaveCashLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_Piggybank")
        if (!this.saveCashLayer) {
            this.loadPrefab('Prefab/saveCash').then((prefab) => {
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
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_cash")
        if (!this.getCashLayer) {
            this.loadPrefab('Prefab/getCash').then((prefab) => {
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
    showTurntableLayer() {
        cc.audioEngine.play(this.effectAudio[3], false, 1);
        cc.Tools.dot("click_turntable")
        if (!this.turntableLayer) {
            this.loadPrefab('Prefab/turntable').then((prefab) => {
                let layer = cc.instantiate(prefab);
                self.turntableLayer = layer;
                self.node.addChild(layer);
                self.turntableLayer.active = true;
            })
        } else {
            this.turntableLayer.active = true;
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
        bar.width = this.clickRedNumber >= 6 ? 21 * 6 : this.clickRedNumber * 21;
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
                    cc.Tools.showJiliAd(7);
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
                        bar.width = this.clickRedNumber >= 6 ? 21 * 6 : this.clickRedNumber * 21;
                    })
                } else {
                    this.showPopDeleteLayer(1, 1);
                    this.clickRedNumber = 0;
                    bar.width = this.clickRedNumber >= 6 ? 21 * 6 : this.clickRedNumber * 21;
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
        cc.Tools.emitEvent("time", new Date().getTime());
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        this.countTime = new Date().getTime();
        let windowSize = cc.winSize;
        let x = event.getLocationX()
        let y = event.getLocationY()
        this.Delete_num = 0

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
    /**
     * 初始化场景
     */
    init() {
        this.ground.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.curScore = 0;
        this.clickOnce = true;
        cc.Tools.emitEvent("score", this.curScore);
        this.scoreBar.progress = 0;
        this.level = cc.Tools.userInfo.level;
        this.levelInfo.getChildByName("text").getComponent(cc.Label).string = `关卡：${this.level}`;
        this.scoreInfo.getChildByName("lbl").getComponent(cc.Label).string = "分数越高，过关红包越大";
        this.background.destroyAllChildren();
        this.blockBackground.destroyAllChildren();
        let blockNullColor = "#38537E";
        for (let i = 0; i < 10; i++) {
            this.a[i] = []
            this.b[i] = []
            for (let j = 0; j < 10; j++) {
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
                        node = cc.instantiate(this.pink)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 4:
                        node = cc.instantiate(this.blue)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 5:
                        node = cc.instantiate(this.yellow)
                        node.parent = this.background || this.node
                        node.setPosition(this.ToXY(i, j))

                }
                this.b[i][j] = node
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

        let count = 0
        for (let j = 0; j < 10; j++) {

            if (this.a[9][j] > 0 && count > 0) {

                for (let i = 0; i < 10; i++) {
                    if (this.a[i][j] > 0) {
                        // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(-count * 74, 0) }).start();
                        var action = cc.moveBy(0.3, -count * 74, 0)
                        this.b[i][j].runAction(action)
                        this.a[i][j - count] = this.a[i][j]
                        this.a[i][j] = 0
                        this.b[i][j - count] = this.b[i][j]
                        this.b[i][j] = null
                    }

                }
                continue
            }
            if (this.a[9][j] == 0) {
                count++
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
            //delete

            // this.deletePosArr.push(obj)
            // if (i != 0) {
            //     this.Touch_block(i - 1, j, k)
            // }
            // if (i != 9) {
            //     this.Touch_block(i + 1, j, k)
            // }
            // if (j != 0) {
            //     this.Touch_block(i, j - 1, k)
            // }
            // if (j != 9) {
            //     this.Touch_block(i, j + 1, k)
            // }
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
        this.count = 0;
        this.isOverGame = isOver;
        this.schedule(this.deleteBlockCb, 0.1, this.deletePosArr.length - 1)
    }
    deleteBlockCb() {
        // let count = 0;
        let arr = this.deletePosArr[this.count];
        for (let t = 0; t < arr.length; t++) {
            let data = arr[t];
            let i = data.i;
            let j = data.j;
            let k = data.k;
            let node = cc.instantiate(this.desEffect)
            node.parent = this.background || this.node
            node.setPosition(this.ToXY(i, j))
            let CustomParticle = node.getComponent(cc.ParticleSystem);
            let color = this.getColorBlock(k);
            CustomParticle.startColor = new cc.Color().fromHEX(color);
            CustomParticle.startColorVar = new cc.Color(0, 0, 0)
            CustomParticle.endColor = new cc.Color().fromHEX(color);
            CustomParticle.endColorVar = new cc.Color(0, 0, 0)
            CustomParticle.resetSystem();

            this.b[i][j].destroy()
            this.b[i][j] = null
        }
        if (this.count === this.deletePosArr.length - 1) {
            this.afterDeleteBlock()
        }
        this.count++;
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
            cc.tween(this.successSpine).delay(0.5).call(() => {
                this.updateLevel();
            }).start()
            this.scheduleOnce(() => {
                this.successSpine.active = false;
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
                cc.tween(this.successSpine).delay(0.5).call(() => {
                    this.updateLevel();
                }).start()
                this.scheduleOnce(() => {
                    this.successSpine.active = false;
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
                cc.Tools.emitEvent("score", this.curScore);
                this.scoreBar.progress = this.curScore/1000>1?1:this.curScore/1000;
                this.handleDeleteBlock(true);
            }, 1)
        } else {
            // 增加积分 积分算法是 (消除数-1）的平方*10
            let len = this.Delete_num - 1
            let score = Math.pow(len, 2) * 10;
            this.curScore += score;
            this.goodFunction(this.Delete_num);
            this.scoreInfo.getChildByName("lbl").getComponent(cc.Label).string = `${this.Delete_num}连消${score}分`;
            this.scoreBar.progress = this.curScore/1000>1?1:this.curScore/1000;
            cc.Tools.emitEvent("score", this.curScore);

        }
    }
    updateLevel() {
        this.successSpine.active = true;
        let spine = this.successSpine.getComponent("sp.Skeleton");
        spine.setAnimation(0, "idle", false);
        // 像服务器发请求过关
        let sendData = {
            "score": this.curScore,
            "ts": new Date().getTime(),//时间戳
            "level": cc.Tools.userInfo.level,
        };
        let data = cc.Tools.createSignData(sendData);
        cc.Tools.sendRequest("UpdateLevel", "POST", data).then((res) => {
            console.log("升级成功")
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
        if (floaterLayer.active === false) {
            floaterLayer.active = true;
        }
        for (let i = 1; i <= 3; i++) {
            let floater = floaterLayer.getChildByName("floater_" + i);
            floater.active = true;
            cc.Tools.popAnim(floater);
            floater.on(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
        }
    }
    // 专属浮球的事件 点击浮球观看视频 之后浮球消失并且清除事件
    clickFloate(e) {
        let target = e.target
        cc.Tools.dot("click_Floatredbag")
        cc.Tools.showJiliAd(2);
        this.scheduleOnce(() => {
            target.active = false;
            // target.off(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
            // target.destroy();
            // target = null;
        }, 1)
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
        let count = 0;
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
                    count++
                    if (count == c) {
                        // this.closeView()
                        console.log("动画完毕")
                    }
                })
                .start()
        }, newTime, c)
        this.scheduleOnce(() => {
            call && call()
        }, 2)
    }
}
