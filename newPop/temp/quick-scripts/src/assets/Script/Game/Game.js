"use strict";
cc._RF.push(module, '33c4dowvV1OnbEFgQUv+xOe', 'Game');
// Script/Game/Game.ts

"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var AssetsBundle_1 = require("./AssetsBundle");
var Cash_1 = require("../Component/Cash");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var self = null;
var Game = /** @class */ (function (_super) {
    __extends(Game, _super);
    function Game() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = null;
        _this.layer = null;
        _this.pop = null;
        _this.delete_num = 0;
        _this.click_pos = null;
        _this.a = [];
        _this.b = [];
        _this.difficulty = 2;
        _this._count = 0;
        _this.level_add_cash = 0;
        _this.is_over_game = false;
        _this.delete_pos_arr = [];
        return _this;
    }
    Game_1 = Game;
    Game.prototype.onLoad = function () {
        if (Game_1.Instance === null) {
            Game_1.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        //初始化的用户数据
        self = this;
        cc.Tools.screenAdapter();
        //注册一些事件
        cc.Tools.Event.on("cash", this.showCashType, this);
        this.wrap = this.node.getChildByName("wrap");
        this.layer = this.node.getChildByName("layer");
        this.pop = this.node.getChildByName("pop");
        this.getReqInfo("UserInfo", "GET", {}, this.initUserInfo);
    };
    Game.prototype.InitGame = function () {
        var content = this.wrap.getChildByName("content");
        content.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.level_add_cash = 0;
        this.setLevelAddCash();
        content.destroyAllChildren();
        for (var i = 0; i < 10; i++) {
            this.a[i] = [];
            this.b[i] = [];
            for (var j = 0; j < 10; j++) {
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty);
                var node = null;
                switch (this.a[i][j]) {
                    case 1:
                        var red = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/red");
                        node = cc.instantiate(red);
                        node.parent = content;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 2:
                        var green = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/green");
                        node = cc.instantiate(green);
                        node.parent = content;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 3:
                        var yellow = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/yellow");
                        node = cc.instantiate(yellow);
                        node.parent = content;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 4:
                        var blue = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/blue");
                        node = cc.instantiate(blue);
                        node.parent = content;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 5:
                        var pink = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/pink");
                        node = cc.instantiate(pink);
                        node.parent = content;
                        node.setPosition(this.ToXY(i, j));
                }
                this.b[i][j] = node;
            }
        }
    };
    //用户首次进来弹窗
    Game.prototype.firstEnterGame = function () {
        // let first:string = cc.sys.localStorage.getItem("first");
        // if(!first){
        cc.sys.localStorage.setItem("first", true);
        var first = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/first_pop");
        first.addRef();
        var node = cc.instantiate(first);
        node.parent = this.node;
        // }
    };
    //写一个接口返回请求的数据
    Game.prototype.getReqInfo = function (api, reqType, sendData, callback) {
        cc.Tools.sendRequest(api, reqType, sendData).then(function (res) {
            callback(res.data);
        });
        // .catch(err => {
        //     console.log(`请求${api}失败，错误返回${err}`);
        // })
    };
    Game.prototype.initUserInfo = function (data) {
        cc.Tools.userInfo = data;
        var levelLbl = self.wrap.getChildByName("level").getChildByName("lbl").getComponent(cc.Label);
        levelLbl.string = "\u7B2C" + cc.Tools.userInfo.level + "\u5173";
        self.registerEvent();
        self.InitGame();
        self.firstEnterGame();
    };
    Game.prototype.registerEvent = function () {
        var bottom = this.wrap.getChildByName("bottom");
        var top = this.wrap.getChildByName("top");
        var eventFunc = ["showTurntable", "showAward", "showCash2"];
        for (var i = 1; i <= 3; i++) {
            var btn = bottom.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[eventFunc[i - 1]], this);
        }
        var avatar = top.getChildByName("avatar");
        avatar.on(cc.Node.EventType.TOUCH_END, this.showCash1, this);
    };
    Game.prototype.removeEvent = function () {
        var bottom = this.wrap.getChildByName("bottom");
        var top = this.wrap.getChildByName("top");
        var eventFunc = ["showTurntable", "showAward", "showCash2"];
        for (var i = 1; i <= 3; i++) {
            var btn = bottom.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this[eventFunc[i - 1]], this);
        }
        var avatar = top.getChildByName("avatar");
        avatar.off(cc.Node.EventType.TOUCH_END, this.showCash1, this);
    };
    Game.prototype.showTurntable = function () {
        var turntable = this.layer.getChildByName("turntable_layer");
        if (turntable) {
            turntable.active = true;
        }
        else {
            var turntable_1 = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/turntable_layer");
            var node = cc.instantiate(turntable_1);
            node.parent = self.layer;
        }
    };
    Game.prototype.showAward = function () {
        // let cash = this.layer.getChildByName("cash_layer");
        // if(cash){
        //     cash.active = true;
        // }else{
        //     let cash = AssetsBundle.Instance.getAsset("Game", "Prefab/cash_layer")
        //     let node = cc.instantiate(cash);
        //     node.parent = self.layer;
        // }
    };
    Game.prototype.showCash2 = function () {
        cc.Tools.emitEvent("cash", 2);
    };
    Game.prototype.showCash1 = function () {
        cc.Tools.emitEvent("cash", 1);
    };
    Game.prototype.showCashType = function (type) {
        this.showCash();
        Cash_1.default.Instance["showTypeLayer" + type]();
    };
    Game.prototype.showCash = function () {
        var cash = this.layer.getChildByName("cash_layer");
        if (cash) {
            cash.active = true;
        }
        else {
            var cash_1 = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/cash_layer");
            var node = cc.instantiate(cash_1);
            node.parent = self.layer;
        }
        // // if()
        // Cash.Instance.showTypeLayer1()
    };
    Game.prototype.touchGround = function (e) {
        var content = this.wrap.getChildByName("content");
        var pos = content.convertToNodeSpaceAR(e.getLocation());
        var x = pos.x;
        var y = pos.y;
        this.delete_num = 0;
        this.click_pos = cc.v3(x, y);
        // console.log(x, y);
        console.log(this.ToIJ(x, y));
        var i = this.ToIJ(x, y).x;
        var j = this.ToIJ(x, y).y;
        this.delete_num = 0;
        this.delete_pos_arr = [];
        var color = this.a[i][j];
        this.Touch_block(i, j, this.a[i][j]);
        // todo
        if (this.delete_num === 1) {
            this.a[i][j] = color;
            return;
        }
        else {
            this.handleDeleteBlock(false);
        }
    };
    Game.prototype.ToIJ = function (i, j) {
        var content = this.wrap.getChildByName("content");
        var val = content.width / 2;
        i = Math.floor((i + val) / 100);
        j = 9 - Math.floor((j + val) / 100);
        return {
            x: j,
            y: i
        };
    };
    Game.prototype.ToXY = function (x, y) {
        return cc.v2(-450 + 100 * y, 450 - 100 * x);
    };
    Game.prototype.Touch_block = function (i, j, k) {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0;
            this.delete_num++;
            var obj = {
                "i": i,
                "j": j,
                "k": k
            };
            //delete
            var arr = [];
            arr.push(obj);
            this.splitToArr(arr);
        }
    };
    Game.prototype.splitToArr = function (arr) {
        var _arr = [];
        if (arr.length > 0) {
            this.delete_pos_arr.push(arr);
            for (var t = 0; t < arr.length; t++) {
                var data = arr[t];
                var i = data.i;
                var j = data.j;
                var k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.delete_num++;
                        var obj = {
                            "i": i - 1,
                            "j": j,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (i != 9) {
                    if (this.a[i + 1][j] == k && k > 0) {
                        this.a[i + 1][j] = 0;
                        this.delete_num++;
                        var obj = {
                            "i": i + 1,
                            "j": j,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (j != 0) {
                    if (this.a[i][j - 1] == k && k > 0) {
                        this.a[i][j - 1] = 0;
                        this.delete_num++;
                        var obj = {
                            "i": i,
                            "j": j - 1,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
                if (j != 9) {
                    if (this.a[i][j + 1] == k && k > 0) {
                        this.a[i][j + 1] = 0;
                        this.delete_num++;
                        var obj = {
                            "i": i,
                            "j": j + 1,
                            "k": k
                        };
                        _arr.push(obj);
                    }
                }
            }
            this.splitToArr(_arr);
        }
    };
    // 将要delete的数据进行处理
    Game.prototype.handleDeleteBlock = function (isOver) {
        if (!this.delete_pos_arr.length) {
            return;
        }
        this._count = 0;
        this.is_over_game = isOver;
        this.schedule(this.deleteBlockCb, 0.032, this.delete_pos_arr.length - 1);
        if (!isOver) {
            this.setLevelAddCash();
        }
    };
    Game.prototype.deleteBlockCb = function () {
        var arr = this.delete_pos_arr[this._count];
        for (var t = 0; t < arr.length; t++) {
            var data = arr[t];
            var i = data.i;
            var j = data.j;
            var k = data.k;
            //spine特效
            var content = this.wrap.getChildByName("content");
            var spine = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/effect");
            var node = cc.instantiate(spine);
            node.parent = content;
            node.setPosition(this.ToXY(i, j));
            var _spine = node.getChildByName("spine").getComponent("sp.Skeleton");
            var rdm = Math.floor(Math.random() * 3 + 1);
            _spine.setAnimation(0, "STYLE_" + rdm, false);
            this.b[i][j].destroy();
            this.b[i][j] = null;
        }
        if (this._count === this.delete_pos_arr.length - 1) {
            this.afterDeleteBlock();
        }
        this._count++;
    };
    Game.prototype.afterDeleteBlock = function () {
        this.deleteBlock();
        this.unschedule(this.deleteBlockCb);
    };
    Game.prototype.deleteBlock = function () {
        for (var j = 0; j < 10; j++) {
            var num = 0;
            for (var i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    var action_1 = cc.moveBy(0.3, 0, -num * 100);
                    this.b[i][j].runAction(action_1);
                    this.a[i + num][j] = this.a[i][j];
                    this.a[i][j] = 0;
                    this.b[i + num][j] = this.b[i][j];
                    this.b[i][j] = null;
                    continue;
                }
                if (this.a[i][j] == 0) {
                    num = num + 1;
                }
            }
        }
        var _count = 0;
        for (var j = 0; j < 10; j++) {
            if (this.a[9][j] > 0 && _count > 0) {
                for (var i = 0; i < 10; i++) {
                    if (this.a[i][j] > 0) {
                        var action = cc.moveBy(0.3, -_count * 100, 0);
                        this.b[i][j].runAction(action);
                        this.a[i][j - _count] = this.a[i][j];
                        this.a[i][j] = 0;
                        this.b[i][j - _count] = this.b[i][j];
                        this.b[i][j] = null;
                    }
                }
                continue;
            }
            if (this.a[9][j] == 0) {
                _count++;
            }
        }
    };
    /**
     * 每消除一个方块的基础得分为0.01元钱，一次消除10个以上获得1.1倍率，一次消除20个以上获得1.2倍率，一次消除30个以上获得1.5倍率，最大为1.5倍率。最终得到金额向下取整
    */
    Game.prototype.setLevelAddCash = function () {
        //level_add_cash
        var cash = this.wrap.getChildByName("money").getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        if (this.delete_num !== 0) {
            if (this.delete_num < 10) {
                //没有倍率
                this.level_add_cash += this.delete_num;
            }
            else if (this.delete_num >= 10 && this.delete_num < 20) {
                //10个以上1.1
                this.level_add_cash += Math.floor(this.delete_num * 1.1);
            }
            else if (this.delete_num >= 20 && this.delete_num < 30) {
                //20个以上1.2
                this.level_add_cash += Math.floor(this.delete_num * 1.2);
            }
            else {
                //大于30个1.5
                this.level_add_cash += Math.floor(this.delete_num * 1.5);
            }
        }
        cash.string = this.level_add_cash / 100 + "";
    };
    var Game_1;
    Game.Instance = null;
    Game = Game_1 = __decorate([
        ccclass
    ], Game);
    return Game;
}(cc.Component));
exports.default = Game;

cc._RF.pop();