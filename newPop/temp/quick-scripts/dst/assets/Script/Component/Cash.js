
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