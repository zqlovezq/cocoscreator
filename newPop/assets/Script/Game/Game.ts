import AssetsBundle from "./AssetsBundle";
import Cash from "../Component/Cash";
import resPkg from "./GameResPkg";
import Award from "../Component/Award";
const { ccclass, property } = cc._decorator;
var self: any = null;
@ccclass
export default class Game extends cc.Component {
    public static Instance: Game = null;
    public wrap: cc.Node = null;
    private layer: cc.Node = null;
    private pop: cc.Node = null;
    private delete_num: number = 0.00;
    private click_pos: cc.Vec3 = null;
    private a = [];
    private b = [];
    private difficulty: number = 2;
    private _count: number = 0;
    private level_add_cash = 0;
    private is_over_game: boolean = false;
    private delete_pos_arr = [];
    private loadResOver: boolean = false;
    private lock: boolean = false;
    private awardInfo: any = null;
    protected onLoad(): void {
        if (Game.Instance === null) {
            Game.Instance = this;
        } else {
            this.destroy();
            return;
        }
        // //主要加载主界面
        this.node.addComponent(AssetsBundle);
        AssetsBundle.Instance.preloadResPkg("Game", resPkg.Game, (now: number, total: number) => {

        }, () => {
            console.log("资源加载完成")
            this.loadResOver = true;
        });
        self = this;
        cc.Tools.screenAdapter();
        //注册一些事件
        cc.Tools.Event.on("cash", this.showCashType, this);
        cc.Tools.Event.on("refreshGame", this.refreshGame, this);
        this.wrap = this.node.getChildByName("wrap");
        this.layer = this.node.getChildByName("layer");
        this.pop = this.node.getChildByName("pop");
        this.getReqInfo("UserInfo", "GET", {}, this.initUserInfo);
        let _time = new Date().getTime();
        cc.game.on(cc.game.EVENT_HIDE,()=>{
            let interval = (new Date().getTime()-_time)/1000;
            let sendData = {
                "ts": new Date().getTime(),//时间戳
                "live_second_time": interval
            };
            cc.Tools.sendRequest("PipeActionLiveTime","POST",sendData).then((res)=>{
                console.log("cocos----interval----" + interval);
            }).catch((res)=>{
                console.log("cocos----interval----bug----", JSON.stringify(res));
            })
        })
    }
    private InitGame(): void {
        let content: cc.Node = this.wrap.getChildByName("content");
        content.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.delete_num = 0.00;
        this.level_add_cash = 0;
        this.setLevelAddCash();
        content.destroyAllChildren();
        for (let i = 0; i < 10; i++) {
            this.a[i] = []
            this.b[i] = []
            for (let j = 0; j < 10; j++) {
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty)
                let node = null;
                switch (this.a[i][j]) {
                    case 1:
                        let red = AssetsBundle.Instance.getAsset("MainScene", "Prefab/red")
                        node = cc.instantiate(red)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 2:
                        let green = AssetsBundle.Instance.getAsset("MainScene", "Prefab/green")
                        node = cc.instantiate(green)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 3:
                        let yellow = AssetsBundle.Instance.getAsset("MainScene", "Prefab/yellow")
                        node = cc.instantiate(yellow)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 4:
                        let blue = AssetsBundle.Instance.getAsset("MainScene", "Prefab/blue")
                        node = cc.instantiate(blue)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))
                        break;
                    case 5:
                        let pink = AssetsBundle.Instance.getAsset("MainScene", "Prefab/pink")
                        node = cc.instantiate(pink)
                        node.parent = content
                        node.setPosition(this.ToXY(i, j))

                }
                this.b[i][j] = node;
            }
        }
    }
    //用户首次进来弹窗
    private firstEnterGame(): void {
        // let first:string = cc.sys.localStorage.getItem("first");
        // if(!first){
        cc.sys.localStorage.setItem("first", true);
        let first: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/first_pop");
        first.addRef();
        let node = cc.instantiate(first);
        node.parent = this.pop;
        // }
    }
    //写一个接口返回请求的数据
    private getReqInfo(api: string, reqType: string, sendData: any, callback: Function): void {
        cc.Tools.sendRequest(api, reqType, sendData).then(res => {
            callback(res.data);
        })
        // .catch(err => {
        //     console.log(`请求${api}失败，错误返回${err}`);
        // })
    }
    private initUserInfo(data: any): void {
        cc.Tools.userInfo = data;
        let top: cc.Node = self.wrap.getChildByName("top");
        //关卡
        let levelLbl: cc.Label = self.wrap.getChildByName("level").getChildByName("lbl").getComponent(cc.Label);
        levelLbl.string = `第${cc.Tools.userInfo.level}关`
        self.setAvatarIcon(data.avatar_url);
        //同步金钱
        self.refreshWallet();
        //同步转盘
        self.getReqInfo("LuckyLotteryStatus", "GET", {}, self.refeshTurnTableNumber);
        //同步红包
        self.getReqInfo("RedPkgStat", "GET", {}, self.refeshRedNumber);
        //同步开奖信息
        self.getReqInfo("DrawInfo", "GET", {}, self.awardReq);
        self.registerEvent();
        self.firstEnterGame();
        self.InitGame();
    }
    private setAvatarIcon(url: string): void {
        let top: cc.Node = self.wrap.getChildByName("top");
        let avatar: cc.Sprite = top.getChildByName("avatar").getChildByName("mask").getChildByName("icon").getComponent(cc.Sprite);
        cc.assetManager.loadRemote(url, { ext: '.png' }, function (err, texture: cc.Texture2D) {
            if (err) {
                console.log("加载头像失败---" + url + "----", err);
            } else {
                texture.packable = false;
                let frame = new cc.SpriteFrame(texture);
                avatar.spriteFrame = frame;
            }
        });
    }
    //刷新界面
    private refreshGame(): void {
        this.getReqInfo("UserInfo", "GET", {}, this.refreshUserInfo);
    }
    private refreshUserInfo(data: any): void {
        cc.Tools.userInfo = data;
        let levelLbl: cc.Label = self.wrap.getChildByName("level").getChildByName("lbl").getComponent(cc.Label);
        levelLbl.string = `第${cc.Tools.userInfo.level}关`
        self.refreshWallet();
        //同步转盘
        self.getReqInfo("LuckyLotteryStatus", "GET", {}, self.refeshTurnTableNumber);
        //同步红包
        self.getReqInfo("RedPkgStat", "GET", {}, self.refeshRedNumber);
        self.InitGame();
    }
    //同步金钱
    public refreshWallet(): void {
        cc.Tools.sendRequest("Wallet", "GET", {}).then(res => {
            let data = res.data;
            let amount = data.amount;
            cc.Tools.userInfo.amount = amount;
            let top: cc.Node = self.wrap.getChildByName("top");
            let progress: cc.ProgressBar = top.getChildByName("progress").getComponent(cc.ProgressBar);
            progress.progress = amount / 10000;
            let cash: cc.Label = top.getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
            cash.string = amount / 100 + "";
        })
    }
    //同步红包个数
    private refeshRedNumber(data: any): void {
        let top: cc.Node = self.wrap.getChildByName("top");
        let red: cc.Node = top.getChildByName("red");
        let redNumber: cc.Label = red.getChildByName("num").getComponent(cc.Label);
        redNumber.string = data.red_pkg_num + "";
        red.active = data.red_pkg_num > 0 ? true : false;
    }
    //同步转盘个数
    private refeshTurnTableNumber(data: any): void {
        let bottom: cc.Node = self.wrap.getChildByName("bottom");
        let turntableNumber: cc.Label = bottom.getChildByName("btn_1").getChildByName("num").getComponent(cc.Label);
        turntableNumber.string = data.max_times - data.used_times + "";
    }
    private registerEvent(): void {
        let bottom: cc.Node = this.wrap.getChildByName("bottom");
        let top: cc.Node = this.wrap.getChildByName("top");
        let eventFunc = ["showTurntable", "showAward", "showCash2"];
        for (let i = 1; i <= 3; i++) {
            let btn = bottom.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[eventFunc[i - 1]], this)
        }
        let avatar = top.getChildByName("avatar");
        avatar.on(cc.Node.EventType.TOUCH_END, this.showCash1, this);
        let red = top.getChildByName("red");
        red.on(cc.Node.EventType.TOUCH_END, this.mainRed, this)
    }
    private removeEvent(): void {
        let bottom: cc.Node = this.wrap.getChildByName("bottom");
        let top: cc.Node = this.wrap.getChildByName("top");
        let eventFunc = ["showTurntable", "showAward", "showCash2"];
        for (let i = 1; i <= 3; i++) {
            let btn = bottom.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this[eventFunc[i - 1]], this)
        }
        let avatar = top.getChildByName("avatar");
        avatar.off(cc.Node.EventType.TOUCH_END, this.showCash1, this)
        let red = top.getChildByName("red");
        red.off(cc.Node.EventType.TOUCH_END, this.mainRed, this)
    }
    private mainRed() {
        this.showRedPop(1, false);
    }
    private showCash2(): void {
        cc.Tools.emitEvent("cash", 2)
    }
    private showCash1(): void {
        cc.Tools.emitEvent("cash", 1);
    }
    public showCashType(type: number): void {
        this.showCash();
        Cash.Instance["showTypeLayer" + type]();
    }
    public showTurntable(): void {
        let turntable = this.layer.getChildByName("turntable_layer");
        if (turntable) {
            turntable.active = true;
        } else {
            if (this.loadResOver) {
                let _turntable: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/turntable_layer")
                let node: cc.Node = cc.instantiate(_turntable);
                node.parent = self.layer;
            }
        }
    }
    private awardReq(data: any): void {
        self.awardInfo = data;
        let bottom: cc.Node = self.wrap.getChildByName("bottom");
        let btn: cc.Node = bottom.getChildByName("btn_2");
        if (data.wait_open > 0 && data.wait_end === 0) {
            cc.Tools.setButtonGary(btn);
            self.schedule(self.awardCountDownFunc, 1);
        } else {
            bottom.getChildByName("time_bg").active = false;
        }
    }
    private awardCountDownFunc() {
        let bottom: cc.Node = self.wrap.getChildByName("bottom");
        let btn: cc.Node = bottom.getChildByName("btn_2");
        let time: cc.Label = bottom.getChildByName("time_bg").getChildByName("time").getComponent(cc.Label);
        time.string = cc.Tools.changeTime(self.awardInfo.wait_open,false);
        if (self.awardInfo.wait_open <= 0) {
            btn.on(cc.Node.EventType.TOUCH_END, self.showAward, self);
            btn.getComponent(cc.Button).enableAutoGrayEffect = false;
            btn.getComponent(cc.Button).interactable = true;
            bottom.getChildByName("time_bg").active = false;
            self.unschedule(self.awardCountDownFunc);
        }
        self.awardInfo.wait_open--;
    }
    public showAward(): void {
        cc.Tools.sendRequest("DrawInfo", "GET", {}).then(res => {
            this.awardInfo = res.data;
            let award = this.layer.getChildByName("award_layer");
            if (this.awardInfo.wait_end <= 5) {
                console.log("正在开奖...请等待");
            } else {
                if (award) {
                    award.active = true;
                } else {
                    if (this.loadResOver) {
                        let _award: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/award_layer")
                        let node: cc.Node = cc.instantiate(_award);
                        node.parent = self.layer;
                    }
                }
                if (!this.awardInfo.info) {
                    Award.Instance.showTypeLayer1(this.awardInfo);
                } else {
                    Award.Instance.showTypeLayer2(this.awardInfo);
                }
            }
        })
    }
    public showCash(): void {
        let cash = this.layer.getChildByName("cash_layer");
        if (cash) {
            cash.active = true;
        } else {
            if (this.loadResOver) {
                let _cash: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/cash_layer")
                let node: cc.Node = cc.instantiate(_cash);
                node.parent = self.layer;
            }
        }
    }
    private touchGround(e: cc.Event.EventTouch) {
        if (this.lock) {
            return
        }
        let content: cc.Node = this.wrap.getChildByName("content");
        let pos = content.convertToNodeSpaceAR(e.getLocation())
        let x = pos.x
        let y = pos.y
        this.click_pos = cc.v3(x, y);
        console.log(this.ToIJ(x, y));
        let i = this.ToIJ(x, y).x
        let j = this.ToIJ(x, y).y
        this.delete_num = 0;
        this.delete_pos_arr = [];
        let color = this.a[i][j];
        this.Touch_block(i, j, this.a[i][j]);
        this.lock = true;
        if (this.delete_num === 1) {
            this.a[i][j] = color;
            this.lock = false;
            return
        } else {
            this.handleDeleteBlock(false);
        }
    }
    private ToIJ(i: number, j: number) {
        let content: cc.Node = this.wrap.getChildByName("content");
        let val = content.width / 2;
        i = Math.floor((i + val) / 100);
        j = 9 - Math.floor((j + val) / 100);
        return {
            x: j,
            y: i
        }
    }
    private ToXY(x: number, y: number) {
        return cc.v2(-450 + 100 * y, 450 - 100 * x);
    }
    private Touch_block(i: number, j: number, k: number): void {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0
            this.delete_num++
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
    private splitToArr(arr): void {
        let _arr = [];
        if (arr.length > 0) {
            this.delete_pos_arr.push(arr);
            for (let t = 0; t < arr.length; t++) {
                let data = arr[t];
                let i = data.i;
                let j = data.j;
                let k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.delete_num++;
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
                        this.delete_num++;
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
                        this.delete_num++;
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
                        this.delete_num++;
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
    private handleDeleteBlock(isOver: boolean): void {
        this._count = 0;
        this.is_over_game = isOver;
        this.schedule(this.deleteBlockCb, 0.032, this.delete_pos_arr.length - 1);
        if (!isOver) {
            this.setLevelAddCash();
        }
    }
    private deleteBlockCb(): void {
        let arr = this.delete_pos_arr[this._count];
        for (let t = 0; t < arr.length; t++) {
            let data = arr[t];
            let i = data.i;
            let j = data.j;
            let k = data.k;
            //spine特效
            let content: cc.Node = this.wrap.getChildByName("content");
            let spine: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/effect")
            let node = cc.instantiate(spine)
            node.parent = content;
            node.setPosition(this.ToXY(i, j))
            let _spine: sp.Skeleton = node.getChildByName("spine").getComponent("sp.Skeleton");
            let rdm = Math.floor(Math.random() * 3 + 1);
            _spine.setAnimation(0, "STYLE_" + rdm, false);

            this.b[i][j].destroy()
            this.b[i][j] = null
        }
        if (this._count === this.delete_pos_arr.length - 1) {
            this.afterDeleteBlock()
        }
        this._count++;
    }
    private afterDeleteBlock(): void {
        this.deleteBlock();
        this.unschedule(this.deleteBlockCb);
        if (this.is_over_game) {
            this.setScore(true);
            return;
        } else {
            this.setScore(false);
        }
        this.scheduleOnce(() => {
            this.lock = false;
        })
    }
    private deleteBlock(): void {
        for (let j = 0; j < 10; j++) {
            let num = 0
            for (let i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    let action = cc.moveBy(0.3, 0, -num * 100)
                    this.b[i][j].runAction(action)
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
                        var action = cc.moveBy(0.3, -_count * 100, 0)
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
    /**
     * 每消除一个方块的基础得分为0.01元钱，一次消除10个以上获得1.1倍率，一次消除20个以上获得1.2倍率，一次消除30个以上获得1.5倍率，最大为1.5倍率。最终得到金额向下取整
    */
    private setLevelAddCash(): void {
        //level_add_cash
        let cash: cc.Label = this.wrap.getChildByName("money").getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        if (this.delete_num !== 0) {
            if (this.delete_num < 10) {
                //没有倍率
                this.level_add_cash += this.delete_num
            } else if (this.delete_num >= 10 && this.delete_num < 20) {
                //10个以上1.1
                this.level_add_cash += Math.floor(this.delete_num * 1.1);
            } else if (this.delete_num >= 20 && this.delete_num < 30) {
                //20个以上1.2
                this.level_add_cash += Math.floor(this.delete_num * 1.2)
            } else {
                //大于30个1.5
                this.level_add_cash += Math.floor(this.delete_num * 1.5)
            }
        }
        cash.string = this.level_add_cash / 100 + "";
    }
    private setScore(isClear: boolean): void {
        if (isClear) {
            cc.tween(this.node).delay(0.5).call(() => {
                this.updateLevel();
            }).start()
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
                return;
            }
        }
        if (this.isEnd()) {
            // 增加积分 积分算法是
            // 剩余的方块
            this.delete_pos_arr = [];
            let arr = [];
            // this.lock = true;
            let content: cc.Node = this.wrap.getChildByName("content");
            content.off(cc.Node.EventType.TOUCH_START, this.touchGround, this);
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
                this.delete_pos_arr.push(arr);
                this.handleDeleteBlock(true);
            }, 1)
        } else {
            this.goodFunction(this.delete_num);
        }
    }
    private updateLevel(): void {
        // 像服务器发请求过关
        let sendData = {
            "score": this.level_add_cash,
            "ts": new Date().getTime(),//时间戳
            "level": cc.Tools.userInfo.level,
        };
        let data = cc.Tools.createSignData(sendData);
        this.getReqInfo("UpdateLevel", "POST", data, () => {
            console.log("成功过关");
            self.showAwardPop(self.level_add_cash, 2);
            self.scheduleOnce(() => {
                self.showRedPop(2, true);
            }, 2.5)
        })
    }
    private isEnd(): boolean {
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
    private goodFunction(num: number): void {
        // if (num >= 5 && num < 7) {
        //     cc.audioEngine.play(this.effectAudio[9], false, 1);
        //     let good = cc.instantiate(this.good)
        //     this.background.addChild(good);
        //     cc.tween(good).by(1, { y: 200 }).call(() => {
        //         good.destroy()
        //     }).start()
        // }
        // if (num >= 7 && num < 9) {
        //     cc.audioEngine.play(this.effectAudio[10], false, 1);
        //     let great = cc.instantiate(this.great)
        //     this.background.addChild(great);
        //     cc.tween(great).by(0.5, { y: 200 }).call(() => {
        //         great.destroy()
        //     }).start()
        // }
        // if (num >= 9 && num < 12) {
        //     cc.audioEngine.play(this.effectAudio[11], false, 1);
        //     let excellent = cc.instantiate(this.excellent)
        //     this.background.addChild(excellent);
        //     cc.tween(excellent).by(0.5, { y: 200 }).call(() => {
        //         excellent.destroy()
        //     }).start()
        // }
        // if (num >= 12 && num < 15) {
        //     cc.audioEngine.play(this.effectAudio[12], false, 1);
        //     let amazing = cc.instantiate(this.amazing)
        //     this.background.addChild(amazing);
        //     cc.tween(amazing).by(0.5, { y: 200 }).call(() => {
        //         amazing.destroy()
        //     }).start()
        // }
        // if (num >= 15) {
        //     cc.audioEngine.play(this.effectAudio[13], false, 1);
        //     let unbelievable = cc.instantiate(this.unbelievable)
        //     this.background.addChild(unbelievable);
        //     cc.tween(unbelievable).by(0.5, { y: 200 }).call(() => {
        //         unbelievable.destroy()
        //     }).start()
        // }
    }
    /**
     * 显示通过或者消除方块里面的红包的弹出界面
     * type:1是弹出界面---关闭 直接关闭
     * type:2是结算界面---关闭 刷新主页
    */
    private showRedPop(type: number, add: boolean) {
        let red_pop = this.pop.getChildByName("red_pop");
        if (red_pop) {
            red_pop.active = true;
            let js = red_pop.getComponent("RedPop");
            js.setType(type, add);
        } else {
            if (this.loadResOver) {
                let _red_pop: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/red_pop")
                let node: cc.Node = cc.instantiate(_red_pop);
                node.parent = self.pop;
                let js = node.getComponent("RedPop");
                js.setType(type, add);
            }
        }
    }
    /**
     * 奖励接口
     * @param count 现金数量
     * @param type 弹窗类型
    */
    public showAwardPop(count: number, type: number) {
        let award_pop = this.pop.getChildByName("award_pop");
        if (award_pop) {
            // award_pop.active = true;
            let js = award_pop.getComponent("AwardPop");
            this.scheduleOnce(() => {
                award_pop.active = true;
                js.showAward(count, type);
            }, 0.2)
        } else {
            if (this.loadResOver) {
                let _award_pop: cc.Prefab = AssetsBundle.Instance.getAsset("MainScene", "Prefab/award_pop")
                let node: cc.Node = cc.instantiate(_award_pop);
                node.parent = self.pop;
                node.active = false;
                let js = node.getComponent("AwardPop");
                this.scheduleOnce(() => {
                    node.active = true;
                    js.showAward(count, type);
                }, 0.2)
            }
        }
    }
}