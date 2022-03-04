
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