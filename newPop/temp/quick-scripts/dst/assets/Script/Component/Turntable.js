
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