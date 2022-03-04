
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