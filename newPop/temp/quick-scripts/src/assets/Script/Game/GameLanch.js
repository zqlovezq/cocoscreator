"use strict";
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