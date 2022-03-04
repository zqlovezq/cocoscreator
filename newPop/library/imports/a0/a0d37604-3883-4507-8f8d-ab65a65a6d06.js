"use strict";
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