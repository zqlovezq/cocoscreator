
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/__qc_index__.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}
require('./assets/Script/Component/Cash');
require('./assets/Script/Component/FirstPop');
require('./assets/Script/Component/Main');
require('./assets/Script/Component/Turntable');
require('./assets/Script/Game/AssetsBundle');
require('./assets/Script/Game/Game');
require('./assets/Script/Game/GameLanch');
require('./assets/Script/Game/GameResPkg');
require('./assets/Script/Game/Login');
require('./assets/Script/Tools/CocosBridge');
require('./assets/Script/Tools/MD5');
require('./assets/Script/Tools/Observer');
require('./assets/Script/Tools/Tools');
require('./assets/Script/Tools/encrypt');

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
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Component/Cash.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e25c83VjClOeLd4srFQgpAK', 'Cash');
// Script/Component/Cash.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Cash = /** @class */ (function (_super) {
    __extends(Cash, _super);
    function Cash() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = null;
        return _this;
    }
    Cash_1 = Cash;
    Cash.prototype.onLoad = function () {
        if (Cash_1.Instance === null) {
            Cash_1.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    };
    Cash.prototype.onEnable = function () {
        this.initLayer();
        this.registerEvent();
    };
    Cash.prototype.initLayer = function () {
        var common = this.wrap.getChildByName("common");
        var cash = common.getChildByName("layout").getChildByName("cash").getComponent(cc.Label);
        cash.string = cc.Tools.userInfo.amount / 100 + "";
    };
    Cash.prototype.showTypeLayer1 = function () {
        this.showTypeLayer(1);
    };
    Cash.prototype.showTypeLayer2 = function () {
        this.showTypeLayer(2);
    };
    //显示哪个界面 1:无门槛提现 2:每日提现
    Cash.prototype.showTypeLayer = function (type) {
        var common = this.wrap.getChildByName("common");
        var type1 = this.wrap.getChildByName("type_1");
        var type2 = this.wrap.getChildByName("type_2");
        var btn1 = common.getChildByName("btn_1");
        var btn2 = common.getChildByName("btn_2");
        if (type === 1) {
            btn1.getChildByName("select").active = true;
            btn2.getChildByName("select").active = false;
            type1.active = true;
            type2.active = false;
        }
        else {
            btn1.getChildByName("select").active = false;
            btn2.getChildByName("select").active = true;
            type1.active = false;
            type2.active = true;
        }
    };
    Cash.prototype.registerEvent = function () {
        var common = this.wrap.getChildByName("common");
        var closeBtn = common.getChildByName("close_btn");
        var btn1 = common.getChildByName("btn_1");
        var btn2 = common.getChildByName("btn_2");
        btn1.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer1, this);
        btn2.on(cc.Node.EventType.TOUCH_END, this.showTypeLayer2, this);
        closeBtn.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    };
    Cash.prototype.removeEvent = function () {
        var common = this.wrap.getChildByName("common");
        var closeBtn = common.getChildByName("close_btn");
        var btn1 = common.getChildByName("btn_1");
        var btn2 = common.getChildByName("btn_2");
        btn1.off(cc.Node.EventType.TOUCH_END, this.showTypeLayer1, this);
        btn2.off(cc.Node.EventType.TOUCH_END, this.showTypeLayer2, this);
        closeBtn.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    };
    Cash.prototype.closeLayer = function () {
        var _this = this;
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(function () {
            _this.removeEvent();
        });
    };
    var Cash_1;
    Cash.Instance = null;
    Cash = Cash_1 = __decorate([
        ccclass
    ], Cash);
    return Cash;
}(cc.Component));
exports.default = Cash;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tcG9uZW50L0Nhc2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQU0sSUFBQSxLQUFxQixFQUFFLENBQUMsVUFBVSxFQUFqQyxPQUFPLGFBQUEsRUFBQyxRQUFRLGNBQWlCLENBQUM7QUFFekM7SUFBa0Msd0JBQVk7SUFBOUM7UUFBQSxxRUF1RUM7UUFyRVcsVUFBSSxHQUFXLElBQUksQ0FBQzs7SUFxRWhDLENBQUM7YUF2RW9CLElBQUk7SUFHWCxxQkFBTSxHQUFoQjtRQUNJLElBQUksTUFBSSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDeEIsTUFBSSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDeEI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNTLHVCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLFNBQVMsRUFBRSxDQUFDO1FBQ2pCLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ08sd0JBQVMsR0FBakI7UUFDSSxJQUFJLE1BQU0sR0FBVyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxRQUFRLENBQUMsQ0FBQztRQUN4RCxJQUFJLElBQUksR0FBWSxNQUFNLENBQUMsY0FBYyxDQUFDLFFBQVEsQ0FBQyxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxZQUFZLENBQUMsRUFBRSxDQUFDLEtBQUssQ0FBQyxDQUFDO1FBQ2xHLElBQUksQ0FBQyxNQUFNLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxHQUFDLEdBQUcsR0FBQyxFQUFFLENBQUM7SUFDbEQsQ0FBQztJQUNNLDZCQUFjLEdB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SSxDQUFDLGNBQWMsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUMvRCxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsY0FBYyxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQy9ELFFBQVEsQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDbkUsQ0FBQztJQUNPLHlCQUFVLEdBQWxCO1FBQUEsaUJBTUM7UUFMRyxPQUFPLENBQUMsR0FBRyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQ3JCLElBQUksQ0FBQyxJQUFJLENBQUMsTUFBTSxHQUFHLEtBQUssQ0FBQztRQUN6QixJQUFJLENBQUMsWUFBWSxDQUFDO1lBQ2QsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQ3ZCLENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQzs7SUFyRWEsYUFBUSxHQUFTLElBQUksQ0FBQztJQURuQixJQUFJO1FBRHhCLE9BQU87T0FDYSxJQUFJLENBdUV4QjtJQUFELFdBQUM7Q0F2RUQsQUF1RUMsQ0F2RWlDLEVBQUUsQ0FBQyxTQUFTLEdBdUU3QztrQkF2RW9CLElBQUkiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENhc2ggZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IENhc2ggPSBudWxsO1xuICAgIHByaXZhdGUgd3JhcDpjYy5Ob2RlID0gbnVsbDtcbiAgICBwcm90ZWN0ZWQgb25Mb2FkKCk6IHZvaWQge1xuICAgICAgICBpZiAoQ2FzaC5JbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgQ2FzaC5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyYXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuaW5pdExheWVyKCk7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xuICAgIH1cbiAgICBwcml2YXRlIGluaXRMYXllcigpOnZvaWR7XG4gICAgICAgIGxldCBjb21tb246Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcImNvbW1vblwiKTtcbiAgICAgICAgbGV0IGNhc2g6Y2MuTGFiZWwgPSBjb21tb24uZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJjYXNoXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGNhc2guc3RyaW5nID0gY2MuVG9vbHMudXNlckluZm8uYW1vdW50LzEwMCtcIlwiO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd1R5cGVMYXllcjEoKTp2b2lke1xuICAgICAgICB0aGlzLnNob3dUeXBlTGF5ZXIoMSlcbiAgICB9XG4gICAgcHVibGljIHNob3dUeXBlTGF5ZXIyKCk6dm9pZHtcbiAgICAgICAgdGhpcy5zaG93VHlwZUxheWVyKDIpXG4gICAgfVxuICAgIC8v5pi+56S65ZOq5Liq55WM6Z2iIDE65peg6Zeo5qeb5o+Q546wIDI65q+P5pel5o+Q546wXG4gICAgcHJpdmF0ZSBzaG93VHlwZUxheWVyKHR5cGU6bnVtYmVyKXtcbiAgICAgICAgbGV0IGNvbW1vbjpjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29tbW9uXCIpO1xuICAgICAgICBsZXQgdHlwZTEgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0eXBlXzFcIik7XG4gICAgICAgIGxldCB0eXBlMiA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInR5cGVfMlwiKTtcbiAgICAgICAgbGV0IGJ0bjEgPSBjb21tb24uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMVwiKTtcbiAgICAgICAgbGV0IGJ0bjIgPSBjb21tb24uZ2V0Q2hpbGRCeU5hbWUoXCJidG5fMlwiKTtcbiAgICAgICAgaWYodHlwZT09PTEpe1xuICAgICAgICAgICAgYnRuMS5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgYnRuMi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHR5cGUxLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB0eXBlMi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICBidG4xLmdldENoaWxkQnlOYW1lKFwic2VsZWN0XCIpLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgYnRuMi5nZXRDaGlsZEJ5TmFtZShcInNlbGVjdFwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgdHlwZTEuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB0eXBlMi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbW1vbjpjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29tbW9uXCIpO1xuICAgICAgICBsZXQgY2xvc2VCdG4gPSBjb21tb24uZ2V0Q2hpbGRCeU5hbWUoXCJjbG9zZV9idG5cIik7XG4gICAgICAgIGxldCBidG4xID0gY29tbW9uLmdldENoaWxkQnlOYW1lKFwiYnRuXzFcIik7XG4gICAgICAgIGxldCBidG4yID0gY29tbW9uLmdldENoaWxkQnlOYW1lKFwiYnRuXzJcIik7XG4gICAgICAgIGJ0bjEub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuc2hvd1R5cGVMYXllcjEsdGhpcyk7XG4gICAgICAgIGJ0bjIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuc2hvd1R5cGVMYXllcjIsdGhpcyk7XG4gICAgICAgIGNsb3NlQnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLmNsb3NlTGF5ZXIsdGhpcyk7XG4gICAgfVxuICAgIHByaXZhdGUgcmVtb3ZlRXZlbnQoKTogdm9pZCB7XG4gICAgICAgIGxldCBjb21tb246Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcImNvbW1vblwiKTtcbiAgICAgICAgbGV0IGNsb3NlQnRuID0gY29tbW9uLmdldENoaWxkQnlOYW1lKFwiY2xvc2VfYnRuXCIpO1xuICAgICAgICBsZXQgYnRuMSA9IGNvbW1vbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl8xXCIpO1xuICAgICAgICBsZXQgYnRuMiA9IGNvbW1vbi5nZXRDaGlsZEJ5TmFtZShcImJ0bl8yXCIpO1xuICAgICAgICBidG4xLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zaG93VHlwZUxheWVyMSx0aGlzKTtcbiAgICAgICAgYnRuMi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuc2hvd1R5cGVMYXllcjIsdGhpcyk7XG4gICAgICAgIGNsb3NlQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5jbG9zZUxheWVyLHRoaXMpO1xuICAgIH1cbiAgICBwcml2YXRlIGNsb3NlTGF5ZXIoKTogdm9pZCB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY2xvc2VcIik7XG4gICAgICAgIHRoaXMubm9kZS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCk9PntcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnQoKTtcbiAgICAgICAgfSlcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9HYW1lLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLCtDQUEwQztBQUMxQywwQ0FBcUM7QUFDL0IsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO0FBRXJCO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBa1lDO1FBaFlXLFVBQUksR0FBWSxJQUFJLENBQUM7UUFDckIsV0FBSyxHQUFZLElBQUksQ0FBQztRQUN0QixTQUFHLEdBQVksSUFBSSxDQUFDO1FBQ3BCLGdCQUFVLEdBQVcsQ0FBQyxDQUFDO1FBQ3ZCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsT0FBQyxHQUFHLEVBQUUsQ0FBQztRQUNQLE9BQUMsR0FBRyxFQUFFLENBQUM7UUFDUCxnQkFBVSxHQUFXLENBQUMsQ0FBQztRQUN2QixZQUFNLEdBQVcsQ0FBQyxDQUFDO1FBQ25CLG9CQUFjLEdBQUcsQ0FBQyxDQUFDO1FBQ25CLGtCQUFZLEdBQVksS0FBSyxDQUFDO1FBQzlCLG9CQUFjLEdBQUcsRUFBRSxDQUFDOztJQXFYaEMsQ0FBQzthQWxZb0IsSUFBSTtJQWNYLHFCQUFNLEdBQWhCO1FBQ0ksSUFBSSxNQUFJLENBQUMsUUFBUSxLQUFLLElBQUksRUFBRTtZQUN4QixNQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUN4QjthQUFNO1lBQ0gsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBQ0QsVUFBVTtRQUNWLElBQUksR0FBRyxJQUFJLENBQUM7UUFDWixFQUFFLENBQUMsS0FBSyxDQUFDLGFBQWEsRUFBRSxDQUFDO1FBQ3pCLFFBQVE7UUFDUixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssQ0FBQyxFQUFFLENBQUMsTUFBTSxF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Z0JBQ1YsSUFBSSxDQUFDLGNBQWMsSUFBRSxJQUFJLENBQUMsS0FBSyxDQUFDLElBQUksQ0FBQyxVQUFVLEdBQUMsR0FBRyxDQUFDLENBQUE7YUFDdkQ7U0FDSjtRQUNELElBQUksQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLGNBQWMsR0FBQyxHQUFHLEdBQUcsRUFBRSxDQUFDO0lBQy9DLENBQUM7O0lBaFlhLGFBQVEsR0FBUyxJQUFJLENBQUM7SUFEbkIsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQWtZeEI7SUFBRCxXQUFDO0NBbFlELEFBa1lDLENBbFlpQyxFQUFFLENBQUMsU0FBUyxHQWtZN0M7a0JBbFlvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c0J1bmRsZSBmcm9tIFwiLi9Bc3NldHNCdW5kbGVcIjtcbmltcG9ydCBDYXNoIGZyb20gXCIuLi9Db21wb25lbnQvQ2FzaFwiO1xuY29uc3QgeyBjY2NsYXNzLCBwcm9wZXJ0eSB9ID0gY2MuX2RlY29yYXRvcjtcbnZhciBzZWxmOiBhbnkgPSBudWxsO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEdhbWUgPSBudWxsO1xuICAgIHByaXZhdGUgd3JhcDogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBsYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcHJpdmF0ZSBwb3A6IGNjLk5vZGUgPSBudWxsO1xuICAgIHByaXZhdGUgZGVsZXRlX251bTogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNsaWNrX3BvczogY2MuVmVjMyA9IG51bGw7XG4gICAgcHJpdmF0ZSBhID0gW107XG4gICAgcHJpdmF0ZSBiID0gW107XG4gICAgcHJpdmF0ZSBkaWZmaWN1bHR5OiBudW1iZXIgPSAyO1xuICAgIHByaXZhdGUgX2NvdW50OiBudW1iZXIgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWxfYWRkX2Nhc2ggPSAwO1xuICAgIHByaXZhdGUgaXNfb3Zlcl9nYW1lOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBkZWxldGVfcG9zX2FyciA9IFtdO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmIChHYW1lLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBHYW1lLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8v5Yid5aeL5YyW55qE55So5oi35pWw5o2uXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIC8v5rOo5YaM5LiA5Lqb5LqL5Lu2XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiY2FzaFwiLCB0aGlzLnNob3dDYXNoVHlwZSwgdGhpcyk7XG4gICAgICAgIHRoaXMud3JhcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndyYXBcIik7XG4gICAgICAgIHRoaXMubGF5ZXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJsYXllclwiKTtcbiAgICAgICAgdGhpcy5wb3AgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwb3BcIik7XG4gICAgICAgIHRoaXMuZ2V0UmVxSW5mbyhcIlVzZXJJbmZvXCIsIFwiR0VUXCIsIHt9LCB0aGlzLmluaXRVc2VySW5mbylcbiAgICB9XG4gICAgcHJpdmF0ZSBJbml0R2FtZSgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNvbnRlbnQ6IGNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJjb250ZW50XCIpO1xuICAgICAgICBjb250ZW50Lm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX1NUQVJULCB0aGlzLnRvdWNoR3JvdW5kLCB0aGlzKTtcbiAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCA9IDA7XG4gICAgICAgIHRoaXMuc2V0TGV2ZWxBZGRDYXNoKCk7XG4gICAgICAgIGNvbnRlbnQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5hW2ldID0gW11cbiAgICAgICAgICAgIHRoaXMuYltpXSA9IFtdXG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IHJlZCA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvcmVkXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUocmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgZ3JlZW4gPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2dyZWVuXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUoZ3JlZW4pXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgMzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCB5ZWxsb3cgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL3llbGxvd1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHllbGxvdylcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gY29udGVudFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSA0OlxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGJsdWUgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2JsdWVcIilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUgPSBjYy5pbnN0YW50aWF0ZShibHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSBjb250ZW50XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgcGluayA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvcGlua1wiKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHBpbmspXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnRcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG5vZGU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/nlKjmiLfpppbmrKHov5vmnaXlvLnnqpdcbiAgICBwcml2YXRlIGZpcnN0RW50ZXJHYW1lKCk6dm9pZHtcbiAgICAgICAgLy8gbGV0IGZpcnN0OnN0cmluZyA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcImZpcnN0XCIpO1xuICAgICAgICAvLyBpZighZmlyc3Qpe1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiZmlyc3RcIix0cnVlKTtcbiAgICAgICAgICAgIGxldCBmaXJzdDpjYy5QcmVmYWIgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2ZpcnN0X3BvcFwiKTtcbiAgICAgICAgICAgIGZpcnN0LmFkZFJlZigpO1xuICAgICAgICAgICAgbGV0IG5vZGUgPSBjYy5pbnN0YW50aWF0ZShmaXJzdCk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMubm9kZTtcbiAgICAgICAgLy8gfVxuICAgIH1cbiAgICAvL+WGmeS4gOS4quaOpeWPo+i/lOWbnuivt+axgueahOaVsOaNrlxuICAgIHByaXZhdGUgZ2V0UmVxSW5mbyhhcGk6IHN0cmluZywgcmVxVHlwZTogc3RyaW5nLCBzZW5kRGF0YTogYW55LCBjYWxsYmFjazogRnVuY3Rpb24pOiB2b2lkIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoYXBpLCByZXFUeXBlLCBzZW5kRGF0YSkudGhlbihyZXMgPT4ge1xuICAgICAgICAgICAgY2FsbGJhY2socmVzLmRhdGEpO1xuICAgICAgICB9KVxuICAgICAgICAvLyAuY2F0Y2goZXJyID0+IHtcbiAgICAgICAgLy8gICAgIGNvbnNvbGUubG9nKGDor7fmsYIke2FwaX3lpLHotKXvvIzplJnor6/ov5Tlm54ke2Vycn1gKTtcbiAgICAgICAgLy8gfSlcbiAgICB9XG4gICAgcHJpdmF0ZSBpbml0VXNlckluZm8oZGF0YTogYW55KTogdm9pZCB7XG4gICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gZGF0YTtcbiAgICAgICAgbGV0IGxldmVsTGJsOiBjYy5MYWJlbCA9IHNlbGYud3JhcC5nZXRDaGlsZEJ5TmFtZShcImxldmVsXCIpLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxldmVsTGJsLnN0cmluZyA9IGDnrKwke2NjLlRvb2xzLnVzZXJJbmZvLmxldmVsfeWFs2BcbiAgICAgICAgc2VsZi5yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgIHNlbGYuSW5pdEdhbWUoKTtcbiAgICAgICAgc2VsZi5maXJzdEVudGVyR2FtZSgpO1xuICAgIH1cbiAgICBwcml2YXRlIHJlZ2lzdGVyRXZlbnQoKTp2b2lke1xuICAgICAgICBsZXQgYm90dG9tOmNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21cIik7XG4gICAgICAgIGxldCB0b3A6Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgbGV0IGV2ZW50RnVuYyA9IFtcInNob3dUdXJudGFibGVcIixcInNob3dBd2FyZFwiLFwic2hvd0Nhc2gyXCJdO1xuICAgICAgICBmb3IobGV0IGk9MTtpPD0zO2krKyl7XG4gICAgICAgICAgICBsZXQgYnRuID0gYm90dG9tLmdldENoaWxkQnlOYW1lKFwiYnRuX1wiK2kpO1xuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzW2V2ZW50RnVuY1tpLTFdXSx0aGlzKVxuICAgICAgICB9XG4gICAgICAgIGxldCBhdmF0YXIgPSB0b3AuZ2V0Q2hpbGRCeU5hbWUoXCJhdmF0YXJcIik7XG4gICAgICAgIGF2YXRhci5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zaG93Q2FzaDEsdGhpcylcbiAgICB9XG4gICAgcHJpdmF0ZSByZW1vdmVFdmVudCgpIDp2b2lke1xuICAgICAgICBsZXQgYm90dG9tOmNjLk5vZGUgPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJib3R0b21cIik7XG4gICAgICAgIGxldCB0b3A6Y2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInRvcFwiKTtcbiAgICAgICAgbGV0IGV2ZW50RnVuYyA9IFtcInNob3dUdXJudGFibGVcIixcInNob3dBd2FyZFwiLFwic2hvd0Nhc2gyXCJdO1xuICAgICAgICBmb3IobGV0IGk9MTtpPD0zO2krKyl7XG4gICAgICAgICAgICBsZXQgYnRuID0gYm90dG9tLmdldENoaWxkQnlOYW1lKFwiYnRuX1wiK2kpO1xuICAgICAgICAgICAgYnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpc1tldmVudEZ1bmNbaS0xXV0sdGhpcylcbiAgICAgICAgfVxuICAgICAgICBsZXQgYXZhdGFyID0gdG9wLmdldENoaWxkQnlOYW1lKFwiYXZhdGFyXCIpO1xuICAgICAgICBhdmF0YXIub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnNob3dDYXNoMSx0aGlzKVxuICAgIH1cbiAgICBwdWJsaWMgc2hvd1R1cm50YWJsZSgpOnZvaWR7XG4gICAgICAgIGxldCB0dXJudGFibGUgPSB0aGlzLmxheWVyLmdldENoaWxkQnlOYW1lKFwidHVybnRhYmxlX2xheWVyXCIpO1xuICAgICAgICBpZih0dXJudGFibGUpe1xuICAgICAgICAgICAgdHVybnRhYmxlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IHR1cm50YWJsZSA9IEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5nZXRBc3NldChcIkdhbWVcIiwgXCJQcmVmYWIvdHVybnRhYmxlX2xheWVyXCIpXG4gICAgICAgICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHR1cm50YWJsZSk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHNlbGYubGF5ZXI7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHVibGljIHNob3dBd2FyZCgpOnZvaWR7XG4gICAgICAgIC8vIGxldCBjYXNoID0gdGhpcy5sYXllci5nZXRDaGlsZEJ5TmFtZShcImNhc2hfbGF5ZXJcIik7XG4gICAgICAgIC8vIGlmKGNhc2gpe1xuICAgICAgICAvLyAgICAgY2FzaC5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAvLyB9ZWxzZXtcbiAgICAgICAgLy8gICAgIGxldCBjYXNoID0gQXNzZXRzQnVuZGxlLkluc3RhbmNlLmdldEFzc2V0KFwiR2FtZVwiLCBcIlByZWZhYi9jYXNoX2xheWVyXCIpXG4gICAgICAgIC8vICAgICBsZXQgbm9kZSA9IGNjLmluc3RhbnRpYXRlKGNhc2gpO1xuICAgICAgICAvLyAgICAgbm9kZS5wYXJlbnQgPSBzZWxmLmxheWVyO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0Nhc2gyKCk6dm9pZHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiY2FzaFwiLDIpXG4gICAgfVxuICAgIHByaXZhdGUgc2hvd0Nhc2gxKCk6dm9pZHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiY2FzaFwiLDEpO1xuICAgIH1cbiAgICBwdWJsaWMgc2hvd0Nhc2hUeXBlKHR5cGU6bnVtYmVyKTp2b2lke1xuICAgICAgICB0aGlzLnNob3dDYXNoKCk7XG4gICAgICAgIENhc2guSW5zdGFuY2VbXCJzaG93VHlwZUxheWVyXCIrdHlwZV0oKTtcbiAgICB9XG4gICAgcHVibGljIHNob3dDYXNoKCk6dm9pZHtcbiAgICAgICAgbGV0IGNhc2ggPSB0aGlzLmxheWVyLmdldENoaWxkQnlOYW1lKFwiY2FzaF9sYXllclwiKTtcbiAgICAgICAgaWYoY2FzaCl7XG4gICAgICAgICAgICBjYXNoLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1lbHNle1xuICAgICAgICAgICAgbGV0IGNhc2ggPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2Nhc2hfbGF5ZXJcIilcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoY2FzaCk7XG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHNlbGYubGF5ZXI7XG4gICAgICAgIH1cbiAgICAgICAgLy8gLy8gaWYoKVxuICAgICAgICAvLyBDYXNoLkluc3RhbmNlLnNob3dUeXBlTGF5ZXIxKClcbiAgICB9XG4gICAgcHJpdmF0ZSB0b3VjaEdyb3VuZChlOiBjYy5FdmVudC5FdmVudFRvdWNoKSB7XG4gICAgICAgIGxldCBjb250ZW50OiBjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICAgICAgbGV0IHBvcyA9IGNvbnRlbnQuY29udmVydFRvTm9kZVNwYWNlQVIoZS5nZXRMb2NhdGlvbigpKVxuICAgICAgICBsZXQgeCA9IHBvcy54XG4gICAgICAgIGxldCB5ID0gcG9zLnlcbiAgICAgICAgdGhpcy5kZWxldGVfbnVtID0gMFxuICAgICAgICB0aGlzLmNsaWNrX3BvcyA9IGNjLnYzKHgsIHkpO1xuICAgICAgICAvLyBjb25zb2xlLmxvZyh4LCB5KTtcbiAgICAgICAgY29uc29sZS5sb2codGhpcy5Ub0lKKHgsIHkpKTtcbiAgICAgICAgbGV0IGkgPSB0aGlzLlRvSUooeCwgeSkueFxuICAgICAgICBsZXQgaiA9IHRoaXMuVG9JSih4LCB5KS55XG4gICAgICAgIHRoaXMuZGVsZXRlX251bSA9IDA7XG4gICAgICAgIHRoaXMuZGVsZXRlX3Bvc19hcnIgPSBbXTtcbiAgICAgICAgbGV0IGNvbG9yID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICB0aGlzLlRvdWNoX2Jsb2NrKGksIGosIHRoaXMuYVtpXVtqXSk7XG4gICAgICAgIC8vIHRvZG9cbiAgICAgICAgaWYgKHRoaXMuZGVsZXRlX251bSA9PT0gMSkge1xuICAgICAgICAgICAgdGhpcy5hW2ldW2pdID0gY29sb3I7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuaGFuZGxlRGVsZXRlQmxvY2soZmFsc2UpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgVG9JSihpOiBudW1iZXIsIGo6IG51bWJlcikge1xuICAgICAgICBsZXQgY29udGVudDogY2MuTm9kZSA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcImNvbnRlbnRcIik7XG4gICAgICAgIGxldCB2YWwgPSBjb250ZW50LndpZHRoIC8gMjtcbiAgICAgICAgaSA9IE1hdGguZmxvb3IoKGkgKyB2YWwpIC8gMTAwKTtcbiAgICAgICAgaiA9IDkgLSBNYXRoLmZsb29yKChqICsgdmFsKSAvIDEwMCk7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICB4OiBqLFxuICAgICAgICAgICAgeTogaVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgVG9YWSh4OiBudW1iZXIsIHk6IG51bWJlcikge1xuICAgICAgICByZXR1cm4gY2MudjIoLTQ1MCArIDEwMCAqIHksIDQ1MCAtIDEwMCAqIHgpO1xuICAgIH1cbiAgICBwcml2YXRlIFRvdWNoX2Jsb2NrKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpOiB2b2lkIHtcbiAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rK1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBwcml2YXRlIHNwbGl0VG9BcnIoYXJyKTogdm9pZCB7XG4gICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVfcG9zX2Fyci5wdXNoKGFycik7XG4gICAgICAgICAgICBmb3IgKGxldCB0ID0gMDsgdCA8IGFyci5sZW5ndGg7IHQrKykge1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gYXJyW3RdO1xuICAgICAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgICAgIGxldCBqID0gZGF0YS5qO1xuICAgICAgICAgICAgICAgIGxldCBrID0gZGF0YS5rO1xuICAgICAgICAgICAgICAgIGlmIChpICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpIC0gMV1bal0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2kgLSAxXVtqXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGkgLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaSAhPSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaSArIDFdW2pdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpICsgMV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5kZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGogIT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2ogLSAxXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1baiAtIDFdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlX251bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaiAtIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrXCI6IGtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqICE9IDkpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqICsgMV0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogKyAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGogKyAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuc3BsaXRUb0FycihfYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDlsIbopoFkZWxldGXnmoTmlbDmja7ov5vooYzlpITnkIZcbiAgICBwcml2YXRlIGhhbmRsZURlbGV0ZUJsb2NrKGlzT3ZlcjogYm9vbGVhbik6IHZvaWQge1xuICAgICAgICBpZiAoIXRoaXMuZGVsZXRlX3Bvc19hcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQgPSAwO1xuICAgICAgICB0aGlzLmlzX292ZXJfZ2FtZSA9IGlzT3ZlcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IsIDAuMDMyLCB0aGlzLmRlbGV0ZV9wb3NfYXJyLmxlbmd0aCAtIDEpO1xuICAgICAgICBpZighaXNPdmVyKXtcbiAgICAgICAgICAgIHRoaXMuc2V0TGV2ZWxBZGRDYXNoKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBkZWxldGVCbG9ja0NiKCk6IHZvaWQge1xuICAgICAgICBsZXQgYXJyID0gdGhpcy5kZWxldGVfcG9zX2Fyclt0aGlzLl9jb3VudF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYXJyLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgbGV0IGogPSBkYXRhLmo7XG4gICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgIC8vc3BpbmXnibnmlYhcbiAgICAgICAgICAgIGxldCBjb250ZW50OiBjYy5Ob2RlID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwiY29udGVudFwiKTtcbiAgICAgICAgICAgIGxldCBzcGluZTogY2MuUHJlZmFiID0gQXNzZXRzQnVuZGxlLkluc3RhbmNlLmdldEFzc2V0KFwiR2FtZVwiLCBcIlByZWZhYi9lZmZlY3RcIilcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUoc3BpbmUpXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IGNvbnRlbnQ7XG4gICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgIGxldCBfc3BpbmU6IHNwLlNrZWxldG9uID0gbm9kZS5nZXRDaGlsZEJ5TmFtZShcInNwaW5lXCIpLmdldENvbXBvbmVudChcInNwLlNrZWxldG9uXCIpO1xuICAgICAgICAgICAgbGV0IHJkbSA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIDMgKyAxKTtcbiAgICAgICAgICAgIF9zcGluZS5zZXRBbmltYXRpb24oMCwgXCJTVFlMRV9cIiArIHJkbSwgZmFsc2UpO1xuXG4gICAgICAgICAgICB0aGlzLmJbaV1bal0uZGVzdHJveSgpXG4gICAgICAgICAgICB0aGlzLmJbaV1bal0gPSBudWxsXG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuX2NvdW50ID09PSB0aGlzLmRlbGV0ZV9wb3NfYXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEZWxldGVCbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQrKztcbiAgICB9XG4gICAgcHJpdmF0ZSBhZnRlckRlbGV0ZUJsb2NrKCk6IHZvaWQge1xuICAgICAgICB0aGlzLmRlbGV0ZUJsb2NrKCk7XG4gICAgICAgIHRoaXMudW5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IpO1xuICAgIH1cbiAgICBwcml2YXRlIGRlbGV0ZUJsb2NrKCk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBudW0gPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5tb3ZlQnkoMC4zLCAwLCAtbnVtICogMTAwKVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1bal0ucnVuQWN0aW9uKGFjdGlvbilcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2kgKyBudW1dW2pdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqXSA9IDBcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iW2kgKyBudW1dW2pdID0gdGhpcy5iW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgY29udGludWVcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IG51bSArIDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgbGV0IF9jb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID4gMCAmJiBfY291bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1bal0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgYWN0aW9uID0gY2MubW92ZUJ5KDAuMywgLV9jb3VudCAqIDEwMCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSBfY291bnRdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1baiAtIF9jb3VudF0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICBfY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOavj+a2iOmZpOS4gOS4quaWueWdl+eahOWfuuehgOW+l+WIhuS4ujAuMDHlhYPpkrHvvIzkuIDmrKHmtojpmaQxMOS4quS7peS4iuiOt+W+lzEuMeWAjeeOh++8jOS4gOasoea2iOmZpDIw5Liq5Lul5LiK6I635b6XMS4y5YCN546H77yM5LiA5qyh5raI6ZmkMzDkuKrku6XkuIrojrflvpcxLjXlgI3njofvvIzmnIDlpKfkuLoxLjXlgI3njofjgILmnIDnu4jlvpfliLDph5Hpop3lkJHkuIvlj5bmlbRcbiAgICAqL1xuICAgIHByaXZhdGUgc2V0TGV2ZWxBZGRDYXNoKCk6IHZvaWQge1xuICAgICAgICAvL2xldmVsX2FkZF9jYXNoXG4gICAgICAgIGxldCBjYXNoOiBjYy5MYWJlbCA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcIm1vbmV5XCIpLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpLmdldENoaWxkQnlOYW1lKFwiY2FzaFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBpZiAodGhpcy5kZWxldGVfbnVtICE9PSAwKSB7XG4gICAgICAgICAgICBpZih0aGlzLmRlbGV0ZV9udW08MTApe1xuICAgICAgICAgICAgICAgIC8v5rKh5pyJ5YCN546HXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCs9dGhpcy5kZWxldGVfbnVtXG4gICAgICAgICAgICB9ZWxzZSBpZih0aGlzLmRlbGV0ZV9udW0+PTEwJiZ0aGlzLmRlbGV0ZV9udW08MjApe1xuICAgICAgICAgICAgICAgIC8vMTDkuKrku6XkuIoxLjFcbiAgICAgICAgICAgICAgICB0aGlzLmxldmVsX2FkZF9jYXNoKz1NYXRoLmZsb29yKHRoaXMuZGVsZXRlX251bSoxLjEpO1xuICAgICAgICAgICAgfWVsc2UgaWYodGhpcy5kZWxldGVfbnVtPj0yMCYmdGhpcy5kZWxldGVfbnVtPDMwKXtcbiAgICAgICAgICAgICAgICAvLzIw5Liq5Lul5LiKMS4yXG4gICAgICAgICAgICAgICAgdGhpcy5sZXZlbF9hZGRfY2FzaCs9TWF0aC5mbG9vcih0aGlzLmRlbGV0ZV9udW0qMS4yKVxuICAgICAgICAgICAgfWVsc2V7XG4gICAgICAgICAgICAgICAgLy/lpKfkuo4zMOS4qjEuNVxuICAgICAgICAgICAgICAgIHRoaXMubGV2ZWxfYWRkX2Nhc2grPU1hdGguZmxvb3IodGhpcy5kZWxldGVfbnVtKjEuNSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBjYXNoLnN0cmluZyA9IHRoaXMubGV2ZWxfYWRkX2Nhc2gvMTAwICsgXCJcIjtcbiAgICB9XG59Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/MD5.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a3433pG2m1PD7kskF22Pa1z', 'MD5');
// Script/MD5.js

"use strict";

function md5(string) {
  var x = Array();
  var k, AA, BB, CC, DD, a, b, c, d;
  var S11 = 7,
      S12 = 12,
      S13 = 17,
      S14 = 22;
  var S21 = 5,
      S22 = 9,
      S23 = 14,
      S24 = 20;
  var S31 = 4,
      S32 = 11,
      S33 = 16,
      S34 = 23;
  var S41 = 6,
      S42 = 10,
      S43 = 15,
      S44 = 21;
  string = Utf8Encode(string);
  x = ConvertToWordArray(string);
  a = 0x67452301;
  b = 0xEFCDAB89;
  c = 0x98BADCFE;
  d = 0x10325476;

  for (k = 0; k < x.length; k += 16) {
    AA = a;
    BB = b;
    CC = c;
    DD = d;
    a = FF(a, b, c, d, x[k + 0], S11, 0xD76AA478);
    d = FF(d, a, b, c, x[k + 1], S12, 0xE8C7B756);
    c = FF(c, d, a, b, x[k + 2], S13, 0x242070DB);
    b = FF(b, c, d, a, x[k + 3], S14, 0xC1BDCEEE);
    a = FF(a, b, c, d, x[k + 4], S11, 0xF57C0FAF);
    d = FF(d, a, b, c, x[k + 5], S12, 0x4787C62A);
    c = FF(c, d, a, b, x[k + 6], S13, 0xA8304613);
    b = FF(b, c, d, a, x[k + 7], S14, 0xFD469501);
    a = FF(a, b, c, d, x[k + 8], S11, 0x698098D8);
    d = FF(d, a, b, c, x[k + 9], S12, 0x8B44F7AF);
    c = FF(c, d, a, b, x[k + 10], S13, 0xFFFF5BB1);
    b = FF(b, c, d, a, x[k + 11], S14, 0x895CD7BE);
    a = FF(a, b, c, d, x[k + 12], S11, 0x6B901122);
    d = FF(d, a, b, c, x[k + 13], S12, 0xFD987193);
    c = FF(c, d, a, b, x[k + 14], S13, 0xA679438E);
    b = FF(b, c, d, a, x[k + 15], S14, 0x49B40821);
    a = GG(a, b, c, d, x[k + 1], S21, 0xF61E2562);
    d = GG(d, a, b, c, x[k + 6], S22, 0xC040B340);
    c = GG(c, d, a, b, x[k + 11], S23, 0x265E5A51);
    b = GG(b, c, d, a, x[k + 0], S24, 0xE9B6C7AA);
    a = GG(a, b, c, d, x[k + 5], S21, 0xD62F105D);
    d = GG(d, a, b, c, x[k + 10], S22, 0x2441453);
    c = GG(c, d, a, b, x[k + 15], S23, 0xD8A1E681);
    b = GG(b, c, d, a, x[k + 4], S24, 0xE7D3FBC8);
    a = GG(a, b, c, d, x[k + 9], S21, 0x21E1CDE6);
    d = GG(d, a, b, c, x[k + 14], S22, 0xC33707D6);
    c = GG(c, d, a, b, x[k + 3], S23, 0xF4D50D87);
    b = GG(b, c, d, a, x[k + 8], S24, 0x455A14ED);
    a = GG(a, b, c, d, x[k + 13], S21, 0xA9E3E905);
    d = GG(d, a, b, c, x[k + 2], S22, 0xFCEFA3F8);
    c = GG(c, d, a, b, x[k + 7], S23, 0x676F02D9);
    b = GG(b, c, d, a, x[k + 12], S24, 0x8D2A4C8A);
    a = HH(a, b, c, d, x[k + 5], S31, 0xFFFA3942);
    d = HH(d, a, b, c, x[k + 8], S32, 0x8771F681);
    c = HH(c, d, a, b, x[k + 11], S33, 0x6D9D6122);
    b = HH(b, c, d, a, x[k + 14], S34, 0xFDE5380C);
    a = HH(a, b, c, d, x[k + 1], S31, 0xA4BEEA44);
    d = HH(d, a, b, c, x[k + 4], S32, 0x4BDECFA9);
    c = HH(c, d, a, b, x[k + 7], S33, 0xF6BB4B60);
    b = HH(b, c, d, a, x[k + 10], S34, 0xBEBFBC70);
    a = HH(a, b, c, d, x[k + 13], S31, 0x289B7EC6);
    d = HH(d, a, b, c, x[k + 0], S32, 0xEAA127FA);
    c = HH(c, d, a, b, x[k + 3], S33, 0xD4EF3085);
    b = HH(b, c, d, a, x[k + 6], S34, 0x4881D05);
    a = HH(a, b, c, d, x[k + 9], S31, 0xD9D4D039);
    d = HH(d, a, b, c, x[k + 12], S32, 0xE6DB99E5);
    c = HH(c, d, a, b, x[k + 15], S33, 0x1FA27CF8);
    b = HH(b, c, d, a, x[k + 2], S34, 0xC4AC5665);
    a = II(a, b, c, d, x[k + 0], S41, 0xF4292244);
    d = II(d, a, b, c, x[k + 7], S42, 0x432AFF97);
    c = II(c, d, a, b, x[k + 14], S43, 0xAB9423A7);
    b = II(b, c, d, a, x[k + 5], S44, 0xFC93A039);
    a = II(a, b, c, d, x[k + 12], S41, 0x655B59C3);
    d = II(d, a, b, c, x[k + 3], S42, 0x8F0CCC92);
    c = II(c, d, a, b, x[k + 10], S43, 0xFFEFF47D);
    b = II(b, c, d, a, x[k + 1], S44, 0x85845DD1);
    a = II(a, b, c, d, x[k + 8], S41, 0x6FA87E4F);
    d = II(d, a, b, c, x[k + 15], S42, 0xFE2CE6E0);
    c = II(c, d, a, b, x[k + 6], S43, 0xA3014314);
    b = II(b, c, d, a, x[k + 13], S44, 0x4E0811A1);
    a = II(a, b, c, d, x[k + 4], S41, 0xF7537E82);
    d = II(d, a, b, c, x[k + 11], S42, 0xBD3AF235);
    c = II(c, d, a, b, x[k + 2], S43, 0x2AD7D2BB);
    b = II(b, c, d, a, x[k + 9], S44, 0xEB86D391);
    a = AddUnsigned(a, AA);
    b = AddUnsigned(b, BB);
    c = AddUnsigned(c, CC);
    d = AddUnsigned(d, DD);
  }

  var cpro_psid = "u2572954";
  var cpro_pswidth = 966;
  var cpro_psheight = 120;
  var temp = WordToHex(a) + WordToHex(b) + WordToHex(c) + WordToHex(d);
  return temp.toLowerCase();
}

function RotateLeft(lValue, iShiftBits) {
  return lValue << iShiftBits | lValue >>> 32 - iShiftBits;
}

function AddUnsigned(lX, lY) {
  var lX4, lY4, lX8, lY8, lResult;
  lX8 = lX & 0x80000000;
  lY8 = lY & 0x80000000;
  lX4 = lX & 0x40000000;
  lY4 = lY & 0x40000000;
  lResult = (lX & 0x3FFFFFFF) + (lY & 0x3FFFFFFF);

  if (lX4 & lY4) {
    return lResult ^ 0x80000000 ^ lX8 ^ lY8;
  }

  if (lX4 | lY4) {
    if (lResult & 0x40000000) {
      return lResult ^ 0xC0000000 ^ lX8 ^ lY8;
    } else {
      return lResult ^ 0x40000000 ^ lX8 ^ lY8;
    }
  } else {
    return lResult ^ lX8 ^ lY8;
  }
}

function F(x, y, z) {
  return x & y | ~x & z;
}

function G(x, y, z) {
  return x & z | y & ~z;
}

function H(x, y, z) {
  return x ^ y ^ z;
}

function I(x, y, z) {
  return y ^ (x | ~z);
}

function FF(a, b, c, d, x, s, ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(F(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
}

function GG(a, b, c, d, x, s, ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(G(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
}

function HH(a, b, c, d, x, s, ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(H(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
}

function II(a, b, c, d, x, s, ac) {
  a = AddUnsigned(a, AddUnsigned(AddUnsigned(I(b, c, d), x), ac));
  return AddUnsigned(RotateLeft(a, s), b);
}

function ConvertToWordArray(string) {
  var lWordCount;
  var lMessageLength = string.length;
  var lNumberOfWords_temp1 = lMessageLength + 8;
  var lNumberOfWords_temp2 = (lNumberOfWords_temp1 - lNumberOfWords_temp1 % 64) / 64;
  var lNumberOfWords = (lNumberOfWords_temp2 + 1) * 16;
  var lWordArray = Array(lNumberOfWords - 1);
  var lBytePosition = 0;
  var lByteCount = 0;

  while (lByteCount < lMessageLength) {
    lWordCount = (lByteCount - lByteCount % 4) / 4;
    lBytePosition = lByteCount % 4 * 8;
    lWordArray[lWordCount] = lWordArray[lWordCount] | string.charCodeAt(lByteCount) << lBytePosition;
    lByteCount++;
  }

  lWordCount = (lByteCount - lByteCount % 4) / 4;
  lBytePosition = lByteCount % 4 * 8;
  lWordArray[lWordCount] = lWordArray[lWordCount] | 0x80 << lBytePosition;
  lWordArray[lNumberOfWords - 2] = lMessageLength << 3;
  lWordArray[lNumberOfWords - 1] = lMessageLength >>> 29;
  return lWordArray;
}

function WordToHex(lValue) {
  var WordToHexValue = "",
      WordToHexValue_temp = "",
      lByte,
      lCount;

  for (lCount = 0; lCount <= 3; lCount++) {
    lByte = lValue >>> lCount * 8 & 255;
    WordToHexValue_temp = "0" + lByte.toString(16);
    WordToHexValue = WordToHexValue + WordToHexValue_temp.substr(WordToHexValue_temp.length - 2, 2);
  }

  return WordToHexValue;
}

function Utf8Encode(string) {
  var utftext = "";

  for (var n = 0; n < string.length; n++) {
    var c = string.charCodeAt(n);

    if (c < 128) {
      utftext += String.fromCharCode(c);
    } else if (c > 127 && c < 2048) {
      utftext += String.fromCharCode(c >> 6 | 192);
      utftext += String.fromCharCode(c & 63 | 128);
    } else {
      utftext += String.fromCharCode(c >> 12 | 224);
      utftext += String.fromCharCode(c >> 6 & 63 | 128);
      utftext += String.fromCharCode(c & 63 | 128);
    }
  }

  return utftext;
}

module.exports = md5;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvTUQ1LmpzIl0sIm5hbWVzIjpbIm1kNSIsInN0cmluZyIsIngiLCJBcnJheSIsImsiLCJBQSIsIkJCIiwiQ0MiLCJERCIsImEiLCJiIiwiYyIsImQiLCJTMTEiLCJTMTIiLCJTMTMiLCJTMTQiLCJTMjEiLCJTMjIiLCJTMjMiLCJTMjQiLCJTMzEiLCJTMzIiLCJTMzMiLCJTMzQiLCJTNDEiLCJTNDIiLCJTNDMiLCJTNDQiLCJVdGY4RW5jb2RlIiwiQ29udmVydFRvV29yZEFycmF5IiwibGVuZ3RoIiwiRkYiLCJHRyIsIkhIIiwiSUkiLCJBZGRVbnNpZ25lZCIsImNwcm9fcHNpZCIsImNwcm9fcHN3aWR0aCIsImNwcm9fcHNoZWlnaHQiLCJ0ZW1wIiwiV29yZFRvSGV4IiwidG9Mb3dlckNhc2UiLCJSb3RhdGVMZWZ0IiwibFZhbHVlIiwiaVNoaWZ0Qml0cyIsImxYIiwibFkiLCJsWDQiLCJsWTQiLCJsWDgiLCJsWTgiLCJsUmVzdWx0IiwiRiIsInkiLCJ6IiwiRyIsIkgiLCJJIiwicyIsImFjIiwibFdvcmRDb3VudCIsImxNZXNzYWdlTGVuZ3RoIiwibE51bWJlck9mV29yZHNfdGVtcDEiLCJsTnVtYmVyT2ZXb3Jkc190ZW1wMiIsImxOdW1iZXJPZldvcmRzIiwibFdvcmRBcnJheSIsImxCeXRlUG9zaXRpb24iLCJsQnl0ZUNvdW50IiwiY2hhckNvZGVBdCIsIldvcmRUb0hleFZhbHVlIiwiV29yZFRvSGV4VmFsdWVfdGVtcCIsImxCeXRlIiwibENvdW50IiwidG9TdHJpbmciLCJzdWJzdHIiLCJ1dGZ0ZXh0IiwibiIsIlN0cmluZyIsImZyb21DaGFyQ29kZSIsIm1vZHVsZSIsImV4cG9ydHMiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsU0FBU0EsR0FBVCxDQUFhQyxNQUFiLEVBQXFCO0FBQ2pCLE1BQUlDLENBQUMsR0FBR0MsS0FBSyxFQUFiO0FBQ0EsTUFBSUMsQ0FBSixFQUFPQyxFQUFQLEVBQVdDLEVBQVgs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QUFDbkQsS0FGTSxNQUVBO0FBQ0hpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsSUFBSSxFQUFOLEdBQVksR0FBaEMsQ0FBWDtBQUFpRGlFLE1BQUFBLE9BQU8sSUFBSUUsTUFBTSxDQUFDQyxZQUFQLENBQXNCcEUsQ0FBQyxJQUFJLENBQU4sR0FBVyxFQUFaLEdBQWtCLEdBQXRDLENBQVg7QUFBdURpRSxNQUFBQSxPQUFPLElBQUlFLE1BQU0sQ0FBQ0MsWUFBUCxDQUFxQnBFLENBQUMsR0FBRyxFQUFMLEdBQVcsR0FBL0IsQ0FBWDtBQUMzRztBQUNKOztBQUNELFNBQU9pRSxPQUFQO0FBQ0g7O0FBRURJLE1BQU0sQ0FBQ0MsT0FBUCxHQUFpQmpGLEdBQWpCIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJmdW5jdGlvbiBtZDUoc3RyaW5nKSB7ICBcbiAgICB2YXIgeCA9IEFycmF5KCk7ICBcbiAgICB2YXIgaywgQUEsIEJCLCBDQywgREQsIGEsIGIsIGMsIGQ7ICBcbiAgICB2YXIgUzExID0gNywgUzEyID0gMTIsIFMxMyA9IDE3LCBTMTQgPSAyMjsgdmFyIFMyMSA9IDUsIFMyMiA9IDksIFMyMyA9IDE0LCBTMjQgPSAyMDsgdmFyIFMzMSA9IDQsIFMzMiA9IDExLCBTMzMgPSAxNiwgUzM0ID0gMjM7IHZhciBTNDEgPSA2LCBTNDIgPSAxMCwgUzQzID0gMTUsIFM0NCA9IDIxOyBzdHJpbmcgPSBVdGY4RW5jb2RlKHN0cmluZyk7IHggPSBDb252ZXJ0VG9Xb3JkQXJyYXkoc3RyaW5nKTsgYSA9IDB4Njc0NTIzMDE7IGIgPSAweEVGQ0RBQjg5OyBjID0gMHg5OEJBRENGRTsgZCA9IDB4MTAzMjU0NzY7ICBcbiAgICBmb3IgKGsgPSAwOyBrIDwgeC5sZW5ndGg7IGsgKz0gMTYpIHsgIFxuICAgICAgICBBQSA9IGE7IEJCID0gYjsgQ0MgPSBjOyBERCA9IGQ7ICBcbiAgICAgICAgYSA9IEZGKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTMTEsIDB4RDc2QUE0NzgpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMV0sIFMxMiwgMHhFOEM3Qjc1Nik7IGMgPSBGRihjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzEzLCAweDI0MjA3MERCKTsgYiA9IEZGKGIsIGMsIGQsIGEsIHhbayArIDNdLCBTMTQsIDB4QzFCRENFRUUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgNF0sIFMxMSwgMHhGNTdDMEZBRik7IGQgPSBGRihkLCBhLCBiLCBjLCB4W2sgKyA1XSwgUzEyLCAweDQ3ODdDNjJBKTsgYyA9IEZGKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTMTMsIDB4QTgzMDQ2MTMpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgN10sIFMxNCwgMHhGRDQ2OTUwMSk7IGEgPSBGRihhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzExLCAweDY5ODA5OEQ4KTsgZCA9IEZGKGQsIGEsIGIsIGMsIHhbayArIDldLCBTMTIsIDB4OEI0NEY3QUYpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTMTMsIDB4RkZGRjVCQjEpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTFdLCBTMTQsIDB4ODk1Q0Q3QkUpOyBhID0gRkYoYSwgYiwgYywgZCwgeFtrICsgMTJdLCBTMTEsIDB4NkI5MDExMjIpOyBkID0gRkYoZCwgYSwgYiwgYywgeFtrICsgMTNdLCBTMTIsIDB4RkQ5ODcxOTMpOyBjID0gRkYoYywgZCwgYSwgYiwgeFtrICsgMTRdLCBTMTMsIDB4QTY3OTQzOEUpOyBiID0gRkYoYiwgYywgZCwgYSwgeFtrICsgMTVdLCBTMTQsIDB4NDlCNDA4MjEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgMV0sIFMyMSwgMHhGNjFFMjU2Mik7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyA2XSwgUzIyLCAweEMwNDBCMzQwKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzIzLCAweDI2NUU1QTUxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDBdLCBTMjQsIDB4RTlCNkM3QUEpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgNV0sIFMyMSwgMHhENjJGMTA1RCk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAxMF0sIFMyMiwgMHgyNDQxNDUzKTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDE1XSwgUzIzLCAweEQ4QTFFNjgxKTsgYiA9IEdHKGIsIGMsIGQsIGEsIHhbayArIDRdLCBTMjQsIDB4RTdEM0ZCQzgpOyBhID0gR0coYSwgYiwgYywgZCwgeFtrICsgOV0sIFMyMSwgMHgyMUUxQ0RFNik7ICBcbiAgICAgICAgZCA9IEdHKGQsIGEsIGIsIGMsIHhbayArIDE0XSwgUzIyLCAweEMzMzcwN0Q2KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDNdLCBTMjMsIDB4RjRENTBEODcpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgOF0sIFMyNCwgMHg0NTVBMTRFRCk7IGEgPSBHRyhhLCBiLCBjLCBkLCB4W2sgKyAxM10sIFMyMSwgMHhBOUUzRTkwNSk7IGQgPSBHRyhkLCBhLCBiLCBjLCB4W2sgKyAyXSwgUzIyLCAweEZDRUZBM0Y4KTsgYyA9IEdHKGMsIGQsIGEsIGIsIHhbayArIDddLCBTMjMsIDB4Njc2RjAyRDkpOyBiID0gR0coYiwgYywgZCwgYSwgeFtrICsgMTJdLCBTMjQsIDB4OEQyQTRDOEEpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgNV0sIFMzMSwgMHhGRkZBMzk0Mik7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyA4XSwgUzMyLCAweDg3NzFGNjgxKTsgYyA9IEhIKGMsIGQsIGEsIGIsIHhbayArIDExXSwgUzMzLCAweDZEOUQ2MTIyKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDE0XSwgUzM0LCAweEZERTUzODBDKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDFdLCBTMzEsIDB4QTRCRUVBNDQpOyBkID0gSEgoZCwgYSwgYiwgYywgeFtrICsgNF0sIFMzMiwgMHg0QkRFQ0ZBOSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyA3XSwgUzMzLCAweEY2QkI0QjYwKTsgYiA9IEhIKGIsIGMsIGQsIGEsIHhbayArIDEwXSwgUzM0LCAweEJFQkZCQzcwKTsgYSA9IEhIKGEsIGIsIGMsIGQsIHhbayArIDEzXSwgUzMxLCAweDI4OUI3RUM2KTsgZCA9IEhIKGQsIGEsIGIsIGMsIHhbayArIDBdLCBTMzIsIDB4RUFBMTI3RkEpOyBjID0gSEgoYywgZCwgYSwgYiwgeFtrICsgM10sIFMzMywgMHhENEVGMzA4NSk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyA2XSwgUzM0LCAweDQ4ODFEMDUpOyBhID0gSEgoYSwgYiwgYywgZCwgeFtrICsgOV0sIFMzMSwgMHhEOUQ0RDAzOSk7IGQgPSBISChkLCBhLCBiLCBjLCB4W2sgKyAxMl0sIFMzMiwgMHhFNkRCOTlFNSk7IGMgPSBISChjLCBkLCBhLCBiLCB4W2sgKyAxNV0sIFMzMywgMHgxRkEyN0NGOCk7IGIgPSBISChiLCBjLCBkLCBhLCB4W2sgKyAyXSwgUzM0LCAweEM0QUM1NjY1KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDBdLCBTNDEsIDB4RjQyOTIyNDQpOyBkID0gSUkoZCwgYSwgYiwgYywgeFtrICsgN10sIFM0MiwgMHg0MzJBRkY5Nyk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAxNF0sIFM0MywgMHhBQjk0MjNBNyk7IGIgPSBJSShiLCBjLCBkLCBhLCB4W2sgKyA1XSwgUzQ0LCAweEZDOTNBMDM5KTsgYSA9IElJKGEsIGIsIGMsIGQsIHhbayArIDEyXSwgUzQxLCAweDY1NUI1OUMzKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDNdLCBTNDIsIDB4OEYwQ0NDOTIpOyBjID0gSUkoYywgZCwgYSwgYiwgeFtrICsgMTBdLCBTNDMsIDB4RkZFRkY0N0QpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMV0sIFM0NCwgMHg4NTg0NUREMSk7IGEgPSBJSShhLCBiLCBjLCBkLCB4W2sgKyA4XSwgUzQxLCAweDZGQTg3RTRGKTsgZCA9IElJKGQsIGEsIGIsIGMsIHhbayArIDE1XSwgUzQyLCAweEZFMkNFNkUwKTsgYyA9IElJKGMsIGQsIGEsIGIsIHhbayArIDZdLCBTNDMsIDB4QTMwMTQzMTQpOyBiID0gSUkoYiwgYywgZCwgYSwgeFtrICsgMTNdLCBTNDQsIDB4NEUwODExQTEpOyBhID0gSUkoYSwgYiwgYywgZCwgeFtrICsgNF0sIFM0MSwgMHhGNzUzN0U4Mik7IGQgPSBJSShkLCBhLCBiLCBjLCB4W2sgKyAxMV0sIFM0MiwgMHhCRDNBRjIzNSk7IGMgPSBJSShjLCBkLCBhLCBiLCB4W2sgKyAyXSwgUzQzLCAweDJBRDdEMkJCKTsgYiA9IElJKGIsIGMsIGQsIGEsIHhbayArIDldLCBTNDQsIDB4RUI4NkQzOTEpOyBhID0gQWRkVW5zaWduZWQoYSwgQUEpOyBiID0gQWRkVW5zaWduZWQoYiwgQkIpOyBjID0gQWRkVW5zaWduZWQoYywgQ0MpOyBkID0gQWRkVW5zaWduZWQoZCwgREQpOyAgXG4gICAgfSAgXG5cbiAgICB2YXIgY3Byb19wc2lkID0gXCJ1MjU3Mjk1NFwiOyB2YXIgY3Byb19wc3dpZHRoID0gOTY2OyB2YXIgY3Byb19wc2hlaWdodCA9IDEyMDsgIFxuXG5cbiAgICB2YXIgdGVtcCA9IFdvcmRUb0hleChhKSArIFdvcmRUb0hleChiKSArIFdvcmRUb0hleChjKSArIFdvcmRUb0hleChkKTsgcmV0dXJuIHRlbXAudG9Mb3dlckNhc2UoKTsgIFxufSAgXG5mdW5jdGlvbiBSb3RhdGVMZWZ0KGxWYWx1ZSwgaVNoaWZ0Qml0cykgeyAgXG4gICAgcmV0dXJuIChsVmFsdWUgPDwgaVNoaWZ0Qml0cykgfCAobFZhbHVlID4+PiAoMzIgLSBpU2hpZnRCaXRzKSk7ICBcbn0gIFxuZnVuY3Rpb24gQWRkVW5zaWduZWQobFgsIGxZKSB7ICBcbiAgICB2YXIgbFg0LCBsWTQsIGxYOCwgbFk4LCBsUmVzdWx0OyBsWDggPSAobFggJiAweDgwMDAwMDAwKTsgbFk4ID0gKGxZICYgMHg4MDAwMDAwMCk7IGxYNCA9IChsWCAmIDB4NDAwMDAwMDApOyBsWTQgPSAobFkgJiAweDQwMDAwMDAwKTsgIFxuICAgIGxSZXN1bHQgPSAobFggJiAweDNGRkZGRkZGKSArIChsWSAmIDB4M0ZGRkZGRkYpOyBpZiAobFg0ICYgbFk0KSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gMHg4MDAwMDAwMCBeIGxYOCBeIGxZOCk7ICBcbiAgICB9ICBcbiAgICBpZiAobFg0IHwgbFk0KSB7ICBcbiAgICAgICAgaWYgKGxSZXN1bHQgJiAweDQwMDAwMDAwKSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4QzAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgICAgIHJldHVybiAobFJlc3VsdCBeIDB4NDAwMDAwMDAgXiBsWDggXiBsWTgpOyAgXG4gICAgICAgIH0gIFxuICAgIH0gZWxzZSB7ICBcbiAgICAgICAgcmV0dXJuIChsUmVzdWx0IF4gbFg4IF4gbFk4KTsgIFxuICAgIH0gIFxufSAgXG5mdW5jdGlvbiBGKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHkpIHwgKCh+eCkgJiB6KTsgIFxufSAgXG5mdW5jdGlvbiBHKHgsIHksIHopIHsgIFxuICAgIHJldHVybiAoeCAmIHopIHwgKHkgJiAofnopKTsgIFxufSAgXG5mdW5jdGlvbiBIKHgsIHksIHopIHsgcmV0dXJuICh4IF4geSBeIHopOyB9ICBcbmZ1bmN0aW9uIEkoeCwgeSwgeikgeyByZXR1cm4gKHkgXiAoeCB8ICh+eikpKTsgfSAgXG5mdW5jdGlvbiBGRihhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEYoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gR0coYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChHKGIsIGMsIGQpLCB4KSwgYWMpKTsgIFxuXG5cblxuICAgIHJldHVybiBBZGRVbnNpZ25lZChSb3RhdGVMZWZ0KGEsIHMpLCBiKTsgIFxufSAgXG5mdW5jdGlvbiBISChhLCBiLCBjLCBkLCB4LCBzLCBhYykgeyAgXG4gICAgYSA9IEFkZFVuc2lnbmVkKGEsIEFkZFVuc2lnbmVkKEFkZFVuc2lnbmVkKEgoYiwgYywgZCksIHgpLCBhYykpOyByZXR1cm4gQWRkVW5zaWduZWQoUm90YXRlTGVmdChhLCBzKSwgYik7ICBcbn0gIFxuZnVuY3Rpb24gSUkoYSwgYiwgYywgZCwgeCwgcywgYWMpIHsgIFxuICAgIGEgPSBBZGRVbnNpZ25lZChhLCBBZGRVbnNpZ25lZChBZGRVbnNpZ25lZChJKGIsIGMsIGQpLCB4KSwgYWMpKTsgcmV0dXJuIEFkZFVuc2lnbmVkKFJvdGF0ZUxlZnQoYSwgcyksIGIpOyAgXG59ICBcbmZ1bmN0aW9uIENvbnZlcnRUb1dvcmRBcnJheShzdHJpbmcpIHsgIFxuICAgIHZhciBsV29yZENvdW50OyAgXG4gICAgdmFyIGxNZXNzYWdlTGVuZ3RoID0gc3RyaW5nLmxlbmd0aDsgIFxuICAgIHZhciBsTnVtYmVyT2ZXb3Jkc190ZW1wMSA9IGxNZXNzYWdlTGVuZ3RoICsgODsgdmFyIGxOdW1iZXJPZldvcmRzX3RlbXAyID0gIFxuICAgIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAtIChsTnVtYmVyT2ZXb3Jkc190ZW1wMSAlIDY0KSkgLyA2NDsgdmFyIGxOdW1iZXJPZldvcmRzID0gKGxOdW1iZXJPZldvcmRzX3RlbXAyICsgMSkgKiAxNjsgdmFyIGxXb3JkQXJyYXkgPSBBcnJheShsTnVtYmVyT2ZXb3JkcyAtIDEpOyB2YXIgbEJ5dGVQb3NpdGlvbiA9IDA7IHZhciBsQnl0ZUNvdW50ID0gMDsgIFxuICAgIHdoaWxlIChsQnl0ZUNvdW50IDwgbE1lc3NhZ2VMZW5ndGgpIHsgIFxuICAgICAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgICAgICBsV29yZEFycmF5W2xXb3JkQ291bnRdID0gKGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gfCAoc3RyaW5nLmNoYXJDb2RlQXQobEJ5dGVDb3VudCkgPDwgbEJ5dGVQb3NpdGlvbikpOyBsQnl0ZUNvdW50Kys7ICBcbiAgICB9ICBcbiAgICBsV29yZENvdW50ID0gKGxCeXRlQ291bnQgLSAobEJ5dGVDb3VudCAlIDQpKSAvIDQ7IGxCeXRlUG9zaXRpb24gPSAobEJ5dGVDb3VudCAlIDQpICogODsgIFxuICAgIGxXb3JkQXJyYXlbbFdvcmRDb3VudF0gPSBsV29yZEFycmF5W2xXb3JkQ291bnRdIHwgKDB4ODAgPDwgbEJ5dGVQb3NpdGlvbik7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAyXSA9IGxNZXNzYWdlTGVuZ3RoIDw8IDM7IGxXb3JkQXJyYXlbbE51bWJlck9mV29yZHMgLSAxXSA9IGxNZXNzYWdlTGVuZ3RoID4+PiAyOTsgcmV0dXJuIGxXb3JkQXJyYXk7ICBcbn0gIFxuZnVuY3Rpb24gV29yZFRvSGV4KGxWYWx1ZSkgeyAgXG4gICAgdmFyIFdvcmRUb0hleFZhbHVlID0gXCJcIiwgV29yZFRvSGV4VmFsdWVfdGVtcCA9IFwiXCIsIGxCeXRlLCBsQ291bnQ7IGZvciAobENvdW50ID0gMDsgbENvdW50IDw9IDM7IGxDb3VudCsrKSB7ICBcbiAgICAgICAgbEJ5dGUgPSAobFZhbHVlID4+PiAobENvdW50ICogOCkpICYgMjU1OyAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlX3RlbXAgPSBcIjBcIiArIGxCeXRlLnRvU3RyaW5nKDE2KTsgV29yZFRvSGV4VmFsdWUgPSAgXG4gICAgICAgIFdvcmRUb0hleFZhbHVlICsgV29yZFRvSGV4VmFsdWVfdGVtcC5zdWJzdHIoV29yZFRvSGV4VmFsdWVfdGVtcC5sZW5ndGggLSAyLCAyKTsgIFxuICAgIH0gIFxuICAgIHJldHVybiBXb3JkVG9IZXhWYWx1ZTsgIFxufSAgXG5cblxuZnVuY3Rpb24gVXRmOEVuY29kZShzdHJpbmcpIHsgIFxuICAgIHZhciB1dGZ0ZXh0ID0gXCJcIjsgIFxuICAgIGZvciAodmFyIG4gPSAwOyBuIDwgc3RyaW5nLmxlbmd0aDsgbisrKSB7ICBcbiAgICAgICAgdmFyIGMgPSBzdHJpbmcuY2hhckNvZGVBdChuKTsgaWYgKGMgPCAxMjgpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKGMpOyAgXG4gICAgICAgIH0gZWxzZSBpZiAoKGMgPiAxMjcpICYmIChjIDwgMjA0OCkpIHsgIFxuICAgICAgICAgICAgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjID4+IDYpIHwgMTkyKTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKChjICYgNjMpIHwgMTI4KTsgIFxuICAgICAgICB9IGVsc2UgeyAgXG4gICAgICAgICAgICB1dGZ0ZXh0ICs9IFN0cmluZy5mcm9tQ2hhckNvZGUoKGMgPj4gMTIpIHwgMjI0KTsgdXRmdGV4dCArPSBTdHJpbmcuZnJvbUNoYXJDb2RlKCgoYyA+PiA2KSAmIDYzKSB8IDEyOCk7IHV0ZnRleHQgKz0gU3RyaW5nLmZyb21DaGFyQ29kZSgoYyAmIDYzKSB8IDEyOCk7ICBcbiAgICAgICAgfSAgXG4gICAgfSAgXG4gICAgcmV0dXJuIHV0ZnRleHQ7ICBcbn1cblxubW9kdWxlLmV4cG9ydHMgPSBtZDUgXG5cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Component/Turntable.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'a0d37YEOINFB4+Nq2WmWm0G', 'Turntable');
// Script/Component/Turntable.ts

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
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Turntable = /** @class */ (function (_super) {
    __extends(Turntable, _super);
    function Turntable() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = null;
        return _this;
    }
    Turntable_1 = Turntable;
    Turntable.prototype.onLoad = function () {
        if (Turntable_1.Instance === null) {
            Turntable_1.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    };
    Turntable.prototype.onEnable = function () {
        this.registerEvent();
    };
    Turntable.prototype.registerEvent = function () {
        var block = this.node.getChildByName("block");
        block.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        var voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.on(cc.Node.EventType.TOUCH_END, this.showVideo, this);
    };
    Turntable.prototype.showVideo = function () {
        this.wrap.getChildByName("turn").angle = 0;
        var time = 6; //旋转时间
        var circle = 6; //旋转圈数
        var id = 6; // 旋转停止的角度
        var idAngele = [0, 45, 90, 135, 180, 225, 270, 315];
        //随机一个-20---20的角度
        var rdm = cc.Tools.createRandom(-20, 20);
        cc.tween(this.wrap.getChildByName("turn")).to(time, { angle: 360 * circle + idAngele[id - 1] + rdm }, { easing: "sineInOut" }).start();
    };
    Turntable.prototype.removeEvent = function () {
        var block = this.node.getChildByName("block");
        block.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        var voideBtn = this.wrap.getChildByName("video_btn");
        voideBtn.off(cc.Node.EventType.TOUCH_END, this.showVideo, this);
    };
    Turntable.prototype.closeLayer = function () {
        var _this = this;
        console.log("close");
        this.node.active = false;
        this.scheduleOnce(function () {
            _this.removeEvent();
        });
    };
    var Turntable_1;
    Turntable.Instance = null;
    Turntable = Turntable_1 = __decorate([
        ccclass
    ], Turntable);
    return Turntable;
}(cc.Component));
exports.default = Turntable;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tcG9uZW50L1R1cm50YWJsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBTSxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUV6QztJQUF1Qyw2QkFBWTtJQUFuRDtRQUFBLHFFQTRDQztRQTFDVyxVQUFJLEdBQVcsSUFBSSxDQUFDOztJQTBDaEMsQ0FBQztrQkE1Q29CLFNBQVM7SUFHaEIsMEJBQU0sR0FBaEI7UUFDSSxJQUFJLFdBQVMsQ0FBQyxRQUFRLEtBQUssSUFBSSxFQUFFO1lBQzdCLFdBQVMsQ0FBQyxRQUFRLEdBQUcsSUFBSSxDQUFDO1NBQzdCO2FBQU07WUFDSCxJQUFJLENBQUMsT0FBTyxFQUFFLENBQUM7WUFDZixPQUFPO1NBQ1Y7UUFDRCxJQUFJLENBQUMsSUFBSSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxDQUFDO0lBQ2pELENBQUM7SUFDUyw0QkFBUSxHQUFsQjtRQUNJLElBQUksQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUN6QixDQUFDO0lBQ1MsaUNBQWEsR0FBdkI7UUFDSSxJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUM5QyxLQUFLLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsVUFBVSxFQUFDLElBQUksQ0FBQyxDQUFDO1FBQzNELElBQUksUUFBUSxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLFdBQVcsQ0FBQyxDQUFDO1FBQ3JELFFBQVEsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLENBQUE7SUFDaEUsQ0FBQztJQUNTLDZCQUFTLEdBQW5CO1FBQ0ksSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUMzQyxJQUFJLElBQUksR0FBRyxDQUFDLENBQUMsQ0FBQyxNQUFNO1FBQ3BCLElBQUksTUFBTSxHQUFHLENBQUMsQ0FBQyxDQUFDLE1BQU07UUFDdEIsSUFBSSxFQUFFLEdBQUcsQ0FBQyxDQUFDLENBQUMsVUFBVTtRQUN0QixJQUFJLFFBQVEsR0FBRyxDQUFDLENBQUMsRUFBQyxFQUFFLEVBQUMsRUFBRSxFQUFDLEdBQUcsRUFBQyxHQUFHLEVBQUMsR0FBRyxFQUFDLEdBQUcsRUFBQyxHQUFHLENBQUMsQ0FBQztRQUM3QyxpQkFBaUI7UUFDakIsSUFBSSxHQUFHLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQyxZQUFZLENBQUMsQ0FBQyxFQUFFLEVBQUMsRUFBRSxDQUFDLENBQUM7UUFDeEMsRUFBRSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxNQUFNLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFJLEVBQUMsRUFBQyxLQUFLLEVBQUMsR0FBRyxHQUFHLE1BQU0sR0FBRyxRQUFRLENBQUMsRUFBRSxHQUFDLENBQUMsQ0FBQyxHQUFDLEdBQUcsRUFBQyxFQUFDLEVBQUMsTUFBTSxFQUFDLFdBQVcsRUFBQyxDQUFDLENBQUMsS0FBSyxFQUFFLENBQUE7SUFDOUgsQ0FBQztJQUNTLCtCQUFXLEdBQXJCO1FBQ0ksSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsT0FBTyxDQUFDLENBQUM7UUFDOUMsS0FBSyxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQztRQUM1RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsSUFBSSxDQUFDLGNBQWMsQ0FBQyxXQUFXLENBQUMsQ0FBQztRQUNyRCxRQUFRLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxJQUFJLENBQUMsU0FBUyxDQUFDLFNBQVMsRUFBQyxJQUFJLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxDQUFBO0lBQ2pFLENBQUM7SUFDUyw4QkFBVSxHQUFwQjtRQUFBLGlCQU1DO1FBTEcsT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDekIsSUFBSSxDQUFDLFlBQVksQ0FBQztZQUNkLEtBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN2QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7O0lBMUNhLGtCQUFRLEdBQWMsSUFBSSxDQUFDO0lBRHhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0E0QzdCO0lBQUQsZ0JBQUM7Q0E1Q0QsQUE0Q0MsQ0E1Q3NDLEVBQUUsQ0FBQyxTQUFTLEdBNENsRDtrQkE1Q29CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFR1cm50YWJsZSBleHRlbmRzIGNjLkNvbXBvbmVudCB7XG4gICAgcHVibGljIHN0YXRpYyBJbnN0YW5jZTogVHVybnRhYmxlID0gbnVsbDtcbiAgICBwcml2YXRlIHdyYXA6Y2MuTm9kZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKFR1cm50YWJsZS5JbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgVHVybnRhYmxlLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMud3JhcCA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcIndyYXBcIik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBvbkVuYWJsZSgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgfVxuICAgIHByb3RlY3RlZCByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xuICAgICAgICBsZXQgYmxvY2sgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja1wiKTtcbiAgICAgICAgYmxvY2sub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELHRoaXMuY2xvc2VMYXllcix0aGlzKTtcbiAgICAgICAgbGV0IHZvaWRlQnRuID0gdGhpcy53cmFwLmdldENoaWxkQnlOYW1lKFwidmlkZW9fYnRuXCIpO1xuICAgICAgICB2b2lkZUJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zaG93VmlkZW8sdGhpcylcbiAgICB9XG4gICAgcHJvdGVjdGVkIHNob3dWaWRlbygpOnZvaWR7XG4gICAgICAgIHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInR1cm5cIikuYW5nbGUgPSAwO1xuICAgICAgICBsZXQgdGltZSA9IDY7IC8v5peL6L2s5pe26Ze0XG4gICAgICAgIGxldCBjaXJjbGUgPSA2OyAvL+aXi+i9rOWciOaVsFxuICAgICAgICBsZXQgaWQgPSA2OyAvLyDml4vovazlgZzmraLnmoTop5LluqZcbiAgICAgICAgbGV0IGlkQW5nZWxlID0gWzAsNDUsOTAsMTM1LDE4MCwyMjUsMjcwLDMxNV07XG4gICAgICAgIC8v6ZqP5py65LiA5LiqLTIwLS0tMjDnmoTop5LluqZcbiAgICAgICAgbGV0IHJkbSA9IGNjLlRvb2xzLmNyZWF0ZVJhbmRvbSgtMjAsMjApO1xuICAgICAgICBjYy50d2Vlbih0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJ0dXJuXCIpKS50byh0aW1lLHthbmdsZTozNjAgKiBjaXJjbGUgKyBpZEFuZ2VsZVtpZC0xXStyZG19LHtlYXNpbmc6XCJzaW5lSW5PdXRcIn0pLnN0YXJ0KClcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbW92ZUV2ZW50KCk6IHZvaWQge1xuICAgICAgICBsZXQgYmxvY2sgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja1wiKTtcbiAgICAgICAgYmxvY2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLmNsb3NlTGF5ZXIsdGhpcyk7XG4gICAgICAgIGxldCB2b2lkZUJ0biA9IHRoaXMud3JhcC5nZXRDaGlsZEJ5TmFtZShcInZpZGVvX2J0blwiKTtcbiAgICAgICAgdm9pZGVCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLnNob3dWaWRlbyx0aGlzKVxuICAgIH1cbiAgICBwcm90ZWN0ZWQgY2xvc2VMYXllcigpOiB2b2lkIHtcbiAgICAgICAgY29uc29sZS5sb2coXCJjbG9zZVwiKTtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKT0+e1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgICAgICB9KVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/GameLanch.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '28c34aI0o1CI6szOGBpt8Ss', 'GameLanch');
// Script/Game/GameLanch.ts

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
var Login_1 = require("./Login");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var GameLanch = /** @class */ (function (_super) {
    __extends(GameLanch, _super);
    function GameLanch() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    GameLanch_1 = GameLanch;
    GameLanch.prototype.onLoad = function () {
        if (GameLanch_1.Instance === null) {
            GameLanch_1.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        this.node.addComponent(AssetsBundle_1.default);
        this.node.addComponent(Login_1.default);
    };
    GameLanch.prototype.start = function () {
        Login_1.default.Instance.LoginGame();
    };
    var GameLanch_1;
    GameLanch.Instance = null;
    GameLanch = GameLanch_1 = __decorate([
        ccclass
    ], GameLanch);
    return GameLanch;
}(cc.Component));
exports.default = GameLanch;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9HYW1lTGFuY2gudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsK0NBQTBDO0FBQzFDLGlDQUE0QjtBQUN0QixJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUV6QztJQUF1Qyw2QkFBWTtJQUFuRDs7SUFlQSxDQUFDO2tCQWZvQixTQUFTO0lBRWhCLDBCQUFNLEdBQWhCO1FBQ0ksSUFBRyxXQUFTLENBQUMsUUFBUSxLQUFLLElBQUksRUFBQztZQUMzQixXQUFTLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztTQUM3QjthQUFJO1lBQ0QsSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsT0FBTztTQUNWO1FBQ0QsSUFBSSxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsc0JBQVksQ0FBQyxDQUFDO1FBQ3JDLElBQUksQ0FBQyxJQUFJLENBQUMsWUFBWSxDQUFDLGVBQUssQ0FBQyxDQUFDO0lBQ2xDLENBQUM7SUFDUyx5QkFBSyxHQUFmO1FBQ0ksZUFBSyxDQUFDLFFBQVEsQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUMvQixDQUFDOztJQWJjLGtCQUFRLEdBQWEsSUFBSSxDQUFDO0lBRHhCLFNBQVM7UUFEN0IsT0FBTztPQUNhLFNBQVMsQ0FlN0I7SUFBRCxnQkFBQztDQWZELEFBZUMsQ0Fmc0MsRUFBRSxDQUFDLFNBQVMsR0FlbEQ7a0JBZm9CLFNBQVMiLCJmaWxlIjoiIiwic291cmNlUm9vdCI6Ii8iLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgQXNzZXRzQnVuZGxlIGZyb20gXCIuL0Fzc2V0c0J1bmRsZVwiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuL0xvZ2luXCI7XG5jb25zdCB7Y2NjbGFzcyxwcm9wZXJ0eX0gPSBjYy5fZGVjb3JhdG9yO1xuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEdhbWVMYW5jaCBleHRlbmRzIGNjLkNvbXBvbmVudHtcbiAgICBwcml2YXRlIHN0YXRpYyBJbnN0YW5jZTpHYW1lTGFuY2ggPSBudWxsO1xuICAgIHByb3RlY3RlZCBvbkxvYWQoKTogdm9pZCB7XG4gICAgICAgIGlmKEdhbWVMYW5jaC5JbnN0YW5jZSA9PT0gbnVsbCl7XG4gICAgICAgICAgICBHYW1lTGFuY2guSW5zdGFuY2UgPSB0aGlzO1xuICAgICAgICB9ZWxzZXtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMubm9kZS5hZGRDb21wb25lbnQoQXNzZXRzQnVuZGxlKTtcbiAgICAgICAgdGhpcy5ub2RlLmFkZENvbXBvbmVudChMb2dpbik7XG4gICAgfVxuICAgIHByb3RlY3RlZCBzdGFydCgpOiB2b2lkIHtcbiAgICAgICAgTG9naW4uSW5zdGFuY2UuTG9naW5HYW1lKCk7XG4gICAgfVxufSJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/GameResPkg.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '3aa8c+yp/xEGLi3B1av3eIX', 'GameResPkg');
// Script/Game/GameResPkg.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var resPkg = {
    "Game": {
        "Audio": {
            assetType: cc.AudioClip,
            urls: [
                "Audio/pop", "Audio/Amazing", "Audio/bgm", "Audio/dianji", "Audio/excellent", "Audio/five", "Audio/four", "Audio/gold",
                "Audio/good", "Audio/great", "Audio/three", "Audio/two", "Audio/unbelievable", "Audio/win"
            ]
        },
        "SpriteMain": {
            assetType: cc.SpriteFrame,
            urls: [
                "SpriteMain/main_1", "SpriteMain/main_2", "SpriteMain/main_3", "SpriteMain/main_4", "SpriteMain/main_5", "SpriteMain/main_6", "SpriteMain/main_7", "SpriteMain/main_8",
                "SpriteMain/main_9", "SpriteMain/main_10", "SpriteMain/main_11", "SpriteMain/main_12", "SpriteMain/main_13", "SpriteMain/main_14", "SpriteMain/main_15",
                "SpriteMain/main_16", "SpriteMain/main_17", "SpriteMain/main_18", "SpriteMain/main_19", "SpriteMain/main_20", "SpriteMain/main_21", "SpriteMain/main_22", "SpriteMain/main_23",
                ,
                "SpriteMain/main_24", "SpriteMain/main_25", "SpriteMain/main_26", "SpriteMain/main_27", "SpriteMain/main_28", "SpriteMain/main_29", "SpriteMain/main_30"
            ]
        },
        "SpriteTurn": {
            assetType: cc.SpriteFrame,
            urls: [
                "SpriteTurn/turn_1", "SpriteTurn/turn_2", "SpriteTurn/turn_3", "SpriteTurn/turn_4", "SpriteTurn/turn_5", "SpriteTurn/turn_6", "SpriteTurn/turn_7"
            ]
        },
        "SpriteCash": {
            assetType: cc.SpriteFrame,
            urls: [
                "SpriteCash/cash_1", "SpriteCash/cash_2", "SpriteCash/cash_3", "SpriteCash/cash_4", "SpriteCash/cash_5", "SpriteCash/cash_6", "SpriteCash/cash_7", "SpriteCash/cash_8",
                "SpriteCash/cash_9", "SpriteCash/cash_10", "SpriteCash/cash_11", "SpriteCash/cash_12", "SpriteCash/cash_13", "SpriteCash/cash_14", "SpriteCash/cash_15", "SpriteCash/cash_16",
                "SpriteCash/cash_17", "SpriteCash/cash_18", "SpriteCash/cash_19", "SpriteCash/cash_20", "SpriteCash/cash_21", "SpriteCash/cash_22", "SpriteCash/cash_23", "SpriteCash/cash_24",
                "SpriteCash/cash_25", "SpriteCash/cash_26", "SpriteCash/cash_27", "SpriteCash/cash_28", "SpriteCash/cash_29", "SpriteCash/cash_30", "SpriteCash/cash_31", "SpriteCash/cash_32",
                "SpriteCash/cash_33", "SpriteCash/cash_34", "SpriteCash/cash_35", "SpriteCash/cash_36", "SpriteCash/cash_37", "SpriteCash/cash_38", "SpriteCash/cash_39"
            ]
        },
        "Prefab": {
            assetType: cc.Prefab,
            urls: [
                "Prefab/red", "Prefab/green", "Prefab/yellow", "Prefab/blue", "Prefab/pink", "Prefab/effect", "Prefab/turntable_layer", "Prefab/cash_layer", "Prefab/first_pop"
            ]
        }
    }
};
exports.default = resPkg;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9HYW1lUmVzUGtnLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsSUFBSSxNQUFNLEdBQUc7SUFDVCxNQUFNLEVBQUU7UUFDSixPQUFPLEVBQUU7WUFDTCxTQUFTLEVBQUUsRUFBRSxDQUFDLFNBQVM7WUFDdkIsSUFBSSxFQUFFO2dCQUNGLFdBQVcsRUFBRSxlQUFlLEVBQUUsV0FBVyxFQUFFLGNBQWMsRUFBRSxpQkFBaUIsRUFBRSxZQUFZLEVBQUUsWUFBWSxFQUFFLFlBQVk7Z0JBQ3RILFlBQVksRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFdBQVcsRUFBRSxvQkFBb0IsRUFBRSxXQUFXO2FBQzdGO1NBQ0o7UUFDRCxZQUFZLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRSxDQUFDLFdBQVc7WUFDekIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjtnQkFDcEssbUJBQW1CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO2dCQUN2SixvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBRSxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBRSxvQkFBb0I7Z0JBQUMsQUFDaEw7Z0JBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUcsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CLEVBQUUsb0JBQW9CO2FBQzlKO1NBQ0o7UUFDRCxZQUFZLEVBQUU7WUFDVixTQUFTLEVBQUUsRUFBRSxDQUFDLFdBQVc7WUFDekIsSUFBSSxFQUFFO2dCQUNGLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQixFQUFFLG1CQUFtQjthQUNwSjtTQUNKO1FBQ0QsWUFBWSxFQUFFO1lBQ1YsU0FBUyxFQUFFLEVBQUUsQ0FBQyxXQUFXO1lBQ3pCLElBQUksRUFBRTtnQkFDRixtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUIsRUFBQyxtQkFBbUI7Z0JBQy9KLG1CQUFtQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQjtnQkFDdEssb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CLEVBQUMsb0JBQW9CO2dCQUN2SyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0IsRUFBQyxvQkFBb0I7Z0JBQ3ZLLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQixFQUFDLG9CQUFvQjthQUNySjtTQUNKO1FBQ0QsUUFBUSxFQUFFO1lBQ04sU0FBUyxFQUFFLEVBQUUsQ0FBQyxNQUFNO1lBQ3BCLElBQUksRUFBRTtnQkFDRixZQUFZLEVBQUUsY0FBYyxFQUFFLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLGVBQWUsRUFBQyx3QkFBd0IsRUFBQyxtQkFBbUIsRUFBQyxrQkFBa0I7YUFDL0o7U0FDSjtLQUNKO0NBQ0osQ0FBQTtBQUNELGtCQUFlLE1BQU0sQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciByZXNQa2cgPSB7XG4gICAgXCJHYW1lXCI6IHtcbiAgICAgICAgXCJBdWRpb1wiOiB7XG4gICAgICAgICAgICBhc3NldFR5cGU6IGNjLkF1ZGlvQ2xpcCxcbiAgICAgICAgICAgIHVybHM6IFtcbiAgICAgICAgICAgICAgICBcIkF1ZGlvL3BvcFwiLCBcIkF1ZGlvL0FtYXppbmdcIiwgXCJBdWRpby9iZ21cIiwgXCJBdWRpby9kaWFuamlcIiwgXCJBdWRpby9leGNlbGxlbnRcIiwgXCJBdWRpby9maXZlXCIsIFwiQXVkaW8vZm91clwiLCBcIkF1ZGlvL2dvbGRcIixcbiAgICAgICAgICAgICAgICBcIkF1ZGlvL2dvb2RcIiwgXCJBdWRpby9ncmVhdFwiLCBcIkF1ZGlvL3RocmVlXCIsIFwiQXVkaW8vdHdvXCIsIFwiQXVkaW8vdW5iZWxpZXZhYmxlXCIsIFwiQXVkaW8vd2luXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJTcHJpdGVNYWluXCI6IHtcbiAgICAgICAgICAgIGFzc2V0VHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgXCJTcHJpdGVNYWluL21haW5fMVwiLCBcIlNwcml0ZU1haW4vbWFpbl8yXCIsIFwiU3ByaXRlTWFpbi9tYWluXzNcIiwgXCJTcHJpdGVNYWluL21haW5fNFwiLCBcIlNwcml0ZU1haW4vbWFpbl81XCIsIFwiU3ByaXRlTWFpbi9tYWluXzZcIiwgXCJTcHJpdGVNYWluL21haW5fN1wiLCBcIlNwcml0ZU1haW4vbWFpbl84XCJcbiAgICAgICAgICAgICAgICAsIFwiU3ByaXRlTWFpbi9tYWluXzlcIiwgXCJTcHJpdGVNYWluL21haW5fMTBcIiwgXCJTcHJpdGVNYWluL21haW5fMTFcIiwgXCJTcHJpdGVNYWluL21haW5fMTJcIiwgXCJTcHJpdGVNYWluL21haW5fMTNcIiwgXCJTcHJpdGVNYWluL21haW5fMTRcIiwgXCJTcHJpdGVNYWluL21haW5fMTVcIlxuICAgICAgICAgICAgICAgICwgXCJTcHJpdGVNYWluL21haW5fMTZcIiwgXCJTcHJpdGVNYWluL21haW5fMTdcIiwgXCJTcHJpdGVNYWluL21haW5fMThcIiwgXCJTcHJpdGVNYWluL21haW5fMTlcIiwgXCJTcHJpdGVNYWluL21haW5fMjBcIiwgXCJTcHJpdGVNYWluL21haW5fMjFcIixcIlNwcml0ZU1haW4vbWFpbl8yMlwiLCBcIlNwcml0ZU1haW4vbWFpbl8yM1wiLFxuICAgICAgICAgICAgICAgICwgXCJTcHJpdGVNYWluL21haW5fMjRcIiwgXCJTcHJpdGVNYWluL21haW5fMjVcIiwgXCJTcHJpdGVNYWluL21haW5fMjZcIiAsIFwiU3ByaXRlTWFpbi9tYWluXzI3XCIsIFwiU3ByaXRlTWFpbi9tYWluXzI4XCIsIFwiU3ByaXRlTWFpbi9tYWluXzI5XCIsIFwiU3ByaXRlTWFpbi9tYWluXzMwXCJcbiAgICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgXCJTcHJpdGVUdXJuXCI6IHtcbiAgICAgICAgICAgIGFzc2V0VHlwZTogY2MuU3ByaXRlRnJhbWUsXG4gICAgICAgICAgICB1cmxzOiBbXG4gICAgICAgICAgICAgICAgXCJTcHJpdGVUdXJuL3R1cm5fMVwiLCBcIlNwcml0ZVR1cm4vdHVybl8yXCIsIFwiU3ByaXRlVHVybi90dXJuXzNcIiwgXCJTcHJpdGVUdXJuL3R1cm5fNFwiLCBcIlNwcml0ZVR1cm4vdHVybl81XCIsIFwiU3ByaXRlVHVybi90dXJuXzZcIiwgXCJTcHJpdGVUdXJuL3R1cm5fN1wiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiU3ByaXRlQ2FzaFwiOiB7XG4gICAgICAgICAgICBhc3NldFR5cGU6IGNjLlNwcml0ZUZyYW1lLFxuICAgICAgICAgICAgdXJsczogW1xuICAgICAgICAgICAgICAgIFwiU3ByaXRlQ2FzaC9jYXNoXzFcIixcIlNwcml0ZUNhc2gvY2FzaF8yXCIsXCJTcHJpdGVDYXNoL2Nhc2hfM1wiLFwiU3ByaXRlQ2FzaC9jYXNoXzRcIixcIlNwcml0ZUNhc2gvY2FzaF81XCIsXCJTcHJpdGVDYXNoL2Nhc2hfNlwiLFwiU3ByaXRlQ2FzaC9jYXNoXzdcIixcIlNwcml0ZUNhc2gvY2FzaF84XCIsXG4gICAgICAgICAgICAgICAgXCJTcHJpdGVDYXNoL2Nhc2hfOVwiLFwiU3ByaXRlQ2FzaC9jYXNoXzEwXCIsXCJTcHJpdGVDYXNoL2Nhc2hfMTFcIixcIlNwcml0ZUNhc2gvY2FzaF8xMlwiLFwiU3ByaXRlQ2FzaC9jYXNoXzEzXCIsXCJTcHJpdGVDYXNoL2Nhc2hfMTRcIixcIlNwcml0ZUNhc2gvY2FzaF8xNVwiLFwiU3ByaXRlQ2FzaC9jYXNoXzE2XCIsXG4gICAgICAgICAgICAgICAgXCJTcHJpdGVDYXNoL2Nhc2hfMTdcIixcIlNwcml0ZUNhc2gvY2FzaF8xOFwiLFwiU3ByaXRlQ2FzaC9jYXNoXzE5XCIsXCJTcHJpdGVDYXNoL2Nhc2hfMjBcIixcIlNwcml0ZUNhc2gvY2FzaF8yMVwiLFwiU3ByaXRlQ2FzaC9jYXNoXzIyXCIsXCJTcHJpdGVDYXNoL2Nhc2hfMjNcIixcIlNwcml0ZUNhc2gvY2FzaF8yNFwiLFxuICAgICAgICAgICAgICAgIFwiU3ByaXRlQ2FzaC9jYXNoXzI1XCIsXCJTcHJpdGVDYXNoL2Nhc2hfMjZcIixcIlNwcml0ZUNhc2gvY2FzaF8yN1wiLFwiU3ByaXRlQ2FzaC9jYXNoXzI4XCIsXCJTcHJpdGVDYXNoL2Nhc2hfMjlcIixcIlNwcml0ZUNhc2gvY2FzaF8zMFwiLFwiU3ByaXRlQ2FzaC9jYXNoXzMxXCIsXCJTcHJpdGVDYXNoL2Nhc2hfMzJcIixcbiAgICAgICAgICAgICAgICBcIlNwcml0ZUNhc2gvY2FzaF8zM1wiLFwiU3ByaXRlQ2FzaC9jYXNoXzM0XCIsXCJTcHJpdGVDYXNoL2Nhc2hfMzVcIixcIlNwcml0ZUNhc2gvY2FzaF8zNlwiLFwiU3ByaXRlQ2FzaC9jYXNoXzM3XCIsXCJTcHJpdGVDYXNoL2Nhc2hfMzhcIixcIlNwcml0ZUNhc2gvY2FzaF8zOVwiXG4gICAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIFwiUHJlZmFiXCI6IHtcbiAgICAgICAgICAgIGFzc2V0VHlwZTogY2MuUHJlZmFiLFxuICAgICAgICAgICAgdXJsczogW1xuICAgICAgICAgICAgICAgIFwiUHJlZmFiL3JlZFwiLCBcIlByZWZhYi9ncmVlblwiLCBcIlByZWZhYi95ZWxsb3dcIiwgXCJQcmVmYWIvYmx1ZVwiLCBcIlByZWZhYi9waW5rXCIsIFwiUHJlZmFiL2VmZmVjdFwiLFwiUHJlZmFiL3R1cm50YWJsZV9sYXllclwiLFwiUHJlZmFiL2Nhc2hfbGF5ZXJcIixcIlByZWZhYi9maXJzdF9wb3BcIlxuICAgICAgICAgICAgXVxuICAgICAgICB9XG4gICAgfVxufVxuZXhwb3J0IGRlZmF1bHQgcmVzUGtnIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/Login.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '69b22qLxxJKdrL2JFXfTrAW', 'Login');
// Script/Game/Login.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
var CocosBridge_1 = require("../Tools/CocosBridge");
var AssetsBundle_1 = require("./AssetsBundle");
var GameResPkg_1 = require("./GameResPkg");
var Login = /** @class */ (function (_super) {
    __extends(Login, _super);
    function Login() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Login.prototype.onLoad = function () {
        if (Login.Instance === null) {
            Login.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    };
    Login.prototype.LoginGame = function () {
        cc.Tools.screenAdapter();
        cc.Tools.Event = new cc.EventTarget();
        // this.loginLayer = this.node.getChildByName("login");
        // cc.Tools.breatheAnim(this.loginLayer.getChildByName("login_btn"));
        // cc.Tools.Event.on('getCode', this.getCode, this);
        // this.userPrivacy = this.loginLayer.getChildByName("user_privacy");
        // this.userProtocol = this.loginLayer.getChildByName("user_protocol");
        if (cc.sys.isNative) {
            var wxToken = cc.sys.localStorage.getItem("token");
            if (!wxToken) {
                this.registerEvent();
            }
            else {
                CocosBridge_1.default.JSCallNative("preLoadRewardVideoAd", "" + { "token": wxToken });
                this.getAdTimes();
            }
        }
        else {
            cc.sys.localStorage.setItem("token", "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJWZXJzaW9uIjowLCJ1c2VyX2lkIjo3OTU5Miwib3Blbl9pZCI6Im9qbGR1NmIyMFMzbWtJM1pWNmgxOS1oU1YwQlUiLCJuaWNrX25hbWUiOiJZLvCfjLUiLCJnZW5kZXIiOjAsImF2YXRhciI6Imh0dHBzOi8vdGhpcmR3eC5xbG9nby5jbi9tbW9wZW4vdmlfMzIvNE9SaGdyendTeEVJUXk1anJmNXR3VE0wdmQ1ZjBHRDVGVWZiejRiV01ybktNVVJKVVJzQzhFMHZ2OTdLUVFFdERUR1RrbncxYWVka0FtZFEyeDZpYkRnLzEzMiIsImNyZWF0ZV90aW1lIjoxNjQ1NDI1NjYzLCJjaGFubmVsIjoibWVpenUyIiwiZGlzdGluY3RfaWQiOiI4ZDZjMGRmZC0yMzAzLTQwMTUtOTNjNS1lMjY1NGU1ZTI4ZmQiLCJpbWVpIjoiIiwibWFjIjoiMDI6MDA6MDA6MDA6MDA6MDAiLCJhbmRyb2lkX2lkIjoiNzZjZWYzMWRlNGE1NDY3NCIsIm9haWQiOiJmZWVmNWZiYi1jZjZiLTY3MzItYmM3Zi01YmZmNzdkZGRiNzkifQ.BmVpohnKod-1_L2paFDLMSDO1YgQR6CjUNTj1IXYMkc");
            this.getAdTimes();
        }
    };
    Login.prototype.registerEvent = function () {
        // this.protect = this.loginLayer.getChildByName("protect");
        // this.protect.active = true;
        // let acceptBtn = this.protect.getChildByName("accept_btn");
        // let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        // acceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // noAcceptBtn.on(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // this.loginLayer.getChildByName("login_btn").on(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        // this.loginLayer.getChildByName("surn_btn").on(cc.Node.EventType.TOUCH_END, this.clickProtocol, this);
        // let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        // privacyBtn.on(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);
        // let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        // closePrivacy.on(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);
        // let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        // protocolBtn.on(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);
        // let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        // closeProtocol.on(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);
    };
    Login.prototype.closeProtectLayer = function (e) {
        // this.protect.active = false;
        // cc.Tools.getPermission();
    };
    Login.prototype.clickProtocol = function (e) {
        // let target = e.target;
        // let select = target.getChildByName("select");
        // if (this.protocol) {
        //     select.active = false;
        //     this.protocol = false;
        // } else {
        //     select.active = true;
        //     this.protocol = true;
        // }
    };
    // closePrivacyLayer(): void {
    //     this.userPrivacy.active = false;
    // }
    // showPrivacyLayer(): void {
    //     this.userPrivacy.active = true;
    // }
    // closeProtocolLayer(): void {
    //     this.userProtocol.active = false;
    // }
    // showProtocolLayer(): void {
    //     this.userProtocol.active = true;
    // }
    Login.prototype.removeEvent = function () {
        // this.loginLayer.getChildByName("login_btn").off(cc.Node.EventType.TOUCH_END, this.loginBtn, this);
        // this.loginLayer.getChildByName("surn_btn").off(cc.Node.EventType.TOUCH_END, this.clickProtocol, this)
        // let privacyBtn = this.loginLayer.getChildByName("privacy_btn");
        // privacyBtn.off(cc.Node.EventType.TOUCH_END, this.showPrivacyLayer, this);
        // let closePrivacy = this.userPrivacy.getChildByName("close_privacy");
        // closePrivacy.off(cc.Node.EventType.TOUCH_END, this.closePrivacyLayer, this);
        // let protocolBtn = this.loginLayer.getChildByName("protocol_btn");
        // protocolBtn.off(cc.Node.EventType.TOUCH_END, this.showProtocolLayer, this);
        // let closeProtocol = this.userProtocol.getChildByName("close_protocol");
        // closeProtocol.off(cc.Node.EventType.TOUCH_END, this.closeProtocolLayer, this);
        // let acceptBtn = this.protect.getChildByName("accept_btn");
        // let noAcceptBtn = this.protect.getChildByName("no_accept_btn");
        // acceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
        // noAcceptBtn.off(cc.Node.EventType.TOUCH_END, this.closeProtectLayer, this);
    };
    // loginBtn(): void {
    //     if (cc.sys.isNative) {
    //         if (this.protocol) {
    //             CocosBridge.JSCallNative("wxLogin", "wx_login");
    //         } else {
    //             cc.Tools.showTips(this.loginLayer, "<color=#000000>请先同意隐私政策和用户协议</color>")
    //         }
    //     }
    // }
    Login.prototype.getAdTimes = function () {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserStat", "GET", sendData).then(function (res) {
            cc.Tools.ad.adShowNum = res.data.ad_show_num;
            cc.Tools.ad.adPosId = res.data.ad_pos_id;
            cc.Tools.ad.adDif = res.data.is_need_watch;
            cc.Tools.ad.steal_left_num = res.data.steal_left_num;
            cc.Tools.treasure = res.data.treasure;
            //
            // let login: cc.Node = this.node.getChildByName("login");
            // let loading: cc.Node = this.node.getChildByName("loading");
            // login.active = false;
            // loading.active = true;
            var progress = _this.node.getChildByName("progress").getComponent(cc.ProgressBar);
            // progress.progress = 0;
            // let icon: cc.Node = loading.getChildByName("icon");
            // cc.tween(progress).to(2, { progress: 1 }).call(() => {
            //     this.startUpdate = false;
            //     cc.director.loadScene('Main');
            // }).start();
            // icon.runAction(cc.moveBy(2, 500, 0));
            AssetsBundle_1.default.Instance.preloadResPkg(GameResPkg_1.default, function (now, total) {
                progress.progress = now / total;
                var sp = progress.node.getChildByName("sp");
                sp.x = 608 * progress.progress + sp.width / 2 - 20;
            }, function () {
                AssetsBundle_1.default.Instance.loadScene("Game", "Main");
            });
        });
    };
    Login.prototype.getCode = function (code) {
        var _this = this;
        // {"channel":"walk","imei":"","android_id":"8bacfc24ece79979","mac":"02:00:00:00:00:00","uid":"3b0fe5ec-050d-46bf-aac6-0dc5aa5889c4","oaid":"fbf75dfb-fffd-7f02-6ef6-f7ffbfad8da6"}
        var data = {
            "channel": cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "",
            "imei": cc.Tools.DeviceInfo.imei ? cc.Tools.DeviceInfo.imei : "",
            "mac": cc.Tools.DeviceInfo.mac ? cc.Tools.DeviceInfo.mac : "",
            "distinct_id": cc.Tools.DeviceInfo.uid ? cc.Tools.DeviceInfo.uid : "",
            "oaid": cc.Tools.DeviceInfo.oaid ? cc.Tools.DeviceInfo.oaid : "",
            "android_id": cc.Tools.DeviceInfo.android_id ? cc.Tools.DeviceInfo.android_id : "",
            "sm_device_id": cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "",
            "code": code
        };
        cc.sys.localStorage.setItem("channel", cc.Tools.DeviceInfo.channel ? cc.Tools.DeviceInfo.channel : "");
        cc.sys.localStorage.setItem("sm_device_id", cc.Tools.DeviceInfo.sm_device_id ? cc.Tools.DeviceInfo.sm_device_id : "");
        cc.Tools.sendRequest("register", "POST", data).then(function (res) {
            cc.sys.localStorage.setItem("token", res.data.token);
            CocosBridge_1.default.JSCallNative("preLoadRewardVideoAd", "" + { "token": res.data.token });
            _this.removeEvent();
            _this.getAdTimes();
        });
    };
    Login.Instance = null;
    return Login;
}(cc.Component));
exports.default = Login;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9Mb2dpbi50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxvREFBK0M7QUFDL0MsK0NBQTBDO0FBQzFDLDJDQUFrQztBQUNsQztJQUFtQyx5QkFBWTtJQUEvQzs7SUErSkEsQ0FBQztJQTdKYSxzQkFBTSxHQUFoQjtRQUNJLElBQUksS0FBSyxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDekIsS0FBSyxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDekI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtJQUNMLENBQUM7SUFDRCx5QkFBUyxHQUFUO1FBQ0ksRUFBRSxDQUFDLEtBQUssQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUN6QixFQUFFLENBQUMsS0FBSyxDQUFDLEtBQUssR0FBRyxJQUFJLEVBQUUsQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUN0Qyx1REFBdUQ7UUFDdkQscUVBQXFFO1FBQ3JFLG9EQUFvRDtRQUNwRCxxRUFBcUU7UUFDckUsdUVBQXVFO1FBQ3ZFLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7WUFDakIsSUFBSSxPQUFPLEdBQUcsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1lBQ25ELElBQUksQ0FBQyxPQUFPLEVBQUU7Z0JBQ1YsSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILHFCQUFXLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxPQUFPLEVBQUUsQ0FBQyxDQUFBO2dCQUMzRSxJQUFJLENBQUMsVUFBVSxFQUFFLENBQUM7YUFDckI7U0FDSjthQUFNO1lBQ0gsRUFBRSxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsT0FBTyxDQUFDLE9BQU8sRUFB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QUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JELHFCQUFXLENBQUMsWUFBWSxDQUFDLHNCQUFzQixFQUFFLEVBQUUsR0FBRyxFQUFFLE9BQU8sRUFBRSxHQUFHLENBQUMsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDLENBQUE7WUFDbEYsS0FBSSxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQ25CLEtBQUksQ0FBQyxVQUFVLEVBQUUsQ0FBQztRQUN0QixDQUFDLENBQUMsQ0FBQTtJQUNOLENBQUM7SUE3SmEsY0FBUSxHQUFVLElBQUksQ0FBQztJQThKekMsWUFBQztDQS9KRCxBQStKQyxDQS9Ka0MsRUFBRSxDQUFDLFNBQVMsR0ErSjlDO2tCQS9Kb0IsS0FBSyIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb2Nvc0JyaWRnZSBmcm9tIFwiLi4vVG9vbHMvQ29jb3NCcmlkZ2VcIjtcbmltcG9ydCBBc3NldHNCdW5kbGUgZnJvbSBcIi4vQXNzZXRzQnVuZGxlXCI7XG5pbXBvcnQgcmVzUGtnIGZyb20gXCIuL0dhbWVSZXNQa2dcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExvZ2luIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBwdWJsaWMgc3RhdGljIEluc3RhbmNlOiBMb2dpbiA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKExvZ2luLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBMb2dpbi5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgIH1cbiAgICBMb2dpbkdhbWUoKTogdm9pZCB7XG4gICAgICAgIGNjLlRvb2xzLnNjcmVlbkFkYXB0ZXIoKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQgPSBuZXcgY2MuRXZlbnRUYXJnZXQoKTtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9naW5cIik7XG4gICAgICAgIC8vIGNjLlRvb2xzLmJyZWF0aGVBbmltKHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcImxvZ2luX2J0blwiKSk7XG4gICAgICAgIC8vIGNjLlRvb2xzLkV2ZW50Lm9uKCdnZXRDb2RlJywgdGhpcy5nZXRDb2RlLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy51c2VyUHJpdmFjeSA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInVzZXJfcHJpdmFjeVwiKTtcbiAgICAgICAgLy8gdGhpcy51c2VyUHJvdG9jb2wgPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ1c2VyX3Byb3RvY29sXCIpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBsZXQgd3hUb2tlbiA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInRva2VuXCIpO1xuICAgICAgICAgICAgaWYgKCF3eFRva2VuKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInByZUxvYWRSZXdhcmRWaWRlb0FkXCIsIFwiXCIgKyB7IFwidG9rZW5cIjogd3hUb2tlbiB9KVxuICAgICAgICAgICAgICAgIHRoaXMuZ2V0QWRUaW1lcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJleUpoYkdjaU9pSklVekkxTmlJc0luUjVjQ0k2SWtwWFZDSjkuZXlKV1pYSnphVzl1SWpvd0xDSjFjMlZ5WDJsa0lqbzNPVFU1TWl3aWIzQmxibDlwWkNJNkltOXFiR1IxTm1JeU1GTXpiV3RKTTFwV05tZ3hPUzFvVTFZd1FsVWlMQ0p1YVdOclgyNWhiV1VpT2lKWkx2Q2ZqTFVpTENKblpXNWtaWElpT2pBc0ltRjJZWFJoY2lJNkltaDBkSEJ6T2k4dmRHaHBjbVIzZUM1eGJHOW5ieTVqYmk5dGJXOXdaVzR2ZG1sZk16SXZORTlTYUdkeWVuZFRlRVZKVVhrMWFuSm1OWFIzVkUwd2RtUTFaakJIUkRWR1ZXWmllalJpVjAxeWJrdE5WVkpLVlZKelF6aEZNSFoyT1RkTFVWRkZkRVJVUjFScmJuY3hZV1ZrYTBGdFpGRXllRFpwWWtSbkx6RXpNaUlzSW1OeVpXRjBaVjkwYVcxbElqb3hOalExTkRJMU5qWXpMQ0pqYUdGdWJtVnNJam9pYldWcGVuVXlJaXdpWkdsemRHbHVZM1JmYVdRaU9pSTRaRFpqTUdSbVpDMHlNekF6TFRRd01UVXRPVE5qTlMxbE1qWTFOR1UxWlRJNFptUWlMQ0pwYldWcElqb2lJaXdpYldGaklqb2lNREk2TURBNk1EQTZNREE2TURBNk1EQWlMQ0poYm1SeWIybGtYMmxrSWpvaU56WmpaV1l6TVdSbE5HRTFORFkzTkNJc0ltOWhhV1FpT2lKbVpXVm1OV1ppWWkxalpqWmlMVFkzTXpJdFltTTNaaTAxWW1abU56ZGtaR1JpTnpraWZRLkJtVnBvaG5Lb2QtMV9MMnBhRkRMTVNETzFZZ1FSNkNqVU5UajFJWFlNa2NcIik7XG4gICAgICAgICAgICB0aGlzLmdldEFkVGltZXMoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICByZWdpc3RlckV2ZW50KCk6IHZvaWQge1xuICAgICAgICAvLyB0aGlzLnByb3RlY3QgPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJwcm90ZWN0XCIpO1xuICAgICAgICAvLyB0aGlzLnByb3RlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gbGV0IGFjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcImFjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGxldCBub0FjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcIm5vX2FjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGFjY2VwdEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcm90ZWN0TGF5ZXIsIHRoaXMpO1xuICAgICAgICAvLyBub0FjY2VwdEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcm90ZWN0TGF5ZXIsIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJsb2dpbl9idG5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmxvZ2luQnRuLCB0aGlzKTtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwic3Vybl9idG5cIikub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrUHJvdG9jb2wsIHRoaXMpO1xuICAgICAgICAvLyBsZXQgcHJpdmFjeUJ0biA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInByaXZhY3lfYnRuXCIpO1xuICAgICAgICAvLyBwcml2YWN5QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93UHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcml2YWN5ID0gdGhpcy51c2VyUHJpdmFjeS5nZXRDaGlsZEJ5TmFtZShcImNsb3NlX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIGNsb3NlUHJpdmFjeS5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuY2xvc2VQcml2YWN5TGF5ZXIsIHRoaXMpO1xuXG4gICAgICAgIC8vIGxldCBwcm90b2NvbEJ0biA9IHRoaXMubG9naW5MYXllci5nZXRDaGlsZEJ5TmFtZShcInByb3RvY29sX2J0blwiKTtcbiAgICAgICAgLy8gcHJvdG9jb2xCdG4ub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNob3dQcm90b2NvbExheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcm90b2NvbCA9IHRoaXMudXNlclByb3RvY29sLmdldENoaWxkQnlOYW1lKFwiY2xvc2VfcHJvdG9jb2xcIik7XG4gICAgICAgIC8vIGNsb3NlUHJvdG9jb2wub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdG9jb2xMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIGNsb3NlUHJvdGVjdExheWVyKGUpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5wcm90ZWN0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjYy5Ub29scy5nZXRQZXJtaXNzaW9uKCk7XG4gICAgfVxuICAgIGNsaWNrUHJvdG9jb2woZSk6IHZvaWQge1xuICAgICAgICAvLyBsZXQgdGFyZ2V0ID0gZS50YXJnZXQ7XG4gICAgICAgIC8vIGxldCBzZWxlY3QgPSB0YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJzZWxlY3RcIik7XG4gICAgICAgIC8vIGlmICh0aGlzLnByb3RvY29sKSB7XG4gICAgICAgIC8vICAgICBzZWxlY3QuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIC8vICAgICB0aGlzLnByb3RvY29sID0gZmFsc2U7XG4gICAgICAgIC8vIH0gZWxzZSB7XG4gICAgICAgIC8vICAgICBzZWxlY3QuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgLy8gICAgIHRoaXMucHJvdG9jb2wgPSB0cnVlO1xuICAgICAgICAvLyB9XG4gICAgfVxuICAgIC8vIGNsb3NlUHJpdmFjeUxheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcml2YWN5LmFjdGl2ZSA9IGZhbHNlO1xuICAgIC8vIH1cbiAgICAvLyBzaG93UHJpdmFjeUxheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcml2YWN5LmFjdGl2ZSA9IHRydWU7XG4gICAgLy8gfVxuICAgIC8vIGNsb3NlUHJvdG9jb2xMYXllcigpOiB2b2lkIHtcbiAgICAvLyAgICAgdGhpcy51c2VyUHJvdG9jb2wuYWN0aXZlID0gZmFsc2U7XG4gICAgLy8gfVxuICAgIC8vIHNob3dQcm90b2NvbExheWVyKCk6IHZvaWQge1xuICAgIC8vICAgICB0aGlzLnVzZXJQcm90b2NvbC5hY3RpdmUgPSB0cnVlO1xuICAgIC8vIH1cbiAgICByZW1vdmVFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgLy8gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwibG9naW5fYnRuXCIpLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMubG9naW5CdG4sIHRoaXMpO1xuICAgICAgICAvLyB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJzdXJuX2J0blwiKS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrUHJvdG9jb2wsIHRoaXMpXG4gICAgICAgIC8vIGxldCBwcml2YWN5QnRuID0gdGhpcy5sb2dpbkxheWVyLmdldENoaWxkQnlOYW1lKFwicHJpdmFjeV9idG5cIik7XG4gICAgICAgIC8vIHByaXZhY3lCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93UHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgY2xvc2VQcml2YWN5ID0gdGhpcy51c2VyUHJpdmFjeS5nZXRDaGlsZEJ5TmFtZShcImNsb3NlX3ByaXZhY3lcIik7XG4gICAgICAgIC8vIGNsb3NlUHJpdmFjeS5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJpdmFjeUxheWVyLCB0aGlzKTtcblxuICAgICAgICAvLyBsZXQgcHJvdG9jb2xCdG4gPSB0aGlzLmxvZ2luTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJwcm90b2NvbF9idG5cIik7XG4gICAgICAgIC8vIHByb3RvY29sQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2hvd1Byb3RvY29sTGF5ZXIsIHRoaXMpO1xuXG4gICAgICAgIC8vIGxldCBjbG9zZVByb3RvY29sID0gdGhpcy51c2VyUHJvdG9jb2wuZ2V0Q2hpbGRCeU5hbWUoXCJjbG9zZV9wcm90b2NvbFwiKTtcbiAgICAgICAgLy8gY2xvc2VQcm90b2NvbC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdG9jb2xMYXllciwgdGhpcyk7XG5cbiAgICAgICAgLy8gbGV0IGFjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcImFjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGxldCBub0FjY2VwdEJ0biA9IHRoaXMucHJvdGVjdC5nZXRDaGlsZEJ5TmFtZShcIm5vX2FjY2VwdF9idG5cIik7XG4gICAgICAgIC8vIGFjY2VwdEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsb3NlUHJvdGVjdExheWVyLCB0aGlzKTtcbiAgICAgICAgLy8gbm9BY2NlcHRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbG9zZVByb3RlY3RMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIC8vIGxvZ2luQnRuKCk6IHZvaWQge1xuICAgIC8vICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgLy8gICAgICAgICBpZiAodGhpcy5wcm90b2NvbCkge1xuICAgIC8vICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInd4TG9naW5cIiwgXCJ3eF9sb2dpblwiKTtcbiAgICAvLyAgICAgICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5sb2dpbkxheWVyLCBcIjxjb2xvcj0jMDAwMDAwPuivt+WFiOWQjOaEj+makOengeaUv+etluWSjOeUqOaIt+WNj+iurjwvY29sb3I+XCIpXG4gICAgLy8gICAgICAgICB9XG4gICAgLy8gICAgIH1cbiAgICAvLyB9XG4gICAgZ2V0QWRUaW1lcygpOiB2b2lkIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiVXNlclN0YXRcIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRTaG93TnVtID0gcmVzLmRhdGEuYWRfc2hvd19udW07XG4gICAgICAgICAgICBjYy5Ub29scy5hZC5hZFBvc0lkID0gcmVzLmRhdGEuYWRfcG9zX2lkO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWREaWYgPSByZXMuZGF0YS5pc19uZWVkX3dhdGNoO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuc3RlYWxfbGVmdF9udW0gPSByZXMuZGF0YS5zdGVhbF9sZWZ0X251bTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnRyZWFzdXJlID0gcmVzLmRhdGEudHJlYXN1cmU7XG4gICAgICAgICAgICAvL1xuICAgICAgICAgICAgLy8gbGV0IGxvZ2luOiBjYy5Ob2RlID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwibG9naW5cIik7XG4gICAgICAgICAgICAvLyBsZXQgbG9hZGluZzogY2MuTm9kZSA9IHRoaXMubm9kZS5nZXRDaGlsZEJ5TmFtZShcImxvYWRpbmdcIik7XG4gICAgICAgICAgICAvLyBsb2dpbi5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGxvYWRpbmcuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGxldCBwcm9ncmVzczogY2MuUHJvZ3Jlc3NCYXIgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgLy8gcHJvZ3Jlc3MucHJvZ3Jlc3MgPSAwO1xuICAgICAgICAgICAgLy8gbGV0IGljb246IGNjLk5vZGUgPSBsb2FkaW5nLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIC8vIGNjLnR3ZWVuKHByb2dyZXNzKS50bygyLCB7IHByb2dyZXNzOiAxIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgLy8gICAgIHRoaXMuc3RhcnRVcGRhdGUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ01haW4nKTtcbiAgICAgICAgICAgIC8vIH0pLnN0YXJ0KCk7XG4gICAgICAgICAgICAvLyBpY29uLnJ1bkFjdGlvbihjYy5tb3ZlQnkoMiwgNTAwLCAwKSk7XG4gICAgICAgICAgICBBc3NldHNCdW5kbGUuSW5zdGFuY2UucHJlbG9hZFJlc1BrZyhyZXNQa2csKG5vdzpudW1iZXIsIHRvdGFsOm51bWJlcik9PntcbiAgICAgICAgICAgICAgICBwcm9ncmVzcy5wcm9ncmVzcyA9IG5vdy90b3RhbDtcbiAgICAgICAgICAgICAgICBsZXQgc3AgPSBwcm9ncmVzcy5ub2RlLmdldENoaWxkQnlOYW1lKFwic3BcIik7XG4gICAgICAgICAgICAgICAgc3AueCA9IDYwOCpwcm9ncmVzcy5wcm9ncmVzcytzcC53aWR0aC8yLTIwO1xuICAgICAgICAgICAgfSwoKT0+e1xuICAgICAgICAgICAgICAgIEFzc2V0c0J1bmRsZS5JbnN0YW5jZS5sb2FkU2NlbmUoXCJHYW1lXCIsXCJNYWluXCIpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIGdldENvZGUoY29kZTogc3RyaW5nKTogdm9pZCB7XG4gICAgICAgIC8vIHtcImNoYW5uZWxcIjpcIndhbGtcIixcImltZWlcIjpcIlwiLFwiYW5kcm9pZF9pZFwiOlwiOGJhY2ZjMjRlY2U3OTk3OVwiLFwibWFjXCI6XCIwMjowMDowMDowMDowMDowMFwiLFwidWlkXCI6XCIzYjBmZTVlYy0wNTBkLTQ2YmYtYWFjNi0wZGM1YWE1ODg5YzRcIixcIm9haWRcIjpcImZiZjc1ZGZiLWZmZmQtN2YwMi02ZWY2LWY3ZmZiZmFkOGRhNlwifVxuICAgICAgICBsZXQgZGF0YSA9IHtcbiAgICAgICAgICAgIFwiY2hhbm5lbFwiOiBjYy5Ub29scy5EZXZpY2VJbmZvLmNoYW5uZWwgPyBjYy5Ub29scy5EZXZpY2VJbmZvLmNoYW5uZWwgOiBcIlwiLFxuICAgICAgICAgICAgXCJpbWVpXCI6IGNjLlRvb2xzLkRldmljZUluZm8uaW1laSA/IGNjLlRvb2xzLkRldmljZUluZm8uaW1laSA6IFwiXCIsXG4gICAgICAgICAgICBcIm1hY1wiOiBjYy5Ub29scy5EZXZpY2VJbmZvLm1hYyA/IGNjLlRvb2xzLkRldmljZUluZm8ubWFjIDogXCJcIixcbiAgICAgICAgICAgIFwiZGlzdGluY3RfaWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby51aWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLnVpZCA6IFwiXCIsXG4gICAgICAgICAgICBcIm9haWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby5vYWlkID8gY2MuVG9vbHMuRGV2aWNlSW5mby5vYWlkIDogXCJcIixcbiAgICAgICAgICAgIFwiYW5kcm9pZF9pZFwiOiBjYy5Ub29scy5EZXZpY2VJbmZvLmFuZHJvaWRfaWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLmFuZHJvaWRfaWQgOiBcIlwiLFxuICAgICAgICAgICAgXCJzbV9kZXZpY2VfaWRcIjogY2MuVG9vbHMuRGV2aWNlSW5mby5zbV9kZXZpY2VfaWQgPyBjYy5Ub29scy5EZXZpY2VJbmZvLnNtX2RldmljZV9pZCA6IFwiXCIsXG4gICAgICAgICAgICBcImNvZGVcIjogY29kZVxuICAgICAgICB9XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImNoYW5uZWxcIiwgY2MuVG9vbHMuRGV2aWNlSW5mby5jaGFubmVsID8gY2MuVG9vbHMuRGV2aWNlSW5mby5jaGFubmVsIDogXCJcIik7XG4gICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInNtX2RldmljZV9pZFwiLCBjYy5Ub29scy5EZXZpY2VJbmZvLnNtX2RldmljZV9pZCA/IGNjLlRvb2xzLkRldmljZUluZm8uc21fZGV2aWNlX2lkIDogXCJcIik7XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwicmVnaXN0ZXJcIiwgXCJQT1NUXCIsIGRhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgcmVzLmRhdGEudG9rZW4pO1xuICAgICAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwicHJlTG9hZFJld2FyZFZpZGVvQWRcIiwgXCJcIiArIHsgXCJ0b2tlblwiOiByZXMuZGF0YS50b2tlbiB9KVxuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudCgpO1xuICAgICAgICAgICAgdGhpcy5nZXRBZFRpbWVzKCk7XG4gICAgICAgIH0pXG4gICAgfVxufVxuIl19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Game/AssetsBundle.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c0d4fRodptH+4vK9pQTa/85', 'AssetsBundle');
// Script/Game/AssetsBundle.ts

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
Object.defineProperty(exports, "__esModule", { value: true });
//写个功能AssetBundle--->负责资源的管理
//如何实现基于AssetsBundle的资源管理模块
/**
 * 资源管理的接口
 * 预加载：“场景”，我们要的那些资源先预加载进来
 * let resPkg = {
 *      ab包名(key):{
 *          assetType:cc.Prefab,
 *          urls:[第一个资源路径,第二个资源路径]
 *      }
 * }
 * 1:preloadResPkg(resPkg,progressFunc,endFunc)
 * 获取资源的接口
 * 2:getAsset(abName,url)--->返回资源
 * 3:realeseResPkg(resPkg)--->释放资源
 * 4:单独的加载资源；
 */
var AssetsBundle = /** @class */ (function (_super) {
    __extends(AssetsBundle, _super);
    function AssetsBundle() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.total = 0;
        _this.now = 0;
        _this.totalAb = 0;
        _this.nowAb = 0;
        _this.progressFunc = null;
        _this.endFunc = null;
        _this.abBunds = {};
        return _this;
    }
    AssetsBundle.prototype.onLoad = function () {
        //单例
        if (AssetsBundle.Instance === null) {
            AssetsBundle.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
    };
    /**
     * 加载我们的资源包
     * @param resPkg = {ab包名:{assetType:cc.Prefab,urls:[路径1]}}
    */
    AssetsBundle.prototype.preloadResPkg = function (resPkg, progressFunc, endFunc) {
        var _this = this;
        this.total = 0;
        this.now = 0;
        this.totalAb = 0;
        this.nowAb = 0;
        this.progressFunc = progressFunc;
        this.endFunc = endFunc;
        for (var key in resPkg) {
            this.totalAb++;
            var json = resPkg[key];
            for (var val in json) {
                this.total += json[val].urls.length;
            }
        }
        for (var key in resPkg) {
            this.loadAssetsBundle(key, function () {
                _this.nowAb++;
                if (_this.nowAb === _this.totalAb) {
                    _this.loadAssetsInAssetsBundle(resPkg);
                }
            });
        }
    };
    AssetsBundle.prototype.loadAssetsBundle = function (abName, endFunc) {
        var _this = this;
        cc.assetManager.loadBundle(abName, function (err, bundle) {
            if (err !== null) {
                console.log("[AssetsBundle]:load AssetsBundle Error:" + abName);
                _this.abBunds[abName] = null;
            }
            else {
                console.log("[AssetsBundle]:load AssetsBundle Success:" + abName);
                _this.abBunds[abName] = bundle;
            }
            if (endFunc) {
                endFunc();
            }
        });
    };
    AssetsBundle.prototype.loadAssetsInAssetsBundle = function (resPkg) {
        for (var key in resPkg) {
            var json = resPkg[key];
            for (var val in json) {
                var urlSet = json[val].urls;
                var typeClass = json[val].assetType;
                for (var i = 0; i < urlSet.length; i++) {
                    this.loadRes(this.abBunds[key], urlSet[i], typeClass);
                }
            }
        }
    };
    AssetsBundle.prototype.loadRes = function (abBundle, url, typeClass) {
        var _this = this;
        abBundle.load(url, typeClass, function (error, asset) {
            _this.now++;
            if (error) {
                console.log("load Res" + url + "error:" + error);
            }
            else {
                console.log("load Res" + url + "success!");
            }
            if (_this.progressFunc) {
                _this.progressFunc(_this.now, _this.total);
            }
            console.log(_this.now, _this.total);
            if (_this.now >= _this.total) {
                if (_this.endFunc !== null) {
                    _this.endFunc();
                }
            }
        });
    };
    /**
   * 获取资源
   * @param abName--->包名
   * @param url---->地址
  */
    AssetsBundle.prototype.getAsset = function (abName, url) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        return bundle.get(url);
    };
    AssetsBundle.prototype.loadScene = function (abName, url) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.loadScene(url, function (err, scene) {
            cc.director.runScene(scene);
        });
    };
    //释放bundle
    AssetsBundle.prototype.realeseResPkg = function (abName) {
        var bundle = cc.assetManager.getBundle(abName);
        if (bundle === null) {
            console.log("[error]:" + abName + "AssetsBundle not loaded:");
            return null;
        }
        bundle.releaseAll();
        cc.assetManager.removeBundle(bundle);
    };
    AssetsBundle.Instance = null;
    return AssetsBundle;
}(cc.Component));
exports.default = AssetsBundle;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvR2FtZS9Bc3NldHNCdW5kbGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNEJBQTRCO0FBQzVCLDJCQUEyQjtBQUMzQjs7Ozs7Ozs7Ozs7Ozs7R0FjRztBQUNIO0lBQTBDLGdDQUFZO0lBQXREO1FBQUEscUVBNkhDO1FBM0hXLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsU0FBRyxHQUFXLENBQUMsQ0FBQztRQUNoQixhQUFPLEdBQVcsQ0FBQyxDQUFDO1FBQ3BCLFdBQUssR0FBVyxDQUFDLENBQUM7UUFDbEIsa0JBQVksR0FBYSxJQUFJLENBQUM7UUFDOUIsYUFBTyxHQUFhLElBQUksQ0FBQztRQUN6QixhQUFPLEdBQUcsRUFBRSxDQUFDOztJQXFIekIsQ0FBQztJQXBIRyw2QkFBTSxHQUFOO1FBQ0ksSUFBSTtRQUNKLElBQUksWUFBWSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDaEMsWUFBWSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDaEM7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtJQUNMLENBQUM7SUFDRDs7O01BR0U7SUFDRixvQ0FBYSxHQUFiLFVBQWMsTUFBTSxFQUFFLFlBQVksRUFBRSxPQUFPO1FBQTNDLGlCQXNCQztRQXJCRyxJQUFJLENBQUMsS0FBSyxHQUFHLENBQUMsQ0FBQztRQUNmLElBQUksQ0FBQyxHQUFHLEdBQUcsQ0FBQyxDQUFDO1FBQ2IsSUFBSSxDQUFDLE9BQU8sR0FBRyxDQUFDLENBQUM7UUFDakIsSUFBSSxDQUFDLEtBQUssR0FBRyxDQUFDLENBQUM7UUFDZixJQUFJLENBQUMsWUFBWSxHQUFHLFlBQVksQ0FBQztRQUNqQyxJQUFJLENBQUMsT0FBTyxHQUFHLE9BQU8sQ0FBQztRQUN2QixLQUFLLElBQUksR0FBRyxJQUFJLE1BQU0sRUFBRTtZQUNwQixJQUFJLENBQUMs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QU07UUFDaEIsSUFBSSxNQUFNLEdBQUcsRUFBRSxDQUFDLFlBQVksQ0FBQyxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDL0MsSUFBSSxNQUFNLEtBQUssSUFBSSxFQUFFO1lBQ2pCLE9BQU8sQ0FBQyxHQUFHLENBQUMsVUFBVSxHQUFHLE1BQU0sR0FBRywwQkFBMEIsQ0FBQyxDQUFDO1lBQzlELE9BQU8sSUFBSSxDQUFDO1NBQ2Y7UUFDRCxNQUFNLENBQUMsVUFBVSxFQUFFLENBQUM7UUFDcEIsRUFBRSxDQUFDLFlBQVksQ0FBQyxZQUFZLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDekMsQ0FBQztJQTNIYSxxQkFBUSxHQUFpQixJQUFJLENBQUM7SUE0SGhELG1CQUFDO0NBN0hELEFBNkhDLENBN0h5QyxFQUFFLENBQUMsU0FBUyxHQTZIckQ7a0JBN0hvQixZQUFZIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/lhpnkuKrlip/og71Bc3NldEJ1bmRsZS0tLT7otJ/otKPotYTmupDnmoTnrqHnkIZcbi8v5aaC5L2V5a6e546w5Z+65LqOQXNzZXRzQnVuZGxl55qE6LWE5rqQ566h55CG5qih5Z2XXG4vKipcbiAqIOi1hOa6kOeuoeeQhueahOaOpeWPo1xuICog6aKE5Yqg6L2977ya4oCc5Zy65pmv4oCd77yM5oiR5Lus6KaB55qE6YKj5Lqb6LWE5rqQ5YWI6aKE5Yqg6L296L+b5p2lXG4gKiBsZXQgcmVzUGtnID0ge1xuICogICAgICBhYuWMheWQjShrZXkpOntcbiAqICAgICAgICAgIGFzc2V0VHlwZTpjYy5QcmVmYWIsXG4gKiAgICAgICAgICB1cmxzOlvnrKzkuIDkuKrotYTmupDot6/lvoQs56ys5LqM5Liq6LWE5rqQ6Lev5b6EXVxuICogICAgICB9XG4gKiB9XG4gKiAxOnByZWxvYWRSZXNQa2cocmVzUGtnLHByb2dyZXNzRnVuYyxlbmRGdW5jKVxuICog6I635Y+W6LWE5rqQ55qE5o6l5Y+jXG4gKiAyOmdldEFzc2V0KGFiTmFtZSx1cmwpLS0tPui/lOWbnui1hOa6kFxuICogMzpyZWFsZXNlUmVzUGtnKHJlc1BrZyktLS0+6YeK5pS+6LWE5rqQXG4gKiA0OuWNleeLrOeahOWKoOi9vei1hOa6kO+8m1xuICovXG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBc3NldHNCdW5kbGUgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEFzc2V0c0J1bmRsZSA9IG51bGw7XG4gICAgcHJpdmF0ZSB0b3RhbDogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIG5vdzogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHRvdGFsQWI6IG51bWJlciA9IDA7XG4gICAgcHJpdmF0ZSBub3dBYjogbnVtYmVyID0gMDtcbiAgICBwcml2YXRlIHByb2dyZXNzRnVuYzogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgZW5kRnVuYzogRnVuY3Rpb24gPSBudWxsO1xuICAgIHByaXZhdGUgYWJCdW5kcyA9IHt9O1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy/ljZXkvotcbiAgICAgICAgaWYgKEFzc2V0c0J1bmRsZS5JbnN0YW5jZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgQXNzZXRzQnVuZGxlLkluc3RhbmNlID0gdGhpcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZGVzdHJveSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWKoOi9veaIkeS7rOeahOi1hOa6kOWMhVxuICAgICAqIEBwYXJhbSByZXNQa2cgPSB7YWLljIXlkI06e2Fzc2V0VHlwZTpjYy5QcmVmYWIsdXJsczpb6Lev5b6EMV19fVxuICAgICovXG4gICAgcHJlbG9hZFJlc1BrZyhyZXNQa2csIHByb2dyZXNzRnVuYywgZW5kRnVuYyk6IHZvaWQge1xuICAgICAgICB0aGlzLnRvdGFsID0gMDtcbiAgICAgICAgdGhpcy5ub3cgPSAwO1xuICAgICAgICB0aGlzLnRvdGFsQWIgPSAwO1xuICAgICAgICB0aGlzLm5vd0FiID0gMDtcbiAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmMgPSBwcm9ncmVzc0Z1bmM7XG4gICAgICAgIHRoaXMuZW5kRnVuYyA9IGVuZEZ1bmM7XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMudG90YWxBYisrO1xuICAgICAgICAgICAgbGV0IGpzb24gPSByZXNQa2dba2V5XTtcbiAgICAgICAgICAgIGZvcihsZXQgdmFsIGluIGpzb24pe1xuICAgICAgICAgICAgICAgIHRoaXMudG90YWwgKz0ganNvblt2YWxdLnVybHMubGVuZ3RoO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGtleSBpbiByZXNQa2cpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZEFzc2V0c0J1bmRsZShrZXksICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm5vd0FiKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMubm93QWIgPT09IHRoaXMudG90YWxBYikge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmxvYWRBc3NldHNJbkFzc2V0c0J1bmRsZShyZXNQa2cpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pXG4gICAgICAgIH1cbiAgICB9XG4gICAgcHJpdmF0ZSBsb2FkQXNzZXRzQnVuZGxlKGFiTmFtZTogc3RyaW5nLCBlbmRGdW5jOiBGdW5jdGlvbik6IHZvaWQge1xuICAgICAgICBjYy5hc3NldE1hbmFnZXIubG9hZEJ1bmRsZShhYk5hbWUsIChlcnIsIGJ1bmRsZSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVyciAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW0Fzc2V0c0J1bmRsZV06bG9hZCBBc3NldHNCdW5kbGUgRXJyb3I6XCIgKyBhYk5hbWUpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWJCdW5kc1thYk5hbWVdID0gbnVsbDtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJbQXNzZXRzQnVuZGxlXTpsb2FkIEFzc2V0c0J1bmRsZSBTdWNjZXNzOlwiICsgYWJOYW1lKTtcbiAgICAgICAgICAgICAgICB0aGlzLmFiQnVuZHNbYWJOYW1lXSA9IGJ1bmRsZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbmRGdW5jKSB7XG4gICAgICAgICAgICAgICAgZW5kRnVuYygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuXG4gICAgfVxuICAgIHByaXZhdGUgbG9hZEFzc2V0c0luQXNzZXRzQnVuZGxlKHJlc1BrZyk6IHZvaWQge1xuICAgICAgICBmb3IgKGxldCBrZXkgaW4gcmVzUGtnKSB7XG4gICAgICAgICAgICBsZXQganNvbiA9IHJlc1BrZ1trZXldO1xuICAgICAgICAgICAgZm9yKGxldCB2YWwgaW4ganNvbil7XG4gICAgICAgICAgICAgICAgbGV0IHVybFNldCA9IGpzb25bdmFsXS51cmxzO1xuICAgICAgICAgICAgICAgIGxldCB0eXBlQ2xhc3MgPSBqc29uW3ZhbF0uYXNzZXRUeXBlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdXJsU2V0Lmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMubG9hZFJlcyh0aGlzLmFiQnVuZHNba2V5XSwgdXJsU2V0W2ldLCB0eXBlQ2xhc3MpXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIHByaXZhdGUgbG9hZFJlcyhhYkJ1bmRsZSwgdXJsLCB0eXBlQ2xhc3MpOiB2b2lkIHtcbiAgICAgICAgYWJCdW5kbGUubG9hZCh1cmwsIHR5cGVDbGFzcywgKGVycm9yLCBhc3NldCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5ub3crKztcbiAgICAgICAgICAgIGlmIChlcnJvcikge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwibG9hZCBSZXNcIiArIHVybCArIFwiZXJyb3I6XCIgKyBlcnJvcik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImxvYWQgUmVzXCIgKyB1cmwgKyBcInN1Y2Nlc3MhXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMucHJvZ3Jlc3NGdW5jKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wcm9ncmVzc0Z1bmModGhpcy5ub3csIHRoaXMudG90YWwpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc29sZS5sb2codGhpcy5ub3csIHRoaXMudG90YWwpO1xuICAgICAgICAgICAgaWYgKHRoaXMubm93ID49IHRoaXMudG90YWwpIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5lbmRGdW5jICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW5kRnVuYygpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfSlcbiAgICB9XG4gICAgLyoqXG4gICAqIOiOt+WPlui1hOa6kFxuICAgKiBAcGFyYW0gYWJOYW1lLS0tPuWMheWQjVxuICAgKiBAcGFyYW0gdXJsLS0tLT7lnLDlnYBcbiAgKi9cbiAgICBnZXRBc3NldChhYk5hbWUsIHVybCk6IGFueSB7XG4gICAgICAgIGxldCBidW5kbGUgPSBjYy5hc3NldE1hbmFnZXIuZ2V0QnVuZGxlKGFiTmFtZSk7XG4gICAgICAgIGlmIChidW5kbGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiW2Vycm9yXTpcIiArIGFiTmFtZSArIFwiQXNzZXRzQnVuZGxlIG5vdCBsb2FkZWQ6XCIpO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGJ1bmRsZS5nZXQodXJsKTtcbiAgICB9XG4gICAgbG9hZFNjZW5lKGFiTmFtZSx1cmwpOmFueXtcbiAgICAgICAgbGV0IGJ1bmRsZSA9IGNjLmFzc2V0TWFuYWdlci5nZXRCdW5kbGUoYWJOYW1lKTtcbiAgICAgICAgaWYgKGJ1bmRsZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJbZXJyb3JdOlwiICsgYWJOYW1lICsgXCJBc3NldHNCdW5kbGUgbm90IGxvYWRlZDpcIik7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBidW5kbGUubG9hZFNjZW5lKHVybCwgZnVuY3Rpb24gKGVyciwgc2NlbmUpIHtcbiAgICAgICAgICAgIGNjLmRpcmVjdG9yLnJ1blNjZW5lKHNjZW5lKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8v6YeK5pS+YnVuZGxlXG4gICAgcmVhbGVzZVJlc1BrZyhhYk5hbWUpOiBhbnkge1xuICAgICAgICBsZXQgYnVuZGxlID0gY2MuYXNzZXRNYW5hZ2VyLmdldEJ1bmRsZShhYk5hbWUpO1xuICAgICAgICBpZiAoYnVuZGxlID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIltlcnJvcl06XCIgKyBhYk5hbWUgKyBcIkFzc2V0c0J1bmRsZSBub3QgbG9hZGVkOlwiKTtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGJ1bmRsZS5yZWxlYXNlQWxsKCk7XG4gICAgICAgIGNjLmFzc2V0TWFuYWdlci5yZW1vdmVCdW5kbGUoYnVuZGxlKTtcbiAgICB9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/Observer.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'e315ewlAGRCuoyOEdMAf2Ja', 'Observer');
// Script/Tools/Observer.ts

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
/**
 * 写一个观察模式用于分发所有事件
*/
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var Observer = /** @class */ (function (_super) {
    __extends(Observer, _super);
    function Observer() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    // onLoad () {}
    Observer.prototype.start = function () {
    };
    Observer = __decorate([
        ccclass
    ], Observer);
    return Observer;
}(cc.Component));
exports.default = Observer;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMvT2JzZXJ2ZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBQ0E7O0VBRUU7QUFDSSxJQUFBLEtBQXNCLEVBQUUsQ0FBQyxVQUFVLEVBQWxDLE9BQU8sYUFBQSxFQUFFLFFBQVEsY0FBaUIsQ0FBQztBQUcxQztJQUFzQyw0QkFBWTtJQUFsRDs7SUFTQSxDQUFDO0lBUEcsZUFBZTtJQUVmLHdCQUFLLEdBQUw7SUFFQSxDQUFDO0lBTmdCLFFBQVE7UUFENUIsT0FBTztPQUNhLFFBQVEsQ0FTNUI7SUFBRCxlQUFDO0NBVEQsQUFTQyxDQVRxQyxFQUFFLENBQUMsU0FBUyxHQVNqRDtrQkFUb0IsUUFBUSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbIlxuLyoqXG4gKiDlhpnkuIDkuKrop4Llr5/mqKHlvI/nlKjkuo7liIblj5HmiYDmnInkuovku7ZcbiovXG5jb25zdCB7Y2NjbGFzcywgcHJvcGVydHl9ID0gY2MuX2RlY29yYXRvcjtcblxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE9ic2VydmVyIGV4dGVuZHMgY2MuQ29tcG9uZW50IHtcbiAgICBcbiAgICAvLyBvbkxvYWQgKCkge31cblxuICAgIHN0YXJ0ICgpIHtcblxuICAgIH1cblxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG59XG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/Tools.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '5d7eaacDHtN8JTIoUmPIlQ0', 'Tools');
// Script/Tools/Tools.js

"use strict";

var Pubkey = "-----BEGIN RSA Public Key-----\nMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAvAd71hqQFal9eqThSMwr\niMwpTvyTYkX9Y0vuFqEoqU72qQ98CUhxwxLczuFZBmvlL2diIVf1dROR3MoHm/wI\nAP3pqFuV5XMrclrlOkIr9h1WNIje/Hfe1GMmixj8JRTf6MEDQ5vA8m+PyHdRAxCc\nLqYwji3LB3VU+XJkOcdlRHK1oi6BBY7/qJj2HuLgFfvhWW9Qc+SRsu6aKEA+x11u\nZLCtABgAMDcD1zYdEu1Kaw22iQJRF9ZchgPEWKo0okAR5bAYRx5D+MhirQ20XJGM\nvgOiqF3LYpuA75UTjN5qGs9DVzYlnRamGfx3otJwzoKc0N8BLewlncRheJH4kGej\nhwIDAQAB\n-----END RSA Public Key-----";
cc.Tools = {
  /**
   * @param {*} event 数数打点的事件名称
   * @param {*} pro 数数打点的关联属性
  */
  dot: function dot(event, pro) {
    if (cc.sys.isNative) {
      if (pro) {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;Ljava/lang/String;)V", event, JSON.stringify(pro));
      } else {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "dot", "(Ljava/lang/String;)V", event);
      }
    }
  },
  //像服务器发送请求
  getDevice: function getDevice(pram, data) {
    cc.Tools.DeviceInfo = JSON.parse(data);
  },
  setAdTimes: function setAdTimes() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getAdTimes", "()V");
    }
  },
  getPermission: function getPermission() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPermission", "()V");
    }
  },
  getAdTimes: function getAdTimes(data) {
    cc.Tools.adTimes = Number(data);
  },
  //数美接口
  sm: function sm(type) {
    console.log("cocos----sm---", "type=" + type);

    var _type;

    var json = {
      "adType": "REWARDED_VIDEO_AD",
      "codeId": cc.Tools.ad.adPosId ? cc.Tools.ad.adPosId : "0"
    };

    if (type === "adGet") {
      cc.Tools.ad.adId = cc.Tools.userInfo.user_id + "-" + cc.Tools.uuid(8, 10);
    }

    json.adId = cc.Tools.ad.adId;

    if (type.indexOf("adFinish") > -1) {
      _type = "adFinish";

      var __type = type.split(",");

      if (__type[1]) {
        if (__type[1] === "close") {
          json.adFinishType = "CLICK_CLOSE_BUTTON";
        } else if (__type[1] === "complete") {
          json.adFinishType = "COMPLETE_AD";
        } else if (__type[1] === "skip") {
          json.adFinishType = "SKIP_AD";
        } else if (__type[1] === "error") {
          json.adFinishType = "SHOW_AD_ERROR";
        }
      }
    } else {
      _type = type;
    }

    var sendData = {
      "device_id": cc.sys.localStorage.getItem("sm_device_id"),
      "event": _type,
      "millisecond": new Date().getTime(),
      "add_json": JSON.stringify(json)
    };
    cc.Tools.sendRequest("ShuMeiEvent", "POST", sendData).then(function (res) {});
  },
  //uuid(8, 10)
  uuid: function uuid(len, radix) {
    var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
    var uuid = [],
        i;
    radix = radix || chars.length;

    if (len) {
      for (i = 0; i < len; i++) {
        uuid[i] = chars[0 | Math.random() * radix];
      }
    } else {
      var r;
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      for (i = 0; i < 36; i++) {
        if (!uuid[i]) {
          r = 0 | Math.random() * 16;
          uuid[i] = chars[i == 19 ? r & 0x3 | 0x8 : r];
        }
      }
    }

    return uuid.join('');
  },

  /**
   * 获取当前的存钱罐的钱数
  */
  getFreeze: function getFreeze() {
    if (cc.sys.isNative && cc.sys.localStorage.getItem("showBtn") == 100) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setFreeze", "(Ljava/lang/String;Ljava/lang/String;)V", cc.Tools.userInfo.calendar_msg, cc.Tools.userInfo.calendar_timestamp);
    }
  },
  setDistinctId: function setDistinctId() {
    // console.log("cocos-----distinct_id=".cc.Tools.userInfo.distinct_id);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setDistinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
    }
  },
  setUserId: function setUserId() {
    // console.log("cocos-----user_id=".cc.Tools.userInfo.user_id);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "setUsertId", "(Ljava/lang/String;)V", cc.Tools.userInfo.user_id + "");
    }
  },
  setLevel: function setLevel() {
    // console.log("cocos-----level=",cc.Tools.userInfo.level);
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getLevel", "(Ljava/lang/String;)V", cc.Tools.userInfo.level + "");
    }
  },
  //数数打点
  shuShuDot: function shuShuDot() {
    // console.log("cocos-----shuShu");
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "startShuShu", "()V");
    }
  },
  adCallBack: function adCallBack(pram) {
    var _this = this;

    var _pram = pram.split(",");

    var ecpm = _pram[0];
    var type = _pram[1];
    var sendData = {};
    this.getUserEcpm(ecpm, type).then(function (ad) {
      // 点我领红包
      sendData = {
        "ad_id": ad,
        "ts": new Date().getTime(),
        //时间戳
        "type": parseInt(type),
        "action": "AdAward"
      };

      switch (type) {
        case "1": //点我领红包

        case "2": //悬浮红包

        case "3": //新春红包

        case "4": //成功过关

        case "7": //点我领红包

        case "8": //超级红包

        case "9": //消除红包

        case "12": //自动红包

        case "10":
          //飞行红包
          cc.Tools.sendRequest("PipeAction", "POST", sendData).then(function (res) {
            _this.emitEvent("getTicket", {
              ticket: res.amount,
              add: res.add_amount,
              type: 1,
              videoType: parseInt(type)
            });
          });
          break;

        case "11": //提现视频

        case "15": //存钱罐解冻

        case "17":
          //签到
          cc.Tools.sendRequest("PipeAction", "POST", sendData).then(function (res) {
            _this.emitEvent("getTicket", {
              ticket: res.amount,
              add: res.add_amount,
              type: 2,
              videoType: parseInt(type)
            });
          });
          break;

        case "5":
          //解冻红包
          _this.emitEvent("freeze", ad);

          break;

        case "6":
          // 存钱罐
          _this.emitEvent("saveCash", ad);

          break;

        case "13":
          //偷能量
          _this.emitEvent("steal", ad);

          break;

        case "14":
          //复仇
          _this.emitEvent("revenge", ad);

          break;

        case "16":
          //宝箱
          _this.emitEvent("openBox", ad);

          break;

        default:
          break;
      }
    });
  },
  emitEvent: function emitEvent(event, arg) {
    cc.Tools.Event.emit(event, arg);
  },
  // 显示激励视频
  showJiliAd: function showJiliAd(type) {
    if (cc.sys.isNative) {
      // jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showAd", "(Ljava/lang/String;)V", "" + type);
      if (cc.Tools.ad.adShowNum > 0) {
        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getPreLoadJili", "(Ljava/lang/String;)V", "" + type);
      } else {
        cc.Tools.emitEvent("showTips", "今天观看视频次数已经达到上限");
      }
    } else {
      cc.Tools.adCallBack("100," + type);
    }
  },
  //请求预加载新的广告ID isDif 是否分层
  setNewAdId: function setNewAdId(id) {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preLoadRewardad", "(Ljava/lang/String;)V", "" + id);
    }
  },
  // 显示banner
  showBanner: function showBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBanner", "()V");
    }
  },
  // 隐藏banner
  hideBanner: function hideBanner() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBanner", "()V");
    }
  },
  // 显示插屏广告
  showTableScreen: function showTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showTableScreen", "()V");
    }
  },
  // 隐藏插屏广告
  hideTableScreen: function hideTableScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideTableScreen", "()V");
    }
  },
  //显示信息流广告
  showFeedScreen: function showFeedScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showFeedScreen", "()V");
    }
  },
  //隐藏信息流广告
  hideFeedScreen: function hideFeedScreen() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideFeedScreen", "()V");
    }
  },
  wxShare: function wxShare(type) {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_share", "(I)V", type);
    }
  },
  // 微信登陆
  wxLogin: function wxLogin() {
    if (cc.sys.isNative) {
      jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", "weixin_login");
    }
  },

  /**
  * 接收native微信授权的code
  * @param errCode 
  */
  wxLoginResult: function wxLoginResult(errCode) {
    cc.Tools.emitEvent("getCode", errCode);
  },

  /**
   * 看广告之后刷新一下ecpm
   */
  getUserEcpm: function getUserEcpm(ecpm, type) {
    // 获取ecpm之后像服务器发的是ecpm/100
    var serverEcpm = parseInt(ecpm / 100);
    return new Promise(function (resolve, reject) {
      var sendData = {
        "ecpm": serverEcpm,
        "ts": new Date().getTime(),
        //时间戳
        "type": parseInt(type)
      };
      var data = cc.Tools.createSignData(sendData);
      data.action = "Ecpm";
      cc.Tools.sendRequest("PipeAction", "POST", data).then(function (res) {
        cc.Tools.reminderMsg = res.msg;
        cc.Tools.ad.adShowNum = res.ad_show_num;
        console.log("cocos----ecpm类型----" + type);

        if (type < 20) {
          cc.Tools.ad.adTimes++;

          if (cc.Tools.ad.adTimes <= cc.Tools.ad.adDiv) {
            if (cc.Tools.ad.adSmall) {
              cc.Tools.ad.adPosId = cc.Tools.ad.adSmall;
            }
          } else {
            if (cc.Tools.ad.adBig) {
              cc.Tools.ad.adPosId = cc.Tools.ad.adBig;
            }
          }

          cc.Tools.setNewAdId(cc.Tools.ad.adPosId);
        }

        cc.sys.localStorage.setItem("adTimes", cc.Tools.ad.adTimes);
        resolve(res.ad_id);
      })["catch"](function (res) {
        console.log("cocos----Ecpm----bug----", JSON.stringify(res));

        if (cc.Tools.ad.adPosId) {
          cc.Tools.setNewAdId(cc.Tools.ad.adPosId);
        }
      });
    });
  },

  /**
   * 
   * @param {*} data 需要签名数据
   * @returns 
   */
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
    strToJiaMi = "token=" + cc.Tools.userInfo.sc1 + strToJiaMi;
    console.log("cocos----加密串---", strToJiaMi);

    var hex_md5 = require("MD5");

    strToJiaMi = hex_md5(strToJiaMi);
    data.sign = strToJiaMi;
    return data;
  },
  // 适配屏幕
  screenAdapter: function screenAdapter() {
    var canvas = cc.find("Canvas").getComponent(cc.Canvas);
    var winSize = cc.view.getVisibleSize();

    if (winSize.width / winSize.height <= 1080 / 1920) {
      canvas.fitHeight = false;
      canvas.fitWidth = true;
    } else {
      canvas.fitHeight = true;
      canvas.fitWidth = false;
    }
  },

  /**
     * 
     * @param {*} n node节点
     * @param {*} str  显示的tips内容
     */
  showTips: function showTips(n, str) {
    return new Promise(function (resolve, reject) {
      var tips = n.getChildByName("Tips");

      if (!tips) {
        reject();
      }

      var icon = tips.getChildByName("icon");
      var lbl = tips.getChildByName("lbl");

      if (str) {
        icon.active = false;
        lbl.active = true;
        var text = lbl.getChildByName("layout").getChildByName("text");
        text.getComponent(cc.RichText).string = str;

        if (lbl.getChildByName("icon")) {
          var _icon = lbl.getChildByName("icon");

          cc.tween(_icon).delay(0.05).call(function () {
            _icon.x = lbl.getChildByName("layout").width / 2 - 15;
          }).start();
        }
      } else {
        icon.active = true;
        lbl.active = false;
      }

      tips.stopAllActions();
      tips.zIndex = 9999;
      tips.y = 145;
      tips.opacity = 255;
      tips.active = true;
      cc.tween(tips).to(1, {
        y: 300
      }).delay(0.5).to(0.1, {
        opacity: 0
      }).call(function () {
        tips.active = false;
        resolve();
      }).start();
    });
  },

  /**
   * 接口加密
  */
  encryptData: function encryptData(data) {
    var encrypt = new JSEncrypt();
    encrypt.setPublicKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----');
    var str = JSON.stringify(data);
    var encrypted = encrypt.encrypt(str);
    var backData = [];

    for (var i = 0; i < encrypted.length; i += 1000) {
      backData.push(encrypted.slice(i, i + 1000));
    }

    var obj = {};
    obj.data = backData;
    return obj;
  },
  decryptData: function decryptData(encryptedData) {
    var parseData = ""; // console.log('cocos----解密后数据:', encryptedData.length);

    for (var i = 0; i < encryptedData.length; i++) {
      var decrypt = new JSEncrypt();
      decrypt.setPrivateKey('-----BEGIN RSA Public Key-----' + Pubkey + '-----END RSA Public Key-----');
      var uncrypted = decrypt.decrypt(encryptedData[i]); // console.log('cocos----解密后----数据:', uncrypted);

      parseData += uncrypted;
    }

    console.log('cocos----解密后数据:%o', parseData);
    return JSON.parse(parseData);
  },

  /**
   * 
   * @param {*} url 请求接口的url----pit.v1.PitSvc/UserInfo
   * @param {*} type 请求接口的类型 只能是GET--POST
   * @param {*} data 请求接口所需要的数据
   * @returns 
   */
  sendRequest: function sendRequest(url, type, data) {
    return new Promise(function (resolve, reject) {
      var xhr = new XMLHttpRequest();
      var requestURL = "https://api.jiankangzhuan.com/api.xxrich/" + url; //test todo
      // let requestURL = "http://192.168.110.195:8888/api.xxrich/" + url;

      xhr.open(type, requestURL, true);

      if (cc.sys.isNative) {
        xhr.setRequestHeader("Accept-Encodeing", "gzip,deflate");
      }

      var wxToken = cc.sys.localStorage.getItem("token");

      if (wxToken) {
        xhr.setRequestHeader("Authorization", wxToken);
      }

      xhr.setRequestHeader("Content-Type", "application/json");

      xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status == 200) {
          // 统一处理
          var _response = JSON.parse(xhr.response); // console.log("cocos-----" + url + "------", xhr.response);
          // 判断接口是否是加密接口


          if (data.action) {
            if (_response.code === 0) {
              //解密
              // console.log("cocos-----"+url+"-----"+data.action+"----"+xhr.response)
              resolve(cc.Tools.decryptData(_response.data.data));
            } else {
              reject(_response.message);
            }
          } else {
            if (_response.code === 0) {
              resolve(_response);
            } else {
              reject(_response.message);
            }
          }
        }
      };

      xhr.onerror = function () {
        reject(new Error(xhr.statusText));
      };

      if (data.action) {
        xhr.send(JSON.stringify(cc.Tools.encryptData(data)));
      } else {
        xhr.send(JSON.stringify(data));
      }
    });
  },

  /**
   * 按钮呼吸动画
   * @param btn:cc.Node
   */
  breatheAnim: function breatheAnim(btn) {
    btn.stopAllActions();
    var action = cc.sequence(cc.scaleTo(0.5, 0.9), cc.scaleTo(0.5, 1));
    cc.tween(btn).repeatForever(action).start();
  },

  /**
   * 旋转动画
   * @param btn:cc.Node
   */
  rotateAnim: function rotateAnim(btn) {
    btn.stopAllActions();
    btn.angle = 0;
    var action = cc.sequence(cc.rotateBy(2, 360), cc.callFunc(function () {
      btn.angle = 0;
    }));
    cc.tween(btn).repeatForever(action).start();
  },

  /**
   * 停止节点动画
   */
  stopAnim: function stopAnim(btn) {
    btn.stopAllActions();
  },

  /**
   * 
   * @param {动画节点} btn 
   */
  popAnim: function popAnim(btn, y) {
    btn.stopAllActions();
    var pos = btn.getPosition(cc.v2()); //随机一个两位数小数

    var rdm = cc.Tools.createRandom(0, y);
    var action1 = cc.moveTo(1, pos.x, pos.y + rdm + 5);
    var action2 = cc.moveTo(1, pos.x, pos.y);
    var action3 = cc.moveTo(1, pos.x, pos.y - rdm - 5);
    var action4 = cc.moveTo(1, pos.x, pos.y);
    var ac = [];
    ac.push(action1, action2, action3, action4);
    var action = cc.sequence(ac);
    cc.tween(btn).delay(Math.random()).repeatForever(action).start();
  },

  /**
   * 按钮置灰
   */
  setButtonGary: function setButtonGary(btn) {
    var btnCom = btn.getComponent(cc.Button);

    if (btnCom) {
      btnCom.enableAutoGrayEffect = true;
      btnCom.interactable = false;
      btn.targetOff("touchend");
    }
  },

  /**
   * 在一个范围内随机
   */
  createRandom: function createRandom(n, m) {
    ++m;
    var a = m - n;
    var num = Math.random() * a + n;
    return parseInt(num);
  },

  /**
   * 将秒数转成时间
  */
  changeTime: function changeTime(count) {
    var hour = Math.floor(count / 3600);
    var minute = Math.floor((count - 3600 * hour) / 60);
    var second = count - hour * 3600 - 60 * minute;
    console.log(hour + "\u65F6+" + minute + "\u5206+" + second + "\u79D2");
    return (hour > 0 ? hour + "时" : "") + (minute > 0 ? minute + "分" : "") + (second > 0 ? second + "秒" : "");
  },

  /**
   * 将秒数转成天数
  */
  changeSecondTime: function changeSecondTime(count) {
    var day = Math.floor(count / (3600 * 24));
    var hour = Math.floor((count - day * (3600 * 24)) / 3600);
    var minute = Math.floor((count - 3600 * hour - day * (3600 * 24)) / 60); // let second = count - hour * 3600 - 60 * minute;

    return (day > 0 ? day + "天" : "") + (hour > 0 ? hour + "时" : "") + (minute > 0 ? minute + "分" : "");
  },

  /**
   * 将时间戳转化
  */
  //将数组中的一个数值删除
  remove: function remove(arr, val) {
    var index = arr.indexOf(val);

    if (index > -1) {
      arr.splice(index, 1);
      return index;
    }

    return index;
  },
  changeTimeToloc: function changeTimeToloc(time) {
    var date = new Date(time);
    var year = date.getFullYear();
    var month = date.getMonth() + 1 > 9 ? date.getMonth() + 1 : "0" + (date.getMonth() + 1);
    var day = date.getDate();
    var hours = date.getHours() > 9 ? date.getHours() : "0" + date.getHours();
    var minute = date.getMinutes() > 9 ? date.getMinutes() : "0" + date.getMinutes();
    var second = date.getSeconds() > 9 ? date.getSeconds() : "0" + date.getSeconds();
    return year + "/" + month + "/" + day + " " + hours + ":" + minute + ":" + second;
  }
};
cc.Tools.userInfo = {}; //用户信息

cc.Tools.ad = {}; //广告

cc.Tools.treasure = {}; //宝箱

cc.Tools.wallet = {}; //钱

cc.Tools.ad.adTimes = 0;
cc.Tools.ad.adDiv = 10;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMvVG9vbHMuanMiXSwibmFtZXMiOlsiUHVia2V5IiwiY2MiLCJUb29scyIsImRvdCIsImV2ZW50IiwicHJvIiwic3lzIiwiaXNOYXRpdmUiLCJqc2IiLCJyZWZsZWN0aW9uIiwiY2FsbFN0YXRpY01ldGhvZCIsIkpTT04iLCJzdHJpbmdpZnkiLCJnZXREZXZpY2UiLCJwcmFtIiwiZGF0YSIsIkRldmljZUluZm8iLCJwYXJzZSIsInNldEFkVGltZXMiLCJnZXRQZXJtaXNzaW9uIiwiZ2V0QWRUaW1lcyIsImFkVGltZXMiLCJOdW1iZXIiLCJzbSIsInR5cGUiLCJjb25zb2xlIiwibG9nIiwiX3R5cGUiLCJqc29uIiwiYWQiLCJhZFBvc0lkIiwiYWRJZCIsInVzZXJJbmZvIiwidXNlcl9pZCIsInV1aWQiLCJpbmRleE9mIiwiX190eXBlIiwic3BsaXQiLCJhZEZpbmlzaFR5cGUiLCJzZW5kRGF0YSIsImxvY2FsU3RvcmFnZSIsImdldEl0ZW0iLCJEYXRlIiwiZ2V0VGltZSIsInNlbmRSZXF1ZXN0IiwidGhlbiIsInJlcyIsImxlbiIsInJhZGl4IiwiY2hhcnMiLCJpIiwibGVuZ3RoIiwiTWF0aCIsInJhbmRvbSIsInIiLCJqb2luIiwiZ2V0RnJlZXplIiwiY2FsZW5kYXJfbXNnIiwiY2FsZW5kYXJfdGltZXN0YW1wIiwic2V0RGlzdGluY3RJZCIsImRpc3RpbmN0X2lkIiwic2V0VXNlcklkIiwic2V0TGV2ZWwiLCJsZXZlbCIsInNodVNodURvdCIsImFkQ2FsbEJhY2siLCJfcHJhbSIsImVjcG0iLCJnZXRVc2VyRWNwbSIsInBhcnNlSW50IiwiZW1pdEV2ZW50IiwidGlja2V0IiwiYW1vdW50IiwiYWRkIiwiYWRkX2Ftb3VudCIsInZpZGVvVHlwZSIsImFyZyIsIkV2ZW50IiwiZW1pdCIsInNob3dKaWxpQWQiLCJhZFNob3dOdW0iLCJzZXROZXdBZElkIiwiaWQiLCJzaG93QmFubmVyIiwiaGlkZUJhbm5lciIsInNob3dUYWJsZVNjcmVlbiIsImhpZGVUYWJsZVNjcmVlbiIsInNob3dGZWVkU2NyZWVuIiwiaGlkZUZlZWRTY3JlZW4iLCJ3eFNoYXJlIiwid3hMb2dpbiIsInd4TG9naW5SZXN1bHQiLCJlcnJDb2RlIiwic2VydmVyRWNwbSIsIlByb21pc2UiLCJyZXNvbHZlIiwicmVqZWN0IiwiY3JlYXRlU2lnbkRhdGEiLCJhY3Rpb24iLCJyZW1pbmRlck1zZyIsIm1zZyIsImFkX3Nob3dfbnVtIiwiYWREaXYiLCJhZFNtYWxsIiwiYWRCaWciLCJzZXRJdGVtIiwiYWRfaWQiLCJzb3J0TGlzdCIsImtleSIsImhhc093blByb3BlcnR5IiwidmFsdWUiLCJpdGVtIiwicHVzaCIsInNvcnQiLCJzdHJUb0ppYU1pIiwiZm9yRWFjaCIsInNjMSIsImhleF9tZDUiLCJyZXF1aXJlIiwic2lnbiIsInNjcmVlbkFkYXB0ZXIiLCJjYW52YXMiLCJmaW5kIiwiZ2V0Q29tcG9uZW50IiwiQ2FudmFzIiwid2luU2l6ZSIsInZpZXciLCJnZXRWaXNpYmxlU2l6ZSIsIndpZHRoIiwiaGVpZ2h0IiwiZml0SGVpZ2h0IiwiZml0V2lkdGgiLCJzaG93VGlwcyIsIm4iLCJzdHIiLCJ0aXBzIiwiZ2V0Q2hpbGRCeU5hbWUiLCJpY29uIiwibGJsIiwiYWN0aXZlIiwidGV4dCIsIlJpY2hUZXh0Iiwic3RyaW5nIiwiX2ljb24iLCJ0d2VlbiIsImRlbGF5IiwiY2FsbCIsIngiLCJzdGFydCIsInN0b3BBbGxBY3Rpb25zIiwiekluZGV4IiwieSIsIm9wYWNpdHkiLCJ0byIsImVuY3J5cHREYXRhIiwiZW5jcnlwdCIsIkpTRW5jcnlwdCIsInNldFB1YmxpY0tleSIsImVuY3J5cHRlZCIsImJhY2tEYXRhIiwic2xpY2UiLCJvYmoiLCJkZWNyeXB0RGF0YSIsImVuY3J5cHRlZERhdGEiLCJwYXJzZURhdGEiLCJkZWNyeXB0Iiwic2V0UHJpdmF0ZUtleSIsInVuY3J5cHRlZCIsInVybCIsInhociIsIlhNTEh0dHBSZXF1ZXN0IiwicmVxdWVzdFVSTCIsIm9wZW4iLCJzZXRSZXF1ZXN0SGVhZGVyIiwid3hUb2tlbiIsIm9ucmVhZHlzdGF0ZWNoYW5nZSIsInJlYWR5U3RhdGUiLCJzdGF0dXMiLCJfcmVzcG9uc2UiLCJyZXNwb25zZSIsImNvZGUiLCJtZXNzYWdlIiwib25lcnJvciIsIkVycm9yIiwic3RhdHVzVGV4dCIsInNlbmQiLCJicmVhdGhlQW5pbSIsImJ0biIsInNlcXVlbmNlIiwic2NhbGVUbyIsInJlcGVhdEZvcmV2ZXIiLCJyb3RhdGVBbmltIiwiYW5nbGUiLCJyb3RhdGVCeSIsImNhbGxGdW5jIiwic3RvcEFuaW0iLCJwb3BBbmltIiwicG9zIiwiZ2V0UG9zaXRpb24iLCJ2MiIsInJkbSIsImNyZWF0ZVJhbmRvbSIsImFjdGlvbjEiLCJtb3ZlVG8iLCJhY3Rpb24yIiwiYWN0aW9uMyIsImFjdGlvbjQiLCJhYyIsInNldEJ1dHRvbkdhcnkiLCJidG5Db20iLCJCdXR0b24iLCJlbmFibGVBdXRvR3JheUVmZmVjdCIsImludGVyYWN0YWJsZSIsInRhcmdldE9mZiIsIm0iLCJhIiwibnVtIiwiY2hhbmdlVGltZSIsImNvdW50IiwiaG91ciIsImZsb29yIiwibWludXRlIiwic2Vjb25kIiwiY2hhbmdlU2Vjb25kVGltZSIsImRheSIsInJlbW92ZSIsImFyciIsInZhbCIsImluZGV4Iiwic3BsaWNlIiwiY2hhbmdlVGltZVRvbG9jIiwidGltZSIsImRhdGUiLCJ5ZWFyIiwiZ2V0RnVsbFllYXIiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RGF0ZSIsImhvdXJzIiwiZ2V0SG91cnMiLCJnZXRNaW51dGVzIiwiZ2V0U2Vjb25kcyIsInRyZWFzdXJlIiwid2FsbGV0Il0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLElBQUlBLE1BQU0sdWRBQVY7QUFTQUMsRUFBRSxDQUFDQyxLQUFILEdBQVc7QUFDUDtBQUNKO0FBQ0E7QUFDQTtBQUNJQyxFQUFBQSxHQUxPLGVBS0hDLEtBTEcsRUFLSUMsR0FMSixFQUtTO0FBQ1osUUFBSUosRUFBRSxDQUFDSyxH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LENBQUNTLFVBQUwsS0FBb0IsQ0FBcEIsR0FBd0JULElBQUksQ0FBQ1MsVUFBTCxFQUF4QixHQUE0QyxNQUFNVCxJQUFJLENBQUNTLFVBQUwsRUFBL0Q7QUFDQSxXQUFPUixJQUFJLEdBQUcsR0FBUCxHQUFhRSxLQUFiLEdBQXFCLEdBQXJCLEdBQTJCWCxHQUEzQixHQUFpQyxHQUFqQyxHQUF1Q2MsS0FBdkMsR0FBK0MsR0FBL0MsR0FBcURqQixNQUFyRCxHQUE4RCxHQUE5RCxHQUFvRUMsTUFBM0U7QUFDSDtBQS9qQk0sQ0FBWDtBQWlrQkE3TixFQUFFLENBQUNDLEtBQUgsQ0FBUzhCLFFBQVQsR0FBb0IsRUFBcEIsRUFBdUI7O0FBQ3ZCL0IsRUFBRSxDQUFDQyxLQUFILENBQVMyQixFQUFULEdBQWMsRUFBZCxFQUFpQjs7QUFDakI1QixFQUFFLENBQUNDLEtBQUgsQ0FBU2dQLFFBQVQsR0FBb0IsRUFBcEIsRUFBdUI7O0FBQ3ZCalAsRUFBRSxDQUFDQyxLQUFILENBQVNpUCxNQUFULEdBQWtCLEVBQWxCLEVBQXFCOztBQUNyQmxQLEVBQUUsQ0FBQ0MsS0FBSCxDQUFTMkIsRUFBVCxDQUFZUixPQUFaLEdBQXNCLENBQXRCO0FBQ0FwQixFQUFFLENBQUNDLEtBQUgsQ0FBUzJCLEVBQVQsQ0FBWXlFLEtBQVosR0FBb0IsRUFBcEIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBQdWJrZXkgPSBgLS0tLS1CRUdJTiBSU0EgUHVibGljIEtleS0tLS0tXG5NSUlCSWpBTkJna3Foa2lHOXcwQkFRRUZBQU9DQVE4QU1JSUJDZ0tDQVFFQXZBZDcxaHFRRmFsOWVxVGhTTXdyXG5pTXdwVHZ5VFlrWDlZMHZ1RnFFb3FVNzJxUTk4Q1VoeHd4TGN6dUZaQm12bEwyZGlJVmYxZFJPUjNNb0htL3dJXG5BUDNwcUZ1VjVYTXJjbHJsT2tJcjloMVdOSWplL0hmZTFHTW1peGo4SlJUZjZNRURRNXZBOG0rUHlIZFJBeENjXG5McVl3amkzTEIzVlUrWEprT2NkbFJISzFvaTZCQlk3L3FKajJIdUxnRmZ2aFdXOVFjK1NSc3U2YUtFQSt4MTF1XG5aTEN0QUJnQU1EY0QxellkRXUxS2F3MjJpUUpSRjlaY2hnUEVXS28wb2tBUjViQVlSeDVEK01oaXJRMjBYSkdNXG52Z09pcUYzTFlwdUE3NVVUak41cUdzOURWellsblJhbUdmeDNvdEp3em9LYzBOOEJMZXdsbmNSaGVKSDRrR2VqXG5od0lEQVFBQlxuLS0tLS1FTkQgUlNBIFB1YmxpYyBLZXktLS0tLWBcbmNjLlRvb2xzID0ge1xuICAgIC8qKlxuICAgICAqIEBwYXJhbSB7Kn0gZXZlbnQg5pWw5pWw5omT54K555qE5LqL5Lu25ZCN56ewXG4gICAgICogQHBhcmFtIHsqfSBwcm8g5pWw5pWw5omT54K555qE5YWz6IGU5bGe5oCnXG4gICAgKi9cbiAgICBkb3QoZXZlbnQsIHBybykge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBpZiAocHJvKSB7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nO0xqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50LCBKU09OLnN0cmluZ2lmeShwcm8pKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZG90XCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGV2ZW50KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/lg4/mnI3liqHlmajlj5HpgIHor7fmsYJcbiAgICBnZXREZXZpY2UocHJhbSwgZGF0YSkge1xuICAgICAgICBjYy5Ub29scy5EZXZpY2VJbmZvID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICB9LFxuICAgIHNldEFkVGltZXMoKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldEFkVGltZXNcIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldFBlcm1pc3Npb24oKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldFBlcm1pc3Npb25cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIGdldEFkVGltZXMoZGF0YSkge1xuICAgICAgICBjYy5Ub29scy5hZFRpbWVzID0gTnVtYmVyKGRhdGEpO1xuICAgIH0sXG4gICAgLy/mlbDnvo7mjqXlj6NcbiAgICBzbSh0eXBlKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tc20tLS1cIiwgXCJ0eXBlPVwiICsgdHlwZSk7XG4gICAgICAgIGxldCBfdHlwZTtcbiAgICAgICAgbGV0IGpzb24gPSB7XG4gICAgICAgICAgICBcImFkVHlwZVwiOiBcIlJFV0FSREVEX1ZJREVPX0FEXCIsXG4gICAgICAgICAgICBcImNvZGVJZFwiOiBjYy5Ub29scy5hZC5hZFBvc0lkID8gY2MuVG9vbHMuYWQuYWRQb3NJZCA6IFwiMFwiLFxuICAgICAgICB9XG4gICAgICAgIGlmICh0eXBlID09PSBcImFkR2V0XCIpIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkSWQgPSBjYy5Ub29scy51c2VySW5mby51c2VyX2lkICsgXCItXCIgKyBjYy5Ub29scy51dWlkKDgsIDEwKTtcbiAgICAgICAgfVxuICAgICAgICBqc29uLmFkSWQgPSBjYy5Ub29scy5hZC5hZElkO1xuICAgICAgICBpZiAodHlwZS5pbmRleE9mKFwiYWRGaW5pc2hcIikgPiAtMSkge1xuICAgICAgICAgICAgX3R5cGUgPSBcImFkRmluaXNoXCJcbiAgICAgICAgICAgIGxldCBfX3R5cGUgPSB0eXBlLnNwbGl0KFwiLFwiKTtcbiAgICAgICAgICAgIGlmIChfX3R5cGVbMV0pIHtcbiAgICAgICAgICAgICAgICBpZiAoX190eXBlWzFdID09PSBcImNsb3NlXCIpIHtcbiAgICAgICAgICAgICAgICAgICAganNvbi5hZEZpbmlzaFR5cGUgPSBcIkNMSUNLX0NMT1NFX0JVVFRPTlwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfX3R5cGVbMV0gPT09IFwiY29tcGxldGVcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiQ09NUExFVEVfQURcIlxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoX190eXBlWzFdID09PSBcInNraXBcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiU0tJUF9BRFwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChfX3R5cGVbMV0gPT09IFwiZXJyb3JcIikge1xuICAgICAgICAgICAgICAgICAgICBqc29uLmFkRmluaXNoVHlwZSA9IFwiU0hPV19BRF9FUlJPUlwiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgX3R5cGUgPSB0eXBlXG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgXCJkZXZpY2VfaWRcIjogY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic21fZGV2aWNlX2lkXCIpLFxuICAgICAgICAgICAgXCJldmVudFwiOiBfdHlwZSxcbiAgICAgICAgICAgIFwibWlsbGlzZWNvbmRcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksXG4gICAgICAgICAgICBcImFkZF9qc29uXCI6IEpTT04uc3RyaW5naWZ5KGpzb24pXG4gICAgICAgIH07XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiU2h1TWVpRXZlbnRcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIFxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLy91dWlkKDgsIDEwKVxuICAgIHV1aWQobGVuLCByYWRpeCkge1xuICAgICAgICB2YXIgY2hhcnMgPSAnMDEyMzQ1Njc4OUFCQ0RFRkdISUpLTE1OT1BRUlNUVVZXWFlaYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXonLnNwbGl0KCcnKTtcbiAgICAgICAgdmFyIHV1aWQgPSBbXSwgaTtcbiAgICAgICAgcmFkaXggPSByYWRpeCB8fCBjaGFycy5sZW5ndGg7XG4gICAgICAgIGlmIChsZW4pIHtcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBsZW47IGkrKykgdXVpZFtpXSA9IGNoYXJzWzAgfCBNYXRoLnJhbmRvbSgpICogcmFkaXhdO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIHI7XG4gICAgICAgICAgICB1dWlkWzhdID0gdXVpZFsxM10gPSB1dWlkWzE4XSA9IHV1aWRbMjNdID0gJy0nO1xuICAgICAgICAgICAgdXVpZFsxNF0gPSAnNCc7XG4gICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgMzY7IGkrKykge1xuICAgICAgICAgICAgICAgIGlmICghdXVpZFtpXSkge1xuICAgICAgICAgICAgICAgICAgICByID0gMCB8IE1hdGgucmFuZG9tKCkgKiAxNjtcbiAgICAgICAgICAgICAgICAgICAgdXVpZFtpXSA9IGNoYXJzWyhpID09IDE5KSA/IChyICYgMHgzKSB8IDB4OCA6IHJdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdXVpZC5qb2luKCcnKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOiOt+WPluW9k+WJjeeahOWtmOmSsee9kOeahOmSseaVsFxuICAgICovXG4gICAgZ2V0RnJlZXplKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlICYmIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIikgPT0gMTAwKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzZXRGcmVlemVcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7TGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8uY2FsZW5kYXJfbXNnLCBjYy5Ub29scy51c2VySW5mby5jYWxlbmRhcl90aW1lc3RhbXApO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXREaXN0aW5jdElkKCkge1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvY29zLS0tLS1kaXN0aW5jdF9pZD1cIi5jYy5Ub29scy51c2VySW5mby5kaXN0aW5jdF9pZCk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNldERpc3RpbmN0SWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8uZGlzdGluY3RfaWQpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRVc2VySWQoKSB7XG4gICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS0tLXVzZXJfaWQ9XCIuY2MuVG9vbHMudXNlckluZm8udXNlcl9pZCk7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNldFVzZXJ0SWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgY2MuVG9vbHMudXNlckluZm8udXNlcl9pZCArIFwiXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICBzZXRMZXZlbCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tbGV2ZWw9XCIsY2MuVG9vbHMudXNlckluZm8ubGV2ZWwpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJnZXRMZXZlbFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBjYy5Ub29scy51c2VySW5mby5sZXZlbCArIFwiXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aVsOaVsOaJk+eCuVxuICAgIHNodVNodURvdCgpIHtcbiAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tc2h1U2h1XCIpO1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzdGFydFNodVNodVwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgYWRDYWxsQmFjayhwcmFtKSB7XG4gICAgICAgIGxldCBfcHJhbSA9IHByYW0uc3BsaXQoXCIsXCIpO1xuICAgICAgICBsZXQgZWNwbSA9IF9wcmFtWzBdO1xuICAgICAgICBsZXQgdHlwZSA9IF9wcmFtWzFdO1xuICAgICAgICBsZXQgc2VuZERhdGEgPSB7fTtcbiAgICAgICAgdGhpcy5nZXRVc2VyRWNwbShlY3BtLCB0eXBlKS50aGVuKChhZCkgPT4ge1xuICAgICAgICAgICAgLy8g54K55oiR6aKG57qi5YyFXG4gICAgICAgICAgICBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgICAgICBcImFkX2lkXCI6IGFkLFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogcGFyc2VJbnQodHlwZSksXG4gICAgICAgICAgICAgICAgXCJhY3Rpb25cIjogXCJBZEF3YXJkXCJcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzd2l0Y2ggKHR5cGUpIHtcbiAgICAgICAgICAgICAgICBjYXNlIFwiMVwiOi8v54K55oiR6aKG57qi5YyFXG4gICAgICAgICAgICAgICAgY2FzZSBcIjJcIjovL+aCrOa1rue6ouWMhVxuICAgICAgICAgICAgICAgIGNhc2UgXCIzXCI6Ly/mlrDmmKXnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiNFwiOi8v5oiQ5Yqf6L+H5YWzXG4gICAgICAgICAgICAgICAgY2FzZSBcIjdcIjovL+eCueaIkemihue6ouWMhVxuICAgICAgICAgICAgICAgIGNhc2UgXCI4XCI6Ly/otoXnuqfnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiOVwiOi8v5raI6Zmk57qi5YyFXG4gICAgICAgICAgICAgICAgY2FzZSBcIjEyXCI6Ly/oh6rliqjnuqLljIVcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTBcIjovL+mjnuihjOe6ouWMhVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlBpcGVBY3Rpb25cIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KFwiZ2V0VGlja2V0XCIsIHsgdGlja2V0OiByZXMuYW1vdW50LCBhZGQ6IHJlcy5hZGRfYW1vdW50LCB0eXBlOiAxLCB2aWRlb1R5cGU6IHBhcnNlSW50KHR5cGUpIH0pO1xuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTFcIjovL+aPkOeOsOinhumikVxuICAgICAgICAgICAgICAgIGNhc2UgXCIxNVwiOi8v5a2Y6ZKx572Q6Kej5Ya7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE3XCI6Ly/nrb7liLBcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJQaXBlQWN0aW9uXCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcImdldFRpY2tldFwiLCB7IHRpY2tldDogcmVzLmFtb3VudCwgYWRkOiByZXMuYWRkX2Ftb3VudCwgdHlwZTogMiwgdmlkZW9UeXBlOiBwYXJzZUludCh0eXBlKSB9KTtcbiAgICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjVcIjovL+ino+WGu+e6ouWMhVxuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcImZyZWV6ZVwiLCBhZCk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgXCI2XCI6Ly8g5a2Y6ZKx572QXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZW1pdEV2ZW50KFwic2F2ZUNhc2hcIiwgYWQpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICBjYXNlIFwiMTNcIjovL+WBt+iDvemHj1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVtaXRFdmVudChcInN0ZWFsXCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE0XCI6Ly/lpI3ku4dcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoXCJyZXZlbmdlXCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSBcIjE2XCI6Ly/lrp3nrrFcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbWl0RXZlbnQoXCJvcGVuQm94XCIsIGFkKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICBlbWl0RXZlbnQoZXZlbnQsIGFyZykge1xuICAgICAgICBjYy5Ub29scy5FdmVudC5lbWl0KGV2ZW50LCBhcmcpO1xuICAgIH0sXG4gICAgLy8g5pi+56S65r+A5Yqx6KeG6aKRXG4gICAgc2hvd0ppbGlBZCh0eXBlKSB7XG4gICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgIC8vIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dBZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIlwiICsgdHlwZSk7XG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRTaG93TnVtID4gMCkge1xuICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcImdldFByZUxvYWRKaWxpXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIFwiXCIgKyB0eXBlKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwic2hvd1RpcHNcIiwgXCLku4rlpKnop4LnnIvop4bpopHmrKHmlbDlt7Lnu4/ovr7liLDkuIrpmZBcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5Ub29scy5hZENhbGxCYWNrKFwiMTAwLFwiICsgdHlwZSk7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8v6K+35rGC6aKE5Yqg6L295paw55qE5bm/5ZGKSUQgaXNEaWYg5piv5ZCm5YiG5bGCXG4gICAgc2V0TmV3QWRJZChpZCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJwcmVMb2FkUmV3YXJkYWRcIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJcIiArIGlkKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S6YmFubmVyXG4gICAgc2hvd0Jhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwic2hvd0Jhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g6ZqQ6JePYmFubmVyXG4gICAgaGlkZUJhbm5lcigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUJhbm5lclwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy8g5pi+56S65o+S5bGP5bm/5ZGKXG4gICAgc2hvd1RhYmxlU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93VGFibGVTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8vIOmakOiXj+aPkuWxj+W5v+WRilxuICAgIGhpZGVUYWJsZVNjcmVlbigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZVRhYmxlU2NyZWVuXCIsIFwiKClWXCIpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvL+aYvuekuuS/oeaBr+a1geW5v+WRilxuICAgIHNob3dGZWVkU2NyZWVuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93RmVlZFNjcmVlblwiLCBcIigpVlwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLy/pmpDol4/kv6Hmga/mtYHlub/lkYpcbiAgICBoaWRlRmVlZFNjcmVlbigpIHtcbiAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiaGlkZUZlZWRTY3JlZW5cIiwgXCIoKVZcIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIHd4U2hhcmUodHlwZSkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJ3ZWl4aW5fc2hhcmVcIiwgXCIoSSlWXCIsIHR5cGUpO1xuICAgICAgICB9XG4gICAgfSxcbiAgICAvLyDlvq7kv6HnmbvpmYZcbiAgICB3eExvZ2luKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJ3ZWl4aW5fbG9naW5cIiwgXCIoTGphdmEvbGFuZy9TdHJpbmc7KVZcIiwgXCJ3ZWl4aW5fbG9naW5cIik7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICog5o6l5pS2bmF0aXZl5b6u5L+h5o6I5p2D55qEY29kZVxuICAgICogQHBhcmFtIGVyckNvZGUgXG4gICAgKi9cbiAgICB3eExvZ2luUmVzdWx0KGVyckNvZGUpIHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiZ2V0Q29kZVwiLCBlcnJDb2RlKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOeci+W5v+WRiuS5i+WQjuWIt+aWsOS4gOS4i2VjcG1cbiAgICAgKi9cbiAgICBnZXRVc2VyRWNwbShlY3BtLCB0eXBlKSB7XG4gICAgICAgIC8vIOiOt+WPlmVjcG3kuYvlkI7lg4/mnI3liqHlmajlj5HnmoTmmK9lY3BtLzEwMFxuICAgICAgICBsZXQgc2VydmVyRWNwbSA9IHBhcnNlSW50KGVjcG0gLyAxMDApO1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIFwiZWNwbVwiOiBzZXJ2ZXJFY3BtLFxuICAgICAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgICAgICBcInR5cGVcIjogcGFyc2VJbnQodHlwZSlcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgICAgIGRhdGEuYWN0aW9uID0gXCJFY3BtXCJcbiAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiUGlwZUFjdGlvblwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMucmVtaW5kZXJNc2cgPSByZXMubXNnO1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkU2hvd051bSA9IHJlcy5hZF9zaG93X251bTtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLWVjcG3nsbvlnostLS0tXCIgKyB0eXBlKTtcbiAgICAgICAgICAgICAgICBpZiAodHlwZSA8IDIwKSB7XG4gICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkVGltZXMrKztcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkVGltZXMgPD0gY2MuVG9vbHMuYWQuYWREaXYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFNtYWxsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkU21hbGw7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRCaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5hZC5hZFBvc0lkID0gY2MuVG9vbHMuYWQuYWRCaWc7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2V0TmV3QWRJZChjYy5Ub29scy5hZC5hZFBvc0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYWRUaW1lc1wiLCBjYy5Ub29scy5hZC5hZFRpbWVzKTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKHJlcy5hZF9pZCk7XG4gICAgICAgICAgICB9KS5jYXRjaCgocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS1FY3BtLS0tLWJ1Zy0tLS1cIiwgSlNPTi5zdHJpbmdpZnkocmVzKSk7XG4gICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkUG9zSWQpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuc2V0TmV3QWRJZChjYy5Ub29scy5hZC5hZFBvc0lkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KVxuICAgICAgICB9KVxuICAgIH0sXG4gICAgLyoqXG4gICAgICogXG4gICAgICogQHBhcmFtIHsqfSBkYXRhIOmcgOimgeetvuWQjeaVsOaNrlxuICAgICAqIEByZXR1cm5zIFxuICAgICAqL1xuICAgIGNyZWF0ZVNpZ25EYXRhOiBmdW5jdGlvbiAoZGF0YSkge1xuICAgICAgICB2YXIgc29ydExpc3QgPSBbXTtcbiAgICAgICAgZm9yICh2YXIga2V5IGluIGRhdGEpIHtcbiAgICAgICAgICAgIGlmIChkYXRhLmhhc093blByb3BlcnR5KGtleSkgJiYga2V5ICE9IFwic2lnblwiKSB7XG4gICAgICAgICAgICAgICAgdmFyIHZhbHVlID0gZGF0YVtrZXldO1xuICAgICAgICAgICAgICAgIHZhciBpdGVtID0ge307XG4gICAgICAgICAgICAgICAgaXRlbS5rZXkgPSBrZXk7XG4gICAgICAgICAgICAgICAgaXRlbS52YWx1ZSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgIHNvcnRMaXN0LnB1c2goa2V5KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBzb3J0TGlzdC5zb3J0KCk7XG4gICAgICAgIHZhciBzdHJUb0ppYU1pID0gXCJcIjtcbiAgICAgICAgc29ydExpc3QuZm9yRWFjaChmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgICAgICBzdHJUb0ppYU1pICs9IFwiJlwiICsga2V5ICsgXCI9XCIgKyBkYXRhW2tleV07XG4gICAgICAgIH0sIHRoaXMpO1xuICAgICAgICBzdHJUb0ppYU1pID0gXCJ0b2tlbj1cIiArIGNjLlRvb2xzLnVzZXJJbmZvLnNjMSArIHN0clRvSmlhTWk7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5Yqg5a+G5LiyLS0tXCIsIHN0clRvSmlhTWkpO1xuICAgICAgICB2YXIgaGV4X21kNSA9IHJlcXVpcmUoXCJNRDVcIilcbiAgICAgICAgc3RyVG9KaWFNaSA9IGhleF9tZDUoc3RyVG9KaWFNaSk7XG4gICAgICAgIGRhdGEuc2lnbiA9IHN0clRvSmlhTWk7XG4gICAgICAgIHJldHVybiBkYXRhO1xuXG4gICAgfSxcbiAgICAvLyDpgILphY3lsY/luZVcbiAgICBzY3JlZW5BZGFwdGVyKCkge1xuICAgICAgICBsZXQgY2FudmFzID0gY2MuZmluZChcIkNhbnZhc1wiKS5nZXRDb21wb25lbnQoY2MuQ2FudmFzKTtcbiAgICAgICAgbGV0IHdpblNpemUgPSBjYy52aWV3LmdldFZpc2libGVTaXplKCk7XG5cbiAgICAgICAgaWYgKHdpblNpemUud2lkdGggLyB3aW5TaXplLmhlaWdodCA8PSAxMDgwIC8gMTkyMCkge1xuICAgICAgICAgICAgY2FudmFzLmZpdEhlaWdodCA9IGZhbHNlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGNhbnZhcy5maXRIZWlnaHQgPSB0cnVlO1xuICAgICAgICAgICAgY2FudmFzLmZpdFdpZHRoID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9LFxuICAgIC8qKlxuICAgICAgICogXG4gICAgICAgKiBAcGFyYW0geyp9IG4gbm9kZeiKgueCuVxuICAgICAgICogQHBhcmFtIHsqfSBzdHIgIOaYvuekuueahHRpcHPlhoXlrrlcbiAgICAgICAqL1xuICAgIHNob3dUaXBzKG4sIHN0cikge1xuICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkge1xuICAgICAgICAgICAgbGV0IHRpcHMgPSBuLmdldENoaWxkQnlOYW1lKFwiVGlwc1wiKTtcbiAgICAgICAgICAgIGlmICghdGlwcykge1xuICAgICAgICAgICAgICAgIHJlamVjdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGljb24gPSB0aXBzLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgIGxldCBsYmwgPSB0aXBzLmdldENoaWxkQnlOYW1lKFwibGJsXCIpO1xuICAgICAgICAgICAgaWYgKHN0cikge1xuICAgICAgICAgICAgICAgIGljb24uYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgbGJsLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHRleHQgPSBsYmwuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpO1xuICAgICAgICAgICAgICAgIHRleHQuZ2V0Q29tcG9uZW50KGNjLlJpY2hUZXh0KS5zdHJpbmcgPSBzdHI7XG4gICAgICAgICAgICAgICAgaWYgKGxibC5nZXRDaGlsZEJ5TmFtZShcImljb25cIikpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF9pY29uID0gbGJsLmdldENoaWxkQnlOYW1lKFwiaWNvblwiKTtcbiAgICAgICAgICAgICAgICAgICAgY2MudHdlZW4oX2ljb24pLmRlbGF5KDAuMDUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgX2ljb24ueCA9IGxibC5nZXRDaGlsZEJ5TmFtZShcImxheW91dFwiKS53aWR0aCAvIDIgLSAxNVxuICAgICAgICAgICAgICAgICAgICB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgaWNvbi5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxibC5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRpcHMuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgIHRpcHMuekluZGV4ID0gOTk5OTtcbiAgICAgICAgICAgIHRpcHMueSA9IDE0NTtcbiAgICAgICAgICAgIHRpcHMub3BhY2l0eSA9IDI1NTtcbiAgICAgICAgICAgIHRpcHMuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRpcHMpLnRvKDEsIHsgeTogMzAwIH0pLmRlbGF5KDAuNSkudG8oMC4xLCB7IG9wYWNpdHk6IDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGlwcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXNvbHZlKCk7XG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmjqXlj6PliqDlr4ZcbiAgICAqL1xuICAgIGVuY3J5cHREYXRhKGRhdGEpIHtcbiAgICAgICAgbGV0IGVuY3J5cHQgPSBuZXcgSlNFbmNyeXB0KCk7XG4gICAgICAgIGVuY3J5cHQuc2V0UHVibGljS2V5KCctLS0tLUJFR0lOIFJTQSBQdWJsaWMgS2V5LS0tLS0nICsgUHVia2V5ICsgJy0tLS0tRU5EIFJTQSBQdWJsaWMgS2V5LS0tLS0nKTtcbiAgICAgICAgbGV0IHN0ciA9IEpTT04uc3RyaW5naWZ5KGRhdGEpO1xuICAgICAgICBsZXQgZW5jcnlwdGVkID0gZW5jcnlwdC5lbmNyeXB0KHN0cik7XG4gICAgICAgIGxldCBiYWNrRGF0YSA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVuY3J5cHRlZC5sZW5ndGg7IGkgKz0gMTAwMCkge1xuICAgICAgICAgICAgYmFja0RhdGEucHVzaChlbmNyeXB0ZWQuc2xpY2UoaSwgaSArIDEwMDApKTtcbiAgICAgICAgfVxuICAgICAgICBsZXQgb2JqID0ge1xuXG4gICAgICAgIH1cbiAgICAgICAgb2JqLmRhdGEgPSBiYWNrRGF0YVxuICAgICAgICByZXR1cm4gb2JqO1xuICAgIH0sXG4gICAgZGVjcnlwdERhdGEoZW5jcnlwdGVkRGF0YSkge1xuICAgICAgICBsZXQgcGFyc2VEYXRhID0gXCJcIjtcbiAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQjuaVsOaNrjonLCBlbmNyeXB0ZWREYXRhLmxlbmd0aCk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZW5jcnlwdGVkRGF0YS5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IGRlY3J5cHQgPSBuZXcgSlNFbmNyeXB0KCk7XG4gICAgICAgICAgICBkZWNyeXB0LnNldFByaXZhdGVLZXkoJy0tLS0tQkVHSU4gUlNBIFB1YmxpYyBLZXktLS0tLScgKyBQdWJrZXkgKyAnLS0tLS1FTkQgUlNBIFB1YmxpYyBLZXktLS0tLScpXG4gICAgICAgICAgICBsZXQgdW5jcnlwdGVkID0gZGVjcnlwdC5kZWNyeXB0KGVuY3J5cHRlZERhdGFbaV0pO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQji0tLS3mlbDmja46JywgdW5jcnlwdGVkKTtcbiAgICAgICAgICAgIHBhcnNlRGF0YSArPSB1bmNyeXB0ZWQ7XG4gICAgICAgIH1cbiAgICAgICAgY29uc29sZS5sb2coJ2NvY29zLS0tLeino+WvhuWQjuaVsOaNrjolbycsIHBhcnNlRGF0YSk7XG4gICAgICAgIHJldHVybiBKU09OLnBhcnNlKHBhcnNlRGF0YSlcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB7Kn0gdXJsIOivt+axguaOpeWPo+eahHVybC0tLS1waXQudjEuUGl0U3ZjL1VzZXJJbmZvXG4gICAgICogQHBhcmFtIHsqfSB0eXBlIOivt+axguaOpeWPo+eahOexu+WeiyDlj6rog73mmK9HRVQtLVBPU1RcbiAgICAgKiBAcGFyYW0geyp9IGRhdGEg6K+35rGC5o6l5Y+j5omA6ZyA6KaB55qE5pWw5o2uXG4gICAgICogQHJldHVybnMgXG4gICAgICovXG4gICAgc2VuZFJlcXVlc3Q6IGZ1bmN0aW9uICh1cmwsIHR5cGUsIGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKGZ1bmN0aW9uIChyZXNvbHZlLCByZWplY3QpIHtcbiAgICAgICAgICAgIGxldCB4aHIgPSBuZXcgWE1MSHR0cFJlcXVlc3QoKTtcbiAgICAgICAgICAgIGxldCByZXF1ZXN0VVJMID0gXCJodHRwczovL2FwaS5qaWFua2FuZ3podWFuLmNvbS9hcGkueHhyaWNoL1wiICsgdXJsO1xuICAgICAgICAgICAgLy90ZXN0IHRvZG9cbiAgICAgICAgICAgIC8vIGxldCByZXF1ZXN0VVJMID0gXCJodHRwOi8vMTkyLjE2OC4xMTAuMTk1Ojg4ODgvYXBpLnh4cmljaC9cIiArIHVybDtcbiAgICAgICAgICAgIHhoci5vcGVuKHR5cGUsIHJlcXVlc3RVUkwsIHRydWUpO1xuICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQWNjZXB0LUVuY29kZWluZ1wiLCBcImd6aXAsZGVmbGF0ZVwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGxldCB3eFRva2VuID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwidG9rZW5cIik7XG4gICAgICAgICAgICBpZiAod3hUb2tlbikge1xuICAgICAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQXV0aG9yaXphdGlvblwiLCB3eFRva2VuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHhoci5zZXRSZXF1ZXN0SGVhZGVyKFwiQ29udGVudC1UeXBlXCIsIFwiYXBwbGljYXRpb24vanNvblwiKTtcbiAgICAgICAgICAgIHhoci5vbnJlYWR5c3RhdGVjaGFuZ2UgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgaWYgKHhoci5yZWFkeVN0YXRlID09PSA0ICYmIHhoci5zdGF0dXMgPT0gMjAwKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOe7n+S4gOWkhOeQhlxuICAgICAgICAgICAgICAgICAgICBsZXQgX3Jlc3BvbnNlID0gSlNPTi5wYXJzZSh4aHIucmVzcG9uc2UpO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcImNvY29zLS0tLS1cIiArIHVybCArIFwiLS0tLS0tXCIsIHhoci5yZXNwb25zZSk7XG4gICAgICAgICAgICAgICAgICAgIC8vIOWIpOaWreaOpeWPo+aYr+WQpuaYr+WKoOWvhuaOpeWPo1xuICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcmVzcG9uc2UuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v6Kej5a+GXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tXCIrdXJsK1wiLS0tLS1cIitkYXRhLmFjdGlvbitcIi0tLS1cIit4aHIucmVzcG9uc2UpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzb2x2ZShjYy5Ub29scy5kZWNyeXB0RGF0YShfcmVzcG9uc2UuZGF0YS5kYXRhKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVqZWN0KF9yZXNwb25zZS5tZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChfcmVzcG9uc2UuY29kZSA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc29sdmUoX3Jlc3BvbnNlKVxuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZWplY3QoX3Jlc3BvbnNlLm1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgeGhyLm9uZXJyb3IgPSBmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgcmVqZWN0KG5ldyBFcnJvcih4aHIuc3RhdHVzVGV4dCkpXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZGF0YS5hY3Rpb24pIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShjYy5Ub29scy5lbmNyeXB0RGF0YShkYXRhKSkpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB4aHIuc2VuZChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDmjInpkq7lkbzlkLjliqjnlLtcbiAgICAgKiBAcGFyYW0gYnRuOmNjLk5vZGVcbiAgICAgKi9cbiAgICBicmVhdGhlQW5pbShidG4pIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5zY2FsZVRvKDAuNSwgMC45KSwgY2Muc2NhbGVUbygwLjUsIDEpKVxuICAgICAgICBjYy50d2VlbihidG4pXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhY3Rpb24pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5peL6L2s5Yqo55S7XG4gICAgICogQHBhcmFtIGJ0bjpjYy5Ob2RlXG4gICAgICovXG4gICAgcm90YXRlQW5pbShidG4pIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGJ0bi5hbmdsZSA9IDA7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShjYy5yb3RhdGVCeSgyLCAzNjApLCBjYy5jYWxsRnVuYygoKSA9PiB7XG4gICAgICAgICAgICBidG4uYW5nbGUgPSAwO1xuICAgICAgICB9KSlcbiAgICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAgICAgLnJlcGVhdEZvcmV2ZXIoYWN0aW9uKVxuICAgICAgICAgICAgLnN0YXJ0KClcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWBnOatouiKgueCueWKqOeUu1xuICAgICAqL1xuICAgIHN0b3BBbmltKGJ0bikge1xuICAgICAgICBidG4uc3RvcEFsbEFjdGlvbnMoKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIFxuICAgICAqIEBwYXJhbSB75Yqo55S76IqC54K5fSBidG4gXG4gICAgICovXG4gICAgcG9wQW5pbShidG4sIHkpIHtcbiAgICAgICAgYnRuLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGxldCBwb3MgPSBidG4uZ2V0UG9zaXRpb24oY2MudjIoKSk7XG4gICAgICAgIC8v6ZqP5py65LiA5Liq5Lik5L2N5pWw5bCP5pWwXG4gICAgICAgIGxldCByZG0gPSBjYy5Ub29scy5jcmVhdGVSYW5kb20oMCwgeSk7XG4gICAgICAgIGxldCBhY3Rpb24xID0gY2MubW92ZVRvKDEsIHBvcy54LCBwb3MueSArIHJkbSArIDUpO1xuICAgICAgICBsZXQgYWN0aW9uMiA9IGNjLm1vdmVUbygxLCBwb3MueCwgcG9zLnkpO1xuICAgICAgICBsZXQgYWN0aW9uMyA9IGNjLm1vdmVUbygxLCBwb3MueCwgcG9zLnkgLSByZG0gLSA1KTtcbiAgICAgICAgbGV0IGFjdGlvbjQgPSBjYy5tb3ZlVG8oMSwgcG9zLngsIHBvcy55KTtcbiAgICAgICAgbGV0IGFjID0gW107XG4gICAgICAgIGFjLnB1c2goYWN0aW9uMSwgYWN0aW9uMiwgYWN0aW9uMywgYWN0aW9uNCk7XG4gICAgICAgIGxldCBhY3Rpb24gPSBjYy5zZXF1ZW5jZShhYylcbiAgICAgICAgY2MudHdlZW4oYnRuKVxuICAgICAgICAgICAgLmRlbGF5KE1hdGgucmFuZG9tKCkpXG4gICAgICAgICAgICAucmVwZWF0Rm9yZXZlcihhY3Rpb24pXG4gICAgICAgICAgICAuc3RhcnQoKVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5oyJ6ZKu572u54GwXG4gICAgICovXG4gICAgc2V0QnV0dG9uR2FyeShidG4pIHtcbiAgICAgICAgbGV0IGJ0bkNvbSA9IGJ0bi5nZXRDb21wb25lbnQoY2MuQnV0dG9uKTtcbiAgICAgICAgaWYgKGJ0bkNvbSkge1xuICAgICAgICAgICAgYnRuQ29tLmVuYWJsZUF1dG9HcmF5RWZmZWN0ID0gdHJ1ZTtcbiAgICAgICAgICAgIGJ0bkNvbS5pbnRlcmFjdGFibGUgPSBmYWxzZTtcbiAgICAgICAgICAgIGJ0bi50YXJnZXRPZmYoXCJ0b3VjaGVuZFwiKTtcbiAgICAgICAgfVxuICAgIH0sXG4gICAgLyoqXG4gICAgICog5Zyo5LiA5Liq6IyD5Zu05YaF6ZqP5py6XG4gICAgICovXG4gICAgY3JlYXRlUmFuZG9tKG4sIG0pIHtcbiAgICAgICAgKyttO1xuICAgICAgICBsZXQgYSA9IG0gLSBuO1xuICAgICAgICBsZXQgbnVtID0gTWF0aC5yYW5kb20oKSAqIGEgKyBuO1xuICAgICAgICByZXR1cm4gcGFyc2VJbnQobnVtKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaIkOaXtumXtFxuICAgICovXG4gICAgY2hhbmdlVGltZShjb3VudCkge1xuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IoY291bnQgLyAzNjAwKTtcbiAgICAgICAgbGV0IG1pbnV0ZSA9IE1hdGguZmxvb3IoKGNvdW50IC0gMzYwMCAqIGhvdXIpIC8gNjApO1xuICAgICAgICBsZXQgc2Vjb25kID0gY291bnQgLSBob3VyICogMzYwMCAtIDYwICogbWludXRlO1xuICAgICAgICBjb25zb2xlLmxvZyhgJHtob3VyfeaXtiske21pbnV0ZX3liIYrJHtzZWNvbmR956eSYCk7XG4gICAgICAgIHJldHVybiAoaG91ciA+IDAgPyBob3VyICsgXCLml7ZcIiA6IFwiXCIpICsgKG1pbnV0ZSA+IDAgPyBtaW51dGUgKyBcIuWIhlwiIDogXCJcIikgKyAoc2Vjb25kID4gMCA/IHNlY29uZCArIFwi56eSXCIgOiBcIlwiKTtcbiAgICB9LFxuICAgIC8qKlxuICAgICAqIOWwhuenkuaVsOi9rOaIkOWkqeaVsFxuICAgICovXG4gICAgY2hhbmdlU2Vjb25kVGltZShjb3VudCkge1xuICAgICAgICBsZXQgZGF5ID0gTWF0aC5mbG9vcihjb3VudCAvICgzNjAwICogMjQpKVxuICAgICAgICBsZXQgaG91ciA9IE1hdGguZmxvb3IoKGNvdW50IC0gZGF5ICogKDM2MDAgKiAyNCkpIC8gMzYwMCk7XG4gICAgICAgIGxldCBtaW51dGUgPSBNYXRoLmZsb29yKChjb3VudCAtIDM2MDAgKiBob3VyIC0gZGF5ICogKDM2MDAgKiAyNCkpIC8gNjApO1xuICAgICAgICAvLyBsZXQgc2Vjb25kID0gY291bnQgLSBob3VyICogMzYwMCAtIDYwICogbWludXRlO1xuICAgICAgICByZXR1cm4gKGRheSA+IDAgPyBkYXkgKyBcIuWkqVwiIDogXCJcIikgKyAoaG91ciA+IDAgPyBob3VyICsgXCLml7ZcIiA6IFwiXCIpICsgKG1pbnV0ZSA+IDAgPyBtaW51dGUgKyBcIuWIhlwiIDogXCJcIik7XG4gICAgfSxcbiAgICAvKipcbiAgICAgKiDlsIbml7bpl7TmiLPovazljJZcbiAgICAqL1xuICAgIC8v5bCG5pWw57uE5Lit55qE5LiA5Liq5pWw5YC85Yig6ZmkXG4gICAgcmVtb3ZlKGFyciwgdmFsKSB7XG4gICAgICAgIHZhciBpbmRleCA9IGFyci5pbmRleE9mKHZhbCk7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICBhcnIuc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgICAgIHJldHVybiBpbmRleDtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gaW5kZXg7XG4gICAgfSxcbiAgICBjaGFuZ2VUaW1lVG9sb2ModGltZSkge1xuICAgICAgICBsZXQgZGF0ZSA9IG5ldyBEYXRlKHRpbWUpO1xuICAgICAgICBsZXQgeWVhciA9IGRhdGUuZ2V0RnVsbFllYXIoKTtcbiAgICAgICAgbGV0IG1vbnRoID0gZGF0ZS5nZXRNb250aCgpICsgMSA+IDkgPyBkYXRlLmdldE1vbnRoKCkgKyAxIDogXCIwXCIgKyAoZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgICAgIGxldCBkYXkgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGhvdXJzID0gZGF0ZS5nZXRIb3VycygpID4gOSA/IGRhdGUuZ2V0SG91cnMoKSA6IFwiMFwiICsgZGF0ZS5nZXRIb3VycygpO1xuICAgICAgICBsZXQgbWludXRlID0gZGF0ZS5nZXRNaW51dGVzKCkgPiA5ID8gZGF0ZS5nZXRNaW51dGVzKCkgOiBcIjBcIiArIGRhdGUuZ2V0TWludXRlcygpO1xuICAgICAgICBsZXQgc2Vjb25kID0gZGF0ZS5nZXRTZWNvbmRzKCkgPiA5ID8gZGF0ZS5nZXRTZWNvbmRzKCkgOiBcIjBcIiArIGRhdGUuZ2V0U2Vjb25kcygpO1xuICAgICAgICByZXR1cm4geWVhciArIFwiL1wiICsgbW9udGggKyBcIi9cIiArIGRheSArIFwiIFwiICsgaG91cnMgKyBcIjpcIiArIG1pbnV0ZSArIFwiOlwiICsgc2Vjb25kO1xuICAgIH1cbn1cbmNjLlRvb2xzLnVzZXJJbmZvID0ge307Ly/nlKjmiLfkv6Hmga9cbmNjLlRvb2xzLmFkID0ge307Ly/lub/lkYpcbmNjLlRvb2xzLnRyZWFzdXJlID0ge307Ly/lrp3nrrFcbmNjLlRvb2xzLndhbGxldCA9IHt9Oy8v6ZKxXG5jYy5Ub29scy5hZC5hZFRpbWVzID0gMDtcbmNjLlRvb2xzLmFkLmFkRGl2ID0gMTA7Il19
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/CocosBridge.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '744ab+zs0tN95dzpyLYdejR', 'CocosBridge');
// Script/Tools/CocosBridge.ts

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var CocosBridge = {
    JSCallNative: function (action, json) {
        //根据不同的action对接
        switch (action) {
            case "wxLogin": //微信登陆
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "weixin_login", "(Ljava/lang/String;)V", json);
                }
                break;
            case "distinctId": // 数数distinctId
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "distinctId", "(Ljava/lang/String;)V", cc.Tools.userInfo.distinct_id);
                }
                break;
            case "preLoadRewardVideoAd": // 预加载激励视频
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "preLoadRewardVideoAd", "(Ljava/lang/String;)V", "" + json);
                }
                break;
            case "showRewardVideoAd": // 展示激励视频
                if (cc.sys.isNative) {
                    if (cc.Tools.ad.adShowNum > 0) {
                        jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showRewardVideoAd", "(Ljava/lang/String;)V", json);
                    }
                    else {
                        cc.Tools.emitEvent("showTips", "今天观看视频次数已经达到上限");
                    }
                }
                else {
                    cc.Tools.adCallBack("100," + json);
                }
                break;
            case "preLoadInterstitialAd": // 预加载插屏
                break;
            case "showInterstitialAd": // 展示插屏
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showInterstitialAd", "()V");
                }
                break;
            case "preLoadNativeAd": // 预加载原生
                break;
            case "showNativeAd": // 展示原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showNativeAd", "()V");
                }
                break;
            case "hideNativeAd": // 隐藏原生
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideNativeAd", "()V");
                }
                break;
            case "showBannerAd": // 展示banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "showBannerAd", "()V");
                }
                break;
            case "hideBannerAd": // 隐藏banner
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "hideBannerAd", "()V");
                }
                break;
            case "playDot": // 打点
                if (cc.sys.isNative) {
                    jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "playDot", "(Ljava/lang/String)V", json);
                }
                break;
        }
    }
};
exports.default = CocosBridge;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvVG9vbHMvQ29jb3NCcmlkZ2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSxJQUFJLFdBQVcsR0FBRztJQUNkLFlBQVksRUFBWixVQUFhLE1BQWMsRUFBRSxJQUFZO1FBQ3JDLGVBQWU7UUFDZixRQUFRLE1BQU0sRUFBRTtZQUNaLEtBQUssU0FBUyxFQUFDLE1BQU07Z0JBQ2pCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxFQUFFLHVCQUF1QixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUN6SDtnQkFDRCxNQUFNO1lBQ1YsS0FBSyxZQUFZLEVBQUMsZUFBZTtnQkFDN0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxZQUFZLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsV0FBVyxDQUFDLENBQUM7aUJBQ2hKO2dCQUNELE1BQU07WUFDVixLQUFLLHNCQUFzQixFQUFDLFVBQVU7Z0JBQ2xDLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsc0JBQXNCLEVBQUUsdUJBQXVCLEVBQUUsRUFBRSxHQUFHLElBQUksQ0FBQyxDQUFDO2lCQUN0STtnQkFDRCxNQUFNO1lBRVYsS0FBSyxtQkFBbUIsRUFBQyxTQUFTO2dCQUM5QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixJQUFJLEVBQUUsQ0FBQyxLQUFLLENBQUMsRUFBRSxDQUFDLFNBQVMsR0FBRyxDQUFDLEVBQUU7d0JBQzNCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsbUJBQW1CLEVBQUUsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLENBQUM7cUJBQzlIO3lCQUFNO3dCQUNILEVBQUUsQ0FBQyxLQUFLLENBQUMsU0FBUyxDQUFDLFVBQVUsRUFBRSxnQkFBZ0IsQ0FBQyxDQUFDO3FCQUNwRDtpQkFDSjtxQkFBTTtvQkFDSCxFQUFFLENBQUMsS0FBSyxDQUFDLFVBQVUsQ0FBQyxNQUFNLEdBQUcsSUFBSSxDQUFDLENBQUM7aUJBQ3RDO2dCQUNELE1BQU07WUFFVixLQUFLLHVCQUF1QixFQUFDLFFBQVE7Z0JBRWpDLE1BQU07WUFFVixLQUFLLG9CQUFvQixFQUFDLE9BQU87Z0JBQzdCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsb0JBQW9CLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ3ZHO2dCQUNELE1BQU07WUFFVixLQUFLLGlCQUFpQixFQUFDLFFBQVE7Z0JBRTNCLE1BQU07WUFFVixLQUFLLGNBQWMsRUFBQyxPQUFPO2dCQUN2QixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssY0FBYyxFQUFDLE9BQU87Z0JBQ3ZCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsY0FBYyxFQUFFLEtBQUssQ0FBQyxDQUFDO2lCQUNqRztnQkFDRCxNQUFNO1lBRVYsS0FBSyxjQUFjLEVBQUMsV0FBVztnQkFDM0IsSUFBSSxFQUFFLENBQUMsR0FBRyxDQUFDLFFBQVEsRUFBRTtvQkFDakIsR0FBRyxDQUFDLFVBQVUsQ0FBQyxnQkFBZ0IsQ0FBQyxxQ0FBcUMsRUFBRSxjQUFjLEVBQUUsS0FBSyxDQUFDLENBQUM7aUJBQ2pHO2dCQUNELE1BQU07WUFFVixLQUFLLGNBQWMsRUFBQyxXQUFXO2dCQUMzQixJQUFJLEVBQUUsQ0FBQyxHQUFHLENBQUMsUUFBUSxFQUFFO29CQUNqQixHQUFHLENBQUMsVUFBVSxDQUFDLGdCQUFnQixDQUFDLHFDQUFxQyxFQUFFLGNBQWMsRUFBRSxLQUFLLENBQUMsQ0FBQztpQkFDakc7Z0JBQ0QsTUFBTTtZQUVWLEtBQUssU0FBUyxFQUFDLEtBQUs7Z0JBQ2hCLElBQUksRUFBRSxDQUFDLEdBQUcsQ0FBQyxRQUFRLEVBQUU7b0JBQ2pCLEdBQUcsQ0FBQyxVQUFVLENBQUMsZ0JBQWdCLENBQUMscUNBQXFDLEVBQUUsU0FBUyxFQUFFLHNCQUFzQixFQUFFLElBQUksQ0FBQyxDQUFDO2lCQUNuSDtnQkFDRCxNQUFNO1NBQ2I7SUFDTCxDQUFDO0NBQ0osQ0FBQTtBQUNELGtCQUFlLFdBQVcsQ0FBQSIsImZpbGUiOiIiLCJzb3VyY2VSb290IjoiLyIsInNvdXJjZXNDb250ZW50IjpbInZhciBDb2Nvc0JyaWRnZSA9IHtcbiAgICBKU0NhbGxOYXRpdmUoYWN0aW9uOiBzdHJpbmcsIGpzb246IHN0cmluZyk6IHZvaWQge1xuICAgICAgICAvL+agueaNruS4jeWQjOeahGFjdGlvbuWvueaOpVxuICAgICAgICBzd2l0Y2ggKGFjdGlvbikge1xuICAgICAgICAgICAgY2FzZSBcInd4TG9naW5cIjovL+W+ruS/oeeZu+mZhlxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwid2VpeGluX2xvZ2luXCIsIFwiKExqYXZhL2xhbmcvU3RyaW5nOylWXCIsIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgXCJkaXN0aW5jdElkXCI6Ly8g5pWw5pWwZGlzdGluY3RJZFxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZGlzdGluY3RJZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBjYy5Ub29scy51c2VySW5mby5kaXN0aW5jdF9pZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSBcInByZUxvYWRSZXdhcmRWaWRlb0FkXCI6Ly8g6aKE5Yqg6L295r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJwcmVMb2FkUmV3YXJkVmlkZW9BZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBcIlwiICsganNvbik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd1Jld2FyZFZpZGVvQWRcIjovLyDlsZXnpLrmv4DlirHop4bpopFcbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFNob3dOdW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93UmV3YXJkVmlkZW9BZFwiLCBcIihMamF2YS9sYW5nL1N0cmluZzspVlwiLCBqc29uKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLmVtaXRFdmVudChcInNob3dUaXBzXCIsIFwi5LuK5aSp6KeC55yL6KeG6aKR5qyh5pWw5bey57uP6L6+5Yiw5LiK6ZmQXCIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWRDYWxsQmFjayhcIjEwMCxcIiArIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSBcInByZUxvYWRJbnRlcnN0aXRpYWxBZFwiOi8vIOmihOWKoOi9veaPkuWxj1xuXG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJzaG93SW50ZXJzdGl0aWFsQWRcIjovLyDlsZXnpLrmj5LlsY9cbiAgICAgICAgICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIGpzYi5yZWZsZWN0aW9uLmNhbGxTdGF0aWNNZXRob2QoXCJvcmcvY29jb3MyZHgvamF2YXNjcmlwdC9BcHBBY3Rpdml0eVwiLCBcInNob3dJbnRlcnN0aXRpYWxBZFwiLCBcIigpVlwiKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgIGNhc2UgXCJwcmVMb2FkTmF0aXZlQWRcIjovLyDpooTliqDovb3ljp/nlJ9cblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd05hdGl2ZUFkXCI6Ly8g5bGV56S65Y6f55SfXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93TmF0aXZlQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaGlkZU5hdGl2ZUFkXCI6Ly8g6ZqQ6JeP5Y6f55SfXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlTmF0aXZlQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwic2hvd0Jhbm5lckFkXCI6Ly8g5bGV56S6YmFubmVyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJzaG93QmFubmVyQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwiaGlkZUJhbm5lckFkXCI6Ly8g6ZqQ6JePYmFubmVyXG4gICAgICAgICAgICAgICAgaWYgKGNjLnN5cy5pc05hdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBqc2IucmVmbGVjdGlvbi5jYWxsU3RhdGljTWV0aG9kKFwib3JnL2NvY29zMmR4L2phdmFzY3JpcHQvQXBwQWN0aXZpdHlcIiwgXCJoaWRlQmFubmVyQWRcIiwgXCIoKVZcIik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICBjYXNlIFwicGxheURvdFwiOi8vIOaJk+eCuVxuICAgICAgICAgICAgICAgIGlmIChjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAgICAganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwicGxheURvdFwiLCBcIihMamF2YS9sYW5nL1N0cmluZylWXCIsIGpzb24pO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgIH1cbn1cbmV4cG9ydCBkZWZhdWx0IENvY29zQnJpZGdlXG4iXX0=
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Component/FirstPop.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'fbfac3j5SxKOrKnXcdWdomR', 'FirstPop');
// Script/Component/FirstPop.ts

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
var AssetsBundle_1 = require("../Game/AssetsBundle");
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var FirstPop = /** @class */ (function (_super) {
    __extends(FirstPop, _super);
    function FirstPop() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.wrap = null;
        return _this;
    }
    FirstPop_1 = FirstPop;
    FirstPop.prototype.onLoad = function () {
        if (FirstPop_1.Instance === null) {
            FirstPop_1.Instance = this;
        }
        else {
            this.destroy();
            return;
        }
        this.wrap = this.node.getChildByName("wrap");
    };
    FirstPop.prototype.onEnable = function () {
        this.registerEvent();
    };
    FirstPop.prototype.registerEvent = function () {
        var block = this.node.getChildByName("block");
        block.on(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
        var btn = this.wrap.getChildByName("btn");
        btn.on(cc.Node.EventType.TOUCH_END, this.showDetail, this);
    };
    FirstPop.prototype.showDetail = function () {
        cc.Tools.emitEvent("cash", 1);
        this.closeLayer();
    };
    FirstPop.prototype.removeEvent = function () {
        var block = this.node.getChildByName("block");
        block.off(cc.Node.EventType.TOUCH_END, this.closeLayer, this);
    };
    FirstPop.prototype.closeLayer = function () {
        console.log("close");
        this.removeEvent();
        var first = AssetsBundle_1.default.Instance.getAsset("Game", "Prefab/first_pop");
        first.decRef();
        first = null;
        this.node.active = false;
    };
    var FirstPop_1;
    FirstPop.Instance = null;
    FirstPop = FirstPop_1 = __decorate([
        ccclass
    ], FirstPop);
    return FirstPop;
}(cc.Component));
exports.default = FirstPop;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tcG9uZW50L0ZpcnN0UG9wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLHFEQUFnRDtBQUMxQyxJQUFBLEtBQXFCLEVBQUUsQ0FBQyxVQUFVLEVBQWpDLE9BQU8sYUFBQSxFQUFDLFFBQVEsY0FBaUIsQ0FBQztBQUV6QztJQUFzQyw0QkFBWTtJQUFsRDtRQUFBLHFFQXFDQztRQW5DVyxVQUFJLEdBQVcsSUFBSSxDQUFDOztJQW1DaEMsQ0FBQztpQkFyQ29CLFFBQVE7SUFHZix5QkFBTSxHQUFoQjtRQUNJLElBQUksVUFBUSxDQUFDLFFBQVEsS0FBSyxJQUFJLEVBQUU7WUFDNUIsVUFBUSxDQUFDLFFBQVEsR0FBRyxJQUFJLENBQUM7U0FDNUI7YUFBTTtZQUNILElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLE9BQU87U0FDVjtRQUNELElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDakQsQ0FBQztJQUNTLDJCQUFRLEdBQWxCO1FBQ0ksSUFBSSxDQUFDLGFBQWEsRUFBRSxDQUFDO0lBQ3pCLENBQUM7SUFDUyxnQ0FBYSxHQUF2QjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7UUFDM0QsSUFBSSxHQUFHLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDMUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsSUFBSSxDQUFDLFNBQVMsQ0FBQyxTQUFTLEVBQUMsSUFBSSxDQUFDLFVBQVUsRUFBQyxJQUFJLENBQUMsQ0FBQTtJQUM1RCxDQUFDO0lBQ1MsNkJBQVUsR0FBcEI7UUFDSSxFQUFFLENBQUMsS0FBSyxDQUFDLFNBQVMsQ0FBQyxNQUFNLEVBQUMsQ0FBQyxDQUFDLENBQUM7UUFDN0IsSUFBSSxDQUFDLFVBQVUsRUFBRSxDQUFDO0lBQ3RCLENBQUM7SUFDUyw4QkFBVyxHQUFyQjtRQUNJLElBQUksS0FBSyxHQUFHLElBQUksQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzlDLEtBQUssQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxFQUFDLElBQUksQ0FBQyxVQUFVLEVBQUMsSUFBSSxDQUFDLENBQUM7SUFDaEUsQ0FBQztJQUNTLDZCQUFVLEdBQXBCO1FBQ0ksT0FBTyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsQ0FBQztRQUNyQixJQUFJLENBQUMsV0FBVyxFQUFFLENBQUM7UUFDbkIsSUFBSSxLQUFLLEdBQWEsc0JBQVksQ0FBQyxRQUFRLENBQUMsUUFBUSxDQUFDLE1BQU0sRUFBRSxrQkFBa0IsQ0FBQyxDQUFDO1FBQ2pGLEtBQUssQ0FBQyxNQUFNLEVBQUUsQ0FBQztRQUNmLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDYixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7SUFDN0IsQ0FBQzs7SUFuQ2EsaUJBQVEsR0FBYSxJQUFJLENBQUM7SUFEdkIsUUFBUTtRQUQ1QixPQUFPO09BQ2EsUUFBUSxDQXFDNUI7SUFBRCxlQUFDO0NBckNELEFBcUNDLENBckNxQyxFQUFFLENBQUMsU0FBUyxHQXFDakQ7a0JBckNvQixRQUFRIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IEFzc2V0c0J1bmRsZSBmcm9tIFwiLi4vR2FtZS9Bc3NldHNCdW5kbGVcIjtcbmNvbnN0IHtjY2NsYXNzLHByb3BlcnR5fSA9IGNjLl9kZWNvcmF0b3I7XG5AY2NjbGFzc1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRmlyc3RQb3AgZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIHB1YmxpYyBzdGF0aWMgSW5zdGFuY2U6IEZpcnN0UG9wID0gbnVsbDtcbiAgICBwcml2YXRlIHdyYXA6Y2MuTm9kZSA9IG51bGw7XG4gICAgcHJvdGVjdGVkIG9uTG9hZCgpOiB2b2lkIHtcbiAgICAgICAgaWYgKEZpcnN0UG9wLkluc3RhbmNlID09PSBudWxsKSB7XG4gICAgICAgICAgICBGaXJzdFBvcC5JbnN0YW5jZSA9IHRoaXM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLndyYXAgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgb25FbmFibGUoKTogdm9pZCB7XG4gICAgICAgIHRoaXMucmVnaXN0ZXJFdmVudCgpO1xuICAgIH1cbiAgICBwcm90ZWN0ZWQgcmVnaXN0ZXJFdmVudCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGJsb2NrID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmxvY2tcIik7XG4gICAgICAgIGJsb2NrLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLmNsb3NlTGF5ZXIsdGhpcyk7XG4gICAgICAgIGxldCBidG4gPSB0aGlzLndyYXAuZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIik7XG4gICAgICAgIGJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsdGhpcy5zaG93RGV0YWlsLHRoaXMpXG4gICAgfVxuICAgIHByb3RlY3RlZCBzaG93RGV0YWlsKCk6dm9pZHtcbiAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiY2FzaFwiLDEpO1xuICAgICAgICB0aGlzLmNsb3NlTGF5ZXIoKTtcbiAgICB9XG4gICAgcHJvdGVjdGVkIHJlbW92ZUV2ZW50KCk6IHZvaWQge1xuICAgICAgICBsZXQgYmxvY2sgPSB0aGlzLm5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja1wiKTtcbiAgICAgICAgYmxvY2sub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCx0aGlzLmNsb3NlTGF5ZXIsdGhpcyk7XG4gICAgfVxuICAgIHByb3RlY3RlZCBjbG9zZUxheWVyKCk6IHZvaWQge1xuICAgICAgICBjb25zb2xlLmxvZyhcImNsb3NlXCIpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50KCk7XG4gICAgICAgIGxldCBmaXJzdDpjYy5QcmVmYWIgPSBBc3NldHNCdW5kbGUuSW5zdGFuY2UuZ2V0QXNzZXQoXCJHYW1lXCIsIFwiUHJlZmFiL2ZpcnN0X3BvcFwiKTtcbiAgICAgICAgZmlyc3QuZGVjUmVmKCk7XG4gICAgICAgIGZpcnN0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5ub2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Component/Main.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '0b3c6TexiJECJVZVa43L+VS', 'Main');
// Script/Component/Main.ts

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
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var CocosBridge_1 = require("../Tools/CocosBridge");
// import Tools from "./Tools";
var _a = cc._decorator, ccclass = _a.ccclass, property = _a.property;
var self = null;
var Main = /** @class */ (function (_super) {
    __extends(Main, _super);
    function Main() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        // @property(cc.Node)
        _this.background = null;
        // @property(cc.Node)
        _this.blockBackground = null;
        _this.ground = null;
        _this.content = null;
        _this.cashInfo = null;
        _this.userInfo = null;
        _this.scoreInfo = null;
        _this.barrageLayer = null;
        _this.getCashLayer = null;
        _this.settingLayer = null;
        _this.saveCashLayer = null;
        // @property(cc.Node)
        _this.lotteryLayer = null;
        // @property(cc.Node)
        _this.stealLayer = null;
        _this.signLayer = null;
        _this.popSuccessLayer = null;
        _this.popDeleteLayer = null;
        _this.popNewLayer = null;
        _this.ticketLayer = null;
        _this.ticketTenLayer = null;
        _this.popSuperLayer = null;
        _this.popSecretLayer = null;
        _this.popStealMarkLayer = null;
        _this.packet = null;
        _this.blockNull = null;
        _this.red = null;
        _this.green = null;
        _this.yellow = null;
        _this.blue = null;
        _this.pink = null;
        _this.good = null;
        _this.great = null;
        _this.excellent = null;
        _this.amazing = null;
        _this.unbelievable = null;
        _this.desEffect = null;
        _this.effectAudio = [];
        _this.popDeleteType = [];
        _this.liziBlock = [];
        _this.tiger = [];
        _this.pop_red = null;
        _this.a = [];
        _this.b = [];
        _this.deletePosArr = [];
        _this.difficulty = 3;
        _this.Delete_num = 0;
        _this.vh = 110;
        _this.lock = false;
        _this.targetScore = 1000;
        _this.curScore = 0;
        _this.level = 0;
        _this.clickRedNumber = 0;
        _this.clickOnce = true;
        _this.clickNumber = 0;
        _this.countTime = 0;
        _this.canClickRed = true;
        _this.clickRedArr = [];
        _this.startClickTime = 0;
        _this.isOverGame = false;
        _this._count = 0;
        _this.showSecretTimes = 0;
        _this.clickPos = cc.v3(0, 0);
        _this.addTicket = 0;
        _this.barrageArr = [];
        _this.barrageSpeed = 2;
        _this.barrageMove = false;
        _this.barrageLock = false;
        _this.superTime = 0;
        _this.special = false;
        return _this;
    }
    Main.prototype.onLoad = function () {
        var _this = this;
        // 初始化参数
        self = this;
        cc.Tools.screenAdapter();
        cc.Tools.Event.on("init", this.refreshUserInfo, this);
        cc.Tools.Event.on("getTicket", this.showTicketLayer, this);
        cc.Tools.Event.on("cash", this.showGetCashLayer, this);
        cc.Tools.Event.on("clickRed", this.canClickRedFunc, this);
        cc.Tools.Event.on("showPacket", this.showPacket, this);
        cc.Tools.Event.on("refreshWallet", this.refreshWallet, this); //刷新金钱
        //当视频缓存好通知所有按钮可以点了 否则不可点击
        cc.Tools.Event.on("observerAllBtn", this.observerAllBtn, this); //刷新金钱
        cc.Tools.adTimes = 0;
        this.ground = cc.find("Canvas/background");
        this.content = cc.find("Canvas/content");
        this.background = this.ground.getChildByName("blockColour");
        this.blockBackground = this.ground.getChildByName("blockNull");
        var infoLayer = this.content.getChildByName("info_layer");
        this.cashInfo = infoLayer.getChildByName("cash_info");
        this.userInfo = infoLayer.getChildByName("user_info");
        this.scoreInfo = infoLayer.getChildByName("score_info");
        this.barrageLayer = this.node.getChildByName("barrage_layer");
        this.countTime = new Date().getTime();
        this.preloadPrefab();
        this.initUserInfo();
        this.shieldBtn();
        //获取当前手机是否有不正常应用
        this.getIllegalityApp();
        //刷新一下当前的金钱数量
        this.refreshWallet();
        var box = this.scoreInfo.getChildByName("box");
        cc.Tools.breatheAnim(box);
        box.on(cc.Node.EventType.TOUCH_END, function () {
            _this.showPopDeleteLayer(1, 10);
        }, this);
        this.scheduleOnce(function () {
            _this.loadPrefab('Prefab/barrage').then(function (prefab) {
                var barrage = cc.instantiate(prefab);
                self.barrageLayer.addChild(barrage);
                barrage.x = 1000;
                _this.barrage = barrage;
                _this.getBarrageInfo(true);
            });
        }, 1);
        //退出游戏的时候记录一下
        // 
        cc.game.on(cc.game.EVENT_HIDE, function () {
            console.log("cocos--EVENT_HIDE--退出游戏");
            //当前记录一个时间
            var date = new Date().getTime();
            cc.sys.localStorage.setItem("lastExit", Math.floor(date / 1000));
        });
        cc.Button.prototype["_onTouchBegan"] = function (event) {
            if (!this.interactable || !this.enabledInHierarchy)
                return;
            this._pressed = true;
            this._updateState();
            event.stopPropagation();
            cc.audioEngine.play(self.effectAudio[3], false, 1);
            console.log("重写以前的button");
            cc.tween(this.node).to(1, { scale: 1.1 }).start;
        };
    };
    //监听所有的视频缓存--->如果没有缓存好--或者缓存失败--所有视频按钮置灰--缓存成功变亮
    Main.prototype.observerAllBtn = function (closeBtn) {
    };
    //获取非法App
    Main.prototype.getIllegalityApp = function () {
        if (cc.sys.isNative) {
            //获取非系统应用信息列表
            var unSysList = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getInstallAppList", "()Ljava/lang/String;");
            // console.log("cocos--unSysList---",unSysList.length+"----类型---"+typeof(unSysList));
            // let unSysList = ``+[{"appName":"荣耀俱乐部1","appPackageName":"com.honor.club"},{"appName":"疯狂乐逍遥","appPackageName":"com.game.fklxy"},{"appName":"tt_ad_mediation","appPackageName":"com.header.app.untext"},{"appName":"微信","appPackageName":"com.tencent.mm"},{"appName":"百度","appPackageName":"com.baidu.searchbox"},{"appName":"荣耀商城","appPackageName":"com.hihonor.vmall"},{"appName":"QQ浏览器","appPackageName":"com.tencent.mtt"},{"appName":"拼多多","appPackageName":"com.xunmeng.pinduoduo"},{"appName":"今日头条","appPackageName":"com.ss.android.article.news"},{"appName":"QQ","appPackageName":"com.tencent.mobileqq"},{"appName":"刷机精灵连接组件","appPackageName":"com.shuame.sprite"},{"appName":"百度地图","appPackageName":"com.baidu.BaiduMap"},{"appName":"去哪儿旅行","appPackageName":"com.Qunar"},{"appName":"消消变首富","appPackageName":"com.zhima.xxbsf"},{"appName":"芝麻消消乐","appPackageName":"com.zhima.zmxxl"}]
            //获取系统应用信息列表
            var SysList = jsb.reflection.callStaticMethod("org/cocos2dx/javascript/AppActivity", "getSystemAppList", "()Ljava/lang/String;");
            // console.log("cocos--SysList---",SysList.length+"----类型---"+typeof(SysList));
            // let SysList = ``+[{"appName":"精品推荐1","appPackageName":"com.huawei.hifolder"},{"appName":"com.android.cts.priv.ctsshim","appPackageName":"com.android.cts.priv.ctsshim"},{"appName":"相机","appPackageName":"com.huawei.camera"},{"appName":"玩机技巧","appPackageName":"com.huawei.android.tips"},{"appName":"Android Services Library","appPackageName":"com.google.android.ext.services"},{"appName":"HwSynergy","appPackageName":"com.huawei.synergy"},{"appName":"华为桌面","appPackageName":"com.huawei.android.launcher"},{"appName":"华为音乐","appPackageName":"com.android.mediacenter"},{"appName":"通话/信息存储","appPackageName":"com.android.providers.telephony"},{"appName":"银联可信服务安全组件","appPackageName":"com.unionpay.tsmservice"},{"appName":"UEInfoCheck","appPackageName":"com.huawei.android.UEInfoCheck"},{"appName":"通话录音","appPackageName":"com.android.phone.recorder"},{"appName":"日历存储","appPackageName":"com.android.providers.calendar"}]
            var sendData = {
                unsys_list: unSysList,
                sys_list: SysList
            };
            // console.log("cocos---getIllegalityApp--", JSON.stringify(sendData))
            cc.Tools.sendRequest("UserDev", "POST", sendData).then(function (res) {
                console.log("cocos-----UserDev--", JSON.stringify(res));
            });
        }
    };
    //获取ad的信息
    Main.prototype.getAd = function () {
        var _this = this;
        var date = new Date();
        var year = date.getFullYear();
        var month = date.getMonth();
        var day = date.getDate();
        var dateStr = year + "" + month + "" + day;
        // console.log("")
        var markDate = cc.sys.localStorage.getItem("markDate");
        if (markDate !== dateStr) {
            //如果第二天
            cc.Tools.getFreeze();
            cc.sys.localStorage.setItem("adTimes", 0);
            cc.Tools.ad.adTimes = 0;
            cc.sys.localStorage.setItem("markDate", dateStr);
        }
        else {
            cc.Tools.ad.adTimes = cc.sys.localStorage.getItem("adTimes");
        }
        console.log("cocos----今天累计观看视频次数=", cc.Tools.ad.adTimes);
        cc.Tools.sendRequest("Conf", "GET", {}).then(function (res) {
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
            });
            if (cc.Tools.ad.adTimes <= cc.Tools.ad.adDiv) {
                if (cc.Tools.ad.adSmall) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adSmall;
                }
            }
            else {
                if (cc.Tools.ad.adBig) {
                    cc.Tools.ad.adPosId = cc.Tools.ad.adBig;
                }
            }
            _this.initAward();
        }).catch(function (err) {
            console.log("cocos----广告err--" + err);
        });
    };
    //判断是否屏蔽
    Main.prototype.shieldBtn = function () {
        var _this = this;
        if (cc.sys.localStorage.getItem("showBtn")) {
            var val = cc.sys.localStorage.getItem("showBtn");
            var btnLayer = this.content.getChildByName("btn_layer");
            for (var i = 3; i <= 8; i++) {
                var btn = btnLayer.getChildByName("btn_" + i);
                btn.active = val == 1 ? false : true;
            }
            if (val == 100) {
                this.showStealMarkLayer();
            }
        }
        else {
            cc.Tools.sendRequest("RegionConf", "GET", {}).then(function (res) {
                if (res.data.status === 1) {
                    //不显示
                    cc.sys.localStorage.setItem("showBtn", 1);
                    var btnLayer = _this.content.getChildByName("btn_layer");
                    for (var i = 3; i <= 8; i++) {
                        var btn = btnLayer.getChildByName("btn_" + i);
                        btn.active = false;
                    }
                }
                else if (res.data.status === 100) {
                    //显示
                    cc.sys.localStorage.setItem("showBtn", 100);
                    //显示新手奖励界面
                    _this.showNewLayer();
                }
            }).catch(function (err) {
                console.log("cocos----屏蔽err--" + err);
            });
        }
    };
    Main.prototype.showStealMarkLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popStealMarkLayer) {
            this.loadPrefab('Prefab/stealMark').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popStealMarkLayer = layer;
                self.node.addChild(layer);
                self.popStealMarkLayer.active = true;
            });
        }
        else {
            this.popStealMarkLayer.active = true;
        }
    };
    //获取弹幕信息
    Main.prototype.getBarrageInfo = function (isFirst) {
        var _this = this;
        cc.Tools.sendRequest("Trend", "GET", {}).then(function (res) {
            var items = res.data.items;
            self.barrageArr = __spreadArrays(self.barrageArr, items);
            // console.log("self.barrageArr", self.barrageArr);
            if (isFirst) {
                _this.barrageMove = true;
                var data = self.barrageArr.shift();
                _this.barrage.getComponent("Barrage").setBarrage(data);
            }
            _this.barrageLock = false;
        }).catch(function (err) {
            console.log("cocos----弹幕err--" + err);
        });
    };
    Main.prototype.update = function (dt) {
        if (this.barrageMove && this.barrage && cc.sys.localStorage.getItem("showBtn") == 100) {
            var box = this.scoreInfo.getChildByName("box");
            this.barrage.x -= this.barrageSpeed;
            if (this.barrage.x < -700) {
                var data = self.barrageArr.shift();
                this.barrage.getComponent("Barrage").setBarrage(data);
            }
            if (this.barrageArr.length <= 0 && !this.barrageLock) {
                this.barrageLock = true;
                this.getBarrageInfo(false);
            }
            if (box.x < 700) {
                box.x += 1;
            }
            else {
                box.x = -700;
            }
            if (this.superTime > 30) {
                this.superTime = 0;
                this.showSuperLayer();
            }
            else {
                this.superTime += dt;
            }
            // if(this.superTime>5){
            //     console.log("update");
            // }
        }
    };
    /**
     * 初始化数数
    */
    Main.prototype.initShuShu = function () {
        // 数数打点
        cc.Tools.shuShuDot();
        cc.Tools.setDistinctId();
        cc.Tools.setUserId();
    };
    /**
    * 处理小数精度问题
    * @returns
    */
    Main.prototype.handleNumber = function (numb) {
        // 先讲数字转换成字符串
        if (numb) {
            var str = "" + numb;
            var key = str.split(".");
            var newKey = key[0] + "." + key[1].slice(0, 2);
            return newKey;
        }
        else {
            return "0";
        }
    };
    /**
     * 初始化头像
     * @param url:头像url
     * @param vip:Vip等级
    */
    Main.prototype.addAvatar = function (url, vip) {
        // cc.Tools.userInfo.next_grade_rate = 0.5;
        var bar = self.userInfo.getChildByName("vip_bar").getComponent(cc.Sprite);
        bar.fillRange = cc.Tools.userInfo.next_grade_rate;
        var avatarJs = self.userInfo.getChildByName("avatar").getComponent("Avatar");
        avatarJs.loadUrl(url).then(function (res) {
            avatarJs.setAvatar(res, vip);
        });
    };
    // 初始化userInfo
    Main.prototype.initUserInfo = function () {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then(function (res) {
            cc.Tools.userInfo = res.data;
            _this.userInfo.getChildByName("user_name").getComponent(cc.Label).string = res.data.nick_name;
            _this.initShuShu();
            _this.init();
            _this.addAvatar(res.data.avatar_url, cc.Tools.userInfo.grade_id);
            //判断缓存的哪个激励视频
            _this.getAd();
            // 显示冻结红包的进度条
            var freezenBtn = _this.content.getChildByName("btn_layer").getChildByName("btn_3");
            var freezenRate = cc.Tools.userInfo.active_rate.split("|");
            var freezenBar = freezenBtn.getChildByName("bar").getComponent(cc.ProgressBar);
            freezenBar.progress = Number(freezenRate[0]) / Number(freezenRate[1]);
            freezenBtn.getChildByName("text").getComponent(cc.Label).string = freezenRate[0] + "/" + freezenRate[1];
            if (freezenRate[0] === freezenRate[1]) {
                freezenBtn.runAction(cc.repeatForever(cc.sequence(cc.rotateTo(0.1, 30), cc.rotateTo(0.1, 0), cc.rotateTo(0.1, -30), cc.rotateTo(0.1, 0), cc.delayTime(2))));
            }
            // 增加一个定时器 一定时间没有看视频 主动弹出视频
            if (cc.sys.localStorage.getItem("showBtn") == 100) {
                _this.schedule(function () {
                    cc.Tools.sendRequest("AdIntervalShow", "GET", {}).then(function (res) {
                        if (res.data.is_show && _this.barrageMove) {
                            cc.Tools.showTips(_this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                                CocosBridge_1.default.JSCallNative("showRewardVideoAd", "12");
                            });
                        }
                    });
                }, cc.Tools.userInfo.ad_show_interval_second);
            }
        }).catch(function (err) {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        });
    };
    /**
     * @param isReload ----是否加载游戏
     */
    Main.prototype.refreshUserInfo = function (isReload) {
        var _this = this;
        var sendData = {};
        cc.Tools.sendRequest("UserInfo", "GET", sendData).then(function (res) {
            _this.addCustomBarrage(res.data);
            cc.Tools.userInfo = res.data;
            //将视频暴击加入弹幕中
            _this.barrageMove = true;
            _this.superTime = 0;
            if (isReload) {
                _this.init();
            }
        }).catch(function (err) {
            console.log("err", err);
            cc.find("Canvas/lose").active = true;
            if (err === "token验证失败,请重新登陆" && cc.sys.isNative) {
                // 重新登陆
                cc.director.loadScene('Login');
                cc.sys.localStorage.setItem("token", "");
            }
        });
    };
    //像弹幕里面增加新的信息
    Main.prototype.addCustomBarrage = function (res) {
        if (cc.Tools.userInfo.num_award_got < res.num_award_got) {
            //看了新视频 想弹幕数组中添加信息
            var indexRed = 0, indexCrit = 0, config = cc.Tools.ad.config;
            console.log("ad config ", config);
            for (var i = 0; i < config.length; i++) {
                var _config = config[i];
                if (res.num_award_got <= _config.num) {
                    indexRed = _config.num;
                    indexCrit = _config.rate;
                    break;
                }
            }
            var info = {};
            info["data"] = "\u7B2C" + indexRed + "\u4E2A\u7EA2\u5305,\u66B4\u51FB" + indexCrit + "%\uFF08\u5DF2\u9886\u53D6" + res.num_award_got + "/" + indexRed + "\uFF09";
            info["action"] = "tip";
            info["user"] = {};
            info["refer_user"] = {};
            info["user"].avatar = cc.Tools.userInfo.avatar_url;
            info["user"].grade_id = cc.Tools.userInfo.grade_id;
            this.barrageArr.unshift(info);
            var awrad = this.content.getChildByName("award_bar");
            var progress_bar = awrad.getChildByName("progress_bar");
            var bar = progress_bar.getComponent(cc.ProgressBar);
            bar.progress = Number((res.num_award_got / indexRed).toFixed(2));
            var lbl = progress_bar.getChildByName("lbl").getComponent(cc.Label);
            lbl.string = res.num_award_got + "/" + indexRed + ")";
            var layout = awrad.getChildByName("layout");
            var layoutLbl = layout.getChildByName("lbl").getComponent(cc.RichText);
            layoutLbl.string = "<color=#FFCA00>\u7B2C</c><color=#FB5A38>" + indexRed + "</color><color=#FFCA00>\u7EA2\u5305\u7FFB</c><color=#FB5A38>" + indexCrit + "%</color><color=#FFCA00>\u500D\u66B4\u51FB\u5956\u52B1</c>";
            layout.scaleX = 0;
            layout.stopAllActions();
            cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
        }
    };
    //初始化award
    Main.prototype.initAward = function () {
        var indexRed = 0, indexCrit = 0, config = cc.Tools.ad.config;
        for (var i = 0; i < config.length; i++) {
            var _config = config[i];
            if (cc.Tools.userInfo.num_award_got <= _config.num) {
                indexRed = _config.num;
                indexCrit = _config.rate;
                break;
            }
        }
        var awrad = this.content.getChildByName("award_bar");
        var progress_bar = awrad.getChildByName("progress_bar");
        var bar = progress_bar.getComponent(cc.ProgressBar);
        bar.progress = Number((cc.Tools.userInfo.num_award_got / indexRed).toFixed(2));
        var lbl = progress_bar.getChildByName("lbl").getComponent(cc.Label);
        lbl.string = cc.Tools.userInfo.num_award_got + "/" + indexRed;
        var layout = awrad.getChildByName("layout");
        var layoutLbl = layout.getChildByName("lbl").getComponent(cc.RichText);
        layoutLbl.string = "<color=#FFCA00>\u7B2C</c><color=#FB5A38>" + indexRed + "</color><color=#FFCA00>\u7EA2\u5305\u7FFB</c><color=#FB5A38>" + indexCrit + "%</color><color=#FFCA00>\u500D\u66B4\u51FB\u5956\u52B1</c>";
        layout.scaleX = 0;
        layout.stopAllActions();
        cc.tween(layout).to(0.5, { scaleX: 1 }).delay(4).to(0.5, { scaleX: 0 }).start();
    };
    /**
     * 刷新钱的接口
    */
    Main.prototype.refreshWallet = function () {
        var sendData = {};
        cc.Tools.sendRequest("Wallet", "GET", sendData).then(function (res) {
            console.log("cocos----刷新现有金钱----", JSON.stringify(res));
            cc.Tools.wallet.amount = res.data.amount;
            cc.Tools.wallet.save_amount = res.data.save_amount;
            cc.Tools.wallet.save_freeze_amount = res.data.save_freeze_amount;
            self.cashInfo.getChildByName("text").getComponent(cc.Label).string = res.data.amount;
            if (self.lotteryLayer) {
                self.lotteryLayer.getChildByName("wrap").getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
            }
            if (self.stealLayer) {
                var wrap = self.stealLayer.getChildByName("wrap");
                self.stealLayer.getChildByName("total_cash").getChildByName("lbl").getComponent(cc.Label).string = res.data.amount;
                var down = wrap.getChildByName("down");
                var todayCash = down.getChildByName("today_cash");
                var todayCashText = todayCash.getChildByName("text").getComponent(cc.Label);
                todayCashText.string = res.data.save_amount;
                var tomorrowCash = down.getChildByName("tomorrow_cash");
                var tomorrowCashText = tomorrowCash.getChildByName("text").getComponent(cc.Label);
                tomorrowCashText.string = res.data.save_freeze_amount;
            }
        });
    };
    /**
     * 预加载prefab
     */
    Main.prototype.preloadPrefab = function () {
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
    };
    Main.prototype.loadPrefab = function (url) {
        return new Promise(function (resolve, reject) {
            cc.resources.load(url, cc.Prefab, function (err, prefab) {
                if (prefab) {
                    resolve(prefab);
                }
                else {
                    reject(err);
                }
            });
        });
    };
    Main.prototype.start = function () {
        // 注册点击事件
        this.registerEvent();
    };
    Main.prototype.registerEvent = function () {
        var btnLayer = this.content.getChildByName("btn_layer");
        var btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"];
        for (var i = 1; i <= 8; i++) {
            var btn = btnLayer.getChildByName("btn_" + i);
            btn.on(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        var secretBtn = cc.find("Canvas/secret");
        secretBtn.on(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this);
        var freshBtn = cc.find("Canvas/lose/fresh_btn");
        freshBtn.on(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
        var getCashBtn = this.cashInfo.getChildByName("btn");
        getCashBtn.on(cc.Node.EventType.TOUCH_END, this.showGetCashLayer, this);
    };
    Main.prototype.removeEvent = function () {
        var btnLayer = this.content.getChildByName("btn_layer");
        var btnType = ["showSetLayer", "showGetCashLayer", "showUnFreezeLayer", "showStealLayer", "showLotteryleLayer", "clickRed", "showSignLayer", "touchSnow"];
        for (var i = 1; i <= 8; i++) {
            var btn = btnLayer.getChildByName("btn_" + i);
            btn.off(cc.Node.EventType.TOUCH_END, this[btnType[i - 1]], this);
        }
        var secretBtn = cc.find("Canvas/secret");
        secretBtn.off(cc.Node.EventType.TOUCH_END, this.showSecretLayer, this);
        var freshBtn = cc.find("Canvas/lose/fresh_btn");
        freshBtn.off(cc.Node.EventType.TOUCH_END, this.refreshUserInfo, this);
        var getCashBtn = this.cashInfo.getChildByName("btn");
        getCashBtn.off(cc.Node.EventType.TOUCH_END, this.showGetCashLayer, this);
    };
    Main.prototype.touchSnow = function () {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
            return;
        }
        else {
            cc.Tools.lock = true;
            setTimeout(function () {
                cc.Tools.lock = false;
            }, 3000);
        }
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_snowman_1" });
        cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
            CocosBridge_1.default.JSCallNative("showRewardVideoAd", "3");
        });
    };
    //方向 1是现金红包 2是存钱罐
    Main.prototype.showPacket = function (obj) {
        var end = obj.dir === 1 ? this.cashInfo : this.content.getChildByName("btn_layer").getChildByName("btn_4");
        this.showPacketAnim(10, 0.01, 200, cc.v3(360, 640), end, function () {
            cc.Tools.Event.emit("refreshWallet");
            if (obj.videoType === 4) {
                cc.Tools.emitEvent("init", true);
            }
            else if (obj.videoType === 9) {
                cc.Tools.emitEvent("init", false);
            }
        });
    };
    Main.prototype.showSecretLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.showSecretTimes++;
        if (this.showSecretTimes >= 3) {
            this.showSecretTimes = 0;
            this.barrageMove = false;
            if (!this.popSecretLayer) {
                this.loadPrefab('Prefab/secretLayer').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popSecretLayer = layer;
                    self.node.addChild(layer);
                    self.popSecretLayer.active = true;
                });
            }
            else {
                this.popSecretLayer.active = true;
            }
        }
    };
    Main.prototype.touchRed = function () {
        if (cc.Tools.userInfo.up_level_num_not_get) {
            // 点击加锁
            if (cc.Tools.lock) {
                cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
                return;
            }
            else {
                cc.Tools.lock = true;
                setTimeout(function () {
                    cc.Tools.lock = false;
                }, 3000);
            }
            CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clickredbag_1" });
            if (cc.Tools.userInfo.new_free_level_times) {
                var sendData = {
                    type: 4,
                    ts: new Date().getTime()
                };
                cc.Tools.sendRequest("NewAward", "POST", sendData).then(function (res) {
                    cc.Tools.emitEvent("getTicket", { ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 4 });
                });
            }
            else {
                cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                    CocosBridge_1.default.JSCallNative("showRewardVideoAd", "4");
                });
            }
        }
    };
    /**
    * popSuccess界面
    */
    Main.prototype.showPopSuccessLayer = function () {
        var _this = this;
        this.scheduleOnce(function () {
            _this.lock = false;
            _this.barrageMove = false;
            cc.audioEngine.play(_this.effectAudio[4], false, 1);
            if (!_this.popSuccessLayer) {
                _this.loadPrefab('Prefab/popSuccess').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popSuccessLayer = layer;
                    self.node.addChild(layer);
                    var js = self.popSuccessLayer.getComponent("PopSuccess");
                    var num;
                    if (_this.curScore > 6000) {
                        num = 3;
                    }
                    else if (_this.curScore < 6000 && _this.curScore > 3000) {
                        num = 2;
                    }
                    else {
                        num = 1;
                    }
                    self.popSuccessLayer.active = true;
                    js.setStar(num);
                });
            }
            else {
                // this.popSuccessLayer.active = true;
                var js = self.popSuccessLayer.getComponent("PopSuccess");
                var num = void 0;
                if (_this.curScore > 6000) {
                    num = 3;
                }
                else if (_this.curScore < 6000 && _this.curScore > 3000) {
                    num = 2;
                }
                else {
                    num = 1;
                }
                self.popSuccessLayer.active = true;
                js.setStar(num);
            }
        }, 0.5);
    };
    /**
   * popDelete界面
   * @param  type 1---气泡红包 2---消除红包
   * @param videoType ---视频类型
   */
    Main.prototype.showPopDeleteLayer = function (type, videoType) {
        var _this = this;
        this.scheduleOnce(function () {
            _this.lock = false;
            _this.barrageMove = false;
            // cc.audioEngine.play(this.effectAudio[3], false, 1);
            if (!_this.popDeleteLayer) {
                _this.loadPrefab('Prefab/popDelete').then(function (prefab) {
                    var layer = cc.instantiate(prefab);
                    self.popDeleteLayer = layer;
                    self.node.addChild(layer);
                    self.popDeleteLayer.active = true;
                    var title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                    title.spriteFrame = _this.popDeleteType[type - 1];
                    cc.Tools.emitEvent("videoType", videoType);
                });
            }
            else {
                _this.popDeleteLayer.active = true;
                var title = self.popDeleteLayer.getChildByName("wrap").getChildByName("title").getComponent(cc.Sprite);
                title.spriteFrame = _this.popDeleteType[type - 1];
                cc.Tools.emitEvent("videoType", videoType);
            }
        }, 0.5);
    };
    /**
     * 签到奖励
     */
    Main.prototype.showSignLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clicksign_1" });
        if (!this.signLayer) {
            this.loadPrefab('Prefab/sign').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.signLayer = layer;
                self.node.addChild(layer);
                self.signLayer.active = true;
            });
        }
        else {
            this.signLayer.active = true;
        }
    };
    /**
     * 新手奖励
     */
    Main.prototype.showNewLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popNewLayer) {
            this.loadPrefab('Prefab/popNew').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popNewLayer = layer;
                self.node.addChild(layer);
                self.popNewLayer.active = true;
            });
        }
        else {
            this.popNewLayer.active = true;
        }
    };
    /**
     * 超级红包界面
     */
    Main.prototype.showSuperLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        this.barrageMove = false;
        if (!this.popSuperLayer) {
            this.loadPrefab('Prefab/super').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.popSuperLayer = layer;
                self.node.addChild(layer);
                self.popSuperLayer.active = true;
            });
        }
        else {
            this.popSuperLayer.active = true;
        }
    };
    /**
    * ticket界面
    * @param type 来自几级界面
    */
    Main.prototype.showTicketLayer = function (ticketInfo) {
        var _this = this;
        console.log("cocos--获得奖励的信息---", JSON.stringify(ticketInfo));
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        if (!this.ticketLayer) {
            this.loadPrefab('Prefab/ticket').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.ticketLayer = layer;
                self.ticketLayer.zIndex = 9999;
                self.node.addChild(layer);
                self.ticketLayer.active = true;
                var ticketJs = _this.ticketLayer.getComponent("Ticket");
                ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType);
            });
        }
        else {
            this.ticketLayer.active = true;
            var ticketJs = this.ticketLayer.getComponent("Ticket");
            ticketJs.setTicket(ticketInfo.ticket, ticketInfo.add, ticketInfo.type, ticketInfo.videoType);
        }
        // this.refreshUserInfo(false);
    };
    /**
    * 解冻红包界面
    */
    Main.prototype.showUnFreezeLayer = function (e) {
        var target = e.target;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_icetable_1" });
        // 解冻红包新需求
        cc.Tools.sendRequest("ActiveInfo", "GET", {}).then(function (res) {
            var msg = cc.find("Canvas/msg");
            msg.active = true;
            msg.opacity = 0;
            var _msg = msg.getChildByName("lbl").getComponent(cc.Label);
            _msg.string = res.data.tip;
            msg.stopAllActions();
            msg.runAction(cc.sequence(cc.fadeIn(0.5), cc.delayTime(1), cc.fadeOut(0.5), cc.callFunc(function () {
                msg.active = false;
            })));
            if (res.data.freeze_amount > 0) {
                // this.showPacket();
                cc.Tools.emitEvent("getTicket", { ticket: res.data.freeze_amount, add: 0, type: 1, videoType: 1 });
                target.stopAllActions();
                target.angle = 0;
            }
        });
    };
    /**
     * 存钱罐界面
     */
    Main.prototype.showSaveCashLayer = function () {
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_Piggybank_1" });
        if (!this.saveCashLayer) {
            this.loadPrefab('Prefab/saveCash').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.saveCashLayer = layer;
                self.node.addChild(layer);
                var js = self.saveCashLayer.getComponent("SaveCash");
                js.isFirstShow = true;
                self.saveCashLayer.active = true;
            });
        }
        else {
            this.saveCashLayer.active = true;
        }
    };
    /**
    * 设置界面
    */
    Main.prototype.showSetLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_clicksetting_1" });
        if (!this.settingLayer) {
            this.loadPrefab('Prefab/setting').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.settingLayer = layer;
                self.node.addChild(layer);
                self.settingLayer.active = true;
            });
        }
        else {
            this.settingLayer.active = true;
        }
    };
    /**
     * 提现界面
     */
    Main.prototype.showGetCashLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_cash_1" });
        if (!this.getCashLayer) {
            this.loadPrefab('Prefab/getCash').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.getCashLayer = layer;
                self.node.addChild(layer);
                self.getCashLayer.active = true;
            });
        }
        else {
            this.getCashLayer.active = true;
        }
    };
    /**
     * 转盘界面
     */
    Main.prototype.showLotteryleLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_turntable_1" });
        var btnLayer = this.content.getChildByName("btn_layer");
        var boxBtn = btnLayer.getChildByName("btn_5");
        boxBtn.getChildByName("red").active = false;
        if (!this.lotteryLayer) {
            this.loadPrefab('Prefab/lottery').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.lotteryLayer = layer;
                self.node.addChild(layer);
                self.lotteryLayer.active = true;
            });
        }
        else {
            this.lotteryLayer.active = true;
        }
    };
    /**
     * 大乱斗界面
    */
    Main.prototype.showStealLayer = function () {
        this.barrageMove = false;
        // cc.audioEngine.play(this.effectAudio[3], false, 1);
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_steal_1" });
        if (!this.stealLayer) {
            this.loadPrefab('Prefab/steal').then(function (prefab) {
                var layer = cc.instantiate(prefab);
                self.stealLayer = layer;
                self.node.addChild(layer);
                self.stealLayer.active = true;
            });
        }
        else {
            this.stealLayer.active = true;
        }
    };
    // todo
    Main.prototype.clickRed = function (e) {
        var _this = this;
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        if (!this.canClickRed) {
            return;
        }
        this.clickRedNumber++;
        var bar = e.target.getChildByName("progress").getChildByName("bar");
        bar.width = this.clickRedNumber >= 6 ? 16 * 6 : this.clickRedNumber * 16;
        // 当天首次点击
        if (cc.Tools.userInfo.is_day_first_click_award) {
            var sendData = {};
            cc.Tools.sendRequest("FirstClickAward", "POST", sendData).then(function (res) {
                cc.Tools.userInfo.is_day_first_click_award = false;
                _this.showPopDeleteLayer(1, 1);
            });
            return;
        }
        // 
        if (!this.startClickTime) {
            this.startClickTime = new Date().getTime();
        }
        else {
            var newTime = new Date().getTime();
            var dt = newTime - this.startClickTime;
            this.clickRedArr.push(dt);
            this.startClickTime = newTime;
        }
        if (this.clickRedArr.length === 3) {
            // 当累计三次之后就行运算 当值小于800 说明此时连点了3次 并播放激励视频
            var total = this.clickRedArr.reduce(function (acc, cur) { return acc + cur; }, 0);
            if (total < 800) {
                // 播放激励视频
                this.clickRedArr = [];
                this.startClickTime = 0;
                if (this.clickRedNumber < 6) {
                    cc.Tools.showTips(this.node, "<b><color=#ffffff>\u770B\u5B8C\u89C6\u9891 \u9886\u53D6\u66F4\u591A\u7EA2\u5305\u5238</c></b>").then(function () {
                        CocosBridge_1.default.JSCallNative("showRewardVideoAd", "7");
                    });
                    return;
                }
            }
            else {
                this.clickRedArr.shift();
            }
        }
        if (this.clickRedNumber >= 6) {
            var sendData = {};
            cc.Tools.sendRequest("ClickAwardStat", "GET", sendData).then(function (res) {
                _this.canClickRed = false;
                if (res.data.free_times) {
                    var sendData_1 = {
                        type: 1,
                        ts: new Date().getTime()
                    };
                    cc.Tools.sendRequest("NewAward", "POST", sendData_1).then(function (res) {
                        _this.showTicketLayer({ ticket: res.data.amount, add: res.data.add_amount, type: 1, videoType: 1 });
                        _this.clickRedNumber = 0;
                        bar.width = _this.clickRedNumber >= 6 ? 16 * 6 : _this.clickRedNumber * 16;
                    });
                }
                else {
                    _this.showPopDeleteLayer(1, 1);
                    _this.clickRedNumber = 0;
                    bar.width = _this.clickRedNumber >= 6 ? 16 * 6 : _this.clickRedNumber * 16;
                }
            });
        }
    };
    Main.prototype.canClickRedFunc = function () {
        this.canClickRed = true;
    };
    Main.prototype.touchGround = function (event) {
        if (this.lock) {
            return;
        }
        cc.audioEngine.play(this.effectAudio[0], false, 1);
        this.countTime = new Date().getTime();
        var windowSize = cc.winSize;
        var x = event.getLocationX();
        var y = event.getLocationY();
        this.Delete_num = 0;
        this.clickPos = cc.v3(x, y);
        if (y > windowSize.height / 2 - 370 - this.vh && y < windowSize.height / 2 + 370 - this.vh) {
            var i = this.ToIJ(x, y).x;
            var j = this.ToIJ(x, y).y;
            this.Delete_num = 0;
            this.deletePosArr = [];
            var color = this.a[i][j];
            this.lock = true;
            this.Touch_block(i, j, this.a[i][j]);
            // todo
            if (this.Delete_num === 1) {
                this.a[i][j] = color;
                this.lock = false;
                return;
            }
            else {
                this.handleDeleteBlock(false);
            }
        }
    };
    //设置scoreinfo
    Main.prototype.setScoreInfo = function (score) {
        var scoreNode = this.scoreInfo.getChildByName("score");
        var scoreLbl = scoreNode.getChildByName("text").getComponent(cc.Label);
        scoreLbl.string = score + "分";
        //加进度条 进度条满分6000
        var progressBar = this.scoreInfo.getChildByName("progress").getComponent(cc.ProgressBar);
        //进度条大小取值0-1 为一位小数
        var val = (Math.floor(score * 100 / 6000)) / 100 > 1 ? 1 : (Math.floor(score * 100 / 6000)) / 100;
        // progressBar.progress = val
        // scoreNode.x = -150+390*val;
        cc.tween(progressBar).to(0.1, { progress: val }).start();
        cc.tween(scoreNode).to(0.1, { x: -150 + 390 * val }).start();
        //根据score判断星数
        for (var i = 1; i <= 3; i++) {
            var star = this.scoreInfo.getChildByName("star_" + i);
            var activeNode = star.getChildByName("active");
            var unActiveNode = star.getChildByName("unActive");
            unActiveNode.active = true;
            activeNode.active = false;
            if (score > 3000 * (i - 1)) {
                activeNode.active = true;
            }
        }
    };
    /**
     * 初始化关卡
     */
    Main.prototype.init = function () {
        this.ground.on(cc.Node.EventType.TOUCH_START, this.touchGround, this);
        this.curScore = 0;
        this.clickOnce = true;
        this.addTicket = 0;
        var levelLbl = this.scoreInfo.getChildByName("text").getComponent(cc.Label);
        levelLbl.string = "\u5173\u5361\uFF1A" + cc.Tools.userInfo.level;
        this.setScoreInfo(this.curScore);
        this.background.destroyAllChildren();
        this.blockBackground.destroyAllChildren();
        var blockNullColor = "#38537E";
        var _arr1 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var _arr2 = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var _newArr = [];
        for (var i = 0; i < 2; i++) {
            var key = [];
            var len1 = _arr1.length;
            var val1 = Math.floor(Math.random() * len1);
            key.push(_arr1[val1]);
            cc.Tools.remove(_arr1, _arr1[val1]);
            var len2 = _arr2.length;
            var val2 = Math.floor(Math.random() * len2);
            key.push(_arr2[val2]);
            cc.Tools.remove(_arr2, _arr2[val2]);
            _newArr.push(key);
        }
        for (var i = 0; i < 10; i++) {
            this.a[i] = [];
            this.b[i] = [];
            for (var j = 0; j < 10; j++) {
                var special = false;
                for (var k = 0; k < _newArr.length; k++) {
                    var _x = _newArr[k][0];
                    var _y = _newArr[k][1];
                    if (i === _x && j === _y) {
                        special = true;
                        cc.Tools.remove(_newArr, _newArr[k]);
                    }
                }
                //    this.a[i][j] = newArr[Math.ceil(Math.random() * this.difficulty) - 1]
                this.a[i][j] = Math.ceil(Math.random() * this.difficulty);
                var blockNull = cc.instantiate(this.blockNull);
                blockNull.parent = this.blockBackground || this.node;
                blockNull.setPosition(this.ToXY(i, j));
                blockNull.color = new cc.Color().fromHEX(blockNullColor);
                if (blockNullColor === "#38537E") {
                    blockNullColor = "#344F7A";
                }
                else {
                    blockNullColor = "#38537E";
                }
                var node = null;
                switch (this.a[i][j]) {
                    case 1:
                        node = cc.instantiate(this.red);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 2:
                        node = cc.instantiate(this.green);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 3:
                        node = cc.instantiate(this.yellow);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 4:
                        node = cc.instantiate(this.blue);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                        break;
                    case 5:
                        node = cc.instantiate(this.pink);
                        node.parent = this.background || this.node;
                        node.setPosition(this.ToXY(i, j));
                }
                this.b[i][j] = node;
                if (special) {
                    var pop = cc.instantiate(this.pop_red);
                    pop.getComponent(cc.Sprite).spriteFrame = this.tiger[this.a[i][j] - 1];
                    node.addChild(pop);
                    node.special = true;
                }
            }
            if (blockNullColor === "#344F7A") {
                blockNullColor = "#38537E";
            }
            else {
                blockNullColor = "#344F7A";
            }
        }
    };
    Main.prototype.ToXY = function (x, y) {
        return cc.v2(-(370 - (36 + y * 74)), 370 - (36 + x * 74));
    };
    Main.prototype.ToIJ = function (i, j) {
        var windowSize = cc.winSize;
        if (j < windowSize.height / 2 - 370 - this.vh || j > windowSize.height / 2 + 370 - this.vh) {
            return;
        }
        else {
            i = Math.floor((i - this.difficulty) / 74);
            j = Math.floor((windowSize.height / 2 + 375 - this.vh - j) / 74);
            return {
                x: j,
                y: i
            };
        }
    };
    Main.prototype.goodFunction = function (num) {
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
            var good_1 = cc.instantiate(this.good);
            this.background.addChild(good_1);
            cc.tween(good_1).by(1, { y: 200 }).call(function () {
                good_1.destroy();
            }).start();
        }
        if (num >= 7 && num < 9) {
            cc.audioEngine.play(this.effectAudio[10], false, 1);
            var great_1 = cc.instantiate(this.great);
            this.background.addChild(great_1);
            cc.tween(great_1).by(0.5, { y: 200 }).call(function () {
                great_1.destroy();
            }).start();
        }
        if (num >= 9 && num < 12) {
            cc.audioEngine.play(this.effectAudio[11], false, 1);
            var excellent_1 = cc.instantiate(this.excellent);
            this.background.addChild(excellent_1);
            cc.tween(excellent_1).by(0.5, { y: 200 }).call(function () {
                excellent_1.destroy();
            }).start();
        }
        if (num >= 12 && num < 15) {
            cc.audioEngine.play(this.effectAudio[12], false, 1);
            var amazing_1 = cc.instantiate(this.amazing);
            this.background.addChild(amazing_1);
            cc.tween(amazing_1).by(0.5, { y: 200 }).call(function () {
                amazing_1.destroy();
            }).start();
        }
        if (num >= 15) {
            cc.audioEngine.play(this.effectAudio[13], false, 1);
            var unbelievable_1 = cc.instantiate(this.unbelievable);
            this.background.addChild(unbelievable_1);
            cc.tween(unbelievable_1).by(0.5, { y: 200 }).call(function () {
                unbelievable_1.destroy();
            }).start();
        }
    };
    Main.prototype.Delete_block = function () {
        for (var j = 0; j < 10; j++) {
            var num = 0;
            for (var i = 9; i >= 0; i--) {
                if (this.a[i][j] > 0 && num > 0) {
                    var action_1 = cc.moveBy(0.2, 0, -num * 74);
                    this.b[i][j].runAction(action_1);
                    // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(0, -num * 74) }).start();
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
                        // cc.tween(this.b[i][j]).by(0.3, { position: cc.v2(-count * 74, 0) }).start();
                        var action = cc.moveBy(0.2, -_count * 74, 0);
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
    // 老写法
    Main.prototype.Touch_block = function (i, j, k) {
        if (this.a[i][j] == k && k > 0) {
            this.a[i][j] = 0;
            this.Delete_num++;
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
    // 分成数组
    Main.prototype.splitToArr = function (arr) {
        var _arr = [];
        if (arr.length > 0) {
            this.deletePosArr.push(arr);
            for (var t = 0; t < arr.length; t++) {
                var data = arr[t];
                var i = data.i;
                var j = data.j;
                var k = data.k;
                if (i != 0) {
                    if (this.a[i - 1][j] == k && k > 0) {
                        this.a[i - 1][j] = 0;
                        this.Delete_num++;
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
                        this.Delete_num++;
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
                        this.Delete_num++;
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
                        this.Delete_num++;
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
    Main.prototype.handleDeleteBlock = function (isOver) {
        var _this = this;
        //计数
        if (!this.deletePosArr.length) {
            this.lock = false;
            return;
        }
        this._count = 0;
        this.isOverGame = isOver;
        this.schedule(this.deleteBlockCb, 0.016, this.deletePosArr.length - 1);
        if (!isOver) {
            //向服务器发送激活
            var isActive = cc.sys.localStorage.getItem("active");
            if (!isActive) {
                cc.Tools.sendRequest("UserLive", "POST", {
                    "ts": new Date().getTime()
                }).then(function (res) {
                    cc.sys.localStorage.setItem("active", true);
                    console.log("cocos----激活成功");
                });
            }
            // 增加金钱特效
            var addInfo = this.cashInfo.getChildByName("add_info");
            this.addTicket += this.Delete_num;
            var num = addInfo.getChildByName("num").getComponent(cc.Label);
            num.string = "" + this.Delete_num;
            addInfo.stopAllActions();
            addInfo.opacity = 0;
            addInfo.y = -40;
            addInfo.runAction(cc.sequence(cc.fadeIn(0.1), cc.moveBy(0.5, 0, 40), cc.fadeOut(0.5)));
            this.showPacketAnim(3, 0.01, 100, this.clickPos, this.cashInfo, function () {
                _this.cashInfo.getChildByName("text").getComponent(cc.Label).string = cc.Tools.userInfo.amount + _this.addTicket;
            });
        }
    };
    Main.prototype.deleteBlockCb = function () {
        // let count = 0;
        var arr = this.deletePosArr[this._count];
        for (var t = 0; t < arr.length; t++) {
            var data = arr[t];
            var i = data.i;
            var j = data.j;
            var k = data.k;
            var node = cc.instantiate(this.desEffect);
            node.parent = this.background || this.node;
            node.setPosition(this.ToXY(i, j));
            var CustomParticle = node.getComponent(cc.ParticleSystem);
            CustomParticle.spriteFrame = this.liziBlock[k - 1];
            CustomParticle.resetSystem();
            if (this.b[i][j].special) {
                this.special = true;
            }
            this.b[i][j].destroy();
            this.b[i][j] = null;
        }
        if (this._count === this.deletePosArr.length - 1) {
            this.afterDeleteBlock();
        }
        this._count++;
    };
    Main.prototype.afterDeleteBlock = function () {
        var _this = this;
        this.Delete_block();
        this.unschedule(this.deleteBlockCb);
        // 获取分数 getScore
        if (this.isOverGame) {
            this.setScore(true);
            return;
        }
        else {
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
        }
        else {
            var rdm = Math.floor(Math.random() * 4 + 5);
            if (this.Delete_num >= rdm) {
                this.clickNumber++;
                if (this.clickNumber >= 5) {
                    this.clickNumber = 0;
                    this.showPopDeleteLayer(2, 9);
                }
                else {
                    this.scheduleOnce(function () {
                        _this.lock = false;
                    }, 0.5);
                }
            }
            else {
                this.scheduleOnce(function () {
                    _this.lock = false;
                }, 0.5);
            }
        }
    };
    // 通过k的值返回色值
    Main.prototype.getColorBlock = function (k) {
        var color = null;
        switch (k) {
            case 1:
                // red
                color = "#DC5672";
                break;
            case 2:
                // green
                color = "#6EC46C";
                break;
            case 3:
                // pink
                color = "#BC63F0";
                break;
            case 4:
                //blue
                color = "#4CA8EA";
                break;
            case 5:
                // yellow
                color = "#E7CB55";
                break;
        }
        return color;
    };
    Main.prototype.setScore = function (isClear) {
        var _this = this;
        if (isClear) {
            cc.tween(this.node).delay(0.5).call(function () {
                _this.updateLevel();
            }).start();
            this.scheduleOnce(function () {
                _this.showPopSuccessLayer();
            }, 2);
            return;
        }
        else {
            // 如果当前没有方块
            var iskong = true;
            for (var i = 0; i < 10; i++) {
                for (var j = 0; j < 10; j++) {
                    if (this.a[i][j]) {
                        iskong = false;
                    }
                }
            }
            if (iskong) {
                cc.tween(this.node).delay(0.5).call(function () {
                    _this.updateLevel();
                }).start();
                this.scheduleOnce(function () {
                    _this.showPopSuccessLayer();
                }, 2);
                return;
            }
        }
        if (this.isEnd()) {
            // 增加积分 积分算法是
            // 剩余的方块
            this.deletePosArr = [];
            var arr_1 = [];
            this.lock = true;
            this.ground.off(cc.Node.EventType.TOUCH_START, this.touchGround, this);
            this.scheduleOnce(function () {
                for (var i = 0; i < 10; i++) {
                    for (var j = 0; j < 10; j++) {
                        var k = _this.a[i][j];
                        if (k) {
                            _this.a[i][j] = 0;
                            var obj = {
                                "i": i,
                                "j": j,
                                "k": k
                            };
                            arr_1.push(obj);
                        }
                    }
                }
                _this.deletePosArr.push(arr_1);
                var len = _this.Delete_num - 1;
                var score = _this.targetScore - Math.pow(len, 2) * 10;
                _this.curScore += score;
                _this.setScoreInfo(_this.curScore);
                _this.handleDeleteBlock(true);
            }, 1);
        }
        else {
            // 增加积分 积分算法是 (消除数-1）的平方*10
            var len = this.Delete_num - 1;
            var score = Math.pow(len, 2) * 10;
            this.curScore += score;
            this.setScoreInfo(this.curScore);
            this.goodFunction(this.Delete_num);
        }
    };
    Main.prototype.updateLevel = function () {
        var _this = this;
        // 像服务器发请求过关
        var sendData = {
            "score": this.curScore,
            "ts": new Date().getTime(),
            "level": cc.Tools.userInfo.level,
            "award": this.addTicket,
        };
        var data = cc.Tools.createSignData(sendData);
        cc.Tools.sendRequest("UpdateLevel", "POST", data).then(function (res) {
            // 刷新一下cc.Tools.userInfo.new_free_level_times
            cc.Tools.userInfo.new_free_level_times = res.data.new_free_level_times;
            cc.Tools.showTips(_this.node);
        });
    };
    Main.prototype.isEnd = function () {
        var arr = this.a;
        for (var i = 0; i < 10; i++) {
            for (var j = 0; j < 10; j++) {
                var val = this.a[i][j];
                var left = -1;
                var right = -1;
                var up = -1;
                var down = -1;
                if (val) {
                    // 左右
                    if (j - 1 >= 0) {
                        if (this.a[i][j - 1]) {
                            left = this.a[i][j - 1];
                        }
                    }
                    if (j + 1 <= 9) {
                        if (this.a[i][j + 1]) {
                            right = this.a[i][j + 1];
                        }
                    }
                    if (i - 1 >= 0) {
                        if (this.a[i - 1][j]) {
                            up = this.a[i - 1][j];
                        }
                    }
                    if (i + 1 <= 9) {
                        if (this.a[i + 1][j]) {
                            down = this.a[i + 1][j];
                        }
                    }
                    if (val === left || val === right || val === up || val === down) {
                        return false;
                    }
                }
                else {
                    continue;
                }
            }
        }
        return true;
    };
    // 让浮球显示并浮动 点击 看激励视频
    Main.prototype.floaterMove = function () {
        var floaterLayer = this.content.getChildByName("floater_layer");
        var val = cc.sys.localStorage.getItem("showBtn");
        if (val == 100) {
            if (floaterLayer.active === false) {
                floaterLayer.active = true;
            }
            for (var i = 1; i <= 3; i++) {
                var floater = floaterLayer.getChildByName("floater_" + i);
                floater.active = true;
                cc.Tools.popAnim(floater, 10);
                floater.on(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
            }
        }
    };
    // 专属浮球的事件 点击浮球观看视频 之后浮球消失并且清除事件
    Main.prototype.clickFloate = function (e) {
        // 点击加锁
        if (cc.Tools.lock) {
            cc.Tools.showTips(this.node, "<b><color=#ffffff>\u70B9\u51FB\u592A\u9891\u7E41</c></b>");
            return;
        }
        else {
            cc.Tools.lock = true;
            setTimeout(function () {
                cc.Tools.lock = false;
            }, 3000);
        }
        var target = e.target;
        CocosBridge_1.default.JSCallNative("playDot", "" + { "dot": "click_Floatredbag_1" });
        CocosBridge_1.default.JSCallNative("showRewardVideoAd", "2");
        // this.scheduleOnce(() => {
        target.active = false;
        // target.off(cc.Node.EventType.TOUCH_END, this.clickFloate, this);
        // target.destroy();
        // target = null;
        // }, 1)
    };
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
    Main.prototype.showPacketAnim = function (c, nt, randomScope, startPos, endNode, call) {
        var _this = this;
        if (randomScope === void 0) { randomScope = 80; }
        if (startPos === void 0) { startPos = cc.v3(0, 0); }
        if (call === void 0) { call = null; }
        cc.audioEngine.play(this.effectAudio[14], false, 1);
        var newTime = nt;
        var tempPlayer = this.node.convertToNodeSpaceAR(startPos);
        var endP = endNode.getPosition();
        endP = this.node.convertToNodeSpaceAR(endNode.parent.convertToWorldSpaceAR(endP));
        var _count = 0;
        this.schedule(function () {
            var pre = cc.instantiate(_this.packet);
            pre.parent = _this.node;
            pre.setPosition(tempPlayer);
            var rannumx = cc.Tools.createRandom(-randomScope, randomScope); // (this.random2 - this.random1 + 1) + this.random1
            var rannumy = cc.Tools.createRandom(-randomScope, randomScope); //(this.random2 - this.random1 + 1) / 1.5 + this.random1 / 1.5)
            cc.tween(pre)
                .by(0.4, { position: cc.v3(rannumx, rannumy) }, { easing: 'quadOut' })
                .delay(0.3)
                .to(0.4, { position: cc.v3(endP) })
                .call(function () {
                pre.destroy();
                _count++;
                if (_count == c) {
                    // this.closeView()
                    // console.log("动画完毕")
                }
            })
                .start();
        }, newTime, c);
        this.scheduleOnce(function () {
            call && call();
        }, 2);
    };
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "packet", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "blockNull", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "red", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "green", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "yellow", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "blue", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pink", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "good", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "great", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "excellent", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "amazing", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "unbelievable", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "desEffect", void 0);
    __decorate([
        property([cc.AudioClip])
    ], Main.prototype, "effectAudio", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "popDeleteType", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "liziBlock", void 0);
    __decorate([
        property([cc.SpriteFrame])
    ], Main.prototype, "tiger", void 0);
    __decorate([
        property(cc.Prefab)
    ], Main.prototype, "pop_red", void 0);
    Main = __decorate([
        ccclass
    ], Main);
    return Main;
}(cc.Component));
exports.default = Main;

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29tcG9uZW50L01haW4udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBLG9EQUErQztBQUUvQywrQkFBK0I7QUFDekIsSUFBQSxLQUF3QixFQUFFLENBQUMsVUFBVSxFQUFuQyxPQUFPLGFBQUEsRUFBRSxRQUFRLGNBQWtCLENBQUM7QUFDNUMsSUFBSSxJQUFJLEdBQVEsSUFBSSxDQUFDO0FBWXJCO0lBQWtDLHdCQUFZO0lBQTlDO1FBQUEscUVBcW9EQztRQXBvREcscUJBQXFCO1FBQ3JCLGdCQUFVLEdBQVksSUFBSSxDQUFDO1FBQzNCLHFCQUFxQjtRQUNyQixxQkFBZSxHQUFZLElBQUksQ0FBQztRQUNoQyxZQUFNLEdBQVksSUFBSSxDQUFDO1FBQ3ZCLGFBQU8sR0FBWSxJQUFJLENBQUM7UUFDeEIsY0FBUSxHQUFZLElBQUksQ0FBQztRQUN6QixjQUFRLEdBQVksSUFBSSxDQUFDO1FBQ3pCLGVBQVMsR0FBWSxJQUFJLENBQUM7UUFDMUIsa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0Isa0JBQVksR0FBWSxJQUFJLENBQUM7UUFDN0IsbUJBQWEsR0FBWSxJQUFJLENBQUM7UUFDOUIscUJBQXFCO1FBQ3JCLGtCQUFZLEdBQVksSUFBSSxDQUFDO1FBQzdCLHFCQUFxQjtRQUNyQixnQkFBVSxHQUFZLElBQUksQ0FBQztRQUMzQixlQUFTLEdBQVksSUFBSSxDQUFDO1FBQzFCLHFCQUFlLEdBQVksSUFBSSxDQUFDO1FBQ2hDLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLGlCQUFXLEdBQVksSUFBSSxDQUFDO1FBQzVCLG9CQUFjLEdBQVksSUFBSSxDQUFDO1FBQy9CLG1CQUFhLEdBQVksSUFBSSxDQUFDO1FBQzlCLG9CQUFjLEdBQVksSUFBSSxDQUFD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QUFDLFdBQVcsQ0FBQyxDQUFDO3VDQUNoQjtJQUVYO1FBREMsUUFBUSxDQUFDLEVBQUUsQ0FBQyxNQUFNLENBQUM7eUNBQ007SUE5RFQsSUFBSTtRQUR4QixPQUFPO09BQ2EsSUFBSSxDQXFvRHhCO0lBQUQsV0FBQztDQXJvREQsQUFxb0RDLENBcm9EaUMsRUFBRSxDQUFDLFNBQVMsR0Fxb0Q3QztrQkFyb0RvQixJQUFJIiwiZmlsZSI6IiIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvY29zQnJpZGdlIGZyb20gXCIuLi9Ub29scy9Db2Nvc0JyaWRnZVwiO1xuXG4vLyBpbXBvcnQgVG9vbHMgZnJvbSBcIi4vVG9vbHNcIjtcbmNvbnN0IHsgY2NjbGFzcywgcHJvcGVydHkgfSA9IGNjLl9kZWNvcmF0b3I7XG52YXIgc2VsZjogYW55ID0gbnVsbDtcbmludGVyZmFjZSB0aWNrZXRJbmZvIHtcbiAgICAvLyDliLjnmoTmlbDph49cbiAgICB0aWNrZXQ6IG51bWJlcjtcbiAgICAvLyDpop3lpJbnmoTliLhcbiAgICBhZGQ6IG51bWJlcjtcbiAgICAvLyDop4bpopHnsbvlnotcbiAgICB2aWRlb1R5cGU6IG51bWJlcjtcbiAgICAvL+adpeiHquWHoOe6p+eVjOmdolxuICAgIHR5cGU6IG51bWJlclxufVxuQGNjY2xhc3NcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1haW4gZXh0ZW5kcyBjYy5Db21wb25lbnQge1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJhY2tncm91bmQ6IGNjLk5vZGUgPSBudWxsO1xuICAgIC8vIEBwcm9wZXJ0eShjYy5Ob2RlKVxuICAgIGJsb2NrQmFja2dyb3VuZDogY2MuTm9kZSA9IG51bGw7XG4gICAgZ3JvdW5kOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjb250ZW50OiBjYy5Ob2RlID0gbnVsbDtcbiAgICBjYXNoSW5mbzogY2MuTm9kZSA9IG51bGw7XG4gICAgdXNlckluZm86IGNjLk5vZGUgPSBudWxsO1xuICAgIHNjb3JlSW5mbzogY2MuTm9kZSA9IG51bGw7XG4gICAgYmFycmFnZUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBnZXRDYXNoTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHNldHRpbmdMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgc2F2ZUNhc2hMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgLy8gQHByb3BlcnR5KGNjLk5vZGUpXG4gICAgbG90dGVyeUxheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICAvLyBAcHJvcGVydHkoY2MuTm9kZSlcbiAgICBzdGVhbExheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBzaWduTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFN1Y2Nlc3NMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgcG9wRGVsZXRlTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcE5ld0xheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICB0aWNrZXRMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgdGlja2V0VGVuTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFN1cGVyTGF5ZXI6IGNjLk5vZGUgPSBudWxsO1xuICAgIHBvcFNlY3JldExheWVyOiBjYy5Ob2RlID0gbnVsbDtcbiAgICBwb3BTdGVhbE1hcmtMYXllcjogY2MuTm9kZSA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwYWNrZXQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBibG9ja051bGw6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICByZWQ6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBncmVlbjogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHllbGxvdzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGJsdWU6IGNjLlByZWZhYiA9IG51bGw7XG4gICAgQHByb3BlcnR5KGNjLlByZWZhYilcbiAgICBwaW5rOiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZ29vZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGdyZWF0OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgZXhjZWxsZW50OiBjYy5QcmVmYWIgPSBudWxsO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgYW1hemluZzogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIHVuYmVsaWV2YWJsZTogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoY2MuUHJlZmFiKVxuICAgIGRlc0VmZmVjdDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBAcHJvcGVydHkoW2NjLkF1ZGlvQ2xpcF0pXG4gICAgZWZmZWN0QXVkaW8gPSBbXTtcbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICBwb3BEZWxldGVUeXBlID0gW107XG4gICAgQHByb3BlcnR5KFtjYy5TcHJpdGVGcmFtZV0pXG4gICAgbGl6aUJsb2NrID0gW11cbiAgICBAcHJvcGVydHkoW2NjLlNwcml0ZUZyYW1lXSlcbiAgICB0aWdlciA9IFtdO1xuICAgIEBwcm9wZXJ0eShjYy5QcmVmYWIpXG4gICAgcG9wX3JlZDogY2MuUHJlZmFiID0gbnVsbDtcbiAgICBwcml2YXRlIGEgPSBbXTtcbiAgICBwcml2YXRlIGIgPSBbXTtcbiAgICBwcml2YXRlIGRlbGV0ZVBvc0FyciA9IFtdO1xuICAgIHByaXZhdGUgZGlmZmljdWx0eSA9IDM7XG4gICAgcHJpdmF0ZSBEZWxldGVfbnVtID0gMDtcbiAgICBwcml2YXRlIHZoID0gMTEwO1xuICAgIHByaXZhdGUgbG9jayA9IGZhbHNlO1xuICAgIHByaXZhdGUgdGFyZ2V0U2NvcmUgPSAxMDAwO1xuICAgIHByaXZhdGUgY3VyU2NvcmUgPSAwO1xuICAgIHByaXZhdGUgbGV2ZWwgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tSZWROdW1iZXIgPSAwO1xuICAgIHByaXZhdGUgY2xpY2tPbmNlID0gdHJ1ZTtcbiAgICBwcml2YXRlIGNsaWNrTnVtYmVyID0gMDtcbiAgICBwcml2YXRlIGNvdW50VGltZSA9IDA7XG4gICAgcHJpdmF0ZSBjYW5DbGlja1JlZCA9IHRydWU7XG4gICAgcHJpdmF0ZSBjbGlja1JlZEFyciA9IFtdO1xuICAgIHByaXZhdGUgc3RhcnRDbGlja1RpbWUgPSAwO1xuICAgIHByaXZhdGUgaXNPdmVyR2FtZSA9IGZhbHNlO1xuICAgIHByaXZhdGUgX2NvdW50ID0gMDtcbiAgICBwcml2YXRlIHNob3dTZWNyZXRUaW1lcyA9IDA7XG4gICAgcHJpdmF0ZSBjbGlja1BvcyA9IGNjLnYzKDAsIDApO1xuICAgIHByaXZhdGUgYWRkVGlja2V0ID0gMDtcbiAgICBwcml2YXRlIGJhcnJhZ2VBcnIgPSBbXTtcbiAgICBwcml2YXRlIGJhcnJhZ2U6IGNjLk5vZGU7XG4gICAgcHJpdmF0ZSBiYXJyYWdlU3BlZWQgPSAyO1xuICAgIHByaXZhdGUgYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICBwcml2YXRlIGJhcnJhZ2VMb2NrID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBzdXBlclRpbWUgPSAwO1xuICAgIHByaXZhdGUgc3BlY2lhbCA9IGZhbHNlO1xuICAgIG9uTG9hZCgpIHtcbiAgICAgICAgLy8g5Yid5aeL5YyW5Y+C5pWwXG4gICAgICAgIHNlbGYgPSB0aGlzO1xuICAgICAgICBjYy5Ub29scy5zY3JlZW5BZGFwdGVyKCk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiaW5pdFwiLCB0aGlzLnJlZnJlc2hVc2VySW5mbywgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiZ2V0VGlja2V0XCIsIHRoaXMuc2hvd1RpY2tldExheWVyLCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oXCJjYXNoXCIsIHRoaXMuc2hvd0dldENhc2hMYXllciwgdGhpcyk7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwiY2xpY2tSZWRcIiwgdGhpcy5jYW5DbGlja1JlZEZ1bmMsIHRoaXMpO1xuICAgICAgICBjYy5Ub29scy5FdmVudC5vbihcInNob3dQYWNrZXRcIiwgdGhpcy5zaG93UGFja2V0LCB0aGlzKTtcbiAgICAgICAgY2MuVG9vbHMuRXZlbnQub24oXCJyZWZyZXNoV2FsbGV0XCIsIHRoaXMucmVmcmVzaFdhbGxldCwgdGhpcyk7Ly/liLfmlrDph5HpkrFcbiAgICAgICAgLy/lvZPop4bpopHnvJPlrZjlpb3pgJrnn6XmiYDmnInmjInpkq7lj6/ku6XngrnkuoYg5ZCm5YiZ5LiN5Y+v54K55Ye7XG4gICAgICAgIGNjLlRvb2xzLkV2ZW50Lm9uKFwib2JzZXJ2ZXJBbGxCdG5cIiwgdGhpcy5vYnNlcnZlckFsbEJ0biwgdGhpcyk7Ly/liLfmlrDph5HpkrFcbiAgICAgICAgY2MuVG9vbHMuYWRUaW1lcyA9IDA7XG4gICAgICAgIHRoaXMuZ3JvdW5kID0gY2MuZmluZChcIkNhbnZhcy9iYWNrZ3JvdW5kXCIpO1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSBjYy5maW5kKFwiQ2FudmFzL2NvbnRlbnRcIik7XG4gICAgICAgIHRoaXMuYmFja2dyb3VuZCA9IHRoaXMuZ3JvdW5kLmdldENoaWxkQnlOYW1lKFwiYmxvY2tDb2xvdXJcIik7XG4gICAgICAgIHRoaXMuYmxvY2tCYWNrZ3JvdW5kID0gdGhpcy5ncm91bmQuZ2V0Q2hpbGRCeU5hbWUoXCJibG9ja051bGxcIik7XG4gICAgICAgIGxldCBpbmZvTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJpbmZvX2xheWVyXCIpO1xuICAgICAgICB0aGlzLmNhc2hJbmZvID0gaW5mb0xheWVyLmdldENoaWxkQnlOYW1lKFwiY2FzaF9pbmZvXCIpO1xuICAgICAgICB0aGlzLnVzZXJJbmZvID0gaW5mb0xheWVyLmdldENoaWxkQnlOYW1lKFwidXNlcl9pbmZvXCIpO1xuICAgICAgICB0aGlzLnNjb3JlSW5mbyA9IGluZm9MYXllci5nZXRDaGlsZEJ5TmFtZShcInNjb3JlX2luZm9cIik7XG4gICAgICAgIHRoaXMuYmFycmFnZUxheWVyID0gdGhpcy5ub2RlLmdldENoaWxkQnlOYW1lKFwiYmFycmFnZV9sYXllclwiKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgdGhpcy5wcmVsb2FkUHJlZmFiKCk7XG4gICAgICAgIHRoaXMuaW5pdFVzZXJJbmZvKCk7XG4gICAgICAgIHRoaXMuc2hpZWxkQnRuKCk7XG4gICAgICAgIC8v6I635Y+W5b2T5YmN5omL5py65piv5ZCm5pyJ5LiN5q2j5bi45bqU55SoXG4gICAgICAgIHRoaXMuZ2V0SWxsZWdhbGl0eUFwcCgpO1xuICAgICAgICAvL+WIt+aWsOS4gOS4i+W9k+WJjeeahOmHkemSseaVsOmHj1xuICAgICAgICB0aGlzLnJlZnJlc2hXYWxsZXQoKTtcbiAgICAgICAgbGV0IGJveCA9IHRoaXMuc2NvcmVJbmZvLmdldENoaWxkQnlOYW1lKFwiYm94XCIpO1xuICAgICAgICBjYy5Ub29scy5icmVhdGhlQW5pbShib3gpO1xuICAgICAgICBib3gub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnNob3dQb3BEZWxldGVMYXllcigxLCAxMCk7XG4gICAgICAgIH0sIHRoaXMpXG4gICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL2JhcnJhZ2UnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBiYXJyYWdlID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmJhcnJhZ2VMYXllci5hZGRDaGlsZChiYXJyYWdlKTtcbiAgICAgICAgICAgICAgICBiYXJyYWdlLnggPSAxMDAwO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZSA9IGJhcnJhZ2U7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCYXJyYWdlSW5mbyh0cnVlKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0sIDEpXG4gICAgICAgIC8v6YCA5Ye65ri45oiP55qE5pe25YCZ6K6w5b2V5LiA5LiLXG4gICAgICAgIC8vIFxuICAgICAgICBjYy5nYW1lLm9uKGNjLmdhbWUuRVZFTlRfSElERSwgZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tRVZFTlRfSElERS0t6YCA5Ye65ri45oiPXCIpO1xuICAgICAgICAgICAgLy/lvZPliY3orrDlvZXkuIDkuKrml7bpl7RcbiAgICAgICAgICAgIGxldCBkYXRlID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJsYXN0RXhpdFwiLCBNYXRoLmZsb29yKGRhdGUgLyAxMDAwKSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjYy5CdXR0b24ucHJvdG90eXBlW1wiX29uVG91Y2hCZWdhblwiXSA9IGZ1bmN0aW9uIChldmVudCkge1xuICAgICAgICAgICAgaWYgKCF0aGlzLmludGVyYWN0YWJsZSB8fCAhdGhpcy5lbmFibGVkSW5IaWVyYXJjaHkpIHJldHVybjtcbiAgICAgICAgICAgIHRoaXMuX3ByZXNzZWQgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5fdXBkYXRlU3RhdGUoKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheShzZWxmLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcIumHjeWGmeS7peWJjeeahGJ1dHRvblwiKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkudG8oMSx7c2NhbGU6MS4xfSkuc3RhcnRcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+ebkeWQrOaJgOacieeahOinhumikee8k+WtmC0tLT7lpoLmnpzmsqHmnInnvJPlrZjlpb0tLeaIluiAhee8k+WtmOWksei0pS0t5omA5pyJ6KeG6aKR5oyJ6ZKu572u54GwLS3nvJPlrZjmiJDlip/lj5jkuq5cbiAgICBvYnNlcnZlckFsbEJ0bihjbG9zZUJ0bjpib29sZWFuKTp2b2lke1xuICAgICAgICBcbiAgICB9XG4gICAgLy/ojrflj5bpnZ7ms5VBcHBcbiAgICBnZXRJbGxlZ2FsaXR5QXBwKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAvL+iOt+WPlumdnuezu+e7n+W6lOeUqOS/oeaBr+WIl+ihqFxuICAgICAgICAgICAgbGV0IHVuU3lzTGlzdDogc3RyaW5nID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZ2V0SW5zdGFsbEFwcExpc3RcIiwgXCIoKUxqYXZhL2xhbmcvU3RyaW5nO1wiKTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLXVuU3lzTGlzdC0tLVwiLHVuU3lzTGlzdC5sZW5ndGgrXCItLS0t57G75Z6LLS0tXCIrdHlwZW9mKHVuU3lzTGlzdCkpO1xuICAgICAgICAgICAgLy8gbGV0IHVuU3lzTGlzdCA9IGBgK1t7XCJhcHBOYW1lXCI6XCLojaPogIDkv7HkuZDpg6gxXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhvbm9yLmNsdWJcIn0se1wiYXBwTmFtZVwiOlwi55av54uC5LmQ6YCN6YGlXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmdhbWUuZmtseHlcIn0se1wiYXBwTmFtZVwiOlwidHRfYWRfbWVkaWF0aW9uXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhlYWRlci5hcHAudW50ZXh0XCJ9LHtcImFwcE5hbWVcIjpcIuW+ruS/oVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS50ZW5jZW50Lm1tXCJ9LHtcImFwcE5hbWVcIjpcIueZvuW6plwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5iYWlkdS5zZWFyY2hib3hcIn0se1wiYXBwTmFtZVwiOlwi6I2j6ICA5ZWG5Z+OXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmhpaG9ub3Iudm1hbGxcIn0se1wiYXBwTmFtZVwiOlwiUVHmtY/op4jlmahcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20udGVuY2VudC5tdHRcIn0se1wiYXBwTmFtZVwiOlwi5ou85aSa5aSaXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnh1bm1lbmcucGluZHVvZHVvXCJ9LHtcImFwcE5hbWVcIjpcIuS7iuaXpeWktOadoVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5zcy5hbmRyb2lkLmFydGljbGUubmV3c1wifSx7XCJhcHBOYW1lXCI6XCJRUVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS50ZW5jZW50Lm1vYmlsZXFxXCJ9LHtcImFwcE5hbWVcIjpcIuWIt+acuueyvueBtei/nuaOpee7hOS7tlwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5zaHVhbWUuc3ByaXRlXCJ9LHtcImFwcE5hbWVcIjpcIueZvuW6puWcsOWbvlwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5iYWlkdS5CYWlkdU1hcFwifSx7XCJhcHBOYW1lXCI6XCLljrvlk6rlhL/ml4XooYxcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uUXVuYXJcIn0se1wiYXBwTmFtZVwiOlwi5raI5raI5Y+Y6aaW5a+MXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnpoaW1hLnh4YnNmXCJ9LHtcImFwcE5hbWVcIjpcIuiKnem6u+a2iOa2iOS5kFwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS56aGltYS56bXh4bFwifV1cbiAgICAgICAgICAgIC8v6I635Y+W57O757uf5bqU55So5L+h5oGv5YiX6KGoXG4gICAgICAgICAgICBsZXQgU3lzTGlzdDogc3RyaW5nID0ganNiLnJlZmxlY3Rpb24uY2FsbFN0YXRpY01ldGhvZChcIm9yZy9jb2NvczJkeC9qYXZhc2NyaXB0L0FwcEFjdGl2aXR5XCIsIFwiZ2V0U3lzdGVtQXBwTGlzdFwiLCBcIigpTGphdmEvbGFuZy9TdHJpbmc7XCIpO1xuICAgICAgICAgICAgLy8gY29uc29sZS5sb2coXCJjb2Nvcy0tU3lzTGlzdC0tLVwiLFN5c0xpc3QubGVuZ3RoK1wiLS0tLeexu+Weiy0tLVwiK3R5cGVvZihTeXNMaXN0KSk7XG4gICAgICAgICAgICAvLyBsZXQgU3lzTGlzdCA9IGBgK1t7XCJhcHBOYW1lXCI6XCLnsr7lk4HmjqjojZAxXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmh1YXdlaS5oaWZvbGRlclwifSx7XCJhcHBOYW1lXCI6XCJjb20uYW5kcm9pZC5jdHMucHJpdi5jdHNzaGltXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQuY3RzLnByaXYuY3Rzc2hpbVwifSx7XCJhcHBOYW1lXCI6XCLnm7jmnLpcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmNhbWVyYVwifSx7XCJhcHBOYW1lXCI6XCLnjqnmnLrmioDlt6dcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQudGlwc1wifSx7XCJhcHBOYW1lXCI6XCJBbmRyb2lkIFNlcnZpY2VzIExpYnJhcnlcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uZ29vZ2xlLmFuZHJvaWQuZXh0LnNlcnZpY2VzXCJ9LHtcImFwcE5hbWVcIjpcIkh3U3luZXJneVwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5odWF3ZWkuc3luZXJneVwifSx7XCJhcHBOYW1lXCI6XCLljY7kuLrmoYzpnaJcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQubGF1bmNoZXJcIn0se1wiYXBwTmFtZVwiOlwi5Y2O5Li66Z+z5LmQXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQubWVkaWFjZW50ZXJcIn0se1wiYXBwTmFtZVwiOlwi6YCa6K+dL+S/oeaBr+WtmOWCqFwiLFwiYXBwUGFja2FnZU5hbWVcIjpcImNvbS5hbmRyb2lkLnByb3ZpZGVycy50ZWxlcGhvbnlcIn0se1wiYXBwTmFtZVwiOlwi6ZO26IGU5Y+v5L+h5pyN5Yqh5a6J5YWo57uE5Lu2XCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLnVuaW9ucGF5LnRzbXNlcnZpY2VcIn0se1wiYXBwTmFtZVwiOlwiVUVJbmZvQ2hlY2tcIixcImFwcFBhY2thZ2VOYW1lXCI6XCJjb20uaHVhd2VpLmFuZHJvaWQuVUVJbmZvQ2hlY2tcIn0se1wiYXBwTmFtZVwiOlwi6YCa6K+d5b2V6Z+zXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQucGhvbmUucmVjb3JkZXJcIn0se1wiYXBwTmFtZVwiOlwi5pel5Y6G5a2Y5YKoXCIsXCJhcHBQYWNrYWdlTmFtZVwiOlwiY29tLmFuZHJvaWQucHJvdmlkZXJzLmNhbGVuZGFyXCJ9XVxuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgIHVuc3lzX2xpc3Q6IHVuU3lzTGlzdCxcbiAgICAgICAgICAgICAgICBzeXNfbGlzdDogU3lzTGlzdFxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwiY29jb3MtLS1nZXRJbGxlZ2FsaXR5QXBwLS1cIiwgSlNPTi5zdHJpbmdpZnkoc2VuZERhdGEpKVxuICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVc2VyRGV2XCIsIFwiUE9TVFwiLCBzZW5kRGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS0tVXNlckRldi0tXCIsIEpTT04uc3RyaW5naWZ5KHJlcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy/ojrflj5ZhZOeahOS/oeaBr1xuICAgIGdldEFkKCkge1xuICAgICAgICBsZXQgZGF0ZTogRGF0ZSA9IG5ldyBEYXRlKCk7XG4gICAgICAgIGxldCB5ZWFyOiBudW1iZXIgPSBkYXRlLmdldEZ1bGxZZWFyKCk7XG4gICAgICAgIGxldCBtb250aDogbnVtYmVyID0gZGF0ZS5nZXRNb250aCgpO1xuICAgICAgICBsZXQgZGF5OiBudW1iZXIgPSBkYXRlLmdldERhdGUoKTtcbiAgICAgICAgbGV0IGRhdGVTdHI6IHN0cmluZyA9IHllYXIgKyBcIlwiICsgbW9udGggKyBcIlwiICsgZGF5O1xuICAgICAgICAvLyBjb25zb2xlLmxvZyhcIlwiKVxuICAgICAgICBsZXQgbWFya0RhdGUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJtYXJrRGF0ZVwiKTtcbiAgICAgICAgaWYgKG1hcmtEYXRlICE9PSBkYXRlU3RyKSB7XG4gICAgICAgICAgICAvL+WmguaenOesrOS6jOWkqVxuICAgICAgICAgICAgY2MuVG9vbHMuZ2V0RnJlZXplKCk7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJhZFRpbWVzXCIsIDApO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRUaW1lcyA9IDA7XG4gICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJtYXJrRGF0ZVwiLCBkYXRlU3RyKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkVGltZXMgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhZFRpbWVzXCIpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5LuK5aSp57Sv6K6h6KeC55yL6KeG6aKR5qyh5pWwPVwiLCBjYy5Ub29scy5hZC5hZFRpbWVzKTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJDb25mXCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIC8v5aSn5bCP6KeG6aKRXG4gICAgICAgICAgICBjYy5Ub29scy5hZC5hZFNtYWxsID0gcmVzLmRhdGEuYWRfY29uZlswXS5hZF9wb3NpdGlvbl9pZDtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkQmlnID0gcmVzLmRhdGEuYWRfY29uZlsxXS5hZF9wb3NpdGlvbl9pZDtcbiAgICAgICAgICAgIGNjLlRvb2xzLmFkLmFkRGl2ID0gcmVzLmRhdGEuYWRfY29uZlswXS5lbmRfbnVtO1xuICAgICAgICAgICAgY2MuVG9vbHMuYWQuY29uZmlnID0gcmVzLmRhdGEuYXdhcmRfbnVtX2NvbmY7XG4gICAgICAgICAgICBjYy5Ub29scy5hZC5jb25maWcuc29ydChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgICAgICAgIGlmIChhLm51bSA+IGIubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoYS5udW0gPCBiLm51bSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiAwO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIGlmIChjYy5Ub29scy5hZC5hZFRpbWVzIDw9IGNjLlRvb2xzLmFkLmFkRGl2KSB7XG4gICAgICAgICAgICAgICAgaWYgKGNjLlRvb2xzLmFkLmFkU21hbGwpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkU21hbGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoY2MuVG9vbHMuYWQuYWRCaWcpIHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMuYWQuYWRQb3NJZCA9IGNjLlRvb2xzLmFkLmFkQmlnO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdEF3YXJkKCk7XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5bm/5ZGKZXJyLS1cIiArIGVycik7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8v5Yik5pat5piv5ZCm5bGP6JS9XG4gICAgc2hpZWxkQnRuKCkge1xuICAgICAgICBpZiAoY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvd0J0blwiKSkge1xuICAgICAgICAgICAgbGV0IHZhbCA9IGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIik7XG4gICAgICAgICAgICBsZXQgYnRuTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIik7XG4gICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgYnRuID0gYnRuTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fXCIgKyBpKTtcbiAgICAgICAgICAgICAgICBidG4uYWN0aXZlID0gdmFsID09IDEgPyBmYWxzZSA6IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodmFsID09IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1N0ZWFsTWFya0xheWVyKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlJlZ2lvbkNvbmZcIiwgXCJHRVRcIiwge30pLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgLy/kuI3mmL7npLpcbiAgICAgICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwic2hvd0J0blwiLCAxKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJ0bkxheWVyID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiYnRuX2xheWVyXCIpO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMzsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBidG4gPSBidG5MYXllci5nZXRDaGlsZEJ5TmFtZShcImJ0bl9cIiArIGkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnRuLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChyZXMuZGF0YS5zdGF0dXMgPT09IDEwMCkge1xuICAgICAgICAgICAgICAgICAgICAvL+aYvuekulxuICAgICAgICAgICAgICAgICAgICBjYy5zeXMubG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJzaG93QnRuXCIsIDEwMCk7XG4gICAgICAgICAgICAgICAgICAgIC8v5pi+56S65paw5omL5aWW5Yqx55WM6Z2iXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd05ld0xheWVyKCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5bGP6JS9ZXJyLS1cIiArIGVycik7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIHNob3dTdGVhbE1hcmtMYXllcigpIHtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLnBvcFN0ZWFsTWFya0xheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9zdGVhbE1hcmsnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdGVhbE1hcmtMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdGVhbE1hcmtMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wU3RlYWxNYXJrTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+iOt+WPluW8ueW5leS/oeaBr1xuICAgIGdldEJhcnJhZ2VJbmZvKGlzRmlyc3Q6IGJvb2xlYW4pIHtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJUcmVuZFwiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgaXRlbXMgPSByZXMuZGF0YS5pdGVtcztcbiAgICAgICAgICAgIHNlbGYuYmFycmFnZUFyciA9IFsuLi5zZWxmLmJhcnJhZ2VBcnIsIC4uLml0ZW1zXTtcbiAgICAgICAgICAgIC8vIGNvbnNvbGUubG9nKFwic2VsZi5iYXJyYWdlQXJyXCIsIHNlbGYuYmFycmFnZUFycik7XG4gICAgICAgICAgICBpZiAoaXNGaXJzdCkge1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBkYXRhID0gc2VsZi5iYXJyYWdlQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJyYWdlLmdldENvbXBvbmVudChcIkJhcnJhZ2VcIikuc2V0QmFycmFnZShkYXRhKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTG9jayA9IGZhbHNlO1xuICAgICAgICB9KS5jYXRjaCgoZXJyKSA9PiB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImNvY29zLS0tLeW8ueW5lWVyci0tXCIgKyBlcnIpO1xuICAgICAgICB9KVxuICAgIH1cbiAgICB1cGRhdGUoZHQpIHtcbiAgICAgICAgaWYgKHRoaXMuYmFycmFnZU1vdmUgJiYgdGhpcy5iYXJyYWdlICYmIGNjLnN5cy5sb2NhbFN0b3JhZ2UuZ2V0SXRlbShcInNob3dCdG5cIikgPT0gMTAwKSB7XG4gICAgICAgICAgICBsZXQgYm94ID0gdGhpcy5zY29yZUluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJib3hcIik7XG4gICAgICAgICAgICB0aGlzLmJhcnJhZ2UueCAtPSB0aGlzLmJhcnJhZ2VTcGVlZDtcbiAgICAgICAgICAgIGlmICh0aGlzLmJhcnJhZ2UueCA8IC03MDApIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IHNlbGYuYmFycmFnZUFyci5zaGlmdCgpO1xuICAgICAgICAgICAgICAgIHRoaXMuYmFycmFnZS5nZXRDb21wb25lbnQoXCJCYXJyYWdlXCIpLnNldEJhcnJhZ2UoZGF0YSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5iYXJyYWdlQXJyLmxlbmd0aCA8PSAwICYmICF0aGlzLmJhcnJhZ2VMb2NrKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5iYXJyYWdlTG9jayA9IHRydWU7XG4gICAgICAgICAgICAgICAgdGhpcy5nZXRCYXJyYWdlSW5mbyhmYWxzZSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYm94LnggPCA3MDApIHtcbiAgICAgICAgICAgICAgICBib3gueCArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3gueCA9IC03MDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5zdXBlclRpbWUgPiAzMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUaW1lID0gMDtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dTdXBlckxheWVyKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc3VwZXJUaW1lICs9IGR0O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gaWYodGhpcy5zdXBlclRpbWU+NSl7XG4gICAgICAgICAgICAvLyAgICAgY29uc29sZS5sb2coXCJ1cGRhdGVcIik7XG4gICAgICAgICAgICAvLyB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5pWw5pWwXG4gICAgKi9cbiAgICBpbml0U2h1U2h1KCkge1xuICAgICAgICAvLyDmlbDmlbDmiZPngrlcbiAgICAgICAgY2MuVG9vbHMuc2h1U2h1RG90KCk7XG4gICAgICAgIGNjLlRvb2xzLnNldERpc3RpbmN0SWQoKTtcbiAgICAgICAgY2MuVG9vbHMuc2V0VXNlcklkKCk7XG4gICAgfVxuICAgIC8qKlxuICAgICog5aSE55CG5bCP5pWw57K+5bqm6Zeu6aKYXG4gICAgKiBAcmV0dXJucyBcbiAgICAqL1xuICAgIGhhbmRsZU51bWJlcihudW1iKSB7XG4gICAgICAgIC8vIOWFiOiusuaVsOWtl+i9rOaNouaIkOWtl+espuS4slxuICAgICAgICBpZiAobnVtYikge1xuICAgICAgICAgICAgbGV0IHN0ciA9IFwiXCIgKyBudW1iO1xuICAgICAgICAgICAgbGV0IGtleSA9IHN0ci5zcGxpdChcIi5cIik7XG4gICAgICAgICAgICBsZXQgbmV3S2V5ID0ga2V5WzBdICsgXCIuXCIgKyBrZXlbMV0uc2xpY2UoMCwgMik7XG4gICAgICAgICAgICByZXR1cm4gbmV3S2V5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIFwiMFwiO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIneWni+WMluWktOWDj1xuICAgICAqIEBwYXJhbSB1cmw65aS05YOPdXJsXG4gICAgICogQHBhcmFtIHZpcDpWaXDnrYnnuqdcbiAgICAqL1xuICAgIGFkZEF2YXRhcih1cmw6IHN0cmluZywgdmlwOiBudW1iZXIpIHtcbiAgICAgICAgLy8gY2MuVG9vbHMudXNlckluZm8ubmV4dF9ncmFkZV9yYXRlID0gMC41O1xuICAgICAgICBsZXQgYmFyOiBjYy5TcHJpdGUgPSBzZWxmLnVzZXJJbmZvLmdldENoaWxkQnlOYW1lKFwidmlwX2JhclwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgYmFyLmZpbGxSYW5nZSA9IGNjLlRvb2xzLnVzZXJJbmZvLm5leHRfZ3JhZGVfcmF0ZTtcbiAgICAgICAgbGV0IGF2YXRhckpzID0gc2VsZi51c2VySW5mby5nZXRDaGlsZEJ5TmFtZShcImF2YXRhclwiKS5nZXRDb21wb25lbnQoXCJBdmF0YXJcIik7XG4gICAgICAgIGF2YXRhckpzLmxvYWRVcmwodXJsKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGF2YXRhckpzLnNldEF2YXRhcihyZXMsIHZpcClcbiAgICAgICAgfSlcbiAgICB9XG4gICAgLy8g5Yid5aeL5YyWdXNlckluZm9cbiAgICBpbml0VXNlckluZm8oKSB7XG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHt9O1xuICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIlVzZXJJbmZvXCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICB0aGlzLnVzZXJJbmZvLmdldENoaWxkQnlOYW1lKFwidXNlcl9uYW1lXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gcmVzLmRhdGEubmlja19uYW1lO1xuICAgICAgICAgICAgdGhpcy5pbml0U2h1U2h1KCk7XG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIHRoaXMuYWRkQXZhdGFyKHJlcy5kYXRhLmF2YXRhcl91cmwsIGNjLlRvb2xzLnVzZXJJbmZvLmdyYWRlX2lkKTtcbiAgICAgICAgICAgIC8v5Yik5pat57yT5a2Y55qE5ZOq5Liq5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICB0aGlzLmdldEFkKCk7XG4gICAgICAgICAgICAvLyDmmL7npLrlhrvnu5PnuqLljIXnmoTov5vluqbmnaFcbiAgICAgICAgICAgIGxldCBmcmVlemVuQnRuID0gdGhpcy5jb250ZW50LmdldENoaWxkQnlOYW1lKFwiYnRuX2xheWVyXCIpLmdldENoaWxkQnlOYW1lKFwiYnRuXzNcIik7XG4gICAgICAgICAgICBsZXQgZnJlZXplblJhdGUgPSBjYy5Ub29scy51c2VySW5mby5hY3RpdmVfcmF0ZS5zcGxpdChcInxcIik7XG4gICAgICAgICAgICBsZXQgZnJlZXplbkJhciA9IGZyZWV6ZW5CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJiYXJcIikuZ2V0Q29tcG9uZW50KGNjLlByb2dyZXNzQmFyKTtcbiAgICAgICAgICAgIGZyZWV6ZW5CYXIucHJvZ3Jlc3MgPSBOdW1iZXIoZnJlZXplblJhdGVbMF0pIC8gTnVtYmVyKGZyZWV6ZW5SYXRlWzFdKTtcbiAgICAgICAgICAgIGZyZWV6ZW5CdG4uZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gYCR7ZnJlZXplblJhdGVbMF19LyR7ZnJlZXplblJhdGVbMV19YDtcbiAgICAgICAgICAgIGlmIChmcmVlemVuUmF0ZVswXSA9PT0gZnJlZXplblJhdGVbMV0pIHtcbiAgICAgICAgICAgICAgICBmcmVlemVuQnRuLnJ1bkFjdGlvbihjYy5yZXBlYXRGb3JldmVyKGNjLnNlcXVlbmNlKGNjLnJvdGF0ZVRvKDAuMSwgMzApLCBjYy5yb3RhdGVUbygwLjEsIDApLCBjYy5yb3RhdGVUbygwLjEsIC0zMCksIGNjLnJvdGF0ZVRvKDAuMSwgMCksIGNjLmRlbGF5VGltZSgyKSkpKVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8g5aKe5Yqg5LiA5Liq5a6a5pe25ZmoIOS4gOWumuaXtumXtOayoeacieeci+inhumikSDkuLvliqjlvLnlh7rop4bpopFcbiAgICAgICAgICAgIGlmIChjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJzaG93QnRuXCIpID09IDEwMCkge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkFkSW50ZXJ2YWxTaG93XCIsIFwiR0VUXCIsIHt9KS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyZXMuZGF0YS5pc19zaG93ICYmIHRoaXMuYmFycmFnZU1vdmUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7nnIvlrozop4bpopEg6aKG5Y+W5pu05aSa57qi5YyF5Yi4PC9jPjwvYj5gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwic2hvd1Jld2FyZFZpZGVvQWRcIixcIjEyXCIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSwgY2MuVG9vbHMudXNlckluZm8uYWRfc2hvd19pbnRlcnZhbF9zZWNvbmQpXG4gICAgICAgICAgICB9XG4gICAgICAgIH0pLmNhdGNoKChlcnIpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiZXJyXCIsIGVycik7XG4gICAgICAgICAgICBjYy5maW5kKFwiQ2FudmFzL2xvc2VcIikuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIGlmIChlcnIgPT09IFwidG9rZW7pqozor4HlpLHotKUs6K+36YeN5paw55m76ZmGXCIgJiYgY2Muc3lzLmlzTmF0aXZlKSB7XG4gICAgICAgICAgICAgICAgLy8g6YeN5paw55m76ZmGXG4gICAgICAgICAgICAgICAgY2MuZGlyZWN0b3IubG9hZFNjZW5lKCdMb2dpbicpO1xuICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcInRva2VuXCIsIFwiXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICAvKipcbiAgICAgKiBAcGFyYW0gaXNSZWxvYWQgLS0tLeaYr+WQpuWKoOi9vea4uOaIjyBcbiAgICAgKi9cbiAgICByZWZyZXNoVXNlckluZm8oaXNSZWxvYWQ6IGJvb2xlYW4pIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiVXNlckluZm9cIiwgXCJHRVRcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgdGhpcy5hZGRDdXN0b21CYXJyYWdlKHJlcy5kYXRhKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvID0gcmVzLmRhdGE7XG4gICAgICAgICAgICAvL+WwhuinhumikeaatOWHu+WKoOWFpeW8ueW5leS4rVxuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLnN1cGVyVGltZSA9IDA7XG4gICAgICAgICAgICBpZiAoaXNSZWxvYWQpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSkuY2F0Y2goKGVycikgPT4ge1xuICAgICAgICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbiAgICAgICAgICAgIGNjLmZpbmQoXCJDYW52YXMvbG9zZVwiKS5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgaWYgKGVyciA9PT0gXCJ0b2tlbumqjOivgeWksei0pSzor7fph43mlrDnmbvpmYZcIiAmJiBjYy5zeXMuaXNOYXRpdmUpIHtcbiAgICAgICAgICAgICAgICAvLyDph43mlrDnmbvpmYZcbiAgICAgICAgICAgICAgICBjYy5kaXJlY3Rvci5sb2FkU2NlbmUoJ0xvZ2luJyk7XG4gICAgICAgICAgICAgICAgY2Muc3lzLmxvY2FsU3RvcmFnZS5zZXRJdGVtKFwidG9rZW5cIiwgXCJcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pXG4gICAgfVxuICAgIC8v5YOP5by55bmV6YeM6Z2i5aKe5Yqg5paw55qE5L+h5oGvXG4gICAgYWRkQ3VzdG9tQmFycmFnZShyZXM6IGFueSkge1xuICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubnVtX2F3YXJkX2dvdCA8IHJlcy5udW1fYXdhcmRfZ290KSB7XG4gICAgICAgICAgICAvL+eci+S6huaWsOinhumikSDmg7PlvLnluZXmlbDnu4TkuK3mt7vliqDkv6Hmga9cbiAgICAgICAgICAgIGxldCBpbmRleFJlZCA9IDAsXG4gICAgICAgICAgICAgICAgaW5kZXhDcml0ID0gMCxcbiAgICAgICAgICAgICAgICBjb25maWcgPSBjYy5Ub29scy5hZC5jb25maWc7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhcImFkIGNvbmZpZyBcIiwgY29uZmlnKTtcbiAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgY29uZmlnLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IF9jb25maWcgPSBjb25maWdbaV07XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5udW1fYXdhcmRfZ290IDw9IF9jb25maWcubnVtKSB7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4UmVkID0gX2NvbmZpZy5udW07XG4gICAgICAgICAgICAgICAgICAgIGluZGV4Q3JpdCA9IF9jb25maWcucmF0ZTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbGV0IGluZm8gPSB7fVxuICAgICAgICAgICAgaW5mb1tcImRhdGFcIl0gPSBg56ysJHtpbmRleFJlZH3kuKrnuqLljIUs5pq05Ye7JHtpbmRleENyaXR9Je+8iOW3sumihuWPliR7cmVzLm51bV9hd2FyZF9nb3R9LyR7aW5kZXhSZWR977yJYDtcbiAgICAgICAgICAgIGluZm9bXCJhY3Rpb25cIl0gPSBcInRpcFwiO1xuICAgICAgICAgICAgaW5mb1tcInVzZXJcIl0gPSB7fTtcbiAgICAgICAgICAgIGluZm9bXCJyZWZlcl91c2VyXCJdID0ge307XG4gICAgICAgICAgICBpbmZvW1widXNlclwiXS5hdmF0YXIgPSBjYy5Ub29scy51c2VySW5mby5hdmF0YXJfdXJsO1xuICAgICAgICAgICAgaW5mb1tcInVzZXJcIl0uZ3JhZGVfaWQgPSBjYy5Ub29scy51c2VySW5mby5ncmFkZV9pZDtcbiAgICAgICAgICAgIHRoaXMuYmFycmFnZUFyci51bnNoaWZ0KGluZm8pO1xuXG4gICAgICAgICAgICBsZXQgYXdyYWQ6IGNjLk5vZGUgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJhd2FyZF9iYXJcIik7XG4gICAgICAgICAgICBsZXQgcHJvZ3Jlc3NfYmFyOiBjYy5Ob2RlID0gYXdyYWQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc19iYXJcIik7XG4gICAgICAgICAgICBsZXQgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IHByb2dyZXNzX2Jhci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICAgICAgYmFyLnByb2dyZXNzID0gTnVtYmVyKChyZXMubnVtX2F3YXJkX2dvdCAvIGluZGV4UmVkKS50b0ZpeGVkKDIpKTtcbiAgICAgICAgICAgIGxldCBsYmw6IGNjLkxhYmVsID0gcHJvZ3Jlc3NfYmFyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBsYmwuc3RyaW5nID0gYCR7cmVzLm51bV9hd2FyZF9nb3R9LyR7aW5kZXhSZWR9KWA7XG4gICAgICAgICAgICBsZXQgbGF5b3V0OiBjYy5Ob2RlID0gYXdyYWQuZ2V0Q2hpbGRCeU5hbWUoXCJsYXlvdXRcIik7XG4gICAgICAgICAgICBsZXQgbGF5b3V0TGJsOiBjYy5SaWNoVGV4dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICAgICAgbGF5b3V0TGJsLnN0cmluZyA9IGA8Y29sb3I9I0ZGQ0EwMD7nrKw8L2M+PGNvbG9yPSNGQjVBMzg+JHtpbmRleFJlZH08L2NvbG9yPjxjb2xvcj0jRkZDQTAwPue6ouWMhee/uzwvYz48Y29sb3I9I0ZCNUEzOD4ke2luZGV4Q3JpdH0lPC9jb2xvcj48Y29sb3I9I0ZGQ0EwMD7lgI3mmrTlh7vlpZblirE8L2M+YDtcbiAgICAgICAgICAgIGxheW91dC5zY2FsZVggPSAwO1xuICAgICAgICAgICAgbGF5b3V0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBjYy50d2VlbihsYXlvdXQpLnRvKDAuNSwgeyBzY2FsZVg6IDEgfSkuZGVsYXkoNCkudG8oMC41LCB7IHNjYWxlWDogMCB9KS5zdGFydCgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8v5Yid5aeL5YyWYXdhcmRcbiAgICBpbml0QXdhcmQoKSB7XG4gICAgICAgIGxldCBpbmRleFJlZCA9IDAsXG4gICAgICAgICAgICBpbmRleENyaXQgPSAwLFxuICAgICAgICAgICAgY29uZmlnID0gY2MuVG9vbHMuYWQuY29uZmlnO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGNvbmZpZy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgbGV0IF9jb25maWcgPSBjb25maWdbaV07XG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubnVtX2F3YXJkX2dvdCA8PSBfY29uZmlnLm51bSkge1xuICAgICAgICAgICAgICAgIGluZGV4UmVkID0gX2NvbmZpZy5udW07XG4gICAgICAgICAgICAgICAgaW5kZXhDcml0ID0gX2NvbmZpZy5yYXRlO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGxldCBhd3JhZDogY2MuTm9kZSA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImF3YXJkX2JhclwiKTtcbiAgICAgICAgbGV0IHByb2dyZXNzX2JhcjogY2MuTm9kZSA9IGF3cmFkLmdldENoaWxkQnlOYW1lKFwicHJvZ3Jlc3NfYmFyXCIpO1xuICAgICAgICBsZXQgYmFyOiBjYy5Qcm9ncmVzc0JhciA9IHByb2dyZXNzX2Jhci5nZXRDb21wb25lbnQoY2MuUHJvZ3Jlc3NCYXIpO1xuICAgICAgICBiYXIucHJvZ3Jlc3MgPSBOdW1iZXIoKGNjLlRvb2xzLnVzZXJJbmZvLm51bV9hd2FyZF9nb3QgLyBpbmRleFJlZCkudG9GaXhlZCgyKSk7XG4gICAgICAgIGxldCBsYmw6IGNjLkxhYmVsID0gcHJvZ3Jlc3NfYmFyLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIGxibC5zdHJpbmcgPSBgJHtjYy5Ub29scy51c2VySW5mby5udW1fYXdhcmRfZ290fS8ke2luZGV4UmVkfWA7XG5cbiAgICAgICAgbGV0IGxheW91dDogY2MuTm9kZSA9IGF3cmFkLmdldENoaWxkQnlOYW1lKFwibGF5b3V0XCIpO1xuICAgICAgICBsZXQgbGF5b3V0TGJsOiBjYy5SaWNoVGV4dCA9IGxheW91dC5nZXRDaGlsZEJ5TmFtZShcImxibFwiKS5nZXRDb21wb25lbnQoY2MuUmljaFRleHQpO1xuICAgICAgICBsYXlvdXRMYmwuc3RyaW5nID0gYDxjb2xvcj0jRkZDQTAwPuesrDwvYz48Y29sb3I9I0ZCNUEzOD4ke2luZGV4UmVkfTwvY29sb3I+PGNvbG9yPSNGRkNBMDA+57qi5YyF57+7PC9jPjxjb2xvcj0jRkI1QTM4PiR7aW5kZXhDcml0fSU8L2NvbG9yPjxjb2xvcj0jRkZDQTAwPuWAjeaatOWHu+WlluWKsTwvYz5gO1xuICAgICAgICBsYXlvdXQuc2NhbGVYID0gMDtcbiAgICAgICAgbGF5b3V0LnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgIGNjLnR3ZWVuKGxheW91dCkudG8oMC41LCB7IHNjYWxlWDogMSB9KS5kZWxheSg0KS50bygwLjUsIHsgc2NhbGVYOiAwIH0pLnN0YXJ0KCk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWIt+aWsOmSseeahOaOpeWPo1xuICAgICovXG4gICAgcmVmcmVzaFdhbGxldCgpIHtcbiAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiV2FsbGV0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLS0t5Yi35paw546w5pyJ6YeR6ZKxLS0tLVwiLCBKU09OLnN0cmluZ2lmeShyZXMpKTtcbiAgICAgICAgICAgIGNjLlRvb2xzLndhbGxldC5hbW91bnQgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICBjYy5Ub29scy53YWxsZXQuc2F2ZV9hbW91bnQgPSByZXMuZGF0YS5zYXZlX2Ftb3VudDtcbiAgICAgICAgICAgIGNjLlRvb2xzLndhbGxldC5zYXZlX2ZyZWV6ZV9hbW91bnQgPSByZXMuZGF0YS5zYXZlX2ZyZWV6ZV9hbW91bnQ7XG4gICAgICAgICAgICBzZWxmLmNhc2hJbmZvLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpLnN0cmluZyA9IHJlcy5kYXRhLmFtb3VudDtcbiAgICAgICAgICAgIGlmIChzZWxmLmxvdHRlcnlMYXllcikge1xuICAgICAgICAgICAgICAgIHNlbGYubG90dGVyeUxheWVyLmdldENoaWxkQnlOYW1lKFwid3JhcFwiKS5nZXRDaGlsZEJ5TmFtZShcInRvdGFsX2Nhc2hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoc2VsZi5zdGVhbExheWVyKSB7XG4gICAgICAgICAgICAgICAgbGV0IHdyYXA6IGNjLk5vZGUgPSBzZWxmLnN0ZWFsTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RlYWxMYXllci5nZXRDaGlsZEJ5TmFtZShcInRvdGFsX2Nhc2hcIikuZ2V0Q2hpbGRCeU5hbWUoXCJsYmxcIikuZ2V0Q29tcG9uZW50KGNjLkxhYmVsKS5zdHJpbmcgPSByZXMuZGF0YS5hbW91bnQ7XG4gICAgICAgICAgICAgICAgbGV0IGRvd246IGNjLk5vZGUgPSB3cmFwLmdldENoaWxkQnlOYW1lKFwiZG93blwiKTtcbiAgICAgICAgICAgICAgICBsZXQgdG9kYXlDYXNoOiBjYy5Ob2RlID0gZG93bi5nZXRDaGlsZEJ5TmFtZShcInRvZGF5X2Nhc2hcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvZGF5Q2FzaFRleHQ6IGNjLkxhYmVsID0gdG9kYXlDYXNoLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRvZGF5Q2FzaFRleHQuc3RyaW5nID0gcmVzLmRhdGEuc2F2ZV9hbW91bnQ7XG5cbiAgICAgICAgICAgICAgICBsZXQgdG9tb3Jyb3dDYXNoOiBjYy5Ob2RlID0gZG93bi5nZXRDaGlsZEJ5TmFtZShcInRvbW9ycm93X2Nhc2hcIik7XG4gICAgICAgICAgICAgICAgbGV0IHRvbW9ycm93Q2FzaFRleHQ6IGNjLkxhYmVsID0gdG9tb3Jyb3dDYXNoLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgICAgIHRvbW9ycm93Q2FzaFRleHQuc3RyaW5nID0gcmVzLmRhdGEuc2F2ZV9mcmVlemVfYW1vdW50O1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cblxuICAgIC8qKlxuICAgICAqIOmihOWKoOi9vXByZWZhYlxuICAgICAqL1xuICAgIHByZWxvYWRQcmVmYWIoKSB7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvZ2V0Q2FzaCcsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvc2V0dGluZycsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvbG90dGVyeScsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvcG9wU3VjY2VzcycsIGNjLlByZWZhYik7XG4gICAgICAgIGNjLnJlc291cmNlcy5wcmVsb2FkKCdQcmVmYWIvcG9wRGVsZXRlJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi90aWNrZXQnLCBjYy5QcmVmYWIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCgnUHJlZmFiL3N1cGVyJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9zaWduJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9zdGVhbE1hcmsnLCBjYy5QcmVmYWIpO1xuICAgICAgICBjYy5yZXNvdXJjZXMucHJlbG9hZCgnUHJlZmFiL3NlY3JldExheWVyJywgY2MuUHJlZmFiKTtcbiAgICAgICAgY2MucmVzb3VyY2VzLnByZWxvYWQoJ1ByZWZhYi9wb3BOZXcnLCBjYy5QcmVmYWIpO1xuICAgIH1cbiAgICBsb2FkUHJlZmFiKHVybDogc3RyaW5nKSB7XG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XG4gICAgICAgICAgICBjYy5yZXNvdXJjZXMubG9hZCh1cmwsIGNjLlByZWZhYiwgZnVuY3Rpb24gKGVyciwgcHJlZmFiKSB7XG4gICAgICAgICAgICAgICAgaWYgKHByZWZhYikge1xuICAgICAgICAgICAgICAgICAgICByZXNvbHZlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pXG4gICAgfVxuICAgIHN0YXJ0KCkge1xuICAgICAgICAvLyDms6jlhozngrnlh7vkuovku7ZcbiAgICAgICAgdGhpcy5yZWdpc3RlckV2ZW50KCk7XG4gICAgfVxuICAgIHJlZ2lzdGVyRXZlbnQoKSB7XG4gICAgICAgIGxldCBidG5MYXllciA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9sYXllclwiKTtcbiAgICAgICAgbGV0IGJ0blR5cGUgPSBbXCJzaG93U2V0TGF5ZXJcIiwgXCJzaG93R2V0Q2FzaExheWVyXCIsIFwic2hvd1VuRnJlZXplTGF5ZXJcIiwgXCJzaG93U3RlYWxMYXllclwiLCBcInNob3dMb3R0ZXJ5bGVMYXllclwiLCBcImNsaWNrUmVkXCIsIFwic2hvd1NpZ25MYXllclwiLCBcInRvdWNoU25vd1wiXVxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSA4OyBpKyspIHtcbiAgICAgICAgICAgIGxldCBidG4gPSBidG5MYXllci5nZXRDaGlsZEJ5TmFtZShcImJ0bl9cIiArIGkpO1xuICAgICAgICAgICAgYnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpc1tidG5UeXBlW2kgLSAxXV0sIHRoaXMpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBzZWNyZXRCdG4gPSBjYy5maW5kKFwiQ2FudmFzL3NlY3JldFwiKTtcbiAgICAgICAgc2VjcmV0QnRuLm9uKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93U2VjcmV0TGF5ZXIsIHRoaXMpXG5cbiAgICAgICAgbGV0IGZyZXNoQnRuID0gY2MuZmluZChcIkNhbnZhcy9sb3NlL2ZyZXNoX2J0blwiKVxuICAgICAgICBmcmVzaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaFVzZXJJbmZvLCB0aGlzKTtcblxuICAgICAgICBsZXQgZ2V0Q2FzaEJ0biA9IHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIilcbiAgICAgICAgZ2V0Q2FzaEJ0bi5vbihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMuc2hvd0dldENhc2hMYXllciwgdGhpcyk7XG4gICAgfVxuICAgIHJlbW92ZUV2ZW50KCkge1xuICAgICAgICBsZXQgYnRuTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIik7XG4gICAgICAgIGxldCBidG5UeXBlID0gW1wic2hvd1NldExheWVyXCIsIFwic2hvd0dldENhc2hMYXllclwiLCBcInNob3dVbkZyZWV6ZUxheWVyXCIsIFwic2hvd1N0ZWFsTGF5ZXJcIiwgXCJzaG93TG90dGVyeWxlTGF5ZXJcIiwgXCJjbGlja1JlZFwiLCBcInNob3dTaWduTGF5ZXJcIiwgXCJ0b3VjaFNub3dcIl1cbiAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gODsgaSsrKSB7XG4gICAgICAgICAgICBsZXQgYnRuID0gYnRuTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fXCIgKyBpKTtcbiAgICAgICAgICAgIGJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzW2J0blR5cGVbaSAtIDFdXSwgdGhpcyk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IHNlY3JldEJ0biA9IGNjLmZpbmQoXCJDYW52YXMvc2VjcmV0XCIpO1xuICAgICAgICBzZWNyZXRCdG4ub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5zaG93U2VjcmV0TGF5ZXIsIHRoaXMpO1xuICAgICAgICBsZXQgZnJlc2hCdG4gPSBjYy5maW5kKFwiQ2FudmFzL2xvc2UvZnJlc2hfYnRuXCIpXG4gICAgICAgIGZyZXNoQnRuLm9mZihjYy5Ob2RlLkV2ZW50VHlwZS5UT1VDSF9FTkQsIHRoaXMucmVmcmVzaFVzZXJJbmZvLCB0aGlzKTtcblxuICAgICAgICBsZXQgZ2V0Q2FzaEJ0biA9IHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJidG5cIilcbiAgICAgICAgZ2V0Q2FzaEJ0bi5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLnNob3dHZXRDYXNoTGF5ZXIsIHRoaXMpO1xuICAgIH1cbiAgICB0b3VjaFNub3coKSB7XG4gICAgICAgIC8vIOeCueWHu+WKoOmUgVxuICAgICAgICBpZiAoY2MuVG9vbHMubG9jaykge1xuICAgICAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBgPGI+PGNvbG9yPSNmZmZmZmY+54K55Ye75aSq6aKR57mBPC9jPjwvYj5gKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNjLlRvb2xzLmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgfSwgMzAwMClcbiAgICAgICAgfVxuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX3Nub3dtYW5fMVwifSlcbiAgICAgICAgY2MuVG9vbHMuc2hvd1RpcHModGhpcy5ub2RlLCBgPGI+PGNvbG9yPSNmZmZmZmY+55yL5a6M6KeG6aKRIOmihuWPluabtOWkmue6ouWMheWIuDwvYz48L2I+YCkudGhlbigoKSA9PiB7XG4gICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJzaG93UmV3YXJkVmlkZW9BZFwiLFwiM1wiKVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLy/mlrnlkJEgMeaYr+eOsOmHkee6ouWMhSAy5piv5a2Y6ZKx572QXG4gICAgc2hvd1BhY2tldChvYmo6IGFueSkge1xuICAgICAgICBsZXQgZW5kID0gb2JqLmRpciA9PT0gMSA/IHRoaXMuY2FzaEluZm8gOiB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fbGF5ZXJcIikuZ2V0Q2hpbGRCeU5hbWUoXCJidG5fNFwiKVxuICAgICAgICB0aGlzLnNob3dQYWNrZXRBbmltKDEwLCAwLjAxLCAyMDAsIGNjLnYzKDM2MCwgNjQwKSwgZW5kLCAoKSA9PiB7XG4gICAgICAgICAgICBjYy5Ub29scy5FdmVudC5lbWl0KFwicmVmcmVzaFdhbGxldFwiKTtcbiAgICAgICAgICAgIGlmIChvYmoudmlkZW9UeXBlID09PSA0KSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiaW5pdFwiLCB0cnVlKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAob2JqLnZpZGVvVHlwZSA9PT0gOSkge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLmVtaXRFdmVudChcImluaXRcIiwgZmFsc2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIH1cbiAgICBzaG93U2VjcmV0TGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLnNob3dTZWNyZXRUaW1lcysrO1xuICAgICAgICBpZiAodGhpcy5zaG93U2VjcmV0VGltZXMgPj0gMykge1xuICAgICAgICAgICAgdGhpcy5zaG93U2VjcmV0VGltZXMgPSAwO1xuICAgICAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcFNlY3JldExheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvc2VjcmV0TGF5ZXInKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcFNlY3JldExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgICAgIHNlbGYucG9wU2VjcmV0TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcFNlY3JldExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG91Y2hSZWQoKSB7XG4gICAgICAgIGlmIChjYy5Ub29scy51c2VySW5mby51cF9sZXZlbF9udW1fbm90X2dldCkge1xuICAgICAgICAgICAgLy8g54K55Ye75Yqg6ZSBXG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMubG9jaykge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgYDxiPjxjb2xvcj0jZmZmZmZmPueCueWHu+Wkqumikee5gTwvYz48L2I+YCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5sb2NrID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH0sIDMwMDApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX2NsaWNrcmVkYmFnXzFcIn0pXG4gICAgICAgICAgICBpZiAoY2MuVG9vbHMudXNlckluZm8ubmV3X2ZyZWVfbGV2ZWxfdGltZXMpIHtcbiAgICAgICAgICAgICAgICBsZXQgc2VuZERhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIHR5cGU6IDQsXG4gICAgICAgICAgICAgICAgICAgIHRzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJOZXdBd2FyZFwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJnZXRUaWNrZXRcIiwgeyB0aWNrZXQ6IHJlcy5kYXRhLmFtb3VudCwgYWRkOiByZXMuZGF0YS5hZGRfYW1vdW50LCB0eXBlOiAxLCB2aWRlb1R5cGU6IDQgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSwgYDxiPjxjb2xvcj0jZmZmZmZmPueci+WujOinhumikSDpooblj5bmm7TlpJrnuqLljIXliLg8L2M+PC9iPmApLnRoZW4oKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJzaG93UmV3YXJkVmlkZW9BZFwiLFwiNFwiKVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogcG9wU3VjY2Vzc+eVjOmdolxuICAgICovXG4gICAgc2hvd1BvcFN1Y2Nlc3NMYXllcigpIHtcbiAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bNF0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5wb3BTdWNjZXNzTGF5ZXIpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9wb3BTdWNjZXNzJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3BTdWNjZXNzTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGpzID0gc2VsZi5wb3BTdWNjZXNzTGF5ZXIuZ2V0Q29tcG9uZW50KFwiUG9wU3VjY2Vzc1wiKTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuY3VyU2NvcmUgPiA2MDAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBudW0gPSAzXG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJTY29yZSA8IDYwMDAgJiYgdGhpcy5jdXJTY29yZSA+IDMwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDJcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG51bSA9IDFcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcFN1Y2Nlc3NMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICBqcy5zZXRTdGFyKG51bSlcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyB0aGlzLnBvcFN1Y2Nlc3NMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCBqcyA9IHNlbGYucG9wU3VjY2Vzc0xheWVyLmdldENvbXBvbmVudChcIlBvcFN1Y2Nlc3NcIik7XG4gICAgICAgICAgICAgICAgbGV0IG51bTtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5jdXJTY29yZSA+IDYwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gM1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5jdXJTY29yZSA8IDYwMDAgJiYgdGhpcy5jdXJTY29yZSA+IDMwMDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gMlxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIG51bSA9IDFcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgc2VsZi5wb3BTdWNjZXNzTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBqcy5zZXRTdGFyKG51bSlcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuICAgIC8qKlxuICAgKiBwb3BEZWxldGXnlYzpnaJcbiAgICogQHBhcmFtICB0eXBlIDEtLS3msJTms6HnuqLljIUgMi0tLea2iOmZpOe6ouWMhVxuICAgKiBAcGFyYW0gdmlkZW9UeXBlIC0tLeinhumikeexu+Wei1xuICAgKi9cbiAgICBzaG93UG9wRGVsZXRlTGF5ZXIodHlwZTogbnVtYmVyLCB2aWRlb1R5cGU6IG51bWJlcikge1xuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnBvcERlbGV0ZUxheWVyKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvcG9wRGVsZXRlJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICAgICAgc2VsZi5wb3BEZWxldGVMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgICAgICBzZWxmLnBvcERlbGV0ZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgIGxldCB0aXRsZSA9IHNlbGYucG9wRGVsZXRlTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJ3cmFwXCIpLmdldENoaWxkQnlOYW1lKFwidGl0bGVcIikuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSk7XG4gICAgICAgICAgICAgICAgICAgIHRpdGxlLnNwcml0ZUZyYW1lID0gdGhpcy5wb3BEZWxldGVUeXBlW3R5cGUgLSAxXVxuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJ2aWRlb1R5cGVcIiwgdmlkZW9UeXBlKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBvcERlbGV0ZUxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICAgICAgbGV0IHRpdGxlID0gc2VsZi5wb3BEZWxldGVMYXllci5nZXRDaGlsZEJ5TmFtZShcIndyYXBcIikuZ2V0Q2hpbGRCeU5hbWUoXCJ0aXRsZVwiKS5nZXRDb21wb25lbnQoY2MuU3ByaXRlKTtcbiAgICAgICAgICAgICAgICB0aXRsZS5zcHJpdGVGcmFtZSA9IHRoaXMucG9wRGVsZXRlVHlwZVt0eXBlIC0gMV1cbiAgICAgICAgICAgICAgICBjYy5Ub29scy5lbWl0RXZlbnQoXCJ2aWRlb1R5cGVcIiwgdmlkZW9UeXBlKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICB9LCAwLjUpXG4gICAgfVxuICAgIC8qKlxuICAgICAqIOetvuWIsOWlluWKsVxuICAgICAqL1xuICAgIHNob3dTaWduTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfY2xpY2tzaWduXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5zaWduTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3NpZ24nKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5zaWduTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2lnbkxheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zaWduTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDmlrDmiYvlpZblirFcbiAgICAgKi9cbiAgICBzaG93TmV3TGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wb3BOZXdMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvcG9wTmV3JykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wTmV3TGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wTmV3TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLnBvcE5ld0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog6LaF57qn57qi5YyF55WM6Z2iXG4gICAgICovXG4gICAgc2hvd1N1cGVyTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICB0aGlzLmJhcnJhZ2VNb3ZlID0gZmFsc2U7XG4gICAgICAgIGlmICghdGhpcy5wb3BTdXBlckxheWVyKSB7XG4gICAgICAgICAgICB0aGlzLmxvYWRQcmVmYWIoJ1ByZWZhYi9zdXBlcicpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnBvcFN1cGVyTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYucG9wU3VwZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMucG9wU3VwZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICogdGlja2V055WM6Z2iXG4gICAgKiBAcGFyYW0gdHlwZSDmnaXoh6rlh6DnuqfnlYzpnaJcbiAgICAqL1xuICAgIHNob3dUaWNrZXRMYXllcih0aWNrZXRJbmZvOiB0aWNrZXRJbmZvKSB7XG4gICAgICAgIGNvbnNvbGUubG9nKFwiY29jb3MtLeiOt+W+l+WlluWKseeahOS/oeaBry0tLVwiLCBKU09OLnN0cmluZ2lmeSh0aWNrZXRJbmZvKSk7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICBpZiAoIXRoaXMudGlja2V0TGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3RpY2tldCcpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLnRpY2tldExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXRMYXllci56SW5kZXggPSA5OTk5O1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi50aWNrZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGxldCB0aWNrZXRKcyA9IHRoaXMudGlja2V0TGF5ZXIuZ2V0Q29tcG9uZW50KFwiVGlja2V0XCIpO1xuICAgICAgICAgICAgICAgIHRpY2tldEpzLnNldFRpY2tldCh0aWNrZXRJbmZvLnRpY2tldCwgdGlja2V0SW5mby5hZGQsIHRpY2tldEluZm8udHlwZSwgdGlja2V0SW5mby52aWRlb1R5cGUpXG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy50aWNrZXRMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgbGV0IHRpY2tldEpzID0gdGhpcy50aWNrZXRMYXllci5nZXRDb21wb25lbnQoXCJUaWNrZXRcIik7XG4gICAgICAgICAgICB0aWNrZXRKcy5zZXRUaWNrZXQodGlja2V0SW5mby50aWNrZXQsIHRpY2tldEluZm8uYWRkLCB0aWNrZXRJbmZvLnR5cGUsIHRpY2tldEluZm8udmlkZW9UeXBlKTtcbiAgICAgICAgfVxuICAgICAgICAvLyB0aGlzLnJlZnJlc2hVc2VySW5mbyhmYWxzZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICog6Kej5Ya757qi5YyF55WM6Z2iXG4gICAgKi9cbiAgICBzaG93VW5GcmVlemVMYXllcihlKSB7XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldDtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfaWNldGFibGVfMVwifSlcbiAgICAgICAgLy8g6Kej5Ya757qi5YyF5paw6ZyA5rGCXG4gICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiQWN0aXZlSW5mb1wiLCBcIkdFVFwiLCB7fSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICBsZXQgbXNnID0gY2MuZmluZChcIkNhbnZhcy9tc2dcIik7XG4gICAgICAgICAgICBtc2cuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIG1zZy5vcGFjaXR5ID0gMDtcbiAgICAgICAgICAgIGxldCBfbXNnID0gbXNnLmdldENoaWxkQnlOYW1lKFwibGJsXCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgICAgICBfbXNnLnN0cmluZyA9IHJlcy5kYXRhLnRpcDtcbiAgICAgICAgICAgIG1zZy5zdG9wQWxsQWN0aW9ucygpO1xuICAgICAgICAgICAgbXNnLnJ1bkFjdGlvbihjYy5zZXF1ZW5jZShjYy5mYWRlSW4oMC41KSwgY2MuZGVsYXlUaW1lKDEpLCBjYy5mYWRlT3V0KDAuNSksIGNjLmNhbGxGdW5jKCgpID0+IHtcbiAgICAgICAgICAgICAgICBtc2cuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgICAgICB9KSkpO1xuICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmZyZWV6ZV9hbW91bnQgPiAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5zaG93UGFja2V0KCk7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuZW1pdEV2ZW50KFwiZ2V0VGlja2V0XCIsIHsgdGlja2V0OiByZXMuZGF0YS5mcmVlemVfYW1vdW50LCBhZGQ6IDAsIHR5cGU6IDEsIHZpZGVvVHlwZTogMSB9KTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuc3RvcEFsbEFjdGlvbnMoKTtcbiAgICAgICAgICAgICAgICB0YXJnZXQuYW5nbGUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgLyoqXG4gICAgICog5a2Y6ZKx572Q55WM6Z2iXG4gICAgICovXG4gICAgc2hvd1NhdmVDYXNoTGF5ZXIoKSB7XG4gICAgICAgIC8vIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1szXSwgZmFsc2UsIDEpO1xuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX1BpZ2d5YmFua18xXCJ9KVxuICAgICAgICBpZiAoIXRoaXMuc2F2ZUNhc2hMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvc2F2ZUNhc2gnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5zYXZlQ2FzaExheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICBsZXQganMgPSBzZWxmLnNhdmVDYXNoTGF5ZXIuZ2V0Q29tcG9uZW50KFwiU2F2ZUNhc2hcIik7XG4gICAgICAgICAgICAgICAganMuaXNGaXJzdFNob3cgPSB0cnVlO1xuICAgICAgICAgICAgICAgIHNlbGYuc2F2ZUNhc2hMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2F2ZUNhc2hMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICog6K6+572u55WM6Z2iXG4gICAgKi9cbiAgICBzaG93U2V0TGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfY2xpY2tzZXR0aW5nXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5zZXR0aW5nTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3NldHRpbmcnKS50aGVuKChwcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc2V0dGluZ0xheWVyID0gbGF5ZXI7XG4gICAgICAgICAgICAgICAgc2VsZi5ub2RlLmFkZENoaWxkKGxheWVyKTtcbiAgICAgICAgICAgICAgICBzZWxmLnNldHRpbmdMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuc2V0dGluZ0xheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5o+Q546w55WM6Z2iXG4gICAgICovXG4gICAgc2hvd0dldENhc2hMYXllcigpIHtcbiAgICAgICAgdGhpcy5iYXJyYWdlTW92ZSA9IGZhbHNlO1xuICAgICAgICAvLyBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bM10sIGZhbHNlLCAxKTtcbiAgICAgICAgQ29jb3NCcmlkZ2UuSlNDYWxsTmF0aXZlKFwicGxheURvdFwiLFwiXCIre1wiZG90XCI6XCJjbGlja19jYXNoXzFcIn0pXG4gICAgICAgIGlmICghdGhpcy5nZXRDYXNoTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL2dldENhc2gnKS50aGVuKChwcmVmYWI6IGNjLlByZWZhYikgPT4ge1xuICAgICAgICAgICAgICAgIGxldCBsYXllciA9IGNjLmluc3RhbnRpYXRlKHByZWZhYik7XG4gICAgICAgICAgICAgICAgc2VsZi5nZXRDYXNoTGF5ZXIgPSBsYXllcjtcbiAgICAgICAgICAgICAgICBzZWxmLm5vZGUuYWRkQ2hpbGQobGF5ZXIpO1xuICAgICAgICAgICAgICAgIHNlbGYuZ2V0Q2FzaExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5nZXRDYXNoTGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvKipcbiAgICAgKiDovaznm5jnlYzpnaJcbiAgICAgKi9cbiAgICBzaG93TG90dGVyeWxlTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfdHVybnRhYmxlXzFcIn0pXG4gICAgICAgIGxldCBidG5MYXllciA9IHRoaXMuY29udGVudC5nZXRDaGlsZEJ5TmFtZShcImJ0bl9sYXllclwiKTtcbiAgICAgICAgbGV0IGJveEJ0biA9IGJ0bkxheWVyLmdldENoaWxkQnlOYW1lKFwiYnRuXzVcIik7XG4gICAgICAgIGJveEJ0bi5nZXRDaGlsZEJ5TmFtZShcInJlZFwiKS5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgaWYgKCF0aGlzLmxvdHRlcnlMYXllcikge1xuICAgICAgICAgICAgdGhpcy5sb2FkUHJlZmFiKCdQcmVmYWIvbG90dGVyeScpLnRoZW4oKHByZWZhYjogY2MuUHJlZmFiKSA9PiB7XG4gICAgICAgICAgICAgICAgbGV0IGxheWVyID0gY2MuaW5zdGFudGlhdGUocHJlZmFiKTtcbiAgICAgICAgICAgICAgICBzZWxmLmxvdHRlcnlMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5sb3R0ZXJ5TGF5ZXIuYWN0aXZlID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmxvdHRlcnlMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICB9XG4gICAgfVxuICAgIC8qKlxuICAgICAqIOWkp+S5seaWl+eVjOmdolxuICAgICovXG4gICAgc2hvd1N0ZWFsTGF5ZXIoKSB7XG4gICAgICAgIHRoaXMuYmFycmFnZU1vdmUgPSBmYWxzZTtcbiAgICAgICAgLy8gY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzNdLCBmYWxzZSwgMSk7XG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInBsYXlEb3RcIixcIlwiK3tcImRvdFwiOlwiY2xpY2tfc3RlYWxfMVwifSlcbiAgICAgICAgaWYgKCF0aGlzLnN0ZWFsTGF5ZXIpIHtcbiAgICAgICAgICAgIHRoaXMubG9hZFByZWZhYignUHJlZmFiL3N0ZWFsJykudGhlbigocHJlZmFiOiBjYy5QcmVmYWIpID0+IHtcbiAgICAgICAgICAgICAgICBsZXQgbGF5ZXIgPSBjYy5pbnN0YW50aWF0ZShwcmVmYWIpO1xuICAgICAgICAgICAgICAgIHNlbGYuc3RlYWxMYXllciA9IGxheWVyO1xuICAgICAgICAgICAgICAgIHNlbGYubm9kZS5hZGRDaGlsZChsYXllcik7XG4gICAgICAgICAgICAgICAgc2VsZi5zdGVhbExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zdGVhbExheWVyLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8gdG9kb1xuICAgIGNsaWNrUmVkKGU6IGFueSkge1xuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMF0sIGZhbHNlLCAxKTtcbiAgICAgICAgaWYgKCF0aGlzLmNhbkNsaWNrUmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jbGlja1JlZE51bWJlcisrO1xuICAgICAgICBsZXQgYmFyID0gZS50YXJnZXQuZ2V0Q2hpbGRCeU5hbWUoXCJwcm9ncmVzc1wiKS5nZXRDaGlsZEJ5TmFtZShcImJhclwiKTtcbiAgICAgICAgYmFyLndpZHRoID0gdGhpcy5jbGlja1JlZE51bWJlciA+PSA2ID8gMTYgKiA2IDogdGhpcy5jbGlja1JlZE51bWJlciAqIDE2O1xuICAgICAgICAvLyDlvZPlpKnpppbmrKHngrnlh7tcbiAgICAgICAgaWYgKGNjLlRvb2xzLnVzZXJJbmZvLmlzX2RheV9maXJzdF9jbGlja19hd2FyZCkge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkZpcnN0Q2xpY2tBd2FyZFwiLCBcIlBPU1RcIiwgc2VuZERhdGEpLnRoZW4oKHJlcykgPT4ge1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnVzZXJJbmZvLmlzX2RheV9maXJzdF9jbGlja19hd2FyZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcERlbGV0ZUxheWVyKDEsIDEpO1xuICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICAvLyBcbiAgICAgICAgaWYgKCF0aGlzLnN0YXJ0Q2xpY2tUaW1lKSB7XG4gICAgICAgICAgICB0aGlzLnN0YXJ0Q2xpY2tUaW1lID0gbmV3IERhdGUoKS5nZXRUaW1lKCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgbmV3VGltZSA9IG5ldyBEYXRlKCkuZ2V0VGltZSgpO1xuICAgICAgICAgICAgbGV0IGR0ID0gbmV3VGltZSAtIHRoaXMuc3RhcnRDbGlja1RpbWU7XG4gICAgICAgICAgICB0aGlzLmNsaWNrUmVkQXJyLnB1c2goZHQpO1xuICAgICAgICAgICAgdGhpcy5zdGFydENsaWNrVGltZSA9IG5ld1RpbWU7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tSZWRBcnIubGVuZ3RoID09PSAzKSB7XG4gICAgICAgICAgICAvLyDlvZPntK/orqHkuInmrKHkuYvlkI7lsLHooYzov5Dnrpcg5b2T5YC85bCP5LqOODAwIOivtOaYjuatpOaXtui/nueCueS6hjPmrKEg5bm25pKt5pS+5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICB2YXIgdG90YWwgPSB0aGlzLmNsaWNrUmVkQXJyLnJlZHVjZShcbiAgICAgICAgICAgICAgICAoYWNjLCBjdXIpID0+IGFjYyArIGN1cixcbiAgICAgICAgICAgICAgICAwXG4gICAgICAgICAgICApO1xuICAgICAgICAgICAgaWYgKHRvdGFsIDwgODAwKSB7XG4gICAgICAgICAgICAgICAgLy8g5pKt5pS+5r+A5Yqx6KeG6aKRXG4gICAgICAgICAgICAgICAgdGhpcy5jbGlja1JlZEFyciA9IFtdO1xuICAgICAgICAgICAgICAgIHRoaXMuc3RhcnRDbGlja1RpbWUgPSAwO1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmNsaWNrUmVkTnVtYmVyIDwgNikge1xuICAgICAgICAgICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7nnIvlrozop4bpopEg6aKG5Y+W5pu05aSa57qi5YyF5Yi4PC9jPjwvYj5gKS50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInNob3dSZXdhcmRWaWRlb0FkXCIsXCI3XCIpXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrUmVkQXJyLnNoaWZ0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tSZWROdW1iZXIgPj0gNikge1xuICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge307XG4gICAgICAgICAgICBjYy5Ub29scy5zZW5kUmVxdWVzdChcIkNsaWNrQXdhcmRTdGF0XCIsIFwiR0VUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNhbkNsaWNrUmVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgaWYgKHJlcy5kYXRhLmZyZWVfdGltZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IHNlbmREYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdHlwZTogMSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRzOiBuZXcgRGF0ZSgpLmdldFRpbWUoKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnNlbmRSZXF1ZXN0KFwiTmV3QXdhcmRcIiwgXCJQT1NUXCIsIHNlbmREYXRhKS50aGVuKChyZXMpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1RpY2tldExheWVyKHsgdGlja2V0OiByZXMuZGF0YS5hbW91bnQsIGFkZDogcmVzLmRhdGEuYWRkX2Ftb3VudCwgdHlwZTogMSwgdmlkZW9UeXBlOiAxIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5jbGlja1JlZE51bWJlciA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSB0aGlzLmNsaWNrUmVkTnVtYmVyID49IDYgPyAxNiAqIDYgOiB0aGlzLmNsaWNrUmVkTnVtYmVyICogMTY7XG4gICAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMSwgMSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY2xpY2tSZWROdW1iZXIgPSAwO1xuICAgICAgICAgICAgICAgICAgICBiYXIud2lkdGggPSB0aGlzLmNsaWNrUmVkTnVtYmVyID49IDYgPyAxNiAqIDYgOiB0aGlzLmNsaWNrUmVkTnVtYmVyICogMTY7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2FuQ2xpY2tSZWRGdW5jKCkge1xuICAgICAgICB0aGlzLmNhbkNsaWNrUmVkID0gdHJ1ZTtcbiAgICB9XG4gICAgdG91Y2hHcm91bmQoZXZlbnQ6IGFueSkge1xuICAgICAgICBpZiAodGhpcy5sb2NrKSB7XG4gICAgICAgICAgICByZXR1cm5cbiAgICAgICAgfVxuICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMF0sIGZhbHNlLCAxKTtcbiAgICAgICAgdGhpcy5jb3VudFRpbWUgPSBuZXcgRGF0ZSgpLmdldFRpbWUoKTtcbiAgICAgICAgbGV0IHdpbmRvd1NpemUgPSBjYy53aW5TaXplO1xuICAgICAgICBsZXQgeCA9IGV2ZW50LmdldExvY2F0aW9uWCgpXG4gICAgICAgIGxldCB5ID0gZXZlbnQuZ2V0TG9jYXRpb25ZKClcbiAgICAgICAgdGhpcy5EZWxldGVfbnVtID0gMFxuICAgICAgICB0aGlzLmNsaWNrUG9zID0gY2MudjMoeCwgeSk7XG4gICAgICAgIGlmICh5ID4gd2luZG93U2l6ZS5oZWlnaHQgLyAyIC0gMzcwIC0gdGhpcy52aCAmJiB5IDwgd2luZG93U2l6ZS5oZWlnaHQgLyAyICsgMzcwIC0gdGhpcy52aCkge1xuICAgICAgICAgICAgbGV0IGkgPSB0aGlzLlRvSUooeCwgeSkueFxuICAgICAgICAgICAgbGV0IGogPSB0aGlzLlRvSUooeCwgeSkueVxuICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtID0gMDtcbiAgICAgICAgICAgIHRoaXMuZGVsZXRlUG9zQXJyID0gW107XG4gICAgICAgICAgICBsZXQgY29sb3IgPSB0aGlzLmFbaV1bal07XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSB0cnVlO1xuICAgICAgICAgICAgdGhpcy5Ub3VjaF9ibG9jayhpLCBqLCB0aGlzLmFbaV1bal0pO1xuICAgICAgICAgICAgLy8gdG9kb1xuICAgICAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA9PT0gMSkge1xuICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqXSA9IGNvbG9yO1xuICAgICAgICAgICAgICAgIHRoaXMubG9jayA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVyblxuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUJsb2NrKGZhbHNlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvL+iuvue9rnNjb3JlaW5mb1xuICAgIHNldFNjb3JlSW5mbyhzY29yZTogbnVtYmVyKSB7XG4gICAgICAgIGxldCBzY29yZU5vZGUgPSB0aGlzLnNjb3JlSW5mby5nZXRDaGlsZEJ5TmFtZShcInNjb3JlXCIpO1xuICAgICAgICBsZXQgc2NvcmVMYmwgPSBzY29yZU5vZGUuZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCk7XG4gICAgICAgIHNjb3JlTGJsLnN0cmluZyA9IHNjb3JlICsgXCLliIZcIjtcbiAgICAgICAgLy/liqDov5vluqbmnaEg6L+b5bqm5p2h5ruh5YiGNjAwMFxuICAgICAgICBsZXQgcHJvZ3Jlc3NCYXIgPSB0aGlzLnNjb3JlSW5mby5nZXRDaGlsZEJ5TmFtZShcInByb2dyZXNzXCIpLmdldENvbXBvbmVudChjYy5Qcm9ncmVzc0Jhcik7XG4gICAgICAgIC8v6L+b5bqm5p2h5aSn5bCP5Y+W5YC8MC0xIOS4uuS4gOS9jeWwj+aVsFxuICAgICAgICBsZXQgdmFsID0gKE1hdGguZmxvb3Ioc2NvcmUgKiAxMDAgLyA2MDAwKSkgLyAxMDAgPiAxID8gMSA6IChNYXRoLmZsb29yKHNjb3JlICogMTAwIC8gNjAwMCkpIC8gMTAwO1xuICAgICAgICAvLyBwcm9ncmVzc0Jhci5wcm9ncmVzcyA9IHZhbFxuICAgICAgICAvLyBzY29yZU5vZGUueCA9IC0xNTArMzkwKnZhbDtcbiAgICAgICAgY2MudHdlZW4ocHJvZ3Jlc3NCYXIpLnRvKDAuMSwgeyBwcm9ncmVzczogdmFsIH0pLnN0YXJ0KCk7XG4gICAgICAgIGNjLnR3ZWVuKHNjb3JlTm9kZSkudG8oMC4xLCB7IHg6IC0xNTAgKyAzOTAgKiB2YWwgfSkuc3RhcnQoKTtcbiAgICAgICAgLy/moLnmja5zY29yZeWIpOaWreaYn+aVsFxuICAgICAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzOyBpKyspIHtcbiAgICAgICAgICAgIGxldCBzdGFyID0gdGhpcy5zY29yZUluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJzdGFyX1wiICsgaSk7XG4gICAgICAgICAgICBsZXQgYWN0aXZlTm9kZSA9IHN0YXIuZ2V0Q2hpbGRCeU5hbWUoXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBsZXQgdW5BY3RpdmVOb2RlID0gc3Rhci5nZXRDaGlsZEJ5TmFtZShcInVuQWN0aXZlXCIpO1xuICAgICAgICAgICAgdW5BY3RpdmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICBhY3RpdmVOb2RlLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHNjb3JlID4gMzAwMCAqIChpIC0gMSkpIHtcbiAgICAgICAgICAgICAgICBhY3RpdmVOb2RlLmFjdGl2ZSA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgLyoqXG4gICAgICog5Yid5aeL5YyW5YWz5Y2hXG4gICAgICovXG4gICAgaW5pdCgpIHtcbiAgICAgICAgdGhpcy5ncm91bmQub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hHcm91bmQsIHRoaXMpO1xuICAgICAgICB0aGlzLmN1clNjb3JlID0gMDtcbiAgICAgICAgdGhpcy5jbGlja09uY2UgPSB0cnVlO1xuICAgICAgICB0aGlzLmFkZFRpY2tldCA9IDA7XG4gICAgICAgIGxldCBsZXZlbExibCA9IHRoaXMuc2NvcmVJbmZvLmdldENoaWxkQnlOYW1lKFwidGV4dFwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICBsZXZlbExibC5zdHJpbmcgPSBg5YWz5Y2h77yaJHtjYy5Ub29scy51c2VySW5mby5sZXZlbH1gXG4gICAgICAgIHRoaXMuc2V0U2NvcmVJbmZvKHRoaXMuY3VyU2NvcmUpO1xuICAgICAgICB0aGlzLmJhY2tncm91bmQuZGVzdHJveUFsbENoaWxkcmVuKCk7XG4gICAgICAgIHRoaXMuYmxvY2tCYWNrZ3JvdW5kLmRlc3Ryb3lBbGxDaGlsZHJlbigpO1xuICAgICAgICBsZXQgYmxvY2tOdWxsQ29sb3IgPSBcIiMzODUzN0VcIjtcbiAgICAgICAgbGV0IF9hcnIxID0gWzAsIDEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuICAgICAgICBsZXQgX2FycjIgPSBbMCwgMSwgMiwgMywgNCwgNSwgNiwgNywgOCwgOV07XG4gICAgICAgIGxldCBfbmV3QXJyID0gW107XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMjsgaSsrKSB7XG4gICAgICAgICAgICBsZXQga2V5ID0gW107XG4gICAgICAgICAgICBsZXQgbGVuMSA9IF9hcnIxLmxlbmd0aDtcbiAgICAgICAgICAgIGxldCB2YWwxID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogbGVuMSk7XG4gICAgICAgICAgICBrZXkucHVzaChfYXJyMVt2YWwxXSk7XG4gICAgICAgICAgICBjYy5Ub29scy5yZW1vdmUoX2FycjEsIF9hcnIxW3ZhbDFdKTtcblxuICAgICAgICAgICAgbGV0IGxlbjIgPSBfYXJyMi5sZW5ndGg7XG4gICAgICAgICAgICBsZXQgdmFsMiA9IE1hdGguZmxvb3IoTWF0aC5yYW5kb20oKSAqIGxlbjIpO1xuICAgICAgICAgICAga2V5LnB1c2goX2FycjJbdmFsMl0pO1xuICAgICAgICAgICAgY2MuVG9vbHMucmVtb3ZlKF9hcnIyLCBfYXJyMlt2YWwyXSk7XG4gICAgICAgICAgICBfbmV3QXJyLnB1c2goa2V5KTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IDEwOyBpKyspIHtcbiAgICAgICAgICAgIHRoaXMuYVtpXSA9IFtdXG4gICAgICAgICAgICB0aGlzLmJbaV0gPSBbXVxuICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgbGV0IHNwZWNpYWwgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBrID0gMDsgayA8IF9uZXdBcnIubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF94ID0gX25ld0FycltrXVswXTtcbiAgICAgICAgICAgICAgICAgICAgbGV0IF95ID0gX25ld0FycltrXVsxXTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGkgPT09IF94ICYmIGogPT09IF95KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNjLlRvb2xzLnJlbW92ZShfbmV3QXJyLCBfbmV3QXJyW2tdKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyAgICB0aGlzLmFbaV1bal0gPSBuZXdBcnJbTWF0aC5jZWlsKE1hdGgucmFuZG9tKCkgKiB0aGlzLmRpZmZpY3VsdHkpIC0gMV1cbiAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSBNYXRoLmNlaWwoTWF0aC5yYW5kb20oKSAqIHRoaXMuZGlmZmljdWx0eSlcbiAgICAgICAgICAgICAgICBsZXQgYmxvY2tOdWxsID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibG9ja051bGwpXG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsLnBhcmVudCA9IHRoaXMuYmxvY2tCYWNrZ3JvdW5kIHx8IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgIGJsb2NrTnVsbC5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsLmNvbG9yID0gbmV3IGNjLkNvbG9yKCkuZnJvbUhFWChibG9ja051bGxDb2xvcik7XG4gICAgICAgICAgICAgICAgaWYgKGJsb2NrTnVsbENvbG9yID09PSBcIiMzODUzN0VcIikge1xuICAgICAgICAgICAgICAgICAgICBibG9ja051bGxDb2xvciA9IFwiIzM0NEY3QVwiXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYmxvY2tOdWxsQ29sb3IgPSBcIiMzODUzN0VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsZXQgbm9kZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgc3dpdGNoICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAxOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucmVkKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDI6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVlbilcbiAgICAgICAgICAgICAgICAgICAgICAgIG5vZGUucGFyZW50ID0gdGhpcy5iYWNrZ3JvdW5kIHx8IHRoaXMubm9kZVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5zZXRQb3NpdGlvbih0aGlzLlRvWFkoaSwgaikpXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMueWVsbG93KVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5ibHVlKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlIDU6XG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5waW5rKVxuICAgICAgICAgICAgICAgICAgICAgICAgbm9kZS5wYXJlbnQgPSB0aGlzLmJhY2tncm91bmQgfHwgdGhpcy5ub2RlXG4gICAgICAgICAgICAgICAgICAgICAgICBub2RlLnNldFBvc2l0aW9uKHRoaXMuVG9YWShpLCBqKSlcblxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aGlzLmJbaV1bal0gPSBub2RlO1xuICAgICAgICAgICAgICAgIGlmIChzcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBwb3AgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLnBvcF9yZWQpO1xuICAgICAgICAgICAgICAgICAgICBwb3AuZ2V0Q29tcG9uZW50KGNjLlNwcml0ZSkuc3ByaXRlRnJhbWUgPSB0aGlzLnRpZ2VyW3RoaXMuYVtpXVtqXSAtIDFdO1xuICAgICAgICAgICAgICAgICAgICBub2RlLmFkZENoaWxkKHBvcCk7XG4gICAgICAgICAgICAgICAgICAgIG5vZGUuc3BlY2lhbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGJsb2NrTnVsbENvbG9yID09PSBcIiMzNDRGN0FcIikge1xuICAgICAgICAgICAgICAgIGJsb2NrTnVsbENvbG9yID0gXCIjMzg1MzdFXCJcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgYmxvY2tOdWxsQ29sb3IgPSBcIiMzNDRGN0FcIlxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIFRvWFkoeDogbnVtYmVyLCB5OiBudW1iZXIpIHtcbiAgICAgICAgcmV0dXJuIGNjLnYyKC0oMzcwIC0gKDM2ICsgeSAqIDc0KSksIDM3MCAtICgzNiArIHggKiA3NCkpXG4gICAgfVxuICAgIFRvSUooaTogbnVtYmVyLCBqOiBudW1iZXIpIHtcbiAgICAgICAgbGV0IHdpbmRvd1NpemUgPSBjYy53aW5TaXplO1xuICAgICAgICBpZiAoaiA8IHdpbmRvd1NpemUuaGVpZ2h0IC8gMiAtIDM3MCAtIHRoaXMudmggfHwgaiA+IHdpbmRvd1NpemUuaGVpZ2h0IC8gMiArIDM3MCAtIHRoaXMudmgpIHtcbiAgICAgICAgICAgIHJldHVyblxuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuXG4gICAgICAgICAgICBpID0gTWF0aC5mbG9vcigoaSAtIHRoaXMuZGlmZmljdWx0eSkgLyA3NClcbiAgICAgICAgICAgIGogPSBNYXRoLmZsb29yKCh3aW5kb3dTaXplLmhlaWdodCAvIDIgKyAzNzUgLSB0aGlzLnZoIC0gaikgLyA3NClcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgeDogaixcbiAgICAgICAgICAgICAgICB5OiBpXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ29vZEZ1bmN0aW9uKG51bTogbnVtYmVyKSB7XG4gICAgICAgIGlmIChudW0gPT09IDIpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s1XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDMpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s2XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDQpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s3XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPT09IDUpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1s4XSwgZmFsc2UsIDEpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChudW0gPj0gNSAmJiBudW0gPCA3KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bOV0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGxldCBnb29kID0gY2MuaW5zdGFudGlhdGUodGhpcy5nb29kKVxuICAgICAgICAgICAgdGhpcy5iYWNrZ3JvdW5kLmFkZENoaWxkKGdvb2QpO1xuICAgICAgICAgICAgY2MudHdlZW4oZ29vZCkuYnkoMSwgeyB5OiAyMDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ29vZC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDcgJiYgbnVtIDwgOSkge1xuICAgICAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzEwXSwgZmFsc2UsIDEpO1xuICAgICAgICAgICAgbGV0IGdyZWF0ID0gY2MuaW5zdGFudGlhdGUodGhpcy5ncmVhdClcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChncmVhdCk7XG4gICAgICAgICAgICBjYy50d2VlbihncmVhdCkuYnkoMC41LCB7IHk6IDIwMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVhdC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDkgJiYgbnVtIDwgMTIpIHtcbiAgICAgICAgICAgIGNjLmF1ZGlvRW5naW5lLnBsYXkodGhpcy5lZmZlY3RBdWRpb1sxMV0sIGZhbHNlLCAxKTtcbiAgICAgICAgICAgIGxldCBleGNlbGxlbnQgPSBjYy5pbnN0YW50aWF0ZSh0aGlzLmV4Y2VsbGVudClcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChleGNlbGxlbnQpO1xuICAgICAgICAgICAgY2MudHdlZW4oZXhjZWxsZW50KS5ieSgwLjUsIHsgeTogMjAwIH0pLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGV4Y2VsbGVudC5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDEyICYmIG51bSA8IDE1KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMTJdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBsZXQgYW1hemluZyA9IGNjLmluc3RhbnRpYXRlKHRoaXMuYW1hemluZylcbiAgICAgICAgICAgIHRoaXMuYmFja2dyb3VuZC5hZGRDaGlsZChhbWF6aW5nKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKGFtYXppbmcpLmJ5KDAuNSwgeyB5OiAyMDAgfSkuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgYW1hemluZy5kZXN0cm95KClcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgfVxuICAgICAgICBpZiAobnVtID49IDE1KSB7XG4gICAgICAgICAgICBjYy5hdWRpb0VuZ2luZS5wbGF5KHRoaXMuZWZmZWN0QXVkaW9bMTNdLCBmYWxzZSwgMSk7XG4gICAgICAgICAgICBsZXQgdW5iZWxpZXZhYmxlID0gY2MuaW5zdGFudGlhdGUodGhpcy51bmJlbGlldmFibGUpXG4gICAgICAgICAgICB0aGlzLmJhY2tncm91bmQuYWRkQ2hpbGQodW5iZWxpZXZhYmxlKTtcbiAgICAgICAgICAgIGNjLnR3ZWVuKHVuYmVsaWV2YWJsZSkuYnkoMC41LCB7IHk6IDIwMCB9KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICB1bmJlbGlldmFibGUuZGVzdHJveSgpXG4gICAgICAgICAgICB9KS5zdGFydCgpXG4gICAgICAgIH1cbiAgICB9XG4gICAgRGVsZXRlX2Jsb2NrKCkge1xuICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgIGxldCBudW0gPSAwXG4gICAgICAgICAgICBmb3IgKGxldCBpID0gOTsgaSA+PSAwOyBpLS0pIHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCAmJiBudW0gPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGxldCBhY3Rpb24gPSBjYy5tb3ZlQnkoMC4yLCAwLCAtbnVtICogNzQpXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAvLyBjYy50d2Vlbih0aGlzLmJbaV1bal0pLmJ5KDAuMywgeyBwb3NpdGlvbjogY2MudjIoMCwgLW51bSAqIDc0KSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaSArIG51bV1bal0gPSB0aGlzLmFbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2pdID0gMFxuICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaSArIG51bV1bal0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgdGhpcy5iW2ldW2pdID0gbnVsbFxuICAgICAgICAgICAgICAgICAgICBjb250aW51ZVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgbnVtID0gbnVtICsgMVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgbGV0IF9jb3VudCA9IDBcbiAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG5cbiAgICAgICAgICAgIGlmICh0aGlzLmFbOV1bal0gPiAwICYmIF9jb3VudCA+IDApIHtcblxuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2pdID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgLy8gY2MudHdlZW4odGhpcy5iW2ldW2pdKS5ieSgwLjMsIHsgcG9zaXRpb246IGNjLnYyKC1jb3VudCAqIDc0LCAwKSB9KS5zdGFydCgpO1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGFjdGlvbiA9IGNjLm1vdmVCeSgwLjIsIC1fY291bnQgKiA3NCwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXS5ydW5BY3Rpb24oYWN0aW9uKVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSBfY291bnRdID0gdGhpcy5hW2ldW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmJbaV1baiAtIF9jb3VudF0gPSB0aGlzLmJbaV1bal1cbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5hWzldW2pdID09IDApIHtcbiAgICAgICAgICAgICAgICBfY291bnQrK1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOiAgeWGmeazlVxuICAgIFRvdWNoX2Jsb2NrKGk6IG51bWJlciwgajogbnVtYmVyLCBrOiBudW1iZXIpIHtcbiAgICAgICAgaWYgKHRoaXMuYVtpXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICB0aGlzLkRlbGV0ZV9udW0rK1xuICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICBcImlcIjogaSxcbiAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy9kZWxldGVcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIGFyci5wdXNoKG9iaik7XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoYXJyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDliIbmiJDmlbDnu4RcblxuICAgIHNwbGl0VG9BcnIoYXJyKSB7XG4gICAgICAgIGxldCBfYXJyID0gW107XG4gICAgICAgIGlmIChhcnIubGVuZ3RoID4gMCkge1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIucHVzaChhcnIpO1xuICAgICAgICAgICAgZm9yIChsZXQgdCA9IDA7IHQgPCBhcnIubGVuZ3RoOyB0KyspIHtcbiAgICAgICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgICAgICBsZXQgaSA9IGRhdGEuaTtcbiAgICAgICAgICAgICAgICBsZXQgaiA9IGRhdGEuajtcbiAgICAgICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgICAgICBpZiAoaSAhPSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaSAtIDFdW2pdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpIC0gMV1bal0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpIC0gMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImpcIjogaixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKGkgIT0gOSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgKyAxXVtqXSA9PSBrICYmIGsgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaSArIDFdW2pdID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuRGVsZXRlX251bSsrO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImlcIjogaSArIDEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGosXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJrXCI6IGtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIF9hcnIucHVzaChvYmopO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChqICE9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqIC0gMV0gPT0gayAmJiBrID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5hW2ldW2ogLSAxXSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLkRlbGV0ZV9udW0rKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBvYmogPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJqXCI6IGogLSAxLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwia1wiOiBrXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBfYXJyLnB1c2gob2JqKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAoaiAhPSA5KSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1baiArIDFdID09IGsgJiYgayA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuYVtpXVtqICsgMV0gPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5EZWxldGVfbnVtKys7XG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgb2JqID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiaVwiOiBpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqICsgMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgX2Fyci5wdXNoKG9iaik7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnNwbGl0VG9BcnIoX2Fycik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgLy8g5bCG6KaBZGVsZXRl55qE5pWw5o2u6L+b6KGM5aSE55CGXG4gICAgaGFuZGxlRGVsZXRlQmxvY2soaXNPdmVyOiBib29sZWFuKSB7XG4gICAgICAgIC8v6K6h5pWwXG4gICAgICAgIGlmICghdGhpcy5kZWxldGVQb3NBcnIubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLmxvY2sgPSBmYWxzZTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuaXNPdmVyR2FtZSA9IGlzT3ZlcjtcbiAgICAgICAgdGhpcy5zY2hlZHVsZSh0aGlzLmRlbGV0ZUJsb2NrQ2IsIDAuMDE2LCB0aGlzLmRlbGV0ZVBvc0Fyci5sZW5ndGggLSAxKTtcbiAgICAgICAgaWYgKCFpc092ZXIpIHtcbiAgICAgICAgICAgIC8v5ZCR5pyN5Yqh5Zmo5Y+R6YCB5r+A5rS7XG4gICAgICAgICAgICBsZXQgaXNBY3RpdmUgPSBjYy5zeXMubG9jYWxTdG9yYWdlLmdldEl0ZW0oXCJhY3RpdmVcIik7XG4gICAgICAgICAgICBpZiAoIWlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVc2VyTGl2ZVwiLCBcIlBPU1RcIiwge1xuICAgICAgICAgICAgICAgICAgICBcInRzXCI6IG5ldyBEYXRlKCkuZ2V0VGltZSgpXG4gICAgICAgICAgICAgICAgfSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNjLnN5cy5sb2NhbFN0b3JhZ2Uuc2V0SXRlbShcImFjdGl2ZVwiLCB0cnVlKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJjb2Nvcy0tLS3mv4DmtLvmiJDlip9cIik7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIOWinuWKoOmHkemSseeJueaViFxuICAgICAgICAgICAgbGV0IGFkZEluZm8gPSB0aGlzLmNhc2hJbmZvLmdldENoaWxkQnlOYW1lKFwiYWRkX2luZm9cIik7XG4gICAgICAgICAgICB0aGlzLmFkZFRpY2tldCArPSB0aGlzLkRlbGV0ZV9udW07XG4gICAgICAgICAgICBsZXQgbnVtID0gYWRkSW5mby5nZXRDaGlsZEJ5TmFtZShcIm51bVwiKS5nZXRDb21wb25lbnQoY2MuTGFiZWwpO1xuICAgICAgICAgICAgbnVtLnN0cmluZyA9IFwiXCIgKyB0aGlzLkRlbGV0ZV9udW07XG4gICAgICAgICAgICBhZGRJbmZvLnN0b3BBbGxBY3Rpb25zKCk7XG4gICAgICAgICAgICBhZGRJbmZvLm9wYWNpdHkgPSAwO1xuICAgICAgICAgICAgYWRkSW5mby55ID0gLTQwO1xuICAgICAgICAgICAgYWRkSW5mby5ydW5BY3Rpb24oY2Muc2VxdWVuY2UoY2MuZmFkZUluKDAuMSksIGNjLm1vdmVCeSgwLjUsIDAsIDQwKSwgY2MuZmFkZU91dCgwLjUpKSk7XG4gICAgICAgICAgICB0aGlzLnNob3dQYWNrZXRBbmltKDMsIDAuMDEsIDEwMCwgdGhpcy5jbGlja1BvcywgdGhpcy5jYXNoSW5mbywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2FzaEluZm8uZ2V0Q2hpbGRCeU5hbWUoXCJ0ZXh0XCIpLmdldENvbXBvbmVudChjYy5MYWJlbCkuc3RyaW5nID0gY2MuVG9vbHMudXNlckluZm8uYW1vdW50ICsgdGhpcy5hZGRUaWNrZXQ7XG4gICAgICAgICAgICB9KVxuICAgICAgICB9XG4gICAgfVxuICAgIGRlbGV0ZUJsb2NrQ2IoKSB7XG4gICAgICAgIC8vIGxldCBjb3VudCA9IDA7XG4gICAgICAgIGxldCBhcnIgPSB0aGlzLmRlbGV0ZVBvc0Fyclt0aGlzLl9jb3VudF07XG4gICAgICAgIGZvciAobGV0IHQgPSAwOyB0IDwgYXJyLmxlbmd0aDsgdCsrKSB7XG4gICAgICAgICAgICBsZXQgZGF0YSA9IGFyclt0XTtcbiAgICAgICAgICAgIGxldCBpID0gZGF0YS5pO1xuICAgICAgICAgICAgbGV0IGogPSBkYXRhLmo7XG4gICAgICAgICAgICBsZXQgayA9IGRhdGEuaztcbiAgICAgICAgICAgIGxldCBub2RlID0gY2MuaW5zdGFudGlhdGUodGhpcy5kZXNFZmZlY3QpXG4gICAgICAgICAgICBub2RlLnBhcmVudCA9IHRoaXMuYmFja2dyb3VuZCB8fCB0aGlzLm5vZGVcbiAgICAgICAgICAgIG5vZGUuc2V0UG9zaXRpb24odGhpcy5Ub1hZKGksIGopKVxuICAgICAgICAgICAgbGV0IEN1c3RvbVBhcnRpY2xlID0gbm9kZS5nZXRDb21wb25lbnQoY2MuUGFydGljbGVTeXN0ZW0pO1xuICAgICAgICAgICAgQ3VzdG9tUGFydGljbGUuc3ByaXRlRnJhbWUgPSB0aGlzLmxpemlCbG9ja1trIC0gMV07XG4gICAgICAgICAgICBDdXN0b21QYXJ0aWNsZS5yZXNldFN5c3RlbSgpO1xuICAgICAgICAgICAgaWYgKHRoaXMuYltpXVtqXS5zcGVjaWFsKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5zcGVjaWFsID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuYltpXVtqXS5kZXN0cm95KClcbiAgICAgICAgICAgIHRoaXMuYltpXVtqXSA9IG51bGxcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5fY291bnQgPT09IHRoaXMuZGVsZXRlUG9zQXJyLmxlbmd0aCAtIDEpIHtcbiAgICAgICAgICAgIHRoaXMuYWZ0ZXJEZWxldGVCbG9jaygpXG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fY291bnQrKztcbiAgICB9XG4gICAgYWZ0ZXJEZWxldGVCbG9jaygpIHtcbiAgICAgICAgdGhpcy5EZWxldGVfYmxvY2soKTtcbiAgICAgICAgdGhpcy51bnNjaGVkdWxlKHRoaXMuZGVsZXRlQmxvY2tDYik7XG4gICAgICAgIC8vIOiOt+WPluWIhuaVsCBnZXRTY29yZVxuICAgICAgICBpZiAodGhpcy5pc092ZXJHYW1lKSB7XG4gICAgICAgICAgICB0aGlzLnNldFNjb3JlKHRydWUpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5zZXRTY29yZShmYWxzZSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuY2xpY2tPbmNlKSB7XG4gICAgICAgICAgICB0aGlzLmNsaWNrT25jZSA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5mbG9hdGVyTW92ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLnNwZWNpYWwpIHtcbiAgICAgICAgICAgIHRoaXMuc2hvd1BvcERlbGV0ZUxheWVyKDIsIDkpO1xuICAgICAgICAgICAgdGhpcy5zcGVjaWFsID0gZmFsc2U7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA+PSAxMikge1xuICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMiwgOSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBsZXQgcmRtID0gTWF0aC5mbG9vcihNYXRoLnJhbmRvbSgpICogNCArIDUpO1xuICAgICAgICAgICAgaWYgKHRoaXMuRGVsZXRlX251bSA+PSByZG0pIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsaWNrTnVtYmVyKys7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuY2xpY2tOdW1iZXIgPj0gNSkge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNsaWNrTnVtYmVyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zaG93UG9wRGVsZXRlTGF5ZXIoMiwgOSk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH0sIDAuNSlcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfSwgMC41KVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIC8vIOmAmui/h2vnmoTlgLzov5Tlm57oibLlgLxcbiAgICBnZXRDb2xvckJsb2NrKGs6IG51bWJlcik6IHN0cmluZyB7XG4gICAgICAgIGxldCBjb2xvcjogc3RyaW5nID0gbnVsbDtcbiAgICAgICAgc3dpdGNoIChrKSB7XG4gICAgICAgICAgICBjYXNlIDE6XG4gICAgICAgICAgICAgICAgLy8gcmVkXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiNEQzU2NzJcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAyOlxuICAgICAgICAgICAgICAgIC8vIGdyZWVuXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM2RUM0NkNcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAzOlxuICAgICAgICAgICAgICAgIC8vIHBpbmtcbiAgICAgICAgICAgICAgICBjb2xvciA9IFwiI0JDNjNGMFwiXG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlIDQ6XG4gICAgICAgICAgICAgICAgLy9ibHVlXG4gICAgICAgICAgICAgICAgY29sb3IgPSBcIiM0Q0E4RUFcIlxuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSA1OlxuICAgICAgICAgICAgICAgIC8vIHllbGxvd1xuICAgICAgICAgICAgICAgIGNvbG9yID0gXCIjRTdDQjU1XCJcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gY29sb3JcbiAgICB9XG4gICAgc2V0U2NvcmUoaXNDbGVhcjogYm9vbGVhbikge1xuICAgICAgICBpZiAoaXNDbGVhcikge1xuICAgICAgICAgICAgY2MudHdlZW4odGhpcy5ub2RlKS5kZWxheSgwLjUpLmNhbGwoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlTGV2ZWwoKTtcbiAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnNob3dQb3BTdWNjZXNzTGF5ZXIoKTtcbiAgICAgICAgICAgIH0sIDIpXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAvLyDlpoLmnpzlvZPliY3msqHmnInmlrnlnZdcbiAgICAgICAgICAgIGxldCBpc2tvbmcgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgZm9yIChsZXQgaiA9IDA7IGogPCAxMDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmFbaV1bal0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlza29uZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlza29uZykge1xuICAgICAgICAgICAgICAgIGNjLnR3ZWVuKHRoaXMubm9kZSkuZGVsYXkoMC41KS5jYWxsKCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51cGRhdGVMZXZlbCgpO1xuICAgICAgICAgICAgICAgIH0pLnN0YXJ0KClcbiAgICAgICAgICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2hvd1BvcFN1Y2Nlc3NMYXllcigpO1xuICAgICAgICAgICAgICAgIH0sIDIpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmlzRW5kKCkpIHtcbiAgICAgICAgICAgIC8vIOWinuWKoOenr+WIhiDnp6/liIbnrpfms5XmmK9cbiAgICAgICAgICAgIC8vIOWJqeS9meeahOaWueWdl1xuICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIgPSBbXTtcbiAgICAgICAgICAgIGxldCBhcnIgPSBbXTtcbiAgICAgICAgICAgIHRoaXMubG9jayA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmdyb3VuZC5vZmYoY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfU1RBUlQsIHRoaXMudG91Y2hHcm91bmQsIHRoaXMpO1xuICAgICAgICAgICAgdGhpcy5zY2hlZHVsZU9uY2UoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgMTA7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBrID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmFbaV1bal0gPSAwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG9iaiA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJpXCI6IGksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwialwiOiBqLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcImtcIjoga1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBhcnIucHVzaChvYmopXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhpcy5kZWxldGVQb3NBcnIucHVzaChhcnIpO1xuICAgICAgICAgICAgICAgIGxldCBsZW4gPSB0aGlzLkRlbGV0ZV9udW0gLSAxO1xuICAgICAgICAgICAgICAgIGxldCBzY29yZSA9IHRoaXMudGFyZ2V0U2NvcmUgLSBNYXRoLnBvdyhsZW4sIDIpICogMTA7XG4gICAgICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSBzY29yZTtcbiAgICAgICAgICAgICAgICB0aGlzLnNldFNjb3JlSW5mbyh0aGlzLmN1clNjb3JlKTtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZURlbGV0ZUJsb2NrKHRydWUpO1xuICAgICAgICAgICAgfSwgMSlcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIC8vIOWinuWKoOenr+WIhiDnp6/liIbnrpfms5XmmK8gKOa2iOmZpOaVsC0x77yJ55qE5bmz5pa5KjEwXG4gICAgICAgICAgICBsZXQgbGVuID0gdGhpcy5EZWxldGVfbnVtIC0gMVxuICAgICAgICAgICAgbGV0IHNjb3JlID0gTWF0aC5wb3cobGVuLCAyKSAqIDEwO1xuICAgICAgICAgICAgdGhpcy5jdXJTY29yZSArPSBzY29yZTtcbiAgICAgICAgICAgIHRoaXMuc2V0U2NvcmVJbmZvKHRoaXMuY3VyU2NvcmUpO1xuICAgICAgICAgICAgdGhpcy5nb29kRnVuY3Rpb24odGhpcy5EZWxldGVfbnVtKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB1cGRhdGVMZXZlbCgpIHtcbiAgICAgICAgLy8g5YOP5pyN5Yqh5Zmo5Y+R6K+35rGC6L+H5YWzXG4gICAgICAgIGxldCBzZW5kRGF0YSA9IHtcbiAgICAgICAgICAgIFwic2NvcmVcIjogdGhpcy5jdXJTY29yZSxcbiAgICAgICAgICAgIFwidHNcIjogbmV3IERhdGUoKS5nZXRUaW1lKCksLy/ml7bpl7TmiLNcbiAgICAgICAgICAgIFwibGV2ZWxcIjogY2MuVG9vbHMudXNlckluZm8ubGV2ZWwsXG4gICAgICAgICAgICBcImF3YXJkXCI6IHRoaXMuYWRkVGlja2V0LFxuICAgICAgICB9O1xuICAgICAgICBsZXQgZGF0YSA9IGNjLlRvb2xzLmNyZWF0ZVNpZ25EYXRhKHNlbmREYXRhKTtcbiAgICAgICAgY2MuVG9vbHMuc2VuZFJlcXVlc3QoXCJVcGRhdGVMZXZlbFwiLCBcIlBPU1RcIiwgZGF0YSkudGhlbigocmVzKSA9PiB7XG4gICAgICAgICAgICAvLyDliLfmlrDkuIDkuItjYy5Ub29scy51c2VySW5mby5uZXdfZnJlZV9sZXZlbF90aW1lc1xuICAgICAgICAgICAgY2MuVG9vbHMudXNlckluZm8ubmV3X2ZyZWVfbGV2ZWxfdGltZXMgPSByZXMuZGF0YS5uZXdfZnJlZV9sZXZlbF90aW1lcztcbiAgICAgICAgICAgIGNjLlRvb2xzLnNob3dUaXBzKHRoaXMubm9kZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc0VuZCgpIHtcbiAgICAgICAgbGV0IGFyciA9IHRoaXMuYTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCAxMDsgaSsrKSB7XG4gICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IDEwOyBqKyspIHtcbiAgICAgICAgICAgICAgICBsZXQgdmFsID0gdGhpcy5hW2ldW2pdO1xuICAgICAgICAgICAgICAgIGxldCBsZWZ0ID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IHJpZ2h0ID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IHVwID0gLTE7XG4gICAgICAgICAgICAgICAgbGV0IGRvd24gPSAtMTtcbiAgICAgICAgICAgICAgICBpZiAodmFsKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIOW3puWPs1xuICAgICAgICAgICAgICAgICAgICBpZiAoaiAtIDEgPj0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuYVtpXVtqIC0gMV0pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZWZ0ID0gdGhpcy5hW2ldW2ogLSAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChqICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2ldW2ogKyAxXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJpZ2h0ID0gdGhpcy5hW2ldW2ogKyAxXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpIC0gMSA+PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgLSAxXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVwID0gdGhpcy5hW2kgLSAxXVtqXVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChpICsgMSA8PSA5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5hW2kgKyAxXVtqXSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRvd24gPSB0aGlzLmFbaSArIDFdW2pdXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbCA9PT0gbGVmdCB8fCB2YWwgPT09IHJpZ2h0IHx8IHZhbCA9PT0gdXAgfHwgdmFsID09PSBkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIC8vIOiuqea1rueQg+aYvuekuuW5tua1ruWKqCDngrnlh7sg55yL5r+A5Yqx6KeG6aKRXG4gICAgZmxvYXRlck1vdmUoKSB7XG4gICAgICAgIGxldCBmbG9hdGVyTGF5ZXIgPSB0aGlzLmNvbnRlbnQuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9hdGVyX2xheWVyXCIpO1xuICAgICAgICBsZXQgdmFsID0gY2Muc3lzLmxvY2FsU3RvcmFnZS5nZXRJdGVtKFwic2hvd0J0blwiKTtcbiAgICAgICAgaWYgKHZhbCA9PSAxMDApIHtcbiAgICAgICAgICAgIGlmIChmbG9hdGVyTGF5ZXIuYWN0aXZlID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIGZsb2F0ZXJMYXllci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzsgaSsrKSB7XG4gICAgICAgICAgICAgICAgbGV0IGZsb2F0ZXIgPSBmbG9hdGVyTGF5ZXIuZ2V0Q2hpbGRCeU5hbWUoXCJmbG9hdGVyX1wiICsgaSk7XG4gICAgICAgICAgICAgICAgZmxvYXRlci5hY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGNjLlRvb2xzLnBvcEFuaW0oZmxvYXRlciwgMTApO1xuICAgICAgICAgICAgICAgIGZsb2F0ZXIub24oY2MuTm9kZS5FdmVudFR5cGUuVE9VQ0hfRU5ELCB0aGlzLmNsaWNrRmxvYXRlLCB0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH1cbiAgICAvLyDkuJPlsZ7mta7nkIPnmoTkuovku7Yg54K55Ye75rWu55CD6KeC55yL6KeG6aKRIOS5i+WQjua1rueQg+a2iOWkseW5tuS4lOa4hemZpOS6i+S7tlxuICAgIGNsaWNrRmxvYXRlKGUpIHtcbiAgICAgICAgLy8g54K55Ye75Yqg6ZSBXG4gICAgICAgIGlmIChjYy5Ub29scy5sb2NrKSB7XG4gICAgICAgICAgICBjYy5Ub29scy5zaG93VGlwcyh0aGlzLm5vZGUsIGA8Yj48Y29sb3I9I2ZmZmZmZj7ngrnlh7vlpKrpopHnuYE8L2M+PC9iPmApO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY2MuVG9vbHMubG9jayA9IHRydWU7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBjYy5Ub29scy5sb2NrID0gZmFsc2U7XG4gICAgICAgICAgICB9LCAzMDAwKVxuICAgICAgICB9XG4gICAgICAgIGxldCB0YXJnZXQgPSBlLnRhcmdldFxuICAgICAgICBDb2Nvc0JyaWRnZS5KU0NhbGxOYXRpdmUoXCJwbGF5RG90XCIsXCJcIit7XCJkb3RcIjpcImNsaWNrX0Zsb2F0cmVkYmFnXzFcIn0pXG4gICAgICAgIENvY29zQnJpZGdlLkpTQ2FsbE5hdGl2ZShcInNob3dSZXdhcmRWaWRlb0FkXCIsXCIyXCIpXG4gICAgICAgIC8vIHRoaXMuc2NoZWR1bGVPbmNlKCgpID0+IHtcbiAgICAgICAgdGFyZ2V0LmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICAvLyB0YXJnZXQub2ZmKGNjLk5vZGUuRXZlbnRUeXBlLlRPVUNIX0VORCwgdGhpcy5jbGlja0Zsb2F0ZSwgdGhpcyk7XG4gICAgICAgIC8vIHRhcmdldC5kZXN0cm95KCk7XG4gICAgICAgIC8vIHRhcmdldCA9IG51bGw7XG4gICAgICAgIC8vIH0sIDEpXG4gICAgfVxuICAgIC8vIHVwZGF0ZSAoZHQpIHt9XG4gICAgLyoqXG4gICAgKiDph5HluIHpo57muoVcbiAgICAqIFxuICAgICogQHBhcmFtIHtjYy5WZWMyfSBjIOWunuS+i+aVsOmHj1xuICAgICogQHBhcmFtIHtudW1iZXJ9IG50IOWunuS+i+aXtumXtFxuICAgICogQHBhcmFtIHtudW1iZXJ9IFtyYW5kb21TY29wZT04MF0g562J5YiG54K555qE6ZqP5py65rOi5Yqo6IyD5Zu0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gc3RhcnRQb3Mg5byA5aeL5L2N572uXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZW5kTm9kZSDnu5PmnZ/oioLngrlcbiAgICAqL1xuICAgIHNob3dQYWNrZXRBbmltKGM6IG51bWJlciwgbnQ6IG51bWJlciwgcmFuZG9tU2NvcGU6IG51bWJlciA9IDgwLCBzdGFydFBvczogY2MuVmVjMyA9IGNjLnYzKDAsIDApLCBlbmROb2RlOiBjYy5Ob2RlLCBjYWxsOiBGdW5jdGlvbiA9IG51bGwpIHtcbiAgICAgICAgY2MuYXVkaW9FbmdpbmUucGxheSh0aGlzLmVmZmVjdEF1ZGlvWzE0XSwgZmFsc2UsIDEpO1xuICAgICAgICBsZXQgbmV3VGltZSA9IG50O1xuICAgICAgICBsZXQgdGVtcFBsYXllciA9IHRoaXMubm9kZS5jb252ZXJ0VG9Ob2RlU3BhY2VBUihzdGFydFBvcylcblxuICAgICAgICBsZXQgZW5kUCA9IGVuZE5vZGUuZ2V0UG9zaXRpb24oKVxuICAgICAgICBlbmRQID0gdGhpcy5ub2RlLmNvbnZlcnRUb05vZGVTcGFjZUFSKGVuZE5vZGUucGFyZW50LmNvbnZlcnRUb1dvcmxkU3BhY2VBUihlbmRQKSlcbiAgICAgICAgbGV0IF9jb3VudCA9IDA7XG4gICAgICAgIHRoaXMuc2NoZWR1bGUoKCkgPT4ge1xuICAgICAgICAgICAgbGV0IHByZSA9IGNjLmluc3RhbnRpYXRlKHRoaXMucGFja2V0KTtcbiAgICAgICAgICAgIHByZS5wYXJlbnQgPSB0aGlzLm5vZGU7XG4gICAgICAgICAgICBwcmUuc2V0UG9zaXRpb24odGVtcFBsYXllcilcbiAgICAgICAgICAgIGxldCByYW5udW14ID0gY2MuVG9vbHMuY3JlYXRlUmFuZG9tKC1yYW5kb21TY29wZSwgcmFuZG9tU2NvcGUpOy8vICh0aGlzLnJhbmRvbTIgLSB0aGlzLnJhbmRvbTEgKyAxKSArIHRoaXMucmFuZG9tMVxuICAgICAgICAgICAgbGV0IHJhbm51bXkgPSBjYy5Ub29scy5jcmVhdGVSYW5kb20oLXJhbmRvbVNjb3BlLCByYW5kb21TY29wZSk7Ly8odGhpcy5yYW5kb20yIC0gdGhpcy5yYW5kb20xICsgMSkgLyAxLjUgKyB0aGlzLnJhbmRvbTEgLyAxLjUpXG4gICAgICAgICAgICBjYy50d2VlbihwcmUpXG4gICAgICAgICAgICAgICAgLmJ5KDAuNCwgeyBwb3NpdGlvbjogY2MudjMocmFubnVteCwgcmFubnVteSkgfSwgeyBlYXNpbmc6ICdxdWFkT3V0JyB9KVxuICAgICAgICAgICAgICAgIC5kZWxheSgwLjMpXG4gICAgICAgICAgICAgICAgLnRvKDAuNCwgeyBwb3NpdGlvbjogY2MudjMoZW5kUCkgfSlcbiAgICAgICAgICAgICAgICAuY2FsbCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHByZS5kZXN0cm95KClcbiAgICAgICAgICAgICAgICAgICAgX2NvdW50KytcbiAgICAgICAgICAgICAgICAgICAgaWYgKF9jb3VudCA9PSBjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyB0aGlzLmNsb3NlVmlldygpXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBjb25zb2xlLmxvZyhcIuWKqOeUu+WujOavlVwiKVxuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuc3RhcnQoKVxuICAgICAgICB9LCBuZXdUaW1lLCBjKVxuICAgICAgICB0aGlzLnNjaGVkdWxlT25jZSgoKSA9PiB7XG4gICAgICAgICAgICBjYWxsICYmIGNhbGwoKVxuICAgICAgICB9LCAyKVxuICAgIH1cbn1cbiJdfQ==
//------QC-SOURCE-SPLIT------

                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Tools/encrypt.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, 'c4a53FUndhGyoSk9t7j14C3', 'encrypt');
// Script/encrypt.js

"use strict";

(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : factory(global.JSEncrypt = {});
})(void 0, function (exports) {
  'use strict';

  var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";

  function int2char(n) {
    return BI_RM.charAt(n);
  } //#region BIT_OPERATIONS
  // (public) this & a


  function op_and(x, y) {
    return x & y;
  } // (public) this | a


  function op_or(x, y) {
    return x | y;
  } // (public) this ^ a


  function op_xor(x, y) {
    return x ^ y;
  } // (public) this & ~a


  function op_andnot(x, y) {
    return x & ~y;
  } // return index of lowest 1-bit in x, x < 2^31


  function lbit(x) {
    if (x == 0) {
      return -1;
    }

    var r = 0;

    if ((x & 0xffff) == 0) {
      x >>= 16;
      r += 16;
    }

    if ((x & 0xff) == 0) {
      x >>= 8;
      r += 8;
    }

    if ((x & 0xf) == 0) {
      x >>= 4;
      r += 4;
    }

    if ((x & 3) == 0) {
      x >>= 2;
      r += 2;
    }

    if ((x & 1) == 0) {
      ++r;
    }

    return r;
  } // return number of 1 bits in x


  function cbit(x) {
    var r = 0;

    while (x != 0) {
      x &= x - 1;
      ++r;
    }

    return r;
  } //#endregion BIT_OPERATIONS


  var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
  var b64pad = "=";

  function hex2b64(h) {
    var i;
    var c;
    var ret = "";

    for (i = 0; i + 3 <= h.length; i += 3) {
      c = parseInt(h.substring(i, i + 3), 16);
      ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
    }

    if (i + 1 == h.length) {
      c = parseInt(h.substring(i, i + 1), 16);
      ret += b64map.charAt(c << 2);
    } else if (i + 2 == h.length) {
      c = parseInt(h.substring(i, i + 2), 16);
      ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
    }

    while ((ret.length & 3) > 0) {
      ret += b64pad;
    }

    return ret;
  } // convert a base64 string to hex


  function b64tohex(s) {
    var ret = "";
    var i;
    var k = 0; // b64 state, 0-3

    var slop = 0;

    for (i = 0; i < s.length; ++i) {
      if (s.charAt(i) == b64pad) {
        break;
      }

      var v = b64map.indexOf(s.charAt(i));

      if (v < 0) {
        continue;
      }

      if (k == 0) {
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 1;
      } else if (k == 1) {
        ret += int2char(slop << 2 | v >> 4);
        slop = v & 0xf;
        k = 2;
      } else if (k == 2) {
        ret += int2char(slop);
        ret += int2char(v >> 2);
        slop = v & 3;
        k = 3;
      } else {
        ret += int2char(slop << 2 | v >> 4);
        ret += int2char(v & 0xf);
        k = 0;
      }
    }

    if (k == 1) {
      ret += int2char(slop << 2);
    }

    return ret;
  }
  /*! *****************************************************************************
  Copyright (c) Microsoft Corporation. All rights reserved.
  Licensed under the Apache License, Version 2.0 (the "License"); you may not use
  this file except in compliance with the License. You may obtain a copy of the
  License at http://www.apache.org/licenses/LICENSE-2.0
  
  THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
  KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
  WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
  MERCHANTABLITY OR NON-INFRINGEMENT.
  
  See the Apache Version 2.0 License for specific language governing permissions
  and limitations under the License.
  ***************************************************************************** */

  /* global Reflect, Promise */


  var extendStatics = Object.setPrototypeOf || {
    __proto__: []
  } instanceof Array && function (d, b) {
    d.__proto__ = b;
  } || function (d, b) {
    for (var p in b) {
      if (b.hasOwnProperty(p)) d[p] = b[p];
    }
  };

  function __extends(d, b) {
    extendStatics(d, b);

    function __() {
      this.constructor = d;
    }

    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  } // Hex JavaScript decoder
  // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */


  var decoder;
  var Hex = {
    decode: function decode(a) {
      var i;

      if (decoder === undefined) {
        var hex = "0123456789ABCDEF";
        var ignore = " \f\n\r\t\xA0\u2028\u2029";
        decoder = {};

        for (i = 0; i < 16; ++i) {
          decoder[hex.charAt(i)] = i;
        }

        hex = hex.toLowerCase();

        for (i = 10; i < 16; ++i) {
          decoder[hex.charAt(i)] = i;
        }

        for (i = 0; i < ignore.length; ++i) {
          decoder[ignore.charAt(i)] = -1;
        }
      }

      var out = [];
      var bits = 0;
      var char_count = 0;

      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);

        if (c == "=") {
          break;
        }

        c = decoder[c];

        if (c == -1) {
          continue;
        }

        if (c === undefined) {
          throw new Error("Illegal character at offset " + i);
        }

        bits |= c;

        if (++char_count >= 2) {
          out[out.length] = bits;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 4;
        }
      }

      if (char_count) {
        throw new Error("Hex encoding incomplete: 4 bits missing");
      }

      return out;
    }
  }; // Base64 JavaScript decoder
  // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */

  var decoder$1;
  var Base64 = {
    decode: function decode(a) {
      var i;

      if (decoder$1 === undefined) {
        var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        var ignore = "= \f\n\r\t\xA0\u2028\u2029";
        decoder$1 = Object.create(null);

        for (i = 0; i < 64; ++i) {
          decoder$1[b64.charAt(i)] = i;
        }

        for (i = 0; i < ignore.length; ++i) {
          decoder$1[ignore.charAt(i)] = -1;
        }
      }

      var out = [];
      var bits = 0;
      var char_count = 0;

      for (i = 0; i < a.length; ++i) {
        var c = a.charAt(i);

        if (c == "=") {
          break;
        }

        c = decoder$1[c];

        if (c == -1) {
          continue;
        }

        if (c === undefined) {
          throw new Error("Illegal character at offset " + i);
        }

        bits |= c;

        if (++char_count >= 4) {
          out[out.length] = bits >> 16;
          out[out.length] = bits >> 8 & 0xFF;
          out[out.length] = bits & 0xFF;
          bits = 0;
          char_count = 0;
        } else {
          bits <<= 6;
        }
      }

      switch (char_count) {
        case 1:
          throw new Error("Base64 encoding incomplete: at least 2 bits missing");

        case 2:
          out[out.length] = bits >> 10;
          break;

        case 3:
          out[out.length] = bits >> 16;
          out[out.length] = bits >> 8 & 0xFF;
          break;
      }

      return out;
    },
    re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
    unarmor: function unarmor(a) {
      var m = Base64.re.exec(a);

      if (m) {
        if (m[1]) {
          a = m[1];
        } else if (m[2]) {
          a = m[2];
        } else {
          throw new Error("RegExp out of sync");
        }
      }

      return Base64.decode(a);
    }
  }; // Big integer base-10 printing library
  // Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>
  // Permission to use, copy, modify, and/or distribute this software for any
  // purpose with or without fee is hereby granted, provided that the above
  // copyright notice and this permission notice appear in all copies.
  //
  // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
  // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
  // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
  // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
  // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
  // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
  // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.

  /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */

  var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256

  var Int10 =
  /** @class */
  function () {
    function Int10(value) {
      this.buf = [+value || 0];
    }

    Int10.prototype.mulAdd = function (m, c) {
      // assert(m <= 256)
      var b = this.buf;
      var l = b.length;
      var i;
      var t;

      for (i = 0; i < l; ++i) {
        t = b[i] * m + c;

        if (t < max) {
          c = 0;
        } else {
          c = 0 | t / max;
          t -= c * max;
        }

        b[i] = t;
      }

      if (c > 0) {
        b[i] = c;
      }
    };

    Int10.prototype.sub = function (c) {
      // assert(m <= 256)
      var b = this.buf;
      var l = b.length;
      var i;
      var t;

      for (i = 0; i < l; ++i) {
        t = b[i] - c;

        if (t < 0) {
          t += max;
          c = 1;
        } else {
          c = 0;
        }

        b[i] = t;
      }

      while (b[b.length - 1] === 0) {
        b.pop();
      }
    };

    Int10.prototype.toString = function (base) {
      if ((base || 10) != 10) {
        throw new Error("only base 10 is supported");
      }

      var b = this.buf;
      var s = b[b.length - 1].toString();

      for (var i = b.length - 2; i >= 0; --i) {
        s += (max + b[i]).toString().substring(1);
      }

      return s;
    };

    Int10.prototype.valueOf = function () {
      var b = this.buf;
      var v = 0;

      for (var i = b.length - 1; i >= 0; --i) {
        v = v * max + b[i];
      }

      return v;
    };

    Int10.prototype.simplify = function () {
      var b = this.buf;
      return b.length == 1 ? b[0] : this;
    };

    return Int10;
  }(); // ASN.1 JavaScript decoder


  var ellipsis = "\u2026";
  var reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
  var reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

  function stringCut(str, len) {
    if (str.length > len) {
      str = str.substring(0, len) + ellipsis;
    }

    return str;
  }

  var Stream =
  /** @class */
  function () {
    function Stream(enc, pos) {
      this.hexDigits = "0123456789ABCDEF";

      if (enc instanceof Stream) {
        this.enc = enc.enc;
        this.pos = enc.pos;
      } else {
        // enc should be an array or a binary string
        this.enc = enc;
        this.pos = pos;
      }
    }

    Stream.prototype.get = function (pos) {
      if (pos === undefined) {
        pos = this.pos++;
      }

      if (pos >= this.enc.length) {
        throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
      }

      return "string" === typeof this.enc ? this.enc.charCodeAt(pos) : this.enc[pos];
    };

    Stream.prototype.hexByte = function (b) {
      return this.hexDigits.charAt(b >> 4 & 0xF) + this.hexDigits.charAt(b & 0xF);
    };

    Stream.prototype.hexDump = function (start, end, raw) {
      var s = "";

      for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));

        if (raw !== true) {
          switch (i & 0xF) {
            case 0x7:
              s += "  ";
              break;

            case 0xF:
              s += "\n";
              break;

            default:
              s += " ";
          }
        }
      }

      return s;
    };

    Stream.prototype.isASCII = function (start, end) {
      for (var i = start; i < end; ++i) {
        var c = this.get(i);

        if (c < 32 || c > 176) {
          return false;
        }
      }

      return true;
    };

    Stream.prototype.parseStringISO = function (start, end) {
      var s = "";

      for (var i = start; i < end; ++i) {
        s += String.fromCharCode(this.get(i));
      }

      return s;
    };

    Stream.prototype.parseStringUTF = function (start, end) {
      var s = "";

      for (var i = start; i < end;) {
        var c = this.get(i++);

        if (c < 128) {
          s += String.fromCharCode(c);
        } else if (c > 191 && c < 224) {
          s += String.fromCharCode((c & 0x1F) << 6 | this.get(i++) & 0x3F);
        } else {
          s += String.fromCharCode((c & 0x0F) << 12 | (this.get(i++) & 0x3F) << 6 | this.get(i++) & 0x3F);
        }
      }

      return s;
    };

    Stream.prototype.parseStringBMP = function (start, end) {
      var str = "";
      var hi;
      var lo;

      for (var i = start; i < end;) {
        hi = this.get(i++);
        lo = this.get(i++);
        str += String.fromCharCode(hi << 8 | lo);
      }

      return str;
    };

    Stream.prototype.parseTime = function (start, end, shortYear) {
      var s = this.parseStringISO(start, end);
      var m = (shortYear ? reTimeS : reTimeL).exec(s);

      if (!m) {
        return "Unrecognized time: " + s;
      }

      if (shortYear) {
        // to avoid querying the timer, use the fixed range [1970, 2069]
        // it will conform with ITU X.400 [-10, +40] sliding window until 2030
        m[1] = +m[1];
        m[1] += +m[1] < 70 ? 2000 : 1900;
      }

      s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];

      if (m[5]) {
        s += ":" + m[5];

        if (m[6]) {
          s += ":" + m[6];

          if (m[7]) {
            s += "." + m[7];
          }
        }
      }

      if (m[8]) {
        s += " UTC";

        if (m[8] != "Z") {
          s += m[8];

          if (m[9]) {
            s += ":" + m[9];
          }
        }
      }

      return s;
    };

    Stream.prototype.parseInteger = function (start, end) {
      var v = this.get(start);
      var neg = v > 127;
      var pad = neg ? 255 : 0;
      var len;
      var s = ""; // skip unuseful bits (not allowed in DER)

      while (v == pad && ++start < end) {
        v = this.get(start);
      }

      len = end - start;

      if (len === 0) {
        return neg ? -1 : 0;
      } // show bit length of huge integers


      if (len > 4) {
        s = v;
        len <<= 3;

        while (((+s ^ pad) & 0x80) == 0) {
          s = +s << 1;
          --len;
        }

        s = "(" + len + " bit)\n";
      } // decode the integer


      if (neg) {
        v = v - 256;
      }

      var n = new Int10(v);

      for (var i = start + 1; i < end; ++i) {
        n.mulAdd(256, this.get(i));
      }

      return s + n.toString();
    };

    Stream.prototype.parseBitString = function (start, end, maxLength) {
      var unusedBit = this.get(start);
      var lenBit = (end - start - 1 << 3) - unusedBit;
      var intro = "(" + lenBit + " bit)\n";
      var s = "";

      for (var i = start + 1; i < end; ++i) {
        var b = this.get(i);
        var skip = i == end - 1 ? unusedBit : 0;

        for (var j = 7; j >= skip; --j) {
          s += b >> j & 1 ? "1" : "0";
        }

        if (s.length > maxLength) {
          return intro + stringCut(s, maxLength);
        }
      }

      return intro + s;
    };

    Stream.prototype.parseOctetString = function (start, end, maxLength) {
      if (this.isASCII(start, end)) {
        return stringCut(this.parseStringISO(start, end), maxLength);
      }

      var len = end - start;
      var s = "(" + len + " byte)\n";
      maxLength /= 2; // we work in bytes

      if (len > maxLength) {
        end = start + maxLength;
      }

      for (var i = start; i < end; ++i) {
        s += this.hexByte(this.get(i));
      }

      if (len > maxLength) {
        s += ellipsis;
      }

      return s;
    };

    Stream.prototype.parseOID = function (start, end, maxLength) {
      var s = "";
      var n = new Int10();
      var bits = 0;

      for (var i = start; i < end; ++i) {
        var v = this.get(i);
        n.mulAdd(128, v & 0x7F);
        bits += 7;

        if (!(v & 0x80)) {
          if (s === "") {
            n = n.simplify();

            if (n instanceof Int10) {
              n.sub(80);
              s = "2." + n.toString();
            } else {
              var m = n < 80 ? n < 40 ? 0 : 1 : 2;
              s = m + "." + (n - m * 40);
            }
          } else {
            s += "." + n.toString();
          }

          if (s.length > maxLength) {
            return stringCut(s, maxLength);
          }

          n = new Int10();
          bits = 0;
        }
      }

      if (bits > 0) {
        s += ".incomplete";
      }

      return s;
    };

    return Stream;
  }();

  var ASN1 =
  /** @class */
  function () {
    function ASN1(stream, header, length, tag, sub) {
      if (!(tag instanceof ASN1Tag)) {
        throw new Error("Invalid tag value.");
      }

      this.stream = stream;
      this.header = header;
      this.length = length;
      this.tag = tag;
      this.sub = sub;
    }

    ASN1.prototype.typeName = function () {
      switch (this.tag.tagClass) {
        case 0:
          // universal
          switch (this.tag.tagNumber) {
            case 0x00:
              return "EOC";

            case 0x01:
              return "BOOLEAN";

            case 0x02:
              return "INTEGER";

            case 0x03:
              return "BIT_STRING";

            case 0x04:
              return "OCTET_STRING";

            case 0x05:
              return "NULL";

            case 0x06:
              return "OBJECT_IDENTIFIER";

            case 0x07:
              return "ObjectDescriptor";

            case 0x08:
              return "EXTERNAL";

            case 0x09:
              return "REAL";

            case 0x0A:
              return "ENUMERATED";

            case 0x0B:
              return "EMBEDDED_PDV";

            case 0x0C:
              return "UTF8String";

            case 0x10:
              return "SEQUENCE";

            case 0x11:
              return "SET";

            case 0x12:
              return "NumericString";

            case 0x13:
              return "PrintableString";
            // ASCII subset

            case 0x14:
              return "TeletexString";
            // aka T61String

            case 0x15:
              return "VideotexString";

            case 0x16:
              return "IA5String";
            // ASCII

            case 0x17:
              return "UTCTime";

            case 0x18:
              return "GeneralizedTime";

            case 0x19:
              return "GraphicString";

            case 0x1A:
              return "VisibleString";
            // ASCII subset

            case 0x1B:
              return "GeneralString";

            case 0x1C:
              return "UniversalString";

            case 0x1E:
              return "BMPString";
          }

          return "Universal_" + this.tag.tagNumber.toString();

        case 1:
          return "Application_" + this.tag.tagNumber.toString();

        case 2:
          return "[" + this.tag.tagNumber.toString() + "]";
        // Context

        case 3:
          return "Private_" + this.tag.tagNumber.toString();
      }
    };

    ASN1.prototype.content = function (maxLength) {
      if (this.tag === undefined) {
        return null;
      }

      if (maxLength === undefined) {
        maxLength = Infinity;
      }

      var content = this.posContent();
      var len = Math.abs(this.length);

      if (!this.tag.isUniversal()) {
        if (this.sub !== null) {
          return "(" + this.sub.length + " elem)";
        }

        return this.stream.parseOctetString(content, content + len, maxLength);
      }

      switch (this.tag.tagNumber) {
        case 0x01:
          // BOOLEAN
          return this.stream.get(content) === 0 ? "false" : "true";

        case 0x02:
          // INTEGER
          return this.stream.parseInteger(content, content + len);

        case 0x03:
          // BIT_STRING
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(content, content + len, maxLength);

        case 0x04:
          // OCTET_STRING
          return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(content, content + len, maxLength);
        // case 0x05: // NULL

        case 0x06:
          // OBJECT_IDENTIFIER
          return this.stream.parseOID(content, content + len, maxLength);
        // case 0x07: // ObjectDescriptor
        // case 0x08: // EXTERNAL
        // case 0x09: // REAL
        // case 0x0A: // ENUMERATED
        // case 0x0B: // EMBEDDED_PDV

        case 0x10: // SEQUENCE

        case 0x11:
          // SET
          if (this.sub !== null) {
            return "(" + this.sub.length + " elem)";
          } else {
            return "(no elem)";
          }

        case 0x0C:
          // UTF8String
          return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);

        case 0x12: // NumericString

        case 0x13: // PrintableString

        case 0x14: // TeletexString

        case 0x15: // VideotexString

        case 0x16: // IA5String
        // case 0x19: // GraphicString

        case 0x1A:
          // VisibleString
          // case 0x1B: // GeneralString
          // case 0x1C: // UniversalString
          return stringCut(this.stream.parseStringISO(content, content + len), maxLength);

        case 0x1E:
          // BMPString
          return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);

        case 0x17: // UTCTime

        case 0x18:
          // GeneralizedTime
          return this.stream.parseTime(content, content + len, this.tag.tagNumber == 0x17);
      }

      return null;
    };

    ASN1.prototype.toString = function () {
      return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (this.sub === null ? "null" : this.sub.length) + "]";
    };

    ASN1.prototype.toPrettyString = function (indent) {
      if (indent === undefined) {
        indent = "";
      }

      var s = indent + this.typeName() + " @" + this.stream.pos;

      if (this.length >= 0) {
        s += "+";
      }

      s += this.length;

      if (this.tag.tagConstructed) {
        s += " (constructed)";
      } else if (this.tag.isUniversal() && (this.tag.tagNumber == 0x03 || this.tag.tagNumber == 0x04) && this.sub !== null) {
        s += " (encapsulates)";
      }

      s += "\n";

      if (this.sub !== null) {
        indent += "  ";

        for (var i = 0, max = this.sub.length; i < max; ++i) {
          s += this.sub[i].toPrettyString(indent);
        }
      }

      return s;
    };

    ASN1.prototype.posStart = function () {
      return this.stream.pos;
    };

    ASN1.prototype.posContent = function () {
      return this.stream.pos + this.header;
    };

    ASN1.prototype.posEnd = function () {
      return this.stream.pos + this.header + Math.abs(this.length);
    };

    ASN1.prototype.toHexString = function () {
      return this.stream.hexDump(this.posStart(), this.posEnd(), true);
    };

    ASN1.decodeLength = function (stream) {
      var buf = stream.get();
      var len = buf & 0x7F;

      if (len == buf) {
        return len;
      } // no reason to use Int10, as it would be a huge buffer anyways


      if (len > 6) {
        throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
      }

      if (len === 0) {
        return null;
      } // undefined


      buf = 0;

      for (var i = 0; i < len; ++i) {
        buf = buf * 256 + stream.get();
      }

      return buf;
    };
    /**
     * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
     * @returns {string}
     * @public
     */


    ASN1.prototype.getHexStringValue = function () {
      var hexString = this.toHexString();
      var offset = this.header * 2;
      var length = this.length * 2;
      return hexString.substr(offset, length);
    };

    ASN1.decode = function (str) {
      var stream;

      if (!(str instanceof Stream)) {
        stream = new Stream(str, 0);
      } else {
        stream = str;
      }

      var streamStart = new Stream(stream);
      var tag = new ASN1Tag(stream);
      var len = ASN1.decodeLength(stream);
      var start = stream.pos;
      var header = start - streamStart.pos;
      var sub = null;

      var getSub = function getSub() {
        var ret = [];

        if (len !== null) {
          // definite length
          var end = start + len;

          while (stream.pos < end) {
            ret[ret.length] = ASN1.decode(stream);
          }

          if (stream.pos != end) {
            throw new Error("Content size is not correct for container starting at offset " + start);
          }
        } else {
          // undefined length
          try {
            for (;;) {
              var s = ASN1.decode(stream);

              if (s.tag.isEOC()) {
                break;
              }

              ret[ret.length] = s;
            }

            len = start - stream.pos; // undefined lengths are represented as negative values
          } catch (e) {
            throw new Error("Exception while decoding undefined length content: " + e);
          }
        }

        return ret;
      };

      if (tag.tagConstructed) {
        // must have valid content
        sub = getSub();
      } else if (tag.isUniversal() && (tag.tagNumber == 0x03 || tag.tagNumber == 0x04)) {
        // sometimes BitString and OctetString are used to encapsulate ASN.1
        try {
          if (tag.tagNumber == 0x03) {
            if (stream.get() != 0) {
              throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
            }
          }

          sub = getSub();

          for (var i = 0; i < sub.length; ++i) {
            if (sub[i].tag.isEOC()) {
              throw new Error("EOC is not supposed to be actual content.");
            }
          }
        } catch (e) {
          // but silently ignore when they don't
          sub = null;
        }
      }

      if (sub === null) {
        if (len === null) {
          throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
        }

        stream.pos = start + Math.abs(len);
      }

      return new ASN1(streamStart, header, len, tag, sub);
    };

    return ASN1;
  }();

  var ASN1Tag =
  /** @class */
  function () {
    function ASN1Tag(stream) {
      var buf = stream.get();
      this.tagClass = buf >> 6;
      this.tagConstructed = (buf & 0x20) !== 0;
      this.tagNumber = buf & 0x1F;

      if (this.tagNumber == 0x1F) {
        var n = new Int10();

        do {
          buf = stream.get();
          n.mulAdd(128, buf & 0x7F);
        } while (buf & 0x80);

        this.tagNumber = n.simplify();
      }
    }

    ASN1Tag.prototype.isUniversal = function () {
      return this.tagClass === 0x00;
    };

    ASN1Tag.prototype.isEOC = function () {
      return this.tagClass === 0x00 && this.tagNumber === 0x00;
    };

    return ASN1Tag;
  }(); // Copyright (c) 2005  Tom Wu
  // Bits per digit


  var dbits; // JavaScript engine analysis

  var canary = 0xdeadbeefcafe;
  var j_lm = (canary & 0xffffff) == 0xefcafe; //#region

  var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
  var lplim = (1 << 26) / lowprimes[lowprimes.length - 1]; //#endregion
  // (public) Constructor

  var BigInteger =
  /** @class */
  function () {
    function BigInteger(a, b, c) {
      if (a != null) {
        if ("number" == typeof a) {
          this.fromNumber(a, b, c);
        } else if (b == null && "string" != typeof a) {
          this.fromString(a, 256);
        } else {
          this.fromString(a, b);
        }
      }
    } //#region PUBLIC
    // BigInteger.prototype.toString = bnToString;
    // (public) return string representation in given radix


    BigInteger.prototype.toString = function (b) {
      if (this.s < 0) {
        return "-" + this.negate().toString(b);
      }

      var k;

      if (b == 16) {
        k = 4;
      } else if (b == 8) {
        k = 3;
      } else if (b == 2) {
        k = 1;
      } else if (b == 32) {
        k = 5;
      } else if (b == 4) {
        k = 2;
      } else {
        return this.toRadix(b);
      }

      var km = (1 << k) - 1;
      var d;
      var m = false;
      var r = "";
      var i = this.t;
      var p = this.DB - i * this.DB % k;

      if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) > 0) {
          m = true;
          r = int2char(d);
        }

        while (i >= 0) {
          if (p < k) {
            d = (this[i] & (1 << p) - 1) << k - p;
            d |= this[--i] >> (p += this.DB - k);
          } else {
            d = this[i] >> (p -= k) & km;

            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }

          if (d > 0) {
            m = true;
          }

          if (m) {
            r += int2char(d);
          }
        }
      }

      return m ? r : "0";
    }; // BigInteger.prototype.negate = bnNegate;
    // (public) -this


    BigInteger.prototype.negate = function () {
      var r = nbi();
      BigInteger.ZERO.subTo(this, r);
      return r;
    }; // BigInteger.prototype.abs = bnAbs;
    // (public) |this|


    BigInteger.prototype.abs = function () {
      return this.s < 0 ? this.negate() : this;
    }; // BigInteger.prototype.compareTo = bnCompareTo;
    // (public) return + if this > a, - if this < a, 0 if equal


    BigInteger.prototype.compareTo = function (a) {
      var r = this.s - a.s;

      if (r != 0) {
        return r;
      }

      var i = this.t;
      r = i - a.t;

      if (r != 0) {
        return this.s < 0 ? -r : r;
      }

      while (--i >= 0) {
        if ((r = this[i] - a[i]) != 0) {
          return r;
        }
      }

      return 0;
    }; // BigInteger.prototype.bitLength = bnBitLength;
    // (public) return the number of bits in "this"


    BigInteger.prototype.bitLength = function () {
      if (this.t <= 0) {
        return 0;
      }

      return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ this.s & this.DM);
    }; // BigInteger.prototype.mod = bnMod;
    // (public) this mod a


    BigInteger.prototype.mod = function (a) {
      var r = nbi();
      this.abs().divRemTo(a, null, r);

      if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        a.subTo(r, r);
      }

      return r;
    }; // BigInteger.prototype.modPowInt = bnModPowInt;
    // (public) this^e % m, 0 <= e < 2^32


    BigInteger.prototype.modPowInt = function (e, m) {
      var z;

      if (e < 256 || m.isEven()) {
        z = new Classic(m);
      } else {
        z = new Montgomery(m);
      }

      return this.exp(e, z);
    }; // BigInteger.prototype.clone = bnClone;
    // (public)


    BigInteger.prototype.clone = function () {
      var r = nbi();
      this.copyTo(r);
      return r;
    }; // BigInteger.prototype.intValue = bnIntValue;
    // (public) return value as integer


    BigInteger.prototype.intValue = function () {
      if (this.s < 0) {
        if (this.t == 1) {
          return this[0] - this.DV;
        } else if (this.t == 0) {
          return -1;
        }
      } else if (this.t == 1) {
        return this[0];
      } else if (this.t == 0) {
        return 0;
      } // assumes 16 < DB < 32


      return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0];
    }; // BigInteger.prototype.byteValue = bnByteValue;
    // (public) return value as byte


    BigInteger.prototype.byteValue = function () {
      return this.t == 0 ? this.s : this[0] << 24 >> 24;
    }; // BigInteger.prototype.shortValue = bnShortValue;
    // (public) return value as short (assumes DB>=16)


    BigInteger.prototype.shortValue = function () {
      return this.t == 0 ? this.s : this[0] << 16 >> 16;
    }; // BigInteger.prototype.signum = bnSigNum;
    // (public) 0 if this == 0, 1 if this > 0


    BigInteger.prototype.signum = function () {
      if (this.s < 0) {
        return -1;
      } else if (this.t <= 0 || this.t == 1 && this[0] <= 0) {
        return 0;
      } else {
        return 1;
      }
    }; // BigInteger.prototype.toByteArray = bnToByteArray;
    // (public) convert to bigendian byte array


    BigInteger.prototype.toByteArray = function () {
      var i = this.t;
      var r = [];
      r[0] = this.s;
      var p = this.DB - i * this.DB % 8;
      var d;
      var k = 0;

      if (i-- > 0) {
        if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
          r[k++] = d | this.s << this.DB - p;
        }

        while (i >= 0) {
          if (p < 8) {
            d = (this[i] & (1 << p) - 1) << 8 - p;
            d |= this[--i] >> (p += this.DB - 8);
          } else {
            d = this[i] >> (p -= 8) & 0xff;

            if (p <= 0) {
              p += this.DB;
              --i;
            }
          }

          if ((d & 0x80) != 0) {
            d |= -256;
          }

          if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
            ++k;
          }

          if (k > 0 || d != this.s) {
            r[k++] = d;
          }
        }
      }

      return r;
    }; // BigInteger.prototype.equals = bnEquals;


    BigInteger.prototype.equals = function (a) {
      return this.compareTo(a) == 0;
    }; // BigInteger.prototype.min = bnMin;


    BigInteger.prototype.min = function (a) {
      return this.compareTo(a) < 0 ? this : a;
    }; // BigInteger.prototype.max = bnMax;


    BigInteger.prototype.max = function (a) {
      return this.compareTo(a) > 0 ? this : a;
    }; // BigInteger.prototype.and = bnAnd;


    BigInteger.prototype.and = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_and, r);
      return r;
    }; // BigInteger.prototype.or = bnOr;


    BigInteger.prototype.or = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_or, r);
      return r;
    }; // BigInteger.prototype.xor = bnXor;


    BigInteger.prototype.xor = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_xor, r);
      return r;
    }; // BigInteger.prototype.andNot = bnAndNot;


    BigInteger.prototype.andNot = function (a) {
      var r = nbi();
      this.bitwiseTo(a, op_andnot, r);
      return r;
    }; // BigInteger.prototype.not = bnNot;
    // (public) ~this


    BigInteger.prototype.not = function () {
      var r = nbi();

      for (var i = 0; i < this.t; ++i) {
        r[i] = this.DM & ~this[i];
      }

      r.t = this.t;
      r.s = ~this.s;
      return r;
    }; // BigInteger.prototype.shiftLeft = bnShiftLeft;
    // (public) this << n


    BigInteger.prototype.shiftLeft = function (n) {
      var r = nbi();

      if (n < 0) {
        this.rShiftTo(-n, r);
      } else {
        this.lShiftTo(n, r);
      }

      return r;
    }; // BigInteger.prototype.shiftRight = bnShiftRight;
    // (public) this >> n


    BigInteger.prototype.shiftRight = function (n) {
      var r = nbi();

      if (n < 0) {
        this.lShiftTo(-n, r);
      } else {
        this.rShiftTo(n, r);
      }

      return r;
    }; // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
    // (public) returns index of lowest 1-bit (or -1 if none)


    BigInteger.prototype.getLowestSetBit = function () {
      for (var i = 0; i < this.t; ++i) {
        if (this[i] != 0) {
          return i * this.DB + lbit(this[i]);
        }
      }

      if (this.s < 0) {
        return this.t * this.DB;
      }

      return -1;
    }; // BigInteger.prototype.bitCount = bnBitCount;
    // (public) return number of set bits


    BigInteger.prototype.bitCount = function () {
      var r = 0;
      var x = this.s & this.DM;

      for (var i = 0; i < this.t; ++i) {
        r += cbit(this[i] ^ x);
      }

      return r;
    }; // BigInteger.prototype.testBit = bnTestBit;
    // (public) true iff nth bit is set


    BigInteger.prototype.testBit = function (n) {
      var j = Math.floor(n / this.DB);

      if (j >= this.t) {
        return this.s != 0;
      }

      return (this[j] & 1 << n % this.DB) != 0;
    }; // BigInteger.prototype.setBit = bnSetBit;
    // (public) this | (1<<n)


    BigInteger.prototype.setBit = function (n) {
      return this.changeBit(n, op_or);
    }; // BigInteger.prototype.clearBit = bnClearBit;
    // (public) this & ~(1<<n)


    BigInteger.prototype.clearBit = function (n) {
      return this.changeBit(n, op_andnot);
    }; // BigInteger.prototype.flipBit = bnFlipBit;
    // (public) this ^ (1<<n)


    BigInteger.prototype.flipBit = function (n) {
      return this.changeBit(n, op_xor);
    }; // BigInteger.prototype.add = bnAdd;
    // (public) this + a


    BigInteger.prototype.add = function (a) {
      var r = nbi();
      this.addTo(a, r);
      return r;
    }; // BigInteger.prototype.subtract = bnSubtract;
    // (public) this - a


    BigInteger.prototype.subtract = function (a) {
      var r = nbi();
      this.subTo(a, r);
      return r;
    }; // BigInteger.prototype.multiply = bnMultiply;
    // (public) this * a


    BigInteger.prototype.multiply = function (a) {
      var r = nbi();
      this.multiplyTo(a, r);
      return r;
    }; // BigInteger.prototype.divide = bnDivide;
    // (public) this / a


    BigInteger.prototype.divide = function (a) {
      var r = nbi();
      this.divRemTo(a, r, null);
      return r;
    }; // BigInteger.prototype.remainder = bnRemainder;
    // (public) this % a


    BigInteger.prototype.remainder = function (a) {
      var r = nbi();
      this.divRemTo(a, null, r);
      return r;
    }; // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
    // (public) [this/a,this%a]


    BigInteger.prototype.divideAndRemainder = function (a) {
      var q = nbi();
      var r = nbi();
      this.divRemTo(a, q, r);
      return [q, r];
    }; // BigInteger.prototype.modPow = bnModPow;
    // (public) this^e % m (HAC 14.85)


    BigInteger.prototype.modPow = function (e, m) {
      var i = e.bitLength();
      var k;
      var r = nbv(1);
      var z;

      if (i <= 0) {
        return r;
      } else if (i < 18) {
        k = 1;
      } else if (i < 48) {
        k = 3;
      } else if (i < 144) {
        k = 4;
      } else if (i < 768) {
        k = 5;
      } else {
        k = 6;
      }

      if (i < 8) {
        z = new Classic(m);
      } else if (m.isEven()) {
        z = new Barrett(m);
      } else {
        z = new Montgomery(m);
      } // precomputation


      var g = [];
      var n = 3;
      var k1 = k - 1;
      var km = (1 << k) - 1;
      g[1] = z.convert(this);

      if (k > 1) {
        var g2 = nbi();
        z.sqrTo(g[1], g2);

        while (n <= km) {
          g[n] = nbi();
          z.mulTo(g2, g[n - 2], g[n]);
          n += 2;
        }
      }

      var j = e.t - 1;
      var w;
      var is1 = true;
      var r2 = nbi();
      var t;
      i = nbits(e[j]) - 1;

      while (j >= 0) {
        if (i >= k1) {
          w = e[j] >> i - k1 & km;
        } else {
          w = (e[j] & (1 << i + 1) - 1) << k1 - i;

          if (j > 0) {
            w |= e[j - 1] >> this.DB + i - k1;
          }
        }

        n = k;

        while ((w & 1) == 0) {
          w >>= 1;
          --n;
        }

        if ((i -= n) < 0) {
          i += this.DB;
          --j;
        }

        if (is1) {
          g[w].copyTo(r);
          is1 = false;
        } else {
          while (n > 1) {
            z.sqrTo(r, r2);
            z.sqrTo(r2, r);
            n -= 2;
          }

          if (n > 0) {
            z.sqrTo(r, r2);
          } else {
            t = r;
            r = r2;
            r2 = t;
          }

          z.mulTo(r2, g[w], r);
        }

        while (j >= 0 && (e[j] & 1 << i) == 0) {
          z.sqrTo(r, r2);
          t = r;
          r = r2;
          r2 = t;

          if (--i < 0) {
            i = this.DB - 1;
            --j;
          }
        }
      }

      return z.revert(r);
    }; // BigInteger.prototype.modInverse = bnModInverse;
    // (public) 1/this % m (HAC 14.61)


    BigInteger.prototype.modInverse = function (m) {
      var ac = m.isEven();

      if (this.isEven() && ac || m.signum() == 0) {
        return BigInteger.ZERO;
      }

      var u = m.clone();
      var v = this.clone();
      var a = nbv(1);
      var b = nbv(0);
      var c = nbv(0);
      var d = nbv(1);

      while (u.signum() != 0) {
        while (u.isEven()) {
          u.rShiftTo(1, u);

          if (ac) {
            if (!a.isEven() || !b.isEven()) {
              a.addTo(this, a);
              b.subTo(m, b);
            }

            a.rShiftTo(1, a);
          } else if (!b.isEven()) {
            b.subTo(m, b);
          }

          b.rShiftTo(1, b);
        }

        while (v.isEven()) {
          v.rShiftTo(1, v);

          if (ac) {
            if (!c.isEven() || !d.isEven()) {
              c.addTo(this, c);
              d.subTo(m, d);
            }

            c.rShiftTo(1, c);
          } else if (!d.isEven()) {
            d.subTo(m, d);
          }

          d.rShiftTo(1, d);
        }

        if (u.compareTo(v) >= 0) {
          u.subTo(v, u);

          if (ac) {
            a.subTo(c, a);
          }

          b.subTo(d, b);
        } else {
          v.subTo(u, v);

          if (ac) {
            c.subTo(a, c);
          }

          d.subTo(b, d);
        }
      }

      if (v.compareTo(BigInteger.ONE) != 0) {
        return BigInteger.ZERO;
      }

      if (d.compareTo(m) >= 0) {
        return d.subtract(m);
      }

      if (d.signum() < 0) {
        d.addTo(m, d);
      } else {
        return d;
      }

      if (d.signum() < 0) {
        return d.add(m);
      } else {
        return d;
      }
    }; // BigInteger.prototype.pow = bnPow;
    // (public) this^e


    BigInteger.prototype.pow = function (e) {
      return this.exp(e, new NullExp());
    }; // BigInteger.prototype.gcd = bnGCD;
    // (public) gcd(this,a) (HAC 14.54)


    BigInteger.prototype.gcd = function (a) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();

      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }

      var i = x.getLowestSetBit();
      var g = y.getLowestSetBit();

      if (g < 0) {
        return x;
      }

      if (i < g) {
        g = i;
      }

      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      }

      while (x.signum() > 0) {
        if ((i = x.getLowestSetBit()) > 0) {
          x.rShiftTo(i, x);
        }

        if ((i = y.getLowestSetBit()) > 0) {
          y.rShiftTo(i, y);
        }

        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }
      }

      if (g > 0) {
        y.lShiftTo(g, y);
      }

      return y;
    }; // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
    // (public) test primality with certainty >= 1-.5^t


    BigInteger.prototype.isProbablePrime = function (t) {
      var i;
      var x = this.abs();

      if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
        for (i = 0; i < lowprimes.length; ++i) {
          if (x[0] == lowprimes[i]) {
            return true;
          }
        }

        return false;
      }

      if (x.isEven()) {
        return false;
      }

      i = 1;

      while (i < lowprimes.length) {
        var m = lowprimes[i];
        var j = i + 1;

        while (j < lowprimes.length && m < lplim) {
          m *= lowprimes[j++];
        }

        m = x.modInt(m);

        while (i < j) {
          if (m % lowprimes[i++] == 0) {
            return false;
          }
        }
      }

      return x.millerRabin(t);
    }; //#endregion PUBLIC
    //#region PROTECTED
    // BigInteger.prototype.copyTo = bnpCopyTo;
    // (protected) copy this to r


    BigInteger.prototype.copyTo = function (r) {
      for (var i = this.t - 1; i >= 0; --i) {
        r[i] = this[i];
      }

      r.t = this.t;
      r.s = this.s;
    }; // BigInteger.prototype.fromInt = bnpFromInt;
    // (protected) set from integer value x, -DV <= x < DV


    BigInteger.prototype.fromInt = function (x) {
      this.t = 1;
      this.s = x < 0 ? -1 : 0;

      if (x > 0) {
        this[0] = x;
      } else if (x < -1) {
        this[0] = x + this.DV;
      } else {
        this.t = 0;
      }
    }; // BigInteger.prototype.fromString = bnpFromString;
    // (protected) set from string and radix


    BigInteger.prototype.fromString = function (s, b) {
      var k;

      if (b == 16) {
        k = 4;
      } else if (b == 8) {
        k = 3;
      } else if (b == 256) {
        k = 8;
        /* byte array */
      } else if (b == 2) {
        k = 1;
      } else if (b == 32) {
        k = 5;
      } else if (b == 4) {
        k = 2;
      } else {
        this.fromRadix(s, b);
        return;
      }

      this.t = 0;
      this.s = 0;
      var i = s.length;
      var mi = false;
      var sh = 0;

      while (--i >= 0) {
        var x = k == 8 ? +s[i] & 0xff : intAt(s, i);

        if (x < 0) {
          if (s.charAt(i) == "-") {
            mi = true;
          }

          continue;
        }

        mi = false;

        if (sh == 0) {
          this[this.t++] = x;
        } else if (sh + k > this.DB) {
          this[this.t - 1] |= (x & (1 << this.DB - sh) - 1) << sh;
          this[this.t++] = x >> this.DB - sh;
        } else {
          this[this.t - 1] |= x << sh;
        }

        sh += k;

        if (sh >= this.DB) {
          sh -= this.DB;
        }
      }

      if (k == 8 && (+s[0] & 0x80) != 0) {
        this.s = -1;

        if (sh > 0) {
          this[this.t - 1] |= (1 << this.DB - sh) - 1 << sh;
        }
      }

      this.clamp();

      if (mi) {
        BigInteger.ZERO.subTo(this, this);
      }
    }; // BigInteger.prototype.clamp = bnpClamp;
    // (protected) clamp off excess high words


    BigInteger.prototype.clamp = function () {
      var c = this.s & this.DM;

      while (this.t > 0 && this[this.t - 1] == c) {
        --this.t;
      }
    }; // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
    // (protected) r = this << n*DB


    BigInteger.prototype.dlShiftTo = function (n, r) {
      var i;

      for (i = this.t - 1; i >= 0; --i) {
        r[i + n] = this[i];
      }

      for (i = n - 1; i >= 0; --i) {
        r[i] = 0;
      }

      r.t = this.t + n;
      r.s = this.s;
    }; // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
    // (protected) r = this >> n*DB


    BigInteger.prototype.drShiftTo = function (n, r) {
      for (var i = n; i < this.t; ++i) {
        r[i - n] = this[i];
      }

      r.t = Math.max(this.t - n, 0);
      r.s = this.s;
    }; // BigInteger.prototype.lShiftTo = bnpLShiftTo;
    // (protected) r = this << n


    BigInteger.prototype.lShiftTo = function (n, r) {
      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << cbs) - 1;
      var ds = Math.floor(n / this.DB);
      var c = this.s << bs & this.DM;

      for (var i = this.t - 1; i >= 0; --i) {
        r[i + ds + 1] = this[i] >> cbs | c;
        c = (this[i] & bm) << bs;
      }

      for (var i = ds - 1; i >= 0; --i) {
        r[i] = 0;
      }

      r[ds] = c;
      r.t = this.t + ds + 1;
      r.s = this.s;
      r.clamp();
    }; // BigInteger.prototype.rShiftTo = bnpRShiftTo;
    // (protected) r = this >> n


    BigInteger.prototype.rShiftTo = function (n, r) {
      r.s = this.s;
      var ds = Math.floor(n / this.DB);

      if (ds >= this.t) {
        r.t = 0;
        return;
      }

      var bs = n % this.DB;
      var cbs = this.DB - bs;
      var bm = (1 << bs) - 1;
      r[0] = this[ds] >> bs;

      for (var i = ds + 1; i < this.t; ++i) {
        r[i - ds - 1] |= (this[i] & bm) << cbs;
        r[i - ds] = this[i] >> bs;
      }

      if (bs > 0) {
        r[this.t - ds - 1] |= (this.s & bm) << cbs;
      }

      r.t = this.t - ds;
      r.clamp();
    }; // BigInteger.prototype.subTo = bnpSubTo;
    // (protected) r = this - a


    BigInteger.prototype.subTo = function (a, r) {
      var i = 0;
      var c = 0;
      var m = Math.min(a.t, this.t);

      while (i < m) {
        c += this[i] - a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      if (a.t < this.t) {
        c -= a.s;

        while (i < this.t) {
          c += this[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += this.s;
      } else {
        c += this.s;

        while (i < a.t) {
          c -= a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c -= a.s;
      }

      r.s = c < 0 ? -1 : 0;

      if (c < -1) {
        r[i++] = this.DV + c;
      } else if (c > 0) {
        r[i++] = c;
      }

      r.t = i;
      r.clamp();
    }; // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
    // (protected) r = this * a, r != this,a (HAC 14.12)
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyTo = function (a, r) {
      var x = this.abs();
      var y = a.abs();
      var i = x.t;
      r.t = i + y.t;

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = 0; i < y.t; ++i) {
        r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
      }

      r.s = 0;
      r.clamp();

      if (this.s != a.s) {
        BigInteger.ZERO.subTo(r, r);
      }
    }; // BigInteger.prototype.squareTo = bnpSquareTo;
    // (protected) r = this^2, r != this (HAC 14.16)


    BigInteger.prototype.squareTo = function (r) {
      var x = this.abs();
      var i = r.t = 2 * x.t;

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = 0; i < x.t - 1; ++i) {
        var c = x.am(i, x[i], r, 2 * i, 0, 1);

        if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
          r[i + x.t] -= x.DV;
          r[i + x.t + 1] = 1;
        }
      }

      if (r.t > 0) {
        r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
      }

      r.s = 0;
      r.clamp();
    }; // BigInteger.prototype.divRemTo = bnpDivRemTo;
    // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
    // r != q, this != m.  q or r may be null.


    BigInteger.prototype.divRemTo = function (m, q, r) {
      var pm = m.abs();

      if (pm.t <= 0) {
        return;
      }

      var pt = this.abs();

      if (pt.t < pm.t) {
        if (q != null) {
          q.fromInt(0);
        }

        if (r != null) {
          this.copyTo(r);
        }

        return;
      }

      if (r == null) {
        r = nbi();
      }

      var y = nbi();
      var ts = this.s;
      var ms = m.s;
      var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus

      if (nsh > 0) {
        pm.lShiftTo(nsh, y);
        pt.lShiftTo(nsh, r);
      } else {
        pm.copyTo(y);
        pt.copyTo(r);
      }

      var ys = y.t;
      var y0 = y[ys - 1];

      if (y0 == 0) {
        return;
      }

      var yt = y0 * (1 << this.F1) + (ys > 1 ? y[ys - 2] >> this.F2 : 0);
      var d1 = this.FV / yt;
      var d2 = (1 << this.F1) / yt;
      var e = 1 << this.F2;
      var i = r.t;
      var j = i - ys;
      var t = q == null ? nbi() : q;
      y.dlShiftTo(j, t);

      if (r.compareTo(t) >= 0) {
        r[r.t++] = 1;
        r.subTo(t, r);
      }

      BigInteger.ONE.dlShiftTo(ys, t);
      t.subTo(y, y); // "negative" y so we can replace sub with am later

      while (y.t < ys) {
        y[y.t++] = 0;
      }

      while (--j >= 0) {
        // Estimate quotient digit
        var qd = r[--i] == y0 ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);

        if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) {
          y.dlShiftTo(j, t);
          r.subTo(t, r);

          while (r[i] < --qd) {
            r.subTo(t, r);
          }
        }
      }

      if (q != null) {
        r.drShiftTo(ys, q);

        if (ts != ms) {
          BigInteger.ZERO.subTo(q, q);
        }
      }

      r.t = ys;
      r.clamp();

      if (nsh > 0) {
        r.rShiftTo(nsh, r);
      } // Denormalize remainder


      if (ts < 0) {
        BigInteger.ZERO.subTo(r, r);
      }
    }; // BigInteger.prototype.invDigit = bnpInvDigit;
    // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
    // justification:
    //         xy == 1 (mod m)
    //         xy =  1+km
    //   xy(2-xy) = (1+km)(1-km)
    // x[y(2-xy)] = 1-k^2m^2
    // x[y(2-xy)] == 1 (mod m^2)
    // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
    // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
    // JS multiply "overflows" differently from C/C++, so care is needed here.


    BigInteger.prototype.invDigit = function () {
      if (this.t < 1) {
        return 0;
      }

      var x = this[0];

      if ((x & 1) == 0) {
        return 0;
      }

      var y = x & 3; // y == 1/x mod 2^2

      y = y * (2 - (x & 0xf) * y) & 0xf; // y == 1/x mod 2^4

      y = y * (2 - (x & 0xff) * y) & 0xff; // y == 1/x mod 2^8

      y = y * (2 - ((x & 0xffff) * y & 0xffff)) & 0xffff; // y == 1/x mod 2^16
      // last step - calculate inverse mod DV directly;
      // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints

      y = y * (2 - x * y % this.DV) % this.DV; // y == 1/x mod 2^dbits
      // we really want the negative inverse, and -DV < y < DV

      return y > 0 ? this.DV - y : -y;
    }; // BigInteger.prototype.isEven = bnpIsEven;
    // (protected) true iff this is even


    BigInteger.prototype.isEven = function () {
      return (this.t > 0 ? this[0] & 1 : this.s) == 0;
    }; // BigInteger.prototype.exp = bnpExp;
    // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)


    BigInteger.prototype.exp = function (e, z) {
      if (e > 0xffffffff || e < 1) {
        return BigInteger.ONE;
      }

      var r = nbi();
      var r2 = nbi();
      var g = z.convert(this);
      var i = nbits(e) - 1;
      g.copyTo(r);

      while (--i >= 0) {
        z.sqrTo(r, r2);

        if ((e & 1 << i) > 0) {
          z.mulTo(r2, g, r);
        } else {
          var t = r;
          r = r2;
          r2 = t;
        }
      }

      return z.revert(r);
    }; // BigInteger.prototype.chunkSize = bnpChunkSize;
    // (protected) return x s.t. r^x < DV


    BigInteger.prototype.chunkSize = function (r) {
      return Math.floor(Math.LN2 * this.DB / Math.log(r));
    }; // BigInteger.prototype.toRadix = bnpToRadix;
    // (protected) convert to radix string


    BigInteger.prototype.toRadix = function (b) {
      if (b == null) {
        b = 10;
      }

      if (this.signum() == 0 || b < 2 || b > 36) {
        return "0";
      }

      var cs = this.chunkSize(b);
      var a = Math.pow(b, cs);
      var d = nbv(a);
      var y = nbi();
      var z = nbi();
      var r = "";
      this.divRemTo(d, y, z);

      while (y.signum() > 0) {
        r = (a + z.intValue()).toString(b).substr(1) + r;
        y.divRemTo(d, y, z);
      }

      return z.intValue().toString(b) + r;
    }; // BigInteger.prototype.fromRadix = bnpFromRadix;
    // (protected) convert from radix string


    BigInteger.prototype.fromRadix = function (s, b) {
      this.fromInt(0);

      if (b == null) {
        b = 10;
      }

      var cs = this.chunkSize(b);
      var d = Math.pow(b, cs);
      var mi = false;
      var j = 0;
      var w = 0;

      for (var i = 0; i < s.length; ++i) {
        var x = intAt(s, i);

        if (x < 0) {
          if (s.charAt(i) == "-" && this.signum() == 0) {
            mi = true;
          }

          continue;
        }

        w = b * w + x;

        if (++j >= cs) {
          this.dMultiply(d);
          this.dAddOffset(w, 0);
          j = 0;
          w = 0;
        }
      }

      if (j > 0) {
        this.dMultiply(Math.pow(b, j));
        this.dAddOffset(w, 0);
      }

      if (mi) {
        BigInteger.ZERO.subTo(this, this);
      }
    }; // BigInteger.prototype.fromNumber = bnpFromNumber;
    // (protected) alternate constructor


    BigInteger.prototype.fromNumber = function (a, b, c) {
      if ("number" == typeof b) {
        // new BigInteger(int,int,RNG)
        if (a < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(a, c);

          if (!this.testBit(a - 1)) {
            // force MSB set
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          }

          if (this.isEven()) {
            this.dAddOffset(1, 0);
          } // force odd


          while (!this.isProbablePrime(b)) {
            this.dAddOffset(2, 0);

            if (this.bitLength() > a) {
              this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
            }
          }
        }
      } else {
        // new BigInteger(int,RNG)
        var x = [];
        var t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);

        if (t > 0) {
          x[0] &= (1 << t) - 1;
        } else {
          x[0] = 0;
        }

        this.fromString(x, 256);
      }
    }; // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
    // (protected) r = this op a (bitwise)


    BigInteger.prototype.bitwiseTo = function (a, op, r) {
      var i;
      var f;
      var m = Math.min(a.t, this.t);

      for (i = 0; i < m; ++i) {
        r[i] = op(this[i], a[i]);
      }

      if (a.t < this.t) {
        f = a.s & this.DM;

        for (i = m; i < this.t; ++i) {
          r[i] = op(this[i], f);
        }

        r.t = this.t;
      } else {
        f = this.s & this.DM;

        for (i = m; i < a.t; ++i) {
          r[i] = op(f, a[i]);
        }

        r.t = a.t;
      }

      r.s = op(this.s, a.s);
      r.clamp();
    }; // BigInteger.prototype.changeBit = bnpChangeBit;
    // (protected) this op (1<<n)


    BigInteger.prototype.changeBit = function (n, op) {
      var r = BigInteger.ONE.shiftLeft(n);
      this.bitwiseTo(r, op, r);
      return r;
    }; // BigInteger.prototype.addTo = bnpAddTo;
    // (protected) r = this + a


    BigInteger.prototype.addTo = function (a, r) {
      var i = 0;
      var c = 0;
      var m = Math.min(a.t, this.t);

      while (i < m) {
        c += this[i] + a[i];
        r[i++] = c & this.DM;
        c >>= this.DB;
      }

      if (a.t < this.t) {
        c += a.s;

        while (i < this.t) {
          c += this[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += this.s;
      } else {
        c += this.s;

        while (i < a.t) {
          c += a[i];
          r[i++] = c & this.DM;
          c >>= this.DB;
        }

        c += a.s;
      }

      r.s = c < 0 ? -1 : 0;

      if (c > 0) {
        r[i++] = c;
      } else if (c < -1) {
        r[i++] = this.DV + c;
      }

      r.t = i;
      r.clamp();
    }; // BigInteger.prototype.dMultiply = bnpDMultiply;
    // (protected) this *= n, this >= 0, 1 < n < DV


    BigInteger.prototype.dMultiply = function (n) {
      this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
      ++this.t;
      this.clamp();
    }; // BigInteger.prototype.dAddOffset = bnpDAddOffset;
    // (protected) this += n << w words, this >= 0


    BigInteger.prototype.dAddOffset = function (n, w) {
      if (n == 0) {
        return;
      }

      while (this.t <= w) {
        this[this.t++] = 0;
      }

      this[w] += n;

      while (this[w] >= this.DV) {
        this[w] -= this.DV;

        if (++w >= this.t) {
          this[this.t++] = 0;
        }

        ++this[w];
      }
    }; // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
    // (protected) r = lower n words of "this * a", a.t <= n
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyLowerTo = function (a, n, r) {
      var i = Math.min(this.t + a.t, n);
      r.s = 0; // assumes a,this >= 0

      r.t = i;

      while (i > 0) {
        r[--i] = 0;
      }

      for (var j = r.t - this.t; i < j; ++i) {
        r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
      }

      for (var j = Math.min(a.t, n); i < j; ++i) {
        this.am(0, a[i], r, i, 0, n - i);
      }

      r.clamp();
    }; // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
    // (protected) r = "this * a" without lower n words, n > 0
    // "this" should be the larger one if appropriate.


    BigInteger.prototype.multiplyUpperTo = function (a, n, r) {
      --n;
      var i = r.t = this.t + a.t - n;
      r.s = 0; // assumes a,this >= 0

      while (--i >= 0) {
        r[i] = 0;
      }

      for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
        r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
      }

      r.clamp();
      r.drShiftTo(1, r);
    }; // BigInteger.prototype.modInt = bnpModInt;
    // (protected) this % n, n < 2^26


    BigInteger.prototype.modInt = function (n) {
      if (n <= 0) {
        return 0;
      }

      var d = this.DV % n;
      var r = this.s < 0 ? n - 1 : 0;

      if (this.t > 0) {
        if (d == 0) {
          r = this[0] % n;
        } else {
          for (var i = this.t - 1; i >= 0; --i) {
            r = (d * r + this[i]) % n;
          }
        }
      }

      return r;
    }; // BigInteger.prototype.millerRabin = bnpMillerRabin;
    // (protected) true if probably prime (HAC 4.24, Miller-Rabin)


    BigInteger.prototype.millerRabin = function (t) {
      var n1 = this.subtract(BigInteger.ONE);
      var k = n1.getLowestSetBit();

      if (k <= 0) {
        return false;
      }

      var r = n1.shiftRight(k);
      t = t + 1 >> 1;

      if (t > lowprimes.length) {
        t = lowprimes.length;
      }

      var a = nbi();

      for (var i = 0; i < t; ++i) {
        // Pick bases at random, instead of starting at 2
        a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
        var y = a.modPow(r, this);

        if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
          var j = 1;

          while (j++ < k && y.compareTo(n1) != 0) {
            y = y.modPowInt(2, this);

            if (y.compareTo(BigInteger.ONE) == 0) {
              return false;
            }
          }

          if (y.compareTo(n1) != 0) {
            return false;
          }
        }
      }

      return true;
    }; // BigInteger.prototype.square = bnSquare;
    // (public) this^2


    BigInteger.prototype.square = function () {
      var r = nbi();
      this.squareTo(r);
      return r;
    }; //#region ASYNC
    // Public API method


    BigInteger.prototype.gcda = function (a, callback) {
      var x = this.s < 0 ? this.negate() : this.clone();
      var y = a.s < 0 ? a.negate() : a.clone();

      if (x.compareTo(y) < 0) {
        var t = x;
        x = y;
        y = t;
      }

      var i = x.getLowestSetBit();
      var g = y.getLowestSetBit();

      if (g < 0) {
        callback(x);
        return;
      }

      if (i < g) {
        g = i;
      }

      if (g > 0) {
        x.rShiftTo(g, x);
        y.rShiftTo(g, y);
      } // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.


      var gcda1 = function gcda1() {
        if ((i = x.getLowestSetBit()) > 0) {
          x.rShiftTo(i, x);
        }

        if ((i = y.getLowestSetBit()) > 0) {
          y.rShiftTo(i, y);
        }

        if (x.compareTo(y) >= 0) {
          x.subTo(y, x);
          x.rShiftTo(1, x);
        } else {
          y.subTo(x, y);
          y.rShiftTo(1, y);
        }

        if (!(x.signum() > 0)) {
          if (g > 0) {
            y.lShiftTo(g, y);
          }

          setTimeout(function () {
            callback(y);
          }, 0); // escape
        } else {
          setTimeout(gcda1, 0);
        }
      };

      setTimeout(gcda1, 10);
    }; // (protected) alternate constructor


    BigInteger.prototype.fromNumberAsync = function (a, b, c, callback) {
      if ("number" == typeof b) {
        if (a < 2) {
          this.fromInt(1);
        } else {
          this.fromNumber(a, c);

          if (!this.testBit(a - 1)) {
            this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
          }

          if (this.isEven()) {
            this.dAddOffset(1, 0);
          }

          var bnp_1 = this;

          var bnpfn1_1 = function bnpfn1_1() {
            bnp_1.dAddOffset(2, 0);

            if (bnp_1.bitLength() > a) {
              bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
            }

            if (bnp_1.isProbablePrime(b)) {
              setTimeout(function () {
                callback();
              }, 0); // escape
            } else {
              setTimeout(bnpfn1_1, 0);
            }
          };

          setTimeout(bnpfn1_1, 0);
        }
      } else {
        var x = [];
        var t = a & 7;
        x.length = (a >> 3) + 1;
        b.nextBytes(x);

        if (t > 0) {
          x[0] &= (1 << t) - 1;
        } else {
          x[0] = 0;
        }

        this.fromString(x, 256);
      }
    };

    return BigInteger;
  }(); //#region REDUCERS
  //#region NullExp


  var NullExp =
  /** @class */
  function () {
    function NullExp() {} // NullExp.prototype.convert = nNop;


    NullExp.prototype.convert = function (x) {
      return x;
    }; // NullExp.prototype.revert = nNop;


    NullExp.prototype.revert = function (x) {
      return x;
    }; // NullExp.prototype.mulTo = nMulTo;


    NullExp.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
    }; // NullExp.prototype.sqrTo = nSqrTo;


    NullExp.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
    };

    return NullExp;
  }(); // Modular reduction using "classic" algorithm


  var Classic =
  /** @class */
  function () {
    function Classic(m) {
      this.m = m;
    } // Classic.prototype.convert = cConvert;


    Classic.prototype.convert = function (x) {
      if (x.s < 0 || x.compareTo(this.m) >= 0) {
        return x.mod(this.m);
      } else {
        return x;
      }
    }; // Classic.prototype.revert = cRevert;


    Classic.prototype.revert = function (x) {
      return x;
    }; // Classic.prototype.reduce = cReduce;


    Classic.prototype.reduce = function (x) {
      x.divRemTo(this.m, null, x);
    }; // Classic.prototype.mulTo = cMulTo;


    Classic.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Classic.prototype.sqrTo = cSqrTo;


    Classic.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Classic;
  }(); //#endregion
  //#region Montgomery
  // Montgomery reduction


  var Montgomery =
  /** @class */
  function () {
    function Montgomery(m) {
      this.m = m;
      this.mp = m.invDigit();
      this.mpl = this.mp & 0x7fff;
      this.mph = this.mp >> 15;
      this.um = (1 << m.DB - 15) - 1;
      this.mt2 = 2 * m.t;
    } // Montgomery.prototype.convert = montConvert;
    // xR mod m


    Montgomery.prototype.convert = function (x) {
      var r = nbi();
      x.abs().dlShiftTo(this.m.t, r);
      r.divRemTo(this.m, null, r);

      if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
        this.m.subTo(r, r);
      }

      return r;
    }; // Montgomery.prototype.revert = montRevert;
    // x/R mod m


    Montgomery.prototype.revert = function (x) {
      var r = nbi();
      x.copyTo(r);
      this.reduce(r);
      return r;
    }; // Montgomery.prototype.reduce = montReduce;
    // x = x/R mod m (HAC 14.32)


    Montgomery.prototype.reduce = function (x) {
      while (x.t <= this.mt2) {
        // pad x so am has enough room later
        x[x.t++] = 0;
      }

      for (var i = 0; i < this.m.t; ++i) {
        // faster way of calculating u0 = x[i]*mp mod DV
        var j = x[i] & 0x7fff;
        var u0 = j * this.mpl + ((j * this.mph + (x[i] >> 15) * this.mpl & this.um) << 15) & x.DM; // use am to combine the multiply-shift-add into one call

        j = i + this.m.t;
        x[j] += this.m.am(0, u0, x, i, 0, this.m.t); // propagate carry

        while (x[j] >= x.DV) {
          x[j] -= x.DV;
          x[++j]++;
        }
      }

      x.clamp();
      x.drShiftTo(this.m.t, x);

      if (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
      }
    }; // Montgomery.prototype.mulTo = montMulTo;
    // r = "xy/R mod m"; x,y != r


    Montgomery.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Montgomery.prototype.sqrTo = montSqrTo;
    // r = "x^2/R mod m"; x != r


    Montgomery.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Montgomery;
  }(); //#endregion Montgomery
  //#region Barrett
  // Barrett modular reduction


  var Barrett =
  /** @class */
  function () {
    function Barrett(m) {
      this.m = m; // setup Barrett

      this.r2 = nbi();
      this.q3 = nbi();
      BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
      this.mu = this.r2.divide(m);
    } // Barrett.prototype.convert = barrettConvert;


    Barrett.prototype.convert = function (x) {
      if (x.s < 0 || x.t > 2 * this.m.t) {
        return x.mod(this.m);
      } else if (x.compareTo(this.m) < 0) {
        return x;
      } else {
        var r = nbi();
        x.copyTo(r);
        this.reduce(r);
        return r;
      }
    }; // Barrett.prototype.revert = barrettRevert;


    Barrett.prototype.revert = function (x) {
      return x;
    }; // Barrett.prototype.reduce = barrettReduce;
    // x = x mod m (HAC 14.42)


    Barrett.prototype.reduce = function (x) {
      x.drShiftTo(this.m.t - 1, this.r2);

      if (x.t > this.m.t + 1) {
        x.t = this.m.t + 1;
        x.clamp();
      }

      this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
      this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);

      while (x.compareTo(this.r2) < 0) {
        x.dAddOffset(1, this.m.t + 1);
      }

      x.subTo(this.r2, x);

      while (x.compareTo(this.m) >= 0) {
        x.subTo(this.m, x);
      }
    }; // Barrett.prototype.mulTo = barrettMulTo;
    // r = x*y mod m; x,y != r


    Barrett.prototype.mulTo = function (x, y, r) {
      x.multiplyTo(y, r);
      this.reduce(r);
    }; // Barrett.prototype.sqrTo = barrettSqrTo;
    // r = x^2 mod m; x != r


    Barrett.prototype.sqrTo = function (x, r) {
      x.squareTo(r);
      this.reduce(r);
    };

    return Barrett;
  }(); //#endregion
  //#endregion REDUCERS
  // return new, unset BigInteger


  function nbi() {
    return new BigInteger(null);
  }

  function parseBigInt(str, r) {
    return new BigInteger(str, r);
  } // am: Compute w_j += (x*this_i), propagate carries,
  // c is initial carry, returns final carry.
  // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
  // We need to select the fastest one that works in this environment.
  // am1: use a single mult and divide to get the high bits,
  // max digit bits should be 26 because
  // max internal value = 2*dvalue^2-2*dvalue (< 2^53)


  function am1(i, x, w, j, c, n) {
    while (--n >= 0) {
      var v = x * this[i++] + w[j] + c;
      c = Math.floor(v / 0x4000000);
      w[j++] = v & 0x3ffffff;
    }

    return c;
  } // am2 avoids a big mult-and-extract completely.
  // Max digit bits should be <= 30 because we do bitwise ops
  // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)


  function am2(i, x, w, j, c, n) {
    var xl = x & 0x7fff;
    var xh = x >> 15;

    while (--n >= 0) {
      var l = this[i] & 0x7fff;
      var h = this[i++] >> 15;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
      c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
      w[j++] = l & 0x3fffffff;
    }

    return c;
  } // Alternately, set max digit bits to 28 since some
  // browsers slow down when dealing with 32-bit numbers.


  function am3(i, x, w, j, c, n) {
    var xl = x & 0x3fff;
    var xh = x >> 14;

    while (--n >= 0) {
      var l = this[i] & 0x3fff;
      var h = this[i++] >> 14;
      var m = xh * l + h * xl;
      l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
      c = (l >> 28) + (m >> 14) + xh * h;
      w[j++] = l & 0xfffffff;
    }

    return c;
  }

  if (j_lm && navigator.appName == "Microsoft Internet Explorer") {
    BigInteger.prototype.am = am2;
    dbits = 30;
  } else if (j_lm && navigator.appName != "Netscape") {
    BigInteger.prototype.am = am1;
    dbits = 26;
  } else {
    BigInteger.prototype.am = am3;
    dbits = 28;
  }

  BigInteger.prototype.DB = dbits;
  BigInteger.prototype.DM = (1 << dbits) - 1;
  BigInteger.prototype.DV = 1 << dbits;
  var BI_FP = 52;
  BigInteger.prototype.FV = Math.pow(2, BI_FP);
  BigInteger.prototype.F1 = BI_FP - dbits;
  BigInteger.prototype.F2 = 2 * dbits - BI_FP; // Digit conversions

  var BI_RC = [];
  var rr;
  var vv;
  rr = "0".charCodeAt(0);

  for (vv = 0; vv <= 9; ++vv) {
    BI_RC[rr++] = vv;
  }

  rr = "a".charCodeAt(0);

  for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
  }

  rr = "A".charCodeAt(0);

  for (vv = 10; vv < 36; ++vv) {
    BI_RC[rr++] = vv;
  }

  function intAt(s, i) {
    var c = BI_RC[s.charCodeAt(i)];
    return c == null ? -1 : c;
  } // return bigint initialized to value


  function nbv(i) {
    var r = nbi();
    r.fromInt(i);
    return r;
  } // returns bit length of the integer x


  function nbits(x) {
    var r = 1;
    var t;

    if ((t = x >>> 16) != 0) {
      x = t;
      r += 16;
    }

    if ((t = x >> 8) != 0) {
      x = t;
      r += 8;
    }

    if ((t = x >> 4) != 0) {
      x = t;
      r += 4;
    }

    if ((t = x >> 2) != 0) {
      x = t;
      r += 2;
    }

    if ((t = x >> 1) != 0) {
      x = t;
      r += 1;
    }

    return r;
  } // "constants"


  BigInteger.ZERO = nbv(0);
  BigInteger.ONE = nbv(1); // prng4.js - uses Arcfour as a PRNG

  var Arcfour =
  /** @class */
  function () {
    function Arcfour() {
      this.i = 0;
      this.j = 0;
      this.S = [];
    } // Arcfour.prototype.init = ARC4init;
    // Initialize arcfour context from key, an array of ints, each from [0..255]


    Arcfour.prototype.init = function (key) {
      var i;
      var j;
      var t;

      for (i = 0; i < 256; ++i) {
        this.S[i] = i;
      }

      j = 0;

      for (i = 0; i < 256; ++i) {
        j = j + this.S[i] + key[i % key.length] & 255;
        t = this.S[i];
        this.S[i] = this.S[j];
        this.S[j] = t;
      }

      this.i = 0;
      this.j = 0;
    }; // Arcfour.prototype.next = ARC4next;


    Arcfour.prototype.next = function () {
      var t;
      this.i = this.i + 1 & 255;
      this.j = this.j + this.S[this.i] & 255;
      t = this.S[this.i];
      this.S[this.i] = this.S[this.j];
      this.S[this.j] = t;
      return this.S[t + this.S[this.i] & 255];
    };

    return Arcfour;
  }(); // Plug in your RNG constructor here


  function prng_newstate() {
    return new Arcfour();
  } // Pool size must be a multiple of 4 and greater than 32.
  // An array of bytes the size of the pool will be passed to init()


  var rng_psize = 256; // Random number generator - requires a PRNG backend, e.g. prng4.js

  var rng_state;
  var rng_pool = null;
  var rng_pptr; // Initialize the pool with junk if needed.

  if (rng_pool == null) {
    rng_pool = [];
    rng_pptr = 0;
    var t = void 0;

    if (window.crypto && window.crypto.getRandomValues) {
      // Extract entropy (2048 bits) from RNG if available
      var z = new Uint32Array(256);
      window.crypto.getRandomValues(z);

      for (t = 0; t < z.length; ++t) {
        rng_pool[rng_pptr++] = z[t] & 255;
      }
    } // Use mouse events for entropy, if we do not have enough entropy by the time
    // we need it, entropy will be generated by Math.random.


    var onMouseMoveListener_1 = function onMouseMoveListener_1(ev) {
      this.count = this.count || 0;

      if (this.count >= 256 || rng_pptr >= rng_psize) {
        if (window.removeEventListener) {
          window.removeEventListener("mousemove", onMouseMoveListener_1, false);
        } else if (window.detachEvent) {
          window.detachEvent("onmousemove", onMouseMoveListener_1);
        }

        return;
      }

      try {
        var mouseCoordinates = ev.x + ev.y;
        rng_pool[rng_pptr++] = mouseCoordinates & 255;
        this.count += 1;
      } catch (e) {// Sometimes Firefox will deny permission to access event properties for some reason. Ignore.
      }
    };

    if (window.addEventListener) {
      window.addEventListener("mousemove", onMouseMoveListener_1, false);
    } else if (window.attachEvent) {
      window.attachEvent("onmousemove", onMouseMoveListener_1);
    }
  }

  function rng_get_byte() {
    if (rng_state == null) {
      rng_state = prng_newstate(); // At this point, we may not have collected enough entropy.  If not, fall back to Math.random

      while (rng_pptr < rng_psize) {
        var random = Math.floor(65536 * Math.random());
        rng_pool[rng_pptr++] = random & 255;
      }

      rng_state.init(rng_pool);

      for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
        rng_pool[rng_pptr] = 0;
      }

      rng_pptr = 0;
    } // TODO: allow reseeding after first request


    return rng_state.next();
  }

  var SecureRandom =
  /** @class */
  function () {
    function SecureRandom() {}

    SecureRandom.prototype.nextBytes = function (ba) {
      for (var i = 0; i < ba.length; ++i) {
        ba[i] = rng_get_byte();
      }
    };

    return SecureRandom;
  }(); // Depends on jsbn.js and rng.js
  // function linebrk(s,n) {
  //   var ret = "";
  //   var i = 0;
  //   while(i + n < s.length) {
  //     ret += s.substring(i,i+n) + "\n";
  //     i += n;
  //   }
  //   return ret + s.substring(i,s.length);
  // }
  // function byte2Hex(b) {
  //   if(b < 0x10)
  //     return "0" + b.toString(16);
  //   else
  //     return b.toString(16);
  // }
  // PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint


  function pkcs1pad2(s, n) {
    if (n < s.length + 11) {
      console.error("Message too long for RSA");
      return null;
    }

    var ba = [];
    var i = s.length - 1;

    while (i >= 0 && n > 0) {
      var c = s.charCodeAt(i--);

      if (c < 128) {
        ba[--n] = c;
      } else if (c > 127 && c < 2048) {
        ba[--n] = c & 63 | 128;
        ba[--n] = c >> 6 | 192;
      } else {
        ba[--n] = c & 63 | 128;
        ba[--n] = c >> 6 & 63 | 128;
        ba[--n] = c >> 12 | 224;
      }
    }

    ba[--n] = 0;
    var rng = new SecureRandom();
    var x = [];

    while (n > 2) {
      x[0] = 0;

      while (x[0] == 0) {
        rng.nextBytes(x);
      }

      ba[--n] = x[0];
    }

    ba[--n] = 2;
    ba[--n] = 0;
    return new BigInteger(ba);
  } // "empty" RSA key constructor


  var RSAKey =
  /** @class */
  function () {
    function RSAKey() {
      this.n = null;
      this.e = 0;
      this.d = null;
      this.p = null;
      this.q = null;
      this.dmp1 = null;
      this.dmq1 = null;
      this.coeff = null;
    } //#region PROTECTED
    // protected
    // RSAKey.prototype.doPublic = RSADoPublic;
    // Perform raw public operation on "x": return x^e (mod n)


    RSAKey.prototype.doPublic = function (x) {
      return x.modPowInt(this.e, this.n);
    }; // RSAKey.prototype.doPrivate = RSADoPrivate;
    // Perform raw private operation on "x": return x^d (mod n)


    RSAKey.prototype.doPrivate = function (x) {
      if (this.p == null || this.q == null) {
        return x.modPow(this.d, this.n);
      } // TODO: re-calculate any missing CRT params


      var xp = x.mod(this.p).modPow(this.dmp1, this.p);
      var xq = x.mod(this.q).modPow(this.dmq1, this.q);

      while (xp.compareTo(xq) < 0) {
        xp = xp.add(this.p);
      }

      return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
    }; //#endregion PROTECTED
    //#region PUBLIC
    // RSAKey.prototype.setPublic = RSASetPublic;
    // Set the public key fields N and e from hex strings


    RSAKey.prototype.setPublic = function (N, E) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
      } else {
        console.error("Invalid RSA public key");
      }
    }; // RSAKey.prototype.encrypt = RSAEncrypt;
    // Return the PKCS#1 RSA encryption of "text" as an even-length hex string


    RSAKey.prototype.encrypt = function (text) {
      var m = pkcs1pad2(text, this.n.bitLength() + 7 >> 3);

      if (m == null) {
        return null;
      }

      var c = this.doPublic(m);

      if (c == null) {
        return null;
      }

      var h = c.toString(16);

      if ((h.length & 1) == 0) {
        return h;
      } else {
        return "0" + h;
      }
    }; // RSAKey.prototype.setPrivate = RSASetPrivate;
    // Set the private key fields N, e, and d from hex strings


    RSAKey.prototype.setPrivate = function (N, E, D) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
      } else {
        console.error("Invalid RSA private key");
      }
    }; // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
    // Set the private key fields N, e, d and CRT params from hex strings


    RSAKey.prototype.setPrivateEx = function (N, E, D, P, Q, DP, DQ, C) {
      if (N != null && E != null && N.length > 0 && E.length > 0) {
        this.n = parseBigInt(N, 16);
        this.e = parseInt(E, 16);
        this.d = parseBigInt(D, 16);
        this.p = parseBigInt(P, 16);
        this.q = parseBigInt(Q, 16);
        this.dmp1 = parseBigInt(DP, 16);
        this.dmq1 = parseBigInt(DQ, 16);
        this.coeff = parseBigInt(C, 16);
      } else {
        console.error("Invalid RSA private key");
      }
    }; // RSAKey.prototype.generate = RSAGenerate;
    // Generate a new random private key B bits long, using public expt E


    RSAKey.prototype.generate = function (B, E) {
      var rng = new SecureRandom();
      var qs = B >> 1;
      this.e = parseInt(E, 16);
      var ee = new BigInteger(E, 16);

      for (;;) {
        for (;;) {
          this.p = new BigInteger(B - qs, 1, rng);

          if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
            break;
          }
        }

        for (;;) {
          this.q = new BigInteger(qs, 1, rng);

          if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
            break;
          }
        }

        if (this.p.compareTo(this.q) <= 0) {
          var t = this.p;
          this.p = this.q;
          this.q = t;
        }

        var p1 = this.p.subtract(BigInteger.ONE);
        var q1 = this.q.subtract(BigInteger.ONE);
        var phi = p1.multiply(q1);

        if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
          this.n = this.p.multiply(this.q);
          this.d = ee.modInverse(phi);
          this.dmp1 = this.d.mod(p1);
          this.dmq1 = this.d.mod(q1);
          this.coeff = this.q.modInverse(this.p);
          break;
        }
      }
    }; // RSAKey.prototype.decrypt = RSADecrypt;
    // Return the PKCS#1 RSA decryption of "ctext".
    // "ctext" is an even-length hex string and the output is a plain string.
    //修改


    RSAKey.prototype.decrypt = function (ctext) {
      var c = parseBigInt(ctext, 16); // var m = this.doPrivate(c);

      var m = this.doPublic(c);

      if (m == null) {
        return null;
      }

      return pkcs1unpad2(m, this.n.bitLength() + 7 >> 3);
    }; // Generate a new random private key B bits long, using public expt E


    RSAKey.prototype.generateAsync = function (B, E, callback) {
      var rng = new SecureRandom();
      var qs = B >> 1;
      this.e = parseInt(E, 16);
      var ee = new BigInteger(E, 16);
      var rsa = this; // These functions have non-descript names because they were originally for(;;) loops.
      // I don't know about cryptography to give them better names than loop1-4.

      var loop1 = function loop1() {
        var loop4 = function loop4() {
          if (rsa.p.compareTo(rsa.q) <= 0) {
            var t = rsa.p;
            rsa.p = rsa.q;
            rsa.q = t;
          }

          var p1 = rsa.p.subtract(BigInteger.ONE);
          var q1 = rsa.q.subtract(BigInteger.ONE);
          var phi = p1.multiply(q1);

          if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
            rsa.n = rsa.p.multiply(rsa.q);
            rsa.d = ee.modInverse(phi);
            rsa.dmp1 = rsa.d.mod(p1);
            rsa.dmq1 = rsa.d.mod(q1);
            rsa.coeff = rsa.q.modInverse(rsa.p);
            setTimeout(function () {
              callback();
            }, 0); // escape
          } else {
            setTimeout(loop1, 0);
          }
        };

        var loop3 = function loop3() {
          rsa.q = nbi();
          rsa.q.fromNumberAsync(qs, 1, rng, function () {
            rsa.q.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (r.compareTo(BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                setTimeout(loop4, 0);
              } else {
                setTimeout(loop3, 0);
              }
            });
          });
        };

        var loop2 = function loop2() {
          rsa.p = nbi();
          rsa.p.fromNumberAsync(B - qs, 1, rng, function () {
            rsa.p.subtract(BigInteger.ONE).gcda(ee, function (r) {
              if (r.compareTo(BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                setTimeout(loop3, 0);
              } else {
                setTimeout(loop2, 0);
              }
            });
          });
        };

        setTimeout(loop2, 0);
      };

      setTimeout(loop1, 0);
    };

    return RSAKey;
  }(); // Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
  //修改


  function pkcs1unpad2(d, n) {
    var b = d.toByteArray();
    var i = 0;

    while (i < b.length && b[i] == 0) {
      ++i;
    } // if (b.length - i != n - 1 || b[i] != 2) {
    //     return null;
    // }


    ++i;

    while (b[i] != 0) {
      if (++i >= b.length) {
        return null;
      }
    }

    var ret = "";

    while (++i < b.length) {
      var c = b[i] & 255;

      if (c < 128) {
        ret += String.fromCharCode(c);
      } else if (c > 191 && c < 224) {
        ret += String.fromCharCode((c & 31) << 6 | b[i + 1] & 63);
        ++i;
      } else {
        ret += String.fromCharCode((c & 15) << 12 | (b[i + 1] & 63) << 6 | b[i + 2] & 63);
        i += 2;
      }
    }

    return ret;
  } // Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
  // function RSAEncryptB64(text) {
  //  var h = this.encrypt(text);
  //  if(h) return hex2b64(h); else return null;
  // }
  // public
  // RSAKey.prototype.encrypt_b64 = RSAEncryptB64;

  /*!
  Copyright (c) 2011, Yahoo! Inc. All rights reserved.
  Code licensed under the BSD License:
  http://developer.yahoo.com/yui/license.html
  version: 2.9.0
  */


  var YAHOO = {};
  YAHOO.lang = {
    /**
     * Utility to set up the prototype, constructor and superclass properties to
     * support an inheritance strategy that can chain constructors and methods.
     * Static members will not be inherited.
     *
     * @method extend
     * @static
     * @param {Function} subc   the object to modify
     * @param {Function} superc the object to inherit
     * @param {Object} overrides  additional properties/methods to add to the
     *                              subclass prototype.  These will override the
     *                              matching items obtained from the superclass
     *                              if present.
     */
    extend: function extend(subc, superc, overrides) {
      if (!superc || !subc) {
        throw new Error("YAHOO.lang.extend failed, please check that " + "all dependencies are included.");
      }

      var F = function F() {};

      F.prototype = superc.prototype;
      subc.prototype = new F();
      subc.prototype.constructor = subc;
      subc.superclass = superc.prototype;

      if (superc.prototype.constructor == Object.prototype.constructor) {
        superc.prototype.constructor = superc;
      }

      if (overrides) {
        var i;

        for (i in overrides) {
          subc.prototype[i] = overrides[i];
        }
        /*
         * IE will not enumerate native functions in a derived object even if the
         * function was overridden.  This is a workaround for specific functions
         * we care about on the Object prototype.
         * @property _IEEnumFix
         * @param {Function} r  the object to receive the augmentation
         * @param {Function} s  the object that supplies the properties to augment
         * @static
         * @private
         */


        var _IEEnumFix = function _IEEnumFix() {},
            ADD = ["toString", "valueOf"];

        try {
          if (/MSIE/.test(navigator.userAgent)) {
            _IEEnumFix = function _IEEnumFix(r, s) {
              for (i = 0; i < ADD.length; i = i + 1) {
                var fname = ADD[i],
                    f = s[fname];

                if (typeof f === 'function' && f != Object.prototype[fname]) {
                  r[fname] = f;
                }
              }
            };
          }
        } catch (ex) {}

        _IEEnumFix(subc.prototype, overrides);
      }
    }
  };
  /* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
   */

  /**
   * @fileOverview
   * @name asn1-1.0.js
   * @author Kenji Urushima kenji.urushima@gmail.com
   * @version asn1 1.0.13 (2017-Jun-02)
   * @since jsrsasign 2.1
   * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
   */

  /**
   * kjur's class library name space
   * <p>
   * This name space provides following name spaces:
   * <ul>
   * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
   * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
   * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
   * class and utilities</li>
   * </ul>
   * </p>
   * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
   * @name KJUR
   * @namespace kjur's class library name space
   */

  var KJUR = {};
  /**
   * kjur's ASN.1 class library name space
   * <p>
   * This is ITU-T X.690 ASN.1 DER encoder class library and
   * class structure and methods is very similar to
   * org.bouncycastle.asn1 package of
   * well known BouncyCaslte Cryptography Library.
   * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
   * Here are ASN.1 DER primitive classes.
   * <ul>
   * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
   * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
   * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
   * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
   * <li>0x05 {@link KJUR.asn1.DERNull}</li>
   * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
   * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
   * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
   * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
   * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
   * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
   * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
   * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
   * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
   * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
   * <li>0x31 {@link KJUR.asn1.DERSet}</li>
   * </ul>
   * <h4>OTHER ASN.1 CLASSES</h4>
   * <ul>
   * <li>{@link KJUR.asn1.ASN1Object}</li>
   * <li>{@link KJUR.asn1.DERAbstractString}</li>
   * <li>{@link KJUR.asn1.DERAbstractTime}</li>
   * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
   * <li>{@link KJUR.asn1.DERTaggedObject}</li>
   * </ul>
   * <h4>SUB NAME SPACES</h4>
   * <ul>
   * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
   * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
   * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
   * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
   * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
   * </ul>
   * </p>
   * NOTE: Please ignore method summary and document of this namespace.
   * This caused by a bug of jsdoc2.
   * @name KJUR.asn1
   * @namespace
   */

  if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1) KJUR.asn1 = {};
  /**
   * ASN1 utilities class
   * @name KJUR.asn1.ASN1Util
   * @class ASN1 utilities class
   * @since asn1 1.0.2
   */

  KJUR.asn1.ASN1Util = new function () {
    this.integerToByteHex = function (i) {
      var h = i.toString(16);
      if (h.length % 2 == 1) h = '0' + h;
      return h;
    };

    this.bigIntToMinTwosComplementsHex = function (bigIntegerValue) {
      var h = bigIntegerValue.toString(16);

      if (h.substr(0, 1) != '-') {
        if (h.length % 2 == 1) {
          h = '0' + h;
        } else {
          if (!h.match(/^[0-7]/)) {
            h = '00' + h;
          }
        }
      } else {
        var hPos = h.substr(1);
        var xorLen = hPos.length;

        if (xorLen % 2 == 1) {
          xorLen += 1;
        } else {
          if (!h.match(/^[0-7]/)) {
            xorLen += 2;
          }
        }

        var hMask = '';

        for (var i = 0; i < xorLen; i++) {
          hMask += 'f';
        }

        var biMask = new BigInteger(hMask, 16);
        var biNeg = biMask.xor(bigIntegerValue).add(BigInteger.ONE);
        h = biNeg.toString(16).replace(/^-/, '');
      }

      return h;
    };
    /**
     * get PEM string from hexadecimal data and header string
     * @name getPEMStringFromHex
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} dataHex hexadecimal string of PEM body
     * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
     * @return {String} PEM formatted string of input data
     * @description
     * This method converts a hexadecimal string to a PEM string with
     * a specified header. Its line break will be CRLF("\r\n").
     * @example
     * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
     * // value of pem will be:
     * -----BEGIN PRIVATE KEY-----
     * YWFh
     * -----END PRIVATE KEY-----
     */


    this.getPEMStringFromHex = function (dataHex, pemHeader) {
      return hextopem(dataHex, pemHeader);
    };
    /**
     * generate ASN1Object specifed by JSON parameters
     * @name newObject
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return {KJUR.asn1.ASN1Object} generated object
     * @since asn1 1.0.3
     * @description
     * generate any ASN1Object specified by JSON param
     * including ASN.1 primitive or structured.
     * Generally 'param' can be described as follows:
     * <blockquote>
     * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
     * </blockquote>
     * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
     * <ul>
     * <li>'bool' - DERBoolean</li>
     * <li>'int' - DERInteger</li>
     * <li>'bitstr' - DERBitString</li>
     * <li>'octstr' - DEROctetString</li>
     * <li>'null' - DERNull</li>
     * <li>'oid' - DERObjectIdentifier</li>
     * <li>'enum' - DEREnumerated</li>
     * <li>'utf8str' - DERUTF8String</li>
     * <li>'numstr' - DERNumericString</li>
     * <li>'prnstr' - DERPrintableString</li>
     * <li>'telstr' - DERTeletexString</li>
     * <li>'ia5str' - DERIA5String</li>
     * <li>'utctime' - DERUTCTime</li>
     * <li>'gentime' - DERGeneralizedTime</li>
     * <li>'seq' - DERSequence</li>
     * <li>'set' - DERSet</li>
     * <li>'tag' - DERTaggedObject</li>
     * </ul>
     * @example
     * newObject({'prnstr': 'aaa'});
     * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
     * // ASN.1 Tagged Object
     * newObject({'tag': {'tag': 'a1',
     *                    'explicit': true,
     *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
     * // more simple representation of ASN.1 Tagged Object
     * newObject({'tag': ['a1',
     *                    true,
     *                    {'seq': [
     *                      {'int': 3},
     *                      {'prnstr': 'aaa'}]}
     *                   ]});
     */


    this.newObject = function (param) {
      var _KJUR = KJUR,
          _KJUR_asn1 = _KJUR.asn1,
          _DERBoolean = _KJUR_asn1.DERBoolean,
          _DERInteger = _KJUR_asn1.DERInteger,
          _DERBitString = _KJUR_asn1.DERBitString,
          _DEROctetString = _KJUR_asn1.DEROctetString,
          _DERNull = _KJUR_asn1.DERNull,
          _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier,
          _DEREnumerated = _KJUR_asn1.DEREnumerated,
          _DERUTF8String = _KJUR_asn1.DERUTF8String,
          _DERNumericString = _KJUR_asn1.DERNumericString,
          _DERPrintableString = _KJUR_asn1.DERPrintableString,
          _DERTeletexString = _KJUR_asn1.DERTeletexString,
          _DERIA5String = _KJUR_asn1.DERIA5String,
          _DERUTCTime = _KJUR_asn1.DERUTCTime,
          _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime,
          _DERSequence = _KJUR_asn1.DERSequence,
          _DERSet = _KJUR_asn1.DERSet,
          _DERTaggedObject = _KJUR_asn1.DERTaggedObject,
          _newObject = _KJUR_asn1.ASN1Util.newObject;
      var keys = Object.keys(param);
      if (keys.length != 1) throw "key of param shall be only one.";
      var key = keys[0];
      if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1) throw "undefined key: " + key;
      if (key == "bool") return new _DERBoolean(param[key]);
      if (key == "int") return new _DERInteger(param[key]);
      if (key == "bitstr") return new _DERBitString(param[key]);
      if (key == "octstr") return new _DEROctetString(param[key]);
      if (key == "null") return new _DERNull(param[key]);
      if (key == "oid") return new _DERObjectIdentifier(param[key]);
      if (key == "enum") return new _DEREnumerated(param[key]);
      if (key == "utf8str") return new _DERUTF8String(param[key]);
      if (key == "numstr") return new _DERNumericString(param[key]);
      if (key == "prnstr") return new _DERPrintableString(param[key]);
      if (key == "telstr") return new _DERTeletexString(param[key]);
      if (key == "ia5str") return new _DERIA5String(param[key]);
      if (key == "utctime") return new _DERUTCTime(param[key]);
      if (key == "gentime") return new _DERGeneralizedTime(param[key]);

      if (key == "seq") {
        var paramList = param[key];
        var a = [];

        for (var i = 0; i < paramList.length; i++) {
          var asn1Obj = _newObject(paramList[i]);

          a.push(asn1Obj);
        }

        return new _DERSequence({
          'array': a
        });
      }

      if (key == "set") {
        var paramList = param[key];
        var a = [];

        for (var i = 0; i < paramList.length; i++) {
          var asn1Obj = _newObject(paramList[i]);

          a.push(asn1Obj);
        }

        return new _DERSet({
          'array': a
        });
      }

      if (key == "tag") {
        var tagParam = param[key];

        if (Object.prototype.toString.call(tagParam) === '[object Array]' && tagParam.length == 3) {
          var obj = _newObject(tagParam[2]);

          return new _DERTaggedObject({
            tag: tagParam[0],
            explicit: tagParam[1],
            obj: obj
          });
        } else {
          var newParam = {};
          if (tagParam.explicit !== undefined) newParam.explicit = tagParam.explicit;
          if (tagParam.tag !== undefined) newParam.tag = tagParam.tag;
          if (tagParam.obj === undefined) throw "obj shall be specified for 'tag'.";
          newParam.obj = _newObject(tagParam.obj);
          return new _DERTaggedObject(newParam);
        }
      }
    };
    /**
     * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
     * @name jsonToASN1HEX
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {Array} param JSON parameter to generate ASN1Object
     * @return hexadecimal string of ASN1Object
     * @since asn1 1.0.4
     * @description
     * As for ASN.1 object representation of JSON object,
     * please see {@link newObject}.
     * @example
     * jsonToASN1HEX({'prnstr': 'aaa'});
     */


    this.jsonToASN1HEX = function (param) {
      var asn1Obj = this.newObject(param);
      return asn1Obj.getEncodedHex();
    };
  }();
  /**
   * get dot noted oid number string from hexadecimal value of OID
   * @name oidHexToInt
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {String} hex hexadecimal value of object identifier
   * @return {String} dot noted string of object identifier
   * @since jsrsasign 4.8.3 asn1 1.0.7
   * @description
   * This static method converts from hexadecimal string representation of
   * ASN.1 value of object identifier to oid number string.
   * @example
   * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
   */

  KJUR.asn1.ASN1Util.oidHexToInt = function (hex) {
    var s = "";
    var i01 = parseInt(hex.substr(0, 2), 16);
    var i0 = Math.floor(i01 / 40);
    var i1 = i01 % 40;
    var s = i0 + "." + i1;
    var binbuf = "";

    for (var i = 2; i < hex.length; i += 2) {
      var value = parseInt(hex.substr(i, 2), 16);
      var bin = ("00000000" + value.toString(2)).slice(-8);
      binbuf = binbuf + bin.substr(1, 7);

      if (bin.substr(0, 1) == "0") {
        var bi = new BigInteger(binbuf, 2);
        s = s + "." + bi.toString(10);
        binbuf = "";
      }
    }

    return s;
  };
  /**
   * get hexadecimal value of object identifier from dot noted oid value
   * @name oidIntToHex
   * @memberOf KJUR.asn1.ASN1Util
   * @function
   * @param {String} oidString dot noted string of object identifier
   * @return {String} hexadecimal value of object identifier
   * @since jsrsasign 4.8.3 asn1 1.0.7
   * @description
   * This static method converts from object identifier value string.
   * to hexadecimal string representation of it.
   * @example
   * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
   */


  KJUR.asn1.ASN1Util.oidIntToHex = function (oidString) {
    var itox = function itox(i) {
      var h = i.toString(16);
      if (h.length == 1) h = '0' + h;
      return h;
    };

    var roidtox = function roidtox(roid) {
      var h = '';
      var bi = new BigInteger(roid, 10);
      var b = bi.toString(2);
      var padLen = 7 - b.length % 7;
      if (padLen == 7) padLen = 0;
      var bPad = '';

      for (var i = 0; i < padLen; i++) {
        bPad += '0';
      }

      b = bPad + b;

      for (var i = 0; i < b.length - 1; i += 7) {
        var b8 = b.substr(i, 7);
        if (i != b.length - 7) b8 = '1' + b8;
        h += itox(parseInt(b8, 2));
      }

      return h;
    };

    if (!oidString.match(/^[0-9.]+$/)) {
      throw "malformed oid string: " + oidString;
    }

    var h = '';
    var a = oidString.split('.');
    var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
    h += itox(i0);
    a.splice(0, 2);

    for (var i = 0; i < a.length; i++) {
      h += roidtox(a[i]);
    }

    return h;
  }; // ********************************************************************
  //  Abstract ASN.1 Classes
  // ********************************************************************
  // ********************************************************************

  /**
   * base class for ASN.1 DER encoder object
   * @name KJUR.asn1.ASN1Object
   * @class base class for ASN.1 DER encoder object
   * @property {Boolean} isModified flag whether internal data was changed
   * @property {String} hTLV hexadecimal string of ASN.1 TLV
   * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
   * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
   * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
   * @description
   */


  KJUR.asn1.ASN1Object = function () {
    var hV = '';
    /**
     * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
     * @name getLengthHexFromValue
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV length(L)
     */

    this.getLengthHexFromValue = function () {
      if (typeof this.hV == "undefined" || this.hV == null) {
        throw "this.hV is null or undefined.";
      }

      if (this.hV.length % 2 == 1) {
        throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
      }

      var n = this.hV.length / 2;
      var hN = n.toString(16);

      if (hN.length % 2 == 1) {
        hN = "0" + hN;
      }

      if (n < 128) {
        return hN;
      } else {
        var hNlen = hN.length / 2;

        if (hNlen > 15) {
          throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
        }

        var head = 128 + hNlen;
        return head.toString(16) + hN;
      }
    };
    /**
     * get hexadecimal string of ASN.1 TLV bytes
     * @name getEncodedHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV
     */


    this.getEncodedHex = function () {
      if (this.hTLV == null || this.isModified) {
        this.hV = this.getFreshValueHex();
        this.hL = this.getLengthHexFromValue();
        this.hTLV = this.hT + this.hL + this.hV;
        this.isModified = false; //alert("first time: " + this.hTLV);
      }

      return this.hTLV;
    };
    /**
     * get hexadecimal string of ASN.1 TLV value(V) bytes
     * @name getValueHex
     * @memberOf KJUR.asn1.ASN1Object#
     * @function
     * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
     */


    this.getValueHex = function () {
      this.getEncodedHex();
      return this.hV;
    };

    this.getFreshValueHex = function () {
      return '';
    };
  }; // == BEGIN DERAbstractString ================================================

  /**
   * base class for ASN.1 DER string classes
   * @name KJUR.asn1.DERAbstractString
   * @class base class for ASN.1 DER string classes
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @property {String} s internal string of value
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */


  KJUR.asn1.DERAbstractString = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @return {String} string value of this string object
     */

    this.getString = function () {
      return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newS value by a string to set
     */


    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(this.s);
    };
    /**
     * set value by a hexadecimal string
     * @name setStringHex
     * @memberOf KJUR.asn1.DERAbstractString#
     * @function
     * @param {String} newHexString value by a hexadecimal string to set
     */


    this.setStringHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params == "string") {
        this.setString(params);
      } else if (typeof params['str'] != "undefined") {
        this.setString(params['str']);
      } else if (typeof params['hex'] != "undefined") {
        this.setStringHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object); // == END   DERAbstractString ================================================
  // == BEGIN DERAbstractTime ==================================================

  /**
   * base class for ASN.1 DER Generalized/UTCTime class
   * @name KJUR.asn1.DERAbstractTime
   * @class base class for ASN.1 DER Generalized/UTCTime class
   * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERAbstractTime = function (params) {
    KJUR.asn1.DERAbstractTime.superclass.constructor.call(this); // --- PRIVATE METHODS --------------------

    this.localDateToUTC = function (d) {
      utc = d.getTime() + d.getTimezoneOffset() * 60000;
      var utcDate = new Date(utc);
      return utcDate;
    };
    /*
     * format date string by Data object
     * @name formatDate
     * @memberOf KJUR.asn1.AbstractTime;
     * @param {Date} dateObject
     * @param {string} type 'utc' or 'gen'
     * @param {boolean} withMillis flag for with millisections or not
     * @description
     * 'withMillis' flag is supported from asn1 1.0.6.
     */


    this.formatDate = function (dateObject, type, withMillis) {
      var pad = this.zeroPadding;
      var d = this.localDateToUTC(dateObject);
      var year = String(d.getFullYear());
      if (type == 'utc') year = year.substr(2, 2);
      var month = pad(String(d.getMonth() + 1), 2);
      var day = pad(String(d.getDate()), 2);
      var hour = pad(String(d.getHours()), 2);
      var min = pad(String(d.getMinutes()), 2);
      var sec = pad(String(d.getSeconds()), 2);
      var s = year + month + day + hour + min + sec;

      if (withMillis === true) {
        var millis = d.getMilliseconds();

        if (millis != 0) {
          var sMillis = pad(String(millis), 3);
          sMillis = sMillis.replace(/[0]+$/, "");
          s = s + "." + sMillis;
        }
      }

      return s + "Z";
    };

    this.zeroPadding = function (s, len) {
      if (s.length >= len) return s;
      return new Array(len - s.length + 1).join('0') + s;
    }; // --- PUBLIC METHODS --------------------

    /**
     * get string value of this string object
     * @name getString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @return {String} string value of this time object
     */


    this.getString = function () {
      return this.s;
    };
    /**
     * set value by a string
     * @name setString
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {String} newS value by a string to set such like "130430235959Z"
     */


    this.setString = function (newS) {
      this.hTLV = null;
      this.isModified = true;
      this.s = newS;
      this.hV = stohex(newS);
    };
    /**
     * set value by a Date object
     * @name setByDateValue
     * @memberOf KJUR.asn1.DERAbstractTime#
     * @function
     * @param {Integer} year year of date (ex. 2013)
     * @param {Integer} month month of date between 1 and 12 (ex. 12)
     * @param {Integer} day day of month
     * @param {Integer} hour hours of date
     * @param {Integer} min minutes of date
     * @param {Integer} sec seconds of date
     */


    this.setByDateValue = function (year, month, day, hour, min, sec) {
      var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
      this.setByDate(dateObject);
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object); // == END   DERAbstractTime ==================================================
  // == BEGIN DERAbstractStructured ============================================

  /**
   * base class for ASN.1 DER structured class
   * @name KJUR.asn1.DERAbstractStructured
   * @class base class for ASN.1 DER structured class
   * @property {Array} asn1Array internal array of ASN1Object
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERAbstractStructured = function (params) {
    KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
    /**
     * set value by array of ASN1Object
     * @name setByASN1ObjectArray
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {array} asn1ObjectArray array of ASN1Object to set
     */

    this.setByASN1ObjectArray = function (asn1ObjectArray) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array = asn1ObjectArray;
    };
    /**
     * append an ASN1Object to internal array
     * @name appendASN1Object
     * @memberOf KJUR.asn1.DERAbstractStructured#
     * @function
     * @param {ASN1Object} asn1Object to add
     */


    this.appendASN1Object = function (asn1Object) {
      this.hTLV = null;
      this.isModified = true;
      this.asn1Array.push(asn1Object);
    };

    this.asn1Array = new Array();

    if (typeof params != "undefined") {
      if (typeof params['array'] != "undefined") {
        this.asn1Array = params['array'];
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object); // ********************************************************************
  //  ASN.1 Object Classes
  // ********************************************************************
  // ********************************************************************

  /**
   * class for ASN.1 DER Boolean
   * @name KJUR.asn1.DERBoolean
   * @class class for ASN.1 DER Boolean
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERBoolean = function () {
    KJUR.asn1.DERBoolean.superclass.constructor.call(this);
    this.hT = "01";
    this.hTLV = "0101ff";
  };

  YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER Integer
   * @name KJUR.asn1.DERInteger
   * @class class for ASN.1 DER Integer
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>int - specify initial ASN.1 value(V) by integer value</li>
   * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERInteger = function (params) {
    KJUR.asn1.DERInteger.superclass.constructor.call(this);
    this.hT = "02";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */

    this.setByBigInteger = function (bigIntegerValue) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DERInteger
     * @function
     * @param {Integer} integer value to set
     */


    this.setByInteger = function (intValue) {
      var bi = new BigInteger(String(intValue), 10);
      this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DERInteger#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     * @example
     * new KJUR.asn1.DERInteger(123);
     * new KJUR.asn1.DERInteger({'int': 123});
     * new KJUR.asn1.DERInteger({'hex': '1fad'});
     */


    this.setValueHex = function (newHexString) {
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['bigint'] != "undefined") {
        this.setByBigInteger(params['bigint']);
      } else if (typeof params['int'] != "undefined") {
        this.setByInteger(params['int']);
      } else if (typeof params == "number") {
        this.setByInteger(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setValueHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER encoded BitString primitive
   * @name KJUR.asn1.DERBitString
   * @class class for ASN.1 DER encoded BitString primitive
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>bin - specify binary string (ex. '10111')</li>
   * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
   * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
   * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
   * argument for "BitString encapsulates" structure.</li>
   * </ul>
   * NOTE1: 'params' can be omitted.<br/>
   * NOTE2: 'obj' parameter have been supported since
   * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
   * @example
   * // default constructor
   * o = new KJUR.asn1.DERBitString();
   * // initialize with binary string
   * o = new KJUR.asn1.DERBitString({bin: "1011"});
   * // initialize with boolean array
   * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
   * // initialize with hexadecimal string (04 is unused bits)
   * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
   * // initialize with ASN1Util.newObject argument for encapsulated
   * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
   * // above generates a ASN.1 data like this:
   * // BIT STRING, encapsulates {
   * //   SEQUENCE {
   * //     INTEGER 3
   * //     PrintableString 'aaa'
   * //     }
   * //   }
   */

  KJUR.asn1.DERBitString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
      var o = KJUR.asn1.ASN1Util.newObject(params.obj);
      params.hex = "00" + o.getEncodedHex();
    }

    KJUR.asn1.DERBitString.superclass.constructor.call(this);
    this.hT = "03";
    /**
     * set ASN.1 value(V) by a hexadecimal string including unused bits
     * @name setHexValueIncludingUnusedBits
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} newHexStringIncludingUnusedBits
     */

    this.setHexValueIncludingUnusedBits = function (newHexStringIncludingUnusedBits) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = newHexStringIncludingUnusedBits;
    };
    /**
     * set ASN.1 value(V) by unused bit and hexadecimal string of value
     * @name setUnusedBitsAndHexValue
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {Integer} unusedBits
     * @param {String} hValue
     */


    this.setUnusedBitsAndHexValue = function (unusedBits, hValue) {
      if (unusedBits < 0 || 7 < unusedBits) {
        throw "unused bits shall be from 0 to 7: u = " + unusedBits;
      }

      var hUnusedBits = "0" + unusedBits;
      this.hTLV = null;
      this.isModified = true;
      this.hV = hUnusedBits + hValue;
    };
    /**
     * set ASN.1 DER BitString by binary string<br/>
     * @name setByBinaryString
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {String} binaryString binary value string (i.e. '10111')
     * @description
     * Its unused bits will be calculated automatically by length of
     * 'binaryValue'. <br/>
     * NOTE: Trailing zeros '0' will be ignored.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray("01011");
     */


    this.setByBinaryString = function (binaryString) {
      binaryString = binaryString.replace(/0+$/, '');
      var unusedBits = 8 - binaryString.length % 8;
      if (unusedBits == 8) unusedBits = 0;

      for (var i = 0; i <= unusedBits; i++) {
        binaryString += '0';
      }

      var h = '';

      for (var i = 0; i < binaryString.length - 1; i += 8) {
        var b = binaryString.substr(i, 8);
        var x = parseInt(b, 2).toString(16);
        if (x.length == 1) x = '0' + x;
        h += x;
      }

      this.hTLV = null;
      this.isModified = true;
      this.hV = '0' + unusedBits + h;
    };
    /**
     * set ASN.1 TLV value(V) by an array of boolean<br/>
     * @name setByBooleanArray
     * @memberOf KJUR.asn1.DERBitString#
     * @function
     * @param {array} booleanArray array of boolean (ex. [true, false, true])
     * @description
     * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.setByBooleanArray([false, true, false, true, true]);
     */


    this.setByBooleanArray = function (booleanArray) {
      var s = '';

      for (var i = 0; i < booleanArray.length; i++) {
        if (booleanArray[i] == true) {
          s += '1';
        } else {
          s += '0';
        }
      }

      this.setByBinaryString(s);
    };
    /**
     * generate an array of falses with specified length<br/>
     * @name newFalseArray
     * @memberOf KJUR.asn1.DERBitString
     * @function
     * @param {Integer} nLength length of array to generate
     * @return {array} array of boolean falses
     * @description
     * This static method may be useful to initialize boolean array.
     * @example
     * o = new KJUR.asn1.DERBitString();
     * o.newFalseArray(3) &rarr; [false, false, false]
     */


    this.newFalseArray = function (nLength) {
      var a = new Array(nLength);

      for (var i = 0; i < nLength; i++) {
        a[i] = false;
      }

      return a;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
        this.setHexValueIncludingUnusedBits(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setHexValueIncludingUnusedBits(params['hex']);
      } else if (typeof params['bin'] != "undefined") {
        this.setByBinaryString(params['bin']);
      } else if (typeof params['array'] != "undefined") {
        this.setByBooleanArray(params['array']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER OctetString<br/>
   * @name KJUR.asn1.DEROctetString
   * @class class for ASN.1 DER OctetString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * This class provides ASN.1 OctetString simple type.<br/>
   * Supported "params" attributes are:
   * <ul>
   * <li>str - to set a string as a value</li>
   * <li>hex - to set a hexadecimal string as a value</li>
   * <li>obj - to set a encapsulated ASN.1 value by JSON object
   * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
   * </ul>
   * NOTE: A parameter 'obj' have been supported
   * for "OCTET STRING, encapsulates" structure.
   * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
   * @see KJUR.asn1.DERAbstractString - superclass
   * @example
   * // default constructor
   * o = new KJUR.asn1.DEROctetString();
   * // initialize with string
   * o = new KJUR.asn1.DEROctetString({str: "aaa"});
   * // initialize with hexadecimal string
   * o = new KJUR.asn1.DEROctetString({hex: "616161"});
   * // initialize with ASN1Util.newObject argument
   * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
   * // above generates a ASN.1 data like this:
   * // OCTET STRING, encapsulates {
   * //   SEQUENCE {
   * //     INTEGER 3
   * //     PrintableString 'aaa'
   * //     }
   * //   }
   */

  KJUR.asn1.DEROctetString = function (params) {
    if (params !== undefined && typeof params.obj !== "undefined") {
      var o = KJUR.asn1.ASN1Util.newObject(params.obj);
      params.hex = o.getEncodedHex();
    }

    KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
    this.hT = "04";
  };

  YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER Null
   * @name KJUR.asn1.DERNull
   * @class class for ASN.1 DER Null
   * @extends KJUR.asn1.ASN1Object
   * @description
   * @see KJUR.asn1.ASN1Object - superclass
   */

  KJUR.asn1.DERNull = function () {
    KJUR.asn1.DERNull.superclass.constructor.call(this);
    this.hT = "05";
    this.hTLV = "0500";
  };

  YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER ObjectIdentifier
   * @name KJUR.asn1.DERObjectIdentifier
   * @class class for ASN.1 DER ObjectIdentifier
   * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERObjectIdentifier = function (params) {
    var itox = function itox(i) {
      var h = i.toString(16);
      if (h.length == 1) h = '0' + h;
      return h;
    };

    var roidtox = function roidtox(roid) {
      var h = '';
      var bi = new BigInteger(roid, 10);
      var b = bi.toString(2);
      var padLen = 7 - b.length % 7;
      if (padLen == 7) padLen = 0;
      var bPad = '';

      for (var i = 0; i < padLen; i++) {
        bPad += '0';
      }

      b = bPad + b;

      for (var i = 0; i < b.length - 1; i += 7) {
        var b8 = b.substr(i, 7);
        if (i != b.length - 7) b8 = '1' + b8;
        h += itox(parseInt(b8, 2));
      }

      return h;
    };

    KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
    this.hT = "06";
    /**
     * set value by a hexadecimal string
     * @name setValueHex
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} newHexString hexadecimal value of OID bytes
     */

    this.setValueHex = function (newHexString) {
      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = newHexString;
    };
    /**
     * set value by a OID string<br/>
     * @name setValueOidString
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidString OID string (ex. 2.5.4.13)
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueOidString("2.5.4.13");
     */


    this.setValueOidString = function (oidString) {
      if (!oidString.match(/^[0-9.]+$/)) {
        throw "malformed oid string: " + oidString;
      }

      var h = '';
      var a = oidString.split('.');
      var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
      h += itox(i0);
      a.splice(0, 2);

      for (var i = 0; i < a.length; i++) {
        h += roidtox(a[i]);
      }

      this.hTLV = null;
      this.isModified = true;
      this.s = null;
      this.hV = h;
    };
    /**
     * set value by a OID name
     * @name setValueName
     * @memberOf KJUR.asn1.DERObjectIdentifier#
     * @function
     * @param {String} oidName OID name (ex. 'serverAuth')
     * @since 1.0.1
     * @description
     * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
     * Otherwise raise error.
     * @example
     * o = new KJUR.asn1.DERObjectIdentifier();
     * o.setValueName("serverAuth");
     */


    this.setValueName = function (oidName) {
      var oid = KJUR.asn1.x509.OID.name2oid(oidName);

      if (oid !== '') {
        this.setValueOidString(oid);
      } else {
        throw "DERObjectIdentifier oidName undefined: " + oidName;
      }
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (params !== undefined) {
      if (typeof params === "string") {
        if (params.match(/^[0-2].[0-9.]+$/)) {
          this.setValueOidString(params);
        } else {
          this.setValueName(params);
        }
      } else if (params.oid !== undefined) {
        this.setValueOidString(params.oid);
      } else if (params.hex !== undefined) {
        this.setValueHex(params.hex);
      } else if (params.name !== undefined) {
        this.setValueName(params.name);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER Enumerated
   * @name KJUR.asn1.DEREnumerated
   * @class class for ASN.1 DER Enumerated
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>int - specify initial ASN.1 value(V) by integer value</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   * @example
   * new KJUR.asn1.DEREnumerated(123);
   * new KJUR.asn1.DEREnumerated({int: 123});
   * new KJUR.asn1.DEREnumerated({hex: '1fad'});
   */

  KJUR.asn1.DEREnumerated = function (params) {
    KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
    this.hT = "0a";
    /**
     * set value by Tom Wu's BigInteger object
     * @name setByBigInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {BigInteger} bigIntegerValue to set
     */

    this.setByBigInteger = function (bigIntegerValue) {
      this.hTLV = null;
      this.isModified = true;
      this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
    };
    /**
     * set value by integer value
     * @name setByInteger
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {Integer} integer value to set
     */


    this.setByInteger = function (intValue) {
      var bi = new BigInteger(String(intValue), 10);
      this.setByBigInteger(bi);
    };
    /**
     * set value by integer value
     * @name setValueHex
     * @memberOf KJUR.asn1.DEREnumerated#
     * @function
     * @param {String} hexadecimal string of integer value
     * @description
     * <br/>
     * NOTE: Value shall be represented by minimum octet length of
     * two's complement representation.
     */


    this.setValueHex = function (newHexString) {
      this.hV = newHexString;
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['int'] != "undefined") {
        this.setByInteger(params['int']);
      } else if (typeof params == "number") {
        this.setByInteger(params);
      } else if (typeof params['hex'] != "undefined") {
        this.setValueHex(params['hex']);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object); // ********************************************************************

  /**
   * class for ASN.1 DER UTF8String
   * @name KJUR.asn1.DERUTF8String
   * @class class for ASN.1 DER UTF8String
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERUTF8String = function (params) {
    KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
    this.hT = "0c";
  };

  YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER NumericString
   * @name KJUR.asn1.DERNumericString
   * @class class for ASN.1 DER NumericString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERNumericString = function (params) {
    KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
    this.hT = "12";
  };

  YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER PrintableString
   * @name KJUR.asn1.DERPrintableString
   * @class class for ASN.1 DER PrintableString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERPrintableString = function (params) {
    KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
    this.hT = "13";
  };

  YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER TeletexString
   * @name KJUR.asn1.DERTeletexString
   * @class class for ASN.1 DER TeletexString
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERTeletexString = function (params) {
    KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
    this.hT = "14";
  };

  YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER IA5String
   * @name KJUR.asn1.DERIA5String
   * @class class for ASN.1 DER IA5String
   * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
   * @extends KJUR.asn1.DERAbstractString
   * @description
   * @see KJUR.asn1.DERAbstractString - superclass
   */

  KJUR.asn1.DERIA5String = function (params) {
    KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
    this.hT = "16";
  };

  YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString); // ********************************************************************

  /**
   * class for ASN.1 DER UTCTime
   * @name KJUR.asn1.DERUTCTime
   * @class class for ASN.1 DER UTCTime
   * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
   * @extends KJUR.asn1.DERAbstractTime
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * <li>date - specify Date object.</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   * <h4>EXAMPLES</h4>
   * @example
   * d1 = new KJUR.asn1.DERUTCTime();
   * d1.setString('130430125959Z');
   *
   * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
   * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
   * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
   */

  KJUR.asn1.DERUTCTime = function (params) {
    KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
    this.hT = "17";
    /**
     * set value by a Date object<br/>
     * @name setByDate
     * @memberOf KJUR.asn1.DERUTCTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * o = new KJUR.asn1.DERUTCTime();
     * o.setByDate(new Date("2016/12/31"));
     */

    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, 'utc');
      this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
      if (typeof this.date == "undefined" && typeof this.s == "undefined") {
        this.date = new Date();
        this.s = this.formatDate(this.date, 'utc');
        this.hV = stohex(this.s);
      }

      return this.hV;
    };

    if (params !== undefined) {
      if (params.str !== undefined) {
        this.setString(params.str);
      } else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
        this.setString(params);
      } else if (params.hex !== undefined) {
        this.setStringHex(params.hex);
      } else if (params.date !== undefined) {
        this.setByDate(params.date);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

  /**
   * class for ASN.1 DER GeneralizedTime
   * @name KJUR.asn1.DERGeneralizedTime
   * @class class for ASN.1 DER GeneralizedTime
   * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
   * @property {Boolean} withMillis flag to show milliseconds or not
   * @extends KJUR.asn1.DERAbstractTime
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
   * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
   * <li>date - specify Date object.</li>
   * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
   * </ul>
   * NOTE1: 'params' can be omitted.
   * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
   */

  KJUR.asn1.DERGeneralizedTime = function (params) {
    KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
    this.hT = "18";
    this.withMillis = false;
    /**
     * set value by a Date object
     * @name setByDate
     * @memberOf KJUR.asn1.DERGeneralizedTime#
     * @function
     * @param {Date} dateObject Date object to set ASN.1 value(V)
     * @example
     * When you specify UTC time, use 'Date.UTC' method like this:<br/>
     * o1 = new DERUTCTime();
     * o1.setByDate(date);
     *
     * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
     */

    this.setByDate = function (dateObject) {
      this.hTLV = null;
      this.isModified = true;
      this.date = dateObject;
      this.s = this.formatDate(this.date, 'gen', this.withMillis);
      this.hV = stohex(this.s);
    };

    this.getFreshValueHex = function () {
      if (this.date === undefined && this.s === undefined) {
        this.date = new Date();
        this.s = this.formatDate(this.date, 'gen', this.withMillis);
        this.hV = stohex(this.s);
      }

      return this.hV;
    };

    if (params !== undefined) {
      if (params.str !== undefined) {
        this.setString(params.str);
      } else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
        this.setString(params);
      } else if (params.hex !== undefined) {
        this.setStringHex(params.hex);
      } else if (params.date !== undefined) {
        this.setByDate(params.date);
      }

      if (params.millis === true) {
        this.withMillis = true;
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime); // ********************************************************************

  /**
   * class for ASN.1 DER Sequence
   * @name KJUR.asn1.DERSequence
   * @class class for ASN.1 DER Sequence
   * @extends KJUR.asn1.DERAbstractStructured
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>array - specify array of ASN1Object to set elements of content</li>
   * </ul>
   * NOTE: 'params' can be omitted.
   */

  KJUR.asn1.DERSequence = function (params) {
    KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
    this.hT = "30";

    this.getFreshValueHex = function () {
      var h = '';

      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        h += asn1Obj.getEncodedHex();
      }

      this.hV = h;
      return this.hV;
    };
  };

  YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured); // ********************************************************************

  /**
   * class for ASN.1 DER Set
   * @name KJUR.asn1.DERSet
   * @class class for ASN.1 DER Set
   * @extends KJUR.asn1.DERAbstractStructured
   * @description
   * <br/>
   * As for argument 'params' for constructor, you can specify one of
   * following properties:
   * <ul>
   * <li>array - specify array of ASN1Object to set elements of content</li>
   * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
   * </ul>
   * NOTE1: 'params' can be omitted.<br/>
   * NOTE2: sortflag is supported since 1.0.5.
   */

  KJUR.asn1.DERSet = function (params) {
    KJUR.asn1.DERSet.superclass.constructor.call(this, params);
    this.hT = "31";
    this.sortFlag = true; // item shall be sorted only in ASN.1 DER

    this.getFreshValueHex = function () {
      var a = new Array();

      for (var i = 0; i < this.asn1Array.length; i++) {
        var asn1Obj = this.asn1Array[i];
        a.push(asn1Obj.getEncodedHex());
      }

      if (this.sortFlag == true) a.sort();
      this.hV = a.join('');
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params.sortflag != "undefined" && params.sortflag == false) this.sortFlag = false;
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured); // ********************************************************************

  /**
   * class for ASN.1 DER TaggedObject
   * @name KJUR.asn1.DERTaggedObject
   * @class class for ASN.1 DER TaggedObject
   * @extends KJUR.asn1.ASN1Object
   * @description
   * <br/>
   * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
   * For example, if you find '[1]' tag in a ASN.1 dump,
   * 'tagNoHex' will be 'a1'.
   * <br/>
   * As for optional argument 'params' for constructor, you can specify *ANY* of
   * following properties:
   * <ul>
   * <li>explicit - specify true if this is explicit tag otherwise false
   *     (default is 'true').</li>
   * <li>tag - specify tag (default is 'a0' which means [0])</li>
   * <li>obj - specify ASN1Object which is tagged</li>
   * </ul>
   * @example
   * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
   * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
   * hex = d2.getEncodedHex();
   */

  KJUR.asn1.DERTaggedObject = function (params) {
    KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
    this.hT = "a0";
    this.hV = '';
    this.isExplicit = true;
    this.asn1Object = null;
    /**
     * set value by an ASN1Object
     * @name setString
     * @memberOf KJUR.asn1.DERTaggedObject#
     * @function
     * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
     * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
     * @param {ASN1Object} asn1Object ASN.1 to encapsulate
     */

    this.setASN1Object = function (isExplicitFlag, tagNoHex, asn1Object) {
      this.hT = tagNoHex;
      this.isExplicit = isExplicitFlag;
      this.asn1Object = asn1Object;

      if (this.isExplicit) {
        this.hV = this.asn1Object.getEncodedHex();
        this.hTLV = null;
        this.isModified = true;
      } else {
        this.hV = null;
        this.hTLV = asn1Object.getEncodedHex();
        this.hTLV = this.hTLV.replace(/^../, tagNoHex);
        this.isModified = false;
      }
    };

    this.getFreshValueHex = function () {
      return this.hV;
    };

    if (typeof params != "undefined") {
      if (typeof params['tag'] != "undefined") {
        this.hT = params['tag'];
      }

      if (typeof params['explicit'] != "undefined") {
        this.isExplicit = params['explicit'];
      }

      if (typeof params['obj'] != "undefined") {
        this.asn1Object = params['obj'];
        this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
      }
    }
  };

  YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
  /**
   * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
   * This object is just a decorator for parsing the key parameter
   * @param {string|Object} key - The key in string format, or an object containing
   * the parameters needed to build a RSAKey object.
   * @constructor
   */

  var JSEncryptRSAKey =
  /** @class */
  function (_super) {
    __extends(JSEncryptRSAKey, _super);

    function JSEncryptRSAKey(key) {
      var _this = _super.call(this) || this; // Call the super constructor.
      //  RSAKey.call(this);
      // If a key key was provided.


      if (key) {
        // If this is a string...
        if (typeof key === "string") {
          _this.parseKey(key);
        } else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) || JSEncryptRSAKey.hasPublicKeyProperty(key)) {
          // Set the values for the key.
          _this.parsePropertiesFrom(key);
        }
      }

      return _this;
    }
    /**
     * Method to parse a pem encoded string containing both a public or private key.
     * The method will translate the pem encoded string in a der encoded string and
     * will parse private key and public key parameters. This method accepts public key
     * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
     *
     * @todo Check how many rsa formats use the same format of pkcs #1.
     *
     * The format is defined as:
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * it's possible to examine the structure of the keys obtained from openssl using
     * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
     * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
     * @private
     */


    JSEncryptRSAKey.prototype.parseKey = function (pem) {
      try {
        var modulus = 0;
        var public_exponent = 0;
        var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
        var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
        var asn1 = ASN1.decode(der); // Fixes a bug with OpenSSL 1.0+ private keys

        if (asn1.sub.length === 3) {
          asn1 = asn1.sub[2].sub[0];
        }

        if (asn1.sub.length === 9) {
          // Parse the private key.
          modulus = asn1.sub[1].getHexStringValue(); // bigint

          this.n = parseBigInt(modulus, 16);
          public_exponent = asn1.sub[2].getHexStringValue(); // int

          this.e = parseInt(public_exponent, 16);
          var private_exponent = asn1.sub[3].getHexStringValue(); // bigint

          this.d = parseBigInt(private_exponent, 16);
          var prime1 = asn1.sub[4].getHexStringValue(); // bigint

          this.p = parseBigInt(prime1, 16);
          var prime2 = asn1.sub[5].getHexStringValue(); // bigint

          this.q = parseBigInt(prime2, 16);
          var exponent1 = asn1.sub[6].getHexStringValue(); // bigint

          this.dmp1 = parseBigInt(exponent1, 16);
          var exponent2 = asn1.sub[7].getHexStringValue(); // bigint

          this.dmq1 = parseBigInt(exponent2, 16);
          var coefficient = asn1.sub[8].getHexStringValue(); // bigint

          this.coeff = parseBigInt(coefficient, 16);
        } else if (asn1.sub.length === 2) {
          // Parse the public key.
          var bit_string = asn1.sub[1];
          var sequence = bit_string.sub[0];
          modulus = sequence.sub[0].getHexStringValue();
          this.n = parseBigInt(modulus, 16);
          public_exponent = sequence.sub[1].getHexStringValue();
          this.e = parseInt(public_exponent, 16);
        } else {
          return false;
        }

        return true;
      } catch (ex) {
        return false;
      }
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa key.
     *
     * The translation follow the ASN.1 notation :
     * RSAPrivateKey ::= SEQUENCE {
     *   version           Version,
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER,  -- e
     *   privateExponent   INTEGER,  -- d
     *   prime1            INTEGER,  -- p
     *   prime2            INTEGER,  -- q
     *   exponent1         INTEGER,  -- d mod (p1)
     *   exponent2         INTEGER,  -- d mod (q-1)
     *   coefficient       INTEGER,  -- (inverse of q) mod p
     * }
     * @returns {string}  DER Encoded String representing the rsa private key
     * @private
     */


    JSEncryptRSAKey.prototype.getPrivateBaseKey = function () {
      var options = {
        array: [new KJUR.asn1.DERInteger({
          "int": 0
        }), new KJUR.asn1.DERInteger({
          bigint: this.n
        }), new KJUR.asn1.DERInteger({
          "int": this.e
        }), new KJUR.asn1.DERInteger({
          bigint: this.d
        }), new KJUR.asn1.DERInteger({
          bigint: this.p
        }), new KJUR.asn1.DERInteger({
          bigint: this.q
        }), new KJUR.asn1.DERInteger({
          bigint: this.dmp1
        }), new KJUR.asn1.DERInteger({
          bigint: this.dmq1
        }), new KJUR.asn1.DERInteger({
          bigint: this.coeff
        })]
      };
      var seq = new KJUR.asn1.DERSequence(options);
      return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function () {
      return hex2b64(this.getPrivateBaseKey());
    };
    /**
     * Translate rsa parameters in a hex encoded string representing the rsa public key.
     * The representation follow the ASN.1 notation :
     * PublicKeyInfo ::= SEQUENCE {
     *   algorithm       AlgorithmIdentifier,
     *   PublicKey       BIT STRING
     * }
     * Where AlgorithmIdentifier is:
     * AlgorithmIdentifier ::= SEQUENCE {
     *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
     *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
     * }
     * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
     * RSAPublicKey ::= SEQUENCE {
     *   modulus           INTEGER,  -- n
     *   publicExponent    INTEGER   -- e
     * }
     * @returns {string} DER Encoded String representing the rsa public key
     * @private
     */


    JSEncryptRSAKey.prototype.getPublicBaseKey = function () {
      var first_sequence = new KJUR.asn1.DERSequence({
        array: [new KJUR.asn1.DERObjectIdentifier({
          oid: "1.2.840.113549.1.1.1"
        }), new KJUR.asn1.DERNull()]
      });
      var second_sequence = new KJUR.asn1.DERSequence({
        array: [new KJUR.asn1.DERInteger({
          bigint: this.n
        }), new KJUR.asn1.DERInteger({
          "int": this.e
        })]
      });
      var bit_string = new KJUR.asn1.DERBitString({
        hex: "00" + second_sequence.getEncodedHex()
      });
      var seq = new KJUR.asn1.DERSequence({
        array: [first_sequence, bit_string]
      });
      return seq.getEncodedHex();
    };
    /**
     * base64 (pem) encoded version of the DER encoded representation
     * @returns {string} pem encoded representation without header and footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function () {
      return hex2b64(this.getPublicBaseKey());
    };
    /**
     * wrap the string in block of width chars. The default value for rsa keys is 64
     * characters.
     * @param {string} str the pem encoded string without header and footer
     * @param {Number} [width=64] - the length the string has to be wrapped at
     * @returns {string}
     * @private
     */


    JSEncryptRSAKey.wordwrap = function (str, width) {
      width = width || 64;

      if (!str) {
        return str;
      }

      var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
      return str.match(RegExp(regex, "g")).join("\n");
    };
    /**
     * Retrieve the pem encoded private key
     * @returns {string} the pem encoded private key with header/footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPrivateKey = function () {
      var key = "-----BEGIN RSA PRIVATE KEY-----\n";
      key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
      key += "-----END RSA PRIVATE KEY-----";
      return key;
    };
    /**
     * Retrieve the pem encoded public key
     * @returns {string} the pem encoded public key with header/footer
     * @public
     */


    JSEncryptRSAKey.prototype.getPublicKey = function () {
      var key = "-----BEGIN PUBLIC KEY-----\n";
      key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
      key += "-----END PUBLIC KEY-----";
      return key;
    };
    /**
     * Check if the object contains the necessary parameters to populate the rsa modulus
     * and public exponent parameters.
     * @param {Object} [obj={}] - An object that may contain the two public key
     * parameters
     * @returns {boolean} true if the object contains both the modulus and the public exponent
     * properties (n and e)
     * @todo check for types of n and e. N should be a parseable bigInt object, E should
     * be a parseable integer number
     * @private
     */


    JSEncryptRSAKey.hasPublicKeyProperty = function (obj) {
      obj = obj || {};
      return obj.hasOwnProperty("n") && obj.hasOwnProperty("e");
    };
    /**
     * Check if the object contains ALL the parameters of an RSA key.
     * @param {Object} [obj={}] - An object that may contain nine rsa key
     * parameters
     * @returns {boolean} true if the object contains all the parameters needed
     * @todo check for types of the parameters all the parameters but the public exponent
     * should be parseable bigint objects, the public exponent should be a parseable integer number
     * @private
     */


    JSEncryptRSAKey.hasPrivateKeyProperty = function (obj) {
      obj = obj || {};
      return obj.hasOwnProperty("n") && obj.hasOwnProperty("e") && obj.hasOwnProperty("d") && obj.hasOwnProperty("p") && obj.hasOwnProperty("q") && obj.hasOwnProperty("dmp1") && obj.hasOwnProperty("dmq1") && obj.hasOwnProperty("coeff");
    };
    /**
     * Parse the properties of obj in the current rsa object. Obj should AT LEAST
     * include the modulus and public exponent (n, e) parameters.
     * @param {Object} obj - the object containing rsa parameters
     * @private
     */


    JSEncryptRSAKey.prototype.parsePropertiesFrom = function (obj) {
      this.n = obj.n;
      this.e = obj.e;

      if (obj.hasOwnProperty("d")) {
        this.d = obj.d;
        this.p = obj.p;
        this.q = obj.q;
        this.dmp1 = obj.dmp1;
        this.dmq1 = obj.dmq1;
        this.coeff = obj.coeff;
      }
    };

    return JSEncryptRSAKey;
  }(RSAKey);
  /**
   *
   * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
   * possible parameters are:
   * - default_key_size        {number}  default: 1024 the key size in bit
   * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
   * - log                     {boolean} default: false whether log warn/error or not
   * @constructor
   */


  var JSEncrypt =
  /** @class */
  function () {
    function JSEncrypt(options) {
      options = options || {};
      this.default_key_size = parseInt(options.default_key_size, 10) || 1024;
      this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type

      this.log = options.log || false; // The private and public key.

      this.key = null;
    }
    /**
     * Method to set the rsa key parameter (one method is enough to set both the public
     * and the private key, since the private key contains the public key paramenters)
     * Log a warning if logs are enabled
     * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
     * @public
     */


    JSEncrypt.prototype.setKey = function (key) {
      if (this.log && this.key) {
        console.warn("A key was already set, overriding existing.");
      }

      this.key = new JSEncryptRSAKey(key);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */


    JSEncrypt.prototype.setPrivateKey = function (privkey) {
      // Create the key.
      this.setKey(privkey);
    };
    /**
     * Proxy method for setKey, for api compatibility
     * @see setKey
     * @public
     */


    JSEncrypt.prototype.setPublicKey = function (pubkey) {
      // Sets the public key.
      this.setKey(pubkey);
    };
    /**
     * Proxy method for RSAKey object's decrypt, decrypt the string using the private
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str base64 encoded crypted string to decrypt
     * @return {string} the decrypted string
     * @public
     */


    JSEncrypt.prototype.decrypt = function (str) {
      // Return the decrypted string.
      try {
        return this.getKey().decrypt(b64tohex(str));
      } catch (ex) {
        return false;
      }
    };
    /**
     * Proxy method for RSAKey object's encrypt, encrypt the string using the public
     * components of the rsa key object. Note that if the object was not set will be created
     * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
     * @param {string} str the string to encrypt
     * @return {string} the encrypted string encoded in base64
     * @public
     */


    JSEncrypt.prototype.encrypt = function (str) {
      // Return the encrypted string.
      try {
        return hex2b64(this.getKey().encrypt(str));
      } catch (ex) {
        return false;
      }
    };
    /**
     * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
     * will be created and returned
     * @param {callback} [cb] the callback to be called if we want the key to be generated
     * in an async fashion
     * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
     * @public
     */


    JSEncrypt.prototype.getKey = function (cb) {
      // Only create new if it does not exist.
      if (!this.key) {
        // Get a new private key.
        this.key = new JSEncryptRSAKey();

        if (cb && {}.toString.call(cb) === "[object Function]") {
          this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
          return;
        } // Generate the key.


        this.key.generate(this.default_key_size, this.default_public_exponent);
      }

      return this.key;
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITH header and footer
     * @public
     */


    JSEncrypt.prototype.getPrivateKey = function () {
      // Return the private representation of this key.
      return this.getKey().getPrivateKey();
    };
    /**
     * Returns the pem encoded representation of the private key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the private key WITHOUT header and footer
     * @public
     */


    JSEncrypt.prototype.getPrivateKeyB64 = function () {
      // Return the private representation of this key.
      return this.getKey().getPrivateBaseKeyB64();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITH header and footer
     * @public
     */


    JSEncrypt.prototype.getPublicKey = function () {
      // Return the private representation of this key.
      return this.getKey().getPublicKey();
    };
    /**
     * Returns the pem encoded representation of the public key
     * If the key doesn't exists a new key will be created
     * @returns {string} pem encoded representation of the public key WITHOUT header and footer
     * @public
     */


    JSEncrypt.prototype.getPublicKeyB64 = function () {
      // Return the private representation of this key.
      return this.getKey().getPublicBaseKeyB64();
    };

    JSEncrypt.version = "3.0.0-beta.1";
    return JSEncrypt;
  }();

  window.JSEncrypt = JSEncrypt;
  exports.JSEncrypt = JSEncrypt;
  exports["default"] = JSEncrypt;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
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
//------QC-SOURCE-SPLIT------