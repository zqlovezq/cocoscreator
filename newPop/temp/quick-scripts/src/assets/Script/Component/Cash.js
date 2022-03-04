"use strict";
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