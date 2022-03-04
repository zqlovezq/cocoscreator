
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