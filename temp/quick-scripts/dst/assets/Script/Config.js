
                (function() {
                    var nodeEnv = typeof require !== 'undefined' && typeof process !== 'undefined';
                    var __module = nodeEnv ? module : {exports:{}};
                    var __filename = 'preview-scripts/assets/Script/Config.js';
                    var __require = nodeEnv ? function (request) {
                        return cc.require(request);
                    } : function (request) {
                        return __quick_compile_project__.require(request, __filename);
                    };
                    function __define (exports, require, module) {
                        if (!nodeEnv) {__quick_compile_project__.registerModule(__filename, module);}"use strict";
cc._RF.push(module, '6b4a04rebRMUI4NhPKaXcvz', 'Config');
// Script/Config.js

"use strict";

exports.__esModule = true;
exports["default"] = void 0;
//物品属性
//速度： 0.8 ： 超慢 ：非常慢，1 ， 2 ：慢 ， 3 ： 一般，5 ：快 ， 6 ： 很快
var _default = {
  //钻石
  "Drill": {
    "score": 600,
    "speed": 10
  },
  "DrillMouse": {
    "score": 700,
    "speed": 10
  },
  "Tnt": {
    "score": 10,
    "speed": 7
  },
  "Mouse": {
    "score": 50,
    "speed": 10
  },
  "Red": {
    "score": 0,
    "speed": 10
  },
  "Mystery": {
    "score": 0,
    "speed": 10
  },
  //黄金 0
  "Gold-0": {
    "score": 50,
    "speed": 10
  },
  //黄金 1
  "Gold-1": {
    "score": 100,
    "speed": 8
  },
  //黄金 2
  "Gold-2": {
    "score": 150,
    "speed": 7
  },
  //黄金 3
  "Gold-3": {
    "score": 200,
    "speed": 5
  },
  //黄金 4
  "Gold-4": {
    "score": 300,
    "speed": 4
  },
  //黄金 5
  "Gold-5": {
    "score": 400,
    "speed": 3
  },
  //黄金 6
  "Gold-6": {
    "score": 500,
    "speed": 2
  },
  //石头 小
  "Stone-0": {
    "score": 10,
    "speed": 7
  },
  //石头 中
  "Stone-1": {
    "score": 30,
    "speed": 7
  },
  //石头 大
  "Stone-2": {
    "score": 60,
    "speed": 3
  }
};
exports["default"] = _default;
module.exports = exports["default"];

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFzc2V0cy9TY3JpcHQvQ29uZmlnLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO2VBQ2U7QUFDWDtBQUNBLFdBQVU7QUFDTixhQUFVLEdBREo7QUFFTixhQUFVO0FBRkosR0FGQztBQU1YLGdCQUFlO0FBQ1gsYUFBVSxHQURDO0FBRVgsYUFBVTtBQUZDLEdBTko7QUFVWCxTQUFRO0FBQ0osYUFBVSxFQUROO0FBRUosYUFBVTtBQUZOLEdBVkc7QUFjWCxXQUFVO0FBQ04sYUFBVSxFQURKO0FBRU4sYUFBVTtBQUZKLEdBZEM7QUFrQlgsU0FBUTtBQUNKLGFBQVUsQ0FETjtBQUVKLGFBQVU7QUFGTixHQWxCRztBQXNCWCxhQUFZO0FBQ1IsYUFBVSxDQURGO0FBRVIsYUFBVTtBQUZGLEdBdEJEO0FBMEJYO0FBQ0EsWUFBVztBQUNQLGFBQVUsRUFESDtBQUVQLGFBQVU7QUFGSCxHQTNCQTtBQStCWDtBQUNBLFlBQVc7QUFDUCxhQUFVLEdBREg7QUFFUCxhQUFVO0FBRkgsR0FoQ0E7QUFvQ1g7QUFDQSxZQUFXO0FBQ1AsYUFBVSxHQURIO0FBRVAsYUFBVTtBQUZILEdBckNBO0FBeUNYO0FBQ0EsWUFBVztBQUNQLGFBQVUsR0FESDtBQUVQLGFBQVU7QUFGSCxHQTFDQTtBQThDWDtBQUNBLFlBQVc7QUFDUCxhQUFVLEdBREg7QUFFUCxhQUFVO0FBRkgsR0EvQ0E7QUFtRFg7QUFDQSxZQUFXO0FBQ1AsYUFBVSxHQURIO0FBRVAsYUFBVTtBQUZILEdBcERBO0FBd0RYO0FBQ0EsWUFBVztBQUNQLGFBQVUsR0FESDtBQUVQLGFBQVU7QUFGSCxHQXpEQTtBQTZEWDtBQUNBLGFBQVk7QUFDUixhQUFVLEVBREY7QUFFUixhQUFVO0FBRkYsR0E5REQ7QUFrRVg7QUFDQSxhQUFZO0FBQ1IsYUFBVSxFQURGO0FBRVIsYUFBVTtBQUZGLEdBbkVEO0FBdUVYO0FBQ0EsYUFBWTtBQUNSLGFBQVUsRUFERjtBQUVSLGFBQVU7QUFGRjtBQXhFRCIsInNvdXJjZVJvb3QiOiIvIiwic291cmNlc0NvbnRlbnQiOlsiLy/nianlk4HlsZ7mgKdcbi8v6YCf5bqm77yaIDAuOCDvvJog6LaF5oWiIO+8mumdnuW4uOaFou+8jDEg77yMIDIg77ya5oWiIO+8jCAzIO+8miDkuIDoiKzvvIw1IO+8muW/qyDvvIwgNiDvvJog5b6I5b+rXG5leHBvcnQgZGVmYXVsdCB7XG4gICAgLy/pkrvnn7NcbiAgICBcIkRyaWxsXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDYwMCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIFwiRHJpbGxNb3VzZVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA3MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDEwXG4gICAgfSxcbiAgICBcIlRudFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMCxcbiAgICAgICAgXCJzcGVlZFwiIDogN1xuICAgIH0sXG4gICAgXCJNb3VzZVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIFwiUmVkXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDEwXG4gICAgfSxcbiAgICBcIk15c3RlcnlcIiA6IHtcbiAgICAgICAgXCJzY29yZVwiIDogMCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIC8v6buE6YeRIDBcbiAgICBcIkdvbGQtMFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MCxcbiAgICAgICAgXCJzcGVlZFwiIDogMTBcbiAgICB9LFxuICAgIC8v6buE6YeRIDFcbiAgICBcIkdvbGQtMVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDhcbiAgICB9LFxuICAgIC8v6buE6YeRIDJcbiAgICBcIkdvbGQtMlwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxNTAsXG4gICAgICAgIFwic3BlZWRcIiA6IDdcbiAgICB9LFxuICAgIC8v6buE6YeRIDNcbiAgICBcIkdvbGQtM1wiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAyMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDVcbiAgICB9LFxuICAgIC8v6buE6YeRIDRcbiAgICBcIkdvbGQtNFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAzMDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDRcbiAgICB9LFxuICAgIC8v6buE6YeRIDVcbiAgICBcIkdvbGQtNVwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA0MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDNcbiAgICB9LFxuICAgIC8v6buE6YeRIDZcbiAgICBcIkdvbGQtNlwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiA1MDAsXG4gICAgICAgIFwic3BlZWRcIiA6IDJcbiAgICB9LFxuICAgIC8v55+z5aS0IOWwj1xuICAgIFwiU3RvbmUtMFwiIDoge1xuICAgICAgICBcInNjb3JlXCIgOiAxMCxcbiAgICAgICAgXCJzcGVlZFwiIDogN1xuICAgIH0sXG4gICAgLy/nn7PlpLQg5LitXG4gICAgXCJTdG9uZS0xXCIgOiB7XG4gICAgICAgIFwic2NvcmVcIiA6IDMwLFxuICAgICAgICBcInNwZWVkXCIgOiA3XG4gICAgfSxcbiAgICAvL+efs+WktCDlpKdcbiAgICBcIlN0b25lLTJcIiA6IHtcbiAgICAgICAgXCJzY29yZVwiIDogNjAsXG4gICAgICAgIFwic3BlZWRcIiA6IDNcbiAgICB9LFxufSJdfQ==