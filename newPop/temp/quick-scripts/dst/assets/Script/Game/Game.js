
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Game.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQywwQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO0FBRXJCO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa1lDO1FBaFlXLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsT0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNQLE9BQUMsR0FBRyxFQUFFLENBQUM7UUFDUCxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFjLEdBQUcsRUFBRSxDQUFDOztJQXFYaEMsQ0FBQzthQWxZb0IsSUFBSTtJQWNYLHFCQUFNLEdBQWhCO1FBQ0ksSUFBSSxNQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN4QixNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBQ0QsVUFBVTtRQUNWLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxFQUFFLElBQUksQ0FBQyxZQUFZLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDbkQsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM3QyxJQUFJLENBQUMsS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQy9DLElBQUksQ0FBQyxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDM0MsSUFBSSxDQUFDLFVBQVUsQ0FBQyxVQUFVLEVBQUUsS0FBSyxFQUFFLEVBQUUsRUFBRSxJQUFJLENBQUMsWUFBWSxDQUFDLENBQUE7SUFDN0QsQ0FBQztJQUNPLHVCQUFRLEdBQWhCO1FBQ0ksSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsT0FBTyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxXQUFXLEVBQUUsSUFBSSxDQUFDLFdBQVcsRUFBRSxJQUFJLENBQUMsQ0FBQztRQUNsRSxJQUFJLENBQUMsY0FBYyxHQUFHLENBQUMsQ0FBQztRQUN4QixJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7UUFDdkIsT0FBTyxDQUFDLGtCQUFrQixFQUFFLENBQUM7UUFDN0IsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEVBQUUsQ0FBQTtZQUNkLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsRUFBRSxDQUFBO1lBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDekIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxNQUFNLEVBQUUsR0FBRyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUE7Z0JBQ3pELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztnQkFDaEIsUUFBUSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxFQUFFO29CQUNsQixLQUFLLENBQUM7d0JBQ0YsSUFBSSxHQUFHLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxZQUFZLENBQUMsQ0FBQTt3QkFDOUQsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLENBQUE7d0JBQzFCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO3dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ2pDLE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLElBQUksS0FBSyxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsY0FBYyxDQUFDLENBQUE7d0JBQ2xFLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLEtBQUssQ0FBQyxDQUFBO3dCQUM1QixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTt3QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNqQyxNQUFNO29CQUNWLEtBQUssQ0FBQzt3QkFDRixJQUFJLE1BQU0sR0FBRyxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGVBQWUsQ0FBQyxDQUFBO3dCQUNwRSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxNQUFNLENBQUMsQ0FBQTt3QkFDN0IsSUFBSSxDQUFDLE1BQU0sR0FBRyxPQUFPLENBQUE7d0JBQ3JCLElBQUksQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQTt3QkFDakMsTUFBTTtvQkFDVixLQUFLLENBQUM7d0JBQ0YsSUFBSSxJQUFJLEdBQUcsc0JBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxhQUFhLENBQUMsQ0FBQTt3QkFDaEUsSUFBSSxHQUFHLEVBQUUsQ0FBQyxXQUFXLENBQUMsSUFBSSxDQUFDLENBQUE7d0JBQzNCLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFBO3dCQUNyQixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ2pDLE1BQU07b0JBQ1YsS0FBSyxDQUFDO3dCQUNGLElBQUksSUFBSSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsYUFBYSxDQUFDLENBQUE7d0JBQ2hFLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxDQUFBO3dCQUMzQixJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQTt3QkFDckIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFBO2lCQUV4QztnQkFDRCxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQzthQUN2QjtTQUNKO0lBQ0wsQ0FBQztJQUNELFVBQVU7SUFDRiw2QkFBYyxHQUF0QjtRQUNJLDJEQUEyRDtRQUMzRCxjQUFjO1FBQ1YsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMxQyxJQUFJLEtBQUssR0FBYSxzQkFBWSxDQUFDLFFBQVEsQ0FBQyxRQUFRLENBQUMsTUFBTSxFQUFFLGtCQUFrQixDQUFDLENBQUM7UUFDakYsS0FBSyxDQUFDLE1BQU0sRUFBRSxDQUFDO1FBQ2YsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQztRQUNqQyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUM7UUFDNUIsSUFBSTtJQUNSLENBQUM7SUFDRCxjQUFjO0lBQ04seUJBQVUsR0FBbEIsVUFBbUIsR0FBVyxFQUFFLE9BQWUsRUFBRSxRQUFhLEVBQUUsUUFBa0I7UUFDOUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxXQUFXLENBQUMsR0FBRyxFQUFFLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQyxJQUFJLENBQUMsVUFBQSxHQUFHO1lBQ2pELFFBQVEsQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDdkIsQ0FBQyxDQUFDLENBQUE7UUFDRixrQkFBa0I7UUFDbEIsNENBQTRDO1FBQzVDLEtBQUs7SUFDVCxDQUFDO0lBQ08sMkJBQVksR0FBcEIsVUFBcUIsSUFBUztRQUMxQixFQUFFLENBQUMsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7UUFDekIsSUFBSSxRQUFRLEdBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDLFlBQVksQ0FBQyxFQUFFLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDeEcsUUFBUSxDQUFDLE1BQU0sR0FBRyxXQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLEtBQUssV0FBRyxDQUFBO1FBQ2hELElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUNyQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsSUFBSSxDQUFDLGNBQWMsRUFBRSxDQUFDO0lBQzFCLENBQUM7SUFDTyw0QkFBYSxHQUFyQjtRQUNJLElBQUksTUFBTSxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQ3hELElBQUksR0FBRyxHQUFXLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xELElBQUksU0FBUyxHQUFHLENBQUMsZUFBZSxFQUFDLFdBQVcsRUFBQyxXQUFXLENBQUMsQ0FBQztRQUMxRCxLQUFJLElBQUksQ0FBQyxHQUFDLENBQUMsRUFBQyxDQUFDLElBQUUsQ0FBQyxFQUFDLENBQUMsRUFBRSxFQUFDO1lBQ2pCLElBQUksR0FBRyxHQUFHLE1BQU0sQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFDLENBQUMsQ0FBQyxDQUFDO1lBQzFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsQ0FBQyxHQUFDLENBQUMsQ0FBQyxDQUFDLEVBQUMsSUFBSSxDQUFDLENBQUE7U0FDaEU7UUFDRCxJQUFJLE1BQU0sR0FBRyxHQUFHLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDO1FBQzFDLE1BQU0sQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDOUQsQ0FBQztJQUNPLDBCQUFXLEdBQW5CO1FBQ0ksSUFBSSxNQUFNLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDeEQsSUFBSSxHQUFHLEdBQVcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDbEQsSUFBSSxTQUFTLEdBQUcsQ0FBQyxlQUFlLEVBQUMsV0FBVyxFQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQzFELEtBQUksSUFBSSxDQUFDLEdBQUMsQ0FBQyxFQUFDLENBQUMsSUFBRSxDQUFDLEVBQUMsQ0FBQyxFQUFFLEVBQUM7WUFDakIsSUFBSSxHQUFHLEdBQUcsTUFBTSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUMsQ0FBQyxDQUFDLENBQUM7WUFDMUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxDQUFDLEdBQUMsQ0FBQyxDQUFDLENBQUMsRUFBQyxJQUFJLENBQUMsQ0FBQTtTQUNqRTtRQUNELElBQUksTUFBTSxHQUFHLEdBQUcsQ0FBQyxjQUFjLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDMUMsTUFBTSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUMvRCxDQUFDO0lBQ00sNEJBQWEsR0FBcEI7UUFDSSxJQUFJLFNBQVMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLGNBQWMsQ0FBQyxpQkFBaUIsQ0FBQyxDQUFDO1FBQzdELElBQUcsU0FBUyxFQUFDO1lBQ1QsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDM0I7YUFBSTtZQUNELElBQUksV0FBUyxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsd0JBQXdCLENBQUMsQ0FBQTtZQUNoRixJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLFdBQVMsQ0FBQyxDQUFDO1lBQ3JDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtJQUNMLENBQUM7SUFDTSx3QkFBUyxHQUFoQjtRQUNJLHNEQUFzRDtRQUN0RCxZQUFZO1FBQ1osMEJBQTBCO1FBQzFCLFNBQVM7UUFDVCw2RUFBNkU7UUFDN0UsdUNBQXVDO1FBQ3ZDLGdDQUFnQztRQUNoQyxJQUFJO0lBQ1IsQ0FBQztJQUNPLHdCQUFTLEdBQWpCO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxTQUFTLENBQUMsTUFBTSxFQUFDLENBQUMsQ0FBQyxDQUFBO0lBQ2hDLENBQUM7SUFDTyx3QkFBUyxHQUFqQjtRQUNJLEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLE1BQU0sRUFBQyxDQUFDLENBQUMsQ0FBQztJQUNqQyxDQUFDO0lBQ00sMkJBQVksR0FBbkIsVUFBb0IsSUFBVztRQUMzQixJQUFJLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDaEIsY0FBSSxDQUFDLFFBQVEsQ0FBQyxlQUFlLEdBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQztJQUMxQyxDQUFDO0lBQ00sdUJBQVEsR0FBZjtRQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsY0FBYyxDQUFDLFlBQVksQ0FBQyxDQUFDO1FBQ25ELElBQUcsSUFBSSxFQUFDO1lBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7U0FDdEI7YUFBSTtZQUNELElBQUksTUFBSSxHQUFHLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsbUJBQW1CLENBQUMsQ0FBQTtZQUN0RSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUMsV0FBVyxDQUFDLE1BQUksQ0FBQyxDQUFDO1lBQ2hDLElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLEtBQUssQ0FBQztTQUM1QjtRQUNELFVBQVU7UUFDVixpQ0FBaUM7SUFDckMsQ0FBQztJQUNPLDBCQUFXLEdBQW5CLFVBQW9CLENBQXNCO1FBQ3RDLElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1FBQzNELElBQUksR0FBRyxHQUFHLE9BQU8sQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQTtRQUN2RCxJQUFJLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFBO1FBQ2IsSUFBSSxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQTtRQUNiLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFBO1FBQ25CLElBQUksQ0FBQyxTQUFTLEdBQUcsRUFBRSxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUM7UUFDN0IscUJBQXFCO1FBQ3JCLE9BQU8sQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUM3QixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsRUFBRSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7UUFDekIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO1FBQ3pCLElBQUksQ0FBQyxVQUFVLEdBQUcsQ0FBQyxDQUFDO1FBQ3BCLElBQUksQ0FBQyxjQUFjLEdBQUcsRUFBRSxDQUFDO1FBQ3pCLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7UUFDekIsSUFBSSxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztRQUNyQyxPQUFPO1FBQ1AsSUFBSSxJQUFJLENBQUMsVUFBVSxLQUFLLENBQUMsRUFBRTtZQUN2QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEtBQUssQ0FBQztZQUNyQixPQUFNO1NBQ1Q7YUFBTTtZQUNILElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUNqQztJQUNMLENBQUM7SUFDTyxtQkFBSSxHQUFaLFVBQWEsQ0FBUyxFQUFFLENBQVM7UUFDN0IsSUFBSSxPQUFPLEdBQVksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsU0FBUyxDQUFDLENBQUM7UUFDM0QsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDNUIsQ0FBQyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEdBQUcsR0FBRyxDQUFDLEdBQUcsR0FBRyxDQUFDLENBQUM7UUFDaEMsQ0FBQyxHQUFHLENBQUMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ3BDLE9BQU87WUFDSCxDQUFDLEVBQUUsQ0FBQztZQUNKLENBQUMsRUFBRSxDQUFDO1NBQ1AsQ0FBQTtJQUNMLENBQUM7SUFDTyxtQkFBSSxHQUFaLFVBQWEsQ0FBUyxFQUFFLENBQVM7UUFDN0IsT0FBTyxFQUFFLENBQUMsRUFBRSxDQUFDLENBQUMsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLEVBQUUsR0FBRyxHQUFHLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQztJQUNoRCxDQUFDO0lBQ08sMEJBQVcsR0FBbkIsVUFBb0IsQ0FBUyxFQUFFLENBQVMsRUFBRSxDQUFTO1FBQy9DLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTtZQUM1QixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQTtZQUNoQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUE7WUFDakIsSUFBSSxHQUFHLEdBQUc7Z0JBQ04sR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7Z0JBQ04sR0FBRyxFQUFFLENBQUM7YUFDVCxDQUFBO1lBQ0QsUUFBUTtZQUNSLElBQUksR0FBRyxHQUFHLEVBQUUsQ0FBQztZQUNiLEdBQUcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDZCxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxDQUFDO1NBQ3hCO0lBQ0wsQ0FBQztJQUNPLHlCQUFVLEdBQWxCLFVBQW1CLEdBQUc7UUFDbEIsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO1FBQ2QsSUFBSSxHQUFHLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtZQUNoQixJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztZQUM5QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtnQkFDakMsSUFBSSxJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDO2dCQUNsQixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO2dCQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7Z0JBQ2YsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztnQkFDZixJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2xCLElBQUksR0FBRyxHQUFHOzRCQUNOLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQzs0QkFDVixHQUFHLEVBQUUsQ0FBQzs0QkFDTixHQUFHLEVBQUUsQ0FBQzt5QkFDVCxDQUFBO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2xCO2lCQUNKO2dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDUixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFO3dCQUNoQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUM7d0JBQ3JCLElBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQzt3QkFDbEIsSUFBSSxHQUFHLEdBQUc7NEJBQ04sR0FBRyxFQUFFLENBQUMsR0FBRyxDQUFDOzRCQUNWLEdBQUcsRUFBRSxDQUFDOzRCQUNOLEdBQUcsRUFBRSxDQUFDO3lCQUNULENBQUE7d0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQztxQkFDbEI7aUJBQ0o7Z0JBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNSLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2hDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsQ0FBQzt3QkFDckIsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO3dCQUNsQixJQUFJLEdBQUcsR0FBRzs0QkFDTixHQUFHLEVBQUUsQ0FBQzs0QkFDTixHQUFHLEVBQUUsQ0FBQyxHQUFHLENBQUM7NEJBQ1YsR0FBRyxFQUFFLENBQUM7eUJBQ1QsQ0FBQTt3QkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxDQUFDO3FCQUNsQjtpQkFDSjtnQkFDRCxJQUFJLENBQUMsSUFBSSxDQUFDLEVBQUU7b0JBQ1IsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLENBQUMsSUFBSSxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRTt3QkFDaEMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFDO3dCQUNyQixJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7d0JBQ2xCLElBQUksR0FBRyxHQUFHOzRCQUNOLEdBQUcsRUFBRSxDQUFDOzRCQUNOLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQzs0QkFDVixHQUFHLEVBQUUsQ0FBQzt5QkFDVCxDQUFBO3dCQUNELElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUM7cUJBQ2xCO2lCQUNKO2FBQ0o7WUFDRCxJQUFJLENBQUMsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDO1NBQ3pCO0lBQ0wsQ0FBQztJQUNELGtCQUFrQjtJQUNWLGdDQUFpQixHQUF6QixVQUEwQixNQUFlO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sRUFBRTtZQUM3QixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNoQixJQUFJLENBQUMsWUFBWSxHQUFHLE1BQU0sQ0FBQztRQUMzQixJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxhQUFhLEVBQUUsS0FBSyxFQUFFLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDO1FBQ3pFLElBQUcsQ0FBQyxNQUFNLEVBQUM7WUFDUCxJQUFJLENBQUMsZUFBZSxFQUFFLENBQUM7U0FDMUI7SUFDTCxDQUFDO0lBQ08sNEJBQWEsR0FBckI7UUFDSSxJQUFJLEdBQUcsR0FBRyxJQUFJLENBQUMsY0FBYyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUMzQyxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxDQUFDLE1BQU0sRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUNqQyxJQUFJLElBQUksR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUM7WUFDbEIsSUFBSSxDQUFDLEdBQUcsSUFBSSxDQUFDLENBQUMsQ0FBQztZQUNmLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUM7WUFDZixJQUFJLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDO1lBQ2YsU0FBUztZQUNULElBQUksT0FBTyxHQUFZLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFNBQVMsQ0FBQyxDQUFDO1lBQzNELElBQUksS0FBSyxHQUFjLHNCQUFZLENBQUMsUUFBUSxDQUFDLFFBQVEsQ0FBQyxNQUFNLEVBQUUsZUFBZSxDQUFDLENBQUE7WUFDOUUsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDLFdBQVcsQ0FBQyxLQUFLLENBQUMsQ0FBQTtZQUNoQyxJQUFJLENBQUMsTUFBTSxHQUFHLE9BQU8sQ0FBQztZQUN0QixJQUFJLENBQUMsV0FBVyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUE7WUFDakMsSUFBSSxNQUFNLEdBQWdCLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsWUFBWSxDQUFDLGFBQWEsQ0FBQyxDQUFDO1lBQ25GLElBQUksR0FBRyxHQUFHLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLE1BQU0sRUFBRSxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUMsQ0FBQztZQUM1QyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUMsRUFBRSxRQUFRLEdBQUcsR0FBRyxFQUFFLEtBQUssQ0FBQyxDQUFDO1lBRTlDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7WUFDdEIsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUE7U0FDdEI7UUFDRCxJQUFJLElBQUksQ0FBQyxNQUFNLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxFQUFFO1lBQ2hELElBQUksQ0FBQyxnQkFBZ0IsRUFBRSxDQUFBO1NBQzFCO1FBQ0QsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO0lBQ2xCLENBQUM7SUFDTywrQkFBZ0IsR0FBeEI7UUFDSSxJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7SUFDeEMsQ0FBQztJQUNPLDBCQUFXLEdBQW5CO1FBQ0ksS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLEdBQUcsR0FBRyxDQUFDLENBQUE7WUFDWCxLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFBRSxFQUFFO2dCQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLEdBQUcsR0FBRyxDQUFDLEVBQUU7b0JBQzdCLElBQUksUUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsRUFBRSxDQUFDLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQTtvQkFDMUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsUUFBTSxDQUFDLENBQUE7b0JBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7b0JBQ2pDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO29CQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO29CQUNqQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtvQkFDbkIsU0FBUTtpQkFDWDtnQkFDRCxJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLElBQUksQ0FBQyxFQUFFO29CQUNuQixHQUFHLEdBQUcsR0FBRyxHQUFHLENBQUMsQ0FBQTtpQkFDaEI7YUFDSjtTQUNKO1FBQ0QsSUFBSSxNQUFNLEdBQUcsQ0FBQyxDQUFBO1FBQ2QsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLEVBQUUsRUFBRSxDQUFDLEVBQUUsRUFBRTtZQUN6QixJQUFJLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxJQUFJLE1BQU0sR0FBRyxDQUFDLEVBQUU7Z0JBQ2hDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxFQUFFLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3pCLElBQUksSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxDQUFDLEVBQUU7d0JBQ2xCLElBQUksTUFBTSxHQUFHLEVBQUUsQ0FBQyxNQUFNLENBQUMsR0FBRyxFQUFFLENBQUMsTUFBTSxHQUFHLEdBQUcsRUFBRSxDQUFDLENBQUMsQ0FBQTt3QkFDN0MsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUE7d0JBQzlCLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLE1BQU0sQ0FBQyxHQUFHLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7d0JBQ3BDLElBQUksQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxDQUFBO3dCQUNoQixJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxNQUFNLENBQUMsR0FBRyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFBO3dCQUNwQyxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxHQUFHLElBQUksQ0FBQTtxQkFDdEI7aUJBRUo7Z0JBQ0QsU0FBUTthQUNYO1lBQ0QsSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDbkIsTUFBTSxFQUFFLENBQUE7YUFDWDtTQUNKO0lBQ0wsQ0FBQztJQUNEOztNQUVFO0lBQ00sOEJBQWUsR0FBdkI7UUFDSSxnQkFBZ0I7UUFDaEIsSUFBSSxJQUFJLEdBQWEsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQzlILElBQUksSUFBSSxDQUFDLFVBQVUsS0FBSyxDQUFDLEVBQUU7WUFDdkIsSUFBRyxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsRUFBQztnQkFDbEIsTUFBTTtnQkFDTixJQUFJLENBQUMsY0FBYyxJQUFFLElBQUksQ0FBQyxVQUFVLENBQUE7YUFDdkM7aUJBQUssSUFBRyxJQUFJLENBQUMsVUFBVSxJQUFFLEVBQUUsSUFBRSxJQUFJLENBQUMsVUFBVSxHQUFDLEVBQUUsRUFBQztnQkFDN0MsVUFBVTtnQkFDVixJQUFJLENBQUMsY0FBYyxJQUFFLElBQUksQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsR0FBQyxHQUFHLENBQUMsQ0FBQzthQUN4RDtpQkFBSyxJQUFHLElBQUksQ0FBQyxVQUFVLElBQUUsRUFBRSxJQUFFLElBQUksQ0FBQyxVQUFVLEdBQUMsRUFBRSxFQUFDO2dCQUM3QyxVQUFVO2dCQUNWLElBQUksQ0FBQyxjQUFjLElBQUUsSUFBSSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxHQUFDLEdBQUcsQ0FBQyxDQUFBO2FBQ3ZEO2lCQUFJO2dCQUNELFVBQVU7Z0JBQ1YsSUFBSSxDQUFDLGNBQWMsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkQ7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQy9DLENBQUM7O0lBaFlhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFEbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtZeEI7SUFBRCxXQUFDO0NBbFlELEFBa1lDLENBbFlpQyxFQUFFLENBQUMsU0FBUyxHQWtZN0M7a0JBbFlvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c0J1bmRsZSBmcm9tIFwiLi9Bc3NldHNCdW5kbGVcIjtcbmltcG9ydCBDYXNoIGZyb20gXCIuLi9Db21wb25lbnQvQ2FzaFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbnZhciBzZWxmOiBhbnkgPSBudWxsO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgd3JhcDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3A6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGVsZXRlX251bTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNsaWNrX3BvczogY2MuVmVjMyA9IG51bGw7XG4gICAgcHJpdmF0ZSBhID0gW107XG4gICAgcHJpdmF0ZSBiID0gW107XG4gICAgcHJpdmF0ZSBkaWZmaWN1bHR5OiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWxfYWRkX2Nhc2ggPSAwO1xuICAgIHByaXZhdGUgaXNfb3Zlcl9nYW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZWxldGVfcG9zX2FyciA9IFtdO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChHYW1lLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBHYW1lLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5Yid5aeL5YyW55qE55So5oi35pWw5o2uXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIC8v5rOo5YaM5LiA5Lqb5LqL5Lu2XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiY2FzaFwiLCB0aGlzLnNob3dDYXNoVHlwZSwgdGhpcyk7XG4gICAgICAgIHRoaXMud3JhcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndyYXBcIik7XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKTtcbiAgICAgICAgdGhpcy5wb3AgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XG4gICAgICAgIHRoaXMuZ2V0UmVxSW5mbyhcIlVzZXJJbmZvXCIsIFwiR0VUXCIsIHt9LCB0aGlzLmluaXRVc2VySW5mbylcbiAgICB9XG4gICAgcHJpdmF0ZSBJbml0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbnRlbnQ6IGNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgICAgICBjb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoR3JvdW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCA9IDA7XG4gICAgICAgIHRoaXMuc2V0TGV2ZWxBZGRDYXNoKCk7XG4gICAgICAgIGNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hW2ldID0gW11cbiAgICAgICAgICAgIHRoaXMuYltpXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZCA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvcmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JlZW4gPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2dyZWVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUoZ3JlZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ZWxsb3cgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL3llbGxvd1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHllbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsdWUgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2JsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShibHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGluayA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvcGlua1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHBpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/nlKjmiLfpppbmrKHov5vmnaXlvLnnqpdcbiAgICBwcml2YXRlIGZpcnN0RW50ZXJHYW1lKCk6dm9pZHtcbiAgICAgICAgLy8gbGV0IGZpcnN0OnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0XCIpO1xuICAgICAgICAvLyBpZighZmlyc3Qpe1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIix0cnVlKTtcbiAgICAgICAgICAgIGxldCBmaXJzdDpjYy5QcmVmYWIgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2ZpcnN0X3BvcFwiKTtcbiAgICAgICAgICAgIGZpcnN0LmFkZFJlZigpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShmaXJzdCk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvL+WGmeS4gOS4quaOpeWPo+i/lOWbnuivt+axgueahOaVsOaNrlxuICAgIHByaXZhdGUgZ2V0UmVxSW5mbyhhcGk6IHN0cmluZywgcmVxVHlwZTogc3RyaW5nLCBzZW5kRGF0YTogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoYXBpLCByZXFUeXBlLCBzZW5kRGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAvLyAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGDor7fmsYIke2FwaX3lpLHotKXvvIzplJnor6/ov5Tlm54ke2Vycn1gKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0VXNlckluZm8oZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gZGF0YTtcbiAgICAgICAgbGV0IGxldmVsTGJsOiBjYy5MYWJlbCA9IHNlbGYud3JhcC5nZXRDaGlsZEJ5TmFtZShcImxldmVsXCIpLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxldmVsTGJsLnN0cmluZyA9IGDnrKwke2NjLlRvb2xzLnVzZXJJbmZvLmxldmVsfeWFs2BcbiAgICAgICAgc2VsZi5yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgIHNlbGYuSW5pdEdhbWUoKTtcbiAgICAgICAgc2VsZi5maXJzdEVudGVyR2FtZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTp2b2lke1xuICAgICAgICBsZXQgYm90dG9tOmNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21cIik7XG4gICAgICAgIGxldCB0b3A6Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgbGV0IGV2ZW50RnVuYyA9IFtcInNob3dUdXJudGFibGVcIixcInNob3dBd2FyZFwiLFwic2hvd0Nhc2gyXCJdO1xuICAgICAgICBmb3IobGV0IGk9MTtpPD0zO2krKyl7XG4gICAgICAgICAgICBsZXQgYnRuID0gYm90dG9tLmdldENoaWxkQnlOYW1lKFwiYnRuX1wiK2kpO1xuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzW2V2ZW50RnVuY1tpLTFdXSx0aGlzKVxuICAgICAgICB9XG4gICAgICAgIGxldCBhdmF0YXIgPSB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJhdmF0YXJcIik7XG4gICAgICAgIGF2YXRhci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zaG93Q2FzaDEsdGhpcylcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIDp2b2lke1xuICAgICAgICBsZXQgYm90dG9tOmNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21cIik7XG4gICAgICAgIGxldCB0b3A6Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgbGV0IGV2ZW50RnVuYyA9IFtcInNob3dUdXJudGFibGVcIixcInNob3dBd2FyZFwiLFwic2hvd0Nhc2gyXCJdO1xuICAgICAgICBmb3IobGV0IGk9MTtpPD0zO2krKyl7XG4gICAgICAgICAgICBsZXQgYnRuID0gYm90dG9tLmdldENoaWxkQnlOYW1lKFwiYnRuX1wiK2kpO1xuICAgICAgICAgICAgYnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpc1tldmVudEZ1bmNbaS0xXV0sdGhpcylcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXZhdGFyID0gdG9wLmdldENoaWxkQnlOYW1lKFwiYXZhdGFyXCIpO1xuICAgICAgICBhdmF0YXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnNob3dDYXNoMSx0aGlzKVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1R1cm50YWJsZSgpOnZvaWR7XG4gICAgICAgIGxldCB0dXJudGFibGUgPSB0aGlzLmxheWVyLmdldENoaWxkQnlOYW1lKFwidHVybnRhYmxlX2xheWVyXCIpO1xuICAgICAgICBpZih0dXJudGFibGUpe1xuICAgICAgICAgICAgdHVybnRhYmxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHR1cm50YWJsZSA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvdHVybnRhYmxlX2xheWVyXCIpXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHR1cm50YWJsZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHNlbGYubGF5ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dBd2FyZCgpOnZvaWR7XG4gICAgICAgIC8vIGxldCBjYXNoID0gdGhpcy5sYXllci5nZXRDaGlsZEJ5TmFtZShcImNhc2hfbGF5ZXJcIik7XG4gICAgICAgIC8vIGlmKGNhc2gpe1xuICAgICAgICAvLyAgICAgY2FzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIGxldCBjYXNoID0gQXNzZXRzQnVuZGxlLkluc3RhbmNlLmdldEFzc2V0KFwiR2FtZVwiLCBcIlByZWZhYi9jYXNoX2xheWVyXCIpXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNhc2gpO1xuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSBzZWxmLmxheWVyO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0Nhc2gyKCk6dm9pZHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiY2FzaFwiLDIpXG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0Nhc2gxKCk6dm9pZHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiY2FzaFwiLDEpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0Nhc2hUeXBlKHR5cGU6bnVtYmVyKTp2b2lke1xuICAgICAgICB0aGlzLnNob3dDYXNoKCk7XG4gICAgICAgIENhc2guSW5zdGFuY2VbXCJzaG93VHlwZUxheWVyXCIrdHlwZV0oKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dDYXNoKCk6dm9pZHtcbiAgICAgICAgbGV0IGNhc2ggPSB0aGlzLmxheWVyLmdldENoaWxkQnlOYW1lKFwiY2FzaF9sYXllclwiKTtcbiAgICAgICAgaWYoY2FzaCl7XG4gICAgICAgICAgICBjYXNoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGNhc2ggPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2Nhc2hfbGF5ZXJcIilcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoY2FzaCk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHNlbGYubGF5ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gaWYoKVxuICAgICAgICAvLyBDYXNoLkluc3RhbmNlLnNob3dUeXBlTGF5ZXIxKClcbiAgICB9XG4gICAgcHJpdmF0ZSB0b3VjaEdyb3VuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBjb250ZW50OiBjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICAgICAgbGV0IHBvcyA9IGNvbnRlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKVxuICAgICAgICBsZXQgeCA9IHBvcy54XG4gICAgICAgIGxldCB5ID0gcG9zLnlcbiAgICAgICAgdGhpcy5kZWxldGVfbnVtID0gMFxuICAgICAgICB0aGlzLmNsaWNrX3BvcyA9IGNjLnYzKHgsIHkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh4LCB5KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Ub0lKKHgsIHkpKTtcbiAgICAgICAgbGV0IGkgPSB0aGlzLlRvSUooeCwgeSkueFxuICAgICAgICBsZXQgaiA9IHRoaXMuVG9JSih4LCB5KS55XG4gICAgICAgIHRoaXMuZGVsZXRlX251bSA9IDA7XG4gICAgICAgIHRoaXMuZGVsZXRlX3Bvc19hcnIgPSBbXTtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICB0aGlzLlRvdWNoX2Jsb2NrKGksIGosIHRoaXMuYVtpXVtqXSk7XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlX251bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5hW2ldW2pdID0gY29sb3I7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlQmxvY2soZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgVG9JSihpOiBudW1iZXIsIGo6IG51bWJlcikge1xuICAgICAgICBsZXQgY29udGVudDogY2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgICAgIGxldCB2YWwgPSBjb250ZW50LndpZHRoIC8gMjtcbiAgICAgICAgaSA9IE1hdGguZmxvb3IoKGkgKyB2YWwpIC8gMTAwKTtcbiAgICAgICAgaiA9IDkgLSBNYXRoLmZsb29yKChqICsgdmFsKSAvIDEwMCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBqLFxuICAgICAgICAgICAgeTogaVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgVG9YWSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gY2MudjIoLTQ1MCArIDEwMCAqIHksIDQ1MCAtIDEwMCAqIHgpO1xuICAgIH1cbiAgICBwcml2YXRlIFRvdWNoX2Jsb2NrKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rK1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNwbGl0VG9BcnIoYXJyKTogdm9pZCB7XG4gICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVfcG9zX2Fyci5wdXNoKGFycik7XG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGFyci5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXJyW3RdO1xuICAgICAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgICAgIGxldCBqID0gZGF0YS5qO1xuICAgICAgICAgICAgICAgIGxldCBrID0gZGF0YS5rO1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpIC0gMV1bal0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2kgLSAxXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGkgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaSArIDFdW2pdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpICsgMV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGogIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2ogLSAxXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1baiAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX251bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaiAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrXCI6IGtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqICE9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqICsgMV0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogKyAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGogKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3BsaXRUb0FycihfYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlsIbopoFkZWxldGXnmoTmlbDmja7ov5vooYzlpITnkIZcbiAgICBwcml2YXRlIGhhbmRsZURlbGV0ZUJsb2NrKGlzT3ZlcjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGVsZXRlX3Bvc19hcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgICAgICB0aGlzLmlzX292ZXJfZ2FtZSA9IGlzT3ZlcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IsIDAuMDMyLCB0aGlzLmRlbGV0ZV9wb3NfYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZighaXNPdmVyKXtcbiAgICAgICAgICAgIHRoaXMuc2V0TGV2ZWxBZGRDYXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVCbG9ja0NiKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5kZWxldGVfcG9zX2Fyclt0aGlzLl9jb3VudF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYXJyLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgbGV0IGogPSBkYXRhLmo7XG4gICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgIC8vc3BpbmXnibnmlYhcbiAgICAgICAgICAgIGxldCBjb250ZW50OiBjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgIGxldCBzcGluZTogY2MuUHJlZmFiID0gQXNzZXRzQnVuZGxlLkluc3RhbmNlLmdldEFzc2V0KFwiR2FtZVwiLCBcIlByZWZhYi9lZmZlY3RcIilcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoc3BpbmUpXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgIGxldCBfc3BpbmU6IHNwLlNrZWxldG9uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmdldENvbXBvbmVudChcInNwLlNrZWxldG9uXCIpO1xuICAgICAgICAgICAgbGV0IHJkbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMgKyAxKTtcbiAgICAgICAgICAgIF9zcGluZS5zZXRBbmltYXRpb24oMCwgXCJTVFlMRV9cIiArIHJkbSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLmJbaV1bal0uZGVzdHJveSgpXG4gICAgICAgICAgICB0aGlzLmJbaV1bal0gPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ID09PSB0aGlzLmRlbGV0ZV9wb3NfYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEZWxldGVCbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQrKztcbiAgICB9XG4gICAgcHJpdmF0ZSBhZnRlckRlbGV0ZUJsb2NrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IpO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUJsb2NrKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBudW0gPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5tb3ZlQnkoMC4zLCAwLCAtbnVtICogMTAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1bal0ucnVuQWN0aW9uKGFjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2kgKyBudW1dW2pdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iW2kgKyBudW1dW2pdID0gdGhpcy5iW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IG51bSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IF9jb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID4gMCAmJiBfY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZUJ5KDAuMywgLV9jb3VudCAqIDEwMCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSBfY291bnRdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1baiAtIF9jb3VudF0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICBfY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOavj+a2iOmZpOS4gOS4quaWueWdl+eahOWfuuehgOW+l+WIhuS4ujAuMDHlhYPpkrHvvIzkuIDmrKHmtojpmaQxMOS4quS7peS4iuiOt+W+lzEuMeWAjeeOh++8jOS4gOasoea2iOmZpDIw5Liq5Lul5LiK6I635b6XMS4y5YCN546H77yM5LiA5qyh5raI6ZmkMzDkuKrku6XkuIrojrflvpcxLjXlgI3njofvvIzmnIDlpKfkuLoxLjXlgI3njofjgILmnIDnu4jlvpfliLDph5Hpop3lkJHkuIvlj5bmlbRcbiAgICAqL1xuICAgIHByaXZhdGUgc2V0TGV2ZWxBZGRDYXNoKCk6IHZvaWQge1xuICAgICAgICAvL2xldmVsX2FkZF9jYXNoXG4gICAgICAgIGxldCBjYXNoOiBjYy5MYWJlbCA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwiY2FzaFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAodGhpcy5kZWxldGVfbnVtICE9PSAwKSB7XG4gICAgICAgICAgICBpZih0aGlzLmRlbGV0ZV9udW08MTApe1xuICAgICAgICAgICAgICAgIC8v5rKh5pyJ5YCN546HXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCs9dGhpcy5kZWxldGVfbnVtXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmRlbGV0ZV9udW0+PTEwJiZ0aGlzLmRlbGV0ZV9udW08MjApe1xuICAgICAgICAgICAgICAgIC8vMTDkuKrku6XkuIoxLjFcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2FkZF9jYXNoKz1NYXRoLmZsb29yKHRoaXMuZGVsZXRlX251bSoxLjEpO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5kZWxldGVfbnVtPj0yMCYmdGhpcy5kZWxldGVfbnVtPDMwKXtcbiAgICAgICAgICAgICAgICAvLzIw5Liq5Lul5LiKMS4yXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCs9TWF0aC5mbG9vcih0aGlzLmRlbGV0ZV9udW0qMS4yKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy/lpKfkuo4zMOS4qjEuNVxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfYWRkX2Nhc2grPU1hdGguZmxvb3IodGhpcy5kZWxldGVfbnVtKjEuNSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNoLnN0cmluZyA9IHRoaXMubGV2ZWxfYWRkX2Nhc2gvMTAwICsgXCJcIjtcbiAgICB9XG59Il19